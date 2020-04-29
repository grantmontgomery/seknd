const setGridRows = (squaresLength) => {
  const gridWidth = squaresLength / 5;
  let row = 1;
  let rowStartIndex = 0;

  const rowsIndex = [];

  while (gridWidth * row <= squaresLength) {
    let rowIndices = [];
    while (rowStartIndex < gridWidth * row) {
      rowIndices.push(rowStartIndex);
      rowStartIndex++;
    }
    rowsIndex.push(rowIndices);
    row++;
  }
  return rowsIndex;
};

export default setGridRows;
