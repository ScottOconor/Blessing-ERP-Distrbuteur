import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnalyticService, AnalyticAccount, AnalyticLine } from '../../services/analytic.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-analytic-lines',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  load(): void {
    this.loading = true;
    this.analyticService.getLines(this.companyId, {
      analyticAccountId: this.filters.analyticAccountId || undefined,
      from: this.filters.from || undefined,
      to: this.filters.to || undefined
    }).subscribe({
      next: (lines) => { this.lines = lines; this.loading = false; },
      error: () => { this.loading = false; }
    });
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

  get totalDebit(): number {
    return this.lines.filter(l => l.amount > 0).reduce((s, l) => s + l.amount, 0);
  }

  get totalCredit(): number {
    return this.lines.filter(l => l.amount < 0).reduce((s, l) => s + Math.abs(l.amount), 0);
  }

  get totalSolde(): number {
    return this.lines.reduce((s, l) => s + l.amount, 0);
  }

  getAmountDebit(line: AnalyticLine): number {
    return line.amount > 0 ? line.amount : 0;
  }

  getAmountCredit(line: AnalyticLine): number {
    return line.amount < 0 ? Math.abs(line.amount) : 0;
  }
}
