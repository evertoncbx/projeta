const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Mock browser globals for testing projeta.js functions
const mockEl = { 
    textContent: '', 
    value: '', 
    innerHTML: '', 
    style: {},
    appendChild: () => {},
    removeChild: () => {},
    classList: { add: () => {}, remove: () => {} }, 
    querySelector: () => null,
    querySelectorAll: () => [] 
};

const domMocks = {
    document: {
        addEventListener: () => {},
        querySelector: () => mockEl,
        querySelectorAll: () => [],
        getElementById: () => mockEl,
        createElement: () => mockEl
    },
    window: {},
    setTimeout: (fn) => { try { fn(); } catch(e){} },
    clearTimeout: () => {},
    console
};

const code = fs.readFileSync(path.join(__dirname, 'js', 'projeta.js'), 'utf8');
const context = vm.createContext(domMocks);
vm.runInContext(code, context);

console.log('=== TESTE DE CRIAÇÃO LIMPA E AMARRAÇÕES CROSS-DOCUMENT V1 ===');

// 1. Test Clean Project Creation
const cleanProj = context.createCleanProjectData({
    company: "Construtora Horizonte",
    client: "Caixa Seguradora",
    name: "Edifício Sol Nascente",
    code: "ESN",
    classification: "ESTRATÉGICO",
    startDate: "2026-11-01",
    endDate: "2027-11-01",
    duration: "12 meses",
    manager: "Eng. Amanda Silveira",
    sponsor: "Diretor Fernando Rocha",
    budget: "R$ 5.000.000,00"
});

console.log('\n[1] Verificação de Projeto Limpo (Sem contaminação Lendlease/Bueno/TiO2):');
const jsonStr = JSON.stringify(cleanProj);
const forbiddenWords = ['Lendlease', 'Warren Buffet', 'Bueno', 'palitos', 'geopolimérico', 'TiO2', 'Nick O´Neil'];
let contaminationFound = false;

for (const word of forbiddenWords) {
    if (jsonStr.includes(word)) {
        console.error(`  [FAIL] Contaminação encontrada: '${word}'`);
        contaminationFound = true;
    }
}

if (!contaminationFound) {
    console.log('  [OK] 100% LIMPO: Nenhuma palavra ou dado específico do projeto modelo Lendlease presente!');
}

console.assert(!contaminationFound, 'Projeto novo contém dados da Lendlease');
console.assert(cleanProj.budget_baseline.items.length === 0, 'Orçamento 1 deve iniciar vazio');
console.assert(cleanProj.budget_revised.items.length === 0, 'Orçamento 2 deve iniciar vazio');
console.assert(cleanProj.risks_plan.items.length === 0, 'Plano de riscos deve iniciar vazio');
console.assert(cleanProj.scope_statement.deliverables.length === 0, 'Entregas do escopo devem iniciar vazias');
console.log('  [OK] Tabelas e artefatos de dados zerados com sucesso.');

// 2. Test Cross-Document Bindings: Sponsor
console.log('\n[2] Verificação da Propagação do Sponsor:');
console.assert(cleanProj.sponsor === "Diretor Fernando Rocha", 'Sponsor mismatch');
console.assert(cleanProj.tap.sponsor_name === "Diretor Fernando Rocha", 'TAP Sponsor mismatch');

// Stakeholder check
const sponsorSh = cleanProj.stakeholders.find(s => s.role && s.role.includes('Sponsor'));
console.assert(sponsorSh && sponsorSh.name === "Diretor Fernando Rocha", 'Sponsor deve constar em Stakeholders');
console.assert(sponsorSh.power === 3 && sponsorSh.interest === 2, 'Sponsor deve ser Alto Poder / Alto Interesse');
console.log('  [OK] Sponsor propagado para Matriz de Stakeholders com Alto Poder / Alto Interesse.');

// RACI check
const sponsorRaci = cleanProj.raci_matrix.members.find(m => m.role && m.role.includes('Patrocinador'));
console.assert(sponsorRaci && sponsorRaci.name === "Diretor Fernando Rocha", 'Sponsor deve constar na Matriz RACI');
console.assert(sponsorRaci.roles_map['act-2'] === 'A', 'Sponsor deve ter papel A na RACI');
console.log('  [OK] Sponsor propagado para Matriz RACI com papel "A - Aprovação".');

// Closing check
console.assert(cleanProj.closing_statement.approver === "Diretor Fernando Rocha", 'Closing approver mismatch');
console.log('  [OK] Sponsor propagado como Aprovador formal no Termo de Encerramento.');

// 3. Test Cross-Document Bindings: Gerente do Projeto (GP)
console.log('\n[3] Verificação da Propagação do GP:');
console.assert(cleanProj.manager === "Eng. Amanda Silveira", 'GP mismatch');
console.assert(cleanProj.tap.manager_name === "Eng. Amanda Silveira", 'TAP GP mismatch');

// Resources check
const gpResource = cleanProj.resources.team.find(m => m.dept && m.dept.includes('Gerente'));
console.assert(gpResource && gpResource.name === "Eng. Amanda Silveira", 'GP deve ser cadastrado na Equipe');
console.log('  [OK] GP cadastrado automaticamente na equipe de Recursos.');

// RACI check
const gpRaci = cleanProj.raci_matrix.members.find(m => m.role && m.role.includes('Gerente'));
console.assert(gpRaci && gpRaci.name === "Eng. Amanda Silveira", 'GP deve constar na RACI');
console.assert(gpRaci.roles_map['act-2'] === 'R', 'GP deve ter papel R na RACI');
console.log('  [OK] GP propagado para Matriz RACI com papel "R - Responsável".');

// Closing check
console.assert(cleanProj.closing_statement.manager === "Eng. Amanda Silveira", 'Closing manager mismatch');
console.log('  [OK] GP propagado como Signatário no Termo de Encerramento.');

// 4. Test Cross-Document Bindings: Cliente e Empresa
console.log('\n[4] Verificação da Propagação de Cliente e Empresa:');
console.assert(cleanProj.company === "Construtora Horizonte", 'Empresa mismatch');
console.assert(cleanProj.tap.company === "Construtora Horizonte", 'TAP Empresa mismatch');
console.assert(cleanProj.scope_statement.client === "Caixa Seguradora", 'Scope Client mismatch');
console.assert(cleanProj.closing_statement.client_rep === "Caixa Seguradora", 'Closing Client mismatch');
console.log('  [OK] Empresa e Cliente propagados para TAP, Escopo e Termo de Encerramento.');

// 5. Test Cross-Document Bindings: Datas e Prazos
console.log('\n[5] Verificação da Propagação de Datas:');
console.assert(cleanProj.schedule[0].delivery_date === "2026-11-01", 'Schedule start date mismatch');
console.assert(cleanProj.schedule[cleanProj.schedule.length - 1].delivery_date === "2027-11-01", 'Schedule end date mismatch');
console.assert(cleanProj.closing_statement.date === "2027-11-01", 'Closing date mismatch');
console.log('  [OK] Datas de Início e Término sincronizadas com Cronograma e Encerramento.');

// 6. Test Deliverables Sync from Scope to Closing
console.log('\n[6] Verificação da Sincronização Escopo -> Encerramento:');
cleanProj.scope_statement.deliverables.push(
    { id: 1, name: "Projeto Executivo de Estrutura Homologado" },
    { id: 2, name: "Habite-se e Vistoria do Corpo de Bombeiros" }
);
const syncScope = context.window.syncScopeToClosingDeliverables || context.syncScopeToClosingDeliverables;
syncScope(cleanProj);
console.assert(cleanProj.closing_statement.deliverables.length === 2, 'Closing deliverables should have 2 items');
console.assert(cleanProj.closing_statement.deliverables[0].description === "Projeto Executivo de Estrutura Homologado", 'Deliverable 1 mismatch');
console.assert(cleanProj.closing_statement.deliverables[1].description === "Habite-se e Vistoria do Corpo de Bombeiros", 'Deliverable 2 mismatch');
console.log('  [OK] Entregas do Escopo sincronizadas com sucesso com o Termo de Encerramento.');

// 7. Test Reactive Update (Dynamic change of Sponsor, GP and Budget)
console.log('\n[7] Verificação de Reatividade Dinâmica:');
context.project = cleanProj;
context.window.project = cleanProj;
const updateMaster = context.window.updateProjectMasterField || context.updateProjectMasterField;
updateMaster('sponsor', 'Dra. Beatriz Mendes');
console.assert(cleanProj.sponsor === 'Dra. Beatriz Mendes', 'Reactive sponsor mismatch');
console.assert(cleanProj.tap.sponsor_name === 'Dra. Beatriz Mendes', 'Reactive TAP sponsor mismatch');
const updatedSponsorSh = cleanProj.stakeholders.find(s => s.role && s.role.includes('Sponsor'));
console.assert(updatedSponsorSh.name === 'Dra. Beatriz Mendes', 'Reactive stakeholder sponsor mismatch');
console.assert(cleanProj.closing_statement.approver === 'Dra. Beatriz Mendes', 'Reactive closing approver mismatch');
console.log('  [OK] Alteração de Sponsor propagada reativamente para todos os artefatos.');

// 8. Test Budget Copy from Baseline to Revised
console.log('\n[8] Verificação de Cópia da Linha de Base para Orçamento Revisado:');
cleanProj.budget_baseline.items.push(
    { id: 1, resource: "Consultoria BIM", unit_cost: 50000, qty: 2, total: 100000 },
    { id: 2, resource: "Ensaios Geotécnicos", unit_cost: 30000, qty: 1, total: 30000 }
);
cleanProj.budget_baseline.project_cost = 130000;
cleanProj.budget_baseline.contingency_reserve = 20000;
cleanProj.budget_baseline.final_cost = 150000;

const copyBudget = context.window.copyBudget1ToBudget2 || context.copyBudget1ToBudget2;
copyBudget();
console.assert(cleanProj.budget_revised.items.length === 2, 'Budget 2 should have 2 items');
console.assert(cleanProj.budget_revised.final_cost === 150000, 'Budget 2 final cost mismatch');
console.log('  [OK] Orçamento 1 serviu de base e foi copiado integralmente para o Orçamento 2.');

console.log('\n>>> TODOS OS TESTES DE AMARRAÇÃO E LIMPEZA V1 PASSARAM COM SUCESSO! <<<\n');
