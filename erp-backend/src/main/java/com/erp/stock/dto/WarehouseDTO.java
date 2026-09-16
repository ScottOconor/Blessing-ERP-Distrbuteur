package com.erp.stock.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import java.util.List;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class WarehouseDTO {
    private Long id;
    private String name;
    private String code;
    private Long stockLocationId;
    private String stockLocationName;
    private Long stockJournalId;
    private String stockJournalName;
    /** Journal de vente pré-chargé sur les bons de commande */
    private Long salesJournalId;
    private String salesJournalName;
    /** Journal de caisse/banque pré-chargé sur les paiements */
    private Long cashJournalId;
    private String cashJournalName;
    /** Entrepôt Dépôt Achat — zone de transit des marchandises achetées en attente de réception physique */
    private Long depotAchatWarehouseId;
    private String depotAchatWarehouseName;
    /** Entrepôt Avaries — reçoit les reliquats lors de la réception */
    private Long avarWarehouseId;
    private String avarWarehouseName;
    private Long companyId;
    private boolean active;
    private boolean isDefault;
    private String responsableName;
    private List<StockLocationDTO> locations;

    /** Getter explicite annoté : sans ça Jackson exposerait la clé JSON "default"
     *  (getter Lombok isDefault() → propriété "default"), alors que le frontend lit
     *  w.isDefault → undefined, d'où le mauvais magasin par défaut sélectionné. */
    @JsonProperty("isDefault")
    public boolean isDefault() {
        return isDefault;
    }
}
