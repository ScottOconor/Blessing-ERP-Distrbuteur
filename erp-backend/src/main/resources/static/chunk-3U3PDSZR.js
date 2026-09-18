import {
  StockService
} from "./chunk-LIGNVDFD.js";
import {
  downloadExcelTemplate,
  parseExcelFile
} from "./chunk-RZFOQ7J2.js";
import "./chunk-ZJANBOXO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
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
  ViewChild,
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
} from "./chunk-NJUNWWEJ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/stock/components/warehouses/warehouse-list.component.ts
var _c0 = ["importInput"];
var _forTrack0 = ($index, $item) => $item.id;
function WarehouseListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Mod\xE8le ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.triggerImport());
    });
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Importer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 13);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_9_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275elementStart(9, "span", 5);
    \u0275\u0275text(10, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Nouvel entrep\xF4t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.importLoading);
  }
}
function WarehouseListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 14);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function WarehouseListComponent_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 16);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_11_Conditional_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Mod\xE8le Excel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_11_Conditional_5_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.triggerImport());
    });
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Importer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 13);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_11_Conditional_5_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275elementStart(10, "span", 5);
    \u0275\u0275text(11, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Cr\xE9er un entrep\xF4t");
    \u0275\u0275elementEnd()();
  }
}
function WarehouseListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 5);
    \u0275\u0275text(2, "warehouse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun entrep\xF4t. Cr\xE9ez votre premier entrep\xF4t pour commencer \xE0 g\xE9rer le stock.");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, WarehouseListComponent_Conditional_11_Conditional_5_Template, 13, 0, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.canCreate ? 5 : -1);
  }
}
function WarehouseListComponent_Conditional_12_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Par d\xE9faut");
    \u0275\u0275elementEnd();
  }
}
function WarehouseListComponent_Conditional_12_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26)(1, "span", 5);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", wh_r5.responsableName);
  }
}
function WarehouseListComponent_Conditional_12_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26)(1, "span", 5);
    \u0275\u0275text(2, "book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", wh_r5.stockJournalName);
  }
}
function WarehouseListComponent_Conditional_12_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27)(1, "span", 5);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", wh_r5.salesJournalName);
  }
}
function WarehouseListComponent_Conditional_12_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28)(1, "span", 5);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", wh_r5.cashJournalName);
  }
}
function WarehouseListComponent_Conditional_12_For_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_12_For_2_Conditional_21_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const wh_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.setDefault(wh_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "star_outline");
    \u0275\u0275elementEnd()();
  }
}
function WarehouseListComponent_Conditional_12_For_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_12_For_2_Conditional_22_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const wh_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.openEdit(wh_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function WarehouseListComponent_Conditional_12_For_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_12_For_2_Conditional_23_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const wh_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.deleteWarehouse(wh_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function WarehouseListComponent_Conditional_12_For_2_Conditional_26_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1, "Aucun emplacement interne trouv\xE9");
    \u0275\u0275elementEnd();
  }
}
function WarehouseListComponent_Conditional_12_For_2_Conditional_26_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44)(4, "div", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const loc_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(loc_r9.completeName || loc_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.usageLabel(loc_r9.usage));
  }
}
function WarehouseListComponent_Conditional_12_For_2_Conditional_26_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275repeaterCreate(1, WarehouseListComponent_Conditional_12_For_2_Conditional_26_Conditional_4_For_2_Template, 8, 2, "div", 42, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.getLocationsFor(wh_r5.id));
  }
}
function WarehouseListComponent_Conditional_12_For_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 39);
    \u0275\u0275text(2, "Emplacements");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, WarehouseListComponent_Conditional_12_For_2_Conditional_26_Conditional_3_Template, 2, 0, "p", 40)(4, WarehouseListComponent_Conditional_12_For_2_Conditional_26_Conditional_4_Template, 3, 0, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.getLocationsFor(wh_r5.id).length === 0 ? 3 : 4);
  }
}
function WarehouseListComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_12_For_2_Template_div_click_1_listener() {
      const wh_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectWarehouse(wh_r5.id));
    });
    \u0275\u0275elementStart(2, "div", 20)(3, "span", 5);
    \u0275\u0275text(4, "warehouse");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 21)(6, "div", 22);
    \u0275\u0275text(7);
    \u0275\u0275conditionalCreate(8, WarehouseListComponent_Conditional_12_For_2_Conditional_8_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 25);
    \u0275\u0275conditionalCreate(12, WarehouseListComponent_Conditional_12_For_2_Conditional_12_Template, 4, 1, "span", 26);
    \u0275\u0275conditionalCreate(13, WarehouseListComponent_Conditional_12_For_2_Conditional_13_Template, 4, 1, "span", 26);
    \u0275\u0275conditionalCreate(14, WarehouseListComponent_Conditional_12_For_2_Conditional_14_Template, 4, 1, "span", 27);
    \u0275\u0275conditionalCreate(15, WarehouseListComponent_Conditional_12_For_2_Conditional_15_Template, 4, 1, "span", 28);
    \u0275\u0275elementStart(16, "span", 29)(17, "span", 5);
    \u0275\u0275text(18, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 30);
    \u0275\u0275conditionalCreate(21, WarehouseListComponent_Conditional_12_For_2_Conditional_21_Template, 3, 0, "button", 31);
    \u0275\u0275conditionalCreate(22, WarehouseListComponent_Conditional_12_For_2_Conditional_22_Template, 3, 0, "button", 32);
    \u0275\u0275conditionalCreate(23, WarehouseListComponent_Conditional_12_For_2_Conditional_23_Template, 3, 0, "button", 33);
    \u0275\u0275elementStart(24, "span", 34);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(26, WarehouseListComponent_Conditional_12_For_2_Conditional_26_Template, 5, 1, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("expanded", ctx_r1.selectedWarehouseId === wh_r5.id);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", wh_r5.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(wh_r5.isDefault ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(wh_r5.code);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(wh_r5.responsableName ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(wh_r5.stockJournalName ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(wh_r5.salesJournalName ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(wh_r5.cashJournalName ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", wh_r5.stockLocationName || "Stock");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canEdit && !wh_r5.isDefault ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canEdit ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canDelete ? 23 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedWarehouseId === wh_r5.id ? "expand_less" : "expand_more");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedWarehouseId === wh_r5.id ? 26 : -1);
  }
}
function WarehouseListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, WarehouseListComponent_Conditional_12_For_2_Template, 27, 15, "div", 17, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.warehouses);
  }
}
function WarehouseListComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "div", 58);
    \u0275\u0275elementStart(2, "p", 59);
    \u0275\u0275text(3, "Importation en cours\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.importRows.length, " ligne(s) en cours de traitement");
  }
}
function WarehouseListComponent_Conditional_13_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 56)(1, "td", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    const \u0275$index_227_r12 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_227_r12 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11["Nom*"] || row_r11["Nom"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11["Code*"] || row_r11["Code"]);
  }
}
function WarehouseListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275elementStart(1, "div", 48);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_13_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(2, WarehouseListComponent_Conditional_13_Conditional_2_Template, 6, 1, "div", 49);
    \u0275\u0275elementStart(3, "div", 50)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 51);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275elementStart(7, "span", 5);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 52)(10, "table", 53)(11, "thead")(12, "tr", 54)(13, "th", 55);
    \u0275\u0275text(14, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 55);
    \u0275\u0275text(16, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 55);
    \u0275\u0275text(18, "Code");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, WarehouseListComponent_Conditional_13_For_21_Template, 7, 3, "tr", 56, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 57)(23, "button", 16);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_13_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275text(24, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 13);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_13_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmImport());
    });
    \u0275\u0275elementStart(26, "span", 5);
    \u0275\u0275text(27, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.importLoading ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Aper\xE7u import entrep\xF4ts (", ctx_r1.importRows.length, ")");
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.importRows);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Confirmer (", ctx_r1.importRows.length, " entrep\xF4ts) ");
  }
}
function WarehouseListComponent_Conditional_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMsg);
  }
}
function WarehouseListComponent_Conditional_14_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r14 = ctx.$implicit;
    \u0275\u0275property("value", j_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", j_r14.code, " - ", j_r14.name);
  }
}
function WarehouseListComponent_Conditional_14_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r15 = ctx.$implicit;
    \u0275\u0275property("value", j_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", j_r15.code, " - ", j_r15.name);
  }
}
function WarehouseListComponent_Conditional_14_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r16 = ctx.$implicit;
    \u0275\u0275property("value", j_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", j_r16.code, " - ", j_r16.name);
  }
}
function WarehouseListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 64);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_14_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 50)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 51);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 65);
    \u0275\u0275conditionalCreate(9, WarehouseListComponent_Conditional_14_Conditional_9_Template, 2, 1, "div", 66);
    \u0275\u0275elementStart(10, "div", 67)(11, "div", 68)(12, "label");
    \u0275\u0275text(13, "Nom ");
    \u0275\u0275elementStart(14, "span", 69);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function WarehouseListComponent_Conditional_14_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 68)(18, "label");
    \u0275\u0275text(19, "Code ");
    \u0275\u0275elementStart(20, "span", 69);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function WarehouseListComponent_Conditional_14_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.code, $event) || (ctx_r1.form.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 68)(24, "label");
    \u0275\u0275text(25, "Responsable de l'entrep\xF4t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function WarehouseListComponent_Conditional_14_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.responsableName, $event) || (ctx_r1.form.responsableName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "small", 73);
    \u0275\u0275text(28, "Appara\xEEt sur les bordereaux de r\xE9ception de transfert.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 68)(30, "label");
    \u0275\u0275text(31, "Journal comptable stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 74);
    \u0275\u0275twoWayListener("ngModelChange", function WarehouseListComponent_Conditional_14_Template_select_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.stockJournalId, $event) || (ctx_r1.form.stockJournalId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(33, "option", 75);
    \u0275\u0275text(34, "\u2014 Aucun (pas d'\xE9criture automatique) \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(35, WarehouseListComponent_Conditional_14_For_36_Template, 2, 3, "option", 76, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "small", 73);
    \u0275\u0275text(38, "Journal utilis\xE9 pour les \xE9critures de valorisation des mouvements de stock.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 67)(40, "div", 68)(41, "label");
    \u0275\u0275text(42, "Journal de vente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "select", 74);
    \u0275\u0275twoWayListener("ngModelChange", function WarehouseListComponent_Conditional_14_Template_select_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.salesJournalId, $event) || (ctx_r1.form.salesJournalId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(44, "option", 75);
    \u0275\u0275text(45, "\u2014 Aucun \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(46, WarehouseListComponent_Conditional_14_For_47_Template, 2, 3, "option", 76, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "small", 73);
    \u0275\u0275text(49, "Pr\xE9-charg\xE9 sur les bons de commande cr\xE9\xE9s depuis cet entrep\xF4t.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 68)(51, "label");
    \u0275\u0275text(52, "Journal de caisse / banque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "select", 74);
    \u0275\u0275twoWayListener("ngModelChange", function WarehouseListComponent_Conditional_14_Template_select_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cashJournalId, $event) || (ctx_r1.form.cashJournalId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(54, "option", 75);
    \u0275\u0275text(55, "\u2014 Aucun \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(56, WarehouseListComponent_Conditional_14_For_57_Template, 2, 3, "option", 76, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "small", 73);
    \u0275\u0275text(59, "Pr\xE9-charg\xE9 sur les paiements des factures de cet entrep\xF4t.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(60, "div", 77)(61, "button", 16);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_14_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(62, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "button", 78);
    \u0275\u0275listener("click", function WarehouseListComponent_Conditional_14_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(64, "span", 5);
    \u0275\u0275text(65, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(66);
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
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.responsableName);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.stockJournalId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.journals);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.salesJournalId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.saleJournals);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cashJournalId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.cashBankJournals);
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
    this.saleJournals = [];
    this.cashBankJournals = [];
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
    this.canCreate = false;
    this.canEdit = false;
    this.canDelete = false;
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    this.canCreate = this.authService.hasPermission("STOCK", "INVENTAIRE", "CREATE");
    this.canEdit = this.authService.hasPermission("STOCK", "INVENTAIRE", "EDIT");
    this.canDelete = this.authService.hasPermission("STOCK", "INVENTAIRE", "DELETE");
    this.load();
    this.accountingService.getJournals(this.companyId).subscribe((j) => {
      this.journals = j.filter((jj) => jj.type === "general" || (jj.code || "").toUpperCase() === "STK");
      this.saleJournals = j.filter((jj) => jj.type === "sale");
      this.cashBankJournals = j.filter((jj) => jj.type === "cash" || jj.type === "bank");
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
  deleteWarehouse(w) {
    if (!confirm(`Supprimer l'entrep\xF4t "${w.name}" ?`))
      return;
    this.stockService.deleteWarehouse(w.id).subscribe({
      next: () => {
        this.showSuccessMsg("Entrep\xF4t supprim\xE9");
        this.load();
      },
      error: (e) => this.showSuccessMsg("Erreur : " + (e.error?.message || "Impossible de supprimer"))
    });
  }
  setDefault(w) {
    this.stockService.setDefaultWarehouse(w.id).subscribe({
      next: () => {
        this.warehouses.forEach((wh) => wh.isDefault = false);
        w.isDefault = true;
        this.showSuccessMsg(`"${w.name}" d\xE9fini comme magasin par d\xE9faut`);
      },
      error: (e) => this.showSuccessMsg("Erreur : " + (e.error?.message || "Impossible"))
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
      this.importLoading = true;
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
      this.importLoading = false;
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
    }, decls: 15, vars: 4, consts: [["importInput", ""], [1, "page-container"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [2, "display", "flex", "gap", "8px", "align-items", "center"], [1, "loading"], [1, "empty-state"], [1, "wh-grid"], [1, "modal-overlay"], ["title", "T\xE9l\xE9charger le mod\xE8le Excel", 1, "btn-secondary", 3, "click"], ["title", "Importer depuis Excel", 1, "btn-secondary", 3, "click", "disabled"], [1, "btn-primary", 3, "click"], [1, "material-icons", "spin"], [2, "display", "flex", "gap", "8px", "justify-content", "center", "flex-wrap", "wrap"], [1, "btn-secondary", 3, "click"], [1, "wh-card", 3, "expanded"], [1, "wh-card"], [1, "wh-header", 3, "click"], [1, "wh-icon"], [1, "wh-info"], [1, "wh-name"], [1, "badge-default"], [1, "wh-code"], [1, "wh-meta"], [1, "meta-chip"], [1, "meta-chip", "meta-chip-sale"], [1, "meta-chip", "meta-chip-cash"], [1, "meta-chip", "loc"], [1, "wh-actions"], ["title", "D\xE9finir comme magasin par d\xE9faut", 1, "btn-icon", "btn-icon-default"], ["title", "Modifier", 1, "btn-icon"], ["title", "Supprimer", 1, "btn-icon", "btn-icon-danger"], [1, "material-icons", "expand-icon"], [1, "wh-locations"], ["title", "D\xE9finir comme magasin par d\xE9faut", 1, "btn-icon", "btn-icon-default", 3, "click"], ["title", "Modifier", 1, "btn-icon", 3, "click"], ["title", "Supprimer", 1, "btn-icon", "btn-icon-danger", 3, "click"], [1, "locations-title"], [1, "no-locs"], [1, "loc-list"], [1, "loc-item"], [1, "material-icons", "loc-icon"], [1, "loc-info"], [1, "loc-name"], [1, "loc-usage"], [1, "modal-overlay", 3, "click"], [1, "modal", 2, "max-width", "500px", "position", "relative", 3, "click"], [2, "position", "absolute", "inset", "0", "background", "rgba(255,255,255,0.9)", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "z-index", "10", "border-radius", "inherit"], [1, "modal-header"], [1, "btn-close", 3, "click"], [2, "overflow-x", "auto", "max-height", "400px"], [2, "width", "100%", "border-collapse", "collapse", "font-size", "13px"], [2, "background", "#f4f6f8"], [2, "padding", "8px", "border-bottom", "2px solid #e2e8ef", "text-align", "left"], [2, "border-bottom", "1px solid #f0f0f0"], [2, "display", "flex", "justify-content", "flex-end", "gap", "10px", "padding", "16px", "border-top", "1px solid #f0f0f0"], [1, "spinner"], [2, "margin-top", "14px", "color", "#017E84", "font-weight", "600"], [2, "font-size", "12px", "color", "#6c757d", "margin-top", "4px"], [2, "padding", "7px 8px", "color", "#adb5bd"], [2, "padding", "7px 8px", "font-weight", "600"], [2, "padding", "7px 8px", "font-family", "monospace", "color", "#017E84"], [1, "modal", 3, "click"], [1, "modal-body"], [1, "alert", "alert-danger"], [1, "form-row"], [1, "form-group"], [1, "req"], ["type", "text", "placeholder", "Ex: D\xE9p\xF4t Central", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ex: DC1", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["type", "text", "placeholder", "Ex: Jean Dupont", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "hint"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "value"], [1, "modal-footer"], [1, "btn-primary", 3, "click", "disabled"]], template: function WarehouseListComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(8, "div", 6);
        \u0275\u0275conditionalCreate(9, WarehouseListComponent_Conditional_9_Template, 12, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(10, WarehouseListComponent_Conditional_10_Template, 4, 0, "div", 7)(11, WarehouseListComponent_Conditional_11_Template, 6, 1, "div", 8)(12, WarehouseListComponent_Conditional_12_Template, 3, 0, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(13, WarehouseListComponent_Conditional_13_Template, 29, 3, "div", 10);
        \u0275\u0275conditionalCreate(14, WarehouseListComponent_Conditional_14_Template, 67, 14, "div", 10);
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.canCreate ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 10 : ctx.warehouses.length === 0 ? 11 : 12);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showImportModal ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal ? 14 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.loading[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.loading[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--border);\n}\n.loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  max-width: 360px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.wh-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.wh-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  transition: box-shadow 0.2s;\n}\n.wh-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.wh-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  cursor: pointer;\n}\n.wh-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background:\n    linear-gradient(\n      135deg,\n      #2c7be5,\n      #6610f2);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.wh-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 22px;\n}\n.wh-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.wh-info[_ngcontent-%COMP%]   .wh-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.wh-info[_ngcontent-%COMP%]   .wh-code[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-family: monospace;\n}\n.wh-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  background: var(--bg-hover);\n  border-radius: 12px;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.meta-chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.meta-chip.loc[_ngcontent-%COMP%] {\n  background: #e8f0fb;\n  color: var(--primary);\n}\n.meta-chip.loc[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.meta-chip.meta-chip-sale[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #166534;\n}\n.meta-chip.meta-chip-sale[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.meta-chip.meta-chip-cash[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #92400e;\n}\n.meta-chip.meta-chip-cash[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.wh-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.expand-icon[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 20px !important;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  background: #e8f0fb;\n}\n.btn-icon.btn-icon-danger[_ngcontent-%COMP%]:hover {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.btn-icon.btn-icon-default[_ngcontent-%COMP%]:hover {\n  color: #f59e0b;\n  background: #fef3c7;\n}\n.badge-default[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  margin-left: 8px;\n  padding: 2px 8px;\n  background: #fef3c7;\n  color: #92400e;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n  vertical-align: middle;\n}\n.wh-locations[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f0f0;\n  padding: 16px 20px;\n  background: var(--bg-hover);\n}\n.locations-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n}\n.no-locs[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.loc-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.loc-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  background: var(--bg-surface);\n  border-radius: 6px;\n  border: 1px solid var(--border);\n}\n.loc-icon[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: var(--primary);\n}\n.loc-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.loc-info[_ngcontent-%COMP%]   .loc-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.loc-info[_ngcontent-%COMP%]   .loc-usage[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.loc-account[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: monospace;\n  color: var(--text-muted);\n  background: var(--bg-hover);\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled, \n.btn-outline[_ngcontent-%COMP%]:disabled, \n.btn-import[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--text-muted);\n  color: var(--text-primary);\n}\n.btn-import[_ngcontent-%COMP%] {\n  background: var(--accent-light);\n  color: var(--accent);\n  border: 1px solid #b2dfdf;\n}\n.btn-import[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  width: 520px;\n  max-width: 100%;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.btn-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 22px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 14px 22px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 14px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-group[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 3px;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n/*# sourceMappingURL=warehouse-list.component.css.map */'] });
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
      @if (canCreate) {
        <button class="btn-secondary" (click)="downloadTemplate()" title="T\xE9l\xE9charger le mod\xE8le Excel">
          <span class="material-icons">download</span> Mod\xE8le
        </button>
        <button class="btn-secondary" (click)="triggerImport()" [disabled]="importLoading" title="Importer depuis Excel">
          <span class="material-icons">upload_file</span> Importer
        </button>
        <button class="btn-primary" (click)="openCreate()"><span class="material-icons">add</span> Nouvel entrep\xF4t</button>
      }
    </div>
  </div>

  @if (loading) {
    <div class="loading"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else if (warehouses.length === 0) {
    <div class="empty-state">
      <span class="material-icons">warehouse</span>
      <p>Aucun entrep\xF4t. Cr\xE9ez votre premier entrep\xF4t pour commencer \xE0 g\xE9rer le stock.</p>
      @if (canCreate) {
        <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
          <button class="btn-secondary" (click)="downloadTemplate()"><span class="material-icons">download</span> Mod\xE8le Excel</button>
          <button class="btn-secondary" (click)="triggerImport()"><span class="material-icons">upload_file</span> Importer</button>
          <button class="btn-primary" (click)="openCreate()"><span class="material-icons">add</span> Cr\xE9er un entrep\xF4t</button>
        </div>
      }
    </div>
  } @else {
    <div class="wh-grid">
      @for (wh of warehouses; track wh.id) {
        <div class="wh-card" [class.expanded]="selectedWarehouseId === wh.id">
          <div class="wh-header" (click)="selectWarehouse(wh.id!)">
            <div class="wh-icon"><span class="material-icons">warehouse</span></div>
            <div class="wh-info">
              <div class="wh-name">
                {{ wh.name }}
                @if (wh.isDefault) {
                  <span class="badge-default">Par d\xE9faut</span>
                }
              </div>
              <div class="wh-code">{{ wh.code }}</div>
            </div>
            <div class="wh-meta">
              @if (wh.responsableName) {
                <span class="meta-chip"><span class="material-icons">person</span> {{ wh.responsableName }}</span>
              }
              @if (wh.stockJournalName) {
                <span class="meta-chip"><span class="material-icons">book</span> {{ wh.stockJournalName }}</span>
              }
              @if (wh.salesJournalName) {
                <span class="meta-chip meta-chip-sale"><span class="material-icons">receipt_long</span> {{ wh.salesJournalName }}</span>
              }
              @if (wh.cashJournalName) {
                <span class="meta-chip meta-chip-cash"><span class="material-icons">payments</span> {{ wh.cashJournalName }}</span>
              }
              <span class="meta-chip loc"><span class="material-icons">location_on</span> {{ wh.stockLocationName || 'Stock' }}</span>
            </div>
            <div class="wh-actions">
              @if (canEdit && !wh.isDefault) {
                <button class="btn-icon btn-icon-default" (click)="setDefault(wh); $event.stopPropagation()" title="D\xE9finir comme magasin par d\xE9faut">
                  <span class="material-icons">star_outline</span>
                </button>
              }
              @if (canEdit) {
                <button class="btn-icon" (click)="openEdit(wh); $event.stopPropagation()" title="Modifier">
                  <span class="material-icons">edit</span>
                </button>
              }
              @if (canDelete) {
                <button class="btn-icon btn-icon-danger" (click)="deleteWarehouse(wh); $event.stopPropagation()" title="Supprimer">
                  <span class="material-icons">delete</span>
                </button>
              }
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
    <div class="modal" (click)="$event.stopPropagation()" style="max-width:500px;position:relative">
      @if (importLoading) {
        <div style="position:absolute;inset:0;background:rgba(255,255,255,0.9);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10;border-radius:inherit">
          <div class="spinner"></div>
          <p style="margin-top:14px;color:#017E84;font-weight:600">Importation en cours\u2026</p>
          <p style="font-size:12px;color:#6c757d;margin-top:4px">{{ importRows.length }} ligne(s) en cours de traitement</p>
        </div>
      }
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
          <label>Responsable de l'entrep\xF4t</label>
          <input type="text" [(ngModel)]="form.responsableName" class="form-control" placeholder="Ex: Jean Dupont" />
          <small class="hint">Appara\xEEt sur les bordereaux de r\xE9ception de transfert.</small>
        </div>
        <div class="form-group">
          <label>Journal comptable stock</label>
          <select [(ngModel)]="form.stockJournalId" class="form-control">
            <option [ngValue]="null">\u2014 Aucun (pas d'\xE9criture automatique) \u2014</option>
            @for (j of journals; track j.id) { <option [value]="j.id">{{ j.code }} - {{ j.name }}</option> }
          </select>
          <small class="hint">Journal utilis\xE9 pour les \xE9critures de valorisation des mouvements de stock.</small>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Journal de vente</label>
            <select [(ngModel)]="form.salesJournalId" class="form-control">
              <option [ngValue]="null">\u2014 Aucun \u2014</option>
              @for (j of saleJournals; track j.id) { <option [value]="j.id">{{ j.code }} - {{ j.name }}</option> }
            </select>
            <small class="hint">Pr\xE9-charg\xE9 sur les bons de commande cr\xE9\xE9s depuis cet entrep\xF4t.</small>
          </div>
          <div class="form-group">
            <label>Journal de caisse / banque</label>
            <select [(ngModel)]="form.cashJournalId" class="form-control">
              <option [ngValue]="null">\u2014 Aucun \u2014</option>
              @for (j of cashBankJournals; track j.id) { <option [value]="j.id">{{ j.code }} - {{ j.name }}</option> }
            </select>
            <small class="hint">Pr\xE9-charg\xE9 sur les paiements des factures de cet entrep\xF4t.</small>
          </div>
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
`, styles: ['/* src/app/modules/stock/components/warehouses/warehouse-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: var(--primary);\n}\n.loading,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.loading .material-icons,\n.empty-state .material-icons {\n  font-size: 48px;\n  color: var(--border);\n}\n.loading p,\n.empty-state p {\n  margin: 0;\n  text-align: center;\n  max-width: 360px;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.wh-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.wh-card {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  transition: box-shadow 0.2s;\n}\n.wh-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.wh-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  cursor: pointer;\n}\n.wh-icon {\n  width: 44px;\n  height: 44px;\n  background:\n    linear-gradient(\n      135deg,\n      #2c7be5,\n      #6610f2);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.wh-icon .material-icons {\n  color: white;\n  font-size: 22px;\n}\n.wh-info {\n  flex: 1;\n}\n.wh-info .wh-name {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.wh-info .wh-code {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-family: monospace;\n}\n.wh-meta {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.meta-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  background: var(--bg-hover);\n  border-radius: 12px;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.meta-chip .material-icons {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.meta-chip.loc {\n  background: #e8f0fb;\n  color: var(--primary);\n}\n.meta-chip.loc .material-icons {\n  color: var(--primary);\n}\n.meta-chip.meta-chip-sale {\n  background: #f0fdf4;\n  color: #166534;\n}\n.meta-chip.meta-chip-sale .material-icons {\n  color: #16a34a;\n}\n.meta-chip.meta-chip-cash {\n  background: #fff7ed;\n  color: #92400e;\n}\n.meta-chip.meta-chip-cash .material-icons {\n  color: #d97706;\n}\n.wh-actions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.expand-icon {\n  color: var(--text-muted);\n  font-size: 20px !important;\n}\n.btn-icon {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n}\n.btn-icon .material-icons {\n  font-size: 18px;\n}\n.btn-icon:hover {\n  color: var(--primary);\n  background: #e8f0fb;\n}\n.btn-icon.btn-icon-danger:hover {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.btn-icon.btn-icon-default:hover {\n  color: #f59e0b;\n  background: #fef3c7;\n}\n.badge-default {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  margin-left: 8px;\n  padding: 2px 8px;\n  background: #fef3c7;\n  color: #92400e;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n  vertical-align: middle;\n}\n.wh-locations {\n  border-top: 1px solid #f0f0f0;\n  padding: 16px 20px;\n  background: var(--bg-hover);\n}\n.locations-title {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n}\n.no-locs {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.loc-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.loc-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  background: var(--bg-surface);\n  border-radius: 6px;\n  border: 1px solid var(--border);\n}\n.loc-icon {\n  font-size: 18px !important;\n  color: var(--primary);\n}\n.loc-info {\n  flex: 1;\n}\n.loc-info .loc-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.loc-info .loc-usage {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.loc-account {\n  font-size: 12px;\n  font-family: monospace;\n  color: var(--text-muted);\n  background: var(--bg-hover);\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.btn-primary,\n.btn-secondary,\n.btn-outline,\n.btn-import {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons,\n.btn-outline .material-icons,\n.btn-import .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled,\n.btn-outline:disabled,\n.btn-import:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--primary);\n  color: white;\n  border: none;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover {\n  background: var(--bg-hover);\n}\n.btn-outline {\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.btn-outline:hover {\n  border-color: var(--text-muted);\n  color: var(--text-primary);\n}\n.btn-import {\n  background: var(--accent-light);\n  color: var(--accent);\n  border: 1px solid #b2dfdf;\n}\n.btn-import:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  width: 520px;\n  max-width: 100%;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header h2 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.btn-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.btn-close .material-icons {\n  font-size: 20px;\n}\n.modal-body {\n  padding: 20px 22px;\n}\n.modal-footer {\n  padding: 14px 22px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 14px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group .req {\n  color: var(--danger);\n}\n.form-group .hint {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 3px;\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control:focus {\n  border-color: var(--primary);\n}\n.form-control:disabled {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.alert {\n  padding: 10px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n/*# sourceMappingURL=warehouse-list.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AccountingService }, { type: AuthService }], { importInput: [{
    type: ViewChild,
    args: ["importInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WarehouseListComponent, { className: "WarehouseListComponent", filePath: "app/modules/stock/components/warehouses/warehouse-list.component.ts", lineNumber: 20 });
})();
export {
  WarehouseListComponent
};
//# sourceMappingURL=chunk-3U3PDSZR.js.map
