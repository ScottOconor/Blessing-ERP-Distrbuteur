import {
  AnalyticService
} from "./chunk-EFGTYIKV.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-K3VCSIQL.js";
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
} from "./chunk-FU5PLMG6.js";
import {
  AccountingService
} from "./chunk-TG7BJABV.js";
import {
  AuthService
} from "./chunk-MBNWDFD7.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  HostListener,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcomponentInstance,
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
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EEF5WTPZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PPITZAXW.js";

// src/app/modules/accounting/components/journal-entries/journal-entry-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function JournalEntryFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementEnd();
  }
}
function JournalEntryFormComponent_Conditional_2_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 46);
  }
}
function JournalEntryFormComponent_Conditional_2_Conditional_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 46);
  }
}
function JournalEntryFormComponent_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function JournalEntryFormComponent_Conditional_2_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.post());
    });
    \u0275\u0275conditionalCreate(1, JournalEntryFormComponent_Conditional_2_Conditional_7_Conditional_1_Template, 1, 0, "span", 46);
    \u0275\u0275elementStart(2, "span", 10);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Valider ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 47);
    \u0275\u0275listener("click", function JournalEntryFormComponent_Conditional_2_Conditional_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275conditionalCreate(6, JournalEntryFormComponent_Conditional_2_Conditional_7_Conditional_6_Template, 1, 0, "span", 46);
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Sauvegarder ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.posting || ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.posting ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving || ctx_r2.posting);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.saving ? 6 : -1);
  }
}
function JournalEntryFormComponent_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function JournalEntryFormComponent_Conditional_2_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.reverse());
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2, "swap_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Extourner ");
    \u0275\u0275elementEnd();
  }
}
function JournalEntryFormComponent_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8)(1, "span", 49);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Extourn\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function JournalEntryFormComponent_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8)(1, "span", 49);
    \u0275\u0275text(2, "swap_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \xC9criture d'extourne ");
    \u0275\u0275elementEnd();
  }
}
function JournalEntryFormComponent_Conditional_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 10);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.errorMsg, " ");
  }
}
function JournalEntryFormComponent_Conditional_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 10);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.successMsg, " ");
  }
}
function JournalEntryFormComponent_Conditional_2_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", j_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", j_r5.code, " - ", j_r5.name);
  }
}
function JournalEntryFormComponent_Conditional_2_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r6.name);
  }
}
function JournalEntryFormComponent_Conditional_2_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 50);
    \u0275\u0275text(2, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "span", 52);
    \u0275\u0275text(5, "Solde initial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 53);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("positive", ctx_r2.journalOpeningBalance >= 0)("negative", ctx_r2.journalOpeningBalance < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 5, ctx_r2.journalOpeningBalance, "1.0-0"), " FCFA ");
  }
}
function JournalEntryFormComponent_Conditional_2_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function JournalEntryFormComponent_Conditional_2_Conditional_51_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.autoBalance());
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2, "balance");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \xC9quilibrer ");
    \u0275\u0275elementEnd();
  }
}
function JournalEntryFormComponent_Conditional_2_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28)(1, "span", 10);
    \u0275\u0275text(2, "info_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Pi\xE8ce de caisse \u2014 \xE9quilibre non requis ");
    \u0275\u0275elementEnd();
  }
}
function JournalEntryFormComponent_Conditional_2_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Sup.");
    \u0275\u0275elementEnd();
  }
}
function JournalEntryFormComponent_Conditional_2_For_72_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("mousedown", function JournalEntryFormComponent_Conditional_2_For_72_Conditional_4_For_2_Template_button_mousedown_0_listener() {
      const acc_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const line_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectAccount(line_r9, acc_r11));
    });
    \u0275\u0275elementStart(1, "span", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 66);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const acc_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acc_r11.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(acc_r11.name);
  }
}
function JournalEntryFormComponent_Conditional_2_For_72_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275repeaterCreate(1, JournalEntryFormComponent_Conditional_2_For_72_Conditional_4_For_2_Template, 5, 2, "button", 63, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(line_r9.accountSuggestions);
  }
}
function JournalEntryFormComponent_Conditional_2_For_72_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r12.name);
  }
}
function JournalEntryFormComponent_Conditional_2_For_72_Conditional_14_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r9 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getDistributionSummary(line_r9));
  }
}
function JournalEntryFormComponent_Conditional_2_For_72_Conditional_14_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r9 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getAnalyticLabel(line_r9.analyticAccountId));
  }
}
function JournalEntryFormComponent_Conditional_2_For_72_Conditional_14_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, "Ventiler...");
    \u0275\u0275elementEnd();
  }
}
function JournalEntryFormComponent_Conditional_2_For_72_Conditional_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function JournalEntryFormComponent_Conditional_2_For_72_Conditional_14_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const \u0275$index_200_r14 = \u0275\u0275nextContext(2).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openAnalyticModal(\u0275$index_200_r14));
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2, "analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, JournalEntryFormComponent_Conditional_2_For_72_Conditional_14_Conditional_0_Conditional_3_Template, 2, 1, "span", 70)(4, JournalEntryFormComponent_Conditional_2_For_72_Conditional_14_Conditional_0_Conditional_4_Template, 2, 1, "span", 70)(5, JournalEntryFormComponent_Conditional_2_For_72_Conditional_14_Conditional_0_Conditional_5_Template, 2, 0, "span", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classProp("has-distribution", line_r9.analyticDistributions.length > 0);
    \u0275\u0275property("title", line_r9.analyticDistributions.length > 0 ? "Modifier la ventilation" : "Ajouter ventilation analytique");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(line_r9.analyticDistributions.length > 0 ? 3 : line_r9.analyticAccountId ? 4 : 5);
  }
}
function JournalEntryFormComponent_Conditional_2_For_72_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getDistributionSummary(line_r9) || ctx_r2.getAnalyticLabel(line_r9.analyticAccountId) || "\u2014", " ");
  }
}
function JournalEntryFormComponent_Conditional_2_For_72_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, JournalEntryFormComponent_Conditional_2_For_72_Conditional_14_Conditional_0_Template, 6, 4, "button", 67)(1, JournalEntryFormComponent_Conditional_2_For_72_Conditional_14_Conditional_1_Template, 2, 1, "span", 68);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(!ctx_r2.isReadonly ? 0 : 1);
  }
}
function JournalEntryFormComponent_Conditional_2_For_72_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function JournalEntryFormComponent_Conditional_2_For_72_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 62)(1, "button", 72);
    \u0275\u0275listener("click", function JournalEntryFormComponent_Conditional_2_For_72_Conditional_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const \u0275$index_200_r14 = \u0275\u0275nextContext().$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeLine(\u0275$index_200_r14));
    });
    \u0275\u0275elementStart(2, "span", 10);
    \u0275\u0275text(3, "delete_outline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.lines.length === 1);
  }
}
function JournalEntryFormComponent_Conditional_2_For_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 55)(3, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function JournalEntryFormComponent_Conditional_2_For_72_Template_input_ngModelChange_3_listener($event) {
      const line_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(line_r9.accountSearch, $event) || (line_r9.accountSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function JournalEntryFormComponent_Conditional_2_For_72_Template_input_ngModelChange_3_listener() {
      const line_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onAccountSearch(line_r9));
    })("blur", function JournalEntryFormComponent_Conditional_2_For_72_Template_input_blur_3_listener() {
      const line_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.hideAccountSuggestions(line_r9));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, JournalEntryFormComponent_Conditional_2_For_72_Conditional_4_Template, 3, 0, "div", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function JournalEntryFormComponent_Conditional_2_For_72_Template_input_ngModelChange_6_listener($event) {
      const line_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(line_r9.name, $event) || (line_r9.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "select", 59);
    \u0275\u0275twoWayListener("ngModelChange", function JournalEntryFormComponent_Conditional_2_For_72_Template_select_ngModelChange_8_listener($event) {
      const line_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(line_r9.partnerId, $event) || (line_r9.partnerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 19);
    \u0275\u0275text(10, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(11, JournalEntryFormComponent_Conditional_2_For_72_For_12_Template, 2, 2, "option", 19, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275conditionalCreate(14, JournalEntryFormComponent_Conditional_2_For_72_Conditional_14_Template, 2, 1)(15, JournalEntryFormComponent_Conditional_2_For_72_Conditional_15_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function JournalEntryFormComponent_Conditional_2_For_72_Template_input_ngModelChange_17_listener($event) {
      const line_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(line_r9.debit, $event) || (line_r9.debit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function JournalEntryFormComponent_Conditional_2_For_72_Template_input_ngModelChange_17_listener() {
      const line_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDebitChange(line_r9));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function JournalEntryFormComponent_Conditional_2_For_72_Template_input_ngModelChange_19_listener($event) {
      const line_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(line_r9.credit, $event) || (line_r9.credit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function JournalEntryFormComponent_Conditional_2_For_72_Template_input_ngModelChange_19_listener() {
      const line_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCreditChange(line_r9));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(20, JournalEntryFormComponent_Conditional_2_For_72_Conditional_20_Template, 4, 1, "td", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", line_r9.accountSearch);
    \u0275\u0275property("disabled", ctx_r2.isReadonly);
    \u0275\u0275advance();
    \u0275\u0275conditional(line_r9.showAccountSuggestions ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r9.name);
    \u0275\u0275property("disabled", ctx_r2.isReadonly);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r9.partnerId);
    \u0275\u0275property("disabled", ctx_r2.isReadonly);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.partners);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.isChargeAccount(line_r9) ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", line_r9.debit);
    \u0275\u0275property("disabled", ctx_r2.isReadonly);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", line_r9.credit);
    \u0275\u0275property("disabled", ctx_r2.isReadonly);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isReadonly ? 20 : -1);
  }
}
function JournalEntryFormComponent_Conditional_2_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "button", 73);
    \u0275\u0275listener("click", function JournalEntryFormComponent_Conditional_2_Conditional_73_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addLine());
    });
    \u0275\u0275elementStart(2, "span", 10);
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Ajouter une ligne ");
    \u0275\u0275elementEnd()();
  }
}
function JournalEntryFormComponent_Conditional_2_Conditional_87_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function JournalEntryFormComponent_Conditional_2_Conditional_87_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, "error");
    \u0275\u0275elementEnd();
  }
}
function JournalEntryFormComponent_Conditional_2_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 40);
    \u0275\u0275text(2, "Diff\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 74);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275conditionalCreate(6, JournalEntryFormComponent_Conditional_2_Conditional_87_Conditional_6_Template, 2, 0, "span", 75)(7, JournalEntryFormComponent_Conditional_2_Conditional_87_Conditional_7_Template, 2, 0, "span", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("balanced", ctx_r2.isBalanced)("unbalanced", !ctx_r2.isBalanced);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 6, ctx_r2.difference, "1.2-2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isBalanced ? 6 : 7);
  }
}
function JournalEntryFormComponent_Conditional_2_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 77)(2, "span", 10);
    \u0275\u0275text(3, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 78);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 79)(7, "span", 80)(8, "span", 81);
    \u0275\u0275text(9, "Solde initial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 82);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 83);
    \u0275\u0275text(14, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 80)(16, "span", 81);
    \u0275\u0275text(17, "Mouvement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 82);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "span", 83);
    \u0275\u0275text(22, "=");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 84)(24, "span", 81);
    \u0275\u0275text(25, "Solde final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 82);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.currentJournal == null ? null : ctx_r2.currentJournal.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 13, ctx_r2.journalOpeningBalance, "1.0-0"), " FCFA");
    \u0275\u0275advance(7);
    \u0275\u0275classProp("pos", ctx_r2.journalAccountImpact >= 0)("neg", ctx_r2.journalAccountImpact < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.journalAccountImpact >= 0 ? "+" : "", "", \u0275\u0275pipeBind2(20, 16, ctx_r2.journalAccountImpact, "1.0-0"), " FCFA ");
    \u0275\u0275advance(7);
    \u0275\u0275classProp("pos", (ctx_r2.journalFinalBalance ?? 0) >= 0)("neg", (ctx_r2.journalFinalBalance ?? 0) < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 19, ctx_r2.journalFinalBalance, "1.0-0"), " FCFA ");
  }
}
function JournalEntryFormComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275conditionalCreate(7, JournalEntryFormComponent_Conditional_2_Conditional_7_Template, 10, 4);
    \u0275\u0275conditionalCreate(8, JournalEntryFormComponent_Conditional_2_Conditional_8_Template, 4, 0, "button", 7);
    \u0275\u0275conditionalCreate(9, JournalEntryFormComponent_Conditional_2_Conditional_9_Template, 4, 0, "span", 8);
    \u0275\u0275conditionalCreate(10, JournalEntryFormComponent_Conditional_2_Conditional_10_Template, 4, 0, "span", 8);
    \u0275\u0275elementStart(11, "button", 9);
    \u0275\u0275listener("click", function JournalEntryFormComponent_Conditional_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.router.navigate(["/accounting/journal-entries"]));
    });
    \u0275\u0275elementStart(12, "span", 10);
    \u0275\u0275text(13, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Retour ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(15, JournalEntryFormComponent_Conditional_2_Conditional_15_Template, 4, 1, "div", 11);
    \u0275\u0275conditionalCreate(16, JournalEntryFormComponent_Conditional_2_Conditional_16_Template, 4, 1, "div", 12);
    \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "div", 16)(21, "label");
    \u0275\u0275text(22, "Journal *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function JournalEntryFormComponent_Conditional_2_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.move.journalId, $event) || (ctx_r2.move.journalId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function JournalEntryFormComponent_Conditional_2_Template_select_ngModelChange_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onJournalChange());
    });
    \u0275\u0275elementStart(24, "option", 18);
    \u0275\u0275text(25, "-- S\xE9lectionner --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, JournalEntryFormComponent_Conditional_2_For_27_Template, 2, 3, "option", 19, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 16)(29, "label");
    \u0275\u0275text(30, "Date *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function JournalEntryFormComponent_Conditional_2_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.move.date, $event) || (ctx_r2.move.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 16)(33, "label");
    \u0275\u0275text(34, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function JournalEntryFormComponent_Conditional_2_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.move.ref, $event) || (ctx_r2.move.ref = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 16)(37, "label");
    \u0275\u0275text(38, "Partenaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function JournalEntryFormComponent_Conditional_2_Template_select_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.move.partnerId, $event) || (ctx_r2.move.partnerId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(40, "option", 19);
    \u0275\u0275text(41, "-- Aucun --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(42, JournalEntryFormComponent_Conditional_2_For_43_Template, 2, 2, "option", 19, _forTrack0);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275conditionalCreate(44, JournalEntryFormComponent_Conditional_2_Conditional_44_Template, 9, 8, "div", 22);
    \u0275\u0275elementStart(45, "div", 23)(46, "div", 24)(47, "h3", 25)(48, "span", 26);
    \u0275\u0275text(49, "table_rows");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " Lignes d'\xE9criture ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(51, JournalEntryFormComponent_Conditional_2_Conditional_51_Template, 4, 0, "button", 27);
    \u0275\u0275conditionalCreate(52, JournalEntryFormComponent_Conditional_2_Conditional_52_Template, 4, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 29)(54, "table", 30)(55, "thead")(56, "tr")(57, "th", 31);
    \u0275\u0275text(58, "Compte *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th", 32);
    \u0275\u0275text(60, "Libell\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "th", 33);
    \u0275\u0275text(62, "Partenaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "th", 34);
    \u0275\u0275text(64, "Analytique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "th", 35);
    \u0275\u0275text(66, "D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "th", 35);
    \u0275\u0275text(68, "Cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(69, JournalEntryFormComponent_Conditional_2_Conditional_69_Template, 2, 0, "th", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "tbody");
    \u0275\u0275repeaterCreate(71, JournalEntryFormComponent_Conditional_2_For_72_Template, 21, 14, "tr", null, \u0275\u0275componentInstance().trackByIndex, true);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(73, JournalEntryFormComponent_Conditional_2_Conditional_73_Template, 5, 0, "div", 37);
    \u0275\u0275elementStart(74, "div", 38)(75, "div", 39)(76, "div", 40);
    \u0275\u0275text(77, "Total D\xE9bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 41);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 39)(82, "div", 40);
    \u0275\u0275text(83, "Total Cr\xE9dit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 42);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(87, JournalEntryFormComponent_Conditional_2_Conditional_87_Template, 8, 9, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(88, JournalEntryFormComponent_Conditional_2_Conditional_88_Template, 29, 22, "div", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.move.name || "Nouvelle \xE9criture");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getStateBadgeClass(ctx_r2.move.state));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getStateLabel(ctx_r2.move.state));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.move.state === "draft" || !ctx_r2.move.state ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.move.state === "posted" && !ctx_r2.move.reversalId && !ctx_r2.move.isReversal ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.move.state === "posted" && ctx_r2.move.reversalId ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.move.state === "posted" && ctx_r2.move.isReversal ? 10 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.errorMsg ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.successMsg ? 16 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.move.journalId);
    \u0275\u0275property("disabled", ctx_r2.isReadonly);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.journals);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.move.date);
    \u0275\u0275property("disabled", ctx_r2.isReadonly);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.move.ref);
    \u0275\u0275property("disabled", ctx_r2.isReadonly);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.move.partnerId);
    \u0275\u0275property("disabled", ctx_r2.isReadonly);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.partners);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isBalanceJournal && ctx_r2.journalOpeningBalance !== null ? 44 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!ctx_r2.isReadonly && !ctx_r2.isBalanceJournal ? 51 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isBalanceJournal ? 52 : -1);
    \u0275\u0275advance(17);
    \u0275\u0275conditional(!ctx_r2.isReadonly ? 69 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.lines);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.isReadonly ? 73 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(80, 29, ctx_r2.totalDebit, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(86, 32, ctx_r2.totalCredit, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.isBalanceJournal ? 87 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isBalanceJournal && ctx_r2.journalOpeningBalance !== null ? 88 : -1);
  }
}
function JournalEntryFormComponent_Conditional_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" \u2014 ", ctx_r2.lines[ctx_r2.analyticModalIndex].name, " ");
  }
}
function JournalEntryFormComponent_Conditional_3_For_43_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r20 = ctx.$implicit;
    \u0275\u0275property("ngValue", a_r20.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", a_r20.code, " \u2014 ", a_r20.name);
  }
}
function JournalEntryFormComponent_Conditional_3_For_43_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275text(1, "Choisir le parent d'abord");
    \u0275\u0275elementEnd();
  }
}
function JournalEntryFormComponent_Conditional_3_For_43_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "span", 10);
    \u0275\u0275text(2, "info_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Utilis\xE9 directement ");
    \u0275\u0275elementEnd();
  }
}
function JournalEntryFormComponent_Conditional_3_For_43_Conditional_19_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r22 = ctx.$implicit;
    \u0275\u0275property("ngValue", a_r22.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", a_r22.code, " \u2014 ", a_r22.name);
  }
}
function JournalEntryFormComponent_Conditional_3_For_43_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 116);
    \u0275\u0275twoWayListener("ngModelChange", function JournalEntryFormComponent_Conditional_3_For_43_Conditional_19_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const dist_r19 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(dist_r19.analyticAccountId, $event) || (dist_r19.analyticAccountId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 19);
    \u0275\u0275text(2, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, JournalEntryFormComponent_Conditional_3_For_43_Conditional_19_For_4_Template, 2, 3, "option", 19, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dist_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", dist_r19.analyticAccountId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.getChildAnalyticAccounts(dist_r19.parentAnalyticId));
  }
}
function JournalEntryFormComponent_Conditional_3_For_43_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dist_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("pct-full", ctx_r2.getDistributionPercent(ctx_r2.lines[ctx_r2.analyticModalIndex], dist_r19) >= 100)("pct-partial", ctx_r2.getDistributionPercent(ctx_r2.lines[ctx_r2.analyticModalIndex], dist_r19) > 0 && ctx_r2.getDistributionPercent(ctx_r2.lines[ctx_r2.analyticModalIndex], dist_r19) < 100);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getDistributionPercent(ctx_r2.lines[ctx_r2.analyticModalIndex], dist_r19), "% ");
  }
}
function JournalEntryFormComponent_Conditional_3_For_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 113);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 114)(4, "div", 115)(5, "label");
    \u0275\u0275text(6, "Compte parent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 116);
    \u0275\u0275twoWayListener("ngModelChange", function JournalEntryFormComponent_Conditional_3_For_43_Template_select_ngModelChange_7_listener($event) {
      const dist_r19 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(dist_r19.parentAnalyticId, $event) || (dist_r19.parentAnalyticId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function JournalEntryFormComponent_Conditional_3_For_43_Template_select_ngModelChange_7_listener() {
      const dist_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onParentAnalyticChange(dist_r19));
    });
    \u0275\u0275elementStart(8, "option", 19);
    \u0275\u0275text(9, "\u2014 S\xE9lectionner le parent \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, JournalEntryFormComponent_Conditional_3_For_43_For_11_Template, 2, 3, "option", 19, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 117);
    \u0275\u0275text(13, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 115)(15, "label");
    \u0275\u0275text(16, "Sous-compte");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, JournalEntryFormComponent_Conditional_3_For_43_Conditional_17_Template, 2, 0, "div", 118)(18, JournalEntryFormComponent_Conditional_3_For_43_Conditional_18_Template, 4, 0, "div", 119)(19, JournalEntryFormComponent_Conditional_3_For_43_Conditional_19_Template, 5, 2, "select", 120);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 121)(21, "label");
    \u0275\u0275text(22, "Montant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 122)(24, "input", 123);
    \u0275\u0275twoWayListener("ngModelChange", function JournalEntryFormComponent_Conditional_3_For_43_Template_input_ngModelChange_24_listener($event) {
      const dist_r19 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(dist_r19.amount, $event) || (dist_r19.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 124);
    \u0275\u0275listener("click", function JournalEntryFormComponent_Conditional_3_For_43_Template_button_click_25_listener() {
      const \u0275$index_443_r23 = \u0275\u0275restoreView(_r18).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.autoFillRemaining(ctx_r2.lines[ctx_r2.analyticModalIndex], \u0275$index_443_r23));
    });
    \u0275\u0275elementStart(26, "span", 10);
    \u0275\u0275text(27, "auto_fix_high");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(28, JournalEntryFormComponent_Conditional_3_For_43_Conditional_28_Template, 2, 5, "div", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 126);
    \u0275\u0275listener("click", function JournalEntryFormComponent_Conditional_3_For_43_Template_button_click_29_listener() {
      const \u0275$index_443_r23 = \u0275\u0275restoreView(_r18).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeDistributionRow(ctx_r2.lines[ctx_r2.analyticModalIndex], \u0275$index_443_r23));
    });
    \u0275\u0275elementStart(30, "span", 10);
    \u0275\u0275text(31, "delete_outline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dist_r19 = ctx.$implicit;
    const \u0275$index_443_r23 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_443_r23 + 1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", dist_r19.parentAnalyticId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.parentAnalyticAccounts);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!dist_r19.parentAnalyticId ? 17 : ctx_r2.getChildAnalyticAccounts(dist_r19.parentAnalyticId).length === 0 ? 18 : 19);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", dist_r19.amount);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.getLineAmount(ctx_r2.lines[ctx_r2.analyticModalIndex]) > 0 ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.lines[ctx_r2.analyticModalIndex].analyticDistributions.length <= 1);
  }
}
function JournalEntryFormComponent_Conditional_3_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 128);
    \u0275\u0275listener("click", function JournalEntryFormComponent_Conditional_3_Conditional_49_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.splitEqually(ctx_r2.lines[ctx_r2.analyticModalIndex]));
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2, "call_split");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " R\xE9partir \xE9quitablement ");
    \u0275\u0275elementEnd();
  }
}
function JournalEntryFormComponent_Conditional_3_Conditional_62_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" Il reste ", \u0275\u0275pipeBind2(1, 1, ctx_r2.getRemaining(ctx_r2.lines[ctx_r2.analyticModalIndex]), "1.2-2"), " \xE0 ventiler ");
  }
}
function JournalEntryFormComponent_Conditional_3_Conditional_62_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" La ventilation d\xE9passe le montant de la ligne de ", \u0275\u0275pipeBind2(1, 1, -ctx_r2.getRemaining(ctx_r2.lines[ctx_r2.analyticModalIndex]), "1.2-2"), " ");
  }
}
function JournalEntryFormComponent_Conditional_3_Conditional_62_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Veuillez s\xE9lectionner un compte analytique pour chaque ligne ");
  }
}
function JournalEntryFormComponent_Conditional_3_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "span", 10);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, JournalEntryFormComponent_Conditional_3_Conditional_62_Conditional_3_Template, 2, 4)(4, JournalEntryFormComponent_Conditional_3_Conditional_62_Conditional_4_Template, 2, 4)(5, JournalEntryFormComponent_Conditional_3_Conditional_62_Conditional_5_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.getRemaining(ctx_r2.lines[ctx_r2.analyticModalIndex]) > 0.01 ? 3 : ctx_r2.getRemaining(ctx_r2.lines[ctx_r2.analyticModalIndex]) < -0.01 ? 4 : 5);
  }
}
function JournalEntryFormComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275listener("click", function JournalEntryFormComponent_Conditional_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAnalyticModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 86)(2, "div", 87)(3, "div", 88)(4, "span", 10);
    \u0275\u0275text(5, "analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Ventilation analytique ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 89);
    \u0275\u0275listener("click", function JournalEntryFormComponent_Conditional_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAnalyticModal());
    });
    \u0275\u0275elementStart(8, "span", 10);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 90)(11, "span", 91)(12, "span", 92);
    \u0275\u0275text(13, "receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275conditionalCreate(15, JournalEntryFormComponent_Conditional_3_Conditional_15_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 93);
    \u0275\u0275text(17, " Montant : ");
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 94)(22, "div", 95);
    \u0275\u0275element(23, "div", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 97)(25, "span", 98);
    \u0275\u0275element(26, "span", 99);
    \u0275\u0275text(27, " Ventil\xE9 : ");
    \u0275\u0275elementStart(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "span", 100);
    \u0275\u0275text(32, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 98);
    \u0275\u0275element(34, "span", 101);
    \u0275\u0275text(35, " Reste : ");
    \u0275\u0275elementStart(36, "strong");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "span", 102);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 103);
    \u0275\u0275repeaterCreate(42, JournalEntryFormComponent_Conditional_3_For_43_Template, 32, 7, "div", 104, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(44, "div", 105)(45, "button", 106);
    \u0275\u0275listener("click", function JournalEntryFormComponent_Conditional_3_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addDistributionRow(ctx_r2.lines[ctx_r2.analyticModalIndex]));
    });
    \u0275\u0275elementStart(46, "span", 10);
    \u0275\u0275text(47, "add_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " Ajouter un sous-compte ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(49, JournalEntryFormComponent_Conditional_3_Conditional_49_Template, 4, 0, "button", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 108)(51, "button", 109);
    \u0275\u0275listener("click", function JournalEntryFormComponent_Conditional_3_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearDistributions(ctx_r2.lines[ctx_r2.analyticModalIndex]));
    });
    \u0275\u0275elementStart(52, "span", 10);
    \u0275\u0275text(53, "clear");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, " Effacer ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "div", 110);
    \u0275\u0275elementStart(56, "button", 109);
    \u0275\u0275listener("click", function JournalEntryFormComponent_Conditional_3_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAnalyticModal());
    });
    \u0275\u0275text(57, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 111);
    \u0275\u0275listener("click", function JournalEntryFormComponent_Conditional_3_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDistribution(ctx_r2.lines[ctx_r2.analyticModalIndex]));
    });
    \u0275\u0275elementStart(59, "span", 10);
    \u0275\u0275text(60, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, " Confirmer ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(62, JournalEntryFormComponent_Conditional_3_Conditional_62_Template, 6, 1, "div", 112);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1(" ", ctx_r2.lines[ctx_r2.analyticModalIndex].accountSearch || "Ligne sans compte", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.lines[ctx_r2.analyticModalIndex].name ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 17, ctx_r2.getLineAmount(ctx_r2.lines[ctx_r2.analyticModalIndex]), "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r2.getDistributedPercent(ctx_r2.lines[ctx_r2.analyticModalIndex]), "%");
    \u0275\u0275classProp("full", ctx_r2.getDistributedPercent(ctx_r2.lines[ctx_r2.analyticModalIndex]) >= 100);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 20, ctx_r2.getDistributedTotal(ctx_r2.lines[ctx_r2.analyticModalIndex]), "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("dpl-warn", ctx_r2.getRemaining(ctx_r2.lines[ctx_r2.analyticModalIndex]) > 0.01)("dpl-ok", ctx_r2.Math.abs(ctx_r2.getRemaining(ctx_r2.lines[ctx_r2.analyticModalIndex])) < 0.01);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 23, ctx_r2.getRemaining(ctx_r2.lines[ctx_r2.analyticModalIndex]), "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.getDistributedPercent(ctx_r2.lines[ctx_r2.analyticModalIndex]), "%");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.lines[ctx_r2.analyticModalIndex].analyticDistributions);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r2.lines[ctx_r2.analyticModalIndex].analyticDistributions.length > 1 ? 49 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", !ctx_r2.isDistributionValid(ctx_r2.lines[ctx_r2.analyticModalIndex]));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx_r2.isDistributionValid(ctx_r2.lines[ctx_r2.analyticModalIndex]) ? 62 : -1);
  }
}
var JournalEntryFormComponent = class _JournalEntryFormComponent {
  get isBalanceJournal() {
    return this.currentJournal?.type === "cash" || this.currentJournal?.type === "bank";
  }
  constructor(accountingService, analyticService, authService, router, route) {
    this.accountingService = accountingService;
    this.analyticService = analyticService;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.move = {
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      journalId: 0,
      companyId: 1,
      lines: [],
      state: "draft"
    };
    this.lines = [];
    this.journals = [];
    this.accounts = [];
    this.partners = [];
    this.analyticAccounts = [];
    this.loading = false;
    this.saving = false;
    this.posting = false;
    this.isNew = true;
    this.errorMsg = "";
    this.successMsg = "";
    this.currentJournal = null;
    this.journalAccountCode = null;
    this.journalAccountName = null;
    this.journalAccountId = null;
    this.journalOpeningBalance = null;
    this.analyticModalIndex = null;
    this.Math = Math;
  }
  ngOnInit() {
    this.move.companyId = this.authService.getCompanyId();
    this.loadReferenceData();
    const id = this.route.snapshot.paramMap.get("id");
    if (id && id !== "new") {
      this.isNew = false;
      this.loadMove(parseInt(id));
    } else {
      this.addLine();
      this.addLine();
      if (this.move.journalId)
        this.onJournalChange();
    }
  }
  loadReferenceData() {
    const companyId = this.authService.getCompanyId();
    this.accountingService.getJournals(companyId).subscribe({
      next: (j) => {
        this.journals = j.filter((x) => x.active);
        if (!this.move.journalId && this.journals.length > 0) {
          this.move.journalId = this.journals[0].id;
        }
        if (this.move.journalId)
          this.onJournalChange();
      },
      error: () => {
      }
    });
    this.accountingService.getAccounts(companyId).subscribe({
      next: (a) => this.accounts = a.filter((x) => !x.deprecated),
      error: () => {
      }
    });
    this.accountingService.getPartners(companyId).subscribe({
      next: (p) => this.partners = p,
      error: () => {
      }
    });
    this.analyticService.getAccounts(companyId).subscribe({
      next: (a) => this.analyticAccounts = a,
      error: () => {
      }
    });
  }
  loadMove(id) {
    this.loading = true;
    this.accountingService.getMove(id).subscribe({
      next: (move) => {
        this.move = move;
        this.lines = move.lines.map((l) => this.lineToForm(l));
        if (this.lines.length === 0)
          this.addLine();
        this.loading = false;
        this.onJournalChange();
      },
      error: () => {
        this.loading = false;
        this.errorMsg = "\xC9criture introuvable";
      }
    });
  }
  lineToForm(line) {
    const acc = this.accounts.find((a) => a.id === line.accountId);
    const distributions = line.analyticDistributions ? line.analyticDistributions.map((d) => {
      const analyticAcc = this.analyticAccounts.find((a) => a.id === d.analyticAccountId);
      return {
        analyticAccountId: d.analyticAccountId,
        parentAnalyticId: analyticAcc?.parentId || null,
        amount: Number(d.amount)
      };
    }) : [];
    return {
      id: line.id,
      accountId: line.accountId,
      accountSearch: acc ? `${acc.code} - ${acc.name}` : String(line.accountId),
      accountCode: acc?.code || line.accountCode || "",
      accountName: acc?.name || line.accountName || "",
      showAccountSuggestions: false,
      accountSuggestions: [],
      name: line.name,
      partnerId: line.partnerId || null,
      partnerName: line.partnerName || "",
      debit: line.debit,
      credit: line.credit,
      analyticAccountId: line.analyticAccountId || null,
      analyticDistributions: distributions
    };
  }
  addLine() {
    this.lines.push({
      accountId: null,
      accountSearch: "",
      accountCode: "",
      accountName: "",
      showAccountSuggestions: false,
      accountSuggestions: [],
      name: "",
      partnerId: null,
      partnerName: "",
      debit: 0,
      credit: 0,
      analyticAccountId: null,
      analyticDistributions: []
    });
  }
  removeLine(index) {
    if (this.lines.length > 1) {
      this.lines.splice(index, 1);
      if (this.analyticModalIndex === index)
        this.analyticModalIndex = null;
    }
  }
  // ===== AUTOCOMPLETE COMPTE =====
  onAccountSearch(line) {
    const term = line.accountSearch.toLowerCase().trim();
    if (term.length < 1) {
      line.accountSuggestions = [];
      line.showAccountSuggestions = false;
      return;
    }
    line.accountSuggestions = this.accounts.filter((a) => a.code.toLowerCase().startsWith(term) || a.name.toLowerCase().includes(term)).slice(0, 10);
    line.showAccountSuggestions = line.accountSuggestions.length > 0;
  }
  selectAccount(line, account) {
    line.accountId = account.id;
    line.accountCode = account.code;
    line.accountName = account.name;
    line.accountSearch = `${account.code} - ${account.name}`;
    line.showAccountSuggestions = false;
    line.accountSuggestions = [];
    if (!line.name)
      line.name = account.name;
  }
  hideAccountSuggestions(line) {
    setTimeout(() => {
      line.showAccountSuggestions = false;
    }, 200);
  }
  // ===== DÉBIT / CRÉDIT =====
  onDebitChange(line) {
    if (line.debit > 0)
      line.credit = 0;
  }
  onCreditChange(line) {
    if (line.credit > 0)
      line.debit = 0;
  }
  get totalDebit() {
    return this.lines.reduce((s, l) => s + (Number(l.debit) || 0), 0);
  }
  get totalCredit() {
    return this.lines.reduce((s, l) => s + (Number(l.credit) || 0), 0);
  }
  get difference() {
    return Math.abs(this.totalDebit - this.totalCredit);
  }
  onJournalChange() {
    if (!this.move.journalId)
      return;
    this.currentJournal = this.journals.find((j) => j.id === this.move.journalId) || null;
    this.journalOpeningBalance = null;
    this.journalAccountId = null;
    if (!this.isBalanceJournal)
      return;
    this.accountingService.getJournalAccountBalance(this.move.journalId).subscribe({
      next: (data) => {
        this.journalAccountCode = data.accountCode;
        this.journalAccountName = data.accountName;
        this.journalAccountId = data.accountId;
        this.journalOpeningBalance = data.balance;
      },
      error: () => {
        this.journalOpeningBalance = null;
      }
    });
  }
  /** Impact de l'écriture en cours sur le compte du journal */
  get journalAccountImpact() {
    if (this.journalAccountId === null)
      return 0;
    return this.lines.reduce((sum, l) => {
      if (l.accountId === this.journalAccountId) {
        sum += (Number(l.debit) || 0) - (Number(l.credit) || 0);
      }
      return sum;
    }, 0);
  }
  get journalFinalBalance() {
    if (this.journalOpeningBalance === null)
      return null;
    return this.journalOpeningBalance + this.journalAccountImpact;
  }
  get isBalanced() {
    if (this.isBalanceJournal)
      return true;
    return Math.abs(this.totalDebit - this.totalCredit) < 1e-3;
  }
  autoBalance() {
    const diff = this.totalDebit - this.totalCredit;
    if (Math.abs(diff) < 1e-3)
      return;
    this.lines.push({
      accountId: null,
      accountSearch: "",
      accountCode: "",
      accountName: "",
      showAccountSuggestions: false,
      accountSuggestions: [],
      name: "Ligne d'\xE9quilibre",
      partnerId: null,
      partnerName: "",
      debit: diff < 0 ? -diff : 0,
      credit: diff > 0 ? diff : 0,
      analyticAccountId: null,
      analyticDistributions: []
    });
  }
  // ===== VENTILATION ANALYTIQUE =====
  openAnalyticModal(index) {
    this.analyticModalIndex = index;
    const line = this.lines[index];
    if (line.analyticDistributions.length === 0) {
      const lineAmount = Number(line.debit) > 0 ? Number(line.debit) : Number(line.credit);
      if (line.analyticAccountId && lineAmount > 0) {
        const analyticAcc = this.analyticAccounts.find((a) => a.id === line.analyticAccountId);
        line.analyticDistributions = [{ analyticAccountId: line.analyticAccountId, parentAnalyticId: analyticAcc?.parentId || null, amount: lineAmount }];
      } else {
        line.analyticDistributions = [{ analyticAccountId: null, parentAnalyticId: null, amount: lineAmount > 0 ? lineAmount : 0 }];
      }
    }
  }
  closeAnalyticModal() {
    this.analyticModalIndex = null;
  }
  onEsc() {
    this.analyticModalIndex = null;
  }
  get parentAnalyticAccounts() {
    return this.analyticAccounts.filter((a) => !a.parentId);
  }
  getChildAnalyticAccounts(parentId) {
    if (!parentId)
      return [];
    return this.analyticAccounts.filter((a) => a.parentId === parentId);
  }
  onParentAnalyticChange(dist) {
    const children = this.getChildAnalyticAccounts(dist.parentAnalyticId);
    if (children.length === 0) {
      dist.analyticAccountId = dist.parentAnalyticId;
    } else {
      dist.analyticAccountId = null;
    }
  }
  addDistributionRow(line) {
    const remaining = this.getRemaining(line);
    const lastRow = line.analyticDistributions[line.analyticDistributions.length - 1];
    const inheritedParentId = lastRow?.parentAnalyticId ?? null;
    line.analyticDistributions.push({
      analyticAccountId: null,
      parentAnalyticId: inheritedParentId,
      amount: remaining > 0 ? remaining : 0
    });
  }
  splitEqually(line) {
    const total = this.getLineAmount(line);
    const count = line.analyticDistributions.length;
    if (count === 0)
      return;
    const share = Math.floor(total / count * 100) / 100;
    const remainder = Math.round((total - share * count) * 100) / 100;
    line.analyticDistributions.forEach((d, i) => {
      d.amount = i === count - 1 ? share + remainder : share;
    });
  }
  getDistributionPercent(line, dist) {
    const total = this.getLineAmount(line);
    if (!total)
      return 0;
    return Math.round(Number(dist.amount) / total * 100);
  }
  getDistributedPercent(line) {
    const total = this.getLineAmount(line);
    if (!total)
      return 0;
    return Math.min(100, Math.round(this.getDistributedTotal(line) / total * 100));
  }
  removeDistributionRow(line, i) {
    line.analyticDistributions.splice(i, 1);
  }
  getLineAmount(line) {
    return Number(line.debit) > 0 ? Number(line.debit) : Number(line.credit);
  }
  getDistributedTotal(line) {
    return line.analyticDistributions.reduce((s, d) => s + (Number(d.amount) || 0), 0);
  }
  getRemaining(line) {
    return Math.round((this.getLineAmount(line) - this.getDistributedTotal(line)) * 100) / 100;
  }
  isDistributionValid(line) {
    const rem = this.getRemaining(line);
    return Math.abs(rem) < 0.01 && line.analyticDistributions.every((d) => d.analyticAccountId !== null);
  }
  autoFillRemaining(line, i) {
    const rem = this.getRemaining(line);
    if (Math.abs(rem) > 0 && line.analyticDistributions[i]) {
      line.analyticDistributions[i].amount = (Number(line.analyticDistributions[i].amount) || 0) + rem;
    }
  }
  confirmDistribution(line) {
    if (line.analyticDistributions.length > 0 && line.analyticDistributions[0].analyticAccountId) {
      line.analyticAccountId = line.analyticDistributions[0].analyticAccountId;
    }
    this.analyticModalIndex = null;
  }
  clearDistributions(line) {
    line.analyticDistributions = [];
    line.analyticAccountId = null;
  }
  getDistributionSummary(line) {
    if (line.analyticDistributions.length === 0)
      return "";
    if (line.analyticDistributions.length === 1) {
      const acc = this.analyticAccounts.find((a) => a.id === line.analyticDistributions[0].analyticAccountId);
      return acc ? acc.name : "";
    }
    return `${line.analyticDistributions.length} comptes`;
  }
  /** Seuls les comptes de charges (classe 6) peuvent avoir une ventilation analytique */
  isChargeAccount(line) {
    return line.accountCode?.startsWith("6") ?? false;
  }
  getAnalyticLabel(id) {
    if (!id)
      return "";
    const a = this.analyticAccounts.find((x) => x.id === id);
    return a ? `${a.code} \u2014 ${a.name}` : "";
  }
  // ===== SAUVEGARDE =====
  formToLines() {
    return this.lines.filter((l) => l.accountId !== null).map((l) => ({
      id: l.id,
      accountId: l.accountId,
      accountCode: l.accountCode,
      accountName: l.accountName,
      partnerId: l.partnerId || void 0,
      partnerName: l.partnerName || void 0,
      name: l.name || "",
      debit: Number(l.debit) || 0,
      credit: Number(l.credit) || 0,
      analyticAccountId: l.analyticDistributions.length > 0 ? l.analyticDistributions[0].analyticAccountId || l.analyticAccountId : l.analyticAccountId,
      analyticDistributions: l.analyticDistributions.filter((d) => d.analyticAccountId !== null && Number(d.amount) > 0).map((d) => ({ analyticAccountId: d.analyticAccountId, amount: Number(d.amount) }))
    }));
  }
  save() {
    this.errorMsg = "";
    if (!this.move.journalId) {
      this.errorMsg = "S\xE9lectionnez un journal";
      return;
    }
    if (!this.move.date) {
      this.errorMsg = "S\xE9lectionnez une date";
      return;
    }
    const lines = this.formToLines();
    const minLines = this.isBalanceJournal ? 1 : 2;
    if (lines.length < minLines) {
      this.errorMsg = this.isBalanceJournal ? "L'\xE9criture doit avoir au moins 1 ligne" : "L'\xE9criture doit avoir au moins 2 lignes";
      return;
    }
    this.saving = true;
    const moveData = __spreadProps(__spreadValues({}, this.move), { lines });
    const obs = this.isNew ? this.accountingService.createMove(moveData) : this.accountingService.updateMove(this.move.id, moveData);
    obs.subscribe({
      next: (saved) => {
        this.saving = false;
        this.move = saved;
        this.lines = saved.lines.map((l) => this.lineToForm(l));
        this.successMsg = "\xC9criture sauvegard\xE9e avec succ\xE8s";
        setTimeout(() => this.successMsg = "", 3e3);
        if (this.isNew) {
          this.isNew = false;
          this.router.navigate(["/accounting/journal-entries", saved.id]);
        }
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || "Erreur lors de la sauvegarde";
      }
    });
  }
  post() {
    if (!this.isBalanceJournal && !this.isBalanced) {
      this.errorMsg = "L'\xE9criture doit \xEAtre \xE9quilibr\xE9e (d\xE9bit = cr\xE9dit)";
      return;
    }
    if (!this.move.id) {
      this.save();
      return;
    }
    if (!confirm("Valider cette \xE9criture ? Cette action est irr\xE9versible."))
      return;
    this.posting = true;
    this.accountingService.postMove(this.move.id).subscribe({
      next: (posted) => {
        this.posting = false;
        this.move = posted;
        this.lines = posted.lines.map((l) => this.lineToForm(l));
        this.successMsg = "\xC9criture valid\xE9e avec succ\xE8s !";
        setTimeout(() => this.successMsg = "", 3e3);
      },
      error: (err) => {
        this.posting = false;
        this.errorMsg = err.error?.message || "Erreur lors de la validation";
      }
    });
  }
  reverse() {
    if (!this.move.id)
      return;
    if (!confirm("Extourner cette \xE9criture ? Une \xE9criture inverse valid\xE9e sera cr\xE9\xE9e."))
      return;
    this.accountingService.reverseMove(this.move.id).subscribe({
      next: (reversed) => {
        this.successMsg = `Extourne ${reversed.name} cr\xE9\xE9e`;
        setTimeout(() => this.router.navigate(["/accounting/journal-entries", reversed.id]), 800);
      },
      error: (err) => {
        this.errorMsg = err.error?.message || "Erreur lors de l'extourne";
      }
    });
  }
  get isReadonly() {
    return this.move.state === "posted" || this.move.state === "cancel";
  }
  getStateLabel(state) {
    const map = { draft: "Brouillon", posted: "Valid\xE9", cancel: "Annul\xE9" };
    return map[state || ""] || "";
  }
  getStateBadgeClass(state) {
    const map = { draft: "badge-draft", posted: "badge-posted", cancel: "badge-cancel" };
    return "badge " + (map[state || ""] || "badge-secondary");
  }
  trackByIndex(index) {
    return index;
  }
  static {
    this.\u0275fac = function JournalEntryFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JournalEntryFormComponent)(\u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AnalyticService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JournalEntryFormComponent, selectors: [["app-journal-entry-form"]], hostBindings: function JournalEntryFormComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function JournalEntryFormComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEsc();
        }, \u0275\u0275resolveDocument);
      }
    }, decls: 4, vars: 2, consts: [[1, "page-container"], [2, "text-align", "center", "padding", "80px"], [1, "spinner"], [1, "entry-header", "card", "mb-3"], [1, "entry-header-left"], [1, "entry-number"], [1, "entry-actions"], [1, "btn", "btn-reverse"], [1, "badge-reversed"], [1, "btn", "btn-outline", 3, "click"], [1, "material-icons"], [1, "alert-error", "mb-3"], [1, "alert-success", "mb-3"], [1, "card", "mb-3"], [1, "card-body"], [1, "form-row", "cols-4"], [1, "form-group"], [1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["disabled", "", 3, "ngValue"], [3, "ngValue"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["type", "text", "placeholder", "R\xE9f\xE9rence externe", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "balance-bar", "mb-3"], [1, "card"], [1, "card-header"], [2, "font-size", "14px"], [1, "material-icons", 2, "font-size", "18px", "color", "#714B67"], [1, "btn", "btn-outline-primary", "btn-sm"], [1, "caisse-info-badge"], [1, "card-body", 2, "padding", "0", "overflow-x", "auto"], [1, "entry-lines-table"], [2, "min-width", "220px"], [2, "min-width", "180px"], [2, "min-width", "130px"], [2, "min-width", "160px"], [2, "width", "120px", "text-align", "right"], [2, "width", "48px", "text-align", "center"], [2, "padding", "8px 12px"], [1, "entry-totals"], [1, "total-item"], [1, "total-label"], [1, "total-value", "text-debit"], [1, "total-value", "text-credit"], [1, "total-item", "total-diff"], [1, "final-balance-bar"], [1, "btn", "btn-success", 3, "click", "disabled"], [1, "spinner-sm-white"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-reverse", 3, "click"], [1, "material-icons", 2, "font-size", "14px"], [1, "material-icons", 2, "font-size", "20px", "color", "#714B67"], [1, "balance-item"], [1, "balance-label"], [1, "balance-value", "mono"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "autocomplete-container"], ["type", "text", "placeholder", "Taper code ou nom...", 1, "line-input", 3, "ngModelChange", "blur", "ngModel", "disabled"], [1, "autocomplete-list"], ["type", "text", "placeholder", "Description...", 1, "line-input", 3, "ngModelChange", "ngModel", "disabled"], [1, "line-input", 3, "ngModelChange", "ngModel", "disabled"], [1, "analytic-na"], ["type", "number", "min", "0", "step", "0.01", 1, "line-input", "text-right", 3, "ngModelChange", "ngModel", "disabled"], [2, "text-align", "center"], ["type", "button", 1, "autocomplete-item"], ["type", "button", 1, "autocomplete-item", 3, "mousedown"], [1, "account-code"], [1, "account-name"], ["type", "button", 1, "btn-analytic", 3, "has-distribution", "title"], [1, "analytic-readonly"], ["type", "button", 1, "btn-analytic", 3, "click", "title"], [1, "analytic-summary"], [1, "analytic-placeholder"], ["type", "button", "title", "Supprimer", 1, "btn-remove-line", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "total-value"], [1, "material-icons", "balanced-icon"], [1, "material-icons", "unbalanced-icon"], [1, "final-balance-left"], [1, "final-balance-journal"], [1, "final-balance-breakdown"], [1, "fbb-item"], [1, "fbb-label"], [1, "fbb-value"], [1, "fbb-sep"], [1, "fbb-item", "fbb-result"], [1, "analytic-overlay", 3, "click"], [1, "analytic-modal"], [1, "analytic-modal-header"], [1, "analytic-modal-title"], [1, "btn-icon", 3, "click"], [1, "analytic-modal-info"], [1, "analytic-line-label"], [1, "material-icons", 2, "font-size", "14px", "vertical-align", "middle"], [1, "analytic-line-amount"], [1, "dist-progress-bar-wrap"], [1, "dist-progress-track"], [1, "dist-progress-fill"], [1, "dist-progress-legend"], [1, "dpl-item"], [1, "dpl-dot", "ventile"], [1, "dpl-sep"], [1, "dpl-dot", "reste"], [1, "dpl-pct"], [1, "analytic-modal-body"], [1, "dist-row"], [1, "dist-add-zone"], ["type", "button", 1, "btn-add-dist", 3, "click"], ["type", "button", "title", "R\xE9partir le montant total \xE9quitablement entre toutes les lignes", 1, "btn-split-equal"], [1, "analytic-modal-footer"], [1, "btn", "btn-outline", "btn-sm", 3, "click"], [2, "flex", "1"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "dist-warning"], [1, "dist-row-num"], [1, "dist-selects"], [1, "dist-select-group"], [1, "form-control", 3, "ngModelChange", "ngModel"], [1, "dist-arrow"], [1, "dist-subaccount-placeholder"], [1, "dist-subaccount-placeholder", "dist-direct"], [1, "form-control", 3, "ngModel"], [1, "dist-amount-block"], [1, "dist-amount-row"], ["type", "number", "min", "0", "step", "0.01", "placeholder", "0.00", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "button", "title", "Compl\xE9ter avec le reste", 1, "btn-fill-remaining", 3, "click"], [1, "dist-pct-badge", 3, "pct-full", "pct-partial"], ["type", "button", "title", "Supprimer cette ligne", 1, "btn-remove-dist", 3, "click", "disabled"], [1, "dist-pct-badge"], ["type", "button", "title", "R\xE9partir le montant total \xE9quitablement entre toutes les lignes", 1, "btn-split-equal", 3, "click"]], template: function JournalEntryFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, JournalEntryFormComponent_Conditional_1_Template, 2, 0, "div", 1)(2, JournalEntryFormComponent_Conditional_2_Template, 89, 35);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, JournalEntryFormComponent_Conditional_3_Template, 63, 26);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 1 : 2);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.analyticModalIndex !== null && ctx.lines[ctx.analyticModalIndex] ? 3 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, DecimalPipe], styles: [`@charset "UTF-8";


.balance-bar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 14px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  padding: 10px 20px;
  border-left: 4px solid #714B67;
}
.balance-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0 4px;
}
.balance-label[_ngcontent-%COMP%] {
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 600;
  color: #adb5bd;
  letter-spacing: 0.5px;
}
.balance-value[_ngcontent-%COMP%] {
  font-size: 16px;
  font-weight: 700;
  color: #212529;
}
.balance-value.mono[_ngcontent-%COMP%] {
  font-family: monospace;
}
.balance-value.positive[_ngcontent-%COMP%] {
  color: #198754;
}
.balance-value.negative[_ngcontent-%COMP%] {
  color: #dc3545;
}
.balance-separator[_ngcontent-%COMP%] {
  width: 1px;
  height: 32px;
  background: #e9ecef;
  margin: 0 8px;
  flex-shrink: 0;
}
.final-balance-bar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  margin-top: 4px;
  background:
    linear-gradient(
      135deg,
      #f8f3ff 0%,
      #f0fafa 100%);
  border-top: 2px solid #e2e8ef;
  flex-wrap: wrap;
  gap: 12px;
}
.final-balance-left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #714B67;
}
.final-balance-left[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 20px;
}
.final-balance-journal[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 700;
  color: #714B67;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.final-balance-breakdown[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.fbb-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.fbb-item.fbb-result[_ngcontent-%COMP%] {
  background: white;
  border-radius: 8px;
  padding: 8px 16px;
  box-shadow: 0 2px 8px rgba(113, 75, 103, 0.15);
  border: 1px solid #e0d4ea;
}
.fbb-item.fbb-result[_ngcontent-%COMP%]   .fbb-label[_ngcontent-%COMP%] {
  color: #714B67;
}
.fbb-item.fbb-result[_ngcontent-%COMP%]   .fbb-value[_ngcontent-%COMP%] {
  font-size: 18px;
}
.fbb-label[_ngcontent-%COMP%] {
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 600;
  color: #adb5bd;
  letter-spacing: 0.4px;
}
.fbb-value[_ngcontent-%COMP%] {
  font-size: 14px;
  font-weight: 700;
  font-family: monospace;
  color: #212529;
}
.fbb-value.pos[_ngcontent-%COMP%] {
  color: #198754;
}
.fbb-value.neg[_ngcontent-%COMP%] {
  color: #dc3545;
}
.fbb-sep[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 300;
  color: #adb5bd;
  padding-top: 10px;
}
.badge-reversed[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  background: #f0f0f0;
  color: #6c757d;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
}
.btn-reverse[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #6f42c1;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s;
}
.btn-reverse[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
.btn-reverse[_ngcontent-%COMP%]:hover {
  background: #5a32a3;
}
.entry-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px !important;
  flex-wrap: wrap;
  gap: 16px;
}
.entry-header-left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
}
.entry-number[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 700;
  color: #212529;
}
.entry-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 10px;
  align-items: center;
}
.entry-lines-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
}
.entry-lines-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  background: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
}
.entry-lines-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  padding: 10px 10px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #6c757d;
  white-space: nowrap;
}
.entry-lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.1s;
}
.entry-lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
  background: #fafbfc;
}
.entry-lines-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 3px 4px;
  vertical-align: middle;
}
.line-input[_ngcontent-%COMP%] {
  width: 100%;
  border: 1px solid transparent;
  padding: 7px 8px;
  font-size: 13px;
  background: transparent;
  border-radius: 4px;
  outline: none;
  font-family: "Roboto", sans-serif;
  color: #212529;
}
.line-input[_ngcontent-%COMP%]:focus {
  border-color: #714B67;
  background: white;
  box-shadow: 0 0 0 2px rgba(113, 75, 103, 0.12);
}
.line-input[type=number][_ngcontent-%COMP%] {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
.line-input[_ngcontent-%COMP%]:disabled {
  background: #f9f9f9;
  color: #6c757d;
  cursor: default;
}
select.line-input[_ngcontent-%COMP%] {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%236c757d' d='M5 6L0 0h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  padding-right: 24px;
  cursor: pointer;
}
select.analytic-select[_ngcontent-%COMP%] {
  color: #714B67;
  font-weight: 500;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%23714B67' d='M5 6L0 0h10z'/%3E%3C/svg%3E");
}
select.analytic-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
  color: #212529;
  font-weight: 400;
}
select.analytic-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:first-child {
  color: #aaa;
}
.btn-analytic[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  border: 1px dashed #ccc;
  background: transparent;
  border-radius: 4px;
  padding: 6px 8px;
  cursor: pointer;
  font-size: 12px;
  color: #999;
  transition: all 0.15s;
  text-align: left;
  font-family: "Roboto", sans-serif;
}
.btn-analytic[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 15px;
}
.btn-analytic[_ngcontent-%COMP%]:hover {
  border-color: #714B67;
  color: #714B67;
  background: rgba(113, 75, 103, 0.05);
}
.btn-analytic.has-distribution[_ngcontent-%COMP%] {
  border-style: solid;
  border-color: #714B67;
  color: #714B67;
  background: rgba(113, 75, 103, 0.06);
  font-weight: 500;
}
.btn-analytic[_ngcontent-%COMP%]   .analytic-summary[_ngcontent-%COMP%] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 120px;
  color: #714B67;
  font-weight: 500;
}
.btn-analytic[_ngcontent-%COMP%]   .analytic-placeholder[_ngcontent-%COMP%] {
  color: #bbb;
  font-style: italic;
}
.analytic-readonly[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #714B67;
  font-weight: 500;
  padding: 4px 6px;
  display: block;
}
.analytic-na[_ngcontent-%COMP%] {
  color: #dee2e6;
  font-size: 13px;
  padding: 4px 6px;
  display: block;
  text-align: center;
  -webkit-user-select: none;
  user-select: none;
}
.analytic-overlay[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 900;
  animation: _ngcontent-%COMP%_fadeIn 0.1s ease;
}
.analytic-modal[_ngcontent-%COMP%] {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 901;
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  width: 700px;
  max-width: calc(100vw - 32px);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: _ngcontent-%COMP%_slideUp 0.18s ease;
}
@keyframes _ngcontent-%COMP%_fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes _ngcontent-%COMP%_slideUp {
  from {
    opacity: 0;
    transform: translate(-50%, -48%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
.analytic-modal-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid #e9ecef;
  flex-shrink: 0;
}
.analytic-modal-title[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  color: #714B67;
}
.analytic-modal-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 20px;
}
.analytic-modal-info[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 20px;
  background: #f8f4f7;
  border-bottom: 1px solid #e9ecef;
  font-size: 13px;
  flex-shrink: 0;
}
.analytic-modal-info[_ngcontent-%COMP%]   .analytic-line-label[_ngcontent-%COMP%] {
  color: #555;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.analytic-modal-info[_ngcontent-%COMP%]   .analytic-line-amount[_ngcontent-%COMP%] {
  color: #333;
  white-space: nowrap;
}
.dist-progress-bar-wrap[_ngcontent-%COMP%] {
  padding: 12px 20px;
  background: #f8f4f7;
  border-bottom: 1px solid #e9ecef;
  flex-shrink: 0;
}
.dist-progress-track[_ngcontent-%COMP%] {
  height: 8px;
  background: #e9ecef;
  border-radius: 99px;
  overflow: hidden;
  margin-bottom: 8px;
}
.dist-progress-fill[_ngcontent-%COMP%] {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #714B67,
      #9B59B6);
  border-radius: 99px;
  transition: width 0.3s ease;
}
.dist-progress-fill.full[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #198754,
      #28a745);
}
.dist-progress-legend[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #555;
}
.dpl-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 5px;
}
.dpl-item.dpl-warn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: #dc3545;
}
.dpl-item.dpl-ok[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: #198754;
}
.dpl-dot[_ngcontent-%COMP%] {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.dpl-dot.ventile[_ngcontent-%COMP%] {
  background: #714B67;
}
.dpl-dot.reste[_ngcontent-%COMP%] {
  background: #dee2e6;
}
.dpl-sep[_ngcontent-%COMP%] {
  color: #adb5bd;
}
.dpl-pct[_ngcontent-%COMP%] {
  margin-left: auto;
  font-weight: 700;
  font-size: 13px;
  color: #714B67;
}
.analytic-modal-body[_ngcontent-%COMP%] {
  padding: 12px 16px;
  overflow-y: auto;
  flex: 1;
}
.dist-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 10px;
  margin-bottom: 6px;
  background: #fafafa;
  border: 1px solid #eef0f2;
  border-radius: 8px;
  transition: border-color 0.15s;
}
.dist-row[_ngcontent-%COMP%]:hover {
  border-color: #d4c5d0;
}
.dist-row-num[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  background: #714B67;
  color: white;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
}
.dist-selects[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  min-width: 0;
}
.dist-select-group[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.dist-select-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: #adb5bd;
  margin-bottom: 4px;
  letter-spacing: 0.5px;
}
.dist-arrow[_ngcontent-%COMP%] {
  flex-shrink: 0;
  font-size: 20px;
  color: #714B67;
  font-weight: 300;
  margin-bottom: 6px;
}
.dist-subaccount-placeholder[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #adb5bd;
  font-style: italic;
  padding: 7px 10px;
  background: #f8f9fa;
  border: 1px dashed #dee2e6;
  border-radius: 6px;
  min-height: 34px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dist-subaccount-placeholder.dist-direct[_ngcontent-%COMP%] {
  font-style: normal;
  color: #6c757d;
}
.dist-subaccount-placeholder.dist-direct[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 13px;
}
.dist-amount-block[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 150px;
}
.dist-amount-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: #adb5bd;
  margin-bottom: 4px;
  letter-spacing: 0.5px;
}
.dist-amount-row[_ngcontent-%COMP%] {
  display: flex;
  gap: 4px;
  align-items: center;
}
.dist-pct-badge[_ngcontent-%COMP%] {
  margin-top: 4px;
  font-size: 11px;
  font-weight: 700;
  color: #adb5bd;
  text-align: right;
}
.dist-pct-badge.pct-partial[_ngcontent-%COMP%] {
  color: #714B67;
}
.dist-pct-badge.pct-full[_ngcontent-%COMP%] {
  color: #198754;
}
.btn-fill-remaining[_ngcontent-%COMP%] {
  flex-shrink: 0;
  background: none;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
  color: #714B67;
  display: flex;
  align-items: center;
  transition: all 0.15s;
}
.btn-fill-remaining[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 15px;
}
.btn-fill-remaining[_ngcontent-%COMP%]:hover {
  background: rgba(113, 75, 103, 0.08);
  border-color: #714B67;
}
.btn-remove-dist[_ngcontent-%COMP%] {
  flex-shrink: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: #ccc;
  padding: 5px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-top: 24px;
  transition: all 0.15s;
}
.btn-remove-dist[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
.btn-remove-dist[_ngcontent-%COMP%]:hover:not(:disabled) {
  color: #dc3545;
  background: rgba(220, 53, 69, 0.08);
}
.btn-remove-dist[_ngcontent-%COMP%]:disabled {
  opacity: 0.25;
  cursor: not-allowed;
}
.dist-add-zone[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
  flex-wrap: wrap;
}
.btn-add-dist[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  background: none;
  border: 2px dashed #714B67;
  border-radius: 8px;
  color: #714B67;
  font-size: 13px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s;
  flex: 1;
  justify-content: center;
}
.btn-add-dist[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
.btn-add-dist[_ngcontent-%COMP%]:hover {
  background: rgba(113, 75, 103, 0.07);
}
.btn-split-equal[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 9px 14px;
  background: none;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  color: #6c757d;
  font-size: 12px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}
.btn-split-equal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 16px;
}
.btn-split-equal[_ngcontent-%COMP%]:hover {
  background: #f8f9fa;
  border-color: #adb5bd;
  color: #495057;
}
.analytic-modal-footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-top: 1px solid #e9ecef;
  flex-shrink: 0;
}
.dist-warning[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  background: #fff3cd;
  color: #856404;
  font-size: 12px;
  border-top: 1px solid #ffeeba;
  flex-shrink: 0;
}
.dist-warning[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 15px;
}
.autocomplete-container[_ngcontent-%COMP%] {
  position: relative;
}
.autocomplete-container[_ngcontent-%COMP%]   .autocomplete-list[_ngcontent-%COMP%] {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  min-width: 280px;
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  z-index: 100;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 2px;
}
.autocomplete-container[_ngcontent-%COMP%]   .autocomplete-item[_ngcontent-%COMP%] {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  transition: background 0.1s;
}
.autocomplete-container[_ngcontent-%COMP%]   .autocomplete-item[_ngcontent-%COMP%]:hover {
  background: #f8f9fa;
}
.autocomplete-container[_ngcontent-%COMP%]   .autocomplete-item[_ngcontent-%COMP%]   .account-code[_ngcontent-%COMP%] {
  font-weight: 700;
  color: #714B67;
  font-family: "Courier New", monospace;
  min-width: 70px;
  font-size: 13px;
}
.autocomplete-container[_ngcontent-%COMP%]   .autocomplete-item[_ngcontent-%COMP%]   .account-name[_ngcontent-%COMP%] {
  color: #495057;
  flex: 1;
}
.btn-remove-line[_ngcontent-%COMP%] {
  background: none;
  border: none;
  cursor: pointer;
  color: #adb5bd;
  padding: 4px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  transition: all 0.15s;
}
.btn-remove-line[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
.btn-remove-line[_ngcontent-%COMP%]:hover:not(:disabled) {
  color: #dc3545;
  background: rgba(220, 53, 69, 0.08);
}
.btn-remove-line[_ngcontent-%COMP%]:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.entry-totals[_ngcontent-%COMP%] {
  background: #f8f9fa;
  border-top: 2px solid #dee2e6;
  padding: 14px 20px;
  display: flex;
  justify-content: flex-end;
  gap: 40px;
}
.entry-totals[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%] {
  text-align: right;
}
.entry-totals[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #6c757d;
  margin-bottom: 2px;
}
.entry-totals[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: #212529;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
}
.entry-totals[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-value.text-debit[_ngcontent-%COMP%] {
  color: #0062cc;
}
.entry-totals[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-value.text-credit[_ngcontent-%COMP%] {
  color: #28a745;
}
.entry-totals[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-value.balanced[_ngcontent-%COMP%] {
  color: #28a745;
}
.entry-totals[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-value.unbalanced[_ngcontent-%COMP%] {
  color: #dc3545;
}
.entry-totals[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%]   .balanced-icon[_ngcontent-%COMP%] {
  font-size: 18px;
  color: #28a745;
}
.entry-totals[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%]   .unbalanced-icon[_ngcontent-%COMP%] {
  font-size: 18px;
  color: #dc3545;
}
.caisse-info-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  background: #e8f4fd;
  color: #0d6efd;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}
.caisse-info-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 15px;
}
.alert-error[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  color: #721c24;
  font-size: 13px;
}
.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
.alert-success[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  color: #155724;
  font-size: 13px;
}
.alert-success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 18px;
}
.spinner-sm-white[_ngcontent-%COMP%] {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: white;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(360deg);
  }
}
/*# sourceMappingURL=journal-entry-form.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JournalEntryFormComponent, [{
    type: Component,
    args: [{ selector: "app-journal-entry-form", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  @if (loading) {
    <div style="text-align:center;padding:80px"><div class="spinner"></div></div>
  } @else {

    <!-- ENTRY HEADER -->
    <div class="entry-header card mb-3">
      <div class="entry-header-left">
        <div class="entry-number">{{ move.name || 'Nouvelle \xE9criture' }}</div>
        <span [class]="getStateBadgeClass(move.state)">{{ getStateLabel(move.state) }}</span>
      </div>
      <div class="entry-actions">
        @if (move.state === 'draft' || !move.state) {
          <button class="btn btn-success" (click)="post()" [disabled]="posting || saving">
            @if (posting) { <span class="spinner-sm-white"></span> }
            <span class="material-icons">check_circle</span> Valider
          </button>
          <button class="btn btn-primary" (click)="save()" [disabled]="saving || posting">
            @if (saving) { <span class="spinner-sm-white"></span> }
            <span class="material-icons">save</span> Sauvegarder
          </button>
        }
        @if (move.state === 'posted' && !move.reversalId && !move.isReversal) {
          <button class="btn btn-reverse" (click)="reverse()">
            <span class="material-icons">swap_horiz</span> Extourner
          </button>
        }
        @if (move.state === 'posted' && move.reversalId) {
          <span class="badge-reversed">
            <span class="material-icons" style="font-size:14px">check_circle</span>
            Extourn\xE9e
          </span>
        }
        @if (move.state === 'posted' && move.isReversal) {
          <span class="badge-reversed">
            <span class="material-icons" style="font-size:14px">swap_horiz</span>
            \xC9criture d'extourne
          </span>
        }
        <button class="btn btn-outline" (click)="router.navigate(['/accounting/journal-entries'])">
          <span class="material-icons">arrow_back</span> Retour
        </button>
      </div>
    </div>

    @if (errorMsg) {
      <div class="alert-error mb-3">
        <span class="material-icons">error_outline</span>{{ errorMsg }}
      </div>
    }
    @if (successMsg) {
      <div class="alert-success mb-3">
        <span class="material-icons">check_circle</span>{{ successMsg }}
      </div>
    }

    <!-- CHAMPS EN-T\xCATE -->
    <div class="card mb-3">
      <div class="card-body">
        <div class="form-row cols-4">
          <div class="form-group">
            <label>Journal *</label>
            <select class="form-control" [(ngModel)]="move.journalId" [disabled]="isReadonly"
              (ngModelChange)="onJournalChange()">
              <option [ngValue]="0" disabled>-- S\xE9lectionner --</option>
              @for (j of journals; track j.id) {
                <option [ngValue]="j.id">{{ j.code }} - {{ j.name }}</option>
              }
            </select>
          </div>
          <div class="form-group">
            <label>Date *</label>
            <input type="date" class="form-control" [(ngModel)]="move.date" [disabled]="isReadonly">
          </div>
          <div class="form-group">
            <label>R\xE9f\xE9rence</label>
            <input type="text" class="form-control" [(ngModel)]="move.ref"
              placeholder="R\xE9f\xE9rence externe" [disabled]="isReadonly">
          </div>
          <div class="form-group">
            <label>Partenaire</label>
            <select class="form-control" [(ngModel)]="move.partnerId" [disabled]="isReadonly">
              <option [ngValue]="undefined">-- Aucun --</option>
              @for (p of partners; track p.id) {
                <option [ngValue]="p.id">{{ p.name }}</option>
              }
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- SOLDE INITIAL \u2014 caisse/banque uniquement -->
    @if (isBalanceJournal && journalOpeningBalance !== null) {
      <div class="balance-bar mb-3">
        <span class="material-icons" style="font-size:20px;color:#714B67">account_balance_wallet</span>
        <div class="balance-item">
          <span class="balance-label">Solde initial</span>
          <span class="balance-value mono" [class.positive]="journalOpeningBalance >= 0" [class.negative]="journalOpeningBalance < 0">
            {{ journalOpeningBalance | number:'1.0-0' }} FCFA
          </span>
        </div>
      </div>
    }

    <!-- LIGNES D'\xC9CRITURE -->
    <div class="card">
      <div class="card-header">
        <h3 style="font-size:14px">
          <span class="material-icons" style="font-size:18px;color:#714B67">table_rows</span>
          Lignes d'\xE9criture
        </h3>
        @if (!isReadonly && !isBalanceJournal) {
          <button class="btn btn-outline-primary btn-sm" (click)="autoBalance()">
            <span class="material-icons">balance</span> \xC9quilibrer
          </button>
        }
        @if (isBalanceJournal) {
          <span class="caisse-info-badge">
            <span class="material-icons">info_outline</span>
            Pi\xE8ce de caisse \u2014 \xE9quilibre non requis
          </span>
        }
      </div>
      <div class="card-body" style="padding:0;overflow-x:auto">
        <table class="entry-lines-table">
          <thead>
            <tr>
              <th style="min-width:220px">Compte *</th>
              <th style="min-width:180px">Libell\xE9</th>
              <th style="min-width:130px">Partenaire</th>
              <th style="min-width:160px">Analytique</th>
              <th style="width:120px;text-align:right">D\xE9bit</th>
              <th style="width:120px;text-align:right">Cr\xE9dit</th>
              @if (!isReadonly) {
                <th style="width:48px;text-align:center">Sup.</th>
              }
            </tr>
          </thead>
          <tbody>
            @for (line of lines; track trackByIndex($index); let i = $index) {
              <tr>
                <!-- COMPTE -->
                <td>
                  <div class="autocomplete-container">
                    <input type="text" class="line-input"
                      [(ngModel)]="line.accountSearch"
                      (ngModelChange)="onAccountSearch(line)"
                      (blur)="hideAccountSuggestions(line)"
                      placeholder="Taper code ou nom..."
                      [disabled]="isReadonly">
                    @if (line.showAccountSuggestions) {
                      <div class="autocomplete-list">
                        @for (acc of line.accountSuggestions; track acc.id) {
                          <button type="button" class="autocomplete-item" (mousedown)="selectAccount(line, acc)">
                            <span class="account-code">{{ acc.code }}</span>
                            <span class="account-name">{{ acc.name }}</span>
                          </button>
                        }
                      </div>
                    }
                  </div>
                </td>
                <!-- LIBELL\xC9 -->
                <td>
                  <input type="text" class="line-input" [(ngModel)]="line.name"
                    placeholder="Description..." [disabled]="isReadonly">
                </td>
                <!-- PARTENAIRE -->
                <td>
                  <select class="line-input" [(ngModel)]="line.partnerId" [disabled]="isReadonly">
                    <option [ngValue]="null">-</option>
                    @for (p of partners; track p.id) {
                      <option [ngValue]="p.id">{{ p.name }}</option>
                    }
                  </select>
                </td>
                <!-- ANALYTIQUE : bouton ventilation (classe 6 uniquement) -->
                <td>
                  @if (isChargeAccount(line)) {
                    @if (!isReadonly) {
                      <button type="button" class="btn-analytic"
                        [class.has-distribution]="line.analyticDistributions.length > 0"
                        (click)="openAnalyticModal(i)"
                        [title]="line.analyticDistributions.length > 0 ? 'Modifier la ventilation' : 'Ajouter ventilation analytique'">
                        <span class="material-icons">analytics</span>
                        @if (line.analyticDistributions.length > 0) {
                          <span class="analytic-summary">{{ getDistributionSummary(line) }}</span>
                        } @else if (line.analyticAccountId) {
                          <span class="analytic-summary">{{ getAnalyticLabel(line.analyticAccountId) }}</span>
                        } @else {
                          <span class="analytic-placeholder">Ventiler...</span>
                        }
                      </button>
                    } @else {
                      <span class="analytic-readonly">
                        {{ getDistributionSummary(line) || getAnalyticLabel(line.analyticAccountId) || '\u2014' }}
                      </span>
                    }
                  } @else {
                    <span class="analytic-na">\u2014</span>
                  }
                </td>
                <!-- D\xC9BIT -->
                <td>
                  <input type="number" class="line-input text-right" [(ngModel)]="line.debit"
                    (ngModelChange)="onDebitChange(line)"
                    min="0" step="0.01" [disabled]="isReadonly">
                </td>
                <!-- CR\xC9DIT -->
                <td>
                  <input type="number" class="line-input text-right" [(ngModel)]="line.credit"
                    (ngModelChange)="onCreditChange(line)"
                    min="0" step="0.01" [disabled]="isReadonly">
                </td>
                @if (!isReadonly) {
                  <td style="text-align:center">
                    <button type="button" class="btn-remove-line" (click)="removeLine(i)"
                      [disabled]="lines.length === 1" title="Supprimer">
                      <span class="material-icons">delete_outline</span>
                    </button>
                  </td>
                }
              </tr>
            }
          </tbody>
        </table>

        @if (!isReadonly) {
          <div style="padding:8px 12px">
            <button type="button" class="btn btn-outline btn-sm" (click)="addLine()">
              <span class="material-icons">add</span> Ajouter une ligne
            </button>
          </div>
        }

        <!-- TOTAUX -->
        <div class="entry-totals">
          <div class="total-item">
            <div class="total-label">Total D\xE9bit</div>
            <div class="total-value text-debit">{{ totalDebit | number:'1.2-2' }}</div>
          </div>
          <div class="total-item">
            <div class="total-label">Total Cr\xE9dit</div>
            <div class="total-value text-credit">{{ totalCredit | number:'1.2-2' }}</div>
          </div>
          @if (!isBalanceJournal) {
            <div class="total-item total-diff">
              <div class="total-label">Diff\xE9rence</div>
              <div class="total-value" [class.balanced]="isBalanced" [class.unbalanced]="!isBalanced">
                {{ difference | number:'1.2-2' }}
                @if (isBalanced) {
                  <span class="material-icons balanced-icon">check_circle</span>
                } @else {
                  <span class="material-icons unbalanced-icon">error</span>
                }
              </div>
            </div>
          }
        </div>

        <!-- SOLDE FINAL \u2014 caisse/banque uniquement -->
        @if (isBalanceJournal && journalOpeningBalance !== null) {
          <div class="final-balance-bar">
            <div class="final-balance-left">
              <span class="material-icons">account_balance_wallet</span>
              <span class="final-balance-journal">{{ currentJournal?.name }}</span>
            </div>
            <div class="final-balance-breakdown">
              <span class="fbb-item">
                <span class="fbb-label">Solde initial</span>
                <span class="fbb-value">{{ journalOpeningBalance | number:'1.0-0' }} FCFA</span>
              </span>
              <span class="fbb-sep">+</span>
              <span class="fbb-item">
                <span class="fbb-label">Mouvement</span>
                <span class="fbb-value" [class.pos]="journalAccountImpact >= 0" [class.neg]="journalAccountImpact < 0">
                  {{ journalAccountImpact >= 0 ? '+' : '' }}{{ journalAccountImpact | number:'1.0-0' }} FCFA
                </span>
              </span>
              <span class="fbb-sep">=</span>
              <span class="fbb-item fbb-result">
                <span class="fbb-label">Solde final</span>
                <span class="fbb-value" [class.pos]="(journalFinalBalance ?? 0) >= 0" [class.neg]="(journalFinalBalance ?? 0) < 0">
                  {{ journalFinalBalance | number:'1.0-0' }} FCFA
                </span>
              </span>
            </div>
          </div>
        }
      </div>
    </div>
  }
</div>

<!-- ===================================================== -->
<!-- FEN\xCATRE FLOTTANTE DE VENTILATION ANALYTIQUE           -->
<!-- ===================================================== -->
@if (analyticModalIndex !== null && lines[analyticModalIndex]) {
  <div class="analytic-overlay" (click)="closeAnalyticModal()"></div>

  <div class="analytic-modal">
    <div class="analytic-modal-header">
      <div class="analytic-modal-title">
        <span class="material-icons">analytics</span>
        Ventilation analytique
      </div>
      <button class="btn-icon" (click)="closeAnalyticModal()">
        <span class="material-icons">close</span>
      </button>
    </div>

    <!-- INFO LIGNE -->
    <div class="analytic-modal-info">
      <span class="analytic-line-label">
        <span class="material-icons" style="font-size:14px;vertical-align:middle">receipt</span>
        {{ lines[analyticModalIndex].accountSearch || 'Ligne sans compte' }}
        @if (lines[analyticModalIndex].name) {
          \u2014 {{ lines[analyticModalIndex].name }}
        }
      </span>
      <span class="analytic-line-amount">
        Montant : <strong>{{ getLineAmount(lines[analyticModalIndex]) | number:'1.2-2' }}</strong>
      </span>
    </div>

    <!-- BARRE DE PROGRESSION -->
    <div class="dist-progress-bar-wrap">
      <div class="dist-progress-track">
        <div class="dist-progress-fill"
          [style.width.%]="getDistributedPercent(lines[analyticModalIndex]!)"
          [class.full]="getDistributedPercent(lines[analyticModalIndex]!) >= 100">
        </div>
      </div>
      <div class="dist-progress-legend">
        <span class="dpl-item">
          <span class="dpl-dot ventile"></span>
          Ventil\xE9 : <strong>{{ getDistributedTotal(lines[analyticModalIndex]!) | number:'1.0-0' }}</strong>
        </span>
        <span class="dpl-sep">\xB7</span>
        <span class="dpl-item" [class.dpl-warn]="getRemaining(lines[analyticModalIndex]!) > 0.01"
              [class.dpl-ok]="Math.abs(getRemaining(lines[analyticModalIndex]!)) < 0.01">
          <span class="dpl-dot reste"></span>
          Reste : <strong>{{ getRemaining(lines[analyticModalIndex]!) | number:'1.0-0' }}</strong>
        </span>
        <span class="dpl-pct">{{ getDistributedPercent(lines[analyticModalIndex]!) }}%</span>
      </div>
    </div>

    <!-- LIGNES DE VENTILATION -->
    <div class="analytic-modal-body">
      @for (dist of lines[analyticModalIndex].analyticDistributions; track $index; let di = $index) {
        <div class="dist-row">
          <!-- Num\xE9ro de la ligne -->
          <div class="dist-row-num">{{ di + 1 }}</div>

          <!-- Selects parent + sous-compte -->
          <div class="dist-selects">
            <div class="dist-select-group">
              <label>Compte parent</label>
              <select class="form-control" [(ngModel)]="dist.parentAnalyticId"
                (ngModelChange)="onParentAnalyticChange(dist)">
                <option [ngValue]="null">\u2014 S\xE9lectionner le parent \u2014</option>
                @for (a of parentAnalyticAccounts; track a.id) {
                  <option [ngValue]="a.id">{{ a.code }} \u2014 {{ a.name }}</option>
                }
              </select>
            </div>
            <span class="dist-arrow">\u203A</span>
            <div class="dist-select-group">
              <label>Sous-compte</label>
              @if (!dist.parentAnalyticId) {
                <div class="dist-subaccount-placeholder">Choisir le parent d'abord</div>
              } @else if (getChildAnalyticAccounts(dist.parentAnalyticId).length === 0) {
                <div class="dist-subaccount-placeholder dist-direct">
                  <span class="material-icons">info_outline</span> Utilis\xE9 directement
                </div>
              } @else {
                <select class="form-control" [(ngModel)]="dist.analyticAccountId">
                  <option [ngValue]="null">\u2014 S\xE9lectionner \u2014</option>
                  @for (a of getChildAnalyticAccounts(dist.parentAnalyticId); track a.id) {
                    <option [ngValue]="a.id">{{ a.code }} \u2014 {{ a.name }}</option>
                  }
                </select>
              }
            </div>
          </div>

          <!-- Montant + % -->
          <div class="dist-amount-block">
            <label>Montant</label>
            <div class="dist-amount-row">
              <input type="number" class="form-control" [(ngModel)]="dist.amount"
                min="0" step="0.01" placeholder="0.00">
              <button type="button" class="btn-fill-remaining"
                title="Compl\xE9ter avec le reste"
                (click)="autoFillRemaining(lines[analyticModalIndex]!, di)">
                <span class="material-icons">auto_fix_high</span>
              </button>
            </div>
            @if (getLineAmount(lines[analyticModalIndex]!) > 0) {
              <div class="dist-pct-badge"
                [class.pct-full]="getDistributionPercent(lines[analyticModalIndex]!, dist) >= 100"
                [class.pct-partial]="getDistributionPercent(lines[analyticModalIndex]!, dist) > 0 && getDistributionPercent(lines[analyticModalIndex]!, dist) < 100">
                {{ getDistributionPercent(lines[analyticModalIndex]!, dist) }}%
              </div>
            }
          </div>

          <!-- Supprimer -->
          <button type="button" class="btn-remove-dist"
            (click)="removeDistributionRow(lines[analyticModalIndex]!, di)"
            [disabled]="lines[analyticModalIndex]!.analyticDistributions.length <= 1"
            title="Supprimer cette ligne">
            <span class="material-icons">delete_outline</span>
          </button>
        </div>
      }

      <!-- BOUTON AJOUTER -->
      <div class="dist-add-zone">
        <button type="button" class="btn-add-dist"
          (click)="addDistributionRow(lines[analyticModalIndex]!)">
          <span class="material-icons">add_circle_outline</span>
          Ajouter un sous-compte
        </button>
        @if (lines[analyticModalIndex].analyticDistributions.length > 1) {
          <button type="button" class="btn-split-equal"
            (click)="splitEqually(lines[analyticModalIndex]!)"
            title="R\xE9partir le montant total \xE9quitablement entre toutes les lignes">
            <span class="material-icons">call_split</span>
            R\xE9partir \xE9quitablement
          </button>
        }
      </div>
    </div>

    <!-- ACTIONS -->
    <div class="analytic-modal-footer">
      <button class="btn btn-outline btn-sm" (click)="clearDistributions(lines[analyticModalIndex]!)">
        <span class="material-icons">clear</span> Effacer
      </button>
      <div style="flex:1"></div>
      <button class="btn btn-outline btn-sm" (click)="closeAnalyticModal()">Annuler</button>
      <button class="btn btn-primary btn-sm"
        [disabled]="!isDistributionValid(lines[analyticModalIndex]!)"
        (click)="confirmDistribution(lines[analyticModalIndex]!)">
        <span class="material-icons">check</span> Confirmer
      </button>
    </div>

    @if (!isDistributionValid(lines[analyticModalIndex]!)) {
      <div class="dist-warning">
        <span class="material-icons">warning</span>
        @if (getRemaining(lines[analyticModalIndex]!) > 0.01) {
          Il reste {{ getRemaining(lines[analyticModalIndex]!) | number:'1.2-2' }} \xE0 ventiler
        } @else if (getRemaining(lines[analyticModalIndex]!) < -0.01) {
          La ventilation d\xE9passe le montant de la ligne de {{ (-getRemaining(lines[analyticModalIndex]!)) | number:'1.2-2' }}
        } @else {
          Veuillez s\xE9lectionner un compte analytique pour chaque ligne
        }
      </div>
    }
  </div>
}
`, styles: [`@charset "UTF-8";

/* src/app/modules/accounting/components/journal-entries/journal-entry-form.component.scss */
.balance-bar {
  display: flex;
  align-items: center;
  gap: 14px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  padding: 10px 20px;
  border-left: 4px solid #714B67;
}
.balance-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0 4px;
}
.balance-label {
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 600;
  color: #adb5bd;
  letter-spacing: 0.5px;
}
.balance-value {
  font-size: 16px;
  font-weight: 700;
  color: #212529;
}
.balance-value.mono {
  font-family: monospace;
}
.balance-value.positive {
  color: #198754;
}
.balance-value.negative {
  color: #dc3545;
}
.balance-separator {
  width: 1px;
  height: 32px;
  background: #e9ecef;
  margin: 0 8px;
  flex-shrink: 0;
}
.final-balance-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  margin-top: 4px;
  background:
    linear-gradient(
      135deg,
      #f8f3ff 0%,
      #f0fafa 100%);
  border-top: 2px solid #e2e8ef;
  flex-wrap: wrap;
  gap: 12px;
}
.final-balance-left {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #714B67;
}
.final-balance-left .material-icons {
  font-size: 20px;
}
.final-balance-journal {
  font-size: 13px;
  font-weight: 700;
  color: #714B67;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.final-balance-breakdown {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.fbb-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.fbb-item.fbb-result {
  background: white;
  border-radius: 8px;
  padding: 8px 16px;
  box-shadow: 0 2px 8px rgba(113, 75, 103, 0.15);
  border: 1px solid #e0d4ea;
}
.fbb-item.fbb-result .fbb-label {
  color: #714B67;
}
.fbb-item.fbb-result .fbb-value {
  font-size: 18px;
}
.fbb-label {
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 600;
  color: #adb5bd;
  letter-spacing: 0.4px;
}
.fbb-value {
  font-size: 14px;
  font-weight: 700;
  font-family: monospace;
  color: #212529;
}
.fbb-value.pos {
  color: #198754;
}
.fbb-value.neg {
  color: #dc3545;
}
.fbb-sep {
  font-size: 20px;
  font-weight: 300;
  color: #adb5bd;
  padding-top: 10px;
}
.badge-reversed {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  background: #f0f0f0;
  color: #6c757d;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
}
.btn-reverse {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #6f42c1;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s;
}
.btn-reverse .material-icons {
  font-size: 18px;
}
.btn-reverse:hover {
  background: #5a32a3;
}
.entry-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px !important;
  flex-wrap: wrap;
  gap: 16px;
}
.entry-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.entry-number {
  font-size: 20px;
  font-weight: 700;
  color: #212529;
}
.entry-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}
.entry-lines-table {
  width: 100%;
  border-collapse: collapse;
}
.entry-lines-table thead tr {
  background: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
}
.entry-lines-table thead th {
  padding: 10px 10px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #6c757d;
  white-space: nowrap;
}
.entry-lines-table tbody tr {
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.1s;
}
.entry-lines-table tbody tr:hover {
  background: #fafbfc;
}
.entry-lines-table tbody td {
  padding: 3px 4px;
  vertical-align: middle;
}
.line-input {
  width: 100%;
  border: 1px solid transparent;
  padding: 7px 8px;
  font-size: 13px;
  background: transparent;
  border-radius: 4px;
  outline: none;
  font-family: "Roboto", sans-serif;
  color: #212529;
}
.line-input:focus {
  border-color: #714B67;
  background: white;
  box-shadow: 0 0 0 2px rgba(113, 75, 103, 0.12);
}
.line-input[type=number] {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
.line-input:disabled {
  background: #f9f9f9;
  color: #6c757d;
  cursor: default;
}
select.line-input {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%236c757d' d='M5 6L0 0h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  padding-right: 24px;
  cursor: pointer;
}
select.analytic-select {
  color: #714B67;
  font-weight: 500;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%23714B67' d='M5 6L0 0h10z'/%3E%3C/svg%3E");
}
select.analytic-select option {
  color: #212529;
  font-weight: 400;
}
select.analytic-select option:first-child {
  color: #aaa;
}
.btn-analytic {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  border: 1px dashed #ccc;
  background: transparent;
  border-radius: 4px;
  padding: 6px 8px;
  cursor: pointer;
  font-size: 12px;
  color: #999;
  transition: all 0.15s;
  text-align: left;
  font-family: "Roboto", sans-serif;
}
.btn-analytic .material-icons {
  font-size: 15px;
}
.btn-analytic:hover {
  border-color: #714B67;
  color: #714B67;
  background: rgba(113, 75, 103, 0.05);
}
.btn-analytic.has-distribution {
  border-style: solid;
  border-color: #714B67;
  color: #714B67;
  background: rgba(113, 75, 103, 0.06);
  font-weight: 500;
}
.btn-analytic .analytic-summary {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 120px;
  color: #714B67;
  font-weight: 500;
}
.btn-analytic .analytic-placeholder {
  color: #bbb;
  font-style: italic;
}
.analytic-readonly {
  font-size: 12px;
  color: #714B67;
  font-weight: 500;
  padding: 4px 6px;
  display: block;
}
.analytic-na {
  color: #dee2e6;
  font-size: 13px;
  padding: 4px 6px;
  display: block;
  text-align: center;
  -webkit-user-select: none;
  user-select: none;
}
.analytic-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 900;
  animation: fadeIn 0.1s ease;
}
.analytic-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 901;
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  width: 700px;
  max-width: calc(100vw - 32px);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.18s ease;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translate(-50%, -48%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
.analytic-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid #e9ecef;
  flex-shrink: 0;
}
.analytic-modal-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  color: #714B67;
}
.analytic-modal-title .material-icons {
  font-size: 20px;
}
.analytic-modal-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 20px;
  background: #f8f4f7;
  border-bottom: 1px solid #e9ecef;
  font-size: 13px;
  flex-shrink: 0;
}
.analytic-modal-info .analytic-line-label {
  color: #555;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.analytic-modal-info .analytic-line-amount {
  color: #333;
  white-space: nowrap;
}
.dist-progress-bar-wrap {
  padding: 12px 20px;
  background: #f8f4f7;
  border-bottom: 1px solid #e9ecef;
  flex-shrink: 0;
}
.dist-progress-track {
  height: 8px;
  background: #e9ecef;
  border-radius: 99px;
  overflow: hidden;
  margin-bottom: 8px;
}
.dist-progress-fill {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #714B67,
      #9B59B6);
  border-radius: 99px;
  transition: width 0.3s ease;
}
.dist-progress-fill.full {
  background:
    linear-gradient(
      90deg,
      #198754,
      #28a745);
}
.dist-progress-legend {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #555;
}
.dpl-item {
  display: flex;
  align-items: center;
  gap: 5px;
}
.dpl-item.dpl-warn strong {
  color: #dc3545;
}
.dpl-item.dpl-ok strong {
  color: #198754;
}
.dpl-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.dpl-dot.ventile {
  background: #714B67;
}
.dpl-dot.reste {
  background: #dee2e6;
}
.dpl-sep {
  color: #adb5bd;
}
.dpl-pct {
  margin-left: auto;
  font-weight: 700;
  font-size: 13px;
  color: #714B67;
}
.analytic-modal-body {
  padding: 12px 16px;
  overflow-y: auto;
  flex: 1;
}
.dist-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 10px;
  margin-bottom: 6px;
  background: #fafafa;
  border: 1px solid #eef0f2;
  border-radius: 8px;
  transition: border-color 0.15s;
}
.dist-row:hover {
  border-color: #d4c5d0;
}
.dist-row-num {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  background: #714B67;
  color: white;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
}
.dist-selects {
  flex: 1;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  min-width: 0;
}
.dist-select-group {
  flex: 1;
  min-width: 0;
}
.dist-select-group label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: #adb5bd;
  margin-bottom: 4px;
  letter-spacing: 0.5px;
}
.dist-arrow {
  flex-shrink: 0;
  font-size: 20px;
  color: #714B67;
  font-weight: 300;
  margin-bottom: 6px;
}
.dist-subaccount-placeholder {
  font-size: 11px;
  color: #adb5bd;
  font-style: italic;
  padding: 7px 10px;
  background: #f8f9fa;
  border: 1px dashed #dee2e6;
  border-radius: 6px;
  min-height: 34px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dist-subaccount-placeholder.dist-direct {
  font-style: normal;
  color: #6c757d;
}
.dist-subaccount-placeholder.dist-direct .material-icons {
  font-size: 13px;
}
.dist-amount-block {
  flex-shrink: 0;
  width: 150px;
}
.dist-amount-block label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: #adb5bd;
  margin-bottom: 4px;
  letter-spacing: 0.5px;
}
.dist-amount-row {
  display: flex;
  gap: 4px;
  align-items: center;
}
.dist-pct-badge {
  margin-top: 4px;
  font-size: 11px;
  font-weight: 700;
  color: #adb5bd;
  text-align: right;
}
.dist-pct-badge.pct-partial {
  color: #714B67;
}
.dist-pct-badge.pct-full {
  color: #198754;
}
.btn-fill-remaining {
  flex-shrink: 0;
  background: none;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
  color: #714B67;
  display: flex;
  align-items: center;
  transition: all 0.15s;
}
.btn-fill-remaining .material-icons {
  font-size: 15px;
}
.btn-fill-remaining:hover {
  background: rgba(113, 75, 103, 0.08);
  border-color: #714B67;
}
.btn-remove-dist {
  flex-shrink: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: #ccc;
  padding: 5px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-top: 24px;
  transition: all 0.15s;
}
.btn-remove-dist .material-icons {
  font-size: 18px;
}
.btn-remove-dist:hover:not(:disabled) {
  color: #dc3545;
  background: rgba(220, 53, 69, 0.08);
}
.btn-remove-dist:disabled {
  opacity: 0.25;
  cursor: not-allowed;
}
.dist-add-zone {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
  flex-wrap: wrap;
}
.btn-add-dist {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  background: none;
  border: 2px dashed #714B67;
  border-radius: 8px;
  color: #714B67;
  font-size: 13px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s;
  flex: 1;
  justify-content: center;
}
.btn-add-dist .material-icons {
  font-size: 18px;
}
.btn-add-dist:hover {
  background: rgba(113, 75, 103, 0.07);
}
.btn-split-equal {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 9px 14px;
  background: none;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  color: #6c757d;
  font-size: 12px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}
.btn-split-equal .material-icons {
  font-size: 16px;
}
.btn-split-equal:hover {
  background: #f8f9fa;
  border-color: #adb5bd;
  color: #495057;
}
.analytic-modal-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-top: 1px solid #e9ecef;
  flex-shrink: 0;
}
.dist-warning {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  background: #fff3cd;
  color: #856404;
  font-size: 12px;
  border-top: 1px solid #ffeeba;
  flex-shrink: 0;
}
.dist-warning .material-icons {
  font-size: 15px;
}
.autocomplete-container {
  position: relative;
}
.autocomplete-container .autocomplete-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  min-width: 280px;
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  z-index: 100;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 2px;
}
.autocomplete-container .autocomplete-item {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  transition: background 0.1s;
}
.autocomplete-container .autocomplete-item:hover {
  background: #f8f9fa;
}
.autocomplete-container .autocomplete-item .account-code {
  font-weight: 700;
  color: #714B67;
  font-family: "Courier New", monospace;
  min-width: 70px;
  font-size: 13px;
}
.autocomplete-container .autocomplete-item .account-name {
  color: #495057;
  flex: 1;
}
.btn-remove-line {
  background: none;
  border: none;
  cursor: pointer;
  color: #adb5bd;
  padding: 4px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  transition: all 0.15s;
}
.btn-remove-line .material-icons {
  font-size: 18px;
}
.btn-remove-line:hover:not(:disabled) {
  color: #dc3545;
  background: rgba(220, 53, 69, 0.08);
}
.btn-remove-line:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.entry-totals {
  background: #f8f9fa;
  border-top: 2px solid #dee2e6;
  padding: 14px 20px;
  display: flex;
  justify-content: flex-end;
  gap: 40px;
}
.entry-totals .total-item {
  text-align: right;
}
.entry-totals .total-item .total-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #6c757d;
  margin-bottom: 2px;
}
.entry-totals .total-item .total-value {
  font-size: 18px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: #212529;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
}
.entry-totals .total-item .total-value.text-debit {
  color: #0062cc;
}
.entry-totals .total-item .total-value.text-credit {
  color: #28a745;
}
.entry-totals .total-item .total-value.balanced {
  color: #28a745;
}
.entry-totals .total-item .total-value.unbalanced {
  color: #dc3545;
}
.entry-totals .total-item .total-value .balanced-icon {
  font-size: 18px;
  color: #28a745;
}
.entry-totals .total-item .total-value .unbalanced-icon {
  font-size: 18px;
  color: #dc3545;
}
.caisse-info-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  background: #e8f4fd;
  color: #0d6efd;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}
.caisse-info-badge .material-icons {
  font-size: 15px;
}
.alert-error {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  color: #721c24;
  font-size: 13px;
}
.alert-error .material-icons {
  font-size: 18px;
}
.alert-success {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  color: #155724;
  font-size: 13px;
}
.alert-success .material-icons {
  font-size: 18px;
}
.spinner-sm-white {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
/*# sourceMappingURL=journal-entry-form.component.css.map */
`] }]
  }], () => [{ type: AccountingService }, { type: AnalyticService }, { type: AuthService }, { type: Router }, { type: ActivatedRoute }], { onEsc: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JournalEntryFormComponent, { className: "JournalEntryFormComponent", filePath: "src/app/modules/accounting/components/journal-entries/journal-entry-form.component.ts", lineNumber: 41 });
})();
export {
  JournalEntryFormComponent
};
//# sourceMappingURL=chunk-C2XPKJMQ.js.map
