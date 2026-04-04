import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesService, SalesInvoice, InvoicePayment } from '../../services/sales.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { AccountJournal } from '../../../../core/models/account.model';

@Component({
  selector: 'app-invoice-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './invoice-detail.component.html',
  styleUrl: './invoice-detail.component.scss'
})
export class InvoiceDetailComponent implements OnInit {
  invoiceId!: number;
  invoice: SalesInvoice | null = null;
  cashBankJournals: AccountJournal[] = [];
  loading = false;
  posting = false;
  cancelling = false;
  creatingAvoir = false;
  successMsg = '';
  errorMsg = '';

  // Paiement
  showPaymentForm = false;
  payment = {
    journalId: 0,
    date: new Date().toISOString().split('T')[0],
    amount: 0,
    memo: ''
  };
  savingPayment = false;

  constructor(
    private salesService: SalesService,
    private accountingService: AccountingService,
    private authService: AuthService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.invoiceId = +this.route.snapshot.paramMap.get('id')!;
    this.loadInvoice();
    this.loadJournals();
  }

  loadInvoice(): void {
    this.loading = true;
    this.salesService.getInvoice(this.invoiceId).subscribe({
      next: (data) => {
        this.invoice = data;
        this.payment.amount = data.montantDu || 0;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  loadJournals(): void {
    this.accountingService.getJournals(this.authService.getCompanyId()).subscribe({
      next: (data) => {
        this.cashBankJournals = data.filter(j => j.type === 'cash' || j.type === 'bank');
        if (this.cashBankJournals.length > 0) {
          this.payment.journalId = this.cashBankJournals[0].id!;
        }
      }
    });
  }

  postInvoice(): void {
    if (!confirm('Valider cette facture ? Une écriture comptable sera générée.')) return;

    this.posting = true;
    this.errorMsg = '';
    this.salesService.postInvoice(this.invoiceId).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.posting = false;
        this.showSuccess('Facture validée — écriture comptable créée');
      },
      error: (err) => {
        this.posting = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la validation';
      }
    });
  }

  cancelInvoice(): void {
    if (!confirm('Annuler cette facture ?')) return;

    this.cancelling = true;
    this.salesService.cancelInvoice(this.invoiceId).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.cancelling = false;
        this.showSuccess('Facture annulée');
      },
      error: (err) => {
        this.cancelling = false;
        this.errorMsg = err.error?.message || 'Erreur lors de l\'annulation';
      }
    });
  }

  openPaymentForm(): void {
    this.payment.amount = this.invoice?.montantDu || 0;
    this.payment.date = new Date().toISOString().split('T')[0];
    this.showPaymentForm = true;
  }

  closePaymentForm(): void {
    this.showPaymentForm = false;
  }

  savePayment(): void {
    if (!this.payment.journalId || this.payment.amount <= 0) {
      this.errorMsg = 'Veuillez sélectionner un journal et saisir un montant valide';
      return;
    }

    this.savingPayment = true;
    this.errorMsg = '';

    this.salesService.createPayment({
      invoiceId: this.invoiceId,
      journalId: this.payment.journalId,
      date: this.payment.date,
      amount: this.payment.amount,
      memo: this.payment.memo,
      companyId: this.authService.getCompanyId()
    }).subscribe({
      next: () => {
        this.savingPayment = false;
        this.showPaymentForm = false;
        this.showSuccess('Paiement enregistré');
        this.loadInvoice();
      },
      error: (err) => {
        this.savingPayment = false;
        this.errorMsg = err.error?.message || 'Erreur lors du paiement';
      }
    });
  }

  createAvoir(): void {
    if (!confirm('Créer un avoir pour cette facture ? Une nouvelle pièce AV-XXXX sera générée.')) return;
    this.creatingAvoir = true;
    this.errorMsg = '';
    this.salesService.createAvoirFromInvoice(this.invoiceId).subscribe({
      next: (avoir) => {
        this.creatingAvoir = false;
        this.showSuccess(`Avoir ${avoir.name} créé`);
        setTimeout(() => this.router.navigate(['/sales/invoices', avoir.id]), 1000);
      },
      error: (err) => {
        this.creatingAvoir = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la création de l\'avoir';
      }
    });
  }

  get isInvoice(): boolean {
    return !this.invoice?.type || this.invoice.type === 'invoice';
  }

  get isAvoir(): boolean {
    return this.invoice?.type === 'credit_note';
  }

  back(): void {
    if (this.isAvoir) {
      this.router.navigate(['/sales/avoirs']);
    } else {
      this.router.navigate(['/sales/invoices']);
    }
  }

  viewOrder(): void {
    if (this.invoice?.salesOrderId) {
      this.router.navigate(['/sales/orders', this.invoice.salesOrderId]);
    }
  }

  getStateBadge(state: string): string {
    const map: Record<string, string> = {
      draft: 'badge-draft', posted: 'badge-posted',
      paid: 'badge-paid', cancelled: 'badge-cancelled'
    };
    return 'badge ' + (map[state] || 'badge-draft');
  }

  getStateLabel(state: string): string {
    const map: Record<string, string> = {
      draft: 'Brouillon', posted: 'Validée', paid: 'Payée', cancelled: 'Annulée'
    };
    return map[state] || state;
  }

  getProgressPct(): number {
    if (!this.invoice?.totalTTC || this.invoice.totalTTC === 0) return 0;
    return Math.min(100, Math.round(((this.invoice.montantPaye || 0) / this.invoice.totalTTC) * 100));
  }

  showSuccess(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 4000);
  }

  goToOriginalInvoice(id: number): void {
    this.router.navigate(['/sales/invoices', id]);
  }
}
