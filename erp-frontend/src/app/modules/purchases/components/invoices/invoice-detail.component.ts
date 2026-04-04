import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService, PurchaseInvoice } from '../../services/purchase.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { AccountJournal } from '../../../../core/models/account.model';

@Component({
  selector: 'app-purchase-invoice-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './invoice-detail.component.html',
  styleUrl: './invoice-detail.component.scss'
})
export class PurchaseInvoiceDetailComponent implements OnInit {
  invoiceId!: number;
  invoice: PurchaseInvoice | null = null;
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
    private purchaseService: PurchaseService,
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
    this.purchaseService.getInvoice(this.invoiceId).subscribe({
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
    const msg = this.isAvoir
      ? 'Valider cet avoir fournisseur ? Une écriture comptable sera générée.'
      : 'Valider cette facture fournisseur ? Une écriture comptable sera générée.';
    if (!confirm(msg)) return;

    this.posting = true;
    this.errorMsg = '';
    this.purchaseService.postInvoice(this.invoiceId).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.posting = false;
        this.showSuccess(this.isAvoir ? 'Avoir validé — écriture comptable créée' : 'Facture validée — écriture comptable créée');
      },
      error: (err) => {
        this.posting = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la validation';
      }
    });
  }

  cancelInvoice(): void {
    if (!confirm('Annuler ce document ?')) return;

    this.cancelling = true;
    this.purchaseService.cancelInvoice(this.invoiceId).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.cancelling = false;
        this.showSuccess('Document annulé');
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

    this.purchaseService.createPayment({
      invoiceId: this.invoiceId,
      journalId: this.payment.journalId,
      date: this.payment.date,
      amount: this.payment.amount,
      memo: this.payment.memo
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
    if (!confirm('Créer un avoir fournisseur pour cette facture ? Une nouvelle pièce AVF-XXXX sera générée.')) return;
    this.creatingAvoir = true;
    this.errorMsg = '';
    this.purchaseService.createAvoirFromInvoice(this.invoiceId).subscribe({
      next: (avoir) => {
        this.creatingAvoir = false;
        this.showSuccess(`Avoir ${avoir.name} créé`);
        setTimeout(() => this.router.navigate(['/purchases/invoices', avoir.id]), 1000);
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
      this.router.navigate(['/purchases/avoirs']);
    } else {
      this.router.navigate(['/purchases/invoices']);
    }
  }

  viewOrder(): void {
    if (this.invoice?.purchaseOrderId) {
      this.router.navigate(['/purchases/orders', this.invoice.purchaseOrderId]);
    }
  }

  goToOriginalInvoice(id: number): void {
    this.router.navigate(['/purchases/invoices', id]);
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
}
