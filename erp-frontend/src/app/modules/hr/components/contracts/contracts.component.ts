import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HrService, EmployeeContract, Employee, ProfessionalCategory, Echelon } from '../../services/hr.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-hr-contracts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="hp">
      <div class="hp-head">
        <h1><span class="material-icons">description</span> Contrats</h1>
        @if (canEdit) { <button class="b b-primary" (click)="openCreate()"><span class="material-icons">add</span> Nouveau contrat</button> }
      </div>
      @if (loading) { <div class="muted">Chargement…</div> }
      @else if (contracts.length === 0) { <div class="empty">Aucun contrat.</div> }
      @else {
        <div class="tbl-wrap">
          <table class="tbl">
            <thead><tr><th>Employé</th><th>Type</th><th>Début</th><th>Fin</th><th class="ta-r">Salaire base</th><th class="ta-r">Brut est.</th><th>État</th><th></th></tr></thead>
            <tbody>
              @for (c of contracts; track c.id) {
                <tr>
                  <td><strong>{{ empName(c.employeeId) }}</strong></td>
                  <td>{{ c.type }}</td>
                  <td>{{ c.dateStart }}</td>
                  <td>{{ c.dateEnd }}</td>
                  <td class="ta-r">{{ fmt(c.wage) }}</td>
                  <td class="ta-r">{{ fmt(brut(c)) }}</td>
                  <td><span class="badge" [class.ok]="c.state==='RUNNING'" [class.done]="c.state==='CLOSED'">{{ stateLabel(c.state) }}</span></td>
                  <td class="ta-r">
                    <button class="b-icon" title="Consulter / imprimer" (click)="view(c)"><span class="material-icons">visibility</span></button>
                    @if (canEdit) { <button class="b-icon" (click)="openEdit(c)"><span class="material-icons">edit</span></button> }
                    @if (canEdit && c.state==='DRAFT') { <button class="b-icon" title="Activer" (click)="setState(c,'RUNNING')"><span class="material-icons">play_arrow</span></button> }
                    @if (canEdit && c.state==='RUNNING') { <button class="b-icon" title="Clôturer" (click)="setState(c,'CLOSED')"><span class="material-icons">stop</span></button> }
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </div>

    @if (showModal) {
      <div class="ov" (click)="showModal=false">
        <div class="mdl" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>{{ form.id ? 'Modifier' : 'Nouveau' }} contrat</h3><button class="b-icon" (click)="showModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg fg-2"><label>Employé *</label><select class="in" [(ngModel)]="form.employeeId"><option [ngValue]="0" disabled>— Sélectionner —</option>@for (e of employees; track e.id) { <option [ngValue]="e.id">{{ e.matricule }} — {{ e.lastName }} {{ e.firstName }}</option> }</select></div>
              <div class="fg"><label>Type</label><select class="in" [(ngModel)]="form.type" (ngModelChange)="onTypeChange()"><option value="CDI">CDI</option><option value="CDD">CDD</option><option value="STAGE">Stage</option><option value="INTERIM">Intérim</option></select></div>
              <div class="fg"><label>Catégorie prof.</label>
                <select class="in" [(ngModel)]="form.professionalCategory" (ngModelChange)="onCategoryChange()">
                  <option [ngValue]="undefined">—</option>
                  @for (c of categories; track c.id) { <option [value]="c.code">{{ c.name }}</option> }
                </select>
              </div>
              <div class="fg"><label>Échelon</label>
                <select class="in" [(ngModel)]="form.echelonId" (ngModelChange)="onEchelonChange()" [disabled]="!form.professionalCategory">
                  <option [ngValue]="undefined">—</option>
                  @for (e of echelonsForCategory(); track e.id) { <option [ngValue]="e.id">{{ e.name }}</option> }
                </select>
              </div>
              <div class="fg"><label>Date début *</label><input type="date" class="in" [(ngModel)]="form.dateStart"></div>
              @if (form.type !== 'CDI') {
                <div class="fg"><label>Date fin *</label><input type="date" class="in" [(ngModel)]="form.dateEnd"></div>
              } @else {
                <div class="fg"><label>Date fin</label><input class="in" value="Indéterminée (CDI)" disabled></div>
              }
              <div class="fg"><label>Salaire de base *</label><input type="number" class="in" [(ngModel)]="form.wage"></div>
              <div class="fg"><label>Indemnité transport</label><input type="number" class="in" [(ngModel)]="form.primeTransport"></div>
              <div class="fg"><label>Indemnité logement</label><input type="number" class="in" [(ngModel)]="form.primeLogement"></div>
              <div class="fg"><label>Ind. représentation</label><input type="number" class="in" [(ngModel)]="form.primeRepresentation"></div>
              <div class="fg"><label>Prime de fonction</label><input type="number" class="in" [(ngModel)]="form.primeFonction"></div>
              <div class="fg"><label>Prime d'ancienneté</label><input type="number" class="in" [(ngModel)]="form.primeAnciennete"></div>
              <div class="fg"><label>Autres primes</label><input type="number" class="in" [(ngModel)]="form.autresPrimes"></div>
              <div class="fg"><label>État</label><select class="in" [(ngModel)]="form.state"><option value="DRAFT">Brouillon</option><option value="RUNNING">En cours</option><option value="CLOSED">Terminé</option></select></div>
            </div>
            <div style="margin-top:12px;font-weight:600;color:#7C3AED">Salaire brut estimé : {{ fmt(brut(form)) }} FCFA</div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showModal=false">Annuler</button>
            <button class="b b-primary" (click)="save()" [disabled]="saving">{{ saving ? 'Enregistrement…' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }
  `,
  styleUrls: ['../hr-shared.scss']
})
export class ContractsComponent implements OnInit {
  companyId!: number;
  contracts: EmployeeContract[] = [];
  employees: Employee[] = [];
  categories: ProfessionalCategory[] = [];
  echelons: Echelon[] = [];
  loading = false; showModal = false; saving = false; err = '';
  form: EmployeeContract = { employeeId: 0, companyId: 0 };
  canEdit = false;

  constructor(private hr: HrService, private auth: AuthService, private router: Router, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.companyId = this.auth.getCompanyId();
    this.canEdit = this.auth.hasPermission('RH', 'CONTRATS', 'EDIT') || this.auth.hasPermission('RH', 'CONTRATS', 'CREATE') || this.auth.isPrivileged();
    this.hr.getEmployees(this.companyId).subscribe(e => this.employees = e);
    this.hr.getProfessionalCategories(this.companyId).subscribe(c => this.categories = c);
    this.hr.getEchelons(this.companyId).subscribe(e => this.echelons = e);
    this.load();
  }

  load(): void {
    this.loading = true;
    this.hr.getContracts(this.companyId).subscribe({ next: c => { this.contracts = c; this.loading = false; }, error: () => this.loading = false });
  }

  empName(id: number) { const e = this.employees.find(x => x.id === id); return e ? `${e.lastName} ${e.firstName ?? ''}` : id; }
  brut(c: EmployeeContract): number {
    return (+c.wage! || 0) + (+c.primeTransport! || 0) + (+c.primeLogement! || 0) + (+c.primeRepresentation! || 0)
      + (+c.primeFonction! || 0) + (+c.primeAnciennete! || 0) + (+c.autresPrimes! || 0);
  }
  fmt(n?: number) { return new Intl.NumberFormat('fr-FR').format(Math.round(n || 0)); }
  stateLabel(s?: string) { return s === 'RUNNING' ? 'En cours' : s === 'CLOSED' ? 'Terminé' : s === 'CANCELLED' ? 'Annulé' : 'Brouillon'; }

  openCreate(): void { this.form = { employeeId: 0, companyId: this.companyId, type: 'CDI', state: 'RUNNING', wage: 0, primeTransport: 0, primeLogement: 0, primeRepresentation: 0, primeFonction: 0, primeAnciennete: 0, autresPrimes: 0 }; this.err = ''; this.showModal = true; }
  openEdit(c: EmployeeContract): void { this.form = { ...c }; this.err = ''; this.showModal = true; }

  /** Un CDI est par nature à durée indéterminée : on efface la date de fin en repassant sur CDI. */
  onTypeChange(): void {
    if (this.form.type === 'CDI') this.form.dateEnd = undefined;
  }

  echelonsForCategory(): Echelon[] {
    const cat = this.categories.find(c => c.code === this.form.professionalCategory);
    if (!cat) return [];
    return this.echelons.filter(e => e.professionalCategoryId === cat.id);
  }
  /** La catégorie change la liste d'échelons disponibles : l'échelon précédemment choisi n'est plus valide. */
  onCategoryChange(): void { this.form.echelonId = undefined; }
  /** Pré-remplit le salaire de base depuis la grille — reste ensuite librement modifiable (cas négociés au-dessus de la grille). */
  onEchelonChange(): void {
    const ech = this.echelons.find(e => e.id === this.form.echelonId);
    if (ech && ech.baseWage != null) this.form.wage = ech.baseWage;
  }

  setState(c: EmployeeContract, state: string): void {
    this.hr.setContractState(c.id!, state).subscribe({
      next: () => this.load(),
      error: err => this.notificationService.notify(err?.error?.message ?? 'Erreur.', 'error')
    });
  }
  view(c: EmployeeContract): void { this.router.navigate(['/hr/contracts', c.id]); }

  save(): void {
    if (!this.form.employeeId) { this.err = 'Sélectionnez un employé'; return; }
    if (!this.form.dateStart) { this.err = 'La date de début est obligatoire'; return; }
    if (this.form.type !== 'CDI' && !this.form.dateEnd) { this.err = 'La date de fin est obligatoire pour un ' + this.form.type; return; }
    this.form.companyId = this.companyId;
    this.saving = true;
    const obs = this.form.id ? this.hr.updateContract(this.form.id, this.form) : this.hr.saveContract(this.form);
    obs.subscribe({ next: () => { this.saving = false; this.showModal = false; this.load(); }, error: (e) => { this.saving = false; this.err = e.error?.message || 'Erreur'; } });
  }
}
