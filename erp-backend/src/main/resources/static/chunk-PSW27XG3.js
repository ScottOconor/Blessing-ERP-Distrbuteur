import{a as G}from"./chunk-QL3WC7AB.js";import{a as U}from"./chunk-DEJY7ISL.js";import{a as Y}from"./chunk-WLFUGAJD.js";import{c as B,e as q}from"./chunk-M6RCVFFT.js";import{a as H}from"./chunk-OQKQBNT6.js";import{$a as _,Ba as T,Fa as z,Ma as m,Na as g,Q as b,Qa as P,R as f,Ra as w,Sa as h,Ta as n,Ua as e,_b as A,bb as v,db as l,ec as L,ib as j,jb as F,kb as R,lb as a,mb as p,nb as y,ob as V,pa as r,pb as O,xa as C}from"./chunk-PCNEIDV7.js";import"./chunk-TSRGIXR5.js";var k=(i,d)=>d.id,et=(i,d)=>d.leaveTypeId;function nt(i,d){if(i&1){let t=_();n(0,"button",27),v("click",function(){b(t);let s=l(2);return f(s.recompute())}),n(1,"span",4),a(2,"refresh"),e(),a(3," Recalculer"),e()}if(i&2){let t=l(2);h("disabled",t.busy)}}function it(i,d){if(i&1){let t=_();n(0,"button",28),v("click",function(){b(t);let s=l(2);return f(s.act("verify"))}),n(1,"span",4),a(2,"fact_check"),e(),a(3," Marquer calcul\xE9"),e()}if(i&2){let t=l(2);h("disabled",t.busy)}}function at(i,d){if(i&1){let t=_();n(0,"button",29),v("click",function(){b(t);let s=l(2);return f(s.act("validate"))}),n(1,"span",4),a(2,"check_circle"),e(),a(3," Valider & comptabiliser"),e()}if(i&2){let t=l(2);h("disabled",t.busy)}}function ot(i,d){if(i&1){let t=_();n(0,"button",27),v("click",function(){b(t);let s=l(2);return f(s.act("draft"))}),a(1,"Brouillon"),e()}if(i&2){let t=l(2);h("disabled",t.busy)}}function rt(i,d){if(i&1){let t=_();n(0,"button",30),v("click",function(){b(t);let s=l(2);return f(s.act("cancel"))}),n(1,"span",4),a(2,"block"),e(),a(3," Annuler"),e()}if(i&2){let t=l(2);h("disabled",t.busy)}}function lt(i,d){if(i&1&&(n(0,"div",10),a(1),e()),i&2){let t=l(2);r(),p(t.msg)}}function dt(i,d){if(i&1&&(n(0,"div",11),a(1),e()),i&2){let t=l(2);r(),p(t.err)}}function st(i,d){if(i&1&&(n(0,"div",17),a(1),e()),i&2){let t=l().ngIf;r(),O("",t.jobName,"",t.jobName&&t.departmentName?" \u2014 ":"","",t.departmentName)}}function ct(i,d){if(i&1&&(n(0,"div",17),a(1),e()),i&2){let t=l().ngIf;r(),O("",t.professionalCategoryName,"",t.professionalCategoryName&&t.echelonName?" \u2014 \xC9chelon ":"","",t.echelonName)}}function pt(i,d){if(i&1&&(n(0,"div",17),a(1),e()),i&2){let t=l().ngIf,o=l();r(),y("Embauch\xE9(e) le ",o.fmtDate(t.hireDate))}}function mt(i,d){if(i&1&&(n(0,"tr")(1,"td"),a(2),e(),n(3,"td"),a(4),e(),n(5,"td"),a(6),e(),n(7,"td",20),a(8),e(),n(9,"td",20),a(10),e(),n(11,"td",20),a(12),e(),n(13,"td",20),a(14),e()()),i&2){let t=d.$implicit,o=l(2);F("cat-gross",t.categoryCode==="GROSS")("cat-net",t.categoryCode==="NET"),r(2),p(t.code),r(2),p(t.name),r(2),p(t.categoryName),r(2),p((t.rate??0)!==0?o.fmtRate(t.rate)+" %":"\u2014"),r(2),p((t.quantity??1)!==1?o.fmt(t.quantity):"\u2014"),r(2),p((t.quantity??1)!==1?o.fmt(t.amount):"\u2014"),r(),j("color",(t.total||0)<0?"#b91c1c":""),r(),p(o.fmt(t.total))}}function gt(i,d){if(i&1&&(n(0,"tr")(1,"td"),a(2),e(),n(3,"td",20),a(4),e(),n(5,"td",20),a(6),e(),n(7,"td",20),a(8),e(),n(9,"td",33),a(10),e()()),i&2){let t=d.$implicit,o=l(3);r(2),p(t.name),r(2),p(o.fmt(t.carryOver)),r(2),p(o.fmt(t.accrued)),r(2),p(o.fmt(t.taken)),r(2),p(o.fmt(t.remaining))}}function xt(i,d){if(i&1&&(n(0,"div",25)(1,"div",31),a(2,"Compteurs de cong\xE9s"),e(),n(3,"table",32)(4,"thead")(5,"tr")(6,"th"),a(7,"Type"),e(),n(8,"th",20),a(9,"Report"),e(),n(10,"th",20),a(11,"Acquis"),e(),n(12,"th",20),a(13,"Pris"),e(),n(14,"th",20),a(15,"Reste"),e()()(),n(16,"tbody"),P(17,gt,11,5,"tr",null,et),e()()()),i&2){let t=l().ngIf;r(17),w(t.leaveBalances)}}function bt(i,d){if(i&1&&(n(0,"div",35)(1,"span"),a(2),e(),n(3,"strong"),a(4),e()()),i&2){let t=d.$implicit,o=l(4);r(2),p(t.name||t.code),r(2),y("",o.fmt(t.numberOfDays)," j")}}function ft(i,d){if(i&1&&(n(0,"div",34)(1,"div",31),a(2,"Jours saisis"),e(),P(3,bt,5,2,"div",35,k),e()),i&2){let t=l(2).ngIf;r(3),w(t.workedDays)}}function vt(i,d){if(i&1&&(n(0,"div",35)(1,"span"),a(2),e(),n(3,"strong"),a(4),e()()),i&2){let t=d.$implicit,o=l(4);r(2),p(t.name||t.code),r(2),y("",o.fmt(t.amount)," F")}}function ut(i,d){if(i&1&&(n(0,"div",34)(1,"div",31),a(2,"\xC9l\xE9ments variables saisis"),e(),P(3,vt,5,2,"div",35,k),e()),i&2){let t=l(2).ngIf;r(3),w(t.inputs)}}function ht(i,d){if(i&1&&(n(0,"div",26),m(1,ft,5,0,"div",34),m(2,ut,5,0,"div",34),e()),i&2){let t=l().ngIf;r(),g(t.workedDays.length>0?1:-1),r(),g(t.inputs.length>0?2:-1)}}function _t(i,d){if(i&1){let t=_();n(0,"div",1)(1,"div",2)(2,"div")(3,"button",3),v("click",function(){b(t);let s=l();return f(s.back())}),n(4,"span",4),a(5,"arrow_back"),e(),a(6," Retour"),e()(),n(7,"div",5)(8,"button",3),v("click",function(){b(t);let s=l();return f(s.print())}),n(9,"span",4),a(10,"print"),e(),a(11," Imprimer"),e(),m(12,nt,4,1,"button",6),m(13,it,4,1,"button",7),m(14,at,4,1,"button",8),m(15,ot,2,1,"button",6),m(16,rt,4,1,"button",9),e()(),m(17,lt,2,1,"div",10),m(18,dt,2,1,"div",11),n(19,"div",12)(20,"div",13)(21,"div")(22,"div",14),a(23),e(),n(24,"div",15),a(25),n(26,"span",16),a(27),e()(),m(28,st,2,3,"div",17),m(29,ct,2,3,"div",17),m(30,pt,2,1,"div",17),n(31,"div",17),a(32),e()(),n(33,"span",18),a(34),e()(),n(35,"table",19)(36,"thead")(37,"tr")(38,"th"),a(39,"Code"),e(),n(40,"th"),a(41,"Libell\xE9"),e(),n(42,"th"),a(43,"Cat\xE9gorie"),e(),n(44,"th",20),a(45,"Taux"),e(),n(46,"th",20),a(47,"Quantit\xE9"),e(),n(48,"th",20),a(49,"Montant unitaire"),e(),n(50,"th",20),a(51,"Total"),e()()(),n(52,"tbody"),P(53,mt,15,13,"tr",21,k),e()(),n(55,"div",22)(56,"div")(57,"span"),a(58,"Salaire brut"),e(),n(59,"strong"),a(60),e()(),n(61,"div")(62,"span"),a(63,"Retenues salariales"),e(),n(64,"strong"),a(65),e()(),n(66,"div",23)(67,"span"),a(68,"Net \xE0 payer"),e(),n(69,"strong"),a(70),e()(),n(71,"div",24)(72,"span"),a(73,"Charges patronales"),e(),n(74,"strong"),a(75),e()()(),m(76,xt,19,0,"div",25),m(77,ht,3,2,"div",26),e()()}if(i&2){let t=d.ngIf,o=l();r(12),g(o.isDraft?12:-1),r(),g(o.isDraft?13:-1),r(),g(o.canValidate&&t.payslip.state!=="DONE"&&t.payslip.state!=="CANCELLED"?14:-1),r(),g(t.payslip.state!=="DRAFT"&&t.payslip.state!=="DONE"?15:-1),r(),g(t.payslip.state!=="CANCELLED"&&t.payslip.state!=="DONE"?16:-1),r(),g(o.msg?17:-1),r(),g(o.err?18:-1),r(5),p(t.payslip.name),r(2),y("",t.payslip.employeeName," "),r(2),y("(",t.payslip.employeeMatricule,")"),r(),g(t.jobName||t.departmentName?28:-1),r(),g(t.professionalCategoryName||t.echelonName?29:-1),r(),g(t.hireDate?30:-1),r(2),V("P\xE9riode : ",t.payslip.periodFrom," \u2192 ",t.payslip.periodTo),r(),R(o.badge(t.payslip.state)),r(),p(o.stateLabel(t.payslip.state)),r(19),w(t.lines),r(7),p(o.fmt(t.payslip.totalBrut)),r(5),p(o.fmt(t.payslip.totalCotisationsSalariales)),r(5),p(o.fmt(t.payslip.totalNet)),r(5),p(o.fmt(t.payslip.totalChargesPatronales)),r(),g(((t.leaveBalances==null?null:t.leaveBalances.length)??0)>0?76:-1),r(),g(t.workedDays.length>0||t.inputs.length>0?77:-1)}}var St=(()=>{class i{constructor(t,o,s,S,M){this.hr=t,this.auth=o,this.route=s,this.router=S,this.companyService=M,this.busy=!1,this.err="",this.msg="",this.canValidate=!1}ngOnInit(){this.id=+this.route.snapshot.paramMap.get("id"),this.canValidate=this.auth.hasPermission("RH","BULLETINS","VALIDATE")||this.auth.isPrivileged(),this.load()}get isDraft(){return this.dto?.payslip.state==="DRAFT"}load(){this.hr.getPayslip(this.id).subscribe(t=>this.dto=t)}fmt(t){return new Intl.NumberFormat("fr-FR").format(Math.round(t||0))}fmtRate(t){return new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2}).format(t||0)}stateLabel(t){return t==="DONE"?"Comptabilis\xE9":t==="VERIFY"?"Calcul\xE9":t==="CANCELLED"?"Annul\xE9":"Brouillon"}badge(t){return t==="DONE"?"done":t==="VERIFY"?"info":t==="CANCELLED"?"warn":""}back(){this.router.navigate(["/hr/payslips"])}h(t){return t==null?"":String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}fmtDate(t){if(!t)return"";try{return new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"})}catch(o){return t}}print(){if(!this.dto)return;let t=this.dto,o=this.companyService.getCached(),s=this.companyService.getCachedLogoDataUrl(),M=t.lines.filter(c=>c.categoryCode!=="COMP"&&c.code!=="NET").map(c=>{let E=c.total??0,I=c.quantity??1,N=c.rate??0,X=N!==0?`${this.fmtRate(N)} %`:I!==1?`${this.fmt(I)} \xD7 ${this.fmt(c.amount)}`:"",Z=E>0?this.fmt(E):"",tt=E<0?this.fmt(Math.abs(E)):"";return`<tr>
        <td>${this.h(c.code)}</td>
        <td class="desc">${this.h(c.name)}</td>
        <td class="r base">${X}</td>
        <td class="r gain">${Z}</td>
        <td class="r ret">${tt}</td>
      </tr>`}).join(""),D=t.leaveBalances??[],J=D.length>0?`
      <table class="leaves-tbl">
        <thead><tr><th>Compteurs de cong\xE9s</th><th class="r">Report</th><th class="r">Acquis</th><th class="r">Pris</th><th class="r">Reste</th></tr></thead>
        <tbody>
          ${D.map(c=>`<tr>
            <td>${this.h(c.name)}</td>
            <td class="r">${this.fmtRate(c.carryOver)}</td>
            <td class="r">${this.fmtRate(c.accrued)}</td>
            <td class="r">${this.fmtRate(c.taken)}</td>
            <td class="r" style="font-weight:700">${this.fmtRate(c.remaining)}</td>
          </tr>`).join("")}
        </tbody>
      </table>`:"",Q=t.workedDays.length>0||t.inputs.length>0?`
      <div class="extras">
        ${t.workedDays.length>0?`
          <div class="extra-col">
            <div class="extra-h">Jours saisis</div>
            ${t.workedDays.map(c=>`<div class="extra-r"><span>${this.h(c.name||c.code)}</span><span>${this.fmt(c.numberOfDays)} j</span></div>`).join("")}
          </div>`:""}
        ${t.inputs.length>0?`
          <div class="extra-col">
            <div class="extra-h">\xC9l\xE9ments variables</div>
            ${t.inputs.map(c=>`<div class="extra-r"><span>${this.h(c.name||c.code)}</span><span>${this.fmt(c.amount)} F</span></div>`).join("")}
          </div>`:""}
      </div>`:"",x={name:o?.name||"",sigle:o?.sigle||"",rccm:o?.rccm||"",nif:o?.nif||"",adresse:o?.adresse||"",tel:o?.telephone||"",email:o?.email||""},W=s?`<img src="${s}" class="co-logo" alt="logo">`:"",$=t.payslip.totalNet??0,K=`<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8">
<title>Bulletin ${this.h(t.payslip.name)}</title>
<style>
* { box-sizing:border-box; margin:0; padding:0; }
body { font-family: Arial, sans-serif; font-size: 9.5pt; color: #111; background: white; }
.doc { padding: 14mm 14mm 10mm; max-width: 190mm; margin: 0 auto; }
.header { display:flex; justify-content:space-between; align-items:flex-start; border-bottom: 2px solid #222; padding-bottom: 4mm; margin-bottom: 8mm; }
.co-logo { max-height: 48px; max-width: 120px; object-fit: contain; display:block; margin-bottom: 4px; }
.co-name { font-size: 13pt; font-weight: 700; color: #017E84; }
.co-sigle { font-size: 9pt; font-weight: 500; color: #017E84; }
.co-info { font-size: 8pt; color: #444; margin-top: 1px; }
.co-lbl { font-weight: 600; color: #222; }
.title-block { text-align:right; }
.doc-type { font-size: 16pt; font-weight: 800; letter-spacing: 1px; color: #222; }
.doc-ref { font-size: 10pt; font-weight: 600; color: #017E84; margin-top: 2px; }
.doc-state { font-size: 8pt; color: #777; margin-top: 2px; text-transform: uppercase; letter-spacing: .5px; }
.meta { display:flex; justify-content:space-between; margin-bottom: 6mm; background:#f7fafa; border:1px solid #dde; border-radius: 4px; padding: 6px 10px; }
.meta-label { font-size: 7pt; font-weight: 700; text-transform: uppercase; color: #888; margin-bottom: 2px; }
.meta-value { font-size: 11pt; font-weight: 700; }
.meta-sub { font-size: 8pt; color: #555; margin-top: 1px; }
.meta-dates { text-align:right; }
.meta-row { display:flex; justify-content:space-between; gap: 12px; font-size: 8.5pt; margin-bottom: 1px; }
.ml { color: #888; font-size: 7.5pt; }
table.lines { width:100%; border-collapse: collapse; margin-bottom: 5mm; font-size: 8.7pt; }
table.lines thead tr { background:#017E84; color:white; }
table.lines thead th { padding: 4px 6px; text-align:left; font-weight:600; font-size:7.5pt; }
table.lines tbody tr:nth-child(even) { background: #f7fafa; }
table.lines tbody td { padding: 3px 6px; border-bottom: 1px solid #e8e8e8; }
.desc { max-width: 160px; }
.r { text-align:right; }
.base { color: #888; font-size: 8pt; }
.gain { color: #1a7a3a; font-weight: 600; }
.ret { color: #c0392b; font-weight: 600; }
.net-table { width:100%; border-collapse: collapse; margin-bottom: 5mm; }
.net-row td { background:#017E84; color:white; font-weight:800; font-size:11pt; padding: 5px 8px; border-radius: 2px; }
.leaves-tbl { width:100%; border-collapse: collapse; margin-bottom: 5mm; font-size: 8pt; }
.leaves-tbl thead tr { background:#f0f4f4; }
.leaves-tbl thead th { padding: 3px 6px; text-align:left; font-weight:700; color:#017E84; font-size: 7.3pt; text-transform:uppercase; }
.leaves-tbl tbody td { padding: 3px 6px; border-bottom: 1px solid #eee; }
.extras { display:flex; gap: 16px; margin-bottom: 6mm; }
.extra-col { flex:1; border: 1px solid #e0e0e0; border-radius: 4px; padding: 6px 10px; }
.extra-h { font-size: 7.5pt; font-weight:700; color:#017E84; text-transform:uppercase; margin-bottom: 3px; }
.extra-r { display:flex; justify-content:space-between; font-size: 8pt; padding: 2px 0; border-bottom: 1px solid #eee; }
.lettres { font-size: 8.5pt; font-style: italic; border-top: 1px solid #ccc; padding-top: 3mm; margin-bottom: 10mm; }
.signatures { display:flex; justify-content:space-between; gap: 10mm; margin-top: 6mm; }
.sig { flex:1; text-align:center; }
.sig-lbl { font-size: 8pt; font-weight:700; margin-bottom: 10mm; }
.sig-area { height: 16mm; border: 1px solid #aaa; border-radius: 2px; }
.footer-note { font-size: 7pt; color:#aaa; text-align:center; margin-top: 8mm; border-top: 1px solid #eee; padding-top: 2mm; }
@page { margin: 0; size: A4 portrait; }
@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
</style></head><body>
<div class="doc">
  <div class="header">
    <div class="company">
      ${W}
      <div class="co-name">${this.h(x.name)}${x.sigle?` <span class="co-sigle">(${this.h(x.sigle)})</span>`:""}</div>
      ${x.adresse?`<div class="co-info">${this.h(x.adresse)}</div>`:""}
      ${x.rccm?`<div class="co-info"><span class="co-lbl">RCCM :</span> ${this.h(x.rccm)}</div>`:""}
      ${x.nif?`<div class="co-info"><span class="co-lbl">NIF :</span> ${this.h(x.nif)}</div>`:""}
      ${x.tel?`<div class="co-info"><span class="co-lbl">T\xE9l :</span> ${this.h(x.tel)}</div>`:""}
    </div>
    <div class="title-block">
      <div class="doc-type">BULLETIN DE PAIE</div>
      <div class="doc-ref">${this.h(t.payslip.name)}</div>
      <div class="doc-state">${this.h(this.stateLabel(t.payslip.state))}</div>
    </div>
  </div>

  <div class="meta">
    <div>
      <div class="meta-label">Employ\xE9</div>
      <div class="meta-value">${this.h(t.payslip.employeeName)}</div>
      <div class="meta-sub">Matricule : ${this.h(t.payslip.employeeMatricule)}</div>
      ${t.jobName||t.departmentName?`<div class="meta-sub">${this.h(t.jobName)}${t.jobName&&t.departmentName?" \u2014 ":""}${this.h(t.departmentName)}</div>`:""}
      ${t.professionalCategoryName||t.echelonName?`<div class="meta-sub">${this.h(t.professionalCategoryName)}${t.professionalCategoryName&&t.echelonName?" \u2014 \xC9chelon ":""}${this.h(t.echelonName)}</div>`:""}
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">P\xE9riode</span><span>Du ${this.fmtDate(t.payslip.periodFrom)} au ${this.fmtDate(t.payslip.periodTo)}</span></div>
      ${t.hireDate?`<div class="meta-row"><span class="ml">Embauch\xE9(e) le</span><span>${this.fmtDate(t.hireDate)}</span></div>`:""}
      <div class="meta-row"><span class="ml">Date d'\xE9mission</span><span>${this.fmtDate(new Date().toISOString())}</span></div>
    </div>
  </div>

  <table class="lines">
    <thead><tr><th>Code</th><th class="desc">D\xE9signation</th><th class="r">Base</th><th class="r">Gains (FCFA)</th><th class="r">Retenues (FCFA)</th></tr></thead>
    <tbody>${M}</tbody>
  </table>

  <table class="net-table">
    <tr class="net-row"><td>NET \xC0 PAYER</td><td class="r">${this.fmt($)} FCFA</td></tr>
  </table>

  ${J}

  ${Q}

  <div class="lettres">Arr\xEAt\xE9 \xE0 la somme de : <strong>${G(Math.round($))} Francs CFA</strong></div>

  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Signature de l'employ\xE9</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Signature de l'employeur</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">Document confidentiel \xB7 ${this.h(x.name)}</div>
</div>
</body></html>`,u=window.open("","_blank","width=1000,height=1100");u&&(u.document.write(K),u.document.close(),u.focus(),setTimeout(()=>{u.print(),u.onafterprint=()=>u.close()},500))}recompute(){this.run(this.hr.recompute(this.id),"Bulletin recalcul\xE9")}act(t){let o={verify:this.hr.verifyPayslip(this.id),validate:this.hr.validatePayslip(this.id),draft:this.hr.draftPayslip(this.id),cancel:this.hr.cancelPayslip(this.id)},s={verify:"Bulletin marqu\xE9 calcul\xE9",validate:"Bulletin valid\xE9 et comptabilis\xE9",draft:"Remis en brouillon",cancel:"Bulletin annul\xE9"};this.run(o[t],s[t])}run(t,o){this.busy=!0,this.err="",this.msg="",t.subscribe({next:s=>{this.busy=!1,this.dto=s,this.msg=o},error:s=>{this.busy=!1,this.err=s.error?.message||"Erreur"}})}static{this.\u0275fac=function(o){return new(o||i)(C(U),C(H),C(B),C(q),C(Y))}}static{this.\u0275cmp=T({type:i,selectors:[["app-hr-payslip-detail"]],decls:1,vars:1,consts:[["class","hp",4,"ngIf"],[1,"hp"],[1,"hp-head"],[1,"b","b-sec",3,"click"],[1,"material-icons"],[2,"display","flex","gap","8px","flex-wrap","wrap"],[1,"b","b-sec",3,"disabled"],[1,"b","b-warn",3,"disabled"],[1,"b","b-ok",3,"disabled"],[1,"b","b-danger",3,"disabled"],[1,"alert",2,"background","#ecfdf5","color","#065f46"],[1,"alert"],[1,"card"],[1,"pcard-head"],[1,"pref"],[1,"pemp"],[1,"mat"],[1,"pper"],[1,"badge"],[1,"tbl"],[1,"ta-r"],[3,"cat-gross","cat-net"],[1,"totals"],[1,"net"],[1,"pat"],[1,"leaves"],[1,"extras"],[1,"b","b-sec",3,"click","disabled"],[1,"b","b-warn",3,"click","disabled"],[1,"b","b-ok",3,"click","disabled"],[1,"b","b-danger",3,"click","disabled"],[1,"extra-title"],[1,"tbl","leaves-tbl"],[1,"ta-r",2,"font-weight","700"],[1,"extra-block"],[1,"extra-row"]],template:function(o,s){o&1&&z(0,_t,78,24,"div",0),o&2&&h("ngIf",s.dto)},dependencies:[L,A],styles:["[_nghost-%COMP%]{display:block}.hp[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto}.hp-head[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.4rem;font-weight:700;margin:0;color:var(--text-primary)}.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#7c3aed}.muted[_ngcontent-%COMP%]{color:var(--text-muted);padding:20px 0}.empty[_ngcontent-%COMP%]{padding:40px;text-align:center;color:var(--text-muted);background:var(--bg-surface);border:1px dashed var(--border);border-radius:var(--radius-md)}.b[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;border:none;border-radius:var(--radius-sm);padding:9px 16px;font-weight:600;cursor:pointer;font-size:.9rem;transition:var(--ease)}.b[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:18px}.b-primary[_ngcontent-%COMP%]{background:#7c3aed;color:#fff}.b-primary[_ngcontent-%COMP%]:hover{background:#691eea}.b-primary[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:default}.b-sec[_ngcontent-%COMP%]{background:var(--bg-elevated);color:var(--text-secondary);border:1px solid var(--border)}.b-sec[_ngcontent-%COMP%]:hover{background:var(--navbar-hover)}.b-danger[_ngcontent-%COMP%]{background:var(--danger, #ef4444);color:#fff}.b-ok[_ngcontent-%COMP%]{background:#16a34a;color:#fff}.b-warn[_ngcontent-%COMP%]{background:#d97706;color:#fff}.b-icon[_ngcontent-%COMP%]{border:none;background:transparent;cursor:pointer;color:var(--text-muted);padding:4px;border-radius:var(--radius-xs)}.b-icon[_ngcontent-%COMP%]:hover{background:var(--bg-elevated);color:var(--text-primary)}.tbl-wrap[_ngcontent-%COMP%]{overflow-x:auto;background:var(--bg-surface);border:1px solid var(--border);border-radius:var(--radius-md)}.tbl[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:.88rem}.tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;padding:11px 14px;background:var(--bg-elevated);color:var(--text-secondary);font-weight:600;border-bottom:1px solid var(--border);white-space:nowrap}.tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px 14px;border-bottom:1px solid var(--border-light);color:var(--text-primary)}.tbl[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:var(--bg-elevated)}.ta-r[_ngcontent-%COMP%]{text-align:right}.clk[_ngcontent-%COMP%]{cursor:pointer}.badge[_ngcontent-%COMP%]{display:inline-block;padding:2px 10px;border-radius:999px;font-size:.75rem;font-weight:600;background:var(--bg-elevated);color:var(--text-secondary);border:1px solid var(--border)}.badge.ok[_ngcontent-%COMP%]{background:#16a34a1f;color:#16a34a;border-color:#16a34a4d}.badge.info[_ngcontent-%COMP%]{background:#3b82f61f;color:var(--navbar-accent, #3b82f6);border-color:#3b82f64d}.badge.warn[_ngcontent-%COMP%]{background:#d977061f;color:#d97706;border-color:#d977064d}.badge.done[_ngcontent-%COMP%]{background:#7c3aed1f;color:#7c3aed;border-color:#7c3aed4d}.ov[_ngcontent-%COMP%]{position:fixed;inset:0;background:#0000008c;display:flex;align-items:flex-start;justify-content:center;padding:40px 16px;z-index:200;overflow-y:auto}.mdl[_ngcontent-%COMP%]{background:var(--bg-surface);border-radius:var(--radius-lg);width:100%;max-width:760px;box-shadow:0 20px 60px #00000059;border:1px solid var(--border)}.mdl-h[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--border)}.mdl-h[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.1rem;color:var(--text-primary)}.mdl-b[_ngcontent-%COMP%]{padding:20px}.mdl-f[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px;padding:14px 20px;border-top:1px solid var(--border)}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:14px}.fg[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px}.fg-2[_ngcontent-%COMP%]{grid-column:span 2}.fg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.8rem;color:var(--text-secondary);font-weight:600}.in[_ngcontent-%COMP%]{padding:9px 11px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:.9rem;background:var(--bg-surface);color:var(--text-primary);font-family:inherit;transition:var(--ease);outline:none}.in[_ngcontent-%COMP%]:focus{border-color:var(--border-focus);box-shadow:0 0 0 3px #1d4ed81a}.in[_ngcontent-%COMP%]:disabled{background-color:var(--bg-elevated);cursor:not-allowed;opacity:.7}.alert[_ngcontent-%COMP%]{background:#ef44441a;color:#ef4444;padding:10px 14px;border-radius:var(--radius-sm);margin-bottom:14px;font-size:.88rem;border:1px solid rgba(239,68,68,.25)}@media(max-width:640px){.grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.fg-2[_ngcontent-%COMP%]{grid-column:span 1}}",".card[_ngcontent-%COMP%]{background:var(--bg-surface);border:1px solid var(--border);border-radius:var(--radius-md);overflow:hidden}.pcard-head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;padding:18px 20px;border-bottom:1px solid var(--border)}.pref[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;color:var(--text-primary)}.pemp[_ngcontent-%COMP%]{color:var(--text-secondary);margin-top:2px}.mat[_ngcontent-%COMP%]{color:var(--text-muted)}.pper[_ngcontent-%COMP%]{color:var(--text-muted);font-size:.85rem;margin-top:2px}.tbl[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:.88rem}.tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;padding:10px 20px;background:var(--bg-elevated);color:var(--text-secondary);font-weight:600;border-bottom:1px solid var(--border)}.tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:9px 20px;border-bottom:1px solid var(--border-light);color:var(--text-primary)}.ta-r[_ngcontent-%COMP%]{text-align:right}tr.cat-gross[_ngcontent-%COMP%]{background:#7c3aed14;font-weight:700}tr.cat-net[_ngcontent-%COMP%]{background:#16a34a14;font-weight:700}.totals[_ngcontent-%COMP%]{padding:16px 20px;display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.totals[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px;padding:12px;border-radius:var(--radius-md);background:var(--bg-elevated)}.totals[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.78rem;color:var(--text-muted)}.totals[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:1.1rem;color:var(--text-primary)}.totals[_ngcontent-%COMP%]   .net[_ngcontent-%COMP%]{background:#7c3aed1f}.totals[_ngcontent-%COMP%]   .pat[_ngcontent-%COMP%]{background:#d977061a}@media(max-width:700px){.totals[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}.leaves[_ngcontent-%COMP%]{padding:0 20px 18px}.leaves-tbl[_ngcontent-%COMP%]{font-size:.82rem}.leaves-tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .leaves-tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:6px 10px}.extras[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:0 20px 18px}.extra-title[_ngcontent-%COMP%]{font-size:.78rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;margin-bottom:6px}.extra-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--border-light);font-size:.85rem;color:var(--text-primary)}@media(max-width:700px){.extras[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})}}return i})();export{St as PayslipDetailComponent};
