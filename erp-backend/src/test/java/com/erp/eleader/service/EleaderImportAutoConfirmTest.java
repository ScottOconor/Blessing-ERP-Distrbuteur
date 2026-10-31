package com.erp.eleader.service;

import com.erp.eleader.dto.EleaderImportResultDTO;
import com.erp.eleader.entity.EleaderConfig;
import com.erp.eleader.repository.EleaderConfigRepository;
import com.erp.sales.service.SalesService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class EleaderImportAutoConfirmTest {

    @Mock private EleaderConfigRepository configRepo;
    @Mock private SalesService salesService;
    @InjectMocks private EleaderImportService service;

    private EleaderImportResultDTO imported() {
        return EleaderImportResultDTO.builder().success(true).salesOrderId(7L).salesOrderName("BC-2026-00007").build();
    }

    private void autoConfirmEnabled(boolean enabled) {
        EleaderConfig config = new EleaderConfig();
        config.setAutoConfirm(enabled);
        when(configRepo.findByCompanyId(1L)).thenReturn(Optional.of(config));
    }

    @Test
    void optionDesactiveeNeConfirmePas() {
        autoConfirmEnabled(false);

        service.autoConfirm(imported(), 1L);

        verify(salesService, never()).confirmOrder(anyLong());
    }

    @Test
    void stockInsuffisantLaisseLeBonEnBrouillonAvecAvertissement() {
        autoConfirmEnabled(true);
        when(salesService.confirmOrder(7L)).thenThrow(new IllegalStateException("Stock insuffisant"));

        EleaderImportResultDTO result = service.autoConfirm(imported(), 1L);

        assertThat(result.isSuccess()).isTrue();
        assertThat(result.getWarning()).contains("Stock insuffisant").contains("brouillon");
    }
}
