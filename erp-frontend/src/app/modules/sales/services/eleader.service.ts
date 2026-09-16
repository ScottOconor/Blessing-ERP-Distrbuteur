import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SalesOrder } from './sales.service';

export interface EleaderEmballageMapping {
  id?: number;
  eleaderCode: string;
  erpProductCode: string;
  invoiceModel: string; // BRASSERIES | GUINNESS | ALL
}

export interface EleaderConfig {
  id?: number;
  companyId: number;
  journalId?: number;
  journalName?: string;
  psaProductCode: string;
  fraisEnlevementCode: string;
  autoConfirm: boolean;
  emballageMappings: EleaderEmballageMapping[];
  /** Codes ERP supplémentaires traités comme consignes/emballages (exempt de TVA). */
  extraConsigneCodes: string[];
}

export interface EleaderImportResult {
  success: boolean;
  message: string;
  eleaderReference?: string;
  clientName?: string;
  salesOrderId?: number;
  salesOrderName?: string;
  importLogId?: number;
  warning?: string;
}

export interface EleaderImportLog {
  id: number;
  reference: string;
  filename: string;
  status: string;
  invoiceModel: string;
  eleaderReference?: string;
  clientName?: string;
  rawText?: string;
  message?: string;
  salesOrderId?: number;
  salesOrderName?: string;
  importDate: string;
}

@Injectable({ providedIn: 'root' })
export class EleaderService {
  private base = `${environment.apiUrl}/api/eleader`;

  constructor(private http: HttpClient) {}

  // ── Configuration ──────────────────────────────────────────────────────────

  getConfig(companyId: number): Observable<EleaderConfig> {
    return this.http.get<EleaderConfig>(`${this.base}/config`, { params: { companyId } });
  }

  saveConfig(config: EleaderConfig): Observable<EleaderConfig> {
    return this.http.put<EleaderConfig>(`${this.base}/config`, config);
  }

  addMapping(companyId: number, mapping: EleaderEmballageMapping): Observable<EleaderEmballageMapping> {
    return this.http.post<EleaderEmballageMapping>(`${this.base}/config/emballages`, mapping, { params: { companyId } });
  }

  deleteMapping(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/config/emballages/${id}`);
  }

  // ── Import PDF ──────────────────────────────────────────────────────────────

  extractText(file: File): Observable<{ text: string; detectedModel: string }> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<{ text: string; detectedModel: string }>(`${this.base}/extract-text`, fd);
  }

  importPdf(file: File, companyId: number, invoiceModel?: string): Observable<EleaderImportResult> {
    const fd = new FormData();
    fd.append('file', file);
    fd.append('companyId', companyId.toString());
    if (invoiceModel) fd.append('invoiceModel', invoiceModel);
    return this.http.post<EleaderImportResult>(`${this.base}/import`, fd);
  }

  // ── Bons de commande eLeader ────────────────────────────────────────────────

  getOrders(companyId: number): Observable<SalesOrder[]> {
    return this.http.get<SalesOrder[]>(`${this.base}/orders`, { params: { companyId } });
  }

  confirmOrder(id: number): Observable<SalesOrder> {
    return this.http.post<SalesOrder>(`${this.base}/orders/${id}/confirm`, {});
  }

  cancelOrder(id: number): Observable<SalesOrder> {
    return this.http.post<SalesOrder>(`${this.base}/orders/${id}/cancel`, {});
  }

  // ── Logs ────────────────────────────────────────────────────────────────────

  getLogs(companyId: number): Observable<EleaderImportLog[]> {
    return this.http.get<EleaderImportLog[]>(`${this.base}/logs`, { params: { companyId } });
  }
}
