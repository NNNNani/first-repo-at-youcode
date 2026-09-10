/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * SIMULATION DE SCRAPING : EXTRACTION PAGINÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Imaginez que vous "scrappez" des pages web numérotées. Vous avez un totalItems = 45, et chaque page affiche 10 éléments. Écrivez une boucle while qui affiche : "Scraping page 1 (10 items)", "Scraping page 2 (10 items)", jusqu'à la dernière page ("Scraping page 5 (5 items)").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day02/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


let totalItems = 45 ;
// let affiche = 10 ; 
let page = 0 ; 


while ( totalItems > 0){
    if ( totalItems >= 10)
    {
        totalItems -= 10;
        page++;
        console.log(page, "=>", 10);
    }
    if (totalItems < 10) {
        page++;
        console.log(page, "=>", totalItems)
        totalItems = 0;
    }
}

// mazal mabkha ykhdam 
