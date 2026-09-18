import {
  RistourneService
} from "./chunk-SAK5MSBQ.js";
import {
  StockService
} from "./chunk-LIGNVDFD.js";
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
  DecimalPipe,
  ViewChild,
  forkJoin,
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/sales/components/clients/client-list.component.ts
var _c0 = ["importInput"];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function ClientListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_12_Template_button_click_0_listener() {
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
    \u0275\u0275listener("click", function ClientListComponent_Conditional_12_Template_button_click_4_listener() {
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
function ClientListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCreate());
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouveau client ");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_Conditional_14_Template(rf, ctx) {
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
function ClientListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 22);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_Conditional_21_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_21_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openCreate());
    });
    \u0275\u0275text(1, "Cr\xE9er un client");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 6);
    \u0275\u0275text(2, "people_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun client trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ClientListComponent_Conditional_21_Conditional_5_Template, 2, 0, "button", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.canCreate ? 5 : -1);
  }
}
function ClientListComponent_Conditional_22_For_25_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", client_r6.tauxRistourne, "%");
  }
}
function ClientListComponent_Conditional_22_For_25_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_Conditional_22_For_25_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", client_r6.tauxPrecompte, "%");
  }
}
function ClientListComponent_Conditional_22_For_25_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_Conditional_22_For_25_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const client_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, client_r6.creditLimit, "1.0-0"), " FCFA ");
  }
}
function ClientListComponent_Conditional_22_For_25_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_Conditional_22_For_25_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "Exempt\xE9");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_Conditional_22_For_25_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "Tax\xE9");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_Conditional_22_For_25_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_22_For_25_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const client_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEdit(client_r6));
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function ClientListComponent_Conditional_22_For_25_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_22_For_25_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const client_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteClient(client_r6));
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function ClientListComponent_Conditional_22_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 23);
    \u0275\u0275conditionalCreate(10, ClientListComponent_Conditional_22_For_25_Conditional_10_Template, 2, 1, "span", 27)(11, ClientListComponent_Conditional_22_For_25_Conditional_11_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 23);
    \u0275\u0275conditionalCreate(13, ClientListComponent_Conditional_22_For_25_Conditional_13_Template, 2, 1, "span", 29)(14, ClientListComponent_Conditional_22_For_25_Conditional_14_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 23);
    \u0275\u0275conditionalCreate(16, ClientListComponent_Conditional_22_For_25_Conditional_16_Template, 2, 4)(17, ClientListComponent_Conditional_22_For_25_Conditional_17_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 30);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 24);
    \u0275\u0275conditionalCreate(21, ClientListComponent_Conditional_22_For_25_Conditional_21_Template, 2, 0, "span", 31)(22, ClientListComponent_Conditional_22_For_25_Conditional_22_Template, 2, 0, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 33);
    \u0275\u0275conditionalCreate(24, ClientListComponent_Conditional_22_For_25_Conditional_24_Template, 3, 0, "button", 34);
    \u0275\u0275conditionalCreate(25, ClientListComponent_Conditional_22_For_25_Conditional_25_Template, 3, 0, "button", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const client_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r6.ref || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r6.phone || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r6.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(client_r6.tauxRistourne ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(client_r6.tauxPrecompte ? 13 : 14);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(client_r6.creditLimit ? 16 : 17);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(client_r6.receivableAccountCode || "4111");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(client_r6.exemptTaxeGuinness ? 21 : 22);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.canEdit ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canDelete ? 25 : -1);
  }
}
function ClientListComponent_Conditional_22_Template(rf, ctx) {
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
    \u0275\u0275text(12, "Ristourne %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 23);
    \u0275\u0275text(14, "Pr\xE9compte %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 23);
    \u0275\u0275text(16, "Limite cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 24);
    \u0275\u0275text(20, "Ristourne Guinness");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 24);
    \u0275\u0275text(22, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275repeaterCreate(24, ClientListComponent_Conditional_22_For_25_Template, 26, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx_r2.filteredClients);
  }
}
function ClientListComponent_Conditional_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "div", 47);
    \u0275\u0275elementStart(2, "p", 48);
    \u0275\u0275text(3, "Importation en cours\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.importRows.length, " ligne(s) en cours de traitement");
  }
}
function ClientListComponent_Conditional_23_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 26);
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
    const row_r10 = ctx.$implicit;
    const \u0275$index_246_r11 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_246_r11 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10["Nom*"] || row_r10["Nom"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10["R\xE9f\xE9rence"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10["T\xE9l\xE9phone"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10["Email"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10["Adresse"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10["Taux Ristourne (%)"] || "\u2014");
  }
}
function ClientListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_23_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeImportModal());
    });
    \u0275\u0275elementStart(1, "div", 39);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_23_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(2, ClientListComponent_Conditional_23_Conditional_2_Template, 6, 1, "div", 40);
    \u0275\u0275elementStart(3, "div", 41)(4, "span", 42);
    \u0275\u0275text(5, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 43);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_23_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeImportModal());
    });
    \u0275\u0275elementStart(9, "span", 6);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 44)(12, "table", 17)(13, "thead")(14, "tr")(15, "th");
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Ristourne %");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275repeaterCreate(30, ClientListComponent_Conditional_23_For_31_Template, 15, 7, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 45)(33, "button", 46);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_23_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeImportModal());
    });
    \u0275\u0275text(34, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 21);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_23_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmImport());
    });
    \u0275\u0275elementStart(36, "span", 6);
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
    \u0275\u0275textInterpolate1("Aper\xE7u import clients (", ctx_r2.importRows.length, " ligne(s))");
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r2.importRows);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Confirmer l'import (", ctx_r2.importRows.length, " clients) ");
  }
}
function ClientListComponent_Conditional_24_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 6);
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
function ClientListComponent_Conditional_24_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r13 = ctx.$implicit;
    \u0275\u0275property("value", t_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", t_r13, "%");
  }
}
function ClientListComponent_Conditional_24_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 Aucune ristourne Guinness ne sera appliqu\xE9e aux factures de ce client ");
  }
}
function ClientListComponent_Conditional_24_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 La ristourne Guinness (300 FCFA/article) sera appliqu\xE9e aux produits Guinness ");
  }
}
function ClientListComponent_Conditional_24_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 76);
    \u0275\u0275text(1, "Chargement des ristournes...");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_Conditional_24_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 76);
    \u0275\u0275text(1, "Aucune ristourne configur\xE9e pour ce client.");
    \u0275\u0275elementEnd();
  }
}
function ClientListComponent_Conditional_24_Conditional_82_For_15_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r16 = ctx.$implicit;
    \u0275\u0275property("value", cat_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r16.name);
  }
}
function ClientListComponent_Conditional_24_Conditional_82_For_15_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r17 = ctx.$implicit;
    \u0275\u0275property("value", t_r17.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r17.label);
  }
}
function ClientListComponent_Conditional_24_Conditional_82_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "select", 81);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_24_Conditional_82_For_15_Template_select_ngModelChange_2_listener($event) {
      const r_r15 = \u0275\u0275restoreView(_r14).$implicit;
      \u0275\u0275twoWayBindingSet(r_r15.categoryId, $event) || (r_r15.categoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(3, "option", 68);
    \u0275\u0275text(4, "-- Cat\xE9gorie --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, ClientListComponent_Conditional_24_Conditional_82_For_15_For_6_Template, 2, 2, "option", 68, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "select", 81);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_24_Conditional_82_For_15_Template_select_ngModelChange_8_listener($event) {
      const r_r15 = \u0275\u0275restoreView(_r14).$implicit;
      \u0275\u0275twoWayBindingSet(r_r15.typeRistourne, $event) || (r_r15.typeRistourne = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ClientListComponent_Conditional_24_Conditional_82_For_15_Template_select_ngModelChange_8_listener() {
      const r_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onRistourneTypeChange(r_r15));
    });
    \u0275\u0275repeaterCreate(9, ClientListComponent_Conditional_24_Conditional_82_For_15_For_10_Template, 2, 2, "option", 68, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 80)(12, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_24_Conditional_82_For_15_Template_input_ngModelChange_12_listener($event) {
      const r_r15 = \u0275\u0275restoreView(_r14).$implicit;
      \u0275\u0275twoWayBindingSet(r_r15.montantHT, $event) || (r_r15.montantHT = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ClientListComponent_Conditional_24_Conditional_82_For_15_Template_input_ngModelChange_12_listener() {
      const r_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onRistourneHtChange(r_r15));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 83);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "button", 84);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_24_Conditional_82_For_15_Template_button_click_17_listener() {
      const \u0275$index_458_r18 = \u0275\u0275restoreView(_r14).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeRistourne(\u0275$index_458_r18));
    });
    \u0275\u0275elementStart(18, "span", 6);
    \u0275\u0275text(19, "close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r15.categoryId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.categories);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", r_r15.typeRistourne);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.TYPE_OPTS);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", r_r15.montantHT);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 5, r_r15.montantTTC, "1.0-2"));
  }
}
function ClientListComponent_Conditional_24_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "table", 79)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 80);
    \u0275\u0275text(9, "Montant HT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 80);
    \u0275\u0275text(11, "Montant TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, ClientListComponent_Conditional_24_Conditional_82_For_15_Template, 20, 8, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.ristournes);
  }
}
function ClientListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_24_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 41)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 43);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_24_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, ClientListComponent_Conditional_24_Conditional_8_Template, 4, 1, "div", 51);
    \u0275\u0275elementStart(9, "div", 52)(10, "div", 53);
    \u0275\u0275text(11, "Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 54)(13, "div", 55)(14, "label");
    \u0275\u0275text(15, "Nom ");
    \u0275\u0275elementStart(16, "span", 56);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_24_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.name, $event) || (ctx_r2.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 55)(20, "label");
    \u0275\u0275text(21, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_24_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.ref, $event) || (ctx_r2.form.ref = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 55)(24, "label");
    \u0275\u0275text(25, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_24_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.type, $event) || (ctx_r2.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 60);
    \u0275\u0275text(28, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 61);
    \u0275\u0275text(30, "Client & Fournisseur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 55)(32, "label");
    \u0275\u0275text(33, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_24_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.phone, $event) || (ctx_r2.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 55)(36, "label");
    \u0275\u0275text(37, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_24_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.email, $event) || (ctx_r2.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 64)(40, "label");
    \u0275\u0275text(41, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_24_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.address, $event) || (ctx_r2.form.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 66);
    \u0275\u0275text(44, "Pr\xE9compte & Taxes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 54)(46, "div", 55)(47, "label");
    \u0275\u0275text(48, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 55)(51, "label");
    \u0275\u0275text(52, "Taux pr\xE9compte (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "select", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_24_Template_select_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.tauxPrecompte, $event) || (ctx_r2.form.tauxPrecompte = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ClientListComponent_Conditional_24_Template_select_ngModelChange_53_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTauxChange());
    });
    \u0275\u0275elementStart(54, "option", 68);
    \u0275\u0275text(55, "-- Aucun --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(56, ClientListComponent_Conditional_24_For_57_Template, 2, 2, "option", 68, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 55)(59, "label");
    \u0275\u0275text(60, "Limite de cr\xE9dit (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_24_Template_input_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.creditLimit, $event) || (ctx_r2.form.creditLimit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 55)(63, "label");
    \u0275\u0275text(64, "Compte client (411x)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Conditional_24_Template_input_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.receivableAccountCode, $event) || (ctx_r2.form.receivableAccountCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 64)(67, "label", 71);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_24_Template_label_click_67_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.exemptTaxeGuinness = !ctx_r2.form.exemptTaxeGuinness);
    });
    \u0275\u0275element(68, "span", 72);
    \u0275\u0275elementStart(69, "span", 73);
    \u0275\u0275text(70, " Exempt\xE9 de la Ristourne Guinness ");
    \u0275\u0275elementStart(71, "span", 74);
    \u0275\u0275conditionalCreate(72, ClientListComponent_Conditional_24_Conditional_72_Template, 1, 0)(73, ClientListComponent_Conditional_24_Conditional_73_Template, 1, 0);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(74, "div", 66);
    \u0275\u0275text(75, " Ristournes ");
    \u0275\u0275elementStart(76, "button", 75);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_24_Template_button_click_76_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addRistourne());
    });
    \u0275\u0275elementStart(77, "span", 6);
    \u0275\u0275text(78, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(79, " Ajouter ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(80, ClientListComponent_Conditional_24_Conditional_80_Template, 2, 0, "p", 76)(81, ClientListComponent_Conditional_24_Conditional_81_Template, 2, 0, "p", 76)(82, ClientListComponent_Conditional_24_Conditional_82_Template, 16, 0, "div", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 45)(84, "button", 46);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_24_Template_button_click_84_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(85, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "button", 78);
    \u0275\u0275listener("click", function ClientListComponent_Conditional_24_Template_button_click_86_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275elementStart(87, "span", 6);
    \u0275\u0275text(88, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.editingClient ? "Modifier le client" : "Nouveau client");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.errorMsg ? 8 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.ref);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.type);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.address);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.tauxPrecompte);
    \u0275\u0275advance();
    \u0275\u0275property("value", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.TAUX_OPTS);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.creditLimit);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.receivableAccountCode);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("toggle-on", ctx_r2.form.exemptTaxeGuinness);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.form.exemptTaxeGuinness);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.form.exemptTaxeGuinness ? 72 : 73);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r2.loadingRst ? 80 : ctx_r2.ristournes.length === 0 ? 81 : 82);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving ? "Sauvegarde..." : "Enregistrer", " ");
  }
}
var CLIENT_HEADERS = ["Nom*", "R\xE9f\xE9rence", "T\xE9l\xE9phone", "Email", "Adresse", "Taux Pr\xE9compte (%)", "Limite Cr\xE9dit (FCFA)", "Code Compte Client"];
var CLIENT_SAMPLE = ["Exemple SARL", "CLI001", "+237 691000000", "contact@exemple.cm", "Douala, Cameroun", "2", "500000", "4111"];
var ClientListComponent = class _ClientListComponent {
  constructor(salesService, ristourneSvc, stockSvc, authService) {
    this.salesService = salesService;
    this.ristourneSvc = ristourneSvc;
    this.stockSvc = stockSvc;
    this.authService = authService;
    this.clients = [];
    this.categories = [];
    this.loading = false;
    this.showModal = false;
    this.editingClient = null;
    this.saving = false;
    this.successMsg = "";
    this.errorMsg = "";
    this.searchQuery = "";
    this.form = this.emptyForm();
    this.ristournes = [];
    this.loadingRst = false;
    this.canCreate = false;
    this.canEdit = false;
    this.canDelete = false;
    this.canImport = false;
    this.TAUX_OPTS = [1, 2, 2.5, 5, 10];
    this.TYPE_OPTS = [
      { value: "brasserie", label: "Brasseries" },
      { value: "guinness", label: "Guinness" }
    ];
    this.showImportModal = false;
    this.importRows = [];
    this.importLoading = false;
    this.importProgress = null;
  }
  ngOnInit() {
    this.canCreate = this.authService.hasPermission("VENTES", "CLIENTS", "CREATE");
    this.canEdit = this.authService.hasPermission("VENTES", "CLIENTS", "EDIT");
    this.canDelete = this.authService.hasPermission("VENTES", "CLIENTS", "DELETE");
    this.canImport = this.authService.hasPermission("VENTES", "CLIENTS", "IMPORT");
    this.loadClients();
    this.stockSvc.getCategories(this.authService.getCompanyId()).subscribe((c) => this.categories = c);
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
    this.ristournes = [];
    this.showModal = true;
    this.errorMsg = "";
  }
  openEdit(client) {
    this.editingClient = client;
    this.form = __spreadValues({}, client);
    this.ristournes = [];
    this.showModal = true;
    this.errorMsg = "";
    if (client.id) {
      this.loadingRst = true;
      this.ristourneSvc.getByPartner(client.id, this.authService.getCompanyId()).subscribe({
        next: (rst) => {
          this.ristournes = rst.map((r) => ({
            id: r.id,
            categoryId: r.categoryId,
            typeRistourne: r.typeRistourne ?? "brasserie",
            montantHT: r.montantFixe,
            montantTTC: this.calcTTC(r.montantFixe, r.typeRistourne ?? "brasserie", client.tauxPrecompte ?? 0)
          }));
          this.loadingRst = false;
        },
        error: () => {
          this.loadingRst = false;
        }
      });
    }
  }
  closeModal() {
    this.showModal = false;
    this.editingClient = null;
  }
  calcTTC(ht, type, taux) {
    if (type === "guinness")
      return ht;
    return ht + ht * (taux / 100);
  }
  onTauxChange() {
    const taux = this.form.tauxPrecompte ?? 0;
    this.ristournes.forEach((r) => {
      r.montantTTC = this.calcTTC(r.montantHT, r.typeRistourne, taux);
    });
  }
  onRistourneHtChange(r) {
    r.montantTTC = this.calcTTC(r.montantHT, r.typeRistourne, this.form.tauxPrecompte ?? 0);
  }
  onRistourneTypeChange(r) {
    r.montantTTC = this.calcTTC(r.montantHT, r.typeRistourne, this.form.tauxPrecompte ?? 0);
  }
  addRistourne() {
    this.ristournes.push({ categoryId: 0, typeRistourne: "brasserie", montantHT: 0, montantTTC: 0 });
  }
  removeRistourne(i) {
    this.ristournes.splice(i, 1);
  }
  save() {
    if (!this.form.name?.trim()) {
      this.errorMsg = "Le nom du client est obligatoire";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const companyId = this.authService.getCompanyId();
    const obs = this.editingClient ? this.salesService.updateClient(this.editingClient.id, this.form) : this.salesService.createClient(__spreadProps(__spreadValues({}, this.form), { companyId }));
    obs.subscribe({
      next: (saved) => {
        const clientId = saved.id;
        const validRst = this.ristournes.filter((r) => r.categoryId > 0);
        const saves = validRst.map((r) => this.ristourneSvc.save({
          id: r.id,
          partnerId: clientId,
          categoryId: r.categoryId,
          typeRistourne: r.typeRistourne,
          montantFixe: r.montantHT,
          companyId
        }));
        if (saves.length > 0) {
          forkJoin(saves).subscribe({
            next: () => this.finishSave(this.editingClient ? "Client modifi\xE9" : "Client cr\xE9\xE9 avec succ\xE8s"),
            error: () => this.finishSave(this.editingClient ? "Client modifi\xE9 (erreur ristournes)" : "Client cr\xE9\xE9 (erreur ristournes)")
          });
        } else {
          this.finishSave(this.editingClient ? "Client modifi\xE9" : "Client cr\xE9\xE9 avec succ\xE8s");
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
    this.closeModal();
    this.loadClients();
    this.showSuccess(msg);
  }
  deleteClient(client) {
    if (!confirm(`Supprimer le client "${client.name}" ?`))
      return;
    this.salesService.deleteClient(client.id).subscribe({
      next: () => {
        this.showSuccess("Client supprim\xE9");
        this.loadClients();
      },
      error: (e) => {
        this.showSuccess("Erreur : " + (e.error?.message || "Impossible de supprimer"));
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
      this.importLoading = true;
      this.importProgress = { done: 0, total: this.importRows.length, errors: 0, messages: [] };
      for (const row of this.importRows) {
        const client = {
          name: String(row["Nom*"] || row["Nom"] || "").trim(),
          ref: String(row["R\xE9f\xE9rence"] || "").trim() || void 0,
          phone: String(row["T\xE9l\xE9phone"] || "").trim() || void 0,
          email: String(row["Email"] || "").trim() || void 0,
          address: String(row["Adresse"] || "").trim() || void 0,
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
      this.importLoading = false;
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
      return new (__ngFactoryType__ || _ClientListComponent)(\u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(RistourneService), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService));
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
    }, decls: 25, vars: 8, consts: [["importInput", ""], [1, "page-container"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "record-count"], [1, "header-actions"], [1, "btn-primary"], [1, "alert", "alert-success"], [1, "search-bar", "mb-16"], [1, "material-icons", "search-icon"], ["type", "text", "placeholder", "Rechercher un client...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "card"], [1, "loading-state"], [1, "empty-state"], [1, "data-table"], [1, "modal-overlay"], ["title", "T\xE9l\xE9charger le mod\xE8le Excel", 1, "btn-outline", 3, "click"], [1, "btn-import", 3, "click", "disabled"], [1, "btn-primary", 3, "click"], [1, "material-icons", "spin"], [1, "text-right"], [1, "text-center"], [1, "text-muted", "font-mono"], [1, "font-bold"], [1, "badge", "badge-ristourne"], [1, "text-muted"], [1, "text-secondary"], [1, "font-mono", "text-muted"], [1, "badge-exempt-guiness"], [1, "badge-taxed-guiness"], [1, "text-center", 2, "display", "flex", "gap", "4px", "justify-content", "center"], ["title", "Modifier", 1, "btn-icon", "btn-edit"], ["title", "Supprimer", 1, "btn-icon", "btn-delete"], ["title", "Modifier", 1, "btn-icon", "btn-edit", 3, "click"], ["title", "Supprimer", 1, "btn-icon", "btn-delete", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal", "import-modal", 2, "position", "relative", 3, "click"], [2, "position", "absolute", "inset", "0", "background", "rgba(255,255,255,0.9)", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "z-index", "10", "border-radius", "inherit"], [1, "modal-header"], [1, "material-icons", 2, "color", "#017E84"], [1, "btn-close", 3, "click"], [1, "modal-body", 2, "padding", "0", "overflow-x", "auto", "max-height", "50vh"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "spinner"], [2, "margin-top", "14px", "color", "#017E84", "font-weight", "600"], [2, "font-size", "12px", "color", "#6c757d", "margin-top", "4px"], [1, "modal", 3, "click"], [1, "alert", "alert-danger", "modal-alert"], [1, "modal-body"], [1, "section-title"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["type", "text", "placeholder", "Raison sociale", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "CODE001", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "customer"], ["value", "both"], ["type", "text", "placeholder", "+237 6XX XXX XXX", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "contact@exemple.cm", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "form-full"], ["type", "text", "placeholder", "Adresse compl\xE8te", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "section-title", "mt-16"], ["type", "text", "value", "Vente", "readonly", "", 1, "form-control", 2, "background", "#f8f9fa", "color", "#6c757d"], [3, "value"], ["type", "number", "min", "0", "placeholder", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "4111", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "toggle-label", 3, "click"], [1, "toggle-slider"], [1, "toggle-text"], [1, "toggle-hint"], ["type", "button", 1, "btn-add-inline", 3, "click"], [1, "text-secondary", 2, "font-size", "13px", "padding", "8px 0"], [1, "inline-table-wrap"], [1, "btn-primary", 3, "click", "disabled"], [1, "inline-table"], [1, "ar"], [1, "inp-cell", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "inp-cell", "ar", 3, "ngModelChange", "ngModel"], [1, "ar", "ttc-val"], ["type", "button", 1, "btn-del-row", 3, "click"]], template: function ClientListComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275conditionalCreate(12, ClientListComponent_Conditional_12_Template, 8, 2);
        \u0275\u0275conditionalCreate(13, ClientListComponent_Conditional_13_Template, 4, 0, "button", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(14, ClientListComponent_Conditional_14_Template, 4, 1, "div", 10);
        \u0275\u0275elementStart(15, "div", 11)(16, "span", 12);
        \u0275\u0275text(17, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function ClientListComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 14);
        \u0275\u0275conditionalCreate(20, ClientListComponent_Conditional_20_Template, 4, 0, "div", 15)(21, ClientListComponent_Conditional_21_Template, 6, 1, "div", 16)(22, ClientListComponent_Conditional_22_Template, 26, 0, "table", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(23, ClientListComponent_Conditional_23_Template, 39, 3, "div", 18);
        \u0275\u0275conditionalCreate(24, ClientListComponent_Conditional_24_Template, 90, 20, "div", 18);
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1("", ctx.filteredClients.length, " client(s)");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.canImport ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.canCreate ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 14 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading ? 20 : ctx.filteredClients.length === 0 ? 21 : 22);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showImportModal ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal ? 24 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 22px;\n}\n.page-header[_ngcontent-%COMP%]   .record-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled, \n.btn-outline[_ngcontent-%COMP%]:disabled, \n.btn-import[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--accent);\n  border: 1px solid #017E84;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--text-muted);\n  color: var(--text-primary);\n}\n.btn-import[_ngcontent-%COMP%] {\n  background: var(--accent-light);\n  color: var(--accent);\n  border: 1px solid #b2dfdf;\n}\n.btn-import[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 8px 14px;\n}\n.search-bar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.search-bar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n}\n.mb-16[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--border);\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 13px;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-ristourne[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #e7f1ff;\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  width: 780px;\n  max-width: 95vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  margin: 0;\n  color: var(--text-primary);\n}\n.btn-close[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.modal-alert[_ngcontent-%COMP%] {\n  margin: 12px 24px 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 18px 24px;\n  border-top: 1px solid var(--border);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--accent);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 14px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid var(--border);\n}\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-group[_ngcontent-%COMP%]   .form-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n}\n.btn-add-inline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  float: right;\n  background: none;\n  border: 1px dashed #017E84;\n  color: var(--accent);\n  border-radius: 6px;\n  padding: 3px 10px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-inline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-add-inline[_ngcontent-%COMP%]:hover {\n  background: rgba(1, 126, 132, 0.08);\n}\n.inline-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.inline-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n  margin-top: 4px;\n}\n.inline-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 7px 8px;\n  background: var(--bg-elevated);\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  border-bottom: 2px solid var(--border);\n  text-align: left;\n}\n.inline-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 4px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.inline-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.inline-table[_ngcontent-%COMP%]   .ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.inline-table[_ngcontent-%COMP%]   .ttc-val[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 600;\n  color: var(--accent);\n  font-size: 13px;\n}\n.inp-cell[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 4px 6px;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  box-sizing: border-box;\n}\n.inp-cell[_ngcontent-%COMP%]:hover {\n  border-color: var(--border);\n  background: var(--bg-surface);\n}\n.inp-cell[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n  background: var(--bg-surface);\n}\n.inp-cell.ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.btn-del-row[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--border);\n  padding: 2px;\n  border-radius: 3px;\n}\n.btn-del-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-del-row[_ngcontent-%COMP%]:hover {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.badge-exempt-guiness[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 4px;\n  background: #e8f5e9;\n  color: #2e7d32;\n  border: 1px solid #a5d6a7;\n}\n.badge-taxed-guiness[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 4px;\n  background: var(--warning-bg);\n  color: var(--warning);\n  border: 1px solid #ffc107;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  padding: 10px 14px;\n  background: var(--bg-hover);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: border-color 0.2s, background 0.2s;\n}\n.toggle-label.toggle-on[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.08);\n  border-color: #a5d6a7;\n}\n.toggle-slider[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40px;\n  height: 22px;\n  background: #dee2e6;\n  border-radius: 11px;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.toggle-slider[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: var(--bg-surface);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  transition: transform 0.2s;\n}\n.toggle-slider.active[_ngcontent-%COMP%] {\n  background: #2e7d32;\n}\n.toggle-slider.active[_ngcontent-%COMP%]::after {\n  transform: translateX(18px);\n}\n.toggle-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.toggle-text[_ngcontent-%COMP%]   .toggle-hint[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-weight: 400;\n  font-size: 12px;\n}\n/*# sourceMappingURL=client-list.component.css.map */'] });
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
          Nouveau client
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
        @if (canCreate) {
          <button class="btn-primary" (click)="openCreate()">Cr\xE9er un client</button>
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
            <th class="text-right">Ristourne %</th>
            <th class="text-right">Pr\xE9compte %</th>
            <th class="text-right">Limite cr\xE9dit</th>
            <th>Compte</th>
            <th class="text-center">Ristourne Guinness</th>
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
                @if (client.exemptTaxeGuinness) {
                  <span class="badge-exempt-guiness">Exempt\xE9</span>
                } @else {
                  <span class="badge-taxed-guiness">Tax\xE9</span>
                }
              </td>
              <td class="text-center" style="display:flex;gap:4px;justify-content:center">
                @if (canEdit) {
                  <button class="btn-icon btn-edit" (click)="openEdit(client)" title="Modifier">
                    <span class="material-icons">edit</span>
                  </button>
                }
                @if (canDelete) {
                  <button class="btn-icon btn-delete" (click)="deleteClient(client)" title="Supprimer">
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

        <div class="section-title mt-16">Pr\xE9compte &amp; Taxes</div>
        <div class="form-grid">
          <div class="form-group">
            <label>Type</label>
            <input type="text" class="form-control" value="Vente" readonly style="background:#f8f9fa;color:#6c757d" />
          </div>
          <div class="form-group">
            <label>Taux pr\xE9compte (%)</label>
            <select class="form-control" [(ngModel)]="form.tauxPrecompte" (ngModelChange)="onTauxChange()">
              <option [value]="undefined">-- Aucun --</option>
              @for (t of TAUX_OPTS; track t) { <option [value]="t">{{ t }}%</option> }
            </select>
          </div>
          <div class="form-group">
            <label>Limite de cr\xE9dit (FCFA)</label>
            <input type="number" [(ngModel)]="form.creditLimit" class="form-control" min="0" placeholder="0" />
          </div>
          <div class="form-group">
            <label>Compte client (411x)</label>
            <input type="text" [(ngModel)]="form.receivableAccountCode" class="form-control" placeholder="4111" />
          </div>
          <div class="form-group form-full">
            <label class="toggle-label" [class.toggle-on]="form.exemptTaxeGuinness" (click)="form.exemptTaxeGuinness = !form.exemptTaxeGuinness">
              <span class="toggle-slider" [class.active]="form.exemptTaxeGuinness"></span>
              <span class="toggle-text">
                Exempt\xE9 de la Ristourne Guinness
                <span class="toggle-hint">
                  @if (form.exemptTaxeGuinness) {
                    \u2014 Aucune ristourne Guinness ne sera appliqu\xE9e aux factures de ce client
                  } @else {
                    \u2014 La ristourne Guinness (300 FCFA/article) sera appliqu\xE9e aux produits Guinness
                  }
                </span>
              </span>
            </label>
          </div>
        </div>

        <!-- Section Ristournes -->
        <div class="section-title mt-16">
          Ristournes
          <button type="button" class="btn-add-inline" (click)="addRistourne()">
            <span class="material-icons">add</span> Ajouter
          </button>
        </div>
        @if (loadingRst) {
          <p class="text-secondary" style="font-size:13px;padding:8px 0">Chargement des ristournes...</p>
        } @else if (ristournes.length === 0) {
          <p class="text-secondary" style="font-size:13px;padding:8px 0">Aucune ristourne configur\xE9e pour ce client.</p>
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
                @for (r of ristournes; track $index; let i = $index) {
                  <tr>
                    <td>
                      <select class="inp-cell" [(ngModel)]="r.categoryId">
                        <option [value]="0">-- Cat\xE9gorie --</option>
                        @for (cat of categories; track cat.id) { <option [value]="cat.id">{{ cat.name }}</option> }
                      </select>
                    </td>
                    <td>
                      <select class="inp-cell" [(ngModel)]="r.typeRistourne" (ngModelChange)="onRistourneTypeChange(r)">
                        @for (t of TYPE_OPTS; track t.value) { <option [value]="t.value">{{ t.label }}</option> }
                      </select>
                    </td>
                    <td class="ar">
                      <input type="number" class="inp-cell ar" [(ngModel)]="r.montantHT" min="0"
                        (ngModelChange)="onRistourneHtChange(r)" />
                    </td>
                    <td class="ar ttc-val">{{ r.montantTTC | number:'1.0-2' }}</td>
                    <td>
                      <button type="button" class="btn-del-row" (click)="removeRistourne(i)">
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
        <button class="btn-secondary" (click)="closeModal()">Annuler</button>
        <button class="btn-primary" (click)="save()" [disabled]="saving">
          <span class="material-icons">save</span>
          {{ saving ? 'Sauvegarde...' : 'Enregistrer' }}
        </button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/sales/components/clients/client-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header .page-title .material-icons {\n  color: var(--accent);\n  font-size: 22px;\n}\n.page-header .record-count {\n  font-size: 13px;\n  color: var(--text-muted);\n  background: var(--bg-elevated);\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary,\n.btn-secondary,\n.btn-outline,\n.btn-import {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons,\n.btn-outline .material-icons,\n.btn-import .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled,\n.btn-outline:disabled,\n.btn-import:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--accent);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: var(--accent);\n}\n.btn-secondary {\n  background: var(--bg-surface);\n  color: var(--accent);\n  border: 1px solid #017E84;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-outline {\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.btn-outline:hover:not(:disabled) {\n  border-color: var(--text-muted);\n  color: var(--text-primary);\n}\n.btn-import {\n  background: var(--accent-light);\n  color: var(--accent);\n  border: 1px solid #b2dfdf;\n}\n.btn-import:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.search-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  padding: 8px 14px;\n}\n.search-bar .search-icon {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.search-bar .search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n}\n.mb-16 {\n  margin-bottom: 16px;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.loading-state .material-icons,\n.empty-state .material-icons {\n  font-size: 48px;\n  color: var(--border);\n}\n.loading-state p,\n.empty-state p {\n  margin: 0;\n  font-size: 15px;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.data-table td {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n}\n.data-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.font-mono {\n  font-family: monospace;\n  font-size: 13px;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.text-secondary {\n  color: var(--text-muted);\n}\n.badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-ristourne {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.btn-icon {\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.btn-icon .material-icons {\n  font-size: 18px;\n}\n.btn-icon.btn-edit {\n  color: #0d6efd;\n}\n.btn-icon.btn-edit:hover {\n  background: #e7f1ff;\n}\n.btn-icon.btn-delete {\n  color: var(--danger);\n}\n.btn-icon.btn-delete:hover {\n  background: var(--danger-bg);\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  width: 780px;\n  max-width: 95vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header h2 {\n  font-size: 17px;\n  font-weight: 600;\n  margin: 0;\n  color: var(--text-primary);\n}\n.btn-close {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-close:hover {\n  background: var(--bg-hover);\n}\n.btn-close .material-icons {\n  font-size: 20px;\n}\n.modal-alert {\n  margin: 12px 24px 0;\n}\n.modal-body {\n  padding: 24px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 18px 24px;\n  border-top: 1px solid var(--border);\n}\n.section-title {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--accent);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 14px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid var(--border);\n}\n.mt-16 {\n  margin-top: 24px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid .form-full {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group .required {\n  color: var(--danger);\n}\n.form-group .form-hint {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.form-control:focus {\n  border-color: var(--accent);\n}\n.btn-add-inline {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  float: right;\n  background: none;\n  border: 1px dashed #017E84;\n  color: var(--accent);\n  border-radius: 6px;\n  padding: 3px 10px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-inline .material-icons {\n  font-size: 14px;\n}\n.btn-add-inline:hover {\n  background: rgba(1, 126, 132, 0.08);\n}\n.inline-table-wrap {\n  overflow-x: auto;\n}\n.inline-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n  margin-top: 4px;\n}\n.inline-table th {\n  padding: 7px 8px;\n  background: var(--bg-elevated);\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  border-bottom: 2px solid var(--border);\n  text-align: left;\n}\n.inline-table td {\n  padding: 4px 4px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.inline-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.inline-table .ar {\n  text-align: right;\n}\n.inline-table .ttc-val {\n  font-family: monospace;\n  font-weight: 600;\n  color: var(--accent);\n  font-size: 13px;\n}\n.inp-cell {\n  width: 100%;\n  padding: 4px 6px;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  box-sizing: border-box;\n}\n.inp-cell:hover {\n  border-color: var(--border);\n  background: var(--bg-surface);\n}\n.inp-cell:focus {\n  border-color: var(--accent);\n  background: var(--bg-surface);\n}\n.inp-cell.ar {\n  text-align: right;\n}\n.btn-del-row {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--border);\n  padding: 2px;\n  border-radius: 3px;\n}\n.btn-del-row .material-icons {\n  font-size: 15px;\n}\n.btn-del-row:hover {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.badge-exempt-guiness {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 4px;\n  background: #e8f5e9;\n  color: #2e7d32;\n  border: 1px solid #a5d6a7;\n}\n.badge-taxed-guiness {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 4px;\n  background: var(--warning-bg);\n  color: var(--warning);\n  border: 1px solid #ffc107;\n}\n.toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  padding: 10px 14px;\n  background: var(--bg-hover);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: border-color 0.2s, background 0.2s;\n}\n.toggle-label.toggle-on {\n  background: rgba(34, 197, 94, 0.08);\n  border-color: #a5d6a7;\n}\n.toggle-slider {\n  position: relative;\n  width: 40px;\n  height: 22px;\n  background: #dee2e6;\n  border-radius: 11px;\n  flex-shrink: 0;\n  transition: background 0.2s;\n}\n.toggle-slider::after {\n  content: "";\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: var(--bg-surface);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  transition: transform 0.2s;\n}\n.toggle-slider.active {\n  background: #2e7d32;\n}\n.toggle-slider.active::after {\n  transform: translateX(18px);\n}\n.toggle-text {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.toggle-text .toggle-hint {\n  color: var(--text-muted);\n  font-weight: 400;\n  font-size: 12px;\n}\n/*# sourceMappingURL=client-list.component.css.map */\n'] }]
  }], () => [{ type: SalesService }, { type: RistourneService }, { type: StockService }, { type: AuthService }], { importInput: [{
    type: ViewChild,
    args: ["importInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientListComponent, { className: "ClientListComponent", filePath: "app/modules/sales/components/clients/client-list.component.ts", lineNumber: 29 });
})();
export {
  ClientListComponent
};
//# sourceMappingURL=chunk-YUGLZGR4.js.map
