// /**
//  * Returns the date of the next Friday from a given date.
//  *
//  * @param {Date} date
//  * @return {Date}
//  *
//  * @example:
//  * Date('2024-02-03T00:00:00Z') => Date('2024-02-09T00:00:00Z')
//  * Date('2024-02-13T00:00:00Z') => Date('2024-02-16T00:00:00Z')
//  * Date('2024-02-16T00:00:00Z') => Date('2024-02-23T00:00:00Z')
//  */

// function getNextFriday(date) {
//   //  console.log(date);
//   // const options = {
//   //   hour12: false,
//   //   timeZone: 'UTC',
//   // };
//   const result = new Date(date);
//   console.log(result);
//   // let result = new Date(Date.parse(date));
//   // result.setUTCHours(0);
//   while (result.getUTCDay() !== 5) {
//     // uDate.set;
//     result.setUTCDate(result.getUTCDate() + 1);
//     //    result.setUTCHours(0);
//     //  if (result.getUTCDay() === 5) return result;
//   }

//   // return new Intl.DateTimeFormat('en-US', options).format(
//   //   new Date(Date.parse(date))
//   // );
//   return result;
// }

// console.log(getNextFriday(new Date('2024-02-03T00:00:00Z')));
