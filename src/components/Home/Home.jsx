import "./Home.css";
import "./../../styles/styles.css";
import * as icons from "../../assets/icons";

function Home() {
  return (
    <>
      <section className="container-home" id="container-home">
        <div className="container-about-me">
          <h3 className="title-clean">You will find 🙂 </h3>
          <p className="text-about-me">
            <span className="text-highlight">Perseverance</span>,
            <span className="text-highlight"> patience</span>, and mainly good
            vibes :)
          </p>
          <p className="text-about-me">
            Loving the backend and how huge it can be!
          </p>
          <div className="container-languages">
            <p className="text-white-small-clean">🇪🇸 Native</p>
            <p className="text-white-small-clean">🇺🇸 Intermediate</p>
            <p className="text-white-small-clean">🇷🇺 Basic</p>
            <p className="text-white-small-clean">🇩🇪 Basic</p>
          </div>
        </div>

        <div className="container-knowledges">
          <h3 className="title-clean">
            Knowledges
            {/*<hr className="line-knowledge" />*/}
          </h3>
          <div className="container-knowledge">
            <p className="text-white-small">Programming</p>
            <div className="icons-knowledge">
              <img className="icon-knowledge" src={icons.java} alt="java" />
              <img className="icon-knowledge" src={icons.kotlin} alt="kotlin" />
              <img className="icon-knowledge" src={icons.js} alt="js" />
            </div>
          </div>
          <div className="container-knowledge">
            <p className="text-white-small">Data Base</p>
            <div className="icons-knowledge">
              <img
                className="icon-knowledge"
                src={icons.mariadb}
                alt="mariadb"
              />
              <img className="icon-knowledge" src={icons.mysql} alt="mysql" />
            </div>
          </div>
          <div className="container-knowledge">
            <p className="text-white-small">Tools</p>
            <div className="icons-knowledge">
              <img className="icon-knowledge" src={icons.git} alt="git" />
              <img className="icon-knowledge" src={icons.docker} alt="docker" />
            </div>
          </div>
          <div className="container-knowledge">
            <p className="text-white-small">Frameworks</p>
            <div className="icons-knowledge">
              <img className="icon-knowledge" src={icons.react} alt="react" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
