import { Routes } from '@angular/router';
import { PurchaseLayoutComponent } from './layout/purchase-layout.component';

export const purchasesRoutes: Routes = [
  {
    path: '',
    component: PurchaseLayoutComponent,
    children: [
      { path: '', redirectTo: 'orders', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./components/dashboard/purchase-dashboard.component').then(m => m.PurchaseDashboardComponent) },
      { path: 'orders', loadComponent: () => import('./components/orders/order-list.component').then(m => m.OrderListComponent) },
      { path: 'orders/new', loadComponent: () => import('./components/orders/order-form.component').then(m => m.OrderFormComponent) },
      { path: 'orders/:id', loadComponent: () => import('./components/orders/order-form.component').then(m => m.OrderFormComponent) },
      { path: 'suppliers', loadComponent: () => import('./components/suppliers/supplier-list.component').then(m => m.SupplierListComponent) },
      { path: 'invoices', loadComponent: () => import('./components/invoices/invoice-list.component').then(m => m.PurchaseInvoiceListComponent) },
      { path: 'invoices/:id', loadComponent: () => import('./components/invoices/invoice-detail.component').then(m => m.PurchaseInvoiceDetailComponent) },
      { path: 'avoirs', loadComponent: () => import('./components/invoices/avoir-list.component').then(m => m.PurchaseAvoirListComponent) },
      { path: 'remises', loadComponent: () => import('./components/remises/remise-list.component').then(m => m.RemiseListComponent) },
    ]
  }
];
