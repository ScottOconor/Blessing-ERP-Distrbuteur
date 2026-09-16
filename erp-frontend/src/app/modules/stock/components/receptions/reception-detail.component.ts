import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { StockService, StockPicking, StockMove, StockPickingType, StockLocation, Product } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AuditFooterComponent } from '../../../../shared/components/audit-footer/audit-footer.component';
import { AuditTrailComponent } from '../../../../shared/components/audit-trail/audit-trail.component';

@Component({
  selector: 'app-reception-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, AuditFooterComponent, AuditTrailComponent],
  templateUrl: './reception-detail.component.html',
  styleUrl: './reception-detail.component.scss'
})
export class ReceptionDetailComponent implements OnInit {
  picking: StockPicking | null = null;
  pickingTypes: StockPickingType[] = [];
  locations: StockLocation[] = [];
  products: Product[] = [];
  loading = false;
  saving = false;
  validating = false;
  cancelling = false;
  errorMsg = '';
  successMsg = '';
  isNew = false;
  @ViewChildren('productInput') productInputs!: QueryList<ElementRef>;

  // Form fields
  selectedTypeId!: number;
  selectedSrcId!: number;
  selectedDestId!: number;
  partnerName = '';
  origin = '';
  notes = '';
  scheduledDate = '';

  lines: Array<{
    productId: number | null;
    productSearch: string;
    showSuggestions: boolean;
    qtyDemanded: number;
    qtyDone: number;
    priceUnit: number;
    uomName: string;
  }> = [];

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
      products: this.stockService.getProducts(this.companyId)
    }).subscribe(({ types, locations, products }) => {
      this.pickingTypes = types.filter(t => t.code === 'incoming');
      this.locations = locations;
      this.products = products.filter(p => p.type === 'product' || p.type === 'consu');

      if (this.isNew) {
        this.scheduledDate = new Date().toISOString().split('T')[0];
        const defaultType = this.pickingTypes[0];
        if (defaultType) {
          this.selectedTypeId = defaultType.id!;
          this.applyPickingTypeDefaults(defaultType.id!);
        }
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
        this.partnerName = p.partnerName || '';
        this.origin = p.origin || '';
        this.notes = p.notes || '';
        this.scheduledDate = p.scheduledDate || '';
        this.lines = (p.moves || []).map(m => ({
          productId: m.productId,
          productSearch: this.productLabel(m.productId),
          showSuggestions: false,
          qtyDemanded: m.qtyDemanded,
          qtyDone: m.qtyDone ?? m.qtyDemanded,
          priceUnit: m.priceUnit ?? 0,
          uomName: m.uomName || ''
        }));
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  private applyPickingTypeDefaults(typeId: number): void {
    const pt = this.pickingTypes.find(t => t.id === typeId);
    if (pt) {
      if (pt.defaultLocationSrcId) this.selectedSrcId = pt.defaultLocationSrcId;
      if (pt.defaultLocationDestId) this.selectedDestId = pt.defaultLocationDestId;
    } else {
      // fallback si le type n'a pas de defaults configurés
      const supplier = this.locations.find(l => l.usage === 'supplier');
      const stock = this.locations.find(l => l.usage === 'internal');
      if (supplier) this.selectedSrcId = supplier.id!;
      if (stock) this.selectedDestId = stock.id!;
    }
  }

  onTypeChange(): void {
    if (this.isNew) this.applyPickingTypeDefaults(this.selectedTypeId);
  }

  addLine(): void {
    this.lines.push({ productId: null, productSearch: '', showSuggestions: false, qtyDemanded: 1, qtyDone: 1, priceUnit: 0, uomName: '' });
  }

  removeLine(i: number): void {
    this.lines.splice(i, 1);
  }

  onProductChange(i: number): void {
    const pid = this.lines[i].productId;
    const prod = this.products.find(p => p.id === Number(pid));
    if (prod) {
      this.lines[i].uomName = prod.uomName || '';
      this.lines[i].priceUnit = prod.standardPrice || 0;
    }
  }

  filteredProducts(i: number): Product[] {
    const q = (this.lines[i].productSearch || '').toLowerCase().trim();
    const list = q
      ? this.products.filter(p =>
          p.name.toLowerCase().includes(q) ||
          (p.defaultCode || '').toLowerCase().includes(q)
        )
      : this.products;
    return list.slice(0, 25);
  }

  onProductSearch(i: number): void {
    this.lines[i].productId = null;
    this.lines[i].showSuggestions = true;
  }

  selectProduct(i: number, p: Product): void {
    this.lines[i].productId = p.id!;
    this.lines[i].productSearch = this.productLabel(p.id!);
    this.lines[i].showSuggestions = false;
    this.lines[i].uomName = p.uomName || '';
    this.lines[i].priceUnit = p.standardPrice || 0;
  }

  onProductEnter(i: number, e: Event): void {
    e.preventDefault();
    const s = this.filteredProducts(i);
    if (s.length > 0) { this.selectProduct(i, s[0]); return; }
    // si déjà sélectionné, passe à la ligne suivante
    if (this.lines[i].productId) this.onLineEnter();
  }

  onLineEnter(): void {
    this.addLine();
    setTimeout(() => {
      const inputs = this.productInputs.toArray();
      if (inputs.length > 0) inputs[inputs.length - 1].nativeElement.focus();
    }, 50);
  }

  hideSuggestions(i: number): void {
    setTimeout(() => { this.lines[i].showSuggestions = false; }, 150);
  }

  productLabel(id: number | null): string {
    if (!id) return '';
    const p = this.products.find(x => x.id === Number(id));
    return p ? (p.defaultCode ? `[${p.defaultCode}] ` : '') + p.name : '';
  }

  get isDraft(): boolean { return !this.picking || this.picking.state === 'draft'; }
  get isDone(): boolean { return this.picking?.state === 'done'; }
  get isCancelled(): boolean { return this.picking?.state === 'cancelled'; }

  save(): void {
    if (!this.selectedTypeId || this.lines.length === 0) {
      this.errorMsg = 'Sélectionner un type et ajouter au moins une ligne';
      return;
    }
    this.saving = true;
    this.errorMsg = '';
    const req = {
      pickingTypeId: this.selectedTypeId,
      locationId: this.selectedSrcId,
      locationDestId: this.selectedDestId,
      partnerName: this.partnerName,
      origin: this.origin,
      notes: this.notes,
      scheduledDate: this.scheduledDate,
      companyId: this.companyId,
      moves: this.lines
        .filter(l => l.productId)
        .map(l => ({
          productId: Number(l.productId),
          qtyDemanded: l.qtyDemanded,
          qtyDone: l.qtyDone,
          priceUnit: l.priceUnit
        }))
    };
    const obs = this.isNew
      ? this.stockService.createPicking(req)
      : this.stockService.updatePicking(this.picking!.id!, req);
    obs.subscribe({
      next: (p) => {
        this.saving = false;
        if (this.isNew) {
          this.router.navigate(['/stock/receptions', p.id]);
        } else {
          this.picking = p;
          this.successMsg = 'Enregistré avec succès';
          setTimeout(() => this.successMsg = '', 3000);
        }
      },
      error: (e) => { this.saving = false; this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  /** Une réception inter-agences (transferReception + remoteAgencyId) doit passer par les
   *  méthodes dédiées confirmInterCompanyReception/cancelInterCompanyReception plutôt que par
   *  validatePicking/cancelPicking : ce sont elles qui notifient l'agence expéditrice, sans quoi
   *  son expédition reste indéfiniment "en attente de réception" même après confirmation/annulation
   *  ici. */
  get isInterAgencyReception(): boolean {
    return !!this.picking?.transferReception && !!this.picking?.remoteAgencyId;
  }

  validate(): void {
    if (!this.picking) return;
    this.validating = true;
    this.errorMsg = '';

    if (this.isInterAgencyReception) {
      this.stockService.confirmInterCompanyReception(this.picking.id!).subscribe({
        next: (p) => {
          this.validating = false; this.picking = p;
          if (p.senderNotifyWarning) this.errorMsg = p.senderNotifyWarning;
          this.loadPicking(p.id!);
        },
        error: (e) => { this.validating = false; this.errorMsg = e.error?.message || 'Erreur validation'; }
      });
      return;
    }

    // Si brouillon, sauvegarder d'abord les qtyDone
    const req = {
      pickingTypeId: this.selectedTypeId,
      locationId: this.selectedSrcId,
      locationDestId: this.selectedDestId,
      partnerName: this.partnerName,
      origin: this.origin,
      notes: this.notes,
      scheduledDate: this.scheduledDate,
      companyId: this.companyId,
      moves: this.lines.filter(l => l.productId).map(l => ({
        productId: Number(l.productId),
        qtyDemanded: l.qtyDemanded,
        qtyDone: l.qtyDone,
        priceUnit: l.priceUnit
      }))
    };
    this.stockService.updatePicking(this.picking.id!, req).subscribe({
      next: () => {
        this.stockService.validatePicking(this.picking!.id!).subscribe({
          next: (p) => { this.validating = false; this.picking = p; this.loadPicking(p.id!); },
          error: (e) => { this.validating = false; this.errorMsg = e.error?.message || 'Erreur validation'; }
        });
      },
      error: (e) => { this.validating = false; this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  cancel(): void {
    if (!this.picking || !confirm('Annuler cette réception ?')) return;
    this.cancelling = true;

    if (this.isInterAgencyReception) {
      this.stockService.cancelInterCompanyReception(this.picking.id!).subscribe({
        next: (p) => {
          this.cancelling = false; this.picking = p;
          if (p.senderNotifyWarning) this.errorMsg = p.senderNotifyWarning;
        },
        error: (e) => { this.cancelling = false; this.errorMsg = e.error?.message || 'Erreur'; }
      });
      return;
    }

    this.stockService.cancelPicking(this.picking.id!).subscribe({
      next: (p) => { this.cancelling = false; this.picking = p; },
      error: (e) => { this.cancelling = false; this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  get lineTotal(): number {
    return this.lines.reduce((s, l) => s + l.qtyDone * l.priceUnit, 0);
  }

  productName(id: number | null): string {
    return this.products.find(p => p.id === Number(id))?.name || '';
  }

  locationName(id: number): string {
    return this.locations.find(l => l.id === Number(id))?.completeName
      || this.locations.find(l => l.id === Number(id))?.name || '';
  }

  stateLabel(s: string): string {
    return { draft: 'Brouillon', confirmed: 'Confirmé', done: 'Validé', cancelled: 'Annulé' }[s] || s;
  }
}
