import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditService, AuditEntry } from '../../services/audit.service';

export interface AuditLine {
  c: string;    // code compte
  n: string;    // nom compte
  d: string;    // débit (après)
  k: string;    // crédit (après)
  st?: 'added' | 'removed' | 'changed';
  od?: string;  // ancien débit (pour "changed")
  ok?: string;  // ancien crédit (pour "changed")
}

@Component({
  selector: 'app-audit-trail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audit-trail.component.html',
  styleUrl: './audit-trail.component.scss'
})
export class AuditTrailComponent implements OnChanges {
  @Input() entityType!: string;
  @Input() entityId!: number | null;

  entries: AuditEntry[] = [];
  loading = false;
  expanded = true;

  constructor(private auditService: AuditService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.entityType && this.entityId) {
      this.load();
    }
  }

  load(): void {
    if (!this.entityType || !this.entityId) return;
    this.loading = true;
    this.auditService.forEntity(this.entityType, this.entityId).subscribe({
      next: entries => { this.entries = entries; this.loading = false; },
      error: ()      => { this.loading = false; }
    });
  }

  toggle(): void { this.expanded = !this.expanded; }

  actionIcon(action: string): string {
    const map: Record<string, string> = {
      CREATED:          'add_circle',
      CONFIRMED:        'check_circle',
      CANCELLED:        'cancel',
      PAID:             'payments',
      PAYMENT_ADDED:    'payments',
      PAYMENT_REVERSED: 'money_off',
      VALIDATED:        'verified',
      POSTED:           'publish',
      REVERSED:         'undo',
      AVOIR_CREATED:    'receipt_long',
      CREDIT_APPLIED:   'balance',
      RECONCILED:       'link',
      UNRECONCILED:     'link_off',
      CLOTURE:             'lock',
      ENTREE:              'add',
      SORTIE:              'remove',
      RESET_TO_DRAFT:      'lock_open',
      LINES_MODIFIED:      'edit_note',
      RECEIVED:            'inventory_2',
      SESSION_OPENED:      'login',
      ADJUSTMENT_CREATED:  'tune',
      STATUS_CHANGED:      'swap_horiz',
      COMMENT_ADDED:       'comment',
      UPDATED:             'edit',
    };
    return map[action] ?? 'history';
  }

  actionClass(action: string): string {
    if (['CREATED'].includes(action))                                       return 'ac-create';
    if (['CONFIRMED', 'VALIDATED', 'POSTED', 'RECEIVED'].includes(action)) return 'ac-confirm';
    if (['CANCELLED', 'PAYMENT_REVERSED', 'UNRECONCILED'].includes(action)) return 'ac-cancel';
    if (['PAID', 'PAYMENT_ADDED'].includes(action))                        return 'ac-paid';
    if (['REVERSED', 'AVOIR_CREATED'].includes(action))                    return 'ac-reverse';
    if (['CREDIT_APPLIED', 'RECONCILED'].includes(action))                 return 'ac-reconcile';
    if (['CLOTURE'].includes(action))                                                   return 'ac-lock';
    if (['RESET_TO_DRAFT'].includes(action))                                           return 'ac-reset';
    if (['LINES_MODIFIED', 'ADJUSTMENT_CREATED', 'STATUS_CHANGED', 'UPDATED'].includes(action)) return 'ac-modified';
    if (['SESSION_OPENED'].includes(action))                                           return 'ac-create';
    return 'ac-default';
  }

  fmtDate(d: string): string {
    if (!d) return '—';
    return new Date(d).toLocaleString('fr-FR', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  }

  /** Format structuré {"type":"snapshot"|"diff","lines":[...]} → AuditLine[] */
  parseLines(raw: string | null): AuditLine[] | null {
    if (!raw) return null;
    try {
      const p = JSON.parse(raw);
      if (p && (p.type === 'snapshot' || p.type === 'diff') && Array.isArray(p.lines)) {
        return p.lines as AuditLine[];
      }
      return null;
    } catch { return null; }
  }

  /** Ancien format plat {"code":"label | D: x"} → paires clé/valeur (rétrocompatibilité) */
  parseChips(raw: string | null): { key: string; val: string }[] {
    if (!raw) return [];
    try {
      const p = JSON.parse(raw);
      if (!p || typeof p !== 'object' || Array.isArray(p) || p.lines || p.__t) return [];
      return Object.entries(p)
        .filter(([, v]) => v != null && v !== '')
        .map(([key, val]) => ({ key, val: String(val) }));
    } catch { return []; }
  }

  isZero(v: string | undefined): boolean {
    return !v || v === '0';
  }
}
