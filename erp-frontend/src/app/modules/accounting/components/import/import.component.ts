import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingService } from '../../services/accounting.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { ImportResult } from '../../../../core/models/import-result.model';

interface ImportTab {
  id: string;
  label: string;
  icon: string;
  description: string;
  warning?: string;
  action: (file: File, companyId: number) => any;
}

@Component({
  selector: 'app-import',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './import.component.html',
  styleUrl: './import.component.scss'
})
export class ImportComponent {

  activeTab = 'accounts';
  importing = false;
  result: ImportResult | null = null;
  errorMsg = '';
  selectedFileName = '';

  tabs: ImportTab[] = [
    {
      id: 'accounts',
      label: 'Plan comptable',
      icon: 'account_tree',
      description: 'Importez le plan comptable depuis un fichier Excel Odoo (Compte - account.account). À faire EN PREMIER.',
      action: (f, c) => this.accountingService.importAccounts(f, c)
    },
    {
      id: 'analytic',
      label: 'Comptes analytiques',
      icon: 'analytics',
      description: 'Importez les comptes analytiques depuis un fichier Excel Odoo.',
      action: (f, c) => this.accountingService.importAnalyticAccounts(f, c)
    },
    {
      id: 'partners',
      label: 'Contacts / Partenaires',
      icon: 'people',
      description: 'Importez les contacts depuis un fichier Excel Odoo (Contact - res.partner).',
      action: (f, c) => this.accountingService.importPartners(f, c)
    },
    {
      id: 'journals',
      label: 'Journaux',
      icon: 'book',
      description: 'Importez les journaux depuis un fichier Excel Odoo (Journal - account.journal).',
      warning: 'Le plan comptable doit être importé avant les journaux.',
      action: (f, c) => this.accountingService.importJournals(f, c)
    }
  ];

  journalTypes = [
    { value: 'sale',     label: 'Vente',               icon: 'shopping_cart',   color: '#4caf50' },
    { value: 'purchase', label: 'Achat',                icon: 'local_shipping',  color: '#ff9800' },
    { value: 'cash',     label: 'Caisse / Espèces',     icon: 'payments',        color: '#2196f3' },
    { value: 'bank',     label: 'Banque',               icon: 'account_balance', color: '#9c27b0' },
    { value: 'general',  label: 'Opérations diverses',  icon: 'sync_alt',        color: '#607d8b' }
  ];

  constructor(
    private accountingService: AccountingService,
    private authService: AuthService
  ) {}

  get activeTabDef(): ImportTab {
    return this.tabs.find(t => t.id === this.activeTab)!;
  }

  setTab(id: string): void {
    this.activeTab = id;
    this.result = null;
    this.errorMsg = '';
    this.selectedFileName = '';
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFileName = input.files[0].name;
    }
  }

  onImport(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector('input[type=file]') as HTMLInputElement;
    const file = input?.files?.[0];
    if (!file) {
      this.errorMsg = 'Veuillez sélectionner un fichier .xlsx';
      return;
    }

    this.importing = true;
    this.result = null;
    this.errorMsg = '';

    const companyId = this.authService.getCompanyId();
    this.activeTabDef.action(file, companyId).subscribe({
      next: (res: ImportResult) => {
        this.result = res;
        this.importing = false;
        // Reset file input
        input.value = '';
        this.selectedFileName = '';
      },
      error: (err: any) => {
        this.errorMsg = err?.error?.message || 'Erreur lors de l\'import';
        this.importing = false;
      }
    });
  }

  get importOrder(): { step: number; label: string; icon: string; tabId: string }[] {
    return [
      { step: 1, label: 'Plan comptable',       icon: 'account_tree', tabId: 'accounts' },
      { step: 2, label: 'Comptes analytiques',  icon: 'analytics',    tabId: 'analytic' },
      { step: 3, label: 'Contacts',             icon: 'people',       tabId: 'partners' },
      { step: 4, label: 'Journaux',             icon: 'book',         tabId: 'journals' }
    ];
  }
}
