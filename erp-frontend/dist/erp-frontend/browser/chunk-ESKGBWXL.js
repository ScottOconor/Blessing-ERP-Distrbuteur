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
  AccountingService
} from "./chunk-TG7BJABV.js";
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
  __async
} from "./chunk-PPITZAXW.js";

// src/app/modules/purchases/components/suppliers/supplier-list.component.ts
var _c0 = ["importInput"];
var _forTrack0 = ($index, $item) => $item.id;
function SupplierListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 7);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.successMsg);
  }
}
function SupplierListComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "span", 17);
    \u0275\u0275text(2, " Chargement...");
    \u0275\u0275elementEnd();
  }
}
function SupplierListComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 7);
    \u0275\u0275text(2, "store");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun fournisseur.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 9);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_28_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNew());
    });
    \u0275\u0275text(6, "Ajouter un fournisseur");
    \u0275\u0275elementEnd()();
  }
}
function SupplierListComponent_Conditional_29_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 19)(11, "button", 20);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_29_For_15_Template_button_click_11_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(s_r5));
    });
    \u0275\u0275elementStart(12, "span", 7);
    \u0275\u0275text(13, "edit");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.phone || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.address || "\u2014");
  }
}
function SupplierListComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "table", 18)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, SupplierListComponent_Conditional_29_For_15_Template, 14, 4, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.filtered);
  }
}
function SupplierListComponent_Conditional_30_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 29)(1, "td", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const \u0275$index_156_r8 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_156_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7["Nom*"] || row_r7["Nom"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7["R\xE9f\xE9rence"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7["T\xE9l\xE9phone"] || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7["Email"] || "\u2014");
  }
}
function SupplierListComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_30_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_30_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 23)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_30_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275elementStart(6, "span", 7);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 25)(9, "table", 26)(10, "thead")(11, "tr", 27)(12, "th", 28);
    \u0275\u0275text(13, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 28);
    \u0275\u0275text(15, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 28);
    \u0275\u0275text(17, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 28);
    \u0275\u0275text(19, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 28);
    \u0275\u0275text(21, "Email");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, SupplierListComponent_Conditional_30_For_24_Template, 11, 5, "tr", 29, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 30)(26, "button", 6);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_30_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImportModal());
    });
    \u0275\u0275text(27, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 9);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_30_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmImport());
    });
    \u0275\u0275elementStart(29, "span", 7);
    \u0275\u0275text(30, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Aper\xE7u import fournisseurs (", ctx_r1.importRows.length, " ligne(s))");
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.importRows);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Confirmer (", ctx_r1.importRows.length, " fournisseurs) ");
  }
}
function SupplierListComponent_Conditional_31_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 7);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 45);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_31_Conditional_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.errorMsg = "");
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.errorMsg);
  }
}
function SupplierListComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementStart(1, "div", 34);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_31_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 23)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_31_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275elementStart(6, "span", 7);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, SupplierListComponent_Conditional_31_Conditional_8_Template, 6, 1, "div", 35);
    \u0275\u0275elementStart(9, "div", 36)(10, "div", 37)(11, "label");
    \u0275\u0275text(12, "Nom ");
    \u0275\u0275elementStart(13, "span", 38);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function SupplierListComponent_Conditional_31_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 37)(17, "label");
    \u0275\u0275text(18, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function SupplierListComponent_Conditional_31_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 37)(21, "label");
    \u0275\u0275text(22, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function SupplierListComponent_Conditional_31_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.phone, $event) || (ctx_r1.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 37)(25, "label");
    \u0275\u0275text(26, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function SupplierListComponent_Conditional_31_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.address, $event) || (ctx_r1.form.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 43)(29, "button", 6);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_31_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = false);
    });
    \u0275\u0275text(30, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 44);
    \u0275\u0275listener("click", function SupplierListComponent_Conditional_31_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveSupplier());
    });
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingId ? "Modifier le fournisseur" : "Nouveau fournisseur");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.errorMsg ? 8 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.address);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Sauvegarde..." : "Sauvegarder", " ");
  }
}
var SUP_HEADERS = ["Nom*", "R\xE9f\xE9rence", "T\xE9l\xE9phone", "Email", "Adresse"];
var SUP_SAMPLE = ["Fournisseur B\xE2timent SARL", "F001", "+237 222000000", "contact@fourn.cm", "Yaound\xE9, Cameroun"];
var SupplierListComponent = class _SupplierListComponent {
  constructor(accountingService, authService) {
    this.accountingService = accountingService;
    this.authService = authService;
    this.suppliers = [];
    this.filtered = [];
    this.search = "";
    this.loading = false;
    this.showModal = false;
    this.editingId = null;
    this.saving = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.form = this.emptyForm();
    this.showImportModal = false;
    this.importRows = [];
    this.importLoading = false;
  }
  ngOnInit() {
    this.loadSuppliers();
  }
  loadSuppliers() {
    this.loading = true;
    const cid = this.authService.getCompanyId() ?? 1;
    this.accountingService.getPartners(cid).subscribe({
      next: (data) => {
        this.suppliers = data.filter((p) => p.type === "supplier" || p.type === "both");
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilter() {
    const q = this.search.toLowerCase();
    this.filtered = q ? this.suppliers.filter((s) => s.name?.toLowerCase().includes(q) || s.phone?.toLowerCase().includes(q)) : [...this.suppliers];
  }
  openNew() {
    this.editingId = null;
    this.form = this.emptyForm();
    this.showModal = true;
  }
  openEdit(s) {
    this.editingId = s.id;
    this.form = { name: s.name, email: s.email ?? "", phone: s.phone ?? "", address: s.address ?? "", type: s.type ?? "supplier", companyId: s.companyId };
    this.showModal = true;
  }
  saveSupplier() {
    if (!this.form.name) {
      this.errorMsg = "Le nom est obligatoire";
      return;
    }
    this.saving = true;
    const cid = this.authService.getCompanyId() ?? 1;
    this.form.companyId = cid;
    this.form.type = "supplier";
    const action = this.editingId ? this.accountingService.updatePartner(this.editingId, this.form) : this.accountingService.createPartner(this.form);
    action.subscribe({
      next: () => {
        this.saving = false;
        this.showModal = false;
        this.successMsg = this.editingId ? "Fournisseur mis \xE0 jour" : "Fournisseur cr\xE9\xE9";
        setTimeout(() => this.successMsg = "", 4e3);
        this.loadSuppliers();
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || "Erreur lors de la sauvegarde";
      }
    });
  }
  emptyForm() {
    return { name: "", email: "", phone: "", address: "", type: "supplier" };
  }
  // === Import Excel ===
  downloadTemplate() {
    downloadExcelTemplate(SUP_HEADERS, SUP_SAMPLE, "modele_fournisseurs.xlsx");
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
          this.successMsg = 'Aucune ligne valide (colonne "Nom*" requise)';
          setTimeout(() => this.successMsg = "", 5e3);
          this.importLoading = false;
          return;
        }
        this.showImportModal = true;
      } catch (e) {
        this.successMsg = "Erreur : " + e.message;
        setTimeout(() => this.successMsg = "", 5e3);
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
      const cid = this.authService.getCompanyId() ?? 1;
      let done = 0, errors = 0;
      for (const row of this.importRows) {
        const dto = {
          name: String(row["Nom*"] || row["Nom"] || "").trim(),
          ref: String(row["R\xE9f\xE9rence"] || "").trim() || void 0,
          phone: String(row["T\xE9l\xE9phone"] || "").trim() || void 0,
          email: String(row["Email"] || "").trim() || void 0,
          address: String(row["Adresse"] || "").trim() || void 0,
          type: "supplier",
          companyId: cid
        };
        try {
          yield this.accountingService.createPartner(dto).toPromise();
          done++;
        } catch (e) {
          errors++;
        }
      }
      this.closeImportModal();
      this.loadSuppliers();
      this.successMsg = `Import termin\xE9 : ${done} cr\xE9\xE9(s), ${errors} erreur(s)`;
      setTimeout(() => this.successMsg = "", 5e3);
    });
  }
  static {
    this.\u0275fac = function SupplierListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SupplierListComponent)(\u0275\u0275directiveInject(AccountingService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupplierListComponent, selectors: [["app-supplier-list"]], viewQuery: function SupplierListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.importInput = _t.first);
      }
    }, decls: 32, vars: 8, consts: [["importInput", ""], [1, "sup-page"], ["type", "file", "accept", ".xlsx,.xls", 2, "display", "none", 3, "change"], [1, "page-header"], [1, "subtitle"], [2, "display", "flex", "gap", "8px", "align-items", "center"], [1, "btn-secondary", 3, "click"], [1, "material-icons"], [1, "btn-import", 3, "click", "disabled"], [1, "btn-primary", 3, "click"], [1, "alert", "alert-success"], [1, "search-bar"], ["type", "text", "placeholder", "Rechercher...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "loading-state"], [1, "empty-state"], [1, "table-card"], [1, "modal-overlay"], [1, "spinner"], [1, "data-table"], [1, "actions-cell"], ["title", "Modifier", 1, "btn-icon", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 2, "max-width", "700px", 3, "click"], [1, "modal-header"], [1, "btn-close-modal", 3, "click"], [2, "overflow-x", "auto", "max-height", "50vh", "padding", "0 20px"], [2, "width", "100%", "border-collapse", "collapse", "font-size", "13px"], [2, "background", "#f4f6f8"], [2, "padding", "8px", "text-align", "left", "border-bottom", "2px solid #e2e8ef"], [2, "border-bottom", "1px solid #f0f0f0"], [1, "modal-footer", 2, "padding", "16px 20px", "display", "flex", "justify-content", "flex-end", "gap", "10px", "border-top", "1px solid #f0f0f0"], [2, "padding", "7px 8px", "color", "#adb5bd"], [2, "padding", "7px 8px", "font-weight", "600"], [2, "padding", "7px 8px"], [1, "modal-box", 3, "click"], [1, "alert", "alert-error"], [1, "modal-body"], [1, "form-group"], [1, "required"], ["type", "text", "placeholder", "Nom du fournisseur", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "email@exemple.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "+237 6XX XXX XXX", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Rue, ville...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-primary", 3, "click", "disabled"], [3, "click"]], template: function SupplierListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "input", 2, 0);
        \u0275\u0275listener("change", function SupplierListComponent_Template_input_change_1_listener($event) {
          return ctx.onImportFileChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "div")(5, "h1");
        \u0275\u0275text(6, "Fournisseurs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
        \u0275\u0275listener("click", function SupplierListComponent_Template_button_click_10_listener() {
          return ctx.downloadTemplate();
        });
        \u0275\u0275elementStart(11, "span", 7);
        \u0275\u0275text(12, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " Mod\xE8le Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 8);
        \u0275\u0275listener("click", function SupplierListComponent_Template_button_click_14_listener() {
          return ctx.triggerImport();
        });
        \u0275\u0275elementStart(15, "span", 7);
        \u0275\u0275text(16, "upload_file");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 9);
        \u0275\u0275listener("click", function SupplierListComponent_Template_button_click_18_listener() {
          return ctx.openNew();
        });
        \u0275\u0275elementStart(19, "span", 7);
        \u0275\u0275text(20, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " Nouveau fournisseur ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(22, SupplierListComponent_Conditional_22_Template, 4, 1, "div", 10);
        \u0275\u0275elementStart(23, "div", 11)(24, "span", 7);
        \u0275\u0275text(25, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function SupplierListComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function SupplierListComponent_Template_input_ngModelChange_26_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(27, SupplierListComponent_Conditional_27_Template, 3, 0, "div", 13)(28, SupplierListComponent_Conditional_28_Template, 7, 0, "div", 14)(29, SupplierListComponent_Conditional_29_Template, 16, 0, "div", 15);
        \u0275\u0275conditionalCreate(30, SupplierListComponent_Conditional_30_Template, 32, 2, "div", 16);
        \u0275\u0275conditionalCreate(31, SupplierListComponent_Conditional_31_Template, 33, 8, "div", 16);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.filtered.length, " fournisseur(s)");
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", ctx.importLoading);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.importLoading ? "Lecture..." : "Importer Excel", " ");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.successMsg ? 22 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 27 : ctx.filtered.length === 0 ? 28 : 29);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showImportModal ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showModal ? 31 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n.sup-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #212529;\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 14px;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border-radius: 8px;\n  padding: 8px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-import[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled, \n.btn-import[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #00A09D;\n  color: white;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #007674;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #495057;\n  border: 1px solid #dee2e6;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.btn-import[_ngcontent-%COMP%] {\n  background: #e8f5f5;\n  color: #00A09D;\n  border: 1px solid #b2dfdf;\n}\n.btn-import[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #d0eded;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #d1e7dd;\n  color: #155724;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #842029;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 8px 14px;\n  margin-bottom: 16px;\n}\n.search-bar[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 20px;\n}\n.search-bar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  flex: 1;\n  font-size: 14px;\n  color: #212529;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n  color: #6c757d;\n}\n.spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 2px solid #dee2e6;\n  border-top-color: #00A09D;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px;\n  background: white;\n  border-radius: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 56px;\n  color: #dee2e6;\n  display: block;\n  margin-bottom: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 16px;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  background: #f8f9fa;\n  font-weight: 600;\n  font-size: 12px;\n  color: #6c757d;\n  text-transform: uppercase;\n  border-bottom: 2px solid #e9ecef;\n  text-align: left;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid #f0f0f0;\n  color: #212529;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: 1px solid #dee2e6;\n  background: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6c757d;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  border-color: #00A09D;\n}\n.btn-icon[_ngcontent-%COMP%]:hover   .material-icons[_ngcontent-%COMP%] {\n  color: #00A09D;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 480px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e9ecef;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n}\n.btn-close-modal[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.btn-close-modal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #6c757d;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 16px 24px;\n  border-top: 1px solid #e9ecef;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #495057;\n  text-transform: uppercase;\n}\n.form-group[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 14px;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #00A09D;\n  box-shadow: 0 0 0 3px rgba(0, 160, 157, 0.15);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=supplier-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupplierListComponent, [{
    type: Component,
    args: [{ selector: "app-supplier-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="sup-page">
  <!-- Input file cach\xE9 -->
  <input #importInput type="file" accept=".xlsx,.xls" style="display:none" (change)="onImportFileChange($event)" />

  <div class="page-header">
    <div>
      <h1>Fournisseurs</h1>
      <p class="subtitle">{{ filtered.length }} fournisseur(s)</p>
    </div>
    <div style="display:flex;gap:8px;align-items:center">
      <button class="btn-secondary" (click)="downloadTemplate()">
        <span class="material-icons">download</span> Mod\xE8le Excel
      </button>
      <button class="btn-import" (click)="triggerImport()" [disabled]="importLoading">
        <span class="material-icons">upload_file</span> {{ importLoading ? 'Lecture...' : 'Importer Excel' }}
      </button>
      <button class="btn-primary" (click)="openNew()">
        <span class="material-icons">add</span> Nouveau fournisseur
      </button>
    </div>
  </div>

  @if (successMsg) {
    <div class="alert alert-success"><span class="material-icons">check_circle</span>{{ successMsg }}</div>
  }

  <div class="search-bar">
    <span class="material-icons">search</span>
    <input type="text" [(ngModel)]="search" (ngModelChange)="applyFilter()" placeholder="Rechercher..." class="search-input" />
  </div>

  @if (loading) {
    <div class="loading-state"><span class="spinner"></span> Chargement...</div>
  } @else if (filtered.length === 0) {
    <div class="empty-state">
      <span class="material-icons">store</span>
      <p>Aucun fournisseur.</p>
      <button class="btn-primary" (click)="openNew()">Ajouter un fournisseur</button>
    </div>
  } @else {
    <div class="table-card">
      <table class="data-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>T\xE9l\xE9phone</th>
            <th>Adresse</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @for (s of filtered; track s.id) {
            <tr>
              <td><strong>{{ s.name }}</strong></td>
              <td>{{ s.email || '\u2014' }}</td>
              <td>{{ s.phone || '\u2014' }}</td>
              <td>{{ s.address || '\u2014' }}</td>
              <td class="actions-cell">
                <button class="btn-icon" (click)="openEdit(s)" title="Modifier">
                  <span class="material-icons">edit</span>
                </button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }

  <!-- Modal Import Excel Fournisseurs -->
  @if (showImportModal) {
    <div class="modal-overlay" (click)="closeImportModal()">
      <div class="modal-box" (click)="$event.stopPropagation()" style="max-width:700px">
        <div class="modal-header">
          <h2>Aper\xE7u import fournisseurs ({{ importRows.length }} ligne(s))</h2>
          <button class="btn-close-modal" (click)="closeImportModal()"><span class="material-icons">close</span></button>
        </div>
        <div style="overflow-x:auto;max-height:50vh;padding:0 20px">
          <table style="width:100%;border-collapse:collapse;font-size:13px">
            <thead><tr style="background:#f4f6f8">
              <th style="padding:8px;text-align:left;border-bottom:2px solid #e2e8ef">#</th>
              <th style="padding:8px;text-align:left;border-bottom:2px solid #e2e8ef">Nom</th>
              <th style="padding:8px;text-align:left;border-bottom:2px solid #e2e8ef">R\xE9f\xE9rence</th>
              <th style="padding:8px;text-align:left;border-bottom:2px solid #e2e8ef">T\xE9l\xE9phone</th>
              <th style="padding:8px;text-align:left;border-bottom:2px solid #e2e8ef">Email</th>
            </tr></thead>
            <tbody>
              @for (row of importRows; track $index; let i = $index) {
                <tr style="border-bottom:1px solid #f0f0f0">
                  <td style="padding:7px 8px;color:#adb5bd">{{ i+1 }}</td>
                  <td style="padding:7px 8px;font-weight:600">{{ row['Nom*'] || row['Nom'] }}</td>
                  <td style="padding:7px 8px">{{ row['R\xE9f\xE9rence'] || '\u2014' }}</td>
                  <td style="padding:7px 8px">{{ row['T\xE9l\xE9phone'] || '\u2014' }}</td>
                  <td style="padding:7px 8px">{{ row['Email'] || '\u2014' }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        <div class="modal-footer" style="padding:16px 20px;display:flex;justify-content:flex-end;gap:10px;border-top:1px solid #f0f0f0">
          <button class="btn-secondary" (click)="closeImportModal()">Annuler</button>
          <button class="btn-primary" (click)="confirmImport()">
            <span class="material-icons">check_circle</span> Confirmer ({{ importRows.length }} fournisseurs)
          </button>
        </div>
      </div>
    </div>
  }

  <!-- Modal cr\xE9ation/\xE9dition -->
  @if (showModal) {
    <div class="modal-overlay" (click)="showModal = false">
      <div class="modal-box" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>{{ editingId ? 'Modifier le fournisseur' : 'Nouveau fournisseur' }}</h2>
          <button class="btn-close-modal" (click)="showModal = false">
            <span class="material-icons">close</span>
          </button>
        </div>
        @if (errorMsg) {
          <div class="alert alert-error"><span class="material-icons">error</span>{{ errorMsg }}<button (click)="errorMsg = ''">\xD7</button></div>
        }
        <div class="modal-body">
          <div class="form-group">
            <label>Nom <span class="required">*</span></label>
            <input type="text" [(ngModel)]="form.name" class="form-control" placeholder="Nom du fournisseur" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" [(ngModel)]="form.email" class="form-control" placeholder="email@exemple.com" />
          </div>
          <div class="form-group">
            <label>T\xE9l\xE9phone</label>
            <input type="text" [(ngModel)]="form.phone" class="form-control" placeholder="+237 6XX XXX XXX" />
          </div>
          <div class="form-group">
            <label>Adresse</label>
            <input type="text" [(ngModel)]="form.address" class="form-control" placeholder="Rue, ville..." />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-secondary" (click)="showModal = false">Annuler</button>
          <button class="btn-primary" (click)="saveSupplier()" [disabled]="saving">
            {{ saving ? 'Sauvegarde...' : 'Sauvegarder' }}
          </button>
        </div>
      </div>
    </div>
  }
</div>
`, styles: ['/* src/app/modules/purchases/components/suppliers/supplier-list.component.scss */\n.sup-page {\n  padding: 24px;\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: #212529;\n  margin: 0 0 4px;\n}\n.page-header .subtitle {\n  color: #6c757d;\n  font-size: 14px;\n  margin: 0;\n}\n.btn-primary,\n.btn-secondary,\n.btn-import {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border-radius: 8px;\n  padding: 8px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons,\n.btn-import .material-icons {\n  font-size: 16px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled,\n.btn-import:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.btn-primary {\n  background: #00A09D;\n  color: white;\n  border: none;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #007674;\n}\n.btn-secondary {\n  background: white;\n  color: #495057;\n  border: 1px solid #dee2e6;\n}\n.btn-secondary:hover {\n  background: #f8f9fa;\n}\n.btn-import {\n  background: #e8f5f5;\n  color: #00A09D;\n  border: 1px solid #b2dfdf;\n}\n.btn-import:hover:not(:disabled) {\n  background: #d0eded;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  margin-bottom: 12px;\n  font-size: 14px;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert button {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n}\n.alert-success {\n  background: #d1e7dd;\n  color: #155724;\n}\n.alert-error {\n  background: #f8d7da;\n  color: #842029;\n}\n.search-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 8px 14px;\n  margin-bottom: 16px;\n}\n.search-bar .material-icons {\n  color: #6c757d;\n  font-size: 20px;\n}\n.search-bar .search-input {\n  border: none;\n  outline: none;\n  flex: 1;\n  font-size: 14px;\n  color: #212529;\n}\n.loading-state {\n  text-align: center;\n  padding: 48px;\n  color: #6c757d;\n}\n.spinner {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border: 2px solid #dee2e6;\n  border-top-color: #00A09D;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n.empty-state {\n  text-align: center;\n  padding: 60px;\n  background: white;\n  border-radius: 12px;\n}\n.empty-state .material-icons {\n  font-size: 56px;\n  color: #dee2e6;\n  display: block;\n  margin-bottom: 12px;\n}\n.empty-state p {\n  color: #6c757d;\n  margin-bottom: 16px;\n}\n.table-card {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.data-table th {\n  padding: 12px 14px;\n  background: #f8f9fa;\n  font-weight: 600;\n  font-size: 12px;\n  color: #6c757d;\n  text-transform: uppercase;\n  border-bottom: 2px solid #e9ecef;\n  text-align: left;\n}\n.data-table td {\n  padding: 12px 14px;\n  border-bottom: 1px solid #f0f0f0;\n  color: #212529;\n}\n.actions-cell {\n  display: flex;\n  gap: 6px;\n}\n.btn-icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  border: 1px solid #dee2e6;\n  background: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-icon .material-icons {\n  font-size: 16px;\n  color: #6c757d;\n}\n.btn-icon:hover {\n  border-color: #00A09D;\n}\n.btn-icon:hover .material-icons {\n  color: #00A09D;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.modal-box {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 480px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e9ecef;\n}\n.modal-header h2 {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n}\n.btn-close-modal {\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.btn-close-modal .material-icons {\n  font-size: 20px;\n  color: #6c757d;\n}\n.modal-body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 16px 24px;\n  border-top: 1px solid #e9ecef;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #495057;\n  text-transform: uppercase;\n}\n.form-group .required {\n  color: #dc3545;\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 14px;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #00A09D;\n  box-shadow: 0 0 0 3px rgba(0, 160, 157, 0.15);\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=supplier-list.component.css.map */\n'] }]
  }], () => [{ type: AccountingService }, { type: AuthService }], { importInput: [{
    type: ViewChild,
    args: ["importInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupplierListComponent, { className: "SupplierListComponent", filePath: "src/app/modules/purchases/components/suppliers/supplier-list.component.ts", lineNumber: 18 });
})();
export {
  SupplierListComponent
};
//# sourceMappingURL=chunk-ESKGBWXL.js.map
