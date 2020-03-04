const setGridTime = (startDate, endDate) => {
  const startFormatted = new Date(startDate);
  const endFormatted = new Date(endDate);

  const startDay = startFormatted.getDate();
  const endDay = endFormatted.getDate();
  const startHour = startFormatted.getHours();
  const endHour = endFormatted.getHours();
  const startMinutes = startFormatted.getMinutes() > 0 ? 0.5 : 0;
  const endMinutes = endFormatted.getMinutes() > 0 ? 0.5 : 0;

  //   if(startDay !== endDay){
  //     if(startHour)
  //   }
};

export default setGridTime;
