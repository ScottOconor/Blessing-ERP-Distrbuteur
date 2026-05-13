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
  lines: CompteResultatLine[] = [];

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

  generate(): void {
    if (!this.dateFrom || !this.dateTo) { this.errorMsg = 'Sélectionnez la période'; return; }
    this.loading = true; this.generated = false; this.errorMsg = '';
    this.reportService.getCompteDeResultat({
      dateFrom: this.dateFrom, dateTo: this.dateTo,
      companyId: this.authService.getCompanyId()
    }).subscribe({
      next: (res) => {
        // Backend returns { rubriques: { TA: {code, label, amount}, ... }, totals: {...} }
        const rubriques = res.rubriques || {};
        this.lines = Object.values(rubriques).map((r: any) => ({
          code: r.code || '',
          label: r.label || '',
          current: Number(r.amount) || 0,
          isTotal: !!(r.code && r.code.startsWith('X'))
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
