import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

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
  navItems: any[] = [];

  get isCentralized() { return this.authService.isCentralized(); }
  get companies() { return this.authService.getSession()?.companies ?? []; }
  get activeCompany() { return this.authService.getActiveCompany(); }

  constructor(private authService: AuthService, public router: Router) {}

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

    const journalChildren: any[] = [];
    if (this.can('JOURNAUX'))           journalChildren.push({ label: 'Liste des journaux', icon: 'list', route: '/accounting/journals' });
    if (this.can('ECRITURES', 'CREATE')) journalChildren.push({ label: "Saisie d'écriture", icon: 'edit', route: '/accounting/journal-entries/new' });
    if (journalChildren.length)
      items.push({ id: 'journals', label: 'Journaux', icon: 'book', children: journalChildren });

    if (this.can('ECRITURES')) {
      items.push({
        id: 'entries', label: 'Écritures', icon: 'receipt_long',
        children: [
          { label: 'Toutes les écritures', icon: 'format_list_bulleted', route: '/accounting/journal-entries' },
          { label: 'Brouillons',           icon: 'drafts',               route: '/accounting/journal-entries?state=draft' },
          { label: 'Validées',             icon: 'check_circle',         route: '/accounting/journal-entries?state=posted' }
        ]
      });
      items.push({ id: 'chart',      label: 'Plan Comptable', icon: 'account_tree', route: '/accounting/chart-of-accounts' });
      items.push({ id: 'grandlivre', label: 'Grand Livre',    icon: 'menu_book',    route: '/accounting/grand-livre' });
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
    this.router.navigateByUrl(route);
  }

  switchCompany(id: number): void {
    this.authService.setActiveCompanyId(id);
    this.showCompanyPicker = false;
    const url = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigateByUrl(url));
  }

  goHome(): void { this.router.navigate(['/welcome']); }
  logout(): void { this.authService.logout(); this.router.navigate(['/login']); }

  isRouteActive(route: string): boolean {
    return this.router.url === route || this.router.url.startsWith(route + '/');
  }

  hasActiveChild(children: any[]): boolean {
    return children.some(c => this.isRouteActive(c.route));
  }
}
