import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HrService, PayslipDTO, PayslipLine } from '../../services/hr.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { CompanyService } from '../../../../core/services/company.service';
import { numberToFrenchWords } from '../../utils/french-words';

@Component({
  selector: 'app-hr-payslip-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hp" *ngIf="dto as d">
      <div class="hp-head">
        <div>
          <button class="b b-sec" (click)="back()"><span class="material-icons">arrow_back</span> Retour</button>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="b b-sec" (click)="print()"><span class="material-icons">print</span> Imprimer</button>
          @if (isDraft) { <button class="b b-sec" (click)="recompute()" [disabled]="busy"><span class="material-icons">refresh</span> Recalculer</button> }
          @if (isDraft) { <button class="b b-warn" (click)="act('verify')" [disabled]="busy"><span class="material-icons">fact_check</span> Marquer calculé</button> }
          @if (canValidate && d.payslip.state !== 'DONE' && d.payslip.state !== 'CANCELLED') { <button class="b b-ok" (click)="act('validate')" [disabled]="busy"><span class="material-icons">check_circle</span> Valider & comptabiliser</button> }
          @if (d.payslip.state !== 'DRAFT' && d.payslip.state !== 'DONE') { <button class="b b-sec" (click)="act('draft')" [disabled]="busy">Brouillon</button> }
          @if (d.payslip.state !== 'CANCELLED' && d.payslip.state !== 'DONE') { <button class="b b-danger" (click)="act('cancel')" [disabled]="busy"><span class="material-icons">block</span> Annuler</button> }
        </div>
      </div>

      @if (msg) { <div class="alert" style="background:#ecfdf5;color:#065f46">{{ msg }}</div> }
      @if (err) { <div class="alert">{{ err }}</div> }

      <div class="card">
        <div class="pcard-head">
          <div>
            <div class="pref">{{ d.payslip.name }}</div>
            <div class="pemp">{{ d.payslip.employeeName }} <span class="mat">({{ d.payslip.employeeMatricule }})</span></div>
            @if (d.jobName || d.departmentName) {
              <div class="pper">{{ d.jobName }}{{ d.jobName && d.departmentName ? ' — ' : '' }}{{ d.departmentName }}</div>
            }
            @if (d.professionalCategoryName || d.echelonName) {
              <div class="pper">{{ d.professionalCategoryName }}{{ d.professionalCategoryName && d.echelonName ? ' — Échelon ' : '' }}{{ d.echelonName }}</div>
            }
            @if (d.hireDate) { <div class="pper">Embauché(e) le {{ fmtDate(d.hireDate) }}</div> }
            <div class="pper">Période : {{ d.payslip.periodFrom }} → {{ d.payslip.periodTo }}</div>
          </div>
          <span class="badge" [class]="badge(d.payslip.state)">{{ stateLabel(d.payslip.state) }}</span>
        </div>

        <table class="tbl">
          <thead><tr><th>Code</th><th>Libellé</th><th>Catégorie</th><th class="ta-r">Taux</th><th class="ta-r">Quantité</th><th class="ta-r">Montant unitaire</th><th class="ta-r">Total</th></tr></thead>
          <tbody>
            @for (l of d.lines; track l.id) {
              <tr [class.cat-gross]="l.categoryCode==='GROSS'" [class.cat-net]="l.categoryCode==='NET'">
                <td>{{ l.code }}</td>
                <td>{{ l.name }}</td>
                <td>{{ l.categoryName }}</td>
                <td class="ta-r">{{ (l.rate ?? 0) !== 0 ? fmtRate(l.rate) + ' %' : '—' }}</td>
                <td class="ta-r">{{ (l.quantity ?? 1) !== 1 ? fmt(l.quantity) : '—' }}</td>
                <td class="ta-r">{{ (l.quantity ?? 1) !== 1 ? fmt(l.amount) : '—' }}</td>
                <td class="ta-r" [style.color]="(l.total||0) < 0 ? '#b91c1c' : ''">{{ fmt(l.total) }}</td>
              </tr>
            }
          </tbody>
        </table>

        <div class="totals">
          <div><span>Salaire brut</span><strong>{{ fmt(d.payslip.totalBrut) }}</strong></div>
          <div><span>Retenues salariales</span><strong>{{ fmt(d.payslip.totalCotisationsSalariales) }}</strong></div>
          <div class="net"><span>Net à payer</span><strong>{{ fmt(d.payslip.totalNet) }}</strong></div>
          <div class="pat"><span>Charges patronales</span><strong>{{ fmt(d.payslip.totalChargesPatronales) }}</strong></div>
        </div>

        @if ((d.leaveBalances?.length ?? 0) > 0) {
          <div class="leaves">
            <div class="extra-title">Compteurs de congés</div>
            <table class="tbl leaves-tbl">
              <thead><tr><th>Type</th><th class="ta-r">Report</th><th class="ta-r">Acquis</th><th class="ta-r">Pris</th><th class="ta-r">Reste</th></tr></thead>
              <tbody>
                @for (b of d.leaveBalances; track b.leaveTypeId) {
                  <tr>
                    <td>{{ b.name }}</td>
                    <td class="ta-r">{{ fmt(b.carryOver) }}</td>
                    <td class="ta-r">{{ fmt(b.accrued) }}</td>
                    <td class="ta-r">{{ fmt(b.taken) }}</td>
                    <td class="ta-r" style="font-weight:700">{{ fmt(b.remaining) }}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }

        @if (d.workedDays.length > 0 || d.inputs.length > 0) {
          <div class="extras">
            @if (d.workedDays.length > 0) {
              <div class="extra-block">
                <div class="extra-title">Jours saisis</div>
                @for (wd of d.workedDays; track wd.id) {
                  <div class="extra-row"><span>{{ wd.name || wd.code }}</span><strong>{{ fmt(wd.numberOfDays) }} j</strong></div>
                }
              </div>
            }
            @if (d.inputs.length > 0) {
              <div class="extra-block">
                <div class="extra-title">Éléments variables saisis</div>
                @for (inp of d.inputs; track inp.id) {
                  <div class="extra-row"><span>{{ inp.name || inp.code }}</span><strong>{{ fmt(inp.amount) }} F</strong></div>
                }
              </div>
            }
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .card { background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-md); overflow: hidden; }
    .pcard-head { display: flex; justify-content: space-between; align-items: flex-start; padding: 18px 20px; border-bottom: 1px solid var(--border); }
    .pref { font-size: 1.1rem; font-weight: 700; color: var(--text-primary); }
    .pemp { color: var(--text-secondary); margin-top: 2px; } .mat { color: var(--text-muted); }
    .pper { color: var(--text-muted); font-size: .85rem; margin-top: 2px; }
    .tbl { width: 100%; border-collapse: collapse; font-size: .88rem; }
    .tbl th { text-align: left; padding: 10px 20px; background: var(--bg-elevated); color: var(--text-secondary); font-weight: 600; border-bottom: 1px solid var(--border); }
    .tbl td { padding: 9px 20px; border-bottom: 1px solid var(--border-light); color: var(--text-primary); }
    .ta-r { text-align: right; }
    tr.cat-gross { background: rgba(124,58,237,.08); font-weight: 700; }
    tr.cat-net { background: rgba(22,163,74,.08); font-weight: 700; }
    .totals { padding: 16px 20px; display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
    .totals > div { display: flex; flex-direction: column; gap: 3px; padding: 12px; border-radius: var(--radius-md); background: var(--bg-elevated); }
    .totals span { font-size: .78rem; color: var(--text-muted); } .totals strong { font-size: 1.1rem; color: var(--text-primary); }
    .totals .net { background: rgba(124,58,237,.12); } .totals .pat { background: rgba(217,119,6,.1); }
    @media (max-width: 700px) { .totals { grid-template-columns: 1fr 1fr; } }
    .leaves { padding: 0 20px 18px; }
    .leaves-tbl { font-size: .82rem; }
    .leaves-tbl th, .leaves-tbl td { padding: 6px 10px; }
    .extras { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; padding: 0 20px 18px; }
    .extra-title { font-size: .78rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 6px; }
    .extra-row { display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid var(--border-light); font-size: .85rem; color: var(--text-primary); }
    @media (max-width: 700px) { .extras { grid-template-columns: 1fr; } }
  `],
  styleUrls: ['../hr-shared.scss']
})
export class PayslipDetailComponent implements OnInit {
  id!: number;
  dto?: PayslipDTO;
  busy = false; err = ''; msg = '';
  canValidate = false;

  constructor(private hr: HrService, private auth: AuthService, private route: ActivatedRoute,
              private router: Router, private companyService: CompanyService) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.canValidate = this.auth.hasPermission('RH', 'BULLETINS', 'VALIDATE') || this.auth.isPrivileged();
    this.load();
  }

  get isDraft() { return this.dto?.payslip.state === 'DRAFT'; }

  load(): void { this.hr.getPayslip(this.id).subscribe(d => this.dto = d); }
  fmt(n?: number) { return new Intl.NumberFormat('fr-FR').format(Math.round(n || 0)); }
  fmtRate(n?: number) { return new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 2 }).format(n || 0); }
  stateLabel(s?: string) { return s === 'DONE' ? 'Comptabilisé' : s === 'VERIFY' ? 'Calculé' : s === 'CANCELLED' ? 'Annulé' : 'Brouillon'; }
  badge(s?: string) { return s === 'DONE' ? 'done' : s === 'VERIFY' ? 'info' : s === 'CANCELLED' ? 'warn' : ''; }
  back(): void { this.router.navigate(['/hr/payslips']); }

  private h(s?: string | number | null): string {
    if (s == null) return '';
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  fmtDate(d?: string): string {
    if (!d) return '';
    try { return new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }); }
    catch { return d; }
  }

  print(): void {
    if (!this.dto) return;
    const d = this.dto;
    const company = this.companyService.getCached();
    const logo = this.companyService.getCachedLogoDataUrl();

    // Bulletin classique 2 colonnes : Gains à gauche, Retenues à droite (charges patronales exclues du bulletin salarié).
    const lines = d.lines.filter(l => l.categoryCode !== 'COMP' && l.code !== 'NET');
    const rowsHtml = lines.map(l => {
      const total = l.total ?? 0;
      const qty = l.quantity ?? 1;
      const rate = l.rate ?? 0;
      const base = rate !== 0 ? `${this.fmtRate(rate)} %` : (qty !== 1 ? `${this.fmt(qty)} × ${this.fmt(l.amount)}` : '');
      const gain = total > 0 ? this.fmt(total) : '';
      const retenue = total < 0 ? this.fmt(Math.abs(total)) : '';
      return `<tr>
        <td>${this.h(l.code)}</td>
        <td class="desc">${this.h(l.name)}</td>
        <td class="r base">${base}</td>
        <td class="r gain">${gain}</td>
        <td class="r ret">${retenue}</td>
      </tr>`;
    }).join('');

    const leaves = d.leaveBalances ?? [];
    const leavesHtml = leaves.length > 0 ? `
      <table class="leaves-tbl">
        <thead><tr><th>Compteurs de congés</th><th class="r">Report</th><th class="r">Acquis</th><th class="r">Pris</th><th class="r">Reste</th></tr></thead>
        <tbody>
          ${leaves.map(b => `<tr>
            <td>${this.h(b.name)}</td>
            <td class="r">${this.fmtRate(b.carryOver)}</td>
            <td class="r">${this.fmtRate(b.accrued)}</td>
            <td class="r">${this.fmtRate(b.taken)}</td>
            <td class="r" style="font-weight:700">${this.fmtRate(b.remaining)}</td>
          </tr>`).join('')}
        </tbody>
      </table>` : '';

    const extrasHtml = (d.workedDays.length > 0 || d.inputs.length > 0) ? `
      <div class="extras">
        ${d.workedDays.length > 0 ? `
          <div class="extra-col">
            <div class="extra-h">Jours saisis</div>
            ${d.workedDays.map(wd => `<div class="extra-r"><span>${this.h(wd.name || wd.code)}</span><span>${this.fmt(wd.numberOfDays)} j</span></div>`).join('')}
          </div>` : ''}
        ${d.inputs.length > 0 ? `
          <div class="extra-col">
            <div class="extra-h">Éléments variables</div>
            ${d.inputs.map(inp => `<div class="extra-r"><span>${this.h(inp.name || inp.code)}</span><span>${this.fmt(inp.amount)} F</span></div>`).join('')}
          </div>` : ''}
      </div>` : '';

    const co = {
      name: company?.name || '', sigle: company?.sigle || '', rccm: company?.rccm || '',
      nif: company?.nif || '', adresse: company?.adresse || '', tel: company?.telephone || '', email: company?.email || ''
    };
    const logoHtml = logo ? `<img src="${logo}" class="co-logo" alt="logo">` : '';
    const netAPayer = d.payslip.totalNet ?? 0;

    const html = `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8">
<title>Bulletin ${this.h(d.payslip.name)}</title>
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
      ${logoHtml}
      <div class="co-name">${this.h(co.name)}${co.sigle ? ` <span class="co-sigle">(${this.h(co.sigle)})</span>` : ''}</div>
      ${co.adresse ? `<div class="co-info">${this.h(co.adresse)}</div>` : ''}
      ${co.rccm ? `<div class="co-info"><span class="co-lbl">RCCM :</span> ${this.h(co.rccm)}</div>` : ''}
      ${co.nif ? `<div class="co-info"><span class="co-lbl">NIF :</span> ${this.h(co.nif)}</div>` : ''}
      ${co.tel ? `<div class="co-info"><span class="co-lbl">Tél :</span> ${this.h(co.tel)}</div>` : ''}
    </div>
    <div class="title-block">
      <div class="doc-type">BULLETIN DE PAIE</div>
      <div class="doc-ref">${this.h(d.payslip.name)}</div>
      <div class="doc-state">${this.h(this.stateLabel(d.payslip.state))}</div>
    </div>
  </div>

  <div class="meta">
    <div>
      <div class="meta-label">Employé</div>
      <div class="meta-value">${this.h(d.payslip.employeeName)}</div>
      <div class="meta-sub">Matricule : ${this.h(d.payslip.employeeMatricule)}</div>
      ${(d.jobName || d.departmentName) ? `<div class="meta-sub">${this.h(d.jobName)}${d.jobName && d.departmentName ? ' — ' : ''}${this.h(d.departmentName)}</div>` : ''}
      ${(d.professionalCategoryName || d.echelonName) ? `<div class="meta-sub">${this.h(d.professionalCategoryName)}${d.professionalCategoryName && d.echelonName ? ' — Échelon ' : ''}${this.h(d.echelonName)}</div>` : ''}
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">Période</span><span>Du ${this.fmtDate(d.payslip.periodFrom)} au ${this.fmtDate(d.payslip.periodTo)}</span></div>
      ${d.hireDate ? `<div class="meta-row"><span class="ml">Embauché(e) le</span><span>${this.fmtDate(d.hireDate)}</span></div>` : ''}
      <div class="meta-row"><span class="ml">Date d'émission</span><span>${this.fmtDate(new Date().toISOString())}</span></div>
    </div>
  </div>

  <table class="lines">
    <thead><tr><th>Code</th><th class="desc">Désignation</th><th class="r">Base</th><th class="r">Gains (FCFA)</th><th class="r">Retenues (FCFA)</th></tr></thead>
    <tbody>${rowsHtml}</tbody>
  </table>

  <table class="net-table">
    <tr class="net-row"><td>NET À PAYER</td><td class="r">${this.fmt(netAPayer)} FCFA</td></tr>
  </table>

  ${leavesHtml}

  ${extrasHtml}

  <div class="lettres">Arrêté à la somme de : <strong>${numberToFrenchWords(Math.round(netAPayer))} Francs CFA</strong></div>

  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Signature de l'employé</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Signature de l'employeur</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">Document confidentiel · ${this.h(co.name)}</div>
</div>
</body></html>`;

    const w = window.open('', '_blank', 'width=1000,height=1100');
    if (!w) return;
    w.document.write(html);
    w.document.close();
    w.focus();
    setTimeout(() => { w.print(); w.onafterprint = () => w.close(); }, 500);
  }

  recompute(): void { this.run(this.hr.recompute(this.id), 'Bulletin recalculé'); }
  act(a: string): void {
    const map: any = {
      verify: this.hr.verifyPayslip(this.id), validate: this.hr.validatePayslip(this.id),
      draft: this.hr.draftPayslip(this.id), cancel: this.hr.cancelPayslip(this.id)
    };
    const okmsg: any = { verify: 'Bulletin marqué calculé', validate: 'Bulletin validé et comptabilisé', draft: 'Remis en brouillon', cancel: 'Bulletin annulé' };
    this.run(map[a], okmsg[a]);
  }
  private run(obs: any, okmsg: string): void {
    this.busy = true; this.err = ''; this.msg = '';
    obs.subscribe({ next: (d: PayslipDTO) => { this.busy = false; this.dto = d; this.msg = okmsg; },
      error: (e: any) => { this.busy = false; this.err = e.error?.message || 'Erreur'; } });
  }
}
