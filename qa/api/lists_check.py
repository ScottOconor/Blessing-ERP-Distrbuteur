"""Toutes les listes paginées côté serveur (/page et /groups) comparées aux listes complètes historiques :
pages successives sans doublon ni omission, mêmes lignes, mêmes données (champ par champ), totaux et
regroupements cohérents, paramètres invalides refusés. Lecture seule.
Usage : lists_check.py <mdp_superadmin_test> [taille_de_page]"""
import sys, time
from urllib.parse import quote
from decimal import Decimal
sys.path.insert(0, '.')
from api import *

PW = sys.argv[1]; SIZE = int(sys.argv[2]) if len(sys.argv) > 2 else 23
t = login('superadmin', PW); CID = 1
D = lambda v: Decimal(str(v or 0)).quantize(Decimal('0.01'))
problems = []
def check(cond, msg):
    if not cond: problems.append(msg); print('   ÉCART :', msg)

def all_pages(url, q):
    rows, page, first, n = [], 0, None, 0
    while True:
        st, r = call("GET", f"{url}?companyId={CID}{q}&page={page}&size={SIZE}", t)
        assert st == 200, (url, q, st, r)
        first = first or r; rows += r['content']; n += 1
        if (page + 1) * SIZE >= r['totalElements']: return rows, first, n
        page += 1

# nom, liste complète, liste paginée, filtre complémentaire (query), sommes {clé de total: champ}, champs ignorés, regroupements
LISTS = [
    ("pièces comptables", "/api/accounting/moves", "/api/accounting/moves", "&dateFrom=2026-10-05&dateTo=2026-10-06",
     {}, {"lines"}, ["mois", "statut", "journal", "partenaire"]),
    ("bons de commande (ventes)", "/api/sales/orders", "/api/sales/orders", "", {"ht": "totalHT", "ttc": "totalTTC"}, set(), ["mois", "client", "statut", "entrepot"]),
    ("avoirs (ventes)", "/api/sales/avoirs", "/api/sales/avoirs", "", {"ht": "totalHT", "ttc": "totalTTC", "du": "montantDu"}, set(), []),
    ("paiements (ventes)", "/api/sales/payments", "/api/sales/payments", "", {"amount": "amount"}, set(), ["mois", "statut", "journal"]),
    ("commandes (achats)", "/api/purchases/orders", "/api/purchases/orders", "", {"ht": "totalHT", "ttc": "totalTTC"}, set(), ["mois", "fournisseur", "statut"]),
    ("factures (achats)", "/api/purchases/invoices", "/api/purchases/invoices", "", {"ht": "totalHT", "ttc": "totalTTC", "paye": "montantPaye", "du": "montantDu"}, set(), ["mois", "fournisseur", "statut"]),
    ("avoirs (achats)", "/api/purchases/avoirs", "/api/purchases/avoirs", "", {"ttc": "totalTTC"}, set(), ["mois", "fournisseur", "statut"]),
    ("paiements (achats)", "/api/purchases/payments", "/api/purchases/payments", "", {"amount": "amount"}, set(), ["mois", "statut"]),
    ("réceptions", "/api/stock/receptions", "/api/stock/receptions", "", {}, set(), ["mois", "fournisseur", "statut", "destination"]),
    ("transferts", "/api/stock/transferts", "/api/stock/transferts", "", {}, set(), ["mois", "source", "destination_entrepot", "statut"]),
    ("expéditions inter-agences", "/api/stock/inter-company/expeditions", "/api/stock/inter-company/expeditions", "", {}, set(), ["mois", "agence", "statut"]),
    ("ajustements de stock", "/api/stock/adjustments", "/api/stock/adjustments", "", {"valeur": "valueDiff"}, set(), []),
    ("opérations de caisse (entrées)", "/api/caisses/operations", "/api/caisses/operations", "&type=ENTREE", {"montant": "montant"}, set(), ["mois", "caisse"]),
    ("tickets helpdesk", "/api/helpdesk/tickets", "/api/helpdesk/tickets", "", {}, set(), []),
]

for name, full_url, base, q, sums, ignore, groups in LISTS:
    t0 = time.time(); st, full = call("GET", f"{full_url}?companyId={CID}{q}", t); tf = time.time() - t0
    assert st == 200, (full_url, st)
    t0 = time.time(); rows, first, n = all_pages(base + "/page", q); tp = time.time() - t0
    ids = [r['id'] for r in rows]
    print(f"{name} : {len(full)} lignes ; liste complète {tf:.2f} s, {n} page(s) en {tp:.2f} s")
    check(len(ids) == len(set(ids)), f"{name} : doublons entre pages")
    check(set(ids) == {r['id'] for r in full}, f"{name} : lignes différentes ({len(set(ids) ^ {r['id'] for r in full})} écart(s))")
    check(first['totalElements'] == len(full), f"{name} : totalElements {first['totalElements']} != {len(full)}")
    byid = {r['id']: r for r in full}
    diff = [(r['id'], k) for r in rows for k in r if k not in ignore and r[k] != byid.get(r['id'], {}).get(k)]
    check(not diff, f"{name} : données différentes de la liste complète {diff[:4]}")
    for key, field in sums.items():
        check(D(first['totals'].get(key)) == sum((D(r.get(field)) for r in full), Decimal('0.00')), f"{name} : total {key}")
    for g in groups:
        st, gs = call("GET", f"{base}/groups?companyId={CID}{q}&groupBy={g}", t)
        if not check(st == 200, f"{name} : regroupement {g} -> {st} {gs}") and st != 200: continue
        check(sum(x['count'] for x in gs) == len(full), f"{name} : regroupement {g}, effectifs {sum(x['count'] for x in gs)} != {len(full)}")
        if gs:
            big = max(gs, key=lambda x: x['count'])
            grows, gfirst, _ = all_pages(base + "/page", f"{q}&groupBy={g}&groupKey={quote(big['key'])}")
            check(len(grows) == big['count'], f"{name} : groupe {g}={big['key']} : {len(grows)} lignes pour {big['count']} annoncées")
            for key in sums:
                check(D(big['totals'].get(key)) == D(gfirst['totals'].get(key)), f"{name} : groupe {g}={big['key']} total {key}")

for url in ("/api/sales/orders/page", "/api/purchases/invoices/page", "/api/stock/receptions/page", "/api/accounting/moves/page"):
    for bad in ("&size=0", "&size=501", "&page=-1", "&dateFrom=abc", "&groupBy=inconnu&groupKey=1", "&groupBy=mois&groupKey=abc"):
        st, _ = call("GET", f"{url}?companyId={CID}{bad}", t)
        check(st == 400, f"{url}{bad} -> {st} au lieu de 400")
    st, _ = call("GET", f"{url}?companyId={CID}")
    check(st in (401, 403), f"{url} sans jeton -> {st}")

print("BILAN :", "conforme" if not problems else f"{len(problems)} écart(s)")
