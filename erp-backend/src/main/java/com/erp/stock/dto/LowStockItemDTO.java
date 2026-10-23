package com.erp.stock.dto;

import java.math.BigDecimal;

/** Article stockable dont la quantité en stock (emplacements internes) est sous le seuil d'alerte. */
public record LowStockItemDTO(Long productId, String code, String name, BigDecimal quantity) {}
