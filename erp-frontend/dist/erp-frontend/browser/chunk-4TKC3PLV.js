import {
  StockService
} from "./chunk-YEOTRJFB.js";
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
  ɵɵattribute,
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

// src/app/modules/stock/components/receptions/reception-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ReceptionListComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pendingPickings.length);
  }
}
function ReceptionListComponent_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10)(1, "span", 12);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275domElementEnd()();
  }
}
function ReceptionListComponent_Conditional_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10)(1, "span", 4);
    \u0275\u0275text(2, "inbox");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Aucune r\xE9ception en attente");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 13);
    \u0275\u0275text(6, "Les r\xE9ceptions apparaissent ici apr\xE8s validation d'une facture fournisseur");
    \u0275\u0275domElementEnd()();
  }
}
function ReceptionListComponent_Conditional_21_Conditional_3_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 15);
    \u0275\u0275domListener("click", function ReceptionListComponent_Conditional_21_Conditional_3_For_16_Template_tr_click_0_listener() {
      const p_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openBordereau(p_r3.id));
    });
    \u0275\u0275domElementStart(1, "td", 16);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 17);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td", 17);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "td", 17);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "td")(13, "button", 18)(14, "span", 4);
    \u0275\u0275text(15, "assignment");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(16, " Saisir bordereau ");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.partnerName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.origin || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 5, p_r3.scheduledDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r3.locationDestName || "\u2014");
  }
}
function ReceptionListComponent_Conditional_21_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 11)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f\xE9rence");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th");
    \u0275\u0275text(6, "Fournisseur");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th");
    \u0275\u0275text(8, "Origine (Facture)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th");
    \u0275\u0275text(10, "Date planifi\xE9e");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th");
    \u0275\u0275text(12, "Destination");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(13, "th");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, ReceptionListComponent_Conditional_21_Conditional_3_For_16_Template, 17, 8, "tr", 14, _forTrack0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r0.pendingPickings);
  }
}
function ReceptionListComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9);
    \u0275\u0275conditionalCreate(1, ReceptionListComponent_Conditional_21_Conditional_1_Template, 5, 0, "div", 10)(2, ReceptionListComponent_Conditional_21_Conditional_2_Template, 7, 0, "div", 10)(3, ReceptionListComponent_Conditional_21_Conditional_3_Template, 17, 0, "table", 11);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loadingPending ? 1 : ctx_r0.pendingPickings.length === 0 ? 2 : 3);
  }
}
function ReceptionListComponent_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10)(1, "span", 12);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275domElementEnd()();
  }
}
function ReceptionListComponent_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10)(1, "span", 4);
    \u0275\u0275text(2, "move_to_inbox");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Aucune r\xE9ception");
    \u0275\u0275domElementEnd()();
  }
}
function ReceptionListComponent_Conditional_22_Conditional_3_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "tr", 15);
    \u0275\u0275domListener("click", function ReceptionListComponent_Conditional_22_Conditional_3_For_20_Template_tr_click_0_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.router.navigate(["/stock/receptions", p_r5.id]));
    });
    \u0275\u0275domElementStart(1, "td", 16);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 17);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td", 17);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "td", 17);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "td")(14, "span", 20);
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "td", 21);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "td")(20, "span", 22);
    \u0275\u0275text(21, "chevron_right");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.partnerName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.origin || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 8, p_r5.scheduledDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.dateDone ? \u0275\u0275pipeBind2(12, 11, p_r5.dateDone, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-state", p_r5.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.stateLabel(p_r5.state || ""));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 14, p_r5.totalValue, "1.0-0"));
  }
}
function ReceptionListComponent_Conditional_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 11)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f\xE9rence");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th");
    \u0275\u0275text(6, "Fournisseur");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th");
    \u0275\u0275text(8, "Origine");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th");
    \u0275\u0275text(10, "Date planifi\xE9e");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th");
    \u0275\u0275text(12, "Date faite");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "th");
    \u0275\u0275text(14, "Statut");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "th", 19);
    \u0275\u0275text(16, "Valeur");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(17, "th");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, ReceptionListComponent_Conditional_22_Conditional_3_For_20_Template, 22, 17, "tr", 14, _forTrack0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r0.pickings);
  }
}
function ReceptionListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9);
    \u0275\u0275conditionalCreate(1, ReceptionListComponent_Conditional_22_Conditional_1_Template, 5, 0, "div", 10)(2, ReceptionListComponent_Conditional_22_Conditional_2_Template, 5, 0, "div", 10)(3, ReceptionListComponent_Conditional_22_Conditional_3_Template, 21, 0, "table", 11);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loading ? 1 : ctx_r0.pickings.length === 0 ? 2 : 3);
  }
}
var ReceptionListComponent = class _ReceptionListComponent {
  constructor(stockService, authService, router) {
    this.stockService = stockService;
    this.authService = authService;
    this.router = router;
    this.pickings = [];
    this.pendingPickings = [];
    this.loading = false;
    this.loadingPending = false;
    this.activeTab = "pending";
  }
  ngOnInit() {
    const companyId = this.authService.getCompanyId();
    this.loading = true;
    this.loadingPending = true;
    this.stockService.getReceptions(companyId).subscribe({
      next: (p) => {
        this.pickings = p;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
    this.stockService.getPendingReceptions(companyId).subscribe({
      next: (p) => {
        this.pendingPickings = p;
        this.loadingPending = false;
      },
      error: () => {
        this.loadingPending = false;
      }
    });
  }
  openBordereau(pickingId) {
    this.router.navigate(["/stock/receptions/bordereau", pickingId]);
  }
  stateLabel(s) {
    return { draft: "Brouillon", confirmed: "En attente", done: "Valid\xE9", cancelled: "Annul\xE9" }[s] || s;
  }
  static {
    this.\u0275fac = function ReceptionListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReceptionListComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReceptionListComponent, selectors: [["app-reception-list"]], decls: 23, vars: 8, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "btn-primary", 3, "click"], [1, "tabs"], [1, "tab-btn", 3, "click"], [1, "tab-badge"], [1, "card"], [1, "empty"], [1, "data-table"], [1, "material-icons", "spin"], [1, "empty-hint"], [1, "clickable"], [1, "clickable", 3, "click"], [1, "font-mono", "font-bold", "text-blue"], [1, "text-muted"], [1, "btn-bordereau"], [1, "text-right"], [1, "state-badge"], [1, "text-right", "font-mono"], [1, "material-icons", "chevron"]], template: function ReceptionListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3)(4, "span", 4);
        \u0275\u0275text(5, "move_to_inbox");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(6, " R\xE9ceptions");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(7, "button", 5);
        \u0275\u0275domListener("click", function ReceptionListComponent_Template_button_click_7_listener() {
          return ctx.router.navigate(["/stock/receptions/new"]);
        });
        \u0275\u0275domElementStart(8, "span", 4);
        \u0275\u0275text(9, "add");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(10, " Nouvelle r\xE9ception ");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(11, "div", 6)(12, "button", 7);
        \u0275\u0275domListener("click", function ReceptionListComponent_Template_button_click_12_listener() {
          return ctx.activeTab = "pending";
        });
        \u0275\u0275domElementStart(13, "span", 4);
        \u0275\u0275text(14, "pending_actions");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(15, " \xC0 r\xE9ceptionner ");
        \u0275\u0275conditionalCreate(16, ReceptionListComponent_Conditional_16_Template, 2, 1, "span", 8);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(17, "button", 7);
        \u0275\u0275domListener("click", function ReceptionListComponent_Template_button_click_17_listener() {
          return ctx.activeTab = "all";
        });
        \u0275\u0275domElementStart(18, "span", 4);
        \u0275\u0275text(19, "history");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(20);
        \u0275\u0275domElementEnd()();
        \u0275\u0275conditionalCreate(21, ReceptionListComponent_Conditional_21_Template, 4, 1, "div", 9);
        \u0275\u0275conditionalCreate(22, ReceptionListComponent_Conditional_22_Template, 4, 1, "div", 9);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275classProp("active", ctx.activeTab === "pending");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.pendingPickings.length > 0 ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeTab === "all");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" Historique (", ctx.pickings.length, ") ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "pending" ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "all" ? 22 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #fd7e14;\n}\n.page-header[_ngcontent-%COMP%]   .badge-count[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  color: #6c757d;\n  font-size: 12px;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #2c7be5;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1a68d1;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px;\n  color: #6c757d;\n  gap: 10px;\n}\n.empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.data-table[_ngcontent-%COMP%]   tr.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.data-table[_ngcontent-%COMP%]   tr.clickable[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8faff;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.text-blue[_ngcontent-%COMP%] {\n  color: #2c7be5;\n}\n.chevron[_ngcontent-%COMP%] {\n  color: #dee2e6;\n  font-size: 18px !important;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 0;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  color: #6c757d;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.tab-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #fd7e14;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: #fd7e14;\n  border-bottom-color: #fd7e14;\n  font-weight: 600;\n}\n.tab-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #fd7e14;\n  color: white;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 1px 7px;\n}\n.empty-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #adb5bd;\n}\n.btn-bordereau[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #fd7e14;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-bordereau[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-bordereau[_ngcontent-%COMP%]:hover {\n  background: #e06912;\n}\n.state-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.state-badge[data-state=draft][_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.state-badge[data-state=confirmed][_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.state-badge[data-state=done][_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.state-badge[data-state=cancelled][_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n}\n/*# sourceMappingURL=reception-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReceptionListComponent, [{
    type: Component,
    args: [{ selector: "app-reception-list", standalone: true, imports: [CommonModule], template: `<div class="page-container">
  <div class="page-header">
    <div class="header-left">
      <h1 class="page-title"><span class="material-icons">move_to_inbox</span> R\xE9ceptions</h1>
    </div>
    <button class="btn-primary" (click)="router.navigate(['/stock/receptions/new'])">
      <span class="material-icons">add</span> Nouvelle r\xE9ception
    </button>
  </div>

  <!-- Tabs -->
  <div class="tabs">
    <button class="tab-btn" [class.active]="activeTab === 'pending'" (click)="activeTab = 'pending'">
      <span class="material-icons">pending_actions</span>
      \xC0 r\xE9ceptionner
      @if (pendingPickings.length > 0) {
        <span class="tab-badge">{{ pendingPickings.length }}</span>
      }
    </button>
    <button class="tab-btn" [class.active]="activeTab === 'all'" (click)="activeTab = 'all'">
      <span class="material-icons">history</span> Historique ({{ pickings.length }})
    </button>
  </div>

  <!-- Pending receptions (bordereau workflow) -->
  @if (activeTab === 'pending') {
    <div class="card">
      @if (loadingPending) {
        <div class="empty"><span class="material-icons spin">refresh</span><p>Chargement...</p></div>
      } @else if (pendingPickings.length === 0) {
        <div class="empty">
          <span class="material-icons">inbox</span>
          <p>Aucune r\xE9ception en attente</p>
          <span class="empty-hint">Les r\xE9ceptions apparaissent ici apr\xE8s validation d'une facture fournisseur</span>
        </div>
      } @else {
        <table class="data-table">
          <thead>
            <tr>
              <th>R\xE9f\xE9rence</th>
              <th>Fournisseur</th>
              <th>Origine (Facture)</th>
              <th>Date planifi\xE9e</th>
              <th>Destination</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            @for (p of pendingPickings; track p.id) {
              <tr class="clickable" (click)="openBordereau(p.id!)">
                <td class="font-mono font-bold text-blue">{{ p.name }}</td>
                <td>{{ p.partnerName || '\u2014' }}</td>
                <td class="text-muted">{{ p.origin || '\u2014' }}</td>
                <td class="text-muted">{{ p.scheduledDate | date:'dd/MM/yyyy' }}</td>
                <td class="text-muted">{{ p.locationDestName || '\u2014' }}</td>
                <td>
                  <button class="btn-bordereau">
                    <span class="material-icons">assignment</span> Saisir bordereau
                  </button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>
  }

  <!-- All receptions history -->
  @if (activeTab === 'all') {
    <div class="card">
      @if (loading) {
        <div class="empty"><span class="material-icons spin">refresh</span><p>Chargement...</p></div>
      } @else if (pickings.length === 0) {
        <div class="empty"><span class="material-icons">move_to_inbox</span><p>Aucune r\xE9ception</p></div>
      } @else {
        <table class="data-table">
          <thead>
            <tr>
              <th>R\xE9f\xE9rence</th>
              <th>Fournisseur</th>
              <th>Origine</th>
              <th>Date planifi\xE9e</th>
              <th>Date faite</th>
              <th>Statut</th>
              <th class="text-right">Valeur</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            @for (p of pickings; track p.id) {
              <tr (click)="router.navigate(['/stock/receptions', p.id])" class="clickable">
                <td class="font-mono font-bold text-blue">{{ p.name }}</td>
                <td>{{ p.partnerName || '\u2014' }}</td>
                <td class="text-muted">{{ p.origin || '\u2014' }}</td>
                <td class="text-muted">{{ p.scheduledDate | date:'dd/MM/yyyy' }}</td>
                <td class="text-muted">{{ p.dateDone ? (p.dateDone | date:'dd/MM/yyyy') : '\u2014' }}</td>
                <td><span class="state-badge" [attr.data-state]="p.state">{{ stateLabel(p.state || '') }}</span></td>
                <td class="text-right font-mono">{{ p.totalValue | number:'1.0-0' }}</td>
                <td><span class="material-icons chevron">chevron_right</span></td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>
  }
</div>
`, styles: ['/* src/app/modules/stock/components/receptions/reception-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: #fd7e14;\n}\n.page-header .badge-count {\n  background: #e9ecef;\n  color: #6c757d;\n  font-size: 12px;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #2c7be5;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover {\n  background: #1a68d1;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px;\n  color: #6c757d;\n  gap: 10px;\n}\n.empty .material-icons {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.empty p {\n  margin: 0;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.data-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.data-table tr.clickable {\n  cursor: pointer;\n}\n.data-table tr.clickable:hover td {\n  background: #f8faff;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: #adb5bd;\n}\n.text-blue {\n  color: #2c7be5;\n}\n.chevron {\n  color: #dee2e6;\n  font-size: 18px !important;\n}\n.tabs {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 0;\n}\n.tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  color: #6c757d;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.tab-btn .material-icons {\n  font-size: 18px;\n}\n.tab-btn:hover {\n  color: #fd7e14;\n}\n.tab-btn.active {\n  color: #fd7e14;\n  border-bottom-color: #fd7e14;\n  font-weight: 600;\n}\n.tab-badge {\n  display: inline-block;\n  background: #fd7e14;\n  color: white;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 1px 7px;\n}\n.empty-hint {\n  font-size: 12px;\n  color: #adb5bd;\n}\n.btn-bordereau {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #fd7e14;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-bordereau .material-icons {\n  font-size: 16px;\n}\n.btn-bordereau:hover {\n  background: #e06912;\n}\n.state-badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.state-badge[data-state=draft] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.state-badge[data-state=confirmed] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.state-badge[data-state=done] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.state-badge[data-state=cancelled] {\n  background: #fde8e8;\n  color: #721c24;\n}\n/*# sourceMappingURL=reception-list.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReceptionListComponent, { className: "ReceptionListComponent", filePath: "src/app/modules/stock/components/receptions/reception-list.component.ts", lineNumber: 14 });
})();
export {
  ReceptionListComponent
};
//# sourceMappingURL=chunk-4TKC3PLV.js.map
