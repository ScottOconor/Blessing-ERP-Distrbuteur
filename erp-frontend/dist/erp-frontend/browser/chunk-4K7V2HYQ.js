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
  ɵɵattribute,
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
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/stock/components/livraisons/livraison-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function LivraisonDetailComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-state", ctx_r0.picking.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.stateLabel(ctx_r0.picking.state || ""));
  }
}
function LivraisonDetailComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function LivraisonDetailComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275elementStart(1, "span", 4);
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
function LivraisonDetailComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function LivraisonDetailComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.validate());
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "local_shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 16);
    \u0275\u0275listener("click", function LivraisonDetailComponent_Conditional_14_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancel());
    });
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.validating);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.validating ? "Validation..." : "Valider la livraison", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.cancelling);
  }
}
function LivraisonDetailComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 4);
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
function LivraisonDetailComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 4);
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
function LivraisonDetailComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 4);
    \u0275\u0275text(2, "book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Co\xFBt marchandises livr\xE9 comptabilis\xE9 : ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \xB7 Valeur : ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.picking.accountMoveName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 2, ctx_r0.picking.totalValue, "1.0-0"), " FCFA");
  }
}
function LivraisonDetailComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 17);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd()();
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function LivraisonDetailComponent_Conditional_19_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addLine());
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ajouter");
    \u0275\u0275elementEnd();
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, "Aucune ligne");
    \u0275\u0275elementEnd();
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_10_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th");
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead")(1, "tr")(2, "th", 35);
    \u0275\u0275text(3, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5, "Unit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Qt\xE9 dem.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Qt\xE9 livr\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "CMUP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Sous-total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, LivraisonDetailComponent_Conditional_19_Conditional_10_Conditional_16_Template, 1, 0, "th");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275conditional(ctx_r0.isDraft ? 16 : -1);
  }
}
function LivraisonDetailComponent_Conditional_19_For_13_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    \u0275\u0275property("value", p_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r8.defaultCode ? "[" + p_r8.defaultCode + "] " : "", "", p_r8.name);
  }
}
function LivraisonDetailComponent_Conditional_19_For_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 43);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_19_For_13_Conditional_2_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const line_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r6.productId, $event) || (line_r6.productId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function LivraisonDetailComponent_Conditional_19_For_13_Conditional_2_Template_select_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r5);
      const \u0275$index_138_r7 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onProductChange(\u0275$index_138_r7));
    });
    \u0275\u0275elementStart(1, "option", 44);
    \u0275\u0275text(2, "\u2014 Choisir \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, LivraisonDetailComponent_Conditional_19_For_13_Conditional_2_For_4_Template, 2, 3, "option", 45, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", line_r6.productId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.products);
  }
}
function LivraisonDetailComponent_Conditional_19_For_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.productName(line_r6.productId));
  }
}
function LivraisonDetailComponent_Conditional_19_For_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_19_For_13_Conditional_5_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const line_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r6.uomName, $event) || (line_r6.uomName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", line_r6.uomName);
  }
}
function LivraisonDetailComponent_Conditional_19_For_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const line_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", line_r6.uomName, " ");
  }
}
function LivraisonDetailComponent_Conditional_19_For_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_19_For_13_Conditional_8_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const line_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r6.qtyDemanded, $event) || (line_r6.qtyDemanded = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function LivraisonDetailComponent_Conditional_19_For_13_Conditional_8_Template_input_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r10);
      const line_r6 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(line_r6.qtyDone = line_r6.qtyDemanded);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", line_r6.qtyDemanded);
  }
}
function LivraisonDetailComponent_Conditional_19_For_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r6.qtyDemanded);
  }
}
function LivraisonDetailComponent_Conditional_19_For_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_19_For_13_Conditional_11_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const line_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r6.qtyDone, $event) || (line_r6.qtyDone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", line_r6.qtyDone);
  }
}
function LivraisonDetailComponent_Conditional_19_For_13_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r6.qtyDone);
  }
}
function LivraisonDetailComponent_Conditional_19_For_13_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(line_r6.availableQty < line_r6.qtyDemanded ? "qty-warn" : "qty-ok");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 3, line_r6.availableQty, "1.0-2"), " ");
  }
}
function LivraisonDetailComponent_Conditional_19_For_13_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "button", 48);
    \u0275\u0275listener("click", function LivraisonDetailComponent_Conditional_19_For_13_Conditional_21_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const \u0275$index_138_r7 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeLine(\u0275$index_138_r7));
    });
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function LivraisonDetailComponent_Conditional_19_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, LivraisonDetailComponent_Conditional_19_For_13_Conditional_2_Template, 5, 2, "select", 36)(3, LivraisonDetailComponent_Conditional_19_For_13_Conditional_3_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275conditionalCreate(5, LivraisonDetailComponent_Conditional_19_For_13_Conditional_5_Template, 1, 1, "input", 38)(6, LivraisonDetailComponent_Conditional_19_For_13_Conditional_6_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275conditionalCreate(8, LivraisonDetailComponent_Conditional_19_For_13_Conditional_8_Template, 1, 1, "input", 39)(9, LivraisonDetailComponent_Conditional_19_For_13_Conditional_9_Template, 2, 1, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275conditionalCreate(11, LivraisonDetailComponent_Conditional_19_For_13_Conditional_11_Template, 1, 1, "input", 39)(12, LivraisonDetailComponent_Conditional_19_For_13_Conditional_12_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 40);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 41);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275conditionalCreate(20, LivraisonDetailComponent_Conditional_19_For_13_Conditional_20_Template, 3, 6, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, LivraisonDetailComponent_Conditional_19_For_13_Conditional_21_Template, 4, 0, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isDraft ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isDraft ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isDraft ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.isDone ? 11 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 8, line_r6.priceUnit, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 11, line_r6.qtyDone * line_r6.priceUnit, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(line_r6.availableQty !== void 0 ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isDraft ? 21 : -1);
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tfoot")(1, "tr")(2, "td", 49);
    \u0275\u0275text(3, "TOTAL CO\xDBT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 50);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "td", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 1, ctx_r0.lineTotal, "1.0-0"), " FCFA");
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_23_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r14 = ctx.$implicit;
    \u0275\u0275property("value", t_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r14.name);
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_19_Conditional_23_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedTypeId, $event) || (ctx_r0.selectedTypeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(1, LivraisonDetailComponent_Conditional_19_Conditional_23_For_2_Template, 2, 2, "option", 45, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedTypeId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.pickingTypes);
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.picking == null ? null : ctx_r0.picking.pickingTypeName);
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_28_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r16 = ctx.$implicit;
    \u0275\u0275property("value", l_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r16.completeName || l_r16.name);
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_19_Conditional_28_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedSrcId, $event) || (ctx_r0.selectedSrcId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(1, LivraisonDetailComponent_Conditional_19_Conditional_28_For_2_Template, 2, 2, "option", 45, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedSrcId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.locations);
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.locationName(ctx_r0.picking == null ? null : ctx_r0.picking.locationId));
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_33_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r18 = ctx.$implicit;
    \u0275\u0275property("value", l_r18.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r18.completeName || l_r18.name);
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_19_Conditional_33_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedDestId, $event) || (ctx_r0.selectedDestId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(1, LivraisonDetailComponent_Conditional_19_Conditional_33_For_2_Template, 2, 2, "option", 45, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedDestId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.locations);
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.locationName(ctx_r0.picking == null ? null : ctx_r0.picking.locationDestId));
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_19_Conditional_38_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.partnerName, $event) || (ctx_r0.partnerName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.partnerName);
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.partnerName || "\u2014");
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_19_Conditional_43_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.scheduledDate, $event) || (ctx_r0.scheduledDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.scheduledDate);
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, ctx_r0.scheduledDate, "dd/MM/yyyy"));
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_19_Conditional_48_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.origin, $event) || (ctx_r0.origin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.origin);
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.origin || "\u2014");
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 56);
    \u0275\u0275twoWayListener("ngModelChange", function LivraisonDetailComponent_Conditional_19_Conditional_53_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.notes, $event) || (ctx_r0.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.notes);
  }
}
function LivraisonDetailComponent_Conditional_19_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.notes || "\u2014");
  }
}
function LivraisonDetailComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 18)(2, "div", 19)(3, "div", 20)(4, "span");
    \u0275\u0275text(5, "Lignes de livraison");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, LivraisonDetailComponent_Conditional_19_Conditional_6_Template, 4, 0, "button", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 22);
    \u0275\u0275conditionalCreate(8, LivraisonDetailComponent_Conditional_19_Conditional_8_Template, 2, 0, "div", 23);
    \u0275\u0275elementStart(9, "table", 24);
    \u0275\u0275conditionalCreate(10, LivraisonDetailComponent_Conditional_19_Conditional_10_Template, 17, 1, "thead");
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, LivraisonDetailComponent_Conditional_19_For_13_Template, 22, 14, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, LivraisonDetailComponent_Conditional_19_Conditional_14_Template, 8, 4, "tfoot");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 25)(16, "div", 19)(17, "div", 20);
    \u0275\u0275text(18, "Informations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 26)(20, "div", 27)(21, "label");
    \u0275\u0275text(22, "Type d'op\xE9ration");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, LivraisonDetailComponent_Conditional_19_Conditional_23_Template, 3, 1, "select", 28)(24, LivraisonDetailComponent_Conditional_19_Conditional_24_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 27)(26, "label");
    \u0275\u0275text(27, "Depuis (Source)");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, LivraisonDetailComponent_Conditional_19_Conditional_28_Template, 3, 1, "select", 28)(29, LivraisonDetailComponent_Conditional_19_Conditional_29_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 27)(31, "label");
    \u0275\u0275text(32, "Vers (Destination)");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, LivraisonDetailComponent_Conditional_19_Conditional_33_Template, 3, 1, "select", 28)(34, LivraisonDetailComponent_Conditional_19_Conditional_34_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 27)(36, "label");
    \u0275\u0275text(37, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(38, LivraisonDetailComponent_Conditional_19_Conditional_38_Template, 1, 1, "input", 30)(39, LivraisonDetailComponent_Conditional_19_Conditional_39_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 27)(41, "label");
    \u0275\u0275text(42, "Date planifi\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(43, LivraisonDetailComponent_Conditional_19_Conditional_43_Template, 1, 1, "input", 31)(44, LivraisonDetailComponent_Conditional_19_Conditional_44_Template, 3, 4, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 27)(46, "label");
    \u0275\u0275text(47, "Origine (FAC, BC...)");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(48, LivraisonDetailComponent_Conditional_19_Conditional_48_Template, 1, 1, "input", 32)(49, LivraisonDetailComponent_Conditional_19_Conditional_49_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 27)(51, "label");
    \u0275\u0275text(52, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(53, LivraisonDetailComponent_Conditional_19_Conditional_53_Template, 1, 1, "textarea", 33)(54, LivraisonDetailComponent_Conditional_19_Conditional_54_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.isDraft ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.lines.length === 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-lines", ctx_r0.lines.length > 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.lines.length > 0 ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.lines);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.lines.length > 0 ? 14 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.isDraft ? 23 : 24);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDraft ? 28 : 29);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDraft ? 33 : 34);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDraft ? 38 : 39);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDraft ? 43 : 44);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDraft ? 48 : 49);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDraft ? 53 : 54);
  }
}
var LivraisonDetailComponent = class _LivraisonDetailComponent {
  constructor(route, router, stockService, authService) {
    this.route = route;
    this.router = router;
    this.stockService = stockService;
    this.authService = authService;
    this.picking = null;
    this.pickingTypes = [];
    this.locations = [];
    this.products = [];
    this.loading = false;
    this.saving = false;
    this.validating = false;
    this.cancelling = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.isNew = false;
    this.partnerName = "";
    this.origin = "";
    this.notes = "";
    this.scheduledDate = "";
    this.lines = [];
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    const id = this.route.snapshot.paramMap.get("id");
    this.isNew = !id || id === "new";
    forkJoin({
      types: this.stockService.getPickingTypes(this.companyId),
      locations: this.stockService.getLocations(this.companyId),
      products: this.stockService.getProducts(this.companyId)
    }).subscribe(({ types, locations, products }) => {
      this.pickingTypes = types.filter((t) => t.code === "outgoing");
      this.locations = locations;
      this.products = products.filter((p) => p.type === "product" || p.type === "consu");
      if (this.isNew) {
        const dt = this.pickingTypes[0];
        if (dt) {
          this.selectedTypeId = dt.id;
          this.selectedSrcId = dt.defaultLocationSrcId;
          this.selectedDestId = dt.defaultLocationDestId;
        }
        this.scheduledDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
        this.addLine();
      } else {
        this.loadPicking(Number(id));
      }
    });
  }
  loadPicking(id) {
    this.loading = true;
    this.stockService.getPicking(id).subscribe({
      next: (p) => {
        this.picking = p;
        this.selectedTypeId = p.pickingTypeId;
        this.selectedSrcId = p.locationId;
        this.selectedDestId = p.locationDestId;
        this.partnerName = p.partnerName || "";
        this.origin = p.origin || "";
        this.notes = p.notes || "";
        this.scheduledDate = p.scheduledDate || "";
        this.lines = (p.moves || []).map((m) => ({
          productId: m.productId,
          qtyDemanded: m.qtyDemanded,
          qtyDone: m.qtyDone ?? m.qtyDemanded,
          priceUnit: m.priceUnit ?? 0,
          uomName: m.uomName || "",
          availableQty: m.availableQty ?? 0
        }));
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  addLine() {
    this.lines.push({ productId: null, qtyDemanded: 1, qtyDone: 1, priceUnit: 0, uomName: "", availableQty: 0 });
  }
  removeLine(i) {
    this.lines.splice(i, 1);
  }
  onProductChange(i) {
    const prod = this.products.find((p) => p.id === Number(this.lines[i].productId));
    if (prod) {
      this.lines[i].uomName = prod.uomName || "";
      this.lines[i].priceUnit = prod.standardPrice || 0;
      this.stockService.getQuants(this.companyId, this.selectedSrcId, prod.id).subscribe((q) => {
        this.lines[i].availableQty = q.reduce((s, qq) => s + qq.availableQuantity, 0);
      });
    }
  }
  get isDraft() {
    return !this.picking || this.picking.state === "draft";
  }
  get isDone() {
    return this.picking?.state === "done";
  }
  get isCancelled() {
    return this.picking?.state === "cancelled";
  }
  get lineTotal() {
    return this.lines.reduce((s, l) => s + l.qtyDone * l.priceUnit, 0);
  }
  buildReq() {
    return {
      pickingTypeId: this.selectedTypeId,
      locationId: this.selectedSrcId,
      locationDestId: this.selectedDestId,
      partnerName: this.partnerName,
      origin: this.origin,
      notes: this.notes,
      scheduledDate: this.scheduledDate,
      companyId: this.companyId,
      moves: this.lines.filter((l) => l.productId).map((l) => ({
        productId: Number(l.productId),
        qtyDemanded: l.qtyDemanded,
        qtyDone: l.qtyDone,
        priceUnit: l.priceUnit
      }))
    };
  }
  save() {
    if (!this.selectedTypeId || this.lines.filter((l) => l.productId).length === 0) {
      this.errorMsg = "S\xE9lectionner un type et ajouter au moins une ligne";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const obs = this.isNew ? this.stockService.createPicking(this.buildReq()) : this.stockService.updatePicking(this.picking.id, this.buildReq());
    obs.subscribe({
      next: (p) => {
        this.saving = false;
        this.isNew ? this.router.navigate(["/stock/livraisons", p.id]) : this.picking = p;
      },
      error: (e) => {
        this.saving = false;
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  validate() {
    if (!this.picking)
      return;
    this.validating = true;
    this.errorMsg = "";
    this.stockService.updatePicking(this.picking.id, this.buildReq()).subscribe({
      next: () => {
        this.stockService.validatePicking(this.picking.id).subscribe({
          next: (p) => {
            this.validating = false;
            this.picking = p;
            this.loadPicking(p.id);
          },
          error: (e) => {
            this.validating = false;
            this.errorMsg = e.error?.message || "Stock insuffisant ou erreur";
          }
        });
      },
      error: (e) => {
        this.validating = false;
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  cancel() {
    if (!this.picking || !confirm("Annuler cette livraison ?"))
      return;
    this.cancelling = true;
    this.stockService.cancelPicking(this.picking.id).subscribe({
      next: (p) => {
        this.cancelling = false;
        this.picking = p;
      },
      error: (e) => {
        this.cancelling = false;
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  productName(id) {
    return this.products.find((p) => p.id === Number(id))?.name || "";
  }
  locationName(id) {
    return this.locations.find((l) => l.id === Number(id))?.completeName || this.locations.find((l) => l.id === Number(id))?.name || "";
  }
  stateLabel(s) {
    return { draft: "Brouillon", done: "Livr\xE9", cancelled: "Annul\xE9" }[s] || s;
  }
  static {
    this.\u0275fac = function LivraisonDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LivraisonDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LivraisonDetailComponent, selectors: [["app-livraison-detail"]], decls: 20, vars: 8, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "page-title"], [1, "state-badge"], [1, "header-actions"], [1, "btn-secondary", 3, "disabled"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [1, "info-banner"], [1, "loading"], [1, "form-layout"], [1, "btn-secondary", 3, "click", "disabled"], [1, "btn-validate", 3, "click", "disabled"], [1, "btn-cancel-picking", 3, "click", "disabled"], [1, "material-icons", "spin"], [1, "form-main"], [1, "card"], [1, "card-header"], [1, "btn-add-line"], [1, "lines-container"], [1, "empty-lines"], [1, "lines-table"], [1, "form-side"], [1, "card-body"], [1, "form-group"], [1, "form-control", 3, "ngModel"], [1, "form-value"], ["type", "text", "placeholder", "Nom du client", 1, "form-control", 3, "ngModel"], ["type", "date", 1, "form-control", 3, "ngModel"], ["type", "text", 1, "form-control", 3, "ngModel"], ["rows", "2", 1, "form-control", 3, "ngModel"], [1, "btn-add-line", 3, "click"], [2, "width", "34%"], [1, "line-select", 3, "ngModel"], [1, "font-bold"], ["type", "text", 1, "line-input", 3, "ngModel"], ["type", "number", "min", "0", 1, "line-input", "text-right", 3, "ngModel"], [1, "cell-right"], [1, "cell-right", "font-bold"], [3, "class"], [1, "line-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "value"], ["type", "text", 1, "line-input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "line-input", "text-right", 3, "ngModelChange", "ngModel"], [1, "btn-remove-line", 3, "click"], ["colspan", "5", 1, "total-label"], [1, "cell-right", "total-value"], ["colspan", "2"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Nom du client", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function LivraisonDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        \u0275\u0275listener("click", function LivraisonDetailComponent_Template_button_click_3_listener() {
          return ctx.router.navigate(["/stock/livraisons"]);
        });
        \u0275\u0275elementStart(4, "span", 4);
        \u0275\u0275text(5, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div")(7, "h1", 5)(8, "span", 4);
        \u0275\u0275text(9, "local_shipping");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, LivraisonDetailComponent_Conditional_11_Template, 2, 2, "span", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 7);
        \u0275\u0275conditionalCreate(13, LivraisonDetailComponent_Conditional_13_Template, 4, 2, "button", 8);
        \u0275\u0275conditionalCreate(14, LivraisonDetailComponent_Conditional_14_Template, 7, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(15, LivraisonDetailComponent_Conditional_15_Template, 4, 1, "div", 9);
        \u0275\u0275conditionalCreate(16, LivraisonDetailComponent_Conditional_16_Template, 4, 1, "div", 10);
        \u0275\u0275conditionalCreate(17, LivraisonDetailComponent_Conditional_17_Template, 10, 5, "div", 11);
        \u0275\u0275conditionalCreate(18, LivraisonDetailComponent_Conditional_18_Template, 3, 0, "div", 12)(19, LivraisonDetailComponent_Conditional_19_Template, 55, 13, "div", 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", ctx.isNew ? "Nouvelle livraison" : (ctx.picking == null ? null : ctx.picking.name) || "Livraison", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.isNew && ctx.picking ? 11 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.isDone && !ctx.isCancelled ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.isNew && !ctx.isDone && !ctx.isCancelled ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isDone && (ctx.picking == null ? null : ctx.picking.accountMoveName) ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 18 : 19);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #017E84;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 6px;\n  color: #6c757d;\n  display: flex;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.state-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.state-badge[data-state=draft][_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.state-badge[data-state=done][_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.state-badge[data-state=cancelled][_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: white;\n  color: #017E84;\n  border: 1px solid #017E84;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #017E84;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-validate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #015f64;\n}\n.btn-cancel-picking[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px;\n  background: white;\n  color: #dc3545;\n  border: 1px solid #dc3545;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.btn-cancel-picking[_ngcontent-%COMP%]:hover {\n  background: #fde8e8;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  font-size: 13px;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #e0f2f1;\n  border-radius: 6px;\n  margin-bottom: 14px;\n  font-size: 13px;\n  color: #004d40;\n  border: 1px solid #b2dfdb;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 310px;\n  gap: 16px;\n  align-items: start;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n}\n.btn-add-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #017E84;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.lines-container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.empty-lines[_ngcontent-%COMP%] {\n  padding: 30px;\n  text-align: center;\n  color: #adb5bd;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table.has-lines[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border-bottom: 1px solid #f5f5f5;\n  font-size: 13px;\n  vertical-align: middle;\n}\n.lines-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-top: 2px solid #e9ecef;\n  background: #fafafa;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.cell-right[_ngcontent-%COMP%] {\n  text-align: right;\n  display: block;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.total-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n}\n.total-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  font-family: monospace;\n  text-align: right;\n}\n.line-select[_ngcontent-%COMP%], \n.line-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 8px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.line-select[_ngcontent-%COMP%]:focus, \n.line-input[_ngcontent-%COMP%]:focus {\n  border-color: #017E84;\n}\n.line-select.text-right[_ngcontent-%COMP%], \n.line-input.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.btn-remove-line[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #adb5bd;\n  cursor: pointer;\n  padding: 3px;\n  border-radius: 4px;\n}\n.btn-remove-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-remove-line[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n  background: #fde8e8;\n}\n.qty-ok[_ngcontent-%COMP%] {\n  color: #198754;\n  font-weight: 600;\n  font-size: 12px;\n}\n.qty-warn[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 600;\n  font-size: 12px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 4px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #017E84;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.form-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #212529;\n  padding: 4px 0;\n}\n/*# sourceMappingURL=livraison-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LivraisonDetailComponent, [{
    type: Component,
    args: [{ selector: "app-livraison-detail", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div class="header-left">
      <button class="btn-back" (click)="router.navigate(['/stock/livraisons'])"><span class="material-icons">arrow_back</span></button>
      <div>
        <h1 class="page-title">
          <span class="material-icons">local_shipping</span>
          {{ isNew ? 'Nouvelle livraison' : (picking?.name || 'Livraison') }}
        </h1>
        @if (!isNew && picking) {
          <span class="state-badge" [attr.data-state]="picking.state">{{ stateLabel(picking.state || '') }}</span>
        }
      </div>
    </div>
    <div class="header-actions">
      @if (!isDone && !isCancelled) {
        <button class="btn-secondary" (click)="save()" [disabled]="saving">
          <span class="material-icons">save</span> {{ saving ? 'Sauvegarde...' : 'Sauvegarder' }}
        </button>
      }
      @if (!isNew && !isDone && !isCancelled) {
        <button class="btn-validate" (click)="validate()" [disabled]="validating">
          <span class="material-icons">local_shipping</span> {{ validating ? 'Validation...' : 'Valider la livraison' }}
        </button>
        <button class="btn-cancel-picking" (click)="cancel()" [disabled]="cancelling">
          <span class="material-icons">cancel</span>
        </button>
      }
    </div>
  </div>

  @if (errorMsg) { <div class="alert alert-danger"><span class="material-icons">error</span> {{ errorMsg }}</div> }
  @if (successMsg) { <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div> }
  @if (isDone && picking?.accountMoveName) {
    <div class="info-banner">
      <span class="material-icons">book</span>
      Co\xFBt marchandises livr\xE9 comptabilis\xE9 : <strong>{{ picking!.accountMoveName }}</strong>
      \xB7 Valeur : <strong>{{ picking!.totalValue | number:'1.0-0' }} FCFA</strong>
    </div>
  }

  @if (loading) {
    <div class="loading"><span class="material-icons spin">refresh</span></div>
  } @else {
    <div class="form-layout">
      <div class="form-main">
        <div class="card">
          <div class="card-header">
            <span>Lignes de livraison</span>
            @if (isDraft) {
              <button class="btn-add-line" (click)="addLine()"><span class="material-icons">add</span> Ajouter</button>
            }
          </div>
          <div class="lines-container">
            @if (lines.length === 0) { <div class="empty-lines">Aucune ligne</div> }
            <table class="lines-table" [class.has-lines]="lines.length > 0">
              @if (lines.length > 0) {
                <thead><tr>
                  <th style="width:34%">Article</th><th>Unit\xE9</th>
                  <th>Qt\xE9 dem.</th><th>Qt\xE9 livr\xE9e</th>
                  <th>CMUP</th><th>Sous-total</th><th>Disponible</th>
                  @if (isDraft) { <th></th> }
                </tr></thead>
              }
              <tbody>
                @for (line of lines; track $index; let i = $index) {
                  <tr>
                    <td>
                      @if (isDraft) {
                        <select class="line-select" [(ngModel)]="line.productId" (ngModelChange)="onProductChange(i)">
                          <option [ngValue]="null">\u2014 Choisir \u2014</option>
                          @for (p of products; track p.id) {
                            <option [value]="p.id">{{ p.defaultCode ? '['+p.defaultCode+'] ' : '' }}{{ p.name }}</option>
                          }
                        </select>
                      } @else { <span class="font-bold">{{ productName(line.productId) }}</span> }
                    </td>
                    <td>
                      @if (isDraft) { <input type="text" class="line-input" [(ngModel)]="line.uomName" /> }
                      @else { {{ line.uomName }} }
                    </td>
                    <td>
                      @if (isDraft) { <input type="number" class="line-input text-right" [(ngModel)]="line.qtyDemanded" min="0" (ngModelChange)="line.qtyDone = line.qtyDemanded" /> }
                      @else { <span class="cell-right">{{ line.qtyDemanded }}</span> }
                    </td>
                    <td>
                      @if (!isDone) { <input type="number" class="line-input text-right" [(ngModel)]="line.qtyDone" min="0" /> }
                      @else { <span class="cell-right font-bold">{{ line.qtyDone }}</span> }
                    </td>
                    <td class="cell-right">{{ line.priceUnit | number:'1.0-0' }}</td>
                    <td class="cell-right font-bold">{{ line.qtyDone * line.priceUnit | number:'1.0-0' }}</td>
                    <td>
                      @if (line.availableQty !== undefined) {
                        <span [class]="line.availableQty < line.qtyDemanded ? 'qty-warn' : 'qty-ok'">
                          {{ line.availableQty | number:'1.0-2' }}
                        </span>
                      }
                    </td>
                    @if (isDraft) {
                      <td><button class="btn-remove-line" (click)="removeLine(i)"><span class="material-icons">delete</span></button></td>
                    }
                  </tr>
                }
              </tbody>
              @if (lines.length > 0) {
                <tfoot><tr>
                  <td colspan="5" class="total-label">TOTAL CO\xDBT</td>
                  <td class="cell-right total-value">{{ lineTotal | number:'1.0-0' }} FCFA</td>
                  <td colspan="2"></td>
                </tr></tfoot>
              }
            </table>
          </div>
        </div>
      </div>
      <div class="form-side">
        <div class="card">
          <div class="card-header">Informations</div>
          <div class="card-body">
            <div class="form-group">
              <label>Type d'op\xE9ration</label>
              @if (isDraft) {
                <select class="form-control" [(ngModel)]="selectedTypeId">
                  @for (t of pickingTypes; track t.id) { <option [value]="t.id">{{ t.name }}</option> }
                </select>
              } @else { <div class="form-value">{{ picking?.pickingTypeName }}</div> }
            </div>
            <div class="form-group">
              <label>Depuis (Source)</label>
              @if (isDraft) {
                <select class="form-control" [(ngModel)]="selectedSrcId">
                  @for (l of locations; track l.id) { <option [value]="l.id">{{ l.completeName || l.name }}</option> }
                </select>
              } @else { <div class="form-value">{{ locationName(picking?.locationId!) }}</div> }
            </div>
            <div class="form-group">
              <label>Vers (Destination)</label>
              @if (isDraft) {
                <select class="form-control" [(ngModel)]="selectedDestId">
                  @for (l of locations; track l.id) { <option [value]="l.id">{{ l.completeName || l.name }}</option> }
                </select>
              } @else { <div class="form-value">{{ locationName(picking?.locationDestId!) }}</div> }
            </div>
            <div class="form-group">
              <label>Client</label>
              @if (isDraft) { <input type="text" class="form-control" [(ngModel)]="partnerName" placeholder="Nom du client" /> }
              @else { <div class="form-value">{{ partnerName || '\u2014' }}</div> }
            </div>
            <div class="form-group">
              <label>Date planifi\xE9e</label>
              @if (isDraft) { <input type="date" class="form-control" [(ngModel)]="scheduledDate" /> }
              @else { <div class="form-value">{{ scheduledDate | date:'dd/MM/yyyy' }}</div> }
            </div>
            <div class="form-group">
              <label>Origine (FAC, BC...)</label>
              @if (isDraft) { <input type="text" class="form-control" [(ngModel)]="origin" /> }
              @else { <div class="form-value">{{ origin || '\u2014' }}</div> }
            </div>
            <div class="form-group">
              <label>Notes</label>
              @if (isDraft) { <textarea class="form-control" [(ngModel)]="notes" rows="2"></textarea> }
              @else { <div class="form-value">{{ notes || '\u2014' }}</div> }
            </div>
          </div>
        </div>
      </div>
    </div>
  }
</div>
`, styles: ['/* src/app/modules/stock/components/livraisons/livraison-detail.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: #017E84;\n}\n.page-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-back {\n  background: none;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 6px;\n  color: #6c757d;\n  display: flex;\n}\n.btn-back:hover {\n  background: #f0f0f0;\n}\n.state-badge {\n  display: inline-block;\n  padding: 3px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.state-badge[data-state=draft] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.state-badge[data-state=done] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.state-badge[data-state=cancelled] {\n  background: #fde8e8;\n  color: #721c24;\n}\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: white;\n  color: #017E84;\n  border: 1px solid #017E84;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #017E84;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-validate:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate:hover:not(:disabled) {\n  background: #015f64;\n}\n.btn-cancel-picking {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px;\n  background: white;\n  color: #dc3545;\n  border: 1px solid #dc3545;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.btn-cancel-picking:hover {\n  background: #fde8e8;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  font-size: 13px;\n}\n.alert.alert-danger {\n  background: #fde8e8;\n  color: #721c24;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.info-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #e0f2f1;\n  border-radius: 6px;\n  margin-bottom: 14px;\n  font-size: 13px;\n  color: #004d40;\n  border: 1px solid #b2dfdb;\n}\n.loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-layout {\n  display: grid;\n  grid-template-columns: 1fr 310px;\n  gap: 16px;\n  align-items: start;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.card .card-body {\n  padding: 16px 18px;\n}\n.btn-add-line {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #017E84;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.lines-container {\n  padding: 0;\n}\n.empty-lines {\n  padding: 30px;\n  text-align: center;\n  color: #adb5bd;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table.has-lines thead th {\n  padding: 8px 10px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.lines-table td {\n  padding: 6px 8px;\n  border-bottom: 1px solid #f5f5f5;\n  font-size: 13px;\n  vertical-align: middle;\n}\n.lines-table tfoot td {\n  padding: 10px;\n  border-top: 2px solid #e9ecef;\n  background: #fafafa;\n}\n.lines-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.cell-right {\n  text-align: right;\n  display: block;\n}\n.font-bold {\n  font-weight: 600;\n}\n.total-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n}\n.total-value {\n  font-size: 14px;\n  font-weight: 700;\n  font-family: monospace;\n  text-align: right;\n}\n.line-select,\n.line-input {\n  width: 100%;\n  padding: 5px 8px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.line-select:focus,\n.line-input:focus {\n  border-color: #017E84;\n}\n.line-select.text-right,\n.line-input.text-right {\n  text-align: right;\n}\n.btn-remove-line {\n  background: none;\n  border: none;\n  color: #adb5bd;\n  cursor: pointer;\n  padding: 3px;\n  border-radius: 4px;\n}\n.btn-remove-line .material-icons {\n  font-size: 16px;\n}\n.btn-remove-line:hover {\n  color: #dc3545;\n  background: #fde8e8;\n}\n.qty-ok {\n  color: #198754;\n  font-weight: 600;\n  font-size: 12px;\n}\n.qty-warn {\n  color: #dc3545;\n  font-weight: 600;\n  font-size: 12px;\n}\n.form-group {\n  margin-bottom: 12px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 4px;\n}\n.form-control {\n  width: 100%;\n  padding: 7px 10px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  border-color: #017E84;\n}\ntextarea.form-control {\n  resize: vertical;\n}\n.form-value {\n  font-size: 13px;\n  color: #212529;\n  padding: 4px 0;\n}\n/*# sourceMappingURL=livraison-detail.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: StockService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LivraisonDetailComponent, { className: "LivraisonDetailComponent", filePath: "src/app/modules/stock/components/livraisons/livraison-detail.component.ts", lineNumber: 16 });
})();
export {
  LivraisonDetailComponent
};
//# sourceMappingURL=chunk-4K7V2HYQ.js.map
