import "./Contact.css";

function Contact() {
  return (
    <div id="full-container-contact">
      <span id="navigate-to-contact"></span>
      <h1>Contact</h1>
      <hr className="line-contact" />
      <section className="container-contact">
        <div className="contact-item">
          <a
            href="https://github.com/Sbytmacke"
            target="_blank"
            rel="noopener noreferrer"
            className="link-contact"
          >
            GitHub
          </a>
        </div>
        <div className="contact-item">
          <a
            href="https://www.linkedin.com/in/angel-chivite-14b0a0162/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-contact"
          >
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <a href="mailto:sbytmacke@gmail.com" className="link-contact">
            Correo Electrónico
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
