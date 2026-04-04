import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, StockQuant } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';

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
  viewMode: 'product' | 'location' = 'product';

  constructor(private stockService: StockService, private authService: AuthService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.stockService.getStockReport(this.authService.getCompanyId()).subscribe({
      next: (data) => {
        this.quants = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  applyFilter(): void {
    const q = this.search.toLowerCase().trim();
    this.filtered = q
      ? this.quants.filter(s =>
          (s.productName || '').toLowerCase().includes(q) ||
          (s.productCode || '').toLowerCase().includes(q) ||
          (s.locationName || '').toLowerCase().includes(q))
      : [...this.quants];
  }

  get totalValue(): number {
    return this.filtered.reduce((sum, q) => sum + (q.totalValue as any || 0), 0);
  }

  get totalQty(): number {
    return this.filtered.length;
  }

  // Group by product (sum qty across locations)
  get byProduct(): { productId: number; productCode: string; productName: string; uomName: string; totalQty: number; totalValue: number; locations: StockQuant[] }[] {
    const map = new Map<number, any>();
    for (const q of this.filtered) {
      if (!map.has(q.productId)) {
        map.set(q.productId, {
          productId: q.productId,
          productCode: q.productCode || '',
          productName: q.productName || '',
          uomName: q.uomName || '',
          totalQty: 0,
          totalValue: 0,
          locations: []
        });
      }
      const entry = map.get(q.productId);
      entry.totalQty += q.quantity || 0;
      entry.totalValue += (q.totalValue as any) || 0;
      entry.locations.push(q);
    }
    return Array.from(map.values()).sort((a, b) => b.totalValue - a.totalValue);
  }

  printReport(): void { window.print(); }
}
