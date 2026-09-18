import {
  HttpClient,
  HttpParams,
  Injectable,
  catchError,
  environment,
  of,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/sales/services/sales.service.ts
var SalesService = class _SalesService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${environment.apiUrl}/api/sales`;
  }
  // Orders
  getOrders(companyId) {
    return this.http.get(`${this.apiUrl}/orders`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  getOrder(id) {
    return this.http.get(`${this.apiUrl}/orders/${id}`);
  }
  createOrder(order) {
    return this.http.post(`${this.apiUrl}/orders`, order);
  }
  updateOrder(id, order) {
    return this.http.put(`${this.apiUrl}/orders/${id}`, order);
  }
  confirmOrder(id) {
    return this.http.post(`${this.apiUrl}/orders/${id}/confirm`, {});
  }
  cancelOrder(id) {
    return this.http.post(`${this.apiUrl}/orders/${id}/cancel`, {});
  }
  // Invoices
  getInvoices(companyId) {
    return this.http.get(`${this.apiUrl}/invoices`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  getInvoice(id) {
    return this.http.get(`${this.apiUrl}/invoices/${id}`);
  }
  createInvoice(invoice) {
    return this.http.post(`${this.apiUrl}/invoices`, invoice);
  }
  updateInvoice(id, invoice) {
    return this.http.put(`${this.apiUrl}/invoices/${id}`, invoice);
  }
  postInvoice(id) {
    return this.http.post(`${this.apiUrl}/invoices/${id}/post`, {});
  }
  cancelInvoice(id) {
    return this.http.post(`${this.apiUrl}/invoices/${id}/cancel`, {});
  }
  reverseInvoiceEntries(id) {
    return this.http.post(`${this.apiUrl}/invoices/${id}/reverse-entries`, {});
  }
  generateRistournes(id) {
    return this.http.post(`${this.apiUrl}/invoices/${id}/generate-ristournes`, {});
  }
  setWarehouse(invoiceId, warehouseId) {
    return this.http.patch(`${this.apiUrl}/invoices/${invoiceId}/warehouse`, null, {
      params: new HttpParams().set("warehouseId", warehouseId)
    });
  }
  // Avoirs (credit notes)
  getAvoirs(companyId) {
    return this.http.get(`${this.apiUrl}/avoirs`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  createAvoirFromInvoice(invoiceId, req) {
    return this.http.post(`${this.apiUrl}/invoices/${invoiceId}/avoir`, req);
  }
  createAvoirManuel(avoir) {
    return this.http.post(`${this.apiUrl}/avoirs`, __spreadProps(__spreadValues({}, avoir), { type: "credit_note" }));
  }
  // Paiements
  createPayment(payment) {
    return this.http.post(`${this.apiUrl}/payments`, payment);
  }
  getPaymentsByInvoice(invoiceId) {
    return this.http.get(`${this.apiUrl}/payments/invoice/${invoiceId}`);
  }
  getAllPayments(companyId) {
    return this.http.get(`${this.apiUrl}/payments`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  reversePayment(paymentId) {
    return this.http.delete(`${this.apiUrl}/payments/${paymentId}`);
  }
  applyCredit(invoiceId, amount, companyId, creditNoteId) {
    let params = new HttpParams().set("amount", amount).set("companyId", companyId);
    if (creditNoteId)
      params = params.set("creditNoteId", creditNoteId);
    return this.http.post(`${this.apiUrl}/invoices/${invoiceId}/apply-credit`, null, { params });
  }
  /** Liste détaillée des avoirs disponibles ("crédits en circulation") d'un client, un par avoir. */
  getAvailableCredits(partnerId, companyId) {
    return this.http.get(`${this.apiUrl}/partners/${partnerId}/available-credits`, { params: new HttpParams().set("companyId", companyId) });
  }
  getPartnerBalance(partnerId, companyId) {
    return this.http.get(`${this.apiUrl}/partners/${partnerId}/balance`, { params: new HttpParams().set("companyId", companyId) });
  }
  // Clients
  getClients(companyId) {
    return this.http.get(`${this.apiUrl}/clients`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  createClient(client) {
    return this.http.post(`${this.apiUrl}/clients`, client);
  }
  updateClient(id, client) {
    return this.http.put(`${this.apiUrl}/clients/${id}`, client);
  }
  deleteClient(id) {
    return this.http.delete(`${this.apiUrl}/clients/${id}`);
  }
  // Vendeurs
  getSellers(companyId) {
    return this.http.get(`${this.apiUrl}/sellers`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  createSeller(seller) {
    return this.http.post(`${this.apiUrl}/sellers`, seller);
  }
  updateSeller(id, seller) {
    return this.http.put(`${this.apiUrl}/sellers/${id}`, seller);
  }
  deleteSeller(id) {
    return this.http.delete(`${this.apiUrl}/sellers/${id}`);
  }
  // Lettrage
  getAvailableMoves(invoiceId, companyId) {
    return this.http.get(`${this.apiUrl}/invoices/${invoiceId}/available-moves`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  getReconciliations(invoiceId) {
    return this.http.get(`${this.apiUrl}/invoices/${invoiceId}/reconciliations`);
  }
  reconcile(invoiceId, req) {
    return this.http.post(`${this.apiUrl}/invoices/${invoiceId}/reconcile`, req);
  }
  unreconcile(reconciliationId) {
    return this.http.delete(`${this.apiUrl}/invoices/reconciliations/${reconciliationId}`);
  }
  // Stats Reports
  getStatsVentes(req) {
    return this.http.post(`${this.apiUrl}/stats/stats-ventes`, req);
  }
  getEtatCommercial(req) {
    return this.http.post(`${this.apiUrl}/stats/etat-commercial`, req);
  }
  getRapportConsolide(req) {
    return this.http.post(`${this.apiUrl}/stats/rapport-consolide`, req);
  }
  // Prix client par article
  getPrixClientByClient(clientId, companyId) {
    return this.http.get(`${this.apiUrl}/client-prices`, {
      params: { clientId, companyId }
    });
  }
  getPrixClientForProduct(productId, clientId, companyId) {
    return this.http.get(`${this.apiUrl}/client-prices/product`, {
      params: { productId, clientId, companyId }
    }).pipe(catchError(() => of(null)));
  }
  savePrixClient(dto) {
    return this.http.post(`${this.apiUrl}/client-prices`, dto);
  }
  deletePrixClient(id) {
    return this.http.delete(`${this.apiUrl}/client-prices/${id}`);
  }
  static {
    this.\u0275fac = function SalesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SalesService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SalesService, factory: _SalesService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  SalesService
};
//# sourceMappingURL=chunk-PDYKRBTO.js.map
