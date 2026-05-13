import { Routes } from '@angular/router';
import { SalesLayoutComponent } from './layout/sales-layout.component';

export const salesRoutes: Routes = [
  {
    path: '',
    component: SalesLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./components/dashboard/sales-dashboard.component').then(m => m.SalesDashboardComponent)
      },
      {
        path: 'orders',
        loadComponent: () => import('./components/orders/order-list.component').then(m => m.OrderListComponent)
      },
      {
        path: 'orders/new',
        loadComponent: () => import('./components/orders/order-form.component').then(m => m.OrderFormComponent)
      },
      {
        path: 'orders/:id',
        loadComponent: () => import('./components/orders/order-form.component').then(m => m.OrderFormComponent)
      },
      {
        path: 'invoices',
        loadComponent: () => import('./components/invoices/invoice-list.component').then(m => m.InvoiceListComponent)
      },
      {
        path: 'invoices/:id',
        loadComponent: () => import('./components/invoices/invoice-detail.component').then(m => m.InvoiceDetailComponent)
      },
      {
        path: 'avoirs',
        loadComponent: () => import('./components/invoices/avoir-list.component').then(m => m.AvoirListComponent)
      },
      {
        path: 'clients',
        loadComponent: () => import('./components/clients/client-list.component').then(m => m.ClientListComponent)
      },
      {
        path: 'reports',
        loadComponent: () => import('./components/reports/sales-reports.component').then(m => m.SalesReportsComponent)
      },
      {
        path: 'reports/etat-commercial',
        loadComponent: () => import('./components/reports/etat-commercial/etat-commercial.component').then(m => m.EtatCommercialComponent)
      },
      {
        path: 'reports/rapport-consolide',
        loadComponent: () => import('./components/reports/rapport-consolide/rapport-consolide.component').then(m => m.RapportConsolideComponent)
      },
      {
        path: 'ristournes',
        loadComponent: () => import('./components/ristournes/ristourne-list.component').then(m => m.RistourneListComponent)
      },
      {
        path: 'precomptes',
        loadComponent: () => import('./components/precomptes/precompte-config.component').then(m => m.PrecompteConfigComponent)
      },
      {
        path: 'eleader/import',
        loadComponent: () => import('./components/eleader/eleader-import/eleader-import.component').then(m => m.EleaderImportComponent)
      },
      {
        path: 'eleader/orders',
        loadComponent: () => import('./components/eleader/eleader-orders/eleader-orders.component').then(m => m.EleaderOrdersComponent)
      },
      {
        path: 'eleader/config',
        loadComponent: () => import('./components/eleader/eleader-config/eleader-config.component').then(m => m.EleaderConfigComponent)
      },
      {
        path: 'eleader/journal',
        loadComponent: () => import('./components/eleader/eleader-journal/eleader-journal.component').then(m => m.EleaderJournalComponent)
      },
      {
        path: 'eleader',
        redirectTo: 'eleader/import',
        pathMatch: 'full'
      }
    ]
  }
];
