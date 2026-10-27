# Tests de validation reproductibles — KIRA Commercial

Scripts utilisés pour vérifier les corrections de l'audit d'octobre 2026. Ils complètent les tests
unitaires (`erp-backend/src/test`, lancés par `mvn test`).

## Règles de sécurité (à respecter impérativement)

- **Jamais sur une installation de production.** Cible : une instance lancée exprès, sur une base
  de test (base neuve ou copie), avec un broker RabbitMQ de test.
- Plusieurs scripts **modifient la base** (création de clients, factures, paiements, clôture
  d'exercice) ; `restore_real_check.py` **restaure** une sauvegarde sur la base ciblée.
- Aucun script n'envoie de requêtes simultanées : ce sont des vérifications fonctionnelles une
  requête à la fois, pas des tests de charge.
- Aucun mot de passe dans les fichiers : `KIRA_TEST_PASSWORD` (superadmin de la base de test) et
  `PGPASSWORD` (accès psql à la base de test) sont lus dans l'environnement.

## Mise en place

```bash
createdb kira_test                                   # base de test vierge
java -jar KIRA.jar --server.port=18087 \
     --spring.datasource.url=jdbc:postgresql://localhost:5432/kira_test \
     --spring.rabbitmq.port=35672 --sync.spoke.id=TEST-1   # broker de test, jamais celui du Hub
export ERP_BASE=http://127.0.0.1:18087 KIRA_TEST_PASSWORD='…' PGPASSWORD='…'
```

Importer ensuite le plan comptable (Comptabilité → Plan comptable → Import), comme lors d'une
installation réelle. Les scripts `api/` n'utilisent que Python 3 (bibliothèque standard) ; les
scripts `ui/` utilisent Playwright (`video/node_modules`, ou `PLAYWRIGHT_CORE` = chemin du paquet
`playwright-core`).

## Scripts

| Script | Vérifie | Prérequis | Durée | Résultat attendu |
|---|---|---|---|---|
| `api/accounting_reference.py <mdp>` | Facture 2 × 1 000 HT TVA 19,25 % → HT 2 000, TVA 385, TTC 2 385 ; paiement 1 000 puis extourne ; balance générale | Plan comptable SYSCOHADA importé (411100, 571100, 706100, 443150) ; journaux VNT/CAI | ~5 s | `RÉSULTAT API : CONFORME` ; contrôler ensuite en SQL que chaque pièce est équilibrée |
| `api/fiscal_lock_check.py <mdp>` | Clôture 2025 puis refus (400) de facture, paiement, écriture, ajustement de stock et opération de caisse datés 2025 ; témoins du jour acceptés | `acc_ref_out.json` produit par le script précédent ; comptes 131000/130900 | ~10 s | `toutes les opérations en période clôturée sont refusées` |
| `api/double_submit_check.py <mdp> [clé]` | Renvoi d'un même paiement : sans clé → 2 paiements (comportement historique) ; avec `Idempotency-Key` → 1 seul | Une facture validée avec reste dû > 100 | ~2 s | Avec clé : `paiements créés par les deux envois : 1` |
| `api/numbering_check.py` | Factures, paiements, bons de livraison et ajustements numérotés à la suite, sans doublon | Client, article en stock, journaux | ~5 s | Numéros consécutifs |
| `api/session_check.py` | Politique de mot de passe (8 car., lettre + chiffre) ; ancien jeton refusé (401) après changement de mot de passe ; compte désactivé refusé | — (crée le rôle « Vendeur » s'il manque) | ~5 s | `abc` et `abcdef` refusés (400), ancien jeton 401 |
| `api/error_responses_check.py <mdp>` | Requêtes invalides → 400/404/405 avec message clair, sans détail technique | — | ~2 s | `BILAN : conforme` |
| `api/restore_real_check.py <mdp> <base> <pid>` | Sauvegarde puis restauration ; nombres de lignes de toutes les tables, débit/crédit et stock identiques | **Base de test jetable** (elle est restaurée) ; `jcmd` | 5–30 s | `écarts : aucun` |
| `api/volume_perf.py <mdp> <pid>` | Temps de réponse (médiane de 3, après chauffe) et mémoire des listes et rapports | Copie de base volumineuse | 1–3 min | Comparer aux mesures du rapport d'audit |
| `api/snapshot_lines.py <mdp> <pid> <sortie>` | Snapshot horaire forcé : durée, pic mémoire, lignes comptables envoyées | Broker de test ; `ERP_TIMEOUT=900` pour les grosses bases | secondes | Aucune `OutOfMemoryError` ; lignes = requête SQL de référence |
| `api/pg_outage_check.py <mdp> <conteneur>` | Coupure puis relance d'un PostgreSQL de TEST en conteneur : réponses pendant la panne (503 explicite, pas de déconnexion), état de santé « down », reprise sans redémarrer l'application | Instance branchée sur un PostgreSQL **en conteneur dédié** ; `ERP_TIMEOUT=120` | ~1 min | 503 en ~10 s pendant la panne ; reprise en quelques secondes |
| `ui/smoke.js <url> <user> <mdp>` | Connexion puis ouverture des modules dans un navigateur ; erreurs JavaScript et réponses 5xx | Playwright + Chromium | ~30 s | `erreurs JS : 0`, `réponses API 5xx : 0` (un 404 du logo est normal sans logo) |
| `ui/payment_ui.js <url> <user> <mdp> <id_facture>` | Fenêtre « Enregistrer un paiement » (ouverture/fermeture), paiement saisi avec `Idempotency-Key`, aperçu d'impression | Facture validée avec reste dû | ~20 s | Les 4 étapes à `true`/`oui`, aucune erreur JS |

## Interprétation

Un script qui affiche un écart ne signifie pas forcément une régression : vérifier d'abord les
prérequis (plan comptable importé, journaux configurés, données attendues). Les résultats de
référence et leur contexte figurent dans le rapport d'audit.
