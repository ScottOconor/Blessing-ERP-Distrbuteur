import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { NotificationService } from '../services/notification.service';

/**
 * Filet global pour les codes d'erreur que les composants ne gèrent pas déjà localement :
 * - 401 en cours de session (compte désactivé pendant que le JWT est encore valide côté
 *   navigateur — avant, l'utilisateur restait "connecté" jusqu'à expiration du JWT).
 * - 403 de PermissionFilter (corps {error, required} — bascule fail-closed backend : toute
 *   route non déclarée est refusée).
 * - 409 (verrou optimiste / conflit d'intégrité — GlobalExceptionHandler, corps {message}).
 * Rethrow systématique : les gestionnaires d'erreur locaux (err?.error?.message) continuent
 * de s'exécuter normalement, ce toast est additif.
 */
export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const notificationService = inject(NotificationService);

  return next(req).pipe(
    catchError(err => {
      if (err.status === 401 && !req.url.includes('/api/auth/login')) {
        authService.logout();
        notificationService.notify('Session expirée ou compte désactivé — veuillez vous reconnecter.', 'error');
        router.navigate(['/login'], { queryParams: { returnUrl: router.url } });
      } else if (err.status === 403 && !err.error?.status) {
        console.error('[httpErrorInterceptor] 403 toast triggered by', req.method, req.url, 'body:', err.error);
        notificationService.notify(err.error?.error ?? 'Accès refusé.', 'error');
      } else if (err.status === 409) {
        notificationService.notify(err.error?.message ?? 'Conflit détecté, veuillez recharger et réessayer.', 'error');
      }
      return throwError(() => err);
    })
  );
};
