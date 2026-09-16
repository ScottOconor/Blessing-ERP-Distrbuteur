import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, StockQuant } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { ExcelExportService } from '../../../../core/services/excel-export.service';

export type GroupByMode = 'product' | 'category' | 'warehouse';

@Component({
  selector: 'app-stock-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stock-report.component.html',
  styleUrl: './stock-report.component.scss'
})
export class StockReportComponent implements OnInit {
  quants: StockQuant[] = [];
  filtered: StockQuant[] = [];
  loading = false;
  search = '';
  groupBy: GroupByMode = 'product';
  expandedGroups = new Set<string>();

  constructor(
    private stockService: StockService,
    private authService: AuthService,
    private excelExport: ExcelExportService
  ) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.stockService.getStockReport(this.authService.getCompanyId()).subscribe({
      next: (data) => { this.quants = data; this.applyFilter(); this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  applyFilter(): void {
    const q = this.search.toLowerCase().trim();
    this.filtered = q
      ? this.quants.filter(s =>
          (s.productName || '').toLowerCase().includes(q) ||
          (s.productCode || '').toLowerCase().includes(q) ||
          (s.categoryName || '').toLowerCase().includes(q) ||
          (s.locationName || '').toLowerCase().includes(q))
      : [...this.quants];
    // Reset expanded state when filter changes
    this.expandedGroups.clear();
  }

  toggleGroup(key: string): void {
    if (this.expandedGroups.has(key)) this.expandedGroups.delete(key);
    else this.expandedGroups.add(key);
  }
  isExpanded(key: string): boolean { return this.expandedGroups.has(key); }

  expandAll(): void   { this.groups.forEach(g => this.expandedGroups.add(g.key)); }
  collapseAll(): void { this.expandedGroups.clear(); }

  get totalValue(): number {
    return this.filtered.reduce((s, q) => s + ((q.totalValue as any) || 0), 0);
  }

  get totalQtyLines(): number {
    return this.filtered.reduce((s, q) => s + (q.quantity || 0), 0);
  }

  // ── Grouped data ───────────────────────────────────────────────────────────
  get groups(): GroupEntry[] {
    const map = new Map<string, GroupEntry>();

    for (const q of this.filtered) {
      let key: string;
      let label: string;

      switch (this.groupBy) {
        case 'category':
          key   = String(q.categoryId ?? '0');
          label = q.categoryName || '(Sans catégorie)';
          break;
        case 'warehouse':
          key   = (q.locationCompleteName || q.locationName || '').split('/')[0].trim() || 'Entrepôt';
          label = key;
          break;
        // location groupBy removed
        default: // 'product'
          key   = String(q.productId);
          label = (q.productCode ? `[${q.productCode}] ` : '') + (q.productName || '?');
      }

      if (!map.has(key)) {
        map.set(key, { key, label, rows: [], subtotalQty: 0, subtotalValue: 0 });
      }
      const g = map.get(key)!;
      g.rows.push(q);
      g.subtotalQty   += q.quantity || 0;
      g.subtotalValue += (q.totalValue as any) || 0;
    }

    return Array.from(map.values()).sort((a, b) => b.subtotalValue - a.subtotalValue);
  }

  // Row columns inside a group depend on groupBy
  rowLabel(q: StockQuant): string {
    switch (this.groupBy) {
      case 'category':
      case 'warehouse':
        return (q.productCode ? `[${q.productCode}] ` : '') + (q.productName || '?');
      case 'product':
        return q.locationCompleteName || q.locationName || '?';
      default:
        return (q.productCode ? `[${q.productCode}] ` : '') + (q.productName || '?');
    }
  }

  fmt(v: number, dec = 0): string {
    return new Intl.NumberFormat('fr-FR', { minimumFractionDigits: dec, maximumFractionDigits: dec }).format(v || 0);
  }

  exportPdf(): void {
    const cid = this.authService.getCompanyId();
    this.stockService.downloadStockReportPdf(cid).subscribe({
      next: blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url;
        a.download = `rapport_stock_${new Date().toISOString().slice(0,10)}.pdf`;
        a.click(); URL.revokeObjectURL(url);
      }
    });
  }

  exportExcel(): void {
    const session = this.authService.getSession();
    const whMap = new Map<string, any>();
    for (const q of this.filtered) {
      const wh = (q.locationCompleteName || q.locationName || '').split('/')[0].trim() || 'Entrepôt';
      if (!whMap.has(wh)) whMap.set(wh, { warehouseName: wh, rows: [], subtotalQty: 0, subtotalValue: 0 });
      const entry = whMap.get(wh)!;
      const existing = entry.rows.find((r: any) => r.productId === q.productId);
      if (existing) { existing.qty += q.quantity || 0; existing.value += (q.totalValue as any) || 0; }
      else entry.rows.push({ productId: q.productId, code: q.productCode || '', name: q.productName || '', uom: q.uomName || '', price: q.standardPrice || 0, qty: q.quantity || 0, value: (q.totalValue as any) || 0 });
      entry.subtotalQty += q.quantity || 0; entry.subtotalValue += (q.totalValue as any) || 0;
    }
    this.excelExport.exportStockReport(Array.from(whMap.values()));
  }
}

interface GroupEntry {
  key: string;
  label: string;
  rows: StockQuant[];
  subtotalQty: number;
  subtotalValue: number;
}
