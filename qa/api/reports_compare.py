"""Rapports comptables avant/après une modification du calcul : capture puis comparaison EXACTE.
  capture : reports_compare.py capture <mdp> <fichier.json>   (enregistre réponses et durées)
  compare : reports_compare.py compare <avant.json> <après.json>
Variantes : périodes (année, mois, jour, période sans écriture, période avec solde d'ouverture),
filtres de journaux, affichage des comptes (tous / mouvementés / non soldés), comptes du grand livre,
bilan, compte de résultat (annuel, mensuel), brouillard de caisse, balances des tiers. Lecture seule."""
import sys, json, time
from decimal import Decimal
sys.path.insert(0, '.')
from api import *

def capture(pw, out):
    t = login('superadmin', pw); CID = 1
    journals = [j['id'] for j in call("GET", f"/api/accounting/journals?companyId={CID}", t)[1]]
    accounts = call("GET", f"/api/accounting/accounts?companyId={CID}", t)[1]
    acc = [a['id'] for a in accounts if str(a.get('code', '')).startswith(('411', '571', '701', '443'))][:6]
    periods = {"annee": ("2026-01-01", "2026-12-31"), "mois": ("2026-10-01", "2026-10-31"),
               "jour": ("2026-10-05", "2026-10-05"), "ouverture": ("2026-10-06", "2026-12-31"),
               "vide": ("2020-01-01", "2020-12-31"), "n-1": ("2025-01-01", "2025-12-31")}
    reqs = []
    for pn, (f, to) in periods.items():
        base = {"companyId": CID, "dateFrom": f, "dateTo": to}
        for disp in ("all", "movement", "not_zero"):
            for jn, js in (("tous", None), ("1j", journals[:1]), ("2j", journals[:2])):
                for ep in ("general-balance/4cols", "general-balance/6cols"):
                    reqs.append((f"{ep}|{pn}|{disp}|{jn}", ep, {**base, "displayAccount": disp, "journalIds": js}))
        reqs.append((f"grand-livre|{pn}|tous", "grand-livre", base))
        reqs.append((f"grand-livre|{pn}|comptes", "grand-livre", {**base, "accountIds": acc}))
        reqs.append((f"bilan|{pn}", "bilan", base))
        for mode in ("annuel", "mensuel"):
            reqs.append((f"compte-de-resultat|{pn}|{mode}", "compte-de-resultat", {**base, "mode": mode}))
        reqs.append((f"cashbook|{pn}", "cashbook", {**base, "journalIds": journals[:2]}))
        for sel in ("customer", "supplier", "customer_supplier"):
            reqs.append((f"partner-balance/6cols|{pn}|{sel}", "partner-balance/6cols", {**base, "resultSelection": sel}))
    res = {}
    for key, ep, body in reqs:
        t0 = time.time(); st, r = call("POST", f"/api/reports/{ep}", t, body)
        res[key] = {"status": st, "ms": round((time.time() - t0) * 1000), "body": r}
        print(f"{key:60s} {st} {res[key]['ms']:6d} ms")
    json.dump(res, open(out, "w"))

def norm(v):
    """Nombres comparés en valeur exacte (100.00 == 100) ; tout le reste à l'identique."""
    if isinstance(v, dict): return {k: norm(x) for k, x in v.items()}
    if isinstance(v, list): return [norm(x) for x in v]
    if isinstance(v, (int, float)) and not isinstance(v, bool): return Decimal(str(v)).normalize()
    return v

def ledger(body):
    """Grand livre : l'ancien tri laissait l'ordre des lignes d'une même pièce indéterminé (il changeait
    d'un appel à l'autre), et le solde progressif de chaque ligne avec. Lignes comparées sans ordre ni
    solde progressif ; totaux, solde d'ouverture et solde final comparés exactement."""
    for acc in body.get("accounts", {}).values():
        acc["lines"] = sorted((json.dumps({k: v for k, v in l.items() if k != "balance"}, sort_keys=True, default=str)
                               for l in acc["lines"]))
    return body

def running_ok(body):
    """Solde progressif cohérent : chaque ligne = ligne précédente + débit − crédit, dernière = solde final."""
    for acc in body.get("accounts", {}).values():
        run = Decimal(0)
        for l in acc["lines"]:
            run += Decimal(str(l["debit"])) - Decimal(str(l["credit"]))
            if run != Decimal(str(l["balance"])): return False
        if run != Decimal(str(acc["finalBalance"])): return False
    return True

def diff(a, b, path=""):
    if type(a) != type(b): return [f"{path}: {a!r} != {b!r}"]
    if isinstance(a, dict):
        # L'ordre des clés d'un objet JSON n'a pas de sens (certaines viennent d'un Map.of, dont
        # l'ordre d'itération change d'un démarrage de la JVM à l'autre).
        out = [f"{path}.{k}: clé présente d'un seul côté" for k in set(a) ^ set(b)]
        for k in a:
            if k in b: out += diff(a[k], b[k], f"{path}.{k}")
        return out
    if isinstance(a, list):
        if len(a) != len(b): return [f"{path}: {len(a)} éléments != {len(b)}"]
        return [d for i, (x, y) in enumerate(zip(a, b)) for d in diff(x, y, f"{path}[{i}]")]
    return [] if a == b else [f"{path}: {a} != {b}"]

def compare(fa, fb):
    a, b = json.load(open(fa)), json.load(open(fb))
    bad = 0; ta = tb = 0
    for k in a:
        if k.startswith("grand-livre|") and a[k]["status"] == 200:
            if not running_ok(b[k]["body"]): print(f"ÉCART {k} : solde progressif incohérent"); bad += 1
            a[k]["body"], b[k]["body"] = ledger(a[k]["body"]), ledger(b[k]["body"])
        d = diff(norm(a[k]["body"]), norm(b[k]["body"])) if a[k]["status"] == b[k]["status"] == 200 \
            else ([] if a[k]["status"] == b[k]["status"] else [f"statut {a[k]['status']} != {b[k]['status']}"])
        ta += a[k]["ms"]; tb += b[k]["ms"]
        if d: bad += 1; print(f"ÉCART {k} : {d[:3]}")
    print(f"{len(a)} rapports comparés, {bad} différent(s) ; durée totale avant {ta/1000:.1f} s, après {tb/1000:.1f} s")
    for ep in sorted({k.split('|')[0] for k in a}):
        ks = [k for k in a if k.startswith(ep + '|')]
        sa = sum(a[k]['ms'] for k in ks); sb = sum(b[k]['ms'] for k in ks)
        print(f"  {ep:28s} {len(ks):3d} appels  avant {sa/len(ks):7.0f} ms  après {sb/len(ks):7.0f} ms  (moyenne)")
    print("BILAN :", "identique" if bad == 0 else f"{bad} écart(s)")

if __name__ == "__main__":
    if sys.argv[1] == "capture": capture(sys.argv[2], sys.argv[3])
    else: compare(sys.argv[2], sys.argv[3])
