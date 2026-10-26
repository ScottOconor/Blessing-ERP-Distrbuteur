package com.erp.sync.service;

import com.erp.sync.dto.SpokeSnapshotPayload;
import com.erp.sync.repository.OutboxEventRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;

/**
 * Découpage du snapshot en parties : chaque partie sous la taille maximale, aucune perte ni doublon
 * ni changement d'ordre, indicateurs repris dans chaque partie, temps linéaire.
 */
class SnapshotSplitTest {

    private final ObjectMapper mapper = new ObjectMapper().registerModule(new JavaTimeModule());
    private final SyncEventPublisher publisher = new SyncEventPublisher(mock(OutboxEventRepository.class), mapper, mock(jakarta.persistence.EntityManager.class));

    private static SpokeSnapshotPayload snapshot(int invoices, int lines, int partners) {
        LocalDate d = LocalDate.of(2026, 10, 1);
        return SpokeSnapshotPayload.builder()
                .spokeId("SPOKE-TEST_1").spokeName("Test").caComptesTotal(new BigDecimal("123456.78"))
                .saleInvoices(new ArrayList<>(IntStream.range(0, invoices).mapToObj(i -> SpokeSnapshotPayload.SaleInvoiceItem.builder()
                        .id((long) i).name("FAC-2026-" + i).date(d).state("posted").type("invoice")
                        .partnerName("Client " + (i % 50)).totalHT(new BigDecimal(1000 + i)).build()).toList()))
                .accountMoveLines(new ArrayList<>(IntStream.range(0, lines).mapToObj(i -> SpokeSnapshotPayload.AccountMoveLineItem.builder()
                        .id((long) i).date(d).moveRef("VNT-2026-" + i).accountCode("411100").accountName("Clients")
                        .libelle("Ligne " + i).journalCode("VNT").debit(new BigDecimal(i)).credit(BigDecimal.ZERO).build()).toList()))
                .partners(new ArrayList<>(IntStream.range(0, partners).mapToObj(i -> SpokeSnapshotPayload.PartnerItem.builder()
                        .id((long) i).ref("CLI-" + i).name("Client " + i).type("customer").build()).toList()))
                .build();
    }

    @Test
    void partiesSousLaLimiteSansPerteNiDoublonNiChangementDOrdre() throws Exception {
        SpokeSnapshotPayload s = snapshot(3_000, 8_000, 500);
        int max = 200_000;
        List<SpokeSnapshotPayload> parts = publisher.splitSnapshotBySize(s, max);

        assertThat(parts).hasSizeGreaterThan(1);
        for (SpokeSnapshotPayload p : parts) {
            assertThat(mapper.writeValueAsBytes(p).length).isLessThanOrEqualTo(max);
            assertThat(p.getSpokeId()).isEqualTo("SPOKE-TEST_1");
            assertThat(p.getCaComptesTotal()).isEqualByComparingTo("123456.78");
        }
        assertThat(parts.stream().flatMap(p -> p.getSaleInvoices().stream()).toList()).isEqualTo(s.getSaleInvoices());
        assertThat(parts.stream().flatMap(p -> p.getAccountMoveLines().stream()).toList()).isEqualTo(s.getAccountMoveLines());
        assertThat(parts.stream().flatMap(p -> p.getPartners().stream()).toList()).isEqualTo(s.getPartners());
    }

    @Test
    void snapshotSansListeDonneUnePartieUnique() throws Exception {
        List<SpokeSnapshotPayload> parts = publisher.splitSnapshotBySize(snapshot(0, 0, 0), 200_000);
        assertThat(parts).hasSize(1);
        assertThat(parts.get(0).getCaComptesTotal()).isEqualByComparingTo("123456.78");
    }

    @Test
    void centMilleElementsDecoupesEnQuelquesSecondes() throws Exception {
        SpokeSnapshotPayload s = snapshot(20_000, 80_000, 1_000);
        long t0 = System.nanoTime();
        List<SpokeSnapshotPayload> parts = publisher.splitSnapshotBySize(s, 8 * 1024 * 1024);
        long ms = (System.nanoTime() - t0) / 1_000_000;

        assertThat(parts.stream().mapToInt(p -> p.getAccountMoveLines().size()).sum()).isEqualTo(80_000);
        assertThat(ms).as("durée du découpage (ms)").isLessThan(10_000);
    }
}
