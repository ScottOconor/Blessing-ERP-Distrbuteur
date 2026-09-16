import { Routes } from '@angular/router';
import { SyncLayoutComponent } from './layout/sync-layout.component';

export const syncRoutes: Routes = [
  {
    path: '',
    component: SyncLayoutComponent,
    children: [
      { path: '', redirectTo: 'hub', pathMatch: 'full' },
      {
        path: 'hub',
        loadComponent: () => import('./components/dashboard/sync-dashboard.component').then(m => m.SyncDashboardComponent)
      }
    ]
  }
];
