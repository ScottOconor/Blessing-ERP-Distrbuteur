import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupedList, ListGroup, ListQuery, PAGE_SIZE } from '../../../../core/utils/server-list';
import { PagerComponent } from '../../../../shared/components/pager/pager.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PurchaseService, PurchaseInvoice, PurchaseInvoiceLine } from '../../services/purchase.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { StockService, Product, Warehouse } from '../../../stock/services/stock.service';
import { AccountJournal } from '../../../../core/models/account.model';

@Component({
  selector: 'app-purchase-avoir-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PagerComponent],
  templateUrl: './avoir-list.component.html',
  styleUrl: './avoir-list.component.scss'
})
export class PurchaseAvoirListComponent implements OnInit {
  avoirs: PurchaseInvoice[] = [];
  filteredAvoirs: PurchaseInvoice[] = [];
  loading = false;
  stateFilter = 'all';
  dateFrom = '';
  dateTo = '';

  stateFilters = [
    { value: 'all',       label: 'Tous' },
    { value: 'draft',     label: 'Brouillon' },
    { value: 'posted',    label: 'Validé' },
    { value: 'cancelled', label: 'Annulé' }
  ];

  // === Modal création avoir direct ===
  showModal = false;
  saving = false;
  errorMsg = '';
  suppliers: any[] = [];
  journals: AccountJournal[] = [];
  allProducts: Product[] = [];
  readonly TVA_DEFAULT = 19.25;

  avoirForm: PurchaseInvoice = this.emptyAvoir();
  lineSearches: string[] = [];
  lineSearchResults: Product[][] = [];
  lineStockQty: number[] = [];
  lineCatHT: number[] = [];
  activeSuggestionIdx: number | null = null;
  dropdownRect: { top: number; left: number; width: number } | null = null;
  defaultWarehouseId: number | null = null;
  warehouses: Warehouse[] = [];
  selectedWarehouseId: number | null = null;

  @HostListener('window:scroll', [])
  @HostListener('window:resize', [])
  onWindowChange(): void { this.activeSuggestionIdx = null; }

  private companyId!: number;

  constructor(
    private purchaseService: PurchaseService,
    private accountingService: AccountingService,
    private stockService: StockService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId();
    this.loadAvoirs();
  }

  loadAvoirs(): void {
    this.loading = true;
    this.loadListPage();
  }

  applyFilter(): void {
    this.page = 0;
    this.loadListPage();
  }

  setFilter(state: string): void {
    this.stateFilter = state;
    this.applyFilter();
  }

  clearDateFilter(): void { this.dateFrom = ''; this.dateTo = ''; this.applyFilter(); }

  openAvoir(avoir: PurchaseInvoice): void {
    this.router.navigate(['/purchases/invoices', avoir.id]);
  }

  getStateBadge(state: string): string {
    const map: Record<string, string> = {
      draft: 'badge-draft', posted: 'badge-posted', cancelled: 'badge-cancelled'
    };
    return 'badge ' + (map[state] || 'badge-draft');
  }

  getStateLabel(state: string): string {
    const map: Record<string, string> = { draft: 'Brouillon', posted: 'Validé', cancelled: 'Annulé' };
    return map[state] || state;
  }

  /** Total TTC des avoirs validés parmi les avoirs filtrés (calculé par le serveur). */
  postedTotal = 0;

  totalAvoirs(): number {
    return this.postedTotal;
  }

  private refreshPostedTotal(): void {
    if (this.stateFilter !== 'all' && this.stateFilter !== 'posted') { this.postedTotal = 0; return; }
    this.purchaseService.getAvoirsPage({ ...this.listQuery(), state: 'posted', page: 0, size: 1 }).subscribe({
      next: (r: any) => this.postedTotal = Number(r.totals?.['ttc']) || 0,
      error: () => {}
    });
  }

  // === Création avoir direct ===

  openCreate(): void {
    this.errorMsg = '';
    this.avoirForm = this.emptyAvoir();
    this.lineSearches = [];
    this.lineSearchResults = [];
    this.lineStockQty = [];
    this.lineCatHT = [];
    this.activeSuggestionIdx = null;
    this.showModal = true;

    // Charger les entrepôts (pour le menu déroulant) puis les données de l'entrepôt sélectionné.
    if (this.warehouses.length === 0) {
      this.stockService.getWarehouses(this.companyId).subscribe({
        next: (whs) => {
          this.warehouses = whs;
          const def = whs.find(w => w.isDefault) ?? whs[0] ?? null;
          this.defaultWarehouseId = def?.id ?? null;
          this.selectedWarehouseId = this.defaultWarehouseId;
          this.loadCreateData(this.selectedWarehouseId);
        },
        error: () => this.loadCreateData(null)
      });
    } else {
      this.selectedWarehouseId = this.selectedWarehouseId ?? this.defaultWarehouseId;
      this.loadCreateData(this.selectedWarehouseId);
    }
  }

  private loadCreateData(whId: number | null): void {
    forkJoin({
      partners: this.accountingService.getPartners(this.companyId),
      journals: this.accountingService.getJournals(this.companyId),
      products: this.stockService.getProducts(this.companyId, whId ?? undefined)
    }).subscribe({
      next: ({ partners, journals, products }) => {
        this.suppliers = partners.filter((p: any) => p.type === 'supplier' || p.type === 'both');
        this.journals = journals.filter(j => j.type === 'purchase');
        this.allProducts = products.filter(p => p.type === 'product' || p.type === 'consu' || p.type === 'service');
        if (this.journals.length > 0 && !this.avoirForm.journalId) {
          this.avoirForm.journalId = this.journals[0].id!;
        }
      }
    });
  }

  /**
   * Rechargement des quantités dispo quand on change d'entrepôt : recharge les produits
   * pour l'entrepôt choisi et rafraîchit la quantité dispo affichée sur les lignes déjà saisies.
   */
  onWarehouseChange(): void {
    this.stockService.getProducts(this.companyId, this.selectedWarehouseId ?? undefined).subscribe({
      next: (products) => {
        this.allProducts = products.filter(p => p.type === 'product' || p.type === 'consu' || p.type === 'service');
        this.avoirForm.lines.forEach((line, i) => {
          if (!line.productCode) return;
          const p = this.allProducts.find(pr => pr.defaultCode === line.productCode);
          this.lineStockQty[i] = p?.qtyAvailable ?? p?.qtyOnHand ?? 0;
        });
      }
    });
  }

  closeModal(): void {
    this.showModal = false;
    this.errorMsg = '';
  }

  private emptyAvoir(): PurchaseInvoice {
    return {
      date: new Date().toISOString().split('T')[0],
      partnerId: 0,
      companyId: this.companyId || 0,
      type: 'credit_note',
      lines: []
    };
  }

  addLine(): void {
    this.lineStockQty.push(0);
    this.lineCatHT.push(0);
    this.avoirForm.lines.push({
      description: '',
      quantity: 1,
      prixUnitaire: 0,
      tauxTVA: this.TVA_DEFAULT,
      accountCode: '6011'
    });
    this.lineSearches.push('');
    this.lineSearchResults.push([]);
  }

  removeLine(i: number): void {
    this.avoirForm.lines.splice(i, 1);
    this.lineSearches.splice(i, 1);
    this.lineSearchResults.splice(i, 1);
    this.lineStockQty.splice(i, 1);
    this.lineCatHT.splice(i, 1);
    this.computeTotals();
  }

  onCatHTChange(i: number, catPrice: number): void {
    this.lineCatHT[i] = catPrice;
    const line = this.avoirForm.lines[i];
    // Le prix de l'article reste le prix normal (catalogue) ; le tarif fournisseur est isolé en rabais.
    line.prixUnitaire = catPrice;
    this.onLineChange(line);
  }

  onLineChange(line: PurchaseInvoiceLine): void {
    const qty = line.quantity || 0;
    const pu = line.prixUnitaire || 0;
    const tva = line.tauxTVA || 0;
    const ht = qty * pu;
    line.montantHT = Math.round(ht * 100) / 100;
    line.montantTVA = Math.round(ht * tva / 100 * 100) / 100;
    line.montantTTC = Math.round((ht + (line.montantTVA || 0)) * 100) / 100;
    line.totalRabaisLigne = Math.round(qty * (line.rabaisUnitaire ?? 0) * 100) / 100;
    this.computeTotals();
  }

  computeTotals(): void {
    let ht = 0, tva = 0, ttc = 0;
    for (const l of this.avoirForm.lines) {
      ht += l.montantHT || 0;
      tva += l.montantTVA || 0;
      ttc += l.montantTTC || 0;
    }
    this.avoirForm.totalHT = Math.round(ht * 100) / 100;
    this.avoirForm.totalTVA = Math.round(tva * 100) / 100;
    this.avoirForm.totalTTC = Math.round(ttc * 100) / 100;
  }

  get totalRabaisHTAvoir(): number {
    return this.avoirForm.lines.reduce((s, l) => s + (l.totalRabaisLigne ?? 0), 0);
  }

  /** Total des rabais TTC (approximation TVA ; le backend recalcule avec précompte) */
  get totalRabaisTTCAvoir(): number {
    return this.avoirForm.lines.reduce((s, l) =>
      s + (l.totalRabaisLigne ?? 0) * (1 + (l.tauxTVA ?? 0) / 100), 0);
  }

  /** Net à payer = Total TTC (prix normaux) − rabais TTC obtenus */
  get netApresRabais(): number {
    return Math.round((this.avoirForm.totalTTC ?? 0) - this.totalRabaisTTCAvoir);
  }

  // Convention alignée sur les ventes : prixUnitaire = prix CATALOGUE (normal). Le tarif
  // fournisseur est isolé en rabaisUnitaire et déduit au total, pas du prix de l'article.
  linePrixCatalogue(line: PurchaseInvoiceLine): number {
    return line.prixUnitaire ?? 0;
  }

  lineTotalCatalogueHT(line: PurchaseInvoiceLine): number {
    return (line.quantity ?? 0) * this.linePrixCatalogue(line);
  }

  // Autocomplete
  getSuggestions(i: number): Product[] {
    if (this.lineSearchResults[i]?.length > 0) return this.lineSearchResults[i];
    const q = (this.lineSearches[i] || '').toLowerCase().trim();
    if (!q) return this.allProducts.slice(0, 8);
    const matches = this.allProducts.filter(p =>
      p.name.toLowerCase().includes(q) || (p.defaultCode || '').toLowerCase().includes(q)
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

  openSuggestions(i: number, event?: FocusEvent | Event): void {
    if (event instanceof FocusEvent && this.avoirForm.lines[i]?.productCode) this.lineSearches[i] = '';
    if (event?.target) {
      const rect = (event.target as HTMLElement).getBoundingClientRect();
      const dropdownWidth = Math.max(rect.width, 420);
      const left = Math.min(rect.left, window.innerWidth - dropdownWidth - 8);
      this.dropdownRect = { top: rect.bottom + 4, left, width: dropdownWidth };
    }
    this.activeSuggestionIdx = i;
  }

  /**
   * Entrée dans la recherche article (comme dans Déclaration) : choisit la 1re suggestion si un
   * texte est tapé, puis passe à la quantité de la même ligne. stopPropagation évite que la
   * navigation globale « champ suivant » (app.component) déplace aussi le curseur.
   */
  onProductSearchEnter(i: number, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    const line = this.avoirForm.lines[i];
    if (this.lineSearches[i]?.trim()) {
      const suggestions = this.getSuggestions(i);
      if (suggestions.length > 0) this.selectProduct(i, suggestions[0]);
    } else if (this.isLineFilled(i)) {
      // Ligne déjà renseignée, recherche vidée au focus : on garde l'article
      this.lineSearches[i] = line.productCode ? `[${line.productCode}] ${line.description}` : line.description;
      this.activeSuggestionIdx = null;
    }
    if (this.isLineFilled(i)) this.focusLineField(`pav-qty-${i}`);
  }

  /**
   * Entrée dans un champ de la ligne : passe à l'article de la ligne suivante, en créant cette
   * ligne seulement si c'est la dernière. Une ligne sans article renvoie sur sa recherche.
   */
  onLineEnter(i: number, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    if (!this.isLineFilled(i)) { this.focusLineField(`pav-product-${i}`); return; }
    if (i + 1 >= this.avoirForm.lines.length) this.addLine();
    this.focusLineField(`pav-product-${i + 1}`);
  }

  private isLineFilled(i: number): boolean {
    const line: any = this.avoirForm.lines[i];
    return !!(line?.productId || line?.productCode || line?.description?.trim());
  }

  private focusLineField(id: string): void {
    setTimeout(() => {
      const el = document.getElementById(id) as HTMLInputElement | null;
      el?.focus();
      if (el?.type === 'number') el.select();
    });
  }

  closeSuggestions(i: number): void {
    setTimeout(() => {
      this.activeSuggestionIdx = null;
      const line = this.avoirForm.lines[i];
      if (line?.productCode && !this.lineSearches[i]) {
        this.lineSearches[i] = line.productCode ? `[${line.productCode}] ${line.description}` : line.description;
      }
    }, 200);
  }

  selectProduct(i: number, product: Product): void {
    const line = this.avoirForm.lines[i];
    line.productId = product.id;
    line.productCode = product.defaultCode || '';
    line.description = product.name;
    const stdPrice = product.standardPrice || 0;
    line.prixUnitaire = stdPrice;
    line.rabaisUnitaire = 0;
    this.lineCatHT[i] = stdPrice;
    line.tauxTVA = product.exemptTvaAchat ? 0 : this.TVA_DEFAULT;
    this.lineSearches[i] = product.defaultCode ? `[${product.defaultCode}] ${product.name}` : product.name;
    this.lineStockQty[i] = product.qtyAvailable ?? product.qtyOnHand ?? 0;
    this.activeSuggestionIdx = null;
    this.onLineChange(line);

    const partnerId = this.avoirForm.partnerId;
    const companyId = this.authService.getCompanyId();
    if (partnerId && product.id && companyId) {
      this.purchaseService.getPrixFournisseurForProduct(partnerId, product.id, companyId).subscribe({
        next: prix => {
          if (prix) {
            // Le tarif fournisseur sort en RABAIS ; il n'affecte pas le prix de l'article. Jamais négatif.
            line.rabaisUnitaire = Math.max(0, Math.round((stdPrice - prix.prixFournisseur) * 100) / 100);
            line.standardPrice = stdPrice;
            line.prixUnitaire = stdPrice;            // prix normal (catalogue), non réduit
            this.lineCatHT[i] = stdPrice;
            this.onLineChange(line);
          }
        }
      });
    }
  }

  clearLine(i: number): void {
    const line = this.avoirForm.lines[i];
    line.productCode = '';
    line.description = '';
    line.prixUnitaire = 0;
    this.lineSearches[i] = '';
    this.lineSearchResults[i] = [];
    this.activeSuggestionIdx = i;
  }

  saveAvoir(): void {
    if (!this.avoirForm.partnerId || this.avoirForm.partnerId === 0) {
      this.errorMsg = 'Veuillez sélectionner un fournisseur';
      return;
    }
    if (this.avoirForm.lines.length === 0) {
      this.errorMsg = 'Ajoutez au moins une ligne';
      return;
    }
    // Le <select> peut afficher un journal sans l'avoir lié à journalId (option par défaut
    // non sélectionnée). On garantit un journal d'achat, sinon le backend reçoit null
    // → "The given id must not be null" affiché en erreur générique.
    if (!this.avoirForm.journalId) {
      if (this.journals.length > 0) {
        this.avoirForm.journalId = this.journals[0].id!;
      } else {
        this.errorMsg = 'Veuillez sélectionner un journal';
        return;
      }
    }

    this.saving = true;
    this.errorMsg = '';
    const payload = {
      ...this.avoirForm,
      companyId: this.companyId,
      type: 'credit_note',
      warehouseId: this.selectedWarehouseId ?? this.defaultWarehouseId ?? undefined
    };

    this.purchaseService.createAvoirManuel(payload).subscribe({
      next: (created) => {
        this.saving = false;
        this.showModal = false;
        this.router.navigate(['/purchases/invoices', created.id]);
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || err.error?.error || (typeof err.error === 'string' ? err.error : null)
          || err.message || 'Erreur lors de la création de l\'avoir';
      }
    });
  }

  // ── Pagination côté serveur (filtres, totaux et regroupements calculés par le serveur) ──
  page = 0;
  readonly pageSize = PAGE_SIZE;
  totalElements = 0;
  listTotals: Record<string, number> = {};
  groupedRows: { key: string; label: string; count: number; totalHT: number; totalTTC: number; items: PurchaseInvoice[] }[] = [];
  private readonly groupServerKeys: Record<string, string> = {};
  private readonly grouped = new GroupedList<PurchaseInvoice>((key, page) =>
    this.purchaseService.getAvoirsPage({ ...this.listQuery(), groupBy: this.serverGroup(), groupKey: key, page, size: this.pageSize }));

  private listQuery(): ListQuery {
    return {
      companyId: this.authService.getCompanyId(),
      state: this.stateFilter,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
    };
  }

  private serverGroup(): string { return this.groupServerKeys[this.groupBy] ?? this.groupBy; }

  loadListPage(): void {
    this.loading = true;
    this.refreshPostedTotal();
    if (this.groupBy) {
      this.purchaseService.getAvoirsGroups({ ...this.listQuery(), groupBy: this.serverGroup() }).subscribe({
        next: (groups: ListGroup[]) => {
          this.grouped.reset(groups);
          this.groupedRows = groups
            .map(g => ({ key: g.key, label: this.groupLabel(g), count: g.count, totalHT: Number(g.totals?.['ht']) || 0, totalTTC: Number(g.totals?.['ttc']) || 0, items: [] as PurchaseInvoice[] }))
            .sort((a, b) => a.label.localeCompare(b.label));
          this.totalElements = this.grouped.count;
          this.loading = false;
        },
        error: () => { this.loading = false; }
      });
      return;
    }
    this.purchaseService.getAvoirsPage({ ...this.listQuery(), page: this.page, size: this.pageSize }).subscribe({
      next: (r: any) => {
        this.filteredAvoirs = r.content;
        this.avoirs = r.content;
        this.totalElements = r.totalElements;
        this.listTotals = r.totals ?? {};
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  goToPage(page: number): void {
    this.page = page;
    this.loadListPage();
  }

  private groupLabel(g: ListGroup): string {
    if (g.key === 'none') return g.label;
    if (this.groupBy === 'mois') return this.fmtMonth(g.key);
    if (this.groupBy === 'statut') return this.getStateLabel(g.key);
    return g.label;
  }

  hasMoreGroupItems(key: string): boolean { return this.grouped.hasMore(key); }
  loadMoreGroupItems(key: string): void { this.grouped.loadMore(key); }

  // ── Group By ─────────────────────────────────────────────────────────────────
  groupBy = '';
  expandedGroups = new Set<string>();

  groupByOptions = [
    { key: 'mois',        label: 'Mois',       icon: 'calendar_month' },
    { key: 'fournisseur', label: 'Fournisseur', icon: 'business' },
    { key: 'statut',      label: 'Statut',      icon: 'label' },
  ];

  setGroupBy(key: string): void {
    this.groupBy = this.groupBy === key ? '' : key;
    this.page = 0;
    this.loadListPage();
  }

  toggleGroup(key: string): void { this.grouped.toggle(key); }

  isExpanded(key: string): boolean { return this.grouped.isExpanded(key); }

  getGroupItems(key: string): PurchaseInvoice[] { return this.grouped.rows(key); }

  fmtMonth(ym: string): string {
    const [y, m] = ym.split('-');
    return new Date(+y, +m - 1, 1).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' });
  }

  fmtN(v: number): string {
    return new Intl.NumberFormat('fr-FR').format(v || 0);
  }
}
