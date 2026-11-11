package com.erp.accounting.service;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.assertj.core.api.Assertions.assertThat;

/** Type de compte importé : libellés français libres, puis classe OHADA, jamais « other » par défaut. */
class ImportAccountTypeTest {

    @ParameterizedTest
    @CsvSource({
        "Capitaux propres,101100,equity,other",
        "CAPITAUX   PROPRES,101100,equity,other",
        "Immobilisations,211000,asset,other",
        "Actifs immobilisés,211000,asset,other",
        "Passif circulant,421000,liability,other",
        "Dettes fournisseurs,401100,liability,payable",
        "Dettes,401100,liability,payable",
        "Dettes fiscales,441000,liability,other",
        "Créances,411100,asset,receivable",
        "Autres créances,461000,asset,other",
        "Recevable,411100,asset,receivable",
        "Trésorerie et équivalents,521000,asset,liquidity",
        "Notes de frais,601100,expense,other",
        "Charges d'exploitation,601100,expense,other",
        "Revenus,701100,income,other",
        "Produits des activités,701100,income,other",
        "Comptes spéciaux,901000,off_balance,other",
        "off_balance,901000,off_balance,other",
    })
    void frenchLabelsAreRecognized(String label, String code, String type, String internal) {
        assertThat(ImportService.mapAccountType(label, code)).containsExactly(type, internal);
    }

    @ParameterizedTest
    @CsvSource({
        "101100,equity,other", "162000,liability,other", "211000,asset,other", "311000,asset,other",
        "401100,liability,payable", "411100,asset,receivable", "431000,liability,other",
        "521000,asset,liquidity", "571000,asset,liquidity", "601100,expense,other", "701100,income,other",
        "811000,expense,other", "821000,income,other", "901000,off_balance,other",
    })
    void unknownOrMissingLabelFallsBackOnOhadaClass(String code, String type, String internal) {
        assertThat(ImportService.mapAccountType("", code)).containsExactly(type, internal);
        assertThat(ImportService.mapAccountType("Type inconnu", code)).containsExactly(type, internal);
    }

    @Test
    void nonBreakingSpaceIsIgnored() {
        assertThat(ImportService.mapAccountType("Capitaux propres", "101100")).containsExactly("equity", "other");
    }

    @Test
    void onlyAnUnidentifiableAccountStaysOther() {
        assertThat(ImportService.mapAccountType("", "ABC")).containsExactly("other", "other");
    }
}
