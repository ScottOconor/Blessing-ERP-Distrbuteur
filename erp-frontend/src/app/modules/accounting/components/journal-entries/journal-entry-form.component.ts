import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AccountingService } from '../../services/accounting.service';
import { AnalyticService, AnalyticAccount } from '../../services/analytic.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountMove, AccountMoveLine } from '../../../../core/models/move.model';
import { AccountAccount, AccountJournal, Partner } from '../../../../core/models/account.model';
import { AuditFooterComponent } from '../../../../shared/components/audit-footer/audit-footer.component';
import { AuditTrailComponent } from '../../../../shared/components/audit-trail/audit-trail.component';
import { AmountInputDirective } from '../../../../shared/directives/amount-input.directive';

interface AnalyticDistributionForm {
  analyticAccountId: number | null;
  parentAnalyticId: number | null;
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
  imports: [CommonModule, FormsModule, AuditFooterComponent, AuditTrailComponent, AmountInputDirective],
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
  resettingToDraft = false;
  isNew = true;
  errorMsg = '';
  successMsg = '';

  // Solde du compte lié au journal (caisse/banque uniquement)
  currentJournal: AccountJournal | null = null;
  journalAccountCode: string | null = null;
  journalAccountName: string | null = null;
  journalAccountId: number | null = null;
  journalOpeningBalance: number | null = null;

  get isBalanceJournal(): boolean {
    return this.currentJournal?.type === 'cash' || this.currentJournal?.type === 'bank';
  }

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
    const idStr = this.route.snapshot.paramMap.get('id');

    if (idStr && idStr !== 'new') {
      this.isNew = false;
      this.loading = true;
      const companyId = this.authService.getCompanyId();
      // Load reference data AND the move in parallel so accounts are ready before lineToForm() runs
      forkJoin({
        journals: this.accountingService.getJournals(companyId),
        accounts: this.accountingService.getAccounts(companyId),
        partners: this.accountingService.getPartners(companyId),
        analyticAccounts: this.analyticService.getAccounts(companyId),
        move: this.accountingService.getMove(parseInt(idStr))
      }).subscribe({
        next: ({ journals, accounts, partners, analyticAccounts, move }) => {
          this.journals = journals.filter((x: any) => x.active);
          this.accounts = accounts.filter((x: any) => !x.deprecated);
          this.partners = partners;
          this.analyticAccounts = analyticAccounts;
          this.move = move;
          this.lines = move.lines.map((l: any) => this.lineToForm(l));
          if (this.lines.length === 0) this.addLine();
          this.loading = false;
          this.onJournalChange();
        },
        error: () => {
          this.loading = false;
          this.errorMsg = 'Pièce introuvable';
        }
      });
    } else {
      // Lire le journalId depuis les query params (navigation depuis la fiche journal)
      const qJournalId = this.route.snapshot.queryParamMap.get('journalId');
      if (qJournalId) this.move.journalId = +qJournalId;
      this.loadReferenceData();
      this.addLine();
      this.addLine();
      if (this.move.journalId) this.onJournalChange();
    }
  }

  loadReferenceData(): void {
    const companyId = this.authService.getCompanyId();
    this.accountingService.getJournals(companyId).subscribe({
      next: (j) => {
        this.journals = j.filter(x => x.active);
        // Pré-sélectionner uniquement si aucun journal déjà défini (ex. depuis query param)
        if (!this.move.journalId && this.journals.length > 0) {
          this.move.journalId = this.journals[0].id!;
        }
        if (this.move.journalId) this.onJournalChange();
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
        this.onJournalChange();
      },
      error: () => {
        this.loading = false;
        this.errorMsg = 'Pièce introuvable';
      }
    });
  }

  lineToForm(line: AccountMoveLine): LineForm {
    const acc = this.accounts.find(a => a.id === line.accountId);
    const distributions: AnalyticDistributionForm[] = (line as any).analyticDistributions
      ? (line as any).analyticDistributions.map((d: any) => {
          const analyticAcc = this.analyticAccounts.find(a => a.id === d.analyticAccountId);
          return {
            analyticAccountId: d.analyticAccountId,
            parentAnalyticId: analyticAcc?.parentId || null,
            amount: Number(d.amount)
          };
        })
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

  onJournalChange(): void {
    if (!this.move.journalId) return;
    this.currentJournal = this.journals.find(j => j.id === this.move.journalId) || null;
    this.journalOpeningBalance = null;
    this.journalAccountId = null;
    if (!this.isBalanceJournal) return;
    // Pour une pièce existante (move.id défini), on exclut ses lignes du solde
    // → on obtient le solde AVANT cette pièce (= solde initial correct).
    // Pour une nouvelle pièce (move.id undefined), pas d'exclusion → solde courant.
    const excludeMoveId = this.move.id ?? undefined;
    this.accountingService.getJournalAccountBalance(this.move.journalId, excludeMoveId).subscribe({
      next: (data) => {
        this.journalAccountCode = data.accountCode;
        this.journalAccountName = data.accountName;
        this.journalAccountId = data.accountId;
        this.journalOpeningBalance = data.balance;
      },
      error: () => { this.journalOpeningBalance = null; }
    });
  }

  /** Impact de l'écriture en cours sur le compte du journal */
  get journalAccountImpact(): number {
    if (this.journalAccountId === null) return 0;
    return this.lines.reduce((sum, l) => {
      if (l.accountId === this.journalAccountId) {
        sum += (Number(l.debit) || 0) - (Number(l.credit) || 0);
      }
      return sum;
    }, 0);
  }

  get journalFinalBalance(): number | null {
    if (this.journalOpeningBalance === null) return null;
    return this.journalOpeningBalance + this.journalAccountImpact;
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
        const analyticAcc = this.analyticAccounts.find(a => a.id === line.analyticAccountId);
        line.analyticDistributions = [{ analyticAccountId: line.analyticAccountId, parentAnalyticId: analyticAcc?.parentId || null, amount: lineAmount }];
      } else {
        line.analyticDistributions = [{ analyticAccountId: null, parentAnalyticId: null, amount: lineAmount > 0 ? lineAmount : 0 }];
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

  get parentAnalyticAccounts(): AnalyticAccount[] {
    return this.analyticAccounts.filter(a => !a.parentId);
  }

  getChildAnalyticAccounts(parentId: number | null): AnalyticAccount[] {
    if (!parentId) return [];
    return this.analyticAccounts.filter(a => a.parentId === parentId);
  }

  onParentAnalyticChange(dist: AnalyticDistributionForm): void {
    const children = this.getChildAnalyticAccounts(dist.parentAnalyticId);
    if (children.length === 0) {
      // Pas d'enfants : utiliser le compte parent directement
      dist.analyticAccountId = dist.parentAnalyticId;
    } else {
      dist.analyticAccountId = null;
    }
  }

  addDistributionRow(line: LineForm): void {
    const remaining = this.getRemaining(line);
    const lastRow = line.analyticDistributions[line.analyticDistributions.length - 1];
    // Hériter du parent de la dernière ligne pour éviter de le re-sélectionner
    const inheritedParentId = lastRow?.parentAnalyticId ?? null;
    line.analyticDistributions.push({
      analyticAccountId: null,
      parentAnalyticId: inheritedParentId,
      amount: remaining > 0 ? remaining : 0
    });
  }

  splitEqually(line: LineForm): void {
    const total = this.getLineAmount(line);
    const count = line.analyticDistributions.length;
    if (count === 0) return;
    const share = Math.floor((total / count) * 100) / 100;
    const remainder = Math.round((total - share * count) * 100) / 100;
    line.analyticDistributions.forEach((d, i) => {
      d.amount = i === count - 1 ? share + remainder : share;
    });
  }

  getDistributionPercent(line: LineForm, dist: AnalyticDistributionForm): number {
    const total = this.getLineAmount(line);
    if (!total) return 0;
    return Math.round((Number(dist.amount) / total) * 100);
  }

  getDistributedPercent(line: LineForm): number {
    const total = this.getLineAmount(line);
    if (!total) return 0;
    return Math.min(100, Math.round((this.getDistributedTotal(line) / total) * 100));
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

  /** Tout compte avec un code peut avoir une ventilation analytique */
  isChargeAccount(line: LineForm): boolean {
    return !!line.accountCode;
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
    if (lines.length < 2) {
      this.errorMsg = "La pièce doit avoir au moins 2 lignes (partie double)";
      return;
    }

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
        this.successMsg = 'Pièce sauvegardée avec succès';
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
    if (!this.isBalanced) {
      this.errorMsg = `La pièce n'est pas équilibrée — débit : ${this.totalDebit.toFixed(2)}, crédit : ${this.totalCredit.toFixed(2)}`;
      return;
    }
    if (!this.move.id) { this.save(); return; }
    if (!confirm('Valider cette pièce ? Cette action est irréversible.')) return;

    this.posting = true;
    this.accountingService.postMove(this.move.id!).subscribe({
      next: (posted) => {
        this.posting = false;
        this.move = posted;
        this.lines = posted.lines.map(l => this.lineToForm(l));
        this.successMsg = 'Pièce validée avec succès !';
        setTimeout(() => this.successMsg = '', 3000);
      },
      error: (err) => {
        this.posting = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la validation';
      }
    });
  }

  reverse(): void {
    if (!this.move.id) return;
    if (!confirm('Extourner cette pièce ? Une pièce inverse validée sera créée.')) return;
    this.accountingService.reverseMove(this.move.id!).subscribe({
      next: (reversed) => {
        this.successMsg = `Extourne ${reversed.name} créée`;
        setTimeout(() => this.router.navigate(['/accounting/journal-entries', reversed.id]), 800);
      },
      error: (err) => { this.errorMsg = err.error?.message || 'Erreur lors de l\'extourne'; }
    });
  }

  resetToDraft(): void {
    if (!this.move.id) return;
    if (!confirm('Remettre cette pièce en brouillon ? Elle pourra être modifiée puis revalidée.')) return;
    this.resettingToDraft = true;
    this.accountingService.resetMoveToDraft(this.move.id!).subscribe({
      next: (updated) => {
        this.resettingToDraft = false;
        this.move = updated;
        this.lines = updated.lines.map(l => this.lineToForm(l));
        this.successMsg = 'Pièce remise en brouillon.';
        setTimeout(() => this.successMsg = '', 3000);
      },
      error: (err) => {
        this.resettingToDraft = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la remise en brouillon';
      }
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
