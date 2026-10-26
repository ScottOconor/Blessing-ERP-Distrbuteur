"""4.6 — Scénario comptable de référence, résultats attendus calculés à l'avance.
Cible : instance ISOLÉE sur base neuve (kira_setup) avec plan comptable SYSCOHADA importé.
Données fictives. Usage : ERP_BASE=... python3 accounting_reference.py <mot_de_passe_superadmin>"""
import sys,datetime,json; sys.path.insert(0,'.')
from decimal import Decimal as D
from api import *
PW=sys.argv[1]; today=str(datetime.date.today()); ok=True
def check(label,got,exp):
    global ok; res=(D(str(got))==D(str(exp))); ok&=res
    print(f"  {'OK ' if res else 'ÉCHEC'} {label}: obtenu {got} / attendu {exp}")
t=login('superadmin',PW)
J={x['code']:x for x in call("GET","/api/accounting/journals?companyId=1",t)[1]}
acc={a['code']:a['id'] for a in call("GET","/api/accounting/accounts?companyId=1",t)[1]}
cai=J['CAI']; cai.update({"defaultDebitAccountId":acc['571100'],"defaultCreditAccountId":acc['571100']})
print("journal CAI -> compte 571100 :",call("PUT",f"/api/accounting/journals/{cai['id']}",t,cai)[0])
st,c=call("POST","/api/sales/clients",t,{"ref":"CLI-REF","name":"Client de référence","type":"customer","companyId":1})
st,p=call("POST","/api/stock/products",t,{"defaultCode":"REF-1","name":"Article de référence","type":"service","salePrice":1000,"companyId":1,"active":True})
print("client/article ->",c.get('id'),p.get('id') if isinstance(p,dict) else p)
st,inv=call("POST","/api/sales/invoices",t,{"type":"invoice","partnerId":c['id'],"journalId":J['VNT']['id'],"date":today,"companyId":1,
     "lines":[{"productId":p['id'],"description":"Prestation de référence","quantity":2,"prixUnitaire":1000,"tauxTVA":19.25,"accountCode":"706100"}]})
print("facture ->",st,inv.get('name') if st==200 else inv)
st,inv=call("POST",f"/api/sales/invoices/{inv['id']}/post",t); print("validation ->",st, "" if st==200 else inv)
print("Facture :"); check("total HT",inv.get('totalHT'),2000); check("TVA",inv.get('totalTVA'),385); check("TTC",inv.get('totalTTC'),2385); check("reste dû",inv.get('montantDu'),2385)
def move_lines(name):
    ms=[m for m in call("GET","/api/accounting/moves?companyId=1",t)[1] if m.get('name')==name or m.get('ref')==name]
    return ms
st,pay=call("POST","/api/sales/payments",t,{"invoiceId":inv['id'],"journalId":cai['id'],"date":today,"amount":1000,"companyId":1,"memo":"Paiement de référence"})
print("paiement ->",st,pay.get('name') if st==200 else pay)
st,i2=call("GET",f"/api/sales/invoices/{inv['id']}",t); check("reste dû après paiement de 1000",i2.get('montantDu'),1385)
st,rev=call("DELETE",f"/api/sales/payments/{pay['id']}",t); print("extourne du paiement ->",st, "" if st in (200,204) else rev)
st,i3=call("GET",f"/api/sales/invoices/{inv['id']}",t); check("reste dû après extourne",i3.get('montantDu'),2385)
st,bal=call("POST","/api/reports/general-balance/4cols",t,{"dateFrom":today[:4]+"-01-01","dateTo":today,"companyId":1,"displayAccount":"movement"})
print("balance générale ->",st)
json.dump({"invoice":inv['id'],"name":inv['name'],"payment":pay.get('id'),"balance":bal},open('acc_ref_out.json','w'),default=str,indent=1)
print("RÉSULTAT API :", "CONFORME" if ok else "ÉCARTS CONSTATÉS")
