import React from "react";
import css from "../../Nav.css";
import { useState } from "react";

const MobileNav = () => {
  const [clicked, transform] = useState(false);

  const shape = () => (clicked ? "exit" : "hamburger");

  return (
    <div
      className={`mobileWrapper ${css.mobileWrapper} ${shape()} ${
        css[`${shape()}`]
      }`}
      onClick={() => (clicked ? transform(false) : transform(true))}
    >
      <div className={`topLine ${css.topLine}`}></div>
      <div className={`middleLine ${css.middleLine}`}></div>
      <div className={`bottomLine ${css.bottomLine}`}></div>
    </div>
  );
};

export default MobileNav;
