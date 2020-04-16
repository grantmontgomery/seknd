const homeToSearch = (
  searchType,
  { radius, location, endDate, startDate, places }
) => {
  switch ((searchType.places, searchType.events)) {
    case searchType.places && !searchType.events:
      return radius !== "" && location !== "" && places !== "" ? true : false;
    case !searchType.places && searchType.events:
      return radius !== "" &&
        location !== "" &&
        endDate !== "" &&
        startDate !== ""
        ? true
        : false;
    case searchType.places && searchType.events:
      return radius !== "" &&
        location !== "" &&
        endDate !== "" &&
        startDate !== "" &&
        places !== ""
        ? true
        : false;
  }
};

export default homeToSearch;
