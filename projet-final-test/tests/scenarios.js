const {
  normaliserNom,
  validerResultat,
  ajouterApprenant,
  calculerProgression
} = require('../src/index');

console.log("==========================================");
console.log("       EXÉCUTION DES SCÉNARIOS DE TEST    ");
console.log("==========================================\n");

// Scénario 1: Ajouter un profil valide
console.log("1. Test : Ajouter un profil valide");
const testApprenants = [];
console.log(ajouterApprenant(testApprenants, 10, "  Karim Test  ", "Rabat"));

// Scénario 2: Calculer la progression (Sara Dev : 80%)
console.log("\n2. Test : Calcul de progression de Sara Dev");
const testSara = {
  id: 1,
  nomComplet: "Sara Dev",
  ville: "Nador",
  resultats: [
    { jour: 1, exercicesTermines: 18, totalExercices: 20, challengeTermine: true },
    { jour: 2, exercicesTermines: 14, totalExercices: 20, challengeTermine: false }
  ]
};
console.log(calculerProgression(testSara));

// Scénario 3: Normalisation du nom
console.log("\n3. Test : Nettoyage et normalisation du nom");
console.log(`Résultat : "${normaliserNom("   SARA   dev  ")}"`);

// Scénario 4: Cas invalide - Identifiant déjà utilisé
console.log("\n4. Test Cas Invalide : ID doublon");
console.log(ajouterApprenant(testApprenants, 10, "Doublon User", "Casablanca"));

// Scénario 5: Cas invalide - Exercices incohérents
console.log("\n5. Test Cas Invalide : Exercices terminés > proposés");
console.log(validerResultat(3, 25, 20));
