import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountingService, JournalPreviewRow } from '../../services/accounting.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountJournal, AccountAccount } from '../../../../core/models/account.model';
import { ImportResult } from '../../../../core/models/import-result.model';

@Component({
  selector: 'app-journals',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './journals.component.html',
  styleUrl: './journals.component.scss'
})
export class JournalsComponent implements OnInit {
  journals: AccountJournal[] = [];
  accounts: AccountAccount[] = [];
  loading = false;
  showModal = false;
  editingJournal: AccountJournal | null = null;
  saving = false;
  successMsg = '';
  errorMsg = '';
  importing = false;
  previewing = false;
  showPreviewModal = false;
  previewRows: JournalPreviewRow[] = [];
  pendingFile: File | null = null;

  journalForm!: FormGroup;

  journalTypes = [
    { value: 'sale', label: 'Vente', icon: 'shopping_cart' },
    { value: 'purchase', label: 'Achat', icon: 'local_shipping' },
    { value: 'cash', label: 'Caisse', icon: 'payments' },
    { value: 'bank', label: 'Banque', icon: 'account_balance' },
    { value: 'general', label: 'Opérations diverses', icon: 'sync_alt' }
  ];

  constructor(
    private accountingService: AccountingService,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.loadData();
  }

  buildForm(): void {
    this.journalForm = this.fb.group({
      code: ['', [Validators.required, Validators.maxLength(10)]],
      name: ['', Validators.required],
      type: ['general', Validators.required],
      defaultDebitAccountId: [null],
      defaultCreditAccountId: [null],
      active: [true],
      companyId: [this.authService.getCompanyId()]
    });
  }

  loadData(): void {
    this.loading = true;
    const companyId = this.authService.getCompanyId();
    this.accountingService.getJournals(companyId).subscribe({
      next: (data) => { this.journals = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
    this.accountingService.getAccounts(companyId).subscribe({
      next: (data) => this.accounts = data.filter(a => !a.deprecated),
      error: () => {}
    });
  }

  openCreate(): void {
    this.editingJournal = null;
    this.journalForm.reset({
      code: '',
      name: '',
      type: 'general',
      defaultDebitAccountId: null,
      defaultCreditAccountId: null,
      active: true,
      companyId: this.authService.getCompanyId()
    });
    this.showModal = true;
    this.errorMsg = '';
  }

  openEdit(journal: AccountJournal): void {
    this.editingJournal = journal;
    this.journalForm.patchValue(journal);
    this.showModal = true;
    this.errorMsg = '';
  }

  closeModal(): void {
    this.showModal = false;
    this.editingJournal = null;
  }

  saveJournal(): void {
    if (this.journalForm.invalid) {
      this.journalForm.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.errorMsg = '';
    const data = this.journalForm.value as AccountJournal;

    const obs = this.editingJournal
      ? this.accountingService.updateJournal(this.editingJournal.id!, data)
      : this.accountingService.createJournal(data);

    obs.subscribe({
      next: () => {
        this.saving = false;
        this.closeModal();
        this.loadData();
        this.showSuccess(this.editingJournal ? 'Journal modifié' : 'Journal créé avec succès');
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la sauvegarde';
      }
    });
  }

  getTypeBadgeClass(type: string): string {
    const map: Record<string, string> = {
      sale: 'badge-sale', purchase: 'badge-purchase',
      cash: 'badge-cash', bank: 'badge-bank', general: 'badge-general'
    };
    return 'badge ' + (map[type] || 'badge-secondary');
  }

  getTypeLabel(type: string): string {
    return this.journalTypes.find(t => t.value === type)?.label || type;
  }

  openDetail(journal: AccountJournal): void {
    this.router.navigate(['/accounting/journals', journal.id]);
  }

  isSuperAdmin(): boolean { return this.authService.isSuperAdmin(); }

  deleteJournal(journal: AccountJournal): void {
    if (!confirm(`Supprimer le journal « ${journal.name} » (${journal.code}) ? Cette action est irréversible.`)) return;
    this.accountingService.deleteJournal(journal.id!).subscribe({
      next: () => { this.loadData(); this.showSuccess(`Journal « ${journal.name} » supprimé.`); },
      error: (err) => {
        const msg = err.status === 409
          ? 'Ce journal contient des écritures et ne peut pas être supprimé.'
          : (err.error?.message || 'Erreur lors de la suppression.');
        this.errorMsg = msg;
        setTimeout(() => this.errorMsg = '', 5000);
      }
    });
  }

  getAccountName(id?: number): string {
    if (!id) return '-';
    const acc = this.accounts.find(a => a.id === id);
    return acc ? `${acc.code} - ${acc.name}` : String(id);
  }

  downloadTemplate(): void {
    this.accountingService.downloadJournalsTemplate().subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'modele_journaux.xlsx';
        a.click();
        URL.revokeObjectURL(url);
      },
      error: () => { this.errorMsg = 'Impossible de télécharger le modèle'; }
    });
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    (event.target as HTMLInputElement).value = '';
    if (!file) return;
    this.pendingFile = file;
    this.previewing = true;
    this.errorMsg = '';
    this.accountingService.previewJournals(file, this.authService.getCompanyId()).subscribe({
      next: (rows) => {
        this.previewing = false;
        this.previewRows = rows;
        this.showPreviewModal = true;
      },
      error: (err: any) => {
        this.previewing = false;
        this.pendingFile = null;
        this.errorMsg = err?.error?.message || 'Erreur lors de la lecture du fichier';
      }
    });
  }

  cancelPreview(): void {
    this.showPreviewModal = false;
    this.previewRows = [];
    this.pendingFile = null;
  }

  confirmImport(): void {
    if (!this.pendingFile) return;
    this.importing = true;
    this.showPreviewModal = false;
    this.accountingService.importJournals(this.pendingFile, this.authService.getCompanyId()).subscribe({
      next: (res: ImportResult) => {
        this.importing = false;
        this.pendingFile = null;
        const msg = `Import terminé : ${res.created} créés, ${res.updated} mis à jour`;
        this.showSuccess(msg);
        if (res.errors.length > 0) this.errorMsg = res.errors.slice(0, 3).join(' | ');
        this.loadData();
      },
      error: (err: any) => {
        this.importing = false;
        this.pendingFile = null;
        this.errorMsg = err?.error?.message || 'Erreur lors de l\'import';
      }
    });
  }

  get previewCreateCount(): number { return this.previewRows.filter(r => r.action === 'create').length; }
  get previewUpdateCount(): number { return this.previewRows.filter(r => r.action === 'update').length; }
  get previewWarningCount(): number { return this.previewRows.filter(r => r.warning).length; }

  showSuccess(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 5000);
  }
}
