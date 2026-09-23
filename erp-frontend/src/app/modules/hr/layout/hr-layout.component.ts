import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { ThemeService } from '../../../core/services/theme.service';
import { AppBrandingService } from '../../../core/services/app-branding.service';

@Component({
  selector: 'app-hr-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="hr-layout">
      <nav class="hr-navbar">
        <div class="hr-brand" (click)="goHome()">
          <span class="material-icons">chevron_left</span>
          <div class="brand-icon"><span class="material-icons">badge</span></div>
          <span class="brand-label">Ressources Humaines</span>
        </div>
        <div class="nav-divider"></div>

        <button type="button" class="nav-hamburger" [class.active]="mobileMenuOpen" (click)="mobileMenuOpen = !mobileMenuOpen" aria-label="Ouvrir le menu">
          <span class="material-icons">{{ mobileMenuOpen ? 'close' : 'menu' }}</span>
        </button>

        <div class="nav-mobile-panel" [class.open]="mobileMenuOpen">
          <div class="hr-nav nav-links">
            @for (item of navItems; track item.route) {
              <a class="nav-link" [class.active]="isActive(item.route)" (click)="navigateTo(item.route)">
                <span class="material-icons">{{ item.icon }}</span>
                {{ item.label }}
              </a>
            }
          </div>
          <div class="hr-user nav-right">
            <div class="user-badge"><span class="user-initials">{{ authService.getUserInitials() }}</span></div>
            <span class="user-name">{{ authService.getUserDisplayName() }}</span>
            <button class="btn-icon-nav" (click)="themeService.toggle()" [title]="themeService.isDark() ? 'Mode jour' : 'Mode nuit'">
              <span class="material-icons">{{ themeService.isDark() ? 'light_mode' : 'dark_mode' }}</span>
            </button>
            <button class="btn-icon-nav" (click)="logout()" title="Déconnexion"><span class="material-icons">logout</span></button>
          </div>
        </div>
      </nav>
      @if (mobileMenuOpen) {
        <div class="nav-backdrop" (click)="mobileMenuOpen = false"></div>
      }
      <main class="hr-content"><router-outlet /></main>
    </div>
  `,
  styles: [`
    @use '../../../shared/styles/navbar-mobile' as navm;

    $hr-color: #7C3AED;

    .hr-layout { min-height: 100vh; display: flex; flex-direction: column; background: var(--bg-page); }

    .hr-navbar {
      display: flex; align-items: center; gap: 0; height: 50px;
      background: var(--navbar-bg); color: white; padding: 0 14px; flex-shrink: 0;
      box-shadow: 0 1px 0 var(--navbar-border), 0 2px 10px rgba(0,0,0,0.22);
      position: sticky; top: 0; z-index: 50;
    }

    .hr-brand {
      display: flex; align-items: center; gap: 8px; cursor: pointer; padding: 6px 10px;
      border-radius: var(--radius-sm); transition: var(--ease); flex-shrink: 0;
      &:hover { background: var(--navbar-hover); }
      > .material-icons { font-size: 17px; opacity: 0.55; }
    }
    .brand-icon {
      width: 26px; height: 26px; background: $hr-color;
      border-radius: 6px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
      .material-icons { font-size: 15px; color: white; }
    }
    .brand-label { font-size: 13.5px; font-weight: 600; color: white; font-family: 'Inter', 'Roboto', sans-serif; }

    .nav-divider { width: 1px; height: 26px; background: var(--navbar-border); margin: 0 10px; }

    .hr-nav {
      display: flex; align-items: center; gap: 2px; flex: 1; overflow-x: auto;
      scrollbar-width: none;
      &::-webkit-scrollbar { display: none; }
    }
    .nav-link {
      display: flex; align-items: center; gap: 6px; padding: 5px 12px;
      border-radius: var(--radius-sm); font-size: 13px; color: var(--navbar-text);
      cursor: pointer; text-decoration: none; transition: var(--ease); white-space: nowrap;
      font-family: 'Inter', 'Roboto', sans-serif;
      .material-icons { font-size: 15px; }
      &:hover { background: var(--navbar-hover); color: white; }
      &.active {
        background: rgba(124, 58, 237, 0.2); color: white; font-weight: 500;
        border-bottom: 2px solid $hr-color;
      }
    }

    .hr-user {
      display: flex; align-items: center; gap: 8px; margin-left: auto;
    }
    .user-badge {
      width: 28px; height: 28px; background: $hr-color;
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      font-size: 10.5px; font-weight: 700; color: white; flex-shrink: 0;
    }
    .user-name { font-size: 12.5px; color: var(--navbar-text); }

    .btn-icon-nav {
      background: none; border: 1px solid var(--navbar-border); color: rgba(255,255,255,.5);
      cursor: pointer; padding: 5px 8px; border-radius: var(--radius-sm);
      display: flex; align-items: center; transition: var(--ease);
      .material-icons { font-size: 17px; }
      &:hover { background: var(--navbar-hover); color: white; }
    }

    .hr-content { flex: 1; overflow-y: auto; padding: 22px; background: var(--bg-page); }

    @include navm.navbar-mobile-menu;

    @media (max-width: 400px) {
      .brand-label { display: none; }
    }
    @media (max-width: 768px) {
      .hr-content { padding: 12px; }
    }
  `]
})
export class HrLayoutComponent implements OnInit {
  navItems: any[] = [];
  mobileMenuOpen = false;

  constructor(public authService: AuthService, public router: Router,
              public themeService: ThemeService, public branding: AppBrandingService) {}

  ngOnInit(): void { this.navItems = this.buildNav(); }

  private buildNav(): any[] {
    const has = (r: string, a: string) => this.authService.hasPermission('RH', r, a) || this.authService.isPrivileged();
    const items: any[] = [];
    if (has('EMPLOYES', 'VIEW')) items.push({ label: 'Employés', icon: 'groups', route: '/hr/employees' });
    if (has('EMPLOYES', 'VIEW')) items.push({ label: 'Organisation', icon: 'account_tree', route: '/hr/organisation' });
    if (has('CONTRATS', 'VIEW')) items.push({ label: 'Contrats', icon: 'description', route: '/hr/contracts' });
    if (has('BULLETINS', 'VIEW')) items.push({ label: 'Bulletins', icon: 'receipt_long', route: '/hr/payslips' });
    if (has('BULLETINS', 'VIEW')) items.push({ label: 'Lots de paie', icon: 'event_repeat', route: '/hr/runs' });
    if (has('CONGES', 'VIEW')) items.push({ label: 'Congés', icon: 'beach_access', route: '/hr/leaves' });
    if (has('CONFIG_PAIE', 'VIEW')) items.push({ label: 'Config. paie', icon: 'tune', route: '/hr/config' });
    return items;
  }

  isActive(route: string): boolean { return this.router.url.startsWith(route.split('?')[0]); }
  navigateTo(route: string): void { this.mobileMenuOpen = false; this.router.navigate([route]); }
  goHome(): void { this.mobileMenuOpen = false; this.router.navigate(['/welcome']); }
  logout(): void { this.mobileMenuOpen = false; this.authService.logout(); this.router.navigate(['/login']); }
}
