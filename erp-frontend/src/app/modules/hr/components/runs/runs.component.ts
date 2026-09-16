import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HrService, PayslipRun, PayslipDTO } from '../../services/hr.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-hr-runs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="hp">
      <div class="hp-head">
        <h1><span class="material-icons">event_repeat</span> Lots de paie</h1>
        @if (canCreate) { <button class="b b-primary" (click)="openGen()"><span class="material-icons">group_add</span> Générer un lot</button> }
      </div>
      @if (loading) { <div class="muted">Chargement…</div> }
      @else if (runs.length === 0) { <div class="empty">Aucun lot. « Générer un lot » calcule un bulletin pour chaque employé actif.</div> }
      @else {
        <div class="tbl-wrap">
          <table class="tbl">
            <thead><tr><th>Lot</th><th>Période</th><th>État</th><th></th></tr></thead>
            <tbody>
              @for (r of runs; track r.id) {
                <tr>
                  <td><strong>{{ r.name }}</strong></td>
                  <td>{{ r.dateStart }} → {{ r.dateEnd }}</td>
                  <td><span class="badge" [class.done]="r.state==='DONE'" [class.info]="r.state==='VERIFY'">{{ stateLabel(r.state) }}</span></td>
                  <td class="ta-r">
                    <button class="b-icon" (click)="toggle(r)" title="Voir les bulletins"><span class="material-icons">{{ expanded===r.id ? 'expand_less' : 'expand_more' }}</span></button>
                    <button class="b-icon" title="Livre de paie (DIPE)" (click)="openRegister(r)"><span class="material-icons">menu_book</span></button>
                    @if (canValidate && r.state !== 'DONE') { <button class="b-icon" title="Valider le lot" (click)="validateRun(r)"><span class="material-icons">check_circle</span></button> }
                  </td>
                </tr>
                @if (expanded === r.id) {
                  <tr><td colspan="4" style="padding:0">
                    <table class="tbl sub">
                      <thead><tr><th>Référence</th><th>Employé</th><th class="ta-r">Brut</th><th class="ta-r">Net</th><th>État</th></tr></thead>
                      <tbody>
                        @for (p of runSlips; track p.payslip.id) {
                          <tr class="clk" (click)="open(p)">
                            <td>{{ p.payslip.name }}</td><td>{{ p.payslip.employeeName }}</td>
                            <td class="ta-r">{{ fmt(p.payslip.totalBrut) }}</td>
                            <td class="ta-r"><strong>{{ fmt(p.payslip.totalNet) }}</strong></td>
                            <td><span class="badge">{{ pstate(p.payslip.state) }}</span></td>
                          </tr>
                        }
                        @if (runSlips.length === 0) { <tr><td colspan="5" class="muted" style="padding:14px">Aucun bulletin dans ce lot.</td></tr> }
                      </tbody>
                    </table>
                  </td></tr>
                }
              }
            </tbody>
          </table>
        </div>
      }
    </div>

    @if (showGen) {
      <div class="ov" (click)="showGen=false">
        <div class="mdl" (click)="$event.stopPropagation()" style="max-width:520px">
          <div class="mdl-h"><h3>Générer un lot de paie</h3><button class="b-icon" (click)="showGen=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg fg-2"><label>Nom du lot</label><input class="in" [(ngModel)]="genName" placeholder="Paie de …"></div>
              <div class="fg"><label>Du *</label><input type="date" class="in" [(ngModel)]="genFrom"></div>
              <div class="fg"><label>Au *</label><input type="date" class="in" [(ngModel)]="genTo"></div>
            </div>
            <div class="muted" style="margin-top:10px;font-size:.85rem">Un bulletin sera calculé pour chaque employé actif ayant un contrat.</div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showGen=false">Annuler</button>
            <button class="b b-primary" (click)="generate()" [disabled]="busy">{{ busy ? 'Génération…' : 'Générer' }}</button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`.sub { background: var(--bg-elevated); } .sub th { background: var(--bg-elevated); }`],
  styleUrls: ['../hr-shared.scss']
})
export class RunsComponent implements OnInit {
  companyId!: number;
  runs: PayslipRun[] = [];
  runSlips: PayslipDTO[] = [];
  expanded: number | null = null;
  loading = false; showGen = false; busy = false; err = '';
  genName = ''; genFrom = ''; genTo = '';
  canCreate = false; canValidate = false;

  constructor(private hr: HrService, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.companyId = this.auth.getCompanyId();
    this.canCreate = this.auth.hasPermission('RH', 'BULLETINS', 'CREATE') || this.auth.isPrivileged();
    this.canValidate = this.auth.hasPermission('RH', 'BULLETINS', 'VALIDATE') || this.auth.isPrivileged();
    this.load();
  }

  load(): void { this.loading = true; this.hr.getRuns(this.companyId).subscribe({ next: r => { this.runs = r; this.loading = false; }, error: () => this.loading = false }); }
  fmt(n?: number) { return new Intl.NumberFormat('fr-FR').format(Math.round(n || 0)); }
  stateLabel(s?: string) { return s === 'DONE' ? 'Validé' : s === 'VERIFY' ? 'Calculé' : 'Brouillon'; }
  pstate(s?: string) { return s === 'DONE' ? 'Comptabilisé' : s === 'VERIFY' ? 'Calculé' : s === 'CANCELLED' ? 'Annulé' : 'Brouillon'; }

  toggle(r: PayslipRun): void {
    if (this.expanded === r.id) { this.expanded = null; return; }
    this.expanded = r.id!; this.runSlips = [];
    this.hr.getRunPayslips(r.id!).subscribe(s => this.runSlips = s);
  }
  open(p: PayslipDTO): void { this.router.navigate(['/hr/payslips', p.payslip.id]); }
  openRegister(r: PayslipRun): void { this.router.navigate(['/hr/runs', r.id, 'register']); }

  openGen(): void {
    const now = new Date();
    this.genFrom = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
    this.genTo = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0];
    this.genName = 'Paie ' + now.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
    this.err = ''; this.showGen = true;
  }
  generate(): void {
    if (!this.genFrom || !this.genTo) { this.err = 'Période obligatoire'; return; }
    this.busy = true;
    this.hr.generateRun({ companyId: this.companyId, name: this.genName, dateStart: this.genFrom, dateEnd: this.genTo }).subscribe({
      next: () => { this.busy = false; this.showGen = false; this.load(); },
      error: (e) => { this.busy = false; this.err = e.error?.message || 'Erreur'; }
    });
  }
  validateRun(r: PayslipRun): void {
    if (!confirm('Valider et comptabiliser tous les bulletins de ce lot ?')) return;
    this.hr.validateRun(r.id!).subscribe({ next: () => this.load(), error: (e) => alert(e.error?.message || 'Erreur') });
  }
}
