package com.erp.stock.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class StockReportLineDTO {
    private Long productId;
    private String productCode;
    private String productName;
    private String uomName;
    private BigDecimal initialQty;
    private BigDecimal inQty;
    private BigDecimal outQty;
    private BigDecimal finalQty;
    private BigDecimal unitCost;
    private BigDecimal initialValue;
    private BigDecimal inValue;
    private BigDecimal outValue;
    private BigDecimal finalValue;
}
