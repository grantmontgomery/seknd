import React from "react";
import "./Nav.css";
import css from "./Nav.css";

const Nav = () => {
  console.log(css);
  return (
    <React.Fragment>
      <nav className={css.navWrapper}>
        <img src="" alt="" />
        <ul>
          <li>Sign In</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
