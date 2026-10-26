"""S8 — vérifie la politique de mot de passe et la validité des jetons après changement de mot de
passe / désactivation. Instance ISOLÉE, comptes fictifs créés pour l'occasion."""
import sys,uuid; sys.path.insert(0,'.')
from api import *
t=login('superadmin',ADMIN_PASSWORD)
vr=[r for r in call("GET","/api/config/roles",t)[1] if r['label']=='Vendeur'][0]['id']
u="s8_"+uuid.uuid4().hex[:6]
st,r=call("POST","/api/config/users",t,{"username":u,"email":u+"@test.invalid","fullName":u,"password":"abc","roleId":vr}); print("création avec mot de passe 'abc' ->",st, r if st!=200 else "")
uid=r['id'] if st==200 else None
if st!=200:
    st,r=call("POST","/api/config/users",t,{"username":u,"email":u+"@test.invalid","fullName":u,"password":"Init#Pass2026","roleId":vr}); uid=r['id']; pw="Init#Pass2026"
else: pw="abc"
t1=login(u,pw)
print("avant changement du mot de passe initial : factures ->",call("GET","/api/sales/invoices?companyId=1",t1)[0])
print("nouveau mot de passe 'abcdef' (6 car.) ->",call("POST","/api/config/change-password",t1,{"currentPassword":pw,"newPassword":"abcdef"}))
st,_=call("POST","/api/config/change-password",t1,{"currentPassword":pw,"newPassword":"Nouveau#Pass2026"})
if st!=200: st,_=call("POST","/api/config/change-password",t1,{"currentPassword":"abcdef","newPassword":"Nouveau#Pass2026"})
print("changement vers un mot de passe fort ->",st)
print("ANCIEN jeton après changement de mot de passe -> factures :",call("GET","/api/sales/invoices?companyId=1",t1)[0])
t2=login(u,"Nouveau#Pass2026"); print("nouveau jeton -> factures :",call("GET","/api/sales/invoices?companyId=1",t2)[0])
call("POST",f"/api/config/users/{uid}/toggle-active",t)
print("jeton après DÉSACTIVATION du compte -> factures :",call("GET","/api/sales/invoices?companyId=1",t2)[0])
