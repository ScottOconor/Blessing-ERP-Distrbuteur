package com.erp.common.service;

import org.junit.jupiter.api.Test;

import java.nio.charset.StandardCharsets;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

/** Le type d'une image vient de son contenu, jamais de ce qu'annonce le navigateur. */
class ImageFilesTest {

    private static byte[] bytes(String s) {
        return s.getBytes(StandardCharsets.UTF_8);
    }

    @Test
    void imagesReconnuesParLeurContenu() {
        assertThat(ImageFiles.detectType(new byte[]{(byte) 0x89, 'P', 'N', 'G', '\r', '\n', 0x1A, '\n', 0})).isEqualTo("image/png");
        assertThat(ImageFiles.detectType(new byte[]{(byte) 0xFF, (byte) 0xD8, (byte) 0xFF, (byte) 0xE0})).isEqualTo("image/jpeg");
        assertThat(ImageFiles.detectType(bytes("GIF89a..."))).isEqualTo("image/gif");
        assertThat(ImageFiles.detectType(bytes("RIFF\0\0\0\0WEBPVP8 "))).isEqualTo("image/webp");
        assertThat(ImageFiles.detectType(bytes("﻿<?xml version=\"1.0\"?>\n<!-- logo -->\n<svg xmlns=\"http://www.w3.org/2000/svg\"/>")))
                .isEqualTo("image/svg+xml");
    }

    @Test
    void autresContenusRefuses() {
        for (String content : new String[]{"<html><body>x</body></html>", "<!DOCTYPE html><svg/>", "texte", "%PDF-1.7"}) {
            assertThatThrownBy(() -> ImageFiles.detectType(bytes(content))).as(content)
                    .isInstanceOf(IllegalArgumentException.class);
        }
        assertThatThrownBy(() -> ImageFiles.detectType(new byte[(int) ImageFiles.MAX_BYTES + 1]))
                .isInstanceOf(IllegalArgumentException.class);
    }

    @Test
    void typeEnregistreHorsListeServiEnTelechargement() {
        assertThat(ImageFiles.servedType("text/html")).isEqualTo("application/octet-stream");
        assertThat(ImageFiles.servedType("image/svg+xml")).isEqualTo("image/svg+xml");
        assertThat(ImageFiles.servedType(null)).isEqualTo("image/png");
    }
}
