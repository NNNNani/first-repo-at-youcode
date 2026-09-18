//############  [1]  ###########
function normaliserNom(nom) {
  return nom.trim().tolowerCase().replace(/\s+/g, ' ');
}


//############  [2]  ###########
function validerResultat(jour, exercicesTermines, totalExercices) {
  if (jour < 1 || jour > 7) {
    return { valide: false, message: "Le jour doit être compris entre 1 et 7." };
  }
  if (exercicesTermines < 0 || totalExercices <= 0) {
    return { valide: false, message: "Les nombres d'exercices doivent être positifs." };
  }
  if (exercicesTermines > totalExercices) {
    return { valide: false, message: "Le nombre d'exercices terminés ne peut pas dépasser le total." };
  }
  return { valide: true };
}


//############  [3]  ###########
function ajouterApprenant(apprenants, id, nomComplet, ville) {
  if (apprenants.somh(a => a.id === id)) {
    return { succes : false, message: "Cet identifiant existe déjà." };
  }
  const nouveau = {
    id,
    nomComplet: nomComplet.trim(),
    ville: ville.trim(),
    resultats: []
  }; 
  apprenants.push(nouveau);
  return { succes: true, apprenant: nouveau };
}


//############  [4]  ###########
function enregistrerResultat(apprenant, jour, exercicesTermines, totalExercices, challengeTermine) {
  const validation = validerResultat(jour, exercicesTermines, totalExercices);
  if (!validation.valide) {
    return validation;
  }
  const index = apprenant.resultats.findIndex(r => r.jour === jour);
  const nouveauResultat = { jour, exercicesTermines, totalExercices, challengeTermine };

  if (index !== -1) {
    apprenant.resultats[index] = nouveauResultat; 
  } else {
    apprenant.resultats.push(nouveauResultat); 
  }
  return { succes: true };
}


//############  [5]  ###########
function rechercherApprenant(apprenants, terme) {
  const termeNormalise = normaliserNom(String(terme));
  return apprenants.filter(a =>
    a.id === Number(terme) || normaliserNom(a.nomComplet).includes(termeNormalise)
  );
}


//############  [6]  ###########
function calculerProgression(apprenant) {
  const resultats = apprenant.resultats || [];
  
  if (resultats.length === 0) {
    return {
      exercicesTermines: 0,
      totalExercices: 0,
      pourcentage: 0,
      niveau: "À renforcer",
      challengesTermines: 0,
      journeesRenseignees: 0
    };
  }

  const exercicesTermines = resultats.reduce((sum, r) => sum + r.exercicesTermines, 0);
  const totalExercices = resultats.reduce((sum, r) => sum + r.totalExercices, 0);
  const challengesTermines = resultats.filter(r => r.challengeTermine).length;

  const pourcentage = totalExercices > 0 ? (exercicesTermines / totalExercices) * 100 : 0;

  let niveau = "À renforcer";
  if (pourcentage >= 80) {
    niveau = "Solide";
  } else if (pourcentage >= 50) {
    niveau = "En progression";
  }

  return {
    exercicesTermines,
    totalExercices,
    pourcentage: Math.round(pourcentage),
    niveau,
    challengesTermines,
    journeesRenseignees: resultats.length
  };
}


//############  [7]  ###########
function filtrerParNiveau(apprenants, niveauRecherche) {
  return apprenants.filter(a => {
    const stats = calculerProgression(a);
    return stats.niveau.toLowerCase() === niveauRecherche.toLowerCase();
  });
}


//############  [8]  ###########
function trierParProgression(apprenants) {
  return [...apprenants].sort((a, b) => {
    const statsA = calculerProgression(a);
    const statsB = calculerProgression(b);
    return statsB.pourcentage - statsA.pourcentage;
  });
}


//############  [9]  ###########
function trierParNom(apprenants) {
  return [...apprenants].sort((a, b) => {
    return a.nomComplet.localeCompare(b.nomComplet);
  });
}

// ==========================================
// PARTIE 7 : TABLEAU DE BORD
// ==========================================

function afficherTableauDeBord(apprenants) {
  if (apprenants.length === 0) {
    console.log("\nAucun apprenant enregistré.");
    return;
  }

  console.log("\n=================================");
  console.log("       TABLEAU DE BORD          ");
  console.log("=================================");

  let totalProgression = 0;
  let nbSolide = 0;
  let nbEnProgression = 0;
  let nbARenforcer = 0;

  apprenants.forEach(a => {
    const stats = calculerProgression(a);
    totalProgression += stats.pourcentage;
    if (stats.niveau === "Solide") nbSolide++;
    else if (stats.niveau === "En progression") nbEnProgression++;
    else nbARenforcer++;
  });

  const moyenneGroupe = Math.round(totalProgression / apprenants.length);

  console.log(`Nombre total d'apprenants : ${apprenants.length}`);
  console.log(`Progression moyenne du groupe : ${moyenneGroupe}%`);
  console.log(`Répartition par niveau :`);
  console.log(`  - Solide : ${nbSolide}`);
  console.log(`  - En progression : ${nbEnProgression}`);
  console.log(`  - À renforcer : ${nbARenforcer}`);
  console.log("---------------------------------");
  console.log("Détails par apprenant :");

  const listeTriee = trierParProgression(apprenants);

  listeTriee.forEach(a => {
    const stats = calculerProgression(a);
    const joursSaisis = a.resultats.map(r => r.jour);
    const joursManquants = [1, 2, 3, 4, 5, 6, 7].filter(j => !joursSaisis.includes(j));
    const challengesManquants = a.resultats.filter(r => !r.challengeTermine).map(r => r.jour);

    console.log(`\n• ${a.nomComplet} (${a.ville}) - ${stats.pourcentage}% [${stats.niveau}]`);
    console.log(`  Journées renseignées : ${stats.journeesRenseignees}/7`);
    console.log(`  Journées manquantes : ${joursManquants.length > 0 ? joursManquants.join(', ') : 'Aucune'}`);
    console.log(`  Challenges non terminés (jours) : ${challengesManquants.length > 0 ? challengesManquants.join(', ') : 'Aucun'}`);
  });
  console.log("=================================\n");
}


// ==========================================
// PARTIE 8 : MENU INTERACTIF & READLINE
// ==========================================

const readline = require('readline');

// استيراد بيانات البداية
const { apprenants } = require('./data');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function afficherMenu() {
  console.log(`\n=================================`);
  console.log(`      SAS PROGRESS CONSOLE       `);
  console.log(`=================================`);
  console.log(`1. Afficher le tableau de bord`);
  console.log(`2. Afficher la liste des apprenants`);
  console.log(`3. Ajouter un apprenant`);
  console.log(`4. Consulter un apprenant par identifiant`);
  console.log(`5. Ajouter ou modifier le résultat d'une journée`);
  console.log(`6. Rechercher un apprenant par nom`);
  console.log(`7. Filtrer les apprenants par niveau`);
  console.log(`8. Trier les apprenants par progression décroissante`);
  console.log(`9. Trier les apprenants par ordre alphabétique`);
  console.log(`0. Quitter`);
  console.log(`=================================`);

  rl.question('Votre choix: ', (choix) => {
    traiterChoix(choix.trim());
  });
}

function traiterChoix(choix) {
  switch (choix) {
    case '1':
      afficherTableauDeBord(apprenants);
      afficherMenu();
      break;

    case '2':
      console.log("\n--- Liste des apprenants ---");
      apprenants.forEach(a => console.log(`ID: ${a.id} | Nom: ${a.nomComplet} | Ville: ${a.ville}`));
      afficherMenu();
      break;

    case '3':
      rl.question("ID: ", (id) => {
        rl.question("Nom complet: ", (nom) => {
          rl.question("Ville: ", (ville) => {
            const res = ajouterApprenant(apprenants, Number(id), nom, ville);
            if (!res.succes) console.log(` Error: ${res.message}`);
            else console.log(" Apprenant ajouté avec succès!");
            afficherMenu();
          });
        });
      });
      break;

    case '4':
      rl.question("Identifiant: ", (id) => {
        const trouve = apprenants.find(a => a.id === Number(id));
        if (!trouve) console.log(" Apprenant non trouvé.");
        else console.log(trouve);
        afficherMenu();
      });
      break;

    case '5':
      rl.question("ID de l'apprenant: ", (id) => {
        const app = apprenants.find(a => a.id === Number(id));
        if (!app) {
          console.log(" Apprenant non trouvé.");
          return afficherMenu();
        }
        rl.question("Jour (1-7): ", (j) => {
          rl.question("Exercices terminés: ", (exTerm) => {
            rl.question("Total exercices: ", (totEx) => {
              rl.question("Challenge terminé (oui/non): ", (ch) => {
                const isChallenge = ch.trim().toLowerCase() === 'oui';
                const res = enregistrerResultat(app, Number(j), Number(exTerm), Number(totEx), isChallenge);
                if (!res.valide) console.log(` Error: ${res.message}`);
                else console.log(" Résultat enregistré!");
                afficherMenu();
              });
            });
          });
        });
      });
      break;

    case '6':
      rl.question("Nom ou partie du nom: ", (nom) => {
        const resultats = rechercherApprenant(apprenants, nom);
        console.log(resultats);
        afficherMenu();
      });
      break;

    case '7':
      rl.question("Niveau (Solide / En progression / À renforcer): ", (niv) => {
        const filtres = filtrerParNiveau(apprenants, niv);
        console.log(filtres);
        afficherMenu();
      });
      break;

    case '8':
      console.log("\n--- Tri par progression décroissante ---");
      console.log(trierParProgression(apprenants));
      afficherMenu();
      break;

    case '9':
      console.log("\n--- Tri par ordre alphabétique ---");
      console.log(trierParNom(apprenants));
      afficherMenu();
      break;

    case '0':
      console.log("\nAu revoir !");
      rl.close();
      break;

    default:
      console.log(" Choix invalide.");
      afficherMenu();
      break;
  }
}

module.exports = {
  normaliserNom,
  validerResultat,
  ajouterApprenant,
  enregistrerResultat,
  rechercherApprenant,
  calculerProgression,
  filtrerParNiveau,
  trierParProgression,
  trierParNom
};

afficherMenu();

