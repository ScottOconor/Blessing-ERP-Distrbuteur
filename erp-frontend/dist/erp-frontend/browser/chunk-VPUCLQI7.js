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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/accounting/components/chart-of-accounts/chart-of-accounts.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function ChartOfAccountsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 3);
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
function ChartOfAccountsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 3);
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
function ChartOfAccountsComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
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
function ChartOfAccountsComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "div", 25);
    \u0275\u0275elementEnd();
  }
}
function ChartOfAccountsComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 3);
    \u0275\u0275text(2, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucun compte trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Modifiez vos crit\xE8res de recherche ou cr\xE9ez un nouveau compte.");
    \u0275\u0275elementEnd()();
  }
}
function ChartOfAccountsComponent_Conditional_40_For_19_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function ChartOfAccountsComponent_Conditional_40_For_19_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "radio_button_unchecked");
    \u0275\u0275elementEnd();
  }
}
function ChartOfAccountsComponent_Conditional_40_For_19_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "D\xE9sactiv\xE9");
    \u0275\u0275elementEnd();
  }
}
function ChartOfAccountsComponent_Conditional_40_For_19_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, "Actif");
    \u0275\u0275elementEnd();
  }
}
function ChartOfAccountsComponent_Conditional_40_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 26);
    \u0275\u0275conditionalCreate(11, ChartOfAccountsComponent_Conditional_40_For_19_Conditional_11_Template, 2, 0, "span", 30)(12, ChartOfAccountsComponent_Conditional_40_For_19_Conditional_12_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275conditionalCreate(14, ChartOfAccountsComponent_Conditional_40_For_19_Conditional_14_Template, 2, 0, "span", 32)(15, ChartOfAccountsComponent_Conditional_40_For_19_Conditional_15_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 26)(17, "div", 34)(18, "button", 35);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_40_For_19_Template_button_click_18_listener() {
      const account_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(account_r4));
    });
    \u0275\u0275elementStart(19, "span", 3);
    \u0275\u0275text(20, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 36);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_40_For_19_Template_button_click_21_listener() {
      const account_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDeprecated(account_r4));
    });
    \u0275\u0275elementStart(22, "span", 3);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const account_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("account-class-" + ctx_r0.getAccountClass(account_r4.code));
    \u0275\u0275classProp("deprecated-row", account_r4.deprecated);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(account_r4.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(account_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getAccountTypeLabel(account_r4.accountType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(account_r4.internalType);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(account_r4.reconcile ? 11 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(account_r4.deprecated ? 14 : 15);
    \u0275\u0275advance(7);
    \u0275\u0275property("title", account_r4.deprecated ? "Activer" : "D\xE9sactiver");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(account_r4.deprecated ? "toggle_off" : "toggle_on");
  }
}
function ChartOfAccountsComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 23)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Intitul\xE9 du compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Type de compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Type interne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 26);
    \u0275\u0275text(12, "Rapprochement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 26);
    \u0275\u0275text(16, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, ChartOfAccountsComponent_Conditional_40_For_19_Template, 24, 12, "tr", 27, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r0.filteredAccounts);
  }
}
function ChartOfAccountsComponent_Conditional_41_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 3);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg, " ");
  }
}
function ChartOfAccountsComponent_Conditional_41_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "Le code est requis");
    \u0275\u0275elementEnd();
  }
}
function ChartOfAccountsComponent_Conditional_41_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "Uniquement des chiffres");
    \u0275\u0275elementEnd();
  }
}
function ChartOfAccountsComponent_Conditional_41_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "L'intitul\xE9 est requis");
    \u0275\u0275elementEnd();
  }
}
function ChartOfAccountsComponent_Conditional_41_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r6 = ctx.$implicit;
    \u0275\u0275property("value", type_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r6.label);
  }
}
function ChartOfAccountsComponent_Conditional_41_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r7 = ctx.$implicit;
    \u0275\u0275property("value", type_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r7.label);
  }
}
function ChartOfAccountsComponent_Conditional_41_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 57);
  }
}
function ChartOfAccountsComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_41_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_41_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 39)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 40);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_41_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(6, "span", 3);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "form", 41);
    \u0275\u0275listener("ngSubmit", function ChartOfAccountsComponent_Conditional_41_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveAccount());
    });
    \u0275\u0275elementStart(9, "div", 42);
    \u0275\u0275conditionalCreate(10, ChartOfAccountsComponent_Conditional_41_Conditional_10_Template, 4, 1, "div", 9);
    \u0275\u0275elementStart(11, "div", 43)(12, "div", 44)(13, "label");
    \u0275\u0275text(14, "Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 45);
    \u0275\u0275conditionalCreate(16, ChartOfAccountsComponent_Conditional_41_Conditional_16_Template, 2, 0, "span", 46);
    \u0275\u0275conditionalCreate(17, ChartOfAccountsComponent_Conditional_41_Conditional_17_Template, 2, 0, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 44)(19, "label");
    \u0275\u0275text(20, "Intitul\xE9 *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 47);
    \u0275\u0275conditionalCreate(22, ChartOfAccountsComponent_Conditional_41_Conditional_22_Template, 2, 0, "span", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 43)(24, "div", 44)(25, "label");
    \u0275\u0275text(26, "Type de compte *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 48);
    \u0275\u0275repeaterCreate(28, ChartOfAccountsComponent_Conditional_41_For_29_Template, 2, 2, "option", 17, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 44)(31, "label");
    \u0275\u0275text(32, "Type interne *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 49);
    \u0275\u0275repeaterCreate(34, ChartOfAccountsComponent_Conditional_41_For_35_Template, 2, 2, "option", 17, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 50)(37, "label", 51);
    \u0275\u0275element(38, "input", 52);
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, "Permettre le rapprochement");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "label", 51);
    \u0275\u0275element(42, "input", 53);
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44, "Compte d\xE9sactiv\xE9");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 54)(46, "button", 55);
    \u0275\u0275listener("click", function ChartOfAccountsComponent_Conditional_41_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(47, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 56);
    \u0275\u0275conditionalCreate(49, ChartOfAccountsComponent_Conditional_41_Conditional_49_Template, 1, 0, "span", 57);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.editingAccount ? "Modifier le compte" : "Nouveau compte");
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r0.accountForm);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.errorMsg ? 10 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r0.accountForm.get("code")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.accountForm.get("code")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r0.accountForm.get("code")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx_r0.accountForm.get("code")) == null ? null : tmp_5_0.touched) ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx_r0.accountForm.get("code")) == null ? null : tmp_6_0.hasError("pattern")) && ((tmp_6_0 = ctx_r0.accountForm.get("code")) == null ? null : tmp_6_0.touched) ? 17 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ((tmp_7_0 = ctx_r0.accountForm.get("name")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r0.accountForm.get("name")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx_r0.accountForm.get("name")) == null ? null : tmp_8_0.hasError("required")) && ((tmp_8_0 = ctx_r0.accountForm.get("name")) == null ? null : tmp_8_0.touched) ? 22 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.accountTypes);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.internalTypes);
    \u0275\u0275advance(14);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.saving ? 49 : -1);
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
    this.filteredAccounts = [];
    this.loading = false;
    this.searchTerm = "";
    this.selectedClass = "";
    this.showModal = false;
    this.editingAccount = null;
    this.saving = false;
    this.successMsg = "";
    this.errorMsg = "";
    this.importing = false;
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
    this.classes = ["1", "2", "3", "4", "5", "6", "7", "8"];
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
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilters() {
    let filtered = [...this.accounts];
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter((a) => a.code.toLowerCase().includes(term) || a.name.toLowerCase().includes(term));
    }
    if (this.selectedClass) {
      filtered = filtered.filter((a) => a.code.startsWith(this.selectedClass));
    }
    this.filteredAccounts = filtered;
  }
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
        this.showSuccess(this.editingAccount ? "Compte modifi\xE9 avec succ\xE8s" : "Compte cr\xE9\xE9 avec succ\xE8s");
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || "Erreur lors de la sauvegarde";
      }
    });
  }
  toggleDeprecated(account) {
    this.accountingService.toggleAccountDeprecated(account.id).subscribe({
      next: () => this.loadAccounts(),
      error: (err) => this.showError(err.error?.message || "Erreur")
    });
  }
  getAccountClass(code) {
    return code ? code[0] : "";
  }
  getAccountTypeLabel(type) {
    return this.accountTypes.find((t) => t.value === type)?.label || type;
  }
  onImport(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    this.importing = true;
    this.accountingService.importAccounts(file, this.authService.getCompanyId()).subscribe({
      next: (res) => {
        this.importing = false;
        event.target.value = "";
        const msg = `Import termin\xE9 : ${res.created} cr\xE9\xE9s, ${res.updated} mis \xE0 jour`;
        this.showSuccess(msg);
        if (res.errors.length > 0)
          this.showError(res.errors.join(" | "));
        this.loadAccounts();
      },
      error: (err) => {
        this.importing = false;
        event.target.value = "";
        this.showError(err?.error?.message || "Erreur lors de l'import");
      }
    });
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChartOfAccountsComponent, selectors: [["app-chart-of-accounts"]], decls: 42, vars: 11, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "page-actions"], ["title", "Importer depuis Excel Odoo", 1, "btn", "btn-outline"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change", "disabled"], [1, "btn", "btn-primary", 3, "click"], [1, "alert-success", "mb-3"], [1, "alert-error", "mb-3"], [1, "filters-bar"], [1, "filter-group", 2, "flex", "1"], [1, "search-box"], ["type", "text", "placeholder", "Code ou intitul\xE9...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "filter-actions"], [2, "font-size", "13px", "color", "#6c757d"], [1, "table-container"], [2, "text-align", "center", "padding", "60px"], [1, "empty-state"], [1, "table-erp"], [1, "modal-overlay"], [1, "spinner"], [1, "text-center"], [3, "class", "deprecated-row"], [1, "account-code"], [1, "text-muted", "fs-sm"], [1, "material-icons", 2, "color", "#28a745", "font-size", "18px"], [1, "material-icons", 2, "color", "#dee2e6", "font-size", "18px"], [1, "badge", "badge-secondary"], [1, "badge", "badge-success"], [1, "action-btns"], ["title", "Modifier", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "btn", "btn-ghost", "btn-sm", 3, "click", "title"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "form-row", "cols-2"], [1, "form-group"], ["formControlName", "code", "placeholder", "Ex: 411000", 1, "form-control"], [1, "invalid-feedback"], ["formControlName", "name", "placeholder", "Ex: Clients", 1, "form-control"], ["formControlName", "accountType", 1, "form-control"], ["formControlName", "internalType", 1, "form-control"], [2, "display", "flex", "gap", "24px"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "reconcile"], ["type", "checkbox", "formControlName", "deprecated"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner-sm-btn"]], template: function ChartOfAccountsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
        \u0275\u0275text(4, "account_tree");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Plan Comptable ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "label", 5)(8, "span", 3);
        \u0275\u0275text(9, "upload_file");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10);
        \u0275\u0275elementStart(11, "input", 6);
        \u0275\u0275listener("change", function ChartOfAccountsComponent_Template_input_change_11_listener($event) {
          return ctx.onImport($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "button", 7);
        \u0275\u0275listener("click", function ChartOfAccountsComponent_Template_button_click_12_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275elementStart(13, "span", 3);
        \u0275\u0275text(14, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Nouveau compte ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(16, ChartOfAccountsComponent_Conditional_16_Template, 4, 1, "div", 8);
        \u0275\u0275conditionalCreate(17, ChartOfAccountsComponent_Conditional_17_Template, 4, 1, "div", 9);
        \u0275\u0275elementStart(18, "div", 10)(19, "div", 11)(20, "label");
        \u0275\u0275text(21, "Rechercher");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 12)(23, "span", 3);
        \u0275\u0275text(24, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function ChartOfAccountsComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ChartOfAccountsComponent_Template_input_ngModelChange_25_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 14)(27, "label");
        \u0275\u0275text(28, "Classe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "select", 15);
        \u0275\u0275twoWayListener("ngModelChange", function ChartOfAccountsComponent_Template_select_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedClass, $event) || (ctx.selectedClass = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ChartOfAccountsComponent_Template_select_ngModelChange_29_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(30, "option", 16);
        \u0275\u0275text(31, "Toutes");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(32, ChartOfAccountsComponent_For_33_Template, 2, 2, "option", 17, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 18)(35, "span", 19);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 20);
        \u0275\u0275conditionalCreate(38, ChartOfAccountsComponent_Conditional_38_Template, 2, 0, "div", 21)(39, ChartOfAccountsComponent_Conditional_39_Template, 7, 0, "div", 22)(40, ChartOfAccountsComponent_Conditional_40_Template, 20, 0, "table", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(41, ChartOfAccountsComponent_Conditional_41_Template, 51, 13, "div", 24);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275classProp("loading", ctx.importing);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.importing ? "Import..." : "Importer", " ");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.importing);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.successMsg ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMsg && !ctx.showModal ? 17 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedClass);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.classes);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", ctx.filteredAccounts.length, " compte(s)");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading ? 38 : ctx.filteredAccounts.length === 0 ? 39 : 40);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showModal ? 41 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['\n.account-code[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  color: #714B67;\n  font-size: 14px;\n}\n.deprecated-row[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  background: #fafafa !important;\n}\n.deprecated-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #adb5bd !important;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  justify-content: center;\n}\n.alert-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #d4edda;\n  border: 1px solid #c3e6cb;\n  border-radius: 8px;\n  color: #155724;\n  font-size: 13px;\n}\n.alert-success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #721c24;\n  font-size: 13px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #495057;\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: #714B67;\n}\n.spinner-sm-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin-right: 4px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=chart-of-accounts.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartOfAccountsComponent, [{
    type: Component,
    args: [{ selector: "app-chart-of-accounts", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<div class="page-container">
  <div class="page-header">
    <h1 class="page-title">
      <span class="material-icons">account_tree</span>
      Plan Comptable
    </h1>
    <div class="page-actions">
      <label class="btn btn-outline" [class.loading]="importing" title="Importer depuis Excel Odoo">
        <span class="material-icons">upload_file</span>
        {{ importing ? 'Import...' : 'Importer' }}
        <input type="file" accept=".xlsx,.xls" (change)="onImport($event)" style="display:none" [disabled]="importing">
      </label>
      <button class="btn btn-primary" (click)="openCreate()">
        <span class="material-icons">add</span>
        Nouveau compte
      </button>
    </div>
  </div>

  @if (successMsg) {
    <div class="alert-success mb-3">
      <span class="material-icons">check_circle</span>
      {{ successMsg }}
    </div>
  }
  @if (errorMsg && !showModal) {
    <div class="alert-error mb-3">
      <span class="material-icons">error_outline</span>
      {{ errorMsg }}
    </div>
  }

  <!-- FILTERS -->
  <div class="filters-bar">
    <div class="filter-group" style="flex:1">
      <label>Rechercher</label>
      <div class="search-box">
        <span class="material-icons">search</span>
        <input
          type="text"
          class="form-control"
          placeholder="Code ou intitul\xE9..."
          [(ngModel)]="searchTerm"
          (ngModelChange)="applyFilters()"
        >
      </div>
    </div>
    <div class="filter-group">
      <label>Classe</label>
      <select class="form-control" [(ngModel)]="selectedClass" (ngModelChange)="applyFilters()">
        <option value="">Toutes</option>
        @for (cls of classes; track cls) {
          <option [value]="cls">Classe {{ cls }}</option>
        }
      </select>
    </div>
    <div class="filter-actions">
      <span style="font-size:13px;color:#6c757d;">{{ filteredAccounts.length }} compte(s)</span>
    </div>
  </div>

  <!-- TABLE -->
  <div class="table-container">
    @if (loading) {
      <div style="text-align:center;padding:60px">
        <div class="spinner"></div>
      </div>
    } @else if (filteredAccounts.length === 0) {
      <div class="empty-state">
        <span class="material-icons">account_tree</span>
        <h3>Aucun compte trouv\xE9</h3>
        <p>Modifiez vos crit\xE8res de recherche ou cr\xE9ez un nouveau compte.</p>
      </div>
    } @else {
      <table class="table-erp">
        <thead>
          <tr>
            <th>Code</th>
            <th>Intitul\xE9 du compte</th>
            <th>Type de compte</th>
            <th>Type interne</th>
            <th class="text-center">Rapprochement</th>
            <th>Statut</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (account of filteredAccounts; track account.id) {
            <tr [class]="'account-class-' + getAccountClass(account.code)"
                [class.deprecated-row]="account.deprecated">
              <td><strong class="account-code">{{ account.code }}</strong></td>
              <td>{{ account.name }}</td>
              <td class="text-muted fs-sm">{{ getAccountTypeLabel(account.accountType) }}</td>
              <td class="text-muted fs-sm">{{ account.internalType }}</td>
              <td class="text-center">
                @if (account.reconcile) {
                  <span class="material-icons" style="color:#28a745;font-size:18px;">check_circle</span>
                } @else {
                  <span class="material-icons" style="color:#dee2e6;font-size:18px;">radio_button_unchecked</span>
                }
              </td>
              <td>
                @if (account.deprecated) {
                  <span class="badge badge-secondary">D\xE9sactiv\xE9</span>
                } @else {
                  <span class="badge badge-success">Actif</span>
                }
              </td>
              <td class="text-center">
                <div class="action-btns">
                  <button class="btn btn-ghost btn-sm" (click)="openEdit(account)" title="Modifier">
                    <span class="material-icons">edit</span>
                  </button>
                  <button class="btn btn-ghost btn-sm" (click)="toggleDeprecated(account)"
                    [title]="account.deprecated ? 'Activer' : 'D\xE9sactiver'">
                    <span class="material-icons">{{ account.deprecated ? 'toggle_off' : 'toggle_on' }}</span>
                  </button>
                </div>
              </td>
            </tr>
          }
        </tbody>
      </table>
    }
  </div>
</div>

<!-- MODAL -->
@if (showModal) {
  <div class="modal-overlay" (click)="closeModal()">
    <div class="modal" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3>{{ editingAccount ? 'Modifier le compte' : 'Nouveau compte' }}</h3>
        <button class="modal-close" (click)="closeModal()">
          <span class="material-icons">close</span>
        </button>
      </div>
      <form [formGroup]="accountForm" (ngSubmit)="saveAccount()">
        <div class="modal-body">
          @if (errorMsg) {
            <div class="alert-error mb-3">
              <span class="material-icons">error_outline</span>
              {{ errorMsg }}
            </div>
          }
          <div class="form-row cols-2">
            <div class="form-group">
              <label>Code *</label>
              <input formControlName="code" class="form-control"
                [class.is-invalid]="accountForm.get('code')?.invalid && accountForm.get('code')?.touched"
                placeholder="Ex: 411000">
              @if (accountForm.get('code')?.hasError('required') && accountForm.get('code')?.touched) {
                <span class="invalid-feedback">Le code est requis</span>
              }
              @if (accountForm.get('code')?.hasError('pattern') && accountForm.get('code')?.touched) {
                <span class="invalid-feedback">Uniquement des chiffres</span>
              }
            </div>
            <div class="form-group">
              <label>Intitul\xE9 *</label>
              <input formControlName="name" class="form-control"
                [class.is-invalid]="accountForm.get('name')?.invalid && accountForm.get('name')?.touched"
                placeholder="Ex: Clients">
              @if (accountForm.get('name')?.hasError('required') && accountForm.get('name')?.touched) {
                <span class="invalid-feedback">L'intitul\xE9 est requis</span>
              }
            </div>
          </div>
          <div class="form-row cols-2">
            <div class="form-group">
              <label>Type de compte *</label>
              <select formControlName="accountType" class="form-control">
                @for (type of accountTypes; track type.value) {
                  <option [value]="type.value">{{ type.label }}</option>
                }
              </select>
            </div>
            <div class="form-group">
              <label>Type interne *</label>
              <select formControlName="internalType" class="form-control">
                @for (type of internalTypes; track type.value) {
                  <option [value]="type.value">{{ type.label }}</option>
                }
              </select>
            </div>
          </div>
          <div style="display:flex;gap:24px">
            <label class="checkbox-label">
              <input type="checkbox" formControlName="reconcile">
              <span>Permettre le rapprochement</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" formControlName="deprecated">
              <span>Compte d\xE9sactiv\xE9</span>
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline" (click)="closeModal()">Annuler</button>
          <button type="submit" class="btn btn-primary" [disabled]="saving">
            @if (saving) { <span class="spinner-sm-btn"></span> }
            {{ editingAccount ? 'Enregistrer' : 'Cr\xE9er' }}
          </button>
        </div>
      </form>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/accounting/components/chart-of-accounts/chart-of-accounts.component.scss */\n.account-code {\n  font-family: "Courier New", monospace;\n  color: #714B67;\n  font-size: 14px;\n}\n.deprecated-row {\n  opacity: 0.5;\n  background: #fafafa !important;\n}\n.deprecated-row td {\n  color: #adb5bd !important;\n}\n.action-btns {\n  display: flex;\n  gap: 4px;\n  justify-content: center;\n}\n.alert-success {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #d4edda;\n  border: 1px solid #c3e6cb;\n  border-radius: 8px;\n  color: #155724;\n  font-size: 13px;\n}\n.alert-success .material-icons {\n  font-size: 18px;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #721c24;\n  font-size: 13px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #495057;\n  cursor: pointer;\n}\n.checkbox-label input[type=checkbox] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: #714B67;\n}\n.spinner-sm-btn {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  margin-right: 4px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=chart-of-accounts.component.css.map */\n'] }]
  }], () => [{ type: AccountingService }, { type: AuthService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChartOfAccountsComponent, { className: "ChartOfAccountsComponent", filePath: "src/app/modules/accounting/components/chart-of-accounts/chart-of-accounts.component.ts", lineNumber: 16 });
})();
export {
  ChartOfAccountsComponent
};
//# sourceMappingURL=chunk-VPUCLQI7.js.map
