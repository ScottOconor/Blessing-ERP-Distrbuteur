import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EleaderService, EleaderImportLog } from '../../../services/eleader.service';
import { AuthService } from '../../../../../core/auth/auth.service';

@Component({
  selector: 'app-eleader-journal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './eleader-journal.component.html',
  styleUrl: './eleader-journal.component.scss'
})
export class EleaderJournalComponent implements OnInit {
  logs: EleaderImportLog[] = [];
  filtered: EleaderImportLog[] = [];
  loading = false;
  searchText = '';
  statusFilter = 'all';
  selectedLog: EleaderImportLog | null = null;
  showRawText = false;

  readonly STATUS_FILTERS = [
    { value: 'all',     label: 'Tous' },
    { value: 'success', label: 'Succès' },
    { value: 'error',   label: 'Erreur' },
    { value: 'warning', label: 'Avertissement' }
  ];

  constructor(
    private eleaderService: EleaderService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.eleaderService.getLogs(this.authService.getCompanyId()).subscribe({
      next: (logs) => { this.logs = logs; this.applyFilters(); this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  applyFilters(): void {
    let list = [...this.logs];
    if (this.statusFilter !== 'all') {
      list = list.filter(l => l.status === this.statusFilter);
    }
    if (this.searchText.trim()) {
      const q = this.searchText.trim().toLowerCase();
      list = list.filter(l =>
        l.reference?.toLowerCase().includes(q) ||
        l.eleaderReference?.toLowerCase().includes(q) ||
        l.clientName?.toLowerCase().includes(q) ||
        l.filename?.toLowerCase().includes(q) ||
        l.salesOrderName?.toLowerCase().includes(q)
      );
    }
    this.filtered = list;
  }

  openDetail(log: EleaderImportLog): void {
    this.selectedLog = log;
    this.showRawText = false;
  }

  goToOrder(name: string): void {
    this.router.navigate(['/sales/orders']);
  }

  goToImport(): void {
    this.router.navigate(['/sales/eleader/import']);
  }

  statusClass(s: string): string {
    return ({ success: 'badge-success', error: 'badge-error', warning: 'badge-warning',
              parsing: 'badge-info', creating: 'badge-info' } as any)[s] ?? 'badge-neutral';
  }

  statusLabel(s: string): string {
    return ({ success: 'Succès', error: 'Erreur', warning: 'Avertissement',
              parsing: 'Analyse…', creating: 'Création…' } as any)[s] ?? s;
  }

  countByStatus(status: string): number {
    return this.logs.filter(l => l.status === status).length;
  }

  modelBadge(m: string): string {
    return m === 'GUINNESS' ? 'badge-guinness' : 'badge-brasseries';
  }
}
