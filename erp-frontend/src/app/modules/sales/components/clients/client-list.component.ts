import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalesService, SalesClient } from '../../services/sales.service';
import { RistourneService, Ristourne } from '../../services/ristourne.service';
import { StockService, ProductCategory } from '../../../stock/services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { downloadExcelTemplate, parseExcelFile, exportRowsToExcel, rowId, sameText, RowSelection, ID_HEADER } from '../../../../core/utils/excel-import.util';
import { forkJoin, of } from 'rxjs';

const CLIENT_HEADERS = ['Nom*', 'Référence', 'Téléphone', 'Email', 'Adresse', 'Taux Précompte (%)', 'Limite Crédit (FCFA)', 'Code Compte Client'];
const CLIENT_SAMPLE  = ['Exemple SARL', 'CLI001', '+237 691000000', 'contact@exemple.cm', 'Douala, Cameroun', '2', '500000', '4111'];

export interface RistourneForm {
  id?: number;
  categoryId: number;
  typeRistourne: string;
  montantHT: number;
  /** Frais d'enlèvement HT par unité — sans lui, enregistrer la fiche remettait à 0 celui déjà saisi */
  montantEnlevementHT: number;
  montantTTC: number;
}

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent implements OnInit {
  @ViewChild('importInput') importInput!: ElementRef<HTMLInputElement>;

  clients: SalesClient[] = [];
  categories: ProductCategory[] = [];
  loading = false;
  showModal = false;
  editingClient: SalesClient | null = null;
  saving = false;
  successMsg = '';
  errorMsg = '';
  searchQuery = '';

  form: SalesClient = this.emptyForm();

  // Ristournes inline
  ristournes: RistourneForm[] = [];
  loadingRst = false;

  canCreate = false;
  canEdit   = false;
  canDelete = false;
  canImport = false;

  readonly TAUX_OPTS = [1, 2, 2.5, 5, 10];
  readonly TYPE_OPTS = [
    { value: 'brasserie', label: 'Brasseries' },
    { value: 'guinness',  label: 'Guinness' },
    { value: '',          label: 'Autre (TTC = HT)' }
  ];

  // === Import Excel ===
  showImportModal = false;
  importRows: Record<string, any>[] = [];
  importLoading = false;
  importProgress: { done: number; total: number; errors: number; messages: string[] } | null = null;
  /** Lignes cochées pour l'export Excel. */
  sel = new RowSelection<SalesClient>();

  constructor(
    private salesService: SalesService,
    private ristourneSvc: RistourneService,
    private stockSvc: StockService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.canCreate = this.authService.hasPermission('VENTES', 'CLIENTS', 'CREATE');
    this.canEdit   = this.authService.hasPermission('VENTES', 'CLIENTS', 'EDIT');
    this.canDelete = this.authService.hasPermission('VENTES', 'CLIENTS', 'DELETE');
    this.canImport = this.authService.hasPermission('VENTES', 'CLIENTS', 'IMPORT');
    this.loadClients();
    this.stockSvc.getCategories(this.authService.getCompanyId()).subscribe(c => this.categories = c);
  }

  private emptyForm(): SalesClient {
    return { name: '', type: 'customer', companyId: 0 };
  }

  loadClients(): void {
    this.loading = true;
    this.salesService.getClients(this.authService.getCompanyId()).subscribe({
      next: (data) => { this.clients = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  get filteredClients(): SalesClient[] {
    if (!this.searchQuery.trim()) return this.clients;
    const q = this.searchQuery.toLowerCase();
    return this.clients.filter(c =>
      c.name.toLowerCase().includes(q) ||
      (c.ref && c.ref.toLowerCase().includes(q)) ||
      (c.email && c.email.toLowerCase().includes(q))
    );
  }

  openCreate(): void {
    this.editingClient = null;
    this.form = { ...this.emptyForm(), companyId: this.authService.getCompanyId() };
    this.ristournes = [];
    this.showModal = true;
    this.errorMsg = '';
  }

  openEdit(client: SalesClient): void {
    this.editingClient = client;
    this.form = { ...client };
    this.ristournes = [];
    this.showModal = true;
    this.errorMsg = '';
    if (client.id) {
      this.loadingRst = true;
      this.ristourneSvc.getByPartner(client.id, this.authService.getCompanyId()).subscribe({
        next: (rst) => {
          this.ristournes = rst.map(r => ({
            id: r.id,
            categoryId: r.categoryId,
            // Type « Autre » (null côté serveur) conservé tel quel : le forcer en brasserie
            // changeait le type de la ristourne à l'enregistrement de la fiche
            typeRistourne: r.typeRistourne ?? '',
            montantHT: r.montantFixe,
            montantEnlevementHT: r.montantEnlevementHT ?? 0,
            montantTTC: r.montantTTCUnitaire ?? this.calcTTC(r.montantFixe + (r.montantEnlevementHT ?? 0), r.typeRistourne ?? '', client.tauxPrecompte ?? 0)
          }));
          this.loadingRst = false;
        },
        error: () => { this.loadingRst = false; }
      });
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.editingClient = null;
  }

  /** Même règle que le serveur (RistourneService.computeUnitTTC), appliquée au total HT
   *  (ristourne HT + enlèvement HT) : brasserie = total × (1 + précompte % + TVA 19,25 %),
   *  guinness = total × 1,1925, autre = total (montant saisi déjà TTC). */
  calcTTC(totalHT: number, type: string, taux: number): number {
    const ht = totalHT || 0;
    let ttc: number;
    if (type === 'brasserie') ttc = ht * (1 + (taux || 0) / 100 + 0.1925);
    else if (type === 'guinness') ttc = ht * 1.1925;
    else ttc = ht;
    return Math.round(ttc * 100) / 100;
  }

  /** Total HT de la ristourne : montant HT + frais d'enlèvement HT. */
  totalHT(r: RistourneForm): number {
    return (r.montantHT || 0) + (r.montantEnlevementHT || 0);
  }

  private recalcTTC(r: RistourneForm): void {
    r.montantTTC = this.calcTTC(this.totalHT(r), r.typeRistourne, this.form.tauxPrecompte ?? 0);
  }

  onTauxChange(): void {
    const taux = this.form.tauxPrecompte ?? 0;
    this.ristournes.forEach(r => {
      r.montantTTC = this.calcTTC(this.totalHT(r), r.typeRistourne, taux);
    });
  }

  onRistourneHtChange(r: RistourneForm): void {
    this.recalcTTC(r);
  }

  onRistourneTypeChange(r: RistourneForm): void {
    this.recalcTTC(r);
  }

  addRistourne(): void {
    this.ristournes.push({ categoryId: 0, typeRistourne: 'brasserie', montantHT: 0, montantEnlevementHT: 0, montantTTC: 0 });
  }

  removeRistourne(i: number): void {
    this.ristournes.splice(i, 1);
  }

  save(): void {
    if (!this.form.name?.trim()) {
      this.errorMsg = 'Le nom du client est obligatoire';
      return;
    }
    this.saving = true;
    this.errorMsg = '';
    const companyId = this.authService.getCompanyId();
    const obs = this.editingClient
      ? this.salesService.updateClient(this.editingClient.id!, this.form)
      : this.salesService.createClient({ ...this.form, companyId });

    obs.subscribe({
      next: (saved) => {
        const clientId = saved.id!;
        // Save ristournes
        const validRst = this.ristournes.filter(r => r.categoryId > 0);
        const saves = validRst.map(r =>
          this.ristourneSvc.save({
            id: r.id,
            partnerId: clientId,
            categoryId: r.categoryId,
            typeRistourne: r.typeRistourne,
            montantFixe: r.montantHT,
            montantEnlevementHT: r.montantEnlevementHT ?? 0,
            companyId
          })
        );
        if (saves.length > 0) {
          forkJoin(saves).subscribe({
            next: () => this.finishSave(this.editingClient ? 'Client modifié' : 'Client créé avec succès'),
            error: () => this.finishSave(this.editingClient ? 'Client modifié (erreur ristournes)' : 'Client créé (erreur ristournes)')
          });
        } else {
          this.finishSave(this.editingClient ? 'Client modifié' : 'Client créé avec succès');
        }
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la sauvegarde';
      }
    });
  }

  private finishSave(msg: string): void {
    this.saving = false;
    this.closeModal();
    this.loadClients();
    this.showSuccess(msg);
  }

  deleteClient(client: SalesClient): void {
    if (!confirm(`Supprimer le client "${client.name}" ?`)) return;
    this.salesService.deleteClient(client.id!).subscribe({
      next: () => { this.showSuccess('Client supprimé'); this.loadClients(); },
      error: (e) => { this.showSuccess('Erreur : ' + (e.error?.message || 'Impossible de supprimer')); }
    });
  }

  // === Import Excel ===

  downloadTemplate(): void {
    downloadExcelTemplate(CLIENT_HEADERS, CLIENT_SAMPLE, 'modele_clients.xlsx');
  }

  /** Exporte les clients cochés (ou la liste affichée) au format du modèle d'import. */
  exportExcel(): void {
    const rows = this.sel.rowsToExport(this.clients, this.filteredClients).map(c => [
      c.id, c.name, c.ref, c.phone, c.email, c.address, c.tauxPrecompte, c.creditLimit, c.receivableAccountCode
    ]);
    exportRowsToExcel([ID_HEADER, ...CLIENT_HEADERS], rows, 'export_clients');
  }

  /** Client existant correspondant à une ligne importée : ID, puis référence, puis nom. */
  private findExistingClient(row: Record<string, any>, name: string, ref?: string): SalesClient | undefined {
    const id = rowId(row);
    return (id ? this.clients.find(c => c.id === id) : undefined)
      ?? (ref ? this.clients.find(c => sameText(c.ref, ref)) : undefined)
      ?? this.clients.find(c => sameText(c.name, name));
  }

  triggerImport(): void {
    this.importInput.nativeElement.value = '';
    this.importInput.nativeElement.click();
  }

  async onImportFileChange(event: Event): Promise<void> {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.importLoading = true;
    this.importRows = [];
    this.importProgress = null;
    try {
      const rows = await parseExcelFile(file);
      this.importRows = rows.filter(r => r['Nom*'] || r['Nom']);
      if (this.importRows.length === 0) {
        this.showSuccess('Aucune ligne valide trouvée dans le fichier (colonne "Nom*" requise)');
        this.importLoading = false;
        return;
      }
      this.showImportModal = true;
    } catch (e: any) {
      this.showSuccess('Erreur : ' + e.message);
    }
    this.importLoading = false;
  }

  closeImportModal(): void {
    this.showImportModal = false;
    this.importRows = [];
    this.importProgress = null;
  }

  async confirmImport(): Promise<void> {
    const companyId = this.authService.getCompanyId();
    this.importLoading = true;
    this.importProgress = { done: 0, total: this.importRows.length, errors: 0, messages: [] };
    let updated = 0;

    for (const row of this.importRows) {
      const client: SalesClient = {
        name: String(row['Nom*'] || row['Nom'] || '').trim(),
        ref: String(row['Référence'] || '').trim() || undefined,
        phone: String(row['Téléphone'] || '').trim() || undefined,
        email: String(row['Email'] || '').trim() || undefined,
        address: String(row['Adresse'] || '').trim() || undefined,
        tauxPrecompte: parseFloat(row['Taux Précompte (%)']) || undefined,
        creditLimit: parseFloat(row['Limite Crédit (FCFA)']) || undefined,
        receivableAccountCode: String(row['Code Compte Client'] || '').trim() || undefined,
        type: 'customer',
        companyId
      };
      const existing = this.findExistingClient(row, client.name, client.ref);
      try {
        if (existing?.id) {
          // Mise à jour : on part du client existant (type, ristourne, Guinness... conservés).
          await this.salesService.updateClient(existing.id, { ...existing, ...client, type: existing.type }).toPromise();
          updated++;
        } else {
          await this.salesService.createClient(client).toPromise();
          this.importProgress.done++;
        }
      } catch (e: any) {
        this.importProgress.errors++;
        this.importProgress.messages.push(`"${client.name}" : ${e.error?.message || 'Erreur'}`);
      }
    }

    this.importLoading = false;
    this.showImportModal = false;
    this.sel.clear();
    this.loadClients();
    const p = this.importProgress;
    this.showSuccess(`Import terminé : ${p.done} créé(s), ${updated} mis à jour, ${p.errors} erreur(s)`);
    this.importRows = [];
    this.importProgress = null;
  }

  showSuccess(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 5000);
  }
}
