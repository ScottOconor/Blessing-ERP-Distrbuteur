import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RistourneService, RistournePaiement, RistourneArticleLine } from '../../../services/ristourne.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as ExcelJS from 'exceljs';

/** Vue articles : une ligne par paiement/catégorie (détail complet) */
interface ArticleLine {
  typeRistourne: string;
  categoryName:  string;
  productName:   string | null;
  quantite:      number;
  montantUnit:   number;
  montantTotal:  number;
}

/** Vue catégories : agrégé par catégorie */
interface CategoryLine {
  categoryName: string;
  typeRistourne: string;
  totalAmount:  number;
}

/** Un bloc par client (toujours) */
interface ClientBlock {
  partnerName:   string;
  articleLines:  ArticleLine[];
  categoryLines: CategoryLine[];
  total:         number;
}

@Component({
  selector: 'app-rapport-ristourne',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rapport-ristourne.component.html',
  styleUrl: './rapport-ristourne.component.scss'
})
export class RapportRistourneComponent {

  dateFrom = '';
  dateTo   = '';
  paiements: RistournePaiement[] = [];
  loading   = false;
  generated = false;
  errorMsg  = '';

  /** Ce qu'on voit sous chaque client */
  subGroupBy: 'articles' | 'categories' = 'articles';

  expandedClients = new Set<string>();

  constructor(private svc: RistourneService, private auth: AuthService) {
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
        this.paiements = data;
        this.generated = true;
        this.loading   = false;
        this.expandAll();
      },
      error: e => { this.loading = false; this.errorMsg = e?.error?.message || 'Erreur lors de la génération.'; }
    });
  }

  setSubGroup(v: 'articles' | 'categories'): void { this.subGroupBy = v; }

  // ── Données groupées par client ──────────────────────────────────────────
  get clientBlocks(): ClientBlock[] {
    const map = new Map<string, { paiements: RistournePaiement[] }>();
    for (const p of this.paiements) {
      const name = p.partnerName || '?';
      if (!map.has(name)) map.set(name, { paiements: [] });
      map.get(name)!.paiements.push(p);
    }

    return [...map.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([name, { paiements }]) => {
        const articleLines: ArticleLine[] = [];
        for (const p of paiements) {
          // Utilise articleLines (par produit) si disponible, sinon fallback sur lines (par catégorie)
          const srcLines = p.articleLines && p.articleLines.length > 0 ? p.articleLines : null;
          if (srcLines) {
            for (const l of srcLines) {
              if ((l.montantTotal ?? 0) <= 0) continue;
              articleLines.push({
                typeRistourne: p.typeRistourne || '',
                categoryName:  l.categoryName  || '?',
                productName:   l.productName   || l.productCode || null,
                quantite:      l.quantite       ?? 0,
                montantUnit:   l.montantUnitaire ?? 0,
                montantTotal:  l.montantTotal
              });
            }
          } else {
            for (const l of p.lines || []) {
              const mt = l.montantTTC ?? l.montantTotal ?? 0;
              if (mt <= 0) continue;
              articleLines.push({
                typeRistourne: p.typeRistourne || '',
                categoryName:  l.categoryName  || '?',
                productName:   null,
                quantite:      l.quantite       ?? 0,
                montantUnit:   l.montantUnitaire ?? 0,
                montantTotal:  mt
              });
            }
          }
        }

        // Catégories agrégées
        const catMap = new Map<string, CategoryLine>();
        for (const al of articleLines) {
          const key = `${al.typeRistourne}||${al.categoryName}`;
          if (!catMap.has(key)) catMap.set(key, { categoryName: al.categoryName, typeRistourne: al.typeRistourne, totalAmount: 0 });
          catMap.get(key)!.totalAmount += al.montantTotal;
        }
        const categoryLines = [...catMap.values()]
          .sort((a, b) => a.typeRistourne.localeCompare(b.typeRistourne) || a.categoryName.localeCompare(b.categoryName));

        const total = articleLines.reduce((s, l) => s + l.montantTotal, 0);
        return { partnerName: name, articleLines, categoryLines, total };
      })
      .filter(b => b.total > 0);
  }

  // ── Accordéon ─────────────────────────────────────────────────────────────
  toggleClient(name: string): void {
    if (this.expandedClients.has(name)) this.expandedClients.delete(name);
    else this.expandedClients.add(name);
  }
  isExpanded(name: string): boolean { return this.expandedClients.has(name); }
  expandAll():   void { this.clientBlocks.forEach(b => this.expandedClients.add(b.partnerName)); }
  collapseAll(): void { this.expandedClients.clear(); }

  // ── KPIs ──────────────────────────────────────────────────────────────────
  private sumByType(type: string): number {
    let t = 0;
    for (const p of this.paiements.filter(x => x.typeRistourne === type))
      for (const l of p.lines || []) t += l.montantTTC ?? l.montantTotal ?? 0;
    return t;
  }
  get totalBrasserie(): number { return this.sumByType('brasserie'); }
  get totalGuinness():  number { return this.sumByType('guinness'); }
  get grandTotal():     number { return this.clientBlocks.reduce((s, b) => s + b.total, 0); }
  get clientCount():    number { return new Set(this.paiements.map(p => p.partnerId)).size; }

  // ── Helpers ────────────────────────────────────────────────────────────────
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
  typeColor(t: string): [number,number,number] { return t === 'brasserie' ? [146,64,14] : [6,78,59]; }
  typeBg(t: string):    [number,number,number] { return t === 'brasserie' ? [255,251,235] : [240,253,244]; }

  // ── Export PDF ──────────────────────────────────────────────────────────────
  exportPdf(): void {
    const doc   = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();
    const M = 12;
    let y = M;
    const byArticles = this.subGroupBy === 'articles';

    // En-tête
    doc.setFontSize(14); doc.setFont('helvetica', 'bold'); doc.setTextColor(17, 24, 39);
    doc.text(this.companyName, M, y); y += 5;
    doc.setDrawColor(200, 200, 200); doc.setLineWidth(0.3);
    doc.line(M, y, pageW - M, y); y += 7;

    const modeLabel = byArticles ? 'PAR ARTICLES' : 'PAR CATÉGORIES';
    doc.setFontSize(11); doc.setFont('helvetica', 'bold'); doc.setTextColor(17, 24, 39);
    doc.text(`ÉTAT GLOBAL DES RISTOURNES — PAR CLIENT / ${modeLabel}`, M, y); y += 5;

    doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(80, 80, 80);
    doc.text(`Période : ${this.printDateLabel}   |   Généré par : ${this.generatedBy}   |   Le : ${this.todayLabel}`, M, y);
    y += 8;

    const dark:   [number,number,number] = [17, 24, 39];
    const gray:   [number,number,number] = [241, 245, 249];
    const purple: [number,number,number] = [79, 70, 229];

    for (const block of this.clientBlocks) {
      // En-tête client
      autoTable(doc, {
        startY: y, margin: { left: M, right: M },
        head: [[
          { content: block.partnerName, colSpan: byArticles ? 5 : 3,
            styles: { fillColor: purple, textColor: [255,255,255] as [number,number,number], fontStyle: 'bold', fontSize: 9 } },
          { content: this.fmt(block.total) + ' FCFA',
            styles: { fillColor: purple, textColor: [255,255,255] as [number,number,number], halign: 'right', fontStyle: 'bold', fontSize: 9 } }
        ]],
        body: [], theme: 'plain',
        columnStyles: byArticles
          ? { 0:{cellWidth:18}, 1:{cellWidth:45}, 2:{cellWidth:38}, 3:{cellWidth:15}, 4:{cellWidth:22}, 5:{cellWidth:48, halign:'right'} }
          : { 0:{cellWidth:20}, 1:{cellWidth:100}, 2:{cellWidth:66, halign:'right'} }
      });
      y = (doc as any).lastAutoTable.finalY;

      const headRow = byArticles
        ? ['Type', 'Article', 'Catégorie', 'Qté', 'P.U.', 'Montant TTC']
        : ['Type', 'Catégorie', 'Montant TTC'];

      const bodyRows = byArticles
        ? block.articleLines.map(l => [
            { content: l.typeRistourne, styles: { textColor: this.typeColor(l.typeRistourne), fillColor: this.typeBg(l.typeRistourne), fontSize: 7.5 } },
            { content: l.productName || '—' },
            { content: l.categoryName },
            { content: this.fmt(l.quantite), styles: { halign: 'right' as const } },
            { content: this.fmt(l.montantUnit), styles: { halign: 'right' as const } },
            { content: this.fmt(l.montantTotal) + ' FCFA', styles: { halign: 'right' as const } }
          ])
        : block.categoryLines.map(l => [
            { content: l.typeRistourne, styles: { textColor: this.typeColor(l.typeRistourne), fillColor: this.typeBg(l.typeRistourne), fontSize: 7.5 } },
            { content: l.categoryName },
            { content: this.fmt(l.totalAmount) + ' FCFA', styles: { halign: 'right' as const } }
          ]);

      autoTable(doc, {
        startY: y, margin: { left: M, right: M },
        head: [headRow.map(h => ({ content: h }))],
        body: bodyRows,
        theme: 'plain',
        styles: { fontSize: 8, cellPadding: 2.5, textColor: dark, lineColor: [229,231,235], lineWidth: 0.1 },
        headStyles: { fillColor: [248,250,252] as [number,number,number], textColor: [107,114,128] as [number,number,number], fontStyle: 'bold', fontSize: 7.5 },
        columnStyles: byArticles
          ? { 0:{cellWidth:18}, 1:{cellWidth:45}, 2:{cellWidth:38}, 3:{cellWidth:15,halign:'right'}, 4:{cellWidth:22,halign:'right'}, 5:{cellWidth:48,halign:'right'} }
          : { 0:{cellWidth:20}, 1:{cellWidth:100}, 2:{cellWidth:66,halign:'right'} }
      });
      y = (doc as any).lastAutoTable.finalY + 5;
      if (y > 268) { doc.addPage(); y = M; }
    }

    // Total général
    autoTable(doc, {
      startY: y, margin: { left: M, right: M },
      body: [[
        { content: 'TOTAL GÉNÉRAL', colSpan: byArticles ? 5 : 2, styles: { fillColor: gray, fontStyle: 'bold', halign: 'right', textColor: [55,65,81] as [number,number,number] } },
        { content: this.fmt(this.grandTotal) + ' FCFA', styles: { fillColor: gray, fontStyle: 'bold', halign: 'right', textColor: dark } }
      ]],
      theme: 'plain',
      styles: { fontSize: 9, cellPadding: 3, lineColor: [209,213,219], lineWidth: 0.2 },
      columnStyles: byArticles
        ? { 0:{cellWidth:18}, 1:{cellWidth:45}, 2:{cellWidth:38}, 3:{cellWidth:15}, 4:{cellWidth:22}, 5:{cellWidth:48,halign:'right'} }
        : { 0:{cellWidth:20}, 1:{cellWidth:100}, 2:{cellWidth:66,halign:'right'} }
    });

    const n = doc.getNumberOfPages();
    for (let i = 1; i <= n; i++) {
      doc.setPage(i);
      doc.setFontSize(7); doc.setFont('helvetica', 'normal'); doc.setTextColor(180,180,180);
      doc.setDrawColor(220,220,220); doc.setLineWidth(0.2);
      doc.line(M, 284, pageW - M, 284);
      doc.text(`${this.companyName} — Logiciel Blessing ERP`, M, 288);
      doc.text(`Page ${i} / ${n}`, pageW - M, 289, { align: 'right' });
    }
    doc.save(`etat-ristournes-${this.subGroupBy}-${this.dateFrom}-${this.dateTo}.pdf`);
  }

  // ── Export Excel ────────────────────────────────────────────────────────────
  async exportExcel(): Promise<void> {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Ristournes');
    const byArticles = this.subGroupBy === 'articles';

    const PURPLE = 'FF4F46E5', WHITE = 'FFFFFFFF', GRAY = 'FFE9ECEF';
    const BRASS  = 'FFFFF9E8', GUIN  = 'FFF0FDF4';
    const ncols  = byArticles ? 6 : 3;

    ws.mergeCells(1, 1, 1, ncols);
    const t1 = ws.getCell('A1');
    t1.value = `${this.companyName} — ÉTAT DES RISTOURNES — ${this.printDateLabel}`;
    t1.font = { bold: true, size: 12, color: { argb: PURPLE } };
    t1.alignment = { horizontal: 'center' };

    ws.mergeCells(2, 1, 2, ncols);
    const t2 = ws.getCell('A2');
    t2.value = `Généré par ${this.generatedBy} le ${this.todayLabel}`;
    t2.font = { italic: true, size: 9, color: { argb: '777777' } };
    t2.alignment = { horizontal: 'center' };
    ws.addRow([]);

    for (const block of this.clientBlocks) {
      // En-tête client
      const cRow = ws.addRow([block.partnerName, ...(byArticles ? ['','','',''] : ['']), this.fmt(block.total) + ' FCFA']);
      ws.mergeCells(ws.rowCount, 1, ws.rowCount, ncols - 1);
      cRow.eachCell((c, col) => {
        c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: PURPLE } };
        c.font = { bold: true, color: { argb: WHITE }, size: 10 };
        c.alignment = col === ncols ? { horizontal: 'right' } : { horizontal: 'left' };
      });

      // En-tête colonnes
      const headers = byArticles
        ? ['Type', 'Article', 'Catégorie', 'Qté', 'P.U.', 'Montant (FCFA)']
        : ['Type', 'Catégorie', 'Montant (FCFA)'];
      const hRow = ws.addRow(headers);
      hRow.eachCell(c => {
        c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEDE9FE' } };
        c.font = { bold: true, size: 8, color: { argb: '374151' } };
        c.border = { bottom: { style: 'thin', color: { argb: 'FFC4B5FD' } } };
      });

      // Lignes
      const lines = byArticles ? block.articleLines : block.categoryLines;
      for (const l of lines) {
        const type = (l as ArticleLine).typeRistourne ?? (l as CategoryLine).typeRistourne;
        const cat  = (l as ArticleLine).categoryName  ?? (l as CategoryLine).categoryName;
        const amt  = byArticles ? (l as ArticleLine).montantTotal : (l as CategoryLine).totalAmount;
        const rowData = byArticles
          ? [type, (l as ArticleLine).productName || '—', cat, (l as ArticleLine).quantite, (l as ArticleLine).montantUnit, amt]
          : [type, cat, amt];
        const row = ws.addRow(rowData);
        const bg = type === 'brasserie' ? BRASS : GUIN;
        row.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
        row.getCell(1).font = { size: 8, color: { argb: type === 'brasserie' ? 'FF92400E' : 'FF064E3B' } };
        row.getCell(ncols).numFmt = '#,##0';
        row.getCell(ncols).alignment = { horizontal: 'right' };
        row.eachCell(c => { c.border = { bottom: { style: 'hair', color: { argb: 'FFCCCCCC' } } }; });
      }

      // Sous-total client
      const subRowData = byArticles ? ['', '', 'Sous-total', '', '', block.total] : ['', 'Sous-total', block.total];
      const subRow = ws.addRow(subRowData);
      subRow.getCell(ncols - 1).font = { bold: true, size: 9 };
      subRow.getCell(ncols).numFmt = '#,##0';
      subRow.getCell(ncols).alignment = { horizontal: 'right' };
      subRow.eachCell(c => {
        c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GRAY } };
        c.font = { ...(c.font || {}), bold: true, size: 9 };
        c.border = { top: { style: 'thin' }, bottom: { style: 'thin' } };
      });
      ws.addRow([]);
    }

    // Total général
    const totData = byArticles ? ['', '', '', '', 'TOTAL GÉNÉRAL', this.grandTotal] : ['', 'TOTAL GÉNÉRAL', this.grandTotal];
    const totRow = ws.addRow(totData);
    totRow.eachCell(c => {
      c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: PURPLE } };
      c.font = { bold: true, size: 11, color: { argb: WHITE } };
    });
    totRow.getCell(ncols).numFmt = '#,##0';
    totRow.getCell(ncols).alignment = { horizontal: 'right' };

    ws.columns = byArticles
      ? [{ width: 14 }, { width: 30 }, { width: 30 }, { width: 8 }, { width: 12 }, { width: 18 }]
      : [{ width: 14 }, { width: 40 }, { width: 18 }];

    const buf = await wb.xlsx.writeBuffer();
    const blob = new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `etat-ristournes-${this.subGroupBy}-${this.dateFrom}-${this.dateTo}.xlsx`;
    a.click();
  }
}
