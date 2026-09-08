/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * ANNÉE BISSEXTILE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Une année est bissextile si elle est divisible par 4 MAIS pas par 100, OU BIEN si elle est divisible par 400. Déclarez annee = 2024. Écrivez la condition et affichez un message.
 *
 * RÉSULTAT ATTENDU
 * 2024 est une année bissextile.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day01/exercices/exercice-12.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


const anee = 2000 ;
let bissextile = false ;

if ( anee % 400 === 0 ) {
    bissextile = true ;
}else if ( anee % 100 === 0 ) {
    bissextile = false ;
}else if ( anee % 4 === 0) {
    bissextile = true ;
}
if (bissextile) {
    console.log(`${anee} est une année bissextile.`);
}else {
    console.log(`${anee} n'est pas une année bissextile.`);
}