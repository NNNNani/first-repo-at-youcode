/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day06/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


const tableau={
    nom:["Anass","taha","khalide","younes","fati"] , 
    score:[80,61,52,30,48] 
}

function validercandidat(obj,key,key1){
    let tab=[] ; 
        for( let i=0;i<obj[key].length;i++){
        if (obj[key][i] > 51 ){
            // ana khadamt 3la 100 machi 10
            tab.push(obj[key1][i]) ; 
        }
    }
    return tab ;
}
console.log(validercandidat(tableau,"score","nom")) ; 