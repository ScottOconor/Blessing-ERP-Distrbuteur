import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PurchaseService, PurchaseInvoice, PurchaseInvoiceLine } from '../../services/purchase.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { StockService, Product } from '../../../stock/services/stock.service';
import { AccountJournal } from '../../../../core/models/account.model';

@Component({
  selector: 'app-purchase-avoir-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './avoir-list.component.html',
  styleUrl: './avoir-list.component.scss'
})
export class PurchaseAvoirListComponent implements OnInit {
  avoirs: PurchaseInvoice[] = [];
  filteredAvoirs: PurchaseInvoice[] = [];
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
  suppliers: any[] = [];
  journals: AccountJournal[] = [];
  allProducts: Product[] = [];
  readonly TVA_DEFAULT = 19.25;

  avoirForm: PurchaseInvoice = this.emptyAvoir();
  lineSearches: string[] = [];
  lineSearchResults: Product[][] = [];
  activeSuggestionIdx: number | null = null;

  private companyId!: number;

  constructor(
    private purchaseService: PurchaseService,
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
    this.purchaseService.getAvoirs(this.companyId).subscribe({
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

  openAvoir(avoir: PurchaseInvoice): void {
    this.router.navigate(['/purchases/invoices', avoir.id]);
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

    if (this.suppliers.length === 0 || this.journals.length === 0 || this.allProducts.length === 0) {
      forkJoin({
        partners: this.accountingService.getPartners(this.companyId),
        journals: this.accountingService.getJournals(this.companyId),
        products: this.stockService.getProducts(this.companyId)
      }).subscribe({
        next: ({ partners, journals, products }) => {
          this.suppliers = partners.filter((p: any) => p.type === 'supplier' || p.type === 'both');
          this.journals = journals.filter(j => j.type === 'purchase');
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

  private emptyAvoir(): PurchaseInvoice {
    return {
      date: new Date().toISOString().split('T')[0],
      partnerId: 0,
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
      accountCode: '601000'
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

  onLineChange(line: PurchaseInvoiceLine): void {
    const qty = line.quantity || 0;
    const pu = line.prixUnitaire || 0;
    const tva = line.tauxTVA || 0;
    const ht = qty * pu;
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
    line.prixUnitaire = product.standardPrice || 0;
    line.tauxTVA = this.TVA_DEFAULT;
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
      this.errorMsg = 'Veuillez sélectionner un fournisseur';
      return;
    }
    if (this.avoirForm.lines.length === 0) {
      this.errorMsg = 'Ajoutez au moins une ligne';
      return;
    }

    this.saving = true;
    this.errorMsg = '';
    const payload = { ...this.avoirForm, companyId: this.companyId, type: 'credit_note' };

    this.purchaseService.createAvoirManuel(payload).subscribe({
      next: (created) => {
        this.saving = false;
        this.showModal = false;
        this.router.navigate(['/purchases/invoices', created.id]);
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la création de l\'avoir';
      }
    });
  }
}
