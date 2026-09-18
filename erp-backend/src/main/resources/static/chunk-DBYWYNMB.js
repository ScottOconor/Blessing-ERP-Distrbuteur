import {
  StockService
} from "./chunk-LIGNVDFD.js";
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
} from "./chunk-NRXD6HPP.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpureFunction0,
  ɵɵpureFunction4,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/stock/components/adjustments/adjustment-list.component.ts
var _c0 = () => ({ k: "autres", label: "Tous", icon: "apps" });
var _c1 = () => ({ k: "articles", label: "Articles", icon: "local_bar" });
var _c2 = () => ({ k: "emballages", label: "Emballages", icon: "inventory_2" });
var _c3 = () => ({ k: "bouteilles", label: "Bouteilles", icon: "liquor" });
var _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _forTrack0 = ($index, $item) => $item.k;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.productId + "-" + $item.locationId;
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
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 5);
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
function AdjustmentListComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.linesWithDiff.length);
  }
}
function AdjustmentListComponent_Conditional_23_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function AdjustmentListComponent_Conditional_23_For_3_Template_button_click_0_listener() {
      const tab_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.filterCat = tab_r4.k;
      return \u0275\u0275resetView(ctx_r0.applyInventoryFilter());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.filterCat === tab_r4.k);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r4.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.catCounts[tab_r4.k]);
  }
}
function AdjustmentListComponent_Conditional_23_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", w_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r5.name);
  }
}
function AdjustmentListComponent_Conditional_23_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", loc_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r6.completeName || loc_r6.name);
  }
}
function AdjustmentListComponent_Conditional_23_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 5);
    \u0275\u0275text(2, "fact_check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Comptages valid\xE9s \u2014 ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " article(s) enregistr\xE9s.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 32);
    \u0275\u0275listener("click", function AdjustmentListComponent_Conditional_23_Conditional_39_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.printInventoryReport());
    });
    \u0275\u0275elementStart(9, "span", 5);
    \u0275\u0275text(10, "summarize");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.validatedLines.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.printingReport);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.printingReport ? "G\xE9n\xE9ration..." : "Imprimer PV d'inventaire", " ");
  }
}
function AdjustmentListComponent_Conditional_23_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 33);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement du stock...");
    \u0275\u0275elementEnd();
  }
}
function AdjustmentListComponent_Conditional_23_Conditional_41_For_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r9.productCode);
  }
}
function AdjustmentListComponent_Conditional_23_Conditional_41_For_18_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.diffClass(ctx_r0.getDiff(line_r9)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.getDiff(line_r9) > 0 ? "+" : "", "", \u0275\u0275pipeBind2(2, 4, ctx_r0.getDiff(line_r9), "1.0-3"), " ");
  }
}
function AdjustmentListComponent_Conditional_23_Conditional_41_For_18_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdjustmentListComponent_Conditional_23_Conditional_41_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 41);
    \u0275\u0275conditionalCreate(5, AdjustmentListComponent_Conditional_23_Conditional_41_For_18_Conditional_5_Template, 2, 1, "span", 42);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td", 43);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 44);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 37)(14, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function AdjustmentListComponent_Conditional_23_Conditional_41_For_18_Template_input_ngModelChange_14_listener($event) {
      const line_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(line_r9.countedQty, $event) || (line_r9.countedQty = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdjustmentListComponent_Conditional_23_Conditional_41_For_18_Template_input_ngModelChange_14_listener() {
      const line_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.clampCounted(line_r9));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 36);
    \u0275\u0275conditionalCreate(16, AdjustmentListComponent_Conditional_23_Conditional_41_For_18_Conditional_16_Template, 3, 7, "span", 46)(17, AdjustmentListComponent_Conditional_23_Conditional_41_For_18_Conditional_17_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("row-diff", ctx_r0.getDiff(line_r9) !== 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r9.locationName);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(line_r9.productCode ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r9.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 11, line_r9.availableQty, "1.0-3"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r9.uomName);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-diff", ctx_r0.getDiff(line_r9) !== 0);
    \u0275\u0275twoWayProperty("ngModel", line_r9.countedQty);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.getDiff(line_r9) !== 0 ? 16 : 17);
  }
}
function AdjustmentListComponent_Conditional_23_Conditional_41_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275text(2, "Aucun article en stock pour cet entrep\xF4t");
    \u0275\u0275elementEnd()();
  }
}
function AdjustmentListComponent_Conditional_23_Conditional_41_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 5);
    \u0275\u0275text(2, "warning_amber");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.linesWithDiff.length, ' article(s) avec \xE9cart \u2014 cliquez sur "Appliquer" pour corriger le stock et g\xE9n\xE9rer les \xE9critures comptables. ');
  }
}
function AdjustmentListComponent_Conditional_23_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "table", 35)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Entrep\xF4t / Emplacement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 36);
    \u0275\u0275text(9, "Qt\xE9 syst\xE8me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 36);
    \u0275\u0275text(11, "UdM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 37);
    \u0275\u0275text(13, "Qt\xE9 compt\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 36);
    \u0275\u0275text(15, "Diff\xE9rence");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, AdjustmentListComponent_Conditional_23_Conditional_41_For_18_Template, 18, 14, "tr", 38, _forTrack2);
    \u0275\u0275conditionalCreate(19, AdjustmentListComponent_Conditional_23_Conditional_41_Conditional_19_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(20, AdjustmentListComponent_Conditional_23_Conditional_41_Conditional_20_Template, 4, 1, "div", 39);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r0.filteredLines);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.filteredLines.length === 0 ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.linesWithDiff.length > 0 ? 20 : -1);
  }
}
function AdjustmentListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275repeaterCreate(2, AdjustmentListComponent_Conditional_23_For_3_Template, 6, 5, "button", 13, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15)(6, "select", 16);
    \u0275\u0275twoWayListener("ngModelChange", function AdjustmentListComponent_Conditional_23_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filterWarehouseId, $event) || (ctx_r0.filterWarehouseId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdjustmentListComponent_Conditional_23_Template_select_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onWarehouseChange());
    });
    \u0275\u0275elementStart(7, "option", 17);
    \u0275\u0275text(8, "Tous les entrep\xF4ts");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, AdjustmentListComponent_Conditional_23_For_10_Template, 2, 2, "option", 17, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function AdjustmentListComponent_Conditional_23_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filterLocationId, $event) || (ctx_r0.filterLocationId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdjustmentListComponent_Conditional_23_Template_select_ngModelChange_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applyInventoryFilter());
    });
    \u0275\u0275elementStart(12, "option", 17);
    \u0275\u0275text(13, "Tous les emplacements");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(14, AdjustmentListComponent_Conditional_23_For_15_Template, 2, 2, "option", 17, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 19)(17, "span", 5);
    \u0275\u0275text(18, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function AdjustmentListComponent_Conditional_23_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filterSearch, $event) || (ctx_r0.filterSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdjustmentListComponent_Conditional_23_Template_input_ngModelChange_19_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applyInventoryFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 21);
    \u0275\u0275listener("click", function AdjustmentListComponent_Conditional_23_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.filterWithStock = !ctx_r0.filterWithStock;
      return \u0275\u0275resetView(ctx_r0.applyInventoryFilter());
    });
    \u0275\u0275elementStart(21, "span", 5);
    \u0275\u0275text(22, "filter_list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " En stock seulement ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function AdjustmentListComponent_Conditional_23_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.adjDate, $event) || (ctx_r0.adjDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function AdjustmentListComponent_Conditional_23_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.notes, $event) || (ctx_r0.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 24)(27, "button", 25);
    \u0275\u0275listener("click", function AdjustmentListComponent_Conditional_23_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetCounted());
    });
    \u0275\u0275elementStart(28, "span", 5);
    \u0275\u0275text(29, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " R\xE9initialiser ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 26);
    \u0275\u0275listener("click", function AdjustmentListComponent_Conditional_23_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.validateCounts());
    });
    \u0275\u0275elementStart(32, "span", 5);
    \u0275\u0275text(33, "fact_check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 27);
    \u0275\u0275listener("click", function AdjustmentListComponent_Conditional_23_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applyAdjustments());
    });
    \u0275\u0275elementStart(36, "span", 5);
    \u0275\u0275text(37, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(39, AdjustmentListComponent_Conditional_23_Conditional_39_Template, 12, 3, "div", 28);
    \u0275\u0275conditionalCreate(40, AdjustmentListComponent_Conditional_23_Conditional_40_Template, 4, 0, "div", 29)(41, AdjustmentListComponent_Conditional_23_Conditional_41_Template, 21, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction4(20, _c4, \u0275\u0275pureFunction0(16, _c0), \u0275\u0275pureFunction0(17, _c1), \u0275\u0275pureFunction0(18, _c2), \u0275\u0275pureFunction0(19, _c3)));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filterWarehouseId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.warehouses);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filterLocationId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.filteredLocations);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filterSearch);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.filterWithStock);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.adjDate);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.notes);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.applying);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.applying || ctx_r0.loadingInventory);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.countsValidated ? "Re-valider" : "Valider les comptages", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.applying || ctx_r0.linesWithDiff.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.applying ? "Application..." : "Appliquer (" + ctx_r0.linesWithDiff.length + " \xE9cart(s))", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.countsValidated ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loadingInventory ? 40 : 41);
  }
}
function AdjustmentListComponent_Conditional_24_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 33);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function AdjustmentListComponent_Conditional_24_Conditional_12_For_29_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r11.productCode);
  }
}
function AdjustmentListComponent_Conditional_24_Conditional_12_For_29_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r11.accountMoveName);
  }
}
function AdjustmentListComponent_Conditional_24_Conditional_12_For_29_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function AdjustmentListComponent_Conditional_24_Conditional_12_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "div", 41);
    \u0275\u0275conditionalCreate(6, AdjustmentListComponent_Conditional_24_Conditional_12_For_29_Conditional_6_Template, 2, 1, "span", 42);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 40);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 43);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 43);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 36)(18, "span", 48);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 43);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 40);
    \u0275\u0275conditionalCreate(25, AdjustmentListComponent_Conditional_24_Conditional_12_For_29_Conditional_25_Template, 2, 1, "span", 57)(26, AdjustmentListComponent_Conditional_24_Conditional_12_For_29_Conditional_26_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 40);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 20, a_r11.createdAt, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(a_r11.productCode ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r11.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r11.locationName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(13, 23, a_r11.qtyBefore, "1.0-3"), " ", a_r11.uomName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(16, 26, a_r11.qtyAfter, "1.0-3"), " ", a_r11.uomName);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.diffClass(a_r11.qtyDiff ?? 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", (a_r11.qtyDiff ?? 0) > 0 ? "+" : "", "", \u0275\u0275pipeBind2(20, 29, a_r11.qtyDiff, "1.0-3"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-positive", (a_r11.valueDiff ?? 0) > 0)("text-negative", (a_r11.valueDiff ?? 0) < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", (a_r11.valueDiff ?? 0) > 0 ? "+" : "", "", \u0275\u0275pipeBind2(23, 32, a_r11.valueDiff, "1.0-0"), " FCFA ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(a_r11.accountMoveName ? 25 : 26);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r11.notes || "\u2014");
  }
}
function AdjustmentListComponent_Conditional_24_Conditional_12_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 58);
    \u0275\u0275text(2, "Aucun ajustement enregistr\xE9");
    \u0275\u0275elementEnd()();
  }
}
function AdjustmentListComponent_Conditional_24_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 54)(2, "span");
    \u0275\u0275text(3, "Historique des ajustements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 55);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "table", 56)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Emplacement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 36);
    \u0275\u0275text(16, "Avant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 36);
    \u0275\u0275text(18, "Apr\xE8s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 36);
    \u0275\u0275text(20, "\xC9cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 36);
    \u0275\u0275text(22, "Valeur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "\xC9criture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Motif");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275repeaterCreate(28, AdjustmentListComponent_Conditional_24_Conditional_12_For_29_Template, 29, 35, "tr", null, _forTrack1);
    \u0275\u0275conditionalCreate(30, AdjustmentListComponent_Conditional_24_Conditional_12_Conditional_30_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.adjustments.length);
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r0.adjustments);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.adjustments.length === 0 ? 30 : -1);
  }
}
function AdjustmentListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "label");
    \u0275\u0275text(3, "Du");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function AdjustmentListComponent_Conditional_24_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.dateFrom, $event) || (ctx_r0.dateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdjustmentListComponent_Conditional_24_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applyHistoryFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 51)(6, "label");
    \u0275\u0275text(7, "Au");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function AdjustmentListComponent_Conditional_24_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.dateTo, $event) || (ctx_r0.dateTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdjustmentListComponent_Conditional_24_Template_input_ngModelChange_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applyHistoryFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 53);
    \u0275\u0275listener("click", function AdjustmentListComponent_Conditional_24_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearHistoryFilter());
    });
    \u0275\u0275text(10, "Toutes dates");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, AdjustmentListComponent_Conditional_24_Conditional_11_Template, 4, 0, "div", 29)(12, AdjustmentListComponent_Conditional_24_Conditional_12_Template, 31, 2, "div", 34);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dateFrom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dateTo);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.loadingHistory ? 11 : 12);
  }
}
var AdjustmentListComponent = class _AdjustmentListComponent {
  constructor(stockService, authService) {
    this.stockService = stockService;
    this.authService = authService;
    this.activeTab = "inventory";
    this.inventoryLines = [];
    this.filteredLines = [];
    this.locations = [];
    this.warehouses = [];
    this.filterWarehouseId = null;
    this.filterLocationId = null;
    this.filterSearch = "";
    this.filterCat = "autres";
    this.filterWithStock = false;
    this.notes = "";
    this.adjDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.applying = false;
    this.loadingInventory = false;
    this.countsValidated = false;
    this.validatedLines = [];
    this.showPrintReportBtn = false;
    this.allAdjustments = [];
    this.adjustments = [];
    this.loadingHistory = false;
    this.dateFrom = "";
    this.dateTo = "";
    this.successMsg = "";
    this.errorMsg = "";
    this.printingSheet = false;
    this.printingReport = false;
  }
  ngOnInit() {
    this.loadInventory();
    this.loadHistory();
  }
  loadInventory() {
    this.loadingInventory = true;
    const cid = this.authService.getCompanyId();
    forkJoin({
      quants: this.stockService.getQuants(cid),
      products: this.stockService.getProducts(cid),
      locations: this.stockService.getLocations(cid),
      warehouses: this.stockService.getWarehouses(cid)
    }).subscribe({
      next: ({ quants, products, locations, warehouses }) => {
        this.locations = locations.filter((l) => l.usage === "internal");
        this.warehouses = warehouses;
        const mainWarehouse = warehouses[0];
        const defaultLoc = mainWarehouse?.stockLocationId ? this.locations.find((l) => l.id === mainWarehouse.stockLocationId) ?? this.locations[0] : this.locations[0];
        const quantProductIds = new Set(quants.map((q) => q.productId));
        const productCatMap = new Map(products.map((p) => [p.id, p.categoryName ?? ""]));
        const quantLines = quants.map((q) => ({
          productId: q.productId,
          productCode: q.productCode ?? "",
          productName: q.productName ?? "",
          categoryName: q.categoryName ?? productCatMap.get(q.productId) ?? "",
          uomName: q.uomName ?? "",
          locationId: q.locationId,
          locationName: q.locationCompleteName ?? q.locationName ?? "",
          availableQty: q.quantity ?? 0,
          countedQty: q.quantity ?? 0,
          standardPrice: q.standardPrice ?? 0
        }));
        const noQuantLines = products.filter((p) => (p.type === "product" || p.type === "consu") && !quantProductIds.has(p.id)).map((p) => ({
          productId: p.id,
          productCode: p.defaultCode ?? "",
          productName: p.name,
          categoryName: p.categoryName ?? "",
          uomName: p.uomName ?? "",
          locationId: defaultLoc?.id ?? 0,
          locationName: defaultLoc?.completeName ?? defaultLoc?.name ?? "",
          availableQty: 0,
          countedQty: 0,
          standardPrice: p.standardPrice ?? 0
        }));
        this.inventoryLines = [...quantLines, ...noQuantLines].sort((a, b) => a.productName.localeCompare(b.productName));
        this.countsValidated = false;
        this.validatedLines = [];
        this.showPrintReportBtn = false;
        this.applyInventoryFilter();
        this.loadingInventory = false;
      },
      error: () => {
        this.loadingInventory = false;
      }
    });
  }
  loadHistory() {
    this.loadingHistory = true;
    this.stockService.getAdjustments(this.authService.getCompanyId()).subscribe({
      next: (adj) => {
        this.allAdjustments = adj;
        this.applyHistoryFilter();
        this.loadingHistory = false;
      },
      error: () => {
        this.loadingHistory = false;
      }
    });
  }
  get filteredLocations() {
    if (!this.filterWarehouseId)
      return this.locations;
    return this.locations.filter((l) => l.warehouseId === this.filterWarehouseId);
  }
  onWarehouseChange() {
    this.filterLocationId = null;
    this.countsValidated = false;
    this.showPrintReportBtn = false;
    this.applyInventoryFilter();
  }
  catGroup(l) {
    const cat = (l.categoryName || "").toLowerCase().trim();
    if (cat.includes("emballage"))
      return "emballages";
    if (cat.startsWith("bouteille"))
      return "bouteilles";
    if (cat)
      return "articles";
    return "autres";
  }
  get catCounts() {
    const c = { autres: this.inventoryLines.length, articles: 0, emballages: 0, bouteilles: 0 };
    this.inventoryLines.forEach((l) => {
      const g = this.catGroup(l);
      if (g !== "autres")
        c[g]++;
    });
    return c;
  }
  applyInventoryFilter() {
    this.filteredLines = this.inventoryLines.filter((l) => {
      if (this.filterWarehouseId) {
        const loc = this.locations.find((loc2) => loc2.id === l.locationId);
        if (loc?.warehouseId !== this.filterWarehouseId)
          return false;
      }
      if (this.filterLocationId && l.locationId !== this.filterLocationId)
        return false;
      if (this.filterCat !== "autres" && this.catGroup(l) !== this.filterCat)
        return false;
      if (this.filterWithStock && (l.availableQty ?? 0) <= 0)
        return false;
      if (this.filterSearch) {
        const q = this.filterSearch.toLowerCase();
        if (!l.productName.toLowerCase().includes(q) && !l.productCode.toLowerCase().includes(q))
          return false;
      }
      return true;
    });
  }
  applyHistoryFilter() {
    this.adjustments = this.allAdjustments.filter((a) => {
      const d = a.createdAt?.split("T")[0] ?? "";
      if (this.dateFrom && d < this.dateFrom)
        return false;
      if (this.dateTo && d > this.dateTo)
        return false;
      return true;
    });
  }
  clearHistoryFilter() {
    this.dateFrom = "";
    this.dateTo = "";
    this.applyHistoryFilter();
  }
  getDiff(line) {
    return (line.countedQty ?? 0) - line.availableQty;
  }
  /** Une quantité comptée est une quantité physique : jamais négative. */
  clampCounted(line) {
    if ((line.countedQty ?? 0) < 0)
      line.countedQty = 0;
  }
  get linesWithDiff() {
    return this.filteredLines.filter((l) => Math.abs(this.getDiff(l)) > 1e-4);
  }
  /** Valide les comptages sans créer d'écritures comptables. Propose l'impression du PV. */
  validateCounts() {
    this.validatedLines = this.filteredLines.map((l) => __spreadValues({}, l));
    this.countsValidated = true;
    this.showPrintReportBtn = true;
    this.showSuccess("Comptages valid\xE9s \u2014 vous pouvez imprimer le PV d'inventaire");
  }
  /** Applique les écarts avec écritures comptables (nécessite que des écarts existent). */
  applyAdjustments() {
    const toAdjust = this.linesWithDiff;
    if (toAdjust.length === 0)
      return;
    this.applying = true;
    this.errorMsg = "";
    const cid = this.authService.getCompanyId();
    const requests = toAdjust.map((l) => ({
      productId: l.productId,
      locationId: l.locationId,
      newQty: l.countedQty,
      notes: this.notes || "Inventaire physique",
      companyId: cid,
      date: this.adjDate || (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    }));
    if (!this.countsValidated) {
      this.validatedLines = this.filteredLines.map((l) => __spreadValues({}, l));
    }
    this.stockService.createAdjustmentsBulk(requests).subscribe({
      next: () => {
        this.applying = false;
        this.showPrintReportBtn = true;
        this.showSuccess(`${toAdjust.length} ajustement(s) appliqu\xE9(s) avec \xE9criture comptable`);
        this.notes = "";
        this.loadInventory();
        this.loadHistory();
        this.activeTab = "history";
      },
      error: (err) => {
        this.applying = false;
        this.errorMsg = err.error?.message || "Erreur lors de l'application des ajustements";
      }
    });
  }
  buildPdfHeader() {
    const company = this.authService.getActiveCompany();
    const wh = this.warehouses.find((w) => w.id === this.filterWarehouseId);
    return {
      companyId: company?.id,
      companyName: company?.name,
      warehouseName: wh?.name,
      responsableName: wh?.responsableName
    };
  }
  printCountingSheet() {
    this.printingSheet = true;
    const today = (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR");
    const linesToPrint = this.filteredLines.length > 0 ? this.filteredLines : this.inventoryLines;
    const dto = __spreadProps(__spreadValues({}, this.buildPdfHeader()), {
      date: today,
      lines: linesToPrint.map((l) => ({
        productCode: l.productCode,
        productName: l.productName,
        locationName: l.locationName,
        uomName: l.uomName,
        systemQty: l.availableQty,
        unitCost: l.standardPrice
      }))
    });
    this.stockService.downloadCountingSheetPdf(dto).subscribe({
      next: (blob) => {
        this.printingSheet = false;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "feuille_comptage.pdf";
        a.click();
        URL.revokeObjectURL(url);
      },
      error: () => {
        this.printingSheet = false;
        this.errorMsg = "Erreur g\xE9n\xE9ration feuille de comptage";
      }
    });
  }
  printInventoryReport() {
    this.printingReport = true;
    const today = (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR");
    const linesToPrint = this.validatedLines.length > 0 ? this.validatedLines : this.filteredLines;
    const dto = __spreadProps(__spreadValues({}, this.buildPdfHeader()), {
      date: today,
      lines: linesToPrint.map((l) => {
        const diff = this.getDiff(l);
        return {
          productCode: l.productCode,
          productName: l.productName,
          locationName: l.locationName,
          uomName: l.uomName,
          systemQty: l.availableQty,
          countedQty: l.countedQty,
          diff,
          unitCost: l.standardPrice,
          valueDiff: diff * l.standardPrice
        };
      })
    });
    this.stockService.downloadInventoryReportPdf(dto).subscribe({
      next: (blob) => {
        this.printingReport = false;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "fiche_inventaire.pdf";
        a.click();
        URL.revokeObjectURL(url);
      },
      error: () => {
        this.printingReport = false;
        this.errorMsg = "Erreur g\xE9n\xE9ration fiche d'inventaire";
      }
    });
  }
  resetCounted() {
    this.inventoryLines.forEach((l) => l.countedQty = l.availableQty);
    this.countsValidated = false;
    this.showPrintReportBtn = false;
    this.applyInventoryFilter();
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 5e3);
  }
  diffClass(diff) {
    if (diff > 0)
      return "diff-positive";
    if (diff < 0)
      return "diff-negative";
    return "diff-zero";
  }
  static {
    this.\u0275fac = function AdjustmentListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdjustmentListComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdjustmentListComponent, selectors: [["app-adjustment-list"]], decls: 25, vars: 11, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn-secondary", 3, "click", "disabled"], [1, "material-icons"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "tabs"], [1, "tab-btn", 3, "click"], [1, "tab-badge"], [1, "inventory-toolbar"], [1, "cat-chips"], [1, "cat-chip", 3, "active"], [1, "toolbar-top"], [1, "toolbar-filters"], [1, "form-control", "warehouse-filter", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "form-control", "location-filter", 3, "ngModelChange", "ngModel"], [1, "search-box"], ["type", "text", "placeholder", "Rechercher un article...", 3, "ngModelChange", "ngModel"], ["title", "Afficher uniquement les produits avec du stock", 1, "cat-chip", 3, "click"], ["type", "date", "title", "Date de l'inventaire", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Motif (ex: Inventaire annuel...)", 1, "form-control", "notes-input", 3, "ngModelChange", "ngModel"], [1, "toolbar-actions"], ["title", "R\xE9initialiser les comptages", 1, "btn-reset", 3, "click", "disabled"], [1, "btn-validate-counts", 3, "click", "disabled"], [1, "btn-apply", 3, "click", "disabled"], [1, "validated-banner"], [1, "loading-state"], [1, "cat-chip", 3, "click"], [1, "cat-count"], [1, "btn-print-pv", 3, "click", "disabled"], [1, "material-icons", "spin"], [1, "card"], [1, "inv-table"], [1, "text-right"], [1, "text-right", "col-counted"], [3, "row-diff"], [1, "diff-summary"], [1, "text-muted", "small"], [1, "product-cell"], [1, "code-badge"], [1, "text-right", "mono"], [1, "text-right", "text-muted", "small"], ["type", "number", "min", "0", "step", "0.001", 1, "counted-input", 3, "ngModelChange", "ngModel"], [1, "diff-badge", 3, "class"], [1, "diff-zero"], [1, "diff-badge"], ["colspan", "6", 1, "empty-state"], [1, "filter-bar"], [1, "filter-date-group"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "filter-btn", 3, "click"], [1, "card-header"], [1, "count-badge"], [1, "adj-table"], [1, "move-ref"], ["colspan", "9", 1, "empty-state"]], template: function AdjustmentListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Ajustements de stock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Inventaire physique \u2014 corrigez les quantit\xE9s en stock");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function AdjustmentListComponent_Template_button_click_7_listener() {
          return ctx.printCountingSheet();
        });
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "print");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(11, AdjustmentListComponent_Conditional_11_Template, 4, 1, "div", 6);
        \u0275\u0275conditionalCreate(12, AdjustmentListComponent_Conditional_12_Template, 4, 1, "div", 7);
        \u0275\u0275elementStart(13, "div", 8)(14, "button", 9);
        \u0275\u0275listener("click", function AdjustmentListComponent_Template_button_click_14_listener() {
          return ctx.activeTab = "inventory";
        });
        \u0275\u0275elementStart(15, "span", 5);
        \u0275\u0275text(16, "inventory_2");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " Inventaire physique ");
        \u0275\u0275conditionalCreate(18, AdjustmentListComponent_Conditional_18_Template, 2, 1, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 9);
        \u0275\u0275listener("click", function AdjustmentListComponent_Template_button_click_19_listener() {
          return ctx.activeTab = "history";
        });
        \u0275\u0275elementStart(20, "span", 5);
        \u0275\u0275text(21, "history");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " Historique ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(23, AdjustmentListComponent_Conditional_23_Template, 42, 25);
        \u0275\u0275conditionalCreate(24, AdjustmentListComponent_Conditional_24_Template, 13, 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", ctx.printingSheet || ctx.loadingInventory);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.printingSheet ? "G\xE9n\xE9ration..." : "Feuille de comptage", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 12 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "inventory");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.linesWithDiff.length > 0 ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeTab === "history");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.activeTab === "inventory" ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "history" ? 24 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-validate-counts[_ngcontent-%COMP%], \n.btn-apply[_ngcontent-%COMP%], \n.btn-reset[_ngcontent-%COMP%], \n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.btn-validate-counts[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-apply[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-reset[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-validate-counts[_ngcontent-%COMP%]:disabled, \n.btn-apply[_ngcontent-%COMP%]:disabled, \n.btn-reset[_ngcontent-%COMP%]:disabled, \n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-reset[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.btn-reset[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-apply[_ngcontent-%COMP%] {\n  background: var(--success);\n  color: white;\n  border: none;\n  font-weight: 600;\n}\n.btn-apply[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #157347;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 20px;\n  border-bottom: 2px solid var(--border);\n  padding-bottom: 0;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-muted);\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.2s;\n}\n.tab-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  border-bottom-color: var(--primary);\n}\n.tab-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  color: #343a40;\n  background: var(--bg-hover);\n  border-radius: 6px 6px 0 0;\n}\n.tab-badge[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  padding: 1px 7px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.cat-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n  margin-bottom: 12px;\n}\n.cat-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border: 1.5px solid var(--border);\n  border-radius: 20px;\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cat-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.cat-chip.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n}\n.cat-chip[_ngcontent-%COMP%]:hover:not(.active) {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.cat-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.12);\n  font-size: 10px;\n  font-weight: 700;\n}\n.cat-chip.active[_ngcontent-%COMP%]   .cat-count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n}\n.inventory-toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.toolbar-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.toolbar-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  flex-wrap: wrap;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.notes-input[_ngcontent-%COMP%] {\n  min-width: 180px;\n  max-width: 220px;\n}\n.warehouse-filter[_ngcontent-%COMP%] {\n  max-width: 170px;\n}\n.location-filter[_ngcontent-%COMP%] {\n  max-width: 190px;\n}\n.btn-validate-counts[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  font-weight: 600;\n}\n.btn-validate-counts[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-validate-counts[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.validated-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--success-bg);\n  border: 1px solid #a3cfbb;\n  border-radius: 6px;\n  padding: 10px 16px;\n  margin-bottom: 14px;\n  font-size: 13px;\n  color: var(--success);\n}\n.validated-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #198754;\n}\n.btn-print-pv[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  background: var(--success);\n  color: white;\n  border: none;\n  border-radius: 5px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  margin-left: auto;\n}\n.btn-print-pv[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-print-pv[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #157347;\n}\n.btn-print-pv[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 6px 10px;\n  min-width: 200px;\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-muted);\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  font-size: 14px;\n  flex: 1;\n  font-family: "Roboto", sans-serif;\n}\n.location-filter[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--border-light);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.count-badge[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n  color: var(--primary);\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.inv-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.inv-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n}\n.inv-table[_ngcontent-%COMP%]   th.col-counted[_ngcontent-%COMP%] {\n  color: var(--primary);\n  background: var(--primary-subtle);\n}\n.inv-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.inv-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.inv-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.inv-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-diff[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.06);\n}\n.inv-table[_ngcontent-%COMP%]   .col-counted[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.counted-input[_ngcontent-%COMP%] {\n  width: 90px;\n  text-align: right;\n  padding: 4px 8px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto Mono", monospace;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.counted-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 2px rgba(44, 123, 229, 0.15);\n}\n.counted-input.has-diff[_ngcontent-%COMP%] {\n  border-color: var(--warning);\n  background: rgba(245, 158, 11, 0.06);\n}\n.diff-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  font-family: "Roboto Mono", monospace;\n}\n.diff-badge.diff-positive[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.diff-badge.diff-negative[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.diff-zero[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.diff-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--warning-bg);\n  border: 1px solid var(--warning);\n  border-radius: 6px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #795548;\n}\n.diff-summary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #f9a825;\n  font-size: 18px;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.filter-date-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.filter-date-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.form-control.form-control-sm[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  font-size: 12px;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.adj-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.adj-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.adj-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.adj-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.adj-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.text-positive[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.text-negative[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.product-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.code-badge[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n  color: var(--primary);\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n}\n.move-ref[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 11px;\n  background: var(--bg-hover);\n  padding: 1px 5px;\n  border-radius: 3px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n/*# sourceMappingURL=adjustment-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdjustmentListComponent, [{
    type: Component,
    args: [{ selector: "app-adjustment-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div>
      <h1 class="page-title">Ajustements de stock</h1>
      <p class="page-subtitle">Inventaire physique \u2014 corrigez les quantit\xE9s en stock</p>
    </div>
    <button class="btn-secondary" (click)="printCountingSheet()" [disabled]="printingSheet || loadingInventory">
      <span class="material-icons">print</span>
      {{ printingSheet ? 'G\xE9n\xE9ration...' : 'Feuille de comptage' }}
    </button>
  </div>

  @if (successMsg) {
    <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div>
  }
  @if (errorMsg) {
    <div class="alert alert-danger"><span class="material-icons">error</span> {{ errorMsg }}</div>
  }

  <!-- Onglets -->
  <div class="tabs">
    <button class="tab-btn" [class.active]="activeTab === 'inventory'" (click)="activeTab = 'inventory'">
      <span class="material-icons">inventory_2</span> Inventaire physique
      @if (linesWithDiff.length > 0) {
        <span class="tab-badge">{{ linesWithDiff.length }}</span>
      }
    </button>
    <button class="tab-btn" [class.active]="activeTab === 'history'" (click)="activeTab = 'history'">
      <span class="material-icons">history</span> Historique
    </button>
  </div>

  <!-- ===== ONGLET INVENTAIRE ===== -->
  @if (activeTab === 'inventory') {
    <div class="inventory-toolbar">

      <!-- Chips type produit -->
      <div class="cat-chips">
        @for (tab of [
          { k: 'autres',     label: 'Tous',        icon: 'apps'        },
          { k: 'articles',   label: 'Articles',     icon: 'local_bar'   },
          { k: 'emballages', label: 'Emballages',   icon: 'inventory_2' },
          { k: 'bouteilles', label: 'Bouteilles',   icon: 'liquor'      }
        ]; track tab.k) {
          <button class="cat-chip" [class.active]="filterCat === tab.k"
                  (click)="filterCat = tab.k; applyInventoryFilter()">
            <span class="material-icons">{{ tab.icon }}</span>
            {{ tab.label }}
            <span class="cat-count">{{ catCounts[tab.k] }}</span>
          </button>
        }
      </div>

      <div class="toolbar-top">
        <div class="toolbar-filters">
          <select class="form-control warehouse-filter" [(ngModel)]="filterWarehouseId" (ngModelChange)="onWarehouseChange()">
            <option [ngValue]="null">Tous les entrep\xF4ts</option>
            @for (w of warehouses; track w.id) {
              <option [ngValue]="w.id">{{ w.name }}</option>
            }
          </select>
          <select class="form-control location-filter" [(ngModel)]="filterLocationId" (ngModelChange)="applyInventoryFilter()">
            <option [ngValue]="null">Tous les emplacements</option>
            @for (loc of filteredLocations; track loc.id) {
              <option [ngValue]="loc.id">{{ loc.completeName || loc.name }}</option>
            }
          </select>
          <div class="search-box">
            <span class="material-icons">search</span>
            <input type="text" placeholder="Rechercher un article..." [(ngModel)]="filterSearch" (ngModelChange)="applyInventoryFilter()">
          </div>
          <button class="cat-chip" [class.active]="filterWithStock"
                  (click)="filterWithStock = !filterWithStock; applyInventoryFilter()"
                  title="Afficher uniquement les produits avec du stock">
            <span class="material-icons">filter_list</span>
            En stock seulement
          </button>
          <input type="date" [(ngModel)]="adjDate" class="form-control" title="Date de l'inventaire">
          <input type="text" [(ngModel)]="notes" placeholder="Motif (ex: Inventaire annuel...)" class="form-control notes-input">
        </div>
        <div class="toolbar-actions">
          <button class="btn-reset" (click)="resetCounted()" [disabled]="applying" title="R\xE9initialiser les comptages">
            <span class="material-icons">refresh</span> R\xE9initialiser
          </button>
          <button class="btn-validate-counts" (click)="validateCounts()" [disabled]="applying || loadingInventory">
            <span class="material-icons">fact_check</span>
            {{ countsValidated ? 'Re-valider' : 'Valider les comptages' }}
          </button>
          <button class="btn-apply" (click)="applyAdjustments()" [disabled]="applying || linesWithDiff.length === 0">
            <span class="material-icons">check_circle</span>
            {{ applying ? 'Application...' : 'Appliquer (' + linesWithDiff.length + ' \xE9cart(s))' }}
          </button>
        </div>
      </div>
    </div>

    @if (countsValidated) {
      <div class="validated-banner">
        <span class="material-icons">fact_check</span>
        <span>Comptages valid\xE9s \u2014 <strong>{{ validatedLines.length }}</strong> article(s) enregistr\xE9s.</span>
        <button class="btn-print-pv" (click)="printInventoryReport()" [disabled]="printingReport">
          <span class="material-icons">summarize</span> {{ printingReport ? 'G\xE9n\xE9ration...' : 'Imprimer PV d\\'inventaire' }}
        </button>
      </div>
    }

    @if (loadingInventory) {
      <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement du stock...</div>
    } @else {
      <div class="card">
        <table class="inv-table">
          <thead>
            <tr>
              <th>Entrep\xF4t / Emplacement</th>
              <th>Article</th>
              <th class="text-right">Qt\xE9 syst\xE8me</th>
              <th class="text-right">UdM</th>
              <th class="text-right col-counted">Qt\xE9 compt\xE9e</th>
              <th class="text-right">Diff\xE9rence</th>
            </tr>
          </thead>
          <tbody>
            @for (line of filteredLines; track line.productId + '-' + line.locationId) {
              <tr [class.row-diff]="getDiff(line) !== 0">
                <td class="text-muted small">{{ line.locationName }}</td>
                <td>
                  <div class="product-cell">
                    @if (line.productCode) { <span class="code-badge">{{ line.productCode }}</span> }
                    <span>{{ line.productName }}</span>
                  </div>
                </td>
                <td class="text-right mono">{{ line.availableQty | number:'1.0-3' }}</td>
                <td class="text-right text-muted small">{{ line.uomName }}</td>
                <td class="text-right col-counted">
                  <input type="number"
                         [(ngModel)]="line.countedQty"
                         (ngModelChange)="clampCounted(line)"
                         class="counted-input"
                         [class.has-diff]="getDiff(line) !== 0"
                         min="0" step="0.001" />
                </td>
                <td class="text-right">
                  @if (getDiff(line) !== 0) {
                    <span class="diff-badge" [class]="diffClass(getDiff(line))">
                      {{ getDiff(line) > 0 ? '+' : '' }}{{ getDiff(line) | number:'1.0-3' }}
                    </span>
                  } @else {
                    <span class="diff-zero">\u2014</span>
                  }
                </td>
              </tr>
            }
            @if (filteredLines.length === 0) {
              <tr><td colspan="6" class="empty-state">Aucun article en stock pour cet entrep\xF4t</td></tr>
            }
          </tbody>
        </table>
      </div>
      @if (linesWithDiff.length > 0) {
        <div class="diff-summary">
          <span class="material-icons">warning_amber</span>
          {{ linesWithDiff.length }} article(s) avec \xE9cart \u2014 cliquez sur "Appliquer" pour corriger le stock et g\xE9n\xE9rer les \xE9critures comptables.
        </div>
      }
    }
  }

  <!-- ===== ONGLET HISTORIQUE ===== -->
  @if (activeTab === 'history') {
    <div class="filter-bar">
      <div class="filter-date-group">
        <label>Du</label>
        <input type="date" class="form-control form-control-sm" [(ngModel)]="dateFrom" (ngModelChange)="applyHistoryFilter()">
      </div>
      <div class="filter-date-group">
        <label>Au</label>
        <input type="date" class="form-control form-control-sm" [(ngModel)]="dateTo" (ngModelChange)="applyHistoryFilter()">
      </div>
      <button class="filter-btn" (click)="clearHistoryFilter()">Toutes dates</button>
    </div>

    @if (loadingHistory) {
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
              <th class="text-right">\xC9cart</th>
              <th class="text-right">Valeur</th>
              <th>\xC9criture</th>
              <th>Motif</th>
            </tr>
          </thead>
          <tbody>
            @for (a of adjustments; track a.id) {
              <tr>
                <td class="text-muted small">{{ a.createdAt | date:'dd/MM/yyyy HH:mm' }}</td>
                <td>
                  <div class="product-cell">
                    @if (a.productCode) { <span class="code-badge">{{ a.productCode }}</span> }
                    <span>{{ a.productName }}</span>
                  </div>
                </td>
                <td class="text-muted small">{{ a.locationName }}</td>
                <td class="text-right mono">{{ a.qtyBefore | number:'1.0-3' }} {{ a.uomName }}</td>
                <td class="text-right mono">{{ a.qtyAfter | number:'1.0-3' }} {{ a.uomName }}</td>
                <td class="text-right">
                  <span class="diff-badge" [class]="diffClass(a.qtyDiff ?? 0)">
                    {{ (a.qtyDiff ?? 0) > 0 ? '+' : '' }}{{ a.qtyDiff | number:'1.0-3' }}
                  </span>
                </td>
                <td class="text-right mono" [class.text-positive]="(a.valueDiff ?? 0) > 0" [class.text-negative]="(a.valueDiff ?? 0) < 0">
                  {{ (a.valueDiff ?? 0) > 0 ? '+' : '' }}{{ a.valueDiff | number:'1.0-0' }} FCFA
                </td>
                <td class="text-muted small">
                  @if (a.accountMoveName) { <span class="move-ref">{{ a.accountMoveName }}</span> }
                  @else { \u2014 }
                </td>
                <td class="text-muted small">{{ a.notes || '\u2014' }}</td>
              </tr>
            }
            @if (adjustments.length === 0) {
              <tr><td colspan="9" class="empty-state">Aucun ajustement enregistr\xE9</td></tr>
            }
          </tbody>
        </table>
      </div>
    }
  }
</div>
`, styles: ['/* src/app/modules/stock/components/adjustments/adjustment-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-validate-counts,\n.btn-apply,\n.btn-reset,\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.btn-validate-counts .material-icons,\n.btn-apply .material-icons,\n.btn-reset .material-icons,\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 17px;\n}\n.btn-validate-counts:disabled,\n.btn-apply:disabled,\n.btn-reset:disabled,\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-secondary {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-primary {\n  background: var(--primary);\n  color: white;\n  border: none;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-reset {\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.btn-reset:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-apply {\n  background: var(--success);\n  color: white;\n  border: none;\n  font-weight: 600;\n}\n.btn-apply:hover:not(:disabled) {\n  background: #157347;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.tabs {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 20px;\n  border-bottom: 2px solid var(--border);\n  padding-bottom: 0;\n}\n.tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-muted);\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.2s;\n}\n.tab-btn .material-icons {\n  font-size: 18px;\n}\n.tab-btn.active {\n  color: var(--primary);\n  border-bottom-color: var(--primary);\n}\n.tab-btn:hover:not(.active) {\n  color: #343a40;\n  background: var(--bg-hover);\n  border-radius: 6px 6px 0 0;\n}\n.tab-badge {\n  background: var(--primary);\n  color: white;\n  padding: 1px 7px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.cat-chips {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n  margin-bottom: 12px;\n}\n.cat-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border: 1.5px solid var(--border);\n  border-radius: 20px;\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.cat-chip .material-icons {\n  font-size: 14px;\n}\n.cat-chip.active {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n}\n.cat-chip:hover:not(.active) {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.cat-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.12);\n  font-size: 10px;\n  font-weight: 700;\n}\n.cat-chip.active .cat-count {\n  background: rgba(255, 255, 255, 0.25);\n}\n.inventory-toolbar {\n  margin-bottom: 16px;\n}\n.toolbar-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.toolbar-filters {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  flex-wrap: wrap;\n}\n.toolbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.notes-input {\n  min-width: 180px;\n  max-width: 220px;\n}\n.warehouse-filter {\n  max-width: 170px;\n}\n.location-filter {\n  max-width: 190px;\n}\n.btn-validate-counts {\n  background: var(--primary);\n  color: white;\n  font-weight: 600;\n}\n.btn-validate-counts:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-validate-counts:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.validated-banner {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--success-bg);\n  border: 1px solid #a3cfbb;\n  border-radius: 6px;\n  padding: 10px 16px;\n  margin-bottom: 14px;\n  font-size: 13px;\n  color: var(--success);\n}\n.validated-banner .material-icons {\n  font-size: 20px;\n  color: #198754;\n}\n.btn-print-pv {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  background: var(--success);\n  color: white;\n  border: none;\n  border-radius: 5px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  margin-left: auto;\n}\n.btn-print-pv .material-icons {\n  font-size: 16px;\n}\n.btn-print-pv:hover:not(:disabled) {\n  background: #157347;\n}\n.btn-print-pv:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 6px 10px;\n  min-width: 200px;\n}\n.search-box .material-icons {\n  font-size: 18px;\n  color: var(--text-muted);\n}\n.search-box input {\n  border: none;\n  outline: none;\n  font-size: 14px;\n  flex: 1;\n  font-family: "Roboto", sans-serif;\n}\n.location-filter {\n  max-width: 200px;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--border-light);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.count-badge {\n  background: var(--primary-subtle);\n  color: var(--primary);\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.inv-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.inv-table th {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n}\n.inv-table th.col-counted {\n  color: var(--primary);\n  background: var(--primary-subtle);\n}\n.inv-table td {\n  padding: 6px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.inv-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.inv-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.inv-table tbody tr.row-diff td {\n  background: rgba(245, 158, 11, 0.06);\n}\n.inv-table .col-counted {\n  background: var(--bg-hover);\n}\n.counted-input {\n  width: 90px;\n  text-align: right;\n  padding: 4px 8px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto Mono", monospace;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.counted-input:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 2px rgba(44, 123, 229, 0.15);\n}\n.counted-input.has-diff {\n  border-color: var(--warning);\n  background: rgba(245, 158, 11, 0.06);\n}\n.diff-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  font-family: "Roboto Mono", monospace;\n}\n.diff-badge.diff-positive {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.diff-badge.diff-negative {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.diff-zero {\n  color: var(--text-muted);\n}\n.diff-summary {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--warning-bg);\n  border: 1px solid var(--warning);\n  border-radius: 6px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #795548;\n}\n.diff-summary .material-icons {\n  color: #f9a825;\n  font-size: 18px;\n}\n.filter-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.filter-date-group {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.filter-date-group label {\n  font-size: 13px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.form-control {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control:focus {\n  border-color: var(--primary);\n}\n.form-control.form-control-sm {\n  padding: 5px 8px;\n  font-size: 12px;\n}\n.filter-btn {\n  padding: 4px 12px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.filter-btn:hover {\n  background: var(--bg-hover);\n}\n.adj-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.adj-table th {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.adj-table td {\n  padding: 9px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.adj-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.adj-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.text-right {\n  text-align: right;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.small {\n  font-size: 12px;\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n}\n.text-positive {\n  color: var(--success);\n}\n.text-negative {\n  color: var(--danger);\n}\n.product-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.code-badge {\n  background: var(--primary-subtle);\n  color: var(--primary);\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n}\n.move-ref {\n  font-family: monospace;\n  font-size: 11px;\n  background: var(--bg-hover);\n  padding: 1px 5px;\n  border-radius: 3px;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n/*# sourceMappingURL=adjustment-list.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdjustmentListComponent, { className: "AdjustmentListComponent", filePath: "app/modules/stock/components/adjustments/adjustment-list.component.ts", lineNumber: 28 });
})();
export {
  AdjustmentListComponent
};
//# sourceMappingURL=chunk-DBYWYNMB.js.map
