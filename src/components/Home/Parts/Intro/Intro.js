import React from "react";
import css from "./Intro.css";

const Intro = ({ render }) => {
  return render === true ? (
    <div className={`homeIntro ${css.homeIntro}`}>
      <div className={`sloganWrapper ${css.sloganWrapper}`}>
        <h1>LESS TIME LOOKING,</h1>
        <h1>MORE SECOND DATES</h1>
      </div>
      <div className={`subHeader ${css.subHeader}`}>
        <h2>YOU'VE GOT THE MATCH, NOW SET THE PERFECT DATE.</h2>
      </div>
    </div>
  ) : null;
};

export default Intro;
