"""Force un instantané (instance ISOLÉE) et extrait sa section accountMoveLines de l'outbox.
Usage : ERP_BASE=... python3 snapshot_lines.py <mdp> <pid_java> <fichier_sortie>"""
import sys,time,json,subprocess,os,re,threading; sys.path.insert(0,'.')
from api import *
PW,PID,OUT=sys.argv[1:4]
def sql(q): return subprocess.run(["psql","-h","localhost","-U","automate","-d","kira_restore","-Atc",q],capture_output=True,text=True,env=os.environ).stdout.strip()
peak=[0]; stop=[False]
def watch():
    while not stop[0]:
        o=subprocess.run(["jcmd",PID,"GC.heap_info"],capture_output=True,text=True).stdout
        m=re.search(r'used (\d+)K',o); peak[0]=max(peak[0],int(m.group(1))//1024 if m else 0); time.sleep(0.5)
threading.Thread(target=watch,daemon=True).start()
last=sql("select coalesce(max(id),0) from sync_outbox_events")
t=login('superadmin',PW); t0=time.time(); st,r=call("POST","/api/sync/snapshot/force",t); d=time.time()-t0
stop[0]=True; print(f"instantané forcé -> {st} en {d:.1f} s ; pic mémoire Java ≈ {peak[0]} Mo ; réponse : {str(r)[:100]}")
ids=sql(f"select id from sync_outbox_events where id>{last} and event_type='FULL_SNAPSHOT' order by id").split()
lines=[]
for i in ids:
    p=json.loads(sql(f"select payload from sync_outbox_events where id={i}")); lines+=p.get('accountMoveLines') or []
json.dump(lines,open(OUT,'w'),sort_keys=True); print(f"{len(ids)} événement(s) FULL_SNAPSHOT, {len(lines)} lignes d'écriture extraites -> {OUT}")
