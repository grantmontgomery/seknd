const yelpReviewsTimes = ({ type, parsedStartTime, review_count }) =>
  type === "event" ? parsedStartTime : `${review_count} reviews`;

export default yelpReviewsTimes;
