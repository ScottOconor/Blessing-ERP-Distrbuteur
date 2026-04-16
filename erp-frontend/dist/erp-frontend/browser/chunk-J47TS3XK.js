import {
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-EEF5WTPZ.js";

// src/app/modules/purchases/services/purchase.service.ts
var PurchaseService = class _PurchaseService {
  constructor(http) {
    this.http = http;
    this.base = `http://${window.location.hostname}:8085/api/purchases`;
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
  // ===================== AVOIRS FOURNISSEURS =====================
  getAvoirs(companyId) {
    const params = new HttpParams().set("companyId", companyId);
    return this.http.get(`${this.base}/avoirs`, { params });
  }
  createAvoirFromInvoice(invoiceId) {
    return this.http.post(`${this.base}/invoices/${invoiceId}/avoir`, {});
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
//# sourceMappingURL=chunk-J47TS3XK.js.map
