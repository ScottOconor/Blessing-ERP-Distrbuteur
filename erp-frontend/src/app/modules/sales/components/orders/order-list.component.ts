import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SalesService, SalesOrder } from '../../services/sales.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent implements OnInit {
  orders: SalesOrder[] = [];
  filteredOrders: SalesOrder[] = [];
  loading = false;
  canCreate = false;
  canEdit   = false;
  stateFilter = 'all';
  dateFrom = '';
  dateTo = '';
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
    this.canCreate = this.authService.hasPermission('VENTES', 'BONS_COMMANDE', 'CREATE');
    this.canEdit   = this.authService.hasPermission('VENTES', 'BONS_COMMANDE', 'EDIT');
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
    this.filteredOrders = this.orders.filter(o => {
      if (this.stateFilter !== 'all' && o.state !== this.stateFilter) return false;
      if (this.dateFrom && o.date < this.dateFrom) return false;
      if (this.dateTo && o.date > this.dateTo) return false;
      return true;
    });
  }

  setFilter(state: string): void {
    this.stateFilter = state;
    this.applyFilter();
  }

  clearDateFilter(): void {
    this.dateFrom = '';
    this.dateTo = '';
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

  // ── Group By ─────────────────────────────────────────────────────────────────
  groupBy = '';
  expandedGroups = new Set<string>();

  groupByOptions = [
    { key: 'mois',     label: 'Mois',      icon: 'calendar_month' },
    { key: 'client',   label: 'Client',    icon: 'person' },
    { key: 'statut',   label: 'Statut',    icon: 'label' },
    { key: 'entrepot', label: 'Entrepôt',  icon: 'warehouse' }
  ];

  get groupedRows(): { key: string; label: string; count: number; totalHT: number; totalTTC: number; items: SalesOrder[] }[] {
    if (!this.groupBy) return [];
    const map = new Map<string, { key: string; label: string; count: number; totalHT: number; totalTTC: number; items: SalesOrder[] }>();
    for (const item of this.filteredOrders) {
      let key: string, label: string;
      switch (this.groupBy) {
        case 'mois':
          key = (item.date || '').substring(0, 7);
          label = key ? this.fmtMonth(key) : '(Sans date)';
          break;
        case 'client':
          key = label = item.partnerName || '(Sans client)';
          break;
        case 'statut':
          key = item.state || '?';
          label = this.getStateLabel(item.state || '');
          break;
        case 'entrepot':
          key = label = (item as any).warehouseName || '(Sans entrepôt)';
          break;
        default: key = label = '?';
      }
      if (!map.has(key)) map.set(key, { key, label, count: 0, totalHT: 0, totalTTC: 0, items: [] });
      const g = map.get(key)!;
      g.count++;
      g.totalHT  += item.totalHT  || 0;
      g.totalTTC += item.totalTTC || 0;
      g.items.push(item);
    }
    const arr = Array.from(map.values());
    arr.sort((a, b) => a.label.localeCompare(b.label));
    return arr;
  }

  setGroupBy(key: string): void {
    this.groupBy = this.groupBy === key ? '' : key;
    this.expandedGroups.clear();
  }

  toggleGroup(key: string): void {
    if (this.expandedGroups.has(key)) this.expandedGroups.delete(key);
    else this.expandedGroups.add(key);
  }

  isExpanded(key: string): boolean { return this.expandedGroups.has(key); }

  getGroupItems(key: string): SalesOrder[] {
    return this.groupedRows.find(g => g.key === key)?.items ?? [];
  }

  fmtMonth(ym: string): string {
    const [y, m] = ym.split('-');
    return new Date(+y, +m - 1, 1).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' });
  }

  fmtN(v: number): string {
    return new Intl.NumberFormat('fr-FR').format(v || 0);
  }
}
