package com.erp.stock.dto;

import lombok.Data;
import java.math.BigDecimal;
import java.util.List;

@Data
public class StockDetailedProductDTO {
    private String productCode;
    private String productName;
    private BigDecimal unitCost;
    private List<StockDetailedLocationDTO> locations;
}
