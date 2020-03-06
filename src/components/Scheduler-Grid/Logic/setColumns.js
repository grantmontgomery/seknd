const setColumns = () => {};

export default setColumns;

//if (startDate !== "" && endDate !== "") {
//     if (startDay > endDay) {
//         alert("Set start date to a day before or day of.");
//       } else if (startDay === endDay) {
//         if (startHour > endHour) {
//           alert("Switch times.");
//         } else if (startHour === endHour) {
//           if (startMinutes > endMinutes) {
//             alert("Switch times.");
//           } else {
//             const hourDifference =
//               endHour + endMinutes - (startHour + startMinutes);
//             const width = (hourDifference + 1) * 200;
//             const amountOfColumns = width / 100;
//             const numberOfSquares = amountOfColumns * 7;
//             const squares = [];
//             let count = 0;
//             while (count < numberOfSquares) {
//               squares.push(count);
//               count++;
//             }

//             this.setState({
//               hourDifference,
//               squares,
//               loadApp: true
//             });
//           }
//         } else {
//           const hourDifference =
//             endHour + endMinutes - (startHour + startMinutes);
//           const width = (hourDifference + 1) * 200;
//           const amountOfColumns = width / 100;
//           const numberOfSquares = amountOfColumns * 7;
//           const squares = [];
//           let count = 0;
//           while (count < numberOfSquares) {
//             squares.push(count);
//             count++;
//           }

//           this.setState({
//             hourDifference,
//             squares,
//             loadApp: true
//           });
//         }
//       } else {
//         const dayDifference = endDay - startDay - 1;
//         const hourDifference =
//           24 -
//           (startHour + startMinutes) +
//           (endHour + endMinutes) +
//           dayDifference * 24;
//         const width = (hourDifference + 1) * 200;
//         const amountOfColumns = width / 100;
//         const numberOfSquares = amountOfColumns * 7;
//         const squares = [];
//         let count = 0;
//         while (count < numberOfSquares) {
//           squares.push(count);
//           count++;
//         }
//         this.setState({
//           hourDifference,
//           squares,
//           loadApp: true
//         });
//       }
//     } else {
//       alert("Must enter in a start and end date.");
//     }
//   };
