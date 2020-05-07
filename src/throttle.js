const throttle = (callback, delay) => {
  setInterval(() => callback(), delay);
};

//   const throttledEventHandler = (event) => {
//     storedEvent = event;

//     const shouldHandleEvent = !throttleTimeout;

//     if (shouldHandleEvent) {
//       callback(storedEvent);
//       storedEvent = null;
//       throttleTimeout = setTimeout(() => {
//         throttleTimeout = null;
//         if (storedEvent) {
//           throttledEventHandler(storedEvent);
//         }
//       }, delay);
//     }
//   };

export default throttle;
