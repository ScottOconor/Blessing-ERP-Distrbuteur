import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { HelpdeskService, Ticket, TicketStatus, TicketPriority, TicketCategory } from '../../services/helpdesk.service';
import { PAGE_SIZE } from '../../../../core/utils/server-list';
import { PagerComponent } from '../../../../shared/components/pager/pager.component';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PagerComponent],
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

  // Pagination côté serveur (un non-administrateur ne reçoit que ses tickets, imposé par le serveur).
  page = 0;
  readonly pageSize = PAGE_SIZE;
  totalElements = 0;

  /** Nouveaux filtres : première page. */
  load(): void {
    this.page = 0;
    this.loadPage();
  }

  loadPage(): void {
    this.loading = true;
    const isAdmin  = this.authService.isAdmin();
    const username = this.authService.getSession()?.username ?? '';
    this.helpdeskService.getTicketsPage({
      companyId: this.authService.getCompanyId(),
      status: this.filterStatus, priority: this.filterPriority, category: this.filterCategory,
      assignedTo: isAdmin && this.myTicketsOnly ? username : null,
      page: this.page, size: this.pageSize
    }).subscribe({
      next: (r) => { this.tickets = r.content; this.totalElements = r.totalElements; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  goToPage(page: number): void {
    this.page = page;
    this.loadPage();
  }

  get filtered(): Ticket[] { return this.tickets; }

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
