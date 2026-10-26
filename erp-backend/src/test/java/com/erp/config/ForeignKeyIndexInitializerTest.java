package com.erp.config;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class ForeignKeyIndexInitializerTest {

    @Test
    void nomDIndexLisibleEtDansLaLimitePostgreSQL() {
        assertThat(ForeignKeyIndexInitializer.indexName("account_move_lines", "partner_id"))
                .isEqualTo("idx_fk_account_move_lines_partner_id");
        String longName = ForeignKeyIndexInitializer.indexName("purchase_invoice_reconciliations_history", "original_credit_note_invoice_id");
        assertThat(longName).hasSizeLessThanOrEqualTo(63).startsWith("idx_fk_purchase_invoice");
        assertThat(longName).isNotEqualTo(ForeignKeyIndexInitializer.indexName("purchase_invoice_reconciliations_history", "original_credit_note_invoice_ix"));
    }
}
