import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface AuditEntry {
  id: number;
  entityType: string;
  entityId: number;
  entityRef: string | null;
  action: string;
  actionLabel: string;
  performedBy: string;
  performedByFullname: string | null;
  performedAt: string;
  details: string | null;
  companyId: number | null;
}

export interface AuditPage {
  content: AuditEntry[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}

@Injectable({ providedIn: 'root' })
export class AuditService {
  private base = `${environment.apiUrl}/api/audit`;

  constructor(private http: HttpClient) {}

  /** Historique complet d'une entité précise */
  forEntity(entityType: string, entityId: number): Observable<AuditEntry[]> {
    const params = new HttpParams()
      .set('entityType', entityType)
      .set('entityId', entityId);
    return this.http.get<AuditEntry[]>(`${this.base}/entity`, { params });
  }

  /** Supervision globale paginée */
  search(companyId: number, options: {
    operator?: string;
    entityType?: string;
    from?: string;
    to?: string;
    page?: number;
    size?: number;
  } = {}): Observable<AuditPage> {
    let params = new HttpParams().set('companyId', companyId);
    if (options.operator)   params = params.set('operator', options.operator);
    if (options.entityType) params = params.set('entityType', options.entityType);
    if (options.from)       params = params.set('from', options.from);
    if (options.to)         params = params.set('to', options.to);
    if (options.page != null) params = params.set('page', options.page);
    if (options.size != null) params = params.set('size', options.size);
    return this.http.get<AuditPage>(`${this.base}/search`, { params });
  }
}
