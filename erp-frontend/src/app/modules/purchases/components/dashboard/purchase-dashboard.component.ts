import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PurchaseService, PurchaseOrder } from '../../services/purchase.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-purchase-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './purchase-dashboard.component.html',
  styleUrl: './purchase-dashboard.component.scss'
})
export class PurchaseDashboardComponent implements OnInit {
  orders: PurchaseOrder[] = [];
  companyId = 1;

  get totalOrders() { return this.orders.length; }
  get draftOrders() { return this.orders.filter(o => o.state === 'draft').length; }
  get confirmedOrders() { return this.orders.filter(o => o.state === 'confirmed').length; }
  get receivedOrders() { return this.orders.filter(o => o.state === 'received').length; }
  get recentOrders() { return this.orders.slice(0, 5); }

  constructor(
    private purchaseService: PurchaseService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const cid = this.authService.getCompanyId();
    if (cid) this.companyId = cid;
    this.purchaseService.getOrders(this.companyId).subscribe({
      next: data => this.orders = data,
      error: () => {}
    });
  }

  newOrder(): void { this.router.navigate(['/purchases/orders/new']); }
  viewOrders(): void { this.router.navigate(['/purchases/orders']); }
  stateLabel(s?: string): string {
    const map: Record<string, string> = { draft: 'Brouillon', confirmed: 'Confirmée', received: 'Réceptionnée', cancelled: 'Annulée' };
    return map[s ?? ''] ?? s ?? '';
  }
}
