import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../../services/report.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountingService } from '../../services/accounting.service';
import { GrandLivreAccount } from '../../../../core/models/report.model';
import { AccountAccount } from '../../../../core/models/account.model';
import { ExcelExportService } from '../../../../core/services/excel-export.service';
import { PdfExportService } from '../../../../core/services/pdf-export.service';

@Component({
  selector: 'app-grand-livre',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grand-livre.component.html',
  styleUrl: './grand-livre.component.scss'
})
export class GrandLivreComponent implements OnInit {
  accounts: AccountAccount[] = [];
  selectedAccountIds: number[] = [];
  data: GrandLivreAccount[] = [];
  loading = false;
  generated = false;
  errorMsg = '';
  today = new Date();

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
    this.accountingService.getAccounts(this.authService.getCompanyId()).subscribe({
      next: (a) => this.accounts = a.filter(x => !x.deprecated),
      error: () => {}
    });
  }

  generate(): void {
    if (!this.dateFrom || !this.dateTo) { this.errorMsg = 'Sélectionnez la période'; return; }
    this.loading = true;
    this.generated = false;
    this.errorMsg = '';

    this.reportService.getGrandLivre({
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      companyId: this.authService.getCompanyId(),
      accountIds: this.selectedAccountIds.length > 0 ? this.selectedAccountIds : undefined
    }).subscribe({
      next: (res) => {
        // Backend returns {accounts: {"101": {...}}} — convert to array
        const raw = res.accounts || res || {};
        this.data = Object.values(raw).map((a: any) => ({
          accountCode: a.accountCode,
          accountName: a.accountName,
          totalDebit: a.totalDebit,
          totalCredit: a.totalCredit,
          finalBalance: a.finalBalance,
          lines: (a.lines || []).map((l: any) => ({
            date: l.date,
            moveRef: l.pieceName || l.ref || '',
            journalCode: l.journal || '',
            label: l.libelle || l.name || '',
            partner: l.partner || '',
            debit: l.debit,
            credit: l.credit,
            balance: l.balance
          }))
        }));
        this.loading = false;
        this.generated = true;
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la génération';
      }
    });
  }

  print(): void { window.print(); }

  exportPdf(): void {
    this.pdfExport.exportGrandLivre(this.data, this.dateFrom, this.dateTo);
  }

  exportExcel(): void {
    this.excelExport.exportGrandLivre(this.data, this.dateFrom, this.dateTo);
  }

  onAccountChange(selectedOptions: any) {
    this.selectedAccountIds = Array.from(selectedOptions).map((o: any) => +o.value);
  }

  toggleAccount(id: number): void {
    const idx = this.selectedAccountIds.indexOf(id);
    if (idx >= 0) this.selectedAccountIds.splice(idx, 1);
    else this.selectedAccountIds.push(id);
  }

  isSelected(id: number): boolean {
    return this.selectedAccountIds.includes(id);
  }
}
