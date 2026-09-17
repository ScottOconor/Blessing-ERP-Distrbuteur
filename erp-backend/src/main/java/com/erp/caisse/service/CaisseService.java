package com.erp.caisse.service;

import com.erp.accounting.dto.JournalEntryRequest;
import com.erp.accounting.entity.AccountAccount;
import com.erp.accounting.entity.AccountJournal;
import com.erp.accounting.entity.AccountMoveLine;
import com.erp.accounting.repository.AccountAccountRepository;
import com.erp.accounting.repository.AccountJournalRepository;
import com.erp.accounting.repository.AccountMoveLineRepository;
import com.erp.accounting.service.AccountingService;
import com.erp.auth.repository.UserRepository;
import com.erp.caisse.dto.*;
import com.erp.caisse.entity.*;
import com.erp.caisse.repository.*;
import com.erp.audit.service.AuditService;
import com.erp.common.entity.Company;
import com.erp.common.service.TenantGuard;
import com.erp.sales.repository.SellerRepository;
import com.erp.sync.entity.SyncEventType;
import com.erp.sync.service.SyncEventPublisher;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class CaisseService {

    private final CaisseRepository caisseRepo;
    private final CaisseOperationRepository operationRepo;
    private final CaisseSessionRepository sessionRepo;
    private final CaisseSessionCountRepository sessionCountRepo;
    private final CashDenominationRepository denominationRepo;
    private final AccountJournalRepository journalRepo;
    private final AccountMoveLineRepository moveLineRepo;
    private final AccountAccountRepository accountRepo;
    private final AccountingService accountingService;
    private final SyncEventPublisher syncEventPublisher;
    private final AuditService auditService;
    private final TenantGuard tenantGuard;
    private final UserRepository userRepository;
    private final SellerRepository sellerRepo;

    /** Comptes OHADA pour l'écriture d'écart de caisse : manque = charge, excédent = produit. */
    private static final String ECART_MANQUE_ACCOUNT   = "658800";
    private static final String ECART_EXCEDENT_ACCOUNT = "758800";
    /** Compte de virement de fonds OHADA — reçoit le solde vidé de la caisse à chaque clôture. */
    private static final String VIREMENT_FONDS_ACCOUNT = "585000";

    // ── Caisses CRUD ──

    @Transactional(readOnly = true)
    public List<CaisseDTO> getCaisses(Long companyId) {
        return caisseRepo.findByCompanyIdAndActiveTrue(companyId)
                .stream()
                .map(c -> enrichCaisseDTO(toDTO(c)))
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public CaisseDTO getCaisse(Long id) {
        Caisse c = caisseRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Caisse non trouvée: " + id));
        tenantGuard.check(c.getCompanyId());
        return enrichCaisseDTO(toDTO(c));
    }

    public CaisseDTO createCaisse(CaisseDTO dto) {
        if (!journalRepo.existsById(dto.getJournalId())) {
            throw new EntityNotFoundException("Journal non trouvé: " + dto.getJournalId());
        }
        if (dto.getSellerId() != null) requireSeller(dto.getSellerId());

        // companyId vient du corps de la requête (client) — ne jamais lui faire confiance pour
        // choisir SOUS QUELLE société la caisse est créée.
        Long companyId = com.erp.auth.SecurityUtils.currentCompanyId();

        Caisse caisse = Caisse.builder()
                .name(dto.getName())
                .code(dto.getCode())
                .journalId(dto.getJournalId())
                .companyId(companyId)
                .responsableName(dto.getResponsableName())
                .sellerId(dto.getSellerId())
                .seuilEcart(dto.getSeuilEcart())
                .status(CaisseStatus.OUVERTE)
                .active(true)
                .build();

        return enrichCaisseDTO(toDTO(caisseRepo.save(caisse)));
    }

    public CaisseDTO updateCaisse(Long id, CaisseDTO dto) {
        Caisse caisse = caisseRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Caisse non trouvée: " + id));
        tenantGuard.check(caisse.getCompanyId());

        caisse.setName(dto.getName());
        caisse.setCode(dto.getCode());
        caisse.setResponsableName(dto.getResponsableName());
        caisse.setSeuilEcart(dto.getSeuilEcart());
        if (dto.getSellerId() != null) requireSeller(dto.getSellerId());
        caisse.setSellerId(dto.getSellerId());
        if (dto.getJournalId() != null) {
            journalRepo.findById(dto.getJournalId())
                    .orElseThrow(() -> new EntityNotFoundException("Journal non trouvé: " + dto.getJournalId()));
            caisse.setJournalId(dto.getJournalId());
        }

        return enrichCaisseDTO(toDTO(caisseRepo.save(caisse)));
    }

    private void requireSeller(Long sellerId) {
        if (!sellerRepo.existsById(sellerId)) {
            throw new EntityNotFoundException("Vendeur non trouvé: " + sellerId);
        }
    }

    public void deleteCaisse(Long id) {
        Caisse caisse = caisseRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Caisse non trouvée: " + id));
        tenantGuard.check(caisse.getCompanyId());
        caisse.setActive(false);
        caisseRepo.save(caisse);
    }

    // ── Coupures (comptage physique) ──

    @Transactional(readOnly = true)
    public List<CashDenominationDTO> getDenominations(Long companyId) {
        return denominationRepo.findByCompanyIdOrderByValeurDesc(companyId)
                .stream().map(this::toDenominationDTO).collect(Collectors.toList());
    }

    public CashDenominationDTO createDenomination(CashDenominationDTO dto) {
        CashDenomination d = CashDenomination.builder()
                .companyId(dto.getCompanyId())
                .label(dto.getLabel())
                .valeur(dto.getValeur())
                .active(true)
                .build();
        return toDenominationDTO(denominationRepo.save(d));
    }

    public CashDenominationDTO updateDenomination(Long id, CashDenominationDTO dto) {
        CashDenomination d = denominationRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Coupure non trouvée: " + id));
        d.setLabel(dto.getLabel());
        d.setValeur(dto.getValeur());
        if (dto.isActive() != d.isActive()) d.setActive(dto.isActive());
        return toDenominationDTO(denominationRepo.save(d));
    }

    public void deleteDenomination(Long id) {
        CashDenomination d = denominationRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Coupure non trouvée: " + id));
        d.setActive(false);
        denominationRepo.save(d);
    }

    /** Seed les coupures FCFA standard pour une société qui n'en a encore aucune. */
    public void seedDefaultDenominations(Long companyId) {
        if (!denominationRepo.findByCompanyIdOrderByValeurDesc(companyId).isEmpty()) return;
        Object[][] defaults = {
            {"Billet 10 000", "10000"}, {"Billet 5 000", "5000"}, {"Billet 2 000", "2000"},
            {"Billet 1 000", "1000"}, {"Billet 500", "500"},
            {"Pièce 500", "500"}, {"Pièce 200", "200"}, {"Pièce 100", "100"},
            {"Pièce 50", "50"}, {"Pièce 25", "25"}, {"Pièce 10", "10"}, {"Pièce 5", "5"}
        };
        for (Object[] d : defaults) {
            denominationRepo.save(CashDenomination.builder()
                    .companyId(companyId).label((String) d[0])
                    .valeur(new BigDecimal((String) d[1])).active(true).build());
        }
    }

    // ── Opérations ──

    @Transactional(readOnly = true)
    public List<CaisseOperationDTO> getOperations(Long caisseId, Long companyId, OperationType type) {
        List<CaisseOperation> ops;
        if (type != null) {
            ops = operationRepo.findByCaisseIdAndTypeAndCompanyIdOrderByDateDesc(caisseId, type, companyId);
        } else {
            ops = operationRepo.findByCaisseIdAndCompanyIdOrderByDateDescCreatedAtDesc(caisseId, companyId);
        }
        return mapOperationsBatched(ops);
    }

    @Transactional(readOnly = true)
    public List<CaisseOperationDTO> getAllOperations(Long companyId, OperationType type) {
        List<CaisseOperation> ops;
        if (type != null) {
            ops = operationRepo.findByCompanyIdAndTypeOrderByDateDesc(companyId, type);
        } else {
            ops = operationRepo.findByCompanyIdOrderByDateDescCreatedAtDesc(companyId);
        }
        return mapOperationsBatched(ops);
    }

    /** Précharge caisses/comptes par lot (findAllById) au lieu des 2 requêtes PAR OPÉRATION que
     *  ferait un mapping naïf — sur l'historique complet d'une agence active, ça ramènerait des
     *  centaines de requêtes pour un simple chargement de liste. */
    private List<CaisseOperationDTO> mapOperationsBatched(List<CaisseOperation> ops) {
        Map<Long, Caisse> caisseById = caisseRepo.findAllById(
                        ops.stream().map(CaisseOperation::getCaisseId).filter(java.util.Objects::nonNull).collect(Collectors.toSet()))
                .stream().collect(Collectors.toMap(Caisse::getId, c -> c));
        Map<Long, AccountAccount> accountById = accountRepo.findAllById(
                        ops.stream().map(CaisseOperation::getCompteContrepartieId).filter(java.util.Objects::nonNull).collect(Collectors.toSet()))
                .stream().collect(Collectors.toMap(AccountAccount::getId, a -> a));
        return ops.stream().map(op -> toOperationDTO(op, caisseById, accountById)).collect(Collectors.toList());
    }

    public CaisseOperationDTO addOperation(AddOperationRequest req, String userName) {
        Caisse caisse = caisseRepo.findById(req.getCaisseId())
                .orElseThrow(() -> new EntityNotFoundException("Caisse non trouvée: " + req.getCaisseId()));
        tenantGuard.check(caisse.getCompanyId());

        // La société de l'opération/écriture est dérivée de la caisse réellement chargée (et non
        // du champ companyId fourni par le client) pour empêcher qu'une caisse de la société A soit
        // combinée avec un companyId de la société B afin de faire poster l'opération sous la mauvaise société.
        Long companyId = caisse.getCompanyId();
        if (req.getCompanyId() != null && !req.getCompanyId().equals(companyId)) {
            throw new IllegalArgumentException("La société indiquée ne correspond pas à la caisse sélectionnée.");
        }

        // Contrôle d'ouverture recommandé mais non bloquant : si aucune session n'est en cours
        // aujourd'hui, on en ouvre une silencieusement (sans comptage) plutôt que de bloquer la
        // saisie — la session est simplement marquée ouvertureControlee=false pour le rapport.
        ensureSessionOuverte(caisse, userName);
        caisse = caisseRepo.findById(caisse.getId()).orElseThrow();

        Long journalId = caisse.getJournalId();
        AccountJournal journal = journalRepo.findById(journalId)
                .orElseThrow(() -> new EntityNotFoundException("Journal non trouvé: " + journalId));

        AccountAccount compteContrepartie = accountRepo.findById(req.getCompteContrepartieId())
                .orElseThrow(() -> new EntityNotFoundException("Compte non trouvé: " + req.getCompteContrepartieId()));

        // Compte de liquidité de la caisse : TOUJOURS le même compte "primaire" du journal
        // (defaultDebitAccount en priorité, sinon defaultCreditAccount), quel que soit le sens de
        // l'opération — exactement la même résolution que computeSolde/getBrouillard/cloturerCaisse.
        AccountAccount comptesCaisse = journal.getDefaultDebitAccount() != null
                ? journal.getDefaultDebitAccount()
                : journal.getDefaultCreditAccount();
        if (comptesCaisse == null) {
            throw new IllegalStateException("Le journal '" + journal.getName() + "' n'a pas de compte de liquidité configuré.");
        }

        String libelle = req.getLibelle() != null ? req.getLibelle()
                : (req.getType() == OperationType.ENTREE ? "Entrée caisse" : "Sortie caisse");

        // Build journal entry lines
        // La ligne contrepartie (compte du tiers) porte le partnerId pour le grand livre des tiers
        List<JournalEntryRequest.LineRequest> lines = new ArrayList<>();
        if (req.getType() == OperationType.ENTREE) {
            // Entrée : débit compte caisse (liquidité), crédit contrepartie (tiers)
            lines.add(JournalEntryRequest.LineRequest.builder()
                    .accountId(comptesCaisse.getId())
                    .name(libelle)
                    .debit(req.getMontant())
                    .credit(BigDecimal.ZERO)
                    .build());
            lines.add(JournalEntryRequest.LineRequest.builder()
                    .accountId(compteContrepartie.getId())
                    .partnerId(req.getTiersId())
                    .name(libelle)
                    .debit(BigDecimal.ZERO)
                    .credit(req.getMontant())
                    .build());
        } else {
            // Sortie : débit contrepartie (tiers), crédit compte caisse (liquidité)
            lines.add(JournalEntryRequest.LineRequest.builder()
                    .accountId(compteContrepartie.getId())
                    .partnerId(req.getTiersId())
                    .name(libelle)
                    .debit(req.getMontant())
                    .credit(BigDecimal.ZERO)
                    .build());
            lines.add(JournalEntryRequest.LineRequest.builder()
                    .accountId(comptesCaisse.getId())
                    .name(libelle)
                    .debit(BigDecimal.ZERO)
                    .credit(req.getMontant())
                    .build());
        }

        // companyId de la caisse déjà vérifiée (tenantGuard.check ci-dessus) — jamais
        // req.getCompanyId() (client), qui aurait permis de poster l'écriture et l'opération
        // sous une société arbitraire même avec un caisseId légitime.
        JournalEntryRequest entryReq = JournalEntryRequest.builder()
                .journalId(caisse.getJournalId())
                .date(req.getDate())
                .ref(req.getReference() != null ? req.getReference() : libelle)
                .partnerId(req.getTiersId())
                .companyId(companyId)
                .lines(lines)
                .build();

        var move = accountingService.createJournalEntry(entryReq);
        accountingService.postEntry(move.getId());

        CaisseOperation op = CaisseOperation.builder()
                .caisseId(req.getCaisseId())
                .companyId(companyId)
                .date(req.getDate())
                .type(req.getType())
                .montant(req.getMontant())
                .libelle(req.getLibelle())
                .reference(req.getReference())
                .tiersName(req.getTiersName())
                .compteContrepartieId(req.getCompteContrepartieId())
                .journalMoveId(move.getId())
                .createdBy(userName)
                .build();

        CaisseOperation saved = operationRepo.save(op);

        String actionLabel = req.getType() == OperationType.ENTREE ? "Entrée de caisse" : "Sortie de caisse";
        auditService.log("CAISSE_OPERATION", saved.getId(),
                caisse.getName() + " — " + req.getMontant(),
                req.getType().name(), actionLabel,
                AuditService.details(java.util.Map.of(
                    "caisse", caisse.getName(),
                    "montant", req.getMontant(),
                    "libelle", req.getLibelle() != null ? req.getLibelle() : "",
                    "reference", req.getReference() != null ? req.getReference() : ""
                )),
                companyId);

        SyncEventType evtType = req.getType() == OperationType.ENTREE
                ? SyncEventType.CAISSE_OPERATION_ENTREE
                : SyncEventType.CAISSE_OPERATION_SORTIE;

        syncEventPublisher.publish(evtType, "CAISSE_OP_" + saved.getId(),
                java.util.Map.of(
                    "operationId",  saved.getId(),
                    "caisseId",     caisse.getId(),
                    "caisseName",   caisse.getName(),
                    "type",         req.getType().name(),
                    "montant",      req.getMontant(),
                    "date",         req.getDate().toString(),
                    "libelle",      req.getLibelle() != null ? req.getLibelle() : "",
                    "reference",    req.getReference() != null ? req.getReference() : "",
                    "tiersName",    req.getTiersName() != null ? req.getTiersName() : "",
                    "journalMoveId", move.getId()
                ));

        return toOperationDTO(saved);
    }

    // ── Ouverture ──

    /**
     * Ouverture explicite d'une session du jour, avec comptage par coupures optionnel (recommandé
     * mais non bloquant). Distincte de {@link #ensureSessionOuverte} qui ouvre silencieusement sans
     * jamais lever d'erreur "déjà ouverte".
     */
    public CaisseSessionDTO ouvrirSession(Long caisseId, OuvertureCaisseRequest req, String userName) {
        Caisse caisse = caisseRepo.findByIdForUpdate(caisseId)
                .orElseThrow(() -> new EntityNotFoundException("Caisse non trouvée: " + caisseId));
        tenantGuard.check(caisse.getCompanyId());
        if (req.getCompanyId() != null && !req.getCompanyId().equals(caisse.getCompanyId())) {
            throw new IllegalArgumentException("La société indiquée ne correspond pas à la caisse sélectionnée.");
        }

        LocalDate today = LocalDate.now();
        var existing = sessionRepo.findByCaisseIdAndDateSession(caisseId, today);
        CaisseSession session;
        if (existing.isPresent() && "EN_COURS".equals(existing.get().getStatus())) {
            throw new IllegalStateException("Une session est déjà ouverte aujourd'hui pour cette caisse.");
        } else if (existing.isPresent()) {
            session = reactivateSession(caisse, existing.get(), req.getCounts(), userName);
        } else {
            session = createSession(caisse, req.getCounts(), userName);
        }

        auditService.log("CAISSE_OPERATION", caisseId, caisse.getName(),
                "SESSION_OPENED", "Ouverture de caisse",
                AuditService.details(java.util.Map.of(
                    "caisse", caisse.getName(),
                    "montantCompteOuverture", session.getMontantCompteOuverture() != null ? session.getMontantCompteOuverture() : "",
                    "ouvertureControlee", session.isOuvertureControlee()
                )),
                caisse.getCompanyId());

        return toSessionDTO(session, caisseRepo.findById(caisseId).orElse(caisse));
    }

    /** Ouvre silencieusement une session sans comptage si aucune n'est en cours aujourd'hui —
     *  utilisé par addOperation/cloturerCaisse pour rester non bloquant. Ne lève jamais d'erreur
     *  "déjà ouverte" (contrairement à {@link #ouvrirSession}). */
    private void ensureSessionOuverte(Caisse caisse, String userName) {
        LocalDate today = LocalDate.now();
        var existing = sessionRepo.findByCaisseIdAndDateSession(caisse.getId(), today);
        if (existing.isPresent() && "EN_COURS".equals(existing.get().getStatus())) return;
        if (existing.isPresent()) {
            reactivateSession(caisse, existing.get(), List.of(), userName);
        } else {
            createSession(caisse, List.of(), userName);
        }
    }

    private CaisseSession createSession(Caisse caisse, List<DenominationCountRequest> counts, String userName) {
        LocalDate today = LocalDate.now();
        BigDecimal soldeDebut = computeSoldeAvant(caisse, today);
        BigDecimal montantCompte = (counts == null || counts.isEmpty()) ? null : sumCounts(counts);
        BigDecimal ecartOuverture = montantCompte != null ? montantCompte.subtract(soldeDebut) : null;

        CaisseSession session = CaisseSession.builder()
                .caisseId(caisse.getId())
                .journalId(caisse.getJournalId())
                .companyId(caisse.getCompanyId())
                .dateSession(today)
                .status("EN_COURS")
                .soldeDebut(soldeDebut)
                .totalEntrees(BigDecimal.ZERO)
                .totalSorties(BigDecimal.ZERO)
                .soldeFin(BigDecimal.ZERO)
                .userId(resolveUserId(userName))
                .montantCompteOuverture(montantCompte)
                .ecartOuverture(ecartOuverture)
                .ouvertureControlee(montantCompte != null)
                .createdBy(userName)
                .build();

        try {
            session = sessionRepo.save(session);
        } catch (org.springframework.dao.DataIntegrityViolationException e) {
            throw new IllegalStateException("Une session existe déjà pour la caisse à la date d'aujourd'hui.", e);
        }

        saveCounts(session.getId(), counts, CountMoment.OUVERTURE);
        caisse.setStatus(CaisseStatus.OUVERTE);
        caisseRepo.save(caisse);
        return session;
    }

    /** Réactive une session du jour déjà clôturée (réouverture manuelle) — recalcule le solde de
     *  départ, écrase le comptage d'ouverture s'il est refourni, efface les données de clôture. */
    private CaisseSession reactivateSession(Caisse caisse, CaisseSession session,
            List<DenominationCountRequest> counts, String userName) {
        BigDecimal soldeDebut = computeSoldeAvant(caisse, session.getDateSession());
        session.setStatus("EN_COURS");
        session.setSoldeDebut(soldeDebut);
        if (counts != null && !counts.isEmpty()) {
            BigDecimal montantCompte = sumCounts(counts);
            session.setMontantCompteOuverture(montantCompte);
            session.setEcartOuverture(montantCompte.subtract(soldeDebut));
            session.setOuvertureControlee(true);
            sessionCountRepo.deleteByCaisseSessionIdAndMoment(session.getId(), CountMoment.OUVERTURE);
            saveCounts(session.getId(), counts, CountMoment.OUVERTURE);
        }
        session.setMontantCompteCloture(null);
        session.setEcart(null);
        session.setDateCloture(null);
        session = sessionRepo.save(session);

        caisse.setStatus(CaisseStatus.OUVERTE);
        caisseRepo.save(caisse);
        return session;
    }

    // ── Clôture ──

    public CaisseSessionDTO cloturerCaisse(Long caisseId, Long companyId, ClotureCaisseRequest req, String userName) {
        // Verrou pessimiste : empêche deux requêtes de clôture concurrentes sur la même caisse de
        // passer toutes les deux le contrôle "déjà clôturée" avant que l'une des deux ait committé.
        Caisse caisse = caisseRepo.findByIdForUpdate(caisseId)
                .orElseThrow(() -> new EntityNotFoundException("Caisse non trouvée: " + caisseId));
        tenantGuard.check(caisse.getCompanyId());

        LocalDate today = LocalDate.now();

        var existing = sessionRepo.findByCaisseIdAndDateSession(caisseId, today);
        if (existing.isPresent() && "CLOTUREE".equals(existing.get().getStatus())) {
            throw new IllegalStateException("La caisse est déjà clôturée pour la journée.");
        }
        // Reste non bloquant même si personne n'a explicitement ouvert la caisse aujourd'hui.
        CaisseSession session = existing.orElseGet(() -> createSession(caisse, List.of(), userName));

        // Solde/lignes sur le compte réellement lié au journal de la caisse (cf. getBrouillard)
        Long primaryAccountId = resolvePrimaryAccountId(journalRepo.findById(caisse.getJournalId()).orElse(null));

        // Lignes cashbook du jour
        List<AccountMoveLine> lines = primaryAccountId != null
                ? moveLineRepo.findLinesByAccountAndDateBetween(primaryAccountId, caisse.getCompanyId(), today, today)
                : moveLineRepo.findCashbookLines(caisse.getJournalId(), today, today);

        BigDecimal totalEntrees = lines.stream()
                .map(AccountMoveLine::getDebit)
                .filter(d -> d != null)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal totalSorties = lines.stream()
                .map(AccountMoveLine::getCredit)
                .filter(c -> c != null)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal soldeDebut = session.getSoldeDebut() != null ? session.getSoldeDebut() : BigDecimal.ZERO;
        BigDecimal soldeFin = soldeDebut.add(totalEntrees).subtract(totalSorties);

        List<DenominationCountRequest> counts = req != null ? req.getCounts() : null;
        BigDecimal montantCompte = (counts == null || counts.isEmpty()) ? null : sumCounts(counts);
        BigDecimal ecart = montantCompte != null ? montantCompte.subtract(soldeFin) : null;

        session.setStatus("CLOTUREE");
        session.setTotalEntrees(totalEntrees);
        session.setTotalSorties(totalSorties);
        session.setSoldeFin(soldeFin);
        session.setMontantCompteCloture(montantCompte);
        session.setEcart(ecart);
        session.setDateCloture(LocalDateTime.now());
        if (session.getUserId() == null) session.setUserId(resolveUserId(userName));

        sessionRepo.save(session);
        if (counts != null && !counts.isEmpty()) {
            sessionCountRepo.deleteByCaisseSessionIdAndMoment(session.getId(), CountMoment.CLOTURE);
            saveCounts(session.getId(), counts, CountMoment.CLOTURE);
        }

        // Comptabiliser l'écart s'il y en a un et qu'un comptage a effectivement été fourni.
        if (ecart != null && ecart.compareTo(BigDecimal.ZERO) != 0) {
            postEcartEntry(caisse, ecart, today);
        }

        // Vidage de caisse : après ajustement de l'écart, le solde réellement en caisse (compté,
        // ou théorique si aucun comptage n'a été fait) est transféré vers le compte de virement de
        // fonds (585000) — la caisse comptable repart donc à zéro, et la prochaine ouverture (le
        // lendemain) recalculera un solde de départ à zéro plutôt que de reporter ce solde.
        BigDecimal montantAVider = montantCompte != null ? montantCompte : soldeFin;
        postVidageEntry(caisse, montantAVider, today);

        // Mettre la caisse en CLOTUREE
        caisse.setStatus(CaisseStatus.CLOTUREE);
        caisse.setLastSessionDate(today);
        caisseRepo.save(caisse);

        boolean depasseSeuil = caisse.getSeuilEcart() != null && ecart != null
                && ecart.abs().compareTo(caisse.getSeuilEcart()) > 0;

        auditService.log("CAISSE_OPERATION", caisseId, caisse.getName(),
                "CLOTURE", "Clôture journalière de caisse",
                AuditService.details(java.util.Map.of(
                    "caisse", caisse.getName(), "date", today.toString(),
                    "soldeDebut", soldeDebut, "soldeFin", soldeFin,
                    "ecart", ecart != null ? ecart : "non contrôlé"
                )),
                caisse.getCompanyId());

        syncEventPublisher.publish(SyncEventType.CAISSE_CLOTURE,
                "CAISSE_CLOTURE_" + caisseId + "_" + today,
                java.util.Map.of(
                    "caisseId",      caisseId,
                    "caisseName",    caisse.getName(),
                    "dateSession",   today.toString(),
                    "soldeDebut",    soldeDebut,
                    "totalEntrees",  totalEntrees,
                    "totalSorties",  totalSorties,
                    "soldeFin",      soldeFin,
                    "companyId",     caisse.getCompanyId()
                ));

        CaisseSessionDTO dto = toSessionDTO(session, caisse);
        dto.setEcartDepasseSeuil(depasseSeuil);
        return dto;
    }

    /** Poste l'écriture d'ajustement de l'écart de caisse : un excédent (compté > théorique) est un
     *  produit, un manque (compté < théorique) une charge — même schéma que addOperation. */
    private void postEcartEntry(Caisse caisse, BigDecimal ecart, LocalDate date) {
        AccountJournal journal = journalRepo.findById(caisse.getJournalId()).orElse(null);
        if (journal == null) return;
        Long primaryAccountId = resolvePrimaryAccountId(journal);
        if (primaryAccountId == null) return;

        boolean excedent = ecart.compareTo(BigDecimal.ZERO) > 0;
        BigDecimal montant = ecart.abs();
        AccountAccount ecartAccount = excedent
                ? resolveOrCreateAccount(ECART_EXCEDENT_ACCOUNT, "Produits divers de gestion courante", "income", caisse.getCompanyId())
                : resolveOrCreateAccount(ECART_MANQUE_ACCOUNT, "Charges diverses de gestion courante", "expense", caisse.getCompanyId());

        String libelle = (excedent ? "Excédent" : "Manque") + " de caisse — " + caisse.getName();
        List<JournalEntryRequest.LineRequest> lines = new ArrayList<>();
        if (excedent) {
            lines.add(JournalEntryRequest.LineRequest.builder()
                    .accountId(primaryAccountId).name(libelle).debit(montant).credit(BigDecimal.ZERO).build());
            lines.add(JournalEntryRequest.LineRequest.builder()
                    .accountId(ecartAccount.getId()).name(libelle).debit(BigDecimal.ZERO).credit(montant).build());
        } else {
            lines.add(JournalEntryRequest.LineRequest.builder()
                    .accountId(ecartAccount.getId()).name(libelle).debit(montant).credit(BigDecimal.ZERO).build());
            lines.add(JournalEntryRequest.LineRequest.builder()
                    .accountId(primaryAccountId).name(libelle).debit(BigDecimal.ZERO).credit(montant).build());
        }

        JournalEntryRequest entryReq = JournalEntryRequest.builder()
                .journalId(caisse.getJournalId()).date(date).ref(libelle)
                .companyId(caisse.getCompanyId()).lines(lines).build();
        var move = accountingService.createJournalEntry(entryReq);
        accountingService.postEntry(move.getId());
    }

    /** Vide la caisse à la clôture : le solde réellement en caisse est crédité du compte de
     *  liquidité et débité au compte de virement de fonds (585000) — la caisse comptable repart
     *  donc à zéro pour la prochaine session. Ne fait rien si le montant est nul ou négatif (rien
     *  à vider, ou solde anormal qu'il vaut mieux ne pas comptabiliser aveuglément). */
    private void postVidageEntry(Caisse caisse, BigDecimal montant, LocalDate date) {
        if (montant == null || montant.compareTo(BigDecimal.ZERO) <= 0) return;
        AccountJournal journal = journalRepo.findById(caisse.getJournalId()).orElse(null);
        if (journal == null) return;
        Long primaryAccountId = resolvePrimaryAccountId(journal);
        if (primaryAccountId == null) return;

        AccountAccount virementAccount = resolveOrCreateAccount(
                VIREMENT_FONDS_ACCOUNT, "Virements de fonds", "asset_cash", caisse.getCompanyId());

        String libelle = "Vidage de caisse — " + caisse.getName();
        List<JournalEntryRequest.LineRequest> lines = List.of(
                JournalEntryRequest.LineRequest.builder()
                        .accountId(virementAccount.getId()).name(libelle).debit(montant).credit(BigDecimal.ZERO).build(),
                JournalEntryRequest.LineRequest.builder()
                        .accountId(primaryAccountId).name(libelle).debit(BigDecimal.ZERO).credit(montant).build()
        );

        JournalEntryRequest entryReq = JournalEntryRequest.builder()
                .journalId(caisse.getJournalId()).date(date).ref(libelle)
                .companyId(caisse.getCompanyId()).lines(lines).build();
        var move = accountingService.createJournalEntry(entryReq);
        accountingService.postEntry(move.getId());
    }

    private AccountAccount resolveOrCreateAccount(String code, String name, String type, Long companyId) {
        String parent4 = code.substring(0, 4);
        String parent3 = code.substring(0, 3);
        return accountRepo.findFirstByCodeAndCompanyId(code, companyId)
                .or(() -> accountRepo.findFirstByCodeAndCompanyId(parent4, companyId))
                .or(() -> accountRepo.findFirstByCodeAndCompanyId(parent3, companyId))
                .orElseGet(() -> accountRepo.save(AccountAccount.builder()
                        .code(code).name(name).accountType(type)
                        .internalType("other").deprecated(false).reconcile(false)
                        .company(Company.builder().id(companyId).build())
                        .build()));
    }

    private BigDecimal computeSoldeAvant(Caisse caisse, LocalDate date) {
        Long primaryAccountId = resolvePrimaryAccountId(journalRepo.findById(caisse.getJournalId()).orElse(null));
        BigDecimal solde = primaryAccountId != null
                ? moveLineRepo.sumBalanceByAccountBeforeDate(primaryAccountId, caisse.getCompanyId(), date)
                : moveLineRepo.sumTreasuryBalanceBeforeDate(caisse.getJournalId(), date);
        return solde != null ? solde : BigDecimal.ZERO;
    }

    private Long resolvePrimaryAccountId(AccountJournal journal) {
        if (journal == null) return null;
        if (journal.getDefaultDebitAccount() != null) return journal.getDefaultDebitAccount().getId();
        if (journal.getDefaultCreditAccount() != null) return journal.getDefaultCreditAccount().getId();
        return null;
    }

    private BigDecimal sumCounts(List<DenominationCountRequest> counts) {
        if (counts == null || counts.isEmpty()) return BigDecimal.ZERO;
        Map<Long, BigDecimal> valeurs = denominationRepo.findAllById(
                counts.stream().map(DenominationCountRequest::getDenominationId).collect(Collectors.toList())
        ).stream().collect(Collectors.toMap(CashDenomination::getId, CashDenomination::getValeur));
        BigDecimal total = BigDecimal.ZERO;
        for (DenominationCountRequest c : counts) {
            BigDecimal v = valeurs.getOrDefault(c.getDenominationId(), BigDecimal.ZERO);
            int qty = c.getQuantite() != null ? c.getQuantite() : 0;
            total = total.add(v.multiply(BigDecimal.valueOf(qty)));
        }
        return total;
    }

    private void saveCounts(Long sessionId, List<DenominationCountRequest> counts, CountMoment moment) {
        if (counts == null) return;
        for (DenominationCountRequest c : counts) {
            if (c.getDenominationId() == null || c.getQuantite() == null || c.getQuantite() == 0) continue;
            sessionCountRepo.save(CaisseSessionCount.builder()
                    .caisseSessionId(sessionId).denominationId(c.getDenominationId())
                    .quantite(c.getQuantite()).moment(moment).build());
        }
    }

    private Long resolveUserId(String userName) {
        return userRepository.findByUsername(userName).map(u -> u.getId()).orElse(null);
    }

    public CaisseDTO rouvrirCaisse(Long caisseId) {
        Caisse caisse = caisseRepo.findById(caisseId)
                .orElseThrow(() -> new EntityNotFoundException("Caisse non trouvée: " + caisseId));
        tenantGuard.check(caisse.getCompanyId());
        LocalDate today = LocalDate.now();
        sessionRepo.findByCaisseIdAndDateSession(caisseId, today).ifPresent(s -> {
            if ("CLOTUREE".equals(s.getStatus())) {
                s.setStatus("EN_COURS");
                s.setSoldeDebut(computeSoldeAvant(caisse, today));
                sessionRepo.save(s);
            }
        });
        caisse.setStatus(CaisseStatus.OUVERTE);
        Caisse savedCaisse = caisseRepo.save(caisse);
        auditService.log("CAISSE_OPERATION", savedCaisse.getId(), savedCaisse.getName(),
                "SESSION_OPENED", "Caisse réouverte", savedCaisse.getCompanyId());
        return enrichCaisseDTO(toDTO(savedCaisse));
    }

    // ── Brouillard ──

    @Transactional(readOnly = true)
    public BrouillardDTO getBrouillard(Long caisseId, LocalDate date) {
        Caisse caisse = caisseRepo.findById(caisseId)
                .orElseThrow(() -> new EntityNotFoundException("Caisse non trouvée: " + caisseId));
        tenantGuard.check(caisse.getCompanyId());

        AccountJournal journal = journalRepo.findById(caisse.getJournalId())
                .orElseThrow(() -> new EntityNotFoundException("Journal non trouvé"));

        // Le solde/les lignes du brouillard doivent porter sur le compte réellement lié au journal
        // de la caisse (defaultDebitAccount/defaultCreditAccount), filtré PAR COMPTE SEUL (sans
        // condition de journal) : lors d'un transfert entre deux caisses, toute la pièce (les deux
        // lignes) est classée sous le journal de la caisse qui a saisi l'opération, donc la ligne
        // touchant le compte de l'AUTRE caisse (la "sortie" ou l'"entrée" en face) n'apparaîtrait
        // jamais si on filtrait aussi par journal. Le compte de liquidité étant dédié à cette caisse,
        // le filtrer seul (+ société) suffit à isoler correctement tous ses mouvements.
        Long primaryAccountId = journal.getDefaultDebitAccount() != null
                ? journal.getDefaultDebitAccount().getId()
                : (journal.getDefaultCreditAccount() != null ? journal.getDefaultCreditAccount().getId() : null);

        BigDecimal soldeDebut;
        List<AccountMoveLine> cashLines;
        if (primaryAccountId != null) {
            soldeDebut = moveLineRepo.sumBalanceByAccountBeforeDate(primaryAccountId, caisse.getCompanyId(), date);
            cashLines = moveLineRepo.findLinesByAccountAndDateBetween(primaryAccountId, caisse.getCompanyId(), date, date);
        } else {
            soldeDebut = moveLineRepo.sumTreasuryBalanceBeforeDate(caisse.getJournalId(), date);
            cashLines = moveLineRepo.findCashbookLines(caisse.getJournalId(), date, date);
        }
        if (soldeDebut == null) soldeDebut = BigDecimal.ZERO;

        BigDecimal totalEntrees = cashLines.stream()
                .map(AccountMoveLine::getDebit).filter(d -> d != null)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal totalSorties = cashLines.stream()
                .map(AccountMoveLine::getCredit).filter(c -> c != null)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        List<BrouillardDTO.BrouillardLineDTO> lines = cashLines.stream()
                .map(l -> BrouillardDTO.BrouillardLineDTO.builder()
                        .date(l.getDate())
                        .ref(l.getMove() != null ? l.getMove().getName() : null)
                        .libelle(l.getName())
                        .tiersName(l.getPartner() != null ? l.getPartner().getName() : null)
                        .compteCode(l.getAccount() != null ? l.getAccount().getCode() : null)
                        .compteName(l.getAccount() != null ? l.getAccount().getName() : null)
                        .debit(l.getDebit())
                        .credit(l.getCredit())
                        .source("JOURNAL")
                        .build())
                .collect(Collectors.toList());

        var sessionOpt = sessionRepo.findByCaisseIdAndDateSession(caisseId, date);

        return BrouillardDTO.builder()
                .caisseId(caisseId)
                .caisseName(caisse.getName())
                .journalName(journal.getName())
                .journalCode(journal.getCode())
                .dateSession(date)
                .soldeDebut(soldeDebut)
                .totalEntrees(totalEntrees)
                .totalSorties(totalSorties)
                .soldeFin(soldeDebut.add(totalEntrees).subtract(totalSorties))
                .status(sessionOpt.map(CaisseSession::getStatus).orElse("OUVERTE"))
                .dateCloture(sessionOpt.map(CaisseSession::getDateCloture).orElse(null))
                .lines(lines)
                .build();
    }

    // ── Sessions ──

    @Transactional(readOnly = true)
    public CaisseSessionDTO getActiveSessionForCaisse(Long caisseId) {
        if (caisseId == null) return null;
        Caisse caisse = caisseRepo.findById(caisseId).orElse(null);
        if (caisse == null) return null;
        return sessionRepo.findByCaisseIdAndDateSessionAndStatus(caisseId, LocalDate.now(), "EN_COURS")
                .map(s -> toSessionDTO(s, caisse))
                .orElse(null);
    }

    @Transactional(readOnly = true)
    public List<CaisseSessionDTO> getSessions(Long caisseId) {
        Caisse caisse = caisseRepo.findById(caisseId)
                .orElseThrow(() -> new EntityNotFoundException("Caisse non trouvée: " + caisseId));
        tenantGuard.check(caisse.getCompanyId());
        return sessionRepo.findByCaisseIdOrderByDateSessionDesc(caisseId)
                .stream()
                .map(s -> toSessionDTO(s, caisse))
                .collect(Collectors.toList());
    }

    // ── Rapports ──

    @Transactional(readOnly = true)
    public RapportClotureDTO getRapportCloture(Long sessionId) {
        CaisseSession session = sessionRepo.findById(sessionId)
                .orElseThrow(() -> new EntityNotFoundException("Session non trouvée: " + sessionId));
        Caisse caisse = caisseRepo.findById(session.getCaisseId())
                .orElseThrow(() -> new EntityNotFoundException("Caisse non trouvée: " + session.getCaisseId()));
        tenantGuard.check(caisse.getCompanyId());

        List<RapportClotureDTO.DenominationCountLine> countsOuverture =
                toDenominationCountLines(sessionId, CountMoment.OUVERTURE);
        List<RapportClotureDTO.DenominationCountLine> countsCloture =
                toDenominationCountLines(sessionId, CountMoment.CLOTURE);

        List<CaisseOperationDTO> operations = operationRepo
                .findByCaisseIdAndDateAndCompanyId(caisse.getId(), session.getDateSession(), caisse.getCompanyId())
                .stream().map(this::toOperationDTO).collect(Collectors.toList());

        boolean depasseSeuil = caisse.getSeuilEcart() != null && session.getEcart() != null
                && session.getEcart().abs().compareTo(caisse.getSeuilEcart()) > 0;

        return RapportClotureDTO.builder()
                .sessionId(session.getId())
                .caisseId(caisse.getId())
                .caisseName(caisse.getName())
                .dateSession(session.getDateSession())
                .createdBy(session.getCreatedBy())
                .status(session.getStatus())
                .soldeDebut(session.getSoldeDebut())
                .montantCompteOuverture(session.getMontantCompteOuverture())
                .ecartOuverture(session.getEcartOuverture())
                .ouvertureControlee(session.isOuvertureControlee())
                .totalEntrees(session.getTotalEntrees())
                .totalSorties(session.getTotalSorties())
                .soldeFin(session.getSoldeFin())
                .montantCompteCloture(session.getMontantCompteCloture())
                .ecart(session.getEcart())
                .seuilEcart(caisse.getSeuilEcart())
                .ecartDepasseSeuil(depasseSeuil)
                .dateCloture(session.getDateCloture())
                .countsOuverture(countsOuverture)
                .countsCloture(countsCloture)
                .operations(operations)
                .build();
    }

    private List<RapportClotureDTO.DenominationCountLine> toDenominationCountLines(Long sessionId, CountMoment moment) {
        List<CaisseSessionCount> counts = sessionCountRepo.findByCaisseSessionIdAndMoment(sessionId, moment);
        if (counts.isEmpty()) return List.of();
        Map<Long, CashDenomination> denoms = denominationRepo.findAllById(
                counts.stream().map(CaisseSessionCount::getDenominationId).collect(Collectors.toList())
        ).stream().collect(Collectors.toMap(CashDenomination::getId, d -> d));
        return counts.stream()
                .map(c -> {
                    CashDenomination d = denoms.get(c.getDenominationId());
                    BigDecimal valeur = d != null ? d.getValeur() : BigDecimal.ZERO;
                    return RapportClotureDTO.DenominationCountLine.builder()
                            .label(d != null ? d.getLabel() : "?")
                            .valeur(valeur)
                            .quantite(c.getQuantite())
                            .total(valeur.multiply(BigDecimal.valueOf(c.getQuantite())))
                            .build();
                })
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public RapportConsolideDTO getRapportConsolide(List<Long> caisseIds, LocalDate dateFrom, LocalDate dateTo, Long companyId) {
        List<Long> ids = (caisseIds != null && !caisseIds.isEmpty())
                ? caisseIds
                : caisseRepo.findByCompanyIdAndActiveTrue(companyId).stream().map(Caisse::getId).collect(Collectors.toList());

        Map<Long, Caisse> caissesById = caisseRepo.findAllById(ids).stream()
                .filter(c -> c.getCompanyId().equals(companyId))
                .collect(Collectors.toMap(Caisse::getId, c -> c));

        List<CaisseSession> sessions = sessionRepo
                .findByCaisseIdInAndDateSessionBetweenOrderByDateSessionDesc(
                        new ArrayList<>(caissesById.keySet()), dateFrom, dateTo);

        List<CaisseSessionDTO> sessionDTOs = sessions.stream()
                .map(s -> toSessionDTO(s, caissesById.get(s.getCaisseId())))
                .collect(Collectors.toList());

        BigDecimal totalEntrees = sessionDTOs.stream().map(CaisseSessionDTO::getTotalEntrees)
                .filter(java.util.Objects::nonNull).reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalSorties = sessionDTOs.stream().map(CaisseSessionDTO::getTotalSorties)
                .filter(java.util.Objects::nonNull).reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalEcarts = sessionDTOs.stream().map(CaisseSessionDTO::getEcart)
                .filter(java.util.Objects::nonNull).reduce(BigDecimal.ZERO, BigDecimal::add);

        return RapportConsolideDTO.builder()
                .dateFrom(dateFrom).dateTo(dateTo)
                .sessions(sessionDTOs)
                .totalSessions(sessionDTOs.size())
                .grandTotalEntrees(totalEntrees)
                .grandTotalSorties(totalSorties)
                .grandTotalEcarts(totalEcarts)
                .build();
    }

    // ── Dashboard ──

    @Transactional(readOnly = true)
    public List<CaisseDTO> getDashboard(Long companyId) {
        return caisseRepo.findByCompanyIdAndActiveTrue(companyId)
                .stream()
                .map(c -> enrichCaisseDTO(toDTO(c)))
                .collect(Collectors.toList());
    }

    // ── Mappers ──

    private CaisseStatus effectiveStatus(Caisse c) {
        if (c.getStatus() == CaisseStatus.CLOTUREE
                && (c.getLastSessionDate() == null || c.getLastSessionDate().isBefore(LocalDate.now()))) {
            return CaisseStatus.OUVERTE;
        }
        return c.getStatus();
    }

    private CaisseDTO toDTO(Caisse c) {
        return CaisseDTO.builder()
                .id(c.getId())
                .name(c.getName())
                .code(c.getCode())
                .journalId(c.getJournalId())
                .companyId(c.getCompanyId())
                .status(effectiveStatus(c))
                .responsableName(c.getResponsableName())
                .sellerId(c.getSellerId())
                .active(c.isActive())
                .lastSessionDate(c.getLastSessionDate())
                .seuilEcart(c.getSeuilEcart())
                .build();
    }

    private CashDenominationDTO toDenominationDTO(CashDenomination d) {
        return CashDenominationDTO.builder()
                .id(d.getId()).companyId(d.getCompanyId())
                .label(d.getLabel()).valeur(d.getValeur()).active(d.isActive())
                .build();
    }

    private CaisseDTO enrichCaisseDTO(CaisseDTO dto) {
        if (dto.getSellerId() != null) {
            sellerRepo.findById(dto.getSellerId()).ifPresent(s -> dto.setSellerName(s.getName()));
        }
        if (dto.getJournalId() == null) return dto;
        journalRepo.findById(dto.getJournalId()).ifPresent(j -> {
            dto.setJournalName(j.getName());
            dto.setSoldeActuel(computeSolde(dto.getJournalId(), j, dto.getCompanyId()));
        });
        return dto;
    }

    private BigDecimal computeSolde(Long journalId, AccountJournal journal, Long companyId) {
        LocalDate tomorrow = LocalDate.now().plusDays(1);

        Long primaryAccountId = null;
        if (journal.getDefaultDebitAccount() != null)  primaryAccountId = journal.getDefaultDebitAccount().getId();
        else if (journal.getDefaultCreditAccount() != null) primaryAccountId = journal.getDefaultCreditAccount().getId();

        if (primaryAccountId != null) {
            BigDecimal solde = moveLineRepo.sumBalanceByAccountBeforeDate(primaryAccountId, companyId, tomorrow);
            if (solde != null) return solde;
        }

        BigDecimal solde = moveLineRepo.sumTreasuryBalanceBeforeDate(journalId, tomorrow);
        return solde != null ? solde : BigDecimal.ZERO;
    }

    private CaisseOperationDTO toOperationDTO(CaisseOperation op) {
        return toOperationDTO(op, null, null);
    }

    private CaisseOperationDTO toOperationDTO(CaisseOperation op, Map<Long, Caisse> caisseCache, Map<Long, AccountAccount> accountCache) {
        var dto = CaisseOperationDTO.builder()
                .id(op.getId())
                .caisseId(op.getCaisseId())
                .companyId(op.getCompanyId())
                .date(op.getDate())
                .type(op.getType())
                .montant(op.getMontant())
                .libelle(op.getLibelle())
                .reference(op.getReference())
                .tiersName(op.getTiersName())
                .compteContrepartieId(op.getCompteContrepartieId())
                .journalMoveId(op.getJournalMoveId())
                .createdBy(op.getCreatedBy())
                .createdAt(op.getCreatedAt())
                .build();

        Caisse caisse = caisseCache != null ? caisseCache.get(op.getCaisseId())
                : caisseRepo.findById(op.getCaisseId()).orElse(null);
        if (caisse != null) dto.setCaisseName(caisse.getName());

        if (op.getCompteContrepartieId() != null) {
            AccountAccount compte = accountCache != null ? accountCache.get(op.getCompteContrepartieId())
                    : accountRepo.findById(op.getCompteContrepartieId()).orElse(null);
            if (compte != null) {
                dto.setCompteContrepartieCode(compte.getCode());
                dto.setCompteContrepartieName(compte.getName());
            }
        }
        return dto;
    }

    private CaisseSessionDTO toSessionDTO(CaisseSession s, Caisse caisse) {
        boolean depasseSeuil = caisse.getSeuilEcart() != null && s.getEcart() != null
                && s.getEcart().abs().compareTo(caisse.getSeuilEcart()) > 0;

        var dto = CaisseSessionDTO.builder()
                .id(s.getId())
                .caisseId(s.getCaisseId())
                .caisseName(caisse.getName())
                .journalId(s.getJournalId())
                .companyId(s.getCompanyId())
                .dateSession(s.getDateSession())
                .status(s.getStatus())
                .soldeDebut(s.getSoldeDebut())
                .soldeFin(s.getSoldeFin())
                .totalEntrees(s.getTotalEntrees())
                .totalSorties(s.getTotalSorties())
                .dateCloture(s.getDateCloture())
                .createdBy(s.getCreatedBy())
                .userId(s.getUserId())
                .montantCompteOuverture(s.getMontantCompteOuverture())
                .montantCompteCloture(s.getMontantCompteCloture())
                .ecartOuverture(s.getEcartOuverture())
                .ecart(s.getEcart())
                .ouvertureControlee(s.isOuvertureControlee())
                .ecartDepasseSeuil(depasseSeuil)
                .build();

        if (s.getJournalId() != null) {
            journalRepo.findById(s.getJournalId()).ifPresent(j -> dto.setJournalName(j.getName()));
        }
        return dto;
    }
}
