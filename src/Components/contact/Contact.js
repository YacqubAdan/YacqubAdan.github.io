import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <section className="section-general">
        <div className="container container--narrow">
          <h1 className="big-heading-light">Get In Touch</h1>
          <p>
            Excited for any opportunity in this field. Drop me a message and
            I'll be sure to reply!
          </p>
          <button className="contact-button">
            <a href="mailto:yacquubadan.1@gmail.com">Hello!</a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
