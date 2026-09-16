import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LicenseService, LicenseSelfStatus } from '../../core/license/license.service';

// Chaque appel ici déclenche une vérification immédiate auprès du Hub côté backend
// (LicenseService.refreshIfWaitingForActivation) tant que le statut est en attente — un intervalle
// court permet donc de démarrer l'ERP quasi instantanément après une approbation admin, sans
// attendre un cycle de recheck périodique arbitraire.
const POLL_MS = 3 * 1000;

@Component({
  selector: 'app-license-pending',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './license-pending.component.html',
  styleUrl: './license-pending.component.scss'
})
export class LicensePendingComponent implements OnInit, OnDestroy {
  status: LicenseSelfStatus | null = null;
  loading = true;
  submitting = false;
  errorMessage = '';

  contactEmail = '';
  contactPhone = '';

  private timer: any = null;

  constructor(private licenseService: LicenseService, private router: Router) {}

  ngOnInit(): void {
    this.refresh();
    this.timer = setInterval(() => this.refresh(), POLL_MS);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  get isNotActivated(): boolean {
    return this.status?.status === 'NOT_ACTIVATED';
  }

  requestActivation(): void {
    if (!this.contactEmail.trim()) {
      this.errorMessage = 'Merci de renseigner au moins un e-mail de contact.';
      return;
    }
    this.submitting = true;
    this.errorMessage = '';
    this.licenseService.requestActivation(this.contactEmail.trim(), this.contactPhone.trim()).subscribe({
      next: status => {
        this.status = status;
        this.submitting = false;
      },
      error: () => {
        this.submitting = false;
        this.errorMessage = 'Impossible de contacter le serveur de licence. Réessayez plus tard.';
      }
    });
  }

  private refresh(): void {
    this.licenseService.fetchStatus().subscribe({
      next: status => {
        this.status = status;
        this.loading = false;
        if (status.status === 'ACTIVE' || status.status === 'EXPIRED_READONLY') {
          this.router.navigate(['/welcome']);
        } else if (status.status === 'BLOCKED_FINGERPRINT_MISMATCH' || status.status === 'INVALID') {
          this.router.navigate(['/license-blocked']);
        }
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Impossible de contacter le serveur.';
      }
    });
  }
}
