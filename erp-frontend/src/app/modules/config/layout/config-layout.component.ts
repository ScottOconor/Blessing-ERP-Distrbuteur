import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-config-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './config-layout.component.html',
  styleUrl: './config-layout.component.scss'
})
export class ConfigLayoutComponent {
  mobileMenuOpen = false;

  constructor(public authService: AuthService, public router: Router, public themeService: ThemeService) {}

  get navItems() {
    const items: { label: string; icon: string; route: string; adminOnly?: boolean; visible?: boolean }[] = [
      { label: 'Mon entreprise',        icon: 'business',             route: '/config/company',         adminOnly: true },
      { label: 'Agences distantes',    icon: 'share',                route: '/config/remote-agencies', adminOnly: true },
      { label: 'Utilisateurs',         icon: 'manage_accounts',      route: '/config/users',           adminOnly: true },
      { label: 'Rôles',                icon: 'admin_panel_settings', route: '/config/roles',           adminOnly: true },
      { label: 'Clôture d\'exercice',  icon: 'lock_clock',           route: '/config/fiscal-closure',
        visible: this.authService.hasPermission('COMPTABILITE', 'ECRITURES', 'VIEW') },
      { label: 'Changer mot de passe', icon: 'lock_reset',           route: '/config/change-password' },
      { label: 'Supervision',          icon: 'manage_search',        route: '/config/supervision',     adminOnly: true },
      { label: 'Sauvegarde & Restore', icon: 'backup',               route: '/config/backup',          adminOnly: true },
      { label: 'Exportation',          icon: 'file_download',        route: '/config/export',          adminOnly: true },
    ];
    return items.filter(i => (i.visible ?? true) && (!i.adminOnly || this.authService.canManageUsers()));
  }

  isActive(route: string): boolean {
    return this.router.url.startsWith(route);
  }

  navigateTo(route: string): void { this.mobileMenuOpen = false; this.router.navigate([route]); }
  goHome(): void { this.mobileMenuOpen = false; this.router.navigate(['/welcome']); }
  logout(): void { this.mobileMenuOpen = false; this.authService.logout(); this.router.navigate(['/login']); }
}
