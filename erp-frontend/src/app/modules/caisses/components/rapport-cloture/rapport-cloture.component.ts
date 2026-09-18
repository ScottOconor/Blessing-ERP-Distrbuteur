import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CaisseService, RapportClotureDTO } from '../../services/caisse.service';
import { formatFCFA } from '../../../../core/utils/currency-format.util';

@Component({
  selector: 'app-rapport-cloture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rapport-cloture.component.html',
  styleUrl: './rapport-cloture.component.scss'
})
export class RapportClotureComponent implements OnInit {
  rapport: RapportClotureDTO | null = null;
  loading = true;
  error = '';

  constructor(
    private caisseService: CaisseService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('sessionId'));
    if (!id) { this.error = 'Session invalide.'; this.loading = false; return; }
    this.caisseService.getRapportCloture(id).subscribe({
      next: (data) => { this.rapport = data; this.loading = false; },
      error: (e) => { this.error = e.error?.message || 'Erreur chargement.'; this.loading = false; }
    });
  }

  formatAmount(v: number | undefined | null): string {
    return v == null ? '—' : formatFCFA(v);
  }

  print(): void {
    window.print();
  }
}
