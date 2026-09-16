import { Component, OnInit, HostListener, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService, PurchaseOrder, PurchaseOrderLine, PurchaseInvoice } from '../../services/purchase.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { CompanyService } from '../../../../core/services/company.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { StockService, Product } from '../../../stock/services/stock.service';
import { PrintPreviewComponent } from '../../../../shared/components/print-preview/print-preview.component';
import { EnlevementService } from '../../services/enlevement.service';
import { AuditTrailComponent } from '../../../../shared/components/audit-trail/audit-trail.component';
import { CONSIGNE_CODES } from '../../../../shared/constants/consigne-codes';

@Component({
  selector: 'app-purchase-order-form',
  standalone: true,
  imports: [CommonModule, FormsModule, PrintPreviewComponent, AuditTrailComponent],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss'
})
export class OrderFormComponent implements OnInit {
  orderId: number | null = null;
  order: PurchaseOrder = this.emptyOrder();
  suppliers: any[] = [];
  allProducts: Product[] = [];
  loading = false;
  saving = false;
  confirming = false;
  errorMsg = '';
  successMsg = '';
  showPrintModal = false;
  invoiceDetails: PurchaseInvoice | null = null;
  supplierPrecompteRate = 0;
  fraisEnlevementLines: { categoryName: string; quantite: number; montantUnitaire: number; montantTotal: number }[] = [];
  orderTotalPrecompte = 0;
  readonly TVA_DEFAULT = 19.25;

  // Autocomplete state per line
  lineSearches: string[] = [];
  activeSuggestionIdx: number | null = null;
  lineSearchResults: Product[][] = [];
  searchTimer: any = null;

  @ViewChildren('productInput') productInputs!: QueryList<ElementRef>;
  dropdownRect: { top: number; left: number; width: number } | null = null;

  // Autocomplete fournisseur
  supplierSearch = '';
  supplierDropdown = false;
  get filteredSuppliers(): any[] {
    if (!this.supplierSearch.trim()) return this.suppliers.slice(0, 50);
    const q = this.supplierSearch.toLowerCase();
    return this.suppliers.filter((s: any) =>
      s.name?.toLowerCase().includes(q) || (s.ref || '').toLowerCase().includes(q)
    ).slice(0, 50);
  }
  selectSupplier(s: any): void {
    this.order.partnerId = s.id;
    this.supplierSearch = s.name + (s.ref ? ' (' + s.ref + ')' : '');
    this.supplierDropdown = false;
    this.loadSupplierPrecompteRate(s.id);
  }

  private loadSupplierPrecompteRate(partnerId: number): void {
    const cid = this.authService.getCompanyId() ?? 1;
    this.purchaseService.getSupplierPrecompteRate(partnerId, cid).subscribe({
      next: ({ tauxPrecompte }) => {
        this.supplierPrecompteRate = tauxPrecompte ?? 0;
        this.order.lines.forEach((l, i) => {
          this.computeLine(i);
          if (l.productId) this.loadSupplierPriceForLine(i, l.productId);
        });
      },
      error: () => { this.supplierPrecompteRate = 0; }
    });
  }
  onSupplierBlur(): void { setTimeout(() => this.supplierDropdown = false, 200); }

  @HostListener('window:scroll', [])
  @HostListener('window:resize', [])
  onWindowChange(): void { this.activeSuggestionIdx = null; }

  constructor(
    private purchaseService: PurchaseService,
    private accountingService: AccountingService,
    private stockService: StockService,
    private authService: AuthService,
    private companyService: CompanyService,
    private enlevementService: EnlevementService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.orderId = id ? +id : null;
    this.loadReferenceData();
    if (this.orderId) this.loadOrder(this.orderId);
  }

  private emptyOrder(): PurchaseOrder {
    return {
      date: new Date().toISOString().split('T')[0],
      partnerId: 0,
      companyId: 0,
      lines: []
    };
  }

  loadReferenceData(): void {
    const companyId = this.authService.getCompanyId() ?? 1;
    this.order.companyId = companyId;

    // Load suppliers (partners marked as suppliers)
    this.accountingService.getPartners(companyId).subscribe({
      next: data => this.suppliers = data.filter((p: any) => p.type === 'supplier' || p.type === 'both')
    });

    this.stockService.getProducts(companyId).subscribe({
      next: data => { this.allProducts = data.filter(p => p.type === 'product' || p.type === 'consu'); },
      error: () => { this.errorMsg = 'Impossible de charger les articles du stock'; }
    });
  }

  loadOrder(id: number): void {
    this.loading = true;
    this.purchaseService.getOrder(id).subscribe({
      next: data => {
        this.order = data;
        this.order.lines.forEach(l => {
          l.consigne = CONSIGNE_CODES.has((l.productCode ?? '').trim().toUpperCase());
        });
        this.supplierSearch = data.partnerName || '';
        this.lineSearches = data.lines.map(l =>
          l.productCode ? `[${l.productCode}] ${l.description}` : l.description
        );
        this.lineSearchResults = data.lines.map(() => []);
        this.loading = false;
        if (data.partnerId) this.loadSupplierPrecompteRate(data.partnerId);
        if (data.invoiceId) {
          this.purchaseService.getInvoice(data.invoiceId).subscribe({
            next: inv => {
              this.invoiceDetails = inv;
              this.enlevementService.getInvoiceCosts(data.invoiceId!).subscribe({
                next: costs => { this.fraisEnlevementLines = costs; },
                error: () => { this.fraisEnlevementLines = []; }
              });
            }
          });
        }
      },
      error: () => { this.loading = false; }
    });
  }

  get isReadOnly(): boolean {
    return !!this.order.state && !['draft'].includes(this.order.state);
  }

  // ===== LINES =====

  addLine(): void {
    this.order.lines.push({
      description: '',
      quantity: 1,
      prixUnitaire: 0,
      tauxTVA: this.TVA_DEFAULT
    });
    this.lineSearches.push('');
    this.lineSearchResults.push([]);
  }

  removeLine(i: number): void {
    this.order.lines.splice(i, 1);
    this.lineSearches.splice(i, 1);
    this.lineSearchResults.splice(i, 1);
  }

  computeLine(i: number): void {
    const line = this.order.lines[i];
    const qty = line.quantity ?? 0;
    const pu = line.prixUnitaire ?? 0;
    const tva = line.tauxTVA ?? 0;
    const pc = line.consigne ? 0 : (this.supplierPrecompteRate ?? 0);
    line.montantHT = Math.round(qty * pu * 100) / 100;
    line.montantTVA = Math.round(line.montantHT * tva) / 100;
    line.montantPrecompte = Math.round(line.montantHT * pc) / 100;
    line.montantTTC = Math.round((line.montantHT + line.montantTVA + (line.montantPrecompte ?? 0)) * 100) / 100;
    // Le rabais n'affecte pas le prix de l'article : il est isolé puis déduit au total
    line.totalRabaisLigne = Math.round(qty * (line.rabaisUnitaire ?? 0) * 100) / 100;
    this.computeTotals();
  }

  computeTotals(): void {
    this.order.totalHT = this.order.lines.reduce((s, l) => s + (l.montantHT ?? 0), 0);
    this.order.totalTVA = this.order.lines.reduce((s, l) => s + (l.montantTVA ?? 0), 0);
    this.orderTotalPrecompte = this.order.lines.reduce((s, l) => s + (l.montantPrecompte ?? 0), 0);
    this.order.totalTTC = (this.order.totalHT ?? 0) + (this.order.totalTVA ?? 0) + this.orderTotalPrecompte;
  }

  // ===== AUTOCOMPLETE =====

  getSuggestions(i: number): Product[] {
    if (this.lineSearchResults[i]?.length > 0) {
      return this.lineSearchResults[i];
    }
    const q = (this.lineSearches[i] ?? '').toLowerCase().trim();
    if (!q) return this.allProducts.slice(0, 8);
    const matches = this.allProducts.filter(p =>
      p.name.toLowerCase().includes(q) || (p.defaultCode ?? '').toLowerCase().includes(q)
    );
    matches.sort((a, b) => {
      const codeA = (a.defaultCode || '').toLowerCase();
      const codeB = (b.defaultCode || '').toLowerCase();
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      const rank = (code: string, name: string) =>
        code === q ? 0 : code.startsWith(q) ? 1 : name.startsWith(q) ? 2 : 3;
      return rank(codeA, nameA) - rank(codeB, nameB);
    });
    return matches.slice(0, 12);
  }

  onSearchInput(i: number): void {
    // Clear previous timer
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
    }

    const query = this.lineSearches[i]?.trim();
    if (!query || query.length < 2 || this.allProducts.length > 0) {
      this.lineSearchResults[i] = [];
      return;
    }

    this.searchTimer = setTimeout(() => {
      const companyId = this.authService.getCompanyId() ?? 1;
      this.stockService.searchProducts(query, companyId).subscribe({
        next: (products) => {
          this.lineSearchResults[i] = products.slice(0, 10);
        },
        error: () => {
          this.lineSearchResults[i] = []; // Fallback
        }
      });
    }, 300);
  }

  openSuggestions(i: number, event?: FocusEvent | Event): void {
    if (event instanceof FocusEvent && this.order.lines[i]?.productId) {
      this.lineSearches[i] = '';
    }
    if (event?.target) {
      const rect = (event.target as HTMLElement).getBoundingClientRect();
      const dropdownWidth = Math.max(rect.width, 420);
      const left = Math.min(rect.left, window.innerWidth - dropdownWidth - 8);
      this.dropdownRect = { top: rect.bottom + 4, left, width: dropdownWidth };
    }
    this.activeSuggestionIdx = i;
    this.onSearchInput(i);
  }

  onProductSearchEnter(i: number, event: Event): void {
    event.preventDefault();
    const suggestions = this.getSuggestions(i);
    if (suggestions.length > 0) {
      this.selectProduct(i, suggestions[0]);
    }
  }

  onLineEnter(event: Event): void {
    event.preventDefault();
    this.addLine();
    setTimeout(() => {
      const inputs = this.productInputs.toArray();
      if (inputs.length > 0) inputs[inputs.length - 1].nativeElement.focus();
    }, 50);
  }

  closeSuggestions(i?: number): void {
    setTimeout(() => {
      this.activeSuggestionIdx = null;
      if (i !== undefined) {
        const line = this.order.lines[i];
        if (line?.productId && !this.lineSearches[i]) {
          this.lineSearches[i] = line.productCode
            ? `[${line.productCode}] ${line.description}`
            : line.description;
        }
      }
    }, 200);
  }

  selectProduct(i: number, product: Product): void {
    const line = this.order.lines[i];
    line.productId = product.id;
    line.productCode = product.defaultCode ?? '';
    line.description = product.name;
    line.standardPrice = product.standardPrice ?? 0;
    line.prixUnitaire = product.standardPrice ?? 0;   // prix normal (catalogue)
    line.rabaisUnitaire = 0;
    line.totalRabaisLigne = 0;
    line.tauxTVA = product.exemptTvaAchat ? 0 : (line.tauxTVA ?? this.TVA_DEFAULT);
    line.categoryId = product.categoryId;
    line.consigne = CONSIGNE_CODES.has((product.defaultCode ?? '').trim().toUpperCase());
    this.lineSearches[i] = `[${product.defaultCode}] ${product.name}`;
    this.activeSuggestionIdx = null;
    this.computeLine(i);
    // Tarif fournisseur → la différence avec le prix normal sort en rabais (n'affecte pas le prix)
    if (product.id) this.loadSupplierPriceForLine(i, product.id);
  }

  /** Récupère le tarif fournisseur d'un produit et place la différence (standard − tarif) en rabais */
  private loadSupplierPriceForLine(i: number, productId: number): void {
    const supplierId = this.order.partnerId;
    const companyId = this.authService.getCompanyId() ?? 1;
    if (!supplierId || !companyId) return;
    this.purchaseService.getPrixFournisseurForProduct(supplierId, productId, companyId).subscribe({
      next: prix => {
        const line = this.order.lines[i];
        if (!line || !prix) return;
        const std = line.standardPrice ?? line.prixUnitaire ?? 0;
        // rabais = catalogue (standard_price) − tarif, jamais négatif
        line.rabaisUnitaire = Math.max(0, Math.round((std - (prix.prixFournisseur ?? 0)) * 100) / 100);
        this.computeLine(i);
      },
      error: () => {}
    });
  }

  get totalRabais(): number {
    return this.order.lines.reduce((s, l) => s + (l.totalRabaisLigne ?? 0), 0);
  }

  /** Rabais TTC (approximation TVA + précompte) déduit du net à payer */
  get totalRabaisTTC(): number {
    return this.order.lines.reduce((s, l) => {
      const r = l.totalRabaisLigne ?? 0;
      const pc = l.consigne ? 0 : (this.supplierPrecompteRate ?? 0);
      return s + r * (1 + (l.tauxTVA ?? 0) / 100 + pc / 100);
    }, 0);
  }

  clearLine(i: number): void {
    const line = this.order.lines[i];
    line.productId = undefined;
    line.productCode = '';
    line.description = '';
    line.prixUnitaire = 0;
    line.standardPrice = 0;
    line.rabaisUnitaire = 0;
    line.totalRabaisLigne = 0;
    this.lineSearches[i] = '';
    this.lineSearchResults[i] = [];
    this.activeSuggestionIdx = i;
    this.computeLine(i);
  }

  // ===== SAVE =====

  saveOrder(): void {
    if (!this.order.partnerId) { this.errorMsg = 'Sélectionnez un fournisseur'; return; }
    if (this.order.lines.length === 0) { this.errorMsg = 'Ajoutez au moins une ligne'; return; }

    this.saving = true;
    this.errorMsg = '';

    const action = this.orderId
      ? this.purchaseService.updateOrder(this.orderId, this.order)
      : this.purchaseService.createOrder(this.order);

    action.subscribe({
      next: saved => {
        this.saving = false;
        if (!this.orderId) {
          this.router.navigate(['/purchases/orders', saved.id]);
        } else {
          this.order = saved;
          this.successMsg = 'Commande sauvegardée';
          setTimeout(() => this.successMsg = '', 4000);
        }
      },
      error: err => {
        this.saving = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la sauvegarde';
      }
    });
  }

  confirmOrder(): void {
    if (!this.orderId) return;
    if (!confirm('Confirmer la commande ?')) return;

    this.confirming = true;
    this.errorMsg = '';
    this.purchaseService.confirmOrder(this.orderId).subscribe({
      next: updated => {
        this.confirming = false;
        this.order = updated;
        if (updated.invoiceId) {
          this.successMsg = `Commande confirmée. Redirection vers la facture...`;
          setTimeout(() => this.router.navigate(['/purchases/invoices', updated.invoiceId]), 800);
        } else {
          this.successMsg = 'Commande confirmée.';
        }
      },
      error: err => {
        this.confirming = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la confirmation';
      }
    });
  }

  cancelOrder(): void {
    if (!this.orderId) return;
    if (!confirm('Annuler la commande ?')) return;

    this.purchaseService.cancelOrder(this.orderId).subscribe({
      next: updated => { this.order = updated; },
      error: err => { this.errorMsg = err.error?.message || 'Erreur lors de l\'annulation'; }
    });
  }

  backToList(): void { this.router.navigate(['/purchases/orders']); }

  get printCompany() { return this.companyService.getCached(); }
  get printCompanyName(): string { return this.companyService.getCached()?.name ?? ''; }
  get printCompanyPhone(): string { return this.companyService.getCached()?.telephone ?? ''; }
  get printCompanyLogoUrl(): string { return this.companyService.getLogoUrl(); }
  get printCompanyLogoDataUrl(): string { return this.companyService.getCachedLogoDataUrl(); }
  openPrint(): void { this.showPrintModal = true; }
  closePrint(): void { this.showPrintModal = false; }

  stateLabel(s?: string): string {
    const map: Record<string, string> = { draft: 'Brouillon', confirmed: 'Confirmée', received: 'Réceptionnée', cancelled: 'Annulée' };
    return map[s ?? ''] ?? s ?? '';
  }

  invoiceStateLabel(s?: string): string {
    const map: Record<string, string> = { draft: 'Brouillon', posted: 'Validée', paid: 'Payée', cancelled: 'Annulée' };
    return map[s ?? ''] ?? s ?? '';
  }

  invoiceBadgeClass(s?: string): string {
    const map: Record<string, string> = { draft: 'badge-draft', posted: 'badge-posted', paid: 'badge-success', cancelled: 'badge-cancel' };
    return map[s ?? ''] ?? 'badge-secondary';
  }

  get totalHT(): number {
    return this.invoiceDetails?.totalHT ?? this.order.totalHT ?? 0;
  }
  get totalTVA(): number {
    return this.invoiceDetails?.totalTVA ?? this.order.totalTVA ?? 0;
  }
  get totalPrecompte(): number {
    return this.invoiceDetails?.totalPrecompte ?? this.orderTotalPrecompte;
  }
  get totalTaxes(): number {
    return this.totalTVA + this.totalPrecompte;
  }
  get totalLiquideNu(): number {
    return this.invoiceDetails?.totalLiquideNu ?? (this.totalHT + this.totalTVA);
  }
  get totalTTC(): number {
    return this.invoiceDetails?.totalTTC ?? this.order.totalTTC ?? 0;
  }
  get totalFraisEnlevement(): number {
    if (this.invoiceDetails?.fraisEnlevementTTC) return this.invoiceDetails.fraisEnlevementTTC;
    return this.fraisEnlevementLines.reduce((s, l) => s + (l.montantTotal ?? 0), 0);
  }
  get netAPayer(): number {
    return this.invoiceDetails?.netAPayer ?? Math.round(this.totalTTC - this.totalRabaisTTC);
  }
  get supplierPrecompteLabel(): string {
    return this.supplierPrecompteRate > 0 ? `PSA (${this.supplierPrecompteRate}%)` : 'PSA';
  }
}
