import React from "react";
import { useSelector } from "react-redux";
import css from "./Works.css";

const Works = () => {
  const { works } = useSelector((state) => state.homeScrollStylesReducer);
  const { render } = works;
  return render === true ? (
    <div className={`worksWrapper ${css.worksWrapper}`}>
      <div className={`textWrapper ${css.textWrapper}`}>Scroll</div>
      <div className={`scrollLine ${css.scrollLine}`}>
        <div className={`scrollWhite ${css.scrollWhite}`}></div>
      </div>
    </div>
  ) : null;
};

export default Works;

{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.3 55.54">
        <title>Asset 6</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Tracing">
            <polygon points="3.54 55.53 0 52 24.23 27.77 0 3.54 3.54 0 31.3 27.77 3.54 55.53" />
          </g>
        </g>
      </svg>  */
}
