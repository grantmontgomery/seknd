import React from "react";
import css from "./DatePartsIcon.css";

const DatePartsIcon = ({ setMobileState, partsIcon }) => {
  const handleClick = () =>
    partsIcon === "normal"
      ? setMobileState({
          partsIcon: "twisted",
          partsList: "extended",
          hamburger: "hamburger",
          menu: "retracted",
        })
      : setMobileState((state) => ({
          ...state,
          partsIcon: "normal",
          partsList: "retracted",
        }));

  return (
    <div
      className={`partsIcon ${css.partsIcon} ${partsIcon} ${
        css[`${partsIcon}`]
      }`}
      onClick={handleClick}
    ></div>
  );
};

export default DatePartsIcon;
