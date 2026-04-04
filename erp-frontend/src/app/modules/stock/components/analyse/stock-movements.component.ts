import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, StockMove, Product } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-stock-movements',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stock-movements.component.html',
  styleUrl: './stock-movements.component.scss'
})
export class StockMovementsComponent implements OnInit {
  movements: StockMove[] = [];
  filtered: StockMove[] = [];
  products: Product[] = [];
  loading = false;
  search = '';
  filterProductId: number | null = null;
  limit = 100;

  constructor(private stockService: StockService, private authService: AuthService) {}

  ngOnInit(): void {
    const cid = this.authService.getCompanyId();
    this.stockService.getProducts(cid).subscribe({ next: (p) => this.products = p });
    this.load();
  }

  load(): void {
    this.loading = true;
    const cid = this.authService.getCompanyId();
    this.stockService.getMovements(cid, this.filterProductId ?? undefined, this.limit).subscribe({
      next: (data) => {
        this.movements = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  applyFilter(): void {
    const q = this.search.toLowerCase().trim();
    this.filtered = q
      ? this.movements.filter(m =>
          (m.productName || '').toLowerCase().includes(q) ||
          (m.productCode || '').toLowerCase().includes(q) ||
          (m.locationName || '').toLowerCase().includes(q) ||
          (m.locationDestName || '').toLowerCase().includes(q))
      : [...this.movements];
  }

  getMoveType(m: StockMove): string {
    const src = m.locationName || '';
    const dest = m.locationDestName || '';
    if (src.toLowerCase().includes('fournisseur') || src.toLowerCase().includes('supplier')) return 'reception';
    if (dest.toLowerCase().includes('client') || dest.toLowerCase().includes('customer')) return 'livraison';
    if (src.toLowerCase().includes('inventaire') || dest.toLowerCase().includes('inventaire')) return 'ajustement';
    return 'transfert';
  }

  getMoveTypeLabel(m: StockMove): string {
    const t = this.getMoveType(m);
    const labels: Record<string, string> = {
      reception: 'Réception', livraison: 'Livraison',
      ajustement: 'Ajustement', transfert: 'Transfert'
    };
    return labels[t] || 'Mouvement';
  }

  get totalMoved(): number {
    return this.filtered.reduce((s, m) => s + (m.qtyDone as any || 0), 0);
  }
}
