import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { CompanyService } from '../../../core/services/company.service';
import { AppBrandingService } from '../../../core/services/app-branding.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-accounting-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './accounting-layout.component.html',
  styleUrl: './accounting-layout.component.scss'
})
export class AccountingLayoutComponent implements OnInit {
  userName = '';
  userInitials = '';
  companyName = 'Mon Entreprise';
  activeDropdown: string | null = null;
  showCompanyPicker = false;
  mobileMenuOpen = false;
  navItems: any[] = [];

  companies: { id: number; name: string; sigle: string }[] = [];
  get activeCompany(): { id: number; name: string; sigle: string } | null { return null; }

  get companyLogoUrl(): string { return this.companyService.getLogoUrl(); }
  get companyDisplayName(): string { return this.companyService.getCached()?.name ?? ''; }

  constructor(private authService: AuthService, private companyService: CompanyService, public branding: AppBrandingService, public router: Router, public themeService: ThemeService) {}

  ngOnInit(): void {
    this.userName = this.authService.getUserDisplayName();
    this.userInitials = this.authService.getUserInitials();
    this.navItems = this.buildNavItems();
  }

  private can(resource: string, action = 'VIEW'): boolean {
    return this.authService.hasPermission('COMPTABILITE', resource, action);
  }

  private buildNavItems(): any[] {
    const anyCompta = this.authService.hasAnyModulePermission('COMPTABILITE');
    const items: any[] = [];

    if (anyCompta) {
      items.push({ id: 'dashboard', label: 'Tableau de bord', icon: 'dashboard', route: '/accounting/dashboard' });
    }

    if (this.can('JOURNAUX'))
      items.push({ id: 'journals', label: 'Journaux', icon: 'book', route: '/accounting/journals' });

    if (this.can('ECRITURES')) {
      items.push({
        id: 'entries', label: 'Pièces Comptables', icon: 'receipt_long',
        children: [
          { label: 'Liste des pièces',  icon: 'receipt_long', route: '/accounting/journal-entries' },
          { label: 'Nouvelle écriture', icon: 'add_circle',   route: '/accounting/journal-entries/new' }
        ]
      });
    }

    if (this.can('ECRITURES')) {
      items.push({ id: 'chart', label: 'Plan Comptable', icon: 'account_tree', route: '/accounting/chart-of-accounts' });
      items.push({
        id: 'grandlivres', label: 'Grand Livre', icon: 'menu_book',
        children: [
          { label: 'Grand Livre des Comptes', icon: 'account_tree',    route: '/accounting/grand-livre' },
          { label: 'Grand Livre des Tiers',   icon: 'people',          route: '/accounting/grand-livre-tiers' },
          { label: 'Cashbook', icon: 'account_balance_wallet', route: '/accounting/cashbook' }
        ]
      });
      items.push({
        id: 'analytic', label: 'Analytique', icon: 'analytics',
        children: [
          { label: 'Comptes analytiques',     icon: 'account_tree', route: '/accounting/analytic/accounts' },
          { label: 'Grand livre analytique',  icon: 'receipt_long', route: '/accounting/analytic/lines' },
          { label: 'Balance analytique',      icon: 'bar_chart',    route: '/accounting/analytic/report' }
        ]
      });
    }

    if (this.can('RAPPORTS')) {
      items.push({
        id: 'reports', label: 'Rapports', icon: 'assessment',
        children: [
          { label: 'Balance Générale 4 colonnes', icon: 'table_chart',   route: '/accounting/reports/general-balance-4' },
          { label: 'Balance Générale 6 colonnes', icon: 'table_chart',   route: '/accounting/reports/general-balance-6' },
          { label: 'Balance des Tiers 4 colonnes',icon: 'people',        route: '/accounting/reports/partner-balance-4' },
          { label: 'Balance des Tiers 6 colonnes',icon: 'people',        route: '/accounting/reports/partner-balance-6' },
          { label: 'Bilan OHADA',                 icon: 'account_balance',route: '/accounting/reports/balance-sheet' },
          { label: 'Compte de Résultat',          icon: 'trending_up',   route: '/accounting/reports/profit-loss' }
        ]
      });
    }

    return items;
  }

  toggleDropdown(id: string): void {
    this.activeDropdown = this.activeDropdown === id ? null : id;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const t = event.target as HTMLElement;
    if (!t.closest('.nav-item-dropdown')) this.activeDropdown = null;
    if (!t.closest('.company-selector')) this.showCompanyPicker = false;
  }

  navigateTo(route: string): void {
    this.activeDropdown = null;
    this.mobileMenuOpen = false;
    this.router.navigateByUrl(route);
  }

  switchCompany(id: number): void {
    this.authService.setActiveCompanyId(id);
    this.showCompanyPicker = false;
    this.mobileMenuOpen = false;
    const url = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigateByUrl(url));
  }

  goHome(): void { this.mobileMenuOpen = false; this.router.navigate(['/welcome']); }
  logout(): void { this.mobileMenuOpen = false; this.authService.logout(); this.router.navigate(['/login']); }

  isRouteActive(route: string): boolean {
    const [routePath, routeQuery] = route.split('?');
    const [currentPath, currentQuery] = this.router.url.split('?');
    if (routeQuery) {
      return currentPath === routePath && (currentQuery || '') === routeQuery;
    }
    return currentPath === routePath || currentPath.startsWith(routePath + '/');
  }

  hasActiveChild(children: any[]): boolean {
    return children.some(c => this.isRouteActive(c.route));
  }
}
