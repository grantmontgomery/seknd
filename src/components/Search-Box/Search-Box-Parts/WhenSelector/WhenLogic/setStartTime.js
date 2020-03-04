const setStartTime = date => {
  const millisecondsEnd = date.setHours(23) + 1800000;

  if (date.getDate() === new Date().getDate()) {
    return { startMin: new Date().getTime(), startMax: millisecondsEnd };
  } else {
    return { startMin: date.setHours(0), startMax: millisecondsEnd };
  }
};

export default setStartTime;
