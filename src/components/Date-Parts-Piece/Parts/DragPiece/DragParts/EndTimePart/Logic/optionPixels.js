const optionPixels = (options, value) => {
  let pixels = 0;
  for (let i = 0; i < options.length; i++) {
    const timeString = options[i].getAttribute("value");
    if (value === timeString) {
      pixels = options[i].getAttribute("pixels");
    }
  }
  return pixels;
};

export default optionPixels;
