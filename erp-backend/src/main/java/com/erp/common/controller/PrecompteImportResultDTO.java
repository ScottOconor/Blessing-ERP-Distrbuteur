package com.erp.common.controller;

import lombok.Data;

import java.util.List;

@Data
public class PrecompteImportResultDTO {
    private boolean success;
    private String message;
    // champs compat ImportResult frontend
    private int created;
    private int updated;
    private int skipped;
    // alias legacy
    private int processed;
    private int upserted;
    private List<String> errors;
    private List<String> warnings;
}
