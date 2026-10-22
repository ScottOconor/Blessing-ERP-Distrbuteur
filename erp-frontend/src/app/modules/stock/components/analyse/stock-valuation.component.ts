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

  isAdmin = false;
  rebuilding = false;
  rebuildMsg = '';
  rebuildError = '';

  constructor(private stockService: StockService, private authService: AuthService) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
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

  /** Rejoue tous les mouvements de stock pour reconstruire l'historique CMUP (rapports aux prix de la période). */
  rebuildPriceHistory(): void {
    if (!confirm('Reconstruire l\'historique des CMUP à partir de tous les mouvements de stock ?\n' +
                 'Le CMUP actuel des articles n\'est pas modifié.')) return;
    this.rebuilding = true;
    this.rebuildMsg = '';
    this.rebuildError = '';
    this.stockService.rebuildPriceHistory(this.authService.getCompanyId()).subscribe({
      next: r => {
        this.rebuilding = false;
        this.rebuildMsg = `${r.entries} changement(s) de CMUP reconstruits` +
          (r.aligned > 0 ? ` — ${r.aligned} article(s)/entrepôt(s) recalé(s) sur le CMUP actuel` : '') + '.';
      },
      error: e => {
        this.rebuilding = false;
        this.rebuildError = e?.error?.message || 'La reconstruction a échoué.';
      }
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
