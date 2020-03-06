const setGrid = (startTime, endTime) => {
  const timeDifference = endTime - startTime;
  const hours = Math.floor(timeDifference / 3600000);
  const minutes = (timeDifference - 3600000 * hours) / 1800000;

  const numColumns = hours * 2 + minutes;
  const width = numColumns * 100;
  const numSquares = numColumns * 5;

  return { numColumns, numSquares, width };
};

export default setGrid;
