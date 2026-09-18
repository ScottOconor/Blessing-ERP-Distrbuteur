import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { CompanyService } from '../../../core/services/company.service';
import { AppBrandingService } from '../../../core/services/app-branding.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-stock-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './stock-layout.component.html',
  styleUrl: './stock-layout.component.scss'
})
export class StockLayoutComponent implements OnInit {
  userName = '';
  userInitials = '';
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
    return this.authService.hasPermission('STOCK', resource, action);
  }

  private buildNavItems(): any[] {
    const anyStock = this.authService.hasAnyModulePermission('STOCK');
    const items: any[] = [];

    if (anyStock) {
      items.push({ id: 'dashboard', label: 'Tableau de bord', icon: 'dashboard', route: '/stock/dashboard' });
    }

    if (this.can('MOUVEMENTS')) {
      items.push({
        id: 'operations', label: 'Opérations', icon: 'swap_horiz',
        children: [
          { label: 'Réceptions fournisseurs',   icon: 'move_to_inbox',  route: '/stock/receptions' },
          { label: 'Ajustements de stock',      icon: 'tune',           route: '/stock/adjustments' },
          { label: 'Transferts inter-dépôts',   icon: 'compare_arrows', route: '/stock/transferts' }
        ]
      });
      items.push({ id: 'expeditions', label: 'Expéditions inter-agences', icon: 'local_shipping', route: '/stock/expeditions' });
    }

    if (this.can('CASSES')) {
      items.push({ id: 'casses', label: 'Trous & Casses', icon: 'broken_image', route: '/stock/casses' });
    }

    if (this.can('MOUVEMENTS') || this.can('INVENTAIRE')) {
      items.push({
        id: 'analyse', label: 'Analyse', icon: 'analytics',
        children: [
          { label: 'Rapport de stock',              icon: 'inventory',  route: '/stock/analyse/rapport' },
          { label: 'Fiche de stock / Mouvements',  icon: 'assessment', route: '/stock/analyse/rapport-stock' },
          { label: 'Analyse des mouvements', icon: 'bar_chart',  route: '/stock/analyse/mouvements-analyse' },
          { label: 'Mouvements de produits', icon: 'sync_alt',   route: '/stock/analyse/mouvements' },
          { label: 'Valorisation de stock',  icon: 'price_check',route: '/stock/analyse/valorisation' }
        ]
      });
    }

    const configChildren: any[] = [];
    if (this.can('PRODUITS')) {
      configChildren.push({ label: 'Articles',           icon: 'category',   route: '/stock/products' });
      configChildren.push({ label: 'Services',           icon: 'design_services', route: '/stock/services' });
      configChildren.push({ label: "Catégories d'articles", icon: 'folder', route: '/stock/categories' });
      configChildren.push({ label: 'Unités de mesure',   icon: 'straighten', route: '/stock/units-of-measure' });
    }
    if (this.can('INVENTAIRE')) {
      configChildren.push({ label: 'Entrepôts',          icon: 'warehouse',  route: '/stock/warehouses' });
      configChildren.push({ label: 'Emplacements',       icon: 'place',      route: '/stock/locations' });
      configChildren.push({ label: "Types d'opérations", icon: 'swap_horiz', route: '/stock/picking-types' });
    }
    if (configChildren.length)
      items.push({ id: 'config', label: 'Configuration', icon: 'settings', children: configChildren });

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

  isActive(route: string): boolean {
    return this.router.url === route || this.router.url.startsWith(route + '/');
  }

  hasActiveChild(children: any[]): boolean {
    return children.some(c => this.isActive(c.route));
  }
}
