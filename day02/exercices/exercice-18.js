/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * CONJECTURE DE SYRACUSE (COLLATZ)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Prenez N = 15.
 * - Si N est pair, on le divise par 2.
 * - Si N est impair, on le multiplie par 3 et on ajoute 1.
 * Répétez jusqu'à ce que N vaille 1. Comptez le nombre d'étapes (itérations) nécessaires pour arriver à 1.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day02/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


let N = 15 ;
let E = 0 ;

while ( N != 1 ){
    if ( N %2  == 0 ){
        N = N /2 ;
    }else {
        N = N * 3 + 1 ; 
    }
    E++ ;
}
console.log(E);






// let n = 15;
// let etapes = 0;

// while (n !== 1) {
//     if (n % 2 === 0) {
//         n = n / 2;     // زوجي: قسمة على 2
//     } else {
//         n = n * 3 + 1; // فردي: ضرب فـ 3 وتزيد 1
//     }
//     etapes++;          // حساب عدد الخطوات
// }

// console.log(etapes);