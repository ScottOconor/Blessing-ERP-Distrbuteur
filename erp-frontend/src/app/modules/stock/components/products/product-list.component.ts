import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, Product, ProductCategory, Warehouse, StockAdjustmentRequest } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { forkJoin } from 'rxjs';
import { downloadExcelTemplate, parseExcelFile } from '../../../../core/utils/excel-import.util';

const PRODUCT_HEADERS = ['Nom', 'Référence interne', 'Prix de vente', 'Coût', 'Catégorie d\'article', 'Quantité en stock', 'Unité de mesure'];
const PRODUCT_SAMPLE  = ['Bière Castel 65cl', 'CAS65', '700', '500', 'Bières', '1000', 'Caisse'];

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
  filtered: Product[] = [];
  loading = false;
  saving = false;
  errorMsg = '';
  successMsg = '';

  search = '';
  filterType = 'all';
  showModal = false;
  editingProduct: Product | null = null;

  form: Partial<Product> = this.emptyForm();

  // === Import Excel ===
  showImportModal = false;
  importRows: Record<string, any>[] = [];
  importLoading = false;
  private mainLocationId: number | null = null;

  private companyId!: number;
  canCreate = false;
  canEdit   = false;
  canDelete = false;
  canImport = false;

  constructor(private stockService: StockService, private authService: AuthService) {}

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
    forkJoin({
      products: this.stockService.getProducts(this.companyId),
      categories: this.stockService.getCategories(this.companyId),
      warehouses: this.stockService.getWarehouses(this.companyId)
    }).subscribe({
      next: ({ products, categories, warehouses }) => {
        this.products = products;
        this.categories = categories;
        const mainWh = warehouses[0];
        if (mainWh?.stockLocationId) this.mainLocationId = mainWh.stockLocationId;
        this.applyFilter();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  applyFilter(): void {
    let list = [...this.products];
    if (this.search) {
      const q = this.search.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || (p.defaultCode || '').toLowerCase().includes(q));
    }
    if (this.filterType !== 'all') list = list.filter(p => p.type === this.filterType);
    this.filtered = list;
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
  }

  closeModal(): void { this.showModal = false; }

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
    return { type: 'product', active: true, uomName: 'Unité', standardPrice: 0, salePrice: 0 };
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

  async confirmImport(): Promise<void> {
    this.importLoading = true;
    let done = 0, errors = 0;
    const stockAdjustments: StockAdjustmentRequest[] = [];

    for (const row of this.importRows) {
      const name = String(row['Nom'] || row['Nom*'] || '').trim();
      if (!name) continue;
      const qty = parseFloat(row['Quantité en stock'] || '0') || 0;
      const dto: Product = {
        name,
        defaultCode: String(row['Référence interne'] || row['Code (Référence)'] || '').trim() || undefined,
        type: 'product',
        categoryId: this.getCategoryId(String(row['Catégorie d\'article'] || row['Catégorie'] || '')),
        standardPrice: parseFloat(row['Coût'] || row['Prix Achat (FCFA)']) || 0,
        salePrice: parseFloat(row['Prix de vente'] || row['Prix Vente (FCFA)']) || 0,
        uomName: String(row['Unité de mesure'] || row['Unité'] || 'Unité').trim(),
        active: true,
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
}
