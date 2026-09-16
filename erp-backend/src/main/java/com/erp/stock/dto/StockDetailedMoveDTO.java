package com.erp.stock.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class StockDetailedMoveDTO {
    private String date;
    private String ref;
    private String partner;
    private BigDecimal qtyIn;
    private BigDecimal qtyOut;
    private BigDecimal qtyBalance;
    private BigDecimal valueBalance;
}
