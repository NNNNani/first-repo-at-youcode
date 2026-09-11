/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · CHALLENGE
 * GESTION DE PANIER E-COMMERCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous codez la logique du panier d'achat d'une boutique en ligne.
 *
 * Consignes :
 * 1. Vous avez un tableau représentant les ID des articles dans le panier : panier = [101, 105, 101, 102].
 * 2. Créez une fonction ajouterAuPanier(id) qui ajoute l'article au tableau.
 * 3. Créez une fonction retirerDuPanier(id) qui retire Toutes les occurrences de cet ID du panier (ex: retirer 101).
 * 4. (Bonus) Créez une fonction afficherQuantites() qui compte et affiche le panier sous forme : Article 101 : 2 exemplaires, Article 105 : 1 exemplaire...
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day05/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.d



 
'use strict';

let panier = [101, 105, 101, 102] ;

function ajouterAuPanier(id) {
  panier.push(id) ;
}

function retirerDuPanier(id) {
  const nouv  = [] ;

  for (const item of panier) {
    if (item !== id) {
      nouv .push(item) ;
    }

  }
  panier = nouv ;
}

function afficherQuantites() {
  const c = {} ;

  for (const id of panier) {
    c[id]    = ( c[id] ||   0) + 1 ;
  }

  for (const id in c) {

    console.log(`Article ${id} : ${c[id]} exemplaires`) ;
    
  }
}

ajouterAuPanier(105);           
retirerDuPanier(101);        
afficherQuantites();   