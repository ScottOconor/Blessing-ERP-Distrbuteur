import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../../core/auth/auth.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-backup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backup.component.html',
  styleUrl: './backup.component.scss'
})
export class BackupComponent {
  private api = `${environment.apiUrl}/api/backup`;
  private salesApi = `${environment.apiUrl}/api/sales`;

  // DB backup
  downloading    = false;
  restoring      = false;
  confirmRestore = false;
  selectedFile: File | null = null;

  // Config backup
  downloadingConfig    = false;
  restoringConfig      = false;
  confirmRestoreConfig = false;
  selectedConfigFile: File | null = null;

  successMsg = '';
  errorMsg   = '';

  releasingReservations = false;
  releasingAllReservations = false;

  get isSuperAdmin(): boolean { return this.authService.isSuperAdmin(); }

  constructor(private http: HttpClient, private authService: AuthService) {}

  get authHeaders(): HttpHeaders {
    const token = this.authService.getToken?.() ?? localStorage.getItem('token') ?? '';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  get companyId(): number { return this.authService.getCompanyId(); }

  // ── DB BACKUP ──────────────────────────────────────────────

  downloadBackup(): void {
    this.downloading = true;
    this.clearMsgs();
    this.http.get(this.api + '/download', {
      headers: this.authHeaders, responseType: 'blob', observe: 'response'
    }).subscribe({
      next: (resp) => {
        this.downloading = false;
        const blob = resp.body!;
        const cd   = resp.headers.get('content-disposition') ?? '';
        const m    = cd.match(/filename="?([^"]+)"?/);
        this.triggerDownload(blob, m ? m[1] : 'blessing-backup.zip');
        this.successMsg = 'Sauvegarde BD téléchargée avec succès';
      },
      error: (e) => { this.downloading = false; this.errorMsg = this.formatError(e, 'Erreur lors de la sauvegarde BD'); }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFile   = input.files?.[0] ?? null;
    this.confirmRestore = false;
    this.clearMsgs();
  }

  askConfirmRestore(): void {
    if (!this.selectedFile) { this.errorMsg = 'Sélectionnez un fichier ZIP'; return; }
    this.confirmRestore = true;
  }

  cancelRestore(): void {
    this.confirmRestore = false;
    this.selectedFile   = null;
    const input = document.getElementById('restore-file-input') as HTMLInputElement;
    if (input) input.value = '';
  }

  doRestore(): void {
    if (!this.selectedFile) return;
    this.restoring      = true;
    this.confirmRestore = false;
    this.clearMsgs();
    const fd = new FormData();
    fd.append('file', this.selectedFile);
    this.http.post<{ message?: string; error?: string }>(
      this.api + '/restore', fd, { headers: this.authHeaders }
    ).subscribe({
      next: (res) => { this.restoring = false; this.selectedFile = null; this.successMsg = res.message ?? 'Restauration BD réussie'; },
      error: (e)  => { this.restoring = false; this.errorMsg = this.formatError(e, 'Erreur lors de la restauration BD'); }
    });
  }

  // ── CONFIG BACKUP ──────────────────────────────────────────

  downloadConfigBackup(): void {
    this.downloadingConfig = true;
    this.clearMsgs();
    this.http.get(`${this.api}/config/download?companyId=${this.companyId}`, {
      headers: this.authHeaders, responseType: 'blob', observe: 'response'
    }).subscribe({
      next: (resp) => {
        this.downloadingConfig = false;
        const blob = resp.body!;
        const cd   = resp.headers.get('content-disposition') ?? '';
        const m    = cd.match(/filename="?([^"]+)"?/);
        this.triggerDownload(blob, m ? m[1] : 'blessing-config.zip');
        this.successMsg = 'Sauvegarde de configuration téléchargée avec succès';
      },
      error: (e) => { this.downloadingConfig = false; this.errorMsg = this.formatError(e, 'Erreur lors de la sauvegarde de configuration'); }
    });
  }

  onConfigFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedConfigFile   = input.files?.[0] ?? null;
    this.confirmRestoreConfig = false;
    this.clearMsgs();
  }

  askConfirmRestoreConfig(): void {
    if (!this.selectedConfigFile) { this.errorMsg = 'Sélectionnez un fichier ZIP de configuration'; return; }
    this.confirmRestoreConfig = true;
  }

  cancelRestoreConfig(): void {
    this.confirmRestoreConfig = false;
    this.selectedConfigFile   = null;
    const input = document.getElementById('restore-config-input') as HTMLInputElement;
    if (input) input.value = '';
  }

  doRestoreConfig(): void {
    if (!this.selectedConfigFile) return;
    this.restoringConfig      = true;
    this.confirmRestoreConfig = false;
    this.clearMsgs();
    const fd = new FormData();
    fd.append('file', this.selectedConfigFile);
    this.http.post<{ message?: string; error?: string }>(
      `${this.api}/config/restore?companyId=${this.companyId}`, fd, { headers: this.authHeaders }
    ).subscribe({
      next: (res) => { this.restoringConfig = false; this.selectedConfigFile = null; this.successMsg = res.message ?? 'Configuration restaurée avec succès'; },
      error: (e)  => { this.restoringConfig = false; this.errorMsg = this.formatError(e, 'Erreur lors de la restauration de configuration'); }
    });
  }

  // ── MAINTENANCE ────────────────────────────────────────────

  releaseReservations(): void {
    if (!confirm('Recalculer et libérer les réservations de stock orphelines ?\nCette action remet toutes les réservations à zéro puis les recalcule depuis les bons confirmés actifs.')) return;
    this.releasingReservations = true;
    this.clearMsgs();
    this.http.post<string>(
      `${this.salesApi}/fix-reservations?companyId=${this.companyId}`,
      null, { headers: this.authHeaders, responseType: 'text' as 'json' }
    ).subscribe({
      next: (msg) => { this.releasingReservations = false; this.successMsg = msg || 'Réservations libérées avec succès'; },
      error: (e)  => { this.releasingReservations = false; this.errorMsg = this.formatError(e, 'Erreur lors de la libération'); }
    });
  }

  releaseAllReservations(): void {
    if (!confirm('Libérer TOUTES les réservations de stock, sans recalcul ?\nÀ utiliser si le bouton précédent ne suffit pas à débloquer des réservations restées bloquées (bons ou factures qui ne peuvent plus être annulés). Cette action remet à zéro toutes les réservations, sans exception.')) return;
    this.releasingAllReservations = true;
    this.clearMsgs();
    this.http.post<string>(
      `${this.salesApi}/release-all-reservations?companyId=${this.companyId}`,
      null, { headers: this.authHeaders, responseType: 'text' as 'json' }
    ).subscribe({
      next: (msg) => { this.releasingAllReservations = false; this.successMsg = msg || 'Toutes les réservations ont été libérées'; },
      error: (e)  => { this.releasingAllReservations = false; this.errorMsg = this.formatError(e, 'Erreur lors de la libération'); }
    });
  }

  // ── UTILS ──────────────────────────────────────────────────

  private triggerDownload(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a   = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
  }

  private clearMsgs(): void { this.successMsg = ''; this.errorMsg = ''; }

  /** Priorité à err.error.message, puis err.error.error (forme des contrôleurs de ce fichier),
   *  plutôt que err.message, le texte brut Angular ("Http failure response for ... : 403 OK"),
   *  illisible pour l'utilisateur. Les requêtes en
   *  responseType:'text' reçoivent err.error comme une chaîne brute (pas un objet parsé) même
   *  pour une erreur JSON — on tente donc un JSON.parse avant de retomber sur la chaîne telle quelle. */
  private formatError(e: any, fallback: string): string {
    let body = e.error;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch { /* pas du JSON — on garde la chaîne brute */ }
    }
    const msg = (typeof body === 'object' && body ? (body.message || body.error) : body) || fallback;
    const contact = typeof body === 'object' && body
      ? [body.contactEmail, body.contactPhone].filter(Boolean).join(' / ')
      : '';
    return contact ? `${msg} (Contact : ${contact})` : msg;
  }
}
