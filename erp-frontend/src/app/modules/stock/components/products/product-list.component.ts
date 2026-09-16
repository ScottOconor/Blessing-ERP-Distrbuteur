import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, Product, ProductCategory, UnitOfMeasure, Warehouse, StockAdjustmentRequest } from '../../services/stock.service';
import { SalesService, SalesClient, PrixClientArticle } from '../../../sales/services/sales.service';
import { PurchaseService, PrixFournisseurArticle } from '../../../purchases/services/purchase.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { forkJoin } from 'rxjs';
import { downloadExcelTemplate, parseExcelFile } from '../../../../core/utils/excel-import.util';

const PRODUCT_HEADERS = ['Nom', 'Référence interne', 'Prix de vente', 'Coût', 'Catégorie d\'article', 'Quantité en stock', 'Unité de mesure', 'Exempté TVA vente', 'Exempté TVA achat'];
const PRODUCT_SAMPLE  = ['Bière Castel 65cl', 'CAS65', '700', '500', 'Bières', '1000', 'Caisse', 'Non', 'Non'];

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  @ViewChild('importInput') importInput!: ElementRef<HTMLInputElement>;

  products: Product[] = [];
  categories: ProductCategory[] = [];
  uoms: UnitOfMeasure[] = [];
  filtered: Product[] = [];
  loading = false;
  saving = false;
  errorMsg = '';
  successMsg = '';

  search = '';
  filterType = 'all';   // legacy (non utilisé en affichage)
  filterCat  = 'autres'; // 'autres'(=tous) | 'articles' | 'emballages' | 'bouteilles'
  showModal = false;
  editingProduct: Product | null = null;

  warehouses: Warehouse[] = [];
  selectedWarehouseId: number | '' = '';

  form: Partial<Product> = this.emptyForm();

  // === Import Excel ===
  showImportModal = false;
  importRows: Record<string, any>[] = [];
  importLoading = false;
  private mainLocationId: number | null = null;

  // === Tarifs clients (section dans le modal article) ===
  showTarifsSection = false;
  clients: SalesClient[] = [];
  productPrices: PrixClientArticle[] = [];
  loadingPrices = false;
  savingPrice = false;
  newPriceClientId: number | null = null;
  newPrixClient: number = 0;
  get newPriceRabais(): number {
    return Math.max(0, (this.form.salePrice ?? 0) - this.newPrixClient);
  }

  // === Tarifs fournisseurs (section dans le modal article) ===
  showFournisseurTarifsSection = false;
  fournisseurs: any[] = [];
  productFournisseurPrices: PrixFournisseurArticle[] = [];
  loadingFournisseurPrices = false;
  savingFournisseurPrice = false;
  newFournisseurId: number | null = null;
  newPrixFournisseur: number = 0;
  get newFournisseurRabais(): number {
    return Math.max(0, (this.form.standardPrice ?? 0) - this.newPrixFournisseur);
  }

  private companyId!: number;
  canCreate = false;
  canEdit   = false;
  canDelete = false;
  canImport = false;

  constructor(
    private stockService: StockService,
    private salesService: SalesService,
    private purchaseService: PurchaseService,
    private accountingService: AccountingService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId();
    this.canCreate = this.authService.hasPermission('STOCK', 'PRODUITS', 'CREATE');
    this.canEdit   = this.authService.hasPermission('STOCK', 'PRODUITS', 'EDIT');
    this.canDelete = this.authService.hasPermission('STOCK', 'PRODUITS', 'DELETE');
    this.canImport = this.authService.hasPermission('STOCK', 'PRODUITS', 'IMPORT');
    this.load();
  }

  load(): void {
    this.loading = true;
    const whId = this.selectedWarehouseId !== '' ? +this.selectedWarehouseId : undefined;
    forkJoin({
      products: this.stockService.getProducts(this.companyId, whId),
      categories: this.stockService.getCategories(this.companyId),
      uoms: this.stockService.getUnitsOfMeasure(this.companyId),
      warehouses: this.stockService.getWarehouses(this.companyId)
    }).subscribe({
      next: ({ products, categories, uoms, warehouses }) => {
        this.products = products;
        this.categories = categories;
        this.uoms = uoms;
        this.warehouses = warehouses;
        const mainWh = warehouses.find(w => w.depotAchatWarehouseId != null) ?? warehouses[0];
        if (mainWh?.stockLocationId) this.mainLocationId = mainWh.stockLocationId;
        this.applyFilter();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  onWarehouseChange(): void {
    this.loading = true;
    const whId = this.selectedWarehouseId !== '' ? +this.selectedWarehouseId : undefined;
    this.stockService.getProducts(this.companyId, whId).subscribe({
      next: products => { this.products = products; this.applyFilter(); this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  private catGroup(p: Product): string {
    const cat = (p.categoryName || '').toLowerCase().trim();
    if (cat.includes('emballage')) return 'emballages';
    if (cat.startsWith('bouteille')) return 'bouteilles';
    if (cat) return 'articles';
    return 'autres'; // pas de catégorie
  }

  applyFilter(): void {
    let list = [...this.products];
    if (this.search) {
      const q = this.search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) || (p.defaultCode || '').toLowerCase().includes(q)
      );
    }
    // 'autres' = tous les produits (pas de filtre catégorie)
    if (this.filterCat !== 'autres') {
      list = list.filter(p => this.catGroup(p) === this.filterCat);
    }
    this.filtered = list;
  }

  get catCounts(): Record<string, number> {
    const counts: Record<string, number> = { autres: this.products.length, articles: 0, emballages: 0, bouteilles: 0 };
    this.products.forEach(p => {
      const g = this.catGroup(p);
      if (g !== 'autres') counts[g]++;
    });
    return counts;
  }

  deleteProduct(p: Product): void {
    if (!confirm(`Supprimer l'article "${p.name}" ?`)) return;
    this.stockService.deleteProduct(p.id!).subscribe({
      next: () => { this.showSuccessMsg('Article supprimé'); this.load(); },
      error: (e) => this.showSuccessMsg('Erreur : ' + (e.error?.message || 'Impossible de supprimer'))
    });
  }

  openCreate(): void {
    this.editingProduct = null;
    this.form = this.emptyForm();
    this.showModal = true;
    this.errorMsg = '';
  }

  openEdit(p: Product): void {
    this.editingProduct = p;
    this.form = { ...p };
    this.showModal = true;
    this.errorMsg = '';
    this.showTarifsSection = false;
    this.showFournisseurTarifsSection = false;
    this.productPrices = [];
    this.productFournisseurPrices = [];
    this.newPriceClientId = null;
    this.newPrixClient = 0;
    this.newFournisseurId = null;
    this.newPrixFournisseur = 0;
    if (!this.clients.length) {
      this.salesService.getClients(this.companyId).subscribe(c => this.clients = c);
    }
    this.loadProductPrices(p.id!);
    this.loadProductFournisseurPrices(p.id!);
  }

  closeModal(): void { this.showModal = false; this.productPrices = []; this.productFournisseurPrices = []; }

  loadProductPrices(productId: number): void {
    this.loadingPrices = true;
    // Charger tous les prix clients pour ce produit (endpoint par client — on charge pour tous les clients)
    // On utilise l'endpoint par client en itérant, ou on ajoute un endpoint /api/sales/client-prices?productId
    // Pour l'instant on charge tous les clients et leurs tarifs pour ce produit
    this.salesService.getClients(this.companyId).subscribe(clients => {
      this.clients = clients;
      const calls = clients
        .filter(c => c.id != null)
        .map(c => this.salesService.getPrixClientForProduct(productId, c.id!, this.companyId));
      if (calls.length === 0) { this.loadingPrices = false; return; }
      forkJoin(calls).subscribe({
        next: results => {
          this.productPrices = (results as (PrixClientArticle | null)[])
            .filter((r): r is PrixClientArticle => r !== null);
          this.loadingPrices = false;
        },
        error: () => this.loadingPrices = false
      });
    });
  }

  saveClientPrice(): void {
    const productId = this.editingProduct?.id;
    if (!this.newPriceClientId || !productId) return;
    if (this.newPrixClient <= 0) { this.errorMsg = 'Prix client invalide'; return; }
    this.savingPrice = true;
    const dto: PrixClientArticle = {
      productId,
      clientId: this.newPriceClientId,
      prixClient: this.newPrixClient,
      companyId: this.companyId
    };
    this.salesService.savePrixClient(dto).subscribe({
      next: saved => {
        this.savingPrice = false;
        const idx = this.productPrices.findIndex(p => p.clientId === saved.clientId);
        if (idx >= 0) this.productPrices[idx] = saved;
        else this.productPrices.push(saved);
        this.newPriceClientId = null;
        this.newPrixClient = 0;
      },
      error: (e: any) => { this.savingPrice = false; this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  removeClientPrice(price: PrixClientArticle): void {
    if (!price.id || !confirm(`Supprimer le tarif de ${price.clientName} ?`)) return;
    this.salesService.deletePrixClient(price.id).subscribe({
      next: () => { this.productPrices = this.productPrices.filter(p => p.id !== price.id); },
      error: () => { this.errorMsg = 'Erreur lors de la suppression'; }
    });
  }

  get availableClients(): SalesClient[] {
    const configured = new Set(this.productPrices.map(p => p.clientId));
    return this.clients.filter(c => c.id != null && !configured.has(c.id));
  }

  loadProductFournisseurPrices(productId: number): void {
    this.loadingFournisseurPrices = true;
    this.purchaseService.getPrixFournisseurByProduct(productId, this.companyId).subscribe({
      next: prices => { this.productFournisseurPrices = prices; this.loadingFournisseurPrices = false; },
      error: () => { this.loadingFournisseurPrices = false; }
    });
    if (!this.fournisseurs.length) {
      this.accountingService.getPartners(this.companyId).subscribe(partners => {
        this.fournisseurs = partners.filter((p: any) => p.type === 'supplier' || p.type === 'both');
      });
    }
  }

  saveFournisseurPrice(): void {
    const productId = this.editingProduct?.id;
    if (!this.newFournisseurId || !productId) return;
    if (this.newPrixFournisseur < 0) { this.errorMsg = 'Prix fournisseur invalide'; return; }
    this.savingFournisseurPrice = true;
    const dto: PrixFournisseurArticle = {
      productId,
      fournisseurId: this.newFournisseurId,
      prixFournisseur: this.newPrixFournisseur,
      companyId: this.companyId
    };
    this.purchaseService.savePrixFournisseur(dto).subscribe({
      next: saved => {
        this.savingFournisseurPrice = false;
        const idx = this.productFournisseurPrices.findIndex(p => p.fournisseurId === saved.fournisseurId);
        if (idx >= 0) this.productFournisseurPrices[idx] = saved;
        else this.productFournisseurPrices.push(saved);
        this.newFournisseurId = null;
        this.newPrixFournisseur = 0;
      },
      error: (e: any) => { this.savingFournisseurPrice = false; this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  removeFournisseurPrice(price: PrixFournisseurArticle): void {
    if (!price.id || !confirm(`Supprimer le tarif de ${price.fournisseurName} ?`)) return;
    this.purchaseService.deletePrixFournisseur(price.id).subscribe({
      next: () => { this.productFournisseurPrices = this.productFournisseurPrices.filter(p => p.id !== price.id); },
      error: () => { this.errorMsg = 'Erreur lors de la suppression'; }
    });
  }

  get availableFournisseurs(): any[] {
    const configured = new Set(this.productFournisseurPrices.map(p => p.fournisseurId));
    return this.fournisseurs.filter(f => f.id != null && !configured.has(f.id));
  }

  save(): void {
    if (!this.form.name) { this.errorMsg = 'Nom obligatoire'; return; }
    this.saving = true;
    this.errorMsg = '';
    const dto = { ...this.form, companyId: this.companyId, active: true } as Product;
    const obs = this.editingProduct
      ? this.stockService.updateProduct(this.editingProduct.id!, dto)
      : this.stockService.createProduct(dto);
    obs.subscribe({
      next: () => { this.saving = false; this.showModal = false; this.load(); },
      error: (e) => { this.saving = false; this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  private emptyForm(): Partial<Product> {
    return { type: 'product', active: true, uomName: 'Unité', standardPrice: 0, salePrice: 0, exemptTva: false, exemptTvaAchat: false };
  }

  get typeLabels(): Record<string, string> {
    return { product: 'Stockable', service: 'Service', consu: 'Consommable' };
  }

  // === Import Excel ===

  downloadTemplate(): void {
    downloadExcelTemplate(PRODUCT_HEADERS, PRODUCT_SAMPLE, 'modele_articles.xlsx');
  }

  triggerImport(): void {
    this.importInput.nativeElement.value = '';
    this.importInput.nativeElement.click();
  }

  async onImportFileChange(event: Event): Promise<void> {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.importLoading = true;
    try {
      const rows = await parseExcelFile(file);
      this.importRows = rows.filter(r => r['Nom'] || r['Nom*']);
      if (this.importRows.length === 0) {
        this.showSuccessMsg('Aucune ligne valide (colonne "Nom" requise)');
        this.importLoading = false;
        return;
      }
      this.showImportModal = true;
    } catch (e: any) { this.showSuccessMsg('Erreur : ' + e.message); }
    this.importLoading = false;
  }

  closeImportModal(): void { this.showImportModal = false; this.importRows = []; }

  getCategoryId(name: string): number | undefined {
    if (!name) return undefined;
    return this.categories.find(c => c.name?.toLowerCase() === name.toLowerCase())?.id;
  }

  getUomId(name: string): number | undefined {
    if (!name) return undefined;
    return this.uoms.find(u => u.name?.toLowerCase() === name.toLowerCase())?.id;
  }

  onUomSelect(): void {
    const uom = this.uoms.find(u => u.id === this.form.unitOfMeasureId);
    this.form.uomName = uom ? uom.name : undefined;
  }

  private parseBoolCell(value: any): boolean {
    const v = String(value ?? '').trim().toLowerCase();
    return v === 'oui' || v === 'true' || v === '1' || v === 'yes' || v === 'x';
  }

  async confirmImport(): Promise<void> {
    this.importLoading = true;
    let done = 0, errors = 0;
    const stockAdjustments: StockAdjustmentRequest[] = [];

    for (const row of this.importRows) {
      const name = String(row['Nom'] || row['Nom*'] || '').trim();
      if (!name) continue;
      const qty = parseFloat(row['Quantité en stock'] || '0') || 0;
      const uomName = String(row['Unité de mesure'] || row['Unité'] || 'Unité').trim();
      const dto: Product = {
        name,
        defaultCode: String(row['Référence interne'] || row['Code (Référence)'] || '').trim() || undefined,
        type: 'product',
        categoryId: this.getCategoryId(String(row['Catégorie d\'article'] || row['Catégorie'] || '')),
        standardPrice: parseFloat(row['Coût'] || row['Prix Achat (FCFA)']) || 0,
        salePrice: parseFloat(row['Prix de vente'] || row['Prix Vente (FCFA)']) || 0,
        uomName,
        unitOfMeasureId: this.getUomId(uomName),
        active: true,
        exemptTva: this.parseBoolCell(row['Exempté TVA vente']),
        exemptTvaAchat: this.parseBoolCell(row['Exempté TVA achat']),
        companyId: this.companyId
      };
      try {
        const created = await this.stockService.createProduct(dto).toPromise();
        done++;
        if (qty > 0 && created?.id && this.mainLocationId) {
          stockAdjustments.push({
            productId: created.id,
            locationId: this.mainLocationId,
            newQty: qty,
            notes: 'Stock initial — import',
            companyId: this.companyId
          });
        }
      } catch { errors++; }
    }

    if (stockAdjustments.length > 0) {
      try {
        await this.stockService.createAdjustmentsBulk(stockAdjustments).toPromise();
      } catch { /* les produits sont créés, l'ajustement est non bloquant */ }
    }

    this.importLoading = false;
    this.closeImportModal();
    this.load();
    this.showSuccessMsg(`Import terminé : ${done} créé(s)${stockAdjustments.length > 0 ? ', ' + stockAdjustments.length + ' stock(s) initialisé(s)' : ''}, ${errors} erreur(s)`);
  }

  showSuccessMsg(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 5000);
  }

  // ── Group By ─────────────────────────────────────────────────────────────────
  groupBy = '';
  expandedGroups = new Set<string>();

  groupByOptions = [
    { key: 'categorie', label: 'Catégorie', icon: 'label' },
    { key: 'type',      label: 'Type',      icon: 'inventory_2' }
  ];

  get groupedRows(): { key: string; label: string; count: number; items: Product[] }[] {
    if (!this.groupBy) return [];
    const source = this.filtered;
    const map = new Map<string, { key: string; label: string; count: number; items: Product[] }>();
    for (const item of source) {
      let key: string, label: string;
      switch (this.groupBy) {
        case 'categorie':
          key = label = item.categoryName || '(Sans catégorie)';
          break;
        case 'type':
          key = item.type || '?';
          label = this.prodTypeLabel(key);
          break;
        default: key = label = '?';
      }
      if (!map.has(key)) map.set(key, { key, label, count: 0, items: [] });
      const g = map.get(key)!;
      g.count++;
      g.items.push(item);
    }
    const arr = Array.from(map.values());
    arr.sort((a, b) => a.label.localeCompare(b.label));
    return arr;
  }

  setGroupBy(key: string): void {
    this.groupBy = this.groupBy === key ? '' : key;
    this.expandedGroups.clear();
  }

  toggleGroup(key: string): void {
    if (this.expandedGroups.has(key)) this.expandedGroups.delete(key);
    else this.expandedGroups.add(key);
  }

  isExpanded(key: string): boolean { return this.expandedGroups.has(key); }

  getGroupItems(key: string): Product[] {
    return this.groupedRows.find(g => g.key === key)?.items ?? [];
  }

  prodTypeLabel(t: string): string {
    return ({ product: 'Article stockable', service: 'Service / Emballage', consu: 'Consommable' } as Record<string, string>)[t] || t;
  }
}
