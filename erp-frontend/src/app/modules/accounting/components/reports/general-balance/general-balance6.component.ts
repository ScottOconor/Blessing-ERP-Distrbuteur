import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../../../services/report.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import { AccountingService } from '../../../services/accounting.service';
import { AccountJournal } from '../../../../../core/models/account.model';
import { BalanceLine6Cols } from '../../../../../core/models/report.model';
import { ExcelExportService } from '../../../../../core/services/excel-export.service';
import { PdfExportService } from '../../../../../core/services/pdf-export.service';

@Component({
  selector: 'app-general-balance6',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './general-balance6.component.html',
  styleUrl: './general-balance.component.scss'
})
export class GeneralBalance6Component implements OnInit {
  journals: AccountJournal[] = [];
  selectedJournalIds: number[] = [];
  lines: BalanceLine6Cols[] = [];
  apiTotals: any = null;
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
      next: (j) => this.journals = j, error: () => {}
    });
  }

  generate(): void {
    if (!this.dateFrom || !this.dateTo) { this.errorMsg = 'Sélectionnez la période'; return; }
    this.loading = true; this.generated = false; this.errorMsg = '';
    this.reportService.getGeneralBalance6Cols({
      dateFrom: this.dateFrom, dateTo: this.dateTo,
      companyId: this.authService.getCompanyId(),
      journalIds: this.selectedJournalIds.length > 0 ? this.selectedJournalIds : undefined,
      displayAccount: this.displayAccount
    }).subscribe({
      next: (res) => { this.lines = res.lines || res || []; this.apiTotals = res.totals || null; this.loading = false; this.generated = true; },
      error: (err) => { this.loading = false; this.errorMsg = err.error?.message || 'Erreur'; }
    });
  }

  get totals() {
    return {
      initD: this.lines.reduce((s, l) => s + (l.initialDebit || 0), 0),
      initC: this.lines.reduce((s, l) => s + (l.initialCredit || 0), 0),
      mvtD: this.lines.reduce((s, l) => s + (l.debit || 0), 0),
      mvtC: this.lines.reduce((s, l) => s + (l.credit || 0), 0),
      finD: this.lines.reduce((s, l) => s + (l.finalDebit || 0), 0),
      finC: this.lines.reduce((s, l) => s + (l.finalCredit || 0), 0)
    };
  }

  today = new Date();

  get bilanTotals() {
    const d = this.lines.filter(l => l.accountCode?.[0] >= '1' && l.accountCode?.[0] <= '5');
    return { initD: d.reduce((s,l) => s+(l.initialDebit||0),0), initC: d.reduce((s,l) => s+(l.initialCredit||0),0), mvtD: d.reduce((s,l) => s+(l.debit||0),0), mvtC: d.reduce((s,l) => s+(l.credit||0),0), finD: d.reduce((s,l) => s+(l.finalDebit||0),0), finC: d.reduce((s,l) => s+(l.finalCredit||0),0) };
  }
  get gestionTotals() {
    const d = this.lines.filter(l => l.accountCode?.[0] >= '6' && l.accountCode?.[0] <= '8');
    return { initD: d.reduce((s,l) => s+(l.initialDebit||0),0), initC: d.reduce((s,l) => s+(l.initialCredit||0),0), mvtD: d.reduce((s,l) => s+(l.debit||0),0), mvtC: d.reduce((s,l) => s+(l.credit||0),0), finD: d.reduce((s,l) => s+(l.finalDebit||0),0), finC: d.reduce((s,l) => s+(l.finalCredit||0),0) };
  }

  get isEquilibre(): boolean {
    const bt = this.bilanTotals; const gt = this.gestionTotals;
    const bNet = (bt.finD - bt.finC); const gNet = (gt.finD - gt.finC);
    return Math.abs(bNet + gNet) <= 0.01;
  }

  getAccountClass(code: string): string { return code ? code[0] : ''; }
  print(): void { window.print(); }

  exportPdf(): void {
    this.pdfExport.exportBalance6(
      this.lines, this.bilanTotals, this.gestionTotals, this.totals,
      this.dateFrom, this.dateTo,
      this.authService.getActiveCompany()?.name
    );
  }

  exportExcel(): void {
    this.excelExport.exportBalance6(
      this.lines, this.bilanTotals, this.gestionTotals, this.totals,
      this.dateFrom, this.dateTo
    );
  }
  onJournalChange(selectedOptions: any) {
    this.selectedJournalIds = Array.from(selectedOptions).map((o: any) => +o.value);
  }

  toggleJournal(id: number): void {
    const idx = this.selectedJournalIds.indexOf(id);
    if (idx >= 0) this.selectedJournalIds.splice(idx, 1); else this.selectedJournalIds.push(id);
  }
}
