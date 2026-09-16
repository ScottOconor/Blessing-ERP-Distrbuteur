import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportRequest } from '../../../core/models/report.model';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ReportService {
  private apiUrl = `${environment.apiUrl}/api/reports`;

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

  getGrandLivreTiers(req: ReportRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/grand-livre-tiers`, req);
  }

  getBilan(req: ReportRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/bilan`, req);
  }

  getCompteDeResultat(req: ReportRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/compte-de-resultat`, req);
  }

  getCashbook(req: ReportRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cashbook`, req);
  }

  getSuiviTiers(companyId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/suivi-tiers`, { params: { companyId: companyId.toString() } });
  }
}
