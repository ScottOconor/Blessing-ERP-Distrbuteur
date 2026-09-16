import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RemiseService, Remise, RemisePaiement, PartnerGroup, QuarterGroup } from '../../services/remise.service';
import { StockService, ProductCategory } from '../../../stock/services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { downloadExcelTemplate, parseExcelFile } from '../../../../core/utils/excel-import.util';
import { environment } from '../../../../../environments/environment';
import { NotificationService } from '../../../../core/services/notification.service';

const RMS_HEADERS = ['Fournisseur', "Catégorie d'article", 'Type (brasserie/guinness)', 'Montant de la remise', 'Actif'];
const RMS_SAMPLE  = ['Brasseries du Cameroun', 'Bières', 'brasserie', '500', 'Oui'];

@Component({
  selector: 'app-remise-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './remise-list.component.html',
  styleUrl: './remise-list.component.scss'
})
export class RemiseListComponent implements OnInit {
  @ViewChild('importInput') importInput!: ElementRef<HTMLInputElement>;

  // ===== Import Excel =====
  showImportModal = false;
  importRows: Record<string, any>[] = [];
  importLoading = false;

  // ===== Config tab =====
  remises: Remise[] = [];
  suppliers: { id: number; name: string }[] = [];
  categories: ProductCategory[] = [];
  loadingRms = false;
  showRmsModal = false;
  editingRms: Remise | null = null;
  savingRms = false;
  rmsForm: Remise = this.emptyRms();
  rmsError = '';

  // ===== Tabs =====
  activeTab: 'config' | 'brasseries' | 'guinness' = 'config';

  // ===== Brasseries tab =====
  brasseriesPaiements: RemisePaiement[] = [];
  loadingBrasseries = false;
  generatingQuarter: string | null = null;
  quarterMsg = '';
  quarterError = '';
  expandedBrasserieKeys = new Set<string>();
  expandedQuarters = new Set<string>();

  // ===== Guinness tab =====
  guinessPaiements: RemisePaiement[] = [];
  loadingGuiness = false;
  showGuinessModal = false;
  guinessDateStart = '';
  guinessDateEnd   = '';
  generatingGuiness = false;
  guinessMsg = '';
  guinessError = '';
  expandedGuinessKeys = new Set<number>();


  readonly QUARTERS = [
    { q: 1, label: 'T1 (Jan–Mar)' },
    { q: 2, label: 'T2 (Avr–Jun)' },
    { q: 3, label: 'T3 (Jul–Sep)' },
    { q: 4, label: 'T4 (Oct–Déc)' },
  ];

  private apiBase = `${environment.apiUrl}/api`;

  constructor(
    private svc: RemiseService,
    private stockSvc: StockService,
    private auth: AuthService,
    private http: HttpClient,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.http.get<any[]>(`${this.apiBase}/accounting/partners`, {
      params: new HttpParams().set('companyId', this.companyId).set('type', 'supplier')
    }).subscribe(p => this.suppliers = p);
    this.stockSvc.getCategories(this.companyId).subscribe(cats => this.categories = cats);
    this.loadRemises();
  }

  get companyId(): number {
    return this.auth.getCompanyId();
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }

  // ===== Config =====

  loadRemises(): void {
    this.loadingRms = true;
    this.svc.getAll(this.companyId).subscribe({
      next: r => { this.remises = r; this.loadingRms = false; },
      error: () => this.loadingRms = false
    });
  }

  openNewRms(): void {
    this.editingRms = null;
    this.rmsForm = this.emptyRms();
    this.rmsError = '';
    this.showRmsModal = true;
  }

  editRms(r: Remise): void {
    this.editingRms = r;
    this.rmsForm = { ...r };
    this.rmsError = '';
    this.showRmsModal = true;
  }

  saveRms(): void {
    if (!this.rmsForm.partnerId || !this.rmsForm.categoryId || !this.rmsForm.montantFixe) {
      this.rmsError = 'Fournisseur, catégorie et montant sont requis.';
      return;
    }
    this.savingRms = true;
    this.rmsError = '';
    this.svc.save({ ...this.rmsForm, companyId: this.companyId }).subscribe({
      next: () => { this.showRmsModal = false; this.loadRemises(); this.savingRms = false; },
      error: () => { this.rmsError = 'Erreur lors de la sauvegarde.'; this.savingRms = false; }
    });
  }

  deleteRms(id: number): void {
    if (!confirm('Supprimer cette remise ?')) return;
    this.svc.delete(id).subscribe({
      next: () => this.loadRemises(),
      error: err => this.notificationService.notify(err?.error?.message ?? 'Erreur lors de la suppression.', 'error')
    });
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
    this.quarterError = '';
    this.svc.confirmPaiement(id).subscribe({
      next: () => this.loadBrasseries(),
      error: err => this.quarterError = err?.error?.message ?? 'Erreur lors de la confirmation.'
    });
  }

  cancelBrasseriePmt(id: number): void {
    if (!confirm('Annuler ce règlement ?')) return;
    this.quarterError = '';
    this.svc.cancelPaiement(id).subscribe({
      next: () => this.loadBrasseries(),
      error: err => this.quarterError = err?.error?.message ?? 'Erreur lors de l\'annulation.'
    });
  }

  confirmAllBrasserie(paiements: RemisePaiement[]): void {
    const drafts = paiements.filter(p => p.state === 'draft');
    if (drafts.length === 0) return;
    if (!confirm(`Confirmer les ${drafts.length} règlement(s) en brouillon ?`)) return;
    this.quarterError = '';
    let done = 0, failed = 0, lastError = '';
    for (const p of drafts) {
      this.svc.confirmPaiement(p.id!).subscribe({
        next: () => {
          done++;
          if (done + failed === drafts.length) this.finishConfirmAllBrasserie(done, failed, lastError);
        },
        error: (err) => {
          failed++;
          lastError = err?.error?.message || err?.message || 'Erreur inconnue';
          if (done + failed === drafts.length) this.finishConfirmAllBrasserie(done, failed, lastError);
        }
      });
    }
  }

  private finishConfirmAllBrasserie(done: number, failed: number, lastError: string): void {
    this.quarterError = failed > 0 ? `${done} confirmé(s), ${failed} échec(s) — ${lastError}` : '';
    this.loadBrasseries();
  }

  // ===== Guinness tab =====

  loadGuiness(): void {
    this.loadingGuiness = true;
    this.svc.getAllPaiements(this.companyId, 'guinness').subscribe({
      next: p => { this.guinessPaiements = p; this.loadingGuiness = false; },
      error: () => this.loadingGuiness = false
    });
  }

  get guinessByFournisseur(): PartnerGroup[] {
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
    this.guinessError = '';
    this.svc.confirmPaiement(id).subscribe({
      next: () => this.loadGuiness(),
      error: err => this.guinessError = err?.error?.message ?? 'Erreur lors de la confirmation.'
    });
  }

  cancelGuinessPmt(id: number): void {
    if (!confirm('Annuler ce règlement ?')) return;
    this.guinessError = '';
    this.svc.cancelPaiement(id).subscribe({
      next: () => this.loadGuiness(),
      error: err => this.guinessError = err?.error?.message ?? 'Erreur lors de l\'annulation.'
    });
  }

  confirmAllGuiness(paiements: RemisePaiement[]): void {
    const drafts = paiements.filter(p => p.state === 'draft');
    if (drafts.length === 0) return;
    if (!confirm(`Confirmer les ${drafts.length} règlement(s) en brouillon ?`)) return;
    this.guinessError = '';
    let done = 0, failed = 0, lastError = '';
    for (const p of drafts) {
      this.svc.confirmPaiement(p.id!).subscribe({
        next: () => {
          done++;
          if (done + failed === drafts.length) this.finishConfirmAllGuiness(done, failed, lastError);
        },
        error: (err) => {
          failed++;
          lastError = err?.error?.message || err?.message || 'Erreur inconnue';
          if (done + failed === drafts.length) this.finishConfirmAllGuiness(done, failed, lastError);
        }
      });
    }
  }

  private finishConfirmAllGuiness(done: number, failed: number, lastError: string): void {
    this.guinessError = failed > 0 ? `${done} confirmé(s), ${failed} échec(s) — ${lastError}` : '';
    this.loadGuiness();
  }

  // ===== Helpers =====

  private groupByQuarter(paiements: RemisePaiement[]): QuarterGroup[] {
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

  private groupByPartner(paiements: RemisePaiement[]): PartnerGroup[] {
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

  hasDrafts(paiements: RemisePaiement[]): boolean {
    return paiements.some(p => p.state === 'draft');
  }

  stateBadge(state?: string): string {
    switch (state) {
      case 'confirmed': return 'badge-confirmed';
      case 'done':      return 'badge-done';
      case 'cancelled': return 'badge-cancelled';
      default:          return 'badge-draft';
    }
  }

  stateLabel(state?: string): string {
    switch (state) {
      case 'confirmed': return 'Confirmé';
      case 'done':      return 'Réglé';
      case 'cancelled': return 'Annulé';
      default:          return 'Brouillon';
    }
  }

  onTabChange(tab: 'config' | 'brasseries' | 'guinness'): void {
    this.activeTab = tab;
    if (tab === 'brasseries' && this.brasseriesPaiements.length === 0) this.loadBrasseries();
    if (tab === 'guinness'   && this.guinessPaiements.length === 0)    this.loadGuiness();
  }

  // ===== Import Excel =====

  downloadTemplate(): void {
    downloadExcelTemplate(RMS_HEADERS, RMS_SAMPLE, 'modele_remises.xlsx');
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
      this.importRows = await parseExcelFile(file);
      this.showImportModal = true;
    } catch {
      alert('Impossible de lire le fichier Excel.');
    } finally {
      this.importLoading = false;
    }
  }

  closeImportModal(): void {
    this.showImportModal = false;
    this.importRows = [];
  }

  confirmImport(): void {
    const rows = this.importRows.map(row => ({
      supplierName: String(row['Fournisseur'] || '').trim(),
      categoryName: String(row["Catégorie d'article"] || '').trim(),
      typeRemise: String(row['Type (brasserie/guinness)'] || 'brasserie').trim().toLowerCase(),
      montantFixe: parseFloat(String(row['Montant de la remise'] || '0')) || 0,
      active: String(row['Actif'] || 'Oui').toLowerCase() !== 'non'
    })).filter(r => r.supplierName && r.categoryName);

    if (rows.length === 0) { alert('Aucune ligne valide à importer.'); return; }

    this.importLoading = true;
    this.http.post<{ imported: number }>(
      `${this.apiBase}/remises/import?companyId=${this.companyId}`,
      rows
    ).subscribe({
      next: (res) => {
        this.importLoading = false;
        this.closeImportModal();
        this.loadRemises();
        alert(`${res.imported} remise(s) importée(s) avec succès.`);
      },
      error: () => { this.importLoading = false; alert('Erreur lors de l\'import.'); }
    });
  }

  private emptyRms(): Remise {
    return { partnerId: 0, categoryId: 0, montantFixe: 0, typeRemise: 'brasserie', companyId: this.companyId };
  }
}
