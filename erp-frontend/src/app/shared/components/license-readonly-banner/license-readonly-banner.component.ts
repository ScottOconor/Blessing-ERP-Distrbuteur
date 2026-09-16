import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseService } from '../../../core/license/license.service';

const RECHECK_MS = 60 * 1000;
const BANNER_HEIGHT_PX = 36;

/**
 * Bandeau permanent affiché quand la licence est en lecture seule (révoquée/expirée) :
 * les données existantes restent consultables, mais toute nouvelle opération d'écriture
 * est refusée par le backend (LicenseEnforcementFilter). Ce composant ne bloque rien lui-même
 * — il informe seulement ; le blocage réel des écritures est déjà appliqué côté serveur.
 *
 * Fixe une hauteur connue (--license-banner-offset, sur :root) que chaque layout applicatif
 * (accounting/sales/purchases/stock/caisses/sync) utilise pour décaler sa propre navbar fixe
 * top:0 et son contenu — sans ça, ce bandeau (lui-même fixed top:0) se superposait
 * exactement à la navbar de chaque module et interceptait les clics sur ses boutons.
 */
@Component({
  selector: 'app-license-readonly-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (visible) {
      <div class="license-banner">
        <span class="material-icons">lock_clock</span>
        <span>{{ message }}</span>
      </div>
    }
  `,
  styles: [`
    .license-banner {
      position: fixed; top: 0; left: 0; right: 0; z-index: 99998;
      height: ${BANNER_HEIGHT_PX}px; box-sizing: border-box;
      background: var(--warning-bg); color: var(--warning);
      border-bottom: 1px solid var(--warning);
      padding: 0 20px;
      display: flex; align-items: center; gap: 10px;
      font-size: .875rem; font-weight: 600;
      justify-content: center;
    }
    .material-icons { font-size: 18px; }
  `]
})
export class LicenseReadonlyBannerComponent implements OnInit, OnDestroy {
  visible = false;
  message = '';

  private timer: any = null;

  constructor(private licenseService: LicenseService) {}

  ngOnInit(): void {
    this.refresh();
    this.timer = setInterval(() => this.refresh(), RECHECK_MS);
  }

  private refresh(): void {
    this.licenseService.fetchStatus().subscribe({
      next: status => this.apply(status.status, status.message),
      error: () => {
        const known = this.licenseService.getLastKnown();
        if (known) this.apply(known.status, known.message);
      }
    });
  }

  private apply(status: string, message: string | null): void {
    this.visible = status === 'EXPIRED_READONLY';
    this.message = message || 'Licence expirée ou révoquée : consultation seule des données existantes.';
    document.documentElement.style.setProperty(
      '--license-banner-offset', this.visible ? `${BANNER_HEIGHT_PX}px` : '0px'
    );
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
    document.documentElement.style.setProperty('--license-banner-offset', '0px');
  }
}
