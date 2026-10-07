package com.erp.declaration.service;

import com.erp.accounting.entity.Partner;
import com.erp.accounting.repository.AccountJournalRepository;
import com.erp.accounting.repository.PartnerRepository;
import com.erp.accounting.service.FiscalLockGuard;
import com.erp.common.service.TenantGuard;
import com.erp.declaration.dto.InvoiceGenerationPlan;
import com.erp.declaration.dto.InvoiceGenerationPlan.PlannedInvoice;
import com.erp.declaration.dto.InvoiceGenerationPlan.PlannedLine;
import com.erp.declaration.dto.DeclarationBatchDTO;
import com.erp.declaration.dto.InvoiceGenerationRequest;
import com.erp.declaration.entity.DeclarationBatch;
import com.erp.declaration.repository.DeclarationBatchRepository;
import com.erp.audit.service.AuditService;
import com.erp.sales.dto.InvoicePaymentRequest;
import com.erp.sales.dto.SalesInvoiceDTO;
import com.erp.sales.service.SalesService;
import com.erp.stock.entity.Product;
import com.erp.stock.entity.StockQuant;
import com.erp.stock.entity.Warehouse;
import com.erp.stock.repository.ProductRepository;
import com.erp.stock.repository.StockQuantRepository;
import com.erp.stock.repository.WarehouseRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.support.SimpleTransactionStatus;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

/**
 * Aperçu de génération : montants dans l'intervalle, total atteint, stock jamais dépassé,
 * et aucune facture quand le stock ne suffit pas.
 */
@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
class InvoiceGeneratorServiceTest {

    @Mock private WarehouseRepository warehouseRepo;
    @Mock private StockQuantRepository stockQuantRepo;
    @Mock private ProductRepository productRepo;
    @Mock private PartnerRepository partnerRepo;
    @Mock private AccountJournalRepository journalRepo;
    @Mock private FiscalLockGuard fiscalLockGuard;
    @Mock private TenantGuard tenantGuard;
    @Mock private SalesService salesService;
    @Mock private AuditService auditService;
    @Mock private DeclarationBatchRepository batchRepo;
    @Mock private PlatformTransactionManager transactionManager;

    @InjectMocks
    private InvoiceGeneratorService service;

    private static final Long CID = 1L;
    private static final LocalDate FROM = LocalDate.of(2026, 1, 1);
    private static final LocalDate TO = LocalDate.of(2026, 3, 31);

    private final Map<Long, List<StockQuant>> quantsByLocation = new HashMap<>();

    @BeforeEach
    void setUp() {
        when(partnerRepo.findByCompanyIdAndActiveTrue(CID)).thenReturn(List.of(
                Partner.builder().id(1L).name("Client A").type("customer").active(true).build(),
                Partner.builder().id(2L).name("Client B").type("both").active(true).build(),
                Partner.builder().id(3L).name("Fournisseur").type("supplier").active(true).build()));
        when(warehouseRepo.findByCompanyIdOrderByNameAsc(CID)).thenReturn(List.of(
                Warehouse.builder().id(10L).name("Magasin 1").stockLocationId(100L).salesJournalId(5L).cashJournalId(6L)
                        .avarWarehouseId(30L).active(true).companyId(CID).build(),
                Warehouse.builder().id(20L).name("Magasin 2").stockLocationId(200L).salesJournalId(5L).cashJournalId(6L)
                        .active(true).companyId(CID).build(),
                // Entrepôt « Avaries » : jamais utilisé pour vendre
                Warehouse.builder().id(30L).name("Avaries").stockLocationId(300L).salesJournalId(5L).cashJournalId(6L)
                        .active(true).companyId(CID).build()));
        when(productRepo.findByCompanyIdAndActiveOrderByNameAsc(CID, true)).thenReturn(List.of(
                product(1L, "1500", false), product(2L, "8350", false), product(3L, "12000", true),
                product(4L, "27500", false), product(5L, "4200", false),
                Product.builder().id(6L).name("Service").salePrice(new BigDecimal("1000")).type("service")
                        .active(true).companyId(CID).build()));
        when(stockQuantRepo.findByLocationIdAndCompanyId(anyLong(), eq(CID)))
                .thenAnswer(inv -> quantsByLocation.getOrDefault(inv.getArgument(0, Long.class), List.of()));
    }

    private Product product(Long id, String price, boolean exempt) {
        return Product.builder().id(id).defaultCode("P" + id).name("Article " + id)
                .salePrice(new BigDecimal(price)).type("product").exemptTva(exempt)
                .active(true).companyId(CID).build();
    }

    private void stock(Long locationId, Long productId, long qty, long reserved) {
        quantsByLocation.computeIfAbsent(locationId, k -> new ArrayList<>()).add(StockQuant.builder()
                .productId(productId).locationId(locationId).companyId(CID)
                .quantity(BigDecimal.valueOf(qty)).reservedQuantity(BigDecimal.valueOf(reserved)).build());
    }

    private InvoiceGenerationRequest request(long total, long min, long max, int count) {
        return InvoiceGenerationRequest.builder().companyId(CID)
                .totalAmount(BigDecimal.valueOf(total)).minAmount(BigDecimal.valueOf(min))
                .maxAmount(BigDecimal.valueOf(max)).count(count).dateFrom(FROM).dateTo(TO).build();
    }

    @RepeatedTest(50)
    void planDansLesBornesSansDepasserLeStock() {
        for (long p = 1; p <= 5; p++) {
            stock(100L, p, 2000, 100);
            stock(200L, p, 1500, 0);
            stock(300L, p, 99999, 0);
        }

        InvoiceGenerationPlan plan = service.preview(request(10_000_000, 200_000, 800_000, 20));

        assertThat(plan.getInvoices()).hasSize(20);
        long sum = 0;
        Map<String, Long> used = new HashMap<>();
        for (PlannedInvoice inv : plan.getInvoices()) {
            long net = inv.getNetAPayer().longValue();
            assertThat(net).isBetween(200_000L, 800_000L);
            assertThat(inv.getDate()).isBetween(FROM, TO);
            assertThat(inv.getWarehouseId()).isIn(10L, 20L);
            assertThat(inv.getPartnerId()).isIn(1L, 2L);
            assertThat(net).isEqualTo(recomputeNet(inv.getLines()));
            for (PlannedLine l : inv.getLines()) {
                assertThat(l.getProductId()).isNotEqualTo(6L);
                used.merge(inv.getWarehouseId() + "/" + l.getProductId(), l.getQuantity().longValue(), Long::sum);
            }
            sum += net;
        }
        assertThat(sum).isEqualTo(plan.getPlannedTotal().longValue());
        assertThat(10_000_000 - sum).isBetween(0L, 5_000L);
        used.forEach((key, qty) -> assertThat(qty).isLessThanOrEqualTo(key.startsWith("10/") ? 1900 : 1500));
    }

    @Test
    void aucunStockAucuneFacture() {
        stock(300L, 1L, 5000, 0); // uniquement dans l'entrepôt Avaries
        assertThatThrownBy(() -> service.preview(request(1_000_000, 50_000, 100_000, 15)))
                .isInstanceOf(IllegalStateException.class)
                .hasMessageContaining("Aucun article en stock");
    }

    @Test
    void stockInsuffisantAucuneFacture() {
        stock(100L, 1L, 10, 0); // 10 × 1 789 FCFA ≈ 17 900 FCFA disponibles
        assertThatThrownBy(() -> service.preview(request(1_000_000, 50_000, 100_000, 15)))
                .isInstanceOf(IllegalStateException.class)
                .hasMessageContaining("Aucune facture n'a été générée");
    }

    @Test
    void parametresIncoherents() {
        assertThatThrownBy(() -> service.preview(request(1_000_000, 50_000, 60_000, 5)))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("Incohérence");
    }

    // ===================== GÉNÉRATION EN ARRIÈRE-PLAN =====================

    private DeclarationBatch stored;

    private void mockGenerationInfra(int failOnPost) {
        when(transactionManager.getTransaction(any())).thenAnswer(inv -> new SimpleTransactionStatus());
        when(batchRepo.save(any())).thenAnswer(inv -> {
            stored = inv.getArgument(0);
            stored.setId(99L);
            return stored;
        });
        when(batchRepo.findById(99L)).thenAnswer(inv -> Optional.ofNullable(stored));
        long[] seq = {0};
        when(salesService.createInvoice(any())).thenAnswer(inv -> SalesInvoiceDTO.builder().id(++seq[0]).build());
        int[] posts = {0};
        when(salesService.postInvoice(anyLong())).thenAnswer(inv -> {
            if (++posts[0] == failOnPost) throw new IllegalStateException("Stock insuffisant pour \"Article 1\"");
            Long id = inv.getArgument(0);
            return SalesInvoiceDTO.builder().id(id).name("FAC-" + id)
                    .montantDu(new BigDecimal("50000")).netAPayer(new BigDecimal("50000")).build();
        });
    }

    private InvoiceGenerationPlan plan(int count) {
        List<PlannedInvoice> invoices = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            invoices.add(PlannedInvoice.builder().date(FROM.plusDays(count - i)).partnerId(1L).warehouseId(10L)
                    .lines(List.of(PlannedLine.builder().productId(1L).quantity(BigDecimal.TEN)
                            .prixUnitaire(new BigDecimal("1500")).tauxTVA(new BigDecimal("19.25")).build()))
                    .build());
        }
        return InvoiceGenerationPlan.builder().companyId(CID).dateFrom(FROM).dateTo(TO)
                .requestedTotal(BigDecimal.valueOf(50_000L * count)).invoices(invoices).build();
    }

    private void awaitEnd() throws InterruptedException {
        for (int i = 0; i < 200 && DeclarationBatch.RUNNING.equals(stored.getStatus()); i++) Thread.sleep(25);
    }

    @Test
    void generationEnArrierePlanFacturesValideesEtReglees() throws Exception {
        mockGenerationInfra(-1);

        DeclarationBatchDTO started = service.generate(plan(3));
        assertThat(started.getStatus()).isEqualTo(DeclarationBatch.RUNNING);
        awaitEnd();

        assertThat(stored.getStatus()).isEqualTo(DeclarationBatch.DONE);
        assertThat(stored.getInvoiceIds()).containsExactly(1L, 2L, 3L);
        assertThat(stored.getProcessedCount()).isEqualTo(3);
        assertThat(stored.getGeneratedTotal()).isEqualByComparingTo("150000");
        // Une transaction courte par facture (+ la clôture), jamais une transaction géante
        verify(transactionManager, times(4)).commit(any());
        verify(salesService, times(3)).createPayment(argThat((InvoicePaymentRequest r) ->
                r.getJournalId().equals(6L) && r.getAmount().compareTo(new BigDecimal("50000")) == 0));
    }

    @Test
    void erreurEnCoursDeRouteGenerationInterrompue() throws Exception {
        mockGenerationInfra(2);

        service.generate(plan(3));
        awaitEnd();

        assertThat(stored.getStatus()).isEqualTo(DeclarationBatch.FAILED);
        assertThat(stored.getErrorMessage()).contains("facture 2/3").contains("Stock insuffisant");
        assertThat(stored.getInvoiceIds()).containsExactly(1L);
        verify(salesService, times(2)).postInvoice(anyLong());
    }

    @Test
    void uneSeuleGenerationALaFois() {
        when(batchRepo.existsByCompanyIdAndStatus(CID, DeclarationBatch.RUNNING)).thenReturn(true);
        assertThatThrownBy(() -> service.generate(plan(1)))
                .isInstanceOf(IllegalStateException.class)
                .hasMessageContaining("déjà en cours");
    }

    /** Même calcul que SalesService.postInvoice : Σ HT arrondis + TVA totale arrondie. */
    private long recomputeNet(List<PlannedLine> lines) {
        BigDecimal ht = BigDecimal.ZERO, tva = BigDecimal.ZERO;
        for (PlannedLine l : lines) {
            BigDecimal lineHt = l.getQuantity().multiply(l.getPrixUnitaire()).setScale(2, RoundingMode.HALF_UP);
            ht = ht.add(lineHt.setScale(0, RoundingMode.HALF_UP));
            tva = tva.add(lineHt.multiply(l.getTauxTVA()).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP));
        }
        return ht.add(tva.setScale(0, RoundingMode.HALF_UP)).longValue();
    }
}
