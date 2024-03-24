/**
 * Returns the week number of the year for a given date.
 * The first week is the one that falls on January 1.
 *
 * @param {Date} date - The date for which to find the week number.
 * @return {number} - The week number of the year.
 *
 * @example:
 * Date(2024, 0, 3) => 1
 * Date(2024, 0, 31) => 5
 * Date(2024, 1, 23) => 8
 */
// function getWeekNumberByDate(date) {
//   const newDate = new Date(
//     Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
//   );
//   const startY = new Date(Date.UTC(date.getFullYear(), 0, 1));
//   // console.log(newDate, startY, date.getDate(), date.getUTCDate());
//   const days = (newDate - startY) / 1000 / 60 / 60 / 24 + 1;

//   const d = startY.getUTCDay();
//   // console.log(days, d);
//   let result = Math.trunc((days - d) / 7);
//   if (d !== 1) {
//     result += 1;
//   }
//   if (newDate.getUTCDay() !== 1) {
//     result += 1;
//   }
//   return result; // Math.trunc((days - d) / 7) + 1;
// }

// console.log(getWeekNumberByDate(new Date(2024, 0, 3)), 1);
// console.log(getWeekNumberByDate(new Date(2024, 0, 31)), 5);
// console.log(getWeekNumberByDate(new Date(2024, 1, 23)), 8);
// console.log(getWeekNumberByDate(new Date(2023, 1, 23)), 9);
// console.log(getWeekNumberByDate(new Date(2022, 2, 22)), 13);
// console.log(getWeekNumberByDate(new Date(2021, 3, 21)), 17);
// console.log(getWeekNumberByDate(new Date(2020, 4, 20)), 21);
// console.log(getWeekNumberByDate(new Date(2019, 5, 23)), 25);
// console.log(getWeekNumberByDate(new Date(2018, 6, 22)), 29);
// console.log(getWeekNumberByDate(new Date(2017, 7, 21)), 35);
// console.log(getWeekNumberByDate(new Date(2016, 8, 20)), 39);
// console.log(getWeekNumberByDate(new Date(2015, 9, 23)), 43);
// console.log(getWeekNumberByDate(new Date(1950, 10, 22)), 48);
