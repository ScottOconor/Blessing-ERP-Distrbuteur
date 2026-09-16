import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService, PurchaseInvoice, PurchaseAvailableMoveDTO, PurchaseReconciliationDTO } from '../../services/purchase.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { CompanyService } from '../../../../core/services/company.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { EnlevementService, EnlevementRapportLine } from '../../services/enlevement.service';
import { AccountJournal } from '../../../../core/models/account.model';
import { PrintPreviewComponent, PrintDocType } from '../../../../shared/components/print-preview/print-preview.component';
import { AuditFooterComponent } from '../../../../shared/components/audit-footer/audit-footer.component';
import { AuditTrailComponent } from '../../../../shared/components/audit-trail/audit-trail.component';
import { CONSIGNE_CODES } from '../../../../shared/constants/consigne-codes';

@Component({
  selector: 'app-purchase-invoice-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, PrintPreviewComponent, AuditFooterComponent, AuditTrailComponent],
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

  // Avoir (partiel / intégral)
  showAvoirModal = false;
  avoirType: 'integral' | 'partiel' = 'integral';
  avoirDate = new Date().toISOString().split('T')[0];
  avoirLines: { lineId: number; description: string; originalQty: number; quantite: number; isConsigne: boolean }[] = [];

  // Crédit fournisseur (avoirs disponibles)
  showCreditForm = false;
  creditAmount = 0;
  applyingCredit = false;

  // Impression
  showPrintModal = false;

  // Lettrage
  reconciliations: PurchaseReconciliationDTO[] = [];
  showReconcileModal = false;
  availableMoves: PurchaseAvailableMoveDTO[] = [];
  loadingMoves = false;
  reconcileForm = { moveId: 0, amount: 0, date: new Date().toISOString().split('T')[0] };
  savingReconcile = false;
  selectedMove: PurchaseAvailableMoveDTO | null = null;
  readonly Math = Math;

  // Paiement
  showPaymentForm = false;
  payment = {
    journalId: 0,
    date: new Date().toISOString().split('T')[0],
    amount: 0,
    memo: ''
  };
  savingPayment = false;

  // Coûts d'enlèvement
  enlevementCosts: EnlevementRapportLine[] = [];
  get totalEnlevement(): number { return this.enlevementCosts.reduce((s, l) => s + (l.montantTotal ?? 0), 0); }

  constructor(
    private purchaseService: PurchaseService,
    private accountingService: AccountingService,
    private authService: AuthService,
    private companyService: CompanyService,
    private enlevementService: EnlevementService,
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
        this.loadReconciliations();
        if (data.state === 'posted' || data.state === 'paid') {
          this.loadEnlevementCosts();
        }
      },
      error: () => { this.loading = false; }
    });
  }

  loadEnlevementCosts(): void {
    this.enlevementService.getInvoiceCosts(this.invoiceId).subscribe({
      next: costs => { this.enlevementCosts = costs; },
      error: ()   => { this.enlevementCosts = []; }
    });
  }

  loadReconciliations(): void {
    this.purchaseService.getReconciliations(this.invoiceId).subscribe({
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
        this.loadEnlevementCosts();
        this.showSuccess(this.isAvoir ? 'Avoir validé — écriture comptable créée' : 'Facture validée — écriture comptable créée');
      },
      error: (err) => {
        this.posting = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la validation';
      }
    });
  }

  cancelInvoice(): void {
    const doc = this.isAvoir ? 'cet avoir' : 'cette facture';
    const stockNote = this.isAvoir ? ' Le stock retourné au fournisseur sera réintégré.' : '';
    const hasEntries = this.invoice?.accountMoveId;
    const msg = hasEntries
      ? `Annuler ${doc} ?${stockNote} Les écritures comptables NE seront PAS automatiquement inversées. Vous devrez cliquer sur "Inverser les écritures" ensuite.`
      : `Annuler ${doc} ?`;
    if (!confirm(msg)) return;

    this.cancelling = true;
    this.purchaseService.cancelInvoice(this.invoiceId).subscribe({
      next: (updated) => {
        this.invoice = updated;
        this.cancelling = false;
        this.showSuccess((this.isAvoir ? 'Avoir annulé — stock réintégré.' : 'Document annulé.') + ' Cliquez sur "Inverser les écritures" pour extourner les écritures comptables.');
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
        this.showSuccess(this.isAvoir ? 'Remboursement enregistré' : 'Paiement enregistré');
        this.loadInvoice();
      },
      error: (err) => {
        this.savingPayment = false;
        this.errorMsg = err.error?.message || 'Erreur lors du paiement';
      }
    });
  }

  reversePayment(paymentId: number): void {
    if (!confirm('Annuler ce paiement ? Une écriture comptable inverse sera générée.')) return;
    this.errorMsg = '';
    this.purchaseService.reversePayment(paymentId).subscribe({
      next: () => {
        this.showSuccess('Paiement annulé — écriture comptable inverse créée');
        this.loadInvoice();
      },
      error: (err) => { this.errorMsg = err.error?.message || 'Erreur lors de l\'annulation'; }
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

  openAvoirModal(): void {
    this.avoirType = 'integral';
    this.avoirDate = new Date().toISOString().split('T')[0];
    // Toutes les lignes avec quantité > 0, consignes/déconsignes comprises
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

    this.purchaseService.createAvoirFromInvoice(this.invoiceId, req).subscribe({
      next: (avoir) => {
        this.creatingAvoir = false;
        this.showAvoirModal = false;
        this.showSuccess(`Avoir ${avoir.name} créé`);
        setTimeout(() => this.router.navigate(['/purchases/invoices', avoir.id]), 1000);
      },
      error: (err) => {
        this.creatingAvoir = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la création de l\'avoir';
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
    this.purchaseService.applyCredit(this.invoiceId, this.creditAmount, this.authService.getCompanyId()).subscribe({
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

  get isInvoice(): boolean {
    return !this.invoice?.type || this.invoice.type === 'invoice';
  }

  get isAvoir(): boolean {
    return this.invoice?.type === 'credit_note';
  }

  /** Reste-t-il un solde dû après un avoir partiel (permet d'afficher "Enregistrer un paiement"). */
  get hasSoldeDu(): boolean {
    return (this.invoice?.montantDu ?? 0) > 0;
  }

  /**
   * Droit d'annuler une facture d'achat (ACHATS/FACTURES/CANCEL). Sans ce droit,
   * l'utilisateur doit passer par l'extourne. Les rôles privilégiés l'ont toujours.
   */
  get canCancelInvoice(): boolean {
    return this.authService.hasPermission('ACHATS', 'FACTURES', 'CANCEL');
  }

  get printDocType(): PrintDocType { return 'purchase_invoice'; }
  get printCompany() { return this.companyService.getCached(); }
  get printCompanyName(): string { return this.companyService.getCached()?.name ?? ''; }
  get printCompanyPhone(): string { return this.companyService.getCached()?.telephone ?? ''; }
  get printCompanyLogoUrl(): string { return this.companyService.getLogoUrl(); }
  get printCompanyLogoDataUrl(): string { return this.companyService.getCachedLogoDataUrl(); }
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

  // ===== TTC par ligne (inclut précompte) =====

  lineTotalTTC(line: { montantHT?: number; montantTVA?: number; precompte?: number }): number {
    return (line.montantHT ?? 0) + (line.montantTVA ?? 0) + (line.precompte ?? 0);
  }

  lineUnitTTC(line: { montantHT?: number; montantTVA?: number; precompte?: number; quantity?: number }): number {
    const qty = line.quantity || 1;
    return this.lineTotalTTC(line) / qty;
  }

  get invoiceHasRabais(): boolean {
    return (this.invoice?.lines ?? []).some(l => (l.rabaisUnitaire ?? 0) > 0);
  }

  // Convention alignée sur les ventes : prixUnitaire = prix CATALOGUE (le tarif fournisseur
  // n'affecte pas le prix de l'article, il est isolé en rabais et déduit au total).
  linePrixCatalogue(line: { prixUnitaire?: number; rabaisUnitaire?: number }): number {
    return line.prixUnitaire ?? 0;
  }

  lineTotalCatalogueHT(line: { quantity?: number; prixUnitaire?: number; rabaisUnitaire?: number }): number {
    return (line.quantity ?? 0) * this.linePrixCatalogue(line);
  }

  /** Net HT ligne = montant HT catalogue − rabais HT */
  lineNetHT(line: { montantHT?: number; totalRabaisLigne?: number }): number {
    return (line.montantHT ?? 0) - (line.totalRabaisLigne ?? 0);
  }

  /** Net TTC ligne = TTC catalogue − rabais TTC */
  lineNetTTC(line: { montantHT?: number; montantTVA?: number; precompte?: number; totalRabaisLigne?: number; tauxTVA?: number }): number {
    return this.lineTotalTTC(line) - this.lineTotalRabaisTTC(line);
  }

  lineRabaisUnitaireTTC(line: { rabaisUnitaire?: number; tauxTVA?: number }): number {
    const r = line.rabaisUnitaire ?? 0;
    if (r <= 0) return 0;
    return r * (1 + (line.tauxTVA ?? 0) / 100);
  }

  lineTotalRabaisTTC(line: { totalRabaisLigne?: number; tauxTVA?: number }): number {
    const r = line.totalRabaisLigne ?? 0;
    if (r <= 0) return 0;
    return r * (1 + (line.tauxTVA ?? 0) / 100);
  }

  get totalRabaisHTCalc(): number {
    return (this.invoice?.lines ?? []).reduce((s, l) => s + (l.totalRabaisLigne ?? 0), 0);
  }

  get totalRabaisTTCCalc(): number {
    return (this.invoice?.lines ?? []).reduce((s, l) => s + this.lineTotalRabaisTTC(l), 0);
  }

  // ===== Lettrage =====

  openReconcileModal(): void {
    this.loadingMoves = true;
    this.showReconcileModal = true;
    this.selectedMove = null;
    this.reconcileForm = { moveId: 0, amount: this.invoice?.montantDu || 0, date: new Date().toISOString().split('T')[0] };
    this.purchaseService.getAvailableMoves(this.invoiceId, this.authService.getCompanyId()).subscribe({
      next: (data) => { this.availableMoves = data; this.loadingMoves = false; },
      error: () => { this.loadingMoves = false; }
    });
  }

  selectMove(move: PurchaseAvailableMoveDTO): void {
    this.selectedMove = move;
    this.reconcileForm.moveId = move.moveId;
    this.reconcileForm.amount = Math.min(this.invoice?.montantDu || 0, move.montantDisponible);
  }

  saveReconcile(): void {
    if (!this.reconcileForm.moveId || this.reconcileForm.amount <= 0) return;
    this.savingReconcile = true;
    this.purchaseService.reconcile(this.invoiceId, {
      accountMoveId: this.reconcileForm.moveId,
      amount: this.reconcileForm.amount,
      date: this.reconcileForm.date
    }).subscribe({
      next: () => {
        this.savingReconcile = false;
        this.showReconcileModal = false;
        this.showSuccess('Facture rattachée au paiement');
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
    this.purchaseService.unreconcile(id).subscribe({
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
}
