import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HrService, Employee, LeaveType, LeaveDeclaration, LeaveBalanceSummary } from '../../services/hr.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-hr-leaves',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="hp">
      <div class="hp-head">
        <h1><span class="material-icons">beach_access</span> Congés</h1>
        @if (canEdit) { <button class="b b-primary" (click)="openDeclare()"><span class="material-icons">add</span> Déclarer un congé</button> }
      </div>

      <div class="fg" style="max-width:360px;margin-bottom:16px">
        <label>Employé</label>
        <select class="in" [(ngModel)]="selectedEmployeeId" (ngModelChange)="onEmployeeChange()">
          <option [ngValue]="undefined" disabled>— Sélectionner —</option>
          @for (e of employees; track e.id) { <option [ngValue]="e.id">{{ e.matricule }} — {{ e.lastName }} {{ e.firstName }}</option> }
        </select>
      </div>

      @if (selectedEmployeeId) {
        <div class="card" style="margin-bottom:20px">
          <div class="pcard-head"><div class="pref">Compteurs {{ year }}</div></div>
          @if (balances.length === 0) { <div class="empty" style="padding:16px 20px">Aucun type de congé défini.</div> }
          @else {
            <div class="tbl-wrap">
              <table class="tbl">
                <thead><tr><th>Type</th><th class="ta-r">Report N-1</th><th class="ta-r">Acquis {{ year }}</th><th class="ta-r">Pris {{ year }}</th><th class="ta-r">Reste</th><th></th></tr></thead>
                <tbody>
                  @for (b of balances; track b.leaveTypeId) {
                    <tr>
                      <td>{{ b.name }}</td>
                      <td class="ta-r">{{ fmt(b.carryOver) }}</td>
                      <td class="ta-r">{{ fmt(b.accrued) }}</td>
                      <td class="ta-r">{{ fmt(b.taken) }}</td>
                      <td class="ta-r" style="font-weight:700">{{ fmt(b.remaining) }}</td>
                      <td class="ta-r">@if (canEdit) { <button class="b-icon" title="Modifier le report N-1" (click)="openCarryOver(b)"><span class="material-icons">edit</span></button> }</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          }
        </div>

        <div class="hp-head" style="margin-bottom:10px"><h2 style="font-size:1rem;margin:0">Déclarations</h2></div>
        @if (declarations.length === 0) { <div class="empty">Aucune déclaration.</div> }
        @else {
          <div class="tbl-wrap">
            <table class="tbl">
              <thead><tr><th>Type</th><th>Du</th><th>Au</th><th class="ta-r">Jours</th><th>Notes</th><th></th></tr></thead>
              <tbody>
                @for (d of declarations; track d.id) {
                  <tr>
                    <td>{{ leaveTypeName(d.leaveTypeId) }}</td>
                    <td>{{ d.dateFrom }}</td>
                    <td>{{ d.dateEnd }}</td>
                    <td class="ta-r">{{ fmt(d.numberOfDays) }}</td>
                    <td>{{ d.notes || '—' }}</td>
                    <td class="ta-r">@if (canEdit) { <button class="b-icon" (click)="delDeclaration(d)"><span class="material-icons">delete_outline</span></button> }</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      }
    </div>

    @if (showModal) {
      <div class="ov" (click)="showModal=false">
        <div class="mdl" style="max-width:480px" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>Déclarer un congé</h3><button class="b-icon" (click)="showModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg fg-2"><label>Employé *</label>
                <select class="in" [(ngModel)]="form.employeeId"><option [ngValue]="0" disabled>— Sélectionner —</option>@for (e of employees; track e.id) { <option [ngValue]="e.id">{{ e.matricule }} — {{ e.lastName }} {{ e.firstName }}</option> }</select>
              </div>
              <div class="fg fg-2"><label>Type de congé *</label>
                <select class="in" [(ngModel)]="form.leaveTypeId"><option [ngValue]="0" disabled>— Sélectionner —</option>@for (t of leaveTypes; track t.id) { <option [ngValue]="t.id">{{ t.name }}</option> }</select>
              </div>
              <div class="fg"><label>Du *</label><input type="date" class="in" [(ngModel)]="form.dateFrom" (ngModelChange)="onDatesChange()"></div>
              <div class="fg"><label>Au *</label><input type="date" class="in" [(ngModel)]="form.dateEnd" (ngModelChange)="onDatesChange()"></div>
              <div class="fg"><label>Jours</label><input type="number" step="0.5" class="in" [(ngModel)]="form.numberOfDays"></div>
              <div class="fg fg-2"><label>Notes</label><input class="in" [(ngModel)]="form.notes"></div>
            </div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showModal=false">Annuler</button>
            <button class="b b-primary" (click)="saveDeclaration()" [disabled]="saving">{{ saving ? 'Enregistrement…' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }

    @if (showCarryOverModal) {
      <div class="ov" (click)="showCarryOverModal=false">
        <div class="mdl" style="max-width:420px" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>Report N-1 — {{ carryOverForm.name }}</h3><button class="b-icon" (click)="showCarryOverModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="fg"><label>Solde reporté de {{ year - 1 }} (jours)</label><input type="number" step="0.5" class="in" [(ngModel)]="carryOverForm.amount"></div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showCarryOverModal=false">Annuler</button>
            <button class="b b-primary" (click)="saveCarryOver()" [disabled]="saving">{{ saving ? 'Enregistrement…' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }
  `,
  styleUrls: ['../hr-shared.scss']
})
export class LeavesComponent implements OnInit {
  companyId!: number;
  year = new Date().getFullYear();

  employees: Employee[] = [];
  leaveTypes: LeaveType[] = [];
  selectedEmployeeId?: number;
  balances: LeaveBalanceSummary[] = [];
  declarations: LeaveDeclaration[] = [];

  canEdit = false;
  showModal = false; saving = false; err = '';
  form: LeaveDeclaration = { employeeId: 0, leaveTypeId: 0, dateFrom: '', dateEnd: '', numberOfDays: 0, companyId: 0 };

  showCarryOverModal = false;
  carryOverForm: { leaveTypeId: number; name: string; amount: number } = { leaveTypeId: 0, name: '', amount: 0 };

  constructor(private hr: HrService, private auth: AuthService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.companyId = this.auth.getCompanyId();
    this.canEdit = this.auth.hasPermission('RH', 'CONGES', 'CREATE') || this.auth.hasPermission('RH', 'CONGES', 'EDIT') || this.auth.isPrivileged();
    this.hr.getEmployees(this.companyId).subscribe(e => this.employees = e);
    this.hr.getLeaveTypes(this.companyId).subscribe(t => this.leaveTypes = t);
  }

  onEmployeeChange(): void {
    if (!this.selectedEmployeeId) return;
    this.hr.getLeaveBalances(this.companyId, this.selectedEmployeeId, this.year).subscribe(b => this.balances = b);
    this.hr.getLeaveDeclarations(this.companyId, this.selectedEmployeeId).subscribe(d => this.declarations = d);
  }

  leaveTypeName(id: number) { return this.leaveTypes.find(t => t.id === id)?.name ?? id; }
  fmt(n?: number) { return new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 2 }).format(n || 0); }

  /** Pré-calcule le nombre de jours calendaires entre les deux dates — reste ensuite librement ajustable. */
  onDatesChange(): void {
    if (!this.form.dateFrom || !this.form.dateEnd) return;
    const from = new Date(this.form.dateFrom);
    const to = new Date(this.form.dateEnd);
    const days = Math.round((to.getTime() - from.getTime()) / 86400000) + 1;
    if (days > 0) this.form.numberOfDays = days;
  }

  openDeclare(): void {
    this.form = { employeeId: this.selectedEmployeeId || 0, leaveTypeId: 0, dateFrom: '', dateEnd: '', numberOfDays: 0, companyId: this.companyId };
    this.err = ''; this.showModal = true;
  }

  saveDeclaration(): void {
    if (!this.form.employeeId) { this.err = 'Sélectionnez un employé'; return; }
    if (!this.form.leaveTypeId) { this.err = 'Sélectionnez un type de congé'; return; }
    if (!this.form.dateFrom || !this.form.dateEnd) { this.err = 'Les dates sont obligatoires'; return; }
    this.form.companyId = this.companyId;
    this.saving = true;
    this.hr.saveLeaveDeclaration(this.form).subscribe({
      next: () => { this.saving = false; this.showModal = false; this.onEmployeeChange(); },
      error: (e) => { this.saving = false; this.err = e.error?.message || 'Erreur'; }
    });
  }

  delDeclaration(d: LeaveDeclaration): void {
    if (!confirm('Supprimer cette déclaration ?')) return;
    this.hr.deleteLeaveDeclaration(d.id!).subscribe({
      next: () => this.onEmployeeChange(),
      error: err => this.notificationService.notify(err?.error?.message ?? 'Erreur lors de la suppression.', 'error')
    });
  }

  openCarryOver(b: LeaveBalanceSummary): void {
    this.carryOverForm = { leaveTypeId: b.leaveTypeId, name: b.name, amount: b.carryOver || 0 };
    this.err = ''; this.showCarryOverModal = true;
  }
  saveCarryOver(): void {
    if (!this.selectedEmployeeId) return;
    this.saving = true;
    this.hr.saveLeaveCarryOver(this.companyId, this.selectedEmployeeId, this.carryOverForm.leaveTypeId, this.year, this.carryOverForm.amount).subscribe({
      next: () => { this.saving = false; this.showCarryOverModal = false; this.onEmployeeChange(); },
      error: (e) => { this.saving = false; this.err = e.error?.message || 'Erreur'; }
    });
  }
}
