"""6.1 — Temps de réponse et mémoire des listes/rapports sur une base de TEST (copie), une requête à la
fois (aucune charge concurrente). Chaque mesure : 1 appel de chauffe puis médiane de 3 appels."""
import sys,time,subprocess,re,statistics,datetime; sys.path.insert(0,'.')
from api import *
PW,PID=sys.argv[1],sys.argv[2]; y=datetime.date.today().year
def heap():
    out=subprocess.run(["jcmd",PID,"GC.heap_info"],capture_output=True,text=True).stdout
    m=re.search(r'total (\d+)K, used (\d+)K',out); return int(m.group(2))//1024 if m else -1
t=login('superadmin',PW)
cases=[("Factures (liste)","GET","/api/sales/invoices?companyId=1",None),
       ("Écritures (liste)","GET","/api/accounting/moves?companyId=1",None),
       ("Mouvements de stock","GET","/api/stock/movements?companyId=1",None),
       ("Paiements clients","GET","/api/sales/payments?companyId=1",None),
       ("Tableau de bord ventes","GET","/api/sales/invoices/dashboard?companyId=1",None),
       ("Balance générale (année)","POST","/api/reports/general-balance/6cols",{"dateFrom":f"{y}-01-01","dateTo":f"{y}-12-31","companyId":1,"displayAccount":"movement"}),
       ("Grand livre (année)","POST","/api/reports/grand-livre",{"dateFrom":f"{y}-01-01","dateTo":f"{y}-12-31","companyId":1,"displayAccount":"movement"})]
print(f"{'opération':28s} {'statut':>6s} {'taille':>9s} {'médiane':>8s} {'max':>7s} {'mémoire Java':>13s}")
for label,m,p,body in cases:
    call(m,p,t,body,raw=True); times=[]; size=0
    for _ in range(3):
        t0=time.time(); st,b,_=call(m,p,t,body,raw=True); times.append(time.time()-t0); size=len(b)
    print(f"{label:28s} {st:>6d} {size/1024/1024:>7.2f}Mo {statistics.median(times):>7.2f}s {max(times):>6.2f}s {heap():>9d} Mo")
