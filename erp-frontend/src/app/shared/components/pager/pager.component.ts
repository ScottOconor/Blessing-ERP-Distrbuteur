import { Component, EventEmitter, Input, Output } from '@angular/core';

/** Barre de pagination commune aux listes : première / précédente / page n sur N / suivante / dernière. */
@Component({
  selector: 'app-pager',
  standalone: true,
  template: `
    @if (totalPages > 1) {
      <div class="pager">
        <button type="button" class="pager-btn" (click)="go(0)" [disabled]="page === 0" title="Première page">
          <span class="material-icons">first_page</span>
        </button>
        <button type="button" class="pager-btn" (click)="go(page - 1)" [disabled]="page === 0" title="Page précédente">
          <span class="material-icons">chevron_left</span>
        </button>
        <span class="pager-info">Page {{ page + 1 }} / {{ totalPages }} ({{ total }} {{ label }})</span>
        <button type="button" class="pager-btn" (click)="go(page + 1)" [disabled]="page + 1 >= totalPages" title="Page suivante">
          <span class="material-icons">chevron_right</span>
        </button>
        <button type="button" class="pager-btn" (click)="go(totalPages - 1)" [disabled]="page + 1 >= totalPages" title="Dernière page">
          <span class="material-icons">last_page</span>
        </button>
      </div>
    }
  `,
  styles: [`
    .pager { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 14px 16px; border-top: 1px solid var(--border, #e5e7eb); }
    .pager-btn {
      width: 32px; height: 32px; border-radius: 6px; background: var(--bg-surface, #fff); border: 1px solid var(--border, #e5e7eb);
      display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.15s; color: inherit;
      .material-icons { font-size: 18px; }
      &:hover:not(:disabled) { background: #EDE9FE; color: #7C3AED; border-color: #C4B5FD; }
      &:disabled { opacity: 0.4; cursor: not-allowed; }
    }
    .pager-info { font-size: 13px; color: var(--text-muted, #6b7280); }
  `]
})
export class PagerComponent {
  @Input() page = 0;
  @Input() size = 50;
  @Input() total = 0;
  /** Nom des lignes affiché dans le compteur (« pièces », « factures »…). */
  @Input() label = 'lignes';
  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number { return Math.max(1, Math.ceil(this.total / this.size)); }

  go(p: number): void {
    if (p < 0 || p >= this.totalPages || p === this.page) return;
    this.pageChange.emit(p);
  }
}
