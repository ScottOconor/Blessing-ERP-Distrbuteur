import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService, StockPicking } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-transfert-reception-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transfert-reception-list.component.html',
  styleUrl: './transfert-reception-list.component.scss'
})
export class TransfertReceptionListComponent implements OnInit {
  pickings: StockPicking[] = [];
  loading = false;
  showAll = false;
  private companyId!: number;

  constructor(
    private stockService: StockService,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId();
    this.load();
  }

  load(): void {
    this.loading = true;
    this.stockService.getTransferReceptions(this.companyId, this.showAll).subscribe({
      next: (p) => { this.pickings = p; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  toggleAll(): void { this.showAll = !this.showAll; this.load(); }

  stateLabel(s: string): string {
    return ({ pending_reception: 'En attente', done: 'Réceptionné', cancelled: 'Annulé' } as Record<string, string>)[s] || s;
  }
}
