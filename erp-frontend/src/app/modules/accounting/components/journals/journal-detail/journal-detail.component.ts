import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountingService, JournalDailyBalanceDTO } from '../../../services/accounting.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import { AccountJournal } from '../../../../../core/models/account.model';
import { AccountMove } from '../../../../../core/models/move.model';

@Component({
  selector: 'app-journal-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './journal-detail.component.html',
  styleUrl: './journal-detail.component.scss'
})
export class JournalDetailComponent implements OnInit {
  journalId!: number;
  journal: AccountJournal | null = null;
  moves: AccountMove[] = [];
  balances: JournalDailyBalanceDTO[] = [];

  loading = false;
  loadingMoves = false;
  loadingBalances = false;

  activeTab: 'moves' | 'balances' = 'moves';

  // Filters
  filterState = '';
  filterDateFrom = '';
  filterDateTo = '';

  journalTypes = [
    { value: 'sale', label: 'Vente' },
    { value: 'purchase', label: 'Achat' },
    { value: 'cash', label: 'Caisse' },
    { value: 'bank', label: 'Banque' },
    { value: 'general', label: 'OD' }
  ];

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private accountingService: AccountingService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.journalId = +this.route.snapshot.paramMap.get('id')!;
    this.loadJournal();
    this.loadMoves();
  }

  loadJournal(): void {
    const companyId = this.authService.getCompanyId();
    this.accountingService.getJournals(companyId).subscribe({
      next: (journals) => {
        this.journal = journals.find(j => j.id === this.journalId) || null;
        if (this.journal && this.hasDailyBalance()) {
          this.loadBalances();
        }
      }
    });
  }

  loadMoves(): void {
    this.loadingMoves = true;
    const companyId = this.authService.getCompanyId();
    this.accountingService.getJournalMoves(this.journalId, companyId).subscribe({
      next: (data) => { this.moves = data; this.loadingMoves = false; },
      error: () => { this.loadingMoves = false; }
    });
  }

  loadBalances(): void {
    this.loadingBalances = true;
    this.accountingService.getDailyBalances(this.journalId).subscribe({
      next: (data) => { this.balances = data; this.loadingBalances = false; },
      error: () => { this.loadingBalances = false; }
    });
  }

  hasDailyBalance(): boolean {
    const t = this.journal?.type;
    return t === 'cash' || t === 'bank' || t === 'sale' || t === 'purchase';
  }

  get filteredMoves(): AccountMove[] {
    return this.moves.filter(m => {
      if (this.filterState && m.state !== this.filterState) return false;
      if (this.filterDateFrom && m.date < this.filterDateFrom) return false;
      if (this.filterDateTo && m.date > this.filterDateTo) return false;
      return true;
    });
  }

  getTypeLabel(type: string): string {
    return this.journalTypes.find(t => t.value === type)?.label || type;
  }

  getStateBadge(state: string): string {
    const map: Record<string, string> = {
      draft: 'badge-draft', posted: 'badge-posted', cancel: 'badge-cancelled'
    };
    return 'badge ' + (map[state] || 'badge-draft');
  }

  getStateLabel(state: string): string {
    const map: Record<string, string> = {
      draft: 'Brouillon', posted: 'Validée', cancel: 'Annulée'
    };
    return map[state] || state;
  }

  openEntry(move: AccountMove): void {
    this.router.navigate(['/accounting/journal-entries', move.id]);
  }

  back(): void {
    this.router.navigate(['/accounting/journals']);
  }

  clearFilters(): void {
    this.filterState = '';
    this.filterDateFrom = '';
    this.filterDateTo = '';
  }

  totalDebit(): number {
    return this.filteredMoves.reduce((s, m) => s + (m.totalDebit || 0), 0);
  }

  totalCredit(): number {
    return this.filteredMoves.reduce((s, m) => s + (m.totalCredit || 0), 0);
  }
}
