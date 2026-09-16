import { Routes } from '@angular/router';
import { HrLayoutComponent } from './layout/hr-layout.component';

export const hrRoutes: Routes = [
  {
    path: '',
    component: HrLayoutComponent,
    children: [
      { path: '', redirectTo: 'employees', pathMatch: 'full' },
      { path: 'employees', loadComponent: () => import('./components/employees/employees.component').then(m => m.EmployeesComponent) },
      { path: 'organisation', loadComponent: () => import('./components/organisation/organisation.component').then(m => m.OrganisationComponent) },
      { path: 'contracts', loadComponent: () => import('./components/contracts/contracts.component').then(m => m.ContractsComponent) },
      { path: 'contracts/:id', loadComponent: () => import('./components/contract-detail/contract-detail.component').then(m => m.ContractDetailComponent) },
      { path: 'payslips', loadComponent: () => import('./components/payslips/payslips.component').then(m => m.PayslipsComponent) },
      { path: 'payslips/:id', loadComponent: () => import('./components/payslip-detail/payslip-detail.component').then(m => m.PayslipDetailComponent) },
      { path: 'runs', loadComponent: () => import('./components/runs/runs.component').then(m => m.RunsComponent) },
      { path: 'runs/:id/register', loadComponent: () => import('./components/payroll-register/payroll-register.component').then(m => m.PayrollRegisterComponent) },
      { path: 'leaves', loadComponent: () => import('./components/leaves/leaves.component').then(m => m.LeavesComponent) },
      { path: 'config', loadComponent: () => import('./components/config/payroll-config.component').then(m => m.PayrollConfigComponent) },
    ]
  }
];
