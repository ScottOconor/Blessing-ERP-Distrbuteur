import {
  StockService
} from "./chunk-LIGNVDFD.js";
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
  ɵɵproperty,
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
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/stock/components/receptions/reception-list.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function ReceptionListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pendingPickings.length);
  }
}
function ReceptionListComponent_Conditional_25_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_25_For_16_Template_button_click_0_listener() {
      const opt_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setGroupBy(opt_r4.key));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.groupBy === opt_r4.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r4.label, " ");
  }
}
function ReceptionListComponent_Conditional_25_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_25_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setGroupBy(""));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Annuler ");
    \u0275\u0275elementEnd();
  }
}
function ReceptionListComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "label");
    \u0275\u0275text(3, "Du");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionListComponent_Conditional_25_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.dateFrom, $event) || (ctx_r0.dateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReceptionListComponent_Conditional_25_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applyFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 13)(6, "label");
    \u0275\u0275text(7, "Au");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionListComponent_Conditional_25_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.dateTo, $event) || (ctx_r0.dateTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReceptionListComponent_Conditional_25_Template_input_ngModelChange_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applyFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 15);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_25_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearDateFilter());
    });
    \u0275\u0275text(10, "Toutes dates");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 16)(12, "span", 17);
    \u0275\u0275text(13, "Regrouper par :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 18);
    \u0275\u0275repeaterCreate(15, ReceptionListComponent_Conditional_25_For_16_Template, 4, 4, "button", 19, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, ReceptionListComponent_Conditional_25_Conditional_17_Template, 4, 0, "button", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dateFrom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dateTo);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r0.groupByOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.groupBy ? 17 : -1);
  }
}
function ReceptionListComponent_Conditional_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 25);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function ReceptionListComponent_Conditional_26_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 4);
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune r\xE9ception en attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 26);
    \u0275\u0275text(6, 'Utilisez "Nouvelle r\xE9ception" pour enregistrer une r\xE9ception directe');
    \u0275\u0275elementEnd()();
  }
}
function ReceptionListComponent_Conditional_26_Conditional_3_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 28);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_26_Conditional_3_For_16_Template_tr_click_0_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openBordereau(p_r7.id));
    });
    \u0275\u0275elementStart(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 30);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 30);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "button", 31)(14, "span", 4);
    \u0275\u0275text(15, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Saisir bordereau ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.partnerName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.origin || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 5, p_r7.scheduledDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r7.locationDestName || "\u2014");
  }
}
function ReceptionListComponent_Conditional_26_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 24)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Origine (Facture)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Date planifi\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Destination");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, ReceptionListComponent_Conditional_26_Conditional_3_For_16_Template, 17, 8, "tr", 27, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r0.pendingPickings);
  }
}
function ReceptionListComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, ReceptionListComponent_Conditional_26_Conditional_1_Template, 5, 0, "div", 23)(2, ReceptionListComponent_Conditional_26_Conditional_2_Template, 7, 0, "div", 23)(3, ReceptionListComponent_Conditional_26_Conditional_3_Template, 17, 0, "table", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loadingPending ? 1 : ctx_r0.pendingPickings.length === 0 ? 2 : 3);
  }
}
function ReceptionListComponent_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 25);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function ReceptionListComponent_Conditional_27_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 4);
    \u0275\u0275text(2, "move_to_inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune r\xE9ception");
    \u0275\u0275elementEnd()();
  }
}
function ReceptionListComponent_Conditional_27_Conditional_3_Conditional_19_For_1_Conditional_8_For_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_27_Conditional_3_Conditional_19_For_1_Conditional_8_For_1_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const p_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r0.openBordereau(p_r11.id));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Bordereau ");
    \u0275\u0275elementEnd();
  }
}
function ReceptionListComponent_Conditional_27_Conditional_3_Conditional_19_For_1_Conditional_8_For_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "chevron_right");
    \u0275\u0275elementEnd();
  }
}
function ReceptionListComponent_Conditional_27_Conditional_3_Conditional_19_For_1_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 39);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_27_Conditional_3_Conditional_19_For_1_Conditional_8_For_1_Template_tr_click_0_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r0.router.navigate(["/stock/receptions", p_r11.id]));
    });
    \u0275\u0275elementStart(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 30);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 30);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 40);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 41);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 21);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_27_Conditional_3_Conditional_19_For_1_Conditional_8_For_1_Template_td_click_19_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(20, ReceptionListComponent_Conditional_27_Conditional_3_Conditional_19_For_1_Conditional_8_For_1_Conditional_20_Template, 4, 0, "button", 31)(21, ReceptionListComponent_Conditional_27_Conditional_3_Conditional_19_For_1_Conditional_8_For_1_Conditional_21_Template, 2, 0, "span", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.partnerName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.origin || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 9, p_r11.scheduledDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r11.dateDone ? \u0275\u0275pipeBind2(12, 12, p_r11.dateDone, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-state", p_r11.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.stateLabel(p_r11.state || ""));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 15, p_r11.totalValue, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(p_r11.state === "done" ? 20 : 21);
  }
}
function ReceptionListComponent_Conditional_27_Conditional_3_Conditional_19_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ReceptionListComponent_Conditional_27_Conditional_3_Conditional_19_For_1_Conditional_8_For_1_Template, 22, 18, "tr", 38, _forTrack1);
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275repeater(ctx_r0.getGroupItems(row_r9.key));
  }
}
function ReceptionListComponent_Conditional_27_Conditional_3_Conditional_19_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 33);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_27_Conditional_3_Conditional_19_For_1_Template_tr_click_0_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.toggleGroup(row_r9.key));
    });
    \u0275\u0275elementStart(1, "td", 34)(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, ReceptionListComponent_Conditional_27_Conditional_3_Conditional_19_For_1_Conditional_8_Template, 2, 0);
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.isExpanded(row_r9.key) ? "expand_more" : "chevron_right");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.count);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isExpanded(row_r9.key) ? 8 : -1);
  }
}
function ReceptionListComponent_Conditional_27_Conditional_3_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ReceptionListComponent_Conditional_27_Conditional_3_Conditional_19_For_1_Template, 9, 4, null, null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r0.groupedRows);
  }
}
function ReceptionListComponent_Conditional_27_Conditional_3_Conditional_20_For_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_27_Conditional_3_Conditional_20_For_1_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const p_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openBordereau(p_r14.id));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Bordereau ");
    \u0275\u0275elementEnd();
  }
}
function ReceptionListComponent_Conditional_27_Conditional_3_Conditional_20_For_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "chevron_right");
    \u0275\u0275elementEnd();
  }
}
function ReceptionListComponent_Conditional_27_Conditional_3_Conditional_20_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 28);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_27_Conditional_3_Conditional_20_For_1_Template_tr_click_0_listener() {
      const p_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.router.navigate(["/stock/receptions", p_r14.id]));
    });
    \u0275\u0275elementStart(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 30);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 30);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 40);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 41);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 21);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_27_Conditional_3_Conditional_20_For_1_Template_td_click_19_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275conditionalCreate(20, ReceptionListComponent_Conditional_27_Conditional_3_Conditional_20_For_1_Conditional_20_Template, 4, 0, "button", 31)(21, ReceptionListComponent_Conditional_27_Conditional_3_Conditional_20_For_1_Conditional_21_Template, 2, 0, "span", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r14 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r14.partnerName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r14.origin || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 9, p_r14.scheduledDate, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r14.dateDone ? \u0275\u0275pipeBind2(12, 12, p_r14.dateDone, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-state", p_r14.state);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.stateLabel(p_r14.state || ""));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 15, p_r14.totalValue, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(p_r14.state === "done" ? 20 : 21);
  }
}
function ReceptionListComponent_Conditional_27_Conditional_3_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ReceptionListComponent_Conditional_27_Conditional_3_Conditional_20_For_1_Template, 22, 18, "tr", 27, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r0.pickings);
  }
}
function ReceptionListComponent_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 24)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Origine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Date planifi\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Date faite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 32);
    \u0275\u0275text(16, "Valeur");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275conditionalCreate(19, ReceptionListComponent_Conditional_27_Conditional_3_Conditional_19_Template, 2, 0)(20, ReceptionListComponent_Conditional_27_Conditional_3_Conditional_20_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275conditional(ctx_r0.groupBy ? 19 : 20);
  }
}
function ReceptionListComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, ReceptionListComponent_Conditional_27_Conditional_1_Template, 5, 0, "div", 23)(2, ReceptionListComponent_Conditional_27_Conditional_2_Template, 5, 0, "div", 23)(3, ReceptionListComponent_Conditional_27_Conditional_3_Template, 21, 1, "table", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loading ? 1 : ctx_r0.pickings.length === 0 ? 2 : 3);
  }
}
function ReceptionListComponent_Conditional_28_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wh_r17 = ctx.$implicit;
    \u0275\u0275property("ngValue", wh_r17.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(wh_r17.name);
  }
}
function ReceptionListComponent_Conditional_28_For_45_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_28_For_45_Conditional_4_For_2_Template_div_click_0_listener() {
      const p_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const \u0275$index_394_r20 = \u0275\u0275nextContext(2).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectDirectProduct(\u0275$index_394_r20, p_r22));
    });
    \u0275\u0275elementStart(1, "span", 72);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r22 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r22.defaultCode || "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r22.name);
  }
}
function ReceptionListComponent_Conditional_28_For_45_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275repeaterCreate(1, ReceptionListComponent_Conditional_28_For_45_Conditional_4_For_2_Template, 5, 2, "div", 70, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(line_r19.searchResults);
  }
}
function ReceptionListComponent_Conditional_28_For_45_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_28_For_45_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const \u0275$index_394_r20 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeDirectLine(\u0275$index_394_r20));
    });
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2, "delete_outline");
    \u0275\u0275elementEnd()();
  }
}
function ReceptionListComponent_Conditional_28_For_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 63)(2, "div", 64)(3, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionListComponent_Conditional_28_For_45_Template_input_ngModelChange_3_listener($event) {
      const line_r19 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(line_r19.productSearch, $event) || (line_r19.productSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReceptionListComponent_Conditional_28_For_45_Template_input_ngModelChange_3_listener() {
      const \u0275$index_394_r20 = \u0275\u0275restoreView(_r18).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDirectProductSearch(\u0275$index_394_r20));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ReceptionListComponent_Conditional_28_For_45_Conditional_4_Template, 3, 0, "div", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 32)(6, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionListComponent_Conditional_28_For_45_Template_input_ngModelChange_6_listener($event) {
      const line_r19 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(line_r19.qty, $event) || (line_r19.qty = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 32)(8, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionListComponent_Conditional_28_For_45_Template_input_ngModelChange_8_listener($event) {
      const line_r19 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(line_r19.prixUnitaire, $event) || (line_r19.prixUnitaire = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275conditionalCreate(10, ReceptionListComponent_Conditional_28_For_45_Conditional_10_Template, 3, 0, "button", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r19 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", line_r19.productSearch);
    \u0275\u0275advance();
    \u0275\u0275conditional(line_r19.searchResults.length > 0 ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r19.qty);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r19.prixUnitaire);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.directForm.lines.length > 1 ? 10 : -1);
  }
}
function ReceptionListComponent_Conditional_28_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.directError);
  }
}
function ReceptionListComponent_Conditional_28_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
  }
}
function ReceptionListComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_28_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDirectModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 45);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_28_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 46)(3, "h2")(4, "span", 4);
    \u0275\u0275text(5, "add_box");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " R\xE9ception directe fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 47);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_28_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDirectModal());
    });
    \u0275\u0275elementStart(8, "span", 4);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 48)(11, "div", 49)(12, "div", 50)(13, "label");
    \u0275\u0275text(14, "Fournisseur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionListComponent_Conditional_28_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.directForm.supplierName, $event) || (ctx_r0.directForm.supplierName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 50)(17, "label");
    \u0275\u0275text(18, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionListComponent_Conditional_28_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.directForm.reference, $event) || (ctx_r0.directForm.reference = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 53)(21, "label");
    \u0275\u0275text(22, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionListComponent_Conditional_28_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.directForm.date, $event) || (ctx_r0.directForm.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 49)(25, "div", 50)(26, "label");
    \u0275\u0275text(27, "Entrep\xF4t de r\xE9ception");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 55);
    \u0275\u0275twoWayListener("ngModelChange", function ReceptionListComponent_Conditional_28_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.directForm.warehouseId, $event) || (ctx_r0.directForm.warehouseId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "option", 56);
    \u0275\u0275text(30, "\u2014 Magasin principal (par d\xE9faut) \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(31, ReceptionListComponent_Conditional_28_For_32_Template, 2, 2, "option", 56, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "table", 57)(34, "thead")(35, "tr")(36, "th");
    \u0275\u0275text(37, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 32);
    \u0275\u0275text(39, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 32);
    \u0275\u0275text(41, "Prix achat (HT)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "tbody");
    \u0275\u0275repeaterCreate(44, ReceptionListComponent_Conditional_28_For_45_Template, 11, 5, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "button", 58);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_28_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addDirectLine());
    });
    \u0275\u0275elementStart(47, "span", 4);
    \u0275\u0275text(48, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, " Ajouter article ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(50, ReceptionListComponent_Conditional_28_Conditional_50_Template, 2, 1, "div", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 60)(52, "button", 61);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_28_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDirectModal());
    });
    \u0275\u0275text(53, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 62);
    \u0275\u0275listener("click", function ReceptionListComponent_Conditional_28_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitDirectReception());
    });
    \u0275\u0275conditionalCreate(55, ReceptionListComponent_Conditional_28_Conditional_55_Template, 2, 0, "span", 25);
    \u0275\u0275text(56, " Valider la r\xE9ception ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.directForm.supplierName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.directForm.reference);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.directForm.date);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.directForm.warehouseId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.warehouses);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r0.directForm.lines);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.directError ? 50 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.directSaving);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.directSaving ? 55 : -1);
  }
}
var ReceptionListComponent = class _ReceptionListComponent {
  constructor(stockService, authService, router) {
    this.stockService = stockService;
    this.authService = authService;
    this.router = router;
    this.allPickings = [];
    this.pickings = [];
    this.pendingPickings = [];
    this.loading = false;
    this.loadingPending = false;
    this.activeTab = "pending";
    this.dateFrom = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.dateTo = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.showDirectModal = false;
    this.directSaving = false;
    this.directError = "";
    this.directForm = this.emptyDirectForm();
    this.allProducts = [];
    this.warehouses = [];
    this.searchTimers = [];
    this.groupBy = "";
    this.expandedGroups = /* @__PURE__ */ new Set();
    this.groupByOptions = [
      { key: "mois", label: "Mois", icon: "calendar_month" },
      { key: "fournisseur", label: "Fournisseur", icon: "business" },
      { key: "statut", label: "Statut", icon: "label" },
      { key: "destination", label: "Destination", icon: "warehouse" }
    ];
  }
  ngOnInit() {
    const companyId = this.authService.getCompanyId();
    this.loading = true;
    this.loadingPending = true;
    this.stockService.getReceptions(companyId).subscribe({
      next: (p) => {
        this.allPickings = p;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
    this.stockService.getPendingReceptions(companyId).subscribe({
      next: (p) => {
        this.pendingPickings = p;
        this.loadingPending = false;
      },
      error: () => {
        this.loadingPending = false;
      }
    });
    this.stockService.getProducts(companyId).subscribe({
      next: (p) => {
        this.allProducts = p;
      },
      error: () => {
      }
    });
    this.stockService.getWarehouses(companyId).subscribe({
      next: (w) => {
        this.warehouses = w.filter((x) => x.active !== false);
      },
      error: () => {
      }
    });
  }
  applyFilter() {
    this.pickings = this.allPickings.filter((p) => {
      const d = p.scheduledDate?.split("T")[0] ?? "";
      if (this.dateFrom && d < this.dateFrom)
        return false;
      if (this.dateTo && d > this.dateTo)
        return false;
      return true;
    });
  }
  clearDateFilter() {
    this.dateFrom = "";
    this.dateTo = "";
    this.applyFilter();
  }
  openBordereau(pickingId) {
    this.router.navigate(["/stock/receptions/bordereau", pickingId]);
  }
  stateLabel(s) {
    return { draft: "Brouillon", confirmed: "En attente", done: "Valid\xE9", cancelled: "Annul\xE9" }[s] || s;
  }
  get groupedRows() {
    if (!this.groupBy)
      return [];
    const source = this.pickings;
    const map = /* @__PURE__ */ new Map();
    for (const item of source) {
      let key, label;
      switch (this.groupBy) {
        case "mois":
          key = (item.scheduledDate || "").substring(0, 7);
          label = key ? this.fmtMonth(key) : "(Sans date)";
          break;
        case "fournisseur":
          key = label = item.partnerName || "(Sans fournisseur)";
          break;
        case "statut":
          key = item.state || "?";
          label = this.stateLabel(key);
          break;
        case "destination":
          key = label = item.locationDestName || "(Sans destination)";
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
  // ─── Réception directe ────────────────────────────────────────────────────
  emptyDirectForm() {
    return {
      supplierName: "",
      reference: "",
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      warehouseId: null,
      lines: [{ product: null, productSearch: "", qty: 1, prixUnitaire: 0, searchResults: [] }]
    };
  }
  openDirectModal() {
    this.directForm = this.emptyDirectForm();
    this.directError = "";
    this.showDirectModal = true;
  }
  closeDirectModal() {
    this.showDirectModal = false;
  }
  addDirectLine() {
    this.directForm.lines.push({ product: null, productSearch: "", qty: 1, prixUnitaire: 0, searchResults: [] });
    this.searchTimers.push(null);
  }
  removeDirectLine(i) {
    this.directForm.lines.splice(i, 1);
  }
  onDirectProductSearch(i) {
    if (this.searchTimers[i])
      clearTimeout(this.searchTimers[i]);
    const q = (this.directForm.lines[i]?.productSearch || "").toLowerCase().trim();
    if (!q) {
      this.directForm.lines[i].searchResults = [];
      return;
    }
    const matches = this.allProducts.filter((p) => p.name.toLowerCase().includes(q) || (p.defaultCode || "").toLowerCase().includes(q)).slice(0, 10);
    this.directForm.lines[i].searchResults = matches;
  }
  selectDirectProduct(i, p) {
    const line = this.directForm.lines[i];
    line.product = p;
    line.productSearch = p.defaultCode ? `[${p.defaultCode}] ${p.name}` : p.name;
    line.prixUnitaire = p.standardPrice || 0;
    line.searchResults = [];
  }
  submitDirectReception() {
    this.directError = "";
    const lines = this.directForm.lines.filter((l) => l.product && l.qty > 0);
    if (lines.length === 0) {
      this.directError = "Ajoutez au moins un article avec une quantit\xE9.";
      return;
    }
    const companyId = this.authService.getCompanyId();
    const req = {
      companyId,
      warehouseId: this.directForm.warehouseId ?? void 0,
      supplierName: this.directForm.supplierName || void 0,
      reference: this.directForm.reference || void 0,
      date: this.directForm.date || void 0,
      lines: lines.map((l) => ({
        productId: l.product.id,
        quantity: l.qty,
        prixUnitaire: l.prixUnitaire
      }))
    };
    this.directSaving = true;
    this.stockService.createDirectReception(req).subscribe({
      next: (picking) => {
        this.directSaving = false;
        this.showDirectModal = false;
        this.loading = true;
        this.stockService.getReceptions(companyId).subscribe({
          next: (p) => {
            this.allPickings = p;
            this.applyFilter();
            this.loading = false;
          },
          error: () => {
            this.loading = false;
          }
        });
        this.activeTab = "all";
      },
      error: (err) => {
        this.directSaving = false;
        this.directError = err?.error?.message || "Erreur lors de la r\xE9ception.";
      }
    });
  }
  static {
    this.\u0275fac = function ReceptionListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReceptionListComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReceptionListComponent, selectors: [["app-reception-list"]], decls: 29, vars: 10, consts: [[1, "page-container"], [1, "page-header"], [1, "header-left"], [1, "page-title"], [1, "material-icons"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn-primary", 3, "click"], [1, "tabs"], [1, "tab-btn", 3, "click"], [1, "tab-badge"], [1, "card"], [1, "filter-bar"], [1, "filter-date-group"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "filter-btn", 3, "click"], [1, "groupby-bar"], [1, "groupby-label"], [1, "groupby-btns"], [3, "active"], [1, "groupby-reset"], [3, "click"], [1, "groupby-reset", 3, "click"], [1, "empty"], [1, "data-table"], [1, "material-icons", "spin"], [1, "empty-hint"], [1, "clickable"], [1, "clickable", 3, "click"], [1, "font-mono", "font-bold", "text-blue"], [1, "text-muted"], [1, "btn-bordereau"], [1, "text-right"], [1, "group-header-row", 3, "click"], ["colspan", "8", 1, "group-header-cell"], [1, "material-icons", "expand-icon"], [1, "group-label"], [1, "badge"], [1, "detail-row", "clickable"], [1, "detail-row", "clickable", 3, "click"], [1, "state-badge"], [1, "text-right", "font-mono"], [1, "material-icons", "chevron"], [1, "btn-bordereau", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal-panel", 3, "click"], [1, "modal-header"], [1, "btn-icon", 3, "click"], [1, "modal-body"], [1, "form-row"], [1, "form-group"], ["type", "text", "placeholder", "Nom du fournisseur", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "N\xB0 BL, bon de commande\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "form-group-sm"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "lines-table"], [1, "btn-add-line", 3, "click"], [1, "alert-error"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click", "disabled"], [1, "col-product-search"], [1, "ac-wrap"], ["type", "text", "placeholder", "Chercher article\u2026", "autocomplete", "off", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "ac-results"], ["type", "number", "min", "0.001", "step", "1", 1, "form-control", "text-right", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "1", 1, "form-control", "text-right", 3, "ngModelChange", "ngModel"], [1, "btn-icon-sm"], [1, "ac-item"], [1, "ac-item", 3, "click"], [1, "ac-code"], [1, "ac-name"], [1, "btn-icon-sm", 3, "click"]], template: function ReceptionListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3)(5, "span", 4);
        \u0275\u0275text(6, "move_to_inbox");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " R\xE9ceptions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, "R\xE9ceptions fournisseurs \u2014 manuelles ou depuis achat");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
        \u0275\u0275listener("click", function ReceptionListComponent_Template_button_click_11_listener() {
          return ctx.openDirectModal();
        });
        \u0275\u0275elementStart(12, "span", 4);
        \u0275\u0275text(13, "add_box");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " Nouvelle r\xE9ception ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 8)(16, "button", 9);
        \u0275\u0275listener("click", function ReceptionListComponent_Template_button_click_16_listener() {
          return ctx.activeTab = "pending";
        });
        \u0275\u0275elementStart(17, "span", 4);
        \u0275\u0275text(18, "pending_actions");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " \xC0 r\xE9ceptionner ");
        \u0275\u0275conditionalCreate(20, ReceptionListComponent_Conditional_20_Template, 2, 1, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 9);
        \u0275\u0275listener("click", function ReceptionListComponent_Template_button_click_21_listener() {
          return ctx.activeTab = "all";
        });
        \u0275\u0275elementStart(22, "span", 4);
        \u0275\u0275text(23, "history");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(25, ReceptionListComponent_Conditional_25_Template, 18, 3);
        \u0275\u0275conditionalCreate(26, ReceptionListComponent_Conditional_26_Template, 4, 1, "div", 11);
        \u0275\u0275conditionalCreate(27, ReceptionListComponent_Conditional_27_Template, 4, 1, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(28, ReceptionListComponent_Conditional_28_Template, 57, 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275classProp("active", ctx.activeTab === "pending");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.pendingPickings.length > 0 ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeTab === "all");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" Historique (", ctx.pickings.length, ") ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "all" ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "pending" ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab === "all" ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showDirectModal ? 28 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe, DatePipe], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #fd7e14;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .badge-count[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  font-size: 12px;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: #fd7e14;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #e06912;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 20px;\n  border-bottom: 2px solid var(--border);\n  padding-bottom: 0;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-muted);\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.tab-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: #fd7e14;\n  border-bottom-color: #fd7e14;\n}\n.tab-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  color: #343a40;\n  background: var(--bg-hover);\n  border-radius: 6px 6px 0 0;\n}\n.tab-badge[_ngcontent-%COMP%] {\n  background: #fd7e14;\n  color: white;\n  padding: 1px 7px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.filter-date-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.filter-date-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #fd7e14;\n}\n.form-control.form-control-sm[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  font-size: 12px;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--border-light);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tr.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.data-table[_ngcontent-%COMP%]   tr.clickable[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px;\n  color: var(--text-muted);\n  gap: 10px;\n}\n.empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--border);\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.empty-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.text-blue[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.chevron[_ngcontent-%COMP%] {\n  color: var(--border);\n  font-size: 18px !important;\n}\n.btn-bordereau[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #fd7e14;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-bordereau[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-bordereau[_ngcontent-%COMP%]:hover {\n  background: #e06912;\n}\n.state-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.state-badge[data-state=draft][_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.state-badge[data-state=confirmed][_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--primary);\n}\n.state-badge[data-state=done][_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.state-badge[data-state=cancelled][_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n}\n.modal-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: var(--bg-surface);\n  border-radius: 10px;\n  z-index: 1001;\n  width: 780px;\n  max-width: 96vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.25);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 22px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #fd7e14;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 22px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 22px;\n  border-top: 1px solid var(--border);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.form-group.form-group-sm[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: 4px;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon-sm[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--danger);\n  padding: 2px;\n  border-radius: 3px;\n}\n.btn-icon-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.lines-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 10px;\n}\n.lines-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  padding: 6px 8px;\n  border-bottom: 2px solid var(--border);\n}\n.lines-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  vertical-align: top;\n}\n.lines-table[_ngcontent-%COMP%]   .col-product-search[_ngcontent-%COMP%] {\n  width: 55%;\n}\n.ac-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.ac-results[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  z-index: 50;\n  max-height: 200px;\n  overflow-y: auto;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.ac-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 10px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.ac-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.ac-item[_ngcontent-%COMP%]   .ac-code[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n  color: var(--text-muted);\n  min-width: 60px;\n}\n.ac-item[_ngcontent-%COMP%]   .ac-name[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.btn-add-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: none;\n  border: 1px dashed var(--border);\n  border-radius: 5px;\n  font-size: 13px;\n  color: var(--text-secondary);\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-add-line[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.alert-error[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 9px 14px;\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-radius: 5px;\n  font-size: 13px;\n}\n/*# sourceMappingURL=reception-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReceptionListComponent, [{
    type: Component,
    args: [{ selector: "app-reception-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div class="header-left">
      <div>
        <h1 class="page-title"><span class="material-icons">move_to_inbox</span> R\xE9ceptions</h1>
        <p class="page-subtitle">R\xE9ceptions fournisseurs \u2014 manuelles ou depuis achat</p>
      </div>
    </div>
    <div class="header-actions">
      <button class="btn-primary" (click)="openDirectModal()">
        <span class="material-icons">add_box</span> Nouvelle r\xE9ception
      </button>
    </div>
  </div>

  <!-- Tabs -->
  <div class="tabs">
    <button class="tab-btn" [class.active]="activeTab === 'pending'" (click)="activeTab = 'pending'">
      <span class="material-icons">pending_actions</span>
      \xC0 r\xE9ceptionner
      @if (pendingPickings.length > 0) {
        <span class="tab-badge">{{ pendingPickings.length }}</span>
      }
    </button>
    <button class="tab-btn" [class.active]="activeTab === 'all'" (click)="activeTab = 'all'">
      <span class="material-icons">history</span> Historique ({{ pickings.length }})
    </button>
  </div>

  @if (activeTab === 'all') {
    <div class="filter-bar">
      <div class="filter-date-group">
        <label>Du</label>
        <input type="date" class="form-control form-control-sm" [(ngModel)]="dateFrom" (ngModelChange)="applyFilter()">
      </div>
      <div class="filter-date-group">
        <label>Au</label>
        <input type="date" class="form-control form-control-sm" [(ngModel)]="dateTo" (ngModelChange)="applyFilter()">
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
  }

  <!-- Pending receptions (bordereau workflow) -->
  @if (activeTab === 'pending') {
    <div class="card">
      @if (loadingPending) {
        <div class="empty"><span class="material-icons spin">refresh</span><p>Chargement...</p></div>
      } @else if (pendingPickings.length === 0) {
        <div class="empty">
          <span class="material-icons">inbox</span>
          <p>Aucune r\xE9ception en attente</p>
          <span class="empty-hint">Utilisez "Nouvelle r\xE9ception" pour enregistrer une r\xE9ception directe</span>
        </div>
      } @else {
        <table class="data-table">
          <thead>
            <tr>
              <th>R\xE9f\xE9rence</th>
              <th>Fournisseur</th>
              <th>Origine (Facture)</th>
              <th>Date planifi\xE9e</th>
              <th>Destination</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            @for (p of pendingPickings; track p.id) {
              <tr class="clickable" (click)="openBordereau(p.id!)">
                <td class="font-mono font-bold text-blue">{{ p.name }}</td>
                <td>{{ p.partnerName || '\u2014' }}</td>
                <td class="text-muted">{{ p.origin || '\u2014' }}</td>
                <td class="text-muted">{{ p.scheduledDate | date:'dd/MM/yyyy' }}</td>
                <td class="text-muted">{{ p.locationDestName || '\u2014' }}</td>
                <td>
                  <button class="btn-bordereau">
                    <span class="material-icons">assignment</span> Saisir bordereau
                  </button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      }
    </div>
  }

  <!-- All receptions history -->
  @if (activeTab === 'all') {
    <div class="card">
      @if (loading) {
        <div class="empty"><span class="material-icons spin">refresh</span><p>Chargement...</p></div>
      } @else if (pickings.length === 0) {
        <div class="empty"><span class="material-icons">move_to_inbox</span><p>Aucune r\xE9ception</p></div>
      } @else {
        <table class="data-table">
          <thead>
            <tr>
              <th>R\xE9f\xE9rence</th>
              <th>Fournisseur</th>
              <th>Origine</th>
              <th>Date planifi\xE9e</th>
              <th>Date faite</th>
              <th>Statut</th>
              <th class="text-right">Valeur</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            @if (groupBy) {
              @for (row of groupedRows; track row.key) {
                <tr class="group-header-row" (click)="toggleGroup(row.key)">
                  <td class="group-header-cell" colspan="8">
                    <span class="material-icons expand-icon">{{ isExpanded(row.key) ? 'expand_more' : 'chevron_right' }}</span>
                    <span class="group-label">{{ row.label }}</span>
                    <span class="badge">{{ row.count }}</span>
                  </td>
                </tr>
                @if (isExpanded(row.key)) {
                  @for (p of getGroupItems(row.key); track p.id) {
                    <tr class="detail-row clickable" (click)="router.navigate(['/stock/receptions', p.id])">
                      <td class="font-mono font-bold text-blue">{{ p.name }}</td>
                      <td>{{ p.partnerName || '\u2014' }}</td>
                      <td class="text-muted">{{ p.origin || '\u2014' }}</td>
                      <td class="text-muted">{{ p.scheduledDate | date:'dd/MM/yyyy' }}</td>
                      <td class="text-muted">{{ p.dateDone ? (p.dateDone | date:'dd/MM/yyyy') : '\u2014' }}</td>
                      <td><span class="state-badge" [attr.data-state]="p.state">{{ stateLabel(p.state || '') }}</span></td>
                      <td class="text-right font-mono">{{ p.totalValue | number:'1.0-0' }}</td>
                      <td (click)="$event.stopPropagation()">
                        @if (p.state === 'done') {
                          <button class="btn-bordereau" (click)="openBordereau(p.id!)">
                            <span class="material-icons">assignment</span> Bordereau
                          </button>
                        } @else {
                          <span class="material-icons chevron">chevron_right</span>
                        }
                      </td>
                    </tr>
                  }
                }
              }
            } @else {
              @for (p of pickings; track p.id) {
                <tr (click)="router.navigate(['/stock/receptions', p.id])" class="clickable">
                  <td class="font-mono font-bold text-blue">{{ p.name }}</td>
                  <td>{{ p.partnerName || '\u2014' }}</td>
                  <td class="text-muted">{{ p.origin || '\u2014' }}</td>
                  <td class="text-muted">{{ p.scheduledDate | date:'dd/MM/yyyy' }}</td>
                  <td class="text-muted">{{ p.dateDone ? (p.dateDone | date:'dd/MM/yyyy') : '\u2014' }}</td>
                  <td><span class="state-badge" [attr.data-state]="p.state">{{ stateLabel(p.state || '') }}</span></td>
                  <td class="text-right font-mono">{{ p.totalValue | number:'1.0-0' }}</td>
                  <td (click)="$event.stopPropagation()">
                    @if (p.state === 'done') {
                      <button class="btn-bordereau" (click)="openBordereau(p.id!)">
                        <span class="material-icons">assignment</span> Bordereau
                      </button>
                    } @else {
                      <span class="material-icons chevron">chevron_right</span>
                    }
                  </td>
                </tr>
              }
            }
          </tbody>
        </table>
      }
    </div>
  }
</div>

<!-- \u2500\u2500\u2500 Modal r\xE9ception directe \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (showDirectModal) {
  <div class="modal-backdrop" (click)="closeDirectModal()"></div>
  <div class="modal-panel" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <h2><span class="material-icons">add_box</span> R\xE9ception directe fournisseur</h2>
      <button class="btn-icon" (click)="closeDirectModal()"><span class="material-icons">close</span></button>
    </div>

    <div class="modal-body">
      <div class="form-row">
        <div class="form-group">
          <label>Fournisseur</label>
          <input type="text" class="form-control" [(ngModel)]="directForm.supplierName" placeholder="Nom du fournisseur" />
        </div>
        <div class="form-group">
          <label>R\xE9f\xE9rence</label>
          <input type="text" class="form-control" [(ngModel)]="directForm.reference" placeholder="N\xB0 BL, bon de commande\u2026" />
        </div>
        <div class="form-group form-group-sm">
          <label>Date</label>
          <input type="date" class="form-control" [(ngModel)]="directForm.date" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Entrep\xF4t de r\xE9ception</label>
          <select class="form-control" [(ngModel)]="directForm.warehouseId">
            <option [ngValue]="null">\u2014 Magasin principal (par d\xE9faut) \u2014</option>
            @for (wh of warehouses; track wh.id) {
              <option [ngValue]="wh.id">{{ wh.name }}</option>
            }
          </select>
        </div>
      </div>

      <table class="lines-table">
        <thead>
          <tr>
            <th>Article</th>
            <th class="text-right">Qt\xE9</th>
            <th class="text-right">Prix achat (HT)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @for (line of directForm.lines; track $index; let i = $index) {
            <tr>
              <td class="col-product-search">
                <div class="ac-wrap">
                  <input type="text" class="form-control" [(ngModel)]="line.productSearch"
                         (ngModelChange)="onDirectProductSearch(i)"
                         placeholder="Chercher article\u2026" autocomplete="off" />
                  @if (line.searchResults.length > 0) {
                    <div class="ac-results">
                      @for (p of line.searchResults; track p.id) {
                        <div class="ac-item" (click)="selectDirectProduct(i, p)">
                          <span class="ac-code">{{ p.defaultCode || '' }}</span>
                          <span class="ac-name">{{ p.name }}</span>
                        </div>
                      }
                    </div>
                  }
                </div>
              </td>
              <td class="text-right">
                <input type="number" class="form-control text-right" [(ngModel)]="line.qty" min="0.001" step="1" />
              </td>
              <td class="text-right">
                <input type="number" class="form-control text-right" [(ngModel)]="line.prixUnitaire" min="0" step="1" />
              </td>
              <td>
                @if (directForm.lines.length > 1) {
                  <button class="btn-icon-sm" (click)="removeDirectLine(i)">
                    <span class="material-icons">delete_outline</span>
                  </button>
                }
              </td>
            </tr>
          }
        </tbody>
      </table>

      <button class="btn-add-line" (click)="addDirectLine()">
        <span class="material-icons">add</span> Ajouter article
      </button>

      @if (directError) {
        <div class="alert-error">{{ directError }}</div>
      }
    </div>

    <div class="modal-footer">
      <button class="btn-secondary" (click)="closeDirectModal()">Annuler</button>
      <button class="btn-primary" (click)="submitDirectReception()" [disabled]="directSaving">
        @if (directSaving) { <span class="material-icons spin">refresh</span> }
        Valider la r\xE9ception
      </button>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/stock/components/receptions/reception-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header .page-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n}\n.page-header .page-title .material-icons {\n  color: #fd7e14;\n}\n.page-header .page-subtitle {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header .badge-count {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  font-size: 12px;\n  padding: 2px 10px;\n  border-radius: 12px;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: #fd7e14;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons {\n  font-size: 18px;\n}\n.btn-primary:hover {\n  background: #e06912;\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-secondary .material-icons {\n  font-size: 18px;\n}\n.btn-secondary:hover {\n  background: var(--bg-hover);\n}\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.tabs {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 20px;\n  border-bottom: 2px solid var(--border);\n  padding-bottom: 0;\n}\n.tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-muted);\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.tab-btn .material-icons {\n  font-size: 18px;\n}\n.tab-btn.active {\n  color: #fd7e14;\n  border-bottom-color: #fd7e14;\n}\n.tab-btn:hover:not(.active) {\n  color: #343a40;\n  background: var(--bg-hover);\n  border-radius: 6px 6px 0 0;\n}\n.tab-badge {\n  background: #fd7e14;\n  color: white;\n  padding: 1px 7px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.filter-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.filter-date-group {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.filter-date-group label {\n  font-size: 13px;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.form-control {\n  padding: 7px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control:focus {\n  border-color: #fd7e14;\n}\n.form-control.form-control-sm {\n  padding: 5px 8px;\n  font-size: 12px;\n}\n.filter-btn {\n  padding: 4px 12px;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.filter-btn:hover {\n  background: var(--bg-hover);\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--border-light);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 9px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 2px solid var(--border);\n}\n.data-table td {\n  padding: 10px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.data-table tr.clickable {\n  cursor: pointer;\n}\n.data-table tr.clickable:hover td {\n  background: var(--bg-hover);\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px;\n  color: var(--text-muted);\n  gap: 10px;\n}\n.empty .material-icons {\n  font-size: 48px;\n  color: var(--border);\n}\n.empty p {\n  margin: 0;\n}\n.empty-hint {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family: "Roboto Mono", monospace;\n}\n.font-bold {\n  font-weight: 600;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.text-blue {\n  color: var(--primary);\n}\n.chevron {\n  color: var(--border);\n  font-size: 18px !important;\n}\n.btn-bordereau {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: #fd7e14;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-bordereau .material-icons {\n  font-size: 16px;\n}\n.btn-bordereau:hover {\n  background: #e06912;\n}\n.state-badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.state-badge[data-state=draft] {\n  background: var(--bg-hover);\n  color: var(--text-muted);\n}\n.state-badge[data-state=confirmed] {\n  background: var(--info-bg);\n  color: var(--primary);\n}\n.state-badge[data-state=done] {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.state-badge[data-state=cancelled] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n}\n.modal-panel {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: var(--bg-surface);\n  border-radius: 10px;\n  z-index: 1001;\n  width: 780px;\n  max-width: 96vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.25);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 22px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header h2 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.modal-header h2 .material-icons {\n  color: #fd7e14;\n}\n.modal-body {\n  padding: 20px 22px;\n  overflow-y: auto;\n  flex: 1;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 22px;\n  border-top: 1px solid var(--border);\n}\n.form-row {\n  display: flex;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.form-group.form-group-sm {\n  max-width: 150px;\n}\n.btn-icon {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: 4px;\n}\n.btn-icon .material-icons {\n  font-size: 20px;\n}\n.btn-icon:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon-sm {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--danger);\n  padding: 2px;\n  border-radius: 3px;\n}\n.btn-icon-sm .material-icons {\n  font-size: 18px;\n}\n.lines-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 10px;\n}\n.lines-table th {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  padding: 6px 8px;\n  border-bottom: 2px solid var(--border);\n}\n.lines-table td {\n  padding: 6px 8px;\n  vertical-align: top;\n}\n.lines-table .col-product-search {\n  width: 55%;\n}\n.ac-wrap {\n  position: relative;\n}\n.ac-results {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  z-index: 50;\n  max-height: 200px;\n  overflow-y: auto;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.ac-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 10px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.ac-item:hover {\n  background: var(--bg-hover);\n}\n.ac-item .ac-code {\n  font-family: "Roboto Mono", monospace;\n  font-size: 11px;\n  color: var(--text-muted);\n  min-width: 60px;\n}\n.ac-item .ac-name {\n  color: var(--text-primary);\n}\n.btn-add-line {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  background: none;\n  border: 1px dashed var(--border);\n  border-radius: 5px;\n  font-size: 13px;\n  color: var(--text-secondary);\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-add-line .material-icons {\n  font-size: 16px;\n}\n.btn-add-line:hover {\n  background: var(--bg-hover);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.alert-error {\n  margin-top: 12px;\n  padding: 9px 14px;\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-radius: 5px;\n  font-size: 13px;\n}\n/*# sourceMappingURL=reception-list.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReceptionListComponent, { className: "ReceptionListComponent", filePath: "app/modules/stock/components/receptions/reception-list.component.ts", lineNumber: 15 });
})();
export {
  ReceptionListComponent
};
//# sourceMappingURL=chunk-FKUKZFV2.js.map
