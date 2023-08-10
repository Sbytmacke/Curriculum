import "./Projects.css";
import * as images from "./../../assets/image/index"; // Importa las imágenes que necesitas

const projectsList = [
  {
    title: "Web ITV",
    image: images.webITV,
    description: "Descripción del proyecto 1",
    link: "https://github.com/Sbytmacke/ProyectoFinalITV",
  },
  {
    title: "App Desktop ITV",
    image: images.appITV,
    description: "Descripción del proyecto 4",
    link: "https://github.com/Sbytmacke/ProyectoFinalITV",
  },
  {
    title: "Coming Soon...",
    image: images.comingSoon,
    description: "Descripción del proyecto 2",
    link: "",
  },
  {
    title: "Coming Soon...",
    image: images.comingSoon,
    description: "Descripción del proyecto 2",
    link: "",
  },
  {
    title: "Coming Soon...",
    image: images.comingSoon,
    description: "Descripción del proyecto 2",
    link: "",
  },
  {
    title: "Coming Soon...",
    image: images.comingSoon,
    description: "Descripción del proyecto 2",
    link: "",
  },
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
            <a href={project.link} className="link-project">
              <p className="title-project">{project.title}</p>
              <img
                className="image-project"
                src={project.image}
                alt={`project-${index}`}
              />
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
