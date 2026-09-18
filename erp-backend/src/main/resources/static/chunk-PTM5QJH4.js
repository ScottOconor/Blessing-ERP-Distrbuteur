import {
  AppBrandingService
} from "./chunk-TJ6Z44ZG.js";
import {
  CompanyService
} from "./chunk-K42XCUBR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import "./chunk-KBUIKKCC.js";

// src/app/modules/config/components/company/company.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function CompanyComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function CompanyComponent_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 6);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 45);
    \u0275\u0275listener("click", function CompanyComponent_Conditional_10_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.errorMsg = "");
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.errorMsg, " ");
  }
}
function CompanyComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 6);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.successMsg, " ");
  }
}
function CompanyComponent_Conditional_10_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 17);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.logoPreviewUrl, \u0275\u0275sanitizeUrl);
  }
}
function CompanyComponent_Conditional_10_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 46, 2);
    \u0275\u0275listener("error", function CompanyComponent_Conditional_10_Conditional_12_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.logoPreviewUrl = null);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.currentLogoUrl, \u0275\u0275sanitizeUrl);
  }
}
function CompanyComponent_Conditional_10_For_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", m_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r5.label);
  }
}
function CompanyComponent_Conditional_10_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 41);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.appLogoPreviewUrl, \u0275\u0275sanitizeUrl);
  }
}
function CompanyComponent_Conditional_10_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 47);
    \u0275\u0275listener("error", function CompanyComponent_Conditional_10_Conditional_85_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.appLogoPreviewUrl = null);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.currentAppLogoUrl, \u0275\u0275sanitizeUrl);
  }
}
function CompanyComponent_Conditional_10_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 6);
    \u0275\u0275text(2, "insert_photo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Aucune ic\xF4ne d\xE9finie");
    \u0275\u0275elementEnd()();
  }
}
function CompanyComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, CompanyComponent_Conditional_10_Conditional_0_Template, 6, 1, "div", 10);
    \u0275\u0275conditionalCreate(1, CompanyComponent_Conditional_10_Conditional_1_Template, 4, 1, "div", 11);
    \u0275\u0275elementStart(2, "div", 12)(3, "div", 13)(4, "div", 14)(5, "span", 6);
    \u0275\u0275text(6, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Logo entreprise ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 15);
    \u0275\u0275text(9, "Affich\xE9 sur les factures et documents imprim\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 16);
    \u0275\u0275conditionalCreate(11, CompanyComponent_Conditional_10_Conditional_11_Template, 1, 1, "img", 17)(12, CompanyComponent_Conditional_10_Conditional_12_Template, 2, 1, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 19)(14, "input", 20);
    \u0275\u0275listener("change", function CompanyComponent_Conditional_10_Template_input_change_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLogoSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 6);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 21);
    \u0275\u0275text(19, "PNG, JPG ou SVG \u2014 max 2 Mo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 22)(21, "div", 14)(22, "span", 6);
    \u0275\u0275text(23, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Informations l\xE9gales ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "form", 23, 0);
    \u0275\u0275listener("ngSubmit", function CompanyComponent_Conditional_10_Template_form_ngSubmit_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275elementStart(27, "div", 24)(28, "div", 25)(29, "label");
    \u0275\u0275text(30, "Raison sociale ");
    \u0275\u0275elementStart(31, "span", 26);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function CompanyComponent_Conditional_10_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.company.name, $event) || (ctx_r2.company.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 28)(35, "label");
    \u0275\u0275text(36, "Sigle / Abr\xE9viation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function CompanyComponent_Conditional_10_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.company.sigle, $event) || (ctx_r2.company.sigle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 28)(39, "label");
    \u0275\u0275text(40, "N\xB0 RCCM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function CompanyComponent_Conditional_10_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.company.rccm, $event) || (ctx_r2.company.rccm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 28)(43, "label");
    \u0275\u0275text(44, "NIF / NIU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function CompanyComponent_Conditional_10_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.company.nif, $event) || (ctx_r2.company.nif = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 28)(47, "label");
    \u0275\u0275text(48, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function CompanyComponent_Conditional_10_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.company.telephone, $event) || (ctx_r2.company.telephone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 28)(51, "label");
    \u0275\u0275text(52, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function CompanyComponent_Conditional_10_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.company.email, $event) || (ctx_r2.company.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 25)(55, "label");
    \u0275\u0275text(56, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function CompanyComponent_Conditional_10_Template_input_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.company.adresse, $event) || (ctx_r2.company.adresse = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 28)(59, "label");
    \u0275\u0275text(60, "D\xE9but d'exercice fiscal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function CompanyComponent_Conditional_10_Template_select_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.company.fiscalYearStartMonth, $event) || (ctx_r2.company.fiscalYearStartMonth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(62, CompanyComponent_Conditional_10_For_63_Template, 2, 2, "option", 36, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "small", 37);
    \u0275\u0275text(65, "Utilis\xE9 pour calculer le r\xE9sultat net de l'exercice dans le bilan OHADA.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 38)(67, "button", 39)(68, "span", 6);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(71, "div", 40)(72, "span", 6);
    \u0275\u0275text(73, "palette");
    \u0275\u0275elementEnd();
    \u0275\u0275text(74, " Apparence de l'application ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 12)(76, "div", 13)(77, "div", 14)(78, "span", 6);
    \u0275\u0275text(79, "tab");
    \u0275\u0275elementEnd();
    \u0275\u0275text(80, " Ic\xF4ne de l'application ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "p", 15);
    \u0275\u0275text(82, "Affich\xE9 dans l'onglet du navigateur (favicon) et dans la barre lat\xE9rale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 16);
    \u0275\u0275conditionalCreate(84, CompanyComponent_Conditional_10_Conditional_84_Template, 1, 1, "img", 41)(85, CompanyComponent_Conditional_10_Conditional_85_Template, 1, 1, "img", 42)(86, CompanyComponent_Conditional_10_Conditional_86_Template, 5, 0, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "label", 19)(88, "input", 20);
    \u0275\u0275listener("change", function CompanyComponent_Conditional_10_Template_input_change_88_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAppLogoSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "span", 6);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd();
    \u0275\u0275text(91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "p", 21);
    \u0275\u0275text(93, "PNG recommand\xE9 512\xD7512 \u2014 max 2 Mo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 22)(95, "div", 14)(96, "span", 6);
    \u0275\u0275text(97, "title");
    \u0275\u0275elementEnd();
    \u0275\u0275text(98, " Nom de l'application ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "p", 15);
    \u0275\u0275text(100, "Appara\xEEt dans l'onglet du navigateur et dans la barre lat\xE9rale de l'app");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "form", 23, 1);
    \u0275\u0275listener("ngSubmit", function CompanyComponent_Conditional_10_Template_form_ngSubmit_101_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveAppName());
    });
    \u0275\u0275elementStart(103, "div", 24)(104, "div", 25)(105, "label");
    \u0275\u0275text(106, "Nom affich\xE9 ");
    \u0275\u0275elementStart(107, "span", 26);
    \u0275\u0275text(108, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function CompanyComponent_Conditional_10_Template_input_ngModelChange_109_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.company.appName, $event) || (ctx_r2.company.appName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "span", 37);
    \u0275\u0275text(111, "Ce nom remplace le titre par d\xE9faut dans le navigateur.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(112, "div", 38)(113, "button", 39)(114, "span", 6);
    \u0275\u0275text(115);
    \u0275\u0275elementEnd();
    \u0275\u0275text(116);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const f_r7 = \u0275\u0275reference(26);
    const af_r8 = \u0275\u0275reference(102);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.errorMsg ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.successMsg ? 1 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r2.logoPreviewUrl ? 11 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("loading", ctx_r2.uploadingLogo);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.uploadingLogo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.uploadingLogo ? "hourglass_empty" : "upload");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.uploadingLogo ? "Import en cours\u2026" : "Importer un logo", " ");
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.company.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.company.sigle);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.company.rccm);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.company.nif);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.company.telephone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.company.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.company.adresse);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.company.fiscalYearStartMonth);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.fiscalMonths);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r2.saving || f_r7.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.saving ? "hourglass_empty" : "save");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving ? "Enregistrement\u2026" : "Enregistrer", " ");
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r2.appLogoPreviewUrl ? 84 : ctx_r2.company.hasAppLogo ? 85 : 86);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("loading", ctx_r2.uploadingAppLogo);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.uploadingAppLogo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.uploadingAppLogo ? "hourglass_empty" : "upload");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.uploadingAppLogo ? "Import en cours\u2026" : "Importer une ic\xF4ne", " ");
    \u0275\u0275advance(18);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.company.appName);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.savingAppName || af_r8.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.savingAppName ? "hourglass_empty" : "save");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.savingAppName ? "Enregistrement\u2026" : "Appliquer", " ");
  }
}
var CompanyComponent = class _CompanyComponent {
  constructor(companyService, brandingService) {
    this.companyService = companyService;
    this.brandingService = brandingService;
    this.company = { name: "", active: true };
    this.companyId = 1;
    this.loading = false;
    this.saving = false;
    this.savingAppName = false;
    this.uploadingLogo = false;
    this.uploadingAppLogo = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.logoPreviewUrl = null;
    this.logoTimestamp = Date.now();
    this.appLogoPreviewUrl = null;
    this.appLogoTimestamp = Date.now();
    this.fiscalMonths = [
      { value: 1, label: "Janvier" },
      { value: 2, label: "F\xE9vrier" },
      { value: 3, label: "Mars" },
      { value: 4, label: "Avril" },
      { value: 5, label: "Mai" },
      { value: 6, label: "Juin" },
      { value: 7, label: "Juillet" },
      { value: 8, label: "Ao\xFBt" },
      { value: 9, label: "Septembre" },
      { value: 10, label: "Octobre" },
      { value: 11, label: "Novembre" },
      { value: 12, label: "D\xE9cembre" }
    ];
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.companyService.load(this.companyId).subscribe({
      next: (c) => {
        this.company = c;
        if (!this.company.fiscalYearStartMonth)
          this.company.fiscalYearStartMonth = 1;
        this.brandingService.applyCompany(c);
        this.loading = false;
        this.logoTimestamp = Date.now();
        this.appLogoTimestamp = Date.now();
      },
      error: () => {
        this.loading = false;
        this.errorMsg = "Impossible de charger les informations de l'entreprise.";
      }
    });
  }
  save() {
    if (!this.company.name?.trim()) {
      this.errorMsg = "Le nom de l'entreprise est obligatoire.";
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    this.successMsg = "";
    this.companyService.save(this.companyId, this.company).subscribe({
      next: (updated) => {
        this.company = updated;
        this.saving = false;
        this.successMsg = "Informations enregistr\xE9es avec succ\xE8s.";
        setTimeout(() => this.successMsg = "", 4e3);
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err.error?.message || "Erreur lors de l'enregistrement.";
      }
    });
  }
  saveAppName() {
    if (!this.company.appName?.trim()) {
      this.errorMsg = "Le nom de l'application est obligatoire.";
      return;
    }
    this.savingAppName = true;
    this.errorMsg = "";
    this.successMsg = "";
    this.companyService.save(this.companyId, this.company).subscribe({
      next: (updated) => {
        this.company = updated;
        this.savingAppName = false;
        this.successMsg = "Nom de l'application enregistr\xE9.";
        this.brandingService.updateAppName(updated.appName);
        setTimeout(() => this.successMsg = "", 4e3);
      },
      error: (err) => {
        this.savingAppName = false;
        this.errorMsg = err.error?.message || "Erreur lors de l'enregistrement.";
      }
    });
  }
  onLogoSelected(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    if (!file.type.startsWith("image/")) {
      this.errorMsg = "Veuillez s\xE9lectionner une image (PNG, JPG, SVG\u2026)";
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      this.errorMsg = "Le logo ne doit pas d\xE9passer 2 Mo.";
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      this.logoPreviewUrl = e.target?.result;
    };
    reader.readAsDataURL(file);
    this.uploadingLogo = true;
    this.errorMsg = "";
    this.companyService.uploadLogo(this.companyId, file).subscribe({
      next: () => {
        this.uploadingLogo = false;
        this.logoTimestamp = Date.now();
        this.companyService.clearCache();
        this.successMsg = "Logo import\xE9 avec succ\xE8s.";
        setTimeout(() => this.successMsg = "", 4e3);
      },
      error: (err) => {
        this.uploadingLogo = false;
        this.logoPreviewUrl = null;
        this.errorMsg = err.error?.message || "Erreur lors de l'import du logo.";
      }
    });
  }
  onAppLogoSelected(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    if (!file.type.startsWith("image/")) {
      this.errorMsg = "Veuillez s\xE9lectionner une image (PNG, JPG, SVG\u2026)";
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      this.errorMsg = "L'ic\xF4ne ne doit pas d\xE9passer 2 Mo.";
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      this.appLogoPreviewUrl = e.target?.result;
    };
    reader.readAsDataURL(file);
    this.uploadingAppLogo = true;
    this.errorMsg = "";
    this.companyService.uploadAppLogo(this.companyId, file).subscribe({
      next: () => {
        this.uploadingAppLogo = false;
        this.appLogoTimestamp = Date.now();
        this.company.hasAppLogo = true;
        this.successMsg = "Ic\xF4ne import\xE9e avec succ\xE8s.";
        this.brandingService.refreshAppLogo();
        setTimeout(() => this.successMsg = "", 4e3);
      },
      error: (err) => {
        this.uploadingAppLogo = false;
        this.appLogoPreviewUrl = null;
        this.errorMsg = err.error?.message || "Erreur lors de l'import de l'ic\xF4ne.";
      }
    });
  }
  get currentLogoUrl() {
    return `${this.companyService.getLogoUrl(this.companyId)}?t=${this.logoTimestamp}`;
  }
  get currentAppLogoUrl() {
    return `${this.companyService.getAppLogoUrl(this.companyId)}?t=${this.appLogoTimestamp}`;
  }
  static {
    this.\u0275fac = function CompanyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompanyComponent)(\u0275\u0275directiveInject(CompanyService), \u0275\u0275directiveInject(AppBrandingService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyComponent, selectors: [["app-config-company"]], decls: 11, vars: 1, consts: [["f", "ngForm"], ["af", "ngForm"], ["logoImg", ""], [1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "page-sub"], [1, "loading"], [1, "material-icons", "spin"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [1, "co-grid"], [1, "card", "logo-card"], [1, "card-title"], [1, "card-desc"], [1, "logo-area"], ["alt", "Aper\xE7u logo", 1, "logo-preview", 3, "src"], ["alt", "Logo entreprise", 1, "logo-preview", 3, "src"], [1, "btn-upload"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change", "disabled"], [1, "logo-hint"], [1, "card", "info-card"], [3, "ngSubmit"], [1, "form-grid"], [1, "form-group", "form-full"], [1, "req"], ["name", "name", "required", "", "placeholder", "Ex : BLESSING DISTRIBUTION SARL", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group"], ["name", "sigle", "placeholder", "Ex : KD", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "rccm", "placeholder", "Ex : RC/DLA/2024/B/1234", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "nif", "placeholder", "Ex : M123456789", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "telephone", "placeholder", "Ex : +237 6XX XXX XXX", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "contact@monentreprise.cm", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "adresse", "placeholder", "Ex : Rue X, Quartier Y, Douala", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "fiscalYearStartMonth", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "field-hint"], [1, "form-actions"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "section-sep"], ["alt", "Aper\xE7u ic\xF4ne app", 1, "logo-preview", "app-logo-preview", 3, "src"], ["alt", "Ic\xF4ne application", 1, "logo-preview", "app-logo-preview", 3, "src"], [1, "logo-placeholder"], ["name", "appName", "required", "", "placeholder", "Ex : Blessing ERP Distributeurs", 1, "form-control", "form-control-lg", 3, "ngModelChange", "ngModel"], [3, "click"], ["alt", "Logo entreprise", 1, "logo-preview", 3, "error", "src"], ["alt", "Ic\xF4ne application", 1, "logo-preview", "app-logo-preview", 3, "error", "src"]], template: function CompanyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div")(3, "h1", 5)(4, "span", 6);
        \u0275\u0275text(5, "business");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Mon entreprise ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 7);
        \u0275\u0275text(8, "Informations l\xE9gales et logo affich\xE9s sur tous les documents");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(9, CompanyComponent_Conditional_9_Template, 4, 0, "div", 8)(10, CompanyComponent_Conditional_10_Template, 117, 29);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.loading ? 9 : 10);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ['\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--primary);\n}\n.page-header[_ngcontent-%COMP%]   .page-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 16px;\n  font-size: 13.5px;\n  border: 1px solid transparent;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  opacity: 0.6;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: rgba(220, 38, 38, 0.2);\n}\n.alert.alert-warning[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.alert.alert-info[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: rgba(3, 105, 161, 0.2);\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.3;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 13.5px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-primary.btn-sm[_ngcontent-%COMP%], \n.btn-secondary.btn-sm[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.btn-primary.btn-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary.btn-sm[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.btn-danger-icon[_ngcontent-%COMP%] {\n  color: var(--danger);\n  border-color: var(--danger);\n}\n.btn-icon.btn-danger-icon[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  box-sizing: border-box;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 13px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 13px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n  color: var(--text-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.1s;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   .empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 32px;\n}\n.data-table[_ngcontent-%COMP%]   .inactive-row[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.text-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n}\n.select-group[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 180px;\n}\n.badge-active[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-active.inactive[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.badge-code[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-size: 11px;\n  font-family: monospace;\n  border: 1px solid var(--border);\n}\n.badge-system[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-custom[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-warn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  background: var(--warning-bg);\n  color: var(--warning);\n  margin-left: 4px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: transparent;\n}\n.role-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.role-badge.role-SUPER_ADMIN[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: transparent;\n}\n.role-badge.role-ADMIN[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: transparent;\n}\n.role-badge.role-SUPER_AUDITEUR[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: transparent;\n}\n.role-badge.role-AUDITEUR[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: transparent;\n}\n.role-badge.role-CONTROLEUR[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: transparent;\n}\n.groups-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.group-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.group-card.expanded[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n}\n.group-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  cursor: pointer;\n  transition: var(--ease);\n}\n.group-header[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.group-header[_ngcontent-%COMP%]   .group-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.group-header[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.group-header[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: var(--primary);\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.group-header[_ngcontent-%COMP%]   .group-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n}\n.group-header[_ngcontent-%COMP%]   .group-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.group-header[_ngcontent-%COMP%]   .group-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 2px;\n}\n.group-header[_ngcontent-%COMP%]   .company-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.group-header[_ngcontent-%COMP%]   .group-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.companies-body[_ngcontent-%COMP%] {\n  padding: 0 18px 18px;\n  border-top: 1px solid var(--border-light);\n}\n.companies-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 12px;\n}\n.companies-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.companies-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.companies-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n}\n.companies-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.company-name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.company-name-cell[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.no-company[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  padding: 16px 0;\n  font-size: 13px;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: var(--primary);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.user-login[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.roles-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.role-card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  padding: 16px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.role-card.system-role[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--info);\n}\n.role-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.role-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.role-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.role-info[_ngcontent-%COMP%]   .role-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.role-info[_ngcontent-%COMP%]   .role-code[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-family: monospace;\n}\n.role-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-items: flex-end;\n}\n.system-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.perm-summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.perm-chip[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border-radius: 10px;\n  font-size: 11px;\n  border: 1px solid var(--border);\n}\n.role-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 6px;\n  margin-top: 4px;\n}\n.perm-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.perm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.perm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.perm-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 13px;\n  border: 1px solid var(--border);\n  font-size: 13px;\n}\n.perm-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.perm-table[_ngcontent-%COMP%]   .mod-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  color: var(--primary);\n}\n.perm-table[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.perm-table[_ngcontent-%COMP%]   .col-resource[_ngcontent-%COMP%] {\n  min-width: 180px;\n  text-align: left;\n}\n.perm-table[_ngcontent-%COMP%]   .col-action[_ngcontent-%COMP%] {\n  min-width: 72px;\n  text-align: center;\n}\n.perm-table[_ngcontent-%COMP%]   .col-all[_ngcontent-%COMP%] {\n  min-width: 56px;\n  text-align: center;\n}\n.perm-table[_ngcontent-%COMP%]   .module-header-row[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\n.perm-table[_ngcontent-%COMP%]   .module-header-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--border);\n}\n.perm-table[_ngcontent-%COMP%]   .module-header-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--primary);\n  padding: 10px 13px;\n}\n.perm-table[_ngcontent-%COMP%]   .module-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--primary);\n  flex-shrink: 0;\n}\n.perm-table[_ngcontent-%COMP%]   .module-action-cell[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n}\n.perm-table[_ngcontent-%COMP%]   .partial-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1px 6px;\n  border-radius: 8px;\n  background: var(--warning-bg);\n  color: var(--warning);\n  font-size: 10px;\n  font-weight: 600;\n}\n.perm-table[_ngcontent-%COMP%]   .resource-row[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n}\n.perm-table[_ngcontent-%COMP%]   .resource-row[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.perm-table[_ngcontent-%COMP%]   .res-cell[_ngcontent-%COMP%] {\n  padding-left: 24px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.perm-table[_ngcontent-%COMP%]   .res-indent[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-right: 4px;\n  font-size: 12px;\n}\n.perm-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n}\n.perm-section-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.modal-perm[_ngcontent-%COMP%] {\n  width: 860px;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 13px;\n  background: var(--info-bg);\n  color: var(--info);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n}\n.info-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-light);\n  width: 480px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-xl);\n}\n.modal.modal-lg[_ngcontent-%COMP%] {\n  width: 640px;\n}\n.modal.modal-xl[_ngcontent-%COMP%] {\n  width: 780px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 17px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15.5px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border-light);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  background: var(--bg-elevated);\n}\n.co-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 20px;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .co-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-light);\n  box-shadow: var(--shadow-sm);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.card-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--primary);\n}\n.logo-card[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n}\n.logo-area[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 120px;\n  border: 2px dashed var(--border);\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-elevated);\n  overflow: hidden;\n}\n.logo-preview[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.btn-upload[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: var(--primary);\n  color: white;\n  border-radius: var(--radius-sm);\n  font-size: 13.5px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: var(--ease);\n}\n.btn-upload[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn-upload[_ngcontent-%COMP%]:hover:not(.loading) {\n  background: var(--primary-dark);\n}\n.btn-upload.loading[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-upload[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.logo-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid[_ngcontent-%COMP%]   .form-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 6px;\n}\n.section-sep[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 28px 0 16px;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: var(--text-muted);\n}\n.section-sep[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--accent);\n}\n.section-sep[_ngcontent-%COMP%]::before, \n.section-sep[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--border-light);\n}\n.card-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: -6px 0 0;\n}\n.app-logo-preview[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n.logo-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.logo-placeholder[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: var(--border);\n}\n.form-control-lg[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  padding: 10px 14px;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 4px;\n  display: block;\n}\n/*# sourceMappingURL=company.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyComponent, [{
    type: Component,
    args: [{ selector: "app-config-company", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-container">
  <div class="page-header">
    <div>
      <h1 class="page-title">
        <span class="material-icons">business</span>
        Mon entreprise
      </h1>
      <p class="page-sub">Informations l\xE9gales et logo affich\xE9s sur tous les documents</p>
    </div>
  </div>

  @if (loading) {
    <div class="loading">
      <span class="material-icons spin">sync</span> Chargement\u2026
    </div>
  } @else {
    @if (errorMsg) {
      <div class="alert alert-danger">
        <span class="material-icons">error_outline</span>
        {{ errorMsg }}
        <button (click)="errorMsg=''">\xD7</button>
      </div>
    }
    @if (successMsg) {
      <div class="alert alert-success">
        <span class="material-icons">check_circle</span>
        {{ successMsg }}
      </div>
    }

    <div class="co-grid">

      <!-- \u2500\u2500 Logo entreprise \u2500\u2500 -->
      <div class="card logo-card">
        <div class="card-title">
          <span class="material-icons">image</span> Logo entreprise
        </div>
        <p class="card-desc">Affich\xE9 sur les factures et documents imprim\xE9s</p>

        <div class="logo-area">
          @if (logoPreviewUrl) {
            <img [src]="logoPreviewUrl" class="logo-preview" alt="Aper\xE7u logo">
          } @else {
            <img [src]="currentLogoUrl" class="logo-preview" alt="Logo entreprise"
                 (error)="logoPreviewUrl = null" #logoImg>
          }
        </div>

        <label class="btn-upload" [class.loading]="uploadingLogo">
          <input type="file" accept="image/*" (change)="onLogoSelected($event)" [disabled]="uploadingLogo" hidden>
          <span class="material-icons">{{ uploadingLogo ? 'hourglass_empty' : 'upload' }}</span>
          {{ uploadingLogo ? 'Import en cours\u2026' : 'Importer un logo' }}
        </label>
        <p class="logo-hint">PNG, JPG ou SVG \u2014 max 2 Mo</p>
      </div>

      <!-- \u2500\u2500 Infos l\xE9gales \u2500\u2500 -->
      <div class="card info-card">
        <div class="card-title">
          <span class="material-icons">info</span> Informations l\xE9gales
        </div>

        <form (ngSubmit)="save()" #f="ngForm">
          <div class="form-grid">
            <div class="form-group form-full">
              <label>Raison sociale <span class="req">*</span></label>
              <input class="form-control" [(ngModel)]="company.name" name="name" required placeholder="Ex : BLESSING DISTRIBUTION SARL">
            </div>

            <div class="form-group">
              <label>Sigle / Abr\xE9viation</label>
              <input class="form-control" [(ngModel)]="company.sigle" name="sigle" placeholder="Ex : KD">
            </div>

            <div class="form-group">
              <label>N\xB0 RCCM</label>
              <input class="form-control" [(ngModel)]="company.rccm" name="rccm" placeholder="Ex : RC/DLA/2024/B/1234">
            </div>

            <div class="form-group">
              <label>NIF / NIU</label>
              <input class="form-control" [(ngModel)]="company.nif" name="nif" placeholder="Ex : M123456789">
            </div>

            <div class="form-group">
              <label>T\xE9l\xE9phone</label>
              <input class="form-control" [(ngModel)]="company.telephone" name="telephone" placeholder="Ex : +237 6XX XXX XXX">
            </div>

            <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="email" [(ngModel)]="company.email" name="email" placeholder="contact@monentreprise.cm">
            </div>

            <div class="form-group form-full">
              <label>Adresse</label>
              <input class="form-control" [(ngModel)]="company.adresse" name="adresse" placeholder="Ex : Rue X, Quartier Y, Douala">
            </div>

            <div class="form-group">
              <label>D\xE9but d'exercice fiscal</label>
              <select class="form-control" [(ngModel)]="company.fiscalYearStartMonth" name="fiscalYearStartMonth">
                @for (m of fiscalMonths; track m.value) {
                  <option [ngValue]="m.value">{{ m.label }}</option>
                }
              </select>
              <small class="field-hint">Utilis\xE9 pour calculer le r\xE9sultat net de l'exercice dans le bilan OHADA.</small>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn-primary" [disabled]="saving || f.invalid">
              <span class="material-icons">{{ saving ? 'hourglass_empty' : 'save' }}</span>
              {{ saving ? 'Enregistrement\u2026' : 'Enregistrer' }}
            </button>
          </div>
        </form>
      </div>

    </div>

    <!-- \u2500\u2500 Apparence de l'application (superadmin) \u2500\u2500 -->
    <div class="section-sep">
      <span class="material-icons">palette</span>
      Apparence de l'application
    </div>

    <div class="co-grid">

      <!-- App logo (favicon) -->
      <div class="card logo-card">
        <div class="card-title">
          <span class="material-icons">tab</span> Ic\xF4ne de l'application
        </div>
        <p class="card-desc">Affich\xE9 dans l'onglet du navigateur (favicon) et dans la barre lat\xE9rale</p>

        <div class="logo-area">
          @if (appLogoPreviewUrl) {
            <img [src]="appLogoPreviewUrl" class="logo-preview app-logo-preview" alt="Aper\xE7u ic\xF4ne app">
          } @else if (company.hasAppLogo) {
            <img [src]="currentAppLogoUrl" class="logo-preview app-logo-preview" alt="Ic\xF4ne application"
                 (error)="appLogoPreviewUrl = null">
          } @else {
            <div class="logo-placeholder">
              <span class="material-icons">insert_photo</span>
              <span>Aucune ic\xF4ne d\xE9finie</span>
            </div>
          }
        </div>

        <label class="btn-upload" [class.loading]="uploadingAppLogo">
          <input type="file" accept="image/*" (change)="onAppLogoSelected($event)" [disabled]="uploadingAppLogo" hidden>
          <span class="material-icons">{{ uploadingAppLogo ? 'hourglass_empty' : 'upload' }}</span>
          {{ uploadingAppLogo ? 'Import en cours\u2026' : 'Importer une ic\xF4ne' }}
        </label>
        <p class="logo-hint">PNG recommand\xE9 512\xD7512 \u2014 max 2 Mo</p>
      </div>

      <!-- App name -->
      <div class="card info-card">
        <div class="card-title">
          <span class="material-icons">title</span> Nom de l'application
        </div>
        <p class="card-desc">Appara\xEEt dans l'onglet du navigateur et dans la barre lat\xE9rale de l'app</p>

        <form (ngSubmit)="saveAppName()" #af="ngForm">
          <div class="form-grid">
            <div class="form-group form-full">
              <label>Nom affich\xE9 <span class="req">*</span></label>
              <input class="form-control form-control-lg" [(ngModel)]="company.appName" name="appName"
                     required placeholder="Ex : Blessing ERP Distributeurs">
              <span class="field-hint">Ce nom remplace le titre par d\xE9faut dans le navigateur.</span>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn-primary" [disabled]="savingAppName || af.invalid">
              <span class="material-icons">{{ savingAppName ? 'hourglass_empty' : 'save' }}</span>
              {{ savingAppName ? 'Enregistrement\u2026' : 'Appliquer' }}
            </button>
          </div>
        </form>
      </div>

    </div>
  }
</div>
`, styles: ['/* src/app/modules/config/components/company/company.component.scss */\n.page-container {\n  padding: 24px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.page-header .page-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-header .page-title .material-icons {\n  font-size: 24px;\n  color: var(--primary);\n}\n.page-header .page-sub {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.page-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  margin-bottom: 16px;\n  font-size: 13.5px;\n  border: 1px solid transparent;\n}\n.alert .material-icons {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.alert button {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  opacity: 0.6;\n}\n.alert.alert-success {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: rgba(22, 163, 74, 0.2);\n}\n.alert.alert-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: rgba(220, 38, 38, 0.2);\n}\n.alert.alert-warning {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: rgba(217, 119, 6, 0.2);\n}\n.alert.alert-info {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: rgba(3, 105, 161, 0.2);\n}\n.loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 48px;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 64px 24px;\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n  opacity: 0.3;\n}\n.empty-state p {\n  font-size: 15px;\n  margin: 0;\n}\n.btn-primary,\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 13.5px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  transition: var(--ease);\n  border: none;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 17px;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-primary.btn-sm,\n.btn-secondary.btn-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n}\n.btn-primary.btn-sm .material-icons,\n.btn-secondary.btn-sm .material-icons {\n  font-size: 14px;\n}\n.btn-primary {\n  background: var(--primary);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-secondary {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon {\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-muted);\n}\n.btn-icon .material-icons {\n  font-size: 16px;\n}\n.btn-icon:hover {\n  background: var(--bg-hover);\n  color: var(--text-primary);\n}\n.btn-icon.btn-danger-icon {\n  color: var(--danger);\n  border-color: var(--danger);\n}\n.btn-icon.btn-danger-icon:hover {\n  background: var(--danger-bg);\n}\n.form-control {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  font-size: 14px;\n  font-family:\n    "Inter",\n    "Roboto",\n    sans-serif;\n  box-sizing: border-box;\n  background: var(--bg-surface);\n  color: var(--text-primary);\n}\n.form-control:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.form-control::placeholder {\n  color: var(--text-muted);\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group label {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.form-group .req {\n  color: var(--danger);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid .form-full {\n  grid-column: 1/-1;\n}\n.toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.toggle-label input {\n  cursor: pointer;\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  padding: 9px 13px;\n  text-align: left;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.data-table td {\n  padding: 11px 13px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n  color: var(--text-primary);\n}\n.data-table tbody tr {\n  transition: background 0.1s;\n}\n.data-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.data-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.data-table .empty-row {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 32px;\n}\n.data-table .inactive-row {\n  opacity: 0.5;\n}\n.actions-cell {\n  display: flex;\n  gap: 6px;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.text-mono {\n  font-family: monospace;\n  font-size: 12px;\n}\n.select-group {\n  width: auto;\n  min-width: 180px;\n}\n.badge-active {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--success-bg);\n  color: var(--success);\n}\n.badge-active.inactive {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.badge-code {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  font-size: 11px;\n  font-family: monospace;\n  border: 1px solid var(--border);\n}\n.badge-system {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--info-bg);\n  color: var(--info);\n}\n.badge-custom {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.badge-warn {\n  display: inline-block;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 700;\n  background: var(--warning-bg);\n  color: var(--warning);\n  margin-left: 4px;\n}\n.status-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n}\n.status-badge.active {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: transparent;\n}\n.role-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.role-badge.role-SUPER_ADMIN {\n  background: var(--info-bg);\n  color: var(--info);\n  border-color: transparent;\n}\n.role-badge.role-ADMIN {\n  background: var(--success-bg);\n  color: var(--success);\n  border-color: transparent;\n}\n.role-badge.role-SUPER_AUDITEUR {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border-color: transparent;\n}\n.role-badge.role-AUDITEUR {\n  background: var(--warning-bg);\n  color: var(--warning);\n  border-color: transparent;\n}\n.role-badge.role-CONTROLEUR {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n  border-color: transparent;\n}\n.groups-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.group-card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  overflow: hidden;\n}\n.group-card.expanded {\n  border-color: var(--primary);\n}\n.group-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  cursor: pointer;\n  transition: var(--ease);\n}\n.group-header:hover {\n  background: var(--bg-hover);\n}\n.group-header .group-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.group-header .expand-icon {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.group-header .group-icon {\n  width: 36px;\n  height: 36px;\n  background: var(--primary);\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.group-header .group-icon .material-icons {\n  color: white;\n  font-size: 18px;\n}\n.group-header .group-name {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.group-header .group-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 2px;\n}\n.group-header .company-count {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.group-header .group-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.companies-body {\n  padding: 0 18px 18px;\n  border-top: 1px solid var(--border-light);\n}\n.companies-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 12px;\n}\n.companies-table th {\n  padding: 8px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n  text-align: left;\n}\n.companies-table td {\n  padding: 10px 12px;\n  font-size: 13px;\n  border-bottom: 1px solid var(--border-light);\n  color: var(--text-primary);\n}\n.companies-table tbody tr:hover td {\n  background: var(--bg-hover);\n}\n.companies-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.company-name-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.company-name-cell .material-icons {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.no-company {\n  color: var(--text-muted);\n  padding: 16px 0;\n  font-size: 13px;\n}\n.user-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-avatar {\n  width: 34px;\n  height: 34px;\n  background: var(--primary);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.user-login {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.roles-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.role-card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  padding: 16px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.role-card.system-role {\n  border-left: 3px solid var(--info);\n}\n.role-card-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.role-icon {\n  font-size: 24px;\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.role-info {\n  flex: 1;\n}\n.role-info .role-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.role-info .role-code {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-family: monospace;\n}\n.role-badges {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-items: flex-end;\n}\n.system-note {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.perm-summary {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.perm-chip {\n  padding: 2px 8px;\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border-radius: 10px;\n  font-size: 11px;\n  border: 1px solid var(--border);\n}\n.role-card-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 6px;\n  margin-top: 4px;\n}\n.perm-table-wrap {\n  overflow-x: auto;\n}\n.perm-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.perm-table th,\n.perm-table td {\n  padding: 8px 13px;\n  border: 1px solid var(--border);\n  font-size: 13px;\n}\n.perm-table th {\n  background: var(--bg-elevated);\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.perm-table .mod-cell {\n  font-weight: 600;\n  font-size: 13px;\n  color: var(--primary);\n}\n.perm-table .text-center {\n  text-align: center;\n}\n.perm-table .col-resource {\n  min-width: 180px;\n  text-align: left;\n}\n.perm-table .col-action {\n  min-width: 72px;\n  text-align: center;\n}\n.perm-table .col-all {\n  min-width: 56px;\n  text-align: center;\n}\n.perm-table .module-header-row {\n  background: var(--bg-elevated);\n}\n.perm-table .module-header-row td {\n  border-top: 2px solid var(--border);\n}\n.perm-table .module-header-cell {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--primary);\n  padding: 10px 13px;\n}\n.perm-table .module-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--primary);\n  flex-shrink: 0;\n}\n.perm-table .module-action-cell {\n  background: var(--bg-elevated);\n}\n.perm-table .partial-badge {\n  display: inline-block;\n  padding: 1px 6px;\n  border-radius: 8px;\n  background: var(--warning-bg);\n  color: var(--warning);\n  font-size: 10px;\n  font-weight: 600;\n}\n.perm-table .resource-row {\n  background: var(--bg-surface);\n}\n.perm-table .resource-row:hover {\n  background: var(--bg-hover);\n}\n.perm-table .res-cell {\n  padding-left: 24px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.perm-table .res-indent {\n  color: var(--text-muted);\n  margin-right: 4px;\n  font-size: 12px;\n}\n.perm-section-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 12px;\n}\n.perm-section-title .material-icons {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.modal-perm {\n  width: 860px;\n}\n.info-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 13px;\n  background: var(--info-bg);\n  color: var(--info);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n}\n.info-banner .material-icons {\n  font-size: 16px;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-light);\n  width: 480px;\n  max-width: 95vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-xl);\n}\n.modal.modal-lg {\n  width: 640px;\n}\n.modal.modal-xl {\n  width: 780px;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 17px 20px;\n  border-bottom: 1px solid var(--border-light);\n}\n.modal-header h3 {\n  font-size: 15.5px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-body {\n  padding: 20px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.modal-footer {\n  padding: 14px 20px;\n  border-top: 1px solid var(--border-light);\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  background: var(--bg-elevated);\n}\n.co-grid {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 20px;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .co-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.card {\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-light);\n  box-shadow: var(--shadow-sm);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.card-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.card-title .material-icons {\n  font-size: 16px;\n  color: var(--primary);\n}\n.logo-card {\n  align-items: center;\n  text-align: center;\n}\n.logo-area {\n  width: 180px;\n  height: 120px;\n  border: 2px dashed var(--border);\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-elevated);\n  overflow: hidden;\n}\n.logo-preview {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.btn-upload {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: var(--primary);\n  color: white;\n  border-radius: var(--radius-sm);\n  font-size: 13.5px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: var(--ease);\n}\n.btn-upload .material-icons {\n  font-size: 17px;\n}\n.btn-upload:hover:not(.loading) {\n  background: var(--primary-dark);\n}\n.btn-upload.loading {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-upload input {\n  display: none;\n}\n.logo-hint {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid .form-full {\n  grid-column: 1/-1;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 6px;\n}\n.section-sep {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 28px 0 16px;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: var(--text-muted);\n}\n.section-sep .material-icons {\n  font-size: 16px;\n  color: var(--accent);\n}\n.section-sep::before,\n.section-sep::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--border-light);\n}\n.card-desc {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: -6px 0 0;\n}\n.app-logo-preview {\n  border-radius: 8px;\n}\n.logo-placeholder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  color: var(--text-muted);\n  font-size: 12px;\n}\n.logo-placeholder .material-icons {\n  font-size: 36px;\n  color: var(--border);\n}\n.form-control-lg {\n  font-size: 16px;\n  font-weight: 500;\n  padding: 10px 14px;\n}\n.field-hint {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 4px;\n  display: block;\n}\n/*# sourceMappingURL=company.component.css.map */\n'] }]
  }], () => [{ type: CompanyService }, { type: AppBrandingService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyComponent, { className: "CompanyComponent", filePath: "app/modules/config/components/company/company.component.ts", lineNumber: 15 });
})();
export {
  CompanyComponent
};
//# sourceMappingURL=chunk-PTM5QJH4.js.map
