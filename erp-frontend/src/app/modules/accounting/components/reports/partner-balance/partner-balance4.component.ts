import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../../../services/report.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import { AccountingService } from '../../../services/accounting.service';
import { AccountJournal } from '../../../../../core/models/account.model';
import { PartnerBalanceLine } from '../../../../../core/models/report.model';

@Component({
  selector: 'app-partner-balance4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './partner-balance4.component.html',
  styleUrl: './partner-balance.component.scss'
})
export class PartnerBalance4Component implements OnInit {
  journals: AccountJournal[] = [];
  lines: PartnerBalanceLine[] = [];
  loading = false;
  generated = false;
  errorMsg = '';
  displayAccount = 'all';
  resultSelection = 'customer_supplier';
  dateFrom = '';
  dateTo = '';

  constructor(
    private reportService: ReportService,
    private accountingService: AccountingService,
    private authService: AuthService
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
    this.reportService.getPartnerBalance4Cols({
      dateFrom: this.dateFrom, dateTo: this.dateTo,
      companyId: this.authService.getCompanyId(),
      displayAccount: this.displayAccount,
      resultSelection: this.resultSelection
    }).subscribe({
      next: (res) => { this.lines = res.lines || res || []; this.loading = false; this.generated = true; },
      error: (err) => { this.loading = false; this.errorMsg = err.error?.message || 'Erreur'; }
    });
  }

  get customers(): PartnerBalanceLine[] { return this.lines.filter(l => l.type === 'customer'); }
  get suppliers(): PartnerBalanceLine[] { return this.lines.filter(l => l.type === 'supplier'); }

  get totals() {
    return {
      debit: this.lines.reduce((s, l) => s + (l.debit || 0), 0),
      credit: this.lines.reduce((s, l) => s + (l.credit || 0), 0),
      finD: this.lines.reduce((s, l) => s + (l.finalDebit || 0), 0),
      finC: this.lines.reduce((s, l) => s + (l.finalCredit || 0), 0)
    };
  }

  print(): void { window.print(); }
}
