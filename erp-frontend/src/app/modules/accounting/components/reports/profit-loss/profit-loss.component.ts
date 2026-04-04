import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../../../services/report.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import { CompteResultatLine } from '../../../../../core/models/report.model';

@Component({
  selector: 'app-profit-loss',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profit-loss.component.html',
  styleUrl: './profit-loss.component.scss'
})
export class ProfitLossComponent implements OnInit {
  loading = false;
  generated = false;
  errorMsg = '';
  dateFrom = '';
  dateTo = '';
  lines: CompteResultatLine[] = [];

  constructor(
    private reportService: ReportService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const now = new Date();
    this.dateTo = now.toISOString().split('T')[0];
    this.dateFrom = new Date(now.getFullYear(), 0, 1).toISOString().split('T')[0];
  }

  generate(): void {
    if (!this.dateFrom || !this.dateTo) { this.errorMsg = 'Sélectionnez la période'; return; }
    this.loading = true; this.generated = false; this.errorMsg = '';
    this.reportService.getCompteDeResultat({
      dateFrom: this.dateFrom, dateTo: this.dateTo,
      companyId: this.authService.getCompanyId()
    }).subscribe({
      next: (res) => {
        this.lines = res.lines || res || [];
        this.loading = false;
        this.generated = true;
      },
      error: (err) => { this.loading = false; this.errorMsg = err.error?.message || 'Erreur'; }
    });
  }

  print(): void { window.print(); }

  get resultNet(): number {
    const lastTotal = [...this.lines].reverse().find(l => l.isTotal);
    return lastTotal?.current || 0;
  }
}
