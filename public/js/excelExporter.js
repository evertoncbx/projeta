/**
 * Projeta - Gerador de Planilhas Excel Oficiais via ExcelJS no Navegador
 * Injeta os dados do projeto no template oficial preservando formatações, células mescladas, fórmulas e cores.
 */

async function exportProjectToExcel(project) {
    if (!project) return;
    showToast('📊 Preparando planilha oficial do projeto...', 'info');

    try {
        if (typeof ExcelJS === 'undefined') {
            throw new Error('Biblioteca ExcelJS não carregada.');
        }

        // Carrega o template oficial a partir da pasta pública ou fallback
        let resp = await fetch('./template.xlsx');
        if (!resp.ok) {
            resp = await fetch('https://fvsrnuovfzcugkwdwixs.supabase.co/storage/v1/object/public/bridge-files/Template%20%20_%20Plano%20de%20Projeto%20-2026_Lendlease%20-%20Empresa%20Vertex%20Engenharia%20Brasil.xlsx');
        }
        if (!resp.ok) throw new Error('Não foi possível carregar o template base do Excel.');

        const arrayBuffer = await resp.arrayBuffer();
        const wb = new ExcelJS.Workbook();
        await wb.xlsx.load(arrayBuffer);

        const p_name = project.name || "Projeto";
        const p_code = project.code || "PRJ";
        const p_company = project.company || "Empresa Executora";
        const p_client = project.client || "Cliente Contratante";
        const p_sponsor = project.sponsor || "Patrocinador";
        const p_manager = project.manager || "Gerente de Projeto";
        const p_date = project.start_date || project.date || "2026-11-01";
        const p_end_date = project.end_date || "";

        const tap = project.tap || {};
        const scope = project.scope_statement || {};
        const sched = project.schedule || [];
        const resources = project.resources || {};
        const b1 = project.budget_baseline || {};
        const b2 = project.budget_revised || {};
        const risks = project.risks_plan || {};
        const stakes = project.stakeholders || [];
        const lessons = project.lessons_learned || {};
        const comms = project.communication_plan || [];
        const quality = project.quality || {};
        const changes = project.change_requests || [];
        const closing = project.closing_statement || {};
        const wbs = project.wbs_nodes || [];

        function safeSet(ws, row, col, val) {
            if (!ws) return;
            try {
                const cell = ws.getRow(row).getCell(col);
                cell.value = val;
            } catch (e) {
                console.warn(`Erro ao escrever célula (${row}, ${col}):`, e);
            }
        }

        function clearRows(ws, startRow, endRow, startCol, endCol) {
            if (!ws) return;
            for (let r = startRow; r <= endRow; r++) {
                const row = ws.getRow(r);
                for (let c = startCol; c <= endCol; c++) {
                    const cell = row.getCell(c);
                    if (cell && !cell.isMerged) {
                        cell.value = null;
                    }
                }
            }
        }

        // 1. INSTRUÇÕES
        const wsInst = wb.getWorksheet("Instruções");
        if (wsInst) {
            safeSet(wsInst, 5, 2, p_company);
            safeSet(wsInst, 6, 2, p_name);
            safeSet(wsInst, 7, 2, p_manager);
        }

        // 2. TAP
        const wsTap = wb.getWorksheet("TAP");
        if (wsTap) {
            safeSet(wsTap, 6, 2, p_name);
            safeSet(wsTap, 7, 2, p_code);
            safeSet(wsTap, 8, 2, p_date);
            safeSet(wsTap, 8, 4, p_end_date || p_date);
            safeSet(wsTap, 9, 2, p_client);
            safeSet(wsTap, 9, 4, p_company);
            safeSet(wsTap, 10, 2, p_manager);
            safeSet(wsTap, 10, 4, p_sponsor);
            safeSet(wsTap, 11, 2, tap.budget_limit || "R$ 1.000.000,00");
            safeSet(wsTap, 13, 2, tap.project_justification || "");
            safeSet(wsTap, 15, 2, tap.smart_objective || "");
            safeSet(wsTap, 21, 2, tap.macro_scope || "");
            safeSet(wsTap, 23, 2, tap.success_factors || "");
            safeSet(wsTap, 25, 2, tap.assumptions || "");
            safeSet(wsTap, 27, 2, tap.constraints || "");
        }

        // 3. DECLARAÇÃO DE ESCOPO
        const wsScope = wb.getWorksheet("Declaração de Escopo");
        if (wsScope) {
            safeSet(wsScope, 5, 3, p_name);
            safeSet(wsScope, 7, 3, scope.technical_objective || "");
            safeSet(wsScope, 9, 3, scope.product_scope_description || "");
            const dels = scope.deliverables || [];
            clearRows(wsScope, 12, 35, 2, 6);
            dels.forEach((d, idx) => {
                const r = 12 + idx;
                safeSet(wsScope, r, 2, d.id || `ENT-${idx+1}`);
                safeSet(wsScope, r, 3, d.name || "");
                safeSet(wsScope, r, 5, d.acceptance_criteria || "");
            });
        }

        // 4. EAP / ORGANOGRAMA
        const wsEap = wb.getWorksheet("EAP");
        if (wsEap) {
            clearRows(wsEap, 11, 40, 2, 7);
            wbs.forEach((node, idx) => {
                const r = 11 + idx;
                safeSet(wsEap, r, 2, node.code || "");
                safeSet(wsEap, r, 3, node.name || "");
                safeSet(wsEap, r, 5, node.leader || "");
                safeSet(wsEap, r, 7, node.status || "");
            });
        }

        // 5. CRONOGRAMA INICIAL
        const wsSched = wb.getWorksheet("Cronograma Inicial");
        if (wsSched) {
            clearRows(wsSched, 11, 30, 2, 8);
            sched.forEach((m, idx) => {
                const r = 11 + idx;
                safeSet(wsSched, r, 2, m.id || `M${idx+1}`);
                safeSet(wsSched, r, 3, m.milestone || "");
                safeSet(wsSched, r, 4, m.responsible || "");
                safeSet(wsSched, r, 5, m.type || "Marco");
                safeSet(wsSched, r, 6, m.date || "");
                safeSet(wsSched, r, 7, m.target_time || "");
                safeSet(wsSched, r, 8, m.status || "");
            });
        }

        // 6. RECURSOS
        const wsRec = wb.getWorksheet("Recursos");
        if (wsRec && resources.members) {
            clearRows(wsRec, 11, 25, 2, 6);
            resources.members.forEach((mem, idx) => {
                const r = 11 + idx;
                safeSet(wsRec, r, 2, mem.name || "");
                safeSet(wsRec, r, 3, mem.dept || "");
                safeSet(wsRec, r, 4, mem.email || "");
                safeSet(wsRec, r, 5, mem.phone || "");
                safeSet(wsRec, r, 6, mem.mobile || "");
            });
        }

        // 7. ORÇAMENTO LINHA DE BASE
        const wsB1 = wb.getWorksheet("Orçamento 1");
        if (wsB1 && b1.items) {
            clearRows(wsB1, 11, 25, 2, 5);
            b1.items.forEach((it, idx) => {
                const r = 11 + idx;
                safeSet(wsB1, r, 2, it.item || "");
                safeSet(wsB1, r, 3, it.unit_cost || 0);
                safeSet(wsB1, r, 4, it.qty || 0);
            });
        }

        // 8. ORÇAMENTO REVISADO
        const wsB2 = wb.getWorksheet("Orçamento 2");
        if (wsB2 && b2.items) {
            clearRows(wsB2, 11, 25, 2, 5);
            b2.items.forEach((it, idx) => {
                const r = 11 + idx;
                safeSet(wsB2, r, 2, it.item || "");
                safeSet(wsB2, r, 3, it.unit_cost || 0);
                safeSet(wsB2, r, 4, it.qty || 0);
            });
        }

        // 9. PLANO DE RISCOS
        const wsRisks = wb.getWorksheet("Plano de Riscos");
        if (wsRisks && risks.items) {
            clearRows(wsRisks, 11, 35, 2, 13);
            risks.items.forEach((rsk, idx) => {
                const r = 11 + idx;
                safeSet(wsRisks, r, 2, rsk.id || `R0${idx+1}`);
                safeSet(wsRisks, r, 3, rsk.description || "");
                safeSet(wsRisks, r, 4, rsk.cause || "");
                safeSet(wsRisks, r, 5, rsk.detection_mode || "");
                safeSet(wsRisks, r, 6, rsk.consequences || "");
                safeSet(wsRisks, r, 7, rsk.probability || "");
                safeSet(wsRisks, r, 8, rsk.impact || "");
                safeSet(wsRisks, r, 9, rsk.classification || "");
                safeSet(wsRisks, r, 10, rsk.response || "");
                safeSet(wsRisks, r, 11, rsk.strategy || "");
                safeSet(wsRisks, r, 12, rsk.responsible || "");
                safeSet(wsRisks, r, 13, rsk.deadline || "");
            });
        }

        // 10. STAKEHOLDERS
        const wsStakes = wb.getWorksheet("Stakeholders");
        if (wsStakes) {
            clearRows(wsStakes, 11, 25, 2, 7);
            stakes.forEach((stk, idx) => {
                const r = 11 + idx;
                safeSet(wsStakes, r, 2, stk.name || "");
                safeSet(wsStakes, r, 3, stk.role || "");
                safeSet(wsStakes, r, 4, stk.power || "");
                safeSet(wsStakes, r, 5, stk.interest || "");
                safeSet(wsStakes, r, 6, stk.quadrant || "");
                safeSet(wsStakes, r, 7, stk.strategy || "");
            });
        }

        // 11. LIÇÕES APRENDIDAS
        const wsLessons = wb.getWorksheet("Lições Aprendidas");
        if (wsLessons && lessons.phases_records) {
            clearRows(wsLessons, 11, 25, 2, 5);
            lessons.phases_records.forEach((rec, idx) => {
                const r = 11 + idx;
                safeSet(wsLessons, r, 2, rec.phase || "");
                safeSet(wsLessons, r, 3, rec.occurrence || "");
                safeSet(wsLessons, r, 4, rec.root_cause || "");
                safeSet(wsLessons, r, 5, rec.lesson_learned || "");
            });
        }

        // 12. PLANO DE COMUNICAÇÃO
        const wsComms = wb.getWorksheet("Plano de Comunicação");
        if (wsComms) {
            clearRows(wsComms, 11, 30, 2, 6);
            comms.forEach((cm, idx) => {
                const r = 11 + idx;
                safeSet(wsComms, r, 2, cm.what || "");
                safeSet(wsComms, r, 3, cm.to_whom || "");
                safeSet(wsComms, r, 4, cm.how || "");
                safeSet(wsComms, r, 5, cm.when || "");
                safeSet(wsComms, r, 6, cm.who || "");
            });
        }

        // 13. TERMO DE ENCERRAMENTO
        const wsClosing = wb.getWorksheet("Termo de Encerramento");
        if (wsClosing) {
            safeSet(wsClosing, 5, 3, p_name);
            safeSet(wsClosing, 7, 3, closing.overall_status || "Encerrado");
            safeSet(wsClosing, 9, 3, closing.evaluation || "Muito Bom");
            const dels = closing.deliverables || [];
            clearRows(wsClosing, 13, 25, 2, 5);
            dels.forEach((d, idx) => {
                const r = 13 + idx;
                safeSet(wsClosing, r, 2, d.name || "");
                safeSet(wsClosing, r, 3, d.result || "");
                safeSet(wsClosing, r, 5, d.status || "");
            });
        }

        // Varredura para substituir referências legadas pelo nome da empresa atual
        wb.eachSheet((worksheet) => {
            worksheet.eachRow((row) => {
                row.eachCell((cell) => {
                    if (typeof cell.value === 'string' && cell.value.includes('Vertex')) {
                        cell.value = cell.value.replace(/Vertex Engenharia Brasil/g, p_company)
                                               .replace(/Vertex Brasil/g, p_company)
                                               .replace(/Vertex/g, p_company);
                    }
                });
            });
        });

        const outBuffer = await wb.xlsx.writeBuffer();
        const blob = new Blob([outBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const downloadUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `Plano_de_Projeto_${p_code}_${p_name.replace(/\s+/g, '_')}.xlsx`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(downloadUrl);

        showToast('✅ Planilha oficial exportada com sucesso!', 'success');
    } catch (err) {
        console.error('Erro ao exportar Excel:', err);
        showToast('Erro ao exportar Excel: ' + err.message, 'danger');
    }
}
