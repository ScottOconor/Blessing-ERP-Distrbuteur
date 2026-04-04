import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../../../services/report.service';
import { AuthService } from '../../../../../core/auth/auth.service';

interface BilanSection {
  label: string;
  lines: BilanLineDisplay[];
  total: number;
}

interface BilanLineDisplay {
  code: string;
  label: string;
  brut: number;
  amort: number;
  net: number;
  netPrevious: number;
}

@Component({
  selector: 'app-balance-sheet',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './balance-sheet.component.html',
  styleUrl: './balance-sheet.component.scss'
})
export class BalanceSheetComponent implements OnInit {
  loading = false;
  generated = false;
  errorMsg = '';
  dateTo = '';

  actifSections: BilanSection[] = [];
  passifSections: BilanSection[] = [];
  totalActif = 0;
  totalPassif = 0;

  constructor(
    private reportService: ReportService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.dateTo = new Date().toISOString().split('T')[0];
  }

  generate(): void {
    if (!this.dateTo) { this.errorMsg = 'Sélectionnez la date'; return; }
    this.loading = true; this.generated = false; this.errorMsg = '';

    this.reportService.getBilan({
      dateFrom: new Date(new Date(this.dateTo).getFullYear(), 0, 1).toISOString().split('T')[0],
      dateTo: this.dateTo,
      companyId: this.authService.getCompanyId()
    }).subscribe({
      next: (res) => {
        this.actifSections = res.actif?.sections || [];
        this.passifSections = res.passif?.sections || [];
        this.totalActif = res.actif?.total || 0;
        this.totalPassif = res.passif?.total || 0;
        this.loading = false;
        this.generated = true;
      },
      error: (err) => { this.loading = false; this.errorMsg = err.error?.message || 'Erreur'; }
    });
  }

  print(): void { window.print(); }
}
