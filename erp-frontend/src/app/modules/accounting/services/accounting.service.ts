import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountAccount, AccountJournal, Partner } from '../../../core/models/account.model';
import { ImportResult } from '../../../core/models/import-result.model';
import { AccountMove } from '../../../core/models/move.model';

@Injectable({ providedIn: 'root' })
export class AccountingService {
  private apiUrl = `http://${window.location.hostname}:8080/api/accounting`;

  constructor(private http: HttpClient) {}

  // ===== PLAN COMPTABLE =====
  getAccounts(companyId: number): Observable<AccountAccount[]> {
    return this.http.get<AccountAccount[]>(`${this.apiUrl}/accounts`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  createAccount(account: AccountAccount): Observable<AccountAccount> {
    return this.http.post<AccountAccount>(`${this.apiUrl}/accounts`, account);
  }

  updateAccount(id: number, account: AccountAccount): Observable<AccountAccount> {
    return this.http.put<AccountAccount>(`${this.apiUrl}/accounts/${id}`, account);
  }

  deleteAccount(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/accounts/${id}`);
  }

  toggleAccountDeprecated(id: number): Observable<AccountAccount> {
    return this.http.patch<AccountAccount>(`${this.apiUrl}/accounts/${id}/toggle-deprecated`, {});
  }

  // ===== JOURNAUX =====
  getJournals(companyId: number): Observable<AccountJournal[]> {
    return this.http.get<AccountJournal[]>(`${this.apiUrl}/journals`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  createJournal(journal: AccountJournal): Observable<AccountJournal> {
    return this.http.post<AccountJournal>(`${this.apiUrl}/journals`, journal);
  }

  updateJournal(id: number, journal: AccountJournal): Observable<AccountJournal> {
    return this.http.put<AccountJournal>(`${this.apiUrl}/journals/${id}`, journal);
  }

  // ===== ECRITURES =====
  getMoves(companyId: number, params?: any): Observable<AccountMove[]> {
    let httpParams = new HttpParams().set('companyId', companyId);
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key]);
        }
      });
    }
    return this.http.get<AccountMove[]>(`${this.apiUrl}/moves`, { params: httpParams });
  }

  getMove(id: number): Observable<AccountMove> {
    return this.http.get<AccountMove>(`${this.apiUrl}/moves/${id}`);
  }

  createMove(move: AccountMove): Observable<AccountMove> {
    return this.http.post<AccountMove>(`${this.apiUrl}/moves`, move);
  }

  updateMove(id: number, move: AccountMove): Observable<AccountMove> {
    return this.http.put<AccountMove>(`${this.apiUrl}/moves/${id}`, move);
  }

  postMove(id: number): Observable<AccountMove> {
    return this.http.post<AccountMove>(`${this.apiUrl}/moves/${id}/post`, {});
  }

  cancelMove(id: number): Observable<AccountMove> {
    return this.http.post<AccountMove>(`${this.apiUrl}/moves/${id}/cancel`, {});
  }

  // ===== PARTENAIRES =====
  getPartners(companyId: number): Observable<Partner[]> {
    return this.http.get<Partner[]>(`${this.apiUrl}/partners`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  createPartner(partner: Partner): Observable<Partner> {
    return this.http.post<Partner>(`${this.apiUrl}/partners`, partner);
  }

  updatePartner(id: number, partner: Partner): Observable<Partner> {
    return this.http.put<Partner>(`${this.apiUrl}/partners/${id}`, partner);
  }

  // ===== IMPORT EXCEL =====
  private importUrl = `http://${window.location.hostname}:8080/api/import`;

  importAccounts(file: File, companyId: number): Observable<ImportResult> {
    const fd = new FormData();
    fd.append('file', file);
    fd.append('companyId', String(companyId));
    return this.http.post<ImportResult>(`${this.importUrl}/accounts`, fd);
  }

  importAnalyticAccounts(file: File, companyId: number): Observable<ImportResult> {
    const fd = new FormData();
    fd.append('file', file);
    fd.append('companyId', String(companyId));
    return this.http.post<ImportResult>(`${this.importUrl}/analytic-accounts`, fd);
  }

  importPartners(file: File, companyId: number): Observable<ImportResult> {
    const fd = new FormData();
    fd.append('file', file);
    fd.append('companyId', String(companyId));
    return this.http.post<ImportResult>(`${this.importUrl}/partners`, fd);
  }

  importJournals(file: File, companyId: number): Observable<ImportResult> {
    const fd = new FormData();
    fd.append('file', file);
    fd.append('companyId', String(companyId));
    return this.http.post<ImportResult>(`${this.importUrl}/journals`, fd);
  }

  getJournalTypes(): Observable<{ value: string; label: string; icon: string }[]> {
    return this.http.get<{ value: string; label: string; icon: string }[]>(
      `${this.importUrl}/journal-types`
    );
  }
}
