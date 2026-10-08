import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';
import { permissionGuard } from './core/auth/permission.guard';
import { moduleInstalledGuard } from './core/auth/module-installed.guard';

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
    canActivate: [authGuard, permissionGuard, moduleInstalledGuard],
    data: { permModule: 'COMPTABILITE' }
  },
  {
    path: 'sales',
    loadChildren: () => import('./modules/sales/sales.routes').then(m => m.salesRoutes),
    canActivate: [authGuard, permissionGuard, moduleInstalledGuard],
    data: { permModule: 'VENTES' }
  },
  {
    path: 'purchases',
    loadChildren: () => import('./modules/purchases/purchases.routes').then(m => m.purchasesRoutes),
    canActivate: [authGuard, permissionGuard, moduleInstalledGuard],
    data: { permModule: 'ACHATS' }
  },
  {
    path: 'stock',
    loadChildren: () => import('./modules/stock/stock.routes').then(m => m.stockRoutes),
    canActivate: [authGuard, permissionGuard, moduleInstalledGuard],
    data: { permModule: 'STOCK' }
  },
  {
    path: 'config',
    loadChildren: () => import('./modules/config/config.routes').then(m => m.configRoutes),
    canActivate: [authGuard, permissionGuard],
    data: { permModule: 'CONFIG' }
  },
  {
    path: 'sync',
    loadChildren: () => import('./modules/sync/sync.routes').then(m => m.syncRoutes),
    canActivate: [authGuard]
  },
  {
    path: 'extra-apps',
    loadComponent: () => import('./pages/extra-apps/extra-apps.component').then(m => m.ExtraAppsComponent),
    canActivate: [authGuard]
  },
  {
    path: 'caisses',
    loadChildren: () => import('./modules/caisses/caisses.routes').then(m => m.caissesRoutes),
    canActivate: [authGuard, permissionGuard, moduleInstalledGuard],
    data: { permModule: 'CAISSE' }
  },
  {
    path: 'hr',
    loadChildren: () => import('./modules/hr/hr.routes').then(m => m.hrRoutes),
    canActivate: [authGuard, permissionGuard, moduleInstalledGuard],
    data: { permModule: 'RH' }
  },
  {
    path: 'helpdesk',
    loadChildren: () => import('./modules/helpdesk/helpdesk.routes').then(m => m.helpdeskRoutes),
    canActivate: [authGuard, permissionGuard, moduleInstalledGuard],
    data: { permModule: 'HELPDESK' }
  },
  { path: '**', redirectTo: '/welcome' }
];
