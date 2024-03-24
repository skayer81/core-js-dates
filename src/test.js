// /**
//  * Generates an employee's work schedule within a specified date range, based on a pattern of working and off days.
//  * The start and end dates of the period are inclusive.
//  *
//  * @typedef {{
//  * start: string, // The start date in 'DD-MM-YYYY' format.
//  * end: string    // The end date in 'DD-MM-YYYY' format.
//  * }} DatePeriod
//  *
//  * @param {DatePeriod} period - The start and end dates of the period.
//  * @param {number} countWorkDays - The number of consecutive working days.
//  * @param {number} countOffDays - The number of consecutive days off.
//  * @return {Array<string>} - An array of dates in 'DD-MM-YYYY' format representing the work schedule.
//  *
//  * @example:
//  * { start: '01-01-2024', end: '15-01-2024' }, 1, 3 => ['01-01-2024', '05-01-2024', '09-01-2024', '13-01-2024']
//  * { start: '01-01-2024', end: '10-01-2024' }, 1, 1 => ['01-01-2024', '03-01-2024', '05-01-2024', '07-01-2024', '09-01-2024']
//  */
// function getWorkSchedule(period, countWorkDays, countOffDays) {
//   function getDate(s) {
//     let arr = s.split('-');
//     return new Date(Date.UTC(arr[2], arr[1], arr[0]));
//   }
//   const result = [];
//   const s = getDate(period.start); // Date.parse(period.start);
//   const f = getDate(period.end); //  Date.parse(period.end);
//   //  currentDay = s;
//   let wCounter = 1;
//   while (s <= f) {
//     if (wCounter <= countWorkDays) {
//       wCounter += 1;
//       result.push(
//         `${s.getUTCDate().toString().padStart(2, '0')}-${s.getUTCMonth().toString().padStart(2, '0')}-${s.getUTCFullYear()}`
//       );
//       console.log(s);
//       s.setUTCDate(s.getUTCDate() + 1);
//     } else {
//       wCounter = 1;
//       s.setUTCDate(s.getUTCDate() + countOffDays);
//     }
//   }
//   console.log(result);
//   return result;
//   // throw new Error('Not implemented');
// }

// getWorkSchedule({ start: '01-01-2024', end: '15-01-2024' }, 1, 3);
