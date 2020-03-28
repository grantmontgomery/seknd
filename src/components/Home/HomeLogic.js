import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeDisplay from "./HomeDisplay";
import { actions } from "../../redux";

const HomeLogic = () => {
  const dispatch = useDispatch();
  const navStyle = useSelector(state => state.nav);
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
    dispatch(navActions("NAV_HOME"));
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
  }, [header, devices]);

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        const first = entries[0];
        console.log(entries);
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
    <HomeDisplay
      setHeaderRef={setHeaderRef}
      setDevicesRef={setDevicesRef}
      setSearchRef={setSearchRef}
      setSelectRef={setSelectRef}
      setScheduleRef={setScheduleRef}
    ></HomeDisplay>
  );
};

export default HomeLogic;
