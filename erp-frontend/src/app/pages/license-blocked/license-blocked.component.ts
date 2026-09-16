import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LicenseService, LicenseSelfStatus } from '../../core/license/license.service';

const POLL_MS = 30 * 1000;

@Component({
  selector: 'app-license-blocked',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './license-blocked.component.html',
  styleUrl: './license-blocked.component.scss'
})
export class LicenseBlockedComponent implements OnInit, OnDestroy {
  status: LicenseSelfStatus | null = null;

  private timer: any = null;

  constructor(private licenseService: LicenseService, private router: Router) {}

  ngOnInit(): void {
    this.refresh();
    this.timer = setInterval(() => this.refresh(), POLL_MS);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  private refresh(): void {
    this.licenseService.fetchStatus().subscribe({
      next: status => {
        this.status = status;
        if (status.status === 'ACTIVE' || status.status === 'EXPIRED_READONLY') {
          this.router.navigate(['/welcome']);
        } else if (status.status === 'NOT_ACTIVATED' || status.status === 'PENDING') {
          this.router.navigate(['/license-pending']);
        }
      },
      error: () => {}
    });
  }
}
