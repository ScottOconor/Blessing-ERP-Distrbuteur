import { Routes } from '@angular/router';
import { HelpdeskLayoutComponent } from './layout/helpdesk-layout.component';

export const helpdeskRoutes: Routes = [
  {
    path: '',
    component: HelpdeskLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./components/dashboard/helpdesk-dashboard.component')
          .then(m => m.HelpdeskDashboardComponent)
      },
      {
        path: 'tickets',
        loadComponent: () => import('./components/ticket-list/ticket-list.component')
          .then(m => m.TicketListComponent)
      },
      {
        path: 'my-tickets',
        loadComponent: () => import('./components/ticket-list/ticket-list.component')
          .then(m => m.TicketListComponent),
        data: { myTickets: true }
      },
      {
        path: 'tickets/:id',
        loadComponent: () => import('./components/ticket-detail/ticket-detail.component')
          .then(m => m.TicketDetailComponent)
      }
    ]
  }
];
