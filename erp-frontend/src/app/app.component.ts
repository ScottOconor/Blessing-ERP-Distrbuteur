import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppBrandingService } from './core/services/app-branding.service';
import { AuthService } from './core/auth/auth.service';
import { LicenseReadonlyBannerComponent } from './shared/components/license-readonly-banner/license-readonly-banner.component';
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
  imports: [RouterOutlet, CommonModule, LicenseReadonlyBannerComponent, ToastComponent],
  template: `
    @if (showIdleWarning) {
      <div class="idle-warning">
        <span class="material-icons">timer</span>
        Session inactive — déconnexion dans <strong>{{ idleCountdown }}s</strong>
        <button (click)="onActivity()">Rester connecté</button>
      </div>
    }
    <app-license-readonly-banner></app-license-readonly-banner>
    <app-toast></app-toast>
    <router-outlet></router-outlet>
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
    @keyframes slide-in { from { transform: translateY(-100%); } to { transform: translateY(0); } }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  showIdleWarning = false;
  idleCountdown   = 30;

  private lastActivity = Date.now();
  private checkTimer: any = null;

  constructor(
    private brandingService: AppBrandingService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.brandingService.apply();
    this.markActivity();
    this.checkTimer = setInterval(() => this.checkIdle(), CHECK_INTERVAL);
  }

  ngOnDestroy(): void {
    if (this.checkTimer) clearInterval(this.checkTimer);
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

    const all = Array.from(
      document.querySelectorAll<HTMLElement>(
        'input:not([disabled]):not([type="hidden"]):not([type="button"])' +
        ':not([type="submit"]):not([type="reset"]):not([type="checkbox"])' +
        ':not([type="radio"]):not([type="file"]),' +
        'select:not([disabled]),' +
        'textarea:not([disabled])'
      )
    ).filter(el => {
      if ((el as HTMLInputElement).readOnly) return false;
      return (el as any).offsetParent !== null || el.tagName.toLowerCase() === 'select';
    });

    const idx = all.indexOf(target);
    if (idx >= 0 && idx < all.length - 1) {
      all[idx + 1].focus();
      if (all[idx + 1].tagName.toLowerCase() === 'input') {
        (all[idx + 1] as HTMLInputElement).select();
      }
    }
  }
}
