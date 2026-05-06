import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfigService, CompanyGroup, CompanyInfo } from '../../services/config.service';

@Component({
  selector: 'app-config-groups',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent implements OnInit {
  groups: CompanyGroup[] = [];
  expandedGroup: number | null = null;
  loading = false;
  errorMsg = '';
  successMsg = '';

  // Modals
  showGroupModal = false;
  showCompanyModal = false;
  editingGroup: CompanyGroup | null = null;
  editingCompany: CompanyInfo | null = null;
  activeGroupId: number | null = null;

  groupForm: Partial<CompanyGroup> = {};
  companyForm: Partial<CompanyInfo> = {};

  constructor(private configService: ConfigService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.configService.getGroups().subscribe({
      next: (data) => { this.groups = data; this.loading = false; },
      error: () => { this.errorMsg = 'Erreur de chargement'; this.loading = false; }
    });
  }

  toggleGroup(id: number): void {
    this.expandedGroup = this.expandedGroup === id ? null : id;
  }

  // ---- Group modal ----
  openCreateGroup(): void {
    this.editingGroup = null;
    this.groupForm = { active: true };
    this.showGroupModal = true;
  }

  openEditGroup(g: CompanyGroup, e: Event): void {
    e.stopPropagation();
    this.editingGroup = g;
    this.groupForm = { ...g };
    this.showGroupModal = true;
  }

  saveGroup(): void {
    const obs = this.editingGroup?.id
      ? this.configService.updateGroup(this.editingGroup.id, this.groupForm as CompanyGroup)
      : this.configService.createGroup(this.groupForm as CompanyGroup);
    obs.subscribe({
      next: () => { this.showGroupModal = false; this.showSuccess('Groupe sauvegardé'); this.load(); },
      error: (e) => { this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  // ---- Company modal ----
  openCreateCompany(groupId: number, e: Event): void {
    e.stopPropagation();
    this.editingCompany = null;
    this.activeGroupId = groupId;
    this.companyForm = { active: true, groupId };
    this.showCompanyModal = true;
  }

  openEditCompany(c: CompanyInfo, groupId: number, e: Event): void {
    e.stopPropagation();
    this.editingCompany = c;
    this.activeGroupId = groupId;
    this.companyForm = { ...c };
    this.showCompanyModal = true;
  }

  saveCompany(): void {
    const obs = this.editingCompany?.id
      ? this.configService.updateCompany(this.editingCompany.id, this.companyForm as CompanyInfo)
      : this.configService.createCompany(this.companyForm as CompanyInfo);
    obs.subscribe({
      next: () => { this.showCompanyModal = false; this.showSuccess('Entreprise sauvegardée'); this.load(); },
      error: (e) => { this.errorMsg = e.error?.message || 'Erreur'; }
    });
  }

  showSuccess(msg: string): void {
    this.successMsg = msg;
    setTimeout(() => this.successMsg = '', 3000);
  }
}
