import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, UnitOfMeasure } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { downloadExcelTemplate, parseExcelFile } from '../../../../core/utils/excel-import.util';

const UOM_HEADERS = ['Nom*', 'Code'];
const UOM_SAMPLE  = ['Kilogramme', 'kg'];

@Component({
  selector: 'app-unit-of-measure-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './unit-of-measure-list.component.html',
  styleUrl: './unit-of-measure-list.component.scss'
})
export class UnitOfMeasureListComponent implements OnInit {
  @ViewChild('importInput') importInput!: ElementRef<HTMLInputElement>;

  uoms: UnitOfMeasure[] = [];
  loading = false;
  saving = false;
  showModal = false;
  errorMsg = '';
  successMsg = '';
  editingId: number | null = null;

  form: UnitOfMeasure = this.empty();

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
    this.stockService.getUnitsOfMeasure(this.authService.getCompanyId()).subscribe({
      next: (d) => { this.uoms = d; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  openNew(): void {
    this.editingId = null;
    this.form = this.empty();
    this.errorMsg = '';
    this.showModal = true;
  }

  openEdit(u: UnitOfMeasure): void {
    this.editingId = u.id!;
    this.form = { ...u };
    this.errorMsg = '';
    this.showModal = true;
  }

  save(): void {
    if (!this.form.name) { this.errorMsg = 'Le nom est obligatoire'; return; }
    this.saving = true;
    this.errorMsg = '';
    const dto: UnitOfMeasure = { ...this.form, companyId: this.authService.getCompanyId() };
    const obs = this.editingId
      ? this.stockService.updateUnitOfMeasure(this.editingId, dto)
      : this.stockService.createUnitOfMeasure(dto);
    obs.subscribe({
      next: () => { this.saving = false; this.showModal = false; this.showSuccess(this.editingId ? 'Unité mise à jour' : 'Unité créée'); this.load(); },
      error: (e) => { this.saving = false; this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  deleteUom(u: UnitOfMeasure): void {
    if (!confirm(`Supprimer l'unité "${u.name}" ?`)) return;
    this.stockService.deleteUnitOfMeasure(u.id!).subscribe({
      next: () => { this.showSuccess('Unité supprimée'); this.load(); },
      error: (e) => this.showSuccess('Erreur : ' + (e.error?.message || 'Impossible de supprimer'))
    });
  }

  private empty(): UnitOfMeasure {
    return { name: '', code: '', companyId: 0 };
  }

  showSuccess(msg: string): void { this.successMsg = msg; setTimeout(() => this.successMsg = '', 3000); }

  // === Import Excel ===

  downloadTemplate(): void {
    downloadExcelTemplate(UOM_HEADERS, UOM_SAMPLE, 'modele_unites_de_mesure.xlsx');
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
      const dto: UnitOfMeasure = {
        name: String(row['Nom*'] || row['Nom'] || '').trim(),
        code: String(row['Code'] || '').trim() || undefined,
        companyId: cid
      };
      try {
        await this.stockService.createUnitOfMeasure(dto).toPromise();
        done++;
      } catch { errors++; }
    }
    this.importLoading = false;
    this.closeImportModal();
    this.load();
    this.showSuccess(`Import terminé : ${done} créée(s), ${errors} erreur(s)`);
  }
}
