import {
  StockService
} from "./chunk-VJTDSZQK.js";
import {
  AuditFooterComponent
} from "./chunk-DTINOBZJ.js";
import {
  AuditTrailComponent
} from "./chunk-Z3T7EMK6.js";
import "./chunk-G4ORCRQ7.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-4W3TIS2I.js";
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
} from "./chunk-NRXD6HPP.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  ViewChildren,
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
import "./chunk-KBUIKKCC.js";

// src/app/modules/stock/components/transferts/transfert-detail.component.ts
var _c0 = ["productInput"];
var _forTrack0 = ($index, $item) => $item.moveId;
var _forTrack1 = ($index, $item) => $item.id;
function TransfertDetailComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isNew ? "R\xE9ception de transfert" : "R\xE9ception \u2014 " + ((ctx_r0.picking == null ? null : ctx_r0.picking.name) || ""), " ");
  }
}
function TransfertDetailComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isNew ? "Nouveau transfert inter-d\xE9p\xF4t" : (ctx_r0.picking == null ? null : ctx_r0.picking.name) || "Transfert", " ");
  }
}
function TransfertDetailComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-state", ctx_r0.picking.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.stateLabel(ctx_r0.picking.state || ""));
  }
}
function TransfertDetailComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function TransfertDetailComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancel());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Annuler le transfert ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.cancelling);
  }
}
function TransfertDetailComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function TransfertDetailComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.downloadBordereau());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Bordereau PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 17);
    \u0275\u0275listener("click", function TransfertDetailComponent_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmReception());
    });
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.confirming);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.confirming ? "Confirmation..." : "Confirmer la r\xE9ception", " ");
  }
}
function TransfertDetailComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function TransfertDetailComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.downloadBordereau());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Bordereau PDF ");
    \u0275\u0275elementEnd();
  }
}
function TransfertDetailComponent_Conditional_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function TransfertDetailComponent_Conditional_17_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.validate());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "compare_arrows");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function TransfertDetailComponent_Conditional_17_Conditional_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancel());
    });
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.validating);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.validating ? "Transfert en cours..." : "Valider le transfert", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.cancelling);
  }
}
function TransfertDetailComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function TransfertDetailComponent_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, TransfertDetailComponent_Conditional_17_Conditional_4_Template, 7, 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Sauvegarde..." : "Sauvegarder", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isNew ? 4 : -1);
  }
}
function TransfertDetailComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 5);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg);
  }
}
function TransfertDetailComponent_Conditional_19_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 R\xE9ception li\xE9e : ");
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.picking.linkedPickingName);
  }
}
function TransfertDetailComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 5);
    \u0275\u0275text(2, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Les articles ont \xE9t\xE9 destock\xE9s de la source. En attente de confirmation de r\xE9ception \xE0 destination. ");
    \u0275\u0275conditionalCreate(4, TransfertDetailComponent_Conditional_19_Conditional_4_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx_r0.picking == null ? null : ctx_r0.picking.linkedPickingName) ? 4 : -1);
  }
}
function TransfertDetailComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 5);
    \u0275\u0275text(2, "swap_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Transfert valoris\xE9 \u2014 \xE9criture comptable : ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \xB7 Valeur : ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.picking.accountMoveName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 2, ctx_r0.picking.totalValue, "1.0-0"), " FCFA");
  }
}
function TransfertDetailComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 19);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd()();
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_0_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_22_Conditional_0_For_22_Template_input_ngModelChange_6_listener($event) {
      const line_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(line_r8.qteRecue, $event) || (line_r8.qteRecue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 28);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r8.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r8.qteCommandee);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r8.qteRecue);
    \u0275\u0275property("max", line_r8.qteCommandee);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-warning", line_r8.qteCommandee - line_r8.qteRecue > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 7, line_r8.qteCommandee - line_r8.qteRecue, "1.0-2"), " ");
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "div", 23)(4, "span");
    \u0275\u0275text(5, "Quantit\xE9s re\xE7ues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 24);
    \u0275\u0275text(7, "Saisir les quantit\xE9s physiquement re\xE7ues \u2014 le reliquat retournera \xE0 la source");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 25)(9, "table", 26)(10, "thead")(11, "tr")(12, "th", 27);
    \u0275\u0275text(13, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 28);
    \u0275\u0275text(15, "Qt\xE9 command\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 28);
    \u0275\u0275text(17, "Qt\xE9 re\xE7ue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 28);
    \u0275\u0275text(19, "Reliquat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, TransfertDetailComponent_Conditional_22_Conditional_0_For_22_Template, 10, 10, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(23, "div", 29)(24, "div", 22)(25, "div", 23);
    \u0275\u0275text(26, "Informations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 30)(28, "div", 31)(29, "label");
    \u0275\u0275text(30, "Entrep\xF4t destination");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 32);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 31)(34, "label");
    \u0275\u0275text(35, "Transfert source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 32);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 31)(39, "label");
    \u0275\u0275text(40, "Op\xE9rateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 32);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 31)(44, "label");
    \u0275\u0275text(45, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 32);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "date");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r0.receivedLines);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((ctx_r0.bordereau == null ? null : ctx_r0.bordereau.warehouseName) || ctx_r0.locationName(ctx_r0.picking == null ? null : ctx_r0.picking.locationDestId));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.picking == null ? null : ctx_r0.picking.linkedPickingName) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.bordereau == null ? null : ctx_r0.bordereau.operatorName) || (ctx_r0.picking == null ? null : ctx_r0.picking.createdBy) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 4, ctx_r0.picking == null ? null : ctx_r0.picking.createdAt, "dd/MM/yyyy"));
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addLine());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Ajouter");
    \u0275\u0275elementEnd();
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, "Aucune ligne \u2014 ajoutez des articles \xE0 transf\xE9rer");
    \u0275\u0275elementEnd();
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, "Dispo source");
    \u0275\u0275elementEnd();
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_10_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th");
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead")(1, "tr")(2, "th", 48);
    \u0275\u0275text(3, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5, "Unit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_10_Conditional_6_Template, 2, 0, "th", 49);
    \u0275\u0275elementStart(7, "th", 50);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 50);
    \u0275\u0275text(10, "CMUP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 50);
    \u0275\u0275text(12, "Valeur");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_10_Conditional_13_Template, 1, 0, "th");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.isDraft ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.isDraft ? "Quantit\xE9" : "Qt\xE9 transf\xE9r\xE9e");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDraft ? 13 : -1);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_2_Conditional_6_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r13.defaultCode);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_2_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("mousedown", function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_2_Conditional_6_For_2_Template_div_mousedown_0_listener() {
      const p_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const \u0275$index_268_r11 = \u0275\u0275nextContext(3).$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectLineProduct(\u0275$index_268_r11, p_r13));
    });
    \u0275\u0275conditionalCreate(1, TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_2_Conditional_6_For_2_Conditional_1_Template, 2, 1, "span", 61);
    \u0275\u0275elementStart(2, "span", 62);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 63);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r13.defaultCode ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r13.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("qty-low", p_r13.availableQty <= 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, p_r13.availableQty, "1.0-0"));
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275repeaterCreate(1, TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_2_Conditional_6_For_2_Template, 7, 8, "div", 59, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_268_r11 = \u0275\u0275nextContext(2).$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.lineFilteredProducts(\u0275$index_268_r11));
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 55)(2, "span", 56);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 57, 0);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_2_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const \u0275$index_268_r11 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.lineSearchTexts[\u0275$index_268_r11], $event) || (ctx_r0.lineSearchTexts[\u0275$index_268_r11] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_2_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r10);
      const \u0275$index_268_r11 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openDropdownIndex = \u0275$index_268_r11);
    })("focus", function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_2_Template_input_focus_4_listener() {
      \u0275\u0275restoreView(_r10);
      const \u0275$index_268_r11 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openDropdownIndex = \u0275$index_268_r11);
    })("blur", function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_2_Template_input_blur_4_listener() {
      \u0275\u0275restoreView(_r10);
      const \u0275$index_268_r11 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onLineBlur(\u0275$index_268_r11));
    })("keydown.enter", function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_2_Template_input_keydown_enter_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const \u0275$index_268_r11 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onProductEnter(\u0275$index_268_r11, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_2_Conditional_6_Template, 3, 0, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_268_r11 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.lineSearchTexts[\u0275$index_268_r11]);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.openDropdownIndex === \u0275$index_268_r11 && ctx_r0.lineFilteredProducts(\u0275$index_268_r11).length > 0 ? 6 : -1);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.productName(line_r14.productId));
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "Illimit\xE9");
    \u0275\u0275elementEnd();
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMap(line_r14.availableQty < line_r14.qtyDemanded ? "qty-warn" : "qty-ok");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 3, line_r14.availableQty, "1.0-2"), " ");
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 52);
    \u0275\u0275conditionalCreate(1, TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_6_Conditional_1_Template, 2, 0, "span", 64)(2, TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_6_Conditional_2_Template, 3, 6, "span", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.srcIsVirtual ? 1 : 2);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_8_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const line_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(line_r14.qtyDemanded, $event) || (line_r14.qtyDemanded = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_8_Template_input_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r15);
      const line_r14 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(line_r14.qtyDone = line_r14.qtyDemanded);
    })("keydown.enter", function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_8_Template_input_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onLineEnter());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", line_r14.qtyDemanded);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r14.qtyDone);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "button", 67);
    \u0275\u0275listener("click", function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const \u0275$index_268_r11 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeLine(\u0275$index_268_r11));
    });
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_2_Template, 7, 2, "div", 51)(3, TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_3_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_6_Template, 3, 1, "td", 52);
    \u0275\u0275elementStart(7, "td", 28);
    \u0275\u0275conditionalCreate(8, TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_8_Template, 1, 1, "input", 53)(9, TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_9_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 28);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 54);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Conditional_16_Template, 4, 0, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r14 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isDraft ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r14.uomName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isDraft ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isDraft ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 7, line_r14.priceUnit, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 10, line_r14.qtyDemanded * line_r14.priceUnit, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isDraft ? 16 : -1);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tfoot")(1, "tr")(2, "td", 68);
    \u0275\u0275text(3, "VALEUR TOTALE TRANSF\xC9R\xC9E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 69);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_14_Conditional_7_Template, 1, 0, "td");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("colspan", ctx_r0.isDraft ? 4 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 3, ctx_r0.lineTotal, "1.0-0"), " FCFA");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isDraft ? 7 : -1);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_25_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r18 = ctx.$implicit;
    \u0275\u0275property("value", "w:" + w_r18.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r18.name);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_25_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r19 = ctx.$implicit;
    \u0275\u0275property("value", "l:" + l_r19.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", l_r19.name, " (", l_r19.usage === "customer" ? "Client" : "Fournisseur", ")");
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_25_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "optgroup", 74);
    \u0275\u0275repeaterCreate(1, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_25_Conditional_6_For_2_Template, 2, 3, "option", 73, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.virtualLocations);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 70);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_25_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedSrcKey, $event) || (ctx_r0.selectedSrcKey = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_25_Template_select_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onSrcKeyChange());
    });
    \u0275\u0275elementStart(1, "option", 71);
    \u0275\u0275text(2, "\u2014 Choisir \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "optgroup", 72);
    \u0275\u0275repeaterCreate(4, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_25_For_5_Template, 2, 2, "option", 73, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_25_Conditional_6_Template, 3, 0, "optgroup", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedSrcKey);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.warehouses);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.virtualLocations.length > 0 ? 6 : -1);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.picking == null ? null : ctx_r0.picking.sourceWarehouseName) ? "warehouse" : "swap_horiz");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((ctx_r0.picking == null ? null : ctx_r0.picking.sourceWarehouseName) || ctx_r0.locationName(ctx_r0.picking == null ? null : ctx_r0.picking.locationId));
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_35_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r21 = ctx.$implicit;
    \u0275\u0275property("value", "w:" + w_r21.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r21.name);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_35_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r22 = ctx.$implicit;
    \u0275\u0275property("value", "l:" + l_r22.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", l_r22.name, " (", l_r22.usage === "customer" ? "Client" : "Fournisseur", ")");
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_35_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "optgroup", 74);
    \u0275\u0275repeaterCreate(1, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_35_Conditional_6_For_2_Template, 2, 3, "option", 73, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.virtualLocations);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 70);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_35_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedDestKey, $event) || (ctx_r0.selectedDestKey = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_35_Template_select_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onDestKeyChange());
    });
    \u0275\u0275elementStart(1, "option", 71);
    \u0275\u0275text(2, "\u2014 Choisir \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "optgroup", 72);
    \u0275\u0275repeaterCreate(4, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_35_For_5_Template, 2, 2, "option", 73, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_35_Conditional_6_Template, 3, 0, "optgroup", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedDestKey);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.warehouses);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.virtualLocations.length > 0 ? 6 : -1);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.picking == null ? null : ctx_r0.picking.destWarehouseName) ? "warehouse" : "swap_horiz");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((ctx_r0.picking == null ? null : ctx_r0.picking.destWarehouseName) || ctx_r0.locationName(ctx_r0.picking == null ? null : ctx_r0.picking.locationDestId));
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_44_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.scheduledDate, $event) || (ctx_r0.scheduledDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.scheduledDate);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, ctx_r0.scheduledDate, "dd/MM/yyyy"));
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_49_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.partnerName, $event) || (ctx_r0.partnerName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.partnerName);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.partnerName || "\u2014");
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_54_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.origin, $event) || (ctx_r0.origin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.origin);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.origin || "\u2014");
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 78);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_59_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.notes, $event) || (ctx_r0.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.notes);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.notes || "\u2014");
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "div", 23)(4, "span");
    \u0275\u0275text(5, "Articles \xE0 transf\xE9rer");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_6_Template, 4, 0, "button", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 25);
    \u0275\u0275conditionalCreate(8, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_8_Template, 2, 0, "div", 36);
    \u0275\u0275elementStart(9, "table", 37);
    \u0275\u0275conditionalCreate(10, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_10_Template, 14, 3, "thead");
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, TransfertDetailComponent_Conditional_22_Conditional_1_For_13_Template, 17, 13, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_14_Template, 8, 6, "tfoot");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 29)(16, "div", 22)(17, "div", 23);
    \u0275\u0275text(18, "Entrep\xF4ts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 30)(20, "div", 31)(21, "label");
    \u0275\u0275text(22, "Source ");
    \u0275\u0275elementStart(23, "span", 38);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(25, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_25_Template, 7, 2, "select", 39)(26, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_26_Template, 4, 2, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 41)(28, "span", 5);
    \u0275\u0275text(29, "south");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 31)(31, "label");
    \u0275\u0275text(32, "Destination ");
    \u0275\u0275elementStart(33, "span", 38);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(35, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_35_Template, 7, 2, "select", 39)(36, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_36_Template, 4, 2, "div", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 42)(38, "div", 23);
    \u0275\u0275text(39, "D\xE9tails");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 30)(41, "div", 31)(42, "label");
    \u0275\u0275text(43, "Date planifi\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(44, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_44_Template, 1, 1, "input", 43)(45, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_45_Template, 3, 4, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 31)(47, "label");
    \u0275\u0275text(48, "Partenaire");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(49, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_49_Template, 1, 1, "input", 44)(50, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_50_Template, 2, 1, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 31)(52, "label");
    \u0275\u0275text(53, "Origine");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(54, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_54_Template, 1, 1, "input", 45)(55, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_55_Template, 2, 1, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 31)(57, "label");
    \u0275\u0275text(58, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(59, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_59_Template, 1, 1, "textarea", 46)(60, TransfertDetailComponent_Conditional_22_Conditional_1_Conditional_60_Template, 2, 1, "div", 32);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.isDraft ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.lines.length === 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-lines", ctx_r0.lines.length > 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.lines.length > 0 ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.lines);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.lines.length > 0 ? 14 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r0.isDraft ? 25 : 26);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r0.isDraft ? 35 : 36);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.isDraft ? 44 : 45);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDraft ? 49 : 50);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDraft ? 54 : 55);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isDraft ? 59 : 60);
  }
}
function TransfertDetailComponent_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-audit-trail", 79)(1, "app-audit-footer", 80);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("entityId", ctx_r0.picking.id ?? null);
    \u0275\u0275advance();
    \u0275\u0275property("createdBy", ctx_r0.picking.createdBy)("createdAt", ctx_r0.picking.createdAt)("updatedBy", ctx_r0.picking.updatedBy)("updatedAt", ctx_r0.picking.updatedAt);
  }
}
function TransfertDetailComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TransfertDetailComponent_Conditional_22_Conditional_0_Template, 49, 7, "div", 20);
    \u0275\u0275conditionalCreate(1, TransfertDetailComponent_Conditional_22_Conditional_1_Template, 61, 12, "div", 20);
    \u0275\u0275conditionalCreate(2, TransfertDetailComponent_Conditional_22_Conditional_2_Template, 2, 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.isTransferReception && ctx_r0.isPendingReception && ctx_r0.receivedLines.length > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isTransferReception || !ctx_r0.isPendingReception ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.picking ? 2 : -1);
  }
}
var TransfertDetailComponent = class _TransfertDetailComponent {
  lineFilteredProducts(i) {
    const q = (this.lineSearchTexts[i] || "").toLowerCase();
    const src = this.availableProducts.length ? this.availableProducts : this.products.filter((p) => p.id != null).map((p) => ({ id: p.id, name: p.name, defaultCode: p.defaultCode, uomName: p.uomName, standardPrice: p.standardPrice, availableQty: 0 }));
    if (!q)
      return src.slice(0, 60);
    return src.filter((p) => p.name.toLowerCase().includes(q) || (p.defaultCode || "").toLowerCase().includes(q)).slice(0, 60);
  }
  selectLineProduct(i, p) {
    this.lines[i].productId = p.id;
    this.lineSearchTexts[i] = p.defaultCode ? `[${p.defaultCode}] ${p.name}` : p.name;
    this.openDropdownIndex = null;
    this.onProductChange(i, p.id);
  }
  onProductEnter(i, e) {
    e.preventDefault();
    const s = this.lineFilteredProducts(i);
    if (s.length > 0) {
      this.selectLineProduct(i, s[0]);
      return;
    }
    if (this.lines[i].productId)
      this.onLineEnter();
  }
  onLineEnter() {
    this.addLine();
    setTimeout(() => {
      const inputs = this.productInputs.toArray();
      if (inputs.length > 0)
        inputs[inputs.length - 1].nativeElement.focus();
    }, 50);
  }
  onLineBlur(i) {
    setTimeout(() => {
      if (this.openDropdownIndex === i)
        this.openDropdownIndex = null;
    }, 200);
  }
  constructor(route, router, stockService, authService) {
    this.route = route;
    this.router = router;
    this.stockService = stockService;
    this.authService = authService;
    this.picking = null;
    this.pickingTypes = [];
    this.allLocations = [];
    this.internalLocations = [];
    this.virtualLocations = [];
    this.warehouses = [];
    this.products = [];
    this.loading = false;
    this.saving = false;
    this.validating = false;
    this.cancelling = false;
    this.confirming = false;
    this.errorMsg = "";
    this.isNew = false;
    this.bordereau = null;
    this.receivedLines = [];
    this.selectedSrcWarehouseId = "";
    this.selectedDestWarehouseId = "";
    this.selectedSrcKey = "";
    this.selectedDestKey = "";
    this.origin = "";
    this.notes = "";
    this.partnerName = "";
    this.scheduledDate = "";
    this.lines = [];
    this.availableProducts = [];
    this.lineSearchTexts = [];
    this.openDropdownIndex = null;
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    const id = this.route.snapshot.paramMap.get("id");
    this.isNew = !id || id === "new";
    forkJoin({
      types: this.stockService.getPickingTypes(this.companyId),
      locations: this.stockService.getLocations(this.companyId),
      products: this.stockService.getProducts(this.companyId),
      warehouses: this.stockService.getWarehouses(this.companyId)
    }).subscribe(({ types, locations, products, warehouses }) => {
      this.pickingTypes = types.filter((t) => t.code === "internal");
      this.allLocations = locations;
      this.internalLocations = locations.filter((l) => l.usage === "internal");
      this.virtualLocations = locations.filter((l) => l.usage === "customer" || l.usage === "supplier");
      this.products = products.filter((p) => p.type === "product" || p.type === "consu");
      this.warehouses = warehouses;
      if (this.isNew) {
        const dt = this.pickingTypes[0];
        if (dt)
          this.selectedTypeId = dt.id;
        this.scheduledDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
        this.addLine();
      } else {
        this.loadPicking(Number(id));
      }
    });
  }
  loadPicking(id) {
    this.loading = true;
    this.stockService.getPicking(id).subscribe({
      next: (p) => {
        this.picking = p;
        this.selectedTypeId = p.pickingTypeId;
        this.selectedSrcId = p.locationId;
        this.selectedDestId = p.locationDestId;
        this.selectedSrcWarehouseId = p.sourceWarehouseId || "";
        this.selectedDestWarehouseId = p.destWarehouseId || "";
        this.selectedSrcKey = p.sourceWarehouseId ? `w:${p.sourceWarehouseId}` : this.isVirtualLocationId(p.locationId) ? `l:${p.locationId}` : "";
        this.selectedDestKey = p.destWarehouseId ? `w:${p.destWarehouseId}` : this.isVirtualLocationId(p.locationDestId) ? `l:${p.locationDestId}` : "";
        this.onSrcLocationChange();
        this.origin = p.origin || "";
        this.notes = p.notes || "";
        this.partnerName = p.partnerName || "";
        this.scheduledDate = p.scheduledDate || "";
        this.lines = (p.moves || []).map((m) => ({
          productId: m.productId,
          qtyDemanded: m.qtyDemanded,
          qtyDone: m.qtyDone ?? m.qtyDemanded,
          priceUnit: m.priceUnit ?? 0,
          uomName: m.uomName || "",
          availableQty: m.availableQty ?? 0
        }));
        this.lineSearchTexts = (p.moves || []).map((m) => {
          const prod = this.products.find((pr) => pr.id === m.productId);
          return prod ? prod.defaultCode ? `[${prod.defaultCode}] ${prod.name}` : prod.name : m.productName || "";
        });
        if (p.transferReception && p.state === "pending_reception") {
          this.stockService.getTransferBordereau(p.id).subscribe((b) => {
            this.bordereau = b;
            this.receivedLines = (b.lignes || []).map((l) => ({
              moveId: l.moveId,
              productName: l.productName || "",
              qteCommandee: Number(l.qteCommandee),
              qteRecue: Number(l.qteCommandee)
            }));
          });
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  isVirtualLocationId(locationId) {
    return !!locationId && this.virtualLocations.some((l) => l.id === locationId);
  }
  get srcIsVirtual() {
    const loc = this.allLocations.find((l) => l.id === Number(this.selectedSrcId));
    return !!loc && loc.usage !== "internal";
  }
  onSrcKeyChange() {
    if (!this.selectedSrcKey) {
      this.selectedSrcId = null;
      this.selectedSrcWarehouseId = "";
      this.availableProducts = [];
      return;
    }
    const [kind, rawId] = this.selectedSrcKey.split(":");
    const id = Number(rawId);
    if (kind === "w") {
      this.selectedSrcWarehouseId = id;
      const wh = this.warehouses.find((w) => w.id === id);
      this.selectedSrcId = wh?.stockLocationId ?? null;
      const whType = this.pickingTypes.find((pt) => pt.warehouseId === id);
      if (whType?.id)
        this.selectedTypeId = whType.id;
    } else {
      this.selectedSrcWarehouseId = "";
      this.selectedSrcId = id;
    }
    if (this.selectedDestId && Number(this.selectedSrcId) === Number(this.selectedDestId)) {
      this.errorMsg = "Source et destination doivent \xEAtre diff\xE9rentes";
      setTimeout(() => this.errorMsg = "", 4e3);
      this.selectedSrcKey = "";
      this.selectedSrcId = null;
      this.selectedSrcWarehouseId = "";
      this.availableProducts = [];
      return;
    }
    this.onSrcLocationChange();
  }
  onDestKeyChange() {
    if (!this.selectedDestKey) {
      this.selectedDestId = null;
      this.selectedDestWarehouseId = "";
      return;
    }
    const [kind, rawId] = this.selectedDestKey.split(":");
    const id = Number(rawId);
    let destWarehouseId = "";
    let destLocationId;
    if (kind === "w") {
      destWarehouseId = id;
      const wh = this.warehouses.find((w) => w.id === id);
      destLocationId = wh?.stockLocationId ?? null;
    } else {
      destLocationId = id;
    }
    if (this.selectedSrcId && Number(this.selectedSrcId) === Number(destLocationId)) {
      this.errorMsg = "Source et destination doivent \xEAtre diff\xE9rentes";
      setTimeout(() => this.errorMsg = "", 4e3);
      this.selectedDestKey = "";
      this.selectedDestId = null;
      this.selectedDestWarehouseId = "";
      return;
    }
    this.selectedDestWarehouseId = destWarehouseId;
    this.selectedDestId = destLocationId;
  }
  addLine() {
    this.lines.push({ productId: null, qtyDemanded: 1, qtyDone: 1, priceUnit: 0, uomName: "", availableQty: 0 });
    this.lineSearchTexts.push("");
  }
  removeLine(i) {
    this.lines.splice(i, 1);
    this.lineSearchTexts.splice(i, 1);
  }
  onProductChange(i, newProductId) {
    if (!this.selectedSrcId) {
      this.errorMsg = "S\xE9lectionnez d'abord la source avant de choisir un article.";
      this.lines[i].productId = null;
      setTimeout(() => this.errorMsg = "", 4e3);
      return;
    }
    const productId = Number(newProductId);
    const avail = this.availableProducts.find((p) => p.id === productId);
    const prod = avail ?? this.products.find((p) => p.id === productId);
    if (prod) {
      this.lines[i].uomName = prod.uomName || "";
      this.lines[i].priceUnit = prod.standardPrice || 0;
      this.lines[i].availableQty = avail?.availableQty ?? 0;
      if (!avail)
        this.fetchQty(i, productId);
    } else {
      this.lines[i].uomName = "";
      this.lines[i].priceUnit = 0;
      this.lines[i].availableQty = 0;
    }
  }
  onSrcLocationChange() {
    const locationId = Number(this.selectedSrcId);
    if (!locationId) {
      this.availableProducts = [];
      return;
    }
    this.stockService.getQuants(this.companyId, locationId).subscribe((quants) => {
      const inStock = quants.filter((q) => q.availableQuantity > 0);
      this.availableProducts = inStock.map((q) => {
        const prod = this.products.find((p) => p.id === q.productId);
        return {
          id: q.productId,
          name: prod?.name || q.productName || "",
          defaultCode: prod?.defaultCode || q.productCode,
          uomName: prod?.uomName || q.uomName,
          standardPrice: prod?.standardPrice ?? q.standardPrice,
          availableQty: q.availableQuantity
        };
      });
      this.lines.forEach((line, i) => {
        const productId = Number(line.productId);
        if (productId)
          this.fetchQty(i, productId);
      });
    });
  }
  fetchQty(i, productId) {
    const locationId = Number(this.selectedSrcId);
    if (!locationId) {
      this.lines[i].availableQty = 0;
      return;
    }
    this.stockService.getQuants(this.companyId, locationId, productId).subscribe((q) => {
      this.lines[i].availableQty = q.reduce((s, qq) => s + qq.availableQuantity, 0);
    });
  }
  get isDraft() {
    return !this.picking || this.picking.state === "draft";
  }
  get isDone() {
    return this.picking?.state === "done";
  }
  get isCancelled() {
    return this.picking?.state === "cancelled";
  }
  get isPendingReception() {
    return this.picking?.state === "pending_reception";
  }
  get isTransferReception() {
    return this.picking?.transferReception === true;
  }
  get lineTotal() {
    return this.lines.reduce((s, l) => s + l.qtyDone * l.priceUnit, 0);
  }
  get backRoute() {
    return "/stock/transferts";
  }
  buildReq() {
    return {
      pickingTypeId: this.selectedTypeId,
      locationId: this.selectedSrcId,
      locationDestId: this.selectedDestId,
      origin: this.origin,
      notes: this.notes,
      partnerName: this.partnerName,
      scheduledDate: this.scheduledDate,
      companyId: this.companyId,
      moves: this.lines.filter((l) => l.productId).map((l) => ({
        productId: Number(l.productId),
        qtyDemanded: l.qtyDemanded,
        qtyDone: l.qtyDone,
        priceUnit: l.priceUnit
      }))
    };
  }
  save() {
    if (!this.selectedSrcId) {
      this.errorMsg = "S\xE9lectionnez un emplacement source";
      return;
    }
    if (!this.selectedDestId) {
      this.errorMsg = "S\xE9lectionnez un emplacement destination";
      return;
    }
    if (Number(this.selectedSrcId) === Number(this.selectedDestId)) {
      this.errorMsg = "Source et destination doivent \xEAtre diff\xE9rentes";
      return;
    }
    if (this.lines.filter((l) => l.productId).length === 0) {
      this.errorMsg = "Ajoutez au moins un article";
      return;
    }
    const hasQty = this.lines.filter((l) => l.productId).every((l) => l.qtyDemanded > 0);
    if (!hasQty) {
      this.errorMsg = "Toutes les quantit\xE9s doivent \xEAtre sup\xE9rieures \xE0 0";
      return;
    }
    if (!this.srcIsVirtual) {
      const overQty = this.lines.filter((l) => l.productId).find((l) => l.qtyDemanded > l.availableQty);
      if (overQty) {
        const prod = this.products.find((p) => p.id === Number(overQty.productId));
        this.errorMsg = `Stock insuffisant pour \xAB ${prod?.name || overQty.productId} \xBB \u2014 disponible : ${overQty.availableQty}, demand\xE9 : ${overQty.qtyDemanded}`;
        return;
      }
    }
    this.saving = true;
    this.errorMsg = "";
    const obs = this.isNew ? this.stockService.createPicking(this.buildReq()) : this.stockService.updatePicking(this.picking.id, this.buildReq());
    obs.subscribe({
      next: (p) => {
        this.saving = false;
        this.isNew ? this.router.navigate(["/stock/transferts", p.id]) : this.picking = p;
      },
      error: (e) => {
        this.saving = false;
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  validate() {
    if (!this.picking)
      return;
    this.validating = true;
    this.errorMsg = "";
    this.stockService.updatePicking(this.picking.id, this.buildReq()).subscribe({
      next: () => {
        this.stockService.validatePicking(this.picking.id).subscribe({
          next: (p) => {
            this.validating = false;
            this.picking = p;
            this.loadPicking(p.id);
          },
          error: (e) => {
            this.validating = false;
            this.errorMsg = e.error?.message || "Stock insuffisant ou erreur";
          }
        });
      },
      error: (e) => {
        this.validating = false;
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  cancel() {
    if (!this.picking || !confirm("Annuler ce transfert ?"))
      return;
    this.cancelling = true;
    this.stockService.cancelPicking(this.picking.id).subscribe({
      next: (p) => {
        this.cancelling = false;
        this.picking = p;
      },
      error: (e) => {
        this.cancelling = false;
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  confirmReception() {
    if (!this.picking || !confirm("Confirmer la r\xE9ception de ce transfert ?"))
      return;
    this.confirming = true;
    this.errorMsg = "";
    const lignes = this.receivedLines.map((l) => ({ moveId: l.moveId, qteRecue: l.qteRecue }));
    this.stockService.confirmTransferReception(this.picking.id, lignes).subscribe({
      next: (p) => {
        this.confirming = false;
        this.picking = p;
        this.loadPicking(p.id);
      },
      error: (e) => {
        this.confirming = false;
        this.errorMsg = e.error?.message || "Erreur lors de la confirmation";
      }
    });
  }
  downloadBordereau() {
    if (!this.picking)
      return;
    this.stockService.downloadTransferBordereauPdf(this.picking.id).subscribe((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `bordereau-reception-${this.picking.name || this.picking.id}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }
  productName(id) {
    return this.products.find((p) => p.id === Number(id))?.name || "";
  }
  locationName(id) {
    return this.allLocations.find((l) => l.id === Number(id))?.completeName || this.allLocations.find((l) => l.id === Number(id))?.name || "";
  }
  stateLabel(s) {
    return { draft: "Brouillon", done: "Effectu\xE9", cancelled: "Annul\xE9", pending_reception: "En attente de r\xE9ception", confirmed: "Confirm\xE9" }[s] || s;
  }
  static {
    this.\u0275fac = function TransfertDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TransfertDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransfertDetailComponent, selectors: [["app-transfert-detail"]], viewQuery: function TransfertDetailComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.productInputs = _t);
      }
    }, decls: 23, vars: 11, consts: [["productInput", ""], [1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "btn-back", 3, "click"], [1, "material-icons"], [1, "page-title"], [1, "state-badge"], [1, "header-actions"], [1, "btn-cancel-picking", 3, "disabled"], [1, "btn-secondary"], [1, "alert", "alert-danger"], [1, "info-banner", "info-warning"], [1, "info-banner"], [1, "loading"], [1, "btn-cancel-picking", 3, "click", "disabled"], [1, "btn-secondary", 3, "click"], [1, "btn-validate", 3, "click", "disabled"], [1, "btn-secondary", 3, "click", "disabled"], [1, "material-icons", "spin"], [1, "form-layout"], [1, "form-main"], [1, "card"], [1, "card-header"], [1, "card-subtitle"], [1, "lines-container"], [1, "lines-table", "has-lines"], [2, "width", "40%"], [1, "cell-right"], [1, "form-side"], [1, "card-body"], [1, "form-group"], [1, "form-value"], [1, "font-bold"], ["type", "number", "min", "0", 1, "line-input", 3, "ngModelChange", "ngModel", "max"], [1, "btn-add-line"], [1, "empty-lines"], [1, "lines-table"], [1, "req"], [1, "form-control", 3, "ngModel"], [1, "form-value", "loc-value"], [1, "transfer-arrow"], [1, "card", 2, "margin-top", "12px"], ["type", "date", 1, "form-control", 3, "ngModel"], ["type", "text", "placeholder", "Ex: transporteur, agence\u2026", 1, "form-control", 3, "ngModel"], ["type", "text", "placeholder", "Ex: ordre de transfert", 1, "form-control", 3, "ngModel"], ["rows", "2", 1, "form-control", 3, "ngModel"], [1, "btn-add-line", 3, "click"], [2, "width", "36%"], [1, "th-dispo"], [1, "text-right"], [1, "ac-wrap"], [1, "td-dispo"], ["type", "number", "min", "0", 1, "line-input", "text-right", 3, "ngModel"], [1, "cell-right", "font-bold"], [1, "ac-field"], [1, "material-icons", "ac-icon"], ["type", "text", "placeholder", "Chercher un article\u2026", "autocomplete", "off", 1, "line-select", 3, "ngModelChange", "input", "focus", "blur", "keydown.enter", "ngModel"], [1, "ac-dropdown"], [1, "ac-item"], [1, "ac-item", 3, "mousedown"], [1, "ac-code"], [1, "ac-name"], [1, "ac-qty"], [1, "qty-ok"], [3, "class"], ["type", "number", "min", "0", 1, "line-input", "text-right", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "btn-remove-line", 3, "click"], [1, "total-label"], [1, "cell-right", "total-value"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["label", "Entrep\xF4ts"], [3, "value"], ["label", "Emplacements virtuels"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ex: transporteur, agence\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ex: ordre de transfert", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], ["entityType", "STOCK_PICKING", 3, "entityId"], [3, "createdBy", "createdAt", "updatedBy", "updatedAt"]], template: function TransfertDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
        \u0275\u0275listener("click", function TransfertDetailComponent_Template_button_click_3_listener() {
          return ctx.router.navigate([ctx.backRoute]);
        });
        \u0275\u0275elementStart(4, "span", 5);
        \u0275\u0275text(5, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div")(7, "h1", 6)(8, "span", 5);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, TransfertDetailComponent_Conditional_10_Template, 1, 1)(11, TransfertDetailComponent_Conditional_11_Template, 1, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, TransfertDetailComponent_Conditional_12_Template, 2, 2, "span", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 8);
        \u0275\u0275conditionalCreate(14, TransfertDetailComponent_Conditional_14_Template, 4, 1, "button", 9);
        \u0275\u0275conditionalCreate(15, TransfertDetailComponent_Conditional_15_Template, 8, 2);
        \u0275\u0275conditionalCreate(16, TransfertDetailComponent_Conditional_16_Template, 4, 0, "button", 10);
        \u0275\u0275conditionalCreate(17, TransfertDetailComponent_Conditional_17_Template, 5, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(18, TransfertDetailComponent_Conditional_18_Template, 4, 1, "div", 11);
        \u0275\u0275conditionalCreate(19, TransfertDetailComponent_Conditional_19_Template, 5, 1, "div", 12);
        \u0275\u0275conditionalCreate(20, TransfertDetailComponent_Conditional_20_Template, 10, 5, "div", 13);
        \u0275\u0275conditionalCreate(21, TransfertDetailComponent_Conditional_21_Template, 3, 0, "div", 14)(22, TransfertDetailComponent_Conditional_22_Template, 3, 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.isTransferReception ? "move_to_inbox" : "compare_arrows");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isTransferReception ? 10 : 11);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.isNew && ctx.picking ? 12 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isPendingReception && !ctx.isTransferReception ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isPendingReception && ctx.isTransferReception ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isDone && ctx.isTransferReception ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.isDone && !ctx.isCancelled && !ctx.isPendingReception ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isPendingReception && !ctx.isTransferReception ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isDone && (ctx.picking == null ? null : ctx.picking.accountMoveName) ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 21 : 22);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, AuditFooterComponent, AuditTrailComponent, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: rgba(139, 92, 246, 0.9);\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 6px;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-back[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.state-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.state-badge[data-state=draft][_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.state-badge[data-state=done][_ngcontent-%COMP%] {\n  background: #ede7f6;\n  color: #4527a0;\n}\n.state-badge[data-state=cancelled][_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-validate[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-validate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5a32a3;\n}\n.btn-cancel-picking[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px;\n  background: var(--bg-surface);\n  color: var(--danger);\n  border: 1px solid #dc3545;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-cancel-picking[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-cancel-picking[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n}\n.btn-cancel-picking[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #ede7f6;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  color: #4527a0;\n  border: 1px solid #d1c4e9;\n}\n.info-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: rgba(139, 92, 246, 0.9);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 16px;\n  align-items: start;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: visible;\n  margin-bottom: 12px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  border-radius: 8px 8px 0 0;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n}\n.btn-add-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-add-line[_ngcontent-%COMP%]:hover {\n  background: #5a32a3;\n}\n.lines-container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.empty-lines[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table.has-lines[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 10px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid #e9ecef;\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border-bottom: 1px solid var(--border-light);\n  font-size: 13px;\n  vertical-align: middle;\n}\n.lines-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-top: 2px solid #e9ecef;\n  background: var(--bg-hover);\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.cell-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.th-dispo[_ngcontent-%COMP%] {\n  text-align: right;\n  width: 90px;\n}\n.td-dispo[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.total-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.total-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n  text-align: right;\n}\n.line-select[_ngcontent-%COMP%], \n.line-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 8px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: var(--bg-surface);\n}\n.line-select[_ngcontent-%COMP%]:focus, \n.line-input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(139, 92, 246, 0.9);\n}\n.btn-remove-line[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 3px;\n  border-radius: 4px;\n}\n.btn-remove-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-remove-line[_ngcontent-%COMP%]:hover {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.qty-ok[_ngcontent-%COMP%] {\n  color: #198754;\n  font-weight: 600;\n  font-size: 12px;\n}\n.qty-warn[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n  font-size: 12px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 4px;\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: rgba(139, 92, 246, 0.9);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.form-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-primary);\n  padding: 4px 0;\n}\n.loc-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.loc-value[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(139, 92, 246, 0.9);\n}\n.transfer-arrow[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 6px 0;\n  color: rgba(139, 92, 246, 0.9);\n}\n.transfer-arrow[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.info-banner.info-warning[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: var(--warning);\n}\n.info-banner.info-warning[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.state-badge[data-state=pending_reception][_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.card-subtitle[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--text-muted);\n}\n.text-warning[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n}\n.btn-cancel-picking[_ngcontent-%COMP%] {\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.ac-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ac-field[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.ac-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  font-size: 15px;\n  color: var(--text-muted);\n  pointer-events: none;\n  z-index: 1;\n  transition: color 0.15s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ac-wrap[_ngcontent-%COMP%]:focus-within   .ac-icon[_ngcontent-%COMP%] {\n  color: rgba(139, 92, 246, 0.9);\n}\n.ac-field[_ngcontent-%COMP%]   .line-select[_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n.ac-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 3px);\n  left: 0;\n  z-index: 1050;\n  min-width: max(100%, 420px);\n  background: var(--bg-surface);\n  border: 1.5px solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16), 0 3px 8px rgba(0, 0, 0, 0.07);\n  max-height: 340px;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_acDrop 0.12s ease-out;\n}\n@keyframes _ngcontent-%COMP%_acDrop {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ac-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-light);\n  border-left: 3px solid transparent;\n  transition: background 0.1s, border-left-color 0.1s;\n}\n.ac-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ac-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-left-color: rgba(139, 92, 246, 0.9);\n}\n.ac-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.ac-code[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-family: "Roboto Mono", monospace;\n  color: rgba(139, 92, 246, 0.9);\n  background: rgba(111, 66, 193, 0.1);\n  padding: 2px 7px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.ac-qty[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-family: "Roboto Mono", monospace;\n  color: var(--success);\n  background: var(--success-bg);\n  padding: 2px 7px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  font-weight: 600;\n}\n.ac-qty.qty-low[_ngcontent-%COMP%] {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n/*# sourceMappingURL=transfert-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransfertDetailComponent, [{
    type: Component,
    args: [{ selector: "app-transfert-detail", standalone: true, imports: [CommonModule, FormsModule, AuditFooterComponent, AuditTrailComponent], template: `<div class="page-container">
  <div class="page-header">
    <div class="header-left">
      <button class="btn-back" (click)="router.navigate([backRoute])"><span class="material-icons">arrow_back</span></button>
      <div>
        <h1 class="page-title">
          <span class="material-icons">{{ isTransferReception ? 'move_to_inbox' : 'compare_arrows' }}</span>
          @if (isTransferReception) {
            {{ isNew ? 'R\xE9ception de transfert' : ('R\xE9ception \u2014 ' + (picking?.name || '')) }}
          } @else {
            {{ isNew ? 'Nouveau transfert inter-d\xE9p\xF4t' : (picking?.name || 'Transfert') }}
          }
        </h1>
        @if (!isNew && picking) {
          <span class="state-badge" [attr.data-state]="picking.state">{{ stateLabel(picking.state || '') }}</span>
        }
      </div>
    </div>
    <div class="header-actions">
      <!-- Transfer en attente c\xF4t\xE9 source : seul "Annuler" est disponible -->
      @if (isPendingReception && !isTransferReception) {
        <button class="btn-cancel-picking" (click)="cancel()" [disabled]="cancelling">
          <span class="material-icons">cancel</span> Annuler le transfert
        </button>
      }
      <!-- R\xE9ception en attente c\xF4t\xE9 destination : confirmer + t\xE9l\xE9charger -->
      @if (isPendingReception && isTransferReception) {
        <button class="btn-secondary" (click)="downloadBordereau()">
          <span class="material-icons">download</span> Bordereau PDF
        </button>
        <button class="btn-validate" (click)="confirmReception()" [disabled]="confirming">
          <span class="material-icons">done_all</span> {{ confirming ? 'Confirmation...' : 'Confirmer la r\xE9ception' }}
        </button>
      }
      <!-- R\xE9ception d\xE9j\xE0 confirm\xE9e : bordereau disponible en t\xE9l\xE9chargement -->
      @if (isDone && isTransferReception) {
        <button class="btn-secondary" (click)="downloadBordereau()">
          <span class="material-icons">picture_as_pdf</span> Bordereau PDF
        </button>
      }
      <!-- Brouillon : sauvegarder, valider, annuler -->
      @if (!isDone && !isCancelled && !isPendingReception) {
        <button class="btn-secondary" (click)="save()" [disabled]="saving">
          <span class="material-icons">save</span> {{ saving ? 'Sauvegarde...' : 'Sauvegarder' }}
        </button>
        @if (!isNew) {
          <button class="btn-validate" (click)="validate()" [disabled]="validating">
            <span class="material-icons">compare_arrows</span> {{ validating ? 'Transfert en cours...' : 'Valider le transfert' }}
          </button>
          <button class="btn-cancel-picking" (click)="cancel()" [disabled]="cancelling">
            <span class="material-icons">cancel</span>
          </button>
        }
      }
    </div>
  </div>

  @if (errorMsg) { <div class="alert alert-danger"><span class="material-icons">error</span> {{ errorMsg }}</div> }

  <!-- Bani\xE8re transfert valid\xE9 c\xF4t\xE9 source (en attente c\xF4t\xE9 destination) -->
  @if (isPendingReception && !isTransferReception) {
    <div class="info-banner info-warning">
      <span class="material-icons">hourglass_empty</span>
      Les articles ont \xE9t\xE9 destock\xE9s de la source. En attente de confirmation de r\xE9ception \xE0 destination.
      @if (picking?.linkedPickingName) {
        \xB7 R\xE9ception li\xE9e : <strong>{{ picking!.linkedPickingName }}</strong>
      }
    </div>
  }

  <!-- Bani\xE8re transfert termin\xE9 -->
  @if (isDone && picking?.accountMoveName) {
    <div class="info-banner">
      <span class="material-icons">swap_horiz</span>
      Transfert valoris\xE9 \u2014 \xE9criture comptable : <strong>{{ picking!.accountMoveName }}</strong>
      \xB7 Valeur : <strong>{{ picking!.totalValue | number:'1.0-0' }} FCFA</strong>
    </div>
  }

  @if (loading) { <div class="loading"><span class="material-icons spin">refresh</span></div> }
  @else {

    <!-- === FORMULAIRE DE R\xC9CEPTION (c\xF4t\xE9 destination) === -->
    @if (isTransferReception && isPendingReception && receivedLines.length > 0) {
      <div class="form-layout">
        <div class="form-main">
          <div class="card">
            <div class="card-header">
              <span>Quantit\xE9s re\xE7ues</span>
              <span class="card-subtitle">Saisir les quantit\xE9s physiquement re\xE7ues \u2014 le reliquat retournera \xE0 la source</span>
            </div>
            <div class="lines-container">
              <table class="lines-table has-lines">
                <thead><tr>
                  <th style="width:40%">Article</th>
                  <th class="cell-right">Qt\xE9 command\xE9e</th>
                  <th class="cell-right">Qt\xE9 re\xE7ue</th>
                  <th class="cell-right">Reliquat</th>
                </tr></thead>
                <tbody>
                  @for (line of receivedLines; track line.moveId) {
                    <tr>
                      <td class="font-bold">{{ line.productName }}</td>
                      <td class="cell-right">{{ line.qteCommandee }}</td>
                      <td>
                        <input type="number" class="line-input" [(ngModel)]="line.qteRecue"
                               min="0" [max]="line.qteCommandee" />
                      </td>
                      <td class="cell-right" [class.text-warning]="line.qteCommandee - line.qteRecue > 0">
                        {{ line.qteCommandee - line.qteRecue | number:'1.0-2' }}
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="form-side">
          <div class="card">
            <div class="card-header">Informations</div>
            <div class="card-body">
              <div class="form-group">
                <label>Entrep\xF4t destination</label>
                <div class="form-value">{{ bordereau?.warehouseName || locationName(picking?.locationDestId!) }}</div>
              </div>
              <div class="form-group">
                <label>Transfert source</label>
                <div class="form-value">{{ picking?.linkedPickingName || '\u2014' }}</div>
              </div>
              <div class="form-group">
                <label>Op\xE9rateur</label>
                <div class="form-value">{{ bordereau?.operatorName || picking?.createdBy || '\u2014' }}</div>
              </div>
              <div class="form-group">
                <label>Date</label>
                <div class="form-value">{{ picking?.createdAt | date:'dd/MM/yyyy' }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }

    <!-- === FORMULAIRE STANDARD (transfert brouillon / done / annul\xE9 / pending c\xF4t\xE9 source) === -->
    @if (!isTransferReception || !isPendingReception) {
      <div class="form-layout">
        <div class="form-main">
          <div class="card">
            <div class="card-header">
              <span>Articles \xE0 transf\xE9rer</span>
              @if (isDraft) {
                <button class="btn-add-line" (click)="addLine()"><span class="material-icons">add</span> Ajouter</button>
              }
            </div>
            <div class="lines-container">
              @if (lines.length === 0) { <div class="empty-lines">Aucune ligne \u2014 ajoutez des articles \xE0 transf\xE9rer</div> }
              <table class="lines-table" [class.has-lines]="lines.length > 0">
                @if (lines.length > 0) {
                  <thead><tr>
                    <th style="width:36%">Article</th>
                    <th>Unit\xE9</th>
                    @if (isDraft) {
                      <th class="th-dispo">Dispo source</th>
                    }
                    <th class="text-right">{{ isDraft ? 'Quantit\xE9' : 'Qt\xE9 transf\xE9r\xE9e' }}</th>
                    <th class="text-right">CMUP</th>
                    <th class="text-right">Valeur</th>
                    @if (isDraft) { <th></th> }
                  </tr></thead>
                }
                <tbody>
                  @for (line of lines; track $index; let i = $index) {
                    <tr>
                      <td>
                        @if (isDraft) {
                          <div class="ac-wrap">
                            <div class="ac-field">
                              <span class="material-icons ac-icon">search</span>
                              <input type="text" class="line-select"
                                     #productInput
                                     [(ngModel)]="lineSearchTexts[i]"
                                     (input)="openDropdownIndex = i"
                                     (focus)="openDropdownIndex = i"
                                     (blur)="onLineBlur(i)"
                                     (keydown.enter)="onProductEnter(i, $event)"
                                     placeholder="Chercher un article\u2026"
                                     autocomplete="off" />
                            </div>
                            @if (openDropdownIndex === i && lineFilteredProducts(i).length > 0) {
                              <div class="ac-dropdown">
                                @for (p of lineFilteredProducts(i); track p.id) {
                                  <div class="ac-item" (mousedown)="selectLineProduct(i, p)">
                                    @if (p.defaultCode) { <span class="ac-code">{{ p.defaultCode }}</span> }
                                    <span class="ac-name">{{ p.name }}</span>
                                    <span class="ac-qty" [class.qty-low]="p.availableQty <= 0">{{ p.availableQty | number:'1.0-0' }}</span>
                                  </div>
                                }
                              </div>
                            }
                          </div>
                        } @else { <span class="font-bold">{{ productName(line.productId) }}</span> }
                      </td>
                      <td>{{ line.uomName }}</td>
                      @if (isDraft) {
                        <td class="td-dispo">
                          @if (srcIsVirtual) {
                            <span class="qty-ok">Illimit\xE9</span>
                          } @else {
                            <span [class]="line.availableQty < line.qtyDemanded ? 'qty-warn' : 'qty-ok'">
                              {{ line.availableQty | number:'1.0-2' }}
                            </span>
                          }
                        </td>
                      }
                      <td class="cell-right">
                        @if (isDraft) {
                          <input type="number" class="line-input text-right"
                                 [(ngModel)]="line.qtyDemanded" min="0"
                                 (ngModelChange)="line.qtyDone = line.qtyDemanded"
                                 (keydown.enter)="onLineEnter()" />
                        } @else {
                          <span class="font-bold">{{ line.qtyDone }}</span>
                        }
                      </td>
                      <td class="cell-right">{{ line.priceUnit | number:'1.0-0' }}</td>
                      <td class="cell-right font-bold">{{ line.qtyDemanded * line.priceUnit | number:'1.0-0' }}</td>
                      @if (isDraft) { <td><button class="btn-remove-line" (click)="removeLine(i)"><span class="material-icons">delete</span></button></td> }
                    </tr>
                  }
                </tbody>
                @if (lines.length > 0) {
                  <tfoot><tr>
                    <td [attr.colspan]="isDraft ? 4 : 3" class="total-label">VALEUR TOTALE TRANSF\xC9R\xC9E</td>
                    <td class="cell-right total-value">{{ lineTotal | number:'1.0-0' }} FCFA</td>
                    @if (isDraft) { <td></td> }
                  </tr></tfoot>
                }
              </table>
            </div>
          </div>
        </div>

        <div class="form-side">
          <div class="card">
            <div class="card-header">Entrep\xF4ts</div>
            <div class="card-body">
              <div class="form-group">
                <label>Source <span class="req">*</span></label>
                @if (isDraft) {
                  <select class="form-control" [(ngModel)]="selectedSrcKey" (ngModelChange)="onSrcKeyChange()">
                    <option value="">\u2014 Choisir \u2014</option>
                    <optgroup label="Entrep\xF4ts">
                      @for (w of warehouses; track w.id) { <option [value]="'w:' + w.id">{{ w.name }}</option> }
                    </optgroup>
                    @if (virtualLocations.length > 0) {
                      <optgroup label="Emplacements virtuels">
                        @for (l of virtualLocations; track l.id) {
                          <option [value]="'l:' + l.id">{{ l.name }} ({{ l.usage === 'customer' ? 'Client' : 'Fournisseur' }})</option>
                        }
                      </optgroup>
                    }
                  </select>
                } @else {
                  <div class="form-value loc-value"><span class="material-icons">{{ picking?.sourceWarehouseName ? 'warehouse' : 'swap_horiz' }}</span>{{ picking?.sourceWarehouseName || locationName(picking?.locationId!) }}</div>
                }
              </div>
              <div class="transfer-arrow"><span class="material-icons">south</span></div>
              <div class="form-group">
                <label>Destination <span class="req">*</span></label>
                @if (isDraft) {
                  <select class="form-control" [(ngModel)]="selectedDestKey" (ngModelChange)="onDestKeyChange()">
                    <option value="">\u2014 Choisir \u2014</option>
                    <optgroup label="Entrep\xF4ts">
                      @for (w of warehouses; track w.id) { <option [value]="'w:' + w.id">{{ w.name }}</option> }
                    </optgroup>
                    @if (virtualLocations.length > 0) {
                      <optgroup label="Emplacements virtuels">
                        @for (l of virtualLocations; track l.id) {
                          <option [value]="'l:' + l.id">{{ l.name }} ({{ l.usage === 'customer' ? 'Client' : 'Fournisseur' }})</option>
                        }
                      </optgroup>
                    }
                  </select>
                } @else {
                  <div class="form-value loc-value"><span class="material-icons">{{ picking?.destWarehouseName ? 'warehouse' : 'swap_horiz' }}</span>{{ picking?.destWarehouseName || locationName(picking?.locationDestId!) }}</div>
                }
              </div>
            </div>
          </div>

          <div class="card" style="margin-top: 12px">
            <div class="card-header">D\xE9tails</div>
            <div class="card-body">
              <div class="form-group">
                <label>Date planifi\xE9e</label>
                @if (isDraft) { <input type="date" class="form-control" [(ngModel)]="scheduledDate" /> }
                @else { <div class="form-value">{{ scheduledDate | date:'dd/MM/yyyy' }}</div> }
              </div>
              <div class="form-group">
                <label>Partenaire</label>
                @if (isDraft) { <input type="text" class="form-control" [(ngModel)]="partnerName" placeholder="Ex: transporteur, agence\u2026" /> }
                @else { <div class="form-value">{{ partnerName || '\u2014' }}</div> }
              </div>
              <div class="form-group">
                <label>Origine</label>
                @if (isDraft) { <input type="text" class="form-control" [(ngModel)]="origin" placeholder="Ex: ordre de transfert" /> }
                @else { <div class="form-value">{{ origin || '\u2014' }}</div> }
              </div>
              <div class="form-group">
                <label>Notes</label>
                @if (isDraft) { <textarea class="form-control" [(ngModel)]="notes" rows="2"></textarea> }
                @else { <div class="form-value">{{ notes || '\u2014' }}</div> }
              </div>
            </div>
          </div>
        </div>
      </div>
    }

    @if (picking) {
      <app-audit-trail entityType="STOCK_PICKING" [entityId]="picking.id ?? null"></app-audit-trail>
      <app-audit-footer
        [createdBy]="picking.createdBy"
        [createdAt]="picking.createdAt"
        [updatedBy]="picking.updatedBy"
        [updatedAt]="picking.updatedAt">
      </app-audit-footer>
    }
  }
</div>
`, styles: ['/* src/app/modules/stock/components/transferts/transfert-detail.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header .page-title .material-icons {\n  color: rgba(139, 92, 246, 0.9);\n}\n.page-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-back {\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  cursor: pointer;\n  padding: 6px;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n}\n.btn-back:hover {\n  background: var(--bg-hover);\n}\n.btn-back .material-icons {\n  font-size: 20px;\n}\n.state-badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.state-badge[data-state=draft] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.state-badge[data-state=done] {\n  background: #ede7f6;\n  color: #4527a0;\n}\n.state-badge[data-state=cancelled] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-secondary .material-icons {\n  font-size: 16px;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-validate .material-icons {\n  font-size: 16px;\n}\n.btn-validate:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-validate:hover:not(:disabled) {\n  background: #5a32a3;\n}\n.btn-cancel-picking {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px;\n  background: var(--bg-surface);\n  color: var(--danger);\n  border: 1px solid #dc3545;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-cancel-picking .material-icons {\n  font-size: 18px;\n}\n.btn-cancel-picking:hover {\n  background: var(--danger-bg);\n}\n.btn-cancel-picking:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: var(--success);\n  border: 1px solid var(--success-bg);\n}\n.info-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #ede7f6;\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  color: #4527a0;\n  border: 1px solid #d1c4e9;\n}\n.info-banner .material-icons {\n  font-size: 18px;\n  color: rgba(139, 92, 246, 0.9);\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-layout {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 16px;\n  align-items: start;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: visible;\n  margin-bottom: 12px;\n}\n.card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  border-radius: 8px 8px 0 0;\n}\n.card .card-body {\n  padding: 16px 18px;\n}\n.btn-add-line {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line .material-icons {\n  font-size: 16px;\n}\n.btn-add-line:hover {\n  background: #5a32a3;\n}\n.lines-container {\n  padding: 0;\n}\n.empty-lines {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lines-table.has-lines thead th {\n  padding: 9px 10px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid #e9ecef;\n}\n.lines-table td {\n  padding: 7px 10px;\n  border-bottom: 1px solid var(--border-light);\n  font-size: 13px;\n  vertical-align: middle;\n}\n.lines-table tfoot td {\n  padding: 10px;\n  border-top: 2px solid #e9ecef;\n  background: var(--bg-hover);\n}\n.lines-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.lines-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.cell-right {\n  text-align: right;\n}\n.text-right {\n  text-align: right;\n}\n.th-dispo {\n  text-align: right;\n  width: 90px;\n}\n.td-dispo {\n  text-align: right;\n}\n.font-bold {\n  font-weight: 600;\n}\n.total-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.total-value {\n  font-size: 14px;\n  font-weight: 700;\n  font-family: "Roboto Mono", monospace;\n  text-align: right;\n}\n.line-select,\n.line-input {\n  width: 100%;\n  padding: 5px 8px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  background: var(--bg-surface);\n}\n.line-select:focus,\n.line-input:focus {\n  border-color: rgba(139, 92, 246, 0.9);\n}\n.btn-remove-line {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 3px;\n  border-radius: 4px;\n}\n.btn-remove-line .material-icons {\n  font-size: 16px;\n}\n.btn-remove-line:hover {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n.qty-ok {\n  color: #198754;\n  font-weight: 600;\n  font-size: 12px;\n}\n.qty-warn {\n  color: var(--danger);\n  font-weight: 600;\n  font-size: 12px;\n}\n.form-group {\n  margin-bottom: 12px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 4px;\n}\n.form-group .req {\n  color: var(--danger);\n}\n.form-control {\n  width: 100%;\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  border-color: rgba(139, 92, 246, 0.9);\n}\ntextarea.form-control {\n  resize: vertical;\n}\n.form-value {\n  font-size: 13px;\n  color: var(--text-primary);\n  padding: 4px 0;\n}\n.loc-value {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.loc-value .material-icons {\n  font-size: 14px;\n  color: rgba(139, 92, 246, 0.9);\n}\n.transfer-arrow {\n  text-align: center;\n  padding: 6px 0;\n  color: rgba(139, 92, 246, 0.9);\n}\n.transfer-arrow .material-icons {\n  font-size: 24px;\n}\n.info-banner.info-warning {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: var(--warning);\n}\n.info-banner.info-warning .material-icons {\n  color: #f59e0b;\n}\n.state-badge[data-state=pending_reception] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.card-subtitle {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--text-muted);\n}\n.text-warning {\n  color: var(--danger);\n  font-weight: 600;\n}\n.btn-cancel-picking {\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.ac-wrap {\n  position: relative;\n}\n.ac-field {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.ac-icon {\n  position: absolute;\n  left: 8px;\n  font-size: 15px;\n  color: var(--text-muted);\n  pointer-events: none;\n  z-index: 1;\n  transition: color 0.15s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ac-wrap:focus-within .ac-icon {\n  color: rgba(139, 92, 246, 0.9);\n}\n.ac-field .line-select {\n  padding-left: 30px;\n}\n.ac-dropdown {\n  position: absolute;\n  top: calc(100% + 3px);\n  left: 0;\n  z-index: 1050;\n  min-width: max(100%, 420px);\n  background: var(--bg-surface);\n  border: 1.5px solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16), 0 3px 8px rgba(0, 0, 0, 0.07);\n  max-height: 340px;\n  overflow-y: auto;\n  animation: acDrop 0.12s ease-out;\n}\n@keyframes acDrop {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ac-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-light);\n  border-left: 3px solid transparent;\n  transition: background 0.1s, border-left-color 0.1s;\n}\n.ac-item:last-child {\n  border-bottom: none;\n}\n.ac-item:hover {\n  background: var(--bg-hover);\n  border-left-color: rgba(139, 92, 246, 0.9);\n}\n.ac-name {\n  flex: 1;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.ac-code {\n  font-size: 11px;\n  font-family: "Roboto Mono", monospace;\n  color: rgba(139, 92, 246, 0.9);\n  background: rgba(111, 66, 193, 0.1);\n  padding: 2px 7px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.ac-qty {\n  font-size: 11px;\n  font-family: "Roboto Mono", monospace;\n  color: var(--success);\n  background: var(--success-bg);\n  padding: 2px 7px;\n  border-radius: 4px;\n  flex-shrink: 0;\n  font-weight: 600;\n}\n.ac-qty.qty-low {\n  color: var(--danger);\n  background: var(--danger-bg);\n}\n/*# sourceMappingURL=transfert-detail.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: StockService }, { type: AuthService }], { productInputs: [{
    type: ViewChildren,
    args: ["productInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransfertDetailComponent, { className: "TransfertDetailComponent", filePath: "app/modules/stock/components/transferts/transfert-detail.component.ts", lineNumber: 18 });
})();
export {
  TransfertDetailComponent
};
//# sourceMappingURL=chunk-YS2QZETW.js.map
