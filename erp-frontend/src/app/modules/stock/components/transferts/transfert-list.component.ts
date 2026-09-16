import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService, StockPicking } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-transfert-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    forkJoin({
      transferts: this.stockService.getTransferts(this.companyId),
      receptions: this.stockService.getTransferReceptions(this.companyId, this.showAllReceptions)
    }).subscribe({
      next: ({ transferts, receptions }) => {
        this.allTransferts = transferts;
        this.allReceptions = receptions;
        this.applyTransfertFilter();
        this.applyReceptionFilter();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  applyTransfertFilter(): void {
    this.transferts = this.allTransferts.filter(p => {
      const d = p.scheduledDate?.split('T')[0] ?? '';
      if (this.dateFrom && d < this.dateFrom) return false;
      if (this.dateTo && d > this.dateTo) return false;
      return true;
    });
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

  // ── Group By ─────────────────────────────────────────────────────────────────
  groupBy = '';
  expandedGroups = new Set<string>();

  groupByOptions = [
    { key: 'mois',        label: 'Mois',          icon: 'calendar_month' },
    { key: 'source',      label: 'Entrepôt src',   icon: 'warehouse' },
    { key: 'destination', label: 'Destination',    icon: 'place' },
    { key: 'statut',      label: 'Statut',         icon: 'label' }
  ];

  get groupedRows(): { key: string; label: string; count: number; items: StockPicking[] }[] {
    if (!this.groupBy) return [];
    const source = this.transferts;
    const map = new Map<string, { key: string; label: string; count: number; items: StockPicking[] }>();
    for (const item of source) {
      let key: string, label: string;
      switch (this.groupBy) {
        case 'mois':
          key = (item.scheduledDate || '').substring(0, 7);
          label = key ? this.fmtMonth(key) : '(Sans date)';
          break;
        case 'source':
          key = label = item.sourceWarehouseName || item.locationName || '(Sans source)';
          break;
        case 'destination':
          key = label = item.destWarehouseName || item.locationDestName || '(Sans destination)';
          break;
        case 'statut':
          key = item.state || '?';
          label = this.stateLabel(key);
          break;
        default: key = label = '?';
      }
      if (!map.has(key)) map.set(key, { key, label, count: 0, items: [] });
      const g = map.get(key)!;
      g.count++;
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

  getGroupItems(key: string): StockPicking[] {
    return this.groupedRows.find(g => g.key === key)?.items ?? [];
  }

  fmtMonth(ym: string): string {
    const [y, m] = ym.split('-');
    return new Date(+y, +m - 1, 1).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' });
  }
}
