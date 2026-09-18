import {
  StockService
} from "./chunk-LIGNVDFD.js";
import {
  Router
} from "./chunk-4W3TIS2I.js";
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
  DatePipe,
  DecimalPipe,
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/stock/components/transferts/transfert-list.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function TransfertListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function TransfertListComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/transferts/new"]));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouveau transfert ");
    \u0275\u0275elementEnd();
  }
}
function TransfertListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function TransfertListComponent_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAllReceptions());
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.showAllReceptions ? "visibility_off" : "history");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.showAllReceptions ? "Masquer l'historique" : "Voir l'historique", " ");
  }
}
function TransfertListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pendingReceptionCount);
  }
}
function TransfertListComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.receptions.length);
  }
}
function TransfertListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 15);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function TransfertListComponent_Conditional_23_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function TransfertListComponent_Conditional_23_For_16_Template_button_click_0_listener() {
      const opt_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setGroupBy(opt_r6.key));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.groupBy === opt_r6.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r6.label, " ");
  }
}
function TransfertListComponent_Conditional_23_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function TransfertListComponent_Conditional_23_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setGroupBy(""));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Annuler ");
    \u0275\u0275elementEnd();
  }
}
function TransfertListComponent_Conditional_23_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 4);
    \u0275\u0275text(2, "compare_arrows");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun transfert sur cette p\xE9riode. Cr\xE9ez un transfert pour d\xE9placer des articles entre d\xE9p\xF4ts.");
    \u0275\u0275elementEnd()();
  }
}
function TransfertListComponent_Conditional_23_Conditional_20_Conditional_21_For_1_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36);
    \u0275\u0275listener("click", function TransfertListComponent_Conditional_23_Conditional_20_Conditional_21_For_1_Conditional_8_For_1_Template_tr_click_0_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/transferts", p_r11.id]));
    });
    \u0275\u0275elementStart(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 39);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 39);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 40);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 41);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "span", 42);
    \u0275\u0275text(23, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.sourceWarehouseName || p_r11.locationName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.destWarehouseName || p_r11.locationDestName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.origin || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 9, p_r11.scheduledDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r11.dateDone ? \u0275\u0275pipeBind2(14, 12, p_r11.dateDone, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-state", p_r11.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(p_r11.state || ""));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 15, p_r11.totalValue, "1.0-0"));
  }
}
function TransfertListComponent_Conditional_23_Conditional_20_Conditional_21_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, TransfertListComponent_Conditional_23_Conditional_20_Conditional_21_For_1_Conditional_8_For_1_Template, 24, 18, "tr", 35, _forTrack1);
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275repeater(ctx_r1.getGroupItems(row_r9.key));
  }
}
function TransfertListComponent_Conditional_23_Conditional_20_Conditional_21_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 30);
    \u0275\u0275listener("click", function TransfertListComponent_Conditional_23_Conditional_20_Conditional_21_For_1_Template_tr_click_0_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleGroup(row_r9.key));
    });
    \u0275\u0275elementStart(1, "td", 31)(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, TransfertListComponent_Conditional_23_Conditional_20_Conditional_21_For_1_Conditional_8_Template, 2, 0);
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isExpanded(row_r9.key) ? "expand_more" : "chevron_right");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.count);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isExpanded(row_r9.key) ? 8 : -1);
  }
}
function TransfertListComponent_Conditional_23_Conditional_20_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, TransfertListComponent_Conditional_23_Conditional_20_Conditional_21_For_1_Template, 9, 4, null, null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.groupedRows);
  }
}
function TransfertListComponent_Conditional_23_Conditional_20_Conditional_22_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 44);
    \u0275\u0275listener("click", function TransfertListComponent_Conditional_23_Conditional_20_Conditional_22_For_1_Template_tr_click_0_listener() {
      const p_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/transferts", p_r13.id]));
    });
    \u0275\u0275elementStart(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 39);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 39);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 40);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 41);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "span", 42);
    \u0275\u0275text(23, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r13.sourceWarehouseName || p_r13.locationName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r13.destWarehouseName || p_r13.locationDestName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r13.origin || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 9, p_r13.scheduledDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r13.dateDone ? \u0275\u0275pipeBind2(14, 12, p_r13.dateDone, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-state", p_r13.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(p_r13.state || ""));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 15, p_r13.totalValue, "1.0-0"));
  }
}
function TransfertListComponent_Conditional_23_Conditional_20_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, TransfertListComponent_Conditional_23_Conditional_20_Conditional_22_For_1_Template, 24, 18, "tr", 43, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.transferts);
  }
}
function TransfertListComponent_Conditional_23_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 26)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "De");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Vers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Origine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Date planifi\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Date faite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 29);
    \u0275\u0275text(18, "Valeur");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275conditionalCreate(21, TransfertListComponent_Conditional_23_Conditional_20_Conditional_21_Template, 2, 0)(22, TransfertListComponent_Conditional_23_Conditional_20_Conditional_22_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(21);
    \u0275\u0275conditional(ctx_r1.groupBy ? 21 : 22);
  }
}
function TransfertListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "label");
    \u0275\u0275text(3, "Du");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertListComponent_Conditional_23_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dateFrom, $event) || (ctx_r1.dateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TransfertListComponent_Conditional_23_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyTransfertFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 17)(6, "label");
    \u0275\u0275text(7, "Au");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function TransfertListComponent_Conditional_23_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dateTo, $event) || (ctx_r1.dateTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TransfertListComponent_Conditional_23_Template_input_ngModelChange_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyTransfertFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 19);
    \u0275\u0275listener("click", function TransfertListComponent_Conditional_23_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearDateFilter());
    });
    \u0275\u0275text(10, "Toutes dates");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 20)(12, "span", 21);
    \u0275\u0275text(13, "Regrouper par :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 22);
    \u0275\u0275repeaterCreate(15, TransfertListComponent_Conditional_23_For_16_Template, 4, 4, "button", 23, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, TransfertListComponent_Conditional_23_Conditional_17_Template, 4, 0, "button", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 12);
    \u0275\u0275conditionalCreate(19, TransfertListComponent_Conditional_23_Conditional_19_Template, 5, 0, "div", 25)(20, TransfertListComponent_Conditional_23_Conditional_20_Template, 23, 1, "table", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dateFrom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dateTo);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.groupByOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.groupBy ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.transferts.length === 0 ? 19 : 20);
  }
}
function TransfertListComponent_Conditional_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 4);
    \u0275\u0275text(2, "move_to_inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.showAllReceptions ? "Aucune r\xE9ception de transfert." : "Aucune r\xE9ception en attente.");
  }
}
function TransfertListComponent_Conditional_24_Conditional_2_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 44);
    \u0275\u0275listener("click", function TransfertListComponent_Conditional_24_Conditional_2_For_16_Template_tr_click_0_listener() {
      const p_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/stock/transferts", p_r15.id]));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 45)(3, "span", 46);
    \u0275\u0275text(4, "move_to_inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 39);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 40);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "span", 42);
    \u0275\u0275text(19, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(p_r15.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r15.linkedPickingName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r15.destWarehouseName || p_r15.locationDestName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 6, p_r15.createdAt, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-state", p_r15.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(p_r15.state || ""));
  }
}
function TransfertListComponent_Conditional_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 26)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Transfert source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Emplacement destination");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, TransfertListComponent_Conditional_24_Conditional_2_For_16_Template, 20, 9, "tr", 43, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.receptions);
  }
}
function TransfertListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275conditionalCreate(1, TransfertListComponent_Conditional_24_Conditional_1_Template, 5, 1, "div", 25)(2, TransfertListComponent_Conditional_24_Conditional_2_Template, 17, 0, "table", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.receptions.length === 0 ? 1 : 2);
  }
}
var TransfertListComponent = class _TransfertListComponent {
  constructor(stockService, authService, router) {
    this.stockService = stockService;
    this.authService = authService;
    this.router = router;
    this.activeTab = "transferts";
    this.allTransferts = [];
    this.transferts = [];
    this.dateFrom = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.dateTo = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.allReceptions = [];
    this.receptions = [];
    this.showAllReceptions = false;
    this.loading = false;
    this.groupBy = "";
    this.expandedGroups = /* @__PURE__ */ new Set();
    this.groupByOptions = [
      { key: "mois", label: "Mois", icon: "calendar_month" },
      { key: "source", label: "Entrep\xF4t src", icon: "warehouse" },
      { key: "destination", label: "Destination", icon: "place" },
      { key: "statut", label: "Statut", icon: "label" }
    ];
  }
  ngOnInit() {
    this.companyId = this.authService.getCompanyId();
    this.load();
  }
  load() {
    this.loading = true;
    forkJoin({
      transferts: this.stockService.getTransferts(this.companyId),
      receptions: this.stockService.getTransferReceptions(this.companyId, this.showAllReceptions)
    }).subscribe({
      next: ({ transferts, receptions }) => {
        this.allTransferts = transferts;
        this.allReceptions = receptions;
        this.applyTransfertFilter();
        this.applyReceptionFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyTransfertFilter() {
    this.transferts = this.allTransferts.filter((p) => {
      const d = p.scheduledDate?.split("T")[0] ?? "";
      if (this.dateFrom && d < this.dateFrom)
        return false;
      if (this.dateTo && d > this.dateTo)
        return false;
      return true;
    });
  }
  applyReceptionFilter() {
    this.receptions = this.showAllReceptions ? this.allReceptions : this.allReceptions.filter((p) => p.state !== "done" && p.state !== "cancelled");
  }
  clearDateFilter() {
    this.dateFrom = "";
    this.dateTo = "";
    this.applyTransfertFilter();
  }
  toggleAllReceptions() {
    this.showAllReceptions = !this.showAllReceptions;
    this.stockService.getTransferReceptions(this.companyId, this.showAllReceptions).subscribe((r) => {
      this.allReceptions = r;
      this.applyReceptionFilter();
    });
  }
  get pendingReceptionCount() {
    return this.allReceptions.filter((p) => p.state === "pending_reception").length;
  }
  stateLabel(s) {
    return {
      draft: "Brouillon",
      confirmed: "Confirm\xE9",
      done: "Effectu\xE9",
      cancelled: "Annul\xE9",
      pending_reception: "En attente"
    }[s] || s;
  }
  get groupedRows() {
    if (!this.groupBy)
      return [];
    const source = this.transferts;
    const map = /* @__PURE__ */ new Map();
    for (const item of source) {
      let key, label;
      switch (this.groupBy) {
        case "mois":
          key = (item.scheduledDate || "").substring(0, 7);
          label = key ? this.fmtMonth(key) : "(Sans date)";
          break;
        case "source":
          key = label = item.sourceWarehouseName || item.locationName || "(Sans source)";
          break;
        case "destination":
          key = label = item.destWarehouseName || item.locationDestName || "(Sans destination)";
          break;
        case "statut":
          key = item.state || "?";
          label = this.stateLabel(key);
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
  fmtMonth(ym) {
    const [y, m] = ym.split("-");
    return new Date(+y, +m - 1, 1).toLocaleDateString("fr-FR", { year: "numeric", month: "long" });
  }
  static {
    this.\u0275fac = function TransfertListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TransfertListComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransfertListComponent, selectors: [["app-transfert-list"]], decls: 25, vars: 11, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "btn-primary"], [1, "btn-secondary"], [1, "tab-bar"], [1, "tab-btn", 3, "click"], [1, "tab-count"], [1, "tab-badge"], [1, "loading-state"], [1, "card"], [1, "btn-primary", 3, "click"], [1, "btn-secondary", 3, "click"], [1, "material-icons", "spin"], [1, "filter-bar"], [1, "filter-date-group"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "filter-btn", 3, "click"], [1, "groupby-bar"], [1, "groupby-label"], [1, "groupby-btns"], [3, "active"], [1, "groupby-reset"], [1, "empty"], [1, "data-table"], [3, "click"], [1, "groupby-reset", 3, "click"], [1, "text-right"], [1, "group-header-row", 3, "click"], ["colspan", "9", 1, "group-header-cell"], [1, "material-icons", "expand-icon"], [1, "group-label"], [1, "badge"], [1, "detail-row", "clickable"], [1, "detail-row", "clickable", 3, "click"], [1, "font-mono", "font-bold", "text-purple"], [1, "text-muted", "small"], [1, "text-muted"], [1, "state-badge"], [1, "text-right", "font-mono"], [1, "material-icons", "chevron"], [1, "clickable"], [1, "clickable", 3, "click"], [1, "ref-with-icon"], [1, "material-icons", 2, "color", "#6f42c1", "font-size", "16px"]], template: function TransfertListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3)(4, "span", 4);
        \u0275\u0275text(5, "compare_arrows");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Transferts inter-d\xE9p\xF4ts");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(7, TransfertListComponent_Conditional_7_Template, 4, 0, "button", 5);
        \u0275\u0275conditionalCreate(8, TransfertListComponent_Conditional_8_Template, 4, 2, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7)(10, "button", 8);
        \u0275\u0275listener("click", function TransfertListComponent_Template_button_click_10_listener() {
          return ctx.activeTab = "transferts";
        });
        \u0275\u0275elementStart(11, "span", 4);
        \u0275\u0275text(12, "compare_arrows");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " Transferts ");
        \u0275\u0275elementStart(14, "span", 9);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "button", 8);
        \u0275\u0275listener("click", function TransfertListComponent_Template_button_click_16_listener() {
          return ctx.activeTab = "receptions";
        });
        \u0275\u0275elementStart(17, "span", 4);
        \u0275\u0275text(18, "move_to_inbox");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " R\xE9ceptions ");
        \u0275\u0275conditionalCreate(20, TransfertListComponent_Conditional_20_Template, 2, 1, "span", 10)(21, TransfertListComponent_Conditional_21_Template, 2, 1, "span", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(22, TransfertListComponent_Conditional_22_Template, 4, 0, "div", 11);
        \u0275\u0275conditionalCreate(23, TransfertListComponent_Conditional_23_Template, 21, 4);
        \u0275\u0275conditionalCreate(24, TransfertListComponent_Conditional_24_Template, 3, 1, "div", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.activeTab === "transferts" ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "receptions" ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "transferts");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.transferts.length);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeTab === "receptions");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.pendingReceptionCount > 0 ? 20 : 21);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading && ctx.activeTab === "transferts" ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading && ctx.activeTab === "receptions" ? 24 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: rgba(139, 92, 246, 0.9);\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .badge-count[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  font-size: 12px;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #5a32a3;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.filter-date-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.filter-date-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: rgba(139, 92, 246, 0.9);\n}\n.form-control.form-control-sm[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  font-size: 12px;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.info-tip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 10px 16px;\n  background: rgba(109, 40, 217, 0.1);\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 12px;\n  color: rgba(139, 92, 246, 0.9);\n  border: 1px solid #e1bee7;\n}\n.info-tip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--border-light);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid #e9ecef;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tr.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.data-table[_ngcontent-%COMP%]   tr.clickable[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px;\n  color: var(--text-muted);\n  gap: 10px;\n}\n.empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--border);\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  max-width: 360px;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.text-purple[_ngcontent-%COMP%] {\n  color: rgba(139, 92, 246, 0.9);\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chevron[_ngcontent-%COMP%] {\n  color: var(--border);\n  font-size: 18px !important;\n}\n.state-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.state-badge[data-state=draft][_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.state-badge[data-state=done][_ngcontent-%COMP%] {\n  background: #ede7f6;\n  color: #4527a0;\n}\n.state-badge[data-state=cancelled][_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.state-badge[data-state=pending_reception][_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.tab-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 18px;\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 0;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px 10px;\n  border: none;\n  background: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-muted);\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  border-radius: 4px 4px 0 0;\n  transition: color 0.15s, border-color 0.15s;\n}\n.tab-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: var(--text-secondary);\n  background: var(--bg-hover);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: rgba(139, 92, 246, 0.9);\n  border-bottom-color: rgba(139, 92, 246, 0.9);\n  background: none;\n  font-weight: 600;\n}\n.tab-count[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  font-size: 11px;\n  padding: 1px 7px;\n  border-radius: 10px;\n  font-weight: 600;\n}\n.tab-badge[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n  font-size: 11px;\n  padding: 1px 7px;\n  border-radius: 10px;\n  font-weight: 700;\n}\n.ref-with-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n/*# sourceMappingURL=transfert-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransfertListComponent, [{
    type: Component,
    args: [{ selector: "app-transfert-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div class="header-left">
      <h1 class="page-title"><span class="material-icons">compare_arrows</span> Transferts inter-d\xE9p\xF4ts</h1>
    </div>
    @if (activeTab === 'transferts') {
      <button class="btn-primary" (click)="router.navigate(['/stock/transferts/new'])">
        <span class="material-icons">add</span> Nouveau transfert
      </button>
    }
    @if (activeTab === 'receptions') {
      <button class="btn-secondary" (click)="toggleAllReceptions()">
        <span class="material-icons">{{ showAllReceptions ? 'visibility_off' : 'history' }}</span>
        {{ showAllReceptions ? 'Masquer l\\'historique' : 'Voir l\\'historique' }}
      </button>
    }
  </div>

  <!-- Onglets -->
  <div class="tab-bar">
    <button class="tab-btn" [class.active]="activeTab === 'transferts'" (click)="activeTab = 'transferts'">
      <span class="material-icons">compare_arrows</span>
      Transferts
      <span class="tab-count">{{ transferts.length }}</span>
    </button>
    <button class="tab-btn" [class.active]="activeTab === 'receptions'" (click)="activeTab = 'receptions'">
      <span class="material-icons">move_to_inbox</span>
      R\xE9ceptions
      @if (pendingReceptionCount > 0) {
        <span class="tab-badge">{{ pendingReceptionCount }}</span>
      } @else {
        <span class="tab-count">{{ receptions.length }}</span>
      }
    </button>
  </div>

  @if (loading) {
    <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ONGLET TRANSFERTS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (!loading && activeTab === 'transferts') {
    <div class="filter-bar">
      <div class="filter-date-group">
        <label>Du</label>
        <input type="date" class="form-control form-control-sm" [(ngModel)]="dateFrom" (ngModelChange)="applyTransfertFilter()">
      </div>
      <div class="filter-date-group">
        <label>Au</label>
        <input type="date" class="form-control form-control-sm" [(ngModel)]="dateTo" (ngModelChange)="applyTransfertFilter()">
      </div>
      <button class="filter-btn" (click)="clearDateFilter()">Toutes dates</button>
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
      @if (transferts.length === 0) {
        <div class="empty">
          <span class="material-icons">compare_arrows</span>
          <p>Aucun transfert sur cette p\xE9riode. Cr\xE9ez un transfert pour d\xE9placer des articles entre d\xE9p\xF4ts.</p>
        </div>
      } @else {
        <table class="data-table">
          <thead>
            <tr>
              <th>R\xE9f\xE9rence</th><th>De</th><th>Vers</th><th>Origine</th>
              <th>Date planifi\xE9e</th><th>Date faite</th><th>Statut</th>
              <th class="text-right">Valeur</th><th></th>
            </tr>
          </thead>
          <tbody>
            @if (groupBy) {
              @for (row of groupedRows; track row.key) {
                <tr class="group-header-row" (click)="toggleGroup(row.key)">
                  <td class="group-header-cell" colspan="9">
                    <span class="material-icons expand-icon">{{ isExpanded(row.key) ? 'expand_more' : 'chevron_right' }}</span>
                    <span class="group-label">{{ row.label }}</span>
                    <span class="badge">{{ row.count }}</span>
                  </td>
                </tr>
                @if (isExpanded(row.key)) {
                  @for (p of getGroupItems(row.key); track p.id) {
                    <tr class="detail-row clickable" (click)="router.navigate(['/stock/transferts', p.id])">
                      <td class="font-mono font-bold text-purple">{{ p.name }}</td>
                      <td class="text-muted small">{{ p.sourceWarehouseName || p.locationName }}</td>
                      <td class="text-muted small">{{ p.destWarehouseName || p.locationDestName }}</td>
                      <td class="text-muted">{{ p.origin || '\u2014' }}</td>
                      <td class="text-muted">{{ p.scheduledDate | date:'dd/MM/yyyy' }}</td>
                      <td class="text-muted">{{ p.dateDone ? (p.dateDone | date:'dd/MM/yyyy') : '\u2014' }}</td>
                      <td><span class="state-badge" [attr.data-state]="p.state">{{ stateLabel(p.state || '') }}</span></td>
                      <td class="text-right font-mono">{{ p.totalValue | number:'1.0-0' }}</td>
                      <td><span class="material-icons chevron">chevron_right</span></td>
                    </tr>
                  }
                }
              }
            } @else {
              @for (p of transferts; track p.id) {
                <tr (click)="router.navigate(['/stock/transferts', p.id])" class="clickable">
                  <td class="font-mono font-bold text-purple">{{ p.name }}</td>
                  <td class="text-muted small">{{ p.sourceWarehouseName || p.locationName }}</td>
                  <td class="text-muted small">{{ p.destWarehouseName || p.locationDestName }}</td>
                  <td class="text-muted">{{ p.origin || '\u2014' }}</td>
                  <td class="text-muted">{{ p.scheduledDate | date:'dd/MM/yyyy' }}</td>
                  <td class="text-muted">{{ p.dateDone ? (p.dateDone | date:'dd/MM/yyyy') : '\u2014' }}</td>
                  <td><span class="state-badge" [attr.data-state]="p.state">{{ stateLabel(p.state || '') }}</span></td>
                  <td class="text-right font-mono">{{ p.totalValue | number:'1.0-0' }}</td>
                  <td><span class="material-icons chevron">chevron_right</span></td>
                </tr>
              }
            }
          </tbody>
        </table>
      }
    </div>
  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ONGLET R\xC9CEPTIONS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (!loading && activeTab === 'receptions') {
    <div class="card">
      @if (receptions.length === 0) {
        <div class="empty">
          <span class="material-icons">move_to_inbox</span>
          <p>{{ showAllReceptions ? 'Aucune r\xE9ception de transfert.' : 'Aucune r\xE9ception en attente.' }}</p>
        </div>
      } @else {
        <table class="data-table">
          <thead>
            <tr>
              <th>R\xE9f\xE9rence</th>
              <th>Transfert source</th>
              <th>Emplacement destination</th>
              <th>Date</th>
              <th>Statut</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            @for (p of receptions; track p.id) {
              <tr (click)="router.navigate(['/stock/transferts', p.id])" class="clickable">
                <td>
                  <div class="ref-with-icon">
                    <span class="material-icons" style="color:#6f42c1;font-size:16px">move_to_inbox</span>
                    <span class="font-mono font-bold text-purple">{{ p.name }}</span>
                  </div>
                </td>
                <td class="text-muted">{{ p.linkedPickingName || '\u2014' }}</td>
                <td class="text-muted small">{{ p.destWarehouseName || p.locationDestName || '\u2014' }}</td>
                <td class="text-muted">{{ p.createdAt | date:'dd/MM/yyyy HH:mm' }}</td>
                <td><span class="state-badge" [attr.data-state]="p.state">{{ stateLabel(p.state || '') }}</span></td>
                <td><span class="material-icons chevron">chevron_right</span></td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>
  }
</div>
`, styles: ['/* src/app/modules/stock/components/transferts/transfert-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header .page-title .material-icons {\n  color: rgba(139, 92, 246, 0.9);\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header .badge-count {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  font-size: 12px;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: #7C3AED;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover {\n  background: #5a32a3;\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-secondary .material-icons {\n  font-size: 18px;\n}\n.btn-secondary:hover {\n  background: var(--bg-hover);\n}\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.filter-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.filter-date-group {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.filter-date-group label {\n  font-size: 13px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.form-control {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control:focus {\n  border-color: rgba(139, 92, 246, 0.9);\n}\n.form-control.form-control-sm {\n  padding: 5px 8px;\n  font-size: 12px;\n}\n.filter-btn {\n  padding: 4px 12px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.filter-btn:hover {\n  background: var(--bg-hover);\n}\n.info-tip {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 10px 16px;\n  background: rgba(109, 40, 217, 0.1);\n  border-radius: 6px;\n  margin-bottom: 16px;\n  font-size: 12px;\n  color: rgba(139, 92, 246, 0.9);\n  border: 1px solid #e1bee7;\n}\n.info-tip .material-icons {\n  font-size: 16px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--border-light);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 9px 12px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid #e9ecef;\n}\n.data-table td {\n  padding: 10px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.data-table tr.clickable {\n  cursor: pointer;\n}\n.data-table tr.clickable:hover td {\n  background: var(--bg-hover);\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px;\n  color: var(--text-muted);\n  gap: 10px;\n}\n.empty .material-icons {\n  font-size: 48px;\n  color: var(--border);\n}\n.empty p {\n  margin: 0;\n  text-align: center;\n  max-width: 360px;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: "Roboto Mono", monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.text-purple {\n  color: rgba(139, 92, 246, 0.9);\n}\n.small {\n  font-size: 12px;\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chevron {\n  color: var(--border);\n  font-size: 18px !important;\n}\n.state-badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.state-badge[data-state=draft] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.state-badge[data-state=done] {\n  background: #ede7f6;\n  color: #4527a0;\n}\n.state-badge[data-state=cancelled] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.state-badge[data-state=pending_reception] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.tab-bar {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 18px;\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 0;\n}\n.tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px 10px;\n  border: none;\n  background: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-muted);\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  border-radius: 4px 4px 0 0;\n  transition: color 0.15s, border-color 0.15s;\n}\n.tab-btn .material-icons {\n  font-size: 17px;\n}\n.tab-btn:hover {\n  color: var(--text-secondary);\n  background: var(--bg-hover);\n}\n.tab-btn.active {\n  color: rgba(139, 92, 246, 0.9);\n  border-bottom-color: rgba(139, 92, 246, 0.9);\n  background: none;\n  font-weight: 600;\n}\n.tab-count {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  font-size: 11px;\n  padding: 1px 7px;\n  border-radius: 10px;\n  font-weight: 600;\n}\n.tab-badge {\n  background: #dc3545;\n  color: white;\n  font-size: 11px;\n  padding: 1px 7px;\n  border-radius: 10px;\n  font-weight: 700;\n}\n.ref-with-icon {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n/*# sourceMappingURL=transfert-list.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransfertListComponent, { className: "TransfertListComponent", filePath: "app/modules/stock/components/transferts/transfert-list.component.ts", lineNumber: 16 });
})();
export {
  TransfertListComponent
};
//# sourceMappingURL=chunk-HM2IEXCI.js.map
