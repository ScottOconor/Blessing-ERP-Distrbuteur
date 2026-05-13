import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountingService } from '../../services/accounting.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountMove } from '../../../../core/models/move.model';
import { AccountJournal } from '../../../../core/models/account.model';

@Component({
  selector: 'app-journal-entries',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './journal-entries.component.html',
  styleUrl: './journal-entries.component.scss'
})
export class JournalEntriesComponent implements OnInit {
  moves: AccountMove[] = [];
  journals: AccountJournal[] = [];
  loading = false;
  confirmCancelId: number | null = null;

  private static today(): string { return new Date().toISOString().split('T')[0]; }

  filters = {
    journalId: '',
    dateFrom: JournalEntriesComponent.today(),
    dateTo: JournalEntriesComponent.today(),
    state: ''
  };

  constructor(
    private accountingService: AccountingService,
    private authService: AuthService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const companyId = this.authService.getCompanyId();
    this.accountingService.getJournals(companyId).subscribe({
      next: (j) => this.journals = j,
      error: () => {}
    });
    this.route.queryParams.subscribe(params => {
      this.filters.state = params['state'] || '';
      this.loadMoves();
    });
  }

  loadData(): void {
    this.loadMoves();
  }

  loadMoves(): void {
    this.loading = true;
    const companyId = this.authService.getCompanyId();
    const params: any = {};
    if (this.filters.journalId) params['journalId'] = this.filters.journalId;
    if (this.filters.dateFrom) params['dateFrom'] = this.filters.dateFrom;
    if (this.filters.dateTo) params['dateTo'] = this.filters.dateTo;
    if (this.filters.state) params['state'] = this.filters.state;

    this.accountingService.getMoves(companyId, params).subscribe({
      next: (data) => { this.moves = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  resetFilters(): void {
    const today = JournalEntriesComponent.today();
    this.filters = { journalId: '', dateFrom: today, dateTo: today, state: '' };
    this.loadMoves();
  }

  postMove(id: number, event: Event): void {
    event.stopPropagation();
    if (!confirm('Valider cette écriture ? Cette action est irréversible.')) return;
    this.accountingService.postMove(id).subscribe({
      next: () => this.loadMoves(),
      error: (err) => alert(err.error?.message || 'Erreur lors de la validation')
    });
  }

  reverseMove(id: number, event: Event): void {
    event.stopPropagation();
    if (!confirm('Extourner cette écriture ? Une écriture inverse validée sera créée.')) return;
    this.accountingService.reverseMove(id).subscribe({
      next: (reversed) => {
        this.loadMoves();
        this.router.navigate(['/accounting/journal-entries', reversed.id]);
      },
      error: (err) => alert(err.error?.message || 'Erreur lors de l\'extourne')
    });
  }

  getStateLabel(state?: string): string {
    const map: Record<string, string> = { draft: 'Brouillon', posted: 'Validé', cancel: 'Annulé' };
    return map[state || ''] || state || '';
  }

  getStateBadgeClass(state?: string): string {
    const map: Record<string, string> = { draft: 'badge-draft', posted: 'badge-posted', cancel: 'badge-cancel' };
    return 'badge ' + (map[state || ''] || 'badge-secondary');
  }
}
