const setHoursSections = ({ start, end }) => {
  const { startDate, startTime } = start;
  const { endDate, endTime } = end;

  let startHour = startDate.getHours();
  let endHour = endDate.getHours();

  console.log(endHour);

  const timeDifference = endTime - startTime;
  const hoursCount = Math.floor(timeDifference / 3600000) + 1;
  const endToCount = hoursCount - endHour;

  const hours = [];
  let count = 0;

  let endHourCount = 1;

  while (count < hoursCount) {
    if (startHour <= 24) {
      if (startHour > 12) {
        startHour !== 24
          ? hours.push(`${startHour - 12}:00 p.m`)
          : hours.push("12:00 a.m");
      } else if (startHour === 12) {
        hours.push("12:00 p.m");
      } else {
        hours.push(`${startHour}:00 a.m`);
      }
      startHour++;
      count++;
    } else {
      if (count < hoursCount - endHour) {
        const dayHours = [
          "12:00 a.m",
          "1:00 a.m",
          "2:00 a.m",
          "3:00 a.m",
          "4:00 a.m",
          "5:00 a.m",
          "6:00 a.m",
          "7:00 a.m",
          "8:00 a.m",
          "9:00 a.m",
          "10:00 a.m",
          "11:00 a.m",
          "12:00 p.m",
          "1:00 p.m",
          "2:00 p.m",
          "3:00 p.m",
          "4:00 p.m",
          "5:00 p.m",
          "6:00 p.m",
          "7:00 p.m",
          "8:00 p.m",
          "9:00 p.m",
          "10:00 p.m",
          "11:00 p.m",
          "12:00 a.m"
        ];

        count += 25;
      } else {
        if (endHourCount <= endHour) {
          hours.push(`${endHourCount}:00 a.m`);
        } else if (endHourCount === 12) {
          hours.push("12:00 p.m");
        } else {
          hours.push(`${endHourCount - 12}:00 p.m`);
        }

        endHourCount++;
        count++;
      }
    }
  }
  return hours;
};

export default setHoursSections;
