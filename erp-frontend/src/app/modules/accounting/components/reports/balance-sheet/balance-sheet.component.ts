import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../../../services/report.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import { ExcelExportService } from '../../../../../core/services/excel-export.service';
import { PdfExportService } from '../../../../../core/services/pdf-export.service';

export interface BilanPoste {
  ref: string;
  label: string;
  compte: string;
  brutN: number;
  amortN: number;
  netN: number;
  netN1: number;
  isTotal: boolean;
  isGrandTotal: boolean;
  isEmpty: boolean;
}

function n(v: any): number {
  return v != null ? Number(v) : 0;
}

@Component({
  selector: 'app-balance-sheet',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './balance-sheet.component.html',
  styleUrl: './balance-sheet.component.scss'
})
export class BalanceSheetComponent implements OnInit {
  loading = false;
  generated = false;
  errorMsg = '';
  today = new Date();

  // Paramètres
  periodType = 'yearly'; // monthly | quarterly | yearly | custom
  dateFrom = '';
  dateTo = '';
  includeUnposted = false;
  comparisonEnabled = true;

  totalActif = 0;
  totalPassif = 0;
  isEquilibre = false;
  dateFromN1 = '';
  dateToN1 = '';

  actifRows: BilanPoste[] = [];
  passifRows: BilanPoste[] = [];

  constructor(
    private reportService: ReportService,
    private authService: AuthService,
    private excelExport: ExcelExportService,
    private pdfExport: PdfExportService
  ) {}

  ngOnInit(): void {
    this.resetPeriod();
  }

  /** Applique la période par défaut selon le type choisi */
  resetPeriod(): void {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    switch (this.periodType) {
      case 'monthly':
        // Mois précédent
        const prev = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        this.dateFrom = this.fmt(prev);
        this.dateTo = this.fmt(new Date(now.getFullYear(), now.getMonth(), 0));
        break;
      case 'quarterly': {
        const q = Math.floor((month - 1) / 3);
        this.dateFrom = this.fmt(new Date(year, q * 3, 1));
        this.dateTo = this.fmt(new Date(year, q * 3 + 3, 0));
        break;
      }
      case 'yearly':
      default:
        this.dateFrom = `${year}-01-01`;
        this.dateTo = this.fmt(now);
        break;
    }
  }

  onPeriodTypeChange(): void {
    if (this.periodType !== 'custom') {
      this.resetPeriod();
    }
  }

  private fmt(d: Date): string {
    return d.toISOString().split('T')[0];
  }

  generate(): void {
    if (!this.dateFrom || !this.dateTo) { this.errorMsg = 'Sélectionnez l\'intervalle (dates début/fin)'; return; }
    if (this.dateFrom > this.dateTo) { this.errorMsg = 'La date de début ne peut pas être postérieure à la date de fin.'; return; }
    this.loading = true; this.generated = false; this.errorMsg = '';

    this.reportService.getBilan({
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      companyId: this.authService.getCompanyId(),
      periodType: this.periodType,
      includeUnposted: this.includeUnposted,
      comparisonEnabled: this.comparisonEnabled
    }).subscribe({
      next: (res) => {
        this.buildRows(res);
        this.loading = false;
        this.generated = true;
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la génération';
      }
    });
  }

  private buildRows(res: any): void {
    const postes = res.postes || {};
    this.dateFromN1 = res.dateFromN1 || '';
    this.dateToN1 = res.dateToN1 || '';

    const actifRefs: string[] = res.actif?.postes || [];
    const passifRefs: string[] = res.passif?.postes || [];

    this.actifRows = actifRefs.filter(r => postes[r]).map(r => this.toPoste(r, postes[r]));
    this.passifRows = passifRefs.filter(r => postes[r]).map(r => this.toPoste(r, postes[r]));

    this.totalActif = n(res.totalActif);
    this.totalPassif = n(res.totalPassif);
    this.isEquilibre = res.equilibre === true || Math.abs(this.totalActif - this.totalPassif) <= 1;
  }

  private toPoste(ref: string, p: any): BilanPoste {
    const type = p.type || '';
    return {
      ref,
      label: p.label || '',
      compte: p.compte || '',
      brutN: n(p.brut?.n),
      amortN: n(p.amort?.n),
      netN: n(p.net?.n),
      netN1: this.comparisonEnabled ? n(p.net?.n_1) : 0,
      isTotal: type === 'total',
      isGrandTotal: type === 'grand_total',
      isEmpty: false
    };
  }

  emptyRow: BilanPoste = { ref: '', label: '', compte: '', brutN: 0, amortN: 0, netN: 0, netN1: 0, isTotal: false, isGrandTotal: false, isEmpty: true };

  // L'actif compte un poste de plus que le passif (29 vs 28 réfs OHADA) : un
  // appariement ligne à ligne par index décale donc BZ_ACTIF et BZ_PASSIF d'une
  // ligne l'un par rapport à l'autre. On sort ces deux postes du reste pour les
  // recombiner explicitement sur une seule et même ligne finale (voir template).
  get actifBody(): BilanPoste[] { return this.actifRows.filter(r => r.ref !== 'BZ_ACTIF'); }
  get passifBody(): BilanPoste[] { return this.passifRows.filter(r => r.ref !== 'BZ_PASSIF'); }
  get actifFinal(): BilanPoste { return this.actifRows.find(r => r.ref === 'BZ_ACTIF') ?? this.emptyRow; }
  get passifFinal(): BilanPoste { return this.passifRows.find(r => r.ref === 'BZ_PASSIF') ?? this.emptyRow; }

  get rowIndices(): number[] {
    const max = Math.max(this.actifBody.length, this.passifBody.length);
    return Array.from({ length: max }, (_, i) => i);
  }

  print(): void { window.print(); }

  exportPdf(): void {
    this.pdfExport.exportBilan(
      this.actifRows.map(r => ({ ref: r.ref, label: r.label, compte: r.compte, brut: r.brutN, amort: r.amortN, net: r.netN, netPrev: r.netN1, isHeader: false, isTotal: r.isTotal || r.isGrandTotal, isEmpty: r.isEmpty })),
      this.passifRows.map(r => ({ ref: r.ref, label: r.label, compte: r.compte, brut: r.brutN, amort: r.amortN, net: r.netN, netPrev: r.netN1, isHeader: false, isTotal: r.isTotal || r.isGrandTotal, isEmpty: r.isEmpty })),
      this.totalActif, this.totalPassif, this.dateTo,
      this.authService.getActiveCompany()?.name
    );
  }

  exportExcel(): void {
    this.excelExport.exportBilan(
      this.actifRows.map(r => ({ ref: r.ref, label: r.label, compte: r.compte, brut: r.brutN, amort: r.amortN, net: r.netN, netPrev: r.netN1, isHeader: false, isTotal: r.isTotal || r.isGrandTotal, isEmpty: r.isEmpty })),
      this.passifRows.map(r => ({ ref: r.ref, label: r.label, compte: r.compte, brut: r.brutN, amort: r.amortN, net: r.netN, netPrev: r.netN1, isHeader: false, isTotal: r.isTotal || r.isGrandTotal, isEmpty: r.isEmpty })),
      this.totalActif, this.totalPassif, this.dateTo
    );
  }
}
