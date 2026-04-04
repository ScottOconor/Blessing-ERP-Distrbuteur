import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockService, StockAdjustment, StockAdjustmentRequest, Product, StockLocation } from '../../services/stock.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-adjustment-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adjustment-list.component.html',
  styleUrl: './adjustment-list.component.scss'
})
export class AdjustmentListComponent implements OnInit {
  adjustments: StockAdjustment[] = [];
  products: Product[] = [];
  locations: StockLocation[] = [];
  loading = false;
  saving = false;
  showModal = false;
  errorMsg = '';
  successMsg = '';

  form: StockAdjustmentRequest = { productId: 0, locationId: 0, newQty: 0, notes: '', companyId: 0 };
  selectedProductQty = 0; // qty actuelle en stock pour le produit sélectionné
  selectedProduct: Product | null = null;

  constructor(private stockService: StockService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.loading = true;
    const cid = this.authService.getCompanyId();
    forkJoin({
      adjustments: this.stockService.getAdjustments(cid),
      products: this.stockService.getProducts(cid),
      locations: this.stockService.getLocations(cid)
    }).subscribe({
      next: ({ adjustments, products, locations }) => {
        this.adjustments = adjustments;
        this.products = products.filter(p => p.type === 'product' || p.type === 'consu');
        this.locations = locations.filter(l => l.usage === 'internal');
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  openNew(): void {
    const cid = this.authService.getCompanyId();
    this.form = { productId: 0, locationId: 0, newQty: 0, notes: '', companyId: cid };
    this.selectedProduct = null;
    this.selectedProductQty = 0;
    this.errorMsg = '';
    this.showModal = true;
  }

  onProductChange(): void {
    const p = this.products.find(p => p.id === +this.form.productId);
    this.selectedProduct = p || null;
    // Charger la quantité actuelle
    if (p) {
      this.stockService.getQuants(this.authService.getCompanyId(), this.form.locationId || undefined, p.id).subscribe({
        next: (quants) => {
          this.selectedProductQty = quants.reduce((sum, q) => sum + (q.quantity || 0), 0);
          this.form.newQty = this.selectedProductQty;
        }
      });
    }
  }

  onLocationChange(): void {
    if (this.form.productId && this.form.locationId) {
      this.stockService.getQuants(this.authService.getCompanyId(), +this.form.locationId, +this.form.productId).subscribe({
        next: (quants) => {
          this.selectedProductQty = quants.reduce((sum, q) => sum + (q.quantity || 0), 0);
          this.form.newQty = this.selectedProductQty;
        }
      });
    }
  }

  getDiff(): number {
    return (this.form.newQty || 0) - this.selectedProductQty;
  }

  save(): void {
    if (!this.form.productId || !this.form.locationId) {
      this.errorMsg = 'Sélectionnez un article et un emplacement';
      return;
    }
    this.saving = true;
    this.errorMsg = '';
    this.stockService.createAdjustment({ ...this.form, companyId: this.authService.getCompanyId() }).subscribe({
      next: () => {
        this.saving = false;
        this.showModal = false;
        this.showSuccess('Ajustement enregistré avec écriture comptable');
        this.loadAll();
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || 'Erreur lors de l\'ajustement';
      }
    });
  }

  showSuccess(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 4000);
  }

  get diffClass(): string {
    const d = this.getDiff();
    if (d > 0) return 'diff-positive';
    if (d < 0) return 'diff-negative';
    return '';
  }
}
