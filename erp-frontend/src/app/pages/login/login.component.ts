import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { AppBrandingService } from '../../core/services/app-branding.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';
  loading = false;
  errorMessage = '';
  showPassword = false;

  constructor(private authService: AuthService, private router: Router, public branding: AppBrandingService) {
    if (this.authService.isLoggedIn()) {
      this.redirectAfterLogin();
    }
  }

  private redirectAfterLogin(): void {
    this.router.navigate(['/welcome']);
  }

  onSubmit(): void {
    if (!this.username || !this.password) {
      this.errorMessage = 'Veuillez saisir vos identifiants.';
      return;
    }
    this.loading = true;
    this.errorMessage = '';

    this.authService.login(this.username, this.password).subscribe({
      next: (session) => {
        this.loading = false;
        this.branding.apply();
        if (session.mustChangePassword) {
          this.router.navigate(['/config/change-password']);
        } else {
          this.redirectAfterLogin();
        }
      },
      error: (err) => {
        this.loading = false;
        if (err.status === 401) {
          this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
        } else if (err.status === 0) {
          this.errorMessage = 'Impossible de contacter le serveur.';
        } else {
          this.errorMessage = err.error?.message || 'Une erreur est survenue.';
        }
      }
    });
  }

  togglePassword(): void { this.showPassword = !this.showPassword; }
}
