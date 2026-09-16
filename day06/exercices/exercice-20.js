/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * DEEP COPY VS SHALLOW COPY
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet contenant un autre objet imbriqué. Clonez-le avec le Spread operator (...). Montrez (avec console.log) que modifier l'objet imbriqué dans la copie modifie AUSSI l'original. Expliquez pourquoi en commentaire, et donnez la solution moderne (ex: structuredClone ou JSON parse/stringify).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day06/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


// const original = {
//     nom: "Aissa",
//     infos: { ville: "Rabat", age: 21 }
// } ;

// const copie = { ...original } ;

// copie.infos.ville = "Casablanca" ;

// console.log("Original :", original.infos.ville) ;
// console.log("Copie    :", copie.infos.ville) ;    

// const vraieCopie1 = structuredClone(original) ;
// vraieCopie1.infos.ville = "Tanger" ;

// console.log("Après structuredClone -> Original :", original.infos.ville) ; 
// console.log("Après structuredClone -> Vraie Copie :", vraieCopie1.infos.ville) ; 

// const vraieCopie2 = JSON.parse(JSON.stringify(original)) ;


const original = {
    nom: "Aissa",
    infos: { ville: "Rabat", age: 21 }
} ;

const copie = { ...original } ;
copie.infos.ville = "Casablanca" ;

console.log("Original : " , original.infos.ville) ;
console.log("Copie    : " , copie.infos.ville) ;    

const vraieCopie1 = structuredClone(original) ;
vraieCopie1.infos.ville = "Tanger" ;

console.log("Après structuredClone -> Original :", original.infos.ville) ; 
console.log("Après structuredClone -> Vraie Copie :", vraieCopie1.infos.ville) ;

