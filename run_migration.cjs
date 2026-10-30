const { Client } = require('d:/dataScience/projeta/node_modules/pg');

async function runMigration() {
  const client = new Client({
    host: 'aws-1-sa-east-1.pooler.supabase.com',
    port: 5432,
    user: 'postgres.fvsrnuovfzcugkwdwixs',
    password: 'YYLhuPxD3hOFBiAD',
    database: 'postgres',
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('Connected to Supabase PostgreSQL!');

    // 1. Drop test table
    await client.query('DROP TABLE IF EXISTS public._test_ping CASCADE');

    // 2. Criar tabela projects_v2
    console.log('Creating projects_v2 table...');
    await client.query(`
      CREATE TABLE IF NOT EXISTS public.projects_v2 (
        id TEXT PRIMARY KEY,
        code TEXT NOT NULL,
        name TEXT NOT NULL,
        company TEXT DEFAULT 'CAIXA ECONÔMICA FEDERAL',
        client TEXT,
        sponsor TEXT,
        manager TEXT DEFAULT 'C100502',
        classification TEXT DEFAULT 'Estratégico Corporativo',
        status TEXT DEFAULT 'Iniciação',
        current_phase TEXT DEFAULT 'initiation',
        start_date TEXT,
        end_date TEXT,
        data JSONB NOT NULL DEFAULT '{}'::jsonb,
        created_by TEXT DEFAULT 'C100502',
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE INDEX IF NOT EXISTS idx_projects_v2_code ON public.projects_v2(code);
      CREATE INDEX IF NOT EXISTS idx_projects_v2_updated_at ON public.projects_v2(updated_at DESC);
      CREATE INDEX IF NOT EXISTS idx_projects_v2_data_gin ON public.projects_v2 USING GIN (data);
    `);

    // 3. Criar tabela projeta_users
    console.log('Creating projeta_users table...');
    await client.query(`
      CREATE TABLE IF NOT EXISTS public.projeta_users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        username TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        password TEXT NOT NULL,
        role TEXT DEFAULT 'admin',
        active BOOLEAN DEFAULT true,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE INDEX IF NOT EXISTS idx_projeta_users_username ON public.projeta_users(username);
    `);

    // 4. Inserir usuário inicial padrão (C100502 / 74271248)
    console.log('Seeding initial admin user...');
    await client.query(`
      INSERT INTO public.projeta_users (username, name, password, role, active)
      VALUES ('C100502', 'Gestor IPMA-D Admin', '74271248', 'admin', true)
      ON CONFLICT (username) DO UPDATE
      SET password = EXCLUDED.password, active = true;
    `);

    // 5. Configurar RLS e permissões para PostgREST (anon, authenticated, service_role)
    console.log('Configuring RLS and permissions...');
    await client.query(`
      ALTER TABLE public.projects_v2 ENABLE ROW LEVEL SECURITY;
      ALTER TABLE public.projeta_users ENABLE ROW LEVEL SECURITY;

      DROP POLICY IF EXISTS "Public access projects_v2" ON public.projects_v2;
      CREATE POLICY "Public access projects_v2" ON public.projects_v2 FOR ALL USING (true) WITH CHECK (true);

      DROP POLICY IF EXISTS "Public access projeta_users" ON public.projeta_users;
      CREATE POLICY "Public access projeta_users" ON public.projeta_users FOR ALL USING (true) WITH CHECK (true);

      GRANT ALL ON public.projects_v2 TO anon, authenticated, service_role;
      GRANT ALL ON public.projeta_users TO anon, authenticated, service_role;
    `);

    // 6. Configurar Bucket de Storage 'projeta-v2'
    console.log('Configuring Storage bucket projeta-v2...');
    await client.query(`
      INSERT INTO storage.buckets (id, name, public) 
      VALUES ('projeta-v2', 'projeta-v2', true)
      ON CONFLICT (id) DO NOTHING;

      DROP POLICY IF EXISTS "Public read projeta-v2" ON storage.objects;
      CREATE POLICY "Public read projeta-v2" ON storage.objects FOR SELECT USING (bucket_id = 'projeta-v2');

      DROP POLICY IF EXISTS "Public write projeta-v2" ON storage.objects;
      CREATE POLICY "Public write projeta-v2" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'projeta-v2');

      DROP POLICY IF EXISTS "Public update projeta-v2" ON storage.objects;
      CREATE POLICY "Public update projeta-v2" ON storage.objects FOR UPDATE USING (bucket_id = 'projeta-v2');

      DROP POLICY IF EXISTS "Public delete projeta-v2" ON storage.objects;
      CREATE POLICY "Public delete projeta-v2" ON storage.objects FOR DELETE USING (bucket_id = 'projeta-v2');
    `);

    // 7. Notificar PostgREST para recarregar o schema cache
    console.log('Reloading PostgREST schema cache...');
    await client.query("NOTIFY pgrst, 'reload schema'");

    console.log('✅ Migração Supabase executada com sucesso total!');
    await client.end();
  } catch (err) {
    console.error('❌ Erro na migração:', err);
    try { await client.end(); } catch {}
    process.exit(1);
  }
}

runMigration();
