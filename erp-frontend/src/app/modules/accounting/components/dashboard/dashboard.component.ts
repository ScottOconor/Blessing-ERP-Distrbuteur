import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AccountingService } from '../../services/accounting.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountMove } from '../../../../core/models/move.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  loading = false;
  today   = new Date();
  recentMoves: AccountMove[] = [];

  stats = {
    postedCount:   0,
    draftCount:    0,
    journalsCount: 0,
    accountsCount: 0,
    totalDebit:    0,
    totalCredit:   0,
  };

  get companyName(): string { return this.authService.getActiveCompany()?.name ?? ''; }

  get currentMonthLabel(): string {
    return this.today.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  }

  quickActions = [
    { label: 'Nouvelle écriture',    icon: 'add_circle',    color: '#2563eb', route: '/accounting/journal-entries/new' },
    { label: 'Toutes les écritures', icon: 'receipt_long',  color: '#374151', route: '/accounting/journal-entries' },
    { label: 'Plan comptable',       icon: 'account_tree',  color: '#0891b2', route: '/accounting/chart-of-accounts' },
    { label: 'Journaux',             icon: 'book',          color: '#059669', route: '/accounting/journals' },
    { label: 'Grand Livre Comptes',  icon: 'menu_book',     color: '#7c3aed', route: '/accounting/grand-livre' },
    { label: 'Grand Livre Tiers',    icon: 'people',        color: '#db2777', route: '/accounting/grand-livre-tiers' },
    { label: 'Balance 4 colonnes',   icon: 'table_chart',   color: '#d97706', route: '/accounting/reports/general-balance-4' },
    { label: 'Balance 6 colonnes',   icon: 'table_chart',   color: '#2563eb', route: '/accounting/reports/general-balance-6' },
    { label: 'Balance Tiers 4 col',  icon: 'people_outline',color: '#16a34a', route: '/accounting/reports/partner-balance-4' },
    { label: 'Balance Tiers 6 col',  icon: 'people_outline',color: '#be185d', route: '/accounting/reports/partner-balance-6' },
    { label: 'Bilan OHADA',          icon: 'account_balance',color: '#dc2626', route: '/accounting/reports/balance-sheet' },
    { label: 'Compte de Résultat',   icon: 'trending_up',   color: '#0284c7', route: '/accounting/reports/profit-loss' },
    { label: 'Balance Analytique',   icon: 'analytics',     color: '#7c3aed', route: '/accounting/analytic/report' },
    { label: 'Comptes Analytiques',  icon: 'account_tree',  color: '#64748b', route: '/accounting/analytic/accounts' },
  ];

  constructor(
    public  router: Router,
    private accountingService: AccountingService,
    private authService: AuthService
  ) {}

  ngOnInit(): void { this.loadData(); }

  loadData(): void {
    this.loading = true;
    const cid = this.authService.getCompanyId();

    this.accountingService.getMoves(cid, { pageSize: 50 }).subscribe({
      next: (moves) => {
        this.recentMoves = moves.slice(0, 12);
        const posted = moves.filter(m => m.state === 'posted');
        this.stats.postedCount  = posted.length;
        this.stats.draftCount   = moves.filter(m => m.state === 'draft').length;
        this.stats.totalDebit   = posted.reduce((s, m) => s + (m.totalDebit  ?? 0), 0);
        this.stats.totalCredit  = posted.reduce((s, m) => s + (m.totalCredit ?? 0), 0);
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });

    this.accountingService.getJournals(cid).subscribe({
      next: (j) => this.stats.journalsCount = j.filter(x => x.active).length,
      error: () => {}
    });

    this.accountingService.getAccounts(cid).subscribe({
      next: (a) => this.stats.accountsCount = a.filter(x => !x.deprecated).length,
      error: () => {}
    });
  }

  getStateLabel(state?: string): string {
    const map: Record<string, string> = { draft: 'Brouillon', posted: 'Validé', cancel: 'Annulé' };
    return map[state ?? ''] ?? state ?? '';
  }

  fmt(v: number): string {
    return (v ?? 0).toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }
}
