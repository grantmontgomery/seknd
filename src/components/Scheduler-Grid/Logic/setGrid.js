const repeatString = (string, number) => {
  let newString = "";
  while (number > 0) {
    newString += string;
    number--;
  }
  return newString;
};

const squareList = numSquares => {
  let count = 0;
  const squares = [];
  while (count < numSquares) {
    squares.push("square");
    count++;
  }
  return squareList;
};

const setGrid = (startTime, endTime) => {
  const timeDifference = endTime - startTime;
  const hours = Math.floor(timeDifference / 3600000);
  const minutes = (timeDifference - 3600000 * hours) / 1800000;

  const numColumns = hours * 2 + minutes + 4;
  const width = `${numColumns * 100}px`;
  const numSquares = numColumns * 5;

  let count = 0;
  const squares = [];
  while (count < numSquares) {
    squares.push("square");
    count++;
  }

  let gridColumnSize = " 100px";
  let rowString = ` "${repeatString(" square", numColumns)}"`;
  let firstRow = ` "${repeatString(" header", numColumns)}"`;
  let gridTemplateAreas = `${firstRow}${repeatString(rowString, 5)}`;
  let gridTemplateColumns = ` ${repeatString(gridColumnSize, numColumns)}`;

  console.log(gridTemplateAreas);

  return { gridTemplateAreas, gridTemplateColumns, width, squares };
};

export default setGrid;
