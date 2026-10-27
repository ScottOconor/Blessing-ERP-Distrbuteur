import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGE_SIZE } from '../../../../core/utils/server-list';
import { PagerComponent } from '../../../../shared/components/pager/pager.component';
import { FormsModule } from '@angular/forms';
import { AnalyticService, AnalyticAccount, AnalyticLine } from '../../services/analytic.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-analytic-lines',
  standalone: true,
  imports: [CommonModule, FormsModule, PagerComponent],
  templateUrl: './analytic-lines.component.html',
  styleUrl: './analytic-lines.component.scss'
})
export class AnalyticLinesComponent implements OnInit {
  lines: AnalyticLine[] = [];
  analyticAccounts: AnalyticAccount[] = [];
  loading = false;
  companyId = 1;

  filters = {
    analyticAccountId: null as number | null,
    from: '',
    to: ''
  };

  constructor(
    private analyticService: AnalyticService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId();
    // Date par défaut : 1er jan → aujourd'hui
    const now = new Date();
    this.filters.from = `${now.getFullYear()}-01-01`;
    this.filters.to = now.toISOString().split('T')[0];

    this.analyticService.getAccounts(this.companyId).subscribe({
      next: (a) => this.analyticAccounts = a,
      error: () => {}
    });
    this.load();
  }

  recalculating = false;

  // Pagination côté serveur : les totaux portent sur toutes les lignes filtrées.
  page = 0;
  readonly pageSize = PAGE_SIZE;
  totalElements = 0;
  totalDebit = 0;
  totalCredit = 0;
  totalSolde = 0;

  /** Nouveaux filtres : première page. */
  load(): void {
    this.page = 0;
    this.loadPage();
  }

  loadPage(): void {
    this.loading = true;
    this.analyticService.getLinesPage({
      companyId: this.companyId,
      analyticAccountId: this.filters.analyticAccountId || null,
      dateFrom: this.filters.from, dateTo: this.filters.to,
      page: this.page, size: this.pageSize
    }).subscribe({
      next: (r) => {
        this.lines = r.content;
        this.totalElements = r.totalElements;
        this.totalDebit = Number(r.totals?.['debit']) || 0;
        this.totalCredit = Number(r.totals?.['credit']) || 0;
        this.totalSolde = Number(r.totals?.['solde']) || 0;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  goToPage(page: number): void {
    this.page = page;
    this.loadPage();
  }

  recalculate(): void {
    this.recalculating = true;
    this.analyticService.recalculate(this.companyId).subscribe({
      next: (res) => {
        this.recalculating = false;
        this.load();
      },
      error: () => { this.recalculating = false; }
    });
  }


  getAmountDebit(line: AnalyticLine): number {
    return line.amount > 0 ? line.amount : 0;
  }

  getAmountCredit(line: AnalyticLine): number {
    return line.amount < 0 ? Math.abs(line.amount) : 0;
  }
}
