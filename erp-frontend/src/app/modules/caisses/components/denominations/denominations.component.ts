import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../core/auth/auth.service';
import { CaisseService, CashDenominationDTO } from '../../services/caisse.service';
import { formatFCFA } from '../../../../core/utils/currency-format.util';

@Component({
  selector: 'app-denominations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './denominations.component.html',
  styleUrl: './denominations.component.scss'
})
export class DenominationsComponent implements OnInit {
  denominations: CashDenominationDTO[] = [];
  loading = true;
  saving = false;
  companyId = 0;

  showForm = false;
  editMode = false;
  form: CashDenominationDTO = { companyId: 0, label: '', valeur: 0 };

  constructor(private caisseService: CaisseService, private authService: AuthService) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId();
    this.load();
  }

  load(): void {
    this.loading = true;
    this.caisseService.getDenominations(this.companyId).subscribe({
      next: (d) => { this.denominations = d; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  seedDefaults(): void {
    this.caisseService.seedDefaultDenominations(this.companyId).subscribe({
      next: (d) => { this.denominations = d; }
    });
  }

  openCreate(): void {
    this.form = { companyId: this.companyId, label: '', valeur: 0 };
    this.editMode = false;
    this.showForm = true;
  }

  openEdit(d: CashDenominationDTO): void {
    this.form = { ...d };
    this.editMode = true;
    this.showForm = true;
  }

  closeForm(): void { this.showForm = false; }

  save(): void {
    if (!this.form.label || !this.form.valeur) return;
    this.saving = true;
    const obs = this.editMode
      ? this.caisseService.updateDenomination(this.form.id!, this.form)
      : this.caisseService.createDenomination(this.form);
    obs.subscribe({
      next: () => { this.saving = false; this.showForm = false; this.load(); },
      error: () => { this.saving = false; }
    });
  }

  remove(d: CashDenominationDTO): void {
    if (!confirm(`Désactiver la coupure "${d.label}" ?`)) return;
    this.caisseService.deleteDenomination(d.id!).subscribe({ next: () => this.load() });
  }

  formatAmount(v: number | undefined | null): string {
    return formatFCFA(v, false);
  }
}
