import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaces
export interface SalesOrderLine {
  id?: number;
  productId?: number;
  productCode?: string;
  description: string;
  quantity: number;
  prixUnitaire: number;
  tauxRemise?: number;   // default 0
  tauxTVA?: number;      // e.g. 19.25
  accountCode?: string;
  categoryId?: number;   // catégorie produit (ristourne, enlèvement)
  consigne?: boolean;    // exclut PSA/ristourne/enlèvement
  montantHT?: number;
  montantTVA?: number;
  montantTTC?: number;
}

export interface SalesOrder {
  id?: number;
  name?: string;
  date: string;
  dateEcheance?: string;
  state?: string;        // draft/confirmed/invoiced/cancelled
  notes?: string;
  partnerId: number;
  partnerName?: string;
  journalId: number;
  journalName?: string;
  companyId: number;
  totalHT?: number;
  totalTVA?: number;
  totalTTC?: number;
  totalRemise?: number;
  lines: SalesOrderLine[];
  createdAt?: string;
  invoiceId?: number;
  invoiceName?: string;
}

export interface SalesInvoiceLine {
  id?: number;
  productId?: number;
  productCode?: string;
  description: string;
  quantity: number;
  prixUnitaire: number;
  tauxRemise?: number;
  tauxTVA?: number;
  accountCode?: string;
  categoryId?: number;
  categoryName?: string;
  montantHT?: number;
  montantTVA?: number;
  montantTTC?: number;
  precompte?: number;
  fraisEnlevement?: number;
  prixUnitaireTTC?: number;
  consigne?: boolean;
}

export interface RistourneDetail {
  categoryName: string;
  quantite: number;
  montantUnitaire: number;
  montantTotal: number;
  typeRistourne?: string;
}

export interface SalesInvoice {
  id?: number;
  name?: string;
  date: string;
  dateEcheance?: string;
  state?: string;       // draft/posted/paid/cancelled
  type?: string;        // invoice / credit_note
  notes?: string;
  partnerId: number;
  partnerName?: string;
  journalId: number;
  journalName?: string;
  companyId: number;
  salesOrderId?: number;
  salesOrderName?: string;
  originalInvoiceId?: number;
  originalInvoiceName?: string;
  accountMoveId?: number;
  accountMoveName?: string;
  totalHT?: number;
  totalTVA?: number;
  totalTTC?: number;
  montantPaye?: number;
  montantDu?: number;
  totalRistourne?: number;
  fraisEnlevementTTC?: number;
  totalPrecompte?: number;
  totalLiquideNu?: number;
  netAPayer?: number;
  lines: SalesInvoiceLine[];
  ristourneDetails?: RistourneDetail[];
  payments?: InvoicePayment[];
  createdAt?: string;
}

export interface InvoicePayment {
  id?: number;
  name?: string;
  date: string;
  amount: number;
  memo?: string;
  state?: string;
  invoiceId?: number;
  invoiceName?: string;
  journalId: number;
  journalName?: string;
  companyId: number;
  accountMoveId?: number;
  createdAt?: string;
}

export interface SalesClient {
  id?: number;
  ref?: string;
  name: string;
  type: string;
  phone?: string;
  email?: string;
  address?: string;
  companyId: number;
  tauxRistourne?: number;
  tauxPrecompte?: number;
  creditLimit?: number;
  receivableAccountCode?: string;
}

// ===== Sales Stats =====
export interface SalesStatsLine {
  productCode?: string;
  productName?: string;
  qty: number;
  prixMoyen: number;
  montantHT: number;
  montantTTC: number;
  remise: number;
}

export interface SalesStatsClient {
  clientName: string;
  clientRef?: string;
  lines: SalesStatsLine[];
  totalQty: number;
  totalHT: number;
  totalTTC: number;
  totalRemise: number;
}

export interface SalesStatsResponse {
  dateFrom: string;
  dateTo: string;
  clients: SalesStatsClient[];
  grandTotalQty: number;
  grandTotalHT: number;
  grandTotalTTC: number;
  grandTotalRemise: number;
  totalInvoices: number;
}

@Injectable({ providedIn: 'root' })
export class SalesService {
  private apiUrl = `http://${window.location.hostname}:8085/api/sales`;

  constructor(private http: HttpClient) {}

  // Orders
  getOrders(companyId: number): Observable<SalesOrder[]> {
    return this.http.get<SalesOrder[]>(`${this.apiUrl}/orders`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }
  getOrder(id: number): Observable<SalesOrder> {
    return this.http.get<SalesOrder>(`${this.apiUrl}/orders/${id}`);
  }
  createOrder(order: SalesOrder): Observable<SalesOrder> {
    return this.http.post<SalesOrder>(`${this.apiUrl}/orders`, order);
  }
  updateOrder(id: number, order: SalesOrder): Observable<SalesOrder> {
    return this.http.put<SalesOrder>(`${this.apiUrl}/orders/${id}`, order);
  }
  confirmOrder(id: number): Observable<SalesOrder> {
    return this.http.post<SalesOrder>(`${this.apiUrl}/orders/${id}/confirm`, {});
  }
  cancelOrder(id: number): Observable<SalesOrder> {
    return this.http.post<SalesOrder>(`${this.apiUrl}/orders/${id}/cancel`, {});
  }

  // Invoices
  getInvoices(companyId: number): Observable<SalesInvoice[]> {
    return this.http.get<SalesInvoice[]>(`${this.apiUrl}/invoices`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }
  getInvoice(id: number): Observable<SalesInvoice> {
    return this.http.get<SalesInvoice>(`${this.apiUrl}/invoices/${id}`);
  }
  createInvoice(invoice: SalesInvoice): Observable<SalesInvoice> {
    return this.http.post<SalesInvoice>(`${this.apiUrl}/invoices`, invoice);
  }
  updateInvoice(id: number, invoice: SalesInvoice): Observable<SalesInvoice> {
    return this.http.put<SalesInvoice>(`${this.apiUrl}/invoices/${id}`, invoice);
  }
  postInvoice(id: number): Observable<SalesInvoice> {
    return this.http.post<SalesInvoice>(`${this.apiUrl}/invoices/${id}/post`, {});
  }
  cancelInvoice(id: number): Observable<SalesInvoice> {
    return this.http.post<SalesInvoice>(`${this.apiUrl}/invoices/${id}/cancel`, {});
  }

  reverseInvoiceEntries(id: number): Observable<SalesInvoice> {
    return this.http.post<SalesInvoice>(`${this.apiUrl}/invoices/${id}/reverse-entries`, {});
  }

  generateRistournes(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/invoices/${id}/generate-ristournes`, {});
  }

  // Avoirs (credit notes)
  getAvoirs(companyId: number): Observable<SalesInvoice[]> {
    return this.http.get<SalesInvoice[]>(`${this.apiUrl}/avoirs`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }
  createAvoirFromInvoice(invoiceId: number): Observable<SalesInvoice> {
    return this.http.post<SalesInvoice>(`${this.apiUrl}/invoices/${invoiceId}/avoir`, {});
  }
  createAvoirManuel(avoir: SalesInvoice): Observable<SalesInvoice> {
    return this.http.post<SalesInvoice>(`${this.apiUrl}/avoirs`, { ...avoir, type: 'credit_note' });
  }

  // Paiements
  createPayment(payment: { invoiceId: number; journalId: number; date: string; amount: number; memo?: string; companyId: number }): Observable<InvoicePayment> {
    return this.http.post<InvoicePayment>(`${this.apiUrl}/payments`, payment);
  }
  getPaymentsByInvoice(invoiceId: number): Observable<InvoicePayment[]> {
    return this.http.get<InvoicePayment[]>(`${this.apiUrl}/payments/invoice/${invoiceId}`);
  }

  // Clients
  getClients(companyId: number): Observable<SalesClient[]> {
    return this.http.get<SalesClient[]>(`${this.apiUrl}/clients`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }
  createClient(client: SalesClient): Observable<SalesClient> {
    return this.http.post<SalesClient>(`${this.apiUrl}/clients`, client);
  }
  updateClient(id: number, client: SalesClient): Observable<SalesClient> {
    return this.http.put<SalesClient>(`${this.apiUrl}/clients/${id}`, client);
  }
  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/clients/${id}`);
  }

  // Stats Reports
  getEtatCommercial(req: { dateFrom: string; dateTo: string; companyId: number }): Observable<SalesStatsResponse> {
    return this.http.post<SalesStatsResponse>(`${this.apiUrl}/stats/etat-commercial`, req);
  }

  getRapportConsolide(req: { dateFrom: string; dateTo: string; companyId: number }): Observable<SalesStatsResponse> {
    return this.http.post<SalesStatsResponse>(`${this.apiUrl}/stats/rapport-consolide`, req);
  }
}
