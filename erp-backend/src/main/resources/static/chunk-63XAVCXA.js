import {
  EleaderService
} from "./chunk-N3CNQQZB.js";
import {
  Router
} from "./chunk-4W3TIS2I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NRXD6HPP.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/sales/components/eleader/eleader-orders/eleader-orders.component.ts
function EleaderOrdersComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 5);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMsg, " ");
  }
}
function EleaderOrdersComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 5);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg, " ");
  }
}
function EleaderOrdersComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function EleaderOrdersComponent_button_19_Template_button_click_0_listener() {
      const f_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.stateFilter = f_r3.value;
      return \u0275\u0275resetView(ctx_r0.applyFilters());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.stateFilter === f_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r3.label, " ");
  }
}
function EleaderOrdersComponent_div_23_table_1_tr_20_button_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function EleaderOrdersComponent_div_23_table_1_tr_20_button_19_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
  }
}
function EleaderOrdersComponent_div_23_table_1_tr_20_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function EleaderOrdersComponent_div_23_table_1_tr_20_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const o_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.askConfirm(o_r5));
    });
    \u0275\u0275template(1, EleaderOrdersComponent_div_23_table_1_tr_20_button_19_span_1_Template, 2, 0, "span", 33)(2, EleaderOrdersComponent_div_23_table_1_tr_20_button_19_span_2_Template, 2, 0, "span", 34);
    \u0275\u0275text(3, " Confirmer ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.confirming === o_r5.id)("title", ctx_r0.confirming === o_r5.id ? "Confirmation\u2026" : "Confirmer et cr\xE9er la facture");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.confirming !== o_r5.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.confirming === o_r5.id);
  }
}
function EleaderOrdersComponent_div_23_table_1_tr_20_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function EleaderOrdersComponent_div_23_table_1_tr_20_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const o_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelOrder(o_r5));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.cancelling === o_r5.id);
  }
}
function EleaderOrdersComponent_div_23_table_1_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 26);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 27);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 28);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 29);
    \u0275\u0275template(19, EleaderOrdersComponent_div_23_table_1_tr_20_button_19_Template, 4, 4, "button", 30)(20, EleaderOrdersComponent_div_23_table_1_tr_20_button_20_Template, 3, 1, "button", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r5.eleaderReference || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r5.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 10, o_r5.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 13, o_r5.totalTTC, "1.0-0"), " FCFA");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.stateClass(o_r5.state || ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.stateLabel(o_r5.state || ""));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r5.invoiceName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", o_r5.state === "draft");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r5.state === "draft");
  }
}
function EleaderOrdersComponent_div_23_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table")(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Bon de commande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "R\xE9f. eLeader");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Facture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, EleaderOrdersComponent_div_23_table_1_tr_20_Template, 21, 16, "tr", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r0.filteredOrders);
  }
}
function EleaderOrdersComponent_div_23_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 5);
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun bon de commande eLeader trouv\xE9.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 38);
    \u0275\u0275listener("click", function EleaderOrdersComponent_div_23_ng_template_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToImport());
    });
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Importer un PDF eLeader ");
    \u0275\u0275elementEnd()();
  }
}
function EleaderOrdersComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, EleaderOrdersComponent_div_23_table_1_Template, 21, 1, "table", 21)(2, EleaderOrdersComponent_div_23_ng_template_2_Template, 9, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noOrders_r8 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredOrders.length > 0)("ngIfElse", noOrders_r8);
  }
}
function EleaderOrdersComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 35);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement des bons de commande\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function EleaderOrdersComponent_div_25_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "p");
    \u0275\u0275text(2, "Voulez-vous confirmer le bon ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 48);
    \u0275\u0275text(7, " Client : ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "br");
    \u0275\u0275text(11, " Total TTC : ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 49)(16, "span", 5);
    \u0275\u0275text(17, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " La confirmation va cr\xE9er automatiquement la facture correspondante avec le journal eLeader configur\xE9. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.confirmTarget.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.confirmTarget.partnerName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 3, ctx_r0.confirmTarget.totalTTC, "1.0-0"), " FCFA");
  }
}
function EleaderOrdersComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function EleaderOrdersComponent_div_25_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showConfirmModal = false);
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275listener("click", function EleaderOrdersComponent_div_25_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 42)(3, "span", 5);
    \u0275\u0275text(4, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6, "Confirmer le bon de commande");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, EleaderOrdersComponent_div_25_div_7_Template, 19, 6, "div", 43);
    \u0275\u0275elementStart(8, "div", 44)(9, "button", 45);
    \u0275\u0275listener("click", function EleaderOrdersComponent_div_25_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showConfirmModal = false);
    });
    \u0275\u0275text(10, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 46);
    \u0275\u0275listener("click", function EleaderOrdersComponent_div_25_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmOrder());
    });
    \u0275\u0275elementStart(12, "span", 5);
    \u0275\u0275text(13, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Confirmer et facturer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.confirmTarget);
  }
}
var EleaderOrdersComponent = class _EleaderOrdersComponent {
  constructor(eleaderService, authService, router) {
    this.eleaderService = eleaderService;
    this.authService = authService;
    this.router = router;
    this.orders = [];
    this.filteredOrders = [];
    this.loading = false;
    this.stateFilter = "all";
    this.searchText = "";
    this.errorMsg = "";
    this.successMsg = "";
    this.confirming = null;
    this.cancelling = null;
    this.confirmTarget = null;
    this.showConfirmModal = false;
    this.STATE_FILTERS = [
      { value: "all", label: "Tous" },
      { value: "draft", label: "Brouillon" },
      { value: "invoiced", label: "Factur\xE9" },
      { value: "cancelled", label: "Annul\xE9" }
    ];
  }
  ngOnInit() {
    this.loadOrders();
  }
  loadOrders() {
    this.loading = true;
    this.eleaderService.getOrders(this.authService.getCompanyId()).subscribe({
      next: (orders) => {
        this.orders = orders;
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilters() {
    let list = [...this.orders];
    if (this.stateFilter !== "all") {
      list = list.filter((o) => o.state === this.stateFilter);
    }
    if (this.searchText.trim()) {
      const q = this.searchText.trim().toLowerCase();
      list = list.filter((o) => o.name?.toLowerCase().includes(q) || o.partnerName?.toLowerCase().includes(q) || o.eleaderReference?.toLowerCase().includes(q));
    }
    this.filteredOrders = list;
  }
  askConfirm(order) {
    this.confirmTarget = order;
    this.showConfirmModal = true;
  }
  confirmOrder() {
    if (!this.confirmTarget)
      return;
    const id = this.confirmTarget.id;
    this.confirming = id;
    this.showConfirmModal = false;
    this.errorMsg = "";
    this.eleaderService.confirmOrder(id).subscribe({
      next: (updated) => {
        const idx = this.orders.findIndex((o) => o.id === id);
        if (idx >= 0)
          this.orders[idx] = updated;
        this.applyFilters();
        this.confirming = null;
        this.successMsg = `Bon ${updated.name} confirm\xE9 \u2014 facture cr\xE9\xE9e.`;
        setTimeout(() => this.successMsg = "", 5e3);
      },
      error: (err) => {
        this.errorMsg = err?.error?.message || "Erreur lors de la confirmation.";
        this.confirming = null;
      }
    });
  }
  cancelOrder(order) {
    if (!confirm(`Annuler le bon ${order.name} ?`))
      return;
    this.cancelling = order.id;
    this.eleaderService.cancelOrder(order.id).subscribe({
      next: (updated) => {
        const idx = this.orders.findIndex((o) => o.id === order.id);
        if (idx >= 0)
          this.orders[idx] = updated;
        this.applyFilters();
        this.cancelling = null;
      },
      error: (err) => {
        this.errorMsg = err?.error?.message || "Erreur lors de l'annulation.";
        this.cancelling = null;
      }
    });
  }
  goToImport() {
    this.router.navigate(["/sales/eleader/import"]);
  }
  stateClass(state) {
    const map = {
      draft: "badge-draft",
      confirmed: "badge-confirmed",
      invoiced: "badge-invoiced",
      cancelled: "badge-cancelled"
    };
    return map[state] ?? "badge-draft";
  }
  stateLabel(state) {
    const map = {
      draft: "Brouillon",
      confirmed: "Confirm\xE9",
      invoiced: "Factur\xE9",
      cancelled: "Annul\xE9"
    };
    return map[state] ?? state;
  }
  static {
    this.\u0275fac = function EleaderOrdersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EleaderOrdersComponent)(\u0275\u0275directiveInject(EleaderService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EleaderOrdersComponent, selectors: [["app-eleader-orders"]], decls: 26, vars: 9, consts: [["noOrders", ""], [1, "orders-page"], [1, "page-header"], [1, "subtitle"], [1, "btn-primary", 3, "click"], [1, "material-icons"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], [1, "filters-bar"], [1, "search-box"], ["placeholder", "Rechercher par BC, client, r\xE9f. eLeader\u2026", 3, "ngModelChange", "ngModel"], [1, "state-tabs"], ["class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["title", "Rafra\xEEchir", 1, "btn-refresh", 3, "click"], ["class", "table-wrapper", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "tab-btn", 3, "click"], [1, "table-wrapper"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [1, "mono", "fw"], [1, "mono", "ref"], [1, "partner"], [1, "amount"], [1, "badge", 3, "ngClass"], [1, "mono"], [1, "actions"], ["class", "btn-confirm", 3, "disabled", "title", "click", 4, "ngIf"], ["class", "btn-cancel", "title", "Annuler", 3, "disabled", "click", 4, "ngIf"], [1, "btn-confirm", 3, "click", "disabled", "title"], ["class", "material-icons", 4, "ngIf"], ["class", "material-icons spin", 4, "ngIf"], [1, "material-icons", "spin"], ["title", "Annuler", 1, "btn-cancel", 3, "click", "disabled"], [1, "empty-state"], [1, "btn-primary", "small", 3, "click"], [1, "loading-state"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 3, "click"], [1, "modal-header"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "btn-confirm-modal", 3, "click"], [1, "modal-body"], [1, "sub"], [1, "info-box"]], template: function EleaderOrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h2");
        \u0275\u0275text(4, "Bons de commande eLeader");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Bons import\xE9s depuis les factures PDF eLeader");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function EleaderOrdersComponent_Template_button_click_7_listener() {
          return ctx.goToImport();
        });
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "upload_file");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Nouvel import ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, EleaderOrdersComponent_div_11_Template, 4, 1, "div", 6)(12, EleaderOrdersComponent_div_12_Template, 4, 1, "div", 7);
        \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "span", 5);
        \u0275\u0275text(16, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function EleaderOrdersComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function EleaderOrdersComponent_Template_input_ngModelChange_17_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 11);
        \u0275\u0275template(19, EleaderOrdersComponent_button_19_Template, 2, 3, "button", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 13);
        \u0275\u0275listener("click", function EleaderOrdersComponent_Template_button_click_20_listener() {
          return ctx.loadOrders();
        });
        \u0275\u0275elementStart(21, "span", 5);
        \u0275\u0275text(22, "refresh");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(23, EleaderOrdersComponent_div_23_Template, 4, 2, "div", 14)(24, EleaderOrdersComponent_div_24_Template, 4, 0, "div", 15)(25, EleaderOrdersComponent_div_25_Template, 15, 1, "div", 16);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.successMsg);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMsg);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.STATE_FILTERS);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("spin", ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showConfirmModal);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ["\n.orders-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin: 0 0 4px;\n  color: var(--text-primary);\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n  margin: 0;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 0.9rem;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: #16a34a;\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 220px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 0 12px;\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 18px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 9px 0;\n  font-size: 0.875rem;\n  width: 100%;\n  background: transparent;\n  color: var(--text-primary);\n}\n.state-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  cursor: pointer;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: #fff;\n  font-weight: 700;\n}\n.tab-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--bg-elevated);\n}\n.btn-refresh[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background: var(--bg-surface);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-refresh[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-muted);\n}\n.btn-refresh[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\nth[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  padding: 11px 14px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1px solid var(--border);\n}\ntd[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-secondary);\n  vertical-align: middle;\n}\ntr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\ntr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.82rem;\n}\n.fw[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.ref[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.partner[_ngcontent-%COMP%] {\n  font-weight: 500;\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: monospace;\n  text-align: right;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.badge-draft[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.badge-confirmed[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--primary);\n}\n.badge-invoiced[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: #16a34a;\n}\n.badge-cancelled[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: var(--primary);\n  color: #fff;\n  border: none;\n  border-radius: 7px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-confirm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-confirm[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  background: transparent;\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  color: var(--text-muted);\n  cursor: pointer;\n}\n.btn-cancel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: #fca5a5;\n}\n.btn-cancel[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary.small[_ngcontent-%COMP%], \n.btn-secondary.small[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  font-size: 0.82rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 1rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-muted);\n  padding: 48px;\n  justify-content: center;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  width: 440px;\n  max-width: 95vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 22px;\n}\n.modal-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 0.9rem;\n  color: var(--text-secondary);\n}\n.modal-body[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n}\n.info-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 10px 12px;\n  background: var(--primary-subtle);\n  border-radius: 8px;\n  font-size: 0.85rem;\n  color: var(--primary);\n  margin-top: 12px;\n}\n.info-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 16px 20px;\n  border-top: 1px solid var(--border-light);\n}\n.btn-confirm-modal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  background: #16a34a;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.btn-confirm-modal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-confirm-modal[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  display: inline-block;\n}\n/*# sourceMappingURL=eleader-orders.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EleaderOrdersComponent, [{
    type: Component,
    args: [{ selector: "app-eleader-orders", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="orders-page">
  <div class="page-header">
    <div>
      <h2>Bons de commande eLeader</h2>
      <p class="subtitle">Bons import\xE9s depuis les factures PDF eLeader</p>
    </div>
    <button class="btn-primary" (click)="goToImport()">
      <span class="material-icons">upload_file</span>
      Nouvel import
    </button>
  </div>

  <div *ngIf="successMsg" class="alert alert-success">
    <span class="material-icons">check_circle</span> {{ successMsg }}
  </div>
  <div *ngIf="errorMsg" class="alert alert-error">
    <span class="material-icons">error</span> {{ errorMsg }}
  </div>

  <!-- Filtres -->
  <div class="filters-bar">
    <div class="search-box">
      <span class="material-icons">search</span>
      <input [(ngModel)]="searchText" (ngModelChange)="applyFilters()"
             placeholder="Rechercher par BC, client, r\xE9f. eLeader\u2026" />
    </div>
    <div class="state-tabs">
      <button *ngFor="let f of STATE_FILTERS"
              class="tab-btn" [class.active]="stateFilter === f.value"
              (click)="stateFilter = f.value; applyFilters()">
        {{ f.label }}
      </button>
    </div>
    <button class="btn-refresh" (click)="loadOrders()" title="Rafra\xEEchir">
      <span class="material-icons" [class.spin]="loading">refresh</span>
    </button>
  </div>

  <!-- Table -->
  <div class="table-wrapper" *ngIf="!loading">
    <table *ngIf="filteredOrders.length > 0; else noOrders">
      <thead>
        <tr>
          <th>Bon de commande</th>
          <th>R\xE9f. eLeader</th>
          <th>Client</th>
          <th>Date</th>
          <th>Total TTC</th>
          <th>Statut</th>
          <th>Facture</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let o of filteredOrders">
          <td class="mono fw">{{ o.name }}</td>
          <td class="mono ref">{{ o.eleaderReference || '\u2014' }}</td>
          <td class="partner">{{ o.partnerName }}</td>
          <td>{{ o.date | date:'dd/MM/yyyy' }}</td>
          <td class="amount">{{ o.totalTTC | number:'1.0-0' }} FCFA</td>
          <td><span class="badge" [ngClass]="stateClass(o.state || '')">{{ stateLabel(o.state || '') }}</span></td>
          <td class="mono">{{ o.invoiceName || '\u2014' }}</td>
          <td class="actions">
            <button *ngIf="o.state === 'draft'"
                    class="btn-confirm" (click)="askConfirm(o)"
                    [disabled]="confirming === o.id"
                    [title]="confirming === o.id ? 'Confirmation\u2026' : 'Confirmer et cr\xE9er la facture'">
              <span class="material-icons" *ngIf="confirming !== o.id">check_circle</span>
              <span class="material-icons spin" *ngIf="confirming === o.id">refresh</span>
              Confirmer
            </button>
            <button *ngIf="o.state === 'draft'"
                    class="btn-cancel" (click)="cancelOrder(o)"
                    [disabled]="cancelling === o.id"
                    title="Annuler">
              <span class="material-icons">cancel</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <ng-template #noOrders>
      <div class="empty-state">
        <span class="material-icons">inbox</span>
        <p>Aucun bon de commande eLeader trouv\xE9.</p>
        <button class="btn-primary small" (click)="goToImport()">
          <span class="material-icons">upload_file</span>
          Importer un PDF eLeader
        </button>
      </div>
    </ng-template>
  </div>

  <div class="loading-state" *ngIf="loading">
    <span class="material-icons spin">refresh</span> Chargement des bons de commande\u2026
  </div>

  <!-- Modal confirmation -->
  <div class="modal-overlay" *ngIf="showConfirmModal" (click)="showConfirmModal = false">
    <div class="modal-box" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <span class="material-icons">check_circle</span>
        <h4>Confirmer le bon de commande</h4>
      </div>
      <div class="modal-body" *ngIf="confirmTarget">
        <p>Voulez-vous confirmer le bon <strong>{{ confirmTarget.name }}</strong> ?</p>
        <p class="sub">
          Client : <strong>{{ confirmTarget.partnerName }}</strong><br/>
          Total TTC : <strong>{{ confirmTarget.totalTTC | number:'1.0-0' }} FCFA</strong>
        </p>
        <div class="info-box">
          <span class="material-icons">info</span>
          La confirmation va cr\xE9er automatiquement la facture correspondante avec le journal eLeader configur\xE9.
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" (click)="showConfirmModal = false">Annuler</button>
        <button class="btn-confirm-modal" (click)="confirmOrder()">
          <span class="material-icons">check_circle</span>
          Confirmer et facturer
        </button>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/modules/sales/components/eleader/eleader-orders/eleader-orders.component.scss */\n.orders-page {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header h2 {\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin: 0 0 4px;\n  color: var(--text-primary);\n}\n.page-header .subtitle {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n  margin: 0;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 0.9rem;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-success {\n  background: var(--success-bg);\n  color: #16a34a;\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-error {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.filters-bar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 220px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 0 12px;\n}\n.search-box .material-icons {\n  color: var(--text-muted);\n  font-size: 18px;\n}\n.search-box input {\n  border: none;\n  outline: none;\n  padding: 9px 0;\n  font-size: 0.875rem;\n  width: 100%;\n  background: transparent;\n  color: var(--text-primary);\n}\n.state-tabs {\n  display: flex;\n  gap: 4px;\n}\n.tab-btn {\n  padding: 7px 14px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  cursor: pointer;\n}\n.tab-btn.active {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: #fff;\n  font-weight: 700;\n}\n.tab-btn:hover:not(.active) {\n  background: var(--bg-elevated);\n}\n.btn-refresh {\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background: var(--bg-surface);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-refresh .material-icons {\n  font-size: 18px;\n  color: var(--text-muted);\n}\n.btn-refresh:hover {\n  background: var(--bg-elevated);\n}\n.table-wrapper {\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\nth {\n  background: var(--bg-elevated);\n  padding: 11px 14px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1px solid var(--border);\n}\ntd {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-secondary);\n  vertical-align: middle;\n}\ntr:last-child td {\n  border-bottom: none;\n}\ntr:hover td {\n  background: var(--bg-elevated);\n}\n.mono {\n  font-family: monospace;\n  font-size: 0.82rem;\n}\n.fw {\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.ref {\n  color: var(--primary);\n}\n.partner {\n  font-weight: 500;\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.amount {\n  font-weight: 700;\n  font-family: monospace;\n  text-align: right;\n}\n.badge {\n  padding: 3px 10px;\n  border-radius: 99px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.badge-draft {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.badge-confirmed {\n  background: var(--info-bg);\n  color: var(--primary);\n}\n.badge-invoiced {\n  background: var(--success-bg);\n  color: #16a34a;\n}\n.badge-cancelled {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.actions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-confirm {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: var(--primary);\n  color: #fff;\n  border: none;\n  border-radius: 7px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-confirm .material-icons {\n  font-size: 15px;\n}\n.btn-confirm:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-confirm:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-cancel {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  background: transparent;\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  color: var(--text-muted);\n  cursor: pointer;\n}\n.btn-cancel .material-icons {\n  font-size: 16px;\n}\n.btn-cancel:hover:not(:disabled) {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: #fca5a5;\n}\n.btn-cancel:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-primary,\n.btn-secondary {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 16px;\n}\n.btn-primary.small,\n.btn-secondary.small {\n  padding: 7px 14px;\n  font-size: 0.82rem;\n}\n.btn-primary {\n  background: var(--primary);\n  color: #fff;\n}\n.btn-primary:hover {\n  background: var(--primary-dark);\n}\n.btn-secondary {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover {\n  background: var(--bg-elevated);\n}\n.empty-state {\n  text-align: center;\n  padding: 48px 24px;\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 12px;\n}\n.empty-state p {\n  margin: 0 0 16px;\n  font-size: 1rem;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-muted);\n  padding: 48px;\n  justify-content: center;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-box {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  width: 440px;\n  max-width: 95vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header .material-icons {\n  color: var(--primary);\n  font-size: 22px;\n}\n.modal-header h4 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.modal-body {\n  padding: 20px;\n}\n.modal-body p {\n  margin: 0 0 8px;\n  font-size: 0.9rem;\n  color: var(--text-secondary);\n}\n.modal-body .sub {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n}\n.info-box {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 10px 12px;\n  background: var(--primary-subtle);\n  border-radius: 8px;\n  font-size: 0.85rem;\n  color: var(--primary);\n  margin-top: 12px;\n}\n.info-box .material-icons {\n  font-size: 18px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 16px 20px;\n  border-top: 1px solid var(--border-light);\n}\n.btn-confirm-modal {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  background: #16a34a;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.btn-confirm-modal .material-icons {\n  font-size: 16px;\n}\n.btn-confirm-modal:hover {\n  background: #15803d;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin {\n  animation: spin 0.8s linear infinite;\n  display: inline-block;\n}\n/*# sourceMappingURL=eleader-orders.component.css.map */\n"] }]
  }], () => [{ type: EleaderService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EleaderOrdersComponent, { className: "EleaderOrdersComponent", filePath: "app/modules/sales/components/eleader/eleader-orders/eleader-orders.component.ts", lineNumber: 16 });
})();
export {
  EleaderOrdersComponent
};
//# sourceMappingURL=chunk-63XAVCXA.js.map
