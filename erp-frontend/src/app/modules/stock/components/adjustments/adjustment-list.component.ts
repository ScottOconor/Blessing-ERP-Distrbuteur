import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, StockAdjustment, StockAdjustmentRequest, StockQuant, StockLocation, Product, Warehouse, InventorySheetRequest } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { forkJoin } from 'rxjs';

interface InventoryLine {
  productId: number;
  productCode: string;
  productName: string;
  uomName: string;
  locationId: number;
  locationName: string;
  availableQty: number;
  countedQty: number;
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
  filterLocationId: number | null = null;
  filterSearch = '';
  notes = '';
  applying = false;
  loadingInventory = false;

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
  lastAppliedLines: InventoryLine[] = [];
  showPrintReportBtn = false;

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

        // Emplacement par défaut = emplacement stock du magasin principal
        const mainWarehouse = warehouses[0];
        const defaultLoc = mainWarehouse?.stockLocationId
          ? this.locations.find(l => l.id === mainWarehouse.stockLocationId) ?? this.locations[0]
          : this.locations[0];

        // Index des produits déjà présents dans les quants
        const quantProductIds = new Set(quants.map(q => q.productId));

        // Lignes depuis les quants (stock existant, même qty=0)
        const quantLines: InventoryLine[] = quants.map(q => ({
          productId: q.productId,
          productCode: q.productCode ?? '',
          productName: q.productName ?? '',
          uomName: q.uomName ?? '',
          locationId: q.locationId,
          locationName: q.locationCompleteName ?? q.locationName ?? '',
          availableQty: q.quantity ?? 0,
          countedQty: q.quantity ?? 0
        }));

        // Lignes pour les articles sans aucun quant (qty = 0) → magasin principal
        const noQuantLines: InventoryLine[] = products
          .filter(p => (p.type === 'product' || p.type === 'consu') && !quantProductIds.has(p.id!))
          .map(p => ({
            productId: p.id!,
            productCode: p.defaultCode ?? '',
            productName: p.name,
            uomName: p.uomName ?? '',
            locationId: defaultLoc?.id ?? 0,
            locationName: defaultLoc?.completeName ?? defaultLoc?.name ?? '',
            availableQty: 0,
            countedQty: 0
          }));

        this.inventoryLines = [...quantLines, ...noQuantLines]
          .sort((a, b) => a.productName.localeCompare(b.productName));
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

  applyInventoryFilter(): void {
    this.filteredLines = this.inventoryLines.filter(l => {
      if (this.filterLocationId && l.locationId !== +this.filterLocationId) return false;
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

  get linesWithDiff(): InventoryLine[] {
    return this.inventoryLines.filter(l => Math.abs(this.getDiff(l)) > 0.0001);
  }

  applyAdjustments(): void {
    const toAdjust = this.linesWithDiff;
    if (toAdjust.length === 0) return;

    this.applying = true;
    this.errorMsg = '';
    this.showPrintReportBtn = false;
    const cid = this.authService.getCompanyId();

    const requests: StockAdjustmentRequest[] = toAdjust.map(l => ({
      productId: l.productId,
      locationId: l.locationId,
      newQty: l.countedQty,
      notes: this.notes || 'Inventaire physique',
      companyId: cid
    }));

    this.lastAppliedLines = [...toAdjust];

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

  printCountingSheet(): void {
    this.printingSheet = true;
    const today = new Date().toLocaleDateString('fr-FR');
    const dto: InventorySheetRequest = {
      date: today,
      lines: this.inventoryLines.map(l => ({
        productCode: l.productCode,
        productName: l.productName,
        locationName: l.locationName,
        uomName: l.uomName,
        systemQty: l.availableQty
      }))
    };
    this.stockService.downloadCountingSheetPdf(dto).subscribe({
      next: (blob) => {
        this.printingSheet = false;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'feuille_comptage.pdf';
        a.click();
        URL.revokeObjectURL(url);
      },
      error: () => { this.printingSheet = false; this.errorMsg = 'Erreur lors de la génération de la feuille de comptage'; }
    });
  }

  printInventoryReport(): void {
    this.printingReport = true;
    const today = new Date().toLocaleDateString('fr-FR');
    const dto: InventorySheetRequest = {
      date: today,
      lines: this.lastAppliedLines.map(l => ({
        productCode: l.productCode,
        productName: l.productName,
        locationName: l.locationName,
        uomName: l.uomName,
        systemQty: l.availableQty,
        countedQty: l.countedQty,
        diff: this.getDiff(l)
      }))
    };
    this.stockService.downloadInventoryReportPdf(dto).subscribe({
      next: (blob) => {
        this.printingReport = false;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'fiche_inventaire.pdf';
        a.click();
        URL.revokeObjectURL(url);
      },
      error: () => { this.printingReport = false; this.errorMsg = 'Erreur lors de la génération de la fiche d\'inventaire'; }
    });
  }

  resetCounted(): void {
    this.inventoryLines.forEach(l => l.countedQty = l.availableQty);
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
