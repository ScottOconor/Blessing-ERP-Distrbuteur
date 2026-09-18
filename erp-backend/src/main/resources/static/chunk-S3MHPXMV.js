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
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-NRXD6HPP.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/caisses/components/count-modal/caisse-count-modal.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CaisseCountModalComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 12);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement des coupures\u2026");
    \u0275\u0275elementEnd();
  }
}
function CaisseCountModalComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 3);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Aucune coupure configur\xE9e pour cette soci\xE9t\xE9 \u2014 configurez-les dans Gestion des caisses, ou ignorez le comptage. ");
    \u0275\u0275elementEnd();
  }
}
function CaisseCountModalComponent_Conditional_10_Conditional_3_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function CaisseCountModalComponent_Conditional_10_Conditional_3_For_13_Template_input_ngModelChange_5_listener($event) {
      const d_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r4.quantities[d_r4.id], $event) || (ctx_r4.quantities[d_r4.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.formatAmount(d_r4.valeur));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.quantities[d_r4.id]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.formatAmount((ctx_r4.quantities[d_r4.id] || 0) * d_r4.valeur));
  }
}
function CaisseCountModalComponent_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "Comptez les esp\xE8ces pr\xE9sentes dans le tiroir, coupure par coupure. Le comptage est recommand\xE9 mais facultatif.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 14)(3, "div", 15)(4, "span");
    \u0275\u0275text(5, "Coupure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Valeur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(12, CaisseCountModalComponent_Conditional_10_Conditional_3_For_13_Template, 8, 4, "div", 16, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 17)(15, "span");
    \u0275\u0275text(16, "Total compt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 18)(20, "label");
    \u0275\u0275text(21, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function CaisseCountModalComponent_Conditional_10_Conditional_3_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r4 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r4.notes, $event) || (ctx_r4.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r4.denominations);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r4.formatAmount(ctx_r4.total));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.notes);
  }
}
function CaisseCountModalComponent_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r4.error);
  }
}
function CaisseCountModalComponent_Conditional_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function CaisseCountModalComponent_Conditional_10_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function CaisseCountModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, CaisseCountModalComponent_Conditional_10_Conditional_1_Template, 4, 0, "div", 6)(2, CaisseCountModalComponent_Conditional_10_Conditional_2_Template, 4, 0, "div", 7)(3, CaisseCountModalComponent_Conditional_10_Conditional_3_Template, 23, 2);
    \u0275\u0275conditionalCreate(4, CaisseCountModalComponent_Conditional_10_Conditional_4_Template, 4, 1, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "button", 10);
    \u0275\u0275listener("click", function CaisseCountModalComponent_Conditional_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.skip());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 11);
    \u0275\u0275listener("click", function CaisseCountModalComponent_Conditional_10_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.confirm());
    });
    \u0275\u0275conditionalCreate(9, CaisseCountModalComponent_Conditional_10_Conditional_9_Template, 2, 0, "span", 12)(10, CaisseCountModalComponent_Conditional_10_Conditional_10_Template, 2, 0, "span", 3);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.loading ? 1 : ctx_r4.denominations.length === 0 ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r4.error ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r4.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.mode === "ouverture" ? "Ouvrir sans comptage" : "Cl\xF4turer sans comptage", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.saving || ctx_r4.loading || !ctx_r4.hasAnyCount);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.saving ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r4.saving ? "Enregistrement\u2026" : ctx_r4.mode === "ouverture" ? "Ouvrir avec ce comptage" : "Cl\xF4turer avec ce comptage", " ");
  }
}
function CaisseCountModalComponent_Conditional_11_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, "Solde th\xE9orique : ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 30);
    \u0275\u0275text(5, "Compt\xE9 : ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 30);
    \u0275\u0275text(9, " \xC9cart : ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.formatAmount(ctx_r4.result.soldeDebut));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r4.formatAmount(ctx_r4.result.montantCompteOuverture));
    \u0275\u0275advance();
    \u0275\u0275classProp("ecart-warn", ctx_r4.result.ecartOuverture);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.formatAmount(ctx_r4.result.ecartOuverture));
  }
}
function CaisseCountModalComponent_Conditional_11_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, "Ouverture sans comptage \u2014 aucun \xE9cart calcul\xE9.");
    \u0275\u0275elementEnd();
  }
}
function CaisseCountModalComponent_Conditional_11_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CaisseCountModalComponent_Conditional_11_Conditional_6_Conditional_0_Template, 12, 5)(1, CaisseCountModalComponent_Conditional_11_Conditional_6_Conditional_1_Template, 2, 0, "p", 29);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r4.result.ouvertureControlee ? 0 : 1);
  }
}
function CaisseCountModalComponent_Conditional_11_Conditional_7_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "d\xE9passe le seuil");
    \u0275\u0275elementEnd();
  }
}
function CaisseCountModalComponent_Conditional_11_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, "Compt\xE9 : ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 30);
    \u0275\u0275text(5, " \xC9cart : ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, CaisseCountModalComponent_Conditional_11_Conditional_7_Conditional_4_Conditional_8_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.formatAmount(ctx_r4.result.montantCompteCloture));
    \u0275\u0275advance();
    \u0275\u0275classProp("ecart-warn", ctx_r4.result.ecartDepasseSeuil);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.formatAmount(ctx_r4.result.ecart));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.result.ecartDepasseSeuil ? 8 : -1);
  }
}
function CaisseCountModalComponent_Conditional_11_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29);
    \u0275\u0275text(1, "Cl\xF4ture sans comptage \u2014 aucun \xE9cart calcul\xE9.");
    \u0275\u0275elementEnd();
  }
}
function CaisseCountModalComponent_Conditional_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, "Solde th\xE9orique : ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, CaisseCountModalComponent_Conditional_11_Conditional_7_Conditional_4_Template, 9, 5)(5, CaisseCountModalComponent_Conditional_11_Conditional_7_Conditional_5_Template, 2, 0, "p", 29);
    \u0275\u0275elementStart(6, "p", 29);
    \u0275\u0275text(7, "La caisse a \xE9t\xE9 vid\xE9e vers le compte 585000 (virements de fonds) \u2014 la prochaine ouverture repartira d'un solde \xE0 z\xE9ro.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.formatAmount(ctx_r4.result.soldeFin));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.result.ouvertureControlee || ctx_r4.result.montantCompteCloture ? 4 : 5);
  }
}
function CaisseCountModalComponent_Conditional_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function CaisseCountModalComponent_Conditional_11_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.voirRapport());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "summarize");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Voir le rapport ");
    \u0275\u0275elementEnd();
  }
}
function CaisseCountModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "span", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CaisseCountModalComponent_Conditional_11_Conditional_6_Template, 2, 1)(7, CaisseCountModalComponent_Conditional_11_Conditional_7_Template, 8, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9);
    \u0275\u0275conditionalCreate(9, CaisseCountModalComponent_Conditional_11_Conditional_9_Template, 4, 0, "button", 27);
    \u0275\u0275elementStart(10, "button", 28);
    \u0275\u0275listener("click", function CaisseCountModalComponent_Conditional_11_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.close());
    });
    \u0275\u0275elementStart(11, "span", 3);
    \u0275\u0275text(12, "done");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Fermer ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("warn", ctx_r4.result.ecartDepasseSeuil);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.result.ecartDepasseSeuil ? "warning" : "check_circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r4.mode === "ouverture" ? "Caisse ouverte" : "Caisse cl\xF4tur\xE9e", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.mode === "ouverture" ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r4.mode === "cloture" ? 9 : -1);
  }
}
var CaisseCountModalComponent = class _CaisseCountModalComponent {
  constructor(caisseService, authService, router) {
    this.caisseService = caisseService;
    this.authService = authService;
    this.router = router;
    this.closed = new EventEmitter();
    this.denominations = [];
    this.quantities = {};
    this.notes = "";
    this.loading = false;
    this.saving = false;
    this.error = "";
    this.result = null;
  }
  voirRapport() {
    if (!this.result?.id)
      return;
    this.router.navigate(["/caisses/rapport-cloture", this.result.id]);
    this.closed.emit(this.result);
  }
  get title() {
    return this.mode === "ouverture" ? "Ouvrir la caisse" : "Cl\xF4turer la caisse";
  }
  ngOnInit() {
    this.loading = true;
    this.caisseService.getDenominations(this.authService.getCompanyId()).subscribe({
      next: (data) => {
        this.denominations = data.filter((d) => d.active !== false);
        this.denominations.forEach((d) => this.quantities[d.id] = 0);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  get total() {
    return this.denominations.reduce((sum, d) => sum + (this.quantities[d.id] || 0) * d.valeur, 0);
  }
  get hasAnyCount() {
    return Object.values(this.quantities).some((q) => (q || 0) > 0);
  }
  close() {
    this.closed.emit(this.result);
  }
  skip() {
    this.confirm(true);
  }
  confirm(skipCount = false) {
    this.saving = true;
    this.error = "";
    const counts = skipCount ? [] : this.denominations.filter((d) => (this.quantities[d.id] || 0) > 0).map((d) => ({ denominationId: d.id, quantite: this.quantities[d.id] }));
    const companyId = this.authService.getCompanyId();
    const obs = this.mode === "ouverture" ? this.caisseService.ouvrirSession(this.caisse.id, { companyId, counts, notes: this.notes }) : this.caisseService.cloturerCaisse(this.caisse.id, companyId, { companyId, counts, notes: this.notes });
    obs.subscribe({
      next: (session) => {
        this.saving = false;
        this.result = session;
      },
      error: (e) => {
        this.saving = false;
        this.error = e.error?.message || "Erreur lors de l'op\xE9ration.";
      }
    });
  }
  formatAmount(v) {
    return formatFCFA(v);
  }
  static {
    this.\u0275fac = function CaisseCountModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CaisseCountModalComponent)(\u0275\u0275directiveInject(CaisseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaisseCountModalComponent, selectors: [["app-caisse-count-modal"]], inputs: { caisse: "caisse", mode: "mode" }, outputs: { closed: "closed" }, decls: 12, vars: 4, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-box", 3, "click"], [1, "modal-header"], [1, "material-icons"], [1, "btn-close", 3, "click"], [1, "modal-body"], [1, "loading-row"], [1, "empty-row"], [1, "error-row"], [1, "modal-footer"], [1, "btn-cancel", 3, "click", "disabled"], [1, "btn-save", 3, "click", "disabled"], [1, "material-icons", "spin"], [1, "hint"], [1, "count-grid"], [1, "count-head"], [1, "count-row"], [1, "total-row"], [1, "form-row"], ["type", "text", "placeholder", "Facultatif", 3, "ngModelChange", "ngModel"], [1, "d-label"], [1, "d-valeur"], ["type", "number", "min", "0", 1, "d-qty", 3, "ngModelChange", "ngModel"], [1, "d-total"], [1, "modal-body", "result-body"], [1, "result-icon"], [1, "result-title"], [1, "btn-cancel"], [1, "btn-save", 3, "click"], [1, "result-line", "muted"], [1, "result-line"], [1, "badge-warn"], [1, "btn-cancel", 3, "click"]], template: function CaisseCountModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function CaisseCountModalComponent_Template_div_click_0_listener() {
          return !ctx.result && ctx.close();
        });
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275listener("click", function CaisseCountModalComponent_Template_div_click_1_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function CaisseCountModalComponent_Template_button_click_7_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(8, "span", 3);
        \u0275\u0275text(9, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(10, CaisseCountModalComponent_Conditional_10_Template, 12, 7)(11, CaisseCountModalComponent_Conditional_11_Template, 14, 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.mode === "ouverture" ? "lock_open" : "lock");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.title, " \u2014 ", ctx.caisse.name);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.result ? 10 : 11);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ['\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 16px;\n  width: 560px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--border);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #16A34A;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-close[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.loading-row[_ngcontent-%COMP%], \n.empty-row[_ngcontent-%COMP%], \n.error-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.loading-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.error-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.error-row[_ngcontent-%COMP%] {\n  color: #DC2626;\n}\n.count-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 10px;\n}\n.count-head[_ngcontent-%COMP%], \n.count-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.6fr 1fr 0.7fr 1fr;\n  gap: 8px;\n  align-items: center;\n}\n.count-head[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  padding-bottom: 6px;\n  border-bottom: 1px solid var(--border);\n}\n.count-row[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 4px 0;\n}\n.count-row[_ngcontent-%COMP%]   .d-valeur[_ngcontent-%COMP%], \n.count-row[_ngcontent-%COMP%]   .d-total[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-variant-numeric: tabular-nums;\n}\n.count-row[_ngcontent-%COMP%]   .d-total[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n.d-qty[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 8px;\n  border-radius: 6px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  color: var(--text-primary);\n  text-align: center;\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 12px;\n  border-radius: 8px;\n  background: var(--bg-hover);\n  font-size: 14px;\n}\n.total-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #16A34A;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.form-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  color: var(--text-primary);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border-radius: 8px;\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  color: var(--text-muted);\n  font-size: 13px;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: var(--text-primary);\n}\n.btn-cancel[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border-radius: 8px;\n  background: #16A34A;\n  border: none;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: all 0.18s;\n}\n.btn-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #15803D;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.result-body[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n  padding: 32px 20px;\n}\n.result-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(22, 163, 74, 0.12);\n  color: #16A34A;\n  margin-bottom: 8px;\n}\n.result-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.result-icon.warn[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.12);\n  color: #D97706;\n}\n.result-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.result-line[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-primary);\n  margin: 2px 0;\n}\n.result-line.muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.result-line.ecart-warn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #D97706;\n}\n.badge-warn[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 6px;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(217, 119, 6, 0.12);\n  color: #D97706;\n  font-size: 11px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=caisse-count-modal.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaisseCountModalComponent, [{
    type: Component,
    args: [{ selector: "app-caisse-count-modal", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="modal-overlay" (click)="!result && close()">
  <div class="modal-box" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <span class="material-icons">{{ mode === 'ouverture' ? 'lock_open' : 'lock' }}</span>
      <h2>{{ title }} \u2014 {{ caisse.name }}</h2>
      <button class="btn-close" (click)="close()"><span class="material-icons">close</span></button>
    </div>

    @if (!result) {
      <div class="modal-body">
        @if (loading) {
          <div class="loading-row"><span class="material-icons spin">sync</span> Chargement des coupures\u2026</div>
        } @else if (denominations.length === 0) {
          <div class="empty-row">
            <span class="material-icons">info</span>
            Aucune coupure configur\xE9e pour cette soci\xE9t\xE9 \u2014 configurez-les dans Gestion des caisses,
            ou ignorez le comptage.
          </div>
        } @else {
          <p class="hint">Comptez les esp\xE8ces pr\xE9sentes dans le tiroir, coupure par coupure. Le comptage est
            recommand\xE9 mais facultatif.</p>
          <div class="count-grid">
            <div class="count-head">
              <span>Coupure</span><span>Valeur</span><span>Qt\xE9</span><span>Total</span>
            </div>
            @for (d of denominations; track d.id) {
              <div class="count-row">
                <span class="d-label">{{ d.label }}</span>
                <span class="d-valeur">{{ formatAmount(d.valeur) }}</span>
                <input type="number" min="0" [(ngModel)]="quantities[d.id!]" class="d-qty" />
                <span class="d-total">{{ formatAmount((quantities[d.id!] || 0) * d.valeur) }}</span>
              </div>
            }
          </div>
          <div class="total-row">
            <span>Total compt\xE9</span>
            <strong>{{ formatAmount(total) }}</strong>
          </div>
          <div class="form-row">
            <label>Notes</label>
            <input type="text" [(ngModel)]="notes" placeholder="Facultatif" />
          </div>
        }

        @if (error) {
          <div class="error-row"><span class="material-icons">error_outline</span> {{ error }}</div>
        }
      </div>

      <div class="modal-footer">
        <button class="btn-cancel" (click)="skip()" [disabled]="saving">
          {{ mode === 'ouverture' ? 'Ouvrir sans comptage' : 'Cl\xF4turer sans comptage' }}
        </button>
        <button class="btn-save" (click)="confirm()" [disabled]="saving || loading || !hasAnyCount">
          @if (saving) { <span class="material-icons spin">sync</span> }
          @else { <span class="material-icons">check_circle</span> }
          {{ saving ? 'Enregistrement\u2026' : (mode === 'ouverture' ? 'Ouvrir avec ce comptage' : 'Cl\xF4turer avec ce comptage') }}
        </button>
      </div>
    } @else {
      <div class="modal-body result-body">
        <div class="result-icon" [class.warn]="result.ecartDepasseSeuil">
          <span class="material-icons">{{ result.ecartDepasseSeuil ? 'warning' : 'check_circle' }}</span>
        </div>
        <p class="result-title">
          {{ mode === 'ouverture' ? 'Caisse ouverte' : 'Caisse cl\xF4tur\xE9e' }}
        </p>
        @if (mode === 'ouverture') {
          @if (result.ouvertureControlee) {
            <p class="result-line">Solde th\xE9orique : <strong>{{ formatAmount(result.soldeDebut) }}</strong></p>
            <p class="result-line">Compt\xE9 : <strong>{{ formatAmount(result.montantCompteOuverture) }}</strong></p>
            <p class="result-line" [class.ecart-warn]="result.ecartOuverture">
              \xC9cart : <strong>{{ formatAmount(result.ecartOuverture) }}</strong>
            </p>
          } @else {
            <p class="result-line muted">Ouverture sans comptage \u2014 aucun \xE9cart calcul\xE9.</p>
          }
        } @else {
          <p class="result-line">Solde th\xE9orique : <strong>{{ formatAmount(result.soldeFin) }}</strong></p>
          @if (result.ouvertureControlee || result.montantCompteCloture) {
            <p class="result-line">Compt\xE9 : <strong>{{ formatAmount(result.montantCompteCloture) }}</strong></p>
            <p class="result-line" [class.ecart-warn]="result.ecartDepasseSeuil">
              \xC9cart : <strong>{{ formatAmount(result.ecart) }}</strong>
              @if (result.ecartDepasseSeuil) { <span class="badge-warn">d\xE9passe le seuil</span> }
            </p>
          } @else {
            <p class="result-line muted">Cl\xF4ture sans comptage \u2014 aucun \xE9cart calcul\xE9.</p>
          }
          <p class="result-line muted">La caisse a \xE9t\xE9 vid\xE9e vers le compte 585000 (virements de fonds) \u2014 la prochaine ouverture repartira d'un solde \xE0 z\xE9ro.</p>
        }
      </div>
      <div class="modal-footer">
        @if (mode === 'cloture') {
          <button class="btn-cancel" (click)="voirRapport()">
            <span class="material-icons">summarize</span> Voir le rapport
          </button>
        }
        <button class="btn-save" (click)="close()">
          <span class="material-icons">done</span> Fermer
        </button>
      </div>
    }
  </div>
</div>
`, styles: ['/* src/app/modules/caisses/components/count-modal/caisse-count-modal.component.scss */\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-box {\n  background: var(--bg-surface);\n  border-radius: 16px;\n  width: 560px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--border);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header .material-icons {\n  font-size: 22px;\n  color: #16A34A;\n}\n.modal-header h2 {\n  flex: 1;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-close {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-close .material-icons {\n  font-size: 18px;\n}\n.btn-close:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.hint {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.loading-row,\n.empty-row,\n.error-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.loading-row .material-icons,\n.empty-row .material-icons,\n.error-row .material-icons {\n  font-size: 18px;\n}\n.error-row {\n  color: #DC2626;\n}\n.count-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  padding: 10px;\n}\n.count-head,\n.count-row {\n  display: grid;\n  grid-template-columns: 1.6fr 1fr 0.7fr 1fr;\n  gap: 8px;\n  align-items: center;\n}\n.count-head {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  padding-bottom: 6px;\n  border-bottom: 1px solid var(--border);\n}\n.count-row {\n  font-size: 13px;\n  padding: 4px 0;\n}\n.count-row .d-valeur,\n.count-row .d-total {\n  color: var(--text-muted);\n  font-variant-numeric: tabular-nums;\n}\n.count-row .d-total {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n.d-qty {\n  width: 100%;\n  padding: 6px 8px;\n  border-radius: 6px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  color: var(--text-primary);\n  text-align: center;\n}\n.total-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 12px;\n  border-radius: 8px;\n  background: var(--bg-hover);\n  font-size: 14px;\n}\n.total-row strong {\n  font-size: 16px;\n  color: #16A34A;\n}\n.form-row {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-row label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.form-row input {\n  padding: 9px 12px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--bg-page);\n  color: var(--text-primary);\n}\n.modal-footer {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.btn-cancel {\n  padding: 8px 18px;\n  border-radius: 8px;\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  color: var(--text-muted);\n  font-size: 13px;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n}\n.btn-cancel:hover:not(:disabled) {\n  color: var(--text-primary);\n}\n.btn-cancel:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-save {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  border-radius: 8px;\n  background: #16A34A;\n  border: none;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: all 0.18s;\n}\n.btn-save .material-icons {\n  font-size: 16px;\n}\n.btn-save:hover:not(:disabled) {\n  background: #15803D;\n}\n.btn-save:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.result-body {\n  align-items: center;\n  text-align: center;\n  padding: 32px 20px;\n}\n.result-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(22, 163, 74, 0.12);\n  color: #16A34A;\n  margin-bottom: 8px;\n}\n.result-icon .material-icons {\n  font-size: 32px;\n}\n.result-icon.warn {\n  background: rgba(217, 119, 6, 0.12);\n  color: #D97706;\n}\n.result-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.result-line {\n  font-size: 13px;\n  color: var(--text-primary);\n  margin: 2px 0;\n}\n.result-line.muted {\n  color: var(--text-muted);\n}\n.result-line.ecart-warn strong {\n  color: #D97706;\n}\n.badge-warn {\n  display: inline-block;\n  margin-left: 6px;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(217, 119, 6, 0.12);\n  color: #D97706;\n  font-size: 11px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=caisse-count-modal.component.css.map */\n'] }]
  }], () => [{ type: CaisseService }, { type: AuthService }, { type: Router }], { caisse: [{
    type: Input,
    args: [{ required: true }]
  }], mode: [{
    type: Input,
    args: [{ required: true }]
  }], closed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaisseCountModalComponent, { className: "CaisseCountModalComponent", filePath: "app/modules/caisses/components/count-modal/caisse-count-modal.component.ts", lineNumber: 18 });
})();

// src/app/modules/caisses/components/dashboard/caisse-dashboard.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function CaisseDashboardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function CaisseDashboardComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function CaisseDashboardComponent_Conditional_17_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 3);
    \u0275\u0275text(2, "point_of_sale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucune caisse configur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Cr\xE9ez votre premi\xE8re caisse dans la section Gestion des caisses.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 12);
    \u0275\u0275listener("click", function CaisseDashboardComponent_Conditional_17_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.router.navigate(["/caisses/gestion"]));
    });
    \u0275\u0275elementStart(8, "span", 3);
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Cr\xE9er une caisse ");
    \u0275\u0275elementEnd()();
  }
}
function CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const caisse_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(caisse_r3.code);
  }
}
function CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 3);
    \u0275\u0275text(2, "book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const caisse_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", caisse_r3.journalName, " ");
  }
}
function CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 3);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const caisse_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", caisse_r3.responsableName, " ");
  }
}
function CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 3);
    \u0275\u0275text(2, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const caisse_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Derni\xE8re cl\xF4ture : ", \u0275\u0275pipeBind2(4, 1, caisse_r3.lastSessionDate, "dd/MM/yyyy"), " ");
  }
}
function CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const caisse_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.newEntree(caisse_r3));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Entr\xE9e ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 28);
    \u0275\u0275listener("click", function CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Conditional_23_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const caisse_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.newSortie(caisse_r3));
    });
    \u0275\u0275elementStart(5, "span", 3);
    \u0275\u0275text(6, "remove_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Sortie ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 29);
    \u0275\u0275listener("click", function CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Conditional_23_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const caisse_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cloturerCaisse(caisse_r3));
    });
    \u0275\u0275elementStart(9, "span", 3);
    \u0275\u0275text(10, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Cl\xF4turer ");
    \u0275\u0275elementEnd();
  }
}
function CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const caisse_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.ouvrirCaisse(caisse_r3));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "lock_open");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ouvrir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 30);
    \u0275\u0275listener("click", function CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Conditional_24_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const caisse_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.viewBrouillard(caisse_r3));
    });
    \u0275\u0275elementStart(5, "span", 3);
    \u0275\u0275text(6, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Voir brouillard ");
    \u0275\u0275elementEnd();
  }
}
function CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "span", 3);
    \u0275\u0275text(4, "point_of_sale");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 17)(6, "div", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Conditional_8_Template, 2, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 20)(10, "span", 3);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 21)(14, "div", 22);
    \u0275\u0275text(15, "Solde actuel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 23);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 24);
    \u0275\u0275conditionalCreate(19, CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Conditional_19_Template, 4, 1, "div", 25);
    \u0275\u0275conditionalCreate(20, CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Conditional_20_Template, 4, 1, "div", 25);
    \u0275\u0275conditionalCreate(21, CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Conditional_21_Template, 5, 4, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 26);
    \u0275\u0275conditionalCreate(23, CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Conditional_23_Template, 12, 0)(24, CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Conditional_24_Template, 8, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const caisse_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("cloturee", caisse_r3.status === "CLOTUREE");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(caisse_r3.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(caisse_r3.code ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("ouverte", caisse_r3.status === "OUVERTE")("cloturee", caisse_r3.status === "CLOTUREE");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(caisse_r3.status === "OUVERTE" ? "lock_open" : "lock");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", caisse_r3.status, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatAmount(caisse_r3.soldeActuel));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(caisse_r3.journalName ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(caisse_r3.responsableName ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(caisse_r3.lastSessionDate ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(caisse_r3.status === "OUVERTE" ? 23 : 24);
  }
}
function CaisseDashboardComponent_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, CaisseDashboardComponent_Conditional_17_Conditional_1_For_2_Template, 25, 15, "div", 13, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.caisses);
  }
}
function CaisseDashboardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CaisseDashboardComponent_Conditional_17_Conditional_0_Template, 11, 0, "div", 10)(1, CaisseDashboardComponent_Conditional_17_Conditional_1_Template, 3, 0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.caisses.length === 0 ? 0 : 1);
  }
}
function CaisseDashboardComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-caisse-count-modal", 31);
    \u0275\u0275listener("closed", function CaisseDashboardComponent_Conditional_18_Template_app_caisse_count_modal_closed_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCountModalClosed($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("caisse", ctx_r0.countModalCaisse)("mode", ctx_r0.countModalMode);
  }
}
var CaisseDashboardComponent = class _CaisseDashboardComponent {
  constructor(caisseService, authService, router) {
    this.caisseService = caisseService;
    this.authService = authService;
    this.router = router;
    this.caisses = [];
    this.loading = true;
    this.error = "";
    this.companyId = 0;
    this.countModalCaisse = null;
    this.countModalMode = "ouverture";
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId() ?? 0;
    this.load();
  }
  load() {
    this.loading = true;
    this.error = "";
    this.caisseService.getDashboard(this.companyId).subscribe({
      next: (data) => {
        this.caisses = data;
        this.loading = false;
      },
      error: () => {
        this.error = "Erreur lors du chargement.";
        this.loading = false;
      }
    });
  }
  newEntree(caisse) {
    this.router.navigate(["/caisses/entrees/new"], { queryParams: { caisseId: caisse.id } });
  }
  newSortie(caisse) {
    this.router.navigate(["/caisses/sorties/new"], { queryParams: { caisseId: caisse.id } });
  }
  viewBrouillard(caisse) {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.router.navigate(["/caisses/brouillard"], { queryParams: { caisseId: caisse.id, date: today } });
  }
  ouvrirCaisse(caisse) {
    this.countModalCaisse = caisse;
    this.countModalMode = "ouverture";
  }
  cloturerCaisse(caisse) {
    this.countModalCaisse = caisse;
    this.countModalMode = "cloture";
  }
  onCountModalClosed(session) {
    this.countModalCaisse = null;
    if (session)
      this.load();
  }
  formatAmount(v) {
    return formatFCFA(v);
  }
  static {
    this.\u0275fac = function CaisseDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CaisseDashboardComponent)(\u0275\u0275directiveInject(CaisseService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaisseDashboardComponent, selectors: [["app-caisse-dashboard"]], decls: 19, vars: 4, consts: [[1, "dashboard-page"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "header-actions"], [1, "btn-outline", 3, "click"], [1, "loading-state"], [1, "error-state"], [3, "caisse", "mode"], [1, "material-icons", "spin"], [1, "empty-state"], [1, "caisses-grid"], [1, "btn-primary", 3, "click"], [1, "caisse-card", 3, "cloturee"], [1, "caisse-card"], [1, "card-top"], [1, "caisse-icon"], [1, "caisse-info"], [1, "caisse-name"], [1, "caisse-code"], [1, "status-badge"], [1, "solde-section"], [1, "solde-label"], [1, "solde-value"], [1, "caisse-meta"], [1, "meta-item"], [1, "card-actions"], [1, "btn-entree", 3, "click"], [1, "btn-sortie", 3, "click"], [1, "btn-cloture", 3, "click"], [1, "btn-outline-sm", 3, "click"], [3, "closed", "caisse", "mode"]], template: function CaisseDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1");
        \u0275\u0275text(7, "Tableau de bord \u2014 Caisses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Vue d'ensemble de toutes vos caisses");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 4)(11, "button", 5);
        \u0275\u0275listener("click", function CaisseDashboardComponent_Template_button_click_11_listener() {
          return ctx.router.navigate(["/caisses/gestion"]);
        });
        \u0275\u0275elementStart(12, "span", 3);
        \u0275\u0275text(13, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " G\xE9rer les caisses ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(15, CaisseDashboardComponent_Conditional_15_Template, 4, 0, "div", 6);
        \u0275\u0275conditionalCreate(16, CaisseDashboardComponent_Conditional_16_Template, 4, 1, "div", 7);
        \u0275\u0275conditionalCreate(17, CaisseDashboardComponent_Conditional_17_Template, 2, 1);
        \u0275\u0275conditionalCreate(18, CaisseDashboardComponent_Conditional_18_Template, 1, 2, "app-caisse-count-modal", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275conditional(ctx.loading ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading && !ctx.error ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.countModalCaisse ? 18 : -1);
      }
    }, dependencies: [CommonModule, CaisseCountModalComponent, DatePipe], styles: ['@charset "UTF-8";\n\n\n.dashboard-page[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #16A34A;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  font-family: "Inter", sans-serif;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  color: var(--text-primary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: all 0.2s;\n}\n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: #16A34A;\n  color: #16A34A;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  background: #16A34A;\n  border: none;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #15803D;\n}\n.loading-state[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 24px;\n  border-radius: 12px;\n  font-size: 14px;\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n}\n.error-state[_ngcontent-%COMP%] {\n  color: #DC2626;\n  background: #FEF2F2;\n  border: 1px solid #FECACA;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 24px;\n  background: var(--bg-surface);\n  border-radius: 16px;\n  border: 1px dashed var(--border);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: var(--text-muted);\n  margin-bottom: 16px;\n  display: block;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin-bottom: 20px;\n}\n.caisses-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.caisse-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-light);\n  border-radius: 14px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  transition: all 0.22s;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.caisse-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.caisse-card.cloturee[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  border-color: var(--border);\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.caisse-icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  background: rgba(22, 163, 74, 0.12);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.caisse-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #16A34A;\n}\n.caisse-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.caisse-info[_ngcontent-%COMP%]   .caisse-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 2px;\n}\n.caisse-info[_ngcontent-%COMP%]   .caisse-code[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-family: monospace;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.status-badge.ouverte[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16A34A;\n}\n.status-badge.cloturee[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.12);\n  color: #64748B;\n}\n.solde-section[_ngcontent-%COMP%] {\n  background: var(--bg-page);\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.solde-section[_ngcontent-%COMP%]   .solde-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.solde-section[_ngcontent-%COMP%]   .solde-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  font-family: "Inter", sans-serif;\n}\n.caisse-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.meta-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.btn-entree[_ngcontent-%COMP%], \n.btn-sortie[_ngcontent-%COMP%], \n.btn-cloture[_ngcontent-%COMP%], \n.btn-outline-sm[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 12px;\n  border-radius: 7px;\n  font-size: 12.5px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: all 0.18s;\n}\n.btn-entree[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-sortie[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-cloture[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-outline-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-entree[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16A34A;\n}\n.btn-entree[_ngcontent-%COMP%]:hover {\n  background: #16A34A;\n  color: white;\n}\n.btn-sortie[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #DC2626;\n}\n.btn-sortie[_ngcontent-%COMP%]:hover {\n  background: #DC2626;\n  color: white;\n}\n.btn-cloture[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.1);\n  color: #475569;\n}\n.btn-cloture[_ngcontent-%COMP%]:hover {\n  background: #475569;\n  color: white;\n}\n.btn-cloture[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.btn-outline-sm[_ngcontent-%COMP%] {\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  color: var(--text-primary);\n}\n.btn-outline-sm[_ngcontent-%COMP%]:hover {\n  border-color: #16A34A;\n  color: #16A34A;\n}\n/*# sourceMappingURL=caisse-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaisseDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-caisse-dashboard", standalone: true, imports: [CommonModule, CaisseCountModalComponent], template: `<div class="dashboard-page">
  <div class="page-header">
    <div class="page-title">
      <span class="material-icons">dashboard</span>
      <div>
        <h1>Tableau de bord \u2014 Caisses</h1>
        <p>Vue d'ensemble de toutes vos caisses</p>
      </div>
    </div>
    <div class="header-actions">
      <button class="btn-outline" (click)="router.navigate(['/caisses/gestion'])">
        <span class="material-icons">settings</span>
        G\xE9rer les caisses
      </button>
    </div>
  </div>

  @if (loading) {
    <div class="loading-state">
      <span class="material-icons spin">sync</span>
      Chargement\u2026
    </div>
  }

  @if (error) {
    <div class="error-state">
      <span class="material-icons">error_outline</span>
      {{ error }}
    </div>
  }

  @if (!loading && !error) {
    @if (caisses.length === 0) {
      <div class="empty-state">
        <span class="material-icons">point_of_sale</span>
        <h3>Aucune caisse configur\xE9e</h3>
        <p>Cr\xE9ez votre premi\xE8re caisse dans la section Gestion des caisses.</p>
        <button class="btn-primary" (click)="router.navigate(['/caisses/gestion'])">
          <span class="material-icons">add</span>
          Cr\xE9er une caisse
        </button>
      </div>
    } @else {
      <div class="caisses-grid">
        @for (caisse of caisses; track caisse.id) {
          <div class="caisse-card" [class.cloturee]="caisse.status === 'CLOTUREE'">
            <!-- Header card -->
            <div class="card-top">
              <div class="caisse-icon">
                <span class="material-icons">point_of_sale</span>
              </div>
              <div class="caisse-info">
                <div class="caisse-name">{{ caisse.name }}</div>
                @if (caisse.code) {
                  <div class="caisse-code">{{ caisse.code }}</div>
                }
              </div>
              <div class="status-badge" [class.ouverte]="caisse.status === 'OUVERTE'" [class.cloturee]="caisse.status === 'CLOTUREE'">
                <span class="material-icons">{{ caisse.status === 'OUVERTE' ? 'lock_open' : 'lock' }}</span>
                {{ caisse.status }}
              </div>
            </div>

            <!-- Solde -->
            <div class="solde-section">
              <div class="solde-label">Solde actuel</div>
              <div class="solde-value">{{ formatAmount(caisse.soldeActuel) }}</div>
            </div>

            <!-- M\xE9ta -->
            <div class="caisse-meta">
              @if (caisse.journalName) {
                <div class="meta-item">
                  <span class="material-icons">book</span>
                  {{ caisse.journalName }}
                </div>
              }
              @if (caisse.responsableName) {
                <div class="meta-item">
                  <span class="material-icons">person</span>
                  {{ caisse.responsableName }}
                </div>
              }
              @if (caisse.lastSessionDate) {
                <div class="meta-item">
                  <span class="material-icons">event</span>
                  Derni\xE8re cl\xF4ture : {{ caisse.lastSessionDate | date:'dd/MM/yyyy' }}
                </div>
              }
            </div>

            <!-- Actions -->
            <div class="card-actions">
              @if (caisse.status === 'OUVERTE') {
                <button class="btn-entree" (click)="newEntree(caisse)">
                  <span class="material-icons">add_circle</span>
                  Entr\xE9e
                </button>
                <button class="btn-sortie" (click)="newSortie(caisse)">
                  <span class="material-icons">remove_circle</span>
                  Sortie
                </button>
                <button class="btn-cloture" (click)="cloturerCaisse(caisse)">
                  <span class="material-icons">lock</span>
                  Cl\xF4turer
                </button>
              } @else {
                <button class="btn-entree" (click)="ouvrirCaisse(caisse)">
                  <span class="material-icons">lock_open</span>
                  Ouvrir
                </button>
                <button class="btn-outline-sm" (click)="viewBrouillard(caisse)">
                  <span class="material-icons">receipt_long</span>
                  Voir brouillard
                </button>
              }
            </div>
          </div>
        }
      </div>
    }
  }

  @if (countModalCaisse) {
    <app-caisse-count-modal
      [caisse]="countModalCaisse"
      [mode]="countModalMode"
      (closed)="onCountModalClosed($event)">
    </app-caisse-count-modal>
  }
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/caisses/components/dashboard/caisse-dashboard.component.scss */\n.dashboard-page {\n  padding: 28px 32px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  gap: 16px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header .page-title .material-icons {\n  font-size: 32px;\n  color: #16A34A;\n}\n.page-header .page-title h1 {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  font-family: "Inter", sans-serif;\n}\n.page-header .page-title p {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-outline {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  color: var(--text-primary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: all 0.2s;\n}\n.btn-outline .material-icons {\n  font-size: 16px;\n}\n.btn-outline:hover {\n  border-color: #16A34A;\n  color: #16A34A;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  background: #16A34A;\n  border: none;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons {\n  font-size: 17px;\n}\n.btn-primary:hover {\n  background: #15803D;\n}\n.loading-state,\n.error-state {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 24px;\n  border-radius: 12px;\n  font-size: 14px;\n}\n.loading-state .material-icons,\n.error-state .material-icons {\n  font-size: 20px;\n}\n.loading-state {\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n}\n.error-state {\n  color: #DC2626;\n  background: #FEF2F2;\n  border: 1px solid #FECACA;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 24px;\n  background: var(--bg-surface);\n  border-radius: 16px;\n  border: 1px dashed var(--border);\n}\n.empty-state .material-icons {\n  font-size: 52px;\n  color: var(--text-muted);\n  margin-bottom: 16px;\n  display: block;\n}\n.empty-state h3 {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.empty-state p {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin-bottom: 20px;\n}\n.caisses-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.caisse-card {\n  background: var(--bg-surface);\n  border: 1px solid var(--border-light);\n  border-radius: 14px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  transition: all 0.22s;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.caisse-card:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.caisse-card.cloturee {\n  opacity: 0.8;\n  border-color: var(--border);\n}\n.card-top {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.caisse-icon {\n  width: 46px;\n  height: 46px;\n  background: rgba(22, 163, 74, 0.12);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.caisse-icon .material-icons {\n  font-size: 24px;\n  color: #16A34A;\n}\n.caisse-info {\n  flex: 1;\n}\n.caisse-info .caisse-name {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 2px;\n}\n.caisse-info .caisse-code {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-family: monospace;\n}\n.status-badge {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-badge .material-icons {\n  font-size: 11px;\n}\n.status-badge.ouverte {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16A34A;\n}\n.status-badge.cloturee {\n  background: rgba(100, 116, 139, 0.12);\n  color: #64748B;\n}\n.solde-section {\n  background: var(--bg-page);\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.solde-section .solde-label {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.solde-section .solde-value {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  font-family: "Inter", sans-serif;\n}\n.caisse-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.meta-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.meta-item .material-icons {\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.card-actions {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.btn-entree,\n.btn-sortie,\n.btn-cloture,\n.btn-outline-sm {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 12px;\n  border-radius: 7px;\n  font-size: 12.5px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: all 0.18s;\n}\n.btn-entree .material-icons,\n.btn-sortie .material-icons,\n.btn-cloture .material-icons,\n.btn-outline-sm .material-icons {\n  font-size: 15px;\n}\n.btn-entree {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16A34A;\n}\n.btn-entree:hover {\n  background: #16A34A;\n  color: white;\n}\n.btn-sortie {\n  background: rgba(220, 38, 38, 0.1);\n  color: #DC2626;\n}\n.btn-sortie:hover {\n  background: #DC2626;\n  color: white;\n}\n.btn-cloture {\n  background: rgba(100, 116, 139, 0.1);\n  color: #475569;\n}\n.btn-cloture:hover {\n  background: #475569;\n  color: white;\n}\n.btn-cloture {\n  margin-left: auto;\n}\n.btn-outline-sm {\n  background: var(--bg-page);\n  border: 1px solid var(--border);\n  color: var(--text-primary);\n}\n.btn-outline-sm:hover {\n  border-color: #16A34A;\n  color: #16A34A;\n}\n/*# sourceMappingURL=caisse-dashboard.component.css.map */\n'] }]
  }], () => [{ type: CaisseService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaisseDashboardComponent, { className: "CaisseDashboardComponent", filePath: "app/modules/caisses/components/dashboard/caisse-dashboard.component.ts", lineNumber: 16 });
})();
export {
  CaisseDashboardComponent
};
//# sourceMappingURL=chunk-S3MHPXMV.js.map
