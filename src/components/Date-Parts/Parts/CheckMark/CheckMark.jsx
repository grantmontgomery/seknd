import React, { useEffect } from "react";
import css from "./CheckMark.css";
import { useState } from "react";

const CheckMark = ({ pageType }) => {
  let [pageClass, setClass] = useState("");

  useEffect(() => {
    setClass(pageType);
  }, []);
  return (
    <div
      className={`checkMarkWrapper ${css.checkMarkWrapper} ${pageClass} ${
        css[`${pageClass}`]
      }`}
    >
      <svg
        height="14"
        id="check"
        viewBox="0 0 32 32"
        width="14"
        xmlns="http://www.w3.org/2000/svg"
        className={`checkMark ${css.checkMark}`}
      >
        <path
          className={`path ${css.path}`}
          d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"
        />
      </svg>
    </div>
  );
};

export default CheckMark;
