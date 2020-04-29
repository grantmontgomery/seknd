const findIndexOrder = (gridRows, startIndex, endIndex) => {
  const indicesOrder = { savedOrderStart: null, savedOrderEnd: null };
  for (let i = 0; i < gridRows.length; i++) {
    if (gridRows[i].includes(startIndex)) {
      indicesOrder.savedOrderStart = gridRows[i].indexOf(startIndex);
      indicesOrder.savedOrderEnd = gridRows[i].indexOf(endIndex);
    }
  }
  return indicesOrder;
};

export default findIndexOrder;
