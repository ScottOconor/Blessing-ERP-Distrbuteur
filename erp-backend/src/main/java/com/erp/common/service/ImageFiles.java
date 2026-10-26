package com.erp.common.service;

import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.Set;

/**
 * Logos et photos d'articles sont servis sans authentification (balises <img>) avec le type
 * enregistré à l'envoi. Ce type était celui annoncé par le navigateur : un fichier HTML déclaré
 * comme tel était ensuite servi tel quel depuis le domaine de l'ERP (script exécuté chez quiconque
 * ouvrait le lien). Le type est désormais déduit du contenu (PNG, JPEG, GIF, WebP, SVG), et les
 * réponses portent CONTENT_SECURITY_POLICY : un SVG ouvert directement ne peut exécuter aucun script.
 */
public final class ImageFiles {

    public static final long MAX_BYTES = 5L * 1024 * 1024;

    private static final Set<String> SERVABLE =
            Set.of("image/png", "image/jpeg", "image/gif", "image/webp", "image/svg+xml");

    /** À joindre à toute réponse servant une image enregistrée (logos, photos d'articles). */
    public static final String CONTENT_SECURITY_POLICY =
            "default-src 'none'; style-src 'unsafe-inline'; img-src data:; sandbox";

    private ImageFiles() {}

    /** Type MIME déduit de la signature du fichier ; IllegalArgumentException (→ 400) sinon. */
    public static String detectType(byte[] data) {
        if (data == null || data.length == 0) throw new IllegalArgumentException("Fichier vide");
        if (data.length > MAX_BYTES) throw new IllegalArgumentException("Image trop volumineuse (5 Mo maximum)");
        if (startsWith(data, new byte[]{(byte) 0x89, 'P', 'N', 'G', '\r', '\n', 0x1A, '\n'})) return "image/png";
        if (startsWith(data, new byte[]{(byte) 0xFF, (byte) 0xD8, (byte) 0xFF})) return "image/jpeg";
        if (startsWith(data, ascii("GIF87a")) || startsWith(data, ascii("GIF89a"))) return "image/gif";
        if (data.length >= 12 && startsWith(data, ascii("RIFF"))
                && Arrays.equals(Arrays.copyOfRange(data, 8, 12), ascii("WEBP"))) return "image/webp";
        if (isSvg(data)) return "image/svg+xml";
        throw new IllegalArgumentException("Format d'image non accepté (PNG, JPEG, GIF, WebP ou SVG)");
    }

    /** Type à renvoyer pour une image déjà enregistrée : tout type hors liste part en téléchargement. */
    public static String servedType(String storedType) {
        if (storedType == null) return "image/png";
        return SERVABLE.contains(storedType.toLowerCase()) ? storedType : "application/octet-stream";
    }

    /** Document XML dont l'élément racine est <svg> (prologue XML, commentaires, DOCTYPE admis). */
    private static boolean isSvg(byte[] data) {
        String head = new String(data, 0, Math.min(data.length, 4096), StandardCharsets.UTF_8)
                .replace("\uFEFF", "").stripLeading();
        if (!head.startsWith("<")) return false;
        String rest = head.replaceAll("(?s)^(<\\?xml.*?\\?>|<!--.*?-->|<!DOCTYPE svg[^>]*>|\\s)+", "");
        return rest.startsWith("<svg");
    }

    private static boolean startsWith(byte[] data, byte[] prefix) {
        return data.length >= prefix.length && Arrays.equals(Arrays.copyOf(data, prefix.length), prefix);
    }

    private static byte[] ascii(String s) {
        return s.getBytes(StandardCharsets.US_ASCII);
    }
}
