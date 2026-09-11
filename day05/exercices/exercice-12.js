/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * LE DÉDOUBLONNEUR
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction qui prend un tableau avec des doublons [1, 2, 2, 3, 4, 4, 5] et retourne un nouveau tableau sans doublons.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day05/exercices/exercice-12.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


const nombres = [1, 2, 2, 3, 4, 4, 5];

// #########################################
// rapide chwiya 

// function supprimerDoublons(tableau) {
//   return [...new Set(tableau)];
// }
// #########################################


function supprimerDoublons(tableau) {
  const r = [] ;
  for (let i = 0; i < tableau.length; i++) {
    if (!r.includes(tableau[i])) {
      r.push(tableau[i]) ;
    }

  }
  return r ;
}

console.log(supprimerDoublons(nombres)) ;



