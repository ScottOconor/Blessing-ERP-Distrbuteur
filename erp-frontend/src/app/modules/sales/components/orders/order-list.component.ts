import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupedList, ListGroup, ListQuery, PAGE_SIZE } from '../../../../core/utils/server-list';
import { PagerComponent } from '../../../../shared/components/pager/pager.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SalesService, SalesOrder } from '../../services/sales.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { formatFCFA } from '../../../../core/utils/currency-format.util';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PagerComponent],
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
    this.page = 0;
    this.loadListPage();
  }

  applyFilter(): void {
    this.page = 0;
    this.loadListPage();
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

  deleteOrder(order: SalesOrder, event: Event): void {
    event.stopPropagation();
    if (!confirm(`Supprimer définitivement le bon brouillon ${order.name} ?`)) return;

    this.cancelling = order.id!;
    this.salesService.deleteOrder(order.id!).subscribe({
      next: () => {
        this.cancelling = null;
        this.showSuccess(`Bon ${order.name} supprimé`);
        this.loadOrders();
      },
      error: (err) => {
        this.cancelling = null;
        this.errorMsg = err.error?.message || 'Erreur lors de la suppression';
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

  // ── Pagination côté serveur (filtres, totaux et regroupements calculés par le serveur) ──
  page = 0;
  readonly pageSize = PAGE_SIZE;
  totalElements = 0;
  listTotals: Record<string, number> = {};
  groupedRows: { key: string; label: string; count: number; totalHT: number; totalTTC: number; items: SalesOrder[] }[] = [];
  private readonly groupServerKeys: Record<string, string> = {};
  private readonly grouped = new GroupedList<SalesOrder>((key, page) =>
    this.salesService.getOrdersPage({ ...this.listQuery(), groupBy: this.serverGroup(), groupKey: key, page, size: this.pageSize }));

  private listQuery(): ListQuery {
    return {
      companyId: this.authService.getCompanyId(),
      state: this.stateFilter,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
    };
  }

  private serverGroup(): string { return this.groupServerKeys[this.groupBy] ?? this.groupBy; }

  loadListPage(): void {
    this.loading = true;
    if (this.groupBy) {
      this.salesService.getOrdersGroups({ ...this.listQuery(), groupBy: this.serverGroup() }).subscribe({
        next: (groups: ListGroup[]) => {
          this.grouped.reset(groups);
          this.groupedRows = groups
            .map(g => ({ key: g.key, label: this.groupLabel(g), count: g.count, totalHT: Number(g.totals?.['ht']) || 0, totalTTC: Number(g.totals?.['ttc']) || 0, items: [] as SalesOrder[] }))
            .sort((a, b) => a.label.localeCompare(b.label));
          this.totalElements = this.grouped.count;
          this.loading = false;
        },
        error: () => { this.loading = false; }
      });
      return;
    }
    this.salesService.getOrdersPage({ ...this.listQuery(), page: this.page, size: this.pageSize }).subscribe({
      next: (r: any) => {
        this.filteredOrders = r.content;
        this.orders = r.content;
        this.totalElements = r.totalElements;
        this.listTotals = r.totals ?? {};
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  goToPage(page: number): void {
    this.page = page;
    this.loadListPage();
  }

  private groupLabel(g: ListGroup): string {
    if (g.key === 'none') return g.label;
    if (this.groupBy === 'mois') return this.fmtMonth(g.key);
    if (this.groupBy === 'statut') return this.getStateLabel(g.key);
    return g.label;
  }

  hasMoreGroupItems(key: string): boolean { return this.grouped.hasMore(key); }
  loadMoreGroupItems(key: string): void { this.grouped.loadMore(key); }

  // ── Group By ─────────────────────────────────────────────────────────────────
  groupBy = '';
  expandedGroups = new Set<string>();

  groupByOptions = [
    { key: 'mois',     label: 'Mois',      icon: 'calendar_month' },
    { key: 'client',   label: 'Client',    icon: 'person' },
    { key: 'statut',   label: 'Statut',    icon: 'label' },
    { key: 'entrepot', label: 'Entrepôt',  icon: 'warehouse' }
  ];

  setGroupBy(key: string): void {
    this.groupBy = this.groupBy === key ? '' : key;
    this.page = 0;
    this.loadListPage();
  }

  toggleGroup(key: string): void { this.grouped.toggle(key); }

  isExpanded(key: string): boolean { return this.grouped.isExpanded(key); }

  getGroupItems(key: string): SalesOrder[] { return this.grouped.rows(key); }

  fmtMonth(ym: string): string {
    const [y, m] = ym.split('-');
    return new Date(+y, +m - 1, 1).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' });
  }

  fmtN(v: number): string {
    return formatFCFA(v, false);
  }
}
