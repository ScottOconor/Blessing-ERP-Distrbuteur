import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesService, SalesInvoice, InvoicePayment, AvailableMoveDTO, InvoiceReconciliationDTO, AvailableCredit } from '../../services/sales.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { CompanyService } from '../../../../core/services/company.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { AccountJournal } from '../../../../core/models/account.model';
import { StockService, Warehouse } from '../../../stock/services/stock.service';
import { PrintPreviewComponent, PrintDocType } from '../../../../shared/components/print-preview/print-preview.component';
import { AuditFooterComponent } from '../../../../shared/components/audit-footer/audit-footer.component';
import { AuditTrailComponent } from '../../../../shared/components/audit-trail/audit-trail.component';
import { CONSIGNE_CODES } from '../../../../shared/constants/consigne-codes';

@Component({
  selector: 'app-invoice-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, PrintPreviewComponent, AuditFooterComponent, AuditTrailComponent],
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
  availableCredits: AvailableCredit[] = [];
  loadingCredits = false;
  selectedCreditId: number | null = null;

  // Lettrage
  reconciliations: InvoiceReconciliationDTO[] = [];
  showReconcileModal = false;
  availableMoves: AvailableMoveDTO[] = [];
  loadingMoves = false;
  reconcileForm = { moveId: 0, amount: 0, date: new Date().toISOString().split('T')[0] };
  savingReconcile = false;
  selectedMove: AvailableMoveDTO | null = null;

  // Avoir
  showAvoirModal = false;
  avoirType: 'integral' | 'partiel' = 'integral';
  avoirDate: string = new Date().toISOString().split('T')[0];
  avoirLines: { lineId: number; description: string; originalQty: number; quantite: number; isConsigne?: boolean }[] = [];

  // Impression
  showPrintModal = false;

  constructor(
    private salesService: SalesService,
    private accountingService: AccountingService,
    private authService: AuthService,
    private companyService: CompanyService,
    private stockService: StockService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.invoiceId = +params.get('id')!;
      this.invoice = null;
      this.loadInvoice();
    });
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
        this.loadReconciliations();
      },
      error: () => { this.loading = false; }
    });
  }

  loadReconciliations(): void {
    this.salesService.getReconciliations(this.invoiceId).subscribe({
      next: (data) => { this.reconciliations = data; }
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
        // Pré-sélectionner le journal de caisse configuré sur l'entrepôt
        const wh = this.warehouses.find(w => w.id === Number(warehouseId));
        if (wh?.cashJournalId && this.cashBankJournals.some(j => j.id === wh.cashJournalId)) {
          this.payment.journalId = wh.cashJournalId;
        }
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
    const doc = this.isAvoir ? 'cet avoir' : 'cette facture';
    const hasEntries = this.invoice?.accountMoveId;
    const stockNote = this.isAvoir ? ' Le stock retourné sera restitué.' : '';
    const msg = hasEntries
      ? `Annuler ${doc} ?${stockNote} Les écritures comptables NE seront PAS automatiquement inversées. Cliquez sur "Inverser les écritures" ensuite.`
      : `Annuler ${doc} ?`;
    if (!confirm(msg)) return;

    this.cancelling = true;
    this.salesService.cancelInvoice(this.invoiceId).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.cancelling = false;
        this.showSuccess((this.isAvoir ? 'Avoir annulé — stock restitué.' : 'Facture annulée.') + ' Cliquez sur "Inverser les écritures" pour extourner les écritures comptables.');
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
        this.showSuccess(this.isAvoir ? 'Remboursement enregistré' : 'Paiement enregistré');
        this.loadInvoice();
      },
      error: (err) => {
        this.savingPayment = false;
        this.errorMsg = err.error?.message || 'Erreur lors du paiement';
      }
    });
  }

  openCreditForm(): void {
    if (!this.invoice?.partnerId) return;
    this.selectedCreditId = null;
    this.creditAmount = 0;
    this.availableCredits = [];
    this.showCreditForm = true;
    this.loadingCredits = true;
    this.salesService.getAvailableCredits(this.invoice.partnerId, this.authService.getCompanyId()).subscribe({
      next: (credits) => { this.availableCredits = credits; this.loadingCredits = false; },
      error: () => { this.loadingCredits = false; }
    });
  }

  get selectedCreditMax(): number {
    if (!this.selectedCreditId) return 0;
    const credit = this.availableCredits.find(c => c.id === this.selectedCreditId);
    return Math.min(this.invoice?.montantDu ?? 0, credit?.montantDu ?? 0);
  }

  selectCredit(credit: AvailableCredit): void {
    this.selectedCreditId = credit.id;
    this.creditAmount = Math.min(this.invoice?.montantDu ?? 0, credit.montantDu);
  }

  applyCredit(): void {
    if (!this.selectedCreditId) { this.errorMsg = 'Sélectionnez un avoir à imputer.'; return; }
    if (!this.creditAmount || this.creditAmount <= 0) return;
    this.applyingCredit = true;
    this.errorMsg = '';
    this.salesService.applyCredit(this.invoiceId, this.creditAmount, this.authService.getCompanyId(), this.selectedCreditId).subscribe({
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

  reversePayment(paymentId: number): void {
    if (!confirm('Inverser ce paiement ? Une écriture comptable inverse sera générée.')) return;
    this.salesService.reversePayment(paymentId).subscribe({
      next: () => { this.showSuccess('Paiement inversé'); this.loadInvoice(); },
      error: (e) => { this.errorMsg = e?.error?.message || 'Erreur lors de l\'inversion du paiement'; }
    });
  }

  openAvoirModal(): void {
    this.avoirType = 'integral';
    this.avoirDate = new Date().toISOString().split('T')[0];
    // Toutes les lignes avec quantité > 0, consignes/déconsignes comprises
    // (l'avoir partiel doit permettre de retourner aussi les emballages)
    this.avoirLines = (this.invoice?.lines ?? [])
      .filter(l => (l.quantity ?? 0) > 0)
      .map(l => ({
        lineId: l.id!,
        description: l.description || l.productCode || '',
        originalQty: l.quantity ?? 0,
        quantite: l.quantity ?? 0,
        isConsigne: l.consigne ?? false
      }));
    this.errorMsg = '';
    this.showAvoirModal = true;
  }

  closeAvoirModal(): void { this.showAvoirModal = false; }

  confirmAvoir(): void {
    this.creatingAvoir = true;
    this.errorMsg = '';
    const date = this.avoirDate || new Date().toISOString().split('T')[0];
    const req = this.avoirType === 'partiel'
      ? { avoirType: 'partiel' as const, date, lines: this.avoirLines.map(l => ({ lineId: l.lineId, quantite: l.quantite })) }
      : { avoirType: 'integral' as const, date };

    this.salesService.createAvoirFromInvoice(this.invoiceId, req).subscribe({
      next: (avoir) => {
        this.creatingAvoir = false;
        this.showAvoirModal = false;
        // Recharger la facture courante (état → extournee) puis naviguer vers l'avoir
        this.loadInvoice();
        if (avoir.id) {
          this.router.navigate(['/sales/invoices', avoir.id]);
        }
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

  get printDocType(): PrintDocType { return this.isAvoir ? 'avoir' : 'invoice'; }
  get printCompany() { return this.companyService.getCached(); }
  get printCompanyName(): string { return this.companyService.getCached()?.name ?? ''; }
  get printCompanyPhone(): string { return this.companyService.getCached()?.telephone ?? ''; }
  get printCompanyLogoUrl(): string { return this.companyService.getLogoUrl(); }
  get printCompanyLogoDataUrl(): string { return this.companyService.getCachedLogoDataUrl(); }

  openPrint(): void { this.showPrintModal = true; }
  closePrint(): void { this.showPrintModal = false; }

  get isAvoir(): boolean {
    return this.invoice?.type === 'credit_note';
  }

  /**
   * true seulement s'il reste un solde à encaisser (> 0). Quand la déconsigne
   * (emballages repris) ramène le net à payer à 0 ou en négatif, la facture est
   * déjà réglée — voire nous devons au client — donc aucun paiement à enregistrer.
   */
  get hasSoldeDu(): boolean {
    return (this.invoice?.montantDu ?? 0) > 0;
  }

  /**
   * Droit d'annuler une facture de vente (VENTES/FACTURES/CANCEL). Sans ce droit,
   * l'utilisateur doit passer par l'extourne. Les rôles privilégiés l'ont toujours.
   */
  get canCancelInvoice(): boolean {
    return this.authService.hasPermission('VENTES', 'FACTURES', 'CANCEL');
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
      paid: 'badge-paid', cancelled: 'badge-cancelled',
      extournee: 'badge-extournee',
      partiellement_extournee: 'badge-partial-ext'
    };
    return 'badge ' + (map[state] || 'badge-draft');
  }

  getStateLabel(state: string): string {
    const map: Record<string, string> = {
      draft: 'Brouillon', posted: 'Validée', paid: 'Payée',
      cancelled: 'Annulée', extournee: 'Extournée',
      partiellement_extournee: 'Part. Extournée'
    };
    return map[state] || state;
  }

  getProgressPct(): number {
    if (!this.invoice?.totalTTC || this.invoice.totalTTC === 0) return 0;
    return Math.min(100, Math.round(((this.invoice.montantPaye || 0) / this.invoice.totalTTC) * 100));
  }

  fmtM(n: number): string {
    return n > 0 ? new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(n) : '';
  }
  parseM(s: string): number {
    return Math.round(parseFloat((s || '').replace(/[\s  ]/g, '').replace(',', '.')) || 0);
  }

  // ===== Getters récapitulatif =====

  readonly Math = Math;

  // Codes produits consigne — identiques au module Odoo blessing_consulting
  private readonly CONSIGNE_CODES = CONSIGNE_CODES;

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

  /** Total PET = articles dont la catégorie commence par "PET" */
  get totalPET(): number {
    return this.invoice?.lines
      .filter(l => !this.isConsigneCode(l.productCode) && this.isPETCategory(l.categoryName))
      .reduce((s, l) => s + (Number(l.quantity) || 0), 0) || 0;
  }

  isPETCategory(name?: string): boolean {
    if (!name) return false;
    return name.trim().toUpperCase().startsWith('PET');
  }

  /** Total Casier = articles dont l'unité de mesure contient "casier" (Casier 12, Casier 24…) */
  get totalCasier(): number {
    return this.invoice?.lines
      .filter(l => !this.isConsigneCode(l.productCode) && this.isCasierUom(l.uomName))
      .reduce((s, l) => s + (Number(l.quantity) || 0), 0) || 0;
  }

  isCasierUom(uom?: string): boolean {
    if (!uom) return false;
    return uom.toLowerCase().includes('casier');
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

  // ===== Lettrage =====

  openReconcileModal(): void {
    this.loadingMoves = true;
    this.showReconcileModal = true;
    this.selectedMove = null;
    this.reconcileForm = { moveId: 0, amount: this.invoice?.montantDu || 0, date: new Date().toISOString().split('T')[0] };
    this.salesService.getAvailableMoves(this.invoiceId, this.authService.getCompanyId()).subscribe({
      next: (data) => { this.availableMoves = data; this.loadingMoves = false; },
      error: () => { this.loadingMoves = false; }
    });
  }

  selectMove(move: AvailableMoveDTO): void {
    this.selectedMove = move;
    this.reconcileForm.moveId = move.moveId;
    this.reconcileForm.amount = Math.min(this.invoice?.montantDu || 0, move.montantDisponible);
  }

  saveReconcile(): void {
    if (!this.reconcileForm.moveId || this.reconcileForm.amount <= 0) return;
    this.savingReconcile = true;
    this.salesService.reconcile(this.invoiceId, {
      accountMoveId: this.reconcileForm.moveId,
      amount: this.reconcileForm.amount,
      date: this.reconcileForm.date
    }).subscribe({
      next: () => {
        this.savingReconcile = false;
        this.showReconcileModal = false;
        this.showSuccess('Facture rattachée au versement');
        this.loadInvoice();
      },
      error: (err) => {
        this.savingReconcile = false;
        this.showError(err.error?.message || 'Erreur lors du lettrage');
      }
    });
  }

  unreconcile(id: number): void {
    if (!confirm('Délettrer ce rattachement ? Le montant sera remis en "reste dû".')) return;
    this.salesService.unreconcile(id).subscribe({
      next: () => { this.showSuccess('Lettrage supprimé'); this.loadInvoice(); },
      error: (err) => { this.showError(err.error?.message || 'Erreur'); }
    });
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
