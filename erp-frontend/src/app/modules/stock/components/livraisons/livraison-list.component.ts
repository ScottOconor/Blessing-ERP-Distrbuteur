import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService, StockPicking } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-livraison-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    this.stockService.getInterCompanyExpeditions(this.companyId).subscribe({
      next: (p) => { this.allPickings = p; this.applyFilter(); this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  applyFilter(): void {
    this.pickings = this.allPickings.filter(p => {
      const isInc = this.isIncoming(p);
      if (this.activeTab === 'expeditions' && isInc) return false;
      if (this.activeTab === 'receptions' && !isInc) return false;
      const d = p.scheduledDate?.split('T')[0] ?? '';
      if (this.dateFrom && d < this.dateFrom) return false;
      if (this.dateTo && d > this.dateTo) return false;
      return true;
    });
  }

  setTab(tab: 'expeditions' | 'receptions'): void {
    this.activeTab = tab;
    this.applyFilter();
  }

  get outgoingCount(): number { return this.allPickings.filter(p => !this.isIncoming(p)).length; }
  get incomingCount(): number { return this.allPickings.filter(p => this.isIncoming(p)).length; }
  get pendingReceptionCount(): number { return this.allPickings.filter(p => this.isIncoming(p) && p.state === 'pending_reception').length; }

  clearDateFilter(): void { this.dateFrom = ''; this.dateTo = ''; this.applyFilter(); }

  isIncoming(p: StockPicking): boolean { return !!p.transferReception; }

  agenceLabel(p: StockPicking): string {
    if (this.isIncoming(p)) return p.companyName || p.partnerName || '—';
    return p.remoteAgencyName || p.partnerName || '—';
  }

  stateLabel(s: string): string {
    return ({ draft: 'Brouillon', pending_reception: 'En attente de réception', done: 'Réceptionnée', cancelled: 'Annulée' } as any)[s] || s;
  }

  // ── Group By ─────────────────────────────────────────────────────────────────
  groupBy = '';
  expandedGroups = new Set<string>();

  groupByOptions = [
    { key: 'mois',   label: 'Mois',   icon: 'calendar_month' },
    { key: 'agence', label: 'Agence', icon: 'business' },
    { key: 'statut', label: 'Statut', icon: 'label' }
  ];

  get groupedRows(): { key: string; label: string; count: number; items: StockPicking[] }[] {
    if (!this.groupBy) return [];
    const source = this.pickings;
    const map = new Map<string, { key: string; label: string; count: number; items: StockPicking[] }>();
    for (const item of source) {
      let key: string, label: string;
      switch (this.groupBy) {
        case 'mois':
          key = (item.scheduledDate || '').substring(0, 7);
          label = key ? this.fmtMonth(key) : '(Sans date)';
          break;
        case 'agence':
          key = label = this.agenceLabel(item);
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
