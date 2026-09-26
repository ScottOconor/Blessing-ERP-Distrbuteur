import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { ConfigLayoutComponent } from './layout/config-layout.component';
import { AuthService } from '../../core/auth/auth.service';

/** Premier écran de configuration autorisé (sinon le changement de mot de passe). */
function firstAllowedScreen(): string {
  const auth = inject(AuthService);
  const screens: [string, string][] = [
    ['AGENCES', 'remote-agencies'], ['ENTREPRISES', 'company'], ['AUDIT', 'supervision'], ['EXPORT', 'export']
  ];
  if (auth.canManageUsers()) return 'remote-agencies';
  return screens.find(([res]) => auth.hasPermission('CONFIG', res, 'VIEW'))?.[1] ?? 'change-password';
}

export const configRoutes: Routes = [
  {
    path: '',
    component: ConfigLayoutComponent,
    children: [
      { path: '', redirectTo: () => firstAllowedScreen(), pathMatch: 'full' },
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
