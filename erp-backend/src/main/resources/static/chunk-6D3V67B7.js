import {
  ReportService
} from "./chunk-5ADIBSOR.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/caisses/components/suivi-tiers/suivi-tiers.component.ts
var _forTrack0 = ($index, $item) => $item.partnerId;
function SuiviTiersComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 5)(1, "span", 7);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Actualis\xE9 \xE0 ", \u0275\u0275pipeBind2(4, 1, ctx_r0.lastRefresh, "HH:mm:ss"), " ");
  }
}
function SuiviTiersComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "span", 7);
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
function SuiviTiersComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "span", 10);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Chargement en cours\u2026 ");
    \u0275\u0275domElementEnd();
  }
}
function SuiviTiersComponent_Conditional_15_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 23)(1, "span", 7);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Aucune cr\xE9ance en cours");
    \u0275\u0275domElementEnd()();
  }
}
function SuiviTiersComponent_Conditional_15_Conditional_47_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const line_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r2.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, line_r2.solde, "1.0-0"));
  }
}
function SuiviTiersComponent_Conditional_15_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 24)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Partenaire");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th", 27);
    \u0275\u0275text(6, "Montant d\xFB");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(7, "tbody");
    \u0275\u0275repeaterCreate(8, SuiviTiersComponent_Conditional_15_Conditional_47_For_9_Template, 6, 5, "tr", null, _forTrack0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "tfoot")(11, "tr", 28)(12, "td");
    \u0275\u0275text(13, "TOTAL CR\xC9ANCES");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "td", 29);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r0.creances);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 1, ctx_r0.totalCreances, "1.0-0"));
  }
}
function SuiviTiersComponent_Conditional_15_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 23)(1, "span", 7);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "Aucune dette en cours");
    \u0275\u0275domElementEnd()();
  }
}
function SuiviTiersComponent_Conditional_15_Conditional_57_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 32);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const line_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r3.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, line_r3.solde, "1.0-0"));
  }
}
function SuiviTiersComponent_Conditional_15_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 24)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Partenaire");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th", 27);
    \u0275\u0275text(6, "Montant d\xFB");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(7, "tbody");
    \u0275\u0275repeaterCreate(8, SuiviTiersComponent_Conditional_15_Conditional_57_For_9_Template, 6, 5, "tr", null, _forTrack0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "tfoot")(11, "tr", 28)(12, "td");
    \u0275\u0275text(13, "TOTAL DETTES");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "td", 29);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r0.dettes);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 1, ctx_r0.totalDettes, "1.0-0"));
  }
}
function SuiviTiersComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "span", 7);
    \u0275\u0275text(4, "trending_up");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(5, " Total Cr\xE9ances ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 14);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275domElementStart(9, "span", 15);
    \u0275\u0275text(10, "FCFA");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "div", 16);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "div", 17)(14, "div", 13)(15, "span", 7);
    \u0275\u0275text(16, "trending_down");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(17, " Total Dettes ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(18, "div", 14);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275domElementStart(21, "span", 15);
    \u0275\u0275text(22, "FCFA");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(23, "div", 16);
    \u0275\u0275text(24);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(25, "div", 18)(26, "div", 13)(27, "span", 7);
    \u0275\u0275text(28, "account_balance");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(29, " Solde Net ");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(30, "div", 14);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275domElementStart(33, "span", 15);
    \u0275\u0275text(34, "FCFA");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(35, "div", 16);
    \u0275\u0275text(36);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(37, "div", 19)(38, "div", 20)(39, "div", 21)(40, "span", 7);
    \u0275\u0275text(41, "trending_up");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(42, "h2");
    \u0275\u0275text(43, "Cr\xE9ances clients");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(44, "span", 22);
    \u0275\u0275text(45, "Ce qu'on nous doit");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(46, SuiviTiersComponent_Conditional_15_Conditional_46_Template, 5, 0, "div", 23)(47, SuiviTiersComponent_Conditional_15_Conditional_47_Template, 17, 4, "table", 24);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(48, "div", 20)(49, "div", 25)(50, "span", 7);
    \u0275\u0275text(51, "trending_down");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(52, "h2");
    \u0275\u0275text(53, "Dettes fournisseurs");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(54, "span", 26);
    \u0275\u0275text(55, "Ce qu'on doit");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(56, SuiviTiersComponent_Conditional_15_Conditional_56_Template, 5, 0, "div", 23)(57, SuiviTiersComponent_Conditional_15_Conditional_57_Template, 17, 4, "table", 24);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 12, ctx_r0.totalCreances, "1.0-0"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.creances.length, " client(s) nous doivent de l'argent");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(20, 15, ctx_r0.totalDettes, "1.0-0"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.dettes.length, " fournisseur(s) \xE0 qui on doit de l'argent");
    \u0275\u0275advance();
    \u0275\u0275classProp("kpi-net-pos", ctx_r0.soldeNet >= 0)("kpi-net-neg", ctx_r0.soldeNet < 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(32, 18, ctx_r0.soldeNet, "1.0-0"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.soldeNet >= 0 ? "Position cr\xE9ditrice nette" : "Position d\xE9bitrice nette");
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r0.creances.length === 0 ? 46 : 47);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r0.dettes.length === 0 ? 56 : 57);
  }
}
var SuiviTiersComponent = class _SuiviTiersComponent {
  constructor(reportService, authService) {
    this.reportService = reportService;
    this.authService = authService;
    this.creances = [];
    this.dettes = [];
    this.totalCreances = 0;
    this.totalDettes = 0;
    this.soldeNet = 0;
    this.loading = false;
    this.errorMsg = "";
    this.lastRefresh = null;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.errorMsg = "";
    this.reportService.getSuiviTiers(this.authService.getCompanyId()).subscribe({
      next: (res) => {
        this.creances = res.creances || [];
        this.dettes = res.dettes || [];
        this.totalCreances = res.totalCreances || 0;
        this.totalDettes = res.totalDettes || 0;
        this.soldeNet = res.soldeNet || 0;
        this.loading = false;
        this.lastRefresh = /* @__PURE__ */ new Date();
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || "Erreur lors du chargement";
      }
    });
  }
  static {
    this.\u0275fac = function SuiviTiersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SuiviTiersComponent)(\u0275\u0275directiveInject(ReportService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuiviTiersComponent, selectors: [["app-suivi-tiers"]], decls: 16, vars: 6, consts: [[1, "suivi-page"], [1, "suivi-header"], [1, "suivi-title-row"], [1, "material-icons", "suivi-icon"], [1, "suivi-actions"], [1, "last-refresh"], [1, "btn-refresh", 3, "click", "disabled"], [1, "material-icons"], [1, "alert-error"], [1, "loading-state"], [1, "material-icons", "spin"], [1, "kpi-row"], [1, "kpi-card", "kpi-creances"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-curr"], [1, "kpi-sub"], [1, "kpi-card", "kpi-dettes"], [1, "kpi-card"], [1, "tables-row"], [1, "table-section"], [1, "section-header", "creances-header"], [1, "badge", "badge-creances"], [1, "empty-state"], [1, "suivi-table"], [1, "section-header", "dettes-header"], [1, "badge", "badge-dettes"], [1, "ar", "solde-col"], [1, "total-row"], [1, "ar"], [1, "partner-name"], [1, "ar", "solde-creance"], [1, "ar", "solde-dette"]], template: function SuiviTiersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "swap_horiz");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "h1");
        \u0275\u0275text(6, "Dettes & Cr\xE9ances");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(7, "div", 4);
        \u0275\u0275conditionalCreate(8, SuiviTiersComponent_Conditional_8_Template, 5, 4, "span", 5);
        \u0275\u0275domElementStart(9, "button", 6);
        \u0275\u0275domListener("click", function SuiviTiersComponent_Template_button_click_9_listener() {
          return ctx.load();
        });
        \u0275\u0275domElementStart(10, "span", 7);
        \u0275\u0275text(11, "refresh");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(12, " Actualiser ");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275conditionalCreate(13, SuiviTiersComponent_Conditional_13_Template, 4, 1, "div", 8);
        \u0275\u0275conditionalCreate(14, SuiviTiersComponent_Conditional_14_Template, 4, 0, "div", 9)(15, SuiviTiersComponent_Conditional_15_Template, 58, 21);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.lastRefresh ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275domProperty("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275classProp("spin", ctx.loading);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.errorMsg ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 14 : 15);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe], styles: ["\n.suivi-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.suivi-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.suivi-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.suivi-title-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.suivi-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #2563EB;\n}\n.suivi-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.last-refresh[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.last-refresh[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-refresh[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-refresh[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-refresh[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.btn-refresh[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(248, 113, 113, 0.06);\n  border: 1px solid #fed7d7;\n  border-radius: 8px;\n  padding: 12px 16px;\n  color: #c53030;\n  margin-bottom: 20px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 60px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 20px 24px;\n  border-left: 4px solid transparent;\n}\n.kpi-creances[_ngcontent-%COMP%] {\n  border-left-color: #16A34A;\n}\n.kpi-dettes[_ngcontent-%COMP%] {\n  border-left-color: #DC2626;\n}\n.kpi-net-pos[_ngcontent-%COMP%] {\n  border-left-color: #2563EB;\n}\n.kpi-net-neg[_ngcontent-%COMP%] {\n  border-left-color: #F97316;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.kpi-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.kpi-creances[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.kpi-dettes[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  color: #DC2626;\n}\n.kpi-net-pos[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  color: #2563EB;\n}\n.kpi-net-neg[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  color: #F97316;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  line-height: 1.2;\n  margin-bottom: 4px;\n}\n.kpi-curr[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.kpi-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.tables-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.table-section[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  flex: 1;\n}\n.section-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.creances-header[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.06);\n  color: var(--success);\n}\n.dettes-header[_ngcontent-%COMP%] {\n  background: rgba(248, 113, 113, 0.06);\n  color: var(--danger);\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.badge-creances[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-dettes[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px 20px;\n  color: var(--text-muted);\n  gap: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #16A34A;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n}\n.suivi-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.suivi-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  padding: 10px 16px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  border-bottom: 1px solid var(--border);\n}\n.suivi-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n  color: var(--text-primary);\n  vertical-align: middle;\n}\n.suivi-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.suivi-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.partner-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.solde-creance[_ngcontent-%COMP%] {\n  color: #16A34A;\n  font-weight: 700;\n}\n.solde-dette[_ngcontent-%COMP%] {\n  color: #DC2626;\n  font-weight: 700;\n}\ntfoot[_ngcontent-%COMP%]   .total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  font-weight: 700;\n  font-size: 12px;\n  text-transform: uppercase;\n  padding: 10px 16px;\n  border-top: 2px solid var(--border);\n}\ntfoot[_ngcontent-%COMP%]   .total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 900px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .tables-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=suivi-tiers.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuiviTiersComponent, [{
    type: Component,
    args: [{ selector: "app-suivi-tiers", standalone: true, imports: [CommonModule], template: `<div class="suivi-page">

  <!-- Header -->
  <div class="suivi-header">
    <div class="suivi-title-row">
      <span class="material-icons suivi-icon">swap_horiz</span>
      <h1>Dettes &amp; Cr\xE9ances</h1>
    </div>
    <div class="suivi-actions">
      @if (lastRefresh) {
        <span class="last-refresh">
          <span class="material-icons">schedule</span>
          Actualis\xE9 \xE0 {{ lastRefresh | date:'HH:mm:ss' }}
        </span>
      }
      <button class="btn-refresh" (click)="load()" [disabled]="loading">
        <span class="material-icons" [class.spin]="loading">refresh</span>
        Actualiser
      </button>
    </div>
  </div>

  @if (errorMsg) {
    <div class="alert-error">
      <span class="material-icons">error</span> {{ errorMsg }}
    </div>
  }

  @if (loading) {
    <div class="loading-state">
      <span class="material-icons spin">refresh</span> Chargement en cours\u2026
    </div>
  } @else {

    <!-- KPI Cards -->
    <div class="kpi-row">
      <div class="kpi-card kpi-creances">
        <div class="kpi-label">
          <span class="material-icons">trending_up</span>
          Total Cr\xE9ances
        </div>
        <div class="kpi-value">{{ totalCreances | number:'1.0-0' }} <span class="kpi-curr">FCFA</span></div>
        <div class="kpi-sub">{{ creances.length }} client(s) nous doivent de l'argent</div>
      </div>
      <div class="kpi-card kpi-dettes">
        <div class="kpi-label">
          <span class="material-icons">trending_down</span>
          Total Dettes
        </div>
        <div class="kpi-value">{{ totalDettes | number:'1.0-0' }} <span class="kpi-curr">FCFA</span></div>
        <div class="kpi-sub">{{ dettes.length }} fournisseur(s) \xE0 qui on doit de l'argent</div>
      </div>
      <div class="kpi-card" [class.kpi-net-pos]="soldeNet >= 0" [class.kpi-net-neg]="soldeNet < 0">
        <div class="kpi-label">
          <span class="material-icons">account_balance</span>
          Solde Net
        </div>
        <div class="kpi-value">{{ soldeNet | number:'1.0-0' }} <span class="kpi-curr">FCFA</span></div>
        <div class="kpi-sub">{{ soldeNet >= 0 ? 'Position cr\xE9ditrice nette' : 'Position d\xE9bitrice nette' }}</div>
      </div>
    </div>

    <!-- Two column layout -->
    <div class="tables-row">

      <!-- CR\xC9ANCES -->
      <div class="table-section">
        <div class="section-header creances-header">
          <span class="material-icons">trending_up</span>
          <h2>Cr\xE9ances clients</h2>
          <span class="badge badge-creances">Ce qu'on nous doit</span>
        </div>
        @if (creances.length === 0) {
          <div class="empty-state">
            <span class="material-icons">check_circle</span>
            <p>Aucune cr\xE9ance en cours</p>
          </div>
        } @else {
          <table class="suivi-table">
            <thead>
              <tr>
                <th>Partenaire</th>
                <th class="ar solde-col">Montant d\xFB</th>
              </tr>
            </thead>
            <tbody>
              @for (line of creances; track line.partnerId) {
                <tr>
                  <td class="partner-name">{{ line.partnerName }}</td>
                  <td class="ar solde-creance">{{ line.solde | number:'1.0-0' }}</td>
                </tr>
              }
            </tbody>
            <tfoot>
              <tr class="total-row">
                <td>TOTAL CR\xC9ANCES</td>
                <td class="ar">{{ totalCreances | number:'1.0-0' }}</td>
              </tr>
            </tfoot>
          </table>
        }
      </div>

      <!-- DETTES -->
      <div class="table-section">
        <div class="section-header dettes-header">
          <span class="material-icons">trending_down</span>
          <h2>Dettes fournisseurs</h2>
          <span class="badge badge-dettes">Ce qu'on doit</span>
        </div>
        @if (dettes.length === 0) {
          <div class="empty-state">
            <span class="material-icons">check_circle</span>
            <p>Aucune dette en cours</p>
          </div>
        } @else {
          <table class="suivi-table">
            <thead>
              <tr>
                <th>Partenaire</th>
                <th class="ar solde-col">Montant d\xFB</th>
              </tr>
            </thead>
            <tbody>
              @for (line of dettes; track line.partnerId) {
                <tr>
                  <td class="partner-name">{{ line.partnerName }}</td>
                  <td class="ar solde-dette">{{ line.solde | number:'1.0-0' }}</td>
                </tr>
              }
            </tbody>
            <tfoot>
              <tr class="total-row">
                <td>TOTAL DETTES</td>
                <td class="ar">{{ totalDettes | number:'1.0-0' }}</td>
              </tr>
            </tfoot>
          </table>
        }
      </div>

    </div>
  }
</div>
`, styles: ["/* src/app/modules/caisses/components/suivi-tiers/suivi-tiers.component.scss */\n.suivi-page {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.suivi-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.suivi-title-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.suivi-title-row h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.suivi-icon {\n  font-size: 28px;\n  color: #2563EB;\n}\n.suivi-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.last-refresh {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.last-refresh .material-icons {\n  font-size: 14px;\n}\n.btn-refresh {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-refresh:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-refresh:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.btn-refresh .material-icons {\n  font-size: 18px;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(248, 113, 113, 0.06);\n  border: 1px solid #fed7d7;\n  border-radius: 8px;\n  padding: 12px 16px;\n  color: #c53030;\n  margin-bottom: 20px;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 60px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.kpi-card {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 20px 24px;\n  border-left: 4px solid transparent;\n}\n.kpi-creances {\n  border-left-color: #16A34A;\n}\n.kpi-dettes {\n  border-left-color: #DC2626;\n}\n.kpi-net-pos {\n  border-left-color: #2563EB;\n}\n.kpi-net-neg {\n  border-left-color: #F97316;\n}\n.kpi-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.kpi-label .material-icons {\n  font-size: 16px;\n}\n.kpi-creances .kpi-label {\n  color: #16A34A;\n}\n.kpi-dettes .kpi-label {\n  color: #DC2626;\n}\n.kpi-net-pos .kpi-label {\n  color: #2563EB;\n}\n.kpi-net-neg .kpi-label {\n  color: #F97316;\n}\n.kpi-value {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  line-height: 1.2;\n  margin-bottom: 4px;\n}\n.kpi-curr {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.kpi-sub {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.tables-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.table-section {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.section-header h2 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  flex: 1;\n}\n.section-header .material-icons {\n  font-size: 20px;\n}\n.creances-header {\n  background: rgba(34, 197, 94, 0.06);\n  color: var(--success);\n}\n.dettes-header {\n  background: rgba(248, 113, 113, 0.06);\n  color: var(--danger);\n}\n.badge {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.badge-creances {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-dettes {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px 20px;\n  color: var(--text-muted);\n  gap: 8px;\n}\n.empty-state .material-icons {\n  font-size: 36px;\n  color: #16A34A;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 13px;\n}\n.suivi-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.suivi-table th {\n  background: var(--bg-hover);\n  padding: 10px 16px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  border-bottom: 1px solid var(--border);\n}\n.suivi-table td {\n  padding: 10px 16px;\n  border-bottom: 1px solid var(--border-light, #f0f0f0);\n  color: var(--text-primary);\n  vertical-align: middle;\n}\n.suivi-table tr:last-child td {\n  border-bottom: none;\n}\n.suivi-table tr:hover td {\n  background: var(--bg-hover);\n}\n.ar {\n  text-align: right;\n}\n.partner-name {\n  font-weight: 500;\n}\n.solde-creance {\n  color: #16A34A;\n  font-weight: 700;\n}\n.solde-dette {\n  color: #DC2626;\n  font-weight: 700;\n}\ntfoot .total-row td {\n  background: var(--bg-hover);\n  font-weight: 700;\n  font-size: 12px;\n  text-transform: uppercase;\n  padding: 10px 16px;\n  border-top: 2px solid var(--border);\n}\ntfoot .total-row td:last-child {\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 900px) {\n  .kpi-row {\n    grid-template-columns: 1fr;\n  }\n  .tables-row {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=suivi-tiers.component.css.map */\n"] }]
  }], () => [{ type: ReportService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuiviTiersComponent, { className: "SuiviTiersComponent", filePath: "app/modules/caisses/components/suivi-tiers/suivi-tiers.component.ts", lineNumber: 19 });
})();
export {
  SuiviTiersComponent
};
//# sourceMappingURL=chunk-6D3V67B7.js.map
