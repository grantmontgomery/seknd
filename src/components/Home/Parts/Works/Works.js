import React from "react";
import { useSelector } from "react-redux";
import css from "./Works.css";

const Works = () => {
  const { works } = useSelector(state => state.homeScrollStylesReducer);
  const { render } = works;
  return render === true ? (
    <div className={`worksWrapper ${css.worksWrapper}`}>
      <div className={`textWrapper ${css.textWrapper}`}>Scroll</div>

      <div className={`scrollLine ${css.scrollLine}`}>
        {/* <div className={`scrollBackground ${css.scrollBackground}`}></div> */}
        <div className={`scrollWhite ${css.scrollWhite}`}></div>
      </div>

      <div className={`arrowWrapper ${css.arrowWrapper}`}>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 512.011 512.011"
        >
          <g>
            <g>
              <path
                d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0
			s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667
			C514.096,145.416,514.096,131.933,505.755,123.592z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
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
