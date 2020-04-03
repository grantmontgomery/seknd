import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scrollDifference, searchBoxTransform } from "./Logic";
import HomeDisplay from "./HomeDisplay";
import { actions } from "../../redux";

const HomeLogic = () => {
  const dispatch = useDispatch();
  const navStyle = useSelector(state => state.navStylesReducer);
  const {
    resultsActions,
    navActions,
    searchBoxActions,
    homeScrollActions
  } = actions;

  const [header, setHeaderRef] = useState(null);
  const [search, setSearchRef] = useState(null);
  const [select, setSelectRef] = useState(null);
  const [schedule, setScheduleRef] = useState(null);

  const resetReduxSearch = () => {
    dispatch(resultsActions.renderSelected("ALL"));
  };

  const thresholdRange = () => {
    let range = [];
    for (let i = 0.0; i < 1; i += 0.01) {
      range.push(i);
    }
    return range;
  };

  useEffect(() => {
    resetReduxSearch();

    const currentObserver = observer.current;

    if (header) {
      currentObserver.observe(header);
    }
    if (search) {
      currentObserver.observe(search);
    }
    if (select) {
      currentObserver.observe(select);
    }
    if (schedule) {
      currentObserver.observe(schedule);
    }
  }, [header, search, select, schedule]);

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        for (let i = 0; i < entries.length; i++) {
          if (entries[i].target.className.includes("headerScroll")) {
            const { intersectionRatio } = entries[i];
            if (intersectionRatio >= 0.6) {
              dispatch(homeScrollActions("DISPLAYWRAPPER_DEFAULT"));
              dispatch(homeScrollActions("BACKGROUND_ACTION_START"));
              dispatch(navActions("NAV_HOME"));
              dispatch(homeScrollActions("DEVICES_ENTER"));
              dispatch(homeScrollActions("INTRO_STATIC"));
            } else if (intersectionRatio < 0.6 && intersectionRatio > 0.25) {
              dispatch(navActions("NAV_HOME"));
              dispatch(homeScrollActions("DISPLAYWRAPPER_DEFAULT"));
              dispatch(
                homeScrollActions({
                  type: "BACKGROUND_SCROLL",
                  payload: {
                    width: scrollDifference(150, 50, intersectionRatio),
                    height: scrollDifference(200, 75, intersectionRatio),
                    left: scrollDifference(-100, 25, intersectionRatio),
                    top: scrollDifference(-75, 10, intersectionRatio),
                    borderRadius: scrollDifference(100, 0, intersectionRatio)
                  }
                })
              );
            } else {
              dispatch(homeScrollActions("BACKGROUND_ACTION_END"));
              dispatch(homeScrollActions("DEVICES_EXIT"));
              dispatch(homeScrollActions("INTRO_EXIT"));
              dispatch(
                homeScrollActions({
                  type: "DISPLAYWRAPPER_CHANGE",
                  payload: { display: "flex", flexFlow: "row nowrap" }
                })
              );
              dispatch(navActions("NAV_OTHER"));
            }
          } else if (entries[i].target.className.includes("searchScroll")) {
            const { intersectionRatio } = entries[i];
            if (intersectionRatio >= 0.35) {
              dispatch(homeScrollActions("SEARCHWRAPPER_ENTER"));
              dispatch(
                homeScrollActions({
                  type: "SEARCHTEXT_SCROLL",
                  payload: {
                    ...searchBoxTransform(intersectionRatio)
                  }
                })
              );
              dispatch(
                homeScrollActions({
                  type: "SEARCHBOX_SCROLL",
                  payload: { opacity: "1", transform: "translateX()" }
                })
              );
            } else {
              dispatch(homeScrollActions("SEARCHWRAPPER_EXIT"));
            }
          } else if (entries[i].target.className.includes("selectScroll")) {
            const { intersectionRatio } = entries[i];
            if (intersectionRatio >= 0.25) {
              dispatch(homeScrollActions("SELECT_ENTER"));
              dispatch(
                homeScrollActions({
                  type: "SELECT_PARTS_SCROLL",
                  payload: {
                    partOne: { opacity: "1.0", transform: `translateX(${0})` },
                    partTwo: { opacity: "1.0", transform: `translateX(${0})` }
                  }
                })
              );
            } else {
              console.log("select exiting.");
              dispatch(homeScrollActions("SELECT_EXIT"));
            }
          } else if (entries[i].target.className.includes("scheduleScroll")) {
            const { intersectionRatio } = entries[i];
            if (intersectionRatio >= 0.35) {
              dispatch(homeScrollActions("SCHEDULE_ENTER"));
              dispatch(
                homeScrollActions({
                  type: "SCHEDULE_PARTS_SCROLL",
                  payload: {
                    grid: { opacity: "1.0", transform: `translateX(${0})` },
                    piece: { opacity: "1.0", transform: `translateX(${0})` }
                  }
                })
              );
            } else {
              dispatch(homeScrollActions("SCHEDULE_EXIT"));
            }
          }
        }
      },
      {
        threshold: [...thresholdRange()],
        root: null
      }
    )
  );

  return (
    <HomeDisplay
      ref={setHeaderRef}
      setSearchRef={setSearchRef}
      setSelectRef={setSelectRef}
      setScheduleRef={setScheduleRef}
    ></HomeDisplay>
  );
};

export default HomeLogic;
