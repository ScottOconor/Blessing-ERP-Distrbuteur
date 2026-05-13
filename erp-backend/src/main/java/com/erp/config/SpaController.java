package com.erp.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Fallback controller for SPA routing.
 * All non-API routes are forwarded to index.html so the frontend router can handle them.
 */
@Controller
public class SpaController {

    @GetMapping(value = {
        "/",
        "/{path:^(?!api|actuator)[^\\.]*$}",
        "/{path:^(?!api|actuator)[^\\.]*$}/**"
    })
    public String forward() {
        return "forward:/index.html";
    }
}
