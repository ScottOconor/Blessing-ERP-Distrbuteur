import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrecompteService, Precompte, Enlevement, EnlevementClient } from '../../../../shared/services/precompte.service';

import { SalesService, SalesClient } from '../../services/sales.service';
import { StockService, ProductCategory } from '../../../stock/services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { downloadExcelTemplate, parseExcelFile } from '../../../../core/utils/excel-import.util';
import { NotificationService } from '../../../../core/services/notification.service';



const ENL_HEADERS = ["Catégorie d'article", "Montant de l'enlèvement", "Cout enlevement", "Date de l'enlèvement", 'Actif', 'Clients spécifiques'];
const ENL_SAMPLE  = ['Alcools mixtes 12', '600', '528.45', '', 'OUI', 'NON'];

@Component({
  selector: 'app-precompte-config',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './precompte-config.component.html',
  styleUrl: './precompte-config.component.scss'
})
export class PrecompteConfigComponent implements OnInit {
  @ViewChild('importEnlInput') importEnlInput!: ElementRef<HTMLInputElement>;

  // ===== Import Excel Précomptes =====
  showImportPcModal = false;
  importPcRows: Record<string, any>[] = [];
  importPcLoading = false;

  @ViewChild('importPcInput') importPcInput!: ElementRef<HTMLInputElement>;

  readonly PC_HEADERS = ['partnerId', 'typePrecompte', 'tauxPrecompte'];
  // NOTE: aperçu seulement côté client; l'import réel est fait par le backend.

  private pcFile: File | null = null;


  // ===== Import Excel Enlèvements =====
  showImportEnlModal = false;
  importEnlRows: Record<string, any>[] = [];
  importEnlLoading = false;


  activeTab: 'precomptes' | 'enlevements' = 'precomptes';

  // ===== Précomptes =====
  precomptes: Precompte[] = [];
  clients: SalesClient[] = [];
  loadingPc = false;
  showPcModal = false;
  editingPc: Precompte | null = null;
  savingPc = false;
  pcForm: Precompte = this.emptyPc();
  pcError = '';

  readonly TAUX_OPTS = [1, 2, 2.5, 5, 10];
  readonly TYPE_OPTS = [
    { value: 'sale', label: 'Ventes' },
    { value: 'purchase', label: 'Achats' }
  ];

  // ===== Enlèvements =====
  enlevements: Enlevement[] = [];
  categories: ProductCategory[] = [];
  loadingEnl = false;
  showEnlModal = false;
  editingEnl: Enlevement | null = null;
  savingEnl = false;
  enlForm: Enlevement = this.emptyEnl();
  enlError = '';

  constructor(
    private svc: PrecompteService,
    private salesSvc: SalesService,
    private stockSvc: StockService,
    private auth: AuthService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadAll();
  }

  get companyId(): number {
    return this.auth.getCompanyId();
  }

  private loadAll(): void {
    this.salesSvc.getClients(this.companyId).subscribe(c => this.clients = c);
    this.stockSvc.getCategories(this.companyId).subscribe(cats => this.categories = cats);
    this.loadPrecomptes();
    this.loadEnlevements();
  }

  // ===== Précomptes =====

  loadPrecomptes(): void {
    this.loadingPc = true;
    this.svc.getAllPrecomptes(this.companyId).subscribe({
      next: p => { this.precomptes = p; this.loadingPc = false; },
      error: () => this.loadingPc = false
    });
  }

  openNewPc(): void {
    this.editingPc = null;
    this.pcForm = this.emptyPc();
    this.pcError = '';
    this.showPcModal = true;
  }

  editPc(p: Precompte): void {
    this.editingPc = p;
    this.pcForm = { ...p };
    this.pcError = '';
    this.showPcModal = true;
  }

  savePc(): void {
    if (!this.pcForm.partnerId || !this.pcForm.tauxPrecompte) {
      this.pcError = 'Partenaire et taux sont requis.';
      return;
    }
    this.savingPc = true;
    this.pcError = '';
    this.svc.savePrecompte({ ...this.pcForm, companyId: this.companyId }).subscribe({
      next: () => { this.showPcModal = false; this.loadPrecomptes(); this.savingPc = false; },
      error: () => { this.pcError = 'Erreur lors de la sauvegarde.'; this.savingPc = false; }
    });
  }

  deletePc(id: number): void {
    if (!confirm('Supprimer ce précompte ?')) return;
    this.svc.deletePrecompte(id).subscribe({
      next: () => this.loadPrecomptes(),
      error: err => this.notificationService.notify(err?.error?.message ?? 'Erreur lors de la suppression.', 'error')
    });
  }

  // ===== Enlèvements =====

  loadEnlevements(): void {
    this.loadingEnl = true;
    this.svc.getAllEnlevements(this.companyId).subscribe({
      next: e => { this.enlevements = e; this.loadingEnl = false; },
      error: () => this.loadingEnl = false
    });
  }

  openNewEnl(): void {
    this.editingEnl = null;
    this.enlForm = this.emptyEnl();
    this.enlError = '';
    this.showEnlModal = true;
  }

  editEnl(e: Enlevement): void {
    this.editingEnl = e;
    this.enlForm = { ...e, clients: (e.clients ?? []).map(c => ({ ...c })) };
    this.enlError = '';
    this.showEnlModal = true;
  }

  addEnlClient(): void {
    if (!this.enlForm.clients) this.enlForm.clients = [];
    this.enlForm.clients.push({ partnerId: 0, montant: 0 });
  }

  removeEnlClient(i: number): void {
    this.enlForm.clients?.splice(i, 1);
  }

  saveEnl(): void {
    if (!this.enlForm.categoryId || !this.enlForm.montantFixe) {
      this.enlError = 'Catégorie et montant sont requis.';
      return;
    }
    this.savingEnl = true;
    this.enlError = '';
    this.svc.saveEnlevement({ ...this.enlForm, companyId: this.companyId }).subscribe({
      next: () => { this.showEnlModal = false; this.loadEnlevements(); this.savingEnl = false; },
      error: () => { this.enlError = 'Erreur lors de la sauvegarde.'; this.savingEnl = false; }
    });
  }

  deleteEnl(id: number): void {
    if (!confirm('Supprimer ce frais d\'enlèvement ?')) return;
    this.svc.deleteEnlevement(id).subscribe({
      next: () => this.loadEnlevements(),
      error: err => this.notificationService.notify(err?.error?.message ?? 'Erreur lors de la suppression.', 'error')
    });
  }

  typeLabel(t: string): string {
    return t === 'sale' ? 'Ventes' : 'Achats';
  }

  // ===== Import Excel Enlèvements =====


  downloadPcTemplate(): void {
    this.svc.downloadPrecompteTemplate().subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'modele_precomptes.xlsx';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  triggerPcImport(): void {
    this.importPcInput.nativeElement.value = '';
    this.importPcInput.nativeElement.click();
  }

  async onImportPcFileChange(event: Event): Promise<void> {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.pcFile = file;
    this.importPcLoading = true;

    try {
      const rows = await parseExcelFile(file);
      // Accepter nom ou ID numérique dans toutes les variantes de colonne Odoo/interne
      this.importPcRows = rows.filter(r =>
        r['partner_id'] || r['Partner_ID'] ||
        r['partnerId']  || r['PartnerId']  ||
        r['Partenaire'] || r['partenaire'] ||
        r['ID partenaire'] || r['id partenaire'] ||
        r['partner_name'] || r['Nom du partenaire']
      );
      if (this.importPcRows.length === 0) {
        alert('Aucune ligne valide. Colonne attendue : "partner_id" ou "Partenaire"');
        this.importPcLoading = false;
        return;
      }
      this.showImportPcModal = true;
    } catch (e: any) {
      alert('Erreur : ' + e.message);
    }
    this.importPcLoading = false;
  }

  closeImportPcModal(): void {
    this.showImportPcModal = false;
    this.importPcRows = [];
  }

  async confirmImportPc(): Promise<void> {
    if (!this.pcFile) {
      alert('Fichier introuvable.');
      return;
    }

    this.importPcLoading = true;
    this.svc.importPrecomptes(this.pcFile, this.companyId).subscribe({

      next: (res) => {
        this.importPcLoading = false;
        this.closeImportPcModal();
        this.loadPrecomptes();
        const msg = res?.message || 'Import terminé';
        const errors = res?.errors?.length ? `\n\n${res.errors.join('\n')}` : '';
        const warnings = res?.warnings?.length ? `\n\nAvertissements :\n${res.warnings.join('\n')}` : '';
        alert(msg + errors + warnings);
      },
      error: () => {
        this.importPcLoading = false;
        alert('Erreur import précomptes');
      }
    });
  }

  // ===== Import Excel Enlèvements =====

  downloadEnlTemplate(): void {
    downloadExcelTemplate(ENL_HEADERS, ENL_SAMPLE, 'modele_enlevements.xlsx');
  }


  triggerEnlImport(): void {
    this.importEnlInput.nativeElement.value = '';
    this.importEnlInput.nativeElement.click();
  }

  async onImportEnlFileChange(event: Event): Promise<void> {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.importEnlLoading = true;
    try {
      const rows = await parseExcelFile(file);
      this.importEnlRows = rows.filter(r => r["Catégorie d'article"] || r['Catégorie']);
      if (this.importEnlRows.length === 0) {
        alert('Aucune ligne valide (colonne "Catégorie d\'article" requise)');
        this.importEnlLoading = false;
        return;
      }
      this.showImportEnlModal = true;
    } catch (e: any) { alert('Erreur : ' + e.message); }
    this.importEnlLoading = false;
  }

  closeImportEnlModal(): void { this.showImportEnlModal = false; this.importEnlRows = []; }

  private norm(s: string): string {
    return (s || '').trim().toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ');
  }

  getCategoryIdByName(name: string): number | undefined {
    if (!name) return undefined;
    const n = this.norm(name);
    return this.categories.find(c => this.norm(c.name ?? '') === n)?.id;
  }

  async getOrCreateCategoryId(name: string): Promise<number | undefined> {
    if (!name) return undefined;
    const existing = this.getCategoryIdByName(name);
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

  async confirmImportEnl(): Promise<void> {
    this.importEnlLoading = true;
    let done = 0, noCat = 0, apiErr = 0;
    for (const row of this.importEnlRows) {
      const catName = String(row["Catégorie d'article"] || row['Catégorie'] || '').trim();
      const categoryId = await this.getOrCreateCategoryId(catName);
      if (!categoryId) { noCat++; continue; }
      const montantRaw = row["Montant de l'enl\u00e8vement"] ?? row["Montant de l'enlevement"] ?? row["Montant de l'enlèvement"] ?? 0;
      const coutRaw    = row["Cout enlevement"] ?? row["Co\u00fbt enl\u00e8vement"] ?? row["Coût enlèvement"] ?? 0;
      const dto: Enlevement = {
        categoryId,
        montantFixe: parseFloat(String(montantRaw)) || 0,
        coutEnlevement: parseFloat(String(coutRaw)) || 0,
        companyId: this.companyId,
        clients: []
      };
      try {
        await this.svc.saveEnlevement(dto).toPromise();
        done++;
      } catch { apiErr++; }
    }
    this.importEnlLoading = false;
    this.closeImportEnlModal();
    this.loadEnlevements();
    const msg = [`Import terminé : ${done} créé(s)`];
    if (noCat > 0)  msg.push(`${noCat} catégorie(s) introuvable(s)`);
    if (apiErr > 0) msg.push(`${apiErr} erreur(s) serveur`);
    alert(msg.join('\n'));
  }

  getPartnerFromRow(row: Record<string, any>): string {
    return String(
      row['partner_id'] ?? row['Partner_ID'] ??
      row['partnerId']  ?? row['PartnerId']  ??
      row['Partenaire'] ?? row['partenaire'] ??
      row['ID partenaire'] ?? row['partner_name'] ??
      row['Nom du partenaire'] ?? ''
    ).trim();
  }

  getTypeFromRow(row: Record<string, any>): string {
    return String(
      row['type_precompte'] ?? row['typePrecompte'] ??
      row['type'] ?? row['Type'] ?? row['Type de précompte'] ?? ''
    ).trim();
  }

  getTauxFromRow(row: Record<string, any>): string {
    return String(
      row['taux_precompte'] ?? row['tauxPrecompte'] ??
      row['Taux (%)'] ?? row['Taux'] ?? row['taux'] ?? ''
    ).trim();
  }

  private emptyPc(): Precompte {
    return { partnerId: 0, typePrecompte: 'sale', tauxPrecompte: 2, companyId: this.companyId };
  }

  ttc(montantHT: number | null | undefined): number { return (montantHT ?? 0) * 1.1925; }

  private emptyEnl(): Enlevement {
    return { categoryId: 0, montantFixe: 0, coutEnlevement: 0, companyId: this.companyId, clients: [] };
  }
}
