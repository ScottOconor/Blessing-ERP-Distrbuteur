"""Faux Hub de TEST implémentant le contrat de confirmation proposé (docs/sync-confirmation.md).
Comportement piloté par state.json : mode normal|404|500, ids "inconnus", ids "refusés".
Chaque requête est journalisée dans requests.log. Usage : python3 fake_hub.py <port> <dossier>"""
import http.server,json,sys,os,time
PORT,DIR=int(sys.argv[1]),sys.argv[2]
class H(http.server.BaseHTTPRequestHandler):
    def log_message(self,*a): pass
    def do_POST(self):
        st=json.load(open(os.path.join(DIR,'state.json')))
        if self.headers.get('Transfer-Encoding','').lower()=='chunked':   # corps envoyé par morceaux
            raw=b''
            while True:
                n=int(self.rfile.readline().strip().split(b';')[0],16)
                if n==0: self.rfile.readline(); break
                raw+=self.rfile.read(n); self.rfile.readline()
        else: raw=self.rfile.read(int(self.headers.get('Content-Length',0)))
        body=json.loads(raw or b'{}')
        ids=body.get('outboxIds',[])
        with open(os.path.join(DIR,'requests.log'),'a') as f:
            f.write(json.dumps({"t":time.strftime('%H:%M:%S'),"spoke":self.headers.get('X-Spoke-Id'),"cle":bool(self.headers.get('X-Api-Key')),"ids":ids,"mode":st['mode']})+"\n")
        if st['mode']=='404': self.send_response(404); self.end_headers(); return
        if st['mode']=='500': self.send_response(500); self.end_headers(); return
        unknown=[i for i in ids if i in st.get('unknown',[])]
        rejected=[{"outboxId":i,"reason":st['rejected'][str(i)]} for i in ids if str(i) in st.get('rejected',{})]
        rej={r['outboxId'] for r in rejected}
        out={"processed":[i for i in ids if i not in unknown and i not in rej],"rejected":rejected,"unknown":unknown}
        b=json.dumps(out).encode(); self.send_response(200); self.send_header('Content-Type','application/json'); self.send_header('Content-Length',str(len(b))); self.end_headers(); self.wfile.write(b)
http.server.ThreadingHTTPServer(('127.0.0.1',PORT),H).serve_forever()
