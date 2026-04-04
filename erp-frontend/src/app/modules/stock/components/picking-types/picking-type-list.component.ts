import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, StockPickingType, Warehouse } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-picking-type-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './picking-type-list.component.html',
  styleUrl: './picking-type-list.component.scss'
})
export class PickingTypeListComponent implements OnInit {
  pickingTypes: StockPickingType[] = [];
  warehouses: Warehouse[] = [];
  loading = false;

  constructor(private stockService: StockService, private authService: AuthService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    const cid = this.authService.getCompanyId();
    this.stockService.getPickingTypes(cid).subscribe({
      next: (d) => { this.pickingTypes = d; this.loading = false; },
      error: () => { this.loading = false; }
    });
    this.stockService.getWarehouses(cid).subscribe({ next: (w) => this.warehouses = w });
  }

  getCodeLabel(code: string): string {
    const labels: Record<string, string> = {
      incoming: 'Réception', outgoing: 'Livraison', internal: 'Transfert interne', adjust: 'Ajustement'
    };
    return labels[code] || code;
  }

  getWarehouseName(id?: number): string {
    if (!id) return '—';
    return this.warehouses.find(w => w.id === id)?.name || '—';
  }
}
