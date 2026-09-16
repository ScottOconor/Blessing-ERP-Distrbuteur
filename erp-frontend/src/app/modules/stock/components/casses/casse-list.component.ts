import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, Warehouse, Product, StockLoss, StockLossRequest } from '../../services/stock.service';
import { SalesService, SalesClient } from '../../../sales/services/sales.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { ExcelExportService } from '../../../../core/services/excel-export.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface LossLineForm {
  productId: number | null;
  productCode: string;
  description: string;
  quantity: number | null;
  unitCost: number;
  search: string;
  /** Quantité disponible dans l'entrepôt sélectionné, chargée depuis allProducts (qtyOnHand) */
  available: number;
}

@Component({
  selector: 'app-casse-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './casse-list.component.html',
  styleUrl: './casse-list.component.scss'
})
export class CasseListComponent implements OnInit {
  activeTab: 'new' | 'history' = 'new';

  warehouses: Warehouse[] = [];
  clients: SalesClient[] = [];
  losses: StockLoss[] = [];
  loadingHistory = false;
  expandedId: number | null = null;

  /** Articles en stock dans l'entrepôt sélectionné (qtyOnHand > 0 uniquement) */
  allProducts: Product[] = [];
  activeSuggestionIdx: number | null = null;

  form = {
    date: new Date().toISOString().slice(0, 10),
    warehouseId: 0,
    partnerId: null as number | null,
    notes: ''
  };
  lines: LossLineForm[] = [];

  saving = false;
  errorMsg = '';
  successMsg = '';

  dateFrom = '';
  dateTo = '';
  historyError = '';

  get companyId(): number { return this.auth.getCompanyId(); }

  get totalEstimate(): number {
    return this.lines.reduce((s, l) => s + ((l.quantity || 0) * (l.unitCost || 0)), 0);
  }

  get grandTotal(): number {
    return this.losses.reduce((s, l) => s + (l.totalValue ?? 0), 0);
  }

  get companyName(): string { return this.auth.getActiveCompany()?.name || 'Mon entreprise'; }

  constructor(
    private stockService: StockService,
    private salesService: SalesService,
    private excelExportService: ExcelExportService,
    private auth: AuthService
  ) {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    this.dateFrom = firstDay.toISOString().slice(0, 10);
    this.dateTo = today.toISOString().slice(0, 10);
  }

  ngOnInit(): void {
    this.stockService.getWarehouses(this.companyId).subscribe(w => this.warehouses = w);
    this.salesService.getClients(this.companyId).subscribe(c => this.clients = c);
    this.addLine();
    this.loadHistory();
  }

  /** Entrepôt (re)sélectionné : recharge la liste des articles réellement en stock, comme côté ventes. */
  onWarehouseChange(): void {
    this.allProducts = [];
    this.lines.forEach(l => { l.productId = null; l.productCode = ''; l.description = ''; l.available = 0; l.search = ''; });
    if (!this.form.warehouseId) return;
    this.stockService.getProducts(this.companyId, this.form.warehouseId).subscribe({
      next: data => {
        this.allProducts = data.filter(p =>
          (p.type === 'product' || p.type === 'consu') && (p.qtyOnHand ?? 0) > 0);
      },
      error: () => { this.errorMsg = 'Impossible de charger les articles en stock de cet entrepôt.'; }
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const t = event.target as HTMLElement;
    if (!t.closest('.search-cell')) this.activeSuggestionIdx = null;
  }

  // ── Lignes ────────────────────────────────────────────────────────────────
  addLine(): void {
    this.lines.push({ productId: null, productCode: '', description: '', quantity: null, unitCost: 0, search: '', available: 0 });
  }

  removeLine(i: number): void {
    this.lines.splice(i, 1);
    if (this.lines.length === 0) this.addLine();
    if (this.activeSuggestionIdx === i) this.activeSuggestionIdx = null;
  }

  /** Suggestions filtrées sur allProducts (déjà limité aux articles en stock de l'entrepôt choisi). */
  getSuggestions(i: number): Product[] {
    const q = (this.lines[i]?.search || '').toLowerCase().trim();
    if (!q) return this.allProducts.slice(0, 10);
    const matches = this.allProducts.filter(p =>
      p.name.toLowerCase().includes(q) || (p.defaultCode || '').toLowerCase().includes(q));
    return matches.slice(0, 12);
  }

  onSearchInput(i: number): void {
    this.lines[i].productId = null;
    this.activeSuggestionIdx = i;
  }

  selectProduct(i: number, p: Product): void {
    const line = this.lines[i];
    line.productId = p.id ?? null;
    line.productCode = p.defaultCode ?? '';
    line.description = p.name;
    line.unitCost = p.standardPrice ?? 0;
    line.available = p.qtyOnHand ?? 0;
    line.search = `${p.defaultCode ? p.defaultCode + ' — ' : ''}${p.name}`;
    this.activeSuggestionIdx = null;
  }

  /** Une ligne est invalide si la quantité demandée dépasse le stock disponible dans l'entrepôt. */
  lineExceedsStock(line: LossLineForm): boolean {
    return !!line.productId && !!line.quantity && line.quantity > line.available;
  }

  // ── Soumission ───────────────────────────────────────────────────────────
  save(): void {
    this.errorMsg = ''; this.successMsg = '';
    if (!this.form.warehouseId) { this.errorMsg = 'Sélectionnez un entrepôt.'; return; }
    if (!this.form.date) { this.errorMsg = 'Sélectionnez une date.'; return; }
    const validLines = this.lines.filter(l => l.productId && l.quantity && l.quantity > 0);
    if (validLines.length === 0) { this.errorMsg = 'Ajoutez au moins un article avec une quantité.'; return; }
    const invalid = validLines.find(l => this.lineExceedsStock(l));
    if (invalid) {
      this.errorMsg = `Stock insuffisant pour "${invalid.description}" : ${invalid.available} disponible(s), ${invalid.quantity} demandé(s).`;
      return;
    }

    const req: StockLossRequest = {
      date: this.form.date,
      warehouseId: this.form.warehouseId,
      partnerId: this.form.partnerId ?? undefined,
      notes: this.form.notes,
      companyId: this.companyId,
      lines: validLines.map(l => ({ productId: l.productId!, quantity: l.quantity! }))
    };

    this.saving = true;
    this.stockService.createStockLoss(req).subscribe({
      next: created => {
        this.saving = false;
        this.successMsg = `${created.name} enregistré — valeur ${this.fmt(created.totalValue ?? 0)} FCFA (écriture 659300/6031).`;
        this.form.partnerId = null;
        this.form.notes = '';
        this.lines = [];
        this.addLine();
        this.onWarehouseChange();
        this.loadHistory();
      },
      error: err => {
        this.saving = false;
        this.errorMsg = err?.error?.message || "Erreur lors de l'enregistrement.";
      }
    });
  }

  // ── Historique / rapport ─────────────────────────────────────────────────
  loadHistory(): void {
    this.loadingHistory = true;
    this.historyError = '';
    this.stockService.getStockLosses(this.companyId, this.dateFrom || undefined, this.dateTo || undefined).subscribe({
      next: d => { this.losses = d; this.loadingHistory = false; },
      error: err => { this.loadingHistory = false; this.historyError = err?.error?.message || 'Erreur de chargement.'; }
    });
  }

  toggleExpand(id: number | undefined): void {
    if (id == null) return;
    this.expandedId = this.expandedId === id ? null : id;
  }

  fmt(n: number): string {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  // ── Bordereau individuel ─────────────────────────────────────────────────
  downloadBordereau(loss: StockLoss): void {
    if (!loss.id) return;
    this.stockService.downloadCasseBordereauPdf(loss.id).subscribe({
      next: blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${loss.name || 'bordereau_casse'}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      },
      error: () => { this.historyError = 'Impossible de générer le bordereau.'; }
    });
  }

  // ── Exports ──────────────────────────────────────────────────────────────
  exportExcel(): void {
    this.excelExportService.exportStockLosses(this.losses, this.dateFrom, this.dateTo, this.companyName);
  }

  exportPdf(): void {
    const doc    = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageW  = doc.internal.pageSize.getWidth();
    const margin = 12;
    let y = margin;

    doc.setFontSize(17); doc.setFont('helvetica', 'bold'); doc.setTextColor(17, 24, 39);
    doc.text(this.companyName, margin, y);
    y += 6;
    doc.setDrawColor(200, 200, 200); doc.setLineWidth(0.3);
    doc.line(margin, y, pageW - margin, y);
    y += 10;

    doc.setFontSize(12); doc.setFont('helvetica', 'bold'); doc.setTextColor(17, 24, 39);
    doc.text('TROUS & CASSES', margin, y);
    y += 6;
    doc.setFontSize(9); doc.setFont('helvetica', 'normal'); doc.setTextColor(80, 80, 80);
    const periodLabel = this.dateFrom && this.dateTo ? `Période : ${this.dateFrom} au ${this.dateTo}` : 'Toutes périodes';
    doc.text(`${periodLabel}   |   Le : ${new Date().toLocaleDateString('fr-FR')}`, margin, y);
    y += 8;

    const dark     = [17, 24, 39]    as [number, number, number];
    const mid      = [55, 65, 81]    as [number, number, number];
    const grayFoot = [241, 245, 249] as [number, number, number];
    const bodyRows: any[] = [];

    for (const loss of this.losses) {
      for (const line of loss.lines) {
        bodyRows.push([
          { content: `${loss.name} — ${loss.date}`, styles: { fontStyle: 'bold' } },
          { content: loss.warehouseName || '' },
          { content: `${line.productCode ? line.productCode + ' — ' : ''}${line.description || ''}` },
          { content: this.fmt(line.quantity), styles: { halign: 'right' as const } },
          { content: this.fmt(line.montantTotal ?? 0) + ' FCFA', styles: { halign: 'right' as const } },
        ]);
      }
    }

    autoTable(doc, {
      startY: y, margin: { left: margin, right: margin },
      head: [[
        { content: 'Réf. / Date', styles: { halign: 'left' } },
        { content: 'Entrepôt',    styles: { halign: 'left' } },
        { content: 'Article',    styles: { halign: 'left' } },
        { content: 'Quantité',   styles: { halign: 'right' } },
        { content: 'Montant',    styles: { halign: 'right' } },
      ]],
      body: bodyRows,
      foot: [[
        { content: '', styles: { fillColor: grayFoot } },
        { content: '', styles: { fillColor: grayFoot } },
        { content: '', styles: { fillColor: grayFoot } },
        { content: 'TOTAL GÉNÉRAL', styles: { fillColor: grayFoot, fontStyle: 'bold', halign: 'right', textColor: mid } },
        { content: this.fmt(this.grandTotal) + ' FCFA', styles: { fillColor: grayFoot, fontStyle: 'bold', halign: 'right', textColor: dark } },
      ]],
      showFoot: 'lastPage', theme: 'plain',
      styles: { fontSize: 8, cellPadding: 3, textColor: dark, lineColor: [229, 231, 235], lineWidth: 0.1, overflow: 'hidden', minCellHeight: 6 },
      headStyles: { fillColor: [249, 250, 251], textColor: [80, 80, 80], fontStyle: 'bold', fontSize: 8, lineColor: [209, 213, 219], lineWidth: 0.3, overflow: 'hidden' },
      footStyles: { overflow: 'hidden' },
      columnStyles: {
        0: { cellWidth: 38 }, 1: { cellWidth: 32 }, 2: { cellWidth: 58 },
        3: { cellWidth: 22, halign: 'right', overflow: 'hidden' },
        4: { cellWidth: 30, halign: 'right', overflow: 'hidden' },
      },
    });

    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8); doc.setFont('helvetica', 'normal');
      doc.setTextColor(180, 180, 180); doc.setDrawColor(220, 220, 220); doc.setLineWidth(0.2);
      doc.line(margin, 284, pageW - margin, 284);
      doc.text(`${this.companyName} — Logiciel Blessing ERP`, margin, 288);
      doc.text(`Page ${i} / ${pageCount}`, pageW - margin, 289, { align: 'right' });
    }
    doc.save(`trous-casses-${this.dateFrom || 'toutes'}-${this.dateTo || 'periodes'}.pdf`);
  }
}
