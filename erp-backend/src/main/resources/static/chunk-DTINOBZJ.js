import {
  CommonModule,
  Component,
  DatePipe,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NJUNWWEJ.js";

// src/app/shared/components/audit-footer/audit-footer.component.ts
function AuditFooterComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("le ", \u0275\u0275pipeBind2(2, 1, ctx_r0.createdAt, "dd/MM/yyyy HH:mm"));
  }
}
function AuditFooterComponent_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("le ", \u0275\u0275pipeBind2(2, 1, ctx_r0.updatedAt, "dd/MM/yyyy HH:mm"));
  }
}
function AuditFooterComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1)(1, "span", 2);
    \u0275\u0275text(2, "Modifi\xE9 par :");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(5, AuditFooterComponent_Conditional_7_Conditional_5_Template, 3, 4, "span", 4);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.updatedBy);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.updatedAt ? 5 : -1);
  }
}
var AuditFooterComponent = class _AuditFooterComponent {
  static {
    this.\u0275fac = function AuditFooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuditFooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditFooterComponent, selectors: [["app-audit-footer"]], inputs: { createdBy: "createdBy", createdAt: "createdAt", updatedBy: "updatedBy", updatedAt: "updatedAt" }, features: [\u0275\u0275ProvidersFeature([DatePipe])], decls: 8, vars: 3, consts: [[1, "audit-footer"], [1, "audit-row"], [1, "audit-label"], [1, "audit-value"], [1, "audit-date"]], template: function AuditFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Cr\xE9\xE9 par :");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(4, "span", 3);
        \u0275\u0275text(5);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(6, AuditFooterComponent_Conditional_6_Template, 3, 4, "span", 4);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(7, AuditFooterComponent_Conditional_7_Template, 6, 2, "div", 1);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.createdBy || "\u2014");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.createdAt ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.updatedBy ? 7 : -1);
      }
    }, dependencies: [CommonModule, DatePipe], styles: ["\n.audit-footer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 12px;\n  border-top: 1px solid #e0e0e0;\n  font-size: 0.78rem;\n  color: #888;\n}\n.audit-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  line-height: 1.8;\n}\n.audit-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #aaa;\n  min-width: 90px;\n}\n.audit-value[_ngcontent-%COMP%] {\n  color: #666;\n}\n.audit-date[_ngcontent-%COMP%] {\n  color: #bbb;\n}\n/*# sourceMappingURL=audit-footer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditFooterComponent, [{
    type: Component,
    args: [{ selector: "app-audit-footer", standalone: true, imports: [CommonModule], providers: [DatePipe], template: `
    <div class="audit-footer">
      <div class="audit-row">
        <span class="audit-label">Cr\xE9\xE9 par :</span>
        <span class="audit-value">{{ createdBy || '\u2014' }}</span>
        @if (createdAt) {
          <span class="audit-date">le {{ createdAt | date:'dd/MM/yyyy HH:mm' }}</span>
        }
      </div>
      @if (updatedBy) {
        <div class="audit-row">
          <span class="audit-label">Modifi\xE9 par :</span>
          <span class="audit-value">{{ updatedBy }}</span>
          @if (updatedAt) {
            <span class="audit-date">le {{ updatedAt | date:'dd/MM/yyyy HH:mm' }}</span>
          }
        </div>
      }
    </div>
  `, styles: ["/* angular:styles/component:scss;5b062721634f002cc261ea4a1f4fd18ddde996d9ed6ca58626c59745389a6c01;/home/automate/Documents/Projets 1.1/Projets/Blessing ERP Distrbuteur/erp-frontend/src/app/shared/components/audit-footer/audit-footer.component.ts */\n.audit-footer {\n  margin-top: 24px;\n  padding-top: 12px;\n  border-top: 1px solid #e0e0e0;\n  font-size: 0.78rem;\n  color: #888;\n}\n.audit-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  line-height: 1.8;\n}\n.audit-label {\n  font-weight: 600;\n  color: #aaa;\n  min-width: 90px;\n}\n.audit-value {\n  color: #666;\n}\n.audit-date {\n  color: #bbb;\n}\n/*# sourceMappingURL=audit-footer.component.css.map */\n"] }]
  }], null, { createdBy: [{
    type: Input
  }], createdAt: [{
    type: Input
  }], updatedBy: [{
    type: Input
  }], updatedAt: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditFooterComponent, { className: "AuditFooterComponent", filePath: "app/shared/components/audit-footer/audit-footer.component.ts", lineNumber: 56 });
})();

export {
  AuditFooterComponent
};
//# sourceMappingURL=chunk-DTINOBZJ.js.map
