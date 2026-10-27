"""Confirmation par le Hub, de bout en bout (instance ISOLÉE, faux Hub de test qa/sync/fake_hub.py, broker de test).
Usage : confirm_e2e.py <dossier_faux_hub> <mdp> normal|perdu|reponse_perdue|refus|hub404
Base de test : variables PGHOST/PGUSER/PGDATABASE/PGPASSWORD (psql)."""
import sys,json,time,datetime,subprocess,os; sys.path.insert(0,'.')
from api import *
FH=sys.argv[1]; PW=sys.argv[2]
def sql(q): return subprocess.run(["psql","-Atc",q],capture_output=True,text=True,env=os.environ).stdout.strip()
def state(**kw): json.dump({"mode":"normal","unknown":[],"rejected":{},**kw},open(FH+'/state.json','w'))
def status(i): return sql(f"select status||' | tentatives '||retry_count||' | '||coalesce(error_message,'') from sync_outbox_events where id={i}")
def wait(i,want,timeout=150):
    t0=time.time()
    while time.time()-t0<timeout:
        if status(i).startswith(want): return f"{status(i)}  ({time.time()-t0:.0f} s)"
        time.sleep(2)
    return "DÉLAI DÉPASSÉ : "+status(i)
t=login('superadmin',PW); J={x['code']:x['id'] for x in call("GET","/api/accounting/journals?companyId=1",t)[1]}
def pay():
    inv=[i for i in call("GET","/api/sales/invoices?companyId=1",t)[1] if i.get('state')=='posted' and (i.get('montantDu') or 0)>10][0]
    call("POST","/api/sales/payments",t,{"invoiceId":inv['id'],"journalId":J['CAI'],"date":str(datetime.date.today()),"amount":1,"companyId":1})
    return int(sql("select max(id) from sync_outbox_events"))
scen=sys.argv[3]
if scen=="normal":
    state(); i=pay(); print("1. traitement normal  -> envoyé :",wait(i,"SENT"),"| confirmé :",wait(i,"CONFIRMED"))
elif scen=="perdu":
    i=pay(); state(unknown=[i]); print("2. message perdu après le broker (Hub : inconnu)")
    print("   envoyé :",wait(i,"SENT")); print("   renvoyé après 1 min sans confirmation :",wait(i,"PENDING",200))
    state(); print("   puis confirmé :",wait(i,"CONFIRMED"))
elif scen=="reponse_perdue":
    state(mode="500"); i=pay(); print("3. confirmation perdue (Hub en erreur 500)")
    print("   envoyé :",wait(i,"SENT")); time.sleep(20); print("   20 s plus tard (erreurs du Hub) :",status(i))
    state(); print("   Hub rétabli -> ",wait(i,"CONFIRMED"))
elif scen=="refus":
    i=pay(); state(rejected={str(i):"contrat de message invalide"}); print("4. refus du Hub ->",wait(i,"FAILED")); state()
elif scen=="hub404":
    state(mode="404"); i=pay(); print("6. Hub sans le contrat (404) -> envoyé :",wait(i,"SENT")); time.sleep(20); print("   20 s plus tard :",status(i))
print("   événement",i)
