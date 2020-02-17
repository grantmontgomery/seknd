const limitVenue = venue => {
  if (venue.length > 27) {
    if (venue.includes(" ") === true) {
      let splittedVenue = venue.split(" ");

      while (splittedVenue.join(" ").length > 27) {
        splittedVenue.pop();
      }

      let limitedVenue = splittedVenue.join(" ");

      return limitedVenue + "...";
    } else {
      return venue.slice(0, 24) + "...";
    }
  } else {
    return venue;
  }
};

export default limitVenue;
