import { HashLink as Link } from "react-router-hash-link";
import { useState, useEffect } from "react";

import homeIcon from "../../../assets/icons/white/home.png";
import projectsIcon from "../../../assets/icons/white/projects.png";
import contactIcon from "../../../assets/icons/white/contact.png";

import "./Navigation.css"; // Ajusta la importación de estilos

// Hacemos una SPA (Single page application) para que no cargue todos los elementos al cambiar de páginas
function Navigation() {
  const [isActive, setActive] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const homeElement = document.getElementById("navigate-to-home");
      const projectsElement = document.getElementById("navigate-to-projects");
      const contactElement = document.getElementById("navigate-to-contact");

      const homeRect = homeElement.getBoundingClientRect();
      const projectsRect = projectsElement.getBoundingClientRect();
      const contactRect = contactElement.getBoundingClientRect();

      {
        /*Como hago la activación en función de la pantalla o con mejor filtro*/
      }
      if (homeRect.top <= 0 && homeRect.bottom >= -500) {
        setActive("home");
      } else if (projectsRect.bottom >= 0) {
        setActive("projects");
      } else if (contactRect.bottom >= 0) {
        setActive("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llamarlo también al inicio para establecer la sección activa al cargar la página

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="container-navigation">
      <Link
        to="#navigate-to-home"
        smooth
        className={` ${
          isActive === "home"
            ? "container-navigation-button active"
            : "container-navigation-button"
        }`}
      >
        <img src={homeIcon} alt="Home" />
        <p>Home</p>
      </Link>
      <Link
        to="#navigate-to-projects"
        className={` ${
          isActive === "projects"
            ? "container-navigation-button active"
            : "container-navigation-button"
        }`}
        smooth
      >
        <img src={projectsIcon} alt="Projects" />
        <p>Projects</p>
      </Link>
      <Link
        to="#navigate-to-contact"
        className={` ${
          isActive === "contact"
            ? "container-navigation-button active"
            : "container-navigation-button"
        }`}
        smooth
      >
        <img src={contactIcon} alt="Contact" />
        <p>Contact</p>
      </Link>
    </nav>
  );
}

export default Navigation;
