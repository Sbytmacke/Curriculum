import { HashLink as Link } from "react-router-hash-link";

import homeIcon from "../../../assets/icons/white/home.png";
import projectsIcon from "../../../assets/icons/white/projects.png";
import contactIcon from "../../../assets/icons/white/contact.png";

import "./Navigation.css"; // Ajusta la importación de estilos

// Hacemos una SPA (Single page application) para que no cargue todos los elementos al cambiar de páginas
function Navigation() {
  return (
    <nav className="container-navigation">
      <Link
        to="#navigate-to-home"
        className={`container-navigation-button ${
          window.location.hash === "#navigate-to-home" ? "active" : ""
        }`}
        smooth
      >
        <img src={homeIcon} alt="Home" />
        <p>Home</p>
      </Link>
      <Link
        to="#navigate-to-projects"
        className={`container-navigation-button ${
          window.location.hash === "#navigate-to-projects" ? "active" : ""
        }`}
        smooth
      >
        <img src={projectsIcon} alt="Projects" />
        <p>Projects</p>
      </Link>
      <Link
        to="#navigate-to-contact"
        className={`container-navigation-button ${
          window.location.hash === "#navigate-to-contact" ? "active" : ""
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

/*function isActive({ isActive }) {
  return isActive ? "is-active" : undefined;
}*/
