/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · CHALLENGE
 * LE BRUTE-FORCER
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte :
 * Vous simulez un programme pour "craquer" un cadenas à 3 chiffres.
 *
 * Consignes :
 * 1. Définissez codeSecret = 739.
 * 2. Utilisez des boucles imbriquées (3 boucles for imbriquées allant chacune de 0 à 9) pour simuler les roues d'un cadenas de valise.
 * 3. À chaque essai, reconstituez le code testé (ex: c1 * 100 + c2 * 10 + c3).
 * 4. Si le code testé est égal au codeSecret, arrêtez toutes les boucles et affichez "Code trouvé : 739 après X essais".
 * Note : Réfléchissez à la manière de sortir de plusieurs boucles imbriquées (labels ou vérification de variable booléenne trouve).
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day02/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.


let code = 739 ;
let essai = 0 ;
let tmp = 0;


for ( let c1 = 0 ; c1 <=9 ; c1++ ){
    for ( let c2 = 0 ; c2 <= 9 ; c2 ++ ){
        for (let c3 = 0 ; c3 <= 9 ; c3++){
            let codetest = (c1 * 100 + c2 * 10 + c3)
            if (code == codetest) {
                essai++;
                console.log('code trouve ')
                tmp = essai;
                break;
            }
            essai++
        } 
    }
}

console.log(tmp)
// console.log(tmp-1)