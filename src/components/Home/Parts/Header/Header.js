import React from "react";
import { Intro } from "../Intro";
import { Devices } from "../Devices";
import css from "./Header.css";

const Header = ({ render }) => {
  return render === true ? (
    <div className={`headerWrapper ${css.headerWrapper}`}>
      <Intro></Intro>
      <Devices></Devices>
    </div>
  ) : null;
};

export default Header;
