import {
  ConfigService
} from "./chunk-Y6UTENYI.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-NRXD6HPP.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/config/components/groups/groups.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function GroupsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 3);
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
function GroupsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 3);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 26);
    \u0275\u0275listener("click", function GroupsComponent_Conditional_14_Template_button_click_4_listener() {
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
function GroupsComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.keyVisible ? ctx_r0.myApiKey : "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022");
  }
}
function GroupsComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function GroupsComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 27);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function GroupsComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 3);
    \u0275\u0275text(2, "share");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune agence distante configur\xE9e.");
    \u0275\u0275elementEnd()();
  }
}
function GroupsComponent_Conditional_56_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r4.location);
  }
}
function GroupsComponent_Conditional_56_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "Connect\xE9e");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", a_r4.pingUrl || "");
  }
}
function GroupsComponent_Conditional_56_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, " Injoignable ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", (a_r4.pingUrl || "") + (a_r4.pingError ? " \xB7 " + a_r4.pingError : ""));
  }
}
function GroupsComponent_Conditional_56_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "span", 3);
    \u0275\u0275text(5, "share");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "div", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 33)(10, "span", 34);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 35);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, GroupsComponent_Conditional_56_For_2_Conditional_14_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 36);
    \u0275\u0275conditionalCreate(16, GroupsComponent_Conditional_56_For_2_Conditional_16_Template, 2, 1, "span", 37);
    \u0275\u0275conditionalCreate(17, GroupsComponent_Conditional_56_For_2_Conditional_17_Template, 2, 1, "span", 38);
    \u0275\u0275elementStart(18, "span", 39);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 40);
    \u0275\u0275listener("click", function GroupsComponent_Conditional_56_For_2_Template_button_click_20_listener() {
      const a_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.ping(a_r4));
    });
    \u0275\u0275elementStart(21, "span", 3);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 41);
    \u0275\u0275listener("click", function GroupsComponent_Conditional_56_For_2_Template_button_click_23_listener() {
      const a_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(a_r4));
    });
    \u0275\u0275elementStart(24, "span", 3);
    \u0275\u0275text(25, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 16);
    \u0275\u0275listener("click", function GroupsComponent_Conditional_56_For_2_Template_button_click_26_listener() {
      const a_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggle(a_r4));
    });
    \u0275\u0275elementStart(27, "span", 3);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 42);
    \u0275\u0275listener("click", function GroupsComponent_Conditional_56_For_2_Template_button_click_29_listener() {
      const a_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.delete(a_r4));
    });
    \u0275\u0275elementStart(30, "span", 3);
    \u0275\u0275text(31, "delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(a_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r4.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", a_r4.host, ":", a_r4.port);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r4.location ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r4.reachable === true ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r4.reachable === false ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("inactive", !a_r4.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r4.active ? "Actif" : "Inactif");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.pinging === a_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.pinging === a_r4.id ? "hourglass_empty" : "wifi_tethering");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275interpolate(a_r4.active ? "D\xE9sactiver" : "Activer"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.active ? "toggle_on" : "toggle_off");
  }
}
function GroupsComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, GroupsComponent_Conditional_56_For_2_Template, 32, 15, "div", 28, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.agencies);
  }
}
function GroupsComponent_Conditional_57_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "label", 64)(2, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function GroupsComponent_Conditional_57_Conditional_58_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.form.active, $event) || (ctx_r0.form.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Agence active ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.active);
  }
}
function GroupsComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function GroupsComponent_Conditional_57_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275elementStart(1, "div", 44);
    \u0275\u0275listener("click", function GroupsComponent_Conditional_57_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 45)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 46);
    \u0275\u0275listener("click", function GroupsComponent_Conditional_57_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275elementStart(6, "span", 3);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 47)(9, "div", 48)(10, "div", 49)(11, "label");
    \u0275\u0275text(12, "Nom ");
    \u0275\u0275elementStart(13, "span", 50);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function GroupsComponent_Conditional_57_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.name, $event) || (ctx_r0.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 49)(17, "label");
    \u0275\u0275text(18, "Code ");
    \u0275\u0275elementStart(19, "span", 50);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function GroupsComponent_Conditional_57_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.code, $event) || (ctx_r0.form.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 49)(23, "label");
    \u0275\u0275text(24, "H\xF4te / IP ");
    \u0275\u0275elementStart(25, "span", 50);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function GroupsComponent_Conditional_57_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.host, $event) || (ctx_r0.form.host = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 49)(29, "label");
    \u0275\u0275text(30, "Port ");
    \u0275\u0275elementStart(31, "span", 50);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function GroupsComponent_Conditional_57_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.port, $event) || (ctx_r0.form.port = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 55)(35, "label");
    \u0275\u0275text(36, "Cl\xE9 API");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function GroupsComponent_Conditional_57_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.apiKey, $event) || (ctx_r0.form.apiKey = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 49)(39, "label");
    \u0275\u0275text(40, "Localisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function GroupsComponent_Conditional_57_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.location, $event) || (ctx_r0.form.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 49)(43, "label");
    \u0275\u0275text(44, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function GroupsComponent_Conditional_57_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.contactPerson, $event) || (ctx_r0.form.contactPerson = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 49)(47, "label");
    \u0275\u0275text(48, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function GroupsComponent_Conditional_57_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.phone, $event) || (ctx_r0.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 49)(51, "label");
    \u0275\u0275text(52, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function GroupsComponent_Conditional_57_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.email, $event) || (ctx_r0.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 55)(55, "label");
    \u0275\u0275text(56, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "textarea", 61);
    \u0275\u0275twoWayListener("ngModelChange", function GroupsComponent_Conditional_57_Template_textarea_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.notes, $event) || (ctx_r0.form.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(58, GroupsComponent_Conditional_57_Conditional_58_Template, 4, 1, "div", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 62)(60, "button", 63);
    \u0275\u0275listener("click", function GroupsComponent_Conditional_57_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275text(61, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 5);
    \u0275\u0275listener("click", function GroupsComponent_Conditional_57_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275elementStart(63, "span", 3);
    \u0275\u0275text(64, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, " Enregistrer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.editingAgency ? "Modifier l'agence" : "Nouvelle agence distante");
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.code);
    \u0275\u0275property("disabled", !!ctx_r0.editingAgency);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.host);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.port);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.apiKey);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.location);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.contactPerson);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.notes);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.editingAgency ? 58 : -1);
  }
}
var GroupsComponent = class _GroupsComponent {
  constructor(configService) {
    this.configService = configService;
    this.agencies = [];
    this.loading = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.pinging = null;
    this.showModal = false;
    this.editingAgency = null;
    this.form = {};
    this.myApiKey = null;
    this.keyVisible = false;
    this.regenerating = false;
    this.hubUrl = "";
    this.savingHubUrl = false;
  }
  ngOnInit() {
    this.load();
    this.loadMyKey();
    this.loadHubUrl();
  }
  loadHubUrl() {
    this.configService.getHubUrl().subscribe({
      next: (r) => this.hubUrl = r.hubUrl,
      error: () => {
      }
    });
  }
  saveHubUrl() {
    if (!this.hubUrl.trim())
      return;
    this.savingHubUrl = true;
    this.configService.setHubUrl(this.hubUrl.trim()).subscribe({
      next: (r) => {
        this.hubUrl = r.hubUrl;
        this.savingHubUrl = false;
        this.showSuccess("Adresse du Hub enregistr\xE9e");
      },
      error: () => {
        this.savingHubUrl = false;
        this.errorMsg = "Erreur lors de l'enregistrement";
      }
    });
  }
  loadMyKey() {
    this.configService.getInterAgencyKey().subscribe({
      next: (r) => this.myApiKey = r.apiKey,
      error: () => {
      }
    });
  }
  regenerateKey() {
    if (!confirm("R\xE9g\xE9n\xE9rer la cl\xE9 ? Toutes les agences distantes devront \xEAtre reconfigur\xE9es avec la nouvelle cl\xE9."))
      return;
    this.regenerating = true;
    this.configService.regenerateInterAgencyKey().subscribe({
      next: (r) => {
        this.myApiKey = r.apiKey;
        this.keyVisible = true;
        this.regenerating = false;
        this.showSuccess("Nouvelle cl\xE9 g\xE9n\xE9r\xE9e \u2014 copiez-la avant de fermer");
      },
      error: () => {
        this.regenerating = false;
        this.errorMsg = "Erreur lors de la r\xE9g\xE9n\xE9ration";
      }
    });
  }
  copyKey() {
    if (!this.myApiKey)
      return;
    navigator.clipboard.writeText(this.myApiKey).then(() => this.showSuccess("Cl\xE9 copi\xE9e dans le presse-papier"));
  }
  load() {
    this.loading = true;
    this.configService.getRemoteAgencies(true).subscribe({
      next: (data) => {
        this.agencies = data;
        this.loading = false;
      },
      error: () => {
        this.errorMsg = "Erreur de chargement";
        this.loading = false;
      }
    });
  }
  openCreate() {
    this.editingAgency = null;
    this.form = { active: true, port: 8085 };
    this.showModal = true;
  }
  openEdit(a) {
    this.editingAgency = a;
    this.form = {
      name: a.name,
      code: a.code,
      host: a.host,
      port: a.port,
      apiKey: a.apiKey,
      location: a.location,
      contactPerson: a.contactPerson,
      phone: a.phone,
      email: a.email,
      notes: a.notes,
      active: a.active
    };
    this.showModal = true;
  }
  save() {
    if (!this.form.name || !this.form.code || !this.form.host || !this.form.port) {
      this.errorMsg = "Nom, code, h\xF4te et port sont requis";
      return;
    }
    const obs = this.editingAgency?.id ? this.configService.updateRemoteAgency(this.editingAgency.id, this.form) : this.configService.createRemoteAgency(this.form);
    obs.subscribe({
      next: () => {
        this.showModal = false;
        this.showSuccess("Agence sauvegard\xE9e");
        this.load();
      },
      error: (e) => {
        this.errorMsg = e.error?.message || "Erreur lors de la sauvegarde";
      }
    });
  }
  toggle(a) {
    this.configService.toggleRemoteAgency(a.id).subscribe({
      next: () => {
        this.showSuccess("Statut mis \xE0 jour");
        this.load();
      },
      error: () => {
        this.errorMsg = "Erreur";
      }
    });
  }
  ping(a) {
    this.pinging = a.id;
    this.configService.pingRemoteAgency(a.id).subscribe({
      next: (res) => {
        this.pinging = null;
        a.reachable = res.reachable;
        a.pingUrl = res.pingUrl;
        a.pingError = res.pingError;
        if (res.reachable) {
          this.showSuccess(`${a.name} : connect\xE9e \u2014 ${res.pingUrl}`);
        } else {
          this.errorMsg = `${a.name} injoignable \u2014 URL test\xE9e : ${res.pingUrl}${res.pingError ? " \xB7 " + res.pingError : ""}`;
        }
      },
      error: () => {
        this.pinging = null;
        this.errorMsg = "Erreur de test";
      }
    });
  }
  delete(a) {
    if (!confirm(`Supprimer l'agence "${a.name}" ?`))
      return;
    this.configService.deleteRemoteAgency(a.id).subscribe({
      next: () => {
        this.showSuccess("Agence supprim\xE9e");
        this.load();
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
    this.\u0275fac = function GroupsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GroupsComponent)(\u0275\u0275directiveInject(ConfigService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupsComponent, selectors: [["app-config-groups"]], decls: 58, vars: 13, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "page-sub"], [1, "btn-primary", 3, "click"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"], [1, "settings-grid"], [1, "settings-card"], [1, "settings-card-header"], [1, "material-icons", "settings-icon"], [1, "settings-card-title"], [1, "settings-hint"], [1, "settings-actions"], ["title", "Copier la cl\xE9", 1, "btn-icon", 3, "click"], [1, "btn-icon", 3, "click", "title"], [1, "settings-card-body"], [1, "key-display"], [1, "text-muted"], [1, "btn-secondary", "btn-sm", 3, "click", "disabled"], ["type", "text", "placeholder", "https://hub.mondomaine.com ou http://51.75.248.25:8090", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "loading"], [1, "empty-state"], [1, "groups-list"], [1, "modal-backdrop"], [3, "click"], [1, "material-icons", "spin"], [1, "group-card"], [1, "group-header"], [1, "group-left"], [1, "group-icon"], [1, "group-name"], [1, "group-meta"], [1, "badge-code"], [1, "company-count"], [1, "group-actions"], [1, "badge-active", 3, "title"], [1, "badge-active", "inactive", 3, "title"], [1, "badge-active"], ["title", "Tester la connexion", 1, "btn-icon", 3, "click", "disabled"], ["title", "Modifier", 1, "btn-icon", 3, "click"], ["title", "Supprimer", 1, "btn-icon", "btn-danger", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal", "modal-lg", 3, "click"], [1, "modal-header"], [1, "btn-icon", 3, "click"], [1, "modal-body"], [1, "form-grid"], [1, "form-group"], [1, "req"], ["type", "text", "placeholder", "Ex: Agence de Douala", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ex: DLA", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["type", "text", "placeholder", "Ex: 192.168.1.10", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Ex: 8085", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "form-full"], ["type", "text", "placeholder", "Cl\xE9 d'authentification inter-agences", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ex: Douala", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Nom du responsable", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "toggle-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"]], template: function GroupsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2)(4, "span", 3);
        \u0275\u0275text(5, "share");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Agences distantes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Configurez les agences accessibles via API pour les transferts inter-agences");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 5);
        \u0275\u0275listener("click", function GroupsComponent_Template_button_click_9_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275elementStart(10, "span", 3);
        \u0275\u0275text(11, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Nouvelle agence ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(13, GroupsComponent_Conditional_13_Template, 4, 1, "div", 6);
        \u0275\u0275conditionalCreate(14, GroupsComponent_Conditional_14_Template, 6, 1, "div", 7);
        \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "div", 10)(18, "span", 11);
        \u0275\u0275text(19, "vpn_key");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 12)(21, "strong");
        \u0275\u0275text(22, "Cl\xE9 API de ce spoke");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 13);
        \u0275\u0275text(24, "Donnez cette cl\xE9 aux autres agences pour qu'elles puissent se connecter");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 14)(26, "button", 15);
        \u0275\u0275listener("click", function GroupsComponent_Template_button_click_26_listener() {
          return ctx.copyKey();
        });
        \u0275\u0275elementStart(27, "span", 3);
        \u0275\u0275text(28, "content_copy");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "button", 16);
        \u0275\u0275listener("click", function GroupsComponent_Template_button_click_29_listener() {
          return ctx.keyVisible = !ctx.keyVisible;
        });
        \u0275\u0275elementStart(30, "span", 3);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(32, "div", 17);
        \u0275\u0275conditionalCreate(33, GroupsComponent_Conditional_33_Template, 2, 1, "code", 18)(34, GroupsComponent_Conditional_34_Template, 2, 0, "span", 19);
        \u0275\u0275elementStart(35, "button", 20);
        \u0275\u0275listener("click", function GroupsComponent_Template_button_click_35_listener() {
          return ctx.regenerateKey();
        });
        \u0275\u0275elementStart(36, "span", 3);
        \u0275\u0275text(37, "refresh");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 9)(40, "div", 10)(41, "span", 11);
        \u0275\u0275text(42, "hub");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 12)(44, "strong");
        \u0275\u0275text(45, "Connexion au Hub");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "span", 13);
        \u0275\u0275text(47, "Adresse utilis\xE9e pour l'activation/v\xE9rification de licence et le helpdesk");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 17)(49, "input", 21);
        \u0275\u0275twoWayListener("ngModelChange", function GroupsComponent_Template_input_ngModelChange_49_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.hubUrl, $event) || (ctx.hubUrl = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 20);
        \u0275\u0275listener("click", function GroupsComponent_Template_button_click_50_listener() {
          return ctx.saveHubUrl();
        });
        \u0275\u0275elementStart(51, "span", 3);
        \u0275\u0275text(52, "save");
        \u0275\u0275elementEnd();
        \u0275\u0275text(53);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(54, GroupsComponent_Conditional_54_Template, 4, 0, "div", 22)(55, GroupsComponent_Conditional_55_Template, 5, 0, "div", 23)(56, GroupsComponent_Conditional_56_Template, 3, 0, "div", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(57, GroupsComponent_Conditional_57_Template, 66, 13, "div", 25);
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.successMsg ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 14 : -1);
        \u0275\u0275advance(15);
        \u0275\u0275property("title", \u0275\u0275interpolate(ctx.keyVisible ? "Masquer" : "Afficher"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.keyVisible ? "visibility_off" : "visibility");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.myApiKey ? 33 : 34);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.regenerating);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.regenerating ? "G\xE9n\xE9ration..." : "R\xE9g\xE9n\xE9rer", " ");
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.hubUrl);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.savingHubUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.savingHubUrl ? "Enregistrement..." : "Enregistrer", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 54 : ctx.agencies.length === 0 ? 55 : 56);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showModal ? 57 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--primary);\n}\n.page-header[_ngcontent-%COMP%]   .page-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 16px;\n  font-size: 13.5px;\n  border: 1px solid transparent;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  opacity: 0.6;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: rgba(220, 38, 38, 0.2);\n}\n.alert.alert-warning[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.alert.alert-info[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: rgba(3, 105, 161, 0.2);\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.3;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 13.5px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-primary.btn-sm[_ngcontent-%COMP%], \n.btn-secondary.btn-sm[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.btn-primary.btn-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary.btn-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.btn-danger-icon[_ngcontent-%COMP%] {\n  color: var(--danger);\n  border-color: var(--danger);\n}\n.btn-icon.btn-danger-icon[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  box-sizing: border-box;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 13px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 13px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n  color: var(--text-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.1s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 32px;\n}\n.data-table[_ngcontent-%COMP%]   .inactive-row[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.text-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n}\n.select-group[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 180px;\n}\n.badge-active[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-active.inactive[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.badge-code[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-size: 11px;\n  font-family: monospace;\n  border: 1px solid var(--border);\n}\n.badge-system[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-custom[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-warn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  background: var(--warning-bg);\n  color: var(--warning);\n  margin-left: 4px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: transparent;\n}\n.role-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.role-badge.role-SUPER_ADMIN[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: transparent;\n}\n.role-badge.role-ADMIN[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: transparent;\n}\n.role-badge.role-SUPER_AUDITEUR[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: transparent;\n}\n.role-badge.role-AUDITEUR[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: transparent;\n}\n.role-badge.role-CONTROLEUR[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: transparent;\n}\n.groups-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.group-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.group-card.expanded[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n}\n.group-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  cursor: pointer;\n  transition: var(--ease);\n}\n.group-header[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.group-header[_ngcontent-%COMP%]   .group-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.group-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.group-header[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: var(--primary);\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.group-header[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n}\n.group-header[_ngcontent-%COMP%]   .group-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.group-header[_ngcontent-%COMP%]   .group-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 2px;\n}\n.group-header[_ngcontent-%COMP%]   .company-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.group-header[_ngcontent-%COMP%]   .group-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.companies-body[_ngcontent-%COMP%] {\n  padding: 0 18px 18px;\n  border-top: 1px solid var(--border-light);\n}\n.companies-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 12px;\n}\n.companies-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.companies-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.companies-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.companies-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.company-name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.company-name-cell[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.no-company[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  padding: 16px 0;\n  font-size: 13px;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: var(--primary);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.user-login[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.roles-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.role-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  padding: 16px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.role-card.system-role[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--info);\n}\n.role-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.role-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.role-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.role-info[_ngcontent-%COMP%]   .role-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.role-info[_ngcontent-%COMP%]   .role-code[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-family: monospace;\n}\n.role-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-items: flex-end;\n}\n.system-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.perm-summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.perm-chip[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border-radius: 10px;\n  font-size: 11px;\n  border: 1px solid var(--border);\n}\n.role-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 6px;\n  margin-top: 4px;\n}\n.perm-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.perm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.perm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.perm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 13px;\n  border: 1px solid var(--border);\n  font-size: 13px;\n}\n.perm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.perm-table[_ngcontent-%COMP%]   .mod-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  color: var(--primary);\n}\n.perm-table[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.perm-table[_ngcontent-%COMP%]   .col-resource[_ngcontent-%COMP%] {\n  min-width: 180px;\n  text-align: left;\n}\n.perm-table[_ngcontent-%COMP%]   .col-action[_ngcontent-%COMP%] {\n  min-width: 72px;\n  text-align: center;\n}\n.perm-table[_ngcontent-%COMP%]   .col-all[_ngcontent-%COMP%] {\n  min-width: 56px;\n  text-align: center;\n}\n.perm-table[_ngcontent-%COMP%]   .module-header-row[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\n.perm-table[_ngcontent-%COMP%]   .module-header-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--border);\n}\n.perm-table[_ngcontent-%COMP%]   .module-header-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--primary);\n  padding: 10px 13px;\n}\n.perm-table[_ngcontent-%COMP%]   .module-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--primary);\n  flex-shrink: 0;\n}\n.perm-table[_ngcontent-%COMP%]   .module-action-cell[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\n.perm-table[_ngcontent-%COMP%]   .partial-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1px 6px;\n  border-radius: 8px;\n  background: var(--warning-bg);\n  color: var(--warning);\n  font-size: 10px;\n  font-weight: 600;\n}\n.perm-table[_ngcontent-%COMP%]   .resource-row[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n}\n.perm-table[_ngcontent-%COMP%]   .resource-row[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.perm-table[_ngcontent-%COMP%]   .res-cell[_ngcontent-%COMP%] {\n  padding-left: 24px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.perm-table[_ngcontent-%COMP%]   .res-indent[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-right: 4px;\n  font-size: 12px;\n}\n.perm-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n}\n.perm-section-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.modal-perm[_ngcontent-%COMP%] {\n  width: 860px;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 13px;\n  background: var(--info-bg);\n  color: var(--info);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n}\n.info-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-light);\n  width: 480px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-xl);\n}\n.modal.modal-lg[_ngcontent-%COMP%] {\n  width: 640px;\n}\n.modal.modal-xl[_ngcontent-%COMP%] {\n  width: 780px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 17px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15.5px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border-light);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  background: var(--bg-elevated);\n}\n.settings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.settings-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  padding: 16px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.settings-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.settings-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--primary);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.settings-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n  min-width: 0;\n}\n.settings-card-title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.settings-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  line-height: 1.4;\n}\n.settings-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.settings-card-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.settings-card-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.key-display[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 8px 12px;\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 12.5px;\n  color: var(--text-primary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=groups.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupsComponent, [{
    type: Component,
    args: [{ selector: "app-config-groups", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div>
      <h1 class="page-title"><span class="material-icons">share</span> Agences distantes</h1>
      <p class="page-sub">Configurez les agences accessibles via API pour les transferts inter-agences</p>
    </div>
    <button class="btn-primary" (click)="openCreate()">
      <span class="material-icons">add</span> Nouvelle agence
    </button>
  </div>

  @if (successMsg) { <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div> }
  @if (errorMsg)   { <div class="alert alert-danger"><span class="material-icons">error</span> {{ errorMsg }} <button (click)="errorMsg=''">\xD7</button></div> }

  <div class="settings-grid">
    <!-- \u2500\u2500 Cl\xE9 API de ce spoke \u2500\u2500 -->
    <div class="settings-card">
      <div class="settings-card-header">
        <span class="material-icons settings-icon">vpn_key</span>
        <div class="settings-card-title">
          <strong>Cl\xE9 API de ce spoke</strong>
          <span class="settings-hint">Donnez cette cl\xE9 aux autres agences pour qu'elles puissent se connecter</span>
        </div>
        <div class="settings-actions">
          <button class="btn-icon" (click)="copyKey()" title="Copier la cl\xE9">
            <span class="material-icons">content_copy</span>
          </button>
          <button class="btn-icon" (click)="keyVisible = !keyVisible" title="{{ keyVisible ? 'Masquer' : 'Afficher' }}">
            <span class="material-icons">{{ keyVisible ? 'visibility_off' : 'visibility' }}</span>
          </button>
        </div>
      </div>
      <div class="settings-card-body">
        @if (myApiKey) {
          <code class="key-display">{{ keyVisible ? myApiKey : '\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022' }}</code>
        } @else {
          <span class="text-muted">Chargement...</span>
        }
        <button class="btn-secondary btn-sm" (click)="regenerateKey()" [disabled]="regenerating">
          <span class="material-icons">refresh</span> {{ regenerating ? 'G\xE9n\xE9ration...' : 'R\xE9g\xE9n\xE9rer' }}
        </button>
      </div>
    </div>

    <!-- \u2500\u2500 Connexion au Hub \u2500\u2500 -->
    <div class="settings-card">
      <div class="settings-card-header">
        <span class="material-icons settings-icon">hub</span>
        <div class="settings-card-title">
          <strong>Connexion au Hub</strong>
          <span class="settings-hint">Adresse utilis\xE9e pour l'activation/v\xE9rification de licence et le helpdesk</span>
        </div>
      </div>
      <div class="settings-card-body">
        <input type="text" class="form-control" [(ngModel)]="hubUrl"
               placeholder="https://hub.mondomaine.com ou http://51.75.248.25:8090" />
        <button class="btn-secondary btn-sm" (click)="saveHubUrl()" [disabled]="savingHubUrl">
          <span class="material-icons">save</span> {{ savingHubUrl ? 'Enregistrement...' : 'Enregistrer' }}
        </button>
      </div>
    </div>
  </div>

  @if (loading) {
    <div class="loading"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else if (agencies.length === 0) {
    <div class="empty-state">
      <span class="material-icons">share</span>
      <p>Aucune agence distante configur\xE9e.</p>
    </div>
  } @else {
    <div class="groups-list">
      @for (a of agencies; track a.id) {
        <div class="group-card">
          <div class="group-header">
            <div class="group-left">
              <div class="group-icon"><span class="material-icons">share</span></div>
              <div>
                <div class="group-name">{{ a.name }}</div>
                <div class="group-meta">
                  <span class="badge-code">{{ a.code }}</span>
                  <span class="company-count">{{ a.host }}:{{ a.port }}</span>
                  @if (a.location) { <span class="company-count">{{ a.location }}</span> }
                </div>
              </div>
            </div>
            <div class="group-actions">
              @if (a.reachable === true) { <span class="badge-active" [title]="a.pingUrl || ''">Connect\xE9e</span> }
              @if (a.reachable === false) {
                <span class="badge-active inactive" [title]="(a.pingUrl || '') + (a.pingError ? ' \xB7 ' + a.pingError : '')">
                  Injoignable
                </span>
              }
              <span class="badge-active" [class.inactive]="!a.active">{{ a.active ? 'Actif' : 'Inactif' }}</span>
              <button class="btn-icon" (click)="ping(a)" [disabled]="pinging === a.id" title="Tester la connexion">
                <span class="material-icons">{{ pinging === a.id ? 'hourglass_empty' : 'wifi_tethering' }}</span>
              </button>
              <button class="btn-icon" (click)="openEdit(a)" title="Modifier">
                <span class="material-icons">edit</span>
              </button>
              <button class="btn-icon" (click)="toggle(a)" title="{{ a.active ? 'D\xE9sactiver' : 'Activer' }}">
                <span class="material-icons">{{ a.active ? 'toggle_on' : 'toggle_off' }}</span>
              </button>
              <button class="btn-icon btn-danger" (click)="delete(a)" title="Supprimer">
                <span class="material-icons">delete</span>
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  }
</div>

<!-- Modal Agence distante -->
@if (showModal) {
  <div class="modal-backdrop" (click)="showModal=false">
    <div class="modal modal-lg" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3>{{ editingAgency ? 'Modifier l\\'agence' : 'Nouvelle agence distante' }}</h3>
        <button class="btn-icon" (click)="showModal=false"><span class="material-icons">close</span></button>
      </div>
      <div class="modal-body">
        <div class="form-grid">
          <div class="form-group">
            <label>Nom <span class="req">*</span></label>
            <input type="text" [(ngModel)]="form.name" class="form-control" placeholder="Ex: Agence de Douala" />
          </div>
          <div class="form-group">
            <label>Code <span class="req">*</span></label>
            <input type="text" [(ngModel)]="form.code" class="form-control" placeholder="Ex: DLA" [disabled]="!!editingAgency" />
          </div>
          <div class="form-group">
            <label>H\xF4te / IP <span class="req">*</span></label>
            <input type="text" [(ngModel)]="form.host" class="form-control" placeholder="Ex: 192.168.1.10" />
          </div>
          <div class="form-group">
            <label>Port <span class="req">*</span></label>
            <input type="number" [(ngModel)]="form.port" class="form-control" placeholder="Ex: 8085" />
          </div>
          <div class="form-group form-full">
            <label>Cl\xE9 API</label>
            <input type="text" [(ngModel)]="form.apiKey" class="form-control" placeholder="Cl\xE9 d'authentification inter-agences" />
          </div>
          <div class="form-group">
            <label>Localisation</label>
            <input type="text" [(ngModel)]="form.location" class="form-control" placeholder="Ex: Douala" />
          </div>
          <div class="form-group">
            <label>Contact</label>
            <input type="text" [(ngModel)]="form.contactPerson" class="form-control" placeholder="Nom du responsable" />
          </div>
          <div class="form-group">
            <label>T\xE9l\xE9phone</label>
            <input type="text" [(ngModel)]="form.phone" class="form-control" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" [(ngModel)]="form.email" class="form-control" />
          </div>
          <div class="form-group form-full">
            <label>Notes</label>
            <textarea [(ngModel)]="form.notes" class="form-control" rows="2"></textarea>
          </div>
          @if (editingAgency) {
            <div class="form-group">
              <label class="toggle-label">
                <input type="checkbox" [(ngModel)]="form.active" /> Agence active
              </label>
            </div>
          }
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-secondary" (click)="showModal=false">Annuler</button>
        <button class="btn-primary" (click)="save()">
          <span class="material-icons">save</span> Enregistrer
        </button>
      </div>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/config/components/groups/groups.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.page-header .page-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header .page-title .material-icons {\n  font-size: 24px;\n  color: var(--primary);\n}\n.page-header .page-sub {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 16px;\n  font-size: 13.5px;\n  border: 1px solid transparent;\n}\n.alert .material-icons {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.alert button {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  opacity: 0.6;\n}\n.alert.alert-success {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: rgba(220, 38, 38, 0.2);\n}\n.alert.alert-warning {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.alert.alert-info {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: rgba(3, 105, 161, 0.2);\n}\n.loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.3;\n}\n.empty-state p {\n  font-size: 15px;\n  margin: 0;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 13.5px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n  border: none;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-primary.btn-sm,\n.btn-secondary.btn-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.btn-primary.btn-sm .material-icons,\n.btn-secondary.btn-sm .material-icons {\n  font-size: 14px;\n}\n.btn-primary {\n  background: var(--primary);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-secondary {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-icon .material-icons {\n  font-size: 16px;\n}\n.btn-icon:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.btn-danger-icon {\n  color: var(--danger);\n  border-color: var(--danger);\n}\n.btn-icon.btn-danger-icon:hover {\n  background: var(--danger-bg);\n}\n.form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  box-sizing: border-box;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.form-control:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.form-control::placeholder {\n  color: var(--text-muted);\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group label {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group .req {\n  color: var(--danger);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid .form-full {\n  grid-column: 1/-1;\n}\n.toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.toggle-label input {\n  cursor: pointer;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 9px 13px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.data-table td {\n  padding: 11px 13px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n  color: var(--text-primary);\n}\n.data-table tbody tr {\n  transition: background 0.1s;\n}\n.data-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.data-table .empty-row {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 32px;\n}\n.data-table .inactive-row {\n  opacity: 0.5;\n}\n.actions-cell {\n  display: flex;\n  gap: 6px;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.text-mono {\n  font-family: monospace;\n  font-size: 12px;\n}\n.select-group {\n  width: auto;\n  min-width: 180px;\n}\n.badge-active {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-active.inactive {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.badge-code {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-size: 11px;\n  font-family: monospace;\n  border: 1px solid var(--border);\n}\n.badge-system {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-custom {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-warn {\n  display: inline-block;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  background: var(--warning-bg);\n  color: var(--warning);\n  margin-left: 4px;\n}\n.status-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.status-badge.active {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: transparent;\n}\n.role-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.role-badge.role-SUPER_ADMIN {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: transparent;\n}\n.role-badge.role-ADMIN {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: transparent;\n}\n.role-badge.role-SUPER_AUDITEUR {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: transparent;\n}\n.role-badge.role-AUDITEUR {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: transparent;\n}\n.role-badge.role-CONTROLEUR {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: transparent;\n}\n.groups-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.group-card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.group-card.expanded {\n  border-color: var(--primary);\n}\n.group-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  cursor: pointer;\n  transition: var(--ease);\n}\n.group-header:hover {\n  background: var(--bg-hover);\n}\n.group-header .group-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.group-header .expand-icon {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.group-header .group-icon {\n  width: 36px;\n  height: 36px;\n  background: var(--primary);\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.group-header .group-icon .material-icons {\n  color: white;\n  font-size: 18px;\n}\n.group-header .group-name {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.group-header .group-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 2px;\n}\n.group-header .company-count {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.group-header .group-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.companies-body {\n  padding: 0 18px 18px;\n  border-top: 1px solid var(--border-light);\n}\n.companies-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 12px;\n}\n.companies-table th {\n  padding: 8px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.companies-table td {\n  padding: 10px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.companies-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.companies-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.company-name-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.company-name-cell .material-icons {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.no-company {\n  color: var(--text-muted);\n  padding: 16px 0;\n  font-size: 13px;\n}\n.user-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-avatar {\n  width: 34px;\n  height: 34px;\n  background: var(--primary);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.user-login {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.roles-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.role-card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  padding: 16px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.role-card.system-role {\n  border-left: 3px solid var(--info);\n}\n.role-card-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.role-icon {\n  font-size: 24px;\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.role-info {\n  flex: 1;\n}\n.role-info .role-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.role-info .role-code {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-family: monospace;\n}\n.role-badges {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-items: flex-end;\n}\n.system-note {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.perm-summary {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.perm-chip {\n  padding: 2px 8px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border-radius: 10px;\n  font-size: 11px;\n  border: 1px solid var(--border);\n}\n.role-card-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 6px;\n  margin-top: 4px;\n}\n.perm-table-wrap {\n  overflow-x: auto;\n}\n.perm-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.perm-table th,\n.perm-table td {\n  padding: 8px 13px;\n  border: 1px solid var(--border);\n  font-size: 13px;\n}\n.perm-table th {\n  background: var(--bg-elevated);\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.perm-table .mod-cell {\n  font-weight: 600;\n  font-size: 13px;\n  color: var(--primary);\n}\n.perm-table .text-center {\n  text-align: center;\n}\n.perm-table .col-resource {\n  min-width: 180px;\n  text-align: left;\n}\n.perm-table .col-action {\n  min-width: 72px;\n  text-align: center;\n}\n.perm-table .col-all {\n  min-width: 56px;\n  text-align: center;\n}\n.perm-table .module-header-row {\n  background: var(--bg-elevated);\n}\n.perm-table .module-header-row td {\n  border-top: 2px solid var(--border);\n}\n.perm-table .module-header-cell {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--primary);\n  padding: 10px 13px;\n}\n.perm-table .module-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--primary);\n  flex-shrink: 0;\n}\n.perm-table .module-action-cell {\n  background: var(--bg-elevated);\n}\n.perm-table .partial-badge {\n  display: inline-block;\n  padding: 1px 6px;\n  border-radius: 8px;\n  background: var(--warning-bg);\n  color: var(--warning);\n  font-size: 10px;\n  font-weight: 600;\n}\n.perm-table .resource-row {\n  background: var(--bg-surface);\n}\n.perm-table .resource-row:hover {\n  background: var(--bg-hover);\n}\n.perm-table .res-cell {\n  padding-left: 24px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.perm-table .res-indent {\n  color: var(--text-muted);\n  margin-right: 4px;\n  font-size: 12px;\n}\n.perm-section-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n}\n.perm-section-title .material-icons {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.modal-perm {\n  width: 860px;\n}\n.info-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 13px;\n  background: var(--info-bg);\n  color: var(--info);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n}\n.info-banner .material-icons {\n  font-size: 16px;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-light);\n  width: 480px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-xl);\n}\n.modal.modal-lg {\n  width: 640px;\n}\n.modal.modal-xl {\n  width: 780px;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 17px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header h3 {\n  font-size: 15.5px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.modal-footer {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border-light);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  background: var(--bg-elevated);\n}\n.settings-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.settings-card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  padding: 16px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.settings-card-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.settings-icon {\n  font-size: 20px;\n  color: var(--primary);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.settings-card-title {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1;\n  min-width: 0;\n}\n.settings-card-title strong {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.settings-hint {\n  font-size: 12px;\n  color: var(--text-muted);\n  line-height: 1.4;\n}\n.settings-actions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.settings-card-body {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.settings-card-body .form-control {\n  flex: 1;\n  min-width: 0;\n}\n.key-display {\n  flex: 1;\n  min-width: 0;\n  padding: 8px 12px;\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 12.5px;\n  color: var(--text-primary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=groups.component.css.map */\n'] }]
  }], () => [{ type: ConfigService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupsComponent, { className: "GroupsComponent", filePath: "app/modules/config/components/groups/groups.component.ts", lineNumber: 13 });
})();
export {
  GroupsComponent
};
//# sourceMappingURL=chunk-HMPD5LYV.js.map
