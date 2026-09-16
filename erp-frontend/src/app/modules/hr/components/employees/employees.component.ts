import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HrService, Employee, Department, JobPosition } from '../../services/hr.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-hr-employees',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="hp">
      <div class="hp-head">
        <h1><span class="material-icons">groups</span> Employés</h1>
        @if (canEdit) { <button class="b b-primary" (click)="openCreate()"><span class="material-icons">add</span> Nouvel employé</button> }
      </div>

      @if (loading) { <div class="muted">Chargement…</div> }
      @else if (employees.length === 0) { <div class="empty">Aucun employé. Cliquez sur « Nouvel employé ».</div> }
      @else {
        <div class="tbl-wrap">
          <table class="tbl">
            <thead><tr><th>Matricule</th><th>Nom</th><th>Poste</th><th>Département</th><th>Téléphone</th><th>N° CNPS</th><th>Statut</th><th></th></tr></thead>
            <tbody>
              @for (e of employees; track e.id) {
                <tr>
                  <td>{{ e.matricule }}</td>
                  <td><strong>{{ e.lastName }}</strong> {{ e.firstName }}</td>
                  <td>{{ jobName(e.jobId) }}</td>
                  <td>{{ deptName(e.departmentId) }}</td>
                  <td>{{ e.phone }}</td>
                  <td>{{ e.cnpsNumber }}</td>
                  <td><span class="badge" [class.ok]="e.status==='ACTIF'">{{ e.status }}</span></td>
                  <td class="ta-r">
                    @if (canEdit) { <button class="b-icon" (click)="openEdit(e)"><span class="material-icons">edit</span></button> }
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
          <div class="mdl-h"><h3>{{ form.id ? 'Modifier' : 'Nouvel' }} employé</h3><button class="b-icon" (click)="showModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg"><label>Nom *</label><input class="in" [(ngModel)]="form.lastName"></div>
              <div class="fg"><label>Prénom</label><input class="in" [(ngModel)]="form.firstName"></div>
              <div class="fg"><label>Matricule</label><input class="in" [(ngModel)]="form.matricule" placeholder="auto"></div>
              <div class="fg"><label>Sexe</label><select class="in" [(ngModel)]="form.gender"><option value="M">Masculin</option><option value="F">Féminin</option></select></div>
              <div class="fg"><label>Date de naissance</label><input type="date" class="in" [(ngModel)]="form.birthDate"></div>
              <div class="fg"><label>Lieu de naissance</label><input class="in" [(ngModel)]="form.birthPlace"></div>
              <div class="fg"><label>Nationalité</label><input class="in" [(ngModel)]="form.nationality"></div>
              <div class="fg"><label>CNI</label><input class="in" [(ngModel)]="form.cni"></div>
              <div class="fg"><label>Situation familiale</label>
                <select class="in" [(ngModel)]="form.maritalStatus"><option value="CELIBATAIRE">Célibataire</option><option value="MARIE">Marié(e)</option><option value="DIVORCE">Divorcé(e)</option><option value="VEUF">Veuf(ve)</option></select></div>
              <div class="fg"><label>Nombre d'enfants</label><input type="number" class="in" [(ngModel)]="form.childrenCount"></div>
              <div class="fg"><label>Téléphone</label><input class="in" [(ngModel)]="form.phone"></div>
              <div class="fg"><label>Email</label><input class="in" [(ngModel)]="form.email"></div>
              <div class="fg fg-2"><label>Adresse</label><input class="in" [(ngModel)]="form.address"></div>
              <div class="fg"><label>Département</label><select class="in" [(ngModel)]="form.departmentId"><option [ngValue]="undefined">—</option>@for (d of departments; track d.id) { <option [ngValue]="d.id">{{ d.name }}</option> }</select></div>
              <div class="fg"><label>Poste</label><select class="in" [(ngModel)]="form.jobId"><option [ngValue]="undefined">—</option>@for (j of jobs; track j.id) { <option [ngValue]="j.id">{{ j.name }}</option> }</select></div>
              <div class="fg"><label>Date d'embauche</label><input type="date" class="in" [(ngModel)]="form.hireDate"></div>
              <div class="fg"><label>N° CNPS</label><input class="in" [(ngModel)]="form.cnpsNumber"></div>
              <div class="fg"><label>NIU</label><input class="in" [(ngModel)]="form.niu"></div>
              <div class="fg"><label>Banque</label><input class="in" [(ngModel)]="form.bankName"></div>
              <div class="fg"><label>N° de compte</label><input class="in" [(ngModel)]="form.bankAccount"></div>
              <div class="fg"><label>Mode de paiement</label><select class="in" [(ngModel)]="form.paymentMode"><option value="VIREMENT">Virement</option><option value="ESPECES">Espèces</option><option value="MOBILE_MONEY">Mobile Money</option></select></div>
              <div class="fg"><label>Statut</label><select class="in" [(ngModel)]="form.status"><option value="ACTIF">Actif</option><option value="SUSPENDU">Suspendu</option><option value="SORTI">Sorti</option></select></div>
            </div>
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
export class EmployeesComponent implements OnInit {
  companyId!: number;
  employees: Employee[] = [];
  departments: Department[] = [];
  jobs: JobPosition[] = [];
  loading = false; showModal = false; saving = false; err = '';
  form: Employee = { lastName: '', companyId: 0 };
  canEdit = false;

  constructor(private hr: HrService, private auth: AuthService) {}

  ngOnInit(): void {
    this.companyId = this.auth.getCompanyId();
    this.canEdit = this.auth.hasPermission('RH', 'EMPLOYES', 'EDIT') || this.auth.hasPermission('RH', 'EMPLOYES', 'CREATE') || this.auth.isPrivileged();
    this.load();
    this.hr.getDepartments(this.companyId).subscribe(d => this.departments = d);
    this.hr.getJobs(this.companyId).subscribe(j => this.jobs = j);
  }

  load(): void {
    this.loading = true;
    this.hr.getEmployees(this.companyId).subscribe({ next: e => { this.employees = e; this.loading = false; }, error: () => this.loading = false });
  }

  deptName(id?: number) { return this.departments.find(d => d.id === id)?.name ?? ''; }
  jobName(id?: number) { return this.jobs.find(j => j.id === id)?.name ?? ''; }

  openCreate(): void { this.form = { lastName: '', companyId: this.companyId, gender: 'M', maritalStatus: 'CELIBATAIRE', paymentMode: 'VIREMENT', status: 'ACTIF', childrenCount: 0 }; this.err = ''; this.showModal = true; }
  openEdit(e: Employee): void { this.form = { ...e }; this.err = ''; this.showModal = true; }

  save(): void {
    if (!this.form.lastName) { this.err = 'Le nom est obligatoire'; return; }
    this.form.companyId = this.companyId;
    this.saving = true;
    const obs = this.form.id ? this.hr.updateEmployee(this.form.id, this.form) : this.hr.createEmployee(this.form);
    obs.subscribe({ next: () => { this.saving = false; this.showModal = false; this.load(); }, error: (e) => { this.saving = false; this.err = e.error?.message || 'Erreur'; } });
  }
}
