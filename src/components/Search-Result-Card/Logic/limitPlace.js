const limitPlace = venue => {
  if (venue.length > 21) {
    if (venue.includes(" ") === true) {
      let splittedVenue = venue.split(" ");

      while (splittedVenue.join(" ").length > 21) {
        splittedVenue.pop();
      }

      let limitedVenue = splittedVenue.join(" ");

      return limitedVenue + "...";
    } else {
      return venue.slice(0, 18) + "...";
    }
  } else {
    return venue;
  }
};

export default limitPlace;
