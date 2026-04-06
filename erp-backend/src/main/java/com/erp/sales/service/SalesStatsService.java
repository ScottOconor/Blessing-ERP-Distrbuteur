package com.erp.sales.service;

import com.erp.sales.dto.*;
import com.erp.sales.entity.SalesInvoiceLine;
import com.erp.sales.repository.SalesInvoiceLineRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SalesStatsService {

    private final SalesInvoiceLineRepository lineRepo;
    private static final BigDecimal ZERO = BigDecimal.ZERO;

    public SalesStatsResponse getStats(SalesStatsRequest req) {
        List<SalesInvoiceLine> lines = lineRepo.findStatsLines(
            req.getCompanyId(), req.getDateFrom(), req.getDateTo()
        );

        // Group by partner name
        Map<String, List<SalesInvoiceLine>> byPartner = new LinkedHashMap<>();
        for (SalesInvoiceLine line : lines) {
            String partnerName = line.getInvoice().getPartner().getName();
            byPartner.computeIfAbsent(partnerName, k -> new ArrayList<>()).add(line);
        }

        List<SalesStatsClient> clients = new ArrayList<>();
        BigDecimal grandQty = ZERO, grandHT = ZERO, grandTTC = ZERO, grandRemise = ZERO;

        // Sort partners by name
        List<Map.Entry<String, List<SalesInvoiceLine>>> sortedPartners =
            byPartner.entrySet().stream()
                .sorted(Map.Entry.comparingByKey())
                .collect(Collectors.toList());

        for (Map.Entry<String, List<SalesInvoiceLine>> entry : sortedPartners) {
            String clientName = entry.getKey();
            List<SalesInvoiceLine> clientLines = entry.getValue();

            // Group by product key (code if available, else description)
            Map<String, List<SalesInvoiceLine>> byProduct = new LinkedHashMap<>();
            for (SalesInvoiceLine l : clientLines) {
                String key = (l.getProductCode() != null && !l.getProductCode().isBlank())
                    ? l.getProductCode()
                    : l.getDescription();
                byProduct.computeIfAbsent(key, k -> new ArrayList<>()).add(l);
            }

            List<SalesStatsLine> statsLines = new ArrayList<>();
            BigDecimal clientQty = ZERO, clientHT = ZERO, clientTTC = ZERO, clientRemise = ZERO;

            // Sort by description
            List<Map.Entry<String, List<SalesInvoiceLine>>> sortedProducts =
                byProduct.entrySet().stream()
                    .sorted(Comparator.comparing(e -> e.getValue().get(0).getDescription() != null
                        ? e.getValue().get(0).getDescription() : ""))
                    .collect(Collectors.toList());

            for (Map.Entry<String, List<SalesInvoiceLine>> pe : sortedProducts) {
                List<SalesInvoiceLine> pLines = pe.getValue();

                BigDecimal qty = pLines.stream()
                    .map(l -> l.getQuantity() != null ? l.getQuantity() : ZERO)
                    .reduce(ZERO, BigDecimal::add);
                BigDecimal ht = pLines.stream()
                    .map(l -> l.getMontantHT() != null ? l.getMontantHT() : ZERO)
                    .reduce(ZERO, BigDecimal::add);
                BigDecimal ttc = pLines.stream()
                    .map(l -> l.getMontantTTC() != null ? l.getMontantTTC() : ZERO)
                    .reduce(ZERO, BigDecimal::add);
                BigDecimal remise = pLines.stream()
                    .map(l -> {
                        if (l.getMontantHT() != null && l.getTauxRemise() != null
                                && l.getTauxRemise().compareTo(ZERO) > 0) {
                            return l.getMontantHT()
                                .multiply(l.getTauxRemise())
                                .divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
                        }
                        return ZERO;
                    })
                    .reduce(ZERO, BigDecimal::add);
                BigDecimal prixMoyen = qty.compareTo(ZERO) > 0
                    ? ht.divide(qty, 2, RoundingMode.HALF_UP)
                    : ZERO;

                statsLines.add(SalesStatsLine.builder()
                    .productCode(pLines.get(0).getProductCode())
                    .productName(pLines.get(0).getDescription())
                    .qty(qty.setScale(2, RoundingMode.HALF_UP))
                    .prixMoyen(prixMoyen)
                    .montantHT(ht.setScale(2, RoundingMode.HALF_UP))
                    .montantTTC(ttc.setScale(2, RoundingMode.HALF_UP))
                    .remise(remise.setScale(2, RoundingMode.HALF_UP))
                    .build());

                clientQty = clientQty.add(qty);
                clientHT = clientHT.add(ht);
                clientTTC = clientTTC.add(ttc);
                clientRemise = clientRemise.add(remise);
            }

            String clientRef = clientLines.get(0).getInvoice().getPartner().getRef();

            clients.add(SalesStatsClient.builder()
                .clientName(clientName)
                .clientRef(clientRef)
                .lines(statsLines)
                .totalQty(clientQty.setScale(2, RoundingMode.HALF_UP))
                .totalHT(clientHT.setScale(2, RoundingMode.HALF_UP))
                .totalTTC(clientTTC.setScale(2, RoundingMode.HALF_UP))
                .totalRemise(clientRemise.setScale(2, RoundingMode.HALF_UP))
                .build());

            grandQty = grandQty.add(clientQty);
            grandHT = grandHT.add(clientHT);
            grandTTC = grandTTC.add(clientTTC);
            grandRemise = grandRemise.add(clientRemise);
        }

        // Count distinct invoices
        int nbInvoices = (int) lines.stream()
            .map(l -> l.getInvoice().getId())
            .distinct().count();

        return SalesStatsResponse.builder()
            .dateFrom(req.getDateFrom())
            .dateTo(req.getDateTo())
            .clients(clients)
            .grandTotalQty(grandQty.setScale(2, RoundingMode.HALF_UP))
            .grandTotalHT(grandHT.setScale(2, RoundingMode.HALF_UP))
            .grandTotalTTC(grandTTC.setScale(2, RoundingMode.HALF_UP))
            .grandTotalRemise(grandRemise.setScale(2, RoundingMode.HALF_UP))
            .totalInvoices(nbInvoices)
            .build();
    }
}
