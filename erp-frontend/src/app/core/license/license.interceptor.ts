import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { LicenseService, LicenseStatusCode } from './license.service';

/**
 * Intercepte les 403 renvoyés par LicenseEnforcementFilter (backend) — corps JSON
 * { status, message }. Cas visé : la licence est révoquée/bloquée PENDANT que l'utilisateur
 * est déjà en session (JWT encore valide côté navigateur) ; il faut réagir immédiatement,
 * sans attendre la prochaine navigation qui déclenchera licenseGuard.
 *
 * - EXPIRED_READONLY : pas de redirection plein écran (l'utilisateur doit pouvoir continuer
 *   à consulter ses données existantes) — seul le bandeau (lecture du cache mis à jour ici)
 *   informe de l'état.
 * - Autres statuts bloquants : redirection immédiate vers l'écran d'activation/blocage adapté.
 */
export const licenseInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const licenseService = inject(LicenseService);

  return next(req).pipe(
    catchError(err => {
      const backendStatus: LicenseStatusCode | undefined = err?.error?.status;
      if (err.status === 403 && backendStatus) {
        licenseService.applyKnownStatus(
          backendStatus, err.error.message ?? null,
          err.error.contactEmail ?? null, err.error.contactPhone ?? null
        );

        if (backendStatus !== 'EXPIRED_READONLY' && !router.url.startsWith('/license-')) {
          if (backendStatus === 'NOT_ACTIVATED' || backendStatus === 'PENDING') {
            router.navigate(['/license-pending']);
          } else {
            router.navigate(['/license-blocked']);
          }
        }
      }
      return throwError(() => err);
    })
  );
};
