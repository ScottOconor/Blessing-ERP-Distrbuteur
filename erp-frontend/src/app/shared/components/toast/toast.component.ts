import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-stack">
      @for (t of notificationService.toasts(); track t.id) {
        <div class="toast" [class.toast-error]="t.type === 'error'" (click)="notificationService.dismiss(t.id)">
          <span class="material-icons">{{ t.type === 'error' ? 'error' : 'info' }}</span>
          <span class="toast-msg">{{ t.message }}</span>
        </div>
      }
    </div>
  `,
  styles: [`
    .toast-stack {
      position: fixed; top: calc(16px + var(--license-banner-offset, 0px)); right: 16px; z-index: 100000;
      display: flex; flex-direction: column; gap: 8px; max-width: 380px;
    }
    .toast {
      display: flex; align-items: flex-start; gap: 10px;
      background: var(--warning-bg); color: var(--warning);
      border: 1px solid var(--warning);
      border-radius: 8px; padding: 10px 14px;
      font-size: .875rem; font-weight: 500; line-height: 1.4;
      box-shadow: 0 4px 12px rgba(0,0,0,.15);
      cursor: pointer; animation: toast-in .2s ease;
    }
    .toast-error { background: var(--danger-bg); color: var(--danger); border-color: var(--danger); }
    .material-icons { font-size: 18px; flex-shrink: 0; }
    .toast-msg { word-break: break-word; }
    @keyframes toast-in { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
  `]
})
export class ToastComponent {
  constructor(public notificationService: NotificationService) {}
}
