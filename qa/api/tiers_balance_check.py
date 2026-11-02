"""Dettes & Créances : créances = soldes des comptes clients, dettes = soldes des comptes fournisseurs,
positifs ou négatifs. Base de test dédiée (voir ../README.md) : suppose aucun autre solde tiers.
Usage : ERP_BASE=... KIRA_TEST_PASSWORD=... python3 tiers_balance_check.py"""
import datetime, sys
from api import call, login, ADMIN_PASSWORD

t = login('superadmin', ADMIN_PASSWORD); today = str(datetime.date.today()); CID = 1; failures = 0
def need(r):
    assert r[0] == 200, r
    return r[1]
def check(label, got, expected):
    global failures
    ok = abs(float(got or 0) - float(expected)) < 0.01
    failures += 0 if ok else 1
    print(("OK   " if ok else "ÉCHEC"), label, "=", got, "" if ok else f"(attendu {expected})")

J = {x['code']: x['id'] for x in need(call("GET", f"/api/accounting/journals?companyId={CID}", t))}
existing = {a['code'] for a in need(call("GET", f"/api/accounting/accounts?companyId={CID}", t))}
for acc, name, kind, internal in [("401100", "Fournisseurs", "liability", "payable"), ("411100", "Clients", "asset", "receivable"),
        ("601100", "Achats de marchandises", "expense", "other"), ("701100", "Ventes de marchandises", "income", "other"),
        ("311000", "Stocks de marchandises", "asset", "other"), ("603100", "Variation de stocks", "expense", "other")]:
    if acc not in existing:
        need(call("POST", "/api/accounting/accounts", t, {"code": acc, "name": name, "accountType": kind, "internalType": internal, "companyId": CID}))
W = {w['code']: w for w in need(call("GET", f"/api/stock/warehouses?companyId={CID}", t))}
tag = datetime.datetime.now().strftime("%H%M%S")
pid = need(call("POST", "/api/stock/products", t, {"name": "Tiers " + tag, "defaultCode": "T" + tag, "type": "service",
    "standardPrice": 0, "salePrice": 1000, "companyId": CID, "active": True}))['id']
def partner(path, kind, name):
    return need(call("POST", path, t, {"ref": name, "name": name + tag, "type": kind, "companyId": CID}))['id']
c_pos, c_neg = partner("/api/sales/clients", "customer", "CP"), partner("/api/sales/clients", "customer", "CN")
f_pos, f_neg = partner("/api/accounting/partners", "supplier", "FP"), partner("/api/accounting/partners", "supplier", "Brasseries")
def doc(base, kind, partner_id, journal, amount):
    r = need(call("POST", f"/api/{base}/invoices", t, {"type": kind, "partnerId": partner_id, "journalId": J[journal], "date": today, "companyId": CID,
        "warehouseId": W['MP']['id'], "lines": [{"productId": pid, "description": "x", "quantity": 1, "prixUnitaire": amount, "tauxTVA": 0}]}))
    need(call("POST", f"/api/{base}/invoices/{r['id']}/post", t))
doc("sales", "invoice", c_pos, "VNT", 5000)
doc("sales", "credit_note", c_neg, "VNT", 1200)     # client en avance : solde négatif
doc("purchases", "invoice", f_pos, "ACH", 8000)
doc("purchases", "credit_note", f_neg, "ACH", 3000)  # fournisseur en avance : solde négatif

r = need(call("GET", f"/api/reports/suivi-tiers?companyId={CID}", t))
cr = {l['partnerId']: l['solde'] for l in r['creances']}; de = {l['partnerId']: l['solde'] for l in r['dettes']}
check("Client débiteur", cr.get(c_pos), 5000)
check("Client en avance reste dans les créances, négatif", cr.get(c_neg), -1200)
check("Fournisseur à payer", de.get(f_pos), 8000)
check("Fournisseur en avance reste dans les dettes, négatif", de.get(f_neg), -3000)
check("Client absent des dettes", 1 if c_neg in de else 0, 0)
check("Fournisseur absent des créances", 1 if f_neg in cr else 0, 0)
check("Total créances", r['totalCreances'], sum(cr.values()))
check("Total dettes", r['totalDettes'], sum(de.values()))
check("Tableau de bord Ventes", sum(l['solde'] for l in need(call("GET", f"/api/sales/creances-tiers?companyId={CID}", t))), r['totalCreances'])
check("Tableau de bord Achats", sum(l['solde'] for l in need(call("GET", f"/api/purchases/dettes-tiers?companyId={CID}", t))), r['totalDettes'])
print("totaux :", r['totalCreances'], r['totalDettes'], r['soldeNet'])
print("ÉCHECS :", failures); sys.exit(1 if failures else 0)
