import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export type SyncStatus = 'PENDING' | 'SENT' | 'FAILED';
export type SyncModule = 'VENTES' | 'ACHATS' | 'COMPTABILITE' | 'STOCK' | 'CAISSES' | 'REFERENTIELS';

export interface SyncEvent {
  id: number;
  spokeId: string;
  eventType: string;
  eventModule: SyncModule;
  eventLabel: string;
  entityId: string;
  status: SyncStatus;
  retryCount: number;
  createdAt: string;
  lastAttemptAt: string | null;
  errorMessage: string | null;
  payload?: string | null;
}

export interface ModuleStats { pending: number; sent: number; failed: number; }

export interface SyncSummary {
  total: number;
  pending: number;
  sent: number;
  failed: number;
  byModule: Record<SyncModule, ModuleStats>;
}

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}

export interface HubTestResult {
  checkedAt: string;
  hubUrl: string;
  exchange: string;
  queue: string;
  reachable: boolean;
  latencyMs: number | null;
  message: string;
}

export interface SyncProgress {
  checkedAt: string;
  pending: number;
  sent: number;
  failed: number;
  total: number;
  progressPct: number;
  lastDispatchAt: string | null;
  lastBatchSize: number;
  lastBatchSent: number;
  dispatchIntervalMs: number;
  byModule: Record<SyncModule, ModuleStats>;
}

@Injectable({ providedIn: 'root' })
export class SyncService {
  private base = `${environment.apiUrl}/api/sync`;

  constructor(private http: HttpClient) {}

  getSummary(): Observable<SyncSummary> {
    return this.http.get<SyncSummary>(`${this.base}/summary`);
  }

  getEvents(module?: SyncModule, status?: SyncStatus, page = 0, size = 30): Observable<PageResponse<SyncEvent>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (module) params = params.set('module', module);
    if (status) params = params.set('status', status);
    return this.http.get<PageResponse<SyncEvent>>(`${this.base}/events`, { params });
  }

  retryAll(): Observable<{ requeued: number }> {
    return this.http.post<{ requeued: number }>(`${this.base}/retry`, {});
  }

  /** Supprime définitivement les événements en échec — contrairement à retryAll(), ces
   *  opérations ne remonteront plus jamais au Hub. */
  clearFailed(): Observable<{ cleared: number }> {
    return this.http.delete<{ cleared: number }>(`${this.base}/failed`);
  }

  retryOne(id: number): Observable<{ ok: boolean }> {
    return this.http.post<{ ok: boolean }>(`${this.base}/retry/${id}`, {});
  }

  getEvent(id: number): Observable<SyncEvent> {
    return this.http.get<SyncEvent>(`${this.base}/events/${id}`);
  }

  forceDispatch(): Observable<{ ok: boolean }> {
    return this.http.post<{ ok: boolean }>(`${this.base}/dispatch`, {});
  }

  forceSnapshot(): Observable<{ status: string; message: string }> {
    return this.http.post<{ status: string; message: string }>(`${this.base}/snapshot/force`, {});
  }

  /** Déclenche tout de suite le même snapshot incrémental que le job planifié, sans attendre le
   *  prochain passage horaire. */
  triggerHourlySnapshot(): Observable<{ status: string; message: string }> {
    return this.http.post<{ status: string; message: string }>(`${this.base}/snapshot/hourly`, {});
  }

  testHub(): Observable<HubTestResult> {
    return this.http.get<HubTestResult>(`${this.base}/test-hub`);
  }

  getProgress(): Observable<SyncProgress> {
    return this.http.get<SyncProgress>(`${this.base}/progress`);
  }
}
