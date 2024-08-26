import "./Contact.css";
import * as icons from "./../../assets/icons";

function Contact() {
    return (
        <div id="full-container-contact">
            <span id="navigate-to-contact"></span>
            <h3 className="title-clean">Contact</h3>
            <hr className="line-contact" />
            <section className="container-contact">
                <ul className="list-links-rrss">
                    <li>
                        <a
                            className="button-link-contact"
                            href="https://github.com/agchivite"
                        >
                            <p className="text-contact">Github</p>
                            <img
                                className="icon-standar-contact"
                                src={icons.whiteGithub}
                                alt="github"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            className="button-link-contact"
                            href="https://www.linkedin.com/in/angel-maroto-chivite-14b0a0162/"
                        >
                            <p className="text-contact">Linkedin</p>
                            <img
                                className="icon-standar-contact"
                                src={icons.whiteLinkedin}
                                alt="linkedin"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            className="button-link-contact"
                            href="mailto:ag.chivite@gmail.com"
                        >
                            <p className="text-contact">Email</p>
                            <img
                                className="icon-standar-contact"
                                src={icons.dot}
                                alt="linkedin"
                            />
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Contact;
