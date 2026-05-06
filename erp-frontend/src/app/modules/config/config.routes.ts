import { Routes } from '@angular/router';
import { ConfigLayoutComponent } from './layout/config-layout.component';

export const configRoutes: Routes = [
  {
    path: '',
    component: ConfigLayoutComponent,
    children: [
      { path: '', redirectTo: 'groups', pathMatch: 'full' },
      {
        path: 'groups',
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
        path: 'change-password',
        loadComponent: () => import('./components/change-password/change-password.component').then(m => m.ChangePasswordComponent)
      }
    ]
  }
];
