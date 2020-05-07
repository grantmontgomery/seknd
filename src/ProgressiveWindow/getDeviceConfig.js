const getDeviceConfig = (width) => {
  switch (width) {
    case width < 320:
      return "xs";
    case width >= 320 && width < 720:
      return "sm";
    case width >= 720 && width < 1024:
      return "md";
    case width >= 1024:
      return "lg";
    default:
      return "lg";
  }
};

export default getDeviceConfig;
