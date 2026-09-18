import {
  RistourneService
} from "./chunk-SAK5MSBQ.js";
import {
  StockService
} from "./chunk-VJTDSZQK.js";
import {
  SalesService
} from "./chunk-PDYKRBTO.js";
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
  NgClass,
  ViewChild,
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
  ɵɵtextInterpolate4,
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

// src/app/modules/sales/components/ristournes/ristourne-list.component.ts
var _c0 = ["importInput"];
var _forTrack0 = ($index, $item) => $item.partnerId;
var _forTrack1 = ($index, $item) => $item.id;
var arrowFn0 = (ctx, view) => (q) => {
  const qg_r10 = \u0275\u0275restoreView(view).$implicit;
  return \u0275\u0275resetView(q.q === qg_r10.quarter);
};
var _forTrack2 = ($index, $item) => $item.quarter;
var arrowFn1 = (ctx, view) => (p) => p.id;
var _forTrack3 = ($index, $item) => $item.value;
function RistourneListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275elementStart(1, "span", 12);
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Mod\xE8le Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.triggerImport());
    });
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 16);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_13_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewRst());
    });
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Nouvelle ristourne ");
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
function RistourneListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openGuinessModal());
    });
    \u0275\u0275elementStart(1, "span", 12);
    \u0275\u0275text(2, "autorenew");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " G\xE9n\xE9rer ristournes Guinness ");
    \u0275\u0275elementEnd();
  }
}
function RistourneListComponent_Conditional_32_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "span", 19);
    \u0275\u0275text(3, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Chargement\u2026");
    \u0275\u0275elementEnd()()();
  }
}
function RistourneListComponent_Conditional_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 20)(2, "span", 12);
    \u0275\u0275text(3, "redeem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Aucune ristourne configur\xE9e.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 16);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_32_Conditional_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openNewRst());
    });
    \u0275\u0275elementStart(7, "span", 12);
    \u0275\u0275text(8, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Ajouter");
    \u0275\u0275elementEnd()()();
  }
}
function RistourneListComponent_Conditional_32_Conditional_2_For_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", group_r7.nbBrasserie, " Brasserie");
  }
}
function RistourneListComponent_Conditional_32_Conditional_2_For_14_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", group_r7.nbGuinness, " Guinness");
  }
}
function RistourneListComponent_Conditional_32_Conditional_2_For_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", group_r7.nbAutre, " Autre");
  }
}
function RistourneListComponent_Conditional_32_Conditional_2_For_14_Conditional_17_For_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Brasserie");
    \u0275\u0275elementEnd();
  }
}
function RistourneListComponent_Conditional_32_Conditional_2_For_14_Conditional_17_For_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "Guinness");
    \u0275\u0275elementEnd();
  }
}
function RistourneListComponent_Conditional_32_Conditional_2_For_14_Conditional_17_For_17_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "Autre");
    \u0275\u0275elementEnd();
  }
}
function RistourneListComponent_Conditional_32_Conditional_2_For_14_Conditional_17_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275conditionalCreate(4, RistourneListComponent_Conditional_32_Conditional_2_For_14_Conditional_17_For_17_Conditional_4_Template, 2, 0, "span", 44)(5, RistourneListComponent_Conditional_32_Conditional_2_For_14_Conditional_17_For_17_Conditional_5_Template, 2, 0, "span", 45)(6, RistourneListComponent_Conditional_32_Conditional_2_For_14_Conditional_17_For_17_Conditional_6_Template, 2, 0, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 47);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 48);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 42);
    \u0275\u0275element(14, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 50)(16, "button", 51);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_32_Conditional_2_For_14_Conditional_17_For_17_Template_button_click_16_listener($event) {
      const r_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      ctx_r1.editRst(r_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(17, "span", 12);
    \u0275\u0275text(18, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 52);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_32_Conditional_2_For_14_Conditional_17_For_17_Template_button_click_19_listener($event) {
      const r_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      ctx_r1.deleteRst(r_r9.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(20, "span", 12);
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r9.typeRistourne === "brasserie" ? 4 : r_r9.typeRistourne === "guinness" ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 6, r_r9.montantFixe, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 9, r_r9.montantTTCUnitaire, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("on", r_r9.active !== false);
  }
}
function RistourneListComponent_Conditional_32_Conditional_2_For_14_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "table", 41)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 42);
    \u0275\u0275text(9, "Montant HT / u");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 42);
    \u0275\u0275text(11, "TTC / u");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 42);
    \u0275\u0275text(13, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, RistourneListComponent_Conditional_32_Conditional_2_For_14_Conditional_17_For_17_Template, 22, 12, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const group_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(16);
    \u0275\u0275repeater(group_r7.items);
  }
}
function RistourneListComponent_Conditional_32_Conditional_2_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_32_Conditional_2_For_14_Template_div_click_1_listener() {
      const group_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleClient(group_r7.partnerId));
    });
    \u0275\u0275elementStart(2, "div", 29)(3, "div", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 31)(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 33);
    \u0275\u0275conditionalCreate(9, RistourneListComponent_Conditional_32_Conditional_2_For_14_Conditional_9_Template, 2, 1, "span", 34);
    \u0275\u0275conditionalCreate(10, RistourneListComponent_Conditional_32_Conditional_2_For_14_Conditional_10_Template, 2, 1, "span", 35);
    \u0275\u0275conditionalCreate(11, RistourneListComponent_Conditional_32_Conditional_2_For_14_Conditional_11_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 37)(13, "span", 38);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 39);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(17, RistourneListComponent_Conditional_32_Conditional_2_For_14_Conditional_17_Template, 18, 0, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("open", ctx_r1.expandedClients.has(group_r7.partnerId));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(group_r7.partnerName.charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r7.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(group_r7.nbBrasserie > 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r7.nbGuinness > 0 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r7.nbAutre > 0 ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", group_r7.items.length, " ligne", group_r7.items.length > 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.expandedClients.has(group_r7.partnerId) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.expandedClients.has(group_r7.partnerId) ? 17 : -1);
  }
}
function RistourneListComponent_Conditional_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23)(4, "button", 24);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_32_Conditional_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.expandAll());
    });
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6, "unfold_more");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Tout d\xE9plier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 24);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_32_Conditional_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.collapseAll());
    });
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10, "unfold_less");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Tout replier ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 25);
    \u0275\u0275repeaterCreate(13, RistourneListComponent_Conditional_32_Conditional_2_For_14_Template, 18, 11, "div", 26, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", ctx_r1.clientGroups.length, " client", ctx_r1.clientGroups.length > 1 ? "s" : "", " \xB7 ", ctx_r1.ristournes.length, " ristourne", ctx_r1.ristournes.length > 1 ? "s" : "");
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.clientGroups);
  }
}
function RistourneListComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RistourneListComponent_Conditional_32_Conditional_0_Template, 6, 0, "div", 17)(1, RistourneListComponent_Conditional_32_Conditional_1_Template, 10, 0, "div", 17)(2, RistourneListComponent_Conditional_32_Conditional_2_Template, 15, 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.loadingRst ? 0 : ctx_r1.ristournes.length === 0 ? 1 : 2);
  }
}
function RistourneListComponent_Conditional_33_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 12);
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
function RistourneListComponent_Conditional_33_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 12);
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
function RistourneListComponent_Conditional_33_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "span", 19);
    \u0275\u0275text(3, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Chargement\u2026");
    \u0275\u0275elementEnd()()();
  }
}
function RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 65);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qg_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", qg_r13.partners.length, " client(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(4, 2, qg_r13.totalAmount, "1.0-2"), " FCFA");
  }
}
function RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const qg_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.generateQuarter(qg_r13.quarter));
    });
    \u0275\u0275elementStart(1, "span", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const qKey_r12 = \u0275\u0275readContextLet(0);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.generatingQuarter === qKey_r12);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.generatingQuarter === qKey_r12 ? "hourglass_empty" : "autorenew", " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.generatingQuarter === qKey_r12 ? "G\xE9n\xE9ration\u2026" : "G\xE9n\xE9rer ristournes", " ");
  }
}
function RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1, "Aucun r\xE8glement pour ce trimestre.");
    \u0275\u0275elementEnd();
  }
}
function RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_11_Template_span_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "button", 77);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const pg_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.confirmAllBrasserie(pg_r18.paiements));
    });
    \u0275\u0275elementStart(2, "span", 78);
    \u0275\u0275text(3, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Confirmer tout ");
    \u0275\u0275elementEnd()();
  }
}
function RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_12_For_17_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_12_For_17_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const p_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.confirmBrasseriePmt(p_r20.id));
    });
    \u0275\u0275text(1, "Confirmer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 52);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_12_For_17_Conditional_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r19);
      const p_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.cancelBrasseriePmt(p_r20.id));
    });
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
  }
}
function RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_12_For_17_Template(rf, ctx) {
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
    \u0275\u0275elementStart(8, "td", 81);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 82);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 50);
    \u0275\u0275conditionalCreate(15, RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_12_For_17_Conditional_15_Template, 5, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r20.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r20.invoiceName ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 7, p_r20.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 10, p_r20.totalAmount, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.stateBadge(p_r20.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(p_r20.state));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r20.state === "draft" ? 15 : -1);
  }
}
function RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "table", 79)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Facture source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 80);
    \u0275\u0275text(11, "Montant TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\xC9tat");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_12_For_17_Template, 16, 13, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pg_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(16);
    \u0275\u0275repeater(pg_r18.paiements);
  }
}
function RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const partnerKey_r16 = \u0275\u0275readContextLet(0);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.toggleBrasseriePartner(partnerKey_r16));
    });
    \u0275\u0275elementStart(2, "span", 70);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 71);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 72);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 73);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_11_Template, 5, 0, "span", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Conditional_12_Template, 18, 0, "div", 75);
  }
  if (rf & 2) {
    const pg_r18 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const qKey_r12 = \u0275\u0275readContextLet(0);
    const ctx_r1 = \u0275\u0275nextContext(3);
    const partnerKey_r21 = \u0275\u0275storeLet(qKey_r12 + "-" + pg_r18.partnerId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.expandedBrasserieKeys.has(partnerKey_r21) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pg_r18.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", pg_r18.paiements.length, " r\xE8glement(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 7, pg_r18.totalAmount, "1.0-2"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasDrafts(pg_r18.paiements) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.expandedBrasserieKeys.has(partnerKey_r21) ? 12 : -1);
  }
}
function RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_2_For_1_Template, 13, 10, null, null, _forTrack0);
  }
  if (rf & 2) {
    const qg_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(qg_r13.partners);
  }
}
function RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275conditionalCreate(1, RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_1_Template, 2, 0, "div", 68)(2, RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qg_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(qg_r13.partners.length === 0 ? 1 : 2);
  }
}
function RistourneListComponent_Conditional_33_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 55)(2, "div", 56);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_33_Conditional_3_For_1_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const qKey_r12 = \u0275\u0275readContextLet(0);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleQuarter(qKey_r12));
    });
    \u0275\u0275elementStart(3, "div", 57)(4, "span", 58);
    \u0275\u0275text(5, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 59);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_10_Template, 5, 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 60);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_33_Conditional_3_For_1_Template_div_click_11_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(12, RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_12_Template, 4, 3, "button", 61);
    \u0275\u0275elementStart(13, "span", 62);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(15, RistourneListComponent_Conditional_33_Conditional_3_For_1_Conditional_15_Template, 3, 1, "div", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    const qg_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    const qKey_r22 = \u0275\u0275storeLet("Q" + qg_r13.quarter + "-" + qg_r13.year);
    const qLabel_r23 = ((tmp_14_0 = ctx_r1.QUARTERS.find(\u0275\u0275arrowFunction(8, arrowFn0, ctx))) == null ? null : tmp_14_0.label) ?? "";
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("Trimestre ", qg_r13.quarter, " ", qg_r13.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(qLabel_r23);
    \u0275\u0275advance();
    \u0275\u0275conditional(qg_r13.partners.length > 0 ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(qg_r13.year === ctx_r1.currentYear ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.expandedQuarters.has(qKey_r22) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.expandedQuarters.has(qKey_r22) ? 15 : -1);
  }
}
function RistourneListComponent_Conditional_33_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, RistourneListComponent_Conditional_33_Conditional_3_For_1_Template, 16, 9, "div", 55, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.brasseriesByQuarter);
  }
}
function RistourneListComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RistourneListComponent_Conditional_33_Conditional_0_Template, 4, 1, "div", 53);
    \u0275\u0275conditionalCreate(1, RistourneListComponent_Conditional_33_Conditional_1_Template, 4, 1, "div", 54);
    \u0275\u0275conditionalCreate(2, RistourneListComponent_Conditional_33_Conditional_2_Template, 6, 0, "div", 17)(3, RistourneListComponent_Conditional_33_Conditional_3_Template, 2, 0);
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
function RistourneListComponent_Conditional_34_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 12);
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
function RistourneListComponent_Conditional_34_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 12);
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
function RistourneListComponent_Conditional_34_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "span", 19);
    \u0275\u0275text(3, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Chargement\u2026");
    \u0275\u0275elementEnd()()();
  }
}
function RistourneListComponent_Conditional_34_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 20)(2, "span", 12);
    \u0275\u0275text(3, "sports_bar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, 'Aucun r\xE8glement Guinness. Utilisez le bouton "G\xE9n\xE9rer ristournes Guinness".');
    \u0275\u0275elementEnd()()();
  }
}
function RistourneListComponent_Conditional_34_Conditional_4_For_13_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_34_Conditional_4_For_13_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const pg_r25 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmAllGuiness(pg_r25.paiements));
    });
    \u0275\u0275elementStart(1, "span", 78);
    \u0275\u0275text(2, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Confirmer tout ");
    \u0275\u0275elementEnd();
  }
}
function RistourneListComponent_Conditional_34_Conditional_4_For_13_Conditional_13_For_18_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_34_Conditional_4_For_13_Conditional_13_For_18_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const p_r28 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.confirmGuinessPmt(p_r28.id));
    });
    \u0275\u0275text(1, "Confirmer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 52);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_34_Conditional_4_For_13_Conditional_13_For_18_Conditional_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r27);
      const p_r28 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.cancelGuinessPmt(p_r28.id));
    });
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
  }
}
function RistourneListComponent_Conditional_34_Conditional_4_For_13_Conditional_13_For_18_Template(rf, ctx) {
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
    \u0275\u0275elementStart(8, "td", 81);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 82);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 50);
    \u0275\u0275conditionalCreate(15, RistourneListComponent_Conditional_34_Conditional_4_For_13_Conditional_13_For_18_Conditional_15_Template, 5, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r28.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r28.invoiceName ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 7, p_r28.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 10, p_r28.totalAmount, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.stateBadge(p_r28.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(p_r28.state));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r28.state === "draft" ? 15 : -1);
  }
}
function RistourneListComponent_Conditional_34_Conditional_4_For_13_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 93)(2, "table", 94)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Facture source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 80);
    \u0275\u0275text(12, "Montant TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "\xC9tat");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, RistourneListComponent_Conditional_34_Conditional_4_For_13_Conditional_13_For_18_Template, 16, 13, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const pg_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(17);
    \u0275\u0275repeater(pg_r25.paiements);
  }
}
function RistourneListComponent_Conditional_34_Conditional_4_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 87);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_34_Conditional_4_For_13_Template_tr_click_0_listener() {
      const pg_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleGuinessPartner(pg_r25.partnerId));
    });
    \u0275\u0275elementStart(1, "td")(2, "span", 88);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 89);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 90);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 86);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 91);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_34_Conditional_4_For_13_Template_td_click_11_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(12, RistourneListComponent_Conditional_34_Conditional_4_For_13_Conditional_12_Template, 4, 0, "button", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, RistourneListComponent_Conditional_34_Conditional_4_For_13_Conditional_13_Template, 19, 0, "tr");
  }
  if (rf & 2) {
    const pg_r25 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.expandedGuinessKeys.has(pg_r25.partnerId) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pg_r25.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 6, pg_r25.totalAmount, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pg_r25.paiements.length);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasDrafts(pg_r25.paiements) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.expandedGuinessKeys.has(pg_r25.partnerId) ? 13 : -1);
  }
}
function RistourneListComponent_Conditional_34_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "table", 84)(2, "thead")(3, "tr");
    \u0275\u0275element(4, "th", 85);
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 86);
    \u0275\u0275text(8, "Total (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 86);
    \u0275\u0275text(10, "R\xE8glements");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, RistourneListComponent_Conditional_34_Conditional_4_For_13_Template, 14, 9, null, null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.guinessByClient);
  }
}
function RistourneListComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RistourneListComponent_Conditional_34_Conditional_0_Template, 4, 1, "div", 53);
    \u0275\u0275conditionalCreate(1, RistourneListComponent_Conditional_34_Conditional_1_Template, 4, 1, "div", 54);
    \u0275\u0275conditionalCreate(2, RistourneListComponent_Conditional_34_Conditional_2_Template, 6, 0, "div", 17)(3, RistourneListComponent_Conditional_34_Conditional_3_Template, 6, 0, "div", 17)(4, RistourneListComponent_Conditional_34_Conditional_4_Template, 14, 0, "div", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.guinessMsg ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.guinessError && !ctx_r1.showGuinessModal ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadingGuiness ? 2 : ctx_r1.guinessByClient.length === 0 ? 3 : 4);
  }
}
function RistourneListComponent_Conditional_35_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 12);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.factureMsg);
  }
}
function RistourneListComponent_Conditional_35_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 12);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.factureError);
  }
}
function RistourneListComponent_Conditional_35_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "span", 19);
    \u0275\u0275text(3, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Chargement\u2026");
    \u0275\u0275elementEnd()()();
  }
}
function RistourneListComponent_Conditional_35_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 20)(2, "span", 12);
    \u0275\u0275text(3, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Aucun r\xE8glement Brasseries confirm\xE9 \xE0 r\xE9gler.");
    \u0275\u0275elementEnd()()();
  }
}
function RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r34);
      \u0275\u0275nextContext();
      const hasGenerated_r35 = \u0275\u0275readContextLet(2);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.openFacture(hasGenerated_r35));
    });
    \u0275\u0275elementStart(1, "span", 78);
    \u0275\u0275text(2, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Voir avoir ");
    \u0275\u0275elementEnd();
  }
}
function RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 99);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r36);
      \u0275\u0275nextContext();
      const partnerKey_r33 = \u0275\u0275readContextLet(0);
      const pIds_r37 = \u0275\u0275readContextLet(1);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.generateFactureForGroup(pIds_r37, partnerKey_r33));
    });
    \u0275\u0275elementStart(1, "span", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const partnerKey_r33 = \u0275\u0275readContextLet(0);
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275property("disabled", ctx_r1.generatingFacture === partnerKey_r33);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.generatingFacture === partnerKey_r33 ? "hourglass_empty" : "payments", " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.generatingFacture === partnerKey_r33 ? "G\xE9n\xE9ration\u2026" : "Payer", " ");
  }
}
function RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Conditional_16_For_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 101);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Conditional_16_For_16_Conditional_12_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const p_r39 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(8);
      return \u0275\u0275resetView(ctx_r1.openFacture(p_r39.generatedInvoiceId));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r39 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r39.generatedInvoiceName);
  }
}
function RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Conditional_16_For_16_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Conditional_16_For_16_Template(rf, ctx) {
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
    \u0275\u0275elementStart(8, "td", 81);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275conditionalCreate(12, RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Conditional_16_For_16_Conditional_12_Template, 2, 1, "a", 100)(13, RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Conditional_16_For_16_Conditional_13_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r39 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r39.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r39.invoiceName ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 5, p_r39.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 8, p_r39.totalAmount, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(p_r39.generatedInvoiceId ? 12 : 13);
  }
}
function RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "table", 79)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Facture source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 80);
    \u0275\u0275text(11, "Montant TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Avoir g\xE9n\xE9r\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Conditional_16_For_16_Template, 14, 11, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pg_r40 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(15);
    \u0275\u0275repeater(pg_r40.paiements);
  }
}
function RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0)(1)(2);
    \u0275\u0275elementStart(3, "div", 69);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r32);
      const partnerKey_r33 = \u0275\u0275readContextLet(0);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.toggleReglPartner(partnerKey_r33));
    });
    \u0275\u0275elementStart(4, "span", 70);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 71);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 72);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 73);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 76);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Template_span_click_13_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(14, RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Conditional_14_Template, 4, 0, "button", 97)(15, RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Conditional_15_Template, 4, 3, "button", 98);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Conditional_16_Template, 17, 0, "div", 75);
  }
  if (rf & 2) {
    const pg_r40 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const qKey_r31 = \u0275\u0275readContextLet(0);
    const ctx_r1 = \u0275\u0275nextContext(4);
    const partnerKey_r41 = \u0275\u0275storeLet(qKey_r31 + "-" + pg_r40.partnerId);
    \u0275\u0275advance();
    \u0275\u0275storeLet(pg_r40.paiements.map(\u0275\u0275arrowFunction(7, arrowFn1, ctx)));
    \u0275\u0275advance();
    const hasGenerated_r42 = \u0275\u0275storeLet(pg_r40.paiements[0] == null ? null : pg_r40.paiements[0].generatedInvoiceId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.expandedReglKeys.has(partnerKey_r41) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pg_r40.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", pg_r40.paiements.length, " r\xE8glement(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 10, pg_r40.totalAmount, "1.0-2"), " FCFA");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(hasGenerated_r42 ? 14 : 15);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.expandedReglKeys.has(partnerKey_r41) ? 16 : -1);
  }
}
function RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275repeaterCreate(1, RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_For_2_Template, 17, 13, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qg_r43 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(qg_r43.partners);
  }
}
function RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 55)(2, "div", 56);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r30);
      const qKey_r31 = \u0275\u0275readContextLet(0);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleReglQuarter(qKey_r31));
    });
    \u0275\u0275elementStart(3, "div", 57)(4, "span", 58);
    \u0275\u0275text(5, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 64);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 65);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 62);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Conditional_15_Template, 3, 0, "div", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const qg_r43 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    const qKey_r44 = \u0275\u0275storeLet("Q" + qg_r43.quarter + "-" + qg_r43.year);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(qg_r43.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", qg_r43.partners.length, " client(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 6, qg_r43.totalAmount, "1.0-2"), " FCFA");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.expandedReglQuarters.has(qKey_r44) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.expandedReglQuarters.has(qKey_r44) ? 15 : -1);
  }
}
function RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_For_1_Template, 16, 9, "div", 55, _forTrack2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.reglBrasseriesGroups);
  }
}
function RistourneListComponent_Conditional_35_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RistourneListComponent_Conditional_35_Conditional_11_Conditional_0_Template, 6, 0, "div", 17)(1, RistourneListComponent_Conditional_35_Conditional_11_Conditional_1_Template, 6, 0, "div", 17)(2, RistourneListComponent_Conditional_35_Conditional_11_Conditional_2_Template, 2, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.loadingReglBrasseries ? 0 : ctx_r1.reglBrasseriesGroups.length === 0 ? 1 : 2);
  }
}
function RistourneListComponent_Conditional_35_Conditional_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "span", 19);
    \u0275\u0275text(3, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Chargement\u2026");
    \u0275\u0275elementEnd()()();
  }
}
function RistourneListComponent_Conditional_35_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 20)(2, "span", 12);
    \u0275\u0275text(3, "sports_bar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Aucun r\xE8glement Guinness confirm\xE9 \xE0 r\xE9gler.");
    \u0275\u0275elementEnd()()();
  }
}
function RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r47);
      const group_r48 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openFacture(group_r48.paiements[0].generatedInvoiceId));
    });
    \u0275\u0275elementStart(1, "span", 67);
    \u0275\u0275text(2, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Voir avoir ");
    \u0275\u0275elementEnd();
  }
}
function RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 99);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r49);
      \u0275\u0275nextContext();
      const gKey_r46 = \u0275\u0275readContextLet(0);
      const gIds_r50 = \u0275\u0275readContextLet(1);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.generateFactureForGroup(gIds_r50, gKey_r46));
    });
    \u0275\u0275elementStart(1, "span", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const gKey_r46 = \u0275\u0275readContextLet(0);
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r1.generatingFacture === gKey_r46);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.generatingFacture === gKey_r46 ? "hourglass_empty" : "payments", " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.generatingFacture === gKey_r46 ? "G\xE9n\xE9ration\u2026" : "Payer", " ");
  }
}
function RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Conditional_16_For_17_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 101);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Conditional_16_For_17_Conditional_12_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r51);
      const p_r52 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.openFacture(p_r52.generatedInvoiceId));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r52 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r52.generatedInvoiceName);
  }
}
function RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Conditional_16_For_17_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Conditional_16_For_17_Template(rf, ctx) {
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
    \u0275\u0275elementStart(8, "td", 81);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275conditionalCreate(12, RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Conditional_16_For_17_Conditional_12_Template, 2, 1, "a", 100)(13, RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Conditional_16_For_17_Conditional_13_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r52 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r52.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r52.invoiceName ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 5, p_r52.date, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 8, p_r52.totalAmount, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(p_r52.generatedInvoiceId ? 12 : 13);
  }
}
function RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 93)(2, "table", 94)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Facture source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 80);
    \u0275\u0275text(12, "Montant TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Avoir g\xE9n\xE9r\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Conditional_16_For_17_Template, 14, 11, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const group_r48 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(16);
    \u0275\u0275repeater(group_r48.paiements);
  }
}
function RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0)(1);
    \u0275\u0275elementStart(2, "tr", 87);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Template_tr_click_2_listener() {
      \u0275\u0275restoreView(_r45);
      const gKey_r46 = \u0275\u0275readContextLet(0);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleReglPartner(gKey_r46));
    });
    \u0275\u0275elementStart(3, "td")(4, "span", 88);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 89);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 90);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 86);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 91);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Template_td_click_13_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(14, RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Conditional_14_Template, 4, 0, "button", 97)(15, RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Conditional_15_Template, 4, 3, "button", 98);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Conditional_16_Template, 18, 0, "tr");
  }
  if (rf & 2) {
    const group_r48 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    const gKey_r53 = \u0275\u0275storeLet("guinness-" + group_r48.partnerId);
    \u0275\u0275advance();
    \u0275\u0275storeLet(group_r48.paiements.map(\u0275\u0275arrowFunction(7, arrowFn1, ctx)));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.expandedReglKeys.has(gKey_r53) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r48.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 9, group_r48.totalAmount, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r48.paiements.length);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((group_r48.paiements[0] == null ? null : group_r48.paiements[0].generatedInvoiceId) ? 14 : 15);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.expandedReglKeys.has(gKey_r53) ? 16 : -1);
  }
}
function RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "table", 84)(2, "thead")(3, "tr");
    \u0275\u0275element(4, "th", 85);
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 86);
    \u0275\u0275text(8, "Total (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 86);
    \u0275\u0275text(10, "R\xE8glements");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_For_14_Template, 17, 12, null, null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.reglGuinessGroups);
  }
}
function RistourneListComponent_Conditional_35_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RistourneListComponent_Conditional_35_Conditional_12_Conditional_0_Template, 6, 0, "div", 17)(1, RistourneListComponent_Conditional_35_Conditional_12_Conditional_1_Template, 6, 0, "div", 17)(2, RistourneListComponent_Conditional_35_Conditional_12_Conditional_2_Template, 15, 0, "div", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.loadingReglGuiness ? 0 : ctx_r1.reglGuinessGroups.length === 0 ? 1 : 2);
  }
}
function RistourneListComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, RistourneListComponent_Conditional_35_Conditional_0_Template, 4, 1, "div", 53);
    \u0275\u0275conditionalCreate(1, RistourneListComponent_Conditional_35_Conditional_1_Template, 4, 1, "div", 54);
    \u0275\u0275elementStart(2, "div", 95)(3, "button", 96);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_35_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reglSubTab = "brasseries");
    });
    \u0275\u0275elementStart(4, "span", 67);
    \u0275\u0275text(5, "local_bar");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Brasseries ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 96);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_35_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reglSubTab = "guinness");
    });
    \u0275\u0275elementStart(8, "span", 67);
    \u0275\u0275text(9, "sports_bar");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Guinness ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, RistourneListComponent_Conditional_35_Conditional_11_Template, 3, 1);
    \u0275\u0275conditionalCreate(12, RistourneListComponent_Conditional_35_Conditional_12_Template, 3, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.factureMsg ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.factureError ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.reglSubTab === "brasseries");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.reglSubTab === "guinness");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.reglSubTab === "brasseries" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.reglSubTab === "guinness" ? 12 : -1);
  }
}
function RistourneListComponent_Conditional_36_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "span", 12);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.rstError);
  }
}
function RistourneListComponent_Conditional_36_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r55 = ctx.$implicit;
    \u0275\u0275property("value", c_r55.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r55.name);
  }
}
function RistourneListComponent_Conditional_36_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r56 = ctx.$implicit;
    \u0275\u0275property("value", cat_r56.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r56.name);
  }
}
function RistourneListComponent_Conditional_36_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r57 = ctx.$implicit;
    \u0275\u0275property("value", t_r57.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r57.label);
  }
}
function RistourneListComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275listener("click.self", function RistourneListComponent_Conditional_36_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRstModal = false);
    });
    \u0275\u0275elementStart(1, "div", 103)(2, "div", 104)(3, "span", 12);
    \u0275\u0275text(4, "redeem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 105);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_36_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRstModal = false);
    });
    \u0275\u0275elementStart(8, "span", 12);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, RistourneListComponent_Conditional_36_Conditional_10_Template, 4, 1, "div", 106);
    \u0275\u0275elementStart(11, "div", 107)(12, "div", 108)(13, "div", 109)(14, "label");
    \u0275\u0275text(15, "Client ");
    \u0275\u0275elementStart(16, "span", 110);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 111);
    \u0275\u0275twoWayListener("ngModelChange", function RistourneListComponent_Conditional_36_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rstForm.partnerId, $event) || (ctx_r1.rstForm.partnerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 112);
    \u0275\u0275text(20, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, RistourneListComponent_Conditional_36_For_22_Template, 2, 2, "option", 112, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 109)(24, "label");
    \u0275\u0275text(25, "Cat\xE9gorie de produit ");
    \u0275\u0275elementStart(26, "span", 110);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "select", 111);
    \u0275\u0275twoWayListener("ngModelChange", function RistourneListComponent_Conditional_36_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rstForm.categoryId, $event) || (ctx_r1.rstForm.categoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "option", 112);
    \u0275\u0275text(30, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(31, RistourneListComponent_Conditional_36_For_32_Template, 2, 2, "option", 112, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 109)(34, "label");
    \u0275\u0275text(35, "Montant fixe / unit\xE9 (FCFA) ");
    \u0275\u0275elementStart(36, "span", 110);
    \u0275\u0275text(37, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "input", 113);
    \u0275\u0275twoWayListener("ngModelChange", function RistourneListComponent_Conditional_36_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rstForm.montantFixe, $event) || (ctx_r1.rstForm.montantFixe = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 109)(40, "label");
    \u0275\u0275text(41, "Type de calcul TTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 111);
    \u0275\u0275twoWayListener("ngModelChange", function RistourneListComponent_Conditional_36_Template_select_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rstForm.typeRistourne, $event) || (ctx_r1.rstForm.typeRistourne = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(43, RistourneListComponent_Conditional_36_For_44_Template, 2, 2, "option", 112, _forTrack3);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 114)(46, "button", 115);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_36_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRstModal = false);
    });
    \u0275\u0275text(47, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 116);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_36_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveRst());
    });
    \u0275\u0275elementStart(49, "span", 12);
    \u0275\u0275text(50, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " Enregistrer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.editingRst ? "Modifier ristourne" : "Nouvelle ristourne");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.rstError ? 10 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rstForm.partnerId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.clients);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rstForm.categoryId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rstForm.montantFixe);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rstForm.typeRistourne);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.TYPE_OPTS);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.savingRst);
  }
}
function RistourneListComponent_Conditional_37_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "span", 12);
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
function RistourneListComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275listener("click.self", function RistourneListComponent_Conditional_37_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showGuinessModal = false);
    });
    \u0275\u0275elementStart(1, "div", 117)(2, "div", 104)(3, "span", 12);
    \u0275\u0275text(4, "sports_bar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "G\xE9n\xE9rer ristournes Guinness");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 105);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_37_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showGuinessModal = false);
    });
    \u0275\u0275elementStart(8, "span", 12);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, RistourneListComponent_Conditional_37_Conditional_10_Template, 4, 1, "div", 106);
    \u0275\u0275elementStart(11, "div", 107)(12, "p", 118);
    \u0275\u0275text(13, " S\xE9lectionnez la p\xE9riode sur laquelle g\xE9n\xE9rer les r\xE8glements Guinness depuis toutes les factures de ventes valid\xE9es. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 108)(15, "div", 109)(16, "label");
    \u0275\u0275text(17, "Date de d\xE9but ");
    \u0275\u0275elementStart(18, "span", 110);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "input", 119);
    \u0275\u0275twoWayListener("ngModelChange", function RistourneListComponent_Conditional_37_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.guinessDateStart, $event) || (ctx_r1.guinessDateStart = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 109)(22, "label");
    \u0275\u0275text(23, "Date de fin ");
    \u0275\u0275elementStart(24, "span", 110);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "input", 119);
    \u0275\u0275twoWayListener("ngModelChange", function RistourneListComponent_Conditional_37_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.guinessDateEnd, $event) || (ctx_r1.guinessDateEnd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 114)(28, "button", 115);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_37_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showGuinessModal = false);
    });
    \u0275\u0275text(29, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 116);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_37_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r58);
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
function RistourneListComponent_Conditional_38_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275element(1, "div", 126);
    \u0275\u0275elementStart(2, "p", 127);
    \u0275\u0275text(3, "Importation en cours\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 128);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.importRows.length, " ligne(s) en cours de traitement");
  }
}
function RistourneListComponent_Conditional_38_For_29_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 130);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function RistourneListComponent_Conditional_38_For_29_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 131);
    \u0275\u0275text(1, "\u2717");
    \u0275\u0275elementEnd();
  }
}
function RistourneListComponent_Conditional_38_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 129);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 89);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 86);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275conditionalCreate(12, RistourneListComponent_Conditional_38_For_29_Conditional_12_Template, 2, 0, "span", 130)(13, RistourneListComponent_Conditional_38_For_29_Conditional_13_Template, 2, 0, "span", 131);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r60 = ctx.$implicit;
    const \u0275$index_1060_r61 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_1060_r61 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r60["Client"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r60["Cat\xE9gorie d'article"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r60["Type de ristourne"] || "HT brute");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r60["Montant de la ristourne"] || "0");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.getClientId(row_r60["Client"]) && ctx_r1.getCategoryId(row_r60["Cat\xE9gorie d'article"]) ? 12 : 13);
  }
}
function RistourneListComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_38_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r59);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275elementStart(1, "div", 121);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_38_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(2, RistourneListComponent_Conditional_38_Conditional_2_Template, 6, 1, "div", 122);
    \u0275\u0275elementStart(3, "div", 104)(4, "h2")(5, "span", 123);
    \u0275\u0275text(6, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 105);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_38_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r59);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 124)(12, "table", 41)(13, "thead")(14, "tr")(15, "th");
    \u0275\u0275text(16, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 86);
    \u0275\u0275text(24, "Montant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "R\xE9solu");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275repeaterCreate(28, RistourneListComponent_Conditional_38_For_29_Template, 14, 6, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 114)(31, "button", 115);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_38_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r59);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275text(32, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 125);
    \u0275\u0275listener("click", function RistourneListComponent_Conditional_38_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r59);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmImport());
    });
    \u0275\u0275elementStart(34, "span", 12);
    \u0275\u0275text(35, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.importLoading ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Aper\xE7u import ristournes (", ctx_r1.importRows.length, " ligne(s)) ");
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r1.importRows);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Importer (", ctx_r1.importRows.length, " lignes) ");
  }
}
var RST_HEADERS = ["Client", "Cat\xE9gorie d'article", "Type de ristourne", "Montant de la ristourne", "Ristourne TTC", "Actif"];
var RST_SAMPLE = ["Client ABC", "Bi\xE8res", "Brasserie", "261.21", "318.02", "OUI"];
var RistourneListComponent = class _RistourneListComponent {
  get clientGroups() {
    const map = /* @__PURE__ */ new Map();
    for (const r of this.ristournes) {
      const id = r.partnerId;
      if (!map.has(id))
        map.set(id, { partnerName: r.partnerName || "?", items: [] });
      map.get(id).items.push(r);
    }
    return Array.from(map.entries()).map(([partnerId, v]) => __spreadProps(__spreadValues({
      partnerId
    }, v), {
      nbBrasserie: v.items.filter((i) => i.typeRistourne === "brasserie").length,
      nbGuinness: v.items.filter((i) => i.typeRistourne === "guinness").length,
      nbAutre: v.items.filter((i) => !i.typeRistourne).length
    })).sort((a, b) => a.partnerName.localeCompare(b.partnerName));
  }
  toggleClient(id) {
    if (this.expandedClients.has(id))
      this.expandedClients.delete(id);
    else
      this.expandedClients.add(id);
  }
  expandAll() {
    this.clientGroups.forEach((g) => this.expandedClients.add(g.partnerId));
  }
  collapseAll() {
    this.expandedClients.clear();
  }
  constructor(svc, salesSvc, stockSvc, auth, router, notificationService) {
    this.svc = svc;
    this.salesSvc = salesSvc;
    this.stockSvc = stockSvc;
    this.auth = auth;
    this.router = router;
    this.notificationService = notificationService;
    this.showImportModal = false;
    this.importRows = [];
    this.importLoading = false;
    this.ristournes = [];
    this.clients = [];
    this.categories = [];
    this.loadingRst = false;
    this.showRstModal = false;
    this.editingRst = null;
    this.savingRst = false;
    this.rstForm = this.emptyRst();
    this.rstError = "";
    this.activeTab = "config";
    this.reglSubTab = "brasseries";
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
    this.reglBrasseriesGroups = [];
    this.reglGuinessGroups = [];
    this.loadingReglBrasseries = false;
    this.loadingReglGuiness = false;
    this.expandedReglKeys = /* @__PURE__ */ new Set();
    this.expandedReglQuarters = /* @__PURE__ */ new Set();
    this.generatingFacture = null;
    this.factureMsg = "";
    this.factureError = "";
    this.expandedClients = /* @__PURE__ */ new Set();
    this.TYPE_OPTS = [
      { value: "", label: "Autre (HT \xD7 1.1925)" },
      { value: "brasserie", label: "Brasserie (HT \xD7 (1 + pr\xE9compte% + 19.25%))" },
      { value: "guinness", label: "Guinness (HT \xD7 1.1925 \u2014 sans pr\xE9compte)" }
    ];
    this.QUARTERS = [
      { q: 1, label: "T1 (Jan\u2013Mar)" },
      { q: 2, label: "T2 (Avr\u2013Jun)" },
      { q: 3, label: "T3 (Jul\u2013Sep)" },
      { q: 4, label: "T4 (Oct\u2013D\xE9c)" }
    ];
  }
  ngOnInit() {
    this.salesSvc.getClients(this.companyId).subscribe((c) => this.clients = c);
    this.stockSvc.getCategories(this.companyId).subscribe((cats) => this.categories = cats);
    this.loadRistournes();
  }
  get companyId() {
    return this.auth.getCompanyId();
  }
  get currentYear() {
    return (/* @__PURE__ */ new Date()).getFullYear();
  }
  // ===== Config =====
  loadRistournes() {
    this.loadingRst = true;
    this.svc.getAll(this.companyId).subscribe({
      next: (r) => {
        this.ristournes = r;
        this.loadingRst = false;
      },
      error: () => this.loadingRst = false
    });
  }
  openNewRst() {
    this.editingRst = null;
    this.rstForm = this.emptyRst();
    this.rstError = "";
    this.showRstModal = true;
  }
  editRst(r) {
    this.editingRst = r;
    this.rstForm = __spreadValues({}, r);
    this.rstError = "";
    this.showRstModal = true;
  }
  saveRst() {
    if (!this.rstForm.partnerId || !this.rstForm.categoryId || !this.rstForm.montantFixe) {
      this.rstError = "Client, cat\xE9gorie et montant sont requis.";
      return;
    }
    this.savingRst = true;
    this.rstError = "";
    this.svc.save(__spreadProps(__spreadValues({}, this.rstForm), { companyId: this.companyId })).subscribe({
      next: () => {
        this.showRstModal = false;
        this.loadRistournes();
        this.savingRst = false;
      },
      error: () => {
        this.rstError = "Erreur lors de la sauvegarde.";
        this.savingRst = false;
      }
    });
  }
  deleteRst(id) {
    if (!confirm("Supprimer cette ristourne ?"))
      return;
    this.svc.delete(id).subscribe({
      next: () => this.loadRistournes(),
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
    this.quarterMsg = "";
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
    this.quarterMsg = failed === 0 ? `${done} r\xE8glement(s) confirm\xE9(s).` : "";
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
  get guinessByClient() {
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
    this.guinessMsg = "";
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
    this.guinessMsg = failed === 0 ? `${done} r\xE8glement(s) confirm\xE9(s).` : "";
    this.loadGuiness();
  }
  // ===== Règlements tab =====
  loadReglements() {
    this.loadReglBrasseries();
    this.loadReglGuiness();
  }
  loadReglBrasseries() {
    this.loadingReglBrasseries = true;
    this.svc.getGroupedPaiements(this.companyId, "brasserie").subscribe({
      next: (groups) => {
        this.reglBrasseriesGroups = this.groupPartnersByQuarter(groups);
        this.loadingReglBrasseries = false;
      },
      error: () => this.loadingReglBrasseries = false
    });
  }
  loadReglGuiness() {
    this.loadingReglGuiness = true;
    this.svc.getGroupedPaiements(this.companyId, "guinness").subscribe({
      next: (groups) => {
        this.reglGuinessGroups = groups;
        this.loadingReglGuiness = false;
      },
      error: () => this.loadingReglGuiness = false
    });
  }
  toggleReglQuarter(key) {
    this.expandedReglQuarters.has(key) ? this.expandedReglQuarters.delete(key) : this.expandedReglQuarters.add(key);
  }
  toggleReglPartner(key) {
    this.expandedReglKeys.has(key) ? this.expandedReglKeys.delete(key) : this.expandedReglKeys.add(key);
  }
  generateFactureForGroup(ids, key) {
    this.generatingFacture = key;
    this.factureMsg = "";
    this.factureError = "";
    this.svc.generateFacture(ids, this.companyId).subscribe({
      next: (res) => {
        this.generatingFacture = null;
        this.factureMsg = `Avoir ${res.invoiceName} g\xE9n\xE9r\xE9 avec succ\xE8s.`;
        this.loadReglements();
      },
      error: (err) => {
        this.generatingFacture = null;
        this.factureError = err?.error?.message ?? "Erreur lors de la g\xE9n\xE9ration.";
      }
    });
  }
  openFacture(id) {
    this.router.navigate(["/sales/invoices", id]);
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
  groupPartnersByQuarter(groups) {
    const allPaiements = groups.flatMap((g) => g.paiements);
    return this.groupByQuarter(allPaiements);
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
    if (tab === "reglements")
      this.loadReglements();
  }
  // ===== Import Excel =====
  downloadTemplate() {
    downloadExcelTemplate(RST_HEADERS, RST_SAMPLE, "modele_ristournes.xlsx");
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
        this.importRows = rows.filter((r) => r["Client"]);
        if (this.importRows.length === 0) {
          this.rstError = 'Aucune ligne valide (colonne "Client" requise)';
          this.importLoading = false;
          return;
        }
        this.showImportModal = true;
      } catch (e) {
        this.rstError = "Erreur : " + e.message;
      }
      this.importLoading = false;
    });
  }
  closeImportModal() {
    this.showImportModal = false;
    this.importRows = [];
  }
  norm(s) {
    return (s || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ");
  }
  getClientId(name) {
    if (!name)
      return void 0;
    const n = this.norm(name);
    return this.clients.find((c) => this.norm(c.name ?? "") === n)?.id;
  }
  getCategoryId(name) {
    if (!name)
      return void 0;
    const n = this.norm(name);
    return this.categories.find((c) => this.norm(c.name ?? "") === n)?.id;
  }
  normalizeType(raw) {
    const v = this.norm(raw);
    if (v === "brasserie")
      return "brasserie";
    if (v === "guinness")
      return "guinness";
    return "";
  }
  confirmImport() {
    this.importLoading = true;
    const rows = this.importRows.map((row) => ({
      clientName: String(row["Client"] || ""),
      categoryName: String(row["Cat\xE9gorie d'article"] || ""),
      typeRistourne: this.normalizeType(String(row["Type de ristourne"] || "")),
      montantFixe: parseFloat(row["Montant de la ristourne"]) || 0
    })).filter((r) => r.clientName);
    this.svc.importBatch(rows, this.companyId).subscribe({
      next: (saved) => {
        this.importLoading = false;
        this.closeImportModal();
        this.loadRistournes();
        const skipped = rows.length - saved.length;
        const msg = [`Import termin\xE9 : ${saved.length} ristourne(s) sauvegard\xE9e(s)`];
        if (skipped > 0)
          msg.push(`${skipped} ligne(s) ignor\xE9e(s) (client ou cat\xE9gorie introuvable)`);
        alert(msg.join("\n"));
      },
      error: (err) => {
        this.importLoading = false;
        alert("Erreur lors de l'import : " + (err?.error?.message ?? err.message ?? "Erreur serveur"));
      }
    });
  }
  emptyRst() {
    return { partnerId: 0, categoryId: 0, montantFixe: 0, typeRistourne: "", companyId: this.companyId };
  }
  static {
    this.\u0275fac = function RistourneListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RistourneListComponent)(\u0275\u0275directiveInject(RistourneService), \u0275\u0275directiveInject(SalesService), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RistourneListComponent, selectors: [["app-ristourne-list"]], viewQuery: function RistourneListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.importInput = _t.first);
      }
    }, decls: 39, vars: 17, consts: [["importInput", ""], [1, "page-container"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change"], [1, "page-header"], [1, "header-left"], [1, "material-icons", "page-icon"], [1, "page-title"], [1, "page-subtitle"], [1, "header-right", 2, "display", "flex", "gap", "8px", "align-items", "center"], [1, "btn-new"], [1, "tabs-bar"], [1, "tab-btn", 3, "click"], [1, "material-icons"], [1, "modal-overlay"], [1, "btn-outline", 3, "click"], [1, "btn-import", 3, "click", "disabled"], [1, "btn-new", 3, "click"], [1, "card"], [1, "loading-state"], [1, "material-icons", "spin"], [1, "empty-state"], [1, "accordion-toolbar"], [1, "acc-count"], [1, "acc-actions"], [1, "btn-acc-ctrl", 3, "click"], [1, "accordion"], [1, "acc-item", 3, "open"], [1, "acc-item"], [1, "acc-header", 3, "click"], [1, "acc-header-left"], [1, "acc-avatar"], [1, "acc-name-block"], [1, "acc-client-name"], [1, "acc-badge-row"], [1, "type-chip", "chip-brasserie"], [1, "type-chip", "chip-guinness"], [1, "type-chip", "chip-ht"], [1, "acc-header-right"], [1, "acc-total-hint"], [1, "material-icons", "acc-chevron"], [1, "acc-body"], [1, "rst-table"], [1, "r"], [1, "bold"], [1, "badge", "badge-brasserie"], [1, "badge", "badge-guinness"], [1, "badge", "badge-ht"], [1, "r", "mono"], [1, "r", "mono", "ttc-val"], [1, "active-dot"], [1, "actions-cell"], [1, "btn-icon", 3, "click"], [1, "btn-icon", "danger", 3, "click"], [1, "alert-success"], [1, "alert-error"], [1, "quarter-card"], [1, "quarter-header", 3, "click"], [1, "quarter-title"], [1, "material-icons", "quarter-icon"], [1, "quarter-sub"], [1, "quarter-actions", 3, "click"], [1, "btn-generate", 3, "disabled"], [1, "material-icons", "expand-icon"], [1, "quarter-body"], [1, "badge-count"], [1, "quarter-total"], [1, "btn-generate", 3, "click", "disabled"], [1, "material-icons", 2, "font-size", "16px"], [1, "empty-quarter"], [1, "partner-row", 3, "click"], [1, "material-icons", 2, "font-size", "16px", "color", "#666"], [1, "partner-name"], [1, "partner-count"], [1, "partner-total"], [1, "partner-actions"], [1, "partner-details"], [1, "partner-actions", 3, "click"], [1, "btn-confirm-all", 3, "click"], [1, "material-icons", 2, "font-size", "14px"], [1, "lines-table"], [1, "ar"], [1, "ar", "font-mono"], [1, "badge", 3, "ngClass"], [1, "btn-action", "confirm", 3, "click"], [1, "data-table"], [2, "width", "32px"], [1, "text-right"], [1, "group-row", 2, "cursor", "pointer", 3, "click"], [1, "material-icons", 2, "font-size", "18px", "color", "#666"], [1, "font-bold"], [1, "text-right", "font-mono", "font-bold", 2, "color", "#017E84"], [1, "actions-cell", 3, "click"], [1, "btn-confirm-all"], ["colspan", "5", 2, "padding", "0 0 8px 40px", "background", "#f9fafb"], [1, "lines-table", 2, "width", "100%", "margin-top", "4px"], [1, "sub-tabs-bar"], [1, "sub-tab-btn", 3, "click"], [1, "btn-action", "confirm"], [1, "btn-action", "confirm", 3, "disabled"], [1, "btn-action", "confirm", 3, "click", "disabled"], [2, "color", "#017E84", "cursor", "pointer", "text-decoration", "underline"], [2, "color", "#017E84", "cursor", "pointer", "text-decoration", "underline", 3, "click"], [1, "modal-overlay", 3, "click.self"], [1, "modal-box"], [1, "modal-header"], [1, "btn-close-modal", 3, "click"], [1, "modal-error"], [1, "modal-body"], [1, "form-grid"], [1, "form-group"], [1, "req"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "number", "min", "0", "step", "1", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [1, "modal-box", 2, "max-width", "460px"], [2, "margin-bottom", "16px", "color", "#555", "font-size", "14px"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 2, "max-width", "750px", "position", "relative", 3, "click"], [2, "position", "absolute", "inset", "0", "background", "rgba(255,255,255,0.9)", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "z-index", "10", "border-radius", "inherit"], [1, "material-icons", 2, "vertical-align", "middle", "color", "#017E84"], [2, "overflow-x", "auto", "max-height", "50vh"], [1, "btn-save", 3, "click"], [1, "spinner"], [2, "margin-top", "14px", "color", "#017E84", "font-weight", "600"], [2, "font-size", "12px", "color", "#6c757d", "margin-top", "4px"], [1, "text-muted"], [2, "color", "#198754"], [2, "color", "#dc3545"]], template: function RistourneListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "input", 2, 0);
        \u0275\u0275listener("change", function RistourneListComponent_Template_input_change_1_listener($event) {
          return ctx.onImportFileChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6, "redeem");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div")(8, "h1", 6);
        \u0275\u0275text(9, "Ristournes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 7);
        \u0275\u0275text(11, "Configuration et r\xE8glements des ristournes clients");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275conditionalCreate(13, RistourneListComponent_Conditional_13_Template, 12, 2);
        \u0275\u0275conditionalCreate(14, RistourneListComponent_Conditional_14_Template, 4, 0, "button", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
        \u0275\u0275listener("click", function RistourneListComponent_Template_button_click_16_listener() {
          return ctx.onTabChange("config");
        });
        \u0275\u0275elementStart(17, "span", 12);
        \u0275\u0275text(18, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " Configuration ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 11);
        \u0275\u0275listener("click", function RistourneListComponent_Template_button_click_20_listener() {
          return ctx.onTabChange("brasseries");
        });
        \u0275\u0275elementStart(21, "span", 12);
        \u0275\u0275text(22, "local_bar");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Brasseries ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 11);
        \u0275\u0275listener("click", function RistourneListComponent_Template_button_click_24_listener() {
          return ctx.onTabChange("guinness");
        });
        \u0275\u0275elementStart(25, "span", 12);
        \u0275\u0275text(26, "sports_bar");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " Guinness ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 11);
        \u0275\u0275listener("click", function RistourneListComponent_Template_button_click_28_listener() {
          return ctx.onTabChange("reglements");
        });
        \u0275\u0275elementStart(29, "span", 12);
        \u0275\u0275text(30, "account_balance_wallet");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, " R\xE8glements ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(32, RistourneListComponent_Conditional_32_Template, 3, 1);
        \u0275\u0275conditionalCreate(33, RistourneListComponent_Conditional_33_Template, 4, 3);
        \u0275\u0275conditionalCreate(34, RistourneListComponent_Conditional_34_Template, 5, 3);
        \u0275\u0275conditionalCreate(35, RistourneListComponent_Conditional_35_Template, 13, 8);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(36, RistourneListComponent_Conditional_36_Template, 52, 9, "div", 13);
        \u0275\u0275conditionalCreate(37, RistourneListComponent_Conditional_37_Template, 34, 6, "div", 13);
        \u0275\u0275conditionalCreate(38, RistourneListComponent_Conditional_38_Template, 37, 3, "div", 13);
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
        \u0275\u0275classProp("active", ctx.activeTab === "reglements");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.activeTab === "config" ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "brasseries" ? 33 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "guinness" ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "reglements" ? 35 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showRstModal ? 36 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showGuinessModal ? 37 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showImportModal ? 38 : -1);
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header[_ngcontent-%COMP%]   .page-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: rgba(139, 92, 246, 0.9);\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 2px 0 0;\n}\n.tabs-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 0;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  background: none;\n  font-size: 14px;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.15s;\n}\n.tab-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: rgba(139, 92, 246, 0.9);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: rgba(139, 92, 246, 0.9);\n  border-bottom-color: rgba(139, 92, 246, 0.9);\n  font-weight: 600;\n}\n.btn-new[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-new[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-new[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, #7C3AED 80%, black);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-import[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--accent-light);\n  color: var(--accent);\n  border: 1px solid #b2dfdf;\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-import[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-import[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.btn-import[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.sub-tabs-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 12px;\n}\n.sub-tab-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 13px;\n  color: var(--text-muted);\n  cursor: pointer;\n  border-radius: 6px;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.sub-tab-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.sub-tab-btn.active[_ngcontent-%COMP%] {\n  background: #7C3AED;\n  color: white;\n  border-color: rgba(139, 92, 246, 0.9);\n  font-weight: 600;\n}\n.quarter-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 12px;\n  overflow: hidden;\n}\n.quarter-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  cursor: pointer;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border-light);\n}\n.quarter-header[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.quarter-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.quarter-title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-primary);\n}\n.quarter-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: rgba(139, 92, 246, 0.9);\n}\n.quarter-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.quarter-total[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--accent);\n  font-family: "Roboto Mono", monospace;\n}\n.quarter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.expand-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--text-muted);\n}\n.badge-count[_ngcontent-%COMP%] {\n  background: #e9e3f8;\n  color: rgba(139, 92, 246, 0.9);\n  border-radius: 20px;\n  padding: 2px 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.quarter-body[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.empty-quarter[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.partner-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 24px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-light);\n}\n.partner-row[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.partner-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 600;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.partner-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.partner-total[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--accent);\n  margin-left: auto;\n}\n.partner-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.partner-details[_ngcontent-%COMP%] {\n  padding: 0 24px 12px 48px;\n  background: var(--bg-elevated);\n}\n.btn-generate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  padding: 7px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: color-mix(in srgb, #7C3AED 80%, black);\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-confirm-all[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #e8f5e9;\n  color: #2e7d32;\n  border: 1px solid #a5d6a7;\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-confirm-all[_ngcontent-%COMP%]:hover {\n  background: var(--success-bg);\n}\n.alert-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: var(--success-bg);\n  border-radius: 6px;\n  color: var(--success);\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.alert-success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: var(--danger-bg);\n  border-radius: 6px;\n  color: #991b1b;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--border);\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.rst-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.rst-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.rst-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n}\n.rst-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.ref-col[_ngcontent-%COMP%] {\n  color: rgba(139, 92, 246, 0.9);\n  font-family: monospace;\n  font-weight: 600;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px 6px;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.danger[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-action.confirm[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.btn-action.confirm[_ngcontent-%COMP%]:hover {\n  background: var(--success-bg);\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge.badge-draft[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.badge.badge-confirmed[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-done[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge.badge-brasserie[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge.badge-guinness[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #1b5e20;\n}\n.badge.badge-ht[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  width: 100%;\n  max-width: 560px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n}\n.modal-box.modal-wide[_ngcontent-%COMP%] {\n  max-width: 860px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 24px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: rgba(139, 92, 246, 0.9);\n  font-size: 22px;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-close-modal[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  padding: 4px;\n}\n.btn-close-modal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-close-modal[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.modal-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 24px 0;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-radius: 6px;\n  font-size: 13px;\n}\n.modal-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid #f0f0f0;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 22px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-save[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: color-mix(in srgb, #7C3AED 80%, black);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: rgba(139, 92, 246, 0.9);\n  box-shadow: 0 0 0 3px rgba(111, 66, 193, 0.12);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.lines-section[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.lines-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.lines-header[_ngcontent-%COMP%]   .lines-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.btn-add-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: 1px dashed #6f42c1;\n  color: rgba(139, 92, 246, 0.9);\n  padding: 5px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-add-line[_ngcontent-%COMP%]:hover {\n  background: rgba(111, 66, 193, 0.08);\n}\n.lines-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: var(--bg-elevated);\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  border-bottom: 2px solid var(--border);\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 5px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.lines-table[_ngcontent-%COMP%]   .ln[_ngcontent-%COMP%] {\n  width: 24px;\n  text-align: center;\n  font-size: 11px;\n  color: var(--text-muted);\n  font-weight: 700;\n}\n.lines-table[_ngcontent-%COMP%]   .ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.lines-table[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%] {\n  font-family: monospace;\n  color: var(--text-secondary);\n}\n.inp[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  box-sizing: border-box;\n}\n.inp[_ngcontent-%COMP%]:hover {\n  border-color: var(--border);\n  background: var(--bg-surface);\n}\n.inp[_ngcontent-%COMP%]:focus {\n  border-color: rgba(139, 92, 246, 0.9);\n  background: var(--bg-surface);\n}\n.inp.ar[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.btn-del[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--border);\n}\n.btn-del[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-del[_ngcontent-%COMP%]:hover {\n  color: var(--danger);\n}\n.pmt-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 0 0;\n  border-top: 1px solid #f0f0f0;\n  margin-top: 8px;\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.pmt-total[_ngcontent-%COMP%]   .total-val[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: rgba(139, 92, 246, 0.9);\n  font-family: monospace;\n}\n.accordion-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.acc-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.acc-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-acc-ctrl[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 12px;\n  border-radius: 7px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-acc-ctrl[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-acc-ctrl[_ngcontent-%COMP%]:hover {\n  border-color: rgba(139, 92, 246, 0.9);\n  color: rgba(139, 92, 246, 0.9);\n  background: var(--bg-hover);\n}\n.accordion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.acc-item[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  border: 1.5px solid var(--border);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.acc-item.open[_ngcontent-%COMP%] {\n  border-color: #d8b4fe;\n  box-shadow: 0 2px 10px rgba(111, 66, 193, 0.1);\n}\n.acc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background 0.12s;\n}\n.acc-header[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.acc-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n}\n.acc-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #7C3AED;\n  color: white;\n  font-size: 15px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.acc-name-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  min-width: 0;\n}\n.acc-client-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.acc-badge-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.type-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1px 9px;\n  border-radius: 10px;\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.type-chip.chip-brasserie[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.type-chip.chip-guinness[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.type-chip.chip-ht[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: #475569;\n}\n.acc-header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.acc-total-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.acc-chevron[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--text-muted);\n  transition: transform 0.2s;\n}\n.acc-item.open[_ngcontent-%COMP%]   .acc-chevron[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  color: rgba(139, 92, 246, 0.9);\n}\n.acc-body[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-light);\n}\n.rst-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.rst-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-hover);\n  border-bottom: 1px solid #ede9fe;\n  text-align: left;\n}\n.rst-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid #f8f5ff;\n  vertical-align: middle;\n}\n.rst-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.rst-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.rst-table[_ngcontent-%COMP%]   .r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.rst-table[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 12px;\n}\n.rst-table[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.rst-table[_ngcontent-%COMP%]   .ttc-val[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-weight: 700;\n}\n.active-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: #e5e7eb;\n}\n.active-dot.on[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n/*# sourceMappingURL=ristourne-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RistourneListComponent, [{
    type: Component,
    args: [{ selector: "app-ristourne-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <input #importInput type="file" accept=".xlsx,.xls" style="display:none" (change)="onImportFileChange($event)" />

  <!-- Header -->
  <div class="page-header">
    <div class="header-left">
      <span class="material-icons page-icon">redeem</span>
      <div>
        <h1 class="page-title">Ristournes</h1>
        <p class="page-subtitle">Configuration et r\xE8glements des ristournes clients</p>
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
        <button class="btn-new" (click)="openNewRst()">
          <span class="material-icons">add</span> Nouvelle ristourne
        </button>
      }
      @if (activeTab === 'guinness') {
        <button class="btn-new" (click)="openGuinessModal()">
          <span class="material-icons">autorenew</span> G\xE9n\xE9rer ristournes Guinness
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
    <button class="tab-btn" [class.active]="activeTab === 'reglements'" (click)="onTabChange('reglements')">
      <span class="material-icons">account_balance_wallet</span> R\xE8glements
    </button>
  </div>

  <!-- ===================== CONFIG TAB ===================== -->
  @if (activeTab === 'config') {

    @if (loadingRst) {
      <div class="card"><div class="loading-state"><span class="material-icons spin">sync</span><p>Chargement\u2026</p></div></div>

    } @else if (ristournes.length === 0) {
      <div class="card">
        <div class="empty-state">
          <span class="material-icons">redeem</span>
          <p>Aucune ristourne configur\xE9e.</p>
          <button class="btn-new" (click)="openNewRst()"><span class="material-icons">add</span> Ajouter</button>
        </div>
      </div>

    } @else {
      <!-- Barre outils accord\xE9on -->
      <div class="accordion-toolbar">
        <span class="acc-count">{{ clientGroups.length }} client{{ clientGroups.length > 1 ? 's' : '' }} \xB7 {{ ristournes.length }} ristourne{{ ristournes.length > 1 ? 's' : '' }}</span>
        <div class="acc-actions">
          <button class="btn-acc-ctrl" (click)="expandAll()">
            <span class="material-icons">unfold_more</span> Tout d\xE9plier
          </button>
          <button class="btn-acc-ctrl" (click)="collapseAll()">
            <span class="material-icons">unfold_less</span> Tout replier
          </button>
        </div>
      </div>

      <!-- Accord\xE9on par client -->
      <div class="accordion">
        @for (group of clientGroups; track group.partnerId) {
          <div class="acc-item" [class.open]="expandedClients.has(group.partnerId)">

            <!-- En-t\xEAte client -->
            <div class="acc-header" (click)="toggleClient(group.partnerId)">
              <div class="acc-header-left">
                <div class="acc-avatar">{{ group.partnerName.charAt(0).toUpperCase() }}</div>
                <div class="acc-name-block">
                  <span class="acc-client-name">{{ group.partnerName }}</span>
                  <span class="acc-badge-row">
                    @if (group.nbBrasserie > 0) {
                      <span class="type-chip chip-brasserie">{{ group.nbBrasserie }} Brasserie</span>
                    }
                    @if (group.nbGuinness > 0) {
                      <span class="type-chip chip-guinness">{{ group.nbGuinness }} Guinness</span>
                    }
                    @if (group.nbAutre > 0) {
                      <span class="type-chip chip-ht">{{ group.nbAutre }} Autre</span>
                    }
                  </span>
                </div>
              </div>
              <div class="acc-header-right">
                <span class="acc-total-hint">{{ group.items.length }} ligne{{ group.items.length > 1 ? 's' : '' }}</span>
                <span class="material-icons acc-chevron">
                  {{ expandedClients.has(group.partnerId) ? 'expand_less' : 'expand_more' }}
                </span>
              </div>
            </div>

            <!-- Contenu d\xE9pli\xE9 -->
            @if (expandedClients.has(group.partnerId)) {
              <div class="acc-body">
                <table class="rst-table">
                  <thead>
                    <tr>
                      <th>Cat\xE9gorie</th>
                      <th>Type</th>
                      <th class="r">Montant HT / u</th>
                      <th class="r">TTC / u</th>
                      <th class="r">Actif</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    @for (r of group.items; track r.id) {
                      <tr>
                        <td class="bold">{{ r.categoryName }}</td>
                        <td>
                          @if (r.typeRistourne === 'brasserie') {
                            <span class="badge badge-brasserie">Brasserie</span>
                          } @else if (r.typeRistourne === 'guinness') {
                            <span class="badge badge-guinness">Guinness</span>
                          } @else {
                            <span class="badge badge-ht">Autre</span>
                          }
                        </td>
                        <td class="r mono">{{ r.montantFixe | number:'1.0-2' }}</td>
                        <td class="r mono ttc-val">{{ r.montantTTCUnitaire | number:'1.0-2' }}</td>
                        <td class="r">
                          <span class="active-dot" [class.on]="r.active !== false"></span>
                        </td>
                        <td class="actions-cell">
                          <button class="btn-icon" (click)="editRst(r); $event.stopPropagation()">
                            <span class="material-icons">edit</span>
                          </button>
                          <button class="btn-icon danger" (click)="deleteRst(r.id!); $event.stopPropagation()">
                            <span class="material-icons">delete</span>
                          </button>
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            }

          </div>
        }
      </div>
    }
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
                <span class="badge-count">{{ qg.partners.length }} client(s)</span>
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
                  {{ generatingQuarter === qKey ? 'G\xE9n\xE9ration\u2026' : 'G\xE9n\xE9rer ristournes' }}
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
    } @else if (guinessByClient.length === 0) {
      <div class="card">
        <div class="empty-state">
          <span class="material-icons">sports_bar</span>
          <p>Aucun r\xE8glement Guinness. Utilisez le bouton "G\xE9n\xE9rer ristournes Guinness".</p>
        </div>
      </div>
    } @else {
      <div class="card">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width:32px"></th>
              <th>Client</th>
              <th class="text-right">Total (FCFA)</th>
              <th class="text-right">R\xE8glements</th>
            </tr>
          </thead>
          <tbody>
            @for (pg of guinessByClient; track pg.partnerId) {
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

  <!-- ===================== R\xC8GLEMENTS TAB ===================== -->
  @if (activeTab === 'reglements') {
    @if (factureMsg) {
      <div class="alert-success"><span class="material-icons">check_circle</span> {{ factureMsg }}</div>
    }
    @if (factureError) {
      <div class="alert-error"><span class="material-icons">error</span> {{ factureError }}</div>
    }

    <!-- Sub-tabs -->
    <div class="sub-tabs-bar">
      <button class="sub-tab-btn" [class.active]="reglSubTab === 'brasseries'" (click)="reglSubTab = 'brasseries'">
        <span class="material-icons" style="font-size:16px">local_bar</span> Brasseries
      </button>
      <button class="sub-tab-btn" [class.active]="reglSubTab === 'guinness'" (click)="reglSubTab = 'guinness'">
        <span class="material-icons" style="font-size:16px">sports_bar</span> Guinness
      </button>
    </div>

    <!-- R\xE8glements Brasseries : par trimestre -->
    @if (reglSubTab === 'brasseries') {
      @if (loadingReglBrasseries) {
        <div class="card"><div class="loading-state"><span class="material-icons spin">sync</span><p>Chargement\u2026</p></div></div>
      } @else if (reglBrasseriesGroups.length === 0) {
        <div class="card">
          <div class="empty-state">
            <span class="material-icons">account_balance_wallet</span>
            <p>Aucun r\xE8glement Brasseries confirm\xE9 \xE0 r\xE9gler.</p>
          </div>
        </div>
      } @else {
        @for (qg of reglBrasseriesGroups; track qg.quarter) {
          @let qKey = 'Q' + qg.quarter + '-' + qg.year;
          <div class="quarter-card">
            <div class="quarter-header" (click)="toggleReglQuarter(qKey)">
              <div class="quarter-title">
                <span class="material-icons quarter-icon">calendar_today</span>
                <strong>{{ qg.label }}</strong>
                <span class="badge-count">{{ qg.partners.length }} client(s)</span>
                <span class="quarter-total">{{ qg.totalAmount | number:'1.0-2' }} FCFA</span>
              </div>
              <span class="material-icons expand-icon">
                {{ expandedReglQuarters.has(qKey) ? 'expand_less' : 'expand_more' }}
              </span>
            </div>

            @if (expandedReglQuarters.has(qKey)) {
              <div class="quarter-body">
                @for (pg of qg.partners; track pg.partnerId) {
                  @let partnerKey = qKey + '-' + pg.partnerId;
                  @let pIds = pg.paiements.map(p => p.id!);
                  @let hasGenerated = pg.paiements[0]?.generatedInvoiceId;
                  <div class="partner-row" (click)="toggleReglPartner(partnerKey)">
                    <span class="material-icons" style="font-size:16px;color:#666">
                      {{ expandedReglKeys.has(partnerKey) ? 'expand_less' : 'expand_more' }}
                    </span>
                    <span class="partner-name">{{ pg.partnerName }}</span>
                    <span class="partner-count">{{ pg.paiements.length }} r\xE8glement(s)</span>
                    <span class="partner-total">{{ pg.totalAmount | number:'1.0-2' }} FCFA</span>
                    <span class="partner-actions" (click)="$event.stopPropagation()">
                      @if (hasGenerated) {
                        <button class="btn-action confirm" (click)="openFacture(hasGenerated!)">
                          <span class="material-icons" style="font-size:14px">open_in_new</span> Voir avoir
                        </button>
                      } @else {
                        <button class="btn-action confirm"
                          [disabled]="generatingFacture === partnerKey"
                          (click)="generateFactureForGroup(pIds, partnerKey)">
                          <span class="material-icons" style="font-size:14px">
                            {{ generatingFacture === partnerKey ? 'hourglass_empty' : 'payments' }}
                          </span>
                          {{ generatingFacture === partnerKey ? 'G\xE9n\xE9ration\u2026' : 'Payer' }}
                        </button>
                      }
                    </span>
                  </div>
                  @if (expandedReglKeys.has(partnerKey)) {
                    <div class="partner-details">
                      <table class="lines-table">
                        <thead>
                          <tr>
                            <th>R\xE9f\xE9rence</th>
                            <th>Facture source</th>
                            <th>Date</th>
                            <th class="ar">Montant TTC</th>
                            <th>Avoir g\xE9n\xE9r\xE9</th>
                          </tr>
                        </thead>
                        <tbody>
                          @for (p of pg.paiements; track p.id) {
                            <tr>
                              <td>{{ p.name }}</td>
                              <td>{{ p.invoiceName ?? '\u2014' }}</td>
                              <td>{{ p.date | date:'dd/MM/yyyy' }}</td>
                              <td class="ar font-mono">{{ p.totalAmount | number:'1.0-2' }}</td>
                              <td>
                                @if (p.generatedInvoiceId) {
                                  <a style="color:#017E84;cursor:pointer;text-decoration:underline"
                                    (click)="openFacture(p.generatedInvoiceId!)">{{ p.generatedInvoiceName }}</a>
                                } @else { \u2014 }
                              </td>
                            </tr>
                          }
                        </tbody>
                      </table>
                    </div>
                  }
                }
              </div>
            }
          </div>
        }
      }
    }

    <!-- R\xE8glements Guinness : par client -->
    @if (reglSubTab === 'guinness') {
      @if (loadingReglGuiness) {
        <div class="card"><div class="loading-state"><span class="material-icons spin">sync</span><p>Chargement\u2026</p></div></div>
      } @else if (reglGuinessGroups.length === 0) {
        <div class="card">
          <div class="empty-state">
            <span class="material-icons">sports_bar</span>
            <p>Aucun r\xE8glement Guinness confirm\xE9 \xE0 r\xE9gler.</p>
          </div>
        </div>
      } @else {
        <div class="card">
          <table class="data-table">
            <thead>
              <tr>
                <th style="width:32px"></th>
                <th>Client</th>
                <th class="text-right">Total (FCFA)</th>
                <th class="text-right">R\xE8glements</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              @for (group of reglGuinessGroups; track group.partnerId) {
                @let gKey = 'guinness-' + group.partnerId;
                @let gIds = group.paiements.map(p => p.id!);
                <tr class="group-row" (click)="toggleReglPartner(gKey)" style="cursor:pointer">
                  <td>
                    <span class="material-icons" style="font-size:18px;color:#666">
                      {{ expandedReglKeys.has(gKey) ? 'expand_less' : 'expand_more' }}
                    </span>
                  </td>
                  <td class="font-bold">{{ group.partnerName }}</td>
                  <td class="text-right font-mono font-bold" style="color:#017E84">{{ group.totalAmount | number:'1.0-2' }}</td>
                  <td class="text-right">{{ group.paiements.length }}</td>
                  <td class="actions-cell" (click)="$event.stopPropagation()">
                    @if (group.paiements[0]?.generatedInvoiceId) {
                      <button class="btn-action confirm" (click)="openFacture(group.paiements[0].generatedInvoiceId!)">
                        <span class="material-icons" style="font-size:16px">open_in_new</span> Voir avoir
                      </button>
                    } @else {
                      <button class="btn-action confirm"
                        [disabled]="generatingFacture === gKey"
                        (click)="generateFactureForGroup(gIds, gKey)">
                        <span class="material-icons" style="font-size:16px">
                          {{ generatingFacture === gKey ? 'hourglass_empty' : 'payments' }}
                        </span>
                        {{ generatingFacture === gKey ? 'G\xE9n\xE9ration\u2026' : 'Payer' }}
                      </button>
                    }
                  </td>
                </tr>
                @if (expandedReglKeys.has(gKey)) {
                  <tr>
                    <td colspan="5" style="padding:0 0 8px 40px;background:#f9fafb">
                      <table class="lines-table" style="width:100%;margin-top:4px">
                        <thead>
                          <tr>
                            <th>R\xE9f\xE9rence</th>
                            <th>Facture source</th>
                            <th>Date</th>
                            <th class="ar">Montant TTC</th>
                            <th>Avoir g\xE9n\xE9r\xE9</th>
                          </tr>
                        </thead>
                        <tbody>
                          @for (p of group.paiements; track p.id) {
                            <tr>
                              <td>{{ p.name }}</td>
                              <td>{{ p.invoiceName ?? '\u2014' }}</td>
                              <td>{{ p.date | date:'dd/MM/yyyy' }}</td>
                              <td class="ar font-mono">{{ p.totalAmount | number:'1.0-2' }}</td>
                              <td>
                                @if (p.generatedInvoiceId) {
                                  <a style="color:#017E84;cursor:pointer;text-decoration:underline"
                                    (click)="openFacture(p.generatedInvoiceId!)">{{ p.generatedInvoiceName }}</a>
                                } @else { \u2014 }
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
  }
</div>

<!-- ===================== RISTOURNE MODAL ===================== -->
@if (showRstModal) {
  <div class="modal-overlay" (click.self)="showRstModal = false">
    <div class="modal-box">
      <div class="modal-header">
        <span class="material-icons">redeem</span>
        <h2>{{ editingRst ? 'Modifier ristourne' : 'Nouvelle ristourne' }}</h2>
        <button class="btn-close-modal" (click)="showRstModal = false"><span class="material-icons">close</span></button>
      </div>
      @if (rstError) {
        <div class="modal-error"><span class="material-icons">error</span>{{ rstError }}</div>
      }
      <div class="modal-body">
        <div class="form-grid">
          <div class="form-group">
            <label>Client <span class="req">*</span></label>
            <select class="form-control" [(ngModel)]="rstForm.partnerId">
              <option [value]="0">-- S\xE9lectionner --</option>
              @for (c of clients; track c.id) {
                <option [value]="c.id">{{ c.name }}</option>
              }
            </select>
          </div>
          <div class="form-group">
            <label>Cat\xE9gorie de produit <span class="req">*</span></label>
            <select class="form-control" [(ngModel)]="rstForm.categoryId">
              <option [value]="0">-- S\xE9lectionner --</option>
              @for (cat of categories; track cat.id) {
                <option [value]="cat.id">{{ cat.name }}</option>
              }
            </select>
          </div>
          <div class="form-group">
            <label>Montant fixe / unit\xE9 (FCFA) <span class="req">*</span></label>
            <input type="number" class="form-control" [(ngModel)]="rstForm.montantFixe" min="0" step="1" />
          </div>
          <div class="form-group">
            <label>Type de calcul TTC</label>
            <select class="form-control" [(ngModel)]="rstForm.typeRistourne">
              @for (t of TYPE_OPTS; track t.value) {
                <option [value]="t.value">{{ t.label }}</option>
              }
            </select>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-cancel" (click)="showRstModal = false">Annuler</button>
        <button class="btn-save" (click)="saveRst()" [disabled]="savingRst">
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
        <h2>G\xE9n\xE9rer ristournes Guinness</h2>
        <button class="btn-close-modal" (click)="showGuinessModal = false"><span class="material-icons">close</span></button>
      </div>
      @if (guinessError) {
        <div class="modal-error"><span class="material-icons">error</span>{{ guinessError }}</div>
      }
      <div class="modal-body">
        <p style="margin-bottom:16px;color:#555;font-size:14px">
          S\xE9lectionnez la p\xE9riode sur laquelle g\xE9n\xE9rer les r\xE8glements Guinness depuis toutes les factures de ventes valid\xE9es.
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

<!-- Modal Import Ristournes Excel -->
@if (showImportModal) {
  <div class="modal-overlay" (click)="closeImportModal()">
    <div class="modal-box" (click)="$event.stopPropagation()" style="max-width:750px;position:relative">
      @if (importLoading) {
        <div style="position:absolute;inset:0;background:rgba(255,255,255,0.9);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10;border-radius:inherit">
          <div class="spinner"></div>
          <p style="margin-top:14px;color:#017E84;font-weight:600">Importation en cours\u2026</p>
          <p style="font-size:12px;color:#6c757d;margin-top:4px">{{ importRows.length }} ligne(s) en cours de traitement</p>
        </div>
      }
      <div class="modal-header">
        <h2><span class="material-icons" style="vertical-align:middle;color:#017E84">upload_file</span>
          Aper\xE7u import ristournes ({{ importRows.length }} ligne(s))
        </h2>
        <button class="btn-close-modal" (click)="closeImportModal()"><span class="material-icons">close</span></button>
      </div>
      <div style="overflow-x:auto;max-height:50vh">
        <table class="rst-table">
          <thead><tr><th>#</th><th>Client</th><th>Cat\xE9gorie</th><th>Type</th><th class="text-right">Montant</th><th>R\xE9solu</th></tr></thead>
          <tbody>
            @for (row of importRows; track $index; let i = $index) {
              <tr>
                <td class="text-muted">{{ i+1 }}</td>
                <td class="font-bold">{{ row['Client'] }}</td>
                <td>{{ row["Cat\xE9gorie d'article"] || '\u2014' }}</td>
                <td>{{ row['Type de ristourne'] || 'HT brute' }}</td>
                <td class="text-right">{{ row['Montant de la ristourne'] || '0' }}</td>
                <td>
                  @if (getClientId(row['Client']) && getCategoryId(row["Cat\xE9gorie d'article"])) {
                    <span style="color:#198754">\u2713</span>
                  } @else {
                    <span style="color:#dc3545">\u2717</span>
                  }
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button class="btn-cancel" (click)="closeImportModal()">Annuler</button>
        <button class="btn-save" (click)="confirmImport()">
          <span class="material-icons">check_circle</span> Importer ({{ importRows.length }} lignes)
        </button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/sales/components/ristournes/ristourne-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header .page-icon {\n  font-size: 28px;\n  color: rgba(139, 92, 246, 0.9);\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 2px 0 0;\n}\n.tabs-bar {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 16px;\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 0;\n}\n.tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  background: none;\n  font-size: 14px;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.15s;\n}\n.tab-btn .material-icons {\n  font-size: 18px;\n}\n.tab-btn:hover {\n  color: rgba(139, 92, 246, 0.9);\n}\n.tab-btn.active {\n  color: rgba(139, 92, 246, 0.9);\n  border-bottom-color: rgba(139, 92, 246, 0.9);\n  font-weight: 600;\n}\n.btn-new {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 18px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-new .material-icons {\n  font-size: 18px;\n}\n.btn-new:hover {\n  background: color-mix(in srgb, #7C3AED 80%, black);\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-outline .material-icons {\n  font-size: 16px;\n}\n.btn-outline:hover {\n  background: var(--bg-hover);\n}\n.btn-import {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--accent-light);\n  color: var(--accent);\n  border: 1px solid #b2dfdf;\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-import .material-icons {\n  font-size: 16px;\n}\n.btn-import:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.btn-import:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.sub-tabs-bar {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 12px;\n}\n.sub-tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 13px;\n  color: var(--text-muted);\n  cursor: pointer;\n  border-radius: 6px;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.sub-tab-btn:hover {\n  background: var(--bg-hover);\n}\n.sub-tab-btn.active {\n  background: #7C3AED;\n  color: white;\n  border-color: rgba(139, 92, 246, 0.9);\n  font-weight: 600;\n}\n.quarter-card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 12px;\n  overflow: hidden;\n}\n.quarter-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  cursor: pointer;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border-light);\n}\n.quarter-header:hover {\n  background: var(--bg-hover);\n}\n.quarter-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.quarter-title strong {\n  font-size: 15px;\n  color: var(--text-primary);\n}\n.quarter-icon {\n  font-size: 20px;\n  color: rgba(139, 92, 246, 0.9);\n}\n.quarter-sub {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.quarter-total {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--accent);\n  font-family: "Roboto Mono", monospace;\n}\n.quarter-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.expand-icon {\n  font-size: 22px;\n  color: var(--text-muted);\n}\n.badge-count {\n  background: #e9e3f8;\n  color: rgba(139, 92, 246, 0.9);\n  border-radius: 20px;\n  padding: 2px 10px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.quarter-body {\n  padding: 8px 0;\n}\n.empty-quarter {\n  padding: 16px 24px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.partner-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 24px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-light);\n}\n.partner-row:hover {\n  background: var(--bg-hover);\n}\n.partner-name {\n  flex: 1;\n  font-weight: 600;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.partner-count {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.partner-total {\n  font-family: "Roboto Mono", monospace;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--accent);\n  margin-left: auto;\n}\n.partner-actions {\n  display: flex;\n  gap: 6px;\n}\n.partner-details {\n  padding: 0 24px 12px 48px;\n  background: var(--bg-elevated);\n}\n.btn-generate {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  padding: 7px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-generate:hover:not(:disabled) {\n  background: color-mix(in srgb, #7C3AED 80%, black);\n}\n.btn-generate:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-confirm-all {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #e8f5e9;\n  color: #2e7d32;\n  border: 1px solid #a5d6a7;\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-confirm-all:hover {\n  background: var(--success-bg);\n}\n.alert-success {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: var(--success-bg);\n  border-radius: 6px;\n  color: var(--success);\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.alert-success .material-icons {\n  font-size: 18px;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: var(--danger-bg);\n  border-radius: 6px;\n  color: #991b1b;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  color: var(--text-muted);\n  gap: 12px;\n}\n.loading-state .material-icons,\n.empty-state .material-icons {\n  font-size: 48px;\n  color: var(--border);\n}\n.loading-state p,\n.empty-state p {\n  margin: 0;\n  font-size: 15px;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 11px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.data-table td {\n  padding: 12px 14px;\n  font-size: 14px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n}\n.data-table tr:last-child td {\n  border-bottom: none;\n}\n.rst-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.rst-table th {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.rst-table td {\n  padding: 9px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n}\n.rst-table tr:last-child td {\n  border-bottom: none;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.ref-col {\n  color: rgba(139, 92, 246, 0.9);\n  font-family: monospace;\n  font-weight: 600;\n}\n.actions-cell {\n  text-align: right;\n  white-space: nowrap;\n}\n.btn-icon {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px 6px;\n  border-radius: 4px;\n  transition: all 0.15s;\n}\n.btn-icon .material-icons {\n  font-size: 17px;\n}\n.btn-icon:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.danger:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.btn-action {\n  padding: 4px 12px;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-action.confirm {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.btn-action.confirm:hover {\n  background: var(--success-bg);\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge.badge-draft {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.badge.badge-confirmed {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge.badge-done {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge.badge-cancelled {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.badge.badge-brasserie {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge.badge-guinness {\n  background: #e8f5e9;\n  color: #1b5e20;\n}\n.badge.badge-ht {\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  width: 100%;\n  max-width: 560px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n}\n.modal-box.modal-wide {\n  max-width: 860px;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 24px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header .material-icons {\n  color: rgba(139, 92, 246, 0.9);\n  font-size: 22px;\n}\n.modal-header h2 {\n  flex: 1;\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-close-modal {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  padding: 4px;\n}\n.btn-close-modal .material-icons {\n  font-size: 20px;\n}\n.btn-close-modal:hover {\n  color: var(--text-primary);\n}\n.modal-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 24px 0;\n  padding: 10px 14px;\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-radius: 6px;\n  font-size: 13px;\n}\n.modal-error .material-icons {\n  font-size: 17px;\n}\n.modal-body {\n  padding: 20px 24px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  border-top: 1px solid #f0f0f0;\n}\n.btn-cancel {\n  padding: 9px 20px;\n  border: 1px solid var(--border);\n  background: var(--bg-surface);\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-cancel:hover {\n  background: var(--bg-hover);\n}\n.btn-save {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 22px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-save .material-icons {\n  font-size: 18px;\n}\n.btn-save:hover:not(:disabled) {\n  background: color-mix(in srgb, #7C3AED 80%, black);\n}\n.btn-save:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid .form-full {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.form-group .req {\n  color: var(--danger);\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  border-color: rgba(139, 92, 246, 0.9);\n  box-shadow: 0 0 0 3px rgba(111, 66, 193, 0.12);\n}\ntextarea.form-control {\n  resize: vertical;\n}\n.lines-section {\n  margin-top: 16px;\n}\n.lines-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.lines-header .lines-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.btn-add-line {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: 1px dashed #6f42c1;\n  color: rgba(139, 92, 246, 0.9);\n  padding: 5px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line .material-icons {\n  font-size: 15px;\n}\n.btn-add-line:hover {\n  background: rgba(111, 66, 193, 0.08);\n}\n.lines-wrap {\n  overflow-x: auto;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.lines-table th {\n  padding: 8px;\n  background: var(--bg-elevated);\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  border-bottom: 2px solid var(--border);\n}\n.lines-table td {\n  padding: 4px 5px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.lines-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.lines-table .ln {\n  width: 24px;\n  text-align: center;\n  font-size: 11px;\n  color: var(--text-muted);\n  font-weight: 700;\n}\n.lines-table .ar {\n  text-align: right;\n}\n.lines-table .amt {\n  font-family: monospace;\n  color: var(--text-secondary);\n}\n.inp {\n  width: 100%;\n  padding: 5px 7px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: transparent;\n  box-sizing: border-box;\n}\n.inp:hover {\n  border-color: var(--border);\n  background: var(--bg-surface);\n}\n.inp:focus {\n  border-color: rgba(139, 92, 246, 0.9);\n  background: var(--bg-surface);\n}\n.inp.ar {\n  text-align: right;\n}\n.btn-del {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--border);\n}\n.btn-del .material-icons {\n  font-size: 16px;\n}\n.btn-del:hover {\n  color: var(--danger);\n}\n.pmt-total {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 0 0;\n  border-top: 1px solid #f0f0f0;\n  margin-top: 8px;\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.pmt-total .total-val {\n  font-size: 16px;\n  font-weight: 700;\n  color: rgba(139, 92, 246, 0.9);\n  font-family: monospace;\n}\n.accordion-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.acc-count {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.acc-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-acc-ctrl {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 12px;\n  border-radius: 7px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-acc-ctrl .material-icons {\n  font-size: 15px;\n}\n.btn-acc-ctrl:hover {\n  border-color: rgba(139, 92, 246, 0.9);\n  color: rgba(139, 92, 246, 0.9);\n  background: var(--bg-hover);\n}\n.accordion {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.acc-item {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  border: 1.5px solid var(--border);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.acc-item.open {\n  border-color: #d8b4fe;\n  box-shadow: 0 2px 10px rgba(111, 66, 193, 0.1);\n}\n.acc-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background 0.12s;\n}\n.acc-header:hover {\n  background: var(--bg-hover);\n}\n.acc-header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n}\n.acc-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #7C3AED;\n  color: white;\n  font-size: 15px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.acc-name-block {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  min-width: 0;\n}\n.acc-client-name {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.acc-badge-row {\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.type-chip {\n  display: inline-block;\n  padding: 1px 9px;\n  border-radius: 10px;\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.type-chip.chip-brasserie {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.type-chip.chip-guinness {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.type-chip.chip-ht {\n  background: var(--bg-elevated);\n  color: #475569;\n}\n.acc-header-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.acc-total-hint {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.acc-chevron {\n  font-size: 20px;\n  color: var(--text-muted);\n  transition: transform 0.2s;\n}\n.acc-item.open .acc-chevron {\n  transform: rotate(180deg);\n  color: rgba(139, 92, 246, 0.9);\n}\n.acc-body {\n  border-top: 1px solid var(--border-light);\n}\n.rst-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.rst-table th {\n  padding: 8px 16px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-hover);\n  border-bottom: 1px solid #ede9fe;\n  text-align: left;\n}\n.rst-table td {\n  padding: 10px 16px;\n  font-size: 13px;\n  color: var(--text-primary);\n  border-bottom: 1px solid #f8f5ff;\n  vertical-align: middle;\n}\n.rst-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.rst-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.rst-table .r {\n  text-align: right;\n}\n.rst-table .mono {\n  font-family: "Roboto Mono", monospace;\n  font-size: 12px;\n}\n.rst-table .bold {\n  font-weight: 600;\n}\n.rst-table .ttc-val {\n  color: var(--accent);\n  font-weight: 700;\n}\n.active-dot {\n  display: inline-block;\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: #e5e7eb;\n}\n.active-dot.on {\n  background: #16a34a;\n}\n/*# sourceMappingURL=ristourne-list.component.css.map */\n'] }]
  }], () => [{ type: RistourneService }, { type: SalesService }, { type: StockService }, { type: AuthService }, { type: Router }, { type: NotificationService }], { importInput: [{
    type: ViewChild,
    args: ["importInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RistourneListComponent, { className: "RistourneListComponent", filePath: "app/modules/sales/components/ristournes/ristourne-list.component.ts", lineNumber: 22 });
})();
export {
  RistourneListComponent
};
//# sourceMappingURL=chunk-IM6RATVR.js.map
