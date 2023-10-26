import "./Projects.css";
import * as images from "./../../assets/image/index"; // Importa las imágenes que necesitas

const projectsList = [
  {
    title: "ITV Desktop App",
    image: images.appITV,
    description: "App to administrate all resources about an ITV",
    link: "https://github.com/Sbytmacke/ProyectoFinalITV",
  },
  {
    title: "Wewiza Android App",
    image: images.appWewiza,
    description: "Android app to compare prices (TFG)",
    link: "https://github.com/Sbytmacke/Wewiza",
  },
  {
    title: "Delivery Sync",
    image: images.deliverySync,
    description: "Web or App (idk) to central location about deliveries",
    link: "https://github.com/Sbytmacke/delivery-sync",
  },
  {
    title: "ITV Web",
    image: images.webITV,
    description: "Schema web only using html, css and javascript",
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
