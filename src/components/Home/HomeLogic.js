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
  const [devices, setDevicesRef] = useState(null);
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
    if (devices) {
      currentObserver.observe(devices);
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
  }, [header, devices, search, select, schedule]);

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        for (let i = 0; i < entries.length; i++) {
          if (entries[i].target.className.includes("homeHeaderWrapper")) {
            const { intersectionRatio } = entries[i];
            intersectionRatio > 0.33
              ? dispatch(
                  homeScrollActions({
                    type: "BACKGROUND_ACTION_START",
                    payload: {
                      width: 150 * intersectionRatio,
                      height: scrollDifference(200, 75, intersectionRatio),
                      left: scrollDifference(-100, 75, intersectionRatio),
                      top: scrollDifference(-75, 10, intersectionRatio),
                      borderRadius: scrollDifference(100, 0, intersectionRatio)
                    }
                  })
                )
              : dispatch(homeScrollActions("BACKGROUND_ACTION_END"));
            if (intersectionRatio < 0.9 && intersectionRatio > 0.1) {
              dispatch(navActions("NAV_HOME"));
              dispatch(navActions("NAV_OPACITY_ZERO"));
            } else if (intersectionRatio < 0.1) {
              dispatch(navActions("NAV_OTHER"));
            } else {
              dispatch(navActions("NAV_HOME"));
              dispatch(navActions("NAV_OPACITY_FULL"));
            }
          } else if (entries[i].target.className.includes("devicesWrapper")) {
          } else if (entries[i].target.className.includes("searchWrapper")) {
            const { intersectionRatio } = entries[i];

            intersectionRatio >= 0.666
              ? dispatch(
                  searchBoxActions({
                    type: "SEARCH_OPACITY",
                    payload: 1
                  })
                )
              : dispatch(
                  searchBoxActions({
                    type: "SEARCH_OPACITY",
                    payload: 0
                  })
                );
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
      setDevicesRef={setDevicesRef}
      setSearchRef={setSearchRef}
      setSelectRef={setSelectRef}
      setScheduleRef={setScheduleRef}
    ></HomeDisplay>
  );
};

export default HomeLogic;
