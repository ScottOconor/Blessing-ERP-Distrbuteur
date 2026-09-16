import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { StockService, StockPicking, StockPickingType, StockLocation, Product, Warehouse, ReceptionBordereauDTO, BordereauLigneSaisie } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AuditFooterComponent } from '../../../../shared/components/audit-footer/audit-footer.component';
import { AuditTrailComponent } from '../../../../shared/components/audit-trail/audit-trail.component';

@Component({
  selector: 'app-transfert-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, AuditFooterComponent, AuditTrailComponent],
  templateUrl: './transfert-detail.component.html',
  styleUrl: './transfert-detail.component.scss'
})
export class TransfertDetailComponent implements OnInit {
  picking: StockPicking | null = null;
  pickingTypes: StockPickingType[] = [];
  allLocations: StockLocation[] = [];
  internalLocations: StockLocation[] = [];
  virtualLocations: StockLocation[] = [];
  warehouses: Warehouse[] = [];
  products: Product[] = [];

  loading = false;
  saving = false;
  validating = false;
  cancelling = false;
  confirming = false;
  errorMsg = '';
  isNew = false;

  bordereau: ReceptionBordereauDTO | null = null;
  receivedLines: { moveId: number; productName: string; qteCommandee: number; qteRecue: number }[] = [];

  selectedTypeId!: number;
  selectedSrcId!: number;
  selectedDestId!: number;
  selectedSrcWarehouseId: number | '' = '';
  selectedDestWarehouseId: number | '' = '';
  selectedSrcKey = '';
  selectedDestKey = '';
  origin = '';
  notes = '';
  partnerName = '';
  scheduledDate = '';

  lines: Array<{ productId: number | null; qtyDemanded: number; qtyDone: number; priceUnit: number; uomName: string; availableQty: number }> = [];
  availableProducts: { id: number; name: string; defaultCode?: string; uomName?: string; standardPrice?: number; availableQty: number }[] = [];

  // Autocomplete articles par ligne
  lineSearchTexts: string[] = [];
  openDropdownIndex: number | null = null;
  @ViewChildren('productInput') productInputs!: QueryList<ElementRef>;

  lineFilteredProducts(i: number): { id: number; name: string; defaultCode?: string; uomName?: string; standardPrice?: number; availableQty: number }[] {
    const q = (this.lineSearchTexts[i] || '').toLowerCase();
    const src = this.availableProducts.length ? this.availableProducts : this.products.filter(p => p.id != null).map(p => ({ id: p.id!, name: p.name, defaultCode: p.defaultCode, uomName: p.uomName, standardPrice: p.standardPrice, availableQty: 0 }));
    if (!q) return src.slice(0, 60);
    return src.filter(p =>
      p.name.toLowerCase().includes(q) || (p.defaultCode || '').toLowerCase().includes(q)
    ).slice(0, 60);
  }

  selectLineProduct(i: number, p: { id: number; name: string; defaultCode?: string; uomName?: string; standardPrice?: number; availableQty: number }): void {
    this.lines[i].productId = p.id;
    this.lineSearchTexts[i] = p.defaultCode ? `[${p.defaultCode}] ${p.name}` : p.name;
    this.openDropdownIndex = null;
    this.onProductChange(i, p.id);
  }

  onProductEnter(i: number, e: Event): void {
    e.preventDefault();
    const s = this.lineFilteredProducts(i);
    if (s.length > 0) { this.selectLineProduct(i, s[0]); return; }
    if (this.lines[i].productId) this.onLineEnter();
  }

  onLineEnter(): void {
    this.addLine();
    setTimeout(() => {
      const inputs = this.productInputs.toArray();
      if (inputs.length > 0) inputs[inputs.length - 1].nativeElement.focus();
    }, 50);
  }

  onLineBlur(i: number): void { setTimeout(() => { if (this.openDropdownIndex === i) this.openDropdownIndex = null; }, 200); }

  private companyId!: number;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private stockService: StockService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.getCompanyId();
    const id = this.route.snapshot.paramMap.get('id');
    this.isNew = !id || id === 'new';

    forkJoin({
      types: this.stockService.getPickingTypes(this.companyId),
      locations: this.stockService.getLocations(this.companyId),
      products: this.stockService.getProducts(this.companyId),
      warehouses: this.stockService.getWarehouses(this.companyId)
    }).subscribe(({ types, locations, products, warehouses }) => {
      this.pickingTypes = types.filter(t => t.code === 'internal');
      this.allLocations = locations;
      this.internalLocations = locations.filter(l => l.usage === 'internal');
      this.virtualLocations = locations.filter(l => l.usage === 'customer' || l.usage === 'supplier');
      this.products = products.filter(p => p.type === 'product' || p.type === 'consu');
      this.warehouses = warehouses;

      if (this.isNew) {
        const dt = this.pickingTypes[0];
        if (dt) this.selectedTypeId = dt.id!;
        this.scheduledDate = new Date().toISOString().slice(0, 10);
        this.addLine();
      } else {
        this.loadPicking(Number(id));
      }
    });
  }

  loadPicking(id: number): void {
    this.loading = true;
    this.stockService.getPicking(id).subscribe({
      next: (p) => {
        this.picking = p;
        this.selectedTypeId = p.pickingTypeId;
        this.selectedSrcId = p.locationId!;
        this.selectedDestId = p.locationDestId!;
        this.selectedSrcWarehouseId = p.sourceWarehouseId || '';
        this.selectedDestWarehouseId = p.destWarehouseId || '';
        this.selectedSrcKey = p.sourceWarehouseId ? `w:${p.sourceWarehouseId}`
          : (this.isVirtualLocationId(p.locationId) ? `l:${p.locationId}` : '');
        this.selectedDestKey = p.destWarehouseId ? `w:${p.destWarehouseId}`
          : (this.isVirtualLocationId(p.locationDestId) ? `l:${p.locationDestId}` : '');
        this.onSrcLocationChange();
        this.origin = p.origin || '';
        this.notes = p.notes || '';
        this.partnerName = p.partnerName || '';
        this.scheduledDate = p.scheduledDate || '';
        this.lines = (p.moves || []).map(m => ({
          productId: m.productId, qtyDemanded: m.qtyDemanded,
          qtyDone: m.qtyDone ?? m.qtyDemanded, priceUnit: m.priceUnit ?? 0,
          uomName: m.uomName || '', availableQty: m.availableQty ?? 0
        }));
        this.lineSearchTexts = (p.moves || []).map(m => {
          const prod = this.products.find(pr => pr.id === m.productId);
          return prod ? (prod.defaultCode ? `[${prod.defaultCode}] ${prod.name}` : prod.name) : (m.productName || '');
        });
        if (p.transferReception && p.state === 'pending_reception') {
          this.stockService.getTransferBordereau(p.id!).subscribe(b => {
            this.bordereau = b;
            this.receivedLines = (b.lignes || []).map(l => ({
              moveId: l.moveId,
              productName: l.productName || '',
              qteCommandee: Number(l.qteCommandee),
              qteRecue: Number(l.qteCommandee)
            }));
          });
        }
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  private isVirtualLocationId(locationId?: number | null): boolean {
    return !!locationId && this.virtualLocations.some(l => l.id === locationId);
  }

  get srcIsVirtual(): boolean {
    const loc = this.allLocations.find(l => l.id === Number(this.selectedSrcId));
    return !!loc && loc.usage !== 'internal';
  }

  onSrcKeyChange(): void {
    if (!this.selectedSrcKey) {
      this.selectedSrcId = null!; this.selectedSrcWarehouseId = ''; this.availableProducts = [];
      return;
    }
    const [kind, rawId] = this.selectedSrcKey.split(':');
    const id = Number(rawId);
    if (kind === 'w') {
      this.selectedSrcWarehouseId = id;
      const wh = this.warehouses.find(w => w.id === id);
      this.selectedSrcId = wh?.stockLocationId ?? null!;
      // Auto-sélectionner le type d'opération interne de l'entrepôt source
      const whType = this.pickingTypes.find(pt => pt.warehouseId === id);
      if (whType?.id) this.selectedTypeId = whType.id;
    } else {
      this.selectedSrcWarehouseId = '';
      this.selectedSrcId = id;
    }
    if (this.selectedDestId && Number(this.selectedSrcId) === Number(this.selectedDestId)) {
      this.errorMsg = 'Source et destination doivent être différentes';
      setTimeout(() => this.errorMsg = '', 4000);
      this.selectedSrcKey = ''; this.selectedSrcId = null!; this.selectedSrcWarehouseId = '';
      this.availableProducts = [];
      return;
    }
    this.onSrcLocationChange();
  }

  onDestKeyChange(): void {
    if (!this.selectedDestKey) { this.selectedDestId = null!; this.selectedDestWarehouseId = ''; return; }
    const [kind, rawId] = this.selectedDestKey.split(':');
    const id = Number(rawId);
    // Résoudre l'emplacement de stock RÉEL avant de comparer à la source : `id` est un id
    // d'entrepôt (kind='w') ou d'emplacement virtuel (kind='l'), pas forcément l'id d'emplacement —
    // comparer directement `id` à `selectedSrcId` (déjà résolu en emplacement) déclenchait de faux
    // positifs dès que l'id d'un entrepôt coïncidait numériquement avec l'id d'emplacement de la
    // source (deux séquences auto-incrémentées indépendantes qui se recoupent inévitablement).
    let destWarehouseId: number | '' = '';
    let destLocationId: number;
    if (kind === 'w') {
      destWarehouseId = id;
      const wh = this.warehouses.find(w => w.id === id);
      destLocationId = wh?.stockLocationId ?? null!;
    } else {
      destLocationId = id;
    }
    if (this.selectedSrcId && Number(this.selectedSrcId) === Number(destLocationId)) {
      this.errorMsg = 'Source et destination doivent être différentes';
      setTimeout(() => this.errorMsg = '', 4000);
      this.selectedDestKey = ''; this.selectedDestId = null!; this.selectedDestWarehouseId = '';
      return;
    }
    this.selectedDestWarehouseId = destWarehouseId;
    this.selectedDestId = destLocationId;
  }

  addLine(): void {
    this.lines.push({ productId: null, qtyDemanded: 1, qtyDone: 1, priceUnit: 0, uomName: '', availableQty: 0 });
    this.lineSearchTexts.push('');
  }
  removeLine(i: number): void { this.lines.splice(i, 1); this.lineSearchTexts.splice(i, 1); }

  onProductChange(i: number, newProductId: number | null): void {
    if (!this.selectedSrcId) {
      this.errorMsg = "Sélectionnez d'abord la source avant de choisir un article.";
      this.lines[i].productId = null;
      setTimeout(() => this.errorMsg = '', 4000);
      return;
    }
    const productId = Number(newProductId);
    const avail = this.availableProducts.find(p => p.id === productId);
    const prod = avail ?? this.products.find(p => p.id === productId);
    if (prod) {
      this.lines[i].uomName = prod.uomName || '';
      this.lines[i].priceUnit = prod.standardPrice || 0;
      this.lines[i].availableQty = avail?.availableQty ?? 0;
      if (!avail) this.fetchQty(i, productId);
    } else {
      this.lines[i].uomName = '';
      this.lines[i].priceUnit = 0;
      this.lines[i].availableQty = 0;
    }
  }

  onSrcLocationChange(): void {
    const locationId = Number(this.selectedSrcId);
    if (!locationId) { this.availableProducts = []; return; }
    this.stockService.getQuants(this.companyId, locationId).subscribe(quants => {
      const inStock = quants.filter(q => q.availableQuantity > 0);
      this.availableProducts = inStock.map(q => {
        const prod = this.products.find(p => p.id === q.productId);
        return {
          id: q.productId,
          name: prod?.name || q.productName || '',
          defaultCode: prod?.defaultCode || q.productCode,
          uomName: prod?.uomName || q.uomName,
          standardPrice: prod?.standardPrice ?? q.standardPrice,
          availableQty: q.availableQuantity
        };
      });
      // Rafraîchir les qtés des lignes existantes
      this.lines.forEach((line, i) => {
        const productId = Number(line.productId);
        if (productId) this.fetchQty(i, productId);
      });
    });
  }

  private fetchQty(i: number, productId: number): void {
    const locationId = Number(this.selectedSrcId);
    if (!locationId) { this.lines[i].availableQty = 0; return; }
    this.stockService.getQuants(this.companyId, locationId, productId).subscribe(q => {
      this.lines[i].availableQty = q.reduce((s, qq) => s + qq.availableQuantity, 0);
    });
  }

  get isDraft(): boolean { return !this.picking || this.picking.state === 'draft'; }
  get isDone(): boolean { return this.picking?.state === 'done'; }
  get isCancelled(): boolean { return this.picking?.state === 'cancelled'; }
  get isPendingReception(): boolean { return this.picking?.state === 'pending_reception'; }
  get isTransferReception(): boolean { return this.picking?.transferReception === true; }
  get lineTotal(): number { return this.lines.reduce((s, l) => s + l.qtyDone * l.priceUnit, 0); }
  get backRoute(): string { return '/stock/transferts'; }

  buildReq() {
    return {
      pickingTypeId: this.selectedTypeId, locationId: this.selectedSrcId, locationDestId: this.selectedDestId,
      origin: this.origin, notes: this.notes, partnerName: this.partnerName,
      scheduledDate: this.scheduledDate, companyId: this.companyId,
      moves: this.lines.filter(l => l.productId).map(l => ({
        productId: Number(l.productId), qtyDemanded: l.qtyDemanded, qtyDone: l.qtyDone, priceUnit: l.priceUnit
      }))
    };
  }

  save(): void {
    if (!this.selectedSrcId) { this.errorMsg = 'Sélectionnez un emplacement source'; return; }
    if (!this.selectedDestId) { this.errorMsg = 'Sélectionnez un emplacement destination'; return; }
    if (Number(this.selectedSrcId) === Number(this.selectedDestId)) { this.errorMsg = 'Source et destination doivent être différentes'; return; }
    if (this.lines.filter(l => l.productId).length === 0) { this.errorMsg = 'Ajoutez au moins un article'; return; }
    const hasQty = this.lines.filter(l => l.productId).every(l => l.qtyDemanded > 0);
    if (!hasQty) { this.errorMsg = 'Toutes les quantités doivent être supérieures à 0'; return; }
    // Bloquer si une quantité dépasse le disponible (stock - réservé) — non applicable si la
    // source est un emplacement virtuel (client/fournisseur), qui n'a pas de stock physique.
    if (!this.srcIsVirtual) {
      const overQty = this.lines.filter(l => l.productId).find(l => l.qtyDemanded > l.availableQty);
      if (overQty) {
        const prod = this.products.find(p => p.id === Number(overQty.productId));
        this.errorMsg = `Stock insuffisant pour « ${prod?.name || overQty.productId} » — disponible : ${overQty.availableQty}, demandé : ${overQty.qtyDemanded}`;
        return;
      }
    }
    this.saving = true; this.errorMsg = '';
    const obs = this.isNew ? this.stockService.createPicking(this.buildReq()) : this.stockService.updatePicking(this.picking!.id!, this.buildReq());
    obs.subscribe({
      next: (p) => { this.saving = false; this.isNew ? this.router.navigate(['/stock/transferts', p.id]) : (this.picking = p); },
      error: (e) => { this.saving = false; this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  validate(): void {
    if (!this.picking) return;
    this.validating = true; this.errorMsg = '';
    this.stockService.updatePicking(this.picking.id!, this.buildReq()).subscribe({
      next: () => {
        this.stockService.validatePicking(this.picking!.id!).subscribe({
          next: (p) => { this.validating = false; this.picking = p; this.loadPicking(p.id!); },
          error: (e) => { this.validating = false; this.errorMsg = e.error?.message || 'Stock insuffisant ou erreur'; }
        });
      },
      error: (e) => { this.validating = false; this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  cancel(): void {
    if (!this.picking || !confirm('Annuler ce transfert ?')) return;
    this.cancelling = true;
    this.stockService.cancelPicking(this.picking.id!).subscribe({
      next: (p) => { this.cancelling = false; this.picking = p; },
      error: (e) => { this.cancelling = false; this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  confirmReception(): void {
    if (!this.picking || !confirm('Confirmer la réception de ce transfert ?')) return;
    this.confirming = true; this.errorMsg = '';
    const lignes: BordereauLigneSaisie[] = this.receivedLines.map(l => ({ moveId: l.moveId, qteRecue: l.qteRecue }));
    this.stockService.confirmTransferReception(this.picking.id!, lignes).subscribe({
      next: (p) => { this.confirming = false; this.picking = p; this.loadPicking(p.id!); },
      error: (e) => { this.confirming = false; this.errorMsg = e.error?.message || 'Erreur lors de la confirmation'; }
    });
  }

  downloadBordereau(): void {
    if (!this.picking) return;
    this.stockService.downloadTransferBordereauPdf(this.picking.id!).subscribe(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url;
      a.download = `bordereau-reception-${this.picking!.name || this.picking!.id}.pdf`;
      a.click(); URL.revokeObjectURL(url);
    });
  }

  productName(id: number | null): string { return this.products.find(p => p.id === Number(id))?.name || ''; }
  locationName(id: number): string { return this.allLocations.find(l => l.id === Number(id))?.completeName || this.allLocations.find(l => l.id === Number(id))?.name || ''; }
  stateLabel(s: string): string {
    return ({ draft: 'Brouillon', done: 'Effectué', cancelled: 'Annulé', pending_reception: 'En attente de réception', confirmed: 'Confirmé' } as Record<string, string>)[s] || s;
  }
}
