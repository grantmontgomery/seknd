import React, { useEffect, useState } from "react";
import { SearchBox } from "../Search-Box";
import css from "./Home.css";
import { useDispatch } from "react-redux";
import PerchPlaceCard from "../../assets/PerchPlaceCard.png";
import { FloatingPart } from "./Parts";
import { actions } from "../../redux";

const Home = () => {
  const dispatch = useDispatch();
  const { resultsActions } = actions;

  const [state, setState] = useState({ hover: false });

  const hoverOn = () => {
    setState({ hover: true });
  };

  const hoverOff = () => {
    setState({ hover: false });
  };

  const resetReduxSearch = () => {
    dispatch(resultsActions.renderSelected("ALL"));
  };

  useEffect(() => {
    resetReduxSearch();
  }, []);

  return (
    <div className={`homeWrapper ${css.homeWrapper}`}>
      <div className={`homeIntro ${css.homeIntro}`}>
        <div className={`sloganWrapper ${css.sloganWrapper}`}>
          <h1>LESS TIME LOOKING,</h1>
          <h1>MORE SECOND DATES</h1>
        </div>
      </div>
      <div
        className={`floatingBackground ${css.floatingBackground}`}
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
      >
        <FloatingPart hover={state.hover} image={PerchPlaceCard}></FloatingPart>
      </div>

      <SearchBox page="home"></SearchBox>
    </div>
  );
};

export default Home;
