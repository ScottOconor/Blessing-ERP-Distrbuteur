import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { CaisseService, CaisseOperationDTO, CaisseDTO } from '../../services/caisse.service';
import { formatFCFA } from '../../../../core/utils/currency-format.util';
import { PAGE_SIZE } from '../../../../core/utils/server-list';
import { PagerComponent } from '../../../../shared/components/pager/pager.component';

@Component({
  selector: 'app-operation-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PagerComponent],
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

  // Pagination côté serveur : filtres et total calculés par le serveur (caisse imposée pour un caissier).
  page = 0;
  readonly pageSize = PAGE_SIZE;
  totalElements = 0;
  totalMontant = 0;

  /** Nouveaux filtres : première page. */
  load(): void {
    this.page = 0;
    this.loadPage();
  }

  loadPage(): void {
    this.loading = true;
    this.caisseService.getOperationsPage({
      companyId: this.companyId, type: this.type, caisseId: this.filterCaisseId || null,
      dateFrom: this.filterDateFrom, dateTo: this.filterDateTo, page: this.page, size: this.pageSize
    }).subscribe({
      next: r => {
        this.operations = r.content;
        this.totalElements = r.totalElements;
        this.totalMontant = Number(r.totals?.['montant']) || 0;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  goToPage(page: number): void {
    this.page = page;
    this.loadPage();
  }

  newOperation(): void {
    this.router.navigate([this.type === 'ENTREE' ? '/caisses/entrees/new' : '/caisses/sorties/new']);
  }

  formatAmount(v: number | undefined | null): string {
    return formatFCFA(v);
  }

}
