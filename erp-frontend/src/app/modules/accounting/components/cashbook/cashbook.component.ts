import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../../services/report.service';
import { AccountingService } from '../../services/accounting.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { ExcelExportService } from '../../../../core/services/excel-export.service';
import { AccountJournal } from '../../../../core/models/account.model';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface CashLine {
  date: string;
  pieceName: string;
  ref: string;
  libelle: string;
  partner: string;
  debit: number;
  credit: number;
  balance: number;
}

interface CashJournal {
  journalId: number;
  journalName: string;
  journalCode: string;
  journalType: string;
  openingBalance: number;
  totalDebit: number;
  totalCredit: number;
  closingBalance: number;
  lines: CashLine[];
}

@Component({
  selector: 'app-cashbook',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cashbook.component.html',
  styleUrl:    './cashbook.component.scss'
})
export class CashbookComponent implements OnInit {

  // Filtres
  dateFrom = '';
  dateTo   = '';
  allJournals: AccountJournal[] = [];
  selectedJournalIds: number[] = [];
  searchJournal = '';

  // État
  loading   = false;
  generated = false;
  errorMsg  = '';
  today     = new Date();

  // Données
  journals: CashJournal[] = [];
  expandedJournals = new Set<number>();

  get companyName(): string { return this.authService.getActiveCompany()?.name ?? ''; }

  get liquidityJournals(): AccountJournal[] {
    return this.allJournals.filter(j => j.type === 'cash' || j.type === 'bank');
  }

  get filteredJournals(): CashJournal[] {
    if (!this.searchJournal.trim()) return this.journals;
    const t = this.searchJournal.toLowerCase();
    return this.journals.filter(j =>
      j.journalName.toLowerCase().includes(t) || j.journalCode.toLowerCase().includes(t)
    );
  }

  get grandTotalDebit():   number { return this.journals.reduce((s, j) => s + j.totalDebit,    0); }
  get grandTotalCredit():  number { return this.journals.reduce((s, j) => s + j.totalCredit,   0); }
  get grandClosing():      number { return this.journals.reduce((s, j) => s + j.closingBalance, 0); }

  constructor(
    private reportService:    ReportService,
    private accountingService: AccountingService,
    private authService:       AuthService,
    private excelExport:       ExcelExportService
  ) {}

  ngOnInit(): void {
    const now = new Date();
    this.dateTo   = now.toISOString().split('T')[0];
    this.dateFrom = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];

    this.accountingService.getJournals(this.authService.getCompanyId()).subscribe({
      next: (j) => this.allJournals = j.filter(x => x.active),
      error: () => {}
    });
  }

  toggleJournal(id: number): void {
    const idx = this.selectedJournalIds.indexOf(id);
    if (idx >= 0) this.selectedJournalIds.splice(idx, 1);
    else this.selectedJournalIds.push(id);
  }
  isSelected(id: number): boolean { return this.selectedJournalIds.includes(id); }
  clearJournals(): void { this.selectedJournalIds = []; }

  get selectedLabel(): string {
    if (this.selectedJournalIds.length === 0) return 'Tous les journaux de liquidité';
    if (this.selectedJournalIds.length === 1) {
      const j = this.liquidityJournals.find(x => x.id === this.selectedJournalIds[0]);
      return j ? `${j.code} — ${j.name}` : '1 journal';
    }
    return `${this.selectedJournalIds.length} journaux sélectionnés`;
  }

  generate(): void {
    if (!this.dateFrom || !this.dateTo) { this.errorMsg = 'Sélectionnez la période'; return; }
    this.loading = true; this.generated = false; this.errorMsg = '';
    this.expandedJournals.clear();

    this.reportService.getCashbook({
      dateFrom:   this.dateFrom,
      dateTo:     this.dateTo,
      companyId:  this.authService.getCompanyId(),
      journalIds: this.selectedJournalIds.length > 0 ? this.selectedJournalIds : undefined
    }).subscribe({
      next: (res: any) => {
        this.journals = (res.journals || []).map((j: any) => ({
          journalId:      j.journalId,
          journalName:    j.journalName,
          journalCode:    j.journalCode,
          journalType:    j.journalType,
          openingBalance: j.openingBalance ?? 0,
          totalDebit:     j.totalDebit    ?? 0,
          totalCredit:    j.totalCredit   ?? 0,
          closingBalance: j.closingBalance ?? 0,
          lines: (j.lines || []).map((l: any) => ({
            date:      l.date,
            pieceName: l.pieceName || '',
            ref:       l.ref       || '',
            libelle:   l.libelle   || '',
            partner:   l.partner   || '',
            debit:     l.debit  ?? 0,
            credit:    l.credit ?? 0,
            balance:   l.balance ?? 0
          }))
        }));
        this.loading   = false;
        this.generated = true;
      },
      error: (err) => {
        this.loading  = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la génération';
      }
    });
  }

  toggleExpand(id: number): void {
    if (this.expandedJournals.has(id)) this.expandedJournals.delete(id);
    else this.expandedJournals.add(id);
  }
  expandAll():   void { this.filteredJournals.forEach(j => this.expandedJournals.add(j.journalId)); }
  collapseAll(): void { this.expandedJournals.clear(); }

  journalIcon(type: string): string {
    return type === 'cash' ? 'payments' : 'account_balance';
  }
  journalColor(type: string): string {
    return type === 'cash' ? '#16a34a' : '#2563eb';
  }

  // ── Impression ────────────────────────────────────────────────────────────
  print(): void { window.print(); }

  // ── Export PDF ────────────────────────────────────────────────────────────
  exportPdf(): void {
    const doc   = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();
    const M = 10;
    let y = M;

    doc.setFont('helvetica', 'bold'); doc.setFontSize(9);
    doc.setTextColor(33, 37, 41);
    if (this.companyName) doc.text(this.companyName.toUpperCase(), M, y);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5);
    doc.setTextColor(108, 117, 125);
    doc.text('Imprimé le : ' + new Date().toLocaleString('fr-FR'), pageW - M, y, { align: 'right' });
    y += 4;
    doc.setDrawColor(0, 0, 0); doc.setLineWidth(0.5);
    doc.line(M, y, pageW - M, y); y += 4;
    doc.setFont('helvetica', 'bold'); doc.setFontSize(12); doc.setTextColor(33, 37, 41);
    doc.text('CASHBOOK', M, y); y += 5;
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(108, 117, 125);
    doc.text('Période du : ' + this.fmtDate(this.dateFrom) + '   Au : ' + this.fmtDate(this.dateTo), M, y); y += 4;
    doc.setDrawColor(180, 180, 180); doc.setLineWidth(0.2);
    doc.line(M, y, pageW - M, y); y += 4;

    const DARK:  [number,number,number] = [33,  37,  41];
    const GRAY:  [number,number,number] = [241, 245, 249];
    const GREEN: [number,number,number] = [21,  128,  61];
    const RED:   [number,number,number] = [185,  28,  28];

    for (const j of this.filteredJournals) {
      const color: [number,number,number] = j.journalType === 'cash' ? [21,128,61] : [37,99,235];

      autoTable(doc, {
        startY: y, margin: { left: M, right: M },
        head: [[
          { content: `${j.journalCode} — ${j.journalName}`, colSpan: 4,
            styles: { fillColor: color, textColor: [255,255,255] as [number,number,number], fontStyle: 'bold', fontSize: 9 } },
          { content: 'Ouv. : ' + this.fmt2(j.openingBalance),
            styles: { fillColor: color, textColor: [255,255,255] as [number,number,number], halign: 'right', fontSize: 8 } },
          { content: '+' + this.fmt2(j.totalDebit),
            styles: { fillColor: color, textColor: [255,255,255] as [number,number,number], halign: 'right', fontSize: 8 } },
          { content: '−' + this.fmt2(j.totalCredit),
            styles: { fillColor: color, textColor: [255,255,255] as [number,number,number], halign: 'right', fontSize: 8 } },
          { content: 'Clôt. : ' + this.fmt2(j.closingBalance),
            styles: { fillColor: color, textColor: [255,255,255] as [number,number,number], halign: 'right', fontStyle: 'bold', fontSize: 8 } },
        ]],
        body: [], theme: 'plain',
        styles: { fontSize: 8.5, cellPadding: { top:1.5, right:2, bottom:1.5, left:2 } },
        columnStyles: {
          0:{cellWidth:19}, 1:{cellWidth:30}, 2:{cellWidth:14}, 3:{cellWidth:80},
          4:{cellWidth:30}, 5:{cellWidth:28}, 6:{cellWidth:28}, 7:{cellWidth:28}
        }
      });
      y = (doc as any).lastAutoTable.finalY;

      if (j.lines.length > 0) {
        autoTable(doc, {
          startY: y, margin: { left: M, right: M },
          head: [['Date','N° Pièce','Journal','Libellé / Tiers','Entrées (Débit)','Sorties (Crédit)','Solde courant','']],
          body: [
            ...j.lines.map(l => [
              this.fmtDate(l.date),
              l.pieceName || l.ref || '',
              { content: j.journalCode, styles: { halign: 'center' as const } },
              l.libelle + (l.partner ? ' — ' + l.partner : ''),
              { content: l.debit  > 0 ? this.fmt2(l.debit)  : '', styles: { halign: 'right' as const } },
              { content: l.credit > 0 ? this.fmt2(l.credit) : '', styles: { halign: 'right' as const } },
              { content: this.fmt2(l.balance), styles: { halign: 'right' as const,
                  textColor: (l.balance >= 0 ? GREEN : RED) as [number,number,number] } },
              ''
            ]),
            [
              { content: 'TOTAL ' + j.journalCode, colSpan: 4,
                styles: { fillColor: GRAY, fontStyle: 'bold', textColor: DARK, cellPadding: {top:2,right:2,bottom:2,left:2} } },
              { content: this.fmt2(j.totalDebit),    styles: { fillColor: GRAY, fontStyle: 'bold', halign: 'right', textColor: GREEN, cellPadding: {top:2,right:1.5,bottom:2,left:1.5}, overflow: 'hidden' as const } },
              { content: this.fmt2(j.totalCredit),   styles: { fillColor: GRAY, fontStyle: 'bold', halign: 'right', textColor: RED,   cellPadding: {top:2,right:1.5,bottom:2,left:1.5}, overflow: 'hidden' as const } },
              { content: this.fmt2(j.closingBalance),styles: { fillColor: GRAY, fontStyle: 'bold', halign: 'right',
                  textColor: (j.closingBalance >= 0 ? GREEN : RED) as [number,number,number], cellPadding: {top:2,right:1.5,bottom:2,left:1.5}, overflow: 'hidden' as const } },
              ''
            ]
          ],
          theme: 'plain',
          styles: { fontSize: 8, cellPadding: {top:1,right:2,bottom:1,left:2}, textColor: DARK, lineColor: [229,231,235] as [number,number,number], lineWidth: 0.1 },
          headStyles: { fillColor: [248,250,252] as [number,number,number], textColor: [107,114,128] as [number,number,number], fontStyle: 'bold', fontSize: 8 },
          columnStyles: {
            0:{cellWidth:19}, 1:{cellWidth:30}, 2:{cellWidth:14}, 3:{cellWidth:80},
            4:{cellWidth:30,halign:'right'}, 5:{cellWidth:28,halign:'right'}, 6:{cellWidth:28,halign:'right'}, 7:{cellWidth:28}
          }
        });
        y = (doc as any).lastAutoTable.finalY + 6;
      } else { y += 4; }

      if (y > 185) { doc.addPage(); y = M + 5; }
    }

    const np = doc.getNumberOfPages();
    for (let i = 1; i <= np; i++) {
      doc.setPage(i);
      doc.setFontSize(7); doc.setTextColor(180,180,180);
      doc.setDrawColor(200,200,200); doc.setLineWidth(0.2);
      doc.line(M, 200, pageW-M, 200);
      doc.text(`${this.companyName} — Blessing ERP`, M, 204);
      doc.text(`Page ${i}/${np}`, pageW-M, 204, { align: 'right' });
    }
    doc.save(`cashbook-${this.dateFrom}-${this.dateTo}.pdf`);
  }

  // ── Export Excel ──────────────────────────────────────────────────────────
  exportExcel(): void {
    this.excelExport.exportCashbook(
      this.filteredJournals,
      this.companyName,
      this.dateFrom,
      this.dateTo
    );
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  fmtDate(d: string): string {
    if (!d) return '';
    const [y, m, dd] = d.split('-');
    return `${dd}/${m}/${y}`;
  }

  fmt2(v: number): string {
    const num = v ?? 0;
    const sign = num < 0 ? '-' : '';
    const parts = Math.abs(num).toFixed(2).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return sign + parts[0] + ',' + parts[1];
  }
}
