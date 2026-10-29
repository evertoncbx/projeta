-- ============================================================================
-- PROJETA - Script SQL Oficial para Banco de Dados na Nuvem (Supabase)
-- Instância Dedicada: projeta
-- ============================================================================

-- 1. TABELA PRINCIPAL DE PROJETOS (PostgreSQL Relacional)
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

-- 2. ÍNDICES DE ALTA PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_projects_company ON public.projects(company);
CREATE INDEX IF NOT EXISTS idx_projects_code ON public.projects(code);
CREATE INDEX IF NOT EXISTS idx_projects_status ON public.projects(status);

-- 3. POLÍTICAS DE SEGURANÇA E ACESSO RLS (PostgreSQL)
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Acesso público projeta" ON public.projects;
CREATE POLICY "Acesso público projeta" 
ON public.projects FOR ALL 
USING (true) 
WITH CHECK (true);

-- 4. BUCKET DEDICADO DE STORAGE NO SUPABASE ('projeta')
INSERT INTO storage.buckets (id, name, public) 
VALUES ('projeta', 'projeta', true)
ON CONFLICT (id) DO NOTHING;

-- 5. POLÍTICAS DE ACESSO PÚBLICO AO STORAGE DO PROJETA
DROP POLICY IF EXISTS "Acesso público leitura storage projeta" ON storage.objects;
CREATE POLICY "Acesso público leitura storage projeta" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'projeta');

DROP POLICY IF EXISTS "Acesso público escrita storage projeta" ON storage.objects;
CREATE POLICY "Acesso público escrita storage projeta" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'projeta');

DROP POLICY IF EXISTS "Acesso público atualização storage projeta" ON storage.objects;
CREATE POLICY "Acesso público atualização storage projeta" 
ON storage.objects FOR UPDATE 
USING (bucket_id = 'projeta');

DROP POLICY IF EXISTS "Acesso público exclusão storage projeta" ON storage.objects;
CREATE POLICY "Acesso público exclusão storage projeta" 
ON storage.objects FOR DELETE 
USING (bucket_id = 'projeta');
