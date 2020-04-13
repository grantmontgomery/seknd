import React from "react";
import css from "./Intro.css";
import { useSelector } from "react-redux";
const Intro = () => {
  const { intro } = useSelector(state => state.homeScrollStylesReducer);
  return (
    <div className={`homeIntro ${css.homeIntro}`} style={{ ...intro }}>
      <div className={`sloganWrapper ${css.sloganWrapper}`}>
        <h1>Less time looking, more second dates.</h1>
      </div>
      <div className={`subHeader ${css.subHeader}`}>
        <h2>You've got the match, now set the perfect date.</h2>
      </div>
    </div>
  );
};

export default Intro;
