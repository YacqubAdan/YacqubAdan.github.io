import React from "react";
import "./portfolio.scss";
import LakersImage from "./../../assets/Lakers.JPG";
import CovidBlogs from "./../../assets/CovidBlogs.JPG";
import QuizGo from "./../../assets/QuizGo.JPG";
import Project from "./../../assets/QuizGoProject.pdf";
import Presentation from "./../../assets/Quiz Go Prensentation.pptx.pdf";

const Portfolio = () => {
  return (
    <div className="Portfolio" id="portfolio">
      <section>
        <h1 className="big-heading-light">Portfolio</h1>
        <div className="project-container">
          <div className="project">
            <div className="project-content">
              <div className="project-label">University Project</div>
              <h4 className="project-title">Lakers Theme Website</h4>
              <div className="project-details">
                <p>
                  This was my first project and an introduction into web
                  development. Here i used vanilla JavaScript HTML and CSS
                  purely as this was required for the front-end module in the
                  course. I enjoyed learning styling my elements, making it come
                  to life and interacting with the DOM. We also learnt about
                  Asynchronous code and APIs which i made use of in this
                  website.
                  <br />
                  <br />
                  <button className="button">
                    <a
                      href="https://ctec3905students.github.io/2019-20-YacqubAdan/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  </button>
                  <button className="button">
                    <a
                      href="https://github.com/ctec3905students/2019-20-YacqubAdan"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </button>
                </p>
                <ul>
                  <li>HTML</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
            <div className="project-img">
              <img src={LakersImage} alt="" />
            </div>
          </div>
          <div className="project">
            <div className="project-content swap">
              <div className="project-label">Project with Supervisor</div>
              <h4 className="project-title">Quiz-Go</h4>
              <div className="project-details">
                <p>
                  Quiz-Go was my university final year project. I decided on
                  creating an educational IOS mobile quiz application using the
                  language swift. The quiz-go app requires users register if
                  they haven't already and choose from a variety of topics. The
                  users information and scores is then stored using firebase as
                  the backend. The waterfall methodology was applied throughout
                  this project. Below is a link to my report and presentation
                  including diagrams of design.
                  <br />
                  <br />
                  <button className="button">
                    <a href={Project} download="Quiz-Go-Project">
                      Project
                    </a>
                  </button>
                  <button className="button">
                    <a href={Presentation} download="Quiz-Go-Presentation">
                      Presentation
                    </a>
                  </button>
                </p>
                <ul>
                  <li>Swift</li>
                  <li>Firebase</li>
                  <li>Storyboards</li>
                </ul>
              </div>
            </div>
            <div className="swap2 project-img">
              <img src={QuizGo} alt="" />
            </div>
          </div>
          <div className="project">
            <div className="project-content">
              <div className="project-label">Current Project</div>
              <h4 className="project-title">Covid Blogs</h4>
              <div className="project-details">
                <p>
                  Covid Blogs is a website which enables people to converse,
                  share their experiences and much more in the form of blogs.
                  Users are prompted to register and login in order to create
                  view and comment on community blogs/articles. The idea behind
                  the creation of this website was to bring people together and
                  create a community during the covid pandemic. I made use of
                  MongoDB NodeJs and Express for my backend storing users, blogs
                  and comments into the database.
                  <br />
                  <br />
                  <button className="button">
                    <a
                      href="https://github.com/YacqubAdan/CovidBlogs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </button>
                </p>
                <ul>
                  <li>Nodejs</li>
                  <li>EJS</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
            <div className="project-img">
              <img src={CovidBlogs} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;