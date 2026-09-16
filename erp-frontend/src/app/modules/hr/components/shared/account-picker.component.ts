import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { AccountAccount } from '../../../../core/models/account.model';

/**
 * Champ de saisie d'un compte OHADA avec autocomplétion : on tape le code (ou un mot du libellé),
 * une liste de comptes correspondants s'affiche, et le nom du compte résolu est toujours visible
 * sous le champ pour confirmer qu'on pointe sur le bon compte.
 */
@Component({
  selector: 'app-account-picker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="acc-picker">
      <input [ngModel]="code" (ngModelChange)="onCodeChange($event)"
             (focus)="open = true" (blur)="onBlur()" placeholder="Code ou libellé…" autocomplete="off">
      @if (open && suggestions.length > 0) {
        <div class="acc-dropdown">
          @for (a of suggestions; track a.code) {
            <div class="acc-opt" (mousedown)="select(a)">
              <code>{{ a.code }}</code><span>{{ a.name }}</span>
            </div>
          }
        </div>
      }
      @if (code) {
        <div class="acc-resolved" [class.acc-missing]="!resolvedName">
          {{ resolvedName || 'Compte introuvable dans le plan comptable' }}
        </div>
      }
    </div>
  `,
  styles: [`
    /*
     * Composant standalone : Angular encapsule les styles par composant, donc la classe
     * globale ".in" définie dans hr-shared.scss (chargée par le PARENT) n'atteint jamais ce
     * template enfant. On redéfinit ici, en autonome, exactement le même style de champ que
     * le reste des formulaires RH pour rester visuellement cohérent.
     */
    .acc-picker { position: relative; width: 100%; }
    .acc-picker input {
      width: 100%; padding: 9px 11px; border: 1px solid var(--border); border-radius: var(--radius-sm);
      font-size: .9rem; background: var(--bg-surface); color: var(--text-primary);
      font-family: inherit; transition: var(--ease); outline: none; box-sizing: border-box;
    }
    .acc-picker input:focus { border-color: var(--border-focus); box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1); }
    .acc-dropdown {
      position: absolute; top: 100%; left: 0; right: 0; z-index: 50;
      background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-sm);
      box-shadow: 0 8px 24px rgba(0,0,0,.18); max-height: 220px; overflow-y: auto; margin-top: 2px;
    }
    .acc-opt { display: flex; gap: 10px; padding: 7px 10px; cursor: pointer; font-size: .82rem; }
    .acc-opt:hover { background: var(--bg-elevated); }
    .acc-opt code { color: #7C3AED; font-weight: 700; min-width: 60px; }
    .acc-opt span { color: var(--text-primary); }
    .acc-resolved { font-size: .76rem; color: var(--text-muted); margin-top: 3px; }
    .acc-resolved.acc-missing { color: #ef4444; }
  `]
})
export class AccountPickerComponent implements OnInit, OnChanges {
  private _code = '';
  @Input() set code(value: string | undefined) { this._code = value ?? ''; this.resolveName(); }
  get code(): string { return this._code; }

  @Input() companyId!: number;
  @Output() codeChange = new EventEmitter<string>();

  private accounts: AccountAccount[] = [];
  suggestions: AccountAccount[] = [];
  resolvedName = '';
  open = false;

  constructor(private accountingService: AccountingService) {}

  ngOnInit(): void {
    this.accountingService.getAccounts(this.companyId).subscribe(a => {
      this.accounts = a;
      this.resolveName();
    });
  }

  ngOnChanges(): void { this.resolveName(); }

  private resolveName(): void {
    const found = this.accounts.find(a => a.code === this.code);
    this.resolvedName = found ? found.name : '';
  }

  onCodeChange(value: string): void {
    this._code = value ?? '';
    this.codeChange.emit(this._code);
    this.resolveName();
    const q = this._code.trim().toLowerCase();
    if (!q) { this.suggestions = []; return; }
    this.suggestions = this.accounts
      .filter(a => a.code.toLowerCase().includes(q) || a.name.toLowerCase().includes(q))
      .slice(0, 20);
  }

  select(a: AccountAccount): void {
    this.code = a.code;
    this.codeChange.emit(a.code);
    this.resolveName();
    this.open = false;
  }

  onBlur(): void { setTimeout(() => this.open = false, 150); }
}
