package com.erp.accounting.service;

import com.erp.accounting.entity.AccountAccount;
import com.erp.accounting.entity.AccountMoveLine;
import com.erp.accounting.repository.AccountMoveLineRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

/**
 * Grand livre sur une période : les soldes ne portent que sur les mouvements de la période
 * (solde = débit − crédit de la période), jamais sur l'historique antérieur à la date de début.
 */
@ExtendWith(MockitoExtension.class)
class ReportServiceGrandLivreTest {

    @Mock private AccountMoveLineRepository moveLineRepo;

    @InjectMocks
    private ReportService service;

    private static final LocalDate FROM = LocalDate.of(2026, 9, 1);
    private static final LocalDate TO   = LocalDate.of(2026, 9, 30);

    private final AccountAccount caisse = AccountAccount.builder().id(1L).code("571100").name("Caisse").build();

    private AccountMoveLine line(LocalDate date, String debit, String credit) {
        return AccountMoveLine.builder().account(caisse).date(date)
                .debit(new BigDecimal(debit)).credit(new BigDecimal(credit)).build();
    }

    @Test
    @SuppressWarnings("unchecked")
    void soldesLimitesALaPeriode() {
        // Avant la période : 1 000 000 au débit (ne doit pas entrer dans les soldes)
        when(moveLineRepo.findPostedBeforeDate(10L, FROM))
                .thenReturn(List.of(line(LocalDate.of(2026, 8, 15), "1000000", "0")));
        // Période : +50 000 puis −20 000
        when(moveLineRepo.findForGrandLivre(10L, FROM, TO, null)).thenReturn(List.of(
                line(LocalDate.of(2026, 9, 5), "50000", "0"),
                line(LocalDate.of(2026, 9, 20), "0", "20000")));

        Map<String, Object> result = service.getGrandLivre(FROM, TO, 10L, null);
        Map<String, Object> acc = (Map<String, Object>) ((Map<String, Object>) result.get("accounts")).get("571100");
        List<Map<String, Object>> lines = (List<Map<String, Object>>) acc.get("lines");

        assertThat((BigDecimal) acc.get("totalDebit")).isEqualByComparingTo("50000");
        assertThat((BigDecimal) acc.get("totalCredit")).isEqualByComparingTo("20000");
        // Solde de la période = 50 000 − 20 000, sans le 1 000 000 antérieur
        assertThat((BigDecimal) acc.get("finalBalance")).isEqualByComparingTo("30000");
        // Solde progressif : part de zéro
        assertThat((BigDecimal) lines.get(0).get("balance")).isEqualByComparingTo("50000");
        assertThat((BigDecimal) lines.get(1).get("balance")).isEqualByComparingTo("30000");
        // Le solde antérieur reste disponible à titre d'information
        assertThat((BigDecimal) acc.get("openingBalance")).isEqualByComparingTo("1000000");
    }
}
