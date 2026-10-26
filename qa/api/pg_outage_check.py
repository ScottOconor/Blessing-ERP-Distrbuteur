"""6.3 — Indisponibilité de PostgreSQL : coupure puis relance d'un conteneur PostgreSQL de TEST
(jamais la base d'une installation). Usage : ERP_BASE=... python3 pg_outage_check.py <mdp> <conteneur>"""
import sys,time,subprocess; sys.path.insert(0,'.')
from api import *
PW,CONT=sys.argv[1],sys.argv[2]
def timed(label,m,p,tok=None,body=None):
    t0=time.time()
    try: st,r=call(m,p,tok,body)
    except Exception as e: st,r=-1,type(e).__name__
    d=time.time()-t0; msg=(r.get('message') or r.get('error') or r.get('status')) if isinstance(r,dict) else str(r)[:60]
    print(f"  {label:38s} -> {st} en {d:5.1f} s | {str(msg)[:90]}"); return st
t=login('superadmin',PW)
print("Avant la panne :"); timed("liste des clients","GET","/api/sales/clients?companyId=1",t); timed("état de santé","GET","/api/health")
subprocess.run(["docker","stop",CONT],capture_output=True); t0=time.time(); print(f"PostgreSQL arrêté ({CONT})")
print("Pendant la panne :")
timed("liste des clients","GET","/api/sales/clients?companyId=1",t)
timed("création d'un client","POST","/api/sales/clients",t,{"ref":"PANNE","name":"Créé pendant la panne","type":"customer","companyId":1})
timed("connexion","POST","/api/auth/login",None,{"username":"superadmin","password":PW})
timed("état de santé","GET","/api/health")
subprocess.run(["docker","start",CONT],capture_output=True); t1=time.time(); print(f"PostgreSQL relancé après {t1-t0:.0f} s de panne")
for i in range(90):
    try:
        st,_=call("GET","/api/sales/clients?companyId=1",t)
        if st==200: print(f"Reprise : première réponse 200 {time.time()-t1:.1f} s après la relance (sans redémarrer l'application)"); break
    except Exception: pass
    time.sleep(1)
print("Après reprise :")
timed("liste des clients","GET","/api/sales/clients?companyId=1",t)
st,c=call("GET","/api/sales/clients?companyId=1",t); print("  clients présents :",[x['name'] for x in c])
