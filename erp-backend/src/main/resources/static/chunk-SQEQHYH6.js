import {
  Router
} from "./chunk-4W3TIS2I.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵtextInterpolate2
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/accounting/components/journals/journals.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.code;
var _forTrack2 = ($index, $item) => $item.value;
function JournalsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 3);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.successMsg, " ");
  }
}
function JournalsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMsg, " ");
  }
}
function JournalsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function JournalsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 3);
    \u0275\u0275text(2, "book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucun journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Cr\xE9ez votre premier journal comptable.");
    \u0275\u0275elementEnd()();
  }
}
function JournalsComponent_Conditional_25_For_19_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function JournalsComponent_Conditional_25_For_19_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "cancel");
    \u0275\u0275elementEnd();
  }
}
function JournalsComponent_Conditional_25_For_19_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function JournalsComponent_Conditional_25_For_19_Conditional_23_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const journal_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r0.deleteJournal(journal_r3));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function JournalsComponent_Conditional_25_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 19);
    \u0275\u0275listener("click", function JournalsComponent_Conditional_25_For_19_Template_tr_click_0_listener() {
      const journal_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDetail(journal_r3));
    });
    \u0275\u0275elementStart(1, "td")(2, "strong", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 22);
    \u0275\u0275text(8, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 23);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 23);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 17);
    \u0275\u0275conditionalCreate(17, JournalsComponent_Conditional_25_For_19_Conditional_17_Template, 2, 0, "span", 24)(18, JournalsComponent_Conditional_25_For_19_Conditional_18_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 17)(20, "button", 26);
    \u0275\u0275listener("click", function JournalsComponent_Conditional_25_For_19_Template_button_click_20_listener($event) {
      const journal_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r0.openEdit(journal_r3));
    });
    \u0275\u0275elementStart(21, "span", 3);
    \u0275\u0275text(22, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, JournalsComponent_Conditional_25_For_19_Conditional_23_Template, 3, 0, "button", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const journal_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(journal_r3.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(journal_r3.name);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r0.getTypeBadgeClass(journal_r3.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getTypeLabel(journal_r3.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getAccountName(journal_r3.defaultDebitAccountId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getAccountName(journal_r3.defaultCreditAccountId));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(journal_r3.active ? 17 : 18);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.isSuperAdmin() ? 23 : -1);
  }
}
function JournalsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 14)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Compte d\xE9bit d\xE9faut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Compte cr\xE9dit d\xE9faut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 17);
    \u0275\u0275text(14, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 17);
    \u0275\u0275text(16, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, JournalsComponent_Conditional_25_For_19_Template, 24, 9, "tr", 18, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r0.journals);
  }
}
function JournalsComponent_Conditional_26_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 3);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.previewWarningCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" avertissement", ctx_r0.previewWarningCount > 1 ? "s" : "");
  }
}
function JournalsComponent_Conditional_26_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "span", 3);
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucune ligne valide trouv\xE9e dans le fichier");
    \u0275\u0275elementEnd()();
  }
}
function JournalsComponent_Conditional_26_Conditional_28_For_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Cr\xE9er");
    \u0275\u0275elementEnd();
  }
}
function JournalsComponent_Conditional_26_Conditional_28_For_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "Mettre \xE0 jour");
    \u0275\u0275elementEnd();
  }
}
function JournalsComponent_Conditional_26_Conditional_28_For_15_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "warning");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", \u0275\u0275interpolate(row_r6.warning));
  }
}
function JournalsComponent_Conditional_26_Conditional_28_For_15_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function JournalsComponent_Conditional_26_Conditional_28_For_15_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, JournalsComponent_Conditional_26_Conditional_28_For_15_Conditional_13_Conditional_2_Template, 2, 2, "span", 48)(3, JournalsComponent_Conditional_26_Conditional_28_For_15_Conditional_13_Conditional_3_Template, 2, 0, "span", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("text-danger", !row_r6.accountFound)("text-success", row_r6.accountFound);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.defaultAccountCode, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!row_r6.accountFound ? 2 : 3);
  }
}
function JournalsComponent_Conditional_26_Conditional_28_For_15_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function JournalsComponent_Conditional_26_Conditional_28_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, JournalsComponent_Conditional_26_Conditional_28_For_15_Conditional_2_Template, 2, 0, "span", 44)(3, JournalsComponent_Conditional_26_Conditional_28_For_15_Conditional_3_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275conditionalCreate(13, JournalsComponent_Conditional_26_Conditional_28_For_15_Conditional_13_Template, 4, 6, "span", 46)(14, JournalsComponent_Conditional_26_Conditional_28_For_15_Conditional_14_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("row-warn", !!row_r6.warning);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r6.action === "create" ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r6.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getTypeBadgeClass(row_r6.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getTypeLabel(row_r6.type));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r6.defaultAccountCode ? 13 : 14);
  }
}
function JournalsComponent_Conditional_26_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 39)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Compte par d\xE9faut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, JournalsComponent_Conditional_26_Conditional_28_For_15_Template, 15, 9, "tr", 43, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r0.previewRows);
  }
}
function JournalsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function JournalsComponent_Conditional_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelPreview());
    });
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275listener("click", function JournalsComponent_Conditional_26_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 31)(3, "h3")(4, "span", 3);
    \u0275\u0275text(5, "preview");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Pr\xE9visualisation de l'import ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 32);
    \u0275\u0275listener("click", function JournalsComponent_Conditional_26_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelPreview());
    });
    \u0275\u0275elementStart(8, "span", 3);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 33)(11, "div", 34)(12, "span", 3);
    \u0275\u0275text(13, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span")(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " \xE0 cr\xE9er");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 35)(19, "span", 3);
    \u0275\u0275text(20, "update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span")(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " \xE0 mettre \xE0 jour");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(25, JournalsComponent_Conditional_26_Conditional_25_Template, 7, 2, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 37);
    \u0275\u0275conditionalCreate(27, JournalsComponent_Conditional_26_Conditional_27_Template, 5, 0, "div", 38)(28, JournalsComponent_Conditional_26_Conditional_28_Template, 16, 0, "table", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 40)(30, "button", 41);
    \u0275\u0275listener("click", function JournalsComponent_Conditional_26_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelPreview());
    });
    \u0275\u0275elementStart(31, "span", 3);
    \u0275\u0275text(32, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 42);
    \u0275\u0275listener("click", function JournalsComponent_Conditional_26_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmImport());
    });
    \u0275\u0275elementStart(35, "span", 3);
    \u0275\u0275text(36, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r0.previewCreateCount);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.previewUpdateCount);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.previewWarningCount > 0 ? 25 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.previewRows.length === 0 ? 27 : 28);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r0.previewRows.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Confirmer l'import (", ctx_r0.previewRows.length, " journaux) ");
  }
}
function JournalsComponent_Conditional_27_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMsg, " ");
  }
}
function JournalsComponent_Conditional_27_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, "Code requis (max 10 caract\xE8res)");
    \u0275\u0275elementEnd();
  }
}
function JournalsComponent_Conditional_27_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    \u0275\u0275property("value", type_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r8.label);
  }
}
function JournalsComponent_Conditional_27_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1, "Le nom est requis");
    \u0275\u0275elementEnd();
  }
}
function JournalsComponent_Conditional_27_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const account_r9 = ctx.$implicit;
    \u0275\u0275property("ngValue", account_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", account_r9.code, " - ", account_r9.name);
  }
}
function JournalsComponent_Conditional_27_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const account_r10 = ctx.$implicit;
    \u0275\u0275property("ngValue", account_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", account_r10.code, " - ", account_r10.name);
  }
}
function JournalsComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function JournalsComponent_Conditional_27_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275listener("click", function JournalsComponent_Conditional_27_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 31)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 32);
    \u0275\u0275listener("click", function JournalsComponent_Conditional_27_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(6, "span", 3);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "form", 51);
    \u0275\u0275listener("ngSubmit", function JournalsComponent_Conditional_27_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveJournal());
    });
    \u0275\u0275elementStart(9, "div", 52);
    \u0275\u0275conditionalCreate(10, JournalsComponent_Conditional_27_Conditional_10_Template, 4, 1, "div", 10);
    \u0275\u0275elementStart(11, "div", 53)(12, "div", 54)(13, "label");
    \u0275\u0275text(14, "Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 55);
    \u0275\u0275conditionalCreate(16, JournalsComponent_Conditional_27_Conditional_16_Template, 2, 0, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 54)(18, "label");
    \u0275\u0275text(19, "Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 57);
    \u0275\u0275repeaterCreate(21, JournalsComponent_Conditional_27_For_22_Template, 2, 2, "option", 58, _forTrack2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 54)(24, "label");
    \u0275\u0275text(25, "Nom *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 59);
    \u0275\u0275conditionalCreate(27, JournalsComponent_Conditional_27_Conditional_27_Template, 2, 0, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 53)(29, "div", 54)(30, "label");
    \u0275\u0275text(31, "Compte d\xE9bit par d\xE9faut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 60)(33, "option", 61);
    \u0275\u0275text(34, "-- Aucun --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(35, JournalsComponent_Conditional_27_For_36_Template, 2, 3, "option", 61, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 54)(38, "label");
    \u0275\u0275text(39, "Compte cr\xE9dit par d\xE9faut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 62)(41, "option", 61);
    \u0275\u0275text(42, "-- Aucun --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(43, JournalsComponent_Conditional_27_For_44_Template, 2, 3, "option", 61, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "label", 63);
    \u0275\u0275element(46, "input", 64);
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48, "Journal actif");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 40)(50, "button", 65);
    \u0275\u0275listener("click", function JournalsComponent_Conditional_27_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(51, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 66);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.editingJournal ? "Modifier le journal" : "Nouveau journal");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r0.journalForm);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.errorMsg ? 10 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r0.journalForm.get("code")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.journalForm.get("code")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r0.journalForm.get("code")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.journalForm.get("code")) == null ? null : tmp_5_0.touched) ? 16 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.journalTypes);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_7_0 = ctx_r0.journalForm.get("name")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r0.journalForm.get("name")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx_r0.journalForm.get("name")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r0.journalForm.get("name")) == null ? null : tmp_8_0.touched) ? 27 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.accounts);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.accounts);
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingJournal ? "Enregistrer" : "Cr\xE9er", " ");
  }
}
var JournalsComponent = class _JournalsComponent {
  constructor(accountingService, authService, fb, router) {
    this.accountingService = accountingService;
    this.authService = authService;
    this.fb = fb;
    this.router = router;
    this.journals = [];
    this.accounts = [];
    this.loading = false;
    this.showModal = false;
    this.editingJournal = null;
    this.saving = false;
    this.successMsg = "";
    this.errorMsg = "";
    this.importing = false;
    this.previewing = false;
    this.showPreviewModal = false;
    this.previewRows = [];
    this.pendingFile = null;
    this.journalTypes = [
      { value: "sale", label: "Vente", icon: "shopping_cart" },
      { value: "purchase", label: "Achat", icon: "local_shipping" },
      { value: "cash", label: "Caisse", icon: "payments" },
      { value: "bank", label: "Banque", icon: "account_balance" },
      { value: "general", label: "Op\xE9rations diverses", icon: "sync_alt" }
    ];
  }
  ngOnInit() {
    this.buildForm();
    this.loadData();
  }
  buildForm() {
    this.journalForm = this.fb.group({
      code: ["", [Validators.required, Validators.maxLength(10)]],
      name: ["", Validators.required],
      type: ["general", Validators.required],
      defaultDebitAccountId: [null],
      defaultCreditAccountId: [null],
      active: [true],
      companyId: [this.authService.getCompanyId()]
    });
  }
  loadData() {
    this.loading = true;
    const companyId = this.authService.getCompanyId();
    this.accountingService.getJournals(companyId).subscribe({
      next: (data) => {
        this.journals = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
    this.accountingService.getAccounts(companyId).subscribe({
      next: (data) => this.accounts = data.filter((a) => !a.deprecated),
      error: () => {
      }
    });
  }
  openCreate() {
    this.editingJournal = null;
    this.journalForm.reset({
      code: "",
      name: "",
      type: "general",
      defaultDebitAccountId: null,
      defaultCreditAccountId: null,
      active: true,
      companyId: this.authService.getCompanyId()
    });
    this.showModal = true;
    this.errorMsg = "";
  }
  openEdit(journal) {
    this.editingJournal = journal;
    this.journalForm.patchValue(journal);
    this.showModal = true;
    this.errorMsg = "";
  }
  closeModal() {
    this.showModal = false;
    this.editingJournal = null;
  }
  saveJournal() {
    if (this.journalForm.invalid) {
      this.journalForm.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const data = this.journalForm.value;
    const obs = this.editingJournal ? this.accountingService.updateJournal(this.editingJournal.id, data) : this.accountingService.createJournal(data);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.closeModal();
        this.loadData();
        this.showSuccess(this.editingJournal ? "Journal modifi\xE9" : "Journal cr\xE9\xE9 avec succ\xE8s");
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || "Erreur lors de la sauvegarde";
      }
    });
  }
  getTypeBadgeClass(type) {
    const map = {
      sale: "badge-sale",
      purchase: "badge-purchase",
      cash: "badge-cash",
      bank: "badge-bank",
      general: "badge-general"
    };
    return "badge " + (map[type] || "badge-secondary");
  }
  getTypeLabel(type) {
    return this.journalTypes.find((t) => t.value === type)?.label || type;
  }
  openDetail(journal) {
    this.router.navigate(["/accounting/journals", journal.id]);
  }
  isSuperAdmin() {
    return this.authService.isSuperAdmin();
  }
  deleteJournal(journal) {
    if (!confirm(`Supprimer le journal \xAB ${journal.name} \xBB (${journal.code}) ? Cette action est irr\xE9versible.`))
      return;
    this.accountingService.deleteJournal(journal.id).subscribe({
      next: () => {
        this.loadData();
        this.showSuccess(`Journal \xAB ${journal.name} \xBB supprim\xE9.`);
      },
      error: (err) => {
        const msg = err.status === 409 ? "Ce journal contient des \xE9critures et ne peut pas \xEAtre supprim\xE9." : err.error?.message || "Erreur lors de la suppression.";
        this.errorMsg = msg;
        setTimeout(() => this.errorMsg = "", 5e3);
      }
    });
  }
  getAccountName(id) {
    if (!id)
      return "-";
    const acc = this.accounts.find((a) => a.id === id);
    return acc ? `${acc.code} - ${acc.name}` : String(id);
  }
  downloadTemplate() {
    this.accountingService.downloadJournalsTemplate().subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "modele_journaux.xlsx";
        a.click();
        URL.revokeObjectURL(url);
      },
      error: () => {
        this.errorMsg = "Impossible de t\xE9l\xE9charger le mod\xE8le";
      }
    });
  }
  onFileSelected(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file)
      return;
    this.pendingFile = file;
    this.previewing = true;
    this.errorMsg = "";
    this.accountingService.previewJournals(file, this.authService.getCompanyId()).subscribe({
      next: (rows) => {
        this.previewing = false;
        this.previewRows = rows;
        this.showPreviewModal = true;
      },
      error: (err) => {
        this.previewing = false;
        this.pendingFile = null;
        this.errorMsg = err?.error?.message || "Erreur lors de la lecture du fichier";
      }
    });
  }
  cancelPreview() {
    this.showPreviewModal = false;
    this.previewRows = [];
    this.pendingFile = null;
  }
  confirmImport() {
    if (!this.pendingFile)
      return;
    this.importing = true;
    this.showPreviewModal = false;
    this.accountingService.importJournals(this.pendingFile, this.authService.getCompanyId()).subscribe({
      next: (res) => {
        this.importing = false;
        this.pendingFile = null;
        const msg = `Import termin\xE9 : ${res.created} cr\xE9\xE9s, ${res.updated} mis \xE0 jour`;
        this.showSuccess(msg);
        if (res.errors.length > 0)
          this.errorMsg = res.errors.slice(0, 3).join(" | ");
        this.loadData();
      },
      error: (err) => {
        this.importing = false;
        this.pendingFile = null;
        this.errorMsg = err?.error?.message || "Erreur lors de l'import";
      }
    });
  }
  get previewCreateCount() {
    return this.previewRows.filter((r) => r.action === "create").length;
  }
  get previewUpdateCount() {
    return this.previewRows.filter((r) => r.action === "update").length;
  }
  get previewWarningCount() {
    return this.previewRows.filter((r) => r.warning).length;
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 5e3);
  }
  static {
    this.\u0275fac = function JournalsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JournalsComponent)(\u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JournalsComponent, selectors: [["app-journals"]], decls: 28, vars: 9, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "page-actions"], ["title", "T\xE9l\xE9charger le mod\xE8le Excel", 1, "btn", "btn-ghost", 3, "click"], ["title", "Importer depuis Excel", 1, "btn", "btn-outline"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change", "disabled"], [1, "btn", "btn-primary", 3, "click"], [1, "alert-success", "mb-3"], [1, "alert-error", "mb-3"], [1, "table-container"], [2, "text-align", "center", "padding", "60px"], [1, "empty-state"], [1, "table-erp"], [1, "modal-overlay"], [1, "spinner"], [1, "text-center"], [1, "journal-row", 2, "cursor", "pointer"], [1, "journal-row", 2, "cursor", "pointer", 3, "click"], [1, "journal-code"], [1, "journal-name-link"], [1, "view-hint", "material-icons"], [1, "text-muted", "fs-sm"], [1, "material-icons", 2, "color", "#28a745", "font-size", "18px"], [1, "material-icons", 2, "color", "#dee2e6", "font-size", "18px"], ["title", "Modifier", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["title", "Supprimer", 1, "btn", "btn-ghost", "btn-sm", "btn-danger-ghost"], ["title", "Supprimer", 1, "btn", "btn-ghost", "btn-sm", "btn-danger-ghost", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal", "modal-preview", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "preview-summary"], [1, "preview-stat", "preview-stat-create"], [1, "preview-stat", "preview-stat-update"], [1, "preview-stat", "preview-stat-warn"], [1, "modal-body", "preview-body"], [1, "empty-state", 2, "padding", "40px 0"], [1, "table-erp", "table-preview"], [1, "modal-footer"], [1, "btn", "btn-outline", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], [3, "row-warn"], [1, "badge", "badge-success"], [1, "badge", "badge-info"], [3, "text-danger", "text-success"], [1, "text-muted"], [1, "material-icons", "warn-icon", 3, "title"], [1, "material-icons", "ok-icon"], [1, "modal", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "form-row", "cols-2"], [1, "form-group"], ["formControlName", "code", "placeholder", "Ex: VTE", 1, "form-control", 2, "text-transform", "uppercase"], [1, "invalid-feedback"], ["formControlName", "type", 1, "form-control"], [3, "value"], ["formControlName", "name", "placeholder", "Ex: Journal des ventes", 1, "form-control"], ["formControlName", "defaultDebitAccountId", 1, "form-control"], [3, "ngValue"], ["formControlName", "defaultCreditAccountId", 1, "form-control"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "active"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function JournalsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
        \u0275\u0275text(4, "book");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Journaux Comptables ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function JournalsComponent_Template_button_click_7_listener() {
          return ctx.downloadTemplate();
        });
        \u0275\u0275elementStart(8, "span", 3);
        \u0275\u0275text(9, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Mod\xE8le ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "label", 6)(12, "span", 3);
        \u0275\u0275text(13, "upload_file");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14);
        \u0275\u0275elementStart(15, "input", 7);
        \u0275\u0275listener("change", function JournalsComponent_Template_input_change_15_listener($event) {
          return ctx.onFileSelected($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "button", 8);
        \u0275\u0275listener("click", function JournalsComponent_Template_button_click_16_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275elementStart(17, "span", 3);
        \u0275\u0275text(18, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " Nouveau journal ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(20, JournalsComponent_Conditional_20_Template, 4, 1, "div", 9);
        \u0275\u0275conditionalCreate(21, JournalsComponent_Conditional_21_Template, 4, 1, "div", 10);
        \u0275\u0275elementStart(22, "div", 11);
        \u0275\u0275conditionalCreate(23, JournalsComponent_Conditional_23_Template, 2, 0, "div", 12)(24, JournalsComponent_Conditional_24_Template, 7, 0, "div", 13)(25, JournalsComponent_Conditional_25_Template, 20, 0, "table", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(26, JournalsComponent_Conditional_26_Template, 38, 6, "div", 15);
        \u0275\u0275conditionalCreate(27, JournalsComponent_Conditional_27_Template, 54, 13, "div", 15);
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275classProp("loading", ctx.previewing || ctx.importing);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.previewing ? "Lecture..." : ctx.importing ? "Import..." : "Importer", " ");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.previewing || ctx.importing);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.successMsg ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg ? 21 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading ? 23 : ctx.journals.length === 0 ? 24 : 25);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showPreviewModal ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal ? 27 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['\n.btn-danger-ghost[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n.btn-danger-ghost[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg) !important;\n}\n.journal-row[_ngcontent-%COMP%] {\n  transition: background 0.1s;\n}\n.journal-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.journal-name-link[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 500;\n}\n.view-hint[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  color: var(--text-muted);\n  vertical-align: middle;\n  margin-left: 6px;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n.journal-row[_ngcontent-%COMP%]:hover   .view-hint[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.journal-code[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  color: var(--primary);\n  font-size: 14px;\n  letter-spacing: 1px;\n}\n.alert-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: var(--success-bg);\n  border: 1px solid #c3e6cb;\n  border-radius: 8px;\n  color: var(--success);\n  font-size: 13px;\n}\n.alert-success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  color: var(--danger);\n  font-size: 13px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.modal-preview[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.modal-preview[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-right: 8px;\n  vertical-align: middle;\n  color: var(--primary);\n}\n.preview-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 12px 24px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  flex-wrap: wrap;\n}\n.preview-stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  padding: 6px 12px;\n  border-radius: 20px;\n}\n.preview-stat[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.preview-stat.preview-stat-create[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.preview-stat.preview-stat-update[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.preview-stat.preview-stat-warn[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: #e65100;\n}\n.preview-body[_ngcontent-%COMP%] {\n  max-height: 55vh;\n  overflow-y: auto;\n  padding: 0 !important;\n}\n.table-preview[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.table-preview[_ngcontent-%COMP%]   .row-warn[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--warning-bg) !important;\n}\n.table-preview[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n}\n.table-preview[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: var(--success);\n  font-weight: 600;\n}\n.warn-icon[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  vertical-align: middle;\n  color: #e65100;\n  cursor: help;\n}\n.ok-icon[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  vertical-align: middle;\n  color: var(--success);\n}\n.badge-success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-info[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: var(--text-secondary);\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: var(--primary);\n  cursor: pointer;\n}\n/*# sourceMappingURL=journals.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JournalsComponent, [{
    type: Component,
    args: [{ selector: "app-journals", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<div class="page-container">
  <div class="page-header">
    <h1 class="page-title">
      <span class="material-icons">book</span>
      Journaux Comptables
    </h1>
    <div class="page-actions">
      <button class="btn btn-ghost" (click)="downloadTemplate()" title="T\xE9l\xE9charger le mod\xE8le Excel">
        <span class="material-icons">download</span>
        Mod\xE8le
      </button>
      <label class="btn btn-outline" [class.loading]="previewing || importing" title="Importer depuis Excel">
        <span class="material-icons">upload_file</span>
        {{ previewing ? 'Lecture...' : importing ? 'Import...' : 'Importer' }}
        <input type="file" accept=".xlsx,.xls" (change)="onFileSelected($event)" style="display:none" [disabled]="previewing || importing">
      </label>
      <button class="btn btn-primary" (click)="openCreate()">
        <span class="material-icons">add</span>
        Nouveau journal
      </button>
    </div>
  </div>

  @if (successMsg) {
    <div class="alert-success mb-3">
      <span class="material-icons">check_circle</span>{{ successMsg }}
    </div>
  }
  @if (errorMsg) {
    <div class="alert-error mb-3">
      <span class="material-icons">error_outline</span>{{ errorMsg }}
    </div>
  }

  <div class="table-container">
    @if (loading) {
      <div style="text-align:center;padding:60px"><div class="spinner"></div></div>
    } @else if (journals.length === 0) {
      <div class="empty-state">
        <span class="material-icons">book</span>
        <h3>Aucun journal</h3>
        <p>Cr\xE9ez votre premier journal comptable.</p>
      </div>
    } @else {
      <table class="table-erp">
        <thead>
          <tr>
            <th>Code</th>
            <th>Nom</th>
            <th>Type</th>
            <th>Compte d\xE9bit d\xE9faut</th>
            <th>Compte cr\xE9dit d\xE9faut</th>
            <th class="text-center">Actif</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (journal of journals; track journal.id) {
            <tr class="journal-row" (click)="openDetail(journal)" style="cursor:pointer">
              <td><strong class="journal-code">{{ journal.code }}</strong></td>
              <td>
                <span class="journal-name-link">{{ journal.name }}</span>
                <span class="view-hint material-icons">arrow_forward</span>
              </td>
              <td>
                <span [class]="getTypeBadgeClass(journal.type)">{{ getTypeLabel(journal.type) }}</span>
              </td>
              <td class="text-muted fs-sm">{{ getAccountName(journal.defaultDebitAccountId) }}</td>
              <td class="text-muted fs-sm">{{ getAccountName(journal.defaultCreditAccountId) }}</td>
              <td class="text-center">
                @if (journal.active) {
                  <span class="material-icons" style="color:#28a745;font-size:18px">check_circle</span>
                } @else {
                  <span class="material-icons" style="color:#dee2e6;font-size:18px">cancel</span>
                }
              </td>
              <td class="text-center">
                <button class="btn btn-ghost btn-sm" (click)="$event.stopPropagation(); openEdit(journal)" title="Modifier">
                  <span class="material-icons">edit</span>
                </button>
                @if (isSuperAdmin()) {
                  <button class="btn btn-ghost btn-sm btn-danger-ghost" (click)="$event.stopPropagation(); deleteJournal(journal)" title="Supprimer">
                    <span class="material-icons">delete</span>
                  </button>
                }
              </td>
            </tr>
          }
        </tbody>
      </table>
    }
  </div>
</div>

@if (showPreviewModal) {
  <div class="modal-overlay" (click)="cancelPreview()">
    <div class="modal modal-preview" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3>
          <span class="material-icons">preview</span>
          Pr\xE9visualisation de l'import
        </h3>
        <button class="modal-close" (click)="cancelPreview()"><span class="material-icons">close</span></button>
      </div>

      <div class="preview-summary">
        <div class="preview-stat preview-stat-create">
          <span class="material-icons">add_circle</span>
          <span><strong>{{ previewCreateCount }}</strong> \xE0 cr\xE9er</span>
        </div>
        <div class="preview-stat preview-stat-update">
          <span class="material-icons">update</span>
          <span><strong>{{ previewUpdateCount }}</strong> \xE0 mettre \xE0 jour</span>
        </div>
        @if (previewWarningCount > 0) {
          <div class="preview-stat preview-stat-warn">
            <span class="material-icons">warning</span>
            <span><strong>{{ previewWarningCount }}</strong> avertissement{{ previewWarningCount > 1 ? 's' : '' }}</span>
          </div>
        }
      </div>

      <div class="modal-body preview-body">
        @if (previewRows.length === 0) {
          <div class="empty-state" style="padding:40px 0">
            <span class="material-icons">inbox</span>
            <p>Aucune ligne valide trouv\xE9e dans le fichier</p>
          </div>
        } @else {
          <table class="table-erp table-preview">
            <thead>
              <tr>
                <th>Action</th>
                <th>Code</th>
                <th>Nom</th>
                <th>Type</th>
                <th>Compte par d\xE9faut</th>
              </tr>
            </thead>
            <tbody>
              @for (row of previewRows; track row.code) {
                <tr [class.row-warn]="!!row.warning">
                  <td>
                    @if (row.action === 'create') {
                      <span class="badge badge-success">Cr\xE9er</span>
                    } @else {
                      <span class="badge badge-info">Mettre \xE0 jour</span>
                    }
                  </td>
                  <td><strong>{{ row.code }}</strong></td>
                  <td>{{ row.name }}</td>
                  <td>
                    <span [class]="getTypeBadgeClass(row.type)">{{ getTypeLabel(row.type) }}</span>
                  </td>
                  <td>
                    @if (row.defaultAccountCode) {
                      <span [class.text-danger]="!row.accountFound" [class.text-success]="row.accountFound">
                        {{ row.defaultAccountCode }}
                        @if (!row.accountFound) {
                          <span class="material-icons warn-icon" title="{{ row.warning }}">warning</span>
                        } @else {
                          <span class="material-icons ok-icon">check</span>
                        }
                      </span>
                    } @else { <span class="text-muted">\u2014</span> }
                  </td>
                </tr>
              }
            </tbody>
          </table>
        }
      </div>

      <div class="modal-footer">
        <button class="btn btn-outline" (click)="cancelPreview()">
          <span class="material-icons">close</span> Annuler
        </button>
        <button class="btn btn-primary" (click)="confirmImport()" [disabled]="previewRows.length === 0">
          <span class="material-icons">check_circle</span>
          Confirmer l'import ({{ previewRows.length }} journaux)
        </button>
      </div>
    </div>
  </div>
}

@if (showModal) {
  <div class="modal-overlay" (click)="closeModal()">
    <div class="modal" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3>{{ editingJournal ? 'Modifier le journal' : 'Nouveau journal' }}</h3>
        <button class="modal-close" (click)="closeModal()"><span class="material-icons">close</span></button>
      </div>
      <form [formGroup]="journalForm" (ngSubmit)="saveJournal()">
        <div class="modal-body">
          @if (errorMsg) {
            <div class="alert-error mb-3">
              <span class="material-icons">error_outline</span>{{ errorMsg }}
            </div>
          }
          <div class="form-row cols-2">
            <div class="form-group">
              <label>Code *</label>
              <input formControlName="code" class="form-control"
                [class.is-invalid]="journalForm.get('code')?.invalid && journalForm.get('code')?.touched"
                placeholder="Ex: VTE" style="text-transform:uppercase">
              @if (journalForm.get('code')?.invalid && journalForm.get('code')?.touched) {
                <span class="invalid-feedback">Code requis (max 10 caract\xE8res)</span>
              }
            </div>
            <div class="form-group">
              <label>Type *</label>
              <select formControlName="type" class="form-control">
                @for (type of journalTypes; track type.value) {
                  <option [value]="type.value">{{ type.label }}</option>
                }
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Nom *</label>
            <input formControlName="name" class="form-control"
              [class.is-invalid]="journalForm.get('name')?.invalid && journalForm.get('name')?.touched"
              placeholder="Ex: Journal des ventes">
            @if (journalForm.get('name')?.invalid && journalForm.get('name')?.touched) {
              <span class="invalid-feedback">Le nom est requis</span>
            }
          </div>
          <div class="form-row cols-2">
            <div class="form-group">
              <label>Compte d\xE9bit par d\xE9faut</label>
              <select formControlName="defaultDebitAccountId" class="form-control">
                <option [ngValue]="null">-- Aucun --</option>
                @for (account of accounts; track account.id) {
                  <option [ngValue]="account.id">{{ account.code }} - {{ account.name }}</option>
                }
              </select>
            </div>
            <div class="form-group">
              <label>Compte cr\xE9dit par d\xE9faut</label>
              <select formControlName="defaultCreditAccountId" class="form-control">
                <option [ngValue]="null">-- Aucun --</option>
                @for (account of accounts; track account.id) {
                  <option [ngValue]="account.id">{{ account.code }} - {{ account.name }}</option>
                }
              </select>
            </div>
          </div>
          <label class="checkbox-label">
            <input type="checkbox" formControlName="active">
            <span>Journal actif</span>
          </label>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline" (click)="closeModal()">Annuler</button>
          <button type="submit" class="btn btn-primary" [disabled]="saving">
            {{ editingJournal ? 'Enregistrer' : 'Cr\xE9er' }}
          </button>
        </div>
      </form>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/accounting/components/journals/journals.component.scss */\n.btn-danger-ghost {\n  color: #dc3545 !important;\n}\n.btn-danger-ghost:hover {\n  background: var(--danger-bg) !important;\n}\n.journal-row {\n  transition: background 0.1s;\n}\n.journal-row:hover td {\n  background: var(--bg-hover);\n}\n.journal-name-link {\n  color: var(--primary);\n  font-weight: 500;\n}\n.view-hint {\n  font-size: 14px !important;\n  color: var(--text-muted);\n  vertical-align: middle;\n  margin-left: 6px;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n.journal-row:hover .view-hint {\n  opacity: 1;\n}\n.journal-code {\n  font-family: "Courier New", monospace;\n  color: var(--primary);\n  font-size: 14px;\n  letter-spacing: 1px;\n}\n.alert-success {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: var(--success-bg);\n  border: 1px solid #c3e6cb;\n  border-radius: 8px;\n  color: var(--success);\n  font-size: 13px;\n}\n.alert-success .material-icons {\n  font-size: 18px;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: var(--danger-bg);\n  border: 1px solid var(--danger-bg);\n  border-radius: 8px;\n  color: var(--danger);\n  font-size: 13px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.modal-preview {\n  max-width: 900px;\n}\n.modal-preview .modal-header .material-icons {\n  font-size: 22px;\n  margin-right: 8px;\n  vertical-align: middle;\n  color: var(--primary);\n}\n.preview-summary {\n  display: flex;\n  gap: 16px;\n  padding: 12px 24px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  flex-wrap: wrap;\n}\n.preview-stat {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  padding: 6px 12px;\n  border-radius: 20px;\n}\n.preview-stat .material-icons {\n  font-size: 16px;\n}\n.preview-stat.preview-stat-create {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.preview-stat.preview-stat-update {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.preview-stat.preview-stat-warn {\n  background: var(--warning-bg);\n  color: #e65100;\n}\n.preview-body {\n  max-height: 55vh;\n  overflow-y: auto;\n  padding: 0 !important;\n}\n.table-preview {\n  font-size: 13px;\n}\n.table-preview .row-warn td {\n  background: var(--warning-bg) !important;\n}\n.table-preview .text-danger {\n  color: var(--danger);\n  font-weight: 600;\n}\n.table-preview .text-success {\n  color: var(--success);\n  font-weight: 600;\n}\n.warn-icon {\n  font-size: 14px !important;\n  vertical-align: middle;\n  color: #e65100;\n  cursor: help;\n}\n.ok-icon {\n  font-size: 14px !important;\n  vertical-align: middle;\n  color: var(--success);\n}\n.badge-success {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-info {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: var(--text-secondary);\n  cursor: pointer;\n}\n.checkbox-label input[type=checkbox] {\n  width: 16px;\n  height: 16px;\n  accent-color: var(--primary);\n  cursor: pointer;\n}\n/*# sourceMappingURL=journals.component.css.map */\n'] }]
  }], () => [{ type: AccountingService }, { type: AuthService }, { type: FormBuilder }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JournalsComponent, { className: "JournalsComponent", filePath: "app/modules/accounting/components/journals/journals.component.ts", lineNumber: 17 });
})();
export {
  JournalsComponent
};
//# sourceMappingURL=chunk-SQEQHYH6.js.map
