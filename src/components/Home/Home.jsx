import React, { useEffect, useState } from "react";
import { SearchBox } from "../Search-Box";
import css from "./Home.css";
import { useDispatch } from "react-redux";
import PerchPlaceCard from "../../assets/PerchPlaceCard.png";
import StrappedUpCard from "../../assets/StrappedUpEventCard.png";
import { FloatingPart, Schedule } from "./Parts";
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
        <div className={`subHeader ${css.subHeader}`}>
          <h2>YOU'VE GOT THE MATCH, NOW SET THE PERFECT DATE IN 3 STEPS.</h2>
        </div>
      </div>
      <div
        className={`floatingBackground ${css.floatingBackground}`}
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
      >
        <FloatingPart
          hover={state.hover}
          image={PerchPlaceCard}
          position={{
            marginTop: "0px",
            marginRight: "-40px"
          }}
          rotation="rotateX(25deg) rotateY(25deg)"
          filter="drop-shadow(20px 50px 10px rgba(25, 25, 25, 0.5))"
        ></FloatingPart>
        <FloatingPart
          hover={state.hover}
          image={StrappedUpCard}
          position={{
            marginLeft: "-40px",
            marginTop: "-50px"
          }}
          rotation="rotateX(-25deg) rotateY(25deg)"
          filter="drop-shadow(-20px 50px 10px rgba(25, 25, 25, 0.5))"
        ></FloatingPart>
      </div>

      <SearchBox page="home"></SearchBox>
      <Schedule></Schedule>
    </div>
  );
};

export default Home;
