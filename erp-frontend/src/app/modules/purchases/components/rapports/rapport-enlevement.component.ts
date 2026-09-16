import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EnlevementService, EnlevementRapportEntry, EnlevementRapportLine, EnlevementRapportArticleLine } from '../../services/enlevement.service';
import { AuthService } from '../../../../core/auth/auth.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as ExcelJS from 'exceljs';

interface CatLine { categoryName: string; productName?: string | null; quantite: number; montantUnit: number; montantTotal: number; }

@Component({
  selector: 'app-rapport-enlevement',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rapport-enlevement.component.html',
  styleUrl: './rapport-enlevement.component.scss'
})
export class RapportEnlevementComponent {
  dateFrom = '';
  dateTo   = '';
  entries: EnlevementRapportEntry[] = [];
  loading   = false;
  generated = false;
  errorMsg  = '';

  subGroupBy: 'articles' | 'categories' = 'articles';
  expandedPartners = new Set<string>();

  constructor(private svc: EnlevementService, private auth: AuthService) {
    const today    = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    this.dateFrom  = firstDay.toISOString().slice(0, 10);
    this.dateTo    = today.toISOString().slice(0, 10);
  }

  generate(): void {
    if (!this.dateFrom || !this.dateTo) { this.errorMsg = 'Veuillez sélectionner une période.'; return; }
    this.loading = true; this.errorMsg = '';
    this.svc.getRapport(this.auth.getCompanyId(), this.dateFrom, this.dateTo).subscribe({
      next: data => {
        this.entries = data;
        this.generated = true;
        this.loading   = false;
        this.expandAll();
      },
      error: e => { this.loading = false; this.errorMsg = e?.error?.message || 'Erreur lors de la génération.'; }
    });
  }

  setSubGroup(v: 'articles' | 'categories'): void { this.subGroupBy = v; }

  // ── Lignes par catégorie agrégée ──────────────────────────────────────────
  catLines(entry: EnlevementRapportEntry): CatLine[] {
    if (this.subGroupBy === 'articles') {
      // Utilise articleLines (par produit) si disponible
      if (entry.articleLines && entry.articleLines.length > 0) {
        return entry.articleLines.map(l => ({
          categoryName: l.categoryName || '?',
          productName:  l.productName  || l.productCode || null,
          quantite:     l.quantite,
          montantUnit:  l.montantUnitaire,
          montantTotal: l.montantTotal
        }));
      }
      return entry.lines.map(l => ({ categoryName: l.categoryName, productName: null, quantite: l.quantite, montantUnit: l.montantUnitaire, montantTotal: l.montantTotal }));
    }
    // Par catégories : agrégé
    const map = new Map<string, CatLine>();
    for (const l of entry.lines) {
      if (!map.has(l.categoryName)) map.set(l.categoryName, { categoryName: l.categoryName, productName: null, quantite: 0, montantUnit: l.montantUnitaire, montantTotal: 0 });
      map.get(l.categoryName)!.quantite     += l.quantite;
      map.get(l.categoryName)!.montantTotal += l.montantTotal;
    }
    return [...map.values()];
  }

  // ── Accordéon ─────────────────────────────────────────────────────────────
  togglePartner(name: string): void {
    if (this.expandedPartners.has(name)) this.expandedPartners.delete(name);
    else this.expandedPartners.add(name);
  }
  isExpanded(name: string): boolean { return this.expandedPartners.has(name); }
  expandAll():   void { this.entries.forEach(e => this.expandedPartners.add(e.partnerName)); }
  collapseAll(): void { this.expandedPartners.clear(); }

  // ── KPIs ──────────────────────────────────────────────────────────────────
  get grandTotal():    number { return this.entries.reduce((s, e) => s + (e.totalAmount ?? 0), 0); }
  get partnerCount():  number { return this.entries.length; }
  get categoryCount(): number {
    return new Set(this.entries.flatMap(e => e.lines.map(l => l.categoryName))).size;
  }

  get companyName():    string { return this.auth.getActiveCompany()?.name || ''; }
  get generatedBy():    string { return this.auth.getUserDisplayName(); }
  get printDateLabel(): string {
    if (!this.dateFrom || !this.dateTo) return '';
    const f = (s: string) => { const [y, m, d] = s.split('-'); return `${d}/${m}/${y}`; };
    return `${f(this.dateFrom)} au ${f(this.dateTo)}`;
  }
  get todayLabel(): string {
    return new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
  }
  private fmt(n: number): string {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  // ── Export PDF ──────────────────────────────────────────────────────────────
  exportPdf(): void {
    const byArticles = this.subGroupBy === 'articles';
    const doc   = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();
    const M = 12;
    let y = M;

    doc.setFontSize(14); doc.setFont('helvetica', 'bold'); doc.setTextColor(17, 24, 39);
    doc.text(this.companyName, M, y); y += 5;
    doc.setDrawColor(200,200,200); doc.setLineWidth(0.3); doc.line(M, y, pageW-M, y); y += 7;

    doc.setFontSize(11); doc.setFont('helvetica', 'bold');
    doc.text(`RAPPORT DES COÛTS D'ENLÈVEMENT`, M, y); y += 5;
    doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(80,80,80);
    doc.text(`Période : ${this.printDateLabel}   |   Généré par : ${this.generatedBy}   |   Le : ${this.todayLabel}`, M, y);
    y += 8;

    const dark:   [number,number,number] = [17,24,39];
    const gray:   [number,number,number] = [241,245,249];
    const purple: [number,number,number] = [5,150,105]; // teal/green pour enlèvement

    for (const entry of this.entries) {
      const lines = this.catLines(entry);
      autoTable(doc, {
        startY: y, margin: { left: M, right: M },
        head: [[
          { content: entry.partnerName, colSpan: byArticles ? 4 : 2,
            styles: { fillColor: purple, textColor: [255,255,255] as [number,number,number], fontStyle: 'bold', fontSize: 9 } },
          { content: this.fmt(entry.totalAmount ?? 0) + ' FCFA',
            styles: { fillColor: purple, textColor: [255,255,255] as [number,number,number], halign: 'right', fontStyle: 'bold', fontSize: 9 } }
        ]],
        body: lines.map(l => byArticles
          ? [{ content: l.productName || '—' }, { content: l.categoryName },
             { content: this.fmt(l.quantite), styles: { halign: 'right' as const } },
             { content: this.fmt(l.montantUnit), styles: { halign: 'right' as const } },
             { content: this.fmt(l.montantTotal) + ' FCFA', styles: { halign: 'right' as const } }]
          : [{ content: l.categoryName }, { content: this.fmt(l.quantite), styles: { halign: 'right' as const } },
             { content: this.fmt(l.montantTotal) + ' FCFA', styles: { halign: 'right' as const } }]
        ),
        theme: 'plain',
        styles: { fontSize: 8, cellPadding: 2.5, textColor: dark, lineColor: [229,231,235], lineWidth: 0.1 },
        headStyles: { fontSize: 9 },
        columnStyles: byArticles
          ? { 0:{cellWidth:40}, 1:{cellWidth:40}, 2:{cellWidth:25,halign:'right'}, 3:{cellWidth:25,halign:'right'}, 4:{cellWidth:56,halign:'right'} }
          : { 0:{cellWidth:80}, 1:{cellWidth:25,halign:'right'}, 2:{cellWidth:81,halign:'right'} }
      });
      y = (doc as any).lastAutoTable.finalY + 5;
      if (y > 268) { doc.addPage(); y = M; }
    }

    autoTable(doc, {
      startY: y, margin: { left: M, right: M },
      body: [[
        { content: 'TOTAL GÉNÉRAL', colSpan: byArticles ? 4 : 2,
          styles: { fillColor: gray, fontStyle: 'bold', halign: 'right', textColor: [55,65,81] as [number,number,number] } },
        { content: this.fmt(this.grandTotal) + ' FCFA',
          styles: { fillColor: gray, fontStyle: 'bold', halign: 'right', textColor: dark } }
      ]],
      theme: 'plain',
      styles: { fontSize: 9, cellPadding: 3, lineColor: [209,213,219], lineWidth: 0.2 },
      columnStyles: byArticles
        ? { 0:{cellWidth:40}, 1:{cellWidth:40}, 2:{cellWidth:25}, 3:{cellWidth:25}, 4:{cellWidth:56,halign:'right'} }
        : { 0:{cellWidth:80}, 1:{cellWidth:25}, 2:{cellWidth:81,halign:'right'} }
    });

    const n = doc.getNumberOfPages();
    for (let i = 1; i <= n; i++) {
      doc.setPage(i);
      doc.setFontSize(7); doc.setFont('helvetica','normal'); doc.setTextColor(180,180,180);
      doc.setDrawColor(220,220,220); doc.setLineWidth(0.2);
      doc.line(M, 284, pageW-M, 284);
      doc.text(`${this.companyName} — Blessing ERP`, M, 288);
      doc.text(`Page ${i} / ${n}`, pageW-M, 289, { align: 'right' });
    }
    doc.save(`rapport-enlevements-${this.subGroupBy}-${this.dateFrom}-${this.dateTo}.pdf`);
  }

  // ── Export Excel ────────────────────────────────────────────────────────────
  async exportExcel(): Promise<void> {
    const byArticles = this.subGroupBy === 'articles';
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Enlèvements');
    const GREEN = 'FF059669', WHITE = 'FFFFFFFF', GRAY = 'FFE9ECEF';
    const ncols = byArticles ? 5 : 3;

    ws.mergeCells(1, 1, 1, ncols);
    const t1 = ws.getCell('A1');
    t1.value = `${this.companyName} — RAPPORT DES COÛTS D'ENLÈVEMENT — ${this.printDateLabel}`;
    t1.font = { bold: true, size: 12, color: { argb: GREEN } };
    t1.alignment = { horizontal: 'center' };
    ws.mergeCells(2, 1, 2, ncols);
    const t2 = ws.getCell('A2');
    t2.value = `Généré par ${this.generatedBy} le ${this.todayLabel}`;
    t2.font = { italic: true, size: 9, color: { argb: '777777' } };
    t2.alignment = { horizontal: 'center' };
    ws.addRow([]);

    for (const entry of this.entries) {
      const lines = this.catLines(entry);
      const hRow = ws.addRow([entry.partnerName, ...(byArticles ? ['','',''] : ['']), this.fmt(entry.totalAmount ?? 0) + ' FCFA']);
      ws.mergeCells(ws.rowCount, 1, ws.rowCount, ncols - 1);
      hRow.eachCell((c, col) => {
        c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GREEN } };
        c.font = { bold: true, color: { argb: WHITE }, size: 10 };
        c.alignment = col === ncols ? { horizontal: 'right' } : { horizontal: 'left' };
      });

      const headers = byArticles ? ['Article', 'Catégorie', 'Qté', 'P.U.', 'Total (FCFA)'] : ['Catégorie', 'Qté', 'Total (FCFA)'];
      const thRow = ws.addRow(headers);
      thRow.eachCell(c => {
        c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD1FAE5' } };
        c.font = { bold: true, size: 8, color: { argb: '374151' } };
        c.border = { bottom: { style: 'thin', color: { argb: 'FF6EE7B7' } } };
      });

      for (const l of lines) {
        const row = byArticles
          ? ws.addRow([l.productName || '—', l.categoryName, l.quantite, l.montantUnit, l.montantTotal])
          : ws.addRow([l.categoryName, l.quantite, l.montantTotal]);
        row.getCell(ncols).numFmt = '#,##0';
        row.getCell(ncols).alignment = { horizontal: 'right' };
        row.eachCell(c => { c.font = { size: 9 }; c.border = { bottom: { style: 'hair', color: { argb: 'FFCCCCCC' } } }; });
      }

      const subData = byArticles ? ['', '', 'Sous-total', '', entry.totalAmount ?? 0] : ['', 'Sous-total', entry.totalAmount ?? 0];
      const subRow = ws.addRow(subData);
      subRow.eachCell(c => {
        c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GRAY } };
        c.font = { bold: true, size: 9 };
        c.border = { top: { style: 'thin' }, bottom: { style: 'thin' } };
      });
      subRow.getCell(ncols).numFmt = '#,##0';
      subRow.getCell(ncols).alignment = { horizontal: 'right' };
      ws.addRow([]);
    }

    const totData = byArticles ? ['', '', '', 'TOTAL GÉNÉRAL', this.grandTotal] : ['', 'TOTAL GÉNÉRAL', this.grandTotal];
    const totRow = ws.addRow(totData);
    totRow.eachCell(c => {
      c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GREEN } };
      c.font = { bold: true, size: 11, color: { argb: WHITE } };
    });
    totRow.getCell(ncols).numFmt = '#,##0';
    totRow.getCell(ncols).alignment = { horizontal: 'right' };

    ws.columns = byArticles
      ? [{ width: 30 }, { width: 30 }, { width: 10 }, { width: 14 }, { width: 18 }]
      : [{ width: 38 }, { width: 10 }, { width: 18 }];

    const buf = await wb.xlsx.writeBuffer();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
    a.download = `rapport-enlevements-${this.subGroupBy}-${this.dateFrom}-${this.dateTo}.xlsx`;
    a.click();
  }
}
