import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ConfigService, RoleInfo, CompanyGroup, Permission,
  MODULES, ACTIONS, RESOURCES, MODULE_LABELS, RESOURCE_LABELS
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
  groups: CompanyGroup[] = [];
  roles: RoleInfo[] = [];
  filterGroupId: number | null = null;
  loading = false;
  errorMsg = '';
  successMsg = '';
  showModal = false;
  editingRole: RoleInfo | null = null;
  form: Partial<RoleInfo> = {};

  // matrice 3 niveaux : permMatrix[module][resource][action] = boolean
  permMatrix: Record<string, Record<string, Record<string, boolean>>> = {};

  readonly MODULES = MODULES;
  readonly ACTIONS = ACTIONS;
  readonly RESOURCES = RESOURCES;
  readonly MODULE_LABELS = MODULE_LABELS;
  readonly RESOURCE_LABELS = RESOURCE_LABELS;
  readonly ACTION_LABELS: Record<string, string> = {
    VIEW: 'Voir', CREATE: 'Créer', EDIT: 'Modifier',
    DELETE: 'Supprimer', IMPORT: 'Importer', EXPORT: 'Exporter'
  };

  constructor(private configService: ConfigService, public authService: AuthService) {}

  ngOnInit(): void {
    this.configService.getGroups().subscribe({
      next: (gs) => {
        this.groups = gs;
        const session = this.authService.getSession();
        this.filterGroupId = gs.find(g => g.id === session?.groupId)?.id ?? gs[0]?.id ?? null;
        if (this.filterGroupId) this.loadRoles();
      }
    });
  }

  loadRoles(): void {
    if (!this.filterGroupId) return;
    this.loading = true;
    this.configService.getRolesForGroup(this.filterGroupId).subscribe({
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
        for (const act of ACTIONS) {
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
        for (const act of ACTIONS)
          if (this.permMatrix[mod]?.[res]?.[act])
            perms.push({ module: mod, resource: res, action: act });
    return perms;
  }

  toggleAllActions(mod: string, res: string): void {
    const allChecked = ACTIONS.every(a => this.permMatrix[mod]?.[res]?.[a]);
    ACTIONS.forEach(a => { this.permMatrix[mod][res][a] = !allChecked; });
  }

  toggleAllModule(mod: string): void {
    const allChecked = this.isAllModuleChecked(mod);
    for (const res of RESOURCES[mod] ?? [])
      for (const act of ACTIONS)
        this.permMatrix[mod][res][act] = !allChecked;
  }

  isAllActionsChecked(mod: string, res: string): boolean {
    return ACTIONS.every(a => this.permMatrix[mod]?.[res]?.[a]);
  }

  isAllModuleChecked(mod: string): boolean {
    return (RESOURCES[mod] ?? []).every(res => ACTIONS.every(a => this.permMatrix[mod]?.[res]?.[a]));
  }

  isPartialModule(mod: string): boolean {
    const resources = RESOURCES[mod] ?? [];
    const total = resources.length * ACTIONS.length;
    const checked = resources.reduce(
      (sum, res) => sum + ACTIONS.filter(a => this.permMatrix[mod]?.[res]?.[a]).length, 0
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
      ? this.configService.updateCustomRole(this.editingRole.id, payload)
      : this.configService.createCustomRole(this.filterGroupId!, payload);

    obs.subscribe({
      next: () => { this.showModal = false; this.showSuccess('Rôle sauvegardé'); this.loadRoles(); },
      error: (e) => { this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  delete(r: RoleInfo): void {
    if (!confirm(`Supprimer le rôle "${r.label}" ?`)) return;
    this.configService.deleteCustomRole(r.id!).subscribe({
      next: () => { this.showSuccess('Rôle supprimé'); this.loadRoles(); },
      error: (e) => { this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  showSuccess(msg: string): void { this.successMsg = msg; setTimeout(() => this.successMsg = '', 3000); }
}
