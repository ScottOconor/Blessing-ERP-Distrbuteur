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
  NgControlStatus,
  NgModel,
  NgSelectOption,
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
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
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
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-EEF5WTPZ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-PPITZAXW.js";

// src/app/modules/stock/components/warehouses/warehouse-list.component.ts
var _c0 = ["importInput"];
var _forTrack0 = ($index, $item) => $item.id;
function WarehouseListComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 14);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function WarehouseListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 5);
    \u0275\u0275text(2, "warehouse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun entrep\xF4t. Cr\xE9ez votre premier entrep\xF4t pour commencer \xE0 g\xE9rer le stock.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 9);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Cr\xE9er un entrep\xF4t");
    \u0275\u0275elementEnd()();
  }
}
function WarehouseListComponent_Conditional_23_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23)(1, "span", 5);
    \u0275\u0275text(2, "book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", wh_r4.stockJournalName);
  }
}
function WarehouseListComponent_Conditional_23_For_2_Conditional_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, "Aucun emplacement interne trouv\xE9");
    \u0275\u0275elementEnd();
  }
}
function WarehouseListComponent_Conditional_23_For_2_Conditional_22_Conditional_4_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(loc_r5.accountCode);
  }
}
function WarehouseListComponent_Conditional_23_For_2_Conditional_22_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 33);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "div", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, WarehouseListComponent_Conditional_23_For_2_Conditional_22_Conditional_4_For_2_Conditional_8_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const loc_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(loc_r5.completeName || loc_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.usageLabel(loc_r5.usage));
    \u0275\u0275advance();
    \u0275\u0275conditional(loc_r5.accountCode ? 8 : -1);
  }
}
function WarehouseListComponent_Conditional_23_For_2_Conditional_22_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275repeaterCreate(1, WarehouseListComponent_Conditional_23_For_2_Conditional_22_Conditional_4_For_2_Template, 9, 3, "div", 32, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.getLocationsFor(wh_r4.id));
  }
}
function WarehouseListComponent_Conditional_23_For_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275text(2, "Emplacements");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, WarehouseListComponent_Conditional_23_For_2_Conditional_22_Conditional_3_Template, 2, 0, "p", 30)(4, WarehouseListComponent_Conditional_23_For_2_Conditional_22_Conditional_4_Template, 3, 0, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.getLocationsFor(wh_r4.id).length === 0 ? 3 : 4);
  }
}
function WarehouseListComponent_Conditional_23_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_23_For_2_Template_div_click_1_listener() {
      const wh_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectWarehouse(wh_r4.id));
    });
    \u0275\u0275elementStart(2, "div", 18)(3, "span", 5);
    \u0275\u0275text(4, "warehouse");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 19)(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 22);
    \u0275\u0275conditionalCreate(11, WarehouseListComponent_Conditional_23_For_2_Conditional_11_Template, 4, 1, "span", 23);
    \u0275\u0275elementStart(12, "span", 24)(13, "span", 5);
    \u0275\u0275text(14, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 25)(17, "button", 26);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_23_For_2_Template_button_click_17_listener($event) {
      const wh_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.openEdit(wh_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(18, "span", 5);
    \u0275\u0275text(19, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "span", 27);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(22, WarehouseListComponent_Conditional_23_For_2_Conditional_22_Template, 5, 1, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("expanded", ctx_r1.selectedWarehouseId === wh_r4.id);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(wh_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(wh_r4.code);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(wh_r4.stockJournalName ? 11 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", wh_r4.stockLocationName || "Stock");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedWarehouseId === wh_r4.id ? "expand_less" : "expand_more");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedWarehouseId === wh_r4.id ? 22 : -1);
  }
}
function WarehouseListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, WarehouseListComponent_Conditional_23_For_2_Template, 23, 8, "div", 15, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.warehouses);
  }
}
function WarehouseListComponent_Conditional_24_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 46)(1, "td", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const \u0275$index_166_r8 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_166_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7["Nom*"] || row_r7["Nom"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7["Code*"] || row_r7["Code"]);
  }
}
function WarehouseListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275elementStart(1, "div", 39);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_24_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 40)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 41);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_24_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 42)(9, "table", 43)(10, "thead")(11, "tr", 44)(12, "th", 45);
    \u0275\u0275text(13, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 45);
    \u0275\u0275text(15, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 45);
    \u0275\u0275text(17, "Code");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, WarehouseListComponent_Conditional_24_For_20_Template, 7, 3, "tr", 46, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 47)(22, "button", 48);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_24_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275text(23, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 9);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_24_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmImport());
    });
    \u0275\u0275elementStart(25, "span", 5);
    \u0275\u0275text(26, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Aper\xE7u import entrep\xF4ts (", ctx_r1.importRows.length, ")");
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.importRows);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Confirmer (", ctx_r1.importRows.length, " entrep\xF4ts) ");
  }
}
function WarehouseListComponent_Conditional_25_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMsg);
  }
}
function WarehouseListComponent_Conditional_25_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r10 = ctx.$implicit;
    \u0275\u0275property("value", j_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", j_r10.code, " - ", j_r10.name);
  }
}
function WarehouseListComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_25_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 52);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_25_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 40)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 41);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_25_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 53);
    \u0275\u0275conditionalCreate(9, WarehouseListComponent_Conditional_25_Conditional_9_Template, 2, 1, "div", 54);
    \u0275\u0275elementStart(10, "div", 55)(11, "div", 56)(12, "label");
    \u0275\u0275text(13, "Nom ");
    \u0275\u0275elementStart(14, "span", 57);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function WarehouseListComponent_Conditional_25_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 56)(18, "label");
    \u0275\u0275text(19, "Code ");
    \u0275\u0275elementStart(20, "span", 57);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function WarehouseListComponent_Conditional_25_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.code, $event) || (ctx_r1.form.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 56)(24, "label");
    \u0275\u0275text(25, "Journal comptable stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 60);
    \u0275\u0275twoWayListener("ngModelChange", function WarehouseListComponent_Conditional_25_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.stockJournalId, $event) || (ctx_r1.form.stockJournalId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 61);
    \u0275\u0275text(28, "\u2014 Aucun (pas d'\xE9criture automatique) \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(29, WarehouseListComponent_Conditional_25_For_30_Template, 2, 3, "option", 62, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "small", 63);
    \u0275\u0275text(32, "Journal utilis\xE9 pour les \xE9critures de valorisation des mouvements de stock.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 64)(34, "button", 48);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_25_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(35, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 65);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_25_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(37, "span", 5);
    \u0275\u0275text(38, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingWarehouse ? "Modifier l'entrep\xF4t" : "Nouvel entrep\xF4t");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.errorMsg ? 9 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.code);
    \u0275\u0275property("disabled", !!ctx_r1.editingWarehouse);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.stockJournalId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.journals);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Cr\xE9ation..." : ctx_r1.editingWarehouse ? "Modifier" : "Cr\xE9er l'entrep\xF4t", " ");
  }
}
var WH_HEADERS = ["Nom*", "Code*"];
var WH_SAMPLE = ["Entrep\xF4t Central", "EC"];
var WarehouseListComponent = class _WarehouseListComponent {
  constructor(stockService, accountingService, authService) {
    this.stockService = stockService;
    this.accountingService = accountingService;
    this.authService = authService;
    this.warehouses = [];
    this.locations = [];
    this.journals = [];
    this.loading = false;
    this.saving = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.showModal = false;
    this.editingWarehouse = null;
    this.form = { active: true };
    this.selectedWarehouseId = null;
    this.showImportModal = false;
    this.importRows = [];
    this.importLoading = false;
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    this.load();
    this.accountingService.getJournals(this.companyId).subscribe((j) => {
      this.journals = j.filter((jj) => jj.type === "general" || (jj.code || "").toUpperCase() === "STK");
    });
  }
  load() {
    this.loading = true;
    this.stockService.getWarehouses(this.companyId).subscribe({
      next: (wh) => {
        this.warehouses = wh;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
    this.stockService.getLocations(this.companyId).subscribe((l) => {
      this.locations = l.filter((loc) => loc.usage === "internal");
    });
  }
  selectWarehouse(id) {
    this.selectedWarehouseId = this.selectedWarehouseId === id ? null : id;
  }
  getLocationsFor(warehouseId) {
    return this.locations.filter((l) => l.warehouseId === warehouseId);
  }
  openCreate() {
    this.editingWarehouse = null;
    this.form = { active: true };
    this.showModal = true;
    this.errorMsg = "";
  }
  openEdit(w) {
    this.editingWarehouse = w;
    this.form = __spreadValues({}, w);
    this.showModal = true;
    this.errorMsg = "";
  }
  closeModal() {
    this.showModal = false;
  }
  save() {
    if (!this.form.name || !this.form.code) {
      this.errorMsg = "Nom et code obligatoires";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const dto = __spreadProps(__spreadValues({}, this.form), { companyId: this.companyId, active: true });
    const obs = this.editingWarehouse ? this.stockService.updateWarehouse(this.editingWarehouse.id, dto) : this.stockService.createWarehouse(dto);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.showModal = false;
        this.load();
      },
      error: (e) => {
        this.saving = false;
        this.errorMsg = e.error?.message || "Erreur lors de la cr\xE9ation";
      }
    });
  }
  usageLabel(usage) {
    const m = { internal: "Interne", transit: "Transit", supplier: "Fournisseur", customer: "Client", view: "Vue" };
    return m[usage] || usage;
  }
  showSuccessMsg(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 5e3);
  }
  // === Import Excel ===
  downloadTemplate() {
    downloadExcelTemplate(WH_HEADERS, WH_SAMPLE, "modele_entrepots.xlsx");
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
        this.importRows = rows.filter((r) => (r["Nom*"] || r["Nom"]) && (r["Code*"] || r["Code"]));
        if (this.importRows.length === 0) {
          this.showSuccessMsg('Aucune ligne valide (colonnes "Nom*" et "Code*" requises)');
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
  confirmImport() {
    return __async(this, null, function* () {
      let done = 0, errors = 0;
      for (const row of this.importRows) {
        const dto = {
          name: String(row["Nom*"] || row["Nom"] || "").trim(),
          code: String(row["Code*"] || row["Code"] || "").trim().toUpperCase(),
          companyId: this.companyId,
          active: true
        };
        try {
          yield this.stockService.createWarehouse(dto).toPromise();
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
  static {
    this.\u0275fac = function WarehouseListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WarehouseListComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WarehouseListComponent, selectors: [["app-warehouse-list"]], viewQuery: function WarehouseListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.importInput = _t.first);
      }
    }, decls: 26, vars: 5, consts: [["importInput", ""], [1, "page-container"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [2, "display", "flex", "gap", "8px", "align-items", "center"], [1, "btn-outline", 3, "click"], [1, "btn-import", 3, "click", "disabled"], [1, "btn-primary", 3, "click"], [1, "loading"], [1, "empty-state"], [1, "wh-grid"], [1, "modal-overlay"], [1, "material-icons", "spin"], [1, "wh-card", 3, "expanded"], [1, "wh-card"], [1, "wh-header", 3, "click"], [1, "wh-icon"], [1, "wh-info"], [1, "wh-name"], [1, "wh-code"], [1, "wh-meta"], [1, "meta-chip"], [1, "meta-chip", "loc"], [1, "wh-actions"], ["title", "Modifier", 1, "btn-icon", 3, "click"], [1, "material-icons", "expand-icon"], [1, "wh-locations"], [1, "locations-title"], [1, "no-locs"], [1, "loc-list"], [1, "loc-item"], [1, "material-icons", "loc-icon"], [1, "loc-info"], [1, "loc-name"], [1, "loc-usage"], [1, "loc-account"], [1, "modal-overlay", 3, "click"], [1, "modal", 2, "max-width", "500px", 3, "click"], [1, "modal-header"], [1, "btn-close", 3, "click"], [2, "overflow-x", "auto", "max-height", "400px"], [2, "width", "100%", "border-collapse", "collapse", "font-size", "13px"], [2, "background", "#f4f6f8"], [2, "padding", "8px", "border-bottom", "2px solid #e2e8ef", "text-align", "left"], [2, "border-bottom", "1px solid #f0f0f0"], [2, "display", "flex", "justify-content", "flex-end", "gap", "10px", "padding", "16px", "border-top", "1px solid #f0f0f0"], [1, "btn-secondary", 3, "click"], [2, "padding", "7px 8px", "color", "#adb5bd"], [2, "padding", "7px 8px", "font-weight", "600"], [2, "padding", "7px 8px", "font-family", "monospace", "color", "#017E84"], [1, "modal", 3, "click"], [1, "modal-body"], [1, "alert", "alert-danger"], [1, "form-row"], [1, "form-group"], [1, "req"], ["type", "text", "placeholder", "Ex: D\xE9p\xF4t Central", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ex: DC1", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "value"], [1, "hint"], [1, "modal-footer"], [1, "btn-primary", 3, "click", "disabled"]], template: function WarehouseListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "input", 2, 0);
        \u0275\u0275listener("change", function WarehouseListComponent_Template_input_change_1_listener($event) {
          return ctx.onImportFileChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "h1", 4)(5, "span", 5);
        \u0275\u0275text(6, "warehouse");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Entrep\xF4ts & Emplacements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
        \u0275\u0275listener("click", function WarehouseListComponent_Template_button_click_9_listener() {
          return ctx.downloadTemplate();
        });
        \u0275\u0275elementStart(10, "span", 5);
        \u0275\u0275text(11, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Mod\xE8le Excel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 8);
        \u0275\u0275listener("click", function WarehouseListComponent_Template_button_click_13_listener() {
          return ctx.triggerImport();
        });
        \u0275\u0275elementStart(14, "span", 5);
        \u0275\u0275text(15, "upload_file");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 9);
        \u0275\u0275listener("click", function WarehouseListComponent_Template_button_click_17_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275elementStart(18, "span", 5);
        \u0275\u0275text(19, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " Nouvel entrep\xF4t");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(21, WarehouseListComponent_Conditional_21_Template, 4, 0, "div", 10)(22, WarehouseListComponent_Conditional_22_Template, 9, 0, "div", 11)(23, WarehouseListComponent_Conditional_23_Template, 3, 0, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(24, WarehouseListComponent_Conditional_24_Template, 28, 2, "div", 13);
        \u0275\u0275conditionalCreate(25, WarehouseListComponent_Conditional_25_Template, 40, 9, "div", 13);
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("disabled", ctx.importLoading);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.importLoading ? "Lecture..." : "Importer Excel", " ");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.loading ? 21 : ctx.warehouses.length === 0 ? 22 : 23);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showImportModal ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal ? 25 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #2c7be5;\n}\n.loading[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 24px;\n  color: #6c757d;\n  gap: 12px;\n}\n.loading[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  max-width: 360px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.wh-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.wh-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  transition: box-shadow 0.2s;\n}\n.wh-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.wh-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  cursor: pointer;\n}\n.wh-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background:\n    linear-gradient(\n      135deg,\n      #2c7be5,\n      #6610f2);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.wh-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 22px;\n}\n.wh-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.wh-info[_ngcontent-%COMP%]   .wh-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #212529;\n}\n.wh-info[_ngcontent-%COMP%]   .wh-code[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n  font-family: monospace;\n}\n.wh-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  background: #f0f0f0;\n  border-radius: 12px;\n  font-size: 12px;\n  color: #495057;\n}\n.meta-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6c757d;\n}\n.meta-chip.loc[_ngcontent-%COMP%] {\n  background: #e8f0fb;\n  color: #2c7be5;\n}\n.meta-chip.loc[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #2c7be5;\n}\n.wh-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.expand-icon[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 20px !important;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  color: #2c7be5;\n  background: #e8f0fb;\n}\n.wh-locations[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f0f0;\n  padding: 16px 20px;\n  background: #fafafa;\n}\n.locations-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n}\n.no-locs[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #adb5bd;\n  margin: 0;\n}\n.loc-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.loc-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  background: white;\n  border-radius: 6px;\n  border: 1px solid #e9ecef;\n}\n.loc-icon[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: #2c7be5;\n}\n.loc-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.loc-info[_ngcontent-%COMP%]   .loc-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #212529;\n}\n.loc-info[_ngcontent-%COMP%]   .loc-usage[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n}\n.loc-account[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: monospace;\n  color: #6c757d;\n  background: #f0f0f0;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled, \n.btn-outline[_ngcontent-%COMP%]:disabled, \n.btn-import[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2c7be5;\n  color: white;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #495057;\n  border: 1px solid #dee2e6;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: white;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: #adb5bd;\n  color: #212529;\n}\n.btn-import[_ngcontent-%COMP%] {\n  background: #e8f5f5;\n  color: #017E84;\n  border: 1px solid #b2dfdf;\n}\n.btn-import[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #d0eded;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  width: 520px;\n  max-width: 100%;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n  border-bottom: 1px solid #e9ecef;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #6c757d;\n}\n.btn-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 22px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 14px 22px;\n  border-top: 1px solid #e9ecef;\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 14px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.form-group[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n  margin-top: 3px;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #2c7be5;\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background: #f8f9fa;\n  color: #6c757d;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n}\n/*# sourceMappingURL=warehouse-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WarehouseListComponent, [{
    type: Component,
    args: [{ selector: "app-warehouse-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <!-- Input file cach\xE9 -->
  <input #importInput type="file" accept=".xlsx,.xls" style="display:none" (change)="onImportFileChange($event)" />

  <div class="page-header">
    <h1 class="page-title"><span class="material-icons">warehouse</span> Entrep\xF4ts &amp; Emplacements</h1>
    <div style="display:flex;gap:8px;align-items:center">
      <button class="btn-outline" (click)="downloadTemplate()"><span class="material-icons">download</span> Mod\xE8le Excel</button>
      <button class="btn-import" (click)="triggerImport()" [disabled]="importLoading">
        <span class="material-icons">upload_file</span> {{ importLoading ? 'Lecture...' : 'Importer Excel' }}
      </button>
      <button class="btn-primary" (click)="openCreate()"><span class="material-icons">add</span> Nouvel entrep\xF4t</button>
    </div>
  </div>

  @if (loading) {
    <div class="loading"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else if (warehouses.length === 0) {
    <div class="empty-state">
      <span class="material-icons">warehouse</span>
      <p>Aucun entrep\xF4t. Cr\xE9ez votre premier entrep\xF4t pour commencer \xE0 g\xE9rer le stock.</p>
      <button class="btn-primary" (click)="openCreate()"><span class="material-icons">add</span> Cr\xE9er un entrep\xF4t</button>
    </div>
  } @else {
    <div class="wh-grid">
      @for (wh of warehouses; track wh.id) {
        <div class="wh-card" [class.expanded]="selectedWarehouseId === wh.id">
          <div class="wh-header" (click)="selectWarehouse(wh.id!)">
            <div class="wh-icon"><span class="material-icons">warehouse</span></div>
            <div class="wh-info">
              <div class="wh-name">{{ wh.name }}</div>
              <div class="wh-code">{{ wh.code }}</div>
            </div>
            <div class="wh-meta">
              @if (wh.stockJournalName) {
                <span class="meta-chip"><span class="material-icons">book</span> {{ wh.stockJournalName }}</span>
              }
              <span class="meta-chip loc"><span class="material-icons">location_on</span> {{ wh.stockLocationName || 'Stock' }}</span>
            </div>
            <div class="wh-actions">
              <button class="btn-icon" (click)="openEdit(wh); $event.stopPropagation()" title="Modifier">
                <span class="material-icons">edit</span>
              </button>
              <span class="material-icons expand-icon">{{ selectedWarehouseId === wh.id ? 'expand_less' : 'expand_more' }}</span>
            </div>
          </div>

          @if (selectedWarehouseId === wh.id) {
            <div class="wh-locations">
              <div class="locations-title">Emplacements</div>
              @if (getLocationsFor(wh.id!).length === 0) {
                <p class="no-locs">Aucun emplacement interne trouv\xE9</p>
              } @else {
                <div class="loc-list">
                  @for (loc of getLocationsFor(wh.id!); track loc.id) {
                    <div class="loc-item">
                      <span class="material-icons loc-icon">place</span>
                      <div class="loc-info">
                        <div class="loc-name">{{ loc.completeName || loc.name }}</div>
                        <div class="loc-usage">{{ usageLabel(loc.usage) }}</div>
                      </div>
                      @if (loc.accountCode) {
                        <span class="loc-account">{{ loc.accountCode }}</span>
                      }
                    </div>
                  }
                </div>
              }
            </div>
          }
        </div>
      }
    </div>
  }
</div>

<!-- Modal Import Entrep\xF4ts -->
@if (showImportModal) {
  <div class="modal-overlay" (click)="closeImportModal()">
    <div class="modal" (click)="$event.stopPropagation()" style="max-width:500px">
      <div class="modal-header">
        <h2>Aper\xE7u import entrep\xF4ts ({{ importRows.length }})</h2>
        <button class="btn-close" (click)="closeImportModal()"><span class="material-icons">close</span></button>
      </div>
      <div style="overflow-x:auto;max-height:400px">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead><tr style="background:#f4f6f8">
            <th style="padding:8px;border-bottom:2px solid #e2e8ef;text-align:left">#</th>
            <th style="padding:8px;border-bottom:2px solid #e2e8ef;text-align:left">Nom</th>
            <th style="padding:8px;border-bottom:2px solid #e2e8ef;text-align:left">Code</th>
          </tr></thead>
          <tbody>
            @for (row of importRows; track $index; let i = $index) {
              <tr style="border-bottom:1px solid #f0f0f0">
                <td style="padding:7px 8px;color:#adb5bd">{{ i+1 }}</td>
                <td style="padding:7px 8px;font-weight:600">{{ row['Nom*'] || row['Nom'] }}</td>
                <td style="padding:7px 8px;font-family:monospace;color:#017E84">{{ row['Code*'] || row['Code'] }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
      <div style="display:flex;justify-content:flex-end;gap:10px;padding:16px;border-top:1px solid #f0f0f0">
        <button class="btn-secondary" (click)="closeImportModal()">Annuler</button>
        <button class="btn-primary" (click)="confirmImport()">
          <span class="material-icons">check_circle</span> Confirmer ({{ importRows.length }} entrep\xF4ts)
        </button>
      </div>
    </div>
  </div>
}

@if (showModal) {
  <div class="modal-overlay" (click)="closeModal()">
    <div class="modal" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h2>{{ editingWarehouse ? 'Modifier l\\'entrep\xF4t' : 'Nouvel entrep\xF4t' }}</h2>
        <button class="btn-close" (click)="closeModal()"><span class="material-icons">close</span></button>
      </div>
      <div class="modal-body">
        @if (errorMsg) { <div class="alert alert-danger">{{ errorMsg }}</div> }
        <div class="form-row">
          <div class="form-group">
            <label>Nom <span class="req">*</span></label>
            <input type="text" [(ngModel)]="form.name" class="form-control" placeholder="Ex: D\xE9p\xF4t Central" />
          </div>
          <div class="form-group">
            <label>Code <span class="req">*</span></label>
            <input type="text" [(ngModel)]="form.code" class="form-control" placeholder="Ex: DC1" [disabled]="!!editingWarehouse" />
          </div>
        </div>
        <div class="form-group">
          <label>Journal comptable stock</label>
          <select [(ngModel)]="form.stockJournalId" class="form-control">
            <option [ngValue]="null">\u2014 Aucun (pas d'\xE9criture automatique) \u2014</option>
            @for (j of journals; track j.id) { <option [value]="j.id">{{ j.code }} - {{ j.name }}</option> }
          </select>
          <small class="hint">Journal utilis\xE9 pour les \xE9critures de valorisation des mouvements de stock.</small>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" (click)="closeModal()">Annuler</button>
        <button class="btn-primary" (click)="save()" [disabled]="saving">
          <span class="material-icons">save</span> {{ saving ? 'Cr\xE9ation...' : (editingWarehouse ? 'Modifier' : 'Cr\xE9er l\\'entrep\xF4t') }}
        </button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/stock/components/warehouses/warehouse-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: #2c7be5;\n}\n.loading,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 24px;\n  color: #6c757d;\n  gap: 12px;\n}\n.loading .material-icons,\n.empty-state .material-icons {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.loading p,\n.empty-state p {\n  margin: 0;\n  text-align: center;\n  max-width: 360px;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.wh-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.wh-card {\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  transition: box-shadow 0.2s;\n}\n.wh-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.wh-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  cursor: pointer;\n}\n.wh-icon {\n  width: 44px;\n  height: 44px;\n  background:\n    linear-gradient(\n      135deg,\n      #2c7be5,\n      #6610f2);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.wh-icon .material-icons {\n  color: white;\n  font-size: 22px;\n}\n.wh-info {\n  flex: 1;\n}\n.wh-info .wh-name {\n  font-size: 15px;\n  font-weight: 600;\n  color: #212529;\n}\n.wh-info .wh-code {\n  font-size: 12px;\n  color: #6c757d;\n  font-family: monospace;\n}\n.wh-meta {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.meta-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  background: #f0f0f0;\n  border-radius: 12px;\n  font-size: 12px;\n  color: #495057;\n}\n.meta-chip .material-icons {\n  font-size: 14px;\n  color: #6c757d;\n}\n.meta-chip.loc {\n  background: #e8f0fb;\n  color: #2c7be5;\n}\n.meta-chip.loc .material-icons {\n  color: #2c7be5;\n}\n.wh-actions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.expand-icon {\n  color: #6c757d;\n  font-size: 20px !important;\n}\n.btn-icon {\n  background: none;\n  border: none;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n}\n.btn-icon .material-icons {\n  font-size: 18px;\n}\n.btn-icon:hover {\n  color: #2c7be5;\n  background: #e8f0fb;\n}\n.wh-locations {\n  border-top: 1px solid #f0f0f0;\n  padding: 16px 20px;\n  background: #fafafa;\n}\n.locations-title {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n}\n.no-locs {\n  font-size: 13px;\n  color: #adb5bd;\n  margin: 0;\n}\n.loc-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.loc-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  background: white;\n  border-radius: 6px;\n  border: 1px solid #e9ecef;\n}\n.loc-icon {\n  font-size: 18px !important;\n  color: #2c7be5;\n}\n.loc-info {\n  flex: 1;\n}\n.loc-info .loc-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #212529;\n}\n.loc-info .loc-usage {\n  font-size: 11px;\n  color: #6c757d;\n}\n.loc-account {\n  font-size: 12px;\n  font-family: monospace;\n  color: #6c757d;\n  background: #f0f0f0;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.btn-primary,\n.btn-secondary,\n.btn-outline,\n.btn-import {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons,\n.btn-outline .material-icons,\n.btn-import .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled,\n.btn-outline:disabled,\n.btn-import:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: #2c7be5;\n  color: white;\n  border: none;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary {\n  background: white;\n  color: #495057;\n  border: 1px solid #dee2e6;\n}\n.btn-secondary:hover {\n  background: #f8f9fa;\n}\n.btn-outline {\n  background: white;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.btn-outline:hover {\n  border-color: #adb5bd;\n  color: #212529;\n}\n.btn-import {\n  background: #e8f5f5;\n  color: #017E84;\n  border: 1px solid #b2dfdf;\n}\n.btn-import:hover:not(:disabled) {\n  background: #d0eded;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal {\n  background: white;\n  border-radius: 10px;\n  width: 520px;\n  max-width: 100%;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n  border-bottom: 1px solid #e9ecef;\n}\n.modal-header h2 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.btn-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #6c757d;\n}\n.btn-close .material-icons {\n  font-size: 20px;\n}\n.modal-body {\n  padding: 20px 22px;\n}\n.modal-footer {\n  padding: 14px 22px;\n  border-top: 1px solid #e9ecef;\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 14px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.form-group .req {\n  color: #dc3545;\n}\n.form-group .hint {\n  font-size: 11px;\n  color: #6c757d;\n  margin-top: 3px;\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control:focus {\n  border-color: #2c7be5;\n}\n.form-control:disabled {\n  background: #f8f9fa;\n  color: #6c757d;\n}\n.alert {\n  padding: 10px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.alert.alert-danger {\n  background: #fde8e8;\n  color: #721c24;\n}\n/*# sourceMappingURL=warehouse-list.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AccountingService }, { type: AuthService }], { importInput: [{
    type: ViewChild,
    args: ["importInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WarehouseListComponent, { className: "WarehouseListComponent", filePath: "src/app/modules/stock/components/warehouses/warehouse-list.component.ts", lineNumber: 20 });
})();
export {
  WarehouseListComponent
};
//# sourceMappingURL=chunk-XS6S7X3K.js.map
