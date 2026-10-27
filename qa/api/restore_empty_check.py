"""Restauration d'une sauvegarde sur une base VIDE (nouvelle installation), puis cas d'erreur.
Invariants attendus lus DANS la sauvegarde elle-même (nombre de lignes de chaque table, totaux
débit/crédit, stock, montants des factures et paiements, valeurs des séquences), comparés à la base
restaurée. Cas d'erreur : archive tronquée, archive étrangère, SQL interdit, doublon de clé, clé
étrangère cassée, utilisateur sans droit. Chaque échec doit être annoncé comme tel et laisser la base
intacte (témoin créé avant, toujours présent après).

À lancer UNIQUEMENT sur une instance de test branchée sur une base jetable (elle est écrasée).
  ERP_BASE=http://127.0.0.1:18090 PSQL="docker exec -i <conteneur> psql -U <user> -d <base>" \\
  python3 restore_empty_check.py <sauvegarde.zip> <mdp_initial_superadmin_cible> <mdp_superadmin_de_la_sauvegarde>"""
import sys, os, io, re, uuid, zipfile, subprocess, shlex, time
from decimal import Decimal
sys.path.insert(0, '.')
from api import *

ZIP, PW_INIT, PW_SRC = sys.argv[1], sys.argv[2], sys.argv[3]
PSQL = shlex.split(os.environ["PSQL"])
SUMS = {"account_move_lines": ["debit", "credit"], "stock_quants": ["quantity"],
        "sales_invoices": ["totalttc", "montant_du"], "invoice_payments": ["amount"],
        "purchase_invoices": ["totalttc", "montant_du"]}
EXCLUDED = {"audit_logs", "idempotency_records", "sync_outbox_events"}   # écrites par l'application elle-même
problems = []
def check(cond, msg):
    print(("   OK  " if cond else "   ÉCART ") + msg)
    if not cond: problems.append(msg)

def sql(q):
    r = subprocess.run(PSQL + ["-Atc", q], capture_output=True, text=True)
    return r.stdout.strip()

def read_zip(data):
    z = zipfile.ZipFile(io.BytesIO(data))
    name = next(n for n in z.namelist() if n.endswith("database.sql"))
    return z, name, z.read(name).decode("utf-8")

def dump_invariants(dump):
    inv, table, cols, n, sums = {}, None, None, 0, None
    for line in dump.split("\n"):
        if table is None:
            m = re.match(r"COPY public\.(\w+) \((.*)\) FROM stdin;", line)
            if m:
                table, cols, n = m.group(1), [c.strip() for c in m.group(2).split(",")], 0
                sums = {c: Decimal(0) for c in SUMS.get(table, [])}
            m = re.match(r"SELECT pg_catalog\.setval\('public\.(\w+)', (\d+), (true|false)\);", line)
            if m and not any(m.group(1).startswith(t + "_") for t in EXCLUDED): inv[f"séquence {m.group(1)}"] = m.group(2)
        elif line == "\\.":
            if table not in EXCLUDED:
                inv[f"lignes {table}"] = str(n)
                for c, v in sums.items(): inv[f"Σ {table}.{c}"] = str(v.normalize())
            table = None
        else:
            n += 1
            vals = line.split("\t")
            for c in sums:
                v = vals[cols.index(c)]
                if v != "\\N": sums[c] += Decimal(v)
    return inv

def unbalanced_in_dump(dump):
    """Pièces dont Σ débit ≠ Σ crédit dans la sauvegarde (à retrouver telles quelles après restauration)."""
    m = re.search(r"COPY public\.account_move_lines \(([^)]*)\) FROM stdin;\n(.*?)\n\\\.\n", dump, re.S)
    cols = [c.strip() for c in m.group(1).split(",")]
    im, idb, icr = cols.index("move_id"), cols.index("debit"), cols.index("credit")
    num = lambda x: Decimal(x) if x not in ("\\N", "") else Decimal(0)
    bal = {}
    for line in m.group(2).split("\n"):
        v = line.split("\t")
        bal[v[im]] = bal.get(v[im], 0) + num(v[idb]) - num(v[icr])
    return sorted(int(k) for k, x in bal.items() if x != 0)

def db_invariants(keys):
    inv = {}
    for k in keys:
        kind, obj = k.split(" ", 1)
        if kind == "lignes": inv[k] = sql(f'select count(*) from public."{obj}"')
        elif kind == "Σ":
            t, c = obj.split(".")
            v = sql(f'select coalesce(sum("{c}"),0) from public."{t}"')
            inv[k] = str(Decimal(v).normalize()) if v else v
        else: inv[k] = sql(f"select last_value from public.{obj}")
    return inv

def restore(token, data, name="s.zip"):
    b = "----" + uuid.uuid4().hex
    body = (f'--{b}\r\nContent-Disposition: form-data; name="file"; filename="{name}"\r\n'
            f'Content-Type: application/zip\r\n\r\n').encode() + data + f"\r\n--{b}--\r\n".encode()
    t0 = time.time()
    st, r = call("POST", "/api/backup/restore", token, body, {"Content-Type": "multipart/form-data; boundary=" + b})
    return st, r, time.time() - t0

def rezip(z, sqlname, dump):
    out = io.BytesIO()
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as w:
        for n in z.namelist():
            w.writestr(n, dump if n == sqlname else z.read(n))
    return out.getvalue()

def must_fail(label, token, data, canary_sql, canary_want):
    before = sql("select count(*) from public.account_move_lines") + "/" + sql("select count(*) from public.partners")
    st, r, d = restore(token, data)
    msg = (r.get("message") or r.get("error") or r) if isinstance(r, dict) else str(r)[:160]
    after = sql("select count(*) from public.account_move_lines") + "/" + sql("select count(*) from public.partners")
    check(st >= 400, f"{label} : refusé (HTTP {st}, {d:.1f} s) — « {str(msg)[:150]} »")
    check(not re.search(r"succ|réussi|terminée avec", str(msg), re.I), f"{label} : aucun message de réussite")
    check(before == after and sql(canary_sql) == canary_want, f"{label} : base inchangée (lignes/partenaires {after}, témoin présent)")

data = open(ZIP, "rb").read()
z, sqlname, dump = read_zip(data)
expected = dump_invariants(dump)
print(f"sauvegarde : {len(data)/1048576:.1f} Mo, {len(expected)} invariants lus dans le fichier "
      f"({sum(k.startswith('lignes') for k in expected)} tables, {sum(k.startswith('séquence') for k in expected)} séquences)")

# 1. Base vide : installation neuve, mot de passe initial à changer
tables0 = sql("select count(*) from pg_tables where schemaname='public'")
t = login("superadmin", PW_INIT)
if t and call("GET", "/api/backup/download", t, raw=True)[0] == 403:
    call("POST", "/api/config/change-password", t, {"currentPassword": PW_INIT, "newPassword": PW_INIT + "Cible1"})
    t = login("superadmin", PW_INIT + "Cible1")
print(f"base cible : {tables0} tables créées par l'application au démarrage, "
      f"{sql('select count(*) from public.account_move_lines')} ligne d'écriture, {sql('select count(*) from public.partners')} partenaire(s)")

# 2. Cas d'erreur sur la base vide
canary0 = ("select count(*) from public.users where username='superadmin'", "1")
must_fail("archive tronquée", t, data[: len(data) // 2], *canary0)
foreign = io.BytesIO()
with zipfile.ZipFile(foreign, "w") as w: w.writestr("x/database.sql", "select 1;"); w.writestr("x/manifest.json", '{"appName":"Autre"}')
must_fail("archive d'une autre application", t, foreign.getvalue(), *canary0)
must_fail("SQL interdit (COPY ... TO PROGRAM)", t, rezip(z, sqlname, dump + "\nCOPY public.users TO PROGRAM 'id';\n"), *canary0)

# 3. Restauration réelle
st, r, d = restore(t, data)
print(f"restauration : HTTP {st} en {d:.1f} s — {r}")
check(st == 200, "restauration acceptée")
got = db_invariants(expected.keys())
diff = {k: (expected[k], got[k]) for k in expected if expected[k] != got[k]}
check(not diff, f"{len(expected)} invariants comparés, écarts : {diff if diff else 'aucun'}")
dc = sql("select sum(debit)-sum(credit) from public.account_move_lines")
check(Decimal(dc or 0) == 0, f"écritures équilibrées après restauration (Σ débit − Σ crédit = {dc})")
src_unbal = unbalanced_in_dump(dump)
db_unbal = [int(x) for x in sql("select move_id from public.account_move_lines group by move_id "
                                "having sum(debit)<>sum(credit) order by 1").split()]
check(db_unbal == src_unbal, f"pièces déséquilibrées identiques à la source : {len(db_unbal)} (source : {len(src_unbal)}, "
      "données historiques reproduites telles quelles)")

# 4. Connexion avec le compte de la sauvegarde, témoin créé, puis restaurations défaillantes
t = login("superadmin", PW_SRC)
check(t is not None, "connexion avec le mot de passe de la sauvegarde")
st, c = call("POST", "/api/sales/clients", t, {"ref": "TEMOIN-RESTAU", "name": "Témoin après restauration", "type": "customer", "companyId": 1})
canary = ("select count(*) from public.partners where ref='TEMOIN-RESTAU'", "1")
check(st == 200 and sql(canary[0]) == "1", "témoin créé après la restauration")

dup = re.search(r"(COPY public\.partners \(.*\) FROM stdin;\n)([^\n]*\n)", dump)
must_fail("doublon de clé primaire (partners)", t, rezip(z, sqlname, dump.replace(dup.group(0), dup.group(0) + dup.group(2), 1)), *canary)
m = re.search(r"COPY public\.account_move_lines \((.*)\) FROM stdin;\n([^\n]*)\n", dump)
cols = [c.strip() for c in m.group(1).split(",")]; vals = m.group(2).split("\t")
vals[cols.index("account_id")] = "999999999"
must_fail("clé étrangère cassée (compte inexistant)", t, rezip(z, sqlname, dump.replace(m.group(2), "\t".join(vals), 1)), *canary)

# 5. Droits : un utilisateur qui n'est pas administrateur ne peut pas restaurer
roles = call("GET", "/api/config/roles", t)[1]
role = next((x for x in roles if not x.get("system")), None)
if role:
    u = "restau_" + uuid.uuid4().hex[:6]
    call("POST", "/api/config/users", t, {"username": u, "email": u + "@test.invalid", "fullName": u, "password": "Init#Pass2026", "roleId": role["id"]})
    tu = login(u, "Init#Pass2026")
    call("POST", "/api/config/change-password", tu, {"currentPassword": "Init#Pass2026", "newPassword": "Autre#Pass2026"})
    tu = login(u, "Autre#Pass2026")
    # Petite archive : le refus porte sur le droit, pas sur le contenu (un gros envoi est coupé par le
    # serveur dès le refus, avant la fin du téléversement).
    must_fail(f"utilisateur non administrateur (rôle {role['label']})", tu, foreign.getvalue(), *canary)
    st, _, _ = call("GET", "/api/backup/download", tu, raw=True)
    check(st in (401, 403), f"utilisateur non administrateur : téléchargement d'une sauvegarde refusé (HTTP {st})")

print("BILAN :", "conforme" if not problems else f"{len(problems)} écart(s)")
