import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Remise {
  id?: number;
  partnerId: number;
  partnerName?: string;
  categoryId: number;
  categoryName?: string;
  montantFixe: number;
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
  companyId: number;
  notes?: string;
  createdAt?: string;
  lines: RemisePaiementLine[];
}

export interface PartnerGroup {
  partnerId: number;
  partnerName: string;
  totalAmount: number;
  paiements: RemisePaiement[];
}

@Injectable({ providedIn: 'root' })
export class RemiseService {

  private base = `http://${window.location.hostname}:8085/api/remises`;

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

  getAllPaiements(companyId: number): Observable<RemisePaiement[]> {
    return this.http.get<RemisePaiement[]>(`${this.base}/paiements`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  getPaiement(id: number): Observable<RemisePaiement> {
    return this.http.get<RemisePaiement>(`${this.base}/paiements/${id}`);
  }

  savePaiement(dto: RemisePaiement): Observable<RemisePaiement> {
    return this.http.post<RemisePaiement>(`${this.base}/paiements`, dto);
  }

  confirmPaiement(id: number): Observable<RemisePaiement> {
    return this.http.post<RemisePaiement>(`${this.base}/paiements/${id}/confirm`, {});
  }

  cancelPaiement(id: number): Observable<RemisePaiement> {
    return this.http.post<RemisePaiement>(`${this.base}/paiements/${id}/cancel`, {});
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
