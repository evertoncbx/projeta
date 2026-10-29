// Catálogo e Calculadora de Cobertura IPMA ICB4 em JavaScript
const IPMA_COMPETENCES = {
  "perspective": {
    "title": "Competências de Perspectiva (Contextuais)",
    "description": "Focam na orientação da organização e no alinhamento do projeto ao contexto corporativo, regulatório e estratégico.",
    "elements": [
      {
        "code": "4.3.1",
        "name": "Estratégia",
        "definition": "Alinhamento dos objetivos e entregas do projeto com as metas e o plano estratégico corporativo.",
        "artifacts": [
          "TAP (Seção 1 & 2)",
          "Declaração de Escopo (Seção 2 & 4)",
          "Lições Aprendidas (Missão 2030)"
        ],
        "focus": "Garante que o empreendimento atenda aos critérios estratégicos corporativos e objetivos de longo prazo."
      },
      {
        "code": "4.3.2",
        "name": "Governança, estruturas e processos",
        "definition": "Estruturas decisórias, alçadas de aprovação, papéis do patrocinador e integração com a governança corporativa.",
        "artifacts": [
          "Instruções de Preenchimento",
          "TAP (Seção 11 e 12)",
          "Matriz de Responsabilidades",
          "Solicitação de Mudanças"
        ],
        "focus": "Estabelece a governança formal do projeto e as linhas de autoridade entre GP, Sponsor e Facilitador."
      },
      {
        "code": "4.3.3",
        "name": "Conformidade, normas e regulações",
        "definition": "Aderência a normas técnicas, ambientais (ex: EN 15804, ESG), regras concorrenciais e conformidade legal.",
        "artifacts": [
          "Plano de Riscos (R03 - Multa concorrencial)",
          "Qualidade (Normas ambientais)",
          "Declaração de Escopo",
          "Controle de Versões"
        ],
        "focus": "Previne passivos e assegura cumprimento do teto legal e regulatório sem infrações à concorrência."
      },
      {
        "code": "4.3.4",
        "name": "Poder e interesse",
        "definition": "Identificação das relações formais e informais de poder, interesses e influências dos stakeholders.",
        "artifacts": [
          "Matriz de Stakeholders (Poder x Interesse)",
          "Plano de Comunicação",
          "TAP (Partes Interessadas)"
        ],
        "focus": "Mapeia os atores de alto poder e alto interesse (Sponsor, Facilitador, Fornecedores Estratégicos) e concorrência."
      },
      {
        "code": "4.3.5",
        "name": "Cultura e valores",
        "definition": "Cultura organizacional de excelência, integridade, sustentabilidade e colaboração ética.",
        "artifacts": [
          "Declaração de Escopo (Critérios ESG / Sustentabilidade)",
          "Qualidade (Sustentabilidade)",
          "Termo de Encerramento"
        ],
        "focus": "Consolida os valores de sustentabilidade ativa, conformidade e transparência em auditoria."
      }
    ]
  },
  "people": {
    "title": "Competências de Pessoas (Comportamentais)",
    "description": "Focam nas competências pessoais, interpessoais e de liderança necessárias para conduzir equipes e gerenciar relacionamentos.",
    "elements": [
      {
        "code": "4.4.1",
        "name": "Autorreflexão e gestão pessoal",
        "definition": "Capacidade de autoavaliação crítica, reflexão sobre o próprio desempenho e disciplina de aprimoramento.",
        "artifacts": [
          "Lições Aprendidas (As 4 Perguntas Reflexivas)",
          "Termo de Encerramento (Conclusões)"
        ],
        "focus": "Reflexão estruturada: O que fazemos? O que parar? O que começar? O que melhorar?"
      },
      {
        "code": "4.4.2",
        "name": "Integridade e fiabilidade pessoal",
        "definition": "Atuação ética, transparência contábil, fidelidade aos dados e cumprimento de compromissos assumidos.",
        "artifacts": [
          "Orçamento 1 e 2",
          "Controle de Versões",
          "Auditoria Cruzada (Qualidade)",
          "Termo de Encerramento"
        ],
        "focus": "Registros orçamentários rastreáveis e conformidade nas aquisições sem desvios de conduta."
      },
      {
        "code": "4.4.3",
        "name": "Comunicação pessoal",
        "definition": "Troca eficaz e tempestiva de informações através de canais adequados, escuta ativa e clareza.",
        "artifacts": [
          "Plano de Comunicação (5W2H)",
          "Solicitação de Mudanças",
          "TAP"
        ],
        "focus": "Alinhamento contínuo entre equipe, sponsor e parceiros em todos os marcos do projeto."
      },
      {
        "code": "4.4.4",
        "name": "Relações e compromisso",
        "definition": "Construção de parcerias produtivas baseadas em confiança mútua e compromisso com o projeto.",
        "artifacts": [
          "Recursos (Cadastro de Contatos)",
          "Matriz de Responsabilidades",
          "Stakeholders"
        ],
        "focus": "Engajamento colaborativo com a equipe e gestão de confiança com o cliente Lendlease."
      },
      {
        "code": "4.4.5",
        "name": "Liderança",
        "definition": "Orientação, motivação e direção da equipe pelo Gerente de Projeto para superação de desafios.",
        "artifacts": [
          "TAP (Papel do GP Fernanda)",
          "Cronograma Inicial",
          "Parecer na Solicitação de Mudanças"
        ],
        "focus": "Condução decisiva nos momentos de restrição orçamentária e reorganização operacional."
      },
      {
        "code": "4.4.6",
        "name": "Trabalho em equipe",
        "definition": "Cooperação ativa, divisão de papéis e integração sinérgica entre engenharia, suprimentos e doc.",
        "artifacts": [
          "Matriz de Responsabilidades (RACI Expandido)",
          "Recursos (Turnos)",
          "EAP / Organograma"
        ],
        "focus": "Clareza nos papéis: Responsável (R), Revisão (Rv), Aprovação (A), Consultado (C), Informado (I), Participante (P)."
      },
      {
        "code": "4.4.7",
        "name": "Conflito e crise",
        "definition": "Identificação proativa de tensões, mediação de divergências e atuação sob pressão de tempo fatal.",
        "artifacts": [
          "Plano de Riscos (R01 e R07)",
          "Solicitação de Mudanças nº 1",
          "Lições Aprendidas"
        ],
        "focus": "Resolução de restrições críticas com fornecedores e insumos sem atrasar o marco de entrega homologado."
      },
      {
        "code": "4.4.8",
        "name": "Engenhosidade",
        "definition": "Pensamento inovador, adaptabilidade e soluções criativas para problemas não triviais.",
        "artifacts": [
          "EAP (Design Multifuncional)",
          "Qualidade (Soluções Técnicas)",
          "Solicitação de Mudanças"
        ],
        "focus": "Adaptação técnica de estrutura e materiais mantendo padrões de qualidade e critérios de aceitação."
      },
      {
        "code": "4.4.9",
        "name": "Negociação",
        "definition": "Habilidade para obter acordos vantajosos e factíveis com fornecedores e partes interessadas.",
        "artifacts": [
          "Orçamento 2 (Revisado pós-aquisições)",
          "Solicitação de Mudanças",
          "Stakeholders"
        ],
        "focus": "Negociação vantajosa de insumos e contratos gerando economia líquida e conformidade orçamentária."
      },
      {
        "code": "4.4.10",
        "name": "Orientação a resultados",
        "definition": "Foco inabalável no cumprimento das entregas físicas e documentais nos limites de custo, prazo e escopo.",
        "artifacts": [
          "Cronograma Inicial (Gates)",
          "Qualidade (Metas)",
          "Termo de Encerramento (Avaliação Muito Bom)"
        ],
        "focus": "Entrega pontual da torre com no mínimo 2 metros e dossiê documental completo até 16:30."
      }
    ]
  },
  "practice": {
    "title": "Competências de Prática (Técnicas)",
    "description": "Focam nos métodos, ferramentas, técnicas e processos essenciais para o planejamento, execução e controle de projetos.",
    "elements": [
      {
        "code": "4.5.1",
        "name": "Definição do projeto (Design)",
        "definition": "Concepção da abordagem geral do projeto, ciclo de vida e modelagem do modelo de entrega.",
        "artifacts": [
          "TAP (Termo de Abertura)",
          "Termo de Encerramento"
        ],
        "focus": "Estrutura holística do projeto desde a iniciação até o encerramento formal."
      },
      {
        "code": "4.5.2",
        "name": "Requisitos e objetivos",
        "definition": "Identificação, detalhamento e validação de requisitos funcionais, técnicos e arquitetônicos.",
        "artifacts": [
          "TAP (Seção 3)",
          "Declaração de Escopo (Seção 2)",
          "Qualidade (Requisitos)"
        ],
        "focus": "Tripla vocação (comercial, residencial, turística), escala 1:350, área de 1m², autoportante."
      },
      {
        "code": "4.5.3",
        "name": "Escopo",
        "definition": "Decomposição do trabalho em entregas tangíveis e delimitação estrita de fronteiras e exclusões.",
        "artifacts": [
          "Declaração de Escopo",
          "EAP / WBS e Organograma Visual",
          "Lista de 15 Entregas"
        ],
        "focus": "Estruturação hierárquica das entregas e controle rigoroso das exclusões contratuais."
      },
      {
        "code": "4.5.4",
        "name": "Tempo",
        "definition": "Estruturação da linha do tempo, sequenciamento de atividades, marcos críticos e caminho crítico.",
        "artifacts": [
          "Cronograma Inicial (Marcos e Gates)",
          "TAP (Prazo Estimado)"
        ],
        "focus": "Cumprimento dos gates horários: 11:00, 11:30, 12:00, 12:30, 14:30, 14:40 e 16:30."
      },
      {
        "code": "4.5.5",
        "name": "Organização e informação",
        "definition": "Estruturação da governança documental, fluxos de informação e arquitetura de gestão do projeto.",
        "artifacts": [
          "EAP / Organograma",
          "Matriz RACI",
          "Controle de Versões",
          "Plano de Comunicação"
        ],
        "focus": "Organização do dossiê em arquivo único e rastreabilidade documental integral."
      },
      {
        "code": "4.5.6",
        "name": "Qualidade",
        "definition": "Garantia de que os produtos e processos atendam aos critérios de aceitação e melhoria contínua.",
        "artifacts": [
          "Plano de Qualidade (Checklists de Doc e Obra, Matriz de Monitoramento)"
        ],
        "focus": "Aferição de conformidade dos insumos, sustentabilidade, prumo e estabilidade da torre."
      },
      {
        "code": "4.5.7",
        "name": "Finanças",
        "definition": "Planejamento, estimativa, orçamentação e controle dos recursos financeiros e contingência.",
        "artifacts": [
          "Orçamento 1 (Base)",
          "Orçamento 2 (Revisado)",
          "TAP (Teto Orçamentário)"
        ],
        "focus": "Controle financeiro no teto de US$ 20.000.000,00 e reserva de contingência de US$ 1.600.000,00."
      },
      {
        "code": "4.5.8",
        "name": "Recursos",
        "definition": "Planejamento da capacidade da equipe humana, distribuição de turnos e dimensionamento de insumos.",
        "artifacts": [
          "Recursos (Turnos e Cadastro de Pessoal)",
          "Matriz RACI"
        ],
        "focus": "Disponibilização da equipe nos turnos da manhã e tarde e integração multidisciplinar."
      },
      {
        "code": "4.5.9",
        "name": "Aquisições",
        "definition": "Gestão das compras de insumos, seleção de fornecedores e administração de contratos de suprimentos.",
        "artifacts": [
          "Orçamento 1 e 2",
          "Solicitação de Mudanças nº 1",
          "Plano de Riscos (R02)"
        ],
        "focus": "Controle rigoroso de fornecedores, compras conforme regulamento e gestão de sobras."
      },
      {
        "code": "4.5.10",
        "name": "Planejamento e controle",
        "definition": "Monitoramento integrado do progresso físico e financeiro versus linha de base planejada.",
        "artifacts": [
          "Cronograma Inicial",
          "Qualidade",
          "Termo de Encerramento"
        ],
        "focus": "Acompanhamento contínuo dos marcos e verificação de desvios operacionais."
      },
      {
        "code": "4.5.11",
        "name": "Risco e oportunidade",
        "definition": "Identificação, análise qualitativa/quantitativa e planos de resposta a incertezas do projeto.",
        "artifacts": [
          "Plano de Riscos (Matriz P x I, R01 a R07)",
          "TAP (Seção 9)"
        ],
        "focus": "Estratégias para mitigar queda da estrutura e evitar multas concorrenciais ou estouro de custos."
      },
      {
        "code": "4.5.12",
        "name": "Partes interessadas",
        "definition": "Engajamento contínuo das partes interessadas internas e externas para assegurar satisfação.",
        "artifacts": [
          "Matriz de Stakeholders",
          "Plano de Comunicação",
          "TAP"
        ],
        "focus": "Gestão estratégica do Sponsor Nick O'Neil, Professor Ricardo e Concorrentes."
      },
      {
        "code": "4.5.13",
        "name": "Mudança e transformação",
        "definition": "Processo formal de requisição, análise de impacto, parecer e aprovação de mudanças no projeto.",
        "artifacts": [
          "Solicitação de Mudanças (Formulário formal)",
          "Controle de Versões",
          "Orçamento 2"
        ],
        "focus": "Fluxo disciplinado de alteração orçamentária preservando objetivos e entregas."
      }
    ]
  }
};


function getCompetenceCoverage(project) {
    if (!project) return { overall_percentage: 0, covered_elements: 0, total_elements: 28, domains: {} };
    
    const covered = new Set();
    const tap = project.tap || {};
    const scope = project.scope_statement || {};
    const wbs = project.wbs_nodes || [];
    const sched = project.schedule || [];
    const raci = project.raci_matrix || {};
    const b1 = project.budget_baseline || {};
    const b2 = project.budget_revised || {};
    const risks = project.risks_plan || {};
    const stakes = project.stakeholders || [];
    const lessons = project.lessons_learned || {};
    const comms = project.communication_plan || [];
    const quality = project.quality || {};
    const resources = project.resources || {};
    const changes = project.change_requests || [];
    const closing = project.closing_statement || {};
    const versions = project.version_control || [];

    // Perspectiva
    if (tap.strategic_alignment || tap.project_justification || (lessons.mission_vision && lessons.mission_vision.length > 5)) covered.add("4.3.1");
    if (tap.governance_rules || (raci.members && raci.members.length > 0) || (changes && changes.length > 0)) covered.add("4.3.2");
    if ((risks.items && risks.items.length > 0) || (quality.checklist && quality.checklist.length > 0)) covered.add("4.3.3");
    if (stakes.length > 0 || comms.length > 0) covered.add("4.3.4");
    if (scope.technical_objective || (closing.deliverables && closing.deliverables.length > 0)) covered.add("4.3.5");

    // Pessoas
    if ((lessons.phases_records && lessons.phases_records.length > 0) || (lessons.questions && Object.keys(lessons.questions).length > 0)) covered.add("4.4.1");
    if (b1.items && b1.items.length > 0 && versions.length > 0) covered.add("4.4.2");
    if (comms.length > 0 || (changes.length > 0)) covered.add("4.4.3");
    if (resources.members && resources.members.length > 0 && stakes.length > 0) covered.add("4.4.4");
    if (tap.manager_role || sched.length > 0) covered.add("4.4.5");
    if (raci.members && raci.members.length > 0) covered.add("4.4.6");
    if (risks.items && risks.items.length > 0) covered.add("4.4.7");
    if (changes.length > 0 || (lessons.phases_records && lessons.phases_records.length > 0)) covered.add("4.4.8");
    if (b2.items && b2.items.length > 0 && stakes.length > 0) covered.add("4.4.9");
    if (closing.overall_status || (closing.deliverables && closing.deliverables.length > 0)) covered.add("4.4.10");

    // Prática
    if (tap.project_justification || tap.smart_objective) covered.add("4.5.1");
    if (scope.deliverables && scope.deliverables.length > 0) covered.add("4.5.2");
    if (wbs.length > 0) covered.add("4.5.3");
    if (sched.length > 0) covered.add("4.5.4");
    if (raci.members && raci.members.length > 0) covered.add("4.5.5");
    if ((quality.checklist && quality.checklist.length > 0) || (quality.monitoring && quality.monitoring.length > 0)) covered.add("4.5.6");
    if (b1.items && b1.items.length > 0) covered.add("4.5.7");
    if (resources.members && resources.members.length > 0) covered.add("4.5.8");
    if ((b1.items && b1.items.length > 0) || (b2.items && b2.items.length > 0)) covered.add("4.5.9");
    if (tap.project_name && sched.length > 0 && wbs.length > 0) covered.add("4.5.10");
    if (risks.items && risks.items.length > 0) covered.add("4.5.11");
    if (stakes.length > 0) covered.add("4.5.12");
    if (changes.length > 0) covered.add("4.5.13");

    const domainResults = {};
    for (const [domKey, domData] of Object.entries(IPMA_COMPETENCES)) {
        let domCovered = 0;
        const elemStatuses = [];
        for (const elem of domData.elements) {
            const isCov = covered.has(elem.code);
            if (isCov) domCovered++;
            elemStatuses.push({
                code: elem.code,
                name: elem.name,
                definition: elem.definition,
                artifacts: elem.artifacts,
                focus: elem.focus,
                covered: isCov
            });
        }
        const domTotal = domData.elements.length;
        const domPct = domTotal > 0 ? (domCovered / domTotal) * 100 : 0;
        domainResults[domKey] = {
            title: domData.title,
            description: domData.description,
            total_elements: domTotal,
            covered_elements: domCovered,
            percentage: Math.round(domPct * 10) / 10,
            elements: elemStatuses
        };
    }

    const totalElems = 28;
    const totalCov = covered.size;
    const overallPct = Math.round((totalCov / totalElems) * 1000) / 10;

    return {
        overall_percentage: overallPct,
        covered_elements: totalCov,
        total_elements: totalElems,
        domains: domainResults
    };
}

if (typeof window !== 'undefined') {
    window.IPMA_COMPETENCES = IPMA_COMPETENCES;
    window.getCompetenceCoverage = getCompetenceCoverage;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { IPMA_COMPETENCES, getCompetenceCoverage };
}
