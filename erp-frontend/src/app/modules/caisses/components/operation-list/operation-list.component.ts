import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { CaisseService, CaisseOperationDTO, CaisseDTO } from '../../services/caisse.service';

@Component({
  selector: 'app-operation-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './operation-list.component.html',
  styleUrl: './operation-list.component.scss'
})
export class OperationListComponent implements OnInit {
  type: 'ENTREE' | 'SORTIE' = 'ENTREE';
  operations: CaisseOperationDTO[] = [];
  caisses: CaisseDTO[] = [];
  loading = true;
  companyId = 0;

  filterCaisseId: number = 0;
  filterDateFrom = '';
  filterDateTo = '';

  constructor(
    private caisseService: CaisseService,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId() ?? 0;
    const url = this.router.url;
    this.type = url.startsWith('/caisses/sorties') ? 'SORTIE' : 'ENTREE';

    this.caisseService.getCaisses(this.companyId).subscribe({ next: d => this.caisses = d });
    this.load();
  }

  load(): void {
    this.loading = true;
    this.caisseService.getAllOperations(this.companyId, this.type).subscribe({
      next: data => {
        let filtered = data;
        if (this.filterCaisseId) filtered = filtered.filter(o => o.caisseId === this.filterCaisseId);
        if (this.filterDateFrom) filtered = filtered.filter(o => o.date >= this.filterDateFrom);
        if (this.filterDateTo)   filtered = filtered.filter(o => o.date <= this.filterDateTo);
        this.operations = filtered;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  newOperation(): void {
    this.router.navigate([this.type === 'ENTREE' ? '/caisses/entrees/new' : '/caisses/sorties/new']);
  }

  formatAmount(v: number | undefined | null): string {
    if (v == null) return '0 FCFA';
    return new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(v) + ' FCFA';
  }

  get totalMontant(): number {
    return this.operations.reduce((acc, o) => acc + (o.montant || 0), 0);
  }
}
