import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scrollDifference } from "./Logic";
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
    if (schedule) {
      currentObserver.observe(schedule);
    }
    if (select) {
      currentObserver.observe(select);
    }
  }, [header, search, select, schedule]);

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        for (let i = 0; i < entries.length; i++) {
          if (entries[i].target.className.includes("homeHeaderWrapper")) {
            const { intersectionRatio } = entries[i];
            if (intersectionRatio >= 0.95) {
              dispatch(homeScrollActions("DISPLAYWRAPPER_DEFAULT"));
              dispatch(homeScrollActions("BACKGROUND_ACTION_START"));
              dispatch(navActions("NAV_HOME"));
            } else if (intersectionRatio < 0.95 && intersectionRatio > 0.33) {
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
            // if (intersectionRatio < 0.9 && intersectionRatio > 0.1) {
            //   dispatch(navActions("NAV_HOME"));
            //   dispatch(navActions("NAV_OPACITY_ZERO"));
            // } else if (intersectionRatio < 0.1) {
            //   dispatch(navActions("NAV_OTHER"));
            // } else {
            //   dispatch(navActions("NAV_HOME"));
            //   dispatch(navActions("NAV_OPACITY_FULL"));
            // }
          } else if (entries[i].target.className.includes("searchWrapper")) {
            const { intersectionRatio } = entries[i];

            intersectionRatio < 0.75 && intersectionRatio > 0.25
              ? (dispatch(homeScrollActions("SEARCHWRAPPER_ENTER")),
              dispatch(homeScrollActions({type: "SEARCHTEXT_SCROLL", payload: {opacity: "1", transform: "translateX()" }}))
              : dispatch(homeScrollActions("SEARCHWRAPPER_EXIT"))
          } else if (entries[i].target.className.includes("selectWrapper")) {
          } else if (entries[i].target.className.includes("scheduleWrapper")) {
          }
        }
        // console.log(entries);
        // if (header) {
        //   console.log(header.intersectionRatio);
        // header.intersectionRatio > 0.01
        //   ? dispatch(navActions("NAV_HOME"))
        //   : dispatch(navActions("NAV_OTHER"));
        // }

        // if (devices) {
        //   if(devices.intersectionRatio )
        // }
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
