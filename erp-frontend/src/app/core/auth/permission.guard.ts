import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

/**
 * Protège les routes de module (sales, purchases, stock, accounting, config).
 * Usage : canActivate: [authGuard, permissionGuard]  +  data: { permModule: 'VENTES' }
 *
 * Les rôles système (centralized=true) ont toujours accès.
 * Les rôles custom doivent avoir au moins une permission dans le module.
 */
export const permissionGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const module: string | undefined = route.data['permModule'];
  if (!module) return true;

  // CONFIG : toujours visible (au moins "Changer mot de passe")
  if (module === 'CONFIG') return true;

  if (auth.hasAnyModulePermission(module)) return true;

  router.navigate(['/welcome']);
  return false;
};

/**
 * Protège un écran précis d'un module : exige le droit VIEW sur la ressource.
 * Usage : canActivate: [resourceGuard]  +  data: { permModule: 'STOCK', permResource: 'PRODUITS' }
 */
export const resourceGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const module: string | undefined = route.data['permModule'];
  const resource: string | undefined = route.data['permResource'];
  if (!module || !resource) return true;
  if (auth.hasPermission(module, resource, 'VIEW')) return true;

  router.navigate(['/welcome']);
  return false;
};
