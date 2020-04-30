const findIndexOrder = (gridRows, startIndex) => {
  const indicesOrder = { savedOrderStart: null };
  for (let i = 0; i < gridRows.length; i++) {
    if (gridRows[i].includes(startIndex)) {
      indicesOrder.savedOrderStart = gridRows[i].indexOf(startIndex);
    }
  }
  return indicesOrder;
};

export default findIndexOrder;
