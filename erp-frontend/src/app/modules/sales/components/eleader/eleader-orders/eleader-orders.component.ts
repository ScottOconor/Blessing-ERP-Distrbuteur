import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EleaderService } from '../../../services/eleader.service';
import { SalesOrder } from '../../../services/sales.service';
import { AuthService } from '../../../../../core/auth/auth.service';

@Component({
  selector: 'app-eleader-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './eleader-orders.component.html',
  styleUrl: './eleader-orders.component.scss'
})
export class EleaderOrdersComponent implements OnInit {
  orders: SalesOrder[] = [];
  filteredOrders: SalesOrder[] = [];
  loading = false;
  stateFilter = 'all';
  searchText = '';
  errorMsg = '';
  successMsg = '';
  confirming: number | null = null;
  cancelling: number | null = null;
  confirmTarget: SalesOrder | null = null;
  showConfirmModal = false;

  readonly STATE_FILTERS = [
    { value: 'all',       label: 'Tous' },
    { value: 'draft',     label: 'Brouillon' },
    { value: 'invoiced',  label: 'Facturé' },
    { value: 'cancelled', label: 'Annulé' }
  ];

  constructor(
    private eleaderService: EleaderService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void { this.loadOrders(); }

  loadOrders(): void {
    this.loading = true;
    this.eleaderService.getOrders(this.authService.getCompanyId()).subscribe({
      next: (orders) => { this.orders = orders; this.applyFilters(); this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  applyFilters(): void {
    let list = [...this.orders];
    if (this.stateFilter !== 'all') {
      list = list.filter(o => o.state === this.stateFilter);
    }
    if (this.searchText.trim()) {
      const q = this.searchText.trim().toLowerCase();
      list = list.filter(o =>
        (o.name?.toLowerCase().includes(q)) ||
        (o.partnerName?.toLowerCase().includes(q)) ||
        o.eleaderReference?.toLowerCase().includes(q)
      );
    }
    this.filteredOrders = list;
  }

  askConfirm(order: SalesOrder): void {
    this.confirmTarget = order;
    this.showConfirmModal = true;
  }

  confirmOrder(): void {
    if (!this.confirmTarget) return;
    const id = this.confirmTarget.id!;
    this.confirming = id;
    this.showConfirmModal = false;
    this.errorMsg = '';
    this.eleaderService.confirmOrder(id).subscribe({
      next: (updated) => {
        const idx = this.orders.findIndex(o => o.id === id);
        if (idx >= 0) this.orders[idx] = updated;
        this.applyFilters();
        this.confirming = null;
        this.successMsg = `Bon ${updated.name} confirmé — facture créée.`;
        setTimeout(() => this.successMsg = '', 5000);
      },
      error: (err) => {
        this.errorMsg = err?.error?.message || 'Erreur lors de la confirmation.';
        this.confirming = null;
      }
    });
  }

  cancelOrder(order: SalesOrder): void {
    if (!confirm(`Annuler le bon ${order.name} ?`)) return;
    this.cancelling = order.id!;
    this.eleaderService.cancelOrder(order.id!).subscribe({
      next: (updated) => {
        const idx = this.orders.findIndex(o => o.id === order.id);
        if (idx >= 0) this.orders[idx] = updated;
        this.applyFilters();
        this.cancelling = null;
      },
      error: (err) => {
        this.errorMsg = err?.error?.message || 'Erreur lors de l\'annulation.';
        this.cancelling = null;
      }
    });
  }

  goToImport(): void { this.router.navigate(['/sales/eleader/import']); }

  stateClass(state: string): string {
    const map: Record<string, string> = {
      draft: 'badge-draft', confirmed: 'badge-confirmed',
      invoiced: 'badge-invoiced', cancelled: 'badge-cancelled'
    };
    return map[state] ?? 'badge-draft';
  }

  stateLabel(state: string): string {
    const map: Record<string, string> = {
      draft: 'Brouillon', confirmed: 'Confirmé',
      invoiced: 'Facturé', cancelled: 'Annulé'
    };
    return map[state] ?? state;
  }
}
