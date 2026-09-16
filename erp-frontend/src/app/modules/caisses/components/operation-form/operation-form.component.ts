import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { CaisseService, CaisseDTO, AddOperationRequest } from '../../services/caisse.service';
import { Partner } from '../../../../core/models/account.model';
import { AmountInputDirective } from '../../../../shared/directives/amount-input.directive';

@Component({
  selector: 'app-operation-form',
  standalone: true,
  imports: [CommonModule, FormsModule, AmountInputDirective],
  templateUrl: './operation-form.component.html',
  styleUrl: './operation-form.component.scss'
})
export class OperationFormComponent implements OnInit {
  type: 'ENTREE' | 'SORTIE' = 'ENTREE';
  caisses: CaisseDTO[] = [];
  accounts: any[] = [];
  filteredAccounts: any[] = [];
  partners: Partner[] = [];
  filteredPartners: Partner[] = [];
  companyId = 0;
  saving = false;
  loading = true;

  get selectedCaisse(): CaisseDTO | undefined {
    return this.caisses.find(c => c.id === this.form.caisseId);
  }

  form: AddOperationRequest = {
    caisseId: 0,
    companyId: 0,
    type: 'ENTREE',
    montant: 0,
    date: new Date().toISOString().split('T')[0],
    libelle: '',
    reference: '',
    tiersName: '',
    compteContrepartieId: 0
  };

  // Autocomplete — compte de contrepartie
  accountSearch = '';
  showAccountDrop = false;

  // Autocomplete — tiers (partenaire)
  tiersSearch = '';
  showTiersDrop = false;

  constructor(
    private caisseService: CaisseService,
    private accountingService: AccountingService,
    private authService: AuthService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId() ?? 0;
    this.form.companyId = this.companyId;

    const url = this.router.url;
    this.type = url.includes('sorties') ? 'SORTIE' : 'ENTREE';
    this.form.type = this.type;

    this.route.queryParams.subscribe(params => {
      if (params['caisseId']) this.form.caisseId = +params['caisseId'];
    });

    this.loadCaisses();
    this.loadAccounts();
    this.loadPartners();
  }

  loadCaisses(): void {
    this.caisseService.getCaisses(this.companyId).subscribe({
      next: data => {
        this.caisses = data.filter(c => c.status === 'OUVERTE');
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  loadAccounts(): void {
    this.accountingService.getAccounts(this.companyId).subscribe({
      next: (data: any[]) => {
        this.accounts = data.filter((a: any) => !a.deprecated);
        this.filteredAccounts = this.accounts.slice(0, 30);
      }
    });
  }

  loadPartners(): void {
    this.accountingService.getPartners(this.companyId).subscribe({
      next: (data: Partner[]) => {
        this.partners = data;
        this.filteredPartners = data.slice(0, 20);
      }
    });
  }

  // ── Autocomplete compte ──
  filterAccounts(): void {
    const q = this.accountSearch.toLowerCase();
    this.filteredAccounts = q
      ? this.accounts.filter(a =>
          a.code.toLowerCase().includes(q) || a.name.toLowerCase().includes(q)
        ).slice(0, 30)
      : this.accounts.slice(0, 30);
  }

  selectAccount(acc: any): void {
    this.form.compteContrepartieId = acc.id;
    this.accountSearch = `${acc.code} — ${acc.name}`;
    this.showAccountDrop = false;
  }

  clearAccount(): void {
    this.form.compteContrepartieId = 0;
    this.accountSearch = '';
  }

  // ── Autocomplete tiers ──
  filterPartners(): void {
    const q = this.tiersSearch.toLowerCase();
    this.filteredPartners = q
      ? this.partners.filter(p =>
          p.name.toLowerCase().includes(q) ||
          (p.ref || '').toLowerCase().includes(q)
        ).slice(0, 20)
      : this.partners.slice(0, 20);
  }

  selectPartner(p: Partner): void {
    this.form.tiersName = p.name;
    this.form.tiersId = p.id;
    this.tiersSearch = p.name;
    this.showTiersDrop = false;
    this.autoFillPartnerAccount(p);
  }

  private autoFillPartnerAccount(p: Partner): void {
    // Cherche le compte de tiers lié au partenaire dans le plan comptable
    let matchCode: string | null = null;

    if (p.type === 'customer' && p.receivableAccountCode) {
      matchCode = p.receivableAccountCode;
    } else if (p.type === 'supplier') {
      // Cherche le premier compte 401xx disponible
      const supplier = this.accounts.find(a => a.code.startsWith('401'));
      if (supplier) {
        this.form.compteContrepartieId = supplier.id;
        this.accountSearch = `${supplier.code} — ${supplier.name}`;
        return;
      }
    }

    if (matchCode) {
      const acc = this.accounts.find(a => a.code === matchCode);
      if (acc) {
        this.form.compteContrepartieId = acc.id;
        this.accountSearch = `${acc.code} — ${acc.name}`;
      }
    }
  }

  clearPartner(): void {
    this.form.tiersName = '';
    this.form.tiersId = undefined;
    this.tiersSearch = '';
  }

  getPartnerTypeLabel(type: string): string {
    if (type === 'customer') return 'Client';
    if (type === 'supplier') return 'Fournisseur';
    return type;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent): void {
    const t = e.target as HTMLElement;
    if (!t.closest('.ac-wrap.account-wrap')) this.showAccountDrop = false;
    if (!t.closest('.ac-wrap.tiers-wrap'))   this.showTiersDrop = false;
  }

  submit(): void {
    if (!this.form.caisseId || !this.form.montant || !this.form.compteContrepartieId) return;
    this.saving = true;
    this.caisseService.addOperation(this.form).subscribe({
      next: () => {
        this.saving = false;
        this.router.navigate(['/caisses/brouillard'], {
          queryParams: { caisseId: this.form.caisseId, date: this.form.date }
        });
      },
      error: (e) => {
        this.saving = false;
        alert(e.error?.message || 'Erreur lors de l\'enregistrement.');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/caisses/dashboard']);
  }

  formatAmount(v: number | undefined | null): string {
    if (v == null) return '0 FCFA';
    return new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(+v) + ' FCFA';
  }
}
