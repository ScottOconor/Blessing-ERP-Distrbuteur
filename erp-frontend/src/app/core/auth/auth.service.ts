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
  centralized: boolean;
  companyId?: number;
  companyName?: string;
  groupId?: number;
  groupName?: string;
  companies?: { id: number; name: string; sigle: string }[];
  mustChangePassword: boolean;
  /** Permissions granulaires pour les rôles custom */
  permissions?: Permission[];
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = `${environment.apiUrl}/api/auth`;
  private SESSION_KEY = 'erp_session';
  private ACTIVE_COMPANY_KEY = 'erp_active_company';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<AuthSession> {
    return this.http.post<AuthSession>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(session => {
        localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
        // Pour un utilisateur mono-company, on fixe directement la company active
        if (!session.centralized && session.companyId) {
          this.setActiveCompanyId(session.companyId);
        }
      })
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

  /** companyId actif pour toutes les requêtes API */
  getCompanyId(): number {
    const active = localStorage.getItem(this.ACTIVE_COMPANY_KEY);
    if (active) return +active;
    return this.getSession()?.companyId ?? 1;
  }

  setActiveCompanyId(id: number): void {
    localStorage.setItem(this.ACTIVE_COMPANY_KEY, String(id));
  }

  getActiveCompany(): { id: number; name: string; sigle: string } | null {
    const session = this.getSession();
    const activeId = this.getCompanyId();
    if (session?.centralized && session.companies) {
      return session.companies.find(c => c.id === activeId) ?? session.companies[0] ?? null;
    }
    return session?.companyId
      ? { id: session.companyId, name: session.companyName ?? '', sigle: '' }
      : null;
  }

  getRoleCode(): string {
    return this.getSession()?.roleCode ?? '';
  }

  isCentralized(): boolean {
    return this.getSession()?.centralized ?? false;
  }

  isSuperAdmin(): boolean { return this.getRoleCode() === 'SUPER_ADMIN'; }
  isAdmin(): boolean { return ['SUPER_ADMIN','ADMIN'].includes(this.getRoleCode()); }
  canDelete(): boolean { return ['SUPER_ADMIN','ADMIN'].includes(this.getRoleCode()); }
  canImport(): boolean { return ['SUPER_ADMIN','ADMIN','SUPER_AUDITEUR','AUDITEUR'].includes(this.getRoleCode()); }
  canManageConfig(): boolean { return ['SUPER_ADMIN','ADMIN','SUPER_AUDITEUR'].includes(this.getRoleCode()); }
  canManageUsers(): boolean { return ['SUPER_ADMIN','ADMIN'].includes(this.getRoleCode()); }

  /**
   * Vérifie si l'utilisateur a accès à une ressource précise d'un module.
   * Les rôles système centralisés ont toujours accès.
   */
  hasPermission(module: string, resource: string, action: string): boolean {
    const session = this.getSession();
    if (!session) return false;
    if (session.centralized) return true;
    return (session.permissions ?? []).some(
      p => p.module === module && p.resource === resource && p.action === action
    );
  }

  /** Vérifie si l'utilisateur a au moins une permission dans un module donné. */
  hasAnyModulePermission(module: string): boolean {
    const session = this.getSession();
    if (!session) return false;
    if (session.centralized) return true;
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
