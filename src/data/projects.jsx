import portfolioV2 from "../assets/portfolio-V2.png";
import cvOnlineExpress from "../assets/Logo-cv-online-express.png";
import wikipediaPlanetaire from "../assets/Logo-Wikipedia-Planetaire.png";
import pasTresNetflix from "../assets/Logo-PasTresNetflix.png";
import ravenBooks from "../assets/logo-ravenbooks.png";

const projects = [
  {
    id: 1,
    title: "Portfolio V2",
    description:"Portfolio personnel conçu pour présenter mes projets, compétences et expériences en développement web full stack.",
    technologies: ["React", "CSS", "JavaScript"],
    link: "https://github.com/PandaCode13/Portfolio-V2.git",
    picture: portfolioV2
  },
  {
    id: 2,
    title: "CV en Ligne Express",
    description:"Un projet scolaire qui consiste à créer une plateforme web permettant de créer et personnaliser rapidement un CV en ligne à partir de modèles prédéfinis, avec une documentation métier, des conseils et un accompagnement pour la rédaction de CV, lettres de motivation et rapports de stage.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/PandaCode13/CV-EN-LIGNE-EXPRESS.git",
    picture: cvOnlineExpress
  },
  {
    id: 3,
    title: "Wikipédia Planétaire",
    description:"Site web éducatif regroupant des informations détaillées sur les planètes du système solaire.",
    technologies: ["HTML", "CSS", "JavaScript", "JSON"],
    link: "https://github.com/PandaCode13/Wikipedia-Planetaire.git",
    picture: wikipediaPlanetaire
  },
  {
    id: 4,
    title: "PasTrèsNetflix",
    description:"Un projet scolaire qui consiste à créer une application web de streaming permettant de rechercher des films et séries et d’accéder à leurs informations via l’API TMDB.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "API TMDB"],
    link: "https://github.com/PandaCode13/PROJET-PASTRESNETFLIX.git",
    picture: pasTresNetflix
  },
  {
    id: 5,
    title: "RavenBooks",
    description:"Un projet scolaire qui consiste à créer un site web qui permet aux utilisateurs de trouver les livres dans les différents bibliothèques de Djbouti comme l'Institut Français ou encore l'Université de Djibouti.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    link: "https://github.com/DrPower01/Ravenbooks.git",
    picture: ravenBooks
  }
];

export default projects;
