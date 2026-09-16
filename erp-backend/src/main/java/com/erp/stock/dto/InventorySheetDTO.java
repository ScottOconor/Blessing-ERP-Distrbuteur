package com.erp.stock.dto;

import lombok.Data;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
public class InventorySheetDTO {
    private Long   companyId;
    private String companyName;
    /** warehouseName → responsableName */
    private Map<String, String> warehouseResponsables = new HashMap<>();
    private String companySigle;
    private String companyAdresse;
    private String companyTelephone;
    private String companyRccm;
    private String companyNif;
    private String warehouseName;
    private String responsableName;
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
