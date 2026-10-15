import { Component, ElementRef, HostListener, computed, input, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../modules/stock/services/stock.service';

/**
 * Sélection d'un article par saisie : on tape le code ou le nom, les articles correspondants
 * sont proposés. `productId` est lié en double sens ([(productId)]) ; null = tous les articles.
 */
@Component({
  selector: 'app-product-autocomplete',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-autocomplete.component.html',
  styleUrl: './product-autocomplete.component.scss'
})
export class ProductAutocompleteComponent {
  products = input<Product[]>([]);
  /** Restreint les propositions à une catégorie (facultatif). */
  categoryId = input<number | string | null>(null);
  placeholder = input('Tapez le code ou le nom de l\'article…');
  productId = model<number | null>(null);

  query = signal('');
  open = signal(false);
  activeIndex = signal(0);

  constructor(private el: ElementRef<HTMLElement>) {}

  selected = computed(() => {
    const id = this.productId();
    return id == null ? undefined : this.products().find(p => p.id === Number(id));
  });

  suggestions = computed(() => {
    const q = this.query().toLowerCase().trim();
    const cat = this.categoryId();
    return this.products()
      .filter(p => !cat || p.categoryId === Number(cat))
      .filter(p => !q || p.name.toLowerCase().includes(q) || (p.defaultCode ?? '').toLowerCase().includes(q))
      .sort((a, b) => this.rank(a, q) - this.rank(b, q))
      .slice(0, 15);
  });

  private rank(p: Product, q: string): number {
    const code = (p.defaultCode ?? '').toLowerCase();
    const name = p.name.toLowerCase();
    return code === q ? 0 : code.startsWith(q) ? 1 : name.startsWith(q) ? 2 : 3;
  }

  label(p?: Product): string {
    return p ? (p.defaultCode ? `[${p.defaultCode}] ` : '') + p.name : '';
  }

  onFocus(): void {
    this.query.set('');
    this.activeIndex.set(0);
    this.open.set(true);
  }

  onInput(value: string): void {
    this.query.set(value);
    this.activeIndex.set(0);
    this.open.set(true);
  }

  onKeydown(e: KeyboardEvent): void {
    const list = this.suggestions();
    if (e.key === 'ArrowDown') { e.preventDefault(); this.activeIndex.set(Math.min(this.activeIndex() + 1, list.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); this.activeIndex.set(Math.max(this.activeIndex() - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); const p = list[this.activeIndex()]; if (p) this.select(p); }
    else if (e.key === 'Escape') { this.open.set(false); }
  }

  select(p: Product): void {
    this.productId.set(p.id ?? null);
    this.open.set(false);
  }

  clear(): void {
    this.productId.set(null);
    this.query.set('');
    this.open.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent): void {
    if (!this.el.nativeElement.contains(e.target as Node)) this.open.set(false);
  }
}
