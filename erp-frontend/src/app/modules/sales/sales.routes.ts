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
        path: 'payments',
        loadComponent: () => import('./components/payments/sales-payment-list.component').then(m => m.SalesPaymentListComponent)
      },
      {
        path: 'clients',
        loadComponent: () => import('./components/clients/client-list.component').then(m => m.ClientListComponent)
      },
      {
        path: 'clients/prix',
        loadComponent: () => import('./components/clients/client-price.component').then(m => m.ClientPriceComponent)
      },
      {
        path: 'reports/stats-ventes',
        loadComponent: () => import('./components/reports/stats-ventes/stats-ventes.component').then(m => m.StatsVentesComponent)
      },
      {
        path: 'reports/rapport-ristournes',
        loadComponent: () => import('./components/reports/rapport-ristourne/rapport-ristourne.component').then(m => m.RapportRistourneComponent)
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
