import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

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

  navItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: 'dashboard', route: '/stock/dashboard' },
    {
      id: 'operations',
      label: 'Opérations',
      icon: 'swap_horiz',
      children: [
        { label: 'Ajustements de stock', icon: 'tune', route: '/stock/adjustments' },
        { label: 'Transferts inter-dépôts', icon: 'compare_arrows', route: '/stock/transferts' },
      ]
    },
    {
      id: 'expeditions',
      label: 'Expéditions',
      icon: 'local_shipping',
      children: [
        { label: 'Expéditions inter-agences', icon: 'send', route: '/stock/expeditions' },
        { label: 'Agences distantes', icon: 'business', route: '/stock/agences' },
      ]
    },
    {
      id: 'analyse',
      label: 'Analyse',
      icon: 'analytics',
      children: [
        { label: 'Rapport de stock', icon: 'inventory', route: '/stock/analyse/rapport' },
        { label: 'Mouvements de produits', icon: 'sync_alt', route: '/stock/analyse/mouvements' },
        { label: 'Valorisation de stock', icon: 'price_check', route: '/stock/analyse/valorisation' },
      ]
    },
    {
      id: 'config',
      label: 'Configuration',
      icon: 'settings',
      children: [
        { label: 'Articles', icon: 'category', route: '/stock/products' },
        { label: 'Catégories d\'articles', icon: 'folder', route: '/stock/categories' },
        { label: 'Entrepôts', icon: 'warehouse', route: '/stock/warehouses' },
        { label: 'Emplacements', icon: 'place', route: '/stock/locations' },
        { label: 'Types d\'opérations', icon: 'swap_horiz', route: '/stock/picking-types' },
      ]
    },
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
