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

// src/app/modules/stock/components/receptions/reception-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ReceptionDetailComponent_Conditional_11_Template(rf, ctx) {
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
function ReceptionDetailComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ReceptionDetailComponent_Conditional_13_Template_button_click_0_listener() {
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
function ReceptionDetailComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function ReceptionDetailComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.validate());
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 14);
    \u0275\u0275listener("click", function ReceptionDetailComponent_Conditional_14_Template_button_click_4_listener() {
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
    \u0275\u0275textInterpolate1(" ", ctx_r0.validating ? "Validation..." : "Valider la r\xE9ception", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.cancelling);
  }
}
function ReceptionDetailComponent_Conditional_15_Template(rf, ctx) {
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
function ReceptionDetailComponent_Conditional_16_Template(rf, ctx) {
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
function ReceptionDetailComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 15);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function ReceptionDetailComponent_Conditional_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 4);
    \u0275\u0275text(2, "book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \xC9criture comptable g\xE9n\xE9r\xE9e : ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \xB7 Valeur totale : ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.picking.accountMoveName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 2, ctx_r0.picking.totalValue, "1.0-0"), " FCFA");
  }
}
function ReceptionDetailComponent_Conditional_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function ReceptionDetailComponent_Conditional_18_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addLine());
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ajouter un article ");
    \u0275\u0275elementEnd();
  }
}
function ReceptionDetailComponent_Conditional_18_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, 'Aucune ligne \u2014 cliquez sur "Ajouter un article"');
    \u0275\u0275elementEnd();
  }
}
function ReceptionDetailComponent_Conditional_18_Conditional_11_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 38);
  }
}
function ReceptionDetailComponent_Conditional_18_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead")(1, "tr")(2, "th", 35);
    \u0275\u0275text(3, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 36);
    \u0275\u0275text(5, "Unit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 36);
    \u0275\u0275text(7, "Qt\xE9 demand\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 36);
    \u0275\u0275text(9, "Qt\xE9 re\xE7ue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 37);
    \u0275\u0275text(11, "Prix unitaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 36);
    \u0275\u0275text(13, "Sous-total");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, ReceptionDetailComponent_Conditional_18_Conditional_11_Conditional_14_Template, 1, 0, "th", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r0.isDraft ? 14 : -1);
  }
}
function ReceptionDetailComponent_Conditional_18_For_14_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
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
function ReceptionDetailComponent_Conditional_18_For_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionDetailComponent_Conditional_18_For_14_Conditional_2_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const line_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r6.productId, $event) || (line_r6.productId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReceptionDetailComponent_Conditional_18_For_14_Conditional_2_Template_select_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r5);
      const \u0275$index_136_r7 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onProductChange(\u0275$index_136_r7));
    });
    \u0275\u0275elementStart(1, "option", 46);
    \u0275\u0275text(2, "\u2014 Choisir \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ReceptionDetailComponent_Conditional_18_For_14_Conditional_2_For_4_Template, 2, 3, "option", 47, _forTrack0);
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
function ReceptionDetailComponent_Conditional_18_For_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
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
function ReceptionDetailComponent_Conditional_18_For_14_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionDetailComponent_Conditional_18_For_14_Conditional_5_Template_input_ngModelChange_0_listener($event) {
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
function ReceptionDetailComponent_Conditional_18_For_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const line_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", line_r6.uomName, " ");
  }
}
function ReceptionDetailComponent_Conditional_18_For_14_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionDetailComponent_Conditional_18_For_14_Conditional_8_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const line_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r6.qtyDemanded, $event) || (line_r6.qtyDemanded = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReceptionDetailComponent_Conditional_18_For_14_Conditional_8_Template_input_ngModelChange_0_listener() {
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
function ReceptionDetailComponent_Conditional_18_For_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r6.qtyDemanded);
  }
}
function ReceptionDetailComponent_Conditional_18_For_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionDetailComponent_Conditional_18_For_14_Conditional_11_Template_input_ngModelChange_0_listener($event) {
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
function ReceptionDetailComponent_Conditional_18_For_14_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r6.qtyDone);
  }
}
function ReceptionDetailComponent_Conditional_18_For_14_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionDetailComponent_Conditional_18_For_14_Conditional_14_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const line_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r6.priceUnit, $event) || (line_r6.priceUnit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", line_r6.priceUnit);
  }
}
function ReceptionDetailComponent_Conditional_18_For_14_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, line_r6.priceUnit, "1.0-0"));
  }
}
function ReceptionDetailComponent_Conditional_18_For_14_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "button", 50);
    \u0275\u0275listener("click", function ReceptionDetailComponent_Conditional_18_For_14_Conditional_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const \u0275$index_136_r7 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeLine(\u0275$index_136_r7));
    });
    \u0275\u0275elementStart(2, "span", 4);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function ReceptionDetailComponent_Conditional_18_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, ReceptionDetailComponent_Conditional_18_For_14_Conditional_2_Template, 5, 2, "select", 39)(3, ReceptionDetailComponent_Conditional_18_For_14_Conditional_3_Template, 2, 1, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275conditionalCreate(5, ReceptionDetailComponent_Conditional_18_For_14_Conditional_5_Template, 1, 1, "input", 41)(6, ReceptionDetailComponent_Conditional_18_For_14_Conditional_6_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275conditionalCreate(8, ReceptionDetailComponent_Conditional_18_For_14_Conditional_8_Template, 1, 1, "input", 42)(9, ReceptionDetailComponent_Conditional_18_For_14_Conditional_9_Template, 2, 1, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275conditionalCreate(11, ReceptionDetailComponent_Conditional_18_For_14_Conditional_11_Template, 1, 1, "input", 42)(12, ReceptionDetailComponent_Conditional_18_For_14_Conditional_12_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275conditionalCreate(14, ReceptionDetailComponent_Conditional_18_For_14_Conditional_14_Template, 1, 1, "input", 42)(15, ReceptionDetailComponent_Conditional_18_For_14_Conditional_15_Template, 3, 4, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 44);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, ReceptionDetailComponent_Conditional_18_For_14_Conditional_19_Template, 4, 0, "td");
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
    \u0275\u0275conditional(ctx_r0.isDraft ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 7, line_r6.qtyDone * line_r6.priceUnit, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isDraft ? 19 : -1);
  }
}
function ReceptionDetailComponent_Conditional_18_Conditional_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function ReceptionDetailComponent_Conditional_18_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tfoot")(1, "tr")(2, "td", 51);
    \u0275\u0275text(3, "TOTAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 52);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ReceptionDetailComponent_Conditional_18_Conditional_15_Conditional_7_Template, 1, 0, "td");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 2, ctx_r0.lineTotal, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isDraft ? 7 : -1);
  }
}
function ReceptionDetailComponent_Conditional_18_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r15 = ctx.$implicit;
    \u0275\u0275property("value", t_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r15.name);
  }
}
function ReceptionDetailComponent_Conditional_18_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 53);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionDetailComponent_Conditional_18_Conditional_24_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedTypeId, $event) || (ctx_r0.selectedTypeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(1, ReceptionDetailComponent_Conditional_18_Conditional_24_For_2_Template, 2, 2, "option", 47, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedTypeId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.pickingTypes);
  }
}
function ReceptionDetailComponent_Conditional_18_Conditional_25_Template(rf, ctx) {
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
function ReceptionDetailComponent_Conditional_18_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r17 = ctx.$implicit;
    \u0275\u0275property("value", l_r17.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r17.completeName || l_r17.name);
  }
}
function ReceptionDetailComponent_Conditional_18_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 53);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionDetailComponent_Conditional_18_Conditional_29_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedSrcId, $event) || (ctx_r0.selectedSrcId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(1, ReceptionDetailComponent_Conditional_18_Conditional_29_For_2_Template, 2, 2, "option", 47, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedSrcId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.locations);
  }
}
function ReceptionDetailComponent_Conditional_18_Conditional_30_Template(rf, ctx) {
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
function ReceptionDetailComponent_Conditional_18_Conditional_34_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r19 = ctx.$implicit;
    \u0275\u0275property("value", l_r19.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r19.completeName || l_r19.name);
  }
}
function ReceptionDetailComponent_Conditional_18_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 53);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionDetailComponent_Conditional_18_Conditional_34_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedDestId, $event) || (ctx_r0.selectedDestId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(1, ReceptionDetailComponent_Conditional_18_Conditional_34_For_2_Template, 2, 2, "option", 47, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedDestId);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.locations);
  }
}
function ReceptionDetailComponent_Conditional_18_Conditional_35_Template(rf, ctx) {
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
function ReceptionDetailComponent_Conditional_18_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionDetailComponent_Conditional_18_Conditional_39_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r20);
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
function ReceptionDetailComponent_Conditional_18_Conditional_40_Template(rf, ctx) {
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
function ReceptionDetailComponent_Conditional_18_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionDetailComponent_Conditional_18_Conditional_44_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r21);
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
function ReceptionDetailComponent_Conditional_18_Conditional_45_Template(rf, ctx) {
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
function ReceptionDetailComponent_Conditional_18_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionDetailComponent_Conditional_18_Conditional_49_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r22);
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
function ReceptionDetailComponent_Conditional_18_Conditional_50_Template(rf, ctx) {
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
function ReceptionDetailComponent_Conditional_18_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionDetailComponent_Conditional_18_Conditional_54_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r23);
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
function ReceptionDetailComponent_Conditional_18_Conditional_55_Template(rf, ctx) {
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
function ReceptionDetailComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ReceptionDetailComponent_Conditional_18_Conditional_0_Template, 10, 5, "div", 16);
    \u0275\u0275elementStart(1, "div", 17)(2, "div", 18)(3, "div", 19)(4, "div", 20)(5, "span");
    \u0275\u0275text(6, "Lignes de r\xE9ception");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ReceptionDetailComponent_Conditional_18_Conditional_7_Template, 4, 0, "button", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 22);
    \u0275\u0275conditionalCreate(9, ReceptionDetailComponent_Conditional_18_Conditional_9_Template, 2, 0, "div", 23);
    \u0275\u0275elementStart(10, "table", 24);
    \u0275\u0275conditionalCreate(11, ReceptionDetailComponent_Conditional_18_Conditional_11_Template, 15, 1, "thead");
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, ReceptionDetailComponent_Conditional_18_For_14_Template, 20, 10, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, ReceptionDetailComponent_Conditional_18_Conditional_15_Template, 8, 5, "tfoot");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 25)(17, "div", 19)(18, "div", 20);
    \u0275\u0275text(19, "Informations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 26)(21, "div", 27)(22, "label");
    \u0275\u0275text(23, "Type d'op\xE9ration");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, ReceptionDetailComponent_Conditional_18_Conditional_24_Template, 3, 1, "select", 28)(25, ReceptionDetailComponent_Conditional_18_Conditional_25_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 27)(27, "label");
    \u0275\u0275text(28, "Emplacement source");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, ReceptionDetailComponent_Conditional_18_Conditional_29_Template, 3, 1, "select", 28)(30, ReceptionDetailComponent_Conditional_18_Conditional_30_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 27)(32, "label");
    \u0275\u0275text(33, "Emplacement destination");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(34, ReceptionDetailComponent_Conditional_18_Conditional_34_Template, 3, 1, "select", 28)(35, ReceptionDetailComponent_Conditional_18_Conditional_35_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 27)(37, "label");
    \u0275\u0275text(38, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(39, ReceptionDetailComponent_Conditional_18_Conditional_39_Template, 1, 1, "input", 30)(40, ReceptionDetailComponent_Conditional_18_Conditional_40_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 27)(42, "label");
    \u0275\u0275text(43, "Date planifi\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(44, ReceptionDetailComponent_Conditional_18_Conditional_44_Template, 1, 1, "input", 31)(45, ReceptionDetailComponent_Conditional_18_Conditional_45_Template, 3, 4, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 27)(47, "label");
    \u0275\u0275text(48, "Origine (BC, PO...)");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(49, ReceptionDetailComponent_Conditional_18_Conditional_49_Template, 1, 1, "input", 32)(50, ReceptionDetailComponent_Conditional_18_Conditional_50_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 27)(52, "label");
    \u0275\u0275text(53, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(54, ReceptionDetailComponent_Conditional_18_Conditional_54_Template, 1, 1, "textarea", 33)(55, ReceptionDetailComponent_Conditional_18_Conditional_55_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.isDone && (ctx_r0.picking == null ? null : ctx_r0.picking.accountMoveName) ? 0 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.isDraft ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.lines.length === 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-lines", ctx_r0.lines.length > 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.lines.length > 0 ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.lines);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.lines.length > 0 ? 15 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.isDraft ? 24 : 25);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDraft ? 29 : 30);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDraft ? 34 : 35);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDraft ? 39 : 40);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDraft ? 44 : 45);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDraft ? 49 : 50);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDraft ? 54 : 55);
  }
}
var ReceptionDetailComponent = class _ReceptionDetailComponent {
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
      this.pickingTypes = types.filter((t) => t.code === "incoming");
      this.locations = locations;
      this.products = products.filter((p) => p.type === "product" || p.type === "consu");
      if (this.isNew) {
        const defaultType = this.pickingTypes[0];
        if (defaultType) {
          this.selectedTypeId = defaultType.id;
          this.selectedSrcId = defaultType.defaultLocationSrcId;
          this.selectedDestId = defaultType.defaultLocationDestId;
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
          uomName: m.uomName || ""
        }));
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  addLine() {
    this.lines.push({ productId: null, qtyDemanded: 1, qtyDone: 1, priceUnit: 0, uomName: "" });
  }
  removeLine(i) {
    this.lines.splice(i, 1);
  }
  onProductChange(i) {
    const pid = this.lines[i].productId;
    const prod = this.products.find((p) => p.id === Number(pid));
    if (prod) {
      this.lines[i].uomName = prod.uomName || "";
      this.lines[i].priceUnit = prod.standardPrice || 0;
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
  save() {
    if (!this.selectedTypeId || this.lines.length === 0) {
      this.errorMsg = "S\xE9lectionner un type et ajouter au moins une ligne";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const req = {
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
    const obs = this.isNew ? this.stockService.createPicking(req) : this.stockService.updatePicking(this.picking.id, req);
    obs.subscribe({
      next: (p) => {
        this.saving = false;
        if (this.isNew) {
          this.router.navigate(["/stock/receptions", p.id]);
        } else {
          this.picking = p;
          this.successMsg = "Enregistr\xE9 avec succ\xE8s";
          setTimeout(() => this.successMsg = "", 3e3);
        }
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
    const req = {
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
    this.stockService.updatePicking(this.picking.id, req).subscribe({
      next: () => {
        this.stockService.validatePicking(this.picking.id).subscribe({
          next: (p) => {
            this.validating = false;
            this.picking = p;
            this.loadPicking(p.id);
          },
          error: (e) => {
            this.validating = false;
            this.errorMsg = e.error?.message || "Erreur validation";
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
    if (!this.picking || !confirm("Annuler cette r\xE9ception ?"))
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
  get lineTotal() {
    return this.lines.reduce((s, l) => s + l.qtyDone * l.priceUnit, 0);
  }
  productName(id) {
    return this.products.find((p) => p.id === Number(id))?.name || "";
  }
  locationName(id) {
    return this.locations.find((l) => l.id === Number(id))?.completeName || this.locations.find((l) => l.id === Number(id))?.name || "";
  }
  stateLabel(s) {
    return { draft: "Brouillon", confirmed: "Confirm\xE9", done: "Valid\xE9", cancelled: "Annul\xE9" }[s] || s;
  }
  static {
    this.\u0275fac = function ReceptionDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReceptionDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReceptionDetailComponent, selectors: [["app-reception-detail"]], decls: 19, vars: 7, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "page-title"], [1, "state-badge"], [1, "header-actions"], [1, "btn-secondary", 3, "disabled"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [1, "loading"], [1, "btn-secondary", 3, "click", "disabled"], [1, "btn-validate", 3, "click", "disabled"], [1, "btn-cancel-picking", 3, "click", "disabled"], [1, "material-icons", "spin"], [1, "info-banner"], [1, "form-layout"], [1, "form-main"], [1, "card"], [1, "card-header"], [1, "btn-add-line"], [1, "lines-container"], [1, "empty-lines"], [1, "lines-table"], [1, "form-side"], [1, "card-body"], [1, "form-group"], [1, "form-control", 3, "ngModel"], [1, "form-value"], ["type", "text", "placeholder", "Nom du fournisseur", 1, "form-control", 3, "ngModel"], ["type", "date", 1, "form-control", 3, "ngModel"], ["type", "text", "placeholder", "Ex: BC-2026-00001", 1, "form-control", 3, "ngModel"], ["rows", "2", 1, "form-control", 3, "ngModel"], [1, "btn-add-line", 3, "click"], [2, "width", "35%"], [2, "width", "12%"], [2, "width", "14%"], [2, "width", "3%"], [1, "line-select", 3, "ngModel"], [1, "font-bold"], ["type", "text", "placeholder", "Unit\xE9", 1, "line-input", 3, "ngModel"], ["type", "number", "min", "0", 1, "line-input", "text-right", 3, "ngModel"], [1, "text-right-cell"], [1, "text-right-cell", "font-bold"], [1, "line-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "value"], ["type", "text", "placeholder", "Unit\xE9", 1, "line-input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "line-input", "text-right", 3, "ngModelChange", "ngModel"], ["title", "Supprimer", 1, "btn-remove-line", 3, "click"], ["colspan", "5", 1, "total-label"], [1, "text-right-cell", "total-value"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Nom du fournisseur", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ex: BC-2026-00001", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function ReceptionDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        \u0275\u0275listener("click", function ReceptionDetailComponent_Template_button_click_3_listener() {
          return ctx.router.navigate(["/stock/receptions"]);
        });
        \u0275\u0275elementStart(4, "span", 4);
        \u0275\u0275text(5, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div")(7, "h1", 5)(8, "span", 4);
        \u0275\u0275text(9, "move_to_inbox");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, ReceptionDetailComponent_Conditional_11_Template, 2, 2, "span", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 7);
        \u0275\u0275conditionalCreate(13, ReceptionDetailComponent_Conditional_13_Template, 4, 2, "button", 8);
        \u0275\u0275conditionalCreate(14, ReceptionDetailComponent_Conditional_14_Template, 7, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(15, ReceptionDetailComponent_Conditional_15_Template, 4, 1, "div", 9);
        \u0275\u0275conditionalCreate(16, ReceptionDetailComponent_Conditional_16_Template, 4, 1, "div", 10);
        \u0275\u0275conditionalCreate(17, ReceptionDetailComponent_Conditional_17_Template, 4, 0, "div", 11)(18, ReceptionDetailComponent_Conditional_18_Template, 56, 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", ctx.isNew ? "Nouvelle r\xE9ception" : (ctx.picking == null ? null : ctx.picking.name) || "R\xE9ception", " ");
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
        \u0275\u0275conditional(ctx.loading ? 17 : 18);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #fd7e14;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 6px;\n  color: #6c757d;\n  display: flex;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.state-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.state-badge[data-state=draft][_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.state-badge[data-state=done][_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.state-badge[data-state=cancelled][_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: white;\n  color: #2c7be5;\n  border: 1px solid #2c7be5;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #198754;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-validate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-validate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #146c43;\n}\n.btn-cancel-picking[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px;\n  background: white;\n  color: #dc3545;\n  border: 1px solid #dc3545;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.btn-cancel-picking[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-cancel-picking[_ngcontent-%COMP%]:hover {\n  background: #fde8e8;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  font-size: 13px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #e8f0fb;\n  border-radius: 6px;\n  margin-bottom: 14px;\n  font-size: 13px;\n  color: #1a68d1;\n  border: 1px solid #bee3f8;\n}\n.info-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 16px;\n  align-items: start;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n}\n.btn-add-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #2c7be5;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-add-line[_ngcontent-%COMP%]:hover {\n  background: #1a68d1;\n}\n.lines-container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.empty-lines[_ngcontent-%COMP%] {\n  padding: 30px;\n  text-align: center;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table.has-lines[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border-bottom: 1px solid #f5f5f5;\n  font-size: 13px;\n  vertical-align: middle;\n}\n.lines-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-top: 2px solid #e9ecef;\n  background: #fafafa;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right-cell[_ngcontent-%COMP%] {\n  text-align: right;\n  display: block;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.total-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n}\n.total-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #212529;\n  font-family: monospace;\n  text-align: right;\n}\n.line-select[_ngcontent-%COMP%], \n.line-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 8px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: white;\n}\n.line-select[_ngcontent-%COMP%]:focus, \n.line-input[_ngcontent-%COMP%]:focus {\n  border-color: #2c7be5;\n}\n.line-select.text-right[_ngcontent-%COMP%], \n.line-input.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.btn-remove-line[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #adb5bd;\n  cursor: pointer;\n  padding: 3px;\n  border-radius: 4px;\n}\n.btn-remove-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-remove-line[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n  background: #fde8e8;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 4px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #2c7be5;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.form-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #212529;\n  padding: 4px 0;\n}\n/*# sourceMappingURL=reception-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReceptionDetailComponent, [{
    type: Component,
    args: [{ selector: "app-reception-detail", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div class="header-left">
      <button class="btn-back" (click)="router.navigate(['/stock/receptions'])">
        <span class="material-icons">arrow_back</span>
      </button>
      <div>
        <h1 class="page-title">
          <span class="material-icons">move_to_inbox</span>
          {{ isNew ? 'Nouvelle r\xE9ception' : (picking?.name || 'R\xE9ception') }}
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
          <span class="material-icons">check_circle</span> {{ validating ? 'Validation...' : 'Valider la r\xE9ception' }}
        </button>
        <button class="btn-cancel-picking" (click)="cancel()" [disabled]="cancelling">
          <span class="material-icons">cancel</span>
        </button>
      }
    </div>
  </div>

  @if (errorMsg) { <div class="alert alert-danger"><span class="material-icons">error</span> {{ errorMsg }}</div> }
  @if (successMsg) { <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div> }

  @if (loading) {
    <div class="loading"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else {
    <!-- Info comptable si valid\xE9 -->
    @if (isDone && picking?.accountMoveName) {
      <div class="info-banner">
        <span class="material-icons">book</span>
        \xC9criture comptable g\xE9n\xE9r\xE9e : <strong>{{ picking!.accountMoveName }}</strong>
        \xB7 Valeur totale : <strong>{{ picking!.totalValue | number:'1.0-0' }} FCFA</strong>
      </div>
    }

    <div class="form-layout">
      <!-- Colonne principale : lignes -->
      <div class="form-main">
        <div class="card">
          <div class="card-header">
            <span>Lignes de r\xE9ception</span>
            @if (isDraft) {
              <button class="btn-add-line" (click)="addLine()">
                <span class="material-icons">add</span> Ajouter un article
              </button>
            }
          </div>
          <div class="lines-container">
            @if (lines.length === 0) {
              <div class="empty-lines">Aucune ligne \u2014 cliquez sur "Ajouter un article"</div>
            }
            <table class="lines-table" [class.has-lines]="lines.length > 0">
              @if (lines.length > 0) {
                <thead>
                  <tr>
                    <th style="width:35%">Article</th>
                    <th style="width:12%">Unit\xE9</th>
                    <th style="width:12%">Qt\xE9 demand\xE9e</th>
                    <th style="width:12%">Qt\xE9 re\xE7ue</th>
                    <th style="width:14%">Prix unitaire</th>
                    <th style="width:12%">Sous-total</th>
                    @if (isDraft) { <th style="width:3%"></th> }
                  </tr>
                </thead>
              }
              <tbody>
                @for (line of lines; track $index; let i = $index) {
                  <tr>
                    <td>
                      @if (isDraft) {
                        <select class="line-select" [(ngModel)]="line.productId" (ngModelChange)="onProductChange(i)">
                          <option [ngValue]="null">\u2014 Choisir \u2014</option>
                          @for (p of products; track p.id) {
                            <option [value]="p.id">{{ p.defaultCode ? '[' + p.defaultCode + '] ' : '' }}{{ p.name }}</option>
                          }
                        </select>
                      } @else {
                        <span class="font-bold">{{ productName(line.productId) }}</span>
                      }
                    </td>
                    <td>
                      @if (isDraft) {
                        <input type="text" class="line-input" [(ngModel)]="line.uomName" placeholder="Unit\xE9" />
                      } @else { {{ line.uomName }} }
                    </td>
                    <td>
                      @if (isDraft) {
                        <input type="number" class="line-input text-right" [(ngModel)]="line.qtyDemanded" min="0" (ngModelChange)="line.qtyDone = line.qtyDemanded" />
                      } @else { <span class="text-right-cell">{{ line.qtyDemanded }}</span> }
                    </td>
                    <td>
                      @if (!isDone) {
                        <input type="number" class="line-input text-right" [(ngModel)]="line.qtyDone" min="0" />
                      } @else { <span class="text-right-cell font-bold">{{ line.qtyDone }}</span> }
                    </td>
                    <td>
                      @if (isDraft) {
                        <input type="number" class="line-input text-right" [(ngModel)]="line.priceUnit" min="0" />
                      } @else { <span class="text-right-cell">{{ line.priceUnit | number:'1.0-0' }}</span> }
                    </td>
                    <td class="text-right-cell font-bold">{{ line.qtyDone * line.priceUnit | number:'1.0-0' }}</td>
                    @if (isDraft) {
                      <td>
                        <button class="btn-remove-line" (click)="removeLine(i)" title="Supprimer">
                          <span class="material-icons">delete</span>
                        </button>
                      </td>
                    }
                  </tr>
                }
              </tbody>
              @if (lines.length > 0) {
                <tfoot>
                  <tr>
                    <td colspan="5" class="total-label">TOTAL</td>
                    <td class="text-right-cell total-value">{{ lineTotal | number:'1.0-0' }} FCFA</td>
                    @if (isDraft) { <td></td> }
                  </tr>
                </tfoot>
              }
            </table>
          </div>
        </div>
      </div>

      <!-- Sidebar : infos g\xE9n\xE9rales -->
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
              <label>Emplacement source</label>
              @if (isDraft) {
                <select class="form-control" [(ngModel)]="selectedSrcId">
                  @for (l of locations; track l.id) { <option [value]="l.id">{{ l.completeName || l.name }}</option> }
                </select>
              } @else { <div class="form-value">{{ locationName(picking?.locationId!) }}</div> }
            </div>
            <div class="form-group">
              <label>Emplacement destination</label>
              @if (isDraft) {
                <select class="form-control" [(ngModel)]="selectedDestId">
                  @for (l of locations; track l.id) { <option [value]="l.id">{{ l.completeName || l.name }}</option> }
                </select>
              } @else { <div class="form-value">{{ locationName(picking?.locationDestId!) }}</div> }
            </div>
            <div class="form-group">
              <label>Fournisseur</label>
              @if (isDraft) {
                <input type="text" class="form-control" [(ngModel)]="partnerName" placeholder="Nom du fournisseur" />
              } @else { <div class="form-value">{{ partnerName || '\u2014' }}</div> }
            </div>
            <div class="form-group">
              <label>Date planifi\xE9e</label>
              @if (isDraft) {
                <input type="date" class="form-control" [(ngModel)]="scheduledDate" />
              } @else { <div class="form-value">{{ scheduledDate | date:'dd/MM/yyyy' }}</div> }
            </div>
            <div class="form-group">
              <label>Origine (BC, PO...)</label>
              @if (isDraft) {
                <input type="text" class="form-control" [(ngModel)]="origin" placeholder="Ex: BC-2026-00001" />
              } @else { <div class="form-value">{{ origin || '\u2014' }}</div> }
            </div>
            <div class="form-group">
              <label>Notes</label>
              @if (isDraft) {
                <textarea class="form-control" [(ngModel)]="notes" rows="2"></textarea>
              } @else { <div class="form-value">{{ notes || '\u2014' }}</div> }
            </div>
          </div>
        </div>
      </div>
    </div>
  }
</div>
`, styles: ['/* src/app/modules/stock/components/receptions/reception-detail.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: #fd7e14;\n}\n.page-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-back {\n  background: none;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 6px;\n  color: #6c757d;\n  display: flex;\n}\n.btn-back:hover {\n  background: #f0f0f0;\n}\n.btn-back .material-icons {\n  font-size: 20px;\n}\n.state-badge {\n  display: inline-block;\n  padding: 3px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.state-badge[data-state=draft] {\n  background: #f0f0f0;\n  color: #6c757d;\n}\n.state-badge[data-state=done] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.state-badge[data-state=cancelled] {\n  background: #fde8e8;\n  color: #721c24;\n}\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: white;\n  color: #2c7be5;\n  border: 1px solid #2c7be5;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-secondary .material-icons {\n  font-size: 16px;\n}\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #198754;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-validate .material-icons {\n  font-size: 16px;\n}\n.btn-validate:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate:hover:not(:disabled) {\n  background: #146c43;\n}\n.btn-cancel-picking {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px;\n  background: white;\n  color: #dc3545;\n  border: 1px solid #dc3545;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.btn-cancel-picking .material-icons {\n  font-size: 18px;\n}\n.btn-cancel-picking:hover {\n  background: #fde8e8;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  font-size: 13px;\n}\n.alert .material-icons {\n  font-size: 16px;\n}\n.alert.alert-danger {\n  background: #fde8e8;\n  color: #721c24;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.info-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #e8f0fb;\n  border-radius: 6px;\n  margin-bottom: 14px;\n  font-size: 13px;\n  color: #1a68d1;\n  border: 1px solid #bee3f8;\n}\n.info-banner .material-icons {\n  font-size: 18px;\n}\n.loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-layout {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 16px;\n  align-items: start;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.card .card-body {\n  padding: 16px 18px;\n}\n.btn-add-line {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #2c7be5;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line .material-icons {\n  font-size: 16px;\n}\n.btn-add-line:hover {\n  background: #1a68d1;\n}\n.lines-container {\n  padding: 0;\n}\n.empty-lines {\n  padding: 30px;\n  text-align: center;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table.has-lines thead th {\n  padding: 8px 10px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n}\n.lines-table td {\n  padding: 6px 8px;\n  border-bottom: 1px solid #f5f5f5;\n  font-size: 13px;\n  vertical-align: middle;\n}\n.lines-table tfoot td {\n  padding: 10px;\n  border-top: 2px solid #e9ecef;\n  background: #fafafa;\n}\n.lines-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.text-right-cell {\n  text-align: right;\n  display: block;\n}\n.font-bold {\n  font-weight: 600;\n}\n.total-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n}\n.total-value {\n  font-size: 14px;\n  font-weight: 700;\n  color: #212529;\n  font-family: monospace;\n  text-align: right;\n}\n.line-select,\n.line-input {\n  width: 100%;\n  padding: 5px 8px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: white;\n}\n.line-select:focus,\n.line-input:focus {\n  border-color: #2c7be5;\n}\n.line-select.text-right,\n.line-input.text-right {\n  text-align: right;\n}\n.btn-remove-line {\n  background: none;\n  border: none;\n  color: #adb5bd;\n  cursor: pointer;\n  padding: 3px;\n  border-radius: 4px;\n}\n.btn-remove-line .material-icons {\n  font-size: 16px;\n}\n.btn-remove-line:hover {\n  color: #dc3545;\n  background: #fde8e8;\n}\n.form-group {\n  margin-bottom: 12px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 4px;\n}\n.form-control {\n  width: 100%;\n  padding: 7px 10px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  border-color: #2c7be5;\n}\ntextarea.form-control {\n  resize: vertical;\n}\n.form-value {\n  font-size: 13px;\n  color: #212529;\n  padding: 4px 0;\n}\n/*# sourceMappingURL=reception-detail.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: StockService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReceptionDetailComponent, { className: "ReceptionDetailComponent", filePath: "src/app/modules/stock/components/receptions/reception-detail.component.ts", lineNumber: 16 });
})();
export {
  ReceptionDetailComponent
};
//# sourceMappingURL=chunk-GW7YUYIT.js.map
