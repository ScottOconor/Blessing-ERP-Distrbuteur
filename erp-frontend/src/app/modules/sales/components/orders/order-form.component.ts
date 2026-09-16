import { Component, OnInit, HostListener, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesService, SalesOrder, SalesOrderLine, SalesClient, PrixClientArticle } from '../../services/sales.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { CompanyService } from '../../../../core/services/company.service';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { StockService, Product, Warehouse } from '../../../stock/services/stock.service';
import { AccountJournal } from '../../../../core/models/account.model';
import { PrintPreviewComponent } from '../../../../shared/components/print-preview/print-preview.component';
import { AuditTrailComponent } from '../../../../shared/components/audit-trail/audit-trail.component';
import { CONSIGNE_NAMES } from '../../../../shared/constants/consigne-codes';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, FormsModule, PrintPreviewComponent, AuditTrailComponent],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss'
})
export class OrderFormComponent implements OnInit {
  orderId: number | null = null;
  order: SalesOrder = this.emptyOrder();
  clients: SalesClient[] = [];
  journals: AccountJournal[] = [];
  warehouses: Warehouse[] = [];
  allProducts: Product[] = [];
  loading = false;
  saving = false;
  confirming = false;
  errorMsg = '';
  successMsg = '';
  showPrintModal = false;
  readonly TVA_DEFAULT = 19.25;

  partnerBalance: number | null = null;
  partnerCreditDisponible: number | null = null;
  loadingBalance = false;

  // Autocomplete client
  clientSearch = '';
  clientDropdown = false;
  get filteredClients(): SalesClient[] {
    if (!this.clientSearch.trim()) return this.clients.slice(0, 50);
    const q = this.clientSearch.toLowerCase();
    return this.clients.filter(c =>
      c.name.toLowerCase().includes(q) || (c.ref || '').toLowerCase().includes(q)
    ).slice(0, 50);
  }
  selectClient(c: SalesClient): void {
    this.order.partnerId = c.id!;
    this.clientSearch = c.name + (c.ref ? ' (' + c.ref + ')' : '');
    this.clientDropdown = false;
    this.onClientChange(c.id!);
  }
  onClientBlur(): void { setTimeout(() => this.clientDropdown = false, 200); }

  // Autocomplete state per line
  lineSearches: string[] = [];
  lineStockQty: number[] = [];
  lineUomNames: string[] = [];        // UDM par ligne (local, non envoyé au backend)
  lineCategoryNames: string[] = [];   // Catégorie par ligne (local, non envoyé au backend)
  linePrixTTC: number[] = [];         // Prix unitaire TTC affiché (converti en HT avant envoi)
  activeSuggestionIdx: number | null = null;
  lineSearchResults: Product[][] = [];
  searchTimer: any = null;
  dropdownRect: { top: number; left: number; width: number } | null = null;

  @ViewChildren('productInput') productInputs!: QueryList<ElementRef>;

  // Déconsigne modal
  showDeconsigneModal = false;
  deconsigneInputs: { code: string; nom: string; qty: number | null }[] = [];

  // ─── Constantes emballages consigne ──────────────────────────────────────
  private readonly CASIER12_RE = /casier\s*(?:de\s*)?12/i;
  private readonly CASIER15_RE = /casier\s*(?:de\s*)?15/i;
  private readonly CASIER24_RE = /casier\s*(?:de\s*)?24/i;
  private readonly GUINNESS_CAT_RE = /guinness/i;

  private readonly CONSIGNE_NAMES: Record<string, string> = CONSIGNE_NAMES;
  private readonly CONSIGNE_CODES_SET = new Set(Object.keys(this.CONSIGNE_NAMES));
  private readonly CONSIGNE_ACCOUNT = '4194';

  @HostListener('window:scroll', [])
  @HostListener('window:resize', [])
  onWindowChange(): void { this.activeSuggestionIdx = null; }

  constructor(
    private salesService: SalesService,
    private accountingService: AccountingService,
    private stockService: StockService,
    private authService: AuthService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.orderId = id ? +id : null;
    this.loadReferenceData();
  }

  private emptyOrder(): SalesOrder {
    return {
      date: new Date().toISOString().split('T')[0],
      partnerId: 0,
      journalId: 0,
      companyId: 0,
      lines: []
    };
  }

  onClientChange(partnerId: number): void {
    if (!partnerId) { this.partnerBalance = null; this.partnerCreditDisponible = null; return; }
    this.loadingBalance = true;
    this.salesService.getPartnerBalance(partnerId, this.authService.getCompanyId()).subscribe({
      next: (b) => {
        this.partnerBalance = b.balance;
        this.partnerCreditDisponible = b.credit;
        this.loadingBalance = false;
      },
      error: () => this.loadingBalance = false
    });
    // Recharger les prix client et recalculer les TTC (precompte dépend du client)
    this.order.lines.forEach((line, i) => {
      if (line.productId) this.loadClientPriceForLine(i, line.productId);
      this.linePrixTTC[i] = this.computePrixTTC(line.prixUnitaire || 0, line.tauxTVA || 0, !line.consigne);
      this.onLineChange(line);
    });
  }

  private loadClientPriceForLine(i: number, productId: number): void {
    const clientId = this.order.partnerId;
    const companyId = this.authService.getCompanyId();
    if (!clientId || !companyId) return;
    this.salesService.getPrixClientForProduct(productId, clientId, companyId).subscribe({
      next: (dto: PrixClientArticle | null) => {
        const line = this.order.lines[i];
        if (!line) return;
        const rabais = dto?.rabaisUnitaire ?? 0;
        line.rabaisUnitaire = rabais;
        line.totalRabaisLigne = Math.round((line.quantity || 0) * rabais * 100) / 100;
        this.computeTotals();
      },
      error: () => {}
    });
  }

  get totalRabais(): number {
    return this.order.lines
      .filter(l => !l.consigne)
      .reduce((s, l) => s + (l.totalRabaisLigne || 0), 0);
  }

  get netAPayer(): number {
    return Math.round((this.order.totalTTC || 0) + (this.order.fraisEnlevementTTC || 0) - this.totalRabais);
  }

  private getClientTauxPrecompte(): number {
    return this.clients.find(c => c.id === this.order.partnerId)?.tauxPrecompte ?? 0;
  }

  loadReferenceData(): void {
    const companyId = this.authService.getCompanyId();
    this.order.companyId = companyId;

    this.salesService.getClients(companyId).subscribe({
      next: (data) => {
        this.clients = data;
        // Charger le bon seulement après que la liste clients est prête
        // (onClientChange → getClientTauxPrecompte() a besoin de this.clients)
        if (this.orderId) {
          this.loadOrder(this.orderId);
        }
      }
    });

    this.stockService.getWarehouses(companyId).subscribe({
      next: (data) => { this.warehouses = data.filter(w => w.active !== false); }
    });

    this.accountingService.getJournals(companyId).subscribe({
      next: (data) => {
        this.journals = data.filter(j => j.type === 'sale');
        if (this.journals.length > 0 && !this.order.journalId) {
          this.order.journalId = this.journals[0].id!;
        }
      }
    });

    if (this.order.warehouseId) {
      this.loadProductsForWarehouse(this.order.warehouseId);
    }
  }

  onWarehouseChange(warehouseId: number | undefined): void {
    if (warehouseId) {
      this.loadProductsForWarehouse(warehouseId);
      // Pré-sélectionner le journal de vente configuré sur l'entrepôt
      const wh = this.warehouses.find(w => w.id === Number(warehouseId));
      if (wh?.salesJournalId && this.journals.some(j => j.id === wh.salesJournalId)) {
        this.order.journalId = wh.salesJournalId;
      }
    } else {
      this.allProducts = [];
      this.lineStockQty = this.lineStockQty.map(() => 0);
    }
  }

  private loadProductsForWarehouse(warehouseId: number): void {
    const companyId = this.authService.getCompanyId();
    this.stockService.getProducts(companyId, warehouseId).subscribe({
      next: (data) => {
        this.allProducts = data.filter(p => p.type === 'product' || p.type === 'consu');
        this.lineStockQty = this.order.lines.map(l => {
          if (l.productId) {
            const p = this.allProducts.find(p => p.id === l.productId);
            return p?.qtyOnHand ?? 0;
          }
          return 0;
        });
        // Peupler UDM et catégorie pour les lignes existantes non-consigne
        this.lineUomNames = this.order.lines.map(l => {
          if (l.productId && !l.consigne) {
            const p = this.allProducts.find(p => p.id === l.productId);
            return p?.uomName ?? '';
          }
          return '';
        });
        this.lineCategoryNames = this.order.lines.map(l => {
          if (l.productId && !l.consigne) {
            const p = this.allProducts.find(p => p.id === l.productId);
            return p?.categoryName ?? '';
          }
          return '';
        });
      },
      error: () => { this.errorMsg = 'Impossible de charger les articles du stock'; }
    });
  }

  loadOrder(id: number): void {
    this.loading = true;
    this.salesService.getOrder(id).subscribe({
      next: (data) => {
        this.order = data;
        this.clientSearch = data.partnerName || '';
        if (data.partnerId) this.onClientChange(data.partnerId);
        this.lineSearches = data.lines.map(l => l.productCode ? `[${l.productCode}] ${l.description}` : l.description);
        this.lineStockQty = data.lines.map(() => 0);
        this.lineSearchResults = data.lines.map(() => []);
        this.lineUomNames = data.lines.map(() => '');
        this.lineCategoryNames = data.lines.map(() => '');
        this.loading = false;
        if (data.warehouseId) {
          this.loadProductsForWarehouse(data.warehouseId);
        }
      },
      error: () => { this.loading = false; }
    });
  }

  get isReadOnly(): boolean {
    return this.order.state !== 'draft' && this.order.state !== undefined && this.order.state !== '';
  }

  get pageTitle(): string {
    if (!this.orderId) return 'Nouveau bon de commande';
    return this.order.name ? `Bon ${this.order.name}` : 'Chargement...';
  }

  addLine(): void {
    this.order.lines.push({
      description: '',
      quantity: 1,
      prixUnitaire: 0,
      tauxRemise: 0,
      tauxTVA: this.TVA_DEFAULT,
      accountCode: '7011'
    });
    this.lineSearches.push('');
    this.lineStockQty.push(0);
    this.lineSearchResults.push([]);
    this.lineUomNames.push('');
    this.lineCategoryNames.push('');
    this.linePrixTTC.push(0);
  }

  /**
   * Prix TTC = Prix HT × (1 + TVA% + Précompte%).
   * inclurePrecompte=false pour les lignes consigne (pas de PSA sur emballages).
   */
  computePrixTTC(prixUnitaireHT: number, tauxTVA: number, inclurePrecompte = true): number {
    const tauxPrecompte = inclurePrecompte ? this.getClientTauxPrecompte() : 0;
    return Math.round(prixUnitaireHT * (1 + tauxTVA / 100 + tauxPrecompte / 100));
  }

  /** Prix HT = Prix TTC / (1 + TVA% + Précompte%) — pleine précision, sans arrondi. */
  computePrixHT(prixTTC: number, tauxTVA: number, inclurePrecompte = true): number {
    const tauxPrecompte = inclurePrecompte ? this.getClientTauxPrecompte() : 0;
    const diviseur = 1 + tauxTVA / 100 + tauxPrecompte / 100;
    return diviseur > 0 ? prixTTC / diviseur : prixTTC;
  }

  /** Appelé quand l'utilisateur saisit un prix TTC dans le formulaire. */
  onPrixTTCChange(i: number): void {
    const line = this.order.lines[i];
    const prixTTC = this.linePrixTTC[i] || 0;
    line.prixUnitaire = this.computePrixHT(prixTTC, line.tauxTVA || 0, !line.consigne);
    this.onLineChange(line);
  }

  /** Appelé quand le taux TVA change — recalcule le prix TTC à partir du HT. */
  onTauxTVAChange(i: number): void {
    const line = this.order.lines[i];
    this.linePrixTTC[i] = this.computePrixTTC(line.prixUnitaire || 0, line.tauxTVA || 0, !line.consigne);
    this.onLineChange(line);
  }

  hasStockWarning(i: number): boolean {
    const line = this.order.lines[i];
    const available = this.lineStockQty[i] ?? 0;
    return !!(line.productId) && available >= 0 && (line.quantity || 0) > available;
  }

  // ─── Logique consigne ─────────────────────────────────────────────────────

  /**
   * Retourne le code emballage correspondant à l'UDM + catégorie d'un article.
   * - CASIER 12 + Guinness → CBG12, CASIER 12 normal → CB12
   * - CASIER 15 (toujours Guinness) → CBG15
   * - CASIER 24 + Guinness → CBG24, CASIER 24 normal → CB24
   */
  getConsigneCode(uomName: string, categoryName: string): string | null {
    const isGuinness = this.GUINNESS_CAT_RE.test(categoryName);
    if (this.CASIER12_RE.test(uomName)) return isGuinness ? 'CBG12' : 'CB12';
    if (this.CASIER15_RE.test(uomName)) return 'CBG15';
    if (this.CASIER24_RE.test(uomName)) return isGuinness ? 'CBG24' : 'CB24';
    return null;
  }

  isAutoConsigneLine(line: SalesOrderLine): boolean {
    return !!line.consigne && (line.quantity || 0) > 0 &&
      !!line.productCode && this.CONSIGNE_CODES_SET.has(line.productCode);
  }

  isDeconsigneLine(line: SalesOrderLine): boolean {
    return !!line.consigne && (line.quantity || 0) < 0 &&
      !!line.productCode && this.CONSIGNE_CODES_SET.has(line.productCode);
  }

  private syncConsigneLines(): void {
    // Sommer les quantités par code consigne
    const totals: Record<string, number> = {};
    for (const code of this.CONSIGNE_CODES_SET) totals[code] = 0;

    for (let i = 0; i < this.order.lines.length; i++) {
      const line = this.order.lines[i];
      if (line.consigne) continue;
      const code = this.getConsigneCode(this.lineUomNames[i] || '', this.lineCategoryNames[i] || '');
      if (code) totals[code] += line.quantity || 0;
    }

    for (const code of this.CONSIGNE_CODES_SET) {
      this.syncConsigneLine(code, this.CONSIGNE_NAMES[code], totals[code]);
    }
  }

  private syncConsigneLine(code: string, name: string, totalQty: number): void {
    const idx = this.order.lines.findIndex(l => l.consigne && (l.quantity || 0) > 0 && l.productCode === code);
    if (totalQty <= 0) {
      if (idx >= 0) {
        this.order.lines.splice(idx, 1);
        this.lineSearches.splice(idx, 1);
        this.lineStockQty.splice(idx, 1);
        this.lineSearchResults.splice(idx, 1);
        this.lineUomNames.splice(idx, 1);
        this.lineCategoryNames.splice(idx, 1);
        this.linePrixTTC.splice(idx, 1);
        this.computeTotals();
      }
      return;
    }
    const product = this.allProducts.find(p => p.defaultCode === code);
    const tauxTVA = product?.exemptTva ? 0 : this.TVA_DEFAULT;
    if (idx >= 0) {
      this.order.lines[idx].quantity = totalQty;
      this.onLineChange(this.order.lines[idx]);
    } else {
      const prixUnitaire = product?.salePrice || 0;
      const newLine: SalesOrderLine = {
        description: product?.name || name,
        productId: product?.id,
        productCode: code,
        quantity: totalQty,
        prixUnitaire,
        tauxRemise: 0,
        tauxTVA,
        accountCode: this.CONSIGNE_ACCOUNT,
        consigne: true
      };
      this.order.lines.push(newLine);
      this.lineSearches.push(`[${code}] ${newLine.description}`);
      this.lineStockQty.push(0);
      this.lineSearchResults.push([]);
      this.lineUomNames.push('');
      this.lineCategoryNames.push('');
      this.linePrixTTC.push(this.computePrixTTC(prixUnitaire, tauxTVA, false)); // consigne: pas de PSA
      this.onLineChange(newLine);
    }
  }

  // ─── Autocomplete ──────────────────────────────────────────────────────────

  getSuggestions(i: number): Product[] {
    if (this.lineSearchResults[i]?.length > 0) {
      return this.lineSearchResults[i];
    }
    const q = (this.lineSearches[i] || '').toLowerCase().trim();
    if (!q) return this.allProducts.slice(0, 8);
    const matches = this.allProducts.filter(p =>
      p.name.toLowerCase().includes(q) ||
      (p.defaultCode || '').toLowerCase().includes(q)
    );
    matches.sort((a, b) => {
      const codeA = (a.defaultCode || '').toLowerCase();
      const codeB = (b.defaultCode || '').toLowerCase();
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      const rank = (code: string, n: string) =>
        code === q ? 0 : code.startsWith(q) ? 1 : n.startsWith(q) ? 2 : 3;
      return rank(codeA, nameA) - rank(codeB, nameB);
    });
    return matches.slice(0, 12);
  }

  onSearchInput(i: number): void {
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
    }
    const query = this.lineSearches[i]?.trim();
    if (!query || query.length < 2 || this.allProducts.length > 0) {
      this.lineSearchResults[i] = [];
      return;
    }
    this.searchTimer = setTimeout(() => {
      const companyId = this.authService.getCompanyId();
      this.stockService.searchProducts(query, companyId).subscribe({
        next: (products) => {
          this.lineSearchResults[i] = products.filter(p => (p.qtyOnHand || 0) >= 0).slice(0, 10);
        },
        error: () => {
          this.lineSearchResults[i] = [];
        }
      });
    }, 300);
  }

  openSuggestions(i: number, event?: FocusEvent | Event): void {
    if (event instanceof FocusEvent && this.order.lines[i]?.productCode) {
      this.lineSearches[i] = '';
    }
    if (event?.target) {
      const rect = (event.target as HTMLElement).getBoundingClientRect();
      const dropdownWidth = Math.max(rect.width, 420);
      const left = Math.min(rect.left, window.innerWidth - dropdownWidth - 8);
      this.dropdownRect = { top: rect.bottom + 4, left, width: dropdownWidth };
    }
    this.activeSuggestionIdx = i;
    this.onSearchInput(i);
  }

  onProductSearchEnter(i: number, event: Event): void {
    event.preventDefault();
    const suggestions = this.getSuggestions(i);
    if (suggestions.length > 0) {
      this.selectProduct(i, suggestions[0]);
    }
  }

  onLineEnter(event: Event): void {
    event.preventDefault();
    this.addLine();
    setTimeout(() => {
      const inputs = this.productInputs.toArray();
      if (inputs.length > 0) inputs[inputs.length - 1].nativeElement.focus();
    }, 50);
  }

  closeSuggestions(i?: number): void {
    setTimeout(() => {
      this.activeSuggestionIdx = null;
      if (i !== undefined) {
        const line = this.order.lines[i];
        if (line?.productCode && !this.lineSearches[i]) {
          this.lineSearches[i] = line.productCode
            ? `[${line.productCode}] ${line.description}`
            : line.description;
        }
      }
    }, 200);
  }

  selectProduct(i: number, product: Product): void {
    const line = this.order.lines[i];
    line.productId = product.id;
    line.productCode = product.defaultCode || '';
    line.description = product.name;
    line.prixUnitaire = product.salePrice || 0;
    line.rabaisUnitaire = 0;
    line.totalRabaisLigne = 0;
    line.tauxTVA = product.exemptTva ? 0 : this.TVA_DEFAULT;
    line.accountCode = '701100';
    line.categoryId = product.categoryId;
    this.lineSearches[i] = product.defaultCode
      ? `[${product.defaultCode}] ${product.name}`
      : product.name;
    this.lineStockQty[i] = product.qtyOnHand ?? 0;
    this.lineUomNames[i] = product.uomName ?? '';
    this.lineCategoryNames[i] = product.categoryName ?? '';
    this.linePrixTTC[i] = this.computePrixTTC(line.prixUnitaire, line.tauxTVA || 0, true);
    this.activeSuggestionIdx = null;
    this.onLineChange(line);
    // Charger le prix spécifique à ce client pour cet article
    if (product.id) this.loadClientPriceForLine(i, product.id);
  }

  clearLine(i: number): void {
    const line = this.order.lines[i];
    line.productId = undefined;
    line.productCode = '';
    line.description = '';
    line.prixUnitaire = 0;
    this.lineSearches[i] = '';
    this.lineStockQty[i] = 0;
    this.lineSearchResults[i] = [];
    this.lineUomNames[i] = '';
    this.lineCategoryNames[i] = '';
    this.activeSuggestionIdx = i;
    this.syncConsigneLines();
  }

  removeLine(index: number): void {
    const wasConsigne = !!this.order.lines[index]?.consigne;
    this.order.lines.splice(index, 1);
    this.lineSearches.splice(index, 1);
    this.lineStockQty.splice(index, 1);
    this.lineSearchResults.splice(index, 1);
    this.lineUomNames.splice(index, 1);
    this.lineCategoryNames.splice(index, 1);
    this.linePrixTTC.splice(index, 1);
    if (!wasConsigne) {
      this.syncConsigneLines();
    }
    this.computeTotals();
  }

  onLineChange(line: SalesOrderLine): void {
    const qty = line.quantity || 0;
    const pu = line.prixUnitaire || 0;
    const remise = line.tauxRemise || 0;
    const tva = line.tauxTVA || 0;
    const tauxPrecompte = line.consigne ? 0 : this.getClientTauxPrecompte();

    const brut = qty * pu;
    const remiseMontant = brut * remise / 100;
    const ht = brut - remiseMontant;
    const montantTVA = ht * tva / 100;
    const montantPrecompte = ht * tauxPrecompte / 100;

    // HT et TVA gardent toute leur précision (pas d'arrondi intermédiaire)
    line.montantHT  = ht;
    line.montantTVA = montantTVA;
    // TTC = qty × prixUnitaireTTC (arrondi à l'entier)
    line.montantTTC = Math.round(this.computePrixTTC(pu, tva, !line.consigne) * qty);

    line.totalRabaisLigne = Math.round(qty * (line.rabaisUnitaire || 0));

    this.computeTotals();
    if (!line.consigne) {
      this.syncConsigneLines();
    }
  }

  computeTotals(): void {
    let ht = 0, tva = 0, ttc = 0, remise = 0, precompte = 0;
    const tauxPrecompte = this.getClientTauxPrecompte();
    for (const line of this.order.lines) {
      ht  += line.montantHT  || 0;
      tva += line.montantTVA || 0;
      ttc += line.montantTTC || 0;  // déjà inclut la PSA
      const brut = (line.quantity || 0) * (line.prixUnitaire || 0);
      remise += brut * (line.tauxRemise || 0) / 100;
      if (!line.consigne) {
        precompte += (line.montantHT || 0) * tauxPrecompte / 100;
      }
    }
    // HT/TVA/Précompte : pleine précision pour les calculs
    this.order.totalHT        = ht;
    this.order.totalTVA       = tva;
    this.order.totalPrecompte = precompte;
    this.order.totalRemise    = remise;
    // TTC arrondi à l'entier (somme des montantTTC déjà arrondis)
    this.order.totalTTC       = Math.round(ttc);
    this.order.totalRabais    = this.totalRabais;
  }

  // ─── Getters résumé consignes ─────────────────────────────────────────────

  get qteConsigne(): number {
    return this.order.lines
      .filter(l => l.consigne && (l.quantity || 0) > 0)
      .reduce((s, l) => s + (l.quantity || 0), 0);
  }

  get qteDeconsigne(): number {
    return this.order.lines
      .filter(l => l.consigne && (l.quantity || 0) < 0)
      .reduce((s, l) => s + Math.abs(l.quantity || 0), 0);
  }

  // ─── Sauvegarde ───────────────────────────────────────────────────────────

  save(): void {
    const missing: string[] = [];
    if (!this.order.partnerId) missing.push('Client');
    if (!this.order.journalId) missing.push('Journal');
    if (!this.order.warehouseId) missing.push('Entrepôt');
    if (this.order.lines.length === 0) missing.push('Lignes');
    if (missing.length > 0) {
      this.errorMsg = `Champs manquants : ${missing.join(', ')}`;
      return;
    }

    this.saving = true;
    this.errorMsg = '';

    const isNew = !this.orderId;
    const obs = isNew
      ? this.salesService.createOrder(this.order)
      : this.salesService.updateOrder(this.orderId!, this.order);

    obs.subscribe({
      next: (saved) => {
        this.saving = false;
        this.order = saved;
        if (isNew) {
          this.router.navigate(['/sales/orders', saved.id]);
        } else {
          this.orderId = saved.id!;
          this.syncLineArraysFromSaved(saved.lines);
          this.showSuccess('Bon sauvegardé');
        }
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la sauvegarde';
      }
    });
  }

  private syncLineArraysFromSaved(lines: SalesOrderLine[]): void {
    this.lineSearches = lines.map(l => l.productCode ? `[${l.productCode}] ${l.description}` : l.description);
    this.lineStockQty = lines.map(l => {
      if (l.productId) {
        const p = this.allProducts.find(p => p.id === l.productId);
        return p?.qtyOnHand ?? 0;
      }
      return 0;
    });
    this.lineSearchResults = lines.map(() => []);
    this.lineUomNames = lines.map(l => {
      if (l.productId && !l.consigne) {
        const p = this.allProducts.find(p => p.id === l.productId);
        return p?.uomName ?? '';
      }
      return '';
    });
    this.lineCategoryNames = lines.map(l => {
      if (l.productId && !l.consigne) {
        const p = this.allProducts.find(p => p.id === l.productId);
        return p?.categoryName ?? '';
      }
      return '';
    });
    this.linePrixTTC = lines.map(l =>
      this.computePrixTTC(l.prixUnitaire || 0, l.tauxTVA || 0, !l.consigne)
    );
  }

  // ─── Confirmation ─────────────────────────────────────────────────────────

  confirm(): void {
    if (!this.orderId) return;

    // Les bons eLeader importés ne passent pas par la vérification déconsigne
    if (this.order.eleaderReference) {
      if (!confirm('Confirmer ce bon de commande ? Une facture sera créée automatiquement.')) return;
      this.doConfirm();
      return;
    }

    // Toujours afficher la fenêtre avec tous les produits emballage
    this.deconsigneInputs = Array.from(this.CONSIGNE_CODES_SET).map(code => {
      const product = this.allProducts.find(p => p.defaultCode === code);
      return {
        code,
        nom: product?.name || this.CONSIGNE_NAMES[code] || code,
        qty: null
      };
    });
    this.showDeconsigneModal = true;
  }

  validateDeconsigne(): void {
    for (const d of this.deconsigneInputs) {
      if (d.qty === null || d.qty === undefined) d.qty = 0;
    }

    for (const d of this.deconsigneInputs) {
      const qty = d.qty || 0;
      if (qty > 0) {
        const product = this.allProducts.find(p => p.defaultCode === d.code);
        const tauxTVA = product?.exemptTva ? 0 : this.TVA_DEFAULT;
        const prixUnitaire = product?.salePrice || 0;
        const deconsigneLine: SalesOrderLine = {
          description: product?.name || d.nom,
          productId: product?.id,
          productCode: d.code,
          quantity: -qty,
          prixUnitaire,
          tauxRemise: 0,
          tauxTVA,
          accountCode: this.CONSIGNE_ACCOUNT,
          consigne: true
        };
        this.order.lines.push(deconsigneLine);
        this.lineSearches.push(`[${d.code}] Déconsigne`);
        this.lineStockQty.push(0);
        this.lineSearchResults.push([]);
        this.lineUomNames.push('');
        this.lineCategoryNames.push('');
        this.linePrixTTC.push(this.computePrixTTC(prixUnitaire, tauxTVA, false)); // consigne: pas de PSA
        this.onLineChange(deconsigneLine);
      }
    }

    this.showDeconsigneModal = false;
    this.errorMsg = '';
    this.saveAndConfirm();
  }

  cancelDeconsigne(): void {
    this.showDeconsigneModal = false;
    this.deconsigneInputs = [];
  }

  get deconsigneGroups(): { label: string; items: { code: string; nom: string; qty: number | null }[] }[] {
    const defs = [
      { label: 'CB — Casiers Bouteille',          codes: ['CB12','CB24','CB12M','CB24M'] },
      { label: 'CV — Casiers Verre',              codes: ['CV12','CV24'] },
      { label: 'CBG — Casiers Bouteille Guinness',codes: ['CBG12','CBG15','CBG24'] },
      { label: 'CVG — Casiers Verre Guinness',    codes: ['CVG12','CVG15','CVG24'] },
      { label: 'VIP / VCP',                       codes: ['VIP12','VIP24','VCP12','VCP24'] },
      { label: 'VIPG — VIP Guinness',             codes: ['VIPG12','VIPG15','VIPG24'] },
    ];
    return defs.map(g => ({
      label: g.label,
      items: g.codes.map(c => this.deconsigneInputs.find(d => d.code === c)!).filter(Boolean)
    })).filter(g => g.items.length > 0);
  }

  private saveAndConfirm(): void {
    this.saving = true;
    this.salesService.updateOrder(this.orderId!, this.order).subscribe({
      next: (saved) => {
        this.saving = false;
        this.order = saved;
        this.syncLineArraysFromSaved(saved.lines);
        this.doConfirm();
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la sauvegarde';
      }
    });
  }

  private doConfirm(): void {
    this.confirming = true;
    this.errorMsg = '';
    this.salesService.confirmOrder(this.orderId!).subscribe({
      next: (updated) => {
        this.confirming = false;
        this.order = updated;
        this.showSuccess(`Bon confirmé — Facture ${updated.invoiceName} créée`);
        if (updated.invoiceId) {
          setTimeout(() => this.router.navigate(['/sales/invoices', updated.invoiceId]), 1500);
        }
      },
      error: (err) => {
        this.confirming = false;
        this.errorMsg = err.error?.message || 'Erreur lors de la confirmation';
      }
    });
  }

  cancelOrder(): void {
    if (!this.orderId) return;
    if (!confirm('Annuler ce bon de commande ?')) return;

    this.salesService.cancelOrder(this.orderId).subscribe({
      next: (updated) => { this.order = updated; },
      error: (err) => { this.errorMsg = err.error?.message || 'Erreur lors de l\'annulation'; }
    });
  }

  get printCompany() { return this.companyService.getCached(); }
  get printCompanyName(): string { return this.companyService.getCached()?.name ?? ''; }
  get printCompanyPhone(): string { return this.companyService.getCached()?.telephone ?? ''; }
  get printCompanyLogoUrl(): string { return this.companyService.getLogoUrl(); }
  get printCompanyLogoDataUrl(): string { return this.companyService.getCachedLogoDataUrl(); }
  openPrint(): void { this.showPrintModal = true; }
  closePrint(): void { this.showPrintModal = false; }

  back(): void {
    this.router.navigate(['/sales/orders']);
  }

  stateLabel(s?: string): string {
    const map: Record<string, string> = {
      draft: 'Brouillon',
      confirmed: 'Confirmé',
      invoiced: 'Facturé',
      cancelled: 'Annulé'
    };
    return map[s ?? ''] ?? s ?? '';
  }

  showSuccess(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 4000);
  }
}
