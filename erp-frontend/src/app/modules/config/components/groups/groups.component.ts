import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfigService, RemoteAgency } from '../../services/config.service';

@Component({
  selector: 'app-config-groups',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent implements OnInit {
  agencies: RemoteAgency[] = [];
  loading = false;
  errorMsg = '';
  successMsg = '';
  pinging: number | null = null;

  showModal = false;
  editingAgency: RemoteAgency | null = null;
  form: Partial<RemoteAgency> = {};

  /** Clé API de ce spoke (pour les autres spokes qui veulent se connecter) */
  myApiKey: string | null = null;
  keyVisible = false;
  regenerating = false;

  /** Adresse du Hub (helpdesk) — éditable ici, pas dans un fichier de config. */
  hubUrl = '';
  savingHubUrl = false;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.load();
    this.loadMyKey();
    this.loadHubUrl();
  }

  loadHubUrl(): void {
    this.configService.getHubUrl().subscribe({
      next: r => this.hubUrl = r.hubUrl,
      error: () => {}
    });
  }

  saveHubUrl(): void {
    if (!this.hubUrl.trim()) return;
    this.savingHubUrl = true;
    this.configService.setHubUrl(this.hubUrl.trim()).subscribe({
      next: r => {
        this.hubUrl = r.hubUrl;
        this.savingHubUrl = false;
        this.showSuccess('Adresse du Hub enregistrée');
      },
      error: () => { this.savingHubUrl = false; this.errorMsg = "Erreur lors de l'enregistrement"; }
    });
  }

  loadMyKey(): void {
    this.configService.getInterAgencyKey().subscribe({
      next: (r) => this.myApiKey = r.apiKey,
      error: () => {}
    });
  }

  regenerateKey(): void {
    if (!confirm('Régénérer la clé ? Toutes les agences distantes devront être reconfigurées avec la nouvelle clé.')) return;
    this.regenerating = true;
    this.configService.regenerateInterAgencyKey().subscribe({
      next: (r) => {
        this.myApiKey = r.apiKey;
        this.keyVisible = true;
        this.regenerating = false;
        this.showSuccess('Nouvelle clé générée — copiez-la avant de fermer');
      },
      error: () => { this.regenerating = false; this.errorMsg = 'Erreur lors de la régénération'; }
    });
  }

  copyKey(): void {
    if (!this.myApiKey) return;
    navigator.clipboard.writeText(this.myApiKey).then(() => this.showSuccess('Clé copiée dans le presse-papier'));
  }

  load(): void {
    this.loading = true;
    this.configService.getRemoteAgencies(true).subscribe({
      next: (data) => { this.agencies = data; this.loading = false; },
      error: () => { this.errorMsg = 'Erreur de chargement'; this.loading = false; }
    });
  }

  openCreate(): void {
    this.editingAgency = null;
    this.form = { active: true, port: 8085 };
    this.showModal = true;
  }

  openEdit(a: RemoteAgency): void {
    this.editingAgency = a;
    this.form = {
      name: a.name, code: a.code, host: a.host, port: a.port,
      apiKey: a.apiKey, location: a.location, contactPerson: a.contactPerson,
      phone: a.phone, email: a.email, notes: a.notes, active: a.active
    };
    this.showModal = true;
  }

  save(): void {
    if (!this.form.name || !this.form.code || !this.form.host || !this.form.port) {
      this.errorMsg = 'Nom, code, hôte et port sont requis';
      return;
    }
    const obs = this.editingAgency?.id
      ? this.configService.updateRemoteAgency(this.editingAgency.id, this.form as RemoteAgency)
      : this.configService.createRemoteAgency(this.form as RemoteAgency);

    obs.subscribe({
      next: () => { this.showModal = false; this.showSuccess('Agence sauvegardée'); this.load(); },
      error: (e: any) => { this.errorMsg = e.error?.message || 'Erreur lors de la sauvegarde'; }
    });
  }

  toggle(a: RemoteAgency): void {
    this.configService.toggleRemoteAgency(a.id!).subscribe({
      next: () => { this.showSuccess('Statut mis à jour'); this.load(); },
      error: () => { this.errorMsg = 'Erreur'; }
    });
  }

  ping(a: RemoteAgency): void {
    this.pinging = a.id!;
    this.configService.pingRemoteAgency(a.id!).subscribe({
      next: (res) => {
        this.pinging = null;
        a.reachable = res.reachable;
        a.pingUrl = res.pingUrl;
        a.pingError = res.pingError;
        if (res.reachable) {
          this.showSuccess(`${a.name} : connectée — ${res.pingUrl}`);
        } else {
          this.errorMsg = `${a.name} injoignable — URL testée : ${res.pingUrl}${res.pingError ? ' · ' + res.pingError : ''}`;
        }
      },
      error: () => { this.pinging = null; this.errorMsg = 'Erreur de test'; }
    });
  }

  delete(a: RemoteAgency): void {
    if (!confirm(`Supprimer l'agence "${a.name}" ?`)) return;
    this.configService.deleteRemoteAgency(a.id!).subscribe({
      next: () => { this.showSuccess('Agence supprimée'); this.load(); },
      error: (e: any) => { this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  showSuccess(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 3000);
  }
}
