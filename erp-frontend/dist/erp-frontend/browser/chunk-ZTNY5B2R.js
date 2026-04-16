import {
  downloadExcelTemplate,
  parseExcelFile
} from "./chunk-KYBH2TOV.js";
import {
  SalesService
} from "./chunk-C6CRDXMM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpipe,
  ɵɵpipeBind2,
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
} from "./chunk-EEF5WTPZ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-PPITZAXW.js";

// src/app/modules/sales/components/clients/client-list.component.ts
var _c0 = ["importInput"];
var _forTrack0 = ($index, $item) => $item.id;
function ClientListComponent_Conditional_24_Template(rf, ctx) {
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
function ClientListComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 21);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 6);
    \u0275\u0275text(2, "people_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun client trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 11);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_31_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(6, "Cr\xE9er un client");
    \u0275\u0275elementEnd()();
  }
}
function ClientListComponent_Conditional_32_For_23_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", client_r5.tauxRistourne, "%");
  }
}
function ClientListComponent_Conditional_32_For_23_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_Conditional_32_For_23_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", client_r5.tauxPrecompte, "%");
  }
}
function ClientListComponent_Conditional_32_For_23_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_Conditional_32_For_23_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const client_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, client_r5.creditLimit, "1.0-0"), " FCFA ");
  }
}
function ClientListComponent_Conditional_32_For_23_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_Conditional_32_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
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
    \u0275\u0275elementStart(9, "td", 22);
    \u0275\u0275conditionalCreate(10, ClientListComponent_Conditional_32_For_23_Conditional_10_Template, 2, 1, "span", 26)(11, ClientListComponent_Conditional_32_For_23_Conditional_11_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 22);
    \u0275\u0275conditionalCreate(13, ClientListComponent_Conditional_32_For_23_Conditional_13_Template, 2, 1, "span", 28)(14, ClientListComponent_Conditional_32_For_23_Conditional_14_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 22);
    \u0275\u0275conditionalCreate(16, ClientListComponent_Conditional_32_For_23_Conditional_16_Template, 2, 4)(17, ClientListComponent_Conditional_32_For_23_Conditional_17_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 29);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 23)(21, "button", 30);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_32_For_23_Template_button_click_21_listener() {
      const client_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(client_r5));
    });
    \u0275\u0275elementStart(22, "span", 6);
    \u0275\u0275text(23, "edit");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const client_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r5.ref || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r5.phone || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r5.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(client_r5.tauxRistourne ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(client_r5.tauxPrecompte ? 13 : 14);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(client_r5.creditLimit ? 16 : 17);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(client_r5.receivableAccountCode || "4111");
  }
}
function ClientListComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 19)(1, "thead")(2, "tr")(3, "th");
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
    \u0275\u0275elementStart(11, "th", 22);
    \u0275\u0275text(12, "Ristourne %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 22);
    \u0275\u0275text(14, "Pr\xE9compte %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 22);
    \u0275\u0275text(16, "Limite cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 23);
    \u0275\u0275text(20, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, ClientListComponent_Conditional_32_For_23_Template, 24, 8, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx_r1.filteredClients);
  }
}
function ClientListComponent_Conditional_33_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const \u0275$index_212_r8 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_212_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7["Nom*"] || row_r7["Nom"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7["R\xE9f\xE9rence"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7["T\xE9l\xE9phone"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7["Email"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7["Adresse"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7["Taux Ristourne (%)"] || "\u2014");
  }
}
function ClientListComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275elementStart(1, "div", 32);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_33_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 33)(3, "span", 34);
    \u0275\u0275text(4, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 35);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_33_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
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
    \u0275\u0275text(19, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "Ristourne %");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "tbody");
    \u0275\u0275repeaterCreate(29, ClientListComponent_Conditional_33_For_30_Template, 15, 7, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 37)(32, "button", 38);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_33_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275text(33, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 11);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_33_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r6);
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
    \u0275\u0275textInterpolate1("Aper\xE7u import clients (", ctx_r1.importRows.length, " ligne(s))");
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r1.importRows);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Confirmer l'import (", ctx_r1.importRows.length, " clients) ");
  }
}
function ClientListComponent_Conditional_34_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 6);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMsg);
  }
}
function ClientListComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 39);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_34_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 33)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 35);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_34_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, ClientListComponent_Conditional_34_Conditional_8_Template, 4, 1, "div", 40);
    \u0275\u0275elementStart(9, "div", 41)(10, "div", 42);
    \u0275\u0275text(11, "Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 43)(13, "div", 44)(14, "label");
    \u0275\u0275text(15, "Nom ");
    \u0275\u0275elementStart(16, "span", 45);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_34_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 44)(20, "label");
    \u0275\u0275text(21, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_34_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.ref, $event) || (ctx_r1.form.ref = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 44)(24, "label");
    \u0275\u0275text(25, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_34_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.type, $event) || (ctx_r1.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 49);
    \u0275\u0275text(28, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 50);
    \u0275\u0275text(30, "Client & Fournisseur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 44)(32, "label");
    \u0275\u0275text(33, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_34_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.phone, $event) || (ctx_r1.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 44)(36, "label");
    \u0275\u0275text(37, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_34_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 53)(40, "label");
    \u0275\u0275text(41, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_34_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.address, $event) || (ctx_r1.form.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 55);
    \u0275\u0275text(44, "Param\xE8tres commerciaux");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 43)(46, "div", 44)(47, "label");
    \u0275\u0275text(48, "Taux de ristourne (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_34_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.tauxRistourne, $event) || (ctx_r1.form.tauxRistourne = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 57);
    \u0275\u0275text(51, "Remise globale accord\xE9e au client");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 44)(53, "label");
    \u0275\u0275text(54, "Taux de pr\xE9compte (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_34_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.tauxPrecompte, $event) || (ctx_r1.form.tauxPrecompte = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 57);
    \u0275\u0275text(57, "Pr\xE9compte retenu sur les factures");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 44)(59, "label");
    \u0275\u0275text(60, "Limite de cr\xE9dit (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_34_Template_input_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.creditLimit, $event) || (ctx_r1.form.creditLimit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 57);
    \u0275\u0275text(63, "Plafond d'encours autoris\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 44)(65, "label");
    \u0275\u0275text(66, "Compte client (411x)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_34_Template_input_ngModelChange_67_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.receivableAccountCode, $event) || (ctx_r1.form.receivableAccountCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 57);
    \u0275\u0275text(69, "Compte de cr\xE9ance client par d\xE9faut");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(70, "div", 37)(71, "button", 38);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_34_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(72, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "button", 60);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_34_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(74, "span", 6);
    \u0275\u0275text(75, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingClient ? "Modifier le client" : "Nouveau client");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.errorMsg ? 8 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.ref);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.type);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.address);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.tauxRistourne);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.tauxPrecompte);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.creditLimit);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.receivableAccountCode);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Sauvegarde..." : "Enregistrer", " ");
  }
}
var CLIENT_HEADERS = ["Nom*", "R\xE9f\xE9rence", "T\xE9l\xE9phone", "Email", "Adresse", "Taux Ristourne (%)", "Taux Pr\xE9compte (%)", "Limite Cr\xE9dit (FCFA)", "Code Compte Client"];
var CLIENT_SAMPLE = ["Exemple SARL", "CLI001", "+237 691000000", "contact@exemple.cm", "Douala, Cameroun", "5", "2", "500000", "4111"];
var ClientListComponent = class _ClientListComponent {
  constructor(salesService, authService) {
    this.salesService = salesService;
    this.authService = authService;
    this.clients = [];
    this.loading = false;
    this.showModal = false;
    this.editingClient = null;
    this.saving = false;
    this.successMsg = "";
    this.errorMsg = "";
    this.searchQuery = "";
    this.form = this.emptyForm();
    this.showImportModal = false;
    this.importRows = [];
    this.importLoading = false;
    this.importProgress = null;
  }
  ngOnInit() {
    this.loadClients();
  }
  emptyForm() {
    return { name: "", type: "customer", companyId: 0 };
  }
  loadClients() {
    this.loading = true;
    this.salesService.getClients(this.authService.getCompanyId()).subscribe({
      next: (data) => {
        this.clients = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  get filteredClients() {
    if (!this.searchQuery.trim())
      return this.clients;
    const q = this.searchQuery.toLowerCase();
    return this.clients.filter((c) => c.name.toLowerCase().includes(q) || c.ref && c.ref.toLowerCase().includes(q) || c.email && c.email.toLowerCase().includes(q));
  }
  openCreate() {
    this.editingClient = null;
    this.form = __spreadProps(__spreadValues({}, this.emptyForm()), { companyId: this.authService.getCompanyId() });
    this.showModal = true;
    this.errorMsg = "";
  }
  openEdit(client) {
    this.editingClient = client;
    this.form = __spreadValues({}, client);
    this.showModal = true;
    this.errorMsg = "";
  }
  closeModal() {
    this.showModal = false;
    this.editingClient = null;
  }
  save() {
    if (!this.form.name?.trim()) {
      this.errorMsg = "Le nom du client est obligatoire";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const obs = this.editingClient ? this.salesService.updateClient(this.editingClient.id, this.form) : this.salesService.createClient(__spreadProps(__spreadValues({}, this.form), { companyId: this.authService.getCompanyId() }));
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.closeModal();
        this.loadClients();
        this.showSuccess(this.editingClient ? "Client modifi\xE9" : "Client cr\xE9\xE9 avec succ\xE8s");
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || "Erreur lors de la sauvegarde";
      }
    });
  }
  // === Import Excel ===
  downloadTemplate() {
    downloadExcelTemplate(CLIENT_HEADERS, CLIENT_SAMPLE, "modele_clients.xlsx");
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
      this.importProgress = { done: 0, total: this.importRows.length, errors: 0, messages: [] };
      for (const row of this.importRows) {
        const client = {
          name: String(row["Nom*"] || row["Nom"] || "").trim(),
          ref: String(row["R\xE9f\xE9rence"] || "").trim() || void 0,
          phone: String(row["T\xE9l\xE9phone"] || "").trim() || void 0,
          email: String(row["Email"] || "").trim() || void 0,
          address: String(row["Adresse"] || "").trim() || void 0,
          tauxRistourne: parseFloat(row["Taux Ristourne (%)"]) || void 0,
          tauxPrecompte: parseFloat(row["Taux Pr\xE9compte (%)"]) || void 0,
          creditLimit: parseFloat(row["Limite Cr\xE9dit (FCFA)"]) || void 0,
          receivableAccountCode: String(row["Code Compte Client"] || "").trim() || void 0,
          type: "customer",
          companyId
        };
        try {
          yield this.salesService.createClient(client).toPromise();
          this.importProgress.done++;
        } catch (e) {
          this.importProgress.errors++;
          this.importProgress.messages.push(`"${client.name}" : ${e.error?.message || "Erreur"}`);
        }
      }
      this.showImportModal = false;
      this.loadClients();
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
    this.\u0275fac = function ClientListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientListComponent)(\u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientListComponent, selectors: [["app-client-list"]], viewQuery: function ClientListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.importInput = _t.first);
      }
    }, decls: 35, vars: 8, consts: [["importInput", ""], [1, "page-container"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "record-count"], [1, "header-actions"], ["title", "T\xE9l\xE9charger le mod\xE8le Excel", 1, "btn-outline", 3, "click"], [1, "btn-import", 3, "click", "disabled"], [1, "btn-primary", 3, "click"], [1, "alert", "alert-success"], [1, "search-bar", "mb-16"], [1, "material-icons", "search-icon"], ["type", "text", "placeholder", "Rechercher un client...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "card"], [1, "loading-state"], [1, "empty-state"], [1, "data-table"], [1, "modal-overlay"], [1, "material-icons", "spin"], [1, "text-right"], [1, "text-center"], [1, "text-muted", "font-mono"], [1, "font-bold"], [1, "badge", "badge-ristourne"], [1, "text-muted"], [1, "text-secondary"], [1, "font-mono", "text-muted"], ["title", "Modifier", 1, "btn-icon", "btn-edit", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal", "import-modal", 3, "click"], [1, "modal-header"], [1, "material-icons", 2, "color", "#017E84"], [1, "btn-close", 3, "click"], [1, "modal-body", 2, "padding", "0", "overflow-x", "auto", "max-height", "50vh"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "modal", 3, "click"], [1, "alert", "alert-danger", "modal-alert"], [1, "modal-body"], [1, "section-title"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["type", "text", "placeholder", "Raison sociale", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "CODE001", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "customer"], ["value", "both"], ["type", "text", "placeholder", "+237 6XX XXX XXX", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "contact@exemple.cm", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "form-full"], ["type", "text", "placeholder", "Adresse compl\xE8te", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "section-title", "mt-16"], ["type", "number", "min", "0", "max", "100", "step", "0.01", "placeholder", "0.00", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-hint"], ["type", "number", "min", "0", "placeholder", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "4111", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click", "disabled"]], template: function ClientListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "input", 2, 0);
        \u0275\u0275listener("change", function ClientListComponent_Template_input_change_1_listener($event) {
          return ctx.onImportFileChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h1", 5)(6, "span", 6);
        \u0275\u0275text(7, "people");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, " Clients ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 8)(12, "button", 9);
        \u0275\u0275listener("click", function ClientListComponent_Template_button_click_12_listener() {
          return ctx.downloadTemplate();
        });
        \u0275\u0275elementStart(13, "span", 6);
        \u0275\u0275text(14, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Mod\xE8le Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 10);
        \u0275\u0275listener("click", function ClientListComponent_Template_button_click_16_listener() {
          return ctx.triggerImport();
        });
        \u0275\u0275elementStart(17, "span", 6);
        \u0275\u0275text(18, "upload_file");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 11);
        \u0275\u0275listener("click", function ClientListComponent_Template_button_click_20_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275elementStart(21, "span", 6);
        \u0275\u0275text(22, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Nouveau client ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(24, ClientListComponent_Conditional_24_Template, 4, 1, "div", 12);
        \u0275\u0275elementStart(25, "div", 13)(26, "span", 14);
        \u0275\u0275text(27, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Template_input_ngModelChange_28_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 16);
        \u0275\u0275conditionalCreate(30, ClientListComponent_Conditional_30_Template, 4, 0, "div", 17)(31, ClientListComponent_Conditional_31_Template, 7, 0, "div", 18)(32, ClientListComponent_Conditional_32_Template, 24, 0, "table", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(33, ClientListComponent_Conditional_33_Template, 38, 2, "div", 20);
        \u0275\u0275conditionalCreate(34, ClientListComponent_Conditional_34_Template, 77, 14, "div", 20);
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1("", ctx.filteredClients.length, " client(s)");
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", ctx.importLoading);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.importLoading ? "Lecture..." : "Importer Excel", " ");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.successMsg ? 24 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading ? 30 : ctx.filteredClients.length === 0 ? 31 : 32);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showImportModal ? 33 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal ? 34 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, DecimalPipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #017E84;\n  font-size: 22px;\n}\n.page-header[_ngcontent-%COMP%]   .record-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  background: #e9ecef;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled, \n.btn-outline[_ngcontent-%COMP%]:disabled, \n.btn-import[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #017E84;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #015f64;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #017E84;\n  border: 1px solid #017E84;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0fafa;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: white;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #adb5bd;\n  color: #212529;\n}\n.btn-import[_ngcontent-%COMP%] {\n  background: #e8f5f5;\n  color: #017E84;\n  border: 1px solid #b2dfdf;\n}\n.btn-import[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #d0eded;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n  border: 1px solid #a3e0c9;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 8px 14px;\n}\n.search-bar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 20px;\n}\n.search-bar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n}\n.mb-16[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: #6c757d;\n  gap: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 13px;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-ristourne[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #e7f1ff;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  width: 680px;\n  max-width: 95vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #e9ecef;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  margin: 0;\n  color: #212529;\n}\n.btn-close[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.btn-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.modal-alert[_ngcontent-%COMP%] {\n  margin: 12px 24px 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 18px 24px;\n  border-top: 1px solid #e9ecef;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #017E84;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 14px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #e9ecef;\n}\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.form-group[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.form-group[_ngcontent-%COMP%]   .form-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n  margin-top: 2px;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #017E84;\n}\n/*# sourceMappingURL=client-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientListComponent, [{
    type: Component,
    args: [{ selector: "app-client-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <!-- Input file cach\xE9 pour l'import -->
  <input #importInput type="file" accept=".xlsx,.xls" style="display:none" (change)="onImportFileChange($event)" />

  <div class="page-header">
    <div class="header-left">
      <h1 class="page-title">
        <span class="material-icons">people</span>
        Clients
      </h1>
      <span class="record-count">{{ filteredClients.length }} client(s)</span>
    </div>
    <div class="header-actions">
      <button class="btn-outline" (click)="downloadTemplate()" title="T\xE9l\xE9charger le mod\xE8le Excel">
        <span class="material-icons">download</span>
        Mod\xE8le Excel
      </button>
      <button class="btn-import" (click)="triggerImport()" [disabled]="importLoading">
        <span class="material-icons">upload_file</span>
        {{ importLoading ? 'Lecture...' : 'Importer Excel' }}
      </button>
      <button class="btn-primary" (click)="openCreate()">
        <span class="material-icons">person_add</span>
        Nouveau client
      </button>
    </div>
  </div>

  @if (successMsg) {
    <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div>
  }

  <!-- Recherche -->
  <div class="search-bar mb-16">
    <span class="material-icons search-icon">search</span>
    <input type="text" [(ngModel)]="searchQuery" placeholder="Rechercher un client..." class="search-input" />
  </div>

  <!-- Table -->
  <div class="card">
    @if (loading) {
      <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
    } @else if (filteredClients.length === 0) {
      <div class="empty-state">
        <span class="material-icons">people_outline</span>
        <p>Aucun client trouv\xE9</p>
        <button class="btn-primary" (click)="openCreate()">Cr\xE9er un client</button>
      </div>
    } @else {
      <table class="data-table">
        <thead>
          <tr>
            <th>R\xE9f.</th>
            <th>Nom</th>
            <th>T\xE9l\xE9phone</th>
            <th>Email</th>
            <th class="text-right">Ristourne %</th>
            <th class="text-right">Pr\xE9compte %</th>
            <th class="text-right">Limite cr\xE9dit</th>
            <th>Compte</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (client of filteredClients; track client.id) {
            <tr>
              <td class="text-muted font-mono">{{ client.ref || '\u2014' }}</td>
              <td class="font-bold">{{ client.name }}</td>
              <td>{{ client.phone || '\u2014' }}</td>
              <td>{{ client.email || '\u2014' }}</td>
              <td class="text-right">
                @if (client.tauxRistourne) {
                  <span class="badge badge-ristourne">{{ client.tauxRistourne }}%</span>
                } @else { <span class="text-muted">\u2014</span> }
              </td>
              <td class="text-right">
                @if (client.tauxPrecompte) {
                  <span class="text-secondary">{{ client.tauxPrecompte }}%</span>
                } @else { <span class="text-muted">\u2014</span> }
              </td>
              <td class="text-right">
                @if (client.creditLimit) {
                  {{ client.creditLimit | number:'1.0-0' }} FCFA
                } @else { <span class="text-muted">\u2014</span> }
              </td>
              <td class="font-mono text-muted">{{ client.receivableAccountCode || '4111' }}</td>
              <td class="text-center">
                <button class="btn-icon btn-edit" (click)="openEdit(client)" title="Modifier">
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

<!-- ===== Modal Import Excel ===== -->
@if (showImportModal) {
  <div class="modal-overlay" (click)="closeImportModal()">
    <div class="modal import-modal" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <span class="material-icons" style="color:#017E84">upload_file</span>
        <h2>Aper\xE7u import clients ({{ importRows.length }} ligne(s))</h2>
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
              <th>Adresse</th>
              <th>Ristourne %</th>
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
                <td>{{ row['Adresse'] || '\u2014' }}</td>
                <td>{{ row['Taux Ristourne (%)'] || '\u2014' }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" (click)="closeImportModal()">Annuler</button>
        <button class="btn-primary" (click)="confirmImport()">
          <span class="material-icons">check_circle</span>
          Confirmer l'import ({{ importRows.length }} clients)
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
        <h2>{{ editingClient ? 'Modifier le client' : 'Nouveau client' }}</h2>
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
            <input type="text" [(ngModel)]="form.name" class="form-control" placeholder="Raison sociale" />
          </div>
          <div class="form-group">
            <label>R\xE9f\xE9rence</label>
            <input type="text" [(ngModel)]="form.ref" class="form-control" placeholder="CODE001" />
          </div>
          <div class="form-group">
            <label>Type</label>
            <select [(ngModel)]="form.type" class="form-control">
              <option value="customer">Client</option>
              <option value="both">Client & Fournisseur</option>
            </select>
          </div>
          <div class="form-group">
            <label>T\xE9l\xE9phone</label>
            <input type="text" [(ngModel)]="form.phone" class="form-control" placeholder="+237 6XX XXX XXX" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" [(ngModel)]="form.email" class="form-control" placeholder="contact@exemple.cm" />
          </div>
          <div class="form-group form-full">
            <label>Adresse</label>
            <input type="text" [(ngModel)]="form.address" class="form-control" placeholder="Adresse compl\xE8te" />
          </div>
        </div>

        <div class="section-title mt-16">Param\xE8tres commerciaux</div>
        <div class="form-grid">
          <div class="form-group">
            <label>Taux de ristourne (%)</label>
            <input type="number" [(ngModel)]="form.tauxRistourne" class="form-control" min="0" max="100" step="0.01" placeholder="0.00" />
            <span class="form-hint">Remise globale accord\xE9e au client</span>
          </div>
          <div class="form-group">
            <label>Taux de pr\xE9compte (%)</label>
            <input type="number" [(ngModel)]="form.tauxPrecompte" class="form-control" min="0" max="100" step="0.01" placeholder="0.00" />
            <span class="form-hint">Pr\xE9compte retenu sur les factures</span>
          </div>
          <div class="form-group">
            <label>Limite de cr\xE9dit (FCFA)</label>
            <input type="number" [(ngModel)]="form.creditLimit" class="form-control" min="0" placeholder="0" />
            <span class="form-hint">Plafond d'encours autoris\xE9</span>
          </div>
          <div class="form-group">
            <label>Compte client (411x)</label>
            <input type="text" [(ngModel)]="form.receivableAccountCode" class="form-control" placeholder="4111" />
            <span class="form-hint">Compte de cr\xE9ance client par d\xE9faut</span>
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
`, styles: ['/* src/app/modules/sales/components/clients/client-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: #017E84;\n  font-size: 22px;\n}\n.page-header .record-count {\n  font-size: 13px;\n  color: #6c757d;\n  background: #e9ecef;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary,\n.btn-secondary,\n.btn-outline,\n.btn-import {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons,\n.btn-outline .material-icons,\n.btn-import .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled,\n.btn-outline:disabled,\n.btn-import:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: #017E84;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #015f64;\n}\n.btn-secondary {\n  background: white;\n  color: #017E84;\n  border: 1px solid #017E84;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #f0fafa;\n}\n.btn-outline {\n  background: white;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.btn-outline:hover:not(:disabled) {\n  border-color: #adb5bd;\n  color: #212529;\n}\n.btn-import {\n  background: #e8f5f5;\n  color: #017E84;\n  border: 1px solid #b2dfdf;\n}\n.btn-import:hover:not(:disabled) {\n  background: #d0eded;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: #0a5c45;\n  border: 1px solid #a3e0c9;\n}\n.alert.alert-danger {\n  background: #fde8e8;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.search-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 8px 14px;\n}\n.search-bar .search-icon {\n  color: #6c757d;\n  font-size: 20px;\n}\n.search-bar .search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n}\n.mb-16 {\n  margin-bottom: 16px;\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: #6c757d;\n  gap: 12px;\n}\n.loading-state .material-icons,\n.empty-state .material-icons {\n  font-size: 48px;\n  color: #dee2e6;\n}\n.loading-state p,\n.empty-state p {\n  margin: 0;\n  font-size: 15px;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.data-table td {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: #212529;\n  border-bottom: 1px solid #f0f0f0;\n}\n.data-table tbody tr:hover td {\n  background: #f8f9fa;\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.font-mono {\n  font-family: monospace;\n  font-size: 13px;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: #adb5bd;\n}\n.text-secondary {\n  color: #6c757d;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-ristourne {\n  background: #fff3cd;\n  color: #856404;\n}\n.btn-icon {\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.btn-icon .material-icons {\n  font-size: 18px;\n}\n.btn-icon.btn-edit {\n  color: #0d6efd;\n}\n.btn-icon.btn-edit:hover {\n  background: #e7f1ff;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: white;\n  border-radius: 10px;\n  width: 680px;\n  max-width: 95vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #e9ecef;\n}\n.modal-header h2 {\n  font-size: 17px;\n  font-weight: 600;\n  margin: 0;\n  color: #212529;\n}\n.btn-close {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n}\n.btn-close:hover {\n  background: #f0f0f0;\n}\n.btn-close .material-icons {\n  font-size: 20px;\n}\n.modal-alert {\n  margin: 12px 24px 0;\n}\n.modal-body {\n  padding: 24px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 18px 24px;\n  border-top: 1px solid #e9ecef;\n}\n.section-title {\n  font-size: 13px;\n  font-weight: 600;\n  color: #017E84;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 14px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #e9ecef;\n}\n.mt-16 {\n  margin-top: 24px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid .form-full {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.form-group .required {\n  color: #dc3545;\n}\n.form-group .form-hint {\n  font-size: 11px;\n  color: #6c757d;\n  margin-top: 2px;\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.form-control:focus {\n  border-color: #017E84;\n}\n/*# sourceMappingURL=client-list.component.css.map */\n'] }]
  }], () => [{ type: SalesService }, { type: AuthService }], { importInput: [{
    type: ViewChild,
    args: ["importInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientListComponent, { className: "ClientListComponent", filePath: "src/app/modules/sales/components/clients/client-list.component.ts", lineNumber: 18 });
})();
export {
  ClientListComponent
};
//# sourceMappingURL=chunk-ZTNY5B2R.js.map
