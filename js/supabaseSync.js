/**
 * Projeta - Módulo Avançado de Sincronização em Nuvem (Supabase Database + Storage + Cache Local)
 * Garante persistência multi-dispositivo segura, sincronização bidirecional e isolamento dedicado para o projeto Projeta.
 */

const DEFAULT_SUPABASE_CONFIG = {
    url: '', // URL do projeto dedicado 'projeta' no Supabase (ex: https://[ref].supabase.co)
    anonKey: '', // Chave pública anônima (anon public key) do projeto 'projeta'
    bucket: 'projeta',
    fileName: 'projeta_projects.json',
    tableName: 'projects',
    preferredEngine: 'hybrid' // 'table', 'storage', or 'hybrid'
};

function formatIsoDate(d) {
    if (!d) return null;
    const str = String(d).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(str)) return str;
    const m = str.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
    if (m) {
        const day = m[1].padStart(2, '0');
        const month = m[2].padStart(2, '0');
        return `${m[3]}-${month}-${day}`;
    }
    return null;
}

const ProjetaCloud = {
    // Obtém configuração ativa (personalizada pelo usuário ou padrão)
    getConfig() {
        try {
            const saved = localStorage.getItem('projeta_supabase_config');
            if (saved) {
                const parsed = JSON.parse(saved);
                // Previne reuso involuntário de URLs do uTrace
                if (parsed.url && parsed.url.includes('fvsrnuovfzcugkwdwixs')) {
                    localStorage.removeItem('projeta_supabase_config');
                    return { ...DEFAULT_SUPABASE_CONFIG };
                }
                return { ...DEFAULT_SUPABASE_CONFIG, ...parsed };
            }
        } catch (e) {
            console.warn('[ProjetaCloud] Erro ao carregar config salva:', e);
        }
        return { ...DEFAULT_SUPABASE_CONFIG };
    },

    // Salva configuração personalizada no localStorage
    saveConfig(customConfig) {
        try {
            localStorage.setItem('projeta_supabase_config', JSON.stringify(customConfig));
            return true;
        } catch (e) {
            console.error('[ProjetaCloud] Erro ao salvar config:', e);
            return false;
        }
    },

    // Restaura configurações para o padrão limpo
    resetConfig() {
        localStorage.removeItem('projeta_supabase_config');
    },

    // Verifica se há credenciais válidas configuradas
    isConfigured(cfg = null) {
        const c = cfg || this.getConfig();
        return Boolean(c.url && c.anonKey && c.url.startsWith('http') && !c.url.includes('fvsrnuovfzcugkwdwixs'));
    },

    // Testa a conectividade com a instância dedicada do Supabase
    async testConnection(config = null) {
        const cfg = config || this.getConfig();
        const results = {
            rest: false,
            storage: false,
            message: '',
            latencyMs: 0
        };

        if (!cfg.url || !cfg.anonKey || !cfg.url.startsWith('http')) {
            results.message = 'Por favor, informe a URL do Supabase (https://...) e a Chave Pública Anon.';
            return results;
        }

        const startTime = Date.now();
        const headers = {
            'apikey': cfg.anonKey,
            'Authorization': `Bearer ${cfg.anonKey}`,
            'Content-Type': 'application/json'
        };

        // 1. Testa PostgREST (Tabela 'projects')
        try {
            const tableResp = await fetch(`${cfg.url}/rest/v1/${cfg.tableName}?select=id&limit=1`, {
                method: 'GET',
                headers
            });
            results.rest = tableResp.ok;
        } catch (e) {
            results.rest = false;
        }

        // 2. Testa Storage (Listagem no bucket dedicado 'projeta')
        try {
            const storageResp = await fetch(`${cfg.url}/storage/v1/object/list/${cfg.bucket}`, {
                method: 'POST',
                headers,
                body: JSON.stringify({ prefix: '', limit: 1 })
            });
            results.storage = storageResp.ok;
        } catch (e) {
            results.storage = false;
        }

        results.latencyMs = Date.now() - startTime;

        if (results.rest && results.storage) {
            results.message = `Conexão completa estabelecida com sucesso! (Latência: ${results.latencyMs}ms - Tabela '${cfg.tableName}' e Bucket '${cfg.bucket}' ativos)`;
        } else if (results.rest) {
            results.message = `Conexão com Banco de Dados OK! Tabela '${cfg.tableName}' acessível. (Latência: ${results.latencyMs}ms)`;
        } else if (results.storage) {
            results.message = `Conexão com Storage OK! Bucket '${cfg.bucket}' acessível. (Latência: ${results.latencyMs}ms)`;
        } else {
            results.message = 'Não foi possível conectar. Verifique se o projeto Projeta foi criado no Supabase e se o script SQL foi executado.';
        }

        return results;
    },

    // Carrega todos os projetos da Nuvem com estratégia em cascata (Table -> Storage -> Cache)
    async loadProjects() {
        const cfg = this.getConfig();

        if (this.isConfigured(cfg)) {
            const headers = {
                'apikey': cfg.anonKey,
                'Authorization': `Bearer ${cfg.anonKey}`,
                'Content-Type': 'application/json'
            };

            // 1. Tenta carregar do Banco de Dados Relacional (PostgREST)
            try {
                const tableUrl = `${cfg.url}/rest/v1/${cfg.tableName}?select=*&order=updated_at.desc`;
                const resp = await fetch(tableUrl, { method: 'GET', headers, cache: 'no-cache' });
                if (resp.ok) {
                    const rows = await resp.json();
                    if (Array.isArray(rows) && rows.length > 0) {
                        const projects = rows.map(r => (r.data ? r.data : r));
                        localStorage.setItem('projeta_projects_cache', JSON.stringify(projects));
                        this.updateCloudStatus(true, 'Banco PostgreSQL');
                        return projects;
                    }
                }
            } catch (err) {
                console.warn('[ProjetaCloud] Falha ao ler tabela do Supabase:', err);
            }

            // 2. Tenta carregar do Supabase Storage
            try {
                const storageUrl = `${cfg.url}/storage/v1/object/public/${cfg.bucket}/${cfg.fileName}?_t=${Date.now()}`;
                const resp = await fetch(storageUrl, { cache: 'no-cache' });
                if (resp.ok) {
                    const projects = await resp.json();
                    if (Array.isArray(projects) && projects.length > 0) {
                        localStorage.setItem('projeta_projects_cache', JSON.stringify(projects));
                        this.updateCloudStatus(true, 'Storage Nuvem');
                        return projects;
                    }
                }
            } catch (err) {
                console.warn('[ProjetaCloud] Falha ao ler storage do Supabase:', err);
            }
        }

        // 3. Fallback seguro para cache local
        const cached = localStorage.getItem('projeta_projects_cache');
        if (cached) {
            try {
                this.updateCloudStatus(this.isConfigured(cfg));
                return JSON.parse(cached);
            } catch (e) {
                console.error('[ProjetaCloud] Erro ao decodificar cache local:', e);
            }
        }

        this.updateCloudStatus(false);
        return [];
    },

    // Salva a lista de projetos na Nuvem com sincronização híbrida
    async saveProjects(projectsList) {
        if (!Array.isArray(projectsList)) return false;

        // Salva instantaneamente em cache local para persistência garantida
        localStorage.setItem('projeta_projects_cache', JSON.stringify(projectsList));

        const cfg = this.getConfig();
        if (!this.isConfigured(cfg)) {
            this.updateCloudStatus(false);
            return false;
        }

        const headers = {
            'apikey': cfg.anonKey,
            'Authorization': `Bearer ${cfg.anonKey}`,
            'Content-Type': 'application/json'
        };

        let dbSuccess = false;
        let storageSuccess = false;

        // 1. Sincroniza com Tabela do Supabase via upsert
        try {
            const records = projectsList.map(p => ({
                id: String(p.id),
                name: String(p.name || 'Projeto'),
                code: String(p.code || 'PRJ'),
                company: String(p.company || ''),
                client: String(p.client || ''),
                sponsor: String(p.sponsor || ''),
                manager: String(p.manager || ''),
                start_date: formatIsoDate(p.start_date || p.date),
                end_date: formatIsoDate(p.end_date),
                duration: String(p.duration || ''),
                status: String(p.status || 'Iniciação'),
                data: p,
                updated_at: new Date().toISOString()
            }));

            const tableUrl = `${cfg.url}/rest/v1/${cfg.tableName}?on_conflict=id`;
            const resp = await fetch(tableUrl, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Prefer': 'resolution=merge-duplicates'
                },
                body: JSON.stringify(records)
            });

            if (resp.ok || resp.status === 201 || resp.status === 204) {
                dbSuccess = true;
            }
        } catch (err) {
            console.warn('[ProjetaCloud] Falha ao sincronizar com tabela:', err);
        }

        // 2. Sincroniza com Storage do Supabase (backup em arquivo JSON)
        try {
            const uploadUrl = `${cfg.url}/storage/v1/object/${cfg.bucket}/${cfg.fileName}`;
            const blob = new Blob([JSON.stringify(projectsList, null, 2)], { type: 'application/json' });
            const resp = await fetch(uploadUrl, {
                method: 'POST',
                headers: {
                    ...headers,
                    'x-upsert': 'true'
                },
                body: blob
            });

            if (resp.ok) {
                storageSuccess = true;
            }
        } catch (err) {
            console.warn('[ProjetaCloud] Falha ao sincronizar com storage:', err);
        }

        const isOnline = dbSuccess || storageSuccess;
        this.updateCloudStatus(isOnline, dbSuccess && storageSuccess ? 'Banco + Storage' : (dbSuccess ? 'Banco PostgreSQL' : 'Storage Nuvem'));
        return isOnline;
    },

    // Atualiza badge de conectividade no Header
    updateCloudStatus(isOnline, engine = '') {
        const badge = document.getElementById('cloudBadge');
        if (!badge) return;

        const isCustom = this.isConfigured();

        if (!isCustom) {
            badge.style.background = '#475569';
            badge.style.color = '#ffffff';
            badge.innerHTML = '☁️ Conectar Supabase Projeta';
            badge.title = 'Clique para vincular a instância dedicada do Supabase (projeta).';
        } else if (isOnline) {
            badge.style.background = '#059669';
            badge.style.color = '#ffffff';
            badge.innerHTML = `☁️ Supabase Projeta (${engine || 'Sincronizado'})`;
            badge.title = 'Conectado à nuvem dedicada do Projeta. Clique para gerenciar conexão.';
        } else {
            badge.style.background = '#d97706';
            badge.style.color = '#ffffff';
            badge.innerHTML = '⚠️ Projeta Offline (Cache Local)';
            badge.title = 'Sem conexão com a nuvem no momento. Dados salvos localmente no navegador.';
        }
    }
};

// Abre o Modal de Configurações da Nuvem Supabase
window.openCloudConfigModal = function() {
    let modal = document.getElementById('cloudConfigModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'cloudConfigModal';
        modal.className = 'modal-backdrop';
        modal.innerHTML = `
            <div class="modal-dialog" style="max-width: 620px;">
                <div class="modal-header">
                    <h3 style="margin:0; font-size:17px; font-weight:700; color:#0f172a;">☁️ Conexão de Nuvem (Supabase Projeta)</h3>
                    <button type="button" class="btn-close" onclick="closeCloudConfigModal()" style="background:none; border:none; font-size:20px; cursor:pointer;">&times;</button>
                </div>
                <div class="modal-body" style="padding: 20px;">
                    <p style="font-size:13px; color:#64748b; margin-top:0;">
                        Configure os parâmetros de integração com a sua instância dedicada do <strong>Supabase (projeta)</strong>. 
                        O Projeta suporta persistência híbrida (Tabela PostgreSQL e Storage JSON com cache local resiliente).
                    </p>

                    <div class="form-group">
                        <label class="form-label">URL do Projeto Supabase (Project URL):</label>
                        <input type="text" id="cfgSupabaseUrl" class="form-control" placeholder="https://seu-projeto-projeta.supabase.co" style="font-family:monospace;">
                    </div>

                    <div class="form-group">
                        <label class="form-label">Chave Anon Pública (anon public key):</label>
                        <input type="password" id="cfgSupabaseKey" class="form-control" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." style="font-family:monospace;">
                    </div>

                    <div class="grid-2">
                        <div class="form-group">
                            <label class="form-label">Nome da Tabela PostgreSQL:</label>
                            <input type="text" id="cfgSupabaseTable" class="form-control" value="projects" placeholder="projects">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Nome do Bucket de Storage:</label>
                            <input type="text" id="cfgSupabaseBucket" class="form-control" value="projeta" placeholder="projeta">
                        </div>
                    </div>

                    <div id="cloudTestStatus" style="display:none; padding:10px 14px; border-radius:6px; font-size:12.5px; margin-bottom:14px;"></div>

                    <details style="margin-top:14px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:10px;">
                        <summary style="font-size:12.5px; font-weight:600; cursor:pointer; color:#0369a1;">📜 Ver / Copiar Script SQL Completo do Banco (Supabase SQL Editor)</summary>
                        <pre style="margin-top:8px; font-size:11px; max-height:160px; overflow-y:auto; background:#1e293b; color:#e2e8f0; padding:10px; border-radius:4px; white-space:pre-wrap;" id="sqlSchemaPre">-- 1. Cria Tabela de Projetos
CREATE TABLE IF NOT EXISTS public.projects (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    code TEXT NOT NULL,
    company TEXT NOT NULL,
    client TEXT,
    sponsor TEXT,
    manager TEXT,
    start_date DATE,
    end_date DATE,
    duration TEXT,
    status TEXT DEFAULT 'Iniciação',
    data JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_projects_company ON public.projects(company);
CREATE INDEX IF NOT EXISTS idx_projects_code ON public.projects(code);
CREATE INDEX IF NOT EXISTS idx_projects_status ON public.projects(status);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Acesso público projeta" ON public.projects FOR ALL USING (true) WITH CHECK (true);

-- 2. Cria Bucket de Storage 'projeta'
INSERT INTO storage.buckets (id, name, public) 
VALUES ('projeta', 'projeta', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Acesso público leitura storage projeta" 
ON storage.objects FOR SELECT USING (bucket_id = 'projeta');

CREATE POLICY "Acesso público escrita storage projeta" 
ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'projeta');

CREATE POLICY "Acesso público atualização storage projeta" 
ON storage.objects FOR UPDATE USING (bucket_id = 'projeta');

CREATE POLICY "Acesso público exclusão storage projeta" 
ON storage.objects FOR DELETE USING (bucket_id = 'projeta');</pre>
                        <button type="button" class="btn btn-outline" style="font-size:11.5px; padding:4px 8px; color:#0f172a; border-color:#cbd5e1;" onclick="copyProjetaSql()">📋 Copiar Script SQL</button>
                    </details>
                </div>
                <div class="modal-footer" style="padding:14px 20px; display:flex; justify-content:space-between; align-items:center; border-top:1px solid #e2e8f0;">
                    <button type="button" class="btn btn-outline" style="color:#dc2626; border-color:#fca5a5;" onclick="resetCloudConfig()">Restaurar Padrão</button>
                    <div style="display:flex; gap:8px;">
                        <button type="button" class="btn btn-outline" style="color:#0f172a; border-color:#cbd5e1;" onclick="testCloudConnectionUI()">⚡ Testar Conexão</button>
                        <button type="button" class="btn btn-success" onclick="saveCloudConfigUI()">💾 Salvar & Sincronizar</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    const cfg = ProjetaCloud.getConfig();
    document.getElementById('cfgSupabaseUrl').value = cfg.url || '';
    document.getElementById('cfgSupabaseKey').value = cfg.anonKey || '';
    document.getElementById('cfgSupabaseTable').value = cfg.tableName || 'projects';
    document.getElementById('cfgSupabaseBucket').value = cfg.bucket || 'projeta';
    modal.style.display = 'flex';
};

window.closeCloudConfigModal = function() {
    const modal = document.getElementById('cloudConfigModal');
    if (modal) modal.style.display = 'none';
};

window.testCloudConnectionUI = async function() {
    const statusBox = document.getElementById('cloudTestStatus');
    statusBox.style.display = 'block';
    statusBox.style.background = '#f1f5f9';
    statusBox.style.color = '#334155';
    statusBox.textContent = '⏳ Testando conexão com Supabase...';

    const testCfg = {
        url: document.getElementById('cfgSupabaseUrl').value.trim().replace(/\/+$/, ''),
        anonKey: document.getElementById('cfgSupabaseKey').value.trim(),
        tableName: document.getElementById('cfgSupabaseTable').value.trim() || 'projects',
        bucket: document.getElementById('cfgSupabaseBucket').value.trim() || 'projeta'
    };

    const res = await ProjetaCloud.testConnection(testCfg);
    if (res.rest || res.storage) {
        statusBox.style.background = '#dcfce7';
        statusBox.style.color = '#15803d';
        statusBox.innerHTML = `✅ ${res.message}`;
    } else {
        statusBox.style.background = '#fee2e2';
        statusBox.style.color = '#b91c1c';
        statusBox.innerHTML = `❌ ${res.message}`;
    }
};

window.saveCloudConfigUI = async function() {
    const newCfg = {
        url: document.getElementById('cfgSupabaseUrl').value.trim().replace(/\/+$/, ''),
        anonKey: document.getElementById('cfgSupabaseKey').value.trim(),
        tableName: document.getElementById('cfgSupabaseTable').value.trim() || 'projects',
        bucket: document.getElementById('cfgSupabaseBucket').value.trim() || 'projeta',
        fileName: 'projeta_projects.json'
    };

    ProjetaCloud.saveConfig(newCfg);
    closeCloudConfigModal();
    if (typeof showToast === 'function') {
        showToast('☁️ Configurações da Nuvem Supabase salvas!', 'success');
    }
    // Re-sincroniza os projetos
    if (typeof allProjects !== 'undefined' && Array.isArray(allProjects)) {
        await ProjetaCloud.saveProjects(allProjects);
    }
};

window.resetCloudConfig = function() {
    if (!confirm('Deseja restaurar as configurações padrão de conexão do Supabase?')) return;
    ProjetaCloud.resetConfig();
    const cfg = ProjetaCloud.getConfig();
    document.getElementById('cfgSupabaseUrl').value = cfg.url;
    document.getElementById('cfgSupabaseKey').value = cfg.anonKey;
    document.getElementById('cfgSupabaseTable').value = cfg.tableName;
    document.getElementById('cfgSupabaseBucket').value = cfg.bucket;
    if (typeof showToast === 'function') {
        showToast('Configurações da Nuvem restauradas para o padrão.', 'info');
    }
};

window.copyProjetaSql = function() {
    const pre = document.getElementById('sqlSchemaPre');
    if (!pre) return;
    navigator.clipboard.writeText(pre.innerText.trim()).then(() => {
        if (typeof showToast === 'function') showToast('📋 Script SQL copiado com sucesso!', 'success');
    }).catch(() => {
        alert('Script SQL:\n' + pre.innerText.trim());
    });
};

// Exporta globalmente para compatibilidade total
if (typeof window !== 'undefined') {
    window.ProjetaCloud = ProjetaCloud;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ProjetaCloud };
}
