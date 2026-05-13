import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService, AuthSession } from '../../core/auth/auth.service';
import { ConfigService, GroupDashboard } from '../../modules/config/services/config.service';

@Component({
  selector: 'app-group-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-home.component.html',
  styleUrl: './group-home.component.scss'
})
export class GroupHomeComponent implements OnInit {
  session: AuthSession | null = null;
  dashboard: GroupDashboard | null = null;
  loading = false;
  currentDate = new Date();

  get isGroupMode(): boolean { return !!this.session?.groupId; }

  get spaceName(): string {
    return this.session?.groupName || this.session?.companyName || 'Espace';
  }

  get companiesList(): { id: number; name: string; sigle: string }[] {
    if (this.session?.companies?.length) return this.session.companies;
    if (this.session?.companyId) {
      return [{ id: this.session.companyId, name: this.session.companyName ?? '', sigle: '' }];
    }
    return [];
  }

  constructor(
    public authService: AuthService,
    private configService: ConfigService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.session = this.authService.getSession();
    if (!this.authService.isCentralized()) {
      this.router.navigate(['/welcome']);
      return;
    }
    this.loadDashboard();
  }

  loadDashboard(): void {
    const groupId = this.session?.groupId;
    const companyId = this.session?.companyId;
    this.loading = true;
    const obs$ = groupId
      ? this.configService.getGroupDashboard(groupId)
      : companyId
        ? this.configService.getCompanyDashboard(companyId)
        : null;
    if (!obs$) { this.loading = false; return; }
    obs$.subscribe({
      next: (d) => { this.dashboard = d; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  enterCompany(company: { id: number; name: string; sigle: string }): void {
    this.authService.setActiveCompanyId(company.id);
    this.router.navigate(['/welcome']);
  }

  getGreeting(): string {
    const h = new Date().getHours();
    if (h < 12) return 'Bonjour';
    if (h < 18) return 'Bon après-midi';
    return 'Bonsoir';
  }

  formatAmount(n: number): string {
    return new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(n ?? 0);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
