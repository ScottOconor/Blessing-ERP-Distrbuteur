import {
  PurchaseService
} from "./chunk-T7PR2AZC.js";
import {
  StockService
} from "./chunk-VJTDSZQK.js";
import {
  SalesService
} from "./chunk-PDYKRBTO.js";
import {
  downloadExcelTemplate,
  parseExcelFile
} from "./chunk-RZFOQ7J2.js";
import "./chunk-ZJANBOXO.js";
import {
  ActivatedRoute
} from "./chunk-4W3TIS2I.js";
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
  AccountingService
} from "./chunk-PGZXUWCB.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
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
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NJUNWWEJ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/stock/components/products/product-list.component.ts
var _c0 = ["importInput"];
var _c1 = ["photoInput"];
var _c2 = () => ({ k: "autres", label: "Tous", icon: "apps" });
var _c3 = () => ({ k: "articles", label: "Articles", icon: "local_bar" });
var _c4 = () => ({ k: "emballages", label: "Emballages", icon: "inventory_2" });
var _c5 = () => ({ k: "bouteilles", label: "Bouteilles", icon: "liquor" });
var _c6 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.k;
var _forTrack3 = ($index, $item) => $item.clientId;
var _forTrack4 = ($index, $item) => $item.fournisseurId;
function ProductListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadTemplate());
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Mod\xE8le Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 26);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.triggerImport());
    });
    \u0275\u0275elementStart(5, "span", 7);
    \u0275\u0275text(6, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.importLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.importLoading ? "Lecture..." : "Importer Excel", " ");
  }
}
function ProductListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCreate());
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.serviceMode ? "Nouveau service" : "Nouvel article", " ");
  }
}
function ProductListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 7);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.successMsg);
  }
}
function ProductListComponent_Conditional_17_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r6 = ctx.$implicit;
    \u0275\u0275property("value", wh_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(wh_r6.name);
  }
}
function ProductListComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_17_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedWarehouseId, $event) || (ctx_r2.selectedWarehouseId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ProductListComponent_Conditional_17_Template_select_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onWarehouseChange());
    });
    \u0275\u0275elementStart(1, "option", 29);
    \u0275\u0275text(2, "Tous les entrep\xF4ts");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ProductListComponent_Conditional_17_For_4_Template, 2, 2, "option", 30, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedWarehouseId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.warehouses);
  }
}
function ProductListComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_18_For_2_Template_button_click_0_listener() {
      const tab_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.filterCat = tab_r8.k;
      return \u0275\u0275resetView(ctx_r2.applyFilter());
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.filterCat === tab_r8.k);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r8.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r8.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.catCounts[tab_r8.k]);
  }
}
function ProductListComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, ProductListComponent_Conditional_18_For_2_Template, 6, 5, "button", 31, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction4(4, _c6, \u0275\u0275pureFunction0(0, _c2), \u0275\u0275pureFunction0(1, _c3), \u0275\u0275pureFunction0(2, _c4), \u0275\u0275pureFunction0(3, _c5)));
  }
}
function ProductListComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function ProductListComponent_For_24_Template_button_click_0_listener() {
      const opt_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setGroupBy(opt_r10.key));
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.groupBy === opt_r10.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r10.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r10.label, " ");
  }
}
function ProductListComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setGroupBy(""));
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Annuler ");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 36);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 7);
    \u0275\u0275text(2, "category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun article trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_Conditional_29_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 37);
    \u0275\u0275text(1, "En stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "th", 37);
    \u0275\u0275text(3, "R\xE9serv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 37);
    \u0275\u0275text(5, "Disponible");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const p_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, p_r14.qtyOnHand, "1.0-2"), " ");
  }
}
function ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, p_r14.qtyReserved, "1.0-2"));
  }
}
function ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMap((p_r14.qtyAvailable || 0) <= 0 ? "qty-zero" : "qty-ok");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 3, p_r14.qtyAvailable, "1.0-2"));
  }
}
function ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275conditionalCreate(1, ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_18_Conditional_1_Template, 2, 4)(2, ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_18_Conditional_2_Template, 2, 0, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 37);
    \u0275\u0275conditionalCreate(4, ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_18_Conditional_4_Template, 3, 4, "span", 52)(5, ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_18_Conditional_5_Template, 2, 0, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 37);
    \u0275\u0275conditionalCreate(7, ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_18_Conditional_7_Template, 3, 6, "span", 53)(8, ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_18_Conditional_8_Template, 2, 0, "span", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r14.type === "product" ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(p_r14.type === "product" && (p_r14.qtyReserved || 0) > 0 ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(p_r14.type === "product" ? 7 : 8);
  }
}
function ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const p_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.openEdit(p_r14));
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const p_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.deleteProduct(p_r14));
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 43)(1, "td", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 46);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 48);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 48);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_18_Template, 9, 3);
    \u0275\u0275elementStart(19, "td", 49);
    \u0275\u0275conditionalCreate(20, ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_20_Template, 3, 0, "button", 50);
    \u0275\u0275conditionalCreate(21, ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Conditional_21_Template, 3, 0, "button", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r14.defaultCode || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r14.categoryName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-type", p_r14.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.typeLabels[p_r14.type]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r14.uomName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 11, p_r14.standardPrice, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 14, p_r14.salePrice, "1.0-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.serviceMode ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.canEdit ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canDelete ? 21 : -1);
  }
}
function ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_For_1_Template, 22, 17, "tr", 43, _forTrack1);
  }
  if (rf & 2) {
    const row_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r2.getGroupItems(row_r13.key));
  }
}
function ProductListComponent_Conditional_29_Conditional_20_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 38);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_29_Conditional_20_For_1_Template_tr_click_0_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleGroup(row_r13.key));
    });
    \u0275\u0275elementStart(1, "td", 39)(2, "span", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, ProductListComponent_Conditional_29_Conditional_20_For_1_Conditional_8_Template, 2, 0);
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.serviceMode ? 8 : 11);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isExpanded(row_r13.key) ? "expand_more" : "chevron_right");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r13.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", row_r13.count, " article(s)");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isExpanded(row_r13.key) ? 8 : -1);
  }
}
function ProductListComponent_Conditional_29_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProductListComponent_Conditional_29_Conditional_20_For_1_Template, 9, 5, null, null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.groupedRows);
  }
}
function ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const p_r17 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, p_r17.qtyOnHand, "1.0-2"), " ");
  }
}
function ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r17 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, p_r17.qtyReserved, "1.0-2"));
  }
}
function ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r17 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMap((p_r17.qtyAvailable || 0) <= 0 ? "qty-zero" : "qty-ok");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 3, p_r17.qtyAvailable, "1.0-2"));
  }
}
function ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_18_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 48);
    \u0275\u0275conditionalCreate(1, ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_18_Conditional_1_Template, 2, 4)(2, ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_18_Conditional_2_Template, 2, 0, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 37);
    \u0275\u0275conditionalCreate(4, ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_18_Conditional_4_Template, 3, 4, "span", 52)(5, ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_18_Conditional_5_Template, 2, 0, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 37);
    \u0275\u0275conditionalCreate(7, ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_18_Conditional_7_Template, 3, 6, "span", 53)(8, ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_18_Conditional_8_Template, 2, 0, "span", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r17.type === "product" ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(p_r17.type === "product" && (p_r17.qtyReserved || 0) > 0 ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(p_r17.type === "product" ? 7 : 8);
  }
}
function ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const p_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openEdit(p_r17));
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const p_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.deleteProduct(p_r17));
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_Conditional_29_Conditional_21_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 46);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 48);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 48);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_18_Template, 9, 3);
    \u0275\u0275elementStart(19, "td", 49);
    \u0275\u0275conditionalCreate(20, ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_20_Template, 3, 0, "button", 50);
    \u0275\u0275conditionalCreate(21, ProductListComponent_Conditional_29_Conditional_21_For_1_Conditional_21_Template, 3, 0, "button", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r17.defaultCode || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r17.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r17.categoryName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-type", p_r17.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.typeLabels[p_r17.type]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r17.uomName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 11, p_r17.standardPrice, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 14, p_r17.salePrice, "1.0-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.serviceMode ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.canEdit ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canDelete ? 21 : -1);
  }
}
function ProductListComponent_Conditional_29_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProductListComponent_Conditional_29_Conditional_21_For_1_Template, 22, 17, "tr", null, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.filtered);
  }
}
function ProductListComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 23)(1, "thead")(2, "tr")(3, "th");
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
    \u0275\u0275elementStart(13, "th", 37);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 37);
    \u0275\u0275text(16, "Prix vente");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, ProductListComponent_Conditional_29_Conditional_17_Template, 6, 0);
    \u0275\u0275element(18, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275conditionalCreate(20, ProductListComponent_Conditional_29_Conditional_20_Template, 2, 0)(21, ProductListComponent_Conditional_29_Conditional_21_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r2.serviceMode ? "Co\xFBt" : "CMUP");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r2.serviceMode ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.groupBy ? 20 : 21);
  }
}
function ProductListComponent_Conditional_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "div", 65);
    \u0275\u0275elementStart(2, "p", 66);
    \u0275\u0275text(3, "Importation en cours\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 67);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.importRows.length, " ligne(s) en cours de traitement");
  }
}
function ProductListComponent_Conditional_30_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 68);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    const \u0275$index_382_r22 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_382_r22 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r21["Nom"] || row_r21["Nom*"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r21["R\xE9f\xE9rence interne"] || row_r21["Code (R\xE9f\xE9rence)"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r21["Cat\xE9gorie d'article"] || row_r21["Cat\xE9gorie"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r21["Co\xFBt"] || row_r21["Prix Achat (FCFA)"] || "0");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r21["Prix de vente"] || row_r21["Prix Vente (FCFA)"] || "0");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r21["Unit\xE9 de mesure"] || row_r21["Unit\xE9"] || "Unit\xE9");
  }
}
function ProductListComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_30_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeImportModal());
    });
    \u0275\u0275elementStart(1, "div", 57);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_30_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(2, ProductListComponent_Conditional_30_Conditional_2_Template, 6, 1, "div", 58);
    \u0275\u0275elementStart(3, "div", 59)(4, "h2")(5, "span", 60);
    \u0275\u0275text(6, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 61);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_30_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeImportModal());
    });
    \u0275\u0275elementStart(9, "span", 7);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 62)(12, "table", 23)(13, "thead")(14, "tr")(15, "th");
    \u0275\u0275text(16, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "R\xE9f\xE9rence interne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 37);
    \u0275\u0275text(24, "Co\xFBt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 37);
    \u0275\u0275text(26, "Prix vente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Unit\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275repeaterCreate(30, ProductListComponent_Conditional_30_For_31_Template, 15, 7, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 63)(33, "button", 64);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_30_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeImportModal());
    });
    \u0275\u0275text(34, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 27);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_30_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmImport());
    });
    \u0275\u0275elementStart(36, "span", 7);
    \u0275\u0275text(37, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.importLoading ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Aper\xE7u import articles (", ctx_r2.importRows.length, " ligne(s))");
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r2.importRows);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Confirmer l'import (", ctx_r2.importRows.length, " articles) ");
  }
}
function ProductListComponent_Conditional_31_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMsg);
  }
}
function ProductListComponent_Conditional_31_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r24 = ctx.$implicit;
    \u0275\u0275property("value", c_r24.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r24.name);
  }
}
function ProductListComponent_Conditional_31_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "label");
    \u0275\u0275text(2, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 77);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_31_Conditional_30_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.type, $event) || (ctx_r2.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 94);
    \u0275\u0275text(5, "Stockable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 95);
    \u0275\u0275text(7, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 96);
    \u0275\u0275text(9, "Consommable");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.type);
  }
}
function ProductListComponent_Conditional_31_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r26 = ctx.$implicit;
    \u0275\u0275property("value", u_r26.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r26.name);
  }
}
function ProductListComponent_Conditional_31_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 97);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_31_Conditional_40_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.uomName, $event) || (ctx_r2.form.uomName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.uomName);
  }
}
function ProductListComponent_Conditional_31_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "label");
    \u0275\u0275text(2, "Compte stock OHADA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 98);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_31_Conditional_50_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.stockAccountCode, $event) || (ctx_r2.form.stockAccountCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.stockAccountCode);
  }
}
function ProductListComponent_Conditional_31_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 83);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.photoPreviewUrl, \u0275\u0275sanitizeUrl);
  }
}
function ProductListComponent_Conditional_31_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "span", 7);
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_Conditional_31_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 99);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_31_Conditional_64_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removePhoto());
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Retirer ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.uploadingPhoto);
  }
}
function ProductListComponent_Conditional_31_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 Aucune TVA ne sera appliqu\xE9e sur les lignes de facturation vente de cet article ");
  }
}
function ProductListComponent_Conditional_31_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 La TVA standard (19,25%) sera appliqu\xE9e sur les factures de vente ");
  }
}
function ProductListComponent_Conditional_31_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 Aucune TVA ne sera appliqu\xE9e sur les lignes de facturation achat de cet article ");
  }
}
function ProductListComponent_Conditional_31_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 La TVA standard (19,25%) sera appliqu\xE9e sur les factures d'achat ");
  }
}
function ProductListComponent_Conditional_31_Conditional_85_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 104);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.productPrices.length);
  }
}
function ProductListComponent_Conditional_31_Conditional_85_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_Conditional_31_Conditional_85_Conditional_9_Conditional_2_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 119);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 120);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 118);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 121)(13, "button", 122);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_31_Conditional_85_Conditional_9_Conditional_2_For_14_Template_button_click_13_listener() {
      const p_r33 = \u0275\u0275restoreView(_r32).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.removeClientPrice(p_r33));
    });
    \u0275\u0275elementStart(14, "span", 7);
    \u0275\u0275text(15, "delete_outline");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r33 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r33.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 4, p_r33.salePriceStandard ?? 0, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 7, p_r33.prixClient, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2013 ", \u0275\u0275pipeBind2(11, 10, p_r33.rabaisUnitaire ?? 0, "1.0-0"));
  }
}
function ProductListComponent_Conditional_31_Conditional_85_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 110)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 37);
    \u0275\u0275text(6, "Prix standard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 37);
    \u0275\u0275text(8, "Prix client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 118);
    \u0275\u0275text(10, "Rabais/u");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, ProductListComponent_Conditional_31_Conditional_85_Conditional_9_Conditional_2_For_14_Template, 16, 13, "tr", null, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r2.productPrices);
  }
}
function ProductListComponent_Conditional_31_Conditional_85_Conditional_9_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r34 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r34.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r34.name);
  }
}
function ProductListComponent_Conditional_31_Conditional_85_Conditional_9_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 115);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2013 ", \u0275\u0275pipeBind2(2, 1, ctx_r2.newPriceRabais, "1.0-0"));
  }
}
function ProductListComponent_Conditional_31_Conditional_85_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275conditionalCreate(1, ProductListComponent_Conditional_31_Conditional_85_Conditional_9_Conditional_1_Template, 2, 0, "div", 109)(2, ProductListComponent_Conditional_31_Conditional_85_Conditional_9_Conditional_2_Template, 15, 0, "table", 110);
    \u0275\u0275elementStart(3, "div", 111)(4, "select", 112);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_31_Conditional_85_Conditional_9_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.newPriceClientId, $event) || (ctx_r2.newPriceClientId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 78);
    \u0275\u0275text(6, "\u2014 Client \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, ProductListComponent_Conditional_31_Conditional_85_Conditional_9_For_8_Template, 2, 2, "option", 78, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 113)(10, "input", 114);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_31_Conditional_85_Conditional_9_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.newPrixClient, $event) || (ctx_r2.newPrixClient = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ProductListComponent_Conditional_31_Conditional_85_Conditional_9_Conditional_11_Template, 3, 4, "span", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 116);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_31_Conditional_85_Conditional_9_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.saveClientPrice());
    });
    \u0275\u0275elementStart(13, "span", 7);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Ajouter ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 117);
    \u0275\u0275text(17, " Prix standard : ");
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " \u2014 le rabais est calcul\xE9 automatiquement (prix standard \u2212 prix client) ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.loadingPrices ? 1 : ctx_r2.productPrices.length > 0 ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newPriceClientId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.availableClients);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newPrixClient);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.newPrixClient > 0 && (ctx_r2.form.salePrice ?? 0) > 0 ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.newPriceClientId || ctx_r2.newPrixClient <= 0 || ctx_r2.savingPrice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.savingPrice ? "hourglass_empty" : "add");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(20, 8, ctx_r2.form.salePrice ?? 0, "1.0-0"), " FCFA");
  }
}
function ProductListComponent_Conditional_31_Conditional_85_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.productFournisseurPrices.length);
  }
}
function ProductListComponent_Conditional_31_Conditional_85_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function ProductListComponent_Conditional_31_Conditional_85_Conditional_19_Conditional_2_For_14_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const p_r37 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \u2013 ", \u0275\u0275pipeBind2(1, 1, (p_r37.standardPrice ?? 0) - p_r37.prixFournisseur, "1.0-0"), " ");
  }
}
function ProductListComponent_Conditional_31_Conditional_85_Conditional_19_Conditional_2_For_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function ProductListComponent_Conditional_31_Conditional_85_Conditional_19_Conditional_2_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 119);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 120);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 126);
    \u0275\u0275conditionalCreate(10, ProductListComponent_Conditional_31_Conditional_85_Conditional_19_Conditional_2_For_14_Conditional_10_Template, 2, 4)(11, ProductListComponent_Conditional_31_Conditional_85_Conditional_19_Conditional_2_For_14_Conditional_11_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 121)(13, "button", 122);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_31_Conditional_85_Conditional_19_Conditional_2_For_14_Template_button_click_13_listener() {
      const p_r37 = \u0275\u0275restoreView(_r36).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.removeFournisseurPrice(p_r37));
    });
    \u0275\u0275elementStart(14, "span", 7);
    \u0275\u0275text(15, "delete_outline");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r37 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r37.fournisseurName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 4, p_r37.standardPrice ?? 0, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 7, p_r37.prixFournisseur, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((p_r37.standardPrice ?? 0) > p_r37.prixFournisseur ? 10 : 11);
  }
}
function ProductListComponent_Conditional_31_Conditional_85_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 110)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 37);
    \u0275\u0275text(6, "Co\xFBt standard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 37);
    \u0275\u0275text(8, "Prix fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 126);
    \u0275\u0275text(10, "Rabais/u");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, ProductListComponent_Conditional_31_Conditional_85_Conditional_19_Conditional_2_For_14_Template, 16, 10, "tr", null, _forTrack4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r2.productFournisseurPrices);
  }
}
function ProductListComponent_Conditional_31_Conditional_85_Conditional_19_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r38 = ctx.$implicit;
    \u0275\u0275property("ngValue", f_r38.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r38.name);
  }
}
function ProductListComponent_Conditional_31_Conditional_85_Conditional_19_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 124);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2013 ", \u0275\u0275pipeBind2(2, 1, ctx_r2.newFournisseurRabais, "1.0-0"));
  }
}
function ProductListComponent_Conditional_31_Conditional_85_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275conditionalCreate(1, ProductListComponent_Conditional_31_Conditional_85_Conditional_19_Conditional_1_Template, 2, 0, "div", 109)(2, ProductListComponent_Conditional_31_Conditional_85_Conditional_19_Conditional_2_Template, 15, 0, "table", 110);
    \u0275\u0275elementStart(3, "div", 111)(4, "select", 112);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_31_Conditional_85_Conditional_19_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.newFournisseurId, $event) || (ctx_r2.newFournisseurId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 78);
    \u0275\u0275text(6, "\u2014 Fournisseur \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, ProductListComponent_Conditional_31_Conditional_85_Conditional_19_For_8_Template, 2, 2, "option", 78, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 113)(10, "input", 123);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_31_Conditional_85_Conditional_19_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.newPrixFournisseur, $event) || (ctx_r2.newPrixFournisseur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ProductListComponent_Conditional_31_Conditional_85_Conditional_19_Conditional_11_Template, 3, 4, "span", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 125);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_31_Conditional_85_Conditional_19_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.saveFournisseurPrice());
    });
    \u0275\u0275elementStart(13, "span", 7);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Ajouter ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 117);
    \u0275\u0275text(17, " Co\xFBt standard : ");
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " \u2014 le rabais est calcul\xE9 automatiquement (co\xFBt standard \u2212 prix fournisseur) ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.loadingFournisseurPrices ? 1 : ctx_r2.productFournisseurPrices.length > 0 ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newFournisseurId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.availableFournisseurs);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newPrixFournisseur);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.newPrixFournisseur >= 0 && (ctx_r2.form.standardPrice ?? 0) > 0 ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.newFournisseurId || ctx_r2.newPrixFournisseur < 0 || ctx_r2.savingFournisseurPrice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.savingFournisseurPrice ? "hourglass_empty" : "add");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(20, 8, ctx_r2.form.standardPrice ?? 0, "1.0-0"), " FCFA");
  }
}
function ProductListComponent_Conditional_31_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_31_Conditional_85_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showTarifsSection = !ctx_r2.showTarifsSection);
    });
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 102)(5, "span", 103);
    \u0275\u0275text(6, "sell");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Tarifs clients ");
    \u0275\u0275conditionalCreate(8, ProductListComponent_Conditional_31_Conditional_85_Conditional_8_Template, 2, 1, "span", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, ProductListComponent_Conditional_31_Conditional_85_Conditional_9_Template, 22, 11, "div", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 106)(11, "div", 101);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_31_Conditional_85_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showFournisseurTarifsSection = !ctx_r2.showFournisseurTarifsSection);
    });
    \u0275\u0275elementStart(12, "span", 7);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 102)(15, "span", 107);
    \u0275\u0275text(16, "local_shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Tarifs fournisseurs ");
    \u0275\u0275conditionalCreate(18, ProductListComponent_Conditional_31_Conditional_85_Conditional_18_Template, 2, 1, "span", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, ProductListComponent_Conditional_31_Conditional_85_Conditional_19_Template, 22, 11, "div", 105);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.showTarifsSection ? "expand_less" : "expand_more");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.productPrices.length > 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showTarifsSection ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.showFournisseurTarifsSection ? "expand_less" : "expand_more");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.productFournisseurPrices.length > 0 ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showFournisseurTarifsSection ? 19 : -1);
  }
}
function ProductListComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_31_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 59)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 61);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_31_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(6, "span", 7);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 70);
    \u0275\u0275conditionalCreate(9, ProductListComponent_Conditional_31_Conditional_9_Template, 2, 1, "div", 71);
    \u0275\u0275elementStart(10, "div", 72)(11, "div", 73)(12, "label");
    \u0275\u0275text(13, "R\xE9f\xE9rence (SKU)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_31_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.defaultCode, $event) || (ctx_r2.form.defaultCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 75)(16, "label");
    \u0275\u0275text(17, "Nom ");
    \u0275\u0275elementStart(18, "span", 76);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_31_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.name, $event) || (ctx_r2.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 72)(22, "div", 73)(23, "label");
    \u0275\u0275text(24, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 77);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_31_Template_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.categoryId, $event) || (ctx_r2.form.categoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(26, "option", 78);
    \u0275\u0275text(27, "\u2014 Aucune \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(28, ProductListComponent_Conditional_31_For_29_Template, 2, 2, "option", 30, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(30, ProductListComponent_Conditional_31_Conditional_30_Template, 10, 1, "div", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 72)(32, "div", 73)(33, "label");
    \u0275\u0275text(34, "Unit\xE9 de mesure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 77);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_31_Template_select_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.unitOfMeasureId, $event) || (ctx_r2.form.unitOfMeasureId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ProductListComponent_Conditional_31_Template_select_ngModelChange_35_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUomSelect());
    });
    \u0275\u0275elementStart(36, "option", 78);
    \u0275\u0275text(37, "\u2014 Texte libre \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(38, ProductListComponent_Conditional_31_For_39_Template, 2, 2, "option", 30, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(40, ProductListComponent_Conditional_31_Conditional_40_Template, 1, 1, "input", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 73)(42, "label");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_31_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.standardPrice, $event) || (ctx_r2.form.standardPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 72)(46, "div", 73)(47, "label");
    \u0275\u0275text(48, "Prix de vente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_31_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.salePrice, $event) || (ctx_r2.form.salePrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(50, ProductListComponent_Conditional_31_Conditional_50_Template, 4, 1, "div", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 73)(52, "label");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "input", 81, 1);
    \u0275\u0275listener("change", function ProductListComponent_Conditional_31_Template_input_change_54_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPhotoSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 82);
    \u0275\u0275conditionalCreate(57, ProductListComponent_Conditional_31_Conditional_57_Template, 1, 1, "img", 83)(58, ProductListComponent_Conditional_31_Conditional_58_Template, 3, 0, "div", 84);
    \u0275\u0275elementStart(59, "div", 85)(60, "button", 86);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_31_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.triggerPhotoPicker());
    });
    \u0275\u0275elementStart(61, "span", 7);
    \u0275\u0275text(62, "photo_camera");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(64, ProductListComponent_Conditional_31_Conditional_64_Template, 4, 1, "button", 87);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 73)(66, "label");
    \u0275\u0275text(67, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "textarea", 88);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Conditional_31_Template_textarea_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.description, $event) || (ctx_r2.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 73)(70, "label", 89);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_31_Template_label_click_70_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.exemptTva = !ctx_r2.form.exemptTva);
    });
    \u0275\u0275element(71, "span", 90);
    \u0275\u0275elementStart(72, "span", 91);
    \u0275\u0275text(73, " Exempt\xE9 de TVA \xE0 la vente ");
    \u0275\u0275elementStart(74, "span", 92);
    \u0275\u0275conditionalCreate(75, ProductListComponent_Conditional_31_Conditional_75_Template, 1, 0)(76, ProductListComponent_Conditional_31_Conditional_76_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(77, "div", 73)(78, "label", 89);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_31_Template_label_click_78_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.exemptTvaAchat = !ctx_r2.form.exemptTvaAchat);
    });
    \u0275\u0275element(79, "span", 90);
    \u0275\u0275elementStart(80, "span", 91);
    \u0275\u0275text(81, " Exempt\xE9 de TVA \xE0 l'achat ");
    \u0275\u0275elementStart(82, "span", 92);
    \u0275\u0275conditionalCreate(83, ProductListComponent_Conditional_31_Conditional_83_Template, 1, 0)(84, ProductListComponent_Conditional_31_Conditional_84_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(85, ProductListComponent_Conditional_31_Conditional_85_Template, 20, 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 63)(87, "button", 64);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_31_Template_button_click_87_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(88, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "button", 93);
    \u0275\u0275listener("click", function ProductListComponent_Conditional_31_Template_button_click_89_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275elementStart(90, "span", 7);
    \u0275\u0275text(91, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.editingProduct ? ctx_r2.serviceMode ? "Modifier le service" : "Modifier" : ctx_r2.serviceMode ? "Nouveau service" : "Nouvel article");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.errorMsg ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.defaultCode);
    \u0275\u0275property("placeholder", ctx_r2.serviceMode ? "SRV-001" : "REF-001");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.name);
    \u0275\u0275property("placeholder", ctx_r2.serviceMode ? "Nom du service" : "Nom de l'article");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.categoryId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.categories);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.serviceMode ? 30 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.unitOfMeasureId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.uoms);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.form.unitOfMeasureId ? 40 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.serviceMode ? "Co\xFBt (prestataire externe, si applicable)" : "Prix de revient (CMUP)");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.standardPrice);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.salePrice);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.form.type === "product" ? 50 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Photo ", ctx_r2.serviceMode ? "" : "(affich\xE9e dans la liste articles)");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.photoPreviewUrl ? 57 : 58);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.photoPreviewUrl ? "Changer" : "Prendre / choisir une photo", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.photoPreviewUrl ? 64 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.description);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("toggle-on", ctx_r2.form.exemptTva);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.form.exemptTva);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.form.exemptTva ? 75 : 76);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("toggle-on", ctx_r2.form.exemptTvaAchat);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.form.exemptTvaAchat);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.form.exemptTvaAchat ? 83 : 84);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.editingProduct ? 85 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving ? "Enregistrement..." : "Enregistrer", " ");
  }
}
var PRODUCT_HEADERS = ["Nom", "R\xE9f\xE9rence interne", "Prix de vente", "Co\xFBt", "Cat\xE9gorie d'article", "Quantit\xE9 en stock", "Unit\xE9 de mesure", "Exempt\xE9 TVA vente", "Exempt\xE9 TVA achat"];
var PRODUCT_SAMPLE = ["Bi\xE8re Castel 65cl", "CAS65", "700", "500", "Bi\xE8res", "1000", "Caisse", "Non", "Non"];
var SERVICE_HEADERS = ["Nom", "R\xE9f\xE9rence interne", "Prix de vente", "Co\xFBt", "Cat\xE9gorie d'article", "Unit\xE9 de mesure", "Exempt\xE9 TVA vente", "Exempt\xE9 TVA achat"];
var SERVICE_SAMPLE = ["Installation", "SRV-INST", "15000", "0", "", "Forfait", "Non", "Non"];
var ProductListComponent = class _ProductListComponent {
  get newPriceRabais() {
    return Math.max(0, (this.form.salePrice ?? 0) - this.newPrixClient);
  }
  get newFournisseurRabais() {
    return Math.max(0, (this.form.standardPrice ?? 0) - this.newPrixFournisseur);
  }
  constructor(stockService, salesService, purchaseService, accountingService, authService, route) {
    this.stockService = stockService;
    this.salesService = salesService;
    this.purchaseService = purchaseService;
    this.accountingService = accountingService;
    this.authService = authService;
    this.route = route;
    this.serviceMode = false;
    this.products = [];
    this.categories = [];
    this.uoms = [];
    this.filtered = [];
    this.loading = false;
    this.saving = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.search = "";
    this.filterType = "all";
    this.filterCat = "autres";
    this.showModal = false;
    this.editingProduct = null;
    this.warehouses = [];
    this.selectedWarehouseId = "";
    this.form = this.emptyForm();
    this.photoFile = null;
    this.photoPreviewUrl = null;
    this.uploadingPhoto = false;
    this.showImportModal = false;
    this.importRows = [];
    this.importLoading = false;
    this.mainLocationId = null;
    this.showTarifsSection = false;
    this.clients = [];
    this.productPrices = [];
    this.loadingPrices = false;
    this.savingPrice = false;
    this.newPriceClientId = null;
    this.newPrixClient = 0;
    this.showFournisseurTarifsSection = false;
    this.fournisseurs = [];
    this.productFournisseurPrices = [];
    this.loadingFournisseurPrices = false;
    this.savingFournisseurPrice = false;
    this.newFournisseurId = null;
    this.newPrixFournisseur = 0;
    this.canCreate = false;
    this.canEdit = false;
    this.canDelete = false;
    this.canImport = false;
    this.groupBy = "";
    this.expandedGroups = /* @__PURE__ */ new Set();
    this.groupByOptions = [
      { key: "categorie", label: "Cat\xE9gorie", icon: "label" },
      { key: "type", label: "Type", icon: "inventory_2" }
    ];
  }
  ngOnInit() {
    this.serviceMode = this.route.snapshot.data["serviceMode"] === true;
    this.companyId = this.authService.getCompanyId();
    this.canCreate = this.authService.hasPermission("STOCK", "PRODUITS", "CREATE");
    this.canEdit = this.authService.hasPermission("STOCK", "PRODUITS", "EDIT");
    this.canDelete = this.authService.hasPermission("STOCK", "PRODUITS", "DELETE");
    this.canImport = this.authService.hasPermission("STOCK", "PRODUITS", "IMPORT");
    this.load();
  }
  load() {
    this.loading = true;
    const whId = this.selectedWarehouseId !== "" ? +this.selectedWarehouseId : void 0;
    forkJoin({
      products: this.stockService.getProducts(this.companyId, whId),
      categories: this.stockService.getCategories(this.companyId),
      uoms: this.stockService.getUnitsOfMeasure(this.companyId),
      warehouses: this.stockService.getWarehouses(this.companyId)
    }).subscribe({
      next: ({ products, categories, uoms, warehouses }) => {
        this.products = products;
        this.categories = categories;
        this.uoms = uoms;
        this.warehouses = warehouses;
        const mainWh = warehouses.find((w) => w.depotAchatWarehouseId != null) ?? warehouses[0];
        if (mainWh?.stockLocationId)
          this.mainLocationId = mainWh.stockLocationId;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  onWarehouseChange() {
    this.loading = true;
    const whId = this.selectedWarehouseId !== "" ? +this.selectedWarehouseId : void 0;
    this.stockService.getProducts(this.companyId, whId).subscribe({
      next: (products) => {
        this.products = products;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  catGroup(p) {
    const cat = (p.categoryName || "").toLowerCase().trim();
    if (cat.includes("emballage"))
      return "emballages";
    if (cat.startsWith("bouteille"))
      return "bouteilles";
    if (cat)
      return "articles";
    return "autres";
  }
  applyFilter() {
    let list = [...this.products];
    if (this.serviceMode) {
      list = list.filter((p) => p.type === "service");
    }
    if (this.search) {
      const q = this.search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || (p.defaultCode || "").toLowerCase().includes(q));
    }
    if (this.filterCat !== "autres") {
      list = list.filter((p) => this.catGroup(p) === this.filterCat);
    }
    this.filtered = list;
  }
  get catCounts() {
    const source = this.serviceMode ? this.products.filter((p) => p.type === "service") : this.products;
    const counts = { autres: source.length, articles: 0, emballages: 0, bouteilles: 0 };
    source.forEach((p) => {
      const g = this.catGroup(p);
      if (g !== "autres")
        counts[g]++;
    });
    return counts;
  }
  deleteProduct(p) {
    if (!confirm(`Supprimer l'article "${p.name}" ?`))
      return;
    this.stockService.deleteProduct(p.id).subscribe({
      next: () => {
        this.showSuccessMsg("Article supprim\xE9");
        this.load();
      },
      error: (e) => this.showSuccessMsg("Erreur : " + (e.error?.message || "Impossible de supprimer"))
    });
  }
  openCreate() {
    this.editingProduct = null;
    this.form = this.emptyForm();
    this.showModal = true;
    this.errorMsg = "";
    this.resetPhotoState();
  }
  openEdit(p) {
    this.editingProduct = p;
    this.form = __spreadValues({}, p);
    this.showModal = true;
    this.errorMsg = "";
    this.resetPhotoState();
    this.showTarifsSection = false;
    this.showFournisseurTarifsSection = false;
    this.productPrices = [];
    this.productFournisseurPrices = [];
    this.newPriceClientId = null;
    this.newPrixClient = 0;
    this.newFournisseurId = null;
    this.newPrixFournisseur = 0;
    if (!this.clients.length) {
      this.salesService.getClients(this.companyId).subscribe((c) => this.clients = c);
    }
    this.loadProductPrices(p.id);
    this.loadProductFournisseurPrices(p.id);
  }
  closeModal() {
    this.showModal = false;
    this.productPrices = [];
    this.productFournisseurPrices = [];
    if (this.photoPreviewUrl?.startsWith("blob:"))
      URL.revokeObjectURL(this.photoPreviewUrl);
    this.photoFile = null;
    this.photoPreviewUrl = null;
  }
  loadProductPrices(productId) {
    this.loadingPrices = true;
    this.salesService.getClients(this.companyId).subscribe((clients) => {
      this.clients = clients;
      const calls = clients.filter((c) => c.id != null).map((c) => this.salesService.getPrixClientForProduct(productId, c.id, this.companyId));
      if (calls.length === 0) {
        this.loadingPrices = false;
        return;
      }
      forkJoin(calls).subscribe({
        next: (results) => {
          this.productPrices = results.filter((r) => r !== null);
          this.loadingPrices = false;
        },
        error: () => this.loadingPrices = false
      });
    });
  }
  saveClientPrice() {
    const productId = this.editingProduct?.id;
    if (!this.newPriceClientId || !productId)
      return;
    if (this.newPrixClient <= 0) {
      this.errorMsg = "Prix client invalide";
      return;
    }
    this.savingPrice = true;
    const dto = {
      productId,
      clientId: this.newPriceClientId,
      prixClient: this.newPrixClient,
      companyId: this.companyId
    };
    this.salesService.savePrixClient(dto).subscribe({
      next: (saved) => {
        this.savingPrice = false;
        const idx = this.productPrices.findIndex((p) => p.clientId === saved.clientId);
        if (idx >= 0)
          this.productPrices[idx] = saved;
        else
          this.productPrices.push(saved);
        this.newPriceClientId = null;
        this.newPrixClient = 0;
      },
      error: (e) => {
        this.savingPrice = false;
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  removeClientPrice(price) {
    if (!price.id || !confirm(`Supprimer le tarif de ${price.clientName} ?`))
      return;
    this.salesService.deletePrixClient(price.id).subscribe({
      next: () => {
        this.productPrices = this.productPrices.filter((p) => p.id !== price.id);
      },
      error: () => {
        this.errorMsg = "Erreur lors de la suppression";
      }
    });
  }
  get availableClients() {
    const configured = new Set(this.productPrices.map((p) => p.clientId));
    return this.clients.filter((c) => c.id != null && !configured.has(c.id));
  }
  loadProductFournisseurPrices(productId) {
    this.loadingFournisseurPrices = true;
    this.purchaseService.getPrixFournisseurByProduct(productId, this.companyId).subscribe({
      next: (prices) => {
        this.productFournisseurPrices = prices;
        this.loadingFournisseurPrices = false;
      },
      error: () => {
        this.loadingFournisseurPrices = false;
      }
    });
    if (!this.fournisseurs.length) {
      this.accountingService.getPartners(this.companyId).subscribe((partners) => {
        this.fournisseurs = partners.filter((p) => p.type === "supplier" || p.type === "both");
      });
    }
  }
  saveFournisseurPrice() {
    const productId = this.editingProduct?.id;
    if (!this.newFournisseurId || !productId)
      return;
    if (this.newPrixFournisseur < 0) {
      this.errorMsg = "Prix fournisseur invalide";
      return;
    }
    this.savingFournisseurPrice = true;
    const dto = {
      productId,
      fournisseurId: this.newFournisseurId,
      prixFournisseur: this.newPrixFournisseur,
      companyId: this.companyId
    };
    this.purchaseService.savePrixFournisseur(dto).subscribe({
      next: (saved) => {
        this.savingFournisseurPrice = false;
        const idx = this.productFournisseurPrices.findIndex((p) => p.fournisseurId === saved.fournisseurId);
        if (idx >= 0)
          this.productFournisseurPrices[idx] = saved;
        else
          this.productFournisseurPrices.push(saved);
        this.newFournisseurId = null;
        this.newPrixFournisseur = 0;
      },
      error: (e) => {
        this.savingFournisseurPrice = false;
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  removeFournisseurPrice(price) {
    if (!price.id || !confirm(`Supprimer le tarif de ${price.fournisseurName} ?`))
      return;
    this.purchaseService.deletePrixFournisseur(price.id).subscribe({
      next: () => {
        this.productFournisseurPrices = this.productFournisseurPrices.filter((p) => p.id !== price.id);
      },
      error: () => {
        this.errorMsg = "Erreur lors de la suppression";
      }
    });
  }
  get availableFournisseurs() {
    const configured = new Set(this.productFournisseurPrices.map((p) => p.fournisseurId));
    return this.fournisseurs.filter((f) => f.id != null && !configured.has(f.id));
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
      next: (saved) => {
        if (this.photoFile && saved.id) {
          this.stockService.uploadProductPhoto(saved.id, this.photoFile).subscribe({
            next: () => {
              this.saving = false;
              this.showModal = false;
              this.load();
            },
            error: (e) => {
              this.saving = false;
              this.errorMsg = "Article enregistr\xE9, mais erreur sur la photo : " + (e.error?.message || "erreur inconnue");
              this.load();
            }
          });
        } else {
          this.saving = false;
          this.showModal = false;
          this.load();
        }
      },
      error: (e) => {
        this.saving = false;
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  // === Photo article ===
  resetPhotoState() {
    this.photoFile = null;
    if (this.photoPreviewUrl?.startsWith("blob:"))
      URL.revokeObjectURL(this.photoPreviewUrl);
    this.photoPreviewUrl = this.editingProduct?.id && this.editingProduct.hasPhoto ? this.stockService.getProductPhotoUrl(this.editingProduct.id) : null;
  }
  triggerPhotoPicker() {
    this.photoInput?.nativeElement.click();
  }
  onPhotoSelected(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    this.photoFile = file;
    if (this.photoPreviewUrl?.startsWith("blob:"))
      URL.revokeObjectURL(this.photoPreviewUrl);
    this.photoPreviewUrl = URL.createObjectURL(file);
  }
  removePhoto() {
    if (this.photoPreviewUrl?.startsWith("blob:"))
      URL.revokeObjectURL(this.photoPreviewUrl);
    this.photoFile = null;
    this.photoPreviewUrl = null;
    if (!this.editingProduct?.id || !this.editingProduct.hasPhoto)
      return;
    if (!confirm("Supprimer la photo de cet article ?"))
      return;
    this.uploadingPhoto = true;
    this.stockService.deleteProductPhoto(this.editingProduct.id).subscribe({
      next: () => {
        this.uploadingPhoto = false;
        this.editingProduct.hasPhoto = false;
      },
      error: () => {
        this.uploadingPhoto = false;
      }
    });
  }
  emptyForm() {
    return {
      type: this.serviceMode ? "service" : "product",
      active: true,
      uomName: "Unit\xE9",
      standardPrice: 0,
      salePrice: 0,
      exemptTva: false,
      exemptTvaAchat: false
    };
  }
  get typeLabels() {
    return { product: "Stockable", service: "Service", consu: "Consommable" };
  }
  // === Import Excel ===
  downloadTemplate() {
    if (this.serviceMode) {
      downloadExcelTemplate(SERVICE_HEADERS, SERVICE_SAMPLE, "modele_services.xlsx");
    } else {
      downloadExcelTemplate(PRODUCT_HEADERS, PRODUCT_SAMPLE, "modele_articles.xlsx");
    }
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
        this.importRows = rows.filter((r) => r["Nom"] || r["Nom*"]);
        if (this.importRows.length === 0) {
          this.showSuccessMsg('Aucune ligne valide (colonne "Nom" requise)');
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
  getUomId(name) {
    if (!name)
      return void 0;
    return this.uoms.find((u) => u.name?.toLowerCase() === name.toLowerCase())?.id;
  }
  onUomSelect() {
    const uom = this.uoms.find((u) => u.id === this.form.unitOfMeasureId);
    this.form.uomName = uom ? uom.name : void 0;
  }
  parseBoolCell(value) {
    const v = String(value ?? "").trim().toLowerCase();
    return v === "oui" || v === "true" || v === "1" || v === "yes" || v === "x";
  }
  confirmImport() {
    return __async(this, null, function* () {
      this.importLoading = true;
      let done = 0, errors = 0;
      const stockAdjustments = [];
      for (const row of this.importRows) {
        const name = String(row["Nom"] || row["Nom*"] || "").trim();
        if (!name)
          continue;
        const qty = this.serviceMode ? 0 : parseFloat(row["Quantit\xE9 en stock"] || "0") || 0;
        const uomName = String(row["Unit\xE9 de mesure"] || row["Unit\xE9"] || "Unit\xE9").trim();
        const dto = {
          name,
          defaultCode: String(row["R\xE9f\xE9rence interne"] || row["Code (R\xE9f\xE9rence)"] || "").trim() || void 0,
          type: this.serviceMode ? "service" : "product",
          categoryId: this.getCategoryId(String(row["Cat\xE9gorie d'article"] || row["Cat\xE9gorie"] || "")),
          standardPrice: parseFloat(row["Co\xFBt"] || row["Prix Achat (FCFA)"]) || 0,
          salePrice: parseFloat(row["Prix de vente"] || row["Prix Vente (FCFA)"]) || 0,
          uomName,
          unitOfMeasureId: this.getUomId(uomName),
          active: true,
          exemptTva: this.parseBoolCell(row["Exempt\xE9 TVA vente"]),
          exemptTvaAchat: this.parseBoolCell(row["Exempt\xE9 TVA achat"]),
          companyId: this.companyId
        };
        try {
          const created = yield this.stockService.createProduct(dto).toPromise();
          done++;
          if (qty > 0 && created?.id && this.mainLocationId) {
            stockAdjustments.push({
              productId: created.id,
              locationId: this.mainLocationId,
              newQty: qty,
              notes: "Stock initial \u2014 import",
              companyId: this.companyId
            });
          }
        } catch (e) {
          errors++;
        }
      }
      if (stockAdjustments.length > 0) {
        try {
          yield this.stockService.createAdjustmentsBulk(stockAdjustments).toPromise();
        } catch (e) {
        }
      }
      this.importLoading = false;
      this.closeImportModal();
      this.load();
      this.showSuccessMsg(`Import termin\xE9 : ${done} cr\xE9\xE9(s)${stockAdjustments.length > 0 ? ", " + stockAdjustments.length + " stock(s) initialis\xE9(s)" : ""}, ${errors} erreur(s)`);
    });
  }
  showSuccessMsg(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 5e3);
  }
  get groupedRows() {
    if (!this.groupBy)
      return [];
    const source = this.filtered;
    const map = /* @__PURE__ */ new Map();
    for (const item of source) {
      let key, label;
      switch (this.groupBy) {
        case "categorie":
          key = label = item.categoryName || "(Sans cat\xE9gorie)";
          break;
        case "type":
          key = item.type || "?";
          label = this.prodTypeLabel(key);
          break;
        default:
          key = label = "?";
      }
      if (!map.has(key))
        map.set(key, { key, label, count: 0, items: [] });
      const g = map.get(key);
      g.count++;
      g.items.push(item);
    }
    const arr = Array.from(map.values());
    arr.sort((a, b) => a.label.localeCompare(b.label));
    return arr;
  }
  setGroupBy(key) {
    this.groupBy = this.groupBy === key ? "" : key;
    this.expandedGroups.clear();
  }
  toggleGroup(key) {
    if (this.expandedGroups.has(key))
      this.expandedGroups.delete(key);
    else
      this.expandedGroups.add(key);
  }
  isExpanded(key) {
    return this.expandedGroups.has(key);
  }
  getGroupItems(key) {
    return this.groupedRows.find((g) => g.key === key)?.items ?? [];
  }
  prodTypeLabel(t) {
    return { product: "Article stockable", service: "Service / Emballage", consu: "Consommable" }[t] || t;
  }
  static {
    this.\u0275fac = function ProductListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductListComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(PurchaseService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductListComponent, selectors: [["app-product-list"]], viewQuery: function ProductListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5)(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.importInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.photoInput = _t.first);
      }
    }, decls: 32, vars: 14, consts: [["importInput", ""], ["photoInput", ""], [1, "page-container"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "badge-count"], [2, "display", "flex", "gap", "8px", "align-items", "center"], [1, "btn-primary"], [1, "alert", "alert-success"], [1, "toolbar"], ["placeholder", "Rechercher par nom, r\xE9f\xE9rence...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "wh-select", 3, "ngModel"], [1, "filter-tabs"], [1, "groupby-bar"], [1, "groupby-label"], [1, "groupby-btns"], [3, "active"], [1, "groupby-reset"], [1, "card"], [1, "empty"], [1, "data-table"], [1, "modal-overlay"], [1, "btn-outline", 3, "click"], [1, "btn-import", 3, "click", "disabled"], [1, "btn-primary", 3, "click"], [1, "wh-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "filter-btn", 3, "active"], [1, "filter-btn", 3, "click"], [1, "filter-count"], [3, "click"], [1, "groupby-reset", 3, "click"], [1, "material-icons", "spin"], [1, "text-right"], [1, "group-header-row", 3, "click"], [1, "group-header-cell"], [1, "material-icons", "expand-icon"], [1, "group-label"], [1, "badge"], [1, "detail-row"], [1, "font-mono", "text-muted"], [1, "font-bold"], [1, "text-muted"], [1, "type-badge"], [1, "text-right", "font-mono"], [2, "display", "flex", "gap", "4px"], ["title", "Modifier", 1, "btn-icon"], ["title", "Supprimer", 1, "btn-icon", "btn-icon-danger"], [1, "qty-reserved"], [3, "class"], ["title", "Modifier", 1, "btn-icon", 3, "click"], ["title", "Supprimer", 1, "btn-icon", "btn-icon-danger", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal", 2, "max-width", "800px", "position", "relative", 3, "click"], [2, "position", "absolute", "inset", "0", "background", "rgba(255,255,255,0.9)", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "z-index", "10", "border-radius", "inherit"], [1, "modal-header"], [1, "material-icons", 2, "vertical-align", "middle", "color", "#017E84"], [1, "btn-close", 3, "click"], [2, "overflow-x", "auto", "max-height", "50vh"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "spinner"], [2, "margin-top", "14px", "color", "#017E84", "font-weight", "600"], [2, "font-size", "12px", "color", "#6c757d", "margin-top", "4px"], [1, "font-mono"], [1, "modal", 3, "click"], [1, "modal-body"], [1, "alert", "alert-danger"], [1, "form-row"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "form-group", "required-field"], [1, "req"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "text", "placeholder", "Unit\xE9, kg, L...", 1, "form-control", 2, "margin-top", "6px", 3, "ngModel"], ["type", "number", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", "image/*", "capture", "environment", 2, "display", "none", 3, "change"], [1, "photo-field"], ["alt", "", 1, "photo-preview", 3, "src"], [1, "photo-placeholder"], [1, "photo-actions"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "button", 1, "btn-secondary", 3, "disabled"], ["rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "toggle-label", 3, "click"], [1, "toggle-slider"], [1, "toggle-text"], [1, "toggle-hint"], [1, "btn-primary", 3, "click", "disabled"], ["value", "product"], ["value", "service"], ["value", "consu"], ["type", "text", "placeholder", "Unit\xE9, kg, L...", 1, "form-control", 2, "margin-top", "6px", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "311000", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn-secondary", 3, "click", "disabled"], [1, "tarifs-block"], [1, "tarifs-toggle", 3, "click"], [1, "tarifs-toggle-label"], [1, "material-icons", 2, "font-size", "16px", "color", "#e65100"], [1, "tarifs-badge"], [1, "tarifs-content"], [1, "tarifs-block", "tarifs-block-fourni"], [1, "material-icons", 2, "font-size", "16px", "color", "#017E84"], [1, "tarifs-badge", "tarifs-badge-fourni"], [1, "tarifs-loading"], [1, "tarifs-table"], [1, "tarifs-add-row"], [1, "tarif-select", 3, "ngModelChange", "ngModel"], [1, "tarif-prix-wrap"], ["type", "number", "placeholder", "Prix client", "min", "0", 1, "tarif-input", 3, "ngModelChange", "ngModel"], [1, "tarif-rabais-preview"], [1, "btn-add-price", 3, "click", "disabled"], [1, "tarif-hint"], [1, "text-right", "rabais-col"], [1, "text-right", "text-muted"], [1, "text-right", "font-bold"], [2, "text-align", "right"], ["title", "Supprimer", 1, "btn-del-price", 3, "click"], ["type", "number", "placeholder", "Prix fournisseur", "min", "0", 1, "tarif-input", 3, "ngModelChange", "ngModel"], [1, "tarif-rabais-preview", "tarif-rabais-fourni"], [1, "btn-add-price", "btn-add-price-fourni", 3, "click", "disabled"], [1, "text-right", "rabais-fourni-col"]], template: function ProductListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "input", 3, 0);
        \u0275\u0275listener("change", function ProductListComponent_Template_input_change_1_listener($event) {
          return ctx.onImportFileChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "h1", 6)(6, "span", 7);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 8);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 9);
        \u0275\u0275conditionalCreate(12, ProductListComponent_Conditional_12_Template, 8, 2);
        \u0275\u0275conditionalCreate(13, ProductListComponent_Conditional_13_Template, 4, 1, "button", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(14, ProductListComponent_Conditional_14_Template, 4, 1, "div", 11);
        \u0275\u0275elementStart(15, "div", 12)(16, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_16_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(17, ProductListComponent_Conditional_17_Template, 5, 1, "select", 14);
        \u0275\u0275conditionalCreate(18, ProductListComponent_Conditional_18_Template, 3, 9, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 16)(20, "span", 17);
        \u0275\u0275text(21, "Regrouper par :");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 18);
        \u0275\u0275repeaterCreate(23, ProductListComponent_For_24_Template, 4, 4, "button", 19, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(25, ProductListComponent_Conditional_25_Template, 4, 0, "button", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 21);
        \u0275\u0275conditionalCreate(27, ProductListComponent_Conditional_27_Template, 5, 0, "div", 22)(28, ProductListComponent_Conditional_28_Template, 5, 0, "div", 22)(29, ProductListComponent_Conditional_29_Template, 22, 3, "table", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(30, ProductListComponent_Conditional_30_Template, 39, 3, "div", 24);
        \u0275\u0275conditionalCreate(31, ProductListComponent_Conditional_31_Template, 93, 34, "div", 24);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.serviceMode ? "design_services" : "category");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.serviceMode ? "Services" : "Articles");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.filtered.length, " ", ctx.serviceMode ? "service(s)" : "article(s)");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.canImport ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.canCreate ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 14 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.serviceMode && ctx.warehouses.length > 1 ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.serviceMode ? 18 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.groupByOptions);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.groupBy ? 25 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading ? 27 : ctx.filtered.length === 0 ? 28 : 29);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showImportModal ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal ? 31 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe], styles: ['@charset "UTF-8";\n\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 22px;\n}\n.page-header[_ngcontent-%COMP%]   .badge-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  font-size: 13px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  outline: none;\n  width: 280px;\n  font-family: "Roboto", sans-serif;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.wh-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  outline: none;\n  font-family: "Roboto", sans-serif;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  cursor: pointer;\n}\n.wh-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n  color: var(--text-muted);\n}\n.filter-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n}\n.filter-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.filter-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.12);\n  font-size: 10px;\n  font-weight: 700;\n}\n.filter-btn.active[_ngcontent-%COMP%]   .filter-count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-outline[_ngcontent-%COMP%]:disabled, \n.btn-import[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--text-muted);\n  color: var(--text-primary);\n}\n.btn-import[_ngcontent-%COMP%] {\n  background: var(--accent-light);\n  color: var(--accent);\n  border: 1px solid #b2dfdf;\n}\n.btn-import[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: var(--bg-surface);\n  color: var(--primary);\n  border: 1px solid #2c7be5;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 10px;\n}\n.empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--border);\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.type-badge[data-type=product][_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--primary);\n}\n.type-badge[data-type=service][_ngcontent-%COMP%] {\n  background: rgba(109, 40, 217, 0.1);\n  color: #7b1fa2;\n}\n.type-badge[data-type=consu][_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: #f57f17;\n}\n.qty-ok[_ngcontent-%COMP%] {\n  color: #198754;\n  font-weight: 600;\n}\n.qty-zero[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n}\n.qty-reserved[_ngcontent-%COMP%] {\n  color: #e07a00;\n  font-weight: 600;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  background: #e8f0fb;\n}\n.btn-icon.btn-icon-danger[_ngcontent-%COMP%]:hover {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  width: 640px;\n  max-width: 100%;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.btn-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 22px;\n  overflow-y: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 14px 22px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin-bottom: 14px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 14px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.photo-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.photo-preview[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  object-fit: cover;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.photo-placeholder[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 8px;\n  border: 1px dashed var(--border);\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.photo-placeholder[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.photo-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.tarifs-block[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tarifs-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: var(--bg-elevated);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.tarifs-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.tarifs-toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.tarifs-badge[_ngcontent-%COMP%] {\n  background: #e65100;\n  color: #fff;\n  border-radius: 10px;\n  padding: 1px 7px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.tarifs-content[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  background: var(--bg-surface);\n}\n.tarifs-loading[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  padding: 8px 0;\n}\n.tarifs-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n  margin-bottom: 12px;\n}\n.tarifs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  padding: 7px 10px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-align: left;\n  border-bottom: 1px solid var(--border-light);\n}\n.tarifs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.tarifs-table[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.tarifs-table[_ngcontent-%COMP%]   .rabais-col[_ngcontent-%COMP%] {\n  color: #e65100;\n  font-weight: 600;\n}\n.tarifs-table[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.tarifs-table[_ngcontent-%COMP%]   .font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.btn-del-price[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #bbb;\n  padding: 2px;\n}\n.btn-del-price[_ngcontent-%COMP%]:hover {\n  color: #e53e3e;\n}\n.tarifs-add-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.tarif-select[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n  padding: 7px 10px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.875rem;\n}\n.tarif-prix-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.tarif-input[_ngcontent-%COMP%] {\n  width: 120px;\n  padding: 7px 10px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.875rem;\n}\n.tarif-rabais-preview[_ngcontent-%COMP%] {\n  color: #e65100;\n  font-weight: 600;\n  font-size: 0.875rem;\n  white-space: nowrap;\n}\n.btn-add-price[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #e65100;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 7px 14px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-add-price[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.btn-add-price[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #bf360c;\n}\n.tarif-hint[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.tarifs-block-fourni[_ngcontent-%COMP%] {\n  border-color: rgba(1, 126, 132, 0.3);\n}\n.tarifs-badge-fourni[_ngcontent-%COMP%] {\n  background: #017E84;\n}\n.tarifs-table[_ngcontent-%COMP%]   .rabais-fourni-col[_ngcontent-%COMP%] {\n  color: #017E84;\n  font-weight: 600;\n}\n.tarif-rabais-fourni[_ngcontent-%COMP%] {\n  color: #017E84;\n  font-weight: 600;\n  font-size: 0.875rem;\n  white-space: nowrap;\n}\n.btn-add-price-fourni[_ngcontent-%COMP%] {\n  background: #017E84;\n}\n.btn-add-price-fourni[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #015f65;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  padding: 10px 14px;\n  background: var(--bg-hover);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: border-color 0.2s, background 0.2s;\n}\n.toggle-label.toggle-on[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.08);\n  border-color: #a5d6a7;\n}\n.toggle-slider[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40px;\n  height: 22px;\n  background: #dee2e6;\n  border-radius: 11px;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.toggle-slider[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: var(--bg-surface);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  transition: transform 0.2s;\n}\n.toggle-slider.active[_ngcontent-%COMP%] {\n  background: #2e7d32;\n}\n.toggle-slider.active[_ngcontent-%COMP%]::after {\n  transform: translateX(18px);\n}\n.toggle-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.toggle-text[_ngcontent-%COMP%]   .toggle-hint[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-weight: 400;\n  font-size: 12px;\n}\n/*# sourceMappingURL=product-list.component.css.map */'] });
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
      <h1 class="page-title"><span class="material-icons">{{ serviceMode ? 'design_services' : 'category' }}</span> {{ serviceMode ? 'Services' : 'Articles' }}</h1>
      <span class="badge-count">{{ filtered.length }} {{ serviceMode ? 'service(s)' : 'article(s)' }}</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center">
      @if (canImport) {
        <button class="btn-outline" (click)="downloadTemplate()">
          <span class="material-icons">download</span> Mod\xE8le Excel
        </button>
        <button class="btn-import" (click)="triggerImport()" [disabled]="importLoading">
          <span class="material-icons">upload_file</span> {{ importLoading ? 'Lecture...' : 'Importer Excel' }}
        </button>
      }
      @if (canCreate) {
        <button class="btn-primary" (click)="openCreate()">
          <span class="material-icons">add</span> {{ serviceMode ? 'Nouveau service' : 'Nouvel article' }}
        </button>
      }
    </div>
  </div>

  @if (successMsg) { <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div> }

  <div class="toolbar">
    <input class="search-input" placeholder="Rechercher par nom, r\xE9f\xE9rence..." [(ngModel)]="search" (ngModelChange)="applyFilter()" />
    @if (!serviceMode && warehouses.length > 1) {
      <select class="wh-select" [(ngModel)]="selectedWarehouseId" (ngModelChange)="onWarehouseChange()">
        <option value="">Tous les entrep\xF4ts</option>
        @for (wh of warehouses; track wh.id) {
          <option [value]="wh.id">{{ wh.name }}</option>
        }
      </select>
    }
    @if (!serviceMode) {
      <div class="filter-tabs">
        @for (tab of [
          { k: 'autres',     label: 'Tous',        icon: 'apps'        },
          { k: 'articles',   label: 'Articles',     icon: 'local_bar'   },
          { k: 'emballages', label: 'Emballages',   icon: 'inventory_2' },
          { k: 'bouteilles', label: 'Bouteilles',   icon: 'liquor'      }
        ]; track tab.k) {
          <button class="filter-btn" [class.active]="filterCat === tab.k"
                  (click)="filterCat = tab.k; applyFilter()">
            <span class="material-icons">{{ tab.icon }}</span>
            {{ tab.label }}
            <span class="filter-count">{{ catCounts[tab.k] }}</span>
          </button>
        }
      </div>
    }
  </div>

  <div class="groupby-bar">
    <span class="groupby-label">Regrouper par :</span>
    <div class="groupby-btns">
      @for (opt of groupByOptions; track opt.key) {
        <button [class.active]="groupBy === opt.key" (click)="setGroupBy(opt.key)">
          <span class="material-icons">{{ opt.icon }}</span> {{ opt.label }}
        </button>
      }
    </div>
    @if (groupBy) {
      <button class="groupby-reset" (click)="setGroupBy('')">
        <span class="material-icons">close</span> Annuler
      </button>
    }
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
            <th class="text-right">{{ serviceMode ? 'Co\xFBt' : 'CMUP' }}</th>
            <th class="text-right">Prix vente</th>
            @if (!serviceMode) {
              <th class="text-right">En stock</th>
              <th class="text-right">R\xE9serv\xE9</th>
              <th class="text-right">Disponible</th>
            }
            <th></th>
          </tr>
        </thead>
        <tbody>
          @if (groupBy) {
            @for (row of groupedRows; track row.key) {
              <tr class="group-header-row" (click)="toggleGroup(row.key)">
                <td class="group-header-cell" [attr.colspan]="serviceMode ? 8 : 11">
                  <span class="material-icons expand-icon">{{ isExpanded(row.key) ? 'expand_more' : 'chevron_right' }}</span>
                  <span class="group-label">{{ row.label }}</span>
                  <span class="badge">{{ row.count }} article(s)</span>
                </td>
              </tr>
              @if (isExpanded(row.key)) {
                @for (p of getGroupItems(row.key); track p.id) {
                  <tr class="detail-row">
                    <td class="font-mono text-muted">{{ p.defaultCode || '\u2014' }}</td>
                    <td class="font-bold">{{ p.name }}</td>
                    <td class="text-muted">{{ p.categoryName || '\u2014' }}</td>
                    <td><span class="type-badge" [attr.data-type]="p.type">{{ typeLabels[p.type] }}</span></td>
                    <td class="text-muted">{{ p.uomName || '\u2014' }}</td>
                    <td class="text-right font-mono">{{ p.standardPrice | number:'1.0-2' }}</td>
                    <td class="text-right font-mono">{{ p.salePrice | number:'1.0-2' }}</td>
                    @if (!serviceMode) {
                      <td class="text-right font-mono">
                        @if (p.type === 'product') { {{ p.qtyOnHand | number:'1.0-2' }}
                        } @else { <span class="text-muted">\u2014</span> }
                      </td>
                      <td class="text-right">
                        @if (p.type === 'product' && (p.qtyReserved || 0) > 0) {
                          <span class="qty-reserved">{{ p.qtyReserved | number:'1.0-2' }}</span>
                        } @else { <span class="text-muted">\u2014</span> }
                      </td>
                      <td class="text-right">
                        @if (p.type === 'product') {
                          <span [class]="(p.qtyAvailable || 0) <= 0 ? 'qty-zero' : 'qty-ok'">{{ p.qtyAvailable | number:'1.0-2' }}</span>
                        } @else { <span class="text-muted">\u2014</span> }
                      </td>
                    }
                    <td style="display:flex;gap:4px">
                      @if (canEdit) {
                        <button class="btn-icon" (click)="openEdit(p)" title="Modifier">
                          <span class="material-icons">edit</span>
                        </button>
                      }
                      @if (canDelete) {
                        <button class="btn-icon btn-icon-danger" (click)="deleteProduct(p)" title="Supprimer">
                          <span class="material-icons">delete</span>
                        </button>
                      }
                    </td>
                  </tr>
                }
              }
            }
          } @else {
            @for (p of filtered; track p.id) {
              <tr>
                <td class="font-mono text-muted">{{ p.defaultCode || '\u2014' }}</td>
                <td class="font-bold">{{ p.name }}</td>
                <td class="text-muted">{{ p.categoryName || '\u2014' }}</td>
                <td><span class="type-badge" [attr.data-type]="p.type">{{ typeLabels[p.type] }}</span></td>
                <td class="text-muted">{{ p.uomName || '\u2014' }}</td>
                <td class="text-right font-mono">{{ p.standardPrice | number:'1.0-2' }}</td>
                <td class="text-right font-mono">{{ p.salePrice | number:'1.0-2' }}</td>
                @if (!serviceMode) {
                  <td class="text-right font-mono">
                    @if (p.type === 'product') { {{ p.qtyOnHand | number:'1.0-2' }}
                    } @else { <span class="text-muted">\u2014</span> }
                  </td>
                  <td class="text-right">
                    @if (p.type === 'product' && (p.qtyReserved || 0) > 0) {
                      <span class="qty-reserved">{{ p.qtyReserved | number:'1.0-2' }}</span>
                    } @else { <span class="text-muted">\u2014</span> }
                  </td>
                  <td class="text-right">
                    @if (p.type === 'product') {
                      <span [class]="(p.qtyAvailable || 0) <= 0 ? 'qty-zero' : 'qty-ok'">{{ p.qtyAvailable | number:'1.0-2' }}</span>
                    } @else { <span class="text-muted">\u2014</span> }
                  </td>
                }
                <td style="display:flex;gap:4px">
                  @if (canEdit) {
                    <button class="btn-icon" (click)="openEdit(p)" title="Modifier">
                      <span class="material-icons">edit</span>
                    </button>
                  }
                  @if (canDelete) {
                    <button class="btn-icon btn-icon-danger" (click)="deleteProduct(p)" title="Supprimer">
                      <span class="material-icons">delete</span>
                    </button>
                  }
                </td>
              </tr>
            }
          }
        </tbody>
      </table>
    }
  </div>
</div>

<!-- Modal Import Excel Articles -->
@if (showImportModal) {
  <div class="modal-overlay" (click)="closeImportModal()">
    <div class="modal" (click)="$event.stopPropagation()" style="max-width:800px;position:relative">
      @if (importLoading) {
        <div style="position:absolute;inset:0;background:rgba(255,255,255,0.9);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10;border-radius:inherit">
          <div class="spinner"></div>
          <p style="margin-top:14px;color:#017E84;font-weight:600">Importation en cours\u2026</p>
          <p style="font-size:12px;color:#6c757d;margin-top:4px">{{ importRows.length }} ligne(s) en cours de traitement</p>
        </div>
      }
      <div class="modal-header">
        <h2><span class="material-icons" style="vertical-align:middle;color:#017E84">upload_file</span> Aper\xE7u import articles ({{ importRows.length }} ligne(s))</h2>
        <button class="btn-close" (click)="closeImportModal()"><span class="material-icons">close</span></button>
      </div>
      <div style="overflow-x:auto;max-height:50vh">
        <table class="data-table">
          <thead><tr><th>#</th><th>Nom</th><th>R\xE9f\xE9rence interne</th><th>Cat\xE9gorie</th><th class="text-right">Co\xFBt</th><th class="text-right">Prix vente</th><th>Unit\xE9</th></tr></thead>
          <tbody>
            @for (row of importRows; track $index; let i = $index) {
              <tr>
                <td class="text-muted">{{ i+1 }}</td>
                <td class="font-bold">{{ row['Nom'] || row['Nom*'] }}</td>
                <td class="font-mono">{{ row['R\xE9f\xE9rence interne'] || row['Code (R\xE9f\xE9rence)'] || '\u2014' }}</td>
                <td>{{ row["Cat\xE9gorie d'article"] || row['Cat\xE9gorie'] || '\u2014' }}</td>
                <td class="text-right">{{ row['Co\xFBt'] || row['Prix Achat (FCFA)'] || '0' }}</td>
                <td class="text-right">{{ row['Prix de vente'] || row['Prix Vente (FCFA)'] || '0' }}</td>
                <td>{{ row['Unit\xE9 de mesure'] || row['Unit\xE9'] || 'Unit\xE9' }}</td>
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
        <h2>{{ editingProduct ? (serviceMode ? 'Modifier le service' : 'Modifier') : (serviceMode ? 'Nouveau service' : 'Nouvel article') }}</h2>
        <button class="btn-close" (click)="closeModal()"><span class="material-icons">close</span></button>
      </div>
      <div class="modal-body">
        @if (errorMsg) { <div class="alert alert-danger">{{ errorMsg }}</div> }
        <div class="form-row">
          <div class="form-group">
            <label>R\xE9f\xE9rence (SKU)</label>
            <input type="text" [(ngModel)]="form.defaultCode" class="form-control" [placeholder]="serviceMode ? 'SRV-001' : 'REF-001'" />
          </div>
          <div class="form-group required-field">
            <label>Nom <span class="req">*</span></label>
            <input type="text" [(ngModel)]="form.name" class="form-control" [placeholder]="serviceMode ? 'Nom du service' : 'Nom de l\\'article'" />
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
          @if (!serviceMode) {
            <div class="form-group">
              <label>Type</label>
              <select [(ngModel)]="form.type" class="form-control">
                <option value="product">Stockable</option>
                <option value="service">Service</option>
                <option value="consu">Consommable</option>
              </select>
            </div>
          }
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Unit\xE9 de mesure</label>
            <select [(ngModel)]="form.unitOfMeasureId" (ngModelChange)="onUomSelect()" class="form-control">
              <option [ngValue]="null">\u2014 Texte libre \u2014</option>
              @for (u of uoms; track u.id) { <option [value]="u.id">{{ u.name }}</option> }
            </select>
            @if (!form.unitOfMeasureId) {
              <input type="text" [(ngModel)]="form.uomName" class="form-control" placeholder="Unit\xE9, kg, L..." style="margin-top:6px" />
            }
          </div>
          <div class="form-group">
            <label>{{ serviceMode ? 'Co\xFBt (prestataire externe, si applicable)' : 'Prix de revient (CMUP)' }}</label>
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
          <label>Photo {{ serviceMode ? '' : "(affich\xE9e dans la liste articles)" }}</label>
          <input #photoInput type="file" accept="image/*" capture="environment" style="display:none" (change)="onPhotoSelected($event)" />
          <div class="photo-field">
            @if (photoPreviewUrl) {
              <img [src]="photoPreviewUrl" class="photo-preview" alt="" />
            } @else {
              <div class="photo-placeholder"><span class="material-icons">image</span></div>
            }
            <div class="photo-actions">
              <button type="button" class="btn-secondary" (click)="triggerPhotoPicker()">
                <span class="material-icons">photo_camera</span> {{ photoPreviewUrl ? 'Changer' : 'Prendre / choisir une photo' }}
              </button>
              @if (photoPreviewUrl) {
                <button type="button" class="btn-secondary" [disabled]="uploadingPhoto" (click)="removePhoto()">
                  <span class="material-icons">delete</span> Retirer
                </button>
              }
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea [(ngModel)]="form.description" class="form-control" rows="2"></textarea>
        </div>
        <div class="form-group">
          <label class="toggle-label" [class.toggle-on]="form.exemptTva" (click)="form.exemptTva = !form.exemptTva">
            <span class="toggle-slider" [class.active]="form.exemptTva"></span>
            <span class="toggle-text">
              Exempt\xE9 de TVA \xE0 la vente
              <span class="toggle-hint">
                @if (form.exemptTva) {
                  \u2014 Aucune TVA ne sera appliqu\xE9e sur les lignes de facturation vente de cet article
                } @else {
                  \u2014 La TVA standard (19,25%) sera appliqu\xE9e sur les factures de vente
                }
              </span>
            </span>
          </label>
        </div>
        <div class="form-group">
          <label class="toggle-label" [class.toggle-on]="form.exemptTvaAchat" (click)="form.exemptTvaAchat = !form.exemptTvaAchat">
            <span class="toggle-slider" [class.active]="form.exemptTvaAchat"></span>
            <span class="toggle-text">
              Exempt\xE9 de TVA \xE0 l'achat
              <span class="toggle-hint">
                @if (form.exemptTvaAchat) {
                  \u2014 Aucune TVA ne sera appliqu\xE9e sur les lignes de facturation achat de cet article
                } @else {
                  \u2014 La TVA standard (19,25%) sera appliqu\xE9e sur les factures d'achat
                }
              </span>
            </span>
          </label>
        </div>

        <!-- \u2500\u2500 Tarifs clients (uniquement en modification) \u2500\u2500 -->
        @if (editingProduct) {
          <div class="tarifs-block">
            <div class="tarifs-toggle" (click)="showTarifsSection = !showTarifsSection">
              <span class="material-icons">{{ showTarifsSection ? 'expand_less' : 'expand_more' }}</span>
              <span class="tarifs-toggle-label">
                <span class="material-icons" style="font-size:16px;color:#e65100">sell</span>
                Tarifs clients
                @if (productPrices.length > 0) {
                  <span class="tarifs-badge">{{ productPrices.length }}</span>
                }
              </span>
            </div>
            @if (showTarifsSection) {
              <div class="tarifs-content">
                @if (loadingPrices) {
                  <div class="tarifs-loading">Chargement\u2026</div>
                } @else if (productPrices.length > 0) {
                  <table class="tarifs-table">
                    <thead>
                      <tr>
                        <th>Client</th>
                        <th class="text-right">Prix standard</th>
                        <th class="text-right">Prix client</th>
                        <th class="text-right rabais-col">Rabais/u</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      @for (p of productPrices; track p.clientId) {
                        <tr>
                          <td>{{ p.clientName }}</td>
                          <td class="text-right text-muted">{{ (p.salePriceStandard ?? 0) | number:'1.0-0' }}</td>
                          <td class="text-right font-bold">{{ p.prixClient | number:'1.0-0' }}</td>
                          <td class="text-right rabais-col">\u2013 {{ (p.rabaisUnitaire ?? 0) | number:'1.0-0' }}</td>
                          <td style="text-align:right">
                            <button class="btn-del-price" (click)="removeClientPrice(p)" title="Supprimer">
                              <span class="material-icons">delete_outline</span>
                            </button>
                          </td>
                        </tr>
                      }
                    </tbody>
                  </table>
                }

                <!-- Formulaire ajout -->
                <div class="tarifs-add-row">
                  <select class="tarif-select" [(ngModel)]="newPriceClientId">
                    <option [ngValue]="null">\u2014 Client \u2014</option>
                    @for (c of availableClients; track c.id) {
                      <option [ngValue]="c.id">{{ c.name }}</option>
                    }
                  </select>
                  <div class="tarif-prix-wrap">
                    <input type="number" class="tarif-input" [(ngModel)]="newPrixClient"
                           placeholder="Prix client" min="0" />
                    @if (newPrixClient > 0 && (form.salePrice ?? 0) > 0) {
                      <span class="tarif-rabais-preview">\u2013 {{ newPriceRabais | number:'1.0-0' }}</span>
                    }
                  </div>
                  <button class="btn-add-price" (click)="saveClientPrice()" [disabled]="!newPriceClientId || newPrixClient <= 0 || savingPrice">
                    <span class="material-icons">{{ savingPrice ? 'hourglass_empty' : 'add' }}</span>
                    Ajouter
                  </button>
                </div>
                <div class="tarif-hint">
                  Prix standard : <strong>{{ (form.salePrice ?? 0) | number:'1.0-0' }} FCFA</strong> \u2014
                  le rabais est calcul\xE9 automatiquement (prix standard \u2212 prix client)
                </div>
              </div>
            }
          </div>

          <!-- \u2500\u2500 Tarifs fournisseurs \u2500\u2500 -->
          <div class="tarifs-block tarifs-block-fourni">
            <div class="tarifs-toggle" (click)="showFournisseurTarifsSection = !showFournisseurTarifsSection">
              <span class="material-icons">{{ showFournisseurTarifsSection ? 'expand_less' : 'expand_more' }}</span>
              <span class="tarifs-toggle-label">
                <span class="material-icons" style="font-size:16px;color:#017E84">local_shipping</span>
                Tarifs fournisseurs
                @if (productFournisseurPrices.length > 0) {
                  <span class="tarifs-badge tarifs-badge-fourni">{{ productFournisseurPrices.length }}</span>
                }
              </span>
            </div>
            @if (showFournisseurTarifsSection) {
              <div class="tarifs-content">
                @if (loadingFournisseurPrices) {
                  <div class="tarifs-loading">Chargement\u2026</div>
                } @else if (productFournisseurPrices.length > 0) {
                  <table class="tarifs-table">
                    <thead>
                      <tr>
                        <th>Fournisseur</th>
                        <th class="text-right">Co\xFBt standard</th>
                        <th class="text-right">Prix fournisseur</th>
                        <th class="text-right rabais-fourni-col">Rabais/u</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      @for (p of productFournisseurPrices; track p.fournisseurId) {
                        <tr>
                          <td>{{ p.fournisseurName }}</td>
                          <td class="text-right text-muted">{{ (p.standardPrice ?? 0) | number:'1.0-0' }}</td>
                          <td class="text-right font-bold">{{ p.prixFournisseur | number:'1.0-0' }}</td>
                          <td class="text-right rabais-fourni-col">
                            @if ((p.standardPrice ?? 0) > p.prixFournisseur) {
                              \u2013 {{ ((p.standardPrice ?? 0) - p.prixFournisseur) | number:'1.0-0' }}
                            } @else { \u2014 }
                          </td>
                          <td style="text-align:right">
                            <button class="btn-del-price" (click)="removeFournisseurPrice(p)" title="Supprimer">
                              <span class="material-icons">delete_outline</span>
                            </button>
                          </td>
                        </tr>
                      }
                    </tbody>
                  </table>
                }

                <!-- Formulaire ajout -->
                <div class="tarifs-add-row">
                  <select class="tarif-select" [(ngModel)]="newFournisseurId">
                    <option [ngValue]="null">\u2014 Fournisseur \u2014</option>
                    @for (f of availableFournisseurs; track f.id) {
                      <option [ngValue]="f.id">{{ f.name }}</option>
                    }
                  </select>
                  <div class="tarif-prix-wrap">
                    <input type="number" class="tarif-input" [(ngModel)]="newPrixFournisseur"
                           placeholder="Prix fournisseur" min="0" />
                    @if (newPrixFournisseur >= 0 && (form.standardPrice ?? 0) > 0) {
                      <span class="tarif-rabais-preview tarif-rabais-fourni">\u2013 {{ newFournisseurRabais | number:'1.0-0' }}</span>
                    }
                  </div>
                  <button class="btn-add-price btn-add-price-fourni" (click)="saveFournisseurPrice()" [disabled]="!newFournisseurId || newPrixFournisseur < 0 || savingFournisseurPrice">
                    <span class="material-icons">{{ savingFournisseurPrice ? 'hourglass_empty' : 'add' }}</span>
                    Ajouter
                  </button>
                </div>
                <div class="tarif-hint">
                  Co\xFBt standard : <strong>{{ (form.standardPrice ?? 0) | number:'1.0-0' }} FCFA</strong> \u2014
                  le rabais est calcul\xE9 automatiquement (co\xFBt standard \u2212 prix fournisseur)
                </div>
              </div>
            }
          </div>
        }
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
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/stock/components/products/product-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: var(--primary);\n  font-size: 22px;\n}\n.page-header .badge-count {\n  font-size: 12px;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  font-size: 13px;\n}\n.alert .material-icons {\n  font-size: 16px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.toolbar {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.search-input {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  outline: none;\n  width: 280px;\n  font-family: "Roboto", sans-serif;\n}\n.search-input:focus {\n  border-color: var(--primary);\n}\n.wh-select {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  outline: none;\n  font-family: "Roboto", sans-serif;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  cursor: pointer;\n}\n.wh-select:focus {\n  border-color: var(--primary);\n}\n.filter-tabs {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.filter-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n  color: var(--text-muted);\n}\n.filter-btn .material-icons {\n  font-size: 14px;\n}\n.filter-btn.active {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n}\n.filter-btn:hover:not(.active) {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.filter-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.12);\n  font-size: 10px;\n  font-weight: 700;\n}\n.filter-btn.active .filter-count {\n  background: rgba(255, 255, 255, 0.25);\n}\n.btn-primary,\n.btn-outline,\n.btn-import {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary .material-icons,\n.btn-outline .material-icons,\n.btn-import .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-outline:disabled,\n.btn-import:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--primary);\n  color: white;\n  border: none;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-outline {\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.btn-outline:hover {\n  border-color: var(--text-muted);\n  color: var(--text-primary);\n}\n.btn-import {\n  background: var(--accent-light);\n  color: var(--accent);\n  border: 1px solid #b2dfdf;\n}\n.btn-import:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: var(--bg-surface);\n  color: var(--primary);\n  border: 1px solid #2c7be5;\n  border-radius: 6px;\n  font-size: 14px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 10px;\n}\n.empty .material-icons {\n  font-size: 48px;\n  color: var(--border);\n}\n.empty p {\n  margin: 0;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.data-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n}\n.data-table tbody tr:hover td {\n  background: var(--bg-elevated);\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.type-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.type-badge[data-type=product] {\n  background: var(--info-bg);\n  color: var(--primary);\n}\n.type-badge[data-type=service] {\n  background: rgba(109, 40, 217, 0.1);\n  color: #7b1fa2;\n}\n.type-badge[data-type=consu] {\n  background: var(--warning-bg);\n  color: #f57f17;\n}\n.qty-ok {\n  color: #198754;\n  font-weight: 600;\n}\n.qty-zero {\n  color: var(--danger);\n  font-weight: 600;\n}\n.qty-reserved {\n  color: #e07a00;\n  font-weight: 600;\n}\n.btn-icon {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n}\n.btn-icon .material-icons {\n  font-size: 18px;\n}\n.btn-icon:hover {\n  color: var(--primary);\n  background: #e8f0fb;\n}\n.btn-icon.btn-icon-danger:hover {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  width: 640px;\n  max-width: 100%;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header h2 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.btn-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.btn-close .material-icons {\n  font-size: 20px;\n}\n.btn-close:hover {\n  color: var(--text-primary);\n}\n.modal-body {\n  padding: 20px 22px;\n  overflow-y: auto;\n}\n.modal-footer {\n  padding: 14px 22px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin-bottom: 14px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 14px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group .req {\n  color: var(--danger);\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control:focus {\n  border-color: var(--primary);\n}\ntextarea.form-control {\n  resize: vertical;\n}\n.photo-field {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.photo-preview {\n  width: 72px;\n  height: 72px;\n  object-fit: cover;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.photo-placeholder {\n  width: 72px;\n  height: 72px;\n  border-radius: 8px;\n  border: 1px dashed var(--border);\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.photo-placeholder .material-icons {\n  font-size: 28px;\n}\n.photo-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.tarifs-block {\n  margin-top: 16px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tarifs-toggle {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: var(--bg-elevated);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.tarifs-toggle:hover {\n  background: var(--bg-hover);\n}\n.tarifs-toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.tarifs-badge {\n  background: #e65100;\n  color: #fff;\n  border-radius: 10px;\n  padding: 1px 7px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.tarifs-content {\n  padding: 12px 14px;\n  background: var(--bg-surface);\n}\n.tarifs-loading {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  padding: 8px 0;\n}\n.tarifs-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n  margin-bottom: 12px;\n}\n.tarifs-table th {\n  background: var(--bg-elevated);\n  padding: 7px 10px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-align: left;\n  border-bottom: 1px solid var(--border-light);\n}\n.tarifs-table td {\n  padding: 7px 10px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.tarifs-table .text-right {\n  text-align: right;\n}\n.tarifs-table .rabais-col {\n  color: #e65100;\n  font-weight: 600;\n}\n.tarifs-table .text-muted {\n  color: var(--text-muted);\n}\n.tarifs-table .font-bold {\n  font-weight: 700;\n}\n.btn-del-price {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #bbb;\n  padding: 2px;\n}\n.btn-del-price:hover {\n  color: #e53e3e;\n}\n.tarifs-add-row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.tarif-select {\n  flex: 1;\n  min-width: 180px;\n  padding: 7px 10px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.875rem;\n}\n.tarif-prix-wrap {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.tarif-input {\n  width: 120px;\n  padding: 7px 10px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.875rem;\n}\n.tarif-rabais-preview {\n  color: #e65100;\n  font-weight: 600;\n  font-size: 0.875rem;\n  white-space: nowrap;\n}\n.btn-add-price {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #e65100;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 7px 14px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-add-price:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.btn-add-price:not(:disabled):hover {\n  background: #bf360c;\n}\n.tarif-hint {\n  margin-top: 8px;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.tarifs-block-fourni {\n  border-color: rgba(1, 126, 132, 0.3);\n}\n.tarifs-badge-fourni {\n  background: #017E84;\n}\n.tarifs-table .rabais-fourni-col {\n  color: #017E84;\n  font-weight: 600;\n}\n.tarif-rabais-fourni {\n  color: #017E84;\n  font-weight: 600;\n  font-size: 0.875rem;\n  white-space: nowrap;\n}\n.btn-add-price-fourni {\n  background: #017E84;\n}\n.btn-add-price-fourni:not(:disabled):hover {\n  background: #015f65;\n}\n.toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  padding: 10px 14px;\n  background: var(--bg-hover);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: border-color 0.2s, background 0.2s;\n}\n.toggle-label.toggle-on {\n  background: rgba(34, 197, 94, 0.08);\n  border-color: #a5d6a7;\n}\n.toggle-slider {\n  position: relative;\n  width: 40px;\n  height: 22px;\n  background: #dee2e6;\n  border-radius: 11px;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.toggle-slider::after {\n  content: "";\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: var(--bg-surface);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  transition: transform 0.2s;\n}\n.toggle-slider.active {\n  background: #2e7d32;\n}\n.toggle-slider.active::after {\n  transform: translateX(18px);\n}\n.toggle-text {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.toggle-text .toggle-hint {\n  color: var(--text-muted);\n  font-weight: 400;\n  font-size: 12px;\n}\n/*# sourceMappingURL=product-list.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: SalesService }, { type: PurchaseService }, { type: AccountingService }, { type: AuthService }, { type: ActivatedRoute }], { importInput: [{
    type: ViewChild,
    args: ["importInput"]
  }], photoInput: [{
    type: ViewChild,
    args: ["photoInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductListComponent, { className: "ProductListComponent", filePath: "app/modules/stock/components/products/product-list.component.ts", lineNumber: 28 });
})();
export {
  ProductListComponent
};
//# sourceMappingURL=chunk-F447DSS4.js.map
