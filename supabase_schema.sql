-- ============================================================================
-- PROJETA - Script SQL para Banco de Dados na Nuvem (Supabase PostgreSQL)
-- ============================================================================

-- 1. Tabela Principal de Projetos
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

-- 2. Índices de Alta Performance
CREATE INDEX IF NOT EXISTS idx_projects_company ON public.projects(company);
CREATE INDEX IF NOT EXISTS idx_projects_code ON public.projects(code);
CREATE INDEX IF NOT EXISTS idx_projects_status ON public.projects(status);

-- 3. Habilita RLS (Row Level Security) e Permissões de Leitura/Escrita Pública
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Acesso público de leitura no Projeta" 
ON public.projects FOR SELECT USING (true);

CREATE POLICY "Acesso público de inserção no Projeta" 
ON public.projects FOR INSERT WITH CHECK (true);

CREATE POLICY "Acesso público de atualização no Projeta" 
ON public.projects FOR UPDATE USING (true);

CREATE POLICY "Acesso público de exclusão no Projeta" 
ON public.projects FOR DELETE USING (true);
