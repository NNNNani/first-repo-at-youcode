/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * LE CHIFFRE DE CÉSAR (CRYPTOGRAPHIE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction chiffrerCesar(texte, decalage) qui décale chaque lettre de l'alphabet. Par exemple, 
 * avec un décalage de 1, "ABC" devient "BCD".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day04/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function chiffrerCesar(texte, decalage) {
    let r = " " ;

    for ( let i = 0; i < texte.length; i++ ) {
        let code = texte.charCodeAt(i) ;
        let n = code + decalage ;

        if (n > 90) {
            n = n - 26 ;
        }
        r += String.fromCharCode(n) ;
    }
    return r ;
}

console.log(chiffrerCesar("ABC", 0)) ; 
console.log(chiffrerCesar("ABC", 2)) ; 