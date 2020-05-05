const adjustPieces = ({
  DateParts,
  dispatch,
  actions,
  SquaresLength,
  squareIndex,
  endingIndex,
}) => {
  const { squaresActions, partsActions } = actions;
  const partsOnGrid = DateParts.filter((part) => part.onGrid === true);
  for (let i = 0; i < partsOnGrid.length; i++) {
    if (
      partsOnGrid[i].squareIndex <= endingIndex &&
      partsOnGrid[i].squareIndex <= squareIndex
    ) {
      if(partsOnGrid[i].endingIndex + SquaresLength/5){

      
      dispatch(
        partsActions("PART_SQUARE_INDEX", {
          id: partsOnGrid[i].id,
          squareIndex: partsOnGrid[i].squareIndex + SquaresLength/5,
          partStart: timePosition(partsOnGrid[i].squareIndex + SquaresLength/5, Hours, Squares),
          partEnd: timePosition(
            endTimePosition(partsOnGrid[i].squareIndex + SquaresLength/5, this.partToUse().wrapperWidth),
            Hours,
            Squares
          ),
          endingIndex: i - 1 + partsOnGrid[i].wrapperWidth / 100,
          ...findIndexOrder(rows, i),
        })
      );
      dispatch(
        squaresActions({
          type: "ADD_PART_TO_SQUARE",
          payload: {
            part: {
              ...this.partToUse(),
              onGrid: true,
              squareIndex: isInLimits(),
              partStart: timePosition(i, Hours, Squares),
              partEnd: timePosition(
                endTimePosition(i, this.partToUse().wrapperWidth),
                Hours,
                Squares
              ),
              endingIndex: i - 1 + this.partToUse().wrapperWidth / 100,
              ...findIndexOrder(rows, i),
            },
            index: i,
          },
        })
      );
      dispatch(
        squaresActions({
          type: "REMOVE_PART_FROM_SQUARE",
          payload: { squareIndex: this.partToUse().squareIndex },
        })
      );
    }
  }
};

export default adjustPieces;
