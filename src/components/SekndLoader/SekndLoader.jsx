import React from "react";
import css from "./SekndLoader.css";

const SekndLoader = ({ page }) => {
  return (
    <div className={`loaderWrapper ${css.loaderWrapper}`}>
      <div className={`sekndHandWrapper ${css.sekndHandWrapper}`}>
        <div className={`sekndHand ${css.sekndHand}`}></div>
      </div>
    </div>
  );
};

export default SekndLoader;
