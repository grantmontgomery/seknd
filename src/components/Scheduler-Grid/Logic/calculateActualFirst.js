const calculateActualFirst = firstHour => {
  let hour = parseInt(firstHour.substring(0, firstHour.search(":")));
  if (firstHour.includes("a.m")) {
    if (firstHour === 1) {
      return "12:00 a.m";
    } else {
      return hour === 12 ? "11:00 p.m" : `${hour - 1}:00 a.m`;
    }
  } else {
    if (firstHour === 1) {
      return "12:00 p.m";
    } else {
      return hour === 12 ? "11:00 a.m" : `${hour - 1}:00 p.m`;
    }
  }
};

export default calculateActualFirst;
