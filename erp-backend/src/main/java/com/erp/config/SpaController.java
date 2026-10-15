package com.erp.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Fallback controller for SPA routing.
 * All non-API routes are forwarded to index.html so the frontend router can handle them.
 * /media/** (polices et icônes du build Angular) est exclu : sinon "/{path}/**" renvoyait
 * index.html à la place des fichiers .woff2 et les icônes ne s'affichaient pas.
 */
@Controller
public class SpaController {

    @GetMapping(value = {
        "/",
        "/{path:^(?!api|actuator|media$)[^\\.]*$}",
        "/{path:^(?!api|actuator|media$)[^\\.]*$}/**"
    })
    public String forward() {
        return "forward:/index.html";
    }
}
