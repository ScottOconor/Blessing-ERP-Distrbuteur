import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EnlevementService, EnlevementConfig, EnlevementClientConfig, EnlevementRapportEntry } from '../../services/enlevement.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { StockService, ProductCategory } from '../../../stock/services/stock.service';
import { environment } from '../../../../../environments/environment';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface SupplierOption { id: number; name: string; }

@Component({
  selector: 'app-enlevement-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enlevement-list.component.html',
  styleUrl: './enlevement-list.component.scss'
})
export class EnlevementListComponent implements OnInit {

  activeTab: 'config' | 'reglements' = 'config';

  // ── Config ────────────────────────────────────────────────────────────────
  enlevements: EnlevementConfig[] = [];
  categories: ProductCategory[] = [];
  suppliers:  SupplierOption[]  = [];
  loadingConfig = false;
  expandedId: number | null = null;

  showModal = false;
  saving    = false;
  errMsg    = '';
  editing: EnlevementConfig | null = null;
  form: EnlevementConfig = this.emptyForm();

  // ── Règlements ────────────────────────────────────────────────────────────
  dateFrom  = '';
  dateTo    = '';
  entries:  EnlevementRapportEntry[] = [];
  generating = false;
  generated  = false;
  reglError  = '';

  get companyId(): number { return this.auth.getCompanyId(); }
  get companyName(): string { return this.auth.getActiveCompany()?.name || 'Mon entreprise'; }
  get generatedBy(): string { return this.auth.getUserDisplayName(); }

  get grandTotal():    number { return this.entries.reduce((s, e) => s + (e.totalAmount ?? 0), 0); }
  get partnerCount():  number { return this.entries.length; }
  get categoryCount(): number {
    const cats = new Set<string>();
    this.entries.forEach(e => e.lines.forEach(l => cats.add(l.categoryName)));
    return cats.size;
  }

  get printDateLabel(): string {
    if (!this.dateFrom || !this.dateTo) return '';
    const fmt = (s: string) => { const [y, m, d] = s.split('-'); return `${d}/${m}/${y}`; };
    return `${fmt(this.dateFrom)} au ${fmt(this.dateTo)}`;
  }

  get todayLabel(): string {
    return new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
  }

  constructor(
    private svc: EnlevementService,
    private auth: AuthService,
    private stock: StockService,
    private http: HttpClient
  ) {
    const today    = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    this.dateFrom  = firstDay.toISOString().slice(0, 10);
    this.dateTo    = today.toISOString().slice(0, 10);
  }

  ngOnInit(): void {
    this.loadConfig();
    this.stock.getCategories(this.companyId).subscribe(c => this.categories = c);
    this.http.get<SupplierOption[]>(`${environment.apiUrl}/api/accounting/partners`, {
      params: new HttpParams().set('companyId', this.companyId).set('type', 'supplier')
    }).subscribe(s => this.suppliers = s);
  }

  // ── Config ────────────────────────────────────────────────────────────────

  loadConfig(): void {
    this.loadingConfig = true;
    this.svc.getAll(this.companyId).subscribe({
      next: d  => { this.enlevements = d; this.loadingConfig = false; },
      error: () => { this.loadingConfig = false; }
    });
  }

  openNew(): void {
    this.editing = null;
    this.form = this.emptyForm();
    this.errMsg = '';
    this.showModal = true;
  }

  openEdit(e: EnlevementConfig): void {
    this.editing = e;
    this.form = { ...e, clients: e.clients ? e.clients.map(c => ({ ...c })) : [] };
    this.errMsg = '';
    this.showModal = true;
  }

  closeModal(): void { this.showModal = false; }

  saveConfig(): void {
    if (!this.form.categoryId || !this.form.montantFixe) {
      this.errMsg = 'Catégorie et montant fixe requis.'; return;
    }
    this.saving = true; this.errMsg = '';
    this.svc.save({ ...this.form, companyId: this.companyId }).subscribe({
      next: () => { this.saving = false; this.showModal = false; this.loadConfig(); },
      error: e  => { this.saving = false; this.errMsg = e?.error?.message || 'Erreur.'; }
    });
  }

  removeConfig(id: number): void {
    if (!confirm('Désactiver ce tarif d\'enlèvement ?')) return;
    this.svc.delete(id).subscribe({ next: () => this.loadConfig() });
  }

  toggleExpand(id: number): void {
    this.expandedId = this.expandedId === id ? null : id;
  }

  addClientTarif(): void {
    if (!this.form.clients) this.form.clients = [];
    this.form.clients.push({ partnerId: 0, montant: 0 });
  }

  removeClientTarif(i: number): void { this.form.clients?.splice(i, 1); }

  categoryName(id: number): string { return this.categories.find(c => c.id === id)?.name ?? ''; }

  /** TTC = HT × (1 + 19,25%), pour vérifier le calcul appliqué en facturation */
  ttc(montantHT: number | null | undefined): number {
    return (montantHT ?? 0) * 1.1925;
  }

  private emptyForm(): EnlevementConfig {
    return { categoryId: 0, montantFixe: 0, coutEnlevement: 0, companyId: this.companyId, active: true, clients: [] };
  }

  // ── Règlements ────────────────────────────────────────────────────────────

  generate(): void {
    if (!this.dateFrom || !this.dateTo) { this.reglError = 'Veuillez sélectionner une période.'; return; }
    this.generating = true; this.reglError = '';
    this.svc.getRapport(this.companyId, this.dateFrom, this.dateTo).subscribe({
      next: data => { this.entries = data; this.generated = true; this.generating = false; },
      error: e   => { this.generating = false; this.reglError = e?.error?.message || 'Erreur lors de la génération.'; }
    });
  }

  private fmt(n: number): string {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
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
    doc.text('RÈGLEMENTS DES COÛTS D\'ENLÈVEMENT', margin, y);
    y += 6;
    doc.setFontSize(9); doc.setFont('helvetica', 'normal'); doc.setTextColor(80, 80, 80);
    doc.text(`Période : ${this.printDateLabel}   |   Généré par : ${this.generatedBy}   |   Le : ${this.todayLabel}`, margin, y);
    y += 8;

    const dark     = [17, 24, 39]    as [number, number, number];
    const mid      = [55, 65, 81]    as [number, number, number];
    const grayFoot = [241, 245, 249] as [number, number, number];
    const bodyRows: any[] = [];

    for (const entry of this.entries) {
      for (const line of entry.lines) {
        bodyRows.push([
          { content: entry.partnerName, styles: { fontStyle: 'bold' } },
          { content: line.categoryName },
          { content: this.fmt(line.quantite), styles: { halign: 'right' as const } },
          { content: this.fmt(line.montantUnitaire) + ' FCFA', styles: { halign: 'right' as const } },
          { content: this.fmt(line.montantTotal) + ' FCFA', styles: { halign: 'right' as const } },
        ]);
      }
    }

    autoTable(doc, {
      startY: y, margin: { left: margin, right: margin },
      head: [[
        { content: 'Fournisseur', styles: { halign: 'left' } },
        { content: 'Catégorie',   styles: { halign: 'left' } },
        { content: 'Quantité',    styles: { halign: 'right' } },
        { content: 'Tarif/U.',    styles: { halign: 'right' } },
        { content: 'Total',       styles: { halign: 'right' } },
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
        0: { cellWidth: 50 }, 1: { cellWidth: 56 },
        2: { cellWidth: 20, halign: 'right', overflow: 'hidden' },
        3: { cellWidth: 32, halign: 'right', overflow: 'hidden' },
        4: { cellWidth: 28, halign: 'right', overflow: 'hidden' },
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
    doc.save(`reglements-enlevements-${this.dateFrom}-${this.dateTo}.pdf`);
  }
}
