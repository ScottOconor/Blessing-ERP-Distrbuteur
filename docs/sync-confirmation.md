# Confirmation par le Hub du traitement des événements — contrat proposé

Statut : **proposé, en attente d'accord de l'équipe du Hub.** Le spoke (Blessing ERP Distributeurs, comme KIRA Commercial) l'implémente
de façon facultative : tant que `sync.confirmation.url` est vide, ou si le Hub répond 404, rien ne
change pour les installations existantes.

## Problème

`SENT` signifie « accepté et routé par le broker » (confirmation RabbitMQ). Un message perdu ou
refusé ensuite côté Hub (file d'erreurs, incident du broker) restait `SENT`, puis était purgé après
la durée de rétention : aucune trace, aucun renvoi. Seul l'instantané horaire rattrapait une partie
des données.

## Pourquoi un contrat HTTPS « pull » plutôt qu'un accusé RabbitMQ

Les comptes RabbitMQ d'installation n'ont ni `read` ni `configure` (voir `deploy/rabbitmq/README.md`
du Hub) : renvoyer un accusé par une file imposerait de changer ce modèle de droits. Ici, le spoke
interroge le Hub, qui sait déjà vérifier un événement (`existsBySpokeIdAndOutboxId`). Pas de
changement du broker, compatible avec les NAT des installations.

## Requête (spoke -> Hub)

```
POST {sync.confirmation.url}            ex. https://hub.example/api/hub/sync/confirmations
X-Spoke-Id: <sync.spoke.id>
X-Api-Key:  <clé de l'installation, déjà transmise au Hub dans le message REGISTER (spokeApiKey)>
Content-Type: application/json

{"outboxIds": [123, 124, 125]}           500 au plus
```

## Réponse (Hub)

```
200 {"processed": [123],
     "rejected":  [{"outboxId": 124, "code": "INVALID_PAYLOAD", "reason": "texte lisible"}],
     "ignored":   [126],
     "unknown":   [125]}
401  clé ou installation non reconnue (idéalement : seulement si l'identité REGISTER est vérifiée)
404  contrat non pris en charge par ce Hub
```

- `processed` : événement durablement enregistré (HubEvent existant pour (spokeId, outboxId)).
- `rejected` : refusé définitivement, avec un code normalisé (`IDENTITY`, `INVALID_PAYLOAD`, `VERSION`,
  `UNKNOWN_SPOKE`, mêmes motifs que SyncMetrics) et un texte lisible.
- `ignored` : reçu mais ignoré (installation révoquée).
- `unknown` : aucune trace pour (spokeId, outboxId). Ce n'est pas forcément « jamais reçu » : pendant
  une indisponibilité de PostgreSQL côté Hub, la consommation est en pause et le message attend dans
  la file. D'où un délai de renvoi large (30 min) ; un renvoi reste sans danger (déduplication).

Seuls les événements métier sont interrogés. Les snapshots (`FULL_SNAPSHOT`) ne créent pas de
HubEvent : le spoke ne les interroge jamais et les purge comme avant. REGISTER et HEARTBEAT ne
passent pas par l'outbox.

## Comportement du spoke

| Réponse | Effet |
|---|---|
| traité | `CONFIRMED` (seuls les CONFIRMED sont purgés quand le mode est actif) |
| refusé ou ignoré | `FAILED` avec le code et le motif, sans reprise automatique |
| inconnu depuis plus de `resend-after-minutes` (30) | `PENDING` : renvoyé ; le Hub ignore les doublons (index unique (spokeId, outboxId)) |
| absent de la réponse | aucun changement |
| 404 | service en veille jusqu'au redémarrage, fonctionnement d'avant |
| 401, 5xx, délai dépassé, Hub injoignable | aucun changement, nouvel essai au cycle suivant |

Interrogation toutes les 2 min des événements `SENT` depuis plus d'1 min.

## Configuration du spoke

```properties
sync.confirmation.url=https://<hub>/api/hub/sync/confirmations   # vide = désactivé (défaut)
#sync.confirmation.interval-ms=120000
#sync.confirmation.resend-after-minutes=30
#sync.confirmation.batch-size=500
```

## Vérifié côté spoke (faux Hub de test implémentant ce contrat, broker de test)

Traitement normal, réponse du Hub perdue (500), refus, message perdu puis renvoyé (deux exemplaires
dans la file, à dédupliquer par le Hub), arrêt brutal entre l'envoi et la confirmation, Hub sans le
contrat (404). Tests unitaires : `HubConfirmationServiceTest`.

## Reste à faire côté Hub (non réalisé, décision de l'utilisateur)

Points relevés par la revue côté Hub (session du 27/10/2026), à intégrer dans l'implémentation :

1. **Suivi par (spokeId, outboxId)** avec statut et motif, y compris pour les messages rejetés (file
   d'erreurs) et ignorés (installation révoquée) : aujourd'hui seuls des compteurs par motif existent,
   ces messages resteraient `unknown` et seraient renvoyés en boucle.
2. **Authentification** : X-Api-Key comparée à la `spokeApiKey` de REGISTER, fiable seulement en
   `identity-mode=strict` (en transitional, le premier REGISTER non vérifié fixe la clé). Exiger une
   installation connue, `enrollmentStatus != REVOKED`, de préférence `lastVerifiedMessageAt` non nul ;
   limite de débit.
3. **Schéma** : `hub_events` est dans le schéma de l'entreprise (`company_N` ou `hub_unassigned`) ;
   le résoudre par `HubSpoke.companyId`, jamais par une valeur fournie par le client.
4. Limiter à 500 identifiants par appel.
