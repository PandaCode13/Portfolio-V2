import logomydigitalschool from "../assets/logomydigitalschool.png";
import logouniversitedeDjibouti from "../assets/logouniversitededjibouti.png";
import logolpgb from "../assets/logolpgb.png";

const formations = [
    {
        id: 0,
        title: "MBA Développeur Full Stack",
        date: "2025 - en cours",
        institution: "My Digital School",
        description: "Actuellement en cours d'obtention de mon master MBA Développement Full Stack",
        projets: ["PasTrèsNetflix", "GlycAmed", "Application de Musique comme Sonnerie de cours", 'Piscine Typescript', "Starpi"],
        adresse: "40 Rue du Chemin Vert, 75011 Paris",
        logo: logomydigitalschool
    },
    {
        id: 1,
        title: "Licence Informatique",
        date: "2022 - 2025",
        filière: "Informatique",
        institution: "Université de Djibouti",
        description: "Obtention de la licence en informatique en 2025, avec une connaissance approfondie des bases du développement web, des bases de données et des concepts de programmation.",
        mention: "Assez Bien",
        projets: ["CV en Ligne Express", "RavenBooks", "Wikipédia Planétaire", "Interface pour les Algorithmes de Graphes", "Gestion de commandes et de restaurants"],
        adresse: "Université de Djibouti (Campus Balbala), G4Q8+7Q5, Balbala, Djibouti",
        logo: logouniversitedeDjibouti
    },
    {
        id: 2,
        title: "Baccaulauréat Scientifique",
        date: "2018 - 2021",
        filière: "Série Scientifique",
        institution: "Lycée Privée Guelleh Batal",
        description: "Obtention du baccalauréat scientifique avec une solide formation en mathématiques",
        mention: "Assez Bien",
        adresse: "Lycée privée Guelleh Batal, H4CW+R6F، جيبوتي‎،، Djibouti",
        logo: logolpgb
    }
];

export default formations;