import {
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-EEF5WTPZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PPITZAXW.js";

// src/app/modules/sales/services/sales.service.ts
var SalesService = class _SalesService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `http://${window.location.hostname}:8085/api/sales`;
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
  // Avoirs (credit notes)
  getAvoirs(companyId) {
    return this.http.get(`${this.apiUrl}/avoirs`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  createAvoirFromInvoice(invoiceId) {
    return this.http.post(`${this.apiUrl}/invoices/${invoiceId}/avoir`, {});
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
  // Stats Reports
  getEtatCommercial(req) {
    return this.http.post(`${this.apiUrl}/stats/etat-commercial`, req);
  }
  getRapportConsolide(req) {
    return this.http.post(`${this.apiUrl}/stats/rapport-consolide`, req);
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
//# sourceMappingURL=chunk-C6CRDXMM.js.map
