const calculateActualLast = endHour => {
  let hour = parseInt(endHour.substring(0, endHour.search(":")));
  if (endHour.includes("a.m")) {
    if (endHour === 12) {
      return "1:00 a.m";
    } else {
      return hour === 12 ? "1:00 p.m" : `${hour + 1}:00 a.m`;
    }
  } else {
    if (endHour === 11) {
      return "12:00 a.m";
    } else {
      return hour === 12 ? "1:00 a.m" : `${hour + 1}:00 p.m`;
    }
  }
};

export default calculateActualLast;
