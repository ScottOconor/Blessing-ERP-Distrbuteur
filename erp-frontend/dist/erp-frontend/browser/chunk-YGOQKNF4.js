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
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/sales/components/orders/order-list.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function OrderListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7)(1, "span", 4);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMsg, " ");
  }
}
function OrderListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "span", 4);
    \u0275\u0275text(2, "error");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg, " ");
  }
}
function OrderListComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 15);
    \u0275\u0275domListener("click", function OrderListComponent_For_17_Template_button_click_0_listener() {
      const f_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setFilter(f_r3.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.stateFilter === f_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r3.label);
  }
}
function OrderListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 12)(1, "span", 16);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Chargement... ");
    \u0275\u0275domElementEnd();
  }
}
function OrderListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 13)(1, "span", 4);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Aucun bon de commande");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 6);
    \u0275\u0275domListener("click", function OrderListComponent_Conditional_20_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.newOrder());
    });
    \u0275\u0275text(6, "Cr\xE9er un bon");
    \u0275\u0275domElementEnd()();
  }
}
function OrderListComponent_Conditional_21_For_23_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "a", 27);
    \u0275\u0275domListener("click", function OrderListComponent_Conditional_21_For_23_Conditional_20_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const order_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.viewInvoice(order_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const order_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r6.invoiceName, " ");
  }
}
function OrderListComponent_Conditional_21_For_23_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 24);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275domElementEnd();
  }
}
function OrderListComponent_Conditional_21_For_23_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 28);
    \u0275\u0275domListener("click", function OrderListComponent_Conditional_21_For_23_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const order_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editOrder(order_r6));
    });
    \u0275\u0275domElementStart(1, "span", 4);
    \u0275\u0275text(2, "edit");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(3, "button", 29);
    \u0275\u0275domListener("click", function OrderListComponent_Conditional_21_For_23_Conditional_23_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const order_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmOrder(order_r6, $event));
    });
    \u0275\u0275domElementStart(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "button", 30);
    \u0275\u0275domListener("click", function OrderListComponent_Conditional_21_For_23_Conditional_23_Template_button_click_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const order_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelOrder(order_r6, $event));
    });
    \u0275\u0275domElementStart(7, "span", 4);
    \u0275\u0275text(8, "cancel");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const order_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("disabled", ctx_r0.confirming === order_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.confirming === order_r6.id ? "hourglass_empty" : "check_circle");
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r0.cancelling === order_r6.id);
  }
}
function OrderListComponent_Conditional_21_For_23_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 31);
    \u0275\u0275domListener("click", function OrderListComponent_Conditional_21_For_23_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const order_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewInvoice(order_r6));
    });
    \u0275\u0275domElementStart(1, "span", 4);
    \u0275\u0275text(2, "description");
    \u0275\u0275domElementEnd()();
  }
}
function OrderListComponent_Conditional_21_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 20);
    \u0275\u0275domListener("click", function OrderListComponent_Conditional_21_For_23_Template_tr_click_0_listener() {
      const order_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editOrder(order_r6));
    });
    \u0275\u0275domElementStart(1, "td", 21);
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
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "td", 17);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "td", 22);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "td")(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(19, "td");
    \u0275\u0275conditionalCreate(20, OrderListComponent_Conditional_21_For_23_Conditional_20_Template, 2, 1, "a", 23)(21, OrderListComponent_Conditional_21_For_23_Conditional_21_Template, 2, 0, "span", 24);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "td", 25);
    \u0275\u0275domListener("click", function OrderListComponent_Conditional_21_For_23_Template_td_click_22_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(23, OrderListComponent_Conditional_21_For_23_Conditional_23_Template, 9, 3);
    \u0275\u0275conditionalCreate(24, OrderListComponent_Conditional_21_For_23_Conditional_24_Template, 3, 0, "button", 26);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const order_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 12, order_r6.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r6.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r6.journalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 15, order_r6.totalHT, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 18, order_r6.totalTTC, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.getStateBadge(order_r6.state || ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getStateLabel(order_r6.state || ""));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(order_r6.invoiceName ? 20 : 21);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(order_r6.state === "draft" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(order_r6.state === "invoiced" ? 24 : -1);
  }
}
function OrderListComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 14)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Num\xE9ro");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th");
    \u0275\u0275text(6, "Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th");
    \u0275\u0275text(8, "Client");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th");
    \u0275\u0275text(10, "Journal");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th", 17);
    \u0275\u0275text(12, "Total HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "th", 17);
    \u0275\u0275text(14, "Total TTC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "th");
    \u0275\u0275text(16, "Statut");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "th");
    \u0275\u0275text(18, "Facture");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "th", 18);
    \u0275\u0275text(20, "Actions");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, OrderListComponent_Conditional_21_For_23_Template, 25, 21, "tr", 19, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r0.filteredOrders);
  }
}
var OrderListComponent = class _OrderListComponent {
  constructor(salesService, authService, router) {
    this.salesService = salesService;
    this.authService = authService;
    this.router = router;
    this.orders = [];
    this.filteredOrders = [];
    this.loading = false;
    this.stateFilter = "all";
    this.successMsg = "";
    this.errorMsg = "";
    this.confirming = null;
    this.cancelling = null;
    this.stateFilters = [
      { value: "all", label: "Tous" },
      { value: "draft", label: "Brouillon" },
      { value: "confirmed", label: "Confirm\xE9" },
      { value: "invoiced", label: "Factur\xE9" },
      { value: "cancelled", label: "Annul\xE9" }
    ];
  }
  ngOnInit() {
    this.loadOrders();
  }
  loadOrders() {
    this.loading = true;
    const companyId = this.authService.getCompanyId();
    this.salesService.getOrders(companyId).subscribe({
      next: (data) => {
        this.orders = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilter() {
    this.filteredOrders = this.stateFilter === "all" ? this.orders : this.orders.filter((o) => o.state === this.stateFilter);
  }
  setFilter(state) {
    this.stateFilter = state;
    this.applyFilter();
  }
  newOrder() {
    this.router.navigate(["/sales/orders/new"]);
  }
  editOrder(order) {
    this.router.navigate(["/sales/orders", order.id]);
  }
  viewInvoice(order) {
    if (order.invoiceId) {
      this.router.navigate(["/sales/invoices", order.invoiceId]);
    }
  }
  confirmOrder(order, event) {
    event.stopPropagation();
    if (!confirm(`Confirmer le bon ${order.name} ? Une facture sera cr\xE9\xE9e automatiquement.`))
      return;
    this.confirming = order.id;
    this.errorMsg = "";
    this.salesService.confirmOrder(order.id).subscribe({
      next: (updated) => {
        this.confirming = null;
        this.showSuccess(`Bon ${order.name} confirm\xE9. Facture ${updated.invoiceName} cr\xE9\xE9e.`);
        this.loadOrders();
      },
      error: (err) => {
        this.confirming = null;
        this.errorMsg = err.error?.message || "Erreur lors de la confirmation";
      }
    });
  }
  cancelOrder(order, event) {
    event.stopPropagation();
    if (!confirm(`Annuler le bon ${order.name} ?`))
      return;
    this.cancelling = order.id;
    this.salesService.cancelOrder(order.id).subscribe({
      next: () => {
        this.cancelling = null;
        this.showSuccess(`Bon ${order.name} annul\xE9`);
        this.loadOrders();
      },
      error: (err) => {
        this.cancelling = null;
        this.errorMsg = err.error?.message || "Erreur lors de l'annulation";
      }
    });
  }
  getStateBadge(state) {
    const map = {
      draft: "badge-draft",
      confirmed: "badge-confirmed",
      invoiced: "badge-invoiced",
      cancelled: "badge-cancelled"
    };
    return "badge " + (map[state] || "badge-draft");
  }
  getStateLabel(state) {
    const map = {
      draft: "Brouillon",
      confirmed: "Confirm\xE9",
      invoiced: "Factur\xE9",
      cancelled: "Annul\xE9"
    };
    return map[state] || state;
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 4e3);
  }
  static {
    this.\u0275fac = function OrderListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderListComponent)(\u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderListComponent, selectors: [["app-order-list"]], decls: 22, vars: 4, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "record-count"], [1, "btn-primary", 3, "click"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "filter-bar"], [1, "filter-btn", 3, "active"], [1, "card"], [1, "loading-state"], [1, "empty-state"], [1, "data-table"], [1, "filter-btn", 3, "click"], [1, "material-icons", "spin"], [1, "text-right"], [1, "text-center"], [1, "clickable-row"], [1, "clickable-row", 3, "click"], [1, "font-mono", "font-bold"], [1, "text-right", "font-bold"], [1, "link-invoice"], [1, "text-muted"], [1, "text-center", "actions-cell", 3, "click"], ["title", "Voir la facture", 1, "btn-icon", "btn-view"], [1, "link-invoice", 3, "click"], ["title", "Modifier", 1, "btn-icon", "btn-edit", 3, "click"], ["title", "Confirmer (cr\xE9e la facture)", 1, "btn-icon", "btn-confirm", 3, "click", "disabled"], ["title", "Annuler", 1, "btn-icon", "btn-cancel", 3, "click", "disabled"], ["title", "Voir la facture", 1, "btn-icon", "btn-view", 3, "click"]], template: function OrderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3)(4, "span", 4);
        \u0275\u0275text(5, "receipt");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(6, " Bons de commande ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(7, "span", 5);
        \u0275\u0275text(8);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(9, "button", 6);
        \u0275\u0275domListener("click", function OrderListComponent_Template_button_click_9_listener() {
          return ctx.newOrder();
        });
        \u0275\u0275domElementStart(10, "span", 4);
        \u0275\u0275text(11, "add");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(12, " Nouveau bon ");
        \u0275\u0275domElementEnd()();
        \u0275\u0275conditionalCreate(13, OrderListComponent_Conditional_13_Template, 4, 1, "div", 7);
        \u0275\u0275conditionalCreate(14, OrderListComponent_Conditional_14_Template, 4, 1, "div", 8);
        \u0275\u0275domElementStart(15, "div", 9);
        \u0275\u0275repeaterCreate(16, OrderListComponent_For_17_Template, 2, 3, "button", 10, _forTrack0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(18, "div", 11);
        \u0275\u0275conditionalCreate(19, OrderListComponent_Conditional_19_Template, 4, 0, "div", 12)(20, OrderListComponent_Conditional_20_Template, 7, 0, "div", 13)(21, OrderListComponent_Conditional_21_Template, 24, 0, "table", 14);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.filteredOrders.length, " bon(s)");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.successMsg ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 14 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.stateFilters);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading ? 19 : ctx.filteredOrders.length === 0 ? 20 : 21);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #017E84;\n  font-size: 22px;\n}\n.page-header[_ngcontent-%COMP%]   .record-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  background: #e9ecef;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: #017E84;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: background 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #015f64;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n  border: 1px solid #a3e0c9;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 20px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: #017E84;\n  color: #017E84;\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: #017E84;\n  border-color: #017E84;\n  color: white;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: #6c757d;\n  gap: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n}\n.data-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.data-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n.data-table[_ngcontent-%COMP%]   .clickable-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.badge.badge-confirmed[_ngcontent-%COMP%] {\n  background: #cfe2ff;\n  color: #084298;\n}\n.badge.badge-invoiced[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #842029;\n}\n.link-invoice[_ngcontent-%COMP%] {\n  color: #017E84;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: underline;\n}\n.link-invoice[_ngcontent-%COMP%]:hover {\n  color: #015f64;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #e7f1ff;\n}\n.btn-icon.btn-confirm[_ngcontent-%COMP%] {\n  color: #017E84;\n}\n.btn-icon.btn-confirm[_ngcontent-%COMP%]:hover {\n  background: #d1f0e8;\n}\n.btn-icon.btn-cancel[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.btn-icon.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #fde8e8;\n}\n.btn-icon.btn-view[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.btn-icon[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=order-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderListComponent, [{
    type: Component,
    args: [{ selector: "app-order-list", standalone: true, imports: [CommonModule], template: `<div class="page-container">
  <!-- Header -->
  <div class="page-header">
    <div class="header-left">
      <h1 class="page-title">
        <span class="material-icons">receipt</span>
        Bons de commande
      </h1>
      <span class="record-count">{{ filteredOrders.length }} bon(s)</span>
    </div>
    <button class="btn-primary" (click)="newOrder()">
      <span class="material-icons">add</span>
      Nouveau bon
    </button>
  </div>

  <!-- Messages -->
  @if (successMsg) {
    <div class="alert alert-success">
      <span class="material-icons">check_circle</span>
      {{ successMsg }}
    </div>
  }
  @if (errorMsg) {
    <div class="alert alert-danger">
      <span class="material-icons">error</span>
      {{ errorMsg }}
    </div>
  }

  <!-- Filtres -->
  <div class="filter-bar">
    @for (f of stateFilters; track f.value) {
      <button
        class="filter-btn"
        [class.active]="stateFilter === f.value"
        (click)="setFilter(f.value)"
      >{{ f.label }}</button>
    }
  </div>

  <!-- Table -->
  <div class="card">
    @if (loading) {
      <div class="loading-state">
        <span class="material-icons spin">refresh</span>
        Chargement...
      </div>
    } @else if (filteredOrders.length === 0) {
      <div class="empty-state">
        <span class="material-icons">receipt_long</span>
        <p>Aucun bon de commande</p>
        <button class="btn-primary" (click)="newOrder()">Cr\xE9er un bon</button>
      </div>
    } @else {
      <table class="data-table">
        <thead>
          <tr>
            <th>Num\xE9ro</th>
            <th>Date</th>
            <th>Client</th>
            <th>Journal</th>
            <th class="text-right">Total HT</th>
            <th class="text-right">Total TTC</th>
            <th>Statut</th>
            <th>Facture</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (order of filteredOrders; track order.id) {
            <tr (click)="editOrder(order)" class="clickable-row">
              <td class="font-mono font-bold">{{ order.name }}</td>
              <td>{{ order.date | date:'dd/MM/yyyy' }}</td>
              <td>{{ order.partnerName }}</td>
              <td>{{ order.journalName }}</td>
              <td class="text-right">{{ order.totalHT | number:'1.0-0' }}</td>
              <td class="text-right font-bold">{{ order.totalTTC | number:'1.0-0' }}</td>
              <td><span [class]="getStateBadge(order.state || '')">{{ getStateLabel(order.state || '') }}</span></td>
              <td>
                @if (order.invoiceName) {
                  <a class="link-invoice" (click)="viewInvoice(order); $event.stopPropagation()">
                    {{ order.invoiceName }}
                  </a>
                } @else {
                  <span class="text-muted">\u2014</span>
                }
              </td>
              <td class="text-center actions-cell" (click)="$event.stopPropagation()">
                @if (order.state === 'draft') {
                  <button class="btn-icon btn-edit" title="Modifier" (click)="editOrder(order)">
                    <span class="material-icons">edit</span>
                  </button>
                  <button
                    class="btn-icon btn-confirm"
                    title="Confirmer (cr\xE9e la facture)"
                    [disabled]="confirming === order.id"
                    (click)="confirmOrder(order, $event)"
                  >
                    <span class="material-icons">{{ confirming === order.id ? 'hourglass_empty' : 'check_circle' }}</span>
                  </button>
                  <button
                    class="btn-icon btn-cancel"
                    title="Annuler"
                    [disabled]="cancelling === order.id"
                    (click)="cancelOrder(order, $event)"
                  >
                    <span class="material-icons">cancel</span>
                  </button>
                }
                @if (order.state === 'invoiced') {
                  <button class="btn-icon btn-view" title="Voir la facture" (click)="viewInvoice(order)">
                    <span class="material-icons">description</span>
                  </button>
                }
              </td>
            </tr>
          }
        </tbody>
      </table>
    }
  </div>
</div>
`, styles: ['/* src/app/modules/sales/components/orders/order-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: #017E84;\n  font-size: 22px;\n}\n.page-header .record-count {\n  font-size: 13px;\n  color: #6c757d;\n  background: #e9ecef;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: #017E84;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: background 0.2s;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover {\n  background: #015f64;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: #0a5c45;\n  border: 1px solid #a3e0c9;\n}\n.alert.alert-danger {\n  background: #fde8e8;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.filter-bar {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.filter-btn {\n  padding: 6px 16px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 20px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.filter-btn:hover {\n  border-color: #017E84;\n  color: #017E84;\n}\n.filter-btn.active {\n  background: #017E84;\n  border-color: #017E84;\n  color: white;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: #6c757d;\n  gap: 12px;\n}\n.loading-state .material-icons,\n.empty-state .material-icons {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.loading-state p,\n.empty-state p {\n  margin: 0;\n  font-size: 15px;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.data-table td {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n}\n.data-table .clickable-row {\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.data-table .clickable-row:hover td {\n  background: #f8f9fa;\n}\n.data-table .clickable-row:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: #adb5bd;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge.badge-draft {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.badge.badge-confirmed {\n  background: #cfe2ff;\n  color: #084298;\n}\n.badge.badge-invoiced {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.badge.badge-cancelled {\n  background: #fde8e8;\n  color: #842029;\n}\n.link-invoice {\n  color: #017E84;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: underline;\n}\n.link-invoice:hover {\n  color: #015f64;\n}\n.actions-cell {\n  white-space: nowrap;\n}\n.btn-icon {\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.btn-icon .material-icons {\n  font-size: 18px;\n}\n.btn-icon.btn-edit {\n  color: #0d6efd;\n}\n.btn-icon.btn-edit:hover {\n  background: #e7f1ff;\n}\n.btn-icon.btn-confirm {\n  color: #017E84;\n}\n.btn-icon.btn-confirm:hover {\n  background: #d1f0e8;\n}\n.btn-icon.btn-cancel {\n  color: #dc3545;\n}\n.btn-icon.btn-cancel:hover {\n  background: #fde8e8;\n}\n.btn-icon.btn-view {\n  color: #6c757d;\n}\n.btn-icon.btn-view:hover {\n  background: #f0f0f0;\n}\n.btn-icon:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=order-list.component.css.map */\n'] }]
  }], () => [{ type: SalesService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderListComponent, { className: "OrderListComponent", filePath: "src/app/modules/sales/components/orders/order-list.component.ts", lineNumber: 14 });
})();
export {
  OrderListComponent
};
//# sourceMappingURL=chunk-YGOQKNF4.js.map
