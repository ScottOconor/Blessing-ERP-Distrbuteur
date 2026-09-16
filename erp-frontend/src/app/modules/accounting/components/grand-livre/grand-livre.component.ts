import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../../services/report.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountingService } from '../../services/accounting.service';
import { AccountAccount } from '../../../../core/models/account.model';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface GlLine {
  date: string;
  moveRef: string;
  journalCode: string;
  label: string;
  partner: string;
  debit: number;
  credit: number;
  balance: number;
}

interface GlAccount {
  accountCode: string;
  accountName: string;
  openingBalance: number;
  totalDebit: number;
  totalCredit: number;
  finalBalance: number;
  lines: GlLine[];
}

@Component({
  selector: 'app-grand-livre',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grand-livre.component.html',
  styleUrl: './grand-livre.component.scss'
})
export class GrandLivreComponent implements OnInit {

  // ── Filtres ──────────────────────────────────────────────────────────────
  dateFrom = '';
  dateTo   = '';
  allAccounts: AccountAccount[] = [];
  selectedAccountIds: number[] = [];
  searchAccount = '';   // filtre live sur le résultat
  showAccountPicker = false;
  accountPickerSearch = '';

  // ── État ────────────────────────────────────────────────────────────────
  loading   = false;
  generated = false;
  errorMsg  = '';
  today     = new Date();

  // ── Données ──────────────────────────────────────────────────────────────
  data: GlAccount[] = [];
  expandedAccounts = new Set<string>();

  // ── Pointage ─────────────────────────────────────────────────────────────
  pointedLines = new Set<string>();

  lineKey(accountCode: string, idx: number): string { return `${accountCode}__${idx}`; }

  toggleLine(accountCode: string, idx: number, event: MouseEvent): void {
    event.stopPropagation();
    const k = this.lineKey(accountCode, idx);
    if (this.pointedLines.has(k)) this.pointedLines.delete(k);
    else this.pointedLines.add(k);
  }

  isPointed(accountCode: string, idx: number): boolean {
    return this.pointedLines.has(this.lineKey(accountCode, idx));
  }

  clearPointing(): void { this.pointedLines.clear(); }
  get hasPointing(): boolean { return this.pointedLines.size > 0; }

  get pointingSummary(): { count: number; debit: number; credit: number; net: number } {
    let debit = 0, credit = 0;
    for (const key of this.pointedLines) {
      const [code, idxStr] = key.split('__');
      const acc = this.data.find(a => a.accountCode === code);
      const line = acc?.lines[+idxStr];
      if (line) { debit += line.debit; credit += line.credit; }
    }
    return { count: this.pointedLines.size, debit, credit, net: debit - credit };
  }

  // ── Helpers filtres ───────────────────────────────────────────────────────
  get filteredData(): GlAccount[] {
    if (!this.searchAccount.trim()) return this.data;
    const t = this.searchAccount.toLowerCase();
    return this.data.filter(a =>
      a.accountCode.toLowerCase().includes(t) || a.accountName.toLowerCase().includes(t)
    );
  }

  get filteredPickerAccounts(): AccountAccount[] {
    if (!this.accountPickerSearch.trim()) return this.allAccounts;
    const t = this.accountPickerSearch.toLowerCase();
    return this.allAccounts.filter(a =>
      a.code.toLowerCase().includes(t) || a.name.toLowerCase().includes(t)
    );
  }

  get selectedAccountNames(): string {
    if (this.selectedAccountIds.length === 0) return 'Tous les comptes';
    if (this.selectedAccountIds.length === 1) {
      const a = this.allAccounts.find(x => x.id === this.selectedAccountIds[0]);
      return a ? `${a.code} — ${a.name}` : '1 compte';
    }
    return `${this.selectedAccountIds.length} comptes sélectionnés`;
  }

  get grandTotalDebit():  number { return this.data.reduce((s,a) => s + a.totalDebit,  0); }
  get grandTotalCredit(): number { return this.data.reduce((s,a) => s + a.totalCredit, 0); }
  get grandBalance():     number { return this.data.reduce((s,a) => s + a.finalBalance, 0); }

  get companyName(): string { return this.authService.getActiveCompany()?.name ?? ''; }

  // Couleur par classe de compte
  readonly CLASS_COLORS: Record<string, string> = {
    '1': '#7c3aed', '2': '#2563eb', '3': '#0891b2',
    '4': '#059669', '5': '#16a34a', '6': '#dc2626',
    '7': '#d97706', '8': '#6b7280'
  };

  accountColor(code: string): string {
    return this.CLASS_COLORS[code?.[0]] ?? '#6b7280';
  }

  constructor(
    private reportService: ReportService,
    private accountingService: AccountingService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const now = new Date();
    this.dateTo   = now.toISOString().split('T')[0];
    this.dateFrom = new Date(now.getFullYear(), 0, 1).toISOString().split('T')[0];
    this.accountingService.getAccounts(this.authService.getCompanyId()).subscribe({
      next: (a) => this.allAccounts = a.filter(x => !x.deprecated).sort((a,b) => a.code.localeCompare(b.code)),
      error: () => {}
    });
  }

  generate(): void {
    if (!this.dateFrom || !this.dateTo) { this.errorMsg = 'Sélectionnez la période'; return; }
    this.loading = true; this.generated = false; this.errorMsg = '';
    this.expandedAccounts.clear();

    this.reportService.getGrandLivre({
      dateFrom:   this.dateFrom,
      dateTo:     this.dateTo,
      companyId:  this.authService.getCompanyId(),
      accountIds: this.selectedAccountIds.length > 0 ? this.selectedAccountIds : undefined
    }).subscribe({
      next: (res: any) => {
        const raw = res.accounts || res || {};
        this.data = Object.values(raw).map((a: any) => ({
          accountCode:    a.accountCode,
          accountName:    a.accountName,
          openingBalance: a.openingBalance ?? 0,
          totalDebit:     a.totalDebit     ?? 0,
          totalCredit:    a.totalCredit    ?? 0,
          finalBalance:   a.finalBalance   ?? 0,
          lines: (a.lines || []).map((l: any) => ({
            date:        l.date,
            moveRef:     l.pieceName || l.ref || '',
            journalCode: l.journal   || '',
            label:       l.libelle   || l.name || '',
            partner:     l.partner   || '',
            debit:       l.debit     ?? 0,
            credit:      l.credit    ?? 0,
            balance:     l.balance   ?? 0
          }))
        }));
        this.loading = false; this.generated = true;
      },
      error: (err) => {
        this.loading  = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la génération';
      }
    });
  }

  // ── Accordéon ─────────────────────────────────────────────────────────────
  toggleAccount(code: string): void {
    if (this.expandedAccounts.has(code)) this.expandedAccounts.delete(code);
    else this.expandedAccounts.add(code);
  }

  expandAll():   void { this.filteredData.forEach(a => this.expandedAccounts.add(a.accountCode)); }
  collapseAll(): void { this.expandedAccounts.clear(); }

  // ── Sélection comptes ─────────────────────────────────────────────────────
  toggleAccountFilter(id: number): void {
    const idx = this.selectedAccountIds.indexOf(id);
    if (idx >= 0) this.selectedAccountIds.splice(idx, 1);
    else this.selectedAccountIds.push(id);
  }

  isAccountSelected(id: number): boolean { return this.selectedAccountIds.includes(id); }
  clearAccountFilter(): void { this.selectedAccountIds = []; }

  // ── Impression ─────────────────────────────────────────────────────────────
  print(): void { window.print(); }

  // ── Export PDF ─────────────────────────────────────────────────────────────
  exportPdf(): void {
    const doc   = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();
    const M = 10;
    let y = M;

    doc.setFontSize(14); doc.setFont('helvetica','bold'); doc.setTextColor(17,24,39);
    doc.text(this.companyName, M, y); y += 5;
    doc.setDrawColor(200,200,200); doc.setLineWidth(0.3); doc.line(M, y, pageW-M, y); y += 8;

    doc.setFontSize(12); doc.text('GRAND LIVRE DES COMPTES', M, y); y += 5;
    doc.setFontSize(9); doc.setFont('helvetica','normal'); doc.setTextColor(80,80,80);
    doc.text(`Période : ${this.fmtDate(this.dateFrom)} au ${this.fmtDate(this.dateTo)}   |   Généré le : ${new Date().toLocaleDateString('fr-FR')}`, M, y); y += 8;

    const dark: [number,number,number]  = [17,24,39];
    const gray: [number,number,number]  = [241,245,249];

    // Largeurs colonnes fixes (A4 paysage = 297mm — marges 10mm × 2 → 277mm utilisable)
    // Somme : 19+30+14+30+100+28+28+28 = 277mm ✓
    const COL = { 0:19, 1:30, 2:14, 3:30, 4:100, 5:28, 6:28, 7:28 } as const;

    for (const acc of this.filteredData) {
      const col = this.hexToRgb(this.accountColor(acc.accountCode));

      // Barre titre du compte (alignée avec les colonnes du corps)
      autoTable(doc, {
        startY: y, margin: { left: M, right: M },
        head: [[
          { content: `${acc.accountCode} — ${acc.accountName}`, colSpan: 5,
            styles: { fillColor: col, textColor: [255,255,255] as [number,number,number], fontStyle: 'bold', fontSize: 8.5 } },
          { content: `Ouv. ${this.fmt2(acc.openingBalance)}`,
            styles: { fillColor: col, textColor: [255,255,255] as [number,number,number], halign: 'right' as const, fontSize: 7.5 } },
          { content: `Mvt D ${this.fmt2(acc.totalDebit)}`,
            styles: { fillColor: col, textColor: [255,255,255] as [number,number,number], halign: 'right' as const, fontSize: 7.5 } },
          { content: `Clôt. ${this.fmt2(acc.finalBalance)}`,
            styles: { fillColor: col, textColor: [255,255,255] as [number,number,number], halign: 'right' as const, fontSize: 7.5 } },
        ]],
        body: [], theme: 'plain',
        styles: { fontSize: 8, cellPadding: 2.5 },
        columnStyles: {
          0: { cellWidth: COL[0] }, 1: { cellWidth: COL[1] }, 2: { cellWidth: COL[2] },
          3: { cellWidth: COL[3] }, 4: { cellWidth: COL[4] },
          5: { cellWidth: COL[5] }, 6: { cellWidth: COL[6] }, 7: { cellWidth: COL[7] },
        }
      });
      y = (doc as any).lastAutoTable.finalY;

      if (acc.lines.length > 0) {
        autoTable(doc, {
          startY: y, margin: { left: M, right: M },
          head: [['Date','N° Pièce','Journal','Tiers','Libellé','Débit','Crédit','Solde']],
          body: [
            ...acc.lines.map(l => [
              this.fmtDate(l.date),
              l.moveRef || '',
              { content: l.journalCode || '', styles: { halign: 'center' as const } },
              l.partner || '',
              l.label || '',
              { content: l.debit  > 0 ? this.fmt2(l.debit)  : '', styles: { halign: 'right' as const } },
              { content: l.credit > 0 ? this.fmt2(l.credit) : '', styles: { halign: 'right' as const } },
              { content: this.fmt2(l.balance), styles: { halign: 'right' as const,
                  textColor: (l.balance >= 0 ? [21,128,61] : [185,28,28]) as [number,number,number] } },
            ]),
            [
              { content: `Total ${acc.accountCode}`, colSpan: 5,
                styles: { fillColor: gray, fontStyle: 'bold' as const, textColor: dark } },
              { content: this.fmt2(acc.totalDebit),   styles: { fillColor: gray, fontStyle: 'bold' as const, halign: 'right' as const, textColor: dark } },
              { content: this.fmt2(acc.totalCredit),  styles: { fillColor: gray, fontStyle: 'bold' as const, halign: 'right' as const, textColor: dark } },
              { content: this.fmt2(acc.finalBalance), styles: { fillColor: gray, fontStyle: 'bold' as const, halign: 'right' as const,
                  textColor: (acc.finalBalance >= 0 ? [21,128,61] : [185,28,28]) as [number,number,number] } },
            ]
          ],
          theme: 'plain',
          styles: { fontSize: 7.5, cellPadding: 2, textColor: dark, lineColor: [229,231,235] as [number,number,number], lineWidth: 0.1 },
          headStyles: { fillColor: [248,250,252] as [number,number,number], textColor: [107,114,128] as [number,number,number], fontStyle: 'bold', fontSize: 7.5 },
          columnStyles: {
            0: { cellWidth: COL[0] }, 1: { cellWidth: COL[1] }, 2: { cellWidth: COL[2], halign: 'center' as const },
            3: { cellWidth: COL[3] }, 4: { cellWidth: COL[4] },
            5: { cellWidth: COL[5], halign: 'right' as const },
            6: { cellWidth: COL[6], halign: 'right' as const },
            7: { cellWidth: COL[7], halign: 'right' as const },
          }
        });
        y = (doc as any).lastAutoTable.finalY + 5;
      } else { y += 4; }

      if (y > 188) { doc.addPage(); y = M + 5; }
    }

    const n = doc.getNumberOfPages();
    for (let i = 1; i <= n; i++) {
      doc.setPage(i);
      doc.setFontSize(7); doc.setTextColor(180,180,180);
      doc.line(M, 198, pageW-M, 198);
      doc.text(`${this.companyName} — Blessing ERP`, M, 202);
      doc.text(`Page ${i}/${n}`, pageW-M, 202, { align: 'right' });
    }
    doc.save(`grand-livre-comptes-${this.dateFrom}-${this.dateTo}.pdf`);
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

  private hexToRgb(hex: string): [number, number, number] {
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(3,5), 16);
    const b = parseInt(hex.slice(5,7), 16);
    return [r, g, b];
  }
}
