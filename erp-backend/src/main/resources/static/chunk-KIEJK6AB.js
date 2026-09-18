import {
  ACTIONS,
  ConfigService,
  MODULES,
  MODULE_LABELS,
  OPTIONAL_ACTIONS,
  OPTIONAL_ACTION_RESOURCES,
  RESOURCES,
  RESOURCE_LABELS
} from "./chunk-Y6UTENYI.js";
import {
  CheckboxControlValueAccessor,
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵarrowFunction,
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
  ɵɵrepeaterTrackByIdentity,
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
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/config/components/roles/roles.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var arrowFn0 = (ctx, view) => (p) => {
  const mod_r4 = \u0275\u0275restoreView(view).$implicit;
  return \u0275\u0275resetView(p.module === mod_r4);
};
function RolesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 3);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMsg);
  }
}
function RolesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 3);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 13);
    \u0275\u0275listener("click", function RolesComponent_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.errorMsg = "");
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg, " ");
  }
}
function RolesComponent_For_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.code);
  }
}
function RolesComponent_For_18_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Syst\xE8me");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_For_18_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "Custom");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_For_18_Conditional_13_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mod_r5 = \u0275\u0275nextContext().$implicit;
    const r_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.MODULE_LABELS[mod_r5], " (", ctx_r0.getModulePermCount(r_r3.permissions, mod_r5), ") ");
  }
}
function RolesComponent_For_18_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RolesComponent_For_18_Conditional_13_For_2_Conditional_0_Template, 2, 2, "span", 27);
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275conditional(r_r3.permissions && r_r3.permissions.some(\u0275\u0275arrowFunction(1, arrowFn0, ctx)) ? 0 : -1);
  }
}
function RolesComponent_For_18_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, RolesComponent_For_18_Conditional_13_For_2_Template, 1, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.MODULES);
  }
}
function RolesComponent_For_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, "Droits d\xE9finis par le syst\xE8me \u2014 non modifiables");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_For_18_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 28);
    \u0275\u0275listener("click", function RolesComponent_For_18_Conditional_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const r_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openEdit(r_r3));
    });
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 29);
    \u0275\u0275listener("click", function RolesComponent_For_18_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const r_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.delete(r_r3));
    });
    \u0275\u0275elementStart(5, "span", 3);
    \u0275\u0275text(6, "delete_outline");
    \u0275\u0275elementEnd()()();
  }
}
function RolesComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17)(5, "div", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, RolesComponent_For_18_Conditional_7_Template, 2, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 20);
    \u0275\u0275conditionalCreate(9, RolesComponent_For_18_Conditional_9_Template, 2, 0, "span", 21)(10, RolesComponent_For_18_Conditional_10_Template, 2, 0, "span", 22);
    \u0275\u0275elementStart(11, "span", 23);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(13, RolesComponent_For_18_Conditional_13_Template, 3, 0, "div", 24);
    \u0275\u0275conditionalCreate(14, RolesComponent_For_18_Conditional_14_Template, 2, 0, "div", 25);
    \u0275\u0275conditionalCreate(15, RolesComponent_For_18_Conditional_15_Template, 7, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275classProp("system-role", r_r3.isSystem);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3.isSystem ? "shield" : "manage_accounts");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r3.code ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r3.isSystem ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inactive", !r_r3.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3.active ? "Actif" : "Inactif");
    \u0275\u0275advance();
    \u0275\u0275conditional(!r_r3.isSystem && r_r3.permissions && r_r3.permissions.length > 0 ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r3.isSystem ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!r_r3.isSystem ? 15 : -1);
  }
}
function RolesComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 3);
    \u0275\u0275text(2, "admin_panel_settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun r\xF4le trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function RolesComponent_Conditional_20_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const act_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.ACTION_LABELS[act_r8]);
  }
}
function RolesComponent_Conditional_20_For_31_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "partiel");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_Conditional_20_For_31_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 49);
  }
}
function RolesComponent_Conditional_20_For_31_For_11_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 55)(1, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_Conditional_20_For_31_For_11_For_6_Conditional_0_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const act_r13 = \u0275\u0275nextContext().$implicit;
      const res_r14 = \u0275\u0275nextContext().$implicit;
      const mod_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.permMatrix[mod_r10][res_r14][act_r13], $event) || (ctx_r0.permMatrix[mod_r10][res_r14][act_r13] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const act_r13 = \u0275\u0275nextContext().$implicit;
    const res_r14 = \u0275\u0275nextContext().$implicit;
    const mod_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.permMatrix[mod_r10][res_r14][act_r13]);
  }
}
function RolesComponent_Conditional_20_For_31_For_11_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 55);
  }
}
function RolesComponent_Conditional_20_For_31_For_11_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RolesComponent_Conditional_20_For_31_For_11_For_6_Conditional_0_Template, 2, 1, "td", 55)(1, RolesComponent_Conditional_20_For_31_For_11_For_6_Conditional_1_Template, 1, 0, "td", 55);
  }
  if (rf & 2) {
    const act_r13 = ctx.$implicit;
    const res_r14 = \u0275\u0275nextContext().$implicit;
    const mod_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.supportsAction(mod_r10, res_r14, act_r13) ? 0 : 1);
  }
}
function RolesComponent_Conditional_20_For_31_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 52)(1, "td", 53)(2, "span", 54);
    \u0275\u0275text(3, "\u2514");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, RolesComponent_Conditional_20_For_31_For_11_For_6_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(7, "td", 55)(8, "input", 51);
    \u0275\u0275listener("change", function RolesComponent_Conditional_20_For_31_For_11_Template_input_change_8_listener() {
      const res_r14 = \u0275\u0275restoreView(_r11).$implicit;
      const mod_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleAllActions(mod_r10, res_r14));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const res_r14 = ctx.$implicit;
    const mod_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.RESOURCE_LABELS[res_r14]);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.ACTION_COLUMNS);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r0.isAllActionsChecked(mod_r10, res_r14));
  }
}
function RolesComponent_Conditional_20_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 45)(1, "td", 46);
    \u0275\u0275element(2, "span", 47);
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, RolesComponent_Conditional_20_For_31_Conditional_5_Template, 2, 0, "span", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, RolesComponent_Conditional_20_For_31_For_7_Template, 1, 0, "td", 49, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(8, "td", 50)(9, "input", 51);
    \u0275\u0275listener("change", function RolesComponent_Conditional_20_For_31_Template_input_change_9_listener() {
      const mod_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleAllModule(mod_r10));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(10, RolesComponent_Conditional_20_For_31_For_11_Template, 9, 2, "tr", 52, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const mod_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.MODULE_LABELS[mod_r10]);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isPartialModule(mod_r10) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.ACTION_COLUMNS);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r0.isAllModuleChecked(mod_r10));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.RESOURCES[mod_r10]);
  }
}
function RolesComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function RolesComponent_Conditional_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275elementStart(1, "div", 31);
    \u0275\u0275listener("click", function RolesComponent_Conditional_20_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 32)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function RolesComponent_Conditional_20_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275elementStart(6, "span", 3);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 33)(9, "div", 34)(10, "label");
    \u0275\u0275text(11, "Libell\xE9 du r\xF4le ");
    \u0275\u0275elementStart(12, "span", 35);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_Conditional_20_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.label, $event) || (ctx_r0.form.label = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 37)(16, "span", 3);
    \u0275\u0275text(17, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Droits d'acc\xE8s par ressource ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 38)(20, "table", 39)(21, "thead")(22, "tr")(23, "th", 40);
    \u0275\u0275text(24, "Module / Ressource");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(25, RolesComponent_Conditional_20_For_26_Template, 2, 1, "th", 41, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(27, "th", 42);
    \u0275\u0275text(28, "Tout");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275repeaterCreate(30, RolesComponent_Conditional_20_For_31_Template, 12, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 43)(33, "button", 44);
    \u0275\u0275listener("click", function RolesComponent_Conditional_20_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275text(34, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 6);
    \u0275\u0275listener("click", function RolesComponent_Conditional_20_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275elementStart(36, "span", 3);
    \u0275\u0275text(37, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.editingRole ? "Modifier le r\xF4le" : "Nouveau r\xF4le personnalis\xE9");
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.label);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r0.ACTION_COLUMNS);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.MODULES);
  }
}
var RolesComponent = class _RolesComponent {
  /** true si l'action est cochable pour cette ressource (actions de base : toujours). */
  supportsAction(mod, res, act) {
    if (ACTIONS.includes(act))
      return true;
    return (OPTIONAL_ACTION_RESOURCES[act] ?? []).includes(`${mod}_${res}`);
  }
  /** Liste des actions réellement applicables à une ressource. */
  actionsFor(mod, res) {
    return this.ACTION_COLUMNS.filter((a) => this.supportsAction(mod, res, a));
  }
  constructor(configService, authService) {
    this.configService = configService;
    this.authService = authService;
    this.roles = [];
    this.loading = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.showModal = false;
    this.editingRole = null;
    this.form = {};
    this.permMatrix = {};
    this.MODULES = MODULES;
    this.ACTIONS = ACTIONS;
    this.ACTION_COLUMNS = [...ACTIONS, ...OPTIONAL_ACTIONS];
    this.RESOURCES = RESOURCES;
    this.MODULE_LABELS = MODULE_LABELS;
    this.RESOURCE_LABELS = RESOURCE_LABELS;
    this.ACTION_LABELS = {
      VIEW: "Voir",
      CREATE: "Cr\xE9er",
      EDIT: "Modifier",
      DELETE: "Supprimer",
      IMPORT: "Importer",
      EXPORT: "Exporter",
      CANCEL: "Annuler",
      VALIDATE: "Valider"
    };
  }
  ngOnInit() {
    this.loadRoles();
  }
  loadRoles() {
    this.loading = true;
    this.configService.getAllRoles().subscribe({
      next: (r) => {
        this.roles = r;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  initMatrix(perms = []) {
    this.permMatrix = {};
    for (const mod of MODULES) {
      this.permMatrix[mod] = {};
      for (const res of RESOURCES[mod] ?? []) {
        this.permMatrix[mod][res] = {};
        for (const act of this.actionsFor(mod, res)) {
          this.permMatrix[mod][res][act] = perms.some((p) => p.module === mod && p.resource === res && p.action === act);
        }
      }
    }
  }
  openCreate() {
    this.editingRole = null;
    this.form = { active: true };
    this.initMatrix();
    this.showModal = true;
  }
  openEdit(r) {
    this.editingRole = r;
    this.form = { label: r.label, active: r.active };
    this.initMatrix(r.permissions ?? []);
    this.showModal = true;
  }
  getPermissions() {
    const perms = [];
    for (const mod of MODULES)
      for (const res of RESOURCES[mod] ?? [])
        for (const act of this.actionsFor(mod, res))
          if (this.permMatrix[mod]?.[res]?.[act])
            perms.push({ module: mod, resource: res, action: act });
    return perms;
  }
  toggleAllActions(mod, res) {
    const acts = this.actionsFor(mod, res);
    const allChecked = acts.every((a) => this.permMatrix[mod]?.[res]?.[a]);
    acts.forEach((a) => {
      this.permMatrix[mod][res][a] = !allChecked;
    });
  }
  toggleAllModule(mod) {
    const allChecked = this.isAllModuleChecked(mod);
    for (const res of RESOURCES[mod] ?? [])
      for (const act of this.actionsFor(mod, res))
        this.permMatrix[mod][res][act] = !allChecked;
  }
  isAllActionsChecked(mod, res) {
    return this.actionsFor(mod, res).every((a) => this.permMatrix[mod]?.[res]?.[a]);
  }
  isAllModuleChecked(mod) {
    return (RESOURCES[mod] ?? []).every((res) => this.actionsFor(mod, res).every((a) => this.permMatrix[mod]?.[res]?.[a]));
  }
  isPartialModule(mod) {
    const resources = RESOURCES[mod] ?? [];
    const total = resources.reduce((sum, res) => sum + this.actionsFor(mod, res).length, 0);
    const checked = resources.reduce((sum, res) => sum + this.actionsFor(mod, res).filter((a) => this.permMatrix[mod]?.[res]?.[a]).length, 0);
    return checked > 0 && checked < total;
  }
  getModulePermCount(perms, mod) {
    const resources = new Set(perms.filter((p) => p.module === mod).map((p) => p.resource));
    return resources.size;
  }
  save() {
    if (!this.form.label) {
      this.errorMsg = "Le libell\xE9 est requis";
      return;
    }
    const payload = __spreadProps(__spreadValues({}, this.form), { permissions: this.getPermissions() });
    const obs = this.editingRole?.id ? this.configService.updateRole(this.editingRole.id, payload) : this.configService.createRole(payload);
    obs.subscribe({
      next: () => {
        this.showModal = false;
        this.showSuccess("R\xF4le sauvegard\xE9");
        this.loadRoles();
      },
      error: (e) => {
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  delete(r) {
    if (!confirm(`Supprimer le r\xF4le "${r.label}" ?`))
      return;
    this.configService.deleteRole(r.id).subscribe({
      next: () => {
        this.showSuccess("R\xF4le supprim\xE9");
        this.loadRoles();
      },
      error: (e) => {
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 3e3);
  }
  static {
    this.\u0275fac = function RolesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RolesComponent)(\u0275\u0275directiveInject(ConfigService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesComponent, selectors: [["app-config-roles"]], decls: 21, vars: 4, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "page-sub"], [1, "header-actions"], [1, "btn-primary", 3, "click"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "roles-grid"], [1, "role-card", 3, "system-role"], [1, "empty-state"], [1, "modal-backdrop"], [3, "click"], [1, "role-card"], [1, "role-card-header"], [1, "material-icons", "role-icon"], [1, "role-info"], [1, "role-label"], [1, "role-code"], [1, "role-badges"], [1, "badge-system"], [1, "badge-custom"], [1, "badge-active"], [1, "perm-summary"], [1, "system-note"], [1, "role-card-actions"], [1, "perm-chip"], [1, "btn-icon", 3, "click"], [1, "btn-icon", "btn-danger-icon", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal", "modal-perm", 3, "click"], [1, "modal-header"], [1, "modal-body"], [1, "form-group", 2, "margin-bottom", "16px"], [1, "req"], ["type", "text", "placeholder", "Ex: Op\xE9rateur de saisie", 1, "form-control", 2, "max-width", "320px", 3, "ngModelChange", "ngModel"], [1, "perm-section-title"], [1, "perm-table-wrap"], [1, "perm-table"], [1, "col-resource"], [1, "col-action"], [1, "col-all"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "module-header-row"], [1, "module-header-cell"], [1, "module-dot"], [1, "partial-badge"], [1, "module-action-cell"], [1, "text-center", "module-action-cell"], ["type", "checkbox", 3, "change", "checked"], [1, "resource-row"], [1, "res-cell"], [1, "res-indent"], [1, "text-center"], ["type", "checkbox", 3, "ngModelChange", "ngModel"]], template: function RolesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2)(4, "span", 3);
        \u0275\u0275text(5, "admin_panel_settings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " R\xF4les");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "R\xF4les syst\xE8me pr\xE9d\xE9finis et r\xF4les personnalis\xE9s");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
        \u0275\u0275listener("click", function RolesComponent_Template_button_click_10_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275elementStart(11, "span", 3);
        \u0275\u0275text(12, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " Nouveau r\xF4le ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(14, RolesComponent_Conditional_14_Template, 4, 1, "div", 7);
        \u0275\u0275conditionalCreate(15, RolesComponent_Conditional_15_Template, 6, 1, "div", 8);
        \u0275\u0275elementStart(16, "div", 9);
        \u0275\u0275repeaterCreate(17, RolesComponent_For_18_Template, 16, 12, "div", 10, _forTrack0);
        \u0275\u0275conditionalCreate(19, RolesComponent_Conditional_19_Template, 5, 0, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(20, RolesComponent_Conditional_20_Template, 39, 2, "div", 12);
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275conditional(ctx.successMsg ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 15 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.roles);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.roles.length === 0 && !ctx.loading ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal ? 20 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--primary);\n}\n.page-header[_ngcontent-%COMP%]   .page-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 16px;\n  font-size: 13.5px;\n  border: 1px solid transparent;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  opacity: 0.6;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: rgba(220, 38, 38, 0.2);\n}\n.alert.alert-warning[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.alert.alert-info[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: rgba(3, 105, 161, 0.2);\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.3;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 13.5px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-primary.btn-sm[_ngcontent-%COMP%], \n.btn-secondary.btn-sm[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.btn-primary.btn-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary.btn-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.btn-danger-icon[_ngcontent-%COMP%] {\n  color: var(--danger);\n  border-color: var(--danger);\n}\n.btn-icon.btn-danger-icon[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  box-sizing: border-box;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 13px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 13px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n  color: var(--text-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.1s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 32px;\n}\n.data-table[_ngcontent-%COMP%]   .inactive-row[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.text-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n}\n.select-group[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 180px;\n}\n.badge-active[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-active.inactive[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.badge-code[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-size: 11px;\n  font-family: monospace;\n  border: 1px solid var(--border);\n}\n.badge-system[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-custom[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-warn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  background: var(--warning-bg);\n  color: var(--warning);\n  margin-left: 4px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: transparent;\n}\n.role-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.role-badge.role-SUPER_ADMIN[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: transparent;\n}\n.role-badge.role-ADMIN[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: transparent;\n}\n.role-badge.role-SUPER_AUDITEUR[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: transparent;\n}\n.role-badge.role-AUDITEUR[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: transparent;\n}\n.role-badge.role-CONTROLEUR[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: transparent;\n}\n.groups-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.group-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.group-card.expanded[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n}\n.group-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  cursor: pointer;\n  transition: var(--ease);\n}\n.group-header[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.group-header[_ngcontent-%COMP%]   .group-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.group-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.group-header[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: var(--primary);\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.group-header[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n}\n.group-header[_ngcontent-%COMP%]   .group-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.group-header[_ngcontent-%COMP%]   .group-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 2px;\n}\n.group-header[_ngcontent-%COMP%]   .company-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.group-header[_ngcontent-%COMP%]   .group-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.companies-body[_ngcontent-%COMP%] {\n  padding: 0 18px 18px;\n  border-top: 1px solid var(--border-light);\n}\n.companies-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 12px;\n}\n.companies-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.companies-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.companies-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.companies-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.company-name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.company-name-cell[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.no-company[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  padding: 16px 0;\n  font-size: 13px;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: var(--primary);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.user-login[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.roles-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.role-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  padding: 16px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.role-card.system-role[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--info);\n}\n.role-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.role-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.role-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.role-info[_ngcontent-%COMP%]   .role-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.role-info[_ngcontent-%COMP%]   .role-code[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-family: monospace;\n}\n.role-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-items: flex-end;\n}\n.system-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.perm-summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.perm-chip[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border-radius: 10px;\n  font-size: 11px;\n  border: 1px solid var(--border);\n}\n.role-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 6px;\n  margin-top: 4px;\n}\n.perm-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.perm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.perm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.perm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 13px;\n  border: 1px solid var(--border);\n  font-size: 13px;\n}\n.perm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.perm-table[_ngcontent-%COMP%]   .mod-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  color: var(--primary);\n}\n.perm-table[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.perm-table[_ngcontent-%COMP%]   .col-resource[_ngcontent-%COMP%] {\n  min-width: 180px;\n  text-align: left;\n}\n.perm-table[_ngcontent-%COMP%]   .col-action[_ngcontent-%COMP%] {\n  min-width: 72px;\n  text-align: center;\n}\n.perm-table[_ngcontent-%COMP%]   .col-all[_ngcontent-%COMP%] {\n  min-width: 56px;\n  text-align: center;\n}\n.perm-table[_ngcontent-%COMP%]   .module-header-row[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\n.perm-table[_ngcontent-%COMP%]   .module-header-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--border);\n}\n.perm-table[_ngcontent-%COMP%]   .module-header-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--primary);\n  padding: 10px 13px;\n}\n.perm-table[_ngcontent-%COMP%]   .module-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--primary);\n  flex-shrink: 0;\n}\n.perm-table[_ngcontent-%COMP%]   .module-action-cell[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\n.perm-table[_ngcontent-%COMP%]   .partial-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1px 6px;\n  border-radius: 8px;\n  background: var(--warning-bg);\n  color: var(--warning);\n  font-size: 10px;\n  font-weight: 600;\n}\n.perm-table[_ngcontent-%COMP%]   .resource-row[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n}\n.perm-table[_ngcontent-%COMP%]   .resource-row[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.perm-table[_ngcontent-%COMP%]   .res-cell[_ngcontent-%COMP%] {\n  padding-left: 24px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.perm-table[_ngcontent-%COMP%]   .res-indent[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-right: 4px;\n  font-size: 12px;\n}\n.perm-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n}\n.perm-section-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.modal-perm[_ngcontent-%COMP%] {\n  width: 860px;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 13px;\n  background: var(--info-bg);\n  color: var(--info);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n}\n.info-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-light);\n  width: 480px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-xl);\n}\n.modal.modal-lg[_ngcontent-%COMP%] {\n  width: 640px;\n}\n.modal.modal-xl[_ngcontent-%COMP%] {\n  width: 780px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 17px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15.5px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border-light);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  background: var(--bg-elevated);\n}\n/*# sourceMappingURL=roles.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesComponent, [{
    type: Component,
    args: [{ selector: "app-config-roles", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div>
      <h1 class="page-title"><span class="material-icons">admin_panel_settings</span> R\xF4les</h1>
      <p class="page-sub">R\xF4les syst\xE8me pr\xE9d\xE9finis et r\xF4les personnalis\xE9s</p>
    </div>
    <div class="header-actions">
      <button class="btn-primary" (click)="openCreate()">
        <span class="material-icons">add</span> Nouveau r\xF4le
      </button>
    </div>
  </div>

  @if (successMsg) { <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div> }
  @if (errorMsg)   { <div class="alert alert-danger"><span class="material-icons">error</span> {{ errorMsg }} <button (click)="errorMsg=''">\xD7</button></div> }

  <div class="roles-grid">
    @for (r of roles; track r.id) {
      <div class="role-card" [class.system-role]="r.isSystem">
        <div class="role-card-header">
          <span class="material-icons role-icon">{{ r.isSystem ? 'shield' : 'manage_accounts' }}</span>
          <div class="role-info">
            <div class="role-label">{{ r.label }}</div>
            @if (r.code) { <div class="role-code">{{ r.code }}</div> }
          </div>
          <div class="role-badges">
            @if (r.isSystem) { <span class="badge-system">Syst\xE8me</span> }
            @else { <span class="badge-custom">Custom</span> }
            <span class="badge-active" [class.inactive]="!r.active">{{ r.active ? 'Actif' : 'Inactif' }}</span>
          </div>
        </div>

        @if (!r.isSystem && r.permissions && r.permissions.length > 0) {
          <div class="perm-summary">
            @for (mod of MODULES; track mod) {
              @if (r.permissions && r.permissions.some(p => p.module === mod)) {
                <span class="perm-chip">
                  {{ MODULE_LABELS[mod] }} ({{ getModulePermCount(r.permissions, mod) }})
                </span>
              }
            }
          </div>
        }
        @if (r.isSystem) {
          <div class="system-note">Droits d\xE9finis par le syst\xE8me \u2014 non modifiables</div>
        }

        @if (!r.isSystem) {
          <div class="role-card-actions">
            <button class="btn-icon" (click)="openEdit(r)"><span class="material-icons">edit</span></button>
            <button class="btn-icon btn-danger-icon" (click)="delete(r)"><span class="material-icons">delete_outline</span></button>
          </div>
        }
      </div>
    }
    @if (roles.length === 0 && !loading) {
      <div class="empty-state"><span class="material-icons">admin_panel_settings</span><p>Aucun r\xF4le trouv\xE9</p></div>
    }
  </div>
</div>

@if (showModal) {
  <div class="modal-backdrop" (click)="showModal=false">
    <div class="modal modal-perm" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3>{{ editingRole ? 'Modifier le r\xF4le' : 'Nouveau r\xF4le personnalis\xE9' }}</h3>
        <button class="btn-icon" (click)="showModal=false"><span class="material-icons">close</span></button>
      </div>
      <div class="modal-body">
        <div class="form-group" style="margin-bottom:16px">
          <label>Libell\xE9 du r\xF4le <span class="req">*</span></label>
          <input type="text" [(ngModel)]="form.label" class="form-control" placeholder="Ex: Op\xE9rateur de saisie" style="max-width:320px" />
        </div>

        <div class="perm-section-title">
          <span class="material-icons">lock</span> Droits d'acc\xE8s par ressource
        </div>

        <div class="perm-table-wrap">
          <table class="perm-table">
            <thead>
              <tr>
                <th class="col-resource">Module / Ressource</th>
                @for (act of ACTION_COLUMNS; track act) {
                  <th class="col-action">{{ ACTION_LABELS[act] }}</th>
                }
                <th class="col-all">Tout</th>
              </tr>
            </thead>
            <tbody>
              @for (mod of MODULES; track mod) {
                <tr class="module-header-row">
                  <td class="module-header-cell">
                    <span class="module-dot"></span>
                    <strong>{{ MODULE_LABELS[mod] }}</strong>
                    @if (isPartialModule(mod)) { <span class="partial-badge">partiel</span> }
                  </td>
                  @for (act of ACTION_COLUMNS; track act) { <td class="module-action-cell"></td> }
                  <td class="text-center module-action-cell">
                    <input type="checkbox" [checked]="isAllModuleChecked(mod)" (change)="toggleAllModule(mod)" />
                  </td>
                </tr>
                @for (res of RESOURCES[mod]; track res) {
                  <tr class="resource-row">
                    <td class="res-cell"><span class="res-indent">\u2514</span> {{ RESOURCE_LABELS[res] }}</td>
                    @for (act of ACTION_COLUMNS; track act) {
                      @if (supportsAction(mod, res, act)) {
                        <td class="text-center"><input type="checkbox" [(ngModel)]="permMatrix[mod][res][act]" /></td>
                      } @else {
                        <td class="text-center"></td>
                      }
                    }
                    <td class="text-center">
                      <input type="checkbox" [checked]="isAllActionsChecked(mod, res)" (change)="toggleAllActions(mod, res)" />
                    </td>
                  </tr>
                }
              }
            </tbody>
          </table>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" (click)="showModal=false">Annuler</button>
        <button class="btn-primary" (click)="save()"><span class="material-icons">save</span> Enregistrer</button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/config/components/roles/roles.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.page-header .page-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header .page-title .material-icons {\n  font-size: 24px;\n  color: var(--primary);\n}\n.page-header .page-sub {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 16px;\n  font-size: 13.5px;\n  border: 1px solid transparent;\n}\n.alert .material-icons {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.alert button {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  opacity: 0.6;\n}\n.alert.alert-success {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: rgba(220, 38, 38, 0.2);\n}\n.alert.alert-warning {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.alert.alert-info {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: rgba(3, 105, 161, 0.2);\n}\n.loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.3;\n}\n.empty-state p {\n  font-size: 15px;\n  margin: 0;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 13.5px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n  border: none;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-primary.btn-sm,\n.btn-secondary.btn-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.btn-primary.btn-sm .material-icons,\n.btn-secondary.btn-sm .material-icons {\n  font-size: 14px;\n}\n.btn-primary {\n  background: var(--primary);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-secondary {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-icon .material-icons {\n  font-size: 16px;\n}\n.btn-icon:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.btn-danger-icon {\n  color: var(--danger);\n  border-color: var(--danger);\n}\n.btn-icon.btn-danger-icon:hover {\n  background: var(--danger-bg);\n}\n.form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  box-sizing: border-box;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.form-control:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.form-control::placeholder {\n  color: var(--text-muted);\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group label {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group .req {\n  color: var(--danger);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid .form-full {\n  grid-column: 1/-1;\n}\n.toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.toggle-label input {\n  cursor: pointer;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 9px 13px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.data-table td {\n  padding: 11px 13px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n  color: var(--text-primary);\n}\n.data-table tbody tr {\n  transition: background 0.1s;\n}\n.data-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.data-table .empty-row {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 32px;\n}\n.data-table .inactive-row {\n  opacity: 0.5;\n}\n.actions-cell {\n  display: flex;\n  gap: 6px;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.text-mono {\n  font-family: monospace;\n  font-size: 12px;\n}\n.select-group {\n  width: auto;\n  min-width: 180px;\n}\n.badge-active {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-active.inactive {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.badge-code {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-size: 11px;\n  font-family: monospace;\n  border: 1px solid var(--border);\n}\n.badge-system {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-custom {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-warn {\n  display: inline-block;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  background: var(--warning-bg);\n  color: var(--warning);\n  margin-left: 4px;\n}\n.status-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.status-badge.active {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: transparent;\n}\n.role-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.role-badge.role-SUPER_ADMIN {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: transparent;\n}\n.role-badge.role-ADMIN {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: transparent;\n}\n.role-badge.role-SUPER_AUDITEUR {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: transparent;\n}\n.role-badge.role-AUDITEUR {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: transparent;\n}\n.role-badge.role-CONTROLEUR {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: transparent;\n}\n.groups-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.group-card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.group-card.expanded {\n  border-color: var(--primary);\n}\n.group-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  cursor: pointer;\n  transition: var(--ease);\n}\n.group-header:hover {\n  background: var(--bg-hover);\n}\n.group-header .group-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.group-header .expand-icon {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.group-header .group-icon {\n  width: 36px;\n  height: 36px;\n  background: var(--primary);\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.group-header .group-icon .material-icons {\n  color: white;\n  font-size: 18px;\n}\n.group-header .group-name {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.group-header .group-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 2px;\n}\n.group-header .company-count {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.group-header .group-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.companies-body {\n  padding: 0 18px 18px;\n  border-top: 1px solid var(--border-light);\n}\n.companies-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 12px;\n}\n.companies-table th {\n  padding: 8px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.companies-table td {\n  padding: 10px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.companies-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.companies-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.company-name-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.company-name-cell .material-icons {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.no-company {\n  color: var(--text-muted);\n  padding: 16px 0;\n  font-size: 13px;\n}\n.user-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-avatar {\n  width: 34px;\n  height: 34px;\n  background: var(--primary);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.user-login {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.roles-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.role-card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  padding: 16px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.role-card.system-role {\n  border-left: 3px solid var(--info);\n}\n.role-card-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.role-icon {\n  font-size: 24px;\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.role-info {\n  flex: 1;\n}\n.role-info .role-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.role-info .role-code {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-family: monospace;\n}\n.role-badges {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-items: flex-end;\n}\n.system-note {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.perm-summary {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.perm-chip {\n  padding: 2px 8px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border-radius: 10px;\n  font-size: 11px;\n  border: 1px solid var(--border);\n}\n.role-card-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 6px;\n  margin-top: 4px;\n}\n.perm-table-wrap {\n  overflow-x: auto;\n}\n.perm-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.perm-table th,\n.perm-table td {\n  padding: 8px 13px;\n  border: 1px solid var(--border);\n  font-size: 13px;\n}\n.perm-table th {\n  background: var(--bg-elevated);\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.perm-table .mod-cell {\n  font-weight: 600;\n  font-size: 13px;\n  color: var(--primary);\n}\n.perm-table .text-center {\n  text-align: center;\n}\n.perm-table .col-resource {\n  min-width: 180px;\n  text-align: left;\n}\n.perm-table .col-action {\n  min-width: 72px;\n  text-align: center;\n}\n.perm-table .col-all {\n  min-width: 56px;\n  text-align: center;\n}\n.perm-table .module-header-row {\n  background: var(--bg-elevated);\n}\n.perm-table .module-header-row td {\n  border-top: 2px solid var(--border);\n}\n.perm-table .module-header-cell {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--primary);\n  padding: 10px 13px;\n}\n.perm-table .module-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--primary);\n  flex-shrink: 0;\n}\n.perm-table .module-action-cell {\n  background: var(--bg-elevated);\n}\n.perm-table .partial-badge {\n  display: inline-block;\n  padding: 1px 6px;\n  border-radius: 8px;\n  background: var(--warning-bg);\n  color: var(--warning);\n  font-size: 10px;\n  font-weight: 600;\n}\n.perm-table .resource-row {\n  background: var(--bg-surface);\n}\n.perm-table .resource-row:hover {\n  background: var(--bg-hover);\n}\n.perm-table .res-cell {\n  padding-left: 24px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.perm-table .res-indent {\n  color: var(--text-muted);\n  margin-right: 4px;\n  font-size: 12px;\n}\n.perm-section-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n}\n.perm-section-title .material-icons {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.modal-perm {\n  width: 860px;\n}\n.info-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 13px;\n  background: var(--info-bg);\n  color: var(--info);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n}\n.info-banner .material-icons {\n  font-size: 16px;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-light);\n  width: 480px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-xl);\n}\n.modal.modal-lg {\n  width: 640px;\n}\n.modal.modal-xl {\n  width: 780px;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 17px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header h3 {\n  font-size: 15.5px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.modal-footer {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border-light);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  background: var(--bg-elevated);\n}\n/*# sourceMappingURL=roles.component.css.map */\n'] }]
  }], () => [{ type: ConfigService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesComponent, { className: "RolesComponent", filePath: "app/modules/config/components/roles/roles.component.ts", lineNumber: 17 });
})();
export {
  RolesComponent
};
//# sourceMappingURL=chunk-KIEJK6AB.js.map
