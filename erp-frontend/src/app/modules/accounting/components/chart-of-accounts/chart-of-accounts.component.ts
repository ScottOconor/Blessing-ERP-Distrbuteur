import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountingService } from '../../services/accounting.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountAccount } from '../../../../core/models/account.model';
import { ImportResult } from '../../../../core/models/import-result.model';
import { parseExcelFile } from '../../../../core/utils/excel-import.util';

interface ClassGroup {
  cls: string;
  label: string;
  color: string;
  accounts: AccountAccount[];
}

@Component({
  selector: 'app-chart-of-accounts',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './chart-of-accounts.component.html',
  styleUrl: './chart-of-accounts.component.scss'
})
export class ChartOfAccountsComponent implements OnInit {
  accounts: AccountAccount[] = [];
  loading = false;
  searchTerm = '';
  selectedClass = '';
  viewMode: 'grouped' | 'flat' = 'grouped';
  expandedClasses = new Set<string>(); // fermé par défaut

  showModal = false;
  editingAccount: AccountAccount | null = null;
  saving = false;
  successMsg = '';
  errorMsg = '';

  // ── Import ─────────────────────────────────────────────────────────────
  importing = false;
  downloadingTemplate = false;
  showPreview = false;
  previewRows: Record<string, any>[] = [];
  previewHeaders: string[] = [];
  pendingFile: File | null = null;
  previewLoading = false;
  importResult: ImportResult | null = null;
  readonly PREVIEW_MAX = 200;

  readonly CLASS_META: Record<string, { label: string; color: string }> = {
    '1': { label: 'Ressources durables',          color: '#7c3aed' },
    '2': { label: 'Actif immobilisé',              color: '#2563eb' },
    '3': { label: 'Stocks',                        color: '#0891b2' },
    '4': { label: 'Tiers',                         color: '#059669' },
    '5': { label: 'Trésorerie',                    color: '#16a34a' },
    '6': { label: 'Charges',                       color: '#dc2626' },
    '7': { label: 'Produits',                      color: '#d97706' },
    '8': { label: 'Autres charges & produits',     color: '#6b7280' },
    '9': { label: 'Comptabilité analytique',       color: '#9333ea' },
  };

  readonly previewCols = [
    { key: 'code',         label: 'Code'     },
    { key: 'name',         label: 'Intitulé' },
    { key: 'account_type', label: 'Type'     },
    { key: 'reconcile',    label: 'Lettrage' },
  ];

  accountForm!: FormGroup;

  accountTypes = [
    { value: 'asset_receivable',    label: 'Créances clients'       },
    { value: 'asset_cash',          label: 'Liquidités'             },
    { value: 'asset_current',       label: 'Actif courant'          },
    { value: 'asset_non_current',   label: 'Actif non courant'      },
    { value: 'asset_prepayments',   label: 'Acomptes'               },
    { value: 'asset_fixed',         label: 'Immobilisations'        },
    { value: 'liability_payable',   label: 'Dettes fournisseurs'    },
    { value: 'liability_credit_card', label: 'Carte de crédit'      },
    { value: 'liability_current',   label: 'Passif courant'         },
    { value: 'liability_non_current', label: 'Passif non courant'   },
    { value: 'equity',              label: 'Capitaux propres'       },
    { value: 'equity_unaffected',   label: 'Résultats non affectés' },
    { value: 'income',              label: 'Produits'               },
    { value: 'income_other',        label: 'Autres produits'        },
    { value: 'expense',             label: 'Charges'                },
    { value: 'expense_depreciation', label: 'Amortissements'        },
    { value: 'expense_direct_cost', label: 'Coût des ventes'        },
    { value: 'off_balance',         label: 'Hors bilan'             }
  ];

  internalTypes = [
    { value: 'receivable', label: 'Créance'   },
    { value: 'payable',    label: 'Dette'     },
    { value: 'liquidity',  label: 'Liquidité' },
    { value: 'other',      label: 'Autre'     }
  ];

  constructor(
    private accountingService: AccountingService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.loadAccounts();
  }

  buildForm(): void {
    this.accountForm = this.fb.group({
      code:         ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      name:         ['', Validators.required],
      accountType:  ['other', Validators.required],
      internalType: ['other', Validators.required],
      deprecated:   [false],
      reconcile:    [false],
      companyId:    [this.authService.getCompanyId()]
    });
  }

  loadAccounts(): void {
    this.loading = true;
    this.accountingService.getAccounts(this.authService.getCompanyId()).subscribe({
      next: (data) => {
        this.accounts = data.sort((a, b) => a.code.localeCompare(b.code));
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  // ── Vue groupée ────────────────────────────────────────────────────────
  get filteredAccounts(): AccountAccount[] {
    let list = [...this.accounts];
    if (this.searchTerm) {
      const t = this.searchTerm.toLowerCase();
      list = list.filter(a => a.code.toLowerCase().includes(t) || a.name.toLowerCase().includes(t));
    }
    if (this.selectedClass) list = list.filter(a => a.code.startsWith(this.selectedClass));
    return list;
  }

  get classGroups(): ClassGroup[] {
    const groups: ClassGroup[] = [];
    const present = new Set(this.filteredAccounts.map(a => a.code[0]).filter(Boolean));
    for (const cls of ['1','2','3','4','5','6','7','8','9']) {
      if (!present.has(cls) && this.selectedClass && this.selectedClass !== cls) continue;
      const accounts = this.filteredAccounts.filter(a => a.code.startsWith(cls));
      if (accounts.length === 0 && !this.searchTerm && !this.selectedClass) continue;
      if (accounts.length === 0) continue;
      const meta = this.CLASS_META[cls] || { label: `Classe ${cls}`, color: '#6b7280' };
      groups.push({ cls, label: meta.label, color: meta.color, accounts });
    }
    return groups;
  }

  toggleClass(cls: string): void {
    if (this.expandedClasses.has(cls)) this.expandedClasses.delete(cls);
    else this.expandedClasses.add(cls);
  }

  expandAll():   void { ['1','2','3','4','5','6','7','8','9'].forEach(c => this.expandedClasses.add(c)); }
  collapseAll(): void { this.expandedClasses.clear(); }

  get totalFiltered(): number { return this.filteredAccounts.length; }

  // ── CRUD ──────────────────────────────────────────────────────────────
  openCreate(): void {
    this.editingAccount = null;
    this.accountForm.reset({ code: '', name: '', accountType: 'other', internalType: 'other',
      deprecated: false, reconcile: false, companyId: this.authService.getCompanyId() });
    this.showModal = true;
    this.errorMsg = '';
  }

  openEdit(account: AccountAccount): void {
    this.editingAccount = account;
    this.accountForm.patchValue(account);
    this.showModal = true;
    this.errorMsg = '';
  }

  closeModal(): void { this.showModal = false; this.editingAccount = null; }

  saveAccount(): void {
    if (this.accountForm.invalid) { this.accountForm.markAllAsTouched(); return; }
    this.saving = true;
    this.errorMsg = '';
    const data = this.accountForm.value as AccountAccount;
    const obs = this.editingAccount
      ? this.accountingService.updateAccount(this.editingAccount.id!, data)
      : this.accountingService.createAccount(data);
    obs.subscribe({
      next: () => { this.saving = false; this.closeModal(); this.loadAccounts();
        this.showSuccess(this.editingAccount ? 'Compte modifié' : 'Compte créé'); },
      error: (err) => { this.saving = false; this.errorMsg = err.error?.message || 'Erreur'; }
    });
  }

  toggleDeprecated(account: AccountAccount): void {
    this.accountingService.toggleAccountDeprecated(account.id!).subscribe({
      next: () => this.loadAccounts(),
      error: (err) => this.showError(err.error?.message || 'Erreur')
    });
  }

  // ── Import ─────────────────────────────────────────────────────────────
  downloadTemplate(): void {
    this.downloadingTemplate = true;
    this.accountingService.downloadAccountsTemplate().subscribe({
      next: (blob) => {
        this.downloadingTemplate = false;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url;
        a.download = 'modele_plan_comptable.xlsx'; a.click();
        URL.revokeObjectURL(url);
      },
      error: () => { this.downloadingTemplate = false; this.showError('Erreur téléchargement modèle'); }
    });
  }

  async onImport(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file  = input.files?.[0];
    if (!file) return;
    input.value = '';
    this.previewLoading = true;
    this.pendingFile    = file;
    this.errorMsg = '';
    this.importResult = null;
    try {
      const allRows       = await parseExcelFile(file);
      const colSet        = new Set<string>();
      allRows.forEach(r => Object.keys(r).forEach(k => colSet.add(k)));
      this.previewHeaders = Array.from(colSet);
      this.previewRows    = allRows.slice(0, this.PREVIEW_MAX);
      this.showPreview    = true;
    } catch (e: any) {
      this.showError('Impossible de lire le fichier : ' + e.message);
      this.pendingFile = null;
    }
    this.previewLoading = false;
  }

  confirmImport(): void {
    if (!this.pendingFile) return;
    this.showPreview = false;
    this.importing   = true;
    this.errorMsg    = '';
    this.importResult = null;
    this.accountingService.importAccounts(this.pendingFile, this.authService.getCompanyId(), true).subscribe({
      next: (res: ImportResult) => {
        this.importing    = false;
        this.pendingFile  = null;
        this.importResult = res;
        this.showSuccess(`Import terminé — ${res.created} créés, ${res.updated} mis à jour, ${res.skipped ?? 0} ignorés`);
        if (res.errors?.length > 0) this.showError(res.errors.slice(0, 3).join(' | '));
        this.loadAccounts();
      },
      error: (err: any) => {
        this.importing   = false;
        this.pendingFile = null;
        this.showError(err?.error?.message || 'Erreur lors de l\'import');
      }
    });
  }

  closePreview(): void {
    this.showPreview    = false;
    this.previewRows    = [];
    this.previewHeaders = [];
    this.pendingFile    = null;
  }

  get pendingFileName(): string { return this.pendingFile?.name ?? ''; }
  get pendingFileSize(): string {
    const b = this.pendingFile?.size ?? 0;
    return b > 1024 * 1024 ? (b / 1024 / 1024).toFixed(1) + ' Mo' : (b / 1024).toFixed(0) + ' Ko';
  }

  isActiveCol(h: string): boolean {
    return this.previewCols.some(c => c.key.toLowerCase() === h.toLowerCase());
  }

  getCellValue(row: Record<string, any>, col: { key: string }): string {
    return String(row[col.key] ?? row[col.key.toLowerCase()] ?? '');
  }

  getAccountTypeLabel(type: string): string {
    return this.accountTypes.find(t => t.value === type)?.label || type;
  }

  showSuccess(msg: string): void { this.successMsg = msg; setTimeout(() => this.successMsg = '', 5000); }
  showError(msg: string):   void { this.errorMsg   = msg; setTimeout(() => this.errorMsg   = '', 8000); }
}
