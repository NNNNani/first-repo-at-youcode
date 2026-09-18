# 🎓 SAS Progress Console

> Application console Node.js pour le suivi de la progression des apprenants.

---

## 🎯 Objectif du projet

SAS Progress Console permet de gérer les apprenants d'une promotion,
d'enregistrer leurs résultats quotidiens et de suivre leur progression
à travers un tableau de bord pédagogique.

L'application permet notamment de :

- 👨‍🎓 Ajouter et consulter des apprenants
- 📝 Enregistrer les résultats quotidiens
- 📊 Calculer le taux de progression
- 🏆 Attribuer un niveau de progression
- 🔎 Rechercher un apprenant
- 📈 Filtrer et trier les résultats
- 💾 Sauvegarder automatiquement les données
- 📋 Afficher un tableau de bord pédagogique

---

## 🧭 Fonctionnalités

| Option | Fonction |
|---|---|
| `1` | 📊 Afficher le tableau de bord |
| `2` | 👥 Lister les apprenants |
| `3` | ➕ Ajouter un apprenant |
| `4` | 🔍 Consulter un apprenant par ID |
| `5` | 📝 Enregistrer un résultat quotidien |
| `6` | 🔎 Rechercher par nom |
| `7` | 🏆 Filtrer par niveau |
| `8` | 📈 Trier par progression |
| `9` | 🔤 Trier par ordre alphabétique |
| `0` | 🚪 Quitter |

---

## 🏆 Niveaux de progression

| Progression | Niveau |
|---:|---|
| `≥ 80%` | 🟢 Solide |
| `50% – 79%` | 🟡 En progression |
| `< 50%` | 🔴 À renforcer |

---

## 💾 Persistance des données

Les données des apprenants sont sauvegardées dans :

```text
src/data.json