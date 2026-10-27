import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupedList, ListGroup, ListQuery, PAGE_SIZE } from '../../../../core/utils/server-list';
import { PagerComponent } from '../../../../shared/components/pager/pager.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseService, PurchaseOrder } from '../../services/purchase.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-purchase-order-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PagerComponent],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent implements OnInit {
  orders: PurchaseOrder[] = [];
  filteredOrders: PurchaseOrder[] = [];
  loading = false;
  stateFilter = 'all';
  dateFrom = '';
  dateTo = '';
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
    this.loadListPage();
  }

  applyFilter(): void {
    this.page = 0;
    this.loadListPage();
  }

  setFilter(state: string): void { this.stateFilter = state; this.applyFilter(); }

  clearDateFilter(): void { this.dateFrom = ''; this.dateTo = ''; this.applyFilter(); }

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

  getStateLabel(state: string): string {
    const map: Record<string, string> = { draft: 'Brouillon', confirmed: 'Confirmée', received: 'Réceptionnée', cancelled: 'Annulée' };
    return map[state] || state;
  }

  // ── Pagination côté serveur (filtres, totaux et regroupements calculés par le serveur) ──
  page = 0;
  readonly pageSize = PAGE_SIZE;
  totalElements = 0;
  listTotals: Record<string, number> = {};
  groupedRows: { key: string; label: string; count: number; totalHT: number; totalTTC: number; paye: number; du: number; items: PurchaseOrder[] }[] = [];
  private readonly groupServerKeys: Record<string, string> = {};
  private readonly grouped = new GroupedList<PurchaseOrder>((key, page) =>
    this.purchaseService.getOrdersPage({ ...this.listQuery(), groupBy: this.serverGroup(), groupKey: key, page, size: this.pageSize }));

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
      this.purchaseService.getOrdersGroups({ ...this.listQuery(), groupBy: this.serverGroup() }).subscribe({
        next: (groups: ListGroup[]) => {
          this.grouped.reset(groups);
          this.groupedRows = groups
            .map(g => ({ key: g.key, label: this.groupLabel(g), count: g.count, totalHT: Number(g.totals?.['ht']) || 0, totalTTC: Number(g.totals?.['ttc']) || 0, paye: Number(g.totals?.['paye']) || 0, du: Number(g.totals?.['du']) || 0, items: [] as PurchaseOrder[] }))
            .sort((a, b) => a.label.localeCompare(b.label));
          this.totalElements = this.grouped.count;
          this.loading = false;
        },
        error: () => { this.loading = false; }
      });
      return;
    }
    this.purchaseService.getOrdersPage({ ...this.listQuery(), page: this.page, size: this.pageSize }).subscribe({
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
    { key: 'mois',        label: 'Mois',       icon: 'calendar_month' },
    { key: 'fournisseur', label: 'Fournisseur', icon: 'business' },
    { key: 'statut',      label: 'Statut',      icon: 'label' },
  ];

  setGroupBy(key: string): void {
    this.groupBy = this.groupBy === key ? '' : key;
    this.page = 0;
    this.loadListPage();
  }

  toggleGroup(key: string): void { this.grouped.toggle(key); }

  isExpanded(key: string): boolean { return this.grouped.isExpanded(key); }

  getGroupItems(key: string): PurchaseOrder[] { return this.grouped.rows(key); }

  fmtMonth(ym: string): string {
    const [y, m] = ym.split('-');
    return new Date(+y, +m - 1, 1).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' });
  }

  fmtN(v: number): string {
    return new Intl.NumberFormat('fr-FR').format(v || 0);
  }
}
