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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import {
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/hr/components/organisation/organisation.component.ts
var _c0 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function OrganisationComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDept());
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouveau");
    \u0275\u0275elementEnd();
  }
}
function OrganisationComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, "Aucun d\xE9partement.");
    \u0275\u0275elementEnd();
  }
}
function OrganisationComponent_Conditional_15_For_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_15_For_13_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const d_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDept(d_r4));
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_15_For_13_Conditional_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const d_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.delDept(d_r4));
    });
    \u0275\u0275elementStart(4, "span", 2);
    \u0275\u0275text(5, "delete_outline");
    \u0275\u0275elementEnd()();
  }
}
function OrganisationComponent_Conditional_15_For_13_Template(rf, ctx) {
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
    \u0275\u0275elementStart(7, "td", 13);
    \u0275\u0275conditionalCreate(8, OrganisationComponent_Conditional_15_For_13_Conditional_8_Template, 6, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r4.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.empName(d_r4.managerId));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canEdit ? 8 : -1);
  }
}
function OrganisationComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "table", 12)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Responsable");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, OrganisationComponent_Conditional_15_For_13_Template, 9, 4, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.departments);
  }
}
function OrganisationComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openJob());
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouveau");
    \u0275\u0275elementEnd();
  }
}
function OrganisationComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, "Aucun poste.");
    \u0275\u0275elementEnd();
  }
}
function OrganisationComponent_Conditional_24_For_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_24_For_13_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const j_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openJob(j_r7));
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_24_For_13_Conditional_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const j_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.delJob(j_r7));
    });
    \u0275\u0275elementStart(4, "span", 2);
    \u0275\u0275text(5, "delete_outline");
    \u0275\u0275elementEnd()();
  }
}
function OrganisationComponent_Conditional_24_For_13_Template(rf, ctx) {
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
    \u0275\u0275elementStart(7, "td", 13);
    \u0275\u0275conditionalCreate(8, OrganisationComponent_Conditional_24_For_13_Conditional_8_Template, 6, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const j_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(j_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.deptName(j_r7.departmentId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.catName(j_r7.category));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canEdit ? 8 : -1);
  }
}
function OrganisationComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "table", 12)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "D\xE9partement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275repeaterCreate(12, OrganisationComponent_Conditional_24_For_13_Template, 9, 4, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.jobs);
  }
}
function OrganisationComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCat());
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouvelle");
    \u0275\u0275elementEnd();
  }
}
function OrganisationComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, "Aucune cat\xE9gorie d\xE9finie.");
    \u0275\u0275elementEnd();
  }
}
function OrganisationComponent_Conditional_35_For_12_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_35_For_12_Conditional_10_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const c_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.openCat(c_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_35_For_12_Conditional_10_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const c_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.delCat(c_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(4, "span", 2);
    \u0275\u0275text(5, "delete_outline");
    \u0275\u0275elementEnd()();
  }
}
function OrganisationComponent_Conditional_35_For_12_Conditional_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_35_For_12_Conditional_11_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const c_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEchelon(c_r10.id));
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \xC9chelon");
    \u0275\u0275elementEnd();
  }
}
function OrganisationComponent_Conditional_35_For_12_Conditional_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "Aucun \xE9chelon.");
    \u0275\u0275elementEnd();
  }
}
function OrganisationComponent_Conditional_35_For_12_Conditional_11_Conditional_9_For_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_35_For_12_Conditional_11_Conditional_9_For_12_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const e_r14 = \u0275\u0275nextContext().$implicit;
      const c_r10 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEchelon(c_r10.id, e_r14));
    });
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_35_For_12_Conditional_11_Conditional_9_For_12_Conditional_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r13);
      const e_r14 = \u0275\u0275nextContext().$implicit;
      const c_r10 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.delEchelon(c_r10.id, e_r14));
    });
    \u0275\u0275elementStart(4, "span", 2);
    \u0275\u0275text(5, "delete_outline");
    \u0275\u0275elementEnd()();
  }
}
function OrganisationComponent_Conditional_35_For_12_Conditional_11_Conditional_9_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "code");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 13);
    \u0275\u0275conditionalCreate(9, OrganisationComponent_Conditional_35_For_12_Conditional_11_Conditional_9_For_12_Conditional_9_Template, 6, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r14.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(e_r14.baseWage));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canEdit ? 9 : -1);
  }
}
function OrganisationComponent_Conditional_35_For_12_Conditional_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 25)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 13);
    \u0275\u0275text(8, "Salaire de base");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, OrganisationComponent_Conditional_35_For_12_Conditional_11_Conditional_9_For_12_Template, 10, 4, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r10 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.echelonsByCat[c_r10.id] ?? \u0275\u0275pureFunction0(0, _c0));
  }
}
function OrganisationComponent_Conditional_35_For_12_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 18);
    \u0275\u0275element(1, "td");
    \u0275\u0275elementStart(2, "td", 19)(3, "div", 20)(4, "div", 21)(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, OrganisationComponent_Conditional_35_For_12_Conditional_11_Conditional_7_Template, 4, 0, "button", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, OrganisationComponent_Conditional_35_For_12_Conditional_11_Conditional_8_Template, 2, 0, "div", 24)(9, OrganisationComponent_Conditional_35_For_12_Conditional_11_Conditional_9_Template, 13, 1, "table", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\xC9chelons de \xAB ", c_r10.name, " \xBB");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canEdit ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.echelonsByCat[c_r10.id] ?? \u0275\u0275pureFunction0(3, _c0)).length === 0 ? 8 : 9);
  }
}
function OrganisationComponent_Conditional_35_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 15);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_35_For_12_Template_tr_click_0_listener() {
      const c_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCat(c_r10));
    });
    \u0275\u0275elementStart(1, "td", 16)(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "code");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 13);
    \u0275\u0275conditionalCreate(10, OrganisationComponent_Conditional_35_For_12_Conditional_10_Template, 6, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, OrganisationComponent_Conditional_35_For_12_Conditional_11_Template, 10, 4, "tr", 18);
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.expandedCatId === c_r10.id ? "expand_more" : "chevron_right");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r10.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canEdit ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.expandedCatId === c_r10.id ? 11 : -1);
  }
}
function OrganisationComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "table", 12)(2, "thead")(3, "tr");
    \u0275\u0275element(4, "th");
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, OrganisationComponent_Conditional_35_For_12_Template, 12, 5, null, null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function OrganisationComponent_Conditional_36_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.err);
  }
}
function OrganisationComponent_Conditional_36_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r16 = ctx.$implicit;
    \u0275\u0275property("ngValue", e_r16.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", e_r16.lastName, " ", e_r16.firstName);
  }
}
function OrganisationComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_36_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDeptModal = false);
    });
    \u0275\u0275elementStart(1, "div", 28);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_36_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 29)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_36_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDeptModal = false);
    });
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 30);
    \u0275\u0275conditionalCreate(9, OrganisationComponent_Conditional_36_Conditional_9_Template, 2, 1, "div", 31);
    \u0275\u0275elementStart(10, "div", 32)(11, "div", 33)(12, "label");
    \u0275\u0275text(13, "Nom *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function OrganisationComponent_Conditional_36_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.deptForm.name, $event) || (ctx_r1.deptForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 35)(16, "label");
    \u0275\u0275text(17, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function OrganisationComponent_Conditional_36_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.deptForm.code, $event) || (ctx_r1.deptForm.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 35)(20, "label");
    \u0275\u0275text(21, "Responsable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function OrganisationComponent_Conditional_36_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.deptForm.managerId, $event) || (ctx_r1.deptForm.managerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "option", 36);
    \u0275\u0275text(24, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(25, OrganisationComponent_Conditional_36_For_26_Template, 2, 3, "option", 36, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 37)(28, "button", 38);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_36_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDeptModal = false);
    });
    \u0275\u0275text(29, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 39);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_36_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveDept());
    });
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.deptForm.id ? "Modifier" : "Nouveau", " d\xE9partement");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.err ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.deptForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.deptForm.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.deptForm.managerId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.employees);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Enregistrement\u2026" : "Enregistrer");
  }
}
function OrganisationComponent_Conditional_37_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.err);
  }
}
function OrganisationComponent_Conditional_37_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r18 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r18.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r18.name);
  }
}
function OrganisationComponent_Conditional_37_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r19 = ctx.$implicit;
    \u0275\u0275property("value", c_r19.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r19.name);
  }
}
function OrganisationComponent_Conditional_37_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, "Aucune cat\xE9gorie professionnelle d\xE9finie \u2014 cr\xE9ez-en une dans la colonne \xAB Cat\xE9gories professionnelles \xBB.");
    \u0275\u0275elementEnd();
  }
}
function OrganisationComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_37_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showJobModal = false);
    });
    \u0275\u0275elementStart(1, "div", 28);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_37_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 29)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_37_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showJobModal = false);
    });
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 30);
    \u0275\u0275conditionalCreate(9, OrganisationComponent_Conditional_37_Conditional_9_Template, 2, 1, "div", 31);
    \u0275\u0275elementStart(10, "div", 32)(11, "div", 33)(12, "label");
    \u0275\u0275text(13, "Nom *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function OrganisationComponent_Conditional_37_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.jobForm.name, $event) || (ctx_r1.jobForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 35)(16, "label");
    \u0275\u0275text(17, "D\xE9partement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function OrganisationComponent_Conditional_37_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.jobForm.departmentId, $event) || (ctx_r1.jobForm.departmentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 36);
    \u0275\u0275text(20, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, OrganisationComponent_Conditional_37_For_22_Template, 2, 2, "option", 36, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 35)(24, "label");
    \u0275\u0275text(25, "Cat\xE9gorie prof.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function OrganisationComponent_Conditional_37_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.jobForm.category, $event) || (ctx_r1.jobForm.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 36);
    \u0275\u0275text(28, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(29, OrganisationComponent_Conditional_37_For_30_Template, 2, 2, "option", 40, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 33)(32, "label");
    \u0275\u0275text(33, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function OrganisationComponent_Conditional_37_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.jobForm.description, $event) || (ctx_r1.jobForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(35, OrganisationComponent_Conditional_37_Conditional_35_Template, 2, 0, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 37)(37, "button", 38);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_37_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showJobModal = false);
    });
    \u0275\u0275text(38, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 39);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_37_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveJob());
    });
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.jobForm.id ? "Modifier" : "Nouveau", " poste");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.err ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.jobForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.jobForm.departmentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.departments);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.jobForm.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.jobForm.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.categories.length === 0 ? 35 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Enregistrement\u2026" : "Enregistrer");
  }
}
function OrganisationComponent_Conditional_38_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.err);
  }
}
function OrganisationComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_38_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCatModal = false);
    });
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_38_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 29)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_38_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCatModal = false);
    });
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 30);
    \u0275\u0275conditionalCreate(9, OrganisationComponent_Conditional_38_Conditional_9_Template, 2, 1, "div", 31);
    \u0275\u0275elementStart(10, "div", 32)(11, "div", 35)(12, "label");
    \u0275\u0275text(13, "Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function OrganisationComponent_Conditional_38_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.catForm.code, $event) || (ctx_r1.catForm.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 35)(16, "label");
    \u0275\u0275text(17, "S\xE9quence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function OrganisationComponent_Conditional_38_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.catForm.sequence, $event) || (ctx_r1.catForm.sequence = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 33)(20, "label");
    \u0275\u0275text(21, "Libell\xE9 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function OrganisationComponent_Conditional_38_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.catForm.name, $event) || (ctx_r1.catForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 35)(24, "label");
    \u0275\u0275text(25, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function OrganisationComponent_Conditional_38_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.catForm.active, $event) || (ctx_r1.catForm.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 36);
    \u0275\u0275text(28, "Oui");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 36);
    \u0275\u0275text(30, "Non");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(31, "div", 37)(32, "button", 38);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_38_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCatModal = false);
    });
    \u0275\u0275text(33, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 39);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_38_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCat());
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.catForm.id ? "Modifier" : "Nouvelle", " cat\xE9gorie professionnelle");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.err ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.catForm.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.catForm.sequence);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.catForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.catForm.active);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Enregistrement\u2026" : "Enregistrer");
  }
}
function OrganisationComponent_Conditional_39_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.err);
  }
}
function OrganisationComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_39_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEchelonModal = false);
    });
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_39_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 29)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_39_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEchelonModal = false);
    });
    \u0275\u0275elementStart(6, "span", 2);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 30);
    \u0275\u0275conditionalCreate(9, OrganisationComponent_Conditional_39_Conditional_9_Template, 2, 1, "div", 31);
    \u0275\u0275elementStart(10, "div", 32)(11, "div", 35)(12, "label");
    \u0275\u0275text(13, "Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function OrganisationComponent_Conditional_39_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.echelonForm.code, $event) || (ctx_r1.echelonForm.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 35)(16, "label");
    \u0275\u0275text(17, "S\xE9quence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function OrganisationComponent_Conditional_39_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.echelonForm.sequence, $event) || (ctx_r1.echelonForm.sequence = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 33)(20, "label");
    \u0275\u0275text(21, "Libell\xE9 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function OrganisationComponent_Conditional_39_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.echelonForm.name, $event) || (ctx_r1.echelonForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 33)(24, "label");
    \u0275\u0275text(25, "Salaire de base");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function OrganisationComponent_Conditional_39_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.echelonForm.baseWage, $event) || (ctx_r1.echelonForm.baseWage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 35)(28, "label");
    \u0275\u0275text(29, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function OrganisationComponent_Conditional_39_Template_select_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.echelonForm.active, $event) || (ctx_r1.echelonForm.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(31, "option", 36);
    \u0275\u0275text(32, "Oui");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 36);
    \u0275\u0275text(34, "Non");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(35, "div", 37)(36, "button", 38);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_39_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEchelonModal = false);
    });
    \u0275\u0275text(37, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 39);
    \u0275\u0275listener("click", function OrganisationComponent_Conditional_39_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveEchelonForm());
    });
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.echelonForm.id ? "Modifier" : "Nouvel", " \xE9chelon");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.err ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.echelonForm.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.echelonForm.sequence);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.echelonForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.echelonForm.baseWage);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.echelonForm.active);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.saving ? "Enregistrement\u2026" : "Enregistrer");
  }
}
var OrganisationComponent = class _OrganisationComponent {
  constructor(hr, auth, notificationService) {
    this.hr = hr;
    this.auth = auth;
    this.notificationService = notificationService;
    this.departments = [];
    this.jobs = [];
    this.employees = [];
    this.categories = [];
    this.canEdit = false;
    this.saving = false;
    this.err = "";
    this.showDeptModal = false;
    this.deptForm = { name: "", companyId: 0 };
    this.showJobModal = false;
    this.jobForm = { name: "", companyId: 0 };
    this.showCatModal = false;
    this.catForm = { name: "", code: "", companyId: 0 };
    this.expandedCatId = null;
    this.echelonsByCat = {};
    this.showEchelonModal = false;
    this.echelonForm = { name: "", code: "", professionalCategoryId: 0, companyId: 0 };
  }
  ngOnInit() {
    this.companyId = this.auth.getCompanyId();
    this.canEdit = this.auth.hasPermission("RH", "EMPLOYES", "EDIT") || this.auth.isPrivileged();
    this.load();
  }
  load() {
    this.hr.getDepartments(this.companyId).subscribe((d) => this.departments = d);
    this.hr.getJobs(this.companyId).subscribe((j) => this.jobs = j);
    this.hr.getEmployees(this.companyId).subscribe((e) => this.employees = e);
    this.hr.getProfessionalCategories(this.companyId).subscribe((c) => this.categories = c);
  }
  deptName(id) {
    return this.departments.find((d) => d.id === id)?.name ?? "";
  }
  empName(id) {
    const e = this.employees.find((x) => x.id === id);
    return e ? `${e.lastName} ${e.firstName ?? ""}` : "";
  }
  catName(code) {
    return this.categories.find((c) => c.code === code)?.name ?? code ?? "";
  }
  openDept(d) {
    this.deptForm = d ? __spreadValues({}, d) : { name: "", companyId: this.companyId };
    this.err = "";
    this.showDeptModal = true;
  }
  saveDept() {
    if (!this.deptForm.name) {
      this.err = "Le nom est obligatoire";
      return;
    }
    this.deptForm.companyId = this.companyId;
    this.saving = true;
    this.hr.saveDepartment(this.deptForm).subscribe({
      next: () => {
        this.saving = false;
        this.showDeptModal = false;
        this.load();
      },
      error: (e) => {
        this.saving = false;
        this.err = e.error?.message || "Erreur";
      }
    });
  }
  delDept(d) {
    if (!confirm(`Supprimer le d\xE9partement \xAB ${d.name} \xBB ?`))
      return;
    this.hr.deleteDepartment(d.id).subscribe({
      next: () => this.load(),
      error: (err) => this.notificationService.notify(err?.error?.message ?? "Erreur lors de la suppression.", "error")
    });
  }
  openJob(j) {
    this.jobForm = j ? __spreadValues({}, j) : { name: "", companyId: this.companyId };
    this.err = "";
    this.showJobModal = true;
  }
  saveJob() {
    if (!this.jobForm.name) {
      this.err = "Le nom est obligatoire";
      return;
    }
    this.jobForm.companyId = this.companyId;
    this.saving = true;
    this.hr.saveJob(this.jobForm).subscribe({
      next: () => {
        this.saving = false;
        this.showJobModal = false;
        this.load();
      },
      error: (e) => {
        this.saving = false;
        this.err = e.error?.message || "Erreur";
      }
    });
  }
  delJob(j) {
    if (!confirm(`Supprimer le poste \xAB ${j.name} \xBB ?`))
      return;
    this.hr.deleteJob(j.id).subscribe({
      next: () => this.load(),
      error: (err) => this.notificationService.notify(err?.error?.message ?? "Erreur lors de la suppression.", "error")
    });
  }
  openCat(c) {
    this.catForm = c ? __spreadValues({}, c) : { name: "", code: "", companyId: this.companyId, sequence: 10, active: true };
    this.err = "";
    this.showCatModal = true;
  }
  saveCat() {
    if (!this.catForm.name || !this.catForm.code) {
      this.err = "Code et libell\xE9 sont obligatoires";
      return;
    }
    this.catForm.companyId = this.companyId;
    this.saving = true;
    const obs = this.catForm.id ? this.hr.updateProfessionalCategory(this.catForm.id, this.catForm) : this.hr.saveProfessionalCategory(this.catForm);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.showCatModal = false;
        this.load();
      },
      error: (e) => {
        this.saving = false;
        this.err = e.error?.message || "Erreur";
      }
    });
  }
  delCat(c) {
    if (!confirm(`Supprimer la cat\xE9gorie \xAB ${c.name} \xBB ?`))
      return;
    this.hr.deleteProfessionalCategory(c.id).subscribe({
      next: () => this.load(),
      error: (err) => this.notificationService.notify(err?.error?.message ?? "Erreur lors de la suppression.", "error")
    });
  }
  fmt(n) {
    return new Intl.NumberFormat("fr-FR").format(Math.round(n || 0));
  }
  toggleCat(c) {
    if (this.expandedCatId === c.id) {
      this.expandedCatId = null;
      return;
    }
    this.expandedCatId = c.id;
    if (!this.echelonsByCat[c.id]) {
      this.hr.getEchelons(this.companyId, c.id).subscribe((list) => this.echelonsByCat[c.id] = list);
    }
  }
  openEchelon(professionalCategoryId, e) {
    this.echelonForm = e ? __spreadValues({}, e) : { name: "", code: "", professionalCategoryId, companyId: this.companyId, sequence: 10, active: true, baseWage: 0 };
    this.err = "";
    this.showEchelonModal = true;
  }
  saveEchelonForm() {
    if (!this.echelonForm.name || !this.echelonForm.code) {
      this.err = "Code et libell\xE9 sont obligatoires";
      return;
    }
    this.echelonForm.companyId = this.companyId;
    this.saving = true;
    const catId = this.echelonForm.professionalCategoryId;
    const obs = this.echelonForm.id ? this.hr.updateEchelon(this.echelonForm.id, this.echelonForm) : this.hr.saveEchelon(this.echelonForm);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.showEchelonModal = false;
        this.hr.getEchelons(this.companyId, catId).subscribe((list) => this.echelonsByCat[catId] = list);
      },
      error: (e) => {
        this.saving = false;
        this.err = e.error?.message || "Erreur";
      }
    });
  }
  delEchelon(catId, e) {
    if (!confirm(`Supprimer l'\xE9chelon \xAB ${e.name} \xBB ?`))
      return;
    this.hr.deleteEchelon(e.id).subscribe({
      next: () => this.hr.getEchelons(this.companyId, catId).subscribe((list) => this.echelonsByCat[catId] = list),
      error: (err) => this.notificationService.notify(err?.error?.message ?? "Erreur lors de la suppression.", "error")
    });
  }
  static {
    this.\u0275fac = function OrganisationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrganisationComponent)(\u0275\u0275directiveInject(HrService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrganisationComponent, selectors: [["app-hr-organisation"]], decls: 40, vars: 10, consts: [[1, "hp"], [1, "hp-head"], [1, "material-icons"], [1, "org-grid"], [1, "org-col"], [1, "org-col-head"], [1, "b", "b-primary"], [1, "empty"], [1, "tbl-wrap"], [1, "muted", 2, "font-size", ".8rem", "margin-bottom", "10px"], [1, "ov"], [1, "b", "b-primary", 3, "click"], [1, "tbl"], [1, "ta-r"], [1, "b-icon", 3, "click"], [1, "cat-row", 3, "click"], [1, "ta-c"], [1, "material-icons", "chev"], [1, "ech-row"], ["colspan", "3"], [1, "ech-panel"], [1, "ech-head"], [1, "muted", 2, "font-size", ".78rem"], [1, "b", "b-sec", "b-sm"], [1, "empty", 2, "padding", "6px 0"], [1, "tbl", "tbl-nested"], [1, "b", "b-sec", "b-sm", 3, "click"], [1, "ov", 3, "click"], [1, "mdl", 2, "max-width", "480px", 3, "click"], [1, "mdl-h"], [1, "mdl-b"], [1, "alert"], [1, "grid"], [1, "fg", "fg-2"], [1, "in", 3, "ngModelChange", "ngModel"], [1, "fg"], [3, "ngValue"], [1, "mdl-f"], [1, "b", "b-sec", 3, "click"], [1, "b", "b-primary", 3, "click", "disabled"], [3, "value"], [1, "muted", 2, "font-size", ".78rem", "margin-top", "8px"], [1, "mdl", 2, "max-width", "460px", 3, "click"], ["placeholder", "Ex: 6A", 1, "in", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "in", 3, "ngModelChange", "ngModel"], ["placeholder", "Ex: Cat\xE9gorie 6A - Chef de service", 1, "in", 3, "ngModelChange", "ngModel"], ["placeholder", "Ex: A", 1, "in", 3, "ngModelChange", "ngModel"], ["placeholder", "Ex: \xC9chelon A", 1, "in", 3, "ngModelChange", "ngModel"]], template: function OrganisationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1")(3, "span", 2);
        \u0275\u0275text(4, "account_tree");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Organisation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "h2")(10, "span", 2);
        \u0275\u0275text(11, "apartment");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " D\xE9partements");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(13, OrganisationComponent_Conditional_13_Template, 4, 0, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(14, OrganisationComponent_Conditional_14_Template, 2, 0, "div", 7)(15, OrganisationComponent_Conditional_15_Template, 14, 0, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 4)(17, "div", 5)(18, "h2")(19, "span", 2);
        \u0275\u0275text(20, "work");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " Postes");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(22, OrganisationComponent_Conditional_22_Template, 4, 0, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(23, OrganisationComponent_Conditional_23_Template, 2, 0, "div", 7)(24, OrganisationComponent_Conditional_24_Template, 14, 0, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 4)(26, "div", 5)(27, "h2")(28, "span", 2);
        \u0275\u0275text(29, "stairs");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " Cat\xE9gories professionnelles");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(31, OrganisationComponent_Conditional_31_Template, 4, 0, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 9);
        \u0275\u0275text(33, "Grille salariale (convention collective) \u2014 utilis\xE9e dans Postes et Contrats.");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(34, OrganisationComponent_Conditional_34_Template, 2, 0, "div", 7)(35, OrganisationComponent_Conditional_35_Template, 13, 0, "div", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(36, OrganisationComponent_Conditional_36_Template, 32, 8, "div", 10);
        \u0275\u0275conditionalCreate(37, OrganisationComponent_Conditional_37_Template, 41, 11, "div", 10);
        \u0275\u0275conditionalCreate(38, OrganisationComponent_Conditional_38_Template, 36, 10, "div", 10);
        \u0275\u0275conditionalCreate(39, OrganisationComponent_Conditional_39_Template, 40, 11, "div", 10);
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.canEdit ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.departments.length === 0 ? 14 : 15);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.canEdit ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.jobs.length === 0 ? 23 : 24);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.canEdit ? 31 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.categories.length === 0 ? 34 : 35);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showDeptModal ? 36 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showJobModal ? 37 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showCatModal ? 38 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showEchelonModal ? 39 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.hp[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #7C3AED;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.b-primary[_ngcontent-%COMP%] {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec[_ngcontent-%COMP%]:hover {\n  background: var(--navbar-hover);\n}\n.b-danger[_ngcontent-%COMP%] {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.ta-r[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.clk[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.mdl-f[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.fg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in[_ngcontent-%COMP%] {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in[_ngcontent-%COMP%]:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in[_ngcontent-%COMP%]:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .fg-2[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */", "\n.org-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 20px;\n  align-items: start;\n}\n.org-col-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.org-col-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.org-col-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #7C3AED;\n  font-size: 20px;\n}\n@media (max-width: 1300px) {\n  .org-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 900px) {\n  .org-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cat-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ta-c[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.chev[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-muted);\n}\n.ech-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0 0 10px;\n  border-bottom: 1px solid var(--border-light);\n}\n.ech-panel[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border-radius: var(--radius-md);\n  padding: 10px 12px;\n  margin: 0 4px;\n}\n.ech-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.b-sm[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 0.78rem;\n}\n.tbl-nested[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n}\n.tbl-nested[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.tbl-nested[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n}\n/*# sourceMappingURL=organisation.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganisationComponent, [{
    type: Component,
    args: [{ selector: "app-hr-organisation", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="hp">
      <div class="hp-head">
        <h1><span class="material-icons">account_tree</span> Organisation</h1>
      </div>

      <div class="org-grid">
        <!-- D\xE9partements -->
        <div class="org-col">
          <div class="org-col-head">
            <h2><span class="material-icons">apartment</span> D\xE9partements</h2>
            @if (canEdit) { <button class="b b-primary" (click)="openDept()"><span class="material-icons">add</span> Nouveau</button> }
          </div>
          @if (departments.length === 0) { <div class="empty">Aucun d\xE9partement.</div> }
          @else {
            <div class="tbl-wrap">
              <table class="tbl">
                <thead><tr><th>Nom</th><th>Code</th><th>Responsable</th><th></th></tr></thead>
                <tbody>
                  @for (d of departments; track d.id) {
                    <tr>
                      <td>{{ d.name }}</td>
                      <td>{{ d.code }}</td>
                      <td>{{ empName(d.managerId) }}</td>
                      <td class="ta-r">
                        @if (canEdit) {
                          <button class="b-icon" (click)="openDept(d)"><span class="material-icons">edit</span></button>
                          <button class="b-icon" (click)="delDept(d)"><span class="material-icons">delete_outline</span></button>
                        }
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          }
        </div>

        <!-- Postes -->
        <div class="org-col">
          <div class="org-col-head">
            <h2><span class="material-icons">work</span> Postes</h2>
            @if (canEdit) { <button class="b b-primary" (click)="openJob()"><span class="material-icons">add</span> Nouveau</button> }
          </div>
          @if (jobs.length === 0) { <div class="empty">Aucun poste.</div> }
          @else {
            <div class="tbl-wrap">
              <table class="tbl">
                <thead><tr><th>Nom</th><th>D\xE9partement</th><th>Cat\xE9gorie</th><th></th></tr></thead>
                <tbody>
                  @for (j of jobs; track j.id) {
                    <tr>
                      <td>{{ j.name }}</td>
                      <td>{{ deptName(j.departmentId) }}</td>
                      <td>{{ catName(j.category) }}</td>
                      <td class="ta-r">
                        @if (canEdit) {
                          <button class="b-icon" (click)="openJob(j)"><span class="material-icons">edit</span></button>
                          <button class="b-icon" (click)="delJob(j)"><span class="material-icons">delete_outline</span></button>
                        }
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          }
        </div>

        <!-- Cat\xE9gories professionnelles -->
        <div class="org-col">
          <div class="org-col-head">
            <h2><span class="material-icons">stairs</span> Cat\xE9gories professionnelles</h2>
            @if (canEdit) { <button class="b b-primary" (click)="openCat()"><span class="material-icons">add</span> Nouvelle</button> }
          </div>
          <div class="muted" style="font-size:.8rem;margin-bottom:10px">Grille salariale (convention collective) \u2014 utilis\xE9e dans Postes et Contrats.</div>
          @if (categories.length === 0) { <div class="empty">Aucune cat\xE9gorie d\xE9finie.</div> }
          @else {
            <div class="tbl-wrap">
              <table class="tbl">
                <thead><tr><th></th><th>Code</th><th>Libell\xE9</th><th></th></tr></thead>
                <tbody>
                  @for (c of categories; track c.id) {
                    <tr class="cat-row" (click)="toggleCat(c)">
                      <td class="ta-c"><span class="material-icons chev">{{ expandedCatId === c.id ? 'expand_more' : 'chevron_right' }}</span></td>
                      <td><code>{{ c.code }}</code></td>
                      <td>{{ c.name }}</td>
                      <td class="ta-r">
                        @if (canEdit) {
                          <button class="b-icon" (click)="openCat(c); $event.stopPropagation()"><span class="material-icons">edit</span></button>
                          <button class="b-icon" (click)="delCat(c); $event.stopPropagation()"><span class="material-icons">delete_outline</span></button>
                        }
                      </td>
                    </tr>
                    @if (expandedCatId === c.id) {
                      <tr class="ech-row">
                        <td></td>
                        <td colspan="3">
                          <div class="ech-panel">
                            <div class="ech-head">
                              <span class="muted" style="font-size:.78rem">\xC9chelons de \xAB {{ c.name }} \xBB</span>
                              @if (canEdit) { <button class="b b-sec b-sm" (click)="openEchelon(c.id!)"><span class="material-icons">add</span> \xC9chelon</button> }
                            </div>
                            @if ((echelonsByCat[c.id!] ?? []).length === 0) { <div class="empty" style="padding:6px 0">Aucun \xE9chelon.</div> }
                            @else {
                              <table class="tbl tbl-nested">
                                <thead><tr><th>Code</th><th>Libell\xE9</th><th class="ta-r">Salaire de base</th><th></th></tr></thead>
                                <tbody>
                                  @for (e of (echelonsByCat[c.id!] ?? []); track e.id) {
                                    <tr>
                                      <td><code>{{ e.code }}</code></td>
                                      <td>{{ e.name }}</td>
                                      <td class="ta-r">{{ fmt(e.baseWage) }}</td>
                                      <td class="ta-r">
                                        @if (canEdit) {
                                          <button class="b-icon" (click)="openEchelon(c.id!, e)"><span class="material-icons">edit</span></button>
                                          <button class="b-icon" (click)="delEchelon(c.id!, e)"><span class="material-icons">delete_outline</span></button>
                                        }
                                      </td>
                                    </tr>
                                  }
                                </tbody>
                              </table>
                            }
                          </div>
                        </td>
                      </tr>
                    }
                  }
                </tbody>
              </table>
            </div>
          }
        </div>
      </div>
    </div>

    @if (showDeptModal) {
      <div class="ov" (click)="showDeptModal=false">
        <div class="mdl" style="max-width:480px" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>{{ deptForm.id ? 'Modifier' : 'Nouveau' }} d\xE9partement</h3><button class="b-icon" (click)="showDeptModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg fg-2"><label>Nom *</label><input class="in" [(ngModel)]="deptForm.name"></div>
              <div class="fg"><label>Code</label><input class="in" [(ngModel)]="deptForm.code"></div>
              <div class="fg"><label>Responsable</label>
                <select class="in" [(ngModel)]="deptForm.managerId"><option [ngValue]="undefined">\u2014</option>@for (e of employees; track e.id) { <option [ngValue]="e.id">{{ e.lastName }} {{ e.firstName }}</option> }</select>
              </div>
            </div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showDeptModal=false">Annuler</button>
            <button class="b b-primary" (click)="saveDept()" [disabled]="saving">{{ saving ? 'Enregistrement\u2026' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }

    @if (showJobModal) {
      <div class="ov" (click)="showJobModal=false">
        <div class="mdl" style="max-width:480px" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>{{ jobForm.id ? 'Modifier' : 'Nouveau' }} poste</h3><button class="b-icon" (click)="showJobModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg fg-2"><label>Nom *</label><input class="in" [(ngModel)]="jobForm.name"></div>
              <div class="fg"><label>D\xE9partement</label>
                <select class="in" [(ngModel)]="jobForm.departmentId"><option [ngValue]="undefined">\u2014</option>@for (d of departments; track d.id) { <option [ngValue]="d.id">{{ d.name }}</option> }</select>
              </div>
              <div class="fg"><label>Cat\xE9gorie prof.</label>
                <select class="in" [(ngModel)]="jobForm.category">
                  <option [ngValue]="undefined">\u2014</option>
                  @for (c of categories; track c.id) { <option [value]="c.code">{{ c.name }}</option> }
                </select>
              </div>
              <div class="fg fg-2"><label>Description</label><input class="in" [(ngModel)]="jobForm.description"></div>
            </div>
            @if (categories.length === 0) {
              <div class="muted" style="font-size:.78rem;margin-top:8px">Aucune cat\xE9gorie professionnelle d\xE9finie \u2014 cr\xE9ez-en une dans la colonne \xAB Cat\xE9gories professionnelles \xBB.</div>
            }
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showJobModal=false">Annuler</button>
            <button class="b b-primary" (click)="saveJob()" [disabled]="saving">{{ saving ? 'Enregistrement\u2026' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }

    @if (showCatModal) {
      <div class="ov" (click)="showCatModal=false">
        <div class="mdl" style="max-width:460px" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>{{ catForm.id ? 'Modifier' : 'Nouvelle' }} cat\xE9gorie professionnelle</h3><button class="b-icon" (click)="showCatModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg"><label>Code *</label><input class="in" [(ngModel)]="catForm.code" placeholder="Ex: 6A"></div>
              <div class="fg"><label>S\xE9quence</label><input type="number" class="in" [(ngModel)]="catForm.sequence"></div>
              <div class="fg fg-2"><label>Libell\xE9 *</label><input class="in" [(ngModel)]="catForm.name" placeholder="Ex: Cat\xE9gorie 6A - Chef de service"></div>
              <div class="fg"><label>Actif</label><select class="in" [(ngModel)]="catForm.active"><option [ngValue]="true">Oui</option><option [ngValue]="false">Non</option></select></div>
            </div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showCatModal=false">Annuler</button>
            <button class="b b-primary" (click)="saveCat()" [disabled]="saving">{{ saving ? 'Enregistrement\u2026' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }

    @if (showEchelonModal) {
      <div class="ov" (click)="showEchelonModal=false">
        <div class="mdl" style="max-width:460px" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>{{ echelonForm.id ? 'Modifier' : 'Nouvel' }} \xE9chelon</h3><button class="b-icon" (click)="showEchelonModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg"><label>Code *</label><input class="in" [(ngModel)]="echelonForm.code" placeholder="Ex: A"></div>
              <div class="fg"><label>S\xE9quence</label><input type="number" class="in" [(ngModel)]="echelonForm.sequence"></div>
              <div class="fg fg-2"><label>Libell\xE9 *</label><input class="in" [(ngModel)]="echelonForm.name" placeholder="Ex: \xC9chelon A"></div>
              <div class="fg fg-2"><label>Salaire de base</label><input type="number" class="in" [(ngModel)]="echelonForm.baseWage"></div>
              <div class="fg"><label>Actif</label><select class="in" [(ngModel)]="echelonForm.active"><option [ngValue]="true">Oui</option><option [ngValue]="false">Non</option></select></div>
            </div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showEchelonModal=false">Annuler</button>
            <button class="b b-primary" (click)="saveEchelonForm()" [disabled]="saving">{{ saving ? 'Enregistrement\u2026' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }
  `, styles: ["/* src/app/modules/hr/components/hr-shared.scss */\n:host {\n  display: block;\n}\n.hp {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hp-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n.hp-head h1 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.hp-head h1 .material-icons {\n  color: #7C3AED;\n}\n.muted {\n  color: var(--text-muted);\n  padding: 20px 0;\n}\n.empty {\n  padding: 40px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--bg-surface);\n  border: 1px dashed var(--border);\n  border-radius: var(--radius-md);\n}\n.b {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  border-radius: var(--radius-sm);\n  padding: 9px 16px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: var(--ease);\n}\n.b .material-icons {\n  font-size: 18px;\n}\n.b-primary {\n  background: #7C3AED;\n  color: #fff;\n}\n.b-primary:hover {\n  background: rgb(105.3553488372, 29.9618604651, 234.4381395349);\n}\n.b-primary:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.b-sec {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.b-sec:hover {\n  background: var(--navbar-hover);\n}\n.b-danger {\n  background: var(--danger, #ef4444);\n  color: #fff;\n}\n.b-ok {\n  background: #16a34a;\n  color: #fff;\n}\n.b-warn {\n  background: #d97706;\n  color: #fff;\n}\n.b-icon {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 4px;\n  border-radius: var(--radius-xs);\n}\n.b-icon:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.tbl-wrap {\n  overflow-x: auto;\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n}\n.tbl {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.88rem;\n}\n.tbl th {\n  text-align: left;\n  padding: 11px 14px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-weight: 600;\n  border-bottom: 1px solid var(--border);\n  white-space: nowrap;\n}\n.tbl td {\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.tbl tbody tr:hover {\n  background: var(--bg-elevated);\n}\n.ta-r {\n  text-align: right;\n}\n.clk {\n  cursor: pointer;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.badge.ok {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.badge.info {\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--navbar-accent, #3b82f6);\n  border-color: rgba(59, 130, 246, 0.3);\n}\n.badge.warn {\n  background: rgba(217, 119, 6, 0.12);\n  color: #d97706;\n  border-color: rgba(217, 119, 6, 0.3);\n}\n.badge.done {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: rgba(124, 58, 237, 0.3);\n}\n.ov {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 40px 16px;\n  z-index: 200;\n  overflow-y: auto;\n}\n.mdl {\n  background: var(--bg-surface);\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 760px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);\n  border: 1px solid var(--border);\n}\n.mdl-h {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.mdl-h h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-primary);\n}\n.mdl-b {\n  padding: 20px;\n}\n.mdl-f {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n}\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.fg {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.fg-2 {\n  grid-column: span 2;\n}\n.fg label {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.in {\n  padding: 9px 11px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  font-family: inherit;\n  transition: var(--ease);\n  outline: none;\n}\n.in:focus {\n  border-color: var(--border-focus);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.in:disabled {\n  background-color: var(--bg-elevated);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.alert {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 14px;\n  font-size: 0.88rem;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n@media (max-width: 640px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n  .fg-2 {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=hr-shared.css.map */\n", "/* angular:styles/component:scss;5f64345aebc7fdc2e1ad840920665eecb5fd3d6b7ae6714fcfa916e2f65f92ab;/home/automate/Documents/Projets 1.1/Projets/Blessing ERP Distrbuteur/erp-frontend/src/app/modules/hr/components/organisation/organisation.component.ts */\n.org-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 20px;\n  align-items: start;\n}\n.org-col-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.org-col-head h2 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--text-primary);\n}\n.org-col-head h2 .material-icons {\n  color: #7C3AED;\n  font-size: 20px;\n}\n@media (max-width: 1300px) {\n  .org-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 900px) {\n  .org-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.cat-row {\n  cursor: pointer;\n}\n.ta-c {\n  text-align: center;\n}\n.chev {\n  font-size: 18px;\n  color: var(--text-muted);\n}\n.ech-row td {\n  padding: 0 0 10px;\n  border-bottom: 1px solid var(--border-light);\n}\n.ech-panel {\n  background: var(--bg-elevated);\n  border-radius: var(--radius-md);\n  padding: 10px 12px;\n  margin: 0 4px;\n}\n.ech-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.b-sm {\n  padding: 4px 10px;\n  font-size: 0.78rem;\n}\n.tbl-nested {\n  font-size: 0.82rem;\n}\n.tbl-nested th,\n.tbl-nested td {\n  padding: 6px 8px;\n}\n/*# sourceMappingURL=organisation.component.css.map */\n"] }]
  }], () => [{ type: HrService }, { type: AuthService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrganisationComponent, { className: "OrganisationComponent", filePath: "app/modules/hr/components/organisation/organisation.component.ts", lineNumber: 264 });
})();
export {
  OrganisationComponent
};
//# sourceMappingURL=chunk-4VEWHNKC.js.map
