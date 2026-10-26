package com.erp.sync.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
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

    private final JdbcTemplate jdbc;

    public SpokeHealthController(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    /** « up » seulement si la base répond : l'état renvoyait « up » base arrêtée, trompant la
     *  supervision et le Hub. Base injoignable : HTTP 503, status et database « down ». */
    @GetMapping
    public ResponseEntity<Map<String, Object>> health() {
        boolean databaseUp;
        try {
            databaseUp = Integer.valueOf(1).equals(jdbc.queryForObject("SELECT 1", Integer.class));
        } catch (Exception e) {
            databaseUp = false;
        }
        Map<String, Object> body = Map.of(
            "status",    databaseUp ? "up" : "down",
            "database",  databaseUp ? "up" : "down",
            "spokeId",   spokeId,
            "spokeName", spokeName,
            "port",      serverPort,
            "timestamp", LocalDateTime.now().toString()
        );
        return databaseUp ? ResponseEntity.ok(body) : ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(body);
    }
}
