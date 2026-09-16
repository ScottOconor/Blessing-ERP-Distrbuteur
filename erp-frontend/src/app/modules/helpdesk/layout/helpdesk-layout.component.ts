import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { CompanyService } from '../../../core/services/company.service';
import { AppBrandingService } from '../../../core/services/app-branding.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-helpdesk-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './helpdesk-layout.component.html',
  styleUrl: './helpdesk-layout.component.scss'
})
export class HelpdeskLayoutComponent implements OnInit {
  userName = '';
  userInitials = '';
  mobileMenuOpen = false;
  navItems: any[] = [];

  constructor(public authService: AuthService, public router: Router, public themeService: ThemeService, public branding: AppBrandingService) {}

  ngOnInit(): void {
    this.userName = this.authService.getUserDisplayName();
    this.userInitials = this.authService.getUserInitials();
    this.navItems = this.buildNavItems();
  }

  private buildNavItems(): any[] {
    const canView   = this.authService.hasPermission('HELPDESK', 'TICKETS', 'VIEW');
    const canCreate = this.authService.hasPermission('HELPDESK', 'TICKETS', 'CREATE');
    const isAdmin   = this.authService.isAdmin();
    const items: any[] = [];

    if (canView) items.push({ label: 'Tableau de bord',  icon: 'dashboard',  route: '/helpdesk/dashboard' });
    if (canView && isAdmin) items.push({ label: 'Tous les tickets', icon: 'list_alt',  route: '/helpdesk/tickets' });
    if (canView) items.push({ label: 'Mes tickets',      icon: 'person_pin', route: '/helpdesk/my-tickets' });
    if (canCreate) items.push({ label: 'Nouveau ticket', icon: 'add_circle', route: '/helpdesk/tickets?new=1' });

    return items;
  }

  isActive(route: string): boolean {
    const [rp] = route.split('?');
    return this.router.url.startsWith(rp);
  }

  navigateTo(route: string): void { this.mobileMenuOpen = false; this.router.navigate([route]); }
  goHome(): void { this.mobileMenuOpen = false; this.router.navigate(['/welcome']); }
  logout(): void { this.mobileMenuOpen = false; this.authService.logout(); this.router.navigate(['/login']); }
}
