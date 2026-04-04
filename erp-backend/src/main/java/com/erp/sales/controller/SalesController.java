package com.erp.sales.controller;

import com.erp.accounting.dto.PartnerDTO;
import com.erp.sales.dto.*;
import com.erp.sales.service.SalesService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sales")
@RequiredArgsConstructor
@Slf4j
public class SalesController {

    private final SalesService salesService;

    // ===================== BONS DE COMMANDE =====================

    @GetMapping("/orders")
    public ResponseEntity<List<SalesOrderDTO>> getOrders(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(salesService.getAllOrders(companyId));
    }

    @GetMapping("/orders/{id}")
    public ResponseEntity<SalesOrderDTO> getOrder(@PathVariable("id") Long id) {
        return ResponseEntity.ok(salesService.getOrderById(id));
    }

    @PostMapping("/orders")
    public ResponseEntity<SalesOrderDTO> createOrder(@RequestBody SalesOrderRequest request) {
        return ResponseEntity.ok(salesService.createOrder(request));
    }

    @PutMapping("/orders/{id}")
    public ResponseEntity<SalesOrderDTO> updateOrder(@PathVariable("id") Long id,
                                                      @RequestBody SalesOrderRequest request) {
        return ResponseEntity.ok(salesService.updateOrder(id, request));
    }

    @PostMapping("/orders/{id}/confirm")
    public ResponseEntity<SalesOrderDTO> confirmOrder(@PathVariable("id") Long id) {
        return ResponseEntity.ok(salesService.confirmOrder(id));
    }

    @PostMapping("/orders/{id}/cancel")
    public ResponseEntity<SalesOrderDTO> cancelOrder(@PathVariable("id") Long id) {
        return ResponseEntity.ok(salesService.cancelOrder(id));
    }

    // ===================== FACTURES =====================

    @GetMapping("/invoices")
    public ResponseEntity<List<SalesInvoiceDTO>> getInvoices(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(salesService.getAllInvoices(companyId));
    }

    @GetMapping("/invoices/{id}")
    public ResponseEntity<SalesInvoiceDTO> getInvoice(@PathVariable("id") Long id) {
        return ResponseEntity.ok(salesService.getInvoiceById(id));
    }

    @PostMapping("/invoices")
    public ResponseEntity<SalesInvoiceDTO> createInvoice(@RequestBody SalesInvoiceRequest request) {
        return ResponseEntity.ok(salesService.createInvoice(request));
    }

    @PutMapping("/invoices/{id}")
    public ResponseEntity<SalesInvoiceDTO> updateInvoice(@PathVariable("id") Long id,
                                                          @RequestBody SalesInvoiceRequest request) {
        return ResponseEntity.ok(salesService.updateInvoice(id, request));
    }

    @PostMapping("/invoices/{id}/post")
    public ResponseEntity<SalesInvoiceDTO> postInvoice(@PathVariable("id") Long id) {
        return ResponseEntity.ok(salesService.postInvoice(id));
    }

    @PostMapping("/invoices/{id}/cancel")
    public ResponseEntity<SalesInvoiceDTO> cancelInvoice(@PathVariable("id") Long id) {
        return ResponseEntity.ok(salesService.cancelInvoice(id));
    }

    // ===================== AVOIRS =====================

    @GetMapping("/avoirs")
    public ResponseEntity<List<SalesInvoiceDTO>> getAvoirs(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(salesService.getAllAvoirs(companyId));
    }

    @PostMapping("/invoices/{id}/avoir")
    public ResponseEntity<SalesInvoiceDTO> createAvoirFromInvoice(@PathVariable("id") Long id) {
        return ResponseEntity.ok(salesService.createAvoirFromInvoice(id));
    }

    @PostMapping("/avoirs")
    public ResponseEntity<SalesInvoiceDTO> createAvoirManuel(@RequestBody SalesInvoiceRequest request) {
        return ResponseEntity.ok(salesService.createAvoirManuel(request));
    }

    // ===================== PAIEMENTS =====================

    @GetMapping("/payments")
    public ResponseEntity<List<InvoicePaymentDTO>> getPayments(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(salesService.getAllPayments(companyId));
    }

    @GetMapping("/payments/invoice/{invoiceId}")
    public ResponseEntity<List<InvoicePaymentDTO>> getPaymentsByInvoice(@PathVariable("invoiceId") Long invoiceId) {
        return ResponseEntity.ok(salesService.getPaymentsByInvoice(invoiceId));
    }

    @PostMapping("/payments")
    public ResponseEntity<InvoicePaymentDTO> createPayment(@RequestBody InvoicePaymentRequest request) {
        return ResponseEntity.ok(salesService.createPayment(request));
    }

    // ===================== CLIENTS =====================

    @GetMapping("/clients")
    public ResponseEntity<List<PartnerDTO>> getClients(@RequestParam("companyId") Long companyId) {
        return ResponseEntity.ok(salesService.getClients(companyId));
    }

    @PostMapping("/clients")
    public ResponseEntity<PartnerDTO> createClient(@RequestBody PartnerDTO dto) {
        return ResponseEntity.ok(salesService.createClient(dto));
    }

    @PutMapping("/clients/{id}")
    public ResponseEntity<PartnerDTO> updateClient(@PathVariable("id") Long id, @RequestBody PartnerDTO dto) {
        return ResponseEntity.ok(salesService.updateClient(id, dto));
    }
}
