import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountAccount, AccountJournal, Partner } from '../../../core/models/account.model';
import { ImportResult } from '../../../core/models/import-result.model';
import { AccountMove } from '../../../core/models/move.model';
import { environment } from '../../../../environments/environment';

export interface JournalPreviewRow {
  code: string;
  name: string;
  type: string;
  defaultAccountCode: string;
  accountFound: boolean;
  action: 'create' | 'update';
  warning?: string;
}

export interface JournalDailyBalanceDTO {
  id?: number;
  journalId: number;
  journalName?: string;
  journalCode?: string;
  companyId: number;
  date: string;
  openingBalance: number;
  totalDebit: number;
  totalCredit: number;
  closingBalance: number;
  closed?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AccountingService {
  private apiUrl = `${environment.apiUrl}/api/accounting`;

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

  deleteJournal(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/journals/${id}`);
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

  deletePartner(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/partners/${id}`);
  }

  // ===== JOURNAL DETAIL =====
  getJournalAccountBalance(journalId: number, excludeMoveId?: number): Observable<{ journalId: number; journalCode: string; accountId: number | null; accountCode: string | null; accountName: string | null; balance: number }> {
    const params = excludeMoveId != null ? new HttpParams().set('excludeMoveId', excludeMoveId) : new HttpParams();
    return this.http.get<any>(`${this.apiUrl}/journals/${journalId}/account-balance`, { params });
  }

  getJournalMoves(journalId: number, companyId: number): Observable<AccountMove[]> {
    return this.http.get<AccountMove[]>(`${this.apiUrl}/journals/${journalId}/moves`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  getDailyBalances(journalId: number): Observable<JournalDailyBalanceDTO[]> {
    return this.http.get<JournalDailyBalanceDTO[]>(`${this.apiUrl}/journals/${journalId}/daily-balances`);
  }

  getDailyBalance(journalId: number, date: string, companyId?: number): Observable<JournalDailyBalanceDTO> {
    let params = new HttpParams().set('date', date);
    if (companyId) params = params.set('companyId', companyId);
    return this.http.get<JournalDailyBalanceDTO>(`${this.apiUrl}/journals/${journalId}/daily-balance`, { params });
  }

  closeDayBalance(journalId: number, date: string): Observable<JournalDailyBalanceDTO> {
    return this.http.post<JournalDailyBalanceDTO>(`${this.apiUrl}/journals/${journalId}/close-day`, { date });
  }

  reverseMove(id: number): Observable<AccountMove> {
    return this.http.post<AccountMove>(`${this.apiUrl}/moves/${id}/reverse`, {});
  }

  resetMoveToDraft(id: number): Observable<AccountMove> {
    return this.http.post<AccountMove>(`${this.apiUrl}/moves/${id}/reset-to-draft`, {});
  }

  // ===== IMPORT EXCEL =====
  private importUrl = `${environment.apiUrl}/api/import`;

  downloadAccountsTemplate(): Observable<Blob> {
    return this.http.get(`${this.importUrl}/accounts/template`, { responseType: 'blob' });
  }

  downloadJournalsTemplate(): Observable<Blob> {
    return this.http.get(`${this.importUrl}/journals/template`, { responseType: 'blob' });
  }

  downloadWarehousesTemplate(): Observable<Blob> {
    return this.http.get(`${this.importUrl}/warehouses/template`, { responseType: 'blob' });
  }

  importAccounts(file: File, companyId: number, replace = false): Observable<ImportResult> {
    const fd = new FormData();
    fd.append('file', file);
    fd.append('companyId', String(companyId));
    fd.append('replace', String(replace));
    return this.http.post<ImportResult>(`${this.importUrl}/accounts`, fd);
  }

  downloadAnalyticAccountsTemplate(): Observable<Blob> {
    return this.http.get(`${this.importUrl}/analytic-accounts/template`, { responseType: 'blob' });
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

  previewJournals(file: File, companyId: number): Observable<JournalPreviewRow[]> {
    const fd = new FormData();
    fd.append('file', file);
    fd.append('companyId', String(companyId));
    return this.http.post<JournalPreviewRow[]>(`${this.importUrl}/journals/preview`, fd);
  }

  importJournals(file: File, companyId: number): Observable<ImportResult> {
    const fd = new FormData();
    fd.append('file', file);
    fd.append('companyId', String(companyId));
    return this.http.post<ImportResult>(`${this.importUrl}/journals`, fd);
  }

  importPrecomptes(file: File, companyId: number): Observable<ImportResult> {
    const fd = new FormData();
    fd.append('file', file);
    fd.append('companyId', String(companyId));
    return this.http.post<ImportResult>(`${environment.apiUrl}/api/precomptes/import`, fd);
  }

  importWarehouses(file: File, companyId: number): Observable<ImportResult> {
    const fd = new FormData();
    fd.append('file', file);
    fd.append('companyId', String(companyId));
    return this.http.post<ImportResult>(`${this.importUrl}/warehouses`, fd);
  }

  getJournalTypes(): Observable<{ value: string; label: string; icon: string }[]> {
    return this.http.get<{ value: string; label: string; icon: string }[]>(
      `${this.importUrl}/journal-types`
    );
  }
}
