import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { SalesService, SalesInvoice, SalesInvoiceLine, SalesClient } from '../../services/sales.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { StockService, Product } from '../../../stock/services/stock.service';
import { AccountJournal } from '../../../../core/models/account.model';

@Component({
  selector: 'app-avoir-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './avoir-list.component.html',
  styleUrl: './avoir-list.component.scss'
})
export class AvoirListComponent implements OnInit {
  avoirs: SalesInvoice[] = [];
  filteredAvoirs: SalesInvoice[] = [];
  loading = false;
  stateFilter = 'all';

  stateFilters = [
    { value: 'all',       label: 'Tous' },
    { value: 'draft',     label: 'Brouillon' },
    { value: 'posted',    label: 'Validé' },
    { value: 'cancelled', label: 'Annulé' }
  ];

  // === Modal création avoir direct ===
  showModal = false;
  saving = false;
  errorMsg = '';
  clients: SalesClient[] = [];
  journals: AccountJournal[] = [];
  allProducts: Product[] = [];
  readonly TVA_DEFAULT = 19.25;

  avoirForm: SalesInvoice = this.emptyAvoir();
  lineSearches: string[] = [];
  lineSearchResults: Product[][] = [];
  activeSuggestionIdx: number | null = null;
  searchTimer: any = null;

  private companyId!: number;

  constructor(
    private salesService: SalesService,
    private accountingService: AccountingService,
    private stockService: StockService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId();
    this.loadAvoirs();
  }

  loadAvoirs(): void {
    this.loading = true;
    this.salesService.getAvoirs(this.companyId).subscribe({
      next: (data) => {
        this.avoirs = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  applyFilter(): void {
    this.filteredAvoirs = this.stateFilter === 'all'
      ? this.avoirs
      : this.avoirs.filter(a => a.state === this.stateFilter);
  }

  setFilter(state: string): void {
    this.stateFilter = state;
    this.applyFilter();
  }

  openAvoir(avoir: SalesInvoice): void {
    this.router.navigate(['/sales/invoices', avoir.id]);
  }

  getStateBadge(state: string): string {
    const map: Record<string, string> = {
      draft: 'badge-draft', posted: 'badge-posted', cancelled: 'badge-cancelled'
    };
    return 'badge ' + (map[state] || 'badge-draft');
  }

  getStateLabel(state: string): string {
    const map: Record<string, string> = { draft: 'Brouillon', posted: 'Validé', cancelled: 'Annulé' };
    return map[state] || state;
  }

  totalAvoirs(): number {
    return this.filteredAvoirs
      .filter(a => a.state === 'posted')
      .reduce((s, a) => s + (a.totalTTC || 0), 0);
  }

  // === Création avoir direct ===

  openCreate(): void {
    this.errorMsg = '';
    this.avoirForm = this.emptyAvoir();
    this.lineSearches = [];
    this.lineSearchResults = [];
    this.activeSuggestionIdx = null;
    this.showModal = true;

    if (this.clients.length === 0 || this.journals.length === 0 || this.allProducts.length === 0) {
      forkJoin({
        clients: this.salesService.getClients(this.companyId),
        journals: this.accountingService.getJournals(this.companyId),
        products: this.stockService.getProducts(this.companyId)
      }).subscribe({
        next: ({ clients, journals, products }) => {
          this.clients = clients;
          this.journals = journals.filter(j => j.type === 'sale');
          this.allProducts = products.filter(p => p.type === 'product' || p.type === 'consu' || p.type === 'service');
          if (this.journals.length > 0 && !this.avoirForm.journalId) {
            this.avoirForm.journalId = this.journals[0].id!;
          }
        }
      });
    } else if (this.journals.length > 0 && !this.avoirForm.journalId) {
      this.avoirForm.journalId = this.journals[0].id!;
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.errorMsg = '';
  }

  private emptyAvoir(): SalesInvoice {
    return {
      date: new Date().toISOString().split('T')[0],
      partnerId: 0,
      journalId: 0,
      companyId: this.companyId || 0,
      type: 'credit_note',
      lines: []
    };
  }

  addLine(): void {
    this.avoirForm.lines.push({
      description: '',
      quantity: 1,
      prixUnitaire: 0,
      tauxTVA: this.TVA_DEFAULT,
      accountCode: '706100'
    });
    this.lineSearches.push('');
    this.lineSearchResults.push([]);
  }

  removeLine(i: number): void {
    this.avoirForm.lines.splice(i, 1);
    this.lineSearches.splice(i, 1);
    this.lineSearchResults.splice(i, 1);
    this.computeTotals();
  }

  onLineChange(line: SalesInvoiceLine): void {
    const qty = line.quantity || 0;
    const pu = line.prixUnitaire || 0;
    const tva = line.tauxTVA || 0;
    const remise = (line as any).tauxRemise || 0;
    const brut = qty * pu;
    const remiseM = brut * remise / 100;
    const ht = brut - remiseM;
    line.montantHT = Math.round(ht * 100) / 100;
    line.montantTVA = Math.round(ht * tva / 100 * 100) / 100;
    line.montantTTC = Math.round((ht + (line.montantTVA || 0)) * 100) / 100;
    this.computeTotals();
  }

  computeTotals(): void {
    let ht = 0, tva = 0, ttc = 0;
    for (const l of this.avoirForm.lines) {
      ht += l.montantHT || 0;
      tva += l.montantTVA || 0;
      ttc += l.montantTTC || 0;
    }
    this.avoirForm.totalHT = Math.round(ht * 100) / 100;
    this.avoirForm.totalTVA = Math.round(tva * 100) / 100;
    this.avoirForm.totalTTC = Math.round(ttc * 100) / 100;
  }

  // Autocomplete
  getSuggestions(i: number): Product[] {
    if (this.lineSearchResults[i]?.length > 0) return this.lineSearchResults[i];
    const q = (this.lineSearches[i] || '').toLowerCase().trim();
    if (!q) return this.allProducts.slice(0, 8);
    return this.allProducts.filter(p =>
      p.name.toLowerCase().includes(q) || (p.defaultCode || '').toLowerCase().includes(q)
    ).slice(0, 10);
  }

  openSuggestions(i: number): void {
    if (this.avoirForm.lines[i]?.productCode) this.lineSearches[i] = '';
    this.activeSuggestionIdx = i;
  }

  closeSuggestions(i: number): void {
    setTimeout(() => {
      this.activeSuggestionIdx = null;
      const line = this.avoirForm.lines[i];
      if (line?.productCode && !this.lineSearches[i]) {
        this.lineSearches[i] = line.productCode ? `[${line.productCode}] ${line.description}` : line.description;
      }
    }, 200);
  }

  selectProduct(i: number, product: Product): void {
    const line = this.avoirForm.lines[i];
    line.productCode = product.defaultCode || '';
    line.description = product.name;
    line.prixUnitaire = product.salePrice || 0;
    line.tauxTVA = this.TVA_DEFAULT;
    line.accountCode = '706100';
    this.lineSearches[i] = product.defaultCode ? `[${product.defaultCode}] ${product.name}` : product.name;
    this.activeSuggestionIdx = null;
    this.onLineChange(line);
  }

  clearLine(i: number): void {
    const line = this.avoirForm.lines[i];
    line.productCode = '';
    line.description = '';
    line.prixUnitaire = 0;
    this.lineSearches[i] = '';
    this.lineSearchResults[i] = [];
    this.activeSuggestionIdx = i;
  }

  saveAvoir(): void {
    if (!this.avoirForm.partnerId || this.avoirForm.partnerId === 0) {
      this.errorMsg = 'Veuillez sélectionner un client';
      return;
    }
    if (!this.avoirForm.journalId || this.avoirForm.journalId === 0) {
      this.errorMsg = 'Veuillez sélectionner un journal';
      return;
    }
    if (this.avoirForm.lines.length === 0) {
      this.errorMsg = 'Ajoutez au moins une ligne';
      return;
    }

    this.saving = true;
    this.errorMsg = '';
    const payload: SalesInvoice = { ...this.avoirForm, companyId: this.companyId, type: 'credit_note' };

    this.salesService.createAvoirManuel(payload).subscribe({
      next: (created) => {
        this.saving = false;
        this.showModal = false;
        this.router.navigate(['/sales/invoices', created.id]);
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la création de l\'avoir';
      }
    });
  }
}
