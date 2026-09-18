import {
  NG_VALUE_ACCESSOR
} from "./chunk-NRXD6HPP.js";
import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵlistener
} from "./chunk-NJUNWWEJ.js";

// src/app/shared/directives/amount-input.directive.ts
var AmountInputDirective = class _AmountInputDirective {
  static {
    this.FMT = new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
  }
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.focused = false;
    this.numValue = 0;
  }
  writeValue(value) {
    this.numValue = value ?? 0;
    if (!this.focused) {
      this.setDisplay(this.numValue);
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(disabled) {
    this.renderer.setProperty(this.el.nativeElement, "disabled", disabled);
  }
  onFocus() {
    this.focused = true;
    const raw = this.numValue ? String(this.numValue).replace(".", ",") : "";
    this.renderer.setProperty(this.el.nativeElement, "value", raw);
    this.el.nativeElement.select();
  }
  onBlur() {
    this.focused = false;
    this.onTouched();
    this.setDisplay(this.numValue);
  }
  onInput(event) {
    const raw = event.target.value;
    const cleaned = raw.replace(/\s/g, "").replace(",", ".");
    const parsed = parseFloat(cleaned);
    this.numValue = isNaN(parsed) ? 0 : parsed;
    this.onChange(this.numValue);
  }
  setDisplay(v) {
    const display = v ? _AmountInputDirective.FMT.format(v) : "";
    this.renderer.setProperty(this.el.nativeElement, "value", display);
  }
  static {
    this.\u0275fac = function AmountInputDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AmountInputDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AmountInputDirective, selectors: [["input", "appAmountInput", ""]], hostBindings: function AmountInputDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function AmountInputDirective_focus_HostBindingHandler() {
          return ctx.onFocus();
        })("blur", function AmountInputDirective_blur_HostBindingHandler() {
          return ctx.onBlur();
        })("input", function AmountInputDirective_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
    }, features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _AmountInputDirective,
      multi: true
    }])] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AmountInputDirective, [{
    type: Directive,
    args: [{
      selector: "input[appAmountInput]",
      standalone: true,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: AmountInputDirective,
        multi: true
      }]
    }]
  }], () => [{ type: ElementRef }, { type: Renderer2 }], { onFocus: [{
    type: HostListener,
    args: ["focus"]
  }], onBlur: [{
    type: HostListener,
    args: ["blur"]
  }], onInput: [{
    type: HostListener,
    args: ["input", ["$event"]]
  }] });
})();

export {
  AmountInputDirective
};
//# sourceMappingURL=chunk-G22KQXIY.js.map
