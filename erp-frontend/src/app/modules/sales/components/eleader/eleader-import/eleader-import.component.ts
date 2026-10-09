import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EleaderService, EleaderImportResult, EleaderImportLog } from '../../../services/eleader.service';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../../../../core/auth/auth.service';

@Component({
  selector: 'app-eleader-import',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './eleader-import.component.html',
  styleUrl: './eleader-import.component.scss'
})
export class EleaderImportComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  /** Plusieurs factures PDF importées l'une après l'autre (un bon de commande par facture). */
  selectedFiles: File[] = [];
  invoiceModel: 'AUTO' | 'BRASSERIES' | 'GUINNESS' = 'AUTO';

  importing = false;
  /** Résultat par fichier, dans l'ordre de sélection */
  results: { file: string; result: EleaderImportResult }[] = [];
  /** Fichier en cours d'import (1-based) */
  importIndex = 0;
  errorMsg = '';

  get successCount(): number { return this.results.filter(r => r.result.success).length; }
  get failureCount(): number { return this.results.filter(r => !r.result.success).length; }

  // Journal configuré
  journalName: string | null = null;
  journalId: number | null = null;
  configWarning: string | null = null;

  // Historique
  logs: EleaderImportLog[] = [];
  loadingLogs = false;
  showLogs = false;

  isDragOver = false;

  constructor(
    private eleaderService: EleaderService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const companyId = this.authService.getCompanyId();
    this.eleaderService.getConfig(companyId).subscribe({
      next: (cfg) => {
        if (cfg.journalId) {
          this.journalId   = cfg.journalId;
          this.journalName = cfg.journalName || 'Journal configuré';
        } else {
          this.configWarning = 'Aucun journal configuré. Les imports seront bloqués. Allez dans Configuration eLeader pour définir le journal.';
        }
      },
      error: () => {}
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.addFiles(Array.from(input.files ?? []));
    input.value = '';
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(): void { this.isDragOver = false; }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
    this.addFiles(Array.from(event.dataTransfer?.files ?? []));
  }

  /** Ajoute les PDF à la sélection (les doublons de nom sont ignorés, les non-PDF signalés). */
  private addFiles(files: File[]): void {
    const pdfs = files.filter(f => f.type === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf'));
    const ignored = files.length - pdfs.length;
    const known = new Set(this.selectedFiles.map(f => f.name));
    this.selectedFiles.push(...pdfs.filter(f => !known.has(f.name)));
    this.results = [];
    this.errorMsg = ignored > 0 ? `${ignored} fichier(s) ignoré(s) : seuls les PDF sont acceptés.` : '';
  }

  removeFile(i: number): void {
    this.selectedFiles.splice(i, 1);
  }

  clearFile(): void {
    this.selectedFiles = [];
    this.results = [];
    this.errorMsg = '';
    if (this.fileInput) this.fileInput.nativeElement.value = '';
  }

  /** Importe les factures une par une : un échec n'arrête pas les suivantes. */
  async import(): Promise<void> {
    if (this.selectedFiles.length === 0 || this.importing) return;
    const companyId = this.authService.getCompanyId();
    const model = this.invoiceModel === 'AUTO' ? undefined : this.invoiceModel;

    this.importing = true;
    this.results = [];
    this.errorMsg = '';
    const files = [...this.selectedFiles];
    for (let k = 0; k < files.length; k++) {
      this.importIndex = k + 1;
      let result: EleaderImportResult;
      try {
        result = await firstValueFrom(this.eleaderService.importPdf(files[k], companyId, model));
      } catch (err: any) {
        result = err?.error?.message ? err.error : { success: false, message: 'Erreur serveur.' };
      }
      this.results.push({ file: files[k].name, result });
    }
    this.importing = false;
    // Garder dans la sélection seulement les fichiers en échec, pour pouvoir les relancer
    const failed = new Set(this.results.filter(r => !r.result.success).map(r => r.file));
    this.selectedFiles = files.filter(f => failed.has(f.name));
    if (this.showLogs) this.loadLogs();
  }

  goToOrder(): void {
    this.router.navigate(['/sales/orders']);
  }

  toggleLogs(): void {
    this.showLogs = !this.showLogs;
    if (this.showLogs && this.logs.length === 0) this.loadLogs();
  }

  loadLogs(): void {
    this.loadingLogs = true;
    this.eleaderService.getLogs(this.authService.getCompanyId()).subscribe({
      next: (logs) => { this.logs = logs; this.loadingLogs = false; },
      error: () => { this.loadingLogs = false; }
    });
  }

  statusClass(status: string): string {
    const map: Record<string, string> = {
      success: 'badge-success', error: 'badge-error',
      warning: 'badge-warning', parsing: 'badge-info', creating: 'badge-info'
    };
    return map[status] ?? 'badge-neutral';
  }

  statusLabel(status: string): string {
    const map: Record<string, string> = {
      success: 'Succès', error: 'Erreur', warning: 'Avertissement',
      parsing: 'Analyse…', creating: 'Création…'
    };
    return map[status] ?? status;
  }
}
