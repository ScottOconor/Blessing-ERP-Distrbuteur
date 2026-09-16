import { Routes } from '@angular/router';
import { ConfigLayoutComponent } from './layout/config-layout.component';

export const configRoutes: Routes = [
  {
    path: '',
    component: ConfigLayoutComponent,
    children: [
      { path: '', redirectTo: 'remote-agencies', pathMatch: 'full' },
      { path: 'groups', redirectTo: 'remote-agencies', pathMatch: 'full' },
      {
        path: 'remote-agencies',
        loadComponent: () => import('./components/groups/groups.component').then(m => m.GroupsComponent)
      },
      {
        path: 'users',
        loadComponent: () => import('./components/users/users.component').then(m => m.UsersComponent)
      },
      {
        path: 'roles',
        loadComponent: () => import('./components/roles/roles.component').then(m => m.RolesComponent)
      },
      {
        path: 'company',
        loadComponent: () => import('./components/company/company.component').then(m => m.CompanyComponent)
      },
      {
        path: 'change-password',
        loadComponent: () => import('./components/change-password/change-password.component').then(m => m.ChangePasswordComponent)
      },
      {
        path: 'supervision',
        loadComponent: () => import('./components/supervision/supervision.component').then(m => m.SupervisionComponent)
      },
      {
        path: 'backup',
        loadComponent: () => import('./components/backup/backup.component').then(m => m.BackupComponent)
      },
      {
        path: 'fiscal-closure',
        loadComponent: () => import('./components/fiscal-closure/fiscal-closure.component').then(m => m.FiscalClosureComponent)
      },
      {
        path: 'export',
        loadComponent: () => import('./components/export/export.component').then(m => m.ExportComponent)
      }
    ]
  }
];
