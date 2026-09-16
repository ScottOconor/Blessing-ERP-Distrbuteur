import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, StockMove } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { PdfExportService } from '../../../../core/services/pdf-export.service';

export type MoveGroupBy = 'product' | 'category' | 'type' | 'month' | 'partner';

interface MoveSummaryRow {
  key: string;
  label: string;
  subLabel?: string;
  qtyEntrees: number;
  valEntrees: number;
  qtySorties: number;
  valSorties: number;
  qtyTransferts: number;
  valTransferts: number;
  rowCount: number;
}

@Component({
  selector: 'app-movement-analysis',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movement-analysis.component.html',
  styleUrl: './movement-analysis.component.scss'
})
export class MovementAnalysisComponent implements OnInit {
  moves: StockMove[] = [];
  filtered: StockMove[] = [];
  loading = false;
  errorMsg = '';

  dateFrom = '';
  dateTo   = '';
  search   = '';
  groupBy: MoveGroupBy = 'product';
  typeFilter = '';  // '' | 'incoming' | 'outgoing' | 'internal'

  expandedGroups = new Set<string>();

  constructor(
    private stockService: StockService,
    private authService: AuthService,
    private pdfExport: PdfExportService
  ) {}

  ngOnInit(): void {
    // Default: current month
    const now = new Date();
    this.dateFrom = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-01`;
    this.dateTo   = now.toISOString().slice(0, 10);
    this.load();
  }

  load(): void {
    const cid = this.authService.getCompanyId();
    this.loading = true;
    this.errorMsg = '';
    this.stockService.getMovements(cid, {
      dateFrom: this.dateFrom || undefined,
      dateTo:   this.dateTo   || undefined,
    }).subscribe({
      next: (data) => { this.moves = data; this.applyFilter(); this.loading = false; },
      error: () => { this.errorMsg = 'Erreur de chargement'; this.loading = false; }
    });
  }

  applyFilter(): void {
    let result = [...this.moves];
    if (this.typeFilter) result = result.filter(m => (m.moveDirection || m.pickingTypeCode) === this.typeFilter);
    const q = this.search.toLowerCase().trim();
    if (q) result = result.filter(m =>
      (m.productName || '').toLowerCase().includes(q) ||
      (m.productCode || '').toLowerCase().includes(q) ||
      (m.categoryName || '').toLowerCase().includes(q) ||
      (m.partnerName || '').toLowerCase().includes(q)
    );
    this.filtered = result;
    this.expandedGroups.clear();
  }

  toggleGroup(key: string): void {
    if (this.expandedGroups.has(key)) this.expandedGroups.delete(key);
    else this.expandedGroups.add(key);
  }
  isExpanded(key: string): boolean { return this.expandedGroups.has(key); }
  expandAll():   void { this.summaryRows.forEach(r => this.expandedGroups.add(r.key)); }
  collapseAll(): void { this.expandedGroups.clear(); }

  // ── Summary aggregation ────────────────────────────────────────────────────
  get summaryRows(): MoveSummaryRow[] {
    const map = new Map<string, MoveSummaryRow & { moves: StockMove[] }>();

    for (const m of this.filtered) {
      let key: string;
      let label: string;
      let subLabel: string | undefined;

      switch (this.groupBy) {
        case 'category':
          key      = String(m.categoryId ?? '0');
          label    = m.categoryName || '(Sans catégorie)';
          subLabel = undefined;
          break;
        case 'type':
          key   = (m.moveDirection || m.pickingTypeCode) || 'unknown';
          label = this.typeLabel(m.moveDirection || m.pickingTypeCode);
          break;
        case 'month':
          if (m.dateDone) {
            const d = new Date(m.dateDone);
            key   = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
            label = d.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' });
          } else {
            key = 'nodate'; label = 'Date inconnue';
          }
          break;
        case 'partner':
          key   = m.partnerName || '(Sans tiers)';
          label = m.partnerName || '(Sans tiers)';
          break;
        default: // product
          key      = String(m.productId);
          label    = m.productName || '?';
          subLabel = m.productCode || undefined;
      }

      if (!map.has(key)) {
        map.set(key, { key, label, subLabel, qtyEntrees: 0, valEntrees: 0,
          qtySorties: 0, valSorties: 0, qtyTransferts: 0, valTransferts: 0, rowCount: 0, moves: [] });
      }
      const g = map.get(key)!;
      const qty = m.qtyDone || m.qtyDemanded || 0;
      const val = m.subtotalValue || 0;
      const dir = m.moveDirection || m.pickingTypeCode || 'internal';

      if (dir === 'incoming') {
        g.qtyEntrees += qty; g.valEntrees += val;
      } else if (dir === 'outgoing') {
        g.qtySorties += qty; g.valSorties += val;
      } else {
        g.qtyTransferts += qty; g.valTransferts += val;
      }
      g.rowCount++;
      g.moves.push(m);
    }

    // Sort
    const arr = Array.from(map.values());
    if (this.groupBy === 'month') arr.sort((a, b) => a.key.localeCompare(b.key));
    else arr.sort((a, b) => (b.valEntrees + b.valSorties) - (a.valEntrees + a.valSorties));
    return arr;
  }

  getGroupMoves(key: string): StockMove[] {
    return this.filtered.filter(m => {
      switch (this.groupBy) {
        case 'category': return String(m.categoryId ?? '0') === key;
        case 'type':     return (m.pickingTypeCode || 'unknown') === key;
        case 'month': {
          if (!m.dateDone) return key === 'nodate';
          const d = new Date(m.dateDone);
          return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}` === key;
        }
        case 'partner': return (m.partnerName || '(Sans tiers)') === key;
        default: return String(m.productId) === key;
      }
    });
  }

  // ── Totaux ─────────────────────────────────────────────────────────────────
  get grandEntrees():    number { return this.summaryRows.reduce((s, r) => s + r.valEntrees, 0); }
  get grandSorties():    number { return this.summaryRows.reduce((s, r) => s + r.valSorties, 0); }
  get grandTransferts(): number { return this.summaryRows.reduce((s, r) => s + r.valTransferts, 0); }
  get totalMoves():      number { return this.filtered.length; }

  typeLabel(code?: string): string {
    if (code === 'incoming') return 'Réceptions';
    if (code === 'outgoing') return 'Livraisons';
    if (code === 'internal') return 'Transferts internes';
    return 'Inconnu';
  }

  typeColor(code?: string): string {
    if (code === 'incoming') return 'reception';
    if (code === 'outgoing') return 'livraison';
    return 'transfert';
  }

  fmt(v: number, dec = 0): string {
    return new Intl.NumberFormat('fr-FR', { minimumFractionDigits: dec, maximumFractionDigits: dec }).format(v || 0);
  }

  fmtDate(d?: string): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('fr-FR');
  }

  exportPdf(): void {
    // TODO: implement exportMovementAnalysis in pdf service
    window.print();
  }
}
