import React, { useEffect } from "react";
import { SearchBox } from "../Search-Box";
import css from "./Home.css";
import { useDispatch } from "react-redux";
import PerchPlaceCard from "../../assets/PerchPlaceCard.png";
import { FloatingPart } from "./Parts";
import { actions } from "../../redux";

const Home = () => {
  const dispatch = useDispatch();
  const { resultsActions } = actions;

  const resetReduxSearch = () => {
    dispatch(resultsActions.renderSelected("ALL"));
  };

  console.log(PerchPlaceCard);

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
      <FloatingPart image={PerchPlaceCard}></FloatingPart>

      <SearchBox page="home"></SearchBox>
    </div>
  );
};

export default Home;
