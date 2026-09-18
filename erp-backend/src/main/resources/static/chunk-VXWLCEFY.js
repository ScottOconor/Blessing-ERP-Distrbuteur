import {
  HrService
} from "./chunk-TCOWJUCH.js";
import {
  NotificationService
} from "./chunk-LUF5JDG2.js";
import {
  DefaultValueAccessor,
  FormsModule,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/hr/components/leaves/leaves.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.leaveTypeId;
function LeavesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function LeavesComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeclare());
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " D\xE9clarer un cong\xE9");
    \u0275\u0275elementEnd();
  }
}
function LeavesComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", e_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", e_r3.matricule, " \u2014 ", e_r3.lastName, " ", e_r3.firstName);
  }
}
function LeavesComponent_Conditional_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "Aucun type de cong\xE9 d\xE9fini.");
    \u0275\u0275elementEnd();
  }
}
function LeavesComponent_Conditional_15_Conditional_5_For_17_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function LeavesComponent_Conditional_15_Conditional_5_For_17_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const b_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCarryOver(b_r5));
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function LeavesComponent_Conditional_15_Conditional_5_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 19);
    \u0275\u0275conditionalCreate(12, LeavesComponent_Conditional_15_Conditional_5_For_17_Conditional_12_Template, 3, 0, "button", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(b_r5.carryOver));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(b_r5.accrued));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(b_r5.taken));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(b_r5.remaining));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canEdit ? 12 : -1);
  }
}
function LeavesComponent_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "table", 18)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 19);
    \u0275\u0275text(7, "Report N-1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 19);
    \u0275\u0275text(13, "Reste");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, LeavesComponent_Conditional_15_Conditional_5_For_17_Template, 13, 6, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Acquis ", ctx_r1.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Pris ", ctx_r1.year);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.balances);
  }
}
function LeavesComponent_Conditional_15_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "Aucune d\xE9claration.");
    \u0275\u0275elementEnd();
  }
}
function LeavesComponent_Conditional_15_Conditional_10_For_17_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function LeavesComponent_Conditional_15_Conditional_10_For_17_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const d_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.delDeclaration(d_r7));
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "delete_outline");
    \u0275\u0275elementEnd()();
  }
}
function LeavesComponent_Conditional_15_Conditional_10_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 19);
    \u0275\u0275conditionalCreate(12, LeavesComponent_Conditional_15_Conditional_10_For_17_Conditional_12_Template, 3, 0, "button", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.leaveTypeName(d_r7.leaveTypeId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r7.dateFrom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r7.dateEnd);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(d_r7.numberOfDays));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r7.notes || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canEdit ? 12 : -1);
  }
}
function LeavesComponent_Conditional_15_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "table", 18)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Du");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Au");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 19);
    \u0275\u0275text(11, "Jours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, LeavesComponent_Conditional_15_Conditional_10_For_17_Template, 13, 6, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.declarations);
  }
}
function LeavesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, LeavesComponent_Conditional_15_Conditional_4_Template, 2, 0, "div", 13)(5, LeavesComponent_Conditional_15_Conditional_5_Template, 18, 2, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15)(7, "h2", 16);
    \u0275\u0275text(8, "D\xE9clarations");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, LeavesComponent_Conditional_15_Conditional_9_Template, 2, 0, "div", 17)(10, LeavesComponent_Conditional_15_Conditional_10_Template, 18, 0, "div", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Compteurs ", ctx_r1.year);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.balances.length === 0 ? 4 : 5);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.declarations.length === 0 ? 9 : 10);
  }
}
function LeavesComponent_Conditional_16_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.err);
  }
}
function LeavesComponent_Conditional_16_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r9 = ctx.$implicit;
    \u0275\u0275property("ngValue", e_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", e_r9.matricule, " \u2014 ", e_r9.lastName, " ", e_r9.firstName);
  }
}
function LeavesComponent_Conditional_16_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r10 = ctx.$implicit;
    \u0275\u0275property("ngValue", t_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r10.name);
  }
}
function LeavesComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function LeavesComponent_Conditional_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275listener("click", function LeavesComponent_Conditional_16_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 27)(3, "h3");
    \u0275\u0275text(4, "D\xE9clarer un cong\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function LeavesComponent_Conditional_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 28);
    \u0275\u0275conditionalCreate(9, LeavesComponent_Conditional_16_Conditional_9_Template, 2, 1, "div", 29);
    \u0275\u0275elementStart(10, "div", 30)(11, "div", 31)(12, "label");
    \u0275\u0275text(13, "Employ\xE9 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 5);
    \u0275\u0275twoWayListener("ngModelChange", function LeavesComponent_Conditional_16_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.employeeId, $event) || (ctx_r1.form.employeeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 6);
    \u0275\u0275text(16, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(17, LeavesComponent_Conditional_16_For_18_Template, 2, 4, "option", 7, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 31)(20, "label");
    \u0275\u0275text(21, "Type de cong\xE9 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 5);
    \u0275\u0275twoWayListener("ngModelChange", function LeavesComponent_Conditional_16_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.leaveTypeId, $event) || (ctx_r1.form.leaveTypeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "option", 6);
    \u0275\u0275text(24, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(25, LeavesComponent_Conditional_16_For_26_Template, 2, 2, "option", 7, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 32)(28, "label");
    \u0275\u0275text(29, "Du *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function LeavesComponent_Conditional_16_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateFrom, $event) || (ctx_r1.form.dateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function LeavesComponent_Conditional_16_Template_input_ngModelChange_30_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDatesChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 32)(32, "label");
    \u0275\u0275text(33, "Au *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function LeavesComponent_Conditional_16_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateEnd, $event) || (ctx_r1.form.dateEnd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function LeavesComponent_Conditional_16_Template_input_ngModelChange_34_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDatesChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 32)(36, "label");
    \u0275\u0275text(37, "Jours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function LeavesComponent_Conditional_16_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.numberOfDays, $event) || (ctx_r1.form.numberOfDays = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 31)(40, "label");
    \u0275\u0275text(41, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", function LeavesComponent_Conditional_16_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.notes, $event) || (ctx_r1.form.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 35)(44, "button", 36);
    \u0275\u0275listener("click", function LeavesComponent_Conditional_16_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275text(45, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 37);
    \u0275\u0275listener("click", function LeavesComponent_Conditional_16_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveDeclaration());
    });
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.err ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.employeeId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.employees);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.leaveTypeId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.leaveTypes);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateFrom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateEnd);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.numberOfDays);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.notes);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Enregistrement\u2026" : "Enregistrer");
  }
}
function LeavesComponent_Conditional_17_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.err);
  }
}
function LeavesComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function LeavesComponent_Conditional_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCarryOverModal = false);
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275listener("click", function LeavesComponent_Conditional_17_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 27)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function LeavesComponent_Conditional_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCarryOverModal = false);
    });
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 28);
    \u0275\u0275conditionalCreate(9, LeavesComponent_Conditional_17_Conditional_9_Template, 2, 1, "div", 29);
    \u0275\u0275elementStart(10, "div", 32)(11, "label");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function LeavesComponent_Conditional_17_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.carryOverForm.amount, $event) || (ctx_r1.carryOverForm.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 35)(15, "button", 36);
    \u0275\u0275listener("click", function LeavesComponent_Conditional_17_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCarryOverModal = false);
    });
    \u0275\u0275text(16, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 37);
    \u0275\u0275listener("click", function LeavesComponent_Conditional_17_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCarryOver());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Report N-1 \u2014 ", ctx_r1.carryOverForm.name);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.err ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Solde report\xE9 de ", ctx_r1.year - 1, " (jours)");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.carryOverForm.amount);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Enregistrement\u2026" : "Enregistrer");
  }
}
var LeavesComponent = class _LeavesComponent {
  constructor(hr, auth, notificationService) {
    this.hr = hr;
    this.auth = auth;
    this.notificationService = notificationService;
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
    this.employees = [];
    this.leaveTypes = [];
    this.balances = [];
    this.declarations = [];
    this.canEdit = false;
    this.showModal = false;
    this.saving = false;
    this.err = "";
    this.form = { employeeId: 0, leaveTypeId: 0, dateFrom: "", dateEnd: "", numberOfDays: 0, companyId: 0 };
    this.showCarryOverModal = false;
    this.carryOverForm = { leaveTypeId: 0, name: "", amount: 0 };
  }
  ngOnInit() {
    this.companyId = this.auth.getCompanyId();
    this.canEdit = this.auth.hasPermission("RH", "CONGES", "CREATE") || this.auth.hasPermission("RH", "CONGES", "EDIT") || this.auth.isPrivileged();
    this.hr.getEmployees(this.companyId).subscribe((e) => this.employees = e);
    this.hr.getLeaveTypes(this.companyId).subscribe((t) => this.leaveTypes = t);
  }
  onEmployeeChange() {
    if (!this.selectedEmployeeId)
      return;
    this.hr.getLeaveBalances(this.companyId, this.selectedEmployeeId, this.year).subscribe((b) => this.balances = b);
    this.hr.getLeaveDeclarations(this.companyId, this.selectedEmployeeId).subscribe((d) => this.declarations = d);
  }
  leaveTypeName(id) {
    return this.leaveTypes.find((t) => t.id === id)?.name ?? id;
  }
  fmt(n) {
    return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 2 }).format(n || 0);
  }
  /** Pré-calcule le nombre de jours calendaires entre les deux dates — reste ensuite librement ajustable. */
  onDatesChange() {
    if (!this.form.dateFrom || !this.form.dateEnd)
      return;
    const from = new Date(this.form.dateFrom);
    const to = new Date(this.form.dateEnd);
    const days = Math.round((to.getTime() - from.getTime()) / 864e5) + 1;
    if (days > 0)
      this.form.numberOfDays = days;
  }
  openDeclare() {
    this.form = { employeeId: this.selectedEmployeeId || 0, leaveTypeId: 0, dateFrom: "", dateEnd: "", numberOfDays: 0, companyId: this.companyId };
    this.err = "";
    this.showModal = true;
  }
  saveDeclaration() {
    if (!this.form.employeeId) {
      this.err = "S\xE9lectionnez un employ\xE9";
      return;
    }
    if (!this.form.leaveTypeId) {
      this.err = "S\xE9lectionnez un type de cong\xE9";
      return;
    }
    if (!this.form.dateFrom || !this.form.dateEnd) {
      this.err = "Les dates sont obligatoires";
      return;
    }
    this.form.companyId = this.companyId;
    this.saving = true;
    this.hr.saveLeaveDeclaration(this.form).subscribe({
      next: () => {
        this.saving = false;
        this.showModal = false;
        this.onEmployeeChange();
      },
      error: (e) => {
        this.saving = false;
        this.err = e.error?.message || "Erreur";
      }
    });
  }
  delDeclaration(d) {
    if (!confirm("Supprimer cette d\xE9claration ?"))
      return;
    this.hr.deleteLeaveDeclaration(d.id).subscribe({
      next: () => this.onEmployeeChange(),
      error: (err) => this.notificationService.notify(err?.error?.message ?? "Erreur lors de la suppression.", "error")
    });
  }
  openCarryOver(b) {
    this.carryOverForm = { leaveTypeId: b.leaveTypeId, name: b.name, amount: b.carryOver || 0 };
    this.err = "";
    this.showCarryOverModal = true;
  }
  saveCarryOver() {
    if (!this.selectedEmployeeId)
      return;
    this.saving = true;
    this.hr.saveLeaveCarryOver(this.companyId, this.selectedEmployeeId, this.carryOverForm.leaveTypeId, this.year, this.carryOverForm.amount).subscribe({
      next: () => {
        this.saving = false;
        this.showCarryOverModal = false;
        this.onEmployeeChange();
      },
      error: (e) => {
        this.saving = false;
        this.err = e.error?.message || "Erreur";
      }
    });
  }
  static {
    this.\u0275fac = function LeavesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LeavesComponent)(\u0275\u0275directiveInject(HrService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeavesComponent, selectors: [["app-hr-leaves"]], decls: 18, vars: 6, consts: [[1, "hp"], [1, "hp-head"], [1, "material-icons"], [1, "b", "b-primary"], [1, "fg", 2, "max-width", "360px", "margin-bottom", "16px"], [1, "in", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue"], [1, "ov"], [1, "b", "b-primary", 3, "click"], [1, "card", 2, "margin-bottom", "20px"], [1, "pcard-head"], [1, "pref"], [1, "empty", 2, "padding", "16px 20px"], [1, "tbl-wrap"], [1, "hp-head", 2, "margin-bottom", "10px"], [2, "font-size", "1rem", "margin", "0"], [1, "empty"], [1, "tbl"], [1, "ta-r"], [1, "ta-r", 2, "font-weight", "700"], ["title", "Modifier le report N-1", 1, "b-icon"], ["title", "Modifier le report N-1", 1, "b-icon", 3, "click"], [1, "b-icon"], [1, "b-icon", 3, "click"], [1, "ov", 3, "click"], [1, "mdl", 2, "max-width", "480px", 3, "click"], [1, "mdl-h"], [1, "mdl-b"], [1, "alert"], [1, "grid"], [1, "fg", "fg-2"], [1, "fg"], ["type", "date", 1, "in", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.5", 1, "in", 3, "ngModelChange", "ngModel"], [1, "mdl-f"], [1, "b", "b-sec", 3, "click"], [1, "b", "b-primary", 3, "click", "disabled"], [1, "mdl", 2, "max-width", "420px", 3, "click"]], template: function LeavesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1")(3, "span", 2);
        \u0275\u0275text(4, "beach_access");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Cong\xE9s");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, LeavesComponent_Conditional_6_Template, 4, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4)(8, "label");
        \u0275\u0275text(9, "Employ\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "select", 5);
        \u0275\u0275twoWayListener("ngModelChange", function LeavesComponent_Template_select_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedEmployeeId, $event) || (ctx.selectedEmployeeId = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function LeavesComponent_Template_select_ngModelChange_10_listener() {
          return ctx.onEmployeeChange();
        });
        \u0275\u0275elementStart(11, "option", 6);
        \u0275\u0275text(12, "\u2014 S\xE9lectionner \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(13, LeavesComponent_For_14_Template, 2, 4, "option", 7, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(15, LeavesComponent_Conditional_15_Template, 11, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(16, LeavesComponent_Conditional_16_Template, 48, 11, "div", 8);
        \u0275\u0275conditionalCreate(17, LeavesComponent_Conditional_17_Template, 19, 6, "div", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.canEdit ? 6 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedEmployeeId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", void 0);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.employees);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.selectedEmployeeId ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showCarryOverModal ? 17 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.hp[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #7C3AED;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.b-primary[_ngcontent-%COMP%] {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n}\n.b-danger[_ngcontent-%COMP%] {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.ta-r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.clk[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.mdl-f[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.fg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in[_ngcontent-%COMP%] {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in[_ngcontent-%COMP%]:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in[_ngcontent-%COMP%]:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .fg-2[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeavesComponent, [{
    type: Component,
    args: [{ selector: "app-hr-leaves", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="hp">
      <div class="hp-head">
        <h1><span class="material-icons">beach_access</span> Cong\xE9s</h1>
        @if (canEdit) { <button class="b b-primary" (click)="openDeclare()"><span class="material-icons">add</span> D\xE9clarer un cong\xE9</button> }
      </div>

      <div class="fg" style="max-width:360px;margin-bottom:16px">
        <label>Employ\xE9</label>
        <select class="in" [(ngModel)]="selectedEmployeeId" (ngModelChange)="onEmployeeChange()">
          <option [ngValue]="undefined" disabled>\u2014 S\xE9lectionner \u2014</option>
          @for (e of employees; track e.id) { <option [ngValue]="e.id">{{ e.matricule }} \u2014 {{ e.lastName }} {{ e.firstName }}</option> }
        </select>
      </div>

      @if (selectedEmployeeId) {
        <div class="card" style="margin-bottom:20px">
          <div class="pcard-head"><div class="pref">Compteurs {{ year }}</div></div>
          @if (balances.length === 0) { <div class="empty" style="padding:16px 20px">Aucun type de cong\xE9 d\xE9fini.</div> }
          @else {
            <div class="tbl-wrap">
              <table class="tbl">
                <thead><tr><th>Type</th><th class="ta-r">Report N-1</th><th class="ta-r">Acquis {{ year }}</th><th class="ta-r">Pris {{ year }}</th><th class="ta-r">Reste</th><th></th></tr></thead>
                <tbody>
                  @for (b of balances; track b.leaveTypeId) {
                    <tr>
                      <td>{{ b.name }}</td>
                      <td class="ta-r">{{ fmt(b.carryOver) }}</td>
                      <td class="ta-r">{{ fmt(b.accrued) }}</td>
                      <td class="ta-r">{{ fmt(b.taken) }}</td>
                      <td class="ta-r" style="font-weight:700">{{ fmt(b.remaining) }}</td>
                      <td class="ta-r">@if (canEdit) { <button class="b-icon" title="Modifier le report N-1" (click)="openCarryOver(b)"><span class="material-icons">edit</span></button> }</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          }
        </div>

        <div class="hp-head" style="margin-bottom:10px"><h2 style="font-size:1rem;margin:0">D\xE9clarations</h2></div>
        @if (declarations.length === 0) { <div class="empty">Aucune d\xE9claration.</div> }
        @else {
          <div class="tbl-wrap">
            <table class="tbl">
              <thead><tr><th>Type</th><th>Du</th><th>Au</th><th class="ta-r">Jours</th><th>Notes</th><th></th></tr></thead>
              <tbody>
                @for (d of declarations; track d.id) {
                  <tr>
                    <td>{{ leaveTypeName(d.leaveTypeId) }}</td>
                    <td>{{ d.dateFrom }}</td>
                    <td>{{ d.dateEnd }}</td>
                    <td class="ta-r">{{ fmt(d.numberOfDays) }}</td>
                    <td>{{ d.notes || '\u2014' }}</td>
                    <td class="ta-r">@if (canEdit) { <button class="b-icon" (click)="delDeclaration(d)"><span class="material-icons">delete_outline</span></button> }</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      }
    </div>

    @if (showModal) {
      <div class="ov" (click)="showModal=false">
        <div class="mdl" style="max-width:480px" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>D\xE9clarer un cong\xE9</h3><button class="b-icon" (click)="showModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg fg-2"><label>Employ\xE9 *</label>
                <select class="in" [(ngModel)]="form.employeeId"><option [ngValue]="0" disabled>\u2014 S\xE9lectionner \u2014</option>@for (e of employees; track e.id) { <option [ngValue]="e.id">{{ e.matricule }} \u2014 {{ e.lastName }} {{ e.firstName }}</option> }</select>
              </div>
              <div class="fg fg-2"><label>Type de cong\xE9 *</label>
                <select class="in" [(ngModel)]="form.leaveTypeId"><option [ngValue]="0" disabled>\u2014 S\xE9lectionner \u2014</option>@for (t of leaveTypes; track t.id) { <option [ngValue]="t.id">{{ t.name }}</option> }</select>
              </div>
              <div class="fg"><label>Du *</label><input type="date" class="in" [(ngModel)]="form.dateFrom" (ngModelChange)="onDatesChange()"></div>
              <div class="fg"><label>Au *</label><input type="date" class="in" [(ngModel)]="form.dateEnd" (ngModelChange)="onDatesChange()"></div>
              <div class="fg"><label>Jours</label><input type="number" step="0.5" class="in" [(ngModel)]="form.numberOfDays"></div>
              <div class="fg fg-2"><label>Notes</label><input class="in" [(ngModel)]="form.notes"></div>
            </div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showModal=false">Annuler</button>
            <button class="b b-primary" (click)="saveDeclaration()" [disabled]="saving">{{ saving ? 'Enregistrement\u2026' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }

    @if (showCarryOverModal) {
      <div class="ov" (click)="showCarryOverModal=false">
        <div class="mdl" style="max-width:420px" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>Report N-1 \u2014 {{ carryOverForm.name }}</h3><button class="b-icon" (click)="showCarryOverModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="fg"><label>Solde report\xE9 de {{ year - 1 }} (jours)</label><input type="number" step="0.5" class="in" [(ngModel)]="carryOverForm.amount"></div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showCarryOverModal=false">Annuler</button>
            <button class="b b-primary" (click)="saveCarryOver()" [disabled]="saving">{{ saving ? 'Enregistrement\u2026' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }
  `, styles: ["/* src/app/modules/hr/components/hr-shared.scss */\n:host {\n  display: block;\n}\n.hp {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head h1 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head h1 .material-icons {\n  color: #7C3AED;\n}\n.muted {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b .material-icons {\n  font-size: 18px;\n}\n.b-primary {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec:hover {\n  background: var(--navbar-hover);\n}\n.b-danger {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl th {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl td {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl tbody tr:hover {\n  background: var(--bg-elevated);\n}\n.ta-r {\n  text-align: right;\n}\n.clk {\n  cursor: pointer;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b {\n  padding: 20px;\n}\n.mdl-f {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2 {\n  grid-column: span 2;\n}\n.fg label {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n  .fg-2 {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */\n"] }]
  }], () => [{ type: HrService }, { type: AuthService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeavesComponent, { className: "LeavesComponent", filePath: "app/modules/hr/components/leaves/leaves.component.ts", lineNumber: 121 });
})();
export {
  LeavesComponent
};
//# sourceMappingURL=chunk-VXWLCEFY.js.map
