import React from "react";
import "./Nav.css";
import styles from "./Nav.module.css";

const Nav = () => {
  console.log(styles);
  return (
    <React.Fragment>
      <nav className={styles.navWrapper}>
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
