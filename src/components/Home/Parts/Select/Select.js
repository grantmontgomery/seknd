import React, { useState } from "react";
import { Step } from "../Step";
import { FloatingPart } from "../FloatingPart";
import PerchPlaceCard from "../../../../assets/PerchPlaceCard.png";
import StrappedUpCard from "../../../../assets/StrappedUpEventCard.png";
import css from "./Select.css";

const Select = () => {
  const [state, setState] = useState({ hover: false });

  const hoverOn = () => {
    setState({ hover: true });
  };

  const hoverOff = () => {
    setState({ hover: false });
  };

  return (
    <div
      className={`selectWrapper ${css.selectWrapper}`}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
    >
      <Step text="Select"></Step>
      <div className={`floatingWrapper ${css.floatingWrapper}`}>
        <FloatingPart
          hover={state.hover}
          image={PerchPlaceCard}
          position={{
            marginTop: "0px",
            marginRight: "-40px"
          }}
          rotation="rotateX(25deg) rotateY(25deg)"
          filter="drop-shadow(20px 50px 10px rgba(25, 25, 25, 0.5))"
        ></FloatingPart>
        <FloatingPart
          hover={state.hover}
          image={StrappedUpCard}
          position={{
            marginLeft: "-40px",
            marginTop: "-50px"
          }}
          rotation="rotateX(-25deg) rotateY(25deg)"
          filter="drop-shadow(-20px 50px 10px rgba(25, 25, 25, 0.5))"
        ></FloatingPart>
      </div>
    </div>
  );
};

export default Select;
