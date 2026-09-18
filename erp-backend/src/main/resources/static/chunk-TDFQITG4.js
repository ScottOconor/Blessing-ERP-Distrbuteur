import {
  HrService
} from "./chunk-TCOWJUCH.js";
import {
  NotificationService
} from "./chunk-LUF5JDG2.js";
import {
  Router
} from "./chunk-4W3TIS2I.js";
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
import {
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/hr/components/contracts/contracts.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ContractsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function ContractsComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouveau contrat");
    \u0275\u0275elementEnd();
  }
}
function ContractsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function ContractsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "Aucun contrat.");
    \u0275\u0275elementEnd();
  }
}
function ContractsComponent_Conditional_9_For_21_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function ContractsComponent_Conditional_9_For_21_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(c_r4));
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function ContractsComponent_Conditional_9_For_21_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ContractsComponent_Conditional_9_For_21_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setState(c_r4, "RUNNING"));
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "play_arrow");
    \u0275\u0275elementEnd()();
  }
}
function ContractsComponent_Conditional_9_For_21_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ContractsComponent_Conditional_9_For_21_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setState(c_r4, "CLOSED"));
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "stop");
    \u0275\u0275elementEnd()();
  }
}
function ContractsComponent_Conditional_9_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 10);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 11);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 10)(18, "button", 12);
    \u0275\u0275listener("click", function ContractsComponent_Conditional_9_For_21_Template_button_click_18_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.view(c_r4));
    });
    \u0275\u0275elementStart(19, "span", 2);
    \u0275\u0275text(20, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, ContractsComponent_Conditional_9_For_21_Conditional_21_Template, 3, 0, "button", 13);
    \u0275\u0275conditionalCreate(22, ContractsComponent_Conditional_9_For_21_Conditional_22_Template, 3, 0, "button", 14);
    \u0275\u0275conditionalCreate(23, ContractsComponent_Conditional_9_For_21_Conditional_23_Template, 3, 0, "button", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.empName(c_r4.employeeId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.dateStart);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.dateEnd);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(c_r4.wage));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(ctx_r1.brut(c_r4)));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ok", c_r4.state === "RUNNING")("done", c_r4.state === "CLOSED");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(c_r4.state));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.canEdit ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canEdit && c_r4.state === "DRAFT" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canEdit && c_r4.state === "RUNNING" ? 23 : -1);
  }
}
function ContractsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "table", 9)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Employ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "D\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 10);
    \u0275\u0275text(13, "Salaire base");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 10);
    \u0275\u0275text(15, "Brut est.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "\xC9tat");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, ContractsComponent_Conditional_9_For_21_Template, 24, 14, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r1.contracts);
  }
}
function ContractsComponent_Conditional_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.err);
  }
}
function ContractsComponent_Conditional_10_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
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
function ContractsComponent_Conditional_10_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275property("value", c_r10.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r10.name);
  }
}
function ContractsComponent_Conditional_10_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r11 = ctx.$implicit;
    \u0275\u0275property("ngValue", e_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r11.name);
  }
}
function ContractsComponent_Conditional_10_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "label");
    \u0275\u0275text(2, "Date fin *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ContractsComponent_Conditional_10_Conditional_51_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateEnd, $event) || (ctx_r1.form.dateEnd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateEnd);
  }
}
function ContractsComponent_Conditional_10_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "label");
    \u0275\u0275text(2, "Date fin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 45);
    \u0275\u0275elementEnd();
  }
}
function ContractsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function ContractsComponent_Conditional_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275listener("click", function ContractsComponent_Conditional_10_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 21)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function ContractsComponent_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 22);
    \u0275\u0275conditionalCreate(9, ContractsComponent_Conditional_10_Conditional_9_Template, 2, 1, "div", 23);
    \u0275\u0275elementStart(10, "div", 24)(11, "div", 25)(12, "label");
    \u0275\u0275text(13, "Employ\xE9 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function ContractsComponent_Conditional_10_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.employeeId, $event) || (ctx_r1.form.employeeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 27);
    \u0275\u0275text(16, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(17, ContractsComponent_Conditional_10_For_18_Template, 2, 4, "option", 28, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 29)(20, "label");
    \u0275\u0275text(21, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function ContractsComponent_Conditional_10_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.type, $event) || (ctx_r1.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ContractsComponent_Conditional_10_Template_select_ngModelChange_22_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTypeChange());
    });
    \u0275\u0275elementStart(23, "option", 30);
    \u0275\u0275text(24, "CDI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 31);
    \u0275\u0275text(26, "CDD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 32);
    \u0275\u0275text(28, "Stage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 33);
    \u0275\u0275text(30, "Int\xE9rim");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 29)(32, "label");
    \u0275\u0275text(33, "Cat\xE9gorie prof.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function ContractsComponent_Conditional_10_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.professionalCategory, $event) || (ctx_r1.form.professionalCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ContractsComponent_Conditional_10_Template_select_ngModelChange_34_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCategoryChange());
    });
    \u0275\u0275elementStart(35, "option", 28);
    \u0275\u0275text(36, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(37, ContractsComponent_Conditional_10_For_38_Template, 2, 2, "option", 34, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 29)(40, "label");
    \u0275\u0275text(41, "\xC9chelon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ContractsComponent_Conditional_10_Template_select_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.echelonId, $event) || (ctx_r1.form.echelonId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ContractsComponent_Conditional_10_Template_select_ngModelChange_42_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEchelonChange());
    });
    \u0275\u0275elementStart(43, "option", 28);
    \u0275\u0275text(44, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(45, ContractsComponent_Conditional_10_For_46_Template, 2, 2, "option", 28, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 29)(48, "label");
    \u0275\u0275text(49, "Date d\xE9but *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ContractsComponent_Conditional_10_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateStart, $event) || (ctx_r1.form.dateStart = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(51, ContractsComponent_Conditional_10_Conditional_51_Template, 4, 1, "div", 29)(52, ContractsComponent_Conditional_10_Conditional_52_Template, 4, 0, "div", 29);
    \u0275\u0275elementStart(53, "div", 29)(54, "label");
    \u0275\u0275text(55, "Salaire de base *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ContractsComponent_Conditional_10_Template_input_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.wage, $event) || (ctx_r1.form.wage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 29)(58, "label");
    \u0275\u0275text(59, "Indemnit\xE9 transport");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ContractsComponent_Conditional_10_Template_input_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.primeTransport, $event) || (ctx_r1.form.primeTransport = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 29)(62, "label");
    \u0275\u0275text(63, "Indemnit\xE9 logement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ContractsComponent_Conditional_10_Template_input_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.primeLogement, $event) || (ctx_r1.form.primeLogement = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 29)(66, "label");
    \u0275\u0275text(67, "Ind. repr\xE9sentation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ContractsComponent_Conditional_10_Template_input_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.primeRepresentation, $event) || (ctx_r1.form.primeRepresentation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 29)(70, "label");
    \u0275\u0275text(71, "Prime de fonction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ContractsComponent_Conditional_10_Template_input_ngModelChange_72_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.primeFonction, $event) || (ctx_r1.form.primeFonction = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 29)(74, "label");
    \u0275\u0275text(75, "Prime d'anciennet\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ContractsComponent_Conditional_10_Template_input_ngModelChange_76_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.primeAnciennete, $event) || (ctx_r1.form.primeAnciennete = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 29)(78, "label");
    \u0275\u0275text(79, "Autres primes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ContractsComponent_Conditional_10_Template_input_ngModelChange_80_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.autresPrimes, $event) || (ctx_r1.form.autresPrimes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 29)(82, "label");
    \u0275\u0275text(83, "\xC9tat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function ContractsComponent_Conditional_10_Template_select_ngModelChange_84_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.state, $event) || (ctx_r1.form.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(85, "option", 38);
    \u0275\u0275text(86, "Brouillon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "option", 39);
    \u0275\u0275text(88, "En cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "option", 40);
    \u0275\u0275text(90, "Termin\xE9");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(91, "div", 41);
    \u0275\u0275text(92);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 42)(94, "button", 43);
    \u0275\u0275listener("click", function ContractsComponent_Conditional_10_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275text(95, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "button", 44);
    \u0275\u0275listener("click", function ContractsComponent_Conditional_10_Template_button_click_96_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(97);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.form.id ? "Modifier" : "Nouveau", " contrat");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.err ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.employeeId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.employees);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.type);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.professionalCategory);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.echelonId);
    \u0275\u0275property("disabled", !ctx_r1.form.professionalCategory);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.echelonsForCategory());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateStart);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.type !== "CDI" ? 51 : 52);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.wage);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.primeTransport);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.primeLogement);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.primeRepresentation);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.primeFonction);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.primeAnciennete);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.autresPrimes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.state);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Salaire brut estim\xE9 : ", ctx_r1.fmt(ctx_r1.brut(ctx_r1.form)), " FCFA");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Enregistrement\u2026" : "Enregistrer");
  }
}
var ContractsComponent = class _ContractsComponent {
  constructor(hr, auth, router, notificationService) {
    this.hr = hr;
    this.auth = auth;
    this.router = router;
    this.notificationService = notificationService;
    this.contracts = [];
    this.employees = [];
    this.categories = [];
    this.echelons = [];
    this.loading = false;
    this.showModal = false;
    this.saving = false;
    this.err = "";
    this.form = { employeeId: 0, companyId: 0 };
    this.canEdit = false;
  }
  ngOnInit() {
    this.companyId = this.auth.getCompanyId();
    this.canEdit = this.auth.hasPermission("RH", "CONTRATS", "EDIT") || this.auth.hasPermission("RH", "CONTRATS", "CREATE") || this.auth.isPrivileged();
    this.hr.getEmployees(this.companyId).subscribe((e) => this.employees = e);
    this.hr.getProfessionalCategories(this.companyId).subscribe((c) => this.categories = c);
    this.hr.getEchelons(this.companyId).subscribe((e) => this.echelons = e);
    this.load();
  }
  load() {
    this.loading = true;
    this.hr.getContracts(this.companyId).subscribe({ next: (c) => {
      this.contracts = c;
      this.loading = false;
    }, error: () => this.loading = false });
  }
  empName(id) {
    const e = this.employees.find((x) => x.id === id);
    return e ? `${e.lastName} ${e.firstName ?? ""}` : id;
  }
  brut(c) {
    return (+c.wage || 0) + (+c.primeTransport || 0) + (+c.primeLogement || 0) + (+c.primeRepresentation || 0) + (+c.primeFonction || 0) + (+c.primeAnciennete || 0) + (+c.autresPrimes || 0);
  }
  fmt(n) {
    return new Intl.NumberFormat("fr-FR").format(Math.round(n || 0));
  }
  stateLabel(s) {
    return s === "RUNNING" ? "En cours" : s === "CLOSED" ? "Termin\xE9" : s === "CANCELLED" ? "Annul\xE9" : "Brouillon";
  }
  openCreate() {
    this.form = { employeeId: 0, companyId: this.companyId, type: "CDI", state: "RUNNING", wage: 0, primeTransport: 0, primeLogement: 0, primeRepresentation: 0, primeFonction: 0, primeAnciennete: 0, autresPrimes: 0 };
    this.err = "";
    this.showModal = true;
  }
  openEdit(c) {
    this.form = __spreadValues({}, c);
    this.err = "";
    this.showModal = true;
  }
  /** Un CDI est par nature à durée indéterminée : on efface la date de fin en repassant sur CDI. */
  onTypeChange() {
    if (this.form.type === "CDI")
      this.form.dateEnd = void 0;
  }
  echelonsForCategory() {
    const cat = this.categories.find((c) => c.code === this.form.professionalCategory);
    if (!cat)
      return [];
    return this.echelons.filter((e) => e.professionalCategoryId === cat.id);
  }
  /** La catégorie change la liste d'échelons disponibles : l'échelon précédemment choisi n'est plus valide. */
  onCategoryChange() {
    this.form.echelonId = void 0;
  }
  /** Pré-remplit le salaire de base depuis la grille — reste ensuite librement modifiable (cas négociés au-dessus de la grille). */
  onEchelonChange() {
    const ech = this.echelons.find((e) => e.id === this.form.echelonId);
    if (ech && ech.baseWage != null)
      this.form.wage = ech.baseWage;
  }
  setState(c, state) {
    this.hr.setContractState(c.id, state).subscribe({
      next: () => this.load(),
      error: (err) => this.notificationService.notify(err?.error?.message ?? "Erreur.", "error")
    });
  }
  view(c) {
    this.router.navigate(["/hr/contracts", c.id]);
  }
  save() {
    if (!this.form.employeeId) {
      this.err = "S\xE9lectionnez un employ\xE9";
      return;
    }
    if (!this.form.dateStart) {
      this.err = "La date de d\xE9but est obligatoire";
      return;
    }
    if (this.form.type !== "CDI" && !this.form.dateEnd) {
      this.err = "La date de fin est obligatoire pour un " + this.form.type;
      return;
    }
    this.form.companyId = this.companyId;
    this.saving = true;
    const obs = this.form.id ? this.hr.updateContract(this.form.id, this.form) : this.hr.saveContract(this.form);
    obs.subscribe({ next: () => {
      this.saving = false;
      this.showModal = false;
      this.load();
    }, error: (e) => {
      this.saving = false;
      this.err = e.error?.message || "Erreur";
    } });
  }
  static {
    this.\u0275fac = function ContractsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContractsComponent)(\u0275\u0275directiveInject(HrService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContractsComponent, selectors: [["app-hr-contracts"]], decls: 11, vars: 3, consts: [[1, "hp"], [1, "hp-head"], [1, "material-icons"], [1, "b", "b-primary"], [1, "muted"], [1, "empty"], [1, "tbl-wrap"], [1, "ov"], [1, "b", "b-primary", 3, "click"], [1, "tbl"], [1, "ta-r"], [1, "badge"], ["title", "Consulter / imprimer", 1, "b-icon", 3, "click"], [1, "b-icon"], ["title", "Activer", 1, "b-icon"], ["title", "Cl\xF4turer", 1, "b-icon"], [1, "b-icon", 3, "click"], ["title", "Activer", 1, "b-icon", 3, "click"], ["title", "Cl\xF4turer", 1, "b-icon", 3, "click"], [1, "ov", 3, "click"], [1, "mdl", 3, "click"], [1, "mdl-h"], [1, "mdl-b"], [1, "alert"], [1, "grid"], [1, "fg", "fg-2"], [1, "in", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue"], [1, "fg"], ["value", "CDI"], ["value", "CDD"], ["value", "STAGE"], ["value", "INTERIM"], [3, "value"], [1, "in", 3, "ngModelChange", "ngModel", "disabled"], ["type", "date", 1, "in", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "in", 3, "ngModelChange", "ngModel"], ["value", "DRAFT"], ["value", "RUNNING"], ["value", "CLOSED"], [2, "margin-top", "12px", "font-weight", "600", "color", "#7C3AED"], [1, "mdl-f"], [1, "b", "b-sec", 3, "click"], [1, "b", "b-primary", 3, "click", "disabled"], ["value", "Ind\xE9termin\xE9e (CDI)", "disabled", "", 1, "in"]], template: function ContractsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1")(3, "span", 2);
        \u0275\u0275text(4, "description");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Contrats");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, ContractsComponent_Conditional_6_Template, 4, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, ContractsComponent_Conditional_7_Template, 2, 0, "div", 4)(8, ContractsComponent_Conditional_8_Template, 2, 0, "div", 5)(9, ContractsComponent_Conditional_9_Template, 22, 0, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, ContractsComponent_Conditional_10_Template, 98, 23, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.canEdit ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 7 : ctx.contracts.length === 0 ? 8 : 9);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showModal ? 10 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.hp[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #7C3AED;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.b-primary[_ngcontent-%COMP%] {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n}\n.b-danger[_ngcontent-%COMP%] {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.ta-r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.clk[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.mdl-f[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.fg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in[_ngcontent-%COMP%] {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in[_ngcontent-%COMP%]:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in[_ngcontent-%COMP%]:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .fg-2[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContractsComponent, [{
    type: Component,
    args: [{ selector: "app-hr-contracts", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="hp">
      <div class="hp-head">
        <h1><span class="material-icons">description</span> Contrats</h1>
        @if (canEdit) { <button class="b b-primary" (click)="openCreate()"><span class="material-icons">add</span> Nouveau contrat</button> }
      </div>
      @if (loading) { <div class="muted">Chargement\u2026</div> }
      @else if (contracts.length === 0) { <div class="empty">Aucun contrat.</div> }
      @else {
        <div class="tbl-wrap">
          <table class="tbl">
            <thead><tr><th>Employ\xE9</th><th>Type</th><th>D\xE9but</th><th>Fin</th><th class="ta-r">Salaire base</th><th class="ta-r">Brut est.</th><th>\xC9tat</th><th></th></tr></thead>
            <tbody>
              @for (c of contracts; track c.id) {
                <tr>
                  <td><strong>{{ empName(c.employeeId) }}</strong></td>
                  <td>{{ c.type }}</td>
                  <td>{{ c.dateStart }}</td>
                  <td>{{ c.dateEnd }}</td>
                  <td class="ta-r">{{ fmt(c.wage) }}</td>
                  <td class="ta-r">{{ fmt(brut(c)) }}</td>
                  <td><span class="badge" [class.ok]="c.state==='RUNNING'" [class.done]="c.state==='CLOSED'">{{ stateLabel(c.state) }}</span></td>
                  <td class="ta-r">
                    <button class="b-icon" title="Consulter / imprimer" (click)="view(c)"><span class="material-icons">visibility</span></button>
                    @if (canEdit) { <button class="b-icon" (click)="openEdit(c)"><span class="material-icons">edit</span></button> }
                    @if (canEdit && c.state==='DRAFT') { <button class="b-icon" title="Activer" (click)="setState(c,'RUNNING')"><span class="material-icons">play_arrow</span></button> }
                    @if (canEdit && c.state==='RUNNING') { <button class="b-icon" title="Cl\xF4turer" (click)="setState(c,'CLOSED')"><span class="material-icons">stop</span></button> }
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </div>

    @if (showModal) {
      <div class="ov" (click)="showModal=false">
        <div class="mdl" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>{{ form.id ? 'Modifier' : 'Nouveau' }} contrat</h3><button class="b-icon" (click)="showModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg fg-2"><label>Employ\xE9 *</label><select class="in" [(ngModel)]="form.employeeId"><option [ngValue]="0" disabled>\u2014 S\xE9lectionner \u2014</option>@for (e of employees; track e.id) { <option [ngValue]="e.id">{{ e.matricule }} \u2014 {{ e.lastName }} {{ e.firstName }}</option> }</select></div>
              <div class="fg"><label>Type</label><select class="in" [(ngModel)]="form.type" (ngModelChange)="onTypeChange()"><option value="CDI">CDI</option><option value="CDD">CDD</option><option value="STAGE">Stage</option><option value="INTERIM">Int\xE9rim</option></select></div>
              <div class="fg"><label>Cat\xE9gorie prof.</label>
                <select class="in" [(ngModel)]="form.professionalCategory" (ngModelChange)="onCategoryChange()">
                  <option [ngValue]="undefined">\u2014</option>
                  @for (c of categories; track c.id) { <option [value]="c.code">{{ c.name }}</option> }
                </select>
              </div>
              <div class="fg"><label>\xC9chelon</label>
                <select class="in" [(ngModel)]="form.echelonId" (ngModelChange)="onEchelonChange()" [disabled]="!form.professionalCategory">
                  <option [ngValue]="undefined">\u2014</option>
                  @for (e of echelonsForCategory(); track e.id) { <option [ngValue]="e.id">{{ e.name }}</option> }
                </select>
              </div>
              <div class="fg"><label>Date d\xE9but *</label><input type="date" class="in" [(ngModel)]="form.dateStart"></div>
              @if (form.type !== 'CDI') {
                <div class="fg"><label>Date fin *</label><input type="date" class="in" [(ngModel)]="form.dateEnd"></div>
              } @else {
                <div class="fg"><label>Date fin</label><input class="in" value="Ind\xE9termin\xE9e (CDI)" disabled></div>
              }
              <div class="fg"><label>Salaire de base *</label><input type="number" class="in" [(ngModel)]="form.wage"></div>
              <div class="fg"><label>Indemnit\xE9 transport</label><input type="number" class="in" [(ngModel)]="form.primeTransport"></div>
              <div class="fg"><label>Indemnit\xE9 logement</label><input type="number" class="in" [(ngModel)]="form.primeLogement"></div>
              <div class="fg"><label>Ind. repr\xE9sentation</label><input type="number" class="in" [(ngModel)]="form.primeRepresentation"></div>
              <div class="fg"><label>Prime de fonction</label><input type="number" class="in" [(ngModel)]="form.primeFonction"></div>
              <div class="fg"><label>Prime d'anciennet\xE9</label><input type="number" class="in" [(ngModel)]="form.primeAnciennete"></div>
              <div class="fg"><label>Autres primes</label><input type="number" class="in" [(ngModel)]="form.autresPrimes"></div>
              <div class="fg"><label>\xC9tat</label><select class="in" [(ngModel)]="form.state"><option value="DRAFT">Brouillon</option><option value="RUNNING">En cours</option><option value="CLOSED">Termin\xE9</option></select></div>
            </div>
            <div style="margin-top:12px;font-weight:600;color:#7C3AED">Salaire brut estim\xE9 : {{ fmt(brut(form)) }} FCFA</div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showModal=false">Annuler</button>
            <button class="b b-primary" (click)="save()" [disabled]="saving">{{ saving ? 'Enregistrement\u2026' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }
  `, styles: ["/* src/app/modules/hr/components/hr-shared.scss */\n:host {\n  display: block;\n}\n.hp {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head h1 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head h1 .material-icons {\n  color: #7C3AED;\n}\n.muted {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b .material-icons {\n  font-size: 18px;\n}\n.b-primary {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec:hover {\n  background: var(--navbar-hover);\n}\n.b-danger {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl th {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl td {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl tbody tr:hover {\n  background: var(--bg-elevated);\n}\n.ta-r {\n  text-align: right;\n}\n.clk {\n  cursor: pointer;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b {\n  padding: 20px;\n}\n.mdl-f {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2 {\n  grid-column: span 2;\n}\n.fg label {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n  .fg-2 {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */\n"] }]
  }], () => [{ type: HrService }, { type: AuthService }, { type: Router }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContractsComponent, { className: "ContractsComponent", filePath: "app/modules/hr/components/contracts/contracts.component.ts", lineNumber: 97 });
})();
export {
  ContractsComponent
};
//# sourceMappingURL=chunk-TDFQITG4.js.map
