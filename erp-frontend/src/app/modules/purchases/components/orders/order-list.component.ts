import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PurchaseService, PurchaseOrder } from '../../services/purchase.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-purchase-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent implements OnInit {
  orders: PurchaseOrder[] = [];
  filteredOrders: PurchaseOrder[] = [];
  loading = false;
  stateFilter = 'all';
  successMsg = '';
  errorMsg = '';

  stateFilters = [
    { value: 'all', label: 'Tous' },
    { value: 'draft', label: 'Brouillon' },
    { value: 'confirmed', label: 'Confirmée' },
    { value: 'received', label: 'Réceptionnée' },
    { value: 'cancelled', label: 'Annulée' }
  ];

  constructor(
    private purchaseService: PurchaseService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void { this.loadOrders(); }

  loadOrders(): void {
    this.loading = true;
    const cid = this.authService.getCompanyId() ?? 1;
    this.purchaseService.getOrders(cid).subscribe({
      next: data => { this.orders = data; this.applyFilter(); this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  applyFilter(): void {
    this.filteredOrders = this.stateFilter === 'all'
      ? this.orders
      : this.orders.filter(o => o.state === this.stateFilter);
  }

  setFilter(state: string): void { this.stateFilter = state; this.applyFilter(); }

  newOrder(): void { this.router.navigate(['/purchases/orders/new']); }
  editOrder(id: number): void { this.router.navigate(['/purchases/orders', id]); }

  stateLabel(s?: string): string {
    const map: Record<string, string> = { draft: 'Brouillon', confirmed: 'Confirmée', received: 'Réceptionnée', cancelled: 'Annulée' };
    return map[s ?? ''] ?? s ?? '';
  }

  stateBadge(s?: string): string {
    return 'badge badge-' + (s ?? 'draft');
  }

  showSuccess(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 5000);
  }
}
