import "./Layout.css";

import Navigation from "../components/Navigation/NavBar/Navigation";
import SocialMedia from "../components/SocialMedia/SocialMedia";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

function Layout() {
  return (
    <>
      <span id="navigate-to-home"></span>
      <div className="layout">
        <Navigation />
        <div className="top-content">
          <SocialMedia />
          <Home />
        </div>
        <div className="bottom-content">
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Layout;
