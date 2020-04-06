import React, { forwardRef } from "react";
import Phone from "../../../../assets/Phone.png";
import Laptop from "../../../../assets/Laptop.png";
import css from "./Devices.css";

const Devices = () => {
  return (
    <div className={`devicesWrapper ${css.devicesWrapper}`}>
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
