import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Precompte {
  id?: number;
  partnerId: number;
  partnerName?: string;
  typePrecompte: string;   // 'sale' | 'purchase'
  tauxPrecompte: number;   // 1 | 2 | 2.5 | 5 | 10
  companyId: number;
  active?: boolean;
}

export interface EnlevementClient {
  id?: number;
  partnerId: number;
  partnerName?: string;
  montant: number;
  supplementAccountCode?: string;
}

export interface Enlevement {
  id?: number;
  categoryId: number;
  categoryName?: string;
  montantFixe: number;
  coutEnlevement?: number;
  companyId: number;
  active?: boolean;
  clients?: EnlevementClient[];
}

@Injectable({ providedIn: 'root' })
export class PrecompteService {
  private basePrecompte = `http://${window.location.hostname}:8085/api/precomptes`;
  private baseEnlevement = `http://${window.location.hostname}:8085/api/enlevements`;

  constructor(private http: HttpClient) {}

  // ===== Précomptes =====

  getAllPrecomptes(companyId: number): Observable<Precompte[]> {
    return this.http.get<Precompte[]>(this.basePrecompte, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  getPrecomptesByPartner(partnerId: number, companyId: number): Observable<Precompte[]> {
    return this.http.get<Precompte[]>(`${this.basePrecompte}/partner/${partnerId}`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  savePrecompte(dto: Precompte): Observable<Precompte> {
    return this.http.post<Precompte>(this.basePrecompte, dto);
  }

  deletePrecompte(id: number): Observable<void> {
    return this.http.delete<void>(`${this.basePrecompte}/${id}`);
  }

  // ===== Enlèvements =====

  getAllEnlevements(companyId: number): Observable<Enlevement[]> {
    return this.http.get<Enlevement[]>(this.baseEnlevement, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  saveEnlevement(dto: Enlevement): Observable<Enlevement> {
    return this.http.post<Enlevement>(this.baseEnlevement, dto);
  }

  deleteEnlevement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEnlevement}/${id}`);
  }
}
