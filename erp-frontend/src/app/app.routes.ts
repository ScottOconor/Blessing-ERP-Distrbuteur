import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'welcome',
    loadComponent: () => import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent),
    canActivate: [authGuard]
  },
  {
    path: 'accounting',
    loadChildren: () => import('./modules/accounting/accounting.routes').then(m => m.accountingRoutes),
    canActivate: [authGuard]
  },
  {
    path: 'sales',
    loadChildren: () => import('./modules/sales/sales.routes').then(m => m.salesRoutes),
    canActivate: [authGuard]
  },
  {
    path: 'purchases',
    loadChildren: () => import('./modules/purchases/purchases.routes').then(m => m.purchasesRoutes),
    canActivate: [authGuard]
  },
  {
    path: 'stock',
    loadChildren: () => import('./modules/stock/stock.routes').then(m => m.stockRoutes),
    canActivate: [authGuard]
  },
  {
    path: 'config',
    loadChildren: () => import('./modules/config/config.routes').then(m => m.configRoutes),
    canActivate: [authGuard]
  },
  { path: '**', redirectTo: '/welcome' }
];
