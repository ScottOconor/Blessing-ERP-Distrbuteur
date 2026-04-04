package com.erp.stock.dto;

import lombok.*;
import java.math.BigDecimal;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class StockDashboardDTO {
    private long nbProducts;
    private long nbWarehouses;
    private BigDecimal totalStockValue;
    private long nbReceptionsDraft;
    private long nbReceptionsDone;
    private long nbLivraisons;
    private long nbTransferts;
    private long nbTransfertsDone;
}
