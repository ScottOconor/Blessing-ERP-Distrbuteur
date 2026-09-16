import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { CompanyService } from '../../../core/services/company.service';
import { AppBrandingService } from '../../../core/services/app-branding.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-purchase-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './purchase-layout.component.html',
  styleUrl: './purchase-layout.component.scss'
})
export class PurchaseLayoutComponent implements OnInit {
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
    return this.authService.hasPermission('ACHATS', resource, action);
  }

  private buildNavItems(): any[] {
    const anyAchats = this.authService.hasAnyModulePermission('ACHATS');
    const items: any[] = [];

    if (anyAchats) {
      items.push({ id: 'dashboard', label: 'Tableau de bord', icon: 'dashboard', route: '/purchases/dashboard' });
    }

    const orderChildren: any[] = [];
    if (this.can('COMMANDES', 'VIEW'))   orderChildren.push({ label: 'Toutes les commandes', icon: 'list',       route: '/purchases/orders' });
    if (this.can('COMMANDES', 'CREATE')) orderChildren.push({ label: 'Nouvelle commande',    icon: 'add_circle', route: '/purchases/orders/new' });
    if (orderChildren.length)
      items.push({ id: 'orders', label: 'Commandes', icon: 'shopping_cart', children: orderChildren });

    const invoiceChildren: any[] = [];
    if (this.can('FACTURES', 'VIEW')) invoiceChildren.push({ label: 'Factures fournisseurs', icon: 'receipt_long', route: '/purchases/invoices' });
    if (this.can('AVOIRS',   'VIEW')) invoiceChildren.push({ label: 'Avoirs fournisseurs',   icon: 'undo',         route: '/purchases/avoirs' });
    if (invoiceChildren.length)
      items.push({ id: 'invoices', label: 'Facturation', icon: 'receipt_long', children: invoiceChildren });

    if (this.can('COMMANDES', 'VIEW') || this.can('FACTURES', 'VIEW'))
      items.push({ id: 'suppliers', label: 'Fournisseurs', icon: 'store', route: '/purchases/suppliers' });

    const commChildren: any[] = [];
    if (this.can('REMISES',     'VIEW')) commChildren.push({ label: 'Remises fournisseurs', icon: 'discount',       route: '/purchases/remises' });
    if (this.can('ENLEVEMENTS', 'VIEW')) commChildren.push({ label: 'Enlèvements',          icon: 'local_shipping', route: '/purchases/enlevements' });
    if (this.can('FACTURES',    'VIEW')) commChildren.push({ label: 'Tarifs fournisseurs',  icon: 'price_change',   route: '/purchases/tarifs-fournisseurs' });
    if (commChildren.length)
      items.push({ id: 'commercial', label: 'Commercial', icon: 'local_offer', children: commChildren });

    const rapportChildren: any[] = [];
    if (this.can('REMISES',     'VIEW')) rapportChildren.push({ label: 'Rapport des remises',     icon: 'percent',        route: '/purchases/rapports' });
    if (this.can('ENLEVEMENTS', 'VIEW')) rapportChildren.push({ label: 'Rapport des enlèvements', icon: 'local_shipping', route: '/purchases/rapports-enlevements' });
    if (this.can('FACTURES',    'VIEW')) rapportChildren.push({ label: 'Statistiques d\'achats',  icon: 'bar_chart',      route: '/purchases/rapports/stats-achats' });
    if (rapportChildren.length)
      items.push({ id: 'rapports', label: 'Rapports', icon: 'bar_chart', children: rapportChildren });

    if (this.can('PAIEMENTS', 'VIEW'))
      items.push({ id: 'payments', label: 'Paiements', icon: 'payments', route: '/purchases/payments' });

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
