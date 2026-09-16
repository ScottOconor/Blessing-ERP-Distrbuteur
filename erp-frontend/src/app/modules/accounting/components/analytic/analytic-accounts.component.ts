import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnalyticService, AnalyticAccount } from '../../services/analytic.service';
import { AccountingService } from '../../services/accounting.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-analytic-accounts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './analytic-accounts.component.html',
  styleUrl: './analytic-accounts.component.scss'
})
export class AnalyticAccountsComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  accounts: AnalyticAccount[] = [];
  flatAccounts: AnalyticAccount[] = [];
  loading = false;
  recalculating = false;
  showForm = false;
  editMode = false;
  errorMsg = '';
  successMsg = '';
  downloadingTemplate = false;
  importing = false;

  form: AnalyticAccount = this.emptyForm();
  companyId = 1;

  constructor(
    private analyticService: AnalyticService,
    private accountingService: AccountingService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId();
    this.load();
  }

  load(): void {
    this.loading = true;
    // Charger à plat pour le select parent
    this.analyticService.getAccounts(this.companyId).subscribe({
      next: (all) => {
        this.flatAccounts = all;
        // Construire l'arborescence
        this.accounts = this.buildTree(all);
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  buildTree(list: AnalyticAccount[]): AnalyticAccount[] {
    const map = new Map<number, AnalyticAccount>();
    list.forEach(a => map.set(a.id!, { ...a, children: [] }));
    const roots: AnalyticAccount[] = [];
    list.forEach(a => {
      const node = map.get(a.id!)!;
      if (a.parentId) {
        const parent = map.get(a.parentId);
        if (parent) parent.children = [...(parent.children || []), node];
      } else {
        roots.push(node);
      }
    });
    return roots;
  }

  openNew(): void {
    this.form = this.emptyForm();
    this.editMode = false;
    this.showForm = true;
    this.errorMsg = '';
  }

  openEdit(account: AnalyticAccount): void {
    this.form = { ...account };
    this.editMode = true;
    this.showForm = true;
    this.errorMsg = '';
  }

  closeForm(): void {
    this.showForm = false;
  }

  save(): void {
    if (!this.form.code.trim()) { this.errorMsg = 'Le code est obligatoire'; return; }
    if (!this.form.name.trim()) { this.errorMsg = 'Le nom est obligatoire'; return; }

    this.form.companyId = this.companyId;
    const obs = this.editMode && this.form.id
      ? this.analyticService.updateAccount(this.form.id, this.form)
      : this.analyticService.createAccount(this.form);

    obs.subscribe({
      next: () => {
        this.showForm = false;
        this.successMsg = this.editMode ? 'Compte mis à jour' : 'Compte créé';
        setTimeout(() => this.successMsg = '', 3000);
        this.load();
      },
      error: (err) => { this.errorMsg = err.error?.message || 'Erreur lors de la sauvegarde'; }
    });
  }

  delete(account: AnalyticAccount): void {
    if (!confirm(`Archiver le compte "${account.name}" ?`)) return;
    this.analyticService.deleteAccount(account.id!).subscribe({
      next: () => {
        this.successMsg = 'Compte archivé';
        setTimeout(() => this.successMsg = '', 3000);
        this.load();
      },
      error: (err) => { this.errorMsg = err.error?.message || 'Erreur'; }
    });
  }

  recalculate(): void {
    this.recalculating = true;
    this.analyticService.recalculate(this.companyId).subscribe({
      next: (res) => {
        this.recalculating = false;
        this.successMsg = res.message;
        setTimeout(() => this.successMsg = '', 4000);
      },
      error: () => {
        this.recalculating = false;
        this.errorMsg = 'Erreur lors du recalcul';
      }
    });
  }

  downloadTemplate(): void {
    this.downloadingTemplate = true;
    this.accountingService.downloadAnalyticAccountsTemplate().subscribe({
      next: (blob) => {
        this.downloadingTemplate = false;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url;
        a.download = 'modele_comptes_analytiques.xlsx'; a.click();
        URL.revokeObjectURL(url);
      },
      error: () => { this.downloadingTemplate = false; this.errorMsg = 'Erreur téléchargement modèle'; }
    });
  }

  onImport(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    input.value = '';
    this.importing = true;
    this.errorMsg = '';
    this.accountingService.importAnalyticAccounts(file, this.companyId).subscribe({
      next: (res) => {
        this.importing = false;
        this.successMsg = `Import terminé — ${res.created} créés, ${res.updated} mis à jour`;
        if (res.errors?.length > 0) this.errorMsg = res.errors.slice(0, 3).join(' | ');
        setTimeout(() => this.successMsg = '', 4000);
        this.load();
      },
      error: (err) => {
        this.importing = false;
        this.errorMsg = err?.error?.message || 'Erreur lors de l\'import';
      }
    });
  }

  emptyForm(): AnalyticAccount {
    return { code: '', name: '', description: '', parentId: null, companyId: 1, active: true };
  }

  getParentLabel(parentId?: number | null): string {
    if (!parentId) return '—';
    return this.flatAccounts.find(a => a.id === parentId)?.name || '—';
  }

  getDepth(account: AnalyticAccount): number {
    let depth = 0;
    let currentId: number | null | undefined = account.parentId;
    const visited = new Set<number>();
    while (currentId) {
      if (visited.has(currentId)) break;
      visited.add(currentId);
      depth++;
      currentId = this.flatAccounts.find(a => a.id === currentId)?.parentId;
    }
    return depth;
  }

  getSortedAccounts(): AnalyticAccount[] {
    // Tri : racines d'abord, puis enfants juste après leur parent
    const result: AnalyticAccount[] = [];
    const roots = this.flatAccounts.filter(a => !a.parentId);
    const addWithChildren = (acc: AnalyticAccount) => {
      result.push(acc);
      this.flatAccounts.filter(a => a.parentId === acc.id).forEach(child => addWithChildren(child));
    };
    roots.forEach(r => addWithChildren(r));
    return result;
  }
}
