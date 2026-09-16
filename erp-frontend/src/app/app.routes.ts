import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';
import { permissionGuard } from './core/auth/permission.guard';
import { moduleInstalledGuard } from './core/auth/module-installed.guard';
import { licenseGuard } from './core/license/license.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'license-pending',
    loadComponent: () => import('./pages/license-pending/license-pending.component').then(m => m.LicensePendingComponent)
  },
  {
    path: 'license-blocked',
    loadComponent: () => import('./pages/license-blocked/license-blocked.component').then(m => m.LicenseBlockedComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    canActivate: [licenseGuard]
  },
  {
    path: 'welcome',
    loadComponent: () => import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent),
    canActivate: [licenseGuard, authGuard]
  },
  {
    path: 'accounting',
    loadChildren: () => import('./modules/accounting/accounting.routes').then(m => m.accountingRoutes),
    canActivate: [licenseGuard, authGuard, permissionGuard, moduleInstalledGuard],
    data: { permModule: 'COMPTABILITE' }
  },
  {
    path: 'sales',
    loadChildren: () => import('./modules/sales/sales.routes').then(m => m.salesRoutes),
    canActivate: [licenseGuard, authGuard, permissionGuard, moduleInstalledGuard],
    data: { permModule: 'VENTES' }
  },
  {
    path: 'purchases',
    loadChildren: () => import('./modules/purchases/purchases.routes').then(m => m.purchasesRoutes),
    canActivate: [licenseGuard, authGuard, permissionGuard, moduleInstalledGuard],
    data: { permModule: 'ACHATS' }
  },
  {
    path: 'stock',
    loadChildren: () => import('./modules/stock/stock.routes').then(m => m.stockRoutes),
    canActivate: [licenseGuard, authGuard, permissionGuard, moduleInstalledGuard],
    data: { permModule: 'STOCK' }
  },
  {
    path: 'config',
    loadChildren: () => import('./modules/config/config.routes').then(m => m.configRoutes),
    canActivate: [licenseGuard, authGuard, permissionGuard],
    data: { permModule: 'CONFIG' }
  },
  {
    path: 'sync',
    loadChildren: () => import('./modules/sync/sync.routes').then(m => m.syncRoutes),
    canActivate: [licenseGuard, authGuard]
  },
  {
    path: 'extra-apps',
    loadComponent: () => import('./pages/extra-apps/extra-apps.component').then(m => m.ExtraAppsComponent),
    canActivate: [licenseGuard, authGuard]
  },
  {
    path: 'caisses',
    loadChildren: () => import('./modules/caisses/caisses.routes').then(m => m.caissesRoutes),
    canActivate: [licenseGuard, authGuard, permissionGuard, moduleInstalledGuard],
    data: { permModule: 'CAISSE' }
  },
  {
    path: 'hr',
    loadChildren: () => import('./modules/hr/hr.routes').then(m => m.hrRoutes),
    canActivate: [licenseGuard, authGuard, permissionGuard, moduleInstalledGuard],
    data: { permModule: 'RH' }
  },
  {
    path: 'helpdesk',
    loadChildren: () => import('./modules/helpdesk/helpdesk.routes').then(m => m.helpdeskRoutes),
    canActivate: [licenseGuard, authGuard, permissionGuard, moduleInstalledGuard],
    data: { permModule: 'HELPDESK' }
  },
  { path: '**', redirectTo: '/welcome' }
];
