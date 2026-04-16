import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = `http://${window.location.hostname}:8085/api/auth`;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          const userData = response.user || { username };
          localStorage.setItem('user', JSON.stringify(userData));
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;
    try {
      const payload = this.decodeToken(token);
      if (!payload || !payload.exp) return true;
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  getCurrentUser(): any {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try { 
        return JSON.parse(userStr);
      } catch (e) {
        return null;
      }
    }
    
    const token = this.getToken();
    if (token) {
      try { 
        return this.decodeToken(token);
      } catch (e) {
        return null;
      }
    }
    return null;
  }

  getCompanyId(): number {
    const user = this.getCurrentUser();
    return user?.companyId || user?.company_id || 1;
  }

  getUserDisplayName(): string {
    const user = this.getCurrentUser();
    return user?.name || user?.username || user?.sub || 'Utilisateur';
  }

  getUserInitials(): string {
    const name = this.getUserDisplayName();
    return name.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2) || 'US';
  }

  private decodeToken(token: string): any {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')
      );
      return JSON.parse(jsonPayload);
    } catch {
      return null;
    }
  }
}
