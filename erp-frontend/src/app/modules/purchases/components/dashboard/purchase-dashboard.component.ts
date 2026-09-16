import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PurchaseService, PurchaseOrder, PurchaseInvoice, PurchaseInvoicePayment } from '../../services/purchase.service';
import { AuthService } from '../../../../core/auth/auth.service';

interface DetteFournisseur {
  name: string;
  totalDu: number;
  nbFactures: number;
  aging: 'current' | 'late' | 'critical';
  oldestDays: number;
}

@Component({
  selector: 'app-purchase-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchase-dashboard.component.html',
  styleUrl: './purchase-dashboard.component.scss'
})
export class PurchaseDashboardComponent implements OnInit {

  loading = true;
  companyId = 1;
  companyName = '';

  orders:   PurchaseOrder[]          = [];
  invoices: PurchaseInvoice[]        = [];
  payments: PurchaseInvoicePayment[] = [];

  // Dettes fournisseurs
  dettes: DetteFournisseur[] = [];
  totalDettes = 0;

  // ── KPIs ─────────────────────────────────────────────────────────────────
  get commandesBrouillon():  number { return this.orders.filter(o => o.state === 'draft').length; }
  get commandesConfirmees(): number { return this.orders.filter(o => o.state === 'confirmed').length; }
  get commandesRecues():     number { return this.orders.filter(o => o.state === 'received').length; }

  get facturesNonPayees(): PurchaseInvoice[] {
    return this.invoices.filter(i => i.state === 'posted');
  }
  get montantDuTotal(): number {
    return this.facturesNonPayees.reduce((s, i) => s + (i.montantDu ?? 0), 0);
  }

  get totalAchatsPostedPaid(): number {
    return this.invoices
      .filter(i => i.state === 'posted' || i.state === 'paid')
      .reduce((s, i) => s + (i.totalTTC ?? 0), 0);
  }

  get paiementsMoisTotal(): number {
    const now = new Date();
    return this.payments
      .filter(p => p.date &&
        new Date(p.date).getMonth() === now.getMonth() &&
        new Date(p.date).getFullYear() === now.getFullYear()
      )
      .reduce((s, p) => s + (p.amount ?? 0), 0);
  }

  get fournisseursActifs(): number {
    return new Set(this.invoices.filter(i => i.state !== 'cancelled').map(i => i.partnerId)).size;
  }

  get tauxPaiement(): number {
    const total = this.totalAchatsPostedPaid;
    if (total === 0) return 0;
    const paye = total - this.montantDuTotal;
    return Math.round((paye / total) * 100);
  }

  get recentUnpaid(): PurchaseInvoice[] {
    return this.facturesNonPayees
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 6);
  }

  get recentOrders(): PurchaseOrder[] {
    return [...this.orders]
      .filter(o => o.state !== 'cancelled')
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  }

  get currentMonthLabel(): string {
    return new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  }

  constructor(
    private purchaseService: PurchaseService,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const cid = this.authService.getCompanyId();
    if (cid) this.companyId = cid;
    this.companyName = this.authService.getActiveCompany()?.name ?? '';

    forkJoin({
      orders:   this.purchaseService.getOrders(this.companyId),
      invoices: this.purchaseService.getInvoices(this.companyId),
      payments: this.purchaseService.getAllPayments(this.companyId),
    }).subscribe({
      next: ({ orders, invoices, payments }) => {
        this.orders   = orders;
        this.invoices = invoices;
        this.payments = payments;
        this.computeDettes(invoices);
        this.loading  = false;
      },
      error: () => { this.loading = false; }
    });
  }

  private computeDettes(invoices: PurchaseInvoice[]): void {
    const today = new Date();
    const map = new Map<string, { du: number; nb: number; oldest: number }>();

    invoices
      .filter(i => i.state === 'posted' && (i.montantDu ?? 0) > 0)
      .forEach(i => {
        const name = i.partnerName || 'Inconnu';
        const days = i.date
          ? Math.floor((today.getTime() - new Date(i.date).getTime()) / 86_400_000)
          : 0;
        const cur = map.get(name) || { du: 0, nb: 0, oldest: 0 };
        cur.du    += i.montantDu ?? 0;
        cur.nb    += 1;
        cur.oldest = Math.max(cur.oldest, days);
        map.set(name, cur);
      });

    this.dettes = Array.from(map.entries())
      .map(([name, v]) => ({
        name,
        totalDu:    v.du,
        nbFactures: v.nb,
        oldestDays: v.oldest,
        aging: v.oldest > 60 ? 'critical' : v.oldest > 30 ? 'late' : 'current',
      } as DetteFournisseur))
      .sort((a, b) => b.totalDu - a.totalDu);

    this.totalDettes = this.dettes.reduce((s, d) => s + d.totalDu, 0);
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  fmtM(n: number): string {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace('.', ',') + ' M';
    if (n >= 1_000)     return (n / 1_000).toFixed(0) + ' K';
    return String(Math.round(n));
  }

  fmtFull(n: number): string {
    return new Intl.NumberFormat('fr-FR').format(Math.round(n)) + ' FCFA';
  }

  orderStateLabel(s?: string): string {
    return ({ draft:'Brouillon', confirmed:'Confirmée', received:'Réceptionnée', cancelled:'Annulée' } as Record<string,string>)[s ?? ''] ?? s ?? '';
  }

  invoiceStateLabel(s?: string): string {
    return ({ draft:'Brouillon', posted:'Validée', paid:'Payée', cancelled:'Annulée' } as Record<string,string>)[s ?? ''] ?? s ?? '';
  }
}
