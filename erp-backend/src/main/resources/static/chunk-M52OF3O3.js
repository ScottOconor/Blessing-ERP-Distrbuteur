import {
  HrService
} from "./chunk-TCOWJUCH.js";
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/hr/components/payslips/payslips.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PayslipsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function PayslipsComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCompute());
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "calculate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Calculer un bulletin");
    \u0275\u0275elementEnd();
  }
}
function PayslipsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function PayslipsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "Aucun bulletin. Cliquez sur \xAB Calculer un bulletin \xBB.");
    \u0275\u0275elementEnd();
  }
}
function PayslipsComponent_Conditional_9_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 12);
    \u0275\u0275listener("click", function PayslipsComponent_Conditional_9_For_20_Template_tr_click_0_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.open(p_r4));
    });
    \u0275\u0275elementStart(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 10);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 10)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span", 13);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.employeeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r4.periodFrom, " \u2192 ", p_r4.periodTo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(p_r4.totalBrut));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(p_r4.totalCotisationsSalariales));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.fmt(p_r4.totalNet));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.badge(p_r4.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(p_r4.state));
  }
}
function PayslipsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "table", 9)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "P\xE9riode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 10);
    \u0275\u0275text(11, "Brut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 10);
    \u0275\u0275text(13, "Retenues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 10);
    \u0275\u0275text(15, "Net \xE0 payer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "\xC9tat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, PayslipsComponent_Conditional_9_For_20_Template, 18, 10, "tr", 11, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.payslips);
  }
}
function PayslipsComponent_Conditional_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.err);
  }
}
function PayslipsComponent_Conditional_10_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", e_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", e_r6.matricule, " \u2014 ", e_r6.lastName, " ", e_r6.firstName);
  }
}
function PayslipsComponent_Conditional_10_For_30_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    \u0275\u0275property("value", t_r9.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r9.name);
  }
}
function PayslipsComponent_Conditional_10_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "select", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PayslipsComponent_Conditional_10_For_30_Template_select_ngModelChange_1_listener($event) {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(row_r8.code, $event) || (row_r8.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PayslipsComponent_Conditional_10_For_30_Template_select_ngModelChange_1_listener($event) {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDayPick(row_r8, $event));
    });
    \u0275\u0275elementStart(2, "option", 33);
    \u0275\u0275text(3, "\u2014 Type \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, PayslipsComponent_Conditional_10_For_30_For_5_Template, 2, 2, "option", 34, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function PayslipsComponent_Conditional_10_For_30_Template_input_ngModelChange_6_listener($event) {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(row_r8.numberOfDays, $event) || (row_r8.numberOfDays = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function PayslipsComponent_Conditional_10_For_30_Template_button_click_7_listener() {
      const $index_r10 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeDayRow($index_r10));
    });
    \u0275\u0275elementStart(8, "span", 2);
    \u0275\u0275text(9, "delete_outline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", row_r8.code);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.dayTypes);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r8.numberOfDays);
  }
}
function PayslipsComponent_Conditional_10_For_38_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r13 = ctx.$implicit;
    \u0275\u0275property("value", t_r13.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r13.name);
  }
}
function PayslipsComponent_Conditional_10_For_38_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("warn", ctx_r1.inputEffect(row_r12.code) === "none");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.inputHintText(row_r12.code), " ");
  }
}
function PayslipsComponent_Conditional_10_For_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "select", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PayslipsComponent_Conditional_10_For_38_Template_select_ngModelChange_1_listener($event) {
      const row_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(row_r12.code, $event) || (row_r12.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PayslipsComponent_Conditional_10_For_38_Template_select_ngModelChange_1_listener($event) {
      const row_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onInputPick(row_r12, $event));
    });
    \u0275\u0275elementStart(2, "option", 33);
    \u0275\u0275text(3, "\u2014 Type \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, PayslipsComponent_Conditional_10_For_38_For_5_Template, 2, 2, "option", 34, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function PayslipsComponent_Conditional_10_For_38_Template_input_ngModelChange_6_listener($event) {
      const row_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(row_r12.amount, $event) || (row_r12.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function PayslipsComponent_Conditional_10_For_38_Template_button_click_7_listener() {
      const $index_r14 = \u0275\u0275restoreView(_r11).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeInputRow($index_r14));
    });
    \u0275\u0275elementStart(8, "span", 2);
    \u0275\u0275text(9, "delete_outline");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, PayslipsComponent_Conditional_10_For_38_Conditional_10_Template, 2, 3, "div", 37);
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", row_r12.code);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.inputTypes);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r12.amount);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(row_r12.code ? 10 : -1);
  }
}
function PayslipsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function PayslipsComponent_Conditional_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275listener("click", function PayslipsComponent_Conditional_10_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 16)(3, "h3");
    \u0275\u0275text(4, "Calculer un bulletin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function PayslipsComponent_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 18);
    \u0275\u0275conditionalCreate(9, PayslipsComponent_Conditional_10_Conditional_9_Template, 2, 1, "div", 19);
    \u0275\u0275elementStart(10, "div", 20)(11, "div", 21)(12, "label");
    \u0275\u0275text(13, "Employ\xE9 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PayslipsComponent_Conditional_10_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.empId, $event) || (ctx_r1.empId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 23);
    \u0275\u0275text(16, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(17, PayslipsComponent_Conditional_10_For_18_Template, 2, 4, "option", 24, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 25)(20, "label");
    \u0275\u0275text(21, "Du *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function PayslipsComponent_Conditional_10_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.from, $event) || (ctx_r1.from = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 25)(24, "label");
    \u0275\u0275text(25, "Au *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function PayslipsComponent_Conditional_10_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.to, $event) || (ctx_r1.to = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 27);
    \u0275\u0275text(28, "Jours (travaill\xE9s, absence, cong\xE9\u2026)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(29, PayslipsComponent_Conditional_10_For_30_Template, 10, 2, "div", 28, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(31, "button", 29);
    \u0275\u0275listener("click", function PayslipsComponent_Conditional_10_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addDayRow());
    });
    \u0275\u0275elementStart(32, "span", 2);
    \u0275\u0275text(33, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Ajouter des jours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 27);
    \u0275\u0275text(36, "\xC9l\xE9ments variables (avance, prime exceptionnelle\u2026)");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(37, PayslipsComponent_Conditional_10_For_38_Template, 11, 3, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(39, "button", 29);
    \u0275\u0275listener("click", function PayslipsComponent_Conditional_10_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addInputRow());
    });
    \u0275\u0275elementStart(40, "span", 2);
    \u0275\u0275text(41, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42, " Ajouter un \xE9l\xE9ment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 30)(44, "button", 31);
    \u0275\u0275listener("click", function PayslipsComponent_Conditional_10_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275text(45, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 32);
    \u0275\u0275listener("click", function PayslipsComponent_Conditional_10_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.compute());
    });
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.err ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.empId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.employees);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.from);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.to);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.dayRows);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.inputRows);
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r1.computing);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.computing ? "Calcul\u2026" : "Calculer");
  }
}
var PayslipsComponent = class _PayslipsComponent {
  constructor(hr, auth, router) {
    this.hr = hr;
    this.auth = auth;
    this.router = router;
    this.payslips = [];
    this.employees = [];
    this.inputTypes = [];
    this.dayTypes = [];
    this.salaryRules = [];
    this.loading = false;
    this.showModal = false;
    this.computing = false;
    this.err = "";
    this.empId = 0;
    this.from = "";
    this.to = "";
    this.inputRows = [];
    this.dayRows = [];
    this.canCreate = false;
  }
  ngOnInit() {
    this.companyId = this.auth.getCompanyId();
    this.canCreate = this.auth.hasPermission("RH", "BULLETINS", "CREATE") || this.auth.isPrivileged();
    this.hr.getEmployees(this.companyId).subscribe((e) => this.employees = e);
    this.hr.getInputTypes(this.companyId).subscribe((t) => this.inputTypes = t);
    this.hr.getWorkedDaysTypes(this.companyId).subscribe((t) => this.dayTypes = t);
    this.hr.getRules(this.companyId).subscribe((r) => this.salaryRules = r);
    this.load();
  }
  load() {
    this.loading = true;
    this.hr.getPayslips(this.companyId).subscribe({ next: (p) => {
      this.payslips = p;
      this.loading = false;
    }, error: () => this.loading = false });
  }
  fmt(n) {
    return new Intl.NumberFormat("fr-FR").format(Math.round(n || 0));
  }
  stateLabel(s) {
    return s === "DONE" ? "Comptabilis\xE9" : s === "VERIFY" ? "Calcul\xE9" : s === "CANCELLED" ? "Annul\xE9" : "Brouillon";
  }
  badge(s) {
    return s === "DONE" ? "done" : s === "VERIFY" ? "info" : s === "CANCELLED" ? "warn" : "";
  }
  open(p) {
    this.router.navigate(["/hr/payslips", p.id]);
  }
  openCompute() {
    const now = /* @__PURE__ */ new Date();
    this.from = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split("T")[0];
    this.to = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split("T")[0];
    this.empId = 0;
    this.err = "";
    this.inputRows = [];
    this.dayRows = [];
    this.showModal = true;
  }
  addInputRow() {
    this.inputRows.push({ code: "", name: "", amount: 0 });
  }
  removeInputRow(i) {
    this.inputRows.splice(i, 1);
  }
  onInputPick(row, code) {
    row.name = this.inputTypes.find((t) => t.code === code)?.name ?? "";
  }
  /**
   * 'deduct' | 'add' | 'none' selon la règle salariale (type INPUT) qui référence ce code.
   * Le moteur applique déjà le signe automatiquement via le drapeau "Retenue" de la règle —
   * l'utilisateur tape toujours un montant positif, jamais de signe négatif à saisir lui-même.
   */
  inputEffect(code) {
    const rule = this.salaryRules.find((r) => r.computeType === "INPUT" && r.code === code);
    if (!rule)
      return "none";
    return rule.deduction ? "deduct" : "add";
  }
  inputHintText(code) {
    const effect = this.inputEffect(code);
    if (effect === "deduct")
      return "\u2192 sera automatiquement d\xE9duit du net \xE0 payer (tapez un montant positif)";
    if (effect === "add")
      return "\u2192 s'ajoutera au brut (tapez un montant positif)";
    return "\u26A0 aucune r\xE8gle salariale de type \xAB \xC9l\xE9ment variable \xBB ne r\xE9f\xE9rence ce code \u2014 sans effet sur le calcul (configurez-la dans Config. paie)";
  }
  addDayRow() {
    this.dayRows.push({ code: "", name: "", numberOfDays: 0 });
  }
  removeDayRow(i) {
    this.dayRows.splice(i, 1);
  }
  onDayPick(row, code) {
    row.name = this.dayTypes.find((t) => t.code === code)?.name ?? "";
  }
  compute() {
    if (!this.empId || !this.from || !this.to) {
      this.err = "Employ\xE9 et p\xE9riode obligatoires";
      return;
    }
    this.computing = true;
    const inputs = this.inputRows.filter((r) => r.code);
    const workedDays = this.dayRows.filter((r) => r.code);
    this.hr.compute({
      companyId: this.companyId,
      employeeId: this.empId,
      periodFrom: this.from,
      periodTo: this.to,
      inputs,
      workedDays
    }).subscribe({
      next: (dto) => {
        this.computing = false;
        this.showModal = false;
        this.router.navigate(["/hr/payslips", dto.payslip.id]);
      },
      error: (e) => {
        this.computing = false;
        this.err = e.error?.message || "Erreur de calcul";
      }
    });
  }
  static {
    this.\u0275fac = function PayslipsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PayslipsComponent)(\u0275\u0275directiveInject(HrService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PayslipsComponent, selectors: [["app-hr-payslips"]], decls: 11, vars: 3, consts: [[1, "hp"], [1, "hp-head"], [1, "material-icons"], [1, "b", "b-primary"], [1, "muted"], [1, "empty"], [1, "tbl-wrap"], [1, "ov"], [1, "b", "b-primary", 3, "click"], [1, "tbl"], [1, "ta-r"], [1, "clk"], [1, "clk", 3, "click"], [1, "badge"], [1, "ov", 3, "click"], [1, "mdl", 2, "max-width", "620px", 3, "click"], [1, "mdl-h"], [1, "b-icon", 3, "click"], [1, "mdl-b"], [1, "alert"], [1, "grid"], [1, "fg", "fg-2"], [1, "in", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue"], [1, "fg"], ["type", "date", 1, "in", 3, "ngModelChange", "ngModel"], [1, "section-title"], [1, "row-line"], [1, "b", "b-sec", 2, "margin-top", "6px", 3, "click"], [1, "mdl-f"], [1, "b", "b-sec", 3, "click"], [1, "b", "b-primary", 3, "click", "disabled"], ["value", "", "disabled", ""], [3, "value"], ["type", "number", "placeholder", "Nb jours", 1, "in", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "placeholder", "Montant (positif)", 1, "in", 3, "ngModelChange", "ngModel"], [1, "input-hint", 3, "warn"], [1, "input-hint"]], template: function PayslipsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1")(3, "span", 2);
        \u0275\u0275text(4, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Bulletins de paie");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, PayslipsComponent_Conditional_6_Template, 4, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, PayslipsComponent_Conditional_7_Template, 2, 0, "div", 4)(8, PayslipsComponent_Conditional_8_Template, 2, 0, "div", 5)(9, PayslipsComponent_Conditional_9_Template, 21, 0, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, PayslipsComponent_Conditional_10_Template, 48, 7, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.canCreate ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 7 : ctx.payslips.length === 0 ? 8 : 9);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showModal ? 10 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.hp[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #7C3AED;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.b-primary[_ngcontent-%COMP%] {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n}\n.b-danger[_ngcontent-%COMP%] {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.ta-r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.clk[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.mdl-f[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.fg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in[_ngcontent-%COMP%] {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in[_ngcontent-%COMP%]:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in[_ngcontent-%COMP%]:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .fg-2[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */", "\n.section-title[_ngcontent-%COMP%] {\n  margin: 16px 0 8px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.row-line[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 120px auto;\n  gap: 8px;\n  margin-bottom: 8px;\n  align-items: center;\n}\n.input-hint[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n  margin: -4px 0 8px 2px;\n}\n.input-hint.warn[_ngcontent-%COMP%] {\n  color: #d97706;\n  font-weight: 600;\n}\n/*# sourceMappingURL=payslips.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PayslipsComponent, [{
    type: Component,
    args: [{ selector: "app-hr-payslips", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="hp">
      <div class="hp-head">
        <h1><span class="material-icons">receipt_long</span> Bulletins de paie</h1>
        @if (canCreate) { <button class="b b-primary" (click)="openCompute()"><span class="material-icons">calculate</span> Calculer un bulletin</button> }
      </div>
      @if (loading) { <div class="muted">Chargement\u2026</div> }
      @else if (payslips.length === 0) { <div class="empty">Aucun bulletin. Cliquez sur \xAB Calculer un bulletin \xBB.</div> }
      @else {
        <div class="tbl-wrap">
          <table class="tbl">
            <thead><tr><th>R\xE9f\xE9rence</th><th>Employ\xE9</th><th>P\xE9riode</th><th class="ta-r">Brut</th><th class="ta-r">Retenues</th><th class="ta-r">Net \xE0 payer</th><th>\xC9tat</th></tr></thead>
            <tbody>
              @for (p of payslips; track p.id) {
                <tr class="clk" (click)="open(p)">
                  <td><strong>{{ p.name }}</strong></td>
                  <td>{{ p.employeeName }}</td>
                  <td>{{ p.periodFrom }} \u2192 {{ p.periodTo }}</td>
                  <td class="ta-r">{{ fmt(p.totalBrut) }}</td>
                  <td class="ta-r">{{ fmt(p.totalCotisationsSalariales) }}</td>
                  <td class="ta-r"><strong>{{ fmt(p.totalNet) }}</strong></td>
                  <td><span class="badge" [class]="badge(p.state)">{{ stateLabel(p.state) }}</span></td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </div>

    @if (showModal) {
      <div class="ov" (click)="showModal=false">
        <div class="mdl" (click)="$event.stopPropagation()" style="max-width:620px">
          <div class="mdl-h"><h3>Calculer un bulletin</h3><button class="b-icon" (click)="showModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg fg-2"><label>Employ\xE9 *</label><select class="in" [(ngModel)]="empId"><option [ngValue]="0" disabled>\u2014 S\xE9lectionner \u2014</option>@for (e of employees; track e.id) { <option [ngValue]="e.id">{{ e.matricule }} \u2014 {{ e.lastName }} {{ e.firstName }}</option> }</select></div>
              <div class="fg"><label>Du *</label><input type="date" class="in" [(ngModel)]="from"></div>
              <div class="fg"><label>Au *</label><input type="date" class="in" [(ngModel)]="to"></div>
            </div>

            <!-- Jours travaill\xE9s -->
            <div class="section-title">Jours (travaill\xE9s, absence, cong\xE9\u2026)</div>
            @for (row of dayRows; track $index) {
              <div class="row-line">
                <select class="in" [(ngModel)]="row.code" (ngModelChange)="onDayPick(row, $event)">
                  <option value="" disabled>\u2014 Type \u2014</option>
                  @for (t of dayTypes; track t.id) { <option [value]="t.code">{{ t.name }}</option> }
                </select>
                <input type="number" class="in" [(ngModel)]="row.numberOfDays" placeholder="Nb jours">
                <button class="b-icon" (click)="removeDayRow($index)"><span class="material-icons">delete_outline</span></button>
              </div>
            }
            <button class="b b-sec" style="margin-top:6px" (click)="addDayRow()"><span class="material-icons">add</span> Ajouter des jours</button>

            <!-- \xC9l\xE9ments variables -->
            <div class="section-title">\xC9l\xE9ments variables (avance, prime exceptionnelle\u2026)</div>
            @for (row of inputRows; track $index) {
              <div class="row-line">
                <select class="in" [(ngModel)]="row.code" (ngModelChange)="onInputPick(row, $event)">
                  <option value="" disabled>\u2014 Type \u2014</option>
                  @for (t of inputTypes; track t.id) { <option [value]="t.code">{{ t.name }}</option> }
                </select>
                <input type="number" min="0" class="in" [(ngModel)]="row.amount" placeholder="Montant (positif)">
                <button class="b-icon" (click)="removeInputRow($index)"><span class="material-icons">delete_outline</span></button>
              </div>
              @if (row.code) {
                <div class="input-hint" [class.warn]="inputEffect(row.code) === 'none'">
                  {{ inputHintText(row.code) }}
                </div>
              }
            }
            <button class="b b-sec" style="margin-top:6px" (click)="addInputRow()"><span class="material-icons">add</span> Ajouter un \xE9l\xE9ment</button>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showModal=false">Annuler</button>
            <button class="b b-primary" (click)="compute()" [disabled]="computing">{{ computing ? 'Calcul\u2026' : 'Calculer' }}</button>
          </div>
        </div>
      </div>
    }
  `, styles: ["/* src/app/modules/hr/components/hr-shared.scss */\n:host {\n  display: block;\n}\n.hp {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head h1 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head h1 .material-icons {\n  color: #7C3AED;\n}\n.muted {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b .material-icons {\n  font-size: 18px;\n}\n.b-primary {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec:hover {\n  background: var(--navbar-hover);\n}\n.b-danger {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl th {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl td {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl tbody tr:hover {\n  background: var(--bg-elevated);\n}\n.ta-r {\n  text-align: right;\n}\n.clk {\n  cursor: pointer;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b {\n  padding: 20px;\n}\n.mdl-f {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2 {\n  grid-column: span 2;\n}\n.fg label {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n  .fg-2 {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */\n", "/* angular:styles/component:scss;5d356f2c94374f53ca6d8700f96977023829543c29c1b8fa61240f3786545944;/home/automate/Documents/Projets 1.1/Projets/Blessing ERP Distrbuteur/erp-frontend/src/app/modules/hr/components/payslips/payslips.component.ts */\n.section-title {\n  margin: 16px 0 8px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.row-line {\n  display: grid;\n  grid-template-columns: 1fr 120px auto;\n  gap: 8px;\n  margin-bottom: 8px;\n  align-items: center;\n}\n.input-hint {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n  margin: -4px 0 8px 2px;\n}\n.input-hint.warn {\n  color: #d97706;\n  font-weight: 600;\n}\n/*# sourceMappingURL=payslips.component.css.map */\n"] }]
  }], () => [{ type: HrService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PayslipsComponent, { className: "PayslipsComponent", filePath: "app/modules/hr/components/payslips/payslips.component.ts", lineNumber: 106 });
})();
export {
  PayslipsComponent
};
//# sourceMappingURL=chunk-M52OF3O3.js.map
