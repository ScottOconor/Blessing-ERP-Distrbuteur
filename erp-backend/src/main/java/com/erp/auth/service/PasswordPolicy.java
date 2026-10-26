package com.erp.auth.service;

/**
 * Règles communes à tout mot de passe choisi (création, modification par un administrateur,
 * changement par l'utilisateur). Auparavant : aucune règle à la création, 6 caractères au
 * changement. Les mots de passe déjà enregistrés ne sont pas remis en cause.
 */
public final class PasswordPolicy {

    public static final int MIN_LENGTH = 8;

    private PasswordPolicy() {}

    /** Lève IllegalArgumentException (→ 400) avec un message affichable. */
    public static void validate(String password, String username) {
        if (password == null || password.length() < MIN_LENGTH) {
            throw new IllegalArgumentException("Le mot de passe doit contenir au moins " + MIN_LENGTH + " caractères");
        }
        if (password.chars().noneMatch(Character::isLetter) || password.chars().noneMatch(Character::isDigit)) {
            throw new IllegalArgumentException("Le mot de passe doit contenir au moins une lettre et un chiffre");
        }
        if (username != null && password.equalsIgnoreCase(username.trim())) {
            throw new IllegalArgumentException("Le mot de passe ne doit pas être identique au nom d'utilisateur");
        }
    }
}
