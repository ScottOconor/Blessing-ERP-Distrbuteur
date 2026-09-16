import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../core/auth/auth.service';
import { ConfigService, UserInfo, RoleInfo, CreateUserRequest, SYSTEM_ROLE_CODES } from '../../services/config.service';

@Component({
  selector: 'app-config-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users: UserInfo[] = [];
  roles: RoleInfo[] = [];

  loading = false;
  errorMsg = '';
  successMsg = '';

  showModal = false;
  editingUser: UserInfo | null = null;

  form: Partial<CreateUserRequest> = {};

  readonly SYSTEM_ROLE_CODES = SYSTEM_ROLE_CODES;

  constructor(private configService: ConfigService, public authService: AuthService) {}

  ngOnInit(): void {
    this.loadRoles();
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.configService.getAllUsers().subscribe({
      next: (u) => { this.users = u; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  loadRoles(): void {
    this.configService.getAllRoles().subscribe({
      next: (r) => this.roles = r
    });
  }

  openCreate(): void {
    this.editingUser = null;
    this.form = {};
    this.showModal = true;
  }

  openEdit(u: UserInfo): void {
    this.editingUser = u;
    this.form = {
      fullName: u.fullName,
      email: u.email,
      roleId: u.roleId
    };
    this.showModal = true;
  }

  save(): void {
    if (!this.form.roleId) { this.errorMsg = 'Sélectionnez un rôle'; return; }
    if (!this.editingUser && !this.form.password) { this.errorMsg = 'Le mot de passe est requis'; return; }
    if (!this.editingUser && !this.form.username) { this.errorMsg = "Le nom d'utilisateur est requis"; return; }

    const obs = this.editingUser?.id
      ? this.configService.updateUser(this.editingUser.id, this.form)
      : this.configService.createUser(this.form as CreateUserRequest);

    obs.subscribe({
      next: () => {
        this.showModal = false;
        this.showSuccess(this.editingUser ? 'Utilisateur modifié' : 'Utilisateur créé');
        this.loadUsers();
      },
      error: (e: any) => { this.errorMsg = e.error?.message || 'Erreur'; }
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
      SUPER_ADMIN: 'Super Admin', ADMIN: 'Admin'
    };
    return code ? (map[code] ?? code) : 'Custom';
  }
}
