import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RemiseService, Remise, RemisePaiement, RemisePaiementLine, PartnerGroup } from '../../services/remise.service';
import { StockService, ProductCategory } from '../../../stock/services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { downloadExcelTemplate, parseExcelFile } from '../../../../core/utils/excel-import.util';
import { environment } from '../../../../../environments/environment';

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

  remises: Remise[] = [];
  suppliers: { id: number; name: string }[] = [];
  categories: ProductCategory[] = [];
  loadingRms = false;
  showRmsModal = false;
  editingRms: Remise | null = null;
  savingRms = false;
  rmsForm: Remise = this.emptyRms();
  rmsError = '';

  paiements: RemisePaiement[] = [];
  loadingPmt = false;
  showPmtModal = false;
  savingPmt = false;
  pmtForm: RemisePaiement = this.emptyPmt();
  pmtError = '';

  activeTab: 'config' | 'paiements' | 'reglements' = 'config';

  // ===== Règlements groupés =====
  groups: PartnerGroup[] = [];
  loadingGroups = false;
  expandedPartners = new Set<number>();
  generatingFacture: number | null = null;
  factureMsg = '';
  factureError = '';

  // Import
  showImportModal = false;
  importRows: Record<string, any>[] = [];
  importLoading = false;
  @ViewChild('importInput') importInput!: ElementRef<HTMLInputElement>;

  private apiBase = `${environment.apiUrl}/api`;

  constructor(
    private svc: RemiseService,
    private stockSvc: StockService,
    private auth: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAll();
  }

  get companyId(): number {
    return this.auth.getCompanyId();
  }

  private loadAll(): void {
    this.loadRemises();
    this.loadPaiements();
    this.http.get<any[]>(`${this.apiBase}/accounting/partners`, {
      params: new HttpParams().set('companyId', this.companyId).set('type', 'supplier')
    }).subscribe(p => this.suppliers = p);
    this.stockSvc.getCategories(this.companyId).subscribe(cats => this.categories = cats);
  }

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
    this.svc.delete(id).subscribe(() => this.loadRemises());
  }

  loadPaiements(): void {
    this.loadingPmt = true;
    this.svc.getAllPaiements(this.companyId).subscribe({
      next: p => { this.paiements = p; this.loadingPmt = false; },
      error: () => this.loadingPmt = false
    });
  }

  openNewPmt(): void {
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
      this.pmtError = 'Veuillez sélectionner un fournisseur.';
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
    if (!confirm('Confirmer ce règlement ?')) return;
    this.svc.confirmPaiement(id).subscribe(() => this.loadPaiements());
  }

  cancelPmt(id: number): void {
    if (!confirm('Annuler ce règlement ?')) return;
    this.svc.cancelPaiement(id).subscribe(() => this.loadPaiements());
  }

  getPmtLineTotal(line: RemisePaiementLine): number {
    return (line.quantite ?? 0) * (line.montantUnitaire ?? 0);
  }

  getTotalPmt(): number {
    return this.pmtForm.lines.reduce((s, l) => s + this.getPmtLineTotal(l), 0);
  }

  stateBadge(state?: string): string {
    switch (state) {
      case 'confirmed': return 'badge-confirmed';
      case 'done': return 'badge-done';
      case 'cancelled': return 'badge-cancelled';
      default: return 'badge-draft';
    }
  }

  stateLabel(state?: string): string {
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
    this.router.navigate(['/purchases/invoices', id]);
  }

  // ===== IMPORT =====

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

  private emptyPmt(): RemisePaiement {
    return { partnerId: 0, companyId: this.companyId, lines: [] };
  }
}
