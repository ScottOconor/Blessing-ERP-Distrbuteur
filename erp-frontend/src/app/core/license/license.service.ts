import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export type LicenseStatusCode =
  | 'NOT_ACTIVATED'
  | 'PENDING'
  | 'ACTIVE'
  | 'EXPIRED_READONLY'
  | 'BLOCKED_FINGERPRINT_MISMATCH'
  | 'INVALID';

export interface LicenseSelfStatus {
  status: LicenseStatusCode;
  expiresAt: string | null;
  spokeId: string;
  contactEmail: string | null;
  contactPhone: string | null;
  message: string | null;
}

/**
 * État de licence de cette installation. Toujours interrogé en direct (jamais de cache
 * mémorisé au-delà d'une navigation) car il peut changer à tout moment côté Hub
 * (révocation, réémission) indépendamment de toute action de l'utilisateur ici.
 */
@Injectable({ providedIn: 'root' })
export class LicenseService {
  private api = `${environment.apiUrl}/api/license`;
  private last: LicenseSelfStatus | null = null;

  constructor(private http: HttpClient) {}

  fetchStatus(): Observable<LicenseSelfStatus> {
    return this.http.get<LicenseSelfStatus>(`${this.api}/self-status`).pipe(
      tap(status => (this.last = status))
    );
  }

  requestActivation(contactEmail: string, contactPhone: string): Observable<LicenseSelfStatus> {
    return this.http
      .post<LicenseSelfStatus>(`${this.api}/request-activation`, { contactEmail, contactPhone })
      .pipe(tap(status => (this.last = status)));
  }

  /** Dernier statut connu (mis à jour par fetchStatus/requestActivation ou par le licenseInterceptor). */
  getLastKnown(): LicenseSelfStatus | null {
    return this.last;
  }

  /** Appelé par licenseInterceptor quand un 403 backend révèle un changement d'état non encore vu ici.
   *  contactEmail/contactPhone : envoyés par LicenseEnforcementFilter depuis son propre cache, donc
   *  disponibles dès le tout premier blocage — pas besoin d'attendre un fetchStatus() préalable. */
  applyKnownStatus(
    status: LicenseStatusCode,
    message: string | null,
    contactEmail: string | null = null,
    contactPhone: string | null = null
  ): void {
    this.last = {
      ...(this.last ?? { expiresAt: null, spokeId: '', contactEmail: null, contactPhone: null }),
      status, message,
      ...(contactEmail ? { contactEmail } : {}),
      ...(contactPhone ? { contactPhone } : {})
    };
  }
}
