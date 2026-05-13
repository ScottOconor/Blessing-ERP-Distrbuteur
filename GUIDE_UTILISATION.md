# Guide d'utilisation complet — ERP Kaiross

> Ce guide décrit **toutes les fonctionnalités** de l'application, écran par écran, champ par champ, bouton par bouton.

---

## Table des matières

1. [Connexion & Navigation](#1-connexion--navigation)
2. [Module Ventes](#2-module-ventes)
   - 2.1 [Clients](#21-clients)
   - 2.2 [Commandes de vente](#22-commandes-de-vente)
   - 2.3 [Factures clients](#23-factures-clients)
   - 2.4 [Avoirs clients](#24-avoirs-clients)
   - 2.5 [Ristournes](#25-ristournes)
   - 2.6 [Précomptes & Enlèvements](#26-précomptes--enlèvements)
   - 2.7 [Rapports de vente](#27-rapports-de-vente)
   - 2.8 [eLeader (ventes terrain)](#28-eleader-ventes-terrain)
3. [Module Achats](#3-module-achats)
   - 3.1 [Fournisseurs](#31-fournisseurs)
   - 3.2 [Commandes d'achat](#32-commandes-dachat)
   - 3.3 [Factures fournisseurs](#33-factures-fournisseurs)
   - 3.4 [Avoirs fournisseurs](#34-avoirs-fournisseurs)
   - 3.5 [Remises fournisseurs](#35-remises-fournisseurs)
4. [Module Stock](#4-module-stock)
   - 4.1 [Tableau de bord stock](#41-tableau-de-bord-stock)
   - 4.2 [Articles](#42-articles)
   - 4.3 [Catégories d'articles](#43-catégories-darticles)
   - 4.4 [Entrepôts](#44-entrepôts)
   - 4.5 [Emplacements](#45-emplacements)
   - 4.6 [Réceptions](#46-réceptions)
   - 4.7 [Livraisons](#47-livraisons)
   - 4.8 [Transferts internes](#48-transferts-internes)
   - 4.9 [Ajustements de stock (Inventaire physique)](#49-ajustements-de-stock-inventaire-physique)
   - 4.10 [Analyse & Rapports stock](#410-analyse--rapports-stock)
   - 4.11 [Agences distantes](#411-agences-distantes)
5. [Module Comptabilité](#5-module-comptabilité)
   - 5.1 [Plan comptable](#51-plan-comptable)
   - 5.2 [Journaux](#52-journaux)
   - 5.3 [Écritures comptables](#53-écritures-comptables)
   - 5.4 [Grand Livre](#54-grand-livre)
   - 5.5 [Rapports financiers](#55-rapports-financiers)
   - 5.6 [Comptes analytiques](#56-comptes-analytiques)
   - 5.7 [Import d'écritures](#57-import-décritures)
6. [Configuration & Administration](#6-configuration--administration)
   - 6.1 [Utilisateurs](#61-utilisateurs)
   - 6.2 [Rôles & Permissions](#62-rôles--permissions)
7. [Annexe — Modèles Excel d'import](#7-annexe--modèles-excel-dimport)

---

## 1. Connexion & Navigation

### 1.1 Se connecter

1. Ouvrez l'application dans votre navigateur.
2. Sur la page de connexion, renseignez :
   - **Email** : votre adresse e-mail (ex. `admin@societe.com`)
   - **Mot de passe** : votre mot de passe
3. Cliquez sur **Se connecter**.

Si vos identifiants sont incorrects, un message d'erreur apparaît en rouge sous le formulaire. Vérifiez la casse (majuscules/minuscules) du mot de passe. En cas de blocage, demandez à votre administrateur de réinitialiser votre mot de passe.

### 1.2 Changer son mot de passe

1. Allez dans **Configuration** (menu du haut).
2. Cliquez sur **Mon profil** ou **Changer le mot de passe**.
3. Saisissez l'**ancien mot de passe**, le **nouveau**, confirmez-le.
4. Cliquez sur **Enregistrer**.

### 1.3 Navigation entre modules

La barre de navigation en haut de l'écran contient :

| Menu | Sous-menus disponibles |
|------|------------------------|
| **Ventes** | Clients, Commandes, Factures, Avoirs, Ristournes, Précomptes, Rapports, eLeader |
| **Achats** | Fournisseurs, Commandes, Factures, Avoirs, Remises |
| **Stock** | Tableau de bord, Articles, Catégories, Entrepôts, Emplacements, Réceptions, Livraisons, Transferts, Ajustements, Analyse, Agences |
| **Comptabilité** | Plan comptable, Journaux, Écritures, Grand Livre, Rapports, Analytique, Import |
| **Configuration** | Utilisateurs, Rôles, Groupes |

Cliquez sur un menu pour dérouler ses sous-menus, puis sur le sous-menu pour accéder à l'écran correspondant.

---

## 2. Module Ventes

### 2.1 Clients

**Accès :** Ventes → Clients

Cet écran liste tous vos clients. Vous pouvez créer, modifier, supprimer et importer des clients.

#### Créer un client

1. Cliquez sur le bouton **Nouveau client** (en haut à droite).
2. Une fenêtre modale s'ouvre. Renseignez les champs suivants :

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| **Nom** | Oui | Raison sociale ou nom du client |
| **Référence** | Non | Code interne pour identifier le client |
| **Téléphone** | Non | Numéro de téléphone |
| **Email** | Non | Adresse email du client |
| **Adresse** | Non | Adresse physique complète |
| **Taux précompte (%)** | Non | Taux de retenue à la source applicable à ce client (ex. : `5.5`) |
| **Limite de crédit (FCFA)** | Non | Plafond d'encours autorisé. Dépasser cette limite affiche un avertissement lors de la facturation |
| **Code compte client** | Non | Compte comptable à débit (ex. : `411100`). Si vide, compte par défaut utilisé |

3. Cliquez sur **Enregistrer** pour créer le client.

#### Modifier un client

1. Dans la liste, cliquez sur l'icône **crayon** (✏️) en face du client.
2. La même fenêtre s'ouvre avec les données pré-remplies.
3. Modifiez les champs souhaités puis cliquez sur **Enregistrer**.

#### Supprimer un client

1. Cliquez sur l'icône **corbeille** (🗑️) en face du client.
2. Une confirmation est demandée : cliquez sur **Oui** pour confirmer.

> **Attention :** Un client ayant des factures ou commandes ne peut pas être supprimé. Désactivez-le à la place.

#### Importer des clients depuis Excel

1. Cliquez sur **Importer Excel**.
2. Cliquez d'abord sur **Télécharger le modèle** pour obtenir le fichier Excel avec les bonnes colonnes.
3. Remplissez le fichier en respectant les colonnes (voir [Annexe 7](#7-annexe--modèles-excel-dimport)).
4. Cliquez sur **Parcourir** et sélectionnez votre fichier.
5. Un aperçu des lignes détectées s'affiche. Vérifiez que les données sont correctes.
6. Cliquez sur **Confirmer l'import**.

#### Configurer les ristournes d'un client

Sur la fiche d'un client, vous pouvez définir les ristournes qui lui sont applicables directement depuis la liste :

1. Cliquez sur l'icône de configuration (⚙️) ou dépliez la section **Ristournes** sur la fiche client.
2. Cliquez sur **Ajouter une ristourne**.
3. Renseignez :
   - **Catégorie d'article** : la gamme de produits concernée
   - **Type** : `brasserie` ou `guinness`
   - **Montant HT** : montant de la ristourne
   - Le **Montant TTC** est calculé automatiquement (Brasserie = HT + précompte ; Guinness = HT)

---

### 2.2 Commandes de vente

**Accès :** Ventes → Commandes

Cet écran liste toutes les commandes de vente. Chaque ligne affiche : numéro de commande, date, client, montant TTC et état.

#### Filtres disponibles

- **État** : `Tous` / `Brouillon` / `Confirmé` / `Facturé` / `Annulé`
- **Date du** et **au** : filtre par plage de dates

#### États d'une commande

| État | Couleur | Description |
|------|---------|-------------|
| **Brouillon** | Gris | En cours de saisie, modifiable |
| **Confirmé** | Bleu | Validé, facture et livraison créées automatiquement |
| **Facturé** | Vert | Facture associée validée |
| **Annulé** | Rouge | Annulé, aucun mouvement de stock ni écriture |

#### Créer une commande de vente

1. Cliquez sur **Nouvelle commande**.
2. L'écran de saisie s'ouvre avec les champs suivants :

**En-tête de la commande :**

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| **Date** | Oui | Date de la commande (par défaut : aujourd'hui) |
| **Client** | Oui | Sélectionnez le client dans la liste déroulante ou tapez son nom pour le rechercher |
| **Journal** | Oui | Journal de vente à utiliser (ex. : `Ventes`) |
| **Entrepôt** | Oui | Entrepôt depuis lequel la livraison sera préparée |
| **Agence** | Non | Si la vente concerne une agence distante, sélectionnez-la ici |

Dès que vous sélectionnez un client, son **solde comptable** et son **crédit disponible** s'affichent en bas de l'en-tête pour vous aider à décider si vous pouvez lui vendre à crédit.

**Lignes de la commande :**

Cliquez sur **Ajouter une ligne** pour ajouter un article. Pour chaque ligne :

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| **Description / Article** | Oui | Tapez le code ou le nom de l'article. L'autocomplète vous propose les articles correspondants. Priorité : correspondance exacte du code > code commence par > nom commence par > reste |
| **Quantité** | Oui | Quantité commandée. Si la quantité dépasse le stock disponible, un avertissement orange apparaît (⚠️) |
| **Prix unitaire** | Non | Prix de vente unitaire. Pré-rempli depuis la fiche article, modifiable |
| **Remise (%)** | Non | Taux de remise en pourcentage (ex. : `5` pour 5%) |
| **TVA (%)** | Non | Taux de TVA. Par défaut : **19,25%** |
| **Compte comptable** | Non | Compte de produit. Par défaut : `7011` |
| **Montant HT** | Calculé | = Qté × Prix unitaire × (1 - Remise%) |
| **Montant TVA** | Calculé | = Montant HT × Taux TVA |
| **Montant TTC** | Calculé | = Montant HT + Montant TVA |

En bas de la commande, les **totaux** se calculent automatiquement : Total HT, Total Remise, Total TVA, **Total TTC**.

**Actions disponibles :**

| Bouton | Description |
|--------|-------------|
| **Enregistrer** | Sauvegarde la commande en état Brouillon |
| **Confirmer** | Valide la commande → crée automatiquement une **facture client** (état Brouillon) et un **bon de livraison** dans le stock |
| **Annuler** | Annule la commande (irréversible si elle a une facture associée) |
| **Imprimer** | Génère le bon de commande en PDF |
| **Supprimer une ligne** | Icône ✕ en fin de ligne |

> **Important :** La confirmation d'une commande déclenche automatiquement la création de la facture et du bon de livraison. Vous ne pouvez plus modifier la commande après confirmation.

---

### 2.3 Factures clients

**Accès :** Ventes → Factures

Les factures sont créées automatiquement quand une commande est confirmée. Vous pouvez aussi créer une facture directe sans commande.

#### Liste des factures

Chaque ligne affiche : numéro, date, client, montant HT, montant TTC, montant payé, état, et une **barre de progression du paiement** (en vert si partiellement payé, pleine si totalement payé).

**Filtres :**

- **État** : `Toutes` / `Brouillon` / `Validée` / `Payée` / `Annulée`
- **Date du** et **au**

**États d'une facture :**

| État | Couleur | Description |
|------|---------|-------------|
| **Brouillon** | Gris | Créée mais non validée, modifiable |
| **Validée** | Bleu | Écriture comptable générée, en attente de paiement |
| **Payée** | Vert | Totalement réglée |
| **Annulée** | Rouge | Annulée |

#### Ouvrir / Détail d'une facture

Cliquez sur une facture pour l'ouvrir. L'écran de détail affiche :

**En-tête :**

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| **Client** | Oui | Tiers facturé |
| **Journal** | Oui | Journal comptable (ex. : Ventes) |
| **Date** | Oui | Date de la facture |
| **Entrepôt** | Oui | Entrepôt source pour les sorties de stock |

**Lignes de facture :**

Mêmes champs que les lignes de commande (Description, Quantité, Prix unitaire, Remise %, TVA %, Compte, Montant HT/TVA/TTC).

En bas, des totaux spécifiques à l'industrie brassicole s'affichent :
- **Total Colis** : nombre de colis non-consignés
- **Total PET** : nombre de palettes (catégories Palette de 6, 12, Bidons)
- **Total Casier** : nombre de casiers (catégories Casier de 12 ou 24)

**Actions sur une facture :**

| Bouton | Disponible quand | Description |
|--------|-----------------|-------------|
| **Valider** | État Brouillon | Génère l'écriture comptable. La facture passe en état **Validée**. Action irréversible directement |
| **Annuler** | État Validée | Annule la facture et génère une écriture de contrepassation |
| **Contrepasser** | État Validée | Crée une écriture miroir pour annuler les effets comptables |
| **Enregistrer paiement** | État Validée | Ouvre le formulaire de saisie d'un règlement client |
| **Appliquer crédit** | État Validée, si le client a un avoir | Impute un avoir existant sur cette facture |
| **Générer ristournes** | État Validée | Calcule et crée les ristournes dues sur cette facture |
| **Créer un avoir** | État Validée | Crée un avoir (remboursement partiel ou total) |
| **Imprimer** | Toujours | Génère la facture en PDF |
| **Voir la commande** | Si issue d'une commande | Ouvre la commande d'origine |

#### Enregistrer un paiement

1. Sur la facture validée, cliquez sur **Enregistrer paiement**.
2. Renseignez :
   - **Montant** : montant payé (peut être partiel)
   - **Date** : date du paiement
   - **Mode de règlement** : Banque, Caisse, etc.
   - **Référence** : numéro de chèque, virement, etc.
3. Cliquez sur **Valider le paiement**.

Si le paiement couvre le total restant dû, la facture passe automatiquement en état **Payée**.

---

### 2.4 Avoirs clients

**Accès :** Ventes → Avoirs

Un avoir est un document de remboursement ou de rectification en faveur du client. Il se crée de deux façons :
- **Automatiquement** depuis une facture validée (bouton "Créer un avoir" sur la facture)
- **Manuellement** depuis la liste des avoirs

#### Liste des avoirs

**Filtres :**
- **État** : `Tous` / `Brouillon` / `Validé` / `Annulé`
- **Date du** et **au**
- Le bas de page affiche le **total des avoirs validés** sur la période filtrée.

#### Créer un avoir manuellement

1. Cliquez sur **Nouvel avoir**.
2. Renseignez :

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| **Client** | Oui | Client à créditer |
| **Journal** | Oui | Journal de vente |
| **Date** | Non | Date de l'avoir (par défaut : aujourd'hui) |

3. Ajoutez des lignes (mêmes champs qu'une facture : article, quantité, prix, TVA, remise, compte).
4. Cliquez sur **Enregistrer** (état Brouillon) puis **Valider** pour générer l'écriture de crédit.

> Un avoir validé peut être **appliqué** sur une facture ouverte via le bouton "Appliquer crédit" sur la facture.

---

### 2.5 Ristournes

**Accès :** Ventes → Ristournes

Les ristournes sont des remises accordées aux clients en fin de période, calculées sur leurs achats par catégorie de produit. L'écran est organisé en **4 onglets**.

---

#### Onglet 1 — Configuration des ristournes

Cet onglet liste toutes les règles de ristourne définies pour chaque client.

**Créer une règle de ristourne :**

1. Cliquez sur **Ajouter**.
2. Renseignez :

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| **Client** | Oui | Client bénéficiaire |
| **Catégorie d'article** | Oui | Gamme de produits concernée (ex. : Bières, Softs...) |
| **Type** | Oui | `brasserie` ou `guinness` — détermine le calcul de la TVA |
| **Montant HT** | Oui | Montant de la ristourne hors taxe par unité de période |

Le **Montant TTC** est calculé automatiquement :
- Type `brasserie` : Montant TTC = Montant HT + (Montant HT × Taux précompte du client)
- Type `guinness` : Montant TTC = Montant HT (pas de précompte)

**Importer des ristournes depuis Excel :**

1. Cliquez sur **Importer Excel** puis **Télécharger le modèle**.
2. Remplissez les colonnes : `Client`, `Catégorie d'article`, `Type de ristourne`, `Montant de la ristourne`, `Ristourne TTC`, `Actif`.
3. Importez le fichier et confirmez.

---

#### Onglet 2 — Brasseries (paiements trimestriels)

Cet onglet affiche les paiements de ristournes **Brasserie** regroupés par trimestre.

**Générer les ristournes d'un trimestre :**

1. Sélectionnez le **trimestre** dans le menu déroulant :
   - T1 : Janvier – Mars
   - T2 : Avril – Juin
   - T3 : Juillet – Septembre
   - T4 : Octobre – Décembre
2. Cliquez sur **Générer**. L'application calcule les ristournes dues à chaque client selon les règles définies dans l'onglet Config.
3. Les paiements générés apparaissent avec l'état **Brouillon**.

**Actions sur les paiements :**

| Bouton | Description |
|--------|-------------|
| **Confirmer** | Confirme un paiement individuel (état → Confirmé) |
| **Tout confirmer** | Confirme tous les paiements en Brouillon d'un coup |
| **Annuler** | Annule un paiement |

---

#### Onglet 3 — Guinness (paiements par période)

Même fonctionnement que l'onglet Brasseries, mais pour les ristournes **Guinness**.

Au lieu d'un trimestre, vous définissez une **plage de dates** (`Date début` et `Date fin`) puis cliquez sur **Générer**.

---

#### Onglet 4 — Règlements (génération des avoirs)

Cet onglet permet de transformer les paiements confirmés en **avoirs comptables**.

1. Les paiements confirmés sont regroupés par client.
2. Pour chaque groupe, cliquez sur **Générer l'avoir** : un avoir client est créé automatiquement avec les lignes correspondant aux ristournes.
3. L'avoir apparaît alors dans **Ventes → Avoirs** et peut être validé.

---

### 2.6 Précomptes & Enlèvements

**Accès :** Ventes → Précomptes

L'écran est organisé en **2 onglets**.

---

#### Onglet 1 — Précomptes

Les précomptes sont des retenues à la source appliquées lors de la facturation.

**Créer un précompte :**

1. Cliquez sur **Ajouter**.
2. Renseignez :

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| **Client** | Oui | Client sur lequel s'applique la retenue |
| **Type** | Oui | `sale` (sur vente) ou `purchase` (sur achat) |
| **Taux (%)** | Oui | Pourcentage de retenue (ex. : `5.5`) |

**Importer des précomptes depuis Excel :**

Cliquez sur **Importer** et utilisez le modèle téléchargeable. Le fichier accepte les colonnes : `partner_id` ou `Nom du partenaire`, `typePrecompte` ou `Type de précompte`, `tauxPrecompte` ou `Taux (%)`.

---

#### Onglet 2 — Enlèvements

Les enlèvements sont des frais de collecte/transport facturés au client par catégorie de produit.

**Créer un enlèvement :**

1. Cliquez sur **Ajouter**.
2. Renseignez :

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| **Catégorie d'article** | Oui | Catégorie à laquelle s'applique le frais d'enlèvement |
| **Montant fixe** | Oui | Montant forfaitaire de l'enlèvement |
| **Coût d'enlèvement** | Non | Coût interne de l'opération (non facturé) |

Vous pouvez aussi définir des **montants spécifiques par client** : dans la section "Clients spécifiques", cliquez sur **Ajouter un client**, sélectionnez le client et saisissez le montant particulier qui lui est appliqué.

---

### 2.7 Rapports de vente

**Accès :** Ventes → Rapports

#### Tableau de bord

Affiche les indicateurs clés :
- Chiffre d'affaires du mois en cours
- Nombre de commandes confirmées
- Top 5 des articles les plus vendus
- Top 5 des clients

#### État commercial

Rapport détaillé des ventes avec filtres par période, client, article ou agence. Exportable en PDF et Excel.

#### Rapport consolidé

Vision multi-agences : consolidation des ventes de toutes les agences sur une période.

---

### 2.8 eLeader (ventes terrain)

**Accès :** Ventes → eLeader

eLeader est la plateforme de prise de commandes terrain (commerciaux en déplacement).

#### Configuration eLeader

1. Allez dans **eLeader → Configuration**.
2. Renseignez les paramètres de connexion à la plateforme eLeader (URL, clé API).
3. Enregistrez.

#### Import des commandes eLeader

1. Allez dans **eLeader → Import**.
2. Cliquez sur **Importer les commandes** pour récupérer les commandes passées sur le terrain.
3. Les commandes importées apparaissent dans **Ventes → Commandes** avec un marqueur eLeader.

#### Journal eLeader

L'onglet **Journal** liste toutes les synchronisations effectuées (date, nombre de commandes importées, erreurs éventuelles).

---

## 3. Module Achats

### 3.1 Fournisseurs

**Accès :** Achats → Fournisseurs

Même fonctionnement que les clients. Les champs spécifiques sont :

| Champ | Description |
|-------|-------------|
| **Type** | `supplier` (fournisseur uniquement) ou `both` (client et fournisseur) |
| **Taux précompte (%)** | Retenue applicable sur les achats à ce fournisseur |

**Import Excel :** Colonnes : `Nom*`, `Référence`, `Téléphone`, `Email`, `Adresse`.

**Configurer les remises d'un fournisseur :** Même principe que les ristournes clients — voir section [3.5 Remises fournisseurs](#35-remises-fournisseurs).

---

### 3.2 Commandes d'achat

**Accès :** Achats → Commandes

#### États d'une commande d'achat

| État | Description |
|------|-------------|
| **Brouillon** | En cours de saisie |
| **Confirmée** | Envoyée au fournisseur, en attente de réception |
| **Réceptionnée** | Marchandise reçue et bordereau validé |
| **Annulée** | Annulée |

#### Créer une commande d'achat

1. Cliquez sur **Nouvelle commande**.
2. Renseignez l'**en-tête** :

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| **Date** | Oui | Date de la commande |
| **Fournisseur** | Oui | Sélectionnez le fournisseur |

3. Ajoutez les **lignes** :

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| **Description / Article** | Oui | Article commandé (même autocomplète que les ventes) |
| **Quantité** | Oui | Quantité à commander |
| **Prix unitaire** | Non | Prix d'achat unitaire (pré-rempli depuis la fiche article) |
| **TVA (%)** | Non | Taux de TVA (par défaut : **19,25%**) |
| **Montant HT / TVA / TTC** | Calculés automatiquement | |

4. **Enregistrez** (état Brouillon) puis **Confirmez** la commande.

Quand la commande est confirmée, le système crée automatiquement un **bon de réception en attente** dans le module Stock.

---

### 3.3 Factures fournisseurs

**Accès :** Achats → Factures

Les factures fournisseurs sont créées automatiquement lors de la validation du bordereau de réception. Elles peuvent aussi être créées manuellement.

Même fonctionnement que les factures clients, avec les différences suivantes :

- Le champ **Fournisseur** remplace le champ Client.
- Pas de champ Entrepôt (la livraison est déjà faite à la réception).
- Le **compte comptable par défaut** sur les lignes est `6011` (achats) au lieu de `7011`.

**Actions identiques :** Valider, Annuler, Contrepasser, Enregistrer paiement, Générer remises, Créer un avoir, Imprimer.

---

### 3.4 Avoirs fournisseurs

**Accès :** Achats → Avoirs

Les avoirs fournisseurs (préfixe `AVF-`) représentent les retours de marchandise ou corrections de prix en votre faveur.

Même fonctionnement que les avoirs clients, mais :
- Sélection d'un **Fournisseur** au lieu d'un Client
- Compte comptable par défaut : `6011`
- Numérotation automatique : `AVF-XXXX`

---

### 3.5 Remises fournisseurs

**Accès :** Achats → Remises

Les remises sont les rétrocessions accordées par les fournisseurs sur vos achats. L'écran est en **3 onglets**.

#### Onglet 1 — Configuration

Définissez les règles de remise par fournisseur et par catégorie.

**Créer une règle :**

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| **Fournisseur** | Oui | Fournisseur accordant la remise |
| **Catégorie d'article** | Oui | Gamme concernée |
| **Type** | Oui | `brasserie` ou `guinness` |
| **Montant fixe** | Oui | Montant de la remise |

**Import :** colonnes `Fournisseur`, `Catégorie d'article`, `Type (brasserie/guinness)`, `Montant de la remise`, `Actif`.

#### Onglet 2 — Paiements

Enregistrez les paiements de remises reçus du fournisseur.

1. Cliquez sur **Nouveau paiement**.
2. Sélectionnez le **Fournisseur**.
3. Ajoutez des lignes :
   - **Catégorie** : catégorie concernée
   - **Quantité** : nombre d'unités
   - **Montant unitaire** : montant par unité
   - **Total** = Quantité × Montant unitaire (calculé automatiquement)
4. Enregistrez. Le paiement est en état **Brouillon**.
5. Cliquez sur **Confirmer** pour valider le paiement (état → Confirmé).

#### Onglet 3 — Règlements

Transforme les paiements confirmés en **factures comptables**.

1. Les paiements confirmés sont regroupés par fournisseur.
2. Cliquez sur **Générer la facture** pour un groupe : une facture fournisseur (avoir de charge) est créée automatiquement.
3. Cette facture apparaît dans **Achats → Avoirs** et peut être validée.

---

## 4. Module Stock

### 4.1 Tableau de bord stock

**Accès :** Stock → Tableau de bord

Affiche :
- **Nombre d'articles actifs** dans le catalogue
- **Nombre d'entrepôts**
- **Valeur totale du stock** en FCFA
- **Réceptions en attente** (bons de réception non encore traités)
- **Réceptions validées** (reçues)
- **Livraisons** en cours
- **Transferts** en cours et terminés
- Derniers mouvements de stock

---

### 4.2 Articles

**Accès :** Stock → Articles

#### Liste des articles

Filtres disponibles :
- **Recherche** : tapez un nom ou une référence interne
- **Type** : `Tous` / `Stockable` / `Consommable` / `Service`

#### Créer un article

1. Cliquez sur **Nouveau**.
2. Renseignez :

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| **Nom** | Oui | Désignation de l'article (ex. : `Bière Castel 65cl`) |
| **Référence interne** | Non | Code article (ex. : `CAS65`). Utilisé dans l'autocomplète des commandes |
| **Type** | Oui | `Stockable` : géré en stock physique / `Consommable` : non suivi / `Service` : prestation |
| **Catégorie** | Non | Catégorie d'article (détermine les comptes comptables) |
| **Prix de vente** | Non | Prix de vente en FCFA |
| **Coût** | Non | Prix d'achat / coût de revient en FCFA |
| **Unité de mesure** | Non | Ex. : Unité, Caisse, Kg, Litre... |
| **Description** | Non | Description détaillée |

3. Cliquez sur **Enregistrer**.

#### Modifier / Supprimer un article

- **Modifier** : icône crayon → modifier → Enregistrer.
- **Supprimer** : icône corbeille → confirmation. La suppression est en réalité une désactivation (l'article disparaît de la liste mais ses mouvements sont conservés).

#### Importer des articles depuis Excel

1. Cliquez sur **Importer Excel** → **Télécharger le modèle**.
2. Remplissez le fichier (voir [Annexe 7](#7-annexe--modèles-excel-dimport)).
3. **Colonne "Quantité en stock" :** si vous renseignez une valeur > 0, le système crée automatiquement un ajustement de stock initial dans le **Magasin Principal** avec une écriture comptable. Vous n'avez pas besoin de le faire manuellement.
4. Importez le fichier et cliquez sur **Confirmer**.

---

### 4.3 Catégories d'articles

**Accès :** Stock → Catégories

Les catégories permettent de regrouper les articles et de définir les comptes comptables par défaut.

**Créer une catégorie :**

| Champ | Description |
|-------|-------------|
| **Nom** | Nom de la catégorie (ex. : `Bières`, `Softs`) |
| **Code** | Code abrégé |
| **Compte stock** | Compte d'actif pour la valeur du stock (ex. : `311000`) |
| **Compte entrée stock** | Compte de charge pour les entrées (ex. : `6031`) |
| **Compte coût des ventes** | Compte de charge pour les sorties (ex. : `60500`) |
| **Catégorie parente** | Pour créer une hiérarchie de catégories |

---

### 4.4 Entrepôts

**Accès :** Stock → Entrepôts

Votre société peut avoir plusieurs entrepôts. L'application en gère par défaut 3 :

| Entrepôt | Rôle |
|----------|------|
| **Magasin Principal** | Entrepôt de vente. Toute réception validée et tout stock initial importé atterrit ici |
| **Dépôt Achat** | Zone de transit pour les réceptions fournisseurs. Les marchandises arrivent ici avant d'être transférées au Magasin Principal via le bordereau |
| **Avaries** | Entrepôt pour les marchandises endommagées détectées lors des réceptions |

**Créer un entrepôt supplémentaire :**

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| **Nom** | Oui | Ex. : `Dépôt Ouest` |
| **Code** | Oui | Code court en majuscules (ex. : `DO`). Utilisé comme préfixe des opérations |
| **Journal de stock** | Non | Journal comptable associé |
| **Dépôt Achat lié** | Non | Entrepôt de transit pour les réceptions |
| **Entrepôt Avaries lié** | Non | Entrepôt de destination pour les avaries |

À la création, l'entrepôt génère automatiquement :
- Son emplacement de stock
- 3 types d'opérations : Réceptions, Livraisons, Transferts internes

---

### 4.5 Emplacements

**Accès :** Stock → Emplacements

Les emplacements sont les zones physiques à l'intérieur d'un entrepôt.

**Types d'emplacements :**

| Type | Description |
|------|-------------|
| `internal` | Zone de stockage physique (comptabilisée dans le stock) |
| `supplier` | Zone virtuelle représentant les fournisseurs (source des réceptions) |
| `customer` | Zone virtuelle représentant les clients (destination des livraisons) |
| `inventory` | Zone virtuelle pour les écarts d'inventaire |
| `transit` | Zone temporaire de passage |

**Créer un emplacement :**

| Champ | Description |
|-------|-------------|
| **Nom** | Nom de l'emplacement (ex. : `Rayon Bières`) |
| **Type** | Voir tableau ci-dessus |
| **Emplacement parent** | Pour créer une hiérarchie (ex. : `Magasin Principal / Rayon Bières`) |
| **Compte comptable** | Compte de stock associé à cet emplacement |

---

### 4.6 Réceptions

**Accès :** Stock → Réceptions

Les réceptions enregistrent l'entrée physique des marchandises commandées aux fournisseurs.

#### Flux complet d'une réception

```
Commande fournisseur confirmée
        ↓
Réception créée automatiquement (état : En attente)
        ↓
Marchandise arrive au Dépôt Achat
        ↓
Ouvrir la réception → Imprimer le Bordereau
        ↓
Compter physiquement la marchandise
        ↓
Saisir les quantités réelles reçues
        ↓
Valider → Stock mis à jour (Magasin Principal + Avaries)
```

#### Bordereau de réception

1. Cliquez sur une réception en état **En attente**.
2. Cliquez sur **Imprimer le bordereau PDF** pour obtenir le document de contrôle.
3. Le bordereau liste pour chaque article : code, désignation, prix unitaire, quantité commandée, quantité reçue, avaries.

#### Saisir les quantités reçues

Le tableau affiche les colonnes suivantes :

| Colonne | Description |
|---------|-------------|
| **Code** | Référence article |
| **Désignation** | Nom article |
| **Prix unitaire** | Prix d'achat unitaire |
| **Qté commandée** | Quantité attendue |
| **Qté saisie** | Champ à remplir : quantité effectivement reçue. **Par défaut égale à la Qté commandée** |
| **Avaries** | Calculé = Qté commandée − Qté saisie (quantité endommagée ou manquante) |

**Bouton "Tout recevoir" :** remplit automatiquement toutes les cases "Qté saisie" avec la quantité commandée (réception totale sans avarie).

**Totaux affichés :**
- Total Qté commandée
- Total Qté saisie (ce qui va au Magasin Principal)
- Total Avaries (ce qui va à l'entrepôt Avaries)

#### Valider la réception

1. Après avoir renseigné toutes les quantités, cliquez sur **Valider**.
2. Un message de confirmation indique ce qui sera envoyé au Magasin Principal et en Avaries.
3. Confirmez : le système crée les mouvements de stock et met à jour les quantités disponibles.
4. La réception passe en état **Validé** (lecture seule).

> **Export Excel :** Vous pouvez aussi exporter le bordereau en Excel via le bouton correspondant.

---

### 4.7 Livraisons

**Accès :** Stock → Livraisons

Les livraisons enregistrent la sortie de marchandises vers les clients.

#### Créer une livraison

Les livraisons sont généralement créées automatiquement depuis les commandes de vente confirmées. Vous pouvez aussi en créer une manuellement :

1. Cliquez sur **Nouvelle livraison**.
2. Renseignez l'**en-tête** :

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| **Type d'opération** | Oui | Sélectionnez le type "Livraisons" de l'entrepôt concerné |
| **Emplacement source** | Oui | D'où part la marchandise (ex. : `Magasin Principal / Stock`) |
| **Emplacement destination** | Oui | Où va la marchandise (zone client virtuelle) |
| **Partenaire** | Non | Nom du client |
| **Origine** | Non | Référence de la commande ou du document d'origine |
| **Date prévue** | Non | Date de livraison prévue |
| **Notes** | Non | Observations |

3. Ajoutez les **lignes** :

| Champ | Description |
|-------|-------------|
| **Article** | Sélectionnez l'article (autocomplète) |
| **Quantité demandée** | Quantité à livrer |
| **Quantité effectuée** | Quantité réellement livrée (peut être modifiée si livraison partielle) |
| **Prix unitaire** | Prix de vente |
| **Qté disponible** | Stock disponible à l'emplacement source (affiché pour info) |

4. **Enregistrez** puis **Validez** : les quantités sont sorties du stock, la livraison passe en état **Livré**.

> Vous pouvez **Imprimer** le bon de livraison en PDF depuis le bouton dédié.

---

### 4.8 Transferts internes

**Accès :** Stock → Transferts

Les transferts permettent de déplacer des articles d'un emplacement à un autre, sans entrée ni sortie de société (ex. : du Dépôt Achat vers le Magasin Principal manuellement).

#### Créer un transfert

1. Cliquez sur **Nouveau transfert**.
2. Renseignez :

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| **Type d'opération** | Oui | Sélectionnez le type "Transferts internes" |
| **Emplacement source** | Oui | D'où partent les articles |
| **Emplacement destination** | Oui | Où arrivent les articles (doit être différent de la source) |
| **Origine** | Non | Référence du document d'origine |
| **Date prévue** | Non | Date planifiée |
| **Notes** | Non | Observations |

3. Ajoutez les lignes (même structure que les livraisons).
4. **Enregistrez** → **Validez** pour effectuer le mouvement.

---

### 4.9 Ajustements de stock (Inventaire physique)

**Accès :** Stock → Ajustements

Cet écran est le cœur de la gestion d'inventaire. Il permet de corriger les quantités en stock après un comptage physique.

#### Workflow complet pas à pas

```
┌─────────────────────────────────────────────────────────┐
│  ÉTAPE 1 : Imprimer la feuille de comptage              │
│  → Bouton [Imprimer feuille de comptage] en haut        │
│  → PDF vierge avec tous les articles et emplacements    │
│  → Distribuez aux compteurs sur le terrain              │
└─────────────────────────┬───────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  ÉTAPE 2 : Comptage physique sur le terrain             │
│  → Les compteurs notent les quantités réelles           │
│    dans la colonne "Qté comptée" (fond jaune)           │
└─────────────────────────┬───────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  ÉTAPE 3 : Saisir les quantités comptées               │
│  → Revenez sur l'écran Ajustements                      │
│  → Modifiez la colonne "Qté comptée" pour chaque article│
│  → Les écarts apparaissent en vert (+) ou rouge (-)     │
└─────────────────────────┬───────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  ÉTAPE 4 : Appliquer les ajustements                    │
│  → Renseignez le motif (ex. : "Inventaire annuel 2026") │
│  → Cliquez [Appliquer (N écart(s))]                     │
│  → Écritures comptables créées automatiquement          │
└─────────────────────────┬───────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  ÉTAPE 5 : Imprimer la fiche d'inventaire (PV)          │
│  → Bouton vert [Imprimer fiche d'inventaire]            │
│  → PDF avec : Qté avant / Qté comptée / Écart / Valeur  │
│  → Faites signer par le Responsable stock et Direction  │
└─────────────────────────────────────────────────────────┘
```

#### Description du tableau d'inventaire

| Colonne | Description |
|---------|-------------|
| **Emplacement** | Zone physique où se trouve l'article |
| **Code** | Référence interne de l'article |
| **Article** | Nom de l'article |
| **Qté disponible** | Quantité enregistrée dans le système |
| **UdM** | Unité de mesure |
| **Qté comptée** | Champ modifiable — saisissez la quantité réellement comptée |
| **Différence** | = Qté comptée − Qté disponible. Affiché en **vert** si positif (surplus), **rouge** si négatif (manque) |

#### Filtres disponibles

- **Recherche** : tapez un nom ou code article pour filtrer
- **Emplacement** : filtrez par zone pour travailler secteur par secteur

#### Boutons en haut de page

| Bouton | Description |
|--------|-------------|
| **Imprimer feuille de comptage** | Génère un PDF vierge de tous les articles avec colonne "Qté comptée" à remplir à la main |
| **Imprimer fiche d'inventaire** | Apparaît **après l'application** des ajustements. Génère le PV d'inventaire avec tous les écarts |

#### Champ Motif

Avant d'appliquer, renseignez le **Motif** dans le champ texte (ex. : `Inventaire annuel décembre 2026`). Ce motif apparaîtra dans le journal comptable et dans l'historique des ajustements.

#### Bouton Réinitialiser

Si vous souhaitez remettre toutes les quantités comptées à leur valeur système (annuler vos saisies), cliquez sur **Réinitialiser**.

#### Ce qui se passe à l'application

Pour chaque article dont la quantité comptée diffère de la quantité système :
1. La quantité en stock est mise à jour
2. Une **écriture comptable d'ajustement** est générée :
   - Écart positif (surplus) : Débit Compte Stock / Crédit Écarts d'inventaire
   - Écart négatif (manque) : Débit Écarts d'inventaire / Crédit Compte Stock

#### Onglet Historique des ajustements

Cliquez sur l'onglet **Historique** pour voir tous les ajustements passés.

Filtres : **Date du** et **Date au** — cliquez sur **Toutes dates** pour tout voir.

Le tableau affiche pour chaque ajustement :

| Colonne | Description |
|---------|-------------|
| **Date** | Horodatage de l'ajustement |
| **Article** | Nom et code article |
| **Emplacement** | Zone concernée |
| **Avant** | Quantité avant ajustement |
| **Après** | Quantité après ajustement |
| **Écart** | Différence (vert/rouge) |
| **Valeur** | Impact financier en FCFA |
| **Écriture** | Référence de l'écriture comptable générée |
| **Motif** | Raison de l'ajustement |

---

### 4.10 Analyse & Rapports stock

**Accès :** Stock → Analyse

#### Valorisation du stock

Affiche la valeur de chaque article en stock : quantité × coût unitaire moyen. Filtrable par entrepôt. Export PDF.

#### Rapport de stock

État des quantités en stock par article et par emplacement à l'instant T.

#### Mouvements

Historique complet de tous les mouvements (entrées, sorties, transferts, ajustements) avec filtres :
- Période (date du / au)
- Article spécifique
- Limite du nombre de lignes retournées

Export possible en PDF ou Excel.

---

### 4.11 Agences distantes

**Accès :** Stock → Agences

Les agences sont des points de vente ou de distribution distants.

**Créer une agence :**

| Champ | Description |
|-------|-------------|
| **Nom** | Nom de l'agence |
| **Code** | Code court (ex. : `ABJ-SUD`) |
| **Adresse** | Adresse physique |
| **Personne de contact** | Nom du responsable |
| **Téléphone** | Contact téléphonique |
| **Email** | Email de l'agence |

Une fois créée, l'agence peut être sélectionnée lors des commandes et livraisons pour suivre les ventes par agence.

---

## 5. Module Comptabilité

### 5.1 Plan comptable

**Accès :** Comptabilité → Plan comptable

Le plan comptable liste tous les comptes selon le référentiel **OHADA**.

**Créer un compte :**

| Champ | Description |
|-------|-------------|
| **Code** | Numéro du compte (ex. : `411001`) |
| **Nom** | Libellé du compte (ex. : `Client Bar Central`) |
| **Type** | Nature du compte : Actif, Passif, Produit, Charge... |

**Importer le plan comptable depuis Excel :** Cliquez sur **Importer**, téléchargez le modèle et complétez.

---

### 5.2 Journaux

**Accès :** Comptabilité → Journaux

Les journaux regroupent les écritures par nature d'opération.

| Journal typique | Type | Description |
|-----------------|------|-------------|
| **Ventes** | Sale | Factures et avoirs clients |
| **Achats** | Purchase | Factures et avoirs fournisseurs |
| **Banque** | Bank | Règlements bancaires |
| **Caisse** | Cash | Règlements en espèces |
| **OD** | General | Opérations Diverses, saisies manuelles |
| **Stock** | Stock | Mouvements de stock et ajustements d'inventaire |

**Ouvrir un journal :** Cliquez sur un journal pour voir la liste de toutes ses pièces comptables.

Depuis un journal, vous pouvez filtrer par période et accéder au détail de chaque pièce.

---

### 5.3 Écritures comptables

**Accès :** Comptabilité → Écritures

Cet écran liste toutes les pièces comptables, tous journaux confondus.

**Filtres :**

| Filtre | Description |
|--------|-------------|
| **Journal** | Filtrez par journal (Ventes, Achats, Banque...) |
| **Date du** | Date de début (par défaut : aujourd'hui) |
| **Date au** | Date de fin |
| **État** | `Brouillon` / `Validé` / `Annulé` |

**États d'une écriture :**

| État | Description |
|------|-------------|
| **Brouillon** | Saisie non validée, modifiable |
| **Validé** | Écriture confirmée, génère les soldes des comptes |
| **Annulé** | Contrepassée ou annulée |

**Créer une écriture manuelle :**

1. Cliquez sur **Nouvelle écriture**.
2. Sélectionnez le **Journal** et la **Date**.
3. Ajoutez les **lignes** :

| Champ | Description |
|-------|-------------|
| **Compte** | Numéro de compte (recherche par code ou nom) |
| **Libellé** | Description de la ligne |
| **Partenaire** | Client ou fournisseur concerné (facultatif) |
| **Débit** | Montant au débit |
| **Crédit** | Montant au crédit |

4. L'écriture doit être **équilibrée** (Total Débit = Total Crédit) avant de pouvoir être validée.
5. Cliquez sur **Enregistrer** (Brouillon) puis **Valider**.

**Actions sur une écriture :**

| Bouton | Description |
|--------|-------------|
| **Valider** | Confirme l'écriture. Action **irréversible directement** |
| **Contrepasser** | Crée une écriture miroir pour annuler les effets |
| **Annuler** | Passe l'écriture en état Annulé |

---

### 5.4 Grand Livre

**Accès :** Comptabilité → Grand Livre

Le Grand Livre présente le détail de toutes les écritures de chaque compte sur une période donnée.

**Paramètres du rapport :**

| Champ | Description |
|-------|-------------|
| **Date du** | Début de la période (par défaut : 1er janvier de l'année en cours) |
| **Date au** | Fin de la période (par défaut : aujourd'hui) |
| **Comptes** | Sélection multi-comptes. Laissez vide pour afficher tous les comptes |

**Cliquez sur "Générer"** pour lancer le calcul.

**Structure du rapport :**

Pour chaque compte sélectionné, le rapport affiche :
- **En-tête** : code du compte, nom du compte, total Débit, total Crédit, Solde final
- **Lignes de détail** pour chaque mouvement :

| Colonne | Description |
|---------|-------------|
| **Date** | Date de l'écriture |
| **Pièce** | Référence de la pièce comptable |
| **Journal** | Code du journal |
| **Libellé** | Description de la ligne |
| **Partenaire** | Client ou fournisseur concerné |
| **Débit** | Montant au débit |
| **Crédit** | Montant au crédit |
| **Solde** | Solde cumulé ligne par ligne |

**Actions :**

| Bouton | Description |
|--------|-------------|
| **Imprimer** | Lance l'impression navigateur de la page |
| **Export PDF** | Télécharge le rapport en PDF |
| **Export Excel** | Télécharge le rapport en Excel |

---

### 5.5 Rapports financiers

**Accès :** Comptabilité → Rapports

#### Balance générale (4 colonnes)

Affiche pour chaque compte : Solde débiteur d'ouverture, Solde créditeur d'ouverture, Solde débiteur de clôture, Solde créditeur de clôture.

#### Balance générale (6 colonnes)

Affiche les mouvements de la période en plus des soldes : Débit période, Crédit période, Solde débiteur, Solde créditeur, Solde débiteur final, Solde créditeur final.

#### Balance des tiers (4 colonnes)

Même structure que la balance générale mais uniquement pour les comptes de tiers (clients 411xxx, fournisseurs 401xxx).

#### Balance des tiers (6 colonnes)

Version détaillée de la balance des tiers avec mouvements de période.

#### Bilan

Le bilan présente la situation patrimoniale à une date donnée :
- **Actif** : immobilisations, stocks, créances clients, trésorerie
- **Passif** : capitaux propres, dettes fournisseurs, dettes fiscales

Sélectionnez la **date** de référence et cliquez sur **Générer**.

#### Compte de résultat

Affiche les **Produits** (comptes 7xxx) et les **Charges** (comptes 6xxx) sur une période, et calcule le **Résultat net** (Produits − Charges).

Sélectionnez la **date du** et **date au** puis cliquez sur **Générer**.

**Tous les rapports disposent d'un bouton Export PDF et Export Excel.**

---

### 5.6 Comptes analytiques

**Accès :** Comptabilité → Analytique → Comptes

Les comptes analytiques permettent une comptabilité de gestion (par projet, centre de coût, département).

**Créer un compte analytique :**

| Champ | Description |
|-------|-------------|
| **Code** | Code unique du compte (ex. : `PROJ-01`) |
| **Nom** | Libellé (ex. : `Projet Construction Dépôt`) |
| **Type** | Normale / Vue (agrégat) |

#### Lignes analytiques

**Accès :** Comptabilité → Analytique → Lignes

Les lignes analytiques sont créées automatiquement lors de la validation des écritures si un compte analytique est renseigné. Vous pouvez aussi les saisir manuellement.

#### Rapport analytique

**Accès :** Comptabilité → Analytique → Rapport

Affiche les charges et produits ventilés par compte analytique sur une période. Export PDF/Excel.

---

### 5.7 Import d'écritures

**Accès :** Comptabilité → Import

Permet d'importer en masse des écritures comptables depuis un fichier Excel (utile pour reprendre un historique ou intégrer des données d'un autre système).

1. Cliquez sur **Télécharger le modèle** pour obtenir le format attendu.
2. Remplissez les colonnes : Date, Journal, N° Pièce, Compte, Libellé, Partenaire, Débit, Crédit.
3. Cliquez sur **Importer**, sélectionnez votre fichier.
4. Un aperçu s'affiche avec les erreurs éventuelles (compte inexistant, déséquilibre...).
5. Confirmez l'import si tout est correct.

---

## 6. Configuration & Administration

### 6.1 Utilisateurs

**Accès :** Configuration → Utilisateurs

Seul un **Administrateur** peut gérer les utilisateurs.

#### Liste des utilisateurs

Affiche tous les utilisateurs avec leur nom, email, rôle et statut (actif/inactif).

**Filtre** : filtrez par groupe (Super Admin, Admin, Auditeur, Contrôleur...).

#### Créer un utilisateur

1. Cliquez sur **Nouvel utilisateur**.
2. Renseignez :

| Champ | Obligatoire | Description |
|-------|-------------|-------------|
| **Nom d'utilisateur** | Oui | Identifiant de connexion |
| **Mot de passe** | Oui | Mot de passe initial (l'utilisateur pourra le changer) |
| **Nom complet** | Non | Prénom et nom |
| **Email** | Non | Adresse email |
| **Rôle** | Oui | Rôle assigné (détermine les permissions) |
| **Groupe** | Oui si rôle système | Pour les rôles Super Admin, Admin, Auditeur, Contrôleur |
| **Société** | Oui si rôle standard | La société à laquelle appartient l'utilisateur |

3. Cliquez sur **Enregistrer**.

**Rôles système prédéfinis :**

| Code | Libellé | Description |
|------|---------|-------------|
| `SUPER_ADMIN` | Super Administrateur | Accès complet à toutes les sociétés |
| `ADMIN` | Administrateur | Accès complet à sa société |
| `SUPER_AUDITEUR` | Super Auditeur | Lecture seule sur toutes les sociétés |
| `AUDITEUR` | Auditeur | Lecture seule sur sa société |
| `CONTROLEUR` | Contrôleur | Accès limité au contrôle |

#### Activer / Désactiver un utilisateur

Cliquez sur l'icône de statut (🟢 / 🔴) pour basculer entre actif et inactif. Un utilisateur inactif ne peut plus se connecter mais ses données sont conservées.

---

### 6.2 Rôles & Permissions

**Accès :** Configuration → Rôles

Les rôles définissent ce que chaque utilisateur peut faire dans l'application.

#### Créer un rôle

1. Cliquez sur **Nouveau rôle**.
2. Saisissez le **libellé** du rôle (ex. : `Responsable commercial`, `Magasinier`).
3. Définissez la **matrice des permissions** module par module.

#### Matrice des permissions

Pour chaque module et sous-module, vous pouvez activer ou désactiver les actions suivantes :

| Action | Description |
|--------|-------------|
| **Voir** | Accès en lecture à l'écran et aux données |
| **Créer** | Droit de créer de nouveaux enregistrements |
| **Modifier** | Droit de modifier des enregistrements existants |
| **Supprimer** | Droit de supprimer des enregistrements |
| **Importer** | Droit d'importer des données depuis Excel |
| **Exporter** | Droit d'exporter des données en Excel/PDF |

**Modules disponibles :**

| Module | Sous-modules |
|--------|-------------|
| **VENTES** | Clients, Bons de commande, Factures, Avoirs, Ristournes, Précomptes, Rapports |
| **ACHATS** | Fournisseurs, Commandes, Factures, Avoirs, Remises |
| **STOCK** | Articles, Catégories, Entrepôts, Emplacements, Réceptions, Livraisons, Transferts, Ajustements, Analyse |
| **COMPTABILITE** | Plan comptable, Journaux, Écritures, Grand Livre, Rapports, Analytique |
| **CONFIG** | Utilisateurs, Rôles |

**Raccourcis :**
- Cochez la case en tête de ligne d'un sous-module pour activer **toutes les actions** d'un coup.
- Cochez la case en tête de colonne pour activer une action sur **tous les sous-modules** d'un module.

4. Cliquez sur **Enregistrer**. Le rôle est maintenant disponible lors de la création d'utilisateurs.

---

## 7. Annexe — Modèles Excel d'import

### Articles

| Colonne | Obligatoire | Exemple |
|---------|:-----------:|---------|
| Nom | ✓ | Bière Castel 65cl |
| Référence interne | | CAS65 |
| Prix de vente | | 700 |
| Coût | | 500 |
| Catégorie d'article | | Bières |
| Quantité en stock | | 1000 |
| Unité de mesure | | Caisse |

> Si "Quantité en stock" > 0, le stock initial est automatiquement créé dans le Magasin Principal.

### Clients

| Colonne | Obligatoire | Exemple |
|---------|:-----------:|---------|
| Nom | ✓ | Bar Central |
| Référence | | CLI-001 |
| Téléphone | | +225 07 00 00 00 |
| Email | | bar@central.com |
| Adresse | | Abidjan, Cocody |
| Taux Précompte (%) | | 5.5 |
| Limite Crédit (FCFA) | | 500000 |
| Code Compte Client | | 411100 |

### Fournisseurs

| Colonne | Obligatoire | Exemple |
|---------|:-----------:|---------|
| Nom | ✓ | BRASSIVOIRE |
| Référence | | FOU-001 |
| Téléphone | | +225 21 00 00 00 |
| Email | | contact@brassivoire.ci |
| Adresse | | Zone industrielle, Abidjan |

### Ristournes

| Colonne | Obligatoire | Exemple |
|---------|:-----------:|---------|
| Client | ✓ | Bar Central |
| Catégorie d'article | ✓ | Bières |
| Type de ristourne | ✓ | brasserie |
| Montant de la ristourne | ✓ | 15000 |
| Ristourne TTC | | 16500 |
| Actif | | true |

### Remises fournisseurs

| Colonne | Obligatoire | Exemple |
|---------|:-----------:|---------|
| Fournisseur | ✓ | BRASSIVOIRE |
| Catégorie d'article | ✓ | Bières |
| Type | ✓ | brasserie |
| Montant de la remise | ✓ | 20000 |
| Actif | | true |

### Précomptes

| Colonne | Obligatoire | Exemple |
|---------|:-----------:|---------|
| Nom du partenaire | ✓ | Bar Central |
| Type de précompte | ✓ | sale |
| Taux (%) | ✓ | 5.5 |

---

## Règles métier importantes à connaître

| Règle | Description |
|-------|-------------|
| **TVA par défaut** | 19,25% sur toutes les lignes de commande et facture |
| **Équilibre comptable** | Toute écriture manuelle doit avoir Débit = Crédit sinon elle ne peut pas être validée |
| **Irréversibilité des validations** | Une facture ou écriture validée ne peut être annulée que par contrepassation — jamais supprimée |
| **Magasin Principal = défaut** | Tout stock initial (import), toute réception validée et tout ajustement atterrit dans le Magasin Principal |
| **Autocomplète articles** | La recherche d'articles dans les commandes suit cet ordre : code exact > code commence par > nom commence par > autres correspondances |
| **Limite de crédit** | Si un client a une limite de crédit définie, un avertissement s'affiche lors de la saisie d'une commande dépassant cette limite |
| **Consignes / Dépôts** | Certains articles (casiers, palettes...) sont traités comme des consignes avec une comptabilité séparée |
| **Ristournes Brasserie vs Guinness** | Brasserie : TTC = HT + précompte. Guinness : TTC = HT (pas de précompte) |

---

*Guide d'utilisation ERP Kaiross — Version 2026 — Confidentiel*
