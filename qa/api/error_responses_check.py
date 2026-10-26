"""6.2 — Réponses aux requêtes invalides (instance ISOLÉE) : statut attendu et absence de détail interne."""
import sys,json,os; sys.path.insert(0,'.')
from api import *
t=login('superadmin',sys.argv[1])
cases=[
 ("paramètre obligatoire manquant","GET","/api/sales/clients",None,{},400),
 ("paramètre de type incorrect (identifiant non numérique)","GET","/api/sales/invoices/abc",None,{},400),
 ("JSON mal formé","POST","/api/sales/clients",b'{"name": "x",',{},400),
 ("champ obligatoire absent (validation)","POST","/api/caisses/operations",{"companyId":1},{},400),
 ("méthode HTTP non prise en charge","PATCH","/api/sales/clients",{},{},405),
 ("identifiant inexistant","GET","/api/sales/invoices/999999",None,{},404),
]
bad=0
for label,m,p,body,h,exp in cases:
    st,b,_=call(m,p,t,body,h,raw=True); txt=b.decode(errors='replace')[:160]
    leak=any(k in txt for k in ['Exception','java.','org.','SQL','at com.'])
    ok=(st==exp and not leak); bad+=not ok
    print(f"{'OK ' if ok else 'KO '} {label:40s} -> {st} (attendu {exp}){' FUITE: '+txt if leak else ''} | {txt[:90]}")
print("BILAN :", "conforme" if not bad else f"{bad} écart(s)")
