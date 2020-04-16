import React from "react";
import { Link } from "react-router-dom";
import css from "./SearchButton.css";

const SearchButton = ({ event, query, dispatch, searchType, page }) => {
  const nonLinked = () => {
    return (
      <div
        className={`submitButton ${css.submitButton}`}
        onClick={(event) => handleSubmit(event, query, dispatch, searchType)}
      >
        <div className={`submitTitleWrapper ${css.submitTitleWrapper}`}>
          <span className={`submit ${css.submit}`}>SEARCH</span>
        </div>

        <div className={`arrowWrapper ${css.arrowWrapper}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 31.3 55.54"
            className={`arrow ${css.arrow}`}
          >
            <title>Asset 6</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Tracing">
                <polygon points="3.54 55.53 0 52 24.23 27.77 0 3.54 3.54 0 31.3 27.77 3.54 55.53" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  };

  const linked = () => {
    return (
      <Link>
        <div
          className={`submitButton ${css.submitButton}`}
          onClick={(event) => handleSubmit(event, query, dispatch, searchType)}
        >
          <div className={`submitTitleWrapper ${css.submitTitleWrapper}`}>
            <span className={`submit ${css.submit}`}>SEARCH</span>
          </div>

          <div className={`arrowWrapper ${css.arrowWrapper}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 31.3 55.54"
              className={`arrow ${css.arrow}`}
            >
              <title>Asset 6</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Tracing">
                  <polygon points="3.54 55.53 0 52 24.23 27.77 0 3.54 3.54 0 31.3 27.77 3.54 55.53" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </Link>
    );
  };
  const linkToPage = () => {};

  return (
    <div
      className={`submitButton ${css.submitButton}`}
      onClick={(event) => handleSubmit(event, query, dispatch, searchType)}
    >
      <div className={`submitTitleWrapper ${css.submitTitleWrapper}`}>
        <span className={`submit ${css.submit}`}>SEARCH</span>
      </div>

      <div className={`arrowWrapper ${css.arrowWrapper}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.3 55.54"
          className={`arrow ${css.arrow}`}
        >
          <title>Asset 6</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Tracing">
              <polygon points="3.54 55.53 0 52 24.23 27.77 0 3.54 3.54 0 31.3 27.77 3.54 55.53" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SearchButton;
