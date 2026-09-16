import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ConfigService, RoleInfo, Permission,
  MODULES, ACTIONS, OPTIONAL_ACTIONS, OPTIONAL_ACTION_RESOURCES, RESOURCES, MODULE_LABELS, RESOURCE_LABELS
} from '../../services/config.service';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-config-roles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit {
  roles: RoleInfo[] = [];
  loading = false;
  errorMsg = '';
  successMsg = '';
  showModal = false;
  editingRole: RoleInfo | null = null;
  form: Partial<RoleInfo> = {};

  permMatrix: Record<string, Record<string, Record<string, boolean>>> = {};

  readonly MODULES = MODULES;
  readonly ACTIONS = ACTIONS;
  /** Colonnes du tableau = actions de base + actions optionnelles (ex. CANCEL). */
  readonly ACTION_COLUMNS = [...ACTIONS, ...OPTIONAL_ACTIONS];
  readonly RESOURCES = RESOURCES;
  readonly MODULE_LABELS = MODULE_LABELS;
  readonly RESOURCE_LABELS = RESOURCE_LABELS;
  readonly ACTION_LABELS: Record<string, string> = {
    VIEW: 'Voir', CREATE: 'Créer', EDIT: 'Modifier',
    DELETE: 'Supprimer', IMPORT: 'Importer', EXPORT: 'Exporter', CANCEL: 'Annuler', VALIDATE: 'Valider'
  };

  /** true si l'action est cochable pour cette ressource (actions de base : toujours). */
  supportsAction(mod: string, res: string, act: string): boolean {
    if (ACTIONS.includes(act)) return true;
    return (OPTIONAL_ACTION_RESOURCES[act] ?? []).includes(`${mod}_${res}`);
  }

  /** Liste des actions réellement applicables à une ressource. */
  actionsFor(mod: string, res: string): string[] {
    return this.ACTION_COLUMNS.filter(a => this.supportsAction(mod, res, a));
  }

  constructor(private configService: ConfigService, public authService: AuthService) {}

  ngOnInit(): void { this.loadRoles(); }

  loadRoles(): void {
    this.loading = true;
    this.configService.getAllRoles().subscribe({
      next: (r) => { this.roles = r; this.loading = false; },
      error: () => this.loading = false
    });
  }

  initMatrix(perms: Permission[] = []): void {
    this.permMatrix = {};
    for (const mod of MODULES) {
      this.permMatrix[mod] = {};
      for (const res of RESOURCES[mod] ?? []) {
        this.permMatrix[mod][res] = {};
        for (const act of this.actionsFor(mod, res)) {
          this.permMatrix[mod][res][act] = perms.some(
            p => p.module === mod && p.resource === res && p.action === act
          );
        }
      }
    }
  }

  openCreate(): void {
    this.editingRole = null;
    this.form = { active: true };
    this.initMatrix();
    this.showModal = true;
  }

  openEdit(r: RoleInfo): void {
    this.editingRole = r;
    this.form = { label: r.label, active: r.active };
    this.initMatrix(r.permissions ?? []);
    this.showModal = true;
  }

  getPermissions(): Permission[] {
    const perms: Permission[] = [];
    for (const mod of MODULES)
      for (const res of RESOURCES[mod] ?? [])
        for (const act of this.actionsFor(mod, res))
          if (this.permMatrix[mod]?.[res]?.[act])
            perms.push({ module: mod, resource: res, action: act });
    return perms;
  }

  toggleAllActions(mod: string, res: string): void {
    const acts = this.actionsFor(mod, res);
    const allChecked = acts.every(a => this.permMatrix[mod]?.[res]?.[a]);
    acts.forEach(a => { this.permMatrix[mod][res][a] = !allChecked; });
  }

  toggleAllModule(mod: string): void {
    const allChecked = this.isAllModuleChecked(mod);
    for (const res of RESOURCES[mod] ?? [])
      for (const act of this.actionsFor(mod, res))
        this.permMatrix[mod][res][act] = !allChecked;
  }

  isAllActionsChecked(mod: string, res: string): boolean {
    return this.actionsFor(mod, res).every(a => this.permMatrix[mod]?.[res]?.[a]);
  }

  isAllModuleChecked(mod: string): boolean {
    return (RESOURCES[mod] ?? []).every(res => this.actionsFor(mod, res).every(a => this.permMatrix[mod]?.[res]?.[a]));
  }

  isPartialModule(mod: string): boolean {
    const resources = RESOURCES[mod] ?? [];
    const total = resources.reduce((sum, res) => sum + this.actionsFor(mod, res).length, 0);
    const checked = resources.reduce(
      (sum, res) => sum + this.actionsFor(mod, res).filter(a => this.permMatrix[mod]?.[res]?.[a]).length, 0
    );
    return checked > 0 && checked < total;
  }

  getModulePermCount(perms: Permission[], mod: string): number {
    const resources = new Set(perms.filter(p => p.module === mod).map(p => p.resource));
    return resources.size;
  }

  save(): void {
    if (!this.form.label) { this.errorMsg = 'Le libellé est requis'; return; }
    const payload: RoleInfo = { ...this.form as RoleInfo, permissions: this.getPermissions() };

    const obs = this.editingRole?.id
      ? this.configService.updateRole(this.editingRole.id, payload)
      : this.configService.createRole(payload);

    obs.subscribe({
      next: () => { this.showModal = false; this.showSuccess('Rôle sauvegardé'); this.loadRoles(); },
      error: (e: any) => { this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  delete(r: RoleInfo): void {
    if (!confirm(`Supprimer le rôle "${r.label}" ?`)) return;
    this.configService.deleteRole(r.id!).subscribe({
      next: () => { this.showSuccess('Rôle supprimé'); this.loadRoles(); },
      error: (e: any) => { this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  showSuccess(msg: string): void { this.successMsg = msg; setTimeout(() => this.successMsg = '', 3000); }
}
