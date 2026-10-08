import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountingService, ServiceAccounts } from '../../services/accounting.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountAccount } from '../../../../core/models/account.model';

/**
 * Comptes de produit des ventes de services. Le compte n'est plus figé dans la vente : il est
 * choisi ici et appliqué à la validation de chaque facture (compte du service, sinon compte par
 * défaut, sinon 706100).
 */
@Component({
  selector: 'app-service-accounts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './service-accounts.component.html',
  styleUrl: './service-accounts.component.scss'
})
export class ServiceAccountsComponent implements OnInit {
  data: ServiceAccounts | null = null;
  /** Comptes de produits (classe 7) actifs, proposés au choix */
  incomeAccounts: AccountAccount[] = [];
  loading = false;
  savingKey: string | null = null;
  searchTerm = '';
  successMsg = '';
  errorMsg = '';

  constructor(private accountingService: AccountingService, private authService: AuthService) {}

  ngOnInit(): void {
    const companyId = this.authService.getCompanyId();
    this.loading = true;
    this.accountingService.getAccounts(companyId).subscribe({
      next: (accounts) => {
        this.incomeAccounts = accounts
          .filter(a => a.code.startsWith('7') && !a.deprecated)
          .sort((a, b) => a.code.localeCompare(b.code));
      }
    });
    this.accountingService.getServiceAccounts(companyId).subscribe({
      next: (d) => { this.data = d; this.loading = false; },
      error: (e) => { this.loading = false; this.errorMsg = e.error?.message || 'Impossible de charger les services'; }
    });
  }

  get filteredServices(): ServiceAccounts['services'] {
    const q = this.searchTerm.toLowerCase().trim();
    const list = this.data?.services ?? [];
    if (!q) return list;
    return list.filter(s => s.name.toLowerCase().includes(q) || (s.defaultCode || '').toLowerCase().includes(q));
  }

  accountLabel(code: string | null | undefined): string {
    if (!code) return '';
    const a = this.incomeAccounts.find(x => x.code === code);
    return a ? `${a.code} — ${a.name}` : code;
  }

  setDefault(code: string | null): void {
    this.save('default', this.accountingService.setDefaultServiceAccount(this.authService.getCompanyId(), code || null),
      code ? `Compte par défaut des services : ${code}` : 'Compte par défaut remis à 706100');
  }

  setService(productId: number, name: string, code: string | null): void {
    this.save('p' + productId, this.accountingService.setServiceAccount(productId, code || null),
      code ? `« ${name} » sera comptabilisé sur ${code}` : `« ${name} » suit le compte par défaut`);
  }

  private save(key: string, obs: ReturnType<AccountingService['getServiceAccounts']>, msg: string): void {
    this.savingKey = key;
    this.errorMsg = '';
    obs.subscribe({
      next: (d) => {
        this.data = d;
        this.savingKey = null;
        this.successMsg = msg;
        setTimeout(() => this.successMsg = '', 3000);
      },
      error: (e) => {
        this.savingKey = null;
        this.errorMsg = e.error?.message || 'Erreur lors de l\'enregistrement';
        // Recharger pour remettre la sélection affichée sur la valeur réellement enregistrée
        this.accountingService.getServiceAccounts(this.authService.getCompanyId()).subscribe(d => this.data = d);
      }
    });
  }
}
