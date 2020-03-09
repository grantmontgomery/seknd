import React from "react";
import css from "./DirectionsPiece.css";

const DirectionsPiece = () => {
  return (
    <div className={`directionsWrapper ${css.directionsWrapper}`}>
      <div className={`textWrapper ${css.textWrapper}`}>
        Make a Search to get started!
      </div>
    </div>
  );
};

export default DirectionsPiece;
