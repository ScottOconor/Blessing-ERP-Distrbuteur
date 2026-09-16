import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, StockAdjustment, StockAdjustmentRequest, StockLocation, Product, Warehouse, InventorySheetRequest } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { forkJoin } from 'rxjs';

interface InventoryLine {
  productId: number;
  productCode: string;
  productName: string;
  categoryName: string;
  uomName: string;
  locationId: number;
  locationName: string;
  availableQty: number;
  countedQty: number;
  standardPrice: number;
}

@Component({
  selector: 'app-adjustment-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adjustment-list.component.html',
  styleUrl: './adjustment-list.component.scss'
})
export class AdjustmentListComponent implements OnInit {
  activeTab: 'inventory' | 'history' = 'inventory';

  // Inventaire physique
  inventoryLines: InventoryLine[] = [];
  filteredLines: InventoryLine[] = [];
  locations: StockLocation[] = [];
  warehouses: Warehouse[] = [];
  filterWarehouseId: number | null = null;
  filterLocationId: number | null = null;
  filterSearch = '';
  filterCat = 'autres'; // 'autres'(=tous) | 'articles' | 'emballages' | 'bouteilles'
  filterWithStock = false; // filtre : uniquement les produits avec stock > 0
  notes = '';
  adjDate: string = new Date().toISOString().split('T')[0];
  applying = false;
  loadingInventory = false;

  // Validation des comptages (sans application comptable)
  countsValidated = false;
  validatedLines: InventoryLine[] = [];
  showPrintReportBtn = false;

  // Historique
  allAdjustments: StockAdjustment[] = [];
  adjustments: StockAdjustment[] = [];
  loadingHistory = false;
  dateFrom = '';
  dateTo = '';

  successMsg = '';
  errorMsg = '';
  printingSheet = false;
  printingReport = false;

  constructor(private stockService: StockService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadInventory();
    this.loadHistory();
  }

  loadInventory(): void {
    this.loadingInventory = true;
    const cid = this.authService.getCompanyId();
    forkJoin({
      quants: this.stockService.getQuants(cid),
      products: this.stockService.getProducts(cid),
      locations: this.stockService.getLocations(cid),
      warehouses: this.stockService.getWarehouses(cid)
    }).subscribe({
      next: ({ quants, products, locations, warehouses }) => {
        this.locations = locations.filter(l => l.usage === 'internal');
        this.warehouses = warehouses;

        // Emplacement par défaut = emplacement stock du magasin principal
        const mainWarehouse = warehouses[0];
        const defaultLoc = mainWarehouse?.stockLocationId
          ? this.locations.find(l => l.id === mainWarehouse.stockLocationId) ?? this.locations[0]
          : this.locations[0];

        const quantProductIds = new Set(quants.map(q => q.productId));

        const productCatMap = new Map<number, string>(
          products.map(p => [p.id!, p.categoryName ?? ''])
        );

        const quantLines: InventoryLine[] = quants.map(q => ({
          productId: q.productId,
          productCode: q.productCode ?? '',
          productName: q.productName ?? '',
          categoryName: q.categoryName ?? productCatMap.get(q.productId) ?? '',
          uomName: q.uomName ?? '',
          locationId: q.locationId,
          locationName: q.locationCompleteName ?? q.locationName ?? '',
          availableQty: q.quantity ?? 0,
          countedQty: q.quantity ?? 0,
          standardPrice: q.standardPrice ?? 0
        }));

        const noQuantLines: InventoryLine[] = products
          .filter(p => (p.type === 'product' || p.type === 'consu') && !quantProductIds.has(p.id!))
          .map(p => ({
            productId: p.id!,
            productCode: p.defaultCode ?? '',
            productName: p.name,
            categoryName: p.categoryName ?? '',
            uomName: p.uomName ?? '',
            locationId: defaultLoc?.id ?? 0,
            locationName: defaultLoc?.completeName ?? defaultLoc?.name ?? '',
            availableQty: 0,
            countedQty: 0,
            standardPrice: p.standardPrice ?? 0
          }));

        this.inventoryLines = [...quantLines, ...noQuantLines]
          .sort((a, b) => a.productName.localeCompare(b.productName));
        this.countsValidated = false;
        this.validatedLines = [];
        this.showPrintReportBtn = false;
        this.applyInventoryFilter();
        this.loadingInventory = false;
      },
      error: () => { this.loadingInventory = false; }
    });
  }

  loadHistory(): void {
    this.loadingHistory = true;
    this.stockService.getAdjustments(this.authService.getCompanyId()).subscribe({
      next: (adj) => {
        this.allAdjustments = adj;
        this.applyHistoryFilter();
        this.loadingHistory = false;
      },
      error: () => { this.loadingHistory = false; }
    });
  }

  get filteredLocations(): StockLocation[] {
    if (!this.filterWarehouseId) return this.locations;
    return this.locations.filter(l => l.warehouseId === this.filterWarehouseId);
  }

  onWarehouseChange(): void {
    // Reset location filter quand l'entrepôt change
    this.filterLocationId = null;
    this.countsValidated = false;
    this.showPrintReportBtn = false;
    this.applyInventoryFilter();
  }

  private catGroup(l: InventoryLine): string {
    const cat = (l.categoryName || '').toLowerCase().trim();
    if (cat.includes('emballage')) return 'emballages';
    if (cat.startsWith('bouteille')) return 'bouteilles';
    if (cat) return 'articles';
    return 'autres';
  }

  get catCounts(): Record<string, number> {
    const c: Record<string, number> = { autres: this.inventoryLines.length, articles: 0, emballages: 0, bouteilles: 0 };
    this.inventoryLines.forEach(l => {
      const g = this.catGroup(l);
      if (g !== 'autres') c[g]++;
    });
    return c;
  }

  applyInventoryFilter(): void {
    this.filteredLines = this.inventoryLines.filter(l => {
      if (this.filterWarehouseId) {
        const loc = this.locations.find(loc => loc.id === l.locationId);
        if (loc?.warehouseId !== this.filterWarehouseId) return false;
      }
      if (this.filterLocationId && l.locationId !== this.filterLocationId) return false;
      if (this.filterCat !== 'autres' && this.catGroup(l) !== this.filterCat) return false;
      if (this.filterWithStock && (l.availableQty ?? 0) <= 0) return false;
      if (this.filterSearch) {
        const q = this.filterSearch.toLowerCase();
        if (!l.productName.toLowerCase().includes(q) && !l.productCode.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }

  applyHistoryFilter(): void {
    this.adjustments = this.allAdjustments.filter(a => {
      const d = a.createdAt?.split('T')[0] ?? '';
      if (this.dateFrom && d < this.dateFrom) return false;
      if (this.dateTo && d > this.dateTo) return false;
      return true;
    });
  }

  clearHistoryFilter(): void { this.dateFrom = ''; this.dateTo = ''; this.applyHistoryFilter(); }

  getDiff(line: InventoryLine): number {
    return (line.countedQty ?? 0) - line.availableQty;
  }

  /** Une quantité comptée est une quantité physique : jamais négative. */
  clampCounted(line: InventoryLine): void {
    if ((line.countedQty ?? 0) < 0) line.countedQty = 0;
  }

  get linesWithDiff(): InventoryLine[] {
    return this.filteredLines.filter(l => Math.abs(this.getDiff(l)) > 0.0001);
  }

  /** Valide les comptages sans créer d'écritures comptables. Propose l'impression du PV. */
  validateCounts(): void {
    this.validatedLines = this.filteredLines.map(l => ({ ...l }));
    this.countsValidated = true;
    this.showPrintReportBtn = true;
    this.showSuccess('Comptages validés — vous pouvez imprimer le PV d\'inventaire');
  }

  /** Applique les écarts avec écritures comptables (nécessite que des écarts existent). */
  applyAdjustments(): void {
    const toAdjust = this.linesWithDiff;
    if (toAdjust.length === 0) return;

    this.applying = true;
    this.errorMsg = '';
    const cid = this.authService.getCompanyId();

    const requests: StockAdjustmentRequest[] = toAdjust.map(l => ({
      productId: l.productId,
      locationId: l.locationId,
      newQty: l.countedQty,
      notes: this.notes || 'Inventaire physique',
      companyId: cid,
      date: this.adjDate || new Date().toISOString().split('T')[0]
    }));

    if (!this.countsValidated) {
      this.validatedLines = this.filteredLines.map(l => ({ ...l }));
    }

    this.stockService.createAdjustmentsBulk(requests).subscribe({
      next: () => {
        this.applying = false;
        this.showPrintReportBtn = true;
        this.showSuccess(`${toAdjust.length} ajustement(s) appliqué(s) avec écriture comptable`);
        this.notes = '';
        this.loadInventory();
        this.loadHistory();
        this.activeTab = 'history';
      },
      error: (err) => {
        this.applying = false;
        this.errorMsg = err.error?.message || 'Erreur lors de l\'application des ajustements';
      }
    });
  }

  private buildPdfHeader(): Pick<InventorySheetRequest, 'companyId' | 'companyName' | 'warehouseName' | 'responsableName'> {
    const company = this.authService.getActiveCompany();
    const wh = this.warehouses.find(w => w.id === this.filterWarehouseId);
    return {
      companyId: company?.id,
      companyName: company?.name,
      warehouseName: wh?.name,
      responsableName: wh?.responsableName
    };
  }

  printCountingSheet(): void {
    this.printingSheet = true;
    const today = new Date().toLocaleDateString('fr-FR');
    const linesToPrint = this.filteredLines.length > 0 ? this.filteredLines : this.inventoryLines;
    const dto: InventorySheetRequest = {
      ...this.buildPdfHeader(),
      date: today,
      lines: linesToPrint.map(l => ({
        productCode: l.productCode,
        productName: l.productName,
        locationName: l.locationName,
        uomName: l.uomName,
        systemQty: l.availableQty,
        unitCost: l.standardPrice
      }))
    };
    this.stockService.downloadCountingSheetPdf(dto).subscribe({
      next: (blob) => {
        this.printingSheet = false;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url;
        a.download = 'feuille_comptage.pdf'; a.click();
        URL.revokeObjectURL(url);
      },
      error: () => { this.printingSheet = false; this.errorMsg = 'Erreur génération feuille de comptage'; }
    });
  }

  printInventoryReport(): void {
    this.printingReport = true;
    const today = new Date().toLocaleDateString('fr-FR');
    const linesToPrint = this.validatedLines.length > 0 ? this.validatedLines : this.filteredLines;
    const dto: InventorySheetRequest = {
      ...this.buildPdfHeader(),
      date: today,
      lines: linesToPrint.map(l => {
        const diff = this.getDiff(l);
        return {
          productCode: l.productCode,
          productName: l.productName,
          locationName: l.locationName,
          uomName: l.uomName,
          systemQty: l.availableQty,
          countedQty: l.countedQty,
          diff,
          unitCost: l.standardPrice,
          valueDiff: diff * l.standardPrice
        };
      })
    };
    this.stockService.downloadInventoryReportPdf(dto).subscribe({
      next: (blob) => {
        this.printingReport = false;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url;
        a.download = 'fiche_inventaire.pdf'; a.click();
        URL.revokeObjectURL(url);
      },
      error: () => { this.printingReport = false; this.errorMsg = 'Erreur génération fiche d\'inventaire'; }
    });
  }

  resetCounted(): void {
    this.inventoryLines.forEach(l => l.countedQty = l.availableQty);
    this.countsValidated = false;
    this.showPrintReportBtn = false;
    this.applyInventoryFilter();
  }

  showSuccess(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 5000);
  }

  diffClass(diff: number): string {
    if (diff > 0) return 'diff-positive';
    if (diff < 0) return 'diff-negative';
    return 'diff-zero';
  }
}
