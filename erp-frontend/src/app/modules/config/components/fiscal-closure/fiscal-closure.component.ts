import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { AccountAccount } from '../../../../core/models/account.model';
import {
  FiscalClosureService,
  FiscalClosurePreviewResponse,
  FiscalClosureExecuteResponse
} from '../../../accounting/services/fiscal-closure.service';

@Component({
  selector: 'app-fiscal-closure',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fiscal-closure.component.html',
  styleUrl: './fiscal-closure.component.scss'
})
export class FiscalClosureComponent implements OnInit {
  loading = false;
  executing = false;
  previewed = false;
  done = false;
  errorMsg = '';

  dateFrom = '';
  dateTo = '';

  accounts: AccountAccount[] = [];
  resultAccountBeneficeId: number | null = null;
  resultAccountPerteId: number | null = null;

  preview: FiscalClosurePreviewResponse | null = null;
  result: FiscalClosureExecuteResponse | null = null;

  constructor(
    private authService: AuthService,
    private accountingService: AccountingService,
    private fiscalClosureService: FiscalClosureService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const now = new Date();
    this.dateFrom = `${now.getFullYear()}-01-01`;
    this.dateTo = now.toISOString().split('T')[0];
    this.accountingService.getAccounts(this.authService.getCompanyId()).subscribe(a => this.accounts = a);
  }

  generatePreview(): void {
    if (!this.dateFrom || !this.dateTo) { this.errorMsg = 'Sélectionnez la période à clôturer'; return; }
    if (this.dateFrom > this.dateTo) { this.errorMsg = 'La date de début doit précéder la date de fin'; return; }

    this.loading = true; this.previewed = false; this.done = false; this.errorMsg = ''; this.result = null;
    this.fiscalClosureService.preview({
      companyId: this.authService.getCompanyId(),
      dateFrom: this.dateFrom,
      dateTo: this.dateTo
    }).subscribe({
      next: (res) => {
        this.preview = res;
        this.loading = false;
        this.previewed = true;
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la prévisualisation';
      }
    });
  }

  get canConfirm(): boolean {
    return !!this.preview && !this.preview.blocked
      && !!this.resultAccountBeneficeId && !!this.resultAccountPerteId;
  }

  confirmClosure(): void {
    if (!this.canConfirm) return;
    const msg = `Clôturer la période du ${this.dateFrom} au ${this.dateTo} ?\n\n`
      + `Cette action verrouille toutes les écritures de cette période (plus aucune création/modification/validation) `
      + `et crée une écriture de clôture en BROUILLON que vous devrez valider vous-même. Continuer ?`;
    if (!confirm(msg)) return;

    this.executing = true; this.errorMsg = '';
    this.fiscalClosureService.execute({
      companyId: this.authService.getCompanyId(),
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      resultAccountBeneficeId: this.resultAccountBeneficeId!,
      resultAccountPerteId: this.resultAccountPerteId!
    }).subscribe({
      next: (res) => {
        this.executing = false;
        this.done = true;
        this.result = res;
      },
      error: (err) => {
        this.executing = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la clôture';
      }
    });
  }

  goToMove(): void {
    if (this.result?.moveId) {
      this.router.navigate(['/accounting/journal-entries', this.result.moveId]);
    }
  }

  goToJournalEntries(): void {
    this.router.navigate(['/accounting/journal-entries']);
  }
}
