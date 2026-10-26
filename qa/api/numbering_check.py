"""4.1 — vérification SÉQUENTIELLE de la numérotation (instance ISOLÉE, données fictives) :
factures, écritures, paiements, bons de livraison et ajustements doivent se suivre sans doublon."""
import sys,datetime; sys.path.insert(0,'.')
from api import *
t=login('superadmin',ADMIN_PASSWORD); today=str(datetime.date.today())
J={x['code']:x['id'] for x in call("GET","/api/accounting/journals?companyId=1",t)[1]}
wh=call("GET","/api/stock/warehouses?companyId=1",t)[1][0]; loc=wh.get('lotStockLocationId') or wh.get('stockLocationId')
client=[c for c in call("GET","/api/sales/clients?companyId=1",t)[1]][0]['id']
prod=call("GET","/api/stock/products?companyId=1",t)[1][0]['id']
inv=[]
for i in range(3):
    st,r=call("POST","/api/sales/invoices",t,{"type":"invoice","partnerId":client,"journalId":J['VNT'],"date":today,"companyId":1,"warehouseId":wh['id'],"lines":[{"productId":prod,"description":"x","quantity":1,"prixUnitaire":1000,"tauxTVA":0}]})
    assert st==200,(st,r); inv.append(r)
print("factures   :",[x['name'] for x in inv])
posted=[call("POST",f"/api/sales/invoices/{x['id']}/post",t)[1] for x in inv]
print("validation :",[p.get('state') if isinstance(p,dict) else p for p in posted])
pays=[call("POST","/api/sales/payments",t,{"invoiceId":x['id'],"journalId":J['CAI'],"date":today,"amount":500,"companyId":1,"memo":"test"})[1] for x in inv]
print("paiements  :",[p.get('name') if isinstance(p,dict) else p for p in pays])
for q in (50,49):
    st,r=call("POST","/api/stock/adjustments",t,{"productId":prod,"locationId":loc,"newQty":q,"companyId":1,"date":today,"notes":"test numérotation"})
    print("ajustement ->",st, r if st!=200 else "")
