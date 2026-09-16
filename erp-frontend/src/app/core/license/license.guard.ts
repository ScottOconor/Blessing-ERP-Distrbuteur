import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { LicenseService } from './license.service';

/**
 * Bloque l'accès aux écrans métier tant que la licence n'est pas ACTIVE ou EXPIRED_READONLY
 * (lecture seule — géré par le bandeau, pas par ce guard). Redirige vers /license-pending
 * (NOT_ACTIVATED/PENDING) ou /license-blocked (empreinte non reconnue / licence invalide).
 * En cas d'échec réseau vers le backend, laisse passer (fail-open) : le filtre backend
 * (LicenseEnforcementFilter) reste la seule autorité réelle de blocage.
 */
export const licenseGuard: CanActivateFn = () => {
  const licenseService = inject(LicenseService);
  const router = inject(Router);

  return licenseService.fetchStatus().pipe(
    map(status => {
      switch (status.status) {
        case 'ACTIVE':
        case 'EXPIRED_READONLY':
          return true;
        case 'NOT_ACTIVATED':
        case 'PENDING':
          router.navigate(['/license-pending']);
          return false;
        default:
          router.navigate(['/license-blocked']);
          return false;
      }
    }),
    catchError(() => of(true))
  );
};
