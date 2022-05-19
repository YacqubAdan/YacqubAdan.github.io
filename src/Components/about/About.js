import React, { useState } from "react";
import "./about.css";
import ImageLogo from "./../../assets/coding.png";
import { AboutContent } from "./AboutContent";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { DiJavascript1, DiNodejs, DiJava, DiSwift } from "react-icons/di";
const About = () => {
  const { about, skills, experience, education } = AboutContent;
  const [aboutContent, changeAboutContent] = useState(about);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="About" id="about">
      <section>
        <h1 className="section-title">01. About Me</h1>
        <div className="About__Container">
          <div className="about-button">
            <button
              className={
                toggleState === 1
                  ? "about-button-active"
                  : "about-button-default"
              }
              onClick={() => {
                toggleTab(1);
                changeAboutContent(about);
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
                changeAboutContent(education);
              }}
            >
              Education
            </button>
            <button
              className={
                toggleState === 3
                  ? "about-button-active"
                  : "about-button-default"
              }
              onClick={() => {
                toggleTab(3);
                changeAboutContent(experience);
              }}
            >
              Experience
            </button>
          </div>
          <div className="About__Content">
            <div className="about-text">
              <p>{aboutContent}</p>
            </div>
            <div className="about-skills">
              <p>{skills}</p>
              <div className="about-icons">
                <FaReact />
                <DiJavascript1 />
                <DiNodejs />
                <DiSwift />
                <SiTypescript />
                <SiMongodb />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
