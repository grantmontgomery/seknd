const endTime = (startTime, partLength) => {
  const hour = parseInt(startTime.substring(0, startTime.search(":")));

  const minutes = parseInt(
    startTime.substring(startTime.search(":") + 1, startTime.search(" "))
  );

  const amPm = startTime.substring(startTime.search(" ") + 1);

  const hourAdded = (num) => (num += hour > 12 ? num + hour - 12 : num + hour);

  const minutesAdded = (num) => {
    if (num === 30) {
      if (minutes === 30) {
        return "00";
      } else {
        return "30";
      }
    } else {
      return `${minutes}`;
    }
  };

  if (partLength === "1 hour") {
  }
};

export default endTime;
