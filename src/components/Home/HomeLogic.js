import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeDisplay from "./HomeDisplay";
import { actions } from "../../redux";

const HomeLogic = () => {
  const dispatch = useDispatch();
  const navStyle = useSelector(state => state.navStylesReducer);
  const { resultsActions, navActions } = actions;

  const [header, setHeaderRef] = useState(null);
  const [devices, setDevicesRef] = useState(null);
  const [search, setSearchRef] = useState(null);
  const [select, setSelectRef] = useState(null);
  const [schedule, setScheduleRef] = useState(null);

  const resetReduxSearch = () => {
    dispatch(resultsActions.renderSelected("ALL"));
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
            console.log(intersectionRatio);
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
        threshold: [
          0,
          0.05,
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
          0.6,
          0.7,
          0.8,
          0.85,
          0.9,
          0.95,
          1.0
        ],
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