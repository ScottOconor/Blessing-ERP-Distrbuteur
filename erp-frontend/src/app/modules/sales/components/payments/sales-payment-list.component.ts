import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';
import { ListQuery, PAGE_SIZE, fetchAllPages } from '../../../../core/utils/server-list';
import { PagerComponent } from '../../../../shared/components/pager/pager.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SalesService, InvoicePayment, SalesInvoice } from '../../services/sales.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { environment } from '../../../../../environments/environment';
import { newIdempotencyKey } from '../../../../core/utils/idempotency-key';

interface Journal { id: number; name: string; code: string; type: string; }
interface ClientOption { id: number; name: string; invoiceCount: number; }

@Component({
  selector: 'app-sales-payment-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PagerComponent],
  templateUrl: './sales-payment-list.component.html',
  styleUrl: './sales-payment-list.component.scss'
})
export class SalesPaymentListComponent implements OnInit {
  /** Clé d'idempotence de la saisie en cours (voir newIdempotencyKey) : conservée jusqu'au succès. */
  private paymentKey: string | null = null;
  payments: InvoicePayment[] = [];
  filtered: InvoicePayment[] = [];
  loading = false;

  dateFrom = '';
  dateTo   = '';
  searchClient = '';
  stateFilter: 'all' | 'posted' | 'reversed' = 'all';

  readonly stateFilters = [
    { value: 'all',      label: 'Tous' },
    { value: 'posted',   label: 'Validés' },
    { value: 'reversed', label: 'Annulés' },
  ] as const;

  // ── Détail modal ─────────────────────────────────────────────────────────────
  showDetailModal = false;
  selectedPayment: InvoicePayment | null = null;
  reversing    = false;
  reverseError = '';

  // ── Nouveau paiement modal ────────────────────────────────────────────────────
  showNewModal    = false;
  newPayStep: 1 | 2 | 3 = 1;
  loadingInvoices = false;
  loadingJournals = false;
  invoicesAll:  SalesInvoice[] = [];
  journals:     Journal[]      = [];
  selectedClientId: number | null = null;
  selectedInvoice:  SalesInvoice | null = null;
  payForm = { date: '', amount: 0, journalId: 0, memo: '' };
  savingPay = false;
  payError  = '';

  private companyId!: number;

  constructor(
    private salesService: SalesService,
    private auth: AuthService,
    private http: HttpClient,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.companyId = this.auth.getCompanyId();
    const today    = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    this.dateFrom  = firstDay.toISOString().slice(0, 10);
    this.dateTo    = today.toISOString().slice(0, 10);
    this.load();
  }

  // ── Pagination côté serveur : filtres, recherche et totaux calculés par le serveur ──
  page = 0;
  readonly pageSize = PAGE_SIZE;
  totalElements = 0;
  total = 0;
  activeCount = 0;
  reversedCount = 0;
  private filterTimer?: ReturnType<typeof setTimeout>;

  private listQuery(): ListQuery {
    return { companyId: this.companyId, state: this.stateFilter, dateFrom: this.dateFrom, dateTo: this.dateTo, search: this.searchClient.trim() };
  }

  load(): void {
    this.loading = true;
    this.salesService.getPaymentsPage({ ...this.listQuery(), page: this.page, size: this.pageSize }).subscribe({
      next: r => { this.payments = r.content; this.filtered = r.content; this.totalElements = r.totalElements; this.loading = false; },
      error: () => { this.loading = false; }
    });
    this.refreshStats();
  }

  /** Total et nombres de paiements validés / annulés parmi les paiements filtrés. */
  private refreshStats(): void {
    const q = { ...this.listQuery(), page: 0, size: 1 };
    if (this.stateFilter === 'reversed') { this.total = 0; this.activeCount = 0; }
    else this.salesService.getPaymentsPage({ ...q, state: 'posted' }).subscribe(r => {
      this.total = Number(r.totals?.['amount']) || 0; this.activeCount = r.totalElements; });
    if (this.stateFilter === 'posted') this.reversedCount = 0;
    else this.salesService.getPaymentsPage({ ...q, state: 'reversed' }).subscribe(r => this.reversedCount = r.totalElements);
  }

  goToPage(page: number): void {
    this.page = page;
    this.load();
  }

  setStateFilter(v: 'all' | 'posted' | 'reversed'): void { this.stateFilter = v; this.applyFilter(); }

  /** Nouveaux filtres : première page, rechargée peu après la saisie. */
  applyFilter(): void {
    clearTimeout(this.filterTimer);
    this.filterTimer = setTimeout(() => { this.page = 0; this.load(); }, 300);
  }

  clearFilter(): void {
    this.dateFrom = ''; this.dateTo = ''; this.searchClient = ''; this.stateFilter = 'all';
    this.applyFilter();
  }


  stateLabel(s?: string): string { return s === 'reversed' ? 'Annulé' : 'Validé'; }
  stateClass(s?: string): string { return s === 'reversed' ? 'badge-cancelled' : 'badge-posted'; }

  openInvoice(id?: number): void { if (id) this.router.navigate(['/sales/invoices', id]); }

  // ── Détail ────────────────────────────────────────────────────────────────────
  openDetail(p: InvoicePayment): void {
    this.selectedPayment = p;
    this.reverseError = '';
    this.reversing    = false;
    this.showDetailModal = true;
  }

  closeDetail(): void { this.showDetailModal = false; this.selectedPayment = null; }

  reverseFromDetail(): void {
    if (!this.selectedPayment?.id) return;
    if (!confirm('Confirmer l\'annulation de ce paiement ?')) return;
    this.reversing = true; this.reverseError = '';
    this.salesService.reversePayment(this.selectedPayment.id).subscribe({
      next: () => { this.reversing = false; this.closeDetail(); this.load(); },
      error: e  => { this.reversing = false; this.reverseError = e?.error?.message || 'Erreur lors de l\'annulation.'; }
    });
  }

  // ── Nouveau paiement ──────────────────────────────────────────────────────────
  openNewPayment(): void {
    this.newPayStep      = 1;
    this.selectedClientId = null;
    this.selectedInvoice  = null;
    this.payForm  = { date: new Date().toISOString().slice(0, 10), amount: 0, journalId: 0, memo: '' };
    this.payError = '';
    this.showNewModal = true;
    this.loadInvoicesAndJournals();
  }

  private loadInvoicesAndJournals(): void {
    this.loadingInvoices = true;
    from(fetchAllPages<SalesInvoice>((page, size) => this.salesService.getInvoicePage({ companyId: this.companyId, state: 'posted' }, page, size))).subscribe({
      next: inv => {
        this.invoicesAll  = inv.filter(i => i.state === 'posted' && (i.montantDu ?? 0) > 0.01);
        this.loadingInvoices = false;
      },
      error: () => { this.loadingInvoices = false; }
    });

    if (this.journals.length === 0) {
      this.loadingJournals = true;
      this.http.get<Journal[]>(`${environment.apiUrl}/api/accounting/journals`, {
        params: new HttpParams().set('companyId', this.companyId)
      }).subscribe({
        next: j  => { this.journals = j.filter(x => x.type === 'bank' || x.type === 'cash'); this.loadingJournals = false; },
        error: () => { this.loadingJournals = false; }
      });
    }
  }

  get unpaidClients(): ClientOption[] {
    const map = new Map<number, ClientOption>();
    for (const inv of this.invoicesAll) {
      if (!map.has(inv.partnerId)) {
        map.set(inv.partnerId, { id: inv.partnerId, name: inv.partnerName || '?', invoiceCount: 0 });
      }
      map.get(inv.partnerId)!.invoiceCount++;
    }
    return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
  }

  get invoicesForClient(): SalesInvoice[] {
    if (!this.selectedClientId) return [];
    return this.invoicesAll.filter(i => i.partnerId === this.selectedClientId);
  }

  selectClient(id: number): void {
    this.selectedClientId = id;
    this.selectedInvoice  = null;
    this.newPayStep = 2;
  }

  selectInvoice(inv: SalesInvoice): void {
    this.selectedInvoice = inv;
    this.payForm.amount  = inv.montantDu ?? 0;
    this.newPayStep = 3;
  }

  backToStep(n: 1 | 2): void {
    this.newPayStep = n;
    if (n === 1) { this.selectedClientId = null; this.selectedInvoice = null; }
    if (n === 2) { this.selectedInvoice = null; }
  }

  saveNewPayment(): void {
    if (!this.selectedInvoice?.id || !this.payForm.journalId || !this.payForm.date || !this.payForm.amount) {
      this.payError = 'Tous les champs sont requis.'; return;
    }
    this.savingPay = true; this.payError = '';
    this.paymentKey ??= newIdempotencyKey();
    this.salesService.createPayment({
      invoiceId: this.selectedInvoice.id,
      journalId: this.payForm.journalId,
      date:      this.payForm.date,
      amount:    this.payForm.amount,
      memo:      this.payForm.memo || undefined,
      companyId: this.companyId
    }, this.paymentKey).subscribe({
      next: () => { this.paymentKey = null; this.savingPay = false; this.showNewModal = false; this.load(); },
      error: e  => { this.savingPay = false; this.payError = e?.error?.message || 'Erreur lors de la création.'; }
    });
  }

  clientName(id: number | null): string {
    return this.unpaidClients.find(c => c.id === id)?.name ?? '';
  }

  closeNewPayment(): void { this.showNewModal = false; }
}
