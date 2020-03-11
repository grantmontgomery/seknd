const calculateActualLast = endHour => {
  let hour = parseInt(endHour.substring(0, endHour.search(":")));
  if (endHour.includes("a.m")) {
    if (hour === 11) {
      return "12:00 p.m";
    } else {
      return hour === 12 ? "1:00 a.m" : `${hour + 1}:00 a.m`;
    }
  } else {
    return hour === 12 ? "1:00 a.m" : `${hour + 1}:00 p.m`;
  }
};

export default calculateActualLast;
