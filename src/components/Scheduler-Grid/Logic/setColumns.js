const setColumns = (
  { startDay, startHour, startMinutes },
  { endDay, endHour, endMinutes }
) => {
  if (startDay === endDay) {
    const hourDifference = endHour + endMinutes - (startHour + startMinutes);

    const squares = [];
    let count = 0;
    while (count < numberOfSquares) {
      squares.push(count);
      count++;
    }
  } else {
    const dayDifference = endDay - startDay - 1;
    const hourDifference =
      24 -
      (startHour + startMinutes) +
      (endHour + endMinutes) +
      dayDifference * 24;

    const numberOfSquares = amountOfColumns * 5;
    const squares = [];
    let count = 0;
    while (count < numberOfSquares) {
      squares.push(count);
      count++;
    }
  }
};

export default setColumns;
