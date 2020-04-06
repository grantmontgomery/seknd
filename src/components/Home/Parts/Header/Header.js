import React from "react";
import { Intro } from "../Intro";
import { Devices } from "../Devices";
import css from "./Header.css";

const Header = ({ render }) => {
  return render === true ? (
    <React.Fragment>
      <Intro></Intro>
      <Devices></Devices>
    </React.Fragment>
  ) : null;
};

export default Header;
