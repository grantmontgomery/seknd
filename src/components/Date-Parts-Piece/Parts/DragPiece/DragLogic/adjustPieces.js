const adjustPieces = (DateParts, dispatch, actions, SquaresLength, squareIndex, endingIndex) => {
    const isInLimits = (overlappedIndex) => {
        if(overlappedIndex + )
    }
    const {squaresActions, partsActions} = actions
    for(let i = 0; i < DateParts.length; i++){
        if(DateParts[i].squareIndex <= endingIndex){
            dispatch(
                partsActions("PART_SQUARE_INDEX", {
                  id: this.partToUse().id,
                  squareIndex: DateParts[i].squ,
                  partStart: timePosition(i, Hours, Squares),
                  partEnd: timePosition(
                    endTimePosition(i, this.partToUse().wrapperWidth),
                    Hours,
                    Squares
                  ),
                  endingIndex: i - 1 + this.partToUse().wrapperWidth / 100,
                  ...findIndexOrder(rows, i),
                })
              )
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
}

export default adjustPieces