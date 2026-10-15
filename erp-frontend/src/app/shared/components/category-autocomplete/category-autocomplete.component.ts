import { Component, ElementRef, HostListener, computed, input, model, signal } from '@angular/core';
import { ProductCategory } from '../../../modules/stock/services/stock.service';

/**
 * Sélection d'une catégorie d'articles par saisie : on tape le nom (ou le code), les catégories
 * correspondantes sont proposées. `categoryId` est lié en double sens ; null = toutes.
 */
@Component({
  selector: 'app-category-autocomplete',
  standalone: true,
  templateUrl: './category-autocomplete.component.html',
  styleUrl: '../product-autocomplete/product-autocomplete.component.scss'
})
export class CategoryAutocompleteComponent {
  categories = input<ProductCategory[]>([]);
  placeholder = input('Tapez le nom de la catégorie…');
  categoryId = model<number | null>(null);

  query = signal('');
  open = signal(false);
  activeIndex = signal(0);

  constructor(private el: ElementRef<HTMLElement>) {}

  selected = computed(() => {
    const id = this.categoryId();
    return id == null ? undefined : this.categories().find(c => c.id === Number(id));
  });

  suggestions = computed(() => {
    const q = this.query().toLowerCase().trim();
    return this.categories()
      .filter(c => !q || c.name.toLowerCase().includes(q) || (c.code ?? '').toLowerCase().includes(q))
      .sort((a, b) => this.rank(a, q) - this.rank(b, q) || a.name.localeCompare(b.name))
      .slice(0, 20);
  });

  private rank(c: ProductCategory, q: string): number {
    const name = c.name.toLowerCase();
    return name === q ? 0 : name.startsWith(q) ? 1 : 2;
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
    else if (e.key === 'Enter') { e.preventDefault(); const c = list[this.activeIndex()]; if (c) this.select(c); }
    else if (e.key === 'Escape') { this.open.set(false); }
  }

  select(c: ProductCategory): void {
    this.categoryId.set(c.id ?? null);
    this.open.set(false);
  }

  clear(): void {
    this.categoryId.set(null);
    this.query.set('');
    this.open.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent): void {
    if (!this.el.nativeElement.contains(e.target as Node)) this.open.set(false);
  }
}
