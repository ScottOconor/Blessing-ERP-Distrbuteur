import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { ThemeService } from '../../core/services/theme.service';
import { AppBrandingService } from '../../core/services/app-branding.service';
import { ModuleService, BUSINESS_MODULES, BusinessModuleMeta } from '../../core/services/module.service';

interface Module extends BusinessModuleMeta {
  available: boolean;
}

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit {
  userName = 'Bienvenue';
  userInitials = 'BV';
  currentDate = new Date();
  showModules = true;

  modules: Module[] = [];

  userRole = '';

  constructor(
    public authService: AuthService, private router: Router, public themeService: ThemeService,
    public branding: AppBrandingService, private moduleService: ModuleService
  ) {}

  ngOnInit(): void {
    this.loadUserInfo();
    this.moduleService.getModules(this.authService.getCompanyId()).subscribe({
      next: () => this.buildModules(),
      error: () => this.buildModules() // fail-open : si l'appel échoue, tout reste affiché
    });
  }

  private loadUserInfo(): void {
    const session = this.authService.getSession();
    const displayName = this.authService.getUserDisplayName();
    if (displayName && displayName !== 'Utilisateur') {
      this.userName = displayName;
    }

    const initials = this.authService.getUserInitials();
    if (initials && initials.length > 0) {
      this.userInitials = initials;
    }

    this.userRole = session?.roleLabel || session?.roleCode || '';
  }

  private buildModules(): void {
    this.modules = BUSINESS_MODULES
      .filter(m => {
        if (!this.moduleService.isInstalledCached(m.code)) return false;
        if (this.authService.isPrivileged()) return true;
        return this.authService.hasAnyModulePermission(m.code);
      })
      .map(m => ({ ...m, available: true }));
  }

  goToExtraApps(): void {
    this.router.navigate(['/extra-apps']);
  }

  navigateTo(module: Module): void {
    if (module.available) {
      this.router.navigate([module.route]);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bonjour';
    if (hour < 18) return 'Bon après-midi';
    return 'Bonsoir';
  }
}
