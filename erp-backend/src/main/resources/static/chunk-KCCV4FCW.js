import {
  parseExcelFile
} from "./chunk-RZFOQ7J2.js";
import "./chunk-ZJANBOXO.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-NRXD6HPP.js";
import {
  AccountingService
} from "./chunk-PGZXUWCB.js";
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import {
  __async
} from "./chunk-KBUIKKCC.js";

// src/app/modules/accounting/components/chart-of-accounts/chart-of-accounts.component.ts
var _c0 = () => ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var _c1 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.cls;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.key;
var _forTrack3 = ($index, $item) => $item.value;
function ChartOfAccountsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 8);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMsg, " ");
  }
}
function ChartOfAccountsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg, " ");
  }
}
function ChartOfAccountsComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r2 = ctx.$implicit;
    \u0275\u0275property("value", cls_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Classe ", cls_r2);
  }
}
function ChartOfAccountsComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_43_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.expandAll());
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2, "unfold_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 29);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_43_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.collapseAll());
    });
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5, "unfold_less");
    \u0275\u0275elementEnd()();
  }
}
function ChartOfAccountsComponent_Conditional_44_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 30);
  }
}
function ChartOfAccountsComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, ChartOfAccountsComponent_Conditional_44_For_2_Template, 1, 0, "div", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function ChartOfAccountsComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 8);
    \u0275\u0275text(2, "manage_search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun compte trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function ChartOfAccountsComponent_Conditional_46_For_2_Conditional_15_For_18_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function ChartOfAccountsComponent_Conditional_46_For_2_Conditional_15_For_18_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "radio_button_unchecked");
    \u0275\u0275elementEnd();
  }
}
function ChartOfAccountsComponent_Conditional_46_For_2_Conditional_15_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 43);
    \u0275\u0275conditionalCreate(9, ChartOfAccountsComponent_Conditional_46_For_2_Conditional_15_For_18_Conditional_9_Template, 2, 0, "span", 48)(10, ChartOfAccountsComponent_Conditional_46_For_2_Conditional_15_For_18_Conditional_10_Template, 2, 0, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 43)(12, "span", 50);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 43)(15, "div", 51)(16, "button", 52);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_46_For_2_Conditional_15_For_18_Template_button_click_16_listener() {
      const acc_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openEdit(acc_r7));
    });
    \u0275\u0275elementStart(17, "span", 8);
    \u0275\u0275text(18, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 53);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_46_For_2_Conditional_15_For_18_Template_button_click_19_listener() {
      const acc_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.toggleDeprecated(acc_r7));
    });
    \u0275\u0275elementStart(20, "span", 8);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const acc_r7 = ctx.$implicit;
    const group_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row-deprecated", acc_r7.deprecated);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", group_r5.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(acc_r7.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acc_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getAccountTypeLabel(acc_r7.accountType));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(acc_r7.reconcile ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", !acc_r7.deprecated)("inactive", acc_r7.deprecated);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", acc_r7.deprecated ? "D\xE9sactiv\xE9" : "Actif", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("title", acc_r7.deprecated ? "Activer" : "D\xE9sactiver");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acc_r7.deprecated ? "toggle_off" : "toggle_on");
  }
}
function ChartOfAccountsComponent_Conditional_46_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "table", 42)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Intitul\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 43);
    \u0275\u0275text(11, "Lettrage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 43);
    \u0275\u0275text(13, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 43);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, ChartOfAccountsComponent_Conditional_46_For_2_Conditional_15_For_18_Template, 22, 15, "tr", 44, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(17);
    \u0275\u0275repeater(group_r5.accounts);
  }
}
function ChartOfAccountsComponent_Conditional_46_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_46_For_2_Template_div_click_1_listener() {
      const group_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleClass(group_r5.cls));
    });
    \u0275\u0275elementStart(2, "div", 33)(3, "div", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 35)(6, "span", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 37);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 38)(11, "span", 39);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 40);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(15, ChartOfAccountsComponent_Conditional_46_For_2_Conditional_15_Template, 19, 0, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", group_r5.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r5.cls);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Classe ", group_r5.cls);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r5.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", group_r5.accounts.length, " compte(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.expandedClasses.has(group_r5.cls) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.expandedClasses.has(group_r5.cls) ? 15 : -1);
  }
}
function ChartOfAccountsComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, ChartOfAccountsComponent_Conditional_46_For_2_Template, 16, 8, "div", 31, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.classGroups);
  }
}
function ChartOfAccountsComponent_Conditional_47_For_20_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function ChartOfAccountsComponent_Conditional_47_For_20_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "radio_button_unchecked");
    \u0275\u0275elementEnd();
  }
}
function ChartOfAccountsComponent_Conditional_47_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 54);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 43);
    \u0275\u0275conditionalCreate(11, ChartOfAccountsComponent_Conditional_47_For_20_Conditional_11_Template, 2, 0, "span", 48)(12, ChartOfAccountsComponent_Conditional_47_For_20_Conditional_12_Template, 2, 0, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 43)(14, "span", 50);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 43)(17, "div", 51)(18, "button", 52);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_47_For_20_Template_button_click_18_listener() {
      const acc_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(acc_r9));
    });
    \u0275\u0275elementStart(19, "span", 8);
    \u0275\u0275text(20, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 53);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_47_For_20_Template_button_click_21_listener() {
      const acc_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDeprecated(acc_r9));
    });
    \u0275\u0275elementStart(22, "span", 8);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const acc_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row-deprecated", acc_r9.deprecated);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(acc_r9.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acc_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getAccountTypeLabel(acc_r9.accountType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acc_r9.internalType);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(acc_r9.reconcile ? 11 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", !acc_r9.deprecated)("inactive", acc_r9.deprecated);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", acc_r9.deprecated ? "D\xE9sactiv\xE9" : "Actif", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("title", acc_r9.deprecated ? "Activer" : "D\xE9sactiver");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acc_r9.deprecated ? "toggle_off" : "toggle_on");
  }
}
function ChartOfAccountsComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "table", 42)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Intitul\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Type de compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Type interne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 43);
    \u0275\u0275text(13, "Lettrage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 43);
    \u0275\u0275text(15, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 43);
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, ChartOfAccountsComponent_Conditional_47_For_20_Template, 24, 14, "tr", 44, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r0.filteredAccounts);
  }
}
function ChartOfAccountsComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 55);
    \u0275\u0275element(2, "div", 56);
    \u0275\u0275elementStart(3, "p", 57);
    \u0275\u0275text(4, "Import en cours\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.previewRows.length, " lignes \xB7 veuillez patienter");
  }
}
function ChartOfAccountsComponent_Conditional_49_For_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function ChartOfAccountsComponent_Conditional_49_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275conditionalCreate(1, ChartOfAccountsComponent_Conditional_49_For_19_Conditional_1_Template, 2, 0, "span", 81);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("chip-match", ctx_r0.isActiveCol(h_r11))("chip-extra", !ctx_r0.isActiveCol(h_r11));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isActiveCol(h_r11) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", h_r11, " ");
  }
}
function ChartOfAccountsComponent_Conditional_49_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(aper\xE7u limit\xE9 \xE0 ", ctx_r0.PREVIEW_MAX, ")");
  }
}
function ChartOfAccountsComponent_Conditional_49_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(col_r12.label);
  }
}
function ChartOfAccountsComponent_Conditional_49_For_36_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r13 = ctx.$implicit;
    const row_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("cell-empty", !ctx_r0.getCellValue(row_r14, col_r13));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getCellValue(row_r14, col_r13) || "\u2014", " ");
  }
}
function ChartOfAccountsComponent_Conditional_49_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 82);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ChartOfAccountsComponent_Conditional_49_For_36_For_4_Template, 2, 3, "td", 83, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_371_r15 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row-even", \u0275$index_371_r15 % 2 === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_371_r15 + 1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.previewCols);
  }
}
function ChartOfAccountsComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_49_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePreview());
    });
    \u0275\u0275elementStart(1, "div", 60);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_49_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 61)(3, "div", 62)(4, "span", 63);
    \u0275\u0275text(5, "preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h3", 64);
    \u0275\u0275text(8, "Pr\xE9visualisation de l'import");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 65);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 66);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_49_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePreview());
    });
    \u0275\u0275elementStart(12, "span", 8);
    \u0275\u0275text(13, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 67)(15, "div", 68);
    \u0275\u0275text(16, "Colonnes d\xE9tect\xE9es dans le fichier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 69);
    \u0275\u0275repeaterCreate(18, ChartOfAccountsComponent_Conditional_49_For_19_Template, 3, 6, "span", 70, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 71)(21, "div", 72)(22, "span", 8);
    \u0275\u0275text(23, "table_rows");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275conditionalCreate(25, ChartOfAccountsComponent_Conditional_49_Conditional_25_Template, 2, 1, "span", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 74)(27, "table", 75)(28, "thead")(29, "tr")(30, "th", 76);
    \u0275\u0275text(31, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(32, ChartOfAccountsComponent_Conditional_49_For_33_Template, 2, 1, "th", null, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "tbody");
    \u0275\u0275repeaterCreate(35, ChartOfAccountsComponent_Conditional_49_For_36_Template, 5, 3, "tr", 77, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 78)(38, "button", 79);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_49_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePreview());
    });
    \u0275\u0275text(39, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 11);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_49_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmImport());
    });
    \u0275\u0275elementStart(41, "span", 8);
    \u0275\u0275text(42, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate2("", ctx_r0.pendingFileName, " \xB7 ", ctx_r0.pendingFileSize);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r0.previewHeaders);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" ", ctx_r0.previewRows.length, " ligne", ctx_r0.previewRows.length > 1 ? "s" : "", " d\xE9tect\xE9e", ctx_r0.previewRows.length > 1 ? "s" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.previewRows.length === ctx_r0.PREVIEW_MAX ? 25 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r0.previewCols);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.previewRows);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2(" Lancer l'import (", ctx_r0.previewRows.length, " ligne", ctx_r0.previewRows.length > 1 ? "s" : "", ") ");
  }
}
function ChartOfAccountsComponent_Conditional_50_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "span", 8);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg);
  }
}
function ChartOfAccountsComponent_Conditional_50_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1, "Le code est requis");
    \u0275\u0275elementEnd();
  }
}
function ChartOfAccountsComponent_Conditional_50_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1, "Uniquement des chiffres");
    \u0275\u0275elementEnd();
  }
}
function ChartOfAccountsComponent_Conditional_50_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1, "L'intitul\xE9 est requis");
    \u0275\u0275elementEnd();
  }
}
function ChartOfAccountsComponent_Conditional_50_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r17 = ctx.$implicit;
    \u0275\u0275property("value", t_r17.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r17.label);
  }
}
function ChartOfAccountsComponent_Conditional_50_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r18 = ctx.$implicit;
    \u0275\u0275property("value", t_r18.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r18.label);
  }
}
function ChartOfAccountsComponent_Conditional_50_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 102);
  }
}
function ChartOfAccountsComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_50_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 84);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_50_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 61)(3, "div", 62)(4, "span", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 64);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 66);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_50_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(9, "span", 8);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "form", 85);
    \u0275\u0275listener("ngSubmit", function ChartOfAccountsComponent_Conditional_50_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveAccount());
    });
    \u0275\u0275elementStart(12, "div", 86);
    \u0275\u0275conditionalCreate(13, ChartOfAccountsComponent_Conditional_50_Conditional_13_Template, 4, 1, "div", 87);
    \u0275\u0275elementStart(14, "div", 88)(15, "div", 89)(16, "label");
    \u0275\u0275text(17, "Code ");
    \u0275\u0275elementStart(18, "span", 90);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "input", 91);
    \u0275\u0275conditionalCreate(21, ChartOfAccountsComponent_Conditional_50_Conditional_21_Template, 2, 0, "span", 92);
    \u0275\u0275conditionalCreate(22, ChartOfAccountsComponent_Conditional_50_Conditional_22_Template, 2, 0, "span", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 89)(24, "label");
    \u0275\u0275text(25, "Intitul\xE9 ");
    \u0275\u0275elementStart(26, "span", 90);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "input", 93);
    \u0275\u0275conditionalCreate(29, ChartOfAccountsComponent_Conditional_50_Conditional_29_Template, 2, 0, "span", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 89)(31, "label");
    \u0275\u0275text(32, "Type de compte ");
    \u0275\u0275elementStart(33, "span", 90);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "select", 94);
    \u0275\u0275repeaterCreate(36, ChartOfAccountsComponent_Conditional_50_For_37_Template, 2, 2, "option", 19, _forTrack3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 89)(39, "label");
    \u0275\u0275text(40, "Type interne ");
    \u0275\u0275elementStart(41, "span", 90);
    \u0275\u0275text(42, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "select", 95);
    \u0275\u0275repeaterCreate(44, ChartOfAccountsComponent_Conditional_50_For_45_Template, 2, 2, "option", 19, _forTrack3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 96)(47, "label", 97);
    \u0275\u0275element(48, "input", 98);
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50, "Permettre le lettrage");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "label", 97);
    \u0275\u0275element(52, "input", 99);
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "Compte d\xE9sactiv\xE9");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div", 78)(56, "button", 100);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_50_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(57, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 101);
    \u0275\u0275conditionalCreate(59, ChartOfAccountsComponent_Conditional_50_Conditional_59_Template, 1, 0, "span", 102);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.editingAccount ? "edit" : "add_circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.editingAccount ? "Modifier le compte" : "Nouveau compte");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r0.accountForm);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.errorMsg ? 13 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("invalid", ((tmp_5_0 = ctx_r0.accountForm.get("code")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.accountForm.get("code")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx_r0.accountForm.get("code")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx_r0.accountForm.get("code")) == null ? null : tmp_6_0.touched) ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_7_0 = ctx_r0.accountForm.get("code")) == null ? null : tmp_7_0.hasError("pattern")) && ((tmp_7_0 = ctx_r0.accountForm.get("code")) == null ? null : tmp_7_0.touched) ? 22 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("invalid", ((tmp_8_0 = ctx_r0.accountForm.get("name")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r0.accountForm.get("name")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_9_0 = ctx_r0.accountForm.get("name")) == null ? null : tmp_9_0.hasError("required")) && ((tmp_9_0 = ctx_r0.accountForm.get("name")) == null ? null : tmp_9_0.touched) ? 29 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r0.accountTypes);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r0.internalTypes);
    \u0275\u0275advance(14);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.saving ? 59 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingAccount ? "Enregistrer" : "Cr\xE9er", " ");
  }
}
var ChartOfAccountsComponent = class _ChartOfAccountsComponent {
  constructor(accountingService, authService, fb) {
    this.accountingService = accountingService;
    this.authService = authService;
    this.fb = fb;
    this.accounts = [];
    this.loading = false;
    this.searchTerm = "";
    this.selectedClass = "";
    this.viewMode = "grouped";
    this.expandedClasses = /* @__PURE__ */ new Set();
    this.showModal = false;
    this.editingAccount = null;
    this.saving = false;
    this.successMsg = "";
    this.errorMsg = "";
    this.importing = false;
    this.downloadingTemplate = false;
    this.showPreview = false;
    this.previewRows = [];
    this.previewHeaders = [];
    this.pendingFile = null;
    this.previewLoading = false;
    this.importResult = null;
    this.PREVIEW_MAX = 200;
    this.CLASS_META = {
      "1": { label: "Ressources durables", color: "#7c3aed" },
      "2": { label: "Actif immobilis\xE9", color: "#2563eb" },
      "3": { label: "Stocks", color: "#0891b2" },
      "4": { label: "Tiers", color: "#059669" },
      "5": { label: "Tr\xE9sorerie", color: "#16a34a" },
      "6": { label: "Charges", color: "#dc2626" },
      "7": { label: "Produits", color: "#d97706" },
      "8": { label: "Autres charges & produits", color: "#6b7280" },
      "9": { label: "Comptabilit\xE9 analytique", color: "#9333ea" }
    };
    this.previewCols = [
      { key: "code", label: "Code" },
      { key: "name", label: "Intitul\xE9" },
      { key: "account_type", label: "Type" },
      { key: "reconcile", label: "Lettrage" }
    ];
    this.accountTypes = [
      { value: "asset_receivable", label: "Cr\xE9ances clients" },
      { value: "asset_cash", label: "Liquidit\xE9s" },
      { value: "asset_current", label: "Actif courant" },
      { value: "asset_non_current", label: "Actif non courant" },
      { value: "asset_prepayments", label: "Acomptes" },
      { value: "asset_fixed", label: "Immobilisations" },
      { value: "liability_payable", label: "Dettes fournisseurs" },
      { value: "liability_credit_card", label: "Carte de cr\xE9dit" },
      { value: "liability_current", label: "Passif courant" },
      { value: "liability_non_current", label: "Passif non courant" },
      { value: "equity", label: "Capitaux propres" },
      { value: "equity_unaffected", label: "R\xE9sultats non affect\xE9s" },
      { value: "income", label: "Produits" },
      { value: "income_other", label: "Autres produits" },
      { value: "expense", label: "Charges" },
      { value: "expense_depreciation", label: "Amortissements" },
      { value: "expense_direct_cost", label: "Co\xFBt des ventes" },
      { value: "off_balance", label: "Hors bilan" }
    ];
    this.internalTypes = [
      { value: "receivable", label: "Cr\xE9ance" },
      { value: "payable", label: "Dette" },
      { value: "liquidity", label: "Liquidit\xE9" },
      { value: "other", label: "Autre" }
    ];
  }
  ngOnInit() {
    this.buildForm();
    this.loadAccounts();
  }
  buildForm() {
    this.accountForm = this.fb.group({
      code: ["", [Validators.required, Validators.pattern(/^\d+$/)]],
      name: ["", Validators.required],
      accountType: ["other", Validators.required],
      internalType: ["other", Validators.required],
      deprecated: [false],
      reconcile: [false],
      companyId: [this.authService.getCompanyId()]
    });
  }
  loadAccounts() {
    this.loading = true;
    this.accountingService.getAccounts(this.authService.getCompanyId()).subscribe({
      next: (data) => {
        this.accounts = data.sort((a, b) => a.code.localeCompare(b.code));
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  // ── Vue groupée ────────────────────────────────────────────────────────
  get filteredAccounts() {
    let list = [...this.accounts];
    if (this.searchTerm) {
      const t = this.searchTerm.toLowerCase();
      list = list.filter((a) => a.code.toLowerCase().includes(t) || a.name.toLowerCase().includes(t));
    }
    if (this.selectedClass)
      list = list.filter((a) => a.code.startsWith(this.selectedClass));
    return list;
  }
  get classGroups() {
    const groups = [];
    const present = new Set(this.filteredAccounts.map((a) => a.code[0]).filter(Boolean));
    for (const cls of ["1", "2", "3", "4", "5", "6", "7", "8", "9"]) {
      if (!present.has(cls) && this.selectedClass && this.selectedClass !== cls)
        continue;
      const accounts = this.filteredAccounts.filter((a) => a.code.startsWith(cls));
      if (accounts.length === 0 && !this.searchTerm && !this.selectedClass)
        continue;
      if (accounts.length === 0)
        continue;
      const meta = this.CLASS_META[cls] || { label: `Classe ${cls}`, color: "#6b7280" };
      groups.push({ cls, label: meta.label, color: meta.color, accounts });
    }
    return groups;
  }
  toggleClass(cls) {
    if (this.expandedClasses.has(cls))
      this.expandedClasses.delete(cls);
    else
      this.expandedClasses.add(cls);
  }
  expandAll() {
    ["1", "2", "3", "4", "5", "6", "7", "8", "9"].forEach((c) => this.expandedClasses.add(c));
  }
  collapseAll() {
    this.expandedClasses.clear();
  }
  get totalFiltered() {
    return this.filteredAccounts.length;
  }
  // ── CRUD ──────────────────────────────────────────────────────────────
  openCreate() {
    this.editingAccount = null;
    this.accountForm.reset({
      code: "",
      name: "",
      accountType: "other",
      internalType: "other",
      deprecated: false,
      reconcile: false,
      companyId: this.authService.getCompanyId()
    });
    this.showModal = true;
    this.errorMsg = "";
  }
  openEdit(account) {
    this.editingAccount = account;
    this.accountForm.patchValue(account);
    this.showModal = true;
    this.errorMsg = "";
  }
  closeModal() {
    this.showModal = false;
    this.editingAccount = null;
  }
  saveAccount() {
    if (this.accountForm.invalid) {
      this.accountForm.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const data = this.accountForm.value;
    const obs = this.editingAccount ? this.accountingService.updateAccount(this.editingAccount.id, data) : this.accountingService.createAccount(data);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.closeModal();
        this.loadAccounts();
        this.showSuccess(this.editingAccount ? "Compte modifi\xE9" : "Compte cr\xE9\xE9");
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || "Erreur";
      }
    });
  }
  toggleDeprecated(account) {
    this.accountingService.toggleAccountDeprecated(account.id).subscribe({
      next: () => this.loadAccounts(),
      error: (err) => this.showError(err.error?.message || "Erreur")
    });
  }
  // ── Import ─────────────────────────────────────────────────────────────
  downloadTemplate() {
    this.downloadingTemplate = true;
    this.accountingService.downloadAccountsTemplate().subscribe({
      next: (blob) => {
        this.downloadingTemplate = false;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "modele_plan_comptable.xlsx";
        a.click();
        URL.revokeObjectURL(url);
      },
      error: () => {
        this.downloadingTemplate = false;
        this.showError("Erreur t\xE9l\xE9chargement mod\xE8le");
      }
    });
  }
  onImport(event) {
    return __async(this, null, function* () {
      const input = event.target;
      const file = input.files?.[0];
      if (!file)
        return;
      input.value = "";
      this.previewLoading = true;
      this.pendingFile = file;
      this.errorMsg = "";
      this.importResult = null;
      try {
        const allRows = yield parseExcelFile(file);
        const colSet = /* @__PURE__ */ new Set();
        allRows.forEach((r) => Object.keys(r).forEach((k) => colSet.add(k)));
        this.previewHeaders = Array.from(colSet);
        this.previewRows = allRows.slice(0, this.PREVIEW_MAX);
        this.showPreview = true;
      } catch (e) {
        this.showError("Impossible de lire le fichier : " + e.message);
        this.pendingFile = null;
      }
      this.previewLoading = false;
    });
  }
  confirmImport() {
    if (!this.pendingFile)
      return;
    this.showPreview = false;
    this.importing = true;
    this.errorMsg = "";
    this.importResult = null;
    this.accountingService.importAccounts(this.pendingFile, this.authService.getCompanyId(), true).subscribe({
      next: (res) => {
        this.importing = false;
        this.pendingFile = null;
        this.importResult = res;
        this.showSuccess(`Import termin\xE9 \u2014 ${res.created} cr\xE9\xE9s, ${res.updated} mis \xE0 jour, ${res.skipped ?? 0} ignor\xE9s`);
        if (res.errors?.length > 0)
          this.showError(res.errors.slice(0, 3).join(" | "));
        this.loadAccounts();
      },
      error: (err) => {
        this.importing = false;
        this.pendingFile = null;
        this.showError(err?.error?.message || "Erreur lors de l'import");
      }
    });
  }
  closePreview() {
    this.showPreview = false;
    this.previewRows = [];
    this.previewHeaders = [];
    this.pendingFile = null;
  }
  get pendingFileName() {
    return this.pendingFile?.name ?? "";
  }
  get pendingFileSize() {
    const b = this.pendingFile?.size ?? 0;
    return b > 1024 * 1024 ? (b / 1024 / 1024).toFixed(1) + " Mo" : (b / 1024).toFixed(0) + " Ko";
  }
  isActiveCol(h) {
    return this.previewCols.some((c) => c.key.toLowerCase() === h.toLowerCase());
  }
  getCellValue(row, col) {
    return String(row[col.key] ?? row[col.key.toLowerCase()] ?? "");
  }
  getAccountTypeLabel(type) {
    return this.accountTypes.find((t) => t.value === type)?.label || type;
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 5e3);
  }
  showError(msg) {
    this.errorMsg = msg;
    setTimeout(() => this.errorMsg = "", 8e3);
  }
  static {
    this.\u0275fac = function ChartOfAccountsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChartOfAccountsComponent)(\u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChartOfAccountsComponent, selectors: [["app-chart-of-accounts"]], decls: 51, vars: 21, consts: [[1, "page-wrap"], [1, "page-header"], [1, "header-left"], [1, "material-icons", "page-icon"], [1, "page-title"], [1, "page-sub"], [1, "header-actions"], [1, "btn-outline", 3, "click", "disabled"], [1, "material-icons"], [1, "btn-import"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change", "disabled"], [1, "btn-primary", 3, "click"], [1, "alert", "alert-ok"], [1, "alert", "alert-err"], [1, "toolbar"], [1, "search-box"], ["type", "text", "placeholder", "Code ou intitul\xE9\u2026", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "filter-ctl", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "view-toggle"], ["title", "Vue group\xE9e", 1, "view-btn", 3, "click"], ["title", "Vue liste", 1, "view-btn", 3, "click"], [1, "skeleton-list"], [1, "empty-state"], [1, "accordion"], [1, "table-card"], [1, "import-overlay"], [1, "modal-overlay"], [1, "btn-acc-ctrl", 3, "click"], [1, "skeleton-row"], [1, "cls-block"], [1, "cls-header", 3, "click"], [1, "cls-header-left"], [1, "cls-badge"], [1, "cls-info"], [1, "cls-title"], [1, "cls-label"], [1, "cls-header-right"], [1, "cls-count"], [1, "material-icons", "cls-chevron"], [1, "cls-body"], [1, "acc-table"], [1, "c"], [3, "row-deprecated"], [1, "code-badge"], [1, "acc-name"], [1, "acc-type", "muted"], [1, "material-icons", "icon-on"], [1, "material-icons", "icon-off"], [1, "status-pill"], [1, "action-btns"], ["title", "Modifier", 1, "btn-action", 3, "click"], [1, "btn-action", 3, "click", "title"], [1, "muted", "acc-type"], [1, "import-spinner-card"], [1, "import-spinner"], [1, "import-spin-title"], [1, "import-spin-sub"], [1, "modal-overlay", 3, "click"], [1, "modal", "modal-xl", 3, "click"], [1, "modal-hd"], [1, "modal-hd-left"], [1, "material-icons", "modal-icon"], [1, "modal-title"], [1, "modal-sub"], [1, "modal-close-btn", 3, "click"], [1, "modal-section"], [1, "section-label"], [1, "col-chips"], [1, "col-chip", 3, "chip-match", "chip-extra"], [1, "modal-section", "preview-stats"], [1, "stat-pill", "stat-blue"], [1, "limit-hint"], [1, "modal-body-scroll"], [1, "preview-table"], [1, "row-num"], [3, "row-even"], [1, "modal-ft"], [1, "btn-outline", 3, "click"], [1, "col-chip"], [1, "material-icons", "chip-icon"], [1, "row-num", "muted"], [3, "cell-empty"], [1, "modal", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "modal-body-pad"], [1, "alert", "alert-err", "mb"], [1, "form-grid"], [1, "form-group"], [1, "req"], ["formControlName", "code", "placeholder", "Ex : 411000", 1, "form-ctl"], [1, "err-msg"], ["formControlName", "name", "placeholder", "Ex : Clients", 1, "form-ctl"], ["formControlName", "accountType", 1, "form-ctl"], ["formControlName", "internalType", 1, "form-ctl"], [1, "check-row"], [1, "chk-lbl"], ["type", "checkbox", "formControlName", "reconcile"], ["type", "checkbox", "formControlName", "deprecated"], ["type", "button", 1, "btn-outline", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "btn-spinner"]], template: function ChartOfAccountsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "account_tree");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1", 4);
        \u0275\u0275text(7, "Plan Comptable");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
        \u0275\u0275listener("click", function ChartOfAccountsComponent_Template_button_click_11_listener() {
          return ctx.downloadTemplate();
        });
        \u0275\u0275elementStart(12, "span", 8);
        \u0275\u0275text(13, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "label", 9)(16, "span", 8);
        \u0275\u0275text(17, "upload_file");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18);
        \u0275\u0275elementStart(19, "input", 10);
        \u0275\u0275listener("change", function ChartOfAccountsComponent_Template_input_change_19_listener($event) {
          return ctx.onImport($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "button", 11);
        \u0275\u0275listener("click", function ChartOfAccountsComponent_Template_button_click_20_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275elementStart(21, "span", 8);
        \u0275\u0275text(22, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Nouveau compte ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(24, ChartOfAccountsComponent_Conditional_24_Template, 4, 1, "div", 12);
        \u0275\u0275conditionalCreate(25, ChartOfAccountsComponent_Conditional_25_Template, 4, 1, "div", 13);
        \u0275\u0275elementStart(26, "div", 14)(27, "div", 15)(28, "span", 8);
        \u0275\u0275text(29, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function ChartOfAccountsComponent_Template_input_ngModelChange_30_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function ChartOfAccountsComponent_Template_select_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedClass, $event) || (ctx.selectedClass = $event);
          return $event;
        });
        \u0275\u0275elementStart(32, "option", 18);
        \u0275\u0275text(33, "Toutes les classes");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(34, ChartOfAccountsComponent_For_35_Template, 2, 2, "option", 19, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 20)(37, "button", 21);
        \u0275\u0275listener("click", function ChartOfAccountsComponent_Template_button_click_37_listener() {
          return ctx.viewMode = "grouped";
        });
        \u0275\u0275elementStart(38, "span", 8);
        \u0275\u0275text(39, "view_agenda");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "button", 22);
        \u0275\u0275listener("click", function ChartOfAccountsComponent_Template_button_click_40_listener() {
          return ctx.viewMode = "flat";
        });
        \u0275\u0275elementStart(41, "span", 8);
        \u0275\u0275text(42, "list");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(43, ChartOfAccountsComponent_Conditional_43_Template, 6, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(44, ChartOfAccountsComponent_Conditional_44_Template, 3, 1, "div", 23)(45, ChartOfAccountsComponent_Conditional_45_Template, 5, 0, "div", 24)(46, ChartOfAccountsComponent_Conditional_46_Template, 3, 0, "div", 25)(47, ChartOfAccountsComponent_Conditional_47_Template, 21, 0, "div", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(48, ChartOfAccountsComponent_Conditional_48_Template, 7, 1, "div", 27);
        \u0275\u0275conditionalCreate(49, ChartOfAccountsComponent_Conditional_49_Template, 44, 8, "div", 28);
        \u0275\u0275conditionalCreate(50, ChartOfAccountsComponent_Conditional_50_Template, 61, 14, "div", 28);
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("", ctx.totalFiltered, " compte(s) \u2014 OHADA");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.downloadingTemplate);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.downloadingTemplate ? "T\xE9l\xE9chargement\u2026" : "Mod\xE8le Excel", " ");
        \u0275\u0275advance();
        \u0275\u0275classProp("busy", ctx.previewLoading);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.previewLoading ? "Lecture\u2026" : "Importer Excel", " ");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.importing || ctx.previewLoading);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.successMsg ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg && !ctx.showModal ? 25 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedClass);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(20, _c0));
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.viewMode === "grouped");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.viewMode === "flat");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.viewMode === "grouped" ? 43 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 44 : ctx.totalFiltered === 0 ? 45 : ctx.viewMode === "grouped" ? 46 : 47);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.importing ? 48 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPreview ? 49 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal ? 50 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['\n.page-wrap[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--primary);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n  background: var(--primary-subtle);\n}\n.btn-outline[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-import[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1.5px solid #d8b4fe;\n  background: var(--bg-hover);\n  color: #7c3aed;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-import[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-import[_ngcontent-%COMP%]:hover {\n  background: rgba(109, 40, 217, 0.1);\n  border-color: #a855f7;\n}\n.btn-import.busy[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  cursor: wait;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.alert.alert-ok[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n}\n.alert.alert-err[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: #dc2626;\n  border: 1px solid var(--danger-bg);\n}\n.alert.mb[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  padding: 7px 12px;\n  background: var(--bg-surface);\n  flex: 1;\n  min-width: 200px;\n}\n.search-box[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--text-muted);\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--primary);\n}\n.search-input[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  border: none;\n  outline: none;\n  font-size: 13px;\n  color: var(--text-secondary);\n  width: 100%;\n  background: transparent;\n}\n.filter-ctl[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n}\n.filter-ctl[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.view-btn[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border: none;\n  background: var(--bg-surface);\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.15s;\n}\n.view-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: block;\n}\n.view-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.view-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--bg-page);\n}\n.btn-acc-ctrl[_ngcontent-%COMP%] {\n  padding: 7px 9px;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  align-items: center;\n}\n.btn-acc-ctrl[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-acc-ctrl[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n  background: var(--primary-subtle);\n}\n.skeleton-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.skeleton-row[_ngcontent-%COMP%] {\n  height: 52px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--bg-elevated) 25%,\n      var(--bg-hover) 50%,\n      var(--bg-elevated) 75%);\n  background-size: 400% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s ease infinite;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 72px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.accordion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.cls-block[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  border: 1.5px solid var(--border);\n  overflow: hidden;\n  transition: border-color 0.15s;\n}\n.cls-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background 0.12s;\n}\n.cls-header[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.cls-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.cls-badge[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  color: white;\n  font-size: 16px;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cls-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.cls-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.cls-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.cls-header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.cls-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.cls-chevron[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--text-muted);\n  transition: transform 0.2s;\n}\n.cls-block[_ngcontent-%COMP%]:has(.cls-body)   .cls-chevron[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.cls-body[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-light);\n}\n.table-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.acc-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.acc-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.acc-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.acc-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.acc-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.acc-table[_ngcontent-%COMP%]   .c[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.row-deprecated[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  background: var(--bg-elevated) !important;\n}\n.row-deprecated[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #9ca3af !important;\n}\n.code-badge[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: 0.5px;\n}\n.acc-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.acc-type[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.icon-on[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #16a34a;\n}\n.icon-off[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #d1d5db;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.status-pill.active[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.status-pill.inactive[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  justify-content: center;\n}\n.btn-action[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.12s;\n}\n.btn-action[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  background: var(--bg-page);\n  color: var(--primary);\n}\n.import-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.import-spinner-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 16px;\n  padding: 40px 56px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.import-spinner[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border: 4px solid #e5e7eb;\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n.import-spin-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.import-spin-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 900;\n  padding: 16px;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.modal.modal-xl[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.modal-hd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.modal-hd-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--primary);\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.modal-close-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: var(--bg-page);\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.modal-close-btn[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n  color: var(--text-secondary);\n}\n.modal-close-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.modal-section[_ngcontent-%COMP%] {\n  padding: 14px 22px;\n  border-bottom: 1px solid var(--border-light);\n}\n.section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 8px;\n}\n.col-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.col-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.col-chip.chip-match[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.col-chip.chip-extra[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.chip-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.preview-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.stat-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.stat-pill[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.stat-pill.stat-blue[_ngcontent-%COMP%] {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.limit-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #f59e0b;\n  font-weight: 600;\n  margin-left: 4px;\n}\n.modal-body-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  padding: 0;\n}\n.preview-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.preview-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  padding: 8px 12px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n  white-space: nowrap;\n}\n.preview-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.preview-table[_ngcontent-%COMP%]   tr.row-even[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.preview-table[_ngcontent-%COMP%]   .row-num[_ngcontent-%COMP%] {\n  width: 40px;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-muted);\n  font-size: 11px;\n}\n.preview-table[_ngcontent-%COMP%]   .cell-empty[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  font-style: italic;\n}\n.modal-body-pad[_ngcontent-%COMP%] {\n  padding: 18px 22px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin-bottom: 14px;\n}\n@media (max-width: 500px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-secondary);\n}\n.req[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.form-ctl[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n}\n.form-ctl[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.form-ctl.invalid[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.err-msg[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #dc2626;\n}\n.check-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.chk-lbl[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  cursor: pointer;\n  color: var(--text-secondary);\n}\n.chk-lbl[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  accent-color: var(--primary);\n  cursor: pointer;\n}\n.modal-ft[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 22px;\n  border-top: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 13px;\n  height: 13px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin-right: 4px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 100%;\n  }\n  100% {\n    background-position: -100%;\n  }\n}\n/*# sourceMappingURL=chart-of-accounts.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartOfAccountsComponent, [{
    type: Component,
    args: [{ selector: "app-chart-of-accounts", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<div class="page-wrap">

  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="page-header">
    <div class="header-left">
      <span class="material-icons page-icon">account_tree</span>
      <div>
        <h1 class="page-title">Plan Comptable</h1>
        <p class="page-sub">{{ totalFiltered }} compte(s) \u2014 OHADA</p>
      </div>
    </div>
    <div class="header-actions">
      <button class="btn-outline" (click)="downloadTemplate()" [disabled]="downloadingTemplate">
        <span class="material-icons">download</span>
        {{ downloadingTemplate ? 'T\xE9l\xE9chargement\u2026' : 'Mod\xE8le Excel' }}
      </button>
      <label class="btn-import" [class.busy]="previewLoading">
        <span class="material-icons">upload_file</span>
        {{ previewLoading ? 'Lecture\u2026' : 'Importer Excel' }}
        <input type="file" accept=".xlsx,.xls" (change)="onImport($event)" style="display:none" [disabled]="importing || previewLoading">
      </label>
      <button class="btn-primary" (click)="openCreate()">
        <span class="material-icons">add</span> Nouveau compte
      </button>
    </div>
  </div>

  <!-- \u2550\u2550 ALERTES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (successMsg) {
    <div class="alert alert-ok">
      <span class="material-icons">check_circle</span> {{ successMsg }}
    </div>
  }
  @if (errorMsg && !showModal) {
    <div class="alert alert-err">
      <span class="material-icons">error_outline</span> {{ errorMsg }}
    </div>
  }

  <!-- \u2550\u2550 FILTRES & VUES \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="toolbar">
    <div class="search-box">
      <span class="material-icons">search</span>
      <input type="text" class="search-input" placeholder="Code ou intitul\xE9\u2026"
             [(ngModel)]="searchTerm">
    </div>
    <select class="filter-ctl" [(ngModel)]="selectedClass">
      <option value="">Toutes les classes</option>
      @for (cls of ['1','2','3','4','5','6','7','8','9']; track cls) {
        <option [value]="cls">Classe {{ cls }}</option>
      }
    </select>
    <div class="view-toggle">
      <button class="view-btn" [class.active]="viewMode === 'grouped'" (click)="viewMode = 'grouped'"
              title="Vue group\xE9e">
        <span class="material-icons">view_agenda</span>
      </button>
      <button class="view-btn" [class.active]="viewMode === 'flat'" (click)="viewMode = 'flat'"
              title="Vue liste">
        <span class="material-icons">list</span>
      </button>
    </div>
    @if (viewMode === 'grouped') {
      <button class="btn-acc-ctrl" (click)="expandAll()">
        <span class="material-icons">unfold_more</span>
      </button>
      <button class="btn-acc-ctrl" (click)="collapseAll()">
        <span class="material-icons">unfold_less</span>
      </button>
    }
  </div>

  <!-- \u2550\u2550 CONTENU \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (loading) {
    <div class="skeleton-list">
      @for (i of [1,2,3,4,5]; track i) {
        <div class="skeleton-row"></div>
      }
    </div>

  } @else if (totalFiltered === 0) {
    <div class="empty-state">
      <span class="material-icons">manage_search</span>
      <p>Aucun compte trouv\xE9</p>
    </div>

  } @else if (viewMode === 'grouped') {

    <!-- VUE GROUP\xC9E PAR CLASSE -->
    <div class="accordion">
      @for (group of classGroups; track group.cls) {
        <div class="cls-block">
          <div class="cls-header" (click)="toggleClass(group.cls)">
            <div class="cls-header-left">
              <div class="cls-badge" [style.background]="group.color">{{ group.cls }}</div>
              <div class="cls-info">
                <span class="cls-title">Classe {{ group.cls }}</span>
                <span class="cls-label">{{ group.label }}</span>
              </div>
            </div>
            <div class="cls-header-right">
              <span class="cls-count">{{ group.accounts.length }} compte(s)</span>
              <span class="material-icons cls-chevron">
                {{ expandedClasses.has(group.cls) ? 'expand_less' : 'expand_more' }}
              </span>
            </div>
          </div>

          @if (expandedClasses.has(group.cls)) {
            <div class="cls-body">
              <table class="acc-table">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Intitul\xE9</th>
                    <th>Type</th>
                    <th class="c">Lettrage</th>
                    <th class="c">Statut</th>
                    <th class="c">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  @for (acc of group.accounts; track acc.id) {
                    <tr [class.row-deprecated]="acc.deprecated">
                      <td>
                        <span class="code-badge" [style.color]="group.color">{{ acc.code }}</span>
                      </td>
                      <td class="acc-name">{{ acc.name }}</td>
                      <td class="acc-type muted">{{ getAccountTypeLabel(acc.accountType) }}</td>
                      <td class="c">
                        @if (acc.reconcile) {
                          <span class="material-icons icon-on">check_circle</span>
                        } @else {
                          <span class="material-icons icon-off">radio_button_unchecked</span>
                        }
                      </td>
                      <td class="c">
                        <span class="status-pill" [class.active]="!acc.deprecated" [class.inactive]="acc.deprecated">
                          {{ acc.deprecated ? 'D\xE9sactiv\xE9' : 'Actif' }}
                        </span>
                      </td>
                      <td class="c">
                        <div class="action-btns">
                          <button class="btn-action" (click)="openEdit(acc)" title="Modifier">
                            <span class="material-icons">edit</span>
                          </button>
                          <button class="btn-action" (click)="toggleDeprecated(acc)"
                            [title]="acc.deprecated ? 'Activer' : 'D\xE9sactiver'">
                            <span class="material-icons">{{ acc.deprecated ? 'toggle_off' : 'toggle_on' }}</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          }
        </div>
      }
    </div>

  } @else {

    <!-- VUE LISTE PLATE -->
    <div class="table-card">
      <table class="acc-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Intitul\xE9</th>
            <th>Type de compte</th>
            <th>Type interne</th>
            <th class="c">Lettrage</th>
            <th class="c">Statut</th>
            <th class="c">Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (acc of filteredAccounts; track acc.id) {
            <tr [class.row-deprecated]="acc.deprecated">
              <td><span class="code-badge">{{ acc.code }}</span></td>
              <td class="acc-name">{{ acc.name }}</td>
              <td class="muted acc-type">{{ getAccountTypeLabel(acc.accountType) }}</td>
              <td class="muted acc-type">{{ acc.internalType }}</td>
              <td class="c">
                @if (acc.reconcile) { <span class="material-icons icon-on">check_circle</span> }
                @else               { <span class="material-icons icon-off">radio_button_unchecked</span> }
              </td>
              <td class="c">
                <span class="status-pill" [class.active]="!acc.deprecated" [class.inactive]="acc.deprecated">
                  {{ acc.deprecated ? 'D\xE9sactiv\xE9' : 'Actif' }}
                </span>
              </td>
              <td class="c">
                <div class="action-btns">
                  <button class="btn-action" (click)="openEdit(acc)" title="Modifier">
                    <span class="material-icons">edit</span>
                  </button>
                  <button class="btn-action" (click)="toggleDeprecated(acc)"
                    [title]="acc.deprecated ? 'Activer' : 'D\xE9sactiver'">
                    <span class="material-icons">{{ acc.deprecated ? 'toggle_off' : 'toggle_on' }}</span>
                  </button>
                </div>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>

  }
</div>

<!-- \u2550\u2550 OVERLAY IMPORT EN COURS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (importing) {
  <div class="import-overlay">
    <div class="import-spinner-card">
      <div class="import-spinner"></div>
      <p class="import-spin-title">Import en cours\u2026</p>
      <p class="import-spin-sub">{{ previewRows.length }} lignes \xB7 veuillez patienter</p>
    </div>
  </div>
}

<!-- \u2550\u2550 MODAL PR\xC9VISUALISATION IMPORT \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (showPreview) {
  <div class="modal-overlay" (click)="closePreview()">
    <div class="modal modal-xl" (click)="$event.stopPropagation()">

      <!-- Header -->
      <div class="modal-hd">
        <div class="modal-hd-left">
          <span class="material-icons modal-icon">preview</span>
          <div>
            <h3 class="modal-title">Pr\xE9visualisation de l'import</h3>
            <p class="modal-sub">{{ pendingFileName }} \xB7 {{ pendingFileSize }}</p>
          </div>
        </div>
        <button class="modal-close-btn" (click)="closePreview()">
          <span class="material-icons">close</span>
        </button>
      </div>

      <!-- Colonnes d\xE9tect\xE9es -->
      <div class="modal-section">
        <div class="section-label">Colonnes d\xE9tect\xE9es dans le fichier</div>
        <div class="col-chips">
          @for (h of previewHeaders; track h) {
            <span class="col-chip" [class.chip-match]="isActiveCol(h)" [class.chip-extra]="!isActiveCol(h)">
              @if (isActiveCol(h)) { <span class="material-icons chip-icon">check</span> }
              {{ h }}
            </span>
          }
        </div>
      </div>

      <!-- Stats -->
      <div class="modal-section preview-stats">
        <div class="stat-pill stat-blue">
          <span class="material-icons">table_rows</span>
          {{ previewRows.length }} ligne{{ previewRows.length > 1 ? 's' : '' }} d\xE9tect\xE9e{{ previewRows.length > 1 ? 's' : '' }}
          @if (previewRows.length === PREVIEW_MAX) { <span class="limit-hint">(aper\xE7u limit\xE9 \xE0 {{ PREVIEW_MAX }})</span> }
        </div>
      </div>

      <!-- Tableau pr\xE9visualisation -->
      <div class="modal-body-scroll">
        <table class="preview-table">
          <thead>
            <tr>
              <th class="row-num">#</th>
              @for (col of previewCols; track col.key) {
                <th>{{ col.label }}</th>
              }
            </tr>
          </thead>
          <tbody>
            @for (row of previewRows; track $index; let i = $index) {
              <tr [class.row-even]="i % 2 === 0">
                <td class="row-num muted">{{ i + 1 }}</td>
                @for (col of previewCols; track col.key) {
                  <td [class.cell-empty]="!getCellValue(row, col)">
                    {{ getCellValue(row, col) || '\u2014' }}
                  </td>
                }
              </tr>
            }
          </tbody>
        </table>
      </div>

      <!-- Footer -->
      <div class="modal-ft">
        <button class="btn-outline" (click)="closePreview()">Annuler</button>
        <button class="btn-primary" (click)="confirmImport()">
          <span class="material-icons">cloud_upload</span>
          Lancer l'import ({{ previewRows.length }} ligne{{ previewRows.length > 1 ? 's' : '' }})
        </button>
      </div>

    </div>
  </div>
}

<!-- \u2550\u2550 MODAL CR\xC9ATION / \xC9DITION \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
@if (showModal) {
  <div class="modal-overlay" (click)="closeModal()">
    <div class="modal" (click)="$event.stopPropagation()">
      <div class="modal-hd">
        <div class="modal-hd-left">
          <span class="material-icons modal-icon">{{ editingAccount ? 'edit' : 'add_circle' }}</span>
          <h3 class="modal-title">{{ editingAccount ? 'Modifier le compte' : 'Nouveau compte' }}</h3>
        </div>
        <button class="modal-close-btn" (click)="closeModal()">
          <span class="material-icons">close</span>
        </button>
      </div>
      <form [formGroup]="accountForm" (ngSubmit)="saveAccount()">
        <div class="modal-body-pad">
          @if (errorMsg) {
            <div class="alert alert-err mb"><span class="material-icons">error_outline</span> {{ errorMsg }}</div>
          }
          <div class="form-grid">
            <div class="form-group">
              <label>Code <span class="req">*</span></label>
              <input formControlName="code" class="form-ctl"
                [class.invalid]="accountForm.get('code')?.invalid && accountForm.get('code')?.touched"
                placeholder="Ex : 411000">
              @if (accountForm.get('code')?.hasError('required') && accountForm.get('code')?.touched) {
                <span class="err-msg">Le code est requis</span>
              }
              @if (accountForm.get('code')?.hasError('pattern') && accountForm.get('code')?.touched) {
                <span class="err-msg">Uniquement des chiffres</span>
              }
            </div>
            <div class="form-group">
              <label>Intitul\xE9 <span class="req">*</span></label>
              <input formControlName="name" class="form-ctl"
                [class.invalid]="accountForm.get('name')?.invalid && accountForm.get('name')?.touched"
                placeholder="Ex : Clients">
              @if (accountForm.get('name')?.hasError('required') && accountForm.get('name')?.touched) {
                <span class="err-msg">L'intitul\xE9 est requis</span>
              }
            </div>
            <div class="form-group">
              <label>Type de compte <span class="req">*</span></label>
              <select formControlName="accountType" class="form-ctl">
                @for (t of accountTypes; track t.value) {
                  <option [value]="t.value">{{ t.label }}</option>
                }
              </select>
            </div>
            <div class="form-group">
              <label>Type interne <span class="req">*</span></label>
              <select formControlName="internalType" class="form-ctl">
                @for (t of internalTypes; track t.value) {
                  <option [value]="t.value">{{ t.label }}</option>
                }
              </select>
            </div>
          </div>
          <div class="check-row">
            <label class="chk-lbl">
              <input type="checkbox" formControlName="reconcile">
              <span>Permettre le lettrage</span>
            </label>
            <label class="chk-lbl">
              <input type="checkbox" formControlName="deprecated">
              <span>Compte d\xE9sactiv\xE9</span>
            </label>
          </div>
        </div>
        <div class="modal-ft">
          <button type="button" class="btn-outline" (click)="closeModal()">Annuler</button>
          <button type="submit" class="btn-primary" [disabled]="saving">
            @if (saving) { <span class="btn-spinner"></span> }
            {{ editingAccount ? 'Enregistrer' : 'Cr\xE9er' }}
          </button>
        </div>
      </form>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/accounting/components/chart-of-accounts/chart-of-accounts.component.scss */\n.page-wrap {\n  padding: 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon {\n  font-size: 28px;\n  color: var(--primary);\n}\n.page-title {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n}\n.page-sub {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.header-actions {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1.5px solid var(--border);\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-outline .material-icons {\n  font-size: 16px;\n}\n.btn-outline:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n  background: var(--primary-subtle);\n}\n.btn-outline:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-import {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1.5px solid #d8b4fe;\n  background: var(--bg-hover);\n  color: #7c3aed;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-import .material-icons {\n  font-size: 16px;\n}\n.btn-import:hover {\n  background: rgba(109, 40, 217, 0.1);\n  border-color: #a855f7;\n}\n.btn-import.busy {\n  opacity: 0.7;\n  cursor: wait;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: none;\n  background: var(--primary);\n  color: white;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-primary .material-icons {\n  font-size: 16px;\n}\n.btn-primary:hover {\n  background: var(--primary-dark);\n}\n.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 14px;\n}\n.alert .material-icons {\n  font-size: 17px;\n}\n.alert.alert-ok {\n  background: var(--success-bg);\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n}\n.alert.alert-err {\n  background: var(--danger-bg);\n  color: #dc2626;\n  border: 1px solid var(--danger-bg);\n}\n.alert.mb {\n  margin-bottom: 14px;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  padding: 7px 12px;\n  background: var(--bg-surface);\n  flex: 1;\n  min-width: 200px;\n}\n.search-box .material-icons {\n  font-size: 18px;\n  color: var(--text-muted);\n}\n.search-box:focus-within {\n  border-color: var(--primary);\n}\n.search-input {\n  color: var(--text-primary);\n  border: none;\n  outline: none;\n  font-size: 13px;\n  color: var(--text-secondary);\n  width: 100%;\n  background: transparent;\n}\n.filter-ctl {\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n}\n.filter-ctl:focus {\n  border-color: var(--primary);\n}\n.view-toggle {\n  display: flex;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.view-btn {\n  padding: 7px 10px;\n  border: none;\n  background: var(--bg-surface);\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.15s;\n}\n.view-btn .material-icons {\n  font-size: 18px;\n  display: block;\n}\n.view-btn.active {\n  background: var(--primary);\n  color: white;\n}\n.view-btn:hover:not(.active) {\n  background: var(--bg-page);\n}\n.btn-acc-ctrl {\n  padding: 7px 9px;\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  align-items: center;\n}\n.btn-acc-ctrl .material-icons {\n  font-size: 18px;\n}\n.btn-acc-ctrl:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n  background: var(--primary-subtle);\n}\n.skeleton-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.skeleton-row {\n  height: 52px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--bg-elevated) 25%,\n      var(--bg-hover) 50%,\n      var(--bg-elevated) 75%);\n  background-size: 400% 100%;\n  animation: shimmer 1.4s ease infinite;\n}\n.empty-state {\n  text-align: center;\n  padding: 72px;\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 52px;\n  color: var(--border);\n  display: block;\n  margin-bottom: 10px;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 14px;\n}\n.accordion {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.cls-block {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  border: 1.5px solid var(--border);\n  overflow: hidden;\n  transition: border-color 0.15s;\n}\n.cls-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background 0.12s;\n}\n.cls-header:hover {\n  background: var(--bg-elevated);\n}\n.cls-header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.cls-badge {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  color: white;\n  font-size: 16px;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cls-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.cls-title {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.cls-label {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.cls-header-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.cls-count {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.cls-chevron {\n  font-size: 20px;\n  color: var(--text-muted);\n  transition: transform 0.2s;\n}\n.cls-block:has(.cls-body) .cls-chevron {\n  color: var(--primary);\n}\n.cls-body {\n  border-top: 1px solid var(--border-light);\n}\n.table-card {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n.acc-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.acc-table th {\n  padding: 9px 14px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.acc-table td {\n  padding: 9px 14px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.acc-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.acc-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.acc-table .c {\n  text-align: center;\n}\n.row-deprecated {\n  opacity: 0.45;\n  background: var(--bg-elevated) !important;\n}\n.row-deprecated td {\n  color: #9ca3af !important;\n}\n.code-badge {\n  font-family: "Roboto Mono", monospace;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: 0.5px;\n}\n.acc-name {\n  font-weight: 500;\n}\n.acc-type {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.muted {\n  color: var(--text-muted);\n}\n.icon-on {\n  font-size: 16px;\n  color: #16a34a;\n}\n.icon-off {\n  font-size: 16px;\n  color: #d1d5db;\n}\n.status-pill {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.status-pill.active {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.status-pill.inactive {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.action-btns {\n  display: flex;\n  gap: 4px;\n  justify-content: center;\n}\n.btn-action {\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  transition: all 0.12s;\n}\n.btn-action .material-icons {\n  font-size: 16px;\n}\n.btn-action:hover {\n  background: var(--bg-page);\n  color: var(--primary);\n}\n.import-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.import-spinner-card {\n  background: var(--bg-surface);\n  border-radius: 16px;\n  padding: 40px 56px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.import-spinner {\n  width: 52px;\n  height: 52px;\n  border: 4px solid #e5e7eb;\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n}\n.import-spin-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.import-spin-sub {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 900;\n  padding: 16px;\n}\n.modal {\n  background: var(--bg-surface);\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.modal.modal-xl {\n  max-width: 900px;\n}\n.modal-hd {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.modal-hd-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-icon {\n  font-size: 22px;\n  color: var(--primary);\n}\n.modal-title {\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-sub {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.modal-close-btn {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: var(--bg-page);\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.modal-close-btn:hover {\n  background: #e5e7eb;\n  color: var(--text-secondary);\n}\n.modal-close-btn .material-icons {\n  font-size: 18px;\n}\n.modal-section {\n  padding: 14px 22px;\n  border-bottom: 1px solid var(--border-light);\n}\n.section-label {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-bottom: 8px;\n}\n.col-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.col-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.col-chip.chip-match {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.col-chip.chip-extra {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.chip-icon {\n  font-size: 12px;\n}\n.preview-stats {\n  display: flex;\n  gap: 10px;\n}\n.stat-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.stat-pill .material-icons {\n  font-size: 15px;\n}\n.stat-pill.stat-blue {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.limit-hint {\n  font-size: 11px;\n  color: #f59e0b;\n  font-weight: 600;\n  margin-left: 4px;\n}\n.modal-body-scroll {\n  flex: 1;\n  overflow: auto;\n  padding: 0;\n}\n.preview-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.preview-table th {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  padding: 8px 12px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n  white-space: nowrap;\n}\n.preview-table td {\n  padding: 7px 12px;\n  font-size: 12px;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.preview-table tr.row-even td {\n  background: var(--bg-hover);\n}\n.preview-table .row-num {\n  width: 40px;\n  font-family: "Roboto Mono", monospace;\n  color: var(--text-muted);\n  font-size: 11px;\n}\n.preview-table .cell-empty {\n  color: #d1d5db;\n  font-style: italic;\n}\n.modal-body-pad {\n  padding: 18px 22px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n  margin-bottom: 14px;\n}\n@media (max-width: 500px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--text-secondary);\n}\n.req {\n  color: #dc2626;\n}\n.form-ctl {\n  background: var(--bg-surface);\n  color: var(--text-primary);\n  padding: 8px 10px;\n  border: 1.5px solid var(--border);\n  border-radius: 7px;\n  font-size: 13px;\n  outline: none;\n}\n.form-ctl:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.form-ctl.invalid {\n  border-color: #dc2626;\n}\n.err-msg {\n  font-size: 11px;\n  color: #dc2626;\n}\n.check-row {\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.chk-lbl {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  cursor: pointer;\n  color: var(--text-secondary);\n}\n.chk-lbl input[type=checkbox] {\n  width: 15px;\n  height: 15px;\n  accent-color: var(--primary);\n  cursor: pointer;\n}\n.modal-ft {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 22px;\n  border-top: 1px solid var(--border-light);\n  background: var(--bg-hover);\n}\n.btn-spinner {\n  display: inline-block;\n  width: 13px;\n  height: 13px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  margin-right: 4px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes shimmer {\n  0% {\n    background-position: 100%;\n  }\n  100% {\n    background-position: -100%;\n  }\n}\n/*# sourceMappingURL=chart-of-accounts.component.css.map */\n'] }]
  }], () => [{ type: AccountingService }, { type: AuthService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChartOfAccountsComponent, { className: "ChartOfAccountsComponent", filePath: "app/modules/accounting/components/chart-of-accounts/chart-of-accounts.component.ts", lineNumber: 24 });
})();
export {
  ChartOfAccountsComponent
};
//# sourceMappingURL=chunk-KCCV4FCW.js.map
