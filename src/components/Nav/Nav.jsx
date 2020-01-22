import React from "react";
import "./Nav.css";
import logo from "../../assets/Asset3.svg";
import css from "./Nav.css";

const Nav = () => {
  return (
    <React.Fragment>
      <nav className={css.navWrapper}>
        <a href="">
          <img className={css.logo} src={logo} alt="" />
        </a>
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
