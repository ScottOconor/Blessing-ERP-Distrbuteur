import { Directive, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, Output } from '@angular/core';

/**
 * Adapte la barre de navigation d'un module à la place réellement disponible (zoom navigateur,
 * petit écran, nom d'utilisateur ou de société long, module avec beaucoup d'entrées) au lieu d'un
 * seuil de largeur fixe qui laissait des éléments sortir de l'écran :
 *  1. tout tient : affichage complet ;
 *  2. sinon `nav-compact` : nom d'utilisateur et société masqués (l'avatar reste) ;
 *  3. sinon `nav-collapsed` : menu hamburger (styles du mixin navbar-mobile-menu).
 *
 * Usage : <nav class="X-navbar" appNavAutoCollapse (collapsedChange)="...">
 */
@Directive({
  selector: '[appNavAutoCollapse]',
  standalone: true
})
export class NavAutoCollapseDirective implements OnInit, OnDestroy {
  @Output() collapsedChange = new EventEmitter<boolean>();

  private level = 0;
  private resizeObserver?: ResizeObserver;
  private mutationObserver?: MutationObserver;
  private panelObserver?: MutationObserver;
  private frame = 0;

  private static readonly CLASSES = ['', 'nav-compact', 'nav-collapsed'];

  constructor(private el: ElementRef<HTMLElement>, private zone: NgZone) {}

  ngOnInit(): void {
    const nav = this.el.nativeElement;
    this.zone.runOutsideAngular(() => {
      this.resizeObserver = new ResizeObserver(() => this.schedule());
      this.resizeObserver.observe(nav);
      // Le contenu change après le premier affichage (droits, nom de société, branding…).
      this.mutationObserver = new MutationObserver(() => this.schedule());
      this.mutationObserver.observe(nav, { childList: true, subtree: true, characterData: true });
      // Fermeture du tiroir : une mesure a pu être reportée pendant qu'il était ouvert.
      const panel = nav.querySelector('.nav-mobile-panel');
      if (panel) {
        this.panelObserver = new MutationObserver(() => this.schedule());
        this.panelObserver.observe(panel, { attributes: true, attributeFilter: ['class'] });
      }
      // Les polices chargées après coup élargissent les libellés.
      document.fonts?.ready.then(() => this.schedule());
    });
    this.schedule();
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.mutationObserver?.disconnect();
    this.panelObserver?.disconnect();
    cancelAnimationFrame(this.frame);
  }

  private schedule(): void {
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => this.check());
  }

  private check(): void {
    const nav = this.el.nativeElement;
    // Tiroir ouvert : ne pas toucher à la barre (relancerait les animations du menu).
    if (nav.querySelector('.nav-mobile-panel.open')) return;

    // Mesure de chaque niveau dans la même frame (rien n'est affiché entre deux essais) ;
    // transitions coupées pendant les essais pour que rien ne s'anime au retour.
    const previous = this.level;
    nav.classList.add('nav-no-anim');
    let level = 0;
    for (; level < 2; level++) {
      this.applyLevel(level);
      if (this.overflow(nav) <= 1) break;
    }
    this.applyLevel(level);
    nav.getBoundingClientRect();
    nav.classList.remove('nav-no-anim');

    this.level = level;
    if ((previous === 2) !== (level === 2)) {
      this.zone.run(() => this.collapsedChange.emit(level === 2));
    }
  }

  private applyLevel(level: number): void {
    const cl = this.el.nativeElement.classList;
    NavAutoCollapseDirective.CLASSES.forEach((c, i) => c && cl.toggle(c, i === level));
  }

  /** Débordement de la barre en pixels : contenu qui dépasse le bord droit, plus le contenu
   *  masqué dans un élément rétréci ou à défilement interne (liste d'entrées en overflow-x). */
  private overflow(nav: HTMLElement): number {
    const navRight = nav.getBoundingClientRect().right;
    let right = navRight, hidden = 0;
    nav.querySelectorAll<HTMLElement>(':scope > *, :scope > .nav-mobile-panel > *').forEach(child => {
      const r = child.getBoundingClientRect();
      if (r.width === 0) return;
      right = Math.max(right, r.right);
      hidden += Math.max(0, child.scrollWidth - child.clientWidth);
    });
    return right - navRight + hidden;
  }
}
