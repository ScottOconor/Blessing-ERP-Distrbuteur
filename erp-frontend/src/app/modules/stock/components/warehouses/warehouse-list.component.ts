import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, Warehouse, StockLocation } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { AccountJournal } from '../../../../core/models/account.model';
import { downloadExcelTemplate, parseExcelFile } from '../../../../core/utils/excel-import.util';

const WH_HEADERS = ['Nom*', 'Code*'];
const WH_SAMPLE  = ['Entrepôt Central', 'EC'];

@Component({
  selector: 'app-warehouse-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './warehouse-list.component.html',
  styleUrl: './warehouse-list.component.scss'
})
export class WarehouseListComponent implements OnInit {
  @ViewChild('importInput') importInput!: ElementRef<HTMLInputElement>;

  warehouses: Warehouse[] = [];
  locations: StockLocation[] = [];
  journals: AccountJournal[] = [];
  saleJournals: AccountJournal[] = [];
  cashBankJournals: AccountJournal[] = [];
  loading = false;
  saving = false;
  errorMsg = '';
  successMsg = '';

  showModal = false;
  editingWarehouse: Warehouse | null = null;
  form: Partial<Warehouse> = { active: true };
  selectedWarehouseId: number | null = null;

  // === Import Excel ===
  showImportModal = false;
  importRows: Record<string, any>[] = [];
  importLoading = false;

  private companyId!: number;
  canCreate = false;
  canEdit   = false;
  canDelete = false;

  constructor(
    private stockService: StockService,
    private accountingService: AccountingService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId();
    this.canCreate = this.authService.hasPermission('STOCK', 'INVENTAIRE', 'CREATE');
    this.canEdit   = this.authService.hasPermission('STOCK', 'INVENTAIRE', 'EDIT');
    this.canDelete = this.authService.hasPermission('STOCK', 'INVENTAIRE', 'DELETE');
    this.load();
    this.accountingService.getJournals(this.companyId).subscribe(j => {
      this.journals = j.filter(jj => jj.type === 'general' || (jj.code || '').toUpperCase() === 'STK');
      this.saleJournals = j.filter(jj => jj.type === 'sale');
      this.cashBankJournals = j.filter(jj => jj.type === 'cash' || jj.type === 'bank');
    });
  }

  load(): void {
    this.loading = true;
    this.stockService.getWarehouses(this.companyId).subscribe({
      next: (wh) => { this.warehouses = wh; this.loading = false; },
      error: () => { this.loading = false; }
    });
    this.stockService.getLocations(this.companyId).subscribe(l => {
      this.locations = l.filter(loc => loc.usage === 'internal');
    });
  }

  selectWarehouse(id: number): void {
    this.selectedWarehouseId = this.selectedWarehouseId === id ? null : id;
  }

  getLocationsFor(warehouseId: number): StockLocation[] {
    return this.locations.filter(l => l.warehouseId === warehouseId);
  }

  openCreate(): void {
    this.editingWarehouse = null;
    this.form = { active: true };
    this.showModal = true;
    this.errorMsg = '';
  }

  openEdit(w: Warehouse): void {
    this.editingWarehouse = w;
    this.form = { ...w };
    this.showModal = true;
    this.errorMsg = '';
  }

  closeModal(): void { this.showModal = false; }

  save(): void {
    if (!this.form.name || !this.form.code) { this.errorMsg = 'Nom et code obligatoires'; return; }
    this.saving = true;
    this.errorMsg = '';
    const dto = { ...this.form, companyId: this.companyId, active: true } as Warehouse;
    const obs = this.editingWarehouse
      ? this.stockService.updateWarehouse(this.editingWarehouse.id!, dto)
      : this.stockService.createWarehouse(dto);
    obs.subscribe({
      next: () => { this.saving = false; this.showModal = false; this.load(); },
      error: (e) => { this.saving = false; this.errorMsg = e.error?.message || 'Erreur lors de la création'; }
    });
  }

  deleteWarehouse(w: Warehouse): void {
    if (!confirm(`Supprimer l'entrepôt "${w.name}" ?`)) return;
    this.stockService.deleteWarehouse(w.id!).subscribe({
      next: () => { this.showSuccessMsg('Entrepôt supprimé'); this.load(); },
      error: (e) => this.showSuccessMsg('Erreur : ' + (e.error?.message || 'Impossible de supprimer'))
    });
  }

  setDefault(w: Warehouse): void {
    this.stockService.setDefaultWarehouse(w.id!).subscribe({
      next: () => {
        this.warehouses.forEach(wh => wh.isDefault = false);
        w.isDefault = true;
        this.showSuccessMsg(`"${w.name}" défini comme magasin par défaut`);
      },
      error: (e) => this.showSuccessMsg('Erreur : ' + (e.error?.message || 'Impossible'))
    });
  }

  usageLabel(usage: string): string {
    const m: Record<string, string> = { internal: 'Interne', transit: 'Transit', supplier: 'Fournisseur', customer: 'Client', view: 'Vue' };
    return m[usage] || usage;
  }

  showSuccessMsg(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 5000);
  }

  // === Import Excel ===

  downloadTemplate(): void {
    downloadExcelTemplate(WH_HEADERS, WH_SAMPLE, 'modele_entrepots.xlsx');
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
      this.importRows = rows.filter(r => (r['Nom*'] || r['Nom']) && (r['Code*'] || r['Code']));
      if (this.importRows.length === 0) {
        this.showSuccessMsg('Aucune ligne valide (colonnes "Nom*" et "Code*" requises)');
        this.importLoading = false;
        return;
      }
      this.showImportModal = true;
    } catch (e: any) { this.showSuccessMsg('Erreur : ' + e.message); }
    this.importLoading = false;
  }

  closeImportModal(): void { this.showImportModal = false; this.importRows = []; }

  async confirmImport(): Promise<void> {
    this.importLoading = true;
    let done = 0, errors = 0;
    for (const row of this.importRows) {
      const dto = {
        name: String(row['Nom*'] || row['Nom'] || '').trim(),
        code: String(row['Code*'] || row['Code'] || '').trim().toUpperCase(),
        companyId: this.companyId,
        active: true
      } as Warehouse;
      try {
        await this.stockService.createWarehouse(dto).toPromise();
        done++;
      } catch { errors++; }
    }
    this.importLoading = false;
    this.closeImportModal();
    this.load();
    this.showSuccessMsg(`Import terminé : ${done} créé(s), ${errors} erreur(s)`);
  }
}
