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

  navItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: 'dashboard', route: '/purchases/dashboard' },
    {
      id: 'orders',
      label: 'Commandes',
      icon: 'shopping_cart',
      children: [
        { label: 'Toutes les commandes', icon: 'list', route: '/purchases/orders' },
        { label: 'Nouvelle commande', icon: 'add_circle', route: '/purchases/orders/new' }
      ]
    },
    {
      id: 'invoices',
      label: 'Facturation',
      icon: 'receipt_long',
      children: [
        { label: 'Factures fournisseurs', icon: 'receipt_long', route: '/purchases/invoices' },
        { label: 'Avoirs fournisseurs', icon: 'undo', route: '/purchases/avoirs' }
      ]
    },
    { id: 'suppliers', label: 'Fournisseurs', icon: 'store', route: '/purchases/suppliers' },
    {
      id: 'commercial',
      label: 'Commercial',
      icon: 'local_offer',
      children: [
        { label: 'Remises fournisseurs', icon: 'discount', route: '/purchases/remises' }
      ]
    }
  ];

  constructor(private authService: AuthService, public router: Router) {}

  ngOnInit(): void {
    this.userName = this.authService.getUserDisplayName();
    this.userInitials = this.authService.getUserInitials();
  }

  toggleDropdown(id: string): void {
    this.activeDropdown = this.activeDropdown === id ? null : id;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!(event.target as HTMLElement).closest('.nav-item-dropdown')) {
      this.activeDropdown = null;
    }
  }

  navigateTo(route: string): void {
    this.activeDropdown = null;
    this.router.navigateByUrl(route);
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
