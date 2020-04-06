import React from "react";
import css from "./Intro.css";
import { useSelector } from "react-redux";
const Intro = () => {
  const { intro } = useSelector((state) => state.homeScrollStylesReducer);
  return (
    <div className={`homeIntro ${css.homeIntro}`} style={{ ...intro }}>
      <div className={`sloganWrapper ${css.sloganWrapper}`}>
        <h1>LESS TIME LOOKING,</h1>
        <h1>MORE SECOND DATES</h1>
      </div>
      <div className={`subHeader ${css.subHeader}`}>
        <h2>YOU'VE GOT THE MATCH, NOW SET THE PERFECT DATE.</h2>
      </div>
    </div>
  );
};

export default Intro;
