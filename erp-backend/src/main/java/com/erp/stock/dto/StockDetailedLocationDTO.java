package com.erp.stock.dto;

import lombok.Data;
import java.math.BigDecimal;
import java.util.List;

@Data
public class StockDetailedLocationDTO {
    private String locationName;
    private BigDecimal initialQty;
    private BigDecimal initialValue;
    private List<StockDetailedMoveDTO> movements;
    private BigDecimal finalQty;
    private BigDecimal finalValue;
}
