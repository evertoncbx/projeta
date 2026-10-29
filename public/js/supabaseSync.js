/**
 * Projeta - Módulo de Sincronização em Nuvem (Supabase Storage & Database)
 * Garante persistência multi-dispositivo segura e fallback automático para cache local.
 */

const SUPABASE_CONFIG = {
    url: 'https://fvsrnuovfzcugkwdwixs.supabase.co',
    anonKey: 'sb_publishable_y61ZayzWcRQSTHLQ0sqaZg_Z5NdiHpk',
    bucket: 'bridge-files',
    fileName: 'projeta_projects.json'
};

const ProjetaCloud = {
    // Carrega todos os projetos do Supabase Storage
    async loadProjects() {
        const publicUrl = `${SUPABASE_CONFIG.url}/storage/v1/object/public/${SUPABASE_CONFIG.bucket}/${SUPABASE_CONFIG.fileName}?_t=${Date.now()}`;
        try {
            const resp = await fetch(publicUrl, { cache: 'no-cache' });
            if (resp.ok) {
                const projects = await resp.json();
                if (Array.isArray(projects) && projects.length > 0) {
                    localStorage.setItem('projeta_projects_cache', JSON.stringify(projects));
                    this.updateCloudStatus(true);
                    return projects;
                }
            }
        } catch (err) {
            console.warn('[ProjetaCloud] Falha na rede ao conectar ao Supabase, tentando cache local:', err);
        }

        // Fallback para cache local
        const cached = localStorage.getItem('projeta_projects_cache');
        if (cached) {
            try {
                this.updateCloudStatus(false);
                return JSON.parse(cached);
            } catch (e) {
                console.error('[ProjetaCloud] Erro ao ler cache local:', e);
            }
        }

        return [];
    },

    // Salva a lista inteira de projetos no Supabase Storage
    async saveProjects(projectsList) {
        if (!Array.isArray(projectsList)) return false;

        // Salva imediatamente em cache local
        localStorage.setItem('projeta_projects_cache', JSON.stringify(projectsList));

        // Envia para o Supabase Storage via REST com upsert
        const uploadUrl = `${SUPABASE_CONFIG.url}/storage/v1/object/${SUPABASE_CONFIG.bucket}/${SUPABASE_CONFIG.fileName}`;
        const blob = new Blob([JSON.stringify(projectsList, null, 2)], { type: 'application/json' });

        try {
            const resp = await fetch(uploadUrl, {
                method: 'POST',
                headers: {
                    'apikey': SUPABASE_CONFIG.anonKey,
                    'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
                    'Content-Type': 'application/json',
                    'x-upsert': 'true'
                },
                body: blob
            });

            if (resp.ok) {
                this.updateCloudStatus(true);
                return true;
            } else {
                console.error('[ProjetaCloud] Erro no upload Supabase:', resp.status, await resp.text());
                this.updateCloudStatus(false);
                return false;
            }
        } catch (err) {
            console.error('[ProjetaCloud] Erro de rede ao sincronizar:', err);
            this.updateCloudStatus(false);
            return false;
        }
    },

    updateCloudStatus(isOnline) {
        const badge = document.getElementById('cloudBadge');
        if (!badge) return;
        if (isOnline) {
            badge.style.background = '#059669';
            badge.innerHTML = '☁️ Supabase Nuvem (Sincronizado)';
            badge.title = 'Dados gravados no Supabase Storage em tempo real';
        } else {
            badge.style.background = '#d97706';
            badge.innerHTML = '⚠️ Modo Cache Local';
            badge.title = 'Sem conexão no momento. Alterações salvas localmente e sincronizadas quando restabelecido.';
        }
    }
};
