import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService, PurchaseOrder, PurchaseOrderLine } from '../../services/purchase.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { StockService, Product } from '../../../stock/services/stock.service';

@Component({
  selector: 'app-purchase-order-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
  readonly TVA_DEFAULT = 19.25;

  // Autocomplete state per line
  lineSearches: string[] = [];
  activeSuggestionIdx: number | null = null;
  lineSearchResults: Product[][] = [];
  searchTimer: any = null;
  dropdownRect: { top: number; left: number; width: number } | null = null;

  @HostListener('window:scroll', [])
  @HostListener('window:resize', [])
  onWindowChange(): void { this.activeSuggestionIdx = null; }

  constructor(
    private purchaseService: PurchaseService,
    private accountingService: AccountingService,
    private stockService: StockService,
    private authService: AuthService,
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
        this.lineSearches = data.lines.map(l =>
          l.productCode ? `[${l.productCode}] ${l.description}` : l.description
        );
        this.lineSearchResults = data.lines.map(() => []);
        this.loading = false;
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
    line.montantHT = Math.round(qty * pu * 100) / 100;
    line.montantTVA = Math.round(line.montantHT * tva) / 100;
    line.montantTTC = Math.round((line.montantHT + line.montantTVA) * 100) / 100;
    this.computeTotals();
  }

  computeTotals(): void {
    this.order.totalHT = this.order.lines.reduce((s, l) => s + (l.montantHT ?? 0), 0);
    this.order.totalTVA = this.order.lines.reduce((s, l) => s + (l.montantTVA ?? 0), 0);
    this.order.totalTTC = (this.order.totalHT ?? 0) + (this.order.totalTVA ?? 0);
  }

  // ===== AUTOCOMPLETE =====

  getSuggestions(i: number): Product[] {
    // Use search results if available, fallback to client-side filter
    if (this.lineSearchResults[i]?.length > 0) {
      return this.lineSearchResults[i];
    }
    const search = (this.lineSearches[i] ?? '').toLowerCase();
    if (!search) return this.allProducts.slice(0, 8);
    return this.allProducts.filter(p =>
      p.name.toLowerCase().includes(search) || (p.defaultCode ?? '').toLowerCase().includes(search)
    ).slice(0, 10);
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
    if (this.order.lines[i]?.productId) {
      this.lineSearches[i] = '';
    }
    if (event?.target) {
      const rect = (event.target as HTMLElement).getBoundingClientRect();
      const dropdownWidth = Math.max(rect.width, 420);
      // S'assurer que le dropdown ne dépasse pas à droite
      const left = Math.min(rect.left, window.innerWidth - dropdownWidth - 8);
      this.dropdownRect = { top: rect.bottom + 4, left, width: dropdownWidth };
    }
    this.activeSuggestionIdx = i;
    this.onSearchInput(i);
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
    line.prixUnitaire = product.standardPrice ?? 0;
    line.tauxTVA = line.tauxTVA ?? this.TVA_DEFAULT;
    line.categoryId = product.categoryId;
    this.lineSearches[i] = `[${product.defaultCode}] ${product.name}`;
    this.activeSuggestionIdx = null;
    this.computeLine(i);
  }

  clearLine(i: number): void {
    const line = this.order.lines[i];
    line.productId = undefined;
    line.productCode = '';
    line.description = '';
    line.prixUnitaire = 0;
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

  stateLabel(s?: string): string {
    const map: Record<string, string> = { draft: 'Brouillon', confirmed: 'Confirmée', received: 'Réceptionnée', cancelled: 'Annulée' };
    return map[s ?? ''] ?? s ?? '';
  }

  get totalHT(): number { return this.order.totalHT ?? 0; }
  get totalTVA(): number { return this.order.totalTVA ?? 0; }
  get totalTTC(): number { return this.order.totalTTC ?? 0; }
}
