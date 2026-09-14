/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * MAXIMUM DE TROIS NOMBRES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Sans utiliser Math.max(), écrivez une fonction trouverMax(a, b, c) qui retourne le plus grand des trois nombres en utilisant des conditions if/else.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day03/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


function trouverMax(a, b, c) {
  if ( a >=  b  &&  a  >= c ) {
    return a ;
  } else if (b  >=  a && b >= c ) {
    return b ;
  } else {
    return c ;
  }
}


console.log(trouverMax( 10,  5,  8 )) ;  
console.log(trouverMax(3 ,  12 ,  4)) ;  
console.log(trouverMax(1 , 7,  20)) ;  
console.log(trouverMax(  5 , 5 ,  2)) ;