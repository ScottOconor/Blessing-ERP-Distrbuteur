import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { HelpdeskService, Ticket, TicketStatus, TicketPriority, TicketCategory } from '../../services/helpdesk.service';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.scss'
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  loading = false;
  filterStatus = '';
  filterPriority = '';
  filterCategory = '';
  myTicketsOnly = false;
  showNewForm = false;
  saving = false;
  errorMsg = '';

  newTicket: Partial<Ticket> = this.emptyTicket();

  constructor(
    private helpdeskService: HelpdeskService,
    private authService: AuthService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(p => {
      this.filterStatus = p['status'] || '';
      if (p['my']) this.myTicketsOnly = true;
      this.load();
      if (p['new'] === '1') setTimeout(() => this.openNew(), 0);
    });
  }

  load(): void {
    this.loading = true;
    const companyId  = this.authService.getCompanyId();
    const isAdmin    = this.authService.isAdmin();
    const username   = this.authService.getSession()?.username ?? '';
    const createdBy  = isAdmin ? undefined : username;
    const assignedTo = isAdmin && this.myTicketsOnly ? username : undefined;
    this.helpdeskService.getTickets(companyId, this.filterStatus || undefined, assignedTo, createdBy).subscribe({
      next: (data) => { this.tickets = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  get filtered(): Ticket[] {
    return this.tickets.filter(t =>
      (!this.filterPriority || t.priority === this.filterPriority) &&
      (!this.filterCategory || t.category === this.filterCategory)
    );
  }

  openNew(): void {
    this.newTicket = this.emptyTicket();
    this.errorMsg = '';
    this.showNewForm = true;
  }

  saveNew(): void {
    if (!this.newTicket.title?.trim()) { this.errorMsg = 'Le titre est obligatoire'; return; }
    this.saving = true;
    const companyId = this.authService.getCompanyId();
    const payload: Ticket = {
      ...this.newTicket as Ticket,
      companyId,
      createdByUsername: this.authService.getSession()?.username ?? ''
    };
    this.helpdeskService.createTicket(payload).subscribe({
      next: (t) => {
        this.saving = false;
        this.showNewForm = false;
        this.router.navigate(['/helpdesk/tickets', t.id]);
      },
      error: (e) => { this.saving = false; this.errorMsg = e.error?.message || 'Erreur lors de la création'; }
    });
  }

  statusLabel(s?: string): string {
    const m: Record<string, string> = { OUVERT: 'Ouvert', EN_COURS: 'En cours', RESOLU: 'Résolu', FERME: 'Fermé' };
    return m[s ?? ''] ?? s ?? '';
  }
  priorityLabel(p?: string): string {
    const m: Record<string, string> = { BASSE: 'Basse', MOYENNE: 'Moyenne', HAUTE: 'Haute', CRITIQUE: 'Critique' };
    return m[p ?? ''] ?? p ?? '';
  }
  categoryLabel(c?: string): string {
    const m: Record<string, string> = { INCIDENT: 'Incident', DEMANDE: 'Demande', QUESTION: 'Question' };
    return m[c ?? ''] ?? c ?? '';
  }

  private emptyTicket(): Partial<Ticket> {
    return { title: '', description: '', status: 'OUVERT', priority: 'MOYENNE', category: 'INCIDENT' };
  }
}
