import projects from "../data/projects";
import "../CSS/Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projets</h2>
      <p>Une sélection de mes réalisations en développement web et applicatif</p>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            
            {/* Image du projet */}
            <div className="project-image">
              <img src={project.picture} alt={project.title} />
            </div>

            {/* Contenu */}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {/* Technologies */}
              <ul className="project-tech">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>

              {/* Lien */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Voir le projet
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
