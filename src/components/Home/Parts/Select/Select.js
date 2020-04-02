import React, { useState, forwardRef } from "react";
import { Step } from "../Step";
import { FloatingPart } from "../FloatingPart";
import PerchPlaceCard from "../../../../assets/PerchPlaceCard.png";
import StrappedUpCard from "../../../../assets/StrappedUpEventCard.png";
import css from "./Select.css";
import { transform } from "@babel/core";

const Select = ({ render }) => {
  return render === true ? (
    <div className={`selectWrapper ${css.selectWrapper}`}>
      <FloatingPart
        image={StrappedUpCard}
        position={{
          marginLeft: "-10%",
          marginTop: "0",
          marginRight: "auto",
          transform: "rotateX(-25deg) rotateY(25deg)",
          filter: "drop-shadow(-20px 50px 10px rgba(25, 25, 25, 0.5))"
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
          marginTop: "0",
          marginRight: "-10%",
          marginLeft: "auto",
          transform: "rotateX(25deg) rotateY(25deg)",
          filter: "drop-shadow(20px 50px 10px rgba(25, 25, 25, 0.5))"
        }}
      ></FloatingPart>
    </div>
  ) : null;
};

export default forwardRef(Select);
