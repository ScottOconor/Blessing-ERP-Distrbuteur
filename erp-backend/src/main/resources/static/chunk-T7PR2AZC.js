import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";

// src/app/modules/purchases/services/purchase.service.ts
var PurchaseService = class _PurchaseService {
  constructor(http) {
    this.http = http;
    this.base = `${environment.apiUrl}/api/purchases`;
  }
  // ===================== FOURNISSEURS =====================
  getSupplierPrecompteRate(partnerId, companyId) {
    return this.http.get(`${this.base}/suppliers/${partnerId}/precompte-rate`, { params: new HttpParams().set("companyId", companyId) });
  }
  // ===================== COMMANDES =====================
  getOrders(companyId) {
    const params = new HttpParams().set("companyId", companyId);
    return this.http.get(`${this.base}/orders`, { params });
  }
  getOrder(id) {
    return this.http.get(`${this.base}/orders/${id}`);
  }
  createOrder(order) {
    return this.http.post(`${this.base}/orders`, order);
  }
  updateOrder(id, order) {
    return this.http.put(`${this.base}/orders/${id}`, order);
  }
  confirmOrder(id) {
    return this.http.post(`${this.base}/orders/${id}/confirm`, {});
  }
  receiveOrder(id) {
    return this.http.post(`${this.base}/orders/${id}/receive`, {});
  }
  cancelOrder(id) {
    return this.http.post(`${this.base}/orders/${id}/cancel`, {});
  }
  // ===================== FACTURES FOURNISSEURS =====================
  getInvoices(companyId) {
    const params = new HttpParams().set("companyId", companyId);
    return this.http.get(`${this.base}/invoices`, { params });
  }
  getInvoice(id) {
    return this.http.get(`${this.base}/invoices/${id}`);
  }
  createInvoice(invoice) {
    return this.http.post(`${this.base}/invoices`, invoice);
  }
  updateInvoice(id, invoice) {
    return this.http.put(`${this.base}/invoices/${id}`, invoice);
  }
  postInvoice(id) {
    return this.http.post(`${this.base}/invoices/${id}/post`, {});
  }
  cancelInvoice(id) {
    return this.http.post(`${this.base}/invoices/${id}/cancel`, {});
  }
  reverseInvoiceEntries(id) {
    return this.http.post(`${this.base}/invoices/${id}/reverse-entries`, {});
  }
  generateRemises(id) {
    return this.http.post(`${this.base}/invoices/${id}/generate-remises`, {});
  }
  setWarehouse(invoiceId, warehouseId) {
    return this.http.patch(`${this.base}/invoices/${invoiceId}/warehouse`, null, {
      params: new HttpParams().set("warehouseId", warehouseId)
    });
  }
  // ===================== AVOIRS FOURNISSEURS =====================
  getAvoirs(companyId) {
    const params = new HttpParams().set("companyId", companyId);
    return this.http.get(`${this.base}/avoirs`, { params });
  }
  createAvoirFromInvoice(invoiceId, req) {
    return this.http.post(`${this.base}/invoices/${invoiceId}/avoir`, req ?? {});
  }
  createAvoirManuel(avoir) {
    return this.http.post(`${this.base}/avoirs`, avoir);
  }
  // ===================== PAIEMENTS FOURNISSEURS =====================
  createPayment(req) {
    return this.http.post(`${this.base}/payments`, req);
  }
  getPaymentsByInvoice(invoiceId) {
    return this.http.get(`${this.base}/payments/invoice/${invoiceId}`);
  }
  getAllPayments(companyId) {
    return this.http.get(`${this.base}/payments`, {
      params: { companyId: companyId.toString() }
    });
  }
  reversePayment(paymentId) {
    return this.http.delete(`${this.base}/payments/${paymentId}`);
  }
  applyCredit(invoiceId, amount, companyId) {
    return this.http.post(`${this.base}/invoices/${invoiceId}/apply-credit`, null, { params: new HttpParams().set("amount", amount).set("companyId", companyId) });
  }
  // ===================== LETTRAGE =====================
  getAvailableMoves(invoiceId, companyId) {
    return this.http.get(`${this.base}/invoices/${invoiceId}/available-moves`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  getReconciliations(invoiceId) {
    return this.http.get(`${this.base}/invoices/${invoiceId}/reconciliations`);
  }
  reconcile(invoiceId, req) {
    return this.http.post(`${this.base}/invoices/${invoiceId}/reconcile`, req);
  }
  unreconcile(reconciliationId) {
    return this.http.delete(`${this.base}/invoices/reconciliations/${reconciliationId}`);
  }
  // ===================== PRIX PRÉFÉRENTIELS FOURNISSEURS =====================
  getPrixFournisseurByFournisseur(fournisseurId, companyId) {
    return this.http.get(`${this.base}/suppliers/${fournisseurId}/prix-articles`, { params: new HttpParams().set("companyId", companyId) });
  }
  getPrixFournisseurByProduct(productId, companyId) {
    return this.http.get(`${this.base}/suppliers/prix-articles/by-product/${productId}`, { params: new HttpParams().set("companyId", companyId) });
  }
  getPrixFournisseurForProduct(fournisseurId, productId, companyId) {
    return this.http.get(`${this.base}/suppliers/${fournisseurId}/prix-articles/product/${productId}`, { params: new HttpParams().set("companyId", companyId) });
  }
  savePrixFournisseur(dto) {
    return this.http.post(`${this.base}/suppliers/prix-articles`, dto);
  }
  deletePrixFournisseur(id) {
    return this.http.delete(`${this.base}/suppliers/prix-articles/${id}`);
  }
  // ===================== STATS ACHATS =====================
  getStatsAchats(req) {
    return this.http.post(`${this.base}/stats/stats-achats`, req);
  }
  static {
    this.\u0275fac = function PurchaseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PurchaseService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PurchaseService, factory: _PurchaseService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  PurchaseService
};
//# sourceMappingURL=chunk-T7PR2AZC.js.map
