import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

/**
 * Module d'où part la requête. Les modules Caisse, Configuration, Ventes et Achats réutilisent des
 * endpoints d'autres modules (ventes, journaux, articles...) : le backend accepte alors leurs propres droits
 * (en-tête X-Erp-Context) au lieu d'exiger ceux du module Ventes ou Comptabilité.
 */
function moduleContext(router: Router): string | null {
  // Pendant une navigation, router.url est encore l'ancienne URL : on prend la destination.
  const nav = router.getCurrentNavigation();
  const url = nav?.finalUrl ? router.serializeUrl(nav.finalUrl) : router.url;
  if (url.startsWith('/caisses')) return 'CAISSE';
  if (url.startsWith('/config')) return 'CONFIG';
  // Bons/factures : lecture des articles sans exiger le droit Stock › Produits
  if (url.startsWith('/sales')) return 'VENTES';
  if (url.startsWith('/purchases')) return 'ACHATS';
  return null;
}

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken();

  let headers = req.headers;
  if (token) headers = headers.set('Authorization', `Bearer ${token}`);
  const context = moduleContext(router);
  if (context) headers = headers.set('X-Erp-Context', context);

  return headers === req.headers ? next(req) : next(req.clone({ headers }));
};
