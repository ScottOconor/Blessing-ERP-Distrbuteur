import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { StockService, StockPicking, StockMove, StockPickingType, StockLocation, Product } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-reception-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
        if (defaultType) this.selectedTypeId = defaultType.id!;
        const supplier = locations.find(l => l.usage === 'supplier');
        const stock = locations.find(l => l.usage === 'internal');
        if (supplier) this.selectedSrcId = supplier.id!;
        if (stock) this.selectedDestId = stock.id!;
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

  addLine(): void {
    this.lines.push({ productId: null, qtyDemanded: 1, qtyDone: 1, priceUnit: 0, uomName: '' });
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

  validate(): void {
    if (!this.picking) return;
    this.validating = true;
    this.errorMsg = '';
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
