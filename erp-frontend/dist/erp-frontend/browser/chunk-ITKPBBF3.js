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

// src/app/modules/stock/components/transferts/transfert-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TransfertDetailComponent_Conditional_11_Template(rf, ctx) {
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
function TransfertDetailComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function TransfertDetailComponent_Conditional_13_Template_button_click_0_listener() {
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
function TransfertDetailComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function TransfertDetailComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.validate());
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "compare_arrows");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function TransfertDetailComponent_Conditional_14_Template_button_click_4_listener() {
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
    \u0275\u0275textInterpolate1(" ", ctx_r0.validating ? "Transfert en cours..." : "Valider le transfert", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.cancelling);
  }
}
function TransfertDetailComponent_Conditional_15_Template(rf, ctx) {
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
function TransfertDetailComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 4);
    \u0275\u0275text(2, "swap_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Transfert valoris\xE9 \u2014 \xE9criture comptable : ");
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
function TransfertDetailComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 16);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd()();
  }
}
function TransfertDetailComponent_Conditional_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function TransfertDetailComponent_Conditional_18_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
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
function TransfertDetailComponent_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, "Aucune ligne \u2014 ajoutez des articles \xE0 transf\xE9rer");
    \u0275\u0275elementEnd();
  }
}
function TransfertDetailComponent_Conditional_18_Conditional_10_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th");
  }
}
function TransfertDetailComponent_Conditional_18_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead")(1, "tr")(2, "th", 40);
    \u0275\u0275text(3, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5, "Unit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Qt\xE9 demand.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Qt\xE9 transf\xE9r\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "CMUP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Valeur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Dispo source");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, TransfertDetailComponent_Conditional_18_Conditional_10_Conditional_16_Template, 1, 0, "th");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275conditional(ctx_r0.isDraft ? 16 : -1);
  }
}
function TransfertDetailComponent_Conditional_18_For_13_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    \u0275\u0275property("value", p_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r9.defaultCode ? "[" + p_r9.defaultCode + "] " : "", "", p_r9.name);
  }
}
function TransfertDetailComponent_Conditional_18_For_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 46);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_18_For_13_Conditional_2_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const line_r7 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r7.productId, $event) || (line_r7.productId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TransfertDetailComponent_Conditional_18_For_13_Conditional_2_Template_select_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r6);
      const \u0275$index_131_r8 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onProductChange(\u0275$index_131_r8));
    });
    \u0275\u0275elementStart(1, "option", 47);
    \u0275\u0275text(2, "\u2014 Choisir \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, TransfertDetailComponent_Conditional_18_For_13_Conditional_2_For_4_Template, 2, 3, "option", 29, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", line_r7.productId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.products);
  }
}
function TransfertDetailComponent_Conditional_18_For_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.productName(line_r7.productId));
  }
}
function TransfertDetailComponent_Conditional_18_For_13_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_18_For_13_Conditional_7_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const line_r7 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r7.qtyDemanded, $event) || (line_r7.qtyDemanded = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TransfertDetailComponent_Conditional_18_For_13_Conditional_7_Template_input_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r10);
      const line_r7 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(line_r7.qtyDone = line_r7.qtyDemanded);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", line_r7.qtyDemanded);
  }
}
function TransfertDetailComponent_Conditional_18_For_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r7.qtyDemanded);
  }
}
function TransfertDetailComponent_Conditional_18_For_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_18_For_13_Conditional_10_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const line_r7 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r7.qtyDone, $event) || (line_r7.qtyDone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", line_r7.qtyDone);
  }
}
function TransfertDetailComponent_Conditional_18_For_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r7.qtyDone);
  }
}
function TransfertDetailComponent_Conditional_18_For_13_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "button", 49);
    \u0275\u0275listener("click", function TransfertDetailComponent_Conditional_18_For_13_Conditional_22_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const \u0275$index_131_r8 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeLine(\u0275$index_131_r8));
    });
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function TransfertDetailComponent_Conditional_18_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, TransfertDetailComponent_Conditional_18_For_13_Conditional_2_Template, 5, 2, "select", 41)(3, TransfertDetailComponent_Conditional_18_For_13_Conditional_3_Template, 2, 1, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275conditionalCreate(7, TransfertDetailComponent_Conditional_18_For_13_Conditional_7_Template, 1, 1, "input", 43)(8, TransfertDetailComponent_Conditional_18_For_13_Conditional_8_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275conditionalCreate(10, TransfertDetailComponent_Conditional_18_For_13_Conditional_10_Template, 1, 1, "input", 43)(11, TransfertDetailComponent_Conditional_18_For_13_Conditional_11_Template, 2, 1, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 44);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 45);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(22, TransfertDetailComponent_Conditional_18_For_13_Conditional_22_Template, 4, 0, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isDraft ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r7.uomName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isDraft ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.isDone ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 10, line_r7.priceUnit, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 13, line_r7.qtyDone * line_r7.priceUnit, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(line_r7.availableQty < line_r7.qtyDemanded ? "qty-warn" : "qty-ok");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 16, line_r7.availableQty, "1.0-2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isDraft ? 22 : -1);
  }
}
function TransfertDetailComponent_Conditional_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tfoot")(1, "tr")(2, "td", 50);
    \u0275\u0275text(3, "VALEUR TOTALE TRANSF\xC9R\xC9E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 51);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "td", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 1, ctx_r0.lineTotal, "1.0-0"), " FCFA");
  }
}
function TransfertDetailComponent_Conditional_18_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r13 = ctx.$implicit;
    \u0275\u0275property("value", w_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r13.name);
  }
}
function TransfertDetailComponent_Conditional_18_Conditional_33_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r15 = ctx.$implicit;
    \u0275\u0275property("value", l_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r15.completeName || l_r15.name);
  }
}
function TransfertDetailComponent_Conditional_18_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_18_Conditional_33_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedSrcId, $event) || (ctx_r0.selectedSrcId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 28);
    \u0275\u0275text(2, "\u2014 Choisir \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, TransfertDetailComponent_Conditional_18_Conditional_33_For_4_Template, 2, 2, "option", 29, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedSrcId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.filteredSrcLocations);
  }
}
function TransfertDetailComponent_Conditional_18_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 4);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.locationName(ctx_r0.picking == null ? null : ctx_r0.picking.locationId));
  }
}
function TransfertDetailComponent_Conditional_18_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r16 = ctx.$implicit;
    \u0275\u0275property("value", w_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r16.name);
  }
}
function TransfertDetailComponent_Conditional_18_Conditional_51_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 29);
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
function TransfertDetailComponent_Conditional_18_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_18_Conditional_51_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedDestId, $event) || (ctx_r0.selectedDestId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 28);
    \u0275\u0275text(2, "\u2014 Choisir \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, TransfertDetailComponent_Conditional_18_Conditional_51_For_4_Template, 2, 2, "option", 29, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedDestId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.filteredDestLocations);
  }
}
function TransfertDetailComponent_Conditional_18_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 4);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.locationName(ctx_r0.picking == null ? null : ctx_r0.picking.locationDestId));
  }
}
function TransfertDetailComponent_Conditional_18_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_18_Conditional_60_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r19);
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
function TransfertDetailComponent_Conditional_18_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
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
function TransfertDetailComponent_Conditional_18_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_18_Conditional_65_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r20);
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
function TransfertDetailComponent_Conditional_18_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.origin || "\u2014");
  }
}
function TransfertDetailComponent_Conditional_18_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 55);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_18_Conditional_70_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r21);
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
function TransfertDetailComponent_Conditional_18_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.notes || "\u2014");
  }
}
function TransfertDetailComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 17)(2, "div", 18)(3, "div", 19)(4, "span");
    \u0275\u0275text(5, "Articles \xE0 transf\xE9rer");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TransfertDetailComponent_Conditional_18_Conditional_6_Template, 4, 0, "button", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 21);
    \u0275\u0275conditionalCreate(8, TransfertDetailComponent_Conditional_18_Conditional_8_Template, 2, 0, "div", 22);
    \u0275\u0275elementStart(9, "table", 23);
    \u0275\u0275conditionalCreate(10, TransfertDetailComponent_Conditional_18_Conditional_10_Template, 17, 1, "thead");
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, TransfertDetailComponent_Conditional_18_For_13_Template, 23, 19, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, TransfertDetailComponent_Conditional_18_Conditional_14_Template, 8, 4, "tfoot");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 24)(16, "div", 18)(17, "div", 19);
    \u0275\u0275text(18, "Emplacements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 25)(20, "div", 26)(21, "label");
    \u0275\u0275text(22, "Entrep\xF4t source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_18_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filterSrcWarehouse, $event) || (ctx_r0.filterSrcWarehouse = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "option", 28);
    \u0275\u0275text(25, "\u2014 Tous les entrep\xF4ts \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, TransfertDetailComponent_Conditional_18_For_27_Template, 2, 2, "option", 29, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 26)(29, "label");
    \u0275\u0275text(30, "Emplacement source ");
    \u0275\u0275elementStart(31, "span", 30);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(33, TransfertDetailComponent_Conditional_18_Conditional_33_Template, 5, 1, "select", 31)(34, TransfertDetailComponent_Conditional_18_Conditional_34_Template, 4, 1, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 33)(36, "span", 4);
    \u0275\u0275text(37, "south");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 26)(39, "label");
    \u0275\u0275text(40, "Entrep\xF4t destination");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_18_Template_select_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filterDestWarehouse, $event) || (ctx_r0.filterDestWarehouse = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(42, "option", 28);
    \u0275\u0275text(43, "\u2014 Tous les entrep\xF4ts \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(44, TransfertDetailComponent_Conditional_18_For_45_Template, 2, 2, "option", 29, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 26)(47, "label");
    \u0275\u0275text(48, "Emplacement destination ");
    \u0275\u0275elementStart(49, "span", 30);
    \u0275\u0275text(50, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(51, TransfertDetailComponent_Conditional_18_Conditional_51_Template, 5, 1, "select", 31)(52, TransfertDetailComponent_Conditional_18_Conditional_52_Template, 4, 1, "div", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 34)(54, "div", 19);
    \u0275\u0275text(55, "D\xE9tails");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 25)(57, "div", 26)(58, "label");
    \u0275\u0275text(59, "Date planifi\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(60, TransfertDetailComponent_Conditional_18_Conditional_60_Template, 1, 1, "input", 35)(61, TransfertDetailComponent_Conditional_18_Conditional_61_Template, 3, 4, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 26)(63, "label");
    \u0275\u0275text(64, "Origine");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(65, TransfertDetailComponent_Conditional_18_Conditional_65_Template, 1, 1, "input", 37)(66, TransfertDetailComponent_Conditional_18_Conditional_66_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 26)(68, "label");
    \u0275\u0275text(69, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(70, TransfertDetailComponent_Conditional_18_Conditional_70_Template, 1, 1, "textarea", 38)(71, TransfertDetailComponent_Conditional_18_Conditional_71_Template, 2, 1, "div", 36);
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
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filterSrcWarehouse);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.warehouses);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.isDraft ? 33 : 34);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filterDestWarehouse);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.warehouses);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.isDraft ? 51 : 52);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.isDraft ? 60 : 61);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDraft ? 65 : 66);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDraft ? 70 : 71);
  }
}
var TransfertDetailComponent = class _TransfertDetailComponent {
  constructor(route, router, stockService, authService) {
    this.route = route;
    this.router = router;
    this.stockService = stockService;
    this.authService = authService;
    this.picking = null;
    this.pickingTypes = [];
    this.allLocations = [];
    this.internalLocations = [];
    this.warehouses = [];
    this.products = [];
    this.loading = false;
    this.saving = false;
    this.validating = false;
    this.cancelling = false;
    this.errorMsg = "";
    this.isNew = false;
    this.origin = "";
    this.notes = "";
    this.scheduledDate = "";
    this.filterSrcWarehouse = "";
    this.filterDestWarehouse = "";
    this.lines = [];
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    const id = this.route.snapshot.paramMap.get("id");
    this.isNew = !id || id === "new";
    forkJoin({
      types: this.stockService.getPickingTypes(this.companyId),
      locations: this.stockService.getLocations(this.companyId),
      products: this.stockService.getProducts(this.companyId),
      warehouses: this.stockService.getWarehouses(this.companyId)
    }).subscribe(({ types, locations, products, warehouses }) => {
      this.pickingTypes = types.filter((t) => t.code === "internal");
      this.allLocations = locations;
      this.internalLocations = locations.filter((l) => l.usage === "internal");
      this.products = products.filter((p) => p.type === "product" || p.type === "consu");
      this.warehouses = warehouses;
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
  get filteredSrcLocations() {
    if (!this.filterSrcWarehouse)
      return this.internalLocations;
    return this.internalLocations.filter((l) => l.warehouseId === Number(this.filterSrcWarehouse));
  }
  get filteredDestLocations() {
    if (!this.filterDestWarehouse)
      return this.internalLocations;
    return this.internalLocations.filter((l) => l.warehouseId === Number(this.filterDestWarehouse));
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
      if (this.selectedSrcId) {
        this.stockService.getQuants(this.companyId, this.selectedSrcId, prod.id).subscribe((q) => {
          this.lines[i].availableQty = q.reduce((s, qq) => s + qq.availableQuantity, 0);
        });
      }
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
    if (!this.selectedSrcId || !this.selectedDestId || this.lines.filter((l) => l.productId).length === 0) {
      this.errorMsg = "Source, destination et au moins une ligne obligatoires";
      return;
    }
    if (this.selectedSrcId === this.selectedDestId) {
      this.errorMsg = "Source et destination doivent \xEAtre diff\xE9rentes";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const obs = this.isNew ? this.stockService.createPicking(this.buildReq()) : this.stockService.updatePicking(this.picking.id, this.buildReq());
    obs.subscribe({
      next: (p) => {
        this.saving = false;
        this.isNew ? this.router.navigate(["/stock/transferts", p.id]) : this.picking = p;
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
    if (!this.picking || !confirm("Annuler ce transfert ?"))
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
    return this.allLocations.find((l) => l.id === Number(id))?.completeName || this.allLocations.find((l) => l.id === Number(id))?.name || "";
  }
  stateLabel(s) {
    return { draft: "Brouillon", done: "Effectu\xE9", cancelled: "Annul\xE9" }[s] || s;
  }
  static {
    this.\u0275fac = function TransfertDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TransfertDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransfertDetailComponent, selectors: [["app-transfert-detail"]], decls: 19, vars: 7, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "page-title"], [1, "state-badge"], [1, "header-actions"], [1, "btn-secondary", 3, "disabled"], [1, "alert", "alert-danger"], [1, "info-banner"], [1, "loading"], [1, "form-layout"], [1, "btn-secondary", 3, "click", "disabled"], [1, "btn-validate", 3, "click", "disabled"], [1, "btn-cancel-picking", 3, "click", "disabled"], [1, "material-icons", "spin"], [1, "form-main"], [1, "card"], [1, "card-header"], [1, "btn-add-line"], [1, "lines-container"], [1, "empty-lines"], [1, "lines-table"], [1, "form-side"], [1, "card-body"], [1, "form-group"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "req"], [1, "form-control", 3, "ngModel"], [1, "form-value", "loc-value"], [1, "transfer-arrow"], [1, "card", 2, "margin-top", "12px"], ["type", "date", 1, "form-control", 3, "ngModel"], [1, "form-value"], ["type", "text", "placeholder", "Ex: ordre de transfert", 1, "form-control", 3, "ngModel"], ["rows", "2", 1, "form-control", 3, "ngModel"], [1, "btn-add-line", 3, "click"], [2, "width", "36%"], [1, "line-select", 3, "ngModel"], [1, "font-bold"], ["type", "number", "min", "0", 1, "line-input", 3, "ngModel"], [1, "cell-right"], [1, "cell-right", "font-bold"], [1, "line-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "number", "min", "0", 1, "line-input", 3, "ngModelChange", "ngModel"], [1, "btn-remove-line", 3, "click"], ["colspan", "5", 1, "total-label"], [1, "cell-right", "total-value"], ["colspan", "2"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ex: ordre de transfert", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function TransfertDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        \u0275\u0275listener("click", function TransfertDetailComponent_Template_button_click_3_listener() {
          return ctx.router.navigate(["/stock/transferts"]);
        });
        \u0275\u0275elementStart(4, "span", 4);
        \u0275\u0275text(5, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div")(7, "h1", 5)(8, "span", 4);
        \u0275\u0275text(9, "compare_arrows");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, TransfertDetailComponent_Conditional_11_Template, 2, 2, "span", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 7);
        \u0275\u0275conditionalCreate(13, TransfertDetailComponent_Conditional_13_Template, 4, 2, "button", 8);
        \u0275\u0275conditionalCreate(14, TransfertDetailComponent_Conditional_14_Template, 7, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(15, TransfertDetailComponent_Conditional_15_Template, 4, 1, "div", 9);
        \u0275\u0275conditionalCreate(16, TransfertDetailComponent_Conditional_16_Template, 10, 5, "div", 10);
        \u0275\u0275conditionalCreate(17, TransfertDetailComponent_Conditional_17_Template, 3, 0, "div", 11)(18, TransfertDetailComponent_Conditional_18_Template, 72, 13, "div", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", ctx.isNew ? "Nouveau transfert inter-d\xE9p\xF4t" : (ctx.picking == null ? null : ctx.picking.name) || "Transfert", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.isNew && ctx.picking ? 11 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.isDone && !ctx.isCancelled ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.isNew && !ctx.isDone && !ctx.isCancelled ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isDone && (ctx.picking == null ? null : ctx.picking.accountMoveName) ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 17 : 18);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #6f42c1;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 6px;\n  color: #6c757d;\n  display: flex;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.state-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.state-badge[data-state=draft][_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.state-badge[data-state=done][_ngcontent-%COMP%] {\n  background: #ede7f6;\n  color: #4527a0;\n}\n.state-badge[data-state=cancelled][_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: white;\n  color: #6f42c1;\n  border: 1px solid #6f42c1;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #6f42c1;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-validate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5a32a3;\n}\n.btn-cancel-picking[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px;\n  background: white;\n  color: #dc3545;\n  border: 1px solid #dc3545;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  font-size: 13px;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #ede7f6;\n  border-radius: 6px;\n  margin-bottom: 14px;\n  font-size: 13px;\n  color: #4527a0;\n  border: 1px solid #d1c4e9;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 16px;\n  align-items: start;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n}\n.btn-add-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #6f42c1;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.lines-container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.empty-lines[_ngcontent-%COMP%] {\n  padding: 30px;\n  text-align: center;\n  color: #adb5bd;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table.has-lines[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border-bottom: 1px solid #f5f5f5;\n  font-size: 13px;\n  vertical-align: middle;\n}\n.lines-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-top: 2px solid #e9ecef;\n  background: #fafafa;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.cell-right[_ngcontent-%COMP%] {\n  text-align: right;\n  display: block;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.total-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n}\n.total-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  font-family: monospace;\n  text-align: right;\n}\n.line-select[_ngcontent-%COMP%], \n.line-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 8px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.line-select[_ngcontent-%COMP%]:focus, \n.line-input[_ngcontent-%COMP%]:focus {\n  border-color: #6f42c1;\n}\n.btn-remove-line[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #adb5bd;\n  cursor: pointer;\n  padding: 3px;\n  border-radius: 4px;\n}\n.btn-remove-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-remove-line[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.qty-ok[_ngcontent-%COMP%] {\n  color: #198754;\n  font-weight: 600;\n  font-size: 12px;\n}\n.qty-warn[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 600;\n  font-size: 12px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 4px;\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #6f42c1;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.form-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #212529;\n  padding: 4px 0;\n}\n.loc-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.loc-value[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6f42c1;\n}\n.transfer-arrow[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4px 0;\n  color: #6f42c1;\n}\n.transfer-arrow[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n/*# sourceMappingURL=transfert-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransfertDetailComponent, [{
    type: Component,
    args: [{ selector: "app-transfert-detail", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div class="header-left">
      <button class="btn-back" (click)="router.navigate(['/stock/transferts'])"><span class="material-icons">arrow_back</span></button>
      <div>
        <h1 class="page-title">
          <span class="material-icons">compare_arrows</span>
          {{ isNew ? 'Nouveau transfert inter-d\xE9p\xF4t' : (picking?.name || 'Transfert') }}
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
          <span class="material-icons">compare_arrows</span> {{ validating ? 'Transfert en cours...' : 'Valider le transfert' }}
        </button>
        <button class="btn-cancel-picking" (click)="cancel()" [disabled]="cancelling">
          <span class="material-icons">cancel</span>
        </button>
      }
    </div>
  </div>

  @if (errorMsg) { <div class="alert alert-danger"><span class="material-icons">error</span> {{ errorMsg }}</div> }

  @if (isDone && picking?.accountMoveName) {
    <div class="info-banner">
      <span class="material-icons">swap_horiz</span>
      Transfert valoris\xE9 \u2014 \xE9criture comptable : <strong>{{ picking!.accountMoveName }}</strong>
      \xB7 Valeur : <strong>{{ picking!.totalValue | number:'1.0-0' }} FCFA</strong>
    </div>
  }

  @if (loading) { <div class="loading"><span class="material-icons spin">refresh</span></div> }
  @else {
    <div class="form-layout">
      <div class="form-main">
        <div class="card">
          <div class="card-header">
            <span>Articles \xE0 transf\xE9rer</span>
            @if (isDraft) {
              <button class="btn-add-line" (click)="addLine()"><span class="material-icons">add</span> Ajouter</button>
            }
          </div>
          <div class="lines-container">
            @if (lines.length === 0) { <div class="empty-lines">Aucune ligne \u2014 ajoutez des articles \xE0 transf\xE9rer</div> }
            <table class="lines-table" [class.has-lines]="lines.length > 0">
              @if (lines.length > 0) {
                <thead><tr>
                  <th style="width:36%">Article</th><th>Unit\xE9</th>
                  <th>Qt\xE9 demand.</th><th>Qt\xE9 transf\xE9r\xE9e</th>
                  <th>CMUP</th><th>Valeur</th><th>Dispo source</th>
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
                    <td>{{ line.uomName }}</td>
                    <td>
                      @if (isDraft) { <input type="number" class="line-input" [(ngModel)]="line.qtyDemanded" min="0" (ngModelChange)="line.qtyDone = line.qtyDemanded" /> }
                      @else { <span class="cell-right">{{ line.qtyDemanded }}</span> }
                    </td>
                    <td>
                      @if (!isDone) { <input type="number" class="line-input" [(ngModel)]="line.qtyDone" min="0" /> }
                      @else { <span class="cell-right font-bold">{{ line.qtyDone }}</span> }
                    </td>
                    <td class="cell-right">{{ line.priceUnit | number:'1.0-0' }}</td>
                    <td class="cell-right font-bold">{{ line.qtyDone * line.priceUnit | number:'1.0-0' }}</td>
                    <td>
                      <span [class]="line.availableQty < line.qtyDemanded ? 'qty-warn' : 'qty-ok'">
                        {{ line.availableQty | number:'1.0-2' }}
                      </span>
                    </td>
                    @if (isDraft) { <td><button class="btn-remove-line" (click)="removeLine(i)"><span class="material-icons">delete</span></button></td> }
                  </tr>
                }
              </tbody>
              @if (lines.length > 0) {
                <tfoot><tr>
                  <td colspan="5" class="total-label">VALEUR TOTALE TRANSF\xC9R\xC9E</td>
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
          <div class="card-header">Emplacements</div>
          <div class="card-body">
            <div class="form-group">
              <label>Entrep\xF4t source</label>
              <select class="form-control" [(ngModel)]="filterSrcWarehouse">
                <option value="">\u2014 Tous les entrep\xF4ts \u2014</option>
                @for (w of warehouses; track w.id) { <option [value]="w.id">{{ w.name }}</option> }
              </select>
            </div>
            <div class="form-group">
              <label>Emplacement source <span class="req">*</span></label>
              @if (isDraft) {
                <select class="form-control" [(ngModel)]="selectedSrcId">
                  <option value="">\u2014 Choisir \u2014</option>
                  @for (l of filteredSrcLocations; track l.id) { <option [value]="l.id">{{ l.completeName || l.name }}</option> }
                </select>
              } @else { <div class="form-value loc-value"><span class="material-icons">place</span>{{ locationName(picking?.locationId!) }}</div> }
            </div>
            <div class="transfer-arrow"><span class="material-icons">south</span></div>
            <div class="form-group">
              <label>Entrep\xF4t destination</label>
              <select class="form-control" [(ngModel)]="filterDestWarehouse">
                <option value="">\u2014 Tous les entrep\xF4ts \u2014</option>
                @for (w of warehouses; track w.id) { <option [value]="w.id">{{ w.name }}</option> }
              </select>
            </div>
            <div class="form-group">
              <label>Emplacement destination <span class="req">*</span></label>
              @if (isDraft) {
                <select class="form-control" [(ngModel)]="selectedDestId">
                  <option value="">\u2014 Choisir \u2014</option>
                  @for (l of filteredDestLocations; track l.id) { <option [value]="l.id">{{ l.completeName || l.name }}</option> }
                </select>
              } @else { <div class="form-value loc-value"><span class="material-icons">place</span>{{ locationName(picking?.locationDestId!) }}</div> }
            </div>
          </div>
        </div>

        <div class="card" style="margin-top: 12px">
          <div class="card-header">D\xE9tails</div>
          <div class="card-body">
            <div class="form-group">
              <label>Date planifi\xE9e</label>
              @if (isDraft) { <input type="date" class="form-control" [(ngModel)]="scheduledDate" /> }
              @else { <div class="form-value">{{ scheduledDate | date:'dd/MM/yyyy' }}</div> }
            </div>
            <div class="form-group">
              <label>Origine</label>
              @if (isDraft) { <input type="text" class="form-control" [(ngModel)]="origin" placeholder="Ex: ordre de transfert" /> }
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
`, styles: ['/* src/app/modules/stock/components/transferts/transfert-detail.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: #6f42c1;\n}\n.page-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-back {\n  background: none;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 6px;\n  color: #6c757d;\n  display: flex;\n}\n.btn-back:hover {\n  background: #f0f0f0;\n}\n.state-badge {\n  display: inline-block;\n  padding: 3px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.state-badge[data-state=draft] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.state-badge[data-state=done] {\n  background: #ede7f6;\n  color: #4527a0;\n}\n.state-badge[data-state=cancelled] {\n  background: #fde8e8;\n  color: #721c24;\n}\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: white;\n  color: #6f42c1;\n  border: 1px solid #6f42c1;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #6f42c1;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-validate:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate:hover:not(:disabled) {\n  background: #5a32a3;\n}\n.btn-cancel-picking {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px;\n  background: white;\n  color: #dc3545;\n  border: 1px solid #dc3545;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  font-size: 13px;\n}\n.alert.alert-danger {\n  background: #fde8e8;\n  color: #721c24;\n}\n.info-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #ede7f6;\n  border-radius: 6px;\n  margin-bottom: 14px;\n  font-size: 13px;\n  color: #4527a0;\n  border: 1px solid #d1c4e9;\n}\n.loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-layout {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 16px;\n  align-items: start;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.card .card-body {\n  padding: 16px 18px;\n}\n.btn-add-line {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #6f42c1;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.lines-container {\n  padding: 0;\n}\n.empty-lines {\n  padding: 30px;\n  text-align: center;\n  color: #adb5bd;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table.has-lines thead th {\n  padding: 8px 10px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.lines-table td {\n  padding: 6px 8px;\n  border-bottom: 1px solid #f5f5f5;\n  font-size: 13px;\n  vertical-align: middle;\n}\n.lines-table tfoot td {\n  padding: 10px;\n  border-top: 2px solid #e9ecef;\n  background: #fafafa;\n}\n.lines-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.cell-right {\n  text-align: right;\n  display: block;\n}\n.font-bold {\n  font-weight: 600;\n}\n.total-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n}\n.total-value {\n  font-size: 14px;\n  font-weight: 700;\n  font-family: monospace;\n  text-align: right;\n}\n.line-select,\n.line-input {\n  width: 100%;\n  padding: 5px 8px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.line-select:focus,\n.line-input:focus {\n  border-color: #6f42c1;\n}\n.btn-remove-line {\n  background: none;\n  border: none;\n  color: #adb5bd;\n  cursor: pointer;\n  padding: 3px;\n  border-radius: 4px;\n}\n.btn-remove-line .material-icons {\n  font-size: 16px;\n}\n.btn-remove-line:hover {\n  color: #dc3545;\n}\n.qty-ok {\n  color: #198754;\n  font-weight: 600;\n  font-size: 12px;\n}\n.qty-warn {\n  color: #dc3545;\n  font-weight: 600;\n  font-size: 12px;\n}\n.form-group {\n  margin-bottom: 12px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 4px;\n}\n.form-group .req {\n  color: #dc3545;\n}\n.form-control {\n  width: 100%;\n  padding: 7px 10px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  border-color: #6f42c1;\n}\ntextarea.form-control {\n  resize: vertical;\n}\n.form-value {\n  font-size: 13px;\n  color: #212529;\n  padding: 4px 0;\n}\n.loc-value {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.loc-value .material-icons {\n  font-size: 14px;\n  color: #6f42c1;\n}\n.transfer-arrow {\n  text-align: center;\n  padding: 4px 0;\n  color: #6f42c1;\n}\n.transfer-arrow .material-icons {\n  font-size: 24px;\n}\n/*# sourceMappingURL=transfert-detail.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: StockService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransfertDetailComponent, { className: "TransfertDetailComponent", filePath: "src/app/modules/stock/components/transferts/transfert-detail.component.ts", lineNumber: 16 });
})();
export {
  TransfertDetailComponent
};
//# sourceMappingURL=chunk-ITKPBBF3.js.map
