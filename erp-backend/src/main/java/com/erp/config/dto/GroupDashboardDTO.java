package com.erp.config.dto;

import lombok.*;
import java.math.BigDecimal;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class GroupDashboardDTO {

    private Long groupId;
    private String groupName;

    private List<CompanyStats> companies;

    // Totaux consolidés
    private BigDecimal totalCAToday;
    private long totalInvoicesToday;
    private BigDecimal totalDue;
    private BigDecimal totalCAMonth;

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class CompanyStats {
        private Long companyId;
        private String companyName;
        private String sigle;
        private BigDecimal caToday;
        private long invoicesToday;
        private BigDecimal dueAmount;
        private BigDecimal caMonth;
        private long invoicesMonth;
    }
}
