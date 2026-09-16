package com.erp.config.permission;

public record PermissionRule(String method, String pattern, String module, String resource, String action) {}
