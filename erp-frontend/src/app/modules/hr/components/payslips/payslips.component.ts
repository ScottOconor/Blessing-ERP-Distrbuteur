import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HrService, Payslip, Employee, PayslipInputType, WorkedDaysType, SalaryRule } from '../../services/hr.service';
import { AuthService } from '../../../../core/auth/auth.service';

interface InputRow { code: string; name: string; amount: number; }
interface DayRow { code: string; name: string; numberOfDays: number; }

@Component({
  selector: 'app-hr-payslips',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="hp">
      <div class="hp-head">
        <h1><span class="material-icons">receipt_long</span> Bulletins de paie</h1>
        @if (canCreate) { <button class="b b-primary" (click)="openCompute()"><span class="material-icons">calculate</span> Calculer un bulletin</button> }
      </div>
      @if (loading) { <div class="muted">Chargement…</div> }
      @else if (payslips.length === 0) { <div class="empty">Aucun bulletin. Cliquez sur « Calculer un bulletin ».</div> }
      @else {
        <div class="tbl-wrap">
          <table class="tbl">
            <thead><tr><th>Référence</th><th>Employé</th><th>Période</th><th class="ta-r">Brut</th><th class="ta-r">Retenues</th><th class="ta-r">Net à payer</th><th>État</th></tr></thead>
            <tbody>
              @for (p of payslips; track p.id) {
                <tr class="clk" (click)="open(p)">
                  <td><strong>{{ p.name }}</strong></td>
                  <td>{{ p.employeeName }}</td>
                  <td>{{ p.periodFrom }} → {{ p.periodTo }}</td>
                  <td class="ta-r">{{ fmt(p.totalBrut) }}</td>
                  <td class="ta-r">{{ fmt(p.totalCotisationsSalariales) }}</td>
                  <td class="ta-r"><strong>{{ fmt(p.totalNet) }}</strong></td>
                  <td><span class="badge" [class]="badge(p.state)">{{ stateLabel(p.state) }}</span></td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </div>

    @if (showModal) {
      <div class="ov" (click)="showModal=false">
        <div class="mdl" (click)="$event.stopPropagation()" style="max-width:620px">
          <div class="mdl-h"><h3>Calculer un bulletin</h3><button class="b-icon" (click)="showModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg fg-2"><label>Employé *</label><select class="in" [(ngModel)]="empId"><option [ngValue]="0" disabled>— Sélectionner —</option>@for (e of employees; track e.id) { <option [ngValue]="e.id">{{ e.matricule }} — {{ e.lastName }} {{ e.firstName }}</option> }</select></div>
              <div class="fg"><label>Du *</label><input type="date" class="in" [(ngModel)]="from"></div>
              <div class="fg"><label>Au *</label><input type="date" class="in" [(ngModel)]="to"></div>
            </div>

            <!-- Jours travaillés -->
            <div class="section-title">Jours (travaillés, absence, congé…)</div>
            @for (row of dayRows; track $index) {
              <div class="row-line">
                <select class="in" [(ngModel)]="row.code" (ngModelChange)="onDayPick(row, $event)">
                  <option value="" disabled>— Type —</option>
                  @for (t of dayTypes; track t.id) { <option [value]="t.code">{{ t.name }}</option> }
                </select>
                <input type="number" class="in" [(ngModel)]="row.numberOfDays" placeholder="Nb jours">
                <button class="b-icon" (click)="removeDayRow($index)"><span class="material-icons">delete_outline</span></button>
              </div>
            }
            <button class="b b-sec" style="margin-top:6px" (click)="addDayRow()"><span class="material-icons">add</span> Ajouter des jours</button>

            <!-- Éléments variables -->
            <div class="section-title">Éléments variables (avance, prime exceptionnelle…)</div>
            @for (row of inputRows; track $index) {
              <div class="row-line">
                <select class="in" [(ngModel)]="row.code" (ngModelChange)="onInputPick(row, $event)">
                  <option value="" disabled>— Type —</option>
                  @for (t of inputTypes; track t.id) { <option [value]="t.code">{{ t.name }}</option> }
                </select>
                <input type="number" min="0" class="in" [(ngModel)]="row.amount" placeholder="Montant (positif)">
                <button class="b-icon" (click)="removeInputRow($index)"><span class="material-icons">delete_outline</span></button>
              </div>
              @if (row.code) {
                <div class="input-hint" [class.warn]="inputEffect(row.code) === 'none'">
                  {{ inputHintText(row.code) }}
                </div>
              }
            }
            <button class="b b-sec" style="margin-top:6px" (click)="addInputRow()"><span class="material-icons">add</span> Ajouter un élément</button>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showModal=false">Annuler</button>
            <button class="b b-primary" (click)="compute()" [disabled]="computing">{{ computing ? 'Calcul…' : 'Calculer' }}</button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .section-title { margin: 16px 0 8px; font-size: .82rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; letter-spacing: .3px; }
    .row-line { display: grid; grid-template-columns: 1fr 120px auto; gap: 8px; margin-bottom: 8px; align-items: center; }
    .input-hint { font-size: .78rem; color: var(--text-muted); margin: -4px 0 8px 2px; }
    .input-hint.warn { color: #d97706; font-weight: 600; }
  `],
  styleUrls: ['../hr-shared.scss']
})
export class PayslipsComponent implements OnInit {
  companyId!: number;
  payslips: Payslip[] = [];
  employees: Employee[] = [];
  inputTypes: PayslipInputType[] = [];
  dayTypes: WorkedDaysType[] = [];
  salaryRules: SalaryRule[] = [];
  loading = false; showModal = false; computing = false; err = '';
  empId = 0; from = ''; to = '';
  inputRows: InputRow[] = [];
  dayRows: DayRow[] = [];
  canCreate = false;

  constructor(private hr: HrService, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.companyId = this.auth.getCompanyId();
    this.canCreate = this.auth.hasPermission('RH', 'BULLETINS', 'CREATE') || this.auth.isPrivileged();
    this.hr.getEmployees(this.companyId).subscribe(e => this.employees = e);
    this.hr.getInputTypes(this.companyId).subscribe(t => this.inputTypes = t);
    this.hr.getWorkedDaysTypes(this.companyId).subscribe(t => this.dayTypes = t);
    this.hr.getRules(this.companyId).subscribe(r => this.salaryRules = r);
    this.load();
  }

  load(): void {
    this.loading = true;
    this.hr.getPayslips(this.companyId).subscribe({ next: p => { this.payslips = p; this.loading = false; }, error: () => this.loading = false });
  }

  fmt(n?: number) { return new Intl.NumberFormat('fr-FR').format(Math.round(n || 0)); }
  stateLabel(s?: string) { return s === 'DONE' ? 'Comptabilisé' : s === 'VERIFY' ? 'Calculé' : s === 'CANCELLED' ? 'Annulé' : 'Brouillon'; }
  badge(s?: string) { return s === 'DONE' ? 'done' : s === 'VERIFY' ? 'info' : s === 'CANCELLED' ? 'warn' : ''; }

  open(p: Payslip): void { this.router.navigate(['/hr/payslips', p.id]); }

  openCompute(): void {
    const now = new Date();
    this.from = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
    this.to = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0];
    this.empId = 0; this.err = ''; this.inputRows = []; this.dayRows = []; this.showModal = true;
  }

  addInputRow(): void { this.inputRows.push({ code: '', name: '', amount: 0 }); }
  removeInputRow(i: number): void { this.inputRows.splice(i, 1); }
  onInputPick(row: InputRow, code: string): void { row.name = this.inputTypes.find(t => t.code === code)?.name ?? ''; }

  /**
   * 'deduct' | 'add' | 'none' selon la règle salariale (type INPUT) qui référence ce code.
   * Le moteur applique déjà le signe automatiquement via le drapeau "Retenue" de la règle —
   * l'utilisateur tape toujours un montant positif, jamais de signe négatif à saisir lui-même.
   */
  inputEffect(code: string): 'deduct' | 'add' | 'none' {
    const rule = this.salaryRules.find(r => r.computeType === 'INPUT' && r.code === code);
    if (!rule) return 'none';
    return rule.deduction ? 'deduct' : 'add';
  }

  inputHintText(code: string): string {
    const effect = this.inputEffect(code);
    if (effect === 'deduct') return '→ sera automatiquement déduit du net à payer (tapez un montant positif)';
    if (effect === 'add') return '→ s\'ajoutera au brut (tapez un montant positif)';
    return '⚠ aucune règle salariale de type « Élément variable » ne référence ce code — sans effet sur le calcul (configurez-la dans Config. paie)';
  }

  addDayRow(): void { this.dayRows.push({ code: '', name: '', numberOfDays: 0 }); }
  removeDayRow(i: number): void { this.dayRows.splice(i, 1); }
  onDayPick(row: DayRow, code: string): void { row.name = this.dayTypes.find(t => t.code === code)?.name ?? ''; }

  compute(): void {
    if (!this.empId || !this.from || !this.to) { this.err = 'Employé et période obligatoires'; return; }
    this.computing = true;
    const inputs = this.inputRows.filter(r => r.code);
    const workedDays = this.dayRows.filter(r => r.code);
    this.hr.compute({
      companyId: this.companyId, employeeId: this.empId, periodFrom: this.from, periodTo: this.to,
      inputs, workedDays
    }).subscribe({
      next: (dto) => { this.computing = false; this.showModal = false; this.router.navigate(['/hr/payslips', dto.payslip.id]); },
      error: (e) => { this.computing = false; this.err = e.error?.message || 'Erreur de calcul'; }
    });
  }
}
