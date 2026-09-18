import {
  StockService
} from "./chunk-LIGNVDFD.js";
import {
  SalesService
} from "./chunk-PDYKRBTO.js";
import {
  ExcelExportService
} from "./chunk-RDE6QNFF.js";
import "./chunk-V5EAPQSQ.js";
import {
  E,
  autoTable
} from "./chunk-AJFTTPVD.js";
import "./chunk-7YWLATDR.js";
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
  HostListener,
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
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/stock/components/casses/casse-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CasseListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 8);
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
function CasseListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 8);
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
function CasseListComponent_Conditional_18_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", w_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r3.name);
  }
}
function CasseListComponent_Conditional_18_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Aucun article en stock dans cet entrep\xF4t.");
    \u0275\u0275elementEnd();
  }
}
function CasseListComponent_Conditional_18_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.name);
  }
}
function CasseListComponent_Conditional_18_For_50_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function CasseListComponent_Conditional_18_For_50_Conditional_3_For_2_Template_div_click_0_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const \u0275$index_128_r7 = \u0275\u0275nextContext(2).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectProduct(\u0275$index_128_r7, p_r9));
    });
    \u0275\u0275elementStart(1, "span", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9.defaultCode);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r9.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r9.qtyOnHand, " dispo");
  }
}
function CasseListComponent_Conditional_18_For_50_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275repeaterCreate(1, CasseListComponent_Conditional_18_For_50_Conditional_3_For_2_Template, 6, 3, "div", 38, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_128_r7 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.getSuggestions(\u0275$index_128_r7));
  }
}
function CasseListComponent_Conditional_18_For_50_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("field-hint-danger", ctx_r0.lineExceedsStock(line_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Disponible : ", line_r6.available, " ");
  }
}
function CasseListComponent_Conditional_18_For_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 31)(2, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function CasseListComponent_Conditional_18_For_50_Template_input_ngModelChange_2_listener($event) {
      const line_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(line_r6.search, $event) || (line_r6.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function CasseListComponent_Conditional_18_For_50_Template_input_input_2_listener() {
      const \u0275$index_128_r7 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSearchInput(\u0275$index_128_r7));
    })("focus", function CasseListComponent_Conditional_18_For_50_Template_input_focus_2_listener() {
      const \u0275$index_128_r7 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSearchInput(\u0275$index_128_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CasseListComponent_Conditional_18_For_50_Conditional_3_Template, 3, 0, "div", 33);
    \u0275\u0275conditionalCreate(4, CasseListComponent_Conditional_18_For_50_Conditional_4_Template, 2, 3, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 23)(6, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function CasseListComponent_Conditional_18_For_50_Template_input_ngModelChange_6_listener($event) {
      const line_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(line_r6.quantity, $event) || (line_r6.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "button", 37);
    \u0275\u0275listener("click", function CasseListComponent_Conditional_18_For_50_Template_button_click_12_listener() {
      const \u0275$index_128_r7 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeLine(\u0275$index_128_r7));
    });
    \u0275\u0275elementStart(13, "span", 8);
    \u0275\u0275text(14, "delete_outline");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const line_r6 = ctx.$implicit;
    const \u0275$index_128_r7 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx_r0.form.warehouseId ? "Rechercher un article en stock..." : "S\xE9lectionnez d'abord un entrep\xF4t"));
    \u0275\u0275twoWayProperty("ngModel", line_r6.search);
    \u0275\u0275property("disabled", !ctx_r0.form.warehouseId);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeSuggestionIdx === \u0275$index_128_r7 && ctx_r0.getSuggestions(\u0275$index_128_r7).length > 0 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(line_r6.productId ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("input-error", ctx_r0.lineExceedsStock(line_r6));
    \u0275\u0275twoWayProperty("ngModel", line_r6.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmt(line_r6.unitCost));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmt((line_r6.quantity ?? 0) * line_r6.unitCost));
  }
}
function CasseListComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "label");
    \u0275\u0275text(5, "Entrep\xF4t ");
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function CasseListComponent_Conditional_18_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.warehouseId, $event) || (ctx_r0.form.warehouseId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CasseListComponent_Conditional_18_Template_select_ngModelChange_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onWarehouseChange());
    });
    \u0275\u0275elementStart(9, "option", 15);
    \u0275\u0275text(10, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(11, CasseListComponent_Conditional_18_For_12_Template, 2, 2, "option", 16, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, CasseListComponent_Conditional_18_Conditional_13_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 12)(15, "label");
    \u0275\u0275text(16, "Date ");
    \u0275\u0275elementStart(17, "span", 13);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function CasseListComponent_Conditional_18_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.date, $event) || (ctx_r0.form.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 12)(21, "label");
    \u0275\u0275text(22, "Client (destination)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function CasseListComponent_Conditional_18_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.partnerId, $event) || (ctx_r0.form.partnerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "option", 16);
    \u0275\u0275text(25, "-- Aucun --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, CasseListComponent_Conditional_18_For_27_Template, 2, 2, "option", 16, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 19)(29, "label");
    \u0275\u0275text(30, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function CasseListComponent_Conditional_18_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.notes, $event) || (ctx_r0.form.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 21)(33, "span", 8);
    \u0275\u0275text(34, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Articles \xE0 sortir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "table", 22)(37, "thead")(38, "tr")(39, "th");
    \u0275\u0275text(40, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 23);
    \u0275\u0275text(42, "Quantit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th", 23);
    \u0275\u0275text(44, "CMUP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 23);
    \u0275\u0275text(46, "Valeur estim\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "th", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "tbody");
    \u0275\u0275repeaterCreate(49, CasseListComponent_Conditional_18_For_50_Template, 15, 11, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "tfoot")(52, "tr")(53, "td", 25);
    \u0275\u0275text(54, "Total estim\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "td", 26);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "td");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "button", 27);
    \u0275\u0275listener("click", function CasseListComponent_Conditional_18_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addLine());
    });
    \u0275\u0275elementStart(59, "span", 8);
    \u0275\u0275text(60, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, " Ajouter un article ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 28)(63, "button", 29);
    \u0275\u0275listener("click", function CasseListComponent_Conditional_18_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275elementStart(64, "span", 8);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "p", 30);
    \u0275\u0275text(68, "G\xE9n\xE8re une \xE9criture unique : D\xE9bit 659300 (charge) / Cr\xE9dit 6031 (variation de stocks).");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.warehouseId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.warehouses);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.warehouseId && ctx_r0.allProducts.length === 0 ? 13 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.partnerId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.clients);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.notes);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r0.lines);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r0.fmt(ctx_r0.totalEstimate), " FCFA");
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275classProp("spin", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.saving ? "hourglass_empty" : "save");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Enregistrement\u2026" : "Enregistrer la sortie", " ");
  }
}
function CasseListComponent_Conditional_19_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 8);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.historyError);
  }
}
function CasseListComponent_Conditional_19_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 50);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function CasseListComponent_Conditional_19_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1, "Aucune casse enregistr\xE9e sur la p\xE9riode.");
    \u0275\u0275elementEnd();
  }
}
function CasseListComponent_Conditional_19_Conditional_26_For_17_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 59)(1, "em");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r12.notes);
  }
}
function CasseListComponent_Conditional_19_Conditional_26_For_17_Conditional_18_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r13.productCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r13.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r13.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmt(line_r13.unitCost ?? 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmt(line_r13.montantTotal ?? 0));
  }
}
function CasseListComponent_Conditional_19_Conditional_26_For_17_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 57)(1, "td", 58);
    \u0275\u0275conditionalCreate(2, CasseListComponent_Conditional_19_Conditional_26_For_17_Conditional_18_Conditional_2_Template, 3, 1, "p", 59);
    \u0275\u0275elementStart(3, "table", 60)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 23);
    \u0275\u0275text(11, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 23);
    \u0275\u0275text(13, "CMUP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 23);
    \u0275\u0275text(15, "Montant");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, CasseListComponent_Conditional_19_Conditional_26_For_17_Conditional_18_For_18_Template, 11, 5, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const l_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(l_r12.notes ? 2 : -1);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(l_r12.lines);
  }
}
function CasseListComponent_Conditional_19_Conditional_26_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "button", 55);
    \u0275\u0275listener("click", function CasseListComponent_Conditional_19_Conditional_26_For_17_Template_button_click_12_listener() {
      const l_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.downloadBordereau(l_r12));
    });
    \u0275\u0275elementStart(13, "span", 8);
    \u0275\u0275text(14, "description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td")(16, "span", 56);
    \u0275\u0275listener("click", function CasseListComponent_Conditional_19_Conditional_26_For_17_Template_span_click_16_listener() {
      const l_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleExpand(l_r12.id));
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(18, CasseListComponent_Conditional_19_Conditional_26_For_17_Conditional_18_Template, 19, 1, "tr", 57);
  }
  if (rf & 2) {
    const l_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r12.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r12.warehouseName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r12.partnerName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.fmt(l_r12.totalValue ?? 0), " FCFA");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.expandedId === l_r12.id ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.expandedId === l_r12.id ? 18 : -1);
  }
}
function CasseListComponent_Conditional_19_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 22)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Entrep\xF4t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 23);
    \u0275\u0275text(12, "Valeur");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th", 51)(14, "th", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, CasseListComponent_Conditional_19_Conditional_26_For_17_Template, 19, 7, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "tfoot")(19, "tr")(20, "td", 53);
    \u0275\u0275text(21, "Total p\xE9riode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 26);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "td")(25, "td");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r0.losses);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r0.fmt(ctx_r0.grandTotal), " FCFA");
  }
}
function CasseListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 43)(3, "div", 44)(4, "label");
    \u0275\u0275text(5, "Du");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function CasseListComponent_Conditional_19_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.dateFrom, $event) || (ctx_r0.dateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 44)(8, "label");
    \u0275\u0275text(9, "Au");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function CasseListComponent_Conditional_19_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.dateTo, $event) || (ctx_r0.dateTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 46);
    \u0275\u0275listener("click", function CasseListComponent_Conditional_19_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadHistory());
    });
    \u0275\u0275elementStart(12, "span", 8);
    \u0275\u0275text(13, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Actualiser ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 47);
    \u0275\u0275listener("click", function CasseListComponent_Conditional_19_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.exportExcel());
    });
    \u0275\u0275elementStart(16, "span", 8);
    \u0275\u0275text(17, "grid_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 47);
    \u0275\u0275listener("click", function CasseListComponent_Conditional_19_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.exportPdf());
    });
    \u0275\u0275elementStart(20, "span", 8);
    \u0275\u0275text(21, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " PDF ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, CasseListComponent_Conditional_19_Conditional_23_Template, 4, 1, "div", 5);
    \u0275\u0275conditionalCreate(24, CasseListComponent_Conditional_19_Conditional_24_Template, 4, 0, "div", 48)(25, CasseListComponent_Conditional_19_Conditional_25_Template, 2, 0, "div", 49)(26, CasseListComponent_Conditional_19_Conditional_26_Template, 26, 1, "table", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dateFrom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dateTo);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.losses.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.losses.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.historyError ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loadingHistory ? 24 : ctx_r0.losses.length === 0 ? 25 : 26);
  }
}
var CasseListComponent = class _CasseListComponent {
  get companyId() {
    return this.auth.getCompanyId();
  }
  get totalEstimate() {
    return this.lines.reduce((s, l) => s + (l.quantity || 0) * (l.unitCost || 0), 0);
  }
  get grandTotal() {
    return this.losses.reduce((s, l) => s + (l.totalValue ?? 0), 0);
  }
  get companyName() {
    return this.auth.getActiveCompany()?.name || "Mon entreprise";
  }
  constructor(stockService, salesService, excelExportService, auth) {
    this.stockService = stockService;
    this.salesService = salesService;
    this.excelExportService = excelExportService;
    this.auth = auth;
    this.activeTab = "new";
    this.warehouses = [];
    this.clients = [];
    this.losses = [];
    this.loadingHistory = false;
    this.expandedId = null;
    this.allProducts = [];
    this.activeSuggestionIdx = null;
    this.form = {
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      warehouseId: 0,
      partnerId: null,
      notes: ""
    };
    this.lines = [];
    this.saving = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.dateFrom = "";
    this.dateTo = "";
    this.historyError = "";
    const today = /* @__PURE__ */ new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    this.dateFrom = firstDay.toISOString().slice(0, 10);
    this.dateTo = today.toISOString().slice(0, 10);
  }
  ngOnInit() {
    this.stockService.getWarehouses(this.companyId).subscribe((w) => this.warehouses = w);
    this.salesService.getClients(this.companyId).subscribe((c) => this.clients = c);
    this.addLine();
    this.loadHistory();
  }
  /** Entrepôt (re)sélectionné : recharge la liste des articles réellement en stock, comme côté ventes. */
  onWarehouseChange() {
    this.allProducts = [];
    this.lines.forEach((l) => {
      l.productId = null;
      l.productCode = "";
      l.description = "";
      l.available = 0;
      l.search = "";
    });
    if (!this.form.warehouseId)
      return;
    this.stockService.getProducts(this.companyId, this.form.warehouseId).subscribe({
      next: (data) => {
        this.allProducts = data.filter((p) => (p.type === "product" || p.type === "consu") && (p.qtyOnHand ?? 0) > 0);
      },
      error: () => {
        this.errorMsg = "Impossible de charger les articles en stock de cet entrep\xF4t.";
      }
    });
  }
  onDocumentClick(event) {
    const t = event.target;
    if (!t.closest(".search-cell"))
      this.activeSuggestionIdx = null;
  }
  // ── Lignes ────────────────────────────────────────────────────────────────
  addLine() {
    this.lines.push({ productId: null, productCode: "", description: "", quantity: null, unitCost: 0, search: "", available: 0 });
  }
  removeLine(i) {
    this.lines.splice(i, 1);
    if (this.lines.length === 0)
      this.addLine();
    if (this.activeSuggestionIdx === i)
      this.activeSuggestionIdx = null;
  }
  /** Suggestions filtrées sur allProducts (déjà limité aux articles en stock de l'entrepôt choisi). */
  getSuggestions(i) {
    const q = (this.lines[i]?.search || "").toLowerCase().trim();
    if (!q)
      return this.allProducts.slice(0, 10);
    const matches = this.allProducts.filter((p) => p.name.toLowerCase().includes(q) || (p.defaultCode || "").toLowerCase().includes(q));
    return matches.slice(0, 12);
  }
  onSearchInput(i) {
    this.lines[i].productId = null;
    this.activeSuggestionIdx = i;
  }
  selectProduct(i, p) {
    const line = this.lines[i];
    line.productId = p.id ?? null;
    line.productCode = p.defaultCode ?? "";
    line.description = p.name;
    line.unitCost = p.standardPrice ?? 0;
    line.available = p.qtyOnHand ?? 0;
    line.search = `${p.defaultCode ? p.defaultCode + " \u2014 " : ""}${p.name}`;
    this.activeSuggestionIdx = null;
  }
  /** Une ligne est invalide si la quantité demandée dépasse le stock disponible dans l'entrepôt. */
  lineExceedsStock(line) {
    return !!line.productId && !!line.quantity && line.quantity > line.available;
  }
  // ── Soumission ───────────────────────────────────────────────────────────
  save() {
    this.errorMsg = "";
    this.successMsg = "";
    if (!this.form.warehouseId) {
      this.errorMsg = "S\xE9lectionnez un entrep\xF4t.";
      return;
    }
    if (!this.form.date) {
      this.errorMsg = "S\xE9lectionnez une date.";
      return;
    }
    const validLines = this.lines.filter((l) => l.productId && l.quantity && l.quantity > 0);
    if (validLines.length === 0) {
      this.errorMsg = "Ajoutez au moins un article avec une quantit\xE9.";
      return;
    }
    const invalid = validLines.find((l) => this.lineExceedsStock(l));
    if (invalid) {
      this.errorMsg = `Stock insuffisant pour "${invalid.description}" : ${invalid.available} disponible(s), ${invalid.quantity} demand\xE9(s).`;
      return;
    }
    const req = {
      date: this.form.date,
      warehouseId: this.form.warehouseId,
      partnerId: this.form.partnerId ?? void 0,
      notes: this.form.notes,
      companyId: this.companyId,
      lines: validLines.map((l) => ({ productId: l.productId, quantity: l.quantity }))
    };
    this.saving = true;
    this.stockService.createStockLoss(req).subscribe({
      next: (created) => {
        this.saving = false;
        this.successMsg = `${created.name} enregistr\xE9 \u2014 valeur ${this.fmt(created.totalValue ?? 0)} FCFA (\xE9criture 659300/6031).`;
        this.form.partnerId = null;
        this.form.notes = "";
        this.lines = [];
        this.addLine();
        this.onWarehouseChange();
        this.loadHistory();
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err?.error?.message || "Erreur lors de l'enregistrement.";
      }
    });
  }
  // ── Historique / rapport ─────────────────────────────────────────────────
  loadHistory() {
    this.loadingHistory = true;
    this.historyError = "";
    this.stockService.getStockLosses(this.companyId, this.dateFrom || void 0, this.dateTo || void 0).subscribe({
      next: (d) => {
        this.losses = d;
        this.loadingHistory = false;
      },
      error: (err) => {
        this.loadingHistory = false;
        this.historyError = err?.error?.message || "Erreur de chargement.";
      }
    });
  }
  toggleExpand(id) {
    if (id == null)
      return;
    this.expandedId = this.expandedId === id ? null : id;
  }
  fmt(n) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  // ── Bordereau individuel ─────────────────────────────────────────────────
  downloadBordereau(loss) {
    if (!loss.id)
      return;
    this.stockService.downloadCasseBordereauPdf(loss.id).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${loss.name || "bordereau_casse"}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      },
      error: () => {
        this.historyError = "Impossible de g\xE9n\xE9rer le bordereau.";
      }
    });
  }
  // ── Exports ──────────────────────────────────────────────────────────────
  exportExcel() {
    this.excelExportService.exportStockLosses(this.losses, this.dateFrom, this.dateTo, this.companyName);
  }
  exportPdf() {
    const doc = new E({ orientation: "portrait", unit: "mm", format: "a4" });
    const pageW = doc.internal.pageSize.getWidth();
    const margin = 12;
    let y = margin;
    doc.setFontSize(17);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(17, 24, 39);
    doc.text(this.companyName, margin, y);
    y += 6;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageW - margin, y);
    y += 10;
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(17, 24, 39);
    doc.text("TROUS & CASSES", margin, y);
    y += 6;
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    const periodLabel = this.dateFrom && this.dateTo ? `P\xE9riode : ${this.dateFrom} au ${this.dateTo}` : "Toutes p\xE9riodes";
    doc.text(`${periodLabel}   |   Le : ${(/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR")}`, margin, y);
    y += 8;
    const dark = [17, 24, 39];
    const mid = [55, 65, 81];
    const grayFoot = [241, 245, 249];
    const bodyRows = [];
    for (const loss of this.losses) {
      for (const line of loss.lines) {
        bodyRows.push([
          { content: `${loss.name} \u2014 ${loss.date}`, styles: { fontStyle: "bold" } },
          { content: loss.warehouseName || "" },
          { content: `${line.productCode ? line.productCode + " \u2014 " : ""}${line.description || ""}` },
          { content: this.fmt(line.quantity), styles: { halign: "right" } },
          { content: this.fmt(line.montantTotal ?? 0) + " FCFA", styles: { halign: "right" } }
        ]);
      }
    }
    autoTable(doc, {
      startY: y,
      margin: { left: margin, right: margin },
      head: [[
        { content: "R\xE9f. / Date", styles: { halign: "left" } },
        { content: "Entrep\xF4t", styles: { halign: "left" } },
        { content: "Article", styles: { halign: "left" } },
        { content: "Quantit\xE9", styles: { halign: "right" } },
        { content: "Montant", styles: { halign: "right" } }
      ]],
      body: bodyRows,
      foot: [[
        { content: "", styles: { fillColor: grayFoot } },
        { content: "", styles: { fillColor: grayFoot } },
        { content: "", styles: { fillColor: grayFoot } },
        { content: "TOTAL G\xC9N\xC9RAL", styles: { fillColor: grayFoot, fontStyle: "bold", halign: "right", textColor: mid } },
        { content: this.fmt(this.grandTotal) + " FCFA", styles: { fillColor: grayFoot, fontStyle: "bold", halign: "right", textColor: dark } }
      ]],
      showFoot: "lastPage",
      theme: "plain",
      styles: { fontSize: 8, cellPadding: 3, textColor: dark, lineColor: [229, 231, 235], lineWidth: 0.1, overflow: "hidden", minCellHeight: 6 },
      headStyles: { fillColor: [249, 250, 251], textColor: [80, 80, 80], fontStyle: "bold", fontSize: 8, lineColor: [209, 213, 219], lineWidth: 0.3, overflow: "hidden" },
      footStyles: { overflow: "hidden" },
      columnStyles: {
        0: { cellWidth: 38 },
        1: { cellWidth: 32 },
        2: { cellWidth: 58 },
        3: { cellWidth: 22, halign: "right", overflow: "hidden" },
        4: { cellWidth: 30, halign: "right", overflow: "hidden" }
      }
    });
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(180, 180, 180);
      doc.setDrawColor(220, 220, 220);
      doc.setLineWidth(0.2);
      doc.line(margin, 284, pageW - margin, 284);
      doc.text(`${this.companyName} \u2014 Logiciel Blessing ERP`, margin, 288);
      doc.text(`Page ${i} / ${pageCount}`, pageW - margin, 289, { align: "right" });
    }
    doc.save(`trous-casses-${this.dateFrom || "toutes"}-${this.dateTo || "periodes"}.pdf`);
  }
  static {
    this.\u0275fac = function CasseListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CasseListComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(ExcelExportService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CasseListComponent, selectors: [["app-casse-list"]], hostBindings: function CasseListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CasseListComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, \u0275\u0275resolveDocument);
      }
    }, decls: 20, vars: 8, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "tabs"], [1, "tab-btn", 3, "click"], [1, "material-icons"], [1, "card"], [1, "card-body"], [1, "form-grid"], [1, "form-group"], [1, "req"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue"], [1, "field-hint", "field-hint-danger"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "form-full"], ["type", "text", "placeholder", "Motif de la casse/avarie...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "section-title"], [1, "data-table"], [1, "text-right"], [2, "width", "44px"], ["colspan", "3", 1, "text-right", 2, "font-weight", "600"], [1, "text-right", "mono", 2, "font-weight", "600"], [1, "btn-add-line", 3, "click"], [1, "form-actions"], [1, "btn-primary", 3, "click", "disabled"], [1, "section-hint"], [1, "search-cell"], ["type", "text", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "input", "focus", "ngModel", "disabled", "placeholder"], [1, "suggestions"], [1, "field-hint", 3, "field-hint-danger"], ["type", "number", "min", "0", 1, "form-control", "w-qty", 3, "ngModelChange", "ngModel"], [1, "text-right", "mono"], ["title", "Supprimer", 1, "btn-icon", 3, "click"], [1, "suggestion-item"], [1, "suggestion-item", 3, "click"], [1, "code-badge"], [1, "qty-badge"], [1, "field-hint"], [1, "filter-bar"], [1, "filter-date-group"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "btn-secondary", 3, "click"], [1, "btn-secondary", 3, "click", "disabled"], [1, "loading-state"], [1, "empty-state"], [1, "material-icons", "spin"], [2, "width", "80px"], [2, "width", "36px"], ["colspan", "4", 1, "text-right", 2, "font-weight", "600"], [1, "mono"], ["title", "T\xE9l\xE9charger le bordereau PDF", 1, "btn-icon", 3, "click"], [1, "material-icons", "expand-toggle", 3, "click"], [1, "expand-row"], ["colspan", "7"], [1, "notes-line"], [1, "sub-table"]], template: function CasseListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Trous & Casses");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Sortie de stock pour marchandises avari\xE9es/cass\xE9es");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(7, CasseListComponent_Conditional_7_Template, 4, 1, "div", 4);
        \u0275\u0275conditionalCreate(8, CasseListComponent_Conditional_8_Template, 4, 1, "div", 5);
        \u0275\u0275elementStart(9, "div", 6)(10, "button", 7);
        \u0275\u0275listener("click", function CasseListComponent_Template_button_click_10_listener() {
          return ctx.activeTab = "new";
        });
        \u0275\u0275elementStart(11, "span", 8);
        \u0275\u0275text(12, "add_circle_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " Nouvelle sortie ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 7);
        \u0275\u0275listener("click", function CasseListComponent_Template_button_click_14_listener() {
          return ctx.activeTab = "history";
        });
        \u0275\u0275elementStart(15, "span", 8);
        \u0275\u0275text(16, "history");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " Historique & rapport ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(18, CasseListComponent_Conditional_18_Template, 69, 13, "div", 9);
        \u0275\u0275conditionalCreate(19, CasseListComponent_Conditional_19_Template, 27, 6, "div", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.successMsg ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "new");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.activeTab === "history");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.activeTab === "new" ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "history" ? 19 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 20px;\n  border-bottom: 2px solid var(--border);\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-muted);\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.2s;\n}\n.tab-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  border-bottom-color: var(--primary);\n}\n.tab-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  color: var(--text-secondary);\n  background: var(--bg-hover);\n  border-radius: 6px 6px 0 0;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 18px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.form-control.form-control-sm[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  font-size: 12px;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 4px 0 12px;\n  font-size: 14px;\n}\n.section-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-muted);\n}\n.section-hint[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 12.5px;\n  color: var(--text-muted);\n}\n.field-hint[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.field-hint-danger[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: top;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--border);\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.w-qty[_ngcontent-%COMP%] {\n  width: 90px;\n  text-align: right;\n}\n.search-cell[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 260px;\n}\n.suggestions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 20;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  margin-top: 2px;\n  max-height: 220px;\n  overflow-y: auto;\n  box-shadow: var(--shadow-md);\n}\n.suggestion-item[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  cursor: pointer;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.suggestion-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.code-badge[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n  color: var(--primary);\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n}\n.qty-badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--success);\n  background: var(--success-bg);\n  padding: 2px 7px;\n  border-radius: 10px;\n}\n.input-error[_ngcontent-%COMP%] {\n  border-color: var(--danger) !important;\n  background: var(--danger-bg);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: var(--text-muted);\n  display: flex;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.btn-add-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 10px;\n  padding: 7px 14px;\n  border: 1px dashed var(--border);\n  border-radius: 6px;\n  background: none;\n  cursor: pointer;\n  color: var(--text-secondary);\n  font-weight: 600;\n  font-size: 13px;\n}\n.btn-add-line[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.filter-date-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.filter-date-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.expand-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.expand-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\n.notes-line[_ngcontent-%COMP%] {\n  margin: 4px 0 8px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.sub-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\n.sub-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  color: var(--text-muted);\n  font-weight: 600;\n  padding: 4px 8px;\n}\n.sub-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-bottom: 1px solid var(--border-light);\n}\n/*# sourceMappingURL=casse-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CasseListComponent, [{
    type: Component,
    args: [{ selector: "app-casse-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div>
      <h1 class="page-title">Trous &amp; Casses</h1>
      <p class="page-subtitle">Sortie de stock pour marchandises avari\xE9es/cass\xE9es</p>
    </div>
  </div>

  @if (successMsg) {
    <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div>
  }
  @if (errorMsg) {
    <div class="alert alert-danger"><span class="material-icons">error</span> {{ errorMsg }}</div>
  }

  <div class="tabs">
    <button class="tab-btn" [class.active]="activeTab === 'new'" (click)="activeTab = 'new'">
      <span class="material-icons">add_circle_outline</span> Nouvelle sortie
    </button>
    <button class="tab-btn" [class.active]="activeTab === 'history'" (click)="activeTab = 'history'">
      <span class="material-icons">history</span> Historique &amp; rapport
    </button>
  </div>

  @if (activeTab === 'new') {
    <div class="card">
      <div class="card-body">

        <div class="form-grid">
          <div class="form-group">
            <label>Entrep\xF4t <span class="req">*</span></label>
            <select class="form-control" [(ngModel)]="form.warehouseId" (ngModelChange)="onWarehouseChange()">
              <option [ngValue]="0" disabled>-- S\xE9lectionner --</option>
              @for (w of warehouses; track w.id) { <option [ngValue]="w.id">{{ w.name }}</option> }
            </select>
            @if (form.warehouseId && allProducts.length === 0) {
              <span class="field-hint field-hint-danger">Aucun article en stock dans cet entrep\xF4t.</span>
            }
          </div>
          <div class="form-group">
            <label>Date <span class="req">*</span></label>
            <input type="date" class="form-control" [(ngModel)]="form.date">
          </div>
          <div class="form-group">
            <label>Client (destination)</label>
            <select class="form-control" [(ngModel)]="form.partnerId">
              <option [ngValue]="null">-- Aucun --</option>
              @for (c of clients; track c.id) { <option [ngValue]="c.id">{{ c.name }}</option> }
            </select>
          </div>
          <div class="form-group form-full">
            <label>Notes</label>
            <input type="text" class="form-control" [(ngModel)]="form.notes" placeholder="Motif de la casse/avarie...">
          </div>
        </div>

        <div class="section-title">
          <span class="material-icons">inventory_2</span> Articles \xE0 sortir
        </div>

        <table class="data-table">
          <thead>
            <tr>
              <th>Article</th>
              <th class="text-right">Quantit\xE9</th>
              <th class="text-right">CMUP</th>
              <th class="text-right">Valeur estim\xE9e</th>
              <th style="width:44px"></th>
            </tr>
          </thead>
          <tbody>
            @for (line of lines; track $index; let i = $index) {
              <tr>
                <td class="search-cell">
                  <input type="text" class="form-control" [(ngModel)]="line.search"
                         [disabled]="!form.warehouseId"
                         placeholder="{{ form.warehouseId ? 'Rechercher un article en stock...' : 'S\xE9lectionnez d\\'abord un entrep\xF4t' }}"
                         (input)="onSearchInput(i)" (focus)="onSearchInput(i)" autocomplete="off">
                  @if (activeSuggestionIdx === i && getSuggestions(i).length > 0) {
                    <div class="suggestions">
                      @for (p of getSuggestions(i); track p.id) {
                        <div class="suggestion-item" (click)="selectProduct(i, p)">
                          <span class="code-badge">{{ p.defaultCode }}</span> {{ p.name }}
                          <span class="qty-badge">{{ p.qtyOnHand }} dispo</span>
                        </div>
                      }
                    </div>
                  }
                  @if (line.productId) {
                    <span class="field-hint" [class.field-hint-danger]="lineExceedsStock(line)">
                      Disponible : {{ line.available }}
                    </span>
                  }
                </td>
                <td class="text-right">
                  <input type="number" class="form-control w-qty" min="0" [(ngModel)]="line.quantity"
                         [class.input-error]="lineExceedsStock(line)">
                </td>
                <td class="text-right mono">{{ fmt(line.unitCost) }}</td>
                <td class="text-right mono">{{ fmt((line.quantity ?? 0) * line.unitCost) }}</td>
                <td>
                  <button class="btn-icon" (click)="removeLine(i)" title="Supprimer">
                    <span class="material-icons">delete_outline</span>
                  </button>
                </td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right" style="font-weight:600">Total estim\xE9</td>
              <td class="text-right mono" style="font-weight:600">{{ fmt(totalEstimate) }} FCFA</td>
              <td></td>
            </tr>
          </tfoot>
        </table>

        <button class="btn-add-line" (click)="addLine()">
          <span class="material-icons">add</span> Ajouter un article
        </button>

        <div class="form-actions">
          <button class="btn-primary" (click)="save()" [disabled]="saving">
            <span class="material-icons" [class.spin]="saving">{{ saving ? 'hourglass_empty' : 'save' }}</span>
            {{ saving ? 'Enregistrement\u2026' : 'Enregistrer la sortie' }}
          </button>
        </div>
        <p class="section-hint">G\xE9n\xE8re une \xE9criture unique : D\xE9bit 659300 (charge) / Cr\xE9dit 6031 (variation de stocks).</p>
      </div>
    </div>
  }

  @if (activeTab === 'history') {
    <div class="card">
      <div class="card-body">
        <div class="filter-bar">
          <div class="filter-date-group">
            <label>Du</label>
            <input type="date" class="form-control form-control-sm" [(ngModel)]="dateFrom">
          </div>
          <div class="filter-date-group">
            <label>Au</label>
            <input type="date" class="form-control form-control-sm" [(ngModel)]="dateTo">
          </div>
          <button class="btn-secondary" (click)="loadHistory()">
            <span class="material-icons">refresh</span> Actualiser
          </button>
          <button class="btn-secondary" (click)="exportExcel()" [disabled]="losses.length === 0">
            <span class="material-icons">grid_on</span> Excel
          </button>
          <button class="btn-secondary" (click)="exportPdf()" [disabled]="losses.length === 0">
            <span class="material-icons">picture_as_pdf</span> PDF
          </button>
        </div>

        @if (historyError) {
          <div class="alert alert-danger"><span class="material-icons">error</span> {{ historyError }}</div>
        }

        @if (loadingHistory) {
          <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement\u2026</div>
        } @else if (losses.length === 0) {
          <div class="empty-state">Aucune casse enregistr\xE9e sur la p\xE9riode.</div>
        } @else {
          <table class="data-table">
            <thead>
              <tr>
                <th>R\xE9f.</th>
                <th>Date</th>
                <th>Entrep\xF4t</th>
                <th>Client</th>
                <th class="text-right">Valeur</th>
                <th style="width:80px"></th>
                <th style="width:36px"></th>
              </tr>
            </thead>
            <tbody>
              @for (l of losses; track l.id) {
                <tr>
                  <td class="mono">{{ l.name }}</td>
                  <td>{{ l.date }}</td>
                  <td>{{ l.warehouseName }}</td>
                  <td>{{ l.partnerName || '\u2014' }}</td>
                  <td class="text-right mono">{{ fmt(l.totalValue ?? 0) }} FCFA</td>
                  <td>
                    <button class="btn-icon" (click)="downloadBordereau(l)" title="T\xE9l\xE9charger le bordereau PDF">
                      <span class="material-icons">description</span>
                    </button>
                  </td>
                  <td>
                    <span class="material-icons expand-toggle" (click)="toggleExpand(l.id)">
                      {{ expandedId === l.id ? 'expand_less' : 'expand_more' }}
                    </span>
                  </td>
                </tr>
                @if (expandedId === l.id) {
                  <tr class="expand-row">
                    <td colspan="7">
                      @if (l.notes) { <p class="notes-line"><em>{{ l.notes }}</em></p> }
                      <table class="sub-table">
                        <thead>
                          <tr><th>Code</th><th>Article</th><th class="text-right">Qt\xE9</th><th class="text-right">CMUP</th><th class="text-right">Montant</th></tr>
                        </thead>
                        <tbody>
                          @for (line of l.lines; track line.id) {
                            <tr>
                              <td>{{ line.productCode }}</td>
                              <td>{{ line.description }}</td>
                              <td class="text-right">{{ line.quantity }}</td>
                              <td class="text-right">{{ fmt(line.unitCost ?? 0) }}</td>
                              <td class="text-right">{{ fmt(line.montantTotal ?? 0) }}</td>
                            </tr>
                          }
                        </tbody>
                      </table>
                    </td>
                  </tr>
                }
              }
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4" class="text-right" style="font-weight:600">Total p\xE9riode</td>
                <td class="text-right mono" style="font-weight:600">{{ fmt(grandTotal) }} FCFA</td>
                <td></td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        }
      </div>
    </div>
  }

</div>
`, styles: ['/* src/app/modules/stock/components/casses/casse-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-secondary {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-primary {\n  background: var(--primary);\n  color: white;\n  border: none;\n}\n.btn-primary:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-success {\n  background: var(--success-bg);\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.tabs {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 20px;\n  border-bottom: 2px solid var(--border);\n}\n.tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-muted);\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.2s;\n}\n.tab-btn .material-icons {\n  font-size: 18px;\n}\n.tab-btn.active {\n  color: var(--primary);\n  border-bottom-color: var(--primary);\n}\n.tab-btn:hover:not(.active) {\n  color: var(--text-secondary);\n  background: var(--bg-hover);\n  border-radius: 6px 6px 0 0;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-body {\n  padding: 18px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.form-full {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.req {\n  color: var(--danger);\n}\n.form-control {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control:focus {\n  border-color: var(--primary);\n}\n.form-control.form-control-sm {\n  padding: 5px 8px;\n  font-size: 12px;\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 4px 0 12px;\n  font-size: 14px;\n}\n.section-title .material-icons {\n  font-size: 18px;\n  color: var(--text-muted);\n}\n.section-hint {\n  margin-top: 10px;\n  font-size: 12.5px;\n  color: var(--text-muted);\n}\n.field-hint {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.field-hint-danger {\n  color: var(--danger);\n  font-weight: 600;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.data-table th {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n}\n.data-table td {\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: top;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.data-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.data-table tfoot td {\n  border-top: 2px solid var(--border);\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n}\n.w-qty {\n  width: 90px;\n  text-align: right;\n}\n.search-cell {\n  position: relative;\n  min-width: 260px;\n}\n.suggestions {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 20;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  margin-top: 2px;\n  max-height: 220px;\n  overflow-y: auto;\n  box-shadow: var(--shadow-md);\n}\n.suggestion-item {\n  padding: 8px 10px;\n  cursor: pointer;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.suggestion-item:hover {\n  background: var(--bg-hover);\n}\n.code-badge {\n  background: var(--primary-subtle);\n  color: var(--primary);\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n}\n.qty-badge {\n  flex-shrink: 0;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--success);\n  background: var(--success-bg);\n  padding: 2px 7px;\n  border-radius: 10px;\n}\n.input-error {\n  border-color: var(--danger) !important;\n  background: var(--danger-bg);\n}\n.btn-icon {\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: var(--text-muted);\n  display: flex;\n}\n.btn-icon:hover {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.btn-add-line {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 10px;\n  padding: 7px 14px;\n  border: 1px dashed var(--border);\n  border-radius: 6px;\n  background: none;\n  cursor: pointer;\n  color: var(--text-secondary);\n  font-weight: 600;\n  font-size: 13px;\n}\n.btn-add-line:hover {\n  background: var(--bg-hover);\n}\n.form-actions {\n  margin-top: 20px;\n}\n.filter-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.filter-date-group {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.filter-date-group label {\n  font-size: 13px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.expand-toggle {\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.expand-row td {\n  background: var(--bg-elevated);\n}\n.notes-line {\n  margin: 4px 0 8px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.sub-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\n.sub-table th {\n  text-align: left;\n  color: var(--text-muted);\n  font-weight: 600;\n  padding: 4px 8px;\n}\n.sub-table td {\n  padding: 4px 8px;\n  border-bottom: 1px solid var(--border-light);\n}\n/*# sourceMappingURL=casse-list.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: SalesService }, { type: ExcelExportService }, { type: AuthService }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CasseListComponent, { className: "CasseListComponent", filePath: "app/modules/stock/components/casses/casse-list.component.ts", lineNumber: 29 });
})();
export {
  CasseListComponent
};
//# sourceMappingURL=chunk-RJSB3T3E.js.map
