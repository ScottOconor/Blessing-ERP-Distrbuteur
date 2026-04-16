import {
  StockService
} from "./chunk-YEOTRJFB.js";
import {
  downloadExcelTemplate,
  parseExcelFile
} from "./chunk-KYBH2TOV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-FU5PLMG6.js";
import {
  AuthService
} from "./chunk-MBNWDFD7.js";
import {
  CommonModule,
  Component,
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-EEF5WTPZ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-PPITZAXW.js";

// src/app/modules/stock/components/categories/category-list.component.ts
var _c0 = ["importInput"];
var _forTrack0 = ($index, $item) => $item.id;
function CategoryListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 7);
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
function CategoryListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 13);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function CategoryListComponent_Conditional_21_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "button", 18);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_21_For_17_Template_button_click_13_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(c_r3));
    });
    \u0275\u0275elementStart(14, "span", 7);
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r3.code || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.stockAccountCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.stockInAccountCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.cogsAccountCode);
  }
}
function CategoryListComponent_Conditional_21_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 19);
    \u0275\u0275text(2, "Aucune cat\xE9gorie \u2014 cr\xE9ez la premi\xE8re");
    \u0275\u0275elementEnd()();
  }
}
function CategoryListComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Cpte stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Cpte variation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Cpte COGS");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, CategoryListComponent_Conditional_21_For_17_Template, 16, 5, "tr", null, _forTrack0);
    \u0275\u0275conditionalCreate(18, CategoryListComponent_Conditional_21_Conditional_18_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r0.categories);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.categories.length === 0 ? 18 : -1);
  }
}
function CategoryListComponent_Conditional_22_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const \u0275$index_148_r6 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_148_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5["Nom*"] || row_r5["Nom"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5["Code"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5["Compte Stock (311xxx)"] || "311000");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5["Compte Entr\xE9e Stock (603x)"] || "6031");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5["Compte CMV (605xx)"] || "60500");
  }
}
function CategoryListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeImportModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 21)(2, "div", 22)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeImportModal());
    });
    \u0275\u0275elementStart(6, "span", 7);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 24)(9, "table", 14)(10, "thead")(11, "tr")(12, "th");
    \u0275\u0275text(13, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Cpte Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Cpte Entr\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Cpte CMV");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275repeaterCreate(25, CategoryListComponent_Conditional_22_For_26_Template, 13, 6, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 25)(28, "button", 26);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_22_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeImportModal());
    });
    \u0275\u0275text(29, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 9);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_22_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmImport());
    });
    \u0275\u0275elementStart(31, "span", 7);
    \u0275\u0275text(32, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Aper\xE7u import cat\xE9gories (", ctx_r0.importRows.length, " ligne(s))");
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r0.importRows);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Confirmer (", ctx_r0.importRows.length, " cat\xE9gories) ");
  }
}
function CategoryListComponent_Conditional_23_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 7);
    \u0275\u0275text(2, "error");
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
function CategoryListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_23_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 30)(2, "div", 22)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275elementStart(6, "span", 7);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 31);
    \u0275\u0275conditionalCreate(9, CategoryListComponent_Conditional_23_Conditional_9_Template, 4, 1, "div", 32);
    \u0275\u0275elementStart(10, "div", 33)(11, "div", 34)(12, "label");
    \u0275\u0275text(13, "Nom ");
    \u0275\u0275elementStart(14, "span", 35);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryListComponent_Conditional_23_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.name, $event) || (ctx_r0.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 37)(18, "label");
    \u0275\u0275text(19, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryListComponent_Conditional_23_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.code, $event) || (ctx_r0.form.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 37)(22, "label");
    \u0275\u0275text(23, "Compte stock OHADA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryListComponent_Conditional_23_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.stockAccountCode, $event) || (ctx_r0.form.stockAccountCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 37)(26, "label");
    \u0275\u0275text(27, "Compte variation stocks (achat)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryListComponent_Conditional_23_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.stockInAccountCode, $event) || (ctx_r0.form.stockInAccountCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 37)(30, "label");
    \u0275\u0275text(31, "Compte co\xFBt des ventes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryListComponent_Conditional_23_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.cogsAccountCode, $event) || (ctx_r0.form.cogsAccountCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 25)(34, "button", 42);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_23_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275text(35, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 43);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_23_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275elementStart(37, "span", 7);
    \u0275\u0275text(38, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.editingId ? "Modifier" : "Nouvelle", " cat\xE9gorie");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.errorMsg ? 9 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.stockAccountCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.stockInAccountCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.cogsAccountCode);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Sauvegarde..." : "Sauvegarder", " ");
  }
}
var CAT_HEADERS = ["Nom*", "Code", "Compte Stock (311xxx)", "Compte Entr\xE9e Stock (603x)", "Compte CMV (605xx)"];
var CAT_SAMPLE = ["Mat\xE9riaux de construction", "MAT", "311100", "6031", "60500"];
var CategoryListComponent = class _CategoryListComponent {
  constructor(stockService, authService) {
    this.stockService = stockService;
    this.authService = authService;
    this.categories = [];
    this.loading = false;
    this.saving = false;
    this.showModal = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.editingId = null;
    this.form = this.empty();
    this.showImportModal = false;
    this.importRows = [];
    this.importLoading = false;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.stockService.getCategories(this.authService.getCompanyId()).subscribe({
      next: (d) => {
        this.categories = d;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  openNew() {
    this.editingId = null;
    this.form = this.empty();
    this.errorMsg = "";
    this.showModal = true;
  }
  openEdit(c) {
    this.editingId = c.id;
    this.form = __spreadValues({}, c);
    this.errorMsg = "";
    this.showModal = true;
  }
  save() {
    if (!this.form.name) {
      this.errorMsg = "Le nom est obligatoire";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    const dto = __spreadProps(__spreadValues({}, this.form), { companyId: this.authService.getCompanyId() });
    const obs = this.editingId ? this.stockService.updateCategory(this.editingId, dto) : this.stockService.createCategory(dto);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.showModal = false;
        this.showSuccess(this.editingId ? "Cat\xE9gorie mise \xE0 jour" : "Cat\xE9gorie cr\xE9\xE9e");
        this.load();
      },
      error: (e) => {
        this.saving = false;
        this.errorMsg = e.error?.message || "Erreur";
      }
    });
  }
  empty() {
    return { name: "", code: "", stockAccountCode: "311000", stockInAccountCode: "6031", cogsAccountCode: "60500", companyId: 0 };
  }
  showSuccess(msg) {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = "", 3e3);
  }
  // === Import Excel ===
  downloadTemplate() {
    downloadExcelTemplate(CAT_HEADERS, CAT_SAMPLE, "modele_categories.xlsx");
  }
  triggerImport() {
    this.importInput.nativeElement.value = "";
    this.importInput.nativeElement.click();
  }
  onImportFileChange(event) {
    return __async(this, null, function* () {
      const file = event.target.files?.[0];
      if (!file)
        return;
      this.importLoading = true;
      try {
        const rows = yield parseExcelFile(file);
        this.importRows = rows.filter((r) => r["Nom*"] || r["Nom"]);
        if (this.importRows.length === 0) {
          this.showSuccess('Aucune ligne valide (colonne "Nom*" requise)');
          this.importLoading = false;
          return;
        }
        this.showImportModal = true;
      } catch (e) {
        this.showSuccess("Erreur : " + e.message);
      }
      this.importLoading = false;
    });
  }
  closeImportModal() {
    this.showImportModal = false;
    this.importRows = [];
  }
  confirmImport() {
    return __async(this, null, function* () {
      const cid = this.authService.getCompanyId();
      let done = 0, errors = 0;
      for (const row of this.importRows) {
        const dto = {
          name: String(row["Nom*"] || row["Nom"] || "").trim(),
          code: String(row["Code"] || "").trim() || void 0,
          stockAccountCode: String(row["Compte Stock (311xxx)"] || "311000").trim(),
          stockInAccountCode: String(row["Compte Entr\xE9e Stock (603x)"] || "6031").trim(),
          cogsAccountCode: String(row["Compte CMV (605xx)"] || "60500").trim(),
          companyId: cid
        };
        try {
          yield this.stockService.createCategory(dto).toPromise();
          done++;
        } catch (e) {
          errors++;
        }
      }
      this.closeImportModal();
      this.load();
      this.showSuccess(`Import termin\xE9 : ${done} cr\xE9\xE9(e)(s), ${errors} erreur(s)`);
    });
  }
  static {
    this.\u0275fac = function CategoryListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoryListComponent)(\u0275\u0275directiveInject(StockService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryListComponent, selectors: [["app-category-list"]], viewQuery: function CategoryListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.importInput = _t.first);
      }
    }, decls: 24, vars: 6, consts: [["importInput", ""], [1, "page-container"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change"], [1, "page-header"], [1, "page-title"], [2, "display", "flex", "gap", "8px", "align-items", "center"], [1, "btn-outline", 3, "click"], [1, "material-icons"], [1, "btn-import", 3, "click", "disabled"], [1, "btn-primary", 3, "click"], [1, "alert", "alert-success"], [1, "loading-state"], [1, "card"], [1, "material-icons", "spin"], [1, "cfg-table"], [1, "code-badge"], [1, "fw-500"], [1, "mono", "text-muted"], [1, "btn-icon", 3, "click"], ["colspan", "6", 1, "empty-state"], [1, "modal-backdrop", 3, "click"], [1, "modal", 2, "max-width", "700px"], [1, "modal-header"], [1, "btn-close", 3, "click"], [2, "overflow-x", "auto", "max-height", "400px"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "text-muted"], [2, "font-weight", "600"], [1, "mono"], [1, "modal"], [1, "modal-body"], [1, "alert", "alert-danger"], [1, "form-grid"], [1, "form-group", "form-full"], [1, "req"], ["type", "text", "placeholder", "Ex: Produits finis", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group"], ["type", "text", "placeholder", "PF", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "311000", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "6031", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "60500", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click", "disabled"]], template: function CategoryListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "input", 2, 0);
        \u0275\u0275listener("change", function CategoryListComponent_Template_input_change_1_listener($event) {
          return ctx.onImportFileChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "h1", 4);
        \u0275\u0275text(5, "Cat\xE9gories d'articles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5)(7, "button", 6);
        \u0275\u0275listener("click", function CategoryListComponent_Template_button_click_7_listener() {
          return ctx.downloadTemplate();
        });
        \u0275\u0275elementStart(8, "span", 7);
        \u0275\u0275text(9, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Mod\xE8le Excel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 8);
        \u0275\u0275listener("click", function CategoryListComponent_Template_button_click_11_listener() {
          return ctx.triggerImport();
        });
        \u0275\u0275elementStart(12, "span", 7);
        \u0275\u0275text(13, "upload_file");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 9);
        \u0275\u0275listener("click", function CategoryListComponent_Template_button_click_15_listener() {
          return ctx.openNew();
        });
        \u0275\u0275elementStart(16, "span", 7);
        \u0275\u0275text(17, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, " Nouvelle cat\xE9gorie");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(19, CategoryListComponent_Conditional_19_Template, 4, 1, "div", 10);
        \u0275\u0275conditionalCreate(20, CategoryListComponent_Conditional_20_Template, 4, 0, "div", 11)(21, CategoryListComponent_Conditional_21_Template, 19, 1, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(22, CategoryListComponent_Conditional_22_Template, 34, 2);
        \u0275\u0275conditionalCreate(23, CategoryListComponent_Conditional_23_Template, 40, 9);
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("disabled", ctx.importLoading);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.importLoading ? "Lecture..." : "Importer Excel", " ");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.successMsg ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 20 : 21);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showImportModal ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal ? 23 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%], \n.btn-cancel[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-cancel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled, \n.btn-outline[_ngcontent-%COMP%]:disabled, \n.btn-import[_ngcontent-%COMP%]:disabled, \n.btn-cancel[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2c7be5;\n  color: white;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #495057;\n  border: 1px solid #dee2e6;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8f9fa;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: white;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: #adb5bd;\n  color: #212529;\n}\n.btn-import[_ngcontent-%COMP%] {\n  background: #e8f5f5;\n  color: #017E84;\n  border: 1px solid #b2dfdf;\n}\n.btn-import[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #d0eded;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: white;\n  color: #495057;\n  border: 1px solid #dee2e6;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 6px;\n  margin-bottom: 14px;\n  font-size: 13px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #721c24;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.cfg-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.cfg-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.cfg-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\n.cfg-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.cfg-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\n.fw-500[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.code-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #e8f0fe;\n  color: #1a68d1;\n  padding: 1px 7px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: #e8f0fe;\n  color: #2c7be5;\n}\n.req[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  border-radius: 10px;\n  width: 540px;\n  max-width: calc(100vw - 32px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  z-index: 1001;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n}\n.btn-close[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  border-radius: 4px;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #2c7be5;\n}\n/*# sourceMappingURL=category-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryListComponent, [{
    type: Component,
    args: [{ selector: "app-category-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <!-- Input file cach\xE9 -->
  <input #importInput type="file" accept=".xlsx,.xls" style="display:none" (change)="onImportFileChange($event)" />

  <div class="page-header">
    <h1 class="page-title">Cat\xE9gories d'articles</h1>
    <div style="display:flex;gap:8px;align-items:center">
      <button class="btn-outline" (click)="downloadTemplate()"><span class="material-icons">download</span> Mod\xE8le Excel</button>
      <button class="btn-import" (click)="triggerImport()" [disabled]="importLoading">
        <span class="material-icons">upload_file</span> {{ importLoading ? 'Lecture...' : 'Importer Excel' }}
      </button>
      <button class="btn-primary" (click)="openNew()"><span class="material-icons">add</span> Nouvelle cat\xE9gorie</button>
    </div>
  </div>

  @if (successMsg) { <div class="alert alert-success"><span class="material-icons">check_circle</span> {{ successMsg }}</div> }

  @if (loading) {
    <div class="loading-state"><span class="material-icons spin">refresh</span> Chargement...</div>
  } @else {
    <div class="card">
      <table class="cfg-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Nom</th>
            <th>Cpte stock</th>
            <th>Cpte variation</th>
            <th>Cpte COGS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @for (c of categories; track c.id) {
            <tr>
              <td><span class="code-badge">{{ c.code || '\u2014' }}</span></td>
              <td class="fw-500">{{ c.name }}</td>
              <td class="mono text-muted">{{ c.stockAccountCode }}</td>
              <td class="mono text-muted">{{ c.stockInAccountCode }}</td>
              <td class="mono text-muted">{{ c.cogsAccountCode }}</td>
              <td><button class="btn-icon" (click)="openEdit(c)"><span class="material-icons">edit</span></button></td>
            </tr>
          }
          @if (categories.length === 0) {
            <tr><td colspan="6" class="empty-state">Aucune cat\xE9gorie \u2014 cr\xE9ez la premi\xE8re</td></tr>
          }
        </tbody>
      </table>
    </div>
  }
</div>

<!-- Modal Import Cat\xE9gories -->
@if (showImportModal) {
  <div class="modal-backdrop" (click)="closeImportModal()"></div>
  <div class="modal" style="max-width:700px">
    <div class="modal-header">
      <h3>Aper\xE7u import cat\xE9gories ({{ importRows.length }} ligne(s))</h3>
      <button class="btn-close" (click)="closeImportModal()"><span class="material-icons">close</span></button>
    </div>
    <div style="overflow-x:auto;max-height:400px">
      <table class="cfg-table">
        <thead><tr><th>#</th><th>Nom</th><th>Code</th><th>Cpte Stock</th><th>Cpte Entr\xE9e</th><th>Cpte CMV</th></tr></thead>
        <tbody>
          @for (row of importRows; track $index; let i = $index) {
            <tr>
              <td class="text-muted">{{ i+1 }}</td>
              <td style="font-weight:600">{{ row['Nom*'] || row['Nom'] }}</td>
              <td>{{ row['Code'] || '\u2014' }}</td>
              <td class="mono">{{ row['Compte Stock (311xxx)'] || '311000' }}</td>
              <td class="mono">{{ row['Compte Entr\xE9e Stock (603x)'] || '6031' }}</td>
              <td class="mono">{{ row['Compte CMV (605xx)'] || '60500' }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
    <div class="modal-footer">
      <button class="btn-cancel" (click)="closeImportModal()">Annuler</button>
      <button class="btn-primary" (click)="confirmImport()">
        <span class="material-icons">check_circle</span> Confirmer ({{ importRows.length }} cat\xE9gories)
      </button>
    </div>
  </div>
}

@if (showModal) {
  <div class="modal-backdrop" (click)="showModal = false"></div>
  <div class="modal">
    <div class="modal-header">
      <h2>{{ editingId ? 'Modifier' : 'Nouvelle' }} cat\xE9gorie</h2>
      <button class="btn-close" (click)="showModal = false"><span class="material-icons">close</span></button>
    </div>
    <div class="modal-body">
      @if (errorMsg) { <div class="alert alert-danger"><span class="material-icons">error</span> {{ errorMsg }}</div> }
      <div class="form-grid">
        <div class="form-group form-full">
          <label>Nom <span class="req">*</span></label>
          <input type="text" [(ngModel)]="form.name" class="form-control" placeholder="Ex: Produits finis" />
        </div>
        <div class="form-group">
          <label>Code</label>
          <input type="text" [(ngModel)]="form.code" class="form-control" placeholder="PF" />
        </div>
        <div class="form-group">
          <label>Compte stock OHADA</label>
          <input type="text" [(ngModel)]="form.stockAccountCode" class="form-control" placeholder="311000" />
        </div>
        <div class="form-group">
          <label>Compte variation stocks (achat)</label>
          <input type="text" [(ngModel)]="form.stockInAccountCode" class="form-control" placeholder="6031" />
        </div>
        <div class="form-group">
          <label>Compte co\xFBt des ventes</label>
          <input type="text" [(ngModel)]="form.cogsAccountCode" class="form-control" placeholder="60500" />
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" (click)="showModal = false">Annuler</button>
      <button class="btn-primary" (click)="save()" [disabled]="saving">
        <span class="material-icons">save</span> {{ saving ? 'Sauvegarde...' : 'Sauvegarder' }}
      </button>
    </div>
  </div>
}
`, styles: ['/* src/app/modules/stock/components/categories/category-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n.btn-primary,\n.btn-secondary,\n.btn-outline,\n.btn-import,\n.btn-cancel {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons,\n.btn-outline .material-icons,\n.btn-import .material-icons,\n.btn-cancel .material-icons {\n  font-size: 16px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled,\n.btn-outline:disabled,\n.btn-import:disabled,\n.btn-cancel:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: #2c7be5;\n  color: white;\n  border: none;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary {\n  background: white;\n  color: #495057;\n  border: 1px solid #dee2e6;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #f8f9fa;\n}\n.btn-outline {\n  background: white;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n.btn-outline:hover {\n  border-color: #adb5bd;\n  color: #212529;\n}\n.btn-import {\n  background: #e8f5f5;\n  color: #017E84;\n  border: 1px solid #b2dfdf;\n}\n.btn-import:hover:not(:disabled) {\n  background: #d0eded;\n}\n.btn-cancel {\n  background: white;\n  color: #495057;\n  border: 1px solid #dee2e6;\n}\n.btn-cancel:hover {\n  background: #f8f9fa;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 6px;\n  margin-bottom: 14px;\n  font-size: 13px;\n}\n.alert .material-icons {\n  font-size: 17px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: #0a5c45;\n}\n.alert.alert-danger {\n  background: #fde8e8;\n  color: #721c24;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: #6c757d;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.cfg-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.cfg-table th {\n  padding: 9px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6c757d;\n  text-transform: uppercase;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.cfg-table td {\n  padding: 9px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid #f5f5f5;\n  vertical-align: middle;\n}\n.cfg-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.cfg-table tbody tr:hover td {\n  background: #fafafa;\n}\n.fw-500 {\n  font-weight: 500;\n}\n.text-muted {\n  color: #6c757d;\n}\n.small {\n  font-size: 12px;\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n}\n.code-badge {\n  display: inline-block;\n  background: #e8f0fe;\n  color: #1a68d1;\n  padding: 1px 7px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px;\n  color: #adb5bd;\n  font-size: 14px;\n}\n.btn-icon {\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n}\n.btn-icon .material-icons {\n  font-size: 16px;\n}\n.btn-icon:hover {\n  background: #e8f0fe;\n  color: #2c7be5;\n}\n.req {\n  color: #dc3545;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  border-radius: 10px;\n  width: 540px;\n  max-width: calc(100vw - 32px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  z-index: 1001;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.modal-header h2 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n}\n.btn-close {\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6c757d;\n  border-radius: 4px;\n}\n.btn-close:hover {\n  background: #f0f0f0;\n}\n.modal-body {\n  padding: 18px 20px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid .form-full {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n}\n.form-control {\n  padding: 8px 10px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control:focus {\n  border-color: #2c7be5;\n}\n/*# sourceMappingURL=category-list.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }], { importInput: [{
    type: ViewChild,
    args: ["importInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryListComponent, { className: "CategoryListComponent", filePath: "src/app/modules/stock/components/categories/category-list.component.ts", lineNumber: 18 });
})();
export {
  CategoryListComponent
};
//# sourceMappingURL=chunk-UADXF2MO.js.map
