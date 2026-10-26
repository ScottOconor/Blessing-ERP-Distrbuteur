"""4.4 — Renvoi d'une même demande de paiement (cas d'une nouvelle tentative après délai réseau dépassé
ou d'un double clic). Envois SÉQUENTIELS, instance ISOLÉE, données fictives.
Sans clé d'idempotence, le serveur ne peut pas distinguer un renvoi d'un second paiement partiel."""
import sys,datetime,uuid; sys.path.insert(0,'.')
from api import *
t=login('superadmin',sys.argv[1]); today=str(datetime.date.today()); key=sys.argv[2] if len(sys.argv)>2 else None
J={x['code']:x['id'] for x in call("GET","/api/accounting/journals?companyId=1",t)[1]}
inv=[i for i in call("GET","/api/sales/invoices?companyId=1",t)[1] if i.get('state')=='posted' and str(i.get('date','')).startswith(today[:4]) and (i.get('montantDu') or 0)>600][0]
before=len(call("GET",f"/api/sales/payments/invoice/{inv['id']}",t)[1])
body={"invoiceId":inv['id'],"journalId":J['CAI'],"date":today,"amount":300,"companyId":1,"memo":"renvoi"}
hdr={"Idempotency-Key":key} if key else None
r1=call("POST","/api/sales/payments",t,body,hdr); r2=call("POST","/api/sales/payments",t,body,hdr)
after=call("GET",f"/api/sales/payments/invoice/{inv['id']}",t)[1]
print(f"facture {inv['name']} | clé d'idempotence : {'oui' if key else 'non'}")
print("  1er envoi ->",r1[0],r1[1].get('name') if isinstance(r1[1],dict) else r1[1])
print("  2e envoi (identique) ->",r2[0],r2[1].get('name') if isinstance(r2[1],dict) else r2[1])
print("  paiements créés par les deux envois :",len(after)-before)
