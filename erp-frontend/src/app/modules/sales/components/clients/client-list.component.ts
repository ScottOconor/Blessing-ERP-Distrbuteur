import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalesService, SalesClient } from '../../services/sales.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { downloadExcelTemplate, parseExcelFile } from '../../../../core/utils/excel-import.util';

const CLIENT_HEADERS = ['Nom*', 'Référence', 'Téléphone', 'Email', 'Adresse', 'Taux Ristourne (%)', 'Taux Précompte (%)', 'Limite Crédit (FCFA)', 'Code Compte Client'];
const CLIENT_SAMPLE  = ['Exemple SARL', 'CLI001', '+237 691000000', 'contact@exemple.cm', 'Douala, Cameroun', '5', '2', '500000', '4111'];

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
  loading = false;
  showModal = false;
  editingClient: SalesClient | null = null;
  saving = false;
  successMsg = '';
  errorMsg = '';
  searchQuery = '';

  form: SalesClient = this.emptyForm();

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
    this.loadClients();
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
    this.showModal = true;
    this.errorMsg = '';
  }

  openEdit(client: SalesClient): void {
    this.editingClient = client;
    this.form = { ...client };
    this.showModal = true;
    this.errorMsg = '';
  }

  closeModal(): void {
    this.showModal = false;
    this.editingClient = null;
  }

  save(): void {
    if (!this.form.name?.trim()) {
      this.errorMsg = 'Le nom du client est obligatoire';
      return;
    }
    this.saving = true;
    this.errorMsg = '';
    const obs = this.editingClient
      ? this.salesService.updateClient(this.editingClient.id!, this.form)
      : this.salesService.createClient({ ...this.form, companyId: this.authService.getCompanyId() });
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.closeModal();
        this.loadClients();
        this.showSuccess(this.editingClient ? 'Client modifié' : 'Client créé avec succès');
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la sauvegarde';
      }
    });
  }

  // === Import Excel ===

  downloadTemplate(): void {
    downloadExcelTemplate(CLIENT_HEADERS, CLIENT_SAMPLE, 'modele_clients.xlsx');
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
    this.importProgress = { done: 0, total: this.importRows.length, errors: 0, messages: [] };

    for (const row of this.importRows) {
      const client: SalesClient = {
        name: String(row['Nom*'] || row['Nom'] || '').trim(),
        ref: String(row['Référence'] || '').trim() || undefined,
        phone: String(row['Téléphone'] || '').trim() || undefined,
        email: String(row['Email'] || '').trim() || undefined,
        address: String(row['Adresse'] || '').trim() || undefined,
        tauxRistourne: parseFloat(row['Taux Ristourne (%)']) || undefined,
        tauxPrecompte: parseFloat(row['Taux Précompte (%)']) || undefined,
        creditLimit: parseFloat(row['Limite Crédit (FCFA)']) || undefined,
        receivableAccountCode: String(row['Code Compte Client'] || '').trim() || undefined,
        type: 'customer',
        companyId
      };
      try {
        await this.salesService.createClient(client).toPromise();
        this.importProgress.done++;
      } catch (e: any) {
        this.importProgress.errors++;
        this.importProgress.messages.push(`"${client.name}" : ${e.error?.message || 'Erreur'}`);
      }
    }

    this.showImportModal = false;
    this.loadClients();
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
