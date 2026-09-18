import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { CaisseService, CaisseDTO, CaisseSessionDTO } from '../../services/caisse.service';
import { CaisseCountModalComponent } from '../count-modal/caisse-count-modal.component';
import { formatFCFA } from '../../../../core/utils/currency-format.util';

@Component({
  selector: 'app-caisse-dashboard',
  standalone: true,
  imports: [CommonModule, CaisseCountModalComponent],
  templateUrl: './caisse-dashboard.component.html',
  styleUrl: './caisse-dashboard.component.scss'
})
export class CaisseDashboardComponent implements OnInit {
  caisses: CaisseDTO[] = [];
  loading = true;
  error = '';
  companyId = 0;

  countModalCaisse: CaisseDTO | null = null;
  countModalMode: 'ouverture' | 'cloture' = 'ouverture';

  constructor(
    private caisseService: CaisseService,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId() ?? 0;
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = '';
    this.caisseService.getDashboard(this.companyId).subscribe({
      next: data => { this.caisses = data; this.loading = false; },
      error: () => { this.error = 'Erreur lors du chargement.'; this.loading = false; }
    });
  }

  newEntree(caisse: CaisseDTO): void {
    this.router.navigate(['/caisses/entrees/new'], { queryParams: { caisseId: caisse.id } });
  }

  newSortie(caisse: CaisseDTO): void {
    this.router.navigate(['/caisses/sorties/new'], { queryParams: { caisseId: caisse.id } });
  }

  viewBrouillard(caisse: CaisseDTO): void {
    const today = new Date().toISOString().split('T')[0];
    this.router.navigate(['/caisses/brouillard'], { queryParams: { caisseId: caisse.id, date: today } });
  }

  ouvrirCaisse(caisse: CaisseDTO): void {
    this.countModalCaisse = caisse;
    this.countModalMode = 'ouverture';
  }

  cloturerCaisse(caisse: CaisseDTO): void {
    this.countModalCaisse = caisse;
    this.countModalMode = 'cloture';
  }

  onCountModalClosed(session: CaisseSessionDTO | null): void {
    this.countModalCaisse = null;
    if (session) this.load();
  }

  formatAmount(v: number | undefined | null): string {
    return formatFCFA(v);
  }
}
