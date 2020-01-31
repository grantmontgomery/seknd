import React from "react";
import "./Nav.css";
import logo from "../../assets/Asset3.svg";
import { Link } from "react-router-dom";
import css from "./Nav.css";

const Nav = () => {
  return (
    <React.Fragment>
      <nav className={`navWrapper ${css.navWrapper}`}>
        <Link className={`logoWrapper ${css.logoWrapper}`} to="/">
          <img className={`logo ${css.logo}`} src={logo} alt="" />
        </Link>

        <ul className={`navLinks ${css.navLinks}`}>
          <Link style={{ color: "black" }} to="/signin">
            <li>Sign In</li>
          </Link>
          <Link style={{ color: "black" }} to="/">
            <li>Search</li>
          </Link>
          <Link style={{ color: "black" }} to="/scheduler">
            <li>Scheduler</li>
          </Link>
          <Link style={{ color: "black" }} to="/about">
            <li>About</li>
          </Link>
          <Link style={{ color: "black" }} to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
