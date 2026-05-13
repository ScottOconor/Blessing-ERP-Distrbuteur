import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesService, SalesOrder, SalesOrderLine, SalesClient } from '../../services/sales.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { StockService, Product, Warehouse } from '../../../stock/services/stock.service';
import { AccountJournal } from '../../../../core/models/account.model';
import { PrintPreviewComponent } from '../../../../shared/components/print-preview/print-preview.component';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, FormsModule, PrintPreviewComponent],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss'
})
export class OrderFormComponent implements OnInit {
  orderId: number | null = null;
  order: SalesOrder = this.emptyOrder();
  clients: SalesClient[] = [];
  journals: AccountJournal[] = [];
  warehouses: Warehouse[] = [];
  allProducts: Product[] = [];
  loading = false;
  saving = false;
  confirming = false;
  errorMsg = '';
  successMsg = '';
  showPrintModal = false;
  readonly TVA_DEFAULT = 19.25;

  partnerBalance: number | null = null;
  partnerCreditDisponible: number | null = null;
  loadingBalance = false;

  // Autocomplete state per line
  lineSearches: string[] = [];
  lineStockQty: number[] = []; // stock disponible par ligne
  activeSuggestionIdx: number | null = null;
  lineSearchResults: Product[][] = [];
  searchTimer: any = null;
  dropdownRect: { top: number; left: number; width: number } | null = null;

  @HostListener('window:scroll', [])
  @HostListener('window:resize', [])
  onWindowChange(): void { this.activeSuggestionIdx = null; }

  constructor(
    private salesService: SalesService,
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
    if (this.orderId) {
      this.loadOrder(this.orderId);
    }
  }

  private emptyOrder(): SalesOrder {
    return {
      date: new Date().toISOString().split('T')[0],
      partnerId: 0,
      journalId: 0,
      companyId: 0,
      lines: []
    };
  }

  onClientChange(partnerId: number): void {
    if (!partnerId) { this.partnerBalance = null; this.partnerCreditDisponible = null; return; }
    this.loadingBalance = true;
    this.salesService.getPartnerBalance(partnerId, this.authService.getCompanyId()).subscribe({
      next: (b) => {
        this.partnerBalance = b.balance;
        this.partnerCreditDisponible = b.credit;
        this.loadingBalance = false;
      },
      error: () => this.loadingBalance = false
    });
  }

  loadReferenceData(): void {
    const companyId = this.authService.getCompanyId();
    this.order.companyId = companyId;

    this.salesService.getClients(companyId).subscribe({
      next: (data) => this.clients = data
    });

    this.stockService.getWarehouses(companyId).subscribe({
      next: (data) => { this.warehouses = data.filter(w => w.active !== false); }
    });

    this.accountingService.getJournals(companyId).subscribe({
      next: (data) => {
        this.journals = data.filter(j => j.type === 'sale');
        if (this.journals.length > 0 && !this.order.journalId) {
          this.order.journalId = this.journals[0].id!;
        }
      }
    });

    this.stockService.getProducts(companyId).subscribe({
      next: (data) => {
        this.allProducts = data.filter(p => p.type === 'product' || p.type === 'consu');
        // Recalculate stock badges now that products are loaded (fixes race condition with loadOrder)
        this.lineStockQty = this.order.lines.map(l => {
          if (l.productId) {
            const p = this.allProducts.find(p => p.id === l.productId);
            return p?.qtyOnHand ?? 0;
          }
          return 0;
        });
      },
      error: () => { this.errorMsg = 'Impossible de charger les articles du stock'; }
    });
  }

  loadOrder(id: number): void {
    this.loading = true;
    this.salesService.getOrder(id).subscribe({
      next: (data) => {
        this.order = data;
        if (data.partnerId) this.onClientChange(data.partnerId);
        // Initialiser les recherches avec le code/nom existant
        this.lineSearches = data.lines.map(l => l.productCode ? `[${l.productCode}] ${l.description}` : l.description);
        // Initialiser le stock disponible depuis les produits chargés
        this.lineStockQty = data.lines.map(l => {
          if (l.productId) {
            const p = this.allProducts.find(p => p.id === l.productId);
            return p?.qtyOnHand ?? 0;
          }
          return 0;
        });
        this.lineSearchResults = data.lines.map(() => []);
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  get isReadOnly(): boolean {
    return this.order.state !== 'draft' && this.order.state !== undefined && this.order.state !== '';
  }

  get pageTitle(): string {
    if (!this.orderId) return 'Nouveau bon de commande';
    return this.order.name ? `Bon ${this.order.name}` : 'Chargement...';
  }

  addLine(): void {
    this.order.lines.push({
      description: '',
      quantity: 1,
      prixUnitaire: 0,
      tauxRemise: 0,
      tauxTVA: this.TVA_DEFAULT,
      accountCode: '7011'
    });
    this.lineSearches.push('');
    this.lineStockQty.push(0);
    this.lineSearchResults.push([]);
  }

  hasStockWarning(i: number): boolean {
    const line = this.order.lines[i];
    const available = this.lineStockQty[i] ?? 0;
    return !!(line.productId) && available >= 0 && (line.quantity || 0) > available;
  }

  // ---- Autocomplete ----

  getSuggestions(i: number): Product[] {
    if (this.lineSearchResults[i]?.length > 0) {
      return this.lineSearchResults[i];
    }
    const q = (this.lineSearches[i] || '').toLowerCase().trim();
    if (!q) return this.allProducts.slice(0, 8);
    const matches = this.allProducts.filter(p =>
      p.name.toLowerCase().includes(q) ||
      (p.defaultCode || '').toLowerCase().includes(q)
    );
    // Rank: exact code match first, code starts-with second, name starts-with third, rest
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
      // Fallback to client-side or no search needed
      this.lineSearchResults[i] = [];
      return;
    }

    this.searchTimer = setTimeout(() => {
      const companyId = this.authService.getCompanyId();
      this.stockService.searchProducts(query, companyId).subscribe({
        next: (products) => {
          this.lineSearchResults[i] = products.filter(p => (p.qtyOnHand || 0) >= 0).slice(0, 10);
        },
        error: () => {
          this.lineSearchResults[i] = []; // Fallback to allProducts
        }
      });
    }, 300);
  }

  openSuggestions(i: number, event?: FocusEvent | Event): void {
    if (event instanceof FocusEvent && this.order.lines[i]?.productCode) {
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
  }

  closeSuggestions(i?: number): void {
    // Délai pour laisser le mousedown sur suggestion se déclencher d'abord
    setTimeout(() => {
      this.activeSuggestionIdx = null;
      // Restaurer le texte d'affichage si le produit est toujours sélectionné
      if (i !== undefined) {
        const line = this.order.lines[i];
        if (line?.productCode && !this.lineSearches[i]) {
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
    line.productCode = product.defaultCode || '';
    line.description = product.name;
    line.prixUnitaire = product.salePrice || 0;
    line.tauxTVA = this.TVA_DEFAULT;
    line.accountCode = '701100';
    line.categoryId = product.categoryId;
    this.lineSearches[i] = product.defaultCode
      ? `[${product.defaultCode}] ${product.name}`
      : product.name;
    this.lineStockQty[i] = product.qtyOnHand ?? 0;
    this.activeSuggestionIdx = null;
    this.onLineChange(line);
  }

  clearLine(i: number): void {
    const line = this.order.lines[i];
    line.productId = undefined;
    line.productCode = '';
    line.description = '';
    line.prixUnitaire = 0;
    this.lineSearches[i] = '';
    this.lineStockQty[i] = 0;
    this.lineSearchResults[i] = [];
    this.activeSuggestionIdx = i;
  }

  removeLine(index: number): void {
    this.order.lines.splice(index, 1);
    this.lineSearches.splice(index, 1);
    this.lineStockQty.splice(index, 1);
    this.lineSearchResults.splice(index, 1);
    this.computeTotals();
  }

  onLineChange(line: SalesOrderLine): void {
    const qty = line.quantity || 0;
    const pu = line.prixUnitaire || 0;
    const remise = line.tauxRemise || 0;
    const tva = line.tauxTVA || 0;

    const brut = qty * pu;
    const remiseMontant = brut * remise / 100;
    const ht = brut - remiseMontant;
    const montantTVA = ht * tva / 100;

    line.montantHT = Math.round(ht * 100) / 100;
    line.montantTVA = Math.round(montantTVA * 100) / 100;
    line.montantTTC = Math.round((ht + montantTVA) * 100) / 100;

    this.computeTotals();
  }

  computeTotals(): void {
    let ht = 0, tva = 0, ttc = 0, remise = 0;
    for (const line of this.order.lines) {
      ht += line.montantHT || 0;
      tva += line.montantTVA || 0;
      ttc += line.montantTTC || 0;
      const brut = (line.quantity || 0) * (line.prixUnitaire || 0);
      remise += brut * (line.tauxRemise || 0) / 100;
    }
    this.order.totalHT = Math.round(ht * 100) / 100;
    this.order.totalTVA = Math.round(tva * 100) / 100;
    this.order.totalTTC = Math.round(ttc * 100) / 100;
    this.order.totalRemise = Math.round(remise * 100) / 100;
  }

  save(): void {
    const missing: string[] = [];
    if (!this.order.partnerId) missing.push('Client');
    if (!this.order.journalId) missing.push('Journal');
    if (!this.order.warehouseId) missing.push('Entrepôt');
    if (this.order.lines.length === 0) missing.push('Lignes');
    if (missing.length > 0) {
      this.errorMsg = `Champs manquants : ${missing.join(', ')}`;
      return;
    }

    this.saving = true;
    this.errorMsg = '';

    const isNew = !this.orderId;
    const obs = isNew
      ? this.salesService.createOrder(this.order)
      : this.salesService.updateOrder(this.orderId!, this.order);

    obs.subscribe({
      next: (saved) => {
        this.saving = false;
        this.order = saved;
        if (isNew) {
          this.router.navigate(['/sales/orders', saved.id]);
        } else {
          this.orderId = saved.id!;
          // Re-sync searches and stock quantities from saved lines
          this.lineSearches = saved.lines.map(l => l.productCode ? `[${l.productCode}] ${l.description}` : l.description);
          this.lineStockQty = saved.lines.map(l => {
            if (l.productId) {
              const p = this.allProducts.find(p => p.id === l.productId);
              return p?.qtyOnHand ?? 0;
            }
            return 0;
          });
          this.lineSearchResults = saved.lines.map(() => []);
          this.showSuccess('Bon sauvegardé');
        }
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la sauvegarde';
      }
    });
  }

  confirm(): void {
    if (!this.orderId) return;
    if (!confirm('Confirmer ce bon de commande ? Une facture sera créée automatiquement.')) return;

    this.confirming = true;
    this.errorMsg = '';
    this.salesService.confirmOrder(this.orderId).subscribe({
      next: (updated) => {
        this.confirming = false;
        this.order = updated;
        this.showSuccess(`Bon confirmé — Facture ${updated.invoiceName} créée`);
        if (updated.invoiceId) {
          setTimeout(() => this.router.navigate(['/sales/invoices', updated.invoiceId]), 1500);
        }
      },
      error: (err) => {
        this.confirming = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la confirmation';
      }
    });
  }

  cancelOrder(): void {
    if (!this.orderId) return;
    if (!confirm('Annuler ce bon de commande ?')) return;

    this.salesService.cancelOrder(this.orderId).subscribe({
      next: (updated) => { this.order = updated; },
      error: (err) => { this.errorMsg = err.error?.message || 'Erreur lors de l\'annulation'; }
    });
  }

  get printCompanyName(): string { return this.authService.getActiveCompany()?.name ?? ''; }
  openPrint(): void { this.showPrintModal = true; }
  closePrint(): void { this.showPrintModal = false; }

  back(): void {
    this.router.navigate(['/sales/orders']);
  }

  stateLabel(s?: string): string {
    const map: Record<string, string> = {
      draft: 'Brouillon',
      confirmed: 'Confirmé',
      invoiced: 'Facturé',
      cancelled: 'Annulé'
    };
    return map[s ?? ''] ?? s ?? '';
  }

  showSuccess(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 4000);
  }
}
