import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, Agency } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-agency-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agency-list.component.html',
  styleUrl: './agency-list.component.scss'
})
export class AgencyListComponent implements OnInit {
  agencies: Agency[] = [];
  loading = false;
  showModal = false;
  saving = false;
  errorMsg = '';
  successMsg = '';

  editingId: number | null = null;
  form: Agency = this.emptyForm();

  constructor(
    private stockService: StockService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.stockService.getAgencies(this.authService.getCompanyId()).subscribe({
      next: (data) => { this.agencies = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  openNew(): void {
    this.editingId = null;
    this.form = this.emptyForm();
    this.errorMsg = '';
    this.showModal = true;
  }

  openEdit(a: Agency): void {
    this.editingId = a.id!;
    this.form = { ...a };
    this.errorMsg = '';
    this.showModal = true;
  }

  close(): void {
    this.showModal = false;
  }

  save(): void {
    if (!this.form.name || !this.form.code) {
      this.errorMsg = 'Le nom et le code sont obligatoires';
      return;
    }
    this.saving = true;
    this.errorMsg = '';
    const companyId = this.authService.getCompanyId();
    const dto: Agency = { ...this.form, companyId, active: true };

    const obs = this.editingId
      ? this.stockService.updateAgency(this.editingId, dto)
      : this.stockService.createAgency(dto);

    obs.subscribe({
      next: () => {
        this.saving = false;
        this.showModal = false;
        this.showSuccess(this.editingId ? 'Agence mise à jour' : 'Agence créée');
        this.load();
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la sauvegarde';
      }
    });
  }

  private emptyForm(): Agency {
    return { name: '', code: '', address: '', contactPerson: '', phone: '', email: '', companyId: 0, active: true };
  }

  showSuccess(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 3000);
  }
}
