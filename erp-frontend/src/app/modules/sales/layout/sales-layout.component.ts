import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { CompanyService } from '../../../core/services/company.service';
import { AppBrandingService } from '../../../core/services/app-branding.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-sales-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './sales-layout.component.html',
  styleUrl: './sales-layout.component.scss'
})
export class SalesLayoutComponent implements OnInit {
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
  get companyDisplayName(): string { return this.companyService.getCached()?.name ?? this.companyName; }

  constructor(private authService: AuthService, private companyService: CompanyService, public branding: AppBrandingService, public router: Router, public themeService: ThemeService) {}

  ngOnInit(): void {
    this.userName = this.authService.getUserDisplayName();
    this.userInitials = this.authService.getUserInitials();
    this.navItems = this.buildNavItems();
  }

  private can(resource: string, action = 'VIEW'): boolean {
    return this.authService.hasPermission('VENTES', resource, action);
  }

  private buildNavItems(): any[] {
    const anyVentes = this.authService.hasAnyModulePermission('VENTES');
    const items: any[] = [];

    if (anyVentes) {
      items.push({ id: 'dashboard', label: 'Tableau de bord', icon: 'dashboard', route: '/sales/dashboard' });
    }

    const orderChildren: any[] = [];
    if (this.can('COMMANDES', 'VIEW'))   orderChildren.push({ label: 'Liste des bons',  icon: 'list',       route: '/sales/orders' });
    if (this.can('COMMANDES', 'CREATE')) orderChildren.push({ label: 'Nouveau bon',      icon: 'add_circle', route: '/sales/orders/new' });
    if (orderChildren.length)
      items.push({ id: 'orders', label: 'Bons de commande', icon: 'receipt', children: orderChildren });

    const invoiceChildren: any[] = [];
    if (this.can('FACTURES', 'VIEW')) invoiceChildren.push({ label: 'Factures', icon: 'receipt_long', route: '/sales/invoices' });
    if (this.can('AVOIRS',   'VIEW')) invoiceChildren.push({ label: 'Avoirs',   icon: 'undo',         route: '/sales/avoirs' });
    if (invoiceChildren.length)
      items.push({ id: 'invoices', label: 'Factures & Avoirs', icon: 'description', children: invoiceChildren });

    if (this.can('CLIENTS', 'VIEW')) {
      const clientChildren: any[] = [
        { label: 'Fiche clients', icon: 'people', route: '/sales/clients' },
        { label: 'Tarifs par client', icon: 'sell', route: '/sales/clients/prix' }
      ];
      items.push({ id: 'clients', label: 'Clients', icon: 'people', children: clientChildren });
    }

    if (this.can('PAIEMENTS', 'VIEW'))
      items.push({ id: 'payments', label: 'Paiements', icon: 'payments', route: '/sales/payments' });

    const commChildren: any[] = [];
    if (this.can('RISTOURNES', 'VIEW'))  commChildren.push({ label: 'Ristournes',              icon: 'redeem',  route: '/sales/ristournes' });
    if (this.can('PRECOMPTES', 'VIEW'))  commChildren.push({ label: 'Précomptes & Enlèvements', icon: 'percent', route: '/sales/precomptes' });
    if (commChildren.length)
      items.push({ id: 'commercial', label: 'Commercial', icon: 'local_offer', children: commChildren });

    if (anyVentes) {
      items.push({
        id: 'eleader',
        label: 'eLeader',
        icon: 'upload_file',
        children: [
          { label: 'Import PDF',    icon: 'upload',   route: '/sales/eleader/import' },
          { label: 'Journaux',      icon: 'history',  route: '/sales/eleader/journal' },
          { label: 'Configuration', icon: 'settings', route: '/sales/eleader/config' }
        ]
      });
    }

    const reportChildren: any[] = [];
    if (this.can('COMMANDES', 'VIEW') || this.can('FACTURES', 'VIEW'))
      reportChildren.push({ label: 'Stats de ventes',    icon: 'trending_up', route: '/sales/reports/stats-ventes' });
    if (this.can('RISTOURNES', 'VIEW'))
      reportChildren.push({ label: 'État des Ristournes', icon: 'redeem',     route: '/sales/reports/rapport-ristournes' });
    if (reportChildren.length)
      items.push({ id: 'reports', label: 'Rapports', icon: 'assessment', children: reportChildren });

    return items;
  }

  toggleDropdown(id: string): void {
    this.activeDropdown = this.activeDropdown === id ? null : id;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-item-dropdown')) this.activeDropdown = null;
    if (!target.closest('.company-selector')) this.showCompanyPicker = false;
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
    return this.router.url === route || this.router.url.startsWith(route + '/');
  }

  hasActiveChild(children: any[]): boolean {
    return children.some(c => this.isRouteActive(c.route));
  }
}
