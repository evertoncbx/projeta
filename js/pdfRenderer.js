/**
 * Projeta - Renderizador Executivo de Documentos em PDF para Navegador
 * Gera HTML formatado em padrão A4 com estilos @media print e aciona a caixa nativa de impressão.
 */

function renderPdfHtml(project_data, module = "all") {
    if (!project_data) return "<h1>Nenhum dado de projeto disponível</h1>";

    const p_name = project_data.name || "Projeto";
    const p_code = project_data.code || "PRJ";
    const p_company = project_data.company || "Organização do Projeto";
    const p_client = project_data.client || "Cliente Contratante";
    const p_sponsor = project_data.sponsor || "Patrocinador";
    const p_manager = project_data.manager || "Gerente de Projeto";
    const p_date = project_data.start_date || project_data.date || "2026-10-23";
    const p_end_date = project_data.end_date || "";
    const p_class = project_data.classification || "CORPORATIVO";

    const tap = project_data.tap || {};
    const scope = project_data.scope_statement || {};
    const schedule = project_data.schedule || [];
    const resources = project_data.resources || {};
    const raci = project_data.raci_matrix || {};
    const b1 = project_data.budget_baseline || {};
    const b2 = project_data.budget_revised || {};
    const quality = project_data.quality || {};
    const risks = project_data.risks_plan || {};
    const stakeholders = project_data.stakeholders || [];
    const lessons = project_data.lessons_learned || {};
    const comms = project_data.communication_plan || [];
    const changes = project_data.change_requests || [];
    const closing = project_data.closing_statement || {};
    const wbs_nodes = project_data.wbs_nodes || [];
    const versions = project_data.version_control || [];

    const p_duration = project_data.duration || (tap ? tap.estimated_duration : "") || "";

    function fmt_curr(val) {
        if (val === null || val === undefined || val === "") return "0";
        if (typeof val === "number") return val.toLocaleString("pt-BR");
        const num = parseFloat(String(val).replace(/[^0-9.-]+/g, ""));
        return isNaN(num) ? String(val) : num.toLocaleString("pt-BR");
    }

    function show(m_name) {
        return module === "all" || module === m_name;
    }

    let html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${p_name} - Dossiê do Projeto (${module.toUpperCase()})</title>
    <style>
        @page {
            size: A4 portrait;
            margin: 15mm 15mm 20mm 15mm;
            @bottom-right {
                content: "Página " counter(page) " de " counter(pages);
                font-family: Arial, sans-serif;
                font-size: 8pt;
                color: #64748b;
            }
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #1e293b;
            background: #ffffff;
            line-height: 1.5;
            font-size: 11pt;
            margin: 0;
            padding: 20px;
        }
        .no-print {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #0f172a;
            color: #ffffff;
            padding: 12px 24px;
            border-radius: 8px;
            margin-bottom: 25px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
        }
        .btn-print {
            background: #2563eb;
            color: #fff;
            border: none;
            padding: 8px 18px;
            font-weight: 600;
            border-radius: 6px;
            cursor: pointer;
            font-size: 13px;
        }
        .btn-print:hover { background: #1d4ed8; }
        .page-break { page-break-before: always; margin-top: 30px; }
        .header-doc {
            border-bottom: 3px solid #0284c7;
            padding-bottom: 12px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }
        .header-title {
            font-size: 20pt;
            font-weight: 800;
            color: #0f172a;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: -0.5px;
        }
        .header-sub { font-size: 11pt; color: #64748b; margin-top: 4px; font-weight: 500; }
        .badge {
            display: inline-block;
            padding: 4px 10px;
            font-size: 9pt;
            font-weight: 700;
            text-transform: uppercase;
            border-radius: 4px;
            background: #e2e8f0;
            color: #334155;
        }
        .badge-corp { background: #dbeafe; color: #1e40af; border: 1px solid #bfdbfe; }
        .badge-live { background: #fef3c7; color: #92400e; border: 1px solid #fde68a; }
        .section-box {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-left: 4px solid #0284c7;
            padding: 14px 18px;
            border-radius: 4px;
            margin-bottom: 18px;
        }
        .section-box-live { border-left: 4px solid #f59e0b; }
        .section-title {
            font-size: 13pt;
            font-weight: 700;
            color: #0f172a;
            margin-top: 0;
            margin-bottom: 10px;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 6px;
        }
        .meta-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 15px; }
        .meta-item { font-size: 10pt; }
        .meta-label { font-weight: 700; color: #475569; text-transform: uppercase; font-size: 8.5pt; }
        .meta-value { color: #0f172a; font-size: 10.5pt; }
        table { width: 100%; border-collapse: collapse; margin: 12px 0 20px 0; font-size: 9.5pt; }
        th { background-color: #0f172a; color: #ffffff; font-weight: 700; text-align: left; padding: 8px 10px; border: 1px solid #0f172a; }
        td { padding: 7px 10px; border: 1px solid #cbd5e1; vertical-align: top; }
        tr:nth-child(even) { background-color: #f8fafc; }
        .signatures { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; margin-top: 40px; padding-top: 10px; }
        .sign-box { text-align: center; border-top: 1px solid #0f172a; padding-top: 8px; }
        .sign-name { font-weight: 700; font-size: 10pt; }
        .sign-role { font-size: 9pt; color: #64748b; }
        ul, ol { margin: 6px 0 12px 20px; padding: 0; }
        li { margin-bottom: 4px; }
        @media print {
            .no-print { display: none !important; }
            body { padding: 0; }
            .page-break { page-break-before: always; }
            tr { page-break-inside: avoid; }
        }
    </style>
</head>
<body>
    <div class="no-print">
        <div>
            <strong style="font-size: 16px;">PROJETA - Visualizador de Exportação</strong>
            <div style="font-size: 12px; color: #94a3b8;">Documento formatado para emissão e impressão em PDF (A4) | Ciclo de Vida IPMA-D</div>
        </div>
        <div>
            <button class="btn-print" onclick="window.print()">🖨️ Imprimir / Salvar como PDF</button>
            <button class="btn-print" style="background:#475569; margin-left:8px;" onclick="window.close()">Fechar</button>
        </div>
    </div>
`;

    // Capa e Cabeçalho
    html += `
    <div class="header-doc">
        <div>
            <h1 class="header-title">${p_name}</h1>
            <div class="header-sub">${p_company} &bull; Código: <strong>${p_code}</strong> &bull; Dossiê de Governança IPMA-D</div>
        </div>
        <div style="text-align: right;">
            <span class="badge badge-corp">${p_class}</span>
            <div style="font-size: 9pt; color: #64748b; margin-top: 5px;">Início: ${p_date}</div>
            ${p_end_date ? `<div style="font-size: 9pt; color: #0284c7; font-weight:600;">Previsão Término: ${p_end_date}</div>` : ''}
            ${p_duration ? `<div style="font-size: 8.5pt; color: #64748b;">Duração: ${p_duration}</div>` : ''}
        </div>
    </div>
    `;

    // 1. INICIAÇÃO - TAP
    if (show("tap")) {
        html += `
        <div class="section-box">
            <h2 class="section-title">1. Termo de Abertura do Projeto (TAP) &bull; Fase de Iniciação</h2>
            <div class="meta-grid">
                <div class="meta-item"><span class="meta-label">Organização / Empresa:</span> <span class="meta-value">${p_company}</span></div>
                <div class="meta-item"><span class="meta-label">Cliente Contratante:</span> <span class="meta-value">${p_client}</span></div>
                <div class="meta-item"><span class="meta-label">Gerente do Projeto:</span> <span class="meta-value">${p_manager}</span></div>
                <div class="meta-item"><span class="meta-label">Patrocinador (Sponsor):</span> <span class="meta-value">${p_sponsor}</span></div>
                <div class="meta-item"><span class="meta-label">Teto Orçamentário:</span> <span class="meta-value">R$ ${fmt_curr(tap.budget_limit || "0")}</span></div>
                <div class="meta-item"><span class="meta-label">Data de Início:</span> <span class="meta-value">${p_date}</span></div>
            </div>
            <div style="margin-top: 10px;">
                <strong>Justificativa do Empreendimento:</strong>
                <p style="margin: 4px 0 10px 0; font-size: 10pt; color: #334155;">${tap.project_justification || "Não informada"}</p>
                <strong>Objetivo Estratégico (SMART):</strong>
                <p style="margin: 4px 0 10px 0; font-size: 10pt; color: #334155;">${tap.smart_objective || "Não informado"}</p>
            </div>
        </div>
        `;
    }

    // 2. INICIAÇÃO - STAKEHOLDERS
    if (show("stakeholders")) {
        html += `
        <div class="section-box ${show('all') ? 'page-break' : ''}">
            <h2 class="section-title">2. Partes Interessadas (Stakeholders)</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome / Ator</th>
                        <th>Papel / Organização</th>
                        <th>Poder (1-3)</th>
                        <th>Interesse (0-2)</th>
                        <th>Estratégia de Engajamento</th>
                    </tr>
                </thead>
                <tbody>
                    ${stakeholders.map(s => `
                        <tr>
                            <td><strong>${s.name}</strong></td>
                            <td>${s.role || '-'}</td>
                            <td>${s.power || '-'}</td>
                            <td>${s.interest || '-'}</td>
                            <td>${s.strategy || '-'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        `;
    }

    // 3. PLANEJAMENTO - ESCOPO
    if (show("scope")) {
        html += `
        <div class="section-box ${show('all') ? 'page-break' : ''}">
            <h2 class="section-title">3. Declaração de Escopo</h2>
            <div style="margin-bottom: 12px;">
                <strong>Objetivo Técnico:</strong>
                <p style="margin: 4px 0 10px 0; font-size: 10pt;">${scope.technical_objective || '-'}</p>
                <strong>Descrição do Escopo do Produto:</strong>
                <p style="margin: 4px 0 10px 0; font-size: 10pt;">${scope.product_scope_description || '-'}</p>
            </div>
            <strong>Entregas Principais Homologadas:</strong>
            <table>
                <thead><tr><th style="width:70px;">ID</th><th>Nome da Entrega</th><th>Critério de Aceitação</th></tr></thead>
                <tbody>
                    ${(scope.deliverables || []).map(d => `
                        <tr><td><strong>${d.id}</strong></td><td>${d.name}</td><td>${d.acceptance_criteria || '-'}</td></tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        `;
    }

    // 4. PLANEJAMENTO - EAP
    if (show("wbs")) {
        html += `
        <div class="section-box ${show('all') ? 'page-break' : ''}">
            <h2 class="section-title">4. Estrutura Analítica do Projeto (EAP / WBS)</h2>
            <table>
                <thead><tr><th style="width:80px;">Código</th><th>Pacote de Trabalho / Fase</th><th>Responsável</th><th>Status</th></tr></thead>
                <tbody>
                    ${wbs_nodes.map(n => `
                        <tr>
                            <td><strong>${n.code}</strong></td>
                            <td style="padding-left: ${n.level === 2 ? '24px' : '10px'}; font-weight:${n.level === 1 ? '700' : '400'}">${n.name}</td>
                            <td>${n.leader || '-'}</td>
                            <td>${n.status || '-'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        `;
    }

    // 5. PLANEJAMENTO - CRONOGRAMA
    if (show("schedule")) {
        html += `
        <div class="section-box ${show('all') ? 'page-break' : ''}">
            <h2 class="section-title">5. Cronograma & Marcos Críticos (Gates)</h2>
            <table>
                <thead><tr><th>ID</th><th>Marco / Evento</th><th>Data / Hora Limite</th><th>Responsável</th><th>Status</th></tr></thead>
                <tbody>
                    ${schedule.map(m => `
                        <tr>
                            <td><strong>${m.id}</strong></td>
                            <td>${m.milestone}</td>
                            <td>${m.date || ''} ${m.target_time || ''}</td>
                            <td>${m.responsible || '-'}</td>
                            <td>${m.status || '-'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        `;
    }

    // 6. PLANEJAMENTO - RACI
    if (show("raci")) {
        html += `
        <div class="section-box ${show('all') ? 'page-break' : ''}">
            <h2 class="section-title">6. Matriz de Responsabilidades (RACI)</h2>
            <table>
                <thead>
                    <tr><th>Membro da Equipe</th><th>Departamento</th><th>Papel no Projeto</th></tr>
                </thead>
                <tbody>
                    ${(raci.members || []).map(m => `
                        <tr><td><strong>${m.name}</strong></td><td>${m.dept || '-'}</td><td>${m.role || '-'}</td></tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        `;
    }

    // 7. PLANEJAMENTO - ORÇAMENTO BASE
    if (show("budget")) {
        html += `
        <div class="section-box ${show('all') ? 'page-break' : ''}">
            <h2 class="section-title">7. Orçamento Linha de Base</h2>
            <table>
                <thead><tr><th>Item</th><th>Custo Unitário</th><th>Qtd</th><th>Total</th></tr></thead>
                <tbody>
                    ${(b1.items || []).map(it => `
                        <tr><td>${it.item}</td><td>R$ ${fmt_curr(it.unit_cost)}</td><td>${it.qty}</td><td>R$ ${fmt_curr(it.total)}</td></tr>
                    `).join('')}
                </tbody>
                <tfoot>
                    <tr style="font-weight:700; background:#f1f5f9;">
                        <td colspan="3">Custo Total da Linha de Base</td>
                        <td>R$ ${fmt_curr(b1.total_cost || 0)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        `;
    }

    // 8. PLANEJAMENTO - RISCOS
    if (show("risks")) {
        html += `
        <div class="section-box ${show('all') ? 'page-break' : ''}">
            <h2 class="section-title">8. Plano de Resposta aos Riscos</h2>
            <table>
                <thead><tr><th>ID</th><th>Descrição do Risco</th><th>P</th><th>I</th><th>Classif.</th><th>Estratégia</th><th>Responsável</th></tr></thead>
                <tbody>
                    ${(risks.items || []).map(r => `
                        <tr>
                            <td><strong>${r.id}</strong></td>
                            <td>${r.description}</td>
                            <td>${r.probability || '-'}</td>
                            <td>${r.impact || '-'}</td>
                            <td>${r.classification || '-'}</td>
                            <td>${r.strategy || '-'}</td>
                            <td>${r.responsible || '-'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        `;
    }

    // 9. PLANEJAMENTO - COMUNICAÇÃO
    if (show("communication")) {
        html += `
        <div class="section-box ${show('all') ? 'page-break' : ''}">
            <h2 class="section-title">9. Plano de Comunicação (5W2H)</h2>
            <table>
                <thead><tr><th>O Quê (Evento)</th><th>Para Quem (Público)</th><th>Como (Canal)</th><th>Quando (Frequência)</th><th>Quem (Responsável)</th></tr></thead>
                <tbody>
                    ${comms.map(c => `
                        <tr>
                            <td><strong>${c.what}</strong></td>
                            <td>${c.to_whom || '-'}</td>
                            <td>${c.how || '-'}</td>
                            <td>${c.when || '-'}</td>
                            <td>${c.who || '-'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        `;
    }

    // 10. PLANEJAMENTO - QUALIDADE
    if (show("quality")) {
        html += `
        <div class="section-box ${show('all') ? 'page-break' : ''}">
            <h2 class="section-title">10. Plano de Qualidade & Conformidade</h2>
            <table>
                <thead><tr><th>Requisito de Qualidade</th><th>Meta / Indicador</th><th>Método de Avaliação</th><th>Frequência</th></tr></thead>
                <tbody>
                    ${(quality.monitoring || []).map(q => `
                        <tr>
                            <td><strong>${q.requirement}</strong></td>
                            <td>${q.target || '-'}</td>
                            <td>${q.method || '-'}</td>
                            <td>${q.frequency || '-'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        `;
    }

    // 11. PLANEJAMENTO - RECURSOS
    if (show("resources")) {
        html += `
        <div class="section-box ${show('all') ? 'page-break' : ''}">
            <h2 class="section-title">11. Equipe & Recursos Humanos</h2>
            <table>
                <thead><tr><th>Nome</th><th>Departamento</th><th>E-mail</th><th>Telefone</th></tr></thead>
                <tbody>
                    ${(resources.members || []).map(m => `
                        <tr><td><strong>${m.name}</strong></td><td>${m.dept || '-'}</td><td>${m.email || '-'}</td><td>${m.phone || '-'}</td></tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        `;
    }

    // 12. EXECUÇÃO - LIÇÕES APRENDIDAS (CONTÍNUO)
    if (show("lessons")) {
        html += `
        <div class="section-box section-box-live ${show('all') ? 'page-break' : ''}">
            <h2 class="section-title">⚡ 12. Lições Aprendidas &bull; Acompanhamento Contínuo</h2>
            <table>
                <thead><tr><th>Fase / Marco</th><th>Fato Ocorrido</th><th>Causa Raiz</th><th>Ação / Lição IPMA</th></tr></thead>
                <tbody>
                    ${(lessons.phases_records || []).map(l => `
                        <tr>
                            <td><span class="badge badge-live">${l.phase || 'Execução'}</span></td>
                            <td>${l.occurrence}</td>
                            <td>${l.root_cause || '-'}</td>
                            <td>${l.lesson_learned || '-'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        `;
    }

    // 13. EXECUÇÃO - ORÇAMENTO REVISADO
    if (show("budget_revised")) {
        html += `
        <div class="section-box ${show('all') ? 'page-break' : ''}">
            <h2 class="section-title">13. Orçamento Revisado (Executado)</h2>
            <table>
                <thead><tr><th>Item</th><th>Custo Unitário</th><th>Qtd</th><th>Total</th></tr></thead>
                <tbody>
                    ${(b2.items || []).map(it => `
                        <tr><td>${it.item}</td><td>R$ ${fmt_curr(it.unit_cost)}</td><td>${it.qty}</td><td>R$ ${fmt_curr(it.total)}</td></tr>
                    `).join('')}
                </tbody>
                <tfoot>
                    <tr style="font-weight:700; background:#f1f5f9;">
                        <td colspan="3">Custo Total Revisado</td>
                        <td>R$ ${fmt_curr(b2.total_cost || 0)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        `;
    }

    // 14. EXECUÇÃO - SOLICITAÇÃO DE MUDANÇAS
    if (show("changes")) {
        html += `
        <div class="section-box ${show('all') ? 'page-break' : ''}">
            <h2 class="section-title">14. Solicitações de Mudanças Homologadas</h2>
            ${changes.map(ch => `
                <div style="border: 1px solid #cbd5e1; padding: 12px; margin-bottom: 12px; border-radius: 4px; background: #fff;">
                    <div style="display:flex; justify-content:space-between; margin-bottom: 6px;">
                        <strong>Mudança nº ${ch.request_number || '1'}: ${ch.title || 'Ajuste'}</strong>
                        <span class="badge ${ch.status === 'Aprovado' ? 'badge-corp' : 'badge-live'}">${ch.status || 'Pendente'}</span>
                    </div>
                    <p style="font-size:9.5pt; margin: 4px 0;"><strong>Impacto no Escopo:</strong> ${ch.scope_impact || '-'}</p>
                    <p style="font-size:9.5pt; margin: 4px 0;"><strong>Impacto no Custo:</strong> ${ch.cost_impact || '-'}</p>
                    <p style="font-size:9.5pt; margin: 4px 0;"><strong>Impacto no Prazo:</strong> ${ch.schedule_impact || '-'}</p>
                </div>
            `).join('')}
        </div>
        `;
    }

    // 15. ENCERRAMENTO - TERMO DE ENCERRAMENTO
    if (show("closing")) {
        html += `
        <div class="section-box ${show('all') ? 'page-break' : ''}">
            <h2 class="section-title">15. Termo de Encerramento do Projeto</h2>
            <div class="meta-grid">
                <div class="meta-item"><span class="meta-label">Status Final:</span> <span class="meta-value">${closing.overall_status || 'Encerrado'}</span></div>
                <div class="meta-item"><span class="meta-label">Avaliação do Cliente:</span> <span class="meta-value">${closing.evaluation || 'Muito Bom'}</span></div>
            </div>
            <strong>Entregas Auditadas e Validadas:</strong>
            <table>
                <thead><tr><th>Entrega</th><th>Resultado / Conformidade</th><th>Status</th></tr></thead>
                <tbody>
                    ${(closing.deliverables || []).map(d => `
                        <tr><td><strong>${d.name}</strong></td><td>${d.result || '-'}</td><td>${d.status || 'Homologada'}</td></tr>
                    `).join('')}
                </tbody>
            </table>
            <div class="signatures">
                <div class="sign-box"><div class="sign-name">${p_manager}</div><div class="sign-role">Gerente do Projeto (${p_company})</div></div>
                <div class="sign-box"><div class="sign-name">${p_sponsor}</div><div class="sign-role">Patrocinador / Cliente (${p_client})</div></div>
            </div>
        </div>
        `;
    }

    // 16. ENCERRAMENTO - CONTROLE DE VERSÕES
    if (show("versions")) {
        html += `
        <div class="section-box ${show('all') ? 'page-break' : ''}">
            <h2 class="section-title">16. Controle de Versões e Trilha de Auditoria</h2>
            <table>
                <thead><tr><th>Data</th><th>Documento</th><th>Versão</th><th>Responsável</th><th>Descrição</th></tr></thead>
                <tbody>
                    ${versions.map(v => `
                        <tr><td>${v.date}</td><td><strong>${v.document}</strong></td><td>${v.prev_version} &rarr; ${v.curr_version}</td><td>${v.responsible}</td><td>${v.description}</td></tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        `;
    }

    html += `
</body>
</html>
    `;

    return html;
}

if (typeof window !== 'undefined') {
    window.renderPdfHtml = renderPdfHtml;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { renderPdfHtml };
}
