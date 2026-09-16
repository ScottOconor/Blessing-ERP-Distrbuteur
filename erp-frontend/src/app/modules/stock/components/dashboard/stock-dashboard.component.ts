import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
  errorMsg = '';

  constructor(
    private stockService: StockService,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.errorMsg = '';
    const cid = this.authService.getCompanyId();
    forkJoin({
      dashboard: this.stockService.getDashboard(cid).pipe(catchError(() => of(null))),
      quants: this.stockService.getQuants(cid).pipe(catchError(() => of([])))
    }).subscribe({
      next: ({ dashboard, quants }) => {
        if (!dashboard) {
          this.errorMsg = 'Impossible de charger le tableau de bord — vérifiez que le serveur est démarré.';
        } else {
          this.dashboard = dashboard;
          this.topQuants = (quants as StockQuant[])
            .filter(q => q.quantity > 0)
            .sort((a, b) => (b.totalValue || 0) - (a.totalValue || 0))
            .slice(0, 10);
        }
        this.loading = false;
      },
      error: () => {
        this.errorMsg = 'Erreur de connexion au serveur. Assurez-vous que le backend est démarré sur le bon port.';
        this.loading = false;
      }
    });
  }
}
