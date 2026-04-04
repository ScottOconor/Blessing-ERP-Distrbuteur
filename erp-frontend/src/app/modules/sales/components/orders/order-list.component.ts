import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SalesService, SalesOrder } from '../../services/sales.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent implements OnInit {
  orders: SalesOrder[] = [];
  filteredOrders: SalesOrder[] = [];
  loading = false;
  stateFilter = 'all';
  successMsg = '';
  errorMsg = '';
  confirming: number | null = null;
  cancelling: number | null = null;

  stateFilters = [
    { value: 'all', label: 'Tous' },
    { value: 'draft', label: 'Brouillon' },
    { value: 'confirmed', label: 'Confirmé' },
    { value: 'invoiced', label: 'Facturé' },
    { value: 'cancelled', label: 'Annulé' }
  ];

  constructor(
    private salesService: SalesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.loading = true;
    const companyId = this.authService.getCompanyId();
    this.salesService.getOrders(companyId).subscribe({
      next: (data) => {
        this.orders = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  applyFilter(): void {
    this.filteredOrders = this.stateFilter === 'all'
      ? this.orders
      : this.orders.filter(o => o.state === this.stateFilter);
  }

  setFilter(state: string): void {
    this.stateFilter = state;
    this.applyFilter();
  }

  newOrder(): void {
    this.router.navigate(['/sales/orders/new']);
  }

  editOrder(order: SalesOrder): void {
    this.router.navigate(['/sales/orders', order.id]);
  }

  viewInvoice(order: SalesOrder): void {
    if (order.invoiceId) {
      this.router.navigate(['/sales/invoices', order.invoiceId]);
    }
  }

  confirmOrder(order: SalesOrder, event: Event): void {
    event.stopPropagation();
    if (!confirm(`Confirmer le bon ${order.name} ? Une facture sera créée automatiquement.`)) return;

    this.confirming = order.id!;
    this.errorMsg = '';
    this.salesService.confirmOrder(order.id!).subscribe({
      next: (updated) => {
        this.confirming = null;
        this.showSuccess(`Bon ${order.name} confirmé. Facture ${updated.invoiceName} créée.`);
        this.loadOrders();
      },
      error: (err) => {
        this.confirming = null;
        this.errorMsg = err.error?.message || 'Erreur lors de la confirmation';
      }
    });
  }

  cancelOrder(order: SalesOrder, event: Event): void {
    event.stopPropagation();
    if (!confirm(`Annuler le bon ${order.name} ?`)) return;

    this.cancelling = order.id!;
    this.salesService.cancelOrder(order.id!).subscribe({
      next: () => {
        this.cancelling = null;
        this.showSuccess(`Bon ${order.name} annulé`);
        this.loadOrders();
      },
      error: (err) => {
        this.cancelling = null;
        this.errorMsg = err.error?.message || 'Erreur lors de l\'annulation';
      }
    });
  }

  getStateBadge(state: string): string {
    const map: Record<string, string> = {
      draft: 'badge-draft',
      confirmed: 'badge-confirmed',
      invoiced: 'badge-invoiced',
      cancelled: 'badge-cancelled'
    };
    return 'badge ' + (map[state] || 'badge-draft');
  }

  getStateLabel(state: string): string {
    const map: Record<string, string> = {
      draft: 'Brouillon',
      confirmed: 'Confirmé',
      invoiced: 'Facturé',
      cancelled: 'Annulé'
    };
    return map[state] || state;
  }

  showSuccess(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 4000);
  }
}
