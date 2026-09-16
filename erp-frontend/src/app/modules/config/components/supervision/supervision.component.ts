import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuditService, AuditEntry, AuditPage } from '../../../../shared/services/audit.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-supervision',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supervision.component.html',
  styleUrl: './supervision.component.scss'
})
export class SupervisionComponent implements OnInit {

  logs: AuditEntry[] = [];
  loading = false;
  totalElements = 0;
  totalPages = 0;
  currentPage = 0;
  pageSize = 25;

  // Filtres
  filterOperator = '';
  filterEntityType = '';
  filterFrom = '';
  filterTo = '';

  private companyId = 0;

  readonly entityTypeLabels: Record<string, string> = {
    SALE_INVOICE:     'Facture vente',
    PURCHASE_INVOICE: 'Facture achat',
    STOCK_PICKING:    'Mouvement stock',
    ACCOUNT_MOVE:     'Écriture comptable',
    CAISSE:           'Caisse',
  };

  readonly actionLabels: Record<string, string> = {
    CREATED:          'Créé',
    CONFIRMED:        'Validé',
    CANCELLED:        'Annulé',
    PAYMENT_ADDED:    'Règlement ajouté',
    PAYMENT_REVERSED: 'Règlement annulé',
    POSTED:           'Comptabilisé',
    REVERSED:         'Extourné',
    VALIDATED:        'Validé (stock)',
    AVOIR_CREATED:    'Avoir créé',
    CREDIT_APPLIED:   'Avoir compensé',
    RECONCILED:       'Lettrage',
    UNRECONCILED:     'Délettrage',
    ENTREE:           'Entrée caisse',
    SORTIE:           'Sortie caisse',
    CLOTURE:          'Clôture caisse',
  };

  constructor(
    private auditService: AuditService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId();
    // Date du jour par défaut dans filterTo, 30 jours en arrière dans filterFrom
    const today = new Date();
    const past = new Date(today);
    past.setDate(past.getDate() - 30);
    this.filterTo   = today.toISOString().split('T')[0];
    this.filterFrom = past.toISOString().split('T')[0];
    this.search();
  }

  search(resetPage = true): void {
    if (resetPage) this.currentPage = 0;
    this.loading = true;
    this.auditService.search(this.companyId, {
      operator:   this.filterOperator   || undefined,
      entityType: this.filterEntityType || undefined,
      from:       this.filterFrom       || undefined,
      to:         this.filterTo         || undefined,
      page:       this.currentPage,
      size:       this.pageSize,
    }).subscribe({
      next: (page: AuditPage) => {
        this.logs          = page.content;
        this.totalElements = page.totalElements;
        this.totalPages    = page.totalPages;
        this.loading       = false;
      },
      error: () => { this.loading = false; }
    });
  }

  goPage(p: number): void {
    if (p < 0 || p >= this.totalPages) return;
    this.currentPage = p;
    this.search(false);
  }

  reset(): void {
    this.filterOperator = '';
    this.filterEntityType = '';
    const today = new Date();
    const past  = new Date(today);
    past.setDate(past.getDate() - 30);
    this.filterTo   = today.toISOString().split('T')[0];
    this.filterFrom = past.toISOString().split('T')[0];
    this.search();
  }

  entityLabel(type: string): string {
    return this.entityTypeLabels[type] ?? type;
  }

  actionLabel(action: string): string {
    return this.actionLabels[action] ?? action;
  }

  actionClass(action: string): string {
    switch (action) {
      case 'CREATED':          return 'ac-create';
      case 'CONFIRMED':
      case 'POSTED':
      case 'VALIDATED':        return 'ac-confirm';
      case 'CANCELLED':
      case 'PAYMENT_REVERSED':
      case 'UNRECONCILED':     return 'ac-cancel';
      case 'PAYMENT_ADDED':    return 'ac-paid';
      case 'REVERSED':
      case 'AVOIR_CREATED':    return 'ac-reverse';
      case 'CREDIT_APPLIED':
      case 'RECONCILED':       return 'ac-reconcile';
      case 'ENTREE':           return 'ac-entree';
      case 'SORTIE':           return 'ac-sortie';
      case 'CLOTURE':          return 'ac-lock';
      default:                 return 'ac-default';
    }
  }

  parseDetails(raw: string | null): Record<string, string> | null {
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }

  fmtDate(d: string): string {
    const dt = new Date(d);
    return dt.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })
      + ' ' + dt.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }

  get pages(): number[] {
    const total = this.totalPages;
    const cur   = this.currentPage;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i);
    const pages: number[] = [0];
    if (cur > 2)  pages.push(-1);
    for (let i = Math.max(1, cur - 1); i <= Math.min(total - 2, cur + 1); i++) pages.push(i);
    if (cur < total - 3) pages.push(-1);
    pages.push(total - 1);
    return pages;
  }
}
