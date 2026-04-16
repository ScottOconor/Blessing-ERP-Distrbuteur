import {
  PurchaseService
} from "./chunk-J47TS3XK.js";
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
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/purchases/components/orders/order-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function OrderFormComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("badge-" + ctx_r0.order.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.stateLabel(ctx_r0.order.state));
  }
}
function OrderFormComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveOrder());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Sauvegarde..." : "Sauvegarder", " ");
  }
}
function OrderFormComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmOrder());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.confirming);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.confirming ? "Confirmation..." : "Confirmer", " ");
  }
}
function OrderFormComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelOrder());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Annuler ");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 3);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.successMsg, " ");
  }
}
function OrderFormComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 3);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 19);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_14_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.errorMsg = "");
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMsg, " ");
  }
}
function OrderFormComponent_Conditional_15_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_15_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.router.navigate(["/stock/receptions/bordereau", ctx_r0.order.pickingId]));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Saisir le bordereau ");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 3);
    \u0275\u0275text(2, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " R\xE9ception en attente : ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, OrderFormComponent_Conditional_15_Conditional_8_Template, 4, 0, "button", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.order.pickingName);
    \u0275\u0275advance();
    \u0275\u0275classMap("badge-picking-" + ctx_r0.order.pickingState);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.order.pickingState);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.order.pickingState !== "done" && ctx_r0.order.pickingId ? 8 : -1);
  }
}
function OrderFormComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "span", 22);
    \u0275\u0275text(2, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_17_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    \u0275\u0275property("value", s_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r8.name);
  }
}
function OrderFormComponent_Conditional_17_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_17_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
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
function OrderFormComponent_Conditional_17_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 3);
    \u0275\u0275text(2, "playlist_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, 'Aucune ligne. Cliquez sur "Ajouter une ligne".');
    \u0275\u0275elementEnd()();
  }
}
function OrderFormComponent_Conditional_17_Conditional_30_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 49);
  }
}
function OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("mousedown", function OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_7_Template_button_mousedown_0_listener() {
      \u0275\u0275restoreView(_r12);
      const \u0275$index_186_r11 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.clearLine(\u0275$index_186_r11));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_8_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1, "Aucun article dans le stock");
    \u0275\u0275elementEnd();
  }
}
function OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_8_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_186_r11 = \u0275\u0275nextContext(3).$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('Aucun r\xE9sultat pour "', ctx_r0.lineSearches[\u0275$index_186_r11], '"');
  }
}
function OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_8_Conditional_1_Conditional_0_Template, 2, 0, "div", 63)(1, OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_8_Conditional_1_Conditional_1_Template, 2, 1, "div", 63);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional(ctx_r0.allProducts.length === 0 ? 0 : 1);
  }
}
function OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_8_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("mousedown", function OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_8_Conditional_2_For_1_Template_div_mousedown_0_listener() {
      const p_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const \u0275$index_186_r11 = \u0275\u0275nextContext(3).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectProduct(\u0275$index_186_r11, p_r14));
    });
    \u0275\u0275elementStart(1, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 68);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r14.defaultCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 3, p_r14.standardPrice, "1.0-0"), " FCFA");
  }
}
function OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_8_Conditional_2_For_1_Template, 8, 6, "div", 64, _forTrack0);
  }
  if (rf & 2) {
    const \u0275$index_186_r11 = \u0275\u0275nextContext(2).$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r0.getSuggestions(\u0275$index_186_r11));
  }
}
function OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275conditionalCreate(1, OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_8_Conditional_1_Template, 2, 1)(2, OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_8_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_186_r11 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("top", ctx_r0.dropdownRect.top, "px")("left", ctx_r0.dropdownRect.left, "px")("width", ctx_r0.dropdownRect.width, "px");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getSuggestions(\u0275$index_186_r11).length === 0 ? 1 : 2);
  }
}
function OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 49)(1, "button", 69);
    \u0275\u0275listener("click", function OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_21_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const \u0275$index_186_r11 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeLine(\u0275$index_186_r11));
    });
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3, "delete_outline");
    \u0275\u0275elementEnd()()();
  }
}
function OrderFormComponent_Conditional_17_Conditional_30_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 43)(4, "div", 50)(5, "div", 51)(6, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_17_Conditional_30_For_21_Template_input_ngModelChange_6_listener($event) {
      const \u0275$index_186_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.lineSearches[\u0275$index_186_r11], $event) || (ctx_r0.lineSearches[\u0275$index_186_r11] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function OrderFormComponent_Conditional_17_Conditional_30_For_21_Template_input_focus_6_listener($event) {
      const \u0275$index_186_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSuggestions(\u0275$index_186_r11, $event));
    })("blur", function OrderFormComponent_Conditional_17_Conditional_30_For_21_Template_input_blur_6_listener() {
      const \u0275$index_186_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeSuggestions(\u0275$index_186_r11));
    })("input", function OrderFormComponent_Conditional_17_Conditional_30_For_21_Template_input_input_6_listener($event) {
      const \u0275$index_186_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSuggestions(\u0275$index_186_r11, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_7_Template, 3, 0, "button", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_8_Template, 3, 7, "div", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 55)(10, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_17_Conditional_30_For_21_Template_input_ngModelChange_10_listener($event) {
      const line_r15 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(line_r15.quantity, $event) || (line_r15.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrderFormComponent_Conditional_17_Conditional_30_For_21_Template_input_ngModelChange_10_listener() {
      const \u0275$index_186_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.computeLine(\u0275$index_186_r11));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 57)(12, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_17_Conditional_30_For_21_Template_input_ngModelChange_12_listener($event) {
      const line_r15 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(line_r15.prixUnitaire, $event) || (line_r15.prixUnitaire = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrderFormComponent_Conditional_17_Conditional_30_For_21_Template_input_ngModelChange_12_listener() {
      const \u0275$index_186_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.computeLine(\u0275$index_186_r11));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 59)(14, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_17_Conditional_30_For_21_Template_input_ngModelChange_14_listener($event) {
      const line_r15 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(line_r15.tauxTVA, $event) || (line_r15.tauxTVA = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OrderFormComponent_Conditional_17_Conditional_30_For_21_Template_input_ngModelChange_14_listener() {
      const \u0275$index_186_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.computeLine(\u0275$index_186_r11));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 47);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 48);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, OrderFormComponent_Conditional_17_Conditional_30_For_21_Conditional_21_Template, 4, 0, "td", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r15 = ctx.$implicit;
    const \u0275$index_186_r11 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_186_r11 + 1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.lineSearches[\u0275$index_186_r11]);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance();
    \u0275\u0275conditional(line_r15.productId && !ctx_r0.isReadOnly ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeSuggestionIdx === \u0275$index_186_r11 && ctx_r0.dropdownRect ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r15.quantity);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r15.prixUnitaire);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r15.tauxTVA);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 14, line_r15.montantHT ?? 0, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 17, line_r15.montantTTC ?? 0, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 21 : -1);
  }
}
function OrderFormComponent_Conditional_17_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "table", 41)(2, "thead")(3, "tr")(4, "th", 42);
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 43);
    \u0275\u0275text(7, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 44);
    \u0275\u0275text(9, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 45);
    \u0275\u0275text(11, "Prix unitaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 46);
    \u0275\u0275text(13, "TVA %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 47);
    \u0275\u0275text(15, "Montant HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 48);
    \u0275\u0275text(17, "Montant TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, OrderFormComponent_Conditional_17_Conditional_30_Conditional_18_Template, 1, 0, "th", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, OrderFormComponent_Conditional_17_Conditional_30_For_21_Template, 22, 20, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.order.lines);
  }
}
function OrderFormComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 23)(2, "div", 24)(3, "label");
    \u0275\u0275text(4, "Fournisseur ");
    \u0275\u0275elementStart(5, "span", 25);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_17_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.order.partnerId, $event) || (ctx_r0.order.partnerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(8, "option", 27);
    \u0275\u0275text(9, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, OrderFormComponent_Conditional_17_For_11_Template, 2, 2, "option", 27, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 24)(13, "label");
    \u0275\u0275text(14, "Date commande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_17_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.order.date, $event) || (ctx_r0.order.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 24)(17, "label");
    \u0275\u0275text(18, "Date livraison pr\xE9vue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_17_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.order.dateExpected, $event) || (ctx_r0.order.dateExpected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 29)(21, "label");
    \u0275\u0275text(22, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "textarea", 30);
    \u0275\u0275twoWayListener("ngModelChange", function OrderFormComponent_Conditional_17_Template_textarea_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.order.notes, $event) || (ctx_r0.order.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 31)(25, "div", 32)(26, "h3");
    \u0275\u0275text(27, "Lignes de commande");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, OrderFormComponent_Conditional_17_Conditional_28_Template, 4, 0, "button", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, OrderFormComponent_Conditional_17_Conditional_29_Template, 5, 0, "div", 34)(30, OrderFormComponent_Conditional_17_Conditional_30_Template, 22, 1, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 36)(32, "div", 37)(33, "div", 38)(34, "span");
    \u0275\u0275text(35, "Total HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 38)(40, "span");
    \u0275\u0275text(41, "TVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 39)(46, "span");
    \u0275\u0275text(47, "Total TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.order.partnerId);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.suppliers);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.order.date);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.order.dateExpected);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.order.notes);
    \u0275\u0275property("disabled", ctx_r0.isReadOnly);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r0.isReadOnly ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.order.lines.length === 0 ? 29 : 30);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(38, 14, ctx_r0.totalHT, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(44, 17, ctx_r0.totalTVA, "1.0-0"), " FCFA");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(50, 20, ctx_r0.totalTTC, "1.0-0"), " FCFA");
  }
}
var OrderFormComponent = class _OrderFormComponent {
  onWindowChange() {
    this.activeSuggestionIdx = null;
  }
  constructor(purchaseService, accountingService, stockService, authService, route, router) {
    this.purchaseService = purchaseService;
    this.accountingService = accountingService;
    this.stockService = stockService;
    this.authService = authService;
    this.route = route;
    this.router = router;
    this.orderId = null;
    this.order = this.emptyOrder();
    this.suppliers = [];
    this.allProducts = [];
    this.loading = false;
    this.saving = false;
    this.confirming = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.TVA_DEFAULT = 19.25;
    this.lineSearches = [];
    this.activeSuggestionIdx = null;
    this.lineSearchResults = [];
    this.searchTimer = null;
    this.dropdownRect = null;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.orderId = id ? +id : null;
    this.loadReferenceData();
    if (this.orderId)
      this.loadOrder(this.orderId);
  }
  emptyOrder() {
    return {
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      partnerId: 0,
      companyId: 0,
      lines: []
    };
  }
  loadReferenceData() {
    const companyId = this.authService.getCompanyId() ?? 1;
    this.order.companyId = companyId;
    this.accountingService.getPartners(companyId).subscribe({
      next: (data) => this.suppliers = data.filter((p) => p.type === "supplier" || p.type === "both")
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
    this.purchaseService.getOrder(id).subscribe({
      next: (data) => {
        this.order = data;
        this.lineSearches = data.lines.map((l) => l.productCode ? `[${l.productCode}] ${l.description}` : l.description);
        this.lineSearchResults = data.lines.map(() => []);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  get isReadOnly() {
    return !!this.order.state && !["draft"].includes(this.order.state);
  }
  // ===== LINES =====
  addLine() {
    this.order.lines.push({
      description: "",
      quantity: 1,
      prixUnitaire: 0,
      tauxTVA: this.TVA_DEFAULT
    });
    this.lineSearches.push("");
    this.lineSearchResults.push([]);
  }
  removeLine(i) {
    this.order.lines.splice(i, 1);
    this.lineSearches.splice(i, 1);
    this.lineSearchResults.splice(i, 1);
  }
  computeLine(i) {
    const line = this.order.lines[i];
    const qty = line.quantity ?? 0;
    const pu = line.prixUnitaire ?? 0;
    const tva = line.tauxTVA ?? 0;
    line.montantHT = Math.round(qty * pu * 100) / 100;
    line.montantTVA = Math.round(line.montantHT * tva) / 100;
    line.montantTTC = Math.round((line.montantHT + line.montantTVA) * 100) / 100;
    this.computeTotals();
  }
  computeTotals() {
    this.order.totalHT = this.order.lines.reduce((s, l) => s + (l.montantHT ?? 0), 0);
    this.order.totalTVA = this.order.lines.reduce((s, l) => s + (l.montantTVA ?? 0), 0);
    this.order.totalTTC = (this.order.totalHT ?? 0) + (this.order.totalTVA ?? 0);
  }
  // ===== AUTOCOMPLETE =====
  getSuggestions(i) {
    if (this.lineSearchResults[i]?.length > 0) {
      return this.lineSearchResults[i];
    }
    const search = (this.lineSearches[i] ?? "").toLowerCase();
    if (!search)
      return this.allProducts.slice(0, 8);
    return this.allProducts.filter((p) => p.name.toLowerCase().includes(search) || (p.defaultCode ?? "").toLowerCase().includes(search)).slice(0, 10);
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
      const companyId = this.authService.getCompanyId() ?? 1;
      this.stockService.searchProducts(query, companyId).subscribe({
        next: (products) => {
          this.lineSearchResults[i] = products.slice(0, 10);
        },
        error: () => {
          this.lineSearchResults[i] = [];
        }
      });
    }, 300);
  }
  openSuggestions(i, event) {
    if (this.order.lines[i]?.productId) {
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
        if (line?.productId && !this.lineSearches[i]) {
          this.lineSearches[i] = line.productCode ? `[${line.productCode}] ${line.description}` : line.description;
        }
      }
    }, 200);
  }
  selectProduct(i, product) {
    const line = this.order.lines[i];
    line.productId = product.id;
    line.productCode = product.defaultCode ?? "";
    line.description = product.name;
    line.prixUnitaire = product.standardPrice ?? 0;
    line.tauxTVA = line.tauxTVA ?? this.TVA_DEFAULT;
    this.lineSearches[i] = `[${product.defaultCode}] ${product.name}`;
    this.activeSuggestionIdx = null;
    this.computeLine(i);
  }
  clearLine(i) {
    const line = this.order.lines[i];
    line.productId = void 0;
    line.productCode = "";
    line.description = "";
    line.prixUnitaire = 0;
    this.lineSearches[i] = "";
    this.lineSearchResults[i] = [];
    this.activeSuggestionIdx = i;
    this.computeLine(i);
  }
  // ===== SAVE =====
  saveOrder() {
    if (!this.order.partnerId) {
      this.errorMsg = "S\xE9lectionnez un fournisseur";
      return;
    }
    if (this.order.lines.length === 0) {
      this.errorMsg = "Ajoutez au moins une ligne";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const action = this.orderId ? this.purchaseService.updateOrder(this.orderId, this.order) : this.purchaseService.createOrder(this.order);
    action.subscribe({
      next: (saved) => {
        this.saving = false;
        if (!this.orderId) {
          this.router.navigate(["/purchases/orders", saved.id]);
        } else {
          this.order = saved;
          this.successMsg = "Commande sauvegard\xE9e";
          setTimeout(() => this.successMsg = "", 4e3);
        }
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || "Erreur lors de la sauvegarde";
      }
    });
  }
  confirmOrder() {
    if (!this.orderId)
      return;
    if (!confirm("Confirmer la commande ?"))
      return;
    this.confirming = true;
    this.errorMsg = "";
    this.purchaseService.confirmOrder(this.orderId).subscribe({
      next: (updated) => {
        this.confirming = false;
        this.order = updated;
        if (updated.invoiceId) {
          this.successMsg = `Commande confirm\xE9e. Redirection vers la facture...`;
          setTimeout(() => this.router.navigate(["/purchases/invoices", updated.invoiceId]), 800);
        } else {
          this.successMsg = "Commande confirm\xE9e.";
        }
      },
      error: (err) => {
        this.confirming = false;
        this.errorMsg = err.error?.message || "Erreur lors de la confirmation";
      }
    });
  }
  cancelOrder() {
    if (!this.orderId)
      return;
    if (!confirm("Annuler la commande ?"))
      return;
    this.purchaseService.cancelOrder(this.orderId).subscribe({
      next: (updated) => {
        this.order = updated;
      },
      error: (err) => {
        this.errorMsg = err.error?.message || "Erreur lors de l'annulation";
      }
    });
  }
  backToList() {
    this.router.navigate(["/purchases/orders"]);
  }
  stateLabel(s) {
    const map = { draft: "Brouillon", confirmed: "Confirm\xE9e", received: "R\xE9ceptionn\xE9e", cancelled: "Annul\xE9e" };
    return map[s ?? ""] ?? s ?? "";
  }
  get totalHT() {
    return this.order.totalHT ?? 0;
  }
  get totalTVA() {
    return this.order.totalTVA ?? 0;
  }
  get totalTTC() {
    return this.order.totalTTC ?? 0;
  }
  static {
    this.\u0275fac = function OrderFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderFormComponent)(\u0275\u0275directiveInject(PurchaseService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderFormComponent, selectors: [["app-purchase-order-form"]], hostBindings: function OrderFormComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function OrderFormComponent_scroll_HostBindingHandler() {
          return ctx.onWindowChange();
        }, \u0275\u0275resolveWindow)("resize", function OrderFormComponent_resize_HostBindingHandler() {
          return ctx.onWindowChange();
        }, \u0275\u0275resolveWindow);
      }
    }, decls: 18, vars: 9, consts: [[1, "pur-form-page"], [1, "form-header"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "header-info"], [1, "badge", 3, "class"], [1, "header-actions"], [1, "btn-save", 3, "disabled"], [1, "btn-confirm", 3, "disabled"], [1, "btn-cancel-order"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "picking-banner"], [1, "loading-state"], [1, "form-body"], [1, "badge"], [1, "btn-save", 3, "click", "disabled"], [1, "btn-confirm", 3, "click", "disabled"], [1, "btn-cancel-order", 3, "click"], [3, "click"], [1, "btn-goto-reception"], [1, "btn-goto-reception", 3, "click"], [1, "spinner"], [1, "meta-section"], [1, "form-group"], [1, "required"], [1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-group", "full-width"], ["rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "lines-section"], [1, "lines-header"], [1, "btn-add-line"], [1, "lines-empty"], [1, "lines-table-wrap"], [1, "totals-section"], [1, "totals-box"], [1, "total-row"], [1, "total-row", "total-ttc"], [1, "btn-add-line", 3, "click"], [1, "lines-table"], [1, "col-num"], [1, "col-product"], [1, "col-qty", "text-right"], [1, "col-pu", "text-right"], [1, "col-tva", "text-right"], [1, "col-ht", "text-right"], [1, "col-ttc", "text-right"], [1, "col-del"], [1, "autocomplete-wrap"], [1, "ac-input-row"], ["type", "text", "placeholder", "Rechercher un article...", 1, "ac-input", 3, "ngModelChange", "focus", "blur", "input", "ngModel", "disabled"], ["title", "Effacer", 1, "btn-clear-line"], [1, "suggestions-panel", 3, "top", "left", "width"], [1, "col-qty"], ["type", "number", "min", "0.001", "step", "1", 1, "form-control", "text-right", 3, "ngModelChange", "ngModel", "disabled"], [1, "col-pu"], ["type", "number", "min", "0", "step", "1", 1, "form-control", "text-right", 3, "ngModelChange", "ngModel", "disabled"], [1, "col-tva"], ["type", "number", "min", "0", "max", "100", "step", "0.01", 1, "form-control", "text-right", 3, "ngModelChange", "ngModel", "disabled"], ["title", "Effacer", 1, "btn-clear-line", 3, "mousedown"], [1, "suggestions-panel"], [1, "suggestion-empty"], [1, "suggestion-item"], [1, "suggestion-item", 3, "mousedown"], [1, "sug-code"], [1, "sug-name"], [1, "sug-price"], ["title", "Supprimer", 1, "btn-remove-line", 3, "click"]], template: function OrderFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function OrderFormComponent_Template_button_click_2_listener() {
          return ctx.backToList();
        });
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 4)(6, "h1");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, OrderFormComponent_Conditional_8_Template, 2, 3, "span", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275conditionalCreate(10, OrderFormComponent_Conditional_10_Template, 4, 2, "button", 7);
        \u0275\u0275conditionalCreate(11, OrderFormComponent_Conditional_11_Template, 4, 2, "button", 8);
        \u0275\u0275conditionalCreate(12, OrderFormComponent_Conditional_12_Template, 4, 0, "button", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(13, OrderFormComponent_Conditional_13_Template, 4, 1, "div", 10);
        \u0275\u0275conditionalCreate(14, OrderFormComponent_Conditional_14_Template, 6, 1, "div", 11);
        \u0275\u0275conditionalCreate(15, OrderFormComponent_Conditional_15_Template, 9, 5, "div", 12);
        \u0275\u0275conditionalCreate(16, OrderFormComponent_Conditional_16_Template, 3, 0, "div", 13)(17, OrderFormComponent_Conditional_17_Template, 51, 23, "div", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.orderId ? ctx.order.name ?? "Commande" : "Nouvelle commande fournisseur");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.order.state ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.order.state === "draft" || !ctx.order.state ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.order.state === "draft" && ctx.orderId ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.order.state === "draft" || ctx.order.state === "confirmed" ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.order.pickingName ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 16 : 17);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, DecimalPipe], styles: ['\n.pur-form-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.form-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.btn-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n  background: white;\n  cursor: pointer;\n  color: #495057;\n  transition: all 0.15s;\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  border-color: #adb5bd;\n}\n.header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #212529;\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.btn-save[_ngcontent-%COMP%], \n.btn-confirm[_ngcontent-%COMP%], \n.btn-cancel-order[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.15s;\n}\n.btn-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-confirm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-cancel-order[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-save[_ngcontent-%COMP%]:disabled, \n.btn-confirm[_ngcontent-%COMP%]:disabled, \n.btn-cancel-order[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background: #00A09D;\n  color: white;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #007674;\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  background: #0d6efd;\n  color: white;\n}\n.btn-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0b5ed7;\n}\n.btn-cancel-order[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #842029;\n}\n.btn-cancel-order[_ngcontent-%COMP%]:hover {\n  background: #842029;\n  color: white;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #d1e7dd;\n  color: #155724;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #842029;\n}\n.picking-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  background: #e6f7f7;\n  border: 1px solid #b2dfdf;\n  border-radius: 8px;\n  padding: 10px 16px;\n  margin-bottom: 16px;\n  font-size: 14px;\n  color: #0c5460;\n}\n.picking-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #00A09D;\n}\n.btn-goto-reception[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #fd7e14;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  margin-left: auto;\n}\n.btn-goto-reception[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-goto-reception[_ngcontent-%COMP%]:hover {\n  background: #e06912;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px;\n  color: #6c757d;\n}\n.spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 2px solid #dee2e6;\n  border-top-color: #00A09D;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n.form-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.meta-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.meta-section[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #495057;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.form-group[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 14px;\n  color: #212529;\n  background: white;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00A09D;\n  box-shadow: 0 0 0 3px rgba(0, 160, 157, 0.15);\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background: #f8f9fa;\n  color: #6c757d;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.lines-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.lines-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.lines-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.btn-add-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: 1px dashed #00A09D;\n  color: #00A09D;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-add-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-add-line[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 160, 157, 0.08);\n}\n.lines-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 36px;\n  color: #adb5bd;\n  border: 2px dashed #e9ecef;\n  border-radius: 8px;\n}\n.lines-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 8px;\n}\n.lines-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 10px;\n  background: #f4f6f8;\n  font-weight: 700;\n  font-size: 10px;\n  color: #8c96a3;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  border-bottom: 2px solid #e2e8ef;\n  text-align: left;\n  white-space: nowrap;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.1s;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f0fafa;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   .btn-remove-line[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 6px;\n  border-bottom: 1px solid #eef1f4;\n  vertical-align: middle;\n}\n.lines-table[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.lines-table[_ngcontent-%COMP%]   .col-num[_ngcontent-%COMP%] {\n  width: 28px;\n  text-align: center;\n  color: #adb5bd;\n  font-size: 11px;\n  font-weight: 600;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.lines-table[_ngcontent-%COMP%]   .col-product[_ngcontent-%COMP%] {\n  min-width: 260px;\n}\n.lines-table[_ngcontent-%COMP%]   .col-qty[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.lines-table[_ngcontent-%COMP%]   .col-pu[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.lines-table[_ngcontent-%COMP%]   .col-tva[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.lines-table[_ngcontent-%COMP%]   .col-ht[_ngcontent-%COMP%] {\n  width: 110px;\n  font-family: "Roboto Mono", monospace;\n  color: #495057;\n}\n.lines-table[_ngcontent-%COMP%]   .col-ttc[_ngcontent-%COMP%] {\n  width: 120px;\n  font-family: "Roboto Mono", monospace;\n  font-weight: 700;\n  color: #00A09D;\n}\n.lines-table[_ngcontent-%COMP%]   .col-del[_ngcontent-%COMP%] {\n  width: 36px;\n}\n.autocomplete-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ac-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ac-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 5px 8px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  transition: border-color 0.15s, background 0.15s;\n  width: 100%;\n  box-sizing: border-box;\n}\n.ac-input[_ngcontent-%COMP%]:hover {\n  border-color: #dee2e6;\n  background: #fff;\n}\n.ac-input[_ngcontent-%COMP%]:focus {\n  border-color: #00A09D;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(0, 160, 157, 0.12);\n}\n.ac-input[_ngcontent-%COMP%]:disabled {\n  background: #f8f9fa;\n  color: #6c757d;\n  border-color: transparent;\n}\n.btn-clear-line[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 22px;\n  height: 22px;\n  border-radius: 4px;\n  border: none;\n  background: transparent;\n  color: #adb5bd;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.btn-clear-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-clear-line[_ngcontent-%COMP%]:hover {\n  background: #fde8e8;\n  color: #dc3545;\n}\n.suggestions-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  background: white;\n  border: 1px solid #c8d0da;\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);\n  z-index: 9999;\n  max-height: 320px;\n  overflow-y: auto;\n}\n.suggestion-empty[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  color: #6c757d;\n  font-size: 13px;\n  font-style: italic;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.suggestion-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  cursor: pointer;\n  transition: background 0.12s;\n  border-bottom: 1px solid #f0f0f0;\n}\n.suggestion-item[_ngcontent-%COMP%]:first-child {\n  border-radius: 10px 10px 0 0;\n}\n.suggestion-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  border-radius: 0 0 10px 10px;\n}\n.suggestion-item[_ngcontent-%COMP%]:hover {\n  background: #f0fafa;\n}\n.suggestion-item[_ngcontent-%COMP%]   .sug-code[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #00A09D;\n  background: #e6f4f4;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-weight: 700;\n  font-family: monospace;\n  white-space: nowrap;\n  min-width: 52px;\n  text-align: center;\n}\n.suggestion-item[_ngcontent-%COMP%]   .sug-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: #212529;\n}\n.suggestion-item[_ngcontent-%COMP%]   .sug-price[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 12px;\n  color: #00A09D;\n  font-weight: 700;\n  white-space: nowrap;\n  font-family: monospace;\n  background: #f0fafa;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.form-control.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\ntd[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border: 1px solid transparent;\n  background: transparent;\n  border-radius: 4px;\n  transition: border-color 0.15s, background 0.15s;\n}\ntd[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover {\n  border-color: #dee2e6;\n  background: #fff;\n}\ntd[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #00A09D;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(0, 160, 157, 0.12);\n}\ntd[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  border-color: transparent;\n  background: transparent;\n}\n.btn-remove-line[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  border: none;\n  background: transparent;\n  color: #c8d0da;\n  cursor: pointer;\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.btn-remove-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-remove-line[_ngcontent-%COMP%]:hover {\n  background: #fde8e8;\n  color: #dc3545;\n  opacity: 1 !important;\n}\n.totals-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.totals-box[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  min-width: 300px;\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid #f0f0f0;\n  font-size: 14px;\n  color: #495057;\n}\n.total-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.total-row.total-ttc[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #00A09D;\n  padding-top: 12px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-draft[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.badge-confirmed[_ngcontent-%COMP%] {\n  background: #cff4fc;\n  color: #0c5460;\n}\n.badge-received[_ngcontent-%COMP%] {\n  background: #d1e7dd;\n  color: #155724;\n}\n.badge-cancelled[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #842029;\n}\n.badge-picking-draft[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.badge-picking-done[_ngcontent-%COMP%] {\n  background: #d1e7dd;\n  color: #155724;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=order-form.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderFormComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-order-form", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="pur-form-page">
  <!-- Header -->
  <div class="form-header">
    <button class="btn-back" (click)="backToList()">
      <span class="material-icons">arrow_back</span>
    </button>
    <div class="header-info">
      <h1>{{ orderId ? (order.name ?? 'Commande') : 'Nouvelle commande fournisseur' }}</h1>
      @if (order.state) {
        <span class="badge" [class]="'badge-' + order.state">{{ stateLabel(order.state) }}</span>
      }
    </div>
    <div class="header-actions">
      @if (order.state === 'draft' || !order.state) {
        <button class="btn-save" (click)="saveOrder()" [disabled]="saving">
          <span class="material-icons">save</span>
          {{ saving ? 'Sauvegarde...' : 'Sauvegarder' }}
        </button>
      }
      @if (order.state === 'draft' && orderId) {
        <button class="btn-confirm" (click)="confirmOrder()" [disabled]="confirming">
          <span class="material-icons">check_circle</span>
          {{ confirming ? 'Confirmation...' : 'Confirmer' }}
        </button>
      }
      @if (order.state === 'draft' || order.state === 'confirmed') {
        <button class="btn-cancel-order" (click)="cancelOrder()">
          <span class="material-icons">cancel</span>
          Annuler
        </button>
      }
    </div>
  </div>

  @if (successMsg) {
    <div class="alert alert-success">
      <span class="material-icons">check_circle</span>{{ successMsg }}
    </div>
  }
  @if (errorMsg) {
    <div class="alert alert-error">
      <span class="material-icons">error</span>{{ errorMsg }}
      <button (click)="errorMsg = ''">\xD7</button>
    </div>
  }

  <!-- Picking info banner (when confirmed) -->
  @if (order.pickingName) {
    <div class="picking-banner">
      <span class="material-icons">inventory_2</span>
      R\xE9ception en attente :
      <strong>{{ order.pickingName }}</strong>
      <span class="badge" [class]="'badge-picking-' + order.pickingState">{{ order.pickingState }}</span>
      @if (order.pickingState !== 'done' && order.pickingId) {
        <button class="btn-goto-reception" (click)="router.navigate(['/stock/receptions/bordereau', order.pickingId])">
          <span class="material-icons">assignment</span> Saisir le bordereau
        </button>
      }
    </div>
  }

  @if (loading) {
    <div class="loading-state"><span class="spinner"></span> Chargement...</div>
  } @else {
    <div class="form-body">
      <!-- Meta section -->
      <div class="meta-section">
        <div class="form-group">
          <label>Fournisseur <span class="required">*</span></label>
          <select [(ngModel)]="order.partnerId" [disabled]="isReadOnly" class="form-control">
            <option [value]="0">\u2014 S\xE9lectionner \u2014</option>
            @for (s of suppliers; track s.id) {
              <option [value]="s.id">{{ s.name }}</option>
            }
          </select>
        </div>
        <div class="form-group">
          <label>Date commande</label>
          <input type="date" [(ngModel)]="order.date" [disabled]="isReadOnly" class="form-control" />
        </div>
        <div class="form-group">
          <label>Date livraison pr\xE9vue</label>
          <input type="date" [(ngModel)]="order.dateExpected" [disabled]="isReadOnly" class="form-control" />
        </div>
        <div class="form-group full-width">
          <label>Notes</label>
          <textarea [(ngModel)]="order.notes" [disabled]="isReadOnly" class="form-control" rows="2"></textarea>
        </div>
      </div>

      <!-- Lines -->
      <div class="lines-section">
        <div class="lines-header">
          <h3>Lignes de commande</h3>
          @if (!isReadOnly) {
            <button class="btn-add-line" (click)="addLine()">
              <span class="material-icons">add</span> Ajouter une ligne
            </button>
          }
        </div>

        @if (order.lines.length === 0) {
          <div class="lines-empty">
            <span class="material-icons">playlist_add</span>
            <p>Aucune ligne. Cliquez sur "Ajouter une ligne".</p>
          </div>
        } @else {
          <div class="lines-table-wrap">
            <table class="lines-table">
              <thead>
                <tr>
                  <th class="col-num">#</th>
                  <th class="col-product">Article</th>
                  <th class="col-qty text-right">Qt\xE9</th>
                  <th class="col-pu text-right">Prix unitaire</th>
                  <th class="col-tva text-right">TVA %</th>
                  <th class="col-ht text-right">Montant HT</th>
                  <th class="col-ttc text-right">Montant TTC</th>
                  @if (!isReadOnly) { <th class="col-del"></th> }
                </tr>
              </thead>
              <tbody>
                @for (line of order.lines; track $index; let i = $index) {
                  <tr>
                    <td class="col-num">{{ i + 1 }}</td>
                    <!-- Autocomplete product -->
                    <td class="col-product">
                      <div class="autocomplete-wrap">
                        <div class="ac-input-row">
                          <input
                            type="text"
                            class="ac-input"
                            [(ngModel)]="lineSearches[i]"
                            [disabled]="isReadOnly"
                            placeholder="Rechercher un article..."
                            (focus)="openSuggestions(i, $event)"
                            (blur)="closeSuggestions(i)"
                            (input)="openSuggestions(i, $event)"
                          />
                          @if (line.productId && !isReadOnly) {
                            <button class="btn-clear-line" (mousedown)="clearLine(i)" title="Effacer">
                              <span class="material-icons">close</span>
                            </button>
                          }
                        </div>
                        @if (activeSuggestionIdx === i && dropdownRect) {
                          <div class="suggestions-panel"
                            [style.top.px]="dropdownRect.top"
                            [style.left.px]="dropdownRect.left"
                            [style.width.px]="dropdownRect.width">
                            @if (getSuggestions(i).length === 0) {
                              @if (allProducts.length === 0) {
                                <div class="suggestion-empty">Aucun article dans le stock</div>
                              } @else {
                                <div class="suggestion-empty">Aucun r\xE9sultat pour "{{ lineSearches[i] }}"</div>
                              }
                            } @else {
                              @for (p of getSuggestions(i); track p.id) {
                                <div class="suggestion-item" (mousedown)="selectProduct(i, p)">
                                  <span class="sug-code">{{ p.defaultCode }}</span>
                                  <span class="sug-name">{{ p.name }}</span>
                                  <span class="sug-price">{{ p.standardPrice | number:'1.0-0' }} FCFA</span>
                                </div>
                              }
                            }
                          </div>
                        }
                      </div>
                    </td>
                    <td class="col-qty">
                      <input type="number" class="form-control text-right" [(ngModel)]="line.quantity"
                        [disabled]="isReadOnly" min="0.001" step="1"
                        (ngModelChange)="computeLine(i)" />
                    </td>
                    <td class="col-pu">
                      <input type="number" class="form-control text-right" [(ngModel)]="line.prixUnitaire"
                        [disabled]="isReadOnly" min="0" step="1"
                        (ngModelChange)="computeLine(i)" />
                    </td>
                    <td class="col-tva">
                      <input type="number" class="form-control text-right" [(ngModel)]="line.tauxTVA"
                        [disabled]="isReadOnly" min="0" max="100" step="0.01"
                        (ngModelChange)="computeLine(i)" />
                    </td>
                    <td class="col-ht text-right">{{ (line.montantHT ?? 0) | number:'1.0-0' }}</td>
                    <td class="col-ttc text-right">{{ (line.montantTTC ?? 0) | number:'1.0-0' }}</td>
                    @if (!isReadOnly) {
                      <td class="col-del">
                        <button class="btn-remove-line" (click)="removeLine(i)" title="Supprimer">
                          <span class="material-icons">delete_outline</span>
                        </button>
                      </td>
                    }
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      </div>

      <!-- Totals -->
      <div class="totals-section">
        <div class="totals-box">
          <div class="total-row">
            <span>Total HT</span>
            <span>{{ totalHT | number:'1.0-0' }} FCFA</span>
          </div>
          <div class="total-row">
            <span>TVA</span>
            <span>{{ totalTVA | number:'1.0-0' }} FCFA</span>
          </div>
          <div class="total-row total-ttc">
            <span>Total TTC</span>
            <span>{{ totalTTC | number:'1.0-0' }} FCFA</span>
          </div>
        </div>
      </div>
    </div>
  }
</div>
`, styles: ['/* src/app/modules/purchases/components/orders/order-form.component.scss */\n.pur-form-page {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.form-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.btn-back {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n  background: white;\n  cursor: pointer;\n  color: #495057;\n  transition: all 0.15s;\n}\n.btn-back .material-icons {\n  font-size: 20px;\n}\n.btn-back:hover {\n  background: #f8f9fa;\n  border-color: #adb5bd;\n}\n.header-info {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-info h1 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #212529;\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.btn-save,\n.btn-confirm,\n.btn-cancel-order {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.15s;\n}\n.btn-save .material-icons,\n.btn-confirm .material-icons,\n.btn-cancel-order .material-icons {\n  font-size: 16px;\n}\n.btn-save:disabled,\n.btn-confirm:disabled,\n.btn-cancel-order:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.btn-save {\n  background: #00A09D;\n  color: white;\n}\n.btn-save:hover:not(:disabled) {\n  background: #007674;\n}\n.btn-confirm {\n  background: #0d6efd;\n  color: white;\n}\n.btn-confirm:hover:not(:disabled) {\n  background: #0b5ed7;\n}\n.btn-cancel-order {\n  background: #f8d7da;\n  color: #842029;\n}\n.btn-cancel-order:hover {\n  background: #842029;\n  color: white;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert button {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n}\n.alert-success {\n  background: #d1e7dd;\n  color: #155724;\n}\n.alert-error {\n  background: #f8d7da;\n  color: #842029;\n}\n.picking-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  background: #e6f7f7;\n  border: 1px solid #b2dfdf;\n  border-radius: 8px;\n  padding: 10px 16px;\n  margin-bottom: 16px;\n  font-size: 14px;\n  color: #0c5460;\n}\n.picking-banner .material-icons {\n  color: #00A09D;\n}\n.btn-goto-reception {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #fd7e14;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  margin-left: auto;\n}\n.btn-goto-reception .material-icons {\n  font-size: 16px;\n}\n.btn-goto-reception:hover {\n  background: #e06912;\n}\n.loading-state {\n  text-align: center;\n  padding: 60px;\n  color: #6c757d;\n}\n.spinner {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 2px solid #dee2e6;\n  border-top-color: #00A09D;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n.form-body {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.meta-section {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.meta-section .full-width {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #495057;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.form-group .required {\n  color: #dc3545;\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 14px;\n  color: #212529;\n  background: white;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #00A09D;\n  box-shadow: 0 0 0 3px rgba(0, 160, 157, 0.15);\n}\n.form-control:disabled {\n  background: #f8f9fa;\n  color: #6c757d;\n}\ntextarea.form-control {\n  resize: vertical;\n}\n.lines-section {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.lines-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.lines-header h3 {\n  font-size: 15px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.btn-add-line {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: 1px dashed #00A09D;\n  color: #00A09D;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-add-line .material-icons {\n  font-size: 16px;\n}\n.btn-add-line:hover {\n  background: rgba(0, 160, 157, 0.08);\n}\n.lines-empty {\n  text-align: center;\n  padding: 36px;\n  color: #adb5bd;\n  border: 2px dashed #e9ecef;\n  border-radius: 8px;\n}\n.lines-empty .material-icons {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 8px;\n}\n.lines-table-wrap {\n  overflow-x: auto;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.lines-table th {\n  padding: 9px 10px;\n  background: #f4f6f8;\n  font-weight: 700;\n  font-size: 10px;\n  color: #8c96a3;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  border-bottom: 2px solid #e2e8ef;\n  text-align: left;\n  white-space: nowrap;\n}\n.lines-table tbody tr {\n  transition: background 0.1s;\n}\n.lines-table tbody tr:hover td {\n  background: #f0fafa;\n}\n.lines-table tbody tr:hover .btn-remove-line {\n  opacity: 1;\n}\n.lines-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.lines-table td {\n  padding: 4px 6px;\n  border-bottom: 1px solid #eef1f4;\n  vertical-align: middle;\n}\n.lines-table .text-right {\n  text-align: right;\n}\n.lines-table .col-num {\n  width: 28px;\n  text-align: center;\n  color: #adb5bd;\n  font-size: 11px;\n  font-weight: 600;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.lines-table .col-product {\n  min-width: 260px;\n}\n.lines-table .col-qty {\n  width: 80px;\n}\n.lines-table .col-pu {\n  width: 120px;\n}\n.lines-table .col-tva {\n  width: 80px;\n}\n.lines-table .col-ht {\n  width: 110px;\n  font-family: "Roboto Mono", monospace;\n  color: #495057;\n}\n.lines-table .col-ttc {\n  width: 120px;\n  font-family: "Roboto Mono", monospace;\n  font-weight: 700;\n  color: #00A09D;\n}\n.lines-table .col-del {\n  width: 36px;\n}\n.autocomplete-wrap {\n  position: relative;\n}\n.ac-input-row {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.ac-input {\n  flex: 1;\n  padding: 5px 8px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  transition: border-color 0.15s, background 0.15s;\n  width: 100%;\n  box-sizing: border-box;\n}\n.ac-input:hover {\n  border-color: #dee2e6;\n  background: #fff;\n}\n.ac-input:focus {\n  border-color: #00A09D;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(0, 160, 157, 0.12);\n}\n.ac-input:disabled {\n  background: #f8f9fa;\n  color: #6c757d;\n  border-color: transparent;\n}\n.btn-clear-line {\n  flex-shrink: 0;\n  width: 22px;\n  height: 22px;\n  border-radius: 4px;\n  border: none;\n  background: transparent;\n  color: #adb5bd;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.btn-clear-line .material-icons {\n  font-size: 14px;\n}\n.btn-clear-line:hover {\n  background: #fde8e8;\n  color: #dc3545;\n}\n.suggestions-panel {\n  position: fixed;\n  background: white;\n  border: 1px solid #c8d0da;\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);\n  z-index: 9999;\n  max-height: 320px;\n  overflow-y: auto;\n}\n.suggestion-empty {\n  padding: 14px 18px;\n  color: #6c757d;\n  font-size: 13px;\n  font-style: italic;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.suggestion-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  cursor: pointer;\n  transition: background 0.12s;\n  border-bottom: 1px solid #f0f0f0;\n}\n.suggestion-item:first-child {\n  border-radius: 10px 10px 0 0;\n}\n.suggestion-item:last-child {\n  border-bottom: none;\n  border-radius: 0 0 10px 10px;\n}\n.suggestion-item:hover {\n  background: #f0fafa;\n}\n.suggestion-item .sug-code {\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #00A09D;\n  background: #e6f4f4;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-weight: 700;\n  font-family: monospace;\n  white-space: nowrap;\n  min-width: 52px;\n  text-align: center;\n}\n.suggestion-item .sug-name {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: #212529;\n}\n.suggestion-item .sug-price {\n  flex-shrink: 0;\n  font-size: 12px;\n  color: #00A09D;\n  font-weight: 700;\n  white-space: nowrap;\n  font-family: monospace;\n  background: #f0fafa;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.form-control.text-right {\n  text-align: right;\n}\ntd .form-control {\n  padding: 5px 8px;\n  border: 1px solid transparent;\n  background: transparent;\n  border-radius: 4px;\n  transition: border-color 0.15s, background 0.15s;\n}\ntd .form-control:hover {\n  border-color: #dee2e6;\n  background: #fff;\n}\ntd .form-control:focus {\n  border-color: #00A09D;\n  background: #fff;\n  box-shadow: 0 0 0 2px rgba(0, 160, 157, 0.12);\n}\ntd .form-control:disabled {\n  border-color: transparent;\n  background: transparent;\n}\n.btn-remove-line {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  border: none;\n  background: transparent;\n  color: #c8d0da;\n  cursor: pointer;\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.btn-remove-line .material-icons {\n  font-size: 16px;\n}\n.btn-remove-line:hover {\n  background: #fde8e8;\n  color: #dc3545;\n  opacity: 1 !important;\n}\n.totals-section {\n  display: flex;\n  justify-content: flex-end;\n}\n.totals-box {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  min-width: 300px;\n}\n.total-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid #f0f0f0;\n  font-size: 14px;\n  color: #495057;\n}\n.total-row:last-child {\n  border-bottom: none;\n}\n.total-row.total-ttc {\n  font-size: 16px;\n  font-weight: 700;\n  color: #00A09D;\n  padding-top: 12px;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-draft {\n  background: #fff3cd;\n  color: #856404;\n}\n.badge-confirmed {\n  background: #cff4fc;\n  color: #0c5460;\n}\n.badge-received {\n  background: #d1e7dd;\n  color: #155724;\n}\n.badge-cancelled {\n  background: #f8d7da;\n  color: #842029;\n}\n.badge-picking-draft {\n  background: #fff3cd;\n  color: #856404;\n}\n.badge-picking-done {\n  background: #d1e7dd;\n  color: #155724;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=order-form.component.css.map */\n'] }]
  }], () => [{ type: PurchaseService }, { type: AccountingService }, { type: StockService }, { type: AuthService }, { type: ActivatedRoute }, { type: Router }], { onWindowChange: [{
    type: HostListener,
    args: ["window:scroll", []]
  }, {
    type: HostListener,
    args: ["window:resize", []]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderFormComponent, { className: "OrderFormComponent", filePath: "src/app/modules/purchases/components/orders/order-form.component.ts", lineNumber: 17 });
})();
export {
  OrderFormComponent
};
//# sourceMappingURL=chunk-D6SP6HVH.js.map
