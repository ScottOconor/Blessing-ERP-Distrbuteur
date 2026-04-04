import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StockService, StockPicking } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-livraison-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livraison-list.component.html',
  styleUrl: './livraison-list.component.scss'
})
export class LivraisonListComponent implements OnInit {
  pickings: StockPicking[] = [];
  loading = false;

  constructor(
    private stockService: StockService,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.stockService.getLivraisons(this.authService.getCompanyId()).subscribe({
      next: (p) => { this.pickings = p; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  stateLabel(s: string): string {
    return { draft: 'Brouillon', confirmed: 'Confirmé', done: 'Livré', cancelled: 'Annulé' }[s] || s;
  }
}
