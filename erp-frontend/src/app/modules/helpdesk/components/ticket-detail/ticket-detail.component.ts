import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { HelpdeskService, Ticket, TicketComment } from '../../services/helpdesk.service';
import { AuditTrailComponent } from '../../../../shared/components/audit-trail/audit-trail.component';

@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, AuditTrailComponent],
  templateUrl: './ticket-detail.component.html',
  styleUrl: './ticket-detail.component.scss'
})
export class TicketDetailComponent implements OnInit {
  ticket: Ticket | null = null;
  loading = true;
  saving = false;
  errorMsg = '';
  successMsg = '';

  newComment = '';
  newCommentInternal = false;
  sendingComment = false;

  editing = false;

  constructor(
    private helpdeskService: HelpdeskService,
    private authService: AuthService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.load(+id);
  }

  load(id: number): void {
    this.loading = true;
    this.helpdeskService.getTicket(id).subscribe({
      next: (t) => { this.ticket = t; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  save(): void {
    if (!this.ticket?.id) return;
    this.saving = true;
    this.helpdeskService.updateTicket(this.ticket.id, {
      title: this.ticket.title,
      description: this.ticket.description,
      priority: this.ticket.priority,
      category: this.ticket.category
    }).subscribe({
      next: (t) => {
        this.ticket = { ...t, comments: this.ticket?.comments };
        this.saving = false; this.editing = false;
        this.showSuccess('Ticket mis à jour');
      },
      error: (e) => { this.saving = false; this.errorMsg = e.error?.message || 'Erreur de sauvegarde'; }
    });
  }

  sendComment(): void {
    if (!this.ticket?.id || !this.newComment.trim()) return;
    this.sendingComment = true;
    const comment: TicketComment = {
      content: this.newComment,
      authorUsername: this.authService.getSession()?.username ?? '',
      internal: this.newCommentInternal
    };
    this.helpdeskService.addComment(this.ticket.id, comment).subscribe({
      next: (c) => {
        this.ticket!.comments = [...(this.ticket!.comments || []), c];
        this.newComment = '';
        this.newCommentInternal = false;
        this.sendingComment = false;
      },
      error: () => { this.sendingComment = false; }
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

  showSuccess(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 3500);
  }
}
