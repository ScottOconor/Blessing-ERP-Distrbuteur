import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService, StockPicking } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-reception-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reception-list.component.html',
  styleUrl: './reception-list.component.scss'
})
export class ReceptionListComponent implements OnInit {
  allPickings: StockPicking[] = [];
  pickings: StockPicking[] = [];
  pendingPickings: StockPicking[] = [];
  loading = false;
  loadingPending = false;
  activeTab: 'all' | 'pending' = 'pending';
  dateFrom = new Date().toISOString().split('T')[0];
  dateTo = new Date().toISOString().split('T')[0];

  constructor(
    private stockService: StockService,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const companyId = this.authService.getCompanyId();
    this.loading = true;
    this.loadingPending = true;

    this.stockService.getReceptions(companyId).subscribe({
      next: (p) => { this.allPickings = p; this.applyFilter(); this.loading = false; },
      error: () => { this.loading = false; }
    });

    this.stockService.getPendingReceptions(companyId).subscribe({
      next: (p) => { this.pendingPickings = p; this.loadingPending = false; },
      error: () => { this.loadingPending = false; }
    });
  }

  applyFilter(): void {
    this.pickings = this.allPickings.filter(p => {
      const d = p.scheduledDate?.split('T')[0] ?? '';
      if (this.dateFrom && d < this.dateFrom) return false;
      if (this.dateTo && d > this.dateTo) return false;
      return true;
    });
  }

  clearDateFilter(): void { this.dateFrom = ''; this.dateTo = ''; this.applyFilter(); }

  openBordereau(pickingId: number): void {
    this.router.navigate(['/stock/receptions/bordereau', pickingId]);
  }

  stateLabel(s: string): string {
    return { draft: 'Brouillon', confirmed: 'En attente', done: 'Validé', cancelled: 'Annulé' }[s] || s;
  }
}
