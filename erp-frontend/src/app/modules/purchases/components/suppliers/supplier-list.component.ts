import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { RemiseService, Remise } from '../../services/remise.service';
import { StockService, ProductCategory } from '../../../stock/services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { downloadExcelTemplate, parseExcelFile } from '../../../../core/utils/excel-import.util';
import { forkJoin } from 'rxjs';

const SUP_HEADERS = ['Nom*', 'Référence', 'Téléphone', 'Email', 'Adresse'];
const SUP_SAMPLE  = ['Fournisseur Bâtiment SARL', 'F001', '+237 222000000', 'contact@fourn.cm', 'Yaoundé, Cameroun'];

export interface RemiseForm {
  id?: number;
  categoryId: number;
  typeRemise: string;
  montantHT: number;
  montantTTC: number;
}

@Component({
  selector: 'app-supplier-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.scss'
})
export class SupplierListComponent implements OnInit {
  @ViewChild('importInput') importInput!: ElementRef<HTMLInputElement>;

  suppliers: any[] = [];
  filtered: any[] = [];
  categories: ProductCategory[] = [];
  search = '';
  loading = false;
  showModal = false;
  editingId: number | null = null;
  saving = false;
  errorMsg = '';
  successMsg = '';
  canCreate = false;
  canEdit   = false;
  canDelete = false;
  canImport = false;

  form: any = this.emptyForm();

  // Remises inline
  remises: RemiseForm[] = [];
  loadingRms = false;

  readonly TAUX_OPTS = [1, 2, 2.5, 5, 10];
  readonly TYPE_OPTS = [
    { value: 'brasserie', label: 'Brasseries' },
    { value: 'guinness',  label: 'Guinness' }
  ];

  // === Import Excel ===
  showImportModal = false;
  importRows: Record<string, any>[] = [];
  importLoading = false;

  constructor(
    private accountingService: AccountingService,
    private remiseSvc: RemiseService,
    private stockSvc: StockService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.canCreate = this.authService.hasPermission('ACHATS', 'FOURNISSEURS', 'CREATE');
    this.canEdit   = this.authService.hasPermission('ACHATS', 'FOURNISSEURS', 'EDIT');
    this.canDelete = this.authService.hasPermission('ACHATS', 'FOURNISSEURS', 'DELETE');
    this.canImport = this.authService.hasPermission('ACHATS', 'FOURNISSEURS', 'IMPORT');
    this.loadSuppliers();
    this.stockSvc.getCategories(this.authService.getCompanyId() ?? 1).subscribe(c => this.categories = c);
  }

  get companyId(): number { return this.authService.getCompanyId() ?? 1; }

  loadSuppliers(): void {
    this.loading = true;
    this.accountingService.getPartners(this.companyId).subscribe({
      next: data => {
        this.suppliers = data.filter((p: any) => p.type === 'supplier' || p.type === 'both');
        this.applyFilter();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = q
      ? this.suppliers.filter(s => s.name?.toLowerCase().includes(q) || s.phone?.toLowerCase().includes(q))
      : [...this.suppliers];
  }

  openNew(): void {
    this.editingId = null;
    this.form = this.emptyForm();
    this.remises = [];
    this.showModal = true;
    this.errorMsg = '';
  }

  openEdit(s: any): void {
    this.editingId = s.id;
    this.form = {
      name: s.name, email: s.email ?? '', phone: s.phone ?? '',
      address: s.address ?? '', type: s.type ?? 'supplier',
      tauxPrecompte: s.tauxPrecompte ?? undefined,
      companyId: s.companyId
    };
    this.remises = [];
    this.showModal = true;
    this.errorMsg = '';
    if (s.id) {
      this.loadingRms = true;
      this.remiseSvc.getByPartner(s.id, this.companyId).subscribe({
        next: (rms) => {
          this.remises = rms.map(r => ({
            id: r.id,
            categoryId: r.categoryId,
            typeRemise: r.typeRemise ?? 'brasserie',
            montantHT: r.montantFixe,
            montantTTC: this.calcTTC(r.montantFixe, r.typeRemise ?? 'brasserie', s.tauxPrecompte ?? 0)
          }));
          this.loadingRms = false;
        },
        error: () => { this.loadingRms = false; }
      });
    }
  }

  calcTTC(ht: number, type: string, taux: number): number {
    if (type === 'guinness') return ht;
    return ht + ht * (taux / 100);
  }

  onTauxChange(): void {
    const taux = this.form.tauxPrecompte ?? 0;
    this.remises.forEach(r => {
      r.montantTTC = this.calcTTC(r.montantHT, r.typeRemise, taux);
    });
  }

  onRemiseHtChange(r: RemiseForm): void {
    r.montantTTC = this.calcTTC(r.montantHT, r.typeRemise, this.form.tauxPrecompte ?? 0);
  }

  onRemiseTypeChange(r: RemiseForm): void {
    r.montantTTC = this.calcTTC(r.montantHT, r.typeRemise, this.form.tauxPrecompte ?? 0);
  }

  addRemise(): void {
    this.remises.push({ categoryId: 0, typeRemise: 'brasserie', montantHT: 0, montantTTC: 0 });
  }

  removeRemise(i: number): void {
    this.remises.splice(i, 1);
  }

  saveSupplier(): void {
    if (!this.form.name) { this.errorMsg = 'Le nom est obligatoire'; return; }
    this.saving = true;
    this.errorMsg = '';
    this.form.companyId = this.companyId;
    this.form.type = 'supplier';

    const action = this.editingId
      ? this.accountingService.updatePartner(this.editingId, this.form)
      : this.accountingService.createPartner(this.form);

    action.subscribe({
      next: (saved: any) => {
        const supplierId = saved.id!;
        const validRms = this.remises.filter(r => r.categoryId > 0);
        const saves = validRms.map(r =>
          this.remiseSvc.save({
            id: r.id,
            partnerId: supplierId,
            categoryId: r.categoryId,
            typeRemise: r.typeRemise,
            montantFixe: r.montantHT,
            companyId: this.companyId
          })
        );
        if (saves.length > 0) {
          forkJoin(saves).subscribe({
            next: () => this.finishSave(this.editingId ? 'Fournisseur mis à jour' : 'Fournisseur créé'),
            error: () => this.finishSave(this.editingId ? 'Fournisseur mis à jour (erreur remises)' : 'Fournisseur créé (erreur remises)')
          });
        } else {
          this.finishSave(this.editingId ? 'Fournisseur mis à jour' : 'Fournisseur créé');
        }
      },
      error: err => {
        this.saving = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la sauvegarde';
      }
    });
  }

  private finishSave(msg: string): void {
    this.saving = false;
    this.showModal = false;
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 4000);
    this.loadSuppliers();
  }

  deleteSupplier(s: any): void {
    if (!confirm(`Supprimer le fournisseur "${s.name}" ?`)) return;
    this.accountingService.deletePartner(s.id).subscribe({
      next: () => { this.successMsg = 'Fournisseur supprimé'; setTimeout(() => this.successMsg = '', 4000); this.loadSuppliers(); },
      error: (e) => { this.errorMsg = e.error?.message || 'Impossible de supprimer'; setTimeout(() => this.errorMsg = '', 5000); }
    });
  }

  private emptyForm(): any {
    return { name: '', email: '', phone: '', address: '', type: 'supplier', tauxPrecompte: undefined };
  }

  // === Import Excel ===

  downloadTemplate(): void {
    downloadExcelTemplate(SUP_HEADERS, SUP_SAMPLE, 'modele_fournisseurs.xlsx');
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
      this.importRows = rows.filter(r => r['Nom*'] || r['Nom']);
      if (this.importRows.length === 0) {
        this.successMsg = 'Aucune ligne valide (colonne "Nom*" requise)';
        setTimeout(() => this.successMsg = '', 5000);
        this.importLoading = false;
        return;
      }
      this.showImportModal = true;
    } catch (e: any) {
      this.successMsg = 'Erreur : ' + e.message;
      setTimeout(() => this.successMsg = '', 5000);
    }
    this.importLoading = false;
  }

  closeImportModal(): void { this.showImportModal = false; this.importRows = []; }

  async confirmImport(): Promise<void> {
    this.importLoading = true;
    let done = 0, errors = 0;
    for (const row of this.importRows) {
      const dto = {
        name: String(row['Nom*'] || row['Nom'] || '').trim(),
        ref: String(row['Référence'] || '').trim() || undefined,
        phone: String(row['Téléphone'] || '').trim() || undefined,
        email: String(row['Email'] || '').trim() || undefined,
        address: String(row['Adresse'] || '').trim() || undefined,
        type: 'supplier',
        companyId: this.companyId
      };
      try {
        await this.accountingService.createPartner(dto).toPromise();
        done++;
      } catch { errors++; }
    }
    this.importLoading = false;
    this.closeImportModal();
    this.loadSuppliers();
    this.successMsg = `Import terminé : ${done} créé(s), ${errors} erreur(s)`;
    setTimeout(() => this.successMsg = '', 5000);
  }
}
