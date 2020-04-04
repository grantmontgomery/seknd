const scrollDifference = (max, min, intersectionRatio) => {
  // let difference = max - min > 0 ? max - min : -1 * (max - min);
  let difference = max - min;
  let intervalDifference = difference / (50 / 2);
  let stepDifference = (50 / 2) * (1 - intersectionRatio);

  return Math.floor(max - stepDifference * intervalDifference);
};

export default scrollDifference;

// const observer = useRef(
//   new IntersectionObserver(
//     entries => {
//       for (let i = 0; i < entries.length; i++) {
//         if (entries[i].target.className.includes("headerScroll")) {
//           const { intersectionRatio } = entries[i];
//           if (intersectionRatio >= 0.6) {
//             dispatch(homeScrollActions("DISPLAYWRAPPER_DEFAULT"));
//             dispatch(homeScrollActions("BACKGROUND_ACTION_START"));
//             dispatch(navActions("NAV_HOME"));
//             dispatch(homeScrollActions("DEVICES_ENTER"));
//             dispatch(homeScrollActions("INTRO_STATIC"));
//           } else if (intersectionRatio < 0.6 && intersectionRatio > 0.25) {
//             dispatch(navActions("NAV_HOME"));
//             dispatch(homeScrollActions("DISPLAYWRAPPER_DEFAULT"));
//             dispatch(
//               homeScrollActions({
//                 type: "BACKGROUND_SCROLL",
//                 payload: {
//                   width: scrollDifference(150, 50, intersectionRatio),
//                   height: scrollDifference(200, 75, intersectionRatio),
//                   left: scrollDifference(-100, 25, intersectionRatio),
//                   top: scrollDifference(-75, 10, intersectionRatio),
//                   borderRadius: scrollDifference(100, 0, intersectionRatio)
//                 }
//               })
//             );
//           } else {
//             dispatch(homeScrollActions("BACKGROUND_ACTION_END"));
//             dispatch(homeScrollActions("DEVICES_EXIT"));
//             dispatch(homeScrollActions("INTRO_EXIT"));
//             dispatch(
//               homeScrollActions({
//                 type: "DISPLAYWRAPPER_CHANGE",
//                 payload: { display: "flex", flexFlow: "row nowrap" }
//               })
//             );
//             dispatch(navActions("NAV_OTHER"));
//           }
//         } else if (entries[i].target.className.includes("searchScroll")) {
//           const { intersectionRatio } = entries[i];
//           if (intersectionRatio >= 0.35) {
//             dispatch(homeScrollActions("SEARCHWRAPPER_ENTER"));
//             dispatch(
//               homeScrollActions({
//                 type: "SEARCHTEXT_SCROLL",
//                 payload: { opacity: "1", transform: "translateX()" }
//               })
//             );
//             dispatch(
//               homeScrollActions({
//                 type: "SEARCHBOX_SCROLL",
//                 payload: { opacity: "1", transform: "translateX()" }
//               })
//             );
//           } else {
//             dispatch(homeScrollActions("SEARCHWRAPPER_EXIT"));
//           }
//         } else if (entries[i].target.className.includes("selectScroll")) {
//           const { intersectionRatio } = entries[i];
//           if (intersectionRatio >= 0.25) {
//             dispatch(homeScrollActions("SELECT_ENTER"));
//             dispatch(
//               homeScrollActions({
//                 type: "SELECT_PARTS_SCROLL",
//                 payload: {
//                   partOne: { opacity: "1.0", transform: `translateX(${0})` },
//                   partTwo: { opacity: "1.0", transform: `translateX(${0})` }
//                 }
//               })
//             );
//           } else {
//             console.log("select exiting.");
//             dispatch(homeScrollActions("SELECT_EXIT"));
//           }
//         } else if (entries[i].target.className.includes("scheduleScroll")) {
//           const { intersectionRatio } = entries[i];
//           if (intersectionRatio >= 0.35) {
//             dispatch(homeScrollActions("SCHEDULE_ENTER"));
//             dispatch(
//               homeScrollActions({
//                 type: "SCHEDULE_PARTS_SCROLL",
//                 payload: {
//                   grid: { opacity: "1.0", transform: `translateX(${0})` },
//                   piece: { opacity: "1.0", transform: `translateX(${0})` }
//                 }
//               })
//             );
//           } else {
//             dispatch(homeScrollActions("SCHEDULE_EXIT"));
//           }
//         }
//       }
//     },
//     {
//       threshold: [...thresholdRange()],
//       root: null
//     }
//   )
// );
