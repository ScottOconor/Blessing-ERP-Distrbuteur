import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: 'input[appAmountInput]',
  standalone: true,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: AmountInputDirective,
    multi: true
  }]
})
export class AmountInputDirective implements ControlValueAccessor {

  private onChange: (v: number) => void = () => {};
  private onTouched: () => void = () => {};
  private focused = false;
  private numValue = 0;

  private static readonly FMT = new Intl.NumberFormat('fr-FR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });

  constructor(private el: ElementRef<HTMLInputElement>, private renderer: Renderer2) {}

  writeValue(value: number | null | undefined): void {
    this.numValue = value ?? 0;
    if (!this.focused) {
      this.setDisplay(this.numValue);
    }
  }

  registerOnChange(fn: (v: number) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  setDisabledState(disabled: boolean): void {
    this.renderer.setProperty(this.el.nativeElement, 'disabled', disabled);
  }

  @HostListener('focus')
  onFocus(): void {
    this.focused = true;
    const raw = this.numValue ? String(this.numValue).replace('.', ',') : '';
    this.renderer.setProperty(this.el.nativeElement, 'value', raw);
    this.el.nativeElement.select();
  }

  @HostListener('blur')
  onBlur(): void {
    this.focused = false;
    this.onTouched();
    this.setDisplay(this.numValue);
  }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const raw = (event.target as HTMLInputElement).value;
    const cleaned = raw.replace(/\s/g, '').replace(',', '.');
    const parsed = parseFloat(cleaned);
    this.numValue = isNaN(parsed) ? 0 : parsed;
    this.onChange(this.numValue);
  }

  private setDisplay(v: number): void {
    const display = v ? AmountInputDirective.FMT.format(v) : '';
    this.renderer.setProperty(this.el.nativeElement, 'value', display);
  }
}
