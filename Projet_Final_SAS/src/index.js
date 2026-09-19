const readline = require("readline");
const { apprenants } = require("./data");
const { calculerProgression } = require("./progression");


// NORMALISER LE NOM


function normaliserNom(nom) {
  return nom.trim().toLowerCase().replace(/\s+/g, " ");
}


// VALIDER UN RESULTAT


function validerResultat(jour, exercicesTermines, totalExercices) {

  if (jour < 1 || jour > 7) {
    return {
      valide: false,
      message: "Le jour doit être entre 1 et 7."
    };
  }
  if (exercicesTermines < 0 || totalExercices <= 0) {
    return {
      valide: false,
      message: "Les nombres d'exercices sont invalides."
    };
  }
  if (exercicesTermines > totalExercices) {
    return {
      valide: false,
      message: "Les exercices terminés ne peuvent pas dépasser le total."
    };
  }
  return {
    valide: true
  };
}


// AJOUTER UN APPRENANT


function ajouterApprenant(apprenants, id, nom, ville) {

  const existe = apprenants.some(a => a.id === id);
  if (existe) {
    return {
      succes: false,
      message: "Cet identifiant existe déjà."
    };
  }
  const apprenant = {
    id: id,
    nomComplet: nom.trim(),
    ville: ville.trim(),
    resultats: []
  };
  apprenants.push(apprenant);
  return {
    succes: true,
    apprenant: apprenant
  };
}


// AJOUTER / MODIFIER RESULTAT


function enregistrerResultat(
  apprenant,
  jour,
  exercicesTermines,
  totalExercices,
  challengeTermine
) {
    const validation = validerResultat(
    jour,
    exercicesTermines,
    totalExercices
  );
  if (!validation.valide) {
    return validation;
  }
  const resultat = {
    jour: jour,
    exercicesTermines: exercicesTermines,
    totalExercices: totalExercices,
    challengeTermine: challengeTermine
  };
  const index = apprenant.resultats.findIndex(
    r => r.jour === jour
  );
  if (index !== -1) {
    apprenant.resultats[index] = resultat;
  } else {
    apprenant.resultats.push(resultat);
  }
  return {
    succes: true
  };
}


// TABLEAU DE BORD


function afficherTableauDeBord() {

  console.log("\n");
  console.log("            ###   TABLEAU DE BORD   ###");
  console.log("--------------------------------------------------");
  console.log(
    `Nombre total d'apprenants : ${apprenants.length}`
  );
  if (apprenants.length === 0) {
    console.log("Aucun apprenant.");
    return;
  }
  let total = 0;
  apprenants.forEach(apprenant => {
    const progression = calculerProgression(apprenant);
    total += progression.pourcentage;
  });
  const moyenne = Math.round(
    total / apprenants.length
  );
  console.log(
    `Progression moyenne du groupe : ${moyenne}%`
  );
  console.log("--------------------------------------------------");
  apprenants.forEach(apprenant => {
    const progression = calculerProgression(apprenant);
    console.log(
      `${apprenant.id} - ${apprenant.nomComplet} (${apprenant.ville}) : ${progression.pourcentage}% [${progression.niveau}]`
    );
  });
  console.log("--------------------------------------------------\n");
}


// AFFICHER LES APPRENANTS


function afficherApprenants() {
  console.log("\n--- Liste des apprenants ---");
  if (apprenants.length === 0) {
    console.log("Aucun apprenant.");
    return;
  }
  apprenants.forEach(apprenant => {
    console.log(
      `ID: ${apprenant.id} | Nom: ${apprenant.nomComplet} | Ville: ${apprenant.ville}`
    );
  });
}


// INTERFACE READLINE


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// MENU


function afficherMenu() {
  console.log("\n");
  console.log("                  ##   SAS PROGRESS CONSOLE   ##                    ");
  console.log("\n");
  console.log("######################################################################");
  console.log("#          1. Afficher le tableau de bord                            #");
  console.log("#          2. Afficher la liste des apprenants                       #");
  console.log("#          3. Ajouter un apprenant                                   #");
  console.log("#          4. Consulter un apprenant par identifiant                 #");
  console.log("#          5. Ajouter ou modifier le résultat d'une journée          #");
  console.log("#          6. Rechercher un apprenant par nom                        #");
  console.log("#          7. Filtrer les apprenants par niveau                      #");
  console.log("#          8. Trier les apprenants par progression décroissante      #");
  console.log("#          9. Trier les apprenants par ordre alphabétique            #");
  console.log("#          0. Quitter                                                #");
  console.log("######################################################################");
  console.log("\n");
  rl.question("Votre choix: ", traiterChoix);
}


// TRAITER LE CHOIX


function traiterChoix(choix) {
  switch (choix.trim()) {
    // TABLEAU DE BORD
    case "1":
      afficherTableauDeBord();
      afficherMenu();
      break;
    // LISTE
    case "2":
      afficherApprenants();
      afficherMenu();
      break;
    //  AJOUTER APPRENANT
    case "3":
      rl.question("ID: ", id => {
        rl.question("Nom complet: ", nom => {
          rl.question("Ville: ", ville => {
            const res = ajouterApprenant(
              apprenants,
              Number(id),
              nom,
              ville
            );
            if (res.succes) {
              console.log(
                "Apprenant ajouté avec succès !"
              );
            } else {
              console.log(
                "Erreur:",
                res.message
              );
            }
            afficherMenu();
          });
        });
      });
      break;
    // CHERCHER PAR ID
    case "4":
      rl.question("Identifiant: ", id => {
        const apprenant = apprenants.find(
          a => a.id === Number(id)
        );
        if (!apprenant) {
          console.log("Apprenant non trouvé.");
        } else {
          console.log("\n--- Apprenant ---");
          console.log("ID :", apprenant.id);
          console.log("Nom :", apprenant.nomComplet);
          console.log("Ville :", apprenant.ville);
          console.log("Résultats :", apprenant.resultats);
        }
        afficherMenu();
      });
      break;
    // RESULTAT
    case "5":
      rl.question("ID de l'apprenant: ", id => {
        const apprenant = apprenants.find(
          a => a.id === Number(id)
        );
        if (!apprenant) {
          console.log("Apprenant non trouvé.");
          afficherMenu();
          return;
        }
        rl.question("Jour (1-7): ", jour => {
          jour = Number(jour);
          if (jour < 1 || jour > 7) {
            console.log(
              "Erreur: Le jour doit être entre 1 et 7."
            );
            afficherMenu();
            return;
          }
          rl.question(
            "Exercices terminés: ",
            exercices => {
              rl.question(
                "Total exercices: ",
                total => {
                  rl.question(
                    "Challenge terminé (oui/non): ",
                    challenge => {
                      const res = enregistrerResultat(
                        apprenant,
                        jour,
                        Number(exercices),
                        Number(total),
                        challenge.trim().toLowerCase() === "oui"
                      );
                      if (res.succes) {
                        console.log(
                          "Résultat enregistré avec succès !"
                        );
                      } else {
                        console.log(
                          "Erreur:",
                          res.message
                        );
                      }
                      afficherMenu();
                    }
                  );
                }
              );
            }
          );
        });
      });
      break;
    //  RECHERCHE PAR NOM
    case "6":
      rl.question(
        "Nom ou partie du nom: ",
        nom => {
          const recherche = normaliserNom(nom);
          const resultats = apprenants.filter(
            apprenant =>
              normaliserNom(apprenant.nomComplet)
                .includes(recherche)
          );
          if (resultats.length === 0) {
            console.log("Aucun apprenant trouvé.");
          } else {
            console.log(resultats);
          }
          afficherMenu();
        }
      );
      break;
    // FILTRER PAR NIVEAU
    case "7":
      rl.question(
        "Niveau: ",
        niveau => {
          const resultats = apprenants.filter(
            apprenant =>
              calculerProgression(apprenant)
                .niveau
                .toLowerCase() ===
              niveau.trim().toLowerCase()
          );
          console.log(resultats);
          afficherMenu();
        }
      );
      break;
    //  TRI PROGRESSION
    case "8":
      const classement = [...apprenants].sort(
        (a, b) =>
          calculerProgression(b).pourcentage -
          calculerProgression(a).pourcentage
      );
      console.log(classement);
      afficherMenu();
      break;
    //  TRI ALPHABETIQUE
    case "9":
      const alphabetique = [...apprenants].sort(
        (a, b) =>
          a.nomComplet.localeCompare(b.nomComplet)
      );
      console.log(alphabetique);
      afficherMenu();
      break;
    //  QUITTER
    case "0":
      console.log("Au revoir !");
      rl.close();
      break;
    // CHOIX INVALIDE
    default:
      console.log("Choix invalide.");
      afficherMenu();
  }
}

afficherMenu();