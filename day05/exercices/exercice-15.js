/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * FUSION TRIÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez deux tableaux DÉJÀ triés : [1, 3, 5] et [2, 4, 6]. Écrivez un algorithme pour les fusionner en un seul tableau trié [1, 2, 3, 4, 5, 6] (sans utiliser .sort()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day05/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


const a = [1, 3, 5] ; 
const b = [2, 4, 6] ;
const f =  [] ;

let i  = 0 ;
let j  =  0 ;

while (i < a.length || j < b.length) {

    if ( b[j] == undefined  || a [i] <  b[j]) { 
        f.push(a[i]) ;
    i++ ;
    } else {
    f.push(b[j]) ;
    j++ ;
  }
}
//######################################################
// hna kant khadam b 3 dyal while  khatasartha b       #
                                                     //#
// while (i < a.length || j < b.length) {              #
                                                   //  #
//     if ( b[j] == undefined  || a [i] <  b[j]) {     #
                                                     //#
// while (i < a.length) {                              #
//   f.push(a[i]) ;                                    #
//   i++ ;
// }                                 

// while (j < b.length) {                              #
//   f.push(b[j]) ;                                    #
//   j++ ;                                             #
// }                                                   #
//#######################################################

console.log(f) ;
