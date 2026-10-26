"""5.4 — Sauvegarde puis restauration d'une base de taille réelle (COPIE de test, instance ISOLÉE).
Invariants comparés : nombre de lignes de chaque table métier, totaux débit/crédit, quantités en stock.
Usage : ERP_BASE=... python3 restore_real_check.py <mot_de_passe> <base_de_test> <pid_java>"""
import sys,time,subprocess,uuid,os; sys.path.insert(0,'.')
from api import *
PW,DB,PID=sys.argv[1],sys.argv[2],sys.argv[3]
def sql(q): return subprocess.run(["psql","-h","localhost","-U","automate","-d",DB,"-Atc",q],capture_output=True,text=True,env=os.environ).stdout.strip()
def heap():
    out=subprocess.run(["jcmd",PID,"GC.heap_info"],capture_output=True,text=True).stdout
    import re; m=re.search(r'total (\d+)K, used (\d+)K',out); return f"{int(m.group(2))//1024} Mo utilisés / {int(m.group(1))//1024} Mo" if m else "?"
TABLES=[t for t in sql("select tablename from pg_tables where schemaname='public' and tablename not in ('audit_logs','idempotency_records','sync_outbox_events') order by 1").split('\n') if t]
def invariants():
    counts={t:sql(f'select count(*) from "{t}"') for t in TABLES}
    counts['Σ débit/crédit']=sql("select sum(debit)||'/'||sum(credit) from account_move_lines")
    counts['Σ stock']=sql("select coalesce(sum(quantity),0) from stock_quants")
    return counts
t=login('superadmin',PW)
before=invariants(); print(f"{len(TABLES)} tables relevées ; débit/crédit = {before['Σ débit/crédit']} ; stock = {before['Σ stock']}")
print("mémoire Java avant :",heap())
t0=time.time(); st,z,_=call("GET","/api/backup/download",t,raw=True); d=time.time()-t0
print(f"sauvegarde : HTTP {st}, {len(z)/1024/1024:.2f} Mo, {d:.1f} s ; mémoire Java : {heap()}")
open('real_backup.zip','wb').write(z)
st,c=call("POST","/api/sales/clients",t,{"ref":"APRES-SAUV","name":"Client créé après la sauvegarde","type":"customer","companyId":1})
print("modification après sauvegarde : client créé ->",st,"| clients :",sql("select count(*) from partners"))
b='----'+uuid.uuid4().hex
body=(f'--{b}\r\nContent-Disposition: form-data; name="file"; filename="s.zip"\r\nContent-Type: application/zip\r\n\r\n').encode()+z+f'\r\n--{b}--\r\n'.encode()
t0=time.time(); st,r=call("POST","/api/backup/restore",t,body,{"Content-Type":"multipart/form-data; boundary="+b}); d=time.time()-t0
print(f"restauration : HTTP {st} {r} en {d:.1f} s ; mémoire Java : {heap()}")
after=invariants()
diff={k:(before[k],after[k]) for k in before if before[k]!=after.get(k)}
print("tables comparées :",len(before),"| écarts :",diff if diff else "aucun")
print("client créé après la sauvegarde encore présent :",sql("select count(*) from partners where ref='APRES-SAUV'"))
