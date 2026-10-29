-- ============================================================================
-- PROJETA V2 - Esquema Relacional Corporativo & Governança IPMA ICB4
-- Compatível com Supabase / PostgreSQL 15+ & Autenticação Corporativa CAIXA
-- ============================================================================

-- 1. Habilita extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. TABELA PRINCIPAL DE PROJETOS V2 (Projetos Estratégicos IPMA-D)
CREATE TABLE IF NOT EXISTS public.projects_v2 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL DEFAULT 'CAIXA ECONÔMICA FEDERAL',
    client VARCHAR(255),
    sponsor VARCHAR(255),
    manager VARCHAR(255) NOT NULL DEFAULT 'C100502',
    manager_phone VARCHAR(50),
    manager_email VARCHAR(255),
    classification VARCHAR(50) DEFAULT 'Estratégico Corporativo',
    current_phase VARCHAR(50) DEFAULT 'initiation' CHECK (current_phase IN ('initiation', 'planning', 'execution', 'closing')),
    status VARCHAR(50) DEFAULT 'Iniciação',
    start_date DATE,
    end_date DATE,
    data JSONB NOT NULL DEFAULT '{}'::jsonb,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(50) DEFAULT 'C100502',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices de Alta Performance
CREATE INDEX IF NOT EXISTS idx_projects_v2_code ON public.projects_v2(code);
CREATE INDEX IF NOT EXISTS idx_projects_v2_company ON public.projects_v2(company);
CREATE INDEX IF NOT EXISTS idx_projects_v2_phase ON public.projects_v2(current_phase);
CREATE INDEX IF NOT EXISTS idx_projects_v2_status ON public.projects_v2(status);
CREATE INDEX IF NOT EXISTS idx_projects_v2_manager ON public.projects_v2(manager);
CREATE INDEX IF NOT EXISTS idx_projects_v2_data_gin ON public.projects_v2 USING GIN (data);

-- 3. TABELA DE ESTRUTURA ANALÍTICA DE PROJETO (WBS / EAP)
CREATE TABLE IF NOT EXISTS public.wbs_nodes_v2 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES public.projects_v2(id) ON DELETE CASCADE,
    code VARCHAR(50) NOT NULL,
    name VARCHAR(255) NOT NULL,
    leader VARCHAR(255),
    type VARCHAR(30) NOT NULL CHECK (type IN ('phase', 'deliverable', 'work_package')),
    status VARCHAR(50) DEFAULT 'Não Iniciado',
    progress_pct NUMERIC(5,2) DEFAULT 0.00,
    parent_id UUID REFERENCES public.wbs_nodes_v2(id) ON DELETE CASCADE,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_wbs_nodes_project ON public.wbs_nodes_v2(project_id);

-- 4. MATRIZ DE RISCOS CORPORATIVOS IPMA (Risk Register)
CREATE TABLE IF NOT EXISTS public.risks_v2 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES public.projects_v2(id) ON DELETE CASCADE,
    code VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    cause TEXT,
    detection_mode TEXT,
    consequences TEXT,
    probability INT CHECK (probability BETWEEN 1 AND 5),
    impact INT CHECK (impact BETWEEN 1 AND 5),
    severity_score INT GENERATED ALWAYS AS (probability * impact) STORED,
    classification VARCHAR(50),
    response_strategy VARCHAR(50) CHECK (response_strategy IN ('Evitar', 'Mitigar', 'Transferir', 'Aceitar', 'Explorar')),
    action_plan TEXT,
    responsible VARCHAR(100),
    cost NUMERIC(14,2) DEFAULT 0.00,
    deadline DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_risks_v2_project ON public.risks_v2(project_id);
CREATE INDEX IF NOT EXISTS idx_risks_v2_severity ON public.risks_v2(severity_score DESC);

-- 5. LINHAS ORÇAMENTÁRIAS (Baseline vs. Realizado)
CREATE TABLE IF NOT EXISTS public.budget_items_v2 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES public.projects_v2(id) ON DELETE CASCADE,
    budget_type VARCHAR(20) NOT NULL CHECK (budget_type IN ('baseline', 'revised', 'actual')),
    category VARCHAR(100) NOT NULL,
    resource_name VARCHAR(255) NOT NULL,
    unit_cost NUMERIC(14,2) NOT NULL DEFAULT 0.00,
    qty NUMERIC(10,2) NOT NULL DEFAULT 1.00,
    total_cost NUMERIC(14,2) GENERATED ALWAYS AS (unit_cost * qty) STORED,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_budget_items_project ON public.budget_items_v2(project_id);

-- 6. MATRIZ DE RESPONSABILIDADES RACI EXPANDIDA
CREATE TABLE IF NOT EXISTS public.raci_matrix_v2 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES public.projects_v2(id) ON DELETE CASCADE,
    deliverable_name VARCHAR(255) NOT NULL,
    role_stakeholder VARCHAR(100) NOT NULL,
    raci_assignment VARCHAR(10) NOT NULL CHECK (raci_assignment IN ('R', 'A', 'C', 'I', 'Rv', 'P')),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_raci_project ON public.raci_matrix_v2(project_id);

-- 7. OLHO DA COMPETÊNCIA IPMA ICB4 (28 Competências)
CREATE TABLE IF NOT EXISTS public.competence_evaluations_v2 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES public.projects_v2(id) ON DELETE CASCADE,
    competence_code VARCHAR(30) NOT NULL,
    domain VARCHAR(30) NOT NULL CHECK (domain IN ('perspective', 'people', 'practice')),
    name VARCHAR(255) NOT NULL,
    score NUMERIC(3,1) CHECK (score BETWEEN 0.0 AND 10.0),
    evidence TEXT,
    evaluated_by VARCHAR(50) DEFAULT 'C100502',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_competence_project ON public.competence_evaluations_v2(project_id);

-- 8. TRILHA DE AUDITORIA E LOGS DE GOVERNANÇA (Audit Trail)
CREATE TABLE IF NOT EXISTS public.audit_logs_v2 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES public.projects_v2(id) ON DELETE SET NULL,
    user_id VARCHAR(50) NOT NULL,
    action VARCHAR(50) NOT NULL,
    entity VARCHAR(100) NOT NULL,
    details JSONB DEFAULT '{}'::jsonb,
    ip_address VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_audit_logs_user ON public.audit_logs_v2(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_project ON public.audit_logs_v2(project_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_time ON public.audit_logs_v2(created_at DESC);

-- 9. TRIGGER DE ATUALIZAÇÃO AUTOMÁTICA DE TIMESTAMP
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_projects_v2_updated_at ON public.projects_v2;
CREATE TRIGGER trg_projects_v2_updated_at
BEFORE UPDATE ON public.projects_v2
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- 10. POLÍTICAS DE ROW LEVEL SECURITY (RLS)
ALTER TABLE public.projects_v2 ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wbs_nodes_v2 ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.risks_v2 ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.budget_items_v2 ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.raci_matrix_v2 ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.competence_evaluations_v2 ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs_v2 ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Acesso corporativo total projects_v2" ON public.projects_v2;
CREATE POLICY "Acesso corporativo total projects_v2" ON public.projects_v2 FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Acesso corporativo total wbs_v2" ON public.wbs_nodes_v2;
CREATE POLICY "Acesso corporativo total wbs_v2" ON public.wbs_nodes_v2 FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Acesso corporativo total risks_v2" ON public.risks_v2;
CREATE POLICY "Acesso corporativo total risks_v2" ON public.risks_v2 FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Acesso corporativo total budget_v2" ON public.budget_items_v2;
CREATE POLICY "Acesso corporativo total budget_v2" ON public.budget_items_v2 FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Acesso corporativo total raci_v2" ON public.raci_matrix_v2;
CREATE POLICY "Acesso corporativo total raci_v2" ON public.raci_matrix_v2 FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Acesso corporativo total competence_v2" ON public.competence_evaluations_v2;
CREATE POLICY "Acesso corporativo total competence_v2" ON public.competence_evaluations_v2 FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Acesso corporativo total audit_logs_v2" ON public.audit_logs_v2;
CREATE POLICY "Acesso corporativo total audit_logs_v2" ON public.audit_logs_v2 FOR ALL USING (true) WITH CHECK (true);

-- 11. BUCKET DEDICADO DE STORAGE NO SUPABASE ('projeta-v2')
INSERT INTO storage.buckets (id, name, public) 
VALUES ('projeta-v2', 'projeta-v2', true)
ON CONFLICT (id) DO NOTHING;

-- Políticas de Storage para projeta-v2
DROP POLICY IF EXISTS "Leitura pública storage projeta-v2" ON storage.objects;
CREATE POLICY "Leitura pública storage projeta-v2" ON storage.objects FOR SELECT USING (bucket_id = 'projeta-v2');

DROP POLICY IF EXISTS "Escrita pública storage projeta-v2" ON storage.objects;
CREATE POLICY "Escrita pública storage projeta-v2" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'projeta-v2');

DROP POLICY IF EXISTS "Atualização storage projeta-v2" ON storage.objects;
CREATE POLICY "Atualização storage projeta-v2" ON storage.objects FOR UPDATE USING (bucket_id = 'projeta-v2');

DROP POLICY IF EXISTS "Exclusão storage projeta-v2" ON storage.objects;
CREATE POLICY "Exclusão storage projeta-v2" ON storage.objects FOR DELETE USING (bucket_id = 'projeta-v2');
