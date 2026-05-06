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
  showCompanyPicker = false;

  get isCentralized() { return this.authService.isCentralized(); }
  get companies() { return this.authService.getSession()?.companies ?? []; }
  get activeCompany() { return this.authService.getActiveCompany(); }

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
    {
      id: 'commercial',
      label: 'Commercial',
      icon: 'local_offer',
      children: [
        { label: 'Ristournes', icon: 'redeem', route: '/sales/ristournes' },
        { label: 'Précomptes & Enlèvements', icon: 'percent', route: '/sales/precomptes' }
      ]
    },
    {
      id: 'reports',
      label: 'Rapports',
      icon: 'assessment',
      children: [
        { label: 'Tableau de bord', icon: 'bar_chart', route: '/sales/reports' },
        { label: 'État Commercial', icon: 'table_chart', route: '/sales/reports/etat-commercial' },
        { label: 'Rapport Consolidé', icon: 'summarize', route: '/sales/reports/rapport-consolide' }
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
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-item-dropdown')) this.activeDropdown = null;
    if (!target.closest('.company-selector')) this.showCompanyPicker = false;
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
