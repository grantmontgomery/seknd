import calculateActualFirst from "./calculateActualFirst";
// import calculateActualLast from "./calculateActualLast";

// const timeLogic = ({ hours }) => {
//   if (hours.length !== 0) {
//     let firstHour = hours[0];
//     const iterableHours = [...hours];
//     iterableHours.unshift(calculateActualFirst(firstHour));

//     const squares = document.getElementsByClassName("squareWrapper");

//     for (let i = 0; i < squares.length; i++) {
//       if (squares[i].hasChildNodes()) {
//         console.log(squares[i]);
//       }
//     }
//   }
// };

const timeLogic = () => {
  const squares = document.getElementsByClassName("squareWrapper");

  for (let i = 0; i < squares.length; i++) {
    if (squares[i].children.length > 0) {
      console.log(squares[i]);
    }
  }
};

export default timeLogic;
