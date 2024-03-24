// function getNextFridayThe13th(date) {
//   result = date;
//   //   while (true){
//   if (result.getDay() === 4 && result.day === 4) return result;
//   result = result.setDay();
//   //  }
// }

/**
 * Date('2024-02-03T00:00:00Z') => Date('2024-02-09T00:00:00Z')
 * Date('2024-02-13T00:00:00Z') => Date('2024-02-16T00:00:00Z')
 * Date('2024-02-16T00:00:00Z') => Date('2024-02-23T00:00:00Z')
 */
function getNextFriday(date) {
  let result = new Date(Date.parse(date));
  result.setUTCHours(0);
  console.log(result);
  // let result = new Date(Date.parse(date));
  while (true) {
    //  console.log(result, result.getDate());
    result = new Date(
      result.getFullYear(),
      result.getMonth(),
      result.getDate() + 2
    );
    result.setUTCHours(0);
    if (result.getUTCDay() === 5) return result;
    // console.log(result, result.getFullYear());
  }
}
console.log(getNextFriday(new Date('2024-02-03T00:00:00Z')));

//  new Date( Date.parse('2012-01-26T13:51:50.417-07:00')
