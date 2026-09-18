import { Routes } from '@angular/router';
import { StockLayoutComponent } from './layout/stock-layout.component';

export const stockRoutes: Routes = [
  {
    path: '',
    component: StockLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./components/dashboard/stock-dashboard.component').then(m => m.StockDashboardComponent) },
      { path: 'receptions', loadComponent: () => import('./components/receptions/reception-list.component').then(m => m.ReceptionListComponent) },
      { path: 'receptions/new', loadComponent: () => import('./components/receptions/reception-detail.component').then(m => m.ReceptionDetailComponent) },
      { path: 'receptions/bordereau/:id', loadComponent: () => import('./components/receptions/bordereau.component').then(m => m.BordereauComponent) },
      { path: 'receptions/:id', loadComponent: () => import('./components/receptions/reception-detail.component').then(m => m.ReceptionDetailComponent) },
      { path: 'products', loadComponent: () => import('./components/products/product-list.component').then(m => m.ProductListComponent) },
      { path: 'services', loadComponent: () => import('./components/products/product-list.component').then(m => m.ProductListComponent), data: { serviceMode: true } },
      { path: 'warehouses', loadComponent: () => import('./components/warehouses/warehouse-list.component').then(m => m.WarehouseListComponent) },
      { path: 'adjustments', loadComponent: () => import('./components/adjustments/adjustment-list.component').then(m => m.AdjustmentListComponent) },
      { path: 'casses', loadComponent: () => import('./components/casses/casse-list.component').then(m => m.CasseListComponent) },
      { path: 'expeditions', loadComponent: () => import('./components/livraisons/livraison-list.component').then(m => m.LivraisonListComponent) },
      { path: 'expeditions/new', loadComponent: () => import('./components/livraisons/livraison-detail.component').then(m => m.LivraisonDetailComponent) },
      { path: 'expeditions/:id', loadComponent: () => import('./components/livraisons/livraison-detail.component').then(m => m.LivraisonDetailComponent) },
      { path: 'transferts', loadComponent: () => import('./components/transferts/transfert-list.component').then(m => m.TransfertListComponent) },
      { path: 'transferts/new', loadComponent: () => import('./components/transferts/transfert-detail.component').then(m => m.TransfertDetailComponent) },
      { path: 'transferts/:id', loadComponent: () => import('./components/transferts/transfert-detail.component').then(m => m.TransfertDetailComponent) },
      { path: 'categories', loadComponent: () => import('./components/categories/category-list.component').then(m => m.CategoryListComponent) },
      { path: 'units-of-measure', loadComponent: () => import('./components/units-of-measure/unit-of-measure-list.component').then(m => m.UnitOfMeasureListComponent) },
      { path: 'locations', loadComponent: () => import('./components/locations/location-list.component').then(m => m.LocationListComponent) },
      { path: 'picking-types', loadComponent: () => import('./components/picking-types/picking-type-list.component').then(m => m.PickingTypeListComponent) },
      { path: 'analyse/rapport', loadComponent: () => import('./components/analyse/stock-report.component').then(m => m.StockReportComponent) },
      { path: 'analyse/rapport-stock', loadComponent: () => import('./components/analyse/stock-analysis-report.component').then(m => m.StockAnalysisReportComponent) },
      { path: 'analyse/mouvements-analyse', loadComponent: () => import('./components/analyse/movement-analysis.component').then(m => m.MovementAnalysisComponent) },
      { path: 'analyse/mouvements', loadComponent: () => import('./components/analyse/stock-movements.component').then(m => m.StockMovementsComponent) },
      { path: 'analyse/valorisation', loadComponent: () => import('./components/analyse/stock-valuation.component').then(m => m.StockValuationComponent) },
    ]
  }
];
