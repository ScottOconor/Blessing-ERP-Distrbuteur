# Confirmation par le Hub du traitement des événements — contrat proposé

Statut : **proposé, en attente d'accord de l'équipe du Hub.** Le spoke (KIRA Commercial) l'implémente
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
     "rejected":  [{"outboxId": 124, "reason": "texte lisible"}],
     "unknown":   [125]}
401  clé ou installation non reconnue (idéalement : seulement si l'identité REGISTER est vérifiée)
404  contrat non pris en charge par ce Hub
```

- `processed` : événement durablement enregistré (HubEvent existant pour (spokeId, outboxId)).
- `rejected` : refusé définitivement (file d'erreurs, contrat invalide...), avec le motif.
- `unknown` : jamais reçu.

## Comportement du spoke

| Réponse | Effet |
|---|---|
| traité | `CONFIRMED` (seuls les CONFIRMED sont purgés quand le mode est actif) |
| refusé | `FAILED` avec le motif, sans reprise automatique |
| inconnu depuis plus de `resend-after-minutes` (15) | `PENDING` : renvoyé ; le Hub ignore les doublons (index unique (spokeId, outboxId)) |
| absent de la réponse | aucun changement |
| 404 | service en veille jusqu'au redémarrage, fonctionnement d'avant |
| 401, 5xx, délai dépassé, Hub injoignable | aucun changement, nouvel essai au cycle suivant |

Interrogation toutes les 2 min des événements `SENT` depuis plus d'1 min.

## Configuration du spoke

```properties
sync.confirmation.url=https://<hub>/api/hub/sync/confirmations   # vide = désactivé (défaut)
#sync.confirmation.interval-ms=120000
#sync.confirmation.resend-after-minutes=15
#sync.confirmation.batch-size=500
```

## Vérifié côté spoke (faux Hub de test implémentant ce contrat, broker de test)

Traitement normal, réponse du Hub perdue (500), refus, message perdu puis renvoyé (deux exemplaires
dans la file, à dédupliquer par le Hub), arrêt brutal entre l'envoi et la confirmation, Hub sans le
contrat (404). Tests unitaires : `HubConfirmationServiceTest`.

## Reste à faire côté Hub (non réalisé, décision de l'utilisateur)

Implémenter l'endpoint ; authentifier par (X-Spoke-Id, X-Api-Key) contre la `spokeApiKey`
enregistrée ; renvoyer `rejected` pour les messages en file d'erreurs ; limiter à 500 identifiants.
