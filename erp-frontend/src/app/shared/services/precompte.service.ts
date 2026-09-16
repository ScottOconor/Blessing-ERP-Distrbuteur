import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

export interface Precompte {
  id?: number;
  partnerId: number;
  partnerName?: string;
  typePrecompte: string;   // 'sale' | 'purchase'
  tauxPrecompte: number;   // 1 | 2 | 2.5 | 5 | 10
  companyId: number;
  active?: boolean;
}

export interface PrecompteImportResult {
  success: boolean;
  message: string;
  errors?: string[];
  /** Doublons partenaire+type détectés dans le fichier — n'affecte pas `success`, distinct de `errors`. */
  warnings?: string[];
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
  private basePrecompte = `${environment.apiUrl}/api/precomptes`;
  private baseEnlevement = `${environment.apiUrl}/api/enlevements`;

  constructor(private http: HttpClient) {}

  // ===== Précomptes =====

  downloadPrecompteTemplate(): Observable<Blob> {
    return this.http.get(`${this.basePrecompte}/template`, { responseType: 'blob' });
  }

  importPrecomptes(file: File, companyId: number): Observable<PrecompteImportResult> {
    const fd = new FormData();
    fd.append('file', file);
    fd.append('companyId', String(companyId));
    return this.http.post<PrecompteImportResult>(`${this.basePrecompte}/import`, fd);
  }

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
