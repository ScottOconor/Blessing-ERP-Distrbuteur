import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportRequest } from '../../../core/models/report.model';

@Injectable({ providedIn: 'root' })
export class ReportService {
  private apiUrl = `http://${window.location.hostname}:8085/api/reports`;

  constructor(private http: HttpClient) {}

  getGeneralBalance4Cols(req: ReportRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/general-balance/4cols`, req);
  }

  getGeneralBalance6Cols(req: ReportRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/general-balance/6cols`, req);
  }

  getPartnerBalance4Cols(req: ReportRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/partner-balance/4cols`, req);
  }

  getPartnerBalance6Cols(req: ReportRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/partner-balance/6cols`, req);
  }

  getGrandLivre(req: ReportRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/grand-livre`, req);
  }

  getBilan(req: ReportRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/bilan`, req);
  }

  getCompteDeResultat(req: ReportRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/compte-de-resultat`, req);
  }
}
