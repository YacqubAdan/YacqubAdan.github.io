import React, { useState } from "react";
import "./about.css";
import ImageLogo from "./../../assets/coding.png";
import { AboutContent } from "./AboutContent";
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { DiJavascript1, DiNodejs, DiJava, DiSwift } from "react-icons/di";
import { fagithub } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "./../../assets/avatar.png";

const About = () => {
  const { about, experience, education } = AboutContent;
  const [aboutContent, changeAboutContent] = useState(about.text);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="About" id="about">
      <div className="about-wrapper">
        <div className="about-left">
          <div className="about-left-content">
            <div>
              <div className="shadow">
                <div className="about-img">
                  <img src={Avatar} alt="avatar" />
                </div>
              </div>

              <h2 className="main-input">Yacquub Adan</h2>
              <h3>Full Stack Developer</h3>
            </div>

            <ul className="icons">
              <li>
                <a
                  href="https://github.com/YacqubAdan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yacquub-adan-b17535234/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </li>
            </ul>
          </div>
          <div className="about-left-content content-input">
            <h3>Skills & Languages</h3>
            <ul className="icons">
              <li>
                <DiJavascript1 />
              </li>
              <li>
                <DiNodejs />
              </li>
              <li>
                <DiSwift />
              </li>
              <li>
                <FaReact />
              </li>
            </ul>
          </div>
        </div>

        <div className="about-right">
          <h1 className="big-heading-light">
            About<span>ME!</span>
          </h1>
          <h2>journey...</h2>
          <div className="about-btns">
            <button
              className={
                toggleState === 1
                  ? "about-button-active"
                  : "about-button-default"
              }
              onClick={() => {
                toggleTab(1);
                changeAboutContent(about.text);
              }}
            >
              About
            </button>
            <button
              className={
                toggleState === 2
                  ? "about-button-active"
                  : "about-button-default"
              }
              onClick={() => {
                toggleTab(2);
                changeAboutContent(education.text);
              }}
            >
              Education
            </button>
          </div>

          <div className="about-para">
            <p>{aboutContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
