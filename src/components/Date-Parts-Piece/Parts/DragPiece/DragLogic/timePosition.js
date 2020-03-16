const timePosition = (index, hours, squares) => {
  let hour = "";

  for (let i = 0; i < hours.length; i++) {
    let columnOne = i * 2;
    let columnTwo = columnOne + 1;
    const time = hours[i];

    while (columnTwo < squares.length && columnOne < squares.length) {
      if (columnOne === index) {
        hour = hours[i];
        break;
      } else if (columnTwo === index) {
        hour = `${hours[i].substring(0, hours[i].search(":") + 1)}30${hours[
          i
        ].substring(hours[i].search(" "))}`;
        break;
      } else {
        columnTwo += hours.length * 2;
        columnOne += hours.length * 2;
      }
    }
  }
  return hour;
};

export default timePosition;
