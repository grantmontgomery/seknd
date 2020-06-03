import React from "react";
import css from "./MobileInnerInfo.css";

const MobileInnerInfo = ({ name }) => {
  return (
    <div className={`infoWrapper ${css.infoWrapper}`}>
      <div className={`infoName ${css.infoName}`}>{`${name}`}</div>
    </div>
  );
};

export default MobileInnerInfo;
