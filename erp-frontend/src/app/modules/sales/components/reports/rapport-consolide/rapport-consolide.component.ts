import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalesService, SalesStatsResponse } from '../../../services/sales.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import { ExcelExportService } from '../../../../../core/services/excel-export.service';
import { PdfExportService } from '../../../../../core/services/pdf-export.service';

@Component({
  selector: 'app-rapport-consolide',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rapport-consolide.component.html',
  styleUrl: './rapport-consolide.component.scss'
})
export class RapportConsolideComponent implements OnInit {
  dateFrom = '';
  dateTo = '';
  loading = false;
  generated = false;
  errorMsg = '';
  today = new Date();

  data: SalesStatsResponse | null = null;

  constructor(
    private salesService: SalesService,
    private authService: AuthService,
    private excelExport: ExcelExportService,
    private pdfExport: PdfExportService
  ) {}

  ngOnInit(): void {
    const now = new Date();
    this.dateTo = now.toISOString().split('T')[0];
    this.dateFrom = new Date(now.getFullYear(), 0, 1).toISOString().split('T')[0];
  }

  generate(): void {
    if (!this.dateFrom || !this.dateTo) { this.errorMsg = 'Sélectionnez la période'; return; }
    this.loading = true; this.generated = false; this.errorMsg = '';

    this.salesService.getRapportConsolide({
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      companyId: this.authService.getCompanyId()
    }).subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
        this.generated = true;
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la génération';
      }
    });
  }

  /** Taux de remise moyen pour une ligne */
  tauxRemise(line: { caHT: number; remise: number }): number {
    if (!line.caHT || line.caHT === 0) return 0;
    // remise est calculée sur HT net → on calcule le % brut approximatif
    const htBrut = line.caHT + line.remise;
    if (htBrut === 0) return 0;
    return Math.round((line.remise / htBrut) * 100 * 100) / 100;
  }

  print(): void { window.print(); }

  exportPdf(): void {
    if (this.data) { this.pdfExport.exportRapportConsolide(this.data); }
  }

  exportExcel(): void {
    if (this.data) { this.excelExport.exportRapportConsolide(this.data); }
  }
}
