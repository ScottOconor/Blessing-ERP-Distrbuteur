import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CompanyInfo } from '../../modules/config/services/config.service';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  private readonly COMPANY_KEY = 'erp_company';
  private readonly LOGO_KEY    = 'erp_company_logo';
  private readonly api = `${environment.apiUrl}/api/config/companies`;

  constructor(private http: HttpClient) {}

  load(companyId = 1): Observable<CompanyInfo> {
    return this.http.get<CompanyInfo>(`${this.api}/${companyId}`).pipe(
      tap(c => {
        localStorage.setItem(this.COMPANY_KEY, JSON.stringify(c));
        this.prefetchLogo(companyId);
      })
    );
  }

  getCached(): CompanyInfo | null {
    const raw = localStorage.getItem(this.COMPANY_KEY);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }

  save(companyId: number, c: CompanyInfo): Observable<CompanyInfo> {
    return this.http.put<CompanyInfo>(`${this.api}/${companyId}`, c).pipe(
      tap(updated => localStorage.setItem(this.COMPANY_KEY, JSON.stringify(updated)))
    );
  }

  uploadLogo(companyId: number, file: File): Observable<void> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<void>(`${this.api}/${companyId}/logo`, fd).pipe(
      tap(() => this.prefetchLogo(companyId))
    );
  }

  uploadAppLogo(companyId: number, file: File): Observable<void> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<void>(`${this.api}/${companyId}/app-logo`, fd);
  }

  /** URL du logo entreprise (factures) */
  getLogoUrl(companyId = 1): string {
    return `${environment.apiUrl}/api/config/companies/${companyId}/logo`;
  }

  /** URL du logo app (favicon + sidebar) */
  getAppLogoUrl(companyId = 1): string {
    return `${environment.apiUrl}/api/config/companies/${companyId}/app-logo`;
  }

  /** Data URL base64 du logo mis en cache — pour l'embarquer dans les impressions */
  getCachedLogoDataUrl(): string {
    return localStorage.getItem(this.LOGO_KEY) ?? '';
  }

  clearCache(): void {
    localStorage.removeItem(this.COMPANY_KEY);
    localStorage.removeItem(this.LOGO_KEY);
    this.prefetchLogo(1);
  }

  /** Télécharge le logo et le stocke en base64 dans localStorage */
  private prefetchLogo(companyId: number): void {
    const url = `${environment.apiUrl}/api/config/companies/${companyId}/logo`;
    fetch(url)
      .then(r => {
        if (!r.ok) { localStorage.removeItem(this.LOGO_KEY); return; }
        return r.blob();
      })
      .then(blob => {
        if (!blob) return;
        const reader = new FileReader();
        reader.onload = () => localStorage.setItem(this.LOGO_KEY, reader.result as string);
        reader.readAsDataURL(blob);
      })
      .catch(() => localStorage.removeItem(this.LOGO_KEY));
  }
}
