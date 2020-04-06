import React, { useState, useEffect } from "react";
import css from "./SearchBox.css";
import {
  SearchSelector,
  WhereSelector,
  WhenSelector,
} from "./Search-Box-Parts";
import { useDispatch, useSelector } from "react-redux";
import { handleSubmit, displaySearchType } from "./Logic";
import { CSSTransition, TransitionGroup } from "react-transition-group";

require("react-datepicker/dist/react-datepicker-cssmodules.css");

const SearchBox = ({ page }) => {
  const searchType = useSelector((state) => state.resultsReducer);
  const { searchBox } = useSelector((state) => state.homeScrollStylesReducer);

  const dispatch = useDispatch();
  let [query, setQuery] = useState({
    eventsCategory: "",
    radius: "",
    location: "",
    startTime: 0,
    endTime: 0,
    endDate: "",
    startDate: "",
    places: "",
    startFormatted: "",
    endFormatted: "",
    unixStartDate: "",
    unixEndDate: "",
    ticketMasterCategories: "",
    yelpCategories: "",
  });

  let [style, setStyle] = useState("");

  const handleQuery = (input) => {
    setQuery((query) => ({
      ...query,
      ...input,
    }));
  };

  useEffect(() => {
    setQuery(
      (query = {
        eventsCategory: "",
        radius: "",
        location: "",
        endDate: "",
        startDate: "",
        places: "",
        startFormatted: "",
        endFormatted: "",
        unixStartDate: "",
        unixEndDate: "",
        ticketMasterCategories: "",
        yelpCategories: "",
      })
    );
    page === "home" ? setStyle("HomePage") : setStyle("SearchPage");
  }, []);

  const {
    location,
    radius,
    endDate,
    startDate,
    places,
    eventsCategory,
  } = query;

  const { opacity } = searchBox;

  return (
    <div
      className={`searchBoxWrapper ${css.searchBoxWrapper} ${style} ${
        css[`${style}`]
      }`}
      style={{ opacity: `${page === "home" ? opacity : "1"}` }}
    >
      <form
        action=""
        onSubmit={(event) => handleSubmit(event, query, dispatch, searchType)}
      >
        <SearchSelector style={style} page={page}></SearchSelector>

        <WhereSelector
          location={location}
          radius={radius}
          handleQuery={handleQuery}
          style={style}
        ></WhereSelector>

        <WhenSelector
          style={style}
          startDate={startDate}
          endDate={endDate}
          handleQuery={handleQuery}
        ></WhenSelector>

        {displaySearchType(
          handleQuery,
          eventsCategory,
          places,
          searchType,
          style
        )}

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
      </form>
    </div>
  );
};

export default SearchBox;
