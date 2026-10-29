
/**
 * PROJETA - Sistema de Gestão Estratégica de Projetos IPMA-D
 * Arquitetura Serverless em Nuvem com Supabase Storage e Vercel
 */

const SEED_PROJECT = {"id": "proj-vertex-londrina-360", "name": "Vertex Londrina 360", "code": "VL", "classification": "CORPORATIVO", "company": "Vertex Engenharia Brasil", "client": "Lendlease / Warren Buffet", "sponsor": "Nick O´Neil", "manager": "Fernanda Leandro Fonseca de Souza", "manager_phone": "(61) 98110-0155", "manager_email": "fernanda.alves@example.com", "date": "2026-10-23", "status": "Encerrado", "evaluation": "Muito Bom", "instructions": {"objective": "Armazenar todo documento de Gerenciamento do Projeto, utilizado pela coordenação deste, bem como todas as solicitações de mudanças nos projetos; Controle de Versões; Pendências; Recursos e Riscos.", "manager": "Fernanda", "date": "23/10/2026", "documents_guide": [{"doc": "Declaração de Escopo do Projeto", "mandatory": true, "description": "Fornece o entendimento comum do Projeto a todas as partes interessadas, descrevendo os principais objetivos, escopo, processos da Cadeia de Valor tratados, produtos ou serviços, premissas, restrições, entregáveis e matriz hierárquica."}, {"doc": "Classificação do processo", "mandatory": true, "description": "Classificação do Gestor quanto ao nível de segurança das informações (Confidencial, Corporativo ou Reservado)."}, {"doc": "WBS ou EAP", "mandatory": true, "description": "Descreve o objetivo, métrica e o tipo de trabalho que será realizado ou a entrega. Garante o entendimento do produto ou a entrega gerados pela equipe."}, {"doc": "Orçamento", "mandatory": true, "description": "Previsão de custos despendidos com os recursos necessários para execução do projeto (aquisições + consultoria)."}, {"doc": "Cronograma inicial", "mandatory": true, "description": "Cronograma inicial para aprovação do projeto com etapas nível macro, marcos, data de início e previsão de término."}, {"doc": "Stakeholders", "mandatory": true, "description": "Define os membros stakeholders e suas especificidades de função no projeto e grupos externos."}, {"doc": "Recursos", "mandatory": true, "description": "Relaciona os recursos humanos envolvidos e horários de participação."}, {"doc": "Matriz de Responsabilidades", "mandatory": true, "description": "Define as responsabilidades e abrangência para todos os envolvidos no projeto (RACI expandido)."}, {"doc": "Plano de Comunicação", "mandatory": true, "description": "Define reuniões e eventos previstos e suas especificidades."}, {"doc": "Plano de Riscos", "mandatory": true, "description": "Estabelece plano de ação para tratar riscos de acordo com identificação e análise."}, {"doc": "Solicitação de Mudanças", "mandatory": false, "description": "Registra, avalia e controla as solicitações de alterações no projeto."}, {"doc": "Termo de Encerramento", "mandatory": true, "description": "Fornece informações sobre término do projeto e entregas, incluindo avaliação e aceite."}, {"doc": "Controle de Versões", "mandatory": false, "description": "Acompanha e registra alterações realizadas nos documentos do projeto."}]}, "tap": {"version_control": [{"version": "1", "date": "2026-10-23", "author": "Matheus e Marciane", "notes": "revisado"}, {"version": "2", "date": "2026-10-23", "author": "Marciane", "notes": "Ajuste no orçamento estimado"}], "project_name": "Vertex Londrina 360", "doc_objective": "Autorizar o início do projeto, atribuir principais responsáveis e documentar requisitos iniciais, principais entregas, premissas e restrições.", "project_alignment": "Conforme previsto no plano estratégico da Vertex Engenharia Brasil.", "justification": "O empreendimento Vertex Londrina 360 justifica-se pela oportunidade de criar uma edificação icônica, sustentável e multifuncional, capaz de integrar, em um único projeto, espaços destinados a atividades comerciais, residenciais e turísticas. Essa combinação amplia a atratividade do empreendimento e fortalece sua proposta de valor ao atender diferentes públicos e finalidades de uso. A adoção de uma fachada em cimento geopolimérico fotocatalítico com dióxido de titânio (TiO₂) reforça o compromisso do projeto com inovação, sustentabilidade e redução de impactos ambientais. A tecnologia foi incorporada à proposta para viabilizar propriedades de autolimpeza e despoluição ambiental, em alinhamento com critérios ESG e de ciclo de vida previstos no projeto.\n\nAlém de seu valor arquitetônico, o empreendimento representa um desafio estratégico de engenharia e gestão: construir uma torre autoportante, em escala 1:350, integralmente inserida em uma área máxima de 1 m², mantendo estabilidade estrutural, fidelidade ao croqui homologado, qualidade estética e eficiência na utilização dos materiais.\n\nSob a perspectiva gerencial, o projeto também permite demonstrar a capacidade da Vertex Engenharia Brasil de integrar planejamento, engenharia, suprimentos, gestão de riscos, controle orçamentário, auditoria e documentação. A execução deverá respeitar o limite de US$ 20.000.000,00, as regras de aquisição e concorrência e o prazo estabelecido para a entrega física e documental.", "objective": "Projetar, viabilizar e construir a maior torre em Londrina como um marco arquitetônico e visual da cidade, uma torre corporativa e multifuncional, posicionada entre as edificações mais altas do mundo. O empreendimento integra com equilíbrio arquitetônico uma tripla vocação comercial, residencial e turístico. O projeto busca integrar beleza, inovação, segurança, eficiência e sustentabilidade, adotando soluções construtivas diferenciadas e princípios de logística reversa, de forma a contribuir para o desenvolvimento urbano, além de posicionar a Vertex Engenharia Brasil como referência em engenharia inovadora e sustentável, adotando tecnologia ativa de cimento geopolimérico fotocatalítico com TiO2 para autolimpeza e despoluição ambiental em conformidade com critérios ESG e de ciclo de vida (EN 15804).", "scope_description": "O projeto compreende o planejamento, a construção e a entrega da LendLease Aurora Tower, uma torre corporativa e multifuncional.\nA torre será composta por três segmentos funcionais: comercial, residencial e turístico, incorporando fachada integralmente fechada em cimento geopolimérico fotocatalítico com dióxido de titânio. A construção deverá manter fidelidade ao croqui homologado, estabilidade estrutural, simetria e acabamento compatível com os critérios de avaliação.\nO escopo gerencial contempla a elaboração e a consolidação dos 15 artefatos do template oficial, o controle do orçamento dentro do limite de US$ 20.000.000,00, a gestão dos riscos, a auditoria cruzada do concorrente, o controle das aquisições e a entrega do edifício protótipo, com no mínimo 2 metros até as 16:30 do dia 23/10/2026, construído com os materiais adquirido com o fornecedor Bueno.", "milestones": ["4.2.1: Projeto autorizado: TAP aprovado e governança estabelecida.", "4.2.2: Solução homologada: croqui, requisitos e critérios técnicos validados.", "4.2.3: Recursos assegurados: materiais adquiridos e orçamento protegido.", "4.2.4: Estrutura estabilizada: torre autoportante construída dentro da área delimitada construída a partir dos materiais fornecidos até as 16h30 de 23/10/2026.", "4.2.5: Gestão consolidada: 15 artefatos gerenciais finalizados e revisados.", "4.2.6: Conformidade demonstrada: auditoria cruzada realizada e documentação enviada ao Stakeholder Ricardo."], "estimated_duration": "7h e 30min", "budget_limit": "US$ 20.000.000,00", "main_stakeholders": "Nick O´Neil (Sponsor/Cliente), Prof. Ricardo Soares (Facilitador/Avaliador), Bueno (Fornecedor Exclusivo), Mercado Concorrente (Terra X e Lumina).", "team": ["Fernanda (Gerente de Projeto)", "Carlos Eduardo (Auditor/Qualidade)", "Everton (Design e Engenharia)", "Fabi (Design e Engenharia)", "João (Suprimentos e Logística)", "Diego (Benchmarking)", "Matheus (Documentação)", "Marciane (Documentação)"], "risks": ["Colapso ou tombamento estrutural da torre por instabilidade física vertical ou vento.", "Monopólio do fornecedor Bueno e desabastecimento de cimento geopolimérico.", "Autuação e aplicação de multa por infração concorrencial (multa de US$ 1.000.000,00).", "Estouro de orçamento por alterações não planejadas pós-apresentação formal (US$ 100.000,00/mudança).", "Discrepância geométrica entre croqui e obra física (penalização em simetria e estética).", "Perda ou rasgo de placas cimentícias (folhas A4) sem possibilidade de recompra fracionada.", "Extrapolação do horário de entrega (limite fatal 16:30)."], "critical_success_factors": ["Estabilidade e autossustentação da estrutura na área de 1 m² até o encerramento da avaliação.", "Fechamento e vedação completa da fachada em placas geopoliméricas em todo o perímetro.", "Aderência rigorosa à escala 1:350 e simetria volumétrica com o croqui arquitetônico.", "Pontualidade na entrega integrada física e documental antes das 16:30.", "Equilíbrio orçamentário dentro do teto de US$ 20.000.000,00 sem multas regulatórias.", "Aprovação na auditoria cruzada garantindo rastreabilidade entre planejado e realizado."], "assumptions": ["Disponibilidade contínua de insumos pelo fornecedor Bueno no horário de compras (14:20 às 14:30).", "Apoio e cooperação interorganizacional sem moeda (permutas e doações físicas permitidas).", "Integridade dos insumos fornecidos com propriedades mecânicas e manuseio esperados.", "Conectividade e estabilidade dos canais digitais para envio tempestivo do dossiê até 16:30.", "Autonomia da gestão de projeto para alocação de papéis e métodos operacionais."], "constraints": ["Restrição Orçamentária: Teto financeiro improrrogável de US$ 20.000.000,00.", "Restrição Temporal: Cumprimento estrito da agenda com encerramento às 16:30.", "Restrição Espacial: Construção estritamente delimitada em terreno de 1 m² no piso.", "Restrição Física de Altura: Limite superior intransponível do teto físico da sala de aula.", "Restrições de Compras: Apenas kits fechados, sem devoluções e sem transações monetárias com concorrentes.", "Restrição de Governança Documental: Dossiê único nos padrões do template homologado."], "sponsor_name": "Nick O´Neil", "manager_name": "Fernanda Leandro Fonseca de Souza", "manager_phone": "(61) 98110-0155", "approval_date": "2026-10-23"}, "scope_statement": {"project_name": "Vertex Londrina 360", "date": "2026-10-23", "code": "VL", "classification": "CORPORATIVO", "client": "Nick O´Neil / Lendlease", "objective": "Projetar, viabilizar e construir uma torre corporativa e multifuncional de grande porte na escala física de 1:350, posicionada entre as edificações mais altas do mundo sem contato com o teto físico do ambiente, implantada estritamente dentro da área limite de 1 m² demarcada no piso. O empreendimento integra com equilíbrio arquitetônico uma tripla vocação (1/3 comercial, 1/3 residencial e 1/3 turístico), adotando tecnologia ativa de cimento geopolimérico fotocatalítico com TiO2 para autolimpeza e despoluição ambiental em conformidade com critérios ESG e de ciclo de vida (EN 15804), mantendo o custo contido no teto orçamentário de US$ 20.000.000,00 e concluindo todas as entregas gerenciais e físicas até às 16:30 do dia 23/10/2026.", "value_chain_processes": ["Declaração de escopo;", "Elaboração de cronograma;", "Elaboração dos planos de qualidade, custos, stakeholders, aquisições, risco, comunicação, recursos humanos;", "Aquisição dos materiais;", "Execução da estrutura;", "Elaboração da matriz de responsabilidades;", "Termo de encerramento com lições aprendidas."], "justification": "O empreendimento Vertex Aurora 360 justifica-se pela oportunidade de criar uma edificação icônica, sustentável e multifuncional, capaz de integrar, em um único projeto, espaços destinados a atividades comerciais, residenciais e turísticas. Essa combinação amplia a atratividade do empreendimento e fortalece sua proposta de valor ao atender diferentes públicos e finalidades de uso.\n\nA adoção de uma fachada em cimento geopolimérico fotocatalítico com dióxido de titânio (TiO₂) reforça o compromisso do projeto com inovação, sustentabilidade e redução de impactos ambientais. A tecnologia foi incorporada à proposta para viabilizar propriedades de autolimpeza e despoluição ambiental, em alinhamento com critérios ESG e de ciclo de vida previstos no projeto.\n\nAlém de seu valor arquitetônico, o empreendimento representa um desafio estratégico de engenharia e gestão: construir uma torre autoportante, em escala 1:350, integralmente inserida em uma área máxima de 1 m², mantendo estabilidade estrutural, fidelidade ao croqui homologado, qualidade estética e eficiência na utilização dos materiais.\n\nSob a perspectiva gerencial, o projeto também permite demonstrar a capacidade da Vertex Engenharia Brasil de integrar planejamento, engenharia, suprimentos, gestão de riscos, controle orçamentário, auditoria e documentação. A execução deverá respeitar o limite de US$ 20.000.000,00, as regras de aquisição e concorrência e o prazo estabelecido para a entrega física e documental.", "description": "O projeto compreende o planejamento, a construção e a entrega da LendLease Aurora Tower, uma torre corporativa e multifuncional em escala 1:350, implantada integralmente em uma área máxima de 1 m². A edificação deverá ser autoportante, sem fixações externas e sem contato com o teto do ambiente.\n\nA torre será composta por três segmentos funcionais: comercial, residencial e turístico, incorporando fachada integralmente fechada em cimento geopolimérico fotocatalítico com dióxido de titânio. A construção deverá manter fidelidade ao croqui homologado, estabilidade estrutural, simetria e acabamento compatível com os critérios de avaliação.\nO escopo gerencial contempla a elaboração e a consolidação dos 15 artefatos do template oficial, o controle do orçamento dentro do limite de US$ 20.000.000,00, a gestão dos riscos, a auditoria cruzada do concorrente, o controle das aquisições e a entrega de um dossiê digital único até as 16h30 de 23/10/2026.", "assumptions": ["Disponibilidade contínua de insumos pelo fornecedor Bueno (14:20 às 14:30).", "Apoio e cooperação interorganizacional sem moeda com concorrentes.", "Integridade física dos insumos fornecidos (folhas A4, fitas, colas).", "Conectividade estável dos canais digitais para envio do dossiê até 16:30.", "Autonomia gerencial para alocação de funções operacionais da equipe."], "deliverables": [{"id": 1, "name": "Termo de Abertura do Projeto aprovado."}, {"id": 2, "name": "Declaração de Escopo consolidada, com premissas, restrições, exclusões e critérios de aceitação."}, {"id": 3, "name": "Estrutura Analítica do Projeto (EAP/WBS) e matriz hierárquica das entregas."}, {"id": 4, "name": "Cronograma do projeto, contemplando atividades, responsáveis, marcos e prazo final."}, {"id": 5, "name": "Orçamento e plano de custos, incluindo aquisições e reserva de contingência."}, {"id": 6, "name": "Plano de aquisições e lista final de materiais aprovados."}, {"id": 7, "name": "Plano de qualidade, com requisitos, inspeções e critérios de avaliação do protótipo."}, {"id": 8, "name": "Plano de riscos, com análise, respostas, responsáveis e acompanhamento."}, {"id": 9, "name": "Plano de comunicação, com públicos, canais, frequência e responsáveis."}, {"id": 10, "name": "Identificação e análise das partes interessadas (stakeholders)."}, {"id": 11, "name": "Plano de recursos e matriz de responsabilidades da equipe."}, {"id": 12, "name": "Croqui estrutural homologado e especificação da torre em escala 1:350."}, {"id": 13, "name": "Torre física autoportante e multifuncional, concluída na área-limite de 1 m²."}, {"id": 14, "name": "Dossiê digital único, contendo os artefatos gerenciais e registros de controle de versões e mudanças."}, {"id": 15, "name": "Termo de Encerramento e registro das lições aprendidas, com aceite final do projeto."}], "exclusions": ["Construção de uma edificação real ou em escala 1:1; a entrega limita-se ao protótipo físico em escala 1:350.", "Obras civis, fundações, instalações elétricas, hidráulicas, sanitárias, climatização, elevadores e sistemas de combate a incêndio funcionais.", "Aquisição de terrenos, licenciamento urbanístico ou ambiental, alvarás, habite-se e demais autorizações de uma obra real.", "Certificações formais de sustentabilidade, desempenho, segurança ou conformidade — inclusive ESG, EN 15804 e ensaios laboratoriais do material.", "Operação, manutenção, comercialização, ocupação ou gestão posterior dos segmentos comercial, residencial e turístico.", "Mobiliário, paisagismo, decoração interna, maquetes complementares e recursos eletrônicos não previstos na lista de materiais aprovada.", "Alterações no croqui homologado, na proporção funcional de 1/3 por segmento, na área-limite de 1 m², no orçamento ou no prazo sem solicitação de mudança aprovada.", "Suporte, garantia, reparos ou reconstrução após a avaliação e o encerramento formal do projeto."]}, "wbs_nodes": [{"id": "1.0", "name": "Gestão do Projeto", "leader": "Fernanda (GP)", "type": "phase", "children": [{"id": "1.1", "name": "Iniciação & TAP", "leader": "Matheus e Marciane", "status": "Concluído", "type": "deliverable"}, {"id": "1.2", "name": "Declaração de Escopo & EAP", "leader": "Fernanda", "status": "Concluído", "type": "deliverable"}, {"id": "1.3", "name": "Cronograma & Controle de Gates", "leader": "Fernanda", "status": "Concluído", "type": "deliverable"}, {"id": "1.4", "name": "Planos Gerenciais Integrados (Riscos, Custos, Qualidade)", "leader": "Carlos Eduardo / Fernanda", "status": "Concluído", "type": "deliverable"}, {"id": "1.5", "name": "Governança, Versões e Mudanças", "leader": "Marciane", "status": "Concluído", "type": "deliverable"}, {"id": "1.6", "name": "Encerramento e Lições Aprendidas", "leader": "Fernanda", "status": "Concluído", "type": "deliverable"}]}, {"id": "2.0", "name": "Engenharia & Concepção Técnica", "leader": "Everton / Fabi", "type": "phase", "children": [{"id": "2.1", "name": "Croqui Estrutural Homologado", "leader": "Everton", "status": "Concluído", "type": "deliverable"}, {"id": "2.2", "name": "Modelagem Proporcional Escala 1:350", "leader": "Fabi", "status": "Concluído", "type": "deliverable"}, {"id": "2.3", "name": "Segmentação Tripla (Comercial / Residencial / Turístico)", "leader": "Everton", "status": "Concluído", "type": "deliverable"}, {"id": "2.4", "name": "Detalhamento da Fachada em Cimento Geopolimérico TiO2", "leader": "Fabi", "status": "Concluído", "type": "deliverable"}]}, {"id": "3.0", "name": "Suprimentos, Aquisições & Benchmarking", "leader": "João / Diego", "type": "phase", "children": [{"id": "3.1", "name": "Mapeamento e Negociação com Fornecedor Bueno", "leader": "João", "status": "Concluído", "type": "deliverable"}, {"id": "3.2", "name": "Plano de Aquisição Inicial (Orçamento 1)", "leader": "João", "status": "Concluído", "type": "deliverable"}, {"id": "3.3", "name": "Adequação de Insumos & Solicitação de Mudança nº 1", "leader": "João", "status": "Concluído", "type": "deliverable"}, {"id": "3.4", "name": "Recebimento e Aceite de Materiais", "leader": "Carlos Eduardo", "status": "Concluído", "type": "deliverable"}]}, {"id": "4.0", "name": "Construção & Montagem Física", "leader": "Everton / Equipe", "type": "phase", "children": [{"id": "4.1", "name": "Marcação e Liberação do Terreno de 1 m²", "leader": "Diego", "status": "Concluído", "type": "deliverable"}, {"id": "4.2", "name": "Estrutura Autoportante e Contraventamentos", "leader": "Everton", "status": "Concluído", "type": "deliverable"}, {"id": "4.3", "name": "Fechamento Total da Fachada (Placas Geopoliméricas A4)", "leader": "Fabi / Marciane", "status": "Concluído", "type": "deliverable"}, {"id": "4.4", "name": "Acabamento Estético e Teste de Estabilidade", "leader": "Everton / Fabi", "status": "Concluído", "type": "deliverable"}]}, {"id": "5.0", "name": "Qualidade, Auditoria & Avaliação", "leader": "Carlos Eduardo", "type": "phase", "children": [{"id": "5.1", "name": "Checklists de Verificação Documental e de Obra", "leader": "Carlos Eduardo", "status": "Concluído", "type": "deliverable"}, {"id": "5.2", "name": "Monitoramento de Sustentabilidade e Resíduos", "leader": "Carlos Eduardo", "status": "Concluído", "type": "deliverable"}, {"id": "5.3", "name": "Auditoria Cruzada com Equipes Concorrentes", "leader": "Carlos Eduardo", "status": "Concluído", "type": "deliverable"}, {"id": "5.4", "name": "Homologação Final com Facilitador Ricardo e Sponsor", "leader": "Fernanda", "status": "Concluído", "type": "deliverable"}]}], "schedule": [{"id": 1, "milestone": "Escopo estratégico aprovado", "responsible": "Gerente do Projeto", "duration": "Marco", "delivery_date": "23/10 – 11:00", "status": "Concluído"}, {"id": 2, "milestone": "Entregas e materiais aprovados", "responsible": "Gerente do Projeto", "duration": "Marco", "delivery_date": "23/10 – 11:30", "status": "Concluído"}, {"id": 3, "milestone": "Croqui estrutural aprovado", "responsible": "Engenharia", "duration": "Marco", "delivery_date": "23/10 – 12:00", "status": "Concluído"}, {"id": 4, "milestone": "Plano de aquisições aprovado", "responsible": "Suprimentos", "duration": "Marco", "delivery_date": "23/10 – 12:30", "status": "Concluído"}, {"id": 5, "milestone": "Área de implantação liberada", "responsible": "Sponsor", "duration": "Marco", "delivery_date": "23/10 – 14:30", "status": "Concluído"}, {"id": 6, "milestone": "Materiais adquiridos", "responsible": "Suprimentos", "duration": "Marco", "delivery_date": "23/10 – 14:40", "status": "Concluído"}, {"id": 7, "milestone": "Torre concluída e documentação entregue", "responsible": "Engenharia / Gerente do Projeto", "duration": "Marco", "delivery_date": "23/10 – 16:30", "status": "Concluído"}, {"id": 8, "milestone": "Projeto avaliado e encerrado", "responsible": "Gerente do Projeto / Sponsor", "duration": "Marco", "delivery_date": "23/10 – 18:00", "status": "Concluído"}], "resources": {"shifts": [{"shift": "Manhã", "mon": "09:00", "tue": "09:00", "wed": "09:00", "thu": "09:00", "fri": "09:00"}, {"shift": "Tarde", "mon": "18:00", "tue": "18:00", "wed": "18:00", "thu": "18:00", "fri": "18:00"}], "team": [{"name": "Fernanda", "email": "fernanda.alves@example.com", "dept": "Gerente de Projeto", "phone": "(61) 3100-1201", "cell": "(61) 99101-2201"}, {"name": "Diego", "email": "diego.martins@example.com", "dept": "Benchmarking", "phone": "(61) 3100-1202", "cell": "(61) 99102-2202"}, {"name": "Carlos Eduardo", "email": "carlos.eduardo@example.com", "dept": "Auditor / Qualidade", "phone": "(61) 3100-1203", "cell": "(61) 99103-2203"}, {"name": "Matheus", "email": "matheus.pessoa@example.com", "dept": "Documentação", "phone": "(61) 3100-1204", "cell": "(61) 99104-2204"}, {"name": "Marciane", "email": "marciane.silva@example.com", "dept": "Documentação", "phone": "(61) 3100-1205", "cell": "(61) 99105-2205"}, {"name": "Everton", "email": "everton.rocha@example.com", "dept": "Design e Engenharia", "phone": "(61) 3100-1206", "cell": "(61) 99106-2206"}, {"name": "Fabi", "email": "fabi.souza@example.com", "dept": "Design e Engenharia", "phone": "(61) 3100-1207", "cell": "(61) 99107-2207"}, {"name": "João", "email": "joao.lima@example.com", "dept": "Suprimentos e Logística", "phone": "(61) 3100-1208", "cell": "(61) 99108-2208"}]}, "raci_matrix": {"legend": {"R": "Responsável (Somente um responsável pela entrega)", "Rv": "Revisão (Responsável pela revisão técnica)", "A": "Aprovação (Responsável pela aprovação formal)", "C": "Consultado (Pessoa a ser consultada antes da decisão)", "I": "Informado (Pessoa a ser informada da decisão tomada)", "P": "Participante (Pessoa que suporta ou participa da execução)"}, "activities": [{"id": "act-1", "phase": "Iniciação", "sub": "Inic.", "name": "Identificar partes interessadas"}, {"id": "act-2", "phase": "Iniciação", "sub": "Inic.", "name": "Desenvolver o TAP"}, {"id": "act-3", "phase": "Planejamento", "sub": "Escopo", "name": "Coletar requisitos"}, {"id": "act-4", "phase": "Planejamento", "sub": "Escopo", "name": "Definir o escopo"}, {"id": "act-5", "phase": "Planejamento", "sub": "Escopo", "name": "Criar a EAP"}, {"id": "act-6", "phase": "Planejamento", "sub": "Tempo", "name": "Definir as atividades"}, {"id": "act-7", "phase": "Planejamento", "sub": "Tempo", "name": "Sequenciar atividades"}, {"id": "act-8", "phase": "Planejamento", "sub": "Tempo", "name": "Estimar recursos das atividades"}, {"id": "act-9", "phase": "Planejamento", "sub": "Tempo", "name": "Estimar durações das atividades"}, {"id": "act-10", "phase": "Planejamento", "sub": "Tempo", "name": "Desenvolver o cronograma"}], "members": [{"name": "Fernanda", "role": "Gerente de Projeto", "roles_map": {"act-1": "A", "act-2": "R", "act-3": "A", "act-4": "R", "act-5": "A", "act-6": "R", "act-7": "A", "act-8": "A", "act-9": "A", "act-10": "A"}}, {"name": "Nick O´Neil", "role": "Sponsor", "roles_map": {"act-1": "I", "act-2": "A", "act-3": "C", "act-4": "A", "act-5": "I", "act-6": "I", "act-7": "I", "act-8": "I", "act-9": "I", "act-10": "I"}}, {"name": "Carlos Eduardo", "role": "Auditor/Qualidade", "roles_map": {"act-1": "C", "act-2": "Rv", "act-3": "C", "act-4": "Rv", "act-5": "Rv", "act-6": "Rv", "act-7": "Rv", "act-8": "Rv", "act-9": "Rv", "act-10": "Rv"}}, {"name": "Bueno", "role": "Fornecedor", "roles_map": {"act-1": "I", "act-2": "I", "act-3": "I", "act-4": "I", "act-5": "I", "act-6": "I", "act-7": "I", "act-8": "C", "act-9": "I", "act-10": "I"}}, {"name": "Prof. Ricardo Soares", "role": "Facilitador", "roles_map": {"act-1": "R", "act-2": "C", "act-3": "R", "act-4": "C", "act-5": "C", "act-6": "C", "act-7": "C", "act-8": "C", "act-9": "C", "act-10": "C"}}, {"name": "Everton", "role": "Design e Engenharia", "roles_map": {"act-1": "C", "act-2": "C", "act-3": "P", "act-4": "C", "act-5": "R", "act-6": "C", "act-7": "R", "act-8": "C", "act-9": "R", "act-10": "C"}}, {"name": "Fabi", "role": "Design e Engenharia", "roles_map": {"act-1": "C", "act-2": "C", "act-3": "P", "act-4": "C", "act-5": "P", "act-6": "C", "act-7": "P", "act-8": "C", "act-9": "P", "act-10": "C"}}, {"name": "João", "role": "Suprimentos e Logística", "roles_map": {"act-1": "C", "act-2": "I", "act-3": "C", "act-4": "C", "act-5": "C", "act-6": "C", "act-7": "C", "act-8": "R", "act-9": "C", "act-10": "C"}}, {"name": "Diego", "role": "Benchmarking", "roles_map": {"act-1": "C", "act-2": "I", "act-3": "P", "act-4": "C", "act-5": "P", "act-6": "P", "act-7": "P", "act-8": "P", "act-9": "P", "act-10": "C"}}, {"name": "Matheus", "role": "Documentação", "roles_map": {"act-1": "Rv", "act-2": "P", "act-3": "Rv", "act-4": "P", "act-5": "P", "act-6": "P", "act-7": "C", "act-8": "C", "act-9": "C", "act-10": "R"}}, {"name": "Marciane", "role": "Documentação", "roles_map": {"act-1": "P", "act-2": "P", "act-3": "P", "act-4": "P", "act-5": "P", "act-6": "P", "act-7": "C", "act-8": "C", "act-9": "C", "act-10": "P"}}]}, "budget_baseline": {"name": "Orçamento 1 (Linha de Base)", "items": [{"id": 1, "resource": "Folha A4 de cimento geopolimérico branca", "unit_cost": 180000, "qty": 35, "total": 6300000}, {"id": 2, "resource": "Folha A4 de cimento geopolimérico colorida", "unit_cost": 200000, "qty": 1, "total": 200000}, {"id": 3, "resource": "Rolo de fita crepe 28 mm × 50 m", "unit_cost": 2500000, "qty": 1, "total": 2500000}, {"id": 4, "resource": "Tubo de cola", "unit_cost": 3000000, "qty": 1, "total": 3000000}, {"id": 5, "resource": "Kit de barbante 3 metros", "unit_cost": 1500000, "qty": 1, "total": 1500000}, {"id": 6, "resource": "Kit com 20 canudos plásticos", "unit_cost": 800000, "qty": 1, "total": 800000}, {"id": 7, "resource": "Kit com 20 palitos grandes", "unit_cost": 1500000, "qty": 2, "total": 3000000}, {"id": 8, "resource": "Tesoura grande", "unit_cost": 1100000, "qty": 1, "total": 1100000}], "project_cost": 18400000, "contingency_reserve": 1600000, "final_cost": 20000000}, "budget_revised": {"name": "Orçamento 2 (Revisado)", "items": [{"id": 1, "resource": "Folha A4 de cimento geopolimérico branca", "unit_cost": 180000, "qty": 35, "total": 6300000}, {"id": 2, "resource": "Folha A4 de cimento geopolimérico colorida", "unit_cost": 200000, "qty": 1, "total": 200000}, {"id": 3, "resource": "Rolo de fita crepe 28 mm × 50 m", "unit_cost": 2500000, "qty": 1, "total": 2500000}, {"id": 4, "resource": "Tubo de cola", "unit_cost": 3000000, "qty": 1, "total": 3000000}, {"id": 5, "resource": "Kit de barbante 3 metros", "unit_cost": 1500000, "qty": 1, "total": 1500000}, {"id": 6, "resource": "Kit com 20 canudos plásticos", "unit_cost": 800000, "qty": 2, "total": 1600000}, {"id": 7, "resource": "Kit com 20 palitos grandes", "unit_cost": 1500000, "qty": 1, "total": 1500000}, {"id": 8, "resource": "Tesoura grande", "unit_cost": 1100000, "qty": 1, "total": 1100000}], "project_cost": 17700000, "contingency_reserve": 1600000, "final_cost": 19300000, "justification": "O orçamento sofreu alteração devido ao fim do estoque do material 'Kit com 20 palitos grandes', reduzindo sua aquisição de 2 para 1 e sendo necessário incluir um 'Kit com 20 canudos plásticos' no novo plano de aquisições.\n\nNão houve aplicação de multa, pois a alteração foi motivada pelo estoque disponível no mercado pelo fornecedor Bueno, gerando economia líquida de R$ 700.000,00."}, "quality": {"checklist": [{"id": 1, "section": "DOCUMENTAÇÃO", "question": "O projeto fez uso de um macro planning?", "status": "SIM"}, {"id": 2, "section": "DOCUMENTAÇÃO", "question": "O cumprimento do cronograma foi realizado?", "status": "SIM"}, {"id": 3, "section": "DOCUMENTAÇÃO", "question": "A EAP contemplou as fases de planejamento e execução?", "status": "SIM"}, {"id": 4, "section": "DOCUMENTAÇÃO", "question": "Os gastos até a data presente do cronograma atendem ao orçamento previsto?", "status": "SIM"}, {"id": 5, "section": "DOCUMENTAÇÃO", "question": "Os cargos e funções foram escritos e seguidos?", "status": "SIM"}, {"id": 6, "section": "DOCUMENTAÇÃO", "question": "Os custos das obras sofreram alteração ao longo da execução?", "status": "SIM"}, {"id": 7, "section": "DOCUMENTAÇÃO", "question": "O escopo sofreu alteração ao longo da execução do projeto?", "status": "SIM"}, {"id": 8, "section": "DOCUMENTAÇÃO", "question": "As etapas e escopo foram aprovadas pelo sponsor?", "status": "SIM"}, {"id": 9, "section": "EXECUÇÃO", "question": "As etapas do projeto foram obedecidas e cumpridas como planejado?", "status": "SIM"}, {"id": 10, "section": "EXECUÇÃO", "question": "Houve desperdício de material? Ou falta dele?", "status": "NÃO"}, {"id": 11, "section": "EXECUÇÃO", "question": "Os materiais usados na construção eram compatíveis com o que foi descrito e solicitado?", "status": "SIM"}, {"id": 12, "section": "EXECUÇÃO", "question": "A construção atendeu as normas ambientais? Atendeu os requisitos de sustentabilidade?", "status": "SIM"}, {"id": 13, "section": "EXECUÇÃO", "question": "Os riscos foram conhecidos e descritos?", "status": "SIM"}, {"id": 14, "section": "EXECUÇÃO", "question": "A construção utilizou materiais não oficiais?", "status": "NÃO"}, {"id": 15, "section": "EXECUÇÃO", "question": "O fornecedor atendeu aos requisitos de qualidade dos materiais?", "status": "SIM"}, {"id": 16, "section": "EXECUÇÃO", "question": "A construção foi realizada dentro da área prevista de 1m²?", "status": "SIM"}], "procedures": "O controle de qualidade do projeto será realizado na conclusão de cada entrega antes que a mesma seja enviada ao cliente final. O controle de qualidade será realizado através de inspeção nas entregas utilizando-se os checklists apresentados em anexo e respectivamente, os seus indicadores, a fim de manter a qualidade do projeto e alimentar o processo de melhoria contínua. Foram editadas Boas Práticas (Anexo II) para assegurar uniformidade no processo.", "monitoring": [{"requirement": "Materiais", "indicator": "Aferição de conformidade", "goal": "Obter 100% de material de qualidade para construir a torre (folhas de cimento geopolimérico, cola plástica, fita crepe, ferramenta de corte)", "technique": "Visual e táctil", "frequency": "A cada recebimento", "who_measures": "Comprador / Carlos Eduardo", "record_place": "Termo de aceite de produto entregue", "action": "Testar o material", "when": "Ao receber", "responsible": "Carlos Eduardo"}, {"requirement": "Sustentabilidade", "indicator": "Conformidade dos materiais e descarte", "goal": "100% dos materiais aprovados e resíduos segregados", "technique": "Inspeção visual e conferência da lista de materiais", "frequency": "Em cada aquisição e ao final da montagem", "who_measures": "Carlos Eduardo", "record_place": "Checklist de sustentabilidade", "action": "Segregar resíduos e substituir item não conforme", "when": "Na identificação do desvio", "responsible": "Carlos Eduardo"}, {"requirement": "Uniformidade no processo", "indicator": "Aderência ao croqui e ao método de montagem", "goal": "100% das etapas críticas executadas conforme o padrão aprovado", "technique": "Checklist por etapa, inspeção visual e registro fotográfico", "frequency": "Ao concluir cada etapa de montagem", "who_measures": "Carlos Eduardo", "record_place": "Checklist de execução e registro fotográfico", "action": "Corrigir a etapa antes de iniciar a seguinte", "when": "Imediatamente após a inspeção", "responsible": "Carlos Eduardo"}, {"requirement": "Solidez na construção", "indicator": "Estabilidade, prumo e integridade da torre", "goal": "Torre autoportante, sem tombamento, deformação crítica ou apoio externo", "technique": "Inspeção visual, verificação de prumo e teste progressivo de estabilidade", "frequency": "Durante a montagem e antes da entrega", "who_measures": "Carlos Eduardo", "record_place": "Termo de inspeção estrutural", "action": "Reforçar emendas e contraventamentos e repetir o teste", "when": "Antes da apresentação final", "responsible": "Carlos Eduardo"}]}, "risks_plan": {"author": "Matheus e Marciane", "doc_number": "PR-01", "items": [{"id": "R01", "description": "Colapso ou tombamento estrutural da torre durante a montagem, os testes ou a apresentação.", "cause": "Ação do vento; contraventamento insuficiente; falha nas emendas; distribuição inadequada de cargas; sobrecarga estrutural.", "detection_mode": "Inspeção visual de prumo e emendas; medição de deslocamentos; teste progressivo de estabilidade; identificação de deformações, fissuras ou oscilações excessivas.", "consequences": "Danos à estrutura; necessidade de reconstrução; atraso; risco às pessoas; reprovação sumária da entrega perante a banca.", "probability": "Média", "impact": "Muito alto, podendo resultar em perda integral da entrega.", "classification": "Crítico", "response": "Mitigar", "strategy": "Validar previamente o projeto estrutural; instalar contraventamentos; reforçar pontos de emenda; controlar cargas; executar protótipo e teste de estabilidade antes da apresentação.", "responsible": "Design e Engenharia", "cost": "A estimar", "deadline": "Antes da montagem definitiva e da apresentação"}, {"id": "R02", "description": "Interrupção do fornecimento ou aumento de preços do cimento geopolimérico em razão da dependência do fornecedor exclusivo Bueno.", "cause": "Existência de fornecedor único; fornecimento apenas por kits fechados; ausência de estoque de segurança ou alternativa previamente aprovada.", "detection_mode": "Acompanhamento de estoque; confirmação formal do pedido; monitoramento dos prazos de fabricação e entrega; comunicação periódica com o fornecedor.", "consequences": "Paralisação da montagem da fachada; atraso no cronograma; aumento de custos; impossibilidade de reposição tempestiva de materiais.", "probability": "Alta", "impact": "Alto, com potencial de interromper uma etapa crítica do projeto.", "classification": "Crítico", "response": "Mitigar", "strategy": "Antecipar a compra; reservar os kits necessários; negociar garantia de fornecimento e prazo; manter estoque de segurança; avaliar previamente materiais substitutos permitidos pelo regulamento.", "responsible": "Suprimentos e Logística", "cost": "A estimar", "deadline": "Imediato e antes do início da montagem da fachada"}, {"id": "R03", "description": "Autuação e aplicação de multa por infração às regras concorrenciais.", "cause": "Realização de transação monetária, compra compartilhada, rateio ou transferência de materiais com empresas concorrentes.", "detection_mode": "Revisão prévia das aquisições e pagamentos; conferência de comprovantes; validação dos fornecedores e participantes de cada transação; auditoria dos registros financeiros.", "consequences": "Multa de US$ 1.000.000,00; comprometimento do orçamento; possível desclassificação; danos reputacionais e questionamentos de conformidade.", "probability": "Baixa", "impact": "US$ 1.000.000,00, além dos possíveis efeitos administrativos e reputacionais.", "classification": "Crítico", "response": "Evitar", "strategy": "Proibir compras, pagamentos ou compartilhamento de custos com concorrentes; centralizar aquisições em responsável autorizado; documentar todas as transações; submeter situações duvidosas à validação prévia.", "responsible": "Gerente do Projeto / Auditor", "cost": "Custo preventivo a estimar; exposição máxima de US$ 1.000.000,00", "deadline": "Durante todo o projeto, especialmente antes das aquisições"}, {"id": "R04", "description": "Estouro do orçamento em decorrência de alterações solicitadas após a apresentação formal do plano.", "cause": "Definição incompleta do escopo; requisitos não validados; falhas de planejamento; aprovação antecipada de uma solução ainda sujeita a alterações.", "detection_mode": "Registro e comparação das solicitações de mudança; acompanhamento da linha de base do escopo e dos custos; revisão periódica do orçamento.", "consequences": "Acréscimo obrigatório de US$ 100.000,00 por alteração; consumo das reservas; inviabilidade financeira; redução de recursos para outras entregas.", "probability": "Média", "impact": "US$ 100.000,00 por solicitação de mudança realizada após a apresentação formal.", "classification": "Alto", "response": "Evitar", "strategy": "Congelar o escopo antes da apresentação; validar requisitos e desenho com todas as áreas; realizar revisão técnica final; exigir análise de impacto e aprovação do Sponsor para qualquer mudança posterior.", "responsible": "Gerente do Projeto / Sponsor", "cost": "Custo preventivo a estimar; exposição de US$ 100.000,00 por alteração", "deadline": "Antes da apresentação formal do plano"}, {"id": "R05", "description": "Divergência entre a geometria da torre construída e o croqui técnico homologado.", "cause": "Erros de medição; interpretação inadequada do desenho; perda de escala; cortes imprecisos; falhas de montagem ou ausência de gabaritos.", "detection_mode": "Comparação periódica entre a obra e o croqui; medição de altura, largura, alinhamento e diagonais; uso de gabaritos; inspeção fotográfica das etapas.", "consequences": "Perda de pontos nos critérios de simetria e estética; retrabalho; consumo adicional de material; possível rejeição parcial da entrega.", "probability": "Média", "impact": "Alto, com efeito direto na avaliação técnica e estética.", "classification": "Alto", "response": "Mitigar", "strategy": "Converter o croqui em desenho cotado; definir tolerâncias; utilizar gabaritos; conferir medidas por etapa; homologar um protótipo antes da montagem final.", "responsible": "Design e Engenharia", "cost": "A estimar", "deadline": "Durante toda a montagem, com validação final antes da entrega"}, {"id": "R06", "description": "Perda, rasgo ou inutilização das placas cimentícias em formato A4 durante o manuseio e a montagem.", "cause": "Dobragem ou colagem inadequada; manuseio incorreto; armazenamento impróprio; umidade; cortes errados; ausência de peças avulsas para reposição.", "detection_mode": "Inspeção no recebimento; controle individual das placas; acompanhamento das perdas durante corte, dobra e colagem; verificação do estoque remanescente.", "consequences": "Impossibilidade de fechar 100% da fachada; falhas estéticas; retrabalho; atraso; impossibilidade de devolução ou recompra de kits fracionados.", "probability": "Alta", "impact": "Alto, podendo impedir a conclusão integral da fachada.", "classification": "Crítico", "response": "Mitigar", "strategy": "Treinar a equipe; testar previamente a técnica de dobra e colagem; armazenar as placas em local seco e protegido; manusear uma peça por vez; planejar cortes; adquirir margem de segurança por meio de kits adicionais completos.", "responsible": "Design e Engenharia / Suprimentos e Logística", "cost": "A estimar", "deadline": "Antes e durante a montagem da fachada"}, {"id": "R07", "description": "Extrapolação do horário-limite de entrega da obra física ou do dossiê documental.", "cause": "Atrasos na montagem; retrabalho; falhas na integração das equipes; documentação incompleta; ausência de controle do caminho crítico; submissão deixada para o último momento.", "detection_mode": "Monitoramento do cronograma; verificação de marcos intermediários; checklist da entrega; contagem regressiva; acompanhamento separado da obra física e do dossiê.", "consequences": "Pontuação mínima no critério prazo; perda de pontos; entrega incompleta; possível desclassificação do projeto.", "probability": "Média", "impact": "Muito alto, podendo comprometer integralmente a avaliação do projeto.", "classification": "Crítico", "response": "Mitigar", "strategy": "Estabelecer prazo interno anterior às 16h30; concluir a montagem e o dossiê com antecedência; designar responsáveis distintos pela obra e pela documentação; realizar simulação de entrega; manter contingência para impressão e submissão.", "responsible": "Gerente do Projeto / Documentação", "cost": "A estimar", "deadline": "Entrega obrigatória até 16h30, com prazo interno antecipado"}]}, "stakeholders": [{"id": 1, "name": "Nick O' Neil", "role": "Sponsor / Cliente", "power": 3, "interest": 1, "strategy": "Gerenciar de perto", "power_label": "Alto", "interest_label": "Positivo"}, {"id": 2, "name": "Bueno", "role": "Fornecedor Exclusivo", "power": 3, "interest": 1, "strategy": "Gerenciar de perto", "power_label": "Alto", "interest_label": "Positivo"}, {"id": 3, "name": "Ricardo", "role": "Professor / Facilitador / Avaliador", "power": 3, "interest": 1, "strategy": "Gerenciar de perto", "power_label": "Alto", "interest_label": "Positivo"}, {"id": 4, "name": "Mercado Terra X e Lumina", "role": "Empresas Concorrentes", "power": 1, "interest": 0, "strategy": "Acompanhar", "power_label": "Baixo", "interest_label": "Neutro"}], "lessons_learned": {"phases_records": [{"phase": "Apresentação e Aprovação do Escopo Estratégico", "occurrence": "Não foi realizado um estudo mais aprofundado sobre o histórico dos Stakeholders", "complementary_info": "Consultar o LinkedIn para identificar o histórico dos Stakeholders e expectativas prévias."}, {"phase": "Apresentação e Aprovação do Escopo Estratégico", "occurrence": "Não foi indicado na Missão da Vertex Engenharia Brasil qual é o prazo estimado para o alcance da Missão", "complementary_info": "Definido formalmente que a missão corporativa sustentável será alcançada plenamente em 2030."}, {"phase": "Iniciação", "occurrence": "Destaque a consulta ao especialista no início do projeto", "complementary_info": "Informações e restrições importantes para o bom andamento do projeto já foram obtidas antecipadamente na iniciação."}, {"phase": "Aprovação do Croquis Estrutural", "occurrence": "Nesta etapa foi discutido que poderia ter alguma restrição referente aos materiais disponíveis para a construção da Torre", "complementary_info": "Ponto importantíssimo. Alguns recursos possuem limite rigoroso de quantidade no fornecedor."}, {"phase": "Plano de Aquisições", "occurrence": "Após a aprovação do Croquis, time demorou para elaborar o plano de aquisições, mesmo sabendo das restrições de materiais, ficando como últimos a adquirir os materiais", "complementary_info": "Melhorar a organização e agilidade para estruturar o plano, antecipando a concorrência entre os projetos."}], "reflective_questions": {"what_we_already_do": "Planejamento estruturado com 15 artefatos, controle orçamentário rigoroso, gestão ativa de riscos e alinhamento com premissas ESG.", "what_we_must_stop_doing": "Demorar para enviar ordens de compra ao fornecedor em cenário de estoque restrito e subestimar histórico prévio de partes interessadas.", "what_we_must_start_doing": "Consultar o histórico dos stakeholders no início do projeto e instituir simulação prévia de montagem e dobragem com gabaritos.", "what_we_must_improve": "Agilidade no fluxo de compras e auditoria contínua de aderência geométrica entre croqui e obra física através de ciclos PDCA / DMAIC."}}, "communication_plan": [{"phase": "Durante o Planejamento", "content": "Briefing e alinhamento dos requisitos", "target_audience": "Equipe do projeto", "channel": "Reunião presencial", "timing": "Início do projeto", "responsible": "Gerente de Projeto"}, {"phase": "Durante o Planejamento", "content": "Apresentação e aprovação do escopo estratégico", "target_audience": "Sponsor / Cliente", "channel": "Reunião presencial", "timing": "10:30", "responsible": "Gerente de Projeto"}, {"phase": "Durante o Planejamento", "content": "Apresentação do sumário de entregas e lista de materiais", "target_audience": "Sponsor / Equipe", "channel": "Reunião presencial", "timing": "11:00", "responsible": "Gerente de Projeto"}, {"phase": "Durante o Planejamento", "content": "Apresentação e aprovação do croqui estrutural", "target_audience": "Sponsor / Cliente", "channel": "Reunião presencial", "timing": "11:30", "responsible": "Responsável Técnico"}, {"phase": "Durante o Planejamento", "content": "Apresentação e aprovação do plano de aquisições", "target_audience": "Sponsor / Cliente", "channel": "Reunião presencial", "timing": "12:00", "responsible": "Responsável de Suprimentos"}, {"phase": "Durante Execução e Controle", "content": "Liberação do terreno e delimitação da área de implantação", "target_audience": "Equipe do projeto", "channel": "Reunião presencial", "timing": "14:00", "responsible": "Sponsor"}, {"phase": "Durante Execução e Controle", "content": "Alinhamento para início da construção", "target_audience": "Equipe de execução", "channel": "Reunião presencial", "timing": "Antes do início da montagem", "responsible": "Gerente de Projeto"}, {"phase": "Durante Execução e Controle", "content": "Comunicação do andamento, riscos e desvios", "target_audience": "Gerente do Projeto / Equipe", "channel": "Comunicação direta / reunião rápida", "timing": "Durante a construção", "responsible": "Responsável Técnico"}, {"phase": "Durante Execução e Controle", "content": "Comunicação da conclusão da torre e entrega da documentação", "target_audience": "Sponsor / Cliente", "channel": "Reunião presencial", "timing": "16:30", "responsible": "Gerente de Projeto"}, {"phase": "Após entrega do projeto", "content": "Apresentação dos resultados e lições aprendidas", "target_audience": "Sponsor / Equipe / Cliente", "channel": "Plenária presencial", "timing": "16:30 às 17:30", "responsible": "Gerente de Projeto"}, {"phase": "Após entrega do projeto", "content": "Comunicação de encerramento do projeto", "target_audience": "Sponsor / Cliente / Equipe", "channel": "Reunião presencial", "timing": "17:30 às 18:00", "responsible": "Gerente de Projeto"}], "change_requests": [{"id": 1, "number": "1", "project_name": "Vertex Londrina 360", "requester_name": "João — Suprimentos e Logística", "submitted_date": "23/10/2026", "priority": "Alta", "description": "Revisar o plano de aquisições devido à indisponibilidade de estoque do Kit com 20 palitos grandes. Reduzir a quantidade de 2 para 1 kit e aumentar o Kit com 20 canudos plásticos de 1 para 2 kits, mantendo os demais materiais e requisitos aprovados.", "reason": "O fornecedor Bueno não dispunha da quantidade originalmente prevista de palitos. A substituição parcial por canudos permitiu preservar a solução estrutural, evitar interrupção da montagem e manter o projeto dentro das regras de aquisição e do limite orçamentário.", "impacts": {"scope": "Sem alteração do objetivo, da escala 1:350, da área de 1 m², da tripla vocação ou dos critérios de aceitação. Alteração restrita à composição da lista de materiais.", "cost": "Custo do projeto reduzido de R$ 18.400.000,00 para R$ 17.700.000,00. Custo final, com contingência de R$ 1.600.000,00, reduzido de R$ 20.000.000,00 para R$ 19.300.000,00 (economia de R$ 700.000,00).", "schedule": "Sem alteração da entrega final às 16h30. A aquisição revisada foi concluída às 14h40.", "others": "Não houve aplicação de multa regulatória. A rastreabilidade da substituição foi mantida no orçamento, plano de aquisições, qualidade e controle de versões."}, "reference_documents": ["Orçamento 1 — linha de base aprovada.", "Orçamento 2 — orçamento revisado e justificativa da alteração.", "Cronograma Inicial — marco de materiais adquiridos às 14h40.", "Declaração de Escopo do Projeto — objetivo, entregas, premissas e exclusões.", "Plano de Riscos — risco de indisponibilidade do fornecedor e resposta de mitigação.", "Qualidade — conformidade dos materiais e inspeção no recebimento.", "Matriz de Responsabilidades — atribuições de Suprimentos, Auditoria e Gerência do Projeto."], "attachments": ["Lista de materiais originalmente aprovada.", "Cotação/posição de estoque do fornecedor Bueno.", "Comparativo entre Orçamento 1 e Orçamento 2.", "Registro de aquisição e aceite dos materiais substitutos.", "Evidência de comunicação ao Gerente do Projeto e ao Sponsor.", "Checklist de qualidade no recebimento.", "Registro no controle de versões.", "Evidências fotográficas dos materiais recebidos.", "Solicitação de Mudança nº 1 aprovada."], "opinion": "PARECER DO GP: APROVADA. A alteração é necessária por indisponibilidade de estoque, não modifica o escopo nem o prazo final e reduz o custo total em R$ 700.000,00. Os canudos adicionais são compatíveis com a estratégia estrutural e devem ser submetidos à inspeção de qualidade por Carlos Eduardo. Atualizar orçamento, aquisição, cronograma, riscos e controle de versões antes do encerramento.", "sponsor_approval": "Nick O´Neil — Aprovado (23/10/2026)", "manager_approval": "Fernanda — Aprovado (23/10/2026)", "status": "Aprovada"}], "closing_statement": {"project_name": "Vertex Londrina 360", "date": "23/10/2026", "manager": "Fernanda", "client_rep": "Warren Buffet / Nick O´Neil", "classification": "CORPORATIVO", "deliverables": [{"id": 1, "description": "Pacote gerencial consolidado: TAP, escopo, EAP, cronograma, orçamento, planos e matriz RACI.", "responsible": "Fernanda / Matheus / Marciane"}, {"id": 2, "description": "Croqui homologado e torre física autoportante em escala 1:350, dentro da área de 1 m².", "responsible": "Everton / Fabi"}, {"id": 3, "description": "Aquisição e disponibilização dos materiais conforme plano revisado e limite orçamentário.", "responsible": "João / Bueno"}, {"id": 4, "description": "Inspeções de qualidade, auditoria, dossiê final, lições aprendidas e termo de encerramento.", "responsible": "Carlos Eduardo / Fernanda"}], "status": "Encerrado", "evaluation": "Muito Bom", "justification": "O projeto Vertex Londrina 360 foi encerrado após a execução das entregas gerenciais e físicas previstas, conforme os registros disponíveis no workbook.\n\nOs marcos contemplaram aprovação do escopo, entregas, materiais, croqui, aquisições, liberação da área, conclusão da torre e encerramento em 23/10/2026.\n\nO custo final revisado foi de R$ 19.300.000,00, incluindo R$ 1.600.000,00 de contingência, ficando R$ 700.000,00 abaixo do teto de R$ 20.000.000,00.\n\nA alteração de materiais decorreu da indisponibilidade do kit de palitos: reduziu-se um kit e acrescentou-se um kit de canudos, sem multa e sem alteração do escopo. Os controles documentais registram cumprimento do cronograma, aderência à EAP, funções definidas, gastos dentro do orçamento e aprovação do escopo pelo cliente.\n\nA avaliação final é Muito Bom, considerando o atendimento dos objetivos, a economia obtida e as oportunidades de melhoria identificadas em stakeholders e aquisições.", "conclusions": "O projeto demonstrou integração entre gestão, engenharia, suprimentos, documentação, qualidade, riscos e sustentabilidade na entrega do protótipo.\n\n• Partes interessadas: aprofundar a análise prévia dos stakeholders e registrar histórico, influência, expectativas e critérios de aceite desde a iniciação.\n• Iniciação: manter a consulta antecipada a especialistas, pois ela permitiu identificar restrições relevantes antes da execução.\n• Aquisições: iniciar o plano logo após a aprovação do croqui e reservar materiais críticos, reduzindo exposição à concorrência e à falta de estoque.\n• Materiais: confirmar disponibilidade e alternativas permitidas antes da compra, com rastreabilidade das mudanças e impactos no orçamento.\n• Qualidade e riscos: preservar inspeções por etapa, registro fotográfico, teste de estabilidade e acompanhamento dos riscos estruturais e de fornecimento.", "recommendation": "Arquivar os checklists finais, formalizar o aceite do cliente e encerrar administrativamente os riscos residuais após a aprovação deste termo.", "authorizers": [{"name": "Fernanda (Gerente de Projeto)", "email": "fernanda.alves@example.com", "contact": "(61) 99101-2201"}, {"name": "Nick O´Neil (Patrocinador)", "email": "nick@example.com", "contact": "(97) 8101-2360"}, {"name": "Carlos Eduardo (Auditor/Gerente de qualidade)", "email": "carlos.eduardo@example.com", "contact": "(61) 99103-2203"}], "approval_date": "23/10/2026", "approver": "Nick O'Neil"}, "version_control": [{"id": 1, "date": "2026-10-23", "document": "Termo de abertura do projeto", "prev_version": "0", "curr_version": "1", "responsible": "Matheus", "description": "Criação"}, {"id": 2, "date": "2026-10-23", "document": "Termo de abertura do projeto", "prev_version": "1", "curr_version": "2", "responsible": "Marciane", "description": "Alteração do orçamento estimado com base no plano de aquisições."}, {"id": 3, "date": "2026-10-23", "document": "Orçamento e Plano de Aquisições", "prev_version": "1", "curr_version": "2", "responsible": "João", "description": "Substituição parcial de kit de palitos por canudos plásticos devido ao estoque do fornecedor Bueno."}, {"id": 4, "date": "2026-10-23", "document": "Qualidade e Checklists", "prev_version": "1", "curr_version": "2", "responsible": "Carlos Eduardo", "description": "Registro dos testes de estabilidade estrutural e conformidade de descarte sustentável."}]};
let allProjects = [];
let project = null;
let currentTab = 'journey';
let ipmaData = null;

// Inicialização
document.addEventListener('DOMContentLoaded', async () => {
    initNavigation();
    await loadProjectList();
    await loadIpmaData();
});

// Carrega lista de projetos do Supabase ou Cache Local
async function loadProjectList(selectedId = null) {
    try {
        allProjects = await ProjetaCloud.loadProjects();
        if (!allProjects || allProjects.length === 0) {
            allProjects = [JSON.parse(JSON.stringify(SEED_PROJECT))];
            await ProjetaCloud.saveProjects(allProjects);
        }
        if (typeof window !== 'undefined') window.allProjects = allProjects;

        const select = document.getElementById('projectSelector');
        if (select) {
            select.innerHTML = '';
            allProjects.forEach(p => {
                const opt = document.createElement('option');
                opt.value = p.id;
                opt.textContent = `${p.code} - ${p.name} (${p.company || 'Organização'})`;
                select.appendChild(opt);
            });

            const targetId = selectedId || (project && allProjects.some(x => x.id === project.id) ? project.id : allProjects[0].id);
            select.value = targetId;
            await loadProject(targetId);
        }
    } catch (e) {
        console.error('Erro ao listar projetos:', e);
        showToast('Erro ao carregar lista de projetos: ' + e.message, 'danger');
    }
}

// Carrega dados completos do projeto a partir do array em memória
async function loadProject(id) {
    try {
        const found = allProjects.find(p => p.id === id);
        if (!found) throw new Error('Projeto não encontrado');
        project = found;
        if (typeof window !== 'undefined') window.project = project;

        const comp = project.company || 'Organização Executora';
        const compBadge = document.getElementById('companyBadge');
        if (compBadge) compBadge.textContent = comp;
        const subBrand = document.getElementById('headerSubBrand');
        if (subBrand) subBrand.textContent = `${comp} | Framework IPMA-D`;
        const projBadge = document.getElementById('projectBadge');
        if (projBadge) projBadge.textContent = project.classification || 'CORPORATIVO';
        const stBadge = document.getElementById('statusBadge');
        if (stBadge) stBadge.textContent = project.status || 'Iniciação';

        updateSidebarStatusDots();
        renderCurrentTab();
    } catch (e) {
        showToast('Erro ao carregar projeto: ' + e.message, 'danger');
    }
}

// Carrega catálogo IPMA
async function loadIpmaData() {
    ipmaData = IPMA_COMPETENCES;
}

// Salva alterações na Nuvem Supabase
async function saveProject() {
    if (!project) return;
    try {
        const idx = allProjects.findIndex(p => p.id === project.id);
        if (idx >= 0) {
            allProjects[idx] = project;
        } else {
            allProjects.push(project);
        }

        const ok = await ProjetaCloud.saveProjects(allProjects);
        if (ok) {
            showToast('☁️ Projeto sincronizado na Nuvem Supabase com sucesso!', 'success');
        } else {
            showToast('⚠️ Salvo em cache local (sem conexão de nuvem)', 'warning');
        }

        const select = document.getElementById('projectSelector');
        if (select) {
            const opt = select.querySelector(`option[value="${project.id}"]`);
            if (opt) opt.textContent = `${project.code} - ${project.name} (${project.company || 'Organização'})`;
        }
        updateSidebarStatusDots();
        renderCurrentTab();
    } catch (e) {
        showToast('Erro ao salvar: ' + e.message, 'danger');
    }
}

// Exporta Excel via ExcelJS no navegador
async function exportExcel() {
    if (!project) return;
    await exportProjectToExcel(project);
}

// Exporta PDF no navegador
function exportPdf(module = 'all') {
    if (!project) return;
    const htmlContent = renderPdfHtml(project, module);
    const win = window.open('', '_blank');
    if (win) {
        win.document.open();
        win.document.write(htmlContent);
        win.document.close();
    } else {
        showToast('Pop-up bloqueado pelo navegador. Por favor, permita pop-ups para visualizar o PDF.', 'warning');
    }
}

// Restaura para o projeto modelo
async function resetProject() {
    if (!project) return;
    if (!confirm('Deseja restaurar todos os dados deste projeto para o modelo padrão do sistema?')) return;
    try {
        const fresh = JSON.parse(JSON.stringify(SEED_PROJECT));
        fresh.id = project.id;
        fresh.company = project.company || fresh.company;
        fresh.name = project.name || fresh.name;
        fresh.code = project.code || fresh.code;
        project = fresh;
        await saveProject();
        showToast('🔄 Projeto restaurado para os dados originais!', 'success');
        renderCurrentTab();
    } catch (e) {
        showToast('Erro ao restaurar: ' + e.message, 'danger');
    }
}

function openNewProjectModal() {
    currentWizardStep = 1;
    wizardGoToStep(1);
    const modal = document.getElementById('newProjectModal');
    if (modal) modal.style.display = 'flex';
    const cInput = document.getElementById('wizCompany');
    if (cInput) {
        cInput.value = '';
        setTimeout(() => cInput.focus(), 60);
    }
    const nInput = document.getElementById('wizName');
    if (nInput) nInput.value = '';
    const cdInput = document.getElementById('wizCode');
    if (cdInput) cdInput.value = '';
}

function closeNewProjectModal() {
    const modal = document.getElementById('newProjectModal');
    if (modal) modal.style.display = 'none';
}

function wizardGoToStep(step) {
    if (step > 1) {
        const comp = document.getElementById('wizCompany').value.trim();
        if (!comp) {
            showToast('Por favor, informe o Nome da Empresa (Organização Executora) para prosseguir.', 'warning');
            return;
        }
    }
    if (step > 2) {
        const name = document.getElementById('wizName').value.trim();
        const code = document.getElementById('wizCode').value.trim();
        if (!name || !code) {
            showToast('Por favor, preencha o Nome do Projeto e o Código/Sigla para avançar.', 'warning');
            return;
        }
    }

    currentWizardStep = step;
    for (let i = 1; i <= 3; i++) {
        const panel = document.getElementById(`wizardPanel${i}`);
        const node = document.getElementById(`stepNode${i}`);
        if (panel) {
            if (i === step) panel.classList.add('active');
            else panel.classList.remove('active');
        }
        if (node) {
            if (i === step) {
                node.classList.add('active');
                node.classList.remove('completed');
            } else if (i < step) {
                node.classList.remove('active');
                node.classList.add('completed');
            } else {
                node.classList.remove('active');
                node.classList.remove('completed');
            }
        }
    }

    if (step === 3) {
        calculateWizardDuration();
    }
}

function wizardNextStep(fromStep) {
    if (fromStep === 1) {
        const comp = document.getElementById('wizCompany').value.trim();
        if (!comp) {
            showToast('O Nome da Empresa é obrigatório.', 'warning');
            document.getElementById('wizCompany').focus();
            return;
        }
        wizardGoToStep(2);
    } else if (fromStep === 2) {
        const name = document.getElementById('wizName').value.trim();
        const code = document.getElementById('wizCode').value.trim();
        if (!name) {
            showToast('O Nome do Projeto é obrigatório.', 'warning');
            document.getElementById('wizName').focus();
            return;
        }
        if (!code) {
            showToast('O Código / Sigla do Projeto é obrigatório.', 'warning');
            document.getElementById('wizCode').focus();
            return;
        }
        wizardGoToStep(3);
    }
}

function calculateWizardDuration() {
    const startVal = document.getElementById('wizStartDate').value;
    const endVal = document.getElementById('wizEndDate').value;
    const durInput = document.getElementById('wizDuration');
    if (!durInput) return;

    if (startVal && endVal) {
        const d1 = new Date(startVal);
        const d2 = new Date(endVal);
        const diffTime = d2.getTime() - d1.getTime();
        const diffDays = Math.round(diffTime / (1000 * 3600 * 24));
        if (diffDays > 0) {
            const approxMonths = Math.round(diffDays / 30.4375);
            durInput.value = `${approxMonths} meses (${diffDays} dias)`;
        } else {
            durInput.value = 'Data de término deve ser posterior à inicial';
        }
    }
}


async function handleCreateProject(e) {
    e.preventDefault();
    const company = document.getElementById('wizCompany').value.trim();
    const client = document.getElementById('wizClient').value.trim();
    const name = document.getElementById('wizName').value.trim();
    const code = document.getElementById('wizCode').value.trim();
    const classification = document.getElementById('wizClassification').value.trim();
    const startDate = document.getElementById('wizStartDate').value.trim();
    const endDate = document.getElementById('wizEndDate').value.trim();
    const duration = document.getElementById('wizDuration').value.trim();
    const manager = document.getElementById('wizManager').value.trim();
    const sponsor = document.getElementById('wizSponsor').value.trim();
    const budget = document.getElementById('wizBudget').value.trim();
    const templateRadio = document.querySelector('input[name="wizTemplateMode"]:checked');
    const clone_template = templateRadio ? (templateRadio.value === 'clone') : true;

    if (!company) {
        showToast('Informe o Nome da Empresa (Organização Executora).', 'warning');
        wizardGoToStep(1);
        return;
    }
    if (!name || !code) {
        showToast('Informe o Nome e Código do Projeto.', 'warning');
        wizardGoToStep(2);
        return;
    }

    const newId = `proj-${Date.now()}`;
    let newProj = {};

    if (clone_template) {
        newProj = JSON.parse(JSON.stringify(SEED_PROJECT));
        newProj.id = newId;
        newProj.company = company;
        newProj.client = client || "Cliente Contratante";
        newProj.name = name;
        newProj.code = code;
        newProj.classification = classification || "CORPORATIVO";
        newProj.date = startDate || "2026-11-01";
        newProj.start_date = startDate || "2026-11-01";
        newProj.end_date = endDate || "2027-11-01";
        newProj.duration = duration || "12 meses";
        newProj.manager = manager || "Gerente de Projeto";
        newProj.sponsor = sponsor || "Patrocinador";
        newProj.budget_limit = budget || "R$ 1.000.000,00";

        if (newProj.tap) {
            newProj.tap.company = company;
            newProj.tap.project_name = name;
            newProj.tap.project_code = code;
            newProj.tap.sponsor_name = sponsor || "Patrocinador";
            newProj.tap.manager_name = manager || "Gerente de Projeto";
            newProj.tap.budget_limit = budget || "R$ 1.000.000,00";
            newProj.tap.start_date = startDate || "2026-11-01";
            newProj.tap.end_date = endDate || "2027-11-01";
            newProj.tap.estimated_duration = duration || "12 meses";
        }
    } else {
        newProj = {
            id: newId,
            company,
            client: client || "Cliente Contratante",
            name,
            code,
            classification: classification || "CORPORATIVO",
            date: startDate || "2026-11-01",
            start_date: startDate || "2026-11-01",
            end_date: endDate || "2027-11-01",
            duration: duration || "12 meses",
            manager: manager || "Gerente de Projeto",
            sponsor: sponsor || "Patrocinador",
            budget_limit: budget || "R$ 1.000.000,00",
            status: "Iniciação",
            doc_status: {
                instructions: "em_elaboracao",
                tap: "em_elaboracao",
                stakeholders: "nao_iniciado",
                scope: "nao_iniciado",
                wbs: "nao_iniciado",
                schedule: "nao_iniciado",
                raci: "nao_iniciado",
                budget: "nao_iniciado",
                risks: "nao_iniciado",
                communication: "nao_iniciado",
                quality: "nao_iniciado",
                resources: "nao_iniciado",
                lessons: "em_acompanhamento",
                budget_revised: "nao_iniciado",
                changes: "nao_iniciado",
                closing: "nao_iniciado",
                versions: "em_elaboracao"
            },
            tap: {
                company, project_name: name, project_code: code,
                sponsor_name: sponsor || "Patrocinador",
                manager_name: manager || "Gerente de Projeto",
                budget_limit: budget || "R$ 1.000.000,00",
                start_date: startDate || "2026-11-01",
                end_date: endDate || "2027-11-01",
                estimated_duration: duration || "12 meses",
                project_justification: "", smart_objective: "", macro_scope: "",
                milestones_gates: [], critical_success_factors: [], assumptions: [], constraints: []
            },
            scope_statement: { deliverables: [], exclusions: [] },
            wbs_nodes: [],
            schedule: [],
            resources: { members: [] },
            raci_matrix: { members: [], activities: [] },
            budget_baseline: { items: [], total_cost: 0 },
            budget_revised: { items: [], total_cost: 0 },
            quality: { checklist: [], monitoring: [] },
            risks_plan: { items: [] },
            stakeholders: [],
            lessons_learned: { phases_records: [], questions: {} },
            communication_plan: [],
            change_requests: [],
            closing_statement: { deliverables: [] },
            version_control: []
        };
    }

    allProjects.push(newProj);
    await ProjetaCloud.saveProjects(allProjects);
    closeNewProjectModal();
    showToast(`🎉 Projeto "${newProj.name}" da empresa "${newProj.company}" criado e salvo na nuvem!`, 'success');
    currentTab = 'journey';
    await loadProjectList(newProj.id);
}

async function deleteCurrentProject() {
    if (!project) return;
    if (allProjects.length <= 1) {
        showToast('Não é possível excluir o único projeto cadastrado.', 'warning');
        return;
    }
    if (!confirm(`Tem certeza que deseja excluir o projeto "${project.name}" (${project.code})?`)) return;

    allProjects = allProjects.filter(p => p.id !== project.id);
    await ProjetaCloud.saveProjects(allProjects);
    showToast('Projeto excluído com sucesso.', 'info');
    project = null;
    await loadProjectList();
}

function initNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            currentTab = item.getAttribute('data-tab');
            renderCurrentTab();
        });
    });

    document.getElementById('projectSelector').addEventListener('change', (e) => {
        loadProject(e.target.value);
    });

    const btnNew = document.getElementById('btnNewProject');
    if (btnNew) btnNew.addEventListener('click', openNewProjectModal);

    const btnDel = document.getElementById('btnDeleteProject');
    if (btnDel) btnDel.addEventListener('click', deleteCurrentProject);

    document.getElementById('btnSave').addEventListener('click', saveProject);
    document.getElementById('btnExportExcel').addEventListener('click', exportExcel);
    document.getElementById('btnExportPdfAll').addEventListener('click', () => exportPdf('all'));
    document.getElementById('btnReset').addEventListener('click', resetProject);
}

// Roteia a renderização da aba atual
function renderCurrentTab() {
    const container = document.getElementById('mainContentArea');
    if (!project) {
        container.innerHTML = '<div style="padding:40px; text-align:center;">Nenhum projeto selecionado. Clique em <strong>➕ Novo Projeto</strong> para iniciar a jornada.</div>';
        return;
    }

    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('data-tab') === currentTab) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    updateSidebarStatusDots();

    switch (currentTab) {
        case 'journey': renderJourney(container); break;
        case 'dashboard': renderDashboard(container); break;
        case 'instructions': renderInstructions(container); break;
        case 'tap': renderTap(container); break;
        case 'scope': renderScope(container); break;
        case 'wbs': renderWbs(container); break;
        case 'schedule': renderSchedule(container); break;
        case 'resources': renderResources(container); break;
        case 'raci': renderRaci(container); break;
        case 'budget': renderBudget(container, false); break;
        case 'budget_revised': renderBudget(container, true); break;
        case 'quality': renderQuality(container); break;
        case 'risks': renderRisks(container); break;
        case 'stakeholders': renderStakeholders(container); break;
        case 'lessons': renderLessons(container); break;
        case 'communication': renderCommunication(container); break;
        case 'changes': renderChanges(container); break;
        case 'closing': renderClosing(container); break;
        case 'versions': renderVersions(container); break;
        default: container.innerHTML = '<h3>Módulo não encontrado</h3>';
    }
}

// ----------------- PAINEL EXECUTIVO: JORNADA DO GP -----------------

function renderJourney(c) {
    if (!project) return;
    const comp = project.company || 'Organização Executora';
    const pName = project.name || 'Projeto';
    const pCode = project.code || 'PRJ';
    const pStart = project.start_date || project.date || '2026-10-23';
    const pEnd = project.end_date || 'A definir';
    const pDur = project.duration || (project.tap && project.tap.estimated_duration) || '12 meses';
    const pManager = project.manager || 'Gerente de Projeto';
    const pSponsor = project.sponsor || 'Patrocinador';
    const pBudget = project.budget_limit || (project.tap && project.tap.budget_limit) || 'R$ 1.000.000,00';
    const pClass = project.classification || 'CORPORATIVO';

    const docStatus = project.doc_status || {};
    
    const allDocKeys = ['tap', 'stakeholders', 'scope', 'wbs', 'schedule', 'raci', 'budget', 'risks', 'communication', 'quality', 'resources', 'lessons', 'budget_revised', 'changes', 'closing', 'versions'];
    const totalDocs = allDocKeys.length;
    let countDone = 0;
    let countActive = 0;
    let countProgress = 0;
    let countNotStarted = 0;

    allDocKeys.forEach(k => {
        const s = docStatus[k] || 'em_elaboracao';
        if (s === 'concluido') countDone++;
        else if (s === 'em_acompanhamento') countActive++;
        else if (s === 'em_elaboracao') countProgress++;
        else countNotStarted++;
    });

    const completionRate = Math.round(((countDone + countActive * 0.7) / totalDocs) * 100);

    function getStatusBadge(st) {
        if (st === 'concluido') return '<span class="badge badge-success" style="font-size:10px;">🟢 Concluído</span>';
        if (st === 'em_acompanhamento') return '<span class="badge" style="background:#dbeafe; color:#1e40af; font-size:10px;">🔵 Em Acompanhamento</span>';
        if (st === 'em_elaboracao') return '<span class="badge badge-warning" style="font-size:10px;">🟡 Em Elaboração</span>';
        return '<span class="badge" style="background:#f1f5f9; color:#64748b; font-size:10px;">⚪ Não Iniciado</span>';
    }

    function renderJourneyCard(key, title, icon, desc, phaseClass, isFeatured = false) {
        const st = docStatus[key] || 'em_elaboracao';
        return `
            <div class="journey-doc-card ${isFeatured ? 'featured-card' : ''}">
                <div class="journey-doc-top">
                    <div style="display:flex; align-items:center; gap:6px;">
                        <span style="font-size:16px;">${icon}</span>
                        <a href="javascript:void(0)" onclick="switchTab('${key}')" class="journey-doc-title">${title}</a>
                    </div>
                    ${getStatusBadge(st)}
                </div>
                <div class="journey-doc-desc">${desc}</div>
                <div class="journey-doc-footer">
                    <select class="form-control" style="font-size:11px; padding:2px 6px; width:auto;" onchange="updateDocStatus('${key}', this.value); renderJourney(document.getElementById('mainContentArea'));">
                        <option value="nao_iniciado" ${st === 'nao_iniciado' ? 'selected' : ''}>Não Iniciado</option>
                        <option value="em_elaboracao" ${st === 'em_elaboracao' ? 'selected' : ''}>Em Elaboração</option>
                        <option value="em_acompanhamento" ${st === 'em_acompanhamento' ? 'selected' : ''}>Em Acompanhamento</option>
                        <option value="concluido" ${st === 'concluido' ? 'selected' : ''}>Concluído</option>
                    </select>
                    <button class="btn btn-outline" style="font-size:11px; padding:2px 8px;" onclick="switchTab('${key}')">Abrir ➔</button>
                </div>
            </div>
        `;
    }

    c.innerHTML = `
        <div class="journey-header-card">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px;">
                <div>
                    <span class="badge badge-info" style="margin-bottom:8px;">Jornada do Gerente de Projetos | Ciclo de Vida IPMA-D</span>
                    <h2 style="margin:4px 0 6px 0; font-size:22px; color:#ffffff;">${pName}</h2>
                    <div style="font-size:13px; color:#94a3b8;">
                        Organização Executora: <strong style="color:#38bdf8;">${comp}</strong> | Código: <strong>${pCode}</strong> | Classificação: <strong>${pClass}</strong>
                    </div>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:11px; color:#94a3b8; text-transform:uppercase;">Maturidade de Governança</div>
                    <div style="font-size:26px; font-weight:800; color:#10b981;">${completionRate}%</div>
                    <div style="font-size:11.5px; color:#cbd5e1;">${countDone} de ${totalDocs} documentos concluídos</div>
                </div>
            </div>

            <div class="journey-header-grid">
                <div class="journey-stat-item">
                    <span class="journey-stat-label">Prazo Previsto de Conclusão</span>
                    <span class="journey-stat-value">📅 ${pStart} a ${pEnd}</span>
                    <small style="color:#94a3b8; font-size:11px;">Duração total: ${pDur}</small>
                </div>
                <div class="journey-stat-item">
                    <span class="journey-stat-label">Gerente do Projeto (GP)</span>
                    <span class="journey-stat-value">👤 ${pManager}</span>
                    <small style="color:#94a3b8; font-size:11px;">Liderança de Execução</small>
                </div>
                <div class="journey-stat-item">
                    <span class="journey-stat-label">Patrocinador (Sponsor)</span>
                    <span class="journey-stat-value">🎯 ${pSponsor}</span>
                    <small style="color:#94a3b8; font-size:11px;">Governança & Aprovação</small>
                </div>
                <div class="journey-stat-item">
                    <span class="journey-stat-label">Teto Orçamentário</span>
                    <span class="journey-stat-value">💰 ${pBudget}</span>
                    <small style="color:#94a3b8; font-size:11px;">Linha de Base Aprovada</small>
                </div>
            </div>
        </div>

        <div class="journey-phases-grid">
            
            <!-- FASE 1: INICIAÇÃO -->
            <div class="phase-column">
                <div class="phase-column-header phase-1">
                    <div class="phase-column-title">
                        <span>🟢 1. Iniciação</span>
                    </div>
                    <span class="badge badge-success" style="font-size:10.5px;">2 Documentos</span>
                </div>
                <div class="phase-cards-list">
                    ${renderJourneyCard('tap', 'Termo de Abertura (TAP)', '📝', 'Autorização formal do início do projeto, premissas, justificativa e teto orçamentário.', 'phase-1')}
                    ${renderJourneyCard('stakeholders', 'Partes Interessadas', '🤝', 'Mapeamento de poder x interesse e matriz de estratégias de engajamento.', 'phase-1')}
                </div>
            </div>

            <!-- FASE 2: PLANEJAMENTO -->
            <div class="phase-column">
                <div class="phase-column-header phase-2">
                    <div class="phase-column-title">
                        <span>🔵 2. Planejamento</span>
                    </div>
                    <span class="badge badge-primary" style="font-size:10.5px;">9 Documentos</span>
                </div>
                <div class="phase-cards-list">
                    ${renderJourneyCard('scope', 'Declaração de Escopo', '🎯', 'Objetivos, entregas, limites, premissas e exclusões formais do projeto.', 'phase-2')}
                    ${renderJourneyCard('wbs', 'EAP & WBS', '🌳', 'Decomposição hierárquica das entregas e pacotes de trabalho.', 'phase-2')}
                    ${renderJourneyCard('schedule', 'Cronograma & Marcos', '⏱️', 'Marcos estratégicos (gates), durações e datas previstas de entrega.', 'phase-2')}
                    ${renderJourneyCard('raci', 'Matriz RACI', '📊', 'Governança clara de responsabilidades por entrega (R, A, C, I).', 'phase-2')}
                    ${renderJourneyCard('budget', 'Orçamento Linha de Base', '💰', 'Previsão inicial de insumos, consultoria e reserva de contingência.', 'phase-2')}
                    ${renderJourneyCard('risks', 'Plano de Riscos', '⚠️', 'Identificação P x I, respostas e planos de mitigação.', 'phase-2')}
                    ${renderJourneyCard('communication', 'Plano de Comunicação', '📢', 'Matriz 5W2H de canais, periodicidade e público-alvo.', 'phase-2')}
                    ${renderJourneyCard('quality', 'Plano de Qualidade', '✅', 'Requisitos, indicadores, metas e monitoramento contínuo.', 'phase-2')}
                    ${renderJourneyCard('resources', 'Recursos & Equipe', '👥', 'Quadro de equipes, turnos e alocação de especialistas.', 'phase-2')}
                </div>
            </div>

            <!-- FASE 3: EXECUÇÃO & MONITORAMENTO -->
            <div class="phase-column">
                <div class="phase-column-header phase-3">
                    <div class="phase-column-title">
                        <span>🟠 3. Execução & Monitoramento</span>
                    </div>
                    <span class="badge badge-warning" style="font-size:10.5px;">3 Documentos</span>
                </div>
                <div class="phase-cards-list">
                    ${renderJourneyCard('lessons', 'Lições Aprendidas', '💡', '⚡ DOCUMENTO VIVO CONTÍNUO: Deve ser alimentado ativamente durante todo o projeto a cada ocorrência!', 'phase-3', true)}
                    ${renderJourneyCard('budget_revised', 'Orçamento Revisado', '📈', 'Acompanhamento de custos reais, desvios e justificativas orçamentárias.', 'phase-3')}
                    ${renderJourneyCard('changes', 'Solicitação de Mudanças', '🔀', 'Controle formal de alterações em escopo, prazo ou custo com aprovação.', 'phase-3')}
                </div>
            </div>

            <!-- FASE 4: ENCERRAMENTO -->
            <div class="phase-column">
                <div class="phase-column-header phase-4">
                    <div class="phase-column-title">
                        <span>🟣 4. Encerramento</span>
                    </div>
                    <span class="badge" style="background:#ede9fe; color:#6d28d9; font-size:10.5px;">2 Documentos</span>
                </div>
                <div class="phase-cards-list">
                    ${renderJourneyCard('closing', 'Termo de Encerramento', '🏁', 'Preenchido ao final: validação de entregas, aceites do cliente e avaliação final.', 'phase-4')}
                    ${renderJourneyCard('versions', 'Controle de Versões', '🕒', 'Trilha final de auditoria de versões e governança dos artefatos.', 'phase-4')}
                </div>
            </div>

        </div>
    `;
}

// ----------------- CONTROLE DE JORNADA E NAVEGAÇÃO -----------------

function switchTab(tabKey) {
    currentTab = tabKey;
    if (typeof window !== 'undefined') window.currentTab = currentTab;
    document.querySelectorAll('.nav-item').forEach(i => {
        if (i.getAttribute('data-tab') === tabKey) {
            i.classList.add('active');
        } else {
            i.classList.remove('active');
        }
    });

    // Mapeamento dinâmico para a barra superior do Ciclo de Vida
    const phaseMap = {
        'tap': 'initiation',
        'stakeholders': 'initiation',
        'instructions': 'initiation',
        'scope': 'planning',
        'wbs': 'planning',
        'schedule': 'planning',
        'raci': 'planning',
        'budget': 'planning',
        'risks': 'planning',
        'communication': 'planning',
        'quality': 'planning',
        'resources': 'planning',
        'lessons': 'execution',
        'budget_revised': 'execution',
        'changes': 'execution',
        'closing': 'closing',
        'versions': 'closing'
    };
    const targetPhase = phaseMap[tabKey];
    if (targetPhase) {
        document.querySelectorAll('.lifecycle-step').forEach(s => {
            if (s.getAttribute('data-phase') === targetPhase) s.classList.add('active');
            else s.classList.remove('active');
        });
    } else if (tabKey === 'journey') {
        const projStatus = (project && project.status) || 'Iniciação';
        const stKey = projStatus === 'Encerrado' ? 'closing' : (projStatus === 'Execução' ? 'execution' : (projStatus === 'Planejamento' ? 'planning' : 'initiation'));
        document.querySelectorAll('.lifecycle-step').forEach(s => {
            if (s.getAttribute('data-phase') === stKey) s.classList.add('active');
            else s.classList.remove('active');
        });
    }

    renderCurrentTab();
    updateSidebarStatusDots();
}

function navigatePhase(phaseKey) {
    document.querySelectorAll('.lifecycle-step').forEach(step => {
        if (step.getAttribute('data-phase') === phaseKey) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
    switchTab('journey');
    setTimeout(() => {
        const mapIndex = { 'initiation': 0, 'planning': 1, 'execution': 2, 'closing': 3 };
        const cols = document.querySelectorAll('.phase-column');
        if (cols && cols[mapIndex[phaseKey]]) {
            cols[mapIndex[phaseKey]].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 100);
}

async function updateDocStatus(docKey, newStatus) {
    if (!project) return;
    if (!project.doc_status) project.doc_status = {};
    project.doc_status[docKey] = newStatus;
    if (docKey === 'budget') project.doc_status['budget1'] = newStatus;
    if (docKey === 'budget_revised') project.doc_status['budget2'] = newStatus;
    updateSidebarStatusDots();
    try {
        const ok = await ProjetaCloud.saveProjects(allProjects);
        if (ok) {
            showToast(`Status de "${docKey}" atualizado: ${getDocStatusLabel(newStatus)}`, 'info');
        } else {
            showToast(`Status atualizado em cache local: ${getDocStatusLabel(newStatus)}`, 'info');
        }
    } catch (e) {
        console.error('Erro ao salvar status do documento:', e);
    }
}

function getDocStatusLabel(status) {
    if (status === 'concluido') return 'Concluído / Homologado';
    if (status === 'em_acompanhamento') return 'Em Acompanhamento';
    if (status === 'em_elaboracao') return 'Em Elaboração';
    return 'Não Iniciado';
}

function updateSidebarStatusDots() {
    if (!project || !project.doc_status) return;
    const statusMap = project.doc_status;
    if (statusMap.budget1 && !statusMap.budget) statusMap.budget = statusMap.budget1;
    if (statusMap.budget2 && !statusMap.budget_revised) statusMap.budget_revised = statusMap.budget2;
    if (!statusMap.instructions) statusMap.instructions = 'concluido';

    for (const [key, status] of Object.entries(statusMap)) {
        const dot = document.getElementById(`dot-${key}`);
        if (dot) {
            dot.className = 'nav-status-dot';
            if (status === 'concluido') dot.classList.add('dot-concluido');
            else if (status === 'em_acompanhamento') dot.classList.add('dot-em-acompanhamento');
            else if (status === 'em_elaboracao') dot.classList.add('dot-em-elaboracao');
            else dot.classList.add('dot-nao-iniciado');
        }
    }
    updateLifecycleBarProgress();
}

function updateLifecycleBarProgress() {
    if (!project || !project.doc_status) return;
    const st = project.doc_status;
    const phases = {
        initiation: ['tap', 'stakeholders'],
        planning: ['scope', 'wbs', 'schedule', 'raci', 'budget', 'risks', 'communication', 'quality', 'resources'],
        execution: ['lessons', 'budget_revised', 'changes'],
        closing: ['closing', 'versions']
    };

    for (const [phaseKey, docs] of Object.entries(phases)) {
        const step = document.querySelector(`.lifecycle-step[data-phase="${phaseKey}"]`);
        if (step) {
            const done = docs.filter(k => (st[k] === 'concluido' || (k === 'budget' && st['budget1'] === 'concluido') || (k === 'budget_revised' && st['budget2'] === 'concluido'))).length;
            const total = docs.length;
            let badge = step.querySelector('.step-progress-badge');
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'step-progress-badge badge';
                badge.style.cssText = 'font-size:10px; margin-left:auto; padding:2px 6px;';
                step.appendChild(badge);
            }
            if (done === total) {
                badge.textContent = `${done}/${total} ✓`;
                badge.style.background = '#dcfce7';
                badge.style.color = '#15803d';
            } else if (done > 0) {
                badge.textContent = `${done}/${total}`;
                badge.style.background = '#e0f2fe';
                badge.style.color = '#0369a1';
            } else {
                badge.textContent = `${done}/${total}`;
                badge.style.background = '#f1f5f9';
                badge.style.color = '#64748b';
            }
        }
    }
}


// Make functions globally available for inline event handlers
window.wizardGoToStep = wizardGoToStep;
window.wizardNextStep = wizardNextStep;
window.calculateWizardDuration = calculateWizardDuration;
window.openNewProjectModal = openNewProjectModal;
window.closeNewProjectModal = closeNewProjectModal;
window.handleCreateProject = handleCreateProject;
window.switchTab = switchTab;
window.navigatePhase = navigatePhase;
window.updateDocStatus = updateDocStatus;
window.renderJourney = renderJourney;
window.exportPdf = exportPdf;


// Helper para botão de exportação individual de PDF
function renderModulePdfBtn(modName, label = 'Exportar este Documento em PDF') {
    return `
        <button class="btn btn-outline" style="border-color:#0284c7; color:#0284c7; font-size:12px;" onclick="exportPdf('${modName}')">
            📄 ${label}
        </button>
    `;
}

// Botões de Navegação Sequencial da Jornada no rodapé dos documentos
function renderDocJourneyNav(prevTab, prevLabel, nextTab, nextLabel) {
    return `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:24px; padding-top:16px; border-top:1px solid #e2e8f0; flex-wrap:wrap; gap:10px;">
            <div>
                ${prevTab ? `<button class="btn btn-outline" onclick="switchTab('${prevTab}')" style="font-size:12.5px;">⬅️ ${prevLabel}</button>` : `<button class="btn btn-outline" onclick="switchTab('journey')" style="font-size:12.5px;">🗺️ Voltar para Jornada</button>`}
            </div>
            <div style="display:flex; gap:10px;">
                <button class="btn btn-success" onclick="saveProject()" style="font-size:12.5px;">💾 Salvar Alterações</button>
                ${nextTab ? `<button class="btn btn-primary" onclick="switchTab('${nextTab}')" style="font-size:12.5px;">${nextLabel} ➔</button>` : `<button class="btn btn-primary" onclick="switchTab('journey')" style="font-size:12.5px;">🏁 Visão Geral da Jornada ➔</button>`}
            </div>
        </div>
    `;
}

// Cabeçalho de Ciclo de Vida Reutilizável em Todos os Módulos
function renderDocLifecycleHeader(docKey, docTitle, phaseNum, phaseName, description = '') {
    const docStatus = (project && project.doc_status && (project.doc_status[docKey] || (docKey === 'budget' && project.doc_status['budget1']) || (docKey === 'budget_revised' && project.doc_status['budget2']))) || 'em_elaboracao';
    const comp = (project && project.company) || 'Organização Executora';
    const pName = (project && project.name) || 'Projeto';
    const pCode = (project && project.code) || 'PRJ';
    const pDates = `${(project && (project.start_date || project.date)) || '2026-10-23'} a ${(project && project.end_date) || 'A definir'}`;
    const pDuration = (project && (project.duration || (project.tap && project.tap.estimated_duration))) || '12 meses';

    let phaseColor = '#10b981';
    if (phaseNum === 2) phaseColor = '#0284c7';
    if (phaseNum === 3) phaseColor = '#f59e0b';
    if (phaseNum === 4) phaseColor = '#8b5cf6';

    const isLive = docKey === 'lessons';

    return `
        <div class="doc-lifecycle-banner">
            <div class="doc-lifecycle-left">
                <div class="doc-breadcrumb">
                    <a href="javascript:void(0)" onclick="switchTab('journey')" style="color:#0284c7; text-decoration:none; font-weight:600;">Jornada do GP</a>
                    <span>›</span>
                    <span style="color:${phaseColor}; font-weight:600;">Fase ${phaseNum}: ${phaseName}</span>
                    <span>›</span>
                    <strong>${docTitle}</strong>
                </div>
                <div class="doc-context-info">
                    🏢 Organização: <strong>${comp}</strong> | 📁 Projeto: <strong>${pName}</strong> (${pCode}) | 📅 Prazo: <strong>${pDates}</strong> (${pDuration})
                </div>
                ${description ? `<div style="font-size:12px; color:#64748b; margin-top:2px;">${description}</div>` : ''}
            </div>
            <div class="doc-lifecycle-right">
                ${isLive ? `<span class="badge" style="background:#fef3c7; color:#92400e; border:1px solid #fde68a;">⚡ Documento Vivo (Contínuo)</span>` : ''}
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="font-size:11.5px; color:#64748b; font-weight:600;">Status:</span>
                    <select class="form-control" style="font-size:12px; padding:4px 8px; width:auto; font-weight:600;" onchange="updateDocStatus('${docKey}', this.value)">
                        <option value="nao_iniciado" ${docStatus === 'nao_iniciado' ? 'selected' : ''}>⚪ Não Iniciado</option>
                        <option value="em_elaboracao" ${docStatus === 'em_elaboracao' ? 'selected' : ''}>🟡 Em Elaboração</option>
                        <option value="em_acompanhamento" ${docStatus === 'em_acompanhamento' ? 'selected' : ''}>🔵 Em Acompanhamento</option>
                        <option value="concluido" ${docStatus === 'concluido' ? 'selected' : ''}>🟢 Concluído / Homologado</option>
                    </select>
                </div>
                ${renderModulePdfBtn(docKey, 'Exportar PDF')}
            </div>
        </div>
    `;
}

// ---------------- DASHBOARD & IPMA-D ----------------
async function renderDashboard(c) {
    // Busca cobertura real da API
    let cov = { overall_percentage: 100, covered_elements: 28, total_elements: 28, areas: [] };
    try {
        cov = getCompetenceCoverage(project);
    } catch (e) {
        console.error('Erro ao buscar cobertura', e);
    }

    const b2 = project.budget_revised || project.budget_baseline || {};
    const finalCost = b2.final_cost || 0;
    const budgetLimit = (project.tap && project.tap.budget_limit) || "US$ 20.000.000,00";

    const schedule = project.schedule || [];
    const totalGates = schedule.length;
    const completedGates = schedule.filter(s => s.status === 'Concluído').length;
    const gatePct = totalGates > 0 ? Math.round((completedGates / totalGates) * 100) : 0;

    const evaluation = (project.closing_statement && project.closing_statement.evaluation) || project.evaluation || "Em Andamento";

    const dom = cov.domains || {};
    function formatArea(domKey, defaultTotal) {
        if (dom[domKey]) {
            const d = dom[domKey];
            return {
                covered: d.covered_elements,
                total: d.total_elements,
                percentage: d.percentage,
                elements: (d.elements || []).map(e => ({
                    code: e.code,
                    name: e.name,
                    is_covered: e.covered,
                    status: e.covered ? 'Coberto ✓' : 'Pendente'
                }))
            };
        }
        if (Array.isArray(cov.areas)) {
            const found = cov.areas.find(a => a.area_key === domKey);
            if (found) return found;
        }
        return { covered: defaultTotal, total: defaultTotal, percentage: 100, elements: [] };
    }

    const pArea = formatArea('perspective', 5);
    const peArea = formatArea('people', 10);
    const prArea = formatArea('practice', 13);

    c.innerHTML = `
        <div class="content-header">
            <div>
                <h2>Visão Executiva & Olho da Competência IPMA-D</h2>
                <p>Monitoramento integrado do projeto <strong>${project.name}</strong> e aderência às 28 competências do referencial ICB4.</p>
            </div>
            <div>
                <button class="btn btn-primary" onclick="exportPdf('all')">📑 Dossiê Consolidado em PDF</button>
            </div>
        </div>

        <div class="grid-4" style="margin-bottom: 24px;">
            <div class="card" style="border-top: 4px solid #0284c7;">
                <div style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700;">Cobertura IPMA ICB4</div>
                <div style="font-size: 28px; font-weight: 800; color: #0284c7; margin: 4px 0;">${cov.overall_percentage}%</div>
                <div style="font-size: 12px; color: ${cov.overall_percentage >= 80 ? '#16a34a' : '#d97706'}; font-weight: 600;">
                    ${cov.covered_elements} de ${cov.total_elements} Competências Cobertas
                </div>
            </div>
            <div class="card" style="border-top: 4px solid #16a34a;">
                <div style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700;">Status Orçamentário</div>
                <div style="font-size: 24px; font-weight: 800; color: #16a34a; margin: 4px 0;">US$ ${finalCost.toLocaleString('pt-BR')}</div>
                <div style="font-size: 12px; color: #64748b;">Teto Homologado: ${budgetLimit}</div>
            </div>
            <div class="card" style="border-top: 4px solid #f59e0b;">
                <div style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700;">Cumprimento de Prazos</div>
                <div style="font-size: 28px; font-weight: 800; color: #f59e0b; margin: 4px 0;">${completedGates}/${totalGates} Gates</div>
                <div style="font-size: 12px; color: #16a34a; font-weight: 600;">${gatePct}% dos Marcos Concluídos</div>
            </div>
            <div class="card" style="border-top: 4px solid #8b5cf6;">
                <div style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700;">Avaliação do Projeto</div>
                <div style="font-size: 28px; font-weight: 800; color: #8b5cf6; margin: 4px 0;">${evaluation}</div>
                <div style="font-size: 12px; color: #64748b;">Patrocinador: ${project.sponsor || 'Definido'}</div>
            </div>
        </div>

        <div class="card">
            <div class="card-title">
                <span>🎯 O Olho da Competência IPMA (3 Domínios - 28 Elementos)</span>
                <span class="badge ${cov.overall_percentage === 100 ? 'badge-success' : 'badge-warning'}">
                    ${cov.overall_percentage === 100 ? 'Maturidade Nível D Plena' : `Aderência ${cov.overall_percentage}%`}
                </span>
            </div>
            <p style="font-size: 13px; color: #64748b; margin-top: 0;">
                O referencial IPMA ICB4 categoriza o domínio do indivíduo em três áreas interconectadas. Cada artefato gerencial deste sistema alimenta e audita essas competências:
            </p>

            <div class="grid-3" style="margin-top: 16px;">
                <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <strong style="color:#1e40af; font-size:14px;">1. Perspectiva (Contexto)</strong>
                        <span class="badge badge-info">${pArea.covered} / ${pArea.total} Cobertos</span>
                    </div>
                    <p style="font-size:12px; color:#3b82f6; margin-bottom:12px;">Alinhamento estratégico, governança, normas, poder e valores.</p>
                    <ul style="font-size:12px; padding-left:18px; margin:0; color:#1e293b;">
                        ${pArea.elements.slice(0, 5).map(e => `
                            <li style="margin-bottom:4px;"><strong>${e.code} ${e.name}:</strong> <span style="color:${e.is_covered ? '#15803d' : '#b91c1c'};">${e.status}</span></li>
                        `).join('')}
                    </ul>
                </div>

                <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:16px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <strong style="color:#166534; font-size:14px;">2. Pessoas (Comportamental)</strong>
                        <span class="badge badge-success">${peArea.covered} / ${peArea.total} Cobertos</span>
                    </div>
                    <p style="font-size:12px; color:#16a34a; margin-bottom:12px;">Habilidades interpessoais, liderança, equipe e negociação.</p>
                    <ul style="font-size:12px; padding-left:18px; margin:0; color:#1e293b;">
                        ${peArea.elements.slice(0, 5).map(e => `
                            <li style="margin-bottom:4px;"><strong>${e.code} ${e.name}:</strong> <span style="color:${e.is_covered ? '#15803d' : '#b91c1c'};">${e.status}</span></li>
                        `).join('')}
                    </ul>
                </div>

                <div style="background:#fefce8; border:1px solid #fef08a; border-radius:8px; padding:16px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <strong style="color:#854d0e; font-size:14px;">3. Prática (Técnica)</strong>
                        <span class="badge badge-warning">${prArea.covered} / ${prArea.total} Cobertos</span>
                    </div>
                    <p style="font-size:12px; color:#ca8a04; margin-bottom:12px;">Processos, métodos e ferramentas de gerenciamento de projetos.</p>
                    <ul style="font-size:12px; padding-left:18px; margin:0; color:#1e293b;">
                        ${prArea.elements.slice(0, 5).map(e => `
                            <li style="margin-bottom:4px;"><strong>${e.code} ${e.name}:</strong> <span style="color:${e.is_covered ? '#15803d' : '#b91c1c'};">${e.status}</span></li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-title">Resumo dos Artefatos do Projeto: ${project.name}</div>
            <div class="table-responsive">
                <table class="table-custom">
                    <thead>
                        <tr>
                            <th>Artefato Gerencial</th>
                            <th>Obrigatoriedade</th>
                            <th>Responsável</th>
                            <th>Status no Sistema</th>
                            <th>Ação Rápida</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>1. Termo de Abertura (TAP)</strong></td><td><span class="badge badge-danger">Mandatório</span></td><td>${project.manager || 'GP'}</td><td><span class="badge badge-success">Ativo</span></td><td><button class="btn btn-outline" style="padding:2px 8px; font-size:11px;" onclick="exportPdf('tap')">PDF</button></td></tr>
                        <tr><td><strong>2. Declaração de Escopo</strong></td><td><span class="badge badge-danger">Mandatório</span></td><td>${project.manager || 'GP'}</td><td><span class="badge badge-success">${(project.scope_statement && project.scope_statement.deliverables ? project.scope_statement.deliverables.length : 0)} Entregas</span></td><td><button class="btn btn-outline" style="padding:2px 8px; font-size:11px;" onclick="exportPdf('scope')">PDF</button></td></tr>
                        <tr><td><strong>3. EAP & Organograma</strong></td><td><span class="badge badge-danger">Mandatório</span></td><td>Equipe do Projeto</td><td><span class="badge badge-success">${(project.wbs_nodes ? project.wbs_nodes.length : 0)} Fases</span></td><td><button class="btn btn-outline" style="padding:2px 8px; font-size:11px;" onclick="exportPdf('wbs')">PDF</button></td></tr>
                        <tr><td><strong>4. Cronograma & Gates</strong></td><td><span class="badge badge-danger">Mandatório</span></td><td>${project.manager || 'GP'}</td><td><span class="badge badge-success">${completedGates}/${totalGates} Gates</span></td><td><button class="btn btn-outline" style="padding:2px 8px; font-size:11px;" onclick="exportPdf('schedule')">PDF</button></td></tr>
                        <tr><td><strong>5. Orçamento & Aquisições</strong></td><td><span class="badge badge-danger">Mandatório</span></td><td>Equipe Financeira</td><td><span class="badge badge-success">US$ ${finalCost.toLocaleString('pt-BR')}</span></td><td><button class="btn btn-outline" style="padding:2px 8px; font-size:11px;" onclick="exportPdf('budget')">PDF</button></td></tr>
                        <tr><td><strong>6. Plano de Riscos</strong></td><td><span class="badge badge-danger">Mandatório</span></td><td>${project.manager || 'GP'}</td><td><span class="badge badge-success">${(project.risks_plan && project.risks_plan.items ? project.risks_plan.items.length : 0)} Riscos</span></td><td><button class="btn btn-outline" style="padding:2px 8px; font-size:11px;" onclick="exportPdf('risks')">PDF</button></td></tr>
                        <tr><td><strong>7. Qualidade & Sustentabilidade</strong></td><td><span class="badge badge-danger">Mandatório</span></td><td>Auditor de Qualidade</td><td><span class="badge badge-success">Conforme</span></td><td><button class="btn btn-outline" style="padding:2px 8px; font-size:11px;" onclick="exportPdf('quality')">PDF</button></td></tr>
                        <tr><td><strong>8. Termo de Encerramento</strong></td><td><span class="badge badge-danger">Mandatório</span></td><td>${project.sponsor || 'Sponsor'}</td><td><span class="badge badge-success">${evaluation}</span></td><td><button class="btn btn-outline" style="padding:2px 8px; font-size:11px;" onclick="exportPdf('closing')">PDF</button></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// ---------------- 1. INSTRUÇÕES ----------------
function renderInstructions(c) {
    const instr = project.instructions || {};
    c.innerHTML = `
        ${renderDocLifecycleHeader('instructions', 'Diretrizes & Governança do Projeto', 1, 'Iniciação', 'Diretrizes mandatórias e guia de artefatos do ciclo de vida IPMA-D.')}

        <div class="card">
            <div class="card-title">Objetivo e Governança</div>
            <div class="form-group">
                <label class="form-label">Objetivo deste documento:</label>
                <textarea class="form-control" onchange="project.instructions.objective = this.value">${instr.objective || ''}</textarea>
            </div>
            <div class="grid-2">
                <div class="form-group">
                    <label class="form-label">Gerente Responsável:</label>
                    <input type="text" class="form-control" value="${instr.manager || project.manager || ''}" onchange="project.instructions.manager = this.value">
                </div>
                <div class="form-group">
                    <label class="form-label">Data de Aprovação:</label>
                    <input type="text" class="form-control" value="${instr.date || project.date || ''}" onchange="project.instructions.date = this.value">
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-title">Documentos do Plano de Projeto e Obrigatoriedade</div>
            <div class="table-responsive">
                <table class="table-custom">
                    <thead>
                        <tr>
                            <th>Documento</th>
                            <th>Obrigatoriedade</th>
                            <th>Finalidade no Ciclo IPMA-D</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${(instr.documents_guide || []).map(d => `
                            <tr>
                                <td><strong>${d.doc}</strong></td>
                                <td><span class="badge ${d.mandatory ? 'badge-danger' : 'badge-info'}">${d.mandatory ? 'Obrigatório (X)' : 'Opcional / Sob demanda'}</span></td>
                                <td style="color:#475569; font-size:12.5px;">${d.description}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        ${renderDocJourneyNav(null, '', 'tap', 'Iniciar Jornada: 1. Termo de Abertura (TAP)')}
    `;
}

// ---------------- 2. TAP ----------------
function renderTap(c) {
    const tap = project.tap || {};
    c.innerHTML = `
        ${renderDocLifecycleHeader('tap', '1. Termo de Abertura do Projeto (TAP)', 1, 'Iniciação', 'Autoriza formalmente o projeto, define autoridade, justificativa e teto orçamentário.')}

        <div class="card">
            <div class="card-title">1. Identificação Geral & Organização</div>
            <div class="grid-3">
                <div class="form-group">
                    <label class="form-label">Organização Executora (Empresa):</label>
                    <input type="text" class="form-control" value="${project.company || ''}" onchange="project.company = this.value; document.getElementById('companyBadge').textContent = this.value; document.getElementById('headerSubBrand').textContent = this.value + ' | Framework ICB4';">
                </div>
                <div class="form-group">
                    <label class="form-label">Cliente / Contratante:</label>
                    <input type="text" class="form-control" value="${project.client || ''}" onchange="project.client = this.value">
                </div>
                <div class="form-group">
                    <label class="form-label">Nome do Projeto:</label>
                    <input type="text" class="form-control" value="${tap.project_name || project.name}" onchange="project.tap.project_name = this.value; project.name = this.value">
                </div>
            </div>
            <div class="grid-3">
                <div class="form-group">
                    <label class="form-label">Data de Início:</label>
                    <input type="date" class="form-control" value="${project.start_date || project.date || '2026-10-23'}" onchange="project.start_date = this.value; project.date = this.value;">
                </div>
                <div class="form-group">
                    <label class="form-label">Prazo Previsto de Conclusão:</label>
                    <input type="date" class="form-control" value="${project.end_date || ''}" onchange="project.end_date = this.value;">
                </div>
                <div class="form-group">
                    <label class="form-label">Duração / Prazo Estimado:</label>
                    <input type="text" class="form-control" value="${tap.estimated_duration || project.duration || ''}" onchange="project.tap.estimated_duration = this.value; project.duration = this.value;">
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Disponibilidade Orçamentária Autorizada:</label>
                <input type="text" class="form-control" value="${tap.budget_limit || project.budget_limit || ''}" onchange="project.tap.budget_limit = this.value; project.budget_limit = this.value;">
            </div>
            <div class="form-group">
                <label class="form-label">Objetivo do Documento:</label>
                <input type="text" class="form-control" value="${tap.doc_objective || ''}" onchange="project.tap.doc_objective = this.value">
            </div>
            <div class="form-group">
                <label class="form-label">Alinhamento Estratégico com a Organização:</label>
                <input type="text" class="form-control" value="${tap.project_alignment || ''}" onchange="project.tap.project_alignment = this.value">
            </div>
        </div>

        <div class="card">
            <div class="card-title">2. Justificativa & Objetivo Geral</div>
            <div class="form-group">
                <label class="form-label">2. Justificativa Estratégica:</label>
                <textarea class="form-control" style="min-height:120px;" onchange="project.tap.justification = this.value">${tap.justification || ''}</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">3. Objetivo Geral do Projeto:</label>
                <textarea class="form-control" onchange="project.tap.objective = this.value">${tap.objective || ''}</textarea>
            </div>
        </div>

        <div class="card">
            <div class="card-title">4. Escopo & Marcos Principais</div>
            <div class="form-group">
                <label class="form-label">4.1 Descrição do Escopo:</label>
                <textarea class="form-control" style="min-height:100px;" onchange="project.tap.scope_description = this.value">${tap.scope_description || ''}</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">4.2 Marcos Principais (Gates):</label>
                <textarea class="form-control" style="min-height:90px;" onchange="project.tap.milestones = this.value.split('\\n').filter(x => x.trim())">${(tap.milestones || []).join('\n')}</textarea>
                <small style="color:#64748b;">Insira um marco por linha</small>
            </div>
        </div>

        <div class="card">
            <div class="card-title">Premissas, Restrições e Fatores Críticos de Sucesso</div>
            <div class="grid-3">
                <div class="form-group">
                    <label class="form-label">Fatores Críticos de Sucesso:</label>
                    <textarea class="form-control" style="min-height:140px;" onchange="project.tap.critical_success_factors = this.value.split('\\n').filter(x => x.trim())">${(tap.critical_success_factors || []).join('\n')}</textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">Premissas:</label>
                    <textarea class="form-control" style="min-height:140px;" onchange="project.tap.assumptions = this.value.split('\\n').filter(x => x.trim())">${(tap.assumptions || []).join('\n')}</textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">Restrições Mandatórias:</label>
                    <textarea class="form-control" style="min-height:140px;" onchange="project.tap.constraints = this.value.split('\\n').filter(x => x.trim())">${(tap.constraints || []).join('\n')}</textarea>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-title">Responsáveis & Assinaturas</div>
            <div class="grid-2">
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:16px;">
                    <strong style="color:#0284c7;">Patrocinador do Projeto (Sponsor)</strong>
                    <div class="form-group" style="margin-top:10px;">
                        <label class="form-label">Nome do Patrocinador:</label>
                        <input type="text" class="form-control" value="${tap.sponsor_name || project.sponsor}" onchange="project.tap.sponsor_name = this.value; project.sponsor = this.value">
                    </div>
                </div>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:16px;">
                    <strong style="color:#0284c7;">Gerente do Projeto (GP)</strong>
                    <div class="form-group" style="margin-top:10px;">
                        <label class="form-label">Nome do Gerente:</label>
                        <input type="text" class="form-control" value="${tap.manager_name || project.manager}" onchange="project.tap.manager_name = this.value; project.manager = this.value">
                    </div>
                    <div class="grid-2">
                        <div class="form-group">
                            <label class="form-label">Telefone:</label>
                            <input type="text" class="form-control" value="${tap.manager_phone || ''}" onchange="project.tap.manager_phone = this.value">
                        </div>
                        <div class="form-group">
                            <label class="form-label">E-mail:</label>
                            <input type="text" class="form-control" value="${tap.manager_email || ''}" onchange="project.tap.manager_email = this.value">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        ${renderDocJourneyNav('instructions', 'Diretrizes & Governança', 'stakeholders', 'Avançar: 2. Partes Interessadas')}
    `;
}

// ---------------- 3. DECLARAÇÃO DE ESCOPO ----------------
function renderScope(c) {
    const s = project.scope_statement || {};
    const delivs = s.deliverables || [];
    c.innerHTML = `
        ${renderDocLifecycleHeader('scope', '3. Declaração de Escopo do Projeto', 2, 'Planejamento', 'Define fronteiras, entregáveis, premissas técnicas, limites de atuação e exclusões de escopo.')}

        <div class="card">
            <div class="card-title">Identificação e Classificação</div>
            <div class="grid-4">
                <div class="form-group">
                    <label class="form-label">Nome do Projeto:</label>
                    <input type="text" class="form-control" value="${s.project_name || project.name}" onchange="project.scope_statement.project_name = this.value">
                </div>
                <div class="form-group">
                    <label class="form-label">Sigla:</label>
                    <input type="text" class="form-control" value="${s.code || project.code || 'PRJ'}" onchange="project.scope_statement.code = this.value">
                </div>
                <div class="form-group">
                    <label class="form-label">Classificação do Processo:</label>
                    <select class="form-control" onchange="project.scope_statement.classification = this.value; project.classification = this.value">
                        <option value="CORPORATIVO" ${s.classification === 'CORPORATIVO' ? 'selected' : ''}>CORPORATIVO</option>
                        <option value="CONFIDENCIAL" ${s.classification === 'CONFIDENCIAL' ? 'selected' : ''}>CONFIDENCIAL</option>
                        <option value="RESERVADO" ${s.classification === 'RESERVADO' ? 'selected' : ''}>RESERVADO</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Data:</label>
                    <input type="text" class="form-control" value="${s.date || project.date}" onchange="project.scope_statement.date = this.value">
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-title">Objetivo e Justificativa de Escopo</div>
            <div class="form-group">
                <label class="form-label">Objetivo / Escopo do Projeto:</label>
                <textarea class="form-control" style="min-height:90px;" onchange="project.scope_statement.objective = this.value">${s.objective || ''}</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">Justificativa Detalhada:</label>
                <textarea class="form-control" style="min-height:100px;" onchange="project.scope_statement.justification = this.value">${s.justification || ''}</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">Descrição das Entregas:</label>
                <textarea class="form-control" style="min-height:90px;" onchange="project.scope_statement.description = this.value">${s.description || ''}</textarea>
            </div>
        </div>

        <div class="card">
            <div class="card-title" style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <span>Lista das Entregas Principais do Projeto</span>
                    <span class="badge badge-info" style="margin-left:8px;">${delivs.length} Entregáveis Cadastrados</span>
                </div>
                <button class="btn btn-success" style="font-size:12px;" onclick="addScopeDeliverable()">➕ Nova Entrega</button>
            </div>
            <div class="table-responsive">
                <table class="table-custom">
                    <thead><tr><th style="width:60px;">#</th><th>Descrição da Entrega Homologada</th><th style="width:50px;">Ação</th></tr></thead>
                    <tbody>
                        ${delivs.map((d, idx) => `
                            <tr>
                                <td><strong>${d.id || idx+1}</strong></td>
                                <td><input type="text" class="form-control" style="padding:4px 8px;" value="${d.name}" onchange="project.scope_statement.deliverables[${idx}].name = this.value"></td>
                                <td><button class="btn btn-outline" style="padding:2px 6px; color:#dc2626;" onclick="deleteScopeDeliverable(${idx})">🗑️</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        <div class="card" style="border-left: 4px solid #ef4444;">
            <div class="card-title" style="color:#b91c1c;">Exclusões Expressas de Escopo (Não-Escopo)</div>
            <p style="font-size:12px; color:#64748b; margin-top:0;">Garante a blindagem contra scope creep e mitiga expectativas não contempladas.</p>
            <textarea class="form-control" style="min-height:120px; color:#7f1d1d;" onchange="project.scope_statement.exclusions = this.value.split('\\n').filter(x => x.trim())">${(s.exclusions || []).join('\n')}</textarea>
        </div>

        ${renderDocJourneyNav('stakeholders', '2. Partes Interessadas', 'wbs', 'Avançar: 4. EAP & WBS')}
    `;
}

window.addScopeDeliverable = function() {
    if (!project.scope_statement.deliverables) project.scope_statement.deliverables = [];
    const nextId = project.scope_statement.deliverables.length + 1;
    project.scope_statement.deliverables.push({
        id: nextId,
        name: "Nova entrega formal homologada"
    });
    renderCurrentTab();
};

window.deleteScopeDeliverable = function(idx) {
    project.scope_statement.deliverables.splice(idx, 1);
    renderCurrentTab();
};

// ---------------- 4. EAP & ORGANOGRAMA ----------------
function renderWbs(c) {
    const nodes = project.wbs_nodes || [];
    c.innerHTML = `
        ${renderDocLifecycleHeader('wbs', '4. Estrutura Analítica do Projeto (EAP / WBS)', 2, 'Planejamento', 'Decomposição hierárquica das entregas e pacotes de trabalho alinhados ao ICB4.')}
        <div style="margin-bottom:12px; display:flex; justify-content:flex-end;">
            <button class="btn btn-success" onclick="addWbsPhase()">➕ Nova Fase (Nível 1)</button>
        </div>

        <div class="card" style="background:#f0f9ff; border-color:#bae6fd;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <strong style="color:#0369a1; font-size:15px;">Organograma Geral de Entregas: ${project.name}</strong>
                    <div style="font-size:12px; color:#0284c7;">Hierarquia orientada a entregas tangíveis no padrão IPMA ICB4</div>
                </div>
                <div>
                    <span class="badge badge-info">${nodes.length} Fases Principais</span>
                </div>
            </div>
        </div>

        <div class="org-tree">
            ${nodes.map((phase, pIdx) => `
                <div class="org-phase-card">
                    <div class="org-phase-header">
                        <div>
                            <span class="badge badge-primary" style="font-size:12px; margin-right:8px;">${phase.id}</span>
                            <span>${phase.name}</span>
                        </div>
                        <div style="display:flex; align-items:center; gap:10px;">
                            <span style="font-size:12px; color:#64748b; font-weight:normal;">Líder: <strong>${phase.leader}</strong></span>
                            <button class="btn btn-outline" style="padding:3px 8px; font-size:11px;" onclick="addWbsChild(${pIdx})">➕ Add Pacote</button>
                            <button class="btn btn-outline" style="padding:3px 8px; font-size:11px; color:#dc2626;" onclick="deleteWbsPhase(${pIdx})">🗑️</button>
                        </div>
                    </div>

                    <div class="org-children-grid">
                        ${(phase.children || []).map((child, cIdx) => `
                            <div class="org-node-card">
                                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
                                    <span class="badge badge-info" style="font-size:10px;">${child.id}</span>
                                    <span class="badge badge-success" style="font-size:10px;">${child.status || 'Planejado'}</span>
                                </div>
                                <div style="font-weight:600; font-size:13px; color:#0f172a; margin-bottom:6px;">${child.name}</div>
                                <div style="font-size:11.5px; color:#64748b; display:flex; justify-content:space-between; align-items:center;">
                                    <span>👤 ${child.leader}</span>
                                    <button style="border:none; background:transparent; cursor:pointer; color:#94a3b8;" onclick="deleteWbsChild(${pIdx}, ${cIdx})">✖</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>

        ${renderDocJourneyNav('scope', '3. Declaração de Escopo', 'schedule', 'Avançar: 5. Cronograma & Marcos')}
    `;
}

window.addWbsPhase = function() {
    const name = prompt('Nome da nova fase do projeto:');
    if (!name) return;
    const leader = prompt('Líder responsável pela fase:', project.manager || 'Gerente de Projeto');
    const nextId = `${project.wbs_nodes.length + 1}.0`;
    project.wbs_nodes.push({
        id: nextId,
        name: name,
        leader: leader || 'Gerente',
        type: 'phase',
        children: []
    });
    renderCurrentTab();
    showToast(`Fase ${nextId} criada com sucesso!`, 'success');
};

window.addWbsChild = function(phaseIdx) {
    const phase = project.wbs_nodes[phaseIdx];
    const name = prompt(`Nome da entrega / pacote de trabalho para ${phase.name}:`);
    if (!name) return;
    const leader = prompt('Responsável pelo pacote:', phase.leader);
    const subNum = phase.children.length + 1;
    const childId = `${phase.id.replace('.0', '')}.${subNum}`;
    phase.children.push({
        id: childId,
        name: name,
        leader: leader || phase.leader,
        status: 'Planejado',
        type: 'deliverable'
    });
    renderCurrentTab();
    showToast(`Pacote ${childId} adicionado à EAP!`, 'success');
};

window.deleteWbsPhase = function(idx) {
    if (confirm('Deseja excluir esta fase e todos os seus pacotes da EAP?')) {
        project.wbs_nodes.splice(idx, 1);
        renderCurrentTab();
    }
};

window.deleteWbsChild = function(pIdx, cIdx) {
    project.wbs_nodes[pIdx].children.splice(cIdx, 1);
    renderCurrentTab();
};

// ---------------- 5. CRONOGRAMA ----------------
function renderSchedule(c) {
    const list = project.schedule || [];
    c.innerHTML = `
        ${renderDocLifecycleHeader('schedule', '5. Cronograma & Marcos Estratégicos (Gates)', 2, 'Planejamento', 'Linha de base temporal com marcos estratégicos de aprovação e prazos de conclusão.')}
        <div style="margin-bottom:12px; display:flex; justify-content:flex-end;">
            <button class="btn btn-success" onclick="addScheduleItem()">➕ Novo Marco</button>
        </div>

        <div class="card">
            <div class="card-title">Marcos Macro do Projeto (Gates)</div>
            <div class="table-responsive">
                <table class="table-custom">
                    <thead>
                        <tr>
                            <th style="width:40px;">#</th>
                            <th>Marco do Projeto</th>
                            <th>Responsável</th>
                            <th>Duração</th>
                            <th>Data / Horário Previsto</th>
                            <th>Status</th>
                            <th style="width:50px;">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${list.map((item, idx) => `
                            <tr>
                                <td>${item.id || idx+1}</td>
                                <td><input type="text" class="form-control" value="${item.milestone}" onchange="project.schedule[${idx}].milestone = this.value"></td>
                                <td><input type="text" class="form-control" value="${item.responsible}" onchange="project.schedule[${idx}].responsible = this.value"></td>
                                <td><input type="text" class="form-control" value="${item.duration}" onchange="project.schedule[${idx}].duration = this.value"></td>
                                <td><input type="text" class="form-control" value="${item.delivery_date}" onchange="project.schedule[${idx}].delivery_date = this.value"></td>
                                <td>
                                    <select class="form-control" onchange="project.schedule[${idx}].status = this.value">
                                        <option value="Concluído" ${item.status === 'Concluído' ? 'selected' : ''}>Concluído</option>
                                        <option value="Em Andamento" ${item.status === 'Em Andamento' ? 'selected' : ''}>Em Andamento</option>
                                        <option value="Planejado" ${item.status === 'Planejado' ? 'selected' : ''}>Planejado</option>
                                    </select>
                                </td>
                                <td><button class="btn btn-outline" style="padding:2px 6px; color:#dc2626;" onclick="deleteScheduleItem(${idx})">🗑️</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        ${renderDocJourneyNav('wbs', '4. EAP & WBS', 'raci', 'Avançar: 6. Matriz RACI')}
    `;
}

window.addScheduleItem = function() {
    const nextId = project.schedule.length + 1;
    project.schedule.push({
        id: nextId,
        milestone: "Novo marco de entrega",
        responsible: project.manager || "GP",
        duration: "Marco",
        delivery_date: "2026-11-15",
        status: "Planejado"
    });
    renderCurrentTab();
};

window.deleteScheduleItem = function(idx) {
    project.schedule.splice(idx, 1);
    renderCurrentTab();
};

// ---------------- 11. RECURSOS ----------------
function renderResources(c) {
    const res = project.resources || {};
    const team = res.team || [];
    c.innerHTML = `
        ${renderDocLifecycleHeader('resources', '11. Recursos Humanos & Equipe do Projeto', 2, 'Planejamento', 'Alocação de especialistas, turnos de trabalho e dimensionamento de esforço.')}

        <div class="card">
            <div class="card-title">Horário dos Recursos (Turnos de Trabalho)</div>
            <div class="table-responsive">
                <table class="table-custom">
                    <thead><tr><th>Turno</th><th>Segunda</th><th>Terça</th><th>Quarta</th><th>Quinta</th><th>Sexta</th></tr></thead>
                    <tbody>
                        ${(res.shifts || []).map((s, idx) => `
                            <tr>
                                <td><strong>${s.shift}</strong></td>
                                <td><input type="text" class="form-control" value="${s.mon}" onchange="project.resources.shifts[${idx}].mon = this.value"></td>
                                <td><input type="text" class="form-control" value="${s.tue}" onchange="project.resources.shifts[${idx}].tue = this.value"></td>
                                <td><input type="text" class="form-control" value="${s.wed}" onchange="project.resources.shifts[${idx}].wed = this.value"></td>
                                <td><input type="text" class="form-control" value="${s.thu}" onchange="project.resources.shifts[${idx}].thu = this.value"></td>
                                <td><input type="text" class="form-control" value="${s.fri}" onchange="project.resources.shifts[${idx}].fri = this.value"></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        <div class="card">
            <div class="card-title" style="display:flex; justify-content:space-between; align-items:center;">
                <span>Descrição dos Recursos da Equipe</span>
                <button class="btn btn-success" style="font-size:12px;" onclick="addTeamMember()">➕ Novo Membro</button>
            </div>
            <div class="table-responsive">
                <table class="table-custom">
                    <thead><tr><th>Nome</th><th>Departamento / Papel</th><th>E-mail</th><th>Telefone Comercial</th><th>Telefone Celular</th><th style="width:40px;"></th></tr></thead>
                    <tbody>
                        ${team.map((m, idx) => `
                            <tr>
                                <td><input type="text" class="form-control" value="${m.name}" onchange="project.resources.team[${idx}].name = this.value"></td>
                                <td><input type="text" class="form-control" value="${m.dept}" onchange="project.resources.team[${idx}].dept = this.value"></td>
                                <td><input type="text" class="form-control" value="${m.email}" onchange="project.resources.team[${idx}].email = this.value"></td>
                                <td><input type="text" class="form-control" value="${m.phone}" onchange="project.resources.team[${idx}].phone = this.value"></td>
                                <td><input type="text" class="form-control" value="${m.cell}" onchange="project.resources.team[${idx}].cell = this.value"></td>
                                <td><button class="btn btn-outline" style="padding:2px 6px; color:#dc2626;" onclick="deleteTeamMember(${idx})">🗑️</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        ${renderDocJourneyNav('quality', '10. Plano de Qualidade', 'lessons', 'Avançar: 12. ⚡ Lições Aprendidas')}
    `;
}

window.addTeamMember = function() {
    project.resources.team.push({
        name: "Novo Integrante",
        email: "novo@empresa.com",
        dept: "Engenharia",
        phone: "(11) 3000-1000",
        cell: "(11) 99000-1000"
    });
    renderCurrentTab();
};

window.deleteTeamMember = function(idx) {
    project.resources.team.splice(idx, 1);
    renderCurrentTab();
};

// ---------------- 7. MATRIZ RACI ----------------
function renderRaci(c) {
    const raci = project.raci_matrix || {};
    const activities = raci.activities || [];
    const members = raci.members || [];
    c.innerHTML = `
        ${renderDocLifecycleHeader('raci', '6. Matriz de Responsabilidades (RACI)', 2, 'Planejamento', 'Governança clara dos papéis funcionais por entrega (Responsible, Accountable, Consulted, Informed).')}

        <div class="card" style="background:#f8fafc;">
            <strong style="font-size:13px; color:#334155;">Legenda Oficial de Atribuições:</strong>
            <div style="display:flex; gap:16px; flex-wrap:wrap; margin-top:8px; font-size:12px;">
                <span><strong style="color:#b91c1c;">R</strong>: Responsável (Somente um pela entrega)</span>
                <span><strong style="color:#7c3aed;">Rv</strong>: Revisão Técnica</span>
                <span><strong style="color:#15803d;">A</strong>: Aprovação Formal</span>
                <span><strong style="color:#0284c7;">C</strong>: Consultado</span>
                <span><strong style="color:#64748b;">I</strong>: Informado</span>
                <span><strong style="color:#d97706;">P</strong>: Participante / Suporte</span>
            </div>
        </div>

        <div class="card">
            <div class="card-title">Matriz Cruzada de Papéis x Entregas</div>
            <div class="table-responsive">
                <table class="table-custom">
                    <thead>
                        <tr>
                            <th style="min-width:180px;">Membro / Função</th>
                            ${activities.map(a => `<th style="font-size:11px; text-align:center; min-width:100px;">${a.name}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${members.map((m, mIdx) => `
                            <tr>
                                <td>
                                    <strong>${m.name}</strong><br>
                                    <small style="color:#64748b;">${m.role}</small>
                                </td>
                                ${activities.map(a => {
                                    const val = (m.roles_map && m.roles_map[a.id]) || '-';
                                    return `
                                        <td style="text-align:center;">
                                            <select style="padding:2px 4px; font-weight:700; border-radius:4px; font-size:11.5px;" 
                                                onchange="updateRaciRole(${mIdx}, '${a.id}', this.value)">
                                                <option value="-" ${val === '-' ? 'selected' : ''}>-</option>
                                                <option value="R" ${val === 'R' ? 'selected' : ''}>R</option>
                                                <option value="Rv" ${val === 'Rv' ? 'selected' : ''}>Rv</option>
                                                <option value="A" ${val === 'A' ? 'selected' : ''}>A</option>
                                                <option value="C" ${val === 'C' ? 'selected' : ''}>C</option>
                                                <option value="I" ${val === 'I' ? 'selected' : ''}>I</option>
                                                <option value="P" ${val === 'P' ? 'selected' : ''}>P</option>
                                            </select>
                                        </td>
                                    `;
                                }).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        ${renderDocJourneyNav('schedule', '5. Cronograma & Marcos', 'budget', 'Avançar: 7. Orçamento Linha de Base')}
    `;
}

window.updateRaciRole = function(mIdx, actId, role) {
    if (!project.raci_matrix.members[mIdx].roles_map) {
        project.raci_matrix.members[mIdx].roles_map = {};
    }
    project.raci_matrix.members[mIdx].roles_map[actId] = role;
};

// ---------------- 8. ORÇAMENTO ----------------
function renderBudget(c, focusRevised = false) {
    const b1 = project.budget_baseline || {};
    const b2 = project.budget_revised || {};
    const phaseNum = focusRevised ? 3 : 2;
    const phaseName = focusRevised ? 'Execução & Monitoramento' : 'Planejamento';
    const docTitle = focusRevised ? '13. Orçamento Revisado & Realizado' : '7. Orçamento Linha de Base (Baseline)';
    const docKey = focusRevised ? 'budget_revised' : 'budget';
    c.innerHTML = `
        ${renderDocLifecycleHeader(docKey, docTitle, phaseNum, phaseName, 'Controle financeiro detalhado com Linha de Base (Orçamento 1) e Orçamento Revisado em execução (Orçamento 2).')}

        <div class="grid-2">
            <!-- Orçamento 1 -->
            <div class="card" ${!focusRevised ? 'style="border-left:4px solid #0284c7;"' : ''}>
                <div class="card-title" style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <span>7. Orçamento 1 (Linha de Base Aprovada)</span>
                        <span class="badge badge-info" style="margin-left:6px;">Original</span>
                    </div>
                    <button class="btn btn-outline" style="font-size:11px; padding:2px 8px;" onclick="addBudgetItem(1)">➕ Insumo</button>
                </div>
                <div class="table-responsive">
                    <table class="table-custom">
                        <thead><tr><th>Item</th><th>Custo Unit.</th><th>Qtd</th><th>Total (US$)</th><th style="width:30px;"></th></tr></thead>
                        <tbody>
                            ${(b1.items || []).map((item, idx) => `
                                <tr>
                                    <td><input type="text" class="form-control" style="font-size:11px; padding:2px 4px;" value="${item.resource}" onchange="project.budget_baseline.items[${idx}].resource = this.value"></td>
                                    <td><input type="number" class="form-control" style="width:75px; font-size:11px; padding:2px 4px;" value="${item.unit_cost}" onchange="updateBudget1Field(${idx}, 'unit_cost', this.value)"></td>
                                    <td><input type="number" class="form-control" style="width:50px; font-size:11px; padding:2px 4px;" value="${item.qty}" onchange="updateBudget1Field(${idx}, 'qty', this.value)"></td>
                                    <td style="font-weight:600; font-size:12px;">${(item.total || 0).toLocaleString('pt-BR')}</td>
                                    <td><button class="btn btn-outline" style="padding:1px 4px; color:#dc2626;" onclick="deleteBudgetItem(1, ${idx})">✖</button></td>
                                </tr>
                            `).join('')}
                            <tr style="background:#f8fafc; font-weight:700;"><td colspan="3">Custo do Projeto (A)</td><td colspan="2">US$ ${(b1.project_cost || 0).toLocaleString('pt-BR')}</td></tr>
                            <tr style="background:#f8fafc; font-weight:700;">
                                <td colspan="2">Reserva Contingência (B)</td>
                                <td><input type="number" class="form-control" style="width:85px; padding:2px 4px;" value="${b1.contingency_reserve || 0}" onchange="updateBudget1Contingency(this.value)"></td>
                                <td colspan="2">US$ ${(b1.contingency_reserve || 0).toLocaleString('pt-BR')}</td>
                            </tr>
                            <tr style="background:#e0f2fe; color:#0369a1; font-weight:800;"><td colspan="3">CUSTO FINAL (A + B)</td><td colspan="2">US$ ${(b1.final_cost || 0).toLocaleString('pt-BR')}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Orçamento 2 -->
            <div class="card" style="border-top: 4px solid #16a34a; ${focusRevised ? 'border-left:4px solid #16a34a;' : ''}">
                <div class="card-title" style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <span>13. Orçamento 2 (Revisado pós-aquisições)</span>
                        <span class="badge badge-success" style="margin-left:6px;">Vigente</span>
                    </div>
                    <button class="btn btn-outline" style="font-size:11px; padding:2px 8px;" onclick="addBudgetItem(2)">➕ Insumo</button>
                </div>
                <div class="table-responsive">
                    <table class="table-custom">
                        <thead><tr><th>Item</th><th>Custo Unit.</th><th>Qtd</th><th>Total (US$)</th><th style="width:30px;"></th></tr></thead>
                        <tbody>
                            ${(b2.items || []).map((item, idx) => `
                                <tr>
                                    <td><input type="text" class="form-control" style="font-size:11px; padding:2px 4px;" value="${item.resource}" onchange="project.budget_revised.items[${idx}].resource = this.value"></td>
                                    <td><input type="number" class="form-control" style="width:75px; font-size:11px; padding:2px 4px;" value="${item.unit_cost}" onchange="updateBudget2Field(${idx}, 'unit_cost', this.value)"></td>
                                    <td><input type="number" class="form-control" style="width:50px; font-size:11px; padding:2px 4px;" value="${item.qty}" onchange="updateBudget2Field(${idx}, 'qty', this.value)"></td>
                                    <td style="font-weight:600; font-size:12px;">${(item.total || 0).toLocaleString('pt-BR')}</td>
                                    <td><button class="btn btn-outline" style="padding:1px 4px; color:#dc2626;" onclick="deleteBudgetItem(2, ${idx})">✖</button></td>
                                </tr>
                            `).join('')}
                            <tr style="background:#f8fafc; font-weight:700;"><td colspan="3">Custo do Projeto (A)</td><td colspan="2">US$ ${(b2.project_cost || 0).toLocaleString('pt-BR')}</td></tr>
                            <tr style="background:#f8fafc; font-weight:700;">
                                <td colspan="2">Reserva Contingência (B)</td>
                                <td><input type="number" class="form-control" style="width:85px; padding:2px 4px;" value="${b2.contingency_reserve || 0}" onchange="updateBudget2Contingency(this.value)"></td>
                                <td colspan="2">US$ ${(b2.contingency_reserve || 0).toLocaleString('pt-BR')}</td>
                            </tr>
                            <tr style="background:#dcfce7; color:#15803d; font-weight:800;"><td colspan="3">CUSTO FINAL (A + B)</td><td colspan="2">US$ ${(b2.final_cost || 0).toLocaleString('pt-BR')}</td></tr>
                        </tbody>
                    </table>
                </div>
                <div style="margin-top:14px;">
                    <label class="form-label">Motivação para Alteração do Plano de Aquisição:</label>
                    <textarea class="form-control" style="min-height:80px;" onchange="project.budget_revised.justification = this.value">${b2.justification || ''}</textarea>
                </div>
            </div>
        </div>

        ${focusRevised 
            ? renderDocJourneyNav('lessons', '12. Lições Aprendidas', 'changes', 'Avançar: 14. Solicitação de Mudanças')
            : renderDocJourneyNav('raci', '6. Matriz RACI', 'risks', 'Avançar: 8. Plano de Riscos')
        }
    `;
}

window.addBudgetItem = function(budgetNum) {
    const target = budgetNum === 1 ? project.budget_baseline : project.budget_revised;
    if (!target.items) target.items = [];
    target.items.push({
        resource: "Novo Insumo / Material",
        unit_cost: 100000,
        qty: 1,
        total: 100000
    });
    recalculateBudget(budgetNum);
};

window.deleteBudgetItem = function(budgetNum, idx) {
    const target = budgetNum === 1 ? project.budget_baseline : project.budget_revised;
    target.items.splice(idx, 1);
    recalculateBudget(budgetNum);
};

window.updateBudget1Field = function(idx, field, val) {
    const item = project.budget_baseline.items[idx];
    item[field] = parseFloat(val) || 0;
    item.total = item.qty * item.unit_cost;
    recalculateBudget(1);
};

window.updateBudget1Contingency = function(val) {
    project.budget_baseline.contingency_reserve = parseFloat(val) || 0;
    recalculateBudget(1);
};

window.updateBudget2Field = function(idx, field, val) {
    const item = project.budget_revised.items[idx];
    item[field] = parseFloat(val) || 0;
    item.total = item.qty * item.unit_cost;
    recalculateBudget(2);
};

window.updateBudget2Contingency = function(val) {
    project.budget_revised.contingency_reserve = parseFloat(val) || 0;
    recalculateBudget(2);
};

function recalculateBudget(budgetNum) {
    const target = budgetNum === 1 ? project.budget_baseline : project.budget_revised;
    let sum = 0;
    (target.items || []).forEach(i => sum += (i.total || 0));
    target.project_cost = sum;
    target.final_cost = sum + (target.contingency_reserve || 0);
    renderCurrentTab();
}

// ---------------- 10. QUALIDADE ----------------
function renderQuality(c) {
    const q = project.quality || {};
    const checklist = q.checklist || [];
    const monitoring = q.monitoring || [];
    c.innerHTML = `
        ${renderDocLifecycleHeader('quality', '10. Plano de Qualidade & Critérios de Aceite', 2, 'Planejamento', 'Auditoria de conformidade documental, integridade técnica e sustentabilidade de requisitos.')}

        <div class="content-header">
            <div>
                <h2>10. Plano de Qualidade & Monitoramento</h2>
                <p>Auditoria de conformidade documental, integridade técnica e sustentabilidade de requisitos.</p>
            </div>
            <div>${renderModulePdfBtn('quality')}</div>
        </div>

        <div class="card">
            <div class="card-title">Checklist de Verificação de Qualidade (Documentação & Execução)</div>
            <div class="table-responsive">
                <table class="table-custom">
                    <thead><tr><th style="width:40px;">#</th><th style="width:140px;">Seção</th><th>Ponto a Verificar</th><th style="width:100px;">Status</th></tr></thead>
                    <tbody>
                        ${checklist.map((item, idx) => `
                            <tr>
                                <td>${item.id}</td>
                                <td><span class="badge ${item.section === 'DOCUMENTAÇÃO' ? 'badge-info' : 'badge-purple'}">${item.section}</span></td>
                                <td>${item.question}</td>
                                <td>
                                    <select class="form-control" style="padding:2px 6px; font-weight:700;" onchange="project.quality.checklist[${idx}].status = this.value">
                                        <option value="SIM" ${item.status === 'SIM' ? 'selected' : ''}>SIM</option>
                                        <option value="NÃO" ${item.status === 'NÃO' ? 'selected' : ''}>NÃO</option>
                                    </select>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        <div class="card">
            <div class="card-title" style="display:flex; justify-content:space-between; align-items:center;">
                <span>Matriz de Monitoramento de Requisitos e Ações</span>
                <button class="btn btn-success" style="font-size:12px;" onclick="addQualityMonitoring()">➕ Novo Indicador</button>
            </div>
            <div class="table-responsive">
                <table class="table-custom">
                    <thead><tr><th>Requisito</th><th>Indicador</th><th>Meta</th><th>Técnica & Freq.</th><th>Quem Mede & Registro</th><th>Ação de Resposta & Responsável</th><th style="width:40px;"></th></tr></thead>
                    <tbody>
                        ${monitoring.map((m, idx) => `
                            <tr>
                                <td><input type="text" class="form-control" value="${m.requirement}" onchange="project.quality.monitoring[${idx}].requirement = this.value"></td>
                                <td><input type="text" class="form-control" value="${m.indicator}" onchange="project.quality.monitoring[${idx}].indicator = this.value"></td>
                                <td><input type="text" class="form-control" value="${m.goal}" onchange="project.quality.monitoring[${idx}].goal = this.value"></td>
                                <td>
                                    <input type="text" class="form-control" placeholder="Técnica" value="${m.technique}" onchange="project.quality.monitoring[${idx}].technique = this.value">
                                    <input type="text" class="form-control" style="margin-top:4px;" placeholder="Frequência" value="${m.frequency}" onchange="project.quality.monitoring[${idx}].frequency = this.value">
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="Quem Mede" value="${m.who_measures}" onchange="project.quality.monitoring[${idx}].who_measures = this.value">
                                    <input type="text" class="form-control" style="margin-top:4px;" placeholder="Registro" value="${m.record_place}" onchange="project.quality.monitoring[${idx}].record_place = this.value">
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="Ação" value="${m.action}" onchange="project.quality.monitoring[${idx}].action = this.value">
                                    <input type="text" class="form-control" style="margin-top:4px;" placeholder="Responsável" value="${m.responsible}" onchange="project.quality.monitoring[${idx}].responsible = this.value">
                                </td>
                                <td><button class="btn btn-outline" style="padding:2px 6px; color:#dc2626;" onclick="deleteQualityMonitoring(${idx})">🗑️</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        ${renderDocJourneyNav('communication', '9. Plano de Comunicação', 'resources', 'Avançar: 11. Recursos & Equipe')}
    `;
}

window.addQualityMonitoring = function() {
    if (!project.quality.monitoring) project.quality.monitoring = [];
    project.quality.monitoring.push({
        requirement: "Novo Requisito de Qualidade",
        indicator: "Taxa de conformidade",
        goal: "100%",
        technique: "Inspeção visual",
        frequency: "Semanal",
        who_measures: "Qualidade",
        record_place: "Planilha de Inspeção",
        action: "Auditoria preventiva",
        when: "Durante execução",
        responsible: project.manager || "GP"
    });
    renderCurrentTab();
};

window.deleteQualityMonitoring = function(idx) {
    project.quality.monitoring.splice(idx, 1);
    renderCurrentTab();
};

// ---------------- 8. RISCOS ----------------
function renderRisks(c) {
    const rPlan = project.risks_plan || {};
    const items = rPlan.items || [];

    // Agrupamento dinâmico para a matriz 3x3
    const highRisks = items.filter(r => (r.probability || '').toLowerCase().includes('alta') || (r.classification || '').toLowerCase().includes('crítico'));
    const medRisks = items.filter(r => (r.probability || '').toLowerCase().includes('média'));
    const lowRisks = items.filter(r => (r.probability || '').toLowerCase().includes('baixa'));

    c.innerHTML = `
        ${renderDocLifecycleHeader('risks', '8. Plano de Resposta aos Riscos (P x I)', 2, 'Planejamento', 'Matriz de probabilidade e impacto, classificação de severidade e estratégias de resposta preventiva.')}

        <div class="content-header">
            <div>
                <h2>8. Plano de Gerenciamento de Riscos</h2>
                <p>Matriz de graduação (Probabilidade x Impacto), causas, modos de detecção e estratégias preventivas.</p>
            </div>
            <div style="display:flex; gap:10px;">
                <button class="btn btn-success" onclick="addRiskItem()">➕ Novo Risco</button>
                ${renderModulePdfBtn('risks')}
            </div>
        </div>

        <!-- Matriz 3x3 Visual Dinâmica -->
        <div class="card">
            <div class="card-title">Matriz Visual de Severidade do Risco (Probabilidade x Impacto)</div>
            <div class="grid-3" style="text-align:center; font-size:12px; font-weight:600;">
                <div style="background:#fee2e2; border:1px solid #fca5a5; padding:12px; border-radius:6px;">
                    <div style="color:#991b1b; font-size:14px; font-weight:700;">ALTA PROBABILIDADE (${highRisks.length})</div>
                    <div style="margin-top:6px; color:#475569; font-weight:normal;">
                        ${highRisks.length > 0 ? highRisks.map(r => `<div><strong>${r.id}</strong>: ${r.description.substring(0, 45)}...</div>`).join('') : '<em>Nenhum risco neste nível</em>'}
                    </div>
                </div>
                <div style="background:#fef3c7; border:1px solid #fde68a; padding:12px; border-radius:6px;">
                    <div style="color:#92400e; font-size:14px; font-weight:700;">MÉDIA PROBABILIDADE (${medRisks.length})</div>
                    <div style="margin-top:6px; color:#475569; font-weight:normal;">
                        ${medRisks.length > 0 ? medRisks.map(r => `<div><strong>${r.id}</strong>: ${r.description.substring(0, 45)}...</div>`).join('') : '<em>Nenhum risco neste nível</em>'}
                    </div>
                </div>
                <div style="background:#dcfce7; border:1px solid #bbf7d0; padding:12px; border-radius:6px;">
                    <div style="color:#166534; font-size:14px; font-weight:700;">BAIXA PROBABILIDADE (${lowRisks.length})</div>
                    <div style="margin-top:6px; color:#475569; font-weight:normal;">
                        ${lowRisks.length > 0 ? lowRisks.map(r => `<div><strong>${r.id}</strong>: ${r.description.substring(0, 45)}...</div>`).join('') : '<em>Nenhum risco neste nível</em>'}
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-title">Tabela Completa de Riscos & Planos de Ação</div>
            <div class="table-responsive">
                <table class="table-custom">
                    <thead>
                        <tr>
                            <th style="width:65px;">ID</th>
                            <th>Descrição do Risco & Causa</th>
                            <th style="width:100px;">Prob.</th>
                            <th style="width:100px;">Impacto</th>
                            <th>Resposta & Estratégia</th>
                            <th>Responsável</th>
                            <th style="width:40px;"></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${items.map((r, idx) => `
                            <tr>
                                <td><input type="text" class="form-control" style="font-weight:700;" value="${r.id}" onchange="project.risks_plan.items[${idx}].id = this.value"></td>
                                <td>
                                    <input type="text" class="form-control" placeholder="Descrição do risco" value="${r.description}" onchange="project.risks_plan.items[${idx}].description = this.value">
                                    <input type="text" class="form-control" style="margin-top:4px;" placeholder="Causa raiz" value="${r.cause}" onchange="project.risks_plan.items[${idx}].cause = this.value">
                                </td>
                                <td>
                                    <select class="form-control" onchange="project.risks_plan.items[${idx}].probability = this.value; renderCurrentTab();">
                                        <option value="Alta" ${r.probability === 'Alta' ? 'selected' : ''}>Alta</option>
                                        <option value="Média" ${r.probability === 'Média' ? 'selected' : ''}>Média</option>
                                        <option value="Baixa" ${r.probability === 'Baixa' ? 'selected' : ''}>Baixa</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="form-control" onchange="project.risks_plan.items[${idx}].impact = this.value; renderCurrentTab();">
                                        <option value="Alto" ${r.impact === 'Alto' ? 'selected' : ''}>Alto</option>
                                        <option value="Médio" ${r.impact === 'Médio' ? 'selected' : ''}>Médio</option>
                                        <option value="Baixo" ${r.impact === 'Baixo' ? 'selected' : ''}>Baixo</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="Estratégia de resposta" value="${r.strategy}" onchange="project.risks_plan.items[${idx}].strategy = this.value">
                                </td>
                                <td>
                                    <input type="text" class="form-control" placeholder="Responsável" value="${r.responsible}" onchange="project.risks_plan.items[${idx}].responsible = this.value">
                                </td>
                                <td><button class="btn btn-outline" style="padding:2px 6px; color:#dc2626;" onclick="deleteRiskItem(${idx})">🗑️</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        ${renderDocJourneyNav('budget', '7. Orçamento Linha de Base', 'communication', 'Avançar: 9. Plano de Comunicação')}
    `;
}

window.addRiskItem = function() {
    if (!project.risks_plan.items) project.risks_plan.items = [];
    const nextNum = project.risks_plan.items.length + 1;
    const rId = `R0${nextNum}`;
    project.risks_plan.items.push({
        id: rId,
        description: "Novo risco identificado",
        cause: "Incerteza operacional",
        detection_mode: "Inspeção",
        consequences: "Possível impacto em prazo ou custo",
        probability: "Média",
        impact: "Médio",
        classification: "Médio",
        response: "Mitigar",
        strategy: "Ação preventiva",
        responsible: project.manager || "GP",
        cost: "R$ 0",
        deadline: "2026-11-30"
    });
    renderCurrentTab();
};

window.deleteRiskItem = function(idx) {
    project.risks_plan.items.splice(idx, 1);
    renderCurrentTab();
};

// ---------------- 2. STAKEHOLDERS ----------------
function renderStakeholders(c) {
    const list = project.stakeholders || [];

    // Classificação dinâmica para a matriz 4 quadrantes
    const highPHighI = list.filter(s => (s.power >= 2) && (s.interest >= 1));
    const highPLowI = list.filter(s => (s.power >= 2) && (s.interest < 1));
    const lowPHighI = list.filter(s => (s.power < 2) && (s.interest >= 1));
    const lowPLowI = list.filter(s => (s.power < 2) && (s.interest < 1));

    c.innerHTML = `
        ${renderDocLifecycleHeader('stakeholders', '2. Partes Interessadas (Stakeholders)', 1, 'Iniciação', 'Mapeamento de poder e interesse para estratégias de engajamento e comunicação desde o início do projeto.')}

        <div class="content-header">
            <div>
                <h2>2. Partes Interessadas (Stakeholders)</h2>
                <p>Mapeamento de Poder e Interesse para definição de estratégias de engajamento e comunicação.</p>
            </div>
            <div style="display:flex; gap:10px;">
                <button class="btn btn-success" onclick="addStakeholderItem()">➕ Novo Stakeholder</button>
                ${renderModulePdfBtn('stakeholders')}
            </div>
        </div>

        <div class="grid-2">
            <!-- Matriz Visual 4 Quadrantes Dinâmica -->
            <div class="card">
                <div class="card-title">Matriz Visual Poder x Interesse</div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; min-height:240px; text-align:center;">
                    <div style="background:#e0f2fe; border:1px solid #bae6fd; border-radius:6px; padding:10px; display:flex; flex-direction:column; justify-content:center;">
                        <strong style="color:#0369a1; font-size:12px;">ALTO PODER / BAIXO INTERESSE</strong>
                        <div style="font-size:11px; color:#475569; margin-top:4px;">Estratégia: Manter Satisfeito</div>
                        <div style="margin-top:6px; font-weight:700; font-size:11.5px; color:#0f172a;">
                            ${highPLowI.length > 0 ? highPLowI.map(s => s.name).join(' | ') : '—'}
                        </div>
                    </div>
                    <div style="background:#dcfce7; border:1px solid #bbf7d0; border-radius:6px; padding:10px; display:flex; flex-direction:column; justify-content:center;">
                        <strong style="color:#15803d; font-size:12px;">ALTO PODER / ALTO INTERESSE</strong>
                        <div style="font-size:11px; color:#166534; margin-top:4px;">Estratégia: Gerenciar de Perto</div>
                        <div style="margin-top:6px; font-weight:700; font-size:11.5px; color:#0f172a;">
                            ${highPHighI.length > 0 ? highPHighI.map(s => s.name).join(' | ') : '—'}
                        </div>
                    </div>
                    <div style="background:#f1f5f9; border:1px solid #cbd5e1; border-radius:6px; padding:10px; display:flex; flex-direction:column; justify-content:center;">
                        <strong style="color:#475569; font-size:12px;">BAIXO PODER / BAIXO INTERESSE</strong>
                        <div style="font-size:11px; color:#475569; margin-top:4px;">Estratégia: Acompanhar / Monitorar</div>
                        <div style="margin-top:6px; font-weight:700; font-size:11.5px; color:#0f172a;">
                            ${lowPLowI.length > 0 ? lowPLowI.map(s => s.name).join(' | ') : '—'}
                        </div>
                    </div>
                    <div style="background:#fef3c7; border:1px solid #fde68a; border-radius:6px; padding:10px; display:flex; flex-direction:column; justify-content:center;">
                        <strong style="color:#92400e; font-size:12px;">BAIXO PODER / ALTO INTERESSE</strong>
                        <div style="font-size:11px; color:#78350f; margin-top:4px;">Estratégia: Manter Informado</div>
                        <div style="margin-top:6px; font-weight:700; font-size:11.5px; color:#0f172a;">
                            ${lowPHighI.length > 0 ? lowPHighI.map(s => s.name).join(' | ') : '—'}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tabela de Cadastro Interativa -->
            <div class="card">
                <div class="card-title">Mapeamento e Estratégia de Atuação</div>
                <div class="table-responsive">
                    <table class="table-custom">
                        <thead><tr><th>Nome</th><th>Papel</th><th style="width:65px;">Poder</th><th style="width:65px;">Int.</th><th>Estratégia</th><th style="width:40px;"></th></tr></thead>
                        <tbody>
                            ${list.map((s, idx) => `
                                <tr>
                                    <td><input type="text" class="form-control" value="${s.name}" onchange="project.stakeholders[${idx}].name = this.value; renderCurrentTab();"></td>
                                    <td><input type="text" class="form-control" value="${s.role}" onchange="project.stakeholders[${idx}].role = this.value"></td>
                                    <td>
                                        <select class="form-control" onchange="project.stakeholders[${idx}].power = parseInt(this.value); renderCurrentTab();">
                                            <option value="1" ${s.power === 1 ? 'selected' : ''}>1 (Baixo)</option>
                                            <option value="2" ${s.power === 2 ? 'selected' : ''}>2 (Médio)</option>
                                            <option value="3" ${s.power === 3 ? 'selected' : ''}>3 (Alto)</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control" onchange="project.stakeholders[${idx}].interest = parseInt(this.value); renderCurrentTab();">
                                            <option value="0" ${s.interest === 0 ? 'selected' : ''}>0 (Baixo)</option>
                                            <option value="1" ${s.interest === 1 ? 'selected' : ''}>1 (Médio)</option>
                                            <option value="2" ${s.interest === 2 ? 'selected' : ''}>2 (Alto)</option>
                                        </select>
                                    </td>
                                    <td><input type="text" class="form-control" value="${s.strategy}" onchange="project.stakeholders[${idx}].strategy = this.value"></td>
                                    <td><button class="btn btn-outline" style="padding:2px 6px; color:#dc2626;" onclick="deleteStakeholderItem(${idx})">🗑️</button></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        ${renderDocJourneyNav('tap', '1. Termo de Abertura', 'scope', 'Avançar: 3. Declaração de Escopo')}
    `;
}

window.addStakeholderItem = function() {
    if (!project.stakeholders) project.stakeholders = [];
    project.stakeholders.push({
        name: "Nova Parte Interessada",
        role: "Consultor / Parceiro",
        power: 2,
        power_label: "Médio",
        interest: 2,
        interest_label: "Alto",
        strategy: "Gerenciar de Perto"
    });
    renderCurrentTab();
};

window.deleteStakeholderItem = function(idx) {
    project.stakeholders.splice(idx, 1);
    renderCurrentTab();
};

// ---------------- 12. LIÇÕES APRENDIDAS ----------------
function renderLessons(c) {
    const l = project.lessons_learned || {};
    const records = l.phases_records || [];
    const refl = l.reflective_questions || {};
    c.innerHTML = `
        ${renderDocLifecycleHeader('lessons', '12. Lições Aprendidas & Melhoria Contínua (IPMA-D)', 3, 'Execução & Monitoramento', 'Documento vivo essencial de acompanhamento contínuo alimentado durante toda a execução e revisado a cada marco.')}

        <div class="lifecycle-alert-box" style="margin-bottom:20px;">
            <div class="alert-icon">💡</div>
            <div class="alert-content">
                <strong>Diretriz IPMA-D / Melhoria Contínua: Documento Vivo e Contínuo</strong>
                <p>O registro de lições aprendidas <strong>não deve ser deixado para o encerramento do projeto</strong>! A boa prática de governança determina que a cada ciclo, sprint, reunião de acompanhamento ou incidente relevante na Execução, a equipe registre fatos, desvios e ações corretivas para retroalimentar os ciclos seguintes. O encerramento definitivo e formal de entregas e desmobilização compete ao <em>Termo de Encerramento do Projeto</em> (Fase 4).</p>
            </div>
        </div>

        <div class="content-header">
            <div>
                <h2>12. Lições Aprendidas & Melhoria Contínua (IPMA-D)</h2>
                <p>Registro retrospectivo por fase e as 4 perguntas reflexivas de maturidade organizacional.</p>
            </div>
            <div style="display:flex; gap:10px;">
                <button class="btn btn-success" onclick="addLessonRecord()">➕ Nova Ocorrência</button>
                ${renderModulePdfBtn('lessons')}
            </div>
        </div>

        <div class="card">
            <div class="card-title">As 4 Perguntas Reflexivas IPMA (PDCA / DMAIC)</div>
            <div class="grid-2">
                <div class="form-group" style="background:#f0fdf4; border:1px solid #bbf7d0; padding:12px; border-radius:6px;">
                    <label class="form-label" style="color:#166534;">1. O que nós já fazemos com excelência?</label>
                    <textarea class="form-control" onchange="project.lessons_learned.reflective_questions.what_we_already_do = this.value">${refl.what_we_already_do || ''}</textarea>
                </div>
                <div class="form-group" style="background:#fef2f2; border:1px solid #fecaca; padding:12px; border-radius:6px;">
                    <label class="form-label" style="color:#991b1b;">2. O que fazemos e precisamos PARAR de fazer?</label>
                    <textarea class="form-control" onchange="project.lessons_learned.reflective_questions.what_we_must_stop_doing = this.value">${refl.what_we_must_stop_doing || ''}</textarea>
                </div>
                <div class="form-group" style="background:#eff6ff; border:1px solid #bfdbfe; padding:12px; border-radius:6px;">
                    <label class="form-label" style="color:#1e40af;">3. O que não fazemos e precisamos COMEÇAR a fazer?</label>
                    <textarea class="form-control" onchange="project.lessons_learned.reflective_questions.what_we_must_start_doing = this.value">${refl.what_we_must_start_doing || ''}</textarea>
                </div>
                <div class="form-group" style="background:#fefce8; border:1px solid #fef08a; padding:12px; border-radius:6px;">
                    <label class="form-label" style="color:#854d0e;">4. O que fazemos e precisamos MELHORAR a fazer?</label>
                    <textarea class="form-control" onchange="project.lessons_learned.reflective_questions.what_we_improve = this.value">${refl.what_we_improve || ''}</textarea>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-title">Ocorrências Mapeadas por Fase do Projeto</div>
            <div class="table-responsive">
                <table class="table-custom">
                    <thead><tr><th style="width:200px;">Fase</th><th>Ocorrência Identificada</th><th>Informações Complementares / Ação</th><th style="width:40px;"></th></tr></thead>
                    <tbody>
                        ${records.map((r, idx) => `
                            <tr>
                                <td><input type="text" class="form-control" value="${r.phase}" onchange="project.lessons_learned.phases_records[${idx}].phase = this.value"></td>
                                <td><input type="text" class="form-control" value="${r.occurrence}" onchange="project.lessons_learned.phases_records[${idx}].occurrence = this.value"></td>
                                <td><input type="text" class="form-control" value="${r.complementary_info}" onchange="project.lessons_learned.phases_records[${idx}].complementary_info = this.value"></td>
                                <td><button class="btn btn-outline" style="padding:2px 6px; color:#dc2626;" onclick="deleteLessonRecord(${idx})">🗑️</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        ${renderDocJourneyNav('resources', '11. Recursos & Equipe', 'budget_revised', 'Avançar: 13. Orçamento Revisado')}
    `;
}

window.addLessonRecord = function() {
    if (!project.lessons_learned.phases_records) project.lessons_learned.phases_records = [];
    project.lessons_learned.phases_records.push({
        phase: "Execução",
        occurrence: "Nova ocorrência registrada no ciclo",
        complementary_info: "Ação preventiva implementada"
    });
    renderCurrentTab();
};

window.deleteLessonRecord = function(idx) {
    project.lessons_learned.phases_records.splice(idx, 1);
    renderCurrentTab();
};

// ---------------- 9. PLANO DE COMUNICAÇÃO ----------------
function renderCommunication(c) {
    const list = project.communication_plan || [];
    c.innerHTML = `
        ${renderDocLifecycleHeader('communication', '9. Plano de Comunicação (5W2H)', 2, 'Planejamento', 'Matriz de eventos, canais, periodicidade e público-alvo para alinhamento entre stakeholders.')}

        <div class="content-header">
            <div>
                <h2>9. Plano de Comunicação (5W2H)</h2>
                <p>Define reuniões, eventos, canais, frequência e responsáveis pelas comunicações oficiais.</p>
            </div>
            <div style="display:flex; gap:10px;">
                <button class="btn btn-success" onclick="addCommunicationItem()">➕ Novo Evento</button>
                ${renderModulePdfBtn('communication')}
            </div>
        </div>

        <div class="card">
            <div class="card-title">Matriz de Comunicação por Fases do Projeto</div>
            <div class="table-responsive">
                <table class="table-custom">
                    <thead>
                        <tr>
                            <th style="width:140px;">Fase</th>
                            <th>Conteúdo (O quê?)</th>
                            <th>Público-Alvo (Quem?)</th>
                            <th>Canal</th>
                            <th>Periodicidade</th>
                            <th>Responsável</th>
                            <th style="width:40px;"></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${list.map((item, idx) => `
                            <tr>
                                <td><input type="text" class="form-control" value="${item.phase}" onchange="project.communication_plan[${idx}].phase = this.value"></td>
                                <td><input type="text" class="form-control" value="${item.content}" onchange="project.communication_plan[${idx}].content = this.value"></td>
                                <td><input type="text" class="form-control" value="${item.target_audience}" onchange="project.communication_plan[${idx}].target_audience = this.value"></td>
                                <td><input type="text" class="form-control" value="${item.channel}" onchange="project.communication_plan[${idx}].channel = this.value"></td>
                                <td><input type="text" class="form-control" value="${item.timing}" onchange="project.communication_plan[${idx}].timing = this.value"></td>
                                <td><input type="text" class="form-control" value="${item.responsible}" onchange="project.communication_plan[${idx}].responsible = this.value"></td>
                                <td><button class="btn btn-outline" style="padding:2px 6px; color:#dc2626;" onclick="deleteCommunicationItem(${idx})">🗑️</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        ${renderDocJourneyNav('risks', '8. Plano de Riscos', 'quality', 'Avançar: 10. Plano de Qualidade')}
    `;
}

window.addCommunicationItem = function() {
    if (!project.communication_plan) project.communication_plan = [];
    project.communication_plan.push({
        phase: "Execução",
        content: "Alinhamento semanal de status",
        target_audience: "Equipe do Projeto e Sponsor",
        channel: "Reunião remota via Teams",
        timing: "Semanal",
        responsible: project.manager || "GP"
    });
    renderCurrentTab();
};

window.deleteCommunicationItem = function(idx) {
    project.communication_plan.splice(idx, 1);
    renderCurrentTab();
};

// ---------------- 14. SOLICITAÇÃO DE MUDANÇAS ----------------
function renderChanges(c) {
    const changes = project.change_requests || [];
    if (changes.length === 0) {
        project.change_requests = [{
            number: "1",
            requester_name: project.manager || "Gerente",
            submitted_date: project.date || "2026-10-23",
            priority: "Média",
            status: "Pendente",
            description: "",
            reason: "",
            impacts: { scope: "", cost: "", schedule: "", others: "" },
            opinion: "",
            sponsor_approval: "",
            manager_approval: ""
        }];
    }
    const c0 = project.change_requests[0];
    const imp = c0.impacts || {};

    c.innerHTML = `
        ${renderDocLifecycleHeader('changes', '14. Solicitação de Mudanças no Projeto', 3, 'Execução & Monitoramento', 'Controle formal de alterações em escopo, prazo ou custos com análise de impactos e aprovações.')}

        <div class="content-header">
            <div>
                <h2>14. Solicitação de Mudanças nº ${c0.number || '1'}</h2>
                <p>Formulário formal para registrar, avaliar e aprovar alterações no projeto.</p>
            </div>
            <div>${renderModulePdfBtn('changes')}</div>
        </div>

        <div class="card">
            <div class="card-title">Identificação da Mudança</div>
            <div class="grid-4">
                <div class="form-group">
                    <label class="form-label">Requisitante:</label>
                    <input type="text" class="form-control" value="${c0.requester_name || ''}" onchange="project.change_requests[0].requester_name = this.value">
                </div>
                <div class="form-group">
                    <label class="form-label">Data Submetida:</label>
                    <input type="text" class="form-control" value="${c0.submitted_date || ''}" onchange="project.change_requests[0].submitted_date = this.value">
                </div>
                <div class="form-group">
                    <label class="form-label">Prioridade:</label>
                    <input type="text" class="form-control" value="${c0.priority || 'Alta'}" onchange="project.change_requests[0].priority = this.value">
                </div>
                <div class="form-group">
                    <label class="form-label">Status do Parecer:</label>
                    <select class="form-control" onchange="project.change_requests[0].status = this.value">
                        <option value="Aprovada" ${c0.status === 'Aprovada' ? 'selected' : ''}>Aprovada</option>
                        <option value="Pendente" ${c0.status === 'Pendente' ? 'selected' : ''}>Pendente</option>
                        <option value="Rejeitada" ${c0.status === 'Rejeitada' ? 'selected' : ''}>Rejeitada</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Descrição da Solicitação:</label>
                <textarea class="form-control" onchange="project.change_requests[0].description = this.value">${c0.description || ''}</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">Motivo / Justificativa da Solicitação:</label>
                <textarea class="form-control" onchange="project.change_requests[0].reason = this.value">${c0.reason || ''}</textarea>
            </div>
        </div>

        <div class="card">
            <div class="card-title">Análise de Impactos</div>
            <div class="grid-2">
                <div class="form-group">
                    <label class="form-label">Impacto no Escopo:</label>
                    <textarea class="form-control" onchange="project.change_requests[0].impacts.scope = this.value">${imp.scope || ''}</textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">Impacto no Custo:</label>
                    <textarea class="form-control" onchange="project.change_requests[0].impacts.cost = this.value">${imp.cost || ''}</textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">Impacto no Prazo:</label>
                    <textarea class="form-control" onchange="project.change_requests[0].impacts.schedule = this.value">${imp.schedule || ''}</textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">Outros / Comentários:</label>
                    <textarea class="form-control" onchange="project.change_requests[0].impacts.others = this.value">${imp.others || ''}</textarea>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-title">Parecer & Aprovação</div>
            <div class="form-group">
                <label class="form-label">Parecer do Gerente de Projeto:</label>
                <textarea class="form-control" onchange="project.change_requests[0].opinion = this.value">${c0.opinion || ''}</textarea>
            </div>
            <div class="grid-2">
                <div class="form-group">
                    <label class="form-label">Aprovação do Patrocinador (Sponsor):</label>
                    <input type="text" class="form-control" value="${c0.sponsor_approval || ''}" onchange="project.change_requests[0].sponsor_approval = this.value">
                </div>
                <div class="form-group">
                    <label class="form-label">Aprovação do Gerente de Projeto:</label>
                    <input type="text" class="form-control" value="${c0.manager_approval || ''}" onchange="project.change_requests[0].manager_approval = this.value">
                </div>
            </div>
        </div>

        ${renderDocJourneyNav('budget_revised', '13. Orçamento Revisado', 'closing', 'Avançar: 15. Termo de Encerramento')}
    `;
}

// ---------------- 15. TERMO DE ENCERRAMENTO ----------------
function renderClosing(c) {
    const cl = project.closing_statement || {};
    const delivs = cl.deliverables || [];
    c.innerHTML = `
        ${renderDocLifecycleHeader('closing', '15. Termo de Encerramento do Projeto', 4, 'Encerramento', 'Formaliza a entrega do produto final, comprovação de aceites do cliente, avaliação final e desmobilização.')}

        <div class="content-header">
            <div>
                <h2>15. Termo de Encerramento do Projeto</h2>
                <p>Formaliza a entrega do produto, a avaliação de desempenho e a desmobilização da equipe.</p>
            </div>
            <div>${renderModulePdfBtn('closing')}</div>
        </div>

        <div class="card">
            <div class="card-title">Status e Avaliação Final</div>
            <div class="grid-3">
                <div class="form-group">
                    <label class="form-label">Status Final:</label>
                    <input type="text" class="form-control" value="${cl.status || project.status || 'Encerrado'}" onchange="project.closing_statement.status = this.value; project.status = this.value">
                </div>
                <div class="form-group">
                    <label class="form-label">Avaliação do Projeto:</label>
                    <select class="form-control" onchange="project.closing_statement.evaluation = this.value; project.evaluation = this.value">
                        <option value="Excelente" ${cl.evaluation === 'Excelente' ? 'selected' : ''}>Excelente</option>
                        <option value="Muito Bom" ${cl.evaluation === 'Muito Bom' ? 'selected' : ''}>Muito Bom</option>
                        <option value="Bom" ${cl.evaluation === 'Bom' ? 'selected' : ''}>Bom</option>
                        <option value="Regular" ${cl.evaluation === 'Regular' ? 'selected' : ''}>Regular</option>
                        <option value="Insuficiente" ${cl.evaluation === 'Insuficiente' ? 'selected' : ''}>Insuficiente</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Data de Encerramento:</label>
                    <input type="text" class="form-control" value="${cl.date || project.date}" onchange="project.closing_statement.date = this.value">
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-title" style="display:flex; justify-content:space-between; align-items:center;">
                <span>Entregas Finais Atestadas</span>
                <button class="btn btn-success" style="font-size:12px;" onclick="addClosingDeliverable()">➕ Nova Entrega</button>
            </div>
            <div class="table-responsive">
                <table class="table-custom">
                    <thead><tr><th style="width:60px;">ID</th><th>Descrição do Produto / Entrega</th><th>Responsável</th><th style="width:40px;"></th></tr></thead>
                    <tbody>
                        ${delivs.map((d, idx) => `
                            <tr>
                                <td><input type="text" class="form-control" value="${d.id}" onchange="project.closing_statement.deliverables[${idx}].id = this.value"></td>
                                <td><input type="text" class="form-control" value="${d.description}" onchange="project.closing_statement.deliverables[${idx}].description = this.value"></td>
                                <td><input type="text" class="form-control" value="${d.responsible}" onchange="project.closing_statement.deliverables[${idx}].responsible = this.value"></td>
                                <td><button class="btn btn-outline" style="padding:2px 6px; color:#dc2626;" onclick="deleteClosingDeliverable(${idx})">🗑️</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        <div class="card">
            <div class="card-title">Justificativa, Conclusões & Recomendações</div>
            <div class="form-group">
                <label class="form-label">Justificativa para o Status:</label>
                <textarea class="form-control" style="min-height:90px;" onchange="project.closing_statement.justification = this.value">${cl.justification || ''}</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">Conclusões Finais:</label>
                <textarea class="form-control" style="min-height:90px;" onchange="project.closing_statement.conclusions = this.value">${cl.conclusions || ''}</textarea>
            </div>
            <div class="form-group">
                <label class="form-label">Recomendação:</label>
                <input type="text" class="form-control" value="${cl.recommendation || ''}" onchange="project.closing_statement.recommendation = this.value">
            </div>
        </div>

        <div class="card">
            <div class="card-title">Autorização e Assinatura de Encerramento</div>
            <div class="grid-2">
                <div class="form-group">
                    <label class="form-label">Responsável pela Aprovação:</label>
                    <input type="text" class="form-control" value="${cl.approver || project.sponsor}" onchange="project.closing_statement.approver = this.value">
                </div>
                <div class="form-group">
                    <label class="form-label">Data da Assinatura:</label>
                    <input type="text" class="form-control" value="${cl.approval_date || project.date}" onchange="project.closing_statement.approval_date = this.value">
                </div>
            </div>
        </div>

        ${renderDocJourneyNav('changes', '14. Solicitação de Mudanças', 'versions', 'Avançar: 16. Controle de Versões')}
    `;
}

window.addClosingDeliverable = function() {
    if (!project.closing_statement.deliverables) project.closing_statement.deliverables = [];
    const nextId = project.closing_statement.deliverables.length + 1;
    project.closing_statement.deliverables.push({
        id: `ENT-${nextId}`,
        description: "Nova entrega final atestada",
        responsible: project.manager || "GP"
    });
    renderCurrentTab();
};

window.deleteClosingDeliverable = function(idx) {
    project.closing_statement.deliverables.splice(idx, 1);
    renderCurrentTab();
};

// ---------------- 16. CONTROLE DE VERSÕES ----------------
function renderVersions(c) {
    const list = project.version_control || [];
    c.innerHTML = `
        ${renderDocLifecycleHeader('versions', '16. Controle de Versões & Auditoria', 4, 'Encerramento', 'Histórico completo de alterações documentais e rastreabilidade no projeto.')}

        <div class="content-header">
            <div>
                <h2>16. Controle de Versões & Auditoria</h2>
                <p>Histórico completo de alterações documentais e rastreabilidade no projeto.</p>
            </div>
            <div style="display:flex; gap:10px;">
                <button class="btn btn-success" onclick="addVersionRecord()">➕ Novo Registro</button>
                ${renderModulePdfBtn('versions')}
            </div>
        </div>

        <div class="card">
            <div class="card-title">Trilha de Auditoria das Versões</div>
            <div class="table-responsive">
                <table class="table-custom">
                    <thead>
                        <tr>
                            <th style="width:40px;">#</th>
                            <th>Data</th>
                            <th>Documento</th>
                            <th>Versão Ant.</th>
                            <th>Versão Atual</th>
                            <th>Responsável</th>
                            <th>Descrição da Alteração</th>
                            <th style="width:40px;"></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${list.map((v, idx) => `
                            <tr>
                                <td><strong>${v.id}</strong></td>
                                <td><input type="text" class="form-control" style="font-size:12px; padding:2px 4px;" value="${v.date}" onchange="project.version_control[${idx}].date = this.value"></td>
                                <td><input type="text" class="form-control" style="font-size:12px; padding:2px 4px;" value="${v.document}" onchange="project.version_control[${idx}].document = this.value"></td>
                                <td><input type="text" class="form-control" style="width:55px; font-size:12px; padding:2px 4px;" value="${v.prev_version}" onchange="project.version_control[${idx}].prev_version = this.value"></td>
                                <td><input type="text" class="form-control" style="width:55px; font-size:12px; padding:2px 4px;" value="${v.curr_version}" onchange="project.version_control[${idx}].curr_version = this.value"></td>
                                <td><input type="text" class="form-control" style="font-size:12px; padding:2px 4px;" value="${v.responsible}" onchange="project.version_control[${idx}].responsible = this.value"></td>
                                <td><input type="text" class="form-control" style="font-size:12px; padding:2px 4px;" value="${v.description}" onchange="project.version_control[${idx}].description = this.value"></td>
                                <td><button class="btn btn-outline" style="padding:2px 6px; color:#dc2626;" onclick="deleteVersionRecord(${idx})">🗑️</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        ${renderDocJourneyNav('closing', '15. Termo de Encerramento', 'journey', 'Concluir: Voltar à Jornada do GP')}
    `;
}

window.addVersionRecord = function() {
    const doc = prompt('Nome do documento alterado:');
    if (!doc) return;
    const desc = prompt('Descrição da alteração:');
    const resp = prompt('Responsável pela revisão:', project.manager || 'GP');
    const nextId = project.version_control.length + 1;
    project.version_control.push({
        id: nextId,
        date: project.date || "2026-10-23",
        document: doc,
        prev_version: "1.0",
        curr_version: "1.1",
        responsible: resp || "GP",
        description: desc || "Revisão técnica"
    });
    renderCurrentTab();
    showToast('Novo registro de versão adicionado!', 'success');
};

window.deleteVersionRecord = function(idx) {
    project.version_control.splice(idx, 1);
    renderCurrentTab();
};

// Exibe notificação Toast flutuante
function showToast(msg, type = 'info') {
    const existing = document.querySelector('.toast');
    if (existing && typeof existing.remove === 'function') existing.remove();
    
    if (typeof document.createElement !== 'function') return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    if (type === 'danger') toast.style.background = '#dc2626';
    if (type === 'success') toast.style.background = '#15803d';
    toast.innerHTML = msg;
    if (document.body && typeof document.body.appendChild === 'function') {
        document.body.appendChild(toast);
    }
    
    setTimeout(() => {
        if (toast && typeof toast.remove === 'function') toast.remove();
    }, 3500);
}

if (typeof window !== 'undefined') {
    window.showToast = showToast;
    window.loadProjectList = loadProjectList;
    window.loadProject = loadProject;
    window.saveProject = saveProject;
    window.exportExcel = exportExcel;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SEED_PROJECT,
        loadProjectList,
        loadProject,
        saveProject,
        switchTab,
        navigatePhase,
        updateDocStatus,
        renderCurrentTab,
        showToast
    };
}
