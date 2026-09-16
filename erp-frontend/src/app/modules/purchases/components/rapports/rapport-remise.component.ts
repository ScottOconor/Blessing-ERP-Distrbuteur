import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RemiseService, RemisePaiement, RemiseArticleLine } from '../../services/remise.service';
import { AuthService } from '../../../../core/auth/auth.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as ExcelJS from 'exceljs';

interface ArticleLine { typeRemise: string; categoryName: string; productName: string | null; quantite: number; montantUnit: number; montantTotal: number; }
interface CategoryLine { typeRemise: string; categoryName: string; totalAmount: number; }
interface SupplierBlock { partnerName: string; articleLines: ArticleLine[]; categoryLines: CategoryLine[]; total: number; }

@Component({
  selector: 'app-rapport-remise',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rapport-remise.component.html',
  styleUrl: './rapport-remise.component.scss'
})
export class RapportRemiseComponent {
  dateFrom = '';
  dateTo   = '';
  paiements: RemisePaiement[] = [];
  loading   = false;
  generated = false;
  errorMsg  = '';

  subGroupBy: 'articles' | 'categories' = 'articles';
  expandedPartners = new Set<string>();

  constructor(private svc: RemiseService, private auth: AuthService) {
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

  // ── Blocs par fournisseur ─────────────────────────────────────────────────
  get supplierBlocks(): SupplierBlock[] {
    const map = new Map<string, { paiements: RemisePaiement[] }>();
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
          // Utilise articleLines (par produit) si disponible
          const srcLines = p.articleLines && p.articleLines.length > 0 ? p.articleLines : null;
          if (srcLines) {
            for (const l of srcLines) {
              if ((l.montantTotal ?? 0) <= 0) continue;
              articleLines.push({ typeRemise: p.typeRemise || '', categoryName: l.categoryName || '?', productName: l.productName || l.productCode || null, quantite: l.quantite ?? 0, montantUnit: l.montantUnitaire ?? 0, montantTotal: l.montantTotal });
            }
          } else {
            for (const l of p.lines || []) {
              const mt = l.montantTotal ?? 0;
              if (mt <= 0) continue;
              articleLines.push({ typeRemise: p.typeRemise || '', categoryName: l.categoryName || '?', productName: null, quantite: l.quantite ?? 0, montantUnit: l.montantUnitaire ?? 0, montantTotal: mt });
            }
          }
        }
        const catMap = new Map<string, CategoryLine>();
        for (const al of articleLines) {
          const key = `${al.typeRemise}||${al.categoryName}`;
          if (!catMap.has(key)) catMap.set(key, { typeRemise: al.typeRemise, categoryName: al.categoryName, totalAmount: 0 });
          catMap.get(key)!.totalAmount += al.montantTotal;
        }
        const categoryLines = [...catMap.values()].sort((a, b) => a.typeRemise.localeCompare(b.typeRemise) || a.categoryName.localeCompare(b.categoryName));
        return { partnerName: name, articleLines, categoryLines, total: articleLines.reduce((s, l) => s + l.montantTotal, 0) };
      })
      .filter(b => b.total > 0);
  }

  // ── Accordéon ─────────────────────────────────────────────────────────────
  togglePartner(name: string): void {
    if (this.expandedPartners.has(name)) this.expandedPartners.delete(name);
    else this.expandedPartners.add(name);
  }
  isExpanded(name: string): boolean { return this.expandedPartners.has(name); }
  expandAll():   void { this.supplierBlocks.forEach(b => this.expandedPartners.add(b.partnerName)); }
  collapseAll(): void { this.expandedPartners.clear(); }

  // ── KPIs ──────────────────────────────────────────────────────────────────
  private sumByType(type: string): number {
    let t = 0;
    for (const p of this.paiements.filter(x => x.typeRemise === type))
      for (const l of p.lines || []) t += l.montantTotal ?? 0;
    return t;
  }
  get totalBrasserie(): number { return this.sumByType('brasserie'); }
  get totalGuinness():  number { return this.sumByType('guinness'); }
  get grandTotal():     number { return this.supplierBlocks.reduce((s, b) => s + b.total, 0); }
  get partnerCount():   number { return new Set(this.paiements.map(p => p.partnerId)).size; }

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
    const byArticles = this.subGroupBy === 'articles';
    const doc   = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();
    const M = 12;
    let y = M;

    doc.setFontSize(14); doc.setFont('helvetica','bold'); doc.setTextColor(17,24,39);
    doc.text(this.companyName, M, y); y += 5;
    doc.setDrawColor(200,200,200); doc.setLineWidth(0.3); doc.line(M,y,pageW-M,y); y += 7;
    doc.setFontSize(11); doc.text(`RAPPORT DES REMISES FOURNISSEURS`, M, y); y += 5;
    doc.setFontSize(8); doc.setFont('helvetica','normal'); doc.setTextColor(80,80,80);
    doc.text(`Période : ${this.printDateLabel}   |   Généré par : ${this.generatedBy}   |   Le : ${this.todayLabel}`, M, y);
    y += 8;

    const dark:   [number,number,number] = [17,24,39];
    const gray:   [number,number,number] = [241,245,249];
    const purple: [number,number,number] = [79,70,229];

    for (const block of this.supplierBlocks) {
      autoTable(doc, {
        startY: y, margin: { left: M, right: M },
        head: [[
          { content: block.partnerName, colSpan: byArticles ? 5 : 3,
            styles: { fillColor: purple, textColor: [255,255,255] as [number,number,number], fontStyle: 'bold', fontSize: 9 } },
          { content: this.fmt(block.total) + ' FCFA',
            styles: { fillColor: purple, textColor: [255,255,255] as [number,number,number], halign: 'right', fontStyle: 'bold', fontSize: 9 } }
        ]],
        body: byArticles
          ? block.articleLines.map(l => [
              { content: l.typeRemise, styles: { textColor: this.typeColor(l.typeRemise), fillColor: this.typeBg(l.typeRemise), fontSize: 7.5 } },
              { content: l.productName || '—' },
              { content: l.categoryName },
              { content: this.fmt(l.quantite), styles: { halign: 'right' as const } },
              { content: this.fmt(l.montantUnit), styles: { halign: 'right' as const } },
              { content: this.fmt(l.montantTotal) + ' FCFA', styles: { halign: 'right' as const } }])
          : block.categoryLines.map(l => [
              { content: l.typeRemise, styles: { textColor: this.typeColor(l.typeRemise), fillColor: this.typeBg(l.typeRemise), fontSize: 7.5 } },
              { content: l.categoryName },
              { content: '', styles: {} },
              { content: this.fmt(l.totalAmount) + ' FCFA', styles: { halign: 'right' as const } }]),
        theme: 'plain',
        styles: { fontSize: 8, cellPadding: 2.5, textColor: dark, lineColor: [229,231,235], lineWidth: 0.1 },
        headStyles: { fontSize: 9 },
        columnStyles: byArticles
          ? { 0:{cellWidth:18}, 1:{cellWidth:45}, 2:{cellWidth:38}, 3:{cellWidth:15,halign:'right'}, 4:{cellWidth:22,halign:'right'}, 5:{cellWidth:48,halign:'right'} }
          : { 0:{cellWidth:20}, 1:{cellWidth:90}, 2:{cellWidth:20}, 3:{cellWidth:56,halign:'right'} }
      });
      y = (doc as any).lastAutoTable.finalY + 5;
      if (y > 268) { doc.addPage(); y = M; }
    }

    autoTable(doc, {
      startY: y, margin: { left: M, right: M },
      body: [[
        { content: 'TOTAL GÉNÉRAL', colSpan: byArticles ? 5 : 3,
          styles: { fillColor: gray, fontStyle: 'bold', halign: 'right', textColor: [55,65,81] as [number,number,number] } },
        { content: this.fmt(this.grandTotal) + ' FCFA',
          styles: { fillColor: gray, fontStyle: 'bold', halign: 'right', textColor: dark } }
      ]],
      theme: 'plain',
      styles: { fontSize: 9, cellPadding: 3, lineColor: [209,213,219], lineWidth: 0.2 },
      columnStyles: byArticles
        ? { 0:{cellWidth:18}, 1:{cellWidth:45}, 2:{cellWidth:38}, 3:{cellWidth:15}, 4:{cellWidth:22}, 5:{cellWidth:48,halign:'right'} }
        : { 0:{cellWidth:20}, 1:{cellWidth:90}, 2:{cellWidth:20}, 3:{cellWidth:56,halign:'right'} }
    });

    const n = doc.getNumberOfPages();
    for (let i = 1; i <= n; i++) {
      doc.setPage(i);
      doc.setFontSize(7); doc.setFont('helvetica','normal'); doc.setTextColor(180,180,180);
      doc.setDrawColor(220,220,220); doc.setLineWidth(0.2);
      doc.line(M,284,pageW-M,284);
      doc.text(`${this.companyName} — Blessing ERP`, M, 288);
      doc.text(`Page ${i} / ${n}`, pageW-M, 289, { align: 'right' });
    }
    doc.save(`rapport-remises-${this.subGroupBy}-${this.dateFrom}-${this.dateTo}.pdf`);
  }

  // ── Export Excel ────────────────────────────────────────────────────────────
  async exportExcel(): Promise<void> {
    const byArticles = this.subGroupBy === 'articles';
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Remises');
    const PURPLE = 'FF4F46E5', WHITE = 'FFFFFFFF', GRAY = 'FFE9ECEF';
    const BRASS  = 'FFFFF9E8', GUIN  = 'FFF0FDF4';
    const ncols  = byArticles ? 6 : 4;

    ws.mergeCells(1,1,1,ncols);
    const t1 = ws.getCell('A1');
    t1.value = `${this.companyName} — RAPPORT DES REMISES FOURNISSEURS — ${this.printDateLabel}`;
    t1.font = { bold: true, size: 12, color: { argb: PURPLE } };
    t1.alignment = { horizontal: 'center' };
    ws.mergeCells(2,1,2,ncols);
    const t2 = ws.getCell('A2');
    t2.value = `Généré par ${this.generatedBy} le ${this.todayLabel}`;
    t2.font = { italic: true, size: 9, color: { argb: '777777' } };
    t2.alignment = { horizontal: 'center' };
    ws.addRow([]);

    for (const block of this.supplierBlocks) {
      const hRow = ws.addRow([block.partnerName, ...(byArticles ? ['','','',''] : ['','']), this.fmt(block.total) + ' FCFA']);
      ws.mergeCells(ws.rowCount, 1, ws.rowCount, ncols - 1);
      hRow.eachCell((c, col) => {
        c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: PURPLE } };
        c.font = { bold: true, color: { argb: WHITE }, size: 10 };
        c.alignment = col === ncols ? { horizontal: 'right' } : { horizontal: 'left' };
      });

      const headers = byArticles ? ['Type','Article','Catégorie','Qté','P.U.','Montant (FCFA)'] : ['Type','Catégorie','Sous-total (FCFA)',''];
      const thRow = ws.addRow(headers);
      thRow.eachCell(c => {
        c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEDE9FE' } };
        c.font = { bold: true, size: 8, color: { argb: '374151' } };
        c.border = { bottom: { style: 'thin', color: { argb: 'FFC4B5FD' } } };
      });

      const lines = byArticles ? block.articleLines : block.categoryLines;
      for (const l of lines) {
        const type = (l as ArticleLine).typeRemise ?? (l as CategoryLine).typeRemise;
        const cat  = (l as ArticleLine).categoryName ?? (l as CategoryLine).categoryName;
        const amt  = byArticles ? (l as ArticleLine).montantTotal : (l as CategoryLine).totalAmount;
        const rowData = byArticles
          ? [type, (l as ArticleLine).productName || '—', cat, (l as ArticleLine).quantite, (l as ArticleLine).montantUnit, amt]
          : [type, cat, amt, ''];
        const row = ws.addRow(rowData);
        const bg = type === 'brasserie' ? BRASS : GUIN;
        row.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
        row.getCell(1).font = { size: 8, color: { argb: type === 'brasserie' ? 'FF92400E' : 'FF064E3B' } };
        row.getCell(byArticles ? 5 : 3).numFmt = '#,##0';
        row.getCell(byArticles ? 5 : 3).alignment = { horizontal: 'right' };
        row.eachCell(c => { c.border = { bottom: { style: 'hair', color: { argb: 'FFCCCCCC' } } }; });
      }

      const subData = byArticles ? ['','','Sous-total','','',block.total] : ['','Sous-total',block.total,''];
      const subRow = ws.addRow(subData);
      subRow.eachCell(c => {
        c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GRAY } };
        c.font = { bold: true, size: 9 };
        c.border = { top: { style: 'thin' }, bottom: { style: 'thin' } };
      });
      const amtCell = byArticles ? 5 : 3;
      subRow.getCell(amtCell).numFmt = '#,##0';
      subRow.getCell(amtCell).alignment = { horizontal: 'right' };
      ws.addRow([]);
    }

    const totData = byArticles ? ['','','','','TOTAL GÉNÉRAL',this.grandTotal] : ['','TOTAL GÉNÉRAL',this.grandTotal,''];
    const totRow = ws.addRow(totData);
    totRow.eachCell(c => {
      c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: PURPLE } };
      c.font = { bold: true, size: 11, color: { argb: WHITE } };
    });
    const totAmtCell = byArticles ? 5 : 3;
    totRow.getCell(totAmtCell).numFmt = '#,##0';
    totRow.getCell(totAmtCell).alignment = { horizontal: 'right' };

    ws.columns = byArticles
      ? [{width:14},{width:30},{width:30},{width:10},{width:14},{width:18}]
      : [{width:14},{width:40},{width:18},{width:10}];

    const buf = await wb.xlsx.writeBuffer();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
    a.download = `rapport-remises-${this.subGroupBy}-${this.dateFrom}-${this.dateTo}.xlsx`;
    a.click();
  }
}
