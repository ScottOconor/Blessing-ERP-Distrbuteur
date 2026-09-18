import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-NJUNWWEJ.js";

// src/app/shared/constants/consigne-codes.ts
var CONSIGNE_NAMES = {
  CB12: "CASIER BOUTEILLE 12",
  CB24: "CASIER BOUTEILLE 24",
  CB12M: "CASIER BOUTEILLE 12 (METAL)",
  CB24M: "CASIER BOUTEILLE 24 (METAL)",
  CV12: "CASIER VERRE 12",
  CV24: "CASIER VERRE 24",
  CBG12: "CASIER BOUTEILLE GUINNESS 12",
  CBG15: "CASIER BOUTEILLE GUINNESS 15",
  CBG24: "CASIER BOUTEILLE GUINNESS 24",
  CVG12: "CASIER VERRE GUINNESS 12",
  CVG15: "CASIER VERRE GUINNESS 15",
  CVG24: "CASIER VERRE GUINNESS 24",
  VIP12: "VIP 12",
  VIP24: "VIP 24",
  VCP12: "VCP 12",
  VCP24: "VCP 24",
  VIPG12: "VIP GUINNESS 12",
  VIPG15: "VIP GUINNESS 15",
  VIPG24: "VIP GUINNESS 24",
  EGUI12: "EMBALLAGE GUINNESS 12",
  EGUI15: "EMBALLAGE GUINNESS 15",
  EGUI24: "EMBALLAGE GUINNESS 24",
  PP: "PALETTE PLASTIQUE",
  PB: "PALETTE BOIS",
  TT: "TONNELET",
  BPM: "BOUTEILLE PET METAL",
  BGM: "BOUTEILLE GUINNESS METAL",
  CAIMET: "CAISSE METALLIQUE",
  CONS001: "CONSIGNE DIVERSE",
  INPN33: "EMBALLAGE INPN 33",
  EMB1: "EMBALLAGE 1",
  EMB2: "EMBALLAGE 2",
  EMB3: "EMBALLAGE 3",
  EMB4: "EMBALLAGE 4",
  EMB5: "EMBALLAGE 5",
  CAISMB: "CAISSE METAL BOUTEILLE",
  "PALT-V": "PALETTE VERRE",
  PALTPL: "PALETTE PLASTIQUE (PL)",
  PRC01: "PORTE-CASIER 01",
  ELV01: "ELEVATEUR 01"
};
var CONSIGNE_CODES = new Set(Object.keys(CONSIGNE_NAMES));

// src/app/shared/components/print-preview/print-preview.component.ts
var _c0 = () => [];
var _forTrack0 = ($index, $item) => $item.value;
function PrintPreviewComponent_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 15);
    \u0275\u0275domListener("click", function PrintPreviewComponent_Conditional_13_For_2_Template_button_click_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setFormat(f_r2.value));
    });
    \u0275\u0275domElementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.format === f_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r2.label, " ");
  }
}
function PrintPreviewComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, PrintPreviewComponent_Conditional_13_For_2_Template, 4, 4, "button", 14, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.FORMATS);
  }
}
function PrintPreviewComponent_Conditional_14_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 15);
    \u0275\u0275domListener("click", function PrintPreviewComponent_Conditional_14_For_2_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const f_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setFormat(f_r5.value));
    });
    \u0275\u0275domElementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const f_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.format === f_r5.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r5.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r5.label, " ");
  }
}
function PrintPreviewComponent_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PrintPreviewComponent_Conditional_14_For_2_Conditional_0_Template, 4, 4, "button", 14);
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    \u0275\u0275conditional(f_r5.value !== "ticket" ? 0 : -1);
  }
}
function PrintPreviewComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, PrintPreviewComponent_Conditional_14_For_2_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.FORMATS);
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 18);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("src", ctx_r2.companyLogoUrl, \u0275\u0275sanitizeUrl);
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("T\xE9l : ", ctx_r2.companyPhone);
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Entrep\xF4t : ", ctx_r2.invoice == null ? null : ctx_r2.invoice.warehouseName);
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2, "\xC9ch\xE9ance");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.fmtDate(ctx_r2.invoice == null ? null : ctx_r2.invoice.dateEcheance));
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2, "Commande");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.invoice == null ? null : ctx_r2.invoice.salesOrderName);
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2, "Notes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.invoice.notes);
  }
}
function PrintPreviewComponent_Conditional_17_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 32);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 33);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td", 33);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td", 50);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td", 35);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "td", 51);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "td", 33);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "td", 52);
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const l_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r6.productCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r6.quantity));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r6.prixUnitaire));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r6.prixUnitaireTTC ?? 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((l_r6.rabaisUnitaire ?? 0) > 0 ? "\u2013" + ctx_r2.fmt(l_r6.rabaisUnitaire) : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((l_r6.rabaisUnitaireTTC ?? 0) > 0 ? "\u2013" + ctx_r2.fmt(l_r6.rabaisUnitaireTTC) : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r6.montantHT));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r6.montantTTC));
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_52_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 55)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 32);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 33);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(7, "td", 56)(8, "td");
    \u0275\u0275domElementStart(9, "td", 33);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const l_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r7.productCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r7.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r7.quantity));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r7.montantTTC));
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 53)(1, "td", 54);
    \u0275\u0275text(2, "CONSIGNES");
    \u0275\u0275domElementEnd()();
    \u0275\u0275repeaterCreate(3, PrintPreviewComponent_Conditional_17_Conditional_52_For_4_Template, 11, 4, "tr", 55, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.consigneLines);
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_53_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 55)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 32);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 33);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(7, "td", 56)(8, "td");
    \u0275\u0275domElementStart(9, "td", 33);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const l_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r8.productCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r8.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r8.quantity));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r8.montantTTC));
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 57)(1, "td", 54);
    \u0275\u0275text(2, "D\xC9CONSIGNES");
    \u0275\u0275domElementEnd()();
    \u0275\u0275repeaterCreate(3, PrintPreviewComponent_Conditional_17_Conditional_53_For_4_Template, 11, 4, "tr", 55, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.deconsigneLines);
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_54_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 58)(1, "td", 59);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 33);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 33);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(7, "td")(8, "td")(9, "td");
    \u0275\u0275domElementStart(10, "td", 33);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "td", 33);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(r_r9.quantite));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(r_r9.montantUnitaire));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.fmt(r_r9.montantTotal));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(r_r9.montantTotal));
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 53)(1, "td", 54);
    \u0275\u0275text(2, "RISTOURNES (\xE0 r\xE9cup\xE9rer s\xE9par\xE9ment)");
    \u0275\u0275domElementEnd()();
    \u0275\u0275repeaterCreate(3, PrintPreviewComponent_Conditional_17_Conditional_54_For_4_Template, 14, 5, "tr", 58, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.invoice == null ? null : ctx_r2.invoice.ristourneDetails);
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 38)(1, "span");
    \u0275\u0275text(2, "Pr\xE9compte (PSA)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.invoice.totalPrecompte), " F");
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 39)(1, "span");
    \u0275\u0275text(2, "Frais d'enl\xE8vement");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("+ ", ctx_r2.fmt(ctx_r2.invoice == null ? null : ctx_r2.invoice.fraisEnlevementTTC), " F");
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 41)(1, "span");
    \u0275\u0275text(2, "Ristournes (\xE0 r\xE9cup\xE9rer)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.invoice == null ? null : ctx_r2.invoice.totalRistourne), " F");
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 38)(1, "span");
    \u0275\u0275text(2, "Rabais HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("- ", ctx_r2.fmt(ctx_r2.invoice == null ? null : ctx_r2.invoice.totalRabais), " F");
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 38)(1, "span");
    \u0275\u0275text(2, "Rabais TTC d\xE9duit");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("- ", ctx_r2.fmt(ctx_r2.invoice == null ? null : ctx_r2.invoice.totalRabaisTTC), " F");
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 43)(1, "span");
    \u0275\u0275text(2, "D\xE9j\xE0 pay\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.invoice == null ? null : ctx_r2.invoice.montantPaye), " F");
  }
}
function PrintPreviewComponent_Conditional_17_Conditional_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 44)(1, "span");
    \u0275\u0275text(2, "Reste d\xFB");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.invoice == null ? null : ctx_r2.invoice.montantDu), " F");
  }
}
function PrintPreviewComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 16)(2, "div", 17);
    \u0275\u0275conditionalCreate(3, PrintPreviewComponent_Conditional_17_Conditional_3_Template, 1, 1, "img", 18);
    \u0275\u0275domElementStart(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, PrintPreviewComponent_Conditional_17_Conditional_6_Template, 2, 1, "div", 20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "div", 21)(8, "div", 22);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "div", 23);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(12, "div", 24)(13, "div", 25)(14, "div", 26);
    \u0275\u0275text(15, "CLIENT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "div", 27);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(18, PrintPreviewComponent_Conditional_17_Conditional_18_Template, 2, 1, "div", 28);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "div", 29)(20, "div", 30)(21, "span");
    \u0275\u0275text(22, "Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(25, PrintPreviewComponent_Conditional_17_Conditional_25_Template, 5, 1, "div", 30);
    \u0275\u0275conditionalCreate(26, PrintPreviewComponent_Conditional_17_Conditional_26_Template, 5, 1, "div", 30);
    \u0275\u0275conditionalCreate(27, PrintPreviewComponent_Conditional_17_Conditional_27_Template, 5, 1, "div", 30);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(28, "table", 31)(29, "thead")(30, "tr")(31, "th");
    \u0275\u0275text(32, "Code");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(33, "th", 32);
    \u0275\u0275text(34, "D\xE9signation");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(35, "th", 33);
    \u0275\u0275text(36, "Qt\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(37, "th", 33);
    \u0275\u0275text(38, "P.U.HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(39, "th", 33);
    \u0275\u0275text(40, "P.U.TTC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(41, "th", 33);
    \u0275\u0275text(42, "Rabais HT/u");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(43, "th", 33);
    \u0275\u0275text(44, "Rabais TTC/u");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(45, "th", 33);
    \u0275\u0275text(46, "Mnt HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(47, "th", 33);
    \u0275\u0275text(48, "Mnt TTC");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(49, "tbody");
    \u0275\u0275repeaterCreate(50, PrintPreviewComponent_Conditional_17_For_51_Template, 19, 9, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(52, PrintPreviewComponent_Conditional_17_Conditional_52_Template, 5, 0);
    \u0275\u0275conditionalCreate(53, PrintPreviewComponent_Conditional_17_Conditional_53_Template, 5, 0);
    \u0275\u0275conditionalCreate(54, PrintPreviewComponent_Conditional_17_Conditional_54_Template, 5, 0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(55, "table", 34)(56, "thead")(57, "tr")(58, "th");
    \u0275\u0275text(59, "Total Colis");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(60, "th");
    \u0275\u0275text(61, "Total PET");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(62, "th");
    \u0275\u0275text(63, "Total Casier");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(64, "th");
    \u0275\u0275text(65, "Liq. Nu");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(66, "th");
    \u0275\u0275text(67, "Consigne (F)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(68, "th");
    \u0275\u0275text(69, "D\xE9consigne (F)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(70, "th");
    \u0275\u0275text(71, "Qt\xE9 Csgn");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(72, "th");
    \u0275\u0275text(73, "Qt\xE9 Dcsgn");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(74, "tbody")(75, "tr")(76, "td", 33);
    \u0275\u0275text(77);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(78, "td", 33);
    \u0275\u0275text(79);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(80, "td", 33);
    \u0275\u0275text(81);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(82, "td", 33);
    \u0275\u0275text(83);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(84, "td", 33);
    \u0275\u0275text(85);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(86, "td", 35);
    \u0275\u0275text(87);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(88, "td", 33);
    \u0275\u0275text(89);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(90, "td", 35);
    \u0275\u0275text(91);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(92, "div", 36)(93, "div", 37)(94, "div", 38)(95, "span");
    \u0275\u0275text(96, "Total HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(97, "span");
    \u0275\u0275text(98);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(99, "div", 38)(100, "span");
    \u0275\u0275text(101, "TVA (19,25%)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(102, "span");
    \u0275\u0275text(103);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(104, PrintPreviewComponent_Conditional_17_Conditional_104_Template, 5, 1, "div", 38);
    \u0275\u0275conditionalCreate(105, PrintPreviewComponent_Conditional_17_Conditional_105_Template, 5, 1, "div", 39);
    \u0275\u0275domElementStart(106, "div", 40)(107, "span");
    \u0275\u0275text(108, "Total TTC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(109, "span");
    \u0275\u0275text(110);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(111, PrintPreviewComponent_Conditional_17_Conditional_111_Template, 5, 1, "div", 41);
    \u0275\u0275conditionalCreate(112, PrintPreviewComponent_Conditional_17_Conditional_112_Template, 5, 1, "div", 38);
    \u0275\u0275conditionalCreate(113, PrintPreviewComponent_Conditional_17_Conditional_113_Template, 5, 1, "div", 38);
    \u0275\u0275domElementStart(114, "div", 42)(115, "span");
    \u0275\u0275text(116, "NET \xC0 PAYER");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(117, "span");
    \u0275\u0275text(118);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(119, PrintPreviewComponent_Conditional_17_Conditional_119_Template, 5, 1, "div", 43);
    \u0275\u0275conditionalCreate(120, PrintPreviewComponent_Conditional_17_Conditional_120_Template, 5, 1, "div", 44);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(121, "div", 45);
    \u0275\u0275text(122, " Arr\xEAt\xE9 \xE0 la somme de : ");
    \u0275\u0275domElementStart(123, "strong");
    \u0275\u0275text(124);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(125, "div", 46)(126, "div", 47)(127, "div", 48);
    \u0275\u0275text(128, "Signature du livreur");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(129, "div", 49);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(130, "div", 47)(131, "div", 48);
    \u0275\u0275text(132, "Cachet et signature du client");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(133, "div", 49);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.companyLogoUrl ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.companyName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.companyPhone ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.docTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.invoice == null ? null : ctx_r2.invoice.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.invoice == null ? null : ctx_r2.invoice.partnerName);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.invoice == null ? null : ctx_r2.invoice.warehouseName) ? 18 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.fmtDate(ctx_r2.invoice == null ? null : ctx_r2.invoice.date));
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.invoice == null ? null : ctx_r2.invoice.dateEcheance) ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.invoice == null ? null : ctx_r2.invoice.salesOrderName) ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.invoice == null ? null : ctx_r2.invoice.notes) ? 27 : -1);
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r2.salesLines);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.consigneLines.length ? 52 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.deconsigneLines.length ? 53 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.invoice == null ? null : ctx_r2.invoice.ristourneDetails == null ? null : ctx_r2.invoice.ristourneDetails.length) ? 54 : -1);
    \u0275\u0275advance(23);
    \u0275\u0275textInterpolate(ctx_r2.fmt(ctx_r2.totalColis));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(ctx_r2.totalPET));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(ctx_r2.totalCasier));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt((ctx_r2.invoice == null ? null : ctx_r2.invoice.totalLiquideNu) ?? 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(ctx_r2.consigneMontant));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2013 ", ctx_r2.fmt(ctx_r2.deconsigneMontant));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(ctx_r2.qteConsigne));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2013 ", ctx_r2.fmt(ctx_r2.qteDeconsigne));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.invoice == null ? null : ctx_r2.invoice.totalHT), " F");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.invoice == null ? null : ctx_r2.invoice.totalTVA), " F");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.invoice == null ? null : ctx_r2.invoice.totalPrecompte) ? 104 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((ctx_r2.invoice == null ? null : ctx_r2.invoice.fraisEnlevementTTC) ?? 0) > 0 ? 105 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.invoice == null ? null : ctx_r2.invoice.totalTTC), " F");
    \u0275\u0275advance();
    \u0275\u0275conditional(((ctx_r2.invoice == null ? null : ctx_r2.invoice.totalRistourne) ?? 0) > 0 ? 111 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((ctx_r2.invoice == null ? null : ctx_r2.invoice.totalRabais) ?? 0) > 0 ? 112 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((ctx_r2.invoice == null ? null : ctx_r2.invoice.totalRabaisTTC) ?? 0) > 0 ? 113 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt((ctx_r2.invoice == null ? null : ctx_r2.invoice.netAPayer) ?? (ctx_r2.invoice == null ? null : ctx_r2.invoice.totalTTC)), " F");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.invoice == null ? null : ctx_r2.invoice.montantPaye) ? 119 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.invoice == null ? null : ctx_r2.invoice.montantDu) ? 120 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.montantEnLettres((ctx_r2.invoice == null ? null : ctx_r2.invoice.netAPayer) ?? (ctx_r2.invoice == null ? null : ctx_r2.invoice.totalTTC)));
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 60);
    \u0275\u0275domElement(1, "img", 77);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", ctx_r2.companyLogoUrl, \u0275\u0275sanitizeUrl);
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 62);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.companyPhone);
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 66)(1, "span");
    \u0275\u0275text(2, "Notes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.invoice.notes);
  }
}
function PrintPreviewComponent_Conditional_18_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 78);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "div", 79)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 80);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const l_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r10.productCode || l_r10.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r2.fmt(l_r10.quantity), " \xD7 ", ctx_r2.fmt(l_r10.prixUnitaireTTC ?? l_r10.prixUnitaire));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(l_r10.montantTTC), " F");
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_25_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 78);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "div", 79)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const l_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r11.productCode || l_r11.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r11.quantity));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(l_r11.montantTTC), " F");
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 81);
    \u0275\u0275text(1, "\u2014 Consignes \u2014");
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(2, PrintPreviewComponent_Conditional_18_Conditional_25_For_3_Template, 7, 3, null, null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.consigneLines);
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_26_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 78);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "div", 79)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const l_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r12.productCode || l_r12.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r12.quantity));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("-", ctx_r2.fmt(l_r12.montantTTC), " F");
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 81);
    \u0275\u0275text(1, "\u2014 D\xE9consignes \u2014");
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(2, PrintPreviewComponent_Conditional_18_Conditional_26_For_3_Template, 7, 3, null, null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.deconsigneLines);
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2, "Total PET");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.fmt(ctx_r2.totalPET));
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2, "Total Casier");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.fmt(ctx_r2.totalCasier));
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2, "Liq. Nu");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.invoice == null ? null : ctx_r2.invoice.totalLiquideNu), " F");
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2, "Consigne");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.consigneMontant), " F");
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2, "D\xE9consigne");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2013 ", ctx_r2.fmt(ctx_r2.deconsigneMontant), " F");
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2, "PSA");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.invoice.totalPrecompte), " F");
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2, "Frais enl\xE8v.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("+ ", ctx_r2.fmt(ctx_r2.invoice == null ? null : ctx_r2.invoice.fraisEnlevementTTC), " F");
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 82);
    \u0275\u0275domElementStart(1, "div", 83);
    \u0275\u0275text(2, "RISTOURNES (\xE0 r\xE9cup\xE9rer)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 84)(4, "span");
    \u0275\u0275text(5, "Total ristournes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElement(8, "div", 82);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.invoice == null ? null : ctx_r2.invoice.totalRistourne), " F");
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2, "Rabais HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("- ", ctx_r2.fmt(ctx_r2.invoice == null ? null : ctx_r2.invoice.totalRabais), " F");
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2, "Rabais TTC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("- ", ctx_r2.fmt(ctx_r2.invoice == null ? null : ctx_r2.invoice.totalRabaisTTC), " F");
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2, "D\xE9j\xE0 pay\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.invoice.montantPaye), " F");
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2, "Reste d\xFB");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.invoice == null ? null : ctx_r2.invoice.montantDu), " F");
  }
}
function PrintPreviewComponent_Conditional_18_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 67)(1, "span");
    \u0275\u0275text(2, "Agent");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.invoice.createdBy);
  }
}
function PrintPreviewComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, PrintPreviewComponent_Conditional_18_Conditional_1_Template, 2, 1, "div", 60);
    \u0275\u0275domElementStart(2, "div", 61);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, PrintPreviewComponent_Conditional_18_Conditional_4_Template, 2, 1, "div", 62);
    \u0275\u0275domElement(5, "div", 63);
    \u0275\u0275domElementStart(6, "div", 64);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 65);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(10, "div", 63);
    \u0275\u0275domElementStart(11, "div", 66)(12, "span");
    \u0275\u0275text(13, "Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div", 66)(17, "span");
    \u0275\u0275text(18, "Client");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(21, PrintPreviewComponent_Conditional_18_Conditional_21_Template, 5, 1, "div", 66);
    \u0275\u0275domElement(22, "div", 63);
    \u0275\u0275repeaterCreate(23, PrintPreviewComponent_Conditional_18_For_24_Template, 7, 4, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(25, PrintPreviewComponent_Conditional_18_Conditional_25_Template, 4, 0);
    \u0275\u0275conditionalCreate(26, PrintPreviewComponent_Conditional_18_Conditional_26_Template, 4, 0);
    \u0275\u0275domElement(27, "div", 63);
    \u0275\u0275domElementStart(28, "div", 67)(29, "span");
    \u0275\u0275text(30, "Total Colis");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(33, PrintPreviewComponent_Conditional_18_Conditional_33_Template, 5, 1, "div", 67);
    \u0275\u0275conditionalCreate(34, PrintPreviewComponent_Conditional_18_Conditional_34_Template, 5, 1, "div", 67);
    \u0275\u0275conditionalCreate(35, PrintPreviewComponent_Conditional_18_Conditional_35_Template, 5, 1, "div", 67);
    \u0275\u0275conditionalCreate(36, PrintPreviewComponent_Conditional_18_Conditional_36_Template, 5, 1, "div", 67);
    \u0275\u0275conditionalCreate(37, PrintPreviewComponent_Conditional_18_Conditional_37_Template, 5, 1, "div", 67);
    \u0275\u0275domElement(38, "div", 63);
    \u0275\u0275domElementStart(39, "div", 67)(40, "span");
    \u0275\u0275text(41, "Total HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(42, "span");
    \u0275\u0275text(43);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(44, "div", 67)(45, "span");
    \u0275\u0275text(46, "TVA 19,25%");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(49, PrintPreviewComponent_Conditional_18_Conditional_49_Template, 5, 1, "div", 67);
    \u0275\u0275conditionalCreate(50, PrintPreviewComponent_Conditional_18_Conditional_50_Template, 5, 1, "div", 67);
    \u0275\u0275domElementStart(51, "div", 68)(52, "span");
    \u0275\u0275text(53, "Total TTC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(54, "span");
    \u0275\u0275text(55);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(56, PrintPreviewComponent_Conditional_18_Conditional_56_Template, 9, 1);
    \u0275\u0275conditionalCreate(57, PrintPreviewComponent_Conditional_18_Conditional_57_Template, 5, 1, "div", 67);
    \u0275\u0275conditionalCreate(58, PrintPreviewComponent_Conditional_18_Conditional_58_Template, 5, 1, "div", 67);
    \u0275\u0275domElement(59, "div", 63);
    \u0275\u0275domElementStart(60, "div", 69)(61, "span");
    \u0275\u0275text(62, "NET \xC0 PAYER");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(63, "span");
    \u0275\u0275text(64);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(65, PrintPreviewComponent_Conditional_18_Conditional_65_Template, 5, 1, "div", 67);
    \u0275\u0275conditionalCreate(66, PrintPreviewComponent_Conditional_18_Conditional_66_Template, 5, 1, "div", 67);
    \u0275\u0275domElement(67, "div", 63);
    \u0275\u0275domElementStart(68, "div", 70);
    \u0275\u0275text(69);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(70, "div", 71);
    \u0275\u0275text(71, "Merci de votre confiance !");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(72, PrintPreviewComponent_Conditional_18_Conditional_72_Template, 5, 1, "div", 67);
    \u0275\u0275domElement(73, "div", 63);
    \u0275\u0275domElementStart(74, "div", 72)(75, "div", 73);
    \u0275\u0275text(76, "Signature du livreur");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(77, "div", 74);
    \u0275\u0275text(78, "Nom : ___________________________");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(79, "div", 75);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(80, "div", 76)(81, "div", 73);
    \u0275\u0275text(82, "Cachet & signature client");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(83, "div", 74);
    \u0275\u0275text(84, "Nom : ___________________________");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(85, "div", 75);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.companyLogoUrl ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.companyName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.companyPhone ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.docTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.invoice == null ? null : ctx_r2.invoice.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.fmtDate(ctx_r2.invoice == null ? null : ctx_r2.invoice.date));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.invoice == null ? null : ctx_r2.invoice.partnerName);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.invoice == null ? null : ctx_r2.invoice.notes) ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.salesLines);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.consigneLines.length ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.deconsigneLines.length ? 26 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.fmt(ctx_r2.totalColis));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.totalPET > 0 ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.totalCasier > 0 ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((ctx_r2.invoice == null ? null : ctx_r2.invoice.totalLiquideNu) ?? 0) > 0 ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.consigneMontant > 0 ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.deconsigneMontant > 0 ? 37 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.invoice == null ? null : ctx_r2.invoice.totalHT), " F");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.invoice == null ? null : ctx_r2.invoice.totalTVA), " F");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.invoice == null ? null : ctx_r2.invoice.totalPrecompte) ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((ctx_r2.invoice == null ? null : ctx_r2.invoice.fraisEnlevementTTC) ?? 0) > 0 ? 50 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.invoice == null ? null : ctx_r2.invoice.totalTTC), " F");
    \u0275\u0275advance();
    \u0275\u0275conditional(((ctx_r2.invoice == null ? null : ctx_r2.invoice.totalRistourne) ?? 0) > 0 ? 56 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((ctx_r2.invoice == null ? null : ctx_r2.invoice.totalRabais) ?? 0) > 0 ? 57 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((ctx_r2.invoice == null ? null : ctx_r2.invoice.totalRabaisTTC) ?? 0) > 0 ? 58 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt((ctx_r2.invoice == null ? null : ctx_r2.invoice.netAPayer) ?? (ctx_r2.invoice == null ? null : ctx_r2.invoice.totalTTC)), " F");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.invoice == null ? null : ctx_r2.invoice.montantPaye) ? 65 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((ctx_r2.invoice == null ? null : ctx_r2.invoice.montantDu) ?? 0) > 0 ? 66 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.montantEnLettres((ctx_r2.invoice == null ? null : ctx_r2.invoice.netAPayer) ?? (ctx_r2.invoice == null ? null : ctx_r2.invoice.totalTTC)));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r2.invoice == null ? null : ctx_r2.invoice.createdBy) ? 72 : -1);
  }
}
function PrintPreviewComponent_Conditional_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 18);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("src", ctx_r2.companyLogoUrl, \u0275\u0275sanitizeUrl);
  }
}
function PrintPreviewComponent_Conditional_19_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("T\xE9l : ", ctx_r2.companyPhone);
  }
}
function PrintPreviewComponent_Conditional_19_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2, "Origine");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.picking == null ? null : ctx_r2.picking.origin);
  }
}
function PrintPreviewComponent_Conditional_19_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2, "Notes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.picking == null ? null : ctx_r2.picking.notes);
  }
}
function PrintPreviewComponent_Conditional_19_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 89);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 32);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td", 33);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td", 52);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const m_r13 = ctx.$implicit;
    const $index_r14 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate($index_r14 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r13.productCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r13.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(m_r13.qtyDemanded));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(m_r13.qtyDone ?? m_r13.qtyDemanded));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r13.uomName);
  }
}
function PrintPreviewComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 16)(2, "div", 17);
    \u0275\u0275conditionalCreate(3, PrintPreviewComponent_Conditional_19_Conditional_3_Template, 1, 1, "img", 18);
    \u0275\u0275domElementStart(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, PrintPreviewComponent_Conditional_19_Conditional_6_Template, 2, 1, "div", 20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "div", 21)(8, "div", 22);
    \u0275\u0275text(9, "BON DE LIVRAISON");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "div", 23);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(12, "div", 24)(13, "div", 25)(14, "div", 26);
    \u0275\u0275text(15, "CLIENT / DESTINATAIRE");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "div", 27);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "div", 29)(19, "div", 30)(20, "span");
    \u0275\u0275text(21, "Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(24, PrintPreviewComponent_Conditional_19_Conditional_24_Template, 5, 1, "div", 30);
    \u0275\u0275conditionalCreate(25, PrintPreviewComponent_Conditional_19_Conditional_25_Template, 5, 1, "div", 30);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(26, "table", 31)(27, "thead")(28, "tr")(29, "th", 33);
    \u0275\u0275text(30, "#");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(31, "th");
    \u0275\u0275text(32, "Code");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(33, "th", 32);
    \u0275\u0275text(34, "D\xE9signation");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(35, "th", 33);
    \u0275\u0275text(36, "Qt\xE9 dem.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(37, "th", 33);
    \u0275\u0275text(38, "Qt\xE9 livr\xE9e");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(39, "th");
    \u0275\u0275text(40, "U.M.");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(41, "tbody");
    \u0275\u0275repeaterCreate(42, PrintPreviewComponent_Conditional_19_For_43_Template, 13, 6, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(44, "tfoot")(45, "tr")(46, "td", 85);
    \u0275\u0275text(47, "TOTAL COLIS LIVR\xC9S");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(48, "td", 86);
    \u0275\u0275text(49);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(50, "td");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(51, "div", 46)(52, "div", 47)(53, "div", 48);
    \u0275\u0275text(54, "Signature du livreur");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(55, "div", 87);
    \u0275\u0275text(56, "Nom : ________________________");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(57, "div", 49);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(58, "div", 47)(59, "div", 48);
    \u0275\u0275text(60, "Cachet et signature du client");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(61, "div", 87);
    \u0275\u0275text(62, "Nom : ________________________");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(63, "div", 49);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(64, "div", 88);
    \u0275\u0275text(65);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.companyLogoUrl ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.companyName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.companyPhone ? 6 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.picking == null ? null : ctx_r2.picking.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r2.picking == null ? null : ctx_r2.picking.partnerName) || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.fmtDate(ctx_r2.picking == null ? null : ctx_r2.picking.scheduledDate));
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.picking == null ? null : ctx_r2.picking.origin) ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.picking == null ? null : ctx_r2.picking.notes) ? 25 : -1);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.pickingMoves);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.fmt(ctx_r2.totalPickingQty));
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate1("Document non contractuel \xB7 ", ctx_r2.companyName);
  }
}
function PrintPreviewComponent_Conditional_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 18);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("src", ctx_r2.companyLogoUrl, \u0275\u0275sanitizeUrl);
  }
}
function PrintPreviewComponent_Conditional_20_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("T\xE9l : ", ctx_r2.companyPhone);
  }
}
function PrintPreviewComponent_Conditional_20_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2, "\xC9ch\xE9ance");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.fmtDate(ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.dateEcheance));
  }
}
function PrintPreviewComponent_Conditional_20_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2, "Commande");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.purchaseOrderName);
  }
}
function PrintPreviewComponent_Conditional_20_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2, "R\xE9f.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.purchaseInvoice.notes);
  }
}
function PrintPreviewComponent_Conditional_20_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 32);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 33);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td", 33);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td", 50);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td", 35);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "td", 51);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "td", 33);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "td", 52);
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const l_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r15.productCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r15.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r15.quantity));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r15.prixUnitaire + (l_r15.rabaisUnitaire ?? 0)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt((l_r15.prixUnitaire + (l_r15.rabaisUnitaire ?? 0)) * (1 + (l_r15.tauxTVA ?? 0) / 100)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((l_r15.rabaisUnitaire ?? 0) > 0 ? "\u2013" + ctx_r2.fmt(l_r15.rabaisUnitaire) : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((l_r15.rabaisUnitaire ?? 0) > 0 ? "\u2013" + ctx_r2.fmt((l_r15.rabaisUnitaire ?? 0) * (1 + (l_r15.tauxTVA ?? 0) / 100)) : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r15.montantHT));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt((l_r15.montantHT ?? 0) + (l_r15.montantTVA ?? 0) + (l_r15.precompte ?? 0)));
  }
}
function PrintPreviewComponent_Conditional_20_Conditional_51_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 55)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 32);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 33);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(7, "td", 56)(8, "td");
    \u0275\u0275domElementStart(9, "td", 33);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const l_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r16.productCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r16.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r16.quantity));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r16.montantTTC));
  }
}
function PrintPreviewComponent_Conditional_20_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 53)(1, "td", 54);
    \u0275\u0275text(2, "CONSIGNES");
    \u0275\u0275domElementEnd()();
    \u0275\u0275repeaterCreate(3, PrintPreviewComponent_Conditional_20_Conditional_51_For_4_Template, 11, 4, "tr", 55, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.purchaseConsigneLines);
  }
}
function PrintPreviewComponent_Conditional_20_Conditional_52_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 55)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 32);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 33);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(7, "td", 56)(8, "td");
    \u0275\u0275domElementStart(9, "td", 33);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const l_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r17.productCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r17.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r17.quantity));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r17.montantTTC));
  }
}
function PrintPreviewComponent_Conditional_20_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 57)(1, "td", 54);
    \u0275\u0275text(2, "D\xC9CONSIGNES");
    \u0275\u0275domElementEnd()();
    \u0275\u0275repeaterCreate(3, PrintPreviewComponent_Conditional_20_Conditional_52_For_4_Template, 11, 4, "tr", 55, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.purchaseDeconsigneLines);
  }
}
function PrintPreviewComponent_Conditional_20_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 38)(1, "span");
    \u0275\u0275text(2, "Pr\xE9compte (PSA)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.totalPrecompte), " F");
  }
}
function PrintPreviewComponent_Conditional_20_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 39)(1, "span");
    \u0275\u0275text(2, "Frais d'enl\xE8vement");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("+ ", ctx_r2.fmt(ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.fraisEnlevementTTC), " F");
  }
}
function PrintPreviewComponent_Conditional_20_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 41)(1, "span");
    \u0275\u0275text(2, "Rabais HT (601901)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2013 ", ctx_r2.fmt(ctx_r2.purchaseTotalRabaisHT), " F");
  }
}
function PrintPreviewComponent_Conditional_20_Conditional_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 38)(1, "span");
    \u0275\u0275text(2, "Rabais TTC d\xE9duit");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2013 ", ctx_r2.fmt(ctx_r2.purchaseTotalRabaisTTC), " F");
  }
}
function PrintPreviewComponent_Conditional_20_Conditional_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 43)(1, "span");
    \u0275\u0275text(2, "D\xE9j\xE0 pay\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.montantPaye), " F");
  }
}
function PrintPreviewComponent_Conditional_20_Conditional_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 44)(1, "span");
    \u0275\u0275text(2, "Reste d\xFB");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.montantDu), " F");
  }
}
function PrintPreviewComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 16)(2, "div", 17);
    \u0275\u0275conditionalCreate(3, PrintPreviewComponent_Conditional_20_Conditional_3_Template, 1, 1, "img", 18);
    \u0275\u0275domElementStart(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, PrintPreviewComponent_Conditional_20_Conditional_6_Template, 2, 1, "div", 20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "div", 21)(8, "div", 22);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "div", 23);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(12, "div", 24)(13, "div", 25)(14, "div", 26);
    \u0275\u0275text(15, "FOURNISSEUR");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "div", 27);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "div", 29)(19, "div", 30)(20, "span");
    \u0275\u0275text(21, "Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(24, PrintPreviewComponent_Conditional_20_Conditional_24_Template, 5, 1, "div", 30);
    \u0275\u0275conditionalCreate(25, PrintPreviewComponent_Conditional_20_Conditional_25_Template, 5, 1, "div", 30);
    \u0275\u0275conditionalCreate(26, PrintPreviewComponent_Conditional_20_Conditional_26_Template, 5, 1, "div", 30);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(27, "table", 31)(28, "thead")(29, "tr")(30, "th");
    \u0275\u0275text(31, "Code");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(32, "th", 32);
    \u0275\u0275text(33, "D\xE9signation");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(34, "th", 33);
    \u0275\u0275text(35, "Qt\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(36, "th", 33);
    \u0275\u0275text(37, "P.U.HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(38, "th", 33);
    \u0275\u0275text(39, "P.U.TTC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(40, "th", 33);
    \u0275\u0275text(41, "Rabais HT/u");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(42, "th", 33);
    \u0275\u0275text(43, "Rabais TTC/u");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(44, "th", 33);
    \u0275\u0275text(45, "Mnt HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(46, "th", 33);
    \u0275\u0275text(47, "Mnt TTC");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(48, "tbody");
    \u0275\u0275repeaterCreate(49, PrintPreviewComponent_Conditional_20_For_50_Template, 19, 9, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(51, PrintPreviewComponent_Conditional_20_Conditional_51_Template, 5, 0);
    \u0275\u0275conditionalCreate(52, PrintPreviewComponent_Conditional_20_Conditional_52_Template, 5, 0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(53, "table", 34)(54, "thead")(55, "tr")(56, "th");
    \u0275\u0275text(57, "Total Colis");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(58, "th");
    \u0275\u0275text(59, "Total PET");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(60, "th");
    \u0275\u0275text(61, "Total Casier");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(62, "th");
    \u0275\u0275text(63, "Liq. Nu");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(64, "th");
    \u0275\u0275text(65, "Consigne (F)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(66, "th");
    \u0275\u0275text(67, "D\xE9consigne (F)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(68, "th");
    \u0275\u0275text(69, "Qt\xE9 Csgn");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(70, "th");
    \u0275\u0275text(71, "Qt\xE9 Dcsgn");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(72, "tbody")(73, "tr")(74, "td", 33);
    \u0275\u0275text(75);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(76, "td", 33);
    \u0275\u0275text(77);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(78, "td", 33);
    \u0275\u0275text(79, "0");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(80, "td", 33);
    \u0275\u0275text(81);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(82, "td", 33);
    \u0275\u0275text(83);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(84, "td", 35);
    \u0275\u0275text(85);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(86, "td", 33);
    \u0275\u0275text(87);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(88, "td", 35);
    \u0275\u0275text(89);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(90, "div", 36)(91, "div", 37)(92, "div", 38)(93, "span");
    \u0275\u0275text(94, "Total HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(95, "span");
    \u0275\u0275text(96);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(97, "div", 38)(98, "span");
    \u0275\u0275text(99, "TVA (19,25%)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(100, "span");
    \u0275\u0275text(101);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(102, PrintPreviewComponent_Conditional_20_Conditional_102_Template, 5, 1, "div", 38);
    \u0275\u0275conditionalCreate(103, PrintPreviewComponent_Conditional_20_Conditional_103_Template, 5, 1, "div", 39);
    \u0275\u0275domElementStart(104, "div", 40)(105, "span");
    \u0275\u0275text(106, "Total TTC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(107, "span");
    \u0275\u0275text(108);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(109, PrintPreviewComponent_Conditional_20_Conditional_109_Template, 5, 1, "div", 41);
    \u0275\u0275conditionalCreate(110, PrintPreviewComponent_Conditional_20_Conditional_110_Template, 5, 1, "div", 38);
    \u0275\u0275domElementStart(111, "div", 42)(112, "span");
    \u0275\u0275text(113, "NET \xC0 PAYER");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(114, "span");
    \u0275\u0275text(115);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(116, PrintPreviewComponent_Conditional_20_Conditional_116_Template, 5, 1, "div", 43);
    \u0275\u0275conditionalCreate(117, PrintPreviewComponent_Conditional_20_Conditional_117_Template, 5, 1, "div", 44);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(118, "div", 45);
    \u0275\u0275text(119, " Arr\xEAt\xE9 \xE0 la somme de : ");
    \u0275\u0275domElementStart(120, "strong");
    \u0275\u0275text(121);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(122, "div", 46)(123, "div", 47)(124, "div", 48);
    \u0275\u0275text(125, "Signature du fournisseur");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(126, "div", 49);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(127, "div", 47)(128, "div", 48);
    \u0275\u0275text(129, "Cachet et signature");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(130, "div", 49);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.companyLogoUrl ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.companyName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.companyPhone ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.docTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.partnerName);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.fmtDate(ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.date));
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.dateEcheance) ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.purchaseOrderName) ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.notes) ? 26 : -1);
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r2.purchaseNormalLines);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.purchaseConsigneLines.length ? 51 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.purchaseDeconsigneLines.length ? 52 : -1);
    \u0275\u0275advance(23);
    \u0275\u0275textInterpolate(ctx_r2.fmt(ctx_r2.purchaseTotalColis));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(ctx_r2.purchaseTotalPET));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.fmt((ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.totalLiquideNu) ?? 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(ctx_r2.purchaseConsigneMontant));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2013 ", ctx_r2.fmt(ctx_r2.purchaseDeconsigneMontant));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(ctx_r2.purchaseQteConsigne));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2013 ", ctx_r2.fmt(ctx_r2.purchaseQteDeconsigne));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.totalHT), " F");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.totalTVA), " F");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.totalPrecompte) ? 102 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.fraisEnlevementTTC) ?? 0) > 0 ? 103 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.totalTTC), " F");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.purchaseTotalRabaisHT > 0 ? 109 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.purchaseTotalRabaisTTC > 0 ? 110 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt((ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.netAPayer) ?? (ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.totalTTC)), " F");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.montantPaye) ? 116 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.montantDu) ?? 0) > 0.01 ? 117 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.montantEnLettres((ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.netAPayer) ?? (ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.totalTTC)));
  }
}
function PrintPreviewComponent_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 60);
    \u0275\u0275domElement(1, "img", 77);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", ctx_r2.companyLogoUrl, \u0275\u0275sanitizeUrl);
  }
}
function PrintPreviewComponent_Conditional_21_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 62);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.companyPhone);
  }
}
function PrintPreviewComponent_Conditional_21_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 78);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "div", 79)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 80);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const l_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r18.description || l_r18.productCode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r2.fmt(l_r18.quantity), " \xD7 ", ctx_r2.fmt(l_r18.prixUnitaire));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(l_r18.montantTTC), " F");
  }
}
function PrintPreviewComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, PrintPreviewComponent_Conditional_21_Conditional_1_Template, 2, 1, "div", 60);
    \u0275\u0275domElementStart(2, "div", 61);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, PrintPreviewComponent_Conditional_21_Conditional_4_Template, 2, 1, "div", 62);
    \u0275\u0275domElement(5, "div", 63);
    \u0275\u0275domElementStart(6, "div", 64);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 65);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(10, "div", 63);
    \u0275\u0275domElementStart(11, "div", 66)(12, "span");
    \u0275\u0275text(13, "Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div", 66)(17, "span");
    \u0275\u0275text(18, "Fournisseur");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElement(21, "div", 63);
    \u0275\u0275repeaterCreate(22, PrintPreviewComponent_Conditional_21_For_23_Template, 7, 4, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElement(24, "div", 63);
    \u0275\u0275domElementStart(25, "div", 67)(26, "span");
    \u0275\u0275text(27, "Total HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(30, "div", 67)(31, "span");
    \u0275\u0275text(32, "TVA");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElement(35, "div", 63);
    \u0275\u0275domElementStart(36, "div", 69)(37, "span");
    \u0275\u0275text(38, "NET \xC0 PAYER");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(39, "span");
    \u0275\u0275text(40);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElement(41, "div", 63);
    \u0275\u0275domElementStart(42, "div", 70);
    \u0275\u0275text(43);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.companyLogoUrl ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.companyName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.companyPhone ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.docTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.fmtDate(ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.date));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.partnerName);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.purchaseInvoiceLines);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.totalHT), " F");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.totalTVA), " F");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt((ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.netAPayer) ?? (ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.totalTTC)), " F");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.montantEnLettres((ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.netAPayer) ?? (ctx_r2.purchaseInvoice == null ? null : ctx_r2.purchaseInvoice.totalTTC)));
  }
}
function PrintPreviewComponent_Conditional_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 18);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("src", ctx_r2.companyLogoUrl, \u0275\u0275sanitizeUrl);
  }
}
function PrintPreviewComponent_Conditional_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("T\xE9l : ", ctx_r2.companyPhone);
  }
}
function PrintPreviewComponent_Conditional_22_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2, "Livraison pr\xE9vue");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.fmtDate(ctx_r2.purchaseOrder == null ? null : ctx_r2.purchaseOrder.dateExpected));
  }
}
function PrintPreviewComponent_Conditional_22_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2, "Notes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.purchaseOrder == null ? null : ctx_r2.purchaseOrder.notes);
  }
}
function PrintPreviewComponent_Conditional_22_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 89);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 32);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td", 33);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td", 33);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td", 33);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "td", 33);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "td", 52);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const l_r19 = ctx.$implicit;
    const $index_r20 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate($index_r20 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r19.productCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r19.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r19.quantity));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r19.prixUnitaire));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r19.tauxTVA ? l_r19.tauxTVA + "%" : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r19.montantHT));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r19.montantTTC));
  }
}
function PrintPreviewComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 16)(2, "div", 17);
    \u0275\u0275conditionalCreate(3, PrintPreviewComponent_Conditional_22_Conditional_3_Template, 1, 1, "img", 18);
    \u0275\u0275domElementStart(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, PrintPreviewComponent_Conditional_22_Conditional_6_Template, 2, 1, "div", 20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "div", 21)(8, "div", 22);
    \u0275\u0275text(9, "BON DE COMMANDE");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "div", 23);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(12, "div", 24)(13, "div", 25)(14, "div", 26);
    \u0275\u0275text(15, "FOURNISSEUR");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "div", 27);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "div", 29)(19, "div", 30)(20, "span");
    \u0275\u0275text(21, "Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(24, PrintPreviewComponent_Conditional_22_Conditional_24_Template, 5, 1, "div", 30);
    \u0275\u0275conditionalCreate(25, PrintPreviewComponent_Conditional_22_Conditional_25_Template, 5, 1, "div", 30);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(26, "table", 31)(27, "thead")(28, "tr")(29, "th", 33);
    \u0275\u0275text(30, "#");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(31, "th");
    \u0275\u0275text(32, "Code");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(33, "th", 32);
    \u0275\u0275text(34, "D\xE9signation");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(35, "th", 33);
    \u0275\u0275text(36, "Qt\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(37, "th", 33);
    \u0275\u0275text(38, "P.U. HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(39, "th", 33);
    \u0275\u0275text(40, "TVA");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(41, "th", 33);
    \u0275\u0275text(42, "Total HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(43, "th", 33);
    \u0275\u0275text(44, "Total TTC");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(45, "tbody");
    \u0275\u0275repeaterCreate(46, PrintPreviewComponent_Conditional_22_For_47_Template, 17, 8, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(48, "div", 36)(49, "div", 37)(50, "div", 38)(51, "span");
    \u0275\u0275text(52, "Total HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(53, "span");
    \u0275\u0275text(54);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(55, "div", 38)(56, "span");
    \u0275\u0275text(57, "Taxes (TVA + PSA)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(58, "span");
    \u0275\u0275text(59);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(60, "div", 42)(61, "span");
    \u0275\u0275text(62, "TOTAL TTC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(63, "span");
    \u0275\u0275text(64);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(65, "div", 45);
    \u0275\u0275text(66, " Arr\xEAt\xE9 \xE0 la somme de : ");
    \u0275\u0275domElementStart(67, "strong");
    \u0275\u0275text(68);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(69, "div", 46)(70, "div", 47)(71, "div", 48);
    \u0275\u0275text(72, "Le fournisseur");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(73, "div", 87);
    \u0275\u0275text(74, "Nom : ________________________");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(75, "div", 49);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(76, "div", 47)(77, "div", 48);
    \u0275\u0275text(78, "Pour la soci\xE9t\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(79, "div", 87);
    \u0275\u0275text(80, "Nom : ________________________");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(81, "div", 49);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(82, "div", 88);
    \u0275\u0275text(83);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.companyLogoUrl ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.companyName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.companyPhone ? 6 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.purchaseOrder == null ? null : ctx_r2.purchaseOrder.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r2.purchaseOrder == null ? null : ctx_r2.purchaseOrder.partnerName) || "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.fmtDate(ctx_r2.purchaseOrder == null ? null : ctx_r2.purchaseOrder.date));
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.purchaseOrder == null ? null : ctx_r2.purchaseOrder.dateExpected) ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.purchaseOrder == null ? null : ctx_r2.purchaseOrder.notes) ? 25 : -1);
    \u0275\u0275advance(21);
    \u0275\u0275repeater((ctx_r2.purchaseOrder == null ? null : ctx_r2.purchaseOrder.lines) ?? \u0275\u0275pureFunction0(13, _c0));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.purchaseOrder == null ? null : ctx_r2.purchaseOrder.totalHT), " F");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(((ctx_r2.purchaseOrder == null ? null : ctx_r2.purchaseOrder.totalTTC) ?? 0) - ((ctx_r2.purchaseOrder == null ? null : ctx_r2.purchaseOrder.totalHT) ?? 0)), " F");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.purchaseOrder == null ? null : ctx_r2.purchaseOrder.totalTTC), " F");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.montantEnLettres(ctx_r2.purchaseOrder == null ? null : ctx_r2.purchaseOrder.totalTTC));
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1("Bon de commande soumis \xE0 acceptation \xB7 ", ctx_r2.companyName);
  }
}
function PrintPreviewComponent_Conditional_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 18);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("src", ctx_r2.companyLogoUrl, \u0275\u0275sanitizeUrl);
  }
}
function PrintPreviewComponent_Conditional_23_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("T\xE9l : ", ctx_r2.companyPhone);
  }
}
function PrintPreviewComponent_Conditional_23_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.salesOrder == null ? null : ctx_r2.salesOrder.warehouseName);
  }
}
function PrintPreviewComponent_Conditional_23_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2, "\xC9ch\xE9ance");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.fmtDate(ctx_r2.salesOrder == null ? null : ctx_r2.salesOrder.dateEcheance));
  }
}
function PrintPreviewComponent_Conditional_23_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2, "Facture");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.salesOrder == null ? null : ctx_r2.salesOrder.invoiceName);
  }
}
function PrintPreviewComponent_Conditional_23_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2, "Notes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.salesOrder == null ? null : ctx_r2.salesOrder.notes);
  }
}
function PrintPreviewComponent_Conditional_23_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 89);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 32);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td", 33);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "td", 33);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "td", 33);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "td", 33);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "td", 33);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "td", 52);
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const l_r21 = ctx.$implicit;
    const $index_r22 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate($index_r22 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r21.productCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r21.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r21.quantity));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r21.prixUnitaire));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r21.tauxRemise ? l_r21.tauxRemise + "%" : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r21.tauxTVA ? l_r21.tauxTVA + "%" : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r21.montantHT));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmt(l_r21.montantTTC));
  }
}
function PrintPreviewComponent_Conditional_23_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 90)(1, "span");
    \u0275\u0275text(2, "Remise totale");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2013 ", ctx_r2.fmt(ctx_r2.salesOrder == null ? null : ctx_r2.salesOrder.totalRemise), " F");
  }
}
function PrintPreviewComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 16)(2, "div", 17);
    \u0275\u0275conditionalCreate(3, PrintPreviewComponent_Conditional_23_Conditional_3_Template, 1, 1, "img", 18);
    \u0275\u0275domElementStart(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, PrintPreviewComponent_Conditional_23_Conditional_6_Template, 2, 1, "div", 20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "div", 21)(8, "div", 22);
    \u0275\u0275text(9, "BON DE COMMANDE");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "div", 23);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(12, "div", 24)(13, "div", 25)(14, "div", 26);
    \u0275\u0275text(15, "CLIENT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(16, "div", 27);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(18, PrintPreviewComponent_Conditional_23_Conditional_18_Template, 2, 1, "div", 28);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "div", 29)(20, "div", 30)(21, "span");
    \u0275\u0275text(22, "Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(25, PrintPreviewComponent_Conditional_23_Conditional_25_Template, 5, 1, "div", 30);
    \u0275\u0275conditionalCreate(26, PrintPreviewComponent_Conditional_23_Conditional_26_Template, 5, 1, "div", 30);
    \u0275\u0275conditionalCreate(27, PrintPreviewComponent_Conditional_23_Conditional_27_Template, 5, 1, "div", 30);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(28, "table", 31)(29, "thead")(30, "tr")(31, "th", 33);
    \u0275\u0275text(32, "#");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(33, "th");
    \u0275\u0275text(34, "Code");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(35, "th", 32);
    \u0275\u0275text(36, "D\xE9signation");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(37, "th", 33);
    \u0275\u0275text(38, "Qt\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(39, "th", 33);
    \u0275\u0275text(40, "P.U. HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(41, "th", 33);
    \u0275\u0275text(42, "Remise");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(43, "th", 33);
    \u0275\u0275text(44, "TVA");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(45, "th", 33);
    \u0275\u0275text(46, "Mnt HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(47, "th", 33);
    \u0275\u0275text(48, "Mnt TTC");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(49, "tbody");
    \u0275\u0275repeaterCreate(50, PrintPreviewComponent_Conditional_23_For_51_Template, 19, 9, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(52, "div", 36)(53, "div", 37);
    \u0275\u0275conditionalCreate(54, PrintPreviewComponent_Conditional_23_Conditional_54_Template, 5, 1, "div", 90);
    \u0275\u0275domElementStart(55, "div", 38)(56, "span");
    \u0275\u0275text(57, "Total HT");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(58, "span");
    \u0275\u0275text(59);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(60, "div", 38)(61, "span");
    \u0275\u0275text(62, "TVA (19,25%)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(63, "span");
    \u0275\u0275text(64);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(65, "div", 42)(66, "span");
    \u0275\u0275text(67, "TOTAL TTC");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(68, "span");
    \u0275\u0275text(69);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(70, "div", 45);
    \u0275\u0275text(71, " Arr\xEAt\xE9 \xE0 la somme de : ");
    \u0275\u0275domElementStart(72, "strong");
    \u0275\u0275text(73);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(74, "div", 46)(75, "div", 47)(76, "div", 48);
    \u0275\u0275text(77, "Le client");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(78, "div", 87);
    \u0275\u0275text(79, "Nom : ________________________");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(80, "div", 49);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(81, "div", 47)(82, "div", 48);
    \u0275\u0275text(83, "Pour la soci\xE9t\xE9");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(84, "div", 87);
    \u0275\u0275text(85, "Nom : ________________________");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(86, "div", 49);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(87, "div", 88);
    \u0275\u0275text(88);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.companyLogoUrl ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.companyName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.companyPhone ? 6 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.salesOrder == null ? null : ctx_r2.salesOrder.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r2.salesOrder == null ? null : ctx_r2.salesOrder.partnerName) || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.salesOrder == null ? null : ctx_r2.salesOrder.warehouseName) ? 18 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.fmtDate(ctx_r2.salesOrder == null ? null : ctx_r2.salesOrder.date));
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.salesOrder == null ? null : ctx_r2.salesOrder.dateEcheance) ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.salesOrder == null ? null : ctx_r2.salesOrder.invoiceName) ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.salesOrder == null ? null : ctx_r2.salesOrder.notes) ? 27 : -1);
    \u0275\u0275advance(23);
    \u0275\u0275repeater((ctx_r2.salesOrder == null ? null : ctx_r2.salesOrder.lines) ?? \u0275\u0275pureFunction0(16, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx_r2.salesOrder == null ? null : ctx_r2.salesOrder.totalRemise) ? 54 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.salesOrder == null ? null : ctx_r2.salesOrder.totalHT), " F");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.salesOrder == null ? null : ctx_r2.salesOrder.totalTVA), " F");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.fmt(ctx_r2.salesOrder == null ? null : ctx_r2.salesOrder.totalTTC), " F");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.montantEnLettres(ctx_r2.salesOrder == null ? null : ctx_r2.salesOrder.totalTTC));
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1("Bon de commande \xB7 ", ctx_r2.companyName);
  }
}
var PrintPreviewComponent = class _PrintPreviewComponent {
  constructor() {
    this.invoice = null;
    this.picking = null;
    this.purchaseInvoice = null;
    this.purchaseOrder = null;
    this.salesOrder = null;
    this.docType = "invoice";
    this.companyName = "";
    this.companyPhone = "";
    this.companyLogoUrl = "";
    this.companyLogoDataUrl = "";
    this.companyInfo = null;
    this.closed = new EventEmitter();
    this.format = "a4";
    this.printing = false;
    this.FORMATS = [
      { value: "a4", label: "A4", icon: "description" },
      { value: "a5", label: "A5", icon: "article" },
      { value: "ticket", label: "Ticket", icon: "receipt" }
    ];
  }
  get docTitle() {
    if (this.docType === "bon")
      return "BON DE LIVRAISON";
    if (this.docType === "avoir")
      return "AVOIR";
    if (this.docType === "purchase_order")
      return "BON DE COMMANDE";
    if (this.docType === "sales_order")
      return "BON DE COMMANDE";
    if (this.docType === "purchase_invoice")
      return this.purchaseInvoice?.type === "credit_note" ? "AVOIR FOURNISSEUR" : "FACTURE FOURNISSEUR";
    return "FACTURE";
  }
  get docRef() {
    return this.invoice?.name ?? this.picking?.name ?? this.purchaseInvoice?.name ?? this.purchaseOrder?.name ?? this.salesOrder?.name ?? "";
  }
  get client() {
    return this.invoice?.partnerName ?? this.picking?.partnerName ?? this.purchaseInvoice?.partnerName ?? this.purchaseOrder?.partnerName ?? this.salesOrder?.partnerName ?? "";
  }
  get allLines() {
    return this.invoice?.lines ?? [];
  }
  /** Lignes normales : non-consigne ET quantité positive */
  get salesLines() {
    return this.allLines.filter((l) => !this.isConsigneLine(l) && (l.quantity ?? 0) >= 0);
  }
  /** Consignes livrées : consigne ET quantité positive */
  get consigneLines() {
    return this.allLines.filter((l) => this.isConsigneLine(l) && (l.quantity ?? 0) >= 0);
  }
  /** Déconsignes : toute ligne à quantité négative (retour emballage) */
  get deconsigneLines() {
    return this.allLines.filter((l) => (l.quantity ?? 0) < 0);
  }
  get pickingMoves() {
    return this.picking?.moves ?? [];
  }
  get totalPickingQty() {
    return this.pickingMoves.reduce((s, m) => s + (m.qtyDone ?? m.qtyDemanded ?? 0), 0);
  }
  get purchaseInvoiceLines() {
    return this.purchaseInvoice?.lines ?? [];
  }
  get purchaseInvoiceHasRabais() {
    return this.purchaseInvoiceLines.some((l) => (l.rabaisUnitaire ?? 0) > 0);
  }
  get purchaseNormalLines() {
    return this.purchaseInvoiceLines.filter((l) => !l.consigne && (l.quantity ?? 0) >= 0);
  }
  get purchaseConsigneLines() {
    return this.purchaseInvoiceLines.filter((l) => l.consigne === true && (l.quantity ?? 0) >= 0);
  }
  get purchaseDeconsigneLines() {
    return this.purchaseInvoiceLines.filter((l) => (l.quantity ?? 0) < 0);
  }
  get purchaseTotalColis() {
    return this.purchaseNormalLines.reduce((s, l) => s + (l.quantity ?? 0), 0);
  }
  get purchaseTotalPET() {
    return this.purchaseNormalLines.filter((l) => l.categoryName?.trim().toUpperCase().startsWith("PET")).reduce((s, l) => s + (l.quantity ?? 0), 0);
  }
  get purchaseConsigneMontant() {
    return this.purchaseConsigneLines.reduce((s, l) => s + (l.montantTTC ?? 0), 0);
  }
  get purchaseDeconsigneMontant() {
    return this.purchaseDeconsigneLines.reduce((s, l) => s + Math.abs(l.montantTTC ?? 0), 0);
  }
  get purchaseQteConsigne() {
    return this.purchaseConsigneLines.reduce((s, l) => s + (l.quantity ?? 0), 0);
  }
  get purchaseQteDeconsigne() {
    return this.purchaseDeconsigneLines.reduce((s, l) => s + Math.abs(l.quantity ?? 0), 0);
  }
  get purchaseTotalRabaisHT() {
    return this.purchaseInvoiceLines.reduce((s, l) => s + (l.totalRabaisLigne ?? 0), 0);
  }
  get purchaseTotalRabaisTTC() {
    return this.purchaseInvoiceLines.reduce((s, l) => {
      const r = l.totalRabaisLigne ?? 0;
      return s + r * (1 + (l.tauxTVA ?? 0) / 100);
    }, 0);
  }
  get totalColis() {
    return this.salesLines.reduce((s, l) => s + (l.quantity ?? 0), 0);
  }
  get totalPET() {
    return this.salesLines.filter((l) => l.categoryName?.trim().toUpperCase().startsWith("PET")).reduce((s, l) => s + (l.quantity ?? 0), 0);
  }
  get totalCasier() {
    return this.salesLines.filter((l) => l.uomName?.toLowerCase().includes("casier")).reduce((s, l) => s + (l.quantity ?? 0), 0);
  }
  get consigneMontant() {
    return this.consigneLines.reduce((s, l) => s + (l.montantTTC ?? 0), 0);
  }
  get deconsigneMontant() {
    return this.deconsigneLines.reduce((s, l) => s + Math.abs(l.montantTTC ?? 0), 0);
  }
  get qteConsigne() {
    return this.consigneLines.reduce((s, l) => s + (l.quantity ?? 0), 0);
  }
  get qteDeconsigne() {
    return this.deconsigneLines.reduce((s, l) => s + Math.abs(l.quantity ?? 0), 0);
  }
  isConsigneLine(l) {
    return l.consigne === true || !!l.productCode && CONSIGNE_CODES.has(l.productCode.trim().toUpperCase());
  }
  isConsigne(code) {
    return !!code && CONSIGNE_CODES.has(code.trim().toUpperCase());
  }
  fmt(n) {
    if (n == null)
      return "0";
    return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n);
  }
  fmtDate(d) {
    if (!d)
      return "";
    try {
      return new Date(d).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
    } catch (e) {
      return d;
    }
  }
  montantEnLettres(n) {
    return toFrenchWords(Math.round(n ?? 0)) + " Francs CFA";
  }
  setFormat(f) {
    this.format = f;
  }
  close() {
    this.closed.emit();
  }
  print() {
    this.printing = true;
    const html = this.buildFullHtml();
    const w = window.open("", "_blank", "width=1000,height=1100");
    if (!w) {
      this.printing = false;
      return;
    }
    w.document.write(html);
    w.document.close();
    w.focus();
    setTimeout(() => {
      w.print();
      w.onafterprint = () => {
        w.close();
        this.printing = false;
      };
    }, 600);
  }
  // ─── HTML generation ──────────────────────────────────────────────────────
  buildFullHtml() {
    let css;
    let body;
    if (this.docType === "bon") {
      css = BON_CSS;
      body = this.buildBonBody();
    } else if (this.docType === "purchase_order") {
      css = this.format === "a5" ? A5_CSS : A4_CSS;
      body = this.buildPurchaseOrderBody();
    } else if (this.docType === "sales_order") {
      css = this.format === "a5" ? A5_CSS : A4_CSS;
      body = this.buildSalesOrderBody();
    } else if (this.docType === "purchase_invoice") {
      css = this.format === "ticket" ? TICKET_CSS : this.format === "a5" ? A5_CSS : A4_CSS;
      body = this.format === "ticket" ? this.buildPurchaseInvoiceTicketBody() : this.buildPurchaseInvoiceBody(this.format === "a5");
    } else {
      css = this.format === "ticket" ? TICKET_CSS : this.format === "a5" ? A5_CSS : A4_CSS;
      body = this.format === "ticket" ? this.buildTicketBody() : this.buildInvoiceBody(this.format === "a5");
    }
    return `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8">
<title>${this.docTitle} ${this.docRef}</title>
<style>${css}</style></head><body>${body}</body></html>`;
  }
  h(s) {
    if (s == null)
      return "";
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  logoImgHtml() {
    if (this.companyLogoDataUrl) {
      return `<img src="${this.companyLogoDataUrl}" class="co-logo" alt="logo">`;
    }
    if (!this.companyLogoUrl)
      return "";
    const abs = this.companyLogoUrl.startsWith("http") ? this.companyLogoUrl : `${window.location.origin}${this.companyLogoUrl}`;
    return `<img src="${abs}" class="co-logo" alt="logo">`;
  }
  companyHeaderHtml() {
    const ci = this.companyInfo;
    const name = ci?.name || this.companyName || "";
    const sigle = ci?.sigle || "";
    const rccm = ci?.rccm || "";
    const nif = ci?.nif || "";
    const adresse = ci?.adresse || "";
    const tel = ci?.telephone || this.companyPhone || "";
    const email = ci?.email || "";
    const sigleHtml = sigle ? ` <span class="co-sigle">(${this.h(sigle)})</span>` : "";
    const adresseHtml = adresse ? `<div class="co-info">${this.h(adresse)}</div>` : "";
    const rccmHtml = rccm ? `<div class="co-info"><span class="co-lbl">RCCM :</span> ${this.h(rccm)}</div>` : "";
    const nifHtml = nif ? `<div class="co-info"><span class="co-lbl">NIF :</span> ${this.h(nif)}</div>` : "";
    const telHtml = tel ? `<div class="co-info"><span class="co-lbl">T\xE9l :</span> ${this.h(tel)}</div>` : "";
    const emailHtml = email ? `<div class="co-info"><span class="co-lbl">Email :</span> ${this.h(email)}</div>` : "";
    return `${this.logoImgHtml()}
      <div class="co-name">${this.h(name)}${sigleHtml}</div>
      ${adresseHtml}${rccmHtml}${nifHtml}${telHtml}${emailHtml}`;
  }
  ticketCompanyHtml() {
    const ci = this.companyInfo;
    const name = ci?.name || this.companyName || "";
    const sigle = ci?.sigle || "";
    const rccm = ci?.rccm || "";
    const nif = ci?.nif || "";
    const tel = ci?.telephone || this.companyPhone || "";
    const email = ci?.email || "";
    const logo = this.logoImgHtml();
    return `
      ${logo ? `<div class="t-logo">${logo}</div>` : ""}
      <div class="t-company">${this.h(name)}${sigle ? ` (${this.h(sigle)})` : ""}</div>
      ${rccm ? `<div class="t-coinfo">RCCM : ${this.h(rccm)}</div>` : ""}
      ${nif ? `<div class="t-coinfo">NIF : ${this.h(nif)}</div>` : ""}
      ${tel ? `<div class="t-coinfo">T\xE9l : ${this.h(tel)}</div>` : ""}
      ${email ? `<div class="t-coinfo">Email : ${this.h(email)}</div>` : ""}`;
  }
  buildInvoiceBody(compact = false) {
    const inv = this.invoice;
    const title = this.docType === "avoir" ? "AVOIR" : "FACTURE";
    const linesHtml = this.salesLines.map((l) => `
      <tr>
        <td>${this.h(l.productCode)}</td>
        <td class="desc">${this.h(l.description)}</td>
        <td class="r">${this.fmt(l.quantity)}</td>
        <td class="r">${this.fmt(l.prixUnitaire)}</td>
        <td class="r bold-teal">${this.fmt(l.prixUnitaireTTC ?? 0)}</td>
        <td class="r rabais">${(l.rabaisUnitaire ?? 0) > 0 ? "\u2013" + this.fmt(l.rabaisUnitaire) : "\u2014"}</td>
        <td class="r rabais-ttc">${(l.rabaisUnitaireTTC ?? 0) > 0 ? "\u2013" + this.fmt(l.rabaisUnitaireTTC) : "\u2014"}</td>
        <td class="r">${this.fmt(l.montantHT)}</td>
        <td class="r bold">${this.fmt(l.montantTTC)}</td>
      </tr>`).join("");
    const consigneHtml = this.consigneLines.length ? `
      <tr class="consigne-header"><td colspan="9">CONSIGNES</td></tr>
      ${this.consigneLines.map((l) => `
        <tr class="consigne-row">
          <td>${this.h(l.productCode)}</td>
          <td class="desc">${this.h(l.description)}</td>
          <td class="r">${this.fmt(l.quantity)}</td>
          <td colspan="4"></td>
          <td></td>
          <td class="r">${this.fmt(l.montantTTC)}</td>
        </tr>`).join("")}` : "";
    const deconsigneHtml = this.deconsigneLines.length ? `
      <tr class="deconsigne-header"><td colspan="9">D\xC9CONSIGNES</td></tr>
      ${this.deconsigneLines.map((l) => `
        <tr class="consigne-row">
          <td>${this.h(l.productCode)}</td>
          <td class="desc">${this.h(l.description)}</td>
          <td class="r">${this.fmt(Math.abs(l.quantity ?? 0))}</td>
          <td colspan="4"></td>
          <td></td>
          <td class="r">${this.fmt(l.montantTTC)}</td>
        </tr>`).join("")}` : "";
    const ristourneHtml = inv.ristourneDetails?.length ? `
      <tr class="section-header"><td colspan="9">RISTOURNES (\xE0 r\xE9cup\xE9rer s\xE9par\xE9ment)</td></tr>
      ${inv.ristourneDetails.map((r) => `
        <tr class="ristourne-row">
          <td colspan="2">${this.h(r.categoryName)}</td>
          <td class="r">${this.fmt(r.quantite)}</td>
          <td class="r">${this.fmt(r.montantUnitaire)}</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="r">${this.fmt(r.montantTotal)}</td>
          <td class="r">${this.fmt(r.montantTotal)}</td>
        </tr>`).join("")}` : "";
    const netAPayer = inv.netAPayer ?? (inv.totalTTC ?? 0) + (inv.fraisEnlevementTTC ?? 0);
    return `
<div class="doc">
  <div class="header">
    <div class="company">
      ${this.companyHeaderHtml()}
    </div>
    <div class="title-block">
      <div class="doc-type">${title}</div>
      <div class="doc-ref">${this.h(inv.name)}</div>
    </div>
  </div>

  <div class="meta">
    <div class="meta-client">
      <div class="meta-label">CLIENT</div>
      <div class="meta-value">${this.h(inv.partnerName)}</div>
      ${inv.warehouseName ? `<div class="meta-sub">Entrep\xF4t : ${this.h(inv.warehouseName)}</div>` : ""}
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">Date</span><span>${this.fmtDate(inv.date)}</span></div>
      ${inv.dateEcheance ? `<div class="meta-row"><span class="ml">\xC9ch\xE9ance</span><span>${this.fmtDate(inv.dateEcheance)}</span></div>` : ""}
      ${inv.salesOrderName ? `<div class="meta-row"><span class="ml">Commande</span><span>${this.h(inv.salesOrderName)}</span></div>` : ""}
      ${inv.notes ? `<div class="meta-row"><span class="ml">R\xE9f. client</span><span>${this.h(inv.notes)}</span></div>` : ""}
    </div>
  </div>

  <table class="lines">
    <thead>
      <tr>
        <th>Code</th><th class="desc">D\xE9signation</th>
        <th class="r">Qt\xE9</th><th class="r">P.U.HT</th>
        <th class="r">P.U.TTC</th><th class="r">Rabais HT/u</th><th class="r">Rabais TTC/u</th>
        <th class="r">Mnt HT</th><th class="r">Mnt TTC</th>
      </tr>
    </thead>
    <tbody>
      ${linesHtml}
      ${consigneHtml}
      ${deconsigneHtml}
      ${ristourneHtml}
    </tbody>
  </table>

  <table class="recap">
    <thead><tr>
      <th>Total Colis</th><th>Total PET</th><th>Total Casier</th><th>Liq. Nu</th>
      <th>Consigne (F)</th><th>D\xE9consigne (F)</th><th>Qt\xE9 Csgn</th><th>Qt\xE9 Dcsgn</th>
    </tr></thead>
    <tbody><tr>
      <td class="r">${this.fmt(this.totalColis)}</td>
      <td class="r">${this.fmt(this.totalPET)}</td>
      <td class="r">${this.fmt(this.totalCasier)}</td>
      <td class="r">${this.fmt(inv.totalLiquideNu ?? 0)}</td>
      <td class="r">${this.fmt(this.consigneMontant)}</td>
      <td class="r">\u2013 ${this.fmt(this.deconsigneMontant)}</td>
      <td class="r">${this.fmt(this.qteConsigne)}</td>
      <td class="r">\u2013 ${this.fmt(this.qteDeconsigne)}</td>
    </tr></tbody>
  </table>

  <div class="totals-wrap">
    <div class="totals">
      <div class="tot-row"><span>Total HT</span><span>${this.fmt(inv.totalHT)} F</span></div>
      <div class="tot-row"><span>TVA (19,25%)</span><span>${this.fmt(inv.totalTVA)} F</span></div>
      ${inv.totalPrecompte ? `<div class="tot-row"><span>Pr\xE9compte (PSA)</span><span>${this.fmt(inv.totalPrecompte)} F</span></div>` : ""}
      ${(inv.fraisEnlevementTTC ?? 0) > 0 ? `<div class="tot-row enlevement"><span>Frais d'enl\xE8vement</span><span>+ ${this.fmt(inv.fraisEnlevementTTC)} F</span></div>` : ""}
      <div class="tot-row grand"><span>Total TTC</span><span>${this.fmt(inv.totalTTC)} F</span></div>
      ${(inv.totalRistourne ?? 0) > 0 ? `<div class="tot-row ristourne"><span>Ristournes (\xE0 r\xE9cup\xE9rer)</span><span>${this.fmt(inv.totalRistourne)} F</span></div>` : ""}
      ${(inv.totalRabais ?? 0) > 0 ? `<div class="tot-row rabais"><span>Rabais HT</span><span>- ${this.fmt(inv.totalRabais)} F</span></div>` : ""}
      ${(inv.totalRabaisTTC ?? 0) > 0 ? `<div class="tot-row rabais"><span>Rabais TTC d\xE9duit</span><span>- ${this.fmt(inv.totalRabaisTTC)} F</span></div>` : ""}
      <div class="tot-row net"><span>NET \xC0 PAYER</span><span>${this.fmt(netAPayer)} F</span></div>
      ${inv.montantPaye ? `<div class="tot-row paid"><span>D\xE9j\xE0 pay\xE9</span><span>${this.fmt(inv.montantPaye)} F</span></div>` : ""}
      ${(inv.montantDu ?? 0) > 0.01 ? `<div class="tot-row due"><span>Reste d\xFB</span><span>${this.fmt(inv.montantDu)} F</span></div>` : ""}
    </div>
  </div>

  <div class="lettres">
    Arr\xEAt\xE9 \xE0 la somme de : <strong>${this.montantEnLettres(netAPayer)}</strong>
  </div>

  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Signature du livreur</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Cachet et signature du client</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">${inv.createdBy ? "Agent : " + this.h(inv.createdBy) + " \xB7 " : ""}${this.h(this.companyName)}</div>
</div>`;
  }
  buildTicketBody() {
    const inv = this.invoice;
    const title = this.docType === "avoir" ? "AVOIR" : "FACTURE";
    const netAPayer = inv.netAPayer ?? (inv.totalTTC ?? 0) + (inv.fraisEnlevementTTC ?? 0);
    const linesHtml = this.salesLines.map((l) => `
      <tr>
        <td class="tname">${this.h(l.productCode || l.description)}</td>
        <td class="r">${this.fmt(l.quantity)}\xD7${this.fmt(l.prixUnitaireTTC ?? l.prixUnitaire)}</td>
        <td class="r">${this.fmt(l.montantTTC)}</td>
      </tr>`).join("");
    const consignesHtml = this.consigneLines.length ? `
      <tr class="sep"><td colspan="3">\u2014 Consignes \u2014</td></tr>
      ${this.consigneLines.map((l) => `
        <tr><td class="tname">${this.h(l.productCode || l.description)}</td>
            <td class="r">${this.fmt(l.quantity)}</td>
            <td class="r">${this.fmt(l.montantTTC)}</td>
        </tr>`).join("")}` : "";
    const deconsignesHtml = this.deconsigneLines.length ? `
      <tr class="sep"><td colspan="3">\u2014 D\xE9consignes \u2014</td></tr>
      ${this.deconsigneLines.map((l) => `
        <tr><td class="tname">${this.h(l.productCode || l.description)}</td>
            <td class="r">${this.fmt(Math.abs(l.quantity ?? 0))}</td>
            <td class="r">-${this.fmt(Math.abs(l.montantTTC ?? 0))}</td>
        </tr>`).join("")}` : "";
    return `
<div class="ticket">
  ${this.ticketCompanyHtml()}
  <div class="t-sep"></div>
  <div class="t-doctype">${title}</div>
  <div class="t-ref">${this.h(inv.name)}</div>
  <div class="t-line"><span>Date</span><span>${this.fmtDate(inv.date)}</span></div>
  <div class="t-line"><span>Client</span><span>${this.h(inv.partnerName)}</span></div>
  ${inv.notes ? `<div class="t-line"><span>R\xE9f. client</span><span>${this.h(inv.notes)}</span></div>` : ""}
  <div class="t-sep"></div>
  <table class="t-lines">
    <tbody>${linesHtml}${consignesHtml}${deconsignesHtml}</tbody>
  </table>
  <div class="t-sep"></div>
  <div class="t-line small"><span>Total Colis</span><span>${this.fmt(this.totalColis)}</span></div>
  ${this.totalPET > 0 ? `<div class="t-line small"><span>Total PET</span><span>${this.fmt(this.totalPET)}</span></div>` : ""}
  ${this.totalCasier > 0 ? `<div class="t-line small"><span>Total Casier</span><span>${this.fmt(this.totalCasier)}</span></div>` : ""}
  ${(inv.totalLiquideNu ?? 0) > 0 ? `<div class="t-line small"><span>Liq. Nu</span><span>${this.fmt(inv.totalLiquideNu)} F</span></div>` : ""}
  ${this.consigneMontant > 0 ? `<div class="t-line small"><span>Consigne</span><span>${this.fmt(this.consigneMontant)} F</span></div>` : ""}
  ${this.deconsigneMontant > 0 ? `<div class="t-line small"><span>D\xE9consigne</span><span>\u2013 ${this.fmt(this.deconsigneMontant)} F</span></div>` : ""}
  <div class="t-sep"></div>
  <div class="t-line"><span>Total HT</span><span>${this.fmt(inv.totalHT)} F</span></div>
  <div class="t-line"><span>TVA 19,25%</span><span>${this.fmt(inv.totalTVA)} F</span></div>
  ${inv.totalPrecompte ? `<div class="t-line"><span>PSA</span><span>${this.fmt(inv.totalPrecompte)} F</span></div>` : ""}
  ${(inv.fraisEnlevementTTC ?? 0) > 0 ? `<div class="t-line t-enlevement"><span>Enl\xE8vement</span><span>+ ${this.fmt(inv.fraisEnlevementTTC)} F</span></div>` : ""}
  <div class="t-line t-subtotal"><span>Total TTC</span><span>${this.fmt(inv.totalTTC)} F</span></div>
  ${(inv.totalRistourne ?? 0) > 0 ? `
  <div class="t-sep-dots"></div>
  <div class="t-ristourne-hdr">RISTOURNES (\xE0 r\xE9cup\xE9rer)</div>
  <div class="t-line t-ristourne"><span>Total ristournes</span><span>${this.fmt(inv.totalRistourne)} F</span></div>
  <div class="t-sep-dots"></div>` : ""}
  <div class="t-sep"></div>
  <div class="t-total"><span>NET \xC0 PAYER</span><span>${this.fmt(netAPayer)} F</span></div>
  ${inv.montantPaye ? `<div class="t-line"><span>D\xE9j\xE0 pay\xE9</span><span>${this.fmt(inv.montantPaye)} F</span></div>` : ""}
  ${(inv.montantDu ?? 0) > 0.01 ? `<div class="t-line small"><span>Reste d\xFB</span><span>${this.fmt(inv.montantDu)} F</span></div>` : ""}
  <div class="t-sep"></div>
  <div class="t-lettres">${this.montantEnLettres(netAPayer)}</div>
  <div class="t-thanks">Merci de votre confiance !</div>
  ${inv.createdBy ? `<div class="t-line small"><span>Agent</span><span>${this.h(inv.createdBy)}</span></div>` : ""}
  <div class="t-sep"></div>
  <div class="t-sig-box">
    <div class="t-sig-lbl">Signature du livreur</div>
    <div class="t-sig-name">Nom : ___________________________</div>
    <div class="t-sig-area"></div>
  </div>
  <div class="t-sig-gap"></div>
  <div class="t-sig-box">
    <div class="t-sig-lbl">Cachet &amp; signature client</div>
    <div class="t-sig-name">Nom : ___________________________</div>
    <div class="t-sig-area"></div>
  </div>
</div>`;
  }
  buildPurchaseInvoiceBody(compact = false) {
    const inv = this.purchaseInvoice;
    const title = inv.type === "credit_note" ? "AVOIR FOURNISSEUR" : "FACTURE FOURNISSEUR";
    const totalRabaisHT = this.purchaseTotalRabaisHT;
    const totalRabaisTTC = this.purchaseTotalRabaisTTC;
    const linesHtml = this.purchaseNormalLines.map((l) => {
      const catHT = l.prixUnitaire ?? 0;
      const catTTC = catHT * (1 + (l.tauxTVA ?? 0) / 100);
      const rabHT = l.rabaisUnitaire ?? 0;
      const rabTTC = rabHT * (1 + (l.tauxTVA ?? 0) / 100);
      const netTTC = (l.montantHT ?? 0) + (l.montantTVA ?? 0) + (l.precompte ?? 0);
      return `
      <tr>
        <td>${this.h(l.productCode)}</td>
        <td class="desc">${this.h(l.description)}</td>
        <td class="r">${this.fmt(l.quantity)}</td>
        <td class="r">${this.fmt(catHT)}</td>
        <td class="r bold-teal">${this.fmt(catTTC)}</td>
        <td class="r rabais">${rabHT > 0 ? "\u2013" + this.fmt(rabHT) : "\u2014"}</td>
        <td class="r rabais-ttc">${rabTTC > 0 ? "\u2013" + this.fmt(rabTTC) : "\u2014"}</td>
        <td class="r">${this.fmt(l.montantHT)}</td>
        <td class="r bold">${this.fmt(Math.round(netTTC))}</td>
      </tr>`;
    }).join("");
    const consigneHtml = this.purchaseConsigneLines.length ? `
      <tr class="consigne-header"><td colspan="9">CONSIGNES</td></tr>
      ${this.purchaseConsigneLines.map((l) => `
        <tr class="consigne-row">
          <td>${this.h(l.productCode)}</td>
          <td class="desc">${this.h(l.description)}</td>
          <td class="r">${this.fmt(l.quantity)}</td>
          <td colspan="4"></td>
          <td></td>
          <td class="r">${this.fmt(l.montantTTC)}</td>
        </tr>`).join("")}` : "";
    const deconsigneHtml = this.purchaseDeconsigneLines.length ? `
      <tr class="deconsigne-header"><td colspan="9">D\xC9CONSIGNES</td></tr>
      ${this.purchaseDeconsigneLines.map((l) => `
        <tr class="consigne-row">
          <td>${this.h(l.productCode)}</td>
          <td class="desc">${this.h(l.description)}</td>
          <td class="r">${this.fmt(Math.abs(l.quantity ?? 0))}</td>
          <td colspan="4"></td>
          <td></td>
          <td class="r">${this.fmt(l.montantTTC)}</td>
        </tr>`).join("")}` : "";
    const netAPayer = inv.netAPayer ?? inv.totalTTC ?? 0;
    return `
<div class="doc">
  <div class="header">
    <div class="company">
      ${this.companyHeaderHtml()}
    </div>
    <div class="title-block">
      <div class="doc-type">${title}</div>
      <div class="doc-ref">${this.h(inv.name)}</div>
    </div>
  </div>

  <div class="meta">
    <div class="meta-client">
      <div class="meta-label">FOURNISSEUR</div>
      <div class="meta-value">${this.h(inv.partnerName)}</div>
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">Date</span><span>${this.fmtDate(inv.date)}</span></div>
      ${inv.dateEcheance ? `<div class="meta-row"><span class="ml">\xC9ch\xE9ance</span><span>${this.fmtDate(inv.dateEcheance)}</span></div>` : ""}
      ${inv.purchaseOrderName ? `<div class="meta-row"><span class="ml">Commande</span><span>${this.h(inv.purchaseOrderName)}</span></div>` : ""}
      ${inv.notes ? `<div class="meta-row"><span class="ml">R\xE9f.</span><span>${this.h(inv.notes)}</span></div>` : ""}
    </div>
  </div>

  <table class="lines">
    <thead>
      <tr>
        <th>Code</th><th class="desc">D\xE9signation</th>
        <th class="r">Qt\xE9</th><th class="r">P.U.HT</th>
        <th class="r">P.U.TTC</th><th class="r">Rabais HT/u</th><th class="r">Rabais TTC/u</th>
        <th class="r">Mnt HT</th><th class="r">Mnt TTC</th>
      </tr>
    </thead>
    <tbody>
      ${linesHtml}
      ${consigneHtml}
      ${deconsigneHtml}
    </tbody>
  </table>

  <table class="recap">
    <thead><tr>
      <th>Total Colis</th><th>Total PET</th><th>Total Casier</th><th>Liq. Nu</th>
      <th>Consigne (F)</th><th>D\xE9consigne (F)</th><th>Qt\xE9 Csgn</th><th>Qt\xE9 Dcsgn</th>
    </tr></thead>
    <tbody><tr>
      <td class="r">${this.fmt(this.purchaseTotalColis)}</td>
      <td class="r">${this.fmt(this.purchaseTotalPET)}</td>
      <td class="r">0</td>
      <td class="r">${this.fmt(inv.totalLiquideNu ?? 0)}</td>
      <td class="r">${this.fmt(this.purchaseConsigneMontant)}</td>
      <td class="r">\u2013 ${this.fmt(this.purchaseDeconsigneMontant)}</td>
      <td class="r">${this.fmt(this.purchaseQteConsigne)}</td>
      <td class="r">\u2013 ${this.fmt(this.purchaseQteDeconsigne)}</td>
    </tr></tbody>
  </table>

  <div class="totals-wrap">
    <div class="totals">
      <div class="tot-row"><span>Total HT</span><span>${this.fmt(inv.totalHT)} F</span></div>
      <div class="tot-row"><span>TVA (19,25%)</span><span>${this.fmt(inv.totalTVA)} F</span></div>
      ${inv.totalPrecompte ? `<div class="tot-row"><span>Pr\xE9compte (PSA)</span><span>${this.fmt(inv.totalPrecompte)} F</span></div>` : ""}
      ${(inv.fraisEnlevementTTC ?? 0) > 0 ? `<div class="tot-row enlevement"><span>Frais d'enl\xE8vement</span><span>+ ${this.fmt(inv.fraisEnlevementTTC)} F</span></div>` : ""}
      <div class="tot-row grand"><span>Total TTC</span><span>${this.fmt(inv.totalTTC)} F</span></div>
      ${totalRabaisHT > 0 ? `<div class="tot-row ristourne"><span>Rabais HT (601901)</span><span>\u2013 ${this.fmt(Math.round(totalRabaisHT))} F</span></div>` : ""}
      ${totalRabaisTTC > 0 ? `<div class="tot-row rabais"><span>Rabais TTC d\xE9duit</span><span>\u2013 ${this.fmt(Math.round(totalRabaisTTC))} F</span></div>` : ""}
      <div class="tot-row net"><span>NET \xC0 PAYER</span><span>${this.fmt(netAPayer)} F</span></div>
      ${inv.montantPaye ? `<div class="tot-row paid"><span>D\xE9j\xE0 pay\xE9</span><span>${this.fmt(inv.montantPaye)} F</span></div>` : ""}
      ${(inv.montantDu ?? 0) > 0.01 ? `<div class="tot-row due"><span>Reste d\xFB</span><span>${this.fmt(inv.montantDu)} F</span></div>` : ""}
    </div>
  </div>

  <div class="lettres">
    Arr\xEAt\xE9 \xE0 la somme de : <strong>${this.montantEnLettres(netAPayer)}</strong>
  </div>

  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Signature du fournisseur</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Cachet et signature</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">${inv.createdBy ? "Agent : " + this.h(inv.createdBy) + " \xB7 " : ""}${this.h(this.companyName)}</div>
</div>`;
  }
  buildPurchaseInvoiceTicketBody() {
    const inv = this.purchaseInvoice;
    const title = inv.type === "credit_note" ? "AVOIR FOURN." : "FACT. FOURN.";
    const netAPayer = inv.netAPayer ?? inv.totalTTC ?? 0;
    const linesHtml = this.purchaseInvoiceLines.map((l) => `
      <tr>
        <td class="tname">${this.h(l.productCode || l.description)}</td>
        <td class="r">${this.fmt(l.quantity)}\xD7${this.fmt(l.prixUnitaire)}</td>
        <td class="r">${this.fmt(l.montantTTC)}</td>
      </tr>`).join("");
    return `
<div class="ticket">
  ${this.ticketCompanyHtml()}
  <div class="t-sep"></div>
  <div class="t-doctype">${title}</div>
  <div class="t-ref">${this.h(inv.name)}</div>
  <div class="t-line"><span>Date</span><span>${this.fmtDate(inv.date)}</span></div>
  <div class="t-line"><span>Fournisseur</span><span>${this.h(inv.partnerName)}</span></div>
  <div class="t-sep"></div>
  <table class="t-lines"><tbody>${linesHtml}</tbody></table>
  <div class="t-sep"></div>
  <div class="t-line"><span>Total HT</span><span>${this.fmt(inv.totalHT)} F</span></div>
  <div class="t-line"><span>TVA</span><span>${this.fmt(inv.totalTVA)} F</span></div>
  <div class="t-sep"></div>
  <div class="t-total"><span>NET \xC0 PAYER</span><span>${this.fmt(netAPayer)} F</span></div>
  <div class="t-sep"></div>
  <div class="t-lettres">${this.montantEnLettres(netAPayer)}</div>
</div>`;
  }
  buildPurchaseOrderBody() {
    const po = this.purchaseOrder;
    const linesHtml = (po.lines || []).map((l, i) => `
      <tr>
        <td class="r idx">${i + 1}</td>
        <td>${this.h(l.productCode)}</td>
        <td class="desc">${this.h(l.description)}</td>
        <td class="r">${this.fmt(l.quantity)}</td>
        <td class="r">${this.fmt(l.prixUnitaire)}</td>
        <td class="r">${l.tauxTVA ? l.tauxTVA + "%" : "\u2014"}</td>
        <td class="r">${this.fmt(l.montantHT)}</td>
        <td class="r bold">${this.fmt(l.montantTTC)}</td>
      </tr>`).join("");
    return `
<div class="doc">
  <div class="header">
    <div class="company">
      ${this.companyHeaderHtml()}
    </div>
    <div class="title-block">
      <div class="doc-type">BON DE COMMANDE</div>
      <div class="doc-ref">${this.h(po.name)}</div>
    </div>
  </div>
  <div class="meta">
    <div class="meta-client">
      <div class="meta-label">FOURNISSEUR</div>
      <div class="meta-value">${this.h(po.partnerName || "\u2014")}</div>
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">Date</span><span>${this.fmtDate(po.date)}</span></div>
      ${po.dateExpected ? `<div class="meta-row"><span class="ml">Livraison pr\xE9vue</span><span>${this.fmtDate(po.dateExpected)}</span></div>` : ""}
      ${po.notes ? `<div class="meta-row"><span class="ml">Notes</span><span>${this.h(po.notes)}</span></div>` : ""}
    </div>
  </div>
  <table class="lines">
    <thead>
      <tr>
        <th class="r">#</th><th>Code</th><th class="desc">D\xE9signation</th>
        <th class="r">Qt\xE9</th><th class="r">P.U. HT</th>
        <th class="r">TVA</th><th class="r">Total HT</th><th class="r">Total TTC</th>
      </tr>
    </thead>
    <tbody>${linesHtml}</tbody>
  </table>
  <div class="totals-wrap">
    <div class="totals">
      <div class="tot-row"><span>Total HT</span><span>${this.fmt(po.totalHT)} F</span></div>
      <div class="tot-row"><span>Taxes (TVA + PSA)</span><span>${this.fmt((po.totalTTC ?? 0) - (po.totalHT ?? 0))} F</span></div>
      <div class="tot-row net"><span>TOTAL TTC</span><span>${this.fmt(po.totalTTC)} F</span></div>
    </div>
  </div>
  <div class="lettres">Arr\xEAt\xE9 \xE0 la somme de : <strong>${this.montantEnLettres(po.totalTTC)}</strong></div>
  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Le fournisseur</div><div class="sig-name">Nom : ____________________</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Pour la soci\xE9t\xE9</div><div class="sig-name">Nom : ____________________</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">Bon de commande soumis \xE0 acceptation du fournisseur \xB7 ${this.h(this.companyName)}</div>
</div>`;
  }
  buildSalesOrderBody() {
    const so = this.salesOrder;
    const printLines = (so.lines || []).filter((l) => l.productId || l.productCode && l.productCode.trim());
    const linesHtml = printLines.map((l, i) => `
      <tr>
        <td class="r idx">${i + 1}</td>
        <td>${this.h(l.productCode)}</td>
        <td class="desc">${this.h(l.description)}</td>
        <td class="r">${this.fmt(l.quantity)}</td>
        <td class="r">${this.fmt(l.prixUnitaire)}</td>
        ${l.tauxRemise ? `<td class="r">${l.tauxRemise}%</td>` : '<td class="r">\u2014</td>'}
        <td class="r">${l.tauxTVA ? l.tauxTVA + "%" : "\u2014"}</td>
        <td class="r">${this.fmt(l.montantHT)}</td>
        <td class="r bold">${this.fmt(l.montantTTC)}</td>
      </tr>`).join("");
    return `
<div class="doc">
  <div class="header">
    <div class="company">
      ${this.companyHeaderHtml()}
    </div>
    <div class="title-block">
      <div class="doc-type">BON DE COMMANDE</div>
      <div class="doc-ref">${this.h(so.name)}</div>
    </div>
  </div>
  <div class="meta">
    <div class="meta-client">
      <div class="meta-label">CLIENT</div>
      <div class="meta-value">${this.h(so.partnerName || "\u2014")}</div>
      ${so.warehouseName ? `<div class="meta-sub">Entrep\xF4t : ${this.h(so.warehouseName)}</div>` : ""}
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">Date</span><span>${this.fmtDate(so.date)}</span></div>
      ${so.dateEcheance ? `<div class="meta-row"><span class="ml">\xC9ch\xE9ance</span><span>${this.fmtDate(so.dateEcheance)}</span></div>` : ""}
      ${so.invoiceName ? `<div class="meta-row"><span class="ml">Facture</span><span>${this.h(so.invoiceName)}</span></div>` : ""}
      ${so.notes ? `<div class="meta-row"><span class="ml">Notes</span><span>${this.h(so.notes)}</span></div>` : ""}
    </div>
  </div>
  <table class="lines">
    <thead>
      <tr>
        <th class="r">#</th><th>Code</th><th class="desc">D\xE9signation</th>
        <th class="r">Qt\xE9</th><th class="r">P.U. HT</th>
        <th class="r">Remise</th><th class="r">TVA</th>
        <th class="r">Mnt HT</th><th class="r">Mnt TTC</th>
      </tr>
    </thead>
    <tbody>${linesHtml}</tbody>
  </table>
  <div class="totals-wrap">
    <div class="totals">
      ${so.totalRemise ? `<div class="tot-row"><span>Remise totale</span><span>\u2013 ${this.fmt(so.totalRemise)} F</span></div>` : ""}
      <div class="tot-row"><span>Total HT</span><span>${this.fmt(so.totalHT)} F</span></div>
      <div class="tot-row"><span>TVA (19,25%)</span><span>${this.fmt(so.totalTVA)} F</span></div>
      ${(so.totalPrecompte ?? 0) > 0 ? `<div class="tot-row"><span>PSA (Pr\xE9compte)</span><span>${this.fmt(so.totalPrecompte)} F</span></div>` : ""}
      <div class="tot-row grand"><span>Total TTC</span><span>${this.fmt(so.totalTTC)} F</span></div>
      ${(so.fraisEnlevementTTC ?? 0) > 0 ? `<div class="tot-row"><span>Frais d'enl\xE8vement</span><span>${this.fmt(so.fraisEnlevementTTC)} F</span></div>` : ""}
      <div class="tot-row net"><span>NET \xC0 PAYER</span><span>${this.fmt((so.totalTTC ?? 0) + (so.fraisEnlevementTTC ?? 0))} F</span></div>
    </div>
  </div>
  <div class="lettres">Arr\xEAt\xE9 \xE0 la somme de : <strong>${this.montantEnLettres((so.totalTTC ?? 0) + (so.fraisEnlevementTTC ?? 0))}</strong></div>
  <div class="signatures">
    <div class="sig"><div class="sig-lbl">Le client</div><div class="sig-name">Nom : ____________________</div><div class="sig-area"></div></div>
    <div class="sig"><div class="sig-lbl">Pour la soci\xE9t\xE9</div><div class="sig-name">Nom : ____________________</div><div class="sig-area"></div></div>
  </div>
  <div class="footer-note">${so.createdBy ? "Agent : " + this.h(so.createdBy) + " \xB7 " : ""}Bon de commande \xB7 ${this.h(this.companyName)}</div>
</div>`;
  }
  buildBonBody() {
    const p = this.picking;
    const movesHtml = this.pickingMoves.map((m, i) => `
      <tr>
        <td class="r idx">${i + 1}</td>
        <td>${this.h(m.productCode)}</td>
        <td class="desc">${this.h(m.productName)}</td>
        <td class="r">${this.fmt(m.qtyDemanded)}</td>
        <td class="r bold">${this.fmt(m.qtyDone ?? m.qtyDemanded)}</td>
        <td>${this.h(m.uomName)}</td>
      </tr>`).join("");
    const totalQty = this.pickingMoves.reduce((s, m) => s + (m.qtyDone ?? m.qtyDemanded ?? 0), 0);
    return `
<div class="doc">
  <div class="header">
    <div class="company">
      ${this.companyHeaderHtml()}
    </div>
    <div class="title-block">
      <div class="doc-type">BON DE LIVRAISON</div>
      <div class="doc-ref">${this.h(p.name)}</div>
    </div>
  </div>

  <div class="meta">
    <div class="meta-client">
      <div class="meta-label">CLIENT / DESTINATAIRE</div>
      <div class="meta-value">${this.h(p.partnerName || "\u2014")}</div>
    </div>
    <div class="meta-dates">
      <div class="meta-row"><span class="ml">Date</span><span>${this.fmtDate(p.scheduledDate)}</span></div>
      ${p.origin ? `<div class="meta-row"><span class="ml">Origine</span><span>${this.h(p.origin)}</span></div>` : ""}
      ${p.notes ? `<div class="meta-row"><span class="ml">Notes</span><span>${this.h(p.notes)}</span></div>` : ""}
    </div>
  </div>

  <table class="lines">
    <thead>
      <tr>
        <th class="r">#</th>
        <th>Code</th>
        <th class="desc">D\xE9signation</th>
        <th class="r">Qt\xE9 demand\xE9e</th>
        <th class="r">Qt\xE9 livr\xE9e</th>
        <th>U.M.</th>
      </tr>
    </thead>
    <tbody>
      ${movesHtml}
    </tbody>
    <tfoot>
      <tr>
        <td colspan="4" class="r total-lbl">TOTAL COLIS LIVR\xC9S</td>
        <td class="r bold total-val">${this.fmt(totalQty)}</td>
        <td></td>
      </tr>
    </tfoot>
  </table>

  <div class="signatures">
    <div class="sig">
      <div class="sig-lbl">Signature du livreur</div>
      <div class="sig-name">Nom : ____________________</div>
      <div class="sig-area"></div>
    </div>
    <div class="sig">
      <div class="sig-lbl">Cachet et signature du client</div>
      <div class="sig-name">Nom : ____________________</div>
      <div class="sig-area"></div>
    </div>
  </div>
  <div class="footer-note">Document non contractuel \xB7 ${this.h(this.companyName)}</div>
</div>`;
  }
  static {
    this.\u0275fac = function PrintPreviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PrintPreviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrintPreviewComponent, selectors: [["app-print-preview"]], inputs: { invoice: "invoice", picking: "picking", purchaseInvoice: "purchaseInvoice", purchaseOrder: "purchaseOrder", salesOrder: "salesOrder", docType: "docType", companyName: "companyName", companyPhone: "companyPhone", companyLogoUrl: "companyLogoUrl", companyLogoDataUrl: "companyLogoDataUrl", companyInfo: "companyInfo" }, outputs: { closed: "closed" }, decls: 33, vars: 22, consts: [["(click).self", "close()", 1, "pp-overlay"], [1, "pp-modal"], [1, "pp-header"], [1, "pp-header-left"], [1, "material-icons"], [1, "pp-close", 3, "click"], [1, "pp-formats"], [1, "pp-body"], [1, "preview-page"], [1, "inv-doc"], [1, "tkt"], [1, "pp-footer"], [1, "pp-btn-cancel", 3, "click"], [1, "pp-btn-print", 3, "click", "disabled"], [1, "fmt-btn", 3, "active"], [1, "fmt-btn", 3, "click"], [1, "inv-header"], [1, "inv-company"], ["alt", "logo", 1, "inv-co-logo", 3, "src"], [1, "inv-co-name"], [1, "inv-co-sub"], [1, "inv-title-block"], [1, "inv-doctype"], [1, "inv-ref"], [1, "inv-meta"], [1, "inv-meta-client"], [1, "inv-meta-lbl"], [1, "inv-meta-val"], [1, "inv-meta-sub"], [1, "inv-meta-dates"], [1, "inv-mrow"], [1, "inv-lines"], [1, "tdesc"], [1, "tr"], [1, "inv-recap"], [1, "tr", "trabais"], [1, "inv-totals-wrap"], [1, "inv-totals"], [1, "inv-trow"], [1, "inv-trow", "inv-enlevement"], [1, "inv-trow", "inv-grand"], [1, "inv-trow", "inv-ristourne"], [1, "inv-trow", "inv-net"], [1, "inv-trow", "inv-paid"], [1, "inv-trow", "inv-due"], [1, "inv-lettres"], [1, "inv-sigs"], [1, "inv-sig"], [1, "inv-sig-lbl"], [1, "inv-sig-area"], [1, "tr", "tbold-teal"], [1, "tr", "trabais-ttc"], [1, "tr", "tbold"], [1, "inv-section-hdr"], ["colspan", "9"], [1, "inv-consigne"], ["colspan", "4"], [1, "inv-section-hdr", "inv-decons-hdr"], [1, "inv-rst"], ["colspan", "2"], [1, "tkt-logo"], [1, "tkt-co"], [1, "tkt-phone"], [1, "tkt-sep"], [1, "tkt-type"], [1, "tkt-ref"], [1, "tkt-row"], [1, "tkt-row", "sm"], [1, "tkt-row", "tkt-subtotal"], [1, "tkt-total"], [1, "tkt-lettres"], [1, "tkt-thanks"], [1, "tkt-sig-box"], [1, "tkt-sig-lbl"], [1, "tkt-sig-name"], [1, "tkt-sig-area"], [1, "tkt-sig-box", 2, "margin-top", "3mm"], ["alt", "logo", 3, "src"], [1, "tkt-prod-name"], [1, "tkt-prod-row"], [1, "tbold"], [1, "tkt-sep-label"], [1, "tkt-sep-dots"], [1, "tkt-ristourne-hdr"], [1, "tkt-row", "tkt-ristourne-tot"], ["colspan", "4", 1, "tr", "inv-total-lbl"], [1, "tr", "inv-total-val"], [1, "inv-sig-name"], [1, "inv-footer-note"], [1, "tr", "tgray"], [1, "inv-trow", "inv-deduct"]], template: function PrintPreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5, "print");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(6, "span");
        \u0275\u0275text(7, "Aper\xE7u avant impression \u2014 ");
        \u0275\u0275domElementStart(8, "strong");
        \u0275\u0275text(9);
        \u0275\u0275domElementEnd()()();
        \u0275\u0275domElementStart(10, "button", 5);
        \u0275\u0275domListener("click", function PrintPreviewComponent_Template_button_click_10_listener() {
          return ctx.close();
        });
        \u0275\u0275domElementStart(11, "span", 4);
        \u0275\u0275text(12, "close");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275conditionalCreate(13, PrintPreviewComponent_Conditional_13_Template, 3, 0, "div", 6);
        \u0275\u0275conditionalCreate(14, PrintPreviewComponent_Conditional_14_Template, 3, 0, "div", 6);
        \u0275\u0275domElementStart(15, "div", 7)(16, "div", 8);
        \u0275\u0275conditionalCreate(17, PrintPreviewComponent_Conditional_17_Template, 134, 34, "div", 9);
        \u0275\u0275conditionalCreate(18, PrintPreviewComponent_Conditional_18_Template, 86, 29, "div", 10);
        \u0275\u0275conditionalCreate(19, PrintPreviewComponent_Conditional_19_Template, 66, 10, "div", 9);
        \u0275\u0275conditionalCreate(20, PrintPreviewComponent_Conditional_20_Template, 131, 30, "div", 9);
        \u0275\u0275conditionalCreate(21, PrintPreviewComponent_Conditional_21_Template, 44, 11, "div", 10);
        \u0275\u0275conditionalCreate(22, PrintPreviewComponent_Conditional_22_Template, 84, 14, "div", 9);
        \u0275\u0275conditionalCreate(23, PrintPreviewComponent_Conditional_23_Template, 89, 17, "div", 9);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(24, "div", 11)(25, "button", 12);
        \u0275\u0275domListener("click", function PrintPreviewComponent_Template_button_click_25_listener() {
          return ctx.close();
        });
        \u0275\u0275domElementStart(26, "span", 4);
        \u0275\u0275text(27, "close");
        \u0275\u0275domElementEnd();
        \u0275\u0275text(28, " Fermer ");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(29, "button", 13);
        \u0275\u0275domListener("click", function PrintPreviewComponent_Template_button_click_29_listener() {
          return ctx.print();
        });
        \u0275\u0275domElementStart(30, "span", 4);
        \u0275\u0275text(31);
        \u0275\u0275domElementEnd();
        \u0275\u0275text(32);
        \u0275\u0275domElementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate2("", ctx.docTitle, " ", ctx.docRef);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.docType !== "bon" && ctx.docType !== "purchase_order" && ctx.docType !== "sales_order" ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.docType === "purchase_order" || ctx.docType === "sales_order" ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("ticket-mode", ctx.format === "ticket");
        \u0275\u0275advance();
        \u0275\u0275classProp("page-a4", ctx.format === "a4")("page-a5", ctx.format === "a5")("page-ticket", ctx.format === "ticket" || ctx.docType === "bon" && ctx.format === "a4");
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.docType === "invoice" || ctx.docType === "avoir") && ctx.format !== "ticket" ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.docType === "invoice" || ctx.docType === "avoir") && ctx.format === "ticket" ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.docType === "bon" ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.docType === "purchase_invoice" && ctx.format !== "ticket" ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.docType === "purchase_invoice" && ctx.format === "ticket" ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.docType === "purchase_order" ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.docType === "sales_order" ? 23 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275domProperty("disabled", ctx.printing);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.printing ? "hourglass_empty" : "print");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.printing ? "G\xE9n\xE9ration..." : "Imprimer", " ");
      }
    }, dependencies: [CommonModule], styles: ['\n.pp-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.65);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  z-index: 9999;\n  padding: 20px;\n  overflow-y: auto;\n}\n.pp-modal[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  width: 100%;\n  max-width: 860px;\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 40px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);\n}\n.pp-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-hover);\n  border-radius: 10px 10px 0 0;\n}\n.pp-header[_ngcontent-%COMP%]   .pp-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.pp-header[_ngcontent-%COMP%]   .pp-header-left[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 20px;\n}\n.pp-header[_ngcontent-%COMP%]   .pp-header-left[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.pp-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  border-radius: 50%;\n  padding: 4px;\n  transition: all 0.15s;\n}\n.pp-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.pp-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.pp-formats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px 20px;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-surface);\n}\n.fmt-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 16px;\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.fmt-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.fmt-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n  border-color: var(--accent);\n}\n.fmt-btn.active[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: white;\n  border-color: var(--accent);\n}\n.pp-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  background: var(--bg-elevated);\n  padding: 32px 24px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 420px;\n}\n.pp-body.ticket-mode[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  padding-top: 24px;\n}\n.preview-page[_ngcontent-%COMP%] {\n  background: var(--bg-surface);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.22);\n  transform-origin: top center;\n}\n.preview-page.page-a4[_ngcontent-%COMP%] {\n  width: 210mm;\n  min-height: 297mm;\n  transform: scale(0.6);\n  margin-top: -59mm;\n  margin-bottom: -118.8mm;\n}\n.preview-page.page-a5[_ngcontent-%COMP%] {\n  width: 148mm;\n  min-height: 210mm;\n  transform: scale(0.72);\n  margin-top: -29mm;\n  margin-bottom: -58.8mm;\n}\n.preview-page.page-ticket[_ngcontent-%COMP%] {\n  width: 80mm;\n  min-height: 120mm;\n  transform: scale(0.9);\n  margin-bottom: -12mm;\n}\n.inv-doc[_ngcontent-%COMP%] {\n  padding: 14mm;\n  font-family: Arial, sans-serif;\n  font-size: 9pt;\n  color: var(--text-primary);\n}\n.inv-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  border-bottom: 2px solid #222;\n  padding-bottom: 4mm;\n  margin-bottom: 8mm;\n}\n.inv-co-logo[_ngcontent-%COMP%] {\n  max-height: 48px;\n  max-width: 120px;\n  object-fit: contain;\n  display: block;\n  margin-bottom: 4px;\n}\n.inv-co-name[_ngcontent-%COMP%] {\n  font-size: 15pt;\n  font-weight: 700;\n  color: var(--accent);\n}\n.inv-co-sub[_ngcontent-%COMP%] {\n  font-size: 9pt;\n  color: var(--text-secondary);\n  margin-top: 2px;\n}\n.inv-title-block[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.inv-doctype[_ngcontent-%COMP%] {\n  font-size: 18pt;\n  font-weight: 800;\n  letter-spacing: 1px;\n}\n.inv-ref[_ngcontent-%COMP%] {\n  font-size: 11pt;\n  font-weight: 600;\n  color: var(--accent);\n  margin-top: 2px;\n}\n.inv-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8mm;\n}\n.inv-meta-lbl[_ngcontent-%COMP%] {\n  font-size: 7pt;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  margin-bottom: 2px;\n}\n.inv-meta-val[_ngcontent-%COMP%] {\n  font-size: 12pt;\n  font-weight: 700;\n}\n.inv-meta-sub[_ngcontent-%COMP%] {\n  font-size: 8pt;\n  color: var(--text-secondary);\n}\n.inv-meta-dates[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.inv-mrow[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  font-size: 9pt;\n  margin-bottom: 2px;\n}\n.inv-mrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: var(--text-muted);\n  font-size: 8pt;\n}\ntable.inv-lines[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 6mm;\n  font-size: 8.5pt;\n}\ntable.inv-lines[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--accent);\n  color: white;\n}\ntable.inv-lines[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 4px 6px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 7.5pt;\n}\ntable.inv-lines[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: var(--bg-elevated);\n}\ntable.inv-lines[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 3px 6px;\n  border-bottom: 1px solid #e8e8e8;\n}\ntable.inv-lines[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--accent);\n  padding: 4px 6px;\n  background: var(--bg-elevated);\n}\n.tdesc[_ngcontent-%COMP%] {\n  max-width: 110px;\n  word-break: break-word;\n}\n.tr[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.tbold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.tbold-teal[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--accent);\n}\n.trabais[_ngcontent-%COMP%] {\n  color: #e65100;\n  font-weight: 600;\n}\n.trabais-ttc[_ngcontent-%COMP%] {\n  color: #c0392b;\n  font-weight: 700;\n}\n.tgray[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 7.5pt;\n}\n.inv-section-hdr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--accent-light);\n  font-size: 7pt;\n  font-weight: 700;\n  color: var(--accent);\n  text-transform: uppercase;\n  padding: 3px 6px;\n}\n.inv-decons-hdr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e67e22;\n}\n.inv-consigne[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.inv-rst[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n  font-size: 8pt;\n}\n.inv-red[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.inv-recap[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 6px;\n  font-size: 7.5pt;\n}\n.inv-recap[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: var(--accent-light);\n}\n.inv-recap[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 3px 5px;\n  font-weight: 700;\n  color: var(--accent);\n  text-align: right;\n  border: 1px solid #cde;\n  font-size: 7pt;\n}\n.inv-recap[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 3px 5px;\n  border: 1px solid #e0e0e0;\n  background: #fafafa;\n  font-weight: 600;\n}\n.inv-totals-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 5mm;\n}\n.inv-totals[_ngcontent-%COMP%] {\n  width: 72mm;\n}\n.inv-trow[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 2px 6px;\n  font-size: 9pt;\n  border-bottom: 1px solid #eee;\n}\n.inv-grand[_ngcontent-%COMP%] {\n  font-weight: 700;\n  background: var(--bg-elevated);\n}\n.inv-net[_ngcontent-%COMP%] {\n  font-size: 11pt;\n  font-weight: 800;\n  background: var(--accent);\n  color: white;\n  padding: 4px 6px;\n}\n.inv-deduct[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--danger);\n}\n.inv-ristourne[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--success);\n}\n.inv-enlevement[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #c60;\n  font-weight: 600;\n}\n.inv-paid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--success);\n}\n.inv-due[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--danger);\n}\n.inv-total-lbl[_ngcontent-%COMP%] {\n  font-size: 8.5pt;\n  font-weight: 700;\n}\n.inv-total-val[_ngcontent-%COMP%] {\n  font-size: 11pt;\n  font-weight: 800;\n  color: var(--accent);\n}\n.inv-lettres[_ngcontent-%COMP%] {\n  font-size: 8.5pt;\n  font-style: italic;\n  border-top: 1px solid var(--border);\n  padding-top: 3mm;\n  margin-bottom: 8mm;\n}\n.inv-sigs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 10mm;\n  margin-top: 8mm;\n}\n.inv-sig[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.inv-sig-lbl[_ngcontent-%COMP%] {\n  font-size: 8pt;\n  font-weight: 700;\n  margin-bottom: 2mm;\n}\n.inv-sig-name[_ngcontent-%COMP%] {\n  font-size: 8pt;\n  color: var(--text-secondary);\n  margin-bottom: 2mm;\n}\n.inv-sig-area[_ngcontent-%COMP%] {\n  height: 20mm;\n  border: 1px solid #aaa;\n  border-radius: 2px;\n}\n.inv-footer-note[_ngcontent-%COMP%] {\n  font-size: 7pt;\n  color: var(--text-muted);\n  text-align: center;\n  margin-top: 6mm;\n  border-top: 1px solid #eee;\n  padding-top: 2mm;\n}\n.tkt[_ngcontent-%COMP%] {\n  width: 80mm;\n  padding: 3mm 4mm;\n  font-family: "Courier New", monospace;\n  font-size: 8pt;\n  font-weight: 700;\n}\n.tkt-logo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2mm;\n}\n.tkt-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 32px;\n  max-width: 60mm;\n  object-fit: contain;\n}\n.tkt-co[_ngcontent-%COMP%] {\n  font-size: 11pt;\n  font-weight: 800;\n  text-align: center;\n  margin-bottom: 1mm;\n}\n.tkt-phone[_ngcontent-%COMP%] {\n  font-size: 7.5pt;\n  text-align: center;\n  color: var(--text-secondary);\n  margin-bottom: 2mm;\n}\n.tkt-sep[_ngcontent-%COMP%] {\n  border-top: 1px dashed #666;\n  margin: 2mm 0;\n}\n.tkt-type[_ngcontent-%COMP%] {\n  font-size: 12pt;\n  font-weight: 800;\n  text-align: center;\n  letter-spacing: 2px;\n  margin: 1mm 0;\n}\n.tkt-ref[_ngcontent-%COMP%] {\n  font-size: 9pt;\n  font-weight: 700;\n  text-align: center;\n  color: var(--text-primary);\n  margin-bottom: 2mm;\n}\n.tkt-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 8pt;\n  margin: 1px 0;\n}\n.tkt-row.sm[_ngcontent-%COMP%] {\n  font-size: 7.5pt;\n  color: var(--text-secondary);\n}\n.tkt-prod-name[_ngcontent-%COMP%] {\n  font-size: 7.5pt;\n  margin-top: 1mm;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tkt-prod-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 7.5pt;\n  margin-bottom: 1mm;\n  padding-left: 2mm;\n}\n.tkt-sep-label[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 7pt;\n  color: var(--text-muted);\n  padding: 1mm 0;\n}\n.tkt-sep-dots[_ngcontent-%COMP%] {\n  border-top: 1px dotted #666;\n  margin: 2mm 0;\n}\n.tkt-subtotal[_ngcontent-%COMP%] {\n  font-weight: 700;\n  border-top: 1px solid #333;\n  padding-top: 1px;\n}\n.tkt-ristourne-hdr[_ngcontent-%COMP%] {\n  font-size: 7pt;\n  font-weight: 800;\n  text-align: center;\n  color: var(--success);\n  padding: 2px 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.tkt-ristourne-tot[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.tkt-ristourne-tot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--success);\n}\n.tkt-sig-box[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 2mm;\n}\n.tkt-sig-lbl[_ngcontent-%COMP%] {\n  font-size: 7.5pt;\n  font-weight: 700;\n  margin-bottom: 1mm;\n  text-align: center;\n}\n.tkt-sig-name[_ngcontent-%COMP%] {\n  font-size: 7pt;\n  color: var(--text-muted);\n  margin-bottom: 1mm;\n}\n.tkt-sig-area[_ngcontent-%COMP%] {\n  height: 18mm;\n  border: 1px solid #999;\n  border-radius: 2px;\n  width: 100%;\n}\n.tkt-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11pt;\n  font-weight: 800;\n  border-top: 2px solid #111;\n  border-bottom: 2px solid #111;\n  padding: 1mm 0;\n  margin: 2mm 0;\n}\n.tkt-lettres[_ngcontent-%COMP%] {\n  font-size: 6.5pt;\n  font-style: italic;\n  text-align: center;\n  margin: 2mm 0;\n  color: var(--text-secondary);\n}\n.tkt-thanks[_ngcontent-%COMP%] {\n  font-size: 8.5pt;\n  text-align: center;\n  font-weight: 700;\n  margin: 2mm 0;\n}\n.tkt-sig[_ngcontent-%COMP%] {\n  font-size: 8pt;\n  text-align: center;\n  margin-top: 4mm;\n}\n.pp-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  background: var(--bg-hover);\n  border-radius: 0 0 10px 10px;\n}\n.pp-btn-cancel[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.pp-btn-cancel[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.pp-btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--bg-hover);\n}\n.pp-btn-print[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.pp-btn-print[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.pp-btn-print[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--accent);\n}\n.pp-btn-print[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=print-preview.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrintPreviewComponent, [{
    type: Component,
    args: [{ selector: "app-print-preview", standalone: true, imports: [CommonModule], template: `<div class="pp-overlay" (click).self="close()">
  <div class="pp-modal">

    <!-- \u2500\u2500 Header \u2500\u2500 -->
    <div class="pp-header">
      <div class="pp-header-left">
        <span class="material-icons">print</span>
        <span>Aper\xE7u avant impression \u2014 <strong>{{ docTitle }} {{ docRef }}</strong></span>
      </div>
      <button class="pp-close" (click)="close()">
        <span class="material-icons">close</span>
      </button>
    </div>

    <!-- \u2500\u2500 Format selector \u2500\u2500 -->
    @if (docType !== 'bon' && docType !== 'purchase_order' && docType !== 'sales_order') {
      <div class="pp-formats">
        @for (f of FORMATS; track f.value) {
          <button class="fmt-btn" [class.active]="format === f.value" (click)="setFormat(f.value)">
            <span class="material-icons">{{ f.icon }}</span>
            {{ f.label }}
          </button>
        }
      </div>
    }
    @if (docType === 'purchase_order' || docType === 'sales_order') {
      <div class="pp-formats">
        @for (f of FORMATS; track f.value) {
          @if (f.value !== 'ticket') {
            <button class="fmt-btn" [class.active]="format === f.value" (click)="setFormat(f.value)">
              <span class="material-icons">{{ f.icon }}</span>
              {{ f.label }}
            </button>
          }
        }
      </div>
    }

    <!-- \u2500\u2500 Preview area \u2500\u2500 -->
    <div class="pp-body" [class.ticket-mode]="format === 'ticket'">
      <div class="preview-page" [class.page-a4]="format==='a4'" [class.page-a5]="format==='a5'" [class.page-ticket]="format==='ticket' || docType==='bon' && format==='a4'">

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 INVOICE A4 / A5 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        @if ((docType === 'invoice' || docType === 'avoir') && format !== 'ticket') {
          <div class="inv-doc">
            <div class="inv-header">
              <div class="inv-company">
                @if (companyLogoUrl) { <img [src]="companyLogoUrl" class="inv-co-logo" alt="logo"> }
                <div class="inv-co-name">{{ companyName }}</div>
                @if (companyPhone) { <div class="inv-co-sub">T\xE9l : {{ companyPhone }}</div> }
              </div>
              <div class="inv-title-block">
                <div class="inv-doctype">{{ docTitle }}</div>
                <div class="inv-ref">{{ invoice?.name }}</div>
              </div>
            </div>

            <div class="inv-meta">
              <div class="inv-meta-client">
                <div class="inv-meta-lbl">CLIENT</div>
                <div class="inv-meta-val">{{ invoice?.partnerName }}</div>
                @if (invoice?.warehouseName) { <div class="inv-meta-sub">Entrep\xF4t : {{ invoice?.warehouseName }}</div> }
              </div>
              <div class="inv-meta-dates">
                <div class="inv-mrow"><span>Date</span><span>{{ fmtDate(invoice?.date) }}</span></div>
                @if (invoice?.dateEcheance) {
                  <div class="inv-mrow"><span>\xC9ch\xE9ance</span><span>{{ fmtDate(invoice?.dateEcheance) }}</span></div>
                }
                @if (invoice?.salesOrderName) {
                  <div class="inv-mrow"><span>Commande</span><span>{{ invoice?.salesOrderName }}</span></div>
                }
                @if (invoice?.notes) {
                  <div class="inv-mrow"><span>Notes</span><span>{{ invoice!.notes }}</span></div>
                }
              </div>
            </div>

            <table class="inv-lines">
              <thead>
                <tr>
                  <th>Code</th><th class="tdesc">D\xE9signation</th>
                  <th class="tr">Qt\xE9</th><th class="tr">P.U.HT</th>
                  <th class="tr">P.U.TTC</th><th class="tr">Rabais HT/u</th>
                  <th class="tr">Rabais TTC/u</th><th class="tr">Mnt HT</th><th class="tr">Mnt TTC</th>
                </tr>
              </thead>
              <tbody>
                @for (l of salesLines; track $index) {
                  <tr>
                    <td>{{ l.productCode }}</td>
                    <td class="tdesc">{{ l.description }}</td>
                    <td class="tr">{{ fmt(l.quantity) }}</td>
                    <td class="tr">{{ fmt(l.prixUnitaire) }}</td>
                    <td class="tr tbold-teal">{{ fmt(l.prixUnitaireTTC ?? 0) }}</td>
                    <td class="tr trabais">{{ (l.rabaisUnitaire ?? 0) > 0 ? ('\u2013' + fmt(l.rabaisUnitaire)) : '\u2014' }}</td>
                    <td class="tr trabais-ttc">{{ (l.rabaisUnitaireTTC ?? 0) > 0 ? ('\u2013' + fmt(l.rabaisUnitaireTTC)) : '\u2014' }}</td>
                    <td class="tr">{{ fmt(l.montantHT) }}</td>
                    <td class="tr tbold">{{ fmt(l.montantTTC) }}</td>
                  </tr>
                }
                @if (consigneLines.length) {
                  <tr class="inv-section-hdr"><td colspan="9">CONSIGNES</td></tr>
                  @for (l of consigneLines; track $index) {
                    <tr class="inv-consigne">
                      <td>{{ l.productCode }}</td><td class="tdesc">{{ l.description }}</td>
                      <td class="tr">{{ fmt(l.quantity) }}</td>
                      <td colspan="4"></td><td></td>
                      <td class="tr">{{ fmt(l.montantTTC) }}</td>
                    </tr>
                  }
                }
                @if (deconsigneLines.length) {
                  <tr class="inv-section-hdr inv-decons-hdr"><td colspan="9">D\xC9CONSIGNES</td></tr>
                  @for (l of deconsigneLines; track $index) {
                    <tr class="inv-consigne">
                      <td>{{ l.productCode }}</td><td class="tdesc">{{ l.description }}</td>
                      <td class="tr">{{ fmt(l.quantity) }}</td>
                      <td colspan="4"></td><td></td>
                      <td class="tr">{{ fmt(l.montantTTC) }}</td>
                    </tr>
                  }
                }
                @if (invoice?.ristourneDetails?.length) {
                  <tr class="inv-section-hdr"><td colspan="9">RISTOURNES (\xE0 r\xE9cup\xE9rer s\xE9par\xE9ment)</td></tr>
                  @for (r of invoice?.ristourneDetails; track $index) {
                    <tr class="inv-rst">
                      <td colspan="2">{{ r.categoryName }}</td>
                      <td class="tr">{{ fmt(r.quantite) }}</td>
                      <td class="tr">{{ fmt(r.montantUnitaire) }}</td>
                      <td></td><td></td><td></td>
                      <td class="tr">{{ fmt(r.montantTotal) }}</td>
                      <td class="tr">{{ fmt(r.montantTotal) }}</td>
                    </tr>
                  }
                }
              </tbody>
            </table>

            <table class="inv-recap">
              <thead><tr>
                <th>Total Colis</th><th>Total PET</th><th>Total Casier</th><th>Liq. Nu</th>
                <th>Consigne (F)</th><th>D\xE9consigne (F)</th><th>Qt\xE9 Csgn</th><th>Qt\xE9 Dcsgn</th>
              </tr></thead>
              <tbody><tr>
                <td class="tr">{{ fmt(totalColis) }}</td>
                <td class="tr">{{ fmt(totalPET) }}</td>
                <td class="tr">{{ fmt(totalCasier) }}</td>
                <td class="tr">{{ fmt(invoice?.totalLiquideNu ?? 0) }}</td>
                <td class="tr">{{ fmt(consigneMontant) }}</td>
                <td class="tr trabais">\u2013 {{ fmt(deconsigneMontant) }}</td>
                <td class="tr">{{ fmt(qteConsigne) }}</td>
                <td class="tr trabais">\u2013 {{ fmt(qteDeconsigne) }}</td>
              </tr></tbody>
            </table>

            <div class="inv-totals-wrap">
              <div class="inv-totals">
                <div class="inv-trow"><span>Total HT</span><span>{{ fmt(invoice?.totalHT) }} F</span></div>
                <div class="inv-trow"><span>TVA (19,25%)</span><span>{{ fmt(invoice?.totalTVA) }} F</span></div>
                @if (invoice?.totalPrecompte) {
                  <div class="inv-trow"><span>Pr\xE9compte (PSA)</span><span>{{ fmt(invoice!.totalPrecompte) }} F</span></div>
                }
                @if ((invoice?.fraisEnlevementTTC ?? 0) > 0) {
                  <div class="inv-trow inv-enlevement"><span>Frais d'enl\xE8vement</span><span>+ {{ fmt(invoice?.fraisEnlevementTTC) }} F</span></div>
                }
                <div class="inv-trow inv-grand"><span>Total TTC</span><span>{{ fmt(invoice?.totalTTC) }} F</span></div>
                @if ((invoice?.totalRistourne ?? 0) > 0) {
                  <div class="inv-trow inv-ristourne"><span>Ristournes (\xE0 r\xE9cup\xE9rer)</span><span>{{ fmt(invoice?.totalRistourne) }} F</span></div>
                }
                @if ((invoice?.totalRabais ?? 0) > 0) {
                  <div class="inv-trow"><span>Rabais HT</span><span>- {{ fmt(invoice?.totalRabais) }} F</span></div>
                }
                @if ((invoice?.totalRabaisTTC ?? 0) > 0) {
                  <div class="inv-trow"><span>Rabais TTC d\xE9duit</span><span>- {{ fmt(invoice?.totalRabaisTTC) }} F</span></div>
                }
                <div class="inv-trow inv-net"><span>NET \xC0 PAYER</span><span>{{ fmt(invoice?.netAPayer ?? invoice?.totalTTC) }} F</span></div>
                @if (invoice?.montantPaye) {
                  <div class="inv-trow inv-paid"><span>D\xE9j\xE0 pay\xE9</span><span>{{ fmt(invoice?.montantPaye) }} F</span></div>
                }
                @if (invoice?.montantDu) {
                  <div class="inv-trow inv-due"><span>Reste d\xFB</span><span>{{ fmt(invoice?.montantDu) }} F</span></div>
                }
              </div>
            </div>

            <div class="inv-lettres">
              Arr\xEAt\xE9 \xE0 la somme de : <strong>{{ montantEnLettres(invoice?.netAPayer ?? invoice?.totalTTC) }}</strong>
            </div>
            <div class="inv-sigs">
              <div class="inv-sig"><div class="inv-sig-lbl">Signature du livreur</div><div class="inv-sig-area"></div></div>
              <div class="inv-sig"><div class="inv-sig-lbl">Cachet et signature du client</div><div class="inv-sig-area"></div></div>
            </div>
          </div>
        }

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TICKET \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        @if ((docType === 'invoice' || docType === 'avoir') && format === 'ticket') {
          <div class="tkt">
            @if (companyLogoUrl) { <div class="tkt-logo"><img [src]="companyLogoUrl" alt="logo"></div> }
            <div class="tkt-co">{{ companyName }}</div>
            @if (companyPhone) { <div class="tkt-phone">{{ companyPhone }}</div> }
            <div class="tkt-sep"></div>
            <div class="tkt-type">{{ docTitle }}</div>
            <div class="tkt-ref">{{ invoice?.name }}</div>
            <div class="tkt-sep"></div>
            <div class="tkt-row"><span>Date</span><span>{{ fmtDate(invoice?.date) }}</span></div>
            <div class="tkt-row"><span>Client</span><span>{{ invoice?.partnerName }}</span></div>
            @if (invoice?.notes) {
              <div class="tkt-row"><span>Notes</span><span>{{ invoice!.notes }}</span></div>
            }
            <div class="tkt-sep"></div>
            @for (l of salesLines; track $index) {
              <div class="tkt-prod-name">{{ l.productCode || l.description }}</div>
              <div class="tkt-prod-row">
                <span>{{ fmt(l.quantity) }} \xD7 {{ fmt(l.prixUnitaireTTC ?? l.prixUnitaire) }}</span>
                <span class="tbold">{{ fmt(l.montantTTC) }} F</span>
              </div>
            }
            @if (consigneLines.length) {
              <div class="tkt-sep-label">\u2014 Consignes \u2014</div>
              @for (l of consigneLines; track $index) {
                <div class="tkt-prod-name">{{ l.productCode || l.description }}</div>
                <div class="tkt-prod-row"><span>{{ fmt(l.quantity) }}</span><span>{{ fmt(l.montantTTC) }} F</span></div>
              }
            }
            @if (deconsigneLines.length) {
              <div class="tkt-sep-label">\u2014 D\xE9consignes \u2014</div>
              @for (l of deconsigneLines; track $index) {
                <div class="tkt-prod-name">{{ l.productCode || l.description }}</div>
                <div class="tkt-prod-row"><span>{{ fmt(l.quantity) }}</span><span>-{{ fmt(l.montantTTC) }} F</span></div>
              }
            }
            <div class="tkt-sep"></div>
            <div class="tkt-row sm"><span>Total Colis</span><span>{{ fmt(totalColis) }}</span></div>
            @if (totalPET > 0) {
              <div class="tkt-row sm"><span>Total PET</span><span>{{ fmt(totalPET) }}</span></div>
            }
            @if (totalCasier > 0) {
              <div class="tkt-row sm"><span>Total Casier</span><span>{{ fmt(totalCasier) }}</span></div>
            }
            @if ((invoice?.totalLiquideNu ?? 0) > 0) {
              <div class="tkt-row sm"><span>Liq. Nu</span><span>{{ fmt(invoice?.totalLiquideNu) }} F</span></div>
            }
            @if (consigneMontant > 0) {
              <div class="tkt-row sm"><span>Consigne</span><span>{{ fmt(consigneMontant) }} F</span></div>
            }
            @if (deconsigneMontant > 0) {
              <div class="tkt-row sm"><span>D\xE9consigne</span><span>\u2013 {{ fmt(deconsigneMontant) }} F</span></div>
            }
            <div class="tkt-sep"></div>
            <div class="tkt-row sm"><span>Total HT</span><span>{{ fmt(invoice?.totalHT) }} F</span></div>
            <div class="tkt-row sm"><span>TVA 19,25%</span><span>{{ fmt(invoice?.totalTVA) }} F</span></div>
            @if (invoice?.totalPrecompte) {
              <div class="tkt-row sm"><span>PSA</span><span>{{ fmt(invoice!.totalPrecompte) }} F</span></div>
            }
            @if ((invoice?.fraisEnlevementTTC ?? 0) > 0) {
              <div class="tkt-row sm"><span>Frais enl\xE8v.</span><span>+ {{ fmt(invoice?.fraisEnlevementTTC) }} F</span></div>
            }
            <div class="tkt-row tkt-subtotal"><span>Total TTC</span><span>{{ fmt(invoice?.totalTTC) }} F</span></div>
            @if ((invoice?.totalRistourne ?? 0) > 0) {
              <div class="tkt-sep-dots"></div>
              <div class="tkt-ristourne-hdr">RISTOURNES (\xE0 r\xE9cup\xE9rer)</div>
              <div class="tkt-row tkt-ristourne-tot"><span>Total ristournes</span><span>{{ fmt(invoice?.totalRistourne) }} F</span></div>
              <div class="tkt-sep-dots"></div>
            }
            @if ((invoice?.totalRabais ?? 0) > 0) {
              <div class="tkt-row sm"><span>Rabais HT</span><span>- {{ fmt(invoice?.totalRabais) }} F</span></div>
            }
            @if ((invoice?.totalRabaisTTC ?? 0) > 0) {
              <div class="tkt-row sm"><span>Rabais TTC</span><span>- {{ fmt(invoice?.totalRabaisTTC) }} F</span></div>
            }
            <div class="tkt-sep"></div>
            <div class="tkt-total"><span>NET \xC0 PAYER</span><span>{{ fmt(invoice?.netAPayer ?? invoice?.totalTTC) }} F</span></div>
            @if (invoice?.montantPaye) {
              <div class="tkt-row sm"><span>D\xE9j\xE0 pay\xE9</span><span>{{ fmt(invoice!.montantPaye) }} F</span></div>
            }
            @if ((invoice?.montantDu ?? 0) > 0) {
              <div class="tkt-row sm"><span>Reste d\xFB</span><span>{{ fmt(invoice?.montantDu) }} F</span></div>
            }
            <div class="tkt-sep"></div>
            <div class="tkt-lettres">{{ montantEnLettres(invoice?.netAPayer ?? invoice?.totalTTC) }}</div>
            <div class="tkt-thanks">Merci de votre confiance !</div>
            @if (invoice?.createdBy) {
              <div class="tkt-row sm"><span>Agent</span><span>{{ invoice!.createdBy }}</span></div>
            }
            <div class="tkt-sep"></div>
            <div class="tkt-sig-box">
              <div class="tkt-sig-lbl">Signature du livreur</div>
              <div class="tkt-sig-name">Nom : ___________________________</div>
              <div class="tkt-sig-area"></div>
            </div>
            <div class="tkt-sig-box" style="margin-top:3mm">
              <div class="tkt-sig-lbl">Cachet &amp; signature client</div>
              <div class="tkt-sig-name">Nom : ___________________________</div>
              <div class="tkt-sig-area"></div>
            </div>
          </div>
        }

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 BON DE LIVRAISON \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        @if (docType === 'bon') {
          <div class="inv-doc">
            <div class="inv-header">
              <div class="inv-company">
                @if (companyLogoUrl) { <img [src]="companyLogoUrl" class="inv-co-logo" alt="logo"> }
                <div class="inv-co-name">{{ companyName }}</div>
                @if (companyPhone) { <div class="inv-co-sub">T\xE9l : {{ companyPhone }}</div> }
              </div>
              <div class="inv-title-block">
                <div class="inv-doctype">BON DE LIVRAISON</div>
                <div class="inv-ref">{{ picking?.name }}</div>
              </div>
            </div>

            <div class="inv-meta">
              <div class="inv-meta-client">
                <div class="inv-meta-lbl">CLIENT / DESTINATAIRE</div>
                <div class="inv-meta-val">{{ picking?.partnerName || '\u2014' }}</div>
              </div>
              <div class="inv-meta-dates">
                <div class="inv-mrow"><span>Date</span><span>{{ fmtDate(picking?.scheduledDate) }}</span></div>
                @if (picking?.origin) { <div class="inv-mrow"><span>Origine</span><span>{{ picking?.origin }}</span></div> }
                @if (picking?.notes)  { <div class="inv-mrow"><span>Notes</span><span>{{ picking?.notes }}</span></div>  }
              </div>
            </div>

            <table class="inv-lines">
              <thead>
                <tr>
                  <th class="tr">#</th><th>Code</th><th class="tdesc">D\xE9signation</th>
                  <th class="tr">Qt\xE9 dem.</th><th class="tr">Qt\xE9 livr\xE9e</th><th>U.M.</th>
                </tr>
              </thead>
              <tbody>
                @for (m of pickingMoves; track $index) {
                  <tr>
                    <td class="tr tgray">{{ $index + 1 }}</td>
                    <td>{{ m.productCode }}</td>
                    <td class="tdesc">{{ m.productName }}</td>
                    <td class="tr">{{ fmt(m.qtyDemanded) }}</td>
                    <td class="tr tbold">{{ fmt(m.qtyDone ?? m.qtyDemanded) }}</td>
                    <td>{{ m.uomName }}</td>
                  </tr>
                }
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="4" class="tr inv-total-lbl">TOTAL COLIS LIVR\xC9S</td>
                  <td class="tr inv-total-val">{{ fmt(totalPickingQty) }}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>

            <div class="inv-sigs">
              <div class="inv-sig">
                <div class="inv-sig-lbl">Signature du livreur</div>
                <div class="inv-sig-name">Nom : ________________________</div>
                <div class="inv-sig-area"></div>
              </div>
              <div class="inv-sig">
                <div class="inv-sig-lbl">Cachet et signature du client</div>
                <div class="inv-sig-name">Nom : ________________________</div>
                <div class="inv-sig-area"></div>
              </div>
            </div>
            <div class="inv-footer-note">Document non contractuel \xB7 {{ companyName }}</div>
          </div>
        }

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 FACTURE FOURNISSEUR A4 / A5 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        @if (docType === 'purchase_invoice' && format !== 'ticket') {
          <div class="inv-doc">
            <div class="inv-header">
              <div class="inv-company">
                @if (companyLogoUrl) { <img [src]="companyLogoUrl" class="inv-co-logo" alt="logo"> }
                <div class="inv-co-name">{{ companyName }}</div>
                @if (companyPhone) { <div class="inv-co-sub">T\xE9l : {{ companyPhone }}</div> }
              </div>
              <div class="inv-title-block">
                <div class="inv-doctype">{{ docTitle }}</div>
                <div class="inv-ref">{{ purchaseInvoice?.name }}</div>
              </div>
            </div>

            <div class="inv-meta">
              <div class="inv-meta-client">
                <div class="inv-meta-lbl">FOURNISSEUR</div>
                <div class="inv-meta-val">{{ purchaseInvoice?.partnerName }}</div>
              </div>
              <div class="inv-meta-dates">
                <div class="inv-mrow"><span>Date</span><span>{{ fmtDate(purchaseInvoice?.date) }}</span></div>
                @if (purchaseInvoice?.dateEcheance) {
                  <div class="inv-mrow"><span>\xC9ch\xE9ance</span><span>{{ fmtDate(purchaseInvoice?.dateEcheance) }}</span></div>
                }
                @if (purchaseInvoice?.purchaseOrderName) {
                  <div class="inv-mrow"><span>Commande</span><span>{{ purchaseInvoice?.purchaseOrderName }}</span></div>
                }
                @if (purchaseInvoice?.notes) {
                  <div class="inv-mrow"><span>R\xE9f.</span><span>{{ purchaseInvoice!.notes }}</span></div>
                }
              </div>
            </div>

            <table class="inv-lines">
              <thead>
                <tr>
                  <th>Code</th><th class="tdesc">D\xE9signation</th>
                  <th class="tr">Qt\xE9</th><th class="tr">P.U.HT</th>
                  <th class="tr">P.U.TTC</th><th class="tr">Rabais HT/u</th><th class="tr">Rabais TTC/u</th>
                  <th class="tr">Mnt HT</th><th class="tr">Mnt TTC</th>
                </tr>
              </thead>
              <tbody>
                @for (l of purchaseNormalLines; track $index) {
                  <tr>
                    <td>{{ l.productCode }}</td>
                    <td class="tdesc">{{ l.description }}</td>
                    <td class="tr">{{ fmt(l.quantity) }}</td>
                    <td class="tr">{{ fmt((l.prixUnitaire) + (l.rabaisUnitaire ?? 0)) }}</td>
                    <td class="tr tbold-teal">{{ fmt(((l.prixUnitaire) + (l.rabaisUnitaire ?? 0)) * (1 + (l.tauxTVA ?? 0) / 100)) }}</td>
                    <td class="tr trabais">{{ (l.rabaisUnitaire ?? 0) > 0 ? ('\u2013' + fmt(l.rabaisUnitaire)) : '\u2014' }}</td>
                    <td class="tr trabais-ttc">{{ (l.rabaisUnitaire ?? 0) > 0 ? ('\u2013' + fmt((l.rabaisUnitaire ?? 0) * (1 + (l.tauxTVA ?? 0) / 100))) : '\u2014' }}</td>
                    <td class="tr">{{ fmt(l.montantHT) }}</td>
                    <td class="tr tbold">{{ fmt((l.montantHT ?? 0) + (l.montantTVA ?? 0) + (l.precompte ?? 0)) }}</td>
                  </tr>
                }
                @if (purchaseConsigneLines.length) {
                  <tr class="inv-section-hdr"><td colspan="9">CONSIGNES</td></tr>
                  @for (l of purchaseConsigneLines; track $index) {
                    <tr class="inv-consigne">
                      <td>{{ l.productCode }}</td><td class="tdesc">{{ l.description }}</td>
                      <td class="tr">{{ fmt(l.quantity) }}</td>
                      <td colspan="4"></td><td></td>
                      <td class="tr">{{ fmt(l.montantTTC) }}</td>
                    </tr>
                  }
                }
                @if (purchaseDeconsigneLines.length) {
                  <tr class="inv-section-hdr inv-decons-hdr"><td colspan="9">D\xC9CONSIGNES</td></tr>
                  @for (l of purchaseDeconsigneLines; track $index) {
                    <tr class="inv-consigne">
                      <td>{{ l.productCode }}</td><td class="tdesc">{{ l.description }}</td>
                      <td class="tr">{{ fmt(l.quantity) }}</td>
                      <td colspan="4"></td><td></td>
                      <td class="tr">{{ fmt(l.montantTTC) }}</td>
                    </tr>
                  }
                }
              </tbody>
            </table>

            <table class="inv-recap">
              <thead><tr>
                <th>Total Colis</th><th>Total PET</th><th>Total Casier</th><th>Liq. Nu</th>
                <th>Consigne (F)</th><th>D\xE9consigne (F)</th><th>Qt\xE9 Csgn</th><th>Qt\xE9 Dcsgn</th>
              </tr></thead>
              <tbody><tr>
                <td class="tr">{{ fmt(purchaseTotalColis) }}</td>
                <td class="tr">{{ fmt(purchaseTotalPET) }}</td>
                <td class="tr">0</td>
                <td class="tr">{{ fmt(purchaseInvoice?.totalLiquideNu ?? 0) }}</td>
                <td class="tr">{{ fmt(purchaseConsigneMontant) }}</td>
                <td class="tr trabais">\u2013 {{ fmt(purchaseDeconsigneMontant) }}</td>
                <td class="tr">{{ fmt(purchaseQteConsigne) }}</td>
                <td class="tr trabais">\u2013 {{ fmt(purchaseQteDeconsigne) }}</td>
              </tr></tbody>
            </table>

            <div class="inv-totals-wrap">
              <div class="inv-totals">
                <div class="inv-trow"><span>Total HT</span><span>{{ fmt(purchaseInvoice?.totalHT) }} F</span></div>
                <div class="inv-trow"><span>TVA (19,25%)</span><span>{{ fmt(purchaseInvoice?.totalTVA) }} F</span></div>
                @if (purchaseInvoice?.totalPrecompte) {
                  <div class="inv-trow"><span>Pr\xE9compte (PSA)</span><span>{{ fmt(purchaseInvoice?.totalPrecompte) }} F</span></div>
                }
                @if ((purchaseInvoice?.fraisEnlevementTTC ?? 0) > 0) {
                  <div class="inv-trow inv-enlevement"><span>Frais d'enl\xE8vement</span><span>+ {{ fmt(purchaseInvoice?.fraisEnlevementTTC) }} F</span></div>
                }
                <div class="inv-trow inv-grand"><span>Total TTC</span><span>{{ fmt(purchaseInvoice?.totalTTC) }} F</span></div>
                @if (purchaseTotalRabaisHT > 0) {
                  <div class="inv-trow inv-ristourne"><span>Rabais HT (601901)</span><span>\u2013 {{ fmt(purchaseTotalRabaisHT) }} F</span></div>
                }
                @if (purchaseTotalRabaisTTC > 0) {
                  <div class="inv-trow"><span>Rabais TTC d\xE9duit</span><span>\u2013 {{ fmt(purchaseTotalRabaisTTC) }} F</span></div>
                }
                <div class="inv-trow inv-net"><span>NET \xC0 PAYER</span><span>{{ fmt(purchaseInvoice?.netAPayer ?? purchaseInvoice?.totalTTC) }} F</span></div>
                @if (purchaseInvoice?.montantPaye) {
                  <div class="inv-trow inv-paid"><span>D\xE9j\xE0 pay\xE9</span><span>{{ fmt(purchaseInvoice?.montantPaye) }} F</span></div>
                }
                @if ((purchaseInvoice?.montantDu ?? 0) > 0.01) {
                  <div class="inv-trow inv-due"><span>Reste d\xFB</span><span>{{ fmt(purchaseInvoice?.montantDu) }} F</span></div>
                }
              </div>
            </div>

            <div class="inv-lettres">
              Arr\xEAt\xE9 \xE0 la somme de : <strong>{{ montantEnLettres(purchaseInvoice?.netAPayer ?? purchaseInvoice?.totalTTC) }}</strong>
            </div>
            <div class="inv-sigs">
              <div class="inv-sig"><div class="inv-sig-lbl">Signature du fournisseur</div><div class="inv-sig-area"></div></div>
              <div class="inv-sig"><div class="inv-sig-lbl">Cachet et signature</div><div class="inv-sig-area"></div></div>
            </div>
          </div>
        }

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 FACTURE FOURNISSEUR TICKET \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        @if (docType === 'purchase_invoice' && format === 'ticket') {
          <div class="tkt">
            @if (companyLogoUrl) { <div class="tkt-logo"><img [src]="companyLogoUrl" alt="logo"></div> }
            <div class="tkt-co">{{ companyName }}</div>
            @if (companyPhone) { <div class="tkt-phone">{{ companyPhone }}</div> }
            <div class="tkt-sep"></div>
            <div class="tkt-type">{{ docTitle }}</div>
            <div class="tkt-ref">{{ purchaseInvoice?.name }}</div>
            <div class="tkt-sep"></div>
            <div class="tkt-row"><span>Date</span><span>{{ fmtDate(purchaseInvoice?.date) }}</span></div>
            <div class="tkt-row"><span>Fournisseur</span><span>{{ purchaseInvoice?.partnerName }}</span></div>
            <div class="tkt-sep"></div>
            @for (l of purchaseInvoiceLines; track $index) {
              <div class="tkt-prod-name">{{ l.description || l.productCode }}</div>
              <div class="tkt-prod-row">
                <span>{{ fmt(l.quantity) }} \xD7 {{ fmt(l.prixUnitaire) }}</span>
                <span class="tbold">{{ fmt(l.montantTTC) }} F</span>
              </div>
            }
            <div class="tkt-sep"></div>
            <div class="tkt-row sm"><span>Total HT</span><span>{{ fmt(purchaseInvoice?.totalHT) }} F</span></div>
            <div class="tkt-row sm"><span>TVA</span><span>{{ fmt(purchaseInvoice?.totalTVA) }} F</span></div>
            <div class="tkt-sep"></div>
            <div class="tkt-total"><span>NET \xC0 PAYER</span><span>{{ fmt(purchaseInvoice?.netAPayer ?? purchaseInvoice?.totalTTC) }} F</span></div>
            <div class="tkt-sep"></div>
            <div class="tkt-lettres">{{ montantEnLettres(purchaseInvoice?.netAPayer ?? purchaseInvoice?.totalTTC) }}</div>
          </div>
        }

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 BON DE COMMANDE FOURNISSEUR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        @if (docType === 'purchase_order') {
          <div class="inv-doc">
            <div class="inv-header">
              <div class="inv-company">
                @if (companyLogoUrl) { <img [src]="companyLogoUrl" class="inv-co-logo" alt="logo"> }
                <div class="inv-co-name">{{ companyName }}</div>
                @if (companyPhone) { <div class="inv-co-sub">T\xE9l : {{ companyPhone }}</div> }
              </div>
              <div class="inv-title-block">
                <div class="inv-doctype">BON DE COMMANDE</div>
                <div class="inv-ref">{{ purchaseOrder?.name }}</div>
              </div>
            </div>
            <div class="inv-meta">
              <div class="inv-meta-client">
                <div class="inv-meta-lbl">FOURNISSEUR</div>
                <div class="inv-meta-val">{{ purchaseOrder?.partnerName || '\u2014' }}</div>
              </div>
              <div class="inv-meta-dates">
                <div class="inv-mrow"><span>Date</span><span>{{ fmtDate(purchaseOrder?.date) }}</span></div>
                @if (purchaseOrder?.dateExpected) {
                  <div class="inv-mrow"><span>Livraison pr\xE9vue</span><span>{{ fmtDate(purchaseOrder?.dateExpected) }}</span></div>
                }
                @if (purchaseOrder?.notes) {
                  <div class="inv-mrow"><span>Notes</span><span>{{ purchaseOrder?.notes }}</span></div>
                }
              </div>
            </div>
            <table class="inv-lines">
              <thead>
                <tr>
                  <th class="tr">#</th><th>Code</th><th class="tdesc">D\xE9signation</th>
                  <th class="tr">Qt\xE9</th><th class="tr">P.U. HT</th>
                  <th class="tr">TVA</th><th class="tr">Total HT</th><th class="tr">Total TTC</th>
                </tr>
              </thead>
              <tbody>
                @for (l of (purchaseOrder?.lines ?? []); track $index) {
                  <tr>
                    <td class="tr tgray">{{ $index + 1 }}</td>
                    <td>{{ l.productCode }}</td>
                    <td class="tdesc">{{ l.description }}</td>
                    <td class="tr">{{ fmt(l.quantity) }}</td>
                    <td class="tr">{{ fmt(l.prixUnitaire) }}</td>
                    <td class="tr">{{ l.tauxTVA ? (l.tauxTVA + '%') : '\u2014' }}</td>
                    <td class="tr">{{ fmt(l.montantHT) }}</td>
                    <td class="tr tbold">{{ fmt(l.montantTTC) }}</td>
                  </tr>
                }
              </tbody>
            </table>
            <div class="inv-totals-wrap">
              <div class="inv-totals">
                <div class="inv-trow"><span>Total HT</span><span>{{ fmt(purchaseOrder?.totalHT) }} F</span></div>
                <div class="inv-trow"><span>Taxes (TVA + PSA)</span><span>{{ fmt((purchaseOrder?.totalTTC ?? 0) - (purchaseOrder?.totalHT ?? 0)) }} F</span></div>
                <div class="inv-trow inv-net"><span>TOTAL TTC</span><span>{{ fmt(purchaseOrder?.totalTTC) }} F</span></div>
              </div>
            </div>
            <div class="inv-lettres">
              Arr\xEAt\xE9 \xE0 la somme de : <strong>{{ montantEnLettres(purchaseOrder?.totalTTC) }}</strong>
            </div>
            <div class="inv-sigs">
              <div class="inv-sig">
                <div class="inv-sig-lbl">Le fournisseur</div>
                <div class="inv-sig-name">Nom : ________________________</div>
                <div class="inv-sig-area"></div>
              </div>
              <div class="inv-sig">
                <div class="inv-sig-lbl">Pour la soci\xE9t\xE9</div>
                <div class="inv-sig-name">Nom : ________________________</div>
                <div class="inv-sig-area"></div>
              </div>
            </div>
            <div class="inv-footer-note">Bon de commande soumis \xE0 acceptation \xB7 {{ companyName }}</div>
          </div>
        }

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 BON DE COMMANDE CLIENT \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        @if (docType === 'sales_order') {
          <div class="inv-doc">
            <div class="inv-header">
              <div class="inv-company">
                @if (companyLogoUrl) { <img [src]="companyLogoUrl" class="inv-co-logo" alt="logo"> }
                <div class="inv-co-name">{{ companyName }}</div>
                @if (companyPhone) { <div class="inv-co-sub">T\xE9l : {{ companyPhone }}</div> }
              </div>
              <div class="inv-title-block">
                <div class="inv-doctype">BON DE COMMANDE</div>
                <div class="inv-ref">{{ salesOrder?.name }}</div>
              </div>
            </div>
            <div class="inv-meta">
              <div class="inv-meta-client">
                <div class="inv-meta-lbl">CLIENT</div>
                <div class="inv-meta-val">{{ salesOrder?.partnerName || '\u2014' }}</div>
                @if (salesOrder?.warehouseName) { <div class="inv-meta-sub">{{ salesOrder?.warehouseName }}</div> }
              </div>
              <div class="inv-meta-dates">
                <div class="inv-mrow"><span>Date</span><span>{{ fmtDate(salesOrder?.date) }}</span></div>
                @if (salesOrder?.dateEcheance) {
                  <div class="inv-mrow"><span>\xC9ch\xE9ance</span><span>{{ fmtDate(salesOrder?.dateEcheance) }}</span></div>
                }
                @if (salesOrder?.invoiceName) {
                  <div class="inv-mrow"><span>Facture</span><span>{{ salesOrder?.invoiceName }}</span></div>
                }
                @if (salesOrder?.notes) {
                  <div class="inv-mrow"><span>Notes</span><span>{{ salesOrder?.notes }}</span></div>
                }
              </div>
            </div>
            <table class="inv-lines">
              <thead>
                <tr>
                  <th class="tr">#</th><th>Code</th><th class="tdesc">D\xE9signation</th>
                  <th class="tr">Qt\xE9</th><th class="tr">P.U. HT</th>
                  <th class="tr">Remise</th><th class="tr">TVA</th>
                  <th class="tr">Mnt HT</th><th class="tr">Mnt TTC</th>
                </tr>
              </thead>
              <tbody>
                @for (l of (salesOrder?.lines ?? []); track $index) {
                  <tr>
                    <td class="tr tgray">{{ $index + 1 }}</td>
                    <td>{{ l.productCode }}</td>
                    <td class="tdesc">{{ l.description }}</td>
                    <td class="tr">{{ fmt(l.quantity) }}</td>
                    <td class="tr">{{ fmt(l.prixUnitaire) }}</td>
                    <td class="tr">{{ l.tauxRemise ? (l.tauxRemise + '%') : '\u2014' }}</td>
                    <td class="tr">{{ l.tauxTVA ? (l.tauxTVA + '%') : '\u2014' }}</td>
                    <td class="tr">{{ fmt(l.montantHT) }}</td>
                    <td class="tr tbold">{{ fmt(l.montantTTC) }}</td>
                  </tr>
                }
              </tbody>
            </table>
            <div class="inv-totals-wrap">
              <div class="inv-totals">
                @if (salesOrder?.totalRemise) {
                  <div class="inv-trow inv-deduct"><span>Remise totale</span><span>\u2013 {{ fmt(salesOrder?.totalRemise) }} F</span></div>
                }
                <div class="inv-trow"><span>Total HT</span><span>{{ fmt(salesOrder?.totalHT) }} F</span></div>
                <div class="inv-trow"><span>TVA (19,25%)</span><span>{{ fmt(salesOrder?.totalTVA) }} F</span></div>
                <div class="inv-trow inv-net"><span>TOTAL TTC</span><span>{{ fmt(salesOrder?.totalTTC) }} F</span></div>
              </div>
            </div>
            <div class="inv-lettres">
              Arr\xEAt\xE9 \xE0 la somme de : <strong>{{ montantEnLettres(salesOrder?.totalTTC) }}</strong>
            </div>
            <div class="inv-sigs">
              <div class="inv-sig">
                <div class="inv-sig-lbl">Le client</div>
                <div class="inv-sig-name">Nom : ________________________</div>
                <div class="inv-sig-area"></div>
              </div>
              <div class="inv-sig">
                <div class="inv-sig-lbl">Pour la soci\xE9t\xE9</div>
                <div class="inv-sig-name">Nom : ________________________</div>
                <div class="inv-sig-area"></div>
              </div>
            </div>
            <div class="inv-footer-note">Bon de commande \xB7 {{ companyName }}</div>
          </div>
        }

      </div><!-- /preview-page -->
    </div><!-- /pp-body -->

    <!-- \u2500\u2500 Footer \u2500\u2500 -->
    <div class="pp-footer">
      <button class="pp-btn-cancel" (click)="close()">
        <span class="material-icons">close</span> Fermer
      </button>
      <button class="pp-btn-print" (click)="print()" [disabled]="printing">
        <span class="material-icons">{{ printing ? 'hourglass_empty' : 'print' }}</span>
        {{ printing ? 'G\xE9n\xE9ration...' : 'Imprimer' }}
      </button>
    </div>

  </div>
</div>
`, styles: ['/* src/app/shared/components/print-preview/print-preview.component.scss */\n.pp-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.65);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  z-index: 9999;\n  padding: 20px;\n  overflow-y: auto;\n}\n.pp-modal {\n  background: var(--bg-surface);\n  border-radius: 10px;\n  width: 100%;\n  max-width: 860px;\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 40px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);\n}\n.pp-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid var(--border);\n  background: var(--bg-hover);\n  border-radius: 10px 10px 0 0;\n}\n.pp-header .pp-header-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.pp-header .pp-header-left .material-icons {\n  color: var(--accent);\n  font-size: 20px;\n}\n.pp-header .pp-header-left strong {\n  color: var(--accent);\n}\n.pp-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  border-radius: 50%;\n  padding: 4px;\n  transition: all 0.15s;\n}\n.pp-close:hover {\n  background: var(--bg-elevated);\n  color: var(--text-primary);\n}\n.pp-close .material-icons {\n  font-size: 20px;\n}\n.pp-formats {\n  display: flex;\n  gap: 8px;\n  padding: 12px 20px;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--bg-surface);\n}\n.fmt-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 16px;\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.fmt-btn .material-icons {\n  font-size: 15px;\n}\n.fmt-btn:hover {\n  background: var(--bg-hover);\n  border-color: var(--accent);\n}\n.fmt-btn.active {\n  background: var(--accent);\n  color: white;\n  border-color: var(--accent);\n}\n.pp-body {\n  flex: 1;\n  overflow-y: auto;\n  background: var(--bg-elevated);\n  padding: 32px 24px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 420px;\n}\n.pp-body.ticket-mode {\n  align-items: flex-start;\n  padding-top: 24px;\n}\n.preview-page {\n  background: var(--bg-surface);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.22);\n  transform-origin: top center;\n}\n.preview-page.page-a4 {\n  width: 210mm;\n  min-height: 297mm;\n  transform: scale(0.6);\n  margin-top: -59mm;\n  margin-bottom: -118.8mm;\n}\n.preview-page.page-a5 {\n  width: 148mm;\n  min-height: 210mm;\n  transform: scale(0.72);\n  margin-top: -29mm;\n  margin-bottom: -58.8mm;\n}\n.preview-page.page-ticket {\n  width: 80mm;\n  min-height: 120mm;\n  transform: scale(0.9);\n  margin-bottom: -12mm;\n}\n.inv-doc {\n  padding: 14mm;\n  font-family: Arial, sans-serif;\n  font-size: 9pt;\n  color: var(--text-primary);\n}\n.inv-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  border-bottom: 2px solid #222;\n  padding-bottom: 4mm;\n  margin-bottom: 8mm;\n}\n.inv-co-logo {\n  max-height: 48px;\n  max-width: 120px;\n  object-fit: contain;\n  display: block;\n  margin-bottom: 4px;\n}\n.inv-co-name {\n  font-size: 15pt;\n  font-weight: 700;\n  color: var(--accent);\n}\n.inv-co-sub {\n  font-size: 9pt;\n  color: var(--text-secondary);\n  margin-top: 2px;\n}\n.inv-title-block {\n  text-align: right;\n}\n.inv-doctype {\n  font-size: 18pt;\n  font-weight: 800;\n  letter-spacing: 1px;\n}\n.inv-ref {\n  font-size: 11pt;\n  font-weight: 600;\n  color: var(--accent);\n  margin-top: 2px;\n}\n.inv-meta {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8mm;\n}\n.inv-meta-lbl {\n  font-size: 7pt;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  margin-bottom: 2px;\n}\n.inv-meta-val {\n  font-size: 12pt;\n  font-weight: 700;\n}\n.inv-meta-sub {\n  font-size: 8pt;\n  color: var(--text-secondary);\n}\n.inv-meta-dates {\n  text-align: right;\n}\n.inv-mrow {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  font-size: 9pt;\n  margin-bottom: 2px;\n}\n.inv-mrow span:first-child {\n  color: var(--text-muted);\n  font-size: 8pt;\n}\ntable.inv-lines {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 6mm;\n  font-size: 8.5pt;\n}\ntable.inv-lines thead tr {\n  background: var(--accent);\n  color: white;\n}\ntable.inv-lines thead th {\n  padding: 4px 6px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 7.5pt;\n}\ntable.inv-lines tbody tr:nth-child(even) {\n  background: var(--bg-elevated);\n}\ntable.inv-lines tbody td {\n  padding: 3px 6px;\n  border-bottom: 1px solid #e8e8e8;\n}\ntable.inv-lines tfoot td {\n  border-top: 2px solid var(--accent);\n  padding: 4px 6px;\n  background: var(--bg-elevated);\n}\n.tdesc {\n  max-width: 110px;\n  word-break: break-word;\n}\n.tr {\n  text-align: right;\n}\n.tbold {\n  font-weight: 700;\n}\n.tbold-teal {\n  font-weight: 700;\n  color: var(--accent);\n}\n.trabais {\n  color: #e65100;\n  font-weight: 600;\n}\n.trabais-ttc {\n  color: #c0392b;\n  font-weight: 700;\n}\n.tgray {\n  color: var(--text-muted);\n  font-size: 7.5pt;\n}\n.inv-section-hdr td {\n  background: var(--accent-light);\n  font-size: 7pt;\n  font-weight: 700;\n  color: var(--accent);\n  text-transform: uppercase;\n  padding: 3px 6px;\n}\n.inv-decons-hdr td {\n  background: #fff3e0;\n  color: #e67e22;\n}\n.inv-consigne td,\n.inv-rst td {\n  background: var(--bg-hover);\n  color: var(--text-secondary);\n  font-size: 8pt;\n}\n.inv-red {\n  color: var(--danger);\n}\n.inv-recap {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 6px;\n  font-size: 7.5pt;\n}\n.inv-recap thead tr {\n  background: var(--accent-light);\n}\n.inv-recap thead th {\n  padding: 3px 5px;\n  font-weight: 700;\n  color: var(--accent);\n  text-align: right;\n  border: 1px solid #cde;\n  font-size: 7pt;\n}\n.inv-recap tbody td {\n  padding: 3px 5px;\n  border: 1px solid #e0e0e0;\n  background: #fafafa;\n  font-weight: 600;\n}\n.inv-totals-wrap {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 5mm;\n}\n.inv-totals {\n  width: 72mm;\n}\n.inv-trow {\n  display: flex;\n  justify-content: space-between;\n  padding: 2px 6px;\n  font-size: 9pt;\n  border-bottom: 1px solid #eee;\n}\n.inv-grand {\n  font-weight: 700;\n  background: var(--bg-elevated);\n}\n.inv-net {\n  font-size: 11pt;\n  font-weight: 800;\n  background: var(--accent);\n  color: white;\n  padding: 4px 6px;\n}\n.inv-deduct span:last-child {\n  color: var(--danger);\n}\n.inv-ristourne span:last-child {\n  color: var(--success);\n}\n.inv-enlevement span:last-child {\n  color: #c60;\n  font-weight: 600;\n}\n.inv-paid span:last-child {\n  color: var(--success);\n}\n.inv-due {\n  font-weight: 700;\n  color: var(--danger);\n}\n.inv-total-lbl {\n  font-size: 8.5pt;\n  font-weight: 700;\n}\n.inv-total-val {\n  font-size: 11pt;\n  font-weight: 800;\n  color: var(--accent);\n}\n.inv-lettres {\n  font-size: 8.5pt;\n  font-style: italic;\n  border-top: 1px solid var(--border);\n  padding-top: 3mm;\n  margin-bottom: 8mm;\n}\n.inv-sigs {\n  display: flex;\n  justify-content: space-between;\n  gap: 10mm;\n  margin-top: 8mm;\n}\n.inv-sig {\n  flex: 1;\n}\n.inv-sig-lbl {\n  font-size: 8pt;\n  font-weight: 700;\n  margin-bottom: 2mm;\n}\n.inv-sig-name {\n  font-size: 8pt;\n  color: var(--text-secondary);\n  margin-bottom: 2mm;\n}\n.inv-sig-area {\n  height: 20mm;\n  border: 1px solid #aaa;\n  border-radius: 2px;\n}\n.inv-footer-note {\n  font-size: 7pt;\n  color: var(--text-muted);\n  text-align: center;\n  margin-top: 6mm;\n  border-top: 1px solid #eee;\n  padding-top: 2mm;\n}\n.tkt {\n  width: 80mm;\n  padding: 3mm 4mm;\n  font-family: "Courier New", monospace;\n  font-size: 8pt;\n  font-weight: 700;\n}\n.tkt-logo {\n  text-align: center;\n  margin-bottom: 2mm;\n}\n.tkt-logo img {\n  max-height: 32px;\n  max-width: 60mm;\n  object-fit: contain;\n}\n.tkt-co {\n  font-size: 11pt;\n  font-weight: 800;\n  text-align: center;\n  margin-bottom: 1mm;\n}\n.tkt-phone {\n  font-size: 7.5pt;\n  text-align: center;\n  color: var(--text-secondary);\n  margin-bottom: 2mm;\n}\n.tkt-sep {\n  border-top: 1px dashed #666;\n  margin: 2mm 0;\n}\n.tkt-type {\n  font-size: 12pt;\n  font-weight: 800;\n  text-align: center;\n  letter-spacing: 2px;\n  margin: 1mm 0;\n}\n.tkt-ref {\n  font-size: 9pt;\n  font-weight: 700;\n  text-align: center;\n  color: var(--text-primary);\n  margin-bottom: 2mm;\n}\n.tkt-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 8pt;\n  margin: 1px 0;\n}\n.tkt-row.sm {\n  font-size: 7.5pt;\n  color: var(--text-secondary);\n}\n.tkt-prod-name {\n  font-size: 7.5pt;\n  margin-top: 1mm;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tkt-prod-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 7.5pt;\n  margin-bottom: 1mm;\n  padding-left: 2mm;\n}\n.tkt-sep-label {\n  text-align: center;\n  font-size: 7pt;\n  color: var(--text-muted);\n  padding: 1mm 0;\n}\n.tkt-sep-dots {\n  border-top: 1px dotted #666;\n  margin: 2mm 0;\n}\n.tkt-subtotal {\n  font-weight: 700;\n  border-top: 1px solid #333;\n  padding-top: 1px;\n}\n.tkt-ristourne-hdr {\n  font-size: 7pt;\n  font-weight: 800;\n  text-align: center;\n  color: var(--success);\n  padding: 2px 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.tkt-ristourne-tot {\n  font-weight: 700;\n}\n.tkt-ristourne-tot span:last-child {\n  color: var(--success);\n}\n.tkt-sig-box {\n  width: 100%;\n  margin-top: 2mm;\n}\n.tkt-sig-lbl {\n  font-size: 7.5pt;\n  font-weight: 700;\n  margin-bottom: 1mm;\n  text-align: center;\n}\n.tkt-sig-name {\n  font-size: 7pt;\n  color: var(--text-muted);\n  margin-bottom: 1mm;\n}\n.tkt-sig-area {\n  height: 18mm;\n  border: 1px solid #999;\n  border-radius: 2px;\n  width: 100%;\n}\n.tkt-total {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11pt;\n  font-weight: 800;\n  border-top: 2px solid #111;\n  border-bottom: 2px solid #111;\n  padding: 1mm 0;\n  margin: 2mm 0;\n}\n.tkt-lettres {\n  font-size: 6.5pt;\n  font-style: italic;\n  text-align: center;\n  margin: 2mm 0;\n  color: var(--text-secondary);\n}\n.tkt-thanks {\n  font-size: 8.5pt;\n  text-align: center;\n  font-weight: 700;\n  margin: 2mm 0;\n}\n.tkt-sig {\n  font-size: 8pt;\n  text-align: center;\n  margin-top: 4mm;\n}\n.pp-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 14px 20px;\n  border-top: 1px solid var(--border);\n  background: var(--bg-hover);\n  border-radius: 0 0 10px 10px;\n}\n.pp-btn-cancel {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  background: var(--bg-surface);\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.pp-btn-cancel .material-icons {\n  font-size: 16px;\n}\n.pp-btn-cancel:hover {\n  background: var(--bg-hover);\n}\n.pp-btn-print {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 20px;\n  background: var(--accent);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.15s;\n}\n.pp-btn-print .material-icons {\n  font-size: 16px;\n}\n.pp-btn-print:hover:not(:disabled) {\n  background: var(--accent);\n}\n.pp-btn-print:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=print-preview.component.css.map */\n'] }]
  }], null, { invoice: [{
    type: Input
  }], picking: [{
    type: Input
  }], purchaseInvoice: [{
    type: Input
  }], purchaseOrder: [{
    type: Input
  }], salesOrder: [{
    type: Input
  }], docType: [{
    type: Input
  }], companyName: [{
    type: Input
  }], companyPhone: [{
    type: Input
  }], companyLogoUrl: [{
    type: Input
  }], companyLogoDataUrl: [{
    type: Input
  }], companyInfo: [{
    type: Input
  }], closed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrintPreviewComponent, { className: "PrintPreviewComponent", filePath: "app/shared/components/print-preview/print-preview.component.ts", lineNumber: 28 });
})();
var BASE_CSS = `
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: white; color: #111; font-family: Arial, sans-serif; }
.doc { padding: 14mm 14mm 10mm; max-width: 190mm; margin: 0 auto; }
.header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10mm; border-bottom: 2px solid #222; padding-bottom: 4mm; }
.co-logo { max-height: 52px; max-width: 130px; object-fit: contain; display: block; margin-bottom: 5px; }
.co-name { font-size: 14pt; font-weight: 700; color: #017E84; line-height: 1.2; }
.co-sigle { font-size: 10pt; font-weight: 500; color: #017E84; }
.co-info { font-size: 8.5pt; color: #444; margin-top: 2px; line-height: 1.3; }
.co-lbl { font-weight: 600; color: #222; }
.title-block { text-align: right; }
.doc-type { font-size: 18pt; font-weight: 800; letter-spacing: 1px; color: #222; }
.doc-ref { font-size: 11pt; font-weight: 600; color: #017E84; margin-top: 2px; }
.meta { display: flex; justify-content: space-between; margin-bottom: 8mm; }
.meta-label { font-size: 7pt; font-weight: 700; text-transform: uppercase; color: #888; margin-bottom: 2px; }
.meta-value { font-size: 12pt; font-weight: 700; }
.meta-sub { font-size: 8pt; color: #555; }
.meta-dates { text-align: right; }
.meta-row { display: flex; justify-content: space-between; gap: 12px; font-size: 9pt; margin-bottom: 2px; }
.ml { color: #888; font-size: 8pt; }
table.lines { width: 100%; border-collapse: collapse; margin-bottom: 5mm; font-size: 8.5pt; }
table.lines thead tr { background: #017E84; color: white; }
table.lines thead th { padding: 4px 6px; text-align: left; font-weight: 600; font-size: 7.5pt; }
table.lines tbody tr:nth-child(even) { background: #f7fafa; }
table.lines tbody td { padding: 3px 6px; border-bottom: 1px solid #e8e8e8; }
.r { text-align: right; }
.bold { font-weight: 700; }
.bold-teal { font-weight: 700; color: #017E84; }
.rabais { color: #e65100; font-weight: 600; }
.rabais-ttc { color: #c0392b; font-weight: 700; }
.desc { max-width: 120px; }
.consigne-header td, .section-header td { background: #e8f5f5; font-size: 7pt; font-weight: 700; color: #017E84; padding: 3px 6px; text-transform: uppercase; }
.deconsigne-header td { background: #fff3e0; font-size: 7pt; font-weight: 700; color: #e67e22; padding: 3px 6px; text-transform: uppercase; }
.consigne-row td, .ristourne-row td { background: #fafafa; color: #555; font-size: 8pt; }
table.recap { width: 100%; border-collapse: collapse; margin-bottom: 4mm; font-size: 7.5pt; }
table.recap thead tr { background: #e8f5f5; }
table.recap thead th { padding: 3px 5px; font-weight: 700; color: #017E84; text-align: right; border: 1px solid #cde; }
table.recap tbody td { padding: 3px 5px; border: 1px solid #e0e0e0; background: #fafafa; }
.totals-wrap { display: flex; justify-content: flex-end; margin-bottom: 5mm; }
.totals { width: 72mm; }
.tot-row { display: flex; justify-content: space-between; padding: 2px 6px; font-size: 9pt; border-bottom: 1px solid #eee; }
.tot-row.grand { font-weight: 700; background: #f0f8f8; }
.tot-row.taxes { font-weight: 600; color: #444; background: #f5f5f0; }
.tot-row.net { font-size: 11pt; font-weight: 800; background: #017E84; color: white; padding: 4px 6px; border-radius: 2px; }
.tot-row.deduct span:last-child { color: #c00; }
.tot-row.ristourne span:last-child { color: #2a7; }
.tot-row.enlevement span:last-child { color: #c60; font-weight: 600; }
.tot-row.paid span:last-child { color: #2a7; }
.tot-row.due { font-weight: 700; color: #c00; }
.lettres { font-size: 8.5pt; font-style: italic; border-top: 1px solid #ccc; padding-top: 3mm; margin-bottom: 8mm; }
.signatures { display: flex; justify-content: space-between; gap: 10mm; margin-top: 8mm; }
.sig { flex: 1; }
.sig-lbl { font-size: 8pt; font-weight: 700; margin-bottom: 2mm; }
.sig-name { font-size: 8pt; color: #555; margin-bottom: 2mm; }
.sig-area { height: 20mm; border: 1px solid #aaa; border-radius: 2px; }
.footer-note { font-size: 7pt; color: #aaa; text-align: center; margin-top: 6mm; border-top: 1px solid #eee; padding-top: 2mm; }
.idx { color: #aaa; font-size: 7pt; }
.total-lbl { font-size: 8.5pt; font-weight: 700; }
.total-val { font-size: 11pt; font-weight: 800; color: #017E84; }
table.lines tfoot td { border-top: 2px solid #017E84; padding: 4px 6px; background: #f0f8f8; }
@page { margin: 0; }
@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
`;
var A4_CSS = BASE_CSS + `
body { font-size: 9pt; }
@page { size: A4 portrait; }
`;
var A5_CSS = BASE_CSS + `
body { font-size: 8pt; }
.doc { padding: 10mm 10mm 8mm; max-width: 138mm; }
.doc-type { font-size: 14pt; }
.doc-ref { font-size: 9.5pt; }
.co-name { font-size: 12pt; }
.co-info { font-size: 7.5pt; }
table.lines { font-size: 7.5pt; }
.tot-row.net { font-size: 9.5pt; }
.lettres { font-size: 7.5pt; }
.sig-area { height: 15mm; }
@page { size: A5 portrait; }
`;
var TICKET_CSS = `
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: white; color: #111; font-family: 'Courier New', monospace; font-size: 9pt; font-weight: 700; width: 80mm; }
.ticket { width: 80mm; padding: 3mm 4mm; }
.t-logo { text-align: center; margin-bottom: 2mm; } .t-logo img { max-height: 32px; max-width: 60mm; object-fit: contain; }
.t-company { font-size: 12pt; font-weight: 800; text-align: center; margin-bottom: 1mm; }
.t-coinfo { font-size: 8pt; text-align: center; color: #555; margin-bottom: 1px; }
.t-phone { font-size: 8.5pt; text-align: center; color: #555; margin-bottom: 2mm; }
.t-sep { border-top: 1px dashed #666; margin: 2mm 0; }
.t-doctype { font-size: 13pt; font-weight: 800; text-align: center; letter-spacing: 2px; margin: 1mm 0; }
.t-ref { font-size: 10pt; font-weight: 700; text-align: center; color: #333; margin-bottom: 2mm; }
.t-line { display: flex; justify-content: space-between; font-size: 9pt; margin: 1px 0; }
.t-line.small { font-size: 8pt; color: #555; }
table.t-lines { width: 100%; border-collapse: collapse; margin: 1mm 0; }
table.t-lines td { padding: 1px 2px; font-size: 8.5pt; vertical-align: top; }
.tname { max-width: 40mm; }
.sep td { text-align: center; color: #222; font-size: 8.5pt; padding: 3px 0; font-weight: 700; border-top: 1px dotted #666; border-bottom: 1px dotted #666; }
.r { text-align: right; }
.t-subtotal { font-weight: 700; border-top: 1px solid #333; padding-top: 1px; }
.t-ristourne { font-weight: 700; }
.t-ristourne span:last-child { color: #1a7a3a; }
.t-ristourne-hdr { font-size: 8.5pt; font-weight: 800; text-align: center; color: #1a7a3a; padding: 2px 0; text-transform: uppercase; letter-spacing: 1px; }
.t-sep-dots { border-top: 1px dotted #666; margin: 2mm 0; }
.t-enlevement span:last-child { color: #c60; }
.t-total { display: flex; justify-content: space-between; font-size: 12pt; font-weight: 800; margin: 2mm 0; border-top: 2px solid #111; border-bottom: 2px solid #111; padding: 1mm 0; }
.t-lettres { font-size: 7.5pt; font-style: italic; text-align: center; margin: 2mm 0; color: #444; }
.t-thanks { font-size: 9pt; text-align: center; font-weight: 700; margin: 2mm 0; }
.t-sig-box { width: 100%; margin-top: 2mm; }
.t-sig-gap { height: 3mm; }
.t-sig-lbl { font-size: 8.5pt; font-weight: 700; margin-bottom: 1mm; text-align: center; }
.t-sig-name { font-size: 8pt; color: #444; margin-bottom: 1mm; }
.t-sig-area { height: 18mm; border: 1px solid #999; border-radius: 2px; width: 100%; }
@page { size: 80mm auto; margin: 0; }
@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
`;
var BON_CSS = A4_CSS;
function toFrenchWords(n) {
  if (n === 0)
    return "Z\xE9ro";
  if (n < 0)
    return "Moins " + toFrenchWords(-n);
  const units = [
    "",
    "un",
    "deux",
    "trois",
    "quatre",
    "cinq",
    "six",
    "sept",
    "huit",
    "neuf",
    "dix",
    "onze",
    "douze",
    "treize",
    "quatorze",
    "quinze",
    "seize",
    "dix-sept",
    "dix-huit",
    "dix-neuf"
  ];
  const tens = ["", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante", "quatre-vingt", "quatre-vingt"];
  function below100(n2) {
    if (n2 < 20)
      return units[n2];
    const t = Math.floor(n2 / 10), u = n2 % 10;
    if (t === 7)
      return "soixante-" + (u === 1 ? "et-onze" : units[10 + u]);
    if (t === 9)
      return "quatre-vingt-" + (u === 0 ? "" : units[u]).replace(/^-/, "");
    const ten = tens[t];
    if (u === 0)
      return ten + (t === 8 ? "s" : "");
    if (u === 1 && t !== 8)
      return ten + "-et-un";
    return ten + "-" + units[u];
  }
  function below1000(n2) {
    if (n2 < 100)
      return below100(n2);
    const h = Math.floor(n2 / 100), r = n2 % 100;
    const prefix = h === 1 ? "cent" : below100(h) + " cent";
    return r === 0 ? prefix + (h > 1 ? "s" : "") : prefix + " " + below100(r);
  }
  const parts = [];
  const billions = Math.floor(n / 1e9);
  n %= 1e9;
  const millions = Math.floor(n / 1e6);
  n %= 1e6;
  const thousands = Math.floor(n / 1e3);
  n %= 1e3;
  const remainder = n;
  if (billions)
    parts.push(below1000(billions) + (billions === 1 ? " milliard" : " milliards"));
  if (millions)
    parts.push(below1000(millions) + (millions === 1 ? " million" : " millions"));
  if (thousands)
    parts.push(thousands === 1 ? "mille" : below1000(thousands) + " mille");
  if (remainder)
    parts.push(below1000(remainder));
  const result = parts.join(" ").trim().replace(/\s+/g, " ");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export {
  CONSIGNE_NAMES,
  CONSIGNE_CODES,
  PrintPreviewComponent
};
//# sourceMappingURL=chunk-ZYBKBHPO.js.map
