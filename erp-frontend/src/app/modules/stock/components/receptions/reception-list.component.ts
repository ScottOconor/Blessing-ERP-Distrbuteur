import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StockService, StockPicking } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-reception-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reception-list.component.html',
  styleUrl: './reception-list.component.scss'
})
export class ReceptionListComponent implements OnInit {
  pickings: StockPicking[] = [];
  pendingPickings: StockPicking[] = [];
  loading = false;
  loadingPending = false;
  activeTab: 'all' | 'pending' = 'pending';

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
      next: (p) => { this.pickings = p; this.loading = false; },
      error: () => { this.loading = false; }
    });

    this.stockService.getPendingReceptions(companyId).subscribe({
      next: (p) => { this.pendingPickings = p; this.loadingPending = false; },
      error: () => { this.loadingPending = false; }
    });
  }

  openBordereau(pickingId: number): void {
    this.router.navigate(['/stock/receptions/bordereau', pickingId]);
  }

  stateLabel(s: string): string {
    return { draft: 'Brouillon', confirmed: 'En attente', done: 'Validé', cancelled: 'Annulé' }[s] || s;
  }
}
