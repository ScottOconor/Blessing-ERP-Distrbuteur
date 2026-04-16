import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ristourne {
  id?: number;
  partnerId: number;
  partnerName?: string;
  categoryId: number;
  categoryName?: string;
  montantFixe: number;
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
  createdAt?: string;
  lines: RistournePaiementLine[];
}

export interface PartnerGroup {
  partnerId: number;
  partnerName: string;
  totalAmount: number;
  paiements: RistournePaiement[];
}

@Injectable({ providedIn: 'root' })
export class RistourneService {

  private base = `http://${window.location.hostname}:8085/api/ristournes`;

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

  getAllPaiements(companyId: number): Observable<RistournePaiement[]> {
    return this.http.get<RistournePaiement[]>(`${this.base}/paiements`, {
      params: new HttpParams().set('companyId', companyId)
    });
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

  getGroupedPaiements(companyId: number): Observable<PartnerGroup[]> {
    return this.http.get<PartnerGroup[]>(`${this.base}/paiements/grouped`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  generateFacture(paiementIds: number[], companyId: number): Observable<{ invoiceId: number; invoiceName: string }> {
    return this.http.post<{ invoiceId: number; invoiceName: string }>(
      `${this.base}/paiements/generate-facture`,
      { paiementIds, companyId }
    );
  }
}
