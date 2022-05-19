import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/coding.png";
import IMG2 from "../../assets/coding.png";
import IMG3 from "../../assets/coding.png";
import IMG4 from "../../assets/coding.png";

const Portfolio = () => {
  return (
    <div className="Portfolio" id="portfolio">
      <section>
        <h1 className="section-title">03. Portfolio</h1>
        <div className="container portfolio__container">
          <div className="portfolio__item">
            <div className="portyfolio__item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a href="https://github.com" className="btn btn-primary">
              Live Demo
            </a>
          </div>
          <div className="portfolio__item">
            <div className="portyfolio__item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a href="https://github.com" className="btn btn-primary">
              Live Demo
            </a>
          </div>
          <article className="portfolio__item">
            <div className="portyfolio__item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a href="https://github.com" className="btn btn-primary">
              Live Demo
            </a>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
