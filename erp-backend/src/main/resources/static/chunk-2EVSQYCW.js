import {
  SalesService
} from "./chunk-PDYKRBTO.js";
import {
  downloadExcelTemplate,
  parseExcelFile
} from "./chunk-RZFOQ7J2.js";
import "./chunk-ZJANBOXO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NRXD6HPP.js";
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

// src/app/modules/sales/components/sellers/seller-list.component.ts
var _c0 = ["importInput"];
var _forTrack0 = ($index, $item) => $item.id;
function SellerListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function SellerListComponent_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadTemplate());
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Mod\xE8le Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 20);
    \u0275\u0275listener("click", function SellerListComponent_Conditional_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.triggerImport());
    });
    \u0275\u0275elementStart(5, "span", 6);
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
function SellerListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function SellerListComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCreate());
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouveau vendeur ");
    \u0275\u0275elementEnd();
  }
}
function SellerListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 6);
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
function SellerListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 22);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function SellerListComponent_Conditional_21_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function SellerListComponent_Conditional_21_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openCreate());
    });
    \u0275\u0275text(1, "Cr\xE9er un vendeur");
    \u0275\u0275elementEnd();
  }
}
function SellerListComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 6);
    \u0275\u0275text(2, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun vendeur trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SellerListComponent_Conditional_21_Conditional_5_Template, 2, 0, "button", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.canCreate ? 5 : -1);
  }
}
function SellerListComponent_Conditional_22_For_15_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function SellerListComponent_Conditional_22_For_15_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const seller_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEdit(seller_r7));
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function SellerListComponent_Conditional_22_For_15_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function SellerListComponent_Conditional_22_For_15_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const seller_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteSeller(seller_r7));
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function SellerListComponent_Conditional_22_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 26);
    \u0275\u0275conditionalCreate(10, SellerListComponent_Conditional_22_For_15_Conditional_10_Template, 3, 0, "button", 27);
    \u0275\u0275conditionalCreate(11, SellerListComponent_Conditional_22_For_15_Conditional_11_Template, 3, 0, "button", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const seller_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(seller_r7.ref || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(seller_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(seller_r7.phone || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(seller_r7.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.canEdit ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canDelete ? 11 : -1);
  }
}
function SellerListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 17)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 23);
    \u0275\u0275text(12, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, SellerListComponent_Conditional_22_For_15_Template, 12, 6, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.filteredSellers);
  }
}
function SellerListComponent_Conditional_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "div", 40);
    \u0275\u0275elementStart(2, "p", 41);
    \u0275\u0275text(3, "Importation en cours\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.importRows.length, " ligne(s) en cours de traitement");
  }
}
function SellerListComponent_Conditional_23_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const \u0275$index_183_r11 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_183_r11 + 1);
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
function SellerListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function SellerListComponent_Conditional_23_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeImportModal());
    });
    \u0275\u0275elementStart(1, "div", 32);
    \u0275\u0275listener("click", function SellerListComponent_Conditional_23_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(2, SellerListComponent_Conditional_23_Conditional_2_Template, 6, 1, "div", 33);
    \u0275\u0275elementStart(3, "div", 34)(4, "span", 35);
    \u0275\u0275text(5, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 36);
    \u0275\u0275listener("click", function SellerListComponent_Conditional_23_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeImportModal());
    });
    \u0275\u0275elementStart(9, "span", 6);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 37)(12, "table", 17)(13, "thead")(14, "tr")(15, "th");
    \u0275\u0275text(16, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Email");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, SellerListComponent_Conditional_23_For_27_Template, 11, 5, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 38)(29, "button", 39);
    \u0275\u0275listener("click", function SellerListComponent_Conditional_23_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeImportModal());
    });
    \u0275\u0275text(30, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 21);
    \u0275\u0275listener("click", function SellerListComponent_Conditional_23_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmImport());
    });
    \u0275\u0275elementStart(32, "span", 6);
    \u0275\u0275text(33, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.importLoading ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Aper\xE7u import vendeurs (", ctx_r2.importRows.length, " ligne(s))");
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r2.importRows);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Confirmer l'import (", ctx_r2.importRows.length, " vendeurs) ");
  }
}
function SellerListComponent_Conditional_24_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 6);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.errorMsg);
  }
}
function SellerListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function SellerListComponent_Conditional_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 44);
    \u0275\u0275listener("click", function SellerListComponent_Conditional_24_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 34)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 36);
    \u0275\u0275listener("click", function SellerListComponent_Conditional_24_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, SellerListComponent_Conditional_24_Conditional_8_Template, 4, 1, "div", 45);
    \u0275\u0275elementStart(9, "div", 46)(10, "div", 47);
    \u0275\u0275text(11, "Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 48)(13, "div", 49)(14, "label");
    \u0275\u0275text(15, "Nom ");
    \u0275\u0275elementStart(16, "span", 50);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function SellerListComponent_Conditional_24_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.name, $event) || (ctx_r2.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 49)(20, "label");
    \u0275\u0275text(21, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function SellerListComponent_Conditional_24_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.ref, $event) || (ctx_r2.form.ref = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 49)(24, "label");
    \u0275\u0275text(25, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function SellerListComponent_Conditional_24_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.phone, $event) || (ctx_r2.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 49)(28, "label");
    \u0275\u0275text(29, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function SellerListComponent_Conditional_24_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.email, $event) || (ctx_r2.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 38)(32, "button", 39);
    \u0275\u0275listener("click", function SellerListComponent_Conditional_24_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(33, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 55);
    \u0275\u0275listener("click", function SellerListComponent_Conditional_24_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275elementStart(35, "span", 6);
    \u0275\u0275text(36, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.editingSeller ? "Modifier le vendeur" : "Nouveau vendeur");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.errorMsg ? 8 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.ref);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving ? "Sauvegarde..." : "Enregistrer", " ");
  }
}
var SELLER_HEADERS = ["Nom*", "R\xE9f\xE9rence", "T\xE9l\xE9phone", "Email"];
var SELLER_SAMPLE = ["Jean Dupont", "VDR001", "+237 691000000", "jean.dupont@exemple.cm"];
var SellerListComponent = class _SellerListComponent {
  constructor(salesService, authService) {
    this.salesService = salesService;
    this.authService = authService;
    this.sellers = [];
    this.loading = false;
    this.showModal = false;
    this.editingSeller = null;
    this.saving = false;
    this.successMsg = "";
    this.errorMsg = "";
    this.searchQuery = "";
    this.form = this.emptyForm();
    this.canCreate = false;
    this.canEdit = false;
    this.canDelete = false;
    this.canImport = false;
    this.showImportModal = false;
    this.importRows = [];
    this.importLoading = false;
    this.importProgress = null;
  }
  ngOnInit() {
    this.canCreate = this.authService.hasPermission("VENTES", "VENDEURS", "CREATE");
    this.canEdit = this.authService.hasPermission("VENTES", "VENDEURS", "EDIT");
    this.canDelete = this.authService.hasPermission("VENTES", "VENDEURS", "DELETE");
    this.canImport = this.authService.hasPermission("VENTES", "VENDEURS", "IMPORT");
    this.loadSellers();
  }
  emptyForm() {
    return { name: "", companyId: 0 };
  }
  loadSellers() {
    this.loading = true;
    this.salesService.getSellers(this.authService.getCompanyId()).subscribe({
      next: (data) => {
        this.sellers = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  get filteredSellers() {
    if (!this.searchQuery.trim())
      return this.sellers;
    const q = this.searchQuery.toLowerCase();
    return this.sellers.filter((s) => s.name.toLowerCase().includes(q) || s.ref && s.ref.toLowerCase().includes(q) || s.email && s.email.toLowerCase().includes(q));
  }
  openCreate() {
    this.editingSeller = null;
    this.form = __spreadProps(__spreadValues({}, this.emptyForm()), { companyId: this.authService.getCompanyId() });
    this.showModal = true;
    this.errorMsg = "";
  }
  openEdit(seller) {
    this.editingSeller = seller;
    this.form = __spreadValues({}, seller);
    this.showModal = true;
    this.errorMsg = "";
  }
  closeModal() {
    this.showModal = false;
    this.editingSeller = null;
  }
  save() {
    if (!this.form.name?.trim()) {
      this.errorMsg = "Le nom du vendeur est obligatoire";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const companyId = this.authService.getCompanyId();
    const obs = this.editingSeller ? this.salesService.updateSeller(this.editingSeller.id, this.form) : this.salesService.createSeller(__spreadProps(__spreadValues({}, this.form), { companyId }));
    obs.subscribe({
      next: () => this.finishSave(this.editingSeller ? "Vendeur modifi\xE9" : "Vendeur cr\xE9\xE9 avec succ\xE8s"),
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || "Erreur lors de la sauvegarde";
      }
    });
  }
  finishSave(msg) {
    this.saving = false;
    this.closeModal();
    this.loadSellers();
    this.showSuccess(msg);
  }
  deleteSeller(seller) {
    if (!confirm(`Supprimer le vendeur "${seller.name}" ?`))
      return;
    this.salesService.deleteSeller(seller.id).subscribe({
      next: () => {
        this.showSuccess("Vendeur supprim\xE9");
        this.loadSellers();
      },
      error: (e) => {
        this.showSuccess("Erreur : " + (e.error?.message || "Impossible de supprimer"));
      }
    });
  }
  // === Import Excel ===
  downloadTemplate() {
    downloadExcelTemplate(SELLER_HEADERS, SELLER_SAMPLE, "modele_vendeurs.xlsx");
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
      this.importRows = [];
      this.importProgress = null;
      try {
        const rows = yield parseExcelFile(file);
        this.importRows = rows.filter((r) => r["Nom*"] || r["Nom"]);
        if (this.importRows.length === 0) {
          this.showSuccess('Aucune ligne valide trouv\xE9e dans le fichier (colonne "Nom*" requise)');
          this.importLoading = false;
          return;
        }
        this.showImportModal = true;
      } catch (e) {
        this.showSuccess("Erreur : " + e.message);
      }
      this.importLoading = false;
    });
  }
  closeImportModal() {
    this.showImportModal = false;
    this.importRows = [];
    this.importProgress = null;
  }
  confirmImport() {
    return __async(this, null, function* () {
      const companyId = this.authService.getCompanyId();
      this.importLoading = true;
      this.importProgress = { done: 0, total: this.importRows.length, errors: 0, messages: [] };
      for (const row of this.importRows) {
        const seller = {
          name: String(row["Nom*"] || row["Nom"] || "").trim(),
          ref: String(row["R\xE9f\xE9rence"] || "").trim() || void 0,
          phone: String(row["T\xE9l\xE9phone"] || "").trim() || void 0,
          email: String(row["Email"] || "").trim() || void 0,
          companyId
        };
        try {
          yield this.salesService.createSeller(seller).toPromise();
          this.importProgress.done++;
        } catch (e) {
          this.importProgress.errors++;
          this.importProgress.messages.push(`"${seller.name}" : ${e.error?.message || "Erreur"}`);
        }
      }
      this.importLoading = false;
      this.showImportModal = false;
      this.loadSellers();
      const p = this.importProgress;
      this.showSuccess(`Import termin\xE9 : ${p.done} cr\xE9\xE9(s), ${p.errors} erreur(s)`);
      this.importRows = [];
      this.importProgress = null;
    });
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 5e3);
  }
  static {
    this.\u0275fac = function SellerListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SellerListComponent)(\u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerListComponent, selectors: [["app-seller-list"]], viewQuery: function SellerListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.importInput = _t.first);
      }
    }, decls: 25, vars: 8, consts: [["importInput", ""], [1, "page-container"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "record-count"], [1, "header-actions"], [1, "btn-primary"], [1, "alert", "alert-success"], [1, "search-bar", "mb-16"], [1, "material-icons", "search-icon"], ["type", "text", "placeholder", "Rechercher un vendeur...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "card"], [1, "loading-state"], [1, "empty-state"], [1, "data-table"], [1, "modal-overlay"], ["title", "T\xE9l\xE9charger le mod\xE8le Excel", 1, "btn-outline", 3, "click"], [1, "btn-import", 3, "click", "disabled"], [1, "btn-primary", 3, "click"], [1, "material-icons", "spin"], [1, "text-center"], [1, "text-muted", "font-mono"], [1, "font-bold"], [1, "text-center", 2, "display", "flex", "gap", "4px", "justify-content", "center"], ["title", "Modifier", 1, "btn-icon", "btn-edit"], ["title", "Supprimer", 1, "btn-icon", "btn-delete"], ["title", "Modifier", 1, "btn-icon", "btn-edit", 3, "click"], ["title", "Supprimer", 1, "btn-icon", "btn-delete", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal", "import-modal", 2, "position", "relative", 3, "click"], [2, "position", "absolute", "inset", "0", "background", "rgba(255,255,255,0.9)", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "z-index", "10", "border-radius", "inherit"], [1, "modal-header"], [1, "material-icons", 2, "color", "#017E84"], [1, "btn-close", 3, "click"], [1, "modal-body", 2, "padding", "0", "overflow-x", "auto", "max-height", "50vh"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "spinner"], [2, "margin-top", "14px", "color", "#017E84", "font-weight", "600"], [2, "font-size", "12px", "color", "#6c757d", "margin-top", "4px"], [1, "text-muted"], [1, "modal", 3, "click"], [1, "alert", "alert-danger", "modal-alert"], [1, "modal-body"], [1, "section-title"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["type", "text", "placeholder", "Nom complet", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "VDR001", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "+237 6XX XXX XXX", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "contact@exemple.cm", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click", "disabled"]], template: function SellerListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "input", 2, 0);
        \u0275\u0275listener("change", function SellerListComponent_Template_input_change_1_listener($event) {
          return ctx.onImportFileChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h1", 5)(6, "span", 6);
        \u0275\u0275text(7, "badge");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, " Vendeurs ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275conditionalCreate(12, SellerListComponent_Conditional_12_Template, 8, 2);
        \u0275\u0275conditionalCreate(13, SellerListComponent_Conditional_13_Template, 4, 0, "button", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(14, SellerListComponent_Conditional_14_Template, 4, 1, "div", 10);
        \u0275\u0275elementStart(15, "div", 11)(16, "span", 12);
        \u0275\u0275text(17, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function SellerListComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 14);
        \u0275\u0275conditionalCreate(20, SellerListComponent_Conditional_20_Template, 4, 0, "div", 15)(21, SellerListComponent_Conditional_21_Template, 6, 1, "div", 16)(22, SellerListComponent_Conditional_22_Template, 16, 0, "table", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(23, SellerListComponent_Conditional_23_Template, 35, 3, "div", 18);
        \u0275\u0275conditionalCreate(24, SellerListComponent_Conditional_24_Template, 38, 8, "div", 18);
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1("", ctx.filteredSellers.length, " vendeur(s)");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.canImport ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.canCreate ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 14 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading ? 20 : ctx.filteredSellers.length === 0 ? 21 : 22);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showImportModal ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal ? 24 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 22px;\n}\n.page-header[_ngcontent-%COMP%]   .record-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled, \n.btn-outline[_ngcontent-%COMP%]:disabled, \n.btn-import[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--accent);\n  border: 1px solid #017E84;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--text-muted);\n  color: var(--text-primary);\n}\n.btn-import[_ngcontent-%COMP%] {\n  background: var(--accent-light);\n  color: var(--accent);\n  border: 1px solid #b2dfdf;\n}\n.btn-import[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 8px 14px;\n}\n.search-bar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.search-bar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n}\n.mb-16[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--border);\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 13px;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #e7f1ff;\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  width: 780px;\n  max-width: 95vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  margin: 0;\n  color: var(--text-primary);\n}\n.btn-close[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.modal-alert[_ngcontent-%COMP%] {\n  margin: 12px 24px 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 18px 24px;\n  border-top: 1px solid var(--border);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--accent);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 14px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid var(--border);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-group[_ngcontent-%COMP%]   .form-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n}\n/*# sourceMappingURL=seller-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SellerListComponent, [{
    type: Component,
    args: [{ selector: "app-seller-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <!-- Input file cach\xE9 pour l'import -->
  <input #importInput type="file" accept=".xlsx,.xls" style="display:none" (change)="onImportFileChange($event)" />

  <div class="page-header">
    <div class="header-left">
      <h1 class="page-title">
        <span class="material-icons">badge</span>
        Vendeurs
      </h1>
      <span class="record-count">{{ filteredSellers.length }} vendeur(s)</span>
    </div>
    <div class="header-actions">
      @if (canImport) {
        <button class="btn-outline" (click)="downloadTemplate()" title="T\xE9l\xE9charger le mod\xE8le Excel">
          <span class="material-icons">download</span>
          Mod\xE8le Excel
        </button>
        <button class="btn-import" (click)="triggerImport()" [disabled]="importLoading">
          <span class="material-icons">upload_file</span>
          {{ importLoading ? 'Lecture...' : 'Importer Excel' }}
        </button>
      }
      @if (canCreate) {
        <button class="btn-primary" (click)="openCreate()">
          <span class="material-icons">person_add</span>
          Nouveau vendeur
        </button>
      }
    </div>
  </div>

  @if (successMsg) {
    <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div>
  }

  <!-- Recherche -->
  <div class="search-bar mb-16">
    <span class="material-icons search-icon">search</span>
    <input type="text" [(ngModel)]="searchQuery" placeholder="Rechercher un vendeur..." class="search-input" />
  </div>

  <!-- Table -->
  <div class="card">
    @if (loading) {
      <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
    } @else if (filteredSellers.length === 0) {
      <div class="empty-state">
        <span class="material-icons">badge</span>
        <p>Aucun vendeur trouv\xE9</p>
        @if (canCreate) {
          <button class="btn-primary" (click)="openCreate()">Cr\xE9er un vendeur</button>
        }
      </div>
    } @else {
      <table class="data-table">
        <thead>
          <tr>
            <th>R\xE9f.</th>
            <th>Nom</th>
            <th>T\xE9l\xE9phone</th>
            <th>Email</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (seller of filteredSellers; track seller.id) {
            <tr>
              <td class="text-muted font-mono">{{ seller.ref || '\u2014' }}</td>
              <td class="font-bold">{{ seller.name }}</td>
              <td>{{ seller.phone || '\u2014' }}</td>
              <td>{{ seller.email || '\u2014' }}</td>
              <td class="text-center" style="display:flex;gap:4px;justify-content:center">
                @if (canEdit) {
                  <button class="btn-icon btn-edit" (click)="openEdit(seller)" title="Modifier">
                    <span class="material-icons">edit</span>
                  </button>
                }
                @if (canDelete) {
                  <button class="btn-icon btn-delete" (click)="deleteSeller(seller)" title="Supprimer">
                    <span class="material-icons">delete</span>
                  </button>
                }
              </td>
            </tr>
          }
        </tbody>
      </table>
    }
  </div>
</div>

<!-- ===== Modal Import Excel ===== -->
@if (showImportModal) {
  <div class="modal-overlay" (click)="closeImportModal()">
    <div class="modal import-modal" (click)="$event.stopPropagation()" style="position:relative">
      @if (importLoading) {
        <div style="position:absolute;inset:0;background:rgba(255,255,255,0.9);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10;border-radius:inherit">
          <div class="spinner"></div>
          <p style="margin-top:14px;color:#017E84;font-weight:600">Importation en cours\u2026</p>
          <p style="font-size:12px;color:#6c757d;margin-top:4px">{{ importRows.length }} ligne(s) en cours de traitement</p>
        </div>
      }
      <div class="modal-header">
        <span class="material-icons" style="color:#017E84">upload_file</span>
        <h2>Aper\xE7u import vendeurs ({{ importRows.length }} ligne(s))</h2>
        <button class="btn-close" (click)="closeImportModal()">
          <span class="material-icons">close</span>
        </button>
      </div>
      <div class="modal-body" style="padding:0; overflow-x:auto; max-height:50vh">
        <table class="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>R\xE9f\xE9rence</th>
              <th>T\xE9l\xE9phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            @for (row of importRows; track $index; let i = $index) {
              <tr>
                <td class="text-muted">{{ i + 1 }}</td>
                <td class="font-bold">{{ row['Nom*'] || row['Nom'] }}</td>
                <td>{{ row['R\xE9f\xE9rence'] || '\u2014' }}</td>
                <td>{{ row['T\xE9l\xE9phone'] || '\u2014' }}</td>
                <td>{{ row['Email'] || '\u2014' }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" (click)="closeImportModal()">Annuler</button>
        <button class="btn-primary" (click)="confirmImport()">
          <span class="material-icons">check_circle</span>
          Confirmer l'import ({{ importRows.length }} vendeurs)
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
        <h2>{{ editingSeller ? 'Modifier le vendeur' : 'Nouveau vendeur' }}</h2>
        <button class="btn-close" (click)="closeModal()">
          <span class="material-icons">close</span>
        </button>
      </div>

      @if (errorMsg) {
        <div class="alert alert-danger modal-alert"><span class="material-icons">error</span> {{ errorMsg }}</div>
      }

      <div class="modal-body">
        <div class="section-title">Informations g\xE9n\xE9rales</div>
        <div class="form-grid">
          <div class="form-group">
            <label>Nom <span class="required">*</span></label>
            <input type="text" [(ngModel)]="form.name" class="form-control" placeholder="Nom complet" />
          </div>
          <div class="form-group">
            <label>R\xE9f\xE9rence</label>
            <input type="text" [(ngModel)]="form.ref" class="form-control" placeholder="VDR001" />
          </div>
          <div class="form-group">
            <label>T\xE9l\xE9phone</label>
            <input type="text" [(ngModel)]="form.phone" class="form-control" placeholder="+237 6XX XXX XXX" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" [(ngModel)]="form.email" class="form-control" placeholder="contact@exemple.cm" />
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn-secondary" (click)="closeModal()">Annuler</button>
        <button class="btn-primary" (click)="save()" [disabled]="saving">
          <span class="material-icons">save</span>
          {{ saving ? 'Sauvegarde...' : 'Enregistrer' }}
        </button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/sales/components/sellers/seller-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: var(--accent);\n  font-size: 22px;\n}\n.page-header .record-count {\n  font-size: 13px;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary,\n.btn-secondary,\n.btn-outline,\n.btn-import {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons,\n.btn-outline .material-icons,\n.btn-import .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled,\n.btn-outline:disabled,\n.btn-import:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--accent);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-secondary {\n  background: var(--bg-surface);\n  color: var(--accent);\n  border: 1px solid #017E84;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-outline {\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.btn-outline:hover:not(:disabled) {\n  border-color: var(--text-muted);\n  color: var(--text-primary);\n}\n.btn-import {\n  background: var(--accent-light);\n  color: var(--accent);\n  border: 1px solid #b2dfdf;\n}\n.btn-import:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.search-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 8px 14px;\n}\n.search-bar .search-icon {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.search-bar .search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n}\n.mb-16 {\n  margin-bottom: 16px;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.loading-state .material-icons,\n.empty-state .material-icons {\n  font-size: 48px;\n  color: var(--border);\n}\n.loading-state p,\n.empty-state p {\n  margin: 0;\n  font-size: 15px;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.data-table td {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n}\n.data-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.font-mono {\n  font-family: monospace;\n  font-size: 13px;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.text-secondary {\n  color: var(--text-muted);\n}\n.btn-icon {\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.btn-icon .material-icons {\n  font-size: 18px;\n}\n.btn-icon.btn-edit {\n  color: #0d6efd;\n}\n.btn-icon.btn-edit:hover {\n  background: #e7f1ff;\n}\n.btn-icon.btn-delete {\n  color: var(--danger);\n}\n.btn-icon.btn-delete:hover {\n  background: var(--danger-bg);\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  width: 780px;\n  max-width: 95vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header h2 {\n  font-size: 17px;\n  font-weight: 600;\n  margin: 0;\n  color: var(--text-primary);\n}\n.btn-close {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-close:hover {\n  background: var(--bg-hover);\n}\n.btn-close .material-icons {\n  font-size: 20px;\n}\n.modal-alert {\n  margin: 12px 24px 0;\n}\n.modal-body {\n  padding: 24px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 18px 24px;\n  border-top: 1px solid var(--border);\n}\n.section-title {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--accent);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 14px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid var(--border);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid .form-full {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group .required {\n  color: var(--danger);\n}\n.form-group .form-hint {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.form-control:focus {\n  border-color: var(--accent);\n}\n/*# sourceMappingURL=seller-list.component.css.map */\n'] }]
  }], () => [{ type: SalesService }, { type: AuthService }], { importInput: [{
    type: ViewChild,
    args: ["importInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerListComponent, { className: "SellerListComponent", filePath: "app/modules/sales/components/sellers/seller-list.component.ts", lineNumber: 18 });
})();
export {
  SellerListComponent
};
//# sourceMappingURL=chunk-2EVSQYCW.js.map
