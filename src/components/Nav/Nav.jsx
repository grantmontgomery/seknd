import React from "react";
import "./Nav.css";
import logo from "../../assets/Asset3.svg";
import AltLogoBlack from "../../assets/AltLogoBlack.svg";
import AltLogoWhite from "../../assets/AltLogoWhite.svg";
import { Link } from "react-router-dom";
import css from "./Nav.css";

const Nav = () => {
  return (
    <React.Fragment>
      <nav className={`navWrapper ${css.navWrapper}`}>
        <div className={`logoWrapper ${css.logoWrapper}`}>
          <Link to="/">
            <img className={`logo ${css.logo}`} src={AltLogoBlack} alt="" />
          </Link>
        </div>
        <div className={`linksWrapper ${css.linksWrapper}`}>
          <div className={`pageLink ${css.pageLink}`}>
            <Link style={{ color: "black" }} to="/signin">
              Sign In
            </Link>
          </div>
          <div className={`pageLink ${css.pageLink}`}>
            <Link style={{ color: "black" }} to="/search">
              Search
            </Link>
          </div>
          <div className={`pageLink ${css.pageLink}`}>
            <Link style={{ color: "black" }} to="/scheduler">
              Schedule
            </Link>
          </div>
          <div className={`pageLink ${css.pageLink}`}>
            <Link style={{ color: "black" }} to="/about">
              About
            </Link>
          </div>
          <div className={`pageLink ${css.pageLink}`}>
            <Link style={{ color: "black" }} to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
