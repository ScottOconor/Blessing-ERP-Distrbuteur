import {
  StockService
} from "./chunk-LIGNVDFD.js";
import {
  downloadExcelTemplate,
  parseExcelFile
} from "./chunk-RZFOQ7J2.js";
import "./chunk-ZJANBOXO.js";
import {
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
} from "./chunk-NJUNWWEJ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/stock/components/categories/category-list.component.ts
var _c0 = ["importInput"];
var _forTrack0 = ($index, $item) => $item.id;
function CategoryListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Mod\xE8le Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_7_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.triggerImport());
    });
    \u0275\u0275elementStart(5, "span", 11);
    \u0275\u0275text(6, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.importLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.importLoading ? "Lecture..." : "Importer Excel", " ");
  }
}
function CategoryListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNew());
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Nouvelle cat\xE9gorie");
    \u0275\u0275elementEnd();
  }
}
function CategoryListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 11);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMsg);
  }
}
function CategoryListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 14);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function CategoryListComponent_Conditional_11_For_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_11_For_11_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const c_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(c_r5));
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
}
function CategoryListComponent_Conditional_11_For_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_11_For_11_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const c_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCategory(c_r5));
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function CategoryListComponent_Conditional_11_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 18);
    \u0275\u0275conditionalCreate(7, CategoryListComponent_Conditional_11_For_11_Conditional_7_Template, 3, 0, "button", 19);
    \u0275\u0275conditionalCreate(8, CategoryListComponent_Conditional_11_For_11_Conditional_8_Template, 3, 0, "button", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r5.code || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canEdit ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canDelete ? 8 : -1);
  }
}
function CategoryListComponent_Conditional_11_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, "Aucune cat\xE9gorie \u2014 cr\xE9ez la premi\xE8re");
    \u0275\u0275elementEnd()();
  }
}
function CategoryListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 15)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275repeaterCreate(10, CategoryListComponent_Conditional_11_For_11_Template, 9, 4, "tr", null, _forTrack0);
    \u0275\u0275conditionalCreate(12, CategoryListComponent_Conditional_11_Conditional_12_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.categories.length === 0 ? 12 : -1);
  }
}
function CategoryListComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "div", 32);
    \u0275\u0275elementStart(2, "p", 33);
    \u0275\u0275text(3, "Importation en cours\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.importRows.length, " ligne(s) en cours de traitement");
  }
}
function CategoryListComponent_Conditional_12_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const \u0275$index_141_r9 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_141_r9 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8["Nom*"] || row_r8["Nom"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8["Code"] || "\u2014");
  }
}
function CategoryListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 25);
    \u0275\u0275conditionalCreate(2, CategoryListComponent_Conditional_12_Conditional_2_Template, 6, 1, "div", 26);
    \u0275\u0275elementStart(3, "div", 27)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 28);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 29)(10, "table", 15)(11, "thead")(12, "tr")(13, "th");
    \u0275\u0275text(14, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Code");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, CategoryListComponent_Conditional_12_For_21_Template, 7, 3, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 30)(23, "button", 31);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_12_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275text(24, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 13);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_12_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmImport());
    });
    \u0275\u0275elementStart(26, "span", 11);
    \u0275\u0275text(27, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.importLoading ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Aper\xE7u import cat\xE9gories (", ctx_r1.importRows.length, " ligne(s))");
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.importRows);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Confirmer (", ctx_r1.importRows.length, " cat\xE9gories) ");
  }
}
function CategoryListComponent_Conditional_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 11);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMsg);
  }
}
function CategoryListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 37)(2, "div", 27)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 38);
    \u0275\u0275conditionalCreate(9, CategoryListComponent_Conditional_13_Conditional_9_Template, 4, 1, "div", 39);
    \u0275\u0275elementStart(10, "div", 40)(11, "div", 41)(12, "label");
    \u0275\u0275text(13, "Nom ");
    \u0275\u0275elementStart(14, "span", 42);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryListComponent_Conditional_13_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 44)(18, "label");
    \u0275\u0275text(19, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function CategoryListComponent_Conditional_13_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.code, $event) || (ctx_r1.form.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 30)(22, "button", 46);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_13_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275text(23, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 47);
    \u0275\u0275listener("click", function CategoryListComponent_Conditional_13_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(25, "span", 11);
    \u0275\u0275text(26, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.editingId ? "Modifier" : "Nouvelle", " cat\xE9gorie");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.errorMsg ? 9 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.code);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Sauvegarde..." : "Sauvegarder", " ");
  }
}
var CAT_HEADERS = ["Nom*", "Code"];
var CAT_SAMPLE = ["Mat\xE9riaux de construction", "MAT"];
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
    this.canCreate = false;
    this.canEdit = false;
    this.canDelete = false;
    this.canImport = false;
  }
  ngOnInit() {
    this.canCreate = this.authService.hasPermission("STOCK", "PRODUITS", "CREATE");
    this.canEdit = this.authService.hasPermission("STOCK", "PRODUITS", "EDIT");
    this.canDelete = this.authService.hasPermission("STOCK", "PRODUITS", "DELETE");
    this.canImport = this.authService.hasPermission("STOCK", "PRODUITS", "IMPORT");
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
  deleteCategory(c) {
    if (!confirm(`Supprimer la cat\xE9gorie "${c.name}" ?`))
      return;
    this.stockService.deleteCategory(c.id).subscribe({
      next: () => {
        this.showSuccess("Cat\xE9gorie supprim\xE9e");
        this.load();
      },
      error: (e) => this.showSuccess("Erreur : " + (e.error?.message || "Impossible de supprimer"))
    });
  }
  empty() {
    return { name: "", code: "", companyId: 0 };
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
      this.importLoading = true;
      const cid = this.authService.getCompanyId();
      let done = 0, errors = 0;
      for (const row of this.importRows) {
        const dto = {
          name: String(row["Nom*"] || row["Nom"] || "").trim(),
          code: String(row["Code"] || "").trim() || void 0,
          companyId: cid
        };
        try {
          yield this.stockService.createCategory(dto).toPromise();
          done++;
        } catch (e) {
          errors++;
        }
      }
      this.importLoading = false;
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
    }, decls: 14, vars: 6, consts: [["importInput", ""], [1, "page-container"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change"], [1, "page-header"], [1, "page-title"], [2, "display", "flex", "gap", "8px", "align-items", "center"], [1, "btn-primary"], [1, "alert", "alert-success"], [1, "loading-state"], [1, "card"], [1, "btn-outline", 3, "click"], [1, "material-icons"], [1, "btn-import", 3, "click", "disabled"], [1, "btn-primary", 3, "click"], [1, "material-icons", "spin"], [1, "cfg-table"], [1, "code-badge"], [1, "fw-500"], [2, "display", "flex", "gap", "4px"], [1, "btn-icon"], ["title", "Supprimer", 1, "btn-icon", "btn-icon-danger"], [1, "btn-icon", 3, "click"], ["title", "Supprimer", 1, "btn-icon", "btn-icon-danger", 3, "click"], ["colspan", "3", 1, "empty-state"], [1, "modal-backdrop", 3, "click"], [1, "modal", 2, "max-width", "700px", "position", "relative"], [2, "position", "absolute", "inset", "0", "background", "rgba(255,255,255,0.9)", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "z-index", "10", "border-radius", "inherit"], [1, "modal-header"], [1, "btn-close", 3, "click"], [2, "overflow-x", "auto", "max-height", "400px"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "spinner"], [2, "margin-top", "14px", "color", "#017E84", "font-weight", "600"], [2, "font-size", "12px", "color", "#6c757d", "margin-top", "4px"], [1, "text-muted"], [2, "font-weight", "600"], [1, "modal"], [1, "modal-body"], [1, "alert", "alert-danger"], [1, "form-grid"], [1, "form-group", "form-full"], [1, "req"], ["type", "text", "placeholder", "Ex: Produits finis", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group"], ["type", "text", "placeholder", "PF", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click", "disabled"]], template: function CategoryListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "input", 2, 0);
        \u0275\u0275listener("change", function CategoryListComponent_Template_input_change_1_listener($event) {
          return ctx.onImportFileChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "h1", 4);
        \u0275\u0275text(5, "Cat\xE9gories d'articles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275conditionalCreate(7, CategoryListComponent_Conditional_7_Template, 8, 2);
        \u0275\u0275conditionalCreate(8, CategoryListComponent_Conditional_8_Template, 4, 0, "button", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(9, CategoryListComponent_Conditional_9_Template, 4, 1, "div", 7);
        \u0275\u0275conditionalCreate(10, CategoryListComponent_Conditional_10_Template, 4, 0, "div", 8)(11, CategoryListComponent_Conditional_11_Template, 13, 1, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, CategoryListComponent_Conditional_12_Template, 29, 3);
        \u0275\u0275conditionalCreate(13, CategoryListComponent_Conditional_13_Template, 28, 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.canImport ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.canCreate ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.successMsg ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 10 : 11);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showImportModal ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal ? 13 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%], \n.btn-cancel[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-outline[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-cancel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled, \n.btn-outline[_ngcontent-%COMP%]:disabled, \n.btn-import[_ngcontent-%COMP%]:disabled, \n.btn-cancel[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--text-muted);\n  color: var(--text-primary);\n}\n.btn-import[_ngcontent-%COMP%] {\n  background: var(--accent-light);\n  color: var(--accent);\n  border: 1px solid #b2dfdf;\n}\n.btn-import[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 6px;\n  margin-bottom: 14px;\n  font-size: 13px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.cfg-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.cfg-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.cfg-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.cfg-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.cfg-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.fw-500[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n}\n.code-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  padding: 1px 7px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.btn-icon.btn-icon-danger[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: var(--bg-surface);\n  border-radius: 10px;\n  width: 540px;\n  max-width: calc(100vw - 32px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  z-index: 1001;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n}\n.btn-close[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  border-radius: 4px;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #f0f0f0;\n  background: var(--bg-hover);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n/*# sourceMappingURL=category-list.component.css.map */'] });
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
      @if (canImport) {
        <button class="btn-outline" (click)="downloadTemplate()">
          <span class="material-icons">download</span> Mod\xE8le Excel
        </button>
        <button class="btn-import" (click)="triggerImport()" [disabled]="importLoading">
          <span class="material-icons">upload_file</span> {{ importLoading ? 'Lecture...' : 'Importer Excel' }}
        </button>
      }

      @if (canCreate) {
        <button class="btn-primary" (click)="openNew()"><span class="material-icons">add</span> Nouvelle cat\xE9gorie</button>
      }
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          @for (c of categories; track c.id) {
            <tr>
              <td><span class="code-badge">{{ c.code || '\u2014' }}</span></td>
              <td class="fw-500">{{ c.name }}</td>
              <td style="display:flex;gap:4px">
                @if (canEdit) {
                  <button class="btn-icon" (click)="openEdit(c)"><span class="material-icons">edit</span></button>
                }
                @if (canDelete) {
                  <button class="btn-icon btn-icon-danger" (click)="deleteCategory(c)" title="Supprimer"><span class="material-icons">delete</span></button>
                }
              </td>
            </tr>
          }
          @if (categories.length === 0) {
            <tr><td colspan="3" class="empty-state">Aucune cat\xE9gorie \u2014 cr\xE9ez la premi\xE8re</td></tr>
          }
        </tbody>
      </table>
    </div>
  }
</div>

<!-- Modal Import Cat\xE9gories -->
@if (showImportModal) {
  <div class="modal-backdrop" (click)="closeImportModal()"></div>
  <div class="modal" style="max-width:700px;position:relative">
    @if (importLoading) {
      <div style="position:absolute;inset:0;background:rgba(255,255,255,0.9);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10;border-radius:inherit">
        <div class="spinner"></div>
        <p style="margin-top:14px;color:#017E84;font-weight:600">Importation en cours\u2026</p>
        <p style="font-size:12px;color:#6c757d;margin-top:4px">{{ importRows.length }} ligne(s) en cours de traitement</p>
      </div>
    }
    <div class="modal-header">
      <h3>Aper\xE7u import cat\xE9gories ({{ importRows.length }} ligne(s))</h3>
      <button class="btn-close" (click)="closeImportModal()"><span class="material-icons">close</span></button>
    </div>
    <div style="overflow-x:auto;max-height:400px">
      <table class="cfg-table">
        <thead><tr><th>#</th><th>Nom</th><th>Code</th></tr></thead>
        <tbody>
          @for (row of importRows; track $index; let i = $index) {
            <tr>
              <td class="text-muted">{{ i+1 }}</td>
              <td style="font-weight:600">{{ row['Nom*'] || row['Nom'] }}</td>
              <td>{{ row['Code'] || '\u2014' }}</td>
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
`, styles: ['/* src/app/modules/stock/components/categories/category-list.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.page-header .page-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.btn-primary,\n.btn-secondary,\n.btn-outline,\n.btn-import,\n.btn-cancel {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.2s;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons,\n.btn-outline .material-icons,\n.btn-import .material-icons,\n.btn-cancel .material-icons {\n  font-size: 16px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled,\n.btn-outline:disabled,\n.btn-import:disabled,\n.btn-cancel:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: var(--primary);\n  color: white;\n  border: none;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1a68d1;\n}\n.btn-secondary {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover:not(:disabled) {\n  background: var(--bg-hover);\n}\n.btn-outline {\n  background: var(--bg-surface);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.btn-outline:hover {\n  border-color: var(--text-muted);\n  color: var(--text-primary);\n}\n.btn-import {\n  background: var(--accent-light);\n  color: var(--accent);\n  border: 1px solid #b2dfdf;\n}\n.btn-import:hover:not(:disabled) {\n  background: var(--accent-light);\n}\n.btn-cancel {\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-cancel:hover {\n  background: var(--bg-hover);\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 6px;\n  margin-bottom: 14px;\n  font-size: 13px;\n}\n.alert .material-icons {\n  font-size: 17px;\n}\n.alert.alert-success {\n  background: #d1f0e8;\n  color: var(--success);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.cfg-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.cfg-table th {\n  padding: 9px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-hover);\n  border-bottom: 1px solid var(--border);\n}\n.cfg-table td {\n  padding: 9px 14px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n.cfg-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.cfg-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.fw-500 {\n  font-weight: 500;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.small {\n  font-size: 12px;\n}\n.mono {\n  font-family: "Roboto Mono", monospace;\n}\n.code-badge {\n  display: inline-block;\n  background: var(--primary-subtle);\n  color: var(--primary);\n  padding: 1px 7px;\n  border-radius: 3px;\n  font-size: 11px;\n  font-family: monospace;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.btn-icon {\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-icon .material-icons {\n  font-size: 16px;\n}\n.btn-icon:hover {\n  background: var(--primary-subtle);\n  color: var(--primary);\n}\n.btn-icon.btn-icon-danger:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.req {\n  color: var(--danger);\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: var(--bg-surface);\n  border-radius: 10px;\n  width: 540px;\n  max-width: calc(100vw - 32px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  z-index: 1001;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header h2 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n}\n.btn-close {\n  width: 30px;\n  height: 30px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n  border-radius: 4px;\n}\n.btn-close:hover {\n  background: var(--bg-hover);\n}\n.modal-body {\n  padding: 18px 20px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #f0f0f0;\n  background: var(--bg-hover);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid .form-full {\n  grid-column: 1/-1;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-control {\n  padding: 8px 10px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 13px;\n  font-family: "Roboto", sans-serif;\n  outline: none;\n}\n.form-control:focus {\n  border-color: var(--primary);\n}\n/*# sourceMappingURL=category-list.component.css.map */\n'] }]
  }], () => [{ type: StockService }, { type: AuthService }], { importInput: [{
    type: ViewChild,
    args: ["importInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryListComponent, { className: "CategoryListComponent", filePath: "app/modules/stock/components/categories/category-list.component.ts", lineNumber: 18 });
})();
export {
  CategoryListComponent
};
//# sourceMappingURL=chunk-QWRWHUOT.js.map
