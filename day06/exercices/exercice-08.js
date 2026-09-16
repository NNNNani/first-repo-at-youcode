/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day06/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

'use strict';

let tableau = [
    { nom: "Anass", score: 11 },
    { nom: "Nani", score: 99 },
    { nom: "Nano", score: 88 } ] ;

function meilleurCandidat(liste) {
    let meilleur = liste[0] ;

    for (let i = 1; i < liste.length; i++) {
        if (liste[i].score > meilleur.score) {
            meilleur = liste[i] ; 
        }
    }
    return meilleur.nom ; 
}

console.log(meilleurCandidat(tableau)) ;