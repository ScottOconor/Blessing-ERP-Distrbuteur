import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupedList, ListGroup, ListQuery, PAGE_SIZE } from '../../../../core/utils/server-list';
import { PagerComponent } from '../../../../shared/components/pager/pager.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService, StockPicking } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-livraison-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PagerComponent],
  templateUrl: './livraison-list.component.html',
  styleUrl: './livraison-list.component.scss'
})
export class LivraisonListComponent implements OnInit {
  allPickings: StockPicking[] = [];
  pickings: StockPicking[] = [];
  loading = false;
  dateFrom = '';
  dateTo = '';
  activeTab: 'expeditions' | 'receptions' = 'expeditions';
  companyId!: number;

  constructor(
    private stockService: StockService,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId();
    this.load();
  }

  load(): void {
    this.loading = true;
    this.loadListPage();
  }

  applyFilter(): void {
    this.page = 0;
    this.loadListPage();
  }

  setTab(tab: 'expeditions' | 'receptions'): void {
    this.activeTab = tab;
    this.applyFilter();
  }

  /** Compteurs des onglets, calculés par le serveur (indépendants de la page affichée). */
  outgoingCount = 0;
  incomingCount = 0;
  pendingReceptionCount = 0;

  private refreshCounts(): void {
    const base = { companyId: this.companyId, page: 0, size: 1 };
    this.stockService.getExpeditionsPage({ ...base, incoming: false }).subscribe(r => this.outgoingCount = r.totalElements);
    this.stockService.getExpeditionsPage({ ...base, incoming: true }).subscribe(r => this.incomingCount = r.totalElements);
    this.stockService.getExpeditionsPage({ ...base, incoming: true, state: 'pending_reception' })
      .subscribe(r => this.pendingReceptionCount = r.totalElements);
  }

  clearDateFilter(): void { this.dateFrom = ''; this.dateTo = ''; this.applyFilter(); }

  isIncoming(p: StockPicking): boolean { return !!p.transferReception; }

  agenceLabel(p: StockPicking): string {
    if (this.isIncoming(p)) return p.companyName || p.partnerName || '—';
    return p.remoteAgencyName || p.partnerName || '—';
  }

  stateLabel(s: string): string {
    return ({ draft: 'Brouillon', pending_reception: 'En attente de réception', done: 'Réceptionnée', cancelled: 'Annulée' } as any)[s] || s;
  }

  // ── Pagination côté serveur (filtres, totaux et regroupements calculés par le serveur) ──
  page = 0;
  readonly pageSize = PAGE_SIZE;
  totalElements = 0;
  listTotals: Record<string, number> = {};
  groupedRows: { key: string; label: string; count: number; items: StockPicking[] }[] = [];
  private readonly groupServerKeys: Record<string, string> = {};
  private readonly grouped = new GroupedList<StockPicking>((key, page) =>
    this.stockService.getExpeditionsPage({ ...this.listQuery(), groupBy: this.serverGroup(), groupKey: key, page, size: this.pageSize }));

  private listQuery(): ListQuery {
    return {
      companyId: this.companyId,
      incoming: this.activeTab === 'receptions',
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
    };
  }

  private serverGroup(): string { return this.groupServerKeys[this.groupBy] ?? this.groupBy; }

  loadListPage(): void {
    this.loading = true;
    this.refreshCounts();
    if (this.groupBy) {
      this.stockService.getExpeditionsGroups({ ...this.listQuery(), groupBy: this.serverGroup() }).subscribe({
        next: (groups: ListGroup[]) => {
          this.grouped.reset(groups);
          this.groupedRows = groups
            .map(g => ({ key: g.key, label: this.groupLabel(g), count: g.count, items: [] as StockPicking[] }))
            .sort((a, b) => a.label.localeCompare(b.label));
          this.totalElements = this.grouped.count;
          this.loading = false;
        },
        error: () => { this.loading = false; }
      });
      return;
    }
    this.stockService.getExpeditionsPage({ ...this.listQuery(), page: this.page, size: this.pageSize }).subscribe({
      next: (r: any) => {
        this.pickings = r.content;
        this.allPickings = r.content;
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
    if (this.groupBy === 'statut') return this.stateLabel(g.key);
    return g.label;
  }

  hasMoreGroupItems(key: string): boolean { return this.grouped.hasMore(key); }
  loadMoreGroupItems(key: string): void { this.grouped.loadMore(key); }

  // ── Group By ─────────────────────────────────────────────────────────────────
  groupBy = '';
  expandedGroups = new Set<string>();

  groupByOptions = [
    { key: 'mois',   label: 'Mois',   icon: 'calendar_month' },
    { key: 'agence', label: 'Agence', icon: 'business' },
    { key: 'statut', label: 'Statut', icon: 'label' }
  ];

  setGroupBy(key: string): void {
    this.groupBy = this.groupBy === key ? '' : key;
    this.page = 0;
    this.loadListPage();
  }

  toggleGroup(key: string): void { this.grouped.toggle(key); }

  isExpanded(key: string): boolean { return this.grouped.isExpanded(key); }

  getGroupItems(key: string): StockPicking[] { return this.grouped.rows(key); }

  fmtMonth(ym: string): string {
    const [y, m] = ym.split('-');
    return new Date(+y, +m - 1, 1).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' });
  }
}
