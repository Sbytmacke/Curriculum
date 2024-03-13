import * as images from "./../../assets/image/index"; // Importa las imágenes que necesitas
import * as icons from "./../../assets/icons";
import pdf from "./../../assets/pdf/chiviteAngelCV.pdf";

import "./SocialMedia.css";
const SocialMedia = () => {
  return (
    <div id="container-rrss">
      <div id="container-inside-rrss">
        <img id="angel-chibi" src={images.angelChibi} alt="angel-chibi" />
        <h2 className="title-name" id="name">
          Angel Maroto Chivite
        </h2>
        <p className="text-grey-small" id="degree">
          Software Backend Developer
        </p>

        <ul id="container-links-rrss">
          <li>
            <a className="button-link-rrss" href="https://github.com/agchivite">
              <img
                className="icon-standar"
                src={icons.whiteGithub}
                alt="github"
              />
            </a>
          </li>
          <li>
            <a
              className="button-link-rrss"
              href="https://www.linkedin.com/in/angel-chivite-14b0a0162/"
            >
              <img
                className="icon-standar"
                src={icons.whiteLinkedin}
                alt="linkedin"
              />
            </a>
          </li>
        </ul>

        <a href="mailto:ag.chivite@gmail.com" id="container-email">
          <img
            id="icon-email"
            src={icons.whiteEmail}
            alt="ag.chivite@gmail.com"
          />
          <p id="text-email" className="">
            ag.chivite@gmail.com
          </p>
        </a>

        <hr id="limit-rrss" />
        <a id="button-download-cv" href={pdf} download="chiviteAngelCV">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
