import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../../../services/report.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import { AccountingService } from '../../../services/accounting.service';
import { AccountJournal } from '../../../../../core/models/account.model';
import { BalanceLine4Cols } from '../../../../../core/models/report.model';
import { ExcelExportService } from '../../../../../core/services/excel-export.service';
import { PdfExportService } from '../../../../../core/services/pdf-export.service';

@Component({
  selector: 'app-general-balance4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './general-balance4.component.html',
  styleUrl: './general-balance.component.scss'
})
export class GeneralBalance4Component implements OnInit {
  journals: AccountJournal[] = [];
  selectedJournalIds: number[] = [];
  lines: BalanceLine4Cols[] = [];
  totals: any = null;
  loading = false;
  generated = false;
  errorMsg = '';
  displayAccount = 'all';

  dateFrom = '';
  dateTo = '';

  constructor(
    private reportService: ReportService,
    private accountingService: AccountingService,
    private authService: AuthService,
    private excelExport: ExcelExportService,
    private pdfExport: PdfExportService
  ) {}

  ngOnInit(): void {
    const now = new Date();
    this.dateTo = now.toISOString().split('T')[0];
    this.dateFrom = new Date(now.getFullYear(), 0, 1).toISOString().split('T')[0];
    this.accountingService.getJournals(this.authService.getCompanyId()).subscribe({
      next: (j) => this.journals = j,
      error: () => {}
    });
  }

  generate(): void {
    if (!this.dateFrom || !this.dateTo) { this.errorMsg = 'Sélectionnez la période'; return; }
    this.loading = true;
    this.generated = false;
    this.errorMsg = '';

    this.reportService.getGeneralBalance4Cols({
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      companyId: this.authService.getCompanyId(),
      journalIds: this.selectedJournalIds.length > 0 ? this.selectedJournalIds : undefined,
      displayAccount: this.displayAccount
    }).subscribe({
      next: (res) => {
        this.lines = res.lines || res || [];
        this.totals = res.totals || null;
        this.loading = false;
        this.generated = true;
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la génération';
      }
    });
  }

  today = new Date();

  get totalDebit(): number { return this.lines.reduce((s, l) => s + (l.debit || 0), 0); }
  get totalCredit(): number { return this.lines.reduce((s, l) => s + (l.credit || 0), 0); }
  get totalFinalDebit(): number { return this.lines.reduce((s, l) => s + (l.finalDebit || 0), 0); }
  get totalFinalCredit(): number { return this.lines.reduce((s, l) => s + (l.finalCredit || 0), 0); }

  get isEquilibre(): boolean {
    if (!this.totals) return true;
    const bilanNet = (this.totals.bilanDebit || 0) - (this.totals.bilanCredit || 0);
    const gestionNet = (this.totals.gestionDebit || 0) - (this.totals.gestionCredit || 0);
    return Math.abs(bilanNet + gestionNet) <= 0.01;
  }

  getAccountClass(code: string): string { return code ? code[0] : ''; }
  print(): void { window.print(); }

  exportPdf(): void {
    this.pdfExport.exportBalance4(
      this.lines, this.totals,
      this.totalDebit, this.totalCredit,
      this.totalFinalDebit, this.totalFinalCredit,
      this.dateFrom, this.dateTo
    );
  }

  exportExcel(): void {
    this.excelExport.exportBalance4(
      this.lines, this.totals,
      this.totalDebit, this.totalCredit,
      this.totalFinalDebit, this.totalFinalCredit,
      this.dateFrom, this.dateTo
    );
  }

  onJournalChange(selectedOptions: any) {
    this.selectedJournalIds = Array.from(selectedOptions).map((o: any) => +o.value);
  }

  toggleJournal(id: number): void {
    const idx = this.selectedJournalIds.indexOf(id);
    if (idx >= 0) this.selectedJournalIds.splice(idx, 1);
    else this.selectedJournalIds.push(id);
  }
}
