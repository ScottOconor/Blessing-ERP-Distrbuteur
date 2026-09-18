import {
  CaisseService
} from "./chunk-MBTSHWNJ.js";
import {
  formatFCFA
} from "./chunk-TKYALNMA.js";
import {
  AuditTrailComponent
} from "./chunk-Z3T7EMK6.js";
import "./chunk-G4ORCRQ7.js";
import {
  ActivatedRoute
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/caisses/components/brouillard/brouillard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function BrouillardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function BrouillardComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Imprimer ");
    \u0275\u0275elementEnd();
  }
}
function BrouillardComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("value", c_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.name);
  }
}
function BrouillardComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 16);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function BrouillardComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function BrouillardComponent_Conditional_31_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span");
    \u0275\u0275text(2, "Cl\xF4tur\xE9 le :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r1.brouillard.dateCloture, "dd/MM/yyyy HH:mm"));
  }
}
function BrouillardComponent_Conditional_31_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 3);
    \u0275\u0275text(2, "receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune op\xE9ration enregistr\xE9e pour cette journ\xE9e. ");
    \u0275\u0275elementEnd();
  }
}
function BrouillardComponent_Conditional_31_Conditional_42_For_22_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r4.compteCode);
  }
}
function BrouillardComponent_Conditional_31_Conditional_42_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 43);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 44);
    \u0275\u0275conditionalCreate(11, BrouillardComponent_Conditional_31_Conditional_42_For_22_Conditional_11_Template, 2, 1, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 46);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 47);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 48);
    \u0275\u0275text(17, "\u2014");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, line_r4.date, "dd/MM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r4.ref || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r4.libelle || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r4.tiersName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(line_r4.compteCode ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r4.debit > 0 ? ctx_r1.formatAmount(line_r4.debit) : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r4.credit > 0 ? ctx_r1.formatAmount(line_r4.credit) : "");
  }
}
function BrouillardComponent_Conditional_31_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "table", 34)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Tiers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 35);
    \u0275\u0275text(15, "D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 35);
    \u0275\u0275text(17, "Cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 35);
    \u0275\u0275text(19, "Solde");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, BrouillardComponent_Conditional_31_Conditional_42_For_22_Template, 18, 10, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "tfoot")(24, "tr")(25, "td", 36);
    \u0275\u0275text(26, "TOTAUX");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 37);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 38);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 39);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r1.brouillard.lines);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.brouillard.totalEntrees));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.brouillard.totalSorties));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.brouillard.soldeFin));
  }
}
function BrouillardComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 17)(2, "div", 18)(3, "h2");
    \u0275\u0275text(4, "BROUILLARD DE CAISSE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 20)(9, "div", 21)(10, "span");
    \u0275\u0275text(11, "Journal :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 21)(15, "span");
    \u0275\u0275text(16, "Statut :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 22);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, BrouillardComponent_Conditional_31_Conditional_19_Template, 6, 4, "div", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 23)(21, "div", 24)(22, "div", 25);
    \u0275\u0275text(23, "Solde de d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 26);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 24)(27, "div", 25);
    \u0275\u0275text(28, "Total entr\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 27);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 24)(32, "div", 25);
    \u0275\u0275text(33, "Total sorties");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 28);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 29)(37, "div", 25);
    \u0275\u0275text(38, "Solde final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 30);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(41, BrouillardComponent_Conditional_31_Conditional_41_Template, 4, 0, "div", 31)(42, BrouillardComponent_Conditional_31_Conditional_42_Template, 33, 3, "div", 32);
    \u0275\u0275element(43, "app-audit-trail", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.brouillard.caisseName, " \u2014 ", \u0275\u0275pipeBind2(7, 16, ctx_r1.brouillard.dateSession, "EEEE d MMMM yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r1.brouillard.journalCode, " \u2014 ", ctx_r1.brouillard.journalName);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("cloturee", ctx_r1.brouillard.status === "CLOTUREE")("ouverte", ctx_r1.brouillard.status !== "CLOTUREE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.brouillard.status, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.brouillard.dateCloture ? 19 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.brouillard.soldeDebut));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.brouillard.totalEntrees));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.brouillard.totalSorties));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.brouillard.soldeFin));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.brouillard.lines.length === 0 ? 41 : 42);
    \u0275\u0275advance(2);
    \u0275\u0275property("entityId", ctx_r1.selectedCaisseId);
  }
}
var BrouillardComponent = class _BrouillardComponent {
  constructor(caisseService, authService, route) {
    this.caisseService = caisseService;
    this.authService = authService;
    this.route = route;
    this.caisses = [];
    this.brouillard = null;
    this.loading = false;
    this.error = "";
    this.companyId = 0;
    this.selectedCaisseId = 0;
    this.selectedDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId() ?? 0;
    this.caisseService.getCaisses(this.companyId).subscribe({ next: (d) => this.caisses = d });
    this.route.queryParams.subscribe((params) => {
      if (params["caisseId"])
        this.selectedCaisseId = +params["caisseId"];
      if (params["date"])
        this.selectedDate = params["date"];
      if (this.selectedCaisseId)
        this.load();
    });
  }
  load() {
    if (!this.selectedCaisseId || !this.selectedDate)
      return;
    this.loading = true;
    this.error = "";
    this.caisseService.getBrouillard(this.selectedCaisseId, this.selectedDate).subscribe({
      next: (data) => {
        this.brouillard = data;
        this.loading = false;
      },
      error: (e) => {
        this.error = e.error?.message || "Erreur chargement.";
        this.loading = false;
      }
    });
  }
  formatAmount(v) {
    return formatFCFA(v);
  }
  print() {
    window.print();
  }
  static {
    this.\u0275fac = function BrouillardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrouillardComponent)(\u0275\u0275directiveInject(CaisseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrouillardComponent, selectors: [["app-brouillard"]], decls: 32, vars: 8, consts: [[1, "brouillard-page"], [1, "page-header", "no-print"], [1, "page-title"], [1, "material-icons"], [1, "btn-print"], [1, "selectors", "no-print"], [1, "selector-row"], [1, "sel-field"], [3, "ngModelChange", "ngModel"], [3, "value"], ["type", "date", 3, "ngModelChange", "ngModel"], [1, "btn-load", 3, "click", "disabled"], [1, "loading-row"], [1, "error-row"], [1, "brouillard-doc"], [1, "btn-print", 3, "click"], [1, "material-icons", "spin"], [1, "brou-header"], [1, "brou-title"], [1, "brou-subtitle"], [1, "brou-meta"], [1, "meta-item"], [1, "status-chip"], [1, "kpi-row"], [1, "kpi"], [1, "kpi-label"], [1, "kpi-value", "neutral"], [1, "kpi-value", "green"], [1, "kpi-value", "red"], [1, "kpi", "kpi-final"], [1, "kpi-value", "primary"], [1, "empty-lines"], [1, "lines-wrap"], ["entityType", "CAISSE", 3, "entityId"], [1, "lines-table"], [1, "text-right"], ["colspan", "5", 1, "total-label"], [1, "text-right", "total", "green"], [1, "text-right", "total", "red"], [1, "text-right", "total", "primary"], [1, "date-col"], [1, "mono", "ref-col"], [1, "libelle-col"], [1, "tiers-col"], [1, "mono", "compte-col"], [1, "compte-badge"], [1, "text-right", "amount", "green"], [1, "text-right", "amount", "red"], [1, "text-right", "amount"]], template: function BrouillardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1");
        \u0275\u0275text(7, "Brouillard de caisse");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "R\xE9capitulatif de toutes les op\xE9rations d'une journ\xE9e");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(10, BrouillardComponent_Conditional_10_Template, 4, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 5)(12, "div", 6)(13, "div", 7)(14, "label");
        \u0275\u0275text(15, "Caisse");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function BrouillardComponent_Template_select_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedCaisseId, $event) || (ctx.selectedCaisseId = $event);
          return $event;
        });
        \u0275\u0275elementStart(17, "option", 9);
        \u0275\u0275text(18, "\u2014 S\xE9lectionner \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(19, BrouillardComponent_For_20_Template, 2, 2, "option", 9, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 7)(22, "label");
        \u0275\u0275text(23, "Date de session");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function BrouillardComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedDate, $event) || (ctx.selectedDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "button", 11);
        \u0275\u0275listener("click", function BrouillardComponent_Template_button_click_25_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(26, "span", 3);
        \u0275\u0275text(27, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, " Afficher ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(29, BrouillardComponent_Conditional_29_Template, 4, 0, "div", 12);
        \u0275\u0275conditionalCreate(30, BrouillardComponent_Conditional_30_Template, 4, 1, "div", 13);
        \u0275\u0275conditionalCreate(31, BrouillardComponent_Conditional_31_Template, 44, 19, "div", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.brouillard ? 10 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCaisseId);
        \u0275\u0275advance();
        \u0275\u0275property("value", 0);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.caisses);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedDate);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.selectedCaisseId || !ctx.selectedDate);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading && ctx.brouillard ? 31 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, AuditTrailComponent, DatePipe], styles: ['@charset "UTF-8";\n\n\n.brouillard-page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #6F42C1;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  font-family: "Inter", sans-serif;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-print[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  background: #6F42C1;\n  border: none;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.btn-print[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-print[_ngcontent-%COMP%]:hover {\n  background: #5a32a3;\n}\n.selectors[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-light);\n  border-radius: 12px;\n  padding: 16px 20px;\n  margin-bottom: 20px;\n}\n.selector-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.sel-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.sel-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.sel-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.sel-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  color: var(--text-primary);\n  font-size: 13.5px;\n  outline: none;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.sel-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.sel-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #6F42C1;\n}\n.sel-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.sel-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.btn-load[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  background: #6F42C1;\n  border: none;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: all 0.2s;\n}\n.btn-load[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-load[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5a32a3;\n}\n.btn-load[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.loading-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 20px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.error-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n  border-radius: 10px;\n  background: #FEF2F2;\n  border: 1px solid #FECACA;\n  color: #DC2626;\n  font-size: 13px;\n}\n.brouillard-doc[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-light);\n  border-radius: 14px;\n  overflow: hidden;\n}\n.brou-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6F42C1 0%,\n      #8B5CF6 100%);\n  padding: 22px 24px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.brou-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: white;\n  margin: 0 0 6px;\n  letter-spacing: 1px;\n  font-family: "Inter", sans-serif;\n}\n.brou-title[_ngcontent-%COMP%]   .brou-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.75);\n  text-transform: capitalize;\n}\n.brou-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  text-align: right;\n}\n.meta-item[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  justify-content: flex-end;\n}\n.meta-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n.meta-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: white;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-chip.cloturee[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.status-chip.ouverte[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.3);\n  color: #86EFAC;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  border-bottom: 1px solid var(--border-light);\n}\n.kpi[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  border-right: 1px solid var(--border-light);\n}\n.kpi[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.kpi.kpi-final[_ngcontent-%COMP%] {\n  background: rgba(111, 66, 193, 0.05);\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  font-family: "Inter", sans-serif;\n}\n.kpi-value.neutral[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.kpi-value.green[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.kpi-value.red[_ngcontent-%COMP%] {\n  color: #DC2626;\n}\n.kpi-value.primary[_ngcontent-%COMP%] {\n  color: #6F42C1;\n}\n.empty-lines[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 32px 24px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.empty-lines[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.lines-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--text-muted);\n  background: var(--bg-page);\n  border-bottom: 1px solid var(--border);\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 12.5px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.015);\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.lines-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--border);\n  border-bottom: none;\n  background: var(--bg-page);\n  padding: 12px 14px;\n}\n.date-col[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.ref-col[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.libelle-col[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.tiers-col[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 12.5px;\n}\n.compte-col[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.compte-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6F42C1;\n  background: rgba(111, 66, 193, 0.1);\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-family: monospace;\n}\n.amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-family: "Inter", sans-serif;\n  font-size: 12.5px;\n}\n.amount.green[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.amount.red[_ngcontent-%COMP%] {\n  color: #DC2626;\n}\n.total-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--text-muted);\n  font-weight: 700;\n}\n.total[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n}\n.total.green[_ngcontent-%COMP%] {\n  color: #16A34A;\n}\n.total.red[_ngcontent-%COMP%] {\n  color: #DC2626;\n}\n.total.primary[_ngcontent-%COMP%] {\n  color: #6F42C1;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .brouillard-page[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .brouillard-doc[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: 0;\n  }\n}\n/*# sourceMappingURL=brouillard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrouillardComponent, [{
    type: Component,
    args: [{ selector: "app-brouillard", standalone: true, imports: [CommonModule, FormsModule, AuditTrailComponent], template: `<div class="brouillard-page">
  <div class="page-header no-print">
    <div class="page-title">
      <span class="material-icons">receipt_long</span>
      <div>
        <h1>Brouillard de caisse</h1>
        <p>R\xE9capitulatif de toutes les op\xE9rations d'une journ\xE9e</p>
      </div>
    </div>
    @if (brouillard) {
      <button class="btn-print" (click)="print()">
        <span class="material-icons">print</span>
        Imprimer
      </button>
    }
  </div>

  <!-- S\xE9lecteurs -->
  <div class="selectors no-print">
    <div class="selector-row">
      <div class="sel-field">
        <label>Caisse</label>
        <select [(ngModel)]="selectedCaisseId">
          <option [value]="0">\u2014 S\xE9lectionner \u2014</option>
          @for (c of caisses; track c.id) {
            <option [value]="c.id">{{ c.name }}</option>
          }
        </select>
      </div>
      <div class="sel-field">
        <label>Date de session</label>
        <input type="date" [(ngModel)]="selectedDate" />
      </div>
      <button class="btn-load" (click)="load()" [disabled]="!selectedCaisseId || !selectedDate">
        <span class="material-icons">search</span>
        Afficher
      </button>
    </div>
  </div>

  @if (loading) {
    <div class="loading-row"><span class="material-icons spin">sync</span> Chargement\u2026</div>
  }

  @if (error) {
    <div class="error-row">
      <span class="material-icons">error_outline</span>
      {{ error }}
    </div>
  }

  @if (!loading && brouillard) {
    <div class="brouillard-doc">
      <!-- En-t\xEAte brouillard -->
      <div class="brou-header">
        <div class="brou-title">
          <h2>BROUILLARD DE CAISSE</h2>
          <div class="brou-subtitle">{{ brouillard.caisseName }} \u2014 {{ brouillard.dateSession | date:'EEEE d MMMM yyyy' }}</div>
        </div>
        <div class="brou-meta">
          <div class="meta-item">
            <span>Journal :</span>
            <strong>{{ brouillard.journalCode }} \u2014 {{ brouillard.journalName }}</strong>
          </div>
          <div class="meta-item">
            <span>Statut :</span>
            <span class="status-chip" [class.cloturee]="brouillard.status === 'CLOTUREE'"
                  [class.ouverte]="brouillard.status !== 'CLOTUREE'">
              {{ brouillard.status }}
            </span>
          </div>
          @if (brouillard.dateCloture) {
            <div class="meta-item">
              <span>Cl\xF4tur\xE9 le :</span>
              <strong>{{ brouillard.dateCloture | date:'dd/MM/yyyy HH:mm' }}</strong>
            </div>
          }
        </div>
      </div>

      <!-- KPIs -->
      <div class="kpi-row">
        <div class="kpi">
          <div class="kpi-label">Solde de d\xE9but</div>
          <div class="kpi-value neutral">{{ formatAmount(brouillard.soldeDebut) }}</div>
        </div>
        <div class="kpi">
          <div class="kpi-label">Total entr\xE9es</div>
          <div class="kpi-value green">{{ formatAmount(brouillard.totalEntrees) }}</div>
        </div>
        <div class="kpi">
          <div class="kpi-label">Total sorties</div>
          <div class="kpi-value red">{{ formatAmount(brouillard.totalSorties) }}</div>
        </div>
        <div class="kpi kpi-final">
          <div class="kpi-label">Solde final</div>
          <div class="kpi-value primary">{{ formatAmount(brouillard.soldeFin) }}</div>
        </div>
      </div>

      <!-- Tableau des lignes -->
      @if (brouillard.lines.length === 0) {
        <div class="empty-lines">
          <span class="material-icons">receipt</span>
          Aucune op\xE9ration enregistr\xE9e pour cette journ\xE9e.
        </div>
      } @else {
        <div class="lines-wrap">
          <table class="lines-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>R\xE9f\xE9rence</th>
                <th>Libell\xE9</th>
                <th>Tiers</th>
                <th>Compte</th>
                <th class="text-right">D\xE9bit</th>
                <th class="text-right">Cr\xE9dit</th>
                <th class="text-right">Solde</th>
              </tr>
            </thead>
            <tbody>
              @for (line of brouillard.lines; let i = $index; track i) {
                <tr>
                  <td class="date-col">{{ line.date | date:'dd/MM' }}</td>
                  <td class="mono ref-col">{{ line.ref || '\u2014' }}</td>
                  <td class="libelle-col">{{ line.libelle || '\u2014' }}</td>
                  <td class="tiers-col">{{ line.tiersName || '\u2014' }}</td>
                  <td class="mono compte-col">
                    @if (line.compteCode) {
                      <span class="compte-badge">{{ line.compteCode }}</span>
                    }
                  </td>
                  <td class="text-right amount green">{{ line.debit > 0 ? formatAmount(line.debit) : '' }}</td>
                  <td class="text-right amount red">{{ line.credit > 0 ? formatAmount(line.credit) : '' }}</td>
                  <td class="text-right amount">\u2014</td>
                </tr>
              }
            </tbody>
            <tfoot>
              <tr>
                <td colspan="5" class="total-label">TOTAUX</td>
                <td class="text-right total green">{{ formatAmount(brouillard.totalEntrees) }}</td>
                <td class="text-right total red">{{ formatAmount(brouillard.totalSorties) }}</td>
                <td class="text-right total primary">{{ formatAmount(brouillard.soldeFin) }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      }

      <app-audit-trail entityType="CAISSE" [entityId]="selectedCaisseId"></app-audit-trail>
    </div>
  }
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/caisses/components/brouillard/brouillard.component.scss */\n.brouillard-page {\n  padding: 28px 32px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 16px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header .page-title .material-icons {\n  font-size: 32px;\n  color: #6F42C1;\n}\n.page-header .page-title h1 {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  font-family: "Inter", sans-serif;\n}\n.page-header .page-title p {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-print {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  background: #6F42C1;\n  border: none;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.btn-print .material-icons {\n  font-size: 17px;\n}\n.btn-print:hover {\n  background: #5a32a3;\n}\n.selectors {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-light);\n  border-radius: 12px;\n  padding: 16px 20px;\n  margin-bottom: 20px;\n}\n.selector-row {\n  display: flex;\n  align-items: flex-end;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.sel-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.sel-field label {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.sel-field select,\n.sel-field input {\n  padding: 9px 12px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  color: var(--text-primary);\n  font-size: 13.5px;\n  outline: none;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.sel-field select:focus,\n.sel-field input:focus {\n  border-color: #6F42C1;\n}\n.sel-field select,\n.sel-field input {\n  min-width: 200px;\n}\n.btn-load {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 8px;\n  background: #6F42C1;\n  border: none;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: all 0.2s;\n}\n.btn-load .material-icons {\n  font-size: 16px;\n}\n.btn-load:hover:not(:disabled) {\n  background: #5a32a3;\n}\n.btn-load:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.loading-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 20px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.error-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n  border-radius: 10px;\n  background: #FEF2F2;\n  border: 1px solid #FECACA;\n  color: #DC2626;\n  font-size: 13px;\n}\n.brouillard-doc {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-light);\n  border-radius: 14px;\n  overflow: hidden;\n}\n.brou-header {\n  background:\n    linear-gradient(\n      135deg,\n      #6F42C1 0%,\n      #8B5CF6 100%);\n  padding: 22px 24px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.brou-title h2 {\n  font-size: 18px;\n  font-weight: 800;\n  color: white;\n  margin: 0 0 6px;\n  letter-spacing: 1px;\n  font-family: "Inter", sans-serif;\n}\n.brou-title .brou-subtitle {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.75);\n  text-transform: capitalize;\n}\n.brou-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  text-align: right;\n}\n.meta-item {\n  font-size: 12.5px;\n  color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  justify-content: flex-end;\n}\n.meta-item span {\n  color: rgba(255, 255, 255, 0.6);\n}\n.meta-item strong {\n  color: white;\n}\n.status-chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-chip.cloturee {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.status-chip.ouverte {\n  background: rgba(34, 197, 94, 0.3);\n  color: #86EFAC;\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  border-bottom: 1px solid var(--border-light);\n}\n.kpi {\n  padding: 18px 20px;\n  border-right: 1px solid var(--border-light);\n}\n.kpi:last-child {\n  border-right: none;\n}\n.kpi.kpi-final {\n  background: rgba(111, 66, 193, 0.05);\n}\n.kpi-label {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.kpi-value {\n  font-size: 18px;\n  font-weight: 700;\n  font-family: "Inter", sans-serif;\n}\n.kpi-value.neutral {\n  color: var(--text-primary);\n}\n.kpi-value.green {\n  color: #16A34A;\n}\n.kpi-value.red {\n  color: #DC2626;\n}\n.kpi-value.primary {\n  color: #6F42C1;\n}\n.empty-lines {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 32px 24px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.empty-lines .material-icons {\n  font-size: 22px;\n}\n.lines-wrap {\n  overflow-x: auto;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table th {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--text-muted);\n  background: var(--bg-page);\n  border-bottom: 1px solid var(--border);\n}\n.lines-table td {\n  padding: 10px 14px;\n  font-size: 12.5px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n}\n.lines-table tbody tr:nth-child(even) td {\n  background: rgba(0, 0, 0, 0.015);\n}\n.lines-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.lines-table tfoot td {\n  border-top: 2px solid var(--border);\n  border-bottom: none;\n  background: var(--bg-page);\n  padding: 12px 14px;\n}\n.date-col {\n  white-space: nowrap;\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.ref-col {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.libelle-col {\n  max-width: 200px;\n}\n.tiers-col {\n  color: var(--text-muted);\n  font-size: 12.5px;\n}\n.compte-col {\n  white-space: nowrap;\n}\n.text-right {\n  text-align: right !important;\n}\n.mono {\n  font-family: monospace;\n}\n.compte-badge {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6F42C1;\n  background: rgba(111, 66, 193, 0.1);\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-family: monospace;\n}\n.amount {\n  font-weight: 600;\n  font-family: "Inter", sans-serif;\n  font-size: 12.5px;\n}\n.amount.green {\n  color: #16A34A;\n}\n.amount.red {\n  color: #DC2626;\n}\n.total-label {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--text-muted);\n  font-weight: 700;\n}\n.total {\n  font-weight: 700;\n  font-size: 14px;\n}\n.total.green {\n  color: #16A34A;\n}\n.total.red {\n  color: #DC2626;\n}\n.total.primary {\n  color: #6F42C1;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media print {\n  .no-print {\n    display: none !important;\n  }\n  .brouillard-page {\n    padding: 0;\n  }\n  .brouillard-doc {\n    border: none;\n    border-radius: 0;\n  }\n}\n/*# sourceMappingURL=brouillard.component.css.map */\n'] }]
  }], () => [{ type: CaisseService }, { type: AuthService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrouillardComponent, { className: "BrouillardComponent", filePath: "app/modules/caisses/components/brouillard/brouillard.component.ts", lineNumber: 17 });
})();
export {
  BrouillardComponent
};
//# sourceMappingURL=chunk-SYCNZYTR.js.map
