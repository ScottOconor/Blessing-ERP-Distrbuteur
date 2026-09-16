import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-audit-footer',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],
  template: `
    <div class="audit-footer">
      <div class="audit-row">
        <span class="audit-label">Créé par :</span>
        <span class="audit-value">{{ createdBy || '—' }}</span>
        @if (createdAt) {
          <span class="audit-date">le {{ createdAt | date:'dd/MM/yyyy HH:mm' }}</span>
        }
      </div>
      @if (updatedBy) {
        <div class="audit-row">
          <span class="audit-label">Modifié par :</span>
          <span class="audit-value">{{ updatedBy }}</span>
          @if (updatedAt) {
            <span class="audit-date">le {{ updatedAt | date:'dd/MM/yyyy HH:mm' }}</span>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .audit-footer {
      margin-top: 24px;
      padding-top: 12px;
      border-top: 1px solid #e0e0e0;
      font-size: 0.78rem;
      color: #888;
    }
    .audit-row {
      display: flex;
      align-items: center;
      gap: 6px;
      line-height: 1.8;
    }
    .audit-label {
      font-weight: 600;
      color: #aaa;
      min-width: 90px;
    }
    .audit-value {
      color: #666;
    }
    .audit-date {
      color: #bbb;
    }
  `]
})
export class AuditFooterComponent {
  @Input() createdBy?: string | null;
  @Input() createdAt?: string | Date | null;
  @Input() updatedBy?: string | null;
  @Input() updatedAt?: string | Date | null;
}
