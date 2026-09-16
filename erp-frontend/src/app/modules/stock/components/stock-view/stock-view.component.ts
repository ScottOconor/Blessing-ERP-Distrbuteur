import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, StockQuant, StockLocation, Warehouse, Product } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-stock-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stock-view.component.html',
  styleUrl: './stock-view.component.scss'
})
export class StockViewComponent implements OnInit {
  quants: StockQuant[] = [];
  filtered: StockQuant[] = [];
  locations: StockLocation[] = [];
  warehouses: Warehouse[] = [];
  products: Product[] = [];

  loading = false;
  searchProduct = '';
  filterLocationId: number | '' = '';
  filterWarehouseId: number | '' = '';
  viewMode: 'by-product' | 'by-location' = 'by-product';

  private companyId!: number;

  constructor(private stockService: StockService, private authService: AuthService) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId();
    this.loading = true;
    forkJoin({
      quants: this.stockService.getQuants(this.companyId),
      locations: this.stockService.getLocations(this.companyId),
      warehouses: this.stockService.getWarehouses(this.companyId),
      products: this.stockService.getProducts(this.companyId)
    }).subscribe({
      next: ({ quants, locations, warehouses, products }) => {
        this.quants = quants.filter(q => q.quantity > 0 || q.reservedQuantity > 0);
        this.locations = locations.filter(l => l.usage === 'internal');
        this.warehouses = warehouses;
        this.products = products;
        this.applyFilter();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  applyFilter(): void {
    let list = [...this.quants];
    if (this.searchProduct) {
      const q = this.searchProduct.toLowerCase();
      list = list.filter(qu =>
        (qu.productName || '').toLowerCase().includes(q) ||
        (qu.productCode || '').toLowerCase().includes(q)
      );
    }
    if (this.filterLocationId) {
      list = list.filter(qu => qu.locationId === Number(this.filterLocationId));
    } else if (this.filterWarehouseId) {
      const wid = Number(this.filterWarehouseId);
      const locIds = new Set(this.locations.filter(l => l.warehouseId === wid).map(l => l.id!));
      list = list.filter(qu => locIds.has(qu.locationId));
    }
    this.filtered = list;
  }

  get totalValue(): number {
    return this.filtered.reduce((s, q) => s + (q.totalValue || 0), 0);
  }

  get groupedByProduct(): { product: string; code: string; total: number; totalReserved: number; totalAvailable: number; value: number; lines: StockQuant[] }[] {
    const map = new Map<string, { product: string; code: string; total: number; totalReserved: number; totalAvailable: number; value: number; lines: StockQuant[] }>();
    this.filtered.forEach(q => {
      const key = q.productName || String(q.productId);
      const g = map.get(key) || { product: q.productName || '', code: q.productCode || '', total: 0, totalReserved: 0, totalAvailable: 0, value: 0, lines: [] };
      g.total += q.quantity;
      g.totalReserved += q.reservedQuantity || 0;
      g.totalAvailable += q.availableQuantity || 0;
      g.value += q.totalValue || 0;
      g.lines.push(q);
      map.set(key, g);
    });
    return Array.from(map.values()).sort((a, b) => b.value - a.value);
  }

  get groupedByLocation(): { location: string; lines: StockQuant[]; value: number }[] {
    const map = new Map<string, { location: string; lines: StockQuant[]; value: number }>();
    this.filtered.forEach(q => {
      const key = q.locationCompleteName || q.locationName || String(q.locationId);
      const g = map.get(key) || { location: key, lines: [], value: 0 };
      g.lines.push(q);
      g.value += q.totalValue || 0;
      map.set(key, g);
    });
    return Array.from(map.values()).sort((a, b) => b.value - a.value);
  }
}
