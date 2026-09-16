import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

// ── Config DTOs ───────────────────────────────────────────────────────────────
export interface EnlevementClientConfig {
  id?: number;
  partnerId: number;
  partnerName?: string;
  montant: number;
  supplementAccountCode?: string;
}

export interface EnlevementConfig {
  id?: number;
  categoryId: number;
  categoryName?: string;
  montantFixe: number;
  coutEnlevement?: number;
  companyId: number;
  active?: boolean;
  clients?: EnlevementClientConfig[];
}

// ── Rapport DTOs ──────────────────────────────────────────────────────────────
export interface EnlevementRapportLine {
  categoryName: string;
  quantite: number;
  montantUnitaire: number;
  montantTotal: number;
}

export interface EnlevementRapportArticleLine {
  productCode?: string;
  productName?: string;
  categoryName?: string;
  quantite: number;
  montantUnitaire: number;
  montantTotal: number;
}

export interface EnlevementRapportEntry {
  partnerId: number;
  partnerName: string;
  lines: EnlevementRapportLine[];
  articleLines?: EnlevementRapportArticleLine[];
  totalAmount: number;
}

@Injectable({ providedIn: 'root' })
export class EnlevementService {
  private base = `${environment.apiUrl}/api/enlevements`;

  constructor(private http: HttpClient) {}

  // ── Config CRUD ───────────────────────────────────────────────────────────
  getAll(companyId: number): Observable<EnlevementConfig[]> {
    return this.http.get<EnlevementConfig[]>(this.base, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  save(dto: EnlevementConfig): Observable<EnlevementConfig> {
    return this.http.post<EnlevementConfig>(this.base, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }

  // ── Rapport ───────────────────────────────────────────────────────────────
  getRapport(companyId: number, dateFrom: string, dateTo: string): Observable<EnlevementRapportEntry[]> {
    const params = new HttpParams()
      .set('companyId', companyId)
      .set('dateFrom', dateFrom)
      .set('dateTo', dateTo);
    return this.http.get<EnlevementRapportEntry[]>(`${this.base}/rapport`, { params });
  }

  getInvoiceCosts(invoiceId: number): Observable<EnlevementRapportLine[]> {
    return this.http.get<EnlevementRapportLine[]>(`${this.base}/invoice/${invoiceId}/costs`);
  }
}
