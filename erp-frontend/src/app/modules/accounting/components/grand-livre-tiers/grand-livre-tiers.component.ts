import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../../services/report.service';
import { AuthService } from '../../../../core/auth/auth.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface TiersLine {
  date: string;
  pieceName: string;
  ref: string;
  journal: string;
  accountCode: string;
  libelle: string;
  debit: number;
  credit: number;
  balance: number;
}

interface TiersPartner {
  partnerId: number;
  partnerName: string;
  openingBalance: number;
  totalDebit: number;
  totalCredit: number;
  closingBalance: number;
  lines: TiersLine[];
}

@Component({
  selector: 'app-grand-livre-tiers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grand-livre-tiers.component.html',
  styleUrl: './grand-livre-tiers.component.scss'
})
export class GrandLivreTiersComponent implements OnInit {

  // Filtres
  dateFrom       = '';
  dateTo         = '';
  resultSelection = 'all'; // all | customer | supplier
  searchPartner  = '';

  // État
  loading   = false;
  generated = false;
  errorMsg  = '';
  today     = new Date();

  // Données
  allPartners: TiersPartner[] = [];

  // Accordéon
  expandedPartners = new Set<number>();

  // ── Pointage ─────────────────────────────────────────────────────────────
  pointedLines = new Set<string>();

  lineKey(partnerId: number, idx: number): string { return `${partnerId}__${idx}`; }

  toggleLine(partnerId: number, idx: number, event: MouseEvent): void {
    event.stopPropagation();
    const k = this.lineKey(partnerId, idx);
    if (this.pointedLines.has(k)) this.pointedLines.delete(k);
    else this.pointedLines.add(k);
  }

  isPointed(partnerId: number, idx: number): boolean {
    return this.pointedLines.has(this.lineKey(partnerId, idx));
  }

  clearPointing(): void { this.pointedLines.clear(); }
  get hasPointing(): boolean { return this.pointedLines.size > 0; }

  get pointingSummary(): { count: number; debit: number; credit: number; net: number } {
    let debit = 0, credit = 0;
    for (const key of this.pointedLines) {
      const [pidStr, idxStr] = key.split('__');
      const partner = this.allPartners.find(p => p.partnerId === +pidStr);
      const line = partner?.lines[+idxStr];
      if (line) { debit += line.debit; credit += line.credit; }
    }
    return { count: this.pointedLines.size, debit, credit, net: debit - credit };
  }

  get filteredPartners(): TiersPartner[] {
    if (!this.searchPartner.trim()) return this.allPartners;
    const t = this.searchPartner.toLowerCase();
    return this.allPartners.filter(p => p.partnerName.toLowerCase().includes(t));
  }

  get grandTotalDebit():  number { return this.allPartners.reduce((s,p) => s + p.totalDebit,  0); }
  get grandTotalCredit(): number { return this.allPartners.reduce((s,p) => s + p.totalCredit, 0); }
  get grandClosing():     number { return this.allPartners.reduce((s,p) => s + p.closingBalance, 0); }

  get companyName(): string { return this.authService.getActiveCompany()?.name ?? ''; }

  constructor(
    private reportService: ReportService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const now = new Date();
    this.dateTo   = now.toISOString().split('T')[0];
    this.dateFrom = new Date(now.getFullYear(), 0, 1).toISOString().split('T')[0];
  }

  generate(): void {
    if (!this.dateFrom || !this.dateTo) { this.errorMsg = 'Sélectionnez la période'; return; }
    this.loading = true; this.generated = false; this.errorMsg = '';
    this.expandedPartners.clear();

    this.reportService.getGrandLivreTiers({
      dateFrom:        this.dateFrom,
      dateTo:          this.dateTo,
      companyId:       this.authService.getCompanyId(),
      resultSelection: this.resultSelection === 'all' ? undefined : this.resultSelection
    }).subscribe({
      next: (res: any) => {
        this.allPartners = (res.partners || []).map((p: any) => ({
          partnerId:      p.partnerId,
          partnerName:    p.partnerName,
          openingBalance: p.openingBalance ?? 0,
          totalDebit:     p.totalDebit ?? 0,
          totalCredit:    p.totalCredit ?? 0,
          closingBalance: p.closingBalance ?? 0,
          lines: (p.lines || []).map((l: any) => ({
            date:        l.date,
            pieceName:   l.pieceName || '',
            ref:         l.ref || '',
            journal:     l.journal || '',
            accountCode: l.accountCode || '',
            libelle:     l.libelle || '',
            debit:       l.debit ?? 0,
            credit:      l.credit ?? 0,
            balance:     l.balance ?? 0
          }))
        }));
        this.loading   = false;
        this.generated = true;
      },
      error: (err) => {
        this.loading   = false;
        this.errorMsg  = err.error?.message || 'Erreur lors de la génération';
      }
    });
  }

  togglePartner(id: number): void {
    if (this.expandedPartners.has(id)) this.expandedPartners.delete(id);
    else this.expandedPartners.add(id);
  }

  expandAll():   void { this.filteredPartners.forEach(p => this.expandedPartners.add(p.partnerId)); }
  collapseAll(): void { this.expandedPartners.clear(); }

  // ── Impression ──────────────────────────────────────────────────────────
  print(): void { window.print(); }

  // ── Export PDF ──────────────────────────────────────────────────────────
  exportPdf(): void {
    const doc   = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();
    const M     = 10;
    let y = M;

    // En-tête
    doc.setFontSize(14); doc.setFont('helvetica', 'bold'); doc.setTextColor(17, 24, 39);
    doc.text(this.companyName, M, y); y += 5;
    doc.setDrawColor(200,200,200); doc.setLineWidth(0.3); doc.line(M, y, pageW-M, y); y += 8;

    doc.setFontSize(12); doc.text('GRAND LIVRE DES TIERS', M, y); y += 5;
    const typeLbl = this.resultSelection === 'customer' ? 'Clients' :
                    this.resultSelection === 'supplier' ? 'Fournisseurs' : 'Tous les tiers';
    doc.setFontSize(9); doc.setFont('helvetica','normal'); doc.setTextColor(80,80,80);
    doc.text(`Période : ${this.fmtDate(this.dateFrom)} au ${this.fmtDate(this.dateTo)}   |   ${typeLbl}   |   Généré le : ${new Date().toLocaleDateString('fr-FR')}`, M, y); y += 8;

    const dark: [number,number,number] = [17,24,39];
    const gray: [number,number,number] = [241,245,249];
    const blue: [number,number,number] = [37,99,235];

    // Largeurs colonnes fixes (A4 paysage = 297mm — marges 10mm × 2 → 277mm utilisable)
    // Somme : 18+30+14+22+103+30+30+30 = 277mm ✓
    const COL = { 0:18, 1:30, 2:14, 3:22, 4:103, 5:30, 6:30, 7:30 } as const;

    for (const p of this.filteredPartners) {
      // Barre titre tiers
      autoTable(doc, {
        startY: y, margin: { left: M, right: M },
        head: [[
          { content: p.partnerName, colSpan: 5,
            styles: { fillColor: blue, textColor: [255,255,255] as [number,number,number], fontStyle: 'bold', fontSize: 8.5 } },
          { content: `Ouv. ${this.fmt2(p.openingBalance)}`,
            styles: { fillColor: blue, textColor: [255,255,255] as [number,number,number], halign: 'right' as const, fontSize: 7.5 } },
          { content: `Mvt ${p.lines.length} ligne(s)`,
            styles: { fillColor: blue, textColor: [255,255,255] as [number,number,number], halign: 'center' as const, fontSize: 7.5 } },
          { content: `Clôt. ${this.fmt2(p.closingBalance)}`,
            styles: { fillColor: blue, textColor: [255,255,255] as [number,number,number], halign: 'right' as const, fontSize: 7.5 } },
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

      if (p.lines.length > 0) {
        autoTable(doc, {
          startY: y, margin: { left: M, right: M },
          head: [['Date','N° Pièce','Journal','Compte','Libellé','Débit','Crédit','Solde']],
          body: [
            ...p.lines.map(l => [
              this.fmtDate(l.date),
              l.pieceName || l.ref || '',
              { content: l.journal || '', styles: { halign: 'center' as const } },
              { content: l.accountCode || '', styles: { halign: 'center' as const } },
              l.libelle || '',
              { content: l.debit  > 0 ? this.fmt2(l.debit)  : '', styles: { halign: 'right' as const } },
              { content: l.credit > 0 ? this.fmt2(l.credit) : '', styles: { halign: 'right' as const } },
              { content: this.fmt2(l.balance), styles: { halign: 'right' as const,
                  textColor: (l.balance >= 0 ? [21,128,61] : [185,28,28]) as [number,number,number] } },
            ]),
            [
              { content: `Total ${p.partnerName}`, colSpan: 5,
                styles: { fillColor: gray, fontStyle: 'bold' as const, textColor: dark } },
              { content: this.fmt2(p.totalDebit),     styles: { fillColor: gray, fontStyle: 'bold' as const, halign: 'right' as const, textColor: dark } },
              { content: this.fmt2(p.totalCredit),    styles: { fillColor: gray, fontStyle: 'bold' as const, halign: 'right' as const, textColor: dark } },
              { content: this.fmt2(p.closingBalance), styles: { fillColor: gray, fontStyle: 'bold' as const, halign: 'right' as const,
                  textColor: (p.closingBalance >= 0 ? [21,128,61] : [185,28,28]) as [number,number,number] } },
            ]
          ],
          theme: 'plain',
          styles: { fontSize: 7.5, cellPadding: 2, textColor: dark, lineColor: [229,231,235] as [number,number,number], lineWidth: 0.1 },
          headStyles: { fillColor: [248,250,252] as [number,number,number], textColor: [107,114,128] as [number,number,number], fontStyle: 'bold', fontSize: 7.5 },
          columnStyles: {
            0: { cellWidth: COL[0] }, 1: { cellWidth: COL[1] }, 2: { cellWidth: COL[2], halign: 'center' as const },
            3: { cellWidth: COL[3], halign: 'center' as const }, 4: { cellWidth: COL[4] },
            5: { cellWidth: COL[5], halign: 'right' as const },
            6: { cellWidth: COL[6], halign: 'right' as const },
            7: { cellWidth: COL[7], halign: 'right' as const },
          }
        });
        y = (doc as any).lastAutoTable.finalY + 5;
      } else {
        y += 4;
      }

      if (y > 188) { doc.addPage(); y = M + 5; }
    }

    // Pied de page
    const n = doc.getNumberOfPages();
    for (let i = 1; i <= n; i++) {
      doc.setPage(i);
      doc.setFontSize(7); doc.setTextColor(180,180,180);
      doc.line(M, 198, pageW-M, 198);
      doc.text(`${this.companyName} — Blessing ERP`, M, 202);
      doc.text(`Page ${i}/${n}`, pageW-M, 202, { align: 'right' });
    }

    doc.save(`grand-livre-tiers-${this.dateFrom}-${this.dateTo}.pdf`);
  }

  // ── Helpers ──────────────────────────────────────────────────────────────
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
