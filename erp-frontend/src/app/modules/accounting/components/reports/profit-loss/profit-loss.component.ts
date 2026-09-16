import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../../../services/report.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import { CompteResultatLine } from '../../../../../core/models/report.model';
import { ExcelExportService } from '../../../../../core/services/excel-export.service';
import { PdfExportService } from '../../../../../core/services/pdf-export.service';

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
  today = new Date();
dateFromN1 = '';
  dateToN1   = '';
  lines: CompteResultatLine[] = [];
  mode = 'annuel'; // 'mensuel' | 'annuel'

  constructor(
    private reportService: ReportService,
    private authService: AuthService,
    private excelExport: ExcelExportService,
    private pdfExport: PdfExportService
  ) {}

  ngOnInit(): void {
    const now = new Date();
    this.dateTo = now.toISOString().split('T')[0];
    this.dateFrom = new Date(now.getFullYear(), 0, 1).toISOString().split('T')[0];
  }

  onModeChange(): void {
    const now = new Date();
    if (this.mode === 'mensuel') {
      // Mois précédent
      const prev = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      this.dateFrom = prev.toISOString().split('T')[0];
      this.dateTo = new Date(now.getFullYear(), now.getMonth(), 0).toISOString().split('T')[0];
    } else {
      this.dateFrom = `${now.getFullYear()}-01-01`;
      this.dateTo = now.toISOString().split('T')[0];
    }
  }

  generate(): void {
    if (!this.dateFrom || !this.dateTo) { this.errorMsg = 'Sélectionnez la période'; return; }
    this.loading = true; this.generated = false; this.errorMsg = '';
    this.reportService.getCompteDeResultat({
      dateFrom: this.dateFrom, dateTo: this.dateTo,
      companyId: this.authService.getCompanyId(),
      mode: this.mode
    }).subscribe({
      next: (res) => {
        const rubriques = res.rubriques || {};
        this.dateFromN1 = res.dateFromN1 || '';
        this.dateToN1   = res.dateToN1   || '';
        this.lines = Object.values(rubriques).map((r: any) => ({
          code:     r.code  || '',
          label:    r.label || '',
          sign:     r.sign  || '',
          current:  Number(r.amount)    || 0,
          previous: Number(r.amount_n1) || 0,
          isTotal:  !!(r.code && r.code.startsWith('X'))
        }));
        this.loading = false;
        this.generated = true;
      },
      error: (err) => { this.loading = false; this.errorMsg = err.error?.message || 'Erreur'; }
    });
  }

  print(): void { window.print(); }

  exportPdf(): void {
    this.pdfExport.exportCompteResultat(
      this.lines, this.dateFrom, this.dateTo,
      this.authService.getActiveCompany()?.name
    );
  }

  exportExcel(): void {
    this.excelExport.exportCompteResultat(this.lines, this.dateFrom, this.dateTo);
  }

  get resultNet(): number {
    const lastTotal = [...this.lines].reverse().find(l => l.isTotal);
    return lastTotal?.current || 0;
  }
}
