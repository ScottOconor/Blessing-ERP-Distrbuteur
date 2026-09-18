import {
  HrService
} from "./chunk-TCOWJUCH.js";
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import {
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/hr/components/employees/employees.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function EmployeesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouvel employ\xE9");
    \u0275\u0275elementEnd();
  }
}
function EmployeesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function EmployeesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "Aucun employ\xE9. Cliquez sur \xAB Nouvel employ\xE9 \xBB.");
    \u0275\u0275elementEnd();
  }
}
function EmployeesComponent_Conditional_9_For_21_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_9_For_21_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const e_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(e_r4));
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function EmployeesComponent_Conditional_9_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 10);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 11);
    \u0275\u0275conditionalCreate(19, EmployeesComponent_Conditional_9_For_21_Conditional_19_Template, 3, 0, "button", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r4.matricule);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r4.lastName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", e_r4.firstName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.jobName(e_r4.jobId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.deptName(e_r4.departmentId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r4.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r4.cnpsNumber);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ok", e_r4.status === "ACTIF");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canEdit ? 19 : -1);
  }
}
function EmployeesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "table", 9)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Poste");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "D\xE9partement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "N\xB0 CNPS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, EmployeesComponent_Conditional_9_For_21_Template, 20, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r1.employees);
  }
}
function EmployeesComponent_Conditional_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.err);
  }
}
function EmployeesComponent_Conditional_10_For_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r6.name);
  }
}
function EmployeesComponent_Conditional_10_For_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", j_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(j_r7.name);
  }
}
function EmployeesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_10_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 16)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 17);
    \u0275\u0275conditionalCreate(9, EmployeesComponent_Conditional_10_Conditional_9_Template, 2, 1, "div", 18);
    \u0275\u0275elementStart(10, "div", 19)(11, "div", 20)(12, "label");
    \u0275\u0275text(13, "Nom *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.lastName, $event) || (ctx_r1.form.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 20)(16, "label");
    \u0275\u0275text(17, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.firstName, $event) || (ctx_r1.form.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 20)(20, "label");
    \u0275\u0275text(21, "Matricule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.matricule, $event) || (ctx_r1.form.matricule = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 20)(24, "label");
    \u0275\u0275text(25, "Sexe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.gender, $event) || (ctx_r1.form.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 23);
    \u0275\u0275text(28, "Masculin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 24);
    \u0275\u0275text(30, "F\xE9minin");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 20)(32, "label");
    \u0275\u0275text(33, "Date de naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.birthDate, $event) || (ctx_r1.form.birthDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 20)(36, "label");
    \u0275\u0275text(37, "Lieu de naissance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.birthPlace, $event) || (ctx_r1.form.birthPlace = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 20)(40, "label");
    \u0275\u0275text(41, "Nationalit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nationality, $event) || (ctx_r1.form.nationality = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 20)(44, "label");
    \u0275\u0275text(45, "CNI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cni, $event) || (ctx_r1.form.cni = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 20)(48, "label");
    \u0275\u0275text(49, "Situation familiale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_select_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.maritalStatus, $event) || (ctx_r1.form.maritalStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(51, "option", 26);
    \u0275\u0275text(52, "C\xE9libataire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "option", 27);
    \u0275\u0275text(54, "Mari\xE9(e)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "option", 28);
    \u0275\u0275text(56, "Divorc\xE9(e)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "option", 29);
    \u0275\u0275text(58, "Veuf(ve)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 20)(60, "label");
    \u0275\u0275text(61, "Nombre d'enfants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_input_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.childrenCount, $event) || (ctx_r1.form.childrenCount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 20)(64, "label");
    \u0275\u0275text(65, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_input_ngModelChange_66_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.phone, $event) || (ctx_r1.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 20)(68, "label");
    \u0275\u0275text(69, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_input_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 31)(72, "label");
    \u0275\u0275text(73, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_input_ngModelChange_74_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.address, $event) || (ctx_r1.form.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 20)(76, "label");
    \u0275\u0275text(77, "D\xE9partement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_select_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.departmentId, $event) || (ctx_r1.form.departmentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(79, "option", 32);
    \u0275\u0275text(80, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(81, EmployeesComponent_Conditional_10_For_82_Template, 2, 2, "option", 32, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 20)(84, "label");
    \u0275\u0275text(85, "Poste");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_select_ngModelChange_86_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.jobId, $event) || (ctx_r1.form.jobId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(87, "option", 32);
    \u0275\u0275text(88, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(89, EmployeesComponent_Conditional_10_For_90_Template, 2, 2, "option", 32, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 20)(92, "label");
    \u0275\u0275text(93, "Date d'embauche");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_input_ngModelChange_94_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.hireDate, $event) || (ctx_r1.form.hireDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 20)(96, "label");
    \u0275\u0275text(97, "N\xB0 CNPS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_input_ngModelChange_98_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cnpsNumber, $event) || (ctx_r1.form.cnpsNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 20)(100, "label");
    \u0275\u0275text(101, "NIU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_input_ngModelChange_102_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.niu, $event) || (ctx_r1.form.niu = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 20)(104, "label");
    \u0275\u0275text(105, "Banque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_input_ngModelChange_106_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.bankName, $event) || (ctx_r1.form.bankName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 20)(108, "label");
    \u0275\u0275text(109, "N\xB0 de compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_input_ngModelChange_110_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.bankAccount, $event) || (ctx_r1.form.bankAccount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div", 20)(112, "label");
    \u0275\u0275text(113, "Mode de paiement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_select_ngModelChange_114_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.paymentMode, $event) || (ctx_r1.form.paymentMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(115, "option", 33);
    \u0275\u0275text(116, "Virement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "option", 34);
    \u0275\u0275text(118, "Esp\xE8ces");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "option", 35);
    \u0275\u0275text(120, "Mobile Money");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(121, "div", 20)(122, "label");
    \u0275\u0275text(123, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeesComponent_Conditional_10_Template_select_ngModelChange_124_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.status, $event) || (ctx_r1.form.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(125, "option", 36);
    \u0275\u0275text(126, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "option", 37);
    \u0275\u0275text(128, "Suspendu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "option", 38);
    \u0275\u0275text(130, "Sorti");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(131, "div", 39)(132, "button", 40);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_10_Template_button_click_132_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275text(133, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "button", 41);
    \u0275\u0275listener("click", function EmployeesComponent_Conditional_10_Template_button_click_134_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(135);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.form.id ? "Modifier" : "Nouvel", " employ\xE9");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.err ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.lastName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.firstName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.matricule);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.gender);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.birthDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.birthPlace);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nationality);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cni);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.maritalStatus);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.childrenCount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.address);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.departmentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.departments);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.jobId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.jobs);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.hireDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cnpsNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.niu);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.bankName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.bankAccount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.paymentMode);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.status);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Enregistrement\u2026" : "Enregistrer");
  }
}
var EmployeesComponent = class _EmployeesComponent {
  constructor(hr, auth) {
    this.hr = hr;
    this.auth = auth;
    this.employees = [];
    this.departments = [];
    this.jobs = [];
    this.loading = false;
    this.showModal = false;
    this.saving = false;
    this.err = "";
    this.form = { lastName: "", companyId: 0 };
    this.canEdit = false;
  }
  ngOnInit() {
    this.companyId = this.auth.getCompanyId();
    this.canEdit = this.auth.hasPermission("RH", "EMPLOYES", "EDIT") || this.auth.hasPermission("RH", "EMPLOYES", "CREATE") || this.auth.isPrivileged();
    this.load();
    this.hr.getDepartments(this.companyId).subscribe((d) => this.departments = d);
    this.hr.getJobs(this.companyId).subscribe((j) => this.jobs = j);
  }
  load() {
    this.loading = true;
    this.hr.getEmployees(this.companyId).subscribe({ next: (e) => {
      this.employees = e;
      this.loading = false;
    }, error: () => this.loading = false });
  }
  deptName(id) {
    return this.departments.find((d) => d.id === id)?.name ?? "";
  }
  jobName(id) {
    return this.jobs.find((j) => j.id === id)?.name ?? "";
  }
  openCreate() {
    this.form = { lastName: "", companyId: this.companyId, gender: "M", maritalStatus: "CELIBATAIRE", paymentMode: "VIREMENT", status: "ACTIF", childrenCount: 0 };
    this.err = "";
    this.showModal = true;
  }
  openEdit(e) {
    this.form = __spreadValues({}, e);
    this.err = "";
    this.showModal = true;
  }
  save() {
    if (!this.form.lastName) {
      this.err = "Le nom est obligatoire";
      return;
    }
    this.form.companyId = this.companyId;
    this.saving = true;
    const obs = this.form.id ? this.hr.updateEmployee(this.form.id, this.form) : this.hr.createEmployee(this.form);
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
    this.\u0275fac = function EmployeesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmployeesComponent)(\u0275\u0275directiveInject(HrService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeesComponent, selectors: [["app-hr-employees"]], decls: 11, vars: 3, consts: [[1, "hp"], [1, "hp-head"], [1, "material-icons"], [1, "b", "b-primary"], [1, "muted"], [1, "empty"], [1, "tbl-wrap"], [1, "ov"], [1, "b", "b-primary", 3, "click"], [1, "tbl"], [1, "badge"], [1, "ta-r"], [1, "b-icon"], [1, "b-icon", 3, "click"], [1, "ov", 3, "click"], [1, "mdl", 3, "click"], [1, "mdl-h"], [1, "mdl-b"], [1, "alert"], [1, "grid"], [1, "fg"], [1, "in", 3, "ngModelChange", "ngModel"], ["placeholder", "auto", 1, "in", 3, "ngModelChange", "ngModel"], ["value", "M"], ["value", "F"], ["type", "date", 1, "in", 3, "ngModelChange", "ngModel"], ["value", "CELIBATAIRE"], ["value", "MARIE"], ["value", "DIVORCE"], ["value", "VEUF"], ["type", "number", 1, "in", 3, "ngModelChange", "ngModel"], [1, "fg", "fg-2"], [3, "ngValue"], ["value", "VIREMENT"], ["value", "ESPECES"], ["value", "MOBILE_MONEY"], ["value", "ACTIF"], ["value", "SUSPENDU"], ["value", "SORTI"], [1, "mdl-f"], [1, "b", "b-sec", 3, "click"], [1, "b", "b-primary", 3, "click", "disabled"]], template: function EmployeesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1")(3, "span", 2);
        \u0275\u0275text(4, "groups");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Employ\xE9s");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, EmployeesComponent_Conditional_6_Template, 4, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, EmployeesComponent_Conditional_7_Template, 2, 0, "div", 4)(8, EmployeesComponent_Conditional_8_Template, 2, 0, "div", 5)(9, EmployeesComponent_Conditional_9_Template, 22, 0, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, EmployeesComponent_Conditional_10_Template, 136, 28, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.canEdit ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 7 : ctx.employees.length === 0 ? 8 : 9);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showModal ? 10 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.hp[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #7C3AED;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.b-primary[_ngcontent-%COMP%] {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n}\n.b-danger[_ngcontent-%COMP%] {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.ta-r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.clk[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.mdl-f[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.fg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in[_ngcontent-%COMP%] {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in[_ngcontent-%COMP%]:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in[_ngcontent-%COMP%]:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .fg-2[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeesComponent, [{
    type: Component,
    args: [{ selector: "app-hr-employees", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="hp">
      <div class="hp-head">
        <h1><span class="material-icons">groups</span> Employ\xE9s</h1>
        @if (canEdit) { <button class="b b-primary" (click)="openCreate()"><span class="material-icons">add</span> Nouvel employ\xE9</button> }
      </div>

      @if (loading) { <div class="muted">Chargement\u2026</div> }
      @else if (employees.length === 0) { <div class="empty">Aucun employ\xE9. Cliquez sur \xAB Nouvel employ\xE9 \xBB.</div> }
      @else {
        <div class="tbl-wrap">
          <table class="tbl">
            <thead><tr><th>Matricule</th><th>Nom</th><th>Poste</th><th>D\xE9partement</th><th>T\xE9l\xE9phone</th><th>N\xB0 CNPS</th><th>Statut</th><th></th></tr></thead>
            <tbody>
              @for (e of employees; track e.id) {
                <tr>
                  <td>{{ e.matricule }}</td>
                  <td><strong>{{ e.lastName }}</strong> {{ e.firstName }}</td>
                  <td>{{ jobName(e.jobId) }}</td>
                  <td>{{ deptName(e.departmentId) }}</td>
                  <td>{{ e.phone }}</td>
                  <td>{{ e.cnpsNumber }}</td>
                  <td><span class="badge" [class.ok]="e.status==='ACTIF'">{{ e.status }}</span></td>
                  <td class="ta-r">
                    @if (canEdit) { <button class="b-icon" (click)="openEdit(e)"><span class="material-icons">edit</span></button> }
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
          <div class="mdl-h"><h3>{{ form.id ? 'Modifier' : 'Nouvel' }} employ\xE9</h3><button class="b-icon" (click)="showModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg"><label>Nom *</label><input class="in" [(ngModel)]="form.lastName"></div>
              <div class="fg"><label>Pr\xE9nom</label><input class="in" [(ngModel)]="form.firstName"></div>
              <div class="fg"><label>Matricule</label><input class="in" [(ngModel)]="form.matricule" placeholder="auto"></div>
              <div class="fg"><label>Sexe</label><select class="in" [(ngModel)]="form.gender"><option value="M">Masculin</option><option value="F">F\xE9minin</option></select></div>
              <div class="fg"><label>Date de naissance</label><input type="date" class="in" [(ngModel)]="form.birthDate"></div>
              <div class="fg"><label>Lieu de naissance</label><input class="in" [(ngModel)]="form.birthPlace"></div>
              <div class="fg"><label>Nationalit\xE9</label><input class="in" [(ngModel)]="form.nationality"></div>
              <div class="fg"><label>CNI</label><input class="in" [(ngModel)]="form.cni"></div>
              <div class="fg"><label>Situation familiale</label>
                <select class="in" [(ngModel)]="form.maritalStatus"><option value="CELIBATAIRE">C\xE9libataire</option><option value="MARIE">Mari\xE9(e)</option><option value="DIVORCE">Divorc\xE9(e)</option><option value="VEUF">Veuf(ve)</option></select></div>
              <div class="fg"><label>Nombre d'enfants</label><input type="number" class="in" [(ngModel)]="form.childrenCount"></div>
              <div class="fg"><label>T\xE9l\xE9phone</label><input class="in" [(ngModel)]="form.phone"></div>
              <div class="fg"><label>Email</label><input class="in" [(ngModel)]="form.email"></div>
              <div class="fg fg-2"><label>Adresse</label><input class="in" [(ngModel)]="form.address"></div>
              <div class="fg"><label>D\xE9partement</label><select class="in" [(ngModel)]="form.departmentId"><option [ngValue]="undefined">\u2014</option>@for (d of departments; track d.id) { <option [ngValue]="d.id">{{ d.name }}</option> }</select></div>
              <div class="fg"><label>Poste</label><select class="in" [(ngModel)]="form.jobId"><option [ngValue]="undefined">\u2014</option>@for (j of jobs; track j.id) { <option [ngValue]="j.id">{{ j.name }}</option> }</select></div>
              <div class="fg"><label>Date d'embauche</label><input type="date" class="in" [(ngModel)]="form.hireDate"></div>
              <div class="fg"><label>N\xB0 CNPS</label><input class="in" [(ngModel)]="form.cnpsNumber"></div>
              <div class="fg"><label>NIU</label><input class="in" [(ngModel)]="form.niu"></div>
              <div class="fg"><label>Banque</label><input class="in" [(ngModel)]="form.bankName"></div>
              <div class="fg"><label>N\xB0 de compte</label><input class="in" [(ngModel)]="form.bankAccount"></div>
              <div class="fg"><label>Mode de paiement</label><select class="in" [(ngModel)]="form.paymentMode"><option value="VIREMENT">Virement</option><option value="ESPECES">Esp\xE8ces</option><option value="MOBILE_MONEY">Mobile Money</option></select></div>
              <div class="fg"><label>Statut</label><select class="in" [(ngModel)]="form.status"><option value="ACTIF">Actif</option><option value="SUSPENDU">Suspendu</option><option value="SORTI">Sorti</option></select></div>
            </div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showModal=false">Annuler</button>
            <button class="b b-primary" (click)="save()" [disabled]="saving">{{ saving ? 'Enregistrement\u2026' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }
  `, styles: ["/* src/app/modules/hr/components/hr-shared.scss */\n:host {\n  display: block;\n}\n.hp {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head h1 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head h1 .material-icons {\n  color: #7C3AED;\n}\n.muted {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b .material-icons {\n  font-size: 18px;\n}\n.b-primary {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec:hover {\n  background: var(--navbar-hover);\n}\n.b-danger {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl th {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl td {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl tbody tr:hover {\n  background: var(--bg-elevated);\n}\n.ta-r {\n  text-align: right;\n}\n.clk {\n  cursor: pointer;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b {\n  padding: 20px;\n}\n.mdl-f {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2 {\n  grid-column: span 2;\n}\n.fg label {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n  .fg-2 {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */\n"] }]
  }], () => [{ type: HrService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeesComponent, { className: "EmployeesComponent", filePath: "app/modules/hr/components/employees/employees.component.ts", lineNumber: 87 });
})();
export {
  EmployeesComponent
};
//# sourceMappingURL=chunk-Y3YORC5A.js.map
