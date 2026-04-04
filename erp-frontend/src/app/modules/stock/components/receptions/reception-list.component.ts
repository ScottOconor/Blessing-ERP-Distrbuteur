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
  loading = false;

  constructor(
    private stockService: StockService,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.stockService.getReceptions(this.authService.getCompanyId()).subscribe({
      next: (p) => { this.pickings = p; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  stateLabel(s: string): string {
    return { draft: 'Brouillon', confirmed: 'Confirmé', done: 'Validé', cancelled: 'Annulé' }[s] || s;
  }
}
