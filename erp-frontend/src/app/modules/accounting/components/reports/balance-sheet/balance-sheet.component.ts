import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportService } from '../../../services/report.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import { ExcelExportService } from '../../../../../core/services/excel-export.service';
import { PdfExportService } from '../../../../../core/services/pdf-export.service';

export interface BilanFlatRow {
  ref: string;
  label: string;
  brut: number;
  amort: number;
  net: number;
  netPrev: number;
  isHeader: boolean;
  isTotal: boolean;
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
  dateTo = '';
  today = new Date();

  totalActif = 0;
  totalPassif = 0;
  isEquilibre = false;

  actifRows: BilanFlatRow[] = [];
  passifRows: BilanFlatRow[] = [];

  constructor(
    private reportService: ReportService,
    private authService: AuthService,
    private excelExport: ExcelExportService,
    private pdfExport: PdfExportService
  ) {}

  ngOnInit(): void {
    this.dateTo = new Date().toISOString().split('T')[0];
  }

  generate(): void {
    if (!this.dateTo) { this.errorMsg = 'Sélectionnez la date de clôture'; return; }
    this.loading = true; this.generated = false; this.errorMsg = '';

    this.reportService.getBilan({
      dateFrom: new Date(new Date(this.dateTo).getFullYear(), 0, 1).toISOString().split('T')[0],
      dateTo: this.dateTo,
      companyId: this.authService.getCompanyId()
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
    const actif = res.actif || {};
    const passif = res.passif || {};

    // ===== ACTIF =====
    const ai = actif.actifImmobilise || {};
    const ac = actif.actifCirculant || {};
    const ta = actif.tresorerieActif || {};
    const amort = n(ai.amortissements);
    const immoTotal = n(ai.total);

    this.actifRows = [
      // ACTIF IMMOBILISÉ
      this.header('AD', 'ACTIF IMMOBILISÉ'),
      this.line('', 'Immobilisations incorporelles', n(ai.immoIncorporelles), 0, n(ai.immoIncorporelles)),
      this.line('', 'Immobilisations corporelles', n(ai.immoCorporelles), 0, n(ai.immoCorporelles)),
      this.line('', 'Immobilisations financières', n(ai.immoFinancieres), 0, n(ai.immoFinancieres)),
      this.line('', 'Amortissements & provisions', amort, 0, -amort),
      this.total('AZ', 'Total Actif Immobilisé', immoTotal + amort, amort, immoTotal),

      // ACTIF CIRCULANT
      this.header('BC', 'ACTIF CIRCULANT'),
      this.line('', 'Stocks', n(ac.stocks), 0, n(ac.stocks)),
      this.line('', 'Créances & emplois assimilés', n(ac.creances), 0, n(ac.creances)),
      this.total('BT', 'Total Actif Circulant', n(ac.total), 0, n(ac.total)),

      // TRÉSORERIE ACTIF
      this.header('', 'TRÉSORERIE ACTIF'),
      this.line('', 'Banques & CCP', n(ta.banques), 0, n(ta.banques)),
      this.line('', 'Caisse', n(ta.caisse), 0, n(ta.caisse)),
      this.total('BZ', 'Total Trésorerie Actif', n(ta.total), 0, n(ta.total)),
    ];

    this.totalActif = n(actif.totalActif);

    // ===== PASSIF =====
    const cp = passif.capitauxPropres || {};
    const df = passif.dettesFinancieres || {};
    const pc = passif.passifCirculant || {};
    const tp = passif.tresoreriePassif || {};

    this.passifRows = [
      // CAPITAUX PROPRES
      this.header('CP', 'CAPITAUX PROPRES'),
      this.line('', 'Capital social', 0, 0, n(cp.capitalSocial)),
      this.line('', 'Réserves', 0, 0, n(cp.reserves)),
      this.line('', 'Report à nouveau', 0, 0, n(cp.reportNouveau)),
      this.line('', "Résultat de l'exercice", 0, 0, n(cp.resultatExercice)),
      this.line('', 'Autres capitaux propres', 0, 0, n(cp.autresCapitaux)),
      this.total('CP', 'Total Capitaux Propres', 0, 0, n(cp.total)),

      // DETTES FINANCIÈRES
      this.header('DD', 'DETTES FINANCIÈRES'),
      this.line('', 'Emprunts & dettes à LT', 0, 0, n(df.emprunts)),
      this.total('DF', 'Total Dettes Financières', 0, 0, n(df.total)),

      // PASSIF CIRCULANT
      this.header('DG', 'PASSIF CIRCULANT'),
      this.line('', 'Fournisseurs', 0, 0, n(pc.fournisseurs)),
      this.line('', 'Personnel', 0, 0, n(pc.dettesPersonnel)),
      this.line('', 'Dettes fiscales', 0, 0, n(pc.dettesFiscales)),
      this.total('DP', 'Total Passif Circulant', 0, 0, n(pc.total)),

      // TRÉSORERIE PASSIF
      this.header('', 'TRÉSORERIE PASSIF'),
      this.total('DT', 'Total Trésorerie Passif', 0, 0, n(tp.total)),
    ];

    this.totalPassif = n(passif.totalPassif);
    this.isEquilibre = res.equilibre === true
      || Math.abs(this.totalActif - this.totalPassif) <= 0.01;
  }

  private header(ref: string, label: string): BilanFlatRow {
    return { ref, label, brut: 0, amort: 0, net: 0, netPrev: 0, isHeader: true, isTotal: false, isEmpty: false };
  }

  private line(ref: string, label: string, brut: number, amort: number, net: number): BilanFlatRow {
    return { ref, label, brut, amort, net, netPrev: 0, isHeader: false, isTotal: false, isEmpty: false };
  }

  private total(ref: string, label: string, brut: number, amort: number, net: number): BilanFlatRow {
    return { ref, label, brut, amort, net, netPrev: 0, isHeader: false, isTotal: true, isEmpty: false };
  }

  get rowIndices(): number[] {
    const max = Math.max(this.actifRows.length, this.passifRows.length);
    return Array.from({ length: max }, (_, i) => i);
  }

  emptyRow: BilanFlatRow = { ref: '', label: '', brut: 0, amort: 0, net: 0, netPrev: 0, isHeader: false, isTotal: false, isEmpty: true };

  print(): void { window.print(); }

  exportPdf(): void {
    this.pdfExport.exportBilan(
      this.actifRows, this.passifRows,
      this.totalActif, this.totalPassif, this.dateTo,
      this.authService.getActiveCompany()?.name
    );
  }

  exportExcel(): void {
    this.excelExport.exportBilan(
      this.actifRows, this.passifRows,
      this.totalActif, this.totalPassif, this.dateTo
    );
  }
}
