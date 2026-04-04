import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { downloadExcelTemplate, parseExcelFile } from '../../../../core/utils/excel-import.util';

const SUP_HEADERS = ['Nom*', 'Référence', 'Téléphone', 'Email', 'Adresse'];
const SUP_SAMPLE  = ['Fournisseur Bâtiment SARL', 'F001', '+237 222000000', 'contact@fourn.cm', 'Yaoundé, Cameroun'];

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
  search = '';
  loading = false;
  showModal = false;
  editingId: number | null = null;
  saving = false;
  errorMsg = '';
  successMsg = '';

  form: any = this.emptyForm();

  // === Import Excel ===
  showImportModal = false;
  importRows: Record<string, any>[] = [];
  importLoading = false;

  constructor(
    private accountingService: AccountingService,
    private authService: AuthService
  ) {}

  ngOnInit(): void { this.loadSuppliers(); }

  loadSuppliers(): void {
    this.loading = true;
    const cid = this.authService.getCompanyId() ?? 1;
    this.accountingService.getPartners(cid).subscribe({
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
    this.showModal = true;
  }

  openEdit(s: any): void {
    this.editingId = s.id;
    this.form = { name: s.name, email: s.email ?? '', phone: s.phone ?? '', address: s.address ?? '', type: s.type ?? 'supplier', companyId: s.companyId };
    this.showModal = true;
  }

  saveSupplier(): void {
    if (!this.form.name) { this.errorMsg = 'Le nom est obligatoire'; return; }
    this.saving = true;
    const cid = this.authService.getCompanyId() ?? 1;
    this.form.companyId = cid;
    this.form.type = 'supplier';

    const action = this.editingId
      ? this.accountingService.updatePartner(this.editingId, this.form)
      : this.accountingService.createPartner(this.form);

    action.subscribe({
      next: () => {
        this.saving = false;
        this.showModal = false;
        this.successMsg = this.editingId ? 'Fournisseur mis à jour' : 'Fournisseur créé';
        setTimeout(() => this.successMsg = '', 4000);
        this.loadSuppliers();
      },
      error: err => {
        this.saving = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la sauvegarde';
      }
    });
  }

  private emptyForm(): any {
    return { name: '', email: '', phone: '', address: '', type: 'supplier' };
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
    const cid = this.authService.getCompanyId() ?? 1;
    let done = 0, errors = 0;
    for (const row of this.importRows) {
      const dto = {
        name: String(row['Nom*'] || row['Nom'] || '').trim(),
        ref: String(row['Référence'] || '').trim() || undefined,
        phone: String(row['Téléphone'] || '').trim() || undefined,
        email: String(row['Email'] || '').trim() || undefined,
        address: String(row['Adresse'] || '').trim() || undefined,
        type: 'supplier',
        companyId: cid
      };
      try {
        await this.accountingService.createPartner(dto).toPromise();
        done++;
      } catch { errors++; }
    }
    this.closeImportModal();
    this.loadSuppliers();
    this.successMsg = `Import terminé : ${done} créé(s), ${errors} erreur(s)`;
    setTimeout(() => this.successMsg = '', 5000);
  }
}
