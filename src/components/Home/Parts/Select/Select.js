import React, { useState, forwardRef } from "react";
import { useSelector } from "react-redux";
import { Step } from "../Step";
import { FloatingPart } from "../FloatingPart";
import PerchPlaceCard from "../../../../assets/PerchPlaceCard.png";
import StrappedUpCard from "../../../../assets/StrappedUpEventCard.png";
import css from "./Select.css";
import { transform } from "@babel/core";

const Select = ({ render }) => {
  const { selectParts } = useSelector((state) => state.homeScrollStylesReducer);
  const { partOne, partTwo } = selectParts;
  return render === true ? (
    <div className={`selectWrapper ${css.selectWrapper}`}>
      <FloatingPart
        image={StrappedUpCard}
        position={{
          marginLeft: "-10%",
          marginRight: "auto",
          top: "50%",
          ...partOne,
          // transform: "rotateX(-25deg) rotateY(25deg) translateY(-50%)",
          filter: "drop-shadow(-20px 50px 10px rgba(25, 25, 25, 0.5))",
        }}
      ></FloatingPart>

      <div className={`selectTextWrapper ${css.selectTextWrapper}`}>
        <div className={`headerText ${css.headerText}`}>
          Select from the best...
        </div>
        <div className={`descriptionText ${css.descriptionText}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          asperiores repudiandae aspernatur voluptatum impedit excepturi,
          accusantium minus vero neque perferendis mollitia sint ad iure
          ducimus, adipisci quae, quasi dignissimos. Laboriosam?
        </div>
      </div>
      <FloatingPart
        image={PerchPlaceCard}
        position={{
          top: "50%",
          marginRight: "-10%",
          marginLeft: "auto",
          ...partTwo,
          // transform: "rotateX(25deg) rotateY(25deg) translateY(-50%)",
          filter: "drop-shadow(20px 50px 10px rgba(25, 25, 25, 0.5))",
        }}
      ></FloatingPart>
    </div>
  ) : null;
};

export default forwardRef(Select);
