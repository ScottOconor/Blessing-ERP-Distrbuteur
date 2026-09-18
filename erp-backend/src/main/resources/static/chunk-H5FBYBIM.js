import {
  EleaderService
} from "./chunk-N3CNQQZB.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-NRXD6HPP.js";
import {
  AuthService
} from "./chunk-CX56A4IS.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NJUNWWEJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// src/app/modules/sales/components/eleader/eleader-config/eleader-config.component.ts
function EleaderConfigComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 7);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Chargement\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function EleaderConfigComponent_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 12);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMsg, " ");
  }
}
function EleaderConfigComponent_ng_container_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 12);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMsg, " ");
  }
}
function EleaderConfigComponent_ng_container_7_div_44_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 48);
    \u0275\u0275listener("click", function EleaderConfigComponent_ng_container_7_div_44_span_1_Template_button_click_2_listener() {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeConsigneCode(i_r4));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r5, " ");
  }
}
function EleaderConfigComponent_ng_container_7_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275template(1, EleaderConfigComponent_ng_container_7_div_44_span_1_Template, 4, 1, "span", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.config.extraConsigneCodes);
  }
}
function EleaderConfigComponent_ng_container_7_p_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49);
    \u0275\u0275text(1, " Aucun code suppl\xE9mentaire \u2014 les codes de base standards suffisent. ");
    \u0275\u0275elementEnd();
  }
}
function EleaderConfigComponent_ng_container_7_p_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 50)(1, "span", 51);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.consigneCodeError, " ");
  }
}
function EleaderConfigComponent_ng_container_7_div_71_tr_12_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mod_r8 = ctx.$implicit;
    \u0275\u0275property("value", mod_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mod_r8);
  }
}
function EleaderConfigComponent_ng_container_7_div_71_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function EleaderConfigComponent_ng_container_7_div_71_tr_12_Template_input_ngModelChange_2_listener($event) {
      const m_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(m_r7.eleaderCode, $event) || (m_r7.eleaderCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td")(4, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function EleaderConfigComponent_ng_container_7_div_71_tr_12_Template_input_ngModelChange_4_listener($event) {
      const m_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(m_r7.erpProductCode, $event) || (m_r7.erpProductCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "select", 56);
    \u0275\u0275twoWayListener("ngModelChange", function EleaderConfigComponent_ng_container_7_div_71_tr_12_Template_select_ngModelChange_6_listener($event) {
      const m_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(m_r7.invoiceModel, $event) || (m_r7.invoiceModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(7, EleaderConfigComponent_ng_container_7_div_71_tr_12_option_7_Template, 2, 2, "option", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "button", 58);
    \u0275\u0275listener("click", function EleaderConfigComponent_ng_container_7_div_71_tr_12_Template_button_click_9_listener() {
      const i_r9 = \u0275\u0275restoreView(_r6).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeMapping(i_r9));
    });
    \u0275\u0275elementStart(10, "span", 12);
    \u0275\u0275text(11, "delete_outline");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const m_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", m_r7.eleaderCode);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", m_r7.erpProductCode);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", m_r7.invoiceModel);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.MODELS);
  }
}
function EleaderConfigComponent_ng_container_7_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Code eLeader (PDF)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Code ERP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Mod\xE8le");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275template(12, EleaderConfigComponent_ng_container_7_div_71_tr_12_Template, 12, 4, "tr", 53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r1.config.emballageMappings)("ngForTrackBy", ctx_r1.trackByIndex);
  }
}
function EleaderConfigComponent_ng_container_7_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 12);
    \u0275\u0275text(2, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun mapping configur\xE9.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6, "Cliquez sur ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "Charger les valeurs par d\xE9faut");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " pour pr\xE9-remplir les codes courants, ou ajoutez les v\xF4tres.");
    \u0275\u0275elementEnd()();
  }
}
function EleaderConfigComponent_ng_container_7_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function EleaderConfigComponent_ng_container_7_div_74_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showLoadDefaultsConfirm = false);
    });
    \u0275\u0275elementStart(1, "div", 62);
    \u0275\u0275listener("click", function EleaderConfigComponent_ng_container_7_div_74_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 63)(3, "h4");
    \u0275\u0275text(4, "Charger les valeurs par d\xE9faut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 64);
    \u0275\u0275listener("click", function EleaderConfigComponent_ng_container_7_div_74_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showLoadDefaultsConfirm = false);
    });
    \u0275\u0275elementStart(6, "span", 12);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 65)(9, "p");
    \u0275\u0275text(10, "Les codes eLeader standards (VCBB65, VRACC12, 354111, etc.) vont \xEAtre ajout\xE9s dans le tableau.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Vous pourrez les modifier \u2014 changer les codes ERP, en supprimer, en ajouter \u2014 avant d'enregistrer.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 66)(14, "button", 67);
    \u0275\u0275listener("click", function EleaderConfigComponent_ng_container_7_div_74_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showLoadDefaultsConfirm = false);
    });
    \u0275\u0275text(15, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 68);
    \u0275\u0275listener("click", function EleaderConfigComponent_ng_container_7_div_74_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadDefaults());
    });
    \u0275\u0275elementStart(17, "span", 12);
    \u0275\u0275text(18, "auto_fix_high");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Charger ");
    \u0275\u0275elementEnd()()()();
  }
}
function EleaderConfigComponent_ng_container_7_div_75_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mod_r12 = ctx.$implicit;
    \u0275\u0275property("value", mod_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mod_r12);
  }
}
function EleaderConfigComponent_ng_container_7_div_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function EleaderConfigComponent_ng_container_7_div_75_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showAddMapping = false);
    });
    \u0275\u0275elementStart(1, "div", 62);
    \u0275\u0275listener("click", function EleaderConfigComponent_ng_container_7_div_75_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 63)(3, "h4");
    \u0275\u0275text(4, "Nouveau code d'emballage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 64);
    \u0275\u0275listener("click", function EleaderConfigComponent_ng_container_7_div_75_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showAddMapping = false);
    });
    \u0275\u0275elementStart(6, "span", 12);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 65)(9, "div", 20)(10, "label", 17);
    \u0275\u0275text(11, "Code eLeader (tel qu'il appara\xEEt dans le PDF) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function EleaderConfigComponent_ng_container_7_div_75_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newMapping.eleaderCode, $event) || (ctx_r1.newMapping.eleaderCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 25);
    \u0275\u0275text(14, "Recopiez exactement le code tel qu'il figure dans la section emballages du PDF eLeader.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 20)(16, "label", 17);
    \u0275\u0275text(17, "Code produit ERP *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function EleaderConfigComponent_ng_container_7_div_75_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newMapping.erpProductCode, $event) || (ctx_r1.newMapping.erpProductCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 25);
    \u0275\u0275text(20, "Entrez le code exact du produit tel qu'il existe dans votre ERP.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 20)(22, "label", 17);
    \u0275\u0275text(23, "Mod\xE8le de facture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 71);
    \u0275\u0275twoWayListener("ngModelChange", function EleaderConfigComponent_ng_container_7_div_75_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newMapping.invoiceModel, $event) || (ctx_r1.newMapping.invoiceModel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(25, EleaderConfigComponent_ng_container_7_div_75_option_25_Template, 2, 2, "option", 57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 66)(27, "button", 67);
    \u0275\u0275listener("click", function EleaderConfigComponent_ng_container_7_div_75_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showAddMapping = false);
    });
    \u0275\u0275text(28, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 72);
    \u0275\u0275listener("click", function EleaderConfigComponent_ng_container_7_div_75_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addMapping());
    });
    \u0275\u0275text(30, " Ajouter ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newMapping.eleaderCode);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newMapping.erpProductCode);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newMapping.invoiceModel);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.MODELS);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.newMapping.eleaderCode || !ctx_r1.newMapping.erpProductCode);
  }
}
function EleaderConfigComponent_ng_container_7_span_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function EleaderConfigComponent_ng_container_7_span_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
  }
}
function EleaderConfigComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EleaderConfigComponent_ng_container_7_div_1_Template, 4, 1, "div", 8)(2, EleaderConfigComponent_ng_container_7_div_2_Template, 4, 1, "div", 9);
    \u0275\u0275elementStart(3, "div", 10)(4, "div", 11)(5, "span", 12);
    \u0275\u0275text(6, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8, "Param\xE8tres d'import");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 13)(10, "p", 14);
    \u0275\u0275text(11, "Le journal comptable est s\xE9lectionn\xE9 directement dans chaque bon de commande.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 15)(13, "div", 16)(14, "label", 17);
    \u0275\u0275text(15, "Code produit PSA (pr\xE9compte)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function EleaderConfigComponent_ng_container_7_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.config.psaProductCode, $event) || (ctx_r1.config.psaProductCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 16)(18, "label", 17);
    \u0275\u0275text(19, "Code produit frais d'enl\xE8vement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function EleaderConfigComponent_ng_container_7_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.config.fraisEnlevementCode, $event) || (ctx_r1.config.fraisEnlevementCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 20)(22, "label", 21)(23, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function EleaderConfigComponent_ng_container_7_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.config.autoConfirm, $event) || (ctx_r1.config.autoConfirm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "span", 23);
    \u0275\u0275elementStart(25, "span", 24);
    \u0275\u0275text(26, "Confirmer automatiquement les bons de commande apr\xE8s import");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "p", 25);
    \u0275\u0275text(28, "Si activ\xE9, le bon de commande sera directement confirm\xE9 et la facture cr\xE9\xE9e sans \xE9tape manuelle.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 26)(30, "div", 11)(31, "span", 12);
    \u0275\u0275text(32, "inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "h3");
    \u0275\u0275text(34, "Codes consignes / emballages suppl\xE9mentaires");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 13)(36, "p", 27);
    \u0275\u0275text(37, " Codes produits ERP \xE0 traiter comme des consignes/emballages : ");
    \u0275\u0275elementStart(38, "strong");
    \u0275\u0275text(39, "exempt de TVA");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, ", comptabilis\xE9s en compte emballages. Les codes de base (CB12, CB24, CBG12, CV12, PP, PB\u2026) sont ");
    \u0275\u0275elementStart(41, "em");
    \u0275\u0275text(42, "toujours inclus");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, " sans les d\xE9clarer ici. Ajoutez ici uniquement les codes sp\xE9cifiques \xE0 votre d\xE9p\xF4t (piqu\xE9s, consignes locales\u2026). ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, EleaderConfigComponent_ng_container_7_div_44_Template, 2, 1, "div", 28)(45, EleaderConfigComponent_ng_container_7_p_45_Template, 2, 0, "p", 29);
    \u0275\u0275elementStart(46, "div", 30)(47, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function EleaderConfigComponent_ng_container_7_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newConsigneCode, $event) || (ctx_r1.newConsigneCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function EleaderConfigComponent_ng_container_7_Template_input_keyup_enter_47_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addConsigneCode());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 32);
    \u0275\u0275listener("click", function EleaderConfigComponent_ng_container_7_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addConsigneCode());
    });
    \u0275\u0275elementStart(49, "span", 12);
    \u0275\u0275text(50, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " Ajouter ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(52, EleaderConfigComponent_ng_container_7_p_52_Template, 4, 1, "p", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 26)(54, "div", 11)(55, "span", 12);
    \u0275\u0275text(56, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "h3");
    \u0275\u0275text(58, "Codes d'emballage eLeader");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 34)(60, "button", 35);
    \u0275\u0275listener("click", function EleaderConfigComponent_ng_container_7_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showLoadDefaultsConfirm = true);
    });
    \u0275\u0275elementStart(61, "span", 12);
    \u0275\u0275text(62, "auto_fix_high");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, " Charger les valeurs par d\xE9faut ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 36);
    \u0275\u0275listener("click", function EleaderConfigComponent_ng_container_7_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddMapping());
    });
    \u0275\u0275elementStart(65, "span", 12);
    \u0275\u0275text(66, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, " Ajouter ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 13)(69, "p", 27);
    \u0275\u0275text(70, " Correspondance entre les codes eLeader du PDF (ex\xA0: VCBB65, VRACC12, 354111) et les codes produits ERP (ex\xA0: CB12, CB24, CBG12). Chaque code ERP mapp\xE9 sera automatiquement reconnu comme consigne. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(71, EleaderConfigComponent_ng_container_7_div_71_Template, 13, 2, "div", 37)(72, EleaderConfigComponent_ng_container_7_ng_template_72_Template, 10, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(74, EleaderConfigComponent_ng_container_7_div_74_Template, 20, 0, "div", 38)(75, EleaderConfigComponent_ng_container_7_div_75_Template, 31, 5, "div", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 39)(77, "button", 40);
    \u0275\u0275listener("click", function EleaderConfigComponent_ng_container_7_Template_button_click_77_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275template(78, EleaderConfigComponent_ng_container_7_span_78_Template, 2, 0, "span", 41)(79, EleaderConfigComponent_ng_container_7_span_79_Template, 2, 0, "span", 42);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noMappings_r13 = \u0275\u0275reference(73);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.successMsg);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMsg);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.config.psaProductCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.config.fraisEnlevementCode);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.config.autoConfirm);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngIf", ctx_r1.config.extraConsigneCodes.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.extraConsigneCodes.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newConsigneCode);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.newConsigneCode.trim());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.consigneCodeError);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngIf", ctx_r1.config.emballageMappings.length > 0)("ngIfElse", noMappings_r13);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.showLoadDefaultsConfirm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showAddMapping);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Enregistrement\u2026" : "Enregistrer la configuration", " ");
  }
}
var EleaderConfigComponent = class _EleaderConfigComponent {
  constructor(eleaderService, authService) {
    this.eleaderService = eleaderService;
    this.authService = authService;
    this.loading = false;
    this.saving = false;
    this.successMsg = "";
    this.errorMsg = "";
    this.config = {
      companyId: 0,
      psaProductCode: "PRC01",
      fraisEnlevementCode: "ELV01",
      autoConfirm: false,
      emballageMappings: [],
      extraConsigneCodes: []
    };
    this.showAddMapping = false;
    this.newMapping = { eleaderCode: "", erpProductCode: "", invoiceModel: "ALL" };
    this.addingMapping = false;
    this.MODELS = ["ALL", "BRASSERIES", "GUINNESS"];
    this.showLoadDefaultsConfirm = false;
    this.newConsigneCode = "";
    this.consigneCodeError = "";
    this.DEFAULTS = [
      // ── Brasseries ────────────────────────────────────────────────────────
      { eleaderCode: "VCBB65", erpProductCode: "CB12", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VCBB60", erpProductCode: "CB12", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VCBB50", erpProductCode: "CB12", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VCBV65", erpProductCode: "CB12", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VCMU65", erpProductCode: "CB12", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VCBA65", erpProductCode: "CB12", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VCBA50", erpProductCode: "CB12", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VCCC60", erpProductCode: "CB12", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VCFA60", erpProductCode: "CB12", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VCAP65", erpProductCode: "CB12", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VRACC12", erpProductCode: "CB12", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VCCC30", erpProductCode: "CB24", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VCFA30", erpProductCode: "CB24", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VCAP33", erpProductCode: "CB24", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VCBV33", erpProductCode: "CB24", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VCBA33", erpProductCode: "CB24", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VCMA30", erpProductCode: "CB24", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VCMB30", erpProductCode: "CB24", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VRACC24", erpProductCode: "CB24", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VIP12", erpProductCode: "CV12", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VIP12M", erpProductCode: "CV12", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VIP12R", erpProductCode: "CV12", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VIP24", erpProductCode: "CV24", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VIP24B", erpProductCode: "CV24", invoiceModel: "BRASSERIES" },
      { eleaderCode: "VIP24R", erpProductCode: "CV24", invoiceModel: "BRASSERIES" },
      // ── Guinness ──────────────────────────────────────────────────────────
      { eleaderCode: "VCHP60", erpProductCode: "CBG12", invoiceModel: "GUINNESS" },
      { eleaderCode: "VCGA65", erpProductCode: "CBG12", invoiceModel: "GUINNESS" },
      { eleaderCode: "VCGA50", erpProductCode: "CBG12", invoiceModel: "GUINNESS" },
      { eleaderCode: "VCGA33", erpProductCode: "CBG12", invoiceModel: "GUINNESS" },
      { eleaderCode: "VCGM33", erpProductCode: "CBG12", invoiceModel: "GUINNESS" },
      { eleaderCode: "VCFG33", erpProductCode: "CBG12", invoiceModel: "GUINNESS" },
      { eleaderCode: "354111", erpProductCode: "CBG12", invoiceModel: "GUINNESS" },
      { eleaderCode: "354112", erpProductCode: "CBG12", invoiceModel: "GUINNESS" },
      { eleaderCode: "354113", erpProductCode: "CBG12", invoiceModel: "GUINNESS" },
      { eleaderCode: "VRFG33", erpProductCode: "CBG12", invoiceModel: "GUINNESS" },
      { eleaderCode: "VRGA33", erpProductCode: "CBG12", invoiceModel: "GUINNESS" },
      { eleaderCode: "VRMG33", erpProductCode: "CBG12", invoiceModel: "GUINNESS" },
      { eleaderCode: "VRHP60", erpProductCode: "CBG12", invoiceModel: "GUINNESS" },
      { eleaderCode: "VRGA65", erpProductCode: "CBG12", invoiceModel: "GUINNESS" },
      { eleaderCode: "VRGA50", erpProductCode: "CBG12", invoiceModel: "GUINNESS" },
      { eleaderCode: "VIP12G", erpProductCode: "CVG12", invoiceModel: "GUINNESS" },
      { eleaderCode: "VIP15G", erpProductCode: "CVG12", invoiceModel: "GUINNESS" },
      { eleaderCode: "VIP24G", erpProductCode: "CVG12", invoiceModel: "GUINNESS" }
    ];
    this.trackByIndex = (i) => i;
  }
  ngOnInit() {
    const companyId = this.authService.getCompanyId();
    this.config.companyId = companyId;
    this.loading = true;
    this.eleaderService.getConfig(companyId).subscribe({
      next: (cfg) => {
        this.config = __spreadProps(__spreadValues({}, cfg), { extraConsigneCodes: cfg.extraConsigneCodes ?? [] });
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  save() {
    const mappingError = this.checkMappingDuplicates();
    if (mappingError) {
      this.errorMsg = mappingError;
      return;
    }
    this.saving = true;
    this.errorMsg = "";
    this.successMsg = "";
    this.eleaderService.saveConfig(this.config).subscribe({
      next: (saved) => {
        this.config = __spreadProps(__spreadValues({}, saved), { extraConsigneCodes: saved.extraConsigneCodes ?? [] });
        this.successMsg = "Configuration enregistr\xE9e. Codes consignes recharg\xE9s.";
        this.saving = false;
      },
      error: (err) => {
        this.errorMsg = err?.error?.message || "Erreur lors de la sauvegarde.";
        this.saving = false;
      }
    });
  }
  // ── Gestion des mappings emballages ──────────────────────────────────────
  openAddMapping() {
    this.newMapping = { eleaderCode: "", erpProductCode: "", invoiceModel: "ALL" };
    this.showAddMapping = true;
  }
  addMapping() {
    if (!this.newMapping.eleaderCode || !this.newMapping.erpProductCode)
      return;
    const key = this.newMapping.eleaderCode.trim().toUpperCase() + "|" + (this.newMapping.invoiceModel || "ALL").toUpperCase();
    const duplicate = this.config.emballageMappings.some((m) => m.eleaderCode.trim().toUpperCase() + "|" + (m.invoiceModel || "ALL").toUpperCase() === key);
    if (duplicate) {
      this.errorMsg = `Code eLeader '${this.newMapping.eleaderCode.toUpperCase()}' d\xE9j\xE0 mapp\xE9 pour le mod\xE8le ${this.newMapping.invoiceModel}. Supprimez d'abord l'entr\xE9e existante.`;
      return;
    }
    this.config.emballageMappings = [
      ...this.config.emballageMappings,
      __spreadValues({}, this.newMapping)
    ];
    this.showAddMapping = false;
    this.errorMsg = "";
  }
  removeMapping(index) {
    this.config.emballageMappings = this.config.emballageMappings.filter((_, i) => i !== index);
  }
  /** Détecte les doublons dans la liste de mappings en mémoire. */
  checkMappingDuplicates() {
    const seen = /* @__PURE__ */ new Set();
    for (const m of this.config.emballageMappings) {
      if (!m.eleaderCode)
        continue;
      const key = m.eleaderCode.trim().toUpperCase() + "|" + (m.invoiceModel || "ALL").toUpperCase();
      if (seen.has(key)) {
        return `Code eLeader en double : '${m.eleaderCode.toUpperCase()}' (mod\xE8le ${m.invoiceModel}). Supprimez le doublon.`;
      }
      seen.add(key);
    }
    return null;
  }
  // ── Gestion des codes consignes supplémentaires ───────────────────────────
  addConsigneCode() {
    this.consigneCodeError = "";
    const code = this.newConsigneCode.trim().toUpperCase();
    if (!code)
      return;
    if (this.config.extraConsigneCodes.includes(code)) {
      this.consigneCodeError = `Le code '${code}' est d\xE9j\xE0 dans la liste.`;
      return;
    }
    this.config.extraConsigneCodes = [...this.config.extraConsigneCodes, code].sort();
    this.newConsigneCode = "";
  }
  removeConsigneCode(index) {
    this.config.extraConsigneCodes = this.config.extraConsigneCodes.filter((_, i) => i !== index);
    this.consigneCodeError = "";
  }
  // ── Chargement des défauts ───────────────────────────────────────────────
  /** Pré-remplit le tableau avec les codes de référence eLeader. */
  loadDefaults() {
    const existing = new Set(this.config.emballageMappings.map((m) => m.eleaderCode.toUpperCase() + "|" + (m.invoiceModel || "ALL").toUpperCase()));
    const toAdd = this.DEFAULTS.filter((d) => !existing.has(d.eleaderCode.toUpperCase() + "|" + (d.invoiceModel || "ALL").toUpperCase()));
    this.config.emballageMappings = [...this.config.emballageMappings, ...toAdd];
    this.showLoadDefaultsConfirm = false;
  }
  static {
    this.\u0275fac = function EleaderConfigComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EleaderConfigComponent)(\u0275\u0275directiveInject(EleaderService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EleaderConfigComponent, selectors: [["app-eleader-config"]], decls: 8, vars: 2, consts: [["noMappings", ""], [1, "config-page"], [1, "page-header"], [1, "subtitle"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], [1, "loading-state"], [1, "material-icons", "spin"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], [1, "card"], [1, "card-header"], [1, "material-icons"], [1, "card-body"], [1, "field-hint", 2, "margin-bottom", "12px"], [1, "field-row"], [1, "field-group", "half"], [1, "field-label"], ["placeholder", "PRC01", 1, "field-input", 3, "ngModelChange", "ngModel"], ["placeholder", "ELV01", 1, "field-input", 3, "ngModelChange", "ngModel"], [1, "field-group"], [1, "toggle-label"], ["type", "checkbox", 1, "toggle-input", 3, "ngModelChange", "ngModel"], [1, "toggle-track"], [1, "toggle-text"], [1, "field-hint"], [1, "card", "mt-16"], [1, "section-desc"], ["class", "consigne-tags", 4, "ngIf"], ["class", "empty-hint", 4, "ngIf"], [1, "code-add-row"], ["placeholder", "ex: CONS002, PALT-N, PP2\u2026", 1, "field-input", "code-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-add", 3, "click", "disabled"], ["class", "field-error", 4, "ngIf"], [1, "header-actions"], ["title", "Pr\xE9-remplir avec les codes eLeader standards", 1, "btn-defaults", 3, "click"], [1, "btn-add", 3, "click"], ["class", "mapping-table", 4, "ngIf", "ngIfElse"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "actions-bar"], [1, "btn-primary", "large", 3, "click", "disabled"], ["class", "material-icons", 4, "ngIf"], ["class", "material-icons spin", 4, "ngIf"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "consigne-tags"], ["class", "consigne-tag", 4, "ngFor", "ngForOf"], [1, "consigne-tag"], ["title", "Supprimer", 1, "tag-remove", 3, "click"], [1, "empty-hint"], [1, "field-error"], [1, "material-icons", 2, "font-size", "14px", "vertical-align", "middle"], [1, "mapping-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["placeholder", "ex: VCBB65", 1, "inline-input", 3, "ngModelChange", "ngModel"], ["placeholder", "ex: CB12, EMB1\u2026", 1, "inline-input", 3, "ngModelChange", "ngModel"], [1, "inline-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["title", "Supprimer", 1, "btn-icon", "danger", 3, "click"], [3, "value"], [1, "empty-state"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 3, "click"], [1, "modal-header"], [1, "btn-icon", 3, "click"], [1, "modal-body"], [1, "modal-footer"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click"], ["placeholder", "ex: VCBB65, VRACC12, 354111\u2026", 1, "field-input", 3, "ngModelChange", "ngModel"], ["placeholder", "ex: CB12, CB24, EMB1, EMB2, CBG12\u2026", 1, "field-input", 3, "ngModelChange", "ngModel"], [1, "field-select", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click", "disabled"]], template: function EleaderConfigComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2");
        \u0275\u0275text(3, "Configuration eLeader");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Param\xE8tres d'import des factures eLeader (Brasseries / Guinness)");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, EleaderConfigComponent_div_6_Template, 4, 0, "div", 4)(7, EleaderConfigComponent_ng_container_7_Template, 81, 18, "ng-container", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n.config-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin: 0 0 4px;\n  color: var(--text-primary);\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n  margin: 0;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.card.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 20px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  flex: 1;\n}\n.card-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.card-header[_ngcontent-%COMP%]   .required-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  background: var(--danger-bg);\n  color: var(--danger);\n  padding: 2px 8px;\n  border-radius: 99px;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.section-desc[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  margin: 0 0 16px;\n}\n.field-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.field-group.half[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.field-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 6px;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin: 4px 0 0;\n}\n.field-input[_ngcontent-%COMP%], \n.field-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  font-size: 0.875rem;\n  color: var(--text-primary);\n  background: var(--bg-surface);\n  transition: border-color 0.2s;\n}\n.field-input[_ngcontent-%COMP%]:focus, \n.field-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.field-input.error[_ngcontent-%COMP%], \n.field-select.error[_ngcontent-%COMP%] {\n  border-color: var(--danger);\n}\n.field-input[_ngcontent-%COMP%], \n.field-select[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n}\n.toggle-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.toggle-track[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 22px;\n  background: #cbd5e1;\n  border-radius: 99px;\n  position: relative;\n  transition: background 0.2s;\n}\n.toggle-track[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  width: 18px;\n  height: 18px;\n  background: var(--bg-surface);\n  border-radius: 50%;\n  transition: transform 0.2s;\n}\n.toggle-input[_ngcontent-%COMP%]:checked    + .toggle-track[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.toggle-input[_ngcontent-%COMP%]:checked    + .toggle-track[_ngcontent-%COMP%]::after {\n  transform: translateX(18px);\n}\n.toggle-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.mapping-table[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.mapping-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.mapping-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  padding: 10px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.mapping-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-top: 1px solid var(--border-light);\n}\n.inline-input[_ngcontent-%COMP%], \n.inline-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 10px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  color: var(--text-primary);\n  background: var(--bg-surface);\n}\n.inline-input[_ngcontent-%COMP%]:focus, \n.inline-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin-bottom: 8px;\n  display: block;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 0.9rem;\n}\n.empty-state[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-defaults[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  background: var(--success-bg);\n  color: #16a34a;\n  border: 1px solid var(--success-bg);\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-defaults[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-defaults[_ngcontent-%COMP%]:hover {\n  background: var(--success-bg);\n}\n.btn-add[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  background: var(--primary);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-add[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 6px;\n  color: var(--text-muted);\n}\n.btn-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n}\n.btn-icon.danger[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.actions-bar[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  justify-content: flex-end;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: background 0.2s;\n}\n.btn-primary.large[_ngcontent-%COMP%], \n.btn-secondary.large[_ngcontent-%COMP%] {\n  padding: 12px 28px;\n  font-size: 1rem;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  width: 440px;\n  max-width: 95vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 16px 20px;\n  border-top: 1px solid var(--border-light);\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 0.9rem;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: #16a34a;\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-muted);\n  padding: 40px;\n  justify-content: center;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  display: inline-block;\n}\n.consigne-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.consigne-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: var(--accent-light, #e0f2fe);\n  color: var(--accent, #0369a1);\n  border: 1px solid var(--accent, #0369a1);\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  font-family: monospace;\n}\n.consigne-tag[_ngcontent-%COMP%]   .tag-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  font-size: 14px;\n  line-height: 1;\n  padding: 0 2px;\n  margin-left: 2px;\n}\n.consigne-tag[_ngcontent-%COMP%]   .tag-remove[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.code-add-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.code-add-row[_ngcontent-%COMP%]   .code-input[_ngcontent-%COMP%] {\n  flex: 1;\n  font-family: monospace;\n}\n.empty-hint[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  font-style: italic;\n  margin: 0 0 12px;\n}\n.field-error[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-size: 0.82rem;\n  margin: 6px 0 0;\n}\n/*# sourceMappingURL=eleader-config.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EleaderConfigComponent, [{
    type: Component,
    args: [{ selector: "app-eleader-config", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="config-page">
  <div class="page-header">
    <h2>Configuration eLeader</h2>
    <p class="subtitle">Param\xE8tres d'import des factures eLeader (Brasseries / Guinness)</p>
  </div>

  <div *ngIf="loading" class="loading-state">
    <span class="material-icons spin">refresh</span> Chargement\u2026
  </div>

  <ng-container *ngIf="!loading">
    <div *ngIf="successMsg" class="alert alert-success">
      <span class="material-icons">check_circle</span> {{ successMsg }}
    </div>
    <div *ngIf="errorMsg" class="alert alert-error">
      <span class="material-icons">error</span> {{ errorMsg }}
    </div>

    <!-- Section Param\xE8tres -->
    <div class="card">
      <div class="card-header">
        <span class="material-icons">settings</span>
        <h3>Param\xE8tres d'import</h3>
      </div>
      <div class="card-body">
        <p class="field-hint" style="margin-bottom:12px">Le journal comptable est s\xE9lectionn\xE9 directement dans chaque bon de commande.</p>
        <div class="field-row">
          <div class="field-group half">
            <label class="field-label">Code produit PSA (pr\xE9compte)</label>
            <input [(ngModel)]="config.psaProductCode" class="field-input" placeholder="PRC01" />
          </div>
          <div class="field-group half">
            <label class="field-label">Code produit frais d'enl\xE8vement</label>
            <input [(ngModel)]="config.fraisEnlevementCode" class="field-input" placeholder="ELV01" />
          </div>
        </div>
        <div class="field-group">
          <label class="toggle-label">
            <input type="checkbox" [(ngModel)]="config.autoConfirm" class="toggle-input" />
            <span class="toggle-track"></span>
            <span class="toggle-text">Confirmer automatiquement les bons de commande apr\xE8s import</span>
          </label>
          <p class="field-hint">Si activ\xE9, le bon de commande sera directement confirm\xE9 et la facture cr\xE9\xE9e sans \xE9tape manuelle.</p>
        </div>
      </div>
    </div>

    <!-- Section Codes consignes/emballages suppl\xE9mentaires -->
    <div class="card mt-16">
      <div class="card-header">
        <span class="material-icons">inventory</span>
        <h3>Codes consignes / emballages suppl\xE9mentaires</h3>
      </div>
      <div class="card-body">
        <p class="section-desc">
          Codes produits ERP \xE0 traiter comme des consignes/emballages : <strong>exempt de TVA</strong>, comptabilis\xE9s en compte emballages.
          Les codes de base (CB12, CB24, CBG12, CV12, PP, PB\u2026) sont <em>toujours inclus</em> sans les d\xE9clarer ici.
          Ajoutez ici uniquement les codes sp\xE9cifiques \xE0 votre d\xE9p\xF4t (piqu\xE9s, consignes locales\u2026).
        </p>

        <!-- Tags -->
        <div class="consigne-tags" *ngIf="config.extraConsigneCodes.length > 0">
          <span *ngFor="let c of config.extraConsigneCodes; let i = index" class="consigne-tag">
            {{ c }}
            <button class="tag-remove" (click)="removeConsigneCode(i)" title="Supprimer">\xD7</button>
          </span>
        </div>
        <p *ngIf="config.extraConsigneCodes.length === 0" class="empty-hint">
          Aucun code suppl\xE9mentaire \u2014 les codes de base standards suffisent.
        </p>

        <!-- Ajout -->
        <div class="code-add-row">
          <input [(ngModel)]="newConsigneCode" class="field-input code-input"
                 placeholder="ex: CONS002, PALT-N, PP2\u2026"
                 (keyup.enter)="addConsigneCode()" />
          <button class="btn-add" (click)="addConsigneCode()" [disabled]="!newConsigneCode.trim()">
            <span class="material-icons">add</span> Ajouter
          </button>
        </div>
        <p *ngIf="consigneCodeError" class="field-error">
          <span class="material-icons" style="font-size:14px;vertical-align:middle">warning</span>
          {{ consigneCodeError }}
        </p>
      </div>
    </div>

    <!-- Section Codes d'emballage eLeader -->
    <div class="card mt-16">
      <div class="card-header">
        <span class="material-icons">inventory_2</span>
        <h3>Codes d'emballage eLeader</h3>
        <div class="header-actions">
          <button class="btn-defaults" (click)="showLoadDefaultsConfirm = true" title="Pr\xE9-remplir avec les codes eLeader standards">
            <span class="material-icons">auto_fix_high</span> Charger les valeurs par d\xE9faut
          </button>
          <button class="btn-add" (click)="openAddMapping()">
            <span class="material-icons">add</span> Ajouter
          </button>
        </div>
      </div>
      <div class="card-body">
        <p class="section-desc">
          Correspondance entre les codes eLeader du PDF (ex&nbsp;: VCBB65, VRACC12, 354111)
          et les codes produits ERP (ex&nbsp;: CB12, CB24, CBG12).
          Chaque code ERP mapp\xE9 sera automatiquement reconnu comme consigne.
        </p>

        <!-- Tableau des mappings -->
        <div class="mapping-table" *ngIf="config.emballageMappings.length > 0; else noMappings">
          <table>
            <thead>
              <tr>
                <th>Code eLeader (PDF)</th>
                <th>Code ERP</th>
                <th>Mod\xE8le</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let m of config.emballageMappings; trackBy: trackByIndex; let i = index">
                <td>
                  <input [(ngModel)]="m.eleaderCode" class="inline-input" placeholder="ex: VCBB65" />
                </td>
                <td>
                  <input [(ngModel)]="m.erpProductCode" class="inline-input" placeholder="ex: CB12, EMB1\u2026" />
                </td>
                <td>
                  <select [(ngModel)]="m.invoiceModel" class="inline-select">
                    <option *ngFor="let mod of MODELS" [value]="mod">{{ mod }}</option>
                  </select>
                </td>
                <td>
                  <button class="btn-icon danger" (click)="removeMapping(i)" title="Supprimer">
                    <span class="material-icons">delete_outline</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <ng-template #noMappings>
          <div class="empty-state">
            <span class="material-icons">inventory_2</span>
            <p>Aucun mapping configur\xE9.</p>
            <small>Cliquez sur <strong>Charger les valeurs par d\xE9faut</strong> pour pr\xE9-remplir les codes courants, ou ajoutez les v\xF4tres.</small>
          </div>
        </ng-template>

        <!-- Modale confirmation chargement des d\xE9fauts -->
        <div class="modal-overlay" *ngIf="showLoadDefaultsConfirm" (click)="showLoadDefaultsConfirm = false">
          <div class="modal-box" (click)="$event.stopPropagation()">
            <div class="modal-header">
              <h4>Charger les valeurs par d\xE9faut</h4>
              <button class="btn-icon" (click)="showLoadDefaultsConfirm = false">
                <span class="material-icons">close</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Les codes eLeader standards (VCBB65, VRACC12, 354111, etc.) vont \xEAtre ajout\xE9s dans le tableau.</p>
              <p>Vous pourrez les modifier \u2014 changer les codes ERP, en supprimer, en ajouter \u2014 avant d'enregistrer.</p>
            </div>
            <div class="modal-footer">
              <button class="btn-secondary" (click)="showLoadDefaultsConfirm = false">Annuler</button>
              <button class="btn-primary" (click)="loadDefaults()">
                <span class="material-icons">auto_fix_high</span> Charger
              </button>
            </div>
          </div>
        </div>

        <!-- Modale ajout mapping -->
        <div class="modal-overlay" *ngIf="showAddMapping" (click)="showAddMapping = false">
          <div class="modal-box" (click)="$event.stopPropagation()">
            <div class="modal-header">
              <h4>Nouveau code d'emballage</h4>
              <button class="btn-icon" (click)="showAddMapping = false">
                <span class="material-icons">close</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="field-group">
                <label class="field-label">Code eLeader (tel qu'il appara\xEEt dans le PDF) *</label>
                <input [(ngModel)]="newMapping.eleaderCode" class="field-input"
                       placeholder="ex: VCBB65, VRACC12, 354111\u2026" />
                <p class="field-hint">Recopiez exactement le code tel qu'il figure dans la section emballages du PDF eLeader.</p>
              </div>
              <div class="field-group">
                <label class="field-label">Code produit ERP *</label>
                <input [(ngModel)]="newMapping.erpProductCode" class="field-input"
                       placeholder="ex: CB12, CB24, EMB1, EMB2, CBG12\u2026" />
                <p class="field-hint">Entrez le code exact du produit tel qu'il existe dans votre ERP.</p>
              </div>
              <div class="field-group">
                <label class="field-label">Mod\xE8le de facture</label>
                <select [(ngModel)]="newMapping.invoiceModel" class="field-select">
                  <option *ngFor="let mod of MODELS" [value]="mod">{{ mod }}</option>
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn-secondary" (click)="showAddMapping = false">Annuler</button>
              <button class="btn-primary" (click)="addMapping()"
                      [disabled]="!newMapping.eleaderCode || !newMapping.erpProductCode">
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bouton Enregistrer -->
    <div class="actions-bar">
      <button class="btn-primary large" (click)="save()" [disabled]="saving">
        <span class="material-icons" *ngIf="!saving">save</span>
        <span class="material-icons spin" *ngIf="saving">refresh</span>
        {{ saving ? 'Enregistrement\u2026' : 'Enregistrer la configuration' }}
      </button>
    </div>
  </ng-container>
</div>
`, styles: ['/* src/app/modules/sales/components/eleader/eleader-config/eleader-config.component.scss */\n.config-page {\n  padding: 24px;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.page-header {\n  margin-bottom: 24px;\n}\n.page-header h2 {\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin: 0 0 4px;\n  color: var(--text-primary);\n}\n.page-header .subtitle {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n  margin: 0;\n}\n.card {\n  background: var(--bg-surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.card.mt-16 {\n  margin-top: 16px;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 20px;\n  background: var(--bg-elevated);\n  border-bottom: 1px solid var(--border);\n}\n.card-header h3 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  flex: 1;\n}\n.card-header .material-icons {\n  color: var(--text-muted);\n  font-size: 20px;\n}\n.card-header .required-badge {\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  background: var(--danger-bg);\n  color: var(--danger);\n  padding: 2px 8px;\n  border-radius: 99px;\n}\n.card-body {\n  padding: 20px;\n}\n.section-desc {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  margin: 0 0 16px;\n}\n.field-group {\n  margin-bottom: 16px;\n}\n.field-group.half {\n  flex: 1;\n}\n.field-row {\n  display: flex;\n  gap: 16px;\n}\n.field-label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 6px;\n}\n.field-hint {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin: 4px 0 0;\n}\n.field-input,\n.field-select {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  font-size: 0.875rem;\n  color: var(--text-primary);\n  background: var(--bg-surface);\n  transition: border-color 0.2s;\n}\n.field-input:focus,\n.field-select:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.field-input.error,\n.field-select.error {\n  border-color: var(--danger);\n}\n.field-input,\n.field-select {\n  box-sizing: border-box;\n}\n.toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n}\n.toggle-input {\n  display: none;\n}\n.toggle-track {\n  width: 40px;\n  height: 22px;\n  background: #cbd5e1;\n  border-radius: 99px;\n  position: relative;\n  transition: background 0.2s;\n}\n.toggle-track::after {\n  content: "";\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  width: 18px;\n  height: 18px;\n  background: var(--bg-surface);\n  border-radius: 50%;\n  transition: transform 0.2s;\n}\n.toggle-input:checked + .toggle-track {\n  background: var(--primary);\n}\n.toggle-input:checked + .toggle-track::after {\n  transform: translateX(18px);\n}\n.toggle-text {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.mapping-table {\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.mapping-table table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.mapping-table th {\n  background: var(--bg-elevated);\n  padding: 10px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.mapping-table td {\n  padding: 8px 12px;\n  border-top: 1px solid var(--border-light);\n}\n.inline-input,\n.inline-select {\n  width: 100%;\n  padding: 6px 10px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-size: 0.875rem;\n  color: var(--text-primary);\n  background: var(--bg-surface);\n}\n.inline-input:focus,\n.inline-select:focus {\n  outline: none;\n  border-color: var(--primary);\n}\n.empty-state {\n  text-align: center;\n  padding: 24px;\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 28px;\n  margin-bottom: 8px;\n  display: block;\n}\n.empty-state p {\n  margin: 0 0 4px;\n  font-size: 0.9rem;\n}\n.empty-state small {\n  font-size: 0.8rem;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-defaults {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  background: var(--success-bg);\n  color: #16a34a;\n  border: 1px solid var(--success-bg);\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-defaults .material-icons {\n  font-size: 16px;\n}\n.btn-defaults:hover {\n  background: var(--success-bg);\n}\n.btn-add {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  background: var(--primary);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-add .material-icons {\n  font-size: 18px;\n}\n.btn-add:hover {\n  background: var(--primary-dark);\n}\n.btn-icon {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 6px;\n  color: var(--text-muted);\n}\n.btn-icon .material-icons {\n  font-size: 18px;\n}\n.btn-icon:hover {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n}\n.btn-icon.danger:hover {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.actions-bar {\n  margin-top: 24px;\n  display: flex;\n  justify-content: flex-end;\n}\n.btn-primary,\n.btn-secondary {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: background 0.2s;\n}\n.btn-primary.large,\n.btn-secondary.large {\n  padding: 12px 28px;\n  font-size: 1rem;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary .material-icons,\n.btn-secondary .material-icons {\n  font-size: 18px;\n}\n.btn-primary {\n  background: var(--primary);\n  color: #fff;\n}\n.btn-primary:hover:not(:disabled) {\n  background: var(--primary-dark);\n}\n.btn-secondary {\n  background: var(--bg-elevated);\n  color: var(--text-secondary);\n  border: 1px solid var(--border);\n}\n.btn-secondary:hover {\n  background: var(--bg-elevated);\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-box {\n  background: var(--bg-surface);\n  border-radius: 12px;\n  width: 440px;\n  max-width: 95vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.modal-header h4 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.modal-body {\n  padding: 20px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 16px 20px;\n  border-top: 1px solid var(--border-light);\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 0.9rem;\n}\n.alert .material-icons {\n  font-size: 18px;\n}\n.alert.alert-success {\n  background: var(--success-bg);\n  color: #16a34a;\n  border: 1px solid var(--success-bg);\n}\n.alert.alert-error {\n  background: var(--danger-bg);\n  color: var(--danger);\n  border: 1px solid var(--danger-bg);\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-muted);\n  padding: 40px;\n  justify-content: center;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin {\n  animation: spin 0.8s linear infinite;\n  display: inline-block;\n}\n.consigne-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.consigne-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: var(--accent-light, #e0f2fe);\n  color: var(--accent, #0369a1);\n  border: 1px solid var(--accent, #0369a1);\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  font-family: monospace;\n}\n.consigne-tag .tag-remove {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  font-size: 14px;\n  line-height: 1;\n  padding: 0 2px;\n  margin-left: 2px;\n}\n.consigne-tag .tag-remove:hover {\n  opacity: 1;\n}\n.code-add-row {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.code-add-row .code-input {\n  flex: 1;\n  font-family: monospace;\n}\n.empty-hint {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  font-style: italic;\n  margin: 0 0 12px;\n}\n.field-error {\n  color: var(--danger);\n  font-size: 0.82rem;\n  margin: 6px 0 0;\n}\n/*# sourceMappingURL=eleader-config.component.css.map */\n'] }]
  }], () => [{ type: EleaderService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EleaderConfigComponent, { className: "EleaderConfigComponent", filePath: "app/modules/sales/components/eleader/eleader-config/eleader-config.component.ts", lineNumber: 14 });
})();
export {
  EleaderConfigComponent
};
//# sourceMappingURL=chunk-H5FBYBIM.js.map
