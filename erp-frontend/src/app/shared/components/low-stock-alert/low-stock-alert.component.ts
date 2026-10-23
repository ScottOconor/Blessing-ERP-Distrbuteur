import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription, filter } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../core/auth/auth.service';

export const LOW_STOCK_THRESHOLD = 5;
const REFRESH_MS = 5 * 60 * 1000;     // rafraîchissement périodique
const MIN_GAP_MS = 30 * 1000;         // au plus une requête par 30 s lors des navigations

interface LowStockItem { productId: number; code: string | null; name: string; quantity: number; }

/** Alerte flottante, visible sur tous les écrans : articles dont le stock est inférieur à 5. */
@Component({
  selector: 'app-low-stock-alert',
  standalone: true,
  imports: [FormsModule],
  template: `
    @if (items.length && authService.isLoggedIn()) {
      @if (!expanded) {
        <button class="lsa-pill" (click)="expanded = true" title="Voir les articles en stock bas">
          <span class="material-icons">warning</span>
          {{ items.length }} article{{ items.length > 1 ? 's' : '' }} en stock bas
        </button>
      } @else {
        <div class="lsa-panel">
          <div class="lsa-head">
            <span class="material-icons">warning</span>
            <strong>Stock inférieur à {{ threshold }}</strong>
            <span class="lsa-count">{{ items.length }}</span>
            <button class="lsa-close" (click)="expanded = false" title="Réduire">
              <span class="material-icons">close</span>
            </button>
          </div>
          <input class="lsa-search" type="text" placeholder="Rechercher un article…" [(ngModel)]="search" data-native>
          <div class="lsa-list">
            @for (it of filtered; track it.productId) {
              <div class="lsa-row">
                <span class="lsa-name">{{ it.name }}@if (it.code) {<small> — {{ it.code }}</small>}</span>
                <span class="lsa-qty" [class.lsa-zero]="it.quantity <= 0">{{ it.quantity }}</span>
              </div>
            } @empty {
              <div class="lsa-empty">Aucun article</div>
            }
          </div>
        </div>
      }
    }
  `,
  styles: [`
    :host { position: fixed; right: 18px; bottom: 18px; z-index: 9000; }
    .lsa-pill {
      display: flex; align-items: center; gap: 6px; cursor: pointer;
      background: var(--warning, #D97706); color: #fff; border: none; border-radius: 999px;
      padding: 8px 16px; font-weight: 600; font-size: .85rem; box-shadow: var(--shadow-lg);
      animation: lsa-pulse 2s ease-in-out 3;
      .material-icons { font-size: 18px; }
    }
    @keyframes lsa-pulse { 50% { transform: scale(1.06); } }
    .lsa-panel {
      width: 360px; max-width: calc(100vw - 36px); max-height: 60vh; display: flex; flex-direction: column;
      background: var(--bg-surface, #fff); color: var(--text-primary); border: 1px solid var(--border);
      border-radius: 10px; box-shadow: var(--shadow-xl); overflow: hidden;
    }
    .lsa-head {
      display: flex; align-items: center; gap: 8px; padding: 10px 12px;
      background: var(--warning-bg, #FEF3C7); color: var(--warning, #D97706);
      strong { color: var(--text-primary); font-size: .9rem; }
    }
    .lsa-count { background: var(--warning, #D97706); color: #fff; border-radius: 999px; padding: 1px 8px; font-size: .75rem; font-weight: 700; }
    .lsa-close { margin-left: auto; background: none; border: none; cursor: pointer; color: var(--text-muted); display: flex; }
    .lsa-search {
      margin: 8px 10px; padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px;
      background: var(--bg-surface); color: var(--text-primary); font-size: .85rem;
    }
    .lsa-list { overflow-y: auto; padding: 0 6px 8px; }
    .lsa-row { display: flex; justify-content: space-between; gap: 10px; padding: 6px 6px; border-bottom: 1px solid var(--border-light); font-size: .85rem; }
    .lsa-name small { color: var(--text-muted); }
    .lsa-qty { font-weight: 700; color: var(--warning, #D97706); white-space: nowrap; }
    .lsa-qty.lsa-zero { color: var(--danger, #DC2626); }
    .lsa-empty { padding: 10px; color: var(--text-muted); font-style: italic; }
  `]
})
export class LowStockAlertComponent implements OnInit, OnDestroy {
  readonly threshold = LOW_STOCK_THRESHOLD;
  items: LowStockItem[] = [];
  expanded = false;
  search = '';

  private timer: any = null;
  private lastLoad = 0;
  private sub?: Subscription;

  constructor(private http: HttpClient, private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    this.load(true);
    this.timer = setInterval(() => this.load(true), REFRESH_MS);
    this.sub = this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => this.load(false));
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
    this.sub?.unsubscribe();
  }

  get filtered(): LowStockItem[] {
    const q = this.search.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
    if (!q) return this.items;
    return this.items.filter(i => `${i.name} ${i.code ?? ''}`.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().includes(q));
  }

  private load(force: boolean): void {
    if (!this.authService.isLoggedIn()) { this.items = []; return; }
    const companyId = this.authService.getCompanyId();
    if (!companyId) return;
    if (!force && Date.now() - this.lastLoad < MIN_GAP_MS) return;
    this.lastLoad = Date.now();
    const params = new HttpParams().set('companyId', companyId).set('threshold', LOW_STOCK_THRESHOLD);
    this.http.get<LowStockItem[]>(`${environment.apiUrl}/api/stock/low-stock`, { params }).subscribe({
      next: list => this.items = list ?? [],
      error: () => this.items = [],
    });
  }
}
