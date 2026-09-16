import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { SalesService, SalesOrder, SalesInvoice } from '../../services/sales.service';
import { AuthService } from '../../../../core/auth/auth.service';

interface Creance {
  name: string;
  totalDu: number;
  nbFactures: number;
  aging: 'current' | 'late' | 'critical';  // 0-30j | 30-60j | +60j
  oldestDays: number;
}

interface ClientStat {
  name: string;
  caTTC: number;
  pct: number;
  du: number;
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

  // KPIs principaux
  caTTC       = 0;
  caHT        = 0;
  encaisse    = 0;
  resteAEncaisser = 0;
  tauxEncaissement = 0;
  totalAvoirs = 0;

  // Compteurs
  nbFactures     = 0;
  nbFacturesDraft = 0;
  nbFacturesPosted = 0;
  nbFacturesPaid  = 0;
  nbBCs          = 0;
  nbBCsConfirmed = 0;
  nbAvoirs       = 0;
  nbClients      = 0;

  // Créances
  creances: Creance[] = [];
  totalCreances = 0;
  nbClientsDebiteurs = 0;

  // Top clients
  topClients: ClientStat[] = [];

  // Dernières activités
  recentInvoices: SalesInvoice[] = [];
  recentOrders:   SalesOrder[]   = [];

  // Répartition factures
  invoiceBreakdown: { label: string; count: number; amount: number; color: string; pct: number }[] = [];

  constructor(
    private salesService: SalesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void { this.loadDashboard(); }

  loadDashboard(): void {
    this.loading = true;
    const cid = this.authService.getCompanyId();
    forkJoin({
      orders:   this.salesService.getOrders(cid),
      invoices: this.salesService.getInvoices(cid),
      avoirs:   this.salesService.getAvoirs(cid),
    }).subscribe({
      next: ({ orders, invoices, avoirs }) => {
        this.computeKpis(orders, invoices, avoirs);
        this.computeCreances(invoices);
        this.computeTopClients(invoices);
        this.computeBreakdown(invoices);
        this.recentInvoices = [...invoices]
          .filter(i => i.state !== 'cancelled')
          .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
          .slice(0, 6);
        this.recentOrders = [...orders]
          .filter(o => o.state !== 'cancelled')
          .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
          .slice(0, 6);
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  private computeKpis(orders: SalesOrder[], invoices: SalesInvoice[], avoirs: SalesInvoice[]): void {
    const active = invoices.filter(i => i.state === 'posted' || i.state === 'paid');
    this.caTTC    = active.reduce((s, i) => s + (i.totalTTC || 0), 0);
    this.caHT     = active.reduce((s, i) => s + (i.totalHT  || 0), 0);
    this.encaisse = active.reduce((s, i) => s + (i.montantPaye || 0), 0);
    this.resteAEncaisser = active.reduce((s, i) => s + (i.montantDu || 0), 0);
    this.tauxEncaissement = this.caTTC > 0 ? Math.round((this.encaisse / this.caTTC) * 100) : 0;
    this.totalAvoirs = avoirs.filter(a => a.state === 'posted').reduce((s, a) => s + (a.totalTTC || 0), 0);

    this.nbFactures      = invoices.length;
    this.nbFacturesDraft = invoices.filter(i => i.state === 'draft').length;
    this.nbFacturesPosted = invoices.filter(i => i.state === 'posted').length;
    this.nbFacturesPaid   = invoices.filter(i => i.state === 'paid').length;
    this.nbBCs            = orders.length;
    this.nbBCsConfirmed   = orders.filter(o => o.state === 'confirmed').length;
    this.nbAvoirs         = avoirs.length;
    this.nbClients        = new Set(invoices.map(i => i.partnerId)).size;
  }

  private computeCreances(invoices: SalesInvoice[]): void {
    const today = new Date();
    // Groupé par partnerId (clé stable) — pas par nom, qui peut être partagé entre deux clients
    // ou avoir changé entre deux factures du même client, faussant les regroupements.
    const map = new Map<number, { name: string; du: number; nb: number; oldest: number }>();

    invoices
      .filter(i => i.state === 'posted' && (i.montantDu || 0) > 0)
      .forEach(i => {
        const days = i.date
          ? Math.floor((today.getTime() - new Date(i.date).getTime()) / 86_400_000)
          : 0;
        const cur = map.get(i.partnerId) || { name: i.partnerName || 'Inconnu', du: 0, nb: 0, oldest: 0 };
        cur.du   += i.montantDu || 0;
        cur.nb   += 1;
        cur.oldest = Math.max(cur.oldest, days);
        map.set(i.partnerId, cur);
      });

    this.creances = Array.from(map.values())
      .map(v => ({
        name: v.name,
        totalDu:   v.du,
        nbFactures: v.nb,
        oldestDays: v.oldest,
        aging: v.oldest > 60 ? 'critical' : v.oldest > 30 ? 'late' : 'current',
      } as Creance))
      .sort((a, b) => b.totalDu - a.totalDu);

    this.totalCreances     = this.creances.reduce((s, c) => s + c.totalDu, 0);
    this.nbClientsDebiteurs = this.creances.length;
  }

  private computeTopClients(invoices: SalesInvoice[]): void {
    const map = new Map<number, { name: string; caTTC: number; du: number }>();
    invoices.filter(i => i.state === 'posted' || i.state === 'paid').forEach(i => {
      const cur = map.get(i.partnerId) || { name: i.partnerName || 'Inconnu', caTTC: 0, du: 0 };
      cur.caTTC += i.totalTTC || 0;
      cur.du    += i.montantDu || 0;
      map.set(i.partnerId, cur);
    });
    const sorted = Array.from(map.values())
      .sort((a, b) => b.caTTC - a.caTTC)
      .slice(0, 5);
    const maxCA = sorted.length ? sorted[0].caTTC : 1;
    this.topClients = sorted.map(v => ({
      name: v.name, caTTC: v.caTTC, du: v.du,
      pct: Math.round((v.caTTC / maxCA) * 100),
    }));
  }

  private computeBreakdown(invoices: SalesInvoice[]): void {
    const total = invoices.length || 1;
    const cfg = [
      { key: 'draft',     label: 'Brouillon', color: '#94a3b8' },
      { key: 'posted',    label: 'Validée',   color: '#00A09D' },
      { key: 'paid',      label: 'Payée',     color: '#16a34a' },
      { key: 'cancelled', label: 'Annulée',   color: '#dc2626' },
      { key: 'extournee', label: 'Extournée', color: '#f59e0b' },
    ];
    this.invoiceBreakdown = cfg.map(c => {
      const list = invoices.filter(i => i.state === c.key);
      return {
        label: c.label, color: c.color,
        count: list.length,
        amount: list.reduce((s, i) => s + (i.totalTTC || 0), 0),
        pct: Math.round((list.length / total) * 100),
      };
    }).filter(c => c.count > 0);
  }

  // ── Helpers ──────────────────────────────────────────────────────────────
  fmtM(n: number): string {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace('.', ',') + ' M';
    if (n >= 1_000)     return (n / 1_000).toFixed(0) + ' K';
    return String(Math.round(n));
  }

  fmtFull(n: number): string {
    return new Intl.NumberFormat('fr-FR').format(Math.round(n)) + ' FCFA';
  }

  stateLabel(s: string): string {
    return ({ draft:'Brouillon', confirmed:'Confirmé', invoiced:'Facturé',
              posted:'Validée', paid:'Payée', cancelled:'Annulé/e',
              extournee:'Extournée' } as Record<string,string>)[s] || s;
  }

  stateBadge(s: string): string {
    return 'badge badge-' + s;
  }

  goInvoice(id?: number) { if (id) this.router.navigate(['/sales/invoices', id]); }
  goOrder(id?: number)   { if (id) this.router.navigate(['/sales/orders',   id]); }
  go(r: string)          { this.router.navigate([r]); }
}
