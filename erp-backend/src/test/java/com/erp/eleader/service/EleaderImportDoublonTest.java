package com.erp.eleader.service;

import com.erp.common.entity.Company;
import com.erp.common.repository.CompanyRepository;
import com.erp.common.service.DocumentNumberLock;
import com.erp.eleader.dto.EleaderImportResultDTO;
import com.erp.eleader.repository.EleaderImportLogRepository;
import com.erp.eleader.service.EleaderPdfParserService.ParsedEleaderInvoice;
import com.erp.sales.entity.SalesOrder;
import com.erp.sales.repository.SalesOrderRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mock.web.MockMultipartFile;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 * Une facture eLeader dont le bon existe déjà (non annulé) ne doit pas être réimportée, même si
 * l'import d'origine est noté en erreur dans le journal (bon créé puis exception) — c'est ce qui
 * produisait des bons en double.
 */
@ExtendWith(MockitoExtension.class)
class EleaderImportDoublonTest {

    @Mock private EleaderPdfParserService parserService;
    @Mock private EleaderImportLogRepository logRepo;
    @Mock private SalesOrderRepository orderRepo;
    @Mock private CompanyRepository companyRepo;
    @Mock private DocumentNumberLock documentNumberLock;
    @InjectMocks private EleaderImportService service;

    @Test
    void factureDejaImporteeEstRefusee() throws Exception {
        when(companyRepo.findById(1L)).thenReturn(Optional.of(new Company()));
        when(logRepo.save(any())).thenAnswer(i -> i.getArgument(0));
        when(parserService.extractText(any())).thenReturn("texte");
        ParsedEleaderInvoice parsed = new ParsedEleaderInvoice();
        parsed.invoiceNumber = "DV-C5C52028/05584/26";
        parsed.invoiceModel = "BRASSERIES";
        when(parserService.parse(anyString(), anyString())).thenReturn(parsed);
        SalesOrder existant = SalesOrder.builder().id(5L).name("BC-2026-00005").state("draft").build();
        when(orderRepo.findActiveByEleaderReference(1L, "DV-C5C52028/05584/26")).thenReturn(List.of(existant));

        EleaderImportResultDTO result = service.importPdf(
                new MockMultipartFile("file", "akom.pdf", "application/pdf", new byte[]{1}), "BRASSERIES", 1L);

        assertThat(result.isSuccess()).isFalse();
        assertThat(result.getMessage()).contains("déjà été importée").contains("BC-2026-00005");
        verify(orderRepo, never()).save(any());
    }
}
