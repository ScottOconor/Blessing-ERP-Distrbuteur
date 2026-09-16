import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  StockService, Warehouse, Product, ProductCategory,
  StockReportWarehouse, StockReportLine,
  StockDetailedProduct, StockDetailedLocation
} from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { ExcelExportService } from '../../../../core/services/excel-export.service';

type ReportMode = 'analytique' | 'detaille';

@Component({
  selector: 'app-stock-analysis-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stock-analysis-report.component.html',
  styleUrl:   './stock-analysis-report.component.scss'
})
export class StockAnalysisReportComponent implements OnInit {

  // Filtres
  dateFrom  = '';
  dateTo    = '';
  warehouseIds: number[] = [];
  productId: number | null = null;
  categoryId: number | null = null;
  mode: ReportMode = 'analytique';

  // Référentiels
  warehouses:  Warehouse[] = [];
  products:    Product[]   = [];
  categories:  ProductCategory[] = [];

  // Données rapport
  analyticalData: StockReportWarehouse[]  = [];
  detailedData:   StockDetailedProduct[]  = [];

  loading = false;
  generated = false;
  errorMsg  = '';

  // Accordéon fiche détaillée
  expandedProducts = new Set<number>();

  constructor(
    private stockService: StockService,
    private authService:  AuthService,
    private excelExport:  ExcelExportService
  ) {}

  ngOnInit(): void {
    const today = new Date();
    const firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    this.dateTo   = today.toISOString().split('T')[0];
    this.dateFrom = firstOfMonth.toISOString().split('T')[0];

    const cid = this.authService.getCompanyId();
    this.stockService.getWarehouses(cid).subscribe({
      next: w => { this.warehouses = w.filter(x => x.active !== false); }
    });
    this.stockService.getCategories(cid).subscribe({
      next: c => this.categories = c
    });
    this.stockService.getProducts(cid).subscribe({
      next: p => this.products = p.filter(x => x.type === 'product' || x.type === 'consu')
    });
  }

  toggleWarehouse(id: number): void {
    const idx = this.warehouseIds.indexOf(id);
    if (idx >= 0) this.warehouseIds.splice(idx, 1);
    else this.warehouseIds.push(id);
  }

  isWarehouseSelected(id: number): boolean {
    return this.warehouseIds.includes(id);
  }

  generate(): void {
    if (!this.dateFrom || !this.dateTo) { this.errorMsg = 'Veuillez renseigner les dates.'; return; }
    if (this.warehouseIds.length === 0) { this.errorMsg = 'Sélectionnez au moins un entrepôt.'; return; }

    this.loading  = true;
    this.errorMsg = '';
    this.generated = false;

    const params = {
      companyId:    this.authService.getCompanyId(),
      warehouseIds: this.warehouseIds,
      dateFrom:     this.dateFrom,
      dateTo:       this.dateTo,
      productId:    this.productId  ?? undefined,
      categoryId:   this.categoryId ?? undefined,
    };

    if (this.mode === 'analytique') {
      this.stockService.getAnalyticalReport(params).subscribe({
        next:  d => { this.analyticalData = d; this.generated = true; this.loading = false; },
        error: e => { this.errorMsg = e.error?.message || 'Erreur lors de la génération'; this.loading = false; }
      });
    } else {
      this.expandedProducts.clear();
      this.stockService.getDetailedReport(params).subscribe({
        next:  d => { this.detailedData = d; this.generated = true; this.loading = false; },
        error: e => { this.errorMsg = e.error?.message || 'Erreur lors de la génération'; this.loading = false; }
      });
    }
  }

  // ─── Totaux globaux (analytique) ─────────────────────────────────────────
  get grandTotals() {
    const t = { initQty: 0, inQty: 0, outQty: 0, finalQty: 0, initVal: 0, inVal: 0, outVal: 0, finalVal: 0 };
    for (const wh of this.analyticalData) {
      t.initQty  += wh.totalInitialQty  || 0;
      t.inQty    += wh.totalInQty       || 0;
      t.outQty   += wh.totalOutQty      || 0;
      t.finalQty += wh.totalFinalQty    || 0;
      t.initVal  += wh.totalInitialValue || 0;
      t.inVal    += wh.totalInValue      || 0;
      t.outVal   += wh.totalOutValue     || 0;
      t.finalVal += wh.totalFinalValue   || 0;
    }
    return t;
  }

  // ─── Accordéon (détaillé) ────────────────────────────────────────────────
  toggleProduct(i: number): void {
    if (this.expandedProducts.has(i)) this.expandedProducts.delete(i);
    else this.expandedProducts.add(i);
  }
  isProductExpanded(i: number): boolean { return this.expandedProducts.has(i); }
  expandAll():   void { this.detailedData.forEach((_, i) => this.expandedProducts.add(i)); }
  collapseAll(): void { this.expandedProducts.clear(); }

  // ─── Utilitaires ─────────────────────────────────────────────────────────
  fmt(v: number | null | undefined, dec = 0): string {
    return new Intl.NumberFormat('fr-FR', { minimumFractionDigits: dec, maximumFractionDigits: dec }).format(v ?? 0);
  }

  hasMovements(loc: StockDetailedLocation): boolean {
    return loc.movements && loc.movements.length > 0;
  }

  printReport(): void { window.print(); }

  private get reportParams() {
    return {
      companyId:    this.authService.getCompanyId(),
      warehouseIds: this.warehouseIds,
      dateFrom:     this.dateFrom,
      dateTo:       this.dateTo,
      productId:    this.productId  ?? undefined,
      categoryId:   this.categoryId ?? undefined,
    };
  }

  private downloadBlob(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url;
    a.download = filename; a.click(); URL.revokeObjectURL(url);
  }

  exportPdf(): void {
    if (!this.generated) return;
    if (this.mode === 'analytique') {
      this.stockService.downloadAnalyticalReportPdf(this.reportParams).subscribe({
        next: blob => this.downloadBlob(blob, `rapport_analytique_${this.dateFrom}_${this.dateTo}.pdf`)
      });
    } else {
      this.stockService.downloadDetailedReportPdf(this.reportParams).subscribe({
        next: blob => this.downloadBlob(blob, `fiche_detaillee_${this.dateFrom}_${this.dateTo}.pdf`)
      });
    }
  }

  exportExcel(): void {
    if (!this.generated) return;
    const company = this.authService.getActiveCompany()?.name;
    if (this.mode === 'analytique') {
      this.excelExport.exportStockAnalysis(this.analyticalData, this.dateFrom, this.dateTo, company);
    } else {
      this.excelExport.exportStockDetailed(this.detailedData, this.dateFrom, this.dateTo, company);
    }
  }
}
