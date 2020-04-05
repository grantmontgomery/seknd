import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scrollDifference, searchBoxTransform } from "./Logic";
import HomeDisplay from "./HomeDisplay";
import { actions } from "../../redux";

const HomeLogic = () => {
  const dispatch = useDispatch();
  const navStyle = useSelector((state) => state.navStylesReducer);
  const {
    resultsActions,
    navActions,
    searchBoxActions,
    homeScrollActions,
  } = actions;

  const [header, setHeaderRef] = useState(null);
  const [headerBuffer, setHeaderBufferRef] = useState(null);
  const [search, setSearchRef] = useState(null);
  const [searchBuffer, setSearchBufferRef] = useState(null);
  const [select, setSelectRef] = useState(null);
  const [selectBuffer, setSelectBufferRef] = useState(null);
  const [schedule, setScheduleRef] = useState(null);

  const resetReduxSearch = () => {
    dispatch(resultsActions.renderSelected("ALL"));
  };

  const thresholdRange = () => {
    let range = [];
    for (let i = 0; i < 100; i++) {
      range.push(i * 0.01);
    }
    range.push(1);
    return range;
  };

  useEffect(() => {
    resetReduxSearch();

    const currentObserver = observer.current;

    if (header) {
      currentObserver.observe(header);
    }
    if (headerBuffer) {
      currentObserver.observe(headerBuffer);
    }
    if (search) {
      currentObserver.observe(search);
    }
    if (searchBuffer) {
      currentObserver.observe(searchBuffer);
    }
    if (select) {
      currentObserver.observe(select);
    }
    if (selectBuffer) {
      currentObserver.observe(selectBuffer);
    }
    if (schedule) {
      currentObserver.observe(schedule);
    }
  }, [
    header,
    headerBuffer,
    search,
    searchBuffer,
    select,
    selectBuffer,
    schedule,
  ]);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          if (entries[i].target.className.includes("headerScroll")) {
            const { intersectionRatio } = entries[i];
            if (intersectionRatio > 0) {
              dispatch(
                homeScrollActions({
                  type: "BACKGROUND_SCROLL",
                  payload: {
                    width: scrollDifference(150, 50, intersectionRatio),
                    height: scrollDifference(200, 75, intersectionRatio),
                    left: scrollDifference(-100, 25, intersectionRatio),
                    top: scrollDifference(-75, 10, intersectionRatio),
                    borderRadius: scrollDifference(100, 0, intersectionRatio),
                  },
                })
              );
              dispatch(homeScrollActions("DISPLAYWRAPPER_DEFAULT"));
              dispatch(navActions("NAV_HOME"));
              dispatch(homeScrollActions("DEVICES_ENTER"));
              dispatch(homeScrollActions("INTRO_STATIC"));
            } else {
              dispatch(homeScrollActions("DEVICES_EXIT"));
            }
          } else if (target.className.includes("transitionBuffer")) {
            if (target.getAttribute("top") === "header") {
              if (intersectionRatio > 0) {
                dispatch(homeScrollActions("BACKGROUND_ACTION_END"));
                dispatch(homeScrollActions("DEVICES_EXIT"));
                dispatch(homeScrollActions("SEARCHWRAPPER_EXIT"));
                dispatch(
                  homeScrollActions({
                    type: "DISPLAYWRAPPER_CHANGE",
                    payload: { display: "flex", flexFlow: "row nowrap" },
                  })
                );
                dispatch(homeScrollActions("INTRO_EXIT"));
                dispatch(navActions("NAV_OTHER"));
              }
            } else if (target.getAttribute("top") === "search") {
              if (intersectionRatio === 1.0) {
                dispatch(homeScrollActions("SEARCHWRAPPER_EXIT"));
                dispatch(homeScrollActions("SELECT_EXIT"));
              }
            } else if (target.getAttribute("top") === "select") {
              if (intersectionRatio === 1.0) {
                dispatch(homeScrollActions("SELECT_EXIT"));
                dispatch(homeScrollActions("SCHEDULE_ENTER"));
              }
            }
          } else if (target.className.includes("searchScroll")) {
            if (intersectionRatio > 0) {
              dispatch(homeScrollActions("SEARCHWRAPPER_ENTER"));
              dispatch(
                homeScrollActions({
                  type: "SEARCHTEXT_SCROLL",
                  payload: { opacity: "1", transform: "translateX()" },
                })
              );
            }
          } else if (target.className.includes("selectScroll")) {
            if (intersectionRatio > 0) {
              dispatch(homeScrollActions("SELECT_ENTER"));
            }
          } else if (target.className.includes("scheduleScroll")) {
          }
        }
      },
      {
        threshold: [...thresholdRange()],
        root: null,
      }
    )
  );

  // const observer = useRef(
  //   new IntersectionObserver(
  //     (entries) => {
  //       for (let i = 0; i < entries.length; i++) {
  //         const { target, intersectionRatio } = entries[i];
  //         if(target.className.includes("header"))
  //         else if (target.className.includes("transitionBuffer")) {

  //         }
  //       }
  //     },
  //     {
  //       threshold: [...thresholdRange()],
  //       root: null,
  //     }
  //   )
  // );

  return (
    <HomeDisplay
      ref={setHeaderRef}
      setHeaderBufferRef={setHeaderBufferRef}
      setSearchRef={setSearchRef}
      setSearchBufferRef={setSearchBufferRef}
      setSelectRef={setSelectRef}
      setSelectBufferRef={setSelectBufferRef}
      setScheduleRef={setScheduleRef}
    ></HomeDisplay>
  );
};

export default HomeLogic;
