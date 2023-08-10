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
    <>
      <span id="navigate-to-projects"></span>
      <section className="container-projects" id="container-projects">
        <h1>Projects</h1>
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
    </>
  );
}

export default Projects;
