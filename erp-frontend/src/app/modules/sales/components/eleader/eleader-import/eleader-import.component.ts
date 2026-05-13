import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EleaderService, EleaderImportResult, EleaderImportLog } from '../../../services/eleader.service';
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

  selectedFile: File | null = null;
  invoiceModel: 'AUTO' | 'BRASSERIES' | 'GUINNESS' = 'AUTO';

  importing = false;
  result: EleaderImportResult | null = null;
  errorMsg = '';

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
    if (input.files?.length) {
      this.selectedFile = input.files[0];
      this.result = null;
      this.errorMsg = '';
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(): void { this.isDragOver = false; }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
    const file = event.dataTransfer?.files[0];
    if (file && file.type === 'application/pdf') {
      this.selectedFile = file;
      this.result = null;
      this.errorMsg = '';
    } else {
      this.errorMsg = 'Seuls les fichiers PDF sont acceptés.';
    }
  }

  clearFile(): void {
    this.selectedFile = null;
    this.result = null;
    this.errorMsg = '';
    if (this.fileInput) this.fileInput.nativeElement.value = '';
  }

  import(): void {
    if (!this.selectedFile) return;
    const companyId = this.authService.getCompanyId();
    const model = this.invoiceModel === 'AUTO' ? undefined : this.invoiceModel;

    this.importing = true;
    this.result = null;
    this.errorMsg = '';

    this.eleaderService.importPdf(this.selectedFile, companyId, model).subscribe({
      next: (res) => {
        this.result = res;
        this.importing = false;
        if (this.showLogs) this.loadLogs();
      },
      error: (err) => {
        this.result = err?.error || { success: false, message: 'Erreur serveur.' };
        this.importing = false;
      }
    });
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
