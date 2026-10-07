import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { DeclarationLayoutComponent } from './layout/declaration-layout.component';

/** Module réservé aux administrateurs (le backend applique la même règle). */
const adminGuard: CanActivateFn = () => {
  if (inject(AuthService).isPrivileged()) return true;
  inject(Router).navigate(['/welcome']);
  return false;
};

export const declarationRoutes: Routes = [
  {
    path: '',
    component: DeclarationLayoutComponent,
    canActivate: [adminGuard],
    children: [
      { path: '', redirectTo: 'factures', pathMatch: 'full' },
      {
        path: 'factures',
        loadComponent: () => import('./components/generator/invoice-generator.component').then(m => m.InvoiceGeneratorComponent)
      },
      {
        path: 'historique',
        loadComponent: () => import('./components/history/declaration-history.component').then(m => m.DeclarationHistoryComponent)
      }
    ]
  }
];
