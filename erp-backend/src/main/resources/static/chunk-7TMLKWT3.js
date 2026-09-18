import {
  StockService
} from "./chunk-LIGNVDFD.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-4W3TIS2I.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-NRXD6HPP.js";
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
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

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
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Valid\xE9");
    \u0275\u0275elementEnd();
  }
}
function BordereauComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function BordereauComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.exportExcel());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "table_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 13);
    \u0275\u0275listener("click", function BordereauComponent_Conditional_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.exportPdf());
    });
    \u0275\u0275elementStart(5, "span", 3);
    \u0275\u0275text(6, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " PDF ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.exporting);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.exporting);
  }
}
function BordereauComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 3);
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
function BordereauComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 3);
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
function BordereauComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 14);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function BordereauComponent_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 30);
    \u0275\u0275text(2, "Fournisseur / Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.bordereau.supplierName);
  }
}
function BordereauComponent_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 30);
    \u0275\u0275text(2, "Entrep\xF4t destinataire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.bordereau.warehouseName);
  }
}
function BordereauComponent_Conditional_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 30);
    \u0275\u0275text(2, "R\xE9f\xE9rence facture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.bordereau.invoiceRef);
  }
}
function BordereauComponent_Conditional_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 30);
    \u0275\u0275text(2, "Date facture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32);
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
function BordereauComponent_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 30);
    \u0275\u0275text(2, "Date validation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r0.bordereau.dateDone, "dd/MM/yyyy HH:mm"));
  }
}
function BordereauComponent_Conditional_15_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function BordereauComponent_Conditional_15_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.receiveAll());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Tout recevoir ");
    \u0275\u0275elementEnd();
  }
}
function BordereauComponent_Conditional_15_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Qt\xE9 \xE0 recevoir");
    \u0275\u0275elementEnd();
  }
}
function BordereauComponent_Conditional_15_For_27_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function BordereauComponent_Conditional_15_For_27_Conditional_11_Conditional_1_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ligne_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.saisie[ligne_r6.moveId], $event) || (ctx_r0.saisie[ligne_r6.moveId] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ligne_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.saisie[ligne_r6.moveId]);
    \u0275\u0275property("max", ligne_r6.reste);
  }
}
function BordereauComponent_Conditional_15_For_27_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Complet");
    \u0275\u0275elementEnd();
  }
}
function BordereauComponent_Conditional_15_For_27_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275conditionalCreate(1, BordereauComponent_Conditional_15_For_27_Conditional_11_Conditional_1_Template, 1, 2, "input", 37)(2, BordereauComponent_Conditional_15_For_27_Conditional_11_Conditional_2_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ligne_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(ligne_r6.reste > 0 ? 1 : 2);
  }
}
function BordereauComponent_Conditional_15_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 21);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 36);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, BordereauComponent_Conditional_15_For_27_Conditional_11_Template, 3, 1, "td", 21);
    \u0275\u0275elementStart(12, "td", 22);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ligne_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("done-row", ligne_r6.reste === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ligne_r6.productCode || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ligne_r6.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 10, ligne_r6.qteCommandee, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 13, ligne_r6.qteRecue, "1.0-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-danger", ctx_r0.avarieForLigne(ligne_r6) > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 16, ctx_r0.avarieForLigne(ligne_r6), "1.0-2"), " ");
  }
}
function BordereauComponent_Conditional_15_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function BordereauComponent_Conditional_15_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function BordereauComponent_Conditional_15_Conditional_49_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.validate());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.validating);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.validating ? "Validation..." : "Valider la r\xE9ception", " ");
  }
}
function BordereauComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, BordereauComponent_Conditional_15_Conditional_1_Template, 5, 1, "div", 16);
    \u0275\u0275conditionalCreate(2, BordereauComponent_Conditional_15_Conditional_2_Template, 5, 1, "div", 16);
    \u0275\u0275conditionalCreate(3, BordereauComponent_Conditional_15_Conditional_3_Template, 5, 1, "div", 16);
    \u0275\u0275conditionalCreate(4, BordereauComponent_Conditional_15_Conditional_4_Template, 6, 4, "div", 16);
    \u0275\u0275conditionalCreate(5, BordereauComponent_Conditional_15_Conditional_5_Template, 6, 4, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "div", 18)(8, "span");
    \u0275\u0275text(9, "Lignes de r\xE9ception");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, BordereauComponent_Conditional_15_Conditional_10_Template, 4, 0, "button", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "table", 20)(12, "thead")(13, "tr")(14, "th");
    \u0275\u0275text(15, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 21);
    \u0275\u0275text(19, "Qt\xE9 command\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 21);
    \u0275\u0275text(21, "Qt\xE9 re\xE7ue");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, BordereauComponent_Conditional_15_Conditional_22_Template, 2, 0, "th", 21);
    \u0275\u0275elementStart(23, "th", 22);
    \u0275\u0275text(24, "Qt\xE9 \u2192 Avaries");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, BordereauComponent_Conditional_15_For_27_Template, 15, 19, "tr", 23, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "tfoot")(29, "tr")(30, "td", 24)(31, "strong");
    \u0275\u0275text(32, "Totaux");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "td", 25)(34, "strong");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "td", 26)(38, "strong");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(41, BordereauComponent_Conditional_15_Conditional_41_Template, 1, 0, "td");
    \u0275\u0275elementStart(42, "td", 25)(43, "strong");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "number");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(46, "div", 27)(47, "button", 28);
    \u0275\u0275listener("click", function BordereauComponent_Conditional_15_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.back());
    });
    \u0275\u0275text(48, "Retour");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(49, BordereauComponent_Conditional_15_Conditional_49_Template, 4, 2, "button", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.bordereau.supplierName ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.bordereau.warehouseName ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.bordereau.invoiceRef ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.bordereau.invoiceDate ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.bordereau.dateDone ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 10 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 22 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.bordereau.lignes);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 14, ctx_r0.totalQteCommandee, "1.0-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 17, ctx_r0.totalQteSaisie, "1.0-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-danger", ctx_r0.totalAvaries > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 20, ctx_r0.totalAvaries, "1.0-2"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 49 : -1);
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
    this.exporting = false;
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
          if (this.isReadOnly) {
            this.saisie[ligne.moveId] = ligne.qteRecue;
          } else {
            this.saisie[ligne.moveId] = ligne.qteRecue > 0 ? ligne.qteRecue : ligne.reste;
          }
        }
        this.loading = false;
      },
      error: (err) => {
        this.errorMsg = err.error?.message || "Erreur lors du chargement";
        this.loading = false;
      }
    });
  }
  get isReadOnly() {
    return this.bordereau?.state === "done";
  }
  get totalQteCommandee() {
    return this.bordereau?.lignes.reduce((s, l) => s + l.qteCommandee, 0) ?? 0;
  }
  get totalQteSaisie() {
    return Object.values(this.saisie).reduce((s, v) => s + (v || 0), 0);
  }
  get totalAvaries() {
    if (!this.bordereau)
      return 0;
    if (this.isReadOnly) {
      return this.bordereau.lignes.reduce((s, l) => s + l.reste, 0);
    }
    return this.bordereau.lignes.reduce((s, l) => s + this.avarieForLigne(l), 0);
  }
  avarieForLigne(ligne) {
    if (this.isReadOnly)
      return ligne.reste;
    const saisi = this.saisie[ligne.moveId] ?? 0;
    return Math.max(0, ligne.reste - saisi);
  }
  validate() {
    if (!this.bordereau)
      return;
    const lignes = this.bordereau.lignes.map((l) => ({
      moveId: l.moveId,
      qteRecue: this.saisie[l.moveId] ?? 0
    }));
    if (!lignes.some((l) => l.qteRecue > 0)) {
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
    if (!this.bordereau || this.isReadOnly)
      return;
    for (const ligne of this.bordereau.lignes) {
      this.saisie[ligne.moveId] = ligne.reste;
    }
  }
  exportPdf() {
    this.exporting = true;
    this.stockService.downloadBordereauPdf(this.pickingId).subscribe({
      next: (blob) => {
        this.exporting = false;
        const name = this.bordereau?.pickingName || "bordereau";
        this.triggerDownload(blob, `${name}.pdf`);
      },
      error: () => {
        this.exporting = false;
        this.errorMsg = "Erreur export PDF";
      }
    });
  }
  exportExcel() {
    this.exporting = true;
    this.stockService.downloadBordereauExcel(this.pickingId).subscribe({
      next: (blob) => {
        this.exporting = false;
        const name = this.bordereau?.pickingName || "bordereau";
        this.triggerDownload(blob, `${name}.xlsx`);
      },
      error: () => {
        this.exporting = false;
        this.errorMsg = "Erreur export Excel";
      }
    });
  }
  triggerDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BordereauComponent, selectors: [["app-bordereau"]], decls: 16, vars: 6, consts: [[1, "page-container"], [1, "page-header"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "header-info"], [1, "page-title"], [1, "ref-badge"], [1, "state-badge", "done"], [1, "header-actions"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "loading-state"], ["title", "Exporter Excel", 1, "btn-export", 3, "click", "disabled"], ["title", "Exporter PDF", 1, "btn-export", "btn-export-pdf", 3, "click", "disabled"], [1, "material-icons", "spin"], [1, "info-grid", "mb-16"], [1, "info-card"], [1, "card", "mb-16"], [1, "card-header"], [1, "btn-receive-all"], [1, "bordereau-table"], [1, "text-right"], [1, "text-right", "avaries-col"], [3, "done-row"], ["colspan", "2"], [1, "text-right", "font-mono"], [1, "text-right", "font-mono", "text-success"], [1, "form-actions"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "disabled"], [1, "info-label"], [1, "info-value", "font-bold"], [1, "info-value"], [1, "info-value", "text-success"], [1, "btn-receive-all", 3, "click"], [1, "font-mono", "text-muted"], [1, "text-right", "text-success"], ["type", "number", "min", "0", "step", "0.01", 1, "qty-input", 3, "ngModel", "max"], [1, "badge-done"], ["type", "number", "min", "0", "step", "0.01", 1, "qty-input", 3, "ngModelChange", "ngModel", "max"], [1, "btn-primary", 3, "click", "disabled"]], template: function BordereauComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(9, BordereauComponent_Conditional_9_Template, 2, 0, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8);
        \u0275\u0275conditionalCreate(11, BordereauComponent_Conditional_11_Template, 8, 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(12, BordereauComponent_Conditional_12_Template, 4, 1, "div", 9);
        \u0275\u0275conditionalCreate(13, BordereauComponent_Conditional_13_Template, 4, 1, "div", 10);
        \u0275\u0275conditionalCreate(14, BordereauComponent_Conditional_14_Template, 4, 0, "div", 11)(15, BordereauComponent_Conditional_15_Template, 50, 23);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional((ctx.bordereau == null ? null : ctx.bordereau.pickingName) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isReadOnly ? 9 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.bordereau ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 14 : ctx.bordereau ? 15 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-back[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.15s;\n  flex-shrink: 0;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.ref-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border-radius: 6px;\n  font-family: monospace;\n  font-size: 13px;\n  font-weight: 600;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  padding: 14px 18px;\n  min-width: 160px;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.info-grid[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.mb-16[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.btn-receive-all[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: var(--success);\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-receive-all[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-receive-all[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--success) 80%, black);\n}\n.bordereau-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.bordereau-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.bordereau-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n}\n.bordereau-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.bordereau-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-top: 2px solid #e9ecef;\n  background: var(--bg-hover);\n}\n.done-row[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n}\n.qty-input[_ngcontent-%COMP%] {\n  width: 90px;\n  padding: 6px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  text-align: right;\n}\n.qty-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent);\n}\n.badge-done[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  background: #d1f0e8;\n  color: var(--success);\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #198754;\n}\n.text-warning[_ngcontent-%COMP%] {\n  color: #fd7e14;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.avaries-col[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n}\n.state-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.state-badge.done[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.btn-export[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  background: #0d6efd;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-export[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-export[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0a58ca;\n}\n.btn-export[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-export.btn-export-pdf[_ngcontent-%COMP%] {\n  background: #dc3545;\n}\n.btn-export.btn-export-pdf[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b02a37;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 16px;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n/*# sourceMappingURL=bordereau.component.css.map */'] });
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
      @if (isReadOnly) {
        <span class="state-badge done">Valid\xE9</span>
      }
    </div>
    <div class="header-actions">
      @if (bordereau) {
        <button class="btn-export" (click)="exportExcel()" [disabled]="exporting" title="Exporter Excel">
          <span class="material-icons">table_chart</span> Excel
        </button>
        <button class="btn-export btn-export-pdf" (click)="exportPdf()" [disabled]="exporting" title="Exporter PDF">
          <span class="material-icons">picture_as_pdf</span> PDF
        </button>
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
          <div class="info-label">Fournisseur / Source</div>
          <div class="info-value font-bold">{{ bordereau.supplierName }}</div>
        </div>
      }
      @if (bordereau.warehouseName) {
        <div class="info-card">
          <div class="info-label">Entrep\xF4t destinataire</div>
          <div class="info-value font-bold">{{ bordereau.warehouseName }}</div>
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
      @if (bordereau.dateDone) {
        <div class="info-card">
          <div class="info-label">Date validation</div>
          <div class="info-value text-success">{{ bordereau.dateDone | date:'dd/MM/yyyy HH:mm' }}</div>
        </div>
      }
    </div>

    <!-- Tableau bordereau -->
    <div class="card mb-16">
      <div class="card-header">
        <span>Lignes de r\xE9ception</span>
        @if (!isReadOnly) {
          <button class="btn-receive-all" (click)="receiveAll()">
            <span class="material-icons">done_all</span> Tout recevoir
          </button>
        }
      </div>
      <table class="bordereau-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Libell\xE9</th>
            <th class="text-right">Qt\xE9 command\xE9e</th>
            <th class="text-right">Qt\xE9 re\xE7ue</th>
            @if (!isReadOnly) {
              <th class="text-right">Qt\xE9 \xE0 recevoir</th>
            }
            <th class="text-right avaries-col">Qt\xE9 \u2192 Avaries</th>
          </tr>
        </thead>
        <tbody>
          @for (ligne of bordereau.lignes; track ligne.moveId) {
            <tr [class.done-row]="ligne.reste === 0">
              <td class="font-mono text-muted">{{ ligne.productCode || '\u2014' }}</td>
              <td>{{ ligne.productName }}</td>
              <td class="text-right">{{ ligne.qteCommandee | number:'1.0-2' }}</td>
              <td class="text-right text-success">{{ ligne.qteRecue | number:'1.0-2' }}</td>
              @if (!isReadOnly) {
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
              }
              <td class="text-right avaries-col" [class.text-danger]="avarieForLigne(ligne) > 0">
                {{ avarieForLigne(ligne) | number:'1.0-2' }}
              </td>
            </tr>
          }
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2"><strong>Totaux</strong></td>
            <td class="text-right font-mono"><strong>{{ totalQteCommandee | number:'1.0-2' }}</strong></td>
            <td class="text-right font-mono text-success"><strong>{{ totalQteSaisie | number:'1.0-2' }}</strong></td>
            @if (!isReadOnly) {
              <td></td>
            }
            <td class="text-right font-mono" [class.text-danger]="totalAvaries > 0">
              <strong>{{ totalAvaries | number:'1.0-2' }}</strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- Actions -->
    <div class="form-actions">
      <button class="btn-secondary" (click)="back()">Retour</button>
      @if (!isReadOnly) {
        <button class="btn-primary" (click)="validate()" [disabled]="validating">
          <span class="material-icons">check_circle</span>
          {{ validating ? 'Validation...' : 'Valider la r\xE9ception' }}
        </button>
      }
    </div>
  }
</div>
`, styles: ['/* src/app/modules/stock/components/receptions/bordereau.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.page-header .header-info {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-back {\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.15s;\n  flex-shrink: 0;\n}\n.btn-back:hover {\n  background: var(--bg-hover);\n}\n.btn-back .material-icons {\n  font-size: 20px;\n}\n.ref-badge {\n  display: inline-block;\n  padding: 3px 10px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border-radius: 6px;\n  font-family: monospace;\n  font-size: 13px;\n  font-weight: 600;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.info-grid {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.info-grid .info-card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  padding: 14px 18px;\n  min-width: 160px;\n}\n.info-grid .info-card .info-label {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.info-grid .info-card .info-value {\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.mb-16 {\n  margin-bottom: 16px;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.btn-receive-all {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: var(--success);\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-receive-all .material-icons {\n  font-size: 16px;\n}\n.btn-receive-all:hover {\n  background: color-mix(in srgb, var(--success) 80%, black);\n}\n.bordereau-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.bordereau-table th {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.bordereau-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n}\n.bordereau-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.bordereau-table tfoot td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-top: 2px solid #e9ecef;\n  background: var(--bg-hover);\n}\n.done-row {\n  background: var(--success-bg);\n}\n.qty-input {\n  width: 90px;\n  padding: 6px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  text-align: right;\n}\n.qty-input:focus {\n  outline: none;\n  border-color: var(--accent);\n}\n.badge-done {\n  display: inline-block;\n  padding: 2px 8px;\n  background: #d1f0e8;\n  color: var(--success);\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.text-right {\n  text-align: right;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-success {\n  color: #198754;\n}\n.text-warning {\n  color: #fd7e14;\n}\n.text-danger {\n  color: var(--danger);\n}\n.avaries-col {\n  background: var(--danger-bg);\n}\n.state-badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.state-badge.done {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.btn-export {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  background: #0d6efd;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-export .material-icons {\n  font-size: 16px;\n}\n.btn-export:hover:not(:disabled) {\n  background: #0a58ca;\n}\n.btn-export:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-export.btn-export-pdf {\n  background: #dc3545;\n}\n.btn-export.btn-export-pdf:hover:not(:disabled) {\n  background: #b02a37;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 16px;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n  border: none;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--accent);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-secondary {\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover {\n  background: var(--bg-hover);\n}\n/*# sourceMappingURL=bordereau.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: StockService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BordereauComponent, { className: "BordereauComponent", filePath: "app/modules/stock/components/receptions/bordereau.component.ts", lineNumber: 14 });
})();
export {
  BordereauComponent
};
//# sourceMappingURL=chunk-7TMLKWT3.js.map
