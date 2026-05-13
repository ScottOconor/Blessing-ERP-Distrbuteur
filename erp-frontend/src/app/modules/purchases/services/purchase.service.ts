import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface PurchaseOrderLine {
  id?: number;
  productId?: number;
  productCode?: string;
  description: string;
  quantity: number;
  prixUnitaire: number;
  tauxTVA?: number;
  accountCode?: string;
  categoryId?: number;   // catégorie produit (remise, précompte)
  consigne?: boolean;    // exclut PSA/remise
  montantHT?: number;
  montantTVA?: number;
  montantTTC?: number;
}

export interface PurchaseOrder {
  id?: number;
  name?: string;
  date: string;
  dateExpected?: string;
  state?: string;   // draft / confirmed / received / cancelled
  notes?: string;
  partnerId: number;
  partnerName?: string;
  companyId: number;
  totalHT?: number;
  totalTVA?: number;
  totalTTC?: number;
  lines: PurchaseOrderLine[];
  pickingId?: number;
  pickingName?: string;
  pickingState?: string;
  invoiceId?: number;
  invoiceName?: string;
  invoiceState?: string;
  createdAt?: string;
}

export interface PurchaseInvoiceLine {
  id?: number;
  productCode?: string;
  description: string;
  quantity: number;
  prixUnitaire: number;
  tauxTVA?: number;
  accountCode?: string;
  categoryId?: number;
  categoryName?: string;
  montantHT?: number;
  montantTVA?: number;
  montantTTC?: number;
  precompte?: number;
  prixUnitaireTTC?: number;
  consigne?: boolean;
}

export interface RemiseDetail {
  categoryName: string;
  quantite: number;
  montantUnitaire: number;
  montantTotal: number;
  typeRemise?: string;
}

export interface PurchaseInvoicePayment {
  id?: number;
  name?: string;
  date: string;
  amount: number;
  memo?: string;
  state?: string;
  journalId?: number;
  journalName?: string;
}

export interface PurchaseInvoice {
  id?: number;
  name?: string;
  date: string;
  dateEcheance?: string;
  state?: string;              // draft / posted / paid / cancelled
  type?: string;               // invoice / credit_note
  notes?: string;
  partnerId: number;
  partnerName?: string;
  journalId?: number;
  journalName?: string;
  companyId: number;
  warehouseId?: number;
  warehouseName?: string;
  partnerBalance?: number | null;
  purchaseOrderId?: number;
  purchaseOrderName?: string;
  originalInvoiceId?: number;
  originalInvoiceName?: string;
  accountMoveId?: number;
  accountMoveName?: string;
  pickingId?: number;
  pickingState?: string;
  totalHT?: number;
  totalTVA?: number;
  totalTTC?: number;
  montantPaye?: number;
  montantDu?: number;
  totalRemise?: number;
  totalPrecompte?: number;
  totalLiquideNu?: number;
  fraisEnlevementTTC?: number;
  netAPayer?: number;
  lines: PurchaseInvoiceLine[];
  remiseDetails?: RemiseDetail[];
  payments?: PurchaseInvoicePayment[];
  createdAt?: string;
}

@Injectable({ providedIn: 'root' })
export class PurchaseService {
  private base = `${environment.apiUrl}/api/purchases`;

  constructor(private http: HttpClient) {}

  // ===================== COMMANDES =====================

  getOrders(companyId: number): Observable<PurchaseOrder[]> {
    const params = new HttpParams().set('companyId', companyId);
    return this.http.get<PurchaseOrder[]>(`${this.base}/orders`, { params });
  }

  getOrder(id: number): Observable<PurchaseOrder> {
    return this.http.get<PurchaseOrder>(`${this.base}/orders/${id}`);
  }

  createOrder(order: PurchaseOrder): Observable<PurchaseOrder> {
    return this.http.post<PurchaseOrder>(`${this.base}/orders`, order);
  }

  updateOrder(id: number, order: PurchaseOrder): Observable<PurchaseOrder> {
    return this.http.put<PurchaseOrder>(`${this.base}/orders/${id}`, order);
  }

  confirmOrder(id: number): Observable<PurchaseOrder> {
    return this.http.post<PurchaseOrder>(`${this.base}/orders/${id}/confirm`, {});
  }

  receiveOrder(id: number): Observable<PurchaseOrder> {
    return this.http.post<PurchaseOrder>(`${this.base}/orders/${id}/receive`, {});
  }

  cancelOrder(id: number): Observable<PurchaseOrder> {
    return this.http.post<PurchaseOrder>(`${this.base}/orders/${id}/cancel`, {});
  }

  // ===================== FACTURES FOURNISSEURS =====================

  getInvoices(companyId: number): Observable<PurchaseInvoice[]> {
    const params = new HttpParams().set('companyId', companyId);
    return this.http.get<PurchaseInvoice[]>(`${this.base}/invoices`, { params });
  }

  getInvoice(id: number): Observable<PurchaseInvoice> {
    return this.http.get<PurchaseInvoice>(`${this.base}/invoices/${id}`);
  }

  createInvoice(invoice: Partial<PurchaseInvoice>): Observable<PurchaseInvoice> {
    return this.http.post<PurchaseInvoice>(`${this.base}/invoices`, invoice);
  }

  updateInvoice(id: number, invoice: Partial<PurchaseInvoice>): Observable<PurchaseInvoice> {
    return this.http.put<PurchaseInvoice>(`${this.base}/invoices/${id}`, invoice);
  }

  postInvoice(id: number): Observable<PurchaseInvoice> {
    return this.http.post<PurchaseInvoice>(`${this.base}/invoices/${id}/post`, {});
  }

  cancelInvoice(id: number): Observable<PurchaseInvoice> {
    return this.http.post<PurchaseInvoice>(`${this.base}/invoices/${id}/cancel`, {});
  }

  reverseInvoiceEntries(id: number): Observable<PurchaseInvoice> {
    return this.http.post<PurchaseInvoice>(`${this.base}/invoices/${id}/reverse-entries`, {});
  }

  generateRemises(id: number): Observable<any> {
    return this.http.post<any>(`${this.base}/invoices/${id}/generate-remises`, {});
  }

  setWarehouse(invoiceId: number, warehouseId: number): Observable<PurchaseInvoice> {
    return this.http.patch<PurchaseInvoice>(`${this.base}/invoices/${invoiceId}/warehouse`, null, {
      params: new HttpParams().set('warehouseId', warehouseId)
    });
  }

  // ===================== AVOIRS FOURNISSEURS =====================

  getAvoirs(companyId: number): Observable<PurchaseInvoice[]> {
    const params = new HttpParams().set('companyId', companyId);
    return this.http.get<PurchaseInvoice[]>(`${this.base}/avoirs`, { params });
  }

  createAvoirFromInvoice(invoiceId: number): Observable<PurchaseInvoice> {
    return this.http.post<PurchaseInvoice>(`${this.base}/invoices/${invoiceId}/avoir`, {});
  }

  createAvoirManuel(avoir: Partial<PurchaseInvoice>): Observable<PurchaseInvoice> {
    return this.http.post<PurchaseInvoice>(`${this.base}/avoirs`, avoir);
  }

  // ===================== PAIEMENTS FOURNISSEURS =====================

  createPayment(req: {
    invoiceId: number;
    journalId: number;
    date: string;
    amount: number;
    memo?: string;
  }): Observable<PurchaseInvoicePayment> {
    return this.http.post<PurchaseInvoicePayment>(`${this.base}/payments`, req);
  }

  getPaymentsByInvoice(invoiceId: number): Observable<PurchaseInvoicePayment[]> {
    return this.http.get<PurchaseInvoicePayment[]>(`${this.base}/payments/invoice/${invoiceId}`);
  }
}
