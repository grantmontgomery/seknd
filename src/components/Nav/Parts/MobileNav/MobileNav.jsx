import React from "react";
import css from "../../Nav.css";
import { useState } from "react";

const MobileNav = ({ setMobileState, hamburger }) => {
  const handleTap = () => {
    return hamburger === "hamburger"
      ? setMobileState({
          partsIcon: "normal",
          partsList: "retracted",
          menu: "extended",
          hamburger: "exit",
        })
      : setMobileState((state) => ({
          ...state,
          menu: "retracted",
          hamburger: "hamburger",
        }));
  };

  return (
    <div
      className={`mobileWrapper ${css.mobileWrapper} ${hamburger} ${
        css[`${hamburger}`]
      }`}
      onClick={handleTap}
    >
      <div className={`topLine ${css.topLine}`}></div>
      <div className={`middleLine ${css.middleLine}`}></div>
      <div className={`bottomLine ${css.bottomLine}`}></div>
    </div>
  );
};

export default MobileNav;
