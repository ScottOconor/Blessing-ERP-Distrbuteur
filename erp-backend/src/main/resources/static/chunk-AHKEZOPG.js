import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NJUNWWEJ.js";

// src/app/modules/helpdesk/services/helpdesk.service.ts
var HelpdeskService = class _HelpdeskService {
  constructor(http) {
    this.http = http;
    this.api = `${environment.apiUrl}/api/helpdesk`;
  }
  getTickets(companyId, status, assignedTo, createdBy) {
    let params = new HttpParams().set("companyId", companyId);
    if (status)
      params = params.set("status", status);
    if (assignedTo)
      params = params.set("assignedTo", assignedTo);
    if (createdBy)
      params = params.set("createdBy", createdBy);
    return this.http.get(`${this.api}/tickets`, { params });
  }
  getTicket(id) {
    return this.http.get(`${this.api}/tickets/${id}`);
  }
  createTicket(ticket) {
    return this.http.post(`${this.api}/tickets`, ticket);
  }
  updateTicket(id, ticket) {
    return this.http.put(`${this.api}/tickets/${id}`, ticket);
  }
  addComment(ticketId, comment) {
    return this.http.post(`${this.api}/tickets/${ticketId}/comments`, comment);
  }
  getStats(companyId) {
    return this.http.get(`${this.api}/stats`, {
      params: new HttpParams().set("companyId", companyId)
    });
  }
  static {
    this.\u0275fac = function HelpdeskService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HelpdeskService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HelpdeskService, factory: _HelpdeskService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HelpdeskService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  HelpdeskService
};
//# sourceMappingURL=chunk-AHKEZOPG.js.map
