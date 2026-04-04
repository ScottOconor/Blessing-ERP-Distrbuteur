import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

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

  navItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: 'dashboard', route: '/sales/dashboard' },
    {
      id: 'orders',
      label: 'Bons de commande',
      icon: 'receipt',
      children: [
        { label: 'Liste des bons', icon: 'list', route: '/sales/orders' },
        { label: 'Nouveau bon', icon: 'add_circle', route: '/sales/orders/new' }
      ]
    },
    {
      id: 'invoices',
      label: 'Factures & Avoirs',
      icon: 'description',
      children: [
        { label: 'Factures', icon: 'receipt_long', route: '/sales/invoices' },
        { label: 'Avoirs', icon: 'undo', route: '/sales/avoirs' }
      ]
    },
    { id: 'clients', label: 'Clients', icon: 'people', route: '/sales/clients' },
    { id: 'reports', label: 'Statistiques', icon: 'bar_chart', route: '/sales/reports' }
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
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-item-dropdown')) {
      this.activeDropdown = null;
    }
  }

  navigateTo(route: string): void {
    this.activeDropdown = null;
    this.router.navigateByUrl(route);
  }

  goHome(): void {
    this.router.navigate(['/welcome']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isRouteActive(route: string): boolean {
    return this.router.url === route || this.router.url.startsWith(route + '/');
  }

  hasActiveChild(children: any[]): boolean {
    return children.some(c => this.isRouteActive(c.route));
  }
}
