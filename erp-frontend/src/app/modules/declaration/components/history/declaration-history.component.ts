import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AuthService } from '../../../../core/auth/auth.service';
import { SalesInvoice } from '../../../sales/services/sales.service';
import { PrintFormat } from '../../../../shared/components/print-preview/print-preview.component';
import { DeclarationBatch, DeclarationService } from '../../services/declaration.service';

/** Générations regroupées par jour de génération. */
interface HistoryDay {
  day: string;
  batches: DeclarationBatch[];
  invoiceCount: number;
  total: number;
}

@Component({
  selector: 'app-declaration-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './declaration-history.component.html',
  styleUrls: ['../generator/invoice-generator.component.scss', './declaration-history.component.scss']
})
export class DeclarationHistoryComponent implements OnInit {
  days: HistoryDay[] = [];
  loading = false;
  error = '';

  selectedDay: HistoryDay | null = null;
  invoices: SalesInvoice[] = [];
  loadingDetail = false;
  printFormat: PrintFormat = 'a4';

  constructor(
    private declarationService: DeclarationService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = '';
    this.selectedDay = null;
    this.invoices = [];
    this.declarationService.getBatches(this.authService.getCompanyId()).subscribe({
      next: batches => { this.days = this.groupByDay(batches); this.loading = false; },
      error: err => this.fail(err)
    });
  }

  openDay(day: HistoryDay): void {
    if (this.selectedDay?.day === day.day) { this.selectedDay = null; return; }
    this.selectedDay = day;
    this.invoices = [];
    this.loadingDetail = true;
    this.error = '';
    forkJoin(day.batches.map(b => this.declarationService.getBatch(b.id))).subscribe({
      next: details => {
        if (this.selectedDay?.day !== day.day) return;
        this.invoices = details.flatMap(d => d.invoices ?? [])
          .sort((a, b) => (a.name ?? '').localeCompare(b.name ?? ''));
        this.loadingDetail = false;
      },
      error: err => { this.loadingDetail = false; this.fail(err); }
    });
  }

  get totalAmount(): number {
    return this.days.reduce((s, d) => s + d.total, 0);
  }

  get totalInvoices(): number {
    return this.days.reduce((s, d) => s + d.invoiceCount, 0);
  }

  /** Factures encore valides (hors annulées / extournées) — ce sont celles qu'on réimprime. */
  get printableInvoices(): SalesInvoice[] {
    return this.invoices.filter(i => !this.isVoid(i.state));
  }

  isVoid(state?: string): boolean {
    return state === 'cancelled' || state === 'reversed';
  }

  printAll(): void {
    this.declarationService.printInvoices(this.printableInvoices, this.printFormat);
  }

  printOne(inv: SalesInvoice): void {
    this.declarationService.printInvoices([inv], this.printFormat);
  }

  openInvoice(inv: SalesInvoice): void {
    if (inv.id) window.open(this.router.serializeUrl(this.router.createUrlTree(['/sales/invoices', inv.id])), '_blank');
  }

  newGeneration(): void {
    this.router.navigate(['/declaration/factures']);
  }

  stateLabel(state?: string): string {
    switch (state) {
      case 'posted': return 'Validée';
      case 'paid': return 'Payée';
      case 'partial': return 'Partiellement payée';
      case 'cancelled': return 'Annulée';
      case 'reversed': return 'Extournée';
      case 'draft': return 'Brouillon';
      default: return state ?? '';
    }
  }

  fmt(n?: number | null): string {
    return new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(n ?? 0);
  }

  fmtDate(d?: string | null): string {
    if (!d) return '';
    const [y, m, day] = d.substring(0, 10).split('-');
    return `${day}/${m}/${y}`;
  }

  fmtTime(d?: string | null): string {
    return d ? d.substring(11, 16) : '';
  }

  fmtDayLong(day: string): string {
    const [y, m, d] = day.split('-').map(Number);
    const label = new Date(y, m - 1, d).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    return label.charAt(0).toUpperCase() + label.slice(1);
  }

  private groupByDay(batches: DeclarationBatch[]): HistoryDay[] {
    const map = new Map<string, HistoryDay>();
    for (const b of batches) {
      const day = (b.createdAt ?? '').substring(0, 10);
      let entry = map.get(day);
      if (!entry) { entry = { day, batches: [], invoiceCount: 0, total: 0 }; map.set(day, entry); }
      entry.batches.push(b);
      entry.invoiceCount += b.processedCount ?? b.invoiceCount ?? 0;
      entry.total += b.generatedTotal ?? 0;
    }
    return [...map.values()].sort((a, b) => b.day.localeCompare(a.day));
  }

  private fail(err: any): void {
    this.loading = false;
    this.error = err?.error?.message || err?.error?.error || 'Une erreur est survenue';
  }
}
