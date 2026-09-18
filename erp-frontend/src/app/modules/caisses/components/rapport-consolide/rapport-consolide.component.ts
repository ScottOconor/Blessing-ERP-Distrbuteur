import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { CaisseService, CaisseDTO, RapportConsolideDTO } from '../../services/caisse.service';
import { formatFCFA } from '../../../../core/utils/currency-format.util';

@Component({
  selector: 'app-rapport-consolide',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rapport-consolide.component.html',
  styleUrl: './rapport-consolide.component.scss'
})
export class RapportConsolideComponent implements OnInit {
  caisses: CaisseDTO[] = [];
  selectedCaisseIds: number[] = [];
  dateFrom = '';
  dateTo = '';

  loading = false;
  error = '';
  data: RapportConsolideDTO | null = null;

  constructor(
    private caisseService: CaisseService,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const now = new Date();
    this.dateTo = now.toISOString().split('T')[0];
    this.dateFrom = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
    this.caisseService.getCaisses(this.authService.getCompanyId()).subscribe({
      next: (d) => this.caisses = d
    });
  }

  toggleCaisse(id: number): void {
    const idx = this.selectedCaisseIds.indexOf(id);
    if (idx >= 0) this.selectedCaisseIds.splice(idx, 1);
    else this.selectedCaisseIds.push(id);
  }

  generate(): void {
    if (!this.dateFrom || !this.dateTo) { this.error = 'Sélectionnez une période.'; return; }
    this.loading = true;
    this.error = '';
    this.caisseService.getRapportConsolide(
      this.authService.getCompanyId(), this.dateFrom, this.dateTo, this.selectedCaisseIds
    ).subscribe({
      next: (d) => { this.data = d; this.loading = false; },
      error: (e) => { this.error = e.error?.message || 'Erreur.'; this.loading = false; }
    });
  }

  formatAmount(v: number | undefined | null): string {
    return v == null ? '—' : formatFCFA(v);
  }

  voirRapport(sessionId: number | undefined): void {
    if (!sessionId) return;
    this.router.navigate(['/caisses/rapport-cloture', sessionId]);
  }
}
