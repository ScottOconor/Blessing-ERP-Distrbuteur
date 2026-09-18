import {
  RemiseService
} from "./chunk-RVH7W7CX.js";
import {
  StockService
} from "./chunk-LIGNVDFD.js";
import {
  NotificationService
} from "./chunk-LUF5JDG2.js";
import {
  downloadExcelTemplate,
  parseExcelFile
} from "./chunk-RZFOQ7J2.js";
import "./chunk-ZJANBOXO.js";
import {
  Router
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
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  HttpClient,
  HttpParams,
  NgClass,
  ViewChild,
  environment,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵarrowFunction,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
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
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
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

// src/app/modules/purchases/components/remises/remise-list.component.ts
var _c0 = ["importInput"];
var _forTrack0 = ($index, $item) => $item.id;
var arrowFn0 = (ctx, view) => (q) => {
  const qg_r7 = \u0275\u0275restoreView(view).$implicit;
  return \u0275\u0275resetView(q.q === qg_r7.quarter);
};
var _forTrack1 = ($index, $item) => $item.partnerId;
function RemiseListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275elementStart(1, "span", 12);
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Mod\xE8le Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 16);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.triggerImport());
    });
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 17);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_13_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewRms());
    });
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Nouvelle remise ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.importLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.importLoading ? "Lecture..." : "Importer Excel", " ");
  }
}
function RemiseListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openGuinessModal());
    });
    \u0275\u0275elementStart(1, "span", 12);
    \u0275\u0275text(2, "autorenew");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " G\xE9n\xE9rer remises Guinness ");
    \u0275\u0275elementEnd();
  }
}
function RemiseListComponent_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 21);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Chargement\u2026");
    \u0275\u0275elementEnd()();
  }
}
function RemiseListComponent_Conditional_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 12);
    \u0275\u0275text(2, "discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune remise configur\xE9e.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_28_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openNewRms());
    });
    \u0275\u0275elementStart(6, "span", 12);
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Ajouter");
    \u0275\u0275elementEnd()();
  }
}
function RemiseListComponent_Conditional_28_Conditional_3_For_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "Brasserie");
    \u0275\u0275elementEnd();
  }
}
function RemiseListComponent_Conditional_28_Conditional_3_For_16_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "Guinness");
    \u0275\u0275elementEnd();
  }
}
function RemiseListComponent_Conditional_28_Conditional_3_For_16_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "Autre");
    \u0275\u0275elementEnd();
  }
}
function RemiseListComponent_Conditional_28_Conditional_3_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 24);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 25);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275conditionalCreate(12, RemiseListComponent_Conditional_28_Conditional_3_For_16_Conditional_12_Template, 2, 0, "span", 26)(13, RemiseListComponent_Conditional_28_Conditional_3_For_16_Conditional_13_Template, 2, 0, "span", 27)(14, RemiseListComponent_Conditional_28_Conditional_3_For_16_Conditional_14_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 29)(16, "button", 30);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_28_Conditional_3_For_16_Template_button_click_16_listener() {
      const r_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editRms(r_r6));
    });
    \u0275\u0275elementStart(17, "span", 12);
    \u0275\u0275text(18, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 31);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_28_Conditional_3_For_16_Template_button_click_19_listener() {
      const r_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteRms(r_r6.id));
    });
    \u0275\u0275elementStart(20, "span", 12);
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 5, r_r6.montantFixe, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 8, r_r6.montantTTCUnitaire, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(r_r6.typeRemise === "brasserie" ? 12 : r_r6.typeRemise === "guinness" ? 13 : 14);
  }
}
function RemiseListComponent_Conditional_28_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 20)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 22);
    \u0275\u0275text(8, "Montant HT / unit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 22);
    \u0275\u0275text(10, "TTC / unit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, RemiseListComponent_Conditional_28_Conditional_3_For_16_Template, 22, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.remises);
  }
}
function RemiseListComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, RemiseListComponent_Conditional_28_Conditional_1_Template, 5, 0, "div", 18)(2, RemiseListComponent_Conditional_28_Conditional_2_Template, 9, 0, "div", 19)(3, RemiseListComponent_Conditional_28_Conditional_3_Template, 17, 0, "table", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadingRms ? 1 : ctx_r1.remises.length === 0 ? 2 : 3);
  }
}
function RemiseListComponent_Conditional_29_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 12);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.quarterMsg);
  }
}
function RemiseListComponent_Conditional_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 12);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.quarterError);
  }
}
function RemiseListComponent_Conditional_29_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 18)(2, "span", 21);
    \u0275\u0275text(3, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Chargement\u2026");
    \u0275\u0275elementEnd()()();
  }
}
function RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qg_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", qg_r10.partners.length, " fournisseur(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(4, 2, qg_r10.totalAmount, "1.0-2"), " FCFA");
  }
}
function RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const qg_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.generateQuarter(qg_r10.quarter));
    });
    \u0275\u0275elementStart(1, "span", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const qKey_r9 = \u0275\u0275readContextLet(0);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.generatingQuarter === qKey_r9);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.generatingQuarter === qKey_r9 ? "hourglass_empty" : "autorenew", " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.generatingQuarter === qKey_r9 ? "G\xE9n\xE9ration\u2026" : "G\xE9n\xE9rer remises", " ");
  }
}
function RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1, "Aucun r\xE8glement pour ce trimestre.");
    \u0275\u0275elementEnd();
  }
}
function RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_11_Template_span_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "button", 56);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const pg_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.confirmAllBrasserie(pg_r15.paiements));
    });
    \u0275\u0275elementStart(2, "span", 57);
    \u0275\u0275text(3, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Confirmer tout ");
    \u0275\u0275elementEnd()();
  }
}
function RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_12_For_17_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_12_For_17_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const p_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.confirmBrasseriePmt(p_r17.id));
    });
    \u0275\u0275text(1, "Confirmer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_12_For_17_Conditional_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r16);
      const p_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.cancelBrasseriePmt(p_r17.id));
    });
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
  }
}
function RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_12_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 60);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 61);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 29);
    \u0275\u0275conditionalCreate(15, RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_12_For_17_Conditional_15_Template, 5, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r17.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r17.invoiceName ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 7, p_r17.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 10, p_r17.totalAmount, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.stateBadge(p_r17.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(p_r17.state));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r17.state === "draft" ? 15 : -1);
  }
}
function RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "table", 58)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Facture source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 59);
    \u0275\u0275text(11, "Montant TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\xC9tat");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_12_For_17_Template, 16, 13, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pg_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(16);
    \u0275\u0275repeater(pg_r15.paiements);
  }
}
function RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 48);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const partnerKey_r13 = \u0275\u0275readContextLet(0);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.toggleBrasseriePartner(partnerKey_r13));
    });
    \u0275\u0275elementStart(2, "span", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 51);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 52);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_11_Template, 5, 0, "span", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_12_Template, 18, 0, "div", 54);
  }
  if (rf & 2) {
    const pg_r15 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const qKey_r9 = \u0275\u0275readContextLet(0);
    const ctx_r1 = \u0275\u0275nextContext(3);
    const partnerKey_r18 = \u0275\u0275storeLet(qKey_r9 + "-" + pg_r15.partnerId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.expandedBrasserieKeys.has(partnerKey_r18) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pg_r15.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", pg_r15.paiements.length, " r\xE8glement(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 7, pg_r15.totalAmount, "1.0-2"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasDrafts(pg_r15.paiements) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.expandedBrasserieKeys.has(partnerKey_r18) ? 12 : -1);
  }
}
function RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Template, 13, 10, null, null, _forTrack1);
  }
  if (rf & 2) {
    const qg_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(qg_r10.partners);
  }
}
function RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275conditionalCreate(1, RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_1_Template, 2, 0, "div", 47)(2, RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qg_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(qg_r10.partners.length === 0 ? 1 : 2);
  }
}
function RemiseListComponent_Conditional_29_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 34)(2, "div", 35);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_29_Conditional_3_For_1_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const qKey_r9 = \u0275\u0275readContextLet(0);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleQuarter(qKey_r9));
    });
    \u0275\u0275elementStart(3, "div", 36)(4, "span", 37);
    \u0275\u0275text(5, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 38);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_10_Template, 5, 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 39);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_29_Conditional_3_For_1_Template_div_click_11_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(12, RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_12_Template, 4, 3, "button", 40);
    \u0275\u0275elementStart(13, "span", 41);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(15, RemiseListComponent_Conditional_29_Conditional_3_For_1_Conditional_15_Template, 3, 1, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    const qg_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    const qKey_r19 = \u0275\u0275storeLet("Q" + qg_r10.quarter + "-" + qg_r10.year);
    const qLabel_r20 = ((tmp_14_0 = ctx_r1.QUARTERS.find(\u0275\u0275arrowFunction(8, arrowFn0, ctx))) == null ? null : tmp_14_0.label) ?? "";
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("Trimestre ", qg_r10.quarter, " ", qg_r10.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(qLabel_r20);
    \u0275\u0275advance();
    \u0275\u0275conditional(qg_r10.partners.length > 0 ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(qg_r10.year === ctx_r1.currentYear ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.expandedQuarters.has(qKey_r19) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.expandedQuarters.has(qKey_r19) ? 15 : -1);
  }
}
function RemiseListComponent_Conditional_29_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, RemiseListComponent_Conditional_29_Conditional_3_For_1_Template, 16, 9, "div", 34, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.brasseriesByQuarter);
  }
}
function RemiseListComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RemiseListComponent_Conditional_29_Conditional_0_Template, 4, 1, "div", 32);
    \u0275\u0275conditionalCreate(1, RemiseListComponent_Conditional_29_Conditional_1_Template, 4, 1, "div", 33);
    \u0275\u0275conditionalCreate(2, RemiseListComponent_Conditional_29_Conditional_2_Template, 6, 0, "div", 13)(3, RemiseListComponent_Conditional_29_Conditional_3_Template, 2, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.quarterMsg ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.quarterError ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadingBrasseries ? 2 : 3);
  }
}
function RemiseListComponent_Conditional_30_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 12);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.guinessMsg);
  }
}
function RemiseListComponent_Conditional_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 12);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.guinessError);
  }
}
function RemiseListComponent_Conditional_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 18)(2, "span", 21);
    \u0275\u0275text(3, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Chargement\u2026");
    \u0275\u0275elementEnd()()();
  }
}
function RemiseListComponent_Conditional_30_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 19)(2, "span", 12);
    \u0275\u0275text(3, "sports_bar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, 'Aucun r\xE8glement Guinness. Utilisez le bouton "G\xE9n\xE9rer remises Guinness".');
    \u0275\u0275elementEnd()()();
  }
}
function RemiseListComponent_Conditional_30_Conditional_4_For_13_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_30_Conditional_4_For_13_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const pg_r22 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmAllGuiness(pg_r22.paiements));
    });
    \u0275\u0275elementStart(1, "span", 57);
    \u0275\u0275text(2, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Confirmer tout ");
    \u0275\u0275elementEnd();
  }
}
function RemiseListComponent_Conditional_30_Conditional_4_For_13_Conditional_13_For_18_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_30_Conditional_4_For_13_Conditional_13_For_18_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const p_r25 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.confirmGuinessPmt(p_r25.id));
    });
    \u0275\u0275text(1, "Confirmer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_30_Conditional_4_For_13_Conditional_13_For_18_Conditional_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r24);
      const p_r25 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.cancelGuinessPmt(p_r25.id));
    });
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
  }
}
function RemiseListComponent_Conditional_30_Conditional_4_For_13_Conditional_13_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 60);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 61);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 29);
    \u0275\u0275conditionalCreate(15, RemiseListComponent_Conditional_30_Conditional_4_For_13_Conditional_13_For_18_Conditional_15_Template, 5, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r25 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r25.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r25.invoiceName ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 7, p_r25.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 10, p_r25.totalAmount, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.stateBadge(p_r25.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(p_r25.state));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r25.state === "draft" ? 15 : -1);
  }
}
function RemiseListComponent_Conditional_30_Conditional_4_For_13_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 69)(2, "table", 70)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Facture source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 59);
    \u0275\u0275text(12, "Montant TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "\xC9tat");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, RemiseListComponent_Conditional_30_Conditional_4_For_13_Conditional_13_For_18_Template, 16, 13, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const pg_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(17);
    \u0275\u0275repeater(pg_r22.paiements);
  }
}
function RemiseListComponent_Conditional_30_Conditional_4_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 64);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_30_Conditional_4_For_13_Template_tr_click_0_listener() {
      const pg_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleGuinessPartner(pg_r22.partnerId));
    });
    \u0275\u0275elementStart(1, "td")(2, "span", 65);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 66);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 67);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_30_Conditional_4_For_13_Template_td_click_11_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(12, RemiseListComponent_Conditional_30_Conditional_4_For_13_Conditional_12_Template, 4, 0, "button", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, RemiseListComponent_Conditional_30_Conditional_4_For_13_Conditional_13_Template, 19, 0, "tr");
  }
  if (rf & 2) {
    const pg_r22 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.expandedGuinessKeys.has(pg_r22.partnerId) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pg_r22.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 6, pg_r22.totalAmount, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pg_r22.paiements.length);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasDrafts(pg_r22.paiements) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.expandedGuinessKeys.has(pg_r22.partnerId) ? 13 : -1);
  }
}
function RemiseListComponent_Conditional_30_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "table", 20)(2, "thead")(3, "tr");
    \u0275\u0275element(4, "th", 63);
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 22);
    \u0275\u0275text(8, "Total (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 22);
    \u0275\u0275text(10, "R\xE8glements");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, RemiseListComponent_Conditional_30_Conditional_4_For_13_Template, 14, 9, null, null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.guinessByFournisseur);
  }
}
function RemiseListComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RemiseListComponent_Conditional_30_Conditional_0_Template, 4, 1, "div", 32);
    \u0275\u0275conditionalCreate(1, RemiseListComponent_Conditional_30_Conditional_1_Template, 4, 1, "div", 33);
    \u0275\u0275conditionalCreate(2, RemiseListComponent_Conditional_30_Conditional_2_Template, 6, 0, "div", 13)(3, RemiseListComponent_Conditional_30_Conditional_3_Template, 6, 0, "div", 13)(4, RemiseListComponent_Conditional_30_Conditional_4_Template, 14, 0, "div", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.guinessMsg ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.guinessError && !ctx_r1.showGuinessModal ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadingGuiness ? 2 : ctx_r1.guinessByFournisseur.length === 0 ? 3 : 4);
  }
}
function RemiseListComponent_Conditional_31_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 12);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.rmsError);
  }
}
function RemiseListComponent_Conditional_31_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r27 = ctx.$implicit;
    \u0275\u0275property("value", s_r27.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r27.name);
  }
}
function RemiseListComponent_Conditional_31_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r28 = ctx.$implicit;
    \u0275\u0275property("value", cat_r28.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r28.name);
  }
}
function RemiseListComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275listener("click.self", function RemiseListComponent_Conditional_31_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRmsModal = false);
    });
    \u0275\u0275elementStart(1, "div", 72)(2, "div", 73)(3, "span", 12);
    \u0275\u0275text(4, "discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 74);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_31_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRmsModal = false);
    });
    \u0275\u0275elementStart(8, "span", 12);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, RemiseListComponent_Conditional_31_Conditional_10_Template, 4, 1, "div", 75);
    \u0275\u0275elementStart(11, "div", 76)(12, "div", 77)(13, "div", 78)(14, "label");
    \u0275\u0275text(15, "Fournisseur ");
    \u0275\u0275elementStart(16, "span", 79);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 80);
    \u0275\u0275twoWayListener("ngModelChange", function RemiseListComponent_Conditional_31_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rmsForm.partnerId, $event) || (ctx_r1.rmsForm.partnerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 81);
    \u0275\u0275text(20, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, RemiseListComponent_Conditional_31_For_22_Template, 2, 2, "option", 81, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 78)(24, "label");
    \u0275\u0275text(25, "Cat\xE9gorie ");
    \u0275\u0275elementStart(26, "span", 79);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "select", 80);
    \u0275\u0275twoWayListener("ngModelChange", function RemiseListComponent_Conditional_31_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rmsForm.categoryId, $event) || (ctx_r1.rmsForm.categoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "option", 81);
    \u0275\u0275text(30, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(31, RemiseListComponent_Conditional_31_For_32_Template, 2, 2, "option", 81, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 78)(34, "label");
    \u0275\u0275text(35, "Montant HT / unit\xE9 (FCFA) ");
    \u0275\u0275elementStart(36, "span", 79);
    \u0275\u0275text(37, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function RemiseListComponent_Conditional_31_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rmsForm.montantFixe, $event) || (ctx_r1.rmsForm.montantFixe = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 78)(40, "label");
    \u0275\u0275text(41, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 80);
    \u0275\u0275twoWayListener("ngModelChange", function RemiseListComponent_Conditional_31_Template_select_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rmsForm.typeRemise, $event) || (ctx_r1.rmsForm.typeRemise = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(43, "option", 83);
    \u0275\u0275text(44, "Brasserie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 84);
    \u0275\u0275text(46, "Guinness");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(47, "div", 85)(48, "button", 86);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_31_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRmsModal = false);
    });
    \u0275\u0275text(49, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 87);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_31_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveRms());
    });
    \u0275\u0275elementStart(51, "span", 12);
    \u0275\u0275text(52, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " Enregistrer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.editingRms ? "Modifier remise" : "Nouvelle remise");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.rmsError ? 10 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rmsForm.partnerId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.suppliers);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rmsForm.categoryId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rmsForm.montantFixe);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rmsForm.typeRemise);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r1.savingRms);
  }
}
function RemiseListComponent_Conditional_32_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 12);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.guinessError);
  }
}
function RemiseListComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275listener("click.self", function RemiseListComponent_Conditional_32_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showGuinessModal = false);
    });
    \u0275\u0275elementStart(1, "div", 88)(2, "div", 73)(3, "span", 12);
    \u0275\u0275text(4, "sports_bar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "G\xE9n\xE9rer remises Guinness");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 74);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_32_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showGuinessModal = false);
    });
    \u0275\u0275elementStart(8, "span", 12);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, RemiseListComponent_Conditional_32_Conditional_10_Template, 4, 1, "div", 75);
    \u0275\u0275elementStart(11, "div", 76)(12, "p", 89);
    \u0275\u0275text(13, " S\xE9lectionnez la p\xE9riode sur laquelle g\xE9n\xE9rer les r\xE8glements Guinness depuis toutes les factures d'achats valid\xE9es. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 77)(15, "div", 78)(16, "label");
    \u0275\u0275text(17, "Date de d\xE9but ");
    \u0275\u0275elementStart(18, "span", 79);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function RemiseListComponent_Conditional_32_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.guinessDateStart, $event) || (ctx_r1.guinessDateStart = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 78)(22, "label");
    \u0275\u0275text(23, "Date de fin ");
    \u0275\u0275elementStart(24, "span", 79);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function RemiseListComponent_Conditional_32_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.guinessDateEnd, $event) || (ctx_r1.guinessDateEnd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 85)(28, "button", 86);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_32_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showGuinessModal = false);
    });
    \u0275\u0275text(29, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 87);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_32_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateGuiness());
    });
    \u0275\u0275elementStart(31, "span", 12);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r1.guinessError ? 10 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.guinessDateStart);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.guinessDateEnd);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.generatingGuiness);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.generatingGuiness ? "hourglass_empty" : "autorenew");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.generatingGuiness ? "G\xE9n\xE9ration\u2026" : "G\xE9n\xE9rer", " ");
  }
}
function RemiseListComponent_Conditional_33_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275element(1, "div", 97);
    \u0275\u0275elementStart(2, "p", 98);
    \u0275\u0275text(3, "Importation en cours\u2026");
    \u0275\u0275elementEnd()();
  }
}
function RemiseListComponent_Conditional_33_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 99);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r31 = ctx.$implicit;
    const \u0275$index_684_r32 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_684_r32 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r31["Fournisseur"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r31["Cat\xE9gorie d'article"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r31["Type (brasserie/guinness)"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r31["Montant de la remise"] || "\u2014");
  }
}
function RemiseListComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275elementStart(1, "div", 92);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_33_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(2, RemiseListComponent_Conditional_33_Conditional_2_Template, 4, 0, "div", 93);
    \u0275\u0275elementStart(3, "div", 73)(4, "span", 12);
    \u0275\u0275text(5, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 74);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_33_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 94)(12, "table", 95)(13, "thead")(14, "tr")(15, "th");
    \u0275\u0275text(16, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 22);
    \u0275\u0275text(24, "Montant");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, RemiseListComponent_Conditional_33_For_27_Template, 11, 5, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 85)(29, "button", 86);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_33_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275text(30, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 96);
    \u0275\u0275listener("click", function RemiseListComponent_Conditional_33_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmImport());
    });
    \u0275\u0275elementStart(32, "span", 12);
    \u0275\u0275text(33, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.importLoading ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Aper\xE7u import remises (", ctx_r1.importRows.length, " ligne(s))");
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.importRows);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Confirmer (", ctx_r1.importRows.length, " remise(s)) ");
  }
}
var RMS_HEADERS = ["Fournisseur", "Cat\xE9gorie d'article", "Type (brasserie/guinness)", "Montant de la remise", "Actif"];
var RMS_SAMPLE = ["Brasseries du Cameroun", "Bi\xE8res", "brasserie", "500", "Oui"];
var RemiseListComponent = class _RemiseListComponent {
  constructor(svc, stockSvc, auth, http, router, notificationService) {
    this.svc = svc;
    this.stockSvc = stockSvc;
    this.auth = auth;
    this.http = http;
    this.router = router;
    this.notificationService = notificationService;
    this.showImportModal = false;
    this.importRows = [];
    this.importLoading = false;
    this.remises = [];
    this.suppliers = [];
    this.categories = [];
    this.loadingRms = false;
    this.showRmsModal = false;
    this.editingRms = null;
    this.savingRms = false;
    this.rmsForm = this.emptyRms();
    this.rmsError = "";
    this.activeTab = "config";
    this.brasseriesPaiements = [];
    this.loadingBrasseries = false;
    this.generatingQuarter = null;
    this.quarterMsg = "";
    this.quarterError = "";
    this.expandedBrasserieKeys = /* @__PURE__ */ new Set();
    this.expandedQuarters = /* @__PURE__ */ new Set();
    this.guinessPaiements = [];
    this.loadingGuiness = false;
    this.showGuinessModal = false;
    this.guinessDateStart = "";
    this.guinessDateEnd = "";
    this.generatingGuiness = false;
    this.guinessMsg = "";
    this.guinessError = "";
    this.expandedGuinessKeys = /* @__PURE__ */ new Set();
    this.QUARTERS = [
      { q: 1, label: "T1 (Jan\u2013Mar)" },
      { q: 2, label: "T2 (Avr\u2013Jun)" },
      { q: 3, label: "T3 (Jul\u2013Sep)" },
      { q: 4, label: "T4 (Oct\u2013D\xE9c)" }
    ];
    this.apiBase = `${environment.apiUrl}/api`;
  }
  ngOnInit() {
    this.http.get(`${this.apiBase}/accounting/partners`, {
      params: new HttpParams().set("companyId", this.companyId).set("type", "supplier")
    }).subscribe((p) => this.suppliers = p);
    this.stockSvc.getCategories(this.companyId).subscribe((cats) => this.categories = cats);
    this.loadRemises();
  }
  get companyId() {
    return this.auth.getCompanyId();
  }
  get currentYear() {
    return (/* @__PURE__ */ new Date()).getFullYear();
  }
  // ===== Config =====
  loadRemises() {
    this.loadingRms = true;
    this.svc.getAll(this.companyId).subscribe({
      next: (r) => {
        this.remises = r;
        this.loadingRms = false;
      },
      error: () => this.loadingRms = false
    });
  }
  openNewRms() {
    this.editingRms = null;
    this.rmsForm = this.emptyRms();
    this.rmsError = "";
    this.showRmsModal = true;
  }
  editRms(r) {
    this.editingRms = r;
    this.rmsForm = __spreadValues({}, r);
    this.rmsError = "";
    this.showRmsModal = true;
  }
  saveRms() {
    if (!this.rmsForm.partnerId || !this.rmsForm.categoryId || !this.rmsForm.montantFixe) {
      this.rmsError = "Fournisseur, cat\xE9gorie et montant sont requis.";
      return;
    }
    this.savingRms = true;
    this.rmsError = "";
    this.svc.save(__spreadProps(__spreadValues({}, this.rmsForm), { companyId: this.companyId })).subscribe({
      next: () => {
        this.showRmsModal = false;
        this.loadRemises();
        this.savingRms = false;
      },
      error: () => {
        this.rmsError = "Erreur lors de la sauvegarde.";
        this.savingRms = false;
      }
    });
  }
  deleteRms(id) {
    if (!confirm("Supprimer cette remise ?"))
      return;
    this.svc.delete(id).subscribe({
      next: () => this.loadRemises(),
      error: (err) => this.notificationService.notify(err?.error?.message ?? "Erreur lors de la suppression.", "error")
    });
  }
  // ===== Brasseries tab =====
  loadBrasseries() {
    this.loadingBrasseries = true;
    this.svc.getAllPaiements(this.companyId, "brasserie").subscribe({
      next: (p) => {
        this.brasseriesPaiements = p;
        this.loadingBrasseries = false;
      },
      error: () => this.loadingBrasseries = false
    });
  }
  get brasseriesByQuarter() {
    const grouped = this.groupByQuarter(this.brasseriesPaiements);
    for (const qDef of this.QUARTERS) {
      if (!grouped.find((g) => g.quarter === qDef.q && g.year === this.currentYear)) {
        grouped.push({ quarter: qDef.q, year: this.currentYear, label: `T${qDef.q} ${this.currentYear}`, totalAmount: 0, partners: [] });
      }
    }
    return grouped.sort((a, b) => b.year - a.year || b.quarter - a.quarter);
  }
  generateQuarter(q) {
    const key = `Q${q}-${this.currentYear}`;
    this.generatingQuarter = key;
    this.quarterMsg = "";
    this.quarterError = "";
    this.svc.generateByQuarter(q, this.currentYear, this.companyId).subscribe({
      next: (res) => {
        this.generatingQuarter = null;
        this.quarterMsg = `T${q} : ${res.generated} r\xE8glement(s) cr\xE9\xE9(s), ${res.skipped} ignor\xE9(s).`;
        this.loadBrasseries();
      },
      error: (err) => {
        this.generatingQuarter = null;
        this.quarterError = err?.error?.message ?? "Erreur lors de la g\xE9n\xE9ration.";
      }
    });
  }
  toggleQuarter(key) {
    this.expandedQuarters.has(key) ? this.expandedQuarters.delete(key) : this.expandedQuarters.add(key);
  }
  toggleBrasseriePartner(key) {
    this.expandedBrasserieKeys.has(key) ? this.expandedBrasserieKeys.delete(key) : this.expandedBrasserieKeys.add(key);
  }
  confirmBrasseriePmt(id) {
    if (!confirm("Confirmer ce r\xE8glement ?"))
      return;
    this.quarterError = "";
    this.svc.confirmPaiement(id).subscribe({
      next: () => this.loadBrasseries(),
      error: (err) => this.quarterError = err?.error?.message ?? "Erreur lors de la confirmation."
    });
  }
  cancelBrasseriePmt(id) {
    if (!confirm("Annuler ce r\xE8glement ?"))
      return;
    this.quarterError = "";
    this.svc.cancelPaiement(id).subscribe({
      next: () => this.loadBrasseries(),
      error: (err) => this.quarterError = err?.error?.message ?? "Erreur lors de l'annulation."
    });
  }
  confirmAllBrasserie(paiements) {
    const drafts = paiements.filter((p) => p.state === "draft");
    if (drafts.length === 0)
      return;
    if (!confirm(`Confirmer les ${drafts.length} r\xE8glement(s) en brouillon ?`))
      return;
    this.quarterError = "";
    let done = 0, failed = 0, lastError = "";
    for (const p of drafts) {
      this.svc.confirmPaiement(p.id).subscribe({
        next: () => {
          done++;
          if (done + failed === drafts.length)
            this.finishConfirmAllBrasserie(done, failed, lastError);
        },
        error: (err) => {
          failed++;
          lastError = err?.error?.message || err?.message || "Erreur inconnue";
          if (done + failed === drafts.length)
            this.finishConfirmAllBrasserie(done, failed, lastError);
        }
      });
    }
  }
  finishConfirmAllBrasserie(done, failed, lastError) {
    this.quarterError = failed > 0 ? `${done} confirm\xE9(s), ${failed} \xE9chec(s) \u2014 ${lastError}` : "";
    this.loadBrasseries();
  }
  // ===== Guinness tab =====
  loadGuiness() {
    this.loadingGuiness = true;
    this.svc.getAllPaiements(this.companyId, "guinness").subscribe({
      next: (p) => {
        this.guinessPaiements = p;
        this.loadingGuiness = false;
      },
      error: () => this.loadingGuiness = false
    });
  }
  get guinessByFournisseur() {
    return this.groupByPartner(this.guinessPaiements);
  }
  openGuinessModal() {
    this.guinessDateStart = "";
    this.guinessDateEnd = "";
    this.guinessMsg = "";
    this.guinessError = "";
    this.showGuinessModal = true;
  }
  generateGuiness() {
    if (!this.guinessDateStart || !this.guinessDateEnd) {
      this.guinessError = "Veuillez saisir une date de d\xE9but et de fin.";
      return;
    }
    this.generatingGuiness = true;
    this.guinessError = "";
    this.svc.generateByPeriod(this.guinessDateStart, this.guinessDateEnd, this.companyId).subscribe({
      next: (res) => {
        this.generatingGuiness = false;
        this.guinessMsg = `${res.generated} r\xE8glement(s) cr\xE9\xE9(s), ${res.skipped} ignor\xE9(s) sur ${res.total} facture(s).`;
        this.showGuinessModal = false;
        this.loadGuiness();
      },
      error: (err) => {
        this.generatingGuiness = false;
        this.guinessError = err?.error?.message ?? "Erreur lors de la g\xE9n\xE9ration.";
      }
    });
  }
  toggleGuinessPartner(pid) {
    this.expandedGuinessKeys.has(pid) ? this.expandedGuinessKeys.delete(pid) : this.expandedGuinessKeys.add(pid);
  }
  confirmGuinessPmt(id) {
    if (!confirm("Confirmer ce r\xE8glement ?"))
      return;
    this.guinessError = "";
    this.svc.confirmPaiement(id).subscribe({
      next: () => this.loadGuiness(),
      error: (err) => this.guinessError = err?.error?.message ?? "Erreur lors de la confirmation."
    });
  }
  cancelGuinessPmt(id) {
    if (!confirm("Annuler ce r\xE8glement ?"))
      return;
    this.guinessError = "";
    this.svc.cancelPaiement(id).subscribe({
      next: () => this.loadGuiness(),
      error: (err) => this.guinessError = err?.error?.message ?? "Erreur lors de l'annulation."
    });
  }
  confirmAllGuiness(paiements) {
    const drafts = paiements.filter((p) => p.state === "draft");
    if (drafts.length === 0)
      return;
    if (!confirm(`Confirmer les ${drafts.length} r\xE8glement(s) en brouillon ?`))
      return;
    this.guinessError = "";
    let done = 0, failed = 0, lastError = "";
    for (const p of drafts) {
      this.svc.confirmPaiement(p.id).subscribe({
        next: () => {
          done++;
          if (done + failed === drafts.length)
            this.finishConfirmAllGuiness(done, failed, lastError);
        },
        error: (err) => {
          failed++;
          lastError = err?.error?.message || err?.message || "Erreur inconnue";
          if (done + failed === drafts.length)
            this.finishConfirmAllGuiness(done, failed, lastError);
        }
      });
    }
  }
  finishConfirmAllGuiness(done, failed, lastError) {
    this.guinessError = failed > 0 ? `${done} confirm\xE9(s), ${failed} \xE9chec(s) \u2014 ${lastError}` : "";
    this.loadGuiness();
  }
  // ===== Helpers =====
  groupByQuarter(paiements) {
    const map = /* @__PURE__ */ new Map();
    for (const p of paiements) {
      if (!p.date)
        continue;
      const d = new Date(p.date);
      const q = Math.floor(d.getMonth() / 3) + 1;
      const y = d.getFullYear();
      const key = `Q${q}-${y}`;
      if (!map.has(key)) {
        map.set(key, { quarter: q, year: y, label: `T${q} ${y}`, totalAmount: 0, partners: [] });
      }
      const qg = map.get(key);
      let pg = qg.partners.find((x) => x.partnerId === p.partnerId);
      if (!pg) {
        pg = { partnerId: p.partnerId, partnerName: p.partnerName, totalAmount: 0, paiements: [] };
        qg.partners.push(pg);
      }
      pg.paiements.push(p);
      pg.totalAmount += p.totalAmount ?? 0;
      qg.totalAmount += p.totalAmount ?? 0;
    }
    return Array.from(map.values()).sort((a, b) => b.year - a.year || b.quarter - a.quarter);
  }
  groupByPartner(paiements) {
    const map = /* @__PURE__ */ new Map();
    for (const p of paiements) {
      if (!map.has(p.partnerId)) {
        map.set(p.partnerId, { partnerId: p.partnerId, partnerName: p.partnerName, totalAmount: 0, paiements: [] });
      }
      const pg = map.get(p.partnerId);
      pg.paiements.push(p);
      pg.totalAmount += p.totalAmount ?? 0;
    }
    return Array.from(map.values());
  }
  hasDrafts(paiements) {
    return paiements.some((p) => p.state === "draft");
  }
  stateBadge(state) {
    switch (state) {
      case "confirmed":
        return "badge-confirmed";
      case "done":
        return "badge-done";
      case "cancelled":
        return "badge-cancelled";
      default:
        return "badge-draft";
    }
  }
  stateLabel(state) {
    switch (state) {
      case "confirmed":
        return "Confirm\xE9";
      case "done":
        return "R\xE9gl\xE9";
      case "cancelled":
        return "Annul\xE9";
      default:
        return "Brouillon";
    }
  }
  onTabChange(tab) {
    this.activeTab = tab;
    if (tab === "brasseries" && this.brasseriesPaiements.length === 0)
      this.loadBrasseries();
    if (tab === "guinness" && this.guinessPaiements.length === 0)
      this.loadGuiness();
  }
  // ===== Import Excel =====
  downloadTemplate() {
    downloadExcelTemplate(RMS_HEADERS, RMS_SAMPLE, "modele_remises.xlsx");
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
        this.importRows = yield parseExcelFile(file);
        this.showImportModal = true;
      } catch (e) {
        alert("Impossible de lire le fichier Excel.");
      } finally {
        this.importLoading = false;
      }
    });
  }
  closeImportModal() {
    this.showImportModal = false;
    this.importRows = [];
  }
  confirmImport() {
    const rows = this.importRows.map((row) => ({
      supplierName: String(row["Fournisseur"] || "").trim(),
      categoryName: String(row["Cat\xE9gorie d'article"] || "").trim(),
      typeRemise: String(row["Type (brasserie/guinness)"] || "brasserie").trim().toLowerCase(),
      montantFixe: parseFloat(String(row["Montant de la remise"] || "0")) || 0,
      active: String(row["Actif"] || "Oui").toLowerCase() !== "non"
    })).filter((r) => r.supplierName && r.categoryName);
    if (rows.length === 0) {
      alert("Aucune ligne valide \xE0 importer.");
      return;
    }
    this.importLoading = true;
    this.http.post(`${this.apiBase}/remises/import?companyId=${this.companyId}`, rows).subscribe({
      next: (res) => {
        this.importLoading = false;
        this.closeImportModal();
        this.loadRemises();
        alert(`${res.imported} remise(s) import\xE9e(s) avec succ\xE8s.`);
      },
      error: () => {
        this.importLoading = false;
        alert("Erreur lors de l'import.");
      }
    });
  }
  emptyRms() {
    return { partnerId: 0, categoryId: 0, montantFixe: 0, typeRemise: "brasserie", companyId: this.companyId };
  }
  static {
    this.\u0275fac = function RemiseListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemiseListComponent)(\u0275\u0275directiveInject(RemiseService), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RemiseListComponent, selectors: [["app-remise-list"]], viewQuery: function RemiseListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.importInput = _t.first);
      }
    }, decls: 34, vars: 14, consts: [["importInput", ""], [1, "page-container"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change"], [1, "page-header"], [1, "header-left"], [1, "material-icons", "page-icon"], [1, "page-title"], [1, "page-subtitle"], [1, "header-right", 2, "display", "flex", "gap", "8px", "align-items", "center"], [1, "btn-new"], [1, "tabs-bar"], [1, "tab-btn", 3, "click"], [1, "material-icons"], [1, "card"], [1, "modal-overlay"], [1, "btn-outline", 3, "click"], [1, "btn-import", 3, "click", "disabled"], [1, "btn-new", 3, "click"], [1, "loading-state"], [1, "empty-state"], [1, "data-table"], [1, "material-icons", "spin"], [1, "text-right"], [1, "font-bold"], [1, "text-right", "font-mono"], [1, "text-right", "font-mono", 2, "color", "#017E84", "font-weight", "600"], [1, "badge", "badge-brasserie"], [1, "badge", "badge-guinness"], [1, "badge", "badge-ht"], [1, "actions-cell"], [1, "btn-icon", 3, "click"], [1, "btn-icon", "danger", 3, "click"], [1, "alert-success"], [1, "alert-error"], [1, "quarter-card"], [1, "quarter-header", 3, "click"], [1, "quarter-title"], [1, "material-icons", "quarter-icon"], [1, "quarter-sub"], [1, "quarter-actions", 3, "click"], [1, "btn-generate", 3, "disabled"], [1, "material-icons", "expand-icon"], [1, "quarter-body"], [1, "badge-count"], [1, "quarter-total"], [1, "btn-generate", 3, "click", "disabled"], [1, "material-icons", 2, "font-size", "16px"], [1, "empty-quarter"], [1, "partner-row", 3, "click"], [1, "material-icons", 2, "font-size", "16px", "color", "#666"], [1, "partner-name"], [1, "partner-count"], [1, "partner-total"], [1, "partner-actions"], [1, "partner-details"], [1, "partner-actions", 3, "click"], [1, "btn-confirm-all", 3, "click"], [1, "material-icons", 2, "font-size", "14px"], [1, "lines-table"], [1, "ar"], [1, "ar", "font-mono"], [1, "badge", 3, "ngClass"], [1, "btn-action", "confirm", 3, "click"], [2, "width", "32px"], [1, "group-row", 2, "cursor", "pointer", 3, "click"], [1, "material-icons", 2, "font-size", "18px", "color", "#666"], [1, "text-right", "font-mono", "font-bold", 2, "color", "#017E84"], [1, "actions-cell", 3, "click"], [1, "btn-confirm-all"], ["colspan", "5", 2, "padding", "0 0 8px 40px", "background", "#f9fafb"], [1, "lines-table", 2, "width", "100%", "margin-top", "4px"], [1, "modal-overlay", 3, "click.self"], [1, "modal-box"], [1, "modal-header"], [1, "btn-close-modal", 3, "click"], [1, "modal-error"], [1, "modal-body"], [1, "form-grid"], [1, "form-group"], [1, "req"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "number", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "brasserie"], ["value", "guinness"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [1, "modal-box", 2, "max-width", "460px"], [2, "margin-bottom", "16px", "color", "#555", "font-size", "14px"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 2, "max-width", "700px", "position", "relative", 3, "click"], [2, "position", "absolute", "inset", "0", "background", "rgba(255,255,255,0.9)", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "z-index", "10", "border-radius", "inherit"], [2, "overflow-x", "auto", "max-height", "50vh", "padding", "0 20px"], [1, "rst-table"], [1, "btn-save", 3, "click"], [1, "spinner"], [2, "margin-top", "14px", "color", "#017E84", "font-weight", "600"], [1, "text-muted"]], template: function RemiseListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "input", 2, 0);
        \u0275\u0275listener("change", function RemiseListComponent_Template_input_change_1_listener($event) {
          return ctx.onImportFileChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6, "discount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div")(8, "h1", 6);
        \u0275\u0275text(9, "Remises Fournisseurs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 7);
        \u0275\u0275text(11, "Configuration et r\xE8glements des remises fournisseurs");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275conditionalCreate(13, RemiseListComponent_Conditional_13_Template, 12, 2);
        \u0275\u0275conditionalCreate(14, RemiseListComponent_Conditional_14_Template, 4, 0, "button", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
        \u0275\u0275listener("click", function RemiseListComponent_Template_button_click_16_listener() {
          return ctx.onTabChange("config");
        });
        \u0275\u0275elementStart(17, "span", 12);
        \u0275\u0275text(18, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " Configuration ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 11);
        \u0275\u0275listener("click", function RemiseListComponent_Template_button_click_20_listener() {
          return ctx.onTabChange("brasseries");
        });
        \u0275\u0275elementStart(21, "span", 12);
        \u0275\u0275text(22, "local_bar");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Brasseries ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 11);
        \u0275\u0275listener("click", function RemiseListComponent_Template_button_click_24_listener() {
          return ctx.onTabChange("guinness");
        });
        \u0275\u0275elementStart(25, "span", 12);
        \u0275\u0275text(26, "sports_bar");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " Guinness ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(28, RemiseListComponent_Conditional_28_Template, 4, 1, "div", 13);
        \u0275\u0275conditionalCreate(29, RemiseListComponent_Conditional_29_Template, 4, 3);
        \u0275\u0275conditionalCreate(30, RemiseListComponent_Conditional_30_Template, 5, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(31, RemiseListComponent_Conditional_31_Template, 54, 9, "div", 14);
        \u0275\u0275conditionalCreate(32, RemiseListComponent_Conditional_32_Template, 34, 6, "div", 14);
        \u0275\u0275conditionalCreate(33, RemiseListComponent_Conditional_33_Template, 35, 3, "div", 14);
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.activeTab === "config" ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "guinness" ? 14 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "config");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.activeTab === "brasseries");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.activeTab === "guinness");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.activeTab === "config" ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "brasseries" ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "guinness" ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showRmsModal ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showGuinessModal ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showImportModal ? 33 : -1);
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header[_ngcontent-%COMP%]   .page-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--accent);\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 2px 0 0;\n}\n.tabs-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 0;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  background: none;\n  font-size: 14px;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.15s;\n}\n.tab-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: var(--accent);\n  border-bottom-color: var(--accent);\n  font-weight: 600;\n}\n.btn-new[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-new[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-new[_ngcontent-%COMP%]:hover {\n  background: #015f65;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-import[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--accent-light);\n  color: var(--accent);\n  border: 1px solid #b2dfdf;\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-import[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-import[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.btn-import[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.sub-tabs-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 12px;\n}\n.sub-tab-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 13px;\n  color: var(--text-muted);\n  cursor: pointer;\n  border-radius: 6px;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.sub-tab-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.sub-tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: white;\n  border-color: var(--accent);\n  font-weight: 600;\n}\n.quarter-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 12px;\n  overflow: hidden;\n}\n.quarter-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  cursor: pointer;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border-light);\n}\n.quarter-header[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.quarter-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.quarter-title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-primary);\n}\n.quarter-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--accent);\n}\n.quarter-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.quarter-total[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--accent);\n  font-family: "Roboto Mono", monospace;\n}\n.quarter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.expand-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--text-muted);\n}\n.badge-count[_ngcontent-%COMP%] {\n  background: #d0f0f0;\n  color: var(--accent);\n  border-radius: 20px;\n  padding: 2px 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.quarter-body[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.empty-quarter[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.partner-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 24px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-light);\n}\n.partner-row[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.partner-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 600;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.partner-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.partner-total[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--accent);\n  margin-left: auto;\n}\n.partner-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.partner-details[_ngcontent-%COMP%] {\n  padding: 0 24px 12px 48px;\n  background: var(--bg-elevated);\n}\n.btn-generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  padding: 7px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #015f65;\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-confirm-all[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #e8f5e9;\n  color: #2e7d32;\n  border: 1px solid #a5d6a7;\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-confirm-all[_ngcontent-%COMP%]:hover {\n  background: var(--success-bg);\n}\n.alert-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: var(--success-bg);\n  border-radius: 6px;\n  color: var(--success);\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.alert-success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: var(--danger-bg);\n  border-radius: 6px;\n  color: #991b1b;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--border);\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.rst-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.rst-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.rst-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n}\n.rst-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.ref-col[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-family: monospace;\n  font-weight: 600;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.group-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px 6px;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.danger[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-action.confirm[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.btn-action.confirm[_ngcontent-%COMP%]:hover {\n  background: var(--success-bg);\n}\n.btn-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge.badge-draft[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.badge.badge-confirmed[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-done[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge.badge-brasserie[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge.badge-guinness[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #1b5e20;\n}\n.badge.badge-ht[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  width: 100%;\n  max-width: 560px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 24px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 22px;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-close-modal[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  padding: 4px;\n}\n.btn-close-modal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.modal-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 24px 0;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-radius: 6px;\n  font-size: 13px;\n}\n.modal-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid #f0f0f0;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 22px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #015f65;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px rgba(1, 126, 132, 0.12);\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: var(--bg-elevated);\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  border-bottom: 2px solid var(--border);\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.lines-table[_ngcontent-%COMP%]   .ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.lines-table[_ngcontent-%COMP%]   .font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=remise-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemiseListComponent, [{
    type: Component,
    args: [{ selector: "app-remise-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <input #importInput type="file" accept=".xlsx,.xls" style="display:none" (change)="onImportFileChange($event)" />

  <!-- Header -->
  <div class="page-header">
    <div class="header-left">
      <span class="material-icons page-icon">discount</span>
      <div>
        <h1 class="page-title">Remises Fournisseurs</h1>
        <p class="page-subtitle">Configuration et r\xE8glements des remises fournisseurs</p>
      </div>
    </div>
    <div class="header-right" style="display:flex;gap:8px;align-items:center">
      @if (activeTab === 'config') {
        <button class="btn-outline" (click)="downloadTemplate()">
          <span class="material-icons">download</span> Mod\xE8le Excel
        </button>
        <button class="btn-import" (click)="triggerImport()" [disabled]="importLoading">
          <span class="material-icons">upload_file</span> {{ importLoading ? 'Lecture...' : 'Importer Excel' }}
        </button>
        <button class="btn-new" (click)="openNewRms()">
          <span class="material-icons">add</span> Nouvelle remise
        </button>
      }
      @if (activeTab === 'guinness') {
        <button class="btn-new" (click)="openGuinessModal()">
          <span class="material-icons">autorenew</span> G\xE9n\xE9rer remises Guinness
        </button>
      }
    </div>
  </div>

  <!-- Tabs -->
  <div class="tabs-bar">
    <button class="tab-btn" [class.active]="activeTab === 'config'" (click)="onTabChange('config')">
      <span class="material-icons">settings</span> Configuration
    </button>
    <button class="tab-btn" [class.active]="activeTab === 'brasseries'" (click)="onTabChange('brasseries')">
      <span class="material-icons">local_bar</span> Brasseries
    </button>
    <button class="tab-btn" [class.active]="activeTab === 'guinness'" (click)="onTabChange('guinness')">
      <span class="material-icons">sports_bar</span> Guinness
    </button>
  </div>

  <!-- ===================== CONFIG TAB ===================== -->
  @if (activeTab === 'config') {
    <div class="card">
      @if (loadingRms) {
        <div class="loading-state"><span class="material-icons spin">sync</span><p>Chargement\u2026</p></div>
      } @else if (remises.length === 0) {
        <div class="empty-state">
          <span class="material-icons">discount</span>
          <p>Aucune remise configur\xE9e.</p>
          <button class="btn-new" (click)="openNewRms()"><span class="material-icons">add</span> Ajouter</button>
        </div>
      } @else {
        <table class="data-table">
          <thead>
            <tr>
              <th>Fournisseur</th>
              <th>Cat\xE9gorie</th>
              <th class="text-right">Montant HT / unit\xE9</th>
              <th class="text-right">TTC / unit\xE9</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            @for (r of remises; track r.id) {
              <tr>
                <td class="font-bold">{{ r.partnerName }}</td>
                <td>{{ r.categoryName }}</td>
                <td class="text-right font-mono">{{ r.montantFixe | number:'1.0-2' }}</td>
                <td class="text-right font-mono" style="color:#017E84;font-weight:600">{{ r.montantTTCUnitaire | number:'1.0-2' }}</td>
                <td>
                  @if (r.typeRemise === 'brasserie') {
                    <span class="badge badge-brasserie">Brasserie</span>
                  } @else if (r.typeRemise === 'guinness') {
                    <span class="badge badge-guinness">Guinness</span>
                  } @else {
                    <span class="badge badge-ht">Autre</span>
                  }
                </td>
                <td class="actions-cell">
                  <button class="btn-icon" (click)="editRms(r)"><span class="material-icons">edit</span></button>
                  <button class="btn-icon danger" (click)="deleteRms(r.id!)"><span class="material-icons">delete</span></button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>
  }

  <!-- ===================== BRASSERIES TAB ===================== -->
  @if (activeTab === 'brasseries') {
    @if (quarterMsg) {
      <div class="alert-success"><span class="material-icons">check_circle</span> {{ quarterMsg }}</div>
    }
    @if (quarterError) {
      <div class="alert-error"><span class="material-icons">error</span> {{ quarterError }}</div>
    }
    @if (loadingBrasseries) {
      <div class="card"><div class="loading-state"><span class="material-icons spin">sync</span><p>Chargement\u2026</p></div></div>
    } @else {
      @for (qg of brasseriesByQuarter; track $index) {
        @let qKey = 'Q' + qg.quarter + '-' + qg.year;
        @let qLabel = QUARTERS.find(q => q.q === qg.quarter)?.label ?? '';
        <div class="quarter-card">
          <div class="quarter-header" (click)="toggleQuarter(qKey)">
            <div class="quarter-title">
              <span class="material-icons quarter-icon">calendar_today</span>
              <strong>Trimestre {{ qg.quarter }} {{ qg.year }}</strong>
              <span class="quarter-sub">{{ qLabel }}</span>
              @if (qg.partners.length > 0) {
                <span class="badge-count">{{ qg.partners.length }} fournisseur(s)</span>
                <span class="quarter-total">{{ qg.totalAmount | number:'1.0-2' }} FCFA</span>
              }
            </div>
            <div class="quarter-actions" (click)="$event.stopPropagation()">
              @if (qg.year === currentYear) {
                <button class="btn-generate"
                  [disabled]="generatingQuarter === qKey"
                  (click)="generateQuarter(qg.quarter)">
                  <span class="material-icons" style="font-size:16px">
                    {{ generatingQuarter === qKey ? 'hourglass_empty' : 'autorenew' }}
                  </span>
                  {{ generatingQuarter === qKey ? 'G\xE9n\xE9ration\u2026' : 'G\xE9n\xE9rer remises' }}
                </button>
              }
              <span class="material-icons expand-icon">
                {{ expandedQuarters.has(qKey) ? 'expand_less' : 'expand_more' }}
              </span>
            </div>
          </div>

          @if (expandedQuarters.has(qKey)) {
            <div class="quarter-body">
              @if (qg.partners.length === 0) {
                <div class="empty-quarter">Aucun r\xE8glement pour ce trimestre.</div>
              } @else {
                @for (pg of qg.partners; track pg.partnerId) {
                  @let partnerKey = qKey + '-' + pg.partnerId;
                  <div class="partner-row" (click)="toggleBrasseriePartner(partnerKey)">
                    <span class="material-icons" style="font-size:16px;color:#666">
                      {{ expandedBrasserieKeys.has(partnerKey) ? 'expand_less' : 'expand_more' }}
                    </span>
                    <span class="partner-name">{{ pg.partnerName }}</span>
                    <span class="partner-count">{{ pg.paiements.length }} r\xE8glement(s)</span>
                    <span class="partner-total">{{ pg.totalAmount | number:'1.0-2' }} FCFA</span>
                    @if (hasDrafts(pg.paiements)) {
                      <span class="partner-actions" (click)="$event.stopPropagation()">
                        <button class="btn-confirm-all" (click)="confirmAllBrasserie(pg.paiements)">
                          <span class="material-icons" style="font-size:14px">done_all</span> Confirmer tout
                        </button>
                      </span>
                    }
                  </div>
                  @if (expandedBrasserieKeys.has(partnerKey)) {
                    <div class="partner-details">
                      <table class="lines-table">
                        <thead>
                          <tr>
                            <th>R\xE9f\xE9rence</th>
                            <th>Facture source</th>
                            <th>Date</th>
                            <th class="ar">Montant TTC</th>
                            <th>\xC9tat</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          @for (p of pg.paiements; track p.id) {
                            <tr>
                              <td>{{ p.name }}</td>
                              <td>{{ p.invoiceName ?? '\u2014' }}</td>
                              <td>{{ p.date | date:'dd/MM/yyyy' }}</td>
                              <td class="ar font-mono">{{ p.totalAmount | number:'1.0-2' }}</td>
                              <td><span class="badge" [ngClass]="stateBadge(p.state)">{{ stateLabel(p.state) }}</span></td>
                              <td class="actions-cell">
                                @if (p.state === 'draft') {
                                  <button class="btn-action confirm" (click)="confirmBrasseriePmt(p.id!)">Confirmer</button>
                                  <button class="btn-icon danger" (click)="cancelBrasseriePmt(p.id!)">
                                    <span class="material-icons">close</span>
                                  </button>
                                }
                              </td>
                            </tr>
                          }
                        </tbody>
                      </table>
                    </div>
                  }
                }
              }
            </div>
          }
        </div>
      }
    }
  }

  <!-- ===================== GUINNESS TAB ===================== -->
  @if (activeTab === 'guinness') {
    @if (guinessMsg) {
      <div class="alert-success"><span class="material-icons">check_circle</span> {{ guinessMsg }}</div>
    }
    @if (guinessError && !showGuinessModal) {
      <div class="alert-error"><span class="material-icons">error</span> {{ guinessError }}</div>
    }
    @if (loadingGuiness) {
      <div class="card"><div class="loading-state"><span class="material-icons spin">sync</span><p>Chargement\u2026</p></div></div>
    } @else if (guinessByFournisseur.length === 0) {
      <div class="card">
        <div class="empty-state">
          <span class="material-icons">sports_bar</span>
          <p>Aucun r\xE8glement Guinness. Utilisez le bouton "G\xE9n\xE9rer remises Guinness".</p>
        </div>
      </div>
    } @else {
      <div class="card">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width:32px"></th>
              <th>Fournisseur</th>
              <th class="text-right">Total (FCFA)</th>
              <th class="text-right">R\xE8glements</th>
            </tr>
          </thead>
          <tbody>
            @for (pg of guinessByFournisseur; track pg.partnerId) {
              <tr class="group-row" (click)="toggleGuinessPartner(pg.partnerId)" style="cursor:pointer">
                <td>
                  <span class="material-icons" style="font-size:18px;color:#666">
                    {{ expandedGuinessKeys.has(pg.partnerId) ? 'expand_less' : 'expand_more' }}
                  </span>
                </td>
                <td class="font-bold">{{ pg.partnerName }}</td>
                <td class="text-right font-mono font-bold" style="color:#017E84">{{ pg.totalAmount | number:'1.0-2' }}</td>
                <td class="text-right">{{ pg.paiements.length }}</td>
                <td class="actions-cell" (click)="$event.stopPropagation()">
                  @if (hasDrafts(pg.paiements)) {
                    <button class="btn-confirm-all" (click)="confirmAllGuiness(pg.paiements)">
                      <span class="material-icons" style="font-size:14px">done_all</span> Confirmer tout
                    </button>
                  }
                </td>
              </tr>
              @if (expandedGuinessKeys.has(pg.partnerId)) {
                <tr>
                  <td colspan="5" style="padding:0 0 8px 40px;background:#f9fafb">
                    <table class="lines-table" style="width:100%;margin-top:4px">
                      <thead>
                        <tr>
                          <th>R\xE9f\xE9rence</th>
                          <th>Facture source</th>
                          <th>Date</th>
                          <th class="ar">Montant TTC</th>
                          <th>\xC9tat</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        @for (p of pg.paiements; track p.id) {
                          <tr>
                            <td>{{ p.name }}</td>
                            <td>{{ p.invoiceName ?? '\u2014' }}</td>
                            <td>{{ p.date | date:'dd/MM/yyyy' }}</td>
                            <td class="ar font-mono">{{ p.totalAmount | number:'1.0-2' }}</td>
                            <td><span class="badge" [ngClass]="stateBadge(p.state)">{{ stateLabel(p.state) }}</span></td>
                            <td class="actions-cell">
                              @if (p.state === 'draft') {
                                <button class="btn-action confirm" (click)="confirmGuinessPmt(p.id!)">Confirmer</button>
                                <button class="btn-icon danger" (click)="cancelGuinessPmt(p.id!)">
                                  <span class="material-icons">close</span>
                                </button>
                              }
                            </td>
                          </tr>
                        }
                      </tbody>
                    </table>
                  </td>
                </tr>
              }
            }
          </tbody>
        </table>
      </div>
    }
  }



</div>

<!-- ===================== REMISE MODAL ===================== -->
@if (showRmsModal) {
  <div class="modal-overlay" (click.self)="showRmsModal = false">
    <div class="modal-box">
      <div class="modal-header">
        <span class="material-icons">discount</span>
        <h2>{{ editingRms ? 'Modifier remise' : 'Nouvelle remise' }}</h2>
        <button class="btn-close-modal" (click)="showRmsModal = false"><span class="material-icons">close</span></button>
      </div>
      @if (rmsError) {
        <div class="modal-error"><span class="material-icons">error</span>{{ rmsError }}</div>
      }
      <div class="modal-body">
        <div class="form-grid">
          <div class="form-group">
            <label>Fournisseur <span class="req">*</span></label>
            <select class="form-control" [(ngModel)]="rmsForm.partnerId">
              <option [value]="0">-- S\xE9lectionner --</option>
              @for (s of suppliers; track s.id) { <option [value]="s.id">{{ s.name }}</option> }
            </select>
          </div>
          <div class="form-group">
            <label>Cat\xE9gorie <span class="req">*</span></label>
            <select class="form-control" [(ngModel)]="rmsForm.categoryId">
              <option [value]="0">-- S\xE9lectionner --</option>
              @for (cat of categories; track cat.id) { <option [value]="cat.id">{{ cat.name }}</option> }
            </select>
          </div>
          <div class="form-group">
            <label>Montant HT / unit\xE9 (FCFA) <span class="req">*</span></label>
            <input type="number" class="form-control" [(ngModel)]="rmsForm.montantFixe" min="0" />
          </div>
          <div class="form-group">
            <label>Type</label>
            <select class="form-control" [(ngModel)]="rmsForm.typeRemise">
              <option value="brasserie">Brasserie</option>
              <option value="guinness">Guinness</option>
            </select>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-cancel" (click)="showRmsModal = false">Annuler</button>
        <button class="btn-save" (click)="saveRms()" [disabled]="savingRms">
          <span class="material-icons">save</span> Enregistrer
        </button>
      </div>
    </div>
  </div>
}

<!-- ===================== GUINNESS G\xC9N\xC9RATION MODAL ===================== -->
@if (showGuinessModal) {
  <div class="modal-overlay" (click.self)="showGuinessModal = false">
    <div class="modal-box" style="max-width:460px">
      <div class="modal-header">
        <span class="material-icons">sports_bar</span>
        <h2>G\xE9n\xE9rer remises Guinness</h2>
        <button class="btn-close-modal" (click)="showGuinessModal = false"><span class="material-icons">close</span></button>
      </div>
      @if (guinessError) {
        <div class="modal-error"><span class="material-icons">error</span>{{ guinessError }}</div>
      }
      <div class="modal-body">
        <p style="margin-bottom:16px;color:#555;font-size:14px">
          S\xE9lectionnez la p\xE9riode sur laquelle g\xE9n\xE9rer les r\xE8glements Guinness depuis toutes les factures d'achats valid\xE9es.
        </p>
        <div class="form-grid">
          <div class="form-group">
            <label>Date de d\xE9but <span class="req">*</span></label>
            <input type="date" class="form-control" [(ngModel)]="guinessDateStart" />
          </div>
          <div class="form-group">
            <label>Date de fin <span class="req">*</span></label>
            <input type="date" class="form-control" [(ngModel)]="guinessDateEnd" />
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-cancel" (click)="showGuinessModal = false">Annuler</button>
        <button class="btn-save" (click)="generateGuiness()" [disabled]="generatingGuiness">
          <span class="material-icons">{{ generatingGuiness ? 'hourglass_empty' : 'autorenew' }}</span>
          {{ generatingGuiness ? 'G\xE9n\xE9ration\u2026' : 'G\xE9n\xE9rer' }}
        </button>
      </div>
    </div>
  </div>
}

<!-- ===================== IMPORT MODAL ===================== -->
@if (showImportModal) {
  <div class="modal-overlay" (click)="closeImportModal()">
    <div class="modal-box" (click)="$event.stopPropagation()" style="max-width:700px;position:relative">
      @if (importLoading) {
        <div style="position:absolute;inset:0;background:rgba(255,255,255,0.9);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10;border-radius:inherit">
          <div class="spinner"></div>
          <p style="margin-top:14px;color:#017E84;font-weight:600">Importation en cours\u2026</p>
        </div>
      }
      <div class="modal-header">
        <span class="material-icons">upload_file</span>
        <h2>Aper\xE7u import remises ({{ importRows.length }} ligne(s))</h2>
        <button class="btn-close-modal" (click)="closeImportModal()"><span class="material-icons">close</span></button>
      </div>
      <div style="overflow-x:auto;max-height:50vh;padding:0 20px">
        <table class="rst-table">
          <thead>
            <tr><th>#</th><th>Fournisseur</th><th>Cat\xE9gorie</th><th>Type</th><th class="text-right">Montant</th></tr>
          </thead>
          <tbody>
            @for (row of importRows; track $index; let i = $index) {
              <tr>
                <td class="text-muted">{{ i + 1 }}</td>
                <td class="font-bold">{{ row['Fournisseur'] || '\u2014' }}</td>
                <td>{{ row["Cat\xE9gorie d'article"] || '\u2014' }}</td>
                <td>{{ row['Type (brasserie/guinness)'] || '\u2014' }}</td>
                <td class="text-right font-mono">{{ row['Montant de la remise'] || '\u2014' }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button class="btn-cancel" (click)="closeImportModal()">Annuler</button>
        <button class="btn-save" (click)="confirmImport()">
          <span class="material-icons">check_circle</span> Confirmer ({{ importRows.length }} remise(s))
        </button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/purchases/components/remises/remise-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header .page-icon {\n  font-size: 28px;\n  color: var(--accent);\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 2px 0 0;\n}\n.tabs-bar {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 0;\n}\n.tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  background: none;\n  font-size: 14px;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.15s;\n}\n.tab-btn .material-icons {\n  font-size: 18px;\n}\n.tab-btn:hover {\n  color: var(--accent);\n}\n.tab-btn.active {\n  color: var(--accent);\n  border-bottom-color: var(--accent);\n  font-weight: 600;\n}\n.btn-new {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-new .material-icons {\n  font-size: 18px;\n}\n.btn-new:hover {\n  background: #015f65;\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-outline .material-icons {\n  font-size: 16px;\n}\n.btn-outline:hover {\n  background: var(--bg-hover);\n}\n.btn-import {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--accent-light);\n  color: var(--accent);\n  border: 1px solid #b2dfdf;\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-import .material-icons {\n  font-size: 16px;\n}\n.btn-import:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.btn-import:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.sub-tabs-bar {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 12px;\n}\n.sub-tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 13px;\n  color: var(--text-muted);\n  cursor: pointer;\n  border-radius: 6px;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.sub-tab-btn:hover {\n  background: var(--bg-hover);\n}\n.sub-tab-btn.active {\n  background: var(--accent);\n  color: white;\n  border-color: var(--accent);\n  font-weight: 600;\n}\n.quarter-card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 12px;\n  overflow: hidden;\n}\n.quarter-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  cursor: pointer;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border-light);\n}\n.quarter-header:hover {\n  background: var(--bg-hover);\n}\n.quarter-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.quarter-title strong {\n  font-size: 15px;\n  color: var(--text-primary);\n}\n.quarter-icon {\n  font-size: 20px;\n  color: var(--accent);\n}\n.quarter-sub {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.quarter-total {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--accent);\n  font-family: "Roboto Mono", monospace;\n}\n.quarter-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.expand-icon {\n  font-size: 22px;\n  color: var(--text-muted);\n}\n.badge-count {\n  background: #d0f0f0;\n  color: var(--accent);\n  border-radius: 20px;\n  padding: 2px 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.quarter-body {\n  padding: 8px 0;\n}\n.empty-quarter {\n  padding: 16px 24px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.partner-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 24px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-light);\n}\n.partner-row:hover {\n  background: var(--bg-hover);\n}\n.partner-name {\n  flex: 1;\n  font-weight: 600;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.partner-count {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.partner-total {\n  font-family: "Roboto Mono", monospace;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--accent);\n  margin-left: auto;\n}\n.partner-actions {\n  display: flex;\n  gap: 6px;\n}\n.partner-details {\n  padding: 0 24px 12px 48px;\n  background: var(--bg-elevated);\n}\n.btn-generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  padding: 7px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-generate:hover:not(:disabled) {\n  background: #015f65;\n}\n.btn-generate:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-confirm-all {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #e8f5e9;\n  color: #2e7d32;\n  border: 1px solid #a5d6a7;\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-confirm-all:hover {\n  background: var(--success-bg);\n}\n.alert-success {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: var(--success-bg);\n  border-radius: 6px;\n  color: var(--success);\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.alert-success .material-icons {\n  font-size: 18px;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: var(--danger-bg);\n  border-radius: 6px;\n  color: #991b1b;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.loading-state .material-icons,\n.empty-state .material-icons {\n  font-size: 48px;\n  color: var(--border);\n}\n.loading-state p,\n.empty-state p {\n  margin: 0;\n  font-size: 15px;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 11px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.data-table td {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n}\n.data-table tr:last-child td {\n  border-bottom: none;\n}\n.rst-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.rst-table th {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.rst-table td {\n  padding: 9px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n}\n.rst-table tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.ref-col {\n  color: var(--accent);\n  font-family: monospace;\n  font-weight: 600;\n}\n.actions-cell {\n  text-align: right;\n  white-space: nowrap;\n}\n.group-row:hover td {\n  background: var(--bg-hover);\n}\n.btn-icon {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px 6px;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.btn-icon .material-icons {\n  font-size: 17px;\n}\n.btn-icon:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.danger:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.btn-action {\n  padding: 4px 12px;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-action.confirm {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.btn-action.confirm:hover {\n  background: var(--success-bg);\n}\n.btn-action:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge.badge-draft {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.badge.badge-confirmed {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-done {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge.badge-cancelled {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge.badge-brasserie {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge.badge-guinness {\n  background: #e8f5e9;\n  color: #1b5e20;\n}\n.badge.badge-ht {\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  width: 100%;\n  max-width: 560px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 24px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header .material-icons {\n  color: var(--accent);\n  font-size: 22px;\n}\n.modal-header h2 {\n  flex: 1;\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-close-modal {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  padding: 4px;\n}\n.btn-close-modal .material-icons {\n  font-size: 20px;\n}\n.modal-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 24px 0;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-radius: 6px;\n  font-size: 13px;\n}\n.modal-error .material-icons {\n  font-size: 17px;\n}\n.modal-body {\n  padding: 20px 24px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid #f0f0f0;\n}\n.btn-cancel {\n  padding: 9px 20px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-cancel:hover {\n  background: var(--bg-hover);\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 22px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-save .material-icons {\n  font-size: 18px;\n}\n.btn-save:hover:not(:disabled) {\n  background: #015f65;\n}\n.btn-save:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid .form-full {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n}\n.form-group .req {\n  color: var(--danger);\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  border-color: var(--accent);\n  box-shadow: 0 0 0 3px rgba(1, 126, 132, 0.12);\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.lines-table th {\n  padding: 8px;\n  background: var(--bg-elevated);\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  border-bottom: 2px solid var(--border);\n}\n.lines-table td {\n  padding: 4px 8px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.lines-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.lines-table .ar {\n  text-align: right;\n}\n.lines-table .font-mono {\n  font-family: monospace;\n}\n/*# sourceMappingURL=remise-list.component.css.map */\n'] }]
  }], () => [{ type: RemiseService }, { type: StockService }, { type: AuthService }, { type: HttpClient }, { type: Router }, { type: NotificationService }], { importInput: [{
    type: ViewChild,
    args: ["importInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RemiseListComponent, { className: "RemiseListComponent", filePath: "app/modules/purchases/components/remises/remise-list.component.ts", lineNumber: 23 });
})();
export {
  RemiseListComponent
};
//# sourceMappingURL=chunk-IMG5HR6I.js.map
