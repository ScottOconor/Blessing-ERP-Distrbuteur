import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface Ristourne {
  id?: number;
  partnerId: number;
  partnerName?: string;
  categoryId: number;
  categoryName?: string;
  montantFixe: number;
  montantTTCUnitaire?: number;
  typeRistourne?: string;  // 'brasserie' | 'guinness' | null
  companyId: number;
  active?: boolean;
}

export interface RistournePaiementLine {
  id?: number;
  categoryId: number;
  categoryName?: string;
  quantite: number;
  montantUnitaire: number;
  montantTotal?: number;
  montantTTC?: number;
}

export interface RistourneArticleLine {
  productCode?: string;
  productName?: string;
  categoryName?: string;
  quantite: number;
  montantUnitaire: number;
  montantTotal: number;
}

export interface RistournePaiement {
  id?: number;
  name?: string;
  partnerId: number;
  partnerName?: string;
  date?: string;
  state?: string;
  totalAmount?: number;
  invoiceId?: number;
  invoiceName?: string;
  generatedInvoiceId?: number;
  generatedInvoiceName?: string;
  companyId: number;
  notes?: string;
  typeRistourne?: string;
  createdAt?: string;
  lines: RistournePaiementLine[];
  articleLines?: RistourneArticleLine[];
}

export interface PartnerGroup {
  partnerId: number;
  partnerName: string;
  totalAmount: number;
  paiements: RistournePaiement[];
}

export interface QuarterGroup {
  quarter: number;
  year: number;
  label: string;
  totalAmount: number;
  partners: PartnerGroup[];
}

@Injectable({ providedIn: 'root' })
export class RistourneService {

  private base = `${environment.apiUrl}/api/ristournes`;

  constructor(private http: HttpClient) {}

  // ===== Configuration =====

  getAll(companyId: number): Observable<Ristourne[]> {
    return this.http.get<Ristourne[]>(this.base, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  getByPartner(partnerId: number, companyId: number): Observable<Ristourne[]> {
    return this.http.get<Ristourne[]>(`${this.base}/partner/${partnerId}`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  save(dto: Ristourne): Observable<Ristourne> {
    return this.http.post<Ristourne>(this.base, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }

  // ===== Règlements =====

  getAllPaiements(companyId: number, type?: string): Observable<RistournePaiement[]> {
    let params = new HttpParams().set('companyId', companyId);
    if (type) params = params.set('type', type);
    return this.http.get<RistournePaiement[]>(`${this.base}/paiements`, { params });
  }

  getRapport(companyId: number, dateFrom: string, dateTo: string): Observable<RistournePaiement[]> {
    const params = new HttpParams()
      .set('companyId', companyId)
      .set('dateFrom', dateFrom)
      .set('dateTo', dateTo);
    return this.http.get<RistournePaiement[]>(`${this.base}/rapport`, { params });
  }

  getPaiement(id: number): Observable<RistournePaiement> {
    return this.http.get<RistournePaiement>(`${this.base}/paiements/${id}`);
  }

  savePaiement(dto: RistournePaiement): Observable<RistournePaiement> {
    return this.http.post<RistournePaiement>(`${this.base}/paiements`, dto);
  }

  confirmPaiement(id: number): Observable<RistournePaiement> {
    return this.http.post<RistournePaiement>(`${this.base}/paiements/${id}/confirm`, {});
  }

  cancelPaiement(id: number): Observable<RistournePaiement> {
    return this.http.post<RistournePaiement>(`${this.base}/paiements/${id}/cancel`, {});
  }

  getGroupedPaiements(companyId: number, type?: string): Observable<PartnerGroup[]> {
    let params = new HttpParams().set('companyId', companyId);
    if (type) params = params.set('type', type);
    return this.http.get<PartnerGroup[]>(`${this.base}/paiements/grouped`, { params });
  }

  generateFacture(paiementIds: number[], companyId: number): Observable<{ invoiceId: number; invoiceName: string }> {
    return this.http.post<{ invoiceId: number; invoiceName: string }>(
      `${this.base}/paiements/generate-facture`,
      { paiementIds, companyId }
    );
  }

  generateByQuarter(quarter: number, year: number, companyId: number): Observable<{ generated: number; skipped: number; total: number }> {
    return this.http.post<{ generated: number; skipped: number; total: number }>(
      `${this.base}/paiements/generate-by-quarter`,
      { quarter, year, companyId }
    );
  }

  generateByPeriod(dateStart: string, dateEnd: string, companyId: number): Observable<{ generated: number; skipped: number; total: number }> {
    return this.http.post<{ generated: number; skipped: number; total: number }>(
      `${this.base}/paiements/generate-by-period`,
      { dateStart, dateEnd, companyId }
    );
  }

  importBatch(
    rows: Array<{ clientName: string; categoryName: string; typeRistourne: string; montantFixe: number }>,
    companyId: number
  ): Observable<Ristourne[]> {
    return this.http.post<Ristourne[]>(
      `${this.base}/import`,
      rows,
      { params: new HttpParams().set('companyId', companyId) }
    );
  }
}
