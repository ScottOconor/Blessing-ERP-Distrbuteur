# TODO - Intégration Import Excel & Modèle pour Précomptes

- [ ] Backend: étendre `PrecompteController` avec `GET /api/precomptes/template` (download xlsx) et `POST /api/precomptes/import` (upload xlsx)
- [ ] Backend: ajouter la logique d’upload/import dans `PrecompteService` (lecture Excel, mapping colonnes, upsert partenaire+type, gestion companyId)
- [ ] Backend: éventuellement ajouter DTO / classes d’aide si nécessaire
- [ ] Frontend: étendre `precompte-config.component.ts` avec l’UI d’upload Excel pour l’onglet “Précomptes” (boutons modèle + importer, parsing, preview modal, confirmation)
- [ ] Frontend: mettre à jour `precompte-config.component.html` pour afficher la modal preview et le input file caché
- [ ] Frontend: étendre `PrecompteService` (Angular) pour appeler les nouveaux endpoints backend (download template + upload/import)
- [ ] Test local : télécharger le modèle, uploader un fichier, vérifier la liste + comportement en cas de doublon

