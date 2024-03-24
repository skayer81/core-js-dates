// /**
//  * Returns the week number of the year for a given date.
//  * The first week is the one that falls on January 1.
//  *
//  * @param {Date} date - The date for which to find the week number.
//  * @return {number} - The week number of the year.
//  *
//  * @example:
//  * Date(2024, 0, 3) => 1
//  * Date(2024, 0, 31) => 5
//  * Date(2024, 1, 23) => 8
//  */
// function getWeekNumberByDate(date) {
//   console.log(date);
//   //  let days = 0;
//   let start = new Date(date.getUTCFullYear(), 0); // date.getUTCMonth();
//   let days = (date - start) / 1000 / 60 / 60 / 24 + 1;
//   let d = start.getUTCDay();

//   console.log(days, d, 'дни');
//   return Math.trunc((days + d) / 7) + 1;
// }

// console.log(getWeekNumberByDate(new Date(2024, 0, 31)), 5);
// console.log(getWeekNumberByDate(new Date(2024, 0, 3)), 1);
// console.log(getWeekNumberByDate(new Date(2024, 1, 23)), 8);
// console.log(getWeekNumberByDate(new Date(2023, 1, 23)), 9);
// console.log(getWeekNumberByDate(new Date(2022, 2, 22)), 13);
