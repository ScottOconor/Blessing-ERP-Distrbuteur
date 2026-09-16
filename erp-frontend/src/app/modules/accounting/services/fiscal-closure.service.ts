import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface FiscalClosurePreviewRequest {
  companyId: number;
  dateFrom: string;
  dateTo: string;
}

export interface FiscalClosureBlockingEntry {
  id: number;
  name: string;
  date: string;
  journalName: string;
}

export interface FiscalClosureAccountBalanceLine {
  accountCode: string;
  accountName: string;
  balance: number;
}

export interface FiscalClosurePreviewResponse {
  dateFrom: string;
  dateTo: string;
  blocked: boolean;
  blockers: FiscalClosureBlockingEntry[];
  netResult: number;
  accountBalances: FiscalClosureAccountBalanceLine[];
}

export interface FiscalClosureExecuteRequest {
  companyId: number;
  dateFrom: string;
  dateTo: string;
  resultAccountBeneficeId: number;
  resultAccountPerteId: number;
}

export interface FiscalClosureExecuteResponse {
  moveId: number;
  moveName: string;
  netResult: number;
  lockDate: string;
}

@Injectable({ providedIn: 'root' })
export class FiscalClosureService {
  private apiUrl = `${environment.apiUrl}/api/accounting/fiscal-closure`;

  constructor(private http: HttpClient) {}

  preview(req: FiscalClosurePreviewRequest): Observable<FiscalClosurePreviewResponse> {
    return this.http.post<FiscalClosurePreviewResponse>(`${this.apiUrl}/preview`, req);
  }

  execute(req: FiscalClosureExecuteRequest): Observable<FiscalClosureExecuteResponse> {
    return this.http.post<FiscalClosureExecuteResponse>(`${this.apiUrl}/execute`, req);
  }
}
