import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import {
  CaisseService, CaisseDTO, CashDenominationDTO, CaisseSessionDTO
} from '../../services/caisse.service';
import { formatFCFA } from '../../../../core/utils/currency-format.util';

@Component({
  selector: 'app-caisse-count-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './caisse-count-modal.component.html',
  styleUrl: './caisse-count-modal.component.scss'
})
export class CaisseCountModalComponent implements OnInit {
  @Input({ required: true }) caisse!: CaisseDTO;
  @Input({ required: true }) mode!: 'ouverture' | 'cloture';
  @Output() closed = new EventEmitter<CaisseSessionDTO | null>();

  denominations: CashDenominationDTO[] = [];
  quantities: Record<number, number> = {};
  notes = '';
  loading = false;
  saving = false;
  error = '';
  result: CaisseSessionDTO | null = null;

  constructor(private caisseService: CaisseService, private authService: AuthService, private router: Router) {}

  voirRapport(): void {
    if (!this.result?.id) return;
    this.router.navigate(['/caisses/rapport-cloture', this.result.id]);
    this.closed.emit(this.result);
  }

  get title(): string {
    return this.mode === 'ouverture' ? 'Ouvrir la caisse' : 'Clôturer la caisse';
  }

  ngOnInit(): void {
    this.loading = true;
    this.caisseService.getDenominations(this.authService.getCompanyId()).subscribe({
      next: (data) => {
        this.denominations = data.filter(d => d.active !== false);
        this.denominations.forEach(d => this.quantities[d.id!] = 0);
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  get total(): number {
    return this.denominations.reduce((sum, d) =>
      sum + (this.quantities[d.id!] || 0) * d.valeur, 0);
  }

  get hasAnyCount(): boolean {
    return Object.values(this.quantities).some(q => (q || 0) > 0);
  }

  close(): void {
    this.closed.emit(this.result);
  }

  skip(): void {
    // Ferme sans comptage — l'ouverture/clôture reste possible sans comptage (non bloquant).
    this.confirm(true);
  }

  confirm(skipCount = false): void {
    this.saving = true;
    this.error = '';
    const counts = skipCount ? [] : this.denominations
      .filter(d => (this.quantities[d.id!] || 0) > 0)
      .map(d => ({ denominationId: d.id!, quantite: this.quantities[d.id!] }));

    const companyId = this.authService.getCompanyId();
    const obs = this.mode === 'ouverture'
      ? this.caisseService.ouvrirSession(this.caisse.id!, { companyId, counts, notes: this.notes })
      : this.caisseService.cloturerCaisse(this.caisse.id!, companyId, { companyId, counts, notes: this.notes });

    obs.subscribe({
      next: (session) => {
        this.saving = false;
        this.result = session;
      },
      error: (e) => {
        this.saving = false;
        this.error = e.error?.message || 'Erreur lors de l\'opération.';
      }
    });
  }

  formatAmount(v: number | undefined | null): string {
    return formatFCFA(v);
  }
}
