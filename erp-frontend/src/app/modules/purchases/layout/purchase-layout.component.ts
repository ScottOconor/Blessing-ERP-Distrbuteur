import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

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
    return this.authService.hasPermission('ACHATS', resource, action);
  }

  private buildNavItems(): any[] {
    const anyAchats = this.authService.hasAnyModulePermission('ACHATS');
    const items: any[] = [];

    if (anyAchats) {
      items.push({ id: 'dashboard', label: 'Tableau de bord', icon: 'dashboard', route: '/purchases/dashboard' });
    }

    const orderChildren: any[] = [];
    if (this.can('BONS_COMMANDE', 'VIEW'))   orderChildren.push({ label: 'Toutes les commandes', icon: 'list',       route: '/purchases/orders' });
    if (this.can('BONS_COMMANDE', 'CREATE')) orderChildren.push({ label: 'Nouvelle commande',    icon: 'add_circle', route: '/purchases/orders/new' });
    if (orderChildren.length)
      items.push({ id: 'orders', label: 'Commandes', icon: 'shopping_cart', children: orderChildren });

    const invoiceChildren: any[] = [];
    if (this.can('FACTURES', 'VIEW')) invoiceChildren.push({ label: 'Factures fournisseurs', icon: 'receipt_long', route: '/purchases/invoices' });
    if (this.can('FACTURES', 'VIEW')) invoiceChildren.push({ label: 'Avoirs fournisseurs',   icon: 'undo',         route: '/purchases/avoirs' });
    if (invoiceChildren.length)
      items.push({ id: 'invoices', label: 'Facturation', icon: 'receipt_long', children: invoiceChildren });

    if (this.can('FOURNISSEURS', 'VIEW'))
      items.push({ id: 'suppliers', label: 'Fournisseurs', icon: 'store', route: '/purchases/suppliers' });

    if (anyAchats) {
      items.push({
        id: 'commercial', label: 'Commercial', icon: 'local_offer',
        children: [{ label: 'Remises fournisseurs', icon: 'discount', route: '/purchases/remises' }]
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

  isActive(route: string): boolean {
    return this.router.url === route || this.router.url.startsWith(route + '/');
  }

  hasActiveChild(children: any[]): boolean {
    return children.some(c => this.isActive(c.route));
  }
}
