import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export type TicketStatus   = 'OUVERT' | 'EN_COURS' | 'RESOLU' | 'FERME';
export type TicketPriority = 'BASSE' | 'MOYENNE' | 'HAUTE' | 'CRITIQUE';
export type TicketCategory = 'INCIDENT' | 'DEMANDE' | 'QUESTION';

export interface TicketComment {
  id?: number;
  ticketId?: number;
  content: string;
  authorUsername: string;
  internal: boolean;
  fromHub?: boolean;
  createdAt?: string;
}

export interface Ticket {
  id?: number;
  ticketNumber?: string;
  title: string;
  description?: string;
  status?: TicketStatus;
  priority?: TicketPriority;
  category?: TicketCategory;
  createdByUsername?: string;
  assignedToUsername?: string;
  companyId?: number;
  createdAt?: string;
  updatedAt?: string;
  resolvedAt?: string;
  comments?: TicketComment[];
}

export interface TicketStats {
  totalOuvert: number;
  totalEnCours: number;
  totalResolu: number;
  totalFerme: number;
  totalCritique: number;
  totalHaute: number;
}

@Injectable({ providedIn: 'root' })
export class HelpdeskService {
  private api = `${environment.apiUrl}/api/helpdesk`;

  constructor(private http: HttpClient) {}

  getTickets(companyId: number, status?: string, assignedTo?: string, createdBy?: string): Observable<Ticket[]> {
    let params = new HttpParams().set('companyId', companyId);
    if (status)     params = params.set('status', status);
    if (assignedTo) params = params.set('assignedTo', assignedTo);
    if (createdBy)  params = params.set('createdBy', createdBy);
    return this.http.get<Ticket[]>(`${this.api}/tickets`, { params });
  }

  getTicket(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.api}/tickets/${id}`);
  }

  createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.api}/tickets`, ticket);
  }

  updateTicket(id: number, ticket: Partial<Ticket>): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.api}/tickets/${id}`, ticket);
  }

  addComment(ticketId: number, comment: TicketComment): Observable<TicketComment> {
    return this.http.post<TicketComment>(`${this.api}/tickets/${ticketId}/comments`, comment);
  }

  getStats(companyId: number): Observable<TicketStats> {
    return this.http.get<TicketStats>(`${this.api}/stats`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }
}
