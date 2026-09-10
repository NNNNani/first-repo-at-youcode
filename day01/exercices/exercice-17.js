/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * JEU : PIERRE, PAPIER, CISEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Déclarez deux variables joueur1 = "Pierre" et joueur2 = "Ciseaux". En utilisant des conditions, déterminez qui a gagné. (Gérez tous les cas possibles ou utilisez une logique optimisée).
 *
 * RÉSULTAT ATTENDU
 * Joueur 1 gagne !
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day01/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

const joueur1 = "PIERRE" ;
const joueur2 = "CISEAUX" ;

if ( joueur1 === joueur2 ) {
    console.log("ta3adol");
}else if ( ( joueur1 === "PIERRE" && joueur2 === "CISEAUX") || (joueur1 === "PAPIER" && joueur2 === "PIERRE" ) || ( joueur1 === "CISEAUX" && joueur2 === "PAPIER")){
    console.log("jour 1 gagne !");
}else{
    console.log("jour 2 gange !");
}
