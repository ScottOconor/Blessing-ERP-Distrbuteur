import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PurchaseService, PurchaseStatsResponse, StatsAchatsRequest } from '../../../services/purchase.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import { AccountingService } from '../../../../accounting/services/accounting.service';
import { Partner } from '../../../../../core/models/account.model';
import { StockService, ProductCategory, Product, Warehouse } from '../../../../stock/services/stock.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as ExcelJS from 'exceljs';

@Component({
  selector: 'app-stats-achats',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stats-achats.component.html',
  styleUrl: './stats-achats.component.scss'
})
export class StatsAchatsComponent implements OnInit {

  // ── Filtres ───────────────────────────────────────────────────────────────
  dateFrom = '';
  dateTo   = '';
  groupBy  = 'fournisseur';   // fournisseur | category | product | agent | warehouse

  selectedPartnerId:   number | null = null;
  selectedCategoryId:  number | null = null;
  selectedProductId:   number | null = null;
  selectedWarehouseId: number | null = null;
  agentSearch = '';

  // ── Données de référence ──────────────────────────────────────────────────
  suppliers:  Partner[]         = [];
  categories: ProductCategory[] = [];
  products:   Product[]         = [];
  warehouses: Warehouse[]       = [];

  // ── État ──────────────────────────────────────────────────────────────────
  loading   = false;
  generated = false;
  errorMsg  = '';
  data: PurchaseStatsResponse | null = null;

  readonly GROUP_LABELS: Record<string, string> = {
    fournisseur: 'Fournisseur',
    category:    'Catégorie',
    product:     'Produit',
    agent:       'Agent',
    warehouse:   'Entrepôt',
  };

  get companyId(): number { return this.authService.getCompanyId(); }
  get companyName(): string { return this.authService.getActiveCompany()?.name || ''; }
  get generatedBy(): string { return this.authService.getUserDisplayName(); }
  get groupLabel(): string { return this.GROUP_LABELS[this.groupBy] ?? this.groupBy; }

  constructor(
    private purchaseService: PurchaseService,
    private authService: AuthService,
    private accountingService: AccountingService,
    private stockService: StockService
  ) {}

  ngOnInit(): void {
    const now = new Date();
    this.dateTo   = now.toISOString().split('T')[0];
    this.dateFrom = new Date(now.getFullYear(), 0, 1).toISOString().split('T')[0];

    const cid = this.companyId;
    this.accountingService.getPartners(cid).subscribe(p =>
      this.suppliers = p.filter(x => x.type === 'supplier' || x.type === 'both'));
    this.stockService.getCategories(cid).subscribe(c => this.categories = c);
    this.stockService.getProducts(cid).subscribe(p => this.products = p);
    this.stockService.getWarehouses(cid).subscribe(w => this.warehouses = w.filter(x => x.active !== false));
  }

  generate(): void {
    if (!this.dateFrom || !this.dateTo) { this.errorMsg = 'Sélectionnez la période.'; return; }
    this.loading = true; this.generated = false; this.errorMsg = '';

    const req: StatsAchatsRequest = {
      dateFrom:    this.dateFrom,
      dateTo:      this.dateTo,
      companyId:   this.companyId,
      groupBy:     this.groupBy,
      partnerId:   this.selectedPartnerId   || null,
      categoryId:  this.selectedCategoryId  || null,
      productId:   this.selectedProductId   || null,
      createdBy:   this.agentSearch.trim()  || null,
      warehouseId: this.selectedWarehouseId || null,
    };

    this.purchaseService.getStatsAchats(req).subscribe({
      next: res => { this.data = res; this.loading = false; this.generated = true; },
      error: err => { this.loading = false; this.errorMsg = err.error?.message || 'Erreur lors de la génération.'; }
    });
  }

  reset(): void {
    this.selectedPartnerId   = null;
    this.selectedCategoryId  = null;
    this.selectedProductId   = null;
    this.selectedWarehouseId = null;
    this.agentSearch = '';
    this.groupBy = 'fournisseur';
    this.generated = false;
    this.data = null;
  }

  // ── Helpers ────────────────────────────────────────────────────────────────
  private fmt(n: number): string {
    return Math.round(n ?? 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
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

    doc.setFontSize(11); doc.text('STATISTIQUES D\'ACHATS', M, y); y += 5;
    doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(80, 80, 80);
    doc.text(`Regroupement : ${this.groupLabel}   |   Période : ${this.printDateLabel}   |   Généré par : ${this.generatedBy}   |   Le : ${this.todayLabel}`, M, y); y += 7;

    const dark: [number,number,number] = [17, 24, 39];
    const gray: [number,number,number] = [241, 245, 249];

    const head: string[] = [this.groupLabel, 'Produit', 'Qté', 'Px achat HT', 'Montant HT', 'Remise', 'Montant TTC'];

    const body: any[] = [];
    for (const g of this.data.suppliers) {
      for (const l of g.lines) {
        body.push([g.supplierName, l.productName || l.productCode || '', this.fmtD(l.qty, 2), this.fmt(l.prixAchat), this.fmt(l.montantHT), this.fmt(l.remise), this.fmt(l.montantTTC)]);
      }
      // Sous-total
      body.push([
        { content: `Total ${g.supplierName}`, colSpan: 3, styles: { fontStyle: 'bold', fillColor: gray, halign: 'right' as const } },
        { content: '', styles: { fillColor: gray } },
        { content: this.fmt(g.totalHT),     styles: { fontStyle: 'bold', fillColor: gray, halign: 'right' as const } },
        { content: this.fmt(g.totalRemise), styles: { fontStyle: 'bold', fillColor: gray, halign: 'right' as const } },
        { content: this.fmt(g.totalTTC),    styles: { fontStyle: 'bold', fillColor: gray, halign: 'right' as const } },
      ]);
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
    doc.save(`stats-achats-${this.dateFrom}-${this.dateTo}.pdf`);
  }

  // ── Export Excel ────────────────────────────────────────────────────────────
  async exportExcel(): Promise<void> {
    if (!this.data) return;
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Stats Achats');
    const PURPLE = 'FF714B67', WHITE = 'FFFFFFFF', GRAY = 'FFE9ECEF';

    const ncols = 7;
    ws.mergeCells(1, 1, 1, ncols);
    const t = ws.getCell('A1');
    t.value = `${this.companyName} — STATISTIQUES D'ACHATS — Regroupement : ${this.groupLabel} — ${this.printDateLabel}`;
    t.font = { bold: true, size: 12, color: { argb: PURPLE } };
    t.alignment = { horizontal: 'center' };
    ws.mergeCells(2, 1, 2, ncols);
    const s = ws.getCell('A2');
    s.value = `Généré par ${this.generatedBy} le ${this.todayLabel}`;
    s.font = { italic: true, size: 9, color: { argb: '777777' } };
    s.alignment = { horizontal: 'center' };
    ws.addRow([]);

    const hdrs: string[] = [this.groupLabel, 'Produit', 'Qté', 'Px achat HT', 'Montant HT', 'Remise', 'Montant TTC'];

    const hRow = ws.addRow(hdrs);
    hRow.eachCell(c => {
      c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: PURPLE } };
      c.font = { bold: true, color: { argb: WHITE }, size: 9 };
      c.alignment = { horizontal: 'center', vertical: 'middle' };
      c.border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };
    });

    for (const g of this.data.suppliers) {
      for (const l of g.lines) {
        ws.addRow([g.supplierName, l.productName || l.productCode || '', l.qty, l.prixAchat, l.montantHT, l.remise, l.montantTTC])
          .eachCell(c => { c.font = { size: 9 }; c.border = { bottom: { style: 'hair', color: { argb: 'FFCCCCCC' } } }; });
      }
      ws.addRow([`Total ${g.supplierName}`, '', g.totalQty, '', g.totalHT, g.totalRemise, g.totalTTC]).eachCell(c => {
        c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GRAY } };
        c.font = { bold: true, size: 9 };
        c.border = { top: { style: 'thin' }, bottom: { style: 'thin' } };
      });
    }

    ws.addRow(['TOTAL GÉNÉRAL', '', this.data.grandTotalQty, '', this.data.grandTotalHT, this.data.grandTotalRemise, this.data.grandTotalTTC]).eachCell(c => {
      c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: PURPLE } };
      c.font = { bold: true, color: { argb: WHITE }, size: 10 };
      c.border = { top: { style: 'medium' }, bottom: { style: 'medium' } };
    });

    ws.columns = [
      { width: 28 }, { width: 30 }, { width: 8 }, { width: 12 }, { width: 13 }, { width: 12 }, { width: 13 },
    ];

    const buf = await wb.xlsx.writeBuffer();
    const blob = new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url;
    a.download = `stats-achats-${this.groupBy}-${this.dateFrom}-${this.dateTo}.xlsx`;
    a.click(); URL.revokeObjectURL(url);
  }
}
