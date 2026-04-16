import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RistourneService, Ristourne, RistournePaiement, RistournePaiementLine, PartnerGroup } from '../../services/ristourne.service';
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

  // ===== Paiements tab =====
  paiements: RistournePaiement[] = [];
  loadingPmt = false;
  showPmtModal = false;
  editingPmt: RistournePaiement | null = null;
  savingPmt = false;
  pmtForm: RistournePaiement = this.emptyPmt();
  pmtError = '';

  activeTab: 'config' | 'paiements' | 'reglements' = 'config';

  // ===== Règlements groupés =====
  groups: PartnerGroup[] = [];
  loadingGroups = false;
  expandedPartners = new Set<number>();
  generatingFacture: number | null = null;
  factureMsg = '';
  factureError = '';

  readonly TYPE_OPTS = [
    { value: '', label: 'Ristourne HT brute' },
    { value: 'brasserie', label: 'Brasserie (HT × (1 + précompte% + 19.25%))' },
    { value: 'guinness', label: 'Guinness (HT × 1.1925)' }
  ];

  constructor(
    private svc: RistourneService,
    private salesSvc: SalesService,
    private stockSvc: StockService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAll();
  }

  get companyId(): number {
    return this.auth.getCurrentUser()?.companyId ?? 1;
  }

  private loadAll(): void {
    this.loadRistournes();
    this.loadPaiements();
    this.salesSvc.getClients(this.companyId).subscribe(c => this.clients = c);
    this.stockSvc.getCategories(this.companyId).subscribe(cats => this.categories = cats);
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

  // ===== Paiements =====

  loadPaiements(): void {
    this.loadingPmt = true;
    this.svc.getAllPaiements(this.companyId).subscribe({
      next: p => { this.paiements = p; this.loadingPmt = false; },
      error: () => this.loadingPmt = false
    });
  }

  openNewPmt(): void {
    this.editingPmt = null;
    this.pmtForm = this.emptyPmt();
    this.pmtError = '';
    this.showPmtModal = true;
  }

  addPmtLine(): void {
    this.pmtForm.lines.push({ categoryId: 0, quantite: 0, montantUnitaire: 0 });
  }

  removePmtLine(i: number): void {
    this.pmtForm.lines.splice(i, 1);
  }

  savePmt(): void {
    if (!this.pmtForm.partnerId) {
      this.pmtError = 'Veuillez sélectionner un client.';
      return;
    }
    this.savingPmt = true;
    this.pmtError = '';
    this.svc.savePaiement({ ...this.pmtForm, companyId: this.companyId }).subscribe({
      next: () => { this.showPmtModal = false; this.loadPaiements(); this.savingPmt = false; },
      error: () => { this.pmtError = 'Erreur lors de la sauvegarde.'; this.savingPmt = false; }
    });
  }

  confirmPmt(id: number): void {
    if (!confirm('Confirmer ce règlement ristourne ?')) return;
    this.svc.confirmPaiement(id!).subscribe(() => this.loadPaiements());
  }

  cancelPmt(id: number): void {
    if (!confirm('Annuler ce règlement ristourne ?')) return;
    this.svc.cancelPaiement(id!).subscribe(() => this.loadPaiements());
  }

  getPmtLineMontantTotal(line: RistournePaiementLine): number {
    return (line.quantite ?? 0) * (line.montantUnitaire ?? 0);
  }

  getTotalPmt(): number {
    return this.pmtForm.lines.reduce((s, l) => s + this.getPmtLineMontantTotal(l), 0);
  }

  stateBadge(state: string | undefined): string {
    switch (state) {
      case 'confirmed': return 'badge-confirmed';
      case 'done': return 'badge-done';
      case 'cancelled': return 'badge-cancelled';
      default: return 'badge-draft';
    }
  }

  stateLabel(state: string | undefined): string {
    switch (state) {
      case 'confirmed': return 'Confirmé';
      case 'done': return 'Fait';
      case 'cancelled': return 'Annulé';
      default: return 'Brouillon';
    }
  }

  // ===== Règlements groupés =====

  loadGroups(): void {
    this.loadingGroups = true;
    this.factureMsg = '';
    this.factureError = '';
    this.svc.getGroupedPaiements(this.companyId).subscribe({
      next: g => { this.groups = g; this.loadingGroups = false; },
      error: () => this.loadingGroups = false
    });
  }

  togglePartner(pid: number): void {
    if (this.expandedPartners.has(pid)) {
      this.expandedPartners.delete(pid);
    } else {
      this.expandedPartners.add(pid);
    }
  }

  generateFactureForPartner(group: PartnerGroup): void {
    const ids = group.paiements.map(p => p.id!);
    this.generatingFacture = group.partnerId;
    this.factureMsg = '';
    this.factureError = '';
    this.svc.generateFacture(ids, this.companyId).subscribe({
      next: res => {
        this.generatingFacture = null;
        this.factureMsg = `Facture ${res.invoiceName} générée.`;
        this.loadGroups();
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
        this.showError('Aucune ligne valide (colonne "Client" requise)');
        this.importLoading = false;
        return;
      }
      this.showImportModal = true;
    } catch (e: any) { this.showError('Erreur : ' + e.message); }
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
    if (v === 'guinness') return 'guinness';
    return '';
  }

  async getOrCreateCategoryId(name: string): Promise<number | undefined> {
    if (!name) return undefined;
    const existing = this.getCategoryId(name);
    if (existing) return existing;
    try {
      const created = await this.stockSvc.createCategory({ name, companyId: this.companyId }).toPromise();
      if (created?.id) {
        this.categories.push(created);
        return created.id;
      }
    } catch {}
    return undefined;
  }

  async confirmImport(): Promise<void> {
    if (this.clients.length === 0) {
      alert('Impossible d\'importer : liste des clients vide.\nVérifiez que le serveur est démarré et rechargez la page.');
      return;
    }
    let done = 0, noClient = 0, noCat = 0, apiErr = 0;
    for (const row of this.importRows) {
      const clientName = String(row['Client'] || '');
      const catName    = String(row["Catégorie d'article"] || '');
      const partnerId  = this.getClientId(clientName);
      const categoryId = await this.getOrCreateCategoryId(catName);
      if (!partnerId) { noClient++; continue; }
      if (!categoryId) { noCat++; continue; }
      const dto: Ristourne = {
        partnerId,
        categoryId,
        montantFixe: parseFloat(row['Montant de la ristourne']) || 0,
        typeRistourne: this.normalizeType(String(row['Type de ristourne'] || '')),
        companyId: this.companyId
      };
      try {
        await this.svc.save(dto).toPromise();
        done++;
      } catch { apiErr++; }
    }
    this.closeImportModal();
    this.loadRistournes();
    const msg = [`Import terminé : ${done} créé(s)`];
    if (noClient > 0) msg.push(`${noClient} client(s) introuvable(s)`);
    if (noCat > 0)    msg.push(`${noCat} catégorie(s) introuvable(s)`);
    if (apiErr > 0)   msg.push(`${apiErr} erreur(s) serveur`);
    alert(msg.join('\n'));
  }

  private showError(msg: string): void {
    this.rstError = msg;
  }

  private emptyRst(): Ristourne {
    return { partnerId: 0, categoryId: 0, montantFixe: 0, typeRistourne: '', companyId: this.companyId };
  }

  private emptyPmt(): RistournePaiement {
    return { partnerId: 0, companyId: this.companyId, lines: [] };
  }
}
