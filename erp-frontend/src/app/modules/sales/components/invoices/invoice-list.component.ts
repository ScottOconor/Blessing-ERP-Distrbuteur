import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SalesService, SalesInvoice, InvoiceGroup, InvoiceListQuery, PAYABLE_INVOICE_STATES, paymentProgressPct, invoiceTropPercu } from '../../services/sales.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { formatFCFA } from '../../../../core/utils/currency-format.util';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss'
})
export class InvoiceListComponent implements OnInit {
  /** Page affichée : filtres, tri, totaux et regroupements sont calculés par le serveur. */
  invoices: SalesInvoice[] = [];
  totalElements = 0;
  page = 0;
  readonly pageSize = 50;
  totals = { ht: 0, ttc: 0, paye: 0, du: 0 };
  loading = false;
  stateFilter = 'all';
  dateFrom = '';
  dateTo = '';
  journalFilter = 0;
  journals: { id: number; name: string }[] = [];

  stateFilters = [
    { value: 'all', label: 'Toutes' },
    { value: 'draft', label: 'Brouillon' },
    { value: 'posted', label: 'Validée' },
    { value: 'paid', label: 'Payée' },
    { value: 'partiellement_extournee', label: 'Part. Extournée' },
    { value: 'extournee', label: 'Extournée' },
    { value: 'cancelled', label: 'Annulée' }
  ];

  constructor(
    private salesService: SalesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadInvoices();
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.totalElements / this.pageSize));
  }

  /** Filtres courants envoyés au serveur. */
  private query(): InvoiceListQuery {
    return {
      companyId: this.authService.getCompanyId(),
      state: this.stateFilter,
      dateFrom: this.dateFrom || undefined,
      dateTo: this.dateTo || undefined,
      journalId: this.journalFilter || undefined
    };
  }

  loadInvoices(): void {
    const q = this.query();
    if (this.groupBy) { this.loadGroups(q); return; }

    this.loading = true;
    this.salesService.getInvoicePage(q, this.page, this.pageSize).subscribe({
      next: (r) => {
        this.invoices = r.content;
        this.totalElements = r.totalElements;
        this.totals = r.totals;
        this.journals = r.journals;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  /** Un filtre a changé : retour à la première page. */
  applyFilter(): void {
    this.page = 0;
    this.expandedGroups.clear();
    this.groupItems.clear();
    this.loadInvoices();
  }

  goToPage(page: number): void {
    if (page < 0 || page >= this.totalPages || page === this.page) return;
    this.page = page;
    this.loadInvoices();
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

  openInvoice(invoice: SalesInvoice): void {
    this.router.navigate(['/sales/invoices', invoice.id]);
  }

  getStateBadge(state: string): string {
    const map: Record<string, string> = {
      draft: 'badge-draft', posted: 'badge-posted',
      paid: 'badge-paid', cancelled: 'badge-cancelled',
      extournee: 'badge-extournee', partiellement_extournee: 'badge-partial-ext'
    };
    return 'badge ' + (map[state] || 'badge-draft');
  }

  getStateLabel(state: string): string {
    const map: Record<string, string> = {
      draft: 'Brouillon', posted: 'Validée', paid: 'Payée', cancelled: 'Annulée',
      extournee: 'Extournée', partiellement_extournee: 'Part. Extournée'
    };
    return map[state] || state;
  }

  getProgressPct(invoice: SalesInvoice): number {
    return paymentProgressPct(invoice);
  }

  getTropPercu(invoice: SalesInvoice): number {
    return invoiceTropPercu(invoice);
  }

  hasPaymentProgress(invoice: SalesInvoice): boolean {
    return PAYABLE_INVOICE_STATES.includes(invoice.state || '');
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

  groupedRows: InvoiceGroup[] = [];
  /** Factures d'un groupe déplié, chargées page par page (« Afficher plus »). */
  groupItems = new Map<string, { items: SalesInvoice[]; total: number; page: number; loading: boolean }>();

  private loadGroups(q: InvoiceListQuery): void {
    this.loading = true;
    this.salesService.getInvoiceGroups(q, this.groupBy).subscribe({
      next: (groups) => {
        this.groupedRows = groups
          .map(g => ({ ...g, label: this.groupLabel(g) }))
          .sort((a, b) => a.label.localeCompare(b.label));
        const sum = (f: (g: InvoiceGroup) => number) => groups.reduce((acc, g) => acc + (f(g) || 0), 0);
        this.totalElements = sum(g => g.count);
        this.totals = { ht: sum(g => g.totalHT), ttc: sum(g => g.totalTTC), paye: sum(g => g.paye), du: sum(g => g.du) };
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  private groupLabel(g: InvoiceGroup): string {
    if (g.key === 'none') return g.label;
    if (this.groupBy === 'mois') return this.fmtMonth(g.key);
    if (this.groupBy === 'statut') return this.getStateLabel(g.key);
    return g.label;
  }

  setGroupBy(key: string): void {
    this.groupBy = this.groupBy === key ? '' : key;
    this.applyFilter();
  }

  toggleGroup(key: string): void {
    if (this.expandedGroups.has(key)) { this.expandedGroups.delete(key); return; }
    this.expandedGroups.add(key);
    if (!this.groupItems.has(key)) this.loadGroupPage(key, 0);
  }

  loadGroupPage(key: string, page: number): void {
    const q = this.query();
    const entry = this.groupItems.get(key) ?? { items: [], total: 0, page: -1, loading: false };
    entry.loading = true;
    this.groupItems.set(key, entry);
    this.salesService.getInvoicePage({ ...q, groupBy: this.groupBy, groupKey: key }, page, this.pageSize).subscribe({
      next: (r) => {
        entry.items = page === 0 ? r.content : [...entry.items, ...r.content];
        entry.total = r.totalElements;
        entry.page = page;
        entry.loading = false;
      },
      error: () => { entry.loading = false; }
    });
  }

  isExpanded(key: string): boolean { return this.expandedGroups.has(key); }

  getGroupItems(key: string): SalesInvoice[] {
    return this.groupItems.get(key)?.items ?? [];
  }

  hasMoreGroupItems(key: string): boolean {
    const e = this.groupItems.get(key);
    return !!e && !e.loading && e.items.length < e.total;
  }

  fmtMonth(ym: string): string {
    const [y, m] = ym.split('-');
    return new Date(+y, +m - 1, 1).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' });
  }

  fmtN(v: number): string {
    return formatFCFA(v, false);
  }
}
