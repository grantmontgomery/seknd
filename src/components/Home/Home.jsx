import React, { useEffect, useState, useRef } from "react";
import { SearchBox } from "../Search-Box";
import css from "./Home.css";
import { useDispatch, useSelector } from "react-redux";

import {
  FloatingPart,
  Schedule,
  Step,
  Works,
  Devices,
  Select,
  Search
} from "./Parts";
import { actions } from "../../redux";

const Home = () => {
  const dispatch = useDispatch();
  const navStyle = useSelector(state => state.nav);
  const { resultsActions, navActions } = actions;

  let [element, setElement] = useState(null);

  const resetReduxSearch = () => {
    dispatch(resultsActions.renderSelected("ALL"));
  };

  useEffect(() => {
    resetReduxSearch();
    dispatch(navActions("NAV_HOME"));
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }
  }, [element]);

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        const first = entries[0];
        if (first.intersectionRatio > 0.01) {
          console.log(first.intersectionRatio);
          dispatch(navActions("NAV_HOME"));
        } else {
          dispatch(navActions("NAV_OTHER"));
        }
      },
      {
        threshold: [0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
      }
    )
  );

  return (
    <div className={`homeWrapper ${css.homeWrapper}`}>
      <div className={`decorDiv ${css.decorDiv}`}></div>

      <div
        className={`homeHeaderWrapper ${css.homeHeaderWrapper}`}
        ref={setElement}
      >
        <div className={`homeIntro ${css.homeIntro}`}>
          <div className={`sloganWrapper ${css.sloganWrapper}`}>
            <h1>LESS TIME LOOKING,</h1>
            <h1>MORE SECOND DATES</h1>
          </div>
          <div className={`subHeader ${css.subHeader}`}>
            <h2>YOU'VE GOT THE MATCH, NOW SET THE PERFECT DATE.</h2>
          </div>
        </div>
        <Devices></Devices>
        <Works></Works>
      </div>
      <Search></Search>
      <Select></Select>
      <Schedule></Schedule>
    </div>
  );
};

export default Home;
