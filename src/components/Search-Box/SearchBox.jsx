import React, { useState, useEffect } from "react";
import css from "./SearchBox.css";
import {
  SearchSelector,
  WhereSelector,
  WhenSelector,
  SearchButton,
} from "./Search-Box-Parts";
import { useDispatch, useSelector } from "react-redux";
import { handleSubmit, displaySearchType } from "./Logic";
import { CSSTransition, TransitionGroup } from "react-transition-group";

require("react-datepicker/dist/react-datepicker-cssmodules.css");

const SearchBox = ({ componentLocation, searchBoxNav, setMobileState }) => {
  const searchType = useSelector((state) => state.resultsReducer);
  const { searchBox } = useSelector((state) => state.homeScrollStylesReducer);

  const dispatch = useDispatch();
  let [query, setQuery] = useState({
    eventsCategory: "",
    radius: "",
    componentLocation: "",
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

  const homePageStyles = () => {
    return componentLocation === "homePage" ? searchBox : null;
  };

  return (
    <React.Fragment>
      <div
        className={`searchBoxWrapper ${
          css.searchBoxWrapper
        } ${componentLocation} ${css[`${componentLocation}`]} ${searchBoxNav} ${
          css[`${searchBoxNav}`]
        }`}
        style={homePageStyles()}
      >
        <form
          action=""
          onSubmit={(event) => handleSubmit(event, query, dispatch, searchType)}
        >
          <SearchSelector
            componentLocation={componentLocation}
          ></SearchSelector>

          <WhereSelector
            componentLocation={componentLocation}
            location={location}
            radius={radius}
            handleQuery={handleQuery}
          ></WhereSelector>

          <WhenSelector
            componentLocation={componentLocation}
            startDate={startDate}
            endDate={endDate}
            handleQuery={handleQuery}
          ></WhenSelector>

          {displaySearchType(
            handleQuery,
            eventsCategory,
            places,
            searchType,
            componentLocation
          )}
          <SearchButton
            query={query}
            searchType={searchType}
            componentLocation={componentLocation}
          ></SearchButton>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SearchBox;
