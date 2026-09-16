import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface Remise {
  id?: number;
  partnerId: number;
  partnerName?: string;
  categoryId: number;
  categoryName?: string;
  montantFixe: number;
  montantTTCUnitaire?: number;
  typeRemise?: string;   // 'brasserie' | 'guinness'
  companyId: number;
  active?: boolean;
}

export interface RemisePaiementLine {
  id?: number;
  categoryId: number;
  categoryName?: string;
  quantite: number;
  montantUnitaire: number;
  montantTotal?: number;
}

export interface RemiseArticleLine {
  productCode?: string;
  productName?: string;
  categoryName?: string;
  quantite: number;
  montantUnitaire: number;
  montantTotal: number;
}

export interface RemisePaiement {
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
  typeRemise?: string;
  companyId: number;
  notes?: string;
  createdAt?: string;
  lines: RemisePaiementLine[];
  articleLines?: RemiseArticleLine[];
}

export interface PartnerGroup {
  partnerId: number;
  partnerName: string;
  totalAmount: number;
  paiements: RemisePaiement[];
}

export interface QuarterGroup {
  quarter: number;
  year: number;
  label: string;
  totalAmount: number;
  partners: PartnerGroup[];
}

@Injectable({ providedIn: 'root' })
export class RemiseService {

  private base = `${environment.apiUrl}/api/remises`;

  constructor(private http: HttpClient) {}

  getAll(companyId: number): Observable<Remise[]> {
    return this.http.get<Remise[]>(this.base, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  getByPartner(partnerId: number, companyId: number): Observable<Remise[]> {
    return this.http.get<Remise[]>(`${this.base}/partner/${partnerId}`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  save(dto: Remise): Observable<Remise> {
    return this.http.post<Remise>(this.base, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }

  getAllPaiements(companyId: number, type?: string): Observable<RemisePaiement[]> {
    let params = new HttpParams().set('companyId', companyId);
    if (type) params = params.set('type', type);
    return this.http.get<RemisePaiement[]>(`${this.base}/paiements`, { params });
  }

  getPaiement(id: number): Observable<RemisePaiement> {
    return this.http.get<RemisePaiement>(`${this.base}/paiements/${id}`);
  }

  confirmPaiement(id: number): Observable<RemisePaiement> {
    return this.http.post<RemisePaiement>(`${this.base}/paiements/${id}/confirm`, {});
  }

  cancelPaiement(id: number): Observable<RemisePaiement> {
    return this.http.post<RemisePaiement>(`${this.base}/paiements/${id}/cancel`, {});
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

  getRapport(companyId: number, dateFrom: string, dateTo: string): Observable<RemisePaiement[]> {
    return this.http.get<RemisePaiement[]>(`${this.base}/rapport`, {
      params: new HttpParams().set('companyId', companyId).set('dateFrom', dateFrom).set('dateTo', dateTo)
    });
  }
}
