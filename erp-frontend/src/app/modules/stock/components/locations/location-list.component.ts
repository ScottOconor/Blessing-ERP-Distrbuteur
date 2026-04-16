import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, StockLocation, Warehouse } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { forkJoin } from 'rxjs';
import { downloadExcelTemplate, parseExcelFile } from '../../../../core/utils/excel-import.util';

const LOC_HEADERS = ['Nom*', 'Type (internal/view/supplier/customer/inventory/transit)', 'Emplacement Parent (nom)'];
const LOC_SAMPLE  = ['Stockage Zone A', 'internal', 'WH/Stock'];

@Component({
  selector: 'app-location-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.scss'
})
export class LocationListComponent implements OnInit {
  @ViewChild('importInput') importInput!: ElementRef<HTMLInputElement>;

  locations: StockLocation[] = [];
  warehouses: Warehouse[] = [];
  filtered: StockLocation[] = [];
  loading = false;
  saving = false;
  showModal = false;
  errorMsg = '';
  successMsg = '';
  editingId: number | null = null;
  filterUsage = '';

  form: StockLocation = this.empty();

  usageOptions = [
    { value: 'internal', label: 'Interne' },
    { value: 'view', label: 'Vue (conteneur)' },
    { value: 'supplier', label: 'Fournisseur (virtuel)' },
    { value: 'customer', label: 'Client (virtuel)' },
    { value: 'inventory', label: 'Perte inventaire' },
    { value: 'transit', label: 'Transit' },
  ];

  // === Import Excel ===
  showImportModal = false;
  importRows: Record<string, any>[] = [];
  importLoading = false;

  constructor(private stockService: StockService, private authService: AuthService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    const cid = this.authService.getCompanyId();
    forkJoin({
      locations: this.stockService.getLocations(cid),
      warehouses: this.stockService.getWarehouses(cid)
    }).subscribe({
      next: ({ locations, warehouses }) => {
        this.locations = locations;
        this.warehouses = warehouses;
        this.applyFilter();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  applyFilter(): void {
    this.filtered = this.filterUsage
      ? this.locations.filter(l => l.usage === this.filterUsage)
      : [...this.locations];
  }

  getUsageLabel(usage: string): string {
    return this.usageOptions.find(o => o.value === usage)?.label || usage;
  }

  openNew(): void {
    this.editingId = null;
    this.form = this.empty();
    this.errorMsg = '';
    this.showModal = true;
  }

  openEdit(l: StockLocation): void {
    this.editingId = l.id!;
    this.form = { ...l };
    this.errorMsg = '';
    this.showModal = true;
  }

  save(): void {
    if (!this.form.name) { this.errorMsg = 'Le nom est obligatoire'; return; }
    this.saving = true;
    this.errorMsg = '';
    const dto: StockLocation = { ...this.form, companyId: this.authService.getCompanyId() };
    const obs = this.editingId
      ? this.stockService.updateLocation(this.editingId, dto)
      : this.stockService.createLocation(dto);
    obs.subscribe({
      next: () => { this.saving = false; this.showModal = false; this.showSuccess(this.editingId ? 'Emplacement mis à jour' : 'Emplacement créé'); this.load(); },
      error: (e) => { this.saving = false; this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  deleteLocation(l: StockLocation): void {
    if (!confirm(`Supprimer l'emplacement "${l.name}" ?`)) return;
    this.stockService.deleteLocation(l.id!).subscribe({
      next: () => { this.showSuccess('Emplacement supprimé'); this.load(); },
      error: (e) => this.showSuccess('Erreur : ' + (e.error?.message || 'Impossible de supprimer'))
    });
  }

  private empty(): StockLocation {
    return { name: '', usage: 'internal', active: true };
  }

  showSuccess(msg: string): void { this.successMsg = msg; setTimeout(() => this.successMsg = '', 3000); }

  // === Import Excel ===

  downloadTemplate(): void {
    downloadExcelTemplate(LOC_HEADERS, LOC_SAMPLE, 'modele_emplacements.xlsx');
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

  getParentId(parentName: string): number | undefined {
    if (!parentName) return undefined;
    return this.locations.find(l =>
      (l.completeName || l.name)?.toLowerCase() === parentName.toLowerCase()
    )?.id;
  }

  async confirmImport(): Promise<void> {
    const cid = this.authService.getCompanyId();
    let done = 0, errors = 0;
    const validUsages = ['internal', 'view', 'supplier', 'customer', 'inventory', 'transit'];
    for (const row of this.importRows) {
      const usageVal = String(row['Type (internal/view/supplier/customer/inventory/transit)'] || 'internal').trim();
      const dto: StockLocation = {
        name: String(row['Nom*'] || row['Nom'] || '').trim(),
        usage: validUsages.includes(usageVal) ? usageVal as any : 'internal',
        parentId: this.getParentId(String(row['Emplacement Parent (nom)'] || '')),
        active: true,
        companyId: cid
      };
      try {
        await this.stockService.createLocation(dto).toPromise();
        done++;
      } catch { errors++; }
    }
    this.closeImportModal();
    this.load();
    this.showSuccess(`Import terminé : ${done} créé(s), ${errors} erreur(s)`);
  }
}
