"""Valeur du stock au prix d'achat de la fiche, CMUP à part et réservé aux marges : parcours complet
par l'API sur une instance ISOLÉE (voir ../README.md). Modifie la base ciblée.
Usage : ERP_BASE=... KIRA_TEST_PASSWORD=... python3 valuation_check.py"""
import datetime, sys
from api import call, login, ADMIN_PASSWORD

t = login('superadmin', ADMIN_PASSWORD); today = str(datetime.date.today())
CID = 1; failures = 0
def check(label, got, expected):
    global failures
    ok = abs(float(got or 0) - float(expected)) < 0.01
    failures += 0 if ok else 1
    print(("OK   " if ok else "ÉCHEC"), label, "=", got, "" if ok else f"(attendu {expected})")
def need(r):
    assert r[0] == 200, r
    return r[1]

J = {x['code']: x['id'] for x in need(call("GET", f"/api/accounting/journals?companyId={CID}", t))}
W = {w['code']: w for w in need(call("GET", f"/api/stock/warehouses?companyId={CID}", t))}
MP, AV = W['MP'], W['AV']
code = "CMUP-" + datetime.datetime.now().strftime("%H%M%S")
product = need(call("POST", "/api/stock/products", t, {"name": "Article " + code, "defaultCode": code, "type": "product",
    "standardPrice": 1000, "salePrice": 1500, "companyId": CID, "active": True}))
pid = product['id']
supplier = need(call("POST", "/api/accounting/partners", t, {"ref": "F" + code, "name": "Fournisseur " + code, "type": "supplier", "companyId": CID}))['id']
client = need(call("POST", "/api/sales/clients", t, {"ref": "C" + code, "name": "Client " + code, "type": "customer", "companyId": CID}))['id']

# Plan comptable minimal si la base de test n'en a pas (comptes des achats, ventes et stock)
existing = {a['code'] for a in need(call("GET", f"/api/accounting/accounts?companyId={CID}", t))}
for acc, name, kind, internal in [("401100", "Fournisseurs", "liability", "payable"), ("411100", "Clients", "asset", "receivable"),
        ("601100", "Achats de marchandises", "expense", "other"), ("701100", "Ventes de marchandises", "income", "other"),
        ("311000", "Stocks de marchandises", "asset", "other"), ("603100", "Variation de stocks", "expense", "other"),
        ("445100", "TVA récupérable", "asset", "other"), ("443100", "TVA facturée", "liability", "other")]:
    if acc not in existing:
        need(call("POST", "/api/accounting/accounts", t, {"code": acc, "name": name, "accountType": kind, "internalType": internal, "companyId": CID}))

def state():
    lines = {l['warehouseId']: l for l in need(call("GET", f"/api/stock/products/{pid}/valuation", t))}
    return lines
def buy(qty, price):
    inv = need(call("POST", "/api/purchases/invoices", t, {"type": "invoice", "partnerId": supplier, "journalId": J['ACH'], "date": today,
        "companyId": CID, "warehouseId": MP['id'], "lines": [{"productId": pid, "description": "achat", "quantity": qty, "prixUnitaire": price, "tauxTVA": 0}]}))
    posted = need(call("POST", f"/api/purchases/invoices/{inv['id']}/post", t))
    return inv['id'], posted
def receive(invoice_id, received):
    inv = need(call("GET", f"/api/purchases/invoices/{invoice_id}", t))
    pk = inv['pickingId']
    b = need(call("GET", f"/api/stock/receptions/{pk}/bordereau", t))
    lignes = [{"moveId": l['moveId'], "qteRecue": received} for l in b['lignes']]
    done = need(call("POST", f"/api/stock/receptions/{pk}/bordereau/validate", t, lignes))
    return pk, b, done, lignes

print("— Trois achats à 1 000 / 1 200 / 1 300, fiche à 1 000")
i1, _ = buy(100, 1000); receive(i1, 100)
s = state(); check("CMUP après 1er achat", s[MP['id']]['cmup'], 1000); check("Valeur", s[MP['id']]['stockValue'], 100000)
i2, _ = buy(50, 1200); pk2, b2, done2, lignes2 = receive(i2, 50)
check("Prix affiché sur la réception (facture 1 200)", b2['lignes'][0]['prixUnitaire'], 1000)
check("Valeur de la ligne de réception", done2['lignes'][0]['valeur'], 50000)
s = state(); check("CMUP après 2e achat", s[MP['id']]['cmup'], 1066.6667); check("Valeur", s[MP['id']]['stockValue'], 150000)
st, _ = call("POST", f"/api/stock/receptions/{pk2}/bordereau/validate", t, lignes2)
print("     2e validation refusée :", st); check("Valeur inchangée après double validation", state()[MP['id']]['stockValue'], 150000)
i3, _ = buy(100, 1300); receive(i3, 100)
s = state(); check("CMUP après 3e achat", s[MP['id']]['cmup'], 1160); check("Valeur (≠ 250 × CMUP)", s[MP['id']]['stockValue'], 250000)
check("Fiche article intacte", need(call("GET", f"/api/stock/products/{pid}", t))['standardPrice'], 1000)

print("— Réception partielle")
i4, _ = buy(10, 1000); pk4, b4, done4, _ = receive(i4, 6)
check("Valeur de la ligne (6 reçus)", done4['lignes'][0]['valeur'], 6000)

print("— Vente de 20 à 1 500")
base_cmup = state()[MP['id']]['cmup']
sale = need(call("POST", "/api/sales/invoices", t, {"type": "invoice", "partnerId": client, "journalId": J['VNT'], "date": today, "companyId": CID,
    "warehouseId": MP['id'], "lines": [{"productId": pid, "description": "vente", "quantity": 20, "prixUnitaire": 1500, "tauxTVA": 0}]}))
need(call("POST", f"/api/sales/invoices/{sale['id']}/post", t))
s = state(); check("Valeur après vente : −20 × 1 000", s[MP['id']]['stockValue'], 236000)
invoice_name = need(call("GET", f"/api/sales/invoices/{sale['id']}", t))['name']
print("     variation de stock à contrôler : pièce STK/" + invoice_name + " = 20 000 au prix d'achat")
def stats():
    return need(call("POST", "/api/sales/stats/stats-ventes", t, {"companyId": CID, "dateFrom": today, "dateTo": today, "productId": pid, "groupBy": "client"}))
g = stats(); check("Coût des ventes au CMUP", g['grandTotalCout'], 20 * base_cmup); check("Marge", g['grandTotalMargeHT'], 30000 - 20 * base_cmup)
print("— La nouvelle réception ne change pas l'ancienne marge")
i5, _ = buy(50, 3000); receive(i5, 50)
check("Marge inchangée", stats()['grandTotalMargeHT'], 30000 - 20 * base_cmup)
check("Valeur", state()[MP['id']]['stockValue'], 286000)

print("— Transfert de 30, 20 reçus, 10 renvoyés")
types = {p['code']: p for p in need(call("GET", f"/api/stock/picking-types?companyId={CID}", t))}
tr = need(call("POST", "/api/stock/pickings", t, {"pickingTypeId": types['internal']['id'], "locationId": MP['stockLocationId'],
    "locationDestId": AV['stockLocationId'], "scheduledDate": today, "companyId": CID, "moves": [{"productId": pid, "qtyDemanded": 30, "qtyDone": 30}]}))
check("Valeur de la ligne de transfert", tr['moves'][0]['purchasePrice'], 1000)
need(call("POST", f"/api/stock/pickings/{tr['id']}/validate", t))
check("Source après expédition", state()[MP['id']]['stockValue'], 256000)
rec = [p for p in need(call("GET", f"/api/stock/transferts/receptions?companyId={CID}", t)) if p['state'] == 'pending_reception'][0]
det = need(call("GET", f"/api/stock/pickings/{rec['id']}", t))
need(call("POST", f"/api/stock/transferts/receptions/{rec['id']}/confirm", t, [{"moveId": det['moves'][0]['id'], "qteRecue": 20}]))
s = state(); check("Source après retour du reliquat", s[MP['id']]['stockValue'], 266000); check("Destination (20 + 4 du reliquat de réception partielle)", s[AV['id']]['stockValue'], 24000)

print("— Retour client de 5")
line_id = need(call("GET", f"/api/sales/invoices/{sale['id']}", t))['lines'][0]['id']
credit = need(call("POST", f"/api/sales/invoices/{sale['id']}/avoir", t, {"avoirType": "partiel", "date": today, "lines": [{"lineId": line_id, "quantite": 5}]}))
print("     avoir :", credit.get('name'), credit.get('state'))
if credit.get('state') == 'draft': need(call("POST", f"/api/sales/invoices/{credit['id']}/post", t))
check("Valeur après retour", state()[MP['id']]['stockValue'], 271000)

print("— Inventaire et casse")
qty = state()[MP['id']]['quantity']
need(call("POST", "/api/stock/adjustments", t, {"productId": pid, "locationId": MP['stockLocationId'], "newQty": qty - 2, "companyId": CID, "date": today, "notes": "inv-"}))
check("Inventaire négatif", state()[MP['id']]['stockValue'], 269000)
need(call("POST", "/api/stock/adjustments", t, {"productId": pid, "locationId": MP['stockLocationId'], "newQty": qty, "companyId": CID, "date": today, "notes": "inv+"}))
check("Inventaire positif", state()[MP['id']]['stockValue'], 271000)

print("— Retour fournisseur de 3")
ret = need(call("POST", f"/api/purchases/invoices/{i1}/avoir", t, {"avoirType": "partiel", "date": today, "lines": [{"lineId": need(call("GET", f"/api/purchases/invoices/{i1}", t))['lines'][0]['id'], "quantite": 3}]}))
if ret.get('state') == 'draft': need(call("POST", f"/api/purchases/invoices/{ret['id']}/post", t))
check("Valeur après retour fournisseur", state()[MP['id']]['stockValue'], 268000)

print("— Épuisement puis nouveau cycle")
s = state(); need(call("POST", "/api/stock/adjustments", t, {"productId": pid, "locationId": AV['stockLocationId'], "newQty": 0, "companyId": CID, "date": today, "notes": "vide"}))
check("Plus aucune valeur résiduelle", state()[AV['id']]['stockValue'], 0)

print("— Journal")
h = need(call("GET", f"/api/stock/valuation/history?companyId={CID}&productId={pid}&limit=1000", t))
print("     écritures :", len(h), "types :", sorted({e['moveType'] for e in h}))
print("product_id", pid, "code", code)
print("ÉCHECS :", failures); sys.exit(1 if failures else 0)
