import { Routes } from '@angular/router';
import { AccountingLayoutComponent } from './layout/accounting-layout.component';

export const accountingRoutes: Routes = [
  {
    path: '',
    component: AccountingLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'chart-of-accounts',
        loadComponent: () => import('./components/chart-of-accounts/chart-of-accounts.component').then(m => m.ChartOfAccountsComponent)
      },
      {
        path: 'journals',
        loadComponent: () => import('./components/journals/journals.component').then(m => m.JournalsComponent)
      },
      {
        path: 'journals/:id',
        loadComponent: () => import('./components/journals/journal-detail/journal-detail.component').then(m => m.JournalDetailComponent)
      },
      {
        path: 'journal-entries',
        loadComponent: () => import('./components/journal-entries/journal-entries.component').then(m => m.JournalEntriesComponent)
      },
      {
        path: 'journal-entries/new',
        loadComponent: () => import('./components/journal-entries/journal-entry-form.component').then(m => m.JournalEntryFormComponent)
      },
      {
        path: 'journal-entries/:id',
        loadComponent: () => import('./components/journal-entries/journal-entry-form.component').then(m => m.JournalEntryFormComponent)
      },
      {
        path: 'grand-livre',
        loadComponent: () => import('./components/grand-livre/grand-livre.component').then(m => m.GrandLivreComponent)
      },
      {
        path: 'grand-livre-tiers',
        loadComponent: () => import('./components/grand-livre-tiers/grand-livre-tiers.component').then(m => m.GrandLivreTiersComponent)
      },
      {
        path: 'reports/general-balance-4',
        loadComponent: () => import('./components/reports/general-balance/general-balance4.component').then(m => m.GeneralBalance4Component)
      },
      {
        path: 'reports/general-balance-6',
        loadComponent: () => import('./components/reports/general-balance/general-balance6.component').then(m => m.GeneralBalance6Component)
      },
      {
        path: 'reports/partner-balance-4',
        loadComponent: () => import('./components/reports/partner-balance/partner-balance4.component').then(m => m.PartnerBalance4Component)
      },
      {
        path: 'reports/partner-balance-6',
        loadComponent: () => import('./components/reports/partner-balance/partner-balance6.component').then(m => m.PartnerBalance6Component)
      },
      {
        path: 'reports/balance-sheet',
        loadComponent: () => import('./components/reports/balance-sheet/balance-sheet.component').then(m => m.BalanceSheetComponent)
      },
      {
        path: 'reports/profit-loss',
        loadComponent: () => import('./components/reports/profit-loss/profit-loss.component').then(m => m.ProfitLossComponent)
      },
      {
        path: 'cashbook',
        loadComponent: () => import('./components/cashbook/cashbook.component').then(m => m.CashbookComponent)
      },
      {
        path: 'analytic/accounts',
        loadComponent: () => import('./components/analytic/analytic-accounts.component').then(m => m.AnalyticAccountsComponent)
      },
      {
        path: 'analytic/lines',
        loadComponent: () => import('./components/analytic/analytic-lines.component').then(m => m.AnalyticLinesComponent)
      },
      {
        path: 'analytic/report',
        loadComponent: () => import('./components/analytic/analytic-report.component').then(m => m.AnalyticReportComponent)
      },
    ]
  }
];
