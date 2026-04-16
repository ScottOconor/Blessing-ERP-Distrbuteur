import {
  StockService
} from "./chunk-YEOTRJFB.js";
import {
  SalesService
} from "./chunk-C6CRDXMM.js";
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
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-FU5PLMG6.js";
import {
  AccountingService
} from "./chunk-TG7BJABV.js";
import {
  AuthService
} from "./chunk-MBNWDFD7.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  HostListener,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/sales/components/orders/order-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function OrderFormComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(\u0275\u0275interpolate1("state-badge state-", ctx_r0.order.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.order.state);
  }
}
function OrderFormComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirm());
    });
    \u0275\u0275elementStart(5, "span", 3);
    \u0275\u0275text(6, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Sauvegarde..." : "Sauvegarder", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.confirming || ctx_r0.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.confirming ? "Confirmation..." : "Confirmer & Facturer", " ");
  }
}
function OrderFormComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 3);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMsg, " ");
  }
}
function OrderFormComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 3);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg, " ");
  }
}
function OrderFormComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 13);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_14_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("value", c_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r4.name, "", c_r4.ref ? " (" + c_r4.ref + ")" : "");
  }
}
function OrderFormComponent_Conditional_14_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r5 = ctx.$implicit;
    \u0275\u0275property("value", j_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", j_r5.code, " - ", j_r5.name);
  }
}
function OrderFormComponent_Conditional_14_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_14_Conditional_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addLine());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ajouter une ligne ");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_14_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 35);
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_14_For_65_Conditional_4_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const \u0275$index_171_r8 = \u0275\u0275nextContext(2).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearLine(\u0275$index_171_r8));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_4_Conditional_4_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r11.defaultCode);
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_4_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("mousedown", function OrderFormComponent_Conditional_14_For_65_Conditional_4_Conditional_4_For_2_Template_div_mousedown_0_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const \u0275$index_171_r8 = \u0275\u0275nextContext(3).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectProduct(\u0275$index_171_r8, p_r11));
    });
    \u0275\u0275elementStart(1, "div", 63);
    \u0275\u0275conditionalCreate(2, OrderFormComponent_Conditional_14_For_65_Conditional_4_Conditional_4_For_2_Conditional_2_Template, 2, 1, "span", 64);
    \u0275\u0275elementStart(3, "span", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 66)(6, "span", 67);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 68);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r11.defaultCode ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("low", (p_r11.qtyOnHand || 0) <= 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(8, 7, p_r11.qtyOnHand, "1.0-0"), " ", p_r11.uomName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 10, p_r11.salePrice, "1.0-0"), " FCFA");
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_4_Conditional_4_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Aucun article dans le stock ");
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_4_Conditional_4_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const \u0275$index_171_r8 = \u0275\u0275nextContext(4).$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(' Aucun r\xE9sultat pour "', ctx_r0.lineSearches[\u0275$index_171_r8], '" ');
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_4_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275conditionalCreate(1, OrderFormComponent_Conditional_14_For_65_Conditional_4_Conditional_4_Conditional_3_Conditional_1_Template, 1, 0)(2, OrderFormComponent_Conditional_14_For_65_Conditional_4_Conditional_4_Conditional_3_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.allProducts.length === 0 ? 1 : 2);
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275repeaterCreate(1, OrderFormComponent_Conditional_14_For_65_Conditional_4_Conditional_4_For_2_Template, 12, 13, "div", 60, _forTrack0);
    \u0275\u0275conditionalCreate(3, OrderFormComponent_Conditional_14_For_65_Conditional_4_Conditional_4_Conditional_3_Template, 3, 1, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_171_r8 = \u0275\u0275nextContext(2).$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r0.dropdownRect.top, "px")("left", ctx_r0.dropdownRect.left, "px")("width", ctx_r0.dropdownRect.width, "px");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.getSuggestions(\u0275$index_171_r8));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.getSuggestions(\u0275$index_171_r8).length === 0 ? 3 : -1);
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 54)(2, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_14_For_65_Conditional_4_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const \u0275$index_171_r8 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.lineSearches[\u0275$index_171_r8], $event) || (ctx_r0.lineSearches[\u0275$index_171_r8] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function OrderFormComponent_Conditional_14_For_65_Conditional_4_Template_input_focus_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const \u0275$index_171_r8 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openSuggestions(\u0275$index_171_r8, $event));
    })("blur", function OrderFormComponent_Conditional_14_For_65_Conditional_4_Template_input_blur_2_listener() {
      \u0275\u0275restoreView(_r7);
      const \u0275$index_171_r8 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeSuggestions(\u0275$index_171_r8));
    })("input", function OrderFormComponent_Conditional_14_For_65_Conditional_4_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const \u0275$index_171_r8 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openSuggestions(\u0275$index_171_r8, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, OrderFormComponent_Conditional_14_For_65_Conditional_4_Conditional_3_Template, 3, 0, "button", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, OrderFormComponent_Conditional_14_For_65_Conditional_4_Conditional_4_Template, 4, 7, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext();
    const line_r13 = ctx_r11.$implicit;
    const \u0275$index_171_r8 = ctx_r11.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", ctx_r0.allProducts.length === 0 ? "Aucun article en stock" : "Rechercher un article...");
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.lineSearches[\u0275$index_171_r8]);
    \u0275\u0275advance();
    \u0275\u0275conditional(line_r13.productCode ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeSuggestionIdx === \u0275$index_171_r8 && ctx_r0.dropdownRect ? 4 : -1);
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r13.productCode);
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275conditionalCreate(1, OrderFormComponent_Conditional_14_For_65_Conditional_5_Conditional_1_Template, 2, 1, "span", 64);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(line_r13.productCode ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r13.description);
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_171_r8 = \u0275\u0275nextContext(2).$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("stock-low", ctx_r0.lineStockQty[\u0275$index_171_r8] <= 0)("stock-ok", ctx_r0.lineStockQty[\u0275$index_171_r8] > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.lineStockQty[\u0275$index_171_r8], " dispo ");
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_14_For_65_Conditional_7_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const line_r13 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r13.quantity, $event) || (line_r13.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrderFormComponent_Conditional_14_For_65_Conditional_7_Template_input_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r14);
      const line_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onLineChange(line_r13));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, OrderFormComponent_Conditional_14_For_65_Conditional_7_Conditional_2_Template, 2, 5, "span", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext();
    const line_r13 = ctx_r11.$implicit;
    const \u0275$index_171_r8 = ctx_r11.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("qty-warning", ctx_r0.hasStockWarning(\u0275$index_171_r8));
    \u0275\u0275twoWayProperty("ngModel", line_r13.quantity);
    \u0275\u0275advance();
    \u0275\u0275conditional(line_r13.productId ? 2 : -1);
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const line_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", line_r13.quantity, " ");
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_14_For_65_Conditional_10_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const line_r13 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r13.prixUnitaire, $event) || (line_r13.prixUnitaire = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrderFormComponent_Conditional_14_For_65_Conditional_10_Template_input_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r15);
      const line_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onLineChange(line_r13));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", line_r13.prixUnitaire);
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const line_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, line_r13.prixUnitaire, "1.0-0"), " ");
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_14_For_65_Conditional_13_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const line_r13 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r13.tauxRemise, $event) || (line_r13.tauxRemise = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrderFormComponent_Conditional_14_For_65_Conditional_13_Template_input_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r16);
      const line_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onLineChange(line_r13));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", line_r13.tauxRemise);
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const line_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", line_r13.tauxRemise || 0, " % ");
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_14_For_65_Conditional_16_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const line_r13 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r13.tauxTVA, $event) || (line_r13.tauxTVA = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrderFormComponent_Conditional_14_For_65_Conditional_16_Template_input_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r17);
      const line_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onLineChange(line_r13));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", line_r13.tauxTVA);
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const line_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", line_r13.tauxTVA || 0, " % ");
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_14_For_65_Conditional_19_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const line_r13 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r13.accountCode, $event) || (line_r13.accountCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", line_r13.accountCode);
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const line_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", line_r13.accountCode || "\u2014", " ");
  }
}
function OrderFormComponent_Conditional_14_For_65_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "button", 74);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_14_For_65_Conditional_27_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const $index_r20 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeLine($index_r20));
    });
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3, "delete_outline");
    \u0275\u0275elementEnd()()();
  }
}
function OrderFormComponent_Conditional_14_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 44);
    \u0275\u0275conditionalCreate(4, OrderFormComponent_Conditional_14_For_65_Conditional_4_Template, 5, 4, "div", 45)(5, OrderFormComponent_Conditional_14_For_65_Conditional_5_Template, 4, 2, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 47);
    \u0275\u0275conditionalCreate(7, OrderFormComponent_Conditional_14_For_65_Conditional_7_Template, 3, 4, "div", 48)(8, OrderFormComponent_Conditional_14_For_65_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 47);
    \u0275\u0275conditionalCreate(10, OrderFormComponent_Conditional_14_For_65_Conditional_10_Template, 1, 1, "input", 49)(11, OrderFormComponent_Conditional_14_For_65_Conditional_11_Template, 2, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 47);
    \u0275\u0275conditionalCreate(13, OrderFormComponent_Conditional_14_For_65_Conditional_13_Template, 1, 1, "input", 50)(14, OrderFormComponent_Conditional_14_For_65_Conditional_14_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 47);
    \u0275\u0275conditionalCreate(16, OrderFormComponent_Conditional_14_For_65_Conditional_16_Template, 1, 1, "input", 49)(17, OrderFormComponent_Conditional_14_For_65_Conditional_17_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275conditionalCreate(19, OrderFormComponent_Conditional_14_For_65_Conditional_19_Template, 1, 1, "input", 51)(20, OrderFormComponent_Conditional_14_For_65_Conditional_20_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 52);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 53);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, OrderFormComponent_Conditional_14_For_65_Conditional_27_Template, 4, 0, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r13 = ctx.$implicit;
    const \u0275$index_171_r8 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_171_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 13 : 14);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 16 : 17);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 19 : 20);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 10, line_r13.montantHT, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 13, line_r13.montantTTC, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 27 : -1);
  }
}
function OrderFormComponent_Conditional_14_Conditional_66_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_14_Conditional_66_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addLine());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "add_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Cliquez pour ajouter une ligne ");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_14_Conditional_66_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Aucune ligne ");
  }
}
function OrderFormComponent_Conditional_14_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 75);
    \u0275\u0275conditionalCreate(2, OrderFormComponent_Conditional_14_Conditional_66_Conditional_2_Template, 4, 0, "button", 76)(3, OrderFormComponent_Conditional_14_Conditional_66_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 2 : 3);
  }
}
function OrderFormComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275text(2, "Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 17)(5, "div", 18)(6, "label");
    \u0275\u0275text(7, "Client ");
    \u0275\u0275elementStart(8, "span", 19);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_14_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.order.partnerId, $event) || (ctx_r0.order.partnerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(11, "option", 21);
    \u0275\u0275text(12, "\u2014 S\xE9lectionner un client \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(13, OrderFormComponent_Conditional_14_For_14_Template, 2, 3, "option", 22, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 18)(16, "label");
    \u0275\u0275text(17, "Journal de vente ");
    \u0275\u0275elementStart(18, "span", 19);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_14_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.order.journalId, $event) || (ctx_r0.order.journalId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(21, OrderFormComponent_Conditional_14_For_22_Template, 2, 3, "option", 22, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 18)(24, "label");
    \u0275\u0275text(25, "Date du bon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_14_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.order.date, $event) || (ctx_r0.order.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 18)(28, "label");
    \u0275\u0275text(29, "Date d'\xE9ch\xE9ance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_14_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.order.dateEcheance, $event) || (ctx_r0.order.dateEcheance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 24)(32, "label");
    \u0275\u0275text(33, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "textarea", 25);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_14_Template_textarea_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.order.notes, $event) || (ctx_r0.order.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(35, "div", 14)(36, "div", 15)(37, "span");
    \u0275\u0275text(38, "Lignes de commande");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(39, OrderFormComponent_Conditional_14_Conditional_39_Template, 4, 0, "button", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 27)(41, "table", 28)(42, "thead")(43, "tr")(44, "th", 29);
    \u0275\u0275text(45, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th", 30);
    \u0275\u0275text(47, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 31);
    \u0275\u0275text(49, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th", 32);
    \u0275\u0275text(51, "Prix U.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th", 31);
    \u0275\u0275text(53, "Rem. %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th", 31);
    \u0275\u0275text(55, "TVA %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th", 33);
    \u0275\u0275text(57, "Compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th", 32);
    \u0275\u0275text(59, "Montant HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th", 34);
    \u0275\u0275text(61, "Montant TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(62, OrderFormComponent_Conditional_14_Conditional_62_Template, 1, 0, "th", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "tbody");
    \u0275\u0275repeaterCreate(64, OrderFormComponent_Conditional_14_For_65_Template, 28, 16, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(66, OrderFormComponent_Conditional_14_Conditional_66_Template, 4, 1, "tr");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(67, "div", 36)(68, "div", 37)(69, "div", 38)(70, "span", 39);
    \u0275\u0275text(71, "Total remise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span", 40);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 38)(76, "span", 39);
    \u0275\u0275text(77, "Total HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 41);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 38)(82, "span", 39);
    \u0275\u0275text(83, "TVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "span", 41);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 42)(88, "span", 39);
    \u0275\u0275text(89, "Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span", 41);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.order.partnerId);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.clients);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.order.journalId);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.journals);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.order.date);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.order.dateEcheance);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.order.notes);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 39 : -1);
    \u0275\u0275advance(23);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 62 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.order.lines);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.order.lines.length === 0 ? 66 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(74, 18, ctx_r0.order.totalRemise, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(80, 21, ctx_r0.order.totalHT, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(86, 24, ctx_r0.order.totalTVA, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(92, 27, ctx_r0.order.totalTTC, "1.0-0"), " FCFA");
  }
}
var OrderFormComponent = class _OrderFormComponent {
  onWindowChange() {
    this.activeSuggestionIdx = null;
  }
  constructor(salesService, accountingService, stockService, authService, route, router) {
    this.salesService = salesService;
    this.accountingService = accountingService;
    this.stockService = stockService;
    this.authService = authService;
    this.route = route;
    this.router = router;
    this.orderId = null;
    this.order = this.emptyOrder();
    this.clients = [];
    this.journals = [];
    this.allProducts = [];
    this.loading = false;
    this.saving = false;
    this.confirming = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.TVA_DEFAULT = 19.25;
    this.lineSearches = [];
    this.lineStockQty = [];
    this.activeSuggestionIdx = null;
    this.lineSearchResults = [];
    this.searchTimer = null;
    this.dropdownRect = null;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.orderId = id ? +id : null;
    this.loadReferenceData();
    if (this.orderId) {
      this.loadOrder(this.orderId);
    }
  }
  emptyOrder() {
    return {
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      partnerId: 0,
      journalId: 0,
      companyId: 0,
      lines: []
    };
  }
  loadReferenceData() {
    const companyId = this.authService.getCompanyId();
    this.order.companyId = companyId;
    this.salesService.getClients(companyId).subscribe({
      next: (data) => this.clients = data
    });
    this.accountingService.getJournals(companyId).subscribe({
      next: (data) => {
        this.journals = data.filter((j) => j.type === "sale");
        if (this.journals.length > 0 && !this.order.journalId) {
          this.order.journalId = this.journals[0].id;
        }
      }
    });
    this.stockService.getProducts(companyId).subscribe({
      next: (data) => {
        this.allProducts = data.filter((p) => p.type === "product" || p.type === "consu");
      },
      error: () => {
        this.errorMsg = "Impossible de charger les articles du stock";
      }
    });
  }
  loadOrder(id) {
    this.loading = true;
    this.salesService.getOrder(id).subscribe({
      next: (data) => {
        this.order = data;
        this.lineSearches = data.lines.map((l) => l.productCode ? `[${l.productCode}] ${l.description}` : l.description);
        this.lineStockQty = data.lines.map((l) => {
          if (l.productId) {
            const p = this.allProducts.find((p2) => p2.id === l.productId);
            return p?.qtyOnHand ?? 0;
          }
          return 0;
        });
        this.lineSearchResults = data.lines.map(() => []);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  get isReadOnly() {
    return this.order.state !== "draft" && this.order.state !== void 0 && this.order.state !== "";
  }
  get pageTitle() {
    if (!this.orderId)
      return "Nouveau bon de commande";
    return this.order.name ? `Bon ${this.order.name}` : "Chargement...";
  }
  addLine() {
    this.order.lines.push({
      description: "",
      quantity: 1,
      prixUnitaire: 0,
      tauxRemise: 0,
      tauxTVA: this.TVA_DEFAULT,
      accountCode: "706100"
    });
    this.lineSearches.push("");
    this.lineStockQty.push(0);
    this.lineSearchResults.push([]);
  }
  hasStockWarning(i) {
    const line = this.order.lines[i];
    const available = this.lineStockQty[i] ?? 0;
    return !!line.productId && available >= 0 && (line.quantity || 0) > available;
  }
  // ---- Autocomplete ----
  getSuggestions(i) {
    if (this.lineSearchResults[i]?.length > 0) {
      return this.lineSearchResults[i];
    }
    const q = (this.lineSearches[i] || "").toLowerCase().trim();
    if (!q || q.length < 1)
      return this.allProducts.slice(0, 8);
    return this.allProducts.filter((p) => p.name.toLowerCase().includes(q) || (p.defaultCode || "").toLowerCase().includes(q)).slice(0, 10);
  }
  onSearchInput(i) {
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
    }
    const query = this.lineSearches[i]?.trim();
    if (!query || query.length < 2 || this.allProducts.length > 0) {
      this.lineSearchResults[i] = [];
      return;
    }
    this.searchTimer = setTimeout(() => {
      const companyId = this.authService.getCompanyId();
      this.stockService.searchProducts(query, companyId).subscribe({
        next: (products) => {
          this.lineSearchResults[i] = products.filter((p) => (p.qtyOnHand || 0) >= 0).slice(0, 10);
        },
        error: () => {
          this.lineSearchResults[i] = [];
        }
      });
    }, 300);
  }
  openSuggestions(i, event) {
    if (this.order.lines[i]?.productCode) {
      this.lineSearches[i] = "";
    }
    if (event?.target) {
      const rect = event.target.getBoundingClientRect();
      const dropdownWidth = Math.max(rect.width, 420);
      const left = Math.min(rect.left, window.innerWidth - dropdownWidth - 8);
      this.dropdownRect = { top: rect.bottom + 4, left, width: dropdownWidth };
    }
    this.activeSuggestionIdx = i;
    this.onSearchInput(i);
  }
  closeSuggestions(i) {
    setTimeout(() => {
      this.activeSuggestionIdx = null;
      if (i !== void 0) {
        const line = this.order.lines[i];
        if (line?.productCode && !this.lineSearches[i]) {
          this.lineSearches[i] = line.productCode ? `[${line.productCode}] ${line.description}` : line.description;
        }
      }
    }, 200);
  }
  selectProduct(i, product) {
    const line = this.order.lines[i];
    line.productId = product.id;
    line.productCode = product.defaultCode || "";
    line.description = product.name;
    line.prixUnitaire = product.salePrice || 0;
    line.tauxTVA = this.TVA_DEFAULT;
    line.accountCode = "706100";
    this.lineSearches[i] = product.defaultCode ? `[${product.defaultCode}] ${product.name}` : product.name;
    this.lineStockQty[i] = product.qtyOnHand ?? 0;
    this.activeSuggestionIdx = null;
    this.onLineChange(line);
  }
  clearLine(i) {
    const line = this.order.lines[i];
    line.productId = void 0;
    line.productCode = "";
    line.description = "";
    line.prixUnitaire = 0;
    this.lineSearches[i] = "";
    this.lineStockQty[i] = 0;
    this.lineSearchResults[i] = [];
    this.activeSuggestionIdx = i;
  }
  removeLine(index) {
    this.order.lines.splice(index, 1);
    this.lineSearches.splice(index, 1);
    this.lineStockQty.splice(index, 1);
    this.lineSearchResults.splice(index, 1);
    this.computeTotals();
  }
  onLineChange(line) {
    const qty = line.quantity || 0;
    const pu = line.prixUnitaire || 0;
    const remise = line.tauxRemise || 0;
    const tva = line.tauxTVA || 0;
    const brut = qty * pu;
    const remiseMontant = brut * remise / 100;
    const ht = brut - remiseMontant;
    const montantTVA = ht * tva / 100;
    line.montantHT = Math.round(ht * 100) / 100;
    line.montantTVA = Math.round(montantTVA * 100) / 100;
    line.montantTTC = Math.round((ht + montantTVA) * 100) / 100;
    this.computeTotals();
  }
  computeTotals() {
    let ht = 0, tva = 0, ttc = 0, remise = 0;
    for (const line of this.order.lines) {
      ht += line.montantHT || 0;
      tva += line.montantTVA || 0;
      ttc += line.montantTTC || 0;
      const brut = (line.quantity || 0) * (line.prixUnitaire || 0);
      remise += brut * (line.tauxRemise || 0) / 100;
    }
    this.order.totalHT = Math.round(ht * 100) / 100;
    this.order.totalTVA = Math.round(tva * 100) / 100;
    this.order.totalTTC = Math.round(ttc * 100) / 100;
    this.order.totalRemise = Math.round(remise * 100) / 100;
  }
  save() {
    if (!this.order.partnerId || !this.order.journalId || this.order.lines.length === 0) {
      this.errorMsg = "Veuillez renseigner le client, le journal et au moins une ligne";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const obs = this.orderId ? this.salesService.updateOrder(this.orderId, this.order) : this.salesService.createOrder(this.order);
    obs.subscribe({
      next: (saved) => {
        this.saving = false;
        this.orderId = saved.id;
        this.order = saved;
        this.showSuccess("Bon sauvegard\xE9");
        if (!this.orderId) {
          this.router.navigate(["/sales/orders", saved.id]);
        }
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || "Erreur lors de la sauvegarde";
      }
    });
  }
  confirm() {
    if (!this.orderId) {
      this.save();
      return;
    }
    if (!confirm("Confirmer ce bon de commande ? Une facture sera cr\xE9\xE9e automatiquement."))
      return;
    this.confirming = true;
    this.errorMsg = "";
    this.salesService.confirmOrder(this.orderId).subscribe({
      next: (updated) => {
        this.confirming = false;
        this.order = updated;
        this.showSuccess(`Bon confirm\xE9 \u2014 Facture ${updated.invoiceName} cr\xE9\xE9e`);
        if (updated.invoiceId) {
          setTimeout(() => this.router.navigate(["/sales/invoices", updated.invoiceId]), 1500);
        }
      },
      error: (err) => {
        this.confirming = false;
        this.errorMsg = err.error?.message || "Erreur lors de la confirmation";
      }
    });
  }
  back() {
    this.router.navigate(["/sales/orders"]);
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 4e3);
  }
  static {
    this.\u0275fac = function OrderFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderFormComponent)(\u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderFormComponent, selectors: [["app-order-form"]], hostBindings: function OrderFormComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function OrderFormComponent_scroll_HostBindingHandler() {
          return ctx.onWindowChange();
        }, \u0275\u0275resolveWindow)("resize", function OrderFormComponent_resize_HostBindingHandler() {
          return ctx.onWindowChange();
        }, \u0275\u0275resolveWindow);
      }
    }, decls: 15, vars: 6, consts: [[1, "page-container"], [1, "page-header"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "header-info"], [1, "page-title"], [3, "class"], [1, "header-actions"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "loading-state"], [1, "btn-secondary", 3, "click", "disabled"], [1, "btn-primary", 3, "click", "disabled"], [1, "material-icons", "spin"], [1, "card", "mb-16"], [1, "card-header"], [1, "card-body"], [1, "form-grid"], [1, "form-group"], [1, "required"], [1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["disabled", "", 3, "value"], [3, "value"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-group", "form-full"], ["rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "btn-add-line"], [1, "lines-table-wrapper"], [1, "lines-table"], [1, "line-num"], [2, "min-width", "260px"], [1, "text-right", 2, "width", "80px"], [1, "text-right", 2, "width", "110px"], [2, "width", "90px"], [1, "text-right", 2, "width", "120px"], [2, "width", "36px"], [1, "totals-card"], [1, "totals-grid"], [1, "total-row"], [1, "total-label"], [1, "total-value", "text-muted"], [1, "total-value"], [1, "total-row", "total-ttc"], [1, "btn-add-line", 3, "click"], [1, "product-cell"], [1, "autocomplete-wrap"], [1, "product-readonly"], [1, "text-right"], [1, "qty-cell-wrap"], ["type", "number", "min", "0", 1, "input-cell", "text-right", 3, "ngModel"], ["type", "number", "min", "0", "max", "100", 1, "input-cell", "text-right", 3, "ngModel"], ["type", "text", "placeholder", "706100", 1, "input-cell", 3, "ngModel"], [1, "text-right", "amount-col"], [1, "text-right", "amount-col-ttc"], [1, "autocomplete-input-row"], ["type", "text", "autocomplete", "off", 1, "input-cell", "product-search", 3, "ngModelChange", "focus", "blur", "input", "placeholder", "ngModel"], ["title", "Changer d'article", 1, "btn-clear-product"], [1, "suggestions-panel", 3, "top", "left", "width"], ["title", "Changer d'article", 1, "btn-clear-product", 3, "click"], [1, "suggestions-panel"], [1, "suggestion-item"], [1, "sug-empty"], [1, "suggestion-item", 3, "mousedown"], [1, "suggestion-main"], [1, "sug-code"], [1, "sug-name"], [1, "suggestion-meta"], [1, "sug-stock"], [1, "sug-price"], ["type", "number", "min", "0", 1, "input-cell", "text-right", 3, "ngModelChange", "ngModel"], [1, "stock-badge", 3, "stock-low", "stock-ok"], [1, "stock-badge"], ["type", "number", "min", "0", "max", "100", 1, "input-cell", "text-right", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "706100", 1, "input-cell", 3, "ngModelChange", "ngModel"], ["title", "Supprimer", 1, "btn-remove-line", 3, "click"], ["colspan", "10", 1, "empty-lines"], [1, "btn-add-line-inline"], [1, "btn-add-line-inline", 3, "click"]], template: function OrderFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function OrderFormComponent_Template_button_click_2_listener() {
          return ctx.back();
        });
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 4)(6, "h1", 5);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, OrderFormComponent_Conditional_8_Template, 2, 4, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275conditionalCreate(10, OrderFormComponent_Conditional_10_Template, 8, 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(11, OrderFormComponent_Conditional_11_Template, 4, 1, "div", 8);
        \u0275\u0275conditionalCreate(12, OrderFormComponent_Conditional_12_Template, 4, 1, "div", 9);
        \u0275\u0275conditionalCreate(13, OrderFormComponent_Conditional_13_Template, 4, 0, "div", 10)(14, OrderFormComponent_Conditional_14_Template, 93, 30);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.pageTitle);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.order.state ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.isReadOnly ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 13 : 14);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, DecimalPipe], styles: ['@charset "UTF-8";\n\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  transition: all 0.15s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n  color: #212529;\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.state-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.state-badge.state-draft[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.state-badge.state-confirmed[_ngcontent-%COMP%] {\n  background: #cfe2ff;\n  color: #084298;\n}\n.state-badge.state-invoiced[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.state-badge.state-cancelled[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #842029;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #017E84;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #015f64;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #017E84;\n  border: 1px solid #017E84;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0fafa;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n  border: 1px solid #a3e0c9;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 18px;\n}\n.mb-16[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.form-group[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #017E84;\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background: #f8f9fa;\n  color: #6c757d;\n}\n.btn-add-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #017E84;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-add-line[_ngcontent-%COMP%]:hover {\n  background: #015f64;\n}\n.lines-table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 10px;\n  text-align: left;\n  font-size: 10px;\n  font-weight: 700;\n  color: #8c96a3;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  background: #f4f6f8;\n  border-bottom: 2px solid #e2e8ef;\n  white-space: nowrap;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.1s;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f0fafa;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   .btn-remove-line[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 6px;\n  font-size: 13px;\n  border-bottom: 1px solid #eef1f4;\n  vertical-align: middle;\n}\n.line-num[_ngcontent-%COMP%] {\n  width: 28px;\n  text-align: center;\n  font-size: 11px;\n  color: #adb5bd;\n  font-weight: 600;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.amount-col[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 13px;\n  color: #495057;\n}\n.amount-col-ttc[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 13px;\n  font-weight: 700;\n  color: #017E84;\n}\n.input-cell[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 8px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  transition: border-color 0.15s, background 0.15s;\n  box-sizing: border-box;\n}\n.input-cell[_ngcontent-%COMP%]:hover {\n  border-color: #dee2e6;\n  background: #fff;\n}\n.input-cell[_ngcontent-%COMP%]:focus {\n  border-color: #017E84;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(1, 126, 132, 0.12);\n}\n.input-cell.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.qty-cell-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.stock-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 5px;\n  border-radius: 3px;\n  white-space: nowrap;\n}\n.stock-badge.stock-ok[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.stock-badge.stock-low[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #842029;\n}\n.qty-warning[_ngcontent-%COMP%] {\n  border-color: #dc3545 !important;\n  background: #fff8f8 !important;\n}\n.product-cell[_ngcontent-%COMP%] {\n  padding: 3px 5px !important;\n}\n.autocomplete-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.autocomplete-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.product-search[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.product-search[_ngcontent-%COMP%]:focus {\n  border-color: #017E84 !important;\n  background: white !important;\n}\n.btn-clear-product[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #adb5bd;\n  padding: 2px;\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n}\n.btn-clear-product[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-clear-product[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n  background: #fde8e8;\n}\n.suggestions-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  background: white;\n  border: 1px solid #c8d0da;\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);\n  z-index: 9999;\n  max-height: 340px;\n  overflow-y: auto;\n}\n.suggestion-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid #f0f0f0;\n  transition: background 0.12s;\n  gap: 10px;\n}\n.suggestion-item[_ngcontent-%COMP%]:first-child {\n  border-radius: 10px 10px 0 0;\n}\n.suggestion-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  border-radius: 0 0 10px 10px;\n}\n.suggestion-item[_ngcontent-%COMP%]:hover {\n  background: #e8f5f5;\n}\n.suggestion-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 0;\n}\n.sug-code[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-family: monospace;\n  font-size: 11px;\n  background: #e6f4f4;\n  color: #017E84;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-weight: 700;\n  min-width: 52px;\n  text-align: center;\n}\n.sug-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #212529;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.suggestion-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.sug-stock[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #198754;\n  background: #e8f5e9;\n  padding: 2px 7px;\n  border-radius: 4px;\n}\n.sug-stock.low[_ngcontent-%COMP%] {\n  color: #dc3545;\n  background: #fde8e8;\n}\n.sug-price[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #495057;\n  font-family: monospace;\n  font-weight: 600;\n  background: #f4f6f8;\n  padding: 2px 7px;\n  border-radius: 4px;\n}\n.sug-empty[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  text-align: center;\n  color: #adb5bd;\n  font-size: 13px;\n  font-style: italic;\n}\n.product-readonly[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n}\n.empty-lines[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 36px;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.btn-add-line-inline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: 2px dashed #d0dae6;\n  border-radius: 6px;\n  padding: 10px 20px;\n  color: #adb5bd;\n  cursor: pointer;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.btn-add-line-inline[_ngcontent-%COMP%]:hover {\n  border-color: #017E84;\n  color: #017E84;\n  background: #f0fafa;\n}\n.btn-add-line-inline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-remove-line[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #c8d0da;\n  opacity: 0;\n  transition: all 0.15s;\n}\n.btn-remove-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-remove-line[_ngcontent-%COMP%]:hover {\n  background: #fde8e8;\n  color: #dc3545;\n  opacity: 1 !important;\n}\n.totals-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 24px;\n}\n.totals-grid[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  padding: 16px 24px;\n  min-width: 300px;\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 0;\n  border-bottom: 1px solid #f0f0f0;\n  font-size: 14px;\n}\n.total-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.total-row[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.total-row[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.total-row.total-ttc[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  margin-top: 4px;\n  border-top: 2px solid #017E84;\n  border-bottom: none;\n}\n.total-row.total-ttc[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #212529;\n}\n.total-row.total-ttc[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #017E84;\n}\n/*# sourceMappingURL=order-form.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderFormComponent, [{
    type: Component,
    args: [{ selector: "app-order-form", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <!-- Header -->
  <div class="page-header">
    <button class="btn-back" (click)="back()">
      <span class="material-icons">arrow_back</span>
    </button>
    <div class="header-info">
      <h1 class="page-title">{{ pageTitle }}</h1>
      @if (order.state) {
        <span class="state-badge state-{{ order.state }}">{{ order.state }}</span>
      }
    </div>
    <div class="header-actions">
      @if (!isReadOnly) {
        <button class="btn-secondary" (click)="save()" [disabled]="saving">
          <span class="material-icons">save</span>
          {{ saving ? 'Sauvegarde...' : 'Sauvegarder' }}
        </button>
        <button class="btn-primary" (click)="confirm()" [disabled]="confirming || saving">
          <span class="material-icons">check_circle</span>
          {{ confirming ? 'Confirmation...' : 'Confirmer & Facturer' }}
        </button>
      }
    </div>
  </div>

  @if (successMsg) {
    <div class="alert alert-success">
      <span class="material-icons">check_circle</span> {{ successMsg }}
    </div>
  }
  @if (errorMsg) {
    <div class="alert alert-danger">
      <span class="material-icons">error</span> {{ errorMsg }}
    </div>
  }

  @if (loading) {
    <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else {
    <!-- Informations g\xE9n\xE9rales -->
    <div class="card mb-16">
      <div class="card-header">Informations g\xE9n\xE9rales</div>
      <div class="card-body">
        <div class="form-grid">
          <div class="form-group">
            <label>Client <span class="required">*</span></label>
            <select [(ngModel)]="order.partnerId" [disabled]="isReadOnly" class="form-control">
              <option [value]="0" disabled>\u2014 S\xE9lectionner un client \u2014</option>
              @for (c of clients; track c.id) {
                <option [value]="c.id">{{ c.name }}{{ c.ref ? ' (' + c.ref + ')' : '' }}</option>
              }
            </select>
          </div>
          <div class="form-group">
            <label>Journal de vente <span class="required">*</span></label>
            <select [(ngModel)]="order.journalId" [disabled]="isReadOnly" class="form-control">
              @for (j of journals; track j.id) {
                <option [value]="j.id">{{ j.code }} - {{ j.name }}</option>
              }
            </select>
          </div>
          <div class="form-group">
            <label>Date du bon</label>
            <input type="date" [(ngModel)]="order.date" [disabled]="isReadOnly" class="form-control" />
          </div>
          <div class="form-group">
            <label>Date d'\xE9ch\xE9ance</label>
            <input type="date" [(ngModel)]="order.dateEcheance" [disabled]="isReadOnly" class="form-control" />
          </div>
          <div class="form-group form-full">
            <label>Notes</label>
            <textarea [(ngModel)]="order.notes" [disabled]="isReadOnly" class="form-control" rows="2"></textarea>
          </div>
        </div>
      </div>
    </div>

    <!-- Lignes -->
    <div class="card mb-16">
      <div class="card-header">
        <span>Lignes de commande</span>
        @if (!isReadOnly) {
          <button class="btn-add-line" (click)="addLine()">
            <span class="material-icons">add</span> Ajouter une ligne
          </button>
        }
      </div>
      <div class="lines-table-wrapper">
        <table class="lines-table">
          <thead>
            <tr>
              <th class="line-num">#</th>
              <th style="min-width:260px">Article</th>
              <th class="text-right" style="width:80px">Qt\xE9</th>
              <th class="text-right" style="width:110px">Prix U.</th>
              <th class="text-right" style="width:80px">Rem. %</th>
              <th class="text-right" style="width:80px">TVA %</th>
              <th style="width:90px">Compte</th>
              <th class="text-right" style="width:110px">Montant HT</th>
              <th class="text-right" style="width:120px">Montant TTC</th>
              @if (!isReadOnly) { <th style="width:36px"></th> }
            </tr>
          </thead>
          <tbody>
            @for (line of order.lines; track $index; let i = $index) {
              <tr>
                <td class="line-num">{{ i + 1 }}</td>
                <!-- Colonne article avec autocomplete -->
                <td class="product-cell">
                  @if (!isReadOnly) {
                    <div class="autocomplete-wrap">
                      <div class="autocomplete-input-row">
                        <input
                          type="text"
                          class="input-cell product-search"
                          [placeholder]="allProducts.length === 0 ? 'Aucun article en stock' : 'Rechercher un article...'"
                          [(ngModel)]="lineSearches[i]"
                          (focus)="openSuggestions(i, $event)"
                          (blur)="closeSuggestions(i)"
                          (input)="openSuggestions(i, $event)"
                          autocomplete="off"
                        />
                        @if (line.productCode) {
                          <button class="btn-clear-product" (click)="clearLine(i)" title="Changer d'article">
                            <span class="material-icons">close</span>
                          </button>
                        }
                      </div>
                      @if (activeSuggestionIdx === i && dropdownRect) {
                        <div class="suggestions-panel"
                          [style.top.px]="dropdownRect.top"
                          [style.left.px]="dropdownRect.left"
                          [style.width.px]="dropdownRect.width">
                          @for (p of getSuggestions(i); track p.id) {
                            <div class="suggestion-item" (mousedown)="selectProduct(i, p)">
                              <div class="suggestion-main">
                                @if (p.defaultCode) {
                                  <span class="sug-code">{{ p.defaultCode }}</span>
                                }
                                <span class="sug-name">{{ p.name }}</span>
                              </div>
                              <div class="suggestion-meta">
                                <span class="sug-stock" [class.low]="(p.qtyOnHand || 0) <= 0">
                                  {{ p.qtyOnHand | number:'1.0-0' }} {{ p.uomName }}
                                </span>
                                <span class="sug-price">{{ p.salePrice | number:'1.0-0' }} FCFA</span>
                              </div>
                            </div>
                          }
                          @if (getSuggestions(i).length === 0) {
                            <div class="sug-empty">
                              @if (allProducts.length === 0) { Aucun article dans le stock }
                              @else { Aucun r\xE9sultat pour "{{ lineSearches[i] }}" }
                            </div>
                          }
                        </div>
                      }
                    </div>
                  } @else {
                    <div class="product-readonly">
                      @if (line.productCode) { <span class="sug-code">{{ line.productCode }}</span> }
                      <span>{{ line.description }}</span>
                    </div>
                  }
                </td>
                <td class="text-right">
                  @if (!isReadOnly) {
                    <div class="qty-cell-wrap">
                      <input type="number" [(ngModel)]="line.quantity" (ngModelChange)="onLineChange(line)"
                             class="input-cell text-right" [class.qty-warning]="hasStockWarning(i)" min="0" />
                      @if (line.productId) {
                        <span class="stock-badge" [class.stock-low]="lineStockQty[i] <= 0" [class.stock-ok]="lineStockQty[i] > 0">
                          {{ lineStockQty[i] }} dispo
                        </span>
                      }
                    </div>
                  } @else { {{ line.quantity }} }
                </td>
                <td class="text-right">
                  @if (!isReadOnly) {
                    <input type="number" [(ngModel)]="line.prixUnitaire" (ngModelChange)="onLineChange(line)" class="input-cell text-right" min="0" />
                  } @else { {{ line.prixUnitaire | number:'1.0-0' }} }
                </td>
                <td class="text-right">
                  @if (!isReadOnly) {
                    <input type="number" [(ngModel)]="line.tauxRemise" (ngModelChange)="onLineChange(line)" class="input-cell text-right" min="0" max="100" />
                  } @else { {{ line.tauxRemise || 0 }} % }
                </td>
                <td class="text-right">
                  @if (!isReadOnly) {
                    <input type="number" [(ngModel)]="line.tauxTVA" (ngModelChange)="onLineChange(line)" class="input-cell text-right" min="0" />
                  } @else { {{ line.tauxTVA || 0 }} % }
                </td>
                <td>
                  @if (!isReadOnly) {
                    <input type="text" [(ngModel)]="line.accountCode" class="input-cell" placeholder="706100" />
                  } @else { {{ line.accountCode || '\u2014' }} }
                </td>
                <td class="text-right amount-col">{{ line.montantHT | number:'1.0-0' }}</td>
                <td class="text-right amount-col-ttc">{{ line.montantTTC | number:'1.0-0' }}</td>
                @if (!isReadOnly) {
                  <td>
                    <button class="btn-remove-line" (click)="removeLine($index)" title="Supprimer">
                      <span class="material-icons">delete_outline</span>
                    </button>
                  </td>
                }
              </tr>
            }
            @if (order.lines.length === 0) {
              <tr>
                <td colspan="10" class="empty-lines">
                  @if (!isReadOnly) {
                    <button class="btn-add-line-inline" (click)="addLine()">
                      <span class="material-icons">add_circle_outline</span>
                      Cliquez pour ajouter une ligne
                    </button>
                  } @else {
                    Aucune ligne
                  }
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>

    <!-- Totaux -->
    <div class="totals-card">
      <div class="totals-grid">
        <div class="total-row">
          <span class="total-label">Total remise</span>
          <span class="total-value text-muted">{{ order.totalRemise | number:'1.0-0' }} FCFA</span>
        </div>
        <div class="total-row">
          <span class="total-label">Total HT</span>
          <span class="total-value">{{ order.totalHT | number:'1.0-0' }} FCFA</span>
        </div>
        <div class="total-row">
          <span class="total-label">TVA</span>
          <span class="total-value">{{ order.totalTVA | number:'1.0-0' }} FCFA</span>
        </div>
        <div class="total-row total-ttc">
          <span class="total-label">Total TTC</span>
          <span class="total-value">{{ order.totalTTC | number:'1.0-0' }} FCFA</span>
        </div>
      </div>
    </div>
  }
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/sales/components/orders/order-form.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.page-header .header-info {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header .header-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-back {\n  width: 36px;\n  height: 36px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  transition: all 0.15s;\n}\n.btn-back:hover {\n  background: #f0f0f0;\n  color: #212529;\n}\n.btn-back .material-icons {\n  font-size: 20px;\n}\n.state-badge {\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.state-badge.state-draft {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.state-badge.state-confirmed {\n  background: #cfe2ff;\n  color: #084298;\n}\n.state-badge.state-invoiced {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.state-badge.state-cancelled {\n  background: #fde8e8;\n  color: #842029;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: #017E84;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #015f64;\n}\n.btn-secondary {\n  background: white;\n  color: #017E84;\n  border: 1px solid #017E84;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #f0fafa;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: #0a5c45;\n  border: 1px solid #a3e0c9;\n}\n.alert.alert-danger {\n  background: #fde8e8;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.card .card-body {\n  padding: 18px;\n}\n.mb-16 {\n  margin-bottom: 16px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.form-grid .form-full {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.form-group .required {\n  color: #dc3545;\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.form-control:focus {\n  border-color: #017E84;\n}\n.form-control:disabled {\n  background: #f8f9fa;\n  color: #6c757d;\n}\n.btn-add-line {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #017E84;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line .material-icons {\n  font-size: 16px;\n}\n.btn-add-line:hover {\n  background: #015f64;\n}\n.lines-table-wrapper {\n  overflow-x: auto;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table th {\n  padding: 9px 10px;\n  text-align: left;\n  font-size: 10px;\n  font-weight: 700;\n  color: #8c96a3;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  background: #f4f6f8;\n  border-bottom: 2px solid #e2e8ef;\n  white-space: nowrap;\n}\n.lines-table tbody tr {\n  transition: background 0.1s;\n}\n.lines-table tbody tr:hover td {\n  background: #f0fafa;\n}\n.lines-table tbody tr:hover .btn-remove-line {\n  opacity: 1;\n}\n.lines-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.lines-table td {\n  padding: 4px 6px;\n  font-size: 13px;\n  border-bottom: 1px solid #eef1f4;\n  vertical-align: middle;\n}\n.line-num {\n  width: 28px;\n  text-align: center;\n  font-size: 11px;\n  color: #adb5bd;\n  font-weight: 600;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.text-right {\n  text-align: right;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: #adb5bd;\n}\n.amount-col {\n  font-family: "Roboto Mono", monospace;\n  font-size: 13px;\n  color: #495057;\n}\n.amount-col-ttc {\n  font-family: "Roboto Mono", monospace;\n  font-size: 13px;\n  font-weight: 700;\n  color: #017E84;\n}\n.input-cell {\n  width: 100%;\n  padding: 5px 8px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  transition: border-color 0.15s, background 0.15s;\n  box-sizing: border-box;\n}\n.input-cell:hover {\n  border-color: #dee2e6;\n  background: #fff;\n}\n.input-cell:focus {\n  border-color: #017E84;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(1, 126, 132, 0.12);\n}\n.input-cell.text-right {\n  text-align: right;\n}\n.qty-cell-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.stock-badge {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 5px;\n  border-radius: 3px;\n  white-space: nowrap;\n}\n.stock-badge.stock-ok {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.stock-badge.stock-low {\n  background: #fde8e8;\n  color: #842029;\n}\n.qty-warning {\n  border-color: #dc3545 !important;\n  background: #fff8f8 !important;\n}\n.product-cell {\n  padding: 3px 5px !important;\n}\n.autocomplete-wrap {\n  position: relative;\n}\n.autocomplete-input-row {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.product-search {\n  flex: 1;\n}\n.product-search:focus {\n  border-color: #017E84 !important;\n  background: white !important;\n}\n.btn-clear-product {\n  flex-shrink: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #adb5bd;\n  padding: 2px;\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n}\n.btn-clear-product .material-icons {\n  font-size: 14px;\n}\n.btn-clear-product:hover {\n  color: #dc3545;\n  background: #fde8e8;\n}\n.suggestions-panel {\n  position: fixed;\n  background: white;\n  border: 1px solid #c8d0da;\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);\n  z-index: 9999;\n  max-height: 340px;\n  overflow-y: auto;\n}\n.suggestion-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid #f0f0f0;\n  transition: background 0.12s;\n  gap: 10px;\n}\n.suggestion-item:first-child {\n  border-radius: 10px 10px 0 0;\n}\n.suggestion-item:last-child {\n  border-bottom: none;\n  border-radius: 0 0 10px 10px;\n}\n.suggestion-item:hover {\n  background: #e8f5f5;\n}\n.suggestion-main {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 0;\n}\n.sug-code {\n  flex-shrink: 0;\n  font-family: monospace;\n  font-size: 11px;\n  background: #e6f4f4;\n  color: #017E84;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-weight: 700;\n  min-width: 52px;\n  text-align: center;\n}\n.sug-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #212529;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.suggestion-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.sug-stock {\n  font-size: 11px;\n  font-weight: 700;\n  color: #198754;\n  background: #e8f5e9;\n  padding: 2px 7px;\n  border-radius: 4px;\n}\n.sug-stock.low {\n  color: #dc3545;\n  background: #fde8e8;\n}\n.sug-price {\n  font-size: 12px;\n  color: #495057;\n  font-family: monospace;\n  font-weight: 600;\n  background: #f4f6f8;\n  padding: 2px 7px;\n  border-radius: 4px;\n}\n.sug-empty {\n  padding: 14px 18px;\n  text-align: center;\n  color: #adb5bd;\n  font-size: 13px;\n  font-style: italic;\n}\n.product-readonly {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n}\n.empty-lines {\n  text-align: center;\n  padding: 36px;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.btn-add-line-inline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: 2px dashed #d0dae6;\n  border-radius: 6px;\n  padding: 10px 20px;\n  color: #adb5bd;\n  cursor: pointer;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.btn-add-line-inline:hover {\n  border-color: #017E84;\n  color: #017E84;\n  background: #f0fafa;\n}\n.btn-add-line-inline .material-icons {\n  font-size: 20px;\n}\n.btn-remove-line {\n  width: 28px;\n  height: 28px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #c8d0da;\n  opacity: 0;\n  transition: all 0.15s;\n}\n.btn-remove-line .material-icons {\n  font-size: 17px;\n}\n.btn-remove-line:hover {\n  background: #fde8e8;\n  color: #dc3545;\n  opacity: 1 !important;\n}\n.totals-card {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 24px;\n}\n.totals-grid {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  padding: 16px 24px;\n  min-width: 300px;\n}\n.total-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 0;\n  border-bottom: 1px solid #f0f0f0;\n  font-size: 14px;\n}\n.total-row:last-child {\n  border-bottom: none;\n}\n.total-row .total-label {\n  color: #6c757d;\n}\n.total-row .total-value {\n  font-weight: 500;\n}\n.total-row.total-ttc {\n  padding-top: 12px;\n  margin-top: 4px;\n  border-top: 2px solid #017E84;\n  border-bottom: none;\n}\n.total-row.total-ttc .total-label {\n  font-size: 15px;\n  font-weight: 600;\n  color: #212529;\n}\n.total-row.total-ttc .total-value {\n  font-size: 18px;\n  font-weight: 700;\n  color: #017E84;\n}\n/*# sourceMappingURL=order-form.component.css.map */\n'] }]
  }], () => [{ type: SalesService }, { type: AccountingService }, { type: StockService }, { type: AuthService }, { type: ActivatedRoute }, { type: Router }], { onWindowChange: [{
    type: HostListener,
    args: ["window:scroll", []]
  }, {
    type: HostListener,
    args: ["window:resize", []]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderFormComponent, { className: "OrderFormComponent", filePath: "src/app/modules/sales/components/orders/order-form.component.ts", lineNumber: 18 });
})();
export {
  OrderFormComponent
};
//# sourceMappingURL=chunk-S7QDI4UJ.js.map
