import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService, ReceptionBordereauDTO, BordereauLigne, BordereauLigneSaisie } from '../../services/stock.service';

@Component({
  selector: 'app-bordereau',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bordereau.component.html',
  styleUrl: './bordereau.component.scss'
})
export class BordereauComponent implements OnInit {
  pickingId!: number;
  bordereau: ReceptionBordereauDTO | null = null;
  loading = false;
  validating = false;
  exporting = false;
  errorMsg = '';
  successMsg = '';

  saisie: Record<number, number> = {};

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private stockService: StockService
  ) {}

  ngOnInit(): void {
    this.pickingId = +this.route.snapshot.paramMap.get('id')!;
    this.loadBordereau();
  }

  loadBordereau(): void {
    this.loading = true;
    this.stockService.getBordereau(this.pickingId).subscribe({
      next: (data) => {
        this.bordereau = data;
        for (const ligne of data.lignes) {
          if (this.isReadOnly) {
            this.saisie[ligne.moveId] = ligne.qteRecue;
          } else {
            this.saisie[ligne.moveId] = ligne.qteRecue > 0 ? ligne.qteRecue : ligne.reste;
          }
        }
        this.loading = false;
      },
      error: (err) => {
        this.errorMsg = err.error?.message || 'Erreur lors du chargement';
        this.loading = false;
      }
    });
  }

  get isReadOnly(): boolean {
    return this.bordereau?.state === 'done';
  }

  get totalQteCommandee(): number {
    return this.bordereau?.lignes.reduce((s, l) => s + l.qteCommandee, 0) ?? 0;
  }

  get totalQteSaisie(): number {
    return Object.values(this.saisie).reduce((s, v) => s + (v || 0), 0);
  }

  get totalAvaries(): number {
    if (!this.bordereau) return 0;
    if (this.isReadOnly) {
      return this.bordereau.lignes.reduce((s, l) => s + l.reste, 0);
    }
    return this.bordereau.lignes.reduce((s, l) => s + this.avarieForLigne(l), 0);
  }

  avarieForLigne(ligne: BordereauLigne): number {
    if (this.isReadOnly) return ligne.reste;
    const saisi = this.saisie[ligne.moveId] ?? 0;
    return Math.max(0, ligne.reste - saisi);
  }

  validate(): void {
    if (!this.bordereau) return;

    const lignes: BordereauLigneSaisie[] = this.bordereau.lignes.map(l => ({
      moveId: l.moveId,
      qteRecue: this.saisie[l.moveId] ?? 0
    }));

    if (!lignes.some(l => l.qteRecue > 0)) {
      this.errorMsg = 'Veuillez saisir au moins une quantité reçue';
      return;
    }

    if (!confirm('Valider la réception ? Les quantités saisies seront transférées au Magasin Principal, le reste aux Avaries.')) return;

    this.validating = true;
    this.errorMsg = '';
    this.stockService.validateBordereau(this.pickingId, lignes).subscribe({
      next: () => {
        this.validating = false;
        this.successMsg = 'Réception validée. Stock mis à jour.';
        setTimeout(() => this.router.navigate(['/stock/receptions']), 1500);
      },
      error: (err) => {
        this.validating = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la validation';
      }
    });
  }

  receiveAll(): void {
    if (!this.bordereau || this.isReadOnly) return;
    for (const ligne of this.bordereau.lignes) {
      this.saisie[ligne.moveId] = ligne.reste;
    }
  }

  exportPdf(): void {
    this.exporting = true;
    this.stockService.downloadBordereauPdf(this.pickingId).subscribe({
      next: (blob) => {
        this.exporting = false;
        const name = this.bordereau?.pickingName || 'bordereau';
        this.triggerDownload(blob, `${name}.pdf`);
      },
      error: () => { this.exporting = false; this.errorMsg = 'Erreur export PDF'; }
    });
  }

  exportExcel(): void {
    this.exporting = true;
    this.stockService.downloadBordereauExcel(this.pickingId).subscribe({
      next: (blob) => {
        this.exporting = false;
        const name = this.bordereau?.pickingName || 'bordereau';
        this.triggerDownload(blob, `${name}.xlsx`);
      },
      error: () => { this.exporting = false; this.errorMsg = 'Erreur export Excel'; }
    });
  }

  private triggerDownload(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  back(): void {
    this.router.navigate(['/stock/receptions']);
  }
}
