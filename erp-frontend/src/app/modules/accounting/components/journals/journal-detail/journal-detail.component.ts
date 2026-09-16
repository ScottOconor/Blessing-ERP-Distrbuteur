import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountingService, JournalDailyBalanceDTO } from '../../../services/accounting.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import { AccountJournal } from '../../../../../core/models/account.model';
import { AccountMove } from '../../../../../core/models/move.model';

interface MonthMoves {
  monthKey: string;
  monthLabel: string;
  moves: AccountMove[];
  totalDebit: number;
  totalCredit: number;
  closingBalance: number | null;
}

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
  closingDay = false;
  closeMsg = '';
  closeError = '';

  activeTab: 'moves' | 'balances' = 'moves';

  // Filters (écritures)
  filterState = '';
  filterDateFrom = '';
  filterDateTo = '';

  // Balance range filter
  balDateFrom = '';
  balDateTo   = '';

  // Regroupement par mois (caisse/banque)
  expandedMonths = new Set<string>();
  private readonly MONTHS_FR = ['Janvier','Février','Mars','Avril','Mai','Juin',
                                 'Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

  journalTypes = [
    { value: 'sale',     label: 'Vente'   },
    { value: 'purchase', label: 'Achat'   },
    { value: 'cash',     label: 'Caisse'  },
    { value: 'bank',     label: 'Banque'  },
    { value: 'general',  label: 'OD'      }
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
      next: (data) => {
        this.moves = data;
        this.loadingMoves = false;
        const currentMonthKey = new Date().toISOString().substring(0, 7);
        this.expandedMonths.add(currentMonthKey);
      },
      error: () => { this.loadingMoves = false; }
    });
  }

  loadBalances(): void {
    this.loadingBalances = true;
    this.accountingService.getDailyBalances(this.journalId).subscribe({
      next: (data) => {
        // Trier du plus récent au plus ancien
        this.balances = data.sort((a, b) => b.date.localeCompare(a.date));
        this.loadingBalances = false;
      },
      error: () => { this.loadingBalances = false; }
    });
  }

  refresh(): void {
    this.loadMoves();
    if (this.hasDailyBalance()) this.loadBalances();
  }

  hasDailyBalance(): boolean {
    const t = this.journal?.type;
    return t === 'cash' || t === 'bank';
  }

  // ── Solde ───────────────────────────────────────────────────────────────
  get latestBalance(): JournalDailyBalanceDTO | null {
    return this.balances.length ? this.balances[0] : null;
  }

  get currentBalance(): number {
    return this.latestBalance?.closingBalance ?? 0;
  }

  get latestDate(): string {
    return this.latestBalance?.date ?? '';
  }

  get filteredBalances(): JournalDailyBalanceDTO[] {
    return this.balances.filter(b => {
      if (this.balDateFrom && b.date < this.balDateFrom) return false;
      if (this.balDateTo   && b.date > this.balDateTo)   return false;
      return true;
    });
  }

  get periodTotalDebit():  number { return this.filteredBalances.reduce((s, b) => s + b.totalDebit, 0); }
  get periodTotalCredit(): number { return this.filteredBalances.reduce((s, b) => s + b.totalCredit, 0); }
  get periodNet():         number { return this.periodTotalDebit - this.periodTotalCredit; }

  get maxBarValue(): number {
    return Math.max(...this.filteredBalances.map(b => Math.max(b.totalDebit, b.totalCredit)), 1);
  }

  barPct(val: number): number {
    return Math.round((val / this.maxBarValue) * 100);
  }

  // ── Clôture journée ──────────────────────────────────────────────────────
  closeToday(): void {
    const today = new Date().toISOString().split('T')[0];
    if (!confirm(`Clôturer la journée du ${this.fmt(today)} ? Cette action recalcule et verrouille le solde.`)) return;
    this.closingDay = true;
    this.closeMsg = '';
    this.closeError = '';
    this.accountingService.closeDayBalance(this.journalId, today).subscribe({
      next: () => {
        this.closingDay = false;
        this.closeMsg = `Journée du ${this.fmt(today)} clôturée.`;
        this.loadBalances();
        setTimeout(() => this.closeMsg = '', 4000);
      },
      error: (e) => {
        this.closingDay = false;
        this.closeError = e.error?.message || 'Erreur lors de la clôture.';
      }
    });
  }

  // ── Écritures ────────────────────────────────────────────────────────────
  get filteredMoves(): AccountMove[] {
    return this.moves.filter(m => {
      if (this.filterState    && m.state !== this.filterState)  return false;
      if (this.filterDateFrom && m.date  <  this.filterDateFrom) return false;
      if (this.filterDateTo   && m.date  >  this.filterDateTo)   return false;
      return true;
    });
  }

  totalDebit():  number { return this.filteredMoves.reduce((s, m) => s + (m.totalDebit  || 0), 0); }
  totalCredit(): number { return this.filteredMoves.reduce((s, m) => s + (m.totalCredit || 0), 0); }

  // ── Regroupement par mois (caisse/banque) ────────────────────────────────
  get monthGroups(): MonthMoves[] {
    const map = new Map<string, AccountMove[]>();
    for (const move of this.filteredMoves) {
      const key = move.date.substring(0, 7);
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(move);
    }
    return [...map.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([key, moves]) => {
        const [y, m]     = key.split('-');
        const label      = `${this.MONTHS_FR[parseInt(m) - 1]} ${y}`;
        const totalDebit  = moves.reduce((s, mv) => s + (mv.totalDebit  ?? 0), 0);
        const totalCredit = moves.reduce((s, mv) => s + (mv.totalCredit ?? 0), 0);
        // Solde fin de mois = dernier solde journalier du mois dans this.balances
        const monthBals = this.balances.filter(b => b.date.startsWith(key));
        const closingBalance = monthBals.length > 0
          ? monthBals.reduce((best, b) => b.date > best.date ? b : best).closingBalance
          : null;
        return { monthKey: key, monthLabel: label, moves, totalDebit, totalCredit, closingBalance };
      });
  }

  toggleMonth(key: string): void {
    if (this.expandedMonths.has(key)) this.expandedMonths.delete(key);
    else this.expandedMonths.add(key);
  }
  isMonthExpanded(key: string): boolean { return this.expandedMonths.has(key); }
  expandAllMonths():   void { this.monthGroups.forEach(g => this.expandedMonths.add(g.monthKey)); }
  collapseAllMonths(): void { this.expandedMonths.clear(); }

  // ── Helpers ──────────────────────────────────────────────────────────────
  fmt(d: string): string {
    if (!d) return '—';
    const [y, m, dd] = d.split('-');
    return `${dd}/${m}/${y}`;
  }

  fmtM(n: number): string {
    if (Math.abs(n) >= 1_000_000) return (n / 1_000_000).toFixed(2).replace('.', ',') + ' M';
    if (Math.abs(n) >= 1_000)     return (n / 1_000).toFixed(0) + ' K';
    return Math.round(n).toString();
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

  back(): void { this.router.navigate(['/accounting/journals']); }
  clearFilters(): void { this.filterState = ''; this.filterDateFrom = ''; this.filterDateTo = ''; }
}
