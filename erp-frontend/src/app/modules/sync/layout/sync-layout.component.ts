import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { ThemeService } from '../../../core/services/theme.service';
import { AppBrandingService } from '../../../core/services/app-branding.service';

@Component({
  selector: 'app-sync-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './sync-layout.component.html',
  styleUrl: './sync-layout.component.scss'
})
export class SyncLayoutComponent implements OnInit {
  userName = '';
  userInitials = '';
  activeDropdown: string | null = null;
  mobileMenuOpen = false;

  navItems = [
    { id: 'hub', label: 'Synchronisation Hub', icon: 'sync', route: '/sync/hub' }
  ];

  constructor(
    private authService: AuthService,
    public router: Router,
    public themeService: ThemeService, public branding: AppBrandingService
  ) {}

  ngOnInit(): void {
    this.userName     = this.authService.getUserDisplayName();
    this.userInitials = this.authService.getUserInitials();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent): void {
    if (!(e.target as HTMLElement).closest('.nav-item-dropdown')) this.activeDropdown = null;
  }

  isRouteActive(route: string): boolean {
    return this.router.url === route || this.router.url.startsWith(route + '/');
  }

  goHome(): void  { this.mobileMenuOpen = false; this.router.navigate(['/welcome']); }
  logout(): void  { this.mobileMenuOpen = false; this.authService.logout(); this.router.navigate(['/login']); }
  go(r: string):  void { this.mobileMenuOpen = false; this.router.navigateByUrl(r); }
}
