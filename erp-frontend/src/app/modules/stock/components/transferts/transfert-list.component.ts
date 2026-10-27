import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupedList, ListGroup, ListQuery, PAGE_SIZE } from '../../../../core/utils/server-list';
import { PagerComponent } from '../../../../shared/components/pager/pager.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService, StockPicking } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-transfert-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PagerComponent],
  templateUrl: './transfert-list.component.html',
  styleUrl: './transfert-list.component.scss'
})
export class TransfertListComponent implements OnInit {
  activeTab: 'transferts' | 'receptions' = 'transferts';

  // Transferts inter-dépôts
  allTransferts: StockPicking[] = [];
  transferts: StockPicking[] = [];
  dateFrom = new Date().toISOString().split('T')[0];
  dateTo = new Date().toISOString().split('T')[0];

  // Réceptions de transferts
  allReceptions: StockPicking[] = [];
  receptions: StockPicking[] = [];
  showAllReceptions = false;

  loading = false;
  private companyId!: number;

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
    this.stockService.getTransferReceptions(this.companyId, this.showAllReceptions).subscribe({
      next: (receptions) => {
        this.allReceptions = receptions;
        this.applyReceptionFilter();
      },
      error: () => {}
    });
    this.page = 0;
    this.loadListPage();
  }

  applyTransfertFilter(): void {
    this.page = 0;
    this.loadListPage();
  }

  applyReceptionFilter(): void {
    this.receptions = this.showAllReceptions
      ? this.allReceptions
      : this.allReceptions.filter(p => p.state !== 'done' && p.state !== 'cancelled');
  }

  clearDateFilter(): void { this.dateFrom = ''; this.dateTo = ''; this.applyTransfertFilter(); }

  toggleAllReceptions(): void {
    this.showAllReceptions = !this.showAllReceptions;
    this.stockService.getTransferReceptions(this.companyId, this.showAllReceptions).subscribe(r => {
      this.allReceptions = r;
      this.applyReceptionFilter();
    });
  }

  get pendingReceptionCount(): number {
    return this.allReceptions.filter(p => p.state === 'pending_reception').length;
  }

  stateLabel(s: string): string {
    return ({
      draft: 'Brouillon', confirmed: 'Confirmé', done: 'Effectué',
      cancelled: 'Annulé', pending_reception: 'En attente'
    } as Record<string, string>)[s] || s;
  }

  /** Référence affichée : pour un transfert inter-dépôts, combine la sortie et l'entrée
   *  (ex: "MP/OUT/00001 → DA/IN/00001") pour montrer en un coup d'œil que c'est une seule
   *  opération avec ses deux volets techniques ; sinon, juste le nom du picking. */
  transferRef(p: StockPicking): string {
    return p.linkedPickingName ? `${p.name} → ${p.linkedPickingName}` : (p.name || '—');
  }

  // ── Pagination côté serveur (filtres, totaux et regroupements calculés par le serveur) ──
  page = 0;
  readonly pageSize = PAGE_SIZE;
  totalElements = 0;
  listTotals: Record<string, number> = {};
  groupedRows: { key: string; label: string; count: number; items: StockPicking[] }[] = [];
  private readonly groupServerKeys: Record<string, string> = {'destination': 'destination_entrepot'};
  private readonly grouped = new GroupedList<StockPicking>((key, page) =>
    this.stockService.getTransfertsPage({ ...this.listQuery(), groupBy: this.serverGroup(), groupKey: key, page, size: this.pageSize }));

  private listQuery(): ListQuery {
    return {
      companyId: this.companyId,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
    };
  }

  private serverGroup(): string { return this.groupServerKeys[this.groupBy] ?? this.groupBy; }

  loadListPage(): void {
    this.loading = true;
    if (this.groupBy) {
      this.stockService.getTransfertsGroups({ ...this.listQuery(), groupBy: this.serverGroup() }).subscribe({
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
    this.stockService.getTransfertsPage({ ...this.listQuery(), page: this.page, size: this.pageSize }).subscribe({
      next: (r: any) => {
        this.transferts = r.content;
        this.allTransferts = r.content;
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
    { key: 'mois',        label: 'Mois',          icon: 'calendar_month' },
    { key: 'source',      label: 'Entrepôt src',   icon: 'warehouse' },
    { key: 'destination', label: 'Destination',    icon: 'place' },
    { key: 'statut',      label: 'Statut',         icon: 'label' }
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
