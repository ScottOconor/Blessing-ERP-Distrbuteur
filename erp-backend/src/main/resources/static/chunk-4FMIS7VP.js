import {
  PurchaseService
} from "./chunk-T7PR2AZC.js";
import {
  StockService
} from "./chunk-LIGNVDFD.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-NRXD6HPP.js";
import {
  AccountingService
} from "./chunk-PGZXUWCB.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/purchases/components/suppliers/fournisseur-price.component.ts
var _forTrack0 = ($index, $item) => $item.supplier.id;
var _forTrack1 = ($index, $item) => $item.productId;
var _forTrack2 = ($index, $item) => $item.id;
function FournisseurPriceComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 10);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r2.supplier.ref);
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", g_r2.prices.length, " tarif", g_r2.prices.length > 1 ? "s" : "");
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Aucun tarif");
    \u0275\u0275elementEnd();
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FournisseurPriceComponent_Conditional_18_For_2_Conditional_9_Conditional_0_Template, 2, 2, "span", 20)(1, FournisseurPriceComponent_Conditional_18_For_2_Conditional_9_Conditional_1_Template, 2, 0, "span", 21);
  }
  if (rf & 2) {
    const g_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(g_r2.prices.length > 0 ? 0 : 1);
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 23);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("[", p_r4.productCode, "]");
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_8_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(7);
      \u0275\u0275twoWayBindingSet(ctx_r2.editForm.prixFournisseur, $event) || (ctx_r2.editForm.prixFournisseur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editForm.prixFournisseur);
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, p_r4.prixFournisseur, "1.0-0"), " FCFA ");
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2013 ", \u0275\u0275pipeBind2(1, 1, -(p_r4.ecartUnitaire ?? 0), "1.0-0"), " FCFA ");
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" + ", \u0275\u0275pipeBind2(1, 1, p_r4.ecartUnitaire ?? 0, "1.0-0"), " FCFA ");
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "\u2013");
    \u0275\u0275elementEnd();
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const p_r4 = \u0275\u0275nextContext().$implicit;
      const g_r2 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveEdit(g_r2, p_r4));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 38);
    \u0275\u0275listener("click", function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_15_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r2.cancelEdit());
    });
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275property("disabled", ctx_r2.saving);
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const p_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.startEdit(p_r4));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 40);
    \u0275\u0275listener("click", function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_16_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const p_r4 = \u0275\u0275nextContext().$implicit;
      const g_r2 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deletePrice(g_r2, p_r4));
    });
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5, "delete_outline");
    \u0275\u0275elementEnd()();
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_2_Template, 2, 1, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 32);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 33);
    \u0275\u0275conditionalCreate(8, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_8_Template, 1, 1, "input", 34)(9, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_9_Template, 2, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 28);
    \u0275\u0275conditionalCreate(11, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_11_Template, 2, 4)(12, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_12_Template, 2, 4)(13, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_13_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 29);
    \u0275\u0275conditionalCreate(15, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_15_Template, 6, 1)(16, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Conditional_16_Template, 6, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275classProp("editing", ctx_r2.editingPriceId === p_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r4.productCode ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r4.productName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 12, p_r4.standardPrice ?? 0, "1.0-0"), " FCFA");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.editingPriceId === p_r4.id ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("rabais-col", (p_r4.ecartUnitaire ?? 0) < 0)("surplus-col", (p_r4.ecartUnitaire ?? 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275conditional((p_r4.ecartUnitaire ?? 0) < 0 ? 11 : (p_r4.ecartUnitaire ?? 0) > 0 ? 12 : 13);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.editingPriceId === p_r4.id ? 15 : 16);
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 24)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 28);
    \u0275\u0275text(6, "Prix catalogue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 28);
    \u0275\u0275text(8, "Prix fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 28);
    \u0275\u0275text(10, "\xC9cart");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "th", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_For_14_Template, 17, 15, "tr", 30, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(13);
    \u0275\u0275repeater(g_r2.prices);
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, "Aucun tarif configur\xE9 pour ce fournisseur.");
    \u0275\u0275elementEnd();
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_13_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prod_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("[", prod_r10.defaultCode, "]");
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("mousedown", function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_13_For_2_Template_button_mousedown_0_listener() {
      const prod_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r2.selectProduct(prod_r10));
    });
    \u0275\u0275conditionalCreate(1, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_13_For_2_Conditional_1_Template, 2, 1, "span", 55);
    \u0275\u0275elementStart(2, "span", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 57);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prod_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(prod_r10.defaultCode ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prod_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 3, prod_r10.standardPrice ?? 0, "1.0-0"), " FCFA");
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275repeaterCreate(1, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_13_For_2_Template, 7, 6, "button", 53, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.addForm.suggestions);
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "label");
    \u0275\u0275text(2, "Prix catalogue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 1, ctx_r2.addForm.standardPrice, "1.0-0"), " FCFA");
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_19_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275textInterpolate1(" \u2013 ", \u0275\u0275pipeBind2(1, 1, -ctx_r2.addEcart, "1.0-0"), " FCFA ");
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_19_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275textInterpolate1(" + ", \u0275\u0275pipeBind2(1, 1, ctx_r2.addEcart, "1.0-0"), " FCFA ");
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_19_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Aucun \xE9cart ");
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 59);
    \u0275\u0275conditionalCreate(4, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_19_Conditional_4_Template, 2, 4)(5, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_19_Conditional_5_Template, 2, 4)(6, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_19_Conditional_6_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.addEcart < 0 ? "R\xE9duction" : ctx_r2.addEcart > 0 ? "Surco\xFBt" : "\xC9cart");
    \u0275\u0275advance();
    \u0275\u0275classProp("positive", ctx_r2.addEcart < 0)("surplus", ctx_r2.addEcart > 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.addEcart < 0 ? 4 : ctx_r2.addEcart > 0 ? 5 : 6);
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 41)(2, "span", 3);
    \u0275\u0275text(3, "add_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Nouveau tarif pour ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 42)(8, "div", 43)(9, "label");
    \u0275\u0275text(10, "Article *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 44)(12, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r2.addForm.productSearch, $event) || (ctx_r2.addForm.productSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Template_input_ngModelChange_12_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.onProductSearch());
    })("blur", function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Template_input_blur_12_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.hideProductSuggestions());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_13_Template, 3, 0, "div", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_14_Template, 6, 4, "div", 47);
    \u0275\u0275elementStart(15, "div", 47)(16, "label");
    \u0275\u0275text(17, "Prix fournisseur *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r2.addForm.prixFournisseur, $event) || (ctx_r2.addForm.prixFournisseur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_19_Template, 7, 6, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 49)(21, "button", 50);
    \u0275\u0275listener("click", function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.cancelAdd());
    });
    \u0275\u0275elementStart(22, "span", 3);
    \u0275\u0275text(23, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 51);
    \u0275\u0275listener("click", function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r8);
      const g_r2 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveAdd(g_r2));
    });
    \u0275\u0275conditionalCreate(26, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_26_Template, 2, 0, "span", 52)(27, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Conditional_27_Template, 2, 0, "span", 3);
    \u0275\u0275text(28, " Enregistrer ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const g_r2 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(g_r2.supplier.name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.addForm.productSearch);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.addForm.showSuggestions ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.addForm.productId ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.addForm.prixFournisseur);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.addForm.productId ? 19 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !ctx_r2.addForm.productId || ctx_r2.addForm.prixFournisseur < 0 || ctx_r2.addSaving);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.addSaving ? 26 : 27);
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 60);
    \u0275\u0275listener("click", function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const g_r2 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startAdd(g_r2));
    });
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Ajouter un tarif ");
    \u0275\u0275elementEnd()();
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_0_Template, 15, 0, "table", 24)(1, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_1_Template, 2, 0, "div", 25);
    \u0275\u0275conditionalCreate(2, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_2_Template, 29, 8, "div", 26);
    \u0275\u0275conditionalCreate(3, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Conditional_3_Template, 5, 0, "div", 27);
  }
  if (rf & 2) {
    const g_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(g_r2.prices && g_r2.prices.length > 0 ? 0 : !ctx_r2.addingGroupId || ctx_r2.addingGroupId !== g_r2.supplier.id ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.addingGroupId === g_r2.supplier.id ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.addingGroupId !== g_r2.supplier.id ? 3 : -1);
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_1_Template, 4, 0, "div", 22)(2, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Conditional_2_Template, 4, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(g_r2.loading ? 1 : 2);
  }
}
function FournisseurPriceComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275listener("click", function FournisseurPriceComponent_Conditional_18_For_2_Template_div_click_1_listener() {
      const g_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggle(g_r2));
    });
    \u0275\u0275elementStart(2, "div", 14)(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, FournisseurPriceComponent_Conditional_18_For_2_Conditional_7_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 18);
    \u0275\u0275conditionalCreate(9, FournisseurPriceComponent_Conditional_18_For_2_Conditional_9_Template, 2, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, FournisseurPriceComponent_Conditional_18_For_2_Conditional_10_Template, 3, 1, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("open", ctx_r2.expandedIds.has(g_r2.supplier.id ?? 0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.expandedIds.has(g_r2.supplier.id ?? 0) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r2.supplier.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(g_r2.supplier.ref ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(g_r2.prices !== null ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.expandedIds.has(g_r2.supplier.id ?? 0) ? 10 : -1);
  }
}
function FournisseurPriceComponent_Conditional_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 3);
    \u0275\u0275text(2, "store");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun fournisseur trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function FournisseurPriceComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, FournisseurPriceComponent_Conditional_18_For_2_Template, 11, 7, "div", 11, _forTrack0);
    \u0275\u0275conditionalCreate(3, FournisseurPriceComponent_Conditional_18_Conditional_3_Template, 5, 0, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredGroups);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.filteredGroups.length === 0 && !ctx_r2.loading ? 3 : -1);
  }
}
var FournisseurPriceComponent = class _FournisseurPriceComponent {
  constructor(purchaseService, stockService, accountingService, authService) {
    this.purchaseService = purchaseService;
    this.stockService = stockService;
    this.accountingService = accountingService;
    this.authService = authService;
    this.groups = [];
    this.expandedIds = /* @__PURE__ */ new Set();
    this.loading = false;
    this.search = "";
    this.editingPriceId = null;
    this.editForm = { prixFournisseur: 0 };
    this.saving = false;
    this.addingGroupId = null;
    this.addForm = this.emptyAddForm();
    this.addSaving = false;
    this.products = [];
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    this.loading = true;
    this.accountingService.getPartners(this.companyId).subscribe({
      next: (partners) => {
        this.groups = partners.filter((p) => p.type === "supplier" || p.type === "both").map((s) => ({ supplier: s, prices: null, loading: false }));
        this.loading = false;
      },
      error: () => this.loading = false
    });
    this.stockService.getProducts(this.companyId).subscribe({
      next: (p) => this.products = p.filter((x) => x.active && (x.type === "product" || x.type === "consu"))
    });
  }
  toggle(g) {
    const id = g.supplier.id;
    if (id == null)
      return;
    if (this.expandedIds.has(id)) {
      this.expandedIds.delete(id);
      return;
    }
    this.expandedIds.add(id);
    if (g.prices === null)
      this.loadPrices(g);
  }
  loadPrices(g) {
    g.loading = true;
    this.purchaseService.getPrixFournisseurByFournisseur(g.supplier.id, this.companyId).subscribe({
      next: (prices) => {
        g.prices = prices;
        g.loading = false;
      },
      error: () => {
        g.prices = [];
        g.loading = false;
      }
    });
  }
  expandAll() {
    this.groups.forEach((g) => {
      this.expandedIds.add(g.supplier.id);
      if (g.prices === null)
        this.loadPrices(g);
    });
  }
  collapseAll() {
    this.expandedIds.clear();
  }
  get filteredGroups() {
    if (!this.search.trim())
      return this.groups;
    const q = this.search.toLowerCase();
    return this.groups.filter((g) => g.supplier.name.toLowerCase().includes(q));
  }
  // ── Edition ──────────────────────────────────────────────────────────────
  startEdit(p) {
    this.editingPriceId = p.id ?? null;
    this.editForm = { prixFournisseur: p.prixFournisseur };
    this.addingGroupId = null;
  }
  cancelEdit() {
    this.editingPriceId = null;
  }
  saveEdit(g, p) {
    this.saving = true;
    const dto = __spreadProps(__spreadValues({}, p), { prixFournisseur: this.editForm.prixFournisseur });
    this.purchaseService.savePrixFournisseur(dto).subscribe({
      next: (saved) => {
        const idx = g.prices.findIndex((x) => x.id === p.id);
        if (idx >= 0)
          g.prices[idx] = saved;
        this.editingPriceId = null;
        this.saving = false;
      },
      error: () => {
        this.saving = false;
      }
    });
  }
  // ── Suppression ───────────────────────────────────────────────────────────
  deletePrice(g, p) {
    if (!confirm(`Supprimer le tarif de "${p.productName}" pour ce fournisseur ?`))
      return;
    this.purchaseService.deletePrixFournisseur(p.id).subscribe({
      next: () => {
        g.prices = g.prices.filter((x) => x.id !== p.id);
      }
    });
  }
  // ── Ajout ─────────────────────────────────────────────────────────────────
  startAdd(g) {
    this.addingGroupId = g.supplier.id ?? null;
    this.addForm = this.emptyAddForm();
    this.editingPriceId = null;
  }
  cancelAdd() {
    this.addingGroupId = null;
  }
  onProductSearch() {
    const term = this.addForm.productSearch.toLowerCase().trim();
    if (term.length < 1) {
      this.addForm.suggestions = [];
      this.addForm.showSuggestions = false;
      return;
    }
    const existing = new Set((this.groups.find((g) => g.supplier.id === this.addingGroupId)?.prices ?? []).map((p) => p.productId));
    this.addForm.suggestions = this.products.filter((p) => !existing.has(p.id ?? -1) && ((p.name || "").toLowerCase().includes(term) || (p.defaultCode || "").toLowerCase().includes(term))).slice(0, 10);
    this.addForm.showSuggestions = this.addForm.suggestions.length > 0;
  }
  selectProduct(p) {
    this.addForm.productId = p.id ?? null;
    this.addForm.standardPrice = p.standardPrice ?? 0;
    this.addForm.prixFournisseur = p.standardPrice ?? 0;
    this.addForm.productSearch = (p.defaultCode ? `[${p.defaultCode}] ` : "") + p.name;
    this.addForm.showSuggestions = false;
    this.addForm.suggestions = [];
  }
  hideProductSuggestions() {
    setTimeout(() => {
      this.addForm.showSuggestions = false;
    }, 180);
  }
  get addEcart() {
    return this.addForm.prixFournisseur - this.addForm.standardPrice;
  }
  saveAdd(g) {
    if (!this.addForm.productId)
      return;
    this.addSaving = true;
    const dto = {
      productId: this.addForm.productId,
      fournisseurId: g.supplier.id,
      prixFournisseur: this.addForm.prixFournisseur,
      companyId: this.companyId
    };
    this.purchaseService.savePrixFournisseur(dto).subscribe({
      next: (saved) => {
        if (!g.prices)
          g.prices = [];
        g.prices.unshift(saved);
        this.addingGroupId = null;
        this.addSaving = false;
      },
      error: () => {
        this.addSaving = false;
      }
    });
  }
  emptyAddForm() {
    return { productSearch: "", productId: null, standardPrice: 0, prixFournisseur: 0, showSuggestions: false, suggestions: [] };
  }
  static {
    this.\u0275fac = function FournisseurPriceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FournisseurPriceComponent)(\u0275\u0275directiveInject(PurchaseService), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FournisseurPriceComponent, selectors: [["app-fournisseur-price"]], decls: 19, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "toolbar"], ["placeholder", "Rechercher un fournisseur\u2026", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "toolbar-actions"], [1, "btn-text", 3, "click"], [1, "empty"], [1, "accordion"], [1, "material-icons", "spin"], [1, "acc-item", 3, "open"], [1, "acc-item"], [1, "acc-header", 3, "click"], [1, "acc-left"], [1, "material-icons", "acc-chevron"], [1, "client-name"], [1, "client-ref"], [1, "acc-right"], [1, "acc-body"], [1, "badge-count"], [1, "badge-none"], [1, "inner-loading"], [1, "material-icons", "spin", 2, "font-size", "18px"], [1, "prices-table"], [1, "inner-empty"], [1, "add-form-row"], [1, "add-btn-bar"], [1, "text-right"], [1, "actions-col"], [3, "editing"], [1, "prod-code"], [1, "text-right", "muted"], [1, "text-right", "bold"], ["type", "number", "min", "0", 1, "edit-input", 3, "ngModel"], [1, "muted"], ["type", "number", "min", "0", 1, "edit-input", 3, "ngModelChange", "ngModel"], ["title", "Enregistrer", 1, "btn-save", 3, "click", "disabled"], ["title", "Annuler", 1, "btn-cancel", 3, "click"], ["title", "Modifier", 1, "btn-edit", 3, "click"], ["title", "Supprimer", 1, "btn-delete", 3, "click"], [1, "add-form-title"], [1, "add-fields"], [1, "add-field", "add-field-product"], [1, "autocomplete-wrap"], ["type", "text", "placeholder", "Code ou nom de l'article\u2026", "autocomplete", "off", 1, "add-input", 3, "ngModelChange", "blur", "ngModel"], [1, "suggest-list"], [1, "add-field", "add-field-sm"], ["type", "number", "min", "0", "placeholder", "0", 1, "add-input", "text-right", 3, "ngModelChange", "ngModel"], [1, "add-actions"], [1, "btn-add-cancel", 3, "click"], [1, "btn-add-save", 3, "click", "disabled"], [1, "material-icons", "spin", 2, "font-size", "16px"], ["type", "button", 1, "suggest-item"], ["type", "button", 1, "suggest-item", 3, "mousedown"], [1, "suggest-code"], [1, "suggest-name"], [1, "suggest-price"], [1, "std-price-badge"], [1, "rabais-badge"], [1, "btn-add-tarif", 3, "click"]], template: function FournisseurPriceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
        \u0275\u0275text(4, "price_change");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Tarifs par fournisseur ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function FournisseurPriceComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
        \u0275\u0275listener("click", function FournisseurPriceComponent_Template_button_click_9_listener() {
          return ctx.expandAll();
        });
        \u0275\u0275elementStart(10, "span", 3);
        \u0275\u0275text(11, "unfold_more");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Tout d\xE9velopper ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 7);
        \u0275\u0275listener("click", function FournisseurPriceComponent_Template_button_click_13_listener() {
          return ctx.collapseAll();
        });
        \u0275\u0275elementStart(14, "span", 3);
        \u0275\u0275text(15, "unfold_less");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " Tout r\xE9duire ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(17, FournisseurPriceComponent_Conditional_17_Template, 4, 0, "div", 8)(18, FournisseurPriceComponent_Conditional_18_Template, 4, 1, "div", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.loading ? 17 : 18);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe], styles: ["\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 6px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.9rem;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-text[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  padding: 6px 12px;\n  font-size: 0.85rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #555;\n}\n.btn-text[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.accordion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.acc-item[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n  overflow: visible;\n  transition: box-shadow 0.15s;\n}\n.acc-item.open[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);\n}\n.acc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.acc-header[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.acc-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.acc-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.acc-chevron[_ngcontent-%COMP%] {\n  color: #aaa;\n  font-size: 20px;\n  transition: transform 0.2s;\n}\n.acc-item.open[_ngcontent-%COMP%]   .acc-chevron[_ngcontent-%COMP%] {\n  color: #017E84;\n}\n.client-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #222;\n}\n.client-ref[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.badge-count[_ngcontent-%COMP%] {\n  background: #017E84;\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.badge-none[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #bbb;\n}\n.acc-body[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f0f0;\n  padding: 0;\n}\n.inner-loading[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  color: #aaa;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.inner-empty[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  color: #aaa;\n  font-size: 0.875rem;\n}\n.prices-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.prices-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  padding: 8px 16px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-align: left;\n  border-bottom: 1px solid var(--border-light);\n}\n.prices-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\n.prices-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.rabais-col[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-weight: 700;\n}\n.surplus-col[_ngcontent-%COMP%] {\n  color: #c62828;\n  font-weight: 700;\n}\n.prod-code[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-family: monospace;\n  margin-right: 6px;\n  font-size: 0.8rem;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n.bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.actions-col[_ngcontent-%COMP%] {\n  width: 90px;\n  text-align: center;\n  white-space: nowrap;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #aaa;\n  padding: 4px;\n  border-radius: 4px;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  color: #017E84;\n  background: #e8f5f5;\n}\n.btn-edit[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-delete[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #aaa;\n  padding: 4px;\n  border-radius: 4px;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  color: #c62828;\n  background: #fce8e8;\n}\n.btn-delete[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #2e7d32;\n  padding: 4px;\n  border-radius: 4px;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-save[_ngcontent-%COMP%]:hover {\n  background: #e8f5e9;\n}\n.btn-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #c62828;\n  padding: 4px;\n  border-radius: 4px;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #fce8e8;\n}\n.btn-cancel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.edit-input[_ngcontent-%COMP%] {\n  width: 100px;\n  padding: 4px 6px;\n  border: 1px solid #017E84;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  text-align: right;\n}\n.prices-table[_ngcontent-%COMP%]   tr.editing[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #f0f8f8;\n}\n.add-btn-bar[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-top: 1px dashed #e0e0e0;\n}\n.btn-add-tarif[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 16px;\n  background: none;\n  border: 1.5px dashed #017E84;\n  border-radius: 6px;\n  color: #017E84;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-add-tarif[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-add-tarif[_ngcontent-%COMP%]:hover {\n  background: #e8f5f5;\n}\n.add-form-row[_ngcontent-%COMP%] {\n  border-top: 2px solid #017E84;\n  background: #f7fffe;\n  padding: 16px 20px;\n}\n.add-form-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #017E84;\n  margin-bottom: 14px;\n}\n.add-form-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.add-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: flex-end;\n  margin-bottom: 14px;\n}\n.add-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.add-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.add-field-product[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 240px;\n}\n.add-field-sm[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.add-input[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  width: 100%;\n  box-sizing: border-box;\n}\n.add-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #017E84;\n  box-shadow: 0 0 0 2px rgba(1, 126, 132, 0.15);\n}\n.add-input.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.autocomplete-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.suggest-list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  z-index: 1000;\n  max-height: 480px;\n  overflow-y: auto;\n}\n.suggest-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 12px 16px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  font-size: 0.9rem;\n  border-bottom: 1px solid #f5f5f5;\n}\n.suggest-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.suggest-item[_ngcontent-%COMP%]:hover {\n  background: #f0f8f8;\n}\n.suggest-code[_ngcontent-%COMP%] {\n  color: #888;\n  font-family: monospace;\n  font-size: 0.82rem;\n  flex-shrink: 0;\n}\n.suggest-name[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #222;\n  font-size: 0.9rem;\n}\n.suggest-price[_ngcontent-%COMP%] {\n  color: #017E84;\n  font-weight: 700;\n  flex-shrink: 0;\n  font-size: 0.85rem;\n}\n.std-price-badge[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  background: #f0f0f0;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #555;\n  white-space: nowrap;\n}\n.rabais-badge[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  background: #f5f5f5;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  color: #aaa;\n}\n.rabais-badge.positive[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n  font-weight: 700;\n}\n.rabais-badge.surplus[_ngcontent-%COMP%] {\n  background: #fce8e8;\n  color: #c62828;\n  font-weight: 700;\n}\n.add-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n.btn-add-cancel[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #fff;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  color: #555;\n}\n.btn-add-cancel[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.btn-add-cancel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-add-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  background: #017E84;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #fff;\n  cursor: pointer;\n}\n.btn-add-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #015f65;\n}\n.btn-add-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-add-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n  color: #aaa;\n}\n.empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 8px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n/*# sourceMappingURL=fournisseur-price.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FournisseurPriceComponent, [{
    type: Component,
    args: [{ selector: "app-fournisseur-price", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <h1 class="page-title">
      <span class="material-icons">price_change</span>
      Tarifs par fournisseur
    </h1>
  </div>

  <div class="toolbar">
    <input class="search-input" placeholder="Rechercher un fournisseur\u2026" [(ngModel)]="search" />
    <div class="toolbar-actions">
      <button class="btn-text" (click)="expandAll()">
        <span class="material-icons">unfold_more</span> Tout d\xE9velopper
      </button>
      <button class="btn-text" (click)="collapseAll()">
        <span class="material-icons">unfold_less</span> Tout r\xE9duire
      </button>
    </div>
  </div>

  @if (loading) {
    <div class="empty"><span class="material-icons spin">refresh</span> Chargement\u2026</div>
  } @else {
    <div class="accordion">
      @for (g of filteredGroups; track g.supplier.id) {
        <div class="acc-item" [class.open]="expandedIds.has(g.supplier.id ?? 0)">

          <div class="acc-header" (click)="toggle(g)">
            <div class="acc-left">
              <span class="material-icons acc-chevron">
                {{ expandedIds.has(g.supplier.id ?? 0) ? 'expand_less' : 'expand_more' }}
              </span>
              <span class="client-name">{{ g.supplier.name }}</span>
              @if (g.supplier.ref) {
                <span class="client-ref">{{ g.supplier.ref }}</span>
              }
            </div>
            <div class="acc-right">
              @if (g.prices !== null) {
                @if (g.prices.length > 0) {
                  <span class="badge-count">{{ g.prices.length }} tarif{{ g.prices.length > 1 ? 's' : '' }}</span>
                } @else {
                  <span class="badge-none">Aucun tarif</span>
                }
              }
            </div>
          </div>

          @if (expandedIds.has(g.supplier.id ?? 0)) {
            <div class="acc-body">
              @if (g.loading) {
                <div class="inner-loading">
                  <span class="material-icons spin" style="font-size:18px">refresh</span> Chargement\u2026
                </div>
              } @else {

                @if (g.prices && g.prices.length > 0) {
                  <table class="prices-table">
                    <thead>
                      <tr>
                        <th>Article</th>
                        <th class="text-right">Prix catalogue</th>
                        <th class="text-right">Prix fournisseur</th>
                        <th class="text-right">\xC9cart</th>
                        <th class="actions-col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      @for (p of g.prices; track p.productId) {
                        <tr [class.editing]="editingPriceId === p.id">
                          <td>
                            @if (p.productCode) {
                              <span class="prod-code">[{{ p.productCode }}]</span>
                            }
                            {{ p.productName }}
                          </td>
                          <td class="text-right muted">{{ (p.standardPrice ?? 0) | number:'1.0-0' }} FCFA</td>
                          <td class="text-right bold">
                            @if (editingPriceId === p.id) {
                              <input type="number" class="edit-input" [(ngModel)]="editForm.prixFournisseur" min="0" />
                            } @else {
                              {{ p.prixFournisseur | number:'1.0-0' }} FCFA
                            }
                          </td>
                          <td class="text-right" [class.rabais-col]="(p.ecartUnitaire ?? 0) < 0" [class.surplus-col]="(p.ecartUnitaire ?? 0) > 0">
                            @if ((p.ecartUnitaire ?? 0) < 0) {
                              \u2013 {{ -(p.ecartUnitaire ?? 0) | number:'1.0-0' }} FCFA
                            } @else if ((p.ecartUnitaire ?? 0) > 0) {
                              + {{ (p.ecartUnitaire ?? 0) | number:'1.0-0' }} FCFA
                            } @else {
                              <span class="muted">\u2013</span>
                            }
                          </td>
                          <td class="actions-col">
                            @if (editingPriceId === p.id) {
                              <button class="btn-save" (click)="saveEdit(g, p)" [disabled]="saving" title="Enregistrer">
                                <span class="material-icons">check</span>
                              </button>
                              <button class="btn-cancel" (click)="cancelEdit()" title="Annuler">
                                <span class="material-icons">close</span>
                              </button>
                            } @else {
                              <button class="btn-edit" (click)="startEdit(p)" title="Modifier">
                                <span class="material-icons">edit</span>
                              </button>
                              <button class="btn-delete" (click)="deletePrice(g, p)" title="Supprimer">
                                <span class="material-icons">delete_outline</span>
                              </button>
                            }
                          </td>
                        </tr>
                      }
                    </tbody>
                  </table>
                } @else if (!addingGroupId || addingGroupId !== g.supplier.id) {
                  <div class="inner-empty">Aucun tarif configur\xE9 pour ce fournisseur.</div>
                }

                @if (addingGroupId === g.supplier.id) {
                  <div class="add-form-row">
                    <div class="add-form-title">
                      <span class="material-icons">add_circle_outline</span>
                      Nouveau tarif pour <strong>{{ g.supplier.name }}</strong>
                    </div>
                    <div class="add-fields">

                      <div class="add-field add-field-product">
                        <label>Article *</label>
                        <div class="autocomplete-wrap">
                          <input
                            type="text"
                            class="add-input"
                            placeholder="Code ou nom de l'article\u2026"
                            [(ngModel)]="addForm.productSearch"
                            (ngModelChange)="onProductSearch()"
                            (blur)="hideProductSuggestions()"
                            autocomplete="off" />
                          @if (addForm.showSuggestions) {
                            <div class="suggest-list">
                              @for (prod of addForm.suggestions; track prod.id) {
                                <button type="button" class="suggest-item" (mousedown)="selectProduct(prod)">
                                  @if (prod.defaultCode) {
                                    <span class="suggest-code">[{{ prod.defaultCode }}]</span>
                                  }
                                  <span class="suggest-name">{{ prod.name }}</span>
                                  <span class="suggest-price">{{ (prod.standardPrice ?? 0) | number:'1.0-0' }} FCFA</span>
                                </button>
                              }
                            </div>
                          }
                        </div>
                      </div>

                      @if (addForm.productId) {
                        <div class="add-field add-field-sm">
                          <label>Prix catalogue</label>
                          <div class="std-price-badge">{{ addForm.standardPrice | number:'1.0-0' }} FCFA</div>
                        </div>
                      }

                      <div class="add-field add-field-sm">
                        <label>Prix fournisseur *</label>
                        <input type="number" class="add-input text-right"
                               [(ngModel)]="addForm.prixFournisseur" min="0"
                               placeholder="0" />
                      </div>

                      @if (addForm.productId) {
                        <div class="add-field add-field-sm">
                          <label>{{ addEcart < 0 ? 'R\xE9duction' : addEcart > 0 ? 'Surco\xFBt' : '\xC9cart' }}</label>
                          <div class="rabais-badge"
                               [class.positive]="addEcart < 0"
                               [class.surplus]="addEcart > 0">
                            @if (addEcart < 0) { \u2013 {{ -addEcart | number:'1.0-0' }} FCFA }
                            @else if (addEcart > 0) { + {{ addEcart | number:'1.0-0' }} FCFA }
                            @else { Aucun \xE9cart }
                          </div>
                        </div>
                      }

                    </div>

                    <div class="add-actions">
                      <button class="btn-add-cancel" (click)="cancelAdd()">
                        <span class="material-icons">close</span> Annuler
                      </button>
                      <button class="btn-add-save"
                              (click)="saveAdd(g)"
                              [disabled]="!addForm.productId || addForm.prixFournisseur < 0 || addSaving">
                        @if (addSaving) { <span class="material-icons spin" style="font-size:16px">refresh</span> }
                        @else { <span class="material-icons">check</span> }
                        Enregistrer
                      </button>
                    </div>
                  </div>
                }

                @if (addingGroupId !== g.supplier.id) {
                  <div class="add-btn-bar">
                    <button class="btn-add-tarif" (click)="startAdd(g)">
                      <span class="material-icons">add</span>
                      Ajouter un tarif
                    </button>
                  </div>
                }

              }
            </div>
          }

        </div>
      }

      @if (filteredGroups.length === 0 && !loading) {
        <div class="empty">
          <span class="material-icons">store</span>
          <p>Aucun fournisseur trouv\xE9</p>
        </div>
      }
    </div>
  }
</div>
`, styles: ["/* src/app/modules/purchases/components/suppliers/fournisseur-price.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.page-header {\n  margin-bottom: 20px;\n}\n.page-title {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 6px;\n}\n.toolbar {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.9rem;\n}\n.toolbar-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-text {\n  background: none;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  padding: 6px 12px;\n  font-size: 0.85rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #555;\n}\n.btn-text:hover {\n  background: var(--bg-elevated);\n}\n.accordion {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.acc-item {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n  overflow: visible;\n  transition: box-shadow 0.15s;\n}\n.acc-item.open {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);\n}\n.acc-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.acc-header:hover {\n  background: var(--bg-elevated);\n}\n.acc-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.acc-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.acc-chevron {\n  color: #aaa;\n  font-size: 20px;\n  transition: transform 0.2s;\n}\n.acc-item.open .acc-chevron {\n  color: #017E84;\n}\n.client-name {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #222;\n}\n.client-ref {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.badge-count {\n  background: #017E84;\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.badge-none {\n  font-size: 0.8rem;\n  color: #bbb;\n}\n.acc-body {\n  border-top: 1px solid #f0f0f0;\n  padding: 0;\n}\n.inner-loading {\n  padding: 16px 20px;\n  color: #aaa;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.inner-empty {\n  padding: 14px 20px;\n  color: #aaa;\n  font-size: 0.875rem;\n}\n.prices-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.prices-table th {\n  background: var(--bg-elevated);\n  padding: 8px 16px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-align: left;\n  border-bottom: 1px solid var(--border-light);\n}\n.prices-table td {\n  padding: 10px 16px;\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\n.prices-table tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.rabais-col {\n  color: #2e7d32;\n  font-weight: 700;\n}\n.surplus-col {\n  color: #c62828;\n  font-weight: 700;\n}\n.prod-code {\n  color: var(--text-muted);\n  font-family: monospace;\n  margin-right: 6px;\n  font-size: 0.8rem;\n}\n.muted {\n  color: #aaa;\n}\n.bold {\n  font-weight: 700;\n}\n.actions-col {\n  width: 90px;\n  text-align: center;\n  white-space: nowrap;\n}\n.btn-edit {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #aaa;\n  padding: 4px;\n  border-radius: 4px;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-edit:hover {\n  color: #017E84;\n  background: #e8f5f5;\n}\n.btn-edit .material-icons {\n  font-size: 18px;\n}\n.btn-delete {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #aaa;\n  padding: 4px;\n  border-radius: 4px;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-delete:hover {\n  color: #c62828;\n  background: #fce8e8;\n}\n.btn-delete .material-icons {\n  font-size: 18px;\n}\n.btn-save {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #2e7d32;\n  padding: 4px;\n  border-radius: 4px;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-save:hover {\n  background: #e8f5e9;\n}\n.btn-save .material-icons {\n  font-size: 18px;\n}\n.btn-cancel {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #c62828;\n  padding: 4px;\n  border-radius: 4px;\n  display: inline-flex;\n  align-items: center;\n}\n.btn-cancel:hover {\n  background: #fce8e8;\n}\n.btn-cancel .material-icons {\n  font-size: 18px;\n}\n.edit-input {\n  width: 100px;\n  padding: 4px 6px;\n  border: 1px solid #017E84;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  text-align: right;\n}\n.prices-table tr.editing td {\n  background: #f0f8f8;\n}\n.add-btn-bar {\n  padding: 12px 16px;\n  border-top: 1px dashed #e0e0e0;\n}\n.btn-add-tarif {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 16px;\n  background: none;\n  border: 1.5px dashed #017E84;\n  border-radius: 6px;\n  color: #017E84;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-add-tarif .material-icons {\n  font-size: 18px;\n}\n.btn-add-tarif:hover {\n  background: #e8f5f5;\n}\n.add-form-row {\n  border-top: 2px solid #017E84;\n  background: #f7fffe;\n  padding: 16px 20px;\n}\n.add-form-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #017E84;\n  margin-bottom: 14px;\n}\n.add-form-title .material-icons {\n  font-size: 18px;\n}\n.add-fields {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: flex-end;\n  margin-bottom: 14px;\n}\n.add-field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.add-field label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #555;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.add-field-product {\n  flex: 1;\n  min-width: 240px;\n}\n.add-field-sm {\n  min-width: 120px;\n}\n.add-input {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  width: 100%;\n  box-sizing: border-box;\n}\n.add-input:focus {\n  outline: none;\n  border-color: #017E84;\n  box-shadow: 0 0 0 2px rgba(1, 126, 132, 0.15);\n}\n.add-input.text-right {\n  text-align: right;\n}\n.autocomplete-wrap {\n  position: relative;\n}\n.suggest-list {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  z-index: 1000;\n  max-height: 480px;\n  overflow-y: auto;\n}\n.suggest-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 12px 16px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  font-size: 0.9rem;\n  border-bottom: 1px solid #f5f5f5;\n}\n.suggest-item:last-child {\n  border-bottom: none;\n}\n.suggest-item:hover {\n  background: #f0f8f8;\n}\n.suggest-code {\n  color: #888;\n  font-family: monospace;\n  font-size: 0.82rem;\n  flex-shrink: 0;\n}\n.suggest-name {\n  flex: 1;\n  color: #222;\n  font-size: 0.9rem;\n}\n.suggest-price {\n  color: #017E84;\n  font-weight: 700;\n  flex-shrink: 0;\n  font-size: 0.85rem;\n}\n.std-price-badge {\n  padding: 7px 10px;\n  background: #f0f0f0;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #555;\n  white-space: nowrap;\n}\n.rabais-badge {\n  padding: 7px 10px;\n  background: #f5f5f5;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  color: #aaa;\n}\n.rabais-badge.positive {\n  background: #e8f5e9;\n  color: #2e7d32;\n  font-weight: 700;\n}\n.rabais-badge.surplus {\n  background: #fce8e8;\n  color: #c62828;\n  font-weight: 700;\n}\n.add-actions {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n.btn-add-cancel {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #fff;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  color: #555;\n}\n.btn-add-cancel:hover {\n  background: #f5f5f5;\n}\n.btn-add-cancel .material-icons {\n  font-size: 16px;\n}\n.btn-add-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  background: #017E84;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #fff;\n  cursor: pointer;\n}\n.btn-add-save:hover:not(:disabled) {\n  background: #015f65;\n}\n.btn-add-save:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-add-save .material-icons {\n  font-size: 16px;\n}\n.empty {\n  text-align: center;\n  padding: 48px 24px;\n  color: #aaa;\n}\n.empty .material-icons {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 8px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin {\n  display: inline-block;\n  animation: spin 1s linear infinite;\n}\n/*# sourceMappingURL=fournisseur-price.component.css.map */\n"] }]
  }], () => [{ type: PurchaseService }, { type: StockService }, { type: AccountingService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FournisseurPriceComponent, { className: "FournisseurPriceComponent", filePath: "app/modules/purchases/components/suppliers/fournisseur-price.component.ts", lineNumber: 31 });
})();
export {
  FournisseurPriceComponent
};
//# sourceMappingURL=chunk-4FMIS7VP.js.map
