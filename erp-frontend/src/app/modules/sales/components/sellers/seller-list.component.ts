import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalesService, Seller } from '../../services/sales.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { downloadExcelTemplate, parseExcelFile } from '../../../../core/utils/excel-import.util';

const SELLER_HEADERS = ['Nom*', 'Référence', 'Téléphone', 'Email'];
const SELLER_SAMPLE  = ['Jean Dupont', 'VDR001', '+237 691000000', 'jean.dupont@exemple.cm'];

@Component({
  selector: 'app-seller-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seller-list.component.html',
  styleUrl: './seller-list.component.scss'
})
export class SellerListComponent implements OnInit {
  @ViewChild('importInput') importInput!: ElementRef<HTMLInputElement>;

  sellers: Seller[] = [];
  loading = false;
  showModal = false;
  editingSeller: Seller | null = null;
  saving = false;
  successMsg = '';
  errorMsg = '';
  searchQuery = '';

  form: Seller = this.emptyForm();

  canCreate = false;
  canEdit   = false;
  canDelete = false;
  canImport = false;

  // === Import Excel ===
  showImportModal = false;
  importRows: Record<string, any>[] = [];
  importLoading = false;
  importProgress: { done: number; total: number; errors: number; messages: string[] } | null = null;

  constructor(
    private salesService: SalesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.canCreate = this.authService.hasPermission('VENTES', 'VENDEURS', 'CREATE');
    this.canEdit   = this.authService.hasPermission('VENTES', 'VENDEURS', 'EDIT');
    this.canDelete = this.authService.hasPermission('VENTES', 'VENDEURS', 'DELETE');
    this.canImport = this.authService.hasPermission('VENTES', 'VENDEURS', 'IMPORT');
    this.loadSellers();
  }

  private emptyForm(): Seller {
    return { name: '', companyId: 0 };
  }

  loadSellers(): void {
    this.loading = true;
    this.salesService.getSellers(this.authService.getCompanyId()).subscribe({
      next: (data) => { this.sellers = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  get filteredSellers(): Seller[] {
    if (!this.searchQuery.trim()) return this.sellers;
    const q = this.searchQuery.toLowerCase();
    return this.sellers.filter(s =>
      s.name.toLowerCase().includes(q) ||
      (s.ref && s.ref.toLowerCase().includes(q)) ||
      (s.email && s.email.toLowerCase().includes(q))
    );
  }

  openCreate(): void {
    this.editingSeller = null;
    this.form = { ...this.emptyForm(), companyId: this.authService.getCompanyId() };
    this.showModal = true;
    this.errorMsg = '';
  }

  openEdit(seller: Seller): void {
    this.editingSeller = seller;
    this.form = { ...seller };
    this.showModal = true;
    this.errorMsg = '';
  }

  closeModal(): void {
    this.showModal = false;
    this.editingSeller = null;
  }

  save(): void {
    if (!this.form.name?.trim()) {
      this.errorMsg = 'Le nom du vendeur est obligatoire';
      return;
    }
    this.saving = true;
    this.errorMsg = '';
    const companyId = this.authService.getCompanyId();
    const obs = this.editingSeller
      ? this.salesService.updateSeller(this.editingSeller.id!, this.form)
      : this.salesService.createSeller({ ...this.form, companyId });

    obs.subscribe({
      next: () => this.finishSave(this.editingSeller ? 'Vendeur modifié' : 'Vendeur créé avec succès'),
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la sauvegarde';
      }
    });
  }

  private finishSave(msg: string): void {
    this.saving = false;
    this.closeModal();
    this.loadSellers();
    this.showSuccess(msg);
  }

  deleteSeller(seller: Seller): void {
    if (!confirm(`Supprimer le vendeur "${seller.name}" ?`)) return;
    this.salesService.deleteSeller(seller.id!).subscribe({
      next: () => { this.showSuccess('Vendeur supprimé'); this.loadSellers(); },
      error: (e) => { this.showSuccess('Erreur : ' + (e.error?.message || 'Impossible de supprimer')); }
    });
  }

  // === Import Excel ===

  downloadTemplate(): void {
    downloadExcelTemplate(SELLER_HEADERS, SELLER_SAMPLE, 'modele_vendeurs.xlsx');
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

    for (const row of this.importRows) {
      const seller: Seller = {
        name: String(row['Nom*'] || row['Nom'] || '').trim(),
        ref: String(row['Référence'] || '').trim() || undefined,
        phone: String(row['Téléphone'] || '').trim() || undefined,
        email: String(row['Email'] || '').trim() || undefined,
        companyId
      };
      try {
        await this.salesService.createSeller(seller).toPromise();
        this.importProgress.done++;
      } catch (e: any) {
        this.importProgress.errors++;
        this.importProgress.messages.push(`"${seller.name}" : ${e.error?.message || 'Erreur'}`);
      }
    }

    this.importLoading = false;
    this.showImportModal = false;
    this.loadSellers();
    const p = this.importProgress;
    this.showSuccess(`Import terminé : ${p.done} créé(s), ${p.errors} erreur(s)`);
    this.importRows = [];
    this.importProgress = null;
  }

  showSuccess(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 5000);
  }
}
