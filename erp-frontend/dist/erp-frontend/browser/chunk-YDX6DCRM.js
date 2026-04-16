import {
  Router
} from "./chunk-K3VCSIQL.js";
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-EEF5WTPZ.js";
import "./chunk-PPITZAXW.js";

// src/app/modules/accounting/components/journals/journals.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function JournalsComponent_Conditional_16_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate1("", ctx_r0.successMsg, " ");
  }
}
function JournalsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementEnd();
  }
}
function JournalsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 3);
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
function JournalsComponent_Conditional_20_For_19_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function JournalsComponent_Conditional_20_For_19_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "cancel");
    \u0275\u0275elementEnd();
  }
}
function JournalsComponent_Conditional_20_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 17);
    \u0275\u0275listener("click", function JournalsComponent_Conditional_20_For_19_Template_tr_click_0_listener() {
      const journal_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDetail(journal_r3));
    });
    \u0275\u0275elementStart(1, "td")(2, "strong", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 20);
    \u0275\u0275text(8, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 21);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 21);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 15);
    \u0275\u0275conditionalCreate(17, JournalsComponent_Conditional_20_For_19_Conditional_17_Template, 2, 0, "span", 22)(18, JournalsComponent_Conditional_20_For_19_Conditional_18_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 15)(20, "button", 24);
    \u0275\u0275listener("click", function JournalsComponent_Conditional_20_For_19_Template_button_click_20_listener($event) {
      const journal_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r0.openEdit(journal_r3));
    });
    \u0275\u0275elementStart(21, "span", 3);
    \u0275\u0275text(22, "edit");
    \u0275\u0275elementEnd()()()();
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
  }
}
function JournalsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 12)(1, "thead")(2, "tr")(3, "th");
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
    \u0275\u0275elementStart(13, "th", 15);
    \u0275\u0275text(14, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 15);
    \u0275\u0275text(16, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, JournalsComponent_Conditional_20_For_19_Template, 23, 8, "tr", 16, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r0.journals);
  }
}
function JournalsComponent_Conditional_21_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 3);
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
function JournalsComponent_Conditional_21_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Code requis (max 10 caract\xE8res)");
    \u0275\u0275elementEnd();
  }
}
function JournalsComponent_Conditional_21_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r5 = ctx.$implicit;
    \u0275\u0275property("value", type_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r5.label);
  }
}
function JournalsComponent_Conditional_21_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Le nom est requis");
    \u0275\u0275elementEnd();
  }
}
function JournalsComponent_Conditional_21_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const account_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", account_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", account_r6.code, " - ", account_r6.name);
  }
}
function JournalsComponent_Conditional_21_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const account_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", account_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", account_r7.code, " - ", account_r7.name);
  }
}
function JournalsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function JournalsComponent_Conditional_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275listener("click", function JournalsComponent_Conditional_21_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 27)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function JournalsComponent_Conditional_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(6, "span", 3);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "form", 29);
    \u0275\u0275listener("ngSubmit", function JournalsComponent_Conditional_21_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveJournal());
    });
    \u0275\u0275elementStart(9, "div", 30);
    \u0275\u0275conditionalCreate(10, JournalsComponent_Conditional_21_Conditional_10_Template, 4, 1, "div", 31);
    \u0275\u0275elementStart(11, "div", 32)(12, "div", 33)(13, "label");
    \u0275\u0275text(14, "Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 34);
    \u0275\u0275conditionalCreate(16, JournalsComponent_Conditional_21_Conditional_16_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 33)(18, "label");
    \u0275\u0275text(19, "Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 36);
    \u0275\u0275repeaterCreate(21, JournalsComponent_Conditional_21_For_22_Template, 2, 2, "option", 37, _forTrack1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 33)(24, "label");
    \u0275\u0275text(25, "Nom *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 38);
    \u0275\u0275conditionalCreate(27, JournalsComponent_Conditional_21_Conditional_27_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 32)(29, "div", 33)(30, "label");
    \u0275\u0275text(31, "Compte d\xE9bit par d\xE9faut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 39)(33, "option", 40);
    \u0275\u0275text(34, "-- Aucun --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(35, JournalsComponent_Conditional_21_For_36_Template, 2, 3, "option", 40, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 33)(38, "label");
    \u0275\u0275text(39, "Compte cr\xE9dit par d\xE9faut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 41)(41, "option", 40);
    \u0275\u0275text(42, "-- Aucun --");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(43, JournalsComponent_Conditional_21_For_44_Template, 2, 3, "option", 40, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "label", 42);
    \u0275\u0275element(46, "input", 43);
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48, "Journal actif");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 44)(50, "button", 45);
    \u0275\u0275listener("click", function JournalsComponent_Conditional_21_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(51, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 46);
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
  getAccountName(id) {
    if (!id)
      return "-";
    const acc = this.accounts.find((a) => a.id === id);
    return acc ? `${acc.code} - ${acc.name}` : String(id);
  }
  onImport(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    this.importing = true;
    this.accountingService.importJournals(file, this.authService.getCompanyId()).subscribe({
      next: (res) => {
        this.importing = false;
        event.target.value = "";
        const msg = `Import termin\xE9 : ${res.created} cr\xE9\xE9s, ${res.updated} mis \xE0 jour`;
        this.showSuccess(msg);
        if (res.errors.length > 0)
          this.errorMsg = res.errors.slice(0, 3).join(" | ");
        this.loadData();
      },
      error: (err) => {
        this.importing = false;
        event.target.value = "";
        this.errorMsg = err?.error?.message || "Erreur lors de l'import";
      }
    });
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JournalsComponent, selectors: [["app-journals"]], decls: 22, vars: 7, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "page-actions"], ["title", "Importer depuis Excel Odoo", 1, "btn", "btn-outline"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change", "disabled"], [1, "btn", "btn-primary", 3, "click"], [1, "alert-success", "mb-3"], [1, "table-container"], [2, "text-align", "center", "padding", "60px"], [1, "empty-state"], [1, "table-erp"], [1, "modal-overlay"], [1, "spinner"], [1, "text-center"], [1, "journal-row", 2, "cursor", "pointer"], [1, "journal-row", 2, "cursor", "pointer", 3, "click"], [1, "journal-code"], [1, "journal-name-link"], [1, "view-hint", "material-icons"], [1, "text-muted", "fs-sm"], [1, "material-icons", 2, "color", "#28a745", "font-size", "18px"], [1, "material-icons", 2, "color", "#dee2e6", "font-size", "18px"], ["title", "Modifier", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "alert-error", "mb-3"], [1, "form-row", "cols-2"], [1, "form-group"], ["formControlName", "code", "placeholder", "Ex: VTE", 1, "form-control", 2, "text-transform", "uppercase"], [1, "invalid-feedback"], ["formControlName", "type", 1, "form-control"], [3, "value"], ["formControlName", "name", "placeholder", "Ex: Journal des ventes", 1, "form-control"], ["formControlName", "defaultDebitAccountId", 1, "form-control"], [3, "ngValue"], ["formControlName", "defaultCreditAccountId", 1, "form-control"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "active"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function JournalsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
        \u0275\u0275text(4, "book");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Journaux Comptables ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "label", 5)(8, "span", 3);
        \u0275\u0275text(9, "upload_file");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10);
        \u0275\u0275elementStart(11, "input", 6);
        \u0275\u0275listener("change", function JournalsComponent_Template_input_change_11_listener($event) {
          return ctx.onImport($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "button", 7);
        \u0275\u0275listener("click", function JournalsComponent_Template_button_click_12_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275elementStart(13, "span", 3);
        \u0275\u0275text(14, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Nouveau journal ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(16, JournalsComponent_Conditional_16_Template, 4, 1, "div", 8);
        \u0275\u0275elementStart(17, "div", 9);
        \u0275\u0275conditionalCreate(18, JournalsComponent_Conditional_18_Template, 2, 0, "div", 10)(19, JournalsComponent_Conditional_19_Template, 7, 0, "div", 11)(20, JournalsComponent_Conditional_20_Template, 20, 0, "table", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(21, JournalsComponent_Conditional_21_Template, 54, 13, "div", 13);
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
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading ? 18 : ctx.journals.length === 0 ? 19 : 20);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showModal ? 21 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['\n.journal-row[_ngcontent-%COMP%] {\n  transition: background 0.1s;\n}\n.journal-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f9f3f8;\n}\n.journal-name-link[_ngcontent-%COMP%] {\n  color: #714B67;\n  font-weight: 500;\n}\n.view-hint[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  color: #adb5bd;\n  vertical-align: middle;\n  margin-left: 6px;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n.journal-row[_ngcontent-%COMP%]:hover   .view-hint[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.journal-code[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  color: #714B67;\n  font-size: 14px;\n  letter-spacing: 1px;\n}\n.alert-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #d4edda;\n  border: 1px solid #c3e6cb;\n  border-radius: 8px;\n  color: #155724;\n  font-size: 13px;\n}\n.alert-success[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #721c24;\n  font-size: 13px;\n}\n.alert-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #495057;\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: #714B67;\n  cursor: pointer;\n}\n/*# sourceMappingURL=journals.component.css.map */'] });
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
      <label class="btn btn-outline" [class.loading]="importing" title="Importer depuis Excel Odoo">
        <span class="material-icons">upload_file</span>
        {{ importing ? 'Import...' : 'Importer' }}
        <input type="file" accept=".xlsx,.xls" (change)="onImport($event)" style="display:none" [disabled]="importing">
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
              </td>
            </tr>
          }
        </tbody>
      </table>
    }
  </div>
</div>

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
`, styles: ['/* src/app/modules/accounting/components/journals/journals.component.scss */\n.journal-row {\n  transition: background 0.1s;\n}\n.journal-row:hover td {\n  background: #f9f3f8;\n}\n.journal-name-link {\n  color: #714B67;\n  font-weight: 500;\n}\n.view-hint {\n  font-size: 14px !important;\n  color: #adb5bd;\n  vertical-align: middle;\n  margin-left: 6px;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n.journal-row:hover .view-hint {\n  opacity: 1;\n}\n.journal-code {\n  font-family: "Courier New", monospace;\n  color: #714B67;\n  font-size: 14px;\n  letter-spacing: 1px;\n}\n.alert-success {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #d4edda;\n  border: 1px solid #c3e6cb;\n  border-radius: 8px;\n  color: #155724;\n  font-size: 13px;\n}\n.alert-success .material-icons {\n  font-size: 18px;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  color: #721c24;\n  font-size: 13px;\n}\n.alert-error .material-icons {\n  font-size: 18px;\n}\n.checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #495057;\n  cursor: pointer;\n}\n.checkbox-label input[type=checkbox] {\n  width: 16px;\n  height: 16px;\n  accent-color: #714B67;\n  cursor: pointer;\n}\n/*# sourceMappingURL=journals.component.css.map */\n'] }]
  }], () => [{ type: AccountingService }, { type: AuthService }, { type: FormBuilder }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JournalsComponent, { className: "JournalsComponent", filePath: "src/app/modules/accounting/components/journals/journals.component.ts", lineNumber: 17 });
})();
export {
  JournalsComponent
};
//# sourceMappingURL=chunk-YDX6DCRM.js.map
