import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { HrService, EmployeeContract, Employee, Department, JobPosition, ProfessionalCategory, Echelon } from '../../services/hr.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { CompanyService } from '../../../../core/services/company.service';
import { numberToFrenchWords } from '../../utils/french-words';

@Component({
  selector: 'app-hr-contract-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hp" *ngIf="contract as c">
      <div class="hp-head">
        <button class="b b-sec" (click)="back()"><span class="material-icons">arrow_back</span> Retour</button>
        <button class="b b-sec" (click)="print()"><span class="material-icons">print</span> Imprimer le contrat</button>
      </div>

      <div class="card">
        <div class="pcard-head">
          <div>
            <div class="pref">{{ typeLabel(c.type) }}</div>
            <div class="pemp">{{ employee?.lastName }} {{ employee?.firstName }} <span class="mat">({{ employee?.matricule }})</span></div>
            @if (jobName || departmentName) {
              <div class="pper">{{ jobName }}{{ jobName && departmentName ? ' — ' : '' }}{{ departmentName }}</div>
            }
          </div>
          <span class="badge" [class.ok]="c.state==='RUNNING'" [class.done]="c.state==='CLOSED'">{{ stateLabel(c.state) }}</span>
        </div>

        <div class="grid2">
          <div class="blk">
            <div class="blk-title">Employé</div>
            <div class="row"><span>Nom complet</span><strong>{{ employee?.lastName }} {{ employee?.firstName }}</strong></div>
            <div class="row"><span>Matricule</span><strong>{{ employee?.matricule || '—' }}</strong></div>
            <div class="row"><span>Né(e) le</span><strong>{{ fmtDate(employee?.birthDate) }}{{ employee?.birthPlace ? ' à ' + employee?.birthPlace : '' }}</strong></div>
            <div class="row"><span>Nationalité</span><strong>{{ employee?.nationality || '—' }}</strong></div>
            <div class="row"><span>CNI</span><strong>{{ employee?.cni || '—' }}</strong></div>
            <div class="row"><span>Adresse</span><strong>{{ employee?.address || '—' }}</strong></div>
          </div>
          <div class="blk">
            <div class="blk-title">Contrat</div>
            <div class="row"><span>Type</span><strong>{{ typeLabel(c.type) }}</strong></div>
            <div class="row"><span>Poste</span><strong>{{ jobName || '—' }}</strong></div>
            <div class="row"><span>Département</span><strong>{{ departmentName || '—' }}</strong></div>
            <div class="row"><span>Catégorie professionnelle</span><strong>{{ categoryName || '—' }}</strong></div>
            <div class="row"><span>Échelon</span><strong>{{ echelonName || '—' }}</strong></div>
            <div class="row"><span>Date de début</span><strong>{{ fmtDate(c.dateStart) }}</strong></div>
            <div class="row"><span>Date de fin</span><strong>{{ c.type === 'CDI' ? 'Indéterminée' : fmtDate(c.dateEnd) }}</strong></div>
          </div>
        </div>

        <div class="blk" style="margin-top:14px">
          <div class="blk-title">Rémunération mensuelle</div>
          <div class="row"><span>Salaire de base</span><strong>{{ fmt(c.wage) }} FCFA</strong></div>
          @if (c.primeTransport) { <div class="row"><span>Indemnité transport</span><strong>{{ fmt(c.primeTransport) }} FCFA</strong></div> }
          @if (c.primeLogement) { <div class="row"><span>Indemnité logement</span><strong>{{ fmt(c.primeLogement) }} FCFA</strong></div> }
          @if (c.primeRepresentation) { <div class="row"><span>Ind. représentation</span><strong>{{ fmt(c.primeRepresentation) }} FCFA</strong></div> }
          @if (c.primeFonction) { <div class="row"><span>Prime de fonction</span><strong>{{ fmt(c.primeFonction) }} FCFA</strong></div> }
          @if (c.primeAnciennete) { <div class="row"><span>Prime d'ancienneté</span><strong>{{ fmt(c.primeAnciennete) }} FCFA</strong></div> }
          @if (c.autresPrimes) { <div class="row"><span>Autres primes</span><strong>{{ fmt(c.autresPrimes) }} FCFA</strong></div> }
          <div class="row net"><span>Brut estimé</span><strong>{{ fmt(brut(c)) }} FCFA</strong></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card { background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-md); overflow: hidden; padding-bottom: 16px; }
    .pcard-head { display: flex; justify-content: space-between; align-items: flex-start; padding: 18px 20px; border-bottom: 1px solid var(--border); }
    .pref { font-size: 1.1rem; font-weight: 700; color: var(--text-primary); }
    .pemp { color: var(--text-secondary); margin-top: 2px; } .mat { color: var(--text-muted); }
    .pper { color: var(--text-muted); font-size: .85rem; margin-top: 2px; }
    .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; padding: 16px 20px 0; }
    @media (max-width: 700px) { .grid2 { grid-template-columns: 1fr; } }
    .blk { padding: 0 20px; }
    .blk-title { font-size: .78rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 8px; }
    .row { display: flex; justify-content: space-between; gap: 12px; padding: 5px 0; border-bottom: 1px solid var(--border-light); font-size: .88rem; color: var(--text-primary); }
    .row span { color: var(--text-muted); }
    .row.net { background: rgba(124,58,237,.1); padding: 8px 10px; border-radius: var(--radius-md); border-bottom: none; margin-top: 6px; font-weight: 700; }
  `],
  styleUrls: ['../hr-shared.scss']
})
export class ContractDetailComponent implements OnInit {
  id!: number;
  contract?: EmployeeContract;
  employee?: Employee;
  departmentName = '';
  jobName = '';
  categoryName = '';
  echelonName = '';

  constructor(
    private hr: HrService, private auth: AuthService, private route: ActivatedRoute,
    public router: Router, private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    const companyId = this.auth.getCompanyId();
    forkJoin({
      contracts: this.hr.getContracts(companyId),
      employees: this.hr.getEmployees(companyId),
      departments: this.hr.getDepartments(companyId),
      jobs: this.hr.getJobs(companyId),
      categories: this.hr.getProfessionalCategories(companyId),
      echelons: this.hr.getEchelons(companyId)
    }).subscribe(({ contracts, employees, departments, jobs, categories, echelons }) => {
      this.contract = contracts.find(c => c.id === this.id);
      if (!this.contract) return;
      this.employee = employees.find(e => e.id === this.contract!.employeeId);
      const dept = this.employee?.departmentId ? departments.find((d: Department) => d.id === this.employee!.departmentId) : undefined;
      const job = this.employee?.jobId ? jobs.find((j: JobPosition) => j.id === this.employee!.jobId) : undefined;
      const cat = this.contract.professionalCategory ? categories.find((c: ProfessionalCategory) => c.code === this.contract!.professionalCategory) : undefined;
      const ech = this.contract.echelonId ? echelons.find((e: Echelon) => e.id === this.contract!.echelonId) : undefined;
      this.departmentName = dept?.name || '';
      this.jobName = job?.name || '';
      this.categoryName = cat ? `${cat.code} — ${cat.name}` : (this.contract.professionalCategory || '');
      this.echelonName = ech ? `${ech.code} — ${ech.name}` : '';
    });
  }

  back(): void { this.router.navigate(['/hr/contracts']); }

  fmt(n?: number): string { return new Intl.NumberFormat('fr-FR').format(Math.round(n || 0)); }
  brut(c: EmployeeContract): number {
    return (+c.wage! || 0) + (+c.primeTransport! || 0) + (+c.primeLogement! || 0) + (+c.primeRepresentation! || 0)
      + (+c.primeFonction! || 0) + (+c.primeAnciennete! || 0) + (+c.autresPrimes! || 0);
  }
  stateLabel(s?: string): string { return s === 'RUNNING' ? 'En cours' : s === 'CLOSED' ? 'Terminé' : s === 'CANCELLED' ? 'Annulé' : 'Brouillon'; }
  typeLabel(t?: string): string {
    return ({ CDI: 'Contrat à Durée Indéterminée (CDI)', CDD: 'Contrat à Durée Déterminée (CDD)', STAGE: 'Contrat de Stage', INTERIM: "Contrat d'Intérim" } as Record<string, string>)[t || ''] || (t || '');
  }

  fmtDate(d?: string): string {
    if (!d) return '—';
    try { return new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }); }
    catch { return d; }
  }

  private h(s?: string | number | null): string {
    if (s == null) return '';
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  print(): void {
    if (!this.contract || !this.employee) return;
    const c = this.contract;
    const e = this.employee;
    const company = this.companyService.getCached();
    const logo = this.companyService.getCachedLogoDataUrl();

    const co = {
      name: company?.name || '', sigle: company?.sigle || '', rccm: company?.rccm || '',
      nif: company?.nif || '', adresse: company?.adresse || '', tel: company?.telephone || ''
    };
    const logoHtml = logo ? `<img src="${logo}" class="co-logo" alt="logo">` : '';

    const isCDI = c.type === 'CDI';
    const civilite = e.gender === 'F' ? 'Madame' : 'Monsieur';
    const neNee = e.gender === 'F' ? 'née' : 'né';
    const brutTotal = this.brut(c);

    const dureeArticle = isCDI
      ? `Le présent contrat est conclu pour une durée indéterminée à compter du <strong>${this.fmtDate(c.dateStart)}</strong>. Il pourra y être mis fin par l'une ou l'autre des parties, dans le respect des dispositions légales et réglementaires en vigueur, notamment en matière de préavis.`
      : `Le présent contrat est conclu pour une durée déterminée, à compter du <strong>${this.fmtDate(c.dateStart)}</strong> jusqu'au <strong>${this.fmtDate(c.dateEnd)}</strong>. Il prendra fin de plein droit à cette date, sans qu'il soit besoin d'un préavis.`;

    const indemnitesRows = [
      ['Indemnité de transport', c.primeTransport],
      ['Indemnité de logement', c.primeLogement],
      ['Indemnité de représentation', c.primeRepresentation],
      ['Prime de fonction', c.primeFonction],
      ["Prime d'ancienneté", c.primeAnciennete],
      ['Autres primes', c.autresPrimes],
    ].filter(([, v]) => (v as number) > 0)
     .map(([label, v]) => `<div class="rem-row"><span>${label}</span><span>${this.fmt(v as number)} FCFA</span></div>`)
     .join('');

    const typeShort = ({ CDI: 'CDI', CDD: 'CDD', STAGE: 'STAGE', INTERIM: 'INTÉRIM' } as Record<string, string>)[c.type || ''] || (c.type || '');

    const html = `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8">
<title>Contrat de travail</title>
<style>
* { box-sizing:border-box; margin:0; padding:0; }
body { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10pt; color: #1a1a1a; background: white; line-height: 1.55; }
.doc { max-width: 200mm; margin: 0 auto; }
.header { display:flex; justify-content:space-between; align-items:flex-start; border-bottom: 2.5px solid #017E84; padding-bottom: 5mm; margin-bottom: 7mm; }
.co-logo { max-height: 46px; max-width: 120px; object-fit: contain; display:block; margin-bottom: 5px; }
.co-name { font-size: 12.5pt; font-weight: 700; color: #111; }
.co-sigle { font-size: 9pt; font-weight: 500; color: #666; }
.co-info { font-size: 8pt; color: #555; margin-top: 1px; }
.co-lbl { font-weight: 600; color: #222; }
.title-block { text-align:right; padding-top: 2px; }
.doc-type { font-size: 15pt; font-weight: 800; letter-spacing: .3px; color: #111; }
.doc-badge { display:inline-block; margin-top: 4px; padding: 2px 10px; border-radius: 20px; background:#017E84; color:white; font-size: 8.5pt; font-weight: 700; letter-spacing: .5px; }
.doc-ref { font-size: 8pt; color: #888; margin-top: 5px; }
.section-lead { font-size: 9pt; color:#666; margin-bottom: 3mm; }
.parties-grid { display:flex; gap: 6mm; margin-bottom: 7mm; }
.party-card { flex:1; border:1px solid #e0e0e0; border-radius: 5px; overflow:hidden; page-break-inside: avoid; }
.party-head { background:#017E84; color:white; font-size: 8pt; font-weight:700; letter-spacing:.5px; text-transform:uppercase; padding: 4px 10px; }
.party-body { padding: 8px 10px; font-size: 9pt; }
.party-name { font-weight: 700; font-size: 9.8pt; color:#111; margin-bottom: 3px; }
.party-row { display:flex; justify-content:space-between; gap:8px; padding: 2px 0; border-bottom: 1px dotted #eee; }
.party-row span:first-child { color:#888; font-size: 8.3pt; }
.party-row span:last-child { text-align:right; font-weight: 500; }
h2.article { font-size: 10pt; font-weight: 700; color: #017E84; margin: 5.5mm 0 2mm; padding-bottom: 1.5mm; border-bottom: 1px solid #e5e5e5; page-break-after: avoid; }
p { text-align: justify; margin-bottom: 2mm; font-size: 9.6pt; page-break-inside: avoid; }
.rem-block { margin: 2mm 0 3mm; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden; page-break-inside: avoid; }
.rem-row { display:flex; justify-content:space-between; font-size: 9.3pt; padding: 4px 10px; border-bottom: 1px solid #f0f0f0; }
.rem-row:nth-child(even) { background: #fafcfc; }
.rem-total { display:flex; justify-content:space-between; font-weight: 800; font-size: 10.3pt; padding: 6px 10px; background:#017E84; color:white; }
.lettres { font-size: 8.8pt; font-style: italic; color:#444; margin: 2mm 0 4mm; }
.closing { display:flex; justify-content:space-between; margin-top: 8mm; font-size: 9.3pt; }
.signatures { display:flex; justify-content:space-between; gap: 10mm; margin-top: 8mm; page-break-inside: avoid; }
.sig { flex:1; text-align:center; }
.sig-lbl { font-size: 8.8pt; font-weight:700; margin-bottom: 13mm; }
.sig-area { height: 15mm; border: 1px solid #ccc; border-radius: 3px; background: #fdfdfd; }
.footer-note { font-size: 7pt; color:#aaa; text-align:center; margin-top: 8mm; border-top: 1px solid #eee; padding-top: 2mm; }
@page { margin: 15mm 17mm; size: A4 portrait; }
@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
@media screen { .doc { padding: 15mm 17mm; } }
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
      <div class="doc-type">CONTRAT DE TRAVAIL</div>
      <div class="doc-badge">${this.h(typeShort)}</div>
      <div class="doc-ref">Matricule : ${this.h(e.matricule)}</div>
    </div>
  </div>

  <div class="section-lead">Entre les soussignés, il a été convenu et arrêté ce qui suit :</div>

  <div class="parties-grid">
    <div class="party-card">
      <div class="party-head">L'Employeur</div>
      <div class="party-body">
        <div class="party-name">${this.h(co.name)}</div>
        ${co.rccm ? `<div class="party-row"><span>RCCM</span><span>${this.h(co.rccm)}</span></div>` : ''}
        ${co.nif ? `<div class="party-row"><span>NIF</span><span>${this.h(co.nif)}</span></div>` : ''}
        ${co.adresse ? `<div class="party-row"><span>Siège social</span><span>${this.h(co.adresse)}</span></div>` : ''}
      </div>
    </div>
    <div class="party-card">
      <div class="party-head">L'Employé(e)</div>
      <div class="party-body">
        <div class="party-name">${civilite} ${this.h(e.lastName)} ${this.h(e.firstName)}</div>
        <div class="party-row"><span>Né(e) le</span><span>${this.fmtDate(e.birthDate)}${e.birthPlace ? ` à ${this.h(e.birthPlace)}` : ''}</span></div>
        <div class="party-row"><span>Nationalité</span><span>${this.h(e.nationality) || '—'}</span></div>
        <div class="party-row"><span>CNI n°</span><span>${this.h(e.cni) || '—'}</span></div>
        <div class="party-row"><span>Domicile</span><span>${this.h(e.address) || '—'}</span></div>
      </div>
    </div>
  </div>

  <h2 class="article">Article 1 — Engagement</h2>
  <p>L'Employeur engage l'Employé(e) en qualité de <strong>${this.h(this.jobName) || '—'}</strong>${this.departmentName ? `, au sein du département ${this.h(this.departmentName)}` : ''}, relevant de la catégorie professionnelle <strong>${this.h(this.categoryName) || '—'}</strong>${this.echelonName ? `, échelon <strong>${this.h(this.echelonName)}</strong>` : ''} de la grille catégorielle en vigueur.</p>

  <h2 class="article">Article 2 — Durée du contrat</h2>
  <p>${dureeArticle}</p>

  <h2 class="article">Article 3 — Rémunération</h2>
  <p>En contrepartie de son travail, l'Employé(e) percevra une rémunération mensuelle brute composée comme suit :</p>
  <div class="rem-block">
    <div class="rem-row"><span>Salaire de base</span><span>${this.fmt(c.wage)} FCFA</span></div>
    ${indemnitesRows}
    <div class="rem-total"><span>SALAIRE BRUT MENSUEL ESTIMÉ</span><span>${this.fmt(brutTotal)} FCFA</span></div>
  </div>
  <div class="lettres">Soit la somme de : <strong>${numberToFrenchWords(Math.round(brutTotal))} Francs CFA</strong>, sous réserve des retenues légales et conventionnelles (CNPS, IRPP, CFC, etc.).</div>

  <h2 class="article">Article 4 — Lieu de travail et horaires</h2>
  <p>L'Employé(e) exercera ses fonctions au lieu d'implantation de l'Employeur, ou en tout autre lieu que les nécessités du service pourraient exiger. Les horaires de travail sont ceux en vigueur au sein de l'entreprise, conformément à la législation du travail applicable en République du Cameroun.</p>

  <h2 class="article">Article 5 — Obligations des parties</h2>
  <p>L'Employé(e) s'engage à exécuter son travail avec diligence, loyauté et discrétion, et à se conformer au règlement intérieur de l'entreprise. L'Employeur s'engage à fournir à l'Employé(e) les moyens nécessaires à l'exécution de sa mission et à lui verser la rémunération convenue aux échéances prévues.</p>

  <h2 class="article">Article 6 — Résiliation</h2>
  <p>Le présent contrat pourra être résilié dans les conditions prévues par le Code du travail camerounais et les conventions collectives applicables, notamment en cas de faute grave, de démission, ou d'arrivée du terme pour les contrats à durée déterminée.</p>

  <div class="closing">
    <span>Fait à ${this.h(co.adresse ? co.adresse.split(',')[0] : '____________________')}, le ${this.fmtDate(new Date().toISOString())}</span>
    <span>En deux (2) exemplaires originaux</span>
  </div>

  <div class="signatures">
    <div class="sig"><div class="sig-lbl">L'Employeur</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">L'Employé(e)</div><div class="sig-area"></div></div>
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
}
