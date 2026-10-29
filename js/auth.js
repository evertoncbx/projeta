/**
 * PROJETA - Módulo de Autenticação Corporativa
 * Credenciais oficiais: Usuário C100502 (case-insensitive) | Senha 74271248
 */

const AUTH_CONFIG = {
    validUser: 'C100502',
    validPass: '74271248',
    storageKey: 'projeta_auth_session',
    userKey: 'projeta_auth_user'
};

const ProjetaAuth = {
    // Verifica se a sessão está ativa
    isAuthenticated() {
        try {
            const userLocal = typeof localStorage !== 'undefined' ? localStorage.getItem(AUTH_CONFIG.userKey) : null;
            const userSession = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem(AUTH_CONFIG.userKey) : null;
            const activeUser = userLocal || userSession;
            return !!(activeUser && activeUser.trim().toUpperCase() === AUTH_CONFIG.validUser);
        } catch (e) {
            console.error('[ProjetaAuth] Erro ao verificar autenticação:', e);
            return false;
        }
    },

    getCurrentUser() {
        try {
            const u = (typeof localStorage !== 'undefined' ? localStorage.getItem(AUTH_CONFIG.userKey) : null) ||
                      (typeof sessionStorage !== 'undefined' ? sessionStorage.getItem(AUTH_CONFIG.userKey) : null);
            return u ? u.trim().toUpperCase() : AUTH_CONFIG.validUser;
        } catch (e) {
            return AUTH_CONFIG.validUser;
        }
    },

    login(username, password, remember = true) {
        if (!username || !password) {
            return { success: false, message: 'Por favor, preencha a matrícula e a senha.' };
        }

        const normalizedUser = String(username).trim().toUpperCase();
        const trimmedPass = String(password).trim();

        if (normalizedUser !== AUTH_CONFIG.validUser || trimmedPass !== AUTH_CONFIG.validPass) {
            return {
                success: false,
                message: 'Usuário ou senha inválidos. Matrícula corporativa de 7 caracteres esperada (ex: C100502).'
            };
        }

        // Salva na persistência
        try {
            if (typeof localStorage !== 'undefined' && typeof sessionStorage !== 'undefined') {
                if (remember) {
                    localStorage.setItem(AUTH_CONFIG.userKey, normalizedUser);
                    localStorage.setItem(AUTH_CONFIG.storageKey, JSON.stringify({
                        user: normalizedUser,
                        authenticatedAt: new Date().toISOString()
                    }));
                } else {
                    sessionStorage.setItem(AUTH_CONFIG.userKey, normalizedUser);
                    sessionStorage.setItem(AUTH_CONFIG.storageKey, JSON.stringify({
                        user: normalizedUser,
                        authenticatedAt: new Date().toISOString()
                    }));
                }
            }
        } catch (e) {
            console.warn('[ProjetaAuth] Falha no storage:', e);
        }

        return { success: true, user: normalizedUser };
    },

    logout() {
        try {
            localStorage.removeItem(AUTH_CONFIG.userKey);
            localStorage.removeItem(AUTH_CONFIG.storageKey);
            sessionStorage.removeItem(AUTH_CONFIG.userKey);
            sessionStorage.removeItem(AUTH_CONFIG.storageKey);
        } catch (e) {
            console.warn('[ProjetaAuth] Falha ao limpar storage:', e);
        }
        ProjetaAuth.applyAuthState();
    },

    applyAuthState() {
        if (typeof document === 'undefined') return;
        const overlay = document.getElementById('loginScreenOverlay');
        const userBadge = document.getElementById('userBadge');
        const userProfileArea = document.getElementById('userProfileArea');

        if (this.isAuthenticated()) {
            if (overlay) overlay.style.display = 'none';
            if (userProfileArea) userProfileArea.style.display = 'flex';
            if (userBadge) userBadge.textContent = `👤 ${this.getCurrentUser()}`;
        } else {
            if (overlay) {
                overlay.style.display = 'flex';
                const userInp = document.getElementById('loginUser');
                const passInp = document.getElementById('loginPass');
                if (passInp) passInp.value = '';
                if (userInp) {
                    userInp.value = '';
                    setTimeout(() => userInp.focus(), 100);
                }
                const alertEl = document.getElementById('loginAlert');
                if (alertEl) alertEl.style.display = 'none';
            }
            if (userProfileArea) userProfileArea.style.display = 'none';
        }
    }
};

// Handlers globais para eventos na UI
function handleLoginSubmit(event) {
    if (event) event.preventDefault();
    const userInp = document.getElementById('loginUser');
    const passInp = document.getElementById('loginPass');
    const remInp = document.getElementById('loginRemember');
    const alertEl = document.getElementById('loginAlert');

    const username = userInp ? userInp.value : '';
    const password = passInp ? passInp.value : '';
    const remember = remInp ? remInp.checked : true;

    const res = ProjetaAuth.login(username, password, remember);

    if (res.success) {
        if (alertEl) alertEl.style.display = 'none';
        ProjetaAuth.applyAuthState();
        if (typeof showToast === 'function') {
            showToast(`✅ Autenticado com sucesso! Bem-vindo, ${res.user}.`, 'success');
        }
    } else {
        if (alertEl) {
            alertEl.textContent = res.message;
            alertEl.style.display = 'block';
            alertEl.classList.remove('shake-anim');
            void alertEl.offsetWidth; // trigger reflow
            alertEl.classList.add('shake-anim');
        }
        if (passInp) {
            passInp.value = '';
            passInp.focus();
        }
    }
}

function handleLogout() {
    if (confirm('Deseja realmente encerrar sua sessão corporativa no Projeta?')) {
        ProjetaAuth.logout();
        if (typeof showToast === 'function') {
            showToast('🔒 Sessão encerrada com sucesso.', 'info');
        }
    }
}

function togglePasswordVisibility() {
    const passInp = document.getElementById('loginPass');
    if (!passInp) return;
    passInp.type = passInp.type === 'password' ? 'text' : 'password';
}

// Auto-inicialização na carga do documento
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => ProjetaAuth.applyAuthState());
    } else {
        ProjetaAuth.applyAuthState();
    }
}

// Exportações globais
if (typeof window !== 'undefined') {
    window.ProjetaAuth = ProjetaAuth;
    window.handleLoginSubmit = handleLoginSubmit;
    window.handleLogout = handleLogout;
    window.togglePasswordVisibility = togglePasswordVisibility;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ProjetaAuth, AUTH_CONFIG };
}
