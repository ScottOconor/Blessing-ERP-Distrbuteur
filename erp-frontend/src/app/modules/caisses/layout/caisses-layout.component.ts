import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { CompanyService } from '../../../core/services/company.service';
import { AppBrandingService } from '../../../core/services/app-branding.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-caisses-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './caisses-layout.component.html',
  styleUrl: './caisses-layout.component.scss'
})
export class CaissesLayoutComponent implements OnInit {
  userName = '';
  userInitials = '';
  activeDropdown: string | null = null;
  mobileMenuOpen = false;
  navItems: any[] = [];

  get companyLogoUrl(): string { return this.companyService.getLogoUrl(); }
  get companyDisplayName(): string { return this.companyService.getCached()?.name ?? ''; }

  constructor(
    private authService: AuthService,
    private companyService: CompanyService, public branding: AppBrandingService,
    public router: Router,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.userName = this.authService.getUserDisplayName();
    this.userInitials = this.authService.getUserInitials();
    this.navItems = this.buildNavItems();
  }

  private can(action: string): boolean {
    return this.authService.hasPermission('CAISSE', 'CAISSES', action);
  }

  private buildNavItems(): any[] {
    const canView   = this.can('VIEW');
    const canCreate = this.can('CREATE');
    const items: any[] = [];

    if (canView) items.push({ id: 'dashboard', label: 'Tableau de bord', icon: 'dashboard', route: '/caisses/dashboard' });

    if (canCreate) items.push({
      id: 'entrees', label: 'Entrées', icon: 'add_circle',
      children: [
        { label: 'Nouvelle entrée',        icon: 'add_circle_outline', route: '/caisses/entrees/new' },
        { label: 'Historique des entrées', icon: 'history',            route: '/caisses/entrees' }
      ]
    });

    if (canCreate) items.push({
      id: 'sorties', label: 'Sorties', icon: 'remove_circle',
      children: [
        { label: 'Nouvelle sortie',        icon: 'remove_circle_outline', route: '/caisses/sorties/new' },
        { label: 'Historique des sorties', icon: 'history',               route: '/caisses/sorties' }
      ]
    });

    if (canView) items.push({ id: 'gestion',     label: 'Gestion des caisses', icon: 'point_of_sale', route: '/caisses/gestion' });
    if (canView) items.push({ id: 'brouillard',  label: 'Brouillard',          icon: 'receipt_long',  route: '/caisses/brouillard' });
    if (canView) items.push({ id: 'suivi-tiers', label: 'Dettes & Créances',   icon: 'swap_horiz',    route: '/caisses/suivi-tiers' });

    if (canView) items.push({
      id: 'rapports', label: 'Rapports', icon: 'summarize',
      children: [
        { label: 'Rapport consolidé', icon: 'bar_chart', route: '/caisses/rapport-consolide' }
      ]
    });

    if (canCreate) items.push({ id: 'coupures', label: 'Coupures', icon: 'payments', route: '/caisses/coupures' });

    return items;
  }

  toggleDropdown(id: string): void {
    this.activeDropdown = this.activeDropdown === id ? null : id;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const t = event.target as HTMLElement;
    if (!t.closest('.nav-item-dropdown')) this.activeDropdown = null;
  }

  navigateTo(route: string): void {
    this.activeDropdown = null;
    this.mobileMenuOpen = false;
    this.router.navigateByUrl(route);
  }

  goHome(): void { this.mobileMenuOpen = false; this.router.navigate(['/welcome']); }
  logout(): void { this.mobileMenuOpen = false; this.authService.logout(); this.router.navigate(['/login']); }

  isRouteActive(route: string): boolean {
    const [rp] = route.split('?');
    const [cp] = this.router.url.split('?');
    return cp === rp || cp.startsWith(rp + '/');
  }

  hasActiveChild(children: any[]): boolean {
    return children.some(c => this.isRouteActive(c.route));
  }
}
