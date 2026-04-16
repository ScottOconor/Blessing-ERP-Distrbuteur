import {
  SalesService
} from "./chunk-C6CRDXMM.js";
import {
  Router
} from "./chunk-K3VCSIQL.js";
import {
  AuthService
} from "./chunk-MBNWDFD7.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/sales/components/invoices/invoice-list.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function InvoiceListComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 12);
    \u0275\u0275domListener("click", function InvoiceListComponent_For_11_Template_button_click_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(f_r2.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.stateFilter === f_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r2.label, " ");
  }
}
function InvoiceListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "span", 13);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275domElementEnd();
  }
}
function InvoiceListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10)(1, "span", 4);
    \u0275\u0275text(2, "description");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Aucune facture \u2014 confirmez un bon de commande pour en cr\xE9er une.");
    \u0275\u0275domElementEnd()();
  }
}
function InvoiceListComponent_Conditional_15_For_25_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const inv_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inv_r5.salesOrderName);
  }
}
function InvoiceListComponent_Conditional_15_For_25_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 19);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275domElementEnd();
  }
}
function InvoiceListComponent_Conditional_15_For_25_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 22);
    \u0275\u0275domElement(1, "div", 23);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const inv_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r2.getProgressPct(inv_r5) + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.getProgressPct(inv_r5), "%");
  }
}
function InvoiceListComponent_Conditional_15_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 16);
    \u0275\u0275domListener("click", function InvoiceListComponent_Conditional_15_For_25_Template_tr_click_0_listener() {
      const inv_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openInvoice(inv_r5));
    });
    \u0275\u0275domElementStart(1, "td", 17);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td");
    \u0275\u0275conditionalCreate(9, InvoiceListComponent_Conditional_15_For_25_Conditional_9_Template, 2, 1, "span", 18)(10, InvoiceListComponent_Conditional_15_For_25_Conditional_10_Template, 2, 0, "span", 19);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td", 14);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "td", 20);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "td", 21);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "td", 14);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "td");
    \u0275\u0275conditionalCreate(24, InvoiceListComponent_Conditional_15_For_25_Conditional_24_Template, 4, 3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(25, "td")(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const inv_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inv_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 14, inv_r5.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inv_r5.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(inv_r5.salesOrderName ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 17, inv_r5.totalHT, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 20, inv_r5.totalTTC, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 23, inv_r5.montantPaye, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-danger", (inv_r5.montantDu || 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 26, inv_r5.montantDu, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(inv_r5.state === "posted" || inv_r5.state === "paid" ? 24 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getStateBadge(inv_r5.state || ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getStateLabel(inv_r5.state || ""));
  }
}
function InvoiceListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 11)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Num\xE9ro");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th");
    \u0275\u0275text(6, "Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th");
    \u0275\u0275text(8, "Client");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th");
    \u0275\u0275text(10, "Bon de commande");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th", 14);
    \u0275\u0275text(12, "Total HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "th", 14);
    \u0275\u0275text(14, "Total TTC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "th", 14);
    \u0275\u0275text(16, "Pay\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "th", 14);
    \u0275\u0275text(18, "Reste d\xFB");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "th");
    \u0275\u0275text(20, "Paiement");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "th");
    \u0275\u0275text(22, "Statut");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(23, "tbody");
    \u0275\u0275repeaterCreate(24, InvoiceListComponent_Conditional_15_For_25_Template, 28, 29, "tr", 15, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx_r2.filteredInvoices);
  }
}
var InvoiceListComponent = class _InvoiceListComponent {
  constructor(salesService, authService, router) {
    this.salesService = salesService;
    this.authService = authService;
    this.router = router;
    this.invoices = [];
    this.filteredInvoices = [];
    this.loading = false;
    this.stateFilter = "all";
    this.stateFilters = [
      { value: "all", label: "Toutes" },
      { value: "draft", label: "Brouillon" },
      { value: "posted", label: "Valid\xE9e" },
      { value: "paid", label: "Pay\xE9e" },
      { value: "cancelled", label: "Annul\xE9e" }
    ];
  }
  ngOnInit() {
    this.loadInvoices();
  }
  loadInvoices() {
    this.loading = true;
    this.salesService.getInvoices(this.authService.getCompanyId()).subscribe({
      next: (data) => {
        this.invoices = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilter() {
    this.filteredInvoices = this.stateFilter === "all" ? this.invoices : this.invoices.filter((i) => i.state === this.stateFilter);
  }
  setFilter(state) {
    this.stateFilter = state;
    this.applyFilter();
  }
  openInvoice(invoice) {
    this.router.navigate(["/sales/invoices", invoice.id]);
  }
  getStateBadge(state) {
    const map = {
      draft: "badge-draft",
      posted: "badge-posted",
      paid: "badge-paid",
      cancelled: "badge-cancelled"
    };
    return "badge " + (map[state] || "badge-draft");
  }
  getStateLabel(state) {
    const map = {
      draft: "Brouillon",
      posted: "Valid\xE9e",
      paid: "Pay\xE9e",
      cancelled: "Annul\xE9e"
    };
    return map[state] || state;
  }
  getProgressPct(invoice) {
    if (!invoice.totalTTC || invoice.totalTTC === 0)
      return 0;
    return Math.min(100, Math.round((invoice.montantPaye || 0) / invoice.totalTTC * 100));
  }
  static {
    this.\u0275fac = function InvoiceListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InvoiceListComponent)(\u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceListComponent, selectors: [["app-invoice-list"]], decls: 16, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "record-count"], [1, "filter-bar"], [1, "filter-btn", 3, "active"], [1, "card"], [1, "loading-state"], [1, "empty-state"], [1, "data-table"], [1, "filter-btn", 3, "click"], [1, "material-icons", "spin"], [1, "text-right"], [1, "clickable-row"], [1, "clickable-row", 3, "click"], [1, "font-mono", "font-bold"], [1, "link-ref"], [1, "text-muted"], [1, "text-right", "font-bold"], [1, "text-right", "text-success"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-pct"]], template: function InvoiceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3)(4, "span", 4);
        \u0275\u0275text(5, "description");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(6, " Factures ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(7, "span", 5);
        \u0275\u0275text(8);
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(9, "div", 6);
        \u0275\u0275repeaterCreate(10, InvoiceListComponent_For_11_Template, 2, 3, "button", 7, _forTrack0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(12, "div", 8);
        \u0275\u0275conditionalCreate(13, InvoiceListComponent_Conditional_13_Template, 4, 0, "div", 9)(14, InvoiceListComponent_Conditional_14_Template, 5, 0, "div", 10)(15, InvoiceListComponent_Conditional_15_Template, 26, 0, "table", 11);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.filteredInvoices.length, " facture(s)");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.stateFilters);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading ? 13 : ctx.filteredInvoices.length === 0 ? 14 : 15);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #017E84;\n  font-size: 22px;\n}\n.page-header[_ngcontent-%COMP%]   .record-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  background: #e9ecef;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 20px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: #017E84;\n  color: #017E84;\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: #017E84;\n  border-color: #017E84;\n  color: white;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: #6c757d;\n  gap: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n}\n.data-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.data-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n.data-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #198754;\n  font-weight: 500;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 600;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.badge.badge-posted[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.badge.badge-paid[_ngcontent-%COMP%] {\n  background: #d1e7dd;\n  color: #0f5132;\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #842029;\n}\n.link-ref[_ngcontent-%COMP%] {\n  color: #017E84;\n  font-size: 13px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: #e9ecef;\n  border-radius: 2px;\n  overflow: hidden;\n  margin-bottom: 2px;\n}\n.progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #017E84;\n  border-radius: 2px;\n  transition: width 0.3s;\n}\n.progress-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n}\n/*# sourceMappingURL=invoice-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoiceListComponent, [{
    type: Component,
    args: [{ selector: "app-invoice-list", standalone: true, imports: [CommonModule], template: `<div class="page-container">
  <div class="page-header">
    <div class="header-left">
      <h1 class="page-title">
        <span class="material-icons">description</span>
        Factures
      </h1>
      <span class="record-count">{{ filteredInvoices.length }} facture(s)</span>
    </div>
  </div>

  <div class="filter-bar">
    @for (f of stateFilters; track f.value) {
      <button class="filter-btn" [class.active]="stateFilter === f.value" (click)="setFilter(f.value)">
        {{ f.label }}
      </button>
    }
  </div>

  <div class="card">
    @if (loading) {
      <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
    } @else if (filteredInvoices.length === 0) {
      <div class="empty-state">
        <span class="material-icons">description</span>
        <p>Aucune facture \u2014 confirmez un bon de commande pour en cr\xE9er une.</p>
      </div>
    } @else {
      <table class="data-table">
        <thead>
          <tr>
            <th>Num\xE9ro</th>
            <th>Date</th>
            <th>Client</th>
            <th>Bon de commande</th>
            <th class="text-right">Total HT</th>
            <th class="text-right">Total TTC</th>
            <th class="text-right">Pay\xE9</th>
            <th class="text-right">Reste d\xFB</th>
            <th>Paiement</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          @for (inv of filteredInvoices; track inv.id) {
            <tr class="clickable-row" (click)="openInvoice(inv)">
              <td class="font-mono font-bold">{{ inv.name }}</td>
              <td>{{ inv.date | date:'dd/MM/yyyy' }}</td>
              <td>{{ inv.partnerName }}</td>
              <td>
                @if (inv.salesOrderName) {
                  <span class="link-ref">{{ inv.salesOrderName }}</span>
                } @else { <span class="text-muted">\u2014</span> }
              </td>
              <td class="text-right">{{ inv.totalHT | number:'1.0-0' }}</td>
              <td class="text-right font-bold">{{ inv.totalTTC | number:'1.0-0' }}</td>
              <td class="text-right text-success">{{ inv.montantPaye | number:'1.0-0' }}</td>
              <td class="text-right" [class.text-danger]="(inv.montantDu || 0) > 0">
                {{ inv.montantDu | number:'1.0-0' }}
              </td>
              <td>
                @if (inv.state === 'posted' || inv.state === 'paid') {
                  <div class="progress-bar">
                    <div class="progress-fill" [style.width]="getProgressPct(inv) + '%'"></div>
                  </div>
                  <span class="progress-pct">{{ getProgressPct(inv) }}%</span>
                }
              </td>
              <td><span [class]="getStateBadge(inv.state || '')">{{ getStateLabel(inv.state || '') }}</span></td>
            </tr>
          }
        </tbody>
      </table>
    }
  </div>
</div>
`, styles: ['/* src/app/modules/sales/components/invoices/invoice-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: #017E84;\n  font-size: 22px;\n}\n.page-header .record-count {\n  font-size: 13px;\n  color: #6c757d;\n  background: #e9ecef;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.filter-bar {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.filter-btn {\n  padding: 6px 16px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 20px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.filter-btn:hover {\n  border-color: #017E84;\n  color: #017E84;\n}\n.filter-btn.active {\n  background: #017E84;\n  border-color: #017E84;\n  color: white;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: #6c757d;\n  gap: 12px;\n}\n.loading-state .material-icons,\n.empty-state .material-icons {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.loading-state p,\n.empty-state p {\n  margin: 0;\n  font-size: 15px;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.data-table td {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n}\n.data-table .clickable-row {\n  cursor: pointer;\n}\n.data-table .clickable-row:hover td {\n  background: #f8f9fa;\n}\n.data-table .clickable-row:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: #adb5bd;\n}\n.text-success {\n  color: #198754;\n  font-weight: 500;\n}\n.text-danger {\n  color: #dc3545;\n  font-weight: 600;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.badge.badge-posted {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.badge.badge-paid {\n  background: #d1e7dd;\n  color: #0f5132;\n}\n.badge.badge-cancelled {\n  background: #fde8e8;\n  color: #842029;\n}\n.link-ref {\n  color: #017E84;\n  font-size: 13px;\n}\n.progress-bar {\n  height: 4px;\n  background: #e9ecef;\n  border-radius: 2px;\n  overflow: hidden;\n  margin-bottom: 2px;\n}\n.progress-bar .progress-fill {\n  height: 100%;\n  background: #017E84;\n  border-radius: 2px;\n  transition: width 0.3s;\n}\n.progress-pct {\n  font-size: 11px;\n  color: #6c757d;\n}\n/*# sourceMappingURL=invoice-list.component.css.map */\n'] }]
  }], () => [{ type: SalesService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceListComponent, { className: "InvoiceListComponent", filePath: "src/app/modules/sales/components/invoices/invoice-list.component.ts", lineNumber: 14 });
})();
export {
  InvoiceListComponent
};
//# sourceMappingURL=chunk-NLFHSG2D.js.map
