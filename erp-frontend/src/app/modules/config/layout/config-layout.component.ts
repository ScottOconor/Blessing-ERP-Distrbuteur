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
    const can = (res: string) => this.authService.hasPermission('CONFIG', res, 'VIEW');
    // Utilisateurs, rôles et sauvegarde restent réservés aux administrateurs côté serveur.
    const admin = this.authService.canManageUsers();
    const items: { label: string; icon: string; route: string; visible?: boolean }[] = [
      { label: 'Mon entreprise',        icon: 'business',             route: '/config/company',         visible: can('ENTREPRISES') },
      { label: 'Agences distantes',    icon: 'share',                route: '/config/remote-agencies', visible: can('AGENCES') },
      { label: 'Utilisateurs',         icon: 'manage_accounts',      route: '/config/users',           visible: admin },
      { label: 'Rôles',                icon: 'admin_panel_settings', route: '/config/roles',           visible: admin },
      { label: 'Clôture d\'exercice',  icon: 'lock_clock',           route: '/config/fiscal-closure',
        visible: this.authService.hasPermission('COMPTABILITE', 'ECRITURES', 'VIEW') },
      { label: 'Changer mot de passe', icon: 'lock_reset',           route: '/config/change-password' },
      { label: 'Supervision',          icon: 'manage_search',        route: '/config/supervision',     visible: can('AUDIT') },
      { label: 'Sauvegarde & Restore', icon: 'backup',               route: '/config/backup',          visible: admin },
      { label: 'Exportation',          icon: 'file_download',        route: '/config/export',          visible: can('EXPORT') },
    ];
    return items.filter(i => i.visible ?? true);
  }

  isActive(route: string): boolean {
    return this.router.url.startsWith(route);
  }

  navigateTo(route: string): void { this.mobileMenuOpen = false; this.router.navigate([route]); }
  goHome(): void { this.mobileMenuOpen = false; this.router.navigate(['/welcome']); }
  logout(): void { this.mobileMenuOpen = false; this.authService.logout(); this.router.navigate(['/login']); }
}
