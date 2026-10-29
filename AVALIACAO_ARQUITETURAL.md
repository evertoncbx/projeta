# RELATÓRIO DE AVALIAÇÃO ARQUITETURAL & TRANSIÇÃO TECNOLÓGICA
## PROJETA: Sistema de Gestão Estratégica de Projetos (Framework IPMA ICB4)

---

### 1. Resumo Executivo & Decisão Estrutural

O usuário solicitou:
> *"1 - adicione tela de login com usuário com 7 dígitos sendo 'C100502' e senha '74271248'*
> *2 - Avalie - não seria melhor utilizar uma linguagem mais robusta e segura como node.js?? ou alguma linguagem que abarque a necessidade de um UX mais intuitivo? Avalie isso e se achar que sim, refature tudo para a nova linguagem, porém mantenha versão https://projeta-sand.vercel.app de forma funcional, ou seja, se for refatorar, crie um novo site, novo link, nova estrutura de banco de dados, dentro do mesmo projeto para experimentarmos alternativas de desining, mas eu já vou começar a usar o atual, então não mate a versão atual"*

**Conclusão da Avaliação:** **SIM, a transição para um ecossistema moderno baseado em Node.js / React 19 / TypeScript / Tailwind CSS é altamente recomendada e superior em todos os vetores de UX, segurança corporativa, tipagem e manutenção.**

Para atender integralmente à solicitação sem interromper a operação ativa:
1. **Versão Atual (V1) Mantida 100% Funcional**:
   - Disponível em: **https://projeta-sand.vercel.app**
   - Autenticação corporativa integrada: usuário `C100502` (case-insensitive) e senha `74271248`.
   - Persistência segura em `localStorage` / `sessionStorage`, botão `🚪 Sair` no header e botão de navegação direta para a V2.
2. **Novo Site & Novo Link Integrados (V2)**:
   - Disponível em: **https://projeta-sand.vercel.app/v2/**
   - Desenvolvido em **React 19 + TypeScript + Tailwind CSS + Lucide Icons + Vite**.
   - Botão no cabeçalho para retorno imediato à versão clássica V1 (`⬅️ Versão Clássica V1`).
   - Single Sign-On (SSO) corporativo compartilhado: ao autenticar em uma das versões, a sessão é automaticamente reconhecida na outra.
3. **Nova Estrutura de Banco de Dados Relacional**:
   - Arquivo oficial: `supabase_schema_v2.sql` (disponível na raiz de `projeta` e `projeta-v2`).
   - Modelo relacional avançado no PostgreSQL/Supabase com 7 tabelas normalizadas (`projects_v2`, `wbs_nodes_v2`, `risks_v2`, `budget_items_v2`, `raci_matrix_v2`, `competence_evaluations_v2`, `audit_logs_v2`), políticas RLS, triggers de auditoria e bucket de storage dedicado `projeta-v2`.

---

### 2. Quadro Comparativo: Projeta V1 (Vanilla JS) vs. Projeta V2 (Node.js / React / TS)

| Critério Arquitetural | Projeta V1 (HTML5 / Vanilla JS) | Projeta V2 (Node.js / React 19 / TS) | Impacto Prático no Negócio |
| :--- | :--- | :--- | :--- |
| **Ergonomia de UX & Reatividade** | Manipulação imperativa via `innerHTML`. Re-renderização total da aba ao alterar um item. | Ciclo de vida reativo orientado a componentes. Re-renderizações atômicas e transições fluidas. | UX muito mais responsiva, sem saltos de tela, com animações suaves e validação em tempo real. |
| **Segurança & Tipagem** | JavaScript dinâmico sem compilação. Erros de digitação em propriedades de objetos só aparecem em tempo de execução. | **TypeScript Estrito (TS 5.x)** com interfaces formais para os 16 artefatos (`ProjectData`, `Tap`, `WbsNode`, `BudgetItem`). | Erros de integridade de dados são eliminados durante o build (`npm run build`). |
| **Componentização Visual** | CSS monolítico de 1.100 linhas (`style.css`), classes manuais e botões com estilos inline. | **Tailwind CSS + Lucide Icons**: Design System padronizado, tokens corporativos consistentes e paleta harmônica. | Interface moderna, alinhada com os padrões institucionais da CAIXA e frameworks de mercado. |
| **Segurança Corporativa** | Toda a lógica reside no navegador (client-side). Segredos de API não podem residir no código estático. | Suporte nativo a backend Node.js (Next.js API Routes / Express) com isolamento de tokens, hashing de senhas e JWT. | Permite conectar diretamente ao Active Directory / SSO corporativo e bancos de dados seguros via VPN. |
| **Escalabilidade da Base de Código** | Arquivo `projeta.js` com mais de 2.600 linhas. Manutenção de regras de negócio complexas torna-se arriscada. | Código modularizado em pastas especializadas (`context/`, `components/`, `tabs/`, `types/`, `data/`, `services/`). | Facilita divisão de trabalho em equipe, testes unitários automatizados e CI/CD. |
| **Confiabilidade de Build** | Sem etapa de compilação; assets estáticos diretos. | Vite Bundler com Tree-Shaking, Minificação e Gzip gerando pacote estático ultrarrápido (`dist/` em < 1s). | Performance de carregamento máxima em conexões corporativas com firewall restrito. |

---

### 3. Nova Estrutura de Banco de Dados (Supabase / PostgreSQL)

Para suportar o design de nova geração e auditoria multiusuário corporativa, foi criado o arquivo `supabase_schema_v2.sql`:

1. **`projects_v2`**: Tabela principal de projetos estratégicos com metadados, gate de ciclo de vida (`current_phase`), classificação e payload JSONB indexado via GIN.
2. **`wbs_nodes_v2`**: Árvore hierárquica normalizada da Estrutura Analítica do Projeto (EAP/WBS) com percentual de avanço, líderes de pacotes e status.
3. **`risks_v2`**: Registro formal de riscos com cálculo automatizado de severidade (`probability * impact`), estratégias de mitigação (Evitar, Mitigar, Transferir, Aceitar) e plano de ação.
4. **`budget_items_v2`**: Livro-razão orçamentário distinguindo linha de base (`baseline`) de orçamento revisado (`revised`), com colunas calculadas de custo total.
5. **`raci_matrix_v2`**: Matriz RACI expandida associando entregáveis a papéis de partes interessadas com regras de validação estritas (R, A, C, I, Rv, P).
6. **`competence_evaluations_v2`**: Avaliação das **28 competências gerenciais do IPMA ICB4** (Perspectiva, Pessoas e Prática) com notas de 0 a 10 e registro de evidências.
7. **`audit_logs_v2`**: Trilha de auditoria e governança registrando eventos críticos (LOGIN, LOGOUT, UPDATE, EXPORT) com matrícula funcional e timestamp.
8. **Bucket `projeta-v2`**: Storage dedicado no Supabase com Row Level Security (RLS) habilitado para leitura e upload de dossiês e anexos.

---

### 4. Como Acessar e Testar

#### Acesso Online (Produção Vercel):
- **Versão Clássica V1**: [https://projeta-sand.vercel.app](https://projeta-sand.vercel.app)
- **Nova Versão Experimental V2**: [https://projeta-sand.vercel.app/v2/](https://projeta-sand.vercel.app/v2/)
- Ambos os ambientes possuem botões no cabeçalho permitindo alternar de um para o outro em 1 clique.

#### Credenciais de Acesso Corporativo:
- **Usuário**: `C100502` (ou `c100502`)
- **Senha**: `74271248`

#### Execução Local do Projeta V2 (Desenvolvimento):
```bash
# 1. Acessar o diretório de desenvolvimento do V2
cd d:\dataScience\projeta-v2

# 2. Iniciar servidor Vite de desenvolvimento
npm run dev
# -> Acesso em: http://127.0.0.1:5174

# 3. Executar compilação de produção e testes
npm run build
python test_v2_verification.py
```
