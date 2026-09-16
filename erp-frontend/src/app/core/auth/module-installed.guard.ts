import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { map, catchError, of } from 'rxjs';
import { AuthService } from './auth.service';
import { ModuleService } from '../services/module.service';

/**
 * Bloque l'accès direct (URL, favori) à un module métier désinstallé pour l'entreprise courante.
 * Usage : canActivate: [authGuard, permissionGuard, moduleInstalledGuard]  +  data: { permModule: 'RH' }
 * Réutilise la même clé de données `permModule` que permissionGuard.
 */
export const moduleInstalledGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const moduleService = inject(ModuleService);
  const router = inject(Router);

  const module: string | undefined = route.data['permModule'];
  if (!module) return true;

  return moduleService.ensureLoaded(auth.getCompanyId()).pipe(
    map(() => {
      if (moduleService.isInstalledCached(module)) return true;
      router.navigate(['/welcome']);
      return false;
    }),
    catchError(() => of(true)) // fail-open : ne bloque pas l'accès si l'API est indisponible
  );
};
