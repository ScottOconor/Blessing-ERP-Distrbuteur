import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'blessing-theme';

  isDark = signal<boolean>(this.loadPreference());

  private mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    /* Applique le thème au DOM à chaque changement */
    effect(() => {
      const dark = this.isDark();
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
      localStorage.setItem(this.STORAGE_KEY, dark ? 'dark' : 'light');
    });

    /* Écoute les changements du thème système en temps réel */
    this.mediaQuery.addEventListener('change', (e) => {
      /* N'applique le changement système que si l'utilisateur n'a pas
         défini de préférence explicite dans l'application */
      if (!localStorage.getItem(this.STORAGE_KEY)) {
        this.isDark.set(e.matches);
      }
    });
  }

  toggle(): void {
    this.isDark.update(v => !v);
  }

  /** Réinitialise vers le thème système (supprime la préférence stockée) */
  resetToSystem(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    this.isDark.set(this.mediaQuery.matches);
  }

  private loadPreference(): boolean {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) return stored === 'dark';
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  }
}
