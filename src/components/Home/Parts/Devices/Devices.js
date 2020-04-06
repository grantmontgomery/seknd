import React, { forwardRef } from "react";
import Phone from "../../../../assets/Phone.png";
import Laptop from "../../../../assets/Laptop.png";
import { useSelector } from "react-redux";
import css from "./Devices.css";

const Devices = () => {
  const { devices } = useSelector((state) => state.homeScrollStylesReducer);
  return (
    <div
      className={`devicesWrapper ${css.devicesWrapper}`}
      style={{ ...devices }}
    >
      <div className={`laptopWrapper ${css.laptopWrapper}`}>
        <img src={`${Laptop}`} alt="" />
      </div>
      <div className={`phoneWrapper ${css.phoneWrapper}`}>
        <img src={`${Phone}`} alt="" />
      </div>
    </div>
  );
};

export default forwardRef(Devices);
