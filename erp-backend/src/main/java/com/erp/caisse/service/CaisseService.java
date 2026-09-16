package com.erp.caisse.service;

import com.erp.accounting.dto.JournalEntryRequest;
import com.erp.accounting.entity.AccountAccount;
import com.erp.accounting.entity.AccountJournal;
import com.erp.accounting.entity.AccountMoveLine;
import com.erp.accounting.repository.AccountAccountRepository;
import com.erp.accounting.repository.AccountJournalRepository;
import com.erp.accounting.repository.AccountMoveLineRepository;
import com.erp.accounting.service.AccountingService;
import com.erp.caisse.dto.*;
import com.erp.caisse.entity.*;
import com.erp.caisse.repository.*;
import com.erp.audit.service.AuditService;
import com.erp.common.service.TenantGuard;
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
    private final AccountJournalRepository journalRepo;
    private final AccountMoveLineRepository moveLineRepo;
    private final AccountAccountRepository accountRepo;
    private final AccountingService accountingService;
    private final SyncEventPublisher syncEventPublisher;
    private final AuditService auditService;
    private final TenantGuard tenantGuard;

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

        // companyId vient du corps de la requête (client) — ne jamais lui faire confiance pour
        // choisir SOUS QUELLE société la caisse est créée.
        Long companyId = com.erp.auth.SecurityUtils.currentCompanyId();

        Caisse caisse = Caisse.builder()
                .name(dto.getName())
                .code(dto.getCode())
                .journalId(dto.getJournalId())
                .companyId(companyId)
                .responsableName(dto.getResponsableName())
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
        if (dto.getJournalId() != null) {
            journalRepo.findById(dto.getJournalId())
                    .orElseThrow(() -> new EntityNotFoundException("Journal non trouvé: " + dto.getJournalId()));
            caisse.setJournalId(dto.getJournalId());
        }

        return enrichCaisseDTO(toDTO(caisseRepo.save(caisse)));
    }

    public void deleteCaisse(Long id) {
        Caisse caisse = caisseRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Caisse non trouvée: " + id));
        tenantGuard.check(caisse.getCompanyId());
        caisse.setActive(false);
        caisseRepo.save(caisse);
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

    /** Précharge caisses/comptes par lot (findAllById) au lieu des 2 requêtes PAR OPÉRATION
     *  (caisseRepo.findById, accountRepo.findById) que faisait l'ancien toOperationDTO — sur
     *  l'historique complet d'une agence active, ça ramenait des centaines de requêtes pour un
     *  simple chargement de liste. */
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

        // Réouverture automatique si la clôture date d'avant aujourd'hui
        if (caisse.getStatus() == CaisseStatus.CLOTUREE
                && (caisse.getLastSessionDate() == null || caisse.getLastSessionDate().isBefore(LocalDate.now()))) {
            caisse.setStatus(CaisseStatus.OUVERTE);
            caisse = caisseRepo.save(caisse);
        }

        if (caisse.getStatus() == CaisseStatus.CLOTUREE) {
            throw new IllegalStateException("La caisse '" + caisse.getName() + "' est clôturée pour la journée.");
        }

        Long journalId = caisse.getJournalId();
        AccountJournal journal = journalRepo.findById(journalId)
                .orElseThrow(() -> new EntityNotFoundException("Journal non trouvé: " + journalId));

        AccountAccount compteContrepartie = accountRepo.findById(req.getCompteContrepartieId())
                .orElseThrow(() -> new EntityNotFoundException("Compte non trouvé: " + req.getCompteContrepartieId()));

        // Compte de liquidité de la caisse : TOUJOURS le même compte "primaire" du journal
        // (defaultDebitAccount en priorité, sinon defaultCreditAccount), quel que soit le sens de
        // l'opération — exactement la même résolution que computeSolde/getBrouillard/cloturerCaisse.
        // Un compte de caisse est débité à l'entrée et crédité à la sortie, mais reste UN SEUL compte ;
        // brancher par type (entrée→compte débit, sortie→compte crédit) éclaterait le solde de la
        // caisse entre deux comptes distincts dès que le journal a les deux configurés différemment,
        // ce que le brouillard/la clôture (qui ne regardent que le compte primaire) ne verraient jamais.
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
                .companyId(caisse.getCompanyId())
                .lines(lines)
                .build();

        var move = accountingService.createJournalEntry(entryReq);
        accountingService.postEntry(move.getId());

        CaisseOperation op = CaisseOperation.builder()
                .caisseId(req.getCaisseId())
                .companyId(caisse.getCompanyId())
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
                caisse.getCompanyId());

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

    // ── Clôture ──

    public CaisseSessionDTO cloturerCaisse(Long caisseId, Long companyId, String userName) {
        Caisse caisse = caisseRepo.findById(caisseId)
                .orElseThrow(() -> new EntityNotFoundException("Caisse non trouvée: " + caisseId));
        tenantGuard.check(caisse.getCompanyId());

        LocalDate today = LocalDate.now();

        // Réouverture automatique si la clôture date d'avant aujourd'hui
        if (caisse.getStatus() == CaisseStatus.CLOTUREE
                && (caisse.getLastSessionDate() == null || caisse.getLastSessionDate().isBefore(today))) {
            caisse.setStatus(CaisseStatus.OUVERTE);
            caisse = caisseRepo.save(caisse);
        }

        if (caisse.getStatus() == CaisseStatus.CLOTUREE) {
            throw new IllegalStateException("La caisse est déjà clôturée pour la journée.");
        }

        if (sessionRepo.existsByCaisseIdAndDateSession(caisseId, today)) {
            throw new IllegalStateException("Une session existe déjà pour la caisse à la date d'aujourd'hui.");
        }

        // Solde/lignes sur le compte réellement lié au journal de la caisse (cf. getBrouillard)
        AccountJournal cloturJournal = journalRepo.findById(caisse.getJournalId()).orElse(null);
        Long primaryAccountId = cloturJournal != null && cloturJournal.getDefaultDebitAccount() != null
                ? cloturJournal.getDefaultDebitAccount().getId()
                : (cloturJournal != null && cloturJournal.getDefaultCreditAccount() != null
                    ? cloturJournal.getDefaultCreditAccount().getId() : null);

        // Solde début = solde avant aujourd'hui (filtré par compte seul, cf. commentaire getBrouillard :
        // capte aussi la jambe d'un transfert reçu/émis depuis une autre caisse)
        BigDecimal soldeDebut = primaryAccountId != null
                ? moveLineRepo.sumBalanceByAccountBeforeDate(primaryAccountId, caisse.getCompanyId(), today)
                : moveLineRepo.sumTreasuryBalanceBeforeDate(caisse.getJournalId(), today);
        if (soldeDebut == null) soldeDebut = BigDecimal.ZERO;

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

        BigDecimal soldeFin = soldeDebut.add(totalEntrees).subtract(totalSorties);

        CaisseSession session = CaisseSession.builder()
                .caisseId(caisseId)
                .journalId(caisse.getJournalId())
                .companyId(companyId)
                .dateSession(today)
                .status("CLOTUREE")
                .soldeDebut(soldeDebut)
                .totalEntrees(totalEntrees)
                .totalSorties(totalSorties)
                .soldeFin(soldeFin)
                .dateCloture(LocalDateTime.now())
                .createdBy(userName)
                .build();

        sessionRepo.save(session);

        // Mettre la caisse en CLOTUREE
        caisse.setStatus(CaisseStatus.CLOTUREE);
        caisse.setLastSessionDate(today);
        caisseRepo.save(caisse);

        auditService.log("CAISSE_OPERATION", caisseId, caisse.getName(),
                "CLOTURE", "Clôture journalière de caisse",
                AuditService.details(java.util.Map.of(
                    "caisse", caisse.getName(), "date", today.toString(),
                    "soldeDebut", soldeDebut, "soldeFin", soldeFin
                )),
                companyId);

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
                    "companyId",     companyId
                ));

        return toSessionDTO(session, caisse);
    }

    public CaisseDTO rouvrirCaisse(Long caisseId) {
        Caisse caisse = caisseRepo.findById(caisseId)
                .orElseThrow(() -> new EntityNotFoundException("Caisse non trouvée: " + caisseId));
        tenantGuard.check(caisse.getCompanyId());
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
    public List<CaisseSessionDTO> getSessions(Long caisseId) {
        Caisse caisse = caisseRepo.findById(caisseId)
                .orElseThrow(() -> new EntityNotFoundException("Caisse non trouvée: " + caisseId));
        tenantGuard.check(caisse.getCompanyId());
        return sessionRepo.findByCaisseIdOrderByDateSessionDesc(caisseId)
                .stream()
                .map(s -> toSessionDTO(s, caisse))
                .collect(Collectors.toList());
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
                .active(c.isActive())
                .lastSessionDate(c.getLastSessionDate())
                .build();
    }

    private CaisseDTO enrichCaisseDTO(CaisseDTO dto) {
        if (dto.getJournalId() == null) return dto;
        journalRepo.findById(dto.getJournalId()).ifPresent(j -> {
            dto.setJournalName(j.getName());
            dto.setSoldeActuel(computeSolde(dto.getJournalId(), j, dto.getCompanyId()));
        });
        return dto;
    }

    private BigDecimal computeSolde(Long journalId, AccountJournal journal, Long companyId) {
        LocalDate tomorrow = LocalDate.now().plusDays(1);

        // Résoudre le compte principal du journal (même logique que AccountingService.resolvePrimaryAccountId)
        Long primaryAccountId = null;
        if (journal.getDefaultDebitAccount() != null)  primaryAccountId = journal.getDefaultDebitAccount().getId();
        else if (journal.getDefaultCreditAccount() != null) primaryAccountId = journal.getDefaultCreditAccount().getId();

        if (primaryAccountId != null) {
            // Filtre par compte seul (sans journal) : capte aussi la jambe d'un transfert entre
            // caisses classée sous le journal de l'AUTRE caisse (cf. getBrouillard).
            BigDecimal solde = moveLineRepo.sumBalanceByAccountBeforeDate(primaryAccountId, companyId, tomorrow);
            if (solde != null) return solde;
        }

        // Fallback : filtre par internalType='liquidity'
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
                .build();

        if (s.getJournalId() != null) {
            journalRepo.findById(s.getJournalId()).ifPresent(j -> dto.setJournalName(j.getName()));
        }
        return dto;
    }
}
