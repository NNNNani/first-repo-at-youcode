/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * RECHERCHE BINAIRE (CONCEPT DE BASE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Contrairement à la recherche linéaire (parcourir tout le tableau un par un), la recherche binaire cherche un élément dans un tableau TRIÉ en coupant l'espace de recherche en deux à chaque fois. Essayez de comprendre et d'implémenter ce concept pour trouver l'index de 45 dans [10, 20, 30, 40, 45, 50, 60].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day05/exercices/exercice-19.js
 */
'use strict';



const t = [10, 20, 30, 40, 45, 50, 60] ; 
let g = 0 ;
let d = t.length - 1 ;

while (g <= d) {
  const m = Math.floor(( g + d) / 2) ;

  if(t[m] == 45) {
    console.log(m) ;
    break ;
  }

  if (t[m] <= 45) {
    g = m + 1 ;

  }else{
    d = m   ;
  }
}

