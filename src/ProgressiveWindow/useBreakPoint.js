import { useState, useEffect } from "react";
import throttle from "../throttle";
import getDeviceConfig from "./getDeviceConfig";

const useBreakPoint = () => {
  const [brkPnt, setBrkPnt] = useState(() =>
    getDeviceConfig(window.innerWidth)
  );

  useEffect(() => {
    window.addEventListener(
      "resize",
      throttle(setBrkPnt(getDeviceConfig(window.innerWidth)), 1000)
    );
  });
};

export default useBreakPoint;
