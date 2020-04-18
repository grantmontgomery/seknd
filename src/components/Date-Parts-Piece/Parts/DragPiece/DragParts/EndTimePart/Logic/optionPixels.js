const optionPixels = (options, value) => {
  console.log(options);
  console.log(value);
  let pixels = 200;
  for (let i = 0; i < options.length; i++) {
    const timeString = options[i].getAttribute("pixels");
    if (value === timeString) {
      pixels = options[i].attributes[1].value;
    }
  }
  return pixels;
};

export default optionPixels;
