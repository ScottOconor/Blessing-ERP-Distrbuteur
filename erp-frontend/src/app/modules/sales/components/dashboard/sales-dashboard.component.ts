import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { SalesService, SalesOrder, SalesInvoice } from '../../services/sales.service';
import { AuthService } from '../../../../core/auth/auth.service';

interface KpiCard {
  label: string;
  value: string | number;
  sub?: string;
  icon: string;
  color: string;
  route?: string;
}

@Component({
  selector: 'app-sales-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-dashboard.component.html',
  styleUrl: './sales-dashboard.component.scss'
})
export class SalesDashboardComponent implements OnInit {
  loading = false;

  // KPIs
  kpis: KpiCard[] = [];

  // Derniers bons & factures
  recentOrders: SalesOrder[] = [];
  recentInvoices: SalesInvoice[] = [];

  // Résumé par statut
  orderStats: { label: string; count: number; color: string }[] = [];
  invoiceStats: { label: string; count: number; amount: number; color: string }[] = [];

  constructor(
    private salesService: SalesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard(): void {
    this.loading = true;
    const companyId = this.authService.getCompanyId();

    forkJoin({
      orders: this.salesService.getOrders(companyId),
      invoices: this.salesService.getInvoices(companyId),
      avoirs: this.salesService.getAvoirs(companyId)
    }).subscribe({
      next: ({ orders, invoices, avoirs }) => {
        this.buildKpis(orders, invoices, avoirs);
        this.buildOrderStats(orders);
        this.buildInvoiceStats(invoices);
        this.recentOrders = orders.slice(0, 5);
        this.recentInvoices = invoices.slice(0, 5);
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  private buildKpis(orders: SalesOrder[], invoices: SalesInvoice[], avoirs: SalesInvoice[]): void {
    const totalCA = invoices
      .filter(i => i.state === 'posted' || i.state === 'paid')
      .reduce((s, i) => s + (i.totalTTC || 0), 0);

    const totalEncaisse = invoices
      .reduce((s, i) => s + (i.montantPaye || 0), 0);

    const totalDu = invoices
      .filter(i => i.state === 'posted')
      .reduce((s, i) => s + (i.montantDu || 0), 0);

    const totalAvoirs = avoirs
      .filter(a => a.state === 'posted')
      .reduce((s, a) => s + (a.totalTTC || 0), 0);

    this.kpis = [
      {
        label: 'Chiffre d\'affaires',
        value: this.formatAmount(totalCA),
        sub: 'Factures validées + payées',
        icon: 'trending_up',
        color: '#017E84'
      },
      {
        label: 'Encaissé',
        value: this.formatAmount(totalEncaisse),
        sub: 'Total paiements reçus',
        icon: 'payments',
        color: '#198754'
      },
      {
        label: 'Reste à encaisser',
        value: this.formatAmount(totalDu),
        sub: 'Factures validées non soldées',
        icon: 'schedule',
        color: totalDu > 0 ? '#dc3545' : '#6c757d'
      },
      {
        label: 'Bons de commande',
        value: orders.length,
        sub: `${orders.filter(o => o.state === 'draft').length} en brouillon`,
        icon: 'receipt',
        color: '#0d6efd',
        route: '/sales/orders'
      },
      {
        label: 'Factures',
        value: invoices.length,
        sub: `${invoices.filter(i => i.state === 'posted').length} à encaisser`,
        icon: 'description',
        color: '#fd7e14',
        route: '/sales/invoices'
      },
      {
        label: 'Avoirs',
        value: avoirs.length,
        sub: this.formatAmount(totalAvoirs) + ' émis',
        icon: 'undo',
        color: '#6f42c1',
        route: '/sales/avoirs'
      }
    ];
  }

  private buildOrderStats(orders: SalesOrder[]): void {
    const count = (state: string) => orders.filter(o => o.state === state).length;
    this.orderStats = [
      { label: 'Brouillon',  count: count('draft'),     color: '#6c757d' },
      { label: 'Confirmé',   count: count('confirmed'), color: '#0d6efd' },
      { label: 'Facturé',    count: count('invoiced'),  color: '#017E84' },
      { label: 'Annulé',     count: count('cancelled'), color: '#dc3545' }
    ];
  }

  private buildInvoiceStats(invoices: SalesInvoice[]): void {
    const sumTTC = (state: string) =>
      invoices.filter(i => i.state === state).reduce((s, i) => s + (i.totalTTC || 0), 0);
    this.invoiceStats = [
      { label: 'Brouillon', count: invoices.filter(i => i.state === 'draft').length,     amount: sumTTC('draft'),     color: '#6c757d' },
      { label: 'Validée',   count: invoices.filter(i => i.state === 'posted').length,    amount: sumTTC('posted'),    color: '#017E84' },
      { label: 'Payée',     count: invoices.filter(i => i.state === 'paid').length,      amount: sumTTC('paid'),      color: '#198754' },
      { label: 'Annulée',   count: invoices.filter(i => i.state === 'cancelled').length, amount: sumTTC('cancelled'), color: '#dc3545' }
    ];
  }

  formatAmount(n: number): string {
    return new Intl.NumberFormat('fr-FR').format(Math.round(n)) + ' FCFA';
  }

  getStateBadge(state: string, type: 'order' | 'invoice' = 'invoice'): string {
    const map: Record<string, string> = {
      draft: 'badge-draft', confirmed: 'badge-confirmed', invoiced: 'badge-invoiced',
      posted: 'badge-posted', paid: 'badge-paid', cancelled: 'badge-cancelled'
    };
    return 'badge ' + (map[state] || 'badge-draft');
  }

  getStateLabel(state: string): string {
    const map: Record<string, string> = {
      draft: 'Brouillon', confirmed: 'Confirmé', invoiced: 'Facturé',
      posted: 'Validée', paid: 'Payée', cancelled: 'Annulé/e'
    };
    return map[state] || state;
  }

  navigateTo(route?: string): void {
    if (route) this.router.navigate([route]);
  }

  goToOrder(id?: number): void   { if (id) this.router.navigate(['/sales/orders', id]); }
  goToInvoice(id?: number): void { if (id) this.router.navigate(['/sales/invoices', id]); }
}
