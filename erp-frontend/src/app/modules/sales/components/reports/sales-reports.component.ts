import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { SalesService, SalesOrder, SalesInvoice } from '../../services/sales.service';
import { AuthService } from '../../../../core/auth/auth.service';

interface PeriodStat {
  label: string;
  caHT: number;
  caTTC: number;
  nbFactures: number;
  encaisse: number;
}

interface ClientStat {
  name: string;
  caTTC: number;
  nbFactures: number;
  encaisse: number;
  du: number;
}

@Component({
  selector: 'app-sales-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sales-reports.component.html',
  styleUrl: './sales-reports.component.scss'
})
export class SalesReportsComponent implements OnInit {
  loading = false;

  // Raw data
  orders: SalesOrder[] = [];
  invoices: SalesInvoice[] = [];
  avoirs: SalesInvoice[] = [];

  // Period filter
  periodMode: 'month' | 'quarter' | 'year' = 'month';
  selectedYear = new Date().getFullYear();
  years: number[] = [];

  // Computed
  periodStats: PeriodStat[] = [];
  clientStats: ClientStat[] = [];
  invoicesByState: { label: string; count: number; amount: number; color: string }[] = [];
  ordersByState: { label: string; count: number; color: string }[] = [];

  // Totals
  get totalCA(): number { return this.invoicesByState.reduce((s, r) => s + r.amount, 0); }
  get totalEncaisse(): number { return this.invoices.filter(i => i.state === 'posted' || i.state === 'paid' || i.state === 'partiellement_extournee').reduce((s, i) => s + (i.montantPaye || 0), 0); }
  get totalDu(): number { return this.invoices.filter(i => i.state === 'posted' || i.state === 'paid' || i.state === 'partiellement_extournee').reduce((s, i) => s + (i.montantDu || 0), 0); }
  get totalAvoirs(): number { return this.avoirs.filter(a => a.state === 'posted').reduce((s, a) => s + (a.totalTTC || 0), 0); }
  get tauxEncaissement(): number {
    const ca = this.invoices.filter(i => i.state === 'posted' || i.state === 'paid' || i.state === 'partiellement_extournee').reduce((s, i) => s + (i.totalTTC || 0), 0);
    if (ca === 0) return 0;
    return Math.round((this.totalEncaisse / ca) * 100);
  }

  constructor(
    private salesService: SalesService,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const cur = new Date().getFullYear();
    for (let y = cur; y >= cur - 4; y--) this.years.push(y);
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    const cid = this.authService.getCompanyId();
    forkJoin({
      orders: this.salesService.getOrders(cid),
      invoices: this.salesService.getInvoices(cid),
      avoirs: this.salesService.getAvoirs(cid)
    }).subscribe({
      next: ({ orders, invoices, avoirs }) => {
        this.orders = orders;
        this.invoices = invoices;
        this.avoirs = avoirs;
        this.loading = false;
        this.compute();
      },
      error: () => { this.loading = false; }
    });
  }

  compute(): void {
    this.computePeriodStats();
    this.computeClientStats();
    this.computeInvoicesByState();
    this.computeOrdersByState();
  }

  computePeriodStats(): void {
    const postedInvoices = this.invoices.filter(i =>
      (i.state === 'posted' || i.state === 'paid' || i.state === 'partiellement_extournee') &&
      i.date && new Date(i.date).getFullYear() === this.selectedYear
    );

    if (this.periodMode === 'month') {
      const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
      this.periodStats = months.map((label, idx) => {
        const inv = postedInvoices.filter(i => new Date(i.date).getMonth() === idx);
        return {
          label,
          caHT: inv.reduce((s, i) => s + (i.totalHT || 0), 0),
          caTTC: inv.reduce((s, i) => s + (i.totalTTC || 0), 0),
          nbFactures: inv.length,
          encaisse: inv.reduce((s, i) => s + (i.montantPaye || 0), 0)
        };
      });
    } else if (this.periodMode === 'quarter') {
      const quarters = ['T1 (Jan-Mar)', 'T2 (Avr-Jun)', 'T3 (Jul-Sep)', 'T4 (Oct-Déc)'];
      this.periodStats = quarters.map((label, idx) => {
        const inv = postedInvoices.filter(i => Math.floor(new Date(i.date).getMonth() / 3) === idx);
        return {
          label,
          caHT: inv.reduce((s, i) => s + (i.totalHT || 0), 0),
          caTTC: inv.reduce((s, i) => s + (i.totalTTC || 0), 0),
          nbFactures: inv.length,
          encaisse: inv.reduce((s, i) => s + (i.montantPaye || 0), 0)
        };
      });
    } else {
      const allYears = [...new Set(this.invoices
        .filter(i => i.state === 'posted' || i.state === 'paid' || i.state === 'partiellement_extournee')
        .map(i => i.date ? new Date(i.date).getFullYear() : 0)
        .filter(y => y > 0))].sort();
      this.periodStats = allYears.map(year => {
        const inv = this.invoices.filter(i =>
          (i.state === 'posted' || i.state === 'paid' || i.state === 'partiellement_extournee') && i.date && new Date(i.date).getFullYear() === year
        );
        return {
          label: String(year),
          caHT: inv.reduce((s, i) => s + (i.totalHT || 0), 0),
          caTTC: inv.reduce((s, i) => s + (i.totalTTC || 0), 0),
          nbFactures: inv.length,
          encaisse: inv.reduce((s, i) => s + (i.montantPaye || 0), 0)
        };
      });
    }
  }

  computeClientStats(): void {
    const map = new Map<string, ClientStat>();
    this.invoices
      .filter(i => i.state === 'posted' || i.state === 'paid' || i.state === 'partiellement_extournee')
      .forEach(i => {
        const name = i.partnerName || 'Inconnu';
        const existing = map.get(name) || { name, caTTC: 0, nbFactures: 0, encaisse: 0, du: 0 };
        existing.caTTC += i.totalTTC || 0;
        existing.nbFactures += 1;
        existing.encaisse += i.montantPaye || 0;
        existing.du += i.montantDu || 0;
        map.set(name, existing);
      });
    this.clientStats = Array.from(map.values()).sort((a, b) => b.caTTC - a.caTTC).slice(0, 10);
  }

  computeInvoicesByState(): void {
    const posted = this.invoices.filter(i => i.state === 'posted');
    const paid = this.invoices.filter(i => i.state === 'paid');
    const partExt = this.invoices.filter(i => i.state === 'partiellement_extournee');
    const draft = this.invoices.filter(i => i.state === 'draft');
    const cancelled = this.invoices.filter(i => i.state === 'cancelled');
    this.invoicesByState = [
      { label: 'Validées', count: posted.length, amount: posted.reduce((s, i) => s + (i.totalTTC || 0), 0), color: '#017E84' },
      { label: 'Payées', count: paid.length, amount: paid.reduce((s, i) => s + (i.totalTTC || 0), 0), color: '#198754' },
      { label: 'Part. Extournées', count: partExt.length, amount: partExt.reduce((s, i) => s + (i.totalTTC || 0), 0), color: '#f59e0b' },
      { label: 'Brouillon', count: draft.length, amount: draft.reduce((s, i) => s + (i.totalTTC || 0), 0), color: '#6c757d' },
      { label: 'Annulées', count: cancelled.length, amount: cancelled.reduce((s, i) => s + (i.totalTTC || 0), 0), color: '#dc3545' }
    ];
  }

  computeOrdersByState(): void {
    const states = [
      { key: 'draft', label: 'Brouillon', color: '#6c757d' },
      { key: 'confirmed', label: 'Confirmés', color: '#0d6efd' },
      { key: 'invoiced', label: 'Facturés', color: '#017E84' },
      { key: 'cancelled', label: 'Annulés', color: '#dc3545' }
    ];
    this.ordersByState = states.map(s => ({
      label: s.label,
      count: this.orders.filter(o => o.state === s.key).length,
      color: s.color
    }));
  }

  getMaxCA(): number {
    return Math.max(...this.periodStats.map(p => p.caTTC), 1);
  }

  getMaxClientCA(): number {
    return Math.max(...this.clientStats.map(c => c.caTTC), 1);
  }

  setPeriod(mode: 'month' | 'quarter' | 'year'): void {
    this.periodMode = mode;
    this.computePeriodStats();
  }

  setYear(year: number): void {
    this.selectedYear = year;
    this.computePeriodStats();
  }
}
