import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalesService, SalesClient, PrixClientArticle } from '../../services/sales.service';
import { StockService, Product } from '../../../stock/services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';

interface ClientGroup {
  client: SalesClient;
  prices: PrixClientArticle[] | null;
  loading: boolean;
}

interface AddForm {
  productSearch: string;
  productId: number | null;
  salePriceStandard: number;
  prixClient: number;
  showSuggestions: boolean;
  suggestions: Product[];
}

@Component({
  selector: 'app-client-price',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-price.component.html',
  styleUrl: './client-price.component.scss'
})
export class ClientPriceComponent implements OnInit {
  groups: ClientGroup[] = [];
  expandedIds = new Set<number>();
  loading = false;
  search = '';

  // Edition d'un tarif existant
  editingPriceId: number | null = null;
  editForm: { prixClient: number; rabaisUnitaire: number } = { prixClient: 0, rabaisUnitaire: 0 };
  saving = false;

  // Ajout d'un nouveau tarif
  addingGroupId: number | null = null;
  addForm: AddForm = this.emptyAddForm();
  addSaving = false;

  // Référentiel produits
  products: Product[] = [];

  private companyId!: number;

  constructor(
    private salesService: SalesService,
    private stockService: StockService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId();
    this.loading = true;
    this.salesService.getClients(this.companyId).subscribe({
      next: clients => {
        this.groups = clients.map(c => ({ client: c, prices: null, loading: false }));
        this.loading = false;
      },
      error: () => this.loading = false
    });
    this.stockService.getProducts(this.companyId).subscribe({
      next: p => this.products = p.filter(x => x.active && (x.type === 'product' || x.type === 'consu'))
    });
  }

  // ── Accordéon ───────────────────────────────────────────────────────────────

  toggle(g: ClientGroup): void {
    const id = g.client.id;
    if (id == null) return;
    if (this.expandedIds.has(id)) {
      this.expandedIds.delete(id);
      return;
    }
    this.expandedIds.add(id);
    if (g.prices === null) this.loadPrices(g);
  }

  private loadPrices(g: ClientGroup): void {
    const clientId = g.client.id;
    if (clientId == null) return;
    g.loading = true;
    this.salesService.getPrixClientByClient(clientId, this.companyId).subscribe({
      next: prices => { g.prices = prices; g.loading = false; },
      error: () => { g.prices = []; g.loading = false; }
    });
  }

  expandAll(): void {
    this.groups.forEach(g => {
      if (g.client.id == null) return;
      this.expandedIds.add(g.client.id);
      if (g.prices === null) this.loadPrices(g);
    });
  }

  collapseAll(): void { this.expandedIds.clear(); }

  get filteredGroups(): ClientGroup[] {
    if (!this.search.trim()) return this.groups;
    const q = this.search.toLowerCase();
    return this.groups.filter(g => g.client.name.toLowerCase().includes(q));
  }

  totalTarifs(g: ClientGroup): number { return g.prices?.length ?? 0; }

  // ── Edition d'un tarif existant ─────────────────────────────────────────────

  startEdit(p: PrixClientArticle): void {
    this.editingPriceId = p.id ?? null;
    this.editForm = { prixClient: p.prixClient, rabaisUnitaire: p.rabaisUnitaire ?? 0 };
    this.addingGroupId = null;
  }

  cancelEdit(): void { this.editingPriceId = null; }

  saveEdit(g: ClientGroup, p: PrixClientArticle): void {
    this.saving = true;
    const dto: PrixClientArticle = {
      ...p,
      prixClient: this.editForm.prixClient,
      rabaisUnitaire: this.editForm.rabaisUnitaire
    };
    this.salesService.savePrixClient(dto).subscribe({
      next: (saved) => {
        const idx = g.prices!.findIndex(x => x.id === p.id);
        if (idx >= 0) g.prices![idx] = saved;
        this.editingPriceId = null;
        this.saving = false;
      },
      error: () => { this.saving = false; }
    });
  }

  // ── Suppression ─────────────────────────────────────────────────────────────

  deletePrice(g: ClientGroup, p: PrixClientArticle): void {
    if (!confirm(`Supprimer le tarif de "${p.productName}" pour ce client ?`)) return;
    this.salesService.deletePrixClient(p.id!).subscribe({
      next: () => { g.prices = g.prices!.filter(x => x.id !== p.id); },
      error: () => {}
    });
  }

  // ── Ajout d'un nouveau tarif ────────────────────────────────────────────────

  startAdd(g: ClientGroup): void {
    this.addingGroupId = g.client.id ?? null;
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
    const existing = new Set((this.groups.find(g => g.client.id === this.addingGroupId)?.prices ?? [])
      .map(p => p.productId));
    this.addForm.suggestions = this.products.filter(p =>
      !existing.has(p.id ?? -1) &&
      ((p.name || '').toLowerCase().includes(term) ||
       (p.defaultCode || '').toLowerCase().includes(term))
    ).slice(0, 10);
    this.addForm.showSuggestions = this.addForm.suggestions.length > 0;
  }

  selectProduct(p: Product): void {
    this.addForm.productId = p.id ?? null;
    this.addForm.salePriceStandard = p.salePrice ?? 0;
    this.addForm.prixClient = p.salePrice ?? 0;
    this.addForm.productSearch = (p.defaultCode ? `[${p.defaultCode}] ` : '') + p.name;
    this.addForm.showSuggestions = false;
    this.addForm.suggestions = [];
  }

  hideProductSuggestions(): void {
    setTimeout(() => { this.addForm.showSuggestions = false; }, 180);
  }

  get addDiff(): number {
    return this.addForm.salePriceStandard - this.addForm.prixClient;
  }

  saveAdd(g: ClientGroup): void {
    if (!this.addForm.productId) return;
    this.addSaving = true;
    const dto: PrixClientArticle = {
      productId: this.addForm.productId,
      clientId: g.client.id!,
      prixClient: this.addForm.prixClient,
      rabaisUnitaire: this.addDiff,
      companyId: this.companyId
    };
    this.salesService.savePrixClient(dto).subscribe({
      next: (saved) => {
        if (!g.prices) g.prices = [];
        g.prices.unshift(saved);
        this.addingGroupId = null;
        this.addSaving = false;
      },
      error: () => { this.addSaving = false; }
    });
  }

  private emptyAddForm(): AddForm {
    return { productSearch: '', productId: null, salePriceStandard: 0, prixClient: 0, showSuggestions: false, suggestions: [] };
  }
}
