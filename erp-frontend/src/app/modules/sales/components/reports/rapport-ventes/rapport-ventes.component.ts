import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  SalesService, SalesClient, Seller, RapportVentesRequest, RapportVentesResponse, RapportVentesLine
} from '../../../services/sales.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import { StockService, Warehouse } from '../../../../stock/services/stock.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as ExcelJS from 'exceljs';

type Periode = 'today' | 'week' | 'month' | 'lastMonth' | 'year' | 'custom';

@Component({
  selector: 'app-rapport-ventes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rapport-ventes.component.html',
  styleUrl: './rapport-ventes.component.scss'
})
export class RapportVentesComponent implements OnInit {

  // ── Filtres ───────────────────────────────────────────────────────────────
  periode: Periode = 'month';
  dateFrom = '';
  dateTo   = '';
  selectedWarehouseId: number | null = null;
  selectedPartnerId:   number | null = null;
  selectedSellerId:    number | null = null;
  includeAvoirs = true;
  search = '';

  readonly HEADERS = ['Nom du client', 'Réf. facture', 'Total TTC', 'Montant encaissé', 'Qté consigne', 'Qté déconsigne', 'Total colis', 'Total PET', 'Total casiers'];

  readonly PERIODES: { k: Periode; label: string }[] = [
    { k: 'today',     label: "Aujourd'hui" },
    { k: 'week',      label: 'Cette semaine' },
    { k: 'month',     label: 'Ce mois' },
    { k: 'lastMonth', label: 'Mois dernier' },
    { k: 'year',      label: 'Cette année' },
    { k: 'custom',    label: 'Personnalisée' },
  ];

  // ── Données de référence ──────────────────────────────────────────────────
  clients:    SalesClient[] = [];
  sellers:    Seller[]      = [];
  warehouses: Warehouse[]   = [];

  // ── État ──────────────────────────────────────────────────────────────────
  loading   = false;
  generated = false;
  errorMsg  = '';
  data: RapportVentesResponse | null = null;

  get companyId(): number { return this.authService.getCompanyId(); }
  get companyName(): string { return this.authService.getActiveCompany()?.name || ''; }
  get generatedBy(): string { return this.authService.getUserDisplayName(); }

  constructor(
    private salesService: SalesService,
    private authService: AuthService,
    private stockService: StockService
  ) {}

  ngOnInit(): void {
    this.setPeriode('month');
    const cid = this.companyId;
    this.salesService.getClients(cid).subscribe(c => this.clients = c);
    this.salesService.getSellers(cid).subscribe(s => this.sellers = s.filter(x => x.active !== false));
    this.stockService.getWarehouses(cid).subscribe(w => this.warehouses = w.filter(x => x.active !== false));
  }

  // ── Période ───────────────────────────────────────────────────────────────
  private iso(d: Date): string {
    const p = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }

  setPeriode(k: Periode): void {
    this.periode = k;
    const now = new Date();
    const y = now.getFullYear(), m = now.getMonth();
    switch (k) {
      case 'today':
        this.dateFrom = this.dateTo = this.iso(now); break;
      case 'week': {
        const monday = new Date(now);
        monday.setDate(now.getDate() - ((now.getDay() + 6) % 7));
        this.dateFrom = this.iso(monday); this.dateTo = this.iso(now); break;
      }
      case 'month':
        this.dateFrom = this.iso(new Date(y, m, 1)); this.dateTo = this.iso(now); break;
      case 'lastMonth':
        this.dateFrom = this.iso(new Date(y, m - 1, 1)); this.dateTo = this.iso(new Date(y, m, 0)); break;
      case 'year':
        this.dateFrom = this.iso(new Date(y, 0, 1)); this.dateTo = this.iso(now); break;
      case 'custom':
        break;
    }
  }

  // ── Génération ────────────────────────────────────────────────────────────
  generate(): void {
    if (!this.dateFrom || !this.dateTo) { this.errorMsg = 'Sélectionnez la période.'; return; }
    if (this.dateFrom > this.dateTo) { this.errorMsg = 'La date de début doit précéder la date de fin.'; return; }
    this.loading = true; this.generated = false; this.errorMsg = '';

    const req: RapportVentesRequest = {
      dateFrom:      this.dateFrom,
      dateTo:        this.dateTo,
      companyId:     this.companyId,
      warehouseId:   this.selectedWarehouseId || null,
      partnerId:     this.selectedPartnerId   || null,
      sellerId:      this.selectedSellerId    || null,
      includeAvoirs: this.includeAvoirs,
    };

    this.salesService.getRapportVentes(req).subscribe({
      next: res => { this.data = res; this.loading = false; this.generated = true; },
      error: err => { this.loading = false; this.errorMsg = err.error?.message || 'Erreur lors de la génération.'; }
    });
  }

  reset(): void {
    this.setPeriode('month');
    this.selectedWarehouseId = null;
    this.selectedPartnerId   = null;
    this.selectedSellerId    = null;
    this.includeAvoirs = true;
    this.search = '';
    this.generated = false;
    this.data = null;
  }

  // ── Lignes affichées (recherche locale) + total général ───────────────────
  get rows(): RapportVentesLine[] {
    if (!this.data) return [];
    const q = this.search.trim().toLowerCase();
    if (!q) return this.data.lines;
    return this.data.lines.filter(l =>
      [l.clientName, l.clientRef, l.invoiceRef, l.originalInvoiceRef]
        .some(v => v && v.toLowerCase().includes(q)));
  }

  get totals() {
    const t = { ttc: 0, encaisse: 0, consigne: 0, deconsigne: 0, colis: 0, pet: 0, casiers: 0 };
    for (const l of this.rows) {
      t.ttc += l.totalTTC; t.encaisse += l.montantEncaisse; t.consigne += l.qteConsigne; t.deconsigne += l.qteDeconsigne;
      t.colis += l.totalColis; t.pet += l.totalPET; t.casiers += l.totalCasiers;
    }
    return t;
  }

  // ── Libellés d'impression ─────────────────────────────────────────────────
  private fmt(n: number): string {
    return Math.round(n ?? 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  private fmtQ(n: number): string {
    const v = Math.round((n ?? 0) * 100) / 100;
    return Number.isInteger(v) ? this.fmt(v) : v.toFixed(2).replace('.', ',');
  }
  private frDate(s: string): string {
    if (!s) return '';
    const [y, m, d] = s.split('-'); return `${d}/${m}/${y}`;
  }

  get printDateLabel(): string {
    return this.dateFrom && this.dateTo ? `${this.frDate(this.dateFrom)} au ${this.frDate(this.dateTo)}` : '';
  }
  get todayLabel(): string {
    return new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
  }
  get filtersLabel(): string {
    const parts: string[] = [];
    const w = this.warehouses.find(x => x.id === this.selectedWarehouseId);
    const c = this.clients.find(x => x.id === this.selectedPartnerId);
    const s = this.sellers.find(x => x.id === this.selectedSellerId);
    parts.push(`Entrepôt : ${w ? w.name : 'Tous'}`);
    if (c) parts.push(`Client : ${c.name}`);
    if (s) parts.push(`Vendeur : ${s.name}`);
    if (!this.includeAvoirs) parts.push('Hors avoirs');
    return parts.join('   |   ');
  }

  private refLabel(l: RapportVentesLine): string {
    return l.avoir && l.originalInvoiceRef ? `${l.invoiceRef} (sur ${l.originalInvoiceRef})` : l.invoiceRef;
  }

  // ── Export PDF ─────────────────────────────────────────────────────────────
  exportPdf(): void {
    if (!this.data) return;
    const doc   = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const M = 10;
    let y = M;

    doc.setFontSize(14); doc.setFont('helvetica', 'bold'); doc.setTextColor(17, 24, 39);
    doc.text(this.companyName, M, y); y += 5;
    doc.setDrawColor(200, 200, 200); doc.setLineWidth(0.3); doc.line(M, y, pageW - M, y); y += 8;

    doc.setFontSize(11); doc.text('RAPPORT DES VENTES', M, y); y += 5;
    doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(80, 80, 80);
    doc.text(`Période : ${this.printDateLabel}   |   ${this.filtersLabel}`, M, y); y += 4;
    doc.text(`Généré par : ${this.generatedBy}   |   Le : ${this.todayLabel}`, M, y); y += 6;

    const dark: [number, number, number] = [17, 24, 39];
    const right = { halign: 'right' as const };
    const t = this.totals;

    const body: any[] = this.rows.map(l => [
      l.clientName, this.refLabel(l), this.fmt(l.totalTTC), this.fmt(l.montantEncaisse),
      this.fmtQ(l.qteConsigne), this.fmtQ(l.qteDeconsigne),
      this.fmtQ(l.totalColis), this.fmtQ(l.totalPET), this.fmtQ(l.totalCasiers),
    ]);

    const tot = { fontStyle: 'bold' as const, fillColor: dark, textColor: [255, 255, 255] as [number, number, number] };
    body.push([
      { content: 'TOTAL GÉNÉRAL', colSpan: 2, styles: tot },
      { content: this.fmt(t.ttc),         styles: { ...tot, ...right } },
      { content: this.fmt(t.encaisse),    styles: { ...tot, ...right } },
      { content: this.fmtQ(t.consigne),   styles: { ...tot, ...right } },
      { content: this.fmtQ(t.deconsigne), styles: { ...tot, ...right } },
      { content: this.fmtQ(t.colis),      styles: { ...tot, ...right } },
      { content: this.fmtQ(t.pet),        styles: { ...tot, ...right } },
      { content: this.fmtQ(t.casiers),    styles: { ...tot, ...right } },
    ]);

    autoTable(doc, {
      startY: y, margin: { left: M, right: M, bottom: 16 },
      head: [this.HEADERS
        .map(h => ({ content: h, styles: { halign: 'center' as const } }))],
      body,
      theme: 'plain',
      styles: { fontSize: 7.5, cellPadding: 2, textColor: dark, lineColor: [229, 231, 235] as [number, number, number], lineWidth: 0.1 },
      headStyles: { fillColor: [249, 250, 251] as [number, number, number], textColor: [80, 80, 80] as [number, number, number], fontStyle: 'bold', lineColor: [209, 213, 219] as [number, number, number], lineWidth: 0.3 },
      columnStyles: { 2: right, 3: right, 4: right, 5: right, 6: right, 7: right, 8: right },
      didParseCell: d => {
        if (d.section === 'body' && d.row.index < this.rows.length && this.rows[d.row.index].avoir) {
          d.cell.styles.textColor = [185, 28, 28];
        }
      },
    });

    const n = doc.getNumberOfPages();
    for (let i = 1; i <= n; i++) {
      doc.setPage(i);
      doc.setFontSize(7); doc.setTextColor(180, 180, 180);
      doc.line(M, pageH - 12, pageW - M, pageH - 12);
      doc.text(`${this.companyName} — Blessing ERP`, M, pageH - 8);
      doc.text(`Page ${i}/${n}`, pageW - M, pageH - 8, { align: 'right' });
    }
    doc.save(`rapport-ventes-${this.dateFrom}-${this.dateTo}.pdf`);
  }

  // ── Export Excel ────────────────────────────────────────────────────────────
  async exportExcel(): Promise<void> {
    if (!this.data) return;
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet('Rapport des ventes');
    const PURPLE = 'FF714B67', WHITE = 'FFFFFFFF';
    const NCOLS = 9;

    ws.mergeCells(1, 1, 1, NCOLS);
    const title = ws.getCell('A1');
    title.value = `${this.companyName} — RAPPORT DES VENTES — ${this.printDateLabel}`;
    title.font = { bold: true, size: 12, color: { argb: PURPLE } };
    title.alignment = { horizontal: 'center' };
    ws.mergeCells(2, 1, 2, NCOLS);
    const sub = ws.getCell('A2');
    sub.value = `${this.filtersLabel} — Généré par ${this.generatedBy} le ${this.todayLabel}`;
    sub.font = { italic: true, size: 9, color: { argb: 'FF777777' } };
    sub.alignment = { horizontal: 'center' };
    ws.addRow([]);

    const hRow = ws.addRow(this.HEADERS);
    hRow.eachCell(c => {
      c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: PURPLE } };
      c.font = { bold: true, color: { argb: WHITE }, size: 9 };
      c.alignment = { horizontal: 'center', vertical: 'middle' };
      c.border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };
    });

    for (const l of this.rows) {
      const r = ws.addRow([l.clientName, this.refLabel(l), l.totalTTC, l.montantEncaisse, l.qteConsigne, l.qteDeconsigne, l.totalColis, l.totalPET, l.totalCasiers]);
      r.eachCell(c => {
        c.font = { size: 9, color: l.avoir ? { argb: 'FFB91C1C' } : undefined };
        c.border = { bottom: { style: 'hair', color: { argb: 'FFCCCCCC' } } };
      });
    }

    const t = this.totals;
    const totRow = ws.addRow(['TOTAL GÉNÉRAL', '', t.ttc, t.encaisse, t.consigne, t.deconsigne, t.colis, t.pet, t.casiers]);
    ws.mergeCells(totRow.number, 1, totRow.number, 2);
    totRow.eachCell(c => {
      c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: PURPLE } };
      c.font = { bold: true, color: { argb: WHITE }, size: 10 };
      c.border = { top: { style: 'medium' }, bottom: { style: 'medium' } };
    });

    ws.columns = [{ width: 32 }, { width: 26 }, { width: 15 }, { width: 16 }, { width: 13 }, { width: 14 }, { width: 12 }, { width: 11 }, { width: 13 }];
    [3, 4].forEach(i => ws.getColumn(i).numFmt = '#,##0');

    const buf = await wb.xlsx.writeBuffer();
    const blob = new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url;
    a.download = `rapport-ventes-${this.dateFrom}-${this.dateTo}.xlsx`;
    a.click(); URL.revokeObjectURL(url);
  }
}
