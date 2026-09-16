import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../../accounting/services/report.service';
import { AuthService } from '../../../../core/auth/auth.service';

interface TiersLine {
  partnerId: number;
  partnerName: string;
  solde: number;
}

@Component({
  selector: 'app-suivi-tiers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suivi-tiers.component.html',
  styleUrl: './suivi-tiers.component.scss'
})
export class SuiviTiersComponent implements OnInit {
  creances: TiersLine[] = [];
  dettes: TiersLine[]   = [];
  totalCreances = 0;
  totalDettes   = 0;
  soldeNet      = 0;
  loading       = false;
  errorMsg      = '';
  lastRefresh: Date | null = null;

  constructor(
    private reportService: ReportService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.errorMsg = '';
    this.reportService.getSuiviTiers(this.authService.getCompanyId()).subscribe({
      next: (res) => {
        this.creances      = res.creances      || [];
        this.dettes        = res.dettes        || [];
        this.totalCreances = res.totalCreances || 0;
        this.totalDettes   = res.totalDettes   || 0;
        this.soldeNet      = res.soldeNet      || 0;
        this.loading       = false;
        this.lastRefresh   = new Date();
      },
      error: (err) => {
        this.loading  = false;
        this.errorMsg = err.error?.message || 'Erreur lors du chargement';
      }
    });
  }
}
