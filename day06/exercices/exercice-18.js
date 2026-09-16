/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPARAISON D'OBJETS (DEEP EQUAL CONCEPT)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction sontIdentiques(obj1, obj2) qui vérifie si deux objets littéraux (sans objets imbriqués) ont exactement les mêmes clés et les mêmes valeurs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day06/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


function sontIdentiques(obj1, obj2) {
    let t1 = Object.keys(obj1) ;
    let t2 = Object.keys(obj2) ;

    if (t1.length !== t2.length) {
        return false;
    }
    for (let i = 0; i < t1.length; i++) {
        let key = t1[i] ; 

        if (obj1[key] !== obj2[key]) {
            return false ;
        }
    }
    return true ; 
}

console.log("Test 1 (Identiques) :", 
    sontIdentiques({ nom: "Anass", age: 23 }, { nom: "Anass", age: 23 })
); 