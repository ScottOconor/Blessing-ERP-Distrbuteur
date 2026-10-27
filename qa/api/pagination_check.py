"""Liste paginée des factures (/api/sales/invoices/page et /groups) comparée à la liste complète
historique (/api/sales/invoices) filtrée comme le faisait l'écran : pages successives sans doublon ni
omission, même ordre, mêmes totaux, mêmes groupes. Lecture seule.
Usage : pagination_check.py <mdp_superadmin_test> [taille_de_page]"""
import sys, time
from decimal import Decimal
sys.path.insert(0, '.')
from api import *

PW = sys.argv[1]; SIZE = int(sys.argv[2]) if len(sys.argv) > 2 else 37
t = login('superadmin', PW); CID = 1
D = lambda v: Decimal(str(v or 0)).quantize(Decimal('0.01'))
problems = []
def check(cond, msg):
    if not cond: problems.append(msg); print('   ÉCART :', msg)

t0 = time.time(); st, full = call("GET", f"/api/sales/invoices?companyId={CID}", t)
assert st == 200, st
print(f"liste complète : {len(full)} factures en {time.time()-t0:.2f} s")
full.sort(key=lambda i: (i['date'] or '', i['name'] or '', i['id']), reverse=True)  # date, numéro, id décroissants
dates = sorted(i['date'] for i in full if i['date'])
mid = dates[len(dates)//2] if dates else None
journals = sorted({i['journalId'] for i in full if i.get('journalId')})

def ref(state=None, dfrom=None, dto=None, journal=None):
    return [i for i in full if (not state or i['state'] == state) and (not dfrom or i['date'] >= dfrom)
            and (not dto or i['date'] <= dto) and (not journal or i.get('journalId') == journal)]

def qs(state=None, dfrom=None, dto=None, journal=None):
    q = f"companyId={CID}"
    if state: q += f"&state={state}"
    if dfrom: q += f"&dateFrom={dfrom}"
    if dto: q += f"&dateTo={dto}"
    if journal: q += f"&journalId={journal}"
    return q

def all_pages(q):
    ids, pages, page, first = [], 0, 0, None
    while True:
        st, r = call("GET", f"/api/sales/invoices/page?{q}&page={page}&size={SIZE}", t)
        assert st == 200, (st, r)
        first = first or r
        ids += [i['id'] for i in r['content']]; pages += 1
        if (page + 1) * SIZE >= r['totalElements']: break
        page += 1
    return ids, pages, first

cases = [dict(), dict(state='posted'), dict(state='paid'), dict(state='cancelled'),
         dict(dfrom=mid), dict(dto=mid), dict(dfrom=mid, dto=mid)]
cases += [dict(journal=j) for j in journals[:3]]
for c in cases:
    expected = ref(**c)
    t0 = time.time(); ids, n, first = all_pages(qs(**c)); dt = time.time() - t0
    print(f"filtre {c or 'aucun'} : {len(expected)} attendues, {n} page(s) en {dt:.2f} s")
    check(len(ids) == len(set(ids)), f"{c} : doublons entre pages")
    check(ids == [i['id'] for i in expected], f"{c} : contenu ou ordre différent")
    check(first['totalElements'] == len(expected), f"{c} : totalElements {first['totalElements']} != {len(expected)}")
    for k, f in (('ht', 'totalHT'), ('ttc', 'totalTTC'), ('paye', 'montantPaye'), ('du', 'montantDu')):
        check(D(first['totals'][k]) == sum((D(i.get(f)) for i in expected), Decimal('0.00')), f"{c} : total {k}")

# Une page de DTO identique à la liste historique, champ par champ
st, r = call("GET", f"/api/sales/invoices/page?{qs()}&page=1&size={SIZE}", t)
byid = {i['id']: i for i in full}
diff = [(i['id'], k) for i in r['content'] for k in i if i[k] != byid[i['id']].get(k)]
check(not diff, f"DTO différents de la liste historique : {diff[:5]}")
check({j['id'] for j in r['journals']} == set(journals), "journaux proposés")

# Regroupements : effectifs et totaux, puis factures du plus gros groupe
gfun = {'mois': lambda i: (i['date'] or '')[:7] or 'none', 'statut': lambda i: i['state'] or 'none',
        'client': lambda i: str(i['partnerId']) if i.get('partnerId') else 'none',
        'entrepot': lambda i: str(i['warehouseId']) if i.get('warehouseId') else 'none'}
for g, fn in gfun.items():
    for state in (None, 'posted'):
        st, groups = call("GET", f"/api/sales/invoices/groups?{qs(state=state)}&groupBy={g}", t)
        assert st == 200, (st, groups)
        expected = {}
        for i in ref(state=state): expected.setdefault(fn(i), []).append(i)
        check({x['key'] for x in groups} == set(expected), f"groupes {g}/{state} : clés différentes")
        bad = [x['key'] for x in groups if x['key'] in expected and (x['count'] != len(expected[x['key']])
               or D(x['totalTTC']) != sum((D(i['totalTTC']) for i in expected[x['key']]), Decimal('0.00'))
               or D(x['du']) != sum((D(i['montantDu']) for i in expected[x['key']]), Decimal('0.00')))]
        check(not bad, f"groupes {g}/{state} : effectifs ou totaux différents {bad[:5]}")
        if expected:
            biggest = max(expected, key=lambda k: len(expected[k]))
            ids, _, _ = all_pages(f"{qs(state=state)}&groupBy={g}&groupKey={biggest}")
            check(ids == [i['id'] for i in expected[biggest]], f"groupe {g}={biggest} : factures différentes")
        print(f"regroupement {g} (statut {state or 'tous'}) : {len(groups)} groupe(s) vérifié(s)")

for q in (f"{qs()}&size=0", f"{qs()}&size=501", f"{qs()}&page=-1", f"{qs()}&type=x",
          f"{qs()}&groupBy=mois&groupKey=abc", f"{qs()}&groupBy=client&groupKey=1;drop"):
    st, _ = call("GET", f"/api/sales/invoices/page?{q}", t)
    check(st == 400, f"{q} -> {st} au lieu de 400")
st, _ = call("GET", f"/api/sales/invoices/page?{qs()}")
check(st in (401, 403), f"sans jeton -> {st}")

print("BILAN :", "conforme" if not problems else f"{len(problems)} écart(s)")
