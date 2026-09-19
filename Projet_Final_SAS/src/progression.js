function calculerProgression(apprenant) {
  let exercicesTermines = 0;
  let totalExercices = 0;
  let challengesTermines = 0;
  let joursRenseignes = apprenant.resultats.length;

  for (const resultat of apprenant.resultats) {
    exercicesTermines += resultat.exercicesTermines;
    totalExercices += resultat.totalExercices;

    if (resultat.challengeTermine === true) {
      challengesTermines++;
    }
  }

  let pourcentage = 0;

  if (totalExercices > 0) {
    pourcentage = (exercicesTermines / totalExercices) * 100;
  }

  let niveau;

  if (pourcentage >= 80) {
    niveau = "Solide";
  } else if (pourcentage >= 50) {
    niveau = "En progression";
  } else {
    niveau = "À renforcer";
  }

  return {
    exercicesTermines,
    totalExercices,
    pourcentage: Math.round(pourcentage),
    challengesTermines,
    joursRenseignes,
    niveau
  };
}

module.exports = {
  calculerProgression
};