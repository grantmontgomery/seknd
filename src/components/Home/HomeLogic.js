import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  scrollDifference,
  selectPartsScrollDown,
  selectPartsScrollUp,
  scheduleTransform,
} from "./Logic";
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
          const { intersectionRatio, target } = entries[i];
          if (target.className.includes("headerScroll")) {
            if (intersectionRatio >= 0.25) {
              dispatch(homeScrollActions("SEARCHWRAPPER_EXIT"));
              dispatch(homeScrollActions("SELECT_EXIT"));
              dispatch(homeScrollActions("SCHEDULE_EXIT"));
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
              dispatch(homeScrollActions({ type: "POINTER_EXIT" }));

              if (intersectionRatio >= 0.4) {
                dispatch(homeScrollActions("WORKS_ENTER"));
              }

              dispatch(
                homeScrollActions({
                  type: "DEVICES_SCROLL",
                  payload: {
                    transform: `translate(${scrollDifference(
                      5,
                      30,
                      intersectionRatio
                    )}%, -50%)`,
                    opacity: `${1 - (0.5 - intersectionRatio) * 4}`,
                  },
                })
              );
              dispatch(
                homeScrollActions({
                  type: "INTRO_SCROLL",
                  payload: {
                    transform: `translate(0, ${scrollDifference(
                      -50,
                      -30,
                      intersectionRatio
                    )}%)`,
                    opacity: `${intersectionRatio >= 0.5 ? "1" : "0"}`,
                  },
                })
              );
              dispatch(navActions("NAV_HOME"));

              dispatch(homeScrollActions("HEADER_ENTER"));
              dispatch(homeScrollActions("SCROLL_POSITION_EXIT"));
              dispatch(homeScrollActions("SOCIAL_MEDIA_EXIT"));
            } else {
              dispatch(homeScrollActions("HEADER_EXIT"));
            }
          } else if (target.className.includes("transitionBuffer")) {
            if (target.getAttribute("top") === "header") {
              if (intersectionRatio >= 0.5) {
                dispatch(homeScrollActions("BACKGROUND_ACTION_END"));
                dispatch(homeScrollActions("HEADER_EXIT"));
                dispatch(homeScrollActions("WORKS_EXIT"));

                dispatch(homeScrollActions("SCROLL_POSITION_ENTER"));
                dispatch(homeScrollActions("SOCIAL_MEDIA_ENTER"));
                dispatch(homeScrollActions("SEARCHWRAPPER_EXIT"));
                dispatch(homeScrollActions("SELECT_EXIT"));
                dispatch(homeScrollActions("SCHEDULE_EXIT"));
                dispatch(
                  homeScrollActions({
                    type: "DISPLAYWRAPPER_CHANGE",
                    payload: { display: "flex", flexFlow: "row nowrap" },
                  })
                );
                dispatch(navActions("NAV_OTHER"));
              }
            } else if (target.getAttribute("top") === "search") {
              if (intersectionRatio >= 0.5) {
                dispatch(homeScrollActions("SEARCHWRAPPER_EXIT"));
                dispatch(homeScrollActions("SELECT_EXIT"));
                dispatch(homeScrollActions("SCHEDULE_EXIT"));
                dispatch(homeScrollActions({ type: "POINTER_EXIT" }));
                dispatch(homeScrollActions("WORKS_EXIT"));

                // dispatch(
                //   homeScrollActions({
                //     type: "DISPLAYWRAPPER_CHANGE",
                //     payload: { display: "flex", flexFlow: "row nowrap" }
                //   })
                // );
              } else if (intersectionRatio <= 0.25) {
                dispatch(
                  homeScrollActions({
                    type: "SELECT_PARTS_SCROLL",
                    payload: {
                      partOne: selectPartsScrollDown(
                        -50,
                        -110,
                        "rotateX(-25deg) rotateY(25deg)",
                        intersectionRatio
                      ),
                      partTwo: selectPartsScrollDown(
                        -50,
                        10,
                        "rotateX(25deg) rotateY(25deg)",
                        intersectionRatio
                      ),
                    },
                  })
                );
              }
            } else if (target.getAttribute("top") === "select") {
              if (intersectionRatio >= 0.5) {
                dispatch(
                  homeScrollActions({
                    type: "DISPLAYWRAPPER_CHANGE",
                    payload: { display: "flex", flexFlow: "row nowrap" },
                  })
                );
                dispatch(homeScrollActions("GET_STARTED_EXIT"));
                dispatch(homeScrollActions("SEARCHWRAPPER_EXIT"));
                dispatch(homeScrollActions("POINTER_EXIT"));
                dispatch(homeScrollActions("WORKS_EXIT"));

                dispatch(homeScrollActions("SELECT_EXIT"));
                dispatch(homeScrollActions("SCHEDULE_EXIT"));
              } else if (intersectionRatio <= 0.25) {
                dispatch(
                  homeScrollActions({
                    type: "SELECT_PARTS_SCROLL",
                    payload: {
                      partOne: selectPartsScrollDown(
                        -50,
                        10,
                        "rotateX(-25deg) rotateY(25deg)",
                        intersectionRatio
                      ),
                      partTwo: selectPartsScrollDown(
                        -50,
                        -110,
                        "rotateX(25deg) rotateY(25deg)",
                        intersectionRatio
                      ),
                    },
                  })
                );
              }
            }
          } else if (target.className.includes("searchScroll")) {
            if (intersectionRatio >= 0.25) {
              dispatch(homeScrollActions("SEARCHWRAPPER_ENTER"));
              dispatch(homeScrollActions("SCROLL_POSITION_SEARCH"));
              dispatch(homeScrollActions("SELECT_EXIT"));
              dispatch(homeScrollActions("SCHEDULE_EXIT"));
              dispatch(homeScrollActions("BACKGROUND_ACTION_END"));
              dispatch(
                homeScrollActions({
                  type: "POINTER_ENTER",
                  payload: {
                    opacity: `${intersectionRatio >= 0.49 ? "1" : "0"}`,
                  },
                })
              );
              dispatch(
                homeScrollActions({
                  type: "SEARCHTEXT_SCROLL",
                  payload: {
                    opacity: `${intersectionRatio >= 0.5 ? "1" : "0"}`,
                    transform: `translate(${
                      intersectionRatio >= 0.5 ? "0" : "-30%"
                    }, -50%)`,
                  },
                })
              );
              dispatch(
                homeScrollActions({
                  type: "SEARCHBOX_SCROLL",
                  payload: {
                    opacity: `${1 - (0.5 - intersectionRatio) * 4}`,
                    transform: `translateY(-50%) translateX(${scrollDifference(
                      0,
                      15,
                      intersectionRatio
                    )}%)`,
                  },
                })
              );
            }
          }

          if (target.className.includes("selectScroll")) {
            if (intersectionRatio >= 0.25) {
              dispatch(homeScrollActions("BACKGROUND_ACTION_END"));
              dispatch(homeScrollActions({ type: "POINTER_EXIT" }));

              dispatch(homeScrollActions("SELECT_ENTER"));
              dispatch(homeScrollActions("SEARCHWRAPPER_EXIT"));
              dispatch(
                homeScrollActions({
                  type: "SELECT_TEXT_ENTER",
                  payload: {
                    opacity: `${intersectionRatio >= 0.49 ? "1" : "0"}`,
                    // transform: `translate(0, ${
                    //   intersectionRatio >= 0.5 ? "-50%" : "-30%"
                    // })`
                  },
                })
              );
              dispatch(homeScrollActions("SCHEDULE_EXIT"));

              dispatch(homeScrollActions("SCROLL_POSITION_SELECT"));
            }
          } else if (target.className.includes("scheduleScroll")) {
            if (intersectionRatio >= 0.25) {
              dispatch(homeScrollActions("BACKGROUND_ACTION_END"));
              dispatch(homeScrollActions({ type: "POINTER_EXIT" }));

              dispatch(homeScrollActions("SCHEDULE_ENTER"));
              dispatch(
                homeScrollActions({
                  type: "SCHEDULE_TEXT_SCROLL",
                  payload: {
                    opacity: `${intersectionRatio >= 0.49 ? "1" : "0"}`,
                    // transform: `translate(0, ${
                    //   intersectionRatio >= 0.49 ? "-50%" : "-80%"
                    // })`
                  },
                })
              );
              dispatch(
                homeScrollActions({
                  type: "SCHEDULE_PARTS_SCROLL",
                  payload: {
                    grid: {
                      opacity: `${(intersectionRatio - 0.25) * 8}`,
                    },
                    piece: {
                      ...scheduleTransform(-150, 0, intersectionRatio),
                    },
                  },
                })
              );
              dispatch(homeScrollActions("SEARCHWRAPPER_EXIT"));
              dispatch(homeScrollActions("SELECT_EXIT"));
              dispatch(homeScrollActions("SCROLL_POSITION_SCHEDULE"));
              if (intersectionRatio >= 0.49) {
                dispatch(homeScrollActions("GET_STARTED_ENTER"));
              }
            }
          }
        }
      },
      {
        threshold: [...thresholdRange()],
        root: null,
      }
    )
  );

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
