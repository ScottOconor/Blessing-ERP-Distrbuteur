import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HrService, PayrollRegister } from '../../services/hr.service';
import { CompanyService } from '../../../../core/services/company.service';

@Component({
  selector: 'app-hr-payroll-register',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hp" *ngIf="reg as r">
      <div class="hp-head">
        <button class="b b-sec" (click)="back()"><span class="material-icons">arrow_back</span> Retour</button>
        <div style="display:flex;align-items:center;gap:14px">
          <h1 style="font-size:1.1rem"><span class="material-icons">menu_book</span> Livre de paie — {{ r.runName }}</h1>
          <button class="b b-primary" (click)="print()"><span class="material-icons">print</span> Imprimer</button>
        </div>
      </div>
      <div class="muted" style="margin-bottom:12px">Période : {{ r.dateStart }} → {{ r.dateEnd }} — base de la déclaration CNPS mensuelle (DIPE).</div>

      <div class="tbl-wrap">
        <table class="tbl reg">
          <thead>
            <tr>
              <th>Matricule</th><th>Employé</th>
              @for (c of r.categoryCodes; track c) { <th class="ta-r">{{ catName(c) }}</th> }
            </tr>
          </thead>
          <tbody>
            @for (row of r.rows; track row.employeeId) {
              <tr>
                <td>{{ row.matricule }}</td>
                <td>{{ row.employeeName }}</td>
                @for (c of r.categoryCodes; track c) { <td class="ta-r">{{ fmt(row.amounts[c]) }}</td> }
              </tr>
            }
            @if (r.rows.length === 0) { <tr><td [attr.colspan]="r.categoryCodes.length + 2" class="muted" style="padding:16px">Aucun bulletin dans ce lot.</td></tr> }
          </tbody>
          <tfoot>
            <tr class="tot-row">
              <td colspan="2">TOTAL GÉNÉRAL</td>
              @for (c of r.categoryCodes; track c) { <td class="ta-r">{{ fmt(r.totals[c]) }}</td> }
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .reg { font-size: .82rem; }
    tfoot .tot-row td { font-weight: 700; background: var(--bg-elevated); border-top: 2px solid var(--border); color: var(--text-primary); }
  `],
  styleUrls: ['../hr-shared.scss']
})
export class PayrollRegisterComponent implements OnInit {
  reg?: PayrollRegister;

  constructor(private hr: HrService, private route: ActivatedRoute, private router: Router,
              private companyService: CompanyService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.hr.getRunRegister(id).subscribe(r => this.reg = r);
  }

  catName(code: string): string {
    const i = this.reg?.categoryCodes.indexOf(code) ?? -1;
    return i >= 0 ? this.reg!.categoryNames[i] : code;
  }

  fmt(n?: number): string { return new Intl.NumberFormat('fr-FR').format(Math.round(n || 0)); }
  back(): void { this.router.navigate(['/hr/runs']); }

  private h(s?: string | number | null): string {
    if (s == null) return '';
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  private fmtDate(d?: string): string {
    if (!d) return '';
    try { return new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }); }
    catch { return d; }
  }

  print(): void {
    if (!this.reg) return;
    const r = this.reg;
    const company = this.companyService.getCached();
    const logo = this.companyService.getCachedLogoDataUrl();
    const logoHtml = logo ? `<img src="${logo}" class="co-logo" alt="logo">` : '';

    const rowsHtml = r.rows.map(row => `
      <tr>
        <td>${this.h(row.matricule)}</td>
        <td class="desc">${this.h(row.employeeName)}</td>
        ${r.categoryCodes.map(c => `<td class="r">${this.fmt(row.amounts[c])}</td>`).join('')}
      </tr>`).join('');
    const totalsHtml = r.categoryCodes.map(c => `<td class="r">${this.fmt(r.totals[c])}</td>`).join('');
    const headHtml = r.categoryCodes.map(c => `<th class="r">${this.h(this.catName(c))}</th>`).join('');
    const printDate = new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });

    const html = `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8">
<title>Livre de paie ${this.h(r.runName)}</title>
<style>
* { box-sizing: border-box; margin:0; padding:0; }
body { font-family: Arial, sans-serif; font-size: 9pt; color:#111; background:white; }
.doc { padding: 10mm 12mm; }
.header { display:flex; justify-content:space-between; align-items:flex-start; border-bottom: 2px solid #222; padding-bottom: 3mm; margin-bottom: 6mm; }
.co-logo { max-height: 42px; max-width: 110px; object-fit:contain; display:block; margin-bottom:3px; }
.co-name { font-size: 11.5pt; font-weight:700; color:#017E84; }
.co-info { font-size: 7.5pt; color:#444; }
.title-block { text-align:right; }
.doc-type { font-size: 14pt; font-weight:800; letter-spacing:1px; color:#222; }
.doc-sub { font-size: 9pt; font-weight:600; color:#017E84; margin-top:2px; }
.doc-period { font-size: 8pt; color:#555; margin-top:1px; }
.note { font-size: 7.5pt; color:#777; font-style:italic; margin-bottom: 4mm; }
table { width:100%; border-collapse: collapse; font-size: 8pt; }
thead tr { background:#017E84; color:white; }
th, td { padding: 4px 6px; border-bottom: 1px solid #e0e0e0; }
th { text-align:right; font-weight:600; font-size:7.5pt; }
th:first-child, th:nth-child(2), td:first-child, td:nth-child(2) { text-align:left; }
.desc { max-width: 140px; }
tbody tr:nth-child(even) { background:#f7fafa; }
tfoot td { font-weight:700; background:#e8f5f5; color:#017E84; border-top: 2px solid #017E84; }
.footer-note { font-size: 7pt; color:#999; text-align:center; margin-top: 6mm; border-top: 1px solid #eee; padding-top: 2mm; }
@page { size: A4 landscape; margin: 10mm; }
@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
</style></head><body>
<div class="doc">
  <div class="header">
    <div>
      ${logoHtml}
      <div class="co-name">${this.h(company?.name)}</div>
      ${company?.adresse ? `<div class="co-info">${this.h(company.adresse)}</div>` : ''}
      ${company?.rccm ? `<div class="co-info">RCCM : ${this.h(company.rccm)}</div>` : ''}
      ${company?.nif ? `<div class="co-info">NIF : ${this.h(company.nif)}</div>` : ''}
    </div>
    <div class="title-block">
      <div class="doc-type">LIVRE DE PAIE</div>
      <div class="doc-sub">${this.h(r.runName)}</div>
      <div class="doc-period">Période du ${this.fmtDate(r.dateStart)} au ${this.fmtDate(r.dateEnd)}</div>
    </div>
  </div>
  <div class="note">Base de la déclaration CNPS mensuelle (DIPE) — Date d'impression : ${printDate}</div>
  <table>
    <thead><tr><th>Matricule</th><th>Employé</th>${headHtml}</tr></thead>
    <tbody>${rowsHtml}</tbody>
    <tfoot><tr><td colspan="2">TOTAL GÉNÉRAL</td>${totalsHtml}</tr></tfoot>
  </table>
  <div class="footer-note">Document confidentiel · ${this.h(company?.name)}</div>
</div>
</body></html>`;

    const w = window.open('', '_blank', 'width=1200,height=800');
    if (!w) return;
    w.document.write(html);
    w.document.close();
    w.focus();
    setTimeout(() => { w.print(); w.onafterprint = () => w.close(); }, 500);
  }
}
