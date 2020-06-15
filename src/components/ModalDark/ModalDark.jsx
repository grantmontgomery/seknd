import * as React from "react";
import css from "./ModalDark.css";
import { displaySearchType } from "../Search-Box/Logic";
import { useState } from "react";
import { useEffect } from "react";

export const ModalDark = ({ component, displayState }) => {
  const [display, toggleDisplay] = useState("none");

  useEffect(() => {
    switch (component) {
      case "mobileLinks":
        return displayState === "hamburger"
          ? toggleDisplay("block")
          : toggleDisplay("none");
    }
  }, []);

  return (
    <div
      className={`${component} ${css[`${component}`]}`}
      style={{ display }}
    ></div>
  );
};
