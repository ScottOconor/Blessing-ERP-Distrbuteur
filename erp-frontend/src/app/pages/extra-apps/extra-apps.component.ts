import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { ThemeService } from '../../core/services/theme.service';
import { AppBrandingService } from '../../core/services/app-branding.service';
import { ModuleService, BUSINESS_MODULES, BusinessModuleMeta } from '../../core/services/module.service';

interface ExtraApp {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  route: string;
  available: boolean;
}

interface ModuleCard extends BusinessModuleMeta {
  installed: boolean;
}

@Component({
  selector: 'app-extra-apps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './extra-apps.component.html',
  styleUrl: './extra-apps.component.scss'
})
export class ExtraAppsComponent implements OnInit {

  apps: ExtraApp[] = [
    {
      id: 'sync',
      name: 'Hub & Spoke',
      description: 'Synchronisation des opérations vers le Hub central — suivi par module',
      icon: 'hub',
      color: '#7C3AED',
      route: '/sync',
      available: true
    },
    {
      id: 'config',
      name: 'Configuration',
      description: 'Groupes, entreprises, utilisateurs, rôles & permissions',
      icon: 'admin_panel_settings',
      color: '#64748B',
      route: '/config',
      available: true
    },
  ];

  moduleCards: ModuleCard[] = [];
  toggling: Record<string, boolean> = {};

  constructor(
    private router: Router,
    public authService: AuthService,
    public themeService: ThemeService,
    public branding: AppBrandingService,
    private moduleService: ModuleService
  ) {}

  ngOnInit(): void {
    this.loadModules();
  }

  loadModules(): void {
    this.moduleService.getModules(this.authService.getCompanyId()).subscribe(states => {
      this.moduleCards = BUSINESS_MODULES.map(m => ({
        ...m,
        installed: states.find(s => s.code === m.code)?.installed ?? true
      }));
    });
  }

  get canManageModules(): boolean {
    return this.authService.hasPermission('CONFIG', 'MODULES', 'EDIT') || this.authService.isPrivileged();
  }

  navigate(app: ExtraApp): void {
    if (app.available) this.router.navigate([app.route]);
  }

  openModule(card: ModuleCard): void {
    if (card.installed) this.router.navigate([card.route]);
  }

  toggleModule(card: ModuleCard, event: Event): void {
    event.stopPropagation();
    if (!this.canManageModules || this.toggling[card.code]) return;
    const nextState = !card.installed;
    const verb = nextState ? 'installer' : 'désinstaller';
    if (!confirm(`Voulez-vous ${verb} le module « ${card.name} » ?`)) return;

    this.toggling[card.code] = true;
    this.moduleService.setInstalled(this.authService.getCompanyId(), card.code, nextState).subscribe({
      next: (updated) => { card.installed = updated.installed; this.toggling[card.code] = false; },
      error: () => { this.toggling[card.code] = false; }
    });
  }

  back(): void {
    this.router.navigate(['/welcome']);
  }
}
