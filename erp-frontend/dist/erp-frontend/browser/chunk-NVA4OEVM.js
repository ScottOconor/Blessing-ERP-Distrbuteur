import {
  StockService
} from "./chunk-YEOTRJFB.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-K3VCSIQL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-FU5PLMG6.js";
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
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/stock/components/receptions/bordereau.component.ts
var _forTrack0 = ($index, $item) => $item.moveId;
function BordereauComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.bordereau.pickingName);
  }
}
function BordereauComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 3);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMsg);
  }
}
function BordereauComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 3);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg);
  }
}
function BordereauComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 10);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function BordereauComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 25);
    \u0275\u0275text(2, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.bordereau.supplierName);
  }
}
function BordereauComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 25);
    \u0275\u0275text(2, "R\xE9f\xE9rence facture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.bordereau.invoiceRef);
  }
}
function BordereauComponent_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 25);
    \u0275\u0275text(2, "Date facture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r0.bordereau.invoiceDate, "dd/MM/yyyy"));
  }
}
function BordereauComponent_Conditional_12_For_31_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function BordereauComponent_Conditional_12_For_31_Conditional_18_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ligne_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.saisie[ligne_r4.moveId], $event) || (ctx_r0.saisie[ligne_r4.moveId] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ligne_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.saisie[ligne_r4.moveId]);
    \u0275\u0275property("max", ligne_r4.reste);
  }
}
function BordereauComponent_Conditional_12_For_31_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Complet");
    \u0275\u0275elementEnd();
  }
}
function BordereauComponent_Conditional_12_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 17);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 17);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 29);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 17);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 17);
    \u0275\u0275conditionalCreate(18, BordereauComponent_Conditional_12_For_31_Conditional_18_Template, 1, 2, "input", 30)(19, BordereauComponent_Conditional_12_For_31_Conditional_19_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ligne_r4 = ctx.$implicit;
    \u0275\u0275classProp("done-row", ligne_r4.reste === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ligne_r4.productCode || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ligne_r4.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 13, ligne_r4.prixUnitaire, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 16, ligne_r4.qteCommandee, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 19, ligne_r4.qteRecue, "1.0-2"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-warning", ligne_r4.reste > 0)("text-success", ligne_r4.reste === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 22, ligne_r4.reste, "1.0-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ligne_r4.reste > 0 ? 18 : 19);
  }
}
function BordereauComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, BordereauComponent_Conditional_12_Conditional_1_Template, 5, 1, "div", 12);
    \u0275\u0275conditionalCreate(2, BordereauComponent_Conditional_12_Conditional_2_Template, 5, 1, "div", 12);
    \u0275\u0275conditionalCreate(3, BordereauComponent_Conditional_12_Conditional_3_Template, 6, 4, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14)(6, "span");
    \u0275\u0275text(7, "Lignes de r\xE9ception");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 15);
    \u0275\u0275listener("click", function BordereauComponent_Conditional_12_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.receiveAll());
    });
    \u0275\u0275elementStart(9, "span", 3);
    \u0275\u0275text(10, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Tout recevoir ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "table", 16)(13, "thead")(14, "tr")(15, "th");
    \u0275\u0275text(16, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 17);
    \u0275\u0275text(20, "Prix unitaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 17);
    \u0275\u0275text(22, "Qt\xE9 command\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 17);
    \u0275\u0275text(24, "Qt\xE9 re\xE7ue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 17);
    \u0275\u0275text(26, "Reste");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 17);
    \u0275\u0275text(28, "Qt\xE9 \xE0 recevoir");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275repeaterCreate(30, BordereauComponent_Conditional_12_For_31_Template, 20, 25, "tr", 18, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "tfoot")(33, "tr")(34, "td", 19)(35, "strong");
    \u0275\u0275text(36, "Totaux");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "td", 20)(38, "strong");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(41, "td", 21);
    \u0275\u0275elementStart(42, "td", 20)(43, "strong");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "number");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(46, "div", 22)(47, "button", 23);
    \u0275\u0275listener("click", function BordereauComponent_Conditional_12_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.back());
    });
    \u0275\u0275text(48, "Retour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 24);
    \u0275\u0275listener("click", function BordereauComponent_Conditional_12_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.validate());
    });
    \u0275\u0275elementStart(50, "span", 3);
    \u0275\u0275text(51, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.bordereau.supplierName ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.bordereau.invoiceRef ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.bordereau.invoiceDate ? 3 : -1);
    \u0275\u0275advance(27);
    \u0275\u0275repeater(ctx_r0.bordereau.lignes);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 7, ctx_r0.totalQteCommandee, "1.0-2"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 10, ctx_r0.totalQteSaisie, "1.0-2"));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.validating);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.validating ? "Validation..." : "Valider la r\xE9ception", " ");
  }
}
var BordereauComponent = class _BordereauComponent {
  constructor(route, router, stockService) {
    this.route = route;
    this.router = router;
    this.stockService = stockService;
    this.bordereau = null;
    this.loading = false;
    this.validating = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.saisie = {};
  }
  ngOnInit() {
    this.pickingId = +this.route.snapshot.paramMap.get("id");
    this.loadBordereau();
  }
  loadBordereau() {
    this.loading = true;
    this.stockService.getBordereau(this.pickingId).subscribe({
      next: (data) => {
        this.bordereau = data;
        for (const ligne of data.lignes) {
          this.saisie[ligne.moveId] = ligne.qteRecue > 0 ? ligne.qteRecue : ligne.reste;
        }
        this.loading = false;
      },
      error: (err) => {
        this.errorMsg = err.error?.message || "Erreur lors du chargement";
        this.loading = false;
      }
    });
  }
  get totalQteCommandee() {
    return this.bordereau?.lignes.reduce((s, l) => s + l.qteCommandee, 0) ?? 0;
  }
  get totalQteSaisie() {
    return Object.values(this.saisie).reduce((s, v) => s + (v || 0), 0);
  }
  validate() {
    if (!this.bordereau)
      return;
    const lignes = this.bordereau.lignes.map((l) => ({
      moveId: l.moveId,
      qteRecue: this.saisie[l.moveId] ?? 0
    }));
    const hasAnyQty = lignes.some((l) => l.qteRecue > 0);
    if (!hasAnyQty) {
      this.errorMsg = "Veuillez saisir au moins une quantit\xE9 re\xE7ue";
      return;
    }
    if (!confirm("Valider la r\xE9ception ? Les quantit\xE9s saisies seront transf\xE9r\xE9es au Magasin Principal, le reste aux Avaries."))
      return;
    this.validating = true;
    this.errorMsg = "";
    this.stockService.validateBordereau(this.pickingId, lignes).subscribe({
      next: () => {
        this.validating = false;
        this.successMsg = "R\xE9ception valid\xE9e. Stock mis \xE0 jour.";
        setTimeout(() => this.router.navigate(["/stock/receptions"]), 1500);
      },
      error: (err) => {
        this.validating = false;
        this.errorMsg = err.error?.message || "Erreur lors de la validation";
      }
    });
  }
  receiveAll() {
    if (!this.bordereau)
      return;
    for (const ligne of this.bordereau.lignes) {
      this.saisie[ligne.moveId] = ligne.reste;
    }
  }
  back() {
    this.router.navigate(["/stock/receptions"]);
  }
  static {
    this.\u0275fac = function BordereauComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BordereauComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(StockService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BordereauComponent, selectors: [["app-bordereau"]], decls: 13, vars: 4, consts: [[1, "page-container"], [1, "page-header"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "header-info"], [1, "page-title"], [1, "ref-badge"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "loading-state"], [1, "material-icons", "spin"], [1, "info-grid", "mb-16"], [1, "info-card"], [1, "card", "mb-16"], [1, "card-header"], [1, "btn-receive-all", 3, "click"], [1, "bordereau-table"], [1, "text-right"], [3, "done-row"], ["colspan", "3"], [1, "text-right", "font-mono"], ["colspan", "2"], [1, "form-actions"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click", "disabled"], [1, "info-label"], [1, "info-value", "font-bold"], [1, "info-value"], [1, "font-mono", "text-muted"], [1, "text-right", "text-success"], ["type", "number", "min", "0", "step", "0.01", 1, "qty-input", 3, "ngModel", "max"], [1, "badge-done"], ["type", "number", "min", "0", "step", "0.01", 1, "qty-input", 3, "ngModelChange", "ngModel", "max"]], template: function BordereauComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function BordereauComponent_Template_button_click_2_listener() {
          return ctx.back();
        });
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 4)(6, "h1", 5);
        \u0275\u0275text(7, "Bordereau de r\xE9ception");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, BordereauComponent_Conditional_8_Template, 2, 1, "span", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(9, BordereauComponent_Conditional_9_Template, 4, 1, "div", 7);
        \u0275\u0275conditionalCreate(10, BordereauComponent_Conditional_10_Template, 4, 1, "div", 8);
        \u0275\u0275conditionalCreate(11, BordereauComponent_Conditional_11_Template, 4, 0, "div", 9)(12, BordereauComponent_Conditional_12_Template, 53, 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional((ctx.bordereau == null ? null : ctx.bordereau.pickingName) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 11 : ctx.bordereau ? 12 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.btn-back[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  transition: all 0.15s;\n  flex-shrink: 0;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.ref-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  background: #e2e3e5;\n  color: #383d41;\n  border-radius: 6px;\n  font-family: monospace;\n  font-size: 13px;\n  font-weight: 600;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n  border: 1px solid #a3e0c9;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  padding: 14px 18px;\n  min-width: 160px;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #212529;\n}\n.mb-16[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.btn-receive-all[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #198754;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-receive-all[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-receive-all[_ngcontent-%COMP%]:hover {\n  background: #146c43;\n}\n.bordereau-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.bordereau-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.bordereau-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.bordereau-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.bordereau-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-top: 2px solid #e9ecef;\n  background: #fafafa;\n}\n.done-row[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n}\n.qty-input[_ngcontent-%COMP%] {\n  width: 90px;\n  padding: 6px 10px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  text-align: right;\n}\n.qty-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00A09D;\n}\n.badge-done[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  background: #d1f0e8;\n  color: #0a5c45;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #198754;\n}\n.text-warning[_ngcontent-%COMP%] {\n  color: #fd7e14;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 16px;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #00A09D;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #007d7a;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n/*# sourceMappingURL=bordereau.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BordereauComponent, [{
    type: Component,
    args: [{ selector: "app-bordereau", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <!-- Header -->
  <div class="page-header">
    <button class="btn-back" (click)="back()">
      <span class="material-icons">arrow_back</span>
    </button>
    <div class="header-info">
      <h1 class="page-title">Bordereau de r\xE9ception</h1>
      @if (bordereau?.pickingName) {
        <span class="ref-badge">{{ bordereau!.pickingName }}</span>
      }
    </div>
  </div>

  @if (successMsg) {
    <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div>
  }
  @if (errorMsg) {
    <div class="alert alert-danger"><span class="material-icons">error</span> {{ errorMsg }}</div>
  }

  @if (loading) {
    <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else if (bordereau) {
    <!-- Infos -->
    <div class="info-grid mb-16">
      @if (bordereau.supplierName) {
        <div class="info-card">
          <div class="info-label">Fournisseur</div>
          <div class="info-value font-bold">{{ bordereau.supplierName }}</div>
        </div>
      }
      @if (bordereau.invoiceRef) {
        <div class="info-card">
          <div class="info-label">R\xE9f\xE9rence facture</div>
          <div class="info-value">{{ bordereau.invoiceRef }}</div>
        </div>
      }
      @if (bordereau.invoiceDate) {
        <div class="info-card">
          <div class="info-label">Date facture</div>
          <div class="info-value">{{ bordereau.invoiceDate | date:'dd/MM/yyyy' }}</div>
        </div>
      }
    </div>

    <!-- Tableau bordereau -->
    <div class="card mb-16">
      <div class="card-header">
        <span>Lignes de r\xE9ception</span>
        <button class="btn-receive-all" (click)="receiveAll()">
          <span class="material-icons">done_all</span> Tout recevoir
        </button>
      </div>
      <table class="bordereau-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Libell\xE9</th>
            <th class="text-right">Prix unitaire</th>
            <th class="text-right">Qt\xE9 command\xE9e</th>
            <th class="text-right">Qt\xE9 re\xE7ue</th>
            <th class="text-right">Reste</th>
            <th class="text-right">Qt\xE9 \xE0 recevoir</th>
          </tr>
        </thead>
        <tbody>
          @for (ligne of bordereau.lignes; track ligne.moveId) {
            <tr [class.done-row]="ligne.reste === 0">
              <td class="font-mono text-muted">{{ ligne.productCode || '\u2014' }}</td>
              <td>{{ ligne.productName }}</td>
              <td class="text-right">{{ ligne.prixUnitaire | number:'1.0-0' }}</td>
              <td class="text-right">{{ ligne.qteCommandee | number:'1.0-2' }}</td>
              <td class="text-right text-success">{{ ligne.qteRecue | number:'1.0-2' }}</td>
              <td class="text-right" [class.text-warning]="ligne.reste > 0" [class.text-success]="ligne.reste === 0">
                {{ ligne.reste | number:'1.0-2' }}
              </td>
              <td class="text-right">
                @if (ligne.reste > 0) {
                  <input
                    type="number"
                    class="qty-input"
                    [(ngModel)]="saisie[ligne.moveId]"
                    [max]="ligne.reste"
                    min="0"
                    step="0.01"
                  />
                } @else {
                  <span class="badge-done">Complet</span>
                }
              </td>
            </tr>
          }
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3"><strong>Totaux</strong></td>
            <td class="text-right font-mono"><strong>{{ totalQteCommandee | number:'1.0-2' }}</strong></td>
            <td colspan="2"></td>
            <td class="text-right font-mono"><strong>{{ totalQteSaisie | number:'1.0-2' }}</strong></td>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- Actions -->
    <div class="form-actions">
      <button class="btn-secondary" (click)="back()">Retour</button>
      <button class="btn-primary" (click)="validate()" [disabled]="validating">
        <span class="material-icons">check_circle</span>
        {{ validating ? 'Validation...' : 'Valider la r\xE9ception' }}
      </button>
    </div>
  }
</div>
`, styles: ['/* src/app/modules/stock/components/receptions/bordereau.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.page-header .header-info {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.btn-back {\n  width: 36px;\n  height: 36px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  transition: all 0.15s;\n  flex-shrink: 0;\n}\n.btn-back:hover {\n  background: #f0f0f0;\n}\n.btn-back .material-icons {\n  font-size: 20px;\n}\n.ref-badge {\n  display: inline-block;\n  padding: 3px 10px;\n  background: #e2e3e5;\n  color: #383d41;\n  border-radius: 6px;\n  font-family: monospace;\n  font-size: 13px;\n  font-weight: 600;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: #0a5c45;\n  border: 1px solid #a3e0c9;\n}\n.alert.alert-danger {\n  background: #fde8e8;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.info-grid {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.info-grid .info-card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  padding: 14px 18px;\n  min-width: 160px;\n}\n.info-grid .info-card .info-label {\n  font-size: 11px;\n  color: #6c757d;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.info-grid .info-card .info-value {\n  font-size: 14px;\n  color: #212529;\n}\n.mb-16 {\n  margin-bottom: 16px;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.btn-receive-all {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #198754;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-receive-all .material-icons {\n  font-size: 16px;\n}\n.btn-receive-all:hover {\n  background: #146c43;\n}\n.bordereau-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.bordereau-table th {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.bordereau-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.bordereau-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.bordereau-table tfoot td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-top: 2px solid #e9ecef;\n  background: #fafafa;\n}\n.done-row {\n  background: #f0fdf4;\n}\n.qty-input {\n  width: 90px;\n  padding: 6px 10px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  text-align: right;\n}\n.qty-input:focus {\n  outline: none;\n  border-color: #00A09D;\n}\n.badge-done {\n  display: inline-block;\n  padding: 2px 8px;\n  background: #d1f0e8;\n  color: #0a5c45;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.text-right {\n  text-align: right;\n}\n.text-muted {\n  color: #adb5bd;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-success {\n  color: #198754;\n}\n.text-warning {\n  color: #fd7e14;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 16px;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n  border: none;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: #00A09D;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #007d7a;\n}\n.btn-secondary {\n  background: white;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.btn-secondary:hover {\n  background: #f8f9fa;\n}\n/*# sourceMappingURL=bordereau.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: StockService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BordereauComponent, { className: "BordereauComponent", filePath: "src/app/modules/stock/components/receptions/bordereau.component.ts", lineNumber: 14 });
})();
export {
  BordereauComponent
};
//# sourceMappingURL=chunk-NVA4OEVM.js.map
