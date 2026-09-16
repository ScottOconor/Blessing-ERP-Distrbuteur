import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalesService, SalesStatsResponse, SalesClient, StatsVentesRequest } from '../../../services/sales.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import { StockService, ProductCategory, Product, Warehouse } from '../../../../stock/services/stock.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as ExcelJS from 'exceljs';

@Component({
  selector: 'app-stats-ventes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stats-ventes.component.html',
  styleUrl: './stats-ventes.component.scss'
})
export class StatsVentesComponent implements OnInit {

  // ── Filtres ───────────────────────────────────────────────────────────────
  dateFrom = '';
  dateTo   = '';
  groupBy  = 'client';   // client | category | product | vendeur | warehouse

  selectedPartnerId:   number | null = null;
  selectedCategoryId:  number | null = null;
  selectedProductId:   number | null = null;
  selectedWarehouseId: number | null = null;
  vendeurSearch = '';

  // ── Données de référence ──────────────────────────────────────────────────
  clients:    SalesClient[]     = [];
  categories: ProductCategory[] = [];
  products:   Product[]         = [];
  warehouses: Warehouse[]       = [];

  // ── État ──────────────────────────────────────────────────────────────────
  loading   = false;
  generated = false;
  errorMsg  = '';
  data: SalesStatsResponse | null = null;

  // ── Colonnes visibles ─────────────────────────────────────────────────────
  showCA    = true;   // CA HT + CA TTC
  showCout  = true;   // Coût total
  showMarge = true;   // Marge HT

  readonly GROUP_LABELS: Record<string, string> = {
    client:    'Client',
    category:  'Catégorie',
    product:   'Produit',
    vendeur:   'Vendeur',
    warehouse: 'Entrepôt',
  };

  get companyId(): number { return this.authService.getCompanyId(); }
  get companyName(): string { return this.authService.getActiveCompany()?.name || ''; }
  get generatedBy(): string { return this.authService.getUserDisplayName(); }
  get groupLabel(): string { return this.GROUP_LABELS[this.groupBy] ?? this.groupBy; }

  constructor(
    private salesService: SalesService,
    private authService: AuthService,
    private stockService: StockService
  ) {}

  ngOnInit(): void {
    const now = new Date();
    this.dateTo   = now.toISOString().split('T')[0];
    this.dateFrom = new Date(now.getFullYear(), 0, 1).toISOString().split('T')[0];

    const cid = this.companyId;
    this.salesService.getClients(cid).subscribe(c => this.clients = c);
    this.stockService.getCategories(cid).subscribe(c => this.categories = c);
    this.stockService.getProducts(cid).subscribe(p => this.products = p);
    this.stockService.getWarehouses(cid).subscribe(w => this.warehouses = w.filter(x => x.active !== false));
  }

  generate(): void {
    if (!this.dateFrom || !this.dateTo) { this.errorMsg = 'Sélectionnez la période.'; return; }
    this.loading = true; this.generated = false; this.errorMsg = '';

    const req: StatsVentesRequest = {
      dateFrom:    this.dateFrom,
      dateTo:      this.dateTo,
      companyId:   this.companyId,
      groupBy:     this.groupBy,
      partnerId:   this.selectedPartnerId   || null,
      categoryId:  this.selectedCategoryId  || null,
      productId:   this.selectedProductId   || null,
      createdBy:   this.vendeurSearch.trim() || null,
      warehouseId: this.selectedWarehouseId || null,
    };

    this.salesService.getStatsVentes(req).subscribe({
      next: res => { this.data = res; this.loading = false; this.generated = true; },
      error: err => { this.loading = false; this.errorMsg = err.error?.message || 'Erreur lors de la génération.'; }
    });
  }

  reset(): void {
    this.selectedPartnerId   = null;
    this.selectedCategoryId  = null;
    this.selectedProductId   = null;
    this.selectedWarehouseId = null;
    this.vendeurSearch = '';
    this.groupBy = 'client';
    this.generated = false;
    this.data = null;
  }

  // ── Helpers ────────────────────────────────────────────────────────────────
  private fmt(n: number): string {
    return Math.round(n ?? 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  private fmtD(n: number, d = 1): string {
    return (n ?? 0).toFixed(d);
  }

  get printDateLabel(): string {
    if (!this.dateFrom || !this.dateTo) return '';
    const f = (s: string) => { const [y, m, d] = s.split('-'); return `${d}/${m}/${y}`; };
    return `${f(this.dateFrom)} au ${f(this.dateTo)}`;
  }
  get todayLabel(): string {
    return new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
  }

  // ── Export PDF ─────────────────────────────────────────────────────────────
  exportPdf(): void {
    if (!this.data) return;
    const doc   = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();
    const M = 10;
    let y = M;

    doc.setFontSize(14); doc.setFont('helvetica', 'bold'); doc.setTextColor(17, 24, 39);
    doc.text(this.companyName, M, y); y += 5;
    doc.setDrawColor(200, 200, 200); doc.setLineWidth(0.3); doc.line(M, y, pageW - M, y); y += 8;

    doc.setFontSize(11); doc.text('STATISTIQUES DE VENTES', M, y); y += 5;
    doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(80, 80, 80);
    doc.text(`Regroupement : ${this.groupLabel}   |   Période : ${this.printDateLabel}   |   Généré par : ${this.generatedBy}   |   Le : ${this.todayLabel}`, M, y); y += 7;

    const dark: [number,number,number] = [17, 24, 39];
    const gray: [number,number,number] = [241, 245, 249];

    const head: string[] = [this.groupLabel, 'Produit', 'Qté', 'Px vente HT'];
    if (this.showCA)   head.push('CA HT');
    if (this.showCout) head.push('Coût');
    if (this.showMarge) head.push('Marge HT', 'Tx %');
    if (this.showCA)   head.push('CA TTC');

    const body: any[] = [];
    for (const g of this.data.clients) {
      for (const l of g.lines) {
        const row: any[] = [g.clientName, l.productName || l.productCode || '', this.fmtD(l.qty, 2), this.fmt(l.prixVente)];
        if (this.showCA)    row.push(this.fmt(l.caHT));
        if (this.showCout)  row.push(this.fmt(l.cout));
        if (this.showMarge) row.push(this.fmt(l.margeHT), this.fmtD(l.tauxMarge) + ' %');
        if (this.showCA)    row.push(this.fmt(l.caTTC));
        body.push(row);
      }
      // Sous-total
      const sub: any[] = [
        { content: `Total ${g.clientName}`, colSpan: 3, styles: { fontStyle: 'bold', fillColor: gray, halign: 'right' as const } },
        { content: '', styles: { fillColor: gray } },
      ];
      if (this.showCA)    sub.push({ content: this.fmt(g.totalHT),    styles: { fontStyle: 'bold', fillColor: gray, halign: 'right' as const } });
      if (this.showCout)  sub.push({ content: this.fmt(g.totalCout),  styles: { fontStyle: 'bold', fillColor: gray, halign: 'right' as const } });
      if (this.showMarge) sub.push({ content: this.fmt(g.totalMargeHT), styles: { fontStyle: 'bold', fillColor: gray, halign: 'right' as const } },
                                   { content: '', styles: { fillColor: gray } });
      if (this.showCA)    sub.push({ content: this.fmt(g.totalTTC),   styles: { fontStyle: 'bold', fillColor: gray, halign: 'right' as const } });
      body.push(sub);
    }

    autoTable(doc, {
      startY: y, margin: { left: M, right: M },
      head: [head.map(h => ({ content: h, styles: { halign: 'center' as const } }))],
      body,
      theme: 'plain',
      styles: { fontSize: 7, cellPadding: 2, textColor: dark, lineColor: [229,231,235] as [number,number,number], lineWidth: 0.1 },
      headStyles: { fillColor: [249,250,251] as [number,number,number], textColor: [80,80,80] as [number,number,number], fontStyle: 'bold', fontSize: 7, lineColor: [209,213,219] as [number,number,number], lineWidth: 0.3 },
    });

    const n = doc.getNumberOfPages();
    for (let i = 1; i <= n; i++) {
      doc.setPage(i);
      doc.setFontSize(7); doc.setTextColor(180,180,180);
      doc.line(M, 198, pageW-M, 198);
      doc.text(`${this.companyName} — Blessing ERP`, M, 202);
      doc.text(`Page ${i}/${n}`, pageW-M, 202, { align: 'right' });
    }
    doc.save(`stats-ventes-${this.dateFrom}-${this.dateTo}.pdf`);
  }

  // ── Export Excel ────────────────────────────────────────────────────────────
  async exportExcel(): Promise<void> {
    if (!this.data) return;
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Stats Ventes');
    const PURPLE = 'FF714B67', WHITE = 'FFFFFFFF', GRAY = 'FFE9ECEF';

    const ncols = 4 + (this.showCA ? 2 : 0) + (this.showCout ? 1 : 0)
                    + (this.showMarge ? 2 : 0);
    ws.mergeCells(1, 1, 1, ncols);
    const t = ws.getCell('A1');
    t.value = `${this.companyName} — STATISTIQUES DE VENTES — Regroupement : ${this.groupLabel} — ${this.printDateLabel}`;
    t.font = { bold: true, size: 12, color: { argb: PURPLE } };
    t.alignment = { horizontal: 'center' };
    ws.mergeCells(2, 1, 2, ncols);
    const s = ws.getCell('A2');
    s.value = `Généré par ${this.generatedBy} le ${this.todayLabel}`;
    s.font = { italic: true, size: 9, color: { argb: '777777' } };
    s.alignment = { horizontal: 'center' };
    ws.addRow([]);

    const hdrs: string[] = [this.groupLabel, 'Produit', 'Qté', 'Px vente HT'];
    if (this.showCA)    hdrs.push('CA HT');
    if (this.showCout)  hdrs.push('Coût');
    if (this.showMarge) hdrs.push('Marge HT', 'Taux %');
    if (this.showCA)    hdrs.push('CA TTC');

    const hRow = ws.addRow(hdrs);
    hRow.eachCell(c => {
      c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: PURPLE } };
      c.font = { bold: true, color: { argb: WHITE }, size: 9 };
      c.alignment = { horizontal: 'center', vertical: 'middle' };
      c.border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };
    });

    for (const g of this.data.clients) {
      for (const l of g.lines) {
        const row: any[] = [g.clientName, l.productName || l.productCode || '', l.qty, l.prixVente];
        if (this.showCA)    row.push(l.caHT);
        if (this.showCout)  row.push(l.cout);
        if (this.showMarge) row.push(l.margeHT, l.tauxMarge);
        if (this.showCA)    row.push(l.caTTC);
        ws.addRow(row).eachCell(c => { c.font = { size: 9 }; c.border = { bottom: { style: 'hair', color: { argb: 'FFCCCCCC' } } }; });
      }
      const sub: any[] = [`Total ${g.clientName}`, '', g.totalQty, ''];
      if (this.showCA)    sub.push(g.totalHT);
      if (this.showCout)  sub.push(g.totalCout);
      if (this.showMarge) sub.push(g.totalMargeHT, '');
      if (this.showCA)    sub.push(g.totalTTC);
      ws.addRow(sub).eachCell(c => {
        c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GRAY } };
        c.font = { bold: true, size: 9 };
        c.border = { top: { style: 'thin' }, bottom: { style: 'thin' } };
      });
    }

    const tot: any[] = ['TOTAL GÉNÉRAL', '', this.data.grandTotalQty, ''];
    if (this.showCA)    tot.push(this.data.grandTotalHT);
    if (this.showCout)  tot.push(this.data.grandTotalCout);
    if (this.showMarge) tot.push(this.data.grandTotalMargeHT, '');
    if (this.showCA)    tot.push(this.data.grandTotalTTC);
    ws.addRow(tot).eachCell(c => {
      c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: PURPLE } };
      c.font = { bold: true, color: { argb: WHITE }, size: 10 };
      c.border = { top: { style: 'medium' }, bottom: { style: 'medium' } };
    });

    ws.columns = [
      { width: 28 }, { width: 30 }, { width: 8 }, { width: 12 },
      ...(this.showCA    ? [{ width: 13 }] : []),
      ...(this.showCout  ? [{ width: 13 }] : []),
      ...(this.showMarge ? [{ width: 13 }, { width: 9 }] : []),
      ...(this.showCA    ? [{ width: 13 }] : []),
    ];

    const buf = await wb.xlsx.writeBuffer();
    const blob = new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url;
    a.download = `stats-ventes-${this.groupBy}-${this.dateFrom}-${this.dateTo}.xlsx`;
    a.click(); URL.revokeObjectURL(url);
  }
}
