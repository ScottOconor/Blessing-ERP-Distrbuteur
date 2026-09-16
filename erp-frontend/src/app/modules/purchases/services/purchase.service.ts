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
  montantPrecompte?: number;
  montantTTC?: number;
  rabaisUnitaire?: number;      // = standard_price − tarif fournisseur (le prix reste le catalogue)
  totalRabaisLigne?: number;    // = quantité × rabaisUnitaire
  standardPrice?: number;
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
  /** Entrepôt qui recevra physiquement la marchandise (Dépôt Achat résolu) — informatif */
  receptionWarehouseName?: string;
  createdAt?: string;
}

export interface PurchaseInvoiceLine {
  id?: number;
  productId?: number;
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
  rabaisUnitaire?: number;
  totalRabaisLigne?: number;
  standardPrice?: number;
}

export interface PrixFournisseurArticle {
  id?: number;
  productId: number;
  productCode?: string;
  productName?: string;
  standardPrice?: number;
  fournisseurId: number;
  fournisseurName?: string;
  prixFournisseur: number;
  ecartUnitaire?: number;
  companyId: number;
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
  invoiceId?: number;
  invoiceName?: string;
  partnerId?: number;
  partnerName?: string;
  /** Si ce paiement est une compensation par avoir fournisseur : id de l'avoir utilisé */
  creditNoteId?: number;
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
  /** Entrepôt qui recevra physiquement la marchandise (Dépôt Achat résolu) — informatif */
  receptionWarehouseName?: string;
  partnerBalance?: number | null;
  /** Total des avoirs non encore compensés disponibles pour ce fournisseur */
  partnerCreditDisponible?: number | null;
  purchaseOrderId?: number;
  purchaseOrderName?: string;
  originalInvoiceId?: number;
  originalInvoiceName?: string;
  accountMoveId?: number;
  accountMoveName?: string;
  /** none / partial / full — statut d'extourne des écritures comptables */
  reversalStatus?: string;
  entriesReversedAt?: string;
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
  totalRabaisHT?: number;
  lines: PurchaseInvoiceLine[];
  remiseDetails?: RemiseDetail[];
  payments?: PurchaseInvoicePayment[];
  createdAt?: string;
  createdBy?: string;
  updatedBy?: string;
  updatedAt?: string;
}

// ===== Lettrage Achats =====
export interface PurchaseAvailableMoveDTO {
  moveId: number;
  moveName: string;
  moveDate: string;
  moveRef?: string;
  journalName?: string;
  montantTotal: number;
  montantLettre: number;
  montantDisponible: number;
}

export interface PurchaseReconciliationDTO {
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

// ===== Purchase Stats =====
export interface PurchaseStatsLine {
  productCode?: string;
  productName?: string;
  qty: number;
  prixAchat: number;
  montantHT: number;
  montantTTC: number;
  remise: number;
  isAvoir?: boolean;
}

export interface PurchaseStatsSupplier {
  supplierName: string;
  supplierRef?: string;
  agent?: string;
  lines: PurchaseStatsLine[];
  totalAchatsQty: number;
  totalAchatsHT: number;
  totalAchatsTTC: number;
  totalAchatsRemise: number;
  totalAvoirsQty: number;
  totalAvoirsHT: number;
  totalAvoirsTTC: number;
  totalQty: number;
  totalHT: number;
  totalTTC: number;
  totalRemise: number;
}

export interface PurchaseStatsResponse {
  dateFrom: string;
  dateTo: string;
  groupBy: string;
  suppliers: PurchaseStatsSupplier[];
  grandAchatsQty: number;
  grandAchatsHT: number;
  grandAchatsTTC: number;
  grandAchatsRemise: number;
  grandAvoirsQty: number;
  grandAvoirsHT: number;
  grandAvoirsTTC: number;
  grandTotalQty: number;
  grandTotalHT: number;
  grandTotalTTC: number;
  grandTotalRemise: number;
  totalInvoices: number;
  totalAvoirs: number;
}

export interface StatsAchatsRequest {
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
export class PurchaseService {
  private base = `${environment.apiUrl}/api/purchases`;

  constructor(private http: HttpClient) {}

  // ===================== FOURNISSEURS =====================

  getSupplierPrecompteRate(partnerId: number, companyId: number): Observable<{ tauxPrecompte: number }> {
    return this.http.get<{ tauxPrecompte: number }>(
      `${this.base}/suppliers/${partnerId}/precompte-rate`,
      { params: new HttpParams().set('companyId', companyId) }
    );
  }

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

  createAvoirFromInvoice(invoiceId: number, req?: { avoirType: 'integral' | 'partiel'; date?: string; lines?: { lineId: number; quantite: number }[] }): Observable<PurchaseInvoice> {
    return this.http.post<PurchaseInvoice>(`${this.base}/invoices/${invoiceId}/avoir`, req ?? {});
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

  getAllPayments(companyId: number): Observable<PurchaseInvoicePayment[]> {
    return this.http.get<PurchaseInvoicePayment[]>(`${this.base}/payments`, {
      params: { companyId: companyId.toString() }
    });
  }

  reversePayment(paymentId: number): Observable<PurchaseInvoicePayment> {
    return this.http.delete<PurchaseInvoicePayment>(`${this.base}/payments/${paymentId}`);
  }

  applyCredit(invoiceId: number, amount: number, companyId: number): Observable<PurchaseInvoice> {
    return this.http.post<PurchaseInvoice>(
      `${this.base}/invoices/${invoiceId}/apply-credit`,
      null,
      { params: new HttpParams().set('amount', amount).set('companyId', companyId) }
    );
  }

  // ===================== LETTRAGE =====================

  getAvailableMoves(invoiceId: number, companyId: number): Observable<PurchaseAvailableMoveDTO[]> {
    return this.http.get<PurchaseAvailableMoveDTO[]>(`${this.base}/invoices/${invoiceId}/available-moves`, {
      params: new HttpParams().set('companyId', companyId)
    });
  }
  getReconciliations(invoiceId: number): Observable<PurchaseReconciliationDTO[]> {
    return this.http.get<PurchaseReconciliationDTO[]>(`${this.base}/invoices/${invoiceId}/reconciliations`);
  }
  reconcile(invoiceId: number, req: { accountMoveId: number; amount: number; date: string }): Observable<PurchaseReconciliationDTO> {
    return this.http.post<PurchaseReconciliationDTO>(`${this.base}/invoices/${invoiceId}/reconcile`, req);
  }
  unreconcile(reconciliationId: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/invoices/reconciliations/${reconciliationId}`);
  }

  // ===================== PRIX PRÉFÉRENTIELS FOURNISSEURS =====================

  getPrixFournisseurByFournisseur(fournisseurId: number, companyId: number): Observable<PrixFournisseurArticle[]> {
    return this.http.get<PrixFournisseurArticle[]>(
      `${this.base}/suppliers/${fournisseurId}/prix-articles`,
      { params: new HttpParams().set('companyId', companyId) }
    );
  }

  getPrixFournisseurByProduct(productId: number, companyId: number): Observable<PrixFournisseurArticle[]> {
    return this.http.get<PrixFournisseurArticle[]>(
      `${this.base}/suppliers/prix-articles/by-product/${productId}`,
      { params: new HttpParams().set('companyId', companyId) }
    );
  }

  getPrixFournisseurForProduct(fournisseurId: number, productId: number, companyId: number): Observable<PrixFournisseurArticle | null> {
    return this.http.get<PrixFournisseurArticle>(
      `${this.base}/suppliers/${fournisseurId}/prix-articles/product/${productId}`,
      { params: new HttpParams().set('companyId', companyId) }
    );
  }

  savePrixFournisseur(dto: PrixFournisseurArticle): Observable<PrixFournisseurArticle> {
    return this.http.post<PrixFournisseurArticle>(`${this.base}/suppliers/prix-articles`, dto);
  }

  deletePrixFournisseur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/suppliers/prix-articles/${id}`);
  }

  // ===================== STATS ACHATS =====================

  getStatsAchats(req: StatsAchatsRequest): Observable<PurchaseStatsResponse> {
    return this.http.post<PurchaseStatsResponse>(`${this.base}/stats/stats-achats`, req);
  }
}
