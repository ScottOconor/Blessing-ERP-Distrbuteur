import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';
import { SyncService, SyncSummary, SyncEvent, SyncModule, SyncStatus, PageResponse, HubTestResult, SyncProgress } from '../../services/sync.service';

type Tab = { id: SyncModule | 'TOUS'; label: string; icon: string; };

@Component({
  selector: 'app-sync-dashboard',
  standalone: true,
  imports: [CommonModule, JsonPipe],
  templateUrl: './sync-dashboard.component.html',
  styleUrl: './sync-dashboard.component.scss'
})
export class SyncDashboardComponent implements OnInit, OnDestroy {
  loading = false;
  dispatching = false;
  retrying = false;
  snapshotting = false;
  clearingFailed = false;
  testingHub = false;
  hubTest: HubTestResult | null = null;

  summary: SyncSummary | null = null;
  progress: SyncProgress | null = null;
  events: SyncEvent[] = [];
  totalEvents = 0;
  currentPage = 0;
  pageSize = 30;

  activeTab: SyncModule | 'TOUS' = 'TOUS';
  activeStatus: SyncStatus | '' = '';

  retryingId: number | null = null;

  // Panneau de détail
  detailEvent: SyncEvent | null = null;
  detailLoading = false;
  detailPayload: any = null;

  private autoRefresh$?: Subscription;

  tabs: (Tab & { id: SyncModule | 'TOUS' })[] = [
    { id: 'TOUS',         label: 'Tout',         icon: 'all_inbox' },
    { id: 'VENTES',       label: 'Ventes',       icon: 'point_of_sale' },
    { id: 'ACHATS',       label: 'Achats',       icon: 'shopping_cart' },
    { id: 'COMPTABILITE', label: 'Comptabilité', icon: 'account_balance' },
    { id: 'STOCK',        label: 'Stock',        icon: 'inventory_2' },
    { id: 'CAISSES',      label: 'Caisses',      icon: 'savings' },
    { id: 'REFERENTIELS', label: 'Référentiels', icon: 'sync_alt' },
  ];

  statusFilters = [
    { value: '' as const,         label: 'Tous',        cls: '' },
    { value: 'PENDING' as const,  label: 'En attente',  cls: 'pending' },
    { value: 'SENT' as const,     label: 'Envoyés',     cls: 'sent' },
    { value: 'FAILED' as const,   label: 'Échoués',     cls: 'failed' },
  ];

  constructor(private syncService: SyncService) {}

  ngOnInit(): void {
    this.loadAll();
    this.loadProgress();
    // Rafraîchissement auto toutes les 30s
    this.autoRefresh$ = interval(30_000).pipe(
      startWith(0),
      switchMap(() => this.syncService.getSummary())
    ).subscribe(s => {
      this.summary = s;
      this.loadProgress();
    });
  }

  ngOnDestroy(): void { this.autoRefresh$?.unsubscribe(); }

  loadAll(): void {
    this.loading = true;
    this.syncService.getSummary().subscribe({
      next: s => { this.summary = s; this.loadEvents(); },
      error: () => { this.loading = false; }
    });
  }

  loadProgress(): void {
    this.syncService.getProgress().subscribe({
      next: p => this.progress = p,
      error: () => {}
    });
  }

  loadEvents(page = 0): void {
    this.currentPage = page;
    const st = this.activeStatus || undefined;
    const mod = this.activeTab === 'TOUS' ? undefined : this.activeTab as SyncModule;
    this.syncService.getEvents(mod, st as SyncStatus | undefined, page, this.pageSize).subscribe({
      next: (res: PageResponse<SyncEvent>) => {
        this.events = res.content;
        this.totalEvents = res.totalElements;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  selectTab(tab: SyncModule | 'TOUS'): void {
    this.activeTab = tab;
    this.activeStatus = '';
    this.loadEvents(0);
  }

  selectStatus(s: SyncStatus | ''): void {
    this.activeStatus = s;
    this.loadEvents(0);
  }

  testHub(): void {
    this.testingHub = true;
    this.syncService.testHub().subscribe({
      next: (res) => { this.hubTest = res; this.testingHub = false; },
      error: () => { this.testingHub = false; }
    });
  }

  forceSnapshot(): void {
    this.snapshotting = true;
    this.syncService.forceSnapshot().subscribe({
      next: () => { this.snapshotting = false; setTimeout(() => this.loadAll(), 800); },
      error: () => { this.snapshotting = false; }
    });
  }

  forceDispatch(): void {
    this.dispatching = true;
    this.syncService.forceDispatch().subscribe({
      next: () => { this.dispatching = false; setTimeout(() => this.loadAll(), 500); },
      error: () => { this.dispatching = false; }
    });
  }

  retryAll(): void {
    this.retrying = true;
    this.syncService.retryAll().subscribe({
      next: () => { this.retrying = false; this.loadAll(); },
      error: () => { this.retrying = false; }
    });
  }

  /** Suppression définitive — contrairement à retryAll(), ces opérations ne remonteront plus
   *  jamais au Hub. Confirmée explicitement car irréversible. */
  clearFailed(): void {
    const count = this.summary?.failed ?? 0;
    if (count === 0) return;
    const ok = window.confirm(
      `Supprimer définitivement les ${count} événement(s) en échec ?\n\n` +
      `Ces opérations ne seront jamais renvoyées au Hub. À utiliser uniquement après avoir ` +
      `résolu la cause des échecs et accepté de perdre ces données côté Hub.`
    );
    if (!ok) return;
    this.clearingFailed = true;
    this.syncService.clearFailed().subscribe({
      next: () => { this.clearingFailed = false; this.loadAll(); },
      error: () => { this.clearingFailed = false; }
    });
  }

  retryOne(event: SyncEvent, $event: Event): void {
    $event.stopPropagation();
    this.retryingId = event.id;
    this.syncService.retryOne(event.id).subscribe({
      next: () => { this.retryingId = null; this.loadEvents(this.currentPage); },
      error: () => { this.retryingId = null; }
    });
  }

  openDetail(event: SyncEvent): void {
    this.detailLoading = true;
    this.detailEvent = event;
    this.detailPayload = null;
    this.syncService.getEvent(event.id).subscribe({
      next: full => {
        this.detailEvent = full;
        try {
          this.detailPayload = full.payload ? JSON.parse(full.payload) : null;
        } catch {
          this.detailPayload = full.payload;
        }
        this.detailLoading = false;
      },
      error: () => { this.detailLoading = false; }
    });
  }

  closeDetail(): void {
    this.detailEvent = null;
    this.detailPayload = null;
  }

  formatPayload(): string {
    if (!this.detailPayload) return '';
    return JSON.stringify(this.detailPayload, null, 2);
  }

  payloadKeys(): string[] {
    if (!this.detailPayload || typeof this.detailPayload !== 'object') return [];
    return Object.keys(this.detailPayload);
  }

  payloadValue(key: string): any {
    return this.detailPayload?.[key];
  }

  isObject(v: any): boolean { return v !== null && typeof v === 'object'; }
  isArray(v: any): boolean  { return Array.isArray(v); }

  prevPage(): void { if (this.currentPage > 0) this.loadEvents(this.currentPage - 1); }
  nextPage(): void { if ((this.currentPage + 1) * this.pageSize < this.totalEvents) this.loadEvents(this.currentPage + 1); }

  get totalPages(): number { return Math.ceil(this.totalEvents / this.pageSize); }

  moduleStats(mod: SyncModule | 'TOUS') {
    if (mod === 'TOUS') {
      return {
        pending: this.summary?.pending ?? 0,
        sent:    this.summary?.sent    ?? 0,
        failed:  this.summary?.failed  ?? 0,
      };
    }
    return this.summary?.byModule?.[mod] ?? { pending: 0, sent: 0, failed: 0 };
  }

  statusClass(s: string): string {
    return ({ PENDING: 'badge-pending', SENT: 'badge-sent', FAILED: 'badge-failed' } as Record<string, string>)[s] ?? '';
  }

  statusLabel(s: string): string {
    return ({ PENDING: 'En attente', SENT: 'Envoyé', FAILED: 'Échoué' } as Record<string, string>)[s] ?? s;
  }

  fmtDate(d: string | null): string {
    if (!d) return '—';
    return new Date(d).toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }
}
