import {
  StockService
} from "./chunk-YEOTRJFB.js";
import {
  downloadExcelTemplate,
  parseExcelFile
} from "./chunk-KYBH2TOV.js";
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
  DecimalPipe,
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-EEF5WTPZ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-PPITZAXW.js";

// src/app/modules/stock/components/products/product-list.component.ts
var _c0 = ["importInput"];
var _c1 = () => ["all", "product", "service", "consu"];
var _forTrack0 = ($index, $item) => $item.id;
function ProductListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 6);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMsg);
  }
}
function ProductListComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ProductListComponent_For_29_Template_button_click_0_listener() {
      const t_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.filterType = t_r4;
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.filterType === t_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4 === "all" ? "Tous" : ctx_r1.typeLabels[t_r4], " ");
  }
}
function ProductListComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 22);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 6);
    \u0275\u0275text(2, "category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun article trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_Conditional_33_For_22_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap((p_r6.qtyOnHand || 0) <= 0 ? "qty-zero" : "qty-ok");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 3, p_r6.qtyOnHand, "1.0-2"));
  }
}
function ProductListComponent_Conditional_33_For_22_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_Conditional_33_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 27);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 28);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 28);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 23);
    \u0275\u0275conditionalCreate(19, ProductListComponent_Conditional_33_For_22_Conditional_19_Template, 3, 6, "span", 29)(20, ProductListComponent_Conditional_33_For_22_Conditional_20_Template, 2, 0, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "button", 30);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_33_For_22_Template_button_click_22_listener() {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(p_r6));
    });
    \u0275\u0275elementStart(23, "span", 6);
    \u0275\u0275text(24, "edit");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.defaultCode || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.categoryName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-type", p_r6.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeLabels[p_r6.type]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.uomName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 9, p_r6.standardPrice, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 12, p_r6.salePrice, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(p_r6.type === "product" ? 19 : 20);
  }
}
function ProductListComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 19)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Unit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 23);
    \u0275\u0275text(14, "CMUP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 23);
    \u0275\u0275text(16, "Prix vente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 23);
    \u0275\u0275text(18, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, ProductListComponent_Conditional_33_For_22_Template, 25, 15, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r1.filtered);
  }
}
function ProductListComponent_Conditional_34_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 23);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 23);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const \u0275$index_205_r9 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_205_r9 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8["Nom*"] || row_r8["Nom"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8["Code (R\xE9f\xE9rence)"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8["Type (product/service/consu)"] || "product");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8["Cat\xE9gorie"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8["Prix Achat (FCFA)"] || "0");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8["Prix Vente (FCFA)"] || "0");
  }
}
function ProductListComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275elementStart(1, "div", 32);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_34_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 33)(3, "h2")(4, "span", 34);
    \u0275\u0275text(5, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 35);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_34_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275elementStart(8, "span", 6);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 36)(11, "table", 19)(12, "thead")(13, "tr")(14, "th");
    \u0275\u0275text(15, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 23);
    \u0275\u0275text(25, "Prix Achat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 23);
    \u0275\u0275text(27, "Prix Vente");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "tbody");
    \u0275\u0275repeaterCreate(29, ProductListComponent_Conditional_34_For_30_Template, 15, 7, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 37)(32, "button", 38);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_34_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275text(33, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 11);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_34_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmImport());
    });
    \u0275\u0275elementStart(35, "span", 6);
    \u0275\u0275text(36, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Aper\xE7u import articles (", ctx_r1.importRows.length, " ligne(s))");
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r1.importRows);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Confirmer l'import (", ctx_r1.importRows.length, " articles) ");
  }
}
function ProductListComponent_Conditional_35_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMsg);
  }
}
function ProductListComponent_Conditional_35_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    \u0275\u0275property("value", c_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r11.name);
  }
}
function ProductListComponent_Conditional_35_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "label");
    \u0275\u0275text(2, "Compte stock OHADA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_35_Conditional_54_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.stockAccountCode, $event) || (ctx_r1.form.stockAccountCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.stockAccountCode);
  }
}
function ProductListComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 40);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_35_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 33)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 35);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_35_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 41);
    \u0275\u0275conditionalCreate(9, ProductListComponent_Conditional_35_Conditional_9_Template, 2, 1, "div", 42);
    \u0275\u0275elementStart(10, "div", 43)(11, "div", 44)(12, "label");
    \u0275\u0275text(13, "R\xE9f\xE9rence (SKU)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_35_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.defaultCode, $event) || (ctx_r1.form.defaultCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 46)(16, "label");
    \u0275\u0275text(17, "Nom ");
    \u0275\u0275elementStart(18, "span", 47);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_35_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 43)(22, "div", 44)(23, "label");
    \u0275\u0275text(24, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_35_Template_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.categoryId, $event) || (ctx_r1.form.categoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(26, "option", 50);
    \u0275\u0275text(27, "\u2014 Aucune \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(28, ProductListComponent_Conditional_35_For_29_Template, 2, 2, "option", 51, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 44)(31, "label");
    \u0275\u0275text(32, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_35_Template_select_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.type, $event) || (ctx_r1.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(34, "option", 52);
    \u0275\u0275text(35, "Stockable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 53);
    \u0275\u0275text(37, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 54);
    \u0275\u0275text(39, "Consommable");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 43)(41, "div", 44)(42, "label");
    \u0275\u0275text(43, "Unit\xE9 de mesure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_35_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.uomName, $event) || (ctx_r1.form.uomName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 44)(46, "label");
    \u0275\u0275text(47, "Prix de revient (CMUP)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_35_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.standardPrice, $event) || (ctx_r1.form.standardPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 43)(50, "div", 44)(51, "label");
    \u0275\u0275text(52, "Prix de vente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_35_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.salePrice, $event) || (ctx_r1.form.salePrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(54, ProductListComponent_Conditional_35_Conditional_54_Template, 4, 1, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 44)(56, "label");
    \u0275\u0275text(57, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "textarea", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_35_Template_textarea_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.description, $event) || (ctx_r1.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 37)(60, "button", 38);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_35_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(61, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 58);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_35_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(63, "span", 6);
    \u0275\u0275text(64, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingProduct ? "Modifier" : "Nouvel article");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.errorMsg ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.defaultCode);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.categoryId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.type);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.uomName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.standardPrice);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.salePrice);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.type === "product" ? 54 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.description);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Enregistrement..." : "Enregistrer", " ");
  }
}
var PRODUCT_HEADERS = ["Nom*", "Code (R\xE9f\xE9rence)", "Type (product/service/consu)", "Cat\xE9gorie", "Prix Achat (FCFA)", "Prix Vente (FCFA)", "Unit\xE9", "Description"];
var PRODUCT_SAMPLE = ["Ciment CPA 42.5", "CIM001", "product", "Mat\xE9riaux", "8500", "10000", "Sac", ""];
var ProductListComponent = class _ProductListComponent {
  constructor(stockService, authService) {
    this.stockService = stockService;
    this.authService = authService;
    this.products = [];
    this.categories = [];
    this.filtered = [];
    this.loading = false;
    this.saving = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.search = "";
    this.filterType = "all";
    this.showModal = false;
    this.editingProduct = null;
    this.form = this.emptyForm();
    this.showImportModal = false;
    this.importRows = [];
    this.importLoading = false;
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    this.load();
  }
  load() {
    this.loading = true;
    forkJoin({
      products: this.stockService.getProducts(this.companyId),
      categories: this.stockService.getCategories(this.companyId)
    }).subscribe({
      next: ({ products, categories }) => {
        this.products = products;
        this.categories = categories;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilter() {
    let list = [...this.products];
    if (this.search) {
      const q = this.search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || (p.defaultCode || "").toLowerCase().includes(q));
    }
    if (this.filterType !== "all")
      list = list.filter((p) => p.type === this.filterType);
    this.filtered = list;
  }
  openCreate() {
    this.editingProduct = null;
    this.form = this.emptyForm();
    this.showModal = true;
    this.errorMsg = "";
  }
  openEdit(p) {
    this.editingProduct = p;
    this.form = __spreadValues({}, p);
    this.showModal = true;
    this.errorMsg = "";
  }
  closeModal() {
    this.showModal = false;
  }
  save() {
    if (!this.form.name) {
      this.errorMsg = "Nom obligatoire";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const dto = __spreadProps(__spreadValues({}, this.form), { companyId: this.companyId, active: true });
    const obs = this.editingProduct ? this.stockService.updateProduct(this.editingProduct.id, dto) : this.stockService.createProduct(dto);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.showModal = false;
        this.load();
      },
      error: (e) => {
        this.saving = false;
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  emptyForm() {
    return { type: "product", active: true, uomName: "Unit\xE9", standardPrice: 0, salePrice: 0 };
  }
  get typeLabels() {
    return { product: "Stockable", service: "Service", consu: "Consommable" };
  }
  // === Import Excel ===
  downloadTemplate() {
    downloadExcelTemplate(PRODUCT_HEADERS, PRODUCT_SAMPLE, "modele_articles.xlsx");
  }
  triggerImport() {
    this.importInput.nativeElement.value = "";
    this.importInput.nativeElement.click();
  }
  onImportFileChange(event) {
    return __async(this, null, function* () {
      const file = event.target.files?.[0];
      if (!file)
        return;
      this.importLoading = true;
      try {
        const rows = yield parseExcelFile(file);
        this.importRows = rows.filter((r) => r["Nom*"] || r["Nom"]);
        if (this.importRows.length === 0) {
          this.showSuccessMsg('Aucune ligne valide (colonne "Nom*" requise)');
          this.importLoading = false;
          return;
        }
        this.showImportModal = true;
      } catch (e) {
        this.showSuccessMsg("Erreur : " + e.message);
      }
      this.importLoading = false;
    });
  }
  closeImportModal() {
    this.showImportModal = false;
    this.importRows = [];
  }
  getCategoryId(name) {
    if (!name)
      return void 0;
    return this.categories.find((c) => c.name?.toLowerCase() === name.toLowerCase())?.id;
  }
  confirmImport() {
    return __async(this, null, function* () {
      let done = 0, errors = 0;
      for (const row of this.importRows) {
        const type = ["product", "service", "consu"].includes(String(row["Type (product/service/consu)"] || "").trim()) ? String(row["Type (product/service/consu)"]).trim() : "product";
        const dto = {
          name: String(row["Nom*"] || row["Nom"] || "").trim(),
          defaultCode: String(row["Code (R\xE9f\xE9rence)"] || "").trim() || void 0,
          type,
          categoryId: this.getCategoryId(String(row["Cat\xE9gorie"] || "")),
          standardPrice: parseFloat(row["Prix Achat (FCFA)"]) || 0,
          salePrice: parseFloat(row["Prix Vente (FCFA)"]) || 0,
          uomName: String(row["Unit\xE9"] || "Unit\xE9").trim(),
          description: String(row["Description"] || "").trim() || void 0,
          active: true,
          companyId: this.companyId
        };
        try {
          yield this.stockService.createProduct(dto).toPromise();
          done++;
        } catch (e) {
          errors++;
        }
      }
      this.closeImportModal();
      this.load();
      this.showSuccessMsg(`Import termin\xE9 : ${done} cr\xE9\xE9(s), ${errors} erreur(s)`);
    });
  }
  showSuccessMsg(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 5e3);
  }
  static {
    this.\u0275fac = function ProductListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductListComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductListComponent, selectors: [["app-product-list"]], viewQuery: function ProductListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.importInput = _t.first);
      }
    }, decls: 36, vars: 9, consts: [["importInput", ""], [1, "page-container"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "badge-count"], [2, "display", "flex", "gap", "8px", "align-items", "center"], [1, "btn-outline", 3, "click"], [1, "btn-import", 3, "click", "disabled"], [1, "btn-primary", 3, "click"], [1, "alert", "alert-success"], [1, "toolbar"], ["placeholder", "Rechercher par nom, r\xE9f\xE9rence...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "filter-tabs"], [1, "filter-btn", 3, "active"], [1, "card"], [1, "empty"], [1, "data-table"], [1, "modal-overlay"], [1, "filter-btn", 3, "click"], [1, "material-icons", "spin"], [1, "text-right"], [1, "font-mono", "text-muted"], [1, "font-bold"], [1, "text-muted"], [1, "type-badge"], [1, "text-right", "font-mono"], [3, "class"], ["title", "Modifier", 1, "btn-icon", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal", 2, "max-width", "800px", 3, "click"], [1, "modal-header"], [1, "material-icons", 2, "vertical-align", "middle", "color", "#017E84"], [1, "btn-close", 3, "click"], [2, "overflow-x", "auto", "max-height", "50vh"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "font-mono"], [1, "modal", 3, "click"], [1, "modal-body"], [1, "alert", "alert-danger"], [1, "form-row"], [1, "form-group"], ["type", "text", "placeholder", "REF-001", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "required-field"], [1, "req"], ["type", "text", "placeholder", "Nom de l'article", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "value"], ["value", "product"], ["value", "service"], ["value", "consu"], ["type", "text", "placeholder", "Unit\xE9, kg, L...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click", "disabled"], ["type", "text", "placeholder", "311000", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function ProductListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "input", 2, 0);
        \u0275\u0275listener("change", function ProductListComponent_Template_input_change_1_listener($event) {
          return ctx.onImportFileChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h1", 5)(6, "span", 6);
        \u0275\u0275text(7, "category");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, " Articles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 8)(12, "button", 9);
        \u0275\u0275listener("click", function ProductListComponent_Template_button_click_12_listener() {
          return ctx.downloadTemplate();
        });
        \u0275\u0275elementStart(13, "span", 6);
        \u0275\u0275text(14, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Mod\xE8le Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 10);
        \u0275\u0275listener("click", function ProductListComponent_Template_button_click_16_listener() {
          return ctx.triggerImport();
        });
        \u0275\u0275elementStart(17, "span", 6);
        \u0275\u0275text(18, "upload_file");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 11);
        \u0275\u0275listener("click", function ProductListComponent_Template_button_click_20_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275elementStart(21, "span", 6);
        \u0275\u0275text(22, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Nouvel article ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(24, ProductListComponent_Conditional_24_Template, 4, 1, "div", 12);
        \u0275\u0275elementStart(25, "div", 13)(26, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_26_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 15);
        \u0275\u0275repeaterCreate(28, ProductListComponent_For_29_Template, 2, 3, "button", 16, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 17);
        \u0275\u0275conditionalCreate(31, ProductListComponent_Conditional_31_Template, 5, 0, "div", 18)(32, ProductListComponent_Conditional_32_Template, 5, 0, "div", 18)(33, ProductListComponent_Conditional_33_Template, 23, 0, "table", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(34, ProductListComponent_Conditional_34_Template, 38, 2, "div", 20);
        \u0275\u0275conditionalCreate(35, ProductListComponent_Conditional_35_Template, 66, 14, "div", 20);
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1("", ctx.filtered.length, " article(s)");
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", ctx.importLoading);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.importLoading ? "Lecture..." : "Importer Excel", " ");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.successMsg ? 24 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(8, _c1));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading ? 31 : ctx.filtered.length === 0 ? 32 : 33);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showImportModal ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal ? 35 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #2c7be5;\n  font-size: 22px;\n}\n.page-header[_ngcontent-%COMP%]   .badge-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n  background: #e9ecef;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  font-size: 13px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 13px;\n  outline: none;\n  width: 280px;\n  font-family: "Roboto", sans-serif;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #2c7be5;\n}\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 20px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: #2c7be5;\n  border-color: #2c7be5;\n  color: white;\n}\n.filter-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  border-color: #2c7be5;\n  color: #2c7be5;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-outline[_ngcontent-%COMP%]:disabled, \n.btn-import[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2c7be5;\n  color: white;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: white;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: #adb5bd;\n  color: #212529;\n}\n.btn-import[_ngcontent-%COMP%] {\n  background: #e8f5f5;\n  color: #017E84;\n  border: 1px solid #b2dfdf;\n}\n.btn-import[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #d0eded;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: white;\n  color: #2c7be5;\n  border: 1px solid #2c7be5;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 24px;\n  color: #6c757d;\n  gap: 10px;\n}\n.empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8faff;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.type-badge[data-type=product][_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.type-badge[data-type=service][_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.type-badge[data-type=consu][_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.qty-ok[_ngcontent-%COMP%] {\n  color: #198754;\n  font-weight: 600;\n}\n.qty-zero[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 600;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  color: #2c7be5;\n  background: #e8f0fb;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  width: 640px;\n  max-width: 100%;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n  border-bottom: 1px solid #e9ecef;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #6c757d;\n}\n.btn-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  color: #212529;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 22px;\n  overflow-y: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 14px 22px;\n  border-top: 1px solid #e9ecef;\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin-bottom: 14px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 14px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #2c7be5;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n/*# sourceMappingURL=product-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductListComponent, [{
    type: Component,
    args: [{ selector: "app-product-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <!-- Input file cach\xE9 -->
  <input #importInput type="file" accept=".xlsx,.xls" style="display:none" (change)="onImportFileChange($event)" />

  <div class="page-header">
    <div class="header-left">
      <h1 class="page-title"><span class="material-icons">category</span> Articles</h1>
      <span class="badge-count">{{ filtered.length }} article(s)</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center">
      <button class="btn-outline" (click)="downloadTemplate()">
        <span class="material-icons">download</span> Mod\xE8le Excel
      </button>
      <button class="btn-import" (click)="triggerImport()" [disabled]="importLoading">
        <span class="material-icons">upload_file</span> {{ importLoading ? 'Lecture...' : 'Importer Excel' }}
      </button>
      <button class="btn-primary" (click)="openCreate()">
        <span class="material-icons">add</span> Nouvel article
      </button>
    </div>
  </div>

  @if (successMsg) { <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div> }

  <div class="toolbar">
    <input class="search-input" placeholder="Rechercher par nom, r\xE9f\xE9rence..." [(ngModel)]="search" (ngModelChange)="applyFilter()" />
    <div class="filter-tabs">
      @for (t of ['all','product','service','consu']; track t) {
        <button class="filter-btn" [class.active]="filterType === t" (click)="filterType = t; applyFilter()">
          {{ t === 'all' ? 'Tous' : typeLabels[t] }}
        </button>
      }
    </div>
  </div>

  <div class="card">
    @if (loading) {
      <div class="empty"><span class="material-icons spin">refresh</span><p>Chargement...</p></div>
    } @else if (filtered.length === 0) {
      <div class="empty"><span class="material-icons">category</span><p>Aucun article trouv\xE9</p></div>
    } @else {
      <table class="data-table">
        <thead>
          <tr>
            <th>R\xE9f\xE9rence</th>
            <th>Nom</th>
            <th>Cat\xE9gorie</th>
            <th>Type</th>
            <th>Unit\xE9</th>
            <th class="text-right">CMUP</th>
            <th class="text-right">Prix vente</th>
            <th class="text-right">Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @for (p of filtered; track p.id) {
            <tr>
              <td class="font-mono text-muted">{{ p.defaultCode || '\u2014' }}</td>
              <td class="font-bold">{{ p.name }}</td>
              <td class="text-muted">{{ p.categoryName || '\u2014' }}</td>
              <td><span class="type-badge" [attr.data-type]="p.type">{{ typeLabels[p.type] }}</span></td>
              <td class="text-muted">{{ p.uomName || '\u2014' }}</td>
              <td class="text-right font-mono">{{ p.standardPrice | number:'1.0-2' }}</td>
              <td class="text-right font-mono">{{ p.salePrice | number:'1.0-2' }}</td>
              <td class="text-right">
                @if (p.type === 'product') {
                  <span [class]="(p.qtyOnHand || 0) <= 0 ? 'qty-zero' : 'qty-ok'">{{ p.qtyOnHand | number:'1.0-2' }}</span>
                } @else { <span class="text-muted">\u2014</span> }
              </td>
              <td>
                <button class="btn-icon" (click)="openEdit(p)" title="Modifier">
                  <span class="material-icons">edit</span>
                </button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    }
  </div>
</div>

<!-- Modal Import Excel Articles -->
@if (showImportModal) {
  <div class="modal-overlay" (click)="closeImportModal()">
    <div class="modal" (click)="$event.stopPropagation()" style="max-width:800px">
      <div class="modal-header">
        <h2><span class="material-icons" style="vertical-align:middle;color:#017E84">upload_file</span> Aper\xE7u import articles ({{ importRows.length }} ligne(s))</h2>
        <button class="btn-close" (click)="closeImportModal()"><span class="material-icons">close</span></button>
      </div>
      <div style="overflow-x:auto;max-height:50vh">
        <table class="data-table">
          <thead><tr><th>#</th><th>Nom</th><th>Code</th><th>Type</th><th>Cat\xE9gorie</th><th class="text-right">Prix Achat</th><th class="text-right">Prix Vente</th></tr></thead>
          <tbody>
            @for (row of importRows; track $index; let i = $index) {
              <tr>
                <td class="text-muted">{{ i+1 }}</td>
                <td class="font-bold">{{ row['Nom*'] || row['Nom'] }}</td>
                <td class="font-mono">{{ row['Code (R\xE9f\xE9rence)'] || '\u2014' }}</td>
                <td>{{ row['Type (product/service/consu)'] || 'product' }}</td>
                <td>{{ row['Cat\xE9gorie'] || '\u2014' }}</td>
                <td class="text-right">{{ row['Prix Achat (FCFA)'] || '0' }}</td>
                <td class="text-right">{{ row['Prix Vente (FCFA)'] || '0' }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" (click)="closeImportModal()">Annuler</button>
        <button class="btn-primary" (click)="confirmImport()">
          <span class="material-icons">check_circle</span> Confirmer l'import ({{ importRows.length }} articles)
        </button>
      </div>
    </div>
  </div>
}

<!-- Modal cr\xE9ation/\xE9dition -->
@if (showModal) {
  <div class="modal-overlay" (click)="closeModal()">
    <div class="modal" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h2>{{ editingProduct ? 'Modifier' : 'Nouvel article' }}</h2>
        <button class="btn-close" (click)="closeModal()"><span class="material-icons">close</span></button>
      </div>
      <div class="modal-body">
        @if (errorMsg) { <div class="alert alert-danger">{{ errorMsg }}</div> }
        <div class="form-row">
          <div class="form-group">
            <label>R\xE9f\xE9rence (SKU)</label>
            <input type="text" [(ngModel)]="form.defaultCode" class="form-control" placeholder="REF-001" />
          </div>
          <div class="form-group required-field">
            <label>Nom <span class="req">*</span></label>
            <input type="text" [(ngModel)]="form.name" class="form-control" placeholder="Nom de l'article" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Cat\xE9gorie</label>
            <select [(ngModel)]="form.categoryId" class="form-control">
              <option [ngValue]="null">\u2014 Aucune \u2014</option>
              @for (c of categories; track c.id) { <option [value]="c.id">{{ c.name }}</option> }
            </select>
          </div>
          <div class="form-group">
            <label>Type</label>
            <select [(ngModel)]="form.type" class="form-control">
              <option value="product">Stockable</option>
              <option value="service">Service</option>
              <option value="consu">Consommable</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Unit\xE9 de mesure</label>
            <input type="text" [(ngModel)]="form.uomName" class="form-control" placeholder="Unit\xE9, kg, L..." />
          </div>
          <div class="form-group">
            <label>Prix de revient (CMUP)</label>
            <input type="number" [(ngModel)]="form.standardPrice" class="form-control" min="0" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Prix de vente</label>
            <input type="number" [(ngModel)]="form.salePrice" class="form-control" min="0" />
          </div>
          @if (form.type === 'product') {
            <div class="form-group">
              <label>Compte stock OHADA</label>
              <input type="text" [(ngModel)]="form.stockAccountCode" class="form-control" placeholder="311000" />
            </div>
          }
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea [(ngModel)]="form.description" class="form-control" rows="2"></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" (click)="closeModal()">Annuler</button>
        <button class="btn-primary" (click)="save()" [disabled]="saving">
          <span class="material-icons">save</span> {{ saving ? 'Enregistrement...' : 'Enregistrer' }}
        </button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/stock/components/products/product-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: #2c7be5;\n  font-size: 22px;\n}\n.page-header .badge-count {\n  font-size: 12px;\n  color: #6c757d;\n  background: #e9ecef;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  font-size: 13px;\n}\n.alert .material-icons {\n  font-size: 16px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.alert.alert-danger {\n  background: #fde8e8;\n  color: #721c24;\n}\n.toolbar {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.search-input {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 13px;\n  outline: none;\n  width: 280px;\n  font-family: "Roboto", sans-serif;\n}\n.search-input:focus {\n  border-color: #2c7be5;\n}\n.filter-tabs {\n  display: flex;\n  gap: 4px;\n}\n.filter-btn {\n  padding: 6px 14px;\n  border: 1px solid #dee2e6;\n  background: white;\n  border-radius: 20px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.filter-btn.active {\n  background: #2c7be5;\n  border-color: #2c7be5;\n  color: white;\n}\n.filter-btn:hover:not(.active) {\n  border-color: #2c7be5;\n  color: #2c7be5;\n}\n.btn-primary,\n.btn-outline,\n.btn-import {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary .material-icons,\n.btn-outline .material-icons,\n.btn-import .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-outline:disabled,\n.btn-import:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: #2c7be5;\n  color: white;\n  border: none;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-outline {\n  background: white;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.btn-outline:hover {\n  border-color: #adb5bd;\n  color: #212529;\n}\n.btn-import {\n  background: #e8f5f5;\n  color: #017E84;\n  border: 1px solid #b2dfdf;\n}\n.btn-import:hover:not(:disabled) {\n  background: #d0eded;\n}\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: white;\n  color: #2c7be5;\n  border: 1px solid #2c7be5;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 24px;\n  color: #6c757d;\n  gap: 10px;\n}\n.empty .material-icons {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.empty p {\n  margin: 0;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  text-align: left;\n}\n.data-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.data-table tbody tr:hover td {\n  background: #f8faff;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: #adb5bd;\n}\n.type-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.type-badge[data-type=product] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.type-badge[data-type=service] {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.type-badge[data-type=consu] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.qty-ok {\n  color: #198754;\n  font-weight: 600;\n}\n.qty-zero {\n  color: #dc3545;\n  font-weight: 600;\n}\n.btn-icon {\n  background: none;\n  border: none;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n}\n.btn-icon .material-icons {\n  font-size: 18px;\n}\n.btn-icon:hover {\n  color: #2c7be5;\n  background: #e8f0fb;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal {\n  background: white;\n  border-radius: 10px;\n  width: 640px;\n  max-width: 100%;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n  border-bottom: 1px solid #e9ecef;\n}\n.modal-header h2 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.btn-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #6c757d;\n}\n.btn-close .material-icons {\n  font-size: 20px;\n}\n.btn-close:hover {\n  color: #212529;\n}\n.modal-body {\n  padding: 20px 22px;\n  overflow-y: auto;\n}\n.modal-footer {\n  padding: 14px 22px;\n  border-top: 1px solid #e9ecef;\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin-bottom: 14px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 14px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.form-group .req {\n  color: #dc3545;\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control:focus {\n  border-color: #2c7be5;\n}\ntextarea.form-control {\n  resize: vertical;\n}\n/*# sourceMappingURL=product-list.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }], { importInput: [{
    type: ViewChild,
    args: ["importInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductListComponent, { className: "ProductListComponent", filePath: "src/app/modules/stock/components/products/product-list.component.ts", lineNumber: 19 });
})();
export {
  ProductListComponent
};
//# sourceMappingURL=chunk-LLP6EMDT.js.map
