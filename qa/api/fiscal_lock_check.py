"""4.5 — Verrouillage des périodes : clôture de l'exercice 2025 (vide) sur la base de TEST kira_setup,
puis tentatives d'opérations datées de 2025 (doivent être refusées) et témoins datés d'aujourd'hui
(doivent passer). Toutes les tentatives passent par l'API, comme un client qui contourne l'interface."""
import sys,datetime,json; sys.path.insert(0,'.')
from api import *
t=login('superadmin',sys.argv[1]); today=str(datetime.date.today()); OLD="2025-12-15"
acc={a['code']:a['id'] for a in call("GET","/api/accounting/accounts?companyId=1",t)[1]}
J={x['code']:x['id'] for x in call("GET","/api/accounting/journals?companyId=1",t)[1]}
ref=json.load(open('acc_ref_out.json'))
client=call("GET","/api/sales/clients?companyId=1",t)[1][0]['id']; prod=call("GET","/api/stock/products?companyId=1",t)[1][0]['id']
drafts=[m for m in call("GET","/api/accounting/moves?companyId=1",t)[1] if m.get('state')=='draft' and str(m.get('date','')).startswith('2025')]
print("brouillons 2025 validés avant clôture :",[call("POST",f"/api/accounting/moves/{m['id']}/post",t)[0] for m in drafts])
st,pv=call("POST","/api/accounting/fiscal-closure/preview",t,{"companyId":1,"dateFrom":"2025-01-01","dateTo":"2025-12-31"}); print("aperçu clôture 2025 ->",st)
st,ex=call("POST","/api/accounting/fiscal-closure/execute",t,{"companyId":1,"dateFrom":"2025-01-01","dateTo":"2025-12-31",
     "resultAccountBeneficeId":acc['131000'],"resultAccountPerteId":acc.get('139000',acc['130900']),"previewToken":(pv or {}).get('previewToken')})
print("clôture 2025 ->",st, "" if st==200 else ex)
def attempt(label,fn):
    st,r=fn(); msg=(r.get('message') or r.get('error')) if isinstance(r,dict) else r
    print(f"  {label:55s} -> {st} {str(msg)[:70] if st>=400 else ''}"); return st
rows=[]
print("Opérations datées du", OLD, "(période clôturée) :")
st,inv_old=call("POST","/api/sales/invoices",t,{"type":"invoice","partnerId":client,"journalId":J['VNT'],"date":OLD,"companyId":1,"lines":[{"productId":prod,"description":"x","quantity":1,"prixUnitaire":1000,"tauxTVA":0,"accountCode":"706100"}]})
rows.append(("validation d'une facture",attempt("validation d'une facture datée 2025",lambda: call("POST",f"/api/sales/invoices/{inv_old['id']}/post",t)))) if st==200 else print("  création facture 2025 ->",st,inv_old)
rows.append(("paiement",attempt("paiement daté 2025 d'une facture ouverte",lambda: call("POST","/api/sales/payments",t,{"invoiceId":ref['invoice'],"journalId":J['CAI'],"date":OLD,"amount":100,"companyId":1}))))
entry=lambda d: {"journalId":J['OD'],"date":d,"ref":"OD test","companyId":1,"lines":[{"accountId":acc['571100'],"name":"x","debit":100,"credit":0},{"accountId":acc['411100'],"name":"x","debit":0,"credit":100}]}
rows.append(("écriture manuelle",attempt("écriture manuelle datée 2025",lambda: call("POST","/api/accounting/moves",t,entry(OLD)))))
wh=call("GET","/api/stock/warehouses?companyId=1",t)[1][0]; loc=wh.get('lotStockLocationId') or wh.get('stockLocationId')
st,pp=call("POST","/api/stock/products",t,{"defaultCode":"STK-3","name":"Article stocké","type":"product","salePrice":1000,"standardPrice":600,"companyId":1,"active":True})
rows.append(("ajustement de stock",attempt("ajustement de stock daté 2025",lambda: call("POST","/api/stock/adjustments",t,{"productId":pp['id'],"locationId":loc,"newQty":5,"companyId":1,"date":OLD}))))
st,cs=call("POST","/api/caisses",t,{"name":"Caisse test 3","code":"CTEST3","journalId":J['CAI'],"companyId":1}); 
if st==200:
    print("  (caisse créée, ouverture de session ->",call("POST",f"/api/caisses/{cs['id']}/ouvrir",t,{"companyId":1})[0],")")
    op=lambda d: {"caisseId":cs['id'],"companyId":1,"type":"ENTREE","montant":100,"date":d,"libelle":"apport test","compteContrepartieId":acc["411100"]}
    rows.append(("opération de caisse",attempt("opération de caisse datée 2025",lambda: call("POST","/api/caisses/operations",t,op(OLD)))))
else: print("  création caisse ->",st,cs)
print("Témoins datés d'aujourd'hui (période ouverte) :")
attempt("écriture manuelle datée d'aujourd'hui",lambda: call("POST","/api/accounting/moves",t,entry(today)))
attempt("ajustement de stock daté d'aujourd'hui",lambda: call("POST","/api/stock/adjustments",t,{"productId":pp['id'],"locationId":loc,"newQty":5,"companyId":1,"date":today}))
if st==200: attempt("opération de caisse datée d'aujourd'hui",lambda: call("POST","/api/caisses/operations",t,op(today)))
print("BILAN :", "toutes les opérations en période clôturée sont refusées" if all(s>=400 for _,s in rows) else "OPÉRATION ACCEPTÉE EN PÉRIODE CLÔTURÉE : "+str([l for l,s in rows if s<400]))
