import "./Projects.css";

const projectsList = [
  {
    title: "Desktop App ITV",
    image: "AppITV.png",
    description: "Descripción del proyecto 1",
  },
  {
    title: "Project 2",
    image: "project2.png",
    description: "Descripción del proyecto 2",
  },
  {
    title: "Project 2",
    image: "project2.png",
    description: "Descripción del proyecto 2",
  },
  {
    title: "Project 2",
    image: "project2.png",
    description: "Descripción del proyecto 2",
  },
  {
    title: "Project 2",
    image: "project2.png",
    description: "Descripción del proyecto 2",
  },
  {
    title: "Project 2",
    image: "project2.png",
    description: "Descripción del proyecto 2",
  },
  {
    title: "Project 2",
    image: "project2.png",
    description: "Descripción del proyecto 2",
  },
  // Agregamos más proyectos aquí
];

function Projects() {
  return (
    <div id="full-container-project">
      <span id="navigate-to-projects"></span>
      <h1 className="title-clean">Projects</h1>
      <hr className="line-projects" />
      <section id="container-projects">
        {projectsList.map((project, index) => (
          <div className="container-project" key={index}>
            <p className="text-white-medium-clean">{project.title}</p>
            <img
              className="image-project"
              src={`../../assets/image/${project.image}`}
              alt={`project-${index}`}
            />
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
