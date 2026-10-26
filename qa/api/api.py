"""Petit client HTTP de test (stdlib uniquement) pour une instance KIRA Commercial ISOLÉE de test.
ERP_BASE : adresse de l'instance ; KIRA_TEST_PASSWORD : mot de passe du superadmin de TEST ;
ERP_TIMEOUT : délai par requête en secondes (60 par défaut)."""
import json, urllib.request, urllib.error, os
BASE = os.environ.get("ERP_BASE", "http://127.0.0.1:18086")
def call(method, path, token=None, body=None, headers=None, raw=False):
    h = {"Content-Type": "application/json"}
    if token: h["Authorization"] = "Bearer " + token
    if headers: h.update(headers)
    data = None if body is None else (body if isinstance(body, bytes) else json.dumps(body).encode())
    req = urllib.request.Request(BASE + path, data=data, method=method, headers=h)
    try:
        with urllib.request.urlopen(req, timeout=int(os.environ.get("ERP_TIMEOUT","60"))) as r:
            b = r.read(); st = r.status; hd = dict(r.headers)
    except urllib.error.HTTPError as e:
        b = e.read(); st = e.code; hd = dict(e.headers)
    if raw: return st, b, hd
    try: return st, json.loads(b) if b else None
    except Exception: return st, b[:300].decode(errors="replace")
ADMIN_PASSWORD = os.environ.get("KIRA_TEST_PASSWORD")

def login(u, p):
    st, r = call("POST", "/api/auth/login", body={"username": u, "password": p})
    return r.get("token") if st == 200 else None
