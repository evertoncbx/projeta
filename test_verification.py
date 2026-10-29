import http.server
import socketserver
import threading
import urllib.request
import time
import os
import sys

PORT = 5055
DIRECTORY = r"d:\dataScience\projeta"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run_tests():
    assets_to_test = [
        ("/", 200, "text/html"),
        ("/index.html", 200, "text/html"),
        ("/css/style.css", 200, "text/css"),
        ("/exceljs.min.js", 200, "application/javascript"),
        ("/js/auth.js", 200, "application/javascript"),
        ("/js/supabaseSync.js", 200, "application/javascript"),
        ("/js/ipmaCoverage.js", 200, "application/javascript"),
        ("/js/pdfRenderer.js", 200, "application/javascript"),
        ("/js/excelExporter.js", 200, "application/javascript"),
        ("/js/projeta.js", 200, "application/javascript"),
        ("/template.xlsx", 200, None),
        ("/supabase_schema.sql", 200, None),
        ("/supabase_schema_v2.sql", 200, None),
        ("/v2/", 200, "text/html"),
        ("/v2/index.html", 200, "text/html"),
        ("/v2/assets/index-6IwR5QGb.js", 200, "application/javascript"),
        ("/v2/assets/index-CTbPteOH.css", 200, "text/css"),
    ]

    print("=== INICIANDO TESTES DE ASSETS E ROTAS DO PROJETA (V1 + V2) ===")
    all_ok = True
    base_url = f"http://127.0.0.1:{PORT}"

    for path, expected_status, expected_mime in assets_to_test:
        url = f"{base_url}{path}"
        try:
            req = urllib.request.Request(url)
            with urllib.request.urlopen(req, timeout=5) as response:
                status = response.status
                mime = response.headers.get_content_type()
                content_len = len(response.read())

                status_ok = (status == expected_status)
                mime_ok = True
                if expected_mime:
                    mime_ok = (expected_mime in mime) or (expected_mime == 'application/javascript' and 'text/javascript' in mime)

                if status_ok and mime_ok and content_len > 0:
                    print(f"  [OK] {path} -> Status {status}, MIME: {mime}, Bytes: {content_len}")
                else:
                    print(f"  [FAIL] {path} -> Status {status} (exp {expected_status}), MIME: {mime} (exp {expected_mime}), Bytes: {content_len}")
                    all_ok = False
        except Exception as e:
            print(f"  [ERROR] {path} -> {e}")
            all_ok = False

    print("=== RESULTADO DA VERIFICACAO DE ROTAS: ===")
    if all_ok:
        print(">>> TODOS OS ASSETS (V1 + V2 + SCHEMAS) CARREGADOS COM 100% DE SUCESSO! <<<")
    else:
        print(">>> HOUVE FALHA NO CARREGAMENTO DOS ASSETS <<<")
        sys.exit(1)

def main():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
        t = threading.Thread(target=httpd.serve_forever)
        t.daemon = True
        t.start()
        print(f"Servidor HTTP de teste rodando em 127.0.0.1:{PORT}")
        time.sleep(0.5)
        try:
            run_tests()
        finally:
            httpd.shutdown()

if __name__ == "__main__":
    main()
