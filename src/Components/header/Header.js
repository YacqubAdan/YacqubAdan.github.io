import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="Header" id="header">
      <section className="header-align">
        <div className="container container--narrow">
          <h1 className="small-heading">Hi, my name is</h1>
          <h1 className="big-heading-light">Yacquub Adan.</h1>
          <h1 className="big-heading-light">Welcome!</h1>
          <p>
            A passionate, enthusiastic full stack developer seeking to grow and
            learn new technologies and contribute to team success.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Header;
