package com.erp.sync.service;

import com.erp.sync.dto.SpokeSnapshotPayload;
import com.erp.sync.entity.OutboxEvent;
import com.erp.sync.repository.OutboxEventRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.test.util.ReflectionTestUtils;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.atLeastOnce;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

/** Le découpage du snapshot doit rester sous la taille max par partie sans perdre aucun élément. */
class SyncEventPublisherSnapshotSplitTest {

    private final ObjectMapper mapper = new ObjectMapper()
            .registerModule(new JavaTimeModule())
            .disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);

    @Test
    void splitsLargeSnapshotIntoPartsUnderMaxSizeWithoutLosingItems() throws Exception {
        OutboxEventRepository repo = mock(OutboxEventRepository.class);
        SyncEventPublisher publisher = new SyncEventPublisher(repo, mapper, mock(EntityManager.class));
        ReflectionTestUtils.setField(publisher, "spokeId", "SPOKE_TEST");
        int maxBytes = 64 * 1024;
        ReflectionTestUtils.setField(publisher, "snapshotPartBytes", maxBytes);

        List<SpokeSnapshotPayload.AccountMoveLineItem> lines = IntStream.range(0, 5000)
                .mapToObj(i -> SpokeSnapshotPayload.AccountMoveLineItem.builder()
                        .id((long) i).date(LocalDate.of(2026, 10, 1)).moveRef("VNT-2026-" + i)
                        .accountCode("701100").libelle("Ligne " + i)
                        .debit(BigDecimal.TEN).credit(BigDecimal.ZERO).build())
                .toList();
        SpokeSnapshotPayload snapshot = SpokeSnapshotPayload.builder()
                .spokeId("SPOKE_TEST_1")
                .accountMoveLines(new ArrayList<>(lines))
                .build();

        publisher.publishSnapshot(snapshot);

        ArgumentCaptor<OutboxEvent> saved = ArgumentCaptor.forClass(OutboxEvent.class);
        verify(repo, atLeastOnce()).save(saved.capture());
        List<OutboxEvent> parts = saved.getAllValues();
        assertThat(parts).hasSizeGreaterThan(1);

        List<Long> ids = new ArrayList<>();
        for (OutboxEvent e : parts) {
            assertThat(e.getPayload().getBytes(java.nio.charset.StandardCharsets.UTF_8).length)
                    .isLessThanOrEqualTo(maxBytes);
            JsonNode part = mapper.readTree(e.getPayload());
            assertThat(part.get("spokeId").asText()).isEqualTo("SPOKE_TEST_1");
            part.get("accountMoveLines").forEach(l -> ids.add(l.get("id").asLong()));
        }
        assertThat(ids).containsExactlyElementsOf(lines.stream().map(SpokeSnapshotPayload.AccountMoveLineItem::getId).toList());
    }
}
