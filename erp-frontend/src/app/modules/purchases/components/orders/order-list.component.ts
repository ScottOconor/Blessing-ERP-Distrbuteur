import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseService, PurchaseOrder } from '../../services/purchase.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-purchase-order-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    const cid = this.authService.getCompanyId() ?? 1;
    this.purchaseService.getOrders(cid).subscribe({
      next: data => { this.orders = data; this.applyFilter(); this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  applyFilter(): void {
    this.filteredOrders = this.orders.filter(o => {
      if (this.stateFilter !== 'all' && o.state !== this.stateFilter) return false;
      if (this.dateFrom && o.date < this.dateFrom) return false;
      if (this.dateTo && o.date > this.dateTo) return false;
      return true;
    });
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

  // ── Group By ─────────────────────────────────────────────────────────────────
  groupBy = '';
  expandedGroups = new Set<string>();

  groupByOptions = [
    { key: 'mois',        label: 'Mois',       icon: 'calendar_month' },
    { key: 'fournisseur', label: 'Fournisseur', icon: 'business' },
    { key: 'statut',      label: 'Statut',      icon: 'label' },
  ];

  get groupedRows(): { key: string; label: string; count: number; totalHT: number; totalTTC: number; paye: number; du: number; items: PurchaseOrder[] }[] {
    if (!this.groupBy) return [];
    const map = new Map<string, { key: string; label: string; count: number; totalHT: number; totalTTC: number; paye: number; du: number; items: PurchaseOrder[] }>();
    for (const item of this.filteredOrders) {
      let key: string, label: string;
      switch (this.groupBy) {
        case 'mois':
          key = (item.date || '').substring(0, 7);
          label = key ? this.fmtMonth(key) : '(Sans date)';
          break;
        case 'fournisseur':
          key = label = item.partnerName || '(Sans fournisseur)';
          break;
        case 'statut':
          key = item.state || '?';
          label = this.getStateLabel(item.state || '');
          break;
        default: key = label = '?';
      }
      if (!map.has(key)) map.set(key, { key, label, count: 0, totalHT: 0, totalTTC: 0, paye: 0, du: 0, items: [] });
      const g = map.get(key)!;
      g.count++;
      g.totalHT  += item.totalHT  || 0;
      g.totalTTC += item.totalTTC || 0;
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

  getGroupItems(key: string): PurchaseOrder[] {
    return this.groupedRows.find(g => g.key === key)?.items ?? [];
  }

  fmtMonth(ym: string): string {
    const [y, m] = ym.split('-');
    return new Date(+y, +m - 1, 1).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' });
  }

  fmtN(v: number): string {
    return new Intl.NumberFormat('fr-FR').format(v || 0);
  }
}
