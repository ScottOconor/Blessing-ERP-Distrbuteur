import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: number;
  message: string;
  type: 'error' | 'info';
}

const AUTO_DISMISS_MS = 6000;

/**
 * File de toasts globale, consommée par ToastComponent (monté une fois dans AppComponent).
 * Utilisée par httpErrorInterceptor pour signaler les 401/403/409 qu'aucun écran ne gère
 * localement — les gestionnaires d'erreur existants (err?.error?.message par composant)
 * continuent de fonctionner en parallèle.
 */
@Injectable({ providedIn: 'root' })
export class NotificationService {
  private nextId = 1;
  readonly toasts = signal<Toast[]>([]);

  notify(message: string, type: Toast['type'] = 'info'): void {
    const id = this.nextId++;
    this.toasts.update(list => [...list, { id, message, type }]);
    setTimeout(() => this.dismiss(id), AUTO_DISMISS_MS);
  }

  dismiss(id: number): void {
    this.toasts.update(list => list.filter(t => t.id !== id));
  }
}
