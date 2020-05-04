import dateGridReducer from "../../../../../redux/reducers/dateGridReducer";

const adjustPieces = (
  DateParts,
  dispatch,
  actions,
  SquaresLength,
  squareIndex,
  endingIndex
) => {
  const partsOnGrid = DateParts.filter((part) => part.onGrid === true);
  const isInLimits = (overlappedPart) => {
    const { endingIndex, squareIndex } = overlappedPart;
    if (endingIndex + SquaresLength / 5 < SquaresLength) {
      return endingIndex + SquaresLength / 5;
    } else {
    }
  };
  const { squaresActions, partsActions } = actions;
  for (let i = 0; i < partsOnGrid.length; i++) {
    if (
      partsOnGrid[i].squareIndex <= endingIndex &&
      partsOnGrid[i].squareIndex <= squareIndex
    ) {
      dispatch(
        partsActions("PART_SQUARE_INDEX", {
          id: this.partToUse().id,
          squareIndex: partsOnGrid[i].squ,
          partStart: timePosition(i, Hours, Squares),
          partEnd: timePosition(
            endTimePosition(i, this.partToUse().wrapperWidth),
            Hours,
            Squares
          ),
          endingIndex: i - 1 + this.partToUse().wrapperWidth / 100,
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
              squareIndex: i,
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
