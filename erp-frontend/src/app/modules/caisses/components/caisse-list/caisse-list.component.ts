import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { CaisseService, CaisseDTO } from '../../services/caisse.service';

@Component({
  selector: 'app-caisse-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './caisse-list.component.html',
  styleUrl: './caisse-list.component.scss'
})
export class CaisseListComponent implements OnInit {
  caisses: CaisseDTO[] = [];
  journals: any[] = [];
  loading = true;
  error = '';
  companyId = 0;

  showForm = false;
  editMode = false;
  saving = false;

  form: CaisseDTO = { name: '', journalId: 0, companyId: 0 };

  constructor(
    private caisseService: CaisseService,
    private accountingService: AccountingService,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId() ?? 0;
    this.form.companyId = this.companyId;
    this.load();
    this.loadJournals();
  }

  load(): void {
    this.loading = true;
    this.caisseService.getCaisses(this.companyId).subscribe({
      next: data => { this.caisses = data; this.loading = false; },
      error: () => { this.error = 'Erreur chargement'; this.loading = false; }
    });
  }

  loadJournals(): void {
    this.accountingService.getJournals(this.companyId).subscribe({
      next: data => { this.journals = (data as any[]).filter((j: any) => j.type === 'cash' || j.type === 'bank'); }
    });
  }

  openCreate(): void {
    this.form = { name: '', code: '', journalId: 0, companyId: this.companyId, responsableName: '' };
    this.editMode = false;
    this.showForm = true;
  }

  openEdit(caisse: CaisseDTO): void {
    this.form = { ...caisse };
    this.editMode = true;
    this.showForm = true;
  }

  closeForm(): void { this.showForm = false; }

  save(): void {
    if (!this.form.name || !this.form.journalId) return;
    this.saving = true;
    const obs = this.editMode
      ? this.caisseService.updateCaisse(this.form.id!, this.form)
      : this.caisseService.createCaisse(this.form);

    obs.subscribe({
      next: () => { this.saving = false; this.showForm = false; this.load(); },
      error: (e) => { this.saving = false; alert(e.error?.message || 'Erreur lors de la sauvegarde.'); }
    });
  }

  deleteCaisse(caisse: CaisseDTO): void {
    if (!confirm(`Désactiver la caisse "${caisse.name}" ?`)) return;
    this.caisseService.deleteCaisse(caisse.id!).subscribe({
      next: () => this.load(),
      error: (e) => alert(e.error?.message || 'Erreur.')
    });
  }

  rouvrirCaisse(caisse: CaisseDTO): void {
    if (!confirm(`Rouvrir la caisse "${caisse.name}" ?`)) return;
    this.caisseService.rouvrirCaisse(caisse.id!).subscribe({
      next: () => this.load(),
      error: (e) => alert(e.error?.message || 'Erreur.')
    });
  }

  viewSessions(caisse: CaisseDTO): void {
    const today = new Date().toISOString().split('T')[0];
    this.router.navigate(['/caisses/brouillard'], { queryParams: { caisseId: caisse.id, date: today } });
  }

  getJournalName(id: number): string {
    return this.journals.find(j => j.id === id)?.name ?? '—';
  }

  formatAmount(v: number | undefined | null): string {
    if (v == null) return '0 FCFA';
    return new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(v) + ' FCFA';
  }
}
