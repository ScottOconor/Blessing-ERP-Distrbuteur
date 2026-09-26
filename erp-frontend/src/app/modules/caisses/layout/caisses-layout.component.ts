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

  private can(resource: string, action = 'VIEW'): boolean {
    return this.authService.hasPermission('CAISSE', resource, action);
  }

  private buildNavItems(): any[] {
    const items: any[] = [];

    if (this.can('CAISSES') || this.can('SESSIONS') || this.can('OPERATIONS') || this.can('RAPPORTS'))
      items.push({ id: 'dashboard', label: 'Tableau de bord', icon: 'dashboard', route: '/caisses/dashboard' });

    const opCreate = this.can('OPERATIONS', 'CREATE');
    const opView   = this.can('OPERATIONS');
    for (const [id, label, icon, sing] of [
      ['entrees', 'Entrées', 'add_circle', 'entrée'],
      ['sorties', 'Sorties', 'remove_circle', 'sortie']
    ]) {
      const children: any[] = [];
      if (opCreate) children.push({ label: `Nouvelle ${sing}`, icon: `${icon}_outline`, route: `/caisses/${id}/new` });
      if (opView)   children.push({ label: `Historique des ${id}`, icon: 'history', route: `/caisses/${id}` });
      if (children.length) items.push({ id, label, icon, children });
    }

    if (this.can('CAISSES'))  items.push({ id: 'gestion',     label: 'Gestion des caisses', icon: 'point_of_sale', route: '/caisses/gestion' });
    if (this.can('RAPPORTS')) items.push({ id: 'brouillard',  label: 'Brouillard',          icon: 'receipt_long',  route: '/caisses/brouillard' });
    if (this.can('RAPPORTS')) items.push({ id: 'suivi-tiers', label: 'Dettes & Créances',   icon: 'swap_horiz',    route: '/caisses/suivi-tiers' });

    if (this.can('RAPPORTS')) items.push({
      id: 'rapports', label: 'Rapports', icon: 'summarize',
      children: [
        { label: 'Rapport consolidé', icon: 'bar_chart', route: '/caisses/rapport-consolide' }
      ]
    });

    if (this.can('COUPURES') || this.can('COUPURES', 'EDIT'))
      items.push({ id: 'coupures', label: 'Coupures', icon: 'payments', route: '/caisses/coupures' });

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
