import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { StockService, StockPicking, StockPickingType, StockLocation, Product } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-livraison-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livraison-detail.component.html',
  styleUrl: './livraison-detail.component.scss'
})
export class LivraisonDetailComponent implements OnInit {
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

  selectedTypeId!: number;
  selectedSrcId!: number;
  selectedDestId!: number;
  partnerName = '';
  origin = '';
  notes = '';
  scheduledDate = '';

  lines: Array<{ productId: number | null; qtyDemanded: number; qtyDone: number; priceUnit: number; uomName: string; availableQty: number }> = [];
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
      this.pickingTypes = types.filter(t => t.code === 'outgoing');
      this.locations = locations;
      this.products = products.filter(p => p.type === 'product' || p.type === 'consu');

      if (this.isNew) {
        const dt = this.pickingTypes[0];
        if (dt) { this.selectedTypeId = dt.id!; this.selectedSrcId = dt.defaultLocationSrcId!; this.selectedDestId = dt.defaultLocationDestId!; }
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
        this.partnerName = p.partnerName || '';
        this.origin = p.origin || '';
        this.notes = p.notes || '';
        this.scheduledDate = p.scheduledDate || '';
        this.lines = (p.moves || []).map(m => ({
          productId: m.productId, qtyDemanded: m.qtyDemanded,
          qtyDone: m.qtyDone ?? m.qtyDemanded, priceUnit: m.priceUnit ?? 0,
          uomName: m.uomName || '', availableQty: m.availableQty ?? 0
        }));
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  addLine(): void {
    this.lines.push({ productId: null, qtyDemanded: 1, qtyDone: 1, priceUnit: 0, uomName: '', availableQty: 0 });
  }
  removeLine(i: number): void { this.lines.splice(i, 1); }

  onProductChange(i: number): void {
    const prod = this.products.find(p => p.id === Number(this.lines[i].productId));
    if (prod) {
      this.lines[i].uomName = prod.uomName || '';
      this.lines[i].priceUnit = prod.standardPrice || 0;
      // Charger dispo
      this.stockService.getQuants(this.companyId, this.selectedSrcId, prod.id).subscribe(q => {
        this.lines[i].availableQty = q.reduce((s, qq) => s + qq.availableQuantity, 0);
      });
    }
  }

  get isDraft(): boolean { return !this.picking || this.picking.state === 'draft'; }
  get isDone(): boolean { return this.picking?.state === 'done'; }
  get isCancelled(): boolean { return this.picking?.state === 'cancelled'; }
  get lineTotal(): number { return this.lines.reduce((s, l) => s + l.qtyDone * l.priceUnit, 0); }

  buildReq() {
    return {
      pickingTypeId: this.selectedTypeId, locationId: this.selectedSrcId, locationDestId: this.selectedDestId,
      partnerName: this.partnerName, origin: this.origin, notes: this.notes,
      scheduledDate: this.scheduledDate, companyId: this.companyId,
      moves: this.lines.filter(l => l.productId).map(l => ({
        productId: Number(l.productId), qtyDemanded: l.qtyDemanded, qtyDone: l.qtyDone, priceUnit: l.priceUnit
      }))
    };
  }

  save(): void {
    if (!this.selectedTypeId || this.lines.filter(l => l.productId).length === 0) { this.errorMsg = 'Sélectionner un type et ajouter au moins une ligne'; return; }
    this.saving = true; this.errorMsg = '';
    const obs = this.isNew ? this.stockService.createPicking(this.buildReq()) : this.stockService.updatePicking(this.picking!.id!, this.buildReq());
    obs.subscribe({
      next: (p) => { this.saving = false; this.isNew ? this.router.navigate(['/stock/livraisons', p.id]) : (this.picking = p); },
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
    if (!this.picking || !confirm('Annuler cette livraison ?')) return;
    this.cancelling = true;
    this.stockService.cancelPicking(this.picking.id!).subscribe({
      next: (p) => { this.cancelling = false; this.picking = p; },
      error: (e) => { this.cancelling = false; this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  productName(id: number | null): string { return this.products.find(p => p.id === Number(id))?.name || ''; }
  locationName(id: number): string { return this.locations.find(l => l.id === Number(id))?.completeName || this.locations.find(l => l.id === Number(id))?.name || ''; }
  stateLabel(s: string): string { return { draft: 'Brouillon', done: 'Livré', cancelled: 'Annulé' }[s] || s; }
}
