import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountingService } from '../../services/accounting.service';
import { AnalyticService, AnalyticAccount } from '../../services/analytic.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountMove, AccountMoveLine } from '../../../../core/models/move.model';
import { AccountAccount, AccountJournal, Partner } from '../../../../core/models/account.model';

interface AnalyticDistributionForm {
  analyticAccountId: number | null;
  amount: number;
}

interface LineForm {
  id?: number;
  accountId: number | null;
  accountSearch: string;
  accountCode: string;
  accountName: string;
  showAccountSuggestions: boolean;
  accountSuggestions: AccountAccount[];
  name: string;
  partnerId: number | null;
  partnerName: string;
  debit: number;
  credit: number;
  analyticAccountId: number | null;
  analyticDistributions: AnalyticDistributionForm[];
}

@Component({
  selector: 'app-journal-entry-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './journal-entry-form.component.html',
  styleUrl: './journal-entry-form.component.scss'
})
export class JournalEntryFormComponent implements OnInit {
  move: AccountMove = {
    date: new Date().toISOString().split('T')[0],
    journalId: 0,
    companyId: 1,
    lines: [],
    state: 'draft'
  };

  lines: LineForm[] = [];
  journals: AccountJournal[] = [];
  accounts: AccountAccount[] = [];
  partners: Partner[] = [];
  analyticAccounts: AnalyticAccount[] = [];

  loading = false;
  saving = false;
  posting = false;
  isNew = true;
  errorMsg = '';
  successMsg = '';

  // Fenêtre flottante de ventilation analytique
  analyticModalIndex: number | null = null;

  // Exposer Math pour le template
  readonly Math = Math;

  constructor(
    private accountingService: AccountingService,
    private analyticService: AnalyticService,
    private authService: AuthService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.move.companyId = this.authService.getCompanyId();
    this.loadReferenceData();

    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      this.isNew = false;
      this.loadMove(parseInt(id));
    } else {
      this.addLine();
      this.addLine();
    }
  }

  loadReferenceData(): void {
    const companyId = this.authService.getCompanyId();
    this.accountingService.getJournals(companyId).subscribe({
      next: (j) => {
        this.journals = j.filter(x => x.active);
        if (!this.move.journalId && this.journals.length > 0) {
          this.move.journalId = this.journals[0].id!;
        }
      },
      error: () => {}
    });
    this.accountingService.getAccounts(companyId).subscribe({
      next: (a) => this.accounts = a.filter(x => !x.deprecated),
      error: () => {}
    });
    this.accountingService.getPartners(companyId).subscribe({
      next: (p) => this.partners = p,
      error: () => {}
    });
    this.analyticService.getAccounts(companyId).subscribe({
      next: (a) => this.analyticAccounts = a,
      error: () => {}
    });
  }

  loadMove(id: number): void {
    this.loading = true;
    this.accountingService.getMove(id).subscribe({
      next: (move) => {
        this.move = move;
        this.lines = move.lines.map(l => this.lineToForm(l));
        if (this.lines.length === 0) this.addLine();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.errorMsg = 'Écriture introuvable';
      }
    });
  }

  lineToForm(line: AccountMoveLine): LineForm {
    const acc = this.accounts.find(a => a.id === line.accountId);
    const distributions: AnalyticDistributionForm[] = (line as any).analyticDistributions
      ? (line as any).analyticDistributions.map((d: any) => ({
          analyticAccountId: d.analyticAccountId,
          amount: Number(d.amount)
        }))
      : [];
    return {
      id: line.id,
      accountId: line.accountId,
      accountSearch: acc ? `${acc.code} - ${acc.name}` : String(line.accountId),
      accountCode: acc?.code || line.accountCode || '',
      accountName: acc?.name || line.accountName || '',
      showAccountSuggestions: false,
      accountSuggestions: [],
      name: line.name,
      partnerId: line.partnerId || null,
      partnerName: line.partnerName || '',
      debit: line.debit,
      credit: line.credit,
      analyticAccountId: line.analyticAccountId || null,
      analyticDistributions: distributions
    };
  }

  addLine(): void {
    this.lines.push({
      accountId: null,
      accountSearch: '',
      accountCode: '',
      accountName: '',
      showAccountSuggestions: false,
      accountSuggestions: [],
      name: '',
      partnerId: null,
      partnerName: '',
      debit: 0,
      credit: 0,
      analyticAccountId: null,
      analyticDistributions: []
    });
  }

  removeLine(index: number): void {
    if (this.lines.length > 1) {
      this.lines.splice(index, 1);
      if (this.analyticModalIndex === index) this.analyticModalIndex = null;
    }
  }

  // ===== AUTOCOMPLETE COMPTE =====

  onAccountSearch(line: LineForm): void {
    const term = line.accountSearch.toLowerCase().trim();
    if (term.length < 1) {
      line.accountSuggestions = [];
      line.showAccountSuggestions = false;
      return;
    }
    line.accountSuggestions = this.accounts.filter(a =>
      a.code.toLowerCase().startsWith(term) || a.name.toLowerCase().includes(term)
    ).slice(0, 10);
    line.showAccountSuggestions = line.accountSuggestions.length > 0;
  }

  selectAccount(line: LineForm, account: AccountAccount): void {
    line.accountId = account.id!;
    line.accountCode = account.code;
    line.accountName = account.name;
    line.accountSearch = `${account.code} - ${account.name}`;
    line.showAccountSuggestions = false;
    line.accountSuggestions = [];
    if (!line.name) line.name = account.name;
  }

  hideAccountSuggestions(line: LineForm): void {
    setTimeout(() => { line.showAccountSuggestions = false; }, 200);
  }

  // ===== DÉBIT / CRÉDIT =====

  onDebitChange(line: LineForm): void {
    if (line.debit > 0) line.credit = 0;
  }

  onCreditChange(line: LineForm): void {
    if (line.credit > 0) line.debit = 0;
  }

  get totalDebit(): number {
    return this.lines.reduce((s, l) => s + (Number(l.debit) || 0), 0);
  }

  get totalCredit(): number {
    return this.lines.reduce((s, l) => s + (Number(l.credit) || 0), 0);
  }

  get difference(): number {
    return Math.abs(this.totalDebit - this.totalCredit);
  }

  get isBalanced(): boolean {
    return Math.abs(this.totalDebit - this.totalCredit) < 0.001;
  }

  autoBalance(): void {
    const diff = this.totalDebit - this.totalCredit;
    if (Math.abs(diff) < 0.001) return;
    this.lines.push({
      accountId: null,
      accountSearch: '',
      accountCode: '',
      accountName: '',
      showAccountSuggestions: false,
      accountSuggestions: [],
      name: "Ligne d'équilibre",
      partnerId: null,
      partnerName: '',
      debit: diff < 0 ? -diff : 0,
      credit: diff > 0 ? diff : 0,
      analyticAccountId: null,
      analyticDistributions: []
    });
  }

  // ===== VENTILATION ANALYTIQUE =====

  openAnalyticModal(index: number): void {
    this.analyticModalIndex = index;
    const line = this.lines[index];
    // Si aucune distribution encore et un compte sélectionné → pré-remplir
    if (line.analyticDistributions.length === 0) {
      const lineAmount = Number(line.debit) > 0 ? Number(line.debit) : Number(line.credit);
      if (line.analyticAccountId && lineAmount > 0) {
        line.analyticDistributions = [{ analyticAccountId: line.analyticAccountId, amount: lineAmount }];
      } else {
        line.analyticDistributions = [{ analyticAccountId: null, amount: lineAmount > 0 ? lineAmount : 0 }];
      }
    }
  }

  closeAnalyticModal(): void {
    this.analyticModalIndex = null;
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.analyticModalIndex = null;
  }

  addDistributionRow(line: LineForm): void {
    line.analyticDistributions.push({ analyticAccountId: null, amount: 0 });
  }

  removeDistributionRow(line: LineForm, i: number): void {
    line.analyticDistributions.splice(i, 1);
  }

  getLineAmount(line: LineForm): number {
    return Number(line.debit) > 0 ? Number(line.debit) : Number(line.credit);
  }

  getDistributedTotal(line: LineForm): number {
    return line.analyticDistributions.reduce((s, d) => s + (Number(d.amount) || 0), 0);
  }

  getRemaining(line: LineForm): number {
    return Math.round((this.getLineAmount(line) - this.getDistributedTotal(line)) * 100) / 100;
  }

  isDistributionValid(line: LineForm): boolean {
    const rem = this.getRemaining(line);
    return Math.abs(rem) < 0.01 && line.analyticDistributions.every(d => d.analyticAccountId !== null);
  }

  autoFillRemaining(line: LineForm, i: number): void {
    const rem = this.getRemaining(line);
    if (Math.abs(rem) > 0 && line.analyticDistributions[i]) {
      line.analyticDistributions[i].amount = (Number(line.analyticDistributions[i].amount) || 0) + rem;
    }
  }

  confirmDistribution(line: LineForm): void {
    // Mettre à jour le compte analytique principal avec le premier compte de la ventilation
    if (line.analyticDistributions.length > 0 && line.analyticDistributions[0].analyticAccountId) {
      line.analyticAccountId = line.analyticDistributions[0].analyticAccountId;
    }
    this.analyticModalIndex = null;
  }

  clearDistributions(line: LineForm): void {
    line.analyticDistributions = [];
    line.analyticAccountId = null;
  }

  getDistributionSummary(line: LineForm): string {
    if (line.analyticDistributions.length === 0) return '';
    if (line.analyticDistributions.length === 1) {
      const acc = this.analyticAccounts.find(a => a.id === line.analyticDistributions[0].analyticAccountId);
      return acc ? acc.name : '';
    }
    return `${line.analyticDistributions.length} comptes`;
  }

  getAnalyticLabel(id: number | null): string {
    if (!id) return '';
    const a = this.analyticAccounts.find(x => x.id === id);
    return a ? `${a.code} — ${a.name}` : '';
  }

  // ===== SAUVEGARDE =====

  formToLines(): AccountMoveLine[] {
    return this.lines
      .filter(l => l.accountId !== null)
      .map(l => ({
        id: l.id,
        accountId: l.accountId!,
        accountCode: l.accountCode,
        accountName: l.accountName,
        partnerId: l.partnerId || undefined,
        partnerName: l.partnerName || undefined,
        name: l.name || '',
        debit: Number(l.debit) || 0,
        credit: Number(l.credit) || 0,
        analyticAccountId: l.analyticDistributions.length > 0
          ? (l.analyticDistributions[0].analyticAccountId || l.analyticAccountId)
          : l.analyticAccountId,
        analyticDistributions: l.analyticDistributions
          .filter(d => d.analyticAccountId !== null && Number(d.amount) > 0)
          .map(d => ({ analyticAccountId: d.analyticAccountId!, amount: Number(d.amount) }))
      } as any));
  }

  save(): void {
    this.errorMsg = '';
    if (!this.move.journalId) { this.errorMsg = 'Sélectionnez un journal'; return; }
    if (!this.move.date) { this.errorMsg = 'Sélectionnez une date'; return; }
    const lines = this.formToLines();
    if (lines.length < 2) { this.errorMsg = "L'écriture doit avoir au moins 2 lignes"; return; }

    this.saving = true;
    const moveData: AccountMove = { ...this.move, lines };

    const obs = this.isNew
      ? this.accountingService.createMove(moveData)
      : this.accountingService.updateMove(this.move.id!, moveData);

    obs.subscribe({
      next: (saved) => {
        this.saving = false;
        this.move = saved;
        this.lines = saved.lines.map(l => this.lineToForm(l));
        this.successMsg = 'Écriture sauvegardée avec succès';
        setTimeout(() => this.successMsg = '', 3000);
        if (this.isNew) {
          this.isNew = false;
          this.router.navigate(['/accounting/journal-entries', saved.id]);
        }
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la sauvegarde';
      }
    });
  }

  post(): void {
    if (!this.isBalanced) { this.errorMsg = "L'écriture doit être équilibrée (débit = crédit)"; return; }
    if (!this.move.id) { this.save(); return; }
    if (!confirm('Valider cette écriture ? Cette action est irréversible.')) return;

    this.posting = true;
    this.accountingService.postMove(this.move.id!).subscribe({
      next: (posted) => {
        this.posting = false;
        this.move = posted;
        this.lines = posted.lines.map(l => this.lineToForm(l));
        this.successMsg = 'Écriture validée avec succès !';
        setTimeout(() => this.successMsg = '', 3000);
      },
      error: (err) => {
        this.posting = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la validation';
      }
    });
  }

  cancel(): void {
    if (!this.move.id) return;
    if (!confirm('Annuler cette écriture ?')) return;
    this.accountingService.cancelMove(this.move.id!).subscribe({
      next: (cancelled) => { this.move = cancelled; },
      error: (err) => { this.errorMsg = err.error?.message || 'Erreur'; }
    });
  }

  get isReadonly(): boolean {
    return this.move.state === 'posted' || this.move.state === 'cancel';
  }

  getStateLabel(state?: string): string {
    const map: Record<string, string> = { draft: 'Brouillon', posted: 'Validé', cancel: 'Annulé' };
    return map[state || ''] || '';
  }

  getStateBadgeClass(state?: string): string {
    const map: Record<string, string> = { draft: 'badge-draft', posted: 'badge-posted', cancel: 'badge-cancel' };
    return 'badge ' + (map[state || ''] || 'badge-secondary');
  }

  trackByIndex(index: number): number {
    return index;
  }
}
