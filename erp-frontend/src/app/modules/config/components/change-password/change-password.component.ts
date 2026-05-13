import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../core/auth/auth.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="cp-wrap">
      <div class="cp-card">
        <div class="cp-icon"><span class="material-icons">lock_reset</span></div>
        <h2>Changer le mot de passe</h2>
        @if (authService.getSession()?.mustChangePassword) {
          <p class="cp-notice">Vous devez définir un nouveau mot de passe avant de continuer.</p>
        }
        @if (successMsg) { <div class="alert alert-success">{{ successMsg }}</div> }
        @if (errorMsg)   { <div class="alert alert-danger">{{ errorMsg }}</div> }

        <div class="form-group">
          <label>Mot de passe actuel</label>
          <input type="password" [(ngModel)]="current" class="form-control" />
        </div>
        <div class="form-group">
          <label>Nouveau mot de passe</label>
          <input type="password" [(ngModel)]="newPwd" class="form-control" />
        </div>
        <div class="form-group">
          <label>Confirmer le nouveau mot de passe</label>
          <input type="password" [(ngModel)]="confirm" class="form-control" />
        </div>
        <button class="btn-primary full-width" (click)="save()" [disabled]="saving">
          <span class="material-icons">save</span>
          {{ saving ? 'Enregistrement...' : 'Enregistrer' }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .cp-wrap { display:flex; justify-content:center; align-items:center; min-height:60vh; }
    .cp-card { background:white; border-radius:12px; padding:32px; width:400px; box-shadow:0 4px 20px rgba(0,0,0,0.1); text-align:center; }
    .cp-icon { margin-bottom:16px; .material-icons { font-size:48px; color:#2c3e50; } }
    h2 { font-size:20px; font-weight:600; margin-bottom:8px; color:#212529; }
    .cp-notice { color:#856404; background:#fff3cd; border:1px solid #ffecb5; padding:10px; border-radius:6px; font-size:13px; margin-bottom:16px; }
    .form-group { text-align:left; margin-bottom:16px; label { font-size:13px; font-weight:500; display:block; margin-bottom:4px; } }
    .form-control { width:100%; padding:8px 12px; border:1px solid #dee2e6; border-radius:6px; font-size:14px; box-sizing:border-box; }
    .full-width { width:100%; display:flex; justify-content:center; }
    .alert { padding:10px 14px; border-radius:6px; margin-bottom:16px; font-size:13px; text-align:left; }
    .alert-success { background:#d1f0e8; color:#0a5c45; }
    .alert-danger { background:#fde8e8; color:#721c24; }
    .btn-primary { display:inline-flex; align-items:center; gap:6px; padding:10px 20px; background:#2c3e50; color:white; border:none; border-radius:6px; font-size:14px; font-weight:500; cursor:pointer; &:disabled { opacity:0.6; } .material-icons { font-size:18px; } }
  `]
})
export class ChangePasswordComponent {
  current = '';
  newPwd = '';
  confirm = '';
  saving = false;
  errorMsg = '';
  successMsg = '';

  constructor(
    private http: HttpClient,
    public authService: AuthService,
    private router: Router
  ) {}

  save(): void {
    if (!this.current || !this.newPwd || !this.confirm) {
      this.errorMsg = 'Tous les champs sont requis'; return;
    }
    if (this.newPwd !== this.confirm) {
      this.errorMsg = 'Les mots de passe ne correspondent pas'; return;
    }
    if (this.newPwd.length < 6) {
      this.errorMsg = 'Le mot de passe doit contenir au moins 6 caractères'; return;
    }
    this.saving = true;
    this.errorMsg = '';
    const api = `${environment.apiUrl}/api/config/change-password`;
    this.http.post(api, { currentPassword: this.current, newPassword: this.newPwd }).subscribe({
      next: () => {
        this.saving = false;
        this.successMsg = 'Mot de passe changé avec succès';
        // Mettre à jour la session locale
        const session = this.authService.getSession();
        if (session) { session.mustChangePassword = false; localStorage.setItem('erp_session', JSON.stringify(session)); }
        setTimeout(() => this.router.navigate(['/welcome']), 1500);
      },
      error: (e) => { this.saving = false; this.errorMsg = e.error?.message || 'Mot de passe actuel incorrect'; }
    });
  }
}
