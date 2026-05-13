import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService, PurchaseInvoice } from '../../services/purchase.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { AccountJournal } from '../../../../core/models/account.model';
import { PrintPreviewComponent, PrintDocType } from '../../../../shared/components/print-preview/print-preview.component';

@Component({
  selector: 'app-purchase-invoice-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, PrintPreviewComponent],
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
  reversing = false;
  creatingAvoir = false;
  generatingRemises = false;
  successMsg = '';
  errorMsg = '';

  // Impression
  showPrintModal = false;

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

  get partnerBalanceClass(): string {
    const b = this.invoice?.partnerBalance ?? 0;
    if (b > 0) return 'balance-positive';
    if (b < 0) return 'balance-negative';
    return 'balance-zero';
  }

  get missingFields(): string[] {
    if (!this.invoice || this.invoice.state !== 'draft') return [];
    const isAvoir = this.invoice.type === 'credit_note';
    const missing: string[] = [];
    if (!this.invoice.partnerId) missing.push('Fournisseur');
    if (!this.invoice.journalId) missing.push('Journal');
    if (!this.invoice.date) missing.push('Date');
    if (!this.invoice.lines || this.invoice.lines.length === 0) missing.push('Lignes de facturation');
    return missing;
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
    const hasEntries = this.invoice?.accountMoveId;
    const msg = hasEntries
      ? 'Annuler cette facture ? Les écritures comptables NE seront PAS automatiquement inversées. Vous devrez cliquer sur "Inverser les écritures" ensuite.'
      : 'Annuler ce document ?';
    if (!confirm(msg)) return;

    this.cancelling = true;
    this.purchaseService.cancelInvoice(this.invoiceId).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.cancelling = false;
        this.showSuccess('Document annulé. Cliquez sur "Inverser les écritures" pour extourner les écritures comptables.');
      },
      error: (err) => {
        this.cancelling = false;
        this.errorMsg = err.error?.message || 'Erreur lors de l\'annulation';
      }
    });
  }

  reverseEntries(): void {
    if (!confirm('Inverser les écritures comptables de cette facture et de ses paiements ? Cette action est irréversible.')) return;

    this.reversing = true;
    this.errorMsg = '';
    this.purchaseService.reverseInvoiceEntries(this.invoiceId).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.reversing = false;
        this.showSuccess('Écritures extournées avec succès');
      },
      error: (err) => {
        this.reversing = false;
        this.errorMsg = err.error?.message || 'Erreur lors de l\'inversion des écritures';
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

  generateRemises(): void {
    if (!confirm('Générer un règlement remise à partir de cette facture ?')) return;
    this.generatingRemises = true;
    this.errorMsg = '';
    this.purchaseService.generateRemises(this.invoiceId).subscribe({
      next: (rms) => {
        this.generatingRemises = false;
        this.showSuccess(`Règlement remise ${rms.name} créé (brouillon)`);
      },
      error: (err) => {
        this.generatingRemises = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la génération des remises';
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

  get printDocType(): PrintDocType { return 'purchase_invoice'; }
  get printCompanyName(): string { return this.authService.getActiveCompany()?.name ?? ''; }
  openPrint(): void { this.showPrintModal = true; }
  closePrint(): void { this.showPrintModal = false; }

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

  // ===== Getters récapitulatif =====

  // Codes produits consigne — identiques au module Odoo blessing_consulting
  private readonly CONSIGNE_CODES = new Set([
    'CB12','CB24','CB12M','CB24M','CV12','CV24',
    'CBG12','CBG15','CBG24','VIP12','VIP24','VCP12','VCP24',
    'VIPG12','VIPG15','VIPG24','CVG12','CVG15','CVG24',
    'EGUI12','EGUI15','EGUI24','PP','PB','TT','BPM','BGM',
    'CAIMET','CONS001','INPN33','EMB1','EMB2','EMB3','EMB4','EMB5',
    'CAISMB','PALT-V','PALTPL','PRC01','ELV01'
  ]);

  isConsigneCode(code?: string): boolean {
    if (!code) return false;
    return this.CONSIGNE_CODES.has(code.trim().toUpperCase());
  }

  /** Total Colis = quantité totale de tous les produits non-consigne */
  get totalColis(): number {
    return this.invoice?.lines
      .filter(l => !this.isConsigneCode(l.productCode))
      .reduce((s, l) => s + (Number(l.quantity) || 0), 0) || 0;
  }

  /** Total PET = articles avec UOM Palette de 6, Palette de 12, Bidons */
  get totalPET(): number {
    return this.invoice?.lines
      .filter(l => !this.isConsigneCode(l.productCode) && this.isPETCategory(l.categoryName))
      .reduce((s, l) => s + (Number(l.quantity) || 0), 0) || 0;
  }

  isPETCategory(name?: string): boolean {
    if (!name) return false;
    const n = name.toLowerCase();
    // Palette de 6, Palette de 12, Bidons
    return n.includes('palette') || n.includes('bidon');
  }

  /** Total Casier = articles avec UOM Casier de 12 ou Casier de 24 */
  get totalCasier(): number {
    return this.invoice?.lines
      .filter(l => !this.isConsigneCode(l.productCode) && this.isCasierCategory(l.categoryName))
      .reduce((s, l) => s + (Number(l.quantity) || 0), 0) || 0;
  }

  isCasierCategory(name?: string): boolean {
    if (!name) return false;
    const n = name.toLowerCase();
    // Casier de 12, Casier de 24
    return n.includes('casier');
  }

  get consigneMontant(): number {
    return this.invoice?.lines
      .filter(l => this.isConsigneCode(l.productCode) && (Number(l.quantity) || 0) >= 0)
      .reduce((s, l) => s + (Number(l.montantTTC) || 0), 0) || 0;
  }

  get deconsigneMontant(): number {
    return this.invoice?.lines
      .filter(l => this.isConsigneCode(l.productCode) && (Number(l.quantity) || 0) < 0)
      .reduce((s, l) => s + Math.abs(Number(l.montantTTC) || 0), 0) || 0;
  }

  get qteConsigne(): number {
    return this.invoice?.lines
      .filter(l => this.isConsigneCode(l.productCode) && (Number(l.quantity) || 0) >= 0)
      .reduce((s, l) => s + (Number(l.quantity) || 0), 0) || 0;
  }

  get qteDeconsigne(): number {
    return this.invoice?.lines
      .filter(l => this.isConsigneCode(l.productCode) && (Number(l.quantity) || 0) < 0)
      .reduce((s, l) => s + Math.abs(Number(l.quantity) || 0), 0) || 0;
  }

  showSuccess(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 4000);
  }

  showError(msg: string): void {
    this.errorMsg = msg;
    setTimeout(() => this.errorMsg = '', 6000);
  }
}
