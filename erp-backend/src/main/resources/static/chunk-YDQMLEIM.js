import {
  RemiseService
} from "./chunk-RVH7W7CX.js";
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
} from "./chunk-NJUNWWEJ.js";
import {
  __async
} from "./chunk-KBUIKKCC.js";

// src/app/modules/purchases/components/suppliers/supplier-list.component.ts
var _c0 = ["importInput"];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function SupplierListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadTemplate());
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Mod\xE8le Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 16);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.triggerImport());
    });
    \u0275\u0275elementStart(5, "span", 9);
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
function SupplierListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouveau fournisseur ");
    \u0275\u0275elementEnd();
  }
}
function SupplierListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 9);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.successMsg);
  }
}
function SupplierListComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "span", 18);
    \u0275\u0275text(2, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function SupplierListComponent_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_18_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275text(1, "Ajouter un fournisseur");
    \u0275\u0275elementEnd();
  }
}
function SupplierListComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 9);
    \u0275\u0275text(2, "store");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun fournisseur.");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SupplierListComponent_Conditional_18_Conditional_5_Template, 2, 0, "button", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.canCreate ? 5 : -1);
  }
}
function SupplierListComponent_Conditional_19_For_15_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_19_For_15_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const s_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEdit(s_r7));
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function SupplierListComponent_Conditional_19_For_15_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_19_For_15_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const s_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteSupplier(s_r7));
    });
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function SupplierListComponent_Conditional_19_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 20);
    \u0275\u0275conditionalCreate(11, SupplierListComponent_Conditional_19_For_15_Conditional_11_Template, 3, 0, "button", 21);
    \u0275\u0275conditionalCreate(12, SupplierListComponent_Conditional_19_For_15_Conditional_12_Template, 3, 0, "button", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r7.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r7.phone || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r7.address || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.canEdit ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canDelete ? 12 : -1);
  }
}
function SupplierListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "table", 19)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, SupplierListComponent_Conditional_19_For_15_Template, 13, 6, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.filtered);
  }
}
function SupplierListComponent_Conditional_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementStart(2, "p", 36);
    \u0275\u0275text(3, "Importation en cours\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.importRows.length, " ligne(s) en cours de traitement");
  }
}
function SupplierListComponent_Conditional_20_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 34)(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 40);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const \u0275$index_177_r11 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_177_r11 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10["Nom*"] || row_r10["Nom"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10["R\xE9f\xE9rence"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10["T\xE9l\xE9phone"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10["Email"] || "\u2014");
  }
}
function SupplierListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeImportModal());
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_20_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(2, SupplierListComponent_Conditional_20_Conditional_2_Template, 6, 1, "div", 27);
    \u0275\u0275elementStart(3, "div", 28)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 29);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_20_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeImportModal());
    });
    \u0275\u0275elementStart(7, "span", 9);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 30)(10, "table", 31)(11, "thead")(12, "tr", 32)(13, "th", 33);
    \u0275\u0275text(14, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 33);
    \u0275\u0275text(16, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 33);
    \u0275\u0275text(18, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 33);
    \u0275\u0275text(20, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 33);
    \u0275\u0275text(22, "Email");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275repeaterCreate(24, SupplierListComponent_Conditional_20_For_25_Template, 11, 5, "tr", 34, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 35)(27, "button", 15);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_20_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeImportModal());
    });
    \u0275\u0275text(28, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 17);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_20_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmImport());
    });
    \u0275\u0275elementStart(30, "span", 9);
    \u0275\u0275text(31, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.importLoading ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Aper\xE7u import fournisseurs (", ctx_r2.importRows.length, " ligne(s))");
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r2.importRows);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Confirmer (", ctx_r2.importRows.length, " fournisseurs) ");
  }
}
function SupplierListComponent_Conditional_21_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 9);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 62);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_21_Conditional_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.errorMsg = "");
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.errorMsg);
  }
}
function SupplierListComponent_Conditional_21_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r14 = ctx.$implicit;
    \u0275\u0275property("value", t_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", t_r14, "%");
  }
}
function SupplierListComponent_Conditional_21_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 58);
    \u0275\u0275text(1, "Chargement des remises...");
    \u0275\u0275elementEnd();
  }
}
function SupplierListComponent_Conditional_21_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 58);
    \u0275\u0275text(1, "Aucune remise configur\xE9e pour ce fournisseur.");
    \u0275\u0275elementEnd();
  }
}
function SupplierListComponent_Conditional_21_Conditional_55_For_15_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r17 = ctx.$implicit;
    \u0275\u0275property("value", cat_r17.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r17.name);
  }
}
function SupplierListComponent_Conditional_21_Conditional_55_For_15_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r18 = ctx.$implicit;
    \u0275\u0275property("value", t_r18.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r18.label);
  }
}
function SupplierListComponent_Conditional_21_Conditional_55_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "select", 65);
    \u0275\u0275twoWayListener("ngModelChange", function SupplierListComponent_Conditional_21_Conditional_55_For_15_Template_select_ngModelChange_2_listener($event) {
      const r_r16 = \u0275\u0275restoreView(_r15).$implicit;
      \u0275\u0275twoWayBindingSet(r_r16.categoryId, $event) || (r_r16.categoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(3, "option", 55);
    \u0275\u0275text(4, "-- Cat\xE9gorie --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, SupplierListComponent_Conditional_21_Conditional_55_For_15_For_6_Template, 2, 2, "option", 55, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "select", 65);
    \u0275\u0275twoWayListener("ngModelChange", function SupplierListComponent_Conditional_21_Conditional_55_For_15_Template_select_ngModelChange_8_listener($event) {
      const r_r16 = \u0275\u0275restoreView(_r15).$implicit;
      \u0275\u0275twoWayBindingSet(r_r16.typeRemise, $event) || (r_r16.typeRemise = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SupplierListComponent_Conditional_21_Conditional_55_For_15_Template_select_ngModelChange_8_listener() {
      const r_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onRemiseTypeChange(r_r16));
    });
    \u0275\u0275repeaterCreate(9, SupplierListComponent_Conditional_21_Conditional_55_For_15_For_10_Template, 2, 2, "option", 55, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 64)(12, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function SupplierListComponent_Conditional_21_Conditional_55_For_15_Template_input_ngModelChange_12_listener($event) {
      const r_r16 = \u0275\u0275restoreView(_r15).$implicit;
      \u0275\u0275twoWayBindingSet(r_r16.montantHT, $event) || (r_r16.montantHT = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SupplierListComponent_Conditional_21_Conditional_55_For_15_Template_input_ngModelChange_12_listener() {
      const r_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onRemiseHtChange(r_r16));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 67);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "button", 68);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_21_Conditional_55_For_15_Template_button_click_17_listener() {
      const \u0275$index_339_r19 = \u0275\u0275restoreView(_r15).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeRemise(\u0275$index_339_r19));
    });
    \u0275\u0275elementStart(18, "span", 9);
    \u0275\u0275text(19, "close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r16.categoryId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.categories);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", r_r16.typeRemise);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.TYPE_OPTS);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", r_r16.montantHT);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 5, r_r16.montantTTC, "1.0-2"));
  }
}
function SupplierListComponent_Conditional_21_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "table", 63)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 64);
    \u0275\u0275text(9, "Montant HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 64);
    \u0275\u0275text(11, "Montant TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, SupplierListComponent_Conditional_21_Conditional_55_For_15_Template, 20, 8, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.remises);
  }
}
function SupplierListComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showModal = false);
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_21_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 28)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showModal = false);
    });
    \u0275\u0275elementStart(6, "span", 9);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, SupplierListComponent_Conditional_21_Conditional_8_Template, 6, 1, "div", 42);
    \u0275\u0275elementStart(9, "div", 43)(10, "div", 44);
    \u0275\u0275text(11, "Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 45)(13, "label");
    \u0275\u0275text(14, "Nom ");
    \u0275\u0275elementStart(15, "span", 46);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function SupplierListComponent_Conditional_21_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.name, $event) || (ctx_r2.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 48)(19, "div", 45)(20, "label");
    \u0275\u0275text(21, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function SupplierListComponent_Conditional_21_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.email, $event) || (ctx_r2.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 45)(24, "label");
    \u0275\u0275text(25, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function SupplierListComponent_Conditional_21_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.phone, $event) || (ctx_r2.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 45)(28, "label");
    \u0275\u0275text(29, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function SupplierListComponent_Conditional_21_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.address, $event) || (ctx_r2.form.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 52);
    \u0275\u0275text(32, "Pr\xE9compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 48)(34, "div", 45)(35, "label");
    \u0275\u0275text(36, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 45)(39, "label");
    \u0275\u0275text(40, "Taux pr\xE9compte (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function SupplierListComponent_Conditional_21_Template_select_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.tauxPrecompte, $event) || (ctx_r2.form.tauxPrecompte = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SupplierListComponent_Conditional_21_Template_select_ngModelChange_41_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTauxChange());
    });
    \u0275\u0275elementStart(42, "option", 55);
    \u0275\u0275text(43, "-- Aucun --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(44, SupplierListComponent_Conditional_21_For_45_Template, 2, 2, "option", 55, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 56)(47, "span");
    \u0275\u0275text(48, "Remises");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 57);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_21_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addRemise());
    });
    \u0275\u0275elementStart(50, "span", 9);
    \u0275\u0275text(51, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, " Ajouter ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(53, SupplierListComponent_Conditional_21_Conditional_53_Template, 2, 0, "p", 58)(54, SupplierListComponent_Conditional_21_Conditional_54_Template, 2, 0, "p", 58)(55, SupplierListComponent_Conditional_21_Conditional_55_Template, 16, 0, "div", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 60)(57, "button", 15);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_21_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showModal = false);
    });
    \u0275\u0275text(58, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 61);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_21_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveSupplier());
    });
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.editingId ? "Modifier le fournisseur" : "Nouveau fournisseur");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.errorMsg ? 8 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.name);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.address);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.tauxPrecompte);
    \u0275\u0275advance();
    \u0275\u0275property("value", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.TAUX_OPTS);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r2.loadingRms ? 53 : ctx_r2.remises.length === 0 ? 54 : 55);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving ? "Sauvegarde..." : "Sauvegarder", " ");
  }
}
var SUP_HEADERS = ["Nom*", "R\xE9f\xE9rence", "T\xE9l\xE9phone", "Email", "Adresse"];
var SUP_SAMPLE = ["Fournisseur B\xE2timent SARL", "F001", "+237 222000000", "contact@fourn.cm", "Yaound\xE9, Cameroun"];
var SupplierListComponent = class _SupplierListComponent {
  constructor(accountingService, remiseSvc, stockSvc, authService) {
    this.accountingService = accountingService;
    this.remiseSvc = remiseSvc;
    this.stockSvc = stockSvc;
    this.authService = authService;
    this.suppliers = [];
    this.filtered = [];
    this.categories = [];
    this.search = "";
    this.loading = false;
    this.showModal = false;
    this.editingId = null;
    this.saving = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.canCreate = false;
    this.canEdit = false;
    this.canDelete = false;
    this.canImport = false;
    this.form = this.emptyForm();
    this.remises = [];
    this.loadingRms = false;
    this.TAUX_OPTS = [1, 2, 2.5, 5, 10];
    this.TYPE_OPTS = [
      { value: "brasserie", label: "Brasseries" },
      { value: "guinness", label: "Guinness" }
    ];
    this.showImportModal = false;
    this.importRows = [];
    this.importLoading = false;
  }
  ngOnInit() {
    this.canCreate = this.authService.hasPermission("ACHATS", "FOURNISSEURS", "CREATE");
    this.canEdit = this.authService.hasPermission("ACHATS", "FOURNISSEURS", "EDIT");
    this.canDelete = this.authService.hasPermission("ACHATS", "FOURNISSEURS", "DELETE");
    this.canImport = this.authService.hasPermission("ACHATS", "FOURNISSEURS", "IMPORT");
    this.loadSuppliers();
    this.stockSvc.getCategories(this.authService.getCompanyId() ?? 1).subscribe((c) => this.categories = c);
  }
  get companyId() {
    return this.authService.getCompanyId() ?? 1;
  }
  loadSuppliers() {
    this.loading = true;
    this.accountingService.getPartners(this.companyId).subscribe({
      next: (data) => {
        this.suppliers = data.filter((p) => p.type === "supplier" || p.type === "both");
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilter() {
    const q = this.search.toLowerCase();
    this.filtered = q ? this.suppliers.filter((s) => s.name?.toLowerCase().includes(q) || s.phone?.toLowerCase().includes(q)) : [...this.suppliers];
  }
  openNew() {
    this.editingId = null;
    this.form = this.emptyForm();
    this.remises = [];
    this.showModal = true;
    this.errorMsg = "";
  }
  openEdit(s) {
    this.editingId = s.id;
    this.form = {
      name: s.name,
      email: s.email ?? "",
      phone: s.phone ?? "",
      address: s.address ?? "",
      type: s.type ?? "supplier",
      tauxPrecompte: s.tauxPrecompte ?? void 0,
      companyId: s.companyId
    };
    this.remises = [];
    this.showModal = true;
    this.errorMsg = "";
    if (s.id) {
      this.loadingRms = true;
      this.remiseSvc.getByPartner(s.id, this.companyId).subscribe({
        next: (rms) => {
          this.remises = rms.map((r) => ({
            id: r.id,
            categoryId: r.categoryId,
            typeRemise: r.typeRemise ?? "brasserie",
            montantHT: r.montantFixe,
            montantTTC: this.calcTTC(r.montantFixe, r.typeRemise ?? "brasserie", s.tauxPrecompte ?? 0)
          }));
          this.loadingRms = false;
        },
        error: () => {
          this.loadingRms = false;
        }
      });
    }
  }
  calcTTC(ht, type, taux) {
    if (type === "guinness")
      return ht;
    return ht + ht * (taux / 100);
  }
  onTauxChange() {
    const taux = this.form.tauxPrecompte ?? 0;
    this.remises.forEach((r) => {
      r.montantTTC = this.calcTTC(r.montantHT, r.typeRemise, taux);
    });
  }
  onRemiseHtChange(r) {
    r.montantTTC = this.calcTTC(r.montantHT, r.typeRemise, this.form.tauxPrecompte ?? 0);
  }
  onRemiseTypeChange(r) {
    r.montantTTC = this.calcTTC(r.montantHT, r.typeRemise, this.form.tauxPrecompte ?? 0);
  }
  addRemise() {
    this.remises.push({ categoryId: 0, typeRemise: "brasserie", montantHT: 0, montantTTC: 0 });
  }
  removeRemise(i) {
    this.remises.splice(i, 1);
  }
  saveSupplier() {
    if (!this.form.name) {
      this.errorMsg = "Le nom est obligatoire";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    this.form.companyId = this.companyId;
    this.form.type = "supplier";
    const action = this.editingId ? this.accountingService.updatePartner(this.editingId, this.form) : this.accountingService.createPartner(this.form);
    action.subscribe({
      next: (saved) => {
        const supplierId = saved.id;
        const validRms = this.remises.filter((r) => r.categoryId > 0);
        const saves = validRms.map((r) => this.remiseSvc.save({
          id: r.id,
          partnerId: supplierId,
          categoryId: r.categoryId,
          typeRemise: r.typeRemise,
          montantFixe: r.montantHT,
          companyId: this.companyId
        }));
        if (saves.length > 0) {
          forkJoin(saves).subscribe({
            next: () => this.finishSave(this.editingId ? "Fournisseur mis \xE0 jour" : "Fournisseur cr\xE9\xE9"),
            error: () => this.finishSave(this.editingId ? "Fournisseur mis \xE0 jour (erreur remises)" : "Fournisseur cr\xE9\xE9 (erreur remises)")
          });
        } else {
          this.finishSave(this.editingId ? "Fournisseur mis \xE0 jour" : "Fournisseur cr\xE9\xE9");
        }
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || "Erreur lors de la sauvegarde";
      }
    });
  }
  finishSave(msg) {
    this.saving = false;
    this.showModal = false;
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 4e3);
    this.loadSuppliers();
  }
  deleteSupplier(s) {
    if (!confirm(`Supprimer le fournisseur "${s.name}" ?`))
      return;
    this.accountingService.deletePartner(s.id).subscribe({
      next: () => {
        this.successMsg = "Fournisseur supprim\xE9";
        setTimeout(() => this.successMsg = "", 4e3);
        this.loadSuppliers();
      },
      error: (e) => {
        this.errorMsg = e.error?.message || "Impossible de supprimer";
        setTimeout(() => this.errorMsg = "", 5e3);
      }
    });
  }
  emptyForm() {
    return { name: "", email: "", phone: "", address: "", type: "supplier", tauxPrecompte: void 0 };
  }
  // === Import Excel ===
  downloadTemplate() {
    downloadExcelTemplate(SUP_HEADERS, SUP_SAMPLE, "modele_fournisseurs.xlsx");
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
          this.successMsg = 'Aucune ligne valide (colonne "Nom*" requise)';
          setTimeout(() => this.successMsg = "", 5e3);
          this.importLoading = false;
          return;
        }
        this.showImportModal = true;
      } catch (e) {
        this.successMsg = "Erreur : " + e.message;
        setTimeout(() => this.successMsg = "", 5e3);
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
          ref: String(row["R\xE9f\xE9rence"] || "").trim() || void 0,
          phone: String(row["T\xE9l\xE9phone"] || "").trim() || void 0,
          email: String(row["Email"] || "").trim() || void 0,
          address: String(row["Adresse"] || "").trim() || void 0,
          type: "supplier",
          companyId: this.companyId
        };
        try {
          yield this.accountingService.createPartner(dto).toPromise();
          done++;
        } catch (e) {
          errors++;
        }
      }
      this.importLoading = false;
      this.closeImportModal();
      this.loadSuppliers();
      this.successMsg = `Import termin\xE9 : ${done} cr\xE9\xE9(s), ${errors} erreur(s)`;
      setTimeout(() => this.successMsg = "", 5e3);
    });
  }
  static {
    this.\u0275fac = function SupplierListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SupplierListComponent)(\u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(RemiseService), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupplierListComponent, selectors: [["app-supplier-list"]], viewQuery: function SupplierListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.importInput = _t.first);
      }
    }, decls: 22, vars: 8, consts: [["importInput", ""], [1, "sup-page"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change"], [1, "page-header"], [1, "subtitle"], [2, "display", "flex", "gap", "8px", "align-items", "center"], [1, "btn-primary"], [1, "alert", "alert-success"], [1, "search-bar"], [1, "material-icons"], ["type", "text", "placeholder", "Rechercher...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "loading-state"], [1, "empty-state"], [1, "table-card"], [1, "modal-overlay"], [1, "btn-secondary", 3, "click"], [1, "btn-import", 3, "click", "disabled"], [1, "btn-primary", 3, "click"], [1, "spinner"], [1, "data-table"], [1, "actions-cell", 2, "display", "flex", "gap", "4px"], ["title", "Modifier", 1, "btn-icon"], ["title", "Supprimer", 1, "btn-icon", "btn-icon-danger"], ["title", "Modifier", 1, "btn-icon", 3, "click"], ["title", "Supprimer", 1, "btn-icon", "btn-icon-danger", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 2, "max-width", "700px", "position", "relative", 3, "click"], [2, "position", "absolute", "inset", "0", "background", "rgba(255,255,255,0.9)", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "z-index", "10", "border-radius", "inherit"], [1, "modal-header"], [1, "btn-close-modal", 3, "click"], [2, "overflow-x", "auto", "max-height", "50vh", "padding", "0 20px"], [2, "width", "100%", "border-collapse", "collapse", "font-size", "13px"], [2, "background", "#f4f6f8"], [2, "padding", "8px", "text-align", "left", "border-bottom", "2px solid #e2e8ef"], [2, "border-bottom", "1px solid #f0f0f0"], [1, "modal-footer", 2, "padding", "16px 20px", "display", "flex", "justify-content", "flex-end", "gap", "10px", "border-top", "1px solid #f0f0f0"], [2, "margin-top", "14px", "color", "#017E84", "font-weight", "600"], [2, "font-size", "12px", "color", "#6c757d", "margin-top", "4px"], [2, "padding", "7px 8px", "color", "#adb5bd"], [2, "padding", "7px 8px", "font-weight", "600"], [2, "padding", "7px 8px"], [1, "modal-box", 3, "click"], [1, "alert", "alert-error"], [1, "modal-body"], [1, "section-lbl"], [1, "form-group"], [1, "required"], ["type", "text", "placeholder", "Nom du fournisseur", 1, "form-control", 3, "ngModelChange", "ngModel"], [2, "display", "grid", "grid-template-columns", "1fr 1fr", "gap", "12px"], ["type", "email", "placeholder", "email@exemple.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "+237 6XX XXX XXX", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Rue, ville...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "section-lbl", 2, "margin-top", "16px"], ["type", "text", "value", "Achat", "readonly", "", 1, "form-control", 2, "background", "#f8f9fa", "color", "#6c757d"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "section-lbl", 2, "margin-top", "16px", "display", "flex", "justify-content", "space-between", "align-items", "center"], ["type", "button", 1, "btn-add-inline", 3, "click"], [1, "text-muted", 2, "font-size", "13px", "padding", "8px 0"], [1, "inline-table-wrap"], [1, "modal-footer"], [1, "btn-primary", 3, "click", "disabled"], [3, "click"], [1, "inline-table"], [1, "ar"], [1, "inp-cell", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "inp-cell", "ar", 3, "ngModelChange", "ngModel"], [1, "ar", "ttc-val"], ["type", "button", 1, "btn-del-row", 3, "click"]], template: function SupplierListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "input", 2, 0);
        \u0275\u0275listener("change", function SupplierListComponent_Template_input_change_1_listener($event) {
          return ctx.onImportFileChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "div")(5, "h1");
        \u0275\u0275text(6, "Fournisseurs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275conditionalCreate(10, SupplierListComponent_Conditional_10_Template, 8, 2);
        \u0275\u0275conditionalCreate(11, SupplierListComponent_Conditional_11_Template, 4, 0, "button", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(12, SupplierListComponent_Conditional_12_Template, 4, 1, "div", 7);
        \u0275\u0275elementStart(13, "div", 8)(14, "span", 9);
        \u0275\u0275text(15, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function SupplierListComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function SupplierListComponent_Template_input_ngModelChange_16_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(17, SupplierListComponent_Conditional_17_Template, 3, 0, "div", 11)(18, SupplierListComponent_Conditional_18_Template, 6, 1, "div", 12)(19, SupplierListComponent_Conditional_19_Template, 16, 0, "div", 13);
        \u0275\u0275conditionalCreate(20, SupplierListComponent_Conditional_20_Template, 33, 3, "div", 14);
        \u0275\u0275conditionalCreate(21, SupplierListComponent_Conditional_21_Template, 61, 11, "div", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.filtered.length, " fournisseur(s)");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.canImport ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.canCreate ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 12 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 17 : ctx.filtered.length === 0 ? 18 : 19);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showImportModal ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal ? 21 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe], styles: ['\n.sup-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 14px;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border-radius: 8px;\n  padding: 8px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled, \n.btn-import[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #00A09D;\n  color: white;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #007674;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-import[_ngcontent-%COMP%] {\n  background: var(--accent-light);\n  color: #00A09D;\n  border: 1px solid #b2dfdf;\n}\n.btn-import[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 8px 14px;\n  margin-bottom: 16px;\n}\n.search-bar[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.search-bar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  flex: 1;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n  color: var(--text-muted);\n}\n.spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 2px solid #dee2e6;\n  border-top-color: #00A09D;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 56px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-bottom: 16px;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  background: var(--bg-hover);\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  border-bottom: 2px solid #e9ecef;\n  text-align: left;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  border-color: #00A09D;\n}\n.btn-icon[_ngcontent-%COMP%]:hover   .material-icons[_ngcontent-%COMP%] {\n  color: #00A09D;\n}\n.btn-icon.btn-icon-danger[_ngcontent-%COMP%]:hover {\n  border-color: var(--danger);\n}\n.btn-icon.btn-icon-danger[_ngcontent-%COMP%]:hover   .material-icons[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  width: 100%;\n  max-width: 680px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n}\n.btn-close-modal[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.btn-close-modal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--text-muted);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n}\n.form-group[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00A09D;\n  box-shadow: 0 0 0 3px rgba(0, 160, 157, 0.15);\n}\n.section-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #00A09D;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid var(--border);\n}\n.btn-add-inline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  background: none;\n  border: 1px dashed #00A09D;\n  color: #00A09D;\n  border-radius: 6px;\n  padding: 3px 10px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-inline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-add-inline[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 160, 157, 0.08);\n}\n.inline-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.inline-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n  margin-top: 4px;\n}\n.inline-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 7px 8px;\n  background: var(--bg-elevated);\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  border-bottom: 2px solid var(--border);\n  text-align: left;\n}\n.inline-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 4px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.inline-table[_ngcontent-%COMP%]   .ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.inline-table[_ngcontent-%COMP%]   .ttc-val[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 600;\n  color: #00A09D;\n  font-size: 13px;\n}\n.inp-cell[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 4px 6px;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  box-sizing: border-box;\n}\n.inp-cell[_ngcontent-%COMP%]:hover {\n  border-color: var(--border);\n  background: var(--bg-surface);\n}\n.inp-cell[_ngcontent-%COMP%]:focus {\n  border-color: #00A09D;\n  background: var(--bg-surface);\n}\n.inp-cell.ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.btn-del-row[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--border);\n  padding: 2px;\n  border-radius: 3px;\n}\n.btn-del-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-del-row[_ngcontent-%COMP%]:hover {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=supplier-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupplierListComponent, [{
    type: Component,
    args: [{ selector: "app-supplier-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="sup-page">
  <!-- Input file cach\xE9 -->
  <input #importInput type="file" accept=".xlsx,.xls" style="display:none" (change)="onImportFileChange($event)" />

  <div class="page-header">
    <div>
      <h1>Fournisseurs</h1>
      <p class="subtitle">{{ filtered.length }} fournisseur(s)</p>
    </div>
    <div style="display:flex;gap:8px;align-items:center">
      @if (canImport) {
        <button class="btn-secondary" (click)="downloadTemplate()">
          <span class="material-icons">download</span> Mod\xE8le Excel
        </button>
        <button class="btn-import" (click)="triggerImport()" [disabled]="importLoading">
          <span class="material-icons">upload_file</span> {{ importLoading ? 'Lecture...' : 'Importer Excel' }}
        </button>
      }
      @if (canCreate) {
        <button class="btn-primary" (click)="openNew()">
          <span class="material-icons">add</span> Nouveau fournisseur
        </button>
      }
    </div>
  </div>

  @if (successMsg) {
    <div class="alert alert-success"><span class="material-icons">check_circle</span>{{ successMsg }}</div>
  }

  <div class="search-bar">
    <span class="material-icons">search</span>
    <input type="text" [(ngModel)]="search" (ngModelChange)="applyFilter()" placeholder="Rechercher..." class="search-input" />
  </div>

  @if (loading) {
    <div class="loading-state"><span class="spinner"></span> Chargement...</div>
  } @else if (filtered.length === 0) {
    <div class="empty-state">
      <span class="material-icons">store</span>
      <p>Aucun fournisseur.</p>
      @if (canCreate) {
        <button class="btn-primary" (click)="openNew()">Ajouter un fournisseur</button>
      }
    </div>
  } @else {
    <div class="table-card">
      <table class="data-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>T\xE9l\xE9phone</th>
            <th>Adresse</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @for (s of filtered; track s.id) {
            <tr>
              <td><strong>{{ s.name }}</strong></td>
              <td>{{ s.email || '\u2014' }}</td>
              <td>{{ s.phone || '\u2014' }}</td>
              <td>{{ s.address || '\u2014' }}</td>
              <td class="actions-cell" style="display:flex;gap:4px">
                @if (canEdit) {
                  <button class="btn-icon" (click)="openEdit(s)" title="Modifier">
                    <span class="material-icons">edit</span>
                  </button>
                }
                @if (canDelete) {
                  <button class="btn-icon btn-icon-danger" (click)="deleteSupplier(s)" title="Supprimer">
                    <span class="material-icons">delete</span>
                  </button>
                }
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  <!-- Modal Import Excel Fournisseurs -->
  @if (showImportModal) {
    <div class="modal-overlay" (click)="closeImportModal()">
      <div class="modal-box" (click)="$event.stopPropagation()" style="max-width:700px;position:relative">
        @if (importLoading) {
          <div style="position:absolute;inset:0;background:rgba(255,255,255,0.9);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10;border-radius:inherit">
            <div class="spinner"></div>
            <p style="margin-top:14px;color:#017E84;font-weight:600">Importation en cours\u2026</p>
            <p style="font-size:12px;color:#6c757d;margin-top:4px">{{ importRows.length }} ligne(s) en cours de traitement</p>
          </div>
        }
        <div class="modal-header">
          <h2>Aper\xE7u import fournisseurs ({{ importRows.length }} ligne(s))</h2>
          <button class="btn-close-modal" (click)="closeImportModal()"><span class="material-icons">close</span></button>
        </div>
        <div style="overflow-x:auto;max-height:50vh;padding:0 20px">
          <table style="width:100%;border-collapse:collapse;font-size:13px">
            <thead><tr style="background:#f4f6f8">
              <th style="padding:8px;text-align:left;border-bottom:2px solid #e2e8ef">#</th>
              <th style="padding:8px;text-align:left;border-bottom:2px solid #e2e8ef">Nom</th>
              <th style="padding:8px;text-align:left;border-bottom:2px solid #e2e8ef">R\xE9f\xE9rence</th>
              <th style="padding:8px;text-align:left;border-bottom:2px solid #e2e8ef">T\xE9l\xE9phone</th>
              <th style="padding:8px;text-align:left;border-bottom:2px solid #e2e8ef">Email</th>
            </tr></thead>
            <tbody>
              @for (row of importRows; track $index; let i = $index) {
                <tr style="border-bottom:1px solid #f0f0f0">
                  <td style="padding:7px 8px;color:#adb5bd">{{ i+1 }}</td>
                  <td style="padding:7px 8px;font-weight:600">{{ row['Nom*'] || row['Nom'] }}</td>
                  <td style="padding:7px 8px">{{ row['R\xE9f\xE9rence'] || '\u2014' }}</td>
                  <td style="padding:7px 8px">{{ row['T\xE9l\xE9phone'] || '\u2014' }}</td>
                  <td style="padding:7px 8px">{{ row['Email'] || '\u2014' }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        <div class="modal-footer" style="padding:16px 20px;display:flex;justify-content:flex-end;gap:10px;border-top:1px solid #f0f0f0">
          <button class="btn-secondary" (click)="closeImportModal()">Annuler</button>
          <button class="btn-primary" (click)="confirmImport()">
            <span class="material-icons">check_circle</span> Confirmer ({{ importRows.length }} fournisseurs)
          </button>
        </div>
      </div>
    </div>
  }

  <!-- Modal cr\xE9ation/\xE9dition -->
  @if (showModal) {
    <div class="modal-overlay" (click)="showModal = false">
      <div class="modal-box" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>{{ editingId ? 'Modifier le fournisseur' : 'Nouveau fournisseur' }}</h2>
          <button class="btn-close-modal" (click)="showModal = false">
            <span class="material-icons">close</span>
          </button>
        </div>
        @if (errorMsg) {
          <div class="alert alert-error"><span class="material-icons">error</span>{{ errorMsg }}<button (click)="errorMsg = ''">\xD7</button></div>
        }
        <div class="modal-body">
          <!-- Informations g\xE9n\xE9rales -->
          <div class="section-lbl">Informations g\xE9n\xE9rales</div>
          <div class="form-group">
            <label>Nom <span class="required">*</span></label>
            <input type="text" [(ngModel)]="form.name" class="form-control" placeholder="Nom du fournisseur" />
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div class="form-group">
              <label>Email</label>
              <input type="email" [(ngModel)]="form.email" class="form-control" placeholder="email@exemple.com" />
            </div>
            <div class="form-group">
              <label>T\xE9l\xE9phone</label>
              <input type="text" [(ngModel)]="form.phone" class="form-control" placeholder="+237 6XX XXX XXX" />
            </div>
          </div>
          <div class="form-group">
            <label>Adresse</label>
            <input type="text" [(ngModel)]="form.address" class="form-control" placeholder="Rue, ville..." />
          </div>

          <!-- Pr\xE9compte -->
          <div class="section-lbl" style="margin-top:16px">Pr\xE9compte</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div class="form-group">
              <label>Type</label>
              <input type="text" class="form-control" value="Achat" readonly style="background:#f8f9fa;color:#6c757d" />
            </div>
            <div class="form-group">
              <label>Taux pr\xE9compte (%)</label>
              <select class="form-control" [(ngModel)]="form.tauxPrecompte" (ngModelChange)="onTauxChange()">
                <option [value]="undefined">-- Aucun --</option>
                @for (t of TAUX_OPTS; track t) { <option [value]="t">{{ t }}%</option> }
              </select>
            </div>
          </div>

          <!-- Remises -->
          <div class="section-lbl" style="margin-top:16px;display:flex;justify-content:space-between;align-items:center">
            <span>Remises</span>
            <button type="button" class="btn-add-inline" (click)="addRemise()">
              <span class="material-icons">add</span> Ajouter
            </button>
          </div>
          @if (loadingRms) {
            <p class="text-muted" style="font-size:13px;padding:8px 0">Chargement des remises...</p>
          } @else if (remises.length === 0) {
            <p class="text-muted" style="font-size:13px;padding:8px 0">Aucune remise configur\xE9e pour ce fournisseur.</p>
          } @else {
            <div class="inline-table-wrap">
              <table class="inline-table">
                <thead>
                  <tr>
                    <th>Cat\xE9gorie</th>
                    <th>Type</th>
                    <th class="ar">Montant HT</th>
                    <th class="ar">Montant TTC</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  @for (r of remises; track $index; let i = $index) {
                    <tr>
                      <td>
                        <select class="inp-cell" [(ngModel)]="r.categoryId">
                          <option [value]="0">-- Cat\xE9gorie --</option>
                          @for (cat of categories; track cat.id) { <option [value]="cat.id">{{ cat.name }}</option> }
                        </select>
                      </td>
                      <td>
                        <select class="inp-cell" [(ngModel)]="r.typeRemise" (ngModelChange)="onRemiseTypeChange(r)">
                          @for (t of TYPE_OPTS; track t.value) { <option [value]="t.value">{{ t.label }}</option> }
                        </select>
                      </td>
                      <td class="ar">
                        <input type="number" class="inp-cell ar" [(ngModel)]="r.montantHT" min="0"
                          (ngModelChange)="onRemiseHtChange(r)" />
                      </td>
                      <td class="ar ttc-val">{{ r.montantTTC | number:'1.0-2' }}</td>
                      <td>
                        <button type="button" class="btn-del-row" (click)="removeRemise(i)">
                          <span class="material-icons">close</span>
                        </button>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          }
        </div>
        <div class="modal-footer">
          <button class="btn-secondary" (click)="showModal = false">Annuler</button>
          <button class="btn-primary" (click)="saveSupplier()" [disabled]="saving">
            {{ saving ? 'Sauvegarde...' : 'Sauvegarder' }}
          </button>
        </div>
      </div>
    </div>
  }
</div>
`, styles: ['/* src/app/modules/purchases/components/suppliers/supplier-list.component.scss */\n.sup-page {\n  padding: 24px;\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header .subtitle {\n  color: var(--text-muted);\n  font-size: 14px;\n  margin: 0;\n}\n.btn-primary,\n.btn-secondary,\n.btn-import {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border-radius: 8px;\n  padding: 8px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons,\n.btn-import .material-icons {\n  font-size: 16px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled,\n.btn-import:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.btn-primary {\n  background: #00A09D;\n  color: white;\n  border: none;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #007674;\n}\n.btn-secondary {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover {\n  background: var(--bg-hover);\n}\n.btn-import {\n  background: var(--accent-light);\n  color: #00A09D;\n  border: 1px solid #b2dfdf;\n}\n.btn-import:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert button {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n}\n.alert-success {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.alert-error {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.search-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 8px 14px;\n  margin-bottom: 16px;\n}\n.search-bar .material-icons {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.search-bar .search-input {\n  border: none;\n  outline: none;\n  flex: 1;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.loading-state {\n  text-align: center;\n  padding: 48px;\n  color: var(--text-muted);\n}\n.spinner {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 2px solid #dee2e6;\n  border-top-color: #00A09D;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n.empty-state {\n  text-align: center;\n  padding: 60px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n}\n.empty-state .material-icons {\n  font-size: 56px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 12px;\n}\n.empty-state p {\n  color: var(--text-muted);\n  margin-bottom: 16px;\n}\n.table-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.data-table th {\n  padding: 12px 14px;\n  background: var(--bg-hover);\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  border-bottom: 2px solid #e9ecef;\n  text-align: left;\n}\n.data-table td {\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.actions-cell {\n  display: flex;\n  gap: 6px;\n}\n.btn-icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-icon .material-icons {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.btn-icon:hover {\n  border-color: #00A09D;\n}\n.btn-icon:hover .material-icons {\n  color: #00A09D;\n}\n.btn-icon.btn-icon-danger:hover {\n  border-color: var(--danger);\n}\n.btn-icon.btn-icon-danger:hover .material-icons {\n  color: var(--danger);\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  width: 100%;\n  max-width: 680px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header h2 {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n}\n.btn-close-modal {\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.btn-close-modal .material-icons {\n  font-size: 20px;\n  color: var(--text-muted);\n}\n.modal-body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--border);\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n}\n.form-group .required {\n  color: var(--danger);\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #00A09D;\n  box-shadow: 0 0 0 3px rgba(0, 160, 157, 0.15);\n}\n.section-lbl {\n  font-size: 12px;\n  font-weight: 700;\n  color: #00A09D;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid var(--border);\n}\n.btn-add-inline {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  background: none;\n  border: 1px dashed #00A09D;\n  color: #00A09D;\n  border-radius: 6px;\n  padding: 3px 10px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-inline .material-icons {\n  font-size: 14px;\n}\n.btn-add-inline:hover {\n  background: rgba(0, 160, 157, 0.08);\n}\n.inline-table-wrap {\n  overflow-x: auto;\n}\n.inline-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n  margin-top: 4px;\n}\n.inline-table th {\n  padding: 7px 8px;\n  background: var(--bg-elevated);\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  border-bottom: 2px solid var(--border);\n  text-align: left;\n}\n.inline-table td {\n  padding: 4px 4px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.inline-table .ar {\n  text-align: right;\n}\n.inline-table .ttc-val {\n  font-family: monospace;\n  font-weight: 600;\n  color: #00A09D;\n  font-size: 13px;\n}\n.inp-cell {\n  width: 100%;\n  padding: 4px 6px;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  box-sizing: border-box;\n}\n.inp-cell:hover {\n  border-color: var(--border);\n  background: var(--bg-surface);\n}\n.inp-cell:focus {\n  border-color: #00A09D;\n  background: var(--bg-surface);\n}\n.inp-cell.ar {\n  text-align: right;\n}\n.btn-del-row {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--border);\n  padding: 2px;\n  border-radius: 3px;\n}\n.btn-del-row .material-icons {\n  font-size: 15px;\n}\n.btn-del-row:hover {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.text-muted {\n  color: var(--text-muted);\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=supplier-list.component.css.map */\n'] }]
  }], () => [{ type: AccountingService }, { type: RemiseService }, { type: StockService }, { type: AuthService }], { importInput: [{
    type: ViewChild,
    args: ["importInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupplierListComponent, { className: "SupplierListComponent", filePath: "app/modules/purchases/components/suppliers/supplier-list.component.ts", lineNumber: 29 });
})();
export {
  SupplierListComponent
};
//# sourceMappingURL=chunk-YDQMLEIM.js.map
