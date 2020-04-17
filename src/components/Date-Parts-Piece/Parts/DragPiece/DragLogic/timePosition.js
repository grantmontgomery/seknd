const timePosition = (index, hours, squares) => {
  const newHours = [...hours];

  let firstHour = newHours[0].substring(0, newHours[0].search(":"));
  let amPm = newHours[0].substring(newHours[0].search(" "));

  if (firstHour === "1") {
    newHours.unshift(`12:00 ${amPm}`);
  } else if (firstHour === "12") {
    let elevenAmPm = amPm === "a.m" ? "p.m" : "a.m";
    newHours.unshift(`11:00 ${elevenAmPm}`);
  } else {
    newHours.unshift(`${parseInt(firstHour) - 1}:00${amPm}`);
  }

  let hour = "";

  for (let i = 0; i < newHours.length; i++) {
    let columnOne = i * 2;
    let columnTwo = columnOne + 1;
    const time = newHours[i];

    while (columnTwo < squares.length && columnOne < squares.length) {
      if (columnOne === index) {
        hour = newHours[i];
        break;
      } else if (columnTwo === index) {
        hour = `${newHours[i].substring(
          0,
          newHours[i].search(":") + 1
        )}30${newHours[i].substring(newHours[i].search(" "))}`;
        break;
      } else {
        columnTwo += newHours.length * 2;
        columnOne += newHours.length * 2;
      }
    }
  }
  return hour;
};

export default timePosition;
