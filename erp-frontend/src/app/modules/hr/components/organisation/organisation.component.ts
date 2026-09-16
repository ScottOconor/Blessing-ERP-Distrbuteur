import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HrService, Department, JobPosition, Employee, ProfessionalCategory, Echelon } from '../../services/hr.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-hr-organisation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="hp">
      <div class="hp-head">
        <h1><span class="material-icons">account_tree</span> Organisation</h1>
      </div>

      <div class="org-grid">
        <!-- Départements -->
        <div class="org-col">
          <div class="org-col-head">
            <h2><span class="material-icons">apartment</span> Départements</h2>
            @if (canEdit) { <button class="b b-primary" (click)="openDept()"><span class="material-icons">add</span> Nouveau</button> }
          </div>
          @if (departments.length === 0) { <div class="empty">Aucun département.</div> }
          @else {
            <div class="tbl-wrap">
              <table class="tbl">
                <thead><tr><th>Nom</th><th>Code</th><th>Responsable</th><th></th></tr></thead>
                <tbody>
                  @for (d of departments; track d.id) {
                    <tr>
                      <td>{{ d.name }}</td>
                      <td>{{ d.code }}</td>
                      <td>{{ empName(d.managerId) }}</td>
                      <td class="ta-r">
                        @if (canEdit) {
                          <button class="b-icon" (click)="openDept(d)"><span class="material-icons">edit</span></button>
                          <button class="b-icon" (click)="delDept(d)"><span class="material-icons">delete_outline</span></button>
                        }
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          }
        </div>

        <!-- Postes -->
        <div class="org-col">
          <div class="org-col-head">
            <h2><span class="material-icons">work</span> Postes</h2>
            @if (canEdit) { <button class="b b-primary" (click)="openJob()"><span class="material-icons">add</span> Nouveau</button> }
          </div>
          @if (jobs.length === 0) { <div class="empty">Aucun poste.</div> }
          @else {
            <div class="tbl-wrap">
              <table class="tbl">
                <thead><tr><th>Nom</th><th>Département</th><th>Catégorie</th><th></th></tr></thead>
                <tbody>
                  @for (j of jobs; track j.id) {
                    <tr>
                      <td>{{ j.name }}</td>
                      <td>{{ deptName(j.departmentId) }}</td>
                      <td>{{ catName(j.category) }}</td>
                      <td class="ta-r">
                        @if (canEdit) {
                          <button class="b-icon" (click)="openJob(j)"><span class="material-icons">edit</span></button>
                          <button class="b-icon" (click)="delJob(j)"><span class="material-icons">delete_outline</span></button>
                        }
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          }
        </div>

        <!-- Catégories professionnelles -->
        <div class="org-col">
          <div class="org-col-head">
            <h2><span class="material-icons">stairs</span> Catégories professionnelles</h2>
            @if (canEdit) { <button class="b b-primary" (click)="openCat()"><span class="material-icons">add</span> Nouvelle</button> }
          </div>
          <div class="muted" style="font-size:.8rem;margin-bottom:10px">Grille salariale (convention collective) — utilisée dans Postes et Contrats.</div>
          @if (categories.length === 0) { <div class="empty">Aucune catégorie définie.</div> }
          @else {
            <div class="tbl-wrap">
              <table class="tbl">
                <thead><tr><th></th><th>Code</th><th>Libellé</th><th></th></tr></thead>
                <tbody>
                  @for (c of categories; track c.id) {
                    <tr class="cat-row" (click)="toggleCat(c)">
                      <td class="ta-c"><span class="material-icons chev">{{ expandedCatId === c.id ? 'expand_more' : 'chevron_right' }}</span></td>
                      <td><code>{{ c.code }}</code></td>
                      <td>{{ c.name }}</td>
                      <td class="ta-r">
                        @if (canEdit) {
                          <button class="b-icon" (click)="openCat(c); $event.stopPropagation()"><span class="material-icons">edit</span></button>
                          <button class="b-icon" (click)="delCat(c); $event.stopPropagation()"><span class="material-icons">delete_outline</span></button>
                        }
                      </td>
                    </tr>
                    @if (expandedCatId === c.id) {
                      <tr class="ech-row">
                        <td></td>
                        <td colspan="3">
                          <div class="ech-panel">
                            <div class="ech-head">
                              <span class="muted" style="font-size:.78rem">Échelons de « {{ c.name }} »</span>
                              @if (canEdit) { <button class="b b-sec b-sm" (click)="openEchelon(c.id!)"><span class="material-icons">add</span> Échelon</button> }
                            </div>
                            @if ((echelonsByCat[c.id!] ?? []).length === 0) { <div class="empty" style="padding:6px 0">Aucun échelon.</div> }
                            @else {
                              <table class="tbl tbl-nested">
                                <thead><tr><th>Code</th><th>Libellé</th><th class="ta-r">Salaire de base</th><th></th></tr></thead>
                                <tbody>
                                  @for (e of (echelonsByCat[c.id!] ?? []); track e.id) {
                                    <tr>
                                      <td><code>{{ e.code }}</code></td>
                                      <td>{{ e.name }}</td>
                                      <td class="ta-r">{{ fmt(e.baseWage) }}</td>
                                      <td class="ta-r">
                                        @if (canEdit) {
                                          <button class="b-icon" (click)="openEchelon(c.id!, e)"><span class="material-icons">edit</span></button>
                                          <button class="b-icon" (click)="delEchelon(c.id!, e)"><span class="material-icons">delete_outline</span></button>
                                        }
                                      </td>
                                    </tr>
                                  }
                                </tbody>
                              </table>
                            }
                          </div>
                        </td>
                      </tr>
                    }
                  }
                </tbody>
              </table>
            </div>
          }
        </div>
      </div>
    </div>

    @if (showDeptModal) {
      <div class="ov" (click)="showDeptModal=false">
        <div class="mdl" style="max-width:480px" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>{{ deptForm.id ? 'Modifier' : 'Nouveau' }} département</h3><button class="b-icon" (click)="showDeptModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg fg-2"><label>Nom *</label><input class="in" [(ngModel)]="deptForm.name"></div>
              <div class="fg"><label>Code</label><input class="in" [(ngModel)]="deptForm.code"></div>
              <div class="fg"><label>Responsable</label>
                <select class="in" [(ngModel)]="deptForm.managerId"><option [ngValue]="undefined">—</option>@for (e of employees; track e.id) { <option [ngValue]="e.id">{{ e.lastName }} {{ e.firstName }}</option> }</select>
              </div>
            </div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showDeptModal=false">Annuler</button>
            <button class="b b-primary" (click)="saveDept()" [disabled]="saving">{{ saving ? 'Enregistrement…' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }

    @if (showJobModal) {
      <div class="ov" (click)="showJobModal=false">
        <div class="mdl" style="max-width:480px" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>{{ jobForm.id ? 'Modifier' : 'Nouveau' }} poste</h3><button class="b-icon" (click)="showJobModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg fg-2"><label>Nom *</label><input class="in" [(ngModel)]="jobForm.name"></div>
              <div class="fg"><label>Département</label>
                <select class="in" [(ngModel)]="jobForm.departmentId"><option [ngValue]="undefined">—</option>@for (d of departments; track d.id) { <option [ngValue]="d.id">{{ d.name }}</option> }</select>
              </div>
              <div class="fg"><label>Catégorie prof.</label>
                <select class="in" [(ngModel)]="jobForm.category">
                  <option [ngValue]="undefined">—</option>
                  @for (c of categories; track c.id) { <option [value]="c.code">{{ c.name }}</option> }
                </select>
              </div>
              <div class="fg fg-2"><label>Description</label><input class="in" [(ngModel)]="jobForm.description"></div>
            </div>
            @if (categories.length === 0) {
              <div class="muted" style="font-size:.78rem;margin-top:8px">Aucune catégorie professionnelle définie — créez-en une dans la colonne « Catégories professionnelles ».</div>
            }
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showJobModal=false">Annuler</button>
            <button class="b b-primary" (click)="saveJob()" [disabled]="saving">{{ saving ? 'Enregistrement…' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }

    @if (showCatModal) {
      <div class="ov" (click)="showCatModal=false">
        <div class="mdl" style="max-width:460px" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>{{ catForm.id ? 'Modifier' : 'Nouvelle' }} catégorie professionnelle</h3><button class="b-icon" (click)="showCatModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg"><label>Code *</label><input class="in" [(ngModel)]="catForm.code" placeholder="Ex: 6A"></div>
              <div class="fg"><label>Séquence</label><input type="number" class="in" [(ngModel)]="catForm.sequence"></div>
              <div class="fg fg-2"><label>Libellé *</label><input class="in" [(ngModel)]="catForm.name" placeholder="Ex: Catégorie 6A - Chef de service"></div>
              <div class="fg"><label>Actif</label><select class="in" [(ngModel)]="catForm.active"><option [ngValue]="true">Oui</option><option [ngValue]="false">Non</option></select></div>
            </div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showCatModal=false">Annuler</button>
            <button class="b b-primary" (click)="saveCat()" [disabled]="saving">{{ saving ? 'Enregistrement…' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }

    @if (showEchelonModal) {
      <div class="ov" (click)="showEchelonModal=false">
        <div class="mdl" style="max-width:460px" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>{{ echelonForm.id ? 'Modifier' : 'Nouvel' }} échelon</h3><button class="b-icon" (click)="showEchelonModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg"><label>Code *</label><input class="in" [(ngModel)]="echelonForm.code" placeholder="Ex: A"></div>
              <div class="fg"><label>Séquence</label><input type="number" class="in" [(ngModel)]="echelonForm.sequence"></div>
              <div class="fg fg-2"><label>Libellé *</label><input class="in" [(ngModel)]="echelonForm.name" placeholder="Ex: Échelon A"></div>
              <div class="fg fg-2"><label>Salaire de base</label><input type="number" class="in" [(ngModel)]="echelonForm.baseWage"></div>
              <div class="fg"><label>Actif</label><select class="in" [(ngModel)]="echelonForm.active"><option [ngValue]="true">Oui</option><option [ngValue]="false">Non</option></select></div>
            </div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showEchelonModal=false">Annuler</button>
            <button class="b b-primary" (click)="saveEchelonForm()" [disabled]="saving">{{ saving ? 'Enregistrement…' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .org-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; align-items: start; }
    .org-col-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
    .org-col-head h2 { display: flex; align-items: center; gap: 8px; font-size: 1rem; font-weight: 700; margin: 0; color: var(--text-primary); }
    .org-col-head h2 .material-icons { color: #7C3AED; font-size: 20px; }
    @media (max-width: 1300px) { .org-grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 900px) { .org-grid { grid-template-columns: 1fr; } }
    .cat-row { cursor: pointer; }
    .ta-c { text-align: center; }
    .chev { font-size: 18px; color: var(--text-muted); }
    .ech-row td { padding: 0 0 10px; border-bottom: 1px solid var(--border-light); }
    .ech-panel { background: var(--bg-elevated); border-radius: var(--radius-md); padding: 10px 12px; margin: 0 4px; }
    .ech-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
    .b-sm { padding: 4px 10px; font-size: .78rem; }
    .tbl-nested { font-size: .82rem; }
    .tbl-nested th, .tbl-nested td { padding: 6px 8px; }
  `],
  styleUrls: ['../hr-shared.scss']
})
export class OrganisationComponent implements OnInit {
  companyId!: number;
  departments: Department[] = [];
  jobs: JobPosition[] = [];
  employees: Employee[] = [];
  categories: ProfessionalCategory[] = [];
  canEdit = false;
  saving = false; err = '';

  showDeptModal = false;
  deptForm: Department = { name: '', companyId: 0 };
  showJobModal = false;
  jobForm: JobPosition = { name: '', companyId: 0 };
  showCatModal = false;
  catForm: ProfessionalCategory = { name: '', code: '', companyId: 0 };

  expandedCatId: number | null = null;
  echelonsByCat: Partial<Record<number, Echelon[]>> = {};
  showEchelonModal = false;
  echelonForm: Echelon = { name: '', code: '', professionalCategoryId: 0, companyId: 0 };

  constructor(private hr: HrService, private auth: AuthService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.companyId = this.auth.getCompanyId();
    this.canEdit = this.auth.hasPermission('RH', 'EMPLOYES', 'EDIT') || this.auth.isPrivileged();
    this.load();
  }

  load(): void {
    this.hr.getDepartments(this.companyId).subscribe(d => this.departments = d);
    this.hr.getJobs(this.companyId).subscribe(j => this.jobs = j);
    this.hr.getEmployees(this.companyId).subscribe(e => this.employees = e);
    this.hr.getProfessionalCategories(this.companyId).subscribe(c => this.categories = c);
  }

  deptName(id?: number) { return this.departments.find(d => d.id === id)?.name ?? ''; }
  empName(id?: number) { const e = this.employees.find(x => x.id === id); return e ? `${e.lastName} ${e.firstName ?? ''}` : ''; }
  catName(code?: string) { return this.categories.find(c => c.code === code)?.name ?? code ?? ''; }

  openDept(d?: Department): void { this.deptForm = d ? { ...d } : { name: '', companyId: this.companyId }; this.err = ''; this.showDeptModal = true; }
  saveDept(): void {
    if (!this.deptForm.name) { this.err = 'Le nom est obligatoire'; return; }
    this.deptForm.companyId = this.companyId;
    this.saving = true;
    this.hr.saveDepartment(this.deptForm).subscribe({
      next: () => { this.saving = false; this.showDeptModal = false; this.load(); },
      error: (e) => { this.saving = false; this.err = e.error?.message || 'Erreur'; }
    });
  }
  delDept(d: Department): void {
    if (!confirm(`Supprimer le département « ${d.name} » ?`)) return;
    this.hr.deleteDepartment(d.id!).subscribe({
      next: () => this.load(),
      error: err => this.notificationService.notify(err?.error?.message ?? 'Erreur lors de la suppression.', 'error')
    });
  }

  openJob(j?: JobPosition): void { this.jobForm = j ? { ...j } : { name: '', companyId: this.companyId }; this.err = ''; this.showJobModal = true; }
  saveJob(): void {
    if (!this.jobForm.name) { this.err = 'Le nom est obligatoire'; return; }
    this.jobForm.companyId = this.companyId;
    this.saving = true;
    this.hr.saveJob(this.jobForm).subscribe({
      next: () => { this.saving = false; this.showJobModal = false; this.load(); },
      error: (e) => { this.saving = false; this.err = e.error?.message || 'Erreur'; }
    });
  }
  delJob(j: JobPosition): void {
    if (!confirm(`Supprimer le poste « ${j.name} » ?`)) return;
    this.hr.deleteJob(j.id!).subscribe({
      next: () => this.load(),
      error: err => this.notificationService.notify(err?.error?.message ?? 'Erreur lors de la suppression.', 'error')
    });
  }

  openCat(c?: ProfessionalCategory): void { this.catForm = c ? { ...c } : { name: '', code: '', companyId: this.companyId, sequence: 10, active: true }; this.err = ''; this.showCatModal = true; }
  saveCat(): void {
    if (!this.catForm.name || !this.catForm.code) { this.err = 'Code et libellé sont obligatoires'; return; }
    this.catForm.companyId = this.companyId;
    this.saving = true;
    const obs = this.catForm.id ? this.hr.updateProfessionalCategory(this.catForm.id, this.catForm) : this.hr.saveProfessionalCategory(this.catForm);
    obs.subscribe({
      next: () => { this.saving = false; this.showCatModal = false; this.load(); },
      error: (e) => { this.saving = false; this.err = e.error?.message || 'Erreur'; }
    });
  }
  delCat(c: ProfessionalCategory): void {
    if (!confirm(`Supprimer la catégorie « ${c.name} » ?`)) return;
    this.hr.deleteProfessionalCategory(c.id!).subscribe({
      next: () => this.load(),
      error: err => this.notificationService.notify(err?.error?.message ?? 'Erreur lors de la suppression.', 'error')
    });
  }

  fmt(n?: number) { return new Intl.NumberFormat('fr-FR').format(Math.round(n || 0)); }

  toggleCat(c: ProfessionalCategory): void {
    if (this.expandedCatId === c.id) { this.expandedCatId = null; return; }
    this.expandedCatId = c.id!;
    if (!this.echelonsByCat[c.id!]) {
      this.hr.getEchelons(this.companyId, c.id!).subscribe(list => this.echelonsByCat[c.id!] = list);
    }
  }

  openEchelon(professionalCategoryId: number, e?: Echelon): void {
    this.echelonForm = e ? { ...e } : { name: '', code: '', professionalCategoryId, companyId: this.companyId, sequence: 10, active: true, baseWage: 0 };
    this.err = '';
    this.showEchelonModal = true;
  }
  saveEchelonForm(): void {
    if (!this.echelonForm.name || !this.echelonForm.code) { this.err = 'Code et libellé sont obligatoires'; return; }
    this.echelonForm.companyId = this.companyId;
    this.saving = true;
    const catId = this.echelonForm.professionalCategoryId;
    const obs = this.echelonForm.id ? this.hr.updateEchelon(this.echelonForm.id, this.echelonForm) : this.hr.saveEchelon(this.echelonForm);
    obs.subscribe({
      next: () => {
        this.saving = false; this.showEchelonModal = false;
        this.hr.getEchelons(this.companyId, catId).subscribe(list => this.echelonsByCat[catId] = list);
      },
      error: (e) => { this.saving = false; this.err = e.error?.message || 'Erreur'; }
    });
  }
  delEchelon(catId: number, e: Echelon): void {
    if (!confirm(`Supprimer l'échelon « ${e.name} » ?`)) return;
    this.hr.deleteEchelon(e.id!).subscribe({
      next: () => this.hr.getEchelons(this.companyId, catId).subscribe(list => this.echelonsByCat[catId] = list),
      error: err => this.notificationService.notify(err?.error?.message ?? 'Erreur lors de la suppression.', 'error')
    });
  }
}
