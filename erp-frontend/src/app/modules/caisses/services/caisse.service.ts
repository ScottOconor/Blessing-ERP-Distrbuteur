import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface CaisseDTO {
  id?: number;
  name: string;
  code?: string;
  journalId: number;
  journalName?: string;
  companyId: number;
  status?: 'OUVERTE' | 'CLOTUREE';
  responsableName?: string;
  sellerId?: number;
  sellerName?: string;
  active?: boolean;
  lastSessionDate?: string;
  soldeActuel?: number;
  seuilEcart?: number;
}

export interface CashDenominationDTO {
  id?: number;
  companyId: number;
  label: string;
  valeur: number;
  active?: boolean;
}

export interface DenominationCountRequest {
  denominationId: number;
  quantite: number;
}

export interface OuvertureCaisseRequest {
  companyId?: number;
  counts: DenominationCountRequest[];
  notes?: string;
}

export interface ClotureCaisseRequest {
  companyId?: number;
  counts: DenominationCountRequest[];
  notes?: string;
}

export interface DenominationCountLine {
  label: string;
  valeur: number;
  quantite: number;
  total: number;
}

export interface RapportClotureDTO {
  sessionId: number;
  caisseId: number;
  caisseName: string;
  dateSession: string;
  createdBy?: string;
  status: string;
  soldeDebut: number;
  montantCompteOuverture?: number;
  ecartOuverture?: number;
  ouvertureControlee: boolean;
  totalEntrees: number;
  totalSorties: number;
  soldeFin: number;
  montantCompteCloture?: number;
  ecart?: number;
  seuilEcart?: number;
  ecartDepasseSeuil: boolean;
  dateCloture?: string;
  countsOuverture: DenominationCountLine[];
  countsCloture: DenominationCountLine[];
  operations: CaisseOperationDTO[];
}

export interface RapportConsolideDTO {
  dateFrom: string;
  dateTo: string;
  sessions: CaisseSessionDTO[];
  totalSessions: number;
  grandTotalEntrees: number;
  grandTotalSorties: number;
  grandTotalEcarts: number;
}

export interface CaisseOperationDTO {
  id?: number;
  caisseId: number;
  caisseName?: string;
  companyId: number;
  date: string;
  type: 'ENTREE' | 'SORTIE';
  montant: number;
  libelle?: string;
  reference?: string;
  tiersName?: string;
  compteContrepartieId: number;
  compteContrepartieCode?: string;
  compteContrepartieName?: string;
  journalMoveId?: number;
  createdBy?: string;
  createdAt?: string;
}

export interface AddOperationRequest {
  caisseId: number;
  companyId: number;
  type: 'ENTREE' | 'SORTIE';
  montant: number;
  date: string;
  libelle?: string;
  reference?: string;
  tiersName?: string;
  tiersId?: number;
  compteContrepartieId: number;
}

export interface CaisseSessionDTO {
  id?: number;
  caisseId: number;
  caisseName?: string;
  journalId?: number;
  journalName?: string;
  companyId: number;
  dateSession: string;
  status: string;
  soldeDebut: number;
  soldeFin: number;
  totalEntrees: number;
  totalSorties: number;
  dateCloture?: string;
  createdBy?: string;
  userId?: number;
  montantCompteOuverture?: number;
  montantCompteCloture?: number;
  ecartOuverture?: number;
  ecart?: number;
  ouvertureControlee?: boolean;
  ecartDepasseSeuil?: boolean;
}

export interface BrouillardLineDTO {
  date: string;
  ref?: string;
  libelle?: string;
  tiersName?: string;
  compteCode?: string;
  compteName?: string;
  debit: number;
  credit: number;
  source?: string;
}

export interface BrouillardDTO {
  caisseId: number;
  caisseName: string;
  journalName: string;
  journalCode: string;
  dateSession: string;
  soldeDebut: number;
  totalEntrees: number;
  totalSorties: number;
  soldeFin: number;
  dateCloture?: string;
  status: string;
  lines: BrouillardLineDTO[];
}

@Injectable({ providedIn: 'root' })
export class CaisseService {
  private base = `${environment.apiUrl}/api/caisses`;

  constructor(private http: HttpClient) {}

  getCaisses(companyId: number): Observable<CaisseDTO[]> {
    return this.http.get<CaisseDTO[]>(this.base, { params: { companyId } });
  }

  getCaisse(id: number): Observable<CaisseDTO> {
    return this.http.get<CaisseDTO>(`${this.base}/${id}`);
  }

  createCaisse(dto: CaisseDTO): Observable<CaisseDTO> {
    return this.http.post<CaisseDTO>(this.base, dto);
  }

  updateCaisse(id: number, dto: CaisseDTO): Observable<CaisseDTO> {
    return this.http.put<CaisseDTO>(`${this.base}/${id}`, dto);
  }

  deleteCaisse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }

  getDashboard(companyId: number): Observable<CaisseDTO[]> {
    return this.http.get<CaisseDTO[]>(`${this.base}/dashboard`, { params: { companyId } });
  }

  getOperations(caisseId: number, companyId: number, type?: 'ENTREE' | 'SORTIE'): Observable<CaisseOperationDTO[]> {
    let params: any = { companyId };
    if (type) params['type'] = type;
    return this.http.get<CaisseOperationDTO[]>(`${this.base}/${caisseId}/operations`, { params });
  }

  getAllOperations(companyId: number, type?: 'ENTREE' | 'SORTIE'): Observable<CaisseOperationDTO[]> {
    let params: any = { companyId };
    if (type) params['type'] = type;
    return this.http.get<CaisseOperationDTO[]>(`${this.base}/operations`, { params });
  }

  addOperation(req: AddOperationRequest): Observable<CaisseOperationDTO> {
    return this.http.post<CaisseOperationDTO>(`${this.base}/operations`, req);
  }

  cloturerCaisse(id: number, companyId: number, req?: ClotureCaisseRequest): Observable<CaisseSessionDTO> {
    return this.http.put<CaisseSessionDTO>(`${this.base}/${id}/cloturer`, req ?? { counts: [] }, { params: { companyId } });
  }

  ouvrirSession(id: number, req: OuvertureCaisseRequest): Observable<CaisseSessionDTO> {
    return this.http.post<CaisseSessionDTO>(`${this.base}/${id}/ouvrir`, req);
  }

  rouvrirCaisse(id: number): Observable<CaisseDTO> {
    return this.http.post<CaisseDTO>(`${this.base}/${id}/rouvrir`, null);
  }

  getSessions(caisseId: number): Observable<CaisseSessionDTO[]> {
    return this.http.get<CaisseSessionDTO[]>(`${this.base}/${caisseId}/sessions`);
  }

  getSessionActive(caisseId: number): Observable<CaisseSessionDTO | null> {
    return this.http.get<CaisseSessionDTO | null>(`${this.base}/${caisseId}/session-active`);
  }

  getBrouillard(caisseId: number, date: string): Observable<BrouillardDTO> {
    return this.http.get<BrouillardDTO>(`${this.base}/${caisseId}/brouillard`, { params: { date } });
  }

  // Coupures
  getDenominations(companyId: number): Observable<CashDenominationDTO[]> {
    return this.http.get<CashDenominationDTO[]>(`${this.base}/denominations`, { params: { companyId } });
  }
  seedDefaultDenominations(companyId: number): Observable<CashDenominationDTO[]> {
    return this.http.post<CashDenominationDTO[]>(`${this.base}/denominations/seed-defaults`, null, { params: { companyId } });
  }
  createDenomination(dto: CashDenominationDTO): Observable<CashDenominationDTO> {
    return this.http.post<CashDenominationDTO>(`${this.base}/denominations`, dto);
  }
  updateDenomination(id: number, dto: CashDenominationDTO): Observable<CashDenominationDTO> {
    return this.http.put<CashDenominationDTO>(`${this.base}/denominations/${id}`, dto);
  }
  deleteDenomination(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/denominations/${id}`);
  }

  // Rapports
  getRapportCloture(sessionId: number): Observable<RapportClotureDTO> {
    return this.http.get<RapportClotureDTO>(`${this.base}/sessions/${sessionId}/rapport-cloture`);
  }
  getRapportConsolide(companyId: number, dateFrom: string, dateTo: string, caisseIds?: number[]): Observable<RapportConsolideDTO> {
    let params: any = { companyId, dateFrom, dateTo };
    if (caisseIds && caisseIds.length) params['caisseIds'] = caisseIds;
    return this.http.get<RapportConsolideDTO>(`${this.base}/rapport-consolide`, { params });
  }
}
