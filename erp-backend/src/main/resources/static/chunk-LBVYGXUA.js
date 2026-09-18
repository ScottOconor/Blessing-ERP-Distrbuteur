import {
  AuditService
} from "./chunk-G4ORCRQ7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-NRXD6HPP.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  KeyValuePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/config/components/supervision/supervision.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
function SupervisionComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.totalElements, " entr\xE9e", ctx_r0.totalElements > 1 ? "s" : "");
  }
}
function SupervisionComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 24);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement des logs\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function SupervisionComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 7);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune op\xE9ration trouv\xE9e pour ces crit\xE8res.");
    \u0275\u0275elementEnd()();
  }
}
function SupervisionComponent_Conditional_62_For_18_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r2.performedBy);
  }
}
function SupervisionComponent_Conditional_62_For_18_Conditional_21_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46)(1, "span", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.value);
  }
}
function SupervisionComponent_Conditional_62_For_18_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275repeaterCreate(1, SupervisionComponent_Conditional_62_For_18_Conditional_21_For_2_Template, 5, 2, "span", 46, _forTrack1);
    \u0275\u0275pipe(3, "keyvalue");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const det_r4 = \u0275\u0275readContextLet(20);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, det_r4));
  }
}
function SupervisionComponent_Conditional_62_For_18_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r2.details);
  }
}
function SupervisionComponent_Conditional_62_For_18_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function SupervisionComponent_Conditional_62_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 28)(4, "div", 35)(5, "span", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 37)(8, "span", 38);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, SupervisionComponent_Conditional_62_For_18_Conditional_10_Template, 2, 1, "span", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td", 29)(12, "span", 40);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 41);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 31)(17, "span", 42);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 32);
    \u0275\u0275declareLet(20);
    \u0275\u0275conditionalCreate(21, SupervisionComponent_Conditional_62_For_18_Conditional_21_Template, 4, 2, "div", 43)(22, SupervisionComponent_Conditional_62_For_18_Conditional_22_Template, 2, 1, "span", 44)(23, SupervisionComponent_Conditional_62_For_18_Conditional_23_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const log_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmtDate(log_r2.performedAt));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((log_r2.performedByFullname || log_r2.performedBy).charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(log_r2.performedByFullname || log_r2.performedBy);
    \u0275\u0275advance();
    \u0275\u0275conditional(log_r2.performedByFullname ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.entityLabel(log_r2.entityType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r2.entityRef || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.actionClass(log_r2.action));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", log_r2.actionLabel || ctx_r0.actionLabel(log_r2.action), " ");
    \u0275\u0275advance(2);
    const det_r5 = \u0275\u0275storeLet(ctx_r0.parseDetails(log_r2.details));
    \u0275\u0275advance();
    \u0275\u0275conditional(det_r5 ? 21 : log_r2.details ? 22 : 23);
  }
}
function SupervisionComponent_Conditional_62_Conditional_19_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function SupervisionComponent_Conditional_62_Conditional_19_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function SupervisionComponent_Conditional_62_Conditional_19_For_5_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const p_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.goPage(p_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r8 === ctx_r0.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r8 + 1, " ");
  }
}
function SupervisionComponent_Conditional_62_Conditional_19_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SupervisionComponent_Conditional_62_Conditional_19_For_5_Conditional_0_Template, 2, 0, "span", 51)(1, SupervisionComponent_Conditional_62_Conditional_19_For_5_Conditional_1_Template, 2, 3, "button", 52);
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    \u0275\u0275conditional(p_r8 === -1 ? 0 : 1);
  }
}
function SupervisionComponent_Conditional_62_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "button", 49);
    \u0275\u0275listener("click", function SupervisionComponent_Conditional_62_Conditional_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goPage(ctx_r0.currentPage - 1));
    });
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, SupervisionComponent_Conditional_62_Conditional_19_For_5_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(6, "button", 49);
    \u0275\u0275listener("click", function SupervisionComponent_Conditional_62_Conditional_19_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goPage(ctx_r0.currentPage + 1));
    });
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 50);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage === 0);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.pages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage >= ctx_r0.totalPages - 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate4(" Page ", ctx_r0.currentPage + 1, " / ", ctx_r0.totalPages, " \xA0\xB7\xA0 ", ctx_r0.totalElements, " entr\xE9e", ctx_r0.totalElements > 1 ? "s" : "", " ");
  }
}
function SupervisionComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "table", 26)(2, "thead")(3, "tr")(4, "th", 27);
    \u0275\u0275text(5, "Date & heure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 28);
    \u0275\u0275text(7, "Op\xE9rateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 29);
    \u0275\u0275text(9, "Module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 30);
    \u0275\u0275text(11, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 31);
    \u0275\u0275text(13, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 32);
    \u0275\u0275text(15, "D\xE9tails");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, SupervisionComponent_Conditional_62_For_18_Template, 24, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(19, SupervisionComponent_Conditional_62_Conditional_19_Template, 11, 6, "div", 33);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r0.logs);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.totalPages > 1 ? 19 : -1);
  }
}
var SupervisionComponent = class _SupervisionComponent {
  constructor(auditService, authService) {
    this.auditService = auditService;
    this.authService = authService;
    this.logs = [];
    this.loading = false;
    this.totalElements = 0;
    this.totalPages = 0;
    this.currentPage = 0;
    this.pageSize = 25;
    this.filterOperator = "";
    this.filterEntityType = "";
    this.filterFrom = "";
    this.filterTo = "";
    this.companyId = 0;
    this.entityTypeLabels = {
      SALE_INVOICE: "Facture vente",
      PURCHASE_INVOICE: "Facture achat",
      STOCK_PICKING: "Mouvement stock",
      ACCOUNT_MOVE: "\xC9criture comptable",
      CAISSE: "Caisse"
    };
    this.actionLabels = {
      CREATED: "Cr\xE9\xE9",
      CONFIRMED: "Valid\xE9",
      CANCELLED: "Annul\xE9",
      PAYMENT_ADDED: "R\xE8glement ajout\xE9",
      PAYMENT_REVERSED: "R\xE8glement annul\xE9",
      POSTED: "Comptabilis\xE9",
      REVERSED: "Extourn\xE9",
      VALIDATED: "Valid\xE9 (stock)",
      AVOIR_CREATED: "Avoir cr\xE9\xE9",
      CREDIT_APPLIED: "Avoir compens\xE9",
      RECONCILED: "Lettrage",
      UNRECONCILED: "D\xE9lettrage",
      ENTREE: "Entr\xE9e caisse",
      SORTIE: "Sortie caisse",
      CLOTURE: "Cl\xF4ture caisse"
    };
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    const today = /* @__PURE__ */ new Date();
    const past = new Date(today);
    past.setDate(past.getDate() - 30);
    this.filterTo = today.toISOString().split("T")[0];
    this.filterFrom = past.toISOString().split("T")[0];
    this.search();
  }
  search(resetPage = true) {
    if (resetPage)
      this.currentPage = 0;
    this.loading = true;
    this.auditService.search(this.companyId, {
      operator: this.filterOperator || void 0,
      entityType: this.filterEntityType || void 0,
      from: this.filterFrom || void 0,
      to: this.filterTo || void 0,
      page: this.currentPage,
      size: this.pageSize
    }).subscribe({
      next: (page) => {
        this.logs = page.content;
        this.totalElements = page.totalElements;
        this.totalPages = page.totalPages;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  goPage(p) {
    if (p < 0 || p >= this.totalPages)
      return;
    this.currentPage = p;
    this.search(false);
  }
  reset() {
    this.filterOperator = "";
    this.filterEntityType = "";
    const today = /* @__PURE__ */ new Date();
    const past = new Date(today);
    past.setDate(past.getDate() - 30);
    this.filterTo = today.toISOString().split("T")[0];
    this.filterFrom = past.toISOString().split("T")[0];
    this.search();
  }
  entityLabel(type) {
    return this.entityTypeLabels[type] ?? type;
  }
  actionLabel(action) {
    return this.actionLabels[action] ?? action;
  }
  actionClass(action) {
    switch (action) {
      case "CREATED":
        return "ac-create";
      case "CONFIRMED":
      case "POSTED":
      case "VALIDATED":
        return "ac-confirm";
      case "CANCELLED":
      case "PAYMENT_REVERSED":
      case "UNRECONCILED":
        return "ac-cancel";
      case "PAYMENT_ADDED":
        return "ac-paid";
      case "REVERSED":
      case "AVOIR_CREATED":
        return "ac-reverse";
      case "CREDIT_APPLIED":
      case "RECONCILED":
        return "ac-reconcile";
      case "ENTREE":
        return "ac-entree";
      case "SORTIE":
        return "ac-sortie";
      case "CLOTURE":
        return "ac-lock";
      default:
        return "ac-default";
    }
  }
  parseDetails(raw) {
    if (!raw)
      return null;
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }
  fmtDate(d) {
    const dt = new Date(d);
    return dt.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" }) + " " + dt.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  }
  get pages() {
    const total = this.totalPages;
    const cur = this.currentPage;
    if (total <= 7)
      return Array.from({ length: total }, (_, i) => i);
    const pages = [0];
    if (cur > 2)
      pages.push(-1);
    for (let i = Math.max(1, cur - 1); i <= Math.min(total - 2, cur + 1); i++)
      pages.push(i);
    if (cur < total - 3)
      pages.push(-1);
    pages.push(total - 1);
    return pages;
  }
  static {
    this.\u0275fac = function SupervisionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SupervisionComponent)(\u0275\u0275directiveInject(AuditService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupervisionComponent, selectors: [["app-supervision"]], decls: 63, vars: 9, consts: [[1, "supv-page"], [1, "supv-header"], [1, "header-left"], [1, "material-icons", "header-icon"], [1, "header-right"], [1, "total-badge"], ["title", "Rafra\xEEchir", 1, "btn-refresh", 3, "click", "disabled"], [1, "material-icons"], [1, "filters-bar"], [1, "filter-group"], ["type", "text", "placeholder", "Login ou nom\u2026", 3, "ngModelChange", "keyup.enter", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "SALE_INVOICE"], ["value", "PURCHASE_INVOICE"], ["value", "STOCK_PICKING"], ["value", "ACCOUNT_MOVE"], ["value", "CAISSE"], ["type", "date", 3, "ngModelChange", "ngModel"], [1, "filter-actions"], [1, "btn-search", 3, "click"], ["title", "R\xE9initialiser les filtres", 1, "btn-reset", 3, "click"], [1, "loading-row"], [1, "empty-state"], [1, "material-icons", "spin"], [1, "table-wrap"], [1, "supv-table"], [1, "col-date"], [1, "col-op"], [1, "col-module"], [1, "col-ref"], [1, "col-action"], [1, "col-details"], [1, "pagination"], [1, "col-date", "mono"], [1, "operator-cell"], [1, "op-avatar"], [1, "op-info"], [1, "op-name"], [1, "op-login"], [1, "module-chip"], [1, "col-ref", "mono"], [1, "action-badge"], [1, "details-chips"], [1, "detail-raw"], [1, "no-details"], [1, "detail-chip"], [1, "chip-key"], [1, "chip-val"], [1, "page-btn", 3, "click", "disabled"], [1, "page-info"], [1, "page-ellipsis"], [1, "page-btn", 3, "active"], [1, "page-btn", 3, "click"]], template: function SupervisionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "manage_search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1");
        \u0275\u0275text(7, "Supervision des op\xE9rations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Journal d'activit\xE9 complet \u2014 qui a fait quoi, quand");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 4);
        \u0275\u0275conditionalCreate(11, SupervisionComponent_Conditional_11_Template, 2, 2, "span", 5);
        \u0275\u0275elementStart(12, "button", 6);
        \u0275\u0275listener("click", function SupervisionComponent_Template_button_click_12_listener() {
          return ctx.search();
        });
        \u0275\u0275elementStart(13, "span", 7);
        \u0275\u0275text(14, "refresh");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "label")(18, "span", 7);
        \u0275\u0275text(19, "person_search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " Op\xE9rateur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function SupervisionComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterOperator, $event) || (ctx.filterOperator = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function SupervisionComponent_Template_input_keyup_enter_21_listener() {
          return ctx.search();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 9)(23, "label")(24, "span", 7);
        \u0275\u0275text(25, "category");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, " Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "select", 11);
        \u0275\u0275twoWayListener("ngModelChange", function SupervisionComponent_Template_select_ngModelChange_27_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterEntityType, $event) || (ctx.filterEntityType = $event);
          return $event;
        });
        \u0275\u0275elementStart(28, "option", 12);
        \u0275\u0275text(29, "Tous les modules");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "option", 13);
        \u0275\u0275text(31, "Factures vente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "option", 14);
        \u0275\u0275text(33, "Factures achat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "option", 15);
        \u0275\u0275text(35, "Mouvements stock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "option", 16);
        \u0275\u0275text(37, "\xC9critures comptables");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "option", 17);
        \u0275\u0275text(39, "Caisse");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "div", 9)(41, "label")(42, "span", 7);
        \u0275\u0275text(43, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275text(44, " Du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function SupervisionComponent_Template_input_ngModelChange_45_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterFrom, $event) || (ctx.filterFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 9)(47, "label")(48, "span", 7);
        \u0275\u0275text(49, "event");
        \u0275\u0275elementEnd();
        \u0275\u0275text(50, " Au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function SupervisionComponent_Template_input_ngModelChange_51_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterTo, $event) || (ctx.filterTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 19)(53, "button", 20);
        \u0275\u0275listener("click", function SupervisionComponent_Template_button_click_53_listener() {
          return ctx.search();
        });
        \u0275\u0275elementStart(54, "span", 7);
        \u0275\u0275text(55, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, " Rechercher ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "button", 21);
        \u0275\u0275listener("click", function SupervisionComponent_Template_button_click_57_listener() {
          return ctx.reset();
        });
        \u0275\u0275elementStart(58, "span", 7);
        \u0275\u0275text(59, "filter_alt_off");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(60, SupervisionComponent_Conditional_60_Template, 4, 0, "div", 22)(61, SupervisionComponent_Conditional_61_Template, 5, 0, "div", 23)(62, SupervisionComponent_Conditional_62_Template, 20, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.totalElements > 0 ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275classProp("spin", ctx.loading);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterOperator);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterEntityType);
        \u0275\u0275advance(18);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterFrom);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterTo);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.loading ? 60 : ctx.logs.length === 0 ? 61 : 62);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, KeyValuePipe], styles: ['@charset "UTF-8";\n\n\n.supv-page[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  padding: 0 4px;\n}\n.supv-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 22px;\n}\n.supv-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.supv-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.supv-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.supv-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--module-config, #7C3AED);\n  flex-shrink: 0;\n}\n.supv-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.supv-header[_ngcontent-%COMP%]   .total-badge[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: var(--module-config, #7C3AED);\n  border-radius: 20px;\n  padding: 3px 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.supv-header[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 6px 10px;\n  display: flex;\n  align-items: center;\n  transition: var(--ease);\n}\n.supv-header[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.supv-header[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.supv-header[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n  flex-wrap: wrap;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 16px;\n  margin-bottom: 18px;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  min-width: 160px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 34px;\n  padding: 0 10px;\n  font-size: 13px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: var(--bg-page);\n  color: var(--text-primary);\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--module-config, #7C3AED);\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n}\n.filter-actions[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  height: 34px;\n  padding: 0 16px;\n  font-size: 13px;\n  font-weight: 600;\n  background: var(--module-config, #7C3AED);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n}\n.filter-actions[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.filter-actions[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.filter-actions[_ngcontent-%COMP%]   .btn-reset[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 34px;\n  padding: 0 10px;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: var(--ease);\n}\n.filter-actions[_ngcontent-%COMP%]   .btn-reset[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.filter-actions[_ngcontent-%COMP%]   .btn-reset[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.loading-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: center;\n  padding: 60px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.loading-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 60px;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n.supv-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.supv-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--bg-table-head, rgba(0, 0, 0, 0.04));\n  border-bottom: 1px solid var(--border);\n}\n.supv-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  white-space: nowrap;\n}\n.supv-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light, rgba(0, 0, 0, 0.06));\n  vertical-align: middle;\n}\n.supv-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.1s;\n}\n.supv-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.supv-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.col-date[_ngcontent-%COMP%] {\n  width: 145px;\n}\n.col-op[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.col-module[_ngcontent-%COMP%] {\n  width: 155px;\n}\n.col-ref[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.col-action[_ngcontent-%COMP%] {\n  width: 145px;\n}\n.col-details[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family:\n    "JetBrains Mono",\n    "Fira Code",\n    monospace;\n  font-size: 12px;\n}\n.operator-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.operator-cell[_ngcontent-%COMP%]   .op-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: rgba(124, 58, 237, 0.18);\n  color: var(--module-config, #7C3AED);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n}\n.operator-cell[_ngcontent-%COMP%]   .op-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.operator-cell[_ngcontent-%COMP%]   .op-info[_ngcontent-%COMP%]   .op-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 12.5px;\n}\n.operator-cell[_ngcontent-%COMP%]   .op-info[_ngcontent-%COMP%]   .op-login[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.module-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 11.5px;\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n  font-weight: 500;\n  border: 1px solid var(--border);\n}\n.action-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11.5px;\n  font-weight: 600;\n  border: 1px solid transparent;\n}\n.action-badge.ac-create[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #059669;\n  border-color: rgba(16, 185, 129, 0.25);\n}\n.action-badge.ac-confirm[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: #2563EB;\n  border-color: rgba(59, 130, 246, 0.25);\n}\n.action-badge.ac-cancel[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #DC2626;\n  border-color: rgba(239, 68, 68, 0.25);\n}\n.action-badge.ac-paid[_ngcontent-%COMP%] {\n  background: rgba(5, 150, 105, 0.12);\n  color: #047857;\n  border-color: rgba(5, 150, 105, 0.25);\n}\n.action-badge.ac-reverse[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #D97706;\n  border-color: rgba(245, 158, 11, 0.25);\n}\n.action-badge.ac-reconcile[_ngcontent-%COMP%] {\n  background: rgba(79, 70, 229, 0.12);\n  color: #4F46E5;\n  border-color: rgba(79, 70, 229, 0.25);\n}\n.action-badge.ac-lock[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.25);\n}\n.action-badge.ac-entree[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #059669;\n  border-color: rgba(16, 185, 129, 0.25);\n}\n.action-badge.ac-sortie[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #DC2626;\n  border-color: rgba(239, 68, 68, 0.25);\n}\n.action-badge.ac-default[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n  border-color: var(--border);\n}\n.details-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.detail-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  padding: 1px 7px;\n  font-size: 11.5px;\n}\n.detail-chip[_ngcontent-%COMP%]   .chip-key[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.detail-chip[_ngcontent-%COMP%]   .chip-val[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.detail-raw[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.no-details[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  opacity: 0.45;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 14px 0 4px;\n  flex-wrap: wrap;\n}\n.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  cursor: pointer;\n  font-size: 13px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n}\n.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.pagination[_ngcontent-%COMP%]   .page-btn.active[_ngcontent-%COMP%] {\n  background: var(--module-config, #7C3AED);\n  color: white;\n  border-color: var(--module-config, #7C3AED);\n  font-weight: 700;\n}\n.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%]   .page-ellipsis[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  padding: 0 4px;\n  font-size: 15px;\n}\n.pagination[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  display: inline-block;\n}\n@media (max-width: 900px) {\n  .supv-table[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .col-details[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .col-module[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 640px) {\n  .filters-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-group[_ngcontent-%COMP%] {\n    min-width: unset;\n  }\n  .filter-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n/*# sourceMappingURL=supervision.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupervisionComponent, [{
    type: Component,
    args: [{ selector: "app-supervision", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="supv-page">

  <!-- \u2550\u2550 EN-T\xCATE \u2550\u2550 -->
  <div class="supv-header">
    <div class="header-left">
      <span class="material-icons header-icon">manage_search</span>
      <div>
        <h1>Supervision des op\xE9rations</h1>
        <p>Journal d'activit\xE9 complet \u2014 qui a fait quoi, quand</p>
      </div>
    </div>
    <div class="header-right">
      @if (totalElements > 0) {
        <span class="total-badge">{{ totalElements }} entr\xE9e{{ totalElements > 1 ? 's' : '' }}</span>
      }
      <button class="btn-refresh" (click)="search()" [disabled]="loading" title="Rafra\xEEchir">
        <span class="material-icons" [class.spin]="loading">refresh</span>
      </button>
    </div>
  </div>

  <!-- \u2550\u2550 BARRE DE FILTRES \u2550\u2550 -->
  <div class="filters-bar">
    <div class="filter-group">
      <label><span class="material-icons">person_search</span> Op\xE9rateur</label>
      <input type="text" [(ngModel)]="filterOperator" placeholder="Login ou nom\u2026"
             (keyup.enter)="search()" />
    </div>

    <div class="filter-group">
      <label><span class="material-icons">category</span> Module</label>
      <select [(ngModel)]="filterEntityType">
        <option value="">Tous les modules</option>
        <option value="SALE_INVOICE">Factures vente</option>
        <option value="PURCHASE_INVOICE">Factures achat</option>
        <option value="STOCK_PICKING">Mouvements stock</option>
        <option value="ACCOUNT_MOVE">\xC9critures comptables</option>
        <option value="CAISSE">Caisse</option>
      </select>
    </div>

    <div class="filter-group">
      <label><span class="material-icons">calendar_today</span> Du</label>
      <input type="date" [(ngModel)]="filterFrom" />
    </div>

    <div class="filter-group">
      <label><span class="material-icons">event</span> Au</label>
      <input type="date" [(ngModel)]="filterTo" />
    </div>

    <div class="filter-actions">
      <button class="btn-search" (click)="search()">
        <span class="material-icons">search</span> Rechercher
      </button>
      <button class="btn-reset" (click)="reset()" title="R\xE9initialiser les filtres">
        <span class="material-icons">filter_alt_off</span>
      </button>
    </div>
  </div>

  <!-- \u2550\u2550 TABLEAU \u2550\u2550 -->
  @if (loading) {
    <div class="loading-row">
      <span class="material-icons spin">sync</span>
      Chargement des logs\u2026
    </div>
  } @else if (logs.length === 0) {
    <div class="empty-state">
      <span class="material-icons">search_off</span>
      <p>Aucune op\xE9ration trouv\xE9e pour ces crit\xE8res.</p>
    </div>
  } @else {
    <div class="table-wrap">
      <table class="supv-table">
        <thead>
          <tr>
            <th class="col-date">Date &amp; heure</th>
            <th class="col-op">Op\xE9rateur</th>
            <th class="col-module">Module</th>
            <th class="col-ref">R\xE9f\xE9rence</th>
            <th class="col-action">Action</th>
            <th class="col-details">D\xE9tails</th>
          </tr>
        </thead>
        <tbody>
          @for (log of logs; track log.id) {
            <tr>
              <td class="col-date mono">{{ fmtDate(log.performedAt) }}</td>
              <td class="col-op">
                <div class="operator-cell">
                  <span class="op-avatar">{{ (log.performedByFullname || log.performedBy).charAt(0).toUpperCase() }}</span>
                  <div class="op-info">
                    <span class="op-name">{{ log.performedByFullname || log.performedBy }}</span>
                    @if (log.performedByFullname) {
                      <span class="op-login">{{ log.performedBy }}</span>
                    }
                  </div>
                </div>
              </td>
              <td class="col-module">
                <span class="module-chip">{{ entityLabel(log.entityType) }}</span>
              </td>
              <td class="col-ref mono">{{ log.entityRef || '\u2014' }}</td>
              <td class="col-action">
                <span class="action-badge" [class]="actionClass(log.action)">
                  {{ log.actionLabel || actionLabel(log.action) }}
                </span>
              </td>
              <td class="col-details">
                @let det = parseDetails(log.details);
                @if (det) {
                  <div class="details-chips">
                    @for (item of $any(det) | keyvalue; track item.key) {
                      <span class="detail-chip">
                        <span class="chip-key">{{ item.key }}</span>
                        <span class="chip-val">{{ item.value }}</span>
                      </span>
                    }
                  </div>
                } @else if (log.details) {
                  <span class="detail-raw">{{ log.details }}</span>
                } @else {
                  <span class="no-details">\u2014</span>
                }
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    <!-- \u2550\u2550 PAGINATION \u2550\u2550 -->
    @if (totalPages > 1) {
      <div class="pagination">
        <button class="page-btn" [disabled]="currentPage === 0" (click)="goPage(currentPage - 1)">
          <span class="material-icons">chevron_left</span>
        </button>

        @for (p of pages; track $index) {
          @if (p === -1) {
            <span class="page-ellipsis">\u2026</span>
          } @else {
            <button class="page-btn" [class.active]="p === currentPage" (click)="goPage(p)">
              {{ p + 1 }}
            </button>
          }
        }

        <button class="page-btn" [disabled]="currentPage >= totalPages - 1" (click)="goPage(currentPage + 1)">
          <span class="material-icons">chevron_right</span>
        </button>

        <span class="page-info">
          Page {{ currentPage + 1 }} / {{ totalPages }}
          &nbsp;\xB7&nbsp; {{ totalElements }} entr\xE9e{{ totalElements > 1 ? 's' : '' }}
        </span>
      </div>
    }
  }
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/config/components/supervision/supervision.component.scss */\n.supv-page {\n  max-width: 1400px;\n  padding: 0 4px;\n}\n.supv-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 22px;\n}\n.supv-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.supv-header .header-left h1 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.supv-header .header-left p {\n  margin: 2px 0 0;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.supv-header .header-icon {\n  font-size: 32px;\n  color: var(--module-config, #7C3AED);\n  flex-shrink: 0;\n}\n.supv-header .header-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.supv-header .total-badge {\n  background: rgba(124, 58, 237, 0.12);\n  color: var(--module-config, #7C3AED);\n  border-radius: 20px;\n  padding: 3px 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.supv-header .btn-refresh {\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 6px 10px;\n  display: flex;\n  align-items: center;\n  transition: var(--ease);\n}\n.supv-header .btn-refresh .material-icons {\n  font-size: 18px;\n}\n.supv-header .btn-refresh:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.supv-header .btn-refresh:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.filters-bar {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n  flex-wrap: wrap;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 16px;\n  margin-bottom: 18px;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  min-width: 160px;\n}\n.filter-group label {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.filter-group label .material-icons {\n  font-size: 13px;\n}\n.filter-group input,\n.filter-group select {\n  height: 34px;\n  padding: 0 10px;\n  font-size: 13px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: var(--bg-page);\n  color: var(--text-primary);\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.filter-group input:focus,\n.filter-group select:focus {\n  outline: none;\n  border-color: var(--module-config, #7C3AED);\n}\n.filter-actions {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n}\n.filter-actions .btn-search {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  height: 34px;\n  padding: 0 16px;\n  font-size: 13px;\n  font-weight: 600;\n  background: var(--module-config, #7C3AED);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n}\n.filter-actions .btn-search .material-icons {\n  font-size: 16px;\n}\n.filter-actions .btn-search:hover {\n  opacity: 0.88;\n}\n.filter-actions .btn-reset {\n  display: flex;\n  align-items: center;\n  height: 34px;\n  padding: 0 10px;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: var(--ease);\n}\n.filter-actions .btn-reset .material-icons {\n  font-size: 17px;\n}\n.filter-actions .btn-reset:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.loading-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: center;\n  padding: 60px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.loading-row .material-icons {\n  font-size: 22px;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 60px;\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  opacity: 0.3;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n.table-wrap {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n.supv-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.supv-table thead tr {\n  background: var(--bg-table-head, rgba(0, 0, 0, 0.04));\n  border-bottom: 1px solid var(--border);\n}\n.supv-table th {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  white-space: nowrap;\n}\n.supv-table td {\n  padding: 10px 14px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light, rgba(0, 0, 0, 0.06));\n  vertical-align: middle;\n}\n.supv-table tbody tr {\n  transition: background 0.1s;\n}\n.supv-table tbody tr:hover {\n  background: var(--bg-hover);\n}\n.supv-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.col-date {\n  width: 145px;\n}\n.col-op {\n  width: 200px;\n}\n.col-module {\n  width: 155px;\n}\n.col-ref {\n  width: 130px;\n}\n.col-action {\n  width: 145px;\n}\n.col-details {\n  min-width: 200px;\n}\n.mono {\n  font-family:\n    "JetBrains Mono",\n    "Fira Code",\n    monospace;\n  font-size: 12px;\n}\n.operator-cell {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.operator-cell .op-avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  background: rgba(124, 58, 237, 0.18);\n  color: var(--module-config, #7C3AED);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n}\n.operator-cell .op-info {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.operator-cell .op-info .op-name {\n  font-weight: 600;\n  font-size: 12.5px;\n}\n.operator-cell .op-info .op-login {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.module-chip {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 11.5px;\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n  font-weight: 500;\n  border: 1px solid var(--border);\n}\n.action-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11.5px;\n  font-weight: 600;\n  border: 1px solid transparent;\n}\n.action-badge.ac-create {\n  background: rgba(16, 185, 129, 0.12);\n  color: #059669;\n  border-color: rgba(16, 185, 129, 0.25);\n}\n.action-badge.ac-confirm {\n  background: rgba(59, 130, 246, 0.12);\n  color: #2563EB;\n  border-color: rgba(59, 130, 246, 0.25);\n}\n.action-badge.ac-cancel {\n  background: rgba(239, 68, 68, 0.12);\n  color: #DC2626;\n  border-color: rgba(239, 68, 68, 0.25);\n}\n.action-badge.ac-paid {\n  background: rgba(5, 150, 105, 0.12);\n  color: #047857;\n  border-color: rgba(5, 150, 105, 0.25);\n}\n.action-badge.ac-reverse {\n  background: rgba(245, 158, 11, 0.12);\n  color: #D97706;\n  border-color: rgba(245, 158, 11, 0.25);\n}\n.action-badge.ac-reconcile {\n  background: rgba(79, 70, 229, 0.12);\n  color: #4F46E5;\n  border-color: rgba(79, 70, 229, 0.25);\n}\n.action-badge.ac-lock {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.25);\n}\n.action-badge.ac-entree {\n  background: rgba(16, 185, 129, 0.12);\n  color: #059669;\n  border-color: rgba(16, 185, 129, 0.25);\n}\n.action-badge.ac-sortie {\n  background: rgba(239, 68, 68, 0.12);\n  color: #DC2626;\n  border-color: rgba(239, 68, 68, 0.25);\n}\n.action-badge.ac-default {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n  border-color: var(--border);\n}\n.details-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.detail-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  padding: 1px 7px;\n  font-size: 11.5px;\n}\n.detail-chip .chip-key {\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.detail-chip .chip-val {\n  color: var(--text-primary);\n}\n.detail-raw {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.no-details {\n  color: var(--text-muted);\n  opacity: 0.45;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 14px 0 4px;\n  flex-wrap: wrap;\n}\n.pagination .page-btn {\n  min-width: 32px;\n  height: 32px;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  cursor: pointer;\n  font-size: 13px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n}\n.pagination .page-btn .material-icons {\n  font-size: 17px;\n}\n.pagination .page-btn:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.pagination .page-btn.active {\n  background: var(--module-config, #7C3AED);\n  color: white;\n  border-color: var(--module-config, #7C3AED);\n  font-weight: 700;\n}\n.pagination .page-btn:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.pagination .page-ellipsis {\n  color: var(--text-muted);\n  padding: 0 4px;\n  font-size: 15px;\n}\n.pagination .page-info {\n  margin-left: 10px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin {\n  animation: spin 0.8s linear infinite;\n  display: inline-block;\n}\n@media (max-width: 900px) {\n  .supv-table {\n    font-size: 12px;\n  }\n  .col-details {\n    display: none;\n  }\n  .col-module {\n    display: none;\n  }\n}\n@media (max-width: 640px) {\n  .filters-bar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-group {\n    min-width: unset;\n  }\n  .filter-actions {\n    flex-direction: row;\n  }\n}\n/*# sourceMappingURL=supervision.component.css.map */\n'] }]
  }], () => [{ type: AuditService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupervisionComponent, { className: "SupervisionComponent", filePath: "app/modules/config/components/supervision/supervision.component.ts", lineNumber: 14 });
})();
export {
  SupervisionComponent
};
//# sourceMappingURL=chunk-LBVYGXUA.js.map
