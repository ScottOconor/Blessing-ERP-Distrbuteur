import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HrService, SalaryRule, SalaryRuleCategory, WorkedDaysType, PayslipInputType, LeaveType } from '../../services/hr.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AccountPickerComponent } from '../shared/account-picker.component';
import { AccountingService } from '../../../accounting/services/accounting.service';
import { AccountAccount } from '../../../../core/models/account.model';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-hr-payroll-config',
  standalone: true,
  imports: [CommonModule, FormsModule, AccountPickerComponent],
  template: `
    <div class="hp">
      <div class="hp-head">
        <h1><span class="material-icons">tune</span> Configuration de la paie</h1>
      </div>

      <div class="tabs">
        <button class="tab" [class.active]="tab==='rules'" (click)="tab='rules'">Règles salariales</button>
        <button class="tab" [class.active]="tab==='inputs'" (click)="tab='inputs'">Éléments variables</button>
        <button class="tab" [class.active]="tab==='days'" (click)="tab='days'">Jours travaillés</button>
        <button class="tab" [class.active]="tab==='leaves'" (click)="tab='leaves'">Types de congés</button>
      </div>

      <!-- ═══════════ ONGLET RÈGLES ═══════════ -->
      @if (tab === 'rules') {
        <div class="muted" style="margin:12px 0">
          Barèmes légaux camerounais (CNPS, CFC, RAV, IRPP, CAC, charges patronales) pré-configurés.
          Les taux (%) des formules légales à taux plat (CNPS, CFC, CAC, charges patronales) sont modifiables
          au cas où le barème change — ouvrez la règle et changez le champ « Taux (%) ».
          Une règle peut aussi dépendre des jours saisis sur le bulletin (ex. retenue = taux journalier × jours d'absence).
        </div>
        <div class="hp-head" style="margin-bottom:12px">
          <span></span>
          @if (canEdit) { <button class="b b-primary" (click)="openCreate()"><span class="material-icons">add</span> Nouvelle règle</button> }
        </div>

        @if (loading) { <div class="muted">Chargement…</div> }
        @else {
          <div class="tbl-wrap">
            <table class="tbl">
              <thead><tr><th>Séq.</th><th>Code</th><th>Libellé</th><th>Catégorie</th><th>Type</th><th>Quantité variable</th><th>Cpt débit</th><th>Cpt crédit</th><th>Actif</th><th></th></tr></thead>
              <tbody>
                @for (r of rules; track r.id) {
                  <tr>
                    <td>{{ r.sequence }}</td>
                    <td><code>{{ r.code }}</code></td>
                    <td>{{ r.name }}</td>
                    <td>{{ catName(r.categoryCode) }}</td>
                    <td>{{ typeLabel(r) }}</td>
                    <td>{{ r.quantityWorkedDaysCode ? ('× ' + dayTypeName(r.quantityWorkedDaysCode)) : '—' }}</td>
                    <td>{{ accLabel(r.accountDebitCode) }}</td>
                    <td>{{ accLabel(r.accountCreditCode) }}</td>
                    <td><span class="badge" [class.ok]="r.active">{{ r.active ? 'Oui' : 'Non' }}</span></td>
                    <td class="ta-r">@if (canEdit) { <button class="b-icon" (click)="openEdit(r)"><span class="material-icons">edit</span></button> }</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      }

      <!-- ═══════════ ONGLET ÉLÉMENTS VARIABLES ═══════════ -->
      @if (tab === 'inputs') {
        <div class="muted" style="margin:12px 0">
          Catalogue des éléments variables saisissables sur un bulletin (avance, prime exceptionnelle, retenue diverse…).
          Pour qu'un élément soit réellement pris en compte dans le calcul, créez aussi une règle salariale de type
          « Élément variable » avec le même code (onglet Règles salariales).
        </div>
        <div class="hp-head" style="margin-bottom:12px">
          <span></span>
          @if (canEdit) { <button class="b b-primary" (click)="openCreateInput()"><span class="material-icons">add</span> Nouveau type</button> }
        </div>
        @if (inputTypes.length === 0) { <div class="empty">Aucun type d'élément variable défini.</div> }
        @else {
          <div class="tbl-wrap">
            <table class="tbl">
              <thead><tr><th>Code</th><th>Libellé</th><th>Actif</th><th></th></tr></thead>
              <tbody>
                @for (t of inputTypes; track t.id) {
                  <tr>
                    <td><code>{{ t.code }}</code></td>
                    <td>{{ t.name }}</td>
                    <td><span class="badge" [class.ok]="t.active">{{ t.active ? 'Oui' : 'Non' }}</span></td>
                    <td class="ta-r">
                      @if (canEdit) {
                        <button class="b-icon" (click)="openEditInput(t)"><span class="material-icons">edit</span></button>
                        <button class="b-icon" (click)="delInput(t)"><span class="material-icons">delete_outline</span></button>
                      }
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      }

      <!-- ═══════════ ONGLET JOURS TRAVAILLÉS ═══════════ -->
      @if (tab === 'days') {
        <div class="muted" style="margin:12px 0">
          Catalogue des types de jours saisissables sur un bulletin (jours travaillés, absence, congé payé…).
          Référencez un de ces codes dans le champ « Quantité variable » d'une règle salariale pour faire dépendre
          son montant du nombre de jours saisi.
        </div>
        <div class="hp-head" style="margin-bottom:12px">
          <span></span>
          @if (canEdit) { <button class="b b-primary" (click)="openCreateDay()"><span class="material-icons">add</span> Nouveau type</button> }
        </div>
        @if (dayTypes.length === 0) { <div class="empty">Aucun type de jours défini.</div> }
        @else {
          <div class="tbl-wrap">
            <table class="tbl">
              <thead><tr><th>Code</th><th>Libellé</th><th>Actif</th><th></th></tr></thead>
              <tbody>
                @for (t of dayTypes; track t.id) {
                  <tr>
                    <td><code>{{ t.code }}</code></td>
                    <td>{{ t.name }}</td>
                    <td><span class="badge" [class.ok]="t.active">{{ t.active ? 'Oui' : 'Non' }}</span></td>
                    <td class="ta-r">
                      @if (canEdit) {
                        <button class="b-icon" (click)="openEditDay(t)"><span class="material-icons">edit</span></button>
                        <button class="b-icon" (click)="delDay(t)"><span class="material-icons">delete_outline</span></button>
                      }
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      }

      <!-- ═══════════ ONGLET TYPES DE CONGÉS ═══════════ -->
      @if (tab === 'leaves') {
        <div class="muted" style="margin:12px 0">
          Catalogue des types de congés (Congés Payés, RTT, Repos Compensateur…). L'acquisition mensuelle sert à
          calculer le compteur « Dû » affiché sur le bulletin. Le lien vers un type de jours travaillés est
          facultatif : renseignez-le seulement si ce congé doit être repris par une règle salariale (ex. congé
          sans solde qui retient un montant).
        </div>
        <div class="hp-head" style="margin-bottom:12px">
          <span></span>
          @if (canEdit) { <button class="b b-primary" (click)="openCreateLeaveType()"><span class="material-icons">add</span> Nouveau type</button> }
        </div>
        @if (leaveTypes.length === 0) { <div class="empty">Aucun type de congé défini.</div> }
        @else {
          <div class="tbl-wrap">
            <table class="tbl">
              <thead><tr><th>Code</th><th>Libellé</th><th>Payé</th><th class="ta-r">Acquisition / mois</th><th>Jours travaillés liés</th><th>Actif</th><th></th></tr></thead>
              <tbody>
                @for (t of leaveTypes; track t.id) {
                  <tr>
                    <td><code>{{ t.code }}</code></td>
                    <td>{{ t.name }}</td>
                    <td>{{ t.paid ? 'Oui' : 'Non' }}</td>
                    <td class="ta-r">{{ t.monthlyAccrualDays || 0 }} j</td>
                    <td>{{ t.workedDaysTypeCode ? dayTypeName(t.workedDaysTypeCode) : '—' }}</td>
                    <td><span class="badge" [class.ok]="t.active">{{ t.active ? 'Oui' : 'Non' }}</span></td>
                    <td class="ta-r">
                      @if (canEdit) {
                        <button class="b-icon" (click)="openEditLeaveType(t)"><span class="material-icons">edit</span></button>
                        <button class="b-icon" (click)="delLeaveType(t)"><span class="material-icons">delete_outline</span></button>
                      }
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      }
    </div>

    <!-- ═══════════ MODAL RÈGLE ═══════════ -->
    @if (showModal) {
      <div class="ov" (click)="showModal=false">
        <div class="mdl" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>{{ form.id ? 'Modifier' : 'Nouvelle' }} règle salariale</h3><button class="b-icon" (click)="showModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg"><label>Libellé *</label><input class="in" [(ngModel)]="form.name"></div>
              <div class="fg"><label>Code *</label><input class="in" [(ngModel)]="form.code" [disabled]="!!builtin"></div>
              <div class="fg"><label>Séquence</label><input type="number" class="in" [(ngModel)]="form.sequence"></div>
              <div class="fg"><label>Catégorie</label>
                <select class="in" [(ngModel)]="form.categoryCode" (ngModelChange)="onCategoryChange()">
                  @for (c of categories; track c.id) { <option [value]="c.code">{{ c.name }}</option> }
                </select>
              </div>
              <div class="fg"><label>Type de calcul</label>
                <select class="in" [(ngModel)]="form.computeType" [disabled]="!!builtin">
                  <option value="FIX">Montant fixe</option><option value="PERCENTAGE">Pourcentage</option>
                  <option value="INPUT">Élément variable</option><option value="BUILTIN">Formule légale</option>
                </select></div>
              @if (form.computeType === 'FIX') { <div class="fg"><label>Montant fixe</label><input type="number" class="in" [(ngModel)]="form.amountFix"></div> }
              @if (form.computeType === 'PERCENTAGE') {
                <div class="fg"><label>Pourcentage (%)</label><input type="number" class="in" [(ngModel)]="form.amountPercentage"></div>
                <div class="fg"><label>Base (code règle/catégorie)</label><input class="in" [(ngModel)]="form.baseCode" placeholder="GROSS"></div>
              }
              @if (form.computeType === 'INPUT') {
                <div class="fg fg-2">
                  <label>Type d'élément variable référencé</label>
                  <select class="in" [ngModel]="form.code" (ngModelChange)="pickInputType($event)">
                    <option value="" disabled>— Choisir dans le catalogue —</option>
                    @for (t of inputTypes; track t.id) { <option [value]="t.code">{{ t.name }} ({{ t.code }})</option> }
                  </select>
                </div>
              }
              @if (builtin) { <div class="fg fg-2"><label>Formule intégrée</label><input class="in" [ngModel]="form.builtinCode" disabled></div> }
              @if (isEditableRateBuiltin) {
                <div class="fg"><label>Taux (%)</label><input type="number" step="0.01" class="in" [(ngModel)]="form.amountPercentage"></div>
                <div class="fg fg-2 muted" style="font-size:.78rem;align-self:end;padding-bottom:8px">Taux légal — modifiable si le barème change (loi de finances, revalorisation…).</div>
              }
              @if (isCeilingBuiltin) {
                <div class="fg"><label>Plafond de cotisation (FCFA)</label><input type="number" class="in" [(ngModel)]="form.ceilingAmount" placeholder="Barème légal si vide"></div>
                <div class="fg fg-2 muted" style="font-size:.78rem;align-self:end;padding-bottom:8px">Plafond CNPS — laisser vide pour utiliser le barème légal en vigueur.</div>
              }
              @if (isBracketsBuiltin) {
                <div class="fg fg-2"><label>Barème par tranches</label><textarea class="in" rows="2" [(ngModel)]="form.bracketsConfig" [placeholder]="bracketsHint"></textarea></div>
                @if (form.builtinCode === 'IRPP') {
                  <div class="fg"><label>Seuil d'imposition (FCFA, RNI mensuel)</label><input type="number" class="in" [(ngModel)]="form.amountFix"></div>
                }
                <div class="fg fg-2 muted" style="font-size:.78rem;align-self:end;padding-bottom:8px">{{ bracketsHint }}</div>
              }

              <div class="fg fg-2">
                <label>Quantité variable (dépend des jours saisis sur le bulletin)</label>
                <select class="in" [(ngModel)]="form.quantityWorkedDaysCode">
                  <option [ngValue]="undefined">Aucune — quantité = 1 (comportement normal)</option>
                  @for (t of dayTypes; track t.id) { <option [value]="t.code">Multiplier par : {{ t.name }} ({{ t.code }})</option> }
                </select>
              </div>

              @if (accountMode === 'BOTH') {
                <div class="fg"><label>Compte de débit (OHADA)</label><app-account-picker [(code)]="form.accountDebitCode" [companyId]="companyId"></app-account-picker></div>
                <div class="fg"><label>Compte de crédit (OHADA)</label><app-account-picker [(code)]="form.accountCreditCode" [companyId]="companyId"></app-account-picker></div>
              } @else if (accountMode === 'CREDIT') {
                <div class="fg fg-2">
                  <label>Compte cible — crédit (retenue/dette)</label>
                  <app-account-picker [(code)]="form.accountCreditCode" [companyId]="companyId"></app-account-picker>
                </div>
              } @else {
                <div class="fg fg-2">
                  <label>Compte cible — débit (charge/gain)</label>
                  <app-account-picker [(code)]="form.accountDebitCode" [companyId]="companyId"></app-account-picker>
                </div>
              }
              <div class="fg"><label>Retenue ?</label><select class="in" [(ngModel)]="form.deduction" [disabled]="!!builtin"><option [ngValue]="false">Non (gain)</option><option [ngValue]="true">Oui (retenue)</option></select></div>
              <div class="fg"><label>Actif</label><select class="in" [(ngModel)]="form.active"><option [ngValue]="true">Oui</option><option [ngValue]="false">Non</option></select></div>
            </div>
          </div>
          <div class="mdl-f">
            @if (form.id && !builtin) { <button class="b b-danger" (click)="del()" style="margin-right:auto"><span class="material-icons">delete</span> Supprimer</button> }
            <button class="b b-sec" (click)="showModal=false">Annuler</button>
            <button class="b b-primary" (click)="save()" [disabled]="saving">{{ saving ? 'Enregistrement…' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }

    <!-- ═══════════ MODAL TYPE ÉLÉMENT VARIABLE ═══════════ -->
    @if (showInputModal) {
      <div class="ov" (click)="showInputModal=false">
        <div class="mdl" style="max-width:460px" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>{{ inputForm.id ? 'Modifier' : 'Nouveau' }} type d'élément variable</h3><button class="b-icon" (click)="showInputModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg fg-2"><label>Libellé *</label><input class="in" [(ngModel)]="inputForm.name" placeholder="Ex: Avance sur salaire"></div>
              <div class="fg fg-2"><label>Code *</label><input class="in" [(ngModel)]="inputForm.code" placeholder="Ex: AVANCE"></div>
              <div class="fg"><label>Actif</label><select class="in" [(ngModel)]="inputForm.active"><option [ngValue]="true">Oui</option><option [ngValue]="false">Non</option></select></div>
            </div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showInputModal=false">Annuler</button>
            <button class="b b-primary" (click)="saveInput()" [disabled]="saving">{{ saving ? 'Enregistrement…' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }

    <!-- ═══════════ MODAL TYPE JOURS ═══════════ -->
    @if (showDayModal) {
      <div class="ov" (click)="showDayModal=false">
        <div class="mdl" style="max-width:460px" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>{{ dayForm.id ? 'Modifier' : 'Nouveau' }} type de jours</h3><button class="b-icon" (click)="showDayModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg fg-2"><label>Libellé *</label><input class="in" [(ngModel)]="dayForm.name" placeholder="Ex: Absence"></div>
              <div class="fg fg-2"><label>Code *</label><input class="in" [(ngModel)]="dayForm.code" placeholder="Ex: ABS"></div>
              <div class="fg"><label>Actif</label><select class="in" [(ngModel)]="dayForm.active"><option [ngValue]="true">Oui</option><option [ngValue]="false">Non</option></select></div>
            </div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showDayModal=false">Annuler</button>
            <button class="b b-primary" (click)="saveDay()" [disabled]="saving">{{ saving ? 'Enregistrement…' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }

    <!-- ═══════════ MODAL TYPE DE CONGÉ ═══════════ -->
    @if (showLeaveTypeModal) {
      <div class="ov" (click)="showLeaveTypeModal=false">
        <div class="mdl" style="max-width:480px" (click)="$event.stopPropagation()">
          <div class="mdl-h"><h3>{{ leaveTypeForm.id ? 'Modifier' : 'Nouveau' }} type de congé</h3><button class="b-icon" (click)="showLeaveTypeModal=false"><span class="material-icons">close</span></button></div>
          <div class="mdl-b">
            @if (err) { <div class="alert">{{ err }}</div> }
            <div class="grid">
              <div class="fg fg-2"><label>Libellé *</label><input class="in" [(ngModel)]="leaveTypeForm.name" placeholder="Ex: Congés Payés"></div>
              <div class="fg fg-2"><label>Code *</label><input class="in" [(ngModel)]="leaveTypeForm.code" placeholder="Ex: CP"></div>
              <div class="fg"><label>Payé ?</label><select class="in" [(ngModel)]="leaveTypeForm.paid"><option [ngValue]="true">Oui</option><option [ngValue]="false">Non</option></select></div>
              <div class="fg"><label>Acquisition (j/mois)</label><input type="number" step="0.01" class="in" [(ngModel)]="leaveTypeForm.monthlyAccrualDays"></div>
              <div class="fg fg-2">
                <label>Type de jours travaillés lié (facultatif)</label>
                <select class="in" [(ngModel)]="leaveTypeForm.workedDaysTypeCode">
                  <option [ngValue]="undefined">Aucun</option>
                  @for (t of dayTypes; track t.id) { <option [value]="t.code">{{ t.name }} ({{ t.code }})</option> }
                </select>
              </div>
              <div class="fg"><label>Actif</label><select class="in" [(ngModel)]="leaveTypeForm.active"><option [ngValue]="true">Oui</option><option [ngValue]="false">Non</option></select></div>
            </div>
          </div>
          <div class="mdl-f">
            <button class="b b-sec" (click)="showLeaveTypeModal=false">Annuler</button>
            <button class="b b-primary" (click)="saveLeaveType()" [disabled]="saving">{{ saving ? 'Enregistrement…' : 'Enregistrer' }}</button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .tabs { display: flex; gap: 4px; border-bottom: 1px solid var(--border); margin-bottom: 4px; }
    .tab { border: none; background: transparent; padding: 10px 16px; cursor: pointer; font-weight: 600;
      color: var(--text-muted); border-bottom: 2px solid transparent; margin-bottom: -1px; }
    .tab:hover { color: var(--text-primary); }
    .tab.active { color: #7C3AED; border-bottom-color: #7C3AED; }
  `],
  styleUrls: ['../hr-shared.scss']
})
export class PayrollConfigComponent implements OnInit {
  companyId!: number;
  tab: 'rules' | 'inputs' | 'days' | 'leaves' = 'rules';

  rules: SalaryRule[] = [];
  categories: SalaryRuleCategory[] = [];
  inputTypes: PayslipInputType[] = [];
  dayTypes: WorkedDaysType[] = [];
  leaveTypes: LeaveType[] = [];

  loading = false; saving = false; err = '';
  canEdit = false;

  showModal = false;
  form: SalaryRule = { name: '', code: '', categoryCode: 'ALW', companyId: 0 };

  showInputModal = false;
  inputForm: PayslipInputType = { name: '', code: '', companyId: 0 };

  showDayModal = false;
  dayForm: WorkedDaysType = { name: '', code: '', companyId: 0 };

  showLeaveTypeModal = false;
  leaveTypeForm: LeaveType = { name: '', code: '', companyId: 0 };

  accounts: AccountAccount[] = [];

  constructor(private hr: HrService, private auth: AuthService, private accountingService: AccountingService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.companyId = this.auth.getCompanyId();
    this.canEdit = this.auth.hasPermission('RH', 'CONFIG_PAIE', 'EDIT') || this.auth.isPrivileged();
    this.hr.getCategories(this.companyId).subscribe(c => this.categories = c);
    this.accountingService.getAccounts(this.companyId).subscribe(a => this.accounts = a);
    this.loadDayTypes();
    this.loadInputTypes();
    this.loadLeaveTypes();
    this.load();
  }

  /** "661100 — Appointements salaires et commissions" ou le code brut si le compte est introuvable. */
  accLabel(code?: string): string {
    if (!code) return '—';
    const a = this.accounts.find(x => x.code === code);
    return a ? `${a.code} — ${a.name}` : `${code} (introuvable)`;
  }

  get builtin() { return this.form.computeType === 'BUILTIN'; }

  /** Formules légales BUILTIN à taux plat (%) — le taux vient de amountPercentage et reste éditable
   *  car les barèmes légaux (CNPS, CFC, FNE…) changent dans le temps. Exclut RAV/IRPP (barèmes par
   *  tranches, pas un simple %) et BASIC/GROSS/NET/CONTRACT_FIELD (pas des taux). */
  private static readonly EDITABLE_RATE_BUILTINS = ['CNPS_EMP', 'CFC_EMP', 'CAC', 'CNPS_PAT', 'PVID_PAT', 'AF_PAT', 'ATMP_PAT', 'CFC_PAT', 'FNE_PAT'];
  get isEditableRateBuiltin(): boolean {
    return this.builtin && PayrollConfigComponent.EDITABLE_RATE_BUILTINS.includes(this.form.builtinCode || '');
  }

  /** CNPS_EMP/CNPS_PAT ont un plafond de cotisation configurable (repli sur le barème légal si vide). */
  private static readonly CEILING_BUILTINS = ['CNPS_EMP', 'CNPS_PAT'];
  get isCeilingBuiltin(): boolean {
    return this.builtin && PayrollConfigComponent.CEILING_BUILTINS.includes(this.form.builtinCode || '');
  }

  /** IRPP/RAV sont des barèmes par tranches — exclus de EDITABLE_RATE_BUILTINS, édités via bracketsConfig. */
  get isBracketsBuiltin(): boolean {
    return this.builtin && (this.form.builtinCode === 'IRPP' || this.form.builtinCode === 'RAV');
  }

  get bracketsHint(): string {
    return this.form.builtinCode === 'IRPP'
      ? 'Tranches IRPP : "plafondRNI:tauxPct,..." — ex. 2000000:10,3000000:15,5000000:25,999999999999:35'
      : 'Tranches RAV : "plafondBrut:montantMensuel,..." — laisser vide pour utiliser le barème légal';
  }

  /**
   * Quel(s) champ(s) compte afficher selon la catégorie : une retenue (DED) ou le net (NET) ne
   * doivent jamais recevoir de compte de débit (déjà couvert par le brut) ; un gain (BASIC/ALW/
   * GROSS) ne doit recevoir qu'un débit ; seules les charges patronales (COMP) ont les deux,
   * car elles ne transitent par aucune autre ligne du bulletin.
   */
  get accountMode(): 'BOTH' | 'DEBIT' | 'CREDIT' {
    if (this.form.categoryCode === 'COMP') return 'BOTH';
    if (this.form.categoryCode === 'DED' || this.form.categoryCode === 'NET') return 'CREDIT';
    return 'DEBIT'; // BASIC, ALW, GROSS
  }

  /** Compte suggéré par défaut par catégorie — pré-remplit seulement si le champ est encore vide. */
  private static readonly SUGGESTED_ACCOUNTS: Record<string, { debit?: string; credit?: string }> = {
    BASIC: { debit: '661100' },   // Appointements, salaires et commissions
    ALW:   { debit: '661200' },   // Primes et gratifications
    DED:   { credit: '421100' },  // Personnel, avances (cas le plus courant : avance/retenue diverse)
    NET:   { credit: '422000' },  // Personnel, rémunérations dues
    COMP:  { debit: '664100' },   // Charges sociales sur rémunération du personnel national
  };

  /** Déclenché au changement de catégorie : pré-remplit le compte cible s'il est encore vide. */
  onCategoryChange(): void {
    const suggestion = PayrollConfigComponent.SUGGESTED_ACCOUNTS[this.form.categoryCode];
    if (!suggestion) return;
    if (suggestion.debit && !this.form.accountDebitCode) this.form.accountDebitCode = suggestion.debit;
    if (suggestion.credit && !this.form.accountCreditCode) this.form.accountCreditCode = suggestion.credit;
  }

  load(): void { this.loading = true; this.hr.getRules(this.companyId).subscribe({ next: r => { this.rules = r; this.loading = false; }, error: () => this.loading = false }); }
  loadInputTypes(): void { this.hr.getInputTypes(this.companyId).subscribe(t => this.inputTypes = t); }
  loadDayTypes(): void { this.hr.getWorkedDaysTypes(this.companyId).subscribe(t => this.dayTypes = t); }
  loadLeaveTypes(): void { this.hr.getLeaveTypes(this.companyId).subscribe(t => this.leaveTypes = t); }

  catName(code?: string) { return this.categories.find(c => c.code === code)?.name ?? code; }
  dayTypeName(code?: string) { return this.dayTypes.find(t => t.code === code)?.name ?? code; }
  typeLabel(r: SalaryRule) {
    if (r.computeType === 'BUILTIN') {
      const rateBuiltins = PayrollConfigComponent.EDITABLE_RATE_BUILTINS;
      return rateBuiltins.includes(r.builtinCode || '') ? `Formule légale — ${r.amountPercentage || 0} %` : 'Formule légale';
    }
    if (r.computeType === 'PERCENTAGE') return (r.amountPercentage || 0) + '% de ' + (r.baseCode || 'GROSS');
    if (r.computeType === 'INPUT') return 'Élément variable';
    return 'Fixe : ' + (r.amountFix || 0);
  }

  pickInputType(code: string): void {
    this.form.code = code;
    const t = this.inputTypes.find(x => x.code === code);
    if (t && !this.form.name) this.form.name = t.name;
  }

  // ── Règles ──
  openCreate(): void {
    this.form = { name: '', code: '', categoryCode: 'ALW', companyId: this.companyId, computeType: 'FIX', sequence: 50, amountFix: 0, amountPercentage: 0, deduction: false, active: true };
    this.onCategoryChange();
    this.err = ''; this.showModal = true;
  }
  openEdit(r: SalaryRule): void { this.form = { ...r }; this.err = ''; this.showModal = true; }

  save(): void {
    if (!this.form.name || !this.form.code) { this.err = 'Libellé et code obligatoires'; return; }
    this.form.companyId = this.companyId;
    // Ceinture et bretelles : n'enregistre jamais un compte sur le côté qui ne devrait pas en
    // avoir pour cette catégorie (évite tout résidu d'une catégorie précédemment sélectionnée).
    if (this.accountMode === 'CREDIT') this.form.accountDebitCode = undefined;
    if (this.accountMode === 'DEBIT') this.form.accountCreditCode = undefined;
    this.saving = true;
    const obs = this.form.id ? this.hr.updateRule(this.form.id, this.form) : this.hr.saveRule(this.form);
    obs.subscribe({ next: () => { this.saving = false; this.showModal = false; this.load(); }, error: (e) => { this.saving = false; this.err = e.error?.message || 'Erreur'; } });
  }
  del(): void {
    if (!this.form.id || !confirm('Supprimer cette règle ?')) return;
    this.hr.deleteRule(this.form.id).subscribe({
      next: () => { this.showModal = false; this.load(); },
      error: err => this.notificationService.notify(err?.error?.message ?? 'Erreur lors de la suppression.', 'error')
    });
  }

  // ── Types d'éléments variables ──
  openCreateInput(): void { this.inputForm = { name: '', code: '', companyId: this.companyId, active: true }; this.err = ''; this.showInputModal = true; }
  openEditInput(t: PayslipInputType): void { this.inputForm = { ...t }; this.err = ''; this.showInputModal = true; }
  saveInput(): void {
    if (!this.inputForm.name || !this.inputForm.code) { this.err = 'Libellé et code obligatoires'; return; }
    this.inputForm.companyId = this.companyId;
    this.saving = true;
    const obs = this.inputForm.id ? this.hr.updateInputType(this.inputForm.id, this.inputForm) : this.hr.saveInputType(this.inputForm);
    obs.subscribe({ next: () => { this.saving = false; this.showInputModal = false; this.loadInputTypes(); }, error: (e) => { this.saving = false; this.err = e.error?.message || 'Erreur'; } });
  }
  delInput(t: PayslipInputType): void {
    if (!confirm(`Supprimer « ${t.name} » ?`)) return;
    this.hr.deleteInputType(t.id!).subscribe({
      next: () => this.loadInputTypes(),
      error: err => this.notificationService.notify(err?.error?.message ?? 'Erreur lors de la suppression.', 'error')
    });
  }

  // ── Types de jours travaillés ──
  openCreateDay(): void { this.dayForm = { name: '', code: '', companyId: this.companyId, active: true }; this.err = ''; this.showDayModal = true; }
  openEditDay(t: WorkedDaysType): void { this.dayForm = { ...t }; this.err = ''; this.showDayModal = true; }
  saveDay(): void {
    if (!this.dayForm.name || !this.dayForm.code) { this.err = 'Libellé et code obligatoires'; return; }
    this.dayForm.companyId = this.companyId;
    this.saving = true;
    const obs = this.dayForm.id ? this.hr.updateWorkedDaysType(this.dayForm.id, this.dayForm) : this.hr.saveWorkedDaysType(this.dayForm);
    obs.subscribe({ next: () => { this.saving = false; this.showDayModal = false; this.loadDayTypes(); }, error: (e) => { this.saving = false; this.err = e.error?.message || 'Erreur'; } });
  }
  delDay(t: WorkedDaysType): void {
    if (!confirm(`Supprimer « ${t.name} » ?`)) return;
    this.hr.deleteWorkedDaysType(t.id!).subscribe({
      next: () => this.loadDayTypes(),
      error: err => this.notificationService.notify(err?.error?.message ?? 'Erreur lors de la suppression.', 'error')
    });
  }

  // ── Types de congés ──
  openCreateLeaveType(): void { this.leaveTypeForm = { name: '', code: '', companyId: this.companyId, paid: true, monthlyAccrualDays: 0, active: true }; this.err = ''; this.showLeaveTypeModal = true; }
  openEditLeaveType(t: LeaveType): void { this.leaveTypeForm = { ...t }; this.err = ''; this.showLeaveTypeModal = true; }
  saveLeaveType(): void {
    if (!this.leaveTypeForm.name || !this.leaveTypeForm.code) { this.err = 'Libellé et code obligatoires'; return; }
    this.leaveTypeForm.companyId = this.companyId;
    this.saving = true;
    const obs = this.leaveTypeForm.id ? this.hr.updateLeaveType(this.leaveTypeForm.id, this.leaveTypeForm) : this.hr.saveLeaveType(this.leaveTypeForm);
    obs.subscribe({ next: () => { this.saving = false; this.showLeaveTypeModal = false; this.loadLeaveTypes(); }, error: (e) => { this.saving = false; this.err = e.error?.message || 'Erreur'; } });
  }
  delLeaveType(t: LeaveType): void {
    if (!confirm(`Supprimer « ${t.name} » ?`)) return;
    this.hr.deleteLeaveType(t.id!).subscribe({
      next: () => this.loadLeaveTypes(),
      error: err => this.notificationService.notify(err?.error?.message ?? 'Erreur lors de la suppression.', 'error')
    });
  }
}
