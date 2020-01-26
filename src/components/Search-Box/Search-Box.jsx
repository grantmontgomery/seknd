import React, { useState, useEffect } from "react";
import css from "./Search-Box.css";
import {
  SearchSelector,
  WhereSelector,
  WhenSelector
} from "./Search-Box-Parts";
import { EventsSearch } from "../EventsSearch";
import { PlacesSearch } from "../PlacesSearch";
require("react-datepicker/dist/react-datepicker-cssmodules.css");

const SearchBox = () => {
  const [state, setState] = useState({
    where: "",
    when: "",
    radius: "",
    places: ""
  });
  return (
    <div className={`searchBoxWrapper ${css.searchBoxWrapper}`}>
      <form action="">
        <SearchSelector></SearchSelector>
        <WhereSelector></WhereSelector>
        <WhenSelector></WhenSelector>
        <EventsSearch></EventsSearch>
        <PlacesSearch></PlacesSearch>
      </form>
    </div>
  );
};

export default SearchBox;
