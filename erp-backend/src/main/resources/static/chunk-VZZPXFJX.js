import {
  CaisseService
} from "./chunk-MBTSHWNJ.js";
import {
  formatFCFA
} from "./chunk-TKYALNMA.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-4W3TIS2I.js";
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
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/caisses/components/rapport-cloture/rapport-cloture.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.id;
function RapportClotureComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 8);
    \u0275\u0275domListener("click", function RapportClotureComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275domElementStart(1, "span", 3);
    \u0275\u0275text(2, "print");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Imprimer");
    \u0275\u0275domElementEnd();
  }
}
function RapportClotureComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5)(1, "span", 9);
    \u0275\u0275text(2, "sync");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Chargement\u2026");
    \u0275\u0275domElementEnd();
  }
}
function RapportClotureComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error);
  }
}
function RapportClotureComponent_Conditional_10_Conditional_19_Conditional_16_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const l_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(l_r3.valeur));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r3.quantite);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(l_r3.total));
  }
}
function RapportClotureComponent_Conditional_10_Conditional_19_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 17)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Coupure");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th");
    \u0275\u0275text(6, "Valeur");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th");
    \u0275\u0275text(8, "Qt\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th");
    \u0275\u0275text(10, "Total");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, RapportClotureComponent_Conditional_10_Conditional_19_Conditional_16_For_13_Template, 9, 4, "tr", null, _forTrack0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.rapport.countsOuverture);
  }
}
function RapportClotureComponent_Conditional_10_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 15)(1, "div", 16)(2, "span");
    \u0275\u0275text(3, "Solde th\xE9orique");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 16)(7, "span");
    \u0275\u0275text(8, "Compt\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "div", 16)(12, "span");
    \u0275\u0275text(13, "\xC9cart");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(16, RapportClotureComponent_Conditional_10_Conditional_19_Conditional_16_Template, 14, 0, "table", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.rapport.soldeDebut));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.rapport.montantCompteOuverture));
    \u0275\u0275advance();
    \u0275\u0275classProp("warn", ctx_r1.rapport.ecartOuverture);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.rapport.ecartOuverture));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.rapport.countsOuverture.length ? 16 : -1);
  }
}
function RapportClotureComponent_Conditional_10_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 14);
    \u0275\u0275text(1, "Ouverture non contr\xF4l\xE9e \u2014 aucun comptage effectu\xE9.");
    \u0275\u0275domElementEnd();
  }
}
function RapportClotureComponent_Conditional_10_Conditional_35_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const op_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, op_r4.createdAt, "HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(op_r4.type === "ENTREE" ? "Entr\xE9e" : "Sortie");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(op_r4.libelle || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(op_r4.tiersName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(op_r4.montant));
  }
}
function RapportClotureComponent_Conditional_10_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 17)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Heure");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th");
    \u0275\u0275text(6, "Type");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th");
    \u0275\u0275text(8, "Libell\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th");
    \u0275\u0275text(10, "Tiers");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "th");
    \u0275\u0275text(12, "Montant");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, RapportClotureComponent_Conditional_10_Conditional_35_For_15_Template, 12, 8, "tr", null, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.rapport.operations);
  }
}
function RapportClotureComponent_Conditional_10_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 14);
    \u0275\u0275text(1, "Aucune op\xE9ration enregistr\xE9e ce jour.");
    \u0275\u0275domElementEnd();
  }
}
function RapportClotureComponent_Conditional_10_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 16)(1, "span");
    \u0275\u0275text(2, "Compt\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 16)(6, "span");
    \u0275\u0275text(7, "\xC9cart");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.rapport.montantCompteCloture));
    \u0275\u0275advance();
    \u0275\u0275classProp("warn", ctx_r1.rapport.ecartDepasseSeuil);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.rapport.ecart));
  }
}
function RapportClotureComponent_Conditional_10_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 18)(1, "span", 3);
    \u0275\u0275text(2, "warning");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" L'\xE9cart d\xE9passe le seuil tol\xE9r\xE9 (", ctx_r1.formatAmount(ctx_r1.rapport.seuilEcart), "). ");
  }
}
function RapportClotureComponent_Conditional_10_Conditional_48_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const l_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(l_r5.valeur));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r5.quantite);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(l_r5.total));
  }
}
function RapportClotureComponent_Conditional_10_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "table", 17)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Coupure");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "th");
    \u0275\u0275text(6, "Valeur");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "th");
    \u0275\u0275text(8, "Qt\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "th");
    \u0275\u0275text(10, "Total");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, RapportClotureComponent_Conditional_10_Conditional_48_For_13_Template, 9, 4, "tr", null, _forTrack0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.rapport.countsCloture);
  }
}
function RapportClotureComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7)(1, "div", 10)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 12)(8, "span");
    \u0275\u0275text(9, "Ouvert/cl\xF4tur\xE9 par : ");
    \u0275\u0275domElementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(12, "span");
    \u0275\u0275text(13, "Statut : ");
    \u0275\u0275domElementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(16, "div", 13)(17, "h3");
    \u0275\u0275text(18, "Ouverture");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(19, RapportClotureComponent_Conditional_10_Conditional_19_Template, 17, 6)(20, RapportClotureComponent_Conditional_10_Conditional_20_Template, 2, 0, "p", 14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "div", 13)(22, "h3");
    \u0275\u0275text(23, "Mouvements du jour");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "div", 15)(25, "div", 16)(26, "span");
    \u0275\u0275text(27, "Entr\xE9es");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(30, "div", 16)(31, "span");
    \u0275\u0275text(32, "Sorties");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275conditionalCreate(35, RapportClotureComponent_Conditional_10_Conditional_35_Template, 16, 0, "table", 17)(36, RapportClotureComponent_Conditional_10_Conditional_36_Template, 2, 0, "p", 14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(37, "div", 13)(38, "h3");
    \u0275\u0275text(39, "Cl\xF4ture");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(40, "div", 15)(41, "div", 16)(42, "span");
    \u0275\u0275text(43, "Solde th\xE9orique");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(44, "strong");
    \u0275\u0275text(45);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(46, RapportClotureComponent_Conditional_10_Conditional_46_Template, 10, 4);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(47, RapportClotureComponent_Conditional_10_Conditional_47_Template, 4, 1, "div", 18);
    \u0275\u0275conditionalCreate(48, RapportClotureComponent_Conditional_10_Conditional_48_Template, 14, 0, "table", 17);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.rapport.caisseName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 12, ctx_r1.rapport.dateSession, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.rapport.createdBy || "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.rapport.status);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.rapport.ouvertureControlee ? 19 : 20);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.rapport.totalEntrees));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.rapport.totalSorties));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.rapport.operations.length ? 35 : 36);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(ctx_r1.rapport.soldeFin));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.rapport.montantCompteCloture != null ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.rapport.ecartDepasseSeuil ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.rapport.countsCloture.length ? 48 : -1);
  }
}
var RapportClotureComponent = class _RapportClotureComponent {
  constructor(caisseService, route, router) {
    this.caisseService = caisseService;
    this.route = route;
    this.router = router;
    this.rapport = null;
    this.loading = true;
    this.error = "";
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("sessionId"));
    if (!id) {
      this.error = "Session invalide.";
      this.loading = false;
      return;
    }
    this.caisseService.getRapportCloture(id).subscribe({
      next: (data) => {
        this.rapport = data;
        this.loading = false;
      },
      error: (e) => {
        this.error = e.error?.message || "Erreur chargement.";
        this.loading = false;
      }
    });
  }
  formatAmount(v) {
    return v == null ? "\u2014" : formatFCFA(v);
  }
  print() {
    window.print();
  }
  static {
    this.\u0275fac = function RapportClotureComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RapportClotureComponent)(\u0275\u0275directiveInject(CaisseService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RapportClotureComponent, selectors: [["app-rapport-cloture"]], decls: 11, vars: 4, consts: [[1, "report-page"], [1, "page-header", "no-print"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "btn-print"], [1, "state-row"], [1, "state-row", "error"], [1, "report-card"], [1, "btn-print", 3, "click"], [1, "material-icons", "spin"], [1, "report-title"], [1, "date"], [1, "meta-row"], [1, "section"], [1, "muted"], [1, "kpi-row"], [1, "kpi"], [1, "counts-table"], [1, "alert-warn"]], template: function RapportClotureComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275domListener("click", function RapportClotureComponent_Template_button_click_2_listener() {
          return ctx.router.navigate(["/caisses/dashboard"]);
        });
        \u0275\u0275domElementStart(3, "span", 3);
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(5, "h1");
        \u0275\u0275text(6, "Rapport de cl\xF4ture");
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(7, RapportClotureComponent_Conditional_7_Template, 4, 0, "button", 4);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(8, RapportClotureComponent_Conditional_8_Template, 4, 0, "div", 5);
        \u0275\u0275conditionalCreate(9, RapportClotureComponent_Conditional_9_Template, 4, 1, "div", 6);
        \u0275\u0275conditionalCreate(10, RapportClotureComponent_Conditional_10_Template, 49, 15, "div", 7);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.rapport ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.rapport ? 10 : -1);
      }
    }, dependencies: [CommonModule, DatePipe], styles: ["\n.report-page[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-back[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-print[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  background: #16A34A;\n  color: white;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 13px;\n}\n.btn-print[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.state-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 20px;\n  color: var(--text-muted);\n}\n.state-row.error[_ngcontent-%COMP%] {\n  color: #DC2626;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.report-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 24px;\n}\n.report-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.report-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  color: var(--text-primary);\n}\n.report-title[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--border);\n}\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: var(--text-muted);\n  margin: 0 0 10px;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n}\n.kpi[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: var(--bg-hover);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.kpi[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.kpi[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-primary);\n}\n.kpi.warn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #D97706;\n}\n.counts-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n  margin-top: 8px;\n}\n.counts-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 6px 8px;\n  color: var(--text-muted);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n}\n.counts-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border-bottom: 1px solid var(--border-light, var(--border));\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.alert-warn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: rgba(217, 119, 6, 0.1);\n  color: #D97706;\n  font-size: 13px;\n  margin-bottom: 10px;\n}\n.alert-warn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .report-page[_ngcontent-%COMP%] {\n    padding: 0;\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=rapport-cloture.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RapportClotureComponent, [{
    type: Component,
    args: [{ selector: "app-rapport-cloture", standalone: true, imports: [CommonModule], template: `<div class="report-page">
  <div class="page-header no-print">
    <button class="btn-back" (click)="router.navigate(['/caisses/dashboard'])">
      <span class="material-icons">arrow_back</span>
    </button>
    <h1>Rapport de cl\xF4ture</h1>
    @if (rapport) {
      <button class="btn-print" (click)="print()"><span class="material-icons">print</span> Imprimer</button>
    }
  </div>

  @if (loading) {
    <div class="state-row"><span class="material-icons spin">sync</span> Chargement\u2026</div>
  }
  @if (error) {
    <div class="state-row error"><span class="material-icons">error_outline</span> {{ error }}</div>
  }

  @if (rapport) {
    <div class="report-card">
      <div class="report-title">
        <h2>{{ rapport.caisseName }}</h2>
        <span class="date">{{ rapport.dateSession | date:'dd/MM/yyyy' }}</span>
      </div>
      <div class="meta-row">
        <span>Ouvert/cl\xF4tur\xE9 par : <strong>{{ rapport.createdBy || '\u2014' }}</strong></span>
        <span>Statut : <strong>{{ rapport.status }}</strong></span>
      </div>

      <div class="section">
        <h3>Ouverture</h3>
        @if (rapport.ouvertureControlee) {
          <div class="kpi-row">
            <div class="kpi"><span>Solde th\xE9orique</span><strong>{{ formatAmount(rapport.soldeDebut) }}</strong></div>
            <div class="kpi"><span>Compt\xE9</span><strong>{{ formatAmount(rapport.montantCompteOuverture) }}</strong></div>
            <div class="kpi" [class.warn]="rapport.ecartOuverture"><span>\xC9cart</span><strong>{{ formatAmount(rapport.ecartOuverture) }}</strong></div>
          </div>
          @if (rapport.countsOuverture.length) {
            <table class="counts-table">
              <thead><tr><th>Coupure</th><th>Valeur</th><th>Qt\xE9</th><th>Total</th></tr></thead>
              <tbody>
                @for (l of rapport.countsOuverture; track l.label) {
                  <tr><td>{{ l.label }}</td><td>{{ formatAmount(l.valeur) }}</td><td>{{ l.quantite }}</td><td>{{ formatAmount(l.total) }}</td></tr>
                }
              </tbody>
            </table>
          }
        } @else {
          <p class="muted">Ouverture non contr\xF4l\xE9e \u2014 aucun comptage effectu\xE9.</p>
        }
      </div>

      <div class="section">
        <h3>Mouvements du jour</h3>
        <div class="kpi-row">
          <div class="kpi"><span>Entr\xE9es</span><strong>{{ formatAmount(rapport.totalEntrees) }}</strong></div>
          <div class="kpi"><span>Sorties</span><strong>{{ formatAmount(rapport.totalSorties) }}</strong></div>
        </div>
        @if (rapport.operations.length) {
          <table class="counts-table">
            <thead><tr><th>Heure</th><th>Type</th><th>Libell\xE9</th><th>Tiers</th><th>Montant</th></tr></thead>
            <tbody>
              @for (op of rapport.operations; track op.id) {
                <tr>
                  <td>{{ op.createdAt | date:'HH:mm' }}</td>
                  <td>{{ op.type === 'ENTREE' ? 'Entr\xE9e' : 'Sortie' }}</td>
                  <td>{{ op.libelle || '\u2014' }}</td>
                  <td>{{ op.tiersName || '\u2014' }}</td>
                  <td>{{ formatAmount(op.montant) }}</td>
                </tr>
              }
            </tbody>
          </table>
        } @else {
          <p class="muted">Aucune op\xE9ration enregistr\xE9e ce jour.</p>
        }
      </div>

      <div class="section">
        <h3>Cl\xF4ture</h3>
        <div class="kpi-row">
          <div class="kpi"><span>Solde th\xE9orique</span><strong>{{ formatAmount(rapport.soldeFin) }}</strong></div>
          @if (rapport.montantCompteCloture != null) {
            <div class="kpi"><span>Compt\xE9</span><strong>{{ formatAmount(rapport.montantCompteCloture) }}</strong></div>
            <div class="kpi" [class.warn]="rapport.ecartDepasseSeuil"><span>\xC9cart</span><strong>{{ formatAmount(rapport.ecart) }}</strong></div>
          }
        </div>
        @if (rapport.ecartDepasseSeuil) {
          <div class="alert-warn">
            <span class="material-icons">warning</span>
            L'\xE9cart d\xE9passe le seuil tol\xE9r\xE9 ({{ formatAmount(rapport.seuilEcart) }}).
          </div>
        }
        @if (rapport.countsCloture.length) {
          <table class="counts-table">
            <thead><tr><th>Coupure</th><th>Valeur</th><th>Qt\xE9</th><th>Total</th></tr></thead>
            <tbody>
              @for (l of rapport.countsCloture; track l.label) {
                <tr><td>{{ l.label }}</td><td>{{ formatAmount(l.valeur) }}</td><td>{{ l.quantite }}</td><td>{{ formatAmount(l.total) }}</td></tr>
              }
            </tbody>
          </table>
        }
      </div>
    </div>
  }
</div>
`, styles: ["/* src/app/modules/caisses/components/rapport-cloture/rapport-cloture.component.scss */\n.report-page {\n  padding: 24px 32px;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.page-header h1 {\n  flex: 1;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-back {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-print {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  background: #16A34A;\n  color: white;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 13px;\n}\n.btn-print .material-icons {\n  font-size: 16px;\n}\n.state-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 20px;\n  color: var(--text-muted);\n}\n.state-row.error {\n  color: #DC2626;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.report-card {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 24px;\n}\n.report-title {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.report-title h2 {\n  margin: 0;\n  font-size: 18px;\n  color: var(--text-primary);\n}\n.report-title .date {\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.meta-row {\n  display: flex;\n  gap: 20px;\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--border);\n}\n.section {\n  margin-bottom: 22px;\n}\n.section:last-child {\n  margin-bottom: 0;\n}\n.section h3 {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: var(--text-muted);\n  margin: 0 0 10px;\n}\n.kpi-row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n}\n.kpi {\n  flex: 1;\n  min-width: 140px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: var(--bg-hover);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.kpi span {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.kpi strong {\n  font-size: 15px;\n  color: var(--text-primary);\n}\n.kpi.warn strong {\n  color: #D97706;\n}\n.counts-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n  margin-top: 8px;\n}\n.counts-table th {\n  text-align: left;\n  padding: 6px 8px;\n  color: var(--text-muted);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n}\n.counts-table td {\n  padding: 6px 8px;\n  border-bottom: 1px solid var(--border-light, var(--border));\n}\n.muted {\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.alert-warn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: rgba(217, 119, 6, 0.1);\n  color: #D97706;\n  font-size: 13px;\n  margin-bottom: 10px;\n}\n.alert-warn .material-icons {\n  font-size: 18px;\n}\n@media print {\n  .no-print {\n    display: none !important;\n  }\n  .report-page {\n    padding: 0;\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=rapport-cloture.component.css.map */\n"] }]
  }], () => [{ type: CaisseService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RapportClotureComponent, { className: "RapportClotureComponent", filePath: "app/modules/caisses/components/rapport-cloture/rapport-cloture.component.ts", lineNumber: 14 });
})();
export {
  RapportClotureComponent
};
//# sourceMappingURL=chunk-VZZPXFJX.js.map
