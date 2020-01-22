import React from "react";
import { SearchBox } from "../Search-Box";
import css from "./Header.css";

const Header = () => {
  return (
    <div className={css.headerWrapper}>
      <header>
        <div className={css.sloganWrapper}>
          <h1>LESS TIME LOOKING,</h1>
          <h1>MORE SECOND DATES</h1>
        </div>
        <div className={css.emblemWrapper}>
          <div className={css.emblem}></div>
          <div className={css.emblem}></div>
          <div className={css.emblem}></div>
        </div>
        <SearchBox></SearchBox>
      </header>
    </div>
  );
};

export default Header;
