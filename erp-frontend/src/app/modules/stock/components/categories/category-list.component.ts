import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, ProductCategory } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { downloadExcelTemplate, parseExcelFile } from '../../../../core/utils/excel-import.util';

const CAT_HEADERS = ['Nom*', 'Code'];
const CAT_SAMPLE  = ['Matériaux de construction', 'MAT'];

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent implements OnInit {
  @ViewChild('importInput') importInput!: ElementRef<HTMLInputElement>;

  categories: ProductCategory[] = [];
  loading = false;
  saving = false;
  showModal = false;
  errorMsg = '';
  successMsg = '';
  editingId: number | null = null;

  form: ProductCategory = this.empty();

  // === Import Excel ===
  showImportModal = false;
  importRows: Record<string, any>[] = [];
  importLoading = false;

  canCreate = false;
  canEdit   = false;
  canDelete = false;
  canImport = false;


  constructor(private stockService: StockService, private authService: AuthService) {}

  ngOnInit(): void {
    this.canCreate = this.authService.hasPermission('STOCK', 'PRODUITS', 'CREATE');
    this.canEdit   = this.authService.hasPermission('STOCK', 'PRODUITS', 'EDIT');
    this.canDelete = this.authService.hasPermission('STOCK', 'PRODUITS', 'DELETE');
    this.canImport = this.authService.hasPermission('STOCK', 'PRODUITS', 'IMPORT');
    this.load();
  }

  load(): void {
    this.loading = true;
    this.stockService.getCategories(this.authService.getCompanyId()).subscribe({
      next: (d) => { this.categories = d; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  openNew(): void {
    this.editingId = null;
    this.form = this.empty();
    this.errorMsg = '';
    this.showModal = true;
  }

  openEdit(c: ProductCategory): void {
    this.editingId = c.id!;
    this.form = { ...c };
    this.errorMsg = '';
    this.showModal = true;
  }

  save(): void {
    if (!this.form.name) { this.errorMsg = 'Le nom est obligatoire'; return; }
    this.saving = true;
    this.errorMsg = '';
    const dto: ProductCategory = { ...this.form, companyId: this.authService.getCompanyId() };
    const obs = this.editingId
      ? this.stockService.updateCategory(this.editingId, dto)
      : this.stockService.createCategory(dto);
    obs.subscribe({
      next: () => { this.saving = false; this.showModal = false; this.showSuccess(this.editingId ? 'Catégorie mise à jour' : 'Catégorie créée'); this.load(); },
      error: (e) => { this.saving = false; this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  deleteCategory(c: ProductCategory): void {
    if (!confirm(`Supprimer la catégorie "${c.name}" ?`)) return;
    this.stockService.deleteCategory(c.id!).subscribe({
      next: () => { this.showSuccess('Catégorie supprimée'); this.load(); },
      error: (e) => this.showSuccess('Erreur : ' + (e.error?.message || 'Impossible de supprimer'))
    });
  }

  private empty(): ProductCategory {
    return { name: '', code: '', companyId: 0 };
  }

  showSuccess(msg: string): void { this.successMsg = msg; setTimeout(() => this.successMsg = '', 3000); }

  // === Import Excel ===

  downloadTemplate(): void {
    downloadExcelTemplate(CAT_HEADERS, CAT_SAMPLE, 'modele_categories.xlsx');
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
        this.showSuccess('Aucune ligne valide (colonne "Nom*" requise)');
        this.importLoading = false;
        return;
      }
      this.showImportModal = true;
    } catch (e: any) { this.showSuccess('Erreur : ' + e.message); }
    this.importLoading = false;
  }

  closeImportModal(): void { this.showImportModal = false; this.importRows = []; }

  async confirmImport(): Promise<void> {
    this.importLoading = true;
    const cid = this.authService.getCompanyId();
    let done = 0, errors = 0;
    for (const row of this.importRows) {
      const dto: ProductCategory = {
        name: String(row['Nom*'] || row['Nom'] || '').trim(),
        code: String(row['Code'] || '').trim() || undefined,
        companyId: cid
      };
      try {
        await this.stockService.createCategory(dto).toPromise();
        done++;
      } catch { errors++; }
    }
    this.importLoading = false;
    this.closeImportModal();
    this.load();
    this.showSuccess(`Import terminé : ${done} créé(e)(s), ${errors} erreur(s)`);
  }
}
