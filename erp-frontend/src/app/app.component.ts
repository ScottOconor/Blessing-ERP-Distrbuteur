import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AppBrandingService } from './core/services/app-branding.service';
import { AuthService } from './core/auth/auth.service';
import { LowStockAlertComponent } from './shared/components/low-stock-alert/low-stock-alert.component';
import { ToastComponent } from './shared/components/toast/toast.component';

const IDLE_TIMEOUT_MS = 30 * 60 * 1000;  // 30 minutes d'inactivité → déconnexion
const WARN_BEFORE_MS  = 60 * 1000;       // avertissement 1 min avant
const CHECK_INTERVAL  = 10 * 1000;       // vérification toutes les 10 s
// Dernière activité PARTAGÉE entre onglets : une action dans n'importe quel onglet garde
// toute la session active, et un onglet en arrière-plan ne déconnecte pas les autres.
const ACTIVITY_KEY    = 'erp_last_activity';

const SKIP_TYPES = new Set(['button', 'submit', 'reset', 'checkbox', 'radio', 'file', 'hidden']);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ToastComponent, LowStockAlertComponent],
  template: `
    @if (showIdleWarning) {
      <div class="idle-warning">
        <span class="material-icons">timer</span>
        Session inactive — déconnexion dans <strong>{{ idleCountdown }}s</strong>
        <button (click)="onActivity()">Rester connecté</button>
      </div>
    }
    @if (authService.isLoggedIn() && syncDisabled) {
      <div class="sync-off-badge" title="Aucune donnée n'est envoyée au Hub ni aux autres agences. Réglage : Synchronisation Hub.">
        <span class="material-icons">cloud_off</span>
        Synchronisation désactivée
      </div>
    }
    <app-toast></app-toast>
    <router-outlet></router-outlet>
    @if (authService.isLoggedIn()) {
      @defer (on idle) {
        <app-low-stock-alert></app-low-stock-alert>
      }
    }
  `,
  styles: [`
    :host { display: block; height: 100%; }
    .idle-warning {
      position: fixed; top: 0; left: 0; right: 0; z-index: 99999;
      background: #b45309; color: #fff;
      padding: 10px 20px;
      display: flex; align-items: center; gap: 12px;
      font-size: .9rem; font-weight: 600;
      animation: slide-in .3s ease;
      button {
        margin-left: auto; background: rgba(255,255,255,.2);
        border: 1px solid rgba(255,255,255,.5); border-radius: 6px;
        color: #fff; padding: 4px 14px; cursor: pointer; font-size: .875rem;
      }
    }
    .sync-off-badge {
      position: fixed; left: 12px; bottom: 12px; z-index: 9999;
      display: flex; align-items: center; gap: 6px;
      background: #b45309; color: #fff;
      padding: 6px 12px; border-radius: 999px;
      font-size: .8rem; font-weight: 600;
      box-shadow: 0 2px 8px rgba(0,0,0,.25);
      pointer-events: auto; cursor: default;
      .material-icons { font-size: 16px; }
    }
    @keyframes slide-in { from { transform: translateY(-100%); } to { transform: translateY(0); } }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  showIdleWarning = false;
  /** Synchronisation coupée (mode formation ou arrêt volontaire) : rappel permanent à l'écran. */
  syncDisabled = false;
  private syncTimer: any = null;
  idleCountdown   = 30;

  private lastActivity = Date.now();
  private checkTimer: any = null;
  private stopSelectSearch: (() => void) | null = null;
  private destroyed = false;

  constructor(
    private brandingService: AppBrandingService,
    public authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.brandingService.apply();
    this.markActivity();
    this.checkTimer = setInterval(() => this.checkIdle(), CHECK_INTERVAL);
    this.checkSync();
    this.syncTimer = setInterval(() => this.checkSync(), 60_000);
    // Toutes les listes déroulantes deviennent des champs de recherche (cf. select-search.ts),
    // chargé à part pour ne pas alourdir le bundle initial
    import('./core/ui/select-search').then(m => {
      if (!this.destroyed) this.stopSelectSearch = m.initSelectSearch();
    });
  }

  ngOnDestroy(): void {
    if (this.checkTimer) clearInterval(this.checkTimer);
    if (this.syncTimer) clearInterval(this.syncTimer);
    this.destroyed = true;
    this.stopSelectSearch?.();
  }

  /** /api/health est public : lisible avant connexion, sans permission particulière. */
  private checkSync(): void {
    this.http.get<{ syncEnabled?: boolean }>(`${environment.apiUrl}/api/health`).subscribe({
      next: h => this.syncDisabled = h.syncEnabled === false,
      error: () => {}
    });
  }

  // ── Activité utilisateur ─────────────────────────────────────────
  @HostListener('document:mousemove')
  @HostListener('document:click')
  @HostListener('document:touchstart')
  onActivity(): void {
    this.markActivity();
    if (this.showIdleWarning) this.showIdleWarning = false;
  }

  /** Enregistre l'activité localement ET dans localStorage (partagé entre tous les onglets). */
  private markActivity(): void {
    this.lastActivity = Date.now();
    try { localStorage.setItem(ACTIVITY_KEY, String(this.lastActivity)); } catch { /* localStorage indispo */ }
  }

  /** Dernière activité la plus récente, tous onglets confondus. */
  private getLastActivity(): number {
    try {
      const shared = +(localStorage.getItem(ACTIVITY_KEY) ?? 0);
      if (shared > this.lastActivity) return shared;
    } catch { /* localStorage indispo */ }
    return this.lastActivity;
  }

  private checkIdle(): void {
    if (!this.authService.isLoggedIn()) return;
    const idle = Date.now() - this.getLastActivity();
    if (idle >= IDLE_TIMEOUT_MS) {
      this.authService.logout();
      this.showIdleWarning = false;
      this.router.navigate(['/login']);
      return;
    }
    const remaining = Math.ceil((IDLE_TIMEOUT_MS - idle) / 1000);
    if (idle >= IDLE_TIMEOUT_MS - WARN_BEFORE_MS) {
      this.showIdleWarning = true;
      this.idleCountdown   = remaining;
    } else {
      this.showIdleWarning = false;
    }
  }

  // ── Navigation Enter → champ suivant ────────────────────────────
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: Event): void {
    this.markActivity();
    if (this.showIdleWarning) this.showIdleWarning = false;

    const ke = event as KeyboardEvent;
    if (ke.key !== 'Enter') return;

    const target = ke.target as HTMLElement;
    const tag  = target.tagName.toLowerCase();
    const type = ((target as HTMLInputElement).type || '').toLowerCase();

    if (tag === 'textarea') return;
    if (tag === 'button' || tag === 'a') return;
    if (tag === 'input' && SKIP_TYPES.has(type)) return;
    if (tag !== 'input' && tag !== 'select') return;

    ke.preventDefault();

    const all = editableFields(document);

    // Dernier champ de la dernière ligne d'un tableau de saisie : Entrée ajoute une ligne
    // (bouton marqué data-add-line près du tableau) et place le curseur sur son premier champ.
    if (this.enterAddsLine(target)) return;

    const idx = all.indexOf(target);
    if (idx >= 0 && idx < all.length - 1) {
      all[idx + 1].focus();
      if (all[idx + 1].tagName.toLowerCase() === 'input') {
        (all[idx + 1] as HTMLInputElement).select();
      }
    }
  }

  private enterAddsLine(target: HTMLElement): boolean {
    const row = target.closest('tr');
    const tbody = row?.parentElement;
    if (!row || !tbody || tbody.tagName.toLowerCase() !== 'tbody' || tbody.lastElementChild !== row) return false;
    const fields = editableFields(row);
    if (fields[fields.length - 1] !== target) return false;
    // Ligne vide (premier champ non renseigné) : ne pas empiler des lignes vides
    const first = fields[0] as HTMLInputElement | undefined;
    if (!first || !(first.value ?? '').trim()) return false;

    let addBtn: HTMLElement | null = null;
    for (let el = tbody.closest('table')?.parentElement; el && !addBtn; el = el.parentElement) {
      addBtn = el.querySelector<HTMLElement>('[data-add-line]:not([disabled])');
    }
    if (!addBtn) return false;

    const before = tbody.children.length;
    addBtn.click();
    // Attendre que la nouvelle ligne soit rendue
    let tries = 0;
    const focusNewRow = () => {
      if (tbody.children.length > before) {
        const next = editableFields(tbody.lastElementChild as HTMLElement)[0] as HTMLInputElement | undefined;
        next?.focus();
        if (next?.tagName.toLowerCase() === 'input') next.select();
      } else if (++tries < 20) {
        setTimeout(focusNewRow, 25);
      }
    };
    setTimeout(focusNewRow);
    return true;
  }
}

/** Champs de saisie atteignables au clavier, dans l'ordre du document. */
function editableFields(root: ParentNode): HTMLElement[] {
  return Array.from(
    root.querySelectorAll<HTMLElement>(
      'input:not([disabled]):not([type="hidden"]):not([type="button"])' +
      ':not([type="submit"]):not([type="reset"]):not([type="checkbox"])' +
      ':not([type="radio"]):not([type="file"]),' +
      'select:not([disabled]):not(.ss-hidden),' +
      'textarea:not([disabled])'
    )
  ).filter(el => {
    if ((el as HTMLInputElement).readOnly) return false;
    return (el as any).offsetParent !== null || el.tagName.toLowerCase() === 'select';
  });
}
