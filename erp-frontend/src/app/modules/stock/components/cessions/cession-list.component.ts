import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, Warehouse, Product, StockCession, StockCessionRequest } from '../../services/stock.service';
import { SalesService, SalesClient } from '../../../sales/services/sales.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { AccountAccount } from '../../../../core/models/account.model';
import { AuthService } from '../../../../core/auth/auth.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface CessionLineForm {
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
  selector: 'app-cession-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cession-list.component.html',
  styleUrl: './cession-list.component.scss'
})
export class CessionListComponent implements OnInit {
  activeTab: 'new' | 'history' = 'new';

  warehouses: Warehouse[] = [];
  clients: SalesClient[] = [];
  accounts: AccountAccount[] = [];
  cessions: StockCession[] = [];
  loadingHistory = false;
  expandedId: number | null = null;

  /** Articles en stock dans l'entrepôt sélectionné (qtyOnHand > 0 uniquement) */
  allProducts: Product[] = [];
  activeSuggestionIdx: number | null = null;

  form = {
    date: new Date().toISOString().slice(0, 10),
    warehouseId: 0,
    partnerId: null as number | null,
    notes: '',
    debitAccountCode: '',
    creditAccountCode: ''
  };
  lines: CessionLineForm[] = [];

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
    return this.cessions.reduce((s, l) => s + (l.totalValue ?? 0), 0);
  }

  get companyName(): string { return this.auth.getActiveCompany()?.name || 'Mon entreprise'; }

  constructor(
    private stockService: StockService,
    private salesService: SalesService,
    private accountingService: AccountingService,
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
    this.accountingService.getAccounts(this.companyId).subscribe(a => {
      this.accounts = (a || []).filter(acc => !acc.deprecated);
    });
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

  /** Entrée dans la recherche : retient la première proposition (rien si l'article est déjà choisi). */
  onSearchEnter(i: number): void {
    if (this.lines[i]?.productId) { this.activeSuggestionIdx = null; return; }
    const first = this.getSuggestions(i)[0];
    if (first && (this.lines[i].search || '').trim()) this.selectProduct(i, first);
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
  lineExceedsStock(line: CessionLineForm): boolean {
    return !!line.productId && !!line.quantity && line.quantity > line.available;
  }

  // ── Soumission ───────────────────────────────────────────────────────────
  save(): void {
    this.errorMsg = ''; this.successMsg = '';
    if (!this.form.warehouseId) { this.errorMsg = 'Sélectionnez un entrepôt.'; return; }
    if (!this.form.date) { this.errorMsg = 'Sélectionnez une date.'; return; }
    if (!this.form.debitAccountCode) { this.errorMsg = 'Sélectionnez le compte de débit.'; return; }
    if (!this.form.creditAccountCode) { this.errorMsg = 'Sélectionnez le compte de crédit.'; return; }
    if (this.form.debitAccountCode === this.form.creditAccountCode) {
      this.errorMsg = 'Les comptes de débit et de crédit doivent être différents.'; return;
    }
    const validLines = this.lines.filter(l => l.productId && l.quantity && l.quantity > 0);
    if (validLines.length === 0) { this.errorMsg = 'Ajoutez au moins un article avec une quantité.'; return; }
    const invalid = validLines.find(l => this.lineExceedsStock(l));
    if (invalid) {
      this.errorMsg = `Stock insuffisant pour "${invalid.description}" : ${invalid.available} disponible(s), ${invalid.quantity} demandé(s).`;
      return;
    }

    const req: StockCessionRequest = {
      date: this.form.date,
      warehouseId: this.form.warehouseId,
      partnerId: this.form.partnerId ?? undefined,
      notes: this.form.notes,
      debitAccountCode: this.form.debitAccountCode,
      creditAccountCode: this.form.creditAccountCode,
      companyId: this.companyId,
      lines: validLines.map(l => ({ productId: l.productId!, quantity: l.quantity! }))
    };

    this.saving = true;
    this.stockService.createStockCession(req).subscribe({
      next: created => {
        this.saving = false;
        this.successMsg = `${created.name} enregistré — valeur ${this.fmt(created.totalValue ?? 0)} FCFA `
          + `(écriture ${created.debitAccountCode}/${created.creditAccountCode}).`;
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
    this.stockService.getStockCessions(this.companyId, this.dateFrom || undefined, this.dateTo || undefined).subscribe({
      next: d => { this.cessions = d; this.loadingHistory = false; },
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

  accountLabel(code: string): string {
    const a = this.accounts.find(x => x.code === code);
    return a ? `${a.code} — ${a.name}` : code;
  }

  // ── Bordereau individuel ─────────────────────────────────────────────────
  downloadBordereau(cession: StockCession): void {
    if (!cession.id) return;
    this.stockService.downloadCessionBordereauPdf(cession.id).subscribe({
      next: blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${cession.name || 'bordereau_cession'}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      },
      error: () => { this.historyError = 'Impossible de générer le bordereau.'; }
    });
  }

  // ── Export PDF de la liste ───────────────────────────────────────────────
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
    doc.text('CESSIONS DE STOCK', margin, y);
    y += 6;
    doc.setFontSize(9); doc.setFont('helvetica', 'normal'); doc.setTextColor(80, 80, 80);
    const periodLabel = this.dateFrom && this.dateTo ? `Période : ${this.dateFrom} au ${this.dateTo}` : 'Toutes périodes';
    doc.text(`${periodLabel}   |   Le : ${new Date().toLocaleDateString('fr-FR')}`, margin, y);
    y += 8;

    const dark     = [17, 24, 39]    as [number, number, number];
    const mid      = [55, 65, 81]    as [number, number, number];
    const grayFoot = [241, 245, 249] as [number, number, number];
    const bodyRows: any[] = [];

    for (const cession of this.cessions) {
      for (const line of cession.lines) {
        bodyRows.push([
          { content: `${cession.name} — ${cession.date}`, styles: { fontStyle: 'bold' } },
          { content: cession.warehouseName || '' },
          { content: `${cession.debitAccountCode || ''} / ${cession.creditAccountCode || ''}` },
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
        { content: 'Débit / Crédit', styles: { halign: 'left' } },
        { content: 'Article',    styles: { halign: 'left' } },
        { content: 'Quantité',   styles: { halign: 'right' } },
        { content: 'Montant',    styles: { halign: 'right' } },
      ]],
      body: bodyRows,
      foot: [[
        { content: '', styles: { fillColor: grayFoot } },
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
        0: { cellWidth: 32 }, 1: { cellWidth: 26 }, 2: { cellWidth: 26 }, 3: { cellWidth: 46 },
        4: { cellWidth: 20, halign: 'right', overflow: 'hidden' },
        5: { cellWidth: 28, halign: 'right', overflow: 'hidden' },
      },
    });

    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8); doc.setFont('helvetica', 'normal');
      doc.setTextColor(180, 180, 180); doc.setDrawColor(220, 220, 220); doc.setLineWidth(0.2);
      doc.line(margin, 284, pageW - margin, 284);
      doc.text(`${this.companyName} — Logiciel K.I.R.A ERP`, margin, 288);
      doc.text(`Page ${i} / ${pageCount}`, pageW - margin, 289, { align: 'right' });
    }
    doc.save(`cessions-${this.dateFrom || 'toutes'}-${this.dateTo || 'periodes'}.pdf`);
  }
}
