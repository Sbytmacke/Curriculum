import "./Projects.css";
import * as images from "./../../assets/image/index";

const projectsList = [
  {
    title: "Token Helper",
    image: images.appTokenHelper,
    description: "Desktop App to save your bets",
    link: "https://github.com/Sbytmacke/TokenHelper",
    technologies: ["java", "mongodb"],
    tags: ["Java", "MongoDB"],
  },
  {
    title: "Aircraft Militar Map",
    image: images.workInProgressAircraft,
    description: "App to locate militar aircrafts in real time",
    link: "https://github.com/Sbytmacke/AircraftMilitarMap",
    technologies: ["java", "spring", "hibernate"],
    tags: ["Java", "Spring", "Hibernate"],
  },
  {
    title: "Wewiza (TFG)",
    image: images.workInProgressWewiza,
    description: "Android app to compare prices (TFG)",
    link: "https://github.com/Sbytmacke/Wewiza",
    technologies: ["kotlin", "androidstudio", "firebase"],
    tags: ["Kotlin", "Android", "Firebase"],
  },
  /*{
    title: "Human Resources App",
    image: images.workInProgress,
    description: "App to administrate departments and employees applying MVVM",
    link: "https://github.com/Sbytmacke/InterfacesDotNetT",
    technologies: ["C#", ".NET", "WPF"],
    tags: ["cs", "dotnet"],
  },*/
  {
    title: "ITV Dam",
    image: images.appITV,
    description: "App to administrate all resources about an ITV",
    link: "https://github.com/Sbytmacke/ProyectoFinalITV",
    technologies: ["kotlin", "mysql"],
    tags: ["Kotlin", "MySQL"],
  },
];
/* <img src="https://skillicons.dev/icons?i=kotlin,ktor,androidstudio,firebase,java,spring,cs,dotnet" />*/
/*
{
    title: "Coming Soon...",
    image: images.comingSoon,
    description: "Descripción del proyecto 2",
    link: "",
  },
*/

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
              <div className="tech-list">
                {project.technologies.map((technology, techIndex) => (
                  <img
                    key={techIndex}
                    className="tech"
                    src={`https://skillicons.dev/icons?i=${technology}`}
                    alt={technology}
                  />
                ))}
              </div>
              <div className="tag-list-names">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag-name">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
