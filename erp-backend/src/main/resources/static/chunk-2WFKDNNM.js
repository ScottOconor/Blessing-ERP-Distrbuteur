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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/caisses/components/operation-list/operation-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function OperationListComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("value", c_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.name);
  }
}
function OperationListComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 14);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function OperationListComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.type === "ENTREE" ? "add_circle" : "remove_circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Aucune ", ctx_r1.type === "ENTREE" ? "entr\xE9e" : "sortie", " enregistr\xE9e.");
  }
}
function OperationListComponent_Conditional_29_For_22_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const op_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(op_r3.compteContrepartieCode);
  }
}
function OperationListComponent_Conditional_29_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 21);
    \u0275\u0275conditionalCreate(13, OperationListComponent_Conditional_29_For_22_Conditional_13_Template, 2, 1, "span", 22);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 23);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 24);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const op_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 13, op_r3.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(op_r3.caisseName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(op_r3.reference || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(op_r3.libelle || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(op_r3.tiersName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(op_r3.compteContrepartieCode ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", op_r3.compteContrepartieName || "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("entree", ctx_r1.type === "ENTREE")("sortie", ctx_r1.type === "SORTIE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatAmount(op_r3.montant), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(op_r3.createdBy || "\u2014");
  }
}
function OperationListComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "table", 15)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Caisse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Tiers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Compte contrepartie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 16);
    \u0275\u0275text(17, "Montant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Par");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, OperationListComponent_Conditional_29_For_22_Template, 19, 16, "tr", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "tfoot")(24, "tr")(25, "td", 17);
    \u0275\u0275text(26, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 18);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "td");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r1.operations);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("entree", ctx_r1.type === "ENTREE")("sortie", ctx_r1.type === "SORTIE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatAmount(ctx_r1.totalMontant), " ");
  }
}
var OperationListComponent = class _OperationListComponent {
  constructor(caisseService, authService, router) {
    this.caisseService = caisseService;
    this.authService = authService;
    this.router = router;
    this.type = "ENTREE";
    this.operations = [];
    this.caisses = [];
    this.loading = true;
    this.companyId = 0;
    this.filterCaisseId = 0;
    this.filterDateFrom = "";
    this.filterDateTo = "";
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId() ?? 0;
    const url = this.router.url;
    this.type = url.startsWith("/caisses/sorties") ? "SORTIE" : "ENTREE";
    this.caisseService.getCaisses(this.companyId).subscribe({ next: (d) => this.caisses = d });
    this.load();
  }
  load() {
    this.loading = true;
    this.caisseService.getAllOperations(this.companyId, this.type).subscribe({
      next: (data) => {
        let filtered = data;
        if (this.filterCaisseId)
          filtered = filtered.filter((o) => o.caisseId === this.filterCaisseId);
        if (this.filterDateFrom)
          filtered = filtered.filter((o) => o.date >= this.filterDateFrom);
        if (this.filterDateTo)
          filtered = filtered.filter((o) => o.date <= this.filterDateTo);
        this.operations = filtered;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  newOperation() {
    this.router.navigate([this.type === "ENTREE" ? "/caisses/entrees/new" : "/caisses/sorties/new"]);
  }
  formatAmount(v) {
    return formatFCFA(v);
  }
  get totalMontant() {
    return this.operations.reduce((acc, o) => acc + (o.montant || 0), 0);
  }
  static {
    this.\u0275fac = function OperationListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OperationListComponent)(\u0275\u0275directiveInject(CaisseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OperationListComponent, selectors: [["app-operation-list"]], decls: 30, vars: 19, consts: [[1, "op-list-page"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "btn-new", 3, "click"], [1, "filters-row"], [3, "ngModelChange", "change", "ngModel"], [3, "value"], [1, "date-range"], ["type", "date", "placeholder", "Du", 3, "ngModelChange", "change", "ngModel"], ["type", "date", "placeholder", "Au", 3, "ngModelChange", "change", "ngModel"], [1, "loading-row"], [1, "empty-state"], [1, "table-wrap"], [1, "material-icons", "spin"], [1, "op-table"], [1, "text-right"], ["colspan", "6", 1, "total-label"], [1, "text-right", "total-amount"], [1, "date-col"], [1, "fw-bold"], [1, "mono"], [1, "compte-badge"], [1, "text-right", "amount"], [1, "text-muted", "small"]], template: function OperationListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "button", 4);
        \u0275\u0275listener("click", function OperationListComponent_Template_button_click_10_listener() {
          return ctx.newOperation();
        });
        \u0275\u0275elementStart(11, "span", 3);
        \u0275\u0275text(12, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 5)(15, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function OperationListComponent_Template_select_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterCaisseId, $event) || (ctx.filterCaisseId = $event);
          return $event;
        });
        \u0275\u0275listener("change", function OperationListComponent_Template_select_change_15_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(16, "option", 7);
        \u0275\u0275text(17, "Toutes les caisses");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(18, OperationListComponent_For_19_Template, 2, 2, "option", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 8)(21, "span", 3);
        \u0275\u0275text(22, "date_range");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function OperationListComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterDateFrom, $event) || (ctx.filterDateFrom = $event);
          return $event;
        });
        \u0275\u0275listener("change", function OperationListComponent_Template_input_change_23_listener() {
          return ctx.load();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span");
        \u0275\u0275text(25, "\u2192");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function OperationListComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterDateTo, $event) || (ctx.filterDateTo = $event);
          return $event;
        });
        \u0275\u0275listener("change", function OperationListComponent_Template_input_change_26_listener() {
          return ctx.load();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(27, OperationListComponent_Conditional_27_Template, 4, 0, "div", 11);
        \u0275\u0275conditionalCreate(28, OperationListComponent_Conditional_28_Template, 5, 2, "div", 12);
        \u0275\u0275conditionalCreate(29, OperationListComponent_Conditional_29_Template, 30, 5, "div", 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275classProp("entree", ctx.type === "ENTREE")("sortie", ctx.type === "SORTIE");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.type === "ENTREE" ? "add_circle" : "remove_circle", " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("Historique des ", ctx.type === "ENTREE" ? "entr\xE9es" : "sorties");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.operations.length, " op\xE9ration(s)");
        \u0275\u0275advance();
        \u0275\u0275classProp("entree", ctx.type === "ENTREE")("sortie", ctx.type === "SORTIE");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" Nouvelle ", ctx.type === "ENTREE" ? "entr\xE9e" : "sortie", " ");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterCaisseId);
        \u0275\u0275advance();
        \u0275\u0275property("value", 0);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.caisses);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterDateFrom);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterDateTo);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading && ctx.operations.length === 0 ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading && ctx.operations.length > 0 ? 29 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ['\n.op-list-page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons.entree[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons.sortie[_ngcontent-%COMP%] {\n  color: #DC2626;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 3px;\n  font-family: "Inter", sans-serif;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-new[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  border: none;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: all 0.2s;\n}\n.btn-new[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-new.entree[_ngcontent-%COMP%] {\n  background: #16A34A;\n}\n.btn-new.entree[_ngcontent-%COMP%]:hover {\n  background: #15803D;\n}\n.btn-new.sortie[_ngcontent-%COMP%] {\n  background: #DC2626;\n}\n.btn-new.sortie[_ngcontent-%COMP%]:hover {\n  background: #B91C1C;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.filters-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filters-row[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-size: 13px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  outline: none;\n}\n.filters-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.filters-row[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]:focus {\n  border-color: #16A34A;\n}\n.date-range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-muted);\n}\n.date-range[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.date-range[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.loading-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 20px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  border: 1px dashed var(--border);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 44px;\n  color: var(--text-muted);\n  display: block;\n  margin-bottom: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.op-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.op-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--text-muted);\n  background: var(--bg-page);\n  border-bottom: 1px solid var(--border);\n}\n.op-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.op-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.op-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.op-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--border);\n  border-bottom: none;\n  background: var(--bg-page);\n  font-weight: 700;\n  padding: 12px 14px;\n}\n.date-col[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.compte-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--primary);\n  background: var(--primary-subtle);\n  padding: 1px 6px;\n  border-radius: 4px;\n  margin-right: 4px;\n  font-family: monospace;\n}\n.amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: "Inter", sans-serif;\n}\n.amount.entree[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.amount.sortie[_ngcontent-%COMP%] {\n  color: #DC2626;\n}\n.total-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--text-muted);\n}\n.total-amount[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n}\n.total-amount.entree[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.total-amount.sortie[_ngcontent-%COMP%] {\n  color: #DC2626;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=operation-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OperationListComponent, [{
    type: Component,
    args: [{ selector: "app-operation-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="op-list-page">
  <div class="page-header">
    <div class="page-title">
      <span class="material-icons" [class.entree]="type === 'ENTREE'" [class.sortie]="type === 'SORTIE'">
        {{ type === 'ENTREE' ? 'add_circle' : 'remove_circle' }}
      </span>
      <div>
        <h1>Historique des {{ type === 'ENTREE' ? 'entr\xE9es' : 'sorties' }}</h1>
        <p>{{ operations.length }} op\xE9ration(s)</p>
      </div>
    </div>
    <button class="btn-new" [class.entree]="type === 'ENTREE'" [class.sortie]="type === 'SORTIE'" (click)="newOperation()">
      <span class="material-icons">add</span>
      Nouvelle {{ type === 'ENTREE' ? 'entr\xE9e' : 'sortie' }}
    </button>
  </div>

  <!-- Filtres -->
  <div class="filters-row">
    <select [(ngModel)]="filterCaisseId" (change)="load()">
      <option [value]="0">Toutes les caisses</option>
      @for (c of caisses; track c.id) {
        <option [value]="c.id">{{ c.name }}</option>
      }
    </select>
    <div class="date-range">
      <span class="material-icons">date_range</span>
      <input type="date" [(ngModel)]="filterDateFrom" (change)="load()" placeholder="Du" />
      <span>\u2192</span>
      <input type="date" [(ngModel)]="filterDateTo" (change)="load()" placeholder="Au" />
    </div>
  </div>

  @if (loading) {
    <div class="loading-row"><span class="material-icons spin">sync</span> Chargement\u2026</div>
  }

  @if (!loading && operations.length === 0) {
    <div class="empty-state">
      <span class="material-icons">{{ type === 'ENTREE' ? 'add_circle' : 'remove_circle' }}</span>
      <p>Aucune {{ type === 'ENTREE' ? 'entr\xE9e' : 'sortie' }} enregistr\xE9e.</p>
    </div>
  }

  @if (!loading && operations.length > 0) {
    <div class="table-wrap">
      <table class="op-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Caisse</th>
            <th>R\xE9f\xE9rence</th>
            <th>Libell\xE9</th>
            <th>Tiers</th>
            <th>Compte contrepartie</th>
            <th class="text-right">Montant</th>
            <th>Par</th>
          </tr>
        </thead>
        <tbody>
          @for (op of operations; track op.id) {
            <tr>
              <td class="date-col">{{ op.date | date:'dd/MM/yyyy' }}</td>
              <td class="fw-bold">{{ op.caisseName }}</td>
              <td class="mono">{{ op.reference || '\u2014' }}</td>
              <td>{{ op.libelle || '\u2014' }}</td>
              <td>{{ op.tiersName || '\u2014' }}</td>
              <td class="mono">
                @if (op.compteContrepartieCode) {
                  <span class="compte-badge">{{ op.compteContrepartieCode }}</span>
                }
                {{ op.compteContrepartieName || '\u2014' }}
              </td>
              <td class="text-right amount" [class.entree]="type === 'ENTREE'" [class.sortie]="type === 'SORTIE'">
                {{ formatAmount(op.montant) }}
              </td>
              <td class="text-muted small">{{ op.createdBy || '\u2014' }}</td>
            </tr>
          }
        </tbody>
        <tfoot>
          <tr>
            <td colspan="6" class="total-label">Total</td>
            <td class="text-right total-amount" [class.entree]="type === 'ENTREE'" [class.sortie]="type === 'SORTIE'">
              {{ formatAmount(totalMontant) }}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  }
</div>
`, styles: ['/* src/app/modules/caisses/components/operation-list/operation-list.component.scss */\n.op-list-page {\n  padding: 28px 32px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 16px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header .page-title .material-icons {\n  font-size: 32px;\n}\n.page-header .page-title .material-icons.entree {\n  color: #16A34A;\n}\n.page-header .page-title .material-icons.sortie {\n  color: #DC2626;\n}\n.page-header .page-title h1 {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 3px;\n  font-family: "Inter", sans-serif;\n}\n.page-header .page-title p {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-new {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  border: none;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: all 0.2s;\n}\n.btn-new .material-icons {\n  font-size: 17px;\n}\n.btn-new.entree {\n  background: #16A34A;\n}\n.btn-new.entree:hover {\n  background: #15803D;\n}\n.btn-new.sortie {\n  background: #DC2626;\n}\n.btn-new.sortie:hover {\n  background: #B91C1C;\n}\n.filters-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.filters-row select,\n.filters-row input[type=date] {\n  padding: 8px 12px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-size: 13px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  outline: none;\n}\n.filters-row select:focus,\n.filters-row input[type=date]:focus {\n  border-color: #16A34A;\n}\n.date-range {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-muted);\n}\n.date-range .material-icons {\n  font-size: 17px;\n}\n.date-range span {\n  font-size: 13px;\n}\n.loading-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 20px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.empty-state {\n  text-align: center;\n  padding: 50px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  border: 1px dashed var(--border);\n}\n.empty-state .material-icons {\n  font-size: 44px;\n  color: var(--text-muted);\n  display: block;\n  margin-bottom: 12px;\n}\n.empty-state p {\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.table-wrap {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.op-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.op-table th {\n  padding: 11px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--text-muted);\n  background: var(--bg-page);\n  border-bottom: 1px solid var(--border);\n}\n.op-table td {\n  padding: 12px 14px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.op-table tr:last-child td {\n  border-bottom: none;\n}\n.op-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.op-table tfoot td {\n  border-top: 2px solid var(--border);\n  border-bottom: none;\n  background: var(--bg-page);\n  font-weight: 700;\n  padding: 12px 14px;\n}\n.date-col {\n  white-space: nowrap;\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.fw-bold {\n  font-weight: 600;\n}\n.mono {\n  font-family: monospace;\n  font-size: 12px;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.small {\n  font-size: 12px;\n}\n.compte-badge {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--primary);\n  background: var(--primary-subtle);\n  padding: 1px 6px;\n  border-radius: 4px;\n  margin-right: 4px;\n  font-family: monospace;\n}\n.amount {\n  font-weight: 700;\n  font-family: "Inter", sans-serif;\n}\n.amount.entree {\n  color: #16A34A;\n}\n.amount.sortie {\n  color: #DC2626;\n}\n.total-label {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--text-muted);\n}\n.total-amount {\n  font-size: 15px;\n  font-weight: 700;\n}\n.total-amount.entree {\n  color: #16A34A;\n}\n.total-amount.sortie {\n  color: #DC2626;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=operation-list.component.css.map */\n'] }]
  }], () => [{ type: CaisseService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OperationListComponent, { className: "OperationListComponent", filePath: "app/modules/caisses/components/operation-list/operation-list.component.ts", lineNumber: 16 });
})();
export {
  OperationListComponent
};
//# sourceMappingURL=chunk-2WFKDNNM.js.map
