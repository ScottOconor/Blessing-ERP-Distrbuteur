import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

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
  rabaisUnitaire?: number;
  totalRabaisLigne?: number;
  totalRabaisLigneTTC?: number;
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
  totalPrecompte?: number;
  fraisEnlevementTTC?: number;
  totalRabais?: number;
  totalRabaisTTC?: number;
  netAPayer?: number;
  lines: SalesOrderLine[];
  warehouseId?: number;
  warehouseName?: string;
  createdAt?: string;
  createdBy?: string;
  invoiceId?: number;
  invoiceName?: string;
  eleaderReference?: string;
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
  uomName?: string;
  montantHT?: number;
  montantTVA?: number;
  montantTTC?: number;
  precompte?: number;
  fraisEnlevement?: number;
  fraisEnlevementTVA?: number;
  prixUnitaireTTC?: number;
  consigne?: boolean;
  guinessTaxe?: number;
  /** Rabais unitaire HT accordé à ce client (= salePrice standard - prixClient) */
  rabaisUnitaire?: number;
  /** Rabais unitaire TTC = rabaisUnitaire × (1 + TVA% + Précompte%) */
  rabaisUnitaireTTC?: number;
  /** Montant total du rabais HT sur cette ligne = quantite × rabaisUnitaire */
  totalRabaisLigne?: number;
  /** Montant total du rabais TTC sur cette ligne */
  totalRabaisLigneTTC?: number;
}

export interface PrixClientArticle {
  id?: number;
  productId: number;
  productCode?: string;
  productName?: string;
  salePriceStandard?: number;
  clientId: number;
  clientName?: string;
  prixClient: number;
  /** Rabais calculé = salePriceStandard - prixClient */
  rabaisUnitaire?: number;
  companyId: number;
}

export interface AvailableCredit {
  id: number;
  name: string;
  date: string;
  montantTotal: number;
  montantDu: number;
  notes?: string;
  originalInvoiceId?: number;
  originalInvoiceName?: string;
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
  warehouseId?: number;
  warehouseName?: string;
  partnerBalance?: number | null;
  partnerCreditDisponible?: number | null;
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
  fraisEnlevementHT?: number;
  fraisEnlevementTVA?: number;
  totalPrecompte?: number;
  totalLiquideNu?: number;
  totalGuinessTaxe?: number;
  totalRabais?: number;
  totalRabaisTTC?: number;
  netAPayer?: number;
  lines: SalesInvoiceLine[];
  ristourneDetails?: RistourneDetail[];
  payments?: InvoicePayment[];
  createdAt?: string;
  createdBy?: string;
  updatedBy?: string;
  updatedAt?: string;
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
  partnerId?: number;
  partnerName?: string;
  journalId: number;
  journalName?: string;
  companyId: number;
  accountMoveId?: number;
  accountMoveName?: string;
  creditNoteId?: number;
  creditNoteName?: string;
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
  exemptTaxeGuinness?: boolean;
}

// ===== Lettrage =====
export interface AvailableMoveDTO {
  moveId: number;
  moveName: string;
  moveDate: string;
  moveRef?: string;
  journalName?: string;
  montantTotal: number;
  montantLettre: number;
  montantDisponible: number;
}

export interface InvoiceReconciliationDTO {
  id: number;
  invoiceId: number;
  invoiceName?: string;
  accountMoveId: number;
  accountMoveName?: string;
  accountMoveRef?: string;
  accountMoveDate?: string;
  journalName?: string;
  amount: number;
  date: string;
  createdBy?: string;
  createdAt?: string;
}

// ===== Sales Stats =====
export interface SalesStatsLine {
  productCode?: string;
  productName?: string;
  qty: number;
  prixVente: number;
  caHT: number;
  cout: number;
  prixRevient: number;
  margeHT: number;
  tauxMarge: number;
  caTTC: number;
  remise: number;
}

export interface SalesStatsClient {
  clientName: string;
  clientRef?: string;
  vendeur?: string;
  lines: SalesStatsLine[];
  totalQty: number;
  totalHT: number;
  totalTTC: number;
  totalRemise: number;
  totalCout: number;
  totalMargeHT: number;
}

export interface SalesStatsResponse {
  dateFrom: string;
  dateTo: string;
  groupBy: string;
  clients: SalesStatsClient[];
  grandTotalQty: number;
  grandTotalHT: number;
  grandTotalTTC: number;
  grandTotalRemise: number;
  grandTotalCout: number;
  grandTotalMargeHT: number;
  totalInvoices: number;
}

export interface StatsVentesRequest {
  dateFrom: string;
  dateTo: string;
  companyId: number;
  groupBy: string;
  partnerId?: number | null;
  categoryId?: number | null;
  productId?: number | null;
  createdBy?: string | null;
  warehouseId?: number | null;
}

@Injectable({ providedIn: 'root' })
export class SalesService {
  private apiUrl = `${environment.apiUrl}/api/sales`;

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

  setWarehouse(invoiceId: number, warehouseId: number): Observable<SalesInvoice> {
    return this.http.patch<SalesInvoice>(`${this.apiUrl}/invoices/${invoiceId}/warehouse`, null, {
      params: new HttpParams().set('warehouseId', warehouseId)
    });
  }

  // Avoirs (credit notes)
  getAvoirs(companyId: number): Observable<SalesInvoice[]> {
    return this.http.get<SalesInvoice[]>(`${this.apiUrl}/avoirs`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }
  createAvoirFromInvoice(invoiceId: number, req: { avoirType: 'integral' | 'partiel'; date?: string; lines?: { lineId: number; quantite: number }[] }): Observable<SalesInvoice> {
    return this.http.post<SalesInvoice>(`${this.apiUrl}/invoices/${invoiceId}/avoir`, req);
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

  getAllPayments(companyId: number): Observable<InvoicePayment[]> {
    return this.http.get<InvoicePayment[]>(`${this.apiUrl}/payments`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }

  reversePayment(paymentId: number): Observable<InvoicePayment> {
    return this.http.delete<InvoicePayment>(`${this.apiUrl}/payments/${paymentId}`);
  }

  applyCredit(invoiceId: number, amount: number, companyId: number, creditNoteId?: number): Observable<SalesInvoice> {
    let params = new HttpParams().set('amount', amount).set('companyId', companyId);
    if (creditNoteId) params = params.set('creditNoteId', creditNoteId);
    return this.http.post<SalesInvoice>(
      `${this.apiUrl}/invoices/${invoiceId}/apply-credit`,
      null,
      { params }
    );
  }

  /** Liste détaillée des avoirs disponibles ("crédits en circulation") d'un client, un par avoir. */
  getAvailableCredits(partnerId: number, companyId: number): Observable<AvailableCredit[]> {
    return this.http.get<AvailableCredit[]>(
      `${this.apiUrl}/partners/${partnerId}/available-credits`,
      { params: new HttpParams().set('companyId', companyId) }
    );
  }

  getPartnerBalance(partnerId: number, companyId: number): Observable<{ balance: number; credit: number }> {
    return this.http.get<{ balance: number; credit: number }>(
      `${this.apiUrl}/partners/${partnerId}/balance`,
      { params: new HttpParams().set('companyId', companyId) }
    );
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

  // Lettrage
  getAvailableMoves(invoiceId: number, companyId: number): Observable<AvailableMoveDTO[]> {
    return this.http.get<AvailableMoveDTO[]>(`${this.apiUrl}/invoices/${invoiceId}/available-moves`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }
  getReconciliations(invoiceId: number): Observable<InvoiceReconciliationDTO[]> {
    return this.http.get<InvoiceReconciliationDTO[]>(`${this.apiUrl}/invoices/${invoiceId}/reconciliations`);
  }
  reconcile(invoiceId: number, req: { accountMoveId: number; amount: number; date: string }): Observable<InvoiceReconciliationDTO> {
    return this.http.post<InvoiceReconciliationDTO>(`${this.apiUrl}/invoices/${invoiceId}/reconcile`, req);
  }
  unreconcile(reconciliationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/invoices/reconciliations/${reconciliationId}`);
  }

  // Stats Reports
  getStatsVentes(req: StatsVentesRequest): Observable<SalesStatsResponse> {
    return this.http.post<SalesStatsResponse>(`${this.apiUrl}/stats/stats-ventes`, req);
  }

  getEtatCommercial(req: { dateFrom: string; dateTo: string; companyId: number }): Observable<SalesStatsResponse> {
    return this.http.post<SalesStatsResponse>(`${this.apiUrl}/stats/etat-commercial`, req);
  }

  getRapportConsolide(req: { dateFrom: string; dateTo: string; companyId: number }): Observable<SalesStatsResponse> {
    return this.http.post<SalesStatsResponse>(`${this.apiUrl}/stats/rapport-consolide`, req);
  }

  // Prix client par article
  getPrixClientByClient(clientId: number, companyId: number): Observable<PrixClientArticle[]> {
    return this.http.get<PrixClientArticle[]>(`${this.apiUrl}/client-prices`, {
      params: { clientId, companyId }
    });
  }

  getPrixClientForProduct(productId: number, clientId: number, companyId: number): Observable<PrixClientArticle | null> {
    return this.http.get<PrixClientArticle>(`${this.apiUrl}/client-prices/product`, {
      params: { productId, clientId, companyId }
    }).pipe(catchError(() => of(null)));
  }

  savePrixClient(dto: PrixClientArticle): Observable<PrixClientArticle> {
    return this.http.post<PrixClientArticle>(`${this.apiUrl}/client-prices`, dto);
  }

  deletePrixClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/client-prices/${id}`);
  }
}
