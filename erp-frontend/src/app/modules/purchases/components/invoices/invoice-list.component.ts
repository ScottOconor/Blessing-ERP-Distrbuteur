import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupedList, ListGroup, ListQuery, PAGE_SIZE } from '../../../../core/utils/server-list';
import { PagerComponent } from '../../../../shared/components/pager/pager.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseService, PurchaseInvoice } from '../../services/purchase.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-purchase-invoice-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PagerComponent],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss'
})
export class PurchaseInvoiceListComponent implements OnInit {
  invoices: PurchaseInvoice[] = [];
  filteredInvoices: PurchaseInvoice[] = [];
  loading = false;
  stateFilter = 'all';
  dateFrom = '';
  dateTo = '';

  stateFilters = [
    { value: 'all',       label: 'Toutes' },
    { value: 'draft',     label: 'Brouillon' },
    { value: 'posted',    label: 'Validée' },
    { value: 'paid',      label: 'Payée' },
    { value: 'partiellement_extournee', label: 'Part. Extournée' },
    { value: 'extournee', label: 'Extournée' },
    { value: 'cancelled', label: 'Annulée' }
  ];

  constructor(
    private purchaseService: PurchaseService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadInvoices();
  }

  loadInvoices(): void {
    this.loading = true;
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

  openInvoice(invoice: PurchaseInvoice): void {
    this.router.navigate(['/purchases/invoices', invoice.id]);
  }

  getStateBadge(state: string): string {
    const map: Record<string, string> = {
      draft: 'badge-draft', posted: 'badge-posted',
      paid: 'badge-paid', cancelled: 'badge-cancelled',
      extournee: 'badge-extournee',
      partiellement_extournee: 'badge-partial-ext'
    };
    return 'badge ' + (map[state] || 'badge-draft');
  }

  getStateLabel(state: string): string {
    const map: Record<string, string> = {
      draft: 'Brouillon', posted: 'Validée', paid: 'Payée',
      cancelled: 'Annulée', extournee: 'Extournée',
      partiellement_extournee: 'Part. Extournée'
    };
    return map[state] || state;
  }

  getProgressPct(invoice: PurchaseInvoice): number {
    if (!invoice.totalTTC || invoice.totalTTC === 0) return 0;
    return Math.min(100, Math.round(((invoice.montantPaye || 0) / invoice.totalTTC) * 100));
  }

  // ── Pagination côté serveur (filtres, totaux et regroupements calculés par le serveur) ──
  page = 0;
  readonly pageSize = PAGE_SIZE;
  totalElements = 0;
  listTotals: Record<string, number> = {};
  groupedRows: { key: string; label: string; count: number; totalHT: number; totalTTC: number; paye: number; du: number; items: PurchaseInvoice[] }[] = [];
  private readonly groupServerKeys: Record<string, string> = {};
  private readonly grouped = new GroupedList<PurchaseInvoice>((key, page) =>
    this.purchaseService.getInvoicesPage({ ...this.listQuery(), groupBy: this.serverGroup(), groupKey: key, page, size: this.pageSize }));

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
      this.purchaseService.getInvoicesGroups({ ...this.listQuery(), groupBy: this.serverGroup() }).subscribe({
        next: (groups: ListGroup[]) => {
          this.grouped.reset(groups);
          this.groupedRows = groups
            .map(g => ({ key: g.key, label: this.groupLabel(g), count: g.count, totalHT: Number(g.totals?.['ht']) || 0, totalTTC: Number(g.totals?.['ttc']) || 0, paye: Number(g.totals?.['paye']) || 0, du: Number(g.totals?.['du']) || 0, items: [] as PurchaseInvoice[] }))
            .sort((a, b) => a.label.localeCompare(b.label));
          this.totalElements = this.grouped.count;
          this.loading = false;
        },
        error: () => { this.loading = false; }
      });
      return;
    }
    this.purchaseService.getInvoicesPage({ ...this.listQuery(), page: this.page, size: this.pageSize }).subscribe({
      next: (r: any) => {
        this.filteredInvoices = r.content;
        this.invoices = r.content;
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

  getGroupItems(key: string): PurchaseInvoice[] { return this.grouped.rows(key); }

  fmtMonth(ym: string): string {
    const [y, m] = ym.split('-');
    return new Date(+y, +m - 1, 1).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' });
  }

  fmtN(v: number): string {
    return new Intl.NumberFormat('fr-FR').format(v || 0);
  }
}
