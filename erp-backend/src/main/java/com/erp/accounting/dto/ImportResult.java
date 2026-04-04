package com.erp.accounting.dto;

import lombok.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ImportResult {

    private int created;
    private int updated;
    private int skipped;

    @Builder.Default
    private List<String> errors = new ArrayList<>();

    private String message;

    public void addError(String error) {
        this.errors.add(error);
    }
}
