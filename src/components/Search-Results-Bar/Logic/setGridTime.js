const setGridTime = (startDate, endDate) => {
  const startFormatted = new Date(startDate);
  const endFormatted = new Date(endDate);

  const startDay = startFormatted.getDate();
  const endDay = endFormatted.getDate();
  const startHour = startFormatted.getHours();
  const endHour = endFormatted.getHours();
  let startMinutes = 0;
  let endMinutes = 0;
  if (startFormatted.getMinutes() > 0) {
    startMinutes = 0.5;
  }
  if (endFormatted.getMinutes() > 0) {
    (endMinutes = 0), 5;
  }
};

export default setGridTime;
