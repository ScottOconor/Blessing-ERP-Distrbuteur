package com.erp.stock.dto;

import lombok.Data;
import java.math.BigDecimal;
import java.util.List;

@Data
public class StockReportWarehouseDTO {
    private String warehouseName;
    private List<StockReportLineDTO> lines;
    private BigDecimal totalInitialQty;
    private BigDecimal totalInQty;
    private BigDecimal totalOutQty;
    private BigDecimal totalFinalQty;
    private BigDecimal totalInitialValue;
    private BigDecimal totalInValue;
    private BigDecimal totalOutValue;
    private BigDecimal totalFinalValue;
}
