import calculateActualFirst from "./calculateActualFirst";
// import calculateActualLast from "./calculateActualLast";

const timeLogic = ({ hours }) => {
  if (hours.length !== 0) {
    let firstHour = hours[0];
    const iterableHours = [...hours];

    iterableHours.unshift(calculateActualFirst(firstHour));

    console.log(iterableHours);

    const squares = document.getElementsByClassName("squareWrapper");
  }
};

export default timeLogic;
