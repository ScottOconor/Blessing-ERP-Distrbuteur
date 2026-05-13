import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

interface Module {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  route: string;
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

  private allModules: Module[] = [
    {
      id: 'accounting',
      name: 'Comptabilité',
      description: 'Journaux, écritures, rapports financiers',
      icon: 'calculate',
      color: '#714B67',
      route: '/accounting',
      available: true
    },
    {
      id: 'sales',
      name: 'Ventes',
      description: 'Bons de commande, factures clients',
      icon: 'point_of_sale',
      color: '#017E84',
      route: '/sales',
      available: true
    },
    {
      id: 'purchases',
      name: 'Achats',
      description: 'Commandes fournisseurs, réceptions et mise à jour du stock',
      icon: 'local_shipping',
      color: '#00A09D',
      route: '/purchases',
      available: true
    },
    {
      id: 'stock',
      name: 'Stock',
      description: 'Articles, entrepôts, réceptions, livraisons, transferts inter-dépôts',
      icon: 'inventory_2',
      color: '#2c7be5',
      route: '/stock',
      available: true
    },
    {
      id: 'config',
      name: 'Configuration',
      description: 'Groupes, entreprises, utilisateurs, rôles & permissions',
      icon: 'admin_panel_settings',
      color: '#2c3e50',
      route: '/config',
      available: true
    },
    {
      id: 'hr',
      name: 'Ressources Humaines',
      description: 'Employés, congés, paie',
      icon: 'people',
      color: '#16C79A',
      route: '/hr',
      available: false
    }
  ];

  userRole = '';

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserInfo();
    this.buildModules();
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
    // Correspondance id module → code permission
    const modulePermMap: Record<string, string> = {
      accounting: 'COMPTABILITE',
      sales:      'VENTES',
      purchases:  'ACHATS',
      stock:      'STOCK'
    };

    this.modules = this.allModules
      .filter(m => {
        if (!m.available) return false;
        // CONFIG : toujours visible (au moins le changement de mot de passe)
        if (m.id === 'config') return true;
        const permModule = modulePermMap[m.id];
        if (!permModule) return true;
        // Rôles système (centralisés) : accès total
        if (this.authService.isCentralized()) return true;
        // Rôles custom : doit avoir au moins une permission dans le module
        return this.authService.hasAnyModulePermission(permModule);
      })
      .map(m => {
        if (m.id === 'config') {
          return {
            ...m,
            description: this.authService.canManageUsers()
              ? 'Groupes, entreprises, utilisateurs, rôles & permissions'
              : 'Paramètres & changement de mot de passe'
          };
        }
        return m;
      });
  }

  navigateTo(module: Module): void {
    if (module.available) {
      this.router.navigate([module.route]);
    }
  }

  goToGroupHome(): void {
    this.router.navigate(['/group-home']);
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
