package com.erp.sync.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
@RequestMapping("/api/health")
public class SpokeHealthController {

    @Value("${sync.spoke.id:SPOKE}")   private String spokeId;
    @Value("${sync.spoke.name:Blessing ERP Spoke}") private String spokeName;
    @Value("${server.port:8085}")      private int    serverPort;

    @GetMapping
    public ResponseEntity<Map<String, Object>> health() {
        return ResponseEntity.ok(Map.of(
            "status",    "up",
            "spokeId",   spokeId,
            "spokeName", spokeName,
            "port",      serverPort,
            "timestamp", LocalDateTime.now().toString()
        ));
    }
}
