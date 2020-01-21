import React from "react";
import "./Nav.css";
import css from "./Nav.css";

const Nav = () => {
  return (
    <React.Fragment>
      <nav className={css.navWrapper}>
        <img src="" alt="" />
        <ul>
          <li>Sign In</li>
          <li>Scheduler</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
