import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, ValuationLayer, Product } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-stock-valuation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stock-valuation.component.html',
  styleUrl: './stock-valuation.component.scss'
})
export class StockValuationComponent implements OnInit {
  layers: ValuationLayer[] = [];
  filtered: ValuationLayer[] = [];
  products: Product[] = [];
  loading = false;
  search = '';
  filterProductId: number | null = null;

  constructor(private stockService: StockService, private authService: AuthService) {}

  ngOnInit(): void {
    const cid = this.authService.getCompanyId();
    this.stockService.getProducts(cid).subscribe({ next: (p) => this.products = p });
    this.load();
  }

  load(): void {
    this.loading = true;
    const cid = this.authService.getCompanyId();
    this.stockService.getValuation(cid, this.filterProductId ?? undefined).subscribe({
      next: (data) => {
        this.layers = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  applyFilter(): void {
    const q = this.search.toLowerCase().trim();
    this.filtered = q
      ? this.layers.filter(l =>
          (l.productName || '').toLowerCase().includes(q) ||
          (l.productCode || '').toLowerCase().includes(q) ||
          (l.description || '').toLowerCase().includes(q))
      : [...this.layers];
  }

  get totalValue(): number {
    return this.filtered.reduce((s, l) => s + (l.value || 0), 0);
  }

  get totalPositive(): number {
    return this.filtered.filter(l => l.value > 0).reduce((s, l) => s + l.value, 0);
  }

  get totalNegative(): number {
    return this.filtered.filter(l => l.value < 0).reduce((s, l) => s + l.value, 0);
  }
}
