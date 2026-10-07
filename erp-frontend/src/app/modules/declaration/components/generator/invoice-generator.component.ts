import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../../../core/auth/auth.service';
import { SalesInvoice } from '../../../sales/services/sales.service';
import { PrintFormat } from '../../../../shared/components/print-preview/print-preview.component';
import { DeclarationBatch, DeclarationService, InvoiceGenerationPlan } from '../../services/declaration.service';

type Step = 'form' | 'preview' | 'running' | 'done';

@Component({
  selector: 'app-invoice-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './invoice-generator.component.html',
  styleUrl: './invoice-generator.component.scss'
})
export class InvoiceGeneratorComponent implements OnDestroy {
  step: Step = 'form';

  totalAmount: number | null = null;
  dateFrom = this.isoDate(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
  dateTo = this.isoDate(new Date());
  minAmount: number | null = null;
  maxAmount: number | null = null;
  count: number | null = null;
  notes = '';

  loading = false;
  error = '';
  plan: InvoiceGenerationPlan | null = null;
  expanded = new Set<number>();
  generated: SalesInvoice[] = [];
  printFormat: PrintFormat = 'a4';
  /** Génération en cours / terminée (avancement suivi par interrogation régulière du serveur) */
  batch: DeclarationBatch | null = null;
  private polling?: Subscription;

  constructor(
    private declarationService: DeclarationService,
    private authService: AuthService,
    private router: Router
  ) {}

  /** Contrôle de cohérence affiché avant l'envoi : N × min ≤ total ≤ N × max. */
  get rangeHint(): string {
    if (!this.count || !this.minAmount || !this.maxAmount) return '';
    return `Total possible : ${this.fmt(this.count * this.minAmount)} à ${this.fmt(this.count * this.maxAmount)} FCFA`;
  }

  get rangeInvalid(): boolean {
    if (!this.count || !this.minAmount || !this.maxAmount || !this.totalAmount) return false;
    return this.minAmount > this.maxAmount
      || this.totalAmount < this.count * this.minAmount
      || this.totalAmount > this.count * this.maxAmount;
  }

  get formValid(): boolean {
    return !!this.totalAmount && this.totalAmount > 0
      && !!this.count && this.count >= 1
      && !!this.minAmount && this.minAmount > 0
      && !!this.maxAmount && this.maxAmount > 0
      && !!this.dateFrom && !!this.dateTo && this.dateFrom <= this.dateTo
      && !this.rangeInvalid;
  }

  get progressPct(): number {
    if (!this.batch?.invoiceCount) return 0;
    return Math.round(100 * (this.batch.processedCount ?? 0) / this.batch.invoiceCount);
  }

  get generatedTotal(): number {
    return this.generated.reduce((s, i) => s + (i.netAPayer ?? 0), 0);
  }

  previewPlan(): void {
    if (!this.formValid || this.loading) return;
    this.loading = true;
    this.error = '';
    this.declarationService.preview({
      companyId: this.authService.getCompanyId(),
      totalAmount: this.totalAmount!,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      minAmount: this.minAmount!,
      maxAmount: this.maxAmount!,
      count: this.count!,
      notes: this.notes.trim() || undefined
    }).subscribe({
      next: plan => {
        this.plan = plan;
        this.expanded.clear();
        this.step = 'preview';
        this.loading = false;
      },
      error: err => this.fail(err)
    });
  }

  generate(): void {
    if (!this.plan || this.loading) return;
    const n = this.plan.invoices.length;
    if (!confirm(`Créer et valider ${n} facture(s) pour ${this.fmt(this.plan.plannedTotal)} FCFA ?\n\n`
      + `Les écritures comptables et les sorties de stock seront enregistrées.`)) return;
    this.loading = true;
    this.error = '';
    this.declarationService.generate(this.plan).subscribe({
      next: batch => {
        this.batch = batch;
        this.step = 'running';
        this.loading = false;
        this.followProgress(batch.id);
      },
      error: err => this.fail(err)
    });
  }

  /** Interroge l'avancement toutes les 1,5 s ; à la fin, charge les factures créées pour l'impression. */
  private followProgress(id: number): void {
    this.polling?.unsubscribe();
    this.polling = timer(1500, 1500).pipe(
      switchMap(() => this.declarationService.getBatchStatus(id))
    ).subscribe({
      next: batch => {
        this.batch = batch;
        if (batch.status === 'RUNNING') return;
        this.polling?.unsubscribe();
        if (batch.status === 'FAILED') {
          this.error = batch.errorMessage || 'La génération a été interrompue';
        }
        this.declarationService.getBatch(id).subscribe({
          next: detail => {
            this.generated = detail.invoices ?? [];
            this.step = 'done';
          },
          error: err => this.fail(err)
        });
      },
      error: err => this.fail(err)
    });
  }

  ngOnDestroy(): void {
    this.polling?.unsubscribe();
  }

  printAll(): void {
    this.declarationService.printInvoices(this.generated, this.printFormat);
  }

  openInvoice(inv: SalesInvoice): void {
    if (inv.id) window.open(this.router.serializeUrl(this.router.createUrlTree(['/sales/invoices', inv.id])), '_blank');
  }

  goHistory(): void {
    this.router.navigate(['/declaration/historique']);
  }

  toggle(i: number): void {
    this.expanded.has(i) ? this.expanded.delete(i) : this.expanded.add(i);
  }

  backToForm(): void {
    this.step = 'form';
    this.plan = null;
    this.error = '';
  }

  restart(): void {
    this.generated = [];
    this.batch = null;
    this.backToForm();
  }

  fmt(n?: number | null): string {
    return new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(n ?? 0);
  }

  fmtDate(d?: string | null): string {
    if (!d) return '';
    const [y, m, day] = d.split('-');
    return `${day}/${m}/${y}`;
  }

  private fail(err: any): void {
    this.loading = false;
    this.error = err?.error?.message || err?.error?.error || 'Une erreur est survenue';
  }

  private isoDate(d: Date): string {
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${m}-${day}`;
  }
}
