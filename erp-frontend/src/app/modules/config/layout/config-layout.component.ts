import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-config-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './config-layout.component.html',
  styleUrl: './config-layout.component.scss'
})
export class ConfigLayoutComponent {
  showCompanyPicker = false;

  get isCentralized() { return this.authService.isCentralized(); }
  get companies() { return this.authService.getSession()?.companies ?? []; }
  get activeCompany() { return this.authService.getActiveCompany(); }

  constructor(public authService: AuthService, public router: Router) {}

  get navItems() {
    const items: { label: string; icon: string; route: string; adminOnly?: boolean }[] = [
      { label: 'Groupes & Entreprises', icon: 'corporate_fare', route: '/config/groups', adminOnly: true },
      { label: 'Utilisateurs',          icon: 'manage_accounts', route: '/config/users',  adminOnly: true },
      { label: 'Rôles',                 icon: 'admin_panel_settings', route: '/config/roles', adminOnly: true },
      { label: 'Changer mot de passe',  icon: 'lock_reset', route: '/config/change-password' },
    ];
    return items.filter(i => !i.adminOnly || this.authService.canManageUsers());
  }

  isActive(route: string): boolean {
    return this.router.url.startsWith(route);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!(event.target as HTMLElement).closest('.company-selector')) this.showCompanyPicker = false;
  }

  switchCompany(id: number): void {
    this.authService.setActiveCompanyId(id);
    this.showCompanyPicker = false;
  }

  goHome(): void { this.router.navigate(['/welcome']); }
  logout(): void { this.authService.logout(); this.router.navigate(['/login']); }
}
