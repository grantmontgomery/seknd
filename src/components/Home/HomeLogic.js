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
    schedule
  ]);

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        for (let i = 0; i < entries.length; i++) {
          const { target, intersectionRatio } = entries[i];
          if (target.className.includes("headerScroll")) {
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
          }
          if (target.getAttribute("top") === "header") {
            console.log(`headerBuffer ${intersectionRatio}`);
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
