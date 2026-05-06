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

  get isCentralized() { return this.authService.isCentralized(); }
  get companies() { return this.authService.getSession()?.companies ?? []; }
  get activeCompany() { return this.authService.getActiveCompany(); }

  navItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: 'dashboard', route: '/accounting/dashboard' },
    {
      id: 'journals',
      label: 'Journaux',
      icon: 'book',
      children: [
        { label: 'Liste des journaux', icon: 'list', route: '/accounting/journals' },
        { label: 'Saisie d\'écriture', icon: 'edit', route: '/accounting/journal-entries/new' }
      ]
    },
    {
      id: 'entries',
      label: 'Écritures',
      icon: 'receipt_long',
      children: [
        { label: 'Toutes les écritures', icon: 'format_list_bulleted', route: '/accounting/journal-entries' },
        { label: 'Brouillons', icon: 'drafts', route: '/accounting/journal-entries?state=draft' },
        { label: 'Validées', icon: 'check_circle', route: '/accounting/journal-entries?state=posted' }
      ]
    },
    { id: 'chart', label: 'Plan Comptable', icon: 'account_tree', route: '/accounting/chart-of-accounts' },
    { id: 'grandlivre', label: 'Grand Livre', icon: 'menu_book', route: '/accounting/grand-livre' },
    {
      id: 'analytic',
      label: 'Analytique',
      icon: 'analytics',
      children: [
        { label: 'Comptes analytiques', icon: 'account_tree', route: '/accounting/analytic/accounts' },
        { label: 'Grand livre analytique', icon: 'receipt_long', route: '/accounting/analytic/lines' },
        { label: 'Balance analytique', icon: 'bar_chart', route: '/accounting/analytic/report' }
      ]
    },
    {
      id: 'reports',
      label: 'Rapports',
      icon: 'assessment',
      children: [
        { label: 'Balance Générale 4 colonnes', icon: 'table_chart', route: '/accounting/reports/general-balance-4' },
        { label: 'Balance Générale 6 colonnes', icon: 'table_chart', route: '/accounting/reports/general-balance-6' },
        { label: 'Balance des Tiers 4 colonnes', icon: 'people', route: '/accounting/reports/partner-balance-4' },
        { label: 'Balance des Tiers 6 colonnes', icon: 'people', route: '/accounting/reports/partner-balance-6' },
        { label: 'Bilan OHADA', icon: 'account_balance', route: '/accounting/reports/balance-sheet' },
        { label: 'Compte de Résultat', icon: 'trending_up', route: '/accounting/reports/profit-loss' }
      ]
    }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userName = this.authService.getUserDisplayName();
    this.userInitials = this.authService.getUserInitials();
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
