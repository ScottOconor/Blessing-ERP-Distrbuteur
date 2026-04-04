import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountingService } from '../../services/accounting.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountAccount } from '../../../../core/models/account.model';
import { ImportResult } from '../../../../core/models/import-result.model';

@Component({
  selector: 'app-chart-of-accounts',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './chart-of-accounts.component.html',
  styleUrl: './chart-of-accounts.component.scss'
})
export class ChartOfAccountsComponent implements OnInit {
  accounts: AccountAccount[] = [];
  filteredAccounts: AccountAccount[] = [];
  loading = false;
  searchTerm = '';
  selectedClass = '';
  showModal = false;
  editingAccount: AccountAccount | null = null;
  saving = false;
  successMsg = '';
  errorMsg = '';
  importing = false;

  accountForm!: FormGroup;

  accountTypes = [
    { value: 'asset_receivable', label: 'Créances clients' },
    { value: 'asset_cash', label: 'Liquidités' },
    { value: 'asset_current', label: 'Actif courant' },
    { value: 'asset_non_current', label: 'Actif non courant' },
    { value: 'asset_prepayments', label: 'Acomptes' },
    { value: 'asset_fixed', label: 'Immobilisations' },
    { value: 'liability_payable', label: 'Dettes fournisseurs' },
    { value: 'liability_credit_card', label: 'Carte de crédit' },
    { value: 'liability_current', label: 'Passif courant' },
    { value: 'liability_non_current', label: 'Passif non courant' },
    { value: 'equity', label: 'Capitaux propres' },
    { value: 'equity_unaffected', label: 'Résultats non affectés' },
    { value: 'income', label: 'Produits' },
    { value: 'income_other', label: 'Autres produits' },
    { value: 'expense', label: 'Charges' },
    { value: 'expense_depreciation', label: 'Amortissements' },
    { value: 'expense_direct_cost', label: 'Coût des ventes' },
    { value: 'off_balance', label: 'Hors bilan' }
  ];

  internalTypes = [
    { value: 'receivable', label: 'Créance' },
    { value: 'payable', label: 'Dette' },
    { value: 'liquidity', label: 'Liquidité' },
    { value: 'other', label: 'Autre' }
  ];

  classes = ['1', '2', '3', '4', '5', '6', '7', '8'];

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
      code: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      name: ['', Validators.required],
      accountType: ['other', Validators.required],
      internalType: ['other', Validators.required],
      deprecated: [false],
      reconcile: [false],
      companyId: [this.authService.getCompanyId()]
    });
  }

  loadAccounts(): void {
    this.loading = true;
    this.accountingService.getAccounts(this.authService.getCompanyId()).subscribe({
      next: (data) => {
        this.accounts = data.sort((a, b) => a.code.localeCompare(b.code));
        this.applyFilters();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  applyFilters(): void {
    let filtered = [...this.accounts];
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(a =>
        a.code.toLowerCase().includes(term) || a.name.toLowerCase().includes(term)
      );
    }
    if (this.selectedClass) {
      filtered = filtered.filter(a => a.code.startsWith(this.selectedClass));
    }
    this.filteredAccounts = filtered;
  }

  openCreate(): void {
    this.editingAccount = null;
    this.accountForm.reset({
      code: '',
      name: '',
      accountType: 'other',
      internalType: 'other',
      deprecated: false,
      reconcile: false,
      companyId: this.authService.getCompanyId()
    });
    this.showModal = true;
    this.errorMsg = '';
  }

  openEdit(account: AccountAccount): void {
    this.editingAccount = account;
    this.accountForm.patchValue(account);
    this.showModal = true;
    this.errorMsg = '';
  }

  closeModal(): void {
    this.showModal = false;
    this.editingAccount = null;
  }

  saveAccount(): void {
    if (this.accountForm.invalid) {
      this.accountForm.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.errorMsg = '';
    const data = this.accountForm.value as AccountAccount;

    const obs = this.editingAccount
      ? this.accountingService.updateAccount(this.editingAccount.id!, data)
      : this.accountingService.createAccount(data);

    obs.subscribe({
      next: () => {
        this.saving = false;
        this.closeModal();
        this.loadAccounts();
        this.showSuccess(this.editingAccount ? 'Compte modifié avec succès' : 'Compte créé avec succès');
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la sauvegarde';
      }
    });
  }

  toggleDeprecated(account: AccountAccount): void {
    this.accountingService.toggleAccountDeprecated(account.id!).subscribe({
      next: () => this.loadAccounts(),
      error: (err) => this.showError(err.error?.message || 'Erreur')
    });
  }

  getAccountClass(code: string): string {
    return code ? code[0] : '';
  }

  getAccountTypeLabel(type: string): string {
    return this.accountTypes.find(t => t.value === type)?.label || type;
  }

  onImport(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.importing = true;
    this.accountingService.importAccounts(file, this.authService.getCompanyId()).subscribe({
      next: (res: ImportResult) => {
        this.importing = false;
        (event.target as HTMLInputElement).value = '';
        const msg = `Import terminé : ${res.created} créés, ${res.updated} mis à jour`;
        this.showSuccess(msg);
        if (res.errors.length > 0) this.showError(res.errors.join(' | '));
        this.loadAccounts();
      },
      error: (err: any) => {
        this.importing = false;
        (event.target as HTMLInputElement).value = '';
        this.showError(err?.error?.message || 'Erreur lors de l\'import');
      }
    });
  }

  showSuccess(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 5000);
  }

  showError(msg: string): void {
    this.errorMsg = msg;
    setTimeout(() => this.errorMsg = '', 8000);
  }
}
