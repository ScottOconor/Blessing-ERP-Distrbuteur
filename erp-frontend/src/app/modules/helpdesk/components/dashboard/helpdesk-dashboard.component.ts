import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { HelpdeskService, Ticket, TicketStats } from '../../services/helpdesk.service';

@Component({
  selector: 'app-helpdesk-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './helpdesk-dashboard.component.html',
  styleUrl: './helpdesk-dashboard.component.scss'
})
export class HelpdeskDashboardComponent implements OnInit {
  stats: TicketStats | null = null;
  recentTickets: Ticket[] = [];
  loading = true;

  constructor(
    private helpdeskService: HelpdeskService,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const companyId = this.authService.getCompanyId();
    this.helpdeskService.getStats(companyId).subscribe({
      next: (s) => { this.stats = s; this.loading = false; },
      error: () => { this.loading = false; }
    });
    this.helpdeskService.getTickets(companyId).subscribe({
      next: (tickets) => { this.recentTickets = tickets.slice(0, 8); }
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
}
