import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EnlevementService, EnlevementConfig, EnlevementClientConfig } from '../../services/enlevement.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { StockService, ProductCategory } from '../../../stock/services/stock.service';
import { environment } from '../../../../../environments/environment';

interface SupplierOption { id: number; name: string; }

@Component({
  selector: 'app-enlevement-config',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enlevement-config.component.html',
  styleUrl: './enlevement-config.component.scss'
})
export class EnlevementConfigComponent implements OnInit {
  enlevements: EnlevementConfig[] = [];
  categories: ProductCategory[] = [];
  suppliers:  SupplierOption[]  = [];
  loading = false;

  // Modal
  showModal = false;
  editing: EnlevementConfig | null = null;
  saving  = false;
  errMsg  = '';
  form: EnlevementConfig = this.empty();
  expandedId: number | null = null;

  get companyId(): number { return this.auth.getCompanyId(); }

  constructor(
    private svc: EnlevementService,
    private auth: AuthService,
    private stock: StockService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.load();
    this.stock.getCategories(this.companyId).subscribe(c => this.categories = c);
    this.http.get<SupplierOption[]>(`${environment.apiUrl}/api/accounting/partners`, {
      params: new HttpParams().set('companyId', this.companyId).set('type', 'supplier')
    }).subscribe(s => this.suppliers = s);
  }

  load(): void {
    this.loading = true;
    this.svc.getAll(this.companyId).subscribe({
      next: d  => { this.enlevements = d; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  openNew(): void {
    this.editing = null;
    this.form = this.empty();
    this.errMsg = '';
    this.showModal = true;
  }

  openEdit(e: EnlevementConfig): void {
    this.editing = e;
    this.form = { ...e, clients: e.clients ? e.clients.map(c => ({ ...c })) : [] };
    this.errMsg = '';
    this.showModal = true;
  }

  closeModal(): void { this.showModal = false; }

  save(): void {
    if (!this.form.categoryId || !this.form.montantFixe) {
      this.errMsg = 'Catégorie et montant fixe requis.'; return;
    }
    this.saving = true; this.errMsg = '';
    this.svc.save({ ...this.form, companyId: this.companyId }).subscribe({
      next: () => { this.saving = false; this.showModal = false; this.load(); },
      error: e  => { this.saving = false; this.errMsg = e?.error?.message || 'Erreur lors de la sauvegarde.'; }
    });
  }

  remove(id: number): void {
    if (!confirm('Désactiver ce tarif d\'enlèvement ?')) return;
    this.svc.delete(id).subscribe({ next: () => this.load() });
  }

  toggleExpand(id: number): void {
    this.expandedId = this.expandedId === id ? null : id;
  }

  // ── Gestion tarifs fournisseurs dans le formulaire ────────────────────────
  addClientTarif(): void {
    if (!this.form.clients) this.form.clients = [];
    this.form.clients.push({ partnerId: 0, montant: 0 });
  }

  removeClientTarif(i: number): void {
    this.form.clients?.splice(i, 1);
  }

  supplierName(id: number): string {
    return this.suppliers.find(s => s.id === id)?.name ?? '';
  }

  categoryName(id: number): string {
    return this.categories.find(c => c.id === id)?.name ?? '';
  }

  private empty(): EnlevementConfig {
    return { categoryId: 0, montantFixe: 0, coutEnlevement: 0, companyId: this.companyId, active: true, clients: [] };
  }
}
