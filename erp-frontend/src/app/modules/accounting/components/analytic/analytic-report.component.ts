import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnalyticService, AnalyticBalanceLine } from '../../services/analytic.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-analytic-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './analytic-report.component.html',
  styleUrl: './analytic-report.component.scss'
})
export class AnalyticReportComponent implements OnInit {
  lines: AnalyticBalanceLine[] = [];
  loading = false;
  companyId = 1;

  filters = { from: '', to: '' };

  constructor(
    private analyticService: AnalyticService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId();
    const now = new Date();
    this.filters.from = `${now.getFullYear()}-01-01`;
    this.filters.to = now.toISOString().split('T')[0];
    this.load();
  }

  recalculating = false;

  load(): void {
    this.loading = true;
    this.analyticService.getBalance(
      this.companyId,
      this.filters.from || undefined,
      this.filters.to || undefined
    ).subscribe({
      next: (lines) => { this.lines = lines; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  recalculate(): void {
    this.recalculating = true;
    this.analyticService.recalculate(this.companyId).subscribe({
      next: () => { this.recalculating = false; this.load(); },
      error: () => { this.recalculating = false; }
    });
  }

  get totalDebit(): number {
    return this.lines.reduce((s, l) => s + (l.totalDebit || 0), 0);
  }

  get totalCredit(): number {
    return this.lines.reduce((s, l) => s + (l.totalCredit || 0), 0);
  }

  get totalSolde(): number {
    return this.totalDebit - this.totalCredit;
  }

  print(): void {
    window.print();
  }
}
