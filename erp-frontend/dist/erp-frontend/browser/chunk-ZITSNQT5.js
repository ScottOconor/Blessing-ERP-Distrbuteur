import {
  PurchaseService
} from "./chunk-J47TS3XK.js";
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/purchases/components/orders/order-list.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function OrderListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5)(1, "span", 4);
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
function OrderListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 6)(1, "span", 4);
    \u0275\u0275text(2, "error");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementStart(4, "button", 12);
    \u0275\u0275domListener("click", function OrderListComponent_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.errorMsg = "");
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg, " ");
  }
}
function OrderListComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 13);
    \u0275\u0275domListener("click", function OrderListComponent_For_15_Template_button_click_0_listener() {
      const f_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setFilter(f_r4.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.stateFilter === f_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r4.label, " ");
  }
}
function OrderListComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9);
    \u0275\u0275domElement(1, "span", 14);
    \u0275\u0275text(2, " Chargement...");
    \u0275\u0275domElementEnd();
  }
}
function OrderListComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 10)(1, "span", 4);
    \u0275\u0275text(2, "shopping_cart");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Aucune commande trouv\xE9e.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 3);
    \u0275\u0275domListener("click", function OrderListComponent_Conditional_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.newOrder());
    });
    \u0275\u0275text(6, "Cr\xE9er une commande");
    \u0275\u0275domElementEnd()();
  }
}
function OrderListComponent_Conditional_18_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 18);
    \u0275\u0275domListener("click", function OrderListComponent_Conditional_18_For_21_Template_tr_click_0_listener() {
      const order_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editOrder(order_r7.id));
    });
    \u0275\u0275domElementStart(1, "td")(2, "strong", 19);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "td", 16);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "td", 16)(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(19, "td")(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(22, "td")(23, "span", 20);
    \u0275\u0275text(24, "chevron_right");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const order_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r7.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 9, order_r7.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r7.dateExpected ? \u0275\u0275pipeBind2(11, 12, order_r7.dateExpected, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 15, order_r7.totalHT ?? 0, "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 18, order_r7.totalTTC ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.stateBadge(order_r7.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.stateLabel(order_r7.state));
  }
}
function OrderListComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "table", 15)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "R\xE9f\xE9rence");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "th");
    \u0275\u0275text(7, "Fournisseur");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "th");
    \u0275\u0275text(9, "Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "th");
    \u0275\u0275text(11, "Date livraison");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "th", 16);
    \u0275\u0275text(13, "Total HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "th", 16);
    \u0275\u0275text(15, "Total TTC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "th");
    \u0275\u0275text(17, "Statut");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(18, "th");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, OrderListComponent_Conditional_18_For_21_Template, 25, 21, "tr", 17, _forTrack1);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r0.filteredOrders);
  }
}
var OrderListComponent = class _OrderListComponent {
  constructor(purchaseService, authService, router) {
    this.purchaseService = purchaseService;
    this.authService = authService;
    this.router = router;
    this.orders = [];
    this.filteredOrders = [];
    this.loading = false;
    this.stateFilter = "all";
    this.successMsg = "";
    this.errorMsg = "";
    this.stateFilters = [
      { value: "all", label: "Tous" },
      { value: "draft", label: "Brouillon" },
      { value: "confirmed", label: "Confirm\xE9e" },
      { value: "received", label: "R\xE9ceptionn\xE9e" },
      { value: "cancelled", label: "Annul\xE9e" }
    ];
  }
  ngOnInit() {
    this.loadOrders();
  }
  loadOrders() {
    this.loading = true;
    const cid = this.authService.getCompanyId() ?? 1;
    this.purchaseService.getOrders(cid).subscribe({
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
    this.router.navigate(["/purchases/orders/new"]);
  }
  editOrder(id) {
    this.router.navigate(["/purchases/orders", id]);
  }
  stateLabel(s) {
    const map = { draft: "Brouillon", confirmed: "Confirm\xE9e", received: "R\xE9ceptionn\xE9e", cancelled: "Annul\xE9e" };
    return map[s ?? ""] ?? s ?? "";
  }
  stateBadge(s) {
    return "badge badge-" + (s ?? "draft");
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 5e3);
  }
  static {
    this.\u0275fac = function OrderListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderListComponent)(\u0275\u0275directiveInject(PurchaseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderListComponent, selectors: [["app-purchase-order-list"]], decls: 19, vars: 4, consts: [[1, "pur-list-page"], [1, "page-header"], [1, "subtitle"], [1, "btn-primary", 3, "click"], [1, "material-icons"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "filter-bar"], [1, "filter-btn", 3, "active"], [1, "loading-state"], [1, "empty-state"], [1, "table-card"], [3, "click"], [1, "filter-btn", 3, "click"], [1, "spinner"], [1, "data-table"], [1, "text-right"], [1, "row-link"], [1, "row-link", 3, "click"], [1, "ref-link"], [1, "material-icons", "chevron"]], template: function OrderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Commandes fournisseurs");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(7, "button", 3);
        \u0275\u0275domListener("click", function OrderListComponent_Template_button_click_7_listener() {
          return ctx.newOrder();
        });
        \u0275\u0275domElementStart(8, "span", 4);
        \u0275\u0275text(9, "add");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(10, " Nouvelle commande ");
        \u0275\u0275domElementEnd()();
        \u0275\u0275conditionalCreate(11, OrderListComponent_Conditional_11_Template, 4, 1, "div", 5);
        \u0275\u0275conditionalCreate(12, OrderListComponent_Conditional_12_Template, 6, 1, "div", 6);
        \u0275\u0275domElementStart(13, "div", 7);
        \u0275\u0275repeaterCreate(14, OrderListComponent_For_15_Template, 2, 3, "button", 8, _forTrack0);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(16, OrderListComponent_Conditional_16_Template, 3, 0, "div", 9)(17, OrderListComponent_Conditional_17_Template, 7, 0, "div", 10)(18, OrderListComponent_Conditional_18_Template, 22, 0, "div", 11);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.filteredOrders.length, " commande(s)");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.successMsg ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 12 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.stateFilters);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading ? 16 : ctx.filteredOrders.length === 0 ? 17 : 18);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe], styles: ["\n.pur-list-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #212529;\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 14px;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #00A09D;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #007674;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n  line-height: 1;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #d1e7dd;\n  color: #155724;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #842029;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.filter-bar[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 20px;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #495057;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.filter-bar[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]:hover {\n  border-color: #00A09D;\n  color: #00A09D;\n}\n.filter-bar[_ngcontent-%COMP%]   .filter-btn.active[_ngcontent-%COMP%] {\n  background: #00A09D;\n  color: white;\n  border-color: #00A09D;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n  color: #6c757d;\n}\n.spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 2px solid #dee2e6;\n  border-top-color: #00A09D;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 56px;\n  color: #dee2e6;\n  display: block;\n  margin-bottom: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 16px;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  background: #f8f9fa;\n  font-weight: 600;\n  font-size: 12px;\n  color: #6c757d;\n  text-transform: uppercase;\n  border-bottom: 2px solid #e9ecef;\n  text-align: left;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid #f0f0f0;\n  color: #212529;\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.data-table[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.data-table[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n.ref-link[_ngcontent-%COMP%] {\n  color: #00A09D;\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.picking-ref[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #495057;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-draft[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.badge-confirmed[_ngcontent-%COMP%] {\n  background: #cff4fc;\n  color: #0c5460;\n}\n.badge-received[_ngcontent-%COMP%] {\n  background: #d1e7dd;\n  color: #155724;\n}\n.badge-cancelled[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #842029;\n}\n.badge-picking-draft[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.badge-picking-done[_ngcontent-%COMP%] {\n  background: #d1e7dd;\n  color: #155724;\n}\n.badge-picking-cancelled[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #842029;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.btn-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-action[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.btn-action-confirm[_ngcontent-%COMP%] {\n  background: #d1e7dd;\n  color: #155724;\n}\n.btn-action-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #155724;\n  color: white;\n}\n.btn-action-receive[_ngcontent-%COMP%] {\n  background: #cff4fc;\n  color: #0c5460;\n}\n.btn-action-receive[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #00A09D;\n  color: white;\n}\n.btn-action-cancel[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #842029;\n}\n.btn-action-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #842029;\n  color: white;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=order-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderListComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-order-list", standalone: true, imports: [CommonModule], template: `<div class="pur-list-page">
  <div class="page-header">
    <div>
      <h1>Commandes fournisseurs</h1>
      <p class="subtitle">{{ filteredOrders.length }} commande(s)</p>
    </div>
    <button class="btn-primary" (click)="newOrder()">
      <span class="material-icons">add</span>
      Nouvelle commande
    </button>
  </div>

  @if (successMsg) {
    <div class="alert alert-success">
      <span class="material-icons">check_circle</span>
      {{ successMsg }}
    </div>
  }
  @if (errorMsg) {
    <div class="alert alert-error">
      <span class="material-icons">error</span>
      {{ errorMsg }}
      <button (click)="errorMsg = ''">\xD7</button>
    </div>
  }

  <!-- Filters -->
  <div class="filter-bar">
    @for (f of stateFilters; track f.value) {
      <button class="filter-btn" [class.active]="stateFilter === f.value" (click)="setFilter(f.value)">
        {{ f.label }}
      </button>
    }
  </div>

  <!-- Table -->
  @if (loading) {
    <div class="loading-state"><span class="spinner"></span> Chargement...</div>
  } @else if (filteredOrders.length === 0) {
    <div class="empty-state">
      <span class="material-icons">shopping_cart</span>
      <p>Aucune commande trouv\xE9e.</p>
      <button class="btn-primary" (click)="newOrder()">Cr\xE9er une commande</button>
    </div>
  } @else {
    <div class="table-card">
      <table class="data-table">
        <thead>
          <tr>
            <th>R\xE9f\xE9rence</th>
            <th>Fournisseur</th>
            <th>Date</th>
            <th>Date livraison</th>
            <th class="text-right">Total HT</th>
            <th class="text-right">Total TTC</th>
            <th>Statut</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @for (order of filteredOrders; track order.id) {
            <tr class="row-link" (click)="editOrder(order.id!)">
              <td><strong class="ref-link">{{ order.name }}</strong></td>
              <td>{{ order.partnerName }}</td>
              <td>{{ order.date | date:'dd/MM/yyyy' }}</td>
              <td>{{ order.dateExpected ? (order.dateExpected | date:'dd/MM/yyyy') : '\u2014' }}</td>
              <td class="text-right">{{ (order.totalHT ?? 0) | number:'1.0-0' }}</td>
              <td class="text-right"><strong>{{ (order.totalTTC ?? 0) | number:'1.0-0' }} FCFA</strong></td>
              <td><span [class]="stateBadge(order.state)">{{ stateLabel(order.state) }}</span></td>
              <td><span class="material-icons chevron">chevron_right</span></td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }
</div>
`, styles: ["/* src/app/modules/purchases/components/orders/order-list.component.scss */\n.pur-list-page {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: #212529;\n  margin: 0 0 4px;\n}\n.page-header .subtitle {\n  color: #6c757d;\n  font-size: 14px;\n  margin: 0;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #00A09D;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover {\n  background: #007674;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert button {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n  line-height: 1;\n}\n.alert-success {\n  background: #d1e7dd;\n  color: #155724;\n}\n.alert-error {\n  background: #f8d7da;\n  color: #842029;\n}\n.filter-bar {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.filter-bar .filter-btn {\n  padding: 6px 14px;\n  border-radius: 20px;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #495057;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.filter-bar .filter-btn:hover {\n  border-color: #00A09D;\n  color: #00A09D;\n}\n.filter-bar .filter-btn.active {\n  background: #00A09D;\n  color: white;\n  border-color: #00A09D;\n}\n.loading-state {\n  text-align: center;\n  padding: 48px;\n  color: #6c757d;\n}\n.spinner {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 2px solid #dee2e6;\n  border-top-color: #00A09D;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n}\n.empty-state .material-icons {\n  font-size: 56px;\n  color: #dee2e6;\n  display: block;\n  margin-bottom: 12px;\n}\n.empty-state p {\n  color: #6c757d;\n  margin-bottom: 16px;\n}\n.table-card {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.data-table th {\n  padding: 12px 14px;\n  background: #f8f9fa;\n  font-weight: 600;\n  font-size: 12px;\n  color: #6c757d;\n  text-transform: uppercase;\n  border-bottom: 2px solid #e9ecef;\n  text-align: left;\n}\n.data-table td {\n  padding: 12px 14px;\n  border-bottom: 1px solid #f0f0f0;\n  color: #212529;\n  vertical-align: middle;\n}\n.data-table .text-right {\n  text-align: right;\n}\n.data-table .row-link {\n  cursor: pointer;\n}\n.data-table .row-link:hover td {\n  background: #f8f9fa;\n}\n.ref-link {\n  color: #00A09D;\n  font-weight: 600;\n}\n.text-muted {\n  color: #adb5bd;\n}\n.picking-ref {\n  font-size: 12px;\n  color: #495057;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-draft {\n  background: #fff3cd;\n  color: #856404;\n}\n.badge-confirmed {\n  background: #cff4fc;\n  color: #0c5460;\n}\n.badge-received {\n  background: #d1e7dd;\n  color: #155724;\n}\n.badge-cancelled {\n  background: #f8d7da;\n  color: #842029;\n}\n.badge-picking-draft {\n  background: #fff3cd;\n  color: #856404;\n}\n.badge-picking-done {\n  background: #d1e7dd;\n  color: #155724;\n}\n.badge-picking-cancelled {\n  background: #f8d7da;\n  color: #842029;\n}\n.actions-cell {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.btn-action {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-action .material-icons {\n  font-size: 16px;\n}\n.btn-action:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.btn-action-confirm {\n  background: #d1e7dd;\n  color: #155724;\n}\n.btn-action-confirm:hover:not(:disabled) {\n  background: #155724;\n  color: white;\n}\n.btn-action-receive {\n  background: #cff4fc;\n  color: #0c5460;\n}\n.btn-action-receive:hover:not(:disabled) {\n  background: #00A09D;\n  color: white;\n}\n.btn-action-cancel {\n  background: #f8d7da;\n  color: #842029;\n}\n.btn-action-cancel:hover:not(:disabled) {\n  background: #842029;\n  color: white;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=order-list.component.css.map */\n"] }]
  }], () => [{ type: PurchaseService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderListComponent, { className: "OrderListComponent", filePath: "src/app/modules/purchases/components/orders/order-list.component.ts", lineNumber: 14 });
})();
export {
  OrderListComponent
};
//# sourceMappingURL=chunk-ZITSNQT5.js.map
