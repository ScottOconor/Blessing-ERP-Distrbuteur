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
  template: `
<div class="page-container">
  <div class="page-header">
    <h1 class="page-title">
      <span class="material-icons">dashboard</span>
      Tableau de bord
    </h1>
    <div class="page-actions">
      <button class="btn btn-primary" (click)="router.navigate(['/accounting/journal-entries/new'])">
        <span class="material-icons">add</span>
        Nouvelle écriture
      </button>
    </div>
  </div>

  <!-- STATS -->
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon primary">
        <span class="material-icons">receipt_long</span>
      </div>
      <div class="stat-info">
        <div class="stat-value">{{ stats.movesThisMonth }}</div>
        <div class="stat-label">Écritures ce mois</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon secondary">
        <span class="material-icons">book</span>
      </div>
      <div class="stat-info">
        <div class="stat-value">{{ stats.journalsCount }}</div>
        <div class="stat-label">Journaux actifs</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon success">
        <span class="material-icons">account_tree</span>
      </div>
      <div class="stat-info">
        <div class="stat-value">{{ stats.accountsCount }}</div>
        <div class="stat-label">Comptes actifs</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon warning">
        <span class="material-icons">pending_actions</span>
      </div>
      <div class="stat-info">
        <div class="stat-value">{{ stats.draftCount }}</div>
        <div class="stat-label">Brouillons en attente</div>
      </div>
    </div>
  </div>

  <!-- RECENT MOVES -->
  <div class="card">
    <div class="card-header">
      <h3>
        <span class="material-icons" style="font-size:18px;color:#714B67;margin-right:6px;">history</span>
        Dernières écritures
      </h3>
      <button class="btn btn-outline btn-sm" (click)="router.navigate(['/accounting/journal-entries'])">
        Voir tout
      </button>
    </div>
    <div class="card-body" style="padding:0">
      @if (loading) {
        <div style="text-align:center;padding:40px">
          <div class="spinner"></div>
        </div>
      } @else if (recentMoves.length === 0) {
        <div class="empty-state">
          <span class="material-icons">receipt_long</span>
          <h3>Aucune écriture</h3>
          <p>Commencez par créer votre première écriture comptable.</p>
        </div>
      } @else {
        <table class="table-erp">
          <thead>
            <tr>
              <th>N° Pièce</th>
              <th>Date</th>
              <th>Journal</th>
              <th>Référence</th>
              <th>Partenaire</th>
              <th class="text-right">Total Débit</th>
              <th class="text-right">Total Crédit</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            @for (move of recentMoves; track move.id) {
              <tr (click)="router.navigate(['/accounting/journal-entries', move.id])" style="cursor:pointer">
                <td><strong>{{ move.name || 'Brouillon' }}</strong></td>
                <td>{{ move.date | date:'dd/MM/yyyy' }}</td>
                <td>{{ move.journalName }}</td>
                <td class="text-muted">{{ move.ref || '-' }}</td>
                <td>{{ move.partnerName || '-' }}</td>
                <td class="text-right amount-debit">{{ move.totalDebit | number:'1.2-2' }}</td>
                <td class="text-right amount-credit">{{ move.totalCredit | number:'1.2-2' }}</td>
                <td>
                  <span class="badge" [class]="'badge-' + move.state">
                    {{ getStateLabel(move.state) }}
                  </span>
                </td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>
  </div>

  <!-- QUICK ACTIONS -->
  <div class="quick-actions mt-4">
    <h3 class="mb-3">Accès rapides</h3>
    <div class="quick-grid">
      @for (action of quickActions; track action.label) {
        <div class="quick-card" (click)="router.navigate([action.route])">
          <span class="material-icons" [style.color]="action.color">{{ action.icon }}</span>
          <span>{{ action.label }}</span>
        </div>
      }
    </div>
  </div>
</div>
  `,
  styles: [`
    .quick-actions h3 { font-size: 16px; color: #495057; }
    .quick-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 12px;
    }
    .quick-card {
      background: white;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      transition: all 0.2s;
      font-size: 13px;
      font-weight: 500;
      color: #495057;
      .material-icons { font-size: 24px; }
      &:hover { border-color: #714B67; color: #714B67; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transform: translateY(-2px); }
    }
  `]
})
export class DashboardComponent implements OnInit {
  loading = false;
  recentMoves: AccountMove[] = [];

  stats = {
    movesThisMonth: 0,
    journalsCount: 0,
    accountsCount: 0,
    draftCount: 0
  };

  quickActions = [
    { label: 'Nouvelle écriture', icon: 'add_circle', color: '#714B67', route: '/accounting/journal-entries/new' },
    { label: 'Plan comptable', icon: 'account_tree', color: '#017E84', route: '/accounting/chart-of-accounts' },
    { label: 'Journaux', icon: 'book', color: '#00A09D', route: '/accounting/journals' },
    { label: 'Grand Livre', icon: 'menu_book', color: '#F06050', route: '/accounting/grand-livre' },
    { label: 'Balance 4 cols', icon: 'table_chart', color: '#6c5ce7', route: '/accounting/reports/general-balance-4' },
    { label: 'Bilan OHADA', icon: 'account_balance', color: '#0984e3', route: '/accounting/reports/balance-sheet' }
  ];

  constructor(
    public router: Router,
    private accountingService: AccountingService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    const companyId = this.authService.getCompanyId();

    this.accountingService.getMoves(companyId, { pageSize: 10 }).subscribe({
      next: (moves) => {
        this.recentMoves = moves.slice(0, 10);
        this.stats.movesThisMonth = moves.length;
        this.stats.draftCount = moves.filter(m => m.state === 'draft').length;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });

    this.accountingService.getJournals(companyId).subscribe({
      next: (j) => this.stats.journalsCount = j.filter(x => x.active).length,
      error: () => {}
    });

    this.accountingService.getAccounts(companyId).subscribe({
      next: (a) => this.stats.accountsCount = a.filter(x => !x.deprecated).length,
      error: () => {}
    });
  }

  getStateLabel(state?: string): string {
    const map: Record<string, string> = { draft: 'Brouillon', posted: 'Validé', cancel: 'Annulé' };
    return map[state || ''] || state || '';
  }
}
