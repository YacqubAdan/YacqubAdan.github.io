import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <section>
        <div className="section-title">
          <span>Get In Touch</span>
        </div>
        <button className="contact-button">
          <a href="mailto:yacquubadan.1@gmail.com">Get In Touch</a>
        </button>
      </section>
    </div>
  );
};

export default Contact;
