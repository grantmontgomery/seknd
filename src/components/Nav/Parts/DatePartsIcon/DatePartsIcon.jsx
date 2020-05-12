import React from "react";
import css from "./DatePartsIcon.css";

const DatePartsIcon = ({ setMobileState, partsIcon }) => {
  const handleClick = () =>
    partsIcon === "normal"
      ? setMobileState({
          searchBoxNav: "retracted",
          partsIcon: "twisted",
          partsList: "extended",
          hamburger: "hamburger",
          menu: "retracted",
        })
      : setMobileState((state) => ({
          ...state,
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
