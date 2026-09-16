/**
 * JOUR 06 — GUIDE 02
 * Parcourir avec for...of
 *
 * OBJECTIF
 * Vous avez notes = [12, 15, 8, 19]. Calculez la moyenne des notes en parcourant le tableau.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

 function calcul(cal){
    let i = 0
    let somme = 0
    while(i < cal.length){
        somme += cal[i]
        i++
    }
    return somme / cal.length
 }
 console.log(calcul([12, 15, 8, 19]));
 
