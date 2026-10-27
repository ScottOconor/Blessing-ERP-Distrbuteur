import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupedList, ListGroup, ListQuery, PAGE_SIZE } from '../../../../core/utils/server-list';
import { PagerComponent } from '../../../../shared/components/pager/pager.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService, StockPicking, Product, Warehouse, DirectReceptionRequest, DirectReceptionLineItem } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-reception-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PagerComponent],
  templateUrl: './reception-list.component.html',
  styleUrl: './reception-list.component.scss'
})
export class ReceptionListComponent implements OnInit {
  allPickings: StockPicking[] = [];
  pickings: StockPicking[] = [];
  pendingPickings: StockPicking[] = [];
  loading = false;
  loadingPending = false;
  activeTab: 'all' | 'pending' = 'pending';
  dateFrom = new Date().toISOString().split('T')[0];
  dateTo = new Date().toISOString().split('T')[0];

  // Réception directe modal
  showDirectModal = false;
  directSaving = false;
  directError = '';
  directForm: {
    supplierName: string;
    reference: string;
    date: string;
    warehouseId: number | null;
    lines: { product: Product | null; productSearch: string; qty: number; prixUnitaire: number; searchResults: Product[] }[];
  } = this.emptyDirectForm();

  allProducts: Product[] = [];
  warehouses: Warehouse[] = [];
  searchTimers: any[] = [];

  constructor(
    private stockService: StockService,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const companyId = this.authService.getCompanyId();
    this.loading = true;
    this.loadingPending = true;

    this.loadListPage();

    this.stockService.getPendingReceptions(companyId).subscribe({
      next: (p) => { this.pendingPickings = p; this.loadingPending = false; },
      error: () => { this.loadingPending = false; }
    });

    this.stockService.getProducts(companyId).subscribe({
      next: (p) => { this.allProducts = p; },
      error: () => {}
    });

    this.stockService.getWarehouses(companyId).subscribe({
      next: (w) => { this.warehouses = w.filter(x => x.active !== false); },
      error: () => {}
    });
  }

  applyFilter(): void {
    this.page = 0;
    this.loadListPage();
  }

  clearDateFilter(): void { this.dateFrom = ''; this.dateTo = ''; this.applyFilter(); }

  openBordereau(pickingId: number): void {
    this.router.navigate(['/stock/receptions/bordereau', pickingId]);
  }

  stateLabel(s: string): string {
    return { draft: 'Brouillon', confirmed: 'En attente', done: 'Validé', cancelled: 'Annulé' }[s] || s;
  }

  // ── Pagination côté serveur (filtres, totaux et regroupements calculés par le serveur) ──
  page = 0;
  readonly pageSize = PAGE_SIZE;
  totalElements = 0;
  listTotals: Record<string, number> = {};
  groupedRows: { key: string; label: string; count: number; items: StockPicking[] }[] = [];
  private readonly groupServerKeys: Record<string, string> = {};
  private readonly grouped = new GroupedList<StockPicking>((key, page) =>
    this.stockService.getReceptionsPage({ ...this.listQuery(), groupBy: this.serverGroup(), groupKey: key, page, size: this.pageSize }));

  private listQuery(): ListQuery {
    return {
      companyId: this.authService.getCompanyId(),
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
    };
  }

  private serverGroup(): string { return this.groupServerKeys[this.groupBy] ?? this.groupBy; }

  loadListPage(): void {
    this.loading = true;
    if (this.groupBy) {
      this.stockService.getReceptionsGroups({ ...this.listQuery(), groupBy: this.serverGroup() }).subscribe({
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
    this.stockService.getReceptionsPage({ ...this.listQuery(), page: this.page, size: this.pageSize }).subscribe({
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
    { key: 'mois',        label: 'Mois',        icon: 'calendar_month' },
    { key: 'fournisseur', label: 'Fournisseur',  icon: 'business' },
    { key: 'statut',      label: 'Statut',       icon: 'label' },
    { key: 'destination', label: 'Destination',  icon: 'warehouse' }
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

  // ─── Réception directe ────────────────────────────────────────────────────

  private emptyDirectForm() {
    return {
      supplierName: '',
      reference: '',
      date: new Date().toISOString().split('T')[0],
      warehouseId: null as number | null,
      lines: [{ product: null as Product | null, productSearch: '', qty: 1, prixUnitaire: 0, searchResults: [] as Product[] }]
    };
  }

  openDirectModal(): void {
    this.directForm = this.emptyDirectForm();
    this.directError = '';
    this.showDirectModal = true;
  }

  closeDirectModal(): void { this.showDirectModal = false; }

  addDirectLine(): void {
    this.directForm.lines.push({ product: null, productSearch: '', qty: 1, prixUnitaire: 0, searchResults: [] });
    this.searchTimers.push(null);
  }

  removeDirectLine(i: number): void {
    this.directForm.lines.splice(i, 1);
  }

  onDirectProductSearch(i: number): void {
    if (this.searchTimers[i]) clearTimeout(this.searchTimers[i]);
    const q = (this.directForm.lines[i]?.productSearch || '').toLowerCase().trim();
    if (!q) { this.directForm.lines[i].searchResults = []; return; }
    const matches = this.allProducts.filter(p =>
      p.name.toLowerCase().includes(q) || (p.defaultCode || '').toLowerCase().includes(q)
    ).slice(0, 10);
    this.directForm.lines[i].searchResults = matches;
  }

  selectDirectProduct(i: number, p: Product): void {
    const line = this.directForm.lines[i];
    line.product = p;
    line.productSearch = p.defaultCode ? `[${p.defaultCode}] ${p.name}` : p.name;
    line.prixUnitaire = p.standardPrice || 0;
    line.searchResults = [];
  }

  submitDirectReception(): void {
    this.directError = '';
    const lines = this.directForm.lines.filter(l => l.product && l.qty > 0);
    if (lines.length === 0) { this.directError = 'Ajoutez au moins un article avec une quantité.'; return; }

    const companyId = this.authService.getCompanyId();
    const req: DirectReceptionRequest = {
      companyId,
      warehouseId: this.directForm.warehouseId ?? undefined,
      supplierName: this.directForm.supplierName || undefined,
      reference: this.directForm.reference || undefined,
      date: this.directForm.date || undefined,
      lines: lines.map(l => ({
        productId: l.product!.id!,
        quantity: l.qty,
        prixUnitaire: l.prixUnitaire
      } as DirectReceptionLineItem))
    };

    this.directSaving = true;
    this.stockService.createDirectReception(req).subscribe({
      next: (picking) => {
        this.directSaving = false;
        this.showDirectModal = false;
        // Refresh historique
        this.loadListPage();
        this.activeTab = 'all';
      },
      error: (err) => {
        this.directSaving = false;
        this.directError = err?.error?.message || 'Erreur lors de la réception.';
      }
    });
  }
}
