import {
  StockService
} from "./chunk-YEOTRJFB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-FU5PLMG6.js";
import {
  AuthService
} from "./chunk-MBNWDFD7.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  forkJoin,
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
} from "./chunk-EEF5WTPZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PPITZAXW.js";

// src/app/modules/stock/components/adjustments/adjustment-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdjustmentListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 5);
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
function AdjustmentListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 9);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function AdjustmentListComponent_Conditional_13_For_31_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r2.productCode);
  }
}
function AdjustmentListComponent_Conditional_13_For_31_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r2.accountMoveName);
  }
}
function AdjustmentListComponent_Conditional_13_For_31_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function AdjustmentListComponent_Conditional_13_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "div", 15);
    \u0275\u0275conditionalCreate(6, AdjustmentListComponent_Conditional_13_For_31_Conditional_6_Template, 2, 1, "span", 16);
    \u0275\u0275elementStart(7, "span", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 18);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 18);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 13)(18, "span", 19);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 20);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 18);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 14);
    \u0275\u0275conditionalCreate(28, AdjustmentListComponent_Conditional_13_For_31_Conditional_28_Template, 2, 1, "span", 21)(29, AdjustmentListComponent_Conditional_13_For_31_Conditional_29_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td", 14);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 23, a_r2.createdAt, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(a_r2.productCode ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r2.locationName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(13, 26, a_r2.qtyBefore, "1.0-2"), " ", a_r2.uomName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(16, 29, a_r2.qtyAfter, "1.0-2"), " ", a_r2.uomName);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("positive", (a_r2.qtyDiff || 0) > 0)("negative", (a_r2.qtyDiff || 0) < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", (a_r2.qtyDiff || 0) > 0 ? "+" : "", "", \u0275\u0275pipeBind2(20, 32, a_r2.qtyDiff, "1.0-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 35, a_r2.unitCost, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("positive", (a_r2.valueDiff || 0) > 0)("negative", (a_r2.valueDiff || 0) < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", (a_r2.valueDiff || 0) > 0 ? "+" : "", "", \u0275\u0275pipeBind2(26, 38, a_r2.valueDiff, "1.0-0"), " FCFA ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(a_r2.accountMoveName ? 28 : 29);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r2.notes || "\u2014");
  }
}
function AdjustmentListComponent_Conditional_13_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2, "Aucun ajustement enregistr\xE9");
    \u0275\u0275elementEnd()();
  }
}
function AdjustmentListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 10)(2, "span");
    \u0275\u0275text(3, "Historique des ajustements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "table", 12)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Emplacement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 13);
    \u0275\u0275text(16, "Avant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 13);
    \u0275\u0275text(18, "Apr\xE8s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 13);
    \u0275\u0275text(20, "\xC9cart Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 13);
    \u0275\u0275text(22, "CMUP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 13);
    \u0275\u0275text(24, "Valeur \xE9cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "\xC9criture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Notes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275repeaterCreate(30, AdjustmentListComponent_Conditional_13_For_31_Template, 32, 41, "tr", null, _forTrack0);
    \u0275\u0275conditionalCreate(32, AdjustmentListComponent_Conditional_13_Conditional_32_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.adjustments.length);
    \u0275\u0275advance(25);
    \u0275\u0275repeater(ctx_r0.adjustments);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.adjustments.length === 0 ? 32 : -1);
  }
}
function AdjustmentListComponent_Conditional_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 5);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg);
  }
}
function AdjustmentListComponent_Conditional_14_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275property("value", p_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r4.defaultCode ? "[" + p_r4.defaultCode + "] " : "", "", p_r4.name);
  }
}
function AdjustmentListComponent_Conditional_14_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r5 = ctx.$implicit;
    \u0275\u0275property("value", l_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r5.completeName || l_r5.name);
  }
}
function AdjustmentListComponent_Conditional_14_Conditional_35_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.getDiff() * (ctx_r0.selectedProduct.standardPrice || 0), "1.0-0"), " FCFA ");
  }
}
function AdjustmentListComponent_Conditional_14_Conditional_35_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Aucun \xE9cart ");
  }
}
function AdjustmentListComponent_Conditional_14_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 42)(2, "span", 43);
    \u0275\u0275text(3, "Quantit\xE9 syst\xE8me actuelle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 44);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 45);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 46);
    \u0275\u0275text(11, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 47)(13, "span", 43);
    \u0275\u0275text(14, "Quantit\xE9 r\xE9elle compt\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function AdjustmentListComponent_Conditional_14_Conditional_35_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.form.newQty, $event) || (ctx_r0.form.newQty = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 45);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 49)(19, "span", 43);
    \u0275\u0275text(20, "\xC9cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 44);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 45);
    \u0275\u0275conditionalCreate(25, AdjustmentListComponent_Conditional_14_Conditional_35_Conditional_25_Template, 2, 4)(26, AdjustmentListComponent_Conditional_14_Conditional_35_Conditional_26_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(6, 14, ctx_r0.selectedProductQty, "1.0-2"), " ", ctx_r0.selectedProduct.uomName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("CMUP: ", \u0275\u0275pipeBind2(9, 17, ctx_r0.selectedProduct.standardPrice, "1.0-0"), " FCFA");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.newQty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedProduct.uomName);
    \u0275\u0275advance();
    \u0275\u0275classProp("positive", ctx_r0.getDiff() > 0)("negative", ctx_r0.getDiff() < 0)("zero", ctx_r0.getDiff() === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.getDiff() > 0 ? "+" : "", "", \u0275\u0275pipeBind2(23, 20, ctx_r0.getDiff(), "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.getDiff() !== 0 ? 25 : 26);
  }
}
function AdjustmentListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function AdjustmentListComponent_Conditional_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 25)(3, "h2");
    \u0275\u0275text(4, "Nouvel ajustement de stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 26);
    \u0275\u0275listener("click", function AdjustmentListComponent_Conditional_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 27);
    \u0275\u0275conditionalCreate(9, AdjustmentListComponent_Conditional_14_Conditional_9_Template, 4, 1, "div", 28);
    \u0275\u0275elementStart(10, "div", 29)(11, "span", 5);
    \u0275\u0275text(12, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Un ajustement corrige la quantit\xE9 th\xE9orique du stock pour la faire correspondre \xE0 l'inventaire physique r\xE9el. Une \xE9criture comptable est automatiquement g\xE9n\xE9r\xE9e. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 30)(15, "div", 31)(16, "label");
    \u0275\u0275text(17, "Article ");
    \u0275\u0275elementStart(18, "span", 32);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "select", 33);
    \u0275\u0275twoWayListener("ngModelChange", function AdjustmentListComponent_Conditional_14_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.productId, $event) || (ctx_r0.form.productId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdjustmentListComponent_Conditional_14_Template_select_ngModelChange_20_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onProductChange());
    });
    \u0275\u0275elementStart(21, "option", 34);
    \u0275\u0275text(22, "\u2014 S\xE9lectionner un article \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(23, AdjustmentListComponent_Conditional_14_For_24_Template, 2, 3, "option", 35, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 31)(26, "label");
    \u0275\u0275text(27, "Emplacement ");
    \u0275\u0275elementStart(28, "span", 32);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "select", 33);
    \u0275\u0275twoWayListener("ngModelChange", function AdjustmentListComponent_Conditional_14_Template_select_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.locationId, $event) || (ctx_r0.form.locationId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdjustmentListComponent_Conditional_14_Template_select_ngModelChange_30_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onLocationChange());
    });
    \u0275\u0275elementStart(31, "option", 34);
    \u0275\u0275text(32, "\u2014 S\xE9lectionner un emplacement \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(33, AdjustmentListComponent_Conditional_14_For_34_Template, 2, 2, "option", 35, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(35, AdjustmentListComponent_Conditional_14_Conditional_35_Template, 27, 23, "div", 36);
    \u0275\u0275elementStart(36, "div", 37)(37, "label");
    \u0275\u0275text(38, "Motif / Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function AdjustmentListComponent_Conditional_14_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.notes, $event) || (ctx_r0.form.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 39)(41, "button", 40);
    \u0275\u0275listener("click", function AdjustmentListComponent_Conditional_14_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275text(42, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 41);
    \u0275\u0275listener("click", function AdjustmentListComponent_Conditional_14_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275elementStart(44, "span", 5);
    \u0275\u0275text(45, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.errorMsg ? 9 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.productId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.products);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.locationId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.locations);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.selectedProduct ? 35 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.notes);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Enregistrement..." : "Valider l'ajustement", " ");
  }
}
var AdjustmentListComponent = class _AdjustmentListComponent {
  constructor(stockService, authService) {
    this.stockService = stockService;
    this.authService = authService;
    this.adjustments = [];
    this.products = [];
    this.locations = [];
    this.loading = false;
    this.saving = false;
    this.showModal = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.form = { productId: 0, locationId: 0, newQty: 0, notes: "", companyId: 0 };
    this.selectedProductQty = 0;
    this.selectedProduct = null;
  }
  ngOnInit() {
    this.loadAll();
  }
  loadAll() {
    this.loading = true;
    const cid = this.authService.getCompanyId();
    forkJoin({
      adjustments: this.stockService.getAdjustments(cid),
      products: this.stockService.getProducts(cid),
      locations: this.stockService.getLocations(cid)
    }).subscribe({
      next: ({ adjustments, products, locations }) => {
        this.adjustments = adjustments;
        this.products = products.filter((p) => p.type === "product" || p.type === "consu");
        this.locations = locations.filter((l) => l.usage === "internal");
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  openNew() {
    const cid = this.authService.getCompanyId();
    this.form = { productId: 0, locationId: 0, newQty: 0, notes: "", companyId: cid };
    this.selectedProduct = null;
    this.selectedProductQty = 0;
    this.errorMsg = "";
    this.showModal = true;
  }
  onProductChange() {
    const p = this.products.find((p2) => p2.id === +this.form.productId);
    this.selectedProduct = p || null;
    if (p) {
      this.stockService.getQuants(this.authService.getCompanyId(), this.form.locationId || void 0, p.id).subscribe({
        next: (quants) => {
          this.selectedProductQty = quants.reduce((sum, q) => sum + (q.quantity || 0), 0);
          this.form.newQty = this.selectedProductQty;
        }
      });
    }
  }
  onLocationChange() {
    if (this.form.productId && this.form.locationId) {
      this.stockService.getQuants(this.authService.getCompanyId(), +this.form.locationId, +this.form.productId).subscribe({
        next: (quants) => {
          this.selectedProductQty = quants.reduce((sum, q) => sum + (q.quantity || 0), 0);
          this.form.newQty = this.selectedProductQty;
        }
      });
    }
  }
  getDiff() {
    return (this.form.newQty || 0) - this.selectedProductQty;
  }
  save() {
    if (!this.form.productId || !this.form.locationId) {
      this.errorMsg = "S\xE9lectionnez un article et un emplacement";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    this.stockService.createAdjustment(__spreadProps(__spreadValues({}, this.form), { companyId: this.authService.getCompanyId() })).subscribe({
      next: () => {
        this.saving = false;
        this.showModal = false;
        this.showSuccess("Ajustement enregistr\xE9 avec \xE9criture comptable");
        this.loadAll();
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || "Erreur lors de l'ajustement";
      }
    });
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 4e3);
  }
  get diffClass() {
    const d = this.getDiff();
    if (d > 0)
      return "diff-positive";
    if (d < 0)
      return "diff-negative";
    return "";
  }
  static {
    this.\u0275fac = function AdjustmentListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdjustmentListComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdjustmentListComponent, selectors: [["app-adjustment-list"]], decls: 15, vars: 3, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn-primary", 3, "click"], [1, "material-icons"], [1, "alert", "alert-success"], [1, "loading-state"], [1, "card"], [1, "material-icons", "spin"], [1, "card-header"], [1, "count-badge"], [1, "adj-table"], [1, "text-right"], [1, "text-muted", "small"], [1, "product-cell"], [1, "code-badge"], [1, "product-name"], [1, "text-right", "mono"], [1, "diff-badge"], [1, "text-right", "mono", "text-muted"], [1, "move-ref"], ["colspan", "10", 1, "empty-state"], [1, "modal-backdrop", 3, "click"], [1, "modal"], [1, "modal-header"], [1, "btn-close", 3, "click"], [1, "modal-body"], [1, "alert", "alert-danger"], [1, "info-box"], [1, "form-grid"], [1, "form-group"], [1, "required"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "value"], [3, "value"], [1, "qty-comparison"], [1, "form-group", "mt-12"], ["type", "text", "placeholder", "Ex: Inventaire annuel, casse, vol...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-secondary", 3, "click", "disabled"], [1, "btn-primary", 3, "click", "disabled"], [1, "qty-box", "current"], [1, "qty-label"], [1, "qty-value"], [1, "qty-sub"], [1, "material-icons", "arrow-icon"], [1, "qty-box", "new"], ["type", "number", "min", "0", "step", "0.01", 1, "qty-input", 3, "ngModelChange", "ngModel"], [1, "qty-box", "diff"]], template: function AdjustmentListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Ajustements de stock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Corriger les quantit\xE9s en stock suite \xE0 un inventaire physique");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function AdjustmentListComponent_Template_button_click_7_listener() {
          return ctx.openNew();
        });
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Nouvel ajustement ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(11, AdjustmentListComponent_Conditional_11_Template, 4, 1, "div", 6);
        \u0275\u0275conditionalCreate(12, AdjustmentListComponent_Conditional_12_Template, 4, 0, "div", 7)(13, AdjustmentListComponent_Conditional_13_Template, 33, 2, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(14, AdjustmentListComponent_Conditional_14_Template, 47, 10);
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.successMsg ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 12 : 13);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showModal ? 14 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2c7be5;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #2c7be5;\n  border: 1px solid #2c7be5;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f5ff;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n  border: 1px solid #a3e0c9;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-bottom: 1px solid #f0f0f0;\n  font-weight: 600;\n  color: #212529;\n  font-size: 14px;\n}\n.count-badge[_ngcontent-%COMP%] {\n  background: #e8f0fe;\n  color: #1a68d1;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.adj-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.adj-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.adj-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\n.adj-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.adj-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.product-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.product-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.code-badge[_ngcontent-%COMP%] {\n  background: #e8f0fe;\n  color: #1a68d1;\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n}\n.diff-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.diff-badge.positive[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.diff-badge.negative[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n}\n.positive[_ngcontent-%COMP%] {\n  color: #0a5c45;\n}\n.negative[_ngcontent-%COMP%] {\n  color: #721c24;\n}\n.move-ref[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 11px;\n  background: #f8f9fa;\n  padding: 1px 5px;\n  border-radius: 3px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.mt-12[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  border-radius: 10px;\n  width: 620px;\n  max-width: calc(100vw - 32px);\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  z-index: 1001;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border-bottom: 1px solid #f0f0f0;\n  position: sticky;\n  top: 0;\n  background: white;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.btn-close[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  border-radius: 4px;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 14px 20px;\n  border-top: 1px solid #f0f0f0;\n  background: #fafafa;\n  position: sticky;\n  bottom: 0;\n}\n.info-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  background: #f0f5ff;\n  border: 1px solid #c7d9f8;\n  border-radius: 6px;\n  padding: 12px;\n  font-size: 13px;\n  color: #1a4a8a;\n  margin-bottom: 16px;\n}\n.info-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #2c7be5;\n}\n.required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.qty-comparison[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 16px;\n  margin-top: 16px;\n}\n.qty-box[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  background: white;\n  border-radius: 6px;\n  padding: 12px;\n  border: 2px solid #dee2e6;\n}\n.qty-box.current[_ngcontent-%COMP%] {\n  border-color: #dee2e6;\n}\n.qty-box.new[_ngcontent-%COMP%] {\n  border-color: #2c7be5;\n}\n.qty-box.diff.positive[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  background: #f0fff4;\n}\n.qty-box.diff.negative[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  background: #fff8f8;\n}\n.qty-box.diff.zero[_ngcontent-%COMP%] {\n  border-color: #dee2e6;\n}\n.qty-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: 600;\n  color: #6c757d;\n}\n.qty-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #212529;\n  font-family: "Roboto Mono", monospace;\n}\n.qty-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n}\n.qty-input[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 22px;\n  font-weight: 700;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: "Roboto Mono", monospace;\n  color: #2c7be5;\n}\n.arrow-icon[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  font-size: 28px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=adjustment-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdjustmentListComponent, [{
    type: Component,
    args: [{ selector: "app-adjustment-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div>
      <h1 class="page-title">Ajustements de stock</h1>
      <p class="page-subtitle">Corriger les quantit\xE9s en stock suite \xE0 un inventaire physique</p>
    </div>
    <button class="btn-primary" (click)="openNew()">
      <span class="material-icons">add</span> Nouvel ajustement
    </button>
  </div>

  @if (successMsg) {
    <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div>
  }

  @if (loading) {
    <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else {
    <div class="card">
      <div class="card-header">
        <span>Historique des ajustements</span>
        <span class="count-badge">{{ adjustments.length }}</span>
      </div>
      <table class="adj-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Article</th>
            <th>Emplacement</th>
            <th class="text-right">Avant</th>
            <th class="text-right">Apr\xE8s</th>
            <th class="text-right">\xC9cart Qt\xE9</th>
            <th class="text-right">CMUP</th>
            <th class="text-right">Valeur \xE9cart</th>
            <th>\xC9criture</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          @for (a of adjustments; track a.id) {
            <tr>
              <td class="text-muted small">{{ a.createdAt | date:'dd/MM/yyyy HH:mm' }}</td>
              <td>
                <div class="product-cell">
                  @if (a.productCode) { <span class="code-badge">{{ a.productCode }}</span> }
                  <span class="product-name">{{ a.productName }}</span>
                </div>
              </td>
              <td class="text-muted small">{{ a.locationName }}</td>
              <td class="text-right mono">{{ a.qtyBefore | number:'1.0-2' }} {{ a.uomName }}</td>
              <td class="text-right mono">{{ a.qtyAfter | number:'1.0-2' }} {{ a.uomName }}</td>
              <td class="text-right">
                <span class="diff-badge" [class.positive]="(a.qtyDiff || 0) > 0" [class.negative]="(a.qtyDiff || 0) < 0">
                  {{ (a.qtyDiff || 0) > 0 ? '+' : '' }}{{ a.qtyDiff | number:'1.0-2' }}
                </span>
              </td>
              <td class="text-right mono text-muted">{{ a.unitCost | number:'1.0-0' }}</td>
              <td class="text-right mono" [class.positive]="(a.valueDiff || 0) > 0" [class.negative]="(a.valueDiff || 0) < 0">
                {{ (a.valueDiff || 0) > 0 ? '+' : '' }}{{ a.valueDiff | number:'1.0-0' }} FCFA
              </td>
              <td class="text-muted small">
                @if (a.accountMoveName) { <span class="move-ref">{{ a.accountMoveName }}</span> }
                @else { \u2014 }
              </td>
              <td class="text-muted small">{{ a.notes || '\u2014' }}</td>
            </tr>
          }
          @if (adjustments.length === 0) {
            <tr><td colspan="10" class="empty-state">Aucun ajustement enregistr\xE9</td></tr>
          }
        </tbody>
      </table>
    </div>
  }
</div>

@if (showModal) {
  <div class="modal-backdrop" (click)="showModal = false"></div>
  <div class="modal">
    <div class="modal-header">
      <h2>Nouvel ajustement de stock</h2>
      <button class="btn-close" (click)="showModal = false"><span class="material-icons">close</span></button>
    </div>
    <div class="modal-body">
      @if (errorMsg) {
        <div class="alert alert-danger"><span class="material-icons">error</span> {{ errorMsg }}</div>
      }
      <div class="info-box">
        <span class="material-icons">info</span>
        Un ajustement corrige la quantit\xE9 th\xE9orique du stock pour la faire correspondre \xE0 l'inventaire physique r\xE9el. Une \xE9criture comptable est automatiquement g\xE9n\xE9r\xE9e.
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>Article <span class="required">*</span></label>
          <select [(ngModel)]="form.productId" (ngModelChange)="onProductChange()" class="form-control">
            <option [value]="0" disabled>\u2014 S\xE9lectionner un article \u2014</option>
            @for (p of products; track p.id) {
              <option [value]="p.id">{{ p.defaultCode ? '[' + p.defaultCode + '] ' : '' }}{{ p.name }}</option>
            }
          </select>
        </div>
        <div class="form-group">
          <label>Emplacement <span class="required">*</span></label>
          <select [(ngModel)]="form.locationId" (ngModelChange)="onLocationChange()" class="form-control">
            <option [value]="0" disabled>\u2014 S\xE9lectionner un emplacement \u2014</option>
            @for (l of locations; track l.id) {
              <option [value]="l.id">{{ l.completeName || l.name }}</option>
            }
          </select>
        </div>
      </div>

      @if (selectedProduct) {
        <div class="qty-comparison">
          <div class="qty-box current">
            <span class="qty-label">Quantit\xE9 syst\xE8me actuelle</span>
            <span class="qty-value">{{ selectedProductQty | number:'1.0-2' }} {{ selectedProduct.uomName }}</span>
            <span class="qty-sub">CMUP: {{ selectedProduct.standardPrice | number:'1.0-0' }} FCFA</span>
          </div>
          <span class="material-icons arrow-icon">arrow_forward</span>
          <div class="qty-box new">
            <span class="qty-label">Quantit\xE9 r\xE9elle compt\xE9e</span>
            <input type="number" [(ngModel)]="form.newQty" class="qty-input" min="0" step="0.01" />
            <span class="qty-sub">{{ selectedProduct.uomName }}</span>
          </div>
          <div class="qty-box diff" [class.positive]="getDiff() > 0" [class.negative]="getDiff() < 0" [class.zero]="getDiff() === 0">
            <span class="qty-label">\xC9cart</span>
            <span class="qty-value">{{ getDiff() > 0 ? '+' : '' }}{{ getDiff() | number:'1.0-2' }}</span>
            <span class="qty-sub">
              @if (getDiff() !== 0) {
                {{ (getDiff() * (selectedProduct.standardPrice || 0)) | number:'1.0-0' }} FCFA
              } @else { Aucun \xE9cart }
            </span>
          </div>
        </div>
      }

      <div class="form-group mt-12">
        <label>Motif / Notes</label>
        <input type="text" [(ngModel)]="form.notes" class="form-control" placeholder="Ex: Inventaire annuel, casse, vol..." />
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" (click)="showModal = false" [disabled]="saving">Annuler</button>
      <button class="btn-primary" (click)="save()" [disabled]="saving">
        <span class="material-icons">check</span>
        {{ saving ? 'Enregistrement...' : 'Valider l\\'ajustement' }}
      </button>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/stock/components/adjustments/adjustment-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0 0 4px;\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: #6c757d;\n  margin: 0;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: #2c7be5;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary {\n  background: white;\n  color: #2c7be5;\n  border: 1px solid #2c7be5;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #f0f5ff;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: #0a5c45;\n  border: 1px solid #a3e0c9;\n}\n.alert.alert-danger {\n  background: #fde8e8;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-bottom: 1px solid #f0f0f0;\n  font-weight: 600;\n  color: #212529;\n  font-size: 14px;\n}\n.count-badge {\n  background: #e8f0fe;\n  color: #1a68d1;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.adj-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.adj-table th {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.adj-table td {\n  padding: 9px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\n.adj-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.adj-table tbody tr:hover td {\n  background: #fafafa;\n}\n.text-right {\n  text-align: right;\n}\n.text-muted {\n  color: #6c757d;\n}\n.small {\n  font-size: 12px;\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n}\n.product-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.product-name {\n  font-weight: 500;\n}\n.code-badge {\n  background: #e8f0fe;\n  color: #1a68d1;\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n}\n.diff-badge {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.diff-badge.positive {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.diff-badge.negative {\n  background: #fde8e8;\n  color: #721c24;\n}\n.positive {\n  color: #0a5c45;\n}\n.negative {\n  color: #721c24;\n}\n.move-ref {\n  font-family: monospace;\n  font-size: 11px;\n  background: #f8f9fa;\n  padding: 1px 5px;\n  border-radius: 3px;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.mt-12 {\n  margin-top: 12px;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  border-radius: 10px;\n  width: 620px;\n  max-width: calc(100vw - 32px);\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  z-index: 1001;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border-bottom: 1px solid #f0f0f0;\n  position: sticky;\n  top: 0;\n  background: white;\n}\n.modal-header h2 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.btn-close {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  border-radius: 4px;\n}\n.btn-close:hover {\n  background: #f0f0f0;\n}\n.modal-body {\n  padding: 20px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 14px 20px;\n  border-top: 1px solid #f0f0f0;\n  background: #fafafa;\n  position: sticky;\n  bottom: 0;\n}\n.info-box {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  background: #f0f5ff;\n  border: 1px solid #c7d9f8;\n  border-radius: 6px;\n  padding: 12px;\n  font-size: 13px;\n  color: #1a4a8a;\n  margin-bottom: 16px;\n}\n.info-box .material-icons {\n  font-size: 18px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control:focus {\n  border-color: #2c7be5;\n}\n.required {\n  color: #dc3545;\n}\n.qty-comparison {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 16px;\n  margin-top: 16px;\n}\n.qty-box {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  background: white;\n  border-radius: 6px;\n  padding: 12px;\n  border: 2px solid #dee2e6;\n}\n.qty-box.current {\n  border-color: #dee2e6;\n}\n.qty-box.new {\n  border-color: #2c7be5;\n}\n.qty-box.diff.positive {\n  border-color: #28a745;\n  background: #f0fff4;\n}\n.qty-box.diff.negative {\n  border-color: #dc3545;\n  background: #fff8f8;\n}\n.qty-box.diff.zero {\n  border-color: #dee2e6;\n}\n.qty-label {\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: 600;\n  color: #6c757d;\n}\n.qty-value {\n  font-size: 22px;\n  font-weight: 700;\n  color: #212529;\n  font-family: "Roboto Mono", monospace;\n}\n.qty-sub {\n  font-size: 11px;\n  color: #6c757d;\n}\n.qty-input {\n  width: 100%;\n  text-align: center;\n  font-size: 22px;\n  font-weight: 700;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: "Roboto Mono", monospace;\n  color: #2c7be5;\n}\n.arrow-icon {\n  color: #adb5bd;\n  font-size: 28px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=adjustment-list.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdjustmentListComponent, { className: "AdjustmentListComponent", filePath: "src/app/modules/stock/components/adjustments/adjustment-list.component.ts", lineNumber: 15 });
})();
export {
  AdjustmentListComponent
};
//# sourceMappingURL=chunk-WUJOSIVH.js.map
