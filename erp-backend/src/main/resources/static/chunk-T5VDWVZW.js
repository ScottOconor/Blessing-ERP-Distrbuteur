import {
  CaisseService,
  formatFCFA
} from "./chunk-7VYQNHUV.js";
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/caisses/components/rapport-consolide/rapport-consolide.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function RapportConsolideComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function RapportConsolideComponent_For_17_Template_button_click_0_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleCaisse(c_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedCaisseIds.includes(c_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r2.name, " ");
  }
}
function RapportConsolideComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Aucune caisse configur\xE9e");
    \u0275\u0275elementEnd();
  }
}
function RapportConsolideComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function RapportConsolideComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1, "play_arrow");
    \u0275\u0275elementEnd();
  }
}
function RapportConsolideComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error);
  }
}
function RapportConsolideComponent_Conditional_26_For_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "button", 18);
    \u0275\u0275listener("click", function RapportConsolideComponent_Conditional_26_For_43_Template_button_click_20_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.voirRapport(s_r5.id));
    });
    \u0275\u0275text(21, "D\xE9tails");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 12, s_r5.dateSession, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r5.caisseName);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("en-cours", s_r5.status === "EN_COURS");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r5.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatAmount(s_r5.soldeDebut));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatAmount(s_r5.totalEntrees));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatAmount(s_r5.totalSorties));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatAmount(s_r5.soldeFin));
    \u0275\u0275advance();
    \u0275\u0275classProp("warn", s_r5.ecartDepasseSeuil);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatAmount(s_r5.ecart));
  }
}
function RapportConsolideComponent_Conditional_26_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 19);
    \u0275\u0275text(2, "Aucune session sur cette p\xE9riode.");
    \u0275\u0275elementEnd()();
  }
}
function RapportConsolideComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "span");
    \u0275\u0275text(3, "Sessions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 15)(7, "span");
    \u0275\u0275text(8, "Total entr\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 15)(12, "span");
    \u0275\u0275text(13, "Total sorties");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 15)(17, "span");
    \u0275\u0275text(18, "Total \xE9carts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "table", 16)(22, "thead")(23, "tr")(24, "th");
    \u0275\u0275text(25, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "Caisse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31, "Solde d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Entr\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Sorties");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "Solde fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "\xC9cart");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "tbody");
    \u0275\u0275repeaterCreate(42, RapportConsolideComponent_Conditional_26_For_43_Template, 22, 15, "tr", null, _forTrack0);
    \u0275\u0275conditionalCreate(44, RapportConsolideComponent_Conditional_26_Conditional_44_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.data.totalSessions);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatAmount(ctx_r2.data.grandTotalEntrees));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatAmount(ctx_r2.data.grandTotalSorties));
    \u0275\u0275advance();
    \u0275\u0275classProp("warn", ctx_r2.data.grandTotalEcarts);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.formatAmount(ctx_r2.data.grandTotalEcarts));
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r2.data.sessions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.data.sessions.length === 0 ? 44 : -1);
  }
}
var RapportConsolideComponent = class _RapportConsolideComponent {
  constructor(caisseService, authService, router) {
    this.caisseService = caisseService;
    this.authService = authService;
    this.router = router;
    this.caisses = [];
    this.selectedCaisseIds = [];
    this.dateFrom = "";
    this.dateTo = "";
    this.loading = false;
    this.error = "";
    this.data = null;
  }
  ngOnInit() {
    const now = /* @__PURE__ */ new Date();
    this.dateTo = now.toISOString().split("T")[0];
    this.dateFrom = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split("T")[0];
    this.caisseService.getCaisses(this.authService.getCompanyId()).subscribe({
      next: (d) => this.caisses = d
    });
  }
  toggleCaisse(id) {
    const idx = this.selectedCaisseIds.indexOf(id);
    if (idx >= 0)
      this.selectedCaisseIds.splice(idx, 1);
    else
      this.selectedCaisseIds.push(id);
  }
  generate() {
    if (!this.dateFrom || !this.dateTo) {
      this.error = "S\xE9lectionnez une p\xE9riode.";
      return;
    }
    this.loading = true;
    this.error = "";
    this.caisseService.getRapportConsolide(this.authService.getCompanyId(), this.dateFrom, this.dateTo, this.selectedCaisseIds).subscribe({
      next: (d) => {
        this.data = d;
        this.loading = false;
      },
      error: (e) => {
        this.error = e.error?.message || "Erreur.";
        this.loading = false;
      }
    });
  }
  formatAmount(v) {
    return v == null ? "\u2014" : formatFCFA(v);
  }
  voirRapport(sessionId) {
    if (!sessionId)
      return;
    this.router.navigate(["/caisses/rapport-cloture", sessionId]);
  }
  static {
    this.\u0275fac = function RapportConsolideComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RapportConsolideComponent)(\u0275\u0275directiveInject(CaisseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RapportConsolideComponent, selectors: [["app-rapport-consolide"]], decls: 27, vars: 7, consts: [[1, "report-page"], [1, "material-icons"], [1, "filter-panel"], [1, "input-row"], [1, "input-group"], ["type", "date", 3, "ngModelChange", "ngModel"], [1, "caisse-chips"], [1, "chip", 3, "active"], [1, "muted"], [1, "hint"], [1, "btn-generate", 3, "click", "disabled"], [1, "material-icons", "spin"], [1, "error-row"], [1, "chip", 3, "click"], [1, "kpi-row"], [1, "kpi"], [1, "sessions-table"], [1, "status-badge"], [1, "btn-link", 3, "click"], ["colspan", "9", 1, "empty"]], template: function RapportConsolideComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1")(2, "span", 1);
        \u0275\u0275text(3, "bar_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, " Rapport consolid\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "label");
        \u0275\u0275text(9, "Du");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function RapportConsolideComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 4)(12, "label");
        \u0275\u0275text(13, "Au");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function RapportConsolideComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 6);
        \u0275\u0275repeaterCreate(16, RapportConsolideComponent_For_17_Template, 2, 3, "button", 7, _forTrack0);
        \u0275\u0275conditionalCreate(18, RapportConsolideComponent_Conditional_18_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p", 9);
        \u0275\u0275text(20, "Aucune caisse s\xE9lectionn\xE9e = toutes les caisses.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 10);
        \u0275\u0275listener("click", function RapportConsolideComponent_Template_button_click_21_listener() {
          return ctx.generate();
        });
        \u0275\u0275conditionalCreate(22, RapportConsolideComponent_Conditional_22_Template, 2, 0, "span", 11)(23, RapportConsolideComponent_Conditional_23_Template, 2, 0, "span", 1);
        \u0275\u0275text(24, " G\xE9n\xE9rer ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(25, RapportConsolideComponent_Conditional_25_Template, 2, 1, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(26, RapportConsolideComponent_Conditional_26_Template, 45, 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.caisses);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.caisses.length === 0 ? 18 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 22 : 23);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.error ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.data ? 26 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n.report-page[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 18px;\n}\nh1[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.filter-panel[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 18px;\n  margin-bottom: 20px;\n}\n.input-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  margin-bottom: 12px;\n}\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  color: var(--text-primary);\n}\n.caisse-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  color: var(--text-muted);\n  font-size: 12.5px;\n  cursor: pointer;\n}\n.chip.active[_ngcontent-%COMP%] {\n  background: #16A34A;\n  border-color: #16A34A;\n  color: white;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin: 6px 0 12px;\n}\n.btn-generate[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  border-radius: 8px;\n  background: #16A34A;\n  color: white;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 13px;\n}\n.btn-generate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-row[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #DC2626;\n  font-size: 13px;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.kpi[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n}\n.kpi[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 4px;\n}\n.kpi[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--text-primary);\n}\n.kpi.warn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #D97706;\n}\n.sessions-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  overflow: hidden;\n  font-size: 13px;\n}\n.sessions-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 12px;\n  background: var(--bg-hover);\n  color: var(--text-muted);\n  font-weight: 600;\n  font-size: 11px;\n  text-transform: uppercase;\n}\n.sessions-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-top: 1px solid var(--border);\n}\n.sessions-table[_ngcontent-%COMP%]   td.warn[_ngcontent-%COMP%] {\n  color: #D97706;\n  font-weight: 600;\n}\n.sessions-table[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 24px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.status-badge.en-cours[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16A34A;\n}\n.btn-link[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: #16A34A;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=rapport-consolide.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RapportConsolideComponent, [{
    type: Component,
    args: [{ selector: "app-rapport-consolide", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="report-page">
  <h1><span class="material-icons">bar_chart</span> Rapport consolid\xE9</h1>

  <div class="filter-panel">
    <div class="input-row">
      <div class="input-group">
        <label>Du</label>
        <input type="date" [(ngModel)]="dateFrom" />
      </div>
      <div class="input-group">
        <label>Au</label>
        <input type="date" [(ngModel)]="dateTo" />
      </div>
    </div>
    <div class="caisse-chips">
      @for (c of caisses; track c.id) {
        <button class="chip" [class.active]="selectedCaisseIds.includes(c.id!)" (click)="toggleCaisse(c.id!)">
          {{ c.name }}
        </button>
      }
      @if (caisses.length === 0) { <span class="muted">Aucune caisse configur\xE9e</span> }
    </div>
    <p class="hint">Aucune caisse s\xE9lectionn\xE9e = toutes les caisses.</p>
    <button class="btn-generate" (click)="generate()" [disabled]="loading">
      @if (loading) { <span class="material-icons spin">sync</span> } @else { <span class="material-icons">play_arrow</span> }
      G\xE9n\xE9rer
    </button>
    @if (error) { <div class="error-row">{{ error }}</div> }
  </div>

  @if (data) {
    <div class="kpi-row">
      <div class="kpi"><span>Sessions</span><strong>{{ data.totalSessions }}</strong></div>
      <div class="kpi"><span>Total entr\xE9es</span><strong>{{ formatAmount(data.grandTotalEntrees) }}</strong></div>
      <div class="kpi"><span>Total sorties</span><strong>{{ formatAmount(data.grandTotalSorties) }}</strong></div>
      <div class="kpi" [class.warn]="data.grandTotalEcarts"><span>Total \xE9carts</span><strong>{{ formatAmount(data.grandTotalEcarts) }}</strong></div>
    </div>

    <table class="sessions-table">
      <thead>
        <tr>
          <th>Date</th><th>Caisse</th><th>Statut</th><th>Solde d\xE9but</th><th>Entr\xE9es</th><th>Sorties</th><th>Solde fin</th><th>\xC9cart</th><th></th>
        </tr>
      </thead>
      <tbody>
        @for (s of data.sessions; track s.id) {
          <tr>
            <td>{{ s.dateSession | date:'dd/MM/yyyy' }}</td>
            <td>{{ s.caisseName }}</td>
            <td><span class="status-badge" [class.en-cours]="s.status === 'EN_COURS'">{{ s.status }}</span></td>
            <td>{{ formatAmount(s.soldeDebut) }}</td>
            <td>{{ formatAmount(s.totalEntrees) }}</td>
            <td>{{ formatAmount(s.totalSorties) }}</td>
            <td>{{ formatAmount(s.soldeFin) }}</td>
            <td [class.warn]="s.ecartDepasseSeuil">{{ formatAmount(s.ecart) }}</td>
            <td><button class="btn-link" (click)="voirRapport(s.id)">D\xE9tails</button></td>
          </tr>
        }
        @if (data.sessions.length === 0) {
          <tr><td colspan="9" class="empty">Aucune session sur cette p\xE9riode.</td></tr>
        }
      </tbody>
    </table>
  }
</div>
`, styles: ["/* src/app/modules/caisses/components/rapport-consolide/rapport-consolide.component.scss */\n.report-page {\n  padding: 24px 32px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\nh1 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 18px;\n}\nh1 .material-icons {\n  color: #16A34A;\n}\n.filter-panel {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 18px;\n  margin-bottom: 20px;\n}\n.input-row {\n  display: flex;\n  gap: 14px;\n  margin-bottom: 12px;\n}\n.input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.input-group label {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.input-group input {\n  padding: 8px 10px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  color: var(--text-primary);\n}\n.caisse-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.chip {\n  padding: 6px 14px;\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  color: var(--text-muted);\n  font-size: 12.5px;\n  cursor: pointer;\n}\n.chip.active {\n  background: #16A34A;\n  border-color: #16A34A;\n  color: white;\n}\n.muted {\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.hint {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin: 6px 0 12px;\n}\n.btn-generate {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 20px;\n  border-radius: 8px;\n  background: #16A34A;\n  color: white;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 13px;\n}\n.btn-generate .material-icons {\n  font-size: 16px;\n}\n.btn-generate:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-row {\n  margin-top: 10px;\n  color: #DC2626;\n  font-size: 13px;\n}\n.kpi-row {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.kpi {\n  flex: 1;\n  min-width: 160px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n}\n.kpi span {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 4px;\n}\n.kpi strong {\n  font-size: 17px;\n  color: var(--text-primary);\n}\n.kpi.warn strong {\n  color: #D97706;\n}\n.sessions-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  overflow: hidden;\n  font-size: 13px;\n}\n.sessions-table th {\n  text-align: left;\n  padding: 10px 12px;\n  background: var(--bg-hover);\n  color: var(--text-muted);\n  font-weight: 600;\n  font-size: 11px;\n  text-transform: uppercase;\n}\n.sessions-table td {\n  padding: 8px 12px;\n  border-top: 1px solid var(--border);\n}\n.sessions-table td.warn {\n  color: #D97706;\n  font-weight: 600;\n}\n.sessions-table .empty {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 24px;\n}\n.status-badge {\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.status-badge.en-cours {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16A34A;\n}\n.btn-link {\n  border: none;\n  background: none;\n  color: #16A34A;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n}\n.btn-link:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=rapport-consolide.component.css.map */\n"] }]
  }], () => [{ type: CaisseService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RapportConsolideComponent, { className: "RapportConsolideComponent", filePath: "app/modules/caisses/components/rapport-consolide/rapport-consolide.component.ts", lineNumber: 16 });
})();
export {
  RapportConsolideComponent
};
//# sourceMappingURL=chunk-T5VDWVZW.js.map
