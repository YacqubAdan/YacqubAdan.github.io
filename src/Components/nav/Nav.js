import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-scroll";
import { MenuItems } from "./MenuItems";
import CV from "../../assets/resume.PDF";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [navLinkOpen, navLinkToggle] = useState("false");

  const handleNavLinkToggle = () => {
    navLinkToggle(!navLinkOpen);
  };

  const renderClasses = () => {
    let classes = "Nav__Items";
    if (navLinkOpen) {
      classes += " active";
    }
    return classes;
  };

  return (
    <div className="Nav">
      <h1 className="navbar-logo">
        {" "}
        <Link to="header" spy={true} smooth={true} offset={-100} duration={100}>
          Y
        </Link>
      </h1>
      <div className="toggle-button" onClick={handleNavLinkToggle}>
        <FaBars />
      </div>
      <div className={renderClasses()}>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            const { cName, url, title } = item;
            return (
              <li key={index}>
                <Link
                  to={url}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className={cName}
                >
                  {title}
                </Link>
              </li>
            );
          })}
          <button className="button">
            <a href={CV} download="yacquubAdanResume">
              resume
            </a>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
