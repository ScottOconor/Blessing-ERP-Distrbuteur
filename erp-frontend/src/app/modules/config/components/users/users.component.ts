import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../core/auth/auth.service';
import { ConfigService, UserInfo, CompanyGroup, CompanyInfo, RoleInfo, CreateUserRequest, SYSTEM_ROLE_CODES } from '../../services/config.service';

@Component({
  selector: 'app-config-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users: UserInfo[] = [];
  groups: CompanyGroup[] = [];
  companies: CompanyInfo[] = [];
  roles: RoleInfo[] = [];

  loading = false;
  errorMsg = '';
  successMsg = '';

  showModal = false;
  editingUser: UserInfo | null = null;

  form: Partial<CreateUserRequest> = {};
  filterGroupId: number | null = null;
  selectedRole: RoleInfo | null = null;
  isSystemRole = false;

  readonly SYSTEM_ROLE_CODES = SYSTEM_ROLE_CODES;

  constructor(private configService: ConfigService, public authService: AuthService) {}

  ngOnInit(): void {
    this.loadReferenceData();
  }

  loadReferenceData(): void {
    const session = this.authService.getSession();
    // Charger les groupes
    this.configService.getGroups().subscribe({
      next: (gs) => {
        this.groups = gs;
        // Groupe par défaut = celui de l'utilisateur courant
        const defaultGroup = session?.groupId
          ? gs.find(g => g.id === session.groupId) ?? gs[0]
          : gs[0];
        if (defaultGroup?.id) {
          this.filterGroupId = defaultGroup.id;
          this.loadUsers();
          this.loadCompanies(defaultGroup.id);
          this.loadRoles(defaultGroup.id);
        }
      }
    });
  }

  loadUsers(): void {
    if (!this.filterGroupId) return;
    this.loading = true;
    this.configService.getUsersByGroup(this.filterGroupId).subscribe({
      next: (u) => { this.users = u; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  loadCompanies(groupId: number): void {
    this.configService.getCompaniesByGroup(groupId).subscribe({
      next: (c) => this.companies = c
    });
  }

  loadRoles(groupId: number): void {
    this.configService.getRolesForGroup(groupId).subscribe({
      next: (r) => this.roles = r
    });
  }

  onGroupChange(): void {
    const gid = Number(this.filterGroupId);
    if (gid) {
      this.filterGroupId = gid;
      this.loadUsers();
      this.loadCompanies(gid);
      this.loadRoles(gid);
    }
  }

  onRoleChange(): void {
    const role = this.roles.find(r => r.id === Number(this.form.roleId));
    this.selectedRole = role ?? null;
    this.isSystemRole = role ? SYSTEM_ROLE_CODES.includes(role.code ?? '') : false;
    if (this.isSystemRole) {
      this.form.companyId = undefined;
      this.form.groupId = this.filterGroupId ? Number(this.filterGroupId) : undefined;
    } else {
      this.form.groupId = undefined;
    }
  }

  openCreate(): void {
    this.editingUser = null;
    this.form = { groupId: this.filterGroupId ?? undefined };
    this.selectedRole = null;
    this.isSystemRole = false;
    this.showModal = true;
  }

  openEdit(u: UserInfo): void {
    this.editingUser = u;
    this.form = {
      fullName: u.fullName,
      email: u.email,
      roleId: u.roleId,
      groupId: u.groupId,
      companyId: u.companyId
    };
    const role = this.roles.find(r => r.id === u.roleId);
    this.selectedRole = role ?? null;
    this.isSystemRole = role ? SYSTEM_ROLE_CODES.includes(role.code ?? '') : false;
    this.showModal = true;
  }

  save(): void {
    if (!this.form.roleId) { this.errorMsg = 'Sélectionnez un rôle'; return; }
    if (!this.editingUser && !this.form.password) { this.errorMsg = 'Le mot de passe est requis'; return; }
    if (!this.editingUser && !this.form.username) { this.errorMsg = 'Le nom d\'utilisateur est requis'; return; }
    if (this.isSystemRole && !this.form.groupId) { this.errorMsg = 'Le groupe est requis pour ce rôle'; return; }
    if (!this.isSystemRole && !this.editingUser && !this.form.companyId) { this.errorMsg = 'Sélectionnez une entreprise'; return; }

    const obs = this.editingUser?.id
      ? this.configService.updateUser(this.editingUser.id, this.form)
      : this.configService.createUser(this.form as CreateUserRequest);

    obs.subscribe({
      next: () => {
        this.showModal = false;
        this.showSuccess(this.editingUser ? 'Utilisateur modifié' : 'Utilisateur créé');
        this.loadUsers();
      },
      error: (e) => { this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  toggle(u: UserInfo): void {
    if (!confirm(`${u.active ? 'Désactiver' : 'Activer'} l'utilisateur ${u.username} ?`)) return;
    this.configService.toggleUserActive(u.id!).subscribe({
      next: () => { this.showSuccess('Statut mis à jour'); this.loadUsers(); },
      error: () => { this.errorMsg = 'Erreur'; }
    });
  }

  showSuccess(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 3000);
  }

  roleLabel(code?: string): string {
    const map: Record<string, string> = {
      SUPER_ADMIN: 'Super Admin', ADMIN: 'Admin',
      SUPER_AUDITEUR: 'Super Auditeur', AUDITEUR: 'Auditeur', CONTROLEUR: 'Contrôleur'
    };
    return code ? (map[code] ?? code) : 'Custom';
  }
}
