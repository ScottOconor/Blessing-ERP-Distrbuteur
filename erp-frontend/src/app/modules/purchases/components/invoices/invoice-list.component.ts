import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseService, PurchaseInvoice } from '../../services/purchase.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-purchase-invoice-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    this.purchaseService.getInvoices(this.authService.getCompanyId()).subscribe({
      next: (data) => {
        this.invoices = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  applyFilter(): void {
    this.filteredInvoices = this.invoices.filter(i => {
      if (this.stateFilter !== 'all' && i.state !== this.stateFilter) return false;
      if (this.dateFrom && i.date < this.dateFrom) return false;
      if (this.dateTo && i.date > this.dateTo) return false;
      return true;
    });
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

  // ── Group By ─────────────────────────────────────────────────────────────────
  groupBy = '';
  expandedGroups = new Set<string>();

  groupByOptions = [
    { key: 'mois',        label: 'Mois',       icon: 'calendar_month' },
    { key: 'fournisseur', label: 'Fournisseur', icon: 'business' },
    { key: 'statut',      label: 'Statut',      icon: 'label' },
  ];

  get groupedRows(): { key: string; label: string; count: number; totalHT: number; totalTTC: number; paye: number; du: number; items: PurchaseInvoice[] }[] {
    if (!this.groupBy) return [];
    const map = new Map<string, { key: string; label: string; count: number; totalHT: number; totalTTC: number; paye: number; du: number; items: PurchaseInvoice[] }>();
    for (const item of this.filteredInvoices) {
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
      g.totalHT  += item.totalHT   || 0;
      g.totalTTC += item.totalTTC  || 0;
      g.paye     += item.montantPaye || 0;
      g.du       += item.montantDu   || 0;
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

  getGroupItems(key: string): PurchaseInvoice[] {
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
