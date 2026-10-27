import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountingService } from '../../services/accounting.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountMove } from '../../../../core/models/move.model';
import { AccountJournal } from '../../../../core/models/account.model';
import { exportObjectsToExcel } from '../../../../core/utils/excel-import.util';
import { PAGE_SIZE, ListQuery, fetchAllPages } from '../../../../core/utils/server-list';
import { PagerComponent } from '../../../../shared/components/pager/pager.component';

@Component({
  selector: 'app-journal-entries',
  standalone: true,
  imports: [CommonModule, FormsModule, PagerComponent],
  templateUrl: './journal-entries.component.html',
  styleUrl: './journal-entries.component.scss'
})
export class JournalEntriesComponent implements OnInit {
  /** Page affichée : filtres, recherche et tri appliqués par le serveur. */
  moves: AccountMove[] = [];
  totalElements = 0;
  page = 0;
  readonly pageSize = PAGE_SIZE;
  exporting = false;
  private searchTimer?: ReturnType<typeof setTimeout>;
  journals: AccountJournal[] = [];
  loading = false;
  confirmCancelId: number | null = null;
  search = '';

  private static today(): string { return new Date().toISOString().split('T')[0]; }
  private static firstDayOfMonth(): string {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1).toISOString().split('T')[0];
  }

  filters = {
    journalId: '',
    dateFrom: JournalEntriesComponent.firstDayOfMonth(),
    dateTo: JournalEntriesComponent.today(),
    state: ''
  };

  /** Filtres courants envoyés au serveur. */
  private query(): ListQuery {
    return {
      companyId: this.authService.getCompanyId(),
      journalId: this.filters.journalId,
      dateFrom: this.filters.dateFrom,
      dateTo: this.filters.dateTo,
      state: this.filters.state,
      search: this.search.trim()
    };
  }

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

  /** Nouveaux filtres : retour à la première page. */
  loadMoves(): void {
    this.page = 0;
    this.loadPage();
  }

  loadPage(): void {
    this.loading = true;
    this.accountingService.getMovesPage({ ...this.query(), page: this.page, size: this.pageSize }).subscribe({
      next: (r) => { this.moves = r.content; this.totalElements = r.totalElements; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  goToPage(page: number): void {
    this.page = page;
    this.loadPage();
  }

  /** Recherche appliquée par le serveur, peu après la frappe. */
  onSearchChange(): void {
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => this.loadMoves(), 350);
  }

  resetFilters(): void {
    this.filters = {
      journalId: '',
      dateFrom: JournalEntriesComponent.firstDayOfMonth(),
      dateTo: JournalEntriesComponent.today(),
      state: ''
    };
    this.search = '';
    this.loadMoves();
  }

  /** Export de toutes les pièces filtrées (pas seulement de la page affichée). */
  async exportToExcel(): Promise<void> {
    this.exporting = true;
    let all: AccountMove[];
    try {
      all = await fetchAllPages(
        (page, size) => this.accountingService.getMovesPage({ ...this.query(), page, size }));
    } finally {
      this.exporting = false;
    }
    const data = all.map(m => ({
      'N° Pièce': m.name || 'Brouillon',
      'Date': m.date ? new Date(m.date).toLocaleDateString('fr-FR') : '',
      'Journal': m.journalName || '',
      'Référence': m.ref || '',
      'Partenaire': m.partnerName || '',
      'Total Débit': m.totalDebit || 0,
      'Total Crédit': m.totalCredit || 0,
      'Statut': this.getStateLabel(m.state)
    }));
    exportObjectsToExcel(data, 'Pièces', [20, 14, 20, 24, 24, 16, 16, 12], `ecritures_${JournalEntriesComponent.today()}.xlsx`);
  }

  postMove(id: number, event: Event): void {
    event.stopPropagation();
    if (!confirm('Valider cette pièce ? Cette action est irréversible.')) return;
    this.accountingService.postMove(id).subscribe({
      next: () => this.loadPage(),
      error: (err) => alert(err.error?.message || 'Erreur lors de la validation')
    });
  }

  reverseMove(id: number, event: Event): void {
    event.stopPropagation();
    if (!confirm('Extourner cette pièce ? Une pièce inverse validée sera créée.')) return;
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
