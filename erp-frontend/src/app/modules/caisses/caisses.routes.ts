import { Routes } from '@angular/router';
import { CaissesLayoutComponent } from './layout/caisses-layout.component';

export const caissesRoutes: Routes = [
  {
    path: '',
    component: CaissesLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./components/dashboard/caisse-dashboard.component').then(m => m.CaisseDashboardComponent)
      },
      {
        path: 'gestion',
        loadComponent: () => import('./components/caisse-list/caisse-list.component').then(m => m.CaisseListComponent)
      },
      {
        path: 'entrees/new',
        loadComponent: () => import('./components/operation-form/operation-form.component').then(m => m.OperationFormComponent)
      },
      {
        path: 'entrees',
        loadComponent: () => import('./components/operation-list/operation-list.component').then(m => m.OperationListComponent)
      },
      {
        path: 'sorties/new',
        loadComponent: () => import('./components/operation-form/operation-form.component').then(m => m.OperationFormComponent)
      },
      {
        path: 'sorties',
        loadComponent: () => import('./components/operation-list/operation-list.component').then(m => m.OperationListComponent)
      },
      {
        path: 'brouillard',
        loadComponent: () => import('./components/brouillard/brouillard.component').then(m => m.BrouillardComponent)
      },
      {
        path: 'suivi-tiers',
        loadComponent: () => import('./components/suivi-tiers/suivi-tiers.component').then(m => m.SuiviTiersComponent)
      }
    ]
  }
];
