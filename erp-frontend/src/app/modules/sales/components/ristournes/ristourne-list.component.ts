import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RistourneService, Ristourne, RistournePaiement, RistournePaiementLine, PartnerGroup, QuarterGroup } from '../../services/ristourne.service';
import { SalesService, SalesClient } from '../../services/sales.service';
import { StockService, ProductCategory } from '../../../stock/services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { downloadExcelTemplate, parseExcelFile } from '../../../../core/utils/excel-import.util';

const RST_HEADERS = ['Client', "Catégorie d'article", 'Type de ristourne', 'Montant de la ristourne', 'Ristourne TTC', 'Actif'];
const RST_SAMPLE  = ['Client ABC', 'Bières', 'Brasserie', '261.21', '318.02', 'OUI'];

@Component({
  selector: 'app-ristourne-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ristourne-list.component.html',
  styleUrl: './ristourne-list.component.scss'
})
export class RistourneListComponent implements OnInit {
  @ViewChild('importInput') importInput!: ElementRef<HTMLInputElement>;

  // ===== Import Excel =====
  showImportModal = false;
  importRows: Record<string, any>[] = [];
  importLoading = false;

  // ===== Config tab =====
  ristournes: Ristourne[] = [];
  clients: SalesClient[] = [];
  categories: ProductCategory[] = [];
  loadingRst = false;
  showRstModal = false;
  editingRst: Ristourne | null = null;
  savingRst = false;
  rstForm: Ristourne = this.emptyRst();
  rstError = '';

  // ===== Tabs =====
  activeTab: 'config' | 'brasseries' | 'guinness' | 'reglements' = 'config';
  reglSubTab: 'brasseries' | 'guinness' = 'brasseries';

  // ===== Brasseries tab =====
  brasseriesPaiements: RistournePaiement[] = [];
  loadingBrasseries = false;
  generatingQuarter: string | null = null;  // 'Q1-2026'
  quarterMsg = '';
  quarterError = '';
  expandedBrasserieKeys = new Set<string>(); // 'Q1-2026-partnerId'
  expandedQuarters = new Set<string>();       // 'Q1-2026'

  // ===== Guinness tab =====
  guinessPaiements: RistournePaiement[] = [];
  loadingGuiness = false;
  showGuinessModal = false;
  guinessDateStart = '';
  guinessDateEnd   = '';
  generatingGuiness = false;
  guinessMsg = '';
  guinessError = '';
  expandedGuinessKeys = new Set<number>(); // partnerId

  // ===== Règlements tab (génération avoirs) =====
  reglBrasseriesGroups: QuarterGroup[] = [];
  reglGuinessGroups: PartnerGroup[] = [];
  loadingReglBrasseries = false;
  loadingReglGuiness = false;
  expandedReglKeys = new Set<string>(); // 'Q1-2026-partnerId' or 'guinness-partnerId'
  expandedReglQuarters = new Set<string>();
  generatingFacture: string | null = null;
  factureMsg = '';
  factureError = '';

  readonly TYPE_OPTS = [
    { value: '', label: 'Autre (HT × 1.1925)' },
    { value: 'brasserie', label: 'Brasserie (HT × (1 + précompte% + 19.25%))' },
    { value: 'guinness',  label: 'Guinness (HT × 1.1925 — sans précompte)' }
  ];

  readonly QUARTERS = [
    { q: 1, label: 'T1 (Jan–Mar)' },
    { q: 2, label: 'T2 (Avr–Jun)' },
    { q: 3, label: 'T3 (Jul–Sep)' },
    { q: 4, label: 'T4 (Oct–Déc)' },
  ];

  constructor(
    private svc: RistourneService,
    private salesSvc: SalesService,
    private stockSvc: StockService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.salesSvc.getClients(this.companyId).subscribe(c => this.clients = c);
    this.stockSvc.getCategories(this.companyId).subscribe(cats => this.categories = cats);
    this.loadRistournes();
  }

  get companyId(): number {
    return this.auth.getCompanyId();
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }

  // ===== Config =====

  loadRistournes(): void {
    this.loadingRst = true;
    this.svc.getAll(this.companyId).subscribe({
      next: r => { this.ristournes = r; this.loadingRst = false; },
      error: () => this.loadingRst = false
    });
  }

  openNewRst(): void {
    this.editingRst = null;
    this.rstForm = this.emptyRst();
    this.rstError = '';
    this.showRstModal = true;
  }

  editRst(r: Ristourne): void {
    this.editingRst = r;
    this.rstForm = { ...r };
    this.rstError = '';
    this.showRstModal = true;
  }

  saveRst(): void {
    if (!this.rstForm.partnerId || !this.rstForm.categoryId || !this.rstForm.montantFixe) {
      this.rstError = 'Client, catégorie et montant sont requis.';
      return;
    }
    this.savingRst = true;
    this.rstError = '';
    this.svc.save({ ...this.rstForm, companyId: this.companyId }).subscribe({
      next: () => { this.showRstModal = false; this.loadRistournes(); this.savingRst = false; },
      error: () => { this.rstError = 'Erreur lors de la sauvegarde.'; this.savingRst = false; }
    });
  }

  deleteRst(id: number): void {
    if (!confirm('Supprimer cette ristourne ?')) return;
    this.svc.delete(id).subscribe(() => this.loadRistournes());
  }

  // ===== Brasseries tab =====

  loadBrasseries(): void {
    this.loadingBrasseries = true;
    this.svc.getAllPaiements(this.companyId, 'brasserie').subscribe({
      next: p => { this.brasseriesPaiements = p; this.loadingBrasseries = false; },
      error: () => this.loadingBrasseries = false
    });
  }

  get brasseriesByQuarter(): QuarterGroup[] {
    const grouped = this.groupByQuarter(this.brasseriesPaiements);
    for (const qDef of this.QUARTERS) {
      if (!grouped.find(g => g.quarter === qDef.q && g.year === this.currentYear)) {
        grouped.push({ quarter: qDef.q, year: this.currentYear, label: `T${qDef.q} ${this.currentYear}`, totalAmount: 0, partners: [] });
      }
    }
    return grouped.sort((a, b) => b.year - a.year || b.quarter - a.quarter);
  }

  generateQuarter(q: number): void {
    const key = `Q${q}-${this.currentYear}`;
    this.generatingQuarter = key;
    this.quarterMsg = '';
    this.quarterError = '';
    this.svc.generateByQuarter(q, this.currentYear, this.companyId).subscribe({
      next: res => {
        this.generatingQuarter = null;
        this.quarterMsg = `T${q} : ${res.generated} règlement(s) créé(s), ${res.skipped} ignoré(s).`;
        this.loadBrasseries();
      },
      error: err => {
        this.generatingQuarter = null;
        this.quarterError = err?.error?.message ?? 'Erreur lors de la génération.';
      }
    });
  }

  toggleQuarter(key: string): void {
    this.expandedQuarters.has(key) ? this.expandedQuarters.delete(key) : this.expandedQuarters.add(key);
  }

  toggleBrasseriePartner(key: string): void {
    this.expandedBrasserieKeys.has(key) ? this.expandedBrasserieKeys.delete(key) : this.expandedBrasserieKeys.add(key);
  }

  confirmBrasseriePmt(id: number): void {
    if (!confirm('Confirmer ce règlement ?')) return;
    this.svc.confirmPaiement(id).subscribe(() => this.loadBrasseries());
  }

  cancelBrasseriePmt(id: number): void {
    if (!confirm('Annuler ce règlement ?')) return;
    this.svc.cancelPaiement(id).subscribe(() => this.loadBrasseries());
  }

  confirmAllBrasserie(paiements: RistournePaiement[]): void {
    const drafts = paiements.filter(p => p.state === 'draft');
    if (drafts.length === 0) return;
    if (!confirm(`Confirmer les ${drafts.length} règlement(s) en brouillon ?`)) return;
    let done = 0;
    for (const p of drafts) {
      this.svc.confirmPaiement(p.id!).subscribe(() => {
        done++;
        if (done === drafts.length) this.loadBrasseries();
      });
    }
  }

  // ===== Guinness tab =====

  loadGuiness(): void {
    this.loadingGuiness = true;
    this.svc.getAllPaiements(this.companyId, 'guinness').subscribe({
      next: p => { this.guinessPaiements = p; this.loadingGuiness = false; },
      error: () => this.loadingGuiness = false
    });
  }

  get guinessByClient(): PartnerGroup[] {
    return this.groupByPartner(this.guinessPaiements);
  }

  openGuinessModal(): void {
    this.guinessDateStart = '';
    this.guinessDateEnd   = '';
    this.guinessMsg   = '';
    this.guinessError = '';
    this.showGuinessModal = true;
  }

  generateGuiness(): void {
    if (!this.guinessDateStart || !this.guinessDateEnd) {
      this.guinessError = 'Veuillez saisir une date de début et de fin.';
      return;
    }
    this.generatingGuiness = true;
    this.guinessError = '';
    this.svc.generateByPeriod(this.guinessDateStart, this.guinessDateEnd, this.companyId).subscribe({
      next: res => {
        this.generatingGuiness = false;
        this.guinessMsg = `${res.generated} règlement(s) créé(s), ${res.skipped} ignoré(s) sur ${res.total} facture(s).`;
        this.showGuinessModal = false;
        this.loadGuiness();
      },
      error: err => {
        this.generatingGuiness = false;
        this.guinessError = err?.error?.message ?? 'Erreur lors de la génération.';
      }
    });
  }

  toggleGuinessPartner(pid: number): void {
    this.expandedGuinessKeys.has(pid) ? this.expandedGuinessKeys.delete(pid) : this.expandedGuinessKeys.add(pid);
  }

  confirmGuinessPmt(id: number): void {
    if (!confirm('Confirmer ce règlement ?')) return;
    this.svc.confirmPaiement(id).subscribe(() => this.loadGuiness());
  }

  cancelGuinessPmt(id: number): void {
    if (!confirm('Annuler ce règlement ?')) return;
    this.svc.cancelPaiement(id).subscribe(() => this.loadGuiness());
  }

  confirmAllGuiness(paiements: RistournePaiement[]): void {
    const drafts = paiements.filter(p => p.state === 'draft');
    if (drafts.length === 0) return;
    if (!confirm(`Confirmer les ${drafts.length} règlement(s) en brouillon ?`)) return;
    let done = 0;
    for (const p of drafts) {
      this.svc.confirmPaiement(p.id!).subscribe(() => {
        done++;
        if (done === drafts.length) this.loadGuiness();
      });
    }
  }

  // ===== Règlements tab =====

  loadReglements(): void {
    this.loadReglBrasseries();
    this.loadReglGuiness();
  }

  loadReglBrasseries(): void {
    this.loadingReglBrasseries = true;
    this.svc.getGroupedPaiements(this.companyId, 'brasserie').subscribe({
      next: groups => {
        this.reglBrasseriesGroups = this.groupPartnersByQuarter(groups);
        this.loadingReglBrasseries = false;
      },
      error: () => this.loadingReglBrasseries = false
    });
  }

  loadReglGuiness(): void {
    this.loadingReglGuiness = true;
    this.svc.getGroupedPaiements(this.companyId, 'guinness').subscribe({
      next: groups => { this.reglGuinessGroups = groups; this.loadingReglGuiness = false; },
      error: () => this.loadingReglGuiness = false
    });
  }

  toggleReglQuarter(key: string): void {
    this.expandedReglQuarters.has(key) ? this.expandedReglQuarters.delete(key) : this.expandedReglQuarters.add(key);
  }

  toggleReglPartner(key: string): void {
    this.expandedReglKeys.has(key) ? this.expandedReglKeys.delete(key) : this.expandedReglKeys.add(key);
  }

  generateFactureForGroup(ids: number[], key: string): void {
    this.generatingFacture = key;
    this.factureMsg   = '';
    this.factureError = '';
    this.svc.generateFacture(ids, this.companyId).subscribe({
      next: res => {
        this.generatingFacture = null;
        this.factureMsg = `Avoir ${res.invoiceName} généré avec succès.`;
        this.loadReglements();
      },
      error: err => {
        this.generatingFacture = null;
        this.factureError = err?.error?.message ?? 'Erreur lors de la génération.';
      }
    });
  }

  openFacture(id: number): void {
    this.router.navigate(['/sales/invoices', id]);
  }

  // ===== Helpers =====

  private groupByQuarter(paiements: RistournePaiement[]): QuarterGroup[] {
    const map = new Map<string, QuarterGroup>();
    for (const p of paiements) {
      if (!p.date) continue;
      const d = new Date(p.date);
      const q = Math.floor(d.getMonth() / 3) + 1;
      const y = d.getFullYear();
      const key = `Q${q}-${y}`;
      if (!map.has(key)) {
        map.set(key, { quarter: q, year: y, label: `T${q} ${y}`, totalAmount: 0, partners: [] });
      }
      const qg = map.get(key)!;
      let pg = qg.partners.find(x => x.partnerId === p.partnerId);
      if (!pg) {
        pg = { partnerId: p.partnerId, partnerName: p.partnerName!, totalAmount: 0, paiements: [] };
        qg.partners.push(pg);
      }
      pg.paiements.push(p);
      pg.totalAmount += p.totalAmount ?? 0;
      qg.totalAmount += p.totalAmount ?? 0;
    }
    return Array.from(map.values()).sort((a, b) => b.year - a.year || b.quarter - a.quarter);
  }

  private groupByPartner(paiements: RistournePaiement[]): PartnerGroup[] {
    const map = new Map<number, PartnerGroup>();
    for (const p of paiements) {
      if (!map.has(p.partnerId)) {
        map.set(p.partnerId, { partnerId: p.partnerId, partnerName: p.partnerName!, totalAmount: 0, paiements: [] });
      }
      const pg = map.get(p.partnerId)!;
      pg.paiements.push(p);
      pg.totalAmount += p.totalAmount ?? 0;
    }
    return Array.from(map.values());
  }

  private groupPartnersByQuarter(groups: PartnerGroup[]): QuarterGroup[] {
    // Groups already contain confirmed RSTs per partner; group those by quarter
    const allPaiements: RistournePaiement[] = groups.flatMap(g => g.paiements);
    return this.groupByQuarter(allPaiements);
  }

  hasDrafts(paiements: RistournePaiement[]): boolean {
    return paiements.some(p => p.state === 'draft');
  }

  stateBadge(state: string | undefined): string {
    switch (state) {
      case 'confirmed': return 'badge-confirmed';
      case 'done':      return 'badge-done';
      case 'cancelled': return 'badge-cancelled';
      default:          return 'badge-draft';
    }
  }

  stateLabel(state: string | undefined): string {
    switch (state) {
      case 'confirmed': return 'Confirmé';
      case 'done':      return 'Réglé';
      case 'cancelled': return 'Annulé';
      default:          return 'Brouillon';
    }
  }

  onTabChange(tab: 'config' | 'brasseries' | 'guinness' | 'reglements'): void {
    this.activeTab = tab;
    if (tab === 'brasseries' && this.brasseriesPaiements.length === 0) this.loadBrasseries();
    if (tab === 'guinness'   && this.guinessPaiements.length === 0)    this.loadGuiness();
    if (tab === 'reglements') this.loadReglements();
  }

  // ===== Import Excel =====

  downloadTemplate(): void {
    downloadExcelTemplate(RST_HEADERS, RST_SAMPLE, 'modele_ristournes.xlsx');
  }

  triggerImport(): void {
    this.importInput.nativeElement.value = '';
    this.importInput.nativeElement.click();
  }

  async onImportFileChange(event: Event): Promise<void> {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.importLoading = true;
    try {
      const rows = await parseExcelFile(file);
      this.importRows = rows.filter(r => r['Client']);
      if (this.importRows.length === 0) {
        this.rstError = 'Aucune ligne valide (colonne "Client" requise)';
        this.importLoading = false;
        return;
      }
      this.showImportModal = true;
    } catch (e: any) { this.rstError = 'Erreur : ' + e.message; }
    this.importLoading = false;
  }

  closeImportModal(): void { this.showImportModal = false; this.importRows = []; }

  private norm(s: string): string {
    return (s || '').trim().toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ');
  }

  getClientId(name: string): number | undefined {
    if (!name) return undefined;
    const n = this.norm(name);
    return this.clients.find(c => this.norm(c.name ?? '') === n)?.id;
  }

  getCategoryId(name: string): number | undefined {
    if (!name) return undefined;
    const n = this.norm(name);
    return this.categories.find(c => this.norm(c.name ?? '') === n)?.id;
  }

  normalizeType(raw: string): string {
    const v = this.norm(raw);
    if (v === 'brasserie') return 'brasserie';
    if (v === 'guinness')  return 'guinness';
    return '';
  }

  confirmImport(): void {
    this.importLoading = true;

    const rows = this.importRows
      .map(row => ({
        clientName:    String(row['Client'] || ''),
        categoryName:  String(row["Catégorie d'article"] || ''),
        typeRistourne: this.normalizeType(String(row['Type de ristourne'] || '')),
        montantFixe:   parseFloat(row['Montant de la ristourne']) || 0
      }))
      .filter(r => r.clientName);

    this.svc.importBatch(rows, this.companyId).subscribe({
      next: saved => {
        this.importLoading = false;
        this.closeImportModal();
        this.loadRistournes();
        const skipped = rows.length - saved.length;
        const msg = [`Import terminé : ${saved.length} ristourne(s) sauvegardée(s)`];
        if (skipped > 0) msg.push(`${skipped} ligne(s) ignorée(s) (client ou catégorie introuvable)`);
        alert(msg.join('\n'));
      },
      error: err => {
        this.importLoading = false;
        alert('Erreur lors de l\'import : ' + (err?.error?.message ?? err.message ?? 'Erreur serveur'));
      }
    });
  }

  private emptyRst(): Ristourne {
    return { partnerId: 0, categoryId: 0, montantFixe: 0, typeRistourne: '', companyId: this.companyId };
  }
}
