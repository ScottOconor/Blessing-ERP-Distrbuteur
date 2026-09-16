import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PurchaseService, PrixFournisseurArticle } from '../../services/purchase.service';
import { StockService, Product } from '../../../stock/services/stock.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { AuthService } from '../../../../core/auth/auth.service';

interface SupplierGroup {
  supplier: any;
  prices: PrixFournisseurArticle[] | null;
  loading: boolean;
}

interface AddForm {
  productSearch: string;
  productId: number | null;
  standardPrice: number;
  prixFournisseur: number;
  showSuggestions: boolean;
  suggestions: Product[];
}

@Component({
  selector: 'app-fournisseur-price',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fournisseur-price.component.html',
  styleUrl: './fournisseur-price.component.scss'
})
export class FournisseurPriceComponent implements OnInit {
  groups: SupplierGroup[] = [];
  expandedIds = new Set<number>();
  loading = false;
  search = '';

  editingPriceId: number | null = null;
  editForm: { prixFournisseur: number } = { prixFournisseur: 0 };
  saving = false;

  addingGroupId: number | null = null;
  addForm: AddForm = this.emptyAddForm();
  addSaving = false;

  products: Product[] = [];
  private companyId!: number;

  constructor(
    private purchaseService: PurchaseService,
    private stockService: StockService,
    private accountingService: AccountingService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId();
    this.loading = true;
    this.accountingService.getPartners(this.companyId).subscribe({
      next: partners => {
        this.groups = partners
          .filter((p: any) => p.type === 'supplier' || p.type === 'both')
          .map((s: any) => ({ supplier: s, prices: null, loading: false }));
        this.loading = false;
      },
      error: () => this.loading = false
    });
    this.stockService.getProducts(this.companyId).subscribe({
      next: p => this.products = p.filter(x => x.active && (x.type === 'product' || x.type === 'consu'))
    });
  }

  toggle(g: SupplierGroup): void {
    const id = g.supplier.id;
    if (id == null) return;
    if (this.expandedIds.has(id)) { this.expandedIds.delete(id); return; }
    this.expandedIds.add(id);
    if (g.prices === null) this.loadPrices(g);
  }

  private loadPrices(g: SupplierGroup): void {
    g.loading = true;
    this.purchaseService.getPrixFournisseurByFournisseur(g.supplier.id, this.companyId).subscribe({
      next: prices => { g.prices = prices; g.loading = false; },
      error: () => { g.prices = []; g.loading = false; }
    });
  }

  expandAll(): void {
    this.groups.forEach(g => {
      this.expandedIds.add(g.supplier.id);
      if (g.prices === null) this.loadPrices(g);
    });
  }

  collapseAll(): void { this.expandedIds.clear(); }

  get filteredGroups(): SupplierGroup[] {
    if (!this.search.trim()) return this.groups;
    const q = this.search.toLowerCase();
    return this.groups.filter(g => g.supplier.name.toLowerCase().includes(q));
  }

  // ── Edition ──────────────────────────────────────────────────────────────

  startEdit(p: PrixFournisseurArticle): void {
    this.editingPriceId = p.id ?? null;
    this.editForm = { prixFournisseur: p.prixFournisseur };
    this.addingGroupId = null;
  }

  cancelEdit(): void { this.editingPriceId = null; }

  saveEdit(g: SupplierGroup, p: PrixFournisseurArticle): void {
    this.saving = true;
    const dto: PrixFournisseurArticle = { ...p, prixFournisseur: this.editForm.prixFournisseur };
    this.purchaseService.savePrixFournisseur(dto).subscribe({
      next: saved => {
        const idx = g.prices!.findIndex(x => x.id === p.id);
        if (idx >= 0) g.prices![idx] = saved;
        this.editingPriceId = null;
        this.saving = false;
      },
      error: () => { this.saving = false; }
    });
  }

  // ── Suppression ───────────────────────────────────────────────────────────

  deletePrice(g: SupplierGroup, p: PrixFournisseurArticle): void {
    if (!confirm(`Supprimer le tarif de "${p.productName}" pour ce fournisseur ?`)) return;
    this.purchaseService.deletePrixFournisseur(p.id!).subscribe({
      next: () => { g.prices = g.prices!.filter(x => x.id !== p.id); }
    });
  }

  // ── Ajout ─────────────────────────────────────────────────────────────────

  startAdd(g: SupplierGroup): void {
    this.addingGroupId = g.supplier.id ?? null;
    this.addForm = this.emptyAddForm();
    this.editingPriceId = null;
  }

  cancelAdd(): void { this.addingGroupId = null; }

  onProductSearch(): void {
    const term = this.addForm.productSearch.toLowerCase().trim();
    if (term.length < 1) {
      this.addForm.suggestions = [];
      this.addForm.showSuggestions = false;
      return;
    }
    const existing = new Set((this.groups.find(g => g.supplier.id === this.addingGroupId)?.prices ?? [])
      .map(p => p.productId));
    this.addForm.suggestions = this.products.filter(p =>
      !existing.has(p.id ?? -1) &&
      ((p.name || '').toLowerCase().includes(term) || (p.defaultCode || '').toLowerCase().includes(term))
    ).slice(0, 10);
    this.addForm.showSuggestions = this.addForm.suggestions.length > 0;
  }

  selectProduct(p: Product): void {
    this.addForm.productId = p.id ?? null;
    this.addForm.standardPrice = p.standardPrice ?? 0;
    this.addForm.prixFournisseur = p.standardPrice ?? 0;
    this.addForm.productSearch = (p.defaultCode ? `[${p.defaultCode}] ` : '') + p.name;
    this.addForm.showSuggestions = false;
    this.addForm.suggestions = [];
  }

  hideProductSuggestions(): void {
    setTimeout(() => { this.addForm.showSuggestions = false; }, 180);
  }

  get addEcart(): number {
    return this.addForm.prixFournisseur - this.addForm.standardPrice;
  }

  saveAdd(g: SupplierGroup): void {
    if (!this.addForm.productId) return;
    this.addSaving = true;
    const dto: PrixFournisseurArticle = {
      productId: this.addForm.productId,
      fournisseurId: g.supplier.id,
      prixFournisseur: this.addForm.prixFournisseur,
      companyId: this.companyId
    };
    this.purchaseService.savePrixFournisseur(dto).subscribe({
      next: saved => {
        if (!g.prices) g.prices = [];
        g.prices.unshift(saved);
        this.addingGroupId = null;
        this.addSaving = false;
      },
      error: () => { this.addSaving = false; }
    });
  }

  private emptyAddForm(): AddForm {
    return { productSearch: '', productId: null, standardPrice: 0, prixFournisseur: 0, showSuggestions: false, suggestions: [] };
  }
}
