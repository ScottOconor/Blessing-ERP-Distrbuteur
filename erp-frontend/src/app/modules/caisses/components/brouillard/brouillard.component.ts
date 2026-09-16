import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { CaisseService, CaisseDTO, BrouillardDTO } from '../../services/caisse.service';
import { AuditTrailComponent } from '../../../../shared/components/audit-trail/audit-trail.component';

@Component({
  selector: 'app-brouillard',
  standalone: true,
  imports: [CommonModule, FormsModule, AuditTrailComponent],
  templateUrl: './brouillard.component.html',
  styleUrl: './brouillard.component.scss'
})
export class BrouillardComponent implements OnInit {
  caisses: CaisseDTO[] = [];
  brouillard: BrouillardDTO | null = null;
  loading = false;
  error = '';
  companyId = 0;

  selectedCaisseId: number = 0;
  selectedDate: string = new Date().toISOString().split('T')[0];

  constructor(
    private caisseService: CaisseService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId() ?? 0;
    this.caisseService.getCaisses(this.companyId).subscribe({ next: d => this.caisses = d });

    this.route.queryParams.subscribe(params => {
      if (params['caisseId']) this.selectedCaisseId = +params['caisseId'];
      if (params['date']) this.selectedDate = params['date'];
      if (this.selectedCaisseId) this.load();
    });
  }

  load(): void {
    if (!this.selectedCaisseId || !this.selectedDate) return;
    this.loading = true;
    this.error = '';
    this.caisseService.getBrouillard(this.selectedCaisseId, this.selectedDate).subscribe({
      next: data => { this.brouillard = data; this.loading = false; },
      error: (e) => { this.error = e.error?.message || 'Erreur chargement.'; this.loading = false; }
    });
  }

  formatAmount(v: number | undefined | null): string {
    if (v == null) return '0 FCFA';
    return new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(v) + ' FCFA';
  }

  print(): void {
    window.print();
  }
}
