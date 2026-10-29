# PROJETA - Sistema de Gestão Estratégica de Projetos IPMA-D (ICB4)

Sistema independente e profissional para gestão estratégica de projetos no framework internacional **IPMA ICB4 (Nível D)**, estruturado com base nos 16 artefatos documentais do ciclo de vida do GP, exportação Excel fiel e relatórios executivos em PDF.

---

## 🚀 Arquitetura Serverless & Nuvem Independente

- **Repositório GitHub Dedicado**: `https://github.com/evertoncbx/projeta`
- **Deploy Vercel Dedicado**: Projeto próprio e autônomo na Vercel (Edge Network global de alta performance com zero rewrites intrusivos)
- **Persistência Híbrida Supabase**: 
  - Banco de Dados PostgreSQL Relacional (Tabela `projects`) via REST PostgREST API
  - Backup em Supabase Storage dedicado (Bucket `projeta`)
  - Cache local resiliente offline via Web Storage API
- **Exportação Excel Oficial**: Geração client-side de arquivos `.xlsx` oficiais com ExcelJS, preservando cabeçalhos corporativos, cores e fórmulas
- **Relatórios Executivos em PDF**: Dossiê completo e relatórios modulares compatíveis com impressão e PDF padrão A4
- **Jornada do GP**: 4 fases estruturadas (Iniciação, Planejamento, Execução Contínua e Encerramento) e matriz RACI integrada

---

## ⚙️ Configuração do Banco de Dados no Supabase

Para utilizar com uma instância própria do Supabase, basta:
1. Acessar o **SQL Editor** do projeto Supabase.
2. Executar o conteúdo do arquivo `supabase_schema.sql` deste repositório.
3. No painel do Projeta, clicar no botão **⚙️ Nuvem** no cabeçalho superior e inserir a sua **Project URL** e a **Anon Public Key**.
4. Testar a conexão e salvar.

---

## 💻 Execução Local

```bash
# Com Node.js:
npx serve .

# Ou com Python:
python -m http.server 8080
```

---

## 📂 Estrutura de Arquivos

```
projeta/
├── index.html            # Aplicação Web SPA principal
├── css/
│   └── style.css         # Estilização completa e responsiva do sistema
├── js/
│   ├── projeta.js        # Motor de regras de negócio, UI e ciclo de vida
│   ├── supabaseSync.js   # Módulo de persistência híbrida e modal de conexão
│   ├── ipmaCoverage.js   # Olho da Competência IPMA ICB4
│   ├── excelExporter.js  # Motor de exportação ExcelJS
│   └── pdfRenderer.js    # Motor de geração de relatórios A4 em PDF
├── exceljs.min.js        # Biblioteca ExcelJS empacotada
├── template.xlsx         # Template oficial de plano de projeto (.xlsx)
├── supabase_schema.sql   # Script SQL DDL de tabelas e políticas RLS
├── vercel.json           # Configuração de rotas, headers e tipos MIME da Vercel
├── package.json          # Metadados e scripts de execução
└── README.md             # Documentação oficial
```
