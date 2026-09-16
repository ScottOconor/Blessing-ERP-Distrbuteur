import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { CaisseService, CaisseDTO } from '../../services/caisse.service';

@Component({
  selector: 'app-caisse-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caisse-dashboard.component.html',
  styleUrl: './caisse-dashboard.component.scss'
})
export class CaisseDashboardComponent implements OnInit {
  caisses: CaisseDTO[] = [];
  loading = true;
  error = '';
  companyId = 0;

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

  cloturerCaisse(caisse: CaisseDTO): void {
    if (!confirm(`Clôturer la caisse "${caisse.name}" pour aujourd'hui ?`)) return;
    this.caisseService.cloturerCaisse(caisse.id!, this.companyId).subscribe({
      next: () => this.load(),
      error: (e) => alert(e.error?.message || 'Erreur lors de la clôture.')
    });
  }

  formatAmount(v: number | undefined | null): string {
    if (v == null) return '0 FCFA';
    return new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(v) + ' FCFA';
  }
}
