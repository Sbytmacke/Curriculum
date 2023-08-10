import "./Projects.css";
import * as images from "./../../assets/image/index"; // Importa las imágenes que necesitas

const projectsList = [
  {
    title: "Desktop App ITV",
    image: images.webITV,
    description: "Descripción del proyecto 1",
  },
  {
    title: "Project 2",
    image: images.background,
    description: "Descripción del proyecto 2",
  },
  {
    title: "Project 2",
    image: images.angelFace,
    description: "Descripción del proyecto 2",
  },
  {
    title: "Project 2",
    image: images.appITV,
    description: "Descripción del proyecto 2",
  },
  {
    title: "Project 2",
    image: images.bg,
    description: "Descripción del proyecto 2",
  },
  {
    title: "Project 2",
    image: images.comingSoon,
    description: "Descripción del proyecto 2",
  },
  {
    title: "Project 2",
    image: images.referenceCV,
    description: "Descripción del proyecto 2",
  },
  // Agregamos más proyectos aquí
];

function Projects() {
  return (
    <div id="full-container-project">
      <span id="navigate-to-projects"></span>
      <h1 className="title-clean">Projects</h1>
      <hr />
      <section id="container-projects">
        {projectsList.map((project, index) => (
          <div className="container-project" key={index}>
            <p className="text-white-medium-clean">{project.title}</p>
            <img
              className="image-project"
              src={`${project.image}`}
              alt={`project-${index}`}
            />
            {/*<p>{project.description}</p>*/}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
