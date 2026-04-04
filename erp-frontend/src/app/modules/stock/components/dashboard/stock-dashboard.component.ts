import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { StockService, StockDashboard, StockQuant } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-stock-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-dashboard.component.html',
  styleUrl: './stock-dashboard.component.scss'
})
export class StockDashboardComponent implements OnInit {
  loading = false;
  dashboard: StockDashboard | null = null;
  topQuants: StockQuant[] = [];

  constructor(
    private stockService: StockService,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    const cid = this.authService.getCompanyId();
    forkJoin({
      dashboard: this.stockService.getDashboard(cid),
      quants: this.stockService.getQuants(cid)
    }).subscribe({
      next: ({ dashboard, quants }) => {
        this.dashboard = dashboard;
        this.topQuants = quants
          .filter(q => q.quantity > 0)
          .sort((a, b) => (b.totalValue || 0) - (a.totalValue || 0))
          .slice(0, 10);
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }
}
