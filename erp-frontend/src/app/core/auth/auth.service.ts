import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Permission } from '../../modules/config/services/config.service';

export interface AuthSession {
  token: string;
  userId: number;
  username: string;
  fullName: string;
  roleCode: string;
  roleLabel: string;
  mustChangePassword: boolean;
  permissions?: Permission[];
}

const PRIVILEGED_ROLES = ['SUPER_ADMIN', 'ADMIN'];

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = `${environment.apiUrl}/api/auth`;
  private SESSION_KEY = 'erp_session';
  private ACTIVE_COMPANY_KEY = 'erp_active_company';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<AuthSession> {
    return this.http.post<AuthSession>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(session => localStorage.setItem(this.SESSION_KEY, JSON.stringify(session)))
    );
  }

  logout(): void {
    localStorage.removeItem(this.SESSION_KEY);
    localStorage.removeItem(this.ACTIVE_COMPANY_KEY);
  }

  getToken(): string | null {
    return this.getSession()?.token ?? null;
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;
    try {
      const payload = this.decodeToken(token);
      return !payload?.exp || payload.exp * 1000 > Date.now();
    } catch { return false; }
  }

  getSession(): AuthSession | null {
    const raw = localStorage.getItem(this.SESSION_KEY);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }

  /** companyId actif pour toutes les requêtes API (spoke mono-agence, défaut = 1) */
  getCompanyId(): number {
    const active = localStorage.getItem(this.ACTIVE_COMPANY_KEY);
    if (active) {
      const parsed = +active;
      if (!isNaN(parsed) && parsed > 0) return parsed;
    }
    return 1;
  }

  setActiveCompanyId(id: number): void {
    localStorage.setItem(this.ACTIVE_COMPANY_KEY, String(id));
  }

  /** Retourne null — informations d'entreprise à récupérer via ConfigService si besoin */
  getActiveCompany(): { id: number; name: string; sigle: string } | null {
    return null;
  }

  getRoleCode(): string {
    return this.getSession()?.roleCode ?? '';
  }

  isPrivileged(): boolean {
    return PRIVILEGED_ROLES.includes(this.getRoleCode());
  }

  isSuperAdmin(): boolean { return this.getRoleCode() === 'SUPER_ADMIN'; }
  isAdmin(): boolean { return this.isPrivileged(); }
  canDelete(): boolean { return this.isPrivileged(); }
  canImport(): boolean { return this.isPrivileged(); }
  canManageConfig(): boolean { return this.isPrivileged(); }
  canManageUsers(): boolean { return this.isPrivileged(); }

  hasPermission(module: string, resource: string, action: string): boolean {
    const session = this.getSession();
    if (!session) return false;
    if (this.isPrivileged()) return true;
    return (session.permissions ?? []).some(
      p => p.module === module && p.resource === resource && p.action === action
    );
  }

  hasAnyModulePermission(module: string): boolean {
    const session = this.getSession();
    if (!session) return false;
    if (this.isPrivileged()) return true;
    return (session.permissions ?? []).some(p => p.module === module);
  }

  getUserDisplayName(): string {
    const s = this.getSession();
    return s?.fullName || s?.username || 'Utilisateur';
  }

  getUserInitials(): string {
    const name = this.getUserDisplayName();
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'US';
  }

  private decodeToken(token: string): any {
    try {
      const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(decodeURIComponent(
        atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')
      ));
    } catch { return null; }
  }
}
