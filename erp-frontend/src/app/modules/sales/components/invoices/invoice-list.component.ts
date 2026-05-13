import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SalesService, SalesInvoice } from '../../services/sales.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss'
})
export class InvoiceListComponent implements OnInit {
  invoices: SalesInvoice[] = [];
  filteredInvoices: SalesInvoice[] = [];
  loading = false;
  stateFilter = 'all';
  dateFrom = '';
  dateTo = '';

  stateFilters = [
    { value: 'all', label: 'Toutes' },
    { value: 'draft', label: 'Brouillon' },
    { value: 'posted', label: 'Validée' },
    { value: 'paid', label: 'Payée' },
    { value: 'cancelled', label: 'Annulée' }
  ];

  constructor(
    private salesService: SalesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadInvoices();
  }

  loadInvoices(): void {
    this.loading = true;
    this.salesService.getInvoices(this.authService.getCompanyId()).subscribe({
      next: (data) => {
        this.invoices = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  applyFilter(): void {
    this.filteredInvoices = this.invoices.filter(i => {
      if (this.stateFilter !== 'all' && i.state !== this.stateFilter) return false;
      if (this.dateFrom && i.date < this.dateFrom) return false;
      if (this.dateTo && i.date > this.dateTo) return false;
      return true;
    });
  }

  setFilter(state: string): void {
    this.stateFilter = state;
    this.applyFilter();
  }

  clearDateFilter(): void {
    this.dateFrom = '';
    this.dateTo = '';
    this.applyFilter();
  }

  openInvoice(invoice: SalesInvoice): void {
    this.router.navigate(['/sales/invoices', invoice.id]);
  }

  getStateBadge(state: string): string {
    const map: Record<string, string> = {
      draft: 'badge-draft', posted: 'badge-posted',
      paid: 'badge-paid', cancelled: 'badge-cancelled'
    };
    return 'badge ' + (map[state] || 'badge-draft');
  }

  getStateLabel(state: string): string {
    const map: Record<string, string> = {
      draft: 'Brouillon', posted: 'Validée', paid: 'Payée', cancelled: 'Annulée'
    };
    return map[state] || state;
  }

  getProgressPct(invoice: SalesInvoice): number {
    if (!invoice.totalTTC || invoice.totalTTC === 0) return 0;
    return Math.min(100, Math.round(((invoice.montantPaye || 0) / invoice.totalTTC) * 100));
  }
}
