import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesService, SalesInvoice, InvoicePayment } from '../../services/sales.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { AccountJournal } from '../../../../core/models/account.model';
import { StockService, Warehouse } from '../../../stock/services/stock.service';

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
  warehouses: Warehouse[] = [];
  loading = false;
  posting = false;
  cancelling = false;
  reversing = false;
  creatingAvoir = false;
  generatingRistournes = false;
  savingWarehouse = false;
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

  // Compensation crédit
  showCreditForm = false;
  creditAmount = 0;
  applyingCredit = false;

  constructor(
    private salesService: SalesService,
    private accountingService: AccountingService,
    private authService: AuthService,
    private stockService: StockService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.invoiceId = +this.route.snapshot.paramMap.get('id')!;
    this.loadInvoice();
    this.loadJournals();
    this.loadWarehouses();
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

  loadWarehouses(): void {
    this.stockService.getWarehouses(this.authService.getCompanyId()).subscribe({
      next: (data) => { this.warehouses = data.filter(w => w.active !== false); }
    });
  }

  setWarehouse(warehouseId: number): void {
    if (!warehouseId || !this.invoice?.id) return;
    this.savingWarehouse = true;
    this.salesService.setWarehouse(this.invoice.id, warehouseId).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.savingWarehouse = false;
        this.showSuccess('Entrepôt enregistré');
      },
      error: (err) => {
        this.savingWarehouse = false;
        this.showError(err.error?.message || 'Erreur lors de la mise à jour de l\'entrepôt');
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
    if (!this.invoice.partnerId) missing.push('Client');
    if (!this.invoice.journalId) missing.push('Journal');
    if (!this.invoice.date) missing.push('Date');
    if (!isAvoir && !this.invoice.warehouseId) missing.push('Entrepôt');
    if (!this.invoice.lines || this.invoice.lines.length === 0) missing.push('Lignes de facturation');
    return missing;
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
    const hasEntries = this.invoice?.accountMoveId;
    const msg = hasEntries
      ? 'Annuler cette facture ? Les écritures comptables NE seront PAS automatiquement inversées. Cliquez sur "Inverser les écritures" ensuite.'
      : 'Annuler cette facture ?';
    if (!confirm(msg)) return;

    this.cancelling = true;
    this.salesService.cancelInvoice(this.invoiceId).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.cancelling = false;
        this.showSuccess('Facture annulée. Cliquez sur "Inverser les écritures" pour extourner les écritures comptables.');
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
    this.salesService.reverseInvoiceEntries(this.invoiceId).subscribe({
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

  openCreditForm(): void {
    this.creditAmount = Math.min(
      this.invoice?.montantDu ?? 0,
      this.invoice?.partnerCreditDisponible ?? 0
    );
    this.showCreditForm = true;
  }

  applyCredit(): void {
    if (!this.creditAmount || this.creditAmount <= 0) return;
    this.applyingCredit = true;
    this.errorMsg = '';
    this.salesService.applyCredit(this.invoiceId, this.creditAmount, this.authService.getCompanyId()).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.applyingCredit = false;
        this.showCreditForm = false;
        this.showSuccess('Crédit appliqué — facture mise à jour');
      },
      error: (err) => {
        this.applyingCredit = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la compensation';
      }
    });
  }

  generateRistournes(): void {
    if (!confirm('Générer un règlement ristourne à partir de cette facture ?')) return;
    this.generatingRistournes = true;
    this.errorMsg = '';
    this.salesService.generateRistournes(this.invoiceId).subscribe({
      next: (rst) => {
        this.generatingRistournes = false;
        this.showSuccess(`Règlement ristourne ${rst.name} créé (brouillon)`);
      },
      error: (err) => {
        this.generatingRistournes = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la génération des ristournes';
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

  // ===== Getters récapitulatif =====

  readonly Math = Math;

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

  goToOriginalInvoice(id: number): void {
    this.router.navigate(['/sales/invoices', id]);
  }
}
