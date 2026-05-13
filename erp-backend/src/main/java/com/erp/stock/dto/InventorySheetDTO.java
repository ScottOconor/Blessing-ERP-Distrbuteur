package com.erp.stock.dto;

import lombok.Data;
import java.util.List;

@Data
public class InventorySheetDTO {
    private String companyName;
    private String date;
    private List<LineDTO> lines;

    @Data
    public static class LineDTO {
        private String productCode;
        private String productName;
        private String locationName;
        private String uomName;
        private Double systemQty;
        private Double countedQty;
        private Double diff;
        private Double unitCost;
        private Double valueDiff;
    }
}
