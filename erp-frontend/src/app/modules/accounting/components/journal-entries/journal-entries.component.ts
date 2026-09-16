import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountingService } from '../../services/accounting.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountMove } from '../../../../core/models/move.model';
import { AccountJournal } from '../../../../core/models/account.model';
import * as XLSX from 'xlsx';

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

  get filteredMoves(): AccountMove[] {
    if (!this.search.trim()) return this.moves;
    const s = this.search.toLowerCase().trim();
    return this.moves.filter(m =>
      (m.name || '').toLowerCase().includes(s) ||
      (m.ref || '').toLowerCase().includes(s) ||
      (m.partnerName || '').toLowerCase().includes(s)
    );
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
    this.filters = {
      journalId: '',
      dateFrom: JournalEntriesComponent.firstDayOfMonth(),
      dateTo: JournalEntriesComponent.today(),
      state: ''
    };
    this.search = '';
    this.loadMoves();
  }

  exportToExcel(): void {
    const data = this.filteredMoves.map(m => ({
      'N° Pièce': m.name || 'Brouillon',
      'Date': m.date ? new Date(m.date).toLocaleDateString('fr-FR') : '',
      'Journal': m.journalName || '',
      'Référence': m.ref || '',
      'Partenaire': m.partnerName || '',
      'Total Débit': m.totalDebit || 0,
      'Total Crédit': m.totalCredit || 0,
      'Statut': this.getStateLabel(m.state)
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    ws['!cols'] = [20, 14, 20, 24, 24, 16, 16, 12].map(wch => ({ wch }));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Pièces');
    XLSX.writeFile(wb, `ecritures_${JournalEntriesComponent.today()}.xlsx`);
  }

  postMove(id: number, event: Event): void {
    event.stopPropagation();
    if (!confirm('Valider cette pièce ? Cette action est irréversible.')) return;
    this.accountingService.postMove(id).subscribe({
      next: () => this.loadMoves(),
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
