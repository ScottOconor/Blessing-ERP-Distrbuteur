import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface AnalyticAccount {
  id?: number;
  code: string;
  name: string;
  description?: string;
  parentId?: number | null;
  parentName?: string;
  companyId: number;
  active: boolean;
  children?: AnalyticAccount[];
}

export interface AnalyticLine {
  id?: number;
  date: string;
  name: string;
  amount: number;
  analyticAccountId: number;
  analyticAccountCode: string;
  analyticAccountName: string;
  moveLineId?: number;
  generalAccountId?: number;
  generalAccountCode?: string;
  generalAccountName?: string;
  companyId?: number;
}

export interface AnalyticBalanceLine {
  analyticAccountId: number;
  analyticAccountCode: string;
  analyticAccountName: string;
  parentId?: number;
  parentName?: string;
  totalDebit: number;
  totalCredit: number;
  solde: number;
}

@Injectable({ providedIn: 'root' })
export class AnalyticService {
  private apiUrl = `${environment.apiUrl}/api/analytic`;

  constructor(private http: HttpClient) {}

  // ===== COMPTES ANALYTIQUES =====

  getAccounts(companyId: number): Observable<AnalyticAccount[]> {
    return this.http.get<AnalyticAccount[]>(`${this.apiUrl}/accounts`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  getAccountTree(companyId: number): Observable<AnalyticAccount[]> {
    return this.http.get<AnalyticAccount[]>(`${this.apiUrl}/accounts/tree`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  createAccount(account: AnalyticAccount): Observable<AnalyticAccount> {
    return this.http.post<AnalyticAccount>(`${this.apiUrl}/accounts`, account);
  }

  updateAccount(id: number, account: AnalyticAccount): Observable<AnalyticAccount> {
    return this.http.put<AnalyticAccount>(`${this.apiUrl}/accounts/${id}`, account);
  }

  deleteAccount(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/accounts/${id}`);
  }

  // ===== LIGNES ANALYTIQUES =====

  getLines(companyId: number, params?: { analyticAccountId?: number; from?: string; to?: string }): Observable<AnalyticLine[]> {
    let httpParams = new HttpParams().set('companyId', companyId);
    if (params?.analyticAccountId) httpParams = httpParams.set('analyticAccountId', params.analyticAccountId);
    if (params?.from) httpParams = httpParams.set('from', params.from);
    if (params?.to) httpParams = httpParams.set('to', params.to);
    return this.http.get<AnalyticLine[]>(`${this.apiUrl}/lines`, { params: httpParams });
  }

  // ===== RECALCUL =====

  recalculate(companyId: number): Observable<{ success: boolean; linesGenerated: number; message: string }> {
    return this.http.post<any>(`${this.apiUrl}/recalculate`, null, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  // ===== RAPPORT BALANCE ANALYTIQUE =====

  getBalance(companyId: number, from?: string, to?: string): Observable<AnalyticBalanceLine[]> {
    let httpParams = new HttpParams().set('companyId', companyId);
    if (from) httpParams = httpParams.set('from', from);
    if (to) httpParams = httpParams.set('to', to);
    return this.http.get<AnalyticBalanceLine[]>(`${this.apiUrl}/report/balance`, { params: httpParams });
  }
}
